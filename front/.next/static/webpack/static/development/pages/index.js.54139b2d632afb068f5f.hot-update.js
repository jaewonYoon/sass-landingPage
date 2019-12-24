webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Carousel.Component.jsx":
/*!*******************************************!*\
  !*** ./components/Carousel.Component.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel.Component.scss */ "./components/Carousel.Component.scss");
/* harmony import */ var _Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Carousel_Component_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\Carousel.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var images = [{
  url: "/img/package.png",
  text: "최고의 커피를 집에서 받아보세요."
}, {
  url: "/img/coffee.png",
  text: "5시간동안 추출된 최상의 커피가 여러분 집앞에서 대기합니다."
}];

var CarouselContainer = function CarouselContainer() {
  return __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    showThumbs: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, images.map(function (item, index) {
    return __jsx("div", {
      key: item.index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      className: "carousel-image",
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " ", item.text, " "));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselContainer);

/***/ })

})
//# sourceMappingURL=index.js.54139b2d632afb068f5f.hot-update.js.map