import infMultiplayer from "./Interfaces/infMultiPlayer";
import infPlayer from "./Interfaces/infPlayer";

import { sleep, waitFor } from "../Libraries/Utilities/wait-for";

export default class PlayerEventsManager {
    private players: any[] = [];
    private noFill: boolean = true;
    private adPlaying: string = '';
    private multiplayerParams: infMultiplayer = null;
    private playerParams: infPlayer = null;

    public constructor(playerParams: infPlayer, multiplayer: infMultiplayer) {
        this.videoEvents();

        this.playerParams = playerParams;
        this.multiplayerParams = multiplayer;
    }

    /**
     * Listen to video events from Dailymotion player
     */
    private async videoEvents() {
        // Ignore 'cpeready' event because this event is from outside the script
        // @ts-ignore
        window.addEventListener('cpeready', ({ detail: { players } }) => {

            this.players = players;

            for (let i=0; i < players.length; i++) {
                const player = players[i];

                player.addEventListener('videochange', async (e) => {
                    const video = player.video;
                    const videoUpdated = new CustomEvent('dm-video-updated', { detail: { videoId: video.videoId }})
                    document.dispatchEvent(videoUpdated);
                });

                player.addEventListener('ad_start', (e) => {
                    this.noFill = false;
                });

                /**
                 * Listen to an ad_play
                 *
                 * - Cover others player when the ad is played
                 */
                player.addEventListener('ad_play', (e) => {
                    if (this.adPlaying === '') {
                        this.adPlaying = player.id;

                        // Disable the player that not playing yet
                        if (this.multiplayerParams.adCoverPlay === true) {
                            this.toggleDisable();
                        }

                        // Toggle playing video and hide the PiP
                        if (this.multiplayerParams.closePip === true) {
                            this.togglePlay(player.id);
                        }
                    }
                });

                /**
                 * Listen to an ad_end event
                 *
                 * - Remove player cover when the ad is ended
                 */
                player.addEventListener('ad_end', (e) => {
                    if (this.adPlaying !== '') {
                        this.adPlaying = '';

                        // Toggle disabled player
                        if (this.multiplayerParams.adCoverPlay) {
                            this.toggleDisable();
                        }
                    }
                });

                /**
                 * Listening to playing event
                 *
                 * - Close the PiP if there are multiple players and the closePip is true
                 */
                player.addEventListener('playing', (e) => {
                    if (this.multiplayerParams.closePip === true) {
                        this.togglePlay(player.id);
                    }
                });

                /**
                 * Listen to video end, and process the next thing
                 * It will load new video from the playlist
                 */
                player.addEventListener('end', (e) => {
                    const videoEnd = new CustomEvent("dm-video-end", {detail: player.video.videoId});
                    document.dispatchEvent(videoEnd);
                });

                /**
                 * Listen to `playback_ready` to show the player
                 */
                player.addEventListener('playback_ready', async (e) => {
                    const dmPlayer = player.parentNode.parentNode.parentNode;

                    /**
                     * It's only to show video when ad is filled
                     *
                     * Because we don't showing the video at first, the video won't play anymway.
                     * So we play it programmatically via JS and start to listen to `waitForAdStart`
                     * to listen to ad request
                     */
                    if (this.playerParams.showAdOnly === true) {
                        dmPlayer.classList.add('dm-wait-for-ad');
                        player.play();
                        this.waitForAdStart();
                    } else {
                        const showPlayer = new CustomEvent('dm-show-player');
                        document.dispatchEvent(showPlayer);
                    }
                });

                /**
                 * Handle player error as well to avoid bad UX
                 */
                player.addEventListener('error', (e) => {
                    console.log(e);
                });
            }
        });

        /**
         * Waiting for the players ready first before listen to the events
         */
        await  waitFor( () => this.players[0] !== undefined, 500, 120000, 'Timeout waiting for players');

        /**
         * Listen to PiP close to pause the video player
         */
        // @ts-ignore
        window.addEventListener('cpepipclose', ({ detail: { player } }) => {
            // Do pause when cpe PiP is closed
            player.pause();
        });

        /**
         * Listen to slide changes to set the video to play
         */
        // TODO: support multiplayer for next development
        document.addEventListener('dm-slide-changes', ( e: Event) => {
            // @ts-ignore
            this.players[0].load({ video: e.detail});
        });

        /**
         * Destroy the player if there is no ad to serve
         */
        document.addEventListener('dm-destroy-player', (e: Event) => {
            // @ts-ignore
            this.players[0].parentNode.parentNode.parentNode.remove(); // Get dm-player first
        });

        /**
         * Add new class `dm-playback-ready` to show the player
         */
        document.addEventListener('dm-show-player', (e: Event) => {
            this.players[0].parentNode.parentNode.parentNode.classList.add('dm-playback-ready');
        });
    }

    /**
     * Wait and check if noFill is true or not.
     * This function is related to `ad_start` listener as well
     */
    private async waitForAdStart() {
        // Waiting for 1 second to interact with ad
        await sleep(1000);

        /**
         * noFill means no ad to serve
         * It will send a custom event that let
         * the script continue show the player or destroy it
         */
        if ( this.noFill === true ) {
            const destroyPlayer = new CustomEvent('dm-destroy-player');
            document.dispatchEvent(destroyPlayer);
        } else {
            const showPlayer = new CustomEvent('dm-show-player');
            document.dispatchEvent(showPlayer);
        }
    }

    /**
     * Toggle play and remove all PiP active
     *
     * @param playerId
     */
    private togglePlay(playerId: string): void {

        // Check every player available
        for (let i=0; i < this.players.length; i++) {

            // close the PiP if other player is start playing
            if (this.players[i].id !== playerId) {
                const parent = this.players[i].parentNode;
                this.players[i].pause();
                parent.classList.remove('pip');
            }
        }

    }

    /**
     * Add cover to others player to be not clickable by the user
     */
    private toggleDisable(): void {

        // Check every player available
        for (let i=0; i < this.players.length; i++) {

            // get parent player
            const parent = this.players[i].parentNode;

            if (this.adPlaying !== '' && this.adPlaying !== this.players[i].id) {
                parent.classList.add('dm-disabled');
            } else {
                parent.classList.remove('dm-disabled');
            }
        }
    }
}