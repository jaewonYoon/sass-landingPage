webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ItemForm.Component.jsx":
/*!*******************************************!*\
  !*** ./components/ItemForm.Component.jsx ***!
  \*******************************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemForm.styles.scss */ "./components/ItemForm.styles.scss");
/* harmony import */ var _ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ItemForm_styles_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\sass-landingPage\\front\\components\\ItemForm.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setter(e);
  }, []);
  return [value, handler];
};

var ItemForm = function ItemForm() {
  var _useInput = useInput(1),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      itemNumber = _useInput2[0],
      onChangeItemNumber = _useInput2[1];

  var _useInput3 = useInput(3500),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      price = _useInput4[0],
      onChangePrice = _useInput4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    onChangePrice(price * 10000 + 3500);
  }, [price]));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "item-form-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    className: "item-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "quantity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uC138\uD2B8 \uAC2F\uC218"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
    size: "large",
    min: 1,
    max: 10,
    defaultValue: 1,
    onChange: onChangeItemNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "transport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\uBC30\uC1A1\uB8CC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: true,
    value: '3500원',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\uCD1D \uAE08\uC561"), __jsx("div", {
    id: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "".concat(price, "\uC6D0")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    className: "button-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\uAD6C\uB9E4"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemForm);

/***/ })

})
//# sourceMappingURL=index.js.b1d92a82590740915f76.hot-update.js.map