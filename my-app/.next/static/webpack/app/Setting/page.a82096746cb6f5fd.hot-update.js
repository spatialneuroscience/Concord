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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _MainNavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MainNavBar */ \"(app-pages-browser)/./src/app/MainNavBar.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./src/components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./src/components/ui/textarea.tsx\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar */ \"(app-pages-browser)/./src/app/Setting/avatar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-pages-browser)/./src/components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst initialUserInfo = {\n    username: \"concord\",\n    about: \"hi, here is...\"\n};\nfunction SettingPage() {\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(initialUserInfo);\n    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_10__.useToast)();\n    const handleSave = ()=>{\n        toast({\n            title: \"Successfully Saved!\",\n            duration: 1500\n        });\n    };\n    function handleChange(e) {\n        const { id, value } = e.target;\n        setUserInfo((prevUserInfo)=>({\n                ...prevUserInfo,\n                [id]: value\n            }));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen w-full flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto grid w-full max-w-6xl gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold\",\n                            children: \"Setting\"\n                        }, void 0, false, {\n                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"\",\n                                children: \"Edit Profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardHeader, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardTitle, {\n                                                children: userInfo.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardContent, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"grid w-full items-center gap-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col space-y-1.5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                                htmlFor: \"username\",\n                                                                children: \"Name\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 65,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                                                id: \"username\",\n                                                                defaultValue: userInfo.username,\n                                                                onChange: handleChange\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 66,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-col space-y-1.5\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                                                htmlFor: \"about\",\n                                                                children: \"About\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 21\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_7__.Textarea, {\n                                                                id: \"about\",\n                                                                defaultValue: userInfo.about,\n                                                                onChange: handleChange\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 21\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__.CardFooter, {\n                                            className: \"flex justify-end\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                variant: \"outline\",\n                                                onClick: handleSave,\n                                                children: \"Save Change\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/james/Documents/GitHub/Concord/my-app/src/app/Setting/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingPage, \"vGo6TKKezCYfBg9AmzKf+WgRf0I=\", false, function() {\n    return [\n        _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_10__.useToast\n    ];\n});\n_c = SettingPage;\nvar _c;\n$RefreshReg$(_c, \"SettingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvU2V0dGluZy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDVjtBQVFDO0FBQ2dCO0FBQ0U7QUFDRjtBQUNNO0FBQ2Y7QUFDSjtBQUNvQjtBQUVyRCxNQUFNYyxrQkFBa0I7SUFDdEJDLFVBQVU7SUFDVkMsT0FBTztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQ0U7SUFFekMsTUFBTSxFQUFFTSxLQUFLLEVBQUUsR0FBR1AsbUVBQVFBO0lBQzFCLE1BQU1RLGFBQWE7UUFDakJELE1BQU07WUFDSkUsT0FBTztZQUNQQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLFNBQVNDLGFBQ1BDLENBQTREO1FBRTVELE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUM5QlQsWUFBWSxDQUFDVSxlQUFrQjtnQkFDN0IsR0FBR0EsWUFBWTtnQkFDZixDQUFDSCxHQUFHLEVBQUVDO1lBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQy9CLG1EQUFVQTs7Ozs7MEJBQ1gsOERBQUNnQztnQkFBS0QsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs0QkFBR0YsV0FBVTtzQ0FBeUI7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDOUIsaURBQUlBO2dDQUFDaUMsTUFBSzswQ0FBRzs7Ozs7OzBDQUNkLDhEQUFDSjswQ0FDQyw0RUFBQzVCLHFEQUFJQTs7c0RBQ0gsOERBQUNHLDJEQUFVQTtzREFDVCw0RUFBQ0MsMERBQVNBOzBEQUFFWSxTQUFTSCxRQUFROzs7Ozs7Ozs7OztzREFFL0IsOERBQUNaLDREQUFXQTtzREFDViw0RUFBQzJCO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ3BCLCtDQUFhQTs7Ozs7a0VBQ2QsOERBQUNtQjt3REFBSUMsV0FBVTs7MEVBQ2IsOERBQUN4Qix1REFBS0E7Z0VBQUM0QixTQUFROzBFQUFXOzs7Ozs7MEVBQzFCLDhEQUFDMUIsdURBQUtBO2dFQUNKaUIsSUFBRztnRUFDSFUsY0FBY2xCLFNBQVNILFFBQVE7Z0VBQy9Cc0IsVUFBVWI7Ozs7Ozs7Ozs7OztrRUFHZCw4REFBQ007d0RBQUlDLFdBQVU7OzBFQUNiLDhEQUFDeEIsdURBQUtBO2dFQUFDNEIsU0FBUTswRUFBUTs7Ozs7OzBFQUN2Qiw4REFBQ3pCLDZEQUFRQTtnRUFDUGdCLElBQUc7Z0VBQ0hVLGNBQWNsQixTQUFTRixLQUFLO2dFQUM1QnFCLFVBQVViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLbEIsOERBQUNwQiwyREFBVUE7NENBQUMyQixXQUFVO3NEQUNwQiw0RUFBQ3ZCLHlEQUFNQTtnREFBQzhCLFNBQVE7Z0RBQVVDLFNBQVNsQjswREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRDtHQXBFd0JKOztRQUdKSiwrREFBUUE7OztLQUhKSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1NldHRpbmcvcGFnZS50c3g/ZWM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBNYWluTmF2QmFyIGZyb20gXCIuLi9NYWluTmF2QmFyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkRm9vdGVyLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCBQcm9maWxlQXZhdGFyIGZyb20gXCIuL2F2YXRhclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS91c2UtdG9hc3RcIjtcblxuY29uc3QgaW5pdGlhbFVzZXJJbmZvID0ge1xuICB1c2VybmFtZTogXCJjb25jb3JkXCIsXG4gIGFib3V0OiBcImhpLCBoZXJlIGlzLi4uXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5nUGFnZSgpIHtcbiAgY29uc3QgW3VzZXJJbmZvLCBzZXRVc2VySW5mb10gPSB1c2VTdGF0ZShpbml0aWFsVXNlckluZm8pO1xuXG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IGhhbmRsZVNhdmUgPSAoKSA9PiB7XG4gICAgdG9hc3Qoe1xuICAgICAgdGl0bGU6IFwiU3VjY2Vzc2Z1bGx5IFNhdmVkIVwiLFxuICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKFxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PlxuICApIHtcbiAgICBjb25zdCB7IGlkLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgc2V0VXNlckluZm8oKHByZXZVc2VySW5mbykgPT4gKHtcbiAgICAgIC4uLnByZXZVc2VySW5mbyxcbiAgICAgIFtpZF06IHZhbHVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiB3LWZ1bGwgZmxleC1jb2xcIj5cbiAgICAgIDxNYWluTmF2QmFyPjwvTWFpbk5hdkJhcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtW2NhbGMoMTAwdmhfLV90aGVtZShzcGFjaW5nLjE2KSldIGZsZXgtMSBmbGV4LWNvbCBnYXAtNCBiZy1tdXRlZC80MCBwLTQgbWQ6Z2FwLTggbWQ6cC0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZ3JpZCB3LWZ1bGwgbWF4LXctNnhsIGdhcC0yXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5TZXR0aW5nPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGdyaWQgdy1mdWxsIG1heC13LTZ4bCBpdGVtcy1zdGFydCBnYXAtNiBtZDpncmlkLWNvbHMtWzE4MHB4XzFmcl0gbGc6Z3JpZC1jb2xzLVsyNTBweF8xZnJdXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPkVkaXQgUHJvZmlsZTwvTGluaz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3VzZXJJbmZvLnVzZXJuYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdy1mdWxsIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGVBdmF0YXI+PC9Qcm9maWxlQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lPC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VySW5mby51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJhYm91dFwiPkFib3V0PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhYm91dFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VySW5mby5hYm91dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkRm9vdGVyIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17aGFuZGxlU2F2ZX0+XG4gICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1haW5OYXZCYXIiLCJMaW5rIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEZvb3RlciIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJMYWJlbCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJQcm9maWxlQXZhdGFyIiwidXNlU3RhdGUiLCJ1c2VUb2FzdCIsImluaXRpYWxVc2VySW5mbyIsInVzZXJuYW1lIiwiYWJvdXQiLCJTZXR0aW5nUGFnZSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJ0b2FzdCIsImhhbmRsZVNhdmUiLCJ0aXRsZSIsImR1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImlkIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2VXNlckluZm8iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJocmVmIiwiaHRtbEZvciIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Setting/page.tsx\n"));

/***/ })

});