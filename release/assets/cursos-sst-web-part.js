define("b9c7a6f2-6c70-4aef-9c32-fb5a9c1a0d2f_0.0.1", ["@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"cursos-sst-web-part": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				if (script.src.indexOf(window.location.origin + '/') !== 0) {
/******/ 					script.crossOrigin = "anonymous";
/******/ 				}
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpb9c7a6f2_6c70_4aef_9c32_fb5a9c1a0d2f_0_0_1"] = window["webpackJsonpb9c7a6f2_6c70_4aef_9c32_fb5a9c1a0d2f_0_0_1"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = /cursos\-sst\-web\-part\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "m/qK");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+MB3":
/*!*************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FondoPantalla/FondoPantalla.module.css ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./FondoPantalla.module.css */ "RlRT");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "/sQB":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/invokable.js ***!
  \**************************************************/
/*! exports provided: invokable */
/*! exports used: invokable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return invokable; });
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations.js */ "h6Ct");

/**
 * Allows a decorated object to be invoked as a function, optionally providing an implementation for that action
 *
 * @param invokeableAction Optional. The logic to execute upon invoking the object as a function.
 * @returns Decorator which applies the invokable logic to the tagged class
 */
function invokable(invokeableAction) {
    if (typeof invokeableAction !== "function") {
        invokeableAction = function (init) {
            return Object(_operations_js__WEBPACK_IMPORTED_MODULE_0__[/* op */ "n"])(this, _operations_js__WEBPACK_IMPORTED_MODULE_0__[/* get */ "t"], init);
        };
    }
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                const invokableInstance = Object.assign(function (init) {
                    // the "this" for our invoked object will be set by extendable OR we use invokableInstance directly
                    const localThis = typeof this === "undefined" ? invokableInstance : this;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    return Reflect.apply(invokeableAction, localThis, [init]);
                }, Reflect.construct(clz, args, newTarget));
                Reflect.setPrototypeOf(invokableInstance, newTarget.prototype);
                return invokableInstance;
            },
        });
    };
}
//# sourceMappingURL=invokable.js.map

/***/ }),

/***/ "0qgB":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/queryable/request-builders.js ***!
  \*********************************************************/
/*! exports provided: body, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export body */
/* unused harmony export headers */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function body(o, previous) {
    return Object.assign({ body: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* jsS */ "_"])(o) }, previous);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map

/***/ }),

/***/ "1jw+":
/*!*********************************************************!*\
  !*** ./lib/webparts/cursosSst/CursosSst.module.scss.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./CursosSst.module.css */ "z2nl");
var styles = {
    contenedorWebpart: 'contenedorWebpart_241bee7a',
    contenedorBurbujas: 'contenedorBurbujas_241bee7a',
    contenidoPrincipal: 'contenidoPrincipal_241bee7a',
    themeToggleContainer: 'themeToggleContainer_241bee7a',
    logoContainer: 'logoContainer_241bee7a',
    overlayGeneral: 'overlayGeneral_241bee7a'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "359w":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable-factory.js ***!
  \**********************************************************/
/*! exports provided: queryableFactory */
/*! exports used: queryableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return queryableFactory; });
function queryableFactory(constructor) {
    return (init, path) => {
        // provides a point where we can potentially intercept any queryable being created
        return new constructor(init, path);
    };
}
//# sourceMappingURL=queryable-factory.js.map

/***/ }),

/***/ "4kGv":
/*!********************************************!*\
  !*** ./node_modules/@pnp/core/timeline.js ***!
  \********************************************/
/*! exports provided: Timeline, cloneObserverCollection */
/*! exports used: Timeline, cloneObserverCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return cloneObserverCollection; });
/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");


/**
 * Timeline represents a set of operations executed in order of definition,
 * with each moment's behavior controlled by the implementing function
 */
class Timeline {
    /**
     * Creates a new instance of Timeline with the supplied moments and optionally any observers to include
     *
     * @param moments The moment object defining this timeline
     * @param observers Any observers to include (optional)
     */
    constructor(moments, observers = {}) {
        this.moments = moments;
        this.observers = observers;
        this._onProxy = null;
        this._emitProxy = null;
        this._inheritingObservers = true;
    }
    /**
     * Apply the supplied behavior(s) to this timeline
     *
     * @param behaviors One or more behaviors
     * @returns `this` Timeline
     */
    using(...behaviors) {
        for (let i = 0; i < behaviors.length; i++) {
            behaviors[i](this);
        }
        return this;
    }
    /**
     * Property allowing access to manage observers on moments within this timeline
     */
    get on() {
        if (this._onProxy === null) {
            this._onProxy = new Proxy(this, {
                get: (target, p) => Object.assign((handler) => {
                    target.cloneObserversOnChange();
                    addObserver(target.observers, p, handler, "add");
                    return target;
                }, {
                    toArray: () => {
                        return Reflect.has(target.observers, p) ? [...Reflect.get(target.observers, p)] : [];
                    },
                    replace: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "replace");
                        return target;
                    },
                    prepend: (handler) => {
                        target.cloneObserversOnChange();
                        addObserver(target.observers, p, handler, "prepend");
                        return target;
                    },
                    clear: () => {
                        if (Reflect.has(target.observers, p)) {
                            target.cloneObserversOnChange();
                            // we trust ourselves that this will be an array
                            target.observers[p].length = 0;
                            return true;
                        }
                        return false;
                    },
                }),
            });
        }
        return this._onProxy;
    }
    /**
     * Shorthand method to emit a logging event tied to this timeline
     *
     * @param message The message to log
     * @param level The level at which the message applies
     */
    log(message, level = 0) {
        this.emit.log(message, level);
    }
    /**
     * Shorthand method to emit an error event tied to this timeline
     *
     * @param e Optional. Any error object to emit. If none is provided no emit occurs
     */
    error(e) {
        if (Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* objectDefinedNotNull */ "l"])(e)) {
            this.emit.error(e);
        }
    }
    /**
     * Property allowing access to invoke a moment from within this timeline
     */
    get emit() {
        if (this._emitProxy === null) {
            this._emitProxy = new Proxy(this, {
                get: (target, p) => (...args) => {
                    // handle the case where no observers registered for the target moment
                    const observers = Reflect.has(target.observers, p) ? Reflect.get(target.observers, p) : [];
                    if ((!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "o"])(observers) || observers.length < 1) && p === "error") {
                        // if we are emitting an error, and no error observers are defined, we throw
                        throw Error(`Unhandled Exception: ${args[0]}`);
                    }
                    try {
                        // default to broadcasting any events without specific impl (will apply to log and error)
                        const moment = Reflect.has(target.moments, p) ? Reflect.get(target.moments, p) : p === "init" || p === "dispose" ? Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__[/* lifecycle */ "n"])() : Object(_moments_js__WEBPACK_IMPORTED_MODULE_0__[/* broadcast */ "t"])();
                        // pass control to the individual moment's implementation
                        return Reflect.apply(moment, target, [observers, ...args]);
                    }
                    catch (e) {
                        if (p !== "error") {
                            this.error(e);
                        }
                        else {
                            // if all else fails, re-throw as we are getting errors from error observers meaning something is sideways
                            throw e;
                        }
                    }
                },
            });
        }
        return this._emitProxy;
    }
    /**
     * Starts a timeline
     *
     * @description This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init
     *
     * @param init A value passed into the execute logic from the initiator of the timeline
     * @returns The result of this.execute
     */
    async start(init) {
        try {
            // initialize our timeline
            this.emit.init();
            // execute the timeline
            // (this await is required to ensure dispose is called AFTER execute completes)
            // we do not catch here so that any promise rejects in execute bubble up to the caller
            return await this.execute(init);
        }
        finally {
            try {
                // provide an opportunity for cleanup of the timeline
                this.emit.dispose();
            }
            catch (e) {
                // shouldn't happen, but possible dispose throws - which may be missed as the usercode await will have resolved.
                const e2 = Object.assign(Error("Error in dispose."), {
                    innerException: e,
                });
                this.error(e2);
            }
        }
    }
    /**
     * By default a timeline references the same observer collection as a parent timeline,
     * if any changes are made to the observers this method first clones them ensuring we
     * maintain a local copy and de-ref the parent
     */
    cloneObserversOnChange() {
        if (this._inheritingObservers) {
            this._inheritingObservers = false;
            this.observers = cloneObserverCollection(this.observers);
        }
    }
}
/**
 * Adds an observer to a given target
 *
 * @param target The object to which events are registered
 * @param moment The name of the moment to which the observer is registered
 * @param addBehavior Determines how the observer is added to the collection
 *
 */
function addObserver(target, moment, observer, addBehavior) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[/* isFunc */ "s"])(observer)) {
        throw Error("Observers must be functions.");
    }
    if (!Reflect.has(target, moment)) {
        // if we don't have a registration for this moment, then we just add a new prop
        target[moment] = [observer];
    }
    else {
        // if we have an existing property then we follow the specified behavior
        switch (addBehavior) {
            case "add":
                target[moment].push(observer);
                break;
            case "prepend":
                target[moment].unshift(observer);
                break;
            case "replace":
                target[moment].length = 0;
                target[moment].push(observer);
                break;
        }
    }
    return target[moment];
}
function cloneObserverCollection(source) {
    return Reflect.ownKeys(source).reduce((clone, key) => {
        clone[key] = [...source[key]];
        return clone;
    }, {});
}
//# sourceMappingURL=timeline.js.map

/***/ }),

