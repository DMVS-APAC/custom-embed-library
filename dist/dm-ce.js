/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dm-embed.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/main.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dm-player {\n  --dm-video-align: center;\n  --dm-video-margin: 8px 0;\n  --dm-video-style: normal;\n  --dm-video-color: inherit;\n  --dm-video-size: inherit;\n  --dm-video-weight: inherit;\n  --dm-title-align: center;\n  --dm-title-margin: 8px 0;\n  --dm-title-style: italic;\n  --dm-title-color: inherit;\n  --dm-title-size: inherit;\n  --dm-title-weight: inherit; }\n\n.dm__pre-video-title {\n  text-align: var(--dm-video-align) !important;\n  margin: var(--dm-video-margin) !important;\n  font-style: var(--dm-video-style) !important;\n  color: var(--dm-video-color) !important;\n  font-size: var(--dm-video-size) !important;\n  font-weight: var(--dm-video-weight) !important; }\n\n.dm__video-title {\n  text-align: var(--dm-title-align) !important;\n  margin: var(--dm-title-margin) !important;\n  font-style: var(--dm-title-style) !important;\n  color: var(--dm-title-color) !important;\n  font-size: var(--dm-title-size) !important;\n  font-weight: var(--dm-title-weight) !important; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/dm-player/dm-player.ts":
/*!************************************!*\
  !*** ./src/dm-player/dm-player.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/get-query-params */ "./src/utilities/get-query-params.ts");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
// Libraries

// Styles

