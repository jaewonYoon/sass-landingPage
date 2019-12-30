webpackHotUpdate("static\\development\\pages\\signIn.js",{

/***/ "./components/SignInForm.Component.jsx":
/*!*********************************************!*\
  !*** ./components/SignInForm.Component.jsx ***!
  \*********************************************/
/*! exports provided: useInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\udemy-sass\\front\\components\\SignInForm.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

var SignInForm = function SignInForm(props) {
  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = useInput(''),
      _useInput4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useInput5 = useInput(''),
      _useInput6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      passwordError = _useInput6[0],
      setpasswordError = _useInput6[1];

  var _useInput7 = useInput(''),
      _useInput8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput7, 2),
      confirmDirty = _useInput8[0],
      setConfirmDirty = _useInput8[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (selector) {
    return selector.user;
  }),
      isSigningUp = _useSelector.isSigningUp;

  var getFieldDecorator = props.form.getFieldDecorator;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function (e) {}, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (!(id && password)) {
      return false;
    }

    console.log({
      id: id,
      password: password,
      passwordCheck: passwordCheck,
      checkTerm: checkTerm
    });
    dispatch({
      type: SIGN_UP_REQUEST
    });
  }, [id, password, passwordCheck, checkTerm]);

  var compareToFirstPassword = function compareToFirstPassword(rule, value, callback) {
    var form = props.form;

    if (value && form && value !== form.getFieldValue('password')) {
      callback('비밀번호가 일치하지 않습니다!');
    } else {
      callback();
    }
  };

  var validateToNextPassword = function validateToNextPassword(rule, value, callback) {
    var form = props.form;

    if (value && form && confirmDirty) {
      form.validateFields(['confirm'], {
        force: true
      });
    }

    callback();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "\uC774\uBA54\uC77C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, getFieldDecorator('email', {
    rules: [{
      type: 'email',
      message: '올바른 이메일 형식이 아닙니다.'
    }, {
      required: true,
      message: '이메일을 입력해주세요.'
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "E-mail",
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }),
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638",
    hasFeedback: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, getFieldDecorator('password', {
    rules: [{
      required: true,
      message: '비밀번호를 입력하세요'
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
    placeholder: "Password",
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }),
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    style: {
      "float": 'right'
    },
    loading: isSigningUp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\uB85C\uADF8\uC778"))));
};

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: 'signIn'
})(SignInForm));

/***/ })

})
//# sourceMappingURL=signIn.js.d8d61b7bf87ab7aba12b.hot-update.js.map