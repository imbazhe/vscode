/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/demoControl.js":
/*!********************************!*\
  !*** ./src/api/demoControl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DemoControl {\r\n  constructor() { }\r\n  async demo (ctx) {\r\n    ctx.body = {\r\n      msg: \"message demo\"\r\n    }\r\n  }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new DemoControl());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2RlbW9Db250cm9sLmpzPzY0MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLGdGQUFpQiIsImZpbGUiOiIuL3NyYy9hcGkvZGVtb0NvbnRyb2wuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZW1vQ29udHJvbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBhc3luYyBkZW1vIChjdHgpIHtcclxuICAgIGN0eC5ib2R5ID0ge1xyXG4gICAgICBtc2c6IFwibWVzc2FnZSBkZW1vXCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgRGVtb0NvbnRyb2woKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/api/demoControl.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-json */ \"koa-json\");\n/* harmony import */ var koa_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_json__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koa-compose */ \"koa-compose\");\n/* harmony import */ var koa_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koa_compose__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/routes */ \"./src/routes/routes.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndebugger\r\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a()\r\n\r\n// app.use(helmet())\r\n// app.use(statics(path.join(__dirname,\"../public\")))\r\n// app.use(router())\r\n\r\nconst middleware = koa_compose__WEBPACK_IMPORTED_MODULE_7___default()([\r\n  koa_body__WEBPACK_IMPORTED_MODULE_3___default.a,\r\n  koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname,\"../public\")),\r\n  _koa_cors__WEBPACK_IMPORTED_MODULE_6___default()(),\r\n  koa_json__WEBPACK_IMPORTED_MODULE_5___default()({ pretty:false , param:\"pretty\"}),\r\n  koa_helmet__WEBPACK_IMPORTED_MODULE_2___default()()\r\n])\r\n\r\napp.use(middleware)\r\napp.use(Object(_routes_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"])())\r\n\r\n\r\napp.listen(3000)\n/* WEBPACK VAR INJECTION */}.call(this, \"src\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUI7QUFDRTtBQUNRO0FBQ0Q7QUFDRTtBQUNEO0FBQ0g7QUFDSzs7QUFFRzs7O0FBR3BDO0FBQ0EsZ0JBQWdCLDBDQUFHOztBQUVuQjtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGtEQUFPO0FBQzFCLEVBQUUsK0NBQU87QUFDVCxFQUFFLGlEQUFPLENBQUMsMkNBQUk7QUFDZCxFQUFFLGdEQUFJO0FBQ04sRUFBRSwrQ0FBUSxFQUFFLCtCQUErQjtBQUMzQyxFQUFFLGlEQUFNO0FBQ1I7O0FBRUE7QUFDQSxRQUFRLDhEQUFNOzs7QUFHZCxnQiIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBLb2EgZnJvbSAna29hJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2tvYS1oZWxtZXQnXHJcbmltcG9ydCBrb2FCb2R5IGZyb20gJ2tvYS1ib2R5J1xyXG5pbXBvcnQgc3RhdGljcyBmcm9tICdrb2Etc3RhdGljJ1xyXG5pbXBvcnQganNvblV0aWwgZnJvbSAna29hLWpzb24nXHJcbmltcG9ydCBjb3JzIGZyb20gJ0Brb2EvY29ycydcclxuaW1wb3J0IGNvbXBvc2UgZnJvbSAna29hLWNvbXBvc2UnXHJcblxyXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVzL3JvdXRlcydcclxuXHJcblxyXG5kZWJ1Z2dlclxyXG5jb25zdCBhcHAgPSBuZXcgS29hKClcclxuXHJcbi8vIGFwcC51c2UoaGVsbWV0KCkpXHJcbi8vIGFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLFwiLi4vcHVibGljXCIpKSlcclxuLy8gYXBwLnVzZShyb3V0ZXIoKSlcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBjb21wb3NlKFtcclxuICBrb2FCb2R5LFxyXG4gIHN0YXRpY3MocGF0aC5qb2luKF9fZGlybmFtZSxcIi4uL3B1YmxpY1wiKSksXHJcbiAgY29ycygpLFxyXG4gIGpzb25VdGlsKHsgcHJldHR5OmZhbHNlICwgcGFyYW06XCJwcmV0dHlcIn0pLFxyXG4gIGhlbG1ldCgpXHJcbl0pXHJcblxyXG5hcHAudXNlKG1pZGRsZXdhcmUpXHJcbmFwcC51c2Uocm91dGVyKCkpXHJcblxyXG5cclxuYXBwLmxpc3RlbigzMDAwKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routes/demoRouter.js":
/*!**********************************!*\
  !*** ./src/routes/demoRouter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_demoControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/demoControl */ \"./src/api/demoControl.js\");\n\r\n\r\n\r\n\r\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a()\r\n\r\nrouter.get('/demo', _api_demoControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].demo)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RlbW9Sb3V0ZXIuanM/N2EwMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjs7QUFFYTs7QUFFNUMsbUJBQW1CLGlEQUFNOztBQUV6QixvQkFBb0Isd0RBQVc7O0FBRWhCLHFFIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9kZW1vUm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJ1xyXG5cclxuaW1wb3J0IGRlbW9Db250cm9sIGZyb20gJy4uL2FwaS9kZW1vQ29udHJvbCdcclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnL2RlbW8nLCBkZW1vQ29udHJvbC5kZW1vKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/demoRouter.js\n");

/***/ }),

/***/ "./src/routes/routes.js":
/*!******************************!*\
  !*** ./src/routes/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n/* harmony import */ var koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_combine_routers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _demoRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demoRouter */ \"./src/routes/demoRouter.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (koa_combine_routers__WEBPACK_IMPORTED_MODULE_0___default()(\r\n  _demoRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3JvdXRlcy5qcz82NDFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBQ1g7OztBQUd0Qix5SEFBYztBQUM3QixFQUFFLG1EQUFVO0FBQ1osQyIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcm91dGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbWJpbmVSb3V0ZXJzIGZyb20gJ2tvYS1jb21iaW5lLXJvdXRlcnMnXHJcbmltcG9ydCBkZW1vUm91dGVyIGZyb20gJy4vZGVtb1JvdXRlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUm91dGVycyhcclxuICBkZW1vUm91dGVyXHJcbikiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/routes.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@koa/cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa29hL2NvcnNcIj9hNjk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBrb2EvY29ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrb2EvY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@koa/cors\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2FcIj9lZWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImtvYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImtvYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa\n");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtYm9keVwiPzNmNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtYm9keVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-body\n");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-combine-routers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tYmluZS1yb3V0ZXJzXCI/MmM3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtY29tYmluZS1yb3V0ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWNvbWJpbmUtcm91dGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-combine-routers\n");

/***/ }),

/***/ "koa-compose":
/*!******************************!*\
  !*** external "koa-compose" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-compose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtY29tcG9zZVwiPzczMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWNvbXBvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtY29tcG9zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-compose\n");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtaGVsbWV0XCI/NDJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2EtaGVsbWV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-helmet\n");

/***/ }),

/***/ "koa-json":
/*!***************************!*\
  !*** external "koa-json" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-json\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2EtanNvblwiPzY1MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoia29hLWpzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJrb2EtanNvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-json\n");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etcm91dGVyXCI/MDM1ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-router\n");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJrb2Etc3RhdGljXCI/OWE0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJrb2Etc3RhdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwia29hLXN0YXRpY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///koa-static\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ })

/******/ });