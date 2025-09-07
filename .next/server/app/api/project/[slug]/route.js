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
exports.id = "app/api/project/[slug]/route";
exports.ids = ["app/api/project/[slug]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/project/[slug]/route.js":
/*!*****************************************!*\
  !*** ./app/api/project/[slug]/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function GET(request, { params }) {\n    try {\n        const { slug } = params;\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'work', `${slug}.json`);\n        // Check if file exists\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n            return new Response(JSON.stringify({\n                error: 'Project not found'\n            }), {\n                status: 404,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n        // Read and parse the JSON file\n        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8');\n        const project = JSON.parse(fileContents);\n        return new Response(JSON.stringify(project), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        console.error('Error fetching project:', error);\n        return new Response(JSON.stringify({\n            error: 'Internal server error'\n        }), {\n            status: 500,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2plY3QvW3NsdWddL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFakIsZUFBZUUsSUFBSUMsT0FBTyxFQUFFLEVBQUVDLE1BQU0sRUFBRTtJQUMzQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7UUFDakIsTUFBTUUsV0FBV0wsZ0RBQVMsQ0FBQ08sUUFBUUMsR0FBRyxJQUFJLFFBQVEsUUFBUSxHQUFHSixLQUFLLEtBQUssQ0FBQztRQUV4RSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDTCxvREFBYSxDQUFDTSxXQUFXO1lBQzVCLE9BQU8sSUFBSUssU0FBU0MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxPQUFPO1lBQW9CLElBQUk7Z0JBQ2xFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7WUFDRjtRQUNGO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1DLGVBQWVqQixzREFBZSxDQUFDTSxVQUFVO1FBQy9DLE1BQU1hLFVBQVVQLEtBQUtRLEtBQUssQ0FBQ0g7UUFFM0IsT0FBTyxJQUFJTixTQUFTQyxLQUFLQyxTQUFTLENBQUNNLFVBQVU7WUFDM0NKLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUNGLEVBQUUsT0FBT0YsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMsMkJBQTJCQTtRQUN6QyxPQUFPLElBQUlILFNBQVNDLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1FBQXdCLElBQUk7WUFDdEVDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcd2ViXFxhZG9sZm9saW1vbmMtd2ViXFxhcHBcXGFwaVxccHJvamVjdFxcW3NsdWddXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCwgeyBwYXJhbXMgfSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHBhcmFtcztcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ3dvcmsnLCBgJHtzbHVnfS5qc29uYCk7XHJcbiAgICBcclxuICAgIC8vIENoZWNrIGlmIGZpbGUgZXhpc3RzXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ1Byb2plY3Qgbm90IGZvdW5kJyB9KSwge1xyXG4gICAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVhZCBhbmQgcGFyc2UgdGhlIEpTT04gZmlsZVxyXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHByb2plY3QpLCB7XHJcbiAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSksIHtcclxuICAgICAgc3RhdHVzOiA1MDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59ICJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwic2x1ZyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJleGlzdHNTeW5jIiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJoZWFkZXJzIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwicHJvamVjdCIsInBhcnNlIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/project/[slug]/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2F%5Bslug%5D%2Froute.js&appDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2F%5Bslug%5D%2Froute.js&appDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Projects_web_adolfolimonc_web_app_api_project_slug_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/project/[slug]/route.js */ \"(rsc)/./app/api/project/[slug]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/project/[slug]/route\",\n        pathname: \"/api/project/[slug]\",\n        filename: \"route\",\n        bundlePath: \"app/api/project/[slug]/route\"\n    },\n    resolvedPagePath: \"D:\\\\Projects\\\\web\\\\adolfolimonc-web\\\\app\\\\api\\\\project\\\\[slug]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Projects_web_adolfolimonc_web_app_api_project_slug_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9qZWN0JTJGJTVCc2x1ZyU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvamVjdCUyRiU1QnNsdWclNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9qZWN0JTJGJTVCc2x1ZyU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDUHJvamVjdHMlNUN3ZWIlNUNhZG9sZm9saW1vbmMtd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDUHJvamVjdHMlNUN3ZWIlNUNhZG9sZm9saW1vbmMtd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN3QjtBQUNyRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcd2ViXFxcXGFkb2xmb2xpbW9uYy13ZWJcXFxcYXBwXFxcXGFwaVxcXFxwcm9qZWN0XFxcXFtzbHVnXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJvamVjdC9bc2x1Z10vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9qZWN0L1tzbHVnXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvamVjdC9bc2x1Z10vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxQcm9qZWN0c1xcXFx3ZWJcXFxcYWRvbGZvbGltb25jLXdlYlxcXFxhcHBcXFxcYXBpXFxcXHByb2plY3RcXFxcW3NsdWddXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2F%5Bslug%5D%2Froute.js&appDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&page=%2Fapi%2Fproject%2F%5Bslug%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproject%2F%5Bslug%5D%2Froute.js&appDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CProjects%5Cweb%5Cadolfolimonc-web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();