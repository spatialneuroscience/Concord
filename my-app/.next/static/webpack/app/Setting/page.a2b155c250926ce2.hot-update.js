"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Setting/page",{

/***/ "(app-pages-browser)/./src/app/Setting/page.tsx":
/*!**********************************!*\
  !*** ./src/app/Setting/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MainNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainNavBar */ \"(app-pages-browser)/./src/app/MainNavBar.tsx\");\n/* harmony import */ var _Home_HomeNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/HomeNavBar */ \"(app-pages-browser)/./src/app/Home/HomeNavBar.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./src/components/ui/textarea.tsx\");\n/* harmony import */ var _barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst userInfo = {\n    username: \"concord\",\n    about: \"hi, here is...\"\n};\nfunction SettingPage() {\n    _s();\n    const [profilePicture, setProfilePicture] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(\"\");\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);\n    function handleAvatarClick() {\n        if (fileInputRef.current) {\n            fileInputRef.current.click();\n        }\n    }\n    function handleFileChange(event) {\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onloadend = ()=>{\n                setProfilePicture(reader.result);\n            };\n            reader.readAsDataURL(file);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen w-full flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto grid w-full max-w-6xl gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold\",\n                            children: \"Setting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home_HomeNavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                                children: [\n                                                    userInfo.username,\n                                                    \"'s profile\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grid w-full items-center gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"w-20 h-20 flex flex-col space-y-1.5 relative group\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                                                                className: \"w-20 h-20 cursor-pointer group-hover:opacity-75 transition-opacity duration-100\",\n                                                                onClick: handleAvatarClick,\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__.AvatarImage, {\n                                                                        src: profilePicture\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                        lineNumber: 67,\n                                                                        columnNumber: 23\n                                                                    }, this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__.AvatarFallback, {\n                                                                        children: \"CN\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                        lineNumber: 68,\n                                                                        columnNumber: 23\n                                                                    }, this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-100\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                                            color: \"white\"\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                            lineNumber: 70,\n                                                                            columnNumber: 25\n                                                                        }, this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                        lineNumber: 69,\n                                                                        columnNumber: 23\n                                                                    }, this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                type: \"file\",\n                                                                ref: fileInputRef,\n                                                                className: \"hidden\",\n                                                                accept: \"image/*\",\n                                                                onChange: handleFileChange\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col space-y-1.5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                                htmlFor: \"name\",\n                                                                children: \"Name\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 82,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                                defaultValue: userInfo.username\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 83,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col space-y-1.5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                                htmlFor: \"about\",\n                                                                children: \"About\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 86,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_8__.Textarea, {\n                                                                id: \"about\",\n                                                                defaultValue: userInfo.about\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 87,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {\n                                            className: \"flex justify-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                variant: \"outline\",\n                                                children: \"Change\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingPage, \"FREDBu2Fdr0tChM2bSn/PWgTJyA=\");\n_c = SettingPage;\nvar _c;\n$RefreshReg$(_c, \"SettingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU2V0dGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDSztBQVNkO0FBQ2dCO0FBQ0U7QUFDRjtBQUMrQjtBQUN6QjtBQUNkO0FBQ0c7QUFFekMsTUFBTWlCLFdBQVc7SUFBRUMsVUFBVTtJQUFXQyxPQUFPO0FBQWlCO0FBRWpELFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1RLGVBQWVQLDZDQUFNQSxDQUEwQjtJQUVyRCxTQUFTUTtRQUNQLElBQUlELGFBQWFFLE9BQU8sRUFBRTtZQUN4QkYsYUFBYUUsT0FBTyxDQUFDQyxLQUFLO1FBQzVCO0lBQ0Y7SUFFQSxTQUFTQyxpQkFBaUJDLEtBQTBDO1lBQ3JEQTtRQUFiLE1BQU1DLFFBQU9ELHNCQUFBQSxNQUFNRSxNQUFNLENBQUNDLEtBQUssY0FBbEJILDBDQUFBQSxtQkFBb0IsQ0FBQyxFQUFFO1FBQ3BDLElBQUlDLE1BQU07WUFDUixNQUFNRyxTQUFTLElBQUlDO1lBQ25CRCxPQUFPRSxTQUFTLEdBQUc7Z0JBQ2pCWixrQkFBa0JVLE9BQU9HLE1BQU07WUFDakM7WUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtRQUN2QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDdEMsbURBQVVBOzs7OzswQkFDWCw4REFBQ3VDO2dCQUFLRCxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNFOzRCQUFHRixXQUFVO3NDQUF5Qjs7Ozs7Ozs7Ozs7a0NBR3pDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNyQyx3REFBVUE7Ozs7OzBDQUNYLDhEQUFDb0M7MENBQ0MsNEVBQUNuQyxxREFBSUE7O3NEQUNILDhEQUFDRywyREFBVUE7c0RBQ1QsNEVBQUNDLDBEQUFTQTs7b0RBQUVXLFNBQVNDLFFBQVE7b0RBQUM7Ozs7Ozs7Ozs7OztzREFFaEMsOERBQUNmLDREQUFXQTtzREFDViw0RUFBQ2tDO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ0c7d0RBQU9ILFdBQVU7OzBFQUNoQiw4REFBQzVCLHlEQUFNQTtnRUFDTDRCLFdBQVU7Z0VBQ1ZJLFNBQVNsQjs7a0ZBRVQsOERBQUNaLDhEQUFXQTt3RUFBQytCLEtBQUt0Qjs7Ozs7O2tGQUNsQiw4REFBQ1YsaUVBQWNBO2tGQUFDOzs7Ozs7a0ZBQ2hCLDhEQUFDMEI7d0VBQUlDLFdBQVU7a0ZBQ2IsNEVBQUN4QixtRkFBTUE7NEVBQUM4QixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswRUFHbEIsOERBQUNDO2dFQUNDQyxNQUFLO2dFQUNMQyxLQUFLeEI7Z0VBQ0xlLFdBQVU7Z0VBQ1ZVLFFBQU87Z0VBQ1BDLFVBQVV0Qjs7Ozs7Ozs7Ozs7O2tFQUdkLDhEQUFDVTt3REFBSUMsV0FBVTs7MEVBQ2IsOERBQUMvQix1REFBS0E7Z0VBQUMyQyxTQUFROzBFQUFPOzs7Ozs7MEVBQ3RCLDhEQUFDekMsdURBQUtBO2dFQUFDMEMsY0FBY2xDLFNBQVNDLFFBQVE7Ozs7Ozs7Ozs7OztrRUFFeEMsOERBQUNtQjt3REFBSUMsV0FBVTs7MEVBQ2IsOERBQUMvQix1REFBS0E7Z0VBQUMyQyxTQUFROzBFQUFROzs7Ozs7MEVBQ3ZCLDhEQUFDckMsNkRBQVFBO2dFQUFDdUMsSUFBRztnRUFBUUQsY0FBY2xDLFNBQVNFLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUl2RCw4REFBQ2YsMkRBQVVBOzRDQUFDa0MsV0FBVTtzREFDcEIsNEVBQUM5Qix5REFBTUE7Z0RBQUM2QyxTQUFROzBEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBN0V3QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvU2V0dGluZy9wYWdlLnRzeD9lYzdkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IE1haW5OYXZCYXIgZnJvbSBcIi4uL01haW5OYXZCYXJcIjtcbmltcG9ydCBIb21lTmF2QmFyIGZyb20gXCIuLi9Ib21lL0hvbWVOYXZCYXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRGb290ZXIsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyRmFsbGJhY2ssIEF2YXRhckltYWdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9hdmF0YXJcIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VySW5mbyA9IHsgdXNlcm5hbWU6IFwiY29uY29yZFwiLCBhYm91dDogXCJoaSwgaGVyZSBpcy4uLlwiIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdQYWdlKCkge1xuICBjb25zdCBbcHJvZmlsZVBpY3R1cmUsIHNldFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXZhdGFyQ2xpY2soKSB7XG4gICAgaWYgKGZpbGVJbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0UHJvZmlsZVBpY3R1cmUocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2xcIj5cbiAgICAgIDxNYWluTmF2QmFyPjwvTWFpbk5hdkJhcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtW2NhbGMoMTAwdmhfLV90aGVtZShzcGFjaW5nLjE2KSldIGZsZXgtMSBmbGV4LWNvbCBnYXAtNCBiZy1tdXRlZC80MCBwLTQgbWQ6Z2FwLTggbWQ6cC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ3JpZCB3LWZ1bGwgbWF4LXctNnhsIGdhcC0yXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5TZXR0aW5nPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGdyaWQgdy1mdWxsIG1heC13LTZ4bCBpdGVtcy1zdGFydCBnYXAtNiBtZDpncmlkLWNvbHMtWzE4MHB4XzFmcl0gbGc6Z3JpZC1jb2xzLVsyNTBweF8xZnJdXCI+XG4gICAgICAgICAgPEhvbWVOYXZCYXIgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3VzZXJJbmZvLnVzZXJuYW1lfSdzIHByb2ZpbGU8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0yMCBoLTIwIGZsZXggZmxleC1jb2wgc3BhY2UteS0xLjUgcmVsYXRpdmUgZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCBjdXJzb3ItcG9pbnRlciBncm91cC1ob3ZlcjpvcGFjaXR5LTc1IHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF2YXRhckNsaWNrfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz17cHJvZmlsZVBpY3R1cmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckZhbGxiYWNrPkNOPC9BdmF0YXJGYWxsYmFjaz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS01MCByb3VuZGVkLWZ1bGwgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGVmYXVsdFZhbHVlPXt1c2VySW5mby51c2VybmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiYWJvdXRcIj5BYm91dDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBpZD1cImFib3V0XCIgZGVmYXVsdFZhbHVlPXt1c2VySW5mby5hYm91dH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiPkNoYW5nZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haW5OYXZCYXIiLCJIb21lTmF2QmFyIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJMYWJlbCIsIkJ1dHRvbiIsIklucHV0IiwiQXZhdGFyIiwiQXZhdGFyRmFsbGJhY2siLCJBdmF0YXJJbWFnZSIsIlRleHRhcmVhIiwiVXBsb2FkIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VySW5mbyIsInVzZXJuYW1lIiwiYWJvdXQiLCJTZXR0aW5nUGFnZSIsInByb2ZpbGVQaWN0dXJlIiwic2V0UHJvZmlsZVBpY3R1cmUiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVBdmF0YXJDbGljayIsImN1cnJlbnQiLCJjbGljayIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwicmVmIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJodG1sRm9yIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Setting/page.tsx\n"));

/***/ })

});