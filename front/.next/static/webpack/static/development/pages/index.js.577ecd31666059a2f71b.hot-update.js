webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ItemForm.Component.jsx":
/*!*******************************************!*\
  !*** ./components/ItemForm.Component.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemForm.styles.scss */ "./components/ItemForm.styles.scss");
/* harmony import */ var _ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\ItemForm.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ItemForm = function ItemForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      itemNumber = _useState[0],
      setItemNumber = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      price = _useState2[0],
      setPrice = _useState2[1];

  var onChange = function onChange() {};

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "item-form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    className: "item-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\uC138\uD2B8 \uAC2F\uC218"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    size: "large",
    min: 1,
    max: 10,
    defaultValue: 1,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "transport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\uBC30\uC1A1\uB8CC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    disabled: true,
    value: '3500원',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\uCD1D \uAE08\uC561"), __jsx("div", {
    id: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    className: "button-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\uAD6C\uB9E4"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemForm);

/***/ })

})
//# sourceMappingURL=index.js.577ecd31666059a2f71b.hot-update.js.map