/***/ "52ny":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createLucideIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils.js */ "u7bg");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.js */ "ztdf");
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
    ({ className, ...props }, ref) => Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Icon_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"], {
      ref,
      iconNode,
      className: Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* mergeClasses */ "t"])(
        `lucide-${Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* toKebabCase */ "n"])(Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* toPascalCase */ "a"])(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__[/* toPascalCase */ "a"])(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ "6UNF":
/*!***********************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Loader/Loader.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Loader.module.css */ "w1Uh");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "72az":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bubble3d_1ef0e48c{animation-direction:alternate;animation-iteration-count:infinite;animation-name:floatVertical_1ef0e48c;animation-timing-function:ease-in-out;background:radial-gradient(circle at 30% 30%,hsla(0,0%,100%,.4),var(--bubble-color) 70%,rgba(0,0,0,.1));border-radius:50%;box-shadow:inset 0 8px 12px hsla(0,0%,100%,.6),0 0 15px var(--bubble-color),0 4px 10px rgba(0,0,0,.1);cursor:default;height:var(--size);opacity:.9;position:absolute;width:var(--size);will-change:transform}@keyframes floatVertical_1ef0e48c{0%{transform:translateY(0)}to{transform:translateY(-20px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8HKx":
/*!********************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/blanco.png ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blanco_6d9f32b10870ebbe4ff59673caf2ed80.png";

/***/ }),

/***/ "DZog":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/moments.js ***!
  \*******************************************/
/*! exports provided: broadcast, asyncReduce, request, lifecycle */
/*! exports used: asyncReduce, broadcast, lifecycle, request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return broadcast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return asyncReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return lifecycle; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

/**
 * Emits to all registered observers the supplied arguments. Any values returned by the observers are ignored
 *
 * @returns void
 */
function broadcast() {
    return function (observers, ...args) {
        const obs = [...observers];
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, args);
        }
    };
}
/**
 * Defines a moment that executes each observer asynchronously, awaiting the result and passes the returned arguments as the arguments to the next observer.
 * This is very much like the redux pattern taking the arguments as the state which each observer may modify then returning a new state
 *
 * @returns The final set of arguments
 */
function asyncReduce() {
    return async function (observers, ...args) {
        // get our initial values
        let r = args;
        const obs = [...observers];
        // process each handler which updates our "state" in order
        // returning the new "state" as a tuple [...Parameters<T>]
        // this is conceptually the redux pattern, each function gets a copy of the
        // previous state, may optionally modify it, and return a new state
        for (let i = 0; i < obs.length; i++) {
            r = await Reflect.apply(obs[i], this, r);
        }
        return r;
    };
}
/**
 * Defines a moment where the first registered observer is used to asynchronously execute a request, returning a single result
 * If no result is returned (undefined) no further action is taken and the result will be undefined (i.e. additional observers are not used)
 *
 * @returns The result returned by the first registered observer
 */
function request() {
    return async function (observers, ...args) {
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "o"])(observers) || observers.length < 1) {
            return undefined;
        }
        const handler = observers[0];
        const result = await Reflect.apply(handler, this, args);
        return result;
    };
}
/**
 * Defines a special moment used to configure the timeline itself before starting. Each observer is executed in order,
 * possibly modifying the "this" instance, with the final product returned
 *
 */
function lifecycle() {
    return function (observers) {
        const obs = [...observers];
        // process each handler which updates our instance in order
        // very similar to asyncReduce but the state is the object itself
        for (let i = 0; i < obs.length; i++) {
            Reflect.apply(obs[i], this, []);
        }
        return this;
    };
}
//# sourceMappingURL=moments.js.map

/***/ }),

/***/ "F4qD":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/spqueryable.js ***!
  \*********************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag */
/*! exports used: SPQueryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spInvokableFactory */
/* unused harmony export _SPQueryable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SPQueryable; });
/* unused harmony export _SPCollection */
/* unused harmony export SPCollection */
/* unused harmony export _SPInstance */
/* unused harmony export SPInstance */
/* unused harmony export deleteable */
/* unused harmony export deleteableWithETag */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");



const spInvokableFactory = (f) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* queryableFactory */ "u"])(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SPQueryable extends _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* Queryable */ "a"] {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param base A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(base, path) {
        if (typeof base === "string") {
            let url = "";
            let parentUrl = "";
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(base) || base.lastIndexOf("/") < 0) {
                parentUrl = base;
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(base, path);
            }
            else if (base.lastIndexOf("/") > base.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = base.lastIndexOf("/");
                parentUrl = base.slice(0, index);
                path = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(base.slice(index), path);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = base.lastIndexOf("(");
                parentUrl = base.slice(0, index);
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(base, path);
            }
            // init base with corrected string value
            super(url);
            this.parentUrl = parentUrl;
        }
        else {
            super(base, path);
            const q = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "f"])(base) ? base[0] : base;
            this.parentUrl = q.toUrl();
            const target = q.query.get("@target");
            if (target !== undefined) {
                this.query.set("@target", target);
            }
        }
    }
    /**
     * Gets the full url with query information
     */
    toRequestUrl() {
        const aliasedParams = new Map(this.query);
        let url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, (match, labelName, value) => {
            this.log(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        if (aliasedParams.size > 0) {
            const char = url.indexOf("?") > -1 ? "&" : "?";
            url += `${char}${Array.from(aliasedParams).map((v) => v[0] + "=" + v[1]).join("&")}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.map(encodeURIComponent).join(","));
        }
        return this;
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.map(encodeURIComponent).join(","));
        }
        return this;
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, path, base = this.parentUrl) {
        const parent = factory([this, base], path);
        const t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        return parent;
    }
}
const SPQueryable = spInvokableFactory(_SPQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SPCollection extends _SPQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", encodeURIComponent(filter));
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${encodeURIComponent(orderBy)} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SPCollection = spInvokableFactory(_SPCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SPInstance extends _SPQueryable {
}
const SPInstance = spInvokableFactory(_SPInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable() {
    return function () {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPostDelete */ "e"])(this);
    };
}
function deleteableWithETag() {
    return function (eTag = "*") {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_2__[/* spPostDeleteETag */ "t"])(this, {}, eTag);
    };
}
//# sourceMappingURL=spqueryable.js.map

/***/ }),

/***/ "FH1f":
/*!*************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/ThemeToggle/ThemeToggle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeToggle.module.scss */ "sBmf");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "KVCr");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "Mjc0");



var ThemeToggle = function (_a) {
    var isDarkMode = _a.isDarkMode, onToggle = _a.onToggle;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        if (isDarkMode) {
            document.documentElement.classList.add('modo-oscuro');
        }
        else {
            document.documentElement.classList.remove('modo-oscuro');
        }
    }, [isDarkMode]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { onClick: onToggle, "aria-label": isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro', className: "".concat(_ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].toggle, " ").concat(isDarkMode ? _ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].dark : ''), type: "button" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].icon, style: { opacity: isDarkMode ? 0.3 : 1 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"], { size: 20 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].icon, style: { opacity: isDarkMode ? 1 : 0.3 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"], { size: 20 })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _ThemeToggle_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].thumb })));
};
/* harmony default export */ __webpack_exports__["e"] = (ThemeToggle);


/***/ }),

/***/ "GfGO":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/request-digest.js ***!
  \**********************************************************/
/*! exports provided: RequestDigest */
/*! exports used: RequestDigest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RequestDigest; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extract-web-url.js */ "OXUt");


// allows for the caching of digests across all calls which each have their own IDigestInfo wrapper.
const digests = new Map();
function RequestDigest(hook) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            if (/get/i.test(init.method) || (init.headers && (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(init.headers, "X-RequestDigest") || Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(init.headers, "Authorization")))) {
                return [url, init, result];
            }
            // add the request to the auth moment of the timeline
            this.on.auth(async (url, init) => {
                const urlAsString = url.toString();
                const webUrl = Object(_utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(urlAsString);
                // do we have one in the cache that is still valid
                let digest = digests.get(webUrl);
                if (digest !== undefined) {
                    const now = new Date();
                    if (now > digest.expiration) {
                        digest = null;
                    }
                }
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "h"])(digest) && typeof hook === "function") {
                    // we assume anything we get from the hook is not already expired
                    digest = hook(urlAsString, init);
                }
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "h"])(digest)) {
                    // let's get one from the server
                    digest = await fetch(Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(webUrl, "/_api/contextinfo"), {
                        cache: "no-cache",
                        credentials: "same-origin",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json;odata=verbose;charset=utf-8",
                        },
                        method: "POST",
                    }).then(r => r.json()).then(p => ({
                        expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "r"])(new Date(), "second", p.FormDigestTimeoutSeconds),
                        value: p.FormDigestValue,
                    }));
                }
                if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "h"])(digest)) {
                    // if we got a digest, set it in the headers
                    init.headers = {
                        "X-RequestDigest": digest.value,
                        ...init.headers,
                    };
                    // and cache it for future requests
                    digests.set(webUrl, digest);
                }
                return [url, init];
            });
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=request-digest.js.map

/***/ }),

/***/ "Gt/f":
/*!******************************************************!*\
  !*** ./lib/webparts/cursosSst/styles/global.scss.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./global.css */ "uQSc");
var styles = {};
/* unused harmony default export */ var _unused_webpack_default_export = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "H1HP":
/*!*****************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FondoPantalla/FondoPantalla.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_FondoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_context/FondoContext */ "c9Tw");
/* harmony import */ var _config_fondos_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_config/fondos.config */ "RdzM");
/* harmony import */ var _FondoPantalla_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FondoPantalla.module.scss */ "bvPO");




var FondoPantalla = function (_a) {
    var isDarkTheme = _a.isDarkTheme;
    var fondoActivo = Object(_context_FondoContext__WEBPACK_IMPORTED_MODULE_1__[/* useFondo */ "t"])().fondoActivo;
    var fondo = fondoActivo ? _config_fondos_config__WEBPACK_IMPORTED_MODULE_2__[/* fondos */ "e"][fondoActivo] : null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _FondoPantalla_module_scss__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"].fondoPantalla, id: fondoActivo || undefined, style: {
            background: fondo
                ? (isDarkTheme ? fondo.fondoOscuro : fondo.fondoClaro)
                : undefined,
        } }));
};
/* harmony default export */ __webpack_exports__["e"] = (FondoPantalla);


/***/ }),

/***/ "ISfK":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/timeout.js ***!
  \**********************************************************/
/*! exports provided: Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Timeout */
/**
 * Behavior that will cause a timeout in the request after the specified milliseconds
 *
 * @param timeout Either the number of milliseconds to set a timeout, or a caller supplied AbortSignal reference
 */
