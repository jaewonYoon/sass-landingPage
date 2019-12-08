webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux/es/redux.js":
false,

/***/ "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/symbol-observable/es/index.js":
false,

/***/ "../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/symbol-observable/es/ponyfill.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\udemy-sass\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var App = function App(_ref) {
  var Component = _ref.Component,
      store = _ref.store;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(Component, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
};

var configureStore = function configureStore(initialState, options) {
  var enhancer =  false ? undefined : Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(redux__WEBPACK_IMPORTED_MODULE_5__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(midlewares)), !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
    return f;
  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(rootReducer, initialState, enhancer);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(configureStore)(App));

/***/ })

})
//# sourceMappingURL=_app.js.12f7154c09c0754f27bf.hot-update.js.map