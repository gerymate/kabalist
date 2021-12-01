/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Kabalist = __webpack_require__(/*! ./modules/kabalist */ \"./src/modules/kabalist.js\");\n\nconst Config = {\n  'sentence separators': /\\.|\\?|!/i,\n  'word separators': / |\\n|-/i,\n  'letters': {\n    'A': 1,\n    'B': 2,\n    'C': 3\n  }\n}\n\nconst scorer = new Kabalist(Config)\n\nconst input = document.querySelector('#source_text');\nconst output = document.querySelector('#output_view');\n\ninput.addEventListener('input', updateValue);\n\nfunction updateValue(e) {\n  output.textContent = scorer.score(e.target.value);\n}\n\n\n//# sourceURL=webpack://kabalist/./src/main.js?");

/***/ }),

/***/ "./src/modules/kabalist.js":
/*!*********************************!*\
  !*** ./src/modules/kabalist.js ***!
  \*********************************/
/***/ ((module) => {

eval("\nclass Kabalist {\n  constructor(config) {\n    this.config = config;\n  }\n\n  sentences(text) {\n    return text\n      .split(this.config[\"sentence separators\"])\n      .map((s)=>s.trim())\n      .filter(sentence => sentence.length > 0);\n  }\n\n  words(input) {\n    return input.split(this.config[\"word separators\"]);\n  }\n\n  all_words(text) {\n    return this.sentences(text).map(\n      (sentence) => this.words(sentence) \n    )\n  }\n\n  scoreText(word) {\n    const scoring_table = this.config[\"letters\"];  \n    const chars = Array.from(word.toUpperCase());\n    const scoreLetter = (letter) => (scoring_table[letter] || 0);\n    const scoreCounter = (previousValue, currentValue) => previousValue + scoreLetter(currentValue);    \n    return chars.reduce(scoreCounter, 0);\n  }\n\n  scoreEachWord(text) {\n    return this.words(text).map(\n      (item) => [item, this.scoreText(item)]\n    )\n  }\n\n  scoreEachWordAndWhole(text) {\n    return [this.scoreEachWord(text), this.scoreText(text)];\n  }\n\n  score(text) {\n    const sentences = this.sentences(text);\n    return sentences.map(\n      (sentence) => this.scoreEachWordAndWhole(sentence)\n    );\n  }\n}\n\nmodule.exports = Kabalist;\n\n\n\n\n//# sourceURL=webpack://kabalist/./src/modules/kabalist.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;