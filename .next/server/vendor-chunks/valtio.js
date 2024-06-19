"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valtio";
exports.ids = ["vendor-chunks/valtio"];
exports.modules = {

/***/ "(ssr)/./node_modules/valtio/esm/vanilla.mjs":
/*!*********************************************!*\
  !*** ./node_modules/valtio/esm/vanilla.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getVersion: () => (/* binding */ getVersion),\n/* harmony export */   proxy: () => (/* binding */ proxy),\n/* harmony export */   ref: () => (/* binding */ ref),\n/* harmony export */   snapshot: () => (/* binding */ snapshot),\n/* harmony export */   subscribe: () => (/* binding */ subscribe),\n/* harmony export */   unstable_buildProxyFunction: () => (/* binding */ unstable_buildProxyFunction)\n/* harmony export */ });\n/* harmony import */ var proxy_compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-compare */ \"(ssr)/./node_modules/proxy-compare/dist/index.modern.js\");\n\nconst isObject = (x)=>typeof x === \"object\" && x !== null;\nconst proxyStateMap = /* @__PURE__ */ new WeakMap();\nconst refSet = /* @__PURE__ */ new WeakSet();\nconst buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler)=>new Proxy(target, handler), canProxy = (x)=>isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise)=>{\n    switch(promise.status){\n        case \"fulfilled\":\n            return promise.value;\n        case \"rejected\":\n            throw promise.reason;\n        default:\n            throw promise;\n    }\n}, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version, handlePromise = defaultHandlePromise)=>{\n    const cache = snapCache.get(target);\n    if ((cache == null ? void 0 : cache[0]) === version) {\n        return cache[1];\n    }\n    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));\n    (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(snap, true);\n    snapCache.set(target, [\n        version,\n        snap\n    ]);\n    Reflect.ownKeys(target).forEach((key)=>{\n        if (Object.getOwnPropertyDescriptor(snap, key)) {\n            return;\n        }\n        const value = Reflect.get(target, key);\n        const desc = {\n            value,\n            enumerable: true,\n            // This is intentional to avoid copying with proxy-compare.\n            // It's still non-writable, so it avoids assigning a value.\n            configurable: true\n        };\n        if (refSet.has(value)) {\n            (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.markToTrack)(value, false);\n        } else if (value instanceof Promise) {\n            delete desc.value;\n            desc.get = ()=>handlePromise(value);\n        } else if (proxyStateMap.has(value)) {\n            const [target2, ensureVersion] = proxyStateMap.get(value);\n            desc.value = createSnapshot(target2, ensureVersion(), handlePromise);\n        }\n        Object.defineProperty(snap, key, desc);\n    });\n    return Object.preventExtensions(snap);\n}, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [\n    1,\n    1\n], proxyFunction = (initialObject)=>{\n    if (!isObject(initialObject)) {\n        throw new Error(\"object required\");\n    }\n    const found = proxyCache.get(initialObject);\n    if (found) {\n        return found;\n    }\n    let version = versionHolder[0];\n    const listeners = /* @__PURE__ */ new Set();\n    const notifyUpdate = (op, nextVersion = ++versionHolder[0])=>{\n        if (version !== nextVersion) {\n            version = nextVersion;\n            listeners.forEach((listener)=>listener(op, nextVersion));\n        }\n    };\n    let checkVersion = versionHolder[1];\n    const ensureVersion = (nextCheckVersion = ++versionHolder[1])=>{\n        if (checkVersion !== nextCheckVersion && !listeners.size) {\n            checkVersion = nextCheckVersion;\n            propProxyStates.forEach(([propProxyState])=>{\n                const propVersion = propProxyState[1](nextCheckVersion);\n                if (propVersion > version) {\n                    version = propVersion;\n                }\n            });\n        }\n        return version;\n    };\n    const createPropListener = (prop)=>(op, nextVersion)=>{\n            const newOp = [\n                ...op\n            ];\n            newOp[1] = [\n                prop,\n                ...newOp[1]\n            ];\n            notifyUpdate(newOp, nextVersion);\n        };\n    const propProxyStates = /* @__PURE__ */ new Map();\n    const addPropListener = (prop, propProxyState)=>{\n        if (( false ? 0 : void 0) !== \"production\" && propProxyStates.has(prop)) {\n            throw new Error(\"prop listener already exists\");\n        }\n        if (listeners.size) {\n            const remove = propProxyState[3](createPropListener(prop));\n            propProxyStates.set(prop, [\n                propProxyState,\n                remove\n            ]);\n        } else {\n            propProxyStates.set(prop, [\n                propProxyState\n            ]);\n        }\n    };\n    const removePropListener = (prop)=>{\n        var _a;\n        const entry = propProxyStates.get(prop);\n        if (entry) {\n            propProxyStates.delete(prop);\n            (_a = entry[1]) == null ? void 0 : _a.call(entry);\n        }\n    };\n    const addListener = (listener)=>{\n        listeners.add(listener);\n        if (listeners.size === 1) {\n            propProxyStates.forEach(([propProxyState, prevRemove], prop)=>{\n                if (( false ? 0 : void 0) !== \"production\" && prevRemove) {\n                    throw new Error(\"remove already exists\");\n                }\n                const remove = propProxyState[3](createPropListener(prop));\n                propProxyStates.set(prop, [\n                    propProxyState,\n                    remove\n                ]);\n            });\n        }\n        const removeListener = ()=>{\n            listeners.delete(listener);\n            if (listeners.size === 0) {\n                propProxyStates.forEach(([propProxyState, remove], prop)=>{\n                    if (remove) {\n                        remove();\n                        propProxyStates.set(prop, [\n                            propProxyState\n                        ]);\n                    }\n                });\n            }\n        };\n        return removeListener;\n    };\n    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));\n    const handler = {\n        deleteProperty (target, prop) {\n            const prevValue = Reflect.get(target, prop);\n            removePropListener(prop);\n            const deleted = Reflect.deleteProperty(target, prop);\n            if (deleted) {\n                notifyUpdate([\n                    \"delete\",\n                    [\n                        prop\n                    ],\n                    prevValue\n                ]);\n            }\n            return deleted;\n        },\n        set (target, prop, value, receiver) {\n            const hasPrevValue = Reflect.has(target, prop);\n            const prevValue = Reflect.get(target, prop, receiver);\n            if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {\n                return true;\n            }\n            removePropListener(prop);\n            if (isObject(value)) {\n                value = (0,proxy_compare__WEBPACK_IMPORTED_MODULE_0__.getUntracked)(value) || value;\n            }\n            let nextValue = value;\n            if (value instanceof Promise) {\n                value.then((v)=>{\n                    value.status = \"fulfilled\";\n                    value.value = v;\n                    notifyUpdate([\n                        \"resolve\",\n                        [\n                            prop\n                        ],\n                        v\n                    ]);\n                }).catch((e)=>{\n                    value.status = \"rejected\";\n                    value.reason = e;\n                    notifyUpdate([\n                        \"reject\",\n                        [\n                            prop\n                        ],\n                        e\n                    ]);\n                });\n            } else {\n                if (!proxyStateMap.has(value) && canProxy(value)) {\n                    nextValue = proxyFunction(value);\n                }\n                const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);\n                if (childProxyState) {\n                    addPropListener(prop, childProxyState);\n                }\n            }\n            Reflect.set(target, prop, nextValue, receiver);\n            notifyUpdate([\n                \"set\",\n                [\n                    prop\n                ],\n                value,\n                prevValue\n            ]);\n            return true;\n        }\n    };\n    const proxyObject = newProxy(baseObject, handler);\n    proxyCache.set(initialObject, proxyObject);\n    const proxyState = [\n        baseObject,\n        ensureVersion,\n        createSnapshot,\n        addListener\n    ];\n    proxyStateMap.set(proxyObject, proxyState);\n    Reflect.ownKeys(initialObject).forEach((key)=>{\n        const desc = Object.getOwnPropertyDescriptor(initialObject, key);\n        if (\"value\" in desc) {\n            proxyObject[key] = initialObject[key];\n            delete desc.value;\n            delete desc.writable;\n        }\n        Object.defineProperty(baseObject, key, desc);\n    });\n    return proxyObject;\n})=>[\n        // public functions\n        proxyFunction,\n        // shared state\n        proxyStateMap,\n        refSet,\n        // internal things\n        objectIs,\n        newProxy,\n        canProxy,\n        defaultHandlePromise,\n        snapCache,\n        createSnapshot,\n        proxyCache,\n        versionHolder\n    ];\nconst [defaultProxyFunction] = buildProxyFunction();\nfunction proxy(initialObject = {}) {\n    return defaultProxyFunction(initialObject);\n}\nfunction getVersion(proxyObject) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    return proxyState == null ? void 0 : proxyState[1]();\n}\nfunction subscribe(proxyObject, callback, notifyInSync) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n        console.warn(\"Please use proxy object\");\n    }\n    let promise;\n    const ops = [];\n    const addListener = proxyState[3];\n    let isListenerActive = false;\n    const listener = (op)=>{\n        ops.push(op);\n        if (notifyInSync) {\n            callback(ops.splice(0));\n            return;\n        }\n        if (!promise) {\n            promise = Promise.resolve().then(()=>{\n                promise = void 0;\n                if (isListenerActive) {\n                    callback(ops.splice(0));\n                }\n            });\n        }\n    };\n    const removeListener = addListener(listener);\n    isListenerActive = true;\n    return ()=>{\n        isListenerActive = false;\n        removeListener();\n    };\n}\nfunction snapshot(proxyObject, handlePromise) {\n    const proxyState = proxyStateMap.get(proxyObject);\n    if (( false ? 0 : void 0) !== \"production\" && !proxyState) {\n        console.warn(\"Please use proxy object\");\n    }\n    const [target, ensureVersion, createSnapshot] = proxyState;\n    return createSnapshot(target, ensureVersion(), handlePromise);\n}\nfunction ref(obj) {\n    refSet.add(obj);\n    return obj;\n}\nconst unstable_buildProxyFunction = buildProxyFunction;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFsdGlvL2VzbS92YW5pbGxhLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBEO0FBRTFELE1BQU1FLFdBQVcsQ0FBQ0MsSUFBTSxPQUFPQSxNQUFNLFlBQVlBLE1BQU07QUFDdkQsTUFBTUMsZ0JBQWdCLGFBQWEsR0FBRyxJQUFJQztBQUMxQyxNQUFNQyxTQUFTLGFBQWEsR0FBRyxJQUFJQztBQUNuQyxNQUFNQyxxQkFBcUIsQ0FBQ0MsV0FBV0MsT0FBT0MsRUFBRSxFQUFFQyxXQUFXLENBQUNDLFFBQVFDLFVBQVksSUFBSUMsTUFBTUYsUUFBUUMsUUFBUSxFQUFFRSxXQUFXLENBQUNiLElBQU1ELFNBQVNDLE1BQU0sQ0FBQ0csT0FBT1csR0FBRyxDQUFDZCxNQUFPZSxDQUFBQSxNQUFNQyxPQUFPLENBQUNoQixNQUFNLENBQUVpQixDQUFBQSxPQUFPQyxRQUFRLElBQUlsQixDQUFBQSxDQUFDLEtBQU0sQ0FBRUEsQ0FBQUEsYUFBYUUsT0FBTSxLQUFNLENBQUVGLENBQUFBLGFBQWFJLE9BQU0sS0FBTSxDQUFFSixDQUFBQSxhQUFhbUIsS0FBSSxLQUFNLENBQUVuQixDQUFBQSxhQUFhb0IsTUFBSyxLQUFNLENBQUVwQixDQUFBQSxhQUFhcUIsSUFBRyxLQUFNLENBQUVyQixDQUFBQSxhQUFhc0IsTUFBSyxLQUFNLENBQUV0QixDQUFBQSxhQUFhdUIsTUFBSyxLQUFNLENBQUV2QixDQUFBQSxhQUFhd0IsV0FBVSxDQUFFLEVBQUVDLHVCQUF1QixDQUFDQztJQUMxYixPQUFRQSxRQUFRQyxNQUFNO1FBQ3BCLEtBQUs7WUFDSCxPQUFPRCxRQUFRRSxLQUFLO1FBQ3RCLEtBQUs7WUFDSCxNQUFNRixRQUFRRyxNQUFNO1FBQ3RCO1lBQ0UsTUFBTUg7SUFDVjtBQUNGLENBQUMsRUFBRUksWUFBWSxhQUFhLEdBQUcsSUFBSTVCLFNBQVMsRUFBRTZCLGlCQUFpQixDQUFDckIsUUFBUXNCLFNBQVNDLGdCQUFnQlIsb0JBQW9C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SThDLGNBQWM7WUFDaEJELFNBQVNJLElBQUlHLE1BQU0sQ0FBQztZQUNwQjtRQUNGO1FBQ0EsSUFBSSxDQUFDdkYsU0FBUztZQUNaQSxVQUFVc0IsUUFBUWtFLE9BQU8sR0FBR3BCLElBQUksQ0FBQztnQkFDL0JwRSxVQUFVLEtBQUs7Z0JBQ2YsSUFBSXFGLGtCQUFrQjtvQkFDcEJMLFNBQVNJLElBQUlHLE1BQU0sQ0FBQztnQkFDdEI7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxNQUFNM0IsaUJBQWlCSCxZQUFZcEI7SUFDbkNnRCxtQkFBbUI7SUFDbkIsT0FBTztRQUNMQSxtQkFBbUI7UUFDbkJ6QjtJQUNGO0FBQ0Y7QUFDQSxTQUFTNkIsU0FBU2hCLFdBQVcsRUFBRWxFLGFBQWE7SUFDMUMsTUFBTW1FLGFBQWFuRyxjQUFja0MsR0FBRyxDQUFDZ0U7SUFDckMsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxnQkFBZ0IsQ0FBQ0MsWUFBWTtRQUNyRlEsUUFBUUMsSUFBSSxDQUFDO0lBQ2Y7SUFDQSxNQUFNLENBQUNuRyxRQUFRd0MsZUFBZW5CLGVBQWUsR0FBR3FFO0lBQ2hELE9BQU9yRSxlQUFlckIsUUFBUXdDLGlCQUFpQmpCO0FBQ2pEO0FBQ0EsU0FBU21GLElBQUlDLEdBQUc7SUFDZGxILE9BQU9pRixHQUFHLENBQUNpQztJQUNYLE9BQU9BO0FBQ1Q7QUFDQSxNQUFNQyw4QkFBOEJqSDtBQUVnRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy92YWx0aW8vZXNtL3ZhbmlsbGEubWpzP2MxOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFya1RvVHJhY2ssIGdldFVudHJhY2tlZCB9IGZyb20gJ3Byb3h5LWNvbXBhcmUnO1xuXG5jb25zdCBpc09iamVjdCA9ICh4KSA9PiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiB4ICE9PSBudWxsO1xuY29uc3QgcHJveHlTdGF0ZU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVmU2V0ID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrU2V0KCk7XG5jb25zdCBidWlsZFByb3h5RnVuY3Rpb24gPSAob2JqZWN0SXMgPSBPYmplY3QuaXMsIG5ld1Byb3h5ID0gKHRhcmdldCwgaGFuZGxlcikgPT4gbmV3IFByb3h5KHRhcmdldCwgaGFuZGxlciksIGNhblByb3h5ID0gKHgpID0+IGlzT2JqZWN0KHgpICYmICFyZWZTZXQuaGFzKHgpICYmIChBcnJheS5pc0FycmF5KHgpIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIHgpKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrTWFwKSAmJiAhKHggaW5zdGFuY2VvZiBXZWFrU2V0KSAmJiAhKHggaW5zdGFuY2VvZiBFcnJvcikgJiYgISh4IGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhKHggaW5zdGFuY2VvZiBEYXRlKSAmJiAhKHggaW5zdGFuY2VvZiBTdHJpbmcpICYmICEoeCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgISh4IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpLCBkZWZhdWx0SGFuZGxlUHJvbWlzZSA9IChwcm9taXNlKSA9PiB7XG4gIHN3aXRjaCAocHJvbWlzZS5zdGF0dXMpIHtcbiAgICBjYXNlIFwiZnVsZmlsbGVkXCI6XG4gICAgICByZXR1cm4gcHJvbWlzZS52YWx1ZTtcbiAgICBjYXNlIFwicmVqZWN0ZWRcIjpcbiAgICAgIHRocm93IHByb21pc2UucmVhc29uO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBwcm9taXNlO1xuICB9XG59LCBzbmFwQ2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgY3JlYXRlU25hcHNob3QgPSAodGFyZ2V0LCB2ZXJzaW9uLCBoYW5kbGVQcm9taXNlID0gZGVmYXVsdEhhbmRsZVByb21pc2UpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBzbmFwQ2FjaGUuZ2V0KHRhcmdldCk7XG4gIGlmICgoY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlWzBdKSA9PT0gdmVyc2lvbikge1xuICAgIHJldHVybiBjYWNoZVsxXTtcbiAgfVxuICBjb25zdCBzbmFwID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKTtcbiAgbWFya1RvVHJhY2soc25hcCwgdHJ1ZSk7XG4gIHNuYXBDYWNoZS5zZXQodGFyZ2V0LCBbdmVyc2lvbiwgc25hcF0pO1xuICBSZWZsZWN0Lm93bktleXModGFyZ2V0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzbmFwLCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBrZXkpO1xuICAgIGNvbnN0IGRlc2MgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsIHRvIGF2b2lkIGNvcHlpbmcgd2l0aCBwcm94eS1jb21wYXJlLlxuICAgICAgLy8gSXQncyBzdGlsbCBub24td3JpdGFibGUsIHNvIGl0IGF2b2lkcyBhc3NpZ25pbmcgYSB2YWx1ZS5cbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH07XG4gICAgaWYgKHJlZlNldC5oYXModmFsdWUpKSB7XG4gICAgICBtYXJrVG9UcmFjayh2YWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgICAgIGRlc2MuZ2V0ID0gKCkgPT4gaGFuZGxlUHJvbWlzZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChwcm94eVN0YXRlTWFwLmhhcyh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IFt0YXJnZXQyLCBlbnN1cmVWZXJzaW9uXSA9IHByb3h5U3RhdGVNYXAuZ2V0KFxuICAgICAgICB2YWx1ZVxuICAgICAgKTtcbiAgICAgIGRlc2MudmFsdWUgPSBjcmVhdGVTbmFwc2hvdChcbiAgICAgICAgdGFyZ2V0MixcbiAgICAgICAgZW5zdXJlVmVyc2lvbigpLFxuICAgICAgICBoYW5kbGVQcm9taXNlXG4gICAgICApO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc25hcCwga2V5LCBkZXNjKTtcbiAgfSk7XG4gIHJldHVybiBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoc25hcCk7XG59LCBwcm94eUNhY2hlID0gLyogQF9fUFVSRV9fICovIG5ldyBXZWFrTWFwKCksIHZlcnNpb25Ib2xkZXIgPSBbMSwgMV0sIHByb3h5RnVuY3Rpb24gPSAoaW5pdGlhbE9iamVjdCkgPT4ge1xuICBpZiAoIWlzT2JqZWN0KGluaXRpYWxPYmplY3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwib2JqZWN0IHJlcXVpcmVkXCIpO1xuICB9XG4gIGNvbnN0IGZvdW5kID0gcHJveHlDYWNoZS5nZXQoaW5pdGlhbE9iamVjdCk7XG4gIGlmIChmb3VuZCkge1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICBsZXQgdmVyc2lvbiA9IHZlcnNpb25Ib2xkZXJbMF07XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IG5vdGlmeVVwZGF0ZSA9IChvcCwgbmV4dFZlcnNpb24gPSArK3ZlcnNpb25Ib2xkZXJbMF0pID0+IHtcbiAgICBpZiAodmVyc2lvbiAhPT0gbmV4dFZlcnNpb24pIHtcbiAgICAgIHZlcnNpb24gPSBuZXh0VmVyc2lvbjtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIob3AsIG5leHRWZXJzaW9uKSk7XG4gICAgfVxuICB9O1xuICBsZXQgY2hlY2tWZXJzaW9uID0gdmVyc2lvbkhvbGRlclsxXTtcbiAgY29uc3QgZW5zdXJlVmVyc2lvbiA9IChuZXh0Q2hlY2tWZXJzaW9uID0gKyt2ZXJzaW9uSG9sZGVyWzFdKSA9PiB7XG4gICAgaWYgKGNoZWNrVmVyc2lvbiAhPT0gbmV4dENoZWNrVmVyc2lvbiAmJiAhbGlzdGVuZXJzLnNpemUpIHtcbiAgICAgIGNoZWNrVmVyc2lvbiA9IG5leHRDaGVja1ZlcnNpb247XG4gICAgICBwcm9wUHJveHlTdGF0ZXMuZm9yRWFjaCgoW3Byb3BQcm94eVN0YXRlXSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wVmVyc2lvbiA9IHByb3BQcm94eVN0YXRlWzFdKG5leHRDaGVja1ZlcnNpb24pO1xuICAgICAgICBpZiAocHJvcFZlcnNpb24gPiB2ZXJzaW9uKSB7XG4gICAgICAgICAgdmVyc2lvbiA9IHByb3BWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH07XG4gIGNvbnN0IGNyZWF0ZVByb3BMaXN0ZW5lciA9IChwcm9wKSA9PiAob3AsIG5leHRWZXJzaW9uKSA9PiB7XG4gICAgY29uc3QgbmV3T3AgPSBbLi4ub3BdO1xuICAgIG5ld09wWzFdID0gW3Byb3AsIC4uLm5ld09wWzFdXTtcbiAgICBub3RpZnlVcGRhdGUobmV3T3AsIG5leHRWZXJzaW9uKTtcbiAgfTtcbiAgY29uc3QgcHJvcFByb3h5U3RhdGVzID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3QgYWRkUHJvcExpc3RlbmVyID0gKHByb3AsIHByb3BQcm94eVN0YXRlKSA9PiB7XG4gICAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmIHByb3BQcm94eVN0YXRlcy5oYXMocHJvcCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInByb3AgbGlzdGVuZXIgYWxyZWFkeSBleGlzdHNcIik7XG4gICAgfVxuICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSkge1xuICAgICAgY29uc3QgcmVtb3ZlID0gcHJvcFByb3h5U3RhdGVbM10oY3JlYXRlUHJvcExpc3RlbmVyKHByb3ApKTtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFByb3h5U3RhdGVzLnNldChwcm9wLCBbcHJvcFByb3h5U3RhdGVdKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlbW92ZVByb3BMaXN0ZW5lciA9IChwcm9wKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGVudHJ5ID0gcHJvcFByb3h5U3RhdGVzLmdldChwcm9wKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5kZWxldGUocHJvcCk7XG4gICAgICAoX2EgPSBlbnRyeVsxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwoZW50cnkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcbiAgICBpZiAobGlzdGVuZXJzLnNpemUgPT09IDEpIHtcbiAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHByZXZSZW1vdmVdLCBwcm9wKSA9PiB7XG4gICAgICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIiAmJiBwcmV2UmVtb3ZlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVtb3ZlIGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHByb3BQcm94eVN0YXRlWzNdKGNyZWF0ZVByb3BMaXN0ZW5lcihwcm9wKSk7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlLCByZW1vdmVdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICAgICAgaWYgKGxpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgIHByb3BQcm94eVN0YXRlcy5mb3JFYWNoKChbcHJvcFByb3h5U3RhdGUsIHJlbW92ZV0sIHByb3ApID0+IHtcbiAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgIHByb3BQcm94eVN0YXRlcy5zZXQocHJvcCwgW3Byb3BQcm94eVN0YXRlXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgfTtcbiAgY29uc3QgYmFzZU9iamVjdCA9IEFycmF5LmlzQXJyYXkoaW5pdGlhbE9iamVjdCkgPyBbXSA6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluaXRpYWxPYmplY3QpKTtcbiAgY29uc3QgaGFuZGxlciA9IHtcbiAgICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCk7XG4gICAgICByZW1vdmVQcm9wTGlzdGVuZXIocHJvcCk7XG4gICAgICBjb25zdCBkZWxldGVkID0gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgbm90aWZ5VXBkYXRlKFtcImRlbGV0ZVwiLCBbcHJvcF0sIHByZXZWYWx1ZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlbGV0ZWQ7XG4gICAgfSxcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIGNvbnN0IGhhc1ByZXZWYWx1ZSA9IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgICBjb25zdCBwcmV2VmFsdWUgPSBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgIGlmIChoYXNQcmV2VmFsdWUgJiYgKG9iamVjdElzKHByZXZWYWx1ZSwgdmFsdWUpIHx8IHByb3h5Q2FjaGUuaGFzKHZhbHVlKSAmJiBvYmplY3RJcyhwcmV2VmFsdWUsIHByb3h5Q2FjaGUuZ2V0KHZhbHVlKSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmVtb3ZlUHJvcExpc3RlbmVyKHByb3ApO1xuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IGdldFVudHJhY2tlZCh2YWx1ZSkgfHwgdmFsdWU7XG4gICAgICB9XG4gICAgICBsZXQgbmV4dFZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHZhbHVlLnRoZW4oKHYpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcImZ1bGZpbGxlZFwiO1xuICAgICAgICAgIHZhbHVlLnZhbHVlID0gdjtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVzb2x2ZVwiLCBbcHJvcF0sIHZdKTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICB2YWx1ZS5zdGF0dXMgPSBcInJlamVjdGVkXCI7XG4gICAgICAgICAgdmFsdWUucmVhc29uID0gZTtcbiAgICAgICAgICBub3RpZnlVcGRhdGUoW1wicmVqZWN0XCIsIFtwcm9wXSwgZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghcHJveHlTdGF0ZU1hcC5oYXModmFsdWUpICYmIGNhblByb3h5KHZhbHVlKSkge1xuICAgICAgICAgIG5leHRWYWx1ZSA9IHByb3h5RnVuY3Rpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkUHJveHlTdGF0ZSA9ICFyZWZTZXQuaGFzKG5leHRWYWx1ZSkgJiYgcHJveHlTdGF0ZU1hcC5nZXQobmV4dFZhbHVlKTtcbiAgICAgICAgaWYgKGNoaWxkUHJveHlTdGF0ZSkge1xuICAgICAgICAgIGFkZFByb3BMaXN0ZW5lcihwcm9wLCBjaGlsZFByb3h5U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3AsIG5leHRWYWx1ZSwgcmVjZWl2ZXIpO1xuICAgICAgbm90aWZ5VXBkYXRlKFtcInNldFwiLCBbcHJvcF0sIHZhbHVlLCBwcmV2VmFsdWVdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJveHlPYmplY3QgPSBuZXdQcm94eShiYXNlT2JqZWN0LCBoYW5kbGVyKTtcbiAgcHJveHlDYWNoZS5zZXQoaW5pdGlhbE9iamVjdCwgcHJveHlPYmplY3QpO1xuICBjb25zdCBwcm94eVN0YXRlID0gW1xuICAgIGJhc2VPYmplY3QsXG4gICAgZW5zdXJlVmVyc2lvbixcbiAgICBjcmVhdGVTbmFwc2hvdCxcbiAgICBhZGRMaXN0ZW5lclxuICBdO1xuICBwcm94eVN0YXRlTWFwLnNldChwcm94eU9iamVjdCwgcHJveHlTdGF0ZSk7XG4gIFJlZmxlY3Qub3duS2V5cyhpbml0aWFsT2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgIGluaXRpYWxPYmplY3QsXG4gICAgICBrZXlcbiAgICApO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzYykge1xuICAgICAgcHJveHlPYmplY3Rba2V5XSA9IGluaXRpYWxPYmplY3Rba2V5XTtcbiAgICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgICAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShiYXNlT2JqZWN0LCBrZXksIGRlc2MpO1xuICB9KTtcbiAgcmV0dXJuIHByb3h5T2JqZWN0O1xufSkgPT4gW1xuICAvLyBwdWJsaWMgZnVuY3Rpb25zXG4gIHByb3h5RnVuY3Rpb24sXG4gIC8vIHNoYXJlZCBzdGF0ZVxuICBwcm94eVN0YXRlTWFwLFxuICByZWZTZXQsXG4gIC8vIGludGVybmFsIHRoaW5nc1xuICBvYmplY3RJcyxcbiAgbmV3UHJveHksXG4gIGNhblByb3h5LFxuICBkZWZhdWx0SGFuZGxlUHJvbWlzZSxcbiAgc25hcENhY2hlLFxuICBjcmVhdGVTbmFwc2hvdCxcbiAgcHJveHlDYWNoZSxcbiAgdmVyc2lvbkhvbGRlclxuXTtcbmNvbnN0IFtkZWZhdWx0UHJveHlGdW5jdGlvbl0gPSBidWlsZFByb3h5RnVuY3Rpb24oKTtcbmZ1bmN0aW9uIHByb3h5KGluaXRpYWxPYmplY3QgPSB7fSkge1xuICByZXR1cm4gZGVmYXVsdFByb3h5RnVuY3Rpb24oaW5pdGlhbE9iamVjdCk7XG59XG5mdW5jdGlvbiBnZXRWZXJzaW9uKHByb3h5T2JqZWN0KSB7XG4gIGNvbnN0IHByb3h5U3RhdGUgPSBwcm94eVN0YXRlTWFwLmdldChwcm94eU9iamVjdCk7XG4gIHJldHVybiBwcm94eVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBwcm94eVN0YXRlWzFdKCk7XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUocHJveHlPYmplY3QsIGNhbGxiYWNrLCBub3RpZnlJblN5bmMpIHtcbiAgY29uc3QgcHJveHlTdGF0ZSA9IHByb3h5U3RhdGVNYXAuZ2V0KHByb3h5T2JqZWN0KTtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiICYmICFwcm94eVN0YXRlKSB7XG4gICAgY29uc29sZS53YXJuKFwiUGxlYXNlIHVzZSBwcm94eSBvYmplY3RcIik7XG4gIH1cbiAgbGV0IHByb21pc2U7XG4gIGNvbnN0IG9wcyA9IFtdO1xuICBjb25zdCBhZGRMaXN0ZW5lciA9IHByb3h5U3RhdGVbM107XG4gIGxldCBpc0xpc3RlbmVyQWN0aXZlID0gZmFsc2U7XG4gIGNvbnN0IGxpc3RlbmVyID0gKG9wKSA9PiB7XG4gICAgb3BzLnB1c2gob3ApO1xuICAgIGlmIChub3RpZnlJblN5bmMpIHtcbiAgICAgIGNhbGxiYWNrKG9wcy5zcGxpY2UoMCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGlzTGlzdGVuZXJBY3RpdmUpIHtcbiAgICAgICAgICBjYWxsYmFjayhvcHMuc3BsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgaXNMaXN0ZW5lckFjdGl2ZSA9IHRydWU7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaXNMaXN0ZW5lckFjdGl2ZSA9IGZhbHNlO1xuICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gIH07XG59XG5mdW5jdGlvbiBzbmFwc2hvdChwcm94eU9iamVjdCwgaGFuZGxlUHJvbWlzZSkge1xuICBjb25zdCBwcm94eVN0YXRlID0gcHJveHlTdGF0ZU1hcC5nZXQocHJveHlPYmplY3QpO1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIXByb3h5U3RhdGUpIHtcbiAgICBjb25zb2xlLndhcm4oXCJQbGVhc2UgdXNlIHByb3h5IG9iamVjdFwiKTtcbiAgfVxuICBjb25zdCBbdGFyZ2V0LCBlbnN1cmVWZXJzaW9uLCBjcmVhdGVTbmFwc2hvdF0gPSBwcm94eVN0YXRlO1xuICByZXR1cm4gY3JlYXRlU25hcHNob3QodGFyZ2V0LCBlbnN1cmVWZXJzaW9uKCksIGhhbmRsZVByb21pc2UpO1xufVxuZnVuY3Rpb24gcmVmKG9iaikge1xuICByZWZTZXQuYWRkKG9iaik7XG4gIHJldHVybiBvYmo7XG59XG5jb25zdCB1bnN0YWJsZV9idWlsZFByb3h5RnVuY3Rpb24gPSBidWlsZFByb3h5RnVuY3Rpb247XG5cbmV4cG9ydCB7IGdldFZlcnNpb24sIHByb3h5LCByZWYsIHNuYXBzaG90LCBzdWJzY3JpYmUsIHVuc3RhYmxlX2J1aWxkUHJveHlGdW5jdGlvbiB9O1xuIl0sIm5hbWVzIjpbIm1hcmtUb1RyYWNrIiwiZ2V0VW50cmFja2VkIiwiaXNPYmplY3QiLCJ4IiwicHJveHlTdGF0ZU1hcCIsIldlYWtNYXAiLCJyZWZTZXQiLCJXZWFrU2V0IiwiYnVpbGRQcm94eUZ1bmN0aW9uIiwib2JqZWN0SXMiLCJPYmplY3QiLCJpcyIsIm5ld1Byb3h5IiwidGFyZ2V0IiwiaGFuZGxlciIsIlByb3h5IiwiY2FuUHJveHkiLCJoYXMiLCJBcnJheSIsImlzQXJyYXkiLCJTeW1ib2wiLCJpdGVyYXRvciIsIkVycm9yIiwiTnVtYmVyIiwiRGF0ZSIsIlN0cmluZyIsIlJlZ0V4cCIsIkFycmF5QnVmZmVyIiwiZGVmYXVsdEhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwic3RhdHVzIiwidmFsdWUiLCJyZWFzb24iLCJzbmFwQ2FjaGUiLCJjcmVhdGVTbmFwc2hvdCIsInZlcnNpb24iLCJoYW5kbGVQcm9taXNlIiwiY2FjaGUiLCJnZXQiLCJzbmFwIiwiY3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXQiLCJSZWZsZWN0Iiwib3duS2V5cyIsImZvckVhY2giLCJrZXkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkZXNjIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIlByb21pc2UiLCJ0YXJnZXQyIiwiZW5zdXJlVmVyc2lvbiIsImRlZmluZVByb3BlcnR5IiwicHJldmVudEV4dGVuc2lvbnMiLCJwcm94eUNhY2hlIiwidmVyc2lvbkhvbGRlciIsInByb3h5RnVuY3Rpb24iLCJpbml0aWFsT2JqZWN0IiwiZm91bmQiLCJsaXN0ZW5lcnMiLCJTZXQiLCJub3RpZnlVcGRhdGUiLCJvcCIsIm5leHRWZXJzaW9uIiwibGlzdGVuZXIiLCJjaGVja1ZlcnNpb24iLCJuZXh0Q2hlY2tWZXJzaW9uIiwic2l6ZSIsInByb3BQcm94eVN0YXRlcyIsInByb3BQcm94eVN0YXRlIiwicHJvcFZlcnNpb24iLCJjcmVhdGVQcm9wTGlzdGVuZXIiLCJwcm9wIiwibmV3T3AiLCJNYXAiLCJhZGRQcm9wTGlzdGVuZXIiLCJlbnYiLCJNT0RFIiwicmVtb3ZlIiwicmVtb3ZlUHJvcExpc3RlbmVyIiwiX2EiLCJlbnRyeSIsImRlbGV0ZSIsImNhbGwiLCJhZGRMaXN0ZW5lciIsImFkZCIsInByZXZSZW1vdmUiLCJyZW1vdmVMaXN0ZW5lciIsImJhc2VPYmplY3QiLCJkZWxldGVQcm9wZXJ0eSIsInByZXZWYWx1ZSIsImRlbGV0ZWQiLCJyZWNlaXZlciIsImhhc1ByZXZWYWx1ZSIsIm5leHRWYWx1ZSIsInRoZW4iLCJ2IiwiY2F0Y2giLCJlIiwiY2hpbGRQcm94eVN0YXRlIiwicHJveHlPYmplY3QiLCJwcm94eVN0YXRlIiwid3JpdGFibGUiLCJkZWZhdWx0UHJveHlGdW5jdGlvbiIsInByb3h5IiwiZ2V0VmVyc2lvbiIsInN1YnNjcmliZSIsImNhbGxiYWNrIiwibm90aWZ5SW5TeW5jIiwiY29uc29sZSIsIndhcm4iLCJvcHMiLCJpc0xpc3RlbmVyQWN0aXZlIiwicHVzaCIsInNwbGljZSIsInJlc29sdmUiLCJzbmFwc2hvdCIsInJlZiIsIm9iaiIsInVuc3RhYmxlX2J1aWxkUHJveHlGdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/valtio/esm/vanilla.mjs\n");

/***/ })

};
;