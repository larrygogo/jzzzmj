/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card.ts":
/*!*********************!*\
  !*** ./src/Card.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\nvar Card = /** @class */ (function () {\n    function Card(number, type) {\n        this.number = number;\n        this.type = type;\n    }\n    return Card;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ2FyZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p6enptai8uL3NyYy9DYXJkLnRzPzkxZTIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENhcmQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FyZChudW1iZXIsIHR5cGUpIHtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIHJldHVybiBDYXJkO1xufSgpKTtcbmV4cG9ydCB7IENhcmQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Card.ts\n");

/***/ }),

/***/ "./src/Gamer.ts":
/*!**********************!*\
  !*** ./src/Gamer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Gamer = /** @class */ (function () {\n    function Gamer(id) {\n        this.id = \"\";\n        this.cardArray = [];\n        this.id = id;\n    }\n    Gamer.prototype.initPaiArray = function (cardArray) {\n        this.cardArray = cardArray;\n    };\n    return Gamer;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gamer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvR2FtZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2p6enptai8uL3NyYy9HYW1lci50cz80NGEzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lcihpZCkge1xuICAgICAgICB0aGlzLmlkID0gXCJcIjtcbiAgICAgICAgdGhpcy5jYXJkQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBHYW1lci5wcm90b3R5cGUuaW5pdFBhaUFycmF5ID0gZnVuY3Rpb24gKGNhcmRBcnJheSkge1xuICAgICAgICB0aGlzLmNhcmRBcnJheSA9IGNhcmRBcnJheTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBHYW1lcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Gamer.ts\n");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Main\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _Gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gamer */ \"./src/Gamer.ts\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/Card.ts\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./src/utils/utils.ts\");\n/* harmony import */ var _base_ResourceLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base/ResourceLoader */ \"./src/base/ResourceLoader.ts\");\n\n\n\n\nvar Main = /** @class */ (function () {\n    function Main() {\n        this.canvas = null;\n        this.ctx = null;\n        this.cardArray = [];\n        this.gamerArray = [];\n        this.canvas = document.getElementById(\"gameCanvas\");\n        if (this.canvas) {\n            this.ctx = this.canvas.getContext('2d');\n        }\n        new _base_ResourceLoader__WEBPACK_IMPORTED_MODULE_3__.ResourceLoader();\n    }\n    Main.prototype.initPaiArray = function () {\n        var paiArray = [];\n        var typeArray = [\"B\", \"T\", \"W\"];\n        var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n        for (var t = 0; t < typeArray.length; t++) {\n            for (var n = 0; n < numberArray.length; n++) {\n                for (var i = 0; i < 4; i++) {\n                    var pai = new _Card__WEBPACK_IMPORTED_MODULE_1__.Card(numberArray[n], typeArray[t]);\n                    paiArray.push(pai);\n                }\n            }\n        }\n        this.cardArray = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.shuffle)(paiArray);\n    };\n    Main.prototype.start = function () {\n        this.initPaiArray();\n        this.initGamer();\n        this.initGamerPaiArray();\n    };\n    Main.prototype.initGamer = function () {\n        for (var i = 0; i < 4; i++) {\n            this.gamerArray.push(new _Gamer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i.toString()));\n        }\n    };\n    Main.prototype.initGamerPaiArray = function () {\n        var _a, _b;\n        for (var i = 0; i < 3; i++) {\n            for (var j = 0; j < this.gamerArray.length; j++) {\n                this.gamerArray[j].cardArray = (_a = this.gamerArray[j].cardArray).concat.apply(_a, this.cardArray.splice(0, 4));\n            }\n        }\n        for (var j = 0; j < this.gamerArray.length; j++) {\n            this.gamerArray[j].cardArray = (_b = this.gamerArray[j].cardArray).concat.apply(_b, this.cardArray.splice(0, 1));\n            this.gamerArray[j].cardArray = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.orderPai)(this.gamerArray[j].cardArray);\n        }\n    };\n    return Main;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanp6em1qLy4vc3JjL01haW4udHM/N2E4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZXIgZnJvbSBcIi4vR2FtZXJcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9DYXJkXCI7XG5pbXBvcnQgeyBvcmRlclBhaSwgc2h1ZmZsZSB9IGZyb20gXCIuL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZUxvYWRlciB9IGZyb20gXCIuL2Jhc2UvUmVzb3VyY2VMb2FkZXJcIjtcbnZhciBNYWluID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1haW4oKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgICAgICB0aGlzLmNhcmRBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVyQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIik7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB9XG4gICAgICAgIG5ldyBSZXNvdXJjZUxvYWRlcigpO1xuICAgIH1cbiAgICBNYWluLnByb3RvdHlwZS5pbml0UGFpQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYWlBcnJheSA9IFtdO1xuICAgICAgICB2YXIgdHlwZUFycmF5ID0gW1wiQlwiLCBcIlRcIiwgXCJXXCJdO1xuICAgICAgICB2YXIgbnVtYmVyQXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdHlwZUFycmF5Lmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG51bWJlckFycmF5Lmxlbmd0aDsgbisrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhaSA9IG5ldyBDYXJkKG51bWJlckFycmF5W25dLCB0eXBlQXJyYXlbdF0pO1xuICAgICAgICAgICAgICAgICAgICBwYWlBcnJheS5wdXNoKHBhaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FyZEFycmF5ID0gc2h1ZmZsZShwYWlBcnJheSk7XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0UGFpQXJyYXkoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZXIoKTtcbiAgICAgICAgdGhpcy5pbml0R2FtZXJQYWlBcnJheSgpO1xuICAgIH07XG4gICAgTWFpbi5wcm90b3R5cGUuaW5pdEdhbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5nYW1lckFycmF5LnB1c2gobmV3IEdhbWVyKGkudG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNYWluLnByb3RvdHlwZS5pbml0R2FtZXJQYWlBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5nYW1lckFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lckFycmF5W2pdLmNhcmRBcnJheSA9IChfYSA9IHRoaXMuZ2FtZXJBcnJheVtqXS5jYXJkQXJyYXkpLmNvbmNhdC5hcHBseShfYSwgdGhpcy5jYXJkQXJyYXkuc3BsaWNlKDAsIDQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuZ2FtZXJBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdGhpcy5nYW1lckFycmF5W2pdLmNhcmRBcnJheSA9IChfYiA9IHRoaXMuZ2FtZXJBcnJheVtqXS5jYXJkQXJyYXkpLmNvbmNhdC5hcHBseShfYiwgdGhpcy5jYXJkQXJyYXkuc3BsaWNlKDAsIDEpKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZXJBcnJheVtqXS5jYXJkQXJyYXkgPSBvcmRlclBhaSh0aGlzLmdhbWVyQXJyYXlbal0uY2FyZEFycmF5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1haW47XG59KCkpO1xuZXhwb3J0IHsgTWFpbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Main.ts\n");

/***/ }),

