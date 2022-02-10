/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/chatHeader.js":
/*!******************************!*\
  !*** ./src/js/chatHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ChatHeader {\n  _toggleInChatMenu() {\n    let menu = document.querySelector('#inChatMenu');\n\n    if (menu.classList.contains('show')) {\n      menu.classList.remove('show');\n    } else {\n      menu.classList.add('show');\n    }\n  }\n\n  _hideInChatMenu() {\n    document.querySelector('#inChatMenu').classList.remove('show');\n  }\n\n  init() {\n    document.body.addEventListener('click', () => {\n      this._hideInChatMenu();\n    });\n    document.querySelector('#inChatMenuButton').addEventListener('click', e => {\n      e.stopPropagation();\n\n      this._toggleInChatMenu();\n    });\n    document.querySelector('#inChatMenu').addEventListener('click', e => {\n      e.stopPropagation();\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatHeader);\n\n//# sourceURL=webpack://mymessenger/./src/js/chatHeader.js?");

/***/ }),

/***/ "./src/js/chatList.js":
/*!****************************!*\
  !*** ./src/js/chatList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ChatList {\n  constructor() {\n    this._chatList = [];\n  }\n\n  _createChatContainer(params = {\n    username,\n    messagePreview,\n    avatar,\n    chatID\n  }) {\n    let chat = document.createElement(\"div\");\n    chat.className = \"row chat\";\n    chat.dataset.chatID = params.chatID;\n    let chatAvatar = document.createElement(\"div\");\n    chatAvatar.className = \"col-3 chat-avatar\";\n    let img = document.createElement(\"img\");\n    img.src = params.avatar;\n    let chatInfo = document.createElement(\"div\");\n    chatInfo.className = \"col-9 chat-info\";\n    let h4 = document.createElement(\"h4\");\n    h4.className = \"username\";\n    h4.innerHTML = params.username;\n    let p = document.createElement(\"p\");\n    p.className = \"message-preview\";\n    p.innerHTML = params.messagePreview;\n    chat.append(chatAvatar);\n    chatAvatar.append(img);\n    chat.append(chatInfo);\n    chatInfo.append(h4);\n    chatInfo.append(p);\n    chat.addEventListener(\"click\", () => this._openChat(params));\n    chat.addEventListener('click', function () {\n      document.querySelectorAll('.chat').forEach(chat => chat.classList.remove('active'));\n      chat.classList.add('active');\n    });\n    return chat;\n  }\n\n  _openChat(params = {\n    username,\n    messagePreview,\n    avatar,\n    chatID\n  }) {\n    let currentChat = this.chatList.find(chat => chat.chatID == params.chatID);\n    console.log(currentChat); // Дописать функцию\n  }\n\n  _displayChats() {\n    for (let i = 0; i < 20; i++) {\n      let params = {\n        username: \"Ako, Nazadi daniwan?\",\n        messagePreview: \"Lorem ipsum dolor sit amet consectetur.\",\n        avatar: \"./src/img/avatar.jpg\",\n        chatID: i\n      };\n\n      this._chatList.push(params);\n\n      let chatContainer = this._createChatContainer(params);\n\n      document.querySelector('.chatlist-container .chatlist').append(chatContainer);\n    }\n\n    console.log(this._chatList);\n  }\n\n  init() {\n    this._displayChats();\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatList);\n\n//# sourceURL=webpack://mymessenger/./src/js/chatList.js?");

/***/ }),

/***/ "./src/js/currentChat.js":
/*!*******************************!*\
  !*** ./src/js/currentChat.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CurrentChat {\n  init() {}\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentChat);\n\n//# sourceURL=webpack://mymessenger/./src/js/currentChat.js?");

/***/ }),

