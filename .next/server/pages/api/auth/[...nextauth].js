"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQU03QyxLQUFLLENBQUNDLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFNLElBQUksR0FBRyxDQUFDRCx3REFBWTtBQUVoRCxFQUFFLEVBUkYsSUFRMEMsRUFBRUUsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07QUFFbEUsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(api)/./lib/prisma.ts\");\n\n\n\n\nif (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) throw new Error(\"Failed to initialize Github authentication\");\nconst authOptions = {\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            profile (profile) {\n                return {\n                    id: profile.id.toString(),\n                    name: profile.name || profile.login,\n                    gh_username: profile.login,\n                    email: profile.email,\n                    image: profile.avatar_url\n                };\n            }\n        }), \n    ],\n    secret: process.env.SECRET,\n    pages: {\n        signIn: `/login`,\n        verifyRequest: `/login`,\n        error: \"/login\"\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: ({ session , user  })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id,\n                    username: user.username\n                }\n            })\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNFO0FBQ3hCO0FBSWpDLEVBQUUsR0FBR0ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVMsS0FBS0YsT0FBTyxDQUFDQyxHQUFHLENBQUNFLGFBQWEsRUFDdEQsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLENBQTRDO0FBRXZELEtBQUssQ0FBQ0MsV0FBVyxHQUFHLENBQUM7SUFDMUJDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZULGlFQUFjLENBQUMsQ0FBQztZQUNkVSxRQUFRLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTO1lBQy9CTSxZQUFZLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxhQUFhO1lBQ3ZDTSxPQUFPLEVBQUNBLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixNQUFNLENBQUMsQ0FBQztvQkFDTkMsRUFBRSxFQUFFRCxPQUFPLENBQUNDLEVBQUUsQ0FBQ0MsUUFBUTtvQkFDdkJDLElBQUksRUFBRUgsT0FBTyxDQUFDRyxJQUFJLElBQUlILE9BQU8sQ0FBQ0ksS0FBSztvQkFDbkNDLFdBQVcsRUFBRUwsT0FBTyxDQUFDSSxLQUFLO29CQUMxQkUsS0FBSyxFQUFFTixPQUFPLENBQUNNLEtBQUs7b0JBQ3BCQyxLQUFLLEVBQUVQLE9BQU8sQ0FBQ1EsVUFBVTtnQkFDM0IsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNEQyxNQUFNLEVBQUVsQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLE1BQU07SUFDMUJDLEtBQUssRUFBRSxDQUFDO1FBQ05DLE1BQU0sR0FBRyxNQUFNO1FBQ2ZDLGFBQWEsR0FBRyxNQUFNO1FBQ3RCQyxLQUFLLEVBQUUsQ0FBUTtJQUNqQixDQUFDO0lBQ0RDLE9BQU8sRUFBRTFCLHdFQUFhLENBQUNDLG1EQUFNO0lBQzdCMEIsU0FBUyxFQUFFLENBQUM7UUFDVkMsT0FBTyxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxHQUFFQyxJQUFJLEVBQUMsQ0FBQyxJQUFNLENBQUM7bUJBQzdCRCxPQUFPO2dCQUNWQyxJQUFJLEVBQUUsQ0FBQzt1QkFDRkQsT0FBTyxDQUFDQyxJQUFJO29CQUNmakIsRUFBRSxFQUFFaUIsSUFBSSxDQUFDakIsRUFBRTtvQkFDWGtCLFFBQVEsRUFBRUQsSUFBSSxDQUFDQyxRQUFRO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVoQyxnREFBUSxDQUFDUyxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdpdEh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuaW1wb3J0IHR5cGUgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuR0lUSFVCX0lEIHx8ICFwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUKVxuICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBHaXRodWIgYXV0aGVudGljYXRpb25cIik7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0SHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgIHByb2ZpbGUocHJvZmlsZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBwcm9maWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgbmFtZTogcHJvZmlsZS5uYW1lIHx8IHByb2ZpbGUubG9naW4sXG4gICAgICAgICAgZ2hfdXNlcm5hbWU6IHByb2ZpbGUubG9naW4sXG4gICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IHByb2ZpbGUuYXZhdGFyX3VybCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogYC9sb2dpbmAsXG4gICAgdmVyaWZ5UmVxdWVzdDogYC9sb2dpbmAsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdXNlciB9KSA9PiAoe1xuICAgICAgLi4uc2Vzc2lvbixcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxuICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxufSBhcyBOZXh0QXV0aE9wdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdEh1YlByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiRXJyb3IiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwicHJvZmlsZSIsImlkIiwidG9TdHJpbmciLCJuYW1lIiwibG9naW4iLCJnaF91c2VybmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJhdmF0YXJfdXJsIiwic2VjcmV0IiwiU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJ2ZXJpZnlSZXF1ZXN0IiwiZXJyb3IiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJ1c2VybmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();