/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _burgers_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burgers.jpg */ "./src/burgers.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_burgers_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\nhtml, body {    \r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center fixed;     \r\n  background-size: cover;\r\n  overflow-y: auto;\r\n  overflow-x:hidden;\r\n\r\n}\r\n\r\n\r\n.content{\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr 1fr;\r\n    grid-template-rows: 1fr 4fr;\r\n  }\r\n\r\n\r\n.middle{\r\n    grid-column: 2/4;\r\n    grid-row: 1/7;\r\n    width: 100vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n  \r\n}\r\n\r\n\r\n.header{\r\n  width:100vw;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: center;\r\n  background-color: rgba(0,0,0,0.6);\r\n  font-size: 50px;\r\n}\r\n\r\ninput{\r\n  background-color: rgba(0,0,0,0.8);\r\n  color: white;\r\n  width:90px; \r\n  height: 50px;\r\n  font-size: 20px;\r\n}\r\n\r\ninput:hover{\r\n  transform: scale(1.05);\r\n  background-color: rgba(245, 96, 10, 0.8);\r\n}\r\n\r\n\r\n.mid-content{\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid red;\r\n  background-color: rgba(0,0,0, 0.6);\r\n  margin-top: 50px;\r\n  width: 700px;\r\n  height: 100vh;\r\n}\r\n\r\n.rest-desc{\r\n  padding: 15px 15px 0px 15px;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n.rest-desc, .hours{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: center;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.hours{\r\n  padding-top: 30px;\r\n}\r\n\r\nli{\r\n  padding-top: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n.rest-desc{\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"a b\"\r\n  \"c d\"\r\n  \"e f\";\r\n}\r\n\r\n.row1{\r\n  grid-area: \"a\";\r\n}\r\n\r\n.row2{\r\n  grid-area: \"b\";\r\n}\r\n\r\n.row3{\r\n  grid-area: \"c\";\r\n}\r\n\r\n.row4{\r\n  grid-area: \"d\";\r\n}\r\n\r\nfigure {\r\n  display: table;\r\n}\r\n\r\nfigcaption {\r\n  display: table-caption;\r\n  caption-side: bottom;\r\n  font-size: 20PX;\r\n}\r\n\r\n\r\n\r\n.rest-desc-cont{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: center;\r\n\r\n}\r\n\r\n\r\n\r\np{\r\n  border: 1px solid red;\r\n  background-color: rgba(255,255,255, 0.4);\r\n  color: white;\r\n  padding: 20px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;EACE,0EAAuD;EACvD,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;;AAEnB;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,2BAA2B;EAC7B;;;AAGF;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;;AAEhB;;;AAGA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,wCAAwC;AAC1C;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,kCAAkC;EAClC,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;;AAEpB;;;;;AAKA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;;AAGA;EACE,aAAa;EACb;;;OAGK;AACP;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;AACjB;;;;AAIA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;;AAEpB;;;;AAIA;EACE,qBAAqB;EACrB,wCAAwC;EACxC,YAAY;EACZ,aAAa;AACf","sourcesContent":["\r\nhtml, body {    \r\n  background: url('./burgers.jpg') no-repeat center fixed;     \r\n  background-size: cover;\r\n  overflow-y: auto;\r\n  overflow-x:hidden;\r\n\r\n}\r\n\r\n\r\n.content{\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr 1fr;\r\n    grid-template-rows: 1fr 4fr;\r\n  }\r\n\r\n\r\n.middle{\r\n    grid-column: 2/4;\r\n    grid-row: 1/7;\r\n    width: 100vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n  \r\n}\r\n\r\n\r\n.header{\r\n  width:100vw;\r\n  display: flex;\r\n  flex-flow: row;\r\n  justify-content: center;\r\n  background-color: rgba(0,0,0,0.6);\r\n  font-size: 50px;\r\n}\r\n\r\ninput{\r\n  background-color: rgba(0,0,0,0.8);\r\n  color: white;\r\n  width:90px; \r\n  height: 50px;\r\n  font-size: 20px;\r\n}\r\n\r\ninput:hover{\r\n  transform: scale(1.05);\r\n  background-color: rgba(245, 96, 10, 0.8);\r\n}\r\n\r\n\r\n.mid-content{\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid red;\r\n  background-color: rgba(0,0,0, 0.6);\r\n  margin-top: 50px;\r\n  width: 700px;\r\n  height: 100vh;\r\n}\r\n\r\n.rest-desc{\r\n  padding: 15px 15px 0px 15px;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n.rest-desc, .hours{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: center;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.hours{\r\n  padding-top: 30px;\r\n}\r\n\r\nli{\r\n  padding-top: 5px;\r\n  font-size: 25px;\r\n}\r\n\r\n\r\n.rest-desc{\r\n  display: grid;\r\n  grid-template-areas: \r\n  \"a b\"\r\n  \"c d\"\r\n  \"e f\";\r\n}\r\n\r\n.row1{\r\n  grid-area: \"a\";\r\n}\r\n\r\n.row2{\r\n  grid-area: \"b\";\r\n}\r\n\r\n.row3{\r\n  grid-area: \"c\";\r\n}\r\n\r\n.row4{\r\n  grid-area: \"d\";\r\n}\r\n\r\nfigure {\r\n  display: table;\r\n}\r\n\r\nfigcaption {\r\n  display: table-caption;\r\n  caption-side: bottom;\r\n  font-size: 20PX;\r\n}\r\n\r\n\r\n\r\n.rest-desc-cont{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: center;\r\n\r\n}\r\n\r\n\r\n\r\np{\r\n  border: 1px solid red;\r\n  background-color: rgba(255,255,255, 0.4);\r\n  color: white;\r\n  padding: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/Spicy_Peri.jpg":
/*!****************************!*\
  !*** ./src/Spicy_Peri.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8925dbe4d318c45a5f9d.jpg";

/***/ }),