function Timeout(timeout) {
    return (instance) => {
        if (typeof timeout === "number") {
            const controller = new AbortController();
            setTimeout(controller.abort, timeout);
            timeout = controller.signal;
        }
        instance.on.pre(async (url, init, result) => {
            init.signal = timeout;
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=timeout.js.map

/***/ }),

/***/ "JC1J":
/*!*****************************************!*\
  !*** ./node_modules/@pnp/core/index.js ***!
  \*****************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage, dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, getHashCode, delay, broadcast, asyncReduce, request, lifecycle, Timeline, cloneObserverCollection, extendable, extend, extendFactory, disableExtensions, enableExtensions, AssignFrom, CopyFrom */
/*! exports used: PnPClientStorage, Timeline, asyncReduce, broadcast, combine, dateAdd, delay, extend, extendable, getGUID, getHashCode, hOP, isArray, isFunc, isUrlAbsolute, jsS, objectDefinedNotNull, request, stringIsNullOrEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "L2F+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _storage_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "NuLX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "m", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _util_js__WEBPACK_IMPORTED_MODULE_1__["u"]; });

/* harmony import */ var _moments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moments.js */ "DZog");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _moments_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "4kGv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _timeline_js__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony import */ var _extendable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extendable.js */ "t9SU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _extendable_js__WEBPACK_IMPORTED_MODULE_4__["t"]; });

/* harmony import */ var _behaviors_assign_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./behaviors/assign-from.js */ "zhiF");
/* harmony import */ var _behaviors_copy_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/copy-from.js */ "qNel");





/**
 * Behavior exports
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "JL/4":
/*!******************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/azul.png ***!
  \******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "azul_1476e530cc19570a836c6edc3e84713e.png";

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "KVCr":
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/sun.js ***!
  \*********************************************************/
/*! exports provided: __iconNode, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __iconNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Sun; });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "52ny");
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = Object(_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"])("sun", __iconNode);


//# sourceMappingURL=sun.js.map


/***/ }),

/***/ "L2F+":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/core/storage.js ***!
  \*******************************************/
/*! exports provided: PnPClientStorageWrapper, PnPClientStorage */
/*! exports used: PnPClientStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PnPClientStorageWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PnPClientStorage; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let storageShim;
function getStorageShim() {
    if (typeof storageShim === "undefined") {
        storageShim = new MemoryStorage();
    }
    return storageShim;
}
/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store) {
        this.store = store;
        this.enabled = this.test();
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    async getOrPut(key, getter, expire) {
        if (!this.enabled) {
            return getter();
        }
        let o = this.get(key);
        if (o === null) {
            o = await getter();
            this.put(key, o, expire);
        }
        return o;
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    async deleteExpired() {
        if (!this.enabled) {
            return;
        }
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key !== null) {
                // test the stored item to see if we stored it
                if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                    // get those items as get will delete from cache if they are expired
                    await this.get(key);
                }
            }
        }
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            expire = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "t"])(new Date(), "minute", 5);
        }
        return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* jsS */ "d"])({ pnp: 1, expiration: expire, value: o });
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage, substituting basic memory storage for nodejs
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof localStorage === "undefined" ? getStorageShim() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof sessionStorage === "undefined" ? getStorageShim() : sessionStorage);
        }
        return this._session;
    }
}
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "LF3x":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultAttributes; });
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ }),

/***/ "Mc8z":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/ThemeToggle/ThemeToggle.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toggle_de355ea4{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;background-color:var(--color-primario-oscuro);border:none;border-radius:18px;bottom:16px;box-shadow:inset 0 3px 6px rgba(0,0,0,.25);cursor:pointer;display:-ms-flexbox;display:flex;height:36px;justify-content:space-between;padding:0 8px;position:absolute;right:16px;transition:background-color .3s ease,box-shadow .3s ease;width:70px;z-index:100}.toggle_de355ea4:focus{outline:2px solid var(--color-acento);outline-offset:2px}.toggle_de355ea4.dark_de355ea4{background-color:var(--color-primario-claro);box-shadow:inset 0 3px 6px hsla(0,0%,100%,.5)}.icon_de355ea4{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;color:var(--color-fondo);display:-ms-flexbox;display:flex;height:24px;justify-content:center;pointer-events:none;transition:opacity .4s ease;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:24px}.thumb_de355ea4{background-color:var(--toggle-claro-thumb);border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2);height:28px;left:4px;pointer-events:none;position:absolute;top:4px;transition:left .3s ease,background-color .3s ease,transform .3s ease;width:28px}.toggle_de355ea4.dark_de355ea4 .thumb_de355ea4{background-color:var(--color-primario-oscuro);left:38px;transform:scale(1.05)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "Mjc0":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/moon.js ***!
  \**********************************************************/
/*! exports provided: __iconNode, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __iconNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Moon; });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "52ny");
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = Object(_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"])("moon", __iconNode);


//# sourceMappingURL=moon.js.map


/***/ }),

/***/ "NuLX":
/*!****************************************!*\
  !*** ./node_modules/@pnp/core/util.js ***!
  \****************************************/
/*! exports provided: dateAdd, combine, getRandomString, getGUID, isFunc, isArray, isUrlAbsolute, stringIsNullOrEmpty, objectDefinedNotNull, jsS, hOP, getHashCode, delay */
/*! exports used: combine, dateAdd, delay, getGUID, getHashCode, hOP, isArray, isFunc, isUrlAbsolute, jsS, objectDefinedNotNull, stringIsNullOrEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return dateAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return combine; });
/* unused harmony export getRandomString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isUrlAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return stringIsNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return objectDefinedNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return jsS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return hOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getHashCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return delay; });
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param f The thing to test for functionness
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunc(f) {
    return typeof f === "function";
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray(array);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return typeof s === "undefined" || s === null || s.length < 1;
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
/**
 * Waits a specified number of milliseconds before resolving
 *
 * @param ms Number of ms to wait
 */
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "OWTB":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spfx.js ***!
  \************************************************/
/*! exports provided: SPFx */
/*! exports used: SPFx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SPFx; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPFx(context) {
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultHeaders */ "e"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultInit */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* BrowserFetchWithRetry */ "e"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* DefaultParse */ "t"])(), Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__[/* RequestDigest */ "e"])(() => {
            var _a, _b, _c;
            if ((_b = (_a = context === null || context === void 0 ? void 0 : context.pageContext) === null || _a === void 0 ? void 0 : _a.legacyPageContext) === null || _b === void 0 ? void 0 : _b.formDigestValue) {
                return {
                    value: context.pageContext.legacyPageContext.formDigestValue,
                    expiration: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "r"])(new Date(), "second", ((_c = context.pageContext.legacyPageContext) === null || _c === void 0 ? void 0 : _c.formDigestTimeoutSeconds) || 1600),
                };
            }
        }));
        // we want to fix up the url first
        instance.on.pre.prepend(async (url, init, result) => {
            if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(url)) {
                url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(context.pageContext.web.absoluteUrl, url);
            }
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=spfx.js.map

/***/ }),

/***/ "OXUt":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extract-web-url.js ***!
  \*******************************************************/
/*! exports provided: extractWebUrl */
/*! exports used: extractWebUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extractWebUrl; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function extractWebUrl(candidateUrl) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* stringIsNullOrEmpty */ "g"])(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extract-web-url.js.map

/***/ }),

/***/ "RdzM":
/*!*********************************************************!*\
  !*** ./lib/webparts/cursosSst/_config/fondos.config.js ***!
  \*********************************************************/
/*! exports provided: fondos */
/*! exports used: fondos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fondos; });
var fondos = {
    cargamanualPresentacion: {
        id: 'cargamanualPresentacion',
        nombre: 'Carga Manual - Presentación',
        fondoClaro: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        fondoOscuro: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
    },
    cargamanualSegundaPantalla: {
        id: 'cargamanualSegundaPantalla',
        nombre: 'Carga Manual - Segunda Pantalla',
        fondoClaro: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        fondoOscuro: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    },
    cargamanualTerceraPantalla: {
        id: 'cargamanualTerceraPantalla',
        nombre: 'Carga Manual - Tercera Pantalla',
        fondoClaro: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        fondoOscuro: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
    },
    escalerafijaPresentacion: {
        id: 'escalerafijaPresentacion',
        nombre: 'Escalera Fija - Presentación',
        fondoClaro: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        fondoOscuro: 'linear-gradient(135deg, #283e51 0%, #485563 100%)',
    },
    escalerafijaSegundaPantalla: {
        id: 'escalerafijaSegundaPantalla',
        nombre: 'Escalera Fija - Segunda Pantalla',
        fondoClaro: 'linear-gradient(135deg,rgb(101, 246, 188) 0%,rgb(141, 253, 133) 100%)',
        fondoOscuro: 'linear-gradient(135deg,rgb(202, 209, 216) 0%,rgb(207, 210, 213) 100%)',
    },
    escalerafijaTerceraPantalla: {
        id: 'escalerafijaTerceraPantalla',
        nombre: 'Escalera Fija - Tercera Pantalla',
        fondoClaro: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        fondoOscuro: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
    },
    // agrega más fondos para cada pantalla y curso...
};


/***/ }),

/***/ "RlRT":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/FondoPantalla/FondoPantalla.module.css ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fondoPantalla_cb3447c5{height:100%;left:0;pointer-events:none;position:absolute;top:0;transition:background .6s ease;width:100%;z-index:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "TBF0":
/*!*********************************************!*\
  !*** ./lib/webparts/cursosSst/CursosSst.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_ThemeToggle_ThemeToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ui/ThemeToggle/ThemeToggle */ "FH1f");