/***/ "./src/js/emojiPanel.js":
/*!******************************!*\
  !*** ./src/js/emojiPanel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EmojiPanel {\n  _createEmoji(code) {\n    let button = document.createElement(\"button\");\n    button.innerHTML = `&#${code};`;\n    button.className = \"emoji\";\n    button.addEventListener(\"click\", function () {\n      let message = document.querySelector('#messageInput').value;\n      message += this.innerHTML;\n      document.querySelector('#messageInput').value = message;\n    });\n    return button;\n  }\n\n  _fillEmojiPanel() {\n    for (let i = 128512; i <= 129472; i++) {\n      document.querySelector('#emojiPanel').append(this._createEmoji(i));\n    }\n  }\n\n  _toggleEmojiPanel() {\n    document.querySelector('#emojiPanel').classList.toggle(\"show\");\n  }\n\n  _hideEmojiPanel() {\n    document.querySelector('#emojiPanel').classList.remove(\"show\");\n  }\n\n  _showEmojiPanel() {\n    document.querySelector('#emojiPanel').classList.add(\"show\");\n  }\n\n  init() {\n    this._fillEmojiPanel();\n\n    document.querySelector('#toggleEmojiPanel').addEventListener(\"click\", e => {\n      e.preventDefault();\n\n      this._toggleEmojiPanel();\n    });\n    document.querySelector('#messageInput').addEventListener(\"click\", e => {\n      this._hideEmojiPanel();\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmojiPanel);\n\n//# sourceURL=webpack://mymessenger/./src/js/emojiPanel.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chatList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList */ \"./src/js/chatList.js\");\n/* harmony import */ var _chatHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatHeader */ \"./src/js/chatHeader.js\");\n/* harmony import */ var _currentChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentChat */ \"./src/js/currentChat.js\");\n/* harmony import */ var _messageInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messageInput */ \"./src/js/messageInput.js\");\n/* harmony import */ var _emojiPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emojiPanel */ \"./src/js/emojiPanel.js\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ \"./src/js/sidebar.js\");\n/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings */ \"./src/js/settings/settings.js\");\n\n\n\n\n\n // import DarkMode from \"./darkMode\";\n\n\nlet chatHeader = new _chatHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet chatList = new _chatList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nlet currentChat = new _currentChat__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nlet messageInput = new _messageInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nlet emojiPanel = new _emojiPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nlet sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"](); // let darkMode = new DarkMode();\n\nlet settingsMenu = new _settings_settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n[chatHeader, chatList, currentChat, messageInput, emojiPanel, sidebar, // darkMode,\nsettingsMenu].forEach(component => component.init());\n\n//# sourceURL=webpack://mymessenger/./src/js/index.js?");

/***/ }),

/***/ "./src/js/messageInput.js":
/*!********************************!*\
  !*** ./src/js/messageInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emojiPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emojiPanel */ \"./src/js/emojiPanel.js\");\n\n\nclass MessageInput {\n  _sendMessage() {\n    let emojiPanel = new _emojiPanel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    emojiPanel._hideEmojiPanel();\n\n    let messageText = document.querySelector('#messageInput').value;\n    console.log(messageText);\n    document.querySelector('#messageInput').value = \"\"; // Дописать функцию отправки сообщений\n  }\n\n  init() {\n    document.querySelector('#messageInputForm').addEventListener(\"submit\", e => {\n      e.preventDefault();\n\n      this._sendMessage();\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageInput);\n\n//# sourceURL=webpack://mymessenger/./src/js/messageInput.js?");

/***/ }),

/***/ "./src/js/settings/settings.js":
/*!*************************************!*\
  !*** ./src/js/settings/settings.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar */ \"./src/js/sidebar.js\");\n\n\nclass SettingsMenu {\n  openSettingsMenu() {\n    let sideBar = new _sidebar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    sideBar.hideSidebar();\n    document.querySelector('.settings-container').classList.add(\"show\");\n  }\n\n  closeSettingsMenu() {\n    document.querySelector('.settings-container').classList.remove(\"show\");\n    document.querySelector('.settings').classList.add(\"hiding\");\n    setTimeout(function () {\n      document.querySelector('.settings').classList.remove(\"hiding\");\n    }, 1000);\n  }\n\n  init() {\n    document.querySelector('#sidebarOpenSettings').addEventListener('click', this.openSettingsMenu);\n    document.querySelector('.settings-container').addEventListener('click', this.closeSettingsMenu);\n    document.querySelector('.settings').addEventListener('click', e => e.stopPropagation());\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsMenu);\n\n//# sourceURL=webpack://mymessenger/./src/js/settings/settings.js?");

/***/ }),

/***/ "./src/js/sidebar.js":
/*!***************************!*\
  !*** ./src/js/sidebar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Sidebar {\n  constructor() {\n    this.sidebarContainer = document.querySelector('.sidebar-container');\n    this.sidebar = document.querySelector('.sidebar');\n    this.sidebarToggler = document.querySelector('#sidebarToggler');\n  }\n\n  toggleSidebar() {\n    this.sidebar.classList.toggle('show');\n    this.sidebarToggler.classList.toggle(\"toggled\");\n    this.sidebarContainer.classList.toggle(\"show\");\n  }\n\n  hideSidebar() {\n    this.sidebar.classList.remove('show');\n    this.sidebarToggler.classList.remove(\"toggled\");\n    this.sidebarContainer.classList.remove(\"show\");\n  }\n\n  openSidebar() {\n    this.sidebar.classList.add('show');\n    this.sidebarToggler.classList.add(\"toggled\");\n    this.sidebarContainer.classList.add(\"show\");\n  }\n\n  init() {\n    this.sidebar.addEventListener(\"click\", e => e.stopPropagation());\n    this.sidebarToggler.addEventListener('click', () => this.toggleSidebar());\n    this.sidebarContainer.addEventListener(\"click\", () => this.hideSidebar());\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n\n//# sourceURL=webpack://mymessenger/./src/js/sidebar.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;