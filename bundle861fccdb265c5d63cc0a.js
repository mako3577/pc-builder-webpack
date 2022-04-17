/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/countPrice.js":
/*!***************************!*\
  !*** ./src/countPrice.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var countPrice = function countPrice() {
  var priceCols = document.querySelectorAll(".price");
  var summaryCost = 0;

  var _iterator = _createForOfIteratorHelper(priceCols),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var price = _step.value;

      if (!price.closest("tr").classList.contains("inactive")) {
        console.log("inactive");
        summaryCost += parseInt(price.innerText);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  document.querySelector(".price-info").textContent = "\u0141\u0105czna cena to ".concat(summaryCost, " PLN.");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countPrice);

/***/ }),

/***/ "./src/getCategories.js":
/*!******************************!*\
  !*** ./src/getCategories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// creates form of all categories with input-style checkbox
// form can be used to hide&show selected categories
var getCategories = function getCategories() {
  var categories = document.querySelectorAll("option");

  var _iterator = _createForOfIteratorHelper(categories),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var category = _step.value;
      var divContainer = document.createElement("div"); // 'wybierz kategorię' will not be displayed

      if (category.id > 0) {
        var filterInput = document.createElement("input");
        filterInput.classList.add("catCheckbox");
        filterInput.setAttribute("type", "checkbox");
        filterInput.setAttribute("id", "".concat(category.getAttribute("id")));
        filterInput.checked = true;
        filterInput.setAttribute("name", "".concat(category.innerText));
        var filterLabel = document.createElement("label");
        filterLabel.setAttribute("for", "".concat(category.getAttribute("id")));
        filterLabel.innerText = "".concat(category.innerText);
        filterLabel.style.padding = "6px 12px";
        divContainer.appendChild(filterInput);
        divContainer.appendChild(filterLabel);
        document.querySelector(".filterMenu form").appendChild(divContainer);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategories);

/***/ }),