/* harmony import */ var _components_Burbujas_Burbujas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Burbujas/Burbujas */ "xcgO");
/* harmony import */ var _CursosSst_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CursosSst.module.scss */ "1jw+");
/* harmony import */ var _components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Logo/Logo */ "mNYq");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/global.scss */ "Gt/f");
/* harmony import */ var _context_FondoContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_context/FondoContext */ "c9Tw");
/* harmony import */ var _components_ui_FondoPantalla_FondoPantalla__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ui/FondoPantalla/FondoPantalla */ "H1HP");
/* harmony import */ var _components_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ui/Loader/Loader */ "boAb");
/* harmony import */ var _utils_cursosDisponibles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/cursosDisponibles */ "Yooq");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CursosSst = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.isDarkTheme), isDarkTheme = _a[0], setIsDarkTheme = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('escalerafija'), cursoSeleccionado = _b[0], setCursoSeleccionado = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), CursoActivo = _c[0], setCursoActivo = _c[1];
    var toggleTheme = function () {
        var newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        document.documentElement.classList.toggle('modo-oscuro', newTheme);
    };
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
        var cargarCurso = function () { return __awaiter(void 0, void 0, void 0, function () {
            var modulo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_cursosDisponibles__WEBPACK_IMPORTED_MODULE_9__[/* cursosDisponibles */ "e"][cursoSeleccionado]()];
                    case 1:
                        modulo = _a.sent();
                        setCursoActivo(react__WEBPACK_IMPORTED_MODULE_0__["lazy"](function () { return Promise.resolve({ default: modulo.default }); }));
                        return [2 /*return*/];
                }
            });
        }); };
        cargarCurso();
    }, [cursoSeleccionado]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_context_FondoContext__WEBPACK_IMPORTED_MODULE_6__[/* FondoProvider */ "e"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CursosSst_module_scss__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"].contenedorWebpart },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_FondoPantalla_FondoPantalla__WEBPACK_IMPORTED_MODULE_7__[/* default */ "e"], { isDarkTheme: isDarkTheme }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CursosSst_module_scss__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"].contenidoPrincipal },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_ThemeToggle_ThemeToggle__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"], { isDarkMode: isDarkTheme, onToggle: toggleTheme }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__[/* default */ "e"], { isDarkTheme: isDarkTheme }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { value: cursoSeleccionado, onChange: function (e) { return setCursoSeleccionado(e.target.value); } }, Object.keys(_utils_cursosDisponibles__WEBPACK_IMPORTED_MODULE_9__[/* cursosDisponibles */ "e"]).map(function (curso) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { key: curso, value: curso }, curso)); })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "e"], null) }, CursoActivo && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](CursoActivo, __assign({}, props, { isDarkTheme: isDarkTheme })))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Burbujas_Burbujas__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"], { isDarkMode: isDarkTheme }))));
};
/* harmony default export */ __webpack_exports__["e"] = (CursosSst);


/***/ }),

/***/ "Ti6f":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/CursosSst.module.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contenedorWebpart_241bee7a{min-height:100vh;overflow:hidden;position:relative;width:100%;z-index:0}.contenedorBurbujas_241bee7a{height:100%;left:0;overflow:visible;pointer-events:none;position:absolute;top:0;width:100%;z-index:100}.contenidoPrincipal_241bee7a{position:relative;z-index:200}.themeToggleContainer_241bee7a{position:absolute;right:16px;top:16px;z-index:300}.logoContainer_241bee7a{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;bottom:5px;display:-ms-flexbox;display:flex;justify-content:center;left:5px;position:absolute;z-index:300}.overlayGeneral_241bee7a{backdrop-filter:blur(4px);background:var(--color-fondo-translucido);height:100%;left:0;position:absolute;top:0;width:100%;z-index:10}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "UK2s":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/operations.js ***!
  \********************************************/
/*! exports provided: spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch */
/*! exports used: spPostDelete, spPostDeleteETag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spGet */
/* unused harmony export spPost */
/* unused harmony export spPostMerge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return spPostDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return spPostDeleteETag; });
/* unused harmony export spDelete */
/* unused harmony export spPatch */
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");

const spGet = (o, init) => {
    return Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "c"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* get */ "s"], init);
};
const spPost = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "c"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* post */ "l"], init);
const spPostMerge = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers, "X-HTTP-Method": "MERGE" };
    return spPost(o, init);
};
const spPostDelete = (o, init) => {
    init = init || {};
    init.headers = { ...init.headers || {}, "X-HTTP-Method": "DELETE" };
    return spPost(o, init);
};
const spPostDeleteETag = (o, init, eTag = "*") => {
    init = init || {};
    init.headers = { ...init.headers || {}, "IF-Match": eTag };
    return spPostDelete(o, init);
};
const spDelete = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "c"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* del */ "o"], init);
const spPatch = (o, init) => Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* op */ "c"])(o, _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* patch */ "d"], init);
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "UKGb":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/index.js ***!
  \***************************************/
/*! exports provided: spInvokableFactory, _SPQueryable, SPQueryable, _SPCollection, SPCollection, _SPInstance, SPInstance, deleteable, deleteableWithETag, defaultPath, spGet, spPost, spPostMerge, spPostDelete, spPostDeleteETag, spDelete, spPatch, SPFI, spfi, emptyGuid, PrincipalType, PrincipalSource, PageType, escapeQueryStrValue, extractWebUrl, containsInvalidFileFolderChars, stripInvalidFileFolderChars, odataUrlFrom, DefaultInit, DefaultHeaders, Telemetry, RequestDigest, SPBrowser, SPFx */
/*! exports used: SPFx, spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "UK2s");
/* harmony import */ var _fi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fi.js */ "v6VW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _fi_js__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "tCQJ");
/* harmony import */ var _utils_escape_query_str_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/escape-query-str.js */ "vstM");
/* harmony import */ var _utils_extract_web_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/extract-web-url.js */ "OXUt");
/* harmony import */ var _utils_file_names_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/file-names.js */ "YFzv");
/* harmony import */ var _utils_odata_url_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/odata-url-from.js */ "hTrG");
/* harmony import */ var _behaviors_defaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/defaults.js */ "qZw7");
/* harmony import */ var _behaviors_telemetry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/telemetry.js */ "nikm");
/* harmony import */ var _behaviors_request_digest_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/request-digest.js */ "GfGO");
/* harmony import */ var _behaviors_spbrowser_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/spbrowser.js */ "Wjh3");
/* harmony import */ var _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/spfx.js */ "OWTB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _behaviors_spfx_js__WEBPACK_IMPORTED_MODULE_13__["e"]; });















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "V4GX":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/queryable/add-prop.js ***!
  \*************************************************/
/*! exports provided: addProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addProp */
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}
//# sourceMappingURL=add-prop.js.map

/***/ }),

/***/ "Ve/E":
/*!************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.css ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Burbujas.module.css */ "72az");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "VxMn":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching.js ***!
  \**********************************************************/
/*! exports provided: Caching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Caching */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function Caching(props) {
    const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* PnPClientStorage */ "e"]();
    const { store, keyFactory, expireFunc } = {
        store: "local",
        keyFactory: (url) => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getHashCode */ "l"])(url.toLowerCase()).toString(),
        expireFunc: () => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* dateAdd */ "r"])(new Date(), "minute", 5),
        ...props,
    };
    const s = store === "session" ? storage.session : storage.local;
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            // only cache get requested data
            if (!/get/i.test(init.method)) {
                return [url, init, result];
            }
            const key = keyFactory(url.toString());
            const cached = s.get(key);
            // we need to ensure that result stays "undefined" unless we mean to set null as the result
            if (cached === null) {
                // if we don't have a cached result we need to get it after the request is sent and parsed
                this.on.post(async function (url, result) {
                    s.put(key, result, expireFunc(url.toString()));
                    return [url, result];
                });
            }
            else {
                result = cached;
            }
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=caching.js.map

/***/ }),

/***/ "WE4i":
/*!***************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/bearer-token.js ***!
  \***************************************************************/
/*! exports provided: BearerToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BearerToken */
/* harmony import */ var _inject_headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inject-headers.js */ "XOGp");

function BearerToken(token) {
    return (instance) => {
        instance.using(Object(_inject_headers_js__WEBPACK_IMPORTED_MODULE_0__[/* InjectHeaders */ "e"])({
            "Authorization": `Bearer ${token}`,
        }));
        return instance;
    };
}
//# sourceMappingURL=bearer-token.js.map

/***/ }),

/***/ "Wjh3":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/spbrowser.js ***!
  \*****************************************************/
/*! exports provided: SPBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPBrowser */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults.js */ "qZw7");
/* harmony import */ var _request_digest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request-digest.js */ "GfGO");




function SPBrowser(props) {
    if ((props === null || props === void 0 ? void 0 : props.baseUrl) && !Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(props.baseUrl)) {
        throw Error("SPBrowser props.baseUrl must be absolute when supplied.");
    }
    return (instance) => {
        instance.using(Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultHeaders */ "e"])(), Object(_defaults_js__WEBPACK_IMPORTED_MODULE_2__[/* DefaultInit */ "t"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* BrowserFetchWithRetry */ "e"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_1__[/* DefaultParse */ "t"])(), Object(_request_digest_js__WEBPACK_IMPORTED_MODULE_3__[/* RequestDigest */ "e"])());
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(props === null || props === void 0 ? void 0 : props.baseUrl)) {
            // we want to fix up the url first
            instance.on.pre.prepend(async (url, init, result) => {
                if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(url)) {
                    url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(props.baseUrl, url);
                }
                return [url, init, result];
            });
        }
        return instance;
    };
}
//# sourceMappingURL=spbrowser.js.map

/***/ }),

/***/ "Ww49":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/queryable/queryable.js ***!
  \**************************************************/
/*! exports provided: Queryable */
/*! exports used: Queryable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Queryable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invokable.js */ "/sQB");