/***/ "./src/bacon_chicken.jpg":
/*!*******************************!*\
  !*** ./src/bacon_chicken.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59c8decb4b7336e4b9ec.jpg";

/***/ }),

/***/ "./src/burgers.jpg":
/*!*************************!*\
  !*** ./src/burgers.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7072f670afc57b18f1d6.jpg";

/***/ }),

/***/ "./src/chicken.jpg":
/*!*************************!*\
  !*** ./src/chicken.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca935c5f04f02f10a199.jpg";

/***/ }),

/***/ "./src/clear-dom.js":
/*!**************************!*\
  !*** ./src/clear-dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const clearDom = () =>{
    const myNode = document.querySelector("#content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearDom);

/***/ }),

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const loadContact = () => {
    console.log("Hello Friend");

    const content = document.querySelector("#content");
    const middle = document.createElement("div");

    const header = document.createElement("div");
    const navDiv = document.createElement("div");
    const midContent = document.createElement("div");

    const restDesc = document.createElement("div");
    const hours = document.createElement("div");

    const homeBtn = document.createElement("input");
    const menuBtn = document.createElement("input");
    const contactBtn = document.createElement("input");



    middle.classList.add("middle");

    header.classList.add("header");
    navDiv.classList.add("nav-buttons");
    midContent.classList.add("mid-content");

    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");

    restDesc.classList.add("rest-desc");


    header.textContent = "Viraj's Burgers";
    //since this is the home page
    contactBtn.setAttribute("style", "background-color: rgba(245, 96, 10, 0.8");

    homeBtn.setAttribute("type", "button");
    menuBtn.setAttribute("type", "button");
    contactBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    menuBtn.setAttribute("value", "Menu");
    contactBtn.setAttribute("value", "Contact");

    content.appendChild(middle);
    const middleEl = document.querySelector(".middle");

    middleEl.appendChild(header);
    middleEl.appendChild(navDiv);
    middleEl.appendChild(midContent);

    const navDivEl = document.querySelector(".nav-buttons");

    navDivEl.appendChild(homeBtn);
    navDivEl.appendChild(menuBtn);
    navDivEl.appendChild(contactBtn);

    const midContentEl = document.querySelector(".mid-content");
    
    midContentEl.appendChild(restDesc);
    midContentEl.appendChild(hours);

    restDesc.classList.add("rest-desc-cont");

    const restDescEl = document.querySelector(".rest-desc-cont");

    const googleMap = document.createElement("iframe");
    googleMap.setAttribute("src","https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d75394.15842155041!2d-1.605771611807124!3d53.8060834705913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!3m2!1d53.8007554!2d-1.5490773999999998!5e0!3m2!1sen!2suk!4v1626363635522!5m2!1sen!2suk")
    googleMap.setAttribute("width", "600");
    googleMap.setAttribute("height", "450");
    googleMap.setAttribute("style", "border:0");
    googleMap.setAttribute("allowfullscreen", "0");
    googleMap.setAttribute("loading", "lazy");

    restDescEl.appendChild(googleMap);


    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    restDescEl.appendChild(infoDiv);

    const infoDivEl = document.querySelector(".info");

    const parInfo = document.createElement("p");
    parInfo.setAttribute('style', 'white-space: pre;');
    parInfo.textContent="1 Leeds Road,\r\n";
    parInfo.textContent+="LS1 1JJ,\r\n" ;
    parInfo.textContent+="Leeds. \r\n" ;
    parInfo.textContent+="\r\n" ;
    parInfo.textContent+="0113 2796543 \r\n" ;
    parInfo.textContent+="info@burgers.com" ;

    infoDivEl.appendChild(parInfo);










/*
<iframe 
src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d75394.15842155041!2d-1.605771611807124!3d53.8060834705913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!3m2!1d53.8007554!2d-1.5490773999999998!5e0!3m2!1sen!2suk!4v1626363635522!5m2!1sen!2suk" 
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
*/

}
    
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/double_cheese.jpg":
/*!*******************************!*\
  !*** ./src/double_cheese.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b79527233cb268c8901.jpg";

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Spicy_Peri_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spicy_Peri.jpg */ "./src/Spicy_Peri.jpg");
/* harmony import */ var _chicken_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chicken.jpg */ "./src/chicken.jpg");
/* harmony import */ var _bacon_chicken_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bacon_chicken.jpg */ "./src/bacon_chicken.jpg");
/* harmony import */ var _double_cheese_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./double_cheese.jpg */ "./src/double_cheese.jpg");