/***/ "./src/getSelectedCategories.js":
/*!**************************************!*\
  !*** ./src/getSelectedCategories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// returns an array of selected categories ID's
var getSelectedCategories = function getSelectedCategories() {
  var inFilterCategories = document.querySelectorAll(".catCheckbox");
  var idArr = [];

  var _iterator = _createForOfIteratorHelper(inFilterCategories),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var checkedCategory = _step.value;

      if (checkedCategory.checked) {
        // returns text inside label connected with input
        idArr.push(checkedCategory.nextSibling.innerText);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  console.log(idArr);
  return idArr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSelectedCategories);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/general.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/general.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  letter-spacing: 0.2px;\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.space-btw {\n  justify-content: space-between;\n}\n\n.primary-header {\n  color: white;\n  font-size: 40px;\n}\n\n.secondary-header {\n  color: #222;\n  font-weight: 600;\n  font-size: 35px;\n}\n\n.tertiary-header {\n  font-size: 25px;\n  padding: 15px;\n  color: #333;\n}\n\ntd.buttons {\n  display: flex;\n  justify-content: space-around;\n  gap: 5px;\n  height: 40px;\n  /* width: 90px; */\n  padding: 4px 8px;\n}\n\n/* basic width od the table-inside buttons */\nbutton {\n  width: 45px;\n  cursor: pointer;\n}\n\n/* universal style for all buttons */\n.button {\n  border: none;\n  box-shadow: 0px 0px 3px rgba(10, 59, 149, 0.4666666667);\n  background-color: rgba(9, 96, 211, 0.0666666667);\n  transition: box-shadow 0.3s, transform 0.3s;\n}\n\n.button:hover {\n  background-color: rgba(9, 97, 211, 0.1921568627);\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.801);\n}\n\n.button:active {\n  background-color: rgba(9, 97, 211, 0.337254902);\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.801);\n  transform: scale(101%);\n}\n\n.big-btn {\n  grid-column: 1/-1;\n  width: 70%;\n  height: 60px;\n  justify-self: center;\n}\n\n.big-btn-text {\n  font-size: 20px;\n  font-weight: 600;\n  color: #222;\n}", "",{"version":3,"sources":["webpack://./src/styles/general.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;AACF;;AACA;EACE,8BAAA;AAEF;;AACA;EACE,YAAA;EACA,eAAA;AAEF;;AACA;EACE,WAAA;EACA,gBAAA;EACA,eAAA;AAEF;;AACA;EACE,eAAA;EACA,aAAA;EACA,WAAA;AAEF;;AACA;EACE,aAAA;EACA,6BAAA;EACA,QAAA;EACA,YAAA;EACA,iBAAA;EACA,gBAAA;AAEF;;AACA,4CAAA;AACA;EACE,WAAA;EACA,eAAA;AAEF;;AACA,oCAAA;AACA;EACE,YAAA;EACA,uDAAA;EACA,gDAAA;EACA,2CAAA;AAEF;;AACA;EACE,gDAAA;EACA,4CAAA;AAEF;;AACA;EACE,+CAAA;EACA,4CAAA;EACA,sBAAA;AAEF;;AACA;EACE,iBAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;AAEF;;AACA;EACE,eAAA;EACA,gBAAA;EACA,WAAA;AAEF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  letter-spacing: +0.2px;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n.space-btw {\r\n  justify-content: space-between;\r\n}\r\n\r\n.primary-header {\r\n  color: white;\r\n  font-size: 40px;\r\n}\r\n\r\n.secondary-header {\r\n  color: #222;\r\n  font-weight: 600;\r\n  font-size: 35px;\r\n}\r\n\r\n.tertiary-header {\r\n  font-size: 25px;\r\n  padding: 15px;\r\n  color: #333;\r\n}\r\n\r\ntd.buttons {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  gap: 5px;\r\n  height: 40px;\r\n  /* width: 90px; */\r\n  padding: 4px 8px;\r\n}\r\n\r\n/* basic width od the table-inside buttons */\r\nbutton {\r\n  width: 45px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* universal style for all buttons */\r\n.button {\r\n  border: none;\r\n  box-shadow: 0px 0px 3px #0a3b9577;\r\n  background-color: #0960d311;\r\n  transition: box-shadow 0.3s, transform 0.3s;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #0961d331;\r\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.801);\r\n}\r\n\r\n.button:active {\r\n  background-color: #0961d356;\r\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.801);\r\n  transform: scale(101%);\r\n}\r\n\r\n.big-btn {\r\n  grid-column: 1/-1;\r\n  width: 70%;\r\n  height: 60px;\r\n  justify-self: center;\r\n}\r\n\r\n.big-btn-text {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  color: #222;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  --deep-dark: rgb(26, 26, 26);\n  --light-dark: rgb(79, 82, 92);\n  --light-blue: rgb(0, 132, 255);\n  --dark-blue: rgb(2, 84, 161);\n  --light: rgb(245, 245, 245);\n}\n\n.pc-builder {\n  /* height: 700px; */\n  width: 1000px;\n  margin: 100px auto;\n  background-color: aliceblue;\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.305);\n  overflow-x: hidden;\n  position: relative;\n}\n\n.header {\n  display: flex;\n  background: rgb(10, 58, 149);\n  background: linear-gradient(90deg, rgb(10, 58, 149) 13%, rgb(0, 212, 255) 99%);\n  /* (var(--light-blue), red); */\n  height: 120px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px 15px 0 0;\n}\n\n/* INPUTS */\n.creating-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 50px;\n  row-gap: 80px;\n  padding-bottom: 80px;\n  align-items: center;\n  padding: 40px 80px;\n  justify-content: center;\n  margin-bottom: 40px;\n  position: relative;\n}\n\n.input-info {\n  font-size: 20px;\n}\n\n.input-field,\n.select-field {\n  height: 35px;\n  width: 100%;\n}\n\n/* LIST CONTAINING ALL COMPUTERS */\n.listItems {\n  display: flex;\n  grid-column: 1/-1;\n  flex-direction: column;\n  font-size: 20px;\n  /* gap: 20px; */\n  list-style: none;\n}\n\n.table-div {\n  position: relative;\n}\n\n.table {\n  font-size: 16px;\n  border-collapse: separate;\n  width: 100%;\n}\n\n.table td {\n  text-overflow: ellipcsis;\n}\n\n.table th {\n  width: 25%;\n  text-align: left;\n  height: 50px;\n  background-color: rgb(173, 197, 239);\n  justify-items: center;\n  padding-left: 8px;\n}\n\n.table td {\n  padding: 5px 45px 5px 8px;\n}\n\n.table tr:nth-of-type(even) {\n  background-color: rgb(228, 238, 255);\n}\n\n.table th:nth-child(3) {\n  width: fit-content;\n}\n\n.table td:nth-child(3) {\n  width: fit-content;\n}\n\n.computer {\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  display: flex;\n}\n\n.edit-button {\n  position: absolute;\n  width: 20%;\n  height: 100%;\n  left: 80%;\n  top: 0;\n  display: none;\n}\n\nbutton i {\n  font-size: 16px;\n}\n\n.empty-list-info {\n  display: none;\n  font-size: 20px;\n  padding: 13px 26px;\n  text-align: center;\n}\n\n.price-info {\n  display: none;\n  font-size: 20px;\n  padding: 13px 26px;\n  text-align: center;\n  background-color: rgba(68, 68, 68, 0.26);\n}\n\n.empty-list-info.visible {\n  display: block;\n}\n\n.price-info.visible {\n  display: block;\n}\n\n@keyframes fromBottom {\n  from {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(-100%);\n  }\n}\ntr.inactive {\n  display: none;\n}\n\nlabel {\n  color: #222;\n}\n\n.category-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n\n.category-tooltip .info-icon {\n  transform: translateY(-35px);\n  stroke: rgba(10, 59, 149, 0.8352941176);\n}\n\n.th-kategoria {\n  position: relative;\n}\n\n.category-filter-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-40%, 40%) !important;\n  background-color: rgba(10, 59, 149, 0.1843137255);\n}\n\n.category-filter-icon {\n  height: 24px;\n  width: 24px;\n}\n\n.filterMenu {\n  display: none;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgb(209, 226, 241);\n  padding: 10px;\n  transform: translateY(-100%);\n  line-height: 1.6;\n  border: #444 solid 1px;\n}\n\n.filterMenu.active {\n  display: block;\n  animation: fromBottom 0.5s;\n  z-index: 4;\n}\n\n/* category settings */\n.category-settings-div {\n  position: absolute;\n  display: grid;\n  column-gap: 35px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 125px 0fr 50px;\n  height: 100%;\n  width: 100%;\n  left: 100%;\n  opacity: 0;\n  background: rgb(255, 255, 255);\n  /* backdrop-filter: blur(3px); -------- animations is not smooth*/\n  transition: all 0.5s;\n}\n\n.category-settings-div.active {\n  transform: translateX(-100%);\n  opacity: 1;\n  z-index: 5;\n}\n\n.categories-list {\n  flex-direction: column;\n  padding: 15px;\n  padding-top: 25px;\n}\n\n/* hide 'wybierz kategorię' */\n.categories-list li:first-child {\n  display: none;\n}\n\n.categories-list li:nth-child(odd) {\n  background-color: rgba(102, 165, 238, 0.171);\n}\n\n.categories-list li {\n  padding: 4px 0 4px 4px;\n  align-items: center;\n}\n\n.delete-category.button {\n  height: 25px;\n  width: 30px;\n}\n\n.category-settings-header {\n  grid-column: 1/-1;\n  text-align: center;\n  padding-top: 4%;\n  height: 125px;\n  color: black;\n  background-color: rgba(102, 102, 102, 0.247);\n}\n\n.wrap-cat {\n  flex-direction: column;\n}\n\n.add-cat-btn {\n  height: 30px;\n  width: fit-content;\n  padding: 0 5px;\n  font-weight: 600;\n  color: #444;\n}\n\n.new-cat-input {\n  width: 60%;\n  padding-left: 3px;\n}\n\n.input-cat-div {\n  padding-left: 15px;\n  padding-right: 3px;\n}\n\n.close-clas-edit-btn.button {\n  margin-top: 50px;\n  grid-column: 1/-1;\n  width: 60%;\n  justify-self: center;\n}\n\n.wrap-for-button {\n  position: relative;\n}\n\n.info-icon {\n  height: 24px;\n  position: absolute;\n  stroke: white;\n  z-index: 4;\n}\n\n[data-tooltip]:before {\n  /* needed - do not touch */\n  content: attr(data-tooltip);\n  position: absolute;\n  opacity: 0;\n  /* customizable */\n  transition: all 0.15s ease;\n  padding: 10px;\n  color: #333;\n  border-radius: 10px;\n  box-shadow: 2px 2px 1px silver;\n}\n\n[data-tooltip]:hover:before {\n  /* needed - do not touch */\n  opacity: 1;\n  z-index: 4;\n  /* customizable */\n  background: whitesmoke;\n  margin-top: 1px;\n  margin-left: 20px;\n  border: rgba(51, 51, 51, 0.226) 1px solid;\n}\n\n[data-tooltip]:not([data-tooltip-persistent]):before {\n  pointer-events: none;\n}\n\n.tooltip {\n  position: absolute;\n  margin: 5px;\n}\n\n.filter-info {\n  padding-bottom: 10px;\n}\n\n.filter-buttons {\n  padding-top: 15px;\n  justify-content: space-evenly;\n}\n\n.filter-button {\n  width: 46%;\n  height: 45px;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 1px 2px;\n  color: white;\n  letter-spacing: 0.35px;\n  background-color: rgba(10, 59, 149, 0.6784313725) !important;\n}\n\n.price-icon {\n  height: 24px;\n  display: none;\n}\n\n.price-icon.sortToLowest {\n  transform: rotateX(180deg);\n}\n\n.th-cena .flex:first-child {\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAMhB;EACE,4BAAA;EACA,6BAAA;EACA,8BAAA;EACA,4BAAA;EACA,2BAAA;AAHF;;AAMA;EACE,mBAAA;EACA,aAAA;EACA,kBAAA;EACA,2BAAA;EACA,mBAAA;EACA,yCAAA;EACA,kBAAA;EACA,kBAAA;AAHF;;AAMA;EACE,aAAA;EACA,4BAAA;EACA,8EAAA;EACA,8BAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,4BAAA;AAJF;;AAOA,WAAA;AAEA;EACE,aAAA;EACA,8BAAA;EAEA,gBAAA;EACA,aAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;EAEA,kBAAA;AAPF;;AAUA;EACE,eAAA;AAPF;;AAUA;;EAEE,YAAA;EACA,WAAA;AAPF;;AAUA,kCAAA;AACA;EACE,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AAPF;;AASA;EACE,kBAAA;AANF;;AASA;EACE,eAAA;EACA,yBAAA;EACA,WAAA;AANF;;AASA;EACE,wBAAA;AANF;;AASA;EACE,UAAA;EACA,gBAAA;EACA,YAAA;EACA,oCAAA;EACA,qBAAA;EACA,iBAAA;AANF;;AAQA;EACE,yBAAA;AALF;;AAQA;EACE,oCAAA;AALF;;AAOA;EACE,kBAAA;AAJF;;AAMA;EACE,kBAAA;AAHF;;AAMA;EACE,mBAAA;EACA,8BAAA;EACA,eAAA;EACA,aAAA;AAHF;;AAMA;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,MAAA;EACA,aAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AAHF;;AAMA;EACE,aAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,wCAAA;AAHF;;AAMA;EACE,cAAA;AAHF;;AAMA;EACE,cAAA;AAHF;;AAMA;EACE;IACE,UAAA;IACA,wBAAA;EAHF;EAKA;IACE,UAAA;IACA,4BAAA;EAHF;AACF;AAMA;EACE,aAAA;AAJF;;AAOA;EACE,WAAA;AAJF;;AAUA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAPF;;AAUA;EACE,4BAAA;EACA,uCAAA;AAPF;;AAUA;EACE,kBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,0CAAA;EACA,iDAAA;AAPF;;AASA;EACE,YAAA;EACA,WAAA;AANF;;AASA;EACE,aAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,oCAAA;EACA,aAAA;EACA,4BAAA;EAEA,gBAAA;EAEA,sBAAA;AARF;;AAWA;EACE,cAAA;EAEA,0BAAA;EACA,UAAA;AATF;;AAYA,sBAAA;AACA;EACE,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,8BAAA;EACA,kCAAA;EAEA,YAAA;EACA,WAAA;EACA,UAAA;EACA,UAAA;EAEA,8BAAA;EACA,iEAAA;EACA,oBAAA;AAXF;;AAcA;EACE,4BAAA;EACA,UAAA;EACA,UAAA;AAXF;;AAcA;EACE,sBAAA;EACA,aAAA;EACA,iBAAA;AAXF;;AAcA,6BAAA;AACA;EACE,aAAA;AAXF;;AAcA;EACE,4CAAA;AAXF;;AAaA;EACE,sBAAA;EACA,mBAAA;AAVF;;AAaA;EACE,YAAA;EACA,WAAA;AAVF;;AAaA;EACE,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,4CAAA;AAVF;;AAaA;EACE,sBAAA;AAVF;;AAaA;EACE,YAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;AAVF;;AAaA;EACE,UAAA;EACA,iBAAA;AAVF;;AAaA;EACE,kBAAA;EACA,kBAAA;AAVF;;AAaA;EACE,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,oBAAA;AAVF;;AAaA;EACE,kBAAA;AAVF;;AAgBA;EACE,YAAA;EACA,kBAAA;EACA,aAAA;EACA,UAAA;AAbF;;AAgBA;EACE,0BAAA;EACA,2BAAA;EACA,kBAAA;EACA,UAAA;EAEA,iBAAA;EACA,0BAAA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;EACA,8BAAA;AAdF;;AAiBA;EACE,0BAAA;EACA,UAAA;EACA,UAAA;EAEA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;EACA,yCAAA;AAfF;;AAkBA;EACE,oBAAA;AAfF;;AAkBA;EACE,kBAAA;EACA,WAAA;AAfF;;AAkBA;EACE,oBAAA;AAfF;;AAkBA;EACE,iBAAA;EACA,6BAAA;AAfF;;AAiBA;EACE,UAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,sBAAA;EACA,4DAAA;AAdF;;AAiBA;EACE,YAAA;EACA,aAAA;AAdF;;AAiBA;EACE,0BAAA;AAdF;;AAiBA;EACE,mBAAA;AAdF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\n\n$primary-color: #2fa8cc;\n$secondary-color: #f4f4f4;\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\n\n:root {\n  --deep-dark: rgb(26, 26, 26);\n  --light-dark: rgb(79, 82, 92);\n  --light-blue: rgb(0, 132, 255);\n  --dark-blue: rgb(2, 84, 161);\n  --light: rgb(245, 245, 245);\n}\n\n.pc-builder {\n  /* height: 700px; */\n  width: 1000px;\n  margin: 100px auto;\n  background-color: aliceblue;\n  border-radius: 15px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.305);\n  overflow-x: hidden;\n  position: relative;\n}\n\n.header {\n  display: flex;\n  background: rgb(10, 58, 149);\n  background: linear-gradient(90deg, rgba(10, 58, 149, 1) 13%, rgba(0, 212, 255, 1) 99%);\n  /* (var(--light-blue), red); */\n\n  height: 120px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 15px 15px 0 0;\n}\n\n/* INPUTS */\n\n.creating-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  column-gap: 50px;\n  row-gap: 80px;\n  padding-bottom: 80px;\n  align-items: center;\n  padding: 40px 80px;\n  justify-content: center;\n  margin-bottom: 40px;\n\n  position: relative;\n}\n\n.input-info {\n  font-size: 20px;\n}\n\n.input-field,\n.select-field {\n  height: 35px;\n  width: 100%;\n}\n\n/* LIST CONTAINING ALL COMPUTERS */\n.listItems {\n  display: flex;\n  grid-column: 1/-1;\n  flex-direction: column;\n  font-size: 20px;\n  /* gap: 20px; */\n  list-style: none;\n}\n.table-div {\n  position: relative;\n}\n\n.table {\n  font-size: 16px;\n  border-collapse: separate;\n  width: 100%;\n}\n\n.table td {\n  text-overflow: ellipcsis;\n}\n\n.table th {\n  width: 25%;\n  text-align: left;\n  height: 50px;\n  background-color: rgb(173, 197, 239);\n  justify-items: center;\n  padding-left: 8px;\n}\n.table td {\n  padding: 5px 45px 5px 8px;\n}\n\n.table tr:nth-of-type(even) {\n  background-color: rgb(228, 238, 255);\n}\n.table th:nth-child(3) {\n  width: fit-content;\n}\n.table td:nth-child(3) {\n  width: fit-content;\n}\n\n.computer {\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0;\n  display: flex;\n}\n\n.edit-button {\n  position: absolute;\n  width: 20%;\n  height: 100%;\n  left: 80%;\n  top: 0;\n  display: none;\n}\n\nbutton i {\n  font-size: 16px;\n}\n\n.empty-list-info {\n  display: none;\n  font-size: 20px;\n  padding: 13px 26px;\n  text-align: center;\n}\n\n.price-info {\n  display: none;\n  font-size: 20px;\n  padding: 13px 26px;\n  text-align: center;\n  background-color: rgba(68, 68, 68, 0.26);\n}\n\n.empty-list-info.visible {\n  display: block;\n}\n\n.price-info.visible {\n  display: block;\n}\n\n@keyframes fromBottom {\n  from {\n    opacity: 0;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(-100%);\n  }\n}\n\ntr.inactive {\n  display: none;\n}\n\nlabel {\n  color: #222;\n}\n\n// CATEGORIES\n// ***********************\n\n.category-tooltip {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n\n.category-tooltip .info-icon {\n  transform: translateY(-35px);\n  stroke: #0a3b95d5;\n}\n\n.th-kategoria {\n  position: relative;\n}\n\n.category-filter-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-40%, 40%) !important;\n  background-color: #0a3b952f;\n}\n.category-filter-icon {\n  height: 24px;\n  width: 24px;\n}\n\n.filterMenu {\n  display: none;\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgb(209, 226, 241);\n  padding: 10px;\n  transform: translateY(-100%);\n\n  line-height: 1.6;\n\n  border: #444 solid 1px;\n}\n\n.filterMenu.active {\n  display: block;\n  // transform: translateY(-100%);\n  animation: fromBottom 0.5s;\n  z-index: 4;\n}\n\n/* category settings */\n.category-settings-div {\n  position: absolute;\n  display: grid;\n  column-gap: 35px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 125px 0fr 50px;\n\n  height: 100%;\n  width: 100%;\n  left: 100%;\n  opacity: 0;\n\n  background: rgb(255, 255, 255);\n  /* backdrop-filter: blur(3px); -------- animations is not smooth*/\n  transition: all 0.5s;\n}\n\n.category-settings-div.active {\n  transform: translateX(-100%);\n  opacity: 1;\n  z-index: 5;\n}\n\n.categories-list {\n  flex-direction: column;\n  padding: 15px;\n  padding-top: 25px;\n}\n\n/* hide 'wybierz kategorię' */\n.categories-list li:first-child {\n  display: none;\n}\n\n.categories-list li:nth-child(odd) {\n  background-color: rgba(102, 165, 238, 0.171);\n}\n.categories-list li {\n  padding: 4px 0 4px 4px;\n  align-items: center;\n}\n\n.delete-category.button {\n  height: 25px;\n  width: 30px;\n}\n\n.category-settings-header {\n  grid-column: 1/-1;\n  text-align: center;\n  padding-top: 4%;\n  height: 125px;\n  color: black;\n  background-color: rgba(102, 102, 102, 0.247);\n}\n\n.wrap-cat {\n  flex-direction: column;\n}\n\n.add-cat-btn {\n  height: 30px;\n  width: fit-content;\n  padding: 0 5px;\n  font-weight: 600;\n  color: #444;\n}\n\n.new-cat-input {\n  width: 60%;\n  padding-left: 3px;\n}\n\n.input-cat-div {\n  padding-left: 15px;\n  padding-right: 3px;\n}\n\n.close-clas-edit-btn.button {\n  margin-top: 50px;\n  grid-column: 1/-1;\n  width: 60%;\n  justify-self: center;\n}\n\n.wrap-for-button {\n  position: relative;\n}\n\n// TOOLTIPS\n// *********************\n\n.info-icon {\n  height: 24px;\n  position: absolute;\n  stroke: white;\n  z-index: 4;\n}\n\n[data-tooltip]:before {\n  /* needed - do not touch */\n  content: attr(data-tooltip);\n  position: absolute;\n  opacity: 0;\n\n  /* customizable */\n  transition: all 0.15s ease;\n  padding: 10px;\n  color: #333;\n  border-radius: 10px;\n  box-shadow: 2px 2px 1px silver;\n}\n\n[data-tooltip]:hover:before {\n  /* needed - do not touch */\n  opacity: 1;\n  z-index: 4;\n\n  /* customizable */\n  background: whitesmoke;\n  margin-top: 1px;\n  margin-left: 20px;\n  border: rgba(51, 51, 51, 0.226) 1px solid;\n}\n\n[data-tooltip]:not([data-tooltip-persistent]):before {\n  pointer-events: none;\n}\n\n.tooltip {\n  position: absolute;\n  margin: 5px;\n}\n\n.filter-info {\n  padding-bottom: 10px;\n}\n\n.filter-buttons {\n  padding-top: 15px;\n  justify-content: space-evenly;\n}\n.filter-button {\n  width: 46%;\n  height: 45px;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 1px 2px;\n  color: white;\n  letter-spacing: +0.35px;\n  background-color: #0a3b95ad !important;\n}\n\n.price-icon {\n  height: 24px;\n  display: none;\n}\n\n.price-icon.sortToLowest {\n  transform: rotateX(180deg);\n}\n\n.th-cena .flex:first-child {\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/general.scss":
/*!*********************************!*\
  !*** ./src/styles/general.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_general_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./general.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/general.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_general_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_general_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_general_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_general_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/categoryFilter.svg":
/*!***************************************!*\
  !*** ./src/assets/categoryFilter.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "categoryFilter.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_general_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/general.scss */ "./src/styles/general.scss");