const DefaultMoments = {
    pre: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "n"])(),
    auth: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "n"])(),
    send: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* request */ "b"])(),
    parse: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "n"])(),
    post: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* asyncReduce */ "n"])(),
    data: Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* broadcast */ "a"])(),
};
let Queryable = class Queryable extends _pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* Timeline */ "t"] {
    constructor(init, path) {
        super(DefaultMoments);
        this.InternalResolveEvent = Symbol.for("Queryable_Resolve");
        this.InternalRejectEvent = Symbol.for("Queryable_Reject");
        let url = "";
        let observers = undefined;
        if (typeof init === "string") {
            url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "i"])(init, path);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "f"])(init)) {
            if (init.length !== 2) {
                throw Error("When using the tuple first param only two arguments are supported");
            }
            const q = init[0];
            const _url = init[1];
            url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "i"])(_url, path);
            observers = q.observers;
        }
        else {
            const { _url, observers: _observers } = init;
            url = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* combine */ "i"])(_url, path);
            observers = _observers;
        }
        if (typeof observers !== "undefined") {
            this.observers = observers;
            this._inheritingObservers = true;
        }
        this._url = url;
        this._query = new Map();
    }
    /**
     * Directly concatenates the supplied string to the current url, not normalizing "/" chars
     *
     * @param pathPart The string to concatenate to the url
     */
    concat(pathPart) {
        this._url += pathPart;
        return this;
    }
    /**
     * Gets the full url with query information
     *
     */
    toRequestUrl() {
        let u = this.toUrl();
        if (this._query.size > 0) {
            u += "?" + Array.from(this._query).map((v) => `${v[0]}=${encodeURIComponent(v[1])}`).join("&");
        }
        return u;
    }
    /**
     * Querystring key, value pairs which will be included in the request
     */
    get query() {
        return this._query;
    }
    /**
     * Gets the current url
     *
     */
    toUrl() {
        return this._url;
    }
    execute(userInit) {
        setTimeout(async () => {
            const requestId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* getGUID */ "d"])();
            let requestUrl;
            const log = (msg, level) => {
                // this allows us to easily and consistently format our messages
                this.log(`[${requestId}] ${msg}`, level);
            };
            try {
                log("Beginning request", 1);
                // eslint-disable-next-line prefer-const
                let [url, init, result] = await this.emit.pre(this.toRequestUrl(), userInit || {}, undefined);
                log(`Url: ${url}`, 1);
                if (typeof result !== "undefined") {
                    log("Result returned from pre, Emitting data");
                    this.emit.data(result);
                    log("Emitted data");
                    return;
                }
                log("Emitting auth");
                [requestUrl, init] = await this.emit.auth(new URL(url), init);
                log("Emitted auth");
                // we always resepect user supplied init over observer modified init
                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                log("Emitting send");
                let response = await this.emit.send(requestUrl, init);
                log("Emitted send");
                log("Emitting parse");
                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                log("Emitted parse");
                log("Emitting post");
                [requestUrl, result] = await this.emit.post(requestUrl, result);
                log("Emitted post");
                log("Emitting data");
                this.emit.data(result);
                log("Emitted data");
            }
            catch (e) {
                log(`Emitting error: "${e.message || e}"`, 3);
                // anything that throws we emit and continue
                this.error(e);
                log("Emitted error", 3);
            }
            finally {
                log("Finished request", 1);
            }
        }, 0);
        return new Promise((resolve, reject) => {
            // we overwrite any pre-existing internal events as a
            // given queryable can only process a single request at a time
            this.on[this.InternalResolveEvent].replace(resolve);
            this.on[this.InternalRejectEvent].replace(reject);
        });
    }
};
Queryable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[/* __decorate */ "t"])([
    Object(_pnp_core__WEBPACK_IMPORTED_MODULE_1__[/* extendable */ "c"])(),
    Object(_invokable_js__WEBPACK_IMPORTED_MODULE_2__[/* invokable */ "e"])()
], Queryable);

//# sourceMappingURL=queryable.js.map

/***/ }),

/***/ "XOGp":
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/inject-headers.js ***!
  \*****************************************************************/
/*! exports provided: InjectHeaders */
/*! exports used: InjectHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InjectHeaders; });
function InjectHeaders(headers) {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            init.headers = { ...init.headers, ...headers };
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=inject-headers.js.map

/***/ }),

/***/ "Xos0":
/*!***************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Loader/Loader.module.scss.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Loader.module.css */ "6UNF");
var styles = {
    loaderWrapper: 'loaderWrapper_7913ab36',
    fadeIn: 'fadeIn_7913ab36',
    spinner: 'spinner_7913ab36',
    spin: 'spin_7913ab36',
    text: 'text_7913ab36'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "YFzv":
/*!**************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/file-names.js ***!
  \**************************************************/
/*! exports provided: containsInvalidFileFolderChars, stripInvalidFileFolderChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export containsInvalidFileFolderChars */
/* unused harmony export stripInvalidFileFolderChars */
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
const InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise = false) {
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer = "", onPremise = false) {
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map

/***/ }),

/***/ "YMCC":
/*!*********************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/ThemeToggle/ThemeToggle.module.css ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./ThemeToggle.module.css */ "Mc8z");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "Ymo3":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/queryable/index.js ***!
  \**********************************************/
/*! exports provided: addProp, invokable, get, post, put, patch, del, op, Queryable, queryableFactory, body, headers, BearerToken, BrowserFetch, BrowserFetchWithRetry, Caching, CachingPessimisticRefresh, InjectHeaders, DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError, Timeout, ResolveOnData, RejectOnError */
/*! exports used: BrowserFetchWithRetry, DefaultParse, InjectHeaders, Queryable, RejectOnError, ResolveOnData, del, get, op, patch, post, queryableFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _add_prop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-prop.js */ "V4GX");
/* harmony import */ var _invokable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokable.js */ "/sQB");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations.js */ "h6Ct");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _operations_js__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable.js */ "Ww49");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _queryable_js__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony import */ var _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryable-factory.js */ "359w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "u", function() { return _queryable_factory_js__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony import */ var _request_builders_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-builders.js */ "0qgB");
/* harmony import */ var _behaviors_bearer_token_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./behaviors/bearer-token.js */ "WE4i");
/* harmony import */ var _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./behaviors/browser-fetch.js */ "do2w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _behaviors_browser_fetch_js__WEBPACK_IMPORTED_MODULE_7__["e"]; });

/* harmony import */ var _behaviors_caching_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./behaviors/caching.js */ "VxMn");
/* harmony import */ var _behaviors_caching_pessimistic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviors/caching-pessimistic.js */ "qL0N");
/* harmony import */ var _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./behaviors/inject-headers.js */ "XOGp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "n", function() { return _behaviors_inject_headers_js__WEBPACK_IMPORTED_MODULE_10__["e"]; });

/* harmony import */ var _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./behaviors/parsers.js */ "udT0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "t", function() { return _behaviors_parsers_js__WEBPACK_IMPORTED_MODULE_11__["e"]; });

/* harmony import */ var _behaviors_timeout_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./behaviors/timeout.js */ "ISfK");
/* harmony import */ var _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./behaviors/resolvers.js */ "tGZ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_13__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "r", function() { return _behaviors_resolvers_js__WEBPACK_IMPORTED_MODULE_13__["t"]; });







/**
 * Behavior exports
 */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Yooq":
/*!***********************************************************!*\
  !*** ./lib/webparts/cursosSst/utils/cursosDisponibles.js ***!
  \***********************************************************/
/*! exports provided: cursosDisponibles */
/*! exports used: cursosDisponibles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cursosDisponibles; });
var cursosDisponibles = {
    escalerafija: function () { return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../cursos/escalerafija */ "Hqdw")); },
    cargamanual: function () { return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../cursos/cargamanual */ "lEpI")); },
    // Agrega más cursos aquí
};


/***/ }),

/***/ "boAb":
/*!***************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Loader/Loader.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.module.scss */ "Xos0");


var Loader = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].loaderWrapper },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].spinner }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: _Loader_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].text }, "Cargando contenido...")));
};
/* harmony default export */ __webpack_exports__["e"] = (Loader);


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: BaseClientSideWebPart */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "bvPO":
/*!*****************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FondoPantalla/FondoPantalla.module.scss.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./FondoPantalla.module.css */ "+MB3");
var styles = {
    fondoPantalla: 'fondoPantalla_cb3447c5'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "c9Tw":
/*!*********************************************************!*\
  !*** ./lib/webparts/cursosSst/_context/FondoContext.js ***!
  \*********************************************************/
/*! exports provided: FondoProvider, useFondo */
/*! exports used: FondoProvider, useFondo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FondoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return useFondo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_fondos_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_config/fondos.config */ "RdzM");


var FondoContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
    fondoActivo: null,
    setFondoActivo: function () { },
});
var FondoProvider = function (_a) {
    var children = _a.children;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), fondoActivo = _b[0], setFondoActivoState = _b[1];
    var setFondoActivo = function (id) {
        console.log("🎯 setFondoActivo fue llamado con:", id); // 👈 AÑADE ESTO
        if (_config_fondos_config__WEBPACK_IMPORTED_MODULE_1__[/* fondos */ "e"][id]) {
            setFondoActivoState(id); // Solo guardamos el id
        }
        else {
            console.warn("⚠️ Fondo no encontrado:", id); // 👈 OPCIONAL
            setFondoActivoState(null);
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FondoContext.Provider, { value: { fondoActivo: fondoActivo, setFondoActivo: setFondoActivo } }, children));
};
var useFondo = function () { return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FondoContext); };


/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: Component, Fragment, Suspense, createContext, createElement, default, forwardRef, lazy, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "do2w":
/*!****************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/browser-fetch.js ***!
  \****************************************************************/
/*! exports provided: BrowserFetch, BrowserFetchWithRetry */
/*! exports used: BrowserFetchWithRetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrowserFetch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BrowserFetchWithRetry; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ "udT0");


function BrowserFetch(props) {
    const { replace } = {
        replace: true,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            this.log(`Fetch: ${init.method} ${url.toString()}`, 0);
            return fetch(url.toString(), init);
        });
        return instance;
    };
}
function BrowserFetchWithRetry(props) {
    const { interval, replace, retries } = {
        replace: true,
        interval: 200,
        retries: 3,
        ...props,
    };
    return (instance) => {
        if (replace) {
            instance.on.send.clear();
        }
        instance.on.send(function (url, init) {
            let response;
            let wait = interval;
            let count = 1;
            const retry = async () => {
                // if we've tried too many times, throw
                if (count >= retries) {
                    throw new _parsers_js__WEBPACK_IMPORTED_MODULE_1__[/* HttpRequestError */ "t"](`Retry count exceeded (${retries}) for this request. ${response.status}: ${response.statusText};`, response);
                }
                if (typeof response === "undefined" || (response === null || response === void 0 ? void 0 : response.status) === 429 || (response === null || response === void 0 ? void 0 : response.status) === 503 || (response === null || response === void 0 ? void 0 : response.status) === 504) {
                    // this is our first try and response isn't defined yet
                    // we have been throttled OR http status code 503 or 504, we can retry this
                    if (typeof response !== "undefined") {
                        // this isn't our first try so we need to calculate delay
                        if (response.headers.has("Retry-After")) {
                            // if we have gotten a header, use that value as the delay value in seconds
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            wait = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                        }
                        else {
                            // Increment our counters.
                            wait *= 2;
                        }
                        this.log(`Attempt #${count} to retry request which failed with ${response.status}: ${response.statusText}`, 0);
                        count++;
                        await Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* delay */ "o"])(wait);
                    }
                    try {
                        const u = url.toString();
                        this.log(`Fetch: ${init.method} ${u}`, 0);
                        response = await fetch(u, init);
                        // if we got a good response, return it, otherwise see if we can retry
                        return response.ok ? response : retry();
                    }
                    catch (err) {
                        return retry();
                    }
                }
                else {
                    return response;
                }
            };
            // this the the first call to retry that starts the cycle
            // response is undefined and the other values have their defaults
            return retry();
        });
        return instance;
    };
}
//# sourceMappingURL=browser-fetch.js.map