const loadMenu = () =>{
    console.log("Hello Friend");

    const content = document.querySelector("#content");
    const middle = document.createElement("div");

    const header = document.createElement("div");
    const navDiv = document.createElement("div");
    const midContent = document.createElement("div");

    const restDesc = document.createElement("div");
    const hours = document.createElement("div");

    const homeBtn = document.createElement("input");
    const menuBtn = document.createElement("input");
    const contactBtn = document.createElement("input");



    middle.classList.add("middle");

    header.classList.add("header");
    navDiv.classList.add("nav-buttons");
    midContent.classList.add("mid-content");

    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");

    restDesc.classList.add("rest-desc");


    header.textContent = "Viraj's Burgers";
    //since this is the home page
    menuBtn.setAttribute("style", "background-color: rgba(245, 96, 10, 0.8");

    homeBtn.setAttribute("type", "button");
    menuBtn.setAttribute("type", "button");
    contactBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    menuBtn.setAttribute("value", "Menu");
    contactBtn.setAttribute("value", "Contact");

    content.appendChild(middle);
    const middleEl = document.querySelector(".middle");

    middleEl.appendChild(header);
    middleEl.appendChild(navDiv);
    middleEl.appendChild(midContent);

    const navDivEl = document.querySelector(".nav-buttons");

    navDivEl.appendChild(homeBtn);
    navDivEl.appendChild(menuBtn);
    navDivEl.appendChild(contactBtn);

    const midContentEl = document.querySelector(".mid-content");
    
    midContentEl.appendChild(restDesc);
    midContentEl.appendChild(hours);



    //the above is the template now create the menu
    const row1 = document.createElement("figure");
    const row2 = document.createElement("figure");
    const row3 = document.createElement("figure");
    const row4 = document.createElement("figure");
    //const row5 = document.createElement("figure");
    //const row6 = document.createElement("figure");


    row1.classList.add("row1");
    row2.classList.add("row2");
    row3.classList.add("row3");
    row4.classList.add("row4");
    //row5.classList.add("row5");
    //row6.classList.add("row6");



    const restDescEl = document.querySelector(".rest-desc");

    restDescEl.appendChild(row1);
    restDescEl.appendChild(row2);
    restDescEl.appendChild(row3);
    restDescEl.appendChild(row4);


    
    const row1Cap = document.createElement("figcaption");
    const row2Cap = document.createElement("figcaption");
    const row3Cap = document.createElement("figcaption");
    const row4Cap = document.createElement("figcaption");
    //const row5 = document.createElement("figure");
    //const row6 = document.createElement("figure");


    row1Cap.classList.add("row1Cap");
    row2Cap.classList.add("row2Cap");
    row3Cap.classList.add("row3Cap");
    row4Cap.classList.add("row4Cap");
    //row5.classList.add("row5");
    //row6.classList.add("row6")





    function createImage(source, className){
        const mySpicy = new Image();
        mySpicy.src = source;
        mySpicy.classList.add(className);
        mySpicy.setAttribute("width", "150px");
        mySpicy.setAttribute("height", "150px");

        return mySpicy;
    }

    let mySpicy = createImage(_Spicy_Peri_jpg__WEBPACK_IMPORTED_MODULE_0__, "spciy-img");
    let chicken = createImage(_chicken_jpg__WEBPACK_IMPORTED_MODULE_1__, "chicken");
    let double = createImage(_double_cheese_jpg__WEBPACK_IMPORTED_MODULE_3__, "chicken");
    let bacon = createImage(_bacon_chicken_jpg__WEBPACK_IMPORTED_MODULE_2__, "chicken");


    const row1El = document.querySelector(".row1");
    const row2El = document.querySelector(".row2");
    const row3El = document.querySelector(".row3");
    const row4El = document.querySelector(".row4");
    //const row5El = document.querySelector(".row5");
    //const row6El = document.querySelector(".row6");

    row1El.appendChild(mySpicy);
    row2El.appendChild(chicken);
    row3El.appendChild(double);
    row4El.appendChild(bacon);

    row1Cap.textContent = "Spicy Peri-Peri";
    row2Cap.textContent = "Juicy Chicken";
    row3Cap.textContent = "Double Cheese Burger";
    row4Cap.textContent = "Bacon & Chicken Burger";

    row1El.appendChild(row1Cap);
    row2El.appendChild(row2Cap);
    row3El.appendChild(row3Cap);
    row4El.appendChild(row4Cap);



}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _burgers_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgers.jpg */ "./src/burgers.jpg");