/* harmony import */ var _countPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countPrice */ "./src/countPrice.js");
/* harmony import */ var _assets_categoryFilter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/categoryFilter.svg */ "./src/assets/categoryFilter.svg");
/* harmony import */ var _getCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCategories */ "./src/getCategories.js");
/* harmony import */ var _getSelectedCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSelectedCategories */ "./src/getSelectedCategories.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var nameInput = document.querySelector(".name-input");
var priceInput = document.querySelector(".price-input");
var infoInput = document.querySelector(".info-input");
var selectField = document.querySelector(".select-field");
var table = document.querySelector(".table tbody");
var addBtn = document.querySelector(".add-item-btn");
var delBtns = document.querySelectorAll(".delete-button");
var editBtn = document.querySelector(".edit-button"); // 4 main inputs from top side of the app

var mainInputs = document.querySelectorAll(".input-field");
var id = localStorage.getItem("id");
var priceSortStatus; // generated automatically when 'categoriesSettingsBtn' clicked

var categoriesList = document.querySelector(".categories-list");
var categorySettingsBtn = document.querySelector(".category-settings-btn");
var categorySettingsCloseBtn = document.querySelector(".close-clas-edit-btn");
var addCatBtn = document.querySelector(".add-cat-btn");
var categoryFilterButton = document.querySelector(".category-filter-button");
var getSelectedCategoriesBtn = document.querySelector(".getSelectedCategoriesBtn"); // those are basic select options. Created only if user hasn't his own options in localStorage.
// if you want to set other basic categories, you can do that
// it will work fine with any number of categories inside