/***/ }),

/***/ "fQCM":
/*!****************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.scss.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Burbujas.module.css */ "Ve/E");
var styles = {
    bubble3d: 'bubble3d_1ef0e48c',
    floatVertical: 'floatVertical_1ef0e48c'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/*! exports used: render */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "h6Ct":
/*!***************************************************!*\
  !*** ./node_modules/@pnp/queryable/operations.js ***!
  \***************************************************/
/*! exports provided: get, post, put, patch, del, op */
/*! exports used: del, get, op, patch, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return post; });
/* unused harmony export put */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return op; });
function ensureInit(method, init = { headers: {} }) {
    return { method, ...init, headers: { ...init.headers } };
}
function get(init) {
    return this.start(ensureInit("GET", init));
}
function post(init) {
    return this.start(ensureInit("POST", init));
}
function put(init) {
    return this.start(ensureInit("PUT", init));
}
function patch(init) {
    return this.start(ensureInit("PATCH", init));
}
function del(init) {
    return this.start(ensureInit("DELETE", init));
}
function op(q, operation, init) {
    return Reflect.apply(operation, q, [init]);
}
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "hMpi":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/*! exports provided: defaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultPath */
/**
 * Class Decorators
 */
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "hTrG":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/odata-url-from.js ***!
  \******************************************************/
/*! exports provided: odataUrlFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export odataUrlFrom */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");
/* harmony import */ var _extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-web-url.js */ "OXUt");


function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[3]) && Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isUrlAbsolute */ "m"])(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(Object(_extract_web_url_js__WEBPACK_IMPORTED_MODULE_1__[/* extractWebUrl */ "e"])(candidate[s[3]]), "_api", editLink);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        return "";
    }
    return Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* combine */ "i"])(...parts);
}
//# sourceMappingURL=odata-url-from.js.map

/***/ }),

/***/ "hWgV":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/styles/global.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root{--color-primario:#005d9d;--letra-titulo:#005d9d;--color-primario-claro:#3390c9;--color-primario-muy-claro:#99c7e5;--color-primario-oscuro:#004070;--color-acento:#85bf00;--color-acento-claro:#b5db4d;--color-acento-oscuro:#6c9a00;--color-verde-suave:#b5db4d;--color-fondo:#fff;--color-texto:#333;--color-texto-invertido:#fff;--color-bordes:#e0e0e0;--toggle-claro-fondo:#e6eff6;--toggle-claro-thumb:#fff;--toggle-claro-icono:#005d9d;--bubble-color:rgba(0,93,157,.2);--bubble-size:40px;--fondo-gradiente:linear-gradient(135deg,#f0f5fa,#d9e6f5 50%,#b0cce7)}.modo-oscuro{--color-fondo:#121212;--color-texto:#f5f5f5;--color-texto-invertido:#121212;--color-bordes:#444;--color-primario:#3390c9;--color-primario-oscuro:#004070;--color-verde-suave:#a2c039;--color-acento:#6c9a00;--letra-titulo:#f5f5f5;--bubble-color:rgba(51,144,255,.1);--color-borde-boton:#3390c9}body,html{background-color:var(--color-fondo);box-sizing:border-box;color:var(--color-texto);font-family:Segoe UI,\"Segoe UI Web (West European)\",-apple-system,BlinkMacSystemFont,sans-serif;overflow-x:hidden;transition:background-color .3s ease,color .3s ease}.webpart-container,body,html{height:100%;margin:0;padding:0}.webpart-container{overflow:visible;position:relative;width:100%}.bubble-3d{background-color:var(--bubble-color);box-shadow:0 0 0 2px hsla(0,0%,100%,.2),0 0 10px 5px var(--bubble-color),inset 0 0 20px hsla(0,0%,100%,.4);height:var(--bubble-size);opacity:.9;width:var(--bubble-size);z-index:1}.bubble-3d,.bubble-3d:before{border-radius:50%;position:absolute}.bubble-3d:before{background:hsla(0,0%,100%,.6);content:\"\";height:25%;left:15%;top:15%;width:25%}*{transition:background-color .3s ease,color .3s ease,border-color .3s ease}:global body,:global html{background-color:transparent!important;box-sizing:border-box;margin:0!important;padding:0!important}:global [class*=N9B5]{padding-left:0!important;padding-right:0!important}:global .CanvasSection,:global .CanvasSection .ControlZone,:global .CanvasSection-lg6,:global .CanvasSection-sm12,:global .CanvasSection-xl8,:global .CanvasZone,:global .ControlZone{margin:0!important;max-width:100%!important;overflow:visible!important;padding:0!important;position:static!important;width:100%!important}:global .ControlZone--edit{padding-left:0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "m/qK":
/*!****************************************************!*\
  !*** ./lib/webparts/cursosSst/CursosSstWebPart.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _CursosSst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CursosSst */ "TBF0");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CursosSstWebPart = /** @class */ (function (_super) {
    __extends(CursosSstWebPart, _super);
    function CursosSstWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CursosSstWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.onInit.call(this)];
                    case 1:
                        _a.sent();
                        // Solución simplificada para inicializar PnP SP
                        try {
                            this._sp = Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_3__[/* spfi */ "t"])().using(Object(_pnp_sp__WEBPACK_IMPORTED_MODULE_3__[/* SPFx */ "e"])(this.context)); // Cast temporal
                        }
                        catch (error) {
                            console.error('Error inicializando PnP SP:', error);
                            this._sp = {}; // Objeto vacío como fallback
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    CursosSstWebPart.prototype.render = function () {
        var _a, _b, _c, _d;
        // Solución definitiva para isDarkTheme
        var isDarkTheme = ((_c = (_b = (_a = this.context.sdks) === null || _a === void 0 ? void 0 : _a.microsoftTeams) === null || _b === void 0 ? void 0 : _b.context) === null || _c === void 0 ? void 0 : _c.theme) === 'dark' || false;
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CursosSst__WEBPACK_IMPORTED_MODULE_4__[/* default */ "e"], {
            description: this.properties.description,
            isDarkTheme: isDarkTheme,
            environmentMessage: this._getEnvironmentMessage(),
            hasTeamsContext: !!((_d = this.context.sdks) === null || _d === void 0 ? void 0 : _d.microsoftTeams),
            userDisplayName: this.context.pageContext.user.displayName,
            sp: this._sp
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    CursosSstWebPart.prototype._getEnvironmentMessage = function () {
        return this.context.isServedFromLocalhost
            ? 'Entorno local'
            : 'Entorno SharePoint';
    };
    return CursosSstWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (CursosSstWebPart);


/***/ }),

/***/ "mNYq":
/*!********************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Logo/Logo.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_image_azul_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image/azul.png */ "JL/4");
/* harmony import */ var _assets_image_azul_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_image_azul_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_blanco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/blanco.png */ "8HKx");
/* harmony import */ var _assets_image_blanco_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_blanco_png__WEBPACK_IMPORTED_MODULE_2__);



var Logo = function (_a) {
    var isDarkTheme = _a.isDarkTheme;
    var logoSrc = isDarkTheme ? _assets_image_blanco_png__WEBPACK_IMPORTED_MODULE_2___default.a : _assets_image_azul_png__WEBPACK_IMPORTED_MODULE_1___default.a;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: logoSrc, alt: "Logo", style: { width: '180px', height: 'auto' } }));
};
/* harmony default export */ __webpack_exports__["e"] = (Logo);


/***/ }),

/***/ "mrSG":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/*! exports used: __assign, __decorate, __extends, __read, __rest, __spreadArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __decorate; });
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __createBinding */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __read; });
/* unused harmony export __spread */
/* unused harmony export __spreadArrays */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __spreadArray; });
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/* unused harmony export __classPrivateFieldGet */
/* unused harmony export __classPrivateFieldSet */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "nikm":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/telemetry.js ***!
  \*****************************************************/
/*! exports provided: Telemetry */
/*! exports used: Telemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Telemetry; });
function Telemetry() {
    return (instance) => {
        instance.on.pre(async function (url, init, result) {
            let clientTag = "PnPCoreJS:3.0.0:";
            // make our best guess based on url to the method called
            const { pathname } = new URL(url);
            // remove anything before the _api as that is potentially PII and we don't care, just want to get the called path to the REST API
            clientTag += pathname.substring(pathname.indexOf("_api/") + 5).split("/").map((value, index, arr) => index === arr.length - 1 ? value : value[0]).join(".");
            if (clientTag.length > 32) {
                clientTag = clientTag.substring(0, 32);
            }
            this.log(`Request Tag: ${clientTag}`, 0);
            init.headers = { ...init.headers, ["X-ClientService-ClientTag"]: clientTag };
            return [url, init, result];
        });
        return instance;
    };
}
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "qL0N":
/*!**********************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/caching-pessimistic.js ***!
  \**********************************************************************/
/*! exports provided: CachingPessimisticRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CachingPessimisticRefresh */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