/***/ "./src/base/Resource.ts":
/*!******************************!*\
  !*** ./src/base/Resource.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Resource\": () => (/* binding */ Resource)\n/* harmony export */ });\nvar Resource = [[\"basefdown\", \"assets/carddown/basefdown.png\"]];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFzZS9SZXNvdXJjZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qenp6bWovLi9zcmMvYmFzZS9SZXNvdXJjZS50cz9jZjE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgUmVzb3VyY2UgPSBbW1wiYmFzZWZkb3duXCIsIFwiYXNzZXRzL2NhcmRkb3duL2Jhc2VmZG93bi5wbmdcIl1dO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/base/Resource.ts\n");

/***/ }),

/***/ "./src/base/ResourceLoader.ts":
/*!************************************!*\
  !*** ./src/base/ResourceLoader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResourceLoader\": () => (/* binding */ ResourceLoader)\n/* harmony export */ });\n/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource */ \"./src/base/Resource.ts\");\n\nvar ResourceLoader = /** @class */ (function () {\n    function ResourceLoader() {\n        this.map = null;\n        // @ts-ignore\n        this.map = new Map(_Resource__WEBPACK_IMPORTED_MODULE_0__.Resource);\n        console.log(this.map);\n    }\n    return ResourceLoader;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFzZS9SZXNvdXJjZUxvYWRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qenp6bWovLi9zcmMvYmFzZS9SZXNvdXJjZUxvYWRlci50cz8xYTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlIH0gZnJvbSBcIi4vUmVzb3VyY2VcIjtcbnZhciBSZXNvdXJjZUxvYWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNvdXJjZUxvYWRlcigpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBudWxsO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcChSZXNvdXJjZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFwKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc291cmNlTG9hZGVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc291cmNlTG9hZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/base/ResourceLoader.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\n\nnew _Main__WEBPACK_IMPORTED_MODULE_0__.Main();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanp6em1qLy4vc3JjL2luZGV4LnRzP2U5NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL01haW5cIjtcbm5ldyBNYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"orderPai\": () => (/* binding */ orderPai)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/**\n * 洗牌\n * @param {*} array\n * @returns\n */\nfunction shuffle(array) {\n    var length = array == null ? 0 : array.length;\n    if (!length) {\n        return [];\n    }\n    var index = -1;\n    var lastIndex = length - 1;\n    var result = __spreadArray([], array, true);\n    while (++index < length) {\n        var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));\n        var value = result[rand];\n        result[rand] = result[index];\n        result[index] = value;\n    }\n    return result;\n}\nfunction orderPai(array) {\n    var wPai = array\n        .filter(function (item) { return item.type === \"W\"; })\n        .sort(function (a, b) { return a.number - b.number; });\n    var bPai = array\n        .filter(function (item) { return item.type === \"B\"; })\n        .sort(function (a, b) { return a.number - b.number; });\n    var tPai = array\n        .filter(function (item) { return item.type === \"T\"; })\n        .sort(function (a, b) { return a.number - b.number; });\n    return __spreadArray(__spreadArray(__spreadArray([], wPai, true), bPai, true), tPai, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qenp6bWovLi9zcmMvdXRpbHMvdXRpbHMudHM/NTYyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG4vKipcbiAqIOa0l+eJjFxuICogQHBhcmFtIHsqfSBhcnJheVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgICB2YXIgcmVzdWx0ID0gX19zcHJlYWRBcnJheShbXSwgYXJyYXksIHRydWUpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciByYW5kID0gaW5kZXggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobGFzdEluZGV4IC0gaW5kZXggKyAxKSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdFtyYW5kXTtcbiAgICAgICAgcmVzdWx0W3JhbmRdID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9yZGVyUGFpKGFycmF5KSB7XG4gICAgdmFyIHdQYWkgPSBhcnJheVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnR5cGUgPT09IFwiV1wiOyB9KVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5udW1iZXIgLSBiLm51bWJlcjsgfSk7XG4gICAgdmFyIGJQYWkgPSBhcnJheVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnR5cGUgPT09IFwiQlwiOyB9KVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5udW1iZXIgLSBiLm51bWJlcjsgfSk7XG4gICAgdmFyIHRQYWkgPSBhcnJheVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLnR5cGUgPT09IFwiVFwiOyB9KVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5udW1iZXIgLSBiLm51bWJlcjsgfSk7XG4gICAgcmV0dXJuIF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCB3UGFpLCB0cnVlKSwgYlBhaSwgdHJ1ZSksIHRQYWksIHRydWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/utils.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;