const loadPage = () => {
    const content = document.querySelector("#content");
    const middle = document.createElement("div");

    const header = document.createElement("div");
    const navDiv = document.createElement("div");
    const midContent = document.createElement("div");

    const restDesc = document.createElement("div");
    const hours = document.createElement("div");

    const homeBtn = document.createElement("input");
    const menuBtn = document.createElement("input");
    const contactBtn = document.createElement("input");


    const listStart = document.createElement("ul");

    const monday = document.createElement("li");
    const tuesday = document.createElement("li");
    const wednesday = document.createElement("li");
    const thursday = document.createElement("li");
    const friday = document.createElement("li");
    const saturday = document.createElement("li");
    const sunday = document.createElement("li");


    middle.classList.add("middle");

    header.classList.add("header");
    navDiv.classList.add("nav-buttons");
    midContent.classList.add("mid-content");

    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");

    //since this is the home page
    homeBtn.setAttribute("style", "background-color: rgba(245, 96, 10, 0.8");

    restDesc.classList.add("rest-desc");
    hours.classList.add("hours");

    listStart.classList.add("hours-list");

  
    header.textContent = "Viraj's Burgers";

    homeBtn.setAttribute("type", "button");
    menuBtn.setAttribute("type", "button");
    contactBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    menuBtn.setAttribute("value", "Menu");
    contactBtn.setAttribute("value", "Contact");

    restDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    monday.textContent = "Monday: Closed";
    tuesday.textContent = "Tuesday: noon - 10pm";
    wednesday.textContent = "Wedensday: noon - 10pm";
    thursday.textContent = "Thursday: noon - 10pm";
    friday.textContent = "Friday: noon - 12pm";
    saturday.textContent = "Saturday: noon - 12pm";
    sunday.textContent = "Sunday: noon - 10pm";


    content.appendChild(middle);
    const middleEl = document.querySelector(".middle");

    middleEl.appendChild(header);
    middleEl.appendChild(navDiv);
    middleEl.appendChild(midContent);

    const navDivEl = document.querySelector(".nav-buttons");

    navDivEl.appendChild(homeBtn);
    navDivEl.appendChild(menuBtn);
    navDivEl.appendChild(contactBtn);

    const midContentEl = document.querySelector(".mid-content");
    
    midContentEl.appendChild(restDesc);
    midContentEl.appendChild(hours);

    const hoursEl = document.querySelector(".hours");

    hoursEl.appendChild(listStart);

    const listStartEl = document.querySelector(".hours-list");
    listStartEl.appendChild(monday);
    listStartEl.appendChild(tuesday);
    listStartEl.appendChild(wednesday);
    listStartEl.appendChild(thursday);
    listStartEl.appendChild(friday);
    listStartEl.appendChild(saturday);
    listStartEl.appendChild(sunday);




     // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = _burgers_jpg__WEBPACK_IMPORTED_MODULE_0__;
    myIcon.classList.add("background-img");
    


}
    

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load.js */ "./src/menu-load.js");
/* harmony import */ var _contact_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load.js */ "./src/contact-load.js");
/* harmony import */ var _clear_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear-dom.js */ "./src/clear-dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");