/**
 * Pessimistic Caching Behavior
 * Always returns the cached value if one exists but asynchronously executes the call and updates the cache.
 * If a expireFunc is included then the cache update only happens if the cache has expired.
 *
 * @param store Use local or session storage
 * @param keyFactory: a function that returns the key for the cache value, if not provided a default hash of the url will be used
 * @param expireFunc: a function that returns a date of expiration for the cache value, if not provided the cache never expires but is always updated.
 */
function CachingPessimisticRefresh(type = "session", keyFactory, expireFunc) {
    let store;
    if (type === "session") {
        store = (typeof sessionStorage === "undefined") ? new MemoryStorage() : sessionStorage;
    }
    else {
        store = (typeof localStorage === "undefined") ? new MemoryStorage() : localStorage;
    }
    if (!Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "p"])(keyFactory)) {
        keyFactory = (url) => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getHashCode */ "l"])(url.toLowerCase()).toString();
    }
    const putStorage = (key, o) => {
        try {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "p"])(expireFunc)) {
                const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* PnPClientStorage */ "e"]();
                const s = type === "session" ? storage.session : storage.local;
                s.put(key, o, expireFunc());
            }
            else {
                const cache = JSON.stringify({ pnp: 1, expiration: undefined, value: o });
                store.setItem(key, cache);
            }
        }
        catch (err) {
            console.log(`CachingPessimistic(putStorage): ${err}.`);
        }
    };
    const getStorage = (key) => {
        let retVal = undefined;
        try {
            if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "p"])(expireFunc)) {
                const storage = new _pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* PnPClientStorage */ "e"]();
                const s = type === "session" ? storage.session : storage.local;
                retVal = s.get(key);
            }
            else {
                const cache = store.getItem(key);
                if (typeof cache === "string") {
                    retVal = JSON.parse(cache);
                }
            }
        }
        catch (err) {
            console.log(`CachingPessimistic(getStorage): ${err}.`);
        }
        return retVal;
    };
    let refreshCache = true;
    return (instance) => {
        instance.on.init(function () {
            const newExecute = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "s"])(this, {
                async execute(userInit = { method: "GET", headers: {} }) {
                    setTimeout(async () => {
                        const requestId = Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "d"])();
                        const emitError = (e) => {
                            this.log(`[id:${requestId}] Emitting error: "${e.message || e}"`, 3);
                            this.emit.error(e);
                            this.log(`[id:${requestId}] Emitted error: "${e.message || e}"`, 3);
                        };
                        try {
                            let retVal = undefined;
                            const emitSend = async () => {
                                this.log(`[id:${requestId}] Emitting auth`, 0);
                                [requestUrl, init] = await this.emit.auth(requestUrl, init);
                                this.log(`[id:${requestId}] Emitted auth`, 0);
                                // we always resepect user supplied init over observer modified init
                                init = { ...init, ...userInit, headers: { ...init.headers, ...userInit.headers } };
                                this.log(`[id:${requestId}] Emitting send`, 0);
                                let response = await this.emit.send(requestUrl, init);
                                this.log(`[id:${requestId}] Emitted send`, 0);
                                this.log(`[id:${requestId}] Emitting parse`, 0);
                                [requestUrl, response, result] = await this.emit.parse(requestUrl, response, result);
                                this.log(`[id:${requestId}] Emitted parse`, 0);
                                this.log(`[id:${requestId}] Emitting post`, 0);
                                [requestUrl, result] = await this.emit.post(requestUrl, result);
                                this.log(`[id:${requestId}] Emitted post`, 0);
                                return result;
                            };
                            const emitData = () => {
                                this.log(`[id:${requestId}] Emitting data`, 0);
                                this.emit.data(retVal);
                                this.log(`[id:${requestId}] Emitted data`, 0);
                            };
                            this.log(`[id:${requestId}] Beginning request`, 1);
                            let [requestUrl, init, result] = await this.emit.pre(this.toRequestUrl(), {}, undefined);
                            this.log(`[id:${requestId}] Url: ${requestUrl}`, 1);
                            if (typeof result !== "undefined") {
                                retVal = result;
                            }
                            // Waiting is false by default, result is undefined by default, unless cached value is returned
                            if (retVal !== undefined) {
                                if (refreshCache) {
                                    // Return value exists -> assume lazy cache update pipeline execution.
                                    setTimeout(async () => {
                                        try {
                                            await emitSend();
                                        }
                                        catch (e) {
                                            emitError(e);
                                        }
                                    }, 0);
                                }
                                this.log(`[id:${requestId}] Returning cached results and updating cache async`, 1);
                                emitData();
                            }
                            else {
                                retVal = await emitSend();
                                this.log(`[id:${requestId}] Returning results`, 1);
                                emitData();
                            }
                        }
                        catch (e) {
                            emitError(e);
                        }
                        finally {
                            this.log(`[id:${requestId}] Finished request`, 1);
                        }
                    }, 0);
                    return new Promise((resolve, reject) => {
                        this.on[this.InternalResolveEvent].replace(resolve);
                        this.on[this.InternalRejectEvent].replace(reject);
                    });
                },
            });
            return newExecute;
        });
        instance.on.pre(async function (url, init, result) {
            // Reset refreshCache
            refreshCache = true;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const key = keyFactory(url.toString());
            const cached = getStorage(key);
            if (cached !== undefined) {
                // Return value
                result = cached.value;
                if (cached.expiration !== undefined) {
                    if (new Date(cached.expiration) > new Date()) {
                        refreshCache = false;
                    }
                }
            }
            // in these instances make sure we update cache after retrieving result
            if (refreshCache) {
                // if we don't have a cached result we need to get it after the request is sent and parsed
                this.on.post(async function (url, result) {
                    putStorage(key, result);
                    return [url, result];
                });
            }
            return [url, init, result];
        });
        return instance;
    };
}
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
//# sourceMappingURL=caching-pessimistic.js.map

/***/ }),

/***/ "qNel":
/*!*******************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/copy-from.js ***!
  \*******************************************************/
/*! exports provided: CopyFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CopyFrom */
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util.js */ "NuLX");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../timeline.js */ "4kGv");


/**
 * Behavior that will copy all the observers in the source timeline and apply it to the incoming instance
 *
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @param filter If provided filters the moments from which the observers are copied. It should return true for each moment to include.
 * @returns The mutated this
 */
function CopyFrom(source, behavior = "append", filter) {
    return (instance) => {
        return Reflect.apply(copyObservers, instance, [source, behavior, filter]);
    };
}
/**
 * Function with implied this allows us to access protected members
 *
 * @param this The timeline whose observers we will copy
 * @param source The source instance from which we will copy the observers
 * @param behavior replace = observers are cleared before adding, append preserves any observers already present
 * @returns The mutated this
 */
function copyObservers(source, behavior, filter) {
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(source) || !Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* objectDefinedNotNull */ "l"])(source.observers)) {
        return this;
    }
    if (!Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "s"])(filter)) {
        filter = () => true;
    }
    const clonedSource = Object(_timeline_js__WEBPACK_IMPORTED_MODULE_1__[/* cloneObserverCollection */ "t"])(source.observers);
    const keys = Object.keys(clonedSource).filter(filter);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const on = this.on[key];
        if (behavior === "replace") {
            on.clear();
        }
        const momentObservers = clonedSource[key];
        momentObservers.forEach(v => on(v));
    }
    return this;
}
//# sourceMappingURL=copy-from.js.map

/***/ }),

/***/ "qZw7":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/sp/behaviors/defaults.js ***!
  \****************************************************/
/*! exports provided: DefaultInit, DefaultHeaders */
/*! exports used: DefaultHeaders, DefaultInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return DefaultInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultHeaders; });
/* harmony import */ var _pnp_queryable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/queryable */ "Ymo3");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./telemetry.js */ "nikm");


function DefaultInit() {
    return (instance) => {
        instance.on.pre(async (url, init, result) => {
            init.cache = "no-cache";
            init.credentials = "same-origin";
            return [url, init, result];
        });
        instance.using(Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_1__[/* Telemetry */ "e"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* RejectOnError */ "i"])(), Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* ResolveOnData */ "r"])());
        return instance;
    };
}
function DefaultHeaders() {
    return (instance) => {
        instance
            .using(Object(_pnp_queryable__WEBPACK_IMPORTED_MODULE_0__[/* InjectHeaders */ "n"])({
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
            "User-Agent": "NONISV|SharePointPnP|PnPjs",
        }));
        return instance;
    };
}
//# sourceMappingURL=defaults.js.map

/***/ }),

/***/ "sBmf":
/*!*************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/ThemeToggle/ThemeToggle.module.scss.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./ThemeToggle.module.css */ "YMCC");
var styles = {
    toggle: 'toggle_de355ea4',
    dark: 'dark_de355ea4',
    icon: 'icon_de355ea4',
    thumb: 'thumb_de355ea4'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "t9SU":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/core/extendable.js ***!
  \**********************************************/
/*! exports provided: extendable, extend, extendFactory, disableExtensions, enableExtensions */
/*! exports used: extend, extendable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return extendable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return extend; });
/* unused harmony export extendFactory */
/* unused harmony export disableExtensions */
/* unused harmony export enableExtensions */
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "NuLX");

let _enableExtensions = false;
const ObjExtensionsSym = Symbol.for("PnPExt");
const factoryExtensions = new Map();
/**
 * Decorator factory wrapping any tagged class in the extension proxy, enabling the use of object extensions
 *
 * @description MUST be applied last (i.e. be the first decorator in the list top to bottom applied to a class)
 *
 * @returns Decorator implementation
 */
