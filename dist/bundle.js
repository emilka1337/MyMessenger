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

/***/ "./src/js/chatHeader.js":
/*!******************************!*\
  !*** ./src/js/chatHeader.js ***!
  \******************************/
/***/ ((module) => {

eval("class ChatHeader {\n  _toggleInChatMenu() {\n    let menu = document.querySelector('#inChatMenu');\n\n    if (menu.classList.contains('show')) {\n      menu.classList.remove('show');\n    } else {\n      menu.classList.add('show');\n    }\n  }\n\n  _hideInChatMenu() {\n    document.querySelector('#inChatMenu').classList.remove('show');\n  }\n\n  init() {\n    document.body.addEventListener('click', () => {\n      this._hideInChatMenu();\n    });\n    document.querySelector('#inChatMenuButton').addEventListener('click', e => {\n      e.stopPropagation();\n\n      this._toggleInChatMenu();\n    });\n    document.querySelector('#inChatMenu').addEventListener('click', e => {\n      e.stopPropagation();\n    });\n  }\n\n}\n\nmodule.exports = ChatHeader;\n\n//# sourceURL=webpack://mymessenger/./src/js/chatHeader.js?");

/***/ }),

/***/ "./src/js/chatList.js":
/*!****************************!*\
  !*** ./src/js/chatList.js ***!
  \****************************/
/***/ ((module) => {

eval("class ChatList {\n  constructor() {\n    this.chatList = [];\n  }\n\n  _createChatContainer(params = {\n    username,\n    messagePreview,\n    avatar,\n    chatID\n  }) {\n    let chat = document.createElement(\"div\");\n    chat.className = \"row chat\";\n    chat.dataset.chatID = params.chatID;\n    let chatAvatar = document.createElement(\"div\");\n    chatAvatar.className = \"col-3 chat-avatar\";\n    let img = document.createElement(\"img\");\n    img.src = params.avatar;\n    let chatInfo = document.createElement(\"div\");\n    chatInfo.className = \"col-9 chat-info\";\n    let h4 = document.createElement(\"h4\");\n    h4.className = \"username\";\n    h4.innerHTML = params.username;\n    let p = document.createElement(\"p\");\n    p.className = \"message-preview\";\n    p.innerHTML = params.messagePreview;\n    chat.append(chatAvatar);\n    chatAvatar.append(img);\n    chat.append(chatInfo);\n    chatInfo.append(h4);\n    chatInfo.append(p);\n    chat.addEventListener(\"click\", () => this._displayChat(params.chatID));\n    chat.addEventListener('click', function () {\n      document.querySelectorAll('.chat').forEach(chat => chat.classList.remove('active'));\n      chat.classList.add('active');\n    });\n    return chat;\n  }\n\n  _displayChat(id) {\n    let currentChat = this.chatList.find(chat => chat.chatID == id);\n    console.log(currentChat); // Дописать функцию\n  } // _toggleActiveChatColor() {\n  //     document.querySelectorAll('.chat').forEach((chat, chatIndex, allChats) => {\n  //         chat.addEventListener('click', function () {\n  //             allChats.forEach(chat => chat.classList.remove('active'));\n  //             chat.classList.add('active');\n  //         })\n  //     });\n  // }\n\n\n  init() {\n    for (let i = 0; i < 5; i++) {\n      let params = {\n        username: \"Ako, Nazadi daniwan?\",\n        messagePreview: \"Lorem ipsum dolor sit amet consectetur.\",\n        avatar: \"../src/img/avatar.jpg\",\n        chatID: i\n      };\n      this.chatList.push(params);\n\n      let chatContainer = this._createChatContainer(params);\n\n      document.querySelector('.chatlist').append(chatContainer);\n    }\n\n    console.log(this.chatList);\n  }\n\n}\n\nmodule.exports = ChatList;\n\n//# sourceURL=webpack://mymessenger/./src/js/chatList.js?");

/***/ }),

/***/ "./src/js/currentChat.js":
/*!*******************************!*\
  !*** ./src/js/currentChat.js ***!
  \*******************************/
/***/ ((module) => {

eval("class CurrentChat {\n  _createEmoji(code) {\n    let button = document.createElement(\"button\");\n    button.innerHTML = `&#${code};`;\n    button.className = \"emoji\";\n    button.addEventListener(\"click\", function () {\n      let message = document.querySelector('#messageInput').value;\n      message += this.innerHTML;\n      document.querySelector('#messageInput').value = message;\n    });\n    return button;\n  }\n\n  _fillEmojiPanel() {\n    for (let i = 128512; i <= 129472; i++) {\n      document.querySelector('#emojiPanel').append(this._createEmoji(i));\n    }\n  }\n\n  _toggleEmojiPanel() {\n    document.querySelector('#emojiPanel').classList.toggle(\"show\");\n  }\n\n  init() {\n    this._fillEmojiPanel();\n\n    document.querySelector('#toggleEmojiPanel').addEventListener(\"click\", e => {\n      e.preventDefault();\n      debugger;\n\n      this._toggleEmojiPanel();\n    });\n  }\n\n}\n\nmodule.exports = CurrentChat;\n\n//# sourceURL=webpack://mymessenger/./src/js/currentChat.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList */ \"./src/js/chatList.js\");\n/* harmony import */ var _chatList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatList__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chatHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatHeader */ \"./src/js/chatHeader.js\");\n/* harmony import */ var _chatHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chatHeader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _currentChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentChat */ \"./src/js/currentChat.js\");\n/* harmony import */ var _currentChat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_currentChat__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chatHeader = new (_chatHeader__WEBPACK_IMPORTED_MODULE_1___default())();\nlet chatList = new (_chatList__WEBPACK_IMPORTED_MODULE_0___default())();\nlet currentChat = new (_currentChat__WEBPACK_IMPORTED_MODULE_2___default())();\n[chatHeader, chatList, currentChat].forEach(component => component.init());\n\n//# sourceURL=webpack://mymessenger/./src/js/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;