var basicCategories = ["Podzespoły komputera", "Urządzenia peryferyjne", "oprogramowanie", "inne"];
var catId = "0";

if (typeof localStorage.getItem("catId") != "undefined" && localStorage.getItem("catId") != null) {
  catId = localStorage.getItem("catId");
} // read categories saved in local storage
// and add them as a options to 'select-category'


var categoriesInit = function categoriesInit() {
  console.log("categories init");

  var _iterator = _createForOfIteratorHelper(basicCategories),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var category = _step.value;
      catId++;
      var newCategory = document.createElement("option");
      newCategory.setAttribute("value", "".concat(category));
      newCategory.innerText = "".concat(category);
      newCategory.setAttribute("id", catId);
      localStorage.setItem("cat".concat(catId), newCategory.innerText);
      selectField.appendChild(newCategory);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  localStorage.setItem("catId", catId);
};

var addNewCat = function addNewCat() {
  var newCatInput = document.querySelector(".new-cat-input");
  var newCatText = newCatInput.value;

  if (newCatText.length > 1) {
    var newCatLi = document.createElement("li");
    var newP = document.createElement("p");
    newP.innerText = newCatText;
    var newButton = document.createElement("button");
    newButton.classList.add("delete-category");
    newButton.classList.add("button");
    newButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    newCatLi.classList.add("space-btw");
    newCatLi.classList.add("flex");
    var newCat = document.createElement("option"); // set attribute of new category
    // to make saving it in localStorage possible

    catId++;
    newCat.setAttribute("id", catId);
    newCat.value = newCatText;
    newCat.innerText = newCatText;
    newCatLi.appendChild(newP);
    newCatLi.appendChild(newButton);
    categoriesList.appendChild(newCatLi);
    selectField.appendChild(newCat);
    newButton.addEventListener("click", deleteCategory);
    newCatInput.value = "";
    localStorage.setItem("cat".concat(catId), newCatText);
    localStorage.setItem("catId", catId); // add new cat to filter form

    var newInput = document.createElement("input");
    newInput.type = "checkbox";
    newInput.checked = true;
    newInput.id = catId;
    newInput.name = newCatText;
    var newLabel = document.createElement("label");
    newLabel.setAttribute("for", catId);
    newLabel.style.padding = "6px 12px";
    newLabel.innerText = newCatText;
    var newFilter = document.createElement("div");
    document.querySelector("form").appendChild(newFilter);
    newFilter.appendChild(newInput);
    newFilter.appendChild(newLabel);
  } else {
    newCatInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
    newCatInput.addEventListener("click", function () {
      newCatInput.style.border = "black solid 1px";
    });
  }
}; // read values of items stored in local storage
// and create new table with all those items