function extendable() {
    return (target) => {
        return new Proxy(target, {
            construct(clz, args, newTarget) {
                let r = Reflect.construct(clz, args, newTarget);
                // this block handles the factory function extensions by picking
                // them off the factory and applying them to the created object
                const proto = Reflect.getPrototypeOf(target);
                if (Reflect.has(proto, ObjExtensionsSym)) {
                    const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
                    if (extensions) {
                        r = extend(r, extensions);
                    }
                }
                const proxied = new Proxy(r, {
                    apply: (target, _thisArg, argArray) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("apply", (...a) => Reflect.apply(...a), target, proxied, argArray);
                    },
                    get: (target, p, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("get", (...a) => Reflect.get(...a), target, p, receiver);
                    },
                    has: (target, p) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("has", (...a) => Reflect.has(...a), target, p);
                    },
                    set: (target, p, value, receiver) => {
                        // eslint-disable-next-line @typescript-eslint/ban-types
                        return extensionOrDefault("set", (...a) => Reflect.set(...a), target, p, value, receiver);
                    },
                });
                return proxied;
            },
        });
    };
}
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function extend(target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
}
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
function extendFactory(factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (proto) {
        if (!Reflect.has(proto, ObjExtensionsSym)) {
            Reflect.defineProperty(proto, ObjExtensionsSym, {
                value: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* getGUID */ "a"])(),
            });
        }
        const key = proto[ObjExtensionsSym];
        if (!factoryExtensions.has(key)) {
            factoryExtensions.set(key, []);
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        extendCol(factoryExtensions.get(key), extensions);
    }
}
function extendCol(a, e) {
    if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "o"])(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
/**
 * Disables all extensions
 */
const disableExtensions = () => {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
const enableExtensions = () => {
    _enableExtensions = true;
};
/**
 * Executes the extended functionality if present, or the default action
 *
 * @param op Current operation type
 * @param or The default non-extended functionality
 * @param target The current "this" to which the current call applies
 * @param rest Any arguments required for the called method
 * @returns Whatever the underlying extension or method returns
 */
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions) {
        const extensions = [];
        // we need to invoke extensions tied to this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push(...Reflect.get(target, ObjExtensionsSym));
        }
        let result = undefined;
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            if (Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "s"])(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are adding/overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op)(target, ...rest);
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or(target, ...rest);
}
//# sourceMappingURL=extendable.js.map

/***/ }),

/***/ "tCQJ":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/types.js ***!
  \***************************************/
/*! exports provided: emptyGuid, PrincipalType, PrincipalSource, PageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export emptyGuid */
/* unused harmony export PrincipalType */
/* unused harmony export PrincipalSource */
/* unused harmony export PageType */
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
const emptyGuid = "00000000-0000-0000-0000-000000000000";
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "tGZ3":
/*!************************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/resolvers.js ***!
  \************************************************************/
/*! exports provided: ResolveOnData, RejectOnError */
/*! exports used: RejectOnError, ResolveOnData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ResolveOnData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RejectOnError; });
function ResolveOnData() {
    return (instance) => {
        instance.on.data(function (data) {
            this.emit[this.InternalResolveEvent](data);
        });
        return instance;
    };
}
function RejectOnError() {
    return (instance) => {
        instance.on.error(function (err) {
            this.emit[this.InternalRejectEvent](err);
        });
        return instance;
    };
}
//# sourceMappingURL=resolvers.js.map

/***/ }),

/***/ "u7bg":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
/*! exports provided: hasA11yProp, mergeClasses, toCamelCase, toKebabCase, toPascalCase */
/*! exports used: hasA11yProp, mergeClasses, toKebabCase, toPascalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasA11yProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mergeClasses; });
/* unused harmony export toCamelCase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return toKebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toPascalCase; });
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "uQSc":
/*!**************************************************!*\
  !*** ./lib/webparts/cursosSst/styles/global.css ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./global.css */ "hWgV");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "udT0":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/queryable/behaviors/parsers.js ***!
  \**********************************************************/
/*! exports provided: DefaultParse, TextParse, BlobParse, JSONParse, BufferParse, HeaderParse, errorCheck, parseODataJSON, parseBinderWithErrorCheck, HttpRequestError */
/*! exports used: DefaultParse, HttpRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DefaultParse; });
/* unused harmony export TextParse */
/* unused harmony export BlobParse */
/* unused harmony export JSONParse */
/* unused harmony export BufferParse */
/* unused harmony export HeaderParse */
/* unused harmony export errorCheck */
/* unused harmony export parseODataJSON */
/* unused harmony export parseBinderWithErrorCheck */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return HttpRequestError; });
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");


function DefaultParse() {
    return parseBinderWithErrorCheck(async (response) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0) || response.status === 204) {
            return {};
        }
        // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
        const txt = await response.text();
        const json = txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {};
        return parseODataJSON(json);
    });
}
function TextParse() {
    return parseBinderWithErrorCheck(r => r.text());
}
function BlobParse() {
    return parseBinderWithErrorCheck(r => r.blob());
}
function JSONParse() {
    return parseBinderWithErrorCheck(r => r.json());
}
function BufferParse() {
    return parseBinderWithErrorCheck(r => Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* isFunc */ "p"])(r.arrayBuffer) ? r.arrayBuffer() : r.buffer());
}
function HeaderParse() {
    return parseBinderWithErrorCheck(async (r) => r.headers);
}
async function errorCheck(url, response, result) {
    if (!response.ok) {
        // within observers we just throw to indicate an unrecoverable error within the pipeline
        const y = await HttpRequestError.init(response);
        throw y;
    }
    return [url, response, result];
}
function parseODataJSON(json) {
    let result = json;
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(json, "d")) {
        if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(json.d, "results")) {
            result = json.d.results;
        }
        else {
            result = json.d;
        }
    }
    else if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* hOP */ "u"])(json, "value")) {
        result = json.value;
    }
    return result;
}
/**
 * Provides a clean way to create new parse bindings without having to duplicate a lot of boilerplate
 * Includes errorCheck ahead of the supplied impl
 *
 * @param impl Method used to parse the response
 * @returns Queryable behavior binding function
 */
function parseBinderWithErrorCheck(impl) {
    return (instance) => {
        // we clear anything else registered for parse
        // add error check
        // add the impl function we are supplied
        instance.on.parse.replace(errorCheck);
        instance.on.parse(async (url, response, result) => {
            if (typeof result === "undefined") {
                result = await impl(response);
            }
            return [url, response, result];
        });
        return instance;
    };
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static async init(r) {
        const t = await r.clone().text();
        return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r.clone());
    }
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "v6VW":
/*!************************************!*\
  !*** ./node_modules/@pnp/sp/fi.js ***!
  \************************************/
/*! exports provided: SPFI, spfi */
/*! exports used: spfi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SPFI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return spfi; });
/* harmony import */ var _spqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spqueryable.js */ "F4qD");

class SPFI {
    /**
     * Creates a new instance of the SPFI class
     *
     * @param root Establishes a root url/configuration
     */
    constructor(root = "") {
        this._root = Object(_spqueryable_js__WEBPACK_IMPORTED_MODULE_0__[/* SPQueryable */ "e"])(root);
    }
    /**
     * Applies one or more behaviors which will be inherited by all instances chained from this root
     *
     */
    using(...behaviors) {
        this._root.using(...behaviors);
        return this;
    }
    /**
     * Used by extending classes to create new objects directly from the root
     *
     * @param factory The factory for the type of object to create
     * @returns A configured instance of that object
     */
    create(factory, path) {
        return factory(this._root, path);
    }
}
function spfi(root = "") {
    if (typeof root === "object" && !Reflect.has(root, "length")) {
        root = root._root;
    }
    return new SPFI(root);
}
//# sourceMappingURL=fi.js.map

/***/ }),

/***/ "vstM":
/*!********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/escape-query-str.js ***!
  \********************************************************/
/*! exports provided: escapeQueryStrValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export escapeQueryStrValue */
/* harmony import */ var _pnp_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/core */ "JC1J");

function escapeQueryStrValue(value) {
    if (Object(_pnp_core__WEBPACK_IMPORTED_MODULE_0__[/* stringIsNullOrEmpty */ "g"])(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            return `!${labelName}::${encodeURIComponent(v.replace(/'/ig, "''"))}`;
        });
    }
    else {
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=escape-query-str.js.map

/***/ }),

/***/ "w1Uh":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/Loader/Loader.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loaderWrapper_7913ab36{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;animation:fadeIn_7913ab36 .3s ease-in-out;color:var(--text-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;justify-content:center;padding:2rem;text-align:center}.spinner_7913ab36{animation:spin_7913ab36 1s linear infinite;border:5px solid var(--bubble-color);border-radius:50%;border-top:5px solid transparent;height:50px;margin-bottom:1rem;width:50px}.text_7913ab36{color:var(--text-color);font-size:1.2rem;font-weight:500}@keyframes spin_7913ab36{to{transform:rotate(1turn)}}@keyframes fadeIn_7913ab36{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "xcgO":
/*!****************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Burbujas_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burbujas.module.scss */ "fQCM");


var burbujas = [
    { top: '20%', left: '40%', size: 70, duration: '4s', delay: '0s' },
    { top: '40%', left: '5%', size: 120, duration: '5s', delay: '1s' },
    { top: '40%', left: '55%', size: 350, duration: '3.5s', delay: '0.5s' }
];
var Burbujas = function (_a) {
    var isDarkMode = _a.isDarkMode;
    var bubbleColor = isDarkMode ? 'rgba(51, 144, 201, 0.15)' : 'rgba(0, 93, 157, 0.2)';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, burbujas.map(function (bubble, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: index, className: _Burbujas_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].bubble3d, style: {
            top: bubble.top,
            left: bubble.left,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
            '--bubble-color': bubbleColor,
            '--size': "".concat(bubble.size, "px"),
        } })); })));
};
/* harmony default export */ __webpack_exports__["e"] = (Burbujas);


/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "z2nl":
/*!*****************************************************!*\
  !*** ./lib/webparts/cursosSst/CursosSst.module.css ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./CursosSst.module.css */ "Ti6f");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "zhiF":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/core/behaviors/assign-from.js ***!
  \*********************************************************/
/*! exports provided: AssignFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AssignFrom */
/**
 * Behavior that will assign a ref to the source's observers and reset the instance's inheriting flag
 *
 * @param source The source instance from which we will assign the observers
 */
function AssignFrom(source) {
    return (instance) => {
        instance.observers = source.observers;
        instance._inheritingObservers = true;
        return instance;
    };
}
//# sourceMappingURL=assign-from.js.map

/***/ }),

/***/ "ztdf":
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "LF3x");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "u7bg");
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* mergeClasses */ "t"])("lucide", className),
      ...!children && !Object(_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* hasA11yProp */ "e"])(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ })

/******/ })});;
//# sourceMappingURL=cursos-sst-web-part.js.map