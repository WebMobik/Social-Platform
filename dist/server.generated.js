/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/assets/images/profile-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/profile-pic.png ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b5e188c92802e96faa6f.png\";\n\n//# sourceURL=webpack://SocialPlatform/./client/assets/images/profile-pic.png?");

/***/ }),

/***/ "./client/assets/images/unicornbikeImg.webp":
/*!**************************************************!*\
  !*** ./client/assets/images/unicornbikeImg.webp ***!
  \**************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.p, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"176fe70546a5f6b922bc.webp\";\n\n//# sourceURL=webpack://SocialPlatform/./client/assets/images/unicornbikeImg.webp?");

/***/ }),

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  exact: true,\n  path: \"/\",\n  component: _core_Home__WEBPACK_IMPORTED_MODULE_4__.default\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/users\",\n  component: _user_Users__WEBPACK_IMPORTED_MODULE_8__.default\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/signup\",\n  component: _user_Signup__WEBPACK_IMPORTED_MODULE_7__.default\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/signin\",\n  component: _auth_Signin__WEBPACK_IMPORTED_MODULE_3__.default\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_2__.default, {\n  path: \"/user/edit/:userId\",\n  component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_5__.default\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/user/:userId\",\n  component: _user_Profile__WEBPACK_IMPORTED_MODULE_6__.default\n})));\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {\n  render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__.default.isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Redirect, {\n    to: {\n      pathname: '/signin',\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(),\n    marginRight: theme.spacing(),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n});\n\nfunction Signin(props) {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: '',\n    password: '',\n    error: '',\n    redirectToReferrer: false\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_auth__WEBPACK_IMPORTED_MODULE_3__.signin)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        _auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.authenticate(data, () => {\n          setValues({ ...values,\n            error: '',\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n\n  const {\n    form\n  } = props.location.state || {\n    form: {\n      pathname: '/'\n    }\n  };\n  const {\n    classes\n  } = props;\n  return values.redirectToReferrer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Redirect, {\n    to: form\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    className: classes.title\n  }, \"Sign in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    className: classes.textField,\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n    className: classes.textField,\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    component: \"p\",\n    color: \"error\",\n    className: classes.error\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Icon, {\n    color: \"error\"\n  }, \"error\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      margin: '0px 3px',\n      position: 'relative',\n      bottom: '5px'\n    }\n  }, values.error))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Button, {\n    className: classes.submit,\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\"))));\n}\n\n__signature__(Signin, \"useState{[values, setValues]({\\r\\n        email: '',\\r\\n        password: '',\\r\\n        error: '',\\r\\n        redirectToReferrer: false\\r\\n    })}\");\n\nSignin.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.withStyles)(styles)(Signin);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\Signin.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! namespace exports */
/*! export signin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export signout [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": () => /* binding */ signin,\n/* harmony export */   \"signout\": () => /* binding */ signout\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  try {\n    const response = await fetch('/auth/signin', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    const res = await response.json();\n    return res;\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    const response = await fetch('/auth/signout', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst auth = {\n  authenticate(jwt, cb) {\n    if (typeof window !== 'undefined') sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  isAuthenticated() {\n    if (typeof window == 'undefined') return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  clearJWT(cb) {\n    if (typeof window !== 'undefined') sessionStorage.removeItem('jwt');\n    cb();\n    (0,_api_auth__WEBPACK_IMPORTED_MODULE_0__.signout)().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\auth\\\\auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Home\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_images_unicornbikeImg_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/unicornbikeImg.webp */ \"./client/assets/images/unicornbikeImg.webp\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    marginTop: theme.spacing(5)\n  },\n  title: {\n    padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  },\n  media: {\n    minHeight: 400\n  }\n}));\nfunction Home() {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default()), {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default()), {\n    className: classes.media,\n    image: _assets_images_unicornbikeImg_webp__WEBPACK_IMPORTED_MODULE_7__,\n    title: \"Unicorn Bicycle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"body2\",\n    component: \"p\"\n  }, \"Welcome to the MERN Skeleton home page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/users\"\n  }, \"Users\")));\n}\n\n__signature__(Home, \"useStyles{classes}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\core\\\\Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\core\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst Menu = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.withRouter)(({\n  history\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.AppBar, {\n  position: \"static\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n  variant: \"h6\",\n  color: \"inherit\"\n}, \"MERN Skeleton\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: \"/\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n  \"aria-label\": \"Home\",\n  style: isActive(history, \"/\")\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_1___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: \"/users\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/users\")\n}, \"Users\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: \"/signup\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/signup\")\n}, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: \"/signin\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/signin\")\n}, \"Sign In\"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n  to: \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated().user._id\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  style: isActive(history, \"/user/\" + _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.isAuthenticated().user._id)\n}, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n  color: \"inherit\",\n  onClick: () => {\n    _auth_auth_helper__WEBPACK_IMPORTED_MODULE_5__.default.clearJWT(() => history.push('/'));\n  }\n}, \"Sign out\")))));\n\nconst isActive = (history, path) => {\n  if (history.location.pathname == path) return {\n    color: \"#ff4081\"\n  };else return {\n    color: \"#ffffff\"\n  };\n};\n\nconst _default = Menu;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Menu, \"Menu\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(isActive, \"isActive\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\core\\\\Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/core/Menu.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: '#3f4771',\n      dark: '#2e355b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#ff79b0',\n      main: '#ff4081',\n      dark: '#c60055',\n      contrastText: '#000'\n    },\n    openTitle: '#3f4771',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__.pink[400],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/theme.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ DeleteUser\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nfunction DeleteUser({\n  userId\n}) {\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const [redirect, setRedirect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n\n  const clickButton = () => {\n    setOpen(true);\n  };\n\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n\n  const deleteAccount = () => {\n    const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__.default.isAuthenticated();\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_4__.remove)({\n      userId: userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__.default.clearJWT(() => console.log('deleted'));\n        setRedirect(true);\n      }\n    });\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Redirect, {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Dialog, {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogTitle, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogContentText, null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\n\n__signature__(DeleteUser, \"useState{[open, setOpen](false)}\\nuseState{[redirect, setRedirect](false)}\");\n\nDeleteUser.propTypes = {\n  userId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ EditProfile\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ \"@material-ui/icons/AddPhotoAlternate\");\n/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.makeStyles)(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  title: {\n    margin: theme.spacing(2),\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  },\n  upload: {\n    display: 'block',\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    marginTop: '10px'\n  },\n  filename: {\n    marginLeft: '10px'\n  }\n}));\nfunction EditProfile({\n  match\n}) {\n  const classes = useStyles();\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    password: '',\n    email: '',\n    about: '',\n    photo: '',\n    open: false,\n    error: '',\n    redirectToProfile: false\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__.default.isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_11__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          name: data.name,\n          email: data.email\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  const clickSubmit = () => {\n    let userData = new FormData();\n    values.name && userData.append('name', values.name);\n    values.email && userData.append('email', values.email);\n    values.about && userData.append('about', values.about);\n    values.password && userData.append('password', values.password);\n    values.photo && userData.append('photo', values.photo);\n    (0,_api_user_js__WEBPACK_IMPORTED_MODULE_11__.update)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, userData).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    const value = name === 'photo' ? event.target.files[0] : event.target.value;\n    setValues({ ...values,\n      [name]: value\n    });\n  };\n\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Redirect, {\n      to: '/user/' + values.userId\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default()), {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n    id: \"multiline-flexible\",\n    label: \"About\",\n    className: classes.textField,\n    multiline: true,\n    rows: \"2\",\n    value: values.about,\n    onChange: handleChange('about')\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"icon-button-file\",\n    accept: \"image/*\",\n    type: \"file\",\n    onChange: handleChange('photo'),\n    style: {\n      display: 'none'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"icon-button-file\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n    variant: \"contained\",\n    color: \"default\",\n    component: \"span\",\n    className: classes.upload\n  }, \"Upload \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: classes.filename\n  }, values.photo ? values.photo.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default()), {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\")));\n}\n\n__signature__(EditProfile, \"useStyles{classes}\\nuseState{[values, setValues]({\\r\\n    name: '',\\r\\n    password: '',\\r\\n    email: '',\\r\\n    about: '',\\r\\n    photo: '',\\r\\n    open: false,\\r\\n    error: '',\\r\\n    redirectToProfile: false\\r\\n  })}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/FollowProfileButton.js":
/*!********************************************!*\
  !*** ./client/user/FollowProfileButton.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ FollowProfileButton\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nfunction FollowProfileButton(props) {\n  const followClick = () => {\n    props.onButtonClick(_api_user__WEBPACK_IMPORTED_MODULE_3__.follow);\n  };\n\n  const unfollowClick = () => {\n    props.onButtonClick(_api_user__WEBPACK_IMPORTED_MODULE_3__.unfollow);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, props.following ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    variant: \"contained\",\n    color: \"secondary\",\n    onClick: unfollowClick\n  }, \"Unfollow\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: followClick\n  }, \"Follow\"));\n}\nFollowProfileButton.propTypes = {\n  following: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),\n  onButtonClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FollowProfileButton, \"FollowProfileButton\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\FollowProfileButton.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/FollowProfileButton.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _FollowProfileButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FollowProfileButton */ \"./client/user/FollowProfileButton.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    maxWidth: 600,\n    margin: 'auto',\n    padding: theme.spacing(3),\n    marginTop: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.protectedTitle\n  },\n  bigAvatar: {\n    width: 60,\n    height: 60,\n    margin: 10\n  }\n});\n\nfunction Profile({\n  match,\n  classes\n}) {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    user: {\n      following: [],\n      followers: []\n    },\n    redirectToSignin: false,\n    following: false\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.isAuthenticated();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_5__.read)({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          redirectToSignin: true\n        });\n      } else {\n        let following = checkFollow(data);\n        setValues({ ...values,\n          user: data,\n          following: following\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  const checkFollow = user => {\n    const match = user.followers.some(follower => {\n      return follower._id == jwt.user._id;\n    });\n    return match;\n  };\n\n  const clickFollowButton = callApi => {\n    callApi({\n      userId: jwt.user._id\n    }, {\n      t: jwt.token\n    }, values.user._id).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          user: data,\n          following: !values.following\n        });\n      }\n    });\n  };\n\n  if (values.redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Redirect, {\n      to: \"/signin\"\n    });\n  }\n\n  const photoUrl = values.user._id ? `/api/users/photo/${values.user._id}?${new Date().getTime()}` : '/api/users/defaultphoto';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.List, {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n    src: photoUrl\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.Person, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {\n    primary: values.user.name,\n    secondary: values.user.email\n  }), ' ', _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__.default.isAuthenticated().user._id === values.user._id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: '/user/edit/' + values.user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.IconButton, {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__.Edit, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_6__.default, {\n    userId: values.user._id\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FollowProfileButton__WEBPACK_IMPORTED_MODULE_9__.default, {\n    following: values.following,\n    onButtonClick: clickFollowButton\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {\n    primary: values.user.about\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {\n    primary: 'Joined: ' + new Date(values.user.created).toDateString()\n  }))));\n}\n\n__signature__(Profile, \"useState{[values, setValues]({\\r\\n    user: { following: [], followers: [] },\\r\\n    redirectToSignin: false,\\r\\n    following: false,\\r\\n  })}\\nuseEffect{}\");\n\nProfile.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.withStyles)(styles)(Profile);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Profile.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst styles = theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(),\n    marginRight: theme.spacing(),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n});\n\nfunction Signup({\n  classes\n}) {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: ''\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_3__.create)(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          error: '',\n          open: true\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Card, {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n    className: classes.textField,\n    id: \"name\",\n    label: \"Name\",\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n    className: classes.textField,\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n    className: classes.textField,\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    component: \"p\",\n    color: \"error\",\n    className: classes.error\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n    color: \"error\"\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n    className: classes.submit,\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogTitle, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogContentText, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n}\n\n__signature__(Signup, \"useState{[values, setValues]({\\r\\n        name: '',\\r\\n        password: '',\\r\\n        email: '',\\r\\n        open: false,\\r\\n        error: ''\\r\\n    })}\");\n\nSignup.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(Signup);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Signup.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n});\n\nfunction Users({\n  classes\n}) {\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    (0,_api_user__WEBPACK_IMPORTED_MODULE_3__.list)(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n    elevation: 4,\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.List, {\n    dense: true\n  }, users.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      to: \"/user/\" + item._id,\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Avatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.Person, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {\n      primary: item.name\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ArrowForward, null)))));\n  })));\n}\n\n__signature__(Users, \"useState{[users, setUsers]([])}\\nuseEffect{}\");\n\nUsers.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)\n};\n\nconst _default = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(Users);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Users.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! namespace exports */