var initTable = function initTable() {
  for (var i = 1; i <= id; i++) {
    if (typeof localStorage["".concat(i)] != "undefined") {
      var newItemParameters = localStorage.getItem("".concat(i)).split(",");
      var newTr = document.createElement("tr");
      newTr.setAttribute("id", "".concat(i));
      var newItemName = document.createElement("td");
      newItemName.innerText = newItemParameters[0];
      newItemName.classList.add("name");
      var newItemDescription = document.createElement("td");
      newItemDescription.innerText = newItemParameters[1];
      newItemDescription.classList.add("description");
      var newItemPrice = document.createElement("td");
      newItemPrice.innerText = newItemParameters[2];
      newItemPrice.classList.add("price");
      var newItemCategory = document.createElement("td");
      newItemCategory.innerText = newItemParameters[3];
      newItemCategory.classList.add("category");
      var newButtonTd = document.createElement("td");
      newButtonTd.classList.add("buttons");
      var newButton = document.createElement("button");
      newButton.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
      newButton.classList.add("delete-button");
      newButton.classList.add("button"); // append children

      table.appendChild(newTr);
      newTr.appendChild(newItemName);
      newTr.appendChild(newItemDescription);
      newTr.appendChild(newItemPrice);
      newTr.appendChild(newItemCategory);
      newTr.appendChild(newButtonTd);
      newButtonTd.appendChild(newButton); // listener to the button

      newButton.addEventListener("click", deleteItem);
    }
  }

  (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

var addItem = function addItem() {
  // get values from input fields
  var name = nameInput.value;
  var price = priceInput.value;
  var info = infoInput.value;
  var category = selectField.value; // add color border to invalid value in inputs

  if (name == "") {
    nameInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }

  if (info == "") {
    infoInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }

  if (priceInput.value.length == 0 || priceInput.value < 0) {
    priceInput.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  }

  if (selectField.value == "noAnswer") {
    selectField.style.border = "2px solid rgba(218, 44, 44, 0.808)";
  } // check if input fields were not empty


  if (name != "" && price != "" && info != "" && category != "noAnswer" && price >= 0 && price < 9999999) {
    // increase id to align higher than elements before
    id++; // create new tr element which will contain
    // all the inputs as a children

    var newItem = document.createElement("tr");
    newItem.setAttribute("id", "".concat(id));
    table.appendChild(newItem);
    var newName = document.createElement("td");
    newName.innerText = name;
    newItem.appendChild(newName);
    newName.classList.add("name");
    var newInfo = document.createElement("td");
    newInfo.innerText = info;
    newItem.appendChild(newInfo);
    newInfo.classList.add("description");
    var newPrice = document.createElement("td");
    newPrice.innerText = price;
    newItem.appendChild(newPrice);
    newPrice.classList.add("price");
    var newCategory = document.createElement("td");
    newCategory.innerText = category;
    newCategory.classList.add("category");
    newItem.appendChild(newCategory); // also create buttons to allow deleting
    // and editing new items

    var newBtnsDiv = document.createElement("td");
    newBtnsDiv.classList.add("buttons");
    var delBtn = document.createElement("button");
    delBtn.classList.add("delete-button");
    delBtn.classList.add("button");
    delBtn.innerHTML = '<i class="fas fa-times"></i>';
    newBtnsDiv.appendChild(delBtn); // add listener to new button

    delBtn.addEventListener("click", deleteItem);
    newItem.appendChild(newBtnsDiv); // reset inputs after adding new item

    nameInput.value = "";
    priceInput.value = "";
    infoInput.value = ""; // selectField.value = firstOption;   - not working

    checkIfEmpty();
    localStorage.setItem("".concat(id), [name, info, price, category]);
    localStorage.setItem("id", "".concat(id));
    (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}; //
// function to edit table items
// to call it, double click table item


var editFunction = function editFunction(e) {
  editCancel();

  if (e.target.matches("td")) {
    // e.target is targeted column
    e.target.style.position = "relative"; // Create input element

    var editInput = document.createElement("input"); // Style input element

    editInput.style.position = "absolute";
    editInput.style.width = "80%";
    editInput.style.height = "100%";
    editInput.style.left = "0";
    editInput.style.top = "0";
    editInput.value = e.target.innerText;
    editInput.classList.add("activeEdit"); // do not run edit function for buttons!

    if (!e.target.matches(".buttons")) {
      // for price column only numbers can be provided
      if (e.target.matches(".price")) {
        editInput.type = "number";
      } // create button to confirm changes


      editBtn.style.display = "block";
      editBtn.classList.add("activeEdit"); // document.querySelector(".fa-square-check").style.height = "100%";
      // append both button and input as a children to target column

      e.target.appendChild(editInput);
      e.target.appendChild(editBtn);
      var targetedEl = e.target;
      var trToEdit = targetedEl.closest("tr");

      var editConfirm = function editConfirm() {
        e.target.closest("td").innerText = editInput.value;
        editInput.remove();
        editBtn.remove(); // change item in local Storage

        var trToEditId = e.target.closest("tr").id;
        var name = trToEdit.querySelector(".name").innerText;
        var description = trToEdit.querySelector(".description").innerText;
        var price = trToEdit.querySelector(".price").innerText;
        var category = trToEdit.querySelector(".category").innerText;
        var editedItem = name + "," + description + "," + price + "," + category;
        console.log("old", localStorage.getItem(trToEditId));
        localStorage.setItem(trToEditId, editedItem);
        console.log("new", localStorage.getItem(trToEditId));
        (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
      };

      editBtn.addEventListener("click", editConfirm);
      e.target.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          editConfirm();
        }
      });
    }
  }
};

var editCancel = function editCancel() {
  // remove old input fields and buttons
  var oldInput = document.querySelectorAll(".activeEdit");

  var _iterator2 = _createForOfIteratorHelper(oldInput),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      item.remove();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

var deleteItem = function deleteItem(e) {
  // gParent = e.target.parentElement.parentElement; when clicked right in the icon inside the button
  // it was deleting button td instead of all the record
  var gParent = e.target.closest("tr");
  console.log(gParent);
  var itemId = gParent.getAttribute("id");
  localStorage.removeItem("".concat(itemId));
  gParent.remove();
  checkIfEmpty();
  (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

var checkIfEmpty = function checkIfEmpty() {
  var itemsInCol = table.querySelectorAll("tr");

  if (itemsInCol.length <= 1) {
    document.querySelector(".empty-list-info").classList.add("visible");
    document.querySelector(".price-info").classList.remove("visible");
  } else {
    document.querySelector(".empty-list-info").classList.remove("visible");
    document.querySelector(".price-info").classList.add("visible");
  }
};

var createCategoriesList = function createCategoriesList() {
  // clear old list
  var categories = document.querySelectorAll(".categories-list li");
  var categoriesAll = document.querySelectorAll(".select-field option");

  var _iterator3 = _createForOfIteratorHelper(categories),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var category = _step3.value;
      category.remove();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = _createForOfIteratorHelper(categoriesAll),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _category = _step4.value;
      console.log(_category.innerText);

      if (_category.value != "noAnswer") {
        var newCategory = document.createElement("li");
        newCategory.style.display = "flex";
        newCategory.classList.add("space-btw");
        var newCategoryText = document.createElement("p");
        newCategoryText.innerText = _category.innerText;
        var newCategoryButton = document.createElement("button");
        newCategoryButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        newCategoryButton.classList.add("delete-category");
        newCategoryButton.classList.add("button");
        newCategoryButton.addEventListener("click", deleteCategory);
        newCategory.appendChild(newCategoryText);
        newCategory.appendChild(newCategoryButton);
        categoriesList.appendChild(newCategory);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};

var deleteCategory = function deleteCategory(e) {
  var liToDel = e.target.closest("li");
  var textInside = e.target.closest("button").previousSibling.innerText;
  var optionToDel = document.querySelector("[value ='".concat(textInside, "'"));
  var id = optionToDel.getAttribute("id");
  var allExistingCats = document.querySelectorAll(".category");

  var checker = function checker() {
    var _iterator5 = _createForOfIteratorHelper(allExistingCats),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var category = _step5.value;

        if (category.innerText == textInside) {
          return true;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  };

  if (checker()) {
    // if there are elements with category
    // which is selected to delete,
    // dont delete this category
    // just show warning it's impossible
    liToDel.style.border = "red solid 2px";
    liToDel.style.position = "relative";
    var warning = document.createElement("p");
    warning.innerText = "Nie można usunąć, ponieważ istnieją elementy o tej kategorii!";
    warning.style.color = "red";
    warning.style.position = "absolute";
    warning.style.top = "0";
    warning.style.right = "-10px";
    warning.style.transform = "translateX(100%)";
    warning.style.background = "white";
    warning.style.padding = "5px 10px";
    warning.style.fontSize = "16px";
    liToDel.appendChild(warning); // delete warning after certain time

    setTimeout(function () {
      warning.remove();
      liToDel.style.border = "none";
    }, 2500); // If there is no items with such category, delete category.
  } else {
    if (textInside == "inne" && document.querySelectorAll("[value ='".concat(textInside, "'")).length == 1) {
      console.log("return");
    } else {
      // delete from options list
      optionToDel.remove(); // delete category from localStorage

      localStorage.removeItem("cat".concat(id));
      liToDel.remove(); // delete item from cat filter settings

      var _iterator6 = _createForOfIteratorHelper(document.querySelectorAll("form label")),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var el = _step6.value;

          if (el.innerText == textInside) {
            el.closest("div").remove();
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }
}; // this function is creating options to 'category' select El


var createOptions = function createOptions() {
  if (typeof catId != "undefined" && catId > 1) {
    for (var i = 0; i <= catId; i++) {
      if (typeof localStorage["cat".concat(i)] != "undefined") {
        console.log("i", i);
        var newCat = document.createElement("option");
        newCat.setAttribute("id", i);
        newCat.value = localStorage.getItem("cat".concat(i));
        newCat.innerText = localStorage.getItem("cat".concat(i));
        selectField.appendChild(newCat);
      }
    }
  } else {
    categoriesInit();
  }
}; // apply correct class to item
// class depends on fact,
// if it was selected in filter or not


var filterCategories = function filterCategories() {
  var selectedArr = (0,_getSelectedCategories__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var categories = document.querySelectorAll(".category");

  var _iterator7 = _createForOfIteratorHelper(categories),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var category = _step7.value;

      if (selectedArr.includes(category.innerText)) {
        category.closest("tr").classList.remove("inactive");
      } else {
        category.closest("tr").classList.add("inactive");
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
}; // delete all filters and show all the items in table


var deleteFilters = function deleteFilters() {
  var items = document.querySelectorAll("tr");

  var _iterator8 = _createForOfIteratorHelper(items),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var item = _step8.value;
      item.classList.remove("inactive");
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  (0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
}; // show or hide filter options


var categoriesFilterMenu = function categoriesFilterMenu() {
  document.querySelector(".filterMenu").classList.toggle("active");
}; // show category settings window


var expandCategoriesSettings = function expandCategoriesSettings() {
  createCategoriesList();
  document.querySelector(".category-settings-div").classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (!e.target.matches(".category-settings-div")) {
      document.querySelector(".category-settings-div").classList.toggle("active");
    }
  });
}; // close category settings window


var closeCatEdit = function closeCatEdit() {
  document.querySelector(".category-settings-div").classList.remove("active");
}; // sort table rows increasing
// if it's already sorted increasing, sort decreasing


var priceSort = function priceSort() {
  var priceVal, nextPriceVal;
  var priceIcon = document.querySelector(".price-icon"); // check current sorting status
  // if its other than 'increasing'
  // sort rows from small to big

  if (priceSortStatus != "increasing") {
    priceIcon.style.display = "flex";

    if (priceIcon.matches(".sortToLowest")) {
      priceIcon.classList.remove("sortToLowest");
    }

    for (var i = 1; i < document.querySelector(".table").rows.length - 1; i++) {
      priceVal = parseInt(document.querySelector(".table").rows[i].children[2].innerText);
      nextPriceVal = parseInt(document.querySelector(".table").rows[i + 1].children[2].innerText); // after iterating over prices in rows, check if they're
      // already positioned well
      // if not, change their positions in relation 1 to 1

      if (priceVal < nextPriceVal) {
        var bigger = document.querySelector(".table").rows[i + 1];
        var smaller = document.querySelector(".table").rows[i];
        var parentDiv = smaller.parentNode;
        parentDiv.insertBefore(bigger, smaller);
        i = 0;
      }
    } // change sorting status to enable sorting
    // from highest to smallest


    priceSortStatus = "increasing";
  } else {
    priceIcon.style.display = "flex";
    priceIcon.classList.add("sortToLowest");

    for (var _i = 1; _i < document.querySelector(".table").rows.length - 1; _i++) {
      priceVal = parseInt(document.querySelector(".table").rows[_i].children[2].innerText);
      nextPriceVal = parseInt(document.querySelector(".table").rows[_i + 1].children[2].innerText); // after iterating over prices in rows, check if they're
      // already positioned well
      // if not, change their positions in relation 1 to 1

      if (priceVal > nextPriceVal) {
        var _smaller = document.querySelector(".table").rows[_i + 1];

        var _bigger = document.querySelector(".table").rows[_i]; // define parent


        var _parentDiv = _smaller.parentNode; // change positions of rows

        _parentDiv.insertBefore(_smaller, _bigger); // set i to to repeat the loop
        // this loop will be repeated to moment,
        // when all the prices will be sorted


        _i = 0;
      }
    } // change status to make growing sorting possible


    priceSortStatus = "decreasing";
  }
}; ///////////////////////
// Event listeners
// ////////////////////
//


addBtn.addEventListener("click", addItem);
table.addEventListener("dblclick", editFunction);
categorySettingsBtn.addEventListener("click", expandCategoriesSettings);
addCatBtn.addEventListener("click", addNewCat);
categorySettingsCloseBtn.addEventListener("click", closeCatEdit);
getSelectedCategoriesBtn.addEventListener("click", filterCategories);
document.querySelector(".resetSelectedCategoriesBtn").addEventListener("click", deleteFilters);
categoryFilterButton.addEventListener("click", categoriesFilterMenu);

var _iterator9 = _createForOfIteratorHelper(delBtns),
    _step9;

try {
  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
    var delBtn = _step9.value;
    delBtn.addEventListener("click", deleteItem);
  } // this listener construction allow user to cancel
  // editing column just by clicking somewhere else

} catch (err) {
  _iterator9.e(err);
} finally {
  _iterator9.f();
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".activeEdit")) {
    return;
  } else editCancel();
}); // red border around input fields (wchich appears when invalid data)
// will be removed after click on the input

var _iterator10 = _createForOfIteratorHelper(mainInputs),
    _step10;

try {
  var _loop = function _loop() {
    var input = _step10.value;
    input.addEventListener("click", function (e) {
      var _iterator11 = _createForOfIteratorHelper(mainInputs),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          input = _step11.value;
          e.target.style.border = "";
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    });
  };

  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
    _loop();
  } // starting functions

} catch (err) {
  _iterator10.e(err);
} finally {
  _iterator10.f();
}

initTable();
checkIfEmpty();
(0,_countPrice__WEBPACK_IMPORTED_MODULE_2__["default"])();
createOptions();
(0,_getCategories__WEBPACK_IMPORTED_MODULE_4__["default"])();
document.querySelector(".th-cena").addEventListener("click", priceSort);
})();

/******/ })()
;
//# sourceMappingURL=bundle861fccdb265c5d63cc0a.js.map