(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();



function eventHandler(){
    const home = document.querySelector(".home-btn");
    const menu = document.querySelector(".menu-btn");
    const contact = document.querySelector(".contact-btn");


    if(home){
        home.addEventListener("click", ()=>{
            (0,_clear_dom_js__WEBPACK_IMPORTED_MODULE_3__.default)();
            (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.default)();
            eventHandler();
        })
    }

    if(menu){
        menu.addEventListener("click", ()=>{
            (0,_clear_dom_js__WEBPACK_IMPORTED_MODULE_3__.default)();
            (0,_menu_load_js__WEBPACK_IMPORTED_MODULE_1__.default)();
            eventHandler();
        })
    }

    if(contact){
        contact.addEventListener("click", ()=>{
            (0,_clear_dom_js__WEBPACK_IMPORTED_MODULE_3__.default)();
            (0,_contact_load_js__WEBPACK_IMPORTED_MODULE_2__.default)();
            eventHandler();
        })
    }
}






eventHandler();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyLWRvbS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ3RDO0FBQzFELDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQixDQUFDLHlDQUE2QjtBQUN0RztBQUNBLDBEQUEwRCw2RkFBNkYsa0NBQWtDLHVCQUF1Qix3QkFBd0IsU0FBUyxxQkFBcUIseUJBQXlCLHNCQUFzQiwyQ0FBMkMsb0NBQW9DLE9BQU8sb0JBQW9CLHlCQUF5QixzQkFBc0IscUJBQXFCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0QixxQkFBcUIsV0FBVyxvQkFBb0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsOEJBQThCLHdDQUF3QyxzQkFBc0IsS0FBSyxjQUFjLHdDQUF3QyxtQkFBbUIsaUJBQWlCLG9CQUFvQixzQkFBc0IsS0FBSyxvQkFBb0IsNkJBQTZCLCtDQUErQyxLQUFLLHlCQUF5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LFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxzREFBUTtBQUNwQixZQUFZLHlEQUFXO0FBQ3ZCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7QUFPQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2J1cmdlcnMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuaHRtbCwgYm9keSB7ICAgIFxcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkOyAgICAgXFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIG92ZXJmbG93LXg6aGlkZGVuO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5taWRkbGV7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxyXFxuICAgIGdyaWQtcm93OiAxLzc7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgd2lkdGg6MTAwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXR7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDo5MHB4OyBcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6aG92ZXJ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDk2LCAxMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1pZC1jb250ZW50e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjYpO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gIHdpZHRoOiA3MDBweDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5yZXN0LWRlc2N7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5yZXN0LWRlc2MsIC5ob3Vyc3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uaG91cnN7XFxyXFxuICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxubGl7XFxyXFxuICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVzdC1kZXNje1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgXFxcImEgYlxcXCJcXHJcXG4gIFxcXCJjIGRcXFwiXFxyXFxuICBcXFwiZSBmXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzF7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJhXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzJ7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJiXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzN7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJjXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdzR7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJkXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuZmlndXJlIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5maWdjYXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLWNhcHRpb247XFxyXFxuICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcXHJcXG4gIGZvbnQtc2l6ZTogMjBQWDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnJlc3QtZGVzYy1jb250e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjQpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7RUFDRSwwRUFBdUQ7RUFDdkQsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7O0FBRW5COzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtFQUM3Qjs7O0FBR0Y7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTs7QUFFaEI7OztBQUdBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7O0FBRXBCOzs7OztBQUtBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiOzs7T0FHSztBQUNQOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7Ozs7QUFJQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7O0FBRXBCOzs7O0FBSUE7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuaHRtbCwgYm9keSB7ICAgIFxcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuL2J1cmdlcnMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDsgICAgIFxcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OmhpZGRlbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4ubWlkZGxle1xcclxcbiAgICBncmlkLWNvbHVtbjogMi80O1xcclxcbiAgICBncmlkLXJvdzogMS83O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmhlYWRlcntcXHJcXG4gIHdpZHRoOjEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6OTBweDsgXFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVye1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCA5NiwgMTAsIDAuOCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5taWQtY29udGVudHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC42KTtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB3aWR0aDogNzAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1kZXNje1xcclxcbiAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucmVzdC1kZXNjLCAuaG91cnN7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmhvdXJze1xcclxcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmxpe1xcclxcbiAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnJlc3QtZGVzY3tcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gIFxcXCJhIGJcXFwiXFxyXFxuICBcXFwiYyBkXFxcIlxcclxcbiAgXFxcImUgZlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5yb3cxe1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiYVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5yb3cye1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiYlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5yb3cze1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiY1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5yb3c0e1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiZFxcXCI7XFxyXFxufVxcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuZmlnY2FwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uO1xcclxcbiAgY2FwdGlvbi1zaWRlOiBib3R0b207XFxyXFxuICBmb250LXNpemU6IDIwUFg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5yZXN0LWRlc2MtY29udHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5we1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwgMC40KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcclxuXHJcbmNvbnN0IGNsZWFyRG9tID0gKCkgPT57XHJcbiAgICBjb25zdCBteU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICB3aGlsZSAobXlOb2RlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgbXlOb2RlLnJlbW92ZUNoaWxkKG15Tm9kZS5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJEb20iLCJcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBGcmllbmRcIik7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtaWRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCByZXN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuXHJcblxyXG4gICAgbWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVcIik7XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25zXCIpO1xyXG4gICAgbWlkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWNvbnRlbnRcIik7XHJcblxyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnRuXCIpO1xyXG5cclxuICAgIHJlc3REZXNjLmNsYXNzTGlzdC5hZGQoXCJyZXN0LWRlc2NcIik7XHJcblxyXG5cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlyYWoncyBCdXJnZXJzXCI7XHJcbiAgICAvL3NpbmNlIHRoaXMgaXMgdGhlIGhvbWUgcGFnZVxyXG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCA5NiwgMTAsIDAuOFwiKTtcclxuXHJcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSG9tZVwiKTtcclxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZW51XCIpO1xyXG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNvbnRhY3RcIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGUpO1xyXG4gICAgY29uc3QgbWlkZGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKTtcclxuXHJcbiAgICBtaWRkbGVFbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgbWlkZGxlRWwuYXBwZW5kQ2hpbGQobmF2RGl2KTtcclxuICAgIG1pZGRsZUVsLmFwcGVuZENoaWxkKG1pZENvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uc1wiKTtcclxuXHJcbiAgICBuYXZEaXZFbC5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIG5hdkRpdkVsLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gICAgbmF2RGl2RWwuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgbWlkQ29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWQtY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgbWlkQ29udGVudEVsLmFwcGVuZENoaWxkKHJlc3REZXNjKTtcclxuICAgIG1pZENvbnRlbnRFbC5hcHBlbmRDaGlsZChob3Vycyk7XHJcblxyXG4gICAgcmVzdERlc2MuY2xhc3NMaXN0LmFkZChcInJlc3QtZGVzYy1jb250XCIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3REZXNjRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3QtZGVzYy1jb250XCIpO1xyXG5cclxuICAgIGNvbnN0IGdvb2dsZU1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XHJcbiAgICBnb29nbGVNYXAuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMjMhMW0xMiExbTMhMWQ3NTM5NC4xNTg0MjE1NTA0MSEyZC0xLjYwNTc3MTYxMTgwNzEyNCEzZDUzLjgwNjA4MzQ3MDU5MTMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITRtOCEzZTMhNG0wITRtNSExczB4NDg3OTNlNGFkYTY0YmQ5OSUzQTB4NTFhZGJhZmQwMjEzZGNhOSEyc0xlZWRzITNtMiExZDUzLjgwMDc1NTQhMmQtMS41NDkwNzczOTk5OTk5OTk4ITVlMCEzbTIhMXNlbiEyc3VrITR2MTYyNjM2MzYzNTUyMiE1bTIhMXNlbiEyc3VrXCIpXHJcbiAgICBnb29nbGVNYXAuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI2MDBcIik7XHJcbiAgICBnb29nbGVNYXAuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDUwXCIpO1xyXG4gICAgZ29vZ2xlTWFwLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYm9yZGVyOjBcIik7XHJcbiAgICBnb29nbGVNYXAuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwiMFwiKTtcclxuICAgIGdvb2dsZU1hcC5zZXRBdHRyaWJ1dGUoXCJsb2FkaW5nXCIsIFwibGF6eVwiKTtcclxuXHJcbiAgICByZXN0RGVzY0VsLmFwcGVuZENoaWxkKGdvb2dsZU1hcCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcclxuICAgIHJlc3REZXNjRWwuYXBwZW5kQ2hpbGQoaW5mb0Rpdik7XHJcblxyXG4gICAgY29uc3QgaW5mb0RpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IHBhckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhckluZm8uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aGl0ZS1zcGFjZTogcHJlOycpO1xyXG4gICAgcGFySW5mby50ZXh0Q29udGVudD1cIjEgTGVlZHMgUm9hZCxcXHJcXG5cIjtcclxuICAgIHBhckluZm8udGV4dENvbnRlbnQrPVwiTFMxIDFKSixcXHJcXG5cIiA7XHJcbiAgICBwYXJJbmZvLnRleHRDb250ZW50Kz1cIkxlZWRzLiBcXHJcXG5cIiA7XHJcbiAgICBwYXJJbmZvLnRleHRDb250ZW50Kz1cIlxcclxcblwiIDtcclxuICAgIHBhckluZm8udGV4dENvbnRlbnQrPVwiMDExMyAyNzk2NTQzIFxcclxcblwiIDtcclxuICAgIHBhckluZm8udGV4dENvbnRlbnQrPVwiaW5mb0BidXJnZXJzLmNvbVwiIDtcclxuXHJcbiAgICBpbmZvRGl2RWwuYXBwZW5kQ2hpbGQocGFySW5mbyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKlxyXG48aWZyYW1lIFxyXG5zcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMjMhMW0xMiExbTMhMWQ3NTM5NC4xNTg0MjE1NTA0MSEyZC0xLjYwNTc3MTYxMTgwNzEyNCEzZDUzLjgwNjA4MzQ3MDU5MTMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITRtOCEzZTMhNG0wITRtNSExczB4NDg3OTNlNGFkYTY0YmQ5OSUzQTB4NTFhZGJhZmQwMjEzZGNhOSEyc0xlZWRzITNtMiExZDUzLjgwMDc1NTQhMmQtMS41NDkwNzczOTk5OTk5OTk4ITVlMCEzbTIhMXNlbiEyc3VrITR2MTYyNjM2MzYzNTUyMiE1bTIhMXNlbiEyc3VrXCIgXHJcbndpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiPjwvaWZyYW1lPlxyXG4qL1xyXG5cclxufVxyXG4gICAgXHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RcclxuIiwiaW1wb3J0IHNwaWN5SW1nIGZyb20gJy4vU3BpY3lfUGVyaS5qcGcnO1xyXG5pbXBvcnQgY2hpY2tlbkltZyBmcm9tICcuL2NoaWNrZW4uanBnJztcclxuaW1wb3J0IGJhY29uSW1nIGZyb20gJy4vYmFjb25fY2hpY2tlbi5qcGcnO1xyXG5pbXBvcnQgZG91YmxlSW1nIGZyb20gJy4vZG91YmxlX2NoZWVzZS5qcGcnO1xyXG5cclxuXHJcblxyXG5jb25zdCBsb2FkTWVudSA9ICgpID0+e1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBGcmllbmRcIik7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtaWRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCByZXN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuXHJcblxyXG4gICAgbWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVcIik7XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25zXCIpO1xyXG4gICAgbWlkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWNvbnRlbnRcIik7XHJcblxyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnRuXCIpO1xyXG5cclxuICAgIHJlc3REZXNjLmNsYXNzTGlzdC5hZGQoXCJyZXN0LWRlc2NcIik7XHJcblxyXG5cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlyYWoncyBCdXJnZXJzXCI7XHJcbiAgICAvL3NpbmNlIHRoaXMgaXMgdGhlIGhvbWUgcGFnZVxyXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCA5NiwgMTAsIDAuOFwiKTtcclxuXHJcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBjb250YWN0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XHJcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSG9tZVwiKTtcclxuICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJNZW51XCIpO1xyXG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkNvbnRhY3RcIik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGUpO1xyXG4gICAgY29uc3QgbWlkZGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZGRsZVwiKTtcclxuXHJcbiAgICBtaWRkbGVFbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgbWlkZGxlRWwuYXBwZW5kQ2hpbGQobmF2RGl2KTtcclxuICAgIG1pZGRsZUVsLmFwcGVuZENoaWxkKG1pZENvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYnV0dG9uc1wiKTtcclxuXHJcbiAgICBuYXZEaXZFbC5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIG5hdkRpdkVsLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gICAgbmF2RGl2RWwuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgbWlkQ29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taWQtY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgbWlkQ29udGVudEVsLmFwcGVuZENoaWxkKHJlc3REZXNjKTtcclxuICAgIG1pZENvbnRlbnRFbC5hcHBlbmRDaGlsZChob3Vycyk7XHJcblxyXG5cclxuXHJcbiAgICAvL3RoZSBhYm92ZSBpcyB0aGUgdGVtcGxhdGUgbm93IGNyZWF0ZSB0aGUgbWVudVxyXG4gICAgY29uc3Qgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICBjb25zdCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuICAgIGNvbnN0IHJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgY29uc3Qgcm93NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICAvL2NvbnN0IHJvdzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG4gICAgLy9jb25zdCByb3c2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZ3VyZVwiKTtcclxuXHJcblxyXG4gICAgcm93MS5jbGFzc0xpc3QuYWRkKFwicm93MVwiKTtcclxuICAgIHJvdzIuY2xhc3NMaXN0LmFkZChcInJvdzJcIik7XHJcbiAgICByb3czLmNsYXNzTGlzdC5hZGQoXCJyb3czXCIpO1xyXG4gICAgcm93NC5jbGFzc0xpc3QuYWRkKFwicm93NFwiKTtcclxuICAgIC8vcm93NS5jbGFzc0xpc3QuYWRkKFwicm93NVwiKTtcclxuICAgIC8vcm93Ni5jbGFzc0xpc3QuYWRkKFwicm93NlwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3REZXNjRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3QtZGVzY1wiKTtcclxuXHJcbiAgICByZXN0RGVzY0VsLmFwcGVuZENoaWxkKHJvdzEpO1xyXG4gICAgcmVzdERlc2NFbC5hcHBlbmRDaGlsZChyb3cyKTtcclxuICAgIHJlc3REZXNjRWwuYXBwZW5kQ2hpbGQocm93Myk7XHJcbiAgICByZXN0RGVzY0VsLmFwcGVuZENoaWxkKHJvdzQpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHJvdzFDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgIGNvbnN0IHJvdzJDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgIGNvbnN0IHJvdzNDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgIGNvbnN0IHJvdzRDYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlnY2FwdGlvblwiKTtcclxuICAgIC8vY29uc3Qgcm93NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XHJcbiAgICAvL2NvbnN0IHJvdzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xyXG5cclxuXHJcbiAgICByb3cxQ2FwLmNsYXNzTGlzdC5hZGQoXCJyb3cxQ2FwXCIpO1xyXG4gICAgcm93MkNhcC5jbGFzc0xpc3QuYWRkKFwicm93MkNhcFwiKTtcclxuICAgIHJvdzNDYXAuY2xhc3NMaXN0LmFkZChcInJvdzNDYXBcIik7XHJcbiAgICByb3c0Q2FwLmNsYXNzTGlzdC5hZGQoXCJyb3c0Q2FwXCIpO1xyXG4gICAgLy9yb3c1LmNsYXNzTGlzdC5hZGQoXCJyb3c1XCIpO1xyXG4gICAgLy9yb3c2LmNsYXNzTGlzdC5hZGQoXCJyb3c2XCIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNvdXJjZSwgY2xhc3NOYW1lKXtcclxuICAgICAgICBjb25zdCBteVNwaWN5ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgbXlTcGljeS5zcmMgPSBzb3VyY2U7XHJcbiAgICAgICAgbXlTcGljeS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgbXlTcGljeS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjE1MHB4XCIpO1xyXG4gICAgICAgIG15U3BpY3kuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTUwcHhcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBteVNwaWN5O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBteVNwaWN5ID0gY3JlYXRlSW1hZ2Uoc3BpY3lJbWcsIFwic3BjaXktaW1nXCIpO1xyXG4gICAgbGV0IGNoaWNrZW4gPSBjcmVhdGVJbWFnZShjaGlja2VuSW1nLCBcImNoaWNrZW5cIik7XHJcbiAgICBsZXQgZG91YmxlID0gY3JlYXRlSW1hZ2UoZG91YmxlSW1nLCBcImNoaWNrZW5cIik7XHJcbiAgICBsZXQgYmFjb24gPSBjcmVhdGVJbWFnZShiYWNvbkltZywgXCJjaGlja2VuXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCByb3cxRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdzFcIik7XHJcbiAgICBjb25zdCByb3cyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdzJcIik7XHJcbiAgICBjb25zdCByb3czRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdzNcIik7XHJcbiAgICBjb25zdCByb3c0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdzRcIik7XHJcbiAgICAvL2NvbnN0IHJvdzVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm93NVwiKTtcclxuICAgIC8vY29uc3Qgcm93NkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3c2XCIpO1xyXG5cclxuICAgIHJvdzFFbC5hcHBlbmRDaGlsZChteVNwaWN5KTtcclxuICAgIHJvdzJFbC5hcHBlbmRDaGlsZChjaGlja2VuKTtcclxuICAgIHJvdzNFbC5hcHBlbmRDaGlsZChkb3VibGUpO1xyXG4gICAgcm93NEVsLmFwcGVuZENoaWxkKGJhY29uKTtcclxuXHJcbiAgICByb3cxQ2FwLnRleHRDb250ZW50ID0gXCJTcGljeSBQZXJpLVBlcmlcIjtcclxuICAgIHJvdzJDYXAudGV4dENvbnRlbnQgPSBcIkp1aWN5IENoaWNrZW5cIjtcclxuICAgIHJvdzNDYXAudGV4dENvbnRlbnQgPSBcIkRvdWJsZSBDaGVlc2UgQnVyZ2VyXCI7XHJcbiAgICByb3c0Q2FwLnRleHRDb250ZW50ID0gXCJCYWNvbiAmIENoaWNrZW4gQnVyZ2VyXCI7XHJcblxyXG4gICAgcm93MUVsLmFwcGVuZENoaWxkKHJvdzFDYXApO1xyXG4gICAgcm93MkVsLmFwcGVuZENoaWxkKHJvdzJDYXApO1xyXG4gICAgcm93M0VsLmFwcGVuZENoaWxkKHJvdzNDYXApO1xyXG4gICAgcm93NEVsLmFwcGVuZENoaWxkKHJvdzRDYXApO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnUiLCJcclxuaW1wb3J0IEljb24gZnJvbSAnLi9idXJnZXJzLmpwZyc7XHJcblxyXG5cclxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1pZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IHJlc3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGxpc3RTdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgICBjb25zdCBtb25kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCB0dWVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3Qgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IHN1bmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcblxyXG4gICAgbWlkZGxlLmNsYXNzTGlzdC5hZGQoXCJtaWRkbGVcIik7XHJcblxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcbiAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25zXCIpO1xyXG4gICAgbWlkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWlkLWNvbnRlbnRcIik7XHJcblxyXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ0blwiKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnRuXCIpO1xyXG5cclxuICAgIC8vc2luY2UgdGhpcyBpcyB0aGUgaG9tZSBwYWdlXHJcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDk2LCAxMCwgMC44XCIpO1xyXG5cclxuICAgIHJlc3REZXNjLmNsYXNzTGlzdC5hZGQoXCJyZXN0LWRlc2NcIik7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKFwiaG91cnNcIik7XHJcblxyXG4gICAgbGlzdFN0YXJ0LmNsYXNzTGlzdC5hZGQoXCJob3Vycy1saXN0XCIpO1xyXG5cclxuICBcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlyYWoncyBCdXJnZXJzXCI7XHJcblxyXG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkhvbWVcIik7XHJcbiAgICBtZW51QnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVudVwiKTtcclxuICAgIGNvbnRhY3RCdG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDb250YWN0XCIpO1xyXG5cclxuICAgIHJlc3REZXNjLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXCJcclxuXHJcbiAgICBtb25kYXkudGV4dENvbnRlbnQgPSBcIk1vbmRheTogQ2xvc2VkXCI7XHJcbiAgICB0dWVzZGF5LnRleHRDb250ZW50ID0gXCJUdWVzZGF5OiBub29uIC0gMTBwbVwiO1xyXG4gICAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gXCJXZWRlbnNkYXk6IG5vb24gLSAxMHBtXCI7XHJcbiAgICB0aHVyc2RheS50ZXh0Q29udGVudCA9IFwiVGh1cnNkYXk6IG5vb24gLSAxMHBtXCI7XHJcbiAgICBmcmlkYXkudGV4dENvbnRlbnQgPSBcIkZyaWRheTogbm9vbiAtIDEycG1cIjtcclxuICAgIHNhdHVyZGF5LnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogbm9vbiAtIDEycG1cIjtcclxuICAgIHN1bmRheS50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiBub29uIC0gMTBwbVwiO1xyXG5cclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZSk7XHJcbiAgICBjb25zdCBtaWRkbGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlXCIpO1xyXG5cclxuICAgIG1pZGRsZUVsLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtaWRkbGVFbC5hcHBlbmRDaGlsZChuYXZEaXYpO1xyXG4gICAgbWlkZGxlRWwuYXBwZW5kQ2hpbGQobWlkQ29udGVudCk7XHJcblxyXG4gICAgY29uc3QgbmF2RGl2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1idXR0b25zXCIpO1xyXG5cclxuICAgIG5hdkRpdkVsLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgbmF2RGl2RWwuYXBwZW5kQ2hpbGQobWVudUJ0bik7XHJcbiAgICBuYXZEaXZFbC5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuXHJcbiAgICBjb25zdCBtaWRDb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pZC1jb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICBtaWRDb250ZW50RWwuYXBwZW5kQ2hpbGQocmVzdERlc2MpO1xyXG4gICAgbWlkQ29udGVudEVsLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuXHJcbiAgICBjb25zdCBob3Vyc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob3Vyc1wiKTtcclxuXHJcbiAgICBob3Vyc0VsLmFwcGVuZENoaWxkKGxpc3RTdGFydCk7XHJcblxyXG4gICAgY29uc3QgbGlzdFN0YXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvdXJzLWxpc3RcIik7XHJcbiAgICBsaXN0U3RhcnRFbC5hcHBlbmRDaGlsZChtb25kYXkpO1xyXG4gICAgbGlzdFN0YXJ0RWwuYXBwZW5kQ2hpbGQodHVlc2RheSk7XHJcbiAgICBsaXN0U3RhcnRFbC5hcHBlbmRDaGlsZCh3ZWRuZXNkYXkpO1xyXG4gICAgbGlzdFN0YXJ0RWwuYXBwZW5kQ2hpbGQodGh1cnNkYXkpO1xyXG4gICAgbGlzdFN0YXJ0RWwuYXBwZW5kQ2hpbGQoZnJpZGF5KTtcclxuICAgIGxpc3RTdGFydEVsLmFwcGVuZENoaWxkKHNhdHVyZGF5KTtcclxuICAgIGxpc3RTdGFydEVsLmFwcGVuZENoaWxkKHN1bmRheSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLnNyYyA9IEljb247XHJcbiAgICBteUljb24uY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtaW1nXCIpO1xyXG4gICAgXHJcblxyXG5cclxufVxyXG4gICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkLmpzJztcclxuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS1sb2FkLmpzJztcclxuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vY29udGFjdC1sb2FkLmpzJztcclxuaW1wb3J0IGNsZWFyRG9tIGZyb20gJy4vY2xlYXItZG9tLmpzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5sb2FkUGFnZSgpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBldmVudEhhbmRsZXIoKXtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnRuXCIpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWJ0blwiKTtcclxuXHJcblxyXG4gICAgaWYoaG9tZSl7XHJcbiAgICAgICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgY2xlYXJEb20oKTtcclxuICAgICAgICAgICAgbG9hZFBhZ2UoKTtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZihtZW51KXtcclxuICAgICAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBjbGVhckRvbSgpO1xyXG4gICAgICAgICAgICBsb2FkTWVudSgpO1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGNvbnRhY3Qpe1xyXG4gICAgICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNsZWFyRG9tKCk7XHJcbiAgICAgICAgICAgIGxvYWRDb250YWN0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXZlbnRIYW5kbGVyKCk7XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==