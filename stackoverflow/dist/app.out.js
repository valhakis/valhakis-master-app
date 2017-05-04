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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n__webpack_require__(2);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzPzg2YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL1NvY2tldC5qcyc7XG5pbXBvcnQgJy4vQWpheC5qcyc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ws = new WebSocket(\"ws://192.168.0.2:4000\", 'echo-protocol');\nvar ws = new WebSocket(\"ws://192.168.0.2:4000/example\", 'echo-protocol');\n\nws.onopen = function () {\n   console.log('connected');\n};\n\nws.onmessage = function (event) {\n   console.log(event);\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvU29ja2V0LmpzP2FhZGEiXSwibmFtZXMiOlsid3MiLCJXZWJTb2NrZXQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsS0FBSyxJQUFJQyxTQUFKLENBQWMsdUJBQWQsRUFBdUMsZUFBdkMsQ0FBVDtBQUNBLElBQUlELEtBQUssSUFBSUMsU0FBSixDQUFjLCtCQUFkLEVBQStDLGVBQS9DLENBQVQ7O0FBRUFELEdBQUdFLE1BQUgsR0FBWSxZQUFXO0FBQ3BCQyxXQUFRQyxHQUFSLENBQVksV0FBWjtBQUNGLENBRkQ7O0FBSUFKLEdBQUdLLFNBQUgsR0FBZSxVQUFVQyxLQUFWLEVBQWlCO0FBQzdCSCxXQUFRQyxHQUFSLENBQVlFLEtBQVo7QUFDRixDQUZEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xOTIuMTY4LjAuMjo0MDAwXCIsICdlY2hvLXByb3RvY29sJyk7XG52YXIgd3MgPSBuZXcgV2ViU29ja2V0KFwid3M6Ly8xOTIuMTY4LjAuMjo0MDAwL2V4YW1wbGVcIiwgJ2VjaG8tcHJvdG9jb2wnKTtcblxud3Mub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICBjb25zb2xlLmxvZygnY29ubmVjdGVkJyk7XG59O1xuXG53cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvU29ja2V0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar xProgress = document.createElement('progress');\n\ndocument.body.appendChild(xProgress);\n\nvar xhr = new XMLHttpRequest();\n\nif (xhr.upload) {\n   xhr.upload.onprogress = function (event) {\n      if (event.lengthComputable) {\n         console.log('total:', event.total);\n         console.log('loaded:', event.loaded);\n         var ratio = Math.floor(event.loaded / event.total * 100) + '%';\n         console.log(ratio);\n      }\n   };\n}\n\nvar value;\n\nxhr.upload.onloadstart = function (event) {\n   value = 0;\n};\n\nxhr.upload.onloadend = function (event) {\n   value = event.loaded;\n};\n\nxhr.onabort = function () {\n   console.log('Aborted...');\n};\n\nxhr.onload = function () {\n   console.log('loaded');\n};\n\nxhr.onloadstart = function () {\n   console.log('onload start');\n};\n\nxhr.onloadend = function () {\n   console.log('onload end');\n};\n\nxhr.onprogress = function (event) {\n   if (event.lengthComputable) {\n      console.log('onprogress');\n      console.log('total:', event.total);\n      console.log('loaded:', event.loaded);\n      var ratio = Math.floor(event.loaded / event.total * 100) + '%';\n      console.log(ratio);\n   }\n};\n\nxhr.onreadystatechange = function () {\n\n   // console.log(xhr);\n\n   if (xhr.readyState == 4 && xhr.status == 200) {\n      console.log(xhr.responseText);\n   }\n};\n\nxhr.open('GET', 'http://192.168.0.2:4000/request');\nxhr.send(new FormData());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvQWpheC5qcz8xYmMxIl0sIm5hbWVzIjpbInhQcm9ncmVzcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwidXBsb2FkIiwib25wcm9ncmVzcyIsImV2ZW50IiwibGVuZ3RoQ29tcHV0YWJsZSIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbCIsImxvYWRlZCIsInJhdGlvIiwiTWF0aCIsImZsb29yIiwidmFsdWUiLCJvbmxvYWRzdGFydCIsIm9ubG9hZGVuZCIsIm9uYWJvcnQiLCJvbmxvYWQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJGb3JtRGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZQyxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWhCOztBQUVBRCxTQUFTRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLFNBQTFCOztBQUVBLElBQUlLLE1BQU0sSUFBSUMsY0FBSixFQUFWOztBQUVBLElBQUlELElBQUlFLE1BQVIsRUFBZ0I7QUFDYkYsT0FBSUUsTUFBSixDQUFXQyxVQUFYLEdBQXdCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckMsVUFBSUEsTUFBTUMsZ0JBQVYsRUFBNEI7QUFDekJDLGlCQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBTUksS0FBNUI7QUFDQUYsaUJBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxNQUFNSyxNQUE3QjtBQUNBLGFBQUlDLFFBQVFDLEtBQUtDLEtBQUwsQ0FBWVIsTUFBTUssTUFBTixHQUFlTCxNQUFNSSxLQUF0QixHQUErQixHQUExQyxJQUFpRCxHQUE3RDtBQUNBRixpQkFBUUMsR0FBUixDQUFZRyxLQUFaO0FBQ0Y7QUFDSCxJQVBEO0FBUUY7O0FBRUQsSUFBSUcsS0FBSjs7QUFFQWIsSUFBSUUsTUFBSixDQUFXWSxXQUFYLEdBQXlCLFVBQVNWLEtBQVQsRUFBZ0I7QUFDdENTLFdBQVEsQ0FBUjtBQUNGLENBRkQ7O0FBSUFiLElBQUlFLE1BQUosQ0FBV2EsU0FBWCxHQUF1QixVQUFTWCxLQUFULEVBQWdCO0FBQ3BDUyxXQUFRVCxNQUFNSyxNQUFkO0FBQ0YsQ0FGRDs7QUFJQVQsSUFBSWdCLE9BQUosR0FBYyxZQUFXO0FBQ3RCVixXQUFRQyxHQUFSLENBQVksWUFBWjtBQUNGLENBRkQ7O0FBSUFQLElBQUlpQixNQUFKLEdBQWEsWUFBVztBQUNyQlgsV0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDRixDQUZEOztBQUlBUCxJQUFJYyxXQUFKLEdBQWtCLFlBQVc7QUFDMUJSLFdBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0YsQ0FGRDs7QUFJQVAsSUFBSWUsU0FBSixHQUFnQixZQUFXO0FBQ3hCVCxXQUFRQyxHQUFSLENBQVksWUFBWjtBQUNGLENBRkQ7O0FBSUFQLElBQUlHLFVBQUosR0FBaUIsVUFBU0MsS0FBVCxFQUFnQjtBQUM5QixPQUFJQSxNQUFNQyxnQkFBVixFQUE0QjtBQUN6QkMsY0FBUUMsR0FBUixDQUFZLFlBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JILE1BQU1JLEtBQTVCO0FBQ0FGLGNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSCxNQUFNSyxNQUE3QjtBQUNBLFVBQUlDLFFBQVFDLEtBQUtDLEtBQUwsQ0FBWVIsTUFBTUssTUFBTixHQUFlTCxNQUFNSSxLQUF0QixHQUErQixHQUExQyxJQUFpRCxHQUE3RDtBQUNBRixjQUFRQyxHQUFSLENBQVlHLEtBQVo7QUFDRjtBQUNILENBUkQ7O0FBVUFWLElBQUlrQixrQkFBSixHQUF5QixZQUFXOztBQUVqQzs7QUFFQSxPQUFJbEIsSUFBSW1CLFVBQUosSUFBa0IsQ0FBbEIsSUFBdUJuQixJQUFJb0IsTUFBSixJQUFjLEdBQXpDLEVBQThDO0FBQzNDZCxjQUFRQyxHQUFSLENBQVlQLElBQUlxQixZQUFoQjtBQUNGO0FBQ0gsQ0FQRDs7QUFTQXJCLElBQUlzQixJQUFKLENBQVMsS0FBVCxFQUFnQixpQ0FBaEI7QUFDQXRCLElBQUl1QixJQUFKLENBQVMsSUFBSUMsUUFBSixFQUFUIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgeFByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJvZ3Jlc3MnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh4UHJvZ3Jlc3MpO1xuXG52YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbmlmICh4aHIudXBsb2FkKSB7XG4gICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKCd0b3RhbDonLCBldmVudC50b3RhbCk7XG4gICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkOicsIGV2ZW50LmxvYWRlZCk7XG4gICAgICAgICB2YXIgcmF0aW8gPSBNYXRoLmZsb29yKChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApICsgJyUnO1xuICAgICAgICAgY29uc29sZS5sb2cocmF0aW8pO1xuICAgICAgfVxuICAgfTtcbn1cblxudmFyIHZhbHVlO1xuXG54aHIudXBsb2FkLm9ubG9hZHN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgIHZhbHVlID0gMDtcbn07XG5cbnhoci51cGxvYWQub25sb2FkZW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgIHZhbHVlID0gZXZlbnQubG9hZGVkO1xufTtcblxueGhyLm9uYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgIGNvbnNvbGUubG9nKCdBYm9ydGVkLi4uJyk7XG59O1xuXG54aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICBjb25zb2xlLmxvZygnbG9hZGVkJyk7XG59O1xuXG54aHIub25sb2Fkc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgIGNvbnNvbGUubG9nKCdvbmxvYWQgc3RhcnQnKTtcbn07XG5cbnhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcbiAgIGNvbnNvbGUubG9nKCdvbmxvYWQgZW5kJyk7XG59O1xuXG54aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICBpZiAoZXZlbnQubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgY29uc29sZS5sb2coJ29ucHJvZ3Jlc3MnKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0b3RhbDonLCBldmVudC50b3RhbCk7XG4gICAgICBjb25zb2xlLmxvZygnbG9hZGVkOicsIGV2ZW50LmxvYWRlZCk7XG4gICAgICB2YXIgcmF0aW8gPSBNYXRoLmZsb29yKChldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCkgKiAxMDApICsgJyUnO1xuICAgICAgY29uc29sZS5sb2cocmF0aW8pO1xuICAgfVxufTtcblxueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAvLyBjb25zb2xlLmxvZyh4aHIpO1xuXG4gICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coeGhyLnJlc3BvbnNlVGV4dCk7XG4gICB9XG59O1xuXG54aHIub3BlbignR0VUJywgJ2h0dHA6Ly8xOTIuMTY4LjAuMjo0MDAwL3JlcXVlc3QnKTtcbnhoci5zZW5kKG5ldyBGb3JtRGF0YSgpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9BamF4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);