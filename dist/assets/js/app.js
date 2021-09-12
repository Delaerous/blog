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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const burger = document.getElementById('burger');\r\nconst sidebar = document.getElementById('sidebar');\r\n;\r\nconst page = document.querySelector('.page');\r\n\r\n\r\nconst body = document.body;\r\n\r\nburger.addEventListener('click', event => {\r\n  \r\n  if( body.classList.contains('blocked') ) {  \r\n    closeSidebar();\r\n    console.log('close');\r\n} else {\r\n    showSidebar();\r\n    console.log('open');\r\n}\r\n  \r\n});\r\n\r\n\r\nfunction showSidebar() {\r\n  const mask = document.createElement('div');\r\n  mask.classList.add('page__mask')\r\n  page.appendChild(mask);\r\n  burger.classList.add('ass');\r\n  body.classList.add('blocked')\r\n  sidebar.classList.add('active')\r\n  mask.addEventListener('click', closeSidebar);\r\n\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove('blocked');\r\n  document.querySelector('.page__mask').remove();\r\n  burger.classList.remove('ass');\r\n  body.classList.remove('active');\r\n  sidebar.classList.remove('active')\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const modalBtn = document.querySelectorAll('[data-modal');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__cross');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(btn => \r\n    btn.addEventListener('click', event=> {\r\n        let $this = event.currentTarget;\r\n        let modalID = $this.getAttribute('data-modal')\r\n        let modal = document.getElementById(modalID);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n            \r\n        modalContent.addEventListener('click', event =>{\r\n                event.stopPropagation();\r\n        \r\n            });\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('blocked');\r\n        setTimeout(function(){\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n    }\r\n\r\n    ));\r\n\r\nmodalClose.forEach(btn => \r\n    btn.addEventListener('click', event=> {\r\n       let currentModal = event.target.closest('.modal');\r\n       closeModal(currentModal);}\r\n\r\n        )\r\n    );\r\n\r\n    modal.forEach(btn => \r\n        btn.addEventListener('click', event=> {\r\n           let currentModal = event.currentTarget;\r\n           \r\n             closeModal(currentModal)\r\n        })\r\n        );\r\n\r\nfunction closeModal(currentModal){\r\n    let modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style')\r\n    setTimeout(() =>{\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('blocked');\r\n        \r\n    }, 300);\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const textArea = document.querySelectorAll('[data-autoresize');\r\ntextArea.forEach(item => {\r\n    let textAreaH = item.offsetHeight;\r\n    item.addEventListener('input', event =>{\r\n        let $this = event.target;\r\n        $this.style.height = textAreaH + 'px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n        })\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/textarea.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************!*\
  !*** multi ./src/assets/js/burger.js ./src/assets/js/modal.js ./src/assets/js/textarea.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Jojo\\Desktop\\blog\\src\\assets\\js\\burger.js */\"./src/assets/js/burger.js\");\n__webpack_require__(/*! C:\\Users\\Jojo\\Desktop\\blog\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Jojo\\Desktop\\blog\\src\\assets\\js\\textarea.js */\"./src/assets/js/textarea.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/burger.js_./src/assets/js/modal.js_./src/assets/js/textarea.js?");

/***/ })

/******/ });