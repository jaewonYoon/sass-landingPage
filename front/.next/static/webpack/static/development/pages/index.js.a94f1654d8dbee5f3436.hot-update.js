webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Carousel_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel.Component */ "./components/Carousel.Component.jsx");
/* harmony import */ var _components_MainItem_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MainItem.Component */ "./components/MainItem.Component.jsx");
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home() {
  var _useSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (selector) {
    return selector.user;
  }),
      me = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (me && me.id) {
      console.log("me\uAC00 \uB85C\uADF8\uC778\uD55C \uC0C1\uD0DC\uC785\uB2C8\uB2E4.");
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Carousel_Component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_MainItem_Component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a94f1654d8dbee5f3436.hot-update.js.map