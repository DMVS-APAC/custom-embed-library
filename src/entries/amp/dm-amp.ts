import DmManager from '../../dm/dm-manager';
import { waitFor } from '../../utilities/wait-for';

declare global {
    interface Window {
        WDMObject: any;
        cpe: any;
        AmpVideoIframe: any;
    }
}

/**
 * Waiting for iframe ready
 */
const waitForIframeReady = setInterval ( () => {
    // console.log(window.AmpVideoIframe = window.AmpVideoIframe || []);
    if (window.AmpVideoIframe = window.AmpVideoIframe || []) {
        clearInterval(waitForIframeReady);
        (window.AmpVideoIframe = window.AmpVideoIframe || []).push(
            onAmpIntegrationReady
        );
    }
}, 100);

/**
 * Integrate with amp
 */
const onAmpIntegrationReady = (ampIntegration) => {
    console.log("Kok bisa?");
    const meta = ampIntegration.getMetadata();

    console.log('Sini?', ampIntegration);

    fetch(meta.sourceUrl)
        .then( (res) => {
            return res.text();
        })
        .then( (html) => {
            const keywords = html.match(`<title>(.*?)</title>`);

            // init();
            // Tell amp that player is ready, so loader will be removed
            ampIntegration.postEvent("canplay");
        });
}
// const init = async () => {
//
//     // Wait `.dm-player` to be ready first before do everything
//     await waitFor( () => document.querySelectorAll('.dm-player').length > 0, 500, 2000, "Timeout to get DM placeholder");
//     const el: NodeListOf<HTMLDivElement> = document.querySelectorAll('.dm-player');
//
//     new DmManager(el);
// };

