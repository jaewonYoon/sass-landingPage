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
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\udemy-sass\\front\\components\\Carousel.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var images = [{
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

var CarouselContainer = function CarouselContainer() {
  return __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    showThumbs: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, images.map(function (item, index) {
    var backgroundColor = '';

    if (index === 0) {
      backgroundColor = '#c8dee5';
    } else if (index === 1) {
      backgroundColor = '#c8e5e0';
    } else {
      backgroundColor = '#a2842f';
    }

    return __jsx("div", {
      key: item.index,
      className: "carousel-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("img", {
      className: "carousel-image",
      src: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), item.url2 ? __jsx("img", {
      className: "carousel-image carousel-image2",
      src: item.url2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }) : null, __jsx("div", {
      className: "carousel-description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.description, " "));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CarouselContainer);

/***/ })

})
//# sourceMappingURL=index.js.15c965a9a4f99d5e65e8.hot-update.js.map