/*! export create [provided] [no usage info] [missing usage info prevents renaming] */
/*! export follow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export list [provided] [no usage info] [missing usage info prevents renaming] */
/*! export read [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unfollow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export update [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => /* binding */ create,\n/* harmony export */   \"list\": () => /* binding */ list,\n/* harmony export */   \"read\": () => /* binding */ read,\n/* harmony export */   \"update\": () => /* binding */ update,\n/* harmony export */   \"remove\": () => /* binding */ remove,\n/* harmony export */   \"follow\": () => /* binding */ follow,\n/* harmony export */   \"unfollow\": () => /* binding */ unfollow\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async user => {\n  try {\n    const response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nconst list = async signal => {\n  try {\n    const response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    const response = await fetch('/api/users/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n        Authorization: `Bearer + ${credentials.t}`\n      }\n    });\n    return await response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    const response = await fetch('/api/users/' + params.userId, {\n      method: 'PUT',\n      headers: {\n        Accept: 'application/json',\n        Authorization: `Bearer + ${credentials.t}`\n      },\n      body: user\n    });\n    return await response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    const response = await fetch('/api/users/' + params.userId, {\n      method: 'DELETE',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n        Authorization: `Bearer + ${credentials.t}`\n      }\n    });\n    return response.json();\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nconst follow = async (params, credentials, followId) => {\n  try {\n    let response = await fetch('/api/users/follow', {\n      method: 'PUT',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer ' + credentials.t\n      },\n      body: JSON.stringify({\n        userId: params.userId,\n        followId: followId\n      })\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst unfollow = async (params, credentials, unfollowId) => {\n  try {\n    let response = await fetch('/api/users/unfollow', {\n      method: 'PUT',\n      headers: {\n        Accept: 'application/json',\n        'Content-Type': 'application/json',\n        Authorization: 'Bearer ' + credentials.t\n      },\n      body: JSON.stringify({\n        userId: params.userId,\n        unfollowId: unfollowId\n      })\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(list, \"list\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(read, \"read\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(update, \"update\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(follow, \"follow\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(unfollow, \"unfollow\", \"I:\\\\JavaScript\\\\Social-Platform\\\\client\\\\user\\\\api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"MOBIK_secret_key\",\n  mongoUri: \"mongodb+srv://mobik:123qwe@cluster0.lrs6j.mongodb.net/social?retryWrites=true&w=majority\"\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"I:\\\\JavaScript\\\\Social-Platform\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _models_User__WEBPACK_IMPORTED_MODULE_0__.default.findOne({\n      \"email\": req.body.email\n    });\n    if (!user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret);\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__.default.jwtSecret,\n  algorithms: ['HS256'],\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _client_assets_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client/assets/images/profile-pic.png */ \"./client/assets/images/profile-pic.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst create = async (req, res) => {\n  const user = new _models_User__WEBPACK_IMPORTED_MODULE_3__.default(req.body);\n\n  try {\n    await user.save();\n    return res.status(200).json({\n      message: 'Successfully signed up!'\n    });\n  } catch (e) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(e)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    const users = await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.find().select('name email updated created');\n    res.json(users);\n  } catch (e) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(e)\n    });\n  }\n};\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.findById(id).populate('following', '_id name').populate('followers', '_id name').exec();\n    if (!user) return res.status('400').json({\n      error: 'User not found'\n    });\n    req.profile = user;\n    next();\n  } catch (e) {\n    return res.status('400').json({\n      error: 'Could not retrieve user'\n    });\n  }\n};\n\nconst read = async (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = async (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_0___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: 'Photo could not be uploaded'\n      });\n    }\n\n    let user = req.profile;\n    user = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()(user, fields);\n    user.updated = Date.now();\n\n    if (files.photo) {\n      user.photo.data = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(files.photo.path);\n      user.photo.contentType = files.photo.type;\n    }\n\n    try {\n      await user.save();\n      user.hashed_password = undefined;\n      user.salt = undefined;\n      res.json(user);\n    } catch (e) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(e)\n      });\n    }\n  });\n};\n\nconst remove = async (req, res) => {\n  try {\n    const user = req.profile;\n    const deleteUser = await user.remove();\n    deleteUser.hashed_password = undefined;\n    deleteUser.salt = undefined;\n    res.json(deleteUser);\n  } catch (e) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(e)\n    });\n  }\n};\n\nconst photo = (req, res, next) => {\n  if (req.profile.photo.data) {\n    res.set('Content-Type', req.profile.photo.contentType);\n    return res.send(req.profile.photo.data);\n  }\n\n  next();\n};\n\nconst defaultPhoto = (req, res) => {\n  return res.sendFile(process.cwd() + _client_assets_images_profile_pic_png__WEBPACK_IMPORTED_MODULE_5__);\n};\n\nconst addFollowing = async (req, res, next) => {\n  try {\n    await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.findByIdAndUpdate(req.body.userId, {\n      $push: {\n        following: req.body.followId\n      }\n    });\n    next();\n  } catch (err) {\n    console.log('Error here \"addFollowing\"');\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst addFollower = async (req, res) => {\n  try {\n    let result = await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.findByIdAndUpdate(req.body.followId, {\n      $push: {\n        followers: req.body.userId\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  } catch (err) {\n    console.log('Error here \"addFolower\"');\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst removeFollowing = async (req, res, next) => {\n  try {\n    await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.findByIdAndUpdate(req.body.userId, {\n      $pull: {\n        following: req.body.unfollowId\n      }\n    });\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst removeFollower = async (req, res) => {\n  try {\n    let result = await _models_User__WEBPACK_IMPORTED_MODULE_3__.default.findByIdAndUpdate(req.body.unfollowId, {\n      $pull: {\n        followers: req.body.userId\n      }\n    }, {\n      new: true\n    }).populate('following', '_id name').populate('followers', '_id name').exec();\n    result.hashed_password = undefined;\n    result.salt = undefined;\n    res.json(result);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_4__.default.getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  list,\n  userByID,\n  read,\n  update,\n  remove,\n  photo,\n  defaultPhoto,\n  addFollowing,\n  addFollower,\n  removeFollowing,\n  removeFollower\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addFollowing, \"addFollowing\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(addFollower, \"addFollower\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(removeFollowing, \"removeFollowing\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(removeFollower, \"removeFollower\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\controllers\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__.default.env === 'development') {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n      publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n // modules for server side rendering\n\n\n\n\n\n\n //end\n//comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_16__.default.compile(app); // parse body params and attache them to req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()()); // secure apps by setting various HTTP headers\n\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()()); // enable CORS - Cross Origin Resource Sharing\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default().static(path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist'))); // mount routes\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__.default);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_9__.default);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ServerStyleSheets();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default().renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_15__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_12__.default, null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_7__.default)({\n    markup: markup,\n    css: css\n  }));\n}); // Catch unauthorised errors\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';\n  } catch (e) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\nconst _default = {\n  getErrorMessage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst User = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: 'Password is required'\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  about: {\n    type: String,\n    trim: true\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  following: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.ObjectId,\n    ref: 'User'\n  }],\n  followers: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.ObjectId,\n    ref: 'User'\n  }]\n});\nUser.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUser.methods = {\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\nUser.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)('User', User);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(User, \"User\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\models\\\\User.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\models\\\\User.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/models/User.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__.default.signout);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\routes\\\\auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\routes\\\\auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.list).post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.create);\nrouter.route('/api/users/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.read).put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.update).delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.remove);\nrouter.route('/api/users/photo/:userId').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.photo, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultPhoto);\nrouter.route('/api/users/defaultphoto').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.defaultPhoto);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.userByID);\nrouter.route('/api/users/follow').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.addFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.addFollower);\nrouter.route('/api/users/unfollow').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__.default.requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.removeFollowing, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__.default.removeFollower);\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\routes\\\\user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\server\\\\routes\\\\user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n_express__WEBPACK_IMPORTED_MODULE_2__.default.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__.default.port);\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_1___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoUri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default().connection.on('error', () => {\n  console.log(_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoUri);\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__.default.mongoUri}`);\n});\n\n//# sourceURL=webpack://SocialPlatform/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.hmd, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `\n        <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap\" />\n                <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n                <style>\n                    html, body {\n                        margin: 0;\n                        padding: 0;\n                    }\n                    a {\n                        text-decoration: none;\n                    }\n                </style>\n                <title>MERN Skeleton</title>\n            </head>\n            <body>\n                <div id=\"root\">${markup}</div>\n                <style id=\"jss-server-side\">${css}</style>\n                <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n            </body>\n        </html>\n    `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"I:\\\\JavaScript\\\\Social-Platform\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 53:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'source-map',\n  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.js?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|webp|png|jpe?g|gif)(\\?[\\s\\S]+)?$/,\n      type: 'asset/resource'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    },\n    fallback: {\n      'crypto': /*require.resolve*/(/*! crypto-browserify */ \"crypto-browserify\"),\n      'zlib': /*require.resolve*/(/*! browserify-zlib */ \"browserify-zlib\"),\n      'path': /*require.resolve*/(/*! path-browserify */ \"path-browserify\"),\n      'stream': /*require.resolve*/(/*! stream-browserify */ \"stream-browserify\"),\n      'http': /*require.resolve*/(/*! stream-http */ \"stream-http\"),\n      'url': /*require.resolve*/(/*! url/ */ \"url/\"),\n      'buffer': /*require.resolve*/(/*! buffer/ */ \"buffer/\"),\n      'util': /*require.resolve*/(/*! util/ */ \"util/\"),\n      'assert': /*require.resolve*/(/*! assert/ */ \"assert/\")\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"I:\\\\JavaScript\\\\Social-Platform\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"I:\\\\JavaScript\\\\Social-Platform\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://SocialPlatform/./webpack.config.client.js?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/Button\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/Card\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/CardActions\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/CardContent\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/CardMedia\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/Icon\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/TextField\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/Typography\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/colors\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/core/styles\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/icons/AddPhotoAlternate":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/AddPhotoAlternate" ***!
  \*******************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/AddPhotoAlternate\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/icons/AddPhotoAlternate%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/Delete\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/icons/Home\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"@material-ui/styles\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22@material-ui/styles%22?");

/***/ }),