var DmPlayer = /** @class */ (function () {
    function DmPlayer(rootEls) {
        this.rootEls = null;
        this.playerParams = null;
        this.searchParams = null;
        this.videoParams = null;
        // Showing debug console that need to check
        this.debugMode = false;
        this.rootEls = rootEls;
        if (Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != null) {
            this.debugMode = Object(_utilities_get_query_params__WEBPACK_IMPORTED_MODULE_0__["default"])('dmdebug') != 'false';
        }
        this.addEventListeners();
        this.registerNewEvents();
        this.extractAttrs();
    }
    DmPlayer.prototype.addEventListeners = function () {
        var self = this;
        /**
         * Listen to `dm-api-ready` to run `loadDmPlayer` to construct the player
         */
        document.addEventListener('dm-api-ready', function (e) {
            self.loadDmPlayer();
        });
        /**
         * Listen to `dm-player-extracted` to wait all attributes is extracted from the element
         * then prepare the search parameters
         */
        document.addEventListener('dm-player-extracted', function (e) {
            self.prepareSearchParams();
        });
        /**
         * Listen to `dm-search-params-ready` after parameters is ready then start search
         * related/recent video
         */
        document.addEventListener('dm-search-params-ready', function (e) {
            self.searchVideo();
        });
    };
    /**
     * Create new events to dispatch after the event is ready
     */
    DmPlayer.prototype.registerNewEvents = function () {
        this.apiReady = new Event('dm-api-ready');
        this.playerExtracted = new Event('dm-player-extracted');
        this.searchParamsReady = new Event('dm-search-params-ready');
    };
    DmPlayer.prototype.extractAttrs = function () {
        var rootEl = this.rootEls[0];
        /**
         * See interfaces/infPlayer.ts to know further
         */
        this.playerParams = {
            maxWordSearch: rootEl.getAttribute('maxWordSearch') ? Number(rootEl.getAttribute('maxWordSearch')) : 15,
            minWordLength: rootEl.getAttribute('minWordLength') ? Number(rootEl.getAttribute('minWordLength')) : 4,
            minWordSearch: rootEl.getAttribute('minWordSearch') ? Number(rootEl.getAttribute('minWordSearch')) : 2,
            language: rootEl.getAttribute("language") ? rootEl.getAttribute("language") : "",
            sort: rootEl.getAttribute("sort") ? rootEl.getAttribute("sort") : "recent",
            owners: rootEl.getAttribute("owners") ? rootEl.getAttribute("owners") : "",
            category: rootEl.getAttribute("category") ? rootEl.getAttribute("category") : "",
            excludeIds: rootEl.getAttribute("excludeIds") ? rootEl.getAttribute("excludeIds") : "",
            searchInPlaylist: rootEl.getAttribute("searchInPlaylist") ? rootEl.getAttribute("searchInPlaylist") : false,
            syndication: rootEl.getAttribute("syndication") ? rootEl.getAttribute("syndication") : "",
            controls: (rootEl.getAttribute('controls') != 'false'),
            adsParams: rootEl.getAttribute('adsParams') ? rootEl.getAttribute('adsParams') : "contextual",
            cpeId: rootEl.getAttribute('cpeId') ? rootEl.getAttribute('cpeId').split(',') : [''],
            keywordsSelector: rootEl.getAttribute('keywordsSelector') ? rootEl.getAttribute('keywordsSelector') : null,
            preVideoTitle: rootEl.getAttribute('preVideoTitle') ? rootEl.getAttribute('preVideoTitle') : null,
            showVideoTitle: (rootEl.getAttribute('showVideoTitle') != 'false' && rootEl.getAttribute('showVideoTitle') != null),
            autoPlayMute: (rootEl.getAttribute("autoPlayMute") != 'false'),
            queueEnable: (rootEl.getAttribute('queueEnable') != 'false'),
            queueEnableNext: (rootEl.getAttribute('queueEnableNext') != 'false'),
            pipAtStart: (rootEl.getAttribute('pipAtStart') != 'false' && rootEl.getAttribute('pipAtStart') != null),
            noStp: (rootEl.getAttribute('noStp') != 'false' && rootEl.getAttribute('noStp') != null),
            noPip: (rootEl.getAttribute('noPip') != 'false' && rootEl.getAttribute('noPip') != null),
            scrollToPause: (rootEl.getAttribute('scrollToPause') != 'false' && rootEl.getAttribute('scrollToPause') != null),
            stpSound: (rootEl.getAttribute('stpSound') != 'false' && rootEl.getAttribute('stpSound') != null),
            playerStyleEnable: (rootEl.getAttribute('playerStyleEnable') != 'false' && rootEl.getAttribute('playerStyleEnable') != null),
            playerStyleColor: rootEl.getAttribute('playerStyleColor') ? rootEl.getAttribute('playerStyleColor') : null
        };
        if (this.debugMode === true) {
            console.log("%c DM Player Params: ", "background: #56C7FF; color: #232323", this.playerParams);
        }
        // Tell the event listener that player parameters is extracted
        document.dispatchEvent(this.playerExtracted);
    };
    /**
     * Set search parameters
     *
     * For all search parameters, please see interfaces/infSearch.ts
     */
    DmPlayer.prototype.prepareSearchParams = function () {
        var keywords = this.findKeywords(this.playerParams.keywordsSelector);
        this.searchParams = {
            fields: 'id,title',
            limit: 1,
            sort: this.playerParams.sort,
            search: keywords ? keywords.sort(function (a, b) { return b.length - a.length; }).slice(0, this.playerParams.maxWordSearch).join(' ') : "",
            language: this.playerParams.language ? this.playerParams.language : ''
        };
        if (!this.playerParams.searchInPlaylist) {
            this.searchParams.private = 0;
            this.searchParams.flags = "no_live,exportable" + (this.playerParams.owners.length > 0 ? "" : ",verified");
            this.searchParams.longer_than = 0.35; //21sec
            if (this.playerParams.owners)
                this.searchParams.owners = this.playerParams.owners;
            if (this.playerParams.category)
                this.searchParams.channel = this.playerParams.category;
            if (this.playerParams.excludeIds)
                this.searchParams.exclude_ids = this.playerParams.excludeIds;
        }
        if (this.playerParams.language)
            this.searchParams.language = this.playerParams.language;
        // Tell the event listener that search params is ready
        document.dispatchEvent(this.searchParamsReady);
    };
    /**
     * Handling multiple adsParams
     *
     * @param str
     */
    DmPlayer.prototype.htmlEntities = function (str) {
        return String(str).replace(/&/g, '%26').replace(/=/g, '%3d');
    };
    DmPlayer.prototype.loadDmPlayer = function () {
        var rootEl = this.rootEls[0];
        var cpeEmbed = document.createElement("div");
        /**
         * Set attributes part
         */
        var queryString = "";
        if (this.playerParams.adsParams === "") {
            queryString += "ads_params=contextual";
        }
        else {
            queryString += "ads_params=" + this.htmlEntities(this.playerParams.adsParams);
        }
        if (this.playerParams.syndication !== "")
            queryString += "&syndication=" + this.playerParams.syndication;
        if (this.playerParams.controls !== true)
            queryString += "&controls=" + this.playerParams.controls;
        cpeEmbed.setAttribute("class", "dailymotion-cpe");
        cpeEmbed.setAttribute("video-id", this.videoParams.id);
        cpeEmbed.setAttribute("query-string", queryString);
        if (this.playerParams.pipAtStart === true)
            cpeEmbed.setAttribute("pip-at-start", "");
        if (this.playerParams.noStp === true)
            cpeEmbed.setAttribute("no-stp", "");
        if (this.playerParams.noPip === true)
            cpeEmbed.setAttribute("no-pip", "");
        if (this.playerParams.queueEnable === false)
            cpeEmbed.setAttribute("no-queue", "");
        if (this.playerParams.queueEnableNext === false)
            cpeEmbed.setAttribute("no-autonext", "");
        if (this.playerParams.searchInPlaylist !== false)
            cpeEmbed.setAttribute("Playlist-id", this.playerParams.searchInPlaylist);
        if (rootEl.getAttribute("width") !== null) {
            this.playerParams.width = Number(rootEl.getAttribute("width"));
            cpeEmbed.setAttribute("width", rootEl.getAttribute("width"));
        }
        if (rootEl.getAttribute("height") !== null) {
            this.playerParams.height = Number(rootEl.getAttribute("height"));
            cpeEmbed.setAttribute("height", rootEl.getAttribute("height"));
        }
        // end of set attributes
        var cpeId = this.playerParams.cpeId[0];
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            cpeId = this.playerParams.cpeId[1] ? this.playerParams.cpeId[1] : this.playerParams.cpeId[0];
        var cpeParams = {};
        if (this.playerParams.scrollToPause === true)
            cpeParams['scroll_to_pause'] = true;
        if (this.playerParams.stpSound === true)
            cpeParams['stp_sound'] = true;
        if (this.playerParams.playerStyleEnable === true)
            cpeParams['player_style_enable'] = true;
        if (this.playerParams.playerStyleColor !== null)
            cpeParams['player_style_color'] = this.playerParams.playerStyleColor;
        // Avoid error while building
        var date = new Date();
        /**
         * Set pre title for video
         */
        if (this.playerParams.preVideoTitle !== null) {
            var preTitle = this.setPreVideoTitle(this.playerParams.preVideoTitle);
            rootEl.appendChild(preTitle);
        }
        // Append the element to the root player element
        rootEl.appendChild(cpeEmbed);
        // Load the CPE script
        (function (w, d, s, u, n, i, f, g, e, c) { w.WDMObject = n; w[n] = w[n] || function () { (w[n].q = w[n].q || []).push(arguments); }; w[n].l = 1 * date; w[n].i = i; w[n].f = f; w[n].g = g; e = d.createElement(s); e.async = 1; e.src = u; c = d.getElementsByTagName(s)[0]; c.parentNode.insertBefore(e, c); })(window, document, "script", "//api.dmcdn.net/pxl/cpe/client.min.js", "cpe", cpeId, cpeParams);
        /**
         * Set a video title
         */
        if (this.playerParams.showVideoTitle === true) {
            var videoTitle = this.setVideoTitle(this.videoParams.title);
            rootEl.appendChild(videoTitle);
        }
    };
    DmPlayer.prototype.setVideo = function (video) {
        this.videoParams = video;
        document.dispatchEvent(this.apiReady);
    };
    DmPlayer.prototype.setPreVideoTitle = function (text) {
        var preTitle = document.createElement('p');
        preTitle.innerHTML = text;
        preTitle.className = 'dm__pre-video-title';
        return preTitle;
    };
    DmPlayer.prototype.setVideoTitle = function (text) {
        var videoTitle = document.createElement('p');
        videoTitle.innerHTML = text;
        videoTitle.className = 'dm__video-title';
        return videoTitle;
    };
    DmPlayer.prototype.searchVideo = function () {
        var _this = this;
        if (this.debugMode === true) {
            console.log("%c DM related ", "background: #56C7FF; color: #232323", "Search: " + this.searchParams.search);
        }
        var properties = Object.entries(this.searchParams).map(function (_a) {
            var key = _a[0], value = _a[1];
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }).join('&');
        var dmSearchUrl = "https://api.dailymotion.com/" + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos" : "videos") + "?" + properties;
        fetch(dmSearchUrl).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.total > 0) {
                _this.setVideo(data.list[0]);
            }
            else {
                if (_this.debugMode === true) {
                    console.log("%c DM related ", "background: #56C7FF; color: #232323", "Can not find related video. Fallback video used.");
                }
                _this.getFallbackVideo();
            }
        });
    };
    DmPlayer.prototype.getFallbackVideo = function () {
        var _this = this;
        // Define current time and 30 days
        var currentTime = Math.floor(Date.now() / 1000);
        var thirtyDays = 2592000;
        var url = "https://api.dailymotion.com/" + (this.playerParams.searchInPlaylist ? "playlist/" + this.playerParams.searchInPlaylist + "/videos?" : "videos?owners=" + this.playerParams.owners) + "&created_after=" + (currentTime - thirtyDays) + "&sort=random&limit=1&fields=" + this.searchParams.fields;
        var self = this;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data.list.length > 0) {
                /**
                 * Data return array, get the first array and pass it to setVideo function
                 */
                self.setVideo(data.list[0]);
            }
            else {
                if (_this.debugMode === true) {
                    console.warn("DM related Unable to find a fallback video");
                }
            }
        });
    };
    DmPlayer.prototype.videoEvents = function () {
        // @ts-ignore
        window.addEventListener('cpeready', function (_a) {
            var players = _a.detail.players;
            var player = players[0];
            // TODO: handle on video change: for now just update the title below the video
            // player.addEventListener('videochange', (e) => {
            // });
        });
    };
    /**
     * Find keywords strings on website
     *
     * selector must be a meta tag placed in head
     */
    DmPlayer.prototype.findKeywords = function (selector) {
        var keywords = [''];
        if (selector !== null) {
            var keywordContainer = document.querySelector(selector);
            keywords = this.sanitizeKeywords(keywordContainer.getAttribute("content"));
        }
        else if (selector === null && typeof document.getElementsByTagName("h1")[0] !== "undefined") {
            keywords = this.sanitizeKeywords(document.getElementsByTagName("h1")[0].textContent);
        }
        return keywords;
    };
    /**
     * Sanitize keywords based on language
     *
     * Hangul (Korea): \u3131-\uD79D
     * Alphabet: a-zA-Z0-9
     * Latin Character: \u00C0-\u00FF
     * Devanagri (India): \u0900-\u097F
     */
    DmPlayer.prototype.sanitizeKeywords = function (keywords) {
        var _this = this;
        return keywords.replace(/[^- \u3131-\uD79D a-zA-Z0-9 \u00C0-\u00FF \u0900-\u097F \u0153]/g, ' ')
            .split(' ')
            .filter(function (word) { return word.length >= _this.playerParams.minWordLength; });
    };
    return DmPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (DmPlayer);


/***/ }),

/***/ "./src/entries/dm-embed.ts":
/*!*********************************!*\
  !*** ./src/entries/dm-embed.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dm_player_dm_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dm-player/dm-player */ "./src/dm-player/dm-player.ts");

var el = document.querySelectorAll('.dm-player');
var dmEmbed = new _dm_player_dm_player__WEBPACK_IMPORTED_MODULE_0__["default"](el);


/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/utilities/get-query-params.ts":
/*!*******************************************!*\
  !*** ./src/utilities/get-query-params.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParam; });
function getParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


/***/ })

/******/ });
//# sourceMappingURL=dm-ce.js.map