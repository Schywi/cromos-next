webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Services/Service.jsx":
/*!*****************************************!*\
  !*** ./components/Services/Service.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ \"./components/Header/Header.jsx\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer/Footer */ \"./components/Footer/Footer.jsx\");\n/* harmony import */ var _Budget_BudgetFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Budget/BudgetFooter */ \"./components/Budget/BudgetFooter.jsx\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../db */ \"./components/db.js\");\n\n\nvar _jsxFileName = \"/home/lucas/home/lucas/www/udemy/my-projects/cromos-chat/cromos-next/components/Services/Service.jsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Services = function Services(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"wrapServices\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      \"class\": \"dark\",\n      children: _db__WEBPACK_IMPORTED_MODULE_5__[\"db\"].map(function (item) {\n        if (true) {\n          var serviceid = window.location.pathname;\n          serviceid = serviceid.split(\"service/\");\n\n          if (serviceid[1] == item.service.id) {\n            console.log(serviceid[1] == item.service.id);\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n              \"class\": \"main-container services services__item\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                \"data-aos\": \"fade-right\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n                  children: item.service.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 34,\n                  columnNumber: 44\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 40\n              }, _this), item.service.paragraph.map(function (result) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  \"data-aos\": \"fade-right\",\n                  \"data-aos-delay\": 150,\n                  children: result\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 37,\n                  columnNumber: 52\n                }, _this);\n              }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                \"class\": \"services__content \",\n                children: item.service.image.map(function (result) {\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    \"class\": \"services__content-img\" + item.service.id,\n                    src: result,\n                    alt: \"\",\n                    \"data-aos\": \"fade-in\",\n                    \"data-aos-delay\": 200\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 45,\n                    columnNumber: 61\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 40\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 32\n            }, _this);\n          }\n        }\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Budget_BudgetFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\n\nvar _c;\n\n$RefreshReg$(_c, \"Services\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZXJ2aWNlcy9TZXJ2aWNlLmpzeD81ZGE5Il0sIm5hbWVzIjpbIlNlcnZpY2VzIiwicHJvcHMiLCJkYiIsIm1hcCIsIml0ZW0iLCJzZXJ2aWNlaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3BsaXQiLCJzZXJ2aWNlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJwYXJhZ3JhcGgiLCJyZXN1bHQiLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUkzQixzQkFDTztBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsNEJBRUkscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR1E7QUFBSyxlQUFNLE1BQVg7QUFBQSxnQkFDS0Msc0NBQUUsQ0FBQ0MsR0FBSCxDQUFPLFVBQUNDLElBQUQsRUFBVTtBQUVsQixrQkFBbUM7QUFDL0IsY0FBSUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhDO0FBRUFILG1CQUFTLEdBQUdBLFNBQVMsQ0FBQ0ksS0FBVixZQUFaOztBQUVELGNBQUlKLFNBQVMsQ0FBQyxDQUFELENBQVQsSUFBZ0JELElBQUksQ0FBQ00sT0FBTCxDQUFhQyxFQUFqQyxFQUFxQztBQUNqQ0MsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZUixTQUFTLENBQUMsQ0FBRCxDQUFULElBQWdCRCxJQUFJLENBQUNNLE9BQUwsQ0FBYUMsRUFBekM7QUFDQSxnQ0FDSTtBQUFTLHVCQUFNLHdDQUFmO0FBQUEsc0NBRVE7QUFBSSw0QkFBUyxZQUFiO0FBQUEsdUNBQ0k7QUFBQSw0QkFBU1AsSUFBSSxDQUFDTSxPQUFMLENBQWFJO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZSLEVBS1NWLElBQUksQ0FBQ00sT0FBTCxDQUFhSyxTQUFiLENBQXVCWixHQUF2QixDQUEyQixVQUFBYSxNQUFNLEVBQUk7QUFDbEMsb0NBQVE7QUFBRyw4QkFBUyxZQUFaO0FBQXlCLG9DQUFnQixHQUF6QztBQUFBLDRCQUErQ0E7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUjtBQUNILGVBRkEsQ0FMVCxlQVVRO0FBQUsseUJBQU0sb0JBQVg7QUFBQSwwQkFFVVosSUFBSSxDQUFDTSxPQUFMLENBQWFPLEtBQWIsQ0FBbUJkLEdBQW5CLENBQXVCLFVBQUFhLE1BQU0sRUFBSTtBQUUvQixzQ0FBUztBQUFLLDZCQUFPLDBCQUEyQlosSUFBSSxDQUFDTSxPQUFMLENBQWFDLEVBQXBEO0FBQXlELHVCQUFHLEVBQUVLLE1BQTlEO0FBQXNFLHVCQUFHLEVBQUMsRUFBMUU7QUFBNkUsZ0NBQVMsU0FBdEY7QUFBZ0csc0NBQWdCO0FBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVQ7QUFDSCxpQkFIQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBc0JEO0FBQ0w7QUFJQSxPQXBDQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIUixlQTRDUSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNSLGVBNkNRLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFA7QUFtREEsQ0F2REQ7O0tBQU1oQixRO0FBeURTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VydmljZXMvU2VydmljZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXIvRm9vdGVyXCI7XG5cbmltcG9ydCBCdWRnZXRGb290ZXIgZnJvbSBcIi4uL0J1ZGdldC9CdWRnZXRGb290ZXJcIjtcbmltcG9ydCB7ZGIsZGIxfSBmcm9tICcuLi9kYic7XG4gXG5cblxuXG5cbmNvbnN0IFNlcnZpY2VzID0gKHByb3BzKSA9PiB7IFxuICBcblxuXG4gcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwU2VydmljZXNcIj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGFya1wiPlxuICAgICAgICAgICAgICAgICAgICB7ZGIubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlcnZpY2VpZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZWlkID0gc2VydmljZWlkLnNwbGl0KGBzZXJ2aWNlL2ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlaWRbMV0gPT0gaXRlbS5zZXJ2aWNlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZXJ2aWNlaWRbMV0gPT0gaXRlbS5zZXJ2aWNlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1haW4tY29udGFpbmVyIHNlcnZpY2VzIHNlcnZpY2VzX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntpdGVtLnNlcnZpY2UudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uc2VydmljZS5wYXJhZ3JhcGgubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICA8cCBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIiBkYXRhLWFvcy1kZWxheT17MTUwfT57cmVzdWx0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlcnZpY2VzX19jb250ZW50IFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpdGVtLnNlcnZpY2UuaW1hZ2UubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gICA8aW1nIGNsYXNzPXtcInNlcnZpY2VzX19jb250ZW50LWltZ1wiICsgKGl0ZW0uc2VydmljZS5pZCl9IHNyYz17cmVzdWx0fSBhbHQ9XCJcIiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kZWxheT17MjAwfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1ZGdldEZvb3Rlci8+XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgIDwvZGl2PlxuICAgXG4pXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Services/Service.jsx\n");

/***/ })

})