/***/ "assert/":
/*!**************************!*\
  !*** external "assert/" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"assert/\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22assert/%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"body-parser\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22body-parser%22?");

/***/ }),

/***/ "browserify-zlib":
/*!**********************************!*\
  !*** external "browserify-zlib" ***!
  \**********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"browserify-zlib\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22browserify-zlib%22?");

/***/ }),

/***/ "buffer/":
/*!**************************!*\
  !*** external "buffer/" ***!
  \**************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"buffer/\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22buffer/%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"compression\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cookie-parser\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"cors\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"crypto\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22crypto%22?");

/***/ }),

/***/ "crypto-browserify":
/*!************************************!*\
  !*** external "crypto-browserify" ***!
  \************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"crypto-browserify\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22crypto-browserify%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"express-jwt\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"formidable\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"helmet\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"jsonwebtoken\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"lodash/extend\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22lodash/extend%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"mongoose\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22path%22?");

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"path-browserify\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22path-browserify%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"prop-types\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-dom/server\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"react-router-dom\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22react-router-dom%22?");

/***/ }),

/***/ "stream-browserify":
/*!************************************!*\
  !*** external "stream-browserify" ***!
  \************************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"stream-browserify\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22stream-browserify%22?");

/***/ }),

/***/ "stream-http":
/*!******************************!*\
  !*** external "stream-http" ***!
  \******************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"stream-http\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22stream-http%22?");

/***/ }),

/***/ "url/":
/*!***********************!*\
  !*** external "url/" ***!
  \***********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"url/\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22url/%22?");

/***/ }),

/***/ "util/":
/*!************************!*\
  !*** external "util/" ***!
  \************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"util/\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22util/%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-dev-middleware\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = require(\"webpack-hot-middleware\");;\n\n//# sourceURL=webpack://SocialPlatform/external_%22webpack-hot-middleware%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/server.js");
/******/ })()
;