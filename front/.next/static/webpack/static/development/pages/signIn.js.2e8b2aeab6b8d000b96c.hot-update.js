webpackHotUpdate("static\\development\\pages\\signIn.js",{

/***/ "./components/SignUpForm.Component.jsx":
/*!*********************************************!*\
  !*** ./components/SignUpForm.Component.jsx ***!
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

var _jsxFileName = "C:\\Users\\jaewon\\Desktop\\web\\udemy-sass\\front\\components\\SignUpForm.Component.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var useInput = function useInput() {
  var initValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initValue),
      value = _useState[0],
      setter = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (e.target) {
      setter(e.target.value);
    } else {
      setter();
    }
  }, []);
  return [value, handler];
};

var SignUp = function SignUp(props) {
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
      passwordCheck = _useInput6[0],
      onChangePasswordCheck = _useInput6[1];

  var _useInput7 = useInput(''),
      _useInput8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput7, 2),
      checkTerm = _useInput8[0],
      onChangeCheckTerm = _useInput8[1];

  var _useInput9 = useInput(''),
      _useInput10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput9, 2),
      passwordError = _useInput10[0],
      setpasswordError = _useInput10[1];

  var _useInput11 = useInput(''),
      _useInput12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput11, 2),
      confirmDirty = _useInput12[0],
      setConfirmDirty = _useInput12[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (selector) {
    return selector.user;
  }),
      isSignedUp = _useSelector.isSignedUp,
      isSigningUp = _useSelector.isSigningUp;

  var getFieldDecorator = props.form.getFieldDecorator;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function (e) {
    if (isSignedUp === true) {
      alert('회원가입 되었습니다.');
      onChangePassword('');
      onChangeId('');
      onChangeCheckTerm(false);
    }
  }, [isSigningUp, isSignedUp]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (!(id && password && passwordCheck)) {
      return false;
    }

    console.log({
      id: id,
      password: password,
      passwordCheck: passwordCheck,
      checkTerm: checkTerm
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"]
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
      lineNumber: 75
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "\uC774\uBA54\uC77C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
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
        lineNumber: 91
      },
      __self: this
    }),
    setFieldsvalue: id,
    onChange: onChangeId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638",
    hasFeedback: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, getFieldDecorator('password', {
    rules: [{
      required: true,
      message: '비밀번호를 입력하세요'
    }, {
      validator: validateToNextPassword
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
    placeholder: "Password",
    setFieldsvalue: password,
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }),
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    hasFeedback: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, getFieldDecorator('confirm', {
    rules: [{
      required: true,
      message: '비밀번호를 다시 입력하세요'
    }, {
      validator: compareToFirstPassword
    }]
  })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Password, {
    placeholder: "Password Check",
    prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "lock",
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }),
    onChange: onChangePasswordCheck,
    setFieldsvalue: passwordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))), __jsx("label", {
    htmlFor: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    required: true,
    id: "checkTerm",
    onChange: onChangeCheckTerm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
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
      lineNumber: 136
    },
    __self: this
  }, "\uB4F1\uB85D"))));
};

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: 'signUp'
})(SignUp));

/***/ })

})
//# sourceMappingURL=signIn.js.2e8b2aeab6b8d000b96c.hot-update.js.map