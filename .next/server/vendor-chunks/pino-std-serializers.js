"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pino-std-serializers";
exports.ids = ["vendor-chunks/pino-std-serializers"];
exports.modules = {

/***/ "(ssr)/./node_modules/pino-std-serializers/index.js":
/*!****************************************************!*\
  !*** ./node_modules/pino-std-serializers/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst errSerializer = __webpack_require__(/*! ./lib/err */ \"(ssr)/./node_modules/pino-std-serializers/lib/err.js\");\nconst reqSerializers = __webpack_require__(/*! ./lib/req */ \"(ssr)/./node_modules/pino-std-serializers/lib/req.js\");\nconst resSerializers = __webpack_require__(/*! ./lib/res */ \"(ssr)/./node_modules/pino-std-serializers/lib/res.js\");\nmodule.exports = {\n    err: errSerializer,\n    mapHttpRequest: reqSerializers.mapHttpRequest,\n    mapHttpResponse: resSerializers.mapHttpResponse,\n    req: reqSerializers.reqSerializer,\n    res: resSerializers.resSerializer,\n    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {\n        if (customSerializer === errSerializer) return customSerializer;\n        return function wrapErrSerializer(err) {\n            return customSerializer(errSerializer(err));\n        };\n    },\n    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {\n        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;\n        return function wrappedReqSerializer(req) {\n            return customSerializer(reqSerializers.reqSerializer(req));\n        };\n    },\n    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {\n        if (customSerializer === resSerializers.resSerializer) return customSerializer;\n        return function wrappedResSerializer(res) {\n            return customSerializer(resSerializers.resSerializer(res));\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxnQkFBZ0JDLG1CQUFPQSxDQUFDO0FBQzlCLE1BQU1DLGlCQUFpQkQsbUJBQU9BLENBQUM7QUFDL0IsTUFBTUUsaUJBQWlCRixtQkFBT0EsQ0FBQztBQUUvQkcsT0FBT0MsT0FBTyxHQUFHO0lBQ2ZDLEtBQUtOO0lBQ0xPLGdCQUFnQkwsZUFBZUssY0FBYztJQUM3Q0MsaUJBQWlCTCxlQUFlSyxlQUFlO0lBQy9DQyxLQUFLUCxlQUFlUSxhQUFhO0lBQ2pDQyxLQUFLUixlQUFlUyxhQUFhO0lBRWpDQyxxQkFBcUIsU0FBU0Esb0JBQXFCQyxnQkFBZ0I7UUFDakUsSUFBSUEscUJBQXFCZCxlQUFlLE9BQU9jO1FBQy9DLE9BQU8sU0FBU0Msa0JBQW1CVCxHQUFHO1lBQ3BDLE9BQU9RLGlCQUFpQmQsY0FBY007UUFDeEM7SUFDRjtJQUVBVSx1QkFBdUIsU0FBU0Esc0JBQXVCRixnQkFBZ0I7UUFDckUsSUFBSUEscUJBQXFCWixlQUFlUSxhQUFhLEVBQUUsT0FBT0k7UUFDOUQsT0FBTyxTQUFTRyxxQkFBc0JSLEdBQUc7WUFDdkMsT0FBT0ssaUJBQWlCWixlQUFlUSxhQUFhLENBQUNEO1FBQ3ZEO0lBQ0Y7SUFFQVMsd0JBQXdCLFNBQVNBLHVCQUF3QkosZ0JBQWdCO1FBQ3ZFLElBQUlBLHFCQUFxQlgsZUFBZVMsYUFBYSxFQUFFLE9BQU9FO1FBQzlELE9BQU8sU0FBU0sscUJBQXNCUixHQUFHO1lBQ3ZDLE9BQU9HLGlCQUFpQlgsZUFBZVMsYUFBYSxDQUFDRDtRQUN2RDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvaW5kZXguanM/ZTNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgZXJyU2VyaWFsaXplciA9IHJlcXVpcmUoJy4vbGliL2VycicpXG5jb25zdCByZXFTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbGliL3JlcScpXG5jb25zdCByZXNTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbGliL3JlcycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlcnI6IGVyclNlcmlhbGl6ZXIsXG4gIG1hcEh0dHBSZXF1ZXN0OiByZXFTZXJpYWxpemVycy5tYXBIdHRwUmVxdWVzdCxcbiAgbWFwSHR0cFJlc3BvbnNlOiByZXNTZXJpYWxpemVycy5tYXBIdHRwUmVzcG9uc2UsXG4gIHJlcTogcmVxU2VyaWFsaXplcnMucmVxU2VyaWFsaXplcixcbiAgcmVzOiByZXNTZXJpYWxpemVycy5yZXNTZXJpYWxpemVyLFxuXG4gIHdyYXBFcnJvclNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBFcnJvclNlcmlhbGl6ZXIgKGN1c3RvbVNlcmlhbGl6ZXIpIHtcbiAgICBpZiAoY3VzdG9tU2VyaWFsaXplciA9PT0gZXJyU2VyaWFsaXplcikgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcEVyclNlcmlhbGl6ZXIgKGVycikge1xuICAgICAgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXIoZXJyU2VyaWFsaXplcihlcnIpKVxuICAgIH1cbiAgfSxcblxuICB3cmFwUmVxdWVzdFNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBSZXF1ZXN0U2VyaWFsaXplciAoY3VzdG9tU2VyaWFsaXplcikge1xuICAgIGlmIChjdXN0b21TZXJpYWxpemVyID09PSByZXFTZXJpYWxpemVycy5yZXFTZXJpYWxpemVyKSByZXR1cm4gY3VzdG9tU2VyaWFsaXplclxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVkUmVxU2VyaWFsaXplciAocmVxKSB7XG4gICAgICByZXR1cm4gY3VzdG9tU2VyaWFsaXplcihyZXFTZXJpYWxpemVycy5yZXFTZXJpYWxpemVyKHJlcSkpXG4gICAgfVxuICB9LFxuXG4gIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXIgKGN1c3RvbVNlcmlhbGl6ZXIpIHtcbiAgICBpZiAoY3VzdG9tU2VyaWFsaXplciA9PT0gcmVzU2VyaWFsaXplcnMucmVzU2VyaWFsaXplcikgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlZFJlc1NlcmlhbGl6ZXIgKHJlcykge1xuICAgICAgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXIocmVzU2VyaWFsaXplcnMucmVzU2VyaWFsaXplcihyZXMpKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImVyclNlcmlhbGl6ZXIiLCJyZXF1aXJlIiwicmVxU2VyaWFsaXplcnMiLCJyZXNTZXJpYWxpemVycyIsIm1vZHVsZSIsImV4cG9ydHMiLCJlcnIiLCJtYXBIdHRwUmVxdWVzdCIsIm1hcEh0dHBSZXNwb25zZSIsInJlcSIsInJlcVNlcmlhbGl6ZXIiLCJyZXMiLCJyZXNTZXJpYWxpemVyIiwid3JhcEVycm9yU2VyaWFsaXplciIsImN1c3RvbVNlcmlhbGl6ZXIiLCJ3cmFwRXJyU2VyaWFsaXplciIsIndyYXBSZXF1ZXN0U2VyaWFsaXplciIsIndyYXBwZWRSZXFTZXJpYWxpemVyIiwid3JhcFJlc3BvbnNlU2VyaWFsaXplciIsIndyYXBwZWRSZXNTZXJpYWxpemVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/err.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/err.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = errSerializer;\nconst { toString } = Object.prototype;\nconst seen = Symbol(\"circular-ref-tag\");\nconst rawSymbol = Symbol(\"pino-raw-err-ref\");\nconst pinoErrProto = Object.create({}, {\n    type: {\n        enumerable: true,\n        writable: true,\n        value: undefined\n    },\n    message: {\n        enumerable: true,\n        writable: true,\n        value: undefined\n    },\n    stack: {\n        enumerable: true,\n        writable: true,\n        value: undefined\n    },\n    raw: {\n        enumerable: false,\n        get: function() {\n            return this[rawSymbol];\n        },\n        set: function(val) {\n            this[rawSymbol] = val;\n        }\n    }\n});\nObject.defineProperty(pinoErrProto, rawSymbol, {\n    writable: true,\n    value: {}\n});\nfunction errSerializer(err) {\n    if (!(err instanceof Error)) {\n        return err;\n    }\n    err[seen] = undefined // tag to prevent re-looking at this\n    ;\n    const _err = Object.create(pinoErrProto);\n    _err.type = toString.call(err.constructor) === \"[object Function]\" ? err.constructor.name : err.name;\n    _err.message = err.message;\n    _err.stack = err.stack;\n    for(const key in err){\n        if (_err[key] === undefined) {\n            const val = err[key];\n            if (val instanceof Error) {\n                /* eslint-disable no-prototype-builtins */ if (!val.hasOwnProperty(seen)) {\n                    _err[key] = errSerializer(val);\n                }\n            } else {\n                _err[key] = val;\n            }\n        }\n    }\n    delete err[seen] // clean up tag in case err is serialized again later\n    ;\n    _err.raw = err;\n    return _err;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL2Vyci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUdDO0FBRWpCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE9BQU9DLFNBQVM7QUFDckMsTUFBTUMsT0FBT0MsT0FBTztBQUNwQixNQUFNQyxZQUFZRCxPQUFPO0FBQ3pCLE1BQU1FLGVBQWVMLE9BQU9NLE1BQU0sQ0FBQyxDQUFDLEdBQUc7SUFDckNDLE1BQU07UUFDSkMsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE9BQU9DO0lBQ1Q7SUFDQUMsU0FBUztRQUNQSixZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBT0M7SUFDVDtJQUNBRSxPQUFPO1FBQ0xMLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxPQUFPQztJQUNUO0lBQ0FHLEtBQUs7UUFDSE4sWUFBWTtRQUNaTyxLQUFLO1lBQ0gsT0FBTyxJQUFJLENBQUNYLFVBQVU7UUFDeEI7UUFDQVksS0FBSyxTQUFVQyxHQUFHO1lBQ2hCLElBQUksQ0FBQ2IsVUFBVSxHQUFHYTtRQUNwQjtJQUNGO0FBQ0Y7QUFDQWpCLE9BQU9rQixjQUFjLENBQUNiLGNBQWNELFdBQVc7SUFDN0NLLFVBQVU7SUFDVkMsT0FBTyxDQUFDO0FBQ1Y7QUFFQSxTQUFTWixjQUFlcUIsR0FBRztJQUN6QixJQUFJLENBQUVBLENBQUFBLGVBQWVDLEtBQUksR0FBSTtRQUMzQixPQUFPRDtJQUNUO0lBRUFBLEdBQUcsQ0FBQ2pCLEtBQUssR0FBR1MsVUFBVSxvQ0FBb0M7O0lBQzFELE1BQU1VLE9BQU9yQixPQUFPTSxNQUFNLENBQUNEO0lBQzNCZ0IsS0FBS2QsSUFBSSxHQUFHUixTQUFTdUIsSUFBSSxDQUFDSCxJQUFJSSxXQUFXLE1BQU0sc0JBQzNDSixJQUFJSSxXQUFXLENBQUNDLElBQUksR0FDcEJMLElBQUlLLElBQUk7SUFDWkgsS0FBS1QsT0FBTyxHQUFHTyxJQUFJUCxPQUFPO0lBQzFCUyxLQUFLUixLQUFLLEdBQUdNLElBQUlOLEtBQUs7SUFDdEIsSUFBSyxNQUFNWSxPQUFPTixJQUFLO1FBQ3JCLElBQUlFLElBQUksQ0FBQ0ksSUFBSSxLQUFLZCxXQUFXO1lBQzNCLE1BQU1NLE1BQU1FLEdBQUcsQ0FBQ00sSUFBSTtZQUNwQixJQUFJUixlQUFlRyxPQUFPO2dCQUN4Qix3Q0FBd0MsR0FDeEMsSUFBSSxDQUFDSCxJQUFJUyxjQUFjLENBQUN4QixPQUFPO29CQUM3Qm1CLElBQUksQ0FBQ0ksSUFBSSxHQUFHM0IsY0FBY21CO2dCQUM1QjtZQUNGLE9BQU87Z0JBQ0xJLElBQUksQ0FBQ0ksSUFBSSxHQUFHUjtZQUNkO1FBQ0Y7SUFDRjtJQUVBLE9BQU9FLEdBQUcsQ0FBQ2pCLEtBQUssQ0FBQyxxREFBcUQ7O0lBQ3RFbUIsS0FBS1AsR0FBRyxHQUFHSztJQUNYLE9BQU9FO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL2Vyci5qcz8zNDQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVyclNlcmlhbGl6ZXJcblxuY29uc3QgeyB0b1N0cmluZyB9ID0gT2JqZWN0LnByb3RvdHlwZVxuY29uc3Qgc2VlbiA9IFN5bWJvbCgnY2lyY3VsYXItcmVmLXRhZycpXG5jb25zdCByYXdTeW1ib2wgPSBTeW1ib2woJ3Bpbm8tcmF3LWVyci1yZWYnKVxuY29uc3QgcGlub0VyclByb3RvID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICB0eXBlOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdW5kZWZpbmVkXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgfSxcbiAgc3RhY2s6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgfSxcbiAgcmF3OiB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1tyYXdTeW1ib2xdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHRoaXNbcmF3U3ltYm9sXSA9IHZhbFxuICAgIH1cbiAgfVxufSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5vRXJyUHJvdG8sIHJhd1N5bWJvbCwge1xuICB3cml0YWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHt9XG59KVxuXG5mdW5jdGlvbiBlcnJTZXJpYWxpemVyIChlcnIpIHtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgZXJyW3NlZW5dID0gdW5kZWZpbmVkIC8vIHRhZyB0byBwcmV2ZW50IHJlLWxvb2tpbmcgYXQgdGhpc1xuICBjb25zdCBfZXJyID0gT2JqZWN0LmNyZWF0ZShwaW5vRXJyUHJvdG8pXG4gIF9lcnIudHlwZSA9IHRvU3RyaW5nLmNhbGwoZXJyLmNvbnN0cnVjdG9yKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICAgID8gZXJyLmNvbnN0cnVjdG9yLm5hbWVcbiAgICA6IGVyci5uYW1lXG4gIF9lcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gIF9lcnIuc3RhY2sgPSBlcnIuc3RhY2tcbiAgZm9yIChjb25zdCBrZXkgaW4gZXJyKSB7XG4gICAgaWYgKF9lcnJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB2YWwgPSBlcnJba2V5XVxuICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuICAgICAgICBpZiAoIXZhbC5oYXNPd25Qcm9wZXJ0eShzZWVuKSkge1xuICAgICAgICAgIF9lcnJba2V5XSA9IGVyclNlcmlhbGl6ZXIodmFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXJyW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWxldGUgZXJyW3NlZW5dIC8vIGNsZWFuIHVwIHRhZyBpbiBjYXNlIGVyciBpcyBzZXJpYWxpemVkIGFnYWluIGxhdGVyXG4gIF9lcnIucmF3ID0gZXJyXG4gIHJldHVybiBfZXJyXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVyclNlcmlhbGl6ZXIiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsInNlZW4iLCJTeW1ib2wiLCJyYXdTeW1ib2wiLCJwaW5vRXJyUHJvdG8iLCJjcmVhdGUiLCJ0eXBlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwic3RhY2siLCJyYXciLCJnZXQiLCJzZXQiLCJ2YWwiLCJkZWZpbmVQcm9wZXJ0eSIsImVyciIsIkVycm9yIiwiX2VyciIsImNhbGwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/err.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/req.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/req.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    mapHttpRequest,\n    reqSerializer\n};\nconst rawSymbol = Symbol(\"pino-raw-req-ref\");\nconst pinoReqProto = Object.create({}, {\n    id: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    method: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    url: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    query: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    params: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    headers: {\n        enumerable: true,\n        writable: true,\n        value: {}\n    },\n    remoteAddress: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    remotePort: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    raw: {\n        enumerable: false,\n        get: function() {\n            return this[rawSymbol];\n        },\n        set: function(val) {\n            this[rawSymbol] = val;\n        }\n    }\n});\nObject.defineProperty(pinoReqProto, rawSymbol, {\n    writable: true,\n    value: {}\n});\nfunction reqSerializer(req) {\n    // req.info is for hapi compat.\n    const connection = req.info || req.socket;\n    const _req = Object.create(pinoReqProto);\n    _req.id = typeof req.id === \"function\" ? req.id() : req.id || (req.info ? req.info.id : undefined);\n    _req.method = req.method;\n    // req.originalUrl is for expressjs compat.\n    if (req.originalUrl) {\n        _req.url = req.originalUrl;\n        _req.query = req.query;\n        _req.params = req.params;\n    } else {\n        // req.url.path is  for hapi compat.\n        _req.url = req.path || (req.url ? req.url.path || req.url : undefined);\n    }\n    _req.headers = req.headers;\n    _req.remoteAddress = connection && connection.remoteAddress;\n    _req.remotePort = connection && connection.remotePort;\n    // req.raw is  for hapi compat/equivalence\n    _req.raw = req.raw || req;\n    return _req;\n}\nfunction mapHttpRequest(req) {\n    return {\n        req: reqSerializer(req)\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3JlcS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUc7SUFDZkM7SUFDQUM7QUFDRjtBQUVBLE1BQU1DLFlBQVlDLE9BQU87QUFDekIsTUFBTUMsZUFBZUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRztJQUNyQ0MsSUFBSTtRQUNGQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztJQUNUO0lBQ0FDLFFBQVE7UUFDTkgsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE9BQU87SUFDVDtJQUNBRSxLQUFLO1FBQ0hKLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxPQUFPO0lBQ1Q7SUFDQUcsT0FBTztRQUNMTCxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztJQUNUO0lBQ0FJLFFBQVE7UUFDTk4sWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE9BQU87SUFDVDtJQUNBSyxTQUFTO1FBQ1BQLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxPQUFPLENBQUM7SUFDVjtJQUNBTSxlQUFlO1FBQ2JSLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxPQUFPO0lBQ1Q7SUFDQU8sWUFBWTtRQUNWVCxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztJQUNUO0lBQ0FRLEtBQUs7UUFDSFYsWUFBWTtRQUNaVyxLQUFLO1lBQ0gsT0FBTyxJQUFJLENBQUNqQixVQUFVO1FBQ3hCO1FBQ0FrQixLQUFLLFNBQVVDLEdBQUc7WUFDaEIsSUFBSSxDQUFDbkIsVUFBVSxHQUFHbUI7UUFDcEI7SUFDRjtBQUNGO0FBQ0FoQixPQUFPaUIsY0FBYyxDQUFDbEIsY0FBY0YsV0FBVztJQUM3Q08sVUFBVTtJQUNWQyxPQUFPLENBQUM7QUFDVjtBQUVBLFNBQVNULGNBQWVzQixHQUFHO0lBQ3pCLCtCQUErQjtJQUMvQixNQUFNQyxhQUFhRCxJQUFJRSxJQUFJLElBQUlGLElBQUlHLE1BQU07SUFDekMsTUFBTUMsT0FBT3RCLE9BQU9DLE1BQU0sQ0FBQ0Y7SUFDM0J1QixLQUFLcEIsRUFBRSxHQUFJLE9BQU9nQixJQUFJaEIsRUFBRSxLQUFLLGFBQWFnQixJQUFJaEIsRUFBRSxLQUFNZ0IsSUFBSWhCLEVBQUUsSUFBS2dCLENBQUFBLElBQUlFLElBQUksR0FBR0YsSUFBSUUsSUFBSSxDQUFDbEIsRUFBRSxHQUFHcUIsU0FBUTtJQUNsR0QsS0FBS2hCLE1BQU0sR0FBR1ksSUFBSVosTUFBTTtJQUN4QiwyQ0FBMkM7SUFDM0MsSUFBSVksSUFBSU0sV0FBVyxFQUFFO1FBQ25CRixLQUFLZixHQUFHLEdBQUdXLElBQUlNLFdBQVc7UUFDMUJGLEtBQUtkLEtBQUssR0FBR1UsSUFBSVYsS0FBSztRQUN0QmMsS0FBS2IsTUFBTSxHQUFHUyxJQUFJVCxNQUFNO0lBQzFCLE9BQU87UUFDTCxvQ0FBb0M7UUFDcENhLEtBQUtmLEdBQUcsR0FBR1csSUFBSU8sSUFBSSxJQUFLUCxDQUFBQSxJQUFJWCxHQUFHLEdBQUlXLElBQUlYLEdBQUcsQ0FBQ2tCLElBQUksSUFBSVAsSUFBSVgsR0FBRyxHQUFJZ0IsU0FBUTtJQUN4RTtJQUNBRCxLQUFLWixPQUFPLEdBQUdRLElBQUlSLE9BQU87SUFDMUJZLEtBQUtYLGFBQWEsR0FBR1EsY0FBY0EsV0FBV1IsYUFBYTtJQUMzRFcsS0FBS1YsVUFBVSxHQUFHTyxjQUFjQSxXQUFXUCxVQUFVO0lBQ3JELDBDQUEwQztJQUMxQ1UsS0FBS1QsR0FBRyxHQUFHSyxJQUFJTCxHQUFHLElBQUlLO0lBQ3RCLE9BQU9JO0FBQ1Q7QUFFQSxTQUFTM0IsZUFBZ0J1QixHQUFHO0lBQzFCLE9BQU87UUFDTEEsS0FBS3RCLGNBQWNzQjtJQUNyQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3Bpbm8tc3RkLXNlcmlhbGl6ZXJzL2xpYi9yZXEuanM/OTA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1hcEh0dHBSZXF1ZXN0LFxuICByZXFTZXJpYWxpemVyXG59XG5cbmNvbnN0IHJhd1N5bWJvbCA9IFN5bWJvbCgncGluby1yYXctcmVxLXJlZicpXG5jb25zdCBwaW5vUmVxUHJvdG8gPSBPYmplY3QuY3JlYXRlKHt9LCB7XG4gIGlkOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgbWV0aG9kOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgdXJsOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgcXVlcnk6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICBwYXJhbXM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICBoZWFkZXJzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge31cbiAgfSxcbiAgcmVtb3RlQWRkcmVzczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHJlbW90ZVBvcnQ6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICByYXc6IHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzW3Jhd1N5bWJvbF1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgdGhpc1tyYXdTeW1ib2xdID0gdmFsXG4gICAgfVxuICB9XG59KVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHBpbm9SZXFQcm90bywgcmF3U3ltYm9sLCB7XG4gIHdyaXRhYmxlOiB0cnVlLFxuICB2YWx1ZToge31cbn0pXG5cbmZ1bmN0aW9uIHJlcVNlcmlhbGl6ZXIgKHJlcSkge1xuICAvLyByZXEuaW5mbyBpcyBmb3IgaGFwaSBjb21wYXQuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSByZXEuaW5mbyB8fCByZXEuc29ja2V0XG4gIGNvbnN0IF9yZXEgPSBPYmplY3QuY3JlYXRlKHBpbm9SZXFQcm90bylcbiAgX3JlcS5pZCA9ICh0eXBlb2YgcmVxLmlkID09PSAnZnVuY3Rpb24nID8gcmVxLmlkKCkgOiAocmVxLmlkIHx8IChyZXEuaW5mbyA/IHJlcS5pbmZvLmlkIDogdW5kZWZpbmVkKSkpXG4gIF9yZXEubWV0aG9kID0gcmVxLm1ldGhvZFxuICAvLyByZXEub3JpZ2luYWxVcmwgaXMgZm9yIGV4cHJlc3NqcyBjb21wYXQuXG4gIGlmIChyZXEub3JpZ2luYWxVcmwpIHtcbiAgICBfcmVxLnVybCA9IHJlcS5vcmlnaW5hbFVybFxuICAgIF9yZXEucXVlcnkgPSByZXEucXVlcnlcbiAgICBfcmVxLnBhcmFtcyA9IHJlcS5wYXJhbXNcbiAgfSBlbHNlIHtcbiAgICAvLyByZXEudXJsLnBhdGggaXMgIGZvciBoYXBpIGNvbXBhdC5cbiAgICBfcmVxLnVybCA9IHJlcS5wYXRoIHx8IChyZXEudXJsID8gKHJlcS51cmwucGF0aCB8fCByZXEudXJsKSA6IHVuZGVmaW5lZClcbiAgfVxuICBfcmVxLmhlYWRlcnMgPSByZXEuaGVhZGVyc1xuICBfcmVxLnJlbW90ZUFkZHJlc3MgPSBjb25uZWN0aW9uICYmIGNvbm5lY3Rpb24ucmVtb3RlQWRkcmVzc1xuICBfcmVxLnJlbW90ZVBvcnQgPSBjb25uZWN0aW9uICYmIGNvbm5lY3Rpb24ucmVtb3RlUG9ydFxuICAvLyByZXEucmF3IGlzICBmb3IgaGFwaSBjb21wYXQvZXF1aXZhbGVuY2VcbiAgX3JlcS5yYXcgPSByZXEucmF3IHx8IHJlcVxuICByZXR1cm4gX3JlcVxufVxuXG5mdW5jdGlvbiBtYXBIdHRwUmVxdWVzdCAocmVxKSB7XG4gIHJldHVybiB7XG4gICAgcmVxOiByZXFTZXJpYWxpemVyKHJlcSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtYXBIdHRwUmVxdWVzdCIsInJlcVNlcmlhbGl6ZXIiLCJyYXdTeW1ib2wiLCJTeW1ib2wiLCJwaW5vUmVxUHJvdG8iLCJPYmplY3QiLCJjcmVhdGUiLCJpZCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwibWV0aG9kIiwidXJsIiwicXVlcnkiLCJwYXJhbXMiLCJoZWFkZXJzIiwicmVtb3RlQWRkcmVzcyIsInJlbW90ZVBvcnQiLCJyYXciLCJnZXQiLCJzZXQiLCJ2YWwiLCJkZWZpbmVQcm9wZXJ0eSIsInJlcSIsImNvbm5lY3Rpb24iLCJpbmZvIiwic29ja2V0IiwiX3JlcSIsInVuZGVmaW5lZCIsIm9yaWdpbmFsVXJsIiwicGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/req.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/res.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/res.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\nmodule.exports = {\n    mapHttpResponse,\n    resSerializer\n};\nconst rawSymbol = Symbol(\"pino-raw-res-ref\");\nconst pinoResProto = Object.create({}, {\n    statusCode: {\n        enumerable: true,\n        writable: true,\n        value: 0\n    },\n    headers: {\n        enumerable: true,\n        writable: true,\n        value: \"\"\n    },\n    raw: {\n        enumerable: false,\n        get: function() {\n            return this[rawSymbol];\n        },\n        set: function(val) {\n            this[rawSymbol] = val;\n        }\n    }\n});\nObject.defineProperty(pinoResProto, rawSymbol, {\n    writable: true,\n    value: {}\n});\nfunction resSerializer(res) {\n    const _res = Object.create(pinoResProto);\n    _res.statusCode = res.statusCode;\n    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;\n    _res.raw = res;\n    return _res;\n}\nfunction mapHttpResponse(res) {\n    return {\n        res: resSerializer(res)\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3Jlcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUc7SUFDZkM7SUFDQUM7QUFDRjtBQUVBLE1BQU1DLFlBQVlDLE9BQU87QUFDekIsTUFBTUMsZUFBZUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBRztJQUNyQ0MsWUFBWTtRQUNWQyxZQUFZO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztJQUNUO0lBQ0FDLFNBQVM7UUFDUEgsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE9BQU87SUFDVDtJQUNBRSxLQUFLO1FBQ0hKLFlBQVk7UUFDWkssS0FBSztZQUNILE9BQU8sSUFBSSxDQUFDWCxVQUFVO1FBQ3hCO1FBQ0FZLEtBQUssU0FBVUMsR0FBRztZQUNoQixJQUFJLENBQUNiLFVBQVUsR0FBR2E7UUFDcEI7SUFDRjtBQUNGO0FBQ0FWLE9BQU9XLGNBQWMsQ0FBQ1osY0FBY0YsV0FBVztJQUM3Q08sVUFBVTtJQUNWQyxPQUFPLENBQUM7QUFDVjtBQUVBLFNBQVNULGNBQWVnQixHQUFHO0lBQ3pCLE1BQU1DLE9BQU9iLE9BQU9DLE1BQU0sQ0FBQ0Y7SUFDM0JjLEtBQUtYLFVBQVUsR0FBR1UsSUFBSVYsVUFBVTtJQUNoQ1csS0FBS1AsT0FBTyxHQUFHTSxJQUFJRSxVQUFVLEdBQUdGLElBQUlFLFVBQVUsS0FBS0YsSUFBSUcsUUFBUTtJQUMvREYsS0FBS04sR0FBRyxHQUFHSztJQUNYLE9BQU9DO0FBQ1Q7QUFFQSxTQUFTbEIsZ0JBQWlCaUIsR0FBRztJQUMzQixPQUFPO1FBQ0xBLEtBQUtoQixjQUFjZ0I7SUFDckI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy9waW5vLXN0ZC1zZXJpYWxpemVycy9saWIvcmVzLmpzPzBiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXBIdHRwUmVzcG9uc2UsXG4gIHJlc1NlcmlhbGl6ZXJcbn1cblxuY29uc3QgcmF3U3ltYm9sID0gU3ltYm9sKCdwaW5vLXJhdy1yZXMtcmVmJylcbmNvbnN0IHBpbm9SZXNQcm90byA9IE9iamVjdC5jcmVhdGUoe30sIHtcbiAgc3RhdHVzQ29kZToge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IDBcbiAgfSxcbiAgaGVhZGVyczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHJhdzoge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNbcmF3U3ltYm9sXVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB0aGlzW3Jhd1N5bWJvbF0gPSB2YWxcbiAgICB9XG4gIH1cbn0pXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocGlub1Jlc1Byb3RvLCByYXdTeW1ib2wsIHtcbiAgd3JpdGFibGU6IHRydWUsXG4gIHZhbHVlOiB7fVxufSlcblxuZnVuY3Rpb24gcmVzU2VyaWFsaXplciAocmVzKSB7XG4gIGNvbnN0IF9yZXMgPSBPYmplY3QuY3JlYXRlKHBpbm9SZXNQcm90bylcbiAgX3Jlcy5zdGF0dXNDb2RlID0gcmVzLnN0YXR1c0NvZGVcbiAgX3Jlcy5oZWFkZXJzID0gcmVzLmdldEhlYWRlcnMgPyByZXMuZ2V0SGVhZGVycygpIDogcmVzLl9oZWFkZXJzXG4gIF9yZXMucmF3ID0gcmVzXG4gIHJldHVybiBfcmVzXG59XG5cbmZ1bmN0aW9uIG1hcEh0dHBSZXNwb25zZSAocmVzKSB7XG4gIHJldHVybiB7XG4gICAgcmVzOiByZXNTZXJpYWxpemVyKHJlcylcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtYXBIdHRwUmVzcG9uc2UiLCJyZXNTZXJpYWxpemVyIiwicmF3U3ltYm9sIiwiU3ltYm9sIiwicGlub1Jlc1Byb3RvIiwiT2JqZWN0IiwiY3JlYXRlIiwic3RhdHVzQ29kZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsInZhbHVlIiwiaGVhZGVycyIsInJhdyIsImdldCIsInNldCIsInZhbCIsImRlZmluZVByb3BlcnR5IiwicmVzIiwiX3JlcyIsImdldEhlYWRlcnMiLCJfaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/res.js\n");

/***/ })

};
;