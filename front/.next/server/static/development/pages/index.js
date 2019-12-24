module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Carousel.Component.jsx":
/*!*******************************************!*\
  !*** ./components/Carousel.Component.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.Component.scss */ "./components/Carousel.Component.scss");
/* harmony import */ var _Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\Carousel.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const images = [{
  url: "/img/package.png",
  description: "최고의 커피를 집에서 받아보세요."
}, {
  url: "/img/coffee.png",
  description: "5시간동안 추출된 최상의 커피를 집앞으로 배송해 드립니다."
}, {
  url: "img/tea-time.png",
  // url2: "img/love.png",
  description: "소중한 사람에게 따뜻한 커피 한 잔을 선물해주세요."
}];

const CarouselContainer = () => {
  return __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    showThumbs: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, images.map((item, index) => {
    return __jsx("div", {
      key: item.index,
      className: "carousel-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, __jsx("img", {
      className: "carousel-image",
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }), item.url2 ? __jsx("img", {
      className: "carousel-image carousel-image2",
      src: item.url2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }) : null, __jsx("div", {
      className: "carousel-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, item.description, " "));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselContainer);

/***/ }),

/***/ "./components/Carousel.Component.scss":
/*!********************************************!*\
  !*** ./components/Carousel.Component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Image.Component.jsx":
/*!****************************************!*\
  !*** ./components/Image.Component.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.styles.scss */ "./components/Image.styles.scss");
/* harmony import */ var _Image_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\Image.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImageComponent = ({
  url
}) => {
  return __jsx("div", {
    className: "item-image-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    src: url,
    className: "item-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);

/***/ }),

/***/ "./components/Image.styles.scss":
/*!**************************************!*\
  !*** ./components/Image.styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/MainItem.Component.jsx":
/*!*******************************************!*\
  !*** ./components/MainItem.Component.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.Component */ "./components/Image.Component.jsx");
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\MainItem.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MainItem = () => {
  const url = "/img/bottle.png";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "mainitem-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_Image_Component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainItem);

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carousel_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel.Component */ "./components/Carousel.Component.jsx");
/* harmony import */ var _components_MainItem_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainItem.Component */ "./components/MainItem.Component.jsx");
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Carousel_Component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_components_MainItem_Component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jaewon\Desktop\web\sass-landingPage\front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map