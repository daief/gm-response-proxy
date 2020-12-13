// ==UserScript==
// @name                    Response Proxy
// @namespace               daief
// @version                 0.0.1
// @description             
// @author                  daief
// @email                   defeng_mail@163.com
// @match                   *://*/*
// @homepage                https://github.com/daief/gm-response-proxy
// @homepageURL             https://github.com/daief/gm-response-proxy
// @supportURL              https://github.com/daief/gm-response-proxy/issues
// @updateURL               https://cdn.jsdelivr.net/gh/daief/gm-response-proxy@main/dist/index.js
// @downloadURL             https://cdn.jsdelivr.net/gh/daief/gm-response-proxy@main/dist/index.js
// @run-at                  document-start
// @noframes                
// @grant                   unsafeWindow
// @grant                   GM_setValue
// @grant                   GM_getValue
// @grant                   GM_log
// @grant                   GM_addStyle
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!********************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \********************************************************************************************************************************************/
/*! namespace exports */
/*! export ITERATE_KEY [provided] [no usage info] [missing usage info prevents renaming] */
/*! export computed [provided] [no usage info] [missing usage info prevents renaming] */
/*! export customRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export effect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export enableTracking [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isProxy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isReactive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isReadonly [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export markRaw [provided] [no usage info] [missing usage info prevents renaming] */
/*! export pauseTracking [provided] [no usage info] [missing usage info prevents renaming] */
/*! export proxyRefs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export readonly [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ref [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resetTracking [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shallowReactive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shallowReadonly [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shallowRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stop [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRaw [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRefs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export track [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trigger [provided] [no usage info] [missing usage info prevents renaming] */
/*! export triggerRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export unref [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATE_KEY": () => /* binding */ ITERATE_KEY,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "customRef": () => /* binding */ customRef,
/* harmony export */   "effect": () => /* binding */ effect,
/* harmony export */   "enableTracking": () => /* binding */ enableTracking,
/* harmony export */   "isProxy": () => /* binding */ isProxy,
/* harmony export */   "isReactive": () => /* binding */ isReactive,
/* harmony export */   "isReadonly": () => /* binding */ isReadonly,
/* harmony export */   "isRef": () => /* binding */ isRef,
/* harmony export */   "markRaw": () => /* binding */ markRaw,
/* harmony export */   "pauseTracking": () => /* binding */ pauseTracking,
/* harmony export */   "proxyRefs": () => /* binding */ proxyRefs,
/* harmony export */   "reactive": () => /* binding */ reactive,
/* harmony export */   "readonly": () => /* binding */ readonly,
/* harmony export */   "ref": () => /* binding */ ref,
/* harmony export */   "resetTracking": () => /* binding */ resetTracking,
/* harmony export */   "shallowReactive": () => /* binding */ shallowReactive,
/* harmony export */   "shallowReadonly": () => /* binding */ shallowReadonly,
/* harmony export */   "shallowRef": () => /* binding */ shallowRef,
/* harmony export */   "stop": () => /* binding */ stop,
/* harmony export */   "toRaw": () => /* binding */ toRaw,
/* harmony export */   "toRef": () => /* binding */ toRef,
/* harmony export */   "toRefs": () => /* binding */ toRefs,
/* harmony export */   "track": () => /* binding */ track,
/* harmony export */   "trigger": () => /* binding */ trigger,
/* harmony export */   "triggerRef": () => /* binding */ triggerRef,
/* harmony export */   "unref": () => /* binding */ unref
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js");


const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(( true) ? 'iterate' : 0);
const MAP_KEY_ITERATE_KEY = Symbol(( true) ? 'Map key iterate' : 0);
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect(fn, options = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ) {
    if (isEffect(fn)) {
        fn = fn.raw;
    }
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) {
        effect();
    }
    return effect;
}
function stop(effect) {
    if (effect.active) {
        cleanup(effect);
        if (effect.options.onStop) {
            effect.options.onStop();
        }
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) {
            return options.scheduler ? undefined : fn();
        }
        if (!effectStack.includes(effect)) {
            cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            }
            finally {
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function cleanup(effect) {
    const { deps } = effect;
    if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect);
        }
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) {
        return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()));
    }
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (( true) && activeEffect.options.onTrack) {
            activeEffect.options.onTrack({
                effect: activeEffect,
                target,
                type,
                key
            });
        }
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        // never been tracked
        return;
    }
    const effects = new Set();
    const add = (effectsToAdd) => {
        if (effectsToAdd) {
            effectsToAdd.forEach(effect => {
                if (effect !== activeEffect || effect.allowRecurse) {
                    effects.add(effect);
                }
            });
        }
    };
    if (type === "clear" /* CLEAR */) {
        // collection being cleared
        // trigger all effects for target
        depsMap.forEach(add);
    }
    else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
        depsMap.forEach((dep, key) => {
            if (key === 'length' || key >= newValue) {
                add(dep);
            }
        });
    }
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) {
            add(depsMap.get(key));
        }
        // also run for iteration key on ADD | DELETE | Map.SET
        switch (type) {
            case "add" /* ADD */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
                    // new index added to array -> length changes
                    add(depsMap.get('length'));
                }
                break;
            case "delete" /* DELETE */:
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                        add(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                }
                break;
            case "set" /* SET */:
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                }
                break;
        }
    }
    const run = (effect) => {
        if (( true) && effect.options.onTrigger) {
            effect.options.onTrigger({
                effect,
                target,
                key,
                type,
                newValue,
                oldValue,
                oldTarget
            });
        }
        if (effect.options.scheduler) {
            effect.options.scheduler(effect);
        }
        else {
            effect();
        }
    };
    effects.forEach(run);
}

const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get" /* GET */, i + '');
        }
        // we run the method using the original args first (which may be reactive)
        const res = method.apply(arr, args);
        if (res === -1 || res === false) {
            // if that didn't work, run it again using raw values.
            return method.apply(arr, args.map(toRaw));
        }
        else {
            return res;
        }
    };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function (...args) {
        pauseTracking();
        const res = method.apply(this, args);
        resetTracking();
        return res;
    };
});
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */ &&
            receiver === (isReadonly ? readonlyMap : reactiveMap).get(target)) {
            return target;
        }
        const targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);
        if (targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
        }
        const res = Reflect.get(target, key, receiver);
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key)
            ? builtInSymbols.has(key)
            : key === `__proto__` || key === `__v_isRef`) {
            return res;
        }
        if (!isReadonly) {
            track(target, "get" /* GET */, key);
        }
        if (shallow) {
            return res;
        }
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
            return shouldUnwrap ? res.value : res;
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
            // Convert returned value into a proxy as well. we do the isObject check
            // here to avoid invalid value warning. Also need to lazy access readonly
            // and reactive here to avoid circular dependency.
            return isReadonly ? readonly(res) : reactive(res);
        }
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        const oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)
            ? Number(key) < target.length
            : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add" /* ADD */, key, value);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
                trigger(target, "set" /* SET */, key, value, oldValue);
            }
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
        track(target, "has" /* HAS */, key);
    }
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
        if ((true)) {
            console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    },
    deleteProperty(target, key) {
        if ((true)) {
            console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
};
const shallowReactiveHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});

const toReactive = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
const toReadonly = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "get" /* GET */, key);
    }
    !isReadonly && track(rawTarget, "get" /* GET */, rawKey);
    const { has } = getProto(rawTarget);
    const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
    if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
    }
    else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
    }
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
        !isReadonly && track(rawTarget, "has" /* HAS */, key);
    }
    !isReadonly && track(rawTarget, "has" /* HAS */, rawKey);
    return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */, ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    const result = target.add(value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, value, value);
    }
    return result;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get.call(target, key);
    const result = target.set(key, value);
    if (!hadKey) {
        trigger(target, "add" /* ADD */, key, value);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set" /* SET */, key, value, oldValue);
    }
    return result;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has, get } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    }
    else if ((true)) {
        checkIdentityKeys(target, has, key);
    }
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) {
        trigger(target, "delete" /* DELETE */, key, undefined, oldValue);
    }
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = ( true)
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)
            ? new Map(target)
            : new Set(target)
        : 0;
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) {
        trigger(target, "clear" /* CLEAR */, undefined, undefined, oldTarget);
    }
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */, ITERATE_KEY);
        return target.forEach((value, key) => {
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function (...args) {
        const target = this["__v_raw" /* RAW */];
        const rawTarget = toRaw(target);
        const targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
        const isPair = method === 'entries' || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isReadonly ? toReadonly : isShallow ? toShallow : toReactive;
        !isReadonly &&
            track(rawTarget, "iterate" /* ITERATE */, isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next() {
                const { value, done } = innerIterator.next();
                return done
                    ? { value, done }
                    : {
                        value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                        done
                    };
            },
            // iterable protocol
            [Symbol.iterator]() {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function (...args) {
        if ((true)) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */ ? false : this;
    };
}
const mutableInstrumentations = {
    get(key) {
        return get$1(this, key);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
};
const shallowInstrumentations = {
    get(key) {
        return get$1(this, key, false, true);
    },
    get size() {
        return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
};
const readonlyInstrumentations = {
    get(key) {
        return get$1(this, key, true);
    },
    get size() {
        return size(this, true);
    },
    has(key) {
        return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add" /* ADD */),
    set: createReadonlyMethod("set" /* SET */),
    delete: createReadonlyMethod("delete" /* DELETE */),
    clear: createReadonlyMethod("clear" /* CLEAR */),
    forEach: createForEach(true, false)
};
const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
});
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow
        ? shallowInstrumentations
        : isReadonly
            ? readonlyInstrumentations
            : mutableInstrumentations;
    return (target, key, receiver) => {
        if (key === "__v_isReactive" /* IS_REACTIVE */) {
            return !isReadonly;
        }
        else if (key === "__v_isReadonly" /* IS_READONLY */) {
            return isReadonly;
        }
        else if (key === "__v_raw" /* RAW */) {
            return target;
        }
        return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target
            ? instrumentations
            : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` +
            `versions of the same object${type === `Map` ? ` as keys` : ``}, ` +
            `which can lead to inconsistencies. ` +
            `Avoid differentiating between the raw and reactive versions ` +
            `of an object and only use the reactive version if possible.`);
    }
}

const reactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch (rawType) {
        case 'Object':
        case 'Array':
            return 1 /* COMMON */;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */;
        default:
            return 0 /* INVALID */;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */] || !Object.isExtensible(value)
        ? 0 /* INVALID */
        : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */]) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, readonlyCollectionHandlers);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
        if ((true)) {
            console.warn(`value cannot be made reactive: ${String(target)}`);
        }
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */] &&
        !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */])) {
        return target;
    }
    // target already has corresponding Proxy
    const proxyMap = isReadonly ? readonlyMap : reactiveMap;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */) {
        return target;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */ ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) {
        return isReactive(value["__v_raw" /* RAW */]);
    }
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return ((observed && toRaw(observed["__v_raw" /* RAW */])) || observed);
}
function markRaw(value) {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip" /* SKIP */, true);
    return value;
}

const convert = (val) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class RefImpl {
    constructor(_rawValue, _shallow = false) {
        this._rawValue = _rawValue;
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newVal) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(toRaw(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */, 'value', newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */, 'value', ( true) ? ref.value : 0);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        }
        else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory) {
        this.__v_isRef = true;
        const { get, set } = factory(() => track(this, "get" /* GET */, 'value'), () => trigger(this, "set" /* SET */, 'value'));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (( true) && !isProxy(object)) {
        console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};
    for (const key in object) {
        ret[key] = toRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key) {
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key])
        ? object[key]
        : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
    constructor(getter, _setter, isReadonly) {
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect(getter, {
            lazy: true,
            scheduler: () => {
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */, 'value');
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
    }
    get value() {
        if (this._dirty) {
            this._value = this.effect();
            this._dirty = false;
        }
        track(toRaw(this), "get" /* GET */, 'value');
        return this._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions) {
    let getter;
    let setter;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ( true)
            ? () => {
                console.warn('Write operation failed: computed value is readonly');
            }
            : 0;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions) || !getterOrOptions.set);
}




/***/ }),

/***/ "../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!**************************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \**************************************************************************************************************************************************/
/*! namespace exports */
/*! export BaseTransition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Comment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Fragment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export KeepAlive [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Static [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Suspense [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Teleport [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Text [provided] [no usage info] [missing usage info prevents renaming] */
/*! export callWithAsyncErrorHandling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export callWithErrorHandling [provided] [no usage info] [missing usage info prevents renaming] */
/*! export camelize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .camelize */
/*! export capitalize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .capitalize */
/*! export cloneVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export computed [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createBlock [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createCommentVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createHydrationRenderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createRenderer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createSlots [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createStaticVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createTextVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export customRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .customRef */
/*! export defineAsyncComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export defineComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export defineEmit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export defineProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export devtools [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCurrentInstance [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getTransitionRawChildren [provided] [no usage info] [missing usage info prevents renaming] */
/*! export h [provided] [no usage info] [missing usage info prevents renaming] */
/*! export handleError [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCustomFormatter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isProxy [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isProxy */
/*! export isReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReactive */
/*! export isReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReadonly */
/*! export isRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isRef */
/*! export isVNode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export markRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .markRaw */
/*! export mergeProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! export nextTick [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onActivated [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onBeforeMount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onBeforeUnmount [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onBeforeUpdate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onDeactivated [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onErrorCaptured [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onMounted [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onRenderTracked [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onRenderTriggered [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onUnmounted [provided] [no usage info] [missing usage info prevents renaming] */
/*! export onUpdated [provided] [no usage info] [missing usage info prevents renaming] */
/*! export openBlock [provided] [no usage info] [missing usage info prevents renaming] */
/*! export popScopeId [provided] [no usage info] [missing usage info prevents renaming] */
/*! export provide [provided] [no usage info] [missing usage info prevents renaming] */
/*! export proxyRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .proxyRefs */
/*! export pushScopeId [provided] [no usage info] [missing usage info prevents renaming] */
/*! export queuePostFlushCb [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .reactive */
/*! export readonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .readonly */
/*! export ref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .ref */
/*! export registerRuntimeCompiler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderSlot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resolveComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resolveDirective [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resolveDynamicComponent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export resolveTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setBlockTracking [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setDevtoolsHook [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shallowReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReactive */
/*! export shallowReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReadonly */
/*! export shallowRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowRef */
/*! export ssrContextKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ssrUtils [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toDisplayString [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toDisplayString */
/*! export toHandlerKey [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toHandlerKey */
/*! export toHandlers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRaw */
/*! export toRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRef */
/*! export toRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRefs */
/*! export transformVNodeArgs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export triggerRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .triggerRef */
/*! export unref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .unref */
/*! export useContext [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useSSRContext [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useTransitionState [provided] [no usage info] [missing usage info prevents renaming] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export watch [provided] [no usage info] [missing usage info prevents renaming] */
/*! export watchEffect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withCtx [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withDirectives [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withScopeId [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey,
/* harmony export */   "BaseTransition": () => /* binding */ BaseTransition,
/* harmony export */   "Comment": () => /* binding */ Comment,
/* harmony export */   "Fragment": () => /* binding */ Fragment,
/* harmony export */   "KeepAlive": () => /* binding */ KeepAlive,
/* harmony export */   "Static": () => /* binding */ Static,
/* harmony export */   "Suspense": () => /* binding */ Suspense,
/* harmony export */   "Teleport": () => /* binding */ Teleport,
/* harmony export */   "Text": () => /* binding */ Text,
/* harmony export */   "callWithAsyncErrorHandling": () => /* binding */ callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* binding */ callWithErrorHandling,
/* harmony export */   "cloneVNode": () => /* binding */ cloneVNode,
/* harmony export */   "computed": () => /* binding */ computed,
/* harmony export */   "createBlock": () => /* binding */ createBlock,
/* harmony export */   "createCommentVNode": () => /* binding */ createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* binding */ createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* binding */ createRenderer,
/* harmony export */   "createSlots": () => /* binding */ createSlots,
/* harmony export */   "createStaticVNode": () => /* binding */ createStaticVNode,
/* harmony export */   "createTextVNode": () => /* binding */ createTextVNode,
/* harmony export */   "createVNode": () => /* binding */ createVNode,
/* harmony export */   "defineAsyncComponent": () => /* binding */ defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* binding */ defineComponent,
/* harmony export */   "defineEmit": () => /* binding */ defineEmit,
/* harmony export */   "defineProps": () => /* binding */ defineProps,
/* harmony export */   "devtools": () => /* binding */ devtools,
/* harmony export */   "getCurrentInstance": () => /* binding */ getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* binding */ getTransitionRawChildren,
/* harmony export */   "h": () => /* binding */ h,
/* harmony export */   "handleError": () => /* binding */ handleError,
/* harmony export */   "initCustomFormatter": () => /* binding */ initCustomFormatter,
/* harmony export */   "inject": () => /* binding */ inject,
/* harmony export */   "isVNode": () => /* binding */ isVNode,
/* harmony export */   "mergeProps": () => /* binding */ mergeProps,
/* harmony export */   "nextTick": () => /* binding */ nextTick,
/* harmony export */   "onActivated": () => /* binding */ onActivated,
/* harmony export */   "onBeforeMount": () => /* binding */ onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* binding */ onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* binding */ onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* binding */ onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* binding */ onErrorCaptured,
/* harmony export */   "onMounted": () => /* binding */ onMounted,
/* harmony export */   "onRenderTracked": () => /* binding */ onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* binding */ onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* binding */ onUnmounted,
/* harmony export */   "onUpdated": () => /* binding */ onUpdated,
/* harmony export */   "openBlock": () => /* binding */ openBlock,
/* harmony export */   "popScopeId": () => /* binding */ popScopeId,
/* harmony export */   "provide": () => /* binding */ provide,
/* harmony export */   "pushScopeId": () => /* binding */ pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* binding */ queuePostFlushCb,
/* harmony export */   "registerRuntimeCompiler": () => /* binding */ registerRuntimeCompiler,
/* harmony export */   "renderList": () => /* binding */ renderList,
/* harmony export */   "renderSlot": () => /* binding */ renderSlot,
/* harmony export */   "resolveComponent": () => /* binding */ resolveComponent,
/* harmony export */   "resolveDirective": () => /* binding */ resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* binding */ resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* binding */ resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* binding */ setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* binding */ setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* binding */ setTransitionHooks,
/* harmony export */   "ssrContextKey": () => /* binding */ ssrContextKey,
/* harmony export */   "ssrUtils": () => /* binding */ ssrUtils,
/* harmony export */   "toHandlers": () => /* binding */ toHandlers,
/* harmony export */   "transformVNodeArgs": () => /* binding */ transformVNodeArgs,
/* harmony export */   "useContext": () => /* binding */ useContext,
/* harmony export */   "useSSRContext": () => /* binding */ useSSRContext,
/* harmony export */   "useTransitionState": () => /* binding */ useTransitionState,
/* harmony export */   "version": () => /* binding */ version,
/* harmony export */   "warn": () => /* binding */ warn,
/* harmony export */   "watch": () => /* binding */ watch,
/* harmony export */   "watchEffect": () => /* binding */ watchEffect,
/* harmony export */   "withCtx": () => /* binding */ withCtx,
/* harmony export */   "withDirectives": () => /* binding */ withDirectives,
/* harmony export */   "withScopeId": () => /* binding */ withScopeId
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js");





const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
        callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */, [
            msg + args.join(''),
            instance && instance.proxy,
            trace
                .map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`)
                .join('\n'),
            trace
        ]);
    }
    else {
        const warnArgs = [`[Vue warn]: ${msg}`, ...args];
        /* istanbul ignore if */
        if (trace.length &&
            // avoid spamming console during tests
            !false) {
            warnArgs.push(`\n`, ...formatTrace(trace));
        }
        console.warn(...warnArgs);
    }
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
        return [];
    }
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while (currentVNode) {
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) {
            last.recurseCount++;
        }
        else {
            normalizedStack.push({
                vnode: currentVNode,
                recurseCount: 0
            });
        }
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
        logs.push(...(i === 0 ? [] : [`\n`]), ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props
        ? [open, ...formatProps(vnode.props), close]
        : [open + close];
}
/* istanbul ignore next */
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach(key => {
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
        res.push(` ...`);
    }
    return res;
}
/* istanbul ignore next */
function formatProp(key, value, raw) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [`${key}=${value}`];
    }
    else if (typeof value === 'number' ||
        typeof value === 'boolean' ||
        value == null) {
        return raw ? value : [`${key}=${value}`];
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
        value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
        return raw ? value : [`${key}=Ref<`, value, `>`];
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
        return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    }
    else {
        value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
        return raw ? value : [`${key}=`, value];
    }
}

const ErrorTypeStrings = {
    ["bc" /* BEFORE_CREATE */]: 'beforeCreate hook',
    ["c" /* CREATED */]: 'created hook',
    ["bm" /* BEFORE_MOUNT */]: 'beforeMount hook',
    ["m" /* MOUNTED */]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */]: 'beforeUpdate hook',
    ["u" /* UPDATED */]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */]: 'unmounted hook',
    ["a" /* ACTIVATED */]: 'activated hook',
    ["da" /* DEACTIVATED */]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */]: 'setup function',
    [1 /* RENDER_FUNCTION */]: 'render function',
    [2 /* WATCH_GETTER */]: 'watcher getter',
    [3 /* WATCH_CALLBACK */]: 'watcher callback',
    [4 /* WATCH_CLEANUP */]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */]: 'component event handler',
    [7 /* VNODE_HOOK */]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */]: 'directive hook',
    [9 /* TRANSITION_HOOK */]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */]: 'app warnHandler',
    [12 /* FUNCTION_REF */]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */]: 'async component loader',
    [14 /* SCHEDULER */]: 'scheduler flush. This is likely a Vue internals bug. ' +
        'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    }
    catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
            res.catch(err => {
                handleError(err, instance, type);
            });
        }
        return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ( true) ? ErrorTypeStrings[type] : 0;
        while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
                for (let i = 0; i < errorCapturedHooks.length; i++) {
                    if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                        return;
                    }
                }
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */, [err, exposedInstance, errorInfo]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    if ((true)) {
        const info = ErrorTypeStrings[type];
        if (contextVNode) {
            pushWarningContext(contextVNode);
        }
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) {
            popWarningContext();
        }
        // crash in dev by default so it's more noticeable
        if (throwInDev) {
            throw err;
        }
        else {
            console.error(err);
        }
    }
    else {}
}

let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length ||
        !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) &&
        job !== currentPreFlushParentJob) {
        queue.push(job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > -1) {
        queue.splice(i, 1);
    }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
        if (!activeQueue ||
            !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
            pendingQueue.push(cb);
        }
    }
    else {
        // if cb is an array, it is a component lifecycle hook which can only be
        // triggered by a job, which is already deduped in the main queue, so
        // we can skip duplicate check here to improve perf
        pendingQueue.push(...cb);
    }
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
        pendingPreFlushCbs.length = 0;
        if ((true)) {
            seen = seen || new Map();
        }
        for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
            if ((true)) {
                checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex]);
            }
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        if ((true)) {
            seen = seen || new Map();
        }
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if ((true)) {
                checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex]);
            }
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if ((true)) {
        seen = seen || new Map();
    }
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b) => getId(a) - getId(b));
    try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job) {
                if ((true)) {
                    checkRecursiveUpdates(seen, job);
                }
                callWithErrorHandling(job, null, 14 /* SCHEDULER */);
            }
        }
    }
    finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
        }
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
        seen.set(fn, 1);
    }
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            throw new Error(`Maximum recursive updates exceeded. ` +
                `This means you have a reactive effect that is mutating its own ` +
                `dependencies and thus recursively triggering itself. Possible sources ` +
                `include component template, render function, updated hook or ` +
                `watcher source function.`);
        }
        else {
            seen.set(fn, count + 1);
        }
    }
}

/* eslint-disable no-restricted-globals */
let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
// Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.
if (true) {
    const globalObject = typeof __webpack_require__.g !== 'undefined'
        ? __webpack_require__.g
        : typeof self !== 'undefined'
            ? self
            : typeof window !== 'undefined'
                ? window
                : {};
    globalObject.__VUE_HMR_RUNTIME__ = {
        createRecord: tryWrap(createRecord),
        rerender: tryWrap(rerender),
        reload: tryWrap(reload)
    };
}
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, component) {
    if (!component) {
        warn(`HMR API usage is out of date.\n` +
            `Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant ` +
            `depdendency that handles Vue SFC compilation.`);
        component = {};
    }
    if (map.has(id)) {
        return false;
    }
    map.set(id, {
        component: isClassComponent(component) ? component.__vccOpts : component,
        instances: new Set()
    });
    return true;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record)
        return;
    if (newRender)
        record.component.render = newRender;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    Array.from(record.instances).forEach(instance => {
        if (newRender) {
            instance.render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
        return;
    // Array.from creates a snapshot which avoids the set being mutated during
    // updates
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
        // 1. Update existing comp definition to match new one
        newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(component, newComp);
        for (const key in component) {
            if (!(key in newComp)) {
                delete component[key];
            }
        }
        // 2. Mark component dirty. This forces the renderer to replace the component
        // on patch.
        hmrDirtyComponents.add(component);
        // 3. Make sure to unmark the component after the reload.
        queuePostFlushCb(() => {
            hmrDirtyComponents.delete(component);
        });
    }
    Array.from(instances).forEach(instance => {
        if (instance.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance.parent.update);
        }
        else if (instance.appContext.reload) {
            // root instance mounted via createApp() has a reload method
            instance.appContext.reload();
        }
        else if (typeof window !== 'undefined') {
            // root instance inside tree created via raw render(). Force reload.
            window.location.reload();
        }
        else {
            console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
        }
    });
}
function tryWrap(fn) {
    return (id, arg) => {
        try {
            return fn(id, arg);
        }
        catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` +
                `Full reload required.`);
        }
    };
}

let devtools;
function setDevtoolsHook(hook) {
    devtools = hook;
}
function devtoolsInitApp(app, version) {
    // TODO queue if devtools is undefined
    if (!devtools)
        return;
    devtools.emit("app:init" /* APP_INIT */, app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    if (!devtools)
        return;
    devtools.emit("app:unmount" /* APP_UNMOUNT */, app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */);
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */);
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */);
function createDevtoolsComponentHook(hook) {
    return (component) => {
        if (!devtools)
            return;
        devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined);
    };
}
function devtoolsComponentEmit(component, event, params) {
    if (!devtools)
        return;
    devtools.emit("component:emit" /* COMPONENT_EMIT */, component.appContext.app, component, event, params);
}

function emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if ((true)) {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions)) {
                if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
                    warn(`Component emitted event "${event}" but it is neither declared in ` +
                        `the emits option nor as an "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)}" prop.`);
                }
            }
            else {
                const validator = emitsOptions[event];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) {
                        warn(`Invalid event arguments: event validation failed for event "${event}".`);
                    }
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        if (trim) {
            args = rawArgs.map(a => a.trim());
        }
        else if (number) {
            args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
        }
    }
    if (true) {
        devtoolsComponentEmit(instance, event, args);
    }
    if ((true)) {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
            warn(`Event "${lowerCaseEvent}" is emitted in component ` +
                `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` +
                `Note that HTML attributes are case-insensitive and you cannot use ` +
                `v-on to listen to camelCase events when using in-DOM templates. ` +
                `You should probably use "${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event)}" instead of "${event}".`);
        }
    }
    // convert handler name to camelCase. See issue #2249
    let handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event));
    let handler = props[handlerName];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) {
        handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event));
        handler = props[handlerName];
    }
    if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) {
            (instance.emitted = {})[handlerName] = true;
        }
        else if (instance.emitted[handlerName]) {
            return;
        }
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__emits !== undefined) {
        return comp.__emits;
    }
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendEmits = (raw) => {
            hasExtends = true;
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizeEmitsOptions(raw, appContext, true));
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
            extendEmits(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__emits = null);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        raw.forEach(key => (normalized[key] = null));
    }
    else {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
    }
    return (comp.__emits = normalized);
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        return false;
    }
    key = key.replace(/Once$/, '');
    return ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[2].toLowerCase() + key.slice(3)) ||
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key.slice(2)));
}

// mark the current rendering instance for asset resolution (e.g.
// resolveComponent, resolveDirective) during render
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
    currentRenderingInstance = instance;
}
// dev only flag to track whether $attrs was used during render.
// If $attrs was used during render then the warning for failed attrs
// fallthrough can be suppressed.
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx } = instance;
    let result;
    currentRenderingInstance = instance;
    if ((true)) {
        accessedAttrs = false;
    }
    try {
        let fallthroughAttrs;
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        }
        else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (( true) && attrs === props) {
                markAttrsAccessed();
            }
            result = normalizeVNode(render.length > 1
                ? render(props, ( true)
                    ? {
                        get attrs() {
                            markAttrsAccessed();
                            return attrs;
                        },
                        slots,
                        emit
                    }
                    : 0)
                : render(props, null /* we know it doesn't need it */));
            fallthroughAttrs = Component.props
                ? attrs
                : getFunctionalFallthrough(attrs);
        }
        // attr merging
        // in dev mode, comments are preserved, and it's possible for a template
        // to have comments along side the root element which makes it a fragment
        let root = result;
        let setRoot = undefined;
        if ((true)) {
            ;
            [root, setRoot] = getChildRoot(result);
        }
        if (Component.inheritAttrs !== false && fallthroughAttrs) {
            const keys = Object.keys(fallthroughAttrs);
            const { shapeFlag } = root;
            if (keys.length) {
                if (shapeFlag & 1 /* ELEMENT */ ||
                    shapeFlag & 6 /* COMPONENT */) {
                    if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
                        // If a v-model listener (onUpdate:xxx) has a corresponding declared
                        // prop, it indicates this component expects to handle v-model and
                        // it should not fallthrough.
                        // related: #1543, #1643, #1989
                        fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                    }
                    root = cloneVNode(root, fallthroughAttrs);
                }
                else if (( true) && !accessedAttrs && root.type !== Comment) {
                    const allAttrs = Object.keys(attrs);
                    const eventAttrs = [];
                    const extraAttrs = [];
                    for (let i = 0, l = allAttrs.length; i < l; i++) {
                        const key = allAttrs[i];
                        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                            // ignore v-model handlers when they fail to fallthrough
                            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                                // remove `on`, lowercase first letter to reflect event casing
                                // accurately
                                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                            }
                        }
                        else {
                            extraAttrs.push(key);
                        }
                    }
                    if (extraAttrs.length) {
                        warn(`Extraneous non-props attributes (` +
                            `${extraAttrs.join(', ')}) ` +
                            `were passed to component but could not be automatically inherited ` +
                            `because component renders fragment or text root nodes.`);
                    }
                    if (eventAttrs.length) {
                        warn(`Extraneous non-emits event listeners (` +
                            `${eventAttrs.join(', ')}) ` +
                            `were passed to component but could not be automatically inherited ` +
                            `because component renders fragment or text root nodes. ` +
                            `If the listener is intended to be a component custom event listener only, ` +
                            `declare it using the "emits" option.`);
                    }
                }
            }
        }
        // inherit directives
        if (vnode.dirs) {
            if (( true) && !isElementRoot(root)) {
                warn(`Runtime directive used on component with non-element root node. ` +
                    `The directives will not function as intended.`);
            }
            root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        // inherit transition data
        if (vnode.transition) {
            if (( true) && !isElementRoot(root)) {
                warn(`Component inside <Transition> renders non-element root node ` +
                    `that cannot be animated.`);
            }
            root.transition = vnode.transition;
        }
        if (( true) && setRoot) {
            setRoot(root);
        }
        else {
            result = root;
        }
    }
    catch (err) {
        handleError(err, instance, 1 /* RENDER_FUNCTION */);
        result = createVNode(Comment);
    }
    currentRenderingInstance = null;
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */
const getChildRoot = (vnode) => {
    if (vnode.type !== Fragment) {
        return [vnode, undefined];
    }
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
        return [vnode, undefined];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) {
                dynamicChildren[dynamicIndex] = updatedRoot;
            }
            else if (updatedRoot.patchFlag > 0) {
                vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
        }
    };
    return [normalizeVNode(childRoot), setRoot];
};
/**
 * dev only
 */
function filterSingleRoot(children) {
    const filtered = children.filter(child => {
        return !(isVNode(child) &&
            child.type === Comment &&
            child.children !== 'v-if');
    });
    return filtered.length === 1 && isVNode(filtered[0]) ? filtered[0] : null;
}
const getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
        if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
            (res || (res = {}))[key] = attrs[key];
        }
    }
    return res;
};
const filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
        }
    }
    return res;
};
const isElementRoot = (vnode) => {
    return (vnode.shapeFlag & 6 /* COMPONENT */ ||
        vnode.shapeFlag & 1 /* ELEMENT */ ||
        vnode.type === Comment // potential v-if branch switch
    );
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if (( true) && (prevChildren || nextChildren) && isHmrUpdating) {
        return true;
    }
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) {
        return true;
    }
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */) {
            // slot content that references values that might have changed,
            // e.g. in a v-for
            return true;
        }
        if (patchFlag & 16 /* FULL_PROPS */) {
            if (!prevProps) {
                return !!nextProps;
            }
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        }
        else if (patchFlag & 8 /* PROPS */) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] &&
                    !isEmitListener(emits, key)) {
                    return true;
                }
            }
        }
    }
    else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
                return true;
            }
        }
        if (prevProps === nextProps) {
            return false;
        }
        if (!prevProps) {
            return !!nextProps;
        }
        if (!nextProps) {
            return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] &&
            !isEmitListener(emitsOptions, key)) {
            return true;
        }
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el // HostNode
) {
    while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}

const isSuspense = (type) => type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, 
    // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) {
            mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals);
        }
        else {
            patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary
};
// Force-casted public typing for h and TSX props inference
const Suspense = ( SuspenseImpl
    );
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals));
    // start mounting the content subtree in an off-dom container
    patch(null, (suspense.pendingBranch = vnode.ssContent), hiddenContainer, null, parentComponent, suspense, isSVG);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG);
        setActiveBranch(suspense, vnode.ssFallback);
    }
    else {
        // Suspense has no async deps. Just resolve.
        suspense.resolve();
    }
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = (n2.suspense = n1.suspense);
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                suspense.resolve();
            }
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, newFallback);
            }
        }
        else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            }
            else {
                unmount(pendingBranch, parentComponent, suspense);
            }
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    isSVG);
                    setActiveBranch(suspense, newFallback);
                }
            }
            else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
                // force resolve
                suspense.resolve(true);
            }
            else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
                if (suspense.deps <= 0) {
                    suspense.resolve();
                }
            }
        }
    }
    else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            // root did not change, just normal patch
            patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG);
            setActiveBranch(suspense, newBranch);
        }
        else {
            // root node toggled
            // invoke @pending event
            const onPending = n2.props && n2.props.onPending;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onPending)) {
                onPending();
            }
            // mount pending branch in off-dom container
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG);
            if (suspense.deps <= 0) {
                // incoming branch has no async deps, resolve now.
                suspense.resolve();
            }
            else {
                const { timeout, pendingId } = suspense;
                if (timeout > 0) {
                    setTimeout(() => {
                        if (suspense.pendingId === pendingId) {
                            suspense.fallback(newFallback);
                        }
                    }, timeout);
                }
                else if (timeout === 0) {
                    suspense.fallback(newFallback);
                }
            }
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */
    if ( true && !hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    const timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false) {
            if ((true)) {
                if (!resume && !suspense.pendingBranch) {
                    throw new Error(`suspense.resolve() is called without a pending branch.`);
                }
                if (suspense.isUnmounted) {
                    throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
                }
            }
            const { vnode, activeBranch, pendingBranch, pendingId, effects, parentComponent, container } = suspense;
            if (suspense.isHydrating) {
                suspense.isHydrating = false;
            }
            else if (!resume) {
                const delayEnter = activeBranch &&
                    pendingBranch.transition &&
                    pendingBranch.transition.mode === 'out-in';
                if (delayEnter) {
                    activeBranch.transition.afterLeave = () => {
                        if (pendingId === suspense.pendingId) {
                            move(pendingBranch, container, anchor, 0 /* ENTER */);
                        }
                    };
                }
                // this is initial anchor on mount
                let { anchor } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) {
                    // move content from off-dom container to actual container
                    move(pendingBranch, container, anchor, 0 /* ENTER */);
                }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) {
                queuePostFlushCb(effects);
            }
            suspense.effects = [];
            // invoke @resolve event
            const onResolve = vnode.props && vnode.props.onResolve;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onResolve)) {
                onResolve();
            }
        },
        fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
                return;
            }
            const { vnode, activeBranch, parentComponent, container, isSVG } = suspense;
            // invoke @fallback event
            const onFallback = vnode.props && vnode.props.onFallback;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onFallback)) {
                onFallback();
            }
            const anchor = next(activeBranch);
            const mountFallback = () => {
                if (!suspense.isInFallback) {
                    return;
                }
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                isSVG);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) {
                activeBranch.transition.afterLeave = mountFallback;
            }
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
            true // shouldRemove
            );
            suspense.isInFallback = true;
            if (!delayEnter) {
                mountFallback();
            }
        },
        move(container, anchor, type) {
            suspense.activeBranch &&
                move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next() {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
            if (!suspense.pendingBranch) {
                return;
            }
            const hydratedEl = instance.vnode.el;
            suspense.deps++;
            instance
                .asyncDep.catch(err => {
                handleError(err, instance, 0 /* SETUP_FUNCTION */);
            })
                .then(asyncSetupResult => {
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted ||
                    suspense.isUnmounted ||
                    suspense.pendingId !== instance.suspenseId) {
                    return;
                }
                suspense.deps--;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode } = instance;
                if ((true)) {
                    pushWarningContext(vnode);
                }
                handleSetupResult(instance, asyncSetupResult);
                if (hydratedEl) {
                    // vnode may have been replaced if an update happened before the
                    // async dep is resolved.
                    vnode.el = hydratedEl;
                }
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, 
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), 
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) {
                    remove(placeholder);
                }
                updateHOCHostEl(instance, vnode.el);
                if ((true)) {
                    popWarningContext();
                }
                if (suspense.deps === 0) {
                    suspense.resolve();
                }
            });
        },
        unmount(parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
                unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            }
            if (suspense.pendingBranch) {
                unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
            }
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */
    const suspense = (vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, optimized, rendererInternals, true /* hydrating */));
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, (suspense.pendingBranch = vnode.ssContent), parentComponent, suspense, optimized);
    if (suspense.deps === 0) {
        suspense.resolve();
    }
    return result;
    /* eslint-enable no-restricted-globals */
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    let content;
    let fallback;
    if (shapeFlag & 32 /* SLOTS_CHILDREN */) {
        content = normalizeSuspenseSlot(children.default);
        fallback = normalizeSuspenseSlot(children.fallback);
    }
    else {
        content = normalizeSuspenseSlot(children);
        fallback = normalizeVNode(null);
    }
    return {
        content,
        fallback
    };
}
function normalizeSuspenseSlot(s) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
        s = s();
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (( true) && !singleChild) {
            warn(`<Suspense> slots expect a single root node.`);
        }
        s = singleChild;
    }
    return normalizeVNode(s);
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
            suspense.effects.push(...fn);
        }
        else {
            suspense.effects.push(fn);
        }
    }
    else {
        queuePostFlushCb(fn);
    }
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    const el = (vnode.el = branch.el);
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}

let isRenderingCompiledSlot = 0;
const setCompiledSlotRendering = (n) => (isRenderingCompiledSlot += n);
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
function renderSlot(slots, name, props = {}, 
// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback) {
    let slot = slots[name];
    if (( true) && slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` +
            `function. You need to mark this component with $dynamic-slots in the ` +
            `parent template.`);
        slot = () => [];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    isRenderingCompiledSlot++;
    const rendered = (openBlock(),
        createBlock(Fragment, { key: props.key }, slot ? slot(props) : fallback ? fallback() : [], slots._ === 1 /* STABLE */
            ? 64 /* STABLE_FRAGMENT */
            : -2 /* BAIL */));
    isRenderingCompiledSlot--;
    return rendered;
}

/**
 * Wrap a slot function to memoize current rendering instance
 * @private
 */
function withCtx(fn, ctx = currentRenderingInstance) {
    if (!ctx)
        return fn;
    const renderFnWithContext = (...args) => {
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we need to push a null block to
        // avoid that. This isn't necessary if rendering a compiled `<slot>`.
        if (!isRenderingCompiledSlot) {
            openBlock(true /* null block that disables tracking */);
        }
        const owner = currentRenderingInstance;
        setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(owner);
        if (!isRenderingCompiledSlot) {
            closeBlock();
        }
        return res;
    };
    renderFnWithContext._c = true;
    return renderFnWithContext;
}

// SFC scoped style ID management.
let currentScopeId = null;
const scopeIdStack = [];
/**
 * @private
 */
function pushScopeId(id) {
    scopeIdStack.push((currentScopeId = id));
}
/**
 * @private
 */
function popScopeId() {
    scopeIdStack.pop();
    currentScopeId = scopeIdStack[scopeIdStack.length - 1] || null;
}
/**
 * @private
 */
function withScopeId(id) {
    return ((fn) => withCtx(function () {
        pushScopeId(id);
        const res = fn.apply(this, arguments);
        popScopeId();
        return res;
    }));
}

function initProps(instance, rawProps, isStateful, // result of bitwise flag comparison
isSSR = false) {
    const props = {};
    const attrs = {};
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
    setFullProps(instance, rawProps, props, attrs);
    // validation
    if ((true)) {
        validateProps(props, instance);
    }
    if (isStateful) {
        // stateful
        instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
    }
    else {
        if (!instance.type.props) {
            // functional w/ optional props, props === attrs
            instance.props = attrs;
        }
        else {
            // functional w/ declared props
            instance.props = props;
        }
    }
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const [options] = instance.propsOptions;
    if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(( true) &&
        (instance.type.__hmrId ||
            (instance.parent && instance.parent.type.__hmrId))) &&
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16 /* FULL_PROPS */)) {
        if (patchFlag & 8 /* PROPS */) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
                        attrs[key] = value;
                    }
                    else {
                        const camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance);
                    }
                }
                else {
                    attrs[key] = value;
                }
            }
        }
    }
    else {
        // full props update.
        setFullProps(instance, rawProps, props, attrs);
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for (const key in rawCurrentProps) {
            if (!rawProps ||
                // for camelCase
                (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) &&
                    // it's possible the original props was passed in as kebab-case
                    // and converted to camelCase (#955)
                    ((kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) === key || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey)))) {
                if (options) {
                    if (rawPrevProps &&
                        // for camelCase
                        (rawPrevProps[key] !== undefined ||
                            // for kebab-case
                            rawPrevProps[kebabKey] !== undefined)) {
                        props[key] = resolvePropValue(options, rawProps || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ, key, undefined, instance);
                    }
                }
                else {
                    delete props[key];
                }
            }
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
                if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key)) {
                    delete attrs[key];
                }
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set" /* SET */, '$attrs');
    if (( true) && rawProps) {
        validateProps(props, instance);
    }
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    if (rawProps) {
        for (const key in rawProps) {
            const value = rawProps[key];
            // key, ref are reserved and never passed down
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                continue;
            }
            // prop option names are camelized during normalization, so to support
            // kebab -> camel conversion here we need to camelize the key.
            let camelKey;
            if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key)))) {
                props[camelKey] = value;
            }
            else if (!isEmitListener(instance.emitsOptions, key)) {
                // Any non-declared (either as a prop or an emitted event) props are put
                // into a separate `attrs` object for spreading. Make sure to preserve
                // original key casing
                attrs[key] = value;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
        for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, rawCurrentProps[key], instance);
        }
    }
}
function resolvePropValue(options, props, key, value, instance) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
                setCurrentInstance(instance);
                value = defaultValue(props);
                setCurrentInstance(null);
            }
            else {
                value = defaultValue;
            }
        }
        // boolean casting
        if (opt[0 /* shouldCast */]) {
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(props, key) && !hasDefault) {
                value = false;
            }
            else if (opt[1 /* shouldCastTrue */] &&
                (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
                value = true;
            }
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    if (!appContext.deopt && comp.__props) {
        return comp.__props;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        const extendProps = (raw) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
            if (keys)
                needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
            extendProps(comp.extends);
        }
        if (comp.mixins) {
            comp.mixins.forEach(extendProps);
        }
    }
    if (!raw && !hasExtends) {
        return (comp.__props = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
        for (let i = 0; i < raw.length; i++) {
            if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
                warn(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);
            if (validatePropName(normalizedKey)) {
                normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
            }
        }
    }
    else if (raw) {
        if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
            warn(`invalid props options`, raw);
        }
        for (const key in raw) {
            const normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = (normalized[normalizedKey] =
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? { type: opt } : opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */] =
                        stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
                        needCastKeys.push(normalizedKey);
                    }
                }
            }
        }
    }
    return (comp.__props = [normalized, needCastKeys]);
}
function validatePropName(key) {
    if (key[0] !== '$') {
        return true;
    }
    else if ((true)) {
        warn(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
        for (let i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
                return i;
            }
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
}
/**
 * dev only
 */
function validateProps(props, instance) {
    const rawValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
        let opt = options[key];
        if (opt == null)
            continue;
        validateProp(key, rawValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawValues, key));
    }
}
/**
 * dev only
 */
function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) {
        return;
    }
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) {
        warn('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
}
const isSimpleType = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol');
/**
 * dev only
 */
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') {
            valid = value instanceof type;
        }
    }
    else if (expectedType === 'Object') {
        valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
    }
    else if (expectedType === 'Array') {
        valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
    }
    else {
        valid = value instanceof type;
    }
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */
function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` +
        ` Expected ${expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(', ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
        message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
        message += `with value ${receivedValue}.`;
    }
    return message;
}
/**
 * dev only
 */
function styleValue(value, type) {
    if (type === 'String') {
        return `"${value}"`;
    }
    else if (type === 'Number') {
        return `${Number(value)}`;
    }
    else {
        return `${value}`;
    }
}
/**
 * dev only
 */
function isExplicable(type) {
    const explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(elem => type.toLowerCase() === elem);
}
/**
 * dev only
 */
function isBoolean(...args) {
    return args.some(elem => elem.toLowerCase() === 'boolean');
}

function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh ||
            (hook.__weh = (...args) => {
                if (target.isUnmounted) {
                    return;
                }
                // disable tracking inside all lifecycle hooks
                // since they can potentially be called inside effects.
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
                // Set currentInstance during hook invocation.
                // This assumes the hook does not synchronously trigger other hooks, which
                // can only be false when the user does something really funky.
                setCurrentInstance(target);
                const res = callWithAsyncErrorHandling(hook, target, type, args);
                setCurrentInstance(null);
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
                return res;
            });
        if (prepend) {
            hooks.unshift(wrappedHook);
        }
        else {
            hooks.push(wrappedHook);
        }
        return wrappedHook;
    }
    else if ((true)) {
        const apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn(`${apiName} is called when there is no active component instance to be ` +
            `associated with. ` +
            `Lifecycle injection APIs can only be used during execution of setup().` +
            ( ` If you are using async setup(), make sure to register lifecycle ` +
                    `hooks before the first await statement.`
                ));
    }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => 
// post-create lifecycle registrations are noops during SSR
!isInSSRComponentSetup && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */);
const onMounted = createHook("m" /* MOUNTED */);
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */);
const onUpdated = createHook("u" /* UPDATED */);
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */);
const onUnmounted = createHook("um" /* UNMOUNTED */);
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */);
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */);
const onErrorCaptured = (hook, target = currentInstance) => {
    injectHook("ec" /* ERROR_CAPTURED */, hook, target);
};

// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
        warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` +
            `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` +
            `supports \`watch(source, cb, options?) signature.`);
    }
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ, instance = currentInstance) {
    if (( true) && !cb) {
        if (immediate !== undefined) {
            warn(`watch() "immediate" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
        if (deep !== undefined) {
            warn(`watch() "deep" option is only respected when using the ` +
                `watch(source, callback, options?) signature.`);
        }
    }
    const warnInvalidSource = (s) => {
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` +
            `a reactive object, or an array of these types.`);
    };
    let getter;
    let forceTrigger = false;
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
        getter = () => source.value;
        forceTrigger = !!source._shallow;
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
        getter = () => source;
        deep = true;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
        getter = () => source.map(s => {
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
                return s.value;
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
                return traverse(s);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
                return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */);
            }
            else {
                ( true) && warnInvalidSource(s);
            }
        });
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        if (cb) {
            // getter with cb
            getter = () => callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */);
        }
        else {
            // no cb -> simple effect
            getter = () => {
                if (instance && instance.isUnmounted) {
                    return;
                }
                if (cleanup) {
                    cleanup();
                }
                return callWithErrorHandling(source, instance, 3 /* WATCH_CALLBACK */, [onInvalidate]);
            };
        }
    }
    else {
        getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
        ( true) && warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
    }
    let cleanup;
    const onInvalidate = (fn) => {
        cleanup = runner.options.onStop = () => {
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */);
        };
    };
    let oldValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) ? [] : INITIAL_WATCHER_VALUE;
    const job = () => {
        if (!runner.active) {
            return;
        }
        if (cb) {
            // watch(source, cb)
            const newValue = runner();
            if (deep || forceTrigger || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) {
                // cleanup before running cb again
                if (cleanup) {
                    cleanup();
                }
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onInvalidate
                ]);
                oldValue = newValue;
            }
        }
        else {
            // watchEffect
            runner();
        }
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') {
        scheduler = job;
    }
    else if (flush === 'post') {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    }
    else {
        // default: 'pre'
        scheduler = () => {
            if (!instance || instance.isMounted) {
                queuePreFlushCb(job);
            }
            else {
                // with 'pre' option, the first call must happen before
                // the component is mounted so it is called synchronously.
                job();
            }
        };
    }
    const runner = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(getter, {
        lazy: true,
        onTrack,
        onTrigger,
        scheduler
    });
    recordInstanceBoundEffect(runner);
    // initial run
    if (cb) {
        if (immediate) {
            job();
        }
        else {
            oldValue = runner();
        }
    }
    else if (flush === 'post') {
        queuePostRenderEffect(runner, instance && instance.suspense);
    }
    else {
        runner();
    }
    return () => {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(runner);
        if (instance) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.effects, runner);
        }
    };
}
// this.$watch
function instanceWatch(source, cb, options) {
    const publicThis = this.proxy;
    const getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)
        ? () => publicThis[source]
        : source.bind(publicThis);
    return doWatch(getter, cb.bind(publicThis), options, this);
}
function traverse(value, seen = new Set()) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
        traverse(value.value, seen);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
        value.forEach((v) => {
            traverse(v, seen);
        });
    }
    else {
        for (const key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(() => {
        state.isMounted = true;
    });
    onBeforeUnmount(() => {
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) {
                return;
            }
            // warn multiple elements
            if (( true) && children.length > 1) {
                warn('<transition> can only be used on a single element or component. Use ' +
                    '<transition-group> for lists.');
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
            const { mode } = rawProps;
            // check mode
            if (( true) && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
                warn(`invalid <transition> mode: ${mode}`);
            }
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) {
                return emptyPlaceholder(child);
            }
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
                return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) {
                    prevTransitionKey = key;
                }
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild &&
                oldInnerChild.type !== Comment &&
                (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = () => {
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                }
                else if (mode === 'in-out') {
                    leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                        const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                        leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                        // early removal callback
                        el._leaveCb = () => {
                            earlyRemove();
                            el._leaveCb = undefined;
                            delete enterHooks.delayedLeave;
                        };
                        enterHooks.delayedLeave = delayedLeave;
                    };
                }
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args) => {
        hook &&
            callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */, args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) {
                    hook = onBeforeAppear || onBeforeEnter;
                }
                else {
                    return;
                }
            }
            // for same element (v-show)
            if (el._leaveCb) {
                el._leaveCb(true /* cancelled */);
            }
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode &&
                isSameVNodeType(vnode, leavingVNode) &&
                leavingVNode.el._leaveCb) {
                // force early removal (not cancelled)
                leavingVNode.el._leaveCb();
            }
            callHook(hook, [el]);
        },
        enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                }
                else {
                    return;
                }
            }
            let called = false;
            const done = (el._enterCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                if (cancelled) {
                    callHook(cancelHook, [el]);
                }
                else {
                    callHook(afterHook, [el]);
                }
                if (hooks.delayedLeave) {
                    hooks.delayedLeave();
                }
                el._enterCb = undefined;
            });
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        leave(el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) {
                el._enterCb(true /* cancelled */);
            }
            if (state.isUnmounting) {
                return remove();
            }
            callHook(onBeforeLeave, [el]);
            let called = false;
            const done = (el._leaveCb = (cancelled) => {
                if (called)
                    return;
                called = true;
                remove();
                if (cancelled) {
                    callHook(onLeaveCancelled, [el]);
                }
                else {
                    callHook(onAfterLeave, [el]);
                }
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) {
                    delete leavingVNodesCache[key];
                }
            });
            leavingVNodesCache[key] = vnode;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) {
                    done();
                }
            }
            else {
                done();
            }
        },
        clone(vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode)
        ? vnode.children
            ? vnode.children[0]
            : undefined
        : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */ && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
    }
    else if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
    else {
        vnode.transition = hooks;
    }
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */)
                keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        }
        // comment placeholders should be skipped, e.g. v-if
        else if (keepComment || child.type !== Comment) {
            ret.push(child);
        }
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-top
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2 /* BAIL */;
        }
    }
    return ret;
}

const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    inheritRef: true,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(props, { slots }) {
        const cache = new Map();
        const keys = new Set();
        let current = null;
        const instance = getCurrentInstance();
        const parentSuspense = instance.suspense;
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */, parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, optimized);
            queuePostRenderEffect(() => {
                instance.isDeactivated = false;
                if (instance.a) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
            }, parentSuspense);
        };
        sharedContext.deactivate = (vnode) => {
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */, parentSuspense);
            queuePostRenderEffect(() => {
                if (instance.da) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
                }
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) {
                    invokeVNodeHook(vnodeHook, instance.parent, vnode);
                }
                instance.isDeactivated = true;
            }, parentSuspense);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key) => {
                const name = getName(vnode.type);
                if (name && (!filter || !filter(name))) {
                    pruneCacheEntry(key);
                }
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) {
                unmount(cached);
            }
            else if (current) {
                // current active instance should no longer be kept-alive.
                // we can't unmount it now but it might be later, so reset its flag now.
                resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(() => [props.include, props.exclude], ([include, exclude]) => {
            include && pruneCache(name => matches(include, name));
            exclude && pruneCache(name => !matches(exclude, name));
        }, 
        // prune post-render after `current` has been updated
        { flush: 'post' });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = () => {
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) {
                cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
            cache.forEach(cached => {
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return () => {
            pendingCacheKey = null;
            if (!slots.default) {
                return null;
            }
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                if ((true)) {
                    warn(`KeepAlive should contain exactly one component child.`);
                }
                current = null;
                return children;
            }
            else if (!isVNode(rawVNode) ||
                (!(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */) &&
                    !(rawVNode.shapeFlag & 128 /* SUSPENSE */))) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getName(comp);
            const { include, exclude, max } = props;
            if ((include && (!name || !matches(include, name))) ||
                (exclude && name && matches(exclude, name))) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */) {
                    rawVNode.ssContent = vnode;
                }
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) {
                    // recursively update transition hooks on subTree
                    setTransitionHooks(vnode, vnode.transition);
                }
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            }
            else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) {
                    pruneCacheEntry(keys.values().next().value);
                }
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function getName(comp) {
    return comp.displayName || comp.name;
}
function matches(pattern, name) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
        return pattern.some((p) => matches(p, name));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
        return pattern.split(',').indexOf(name) > -1;
    }
    else if (pattern.test) {
        return pattern.test(name);
    }
    /* istanbul ignore next */
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */, target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */, target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc ||
        (hook.__wdc = () => {
            // only fire the hook if the target instance is NOT in a deactivated branch.
            let current = target;
            while (current) {
                if (current.isDeactivated) {
                    return;
                }
                current = current.parent;
            }
            hook();
        });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
                injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true /* prepend */);
    onUnmounted(() => {
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
        shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */;
    }
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
        shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */;
    }
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */ ? vnode.ssContent : vnode;
}

const isInternalKey = (key) => key[0] === '_' || key === '$stable';
const normalizeSlotValue = (value) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value)];
const normalizeSlot = (key, rawSlot, ctx) => withCtx((props) => {
    if (( true) && currentInstance) {
        warn(`Slot "${key}" invoked outside of the render function: ` +
            `this will not track dependencies used in the slot. ` +
            `Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(props));
}, ctx);
const normalizeObjectSlots = (rawSlots, slots) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
        if (isInternalKey(key))
            continue;
        const value = rawSlots[key];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
        }
        else if (value != null) {
            if ((true)) {
                warn(`Non-function value encountered for slot "${key}". ` +
                    `Prefer function slots for better performance.`);
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children) => {
    if (( true) && !isKeepAlive(instance.vnode)) {
        warn(`Non-function value encountered for default slot. ` +
            `Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            instance.slots = children;
            // make compiler marker non-enumerable
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
        }
        else {
            normalizeObjectSlots(children, (instance.slots = {}));
        }
    }
    else {
        instance.slots = {};
        if (children) {
            normalizeVNodeSlots(instance, children);
        }
    }
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (( true) && isHmrUpdating) {
                // Parent was HMR updated so slot content may have changed.
                // force update slots and mark instance for hmr as well
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
            }
            else if (type === 1 /* STABLE */) {
                // compiled AND stable.
                // no need to update, and skip stale slots removal.
                needDeletionCheck = false;
            }
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
            }
        }
        else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    }
    else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for (const key in slots) {
            if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
                delete slots[key];
            }
        }
    }
};

/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/
const isBuiltInDirective = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
        warn('Do not use built-in directive ids as custom directive id: ' + name);
    }
}
/**
 * Adds directives to a VNode.
 */
function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        ( true) && warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ] = directives[i];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
            dir = {
                mounted: dir,
                updated: dir
            };
        }
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
        }
        const hook = binding.dir[name];
        if (hook) {
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
        }
    }
}

function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
            errorHandler: undefined,
            warnHandler: undefined
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null)
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
            ( true) && warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = (context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            version,
            get config() {
                return context.config;
            },
            set config(v) {
                if ((true)) {
                    warn(`app.config cannot be replaced. Modify individual options instead.`);
                }
            },
            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    ( true) && warn(`Plugin has already been applied to target app.`);
                }
                else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                }
                else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                }
                else if ((true)) {
                    warn(`A plugin must either be a function or an object with an "install" ` +
                        `function.`);
                }
                return app;
            },
            mixin(mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) {
                        context.mixins.push(mixin);
                        // global mixin with props/emits de-optimizes props/emits
                        // normalization caching.
                        if (mixin.props || mixin.emits) {
                            context.deopt = true;
                        }
                    }
                    else if ((true)) {
                        warn('Mixin has already been applied to target app' +
                            (mixin.name ? `: ${mixin.name}` : ''));
                    }
                }
                else if ((true)) {
                    warn('Mixins are only available in builds supporting Options API');
                }
                return app;
            },
            component(name, component) {
                if ((true)) {
                    validateComponentName(name, context.config);
                }
                if (!component) {
                    return context.components[name];
                }
                if (( true) && context.components[name]) {
                    warn(`Component "${name}" has already been registered in target app.`);
                }
                context.components[name] = component;
                return app;
            },
            directive(name, directive) {
                if ((true)) {
                    validateDirectiveName(name);
                }
                if (!directive) {
                    return context.directives[name];
                }
                if (( true) && context.directives[name]) {
                    warn(`Directive "${name}" has already been registered in target app.`);
                }
                context.directives[name] = directive;
                return app;
            },
            mount(rootContainer, isHydrate) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    // HMR root reload
                    if ((true)) {
                        context.reload = () => {
                            render(cloneVNode(vnode), rootContainer);
                        };
                    }
                    if (isHydrate && hydrate) {
                        hydrate(vnode, rootContainer);
                    }
                    else {
                        render(vnode, rootContainer);
                    }
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    if (true) {
                        devtoolsInitApp(app, version);
                    }
                    return vnode.component.proxy;
                }
                else if ((true)) {
                    warn(`App has already been mounted.\n` +
                        `If you want to remount the same app, move your app creation logic ` +
                        `into a factory function and create fresh app instances for each ` +
                        `mount - e.g. \`const createMyApp = () => createApp(App)\``);
                }
            },
            unmount() {
                if (isMounted) {
                    render(null, app._container);
                    if (true) {
                        devtoolsUnmountApp(app);
                    }
                }
                else if ((true)) {
                    warn(`Cannot unmount an app that is not mounted.`);
                }
            },
            provide(key, value) {
                if (( true) && key in context.provides) {
                    warn(`App already provides property with key "${String(key)}". ` +
                        `It will be overwritten with the new value.`);
                }
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        });
        return app;
    };
}

let hasMismatch = false;
const isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
const isComment = (node) => node.nodeType === 8 /* COMMENT */;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container) => {
        if (( true) && !container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` +
                `Performing full mount instead.`);
            patch(null, vnode, container);
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null);
        flushPostFlushCbs();
        if (hasMismatch && !false) {
            // this error should show up in production
            console.error(`Hydration completed but contains mismatches.`);
        }
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, optimized = false) => {
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = () => handleMismatch(node, vnode, parentComponent, parentSuspense, isFragmentStart);
        const { type, ref, shapeFlag } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch (type) {
            case Text:
                if (domType !== 3 /* TEXT */) {
                    nextNode = onMismatch();
                }
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        ( true) &&
                            warn(`Hydration text mismatch:` +
                                `\n- Client: ${JSON.stringify(node.data)}` +
                                `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */ || isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = nextSibling(node);
                }
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */) {
                    nextNode = onMismatch();
                }
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for (let i = 0; i < vnode.staticCount; i++) {
                        if (needToAdoptContent)
                            vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) {
                            vnode.anchor = nextNode;
                        }
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) {
                    nextNode = onMismatch();
                }
                else {
                    nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, optimized);
                }
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    if (domType !== 1 /* ELEMENT */ ||
                        vnode.type !== node.tagName.toLowerCase()) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, optimized);
                    }
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    const container = parentNode(node);
                    const hydrateComponent = () => {
                        mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    };
                    // async component
                    const loadAsync = vnode.type.__asyncLoader;
                    if (loadAsync) {
                        loadAsync().then(hydrateComponent);
                    }
                    else {
                        hydrateComponent();
                    }
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart
                        ? locateClosingAsyncAnchor(node)
                        : nextSibling(node);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    if (domType !== 8 /* COMMENT */) {
                        nextNode = onMismatch();
                    }
                    else {
                        nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, optimized, rendererInternals, hydrateChildren);
                    }
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), optimized, rendererInternals, hydrateNode);
                }
                else if ((true)) {
                    warn('Invalid HostVNode type:', type, `(${typeof type})`);
                }
        }
        if (ref != null && parentComponent) {
            setRef(ref, null, parentComponent, parentSuspense, vnode);
        }
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { props, patchFlag, shapeFlag, dirs } = vnode;
        // skip props & children if this is hoisted static nodes
        if (patchFlag !== -1 /* HOISTED */) {
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                if (!optimized ||
                    (patchFlag & 16 /* FULL_PROPS */ ||
                        patchFlag & 32 /* HYDRATE_EVENTS */)) {
                    for (const key in props) {
                        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                            patchProp(el, key, null, props[key]);
                        }
                    }
                }
                else if (props.onClick) {
                    // Fast path for click listeners (which is most often) to avoid
                    // iterating through props.
                    patchProp(el, 'onClick', null, props.onClick);
                }
            }
            // vnode / directive hooks
            let vnodeHooks;
            if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
                queueEffectWithSuspense(() => {
                    vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                    dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
                }, parentSuspense);
            }
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ &&
                // skip if element has innerHTML / textContent
                !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, optimized);
                let hasWarned = false;
                while (next) {
                    hasMismatch = true;
                    if (( true) && !hasWarned) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` +
                            `server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            }
            else if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    ( true) &&
                        warn(`Hydration text content mismatch in <${vnode.type}>:\n` +
                            `- Client: ${el.textContent}\n` +
                            `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, optimized) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for (let i = 0; i < l; i++) {
            const vnode = optimized
                ? children[i]
                : (children[i] = normalizeVNode(children[i]));
            if (node) {
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, optimized);
            }
            else {
                hasMismatch = true;
                if (( true) && !hasWarned) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` +
                        `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container));
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, optimized) => {
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, optimized);
        if (next && isComment(next) && next.data === ']') {
            return nextSibling((vnode.anchor = next));
        }
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert((vnode.anchor = createComment(`]`)), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, isFragment) => {
        hasMismatch = true;
        ( true) &&
            warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */
                ? `(text)`
                : isComment(node) && node.data === '['
                    ? `(start of fragment)`
                    : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while (true) {
                const next = nextSibling(node);
                if (next && next !== end) {
                    remove(next);
                }
                else {
                    break;
                }
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container));
        return next;
    };
    const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[')
                    match++;
                if (node.data === ']') {
                    if (match === 0) {
                        return nextSibling(node);
                    }
                    else {
                        match--;
                    }
                }
            }
        }
        return node;
    };
    return [hydrate, hydrateNode];
}

let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        perf.mark(`vue-${type}-${instance.uid}`);
    }
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
}
function isSupported() {
    if (supported !== undefined) {
        return supported;
    }
    /* eslint-disable no-restricted-globals */
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else {
        supported = false;
    }
    /* eslint-enable no-restricted-globals */
    return supported;
}

/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */
function initFeatureFlags() {
    let needWarn = false;
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (( true) && needWarn) {
        console.warn(`You are running the esm-bundler build of Vue. It is recommended to ` +
            `configure your bundler to explicitly replace feature flag globals ` +
            `with boolean literals to get proper tree-shaking in the final bundle. ` +
            `See http://link.vuejs.org/feature-flags for more details.`);
    }
}

const prodEffectOptions = {
    scheduler: queueJob,
    // #1801, #2043 component render effects should allow recursive updates
    allowRecurse: true
};
function createDevEffectOptions(instance) {
    return {
        scheduler: queueJob,
        allowRecurse: true,
        onTrack: instance.rtc ? e => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e) : void 0,
        onTrigger: instance.rtg ? e => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e) : void 0
    };
}
const queuePostRenderEffect =  queueEffectWithSuspense
    ;
const setRef = (rawRef, oldRawRef, parentComponent, parentSuspense, vnode) => {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentComponent, parentSuspense, vnode));
        return;
    }
    let value;
    if (!vnode) {
        value = null;
    }
    else {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */) {
            value = vnode.component.exposed || vnode.component.proxy;
        }
        else {
            value = vnode.el;
        }
    }
    const { i: owner, r: ref } = rawRef;
    if (( true) && !owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` +
            `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
    const setupState = owner.setupState;
    // unset old ref
    if (oldRef != null && oldRef !== ref) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
                setupState[oldRef] = null;
            }
        }
        else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
            oldRef.value = null;
        }
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref)) {
        const doSet = () => {
            refs[ref] = value;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
                setupState[ref] = value;
            }
        };
        // #1789: for non-null values, set them after render
        // null values means this is unmount and it should not overwrite another
        // ref with the same key
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref)) {
        const doSet = () => {
            ref.value = value;
        };
        if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
        }
        else {
            doSet();
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
        callWithErrorHandling(ref, parentComponent, 12 /* FUNCTION_REF */, [
            value,
            refs
        ]);
    }
    else if ((true)) {
        warn('Invalid template ref type:', value, `(${typeof value})`);
    }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    // compile-time feature flags check
    {
        initFeatureFlags();
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, forcePatchProp: hostForcePatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) {
                    mountStaticNode(n2, container, anchor, isSVG);
                }
                else if ((true)) {
                    patchStaticNode(n1, n2, container, isSVG);
                }
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */) {
                    processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 6 /* COMPONENT */) {
                    processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else if (shapeFlag & 64 /* TELEPORT */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ( shapeFlag & 128 /* SUSPENSE */) {
                    type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals);
                }
                else if ((true)) {
                    warn('Invalid VNode type:', type, `(${typeof type})`);
                }
        }
        // set ref
        if (ref != null && parentComponent) {
            setRef(ref, n1 && n1.ref, parentComponent, parentSuspense, n2);
        }
    };
    const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        }
        else {
            const el = (n2.el = n1.el);
            if (n2.children !== n1.children) {
                hostSetText(el, n2.children);
            }
        }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
            hostInsert((n2.el = hostCreateComment(n2.children || '')), container, anchor);
        }
        else {
            // there's no support for dynamic comments
            n2.el = n1.el;
        }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    /**
     * Dev / HMR only
     */
    const patchStaticNode = (n1, n2, container, isSVG) => {
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        }
        else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    /**
     * Dev / HMR only
     */
    const moveStaticNode = (vnode, container, anchor) => {
        let cur = vnode.el;
        const end = vnode.anchor;
        while (cur && cur !== end) {
            const next = hostNextSibling(cur);
            hostInsert(cur, container, anchor);
            cur = next;
        }
        hostInsert(end, container, anchor);
    };
    /**
     * Dev / HMR only
     */
    const removeStaticNode = (vnode) => {
        let cur = vnode.el;
        while (cur && cur !== vnode.anchor) {
            const next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(vnode.anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) {
            mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            patchElement(n1, n2, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, scopeId, patchFlag, dirs } = vnode;
        if (false /* HOISTED */) {}
        else {
            el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is);
            // mount children first, since some props may rely on child content
            // being already rendered, e.g. `<select value>`
            if (shapeFlag & 8 /* TEXT_CHILDREN */) {
                hostSetElementText(el, vnode.children);
            }
            else if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', optimized || !!vnode.dynamicChildren);
            }
            if (dirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'created');
            }
            // props
            if (props) {
                for (const key in props) {
                    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
                        hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
                if ((vnodeHook = props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parentComponent, vnode);
                }
            }
            // scopeId
            setScopeId(el, scopeId, vnode, parentComponent);
        }
        if (true) {
            Object.defineProperty(el, '__vnode', {
                value: vnode,
                enumerable: false
            });
            Object.defineProperty(el, '__vueParentComponent', {
                value: parentComponent,
                enumerable: false
            });
        }
        if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
            transition &&
            !transition.persisted;
        if (needCallTransitionHooks) {
            transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) ||
            needCallTransitionHooks ||
            dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
        }
    };
    const setScopeId = (el, scopeId, vnode, parentComponent) => {
        if (scopeId) {
            hostSetScopeId(el, scopeId);
        }
        if (parentComponent) {
            const treeOwnerId = parentComponent.type.__scopeId;
            // vnode's own scopeId and the current patched component's scopeId is
            // different - this is a slot content node.
            if (treeOwnerId && treeOwnerId !== scopeId) {
                hostSetScopeId(el, treeOwnerId + '-s');
            }
            let subTree = parentComponent.subTree;
            if (( true) && subTree.type === Fragment) {
                subTree =
                    filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
                setScopeId(el, parentComponent.vnode.scopeId, parentComponent.vnode, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
            const child = (children[i] = optimized
                ? cloneIfMounted(children[i])
                : normalizeVNode(children[i]));
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, optimized) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */;
        const oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        const newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        let vnodeHook;
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        }
        if ( true && isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */) {
                // element props contain dynamic keys, full diff needed
                patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            }
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */) {
                    if (oldProps.class !== newProps.class) {
                        hostPatchProp(el, 'class', null, newProps.class, isSVG);
                    }
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */) {
                    hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                }
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for (let i = 0; i < propsToUpdate.length; i++) {
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev ||
                            (hostForcePatchProp && hostForcePatchProp(el, key))) {
                            hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                        }
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */) {
                if (n1.children !== n2.children) {
                    hostSetElementText(el, n2.children);
                }
            }
        }
        else if (!optimized && dynamicChildren == null) {
            // unoptimized, full diff
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG);
            if ( true &&
                parentComponent &&
                parentComponent.type.__hmrId) {
                traverseStaticChildren(n1, n2);
            }
        }
        else if (!optimized) {
            // full diff
            patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
                dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
            }, parentSuspense);
        }
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG) => {
        for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = 
            // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            oldVNode.type === Fragment ||
                // - In the case of different nodes, there is going to be a replacement
                // which also requires the correct parent container
                !isSameVNodeType(oldVNode, newVNode) ||
                // - In the case of a component, it could contain anything.
                oldVNode.shapeFlag & 6 /* COMPONENT */ ||
                oldVNode.shapeFlag & 64 /* TELEPORT */
                ? hostParentNode(oldVNode.el)
                : // In other cases, the parent container is not actually used so we
                    // just pass the block element here to avoid a DOM parentNode call.
                    fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
            for (const key in newProps) {
                // empty string is not valid prop
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key))
                    continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev ||
                    (hostForcePatchProp && hostForcePatchProp(el, key))) {
                    hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                }
            }
            if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
                for (const key in oldProps) {
                    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && !(key in newProps)) {
                        hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(''));
        const fragmentEndAnchor = (n2.anchor = n1 ? n1.anchor : hostCreateText(''));
        let { patchFlag, dynamicChildren } = n2;
        if (patchFlag > 0) {
            optimized = true;
        }
        if (( true) && isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
        }
        else {
            if (patchFlag > 0 &&
                patchFlag & 64 /* STABLE_FRAGMENT */ &&
                dynamicChildren) {
                // a stable fragment (template root or <template v-for>) doesn't need to
                // patch children order, but it may contain dynamicChildren.
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG);
                if (( true) && parentComponent && parentComponent.type.__hmrId) {
                    traverseStaticChildren(n1, n2);
                }
                else if (
                // #2080 if the stable fragment has a key, it's a <template v-for> that may
                //  get moved around. Make sure all root level vnodes inherit el.
                // #2134 or if it's a component root, it may also get moved around
                // as the component is being moved.
                n2.key != null ||
                    (parentComponent && n2 === parentComponent.subTree)) {
                    traverseStaticChildren(n1, n2, true /* shallow */);
                }
            }
            else {
                // keyed / unkeyed, or manual fragments.
                // for keyed & unkeyed, since they are compiler generated from v-for,
                // each child is guaranteed to be a block so the fragment will never
                // have dynamicChildren.
                patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */) {
                parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            }
            else {
                mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
            }
        }
        else {
            updateComponent(n1, n2, optimized);
        }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense));
        if ( true && instance.type.__hmrId) {
            registerHMR(instance);
        }
        if ((true)) {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
        }
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
        }
        // resolve props and slots for setup context
        if ((true)) {
            startMeasure(instance, `init`);
        }
        setupComponent(instance);
        if ((true)) {
            endMeasure(instance, `init`);
        }
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if ( instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = (instance.subTree = createVNode(Comment));
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        if ((true)) {
            popWarningContext();
            endMeasure(instance, `mount`);
        }
    };
    const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (
                instance.asyncDep &&
                !instance.asyncResolved) {
                // async & still pending - just update props and slots
                // since the component's reactive effect for render isn't set-up yet
                if ((true)) {
                    pushWarningContext(n2);
                }
                updateComponentPreRender(instance, n2, optimized);
                if ((true)) {
                    popWarningContext();
                }
                return;
            }
            else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect runner.
                instance.update();
            }
        }
        else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        // create reactive effect for rendering
        instance.update = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(function componentEffect() {
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                // beforeMount hook
                if (bm) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
                }
                // onVnodeBeforeMount
                if ((vnodeHook = props && props.onVnodeBeforeMount)) {
                    invokeVNodeHook(vnodeHook, parent, initialVNode);
                }
                // render
                if ((true)) {
                    startMeasure(instance, `render`);
                }
                const subTree = (instance.subTree = renderComponentRoot(instance));
                if ((true)) {
                    endMeasure(instance, `render`);
                }
                if (el && hydrateNode) {
                    if ((true)) {
                        startMeasure(instance, `hydrate`);
                    }
                    // vnode has adopted host node - perform hydration instead of mount.
                    hydrateNode(initialVNode.el, subTree, instance, parentSuspense);
                    if ((true)) {
                        endMeasure(instance, `hydrate`);
                    }
                }
                else {
                    if ((true)) {
                        startMeasure(instance, `patch`);
                    }
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    if ((true)) {
                        endMeasure(instance, `patch`);
                    }
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) {
                    queuePostRenderEffect(m, parentSuspense);
                }
                // onVnodeMounted
                if ((vnodeHook = props && props.onVnodeMounted)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, initialVNode);
                    }, parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                const { a } = instance;
                if (a &&
                    initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
                    queuePostRenderEffect(a, parentSuspense);
                }
                instance.isMounted = true;
            }
            else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next, bu, u, parent, vnode } = instance;
                let originNext = next;
                let vnodeHook;
                if ((true)) {
                    pushWarningContext(next || instance.vnode);
                }
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                }
                else {
                    next = vnode;
                }
                // beforeUpdate hook
                if (bu) {
                    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
                }
                // onVnodeBeforeUpdate
                if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
                    invokeVNodeHook(vnodeHook, parent, next, vnode);
                }
                // render
                if ((true)) {
                    startMeasure(instance, `render`);
                }
                const nextTree = renderComponentRoot(instance);
                if ((true)) {
                    endMeasure(instance, `render`);
                }
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                if ((true)) {
                    startMeasure(instance, `patch`);
                }
                patch(prevTree, nextTree, 
                // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), 
                // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                if ((true)) {
                    endMeasure(instance, `patch`);
                }
                next.el = nextTree.el;
                if (originNext === null) {
                    // self-triggered update. In case of HOC, update parent component
                    // vnode el. HOC is indicated by parent instance's subTree pointing
                    // to child component's vnode
                    updateHOCHostEl(instance, nextTree.el);
                }
                // updated hook
                if (u) {
                    queuePostRenderEffect(u, parentSuspense);
                }
                // onVnodeUpdated
                if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
                    queuePostRenderEffect(() => {
                        invokeVNodeHook(vnodeHook, parent, next, vnode);
                    }, parentSuspense);
                }
                if (true) {
                    devtoolsComponentUpdated(instance);
                }
                if ((true)) {
                    popWarningContext();
                }
            }
        }, ( true) ? createDevEffectOptions(instance) : 0);
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children);
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
            else if (patchFlag & 256 /* UNKEYED_FRAGMENT */) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
                hostSetElementText(container, c2);
            }
        }
        else {
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */) {
                // prev children was array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    // two arrays, cannot assume anything, do full diff
                    patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
                else {
                    // no new children, just unmount old
                    unmountChildren(c1, parentComponent, parentSuspense, true);
                }
            }
            else {
                // prev children was text OR null
                // new children is array OR null
                if (prevShapeFlag & 8 /* TEXT_CHILDREN */) {
                    hostSetElementText(container, '');
                }
                // mount new if array
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            }
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
            const nextChild = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, optimized);
        }
        if (oldLength > newLength) {
            // remove old
            unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        }
        else {
            // mount new
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, commonLength);
        }
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = (c2[i] = optimized
                ? cloneIfMounted(c2[i])
                : normalizeVNode(c2[i]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = (c2[e2] = optimized
                ? cloneIfMounted(c2[e2])
                : normalizeVNode(c2[e2]));
            if (isSameVNodeType(n1, n2)) {
                patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, optimized);
            }
            else {
                break;
            }
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while (i <= e2) {
                    patch(null, (c2[i] = optimized
                        ? cloneIfMounted(c2[i])
                        : normalizeVNode(c2[i])), container, anchor, parentComponent, parentSuspense, isSVG);
                    i++;
                }
            }
        }
        // 4. common sequence + unmount
        // (a b) c
        // (a b)
        // i = 2, e1 = 2, e2 = 1
        // a (b c)
        // (b c)
        // i = 0, e1 = 0, e2 = -1
        else if (i > e2) {
            while (i <= e1) {
                unmount(c1[i], parentComponent, parentSuspense, true);
                i++;
            }
        }
        // 5. unknown sequence
        // [i ... e1 + 1]: a b [c d e] f g
        // [i ... e2 + 1]: a b [e d c h] f g
        // i = 2, e1 = 4, e2 = 5
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for (i = s2; i <= e2; i++) {
                const nextChild = (c2[i] = optimized
                    ? cloneIfMounted(c2[i])
                    : normalizeVNode(c2[i]));
                if (nextChild.key != null) {
                    if (( true) && keyToNewIndexMap.has(nextChild.key)) {
                        warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    }
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
                newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) {
                    newIndex = keyToNewIndexMap.get(prevChild.key);
                }
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for (j = s2; j <= e2; j++) {
                        if (newIndexToOldIndexMap[j - s2] === 0 &&
                            isSameVNodeType(prevChild, c2[j])) {
                            newIndex = j;
                            break;
                        }
                    }
                }
                if (newIndex === undefined) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                }
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) {
                        maxNewIndexSoFar = newIndex;
                    }
                    else {
                        moved = true;
                    }
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved
                ? getSequence(newIndexToOldIndexMap)
                : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for (i = toBePatched - 1; i >= 0; i--) {
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) {
                    // mount new
                    patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG);
                }
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) {
                        move(nextChild, container, anchor, 2 /* REORDER */);
                    }
                    else {
                        j--;
                    }
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6 /* COMPONENT */) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if ( shapeFlag & 128 /* SUSPENSE */) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        // static node move can only happen when force updating HMR
        if (( true) && type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */ &&
            shapeFlag & 1 /* ELEMENT */ &&
            transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(() => transition.enter(el), parentSuspense);
            }
            else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove = () => hostInsert(el, container, anchor);
                const performLeave = () => {
                    leave(el, () => {
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) {
                    delayLeave(el, remove, performLeave);
                }
                else {
                    performLeave();
                }
            }
        }
        else {
            hostInsert(el, container, anchor);
        }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        // unset ref
        if (ref != null && parentComponent) {
            setRef(ref, null, parentComponent, parentSuspense, null);
        }
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */ && dirs;
        let vnodeHook;
        if ((vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6 /* COMPONENT */) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
        }
        else {
            if ( shapeFlag & 128 /* SUSPENSE */) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) {
                invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            }
            if (dynamicChildren &&
                // #1153: fast path should not be taken for non-stable (v-for) fragments
                (type !== Fragment ||
                    (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */))) {
                // fast path for block nodes: only need to unmount dynamic children.
                unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            }
            else if ((type === Fragment &&
                (patchFlag & 128 /* KEYED_FRAGMENT */ ||
                    patchFlag & 256 /* UNKEYED_FRAGMENT */)) ||
                (!optimized && shapeFlag & 16 /* ARRAY_CHILDREN */)) {
                unmountChildren(children, parentComponent, parentSuspense);
            }
            // an unmounted teleport should always remove its children if not disabled
            if (shapeFlag & 64 /* TELEPORT */ &&
                (doRemove || !isTeleportDisabled(vnode.props))) {
                vnode.type.remove(vnode, internals);
            }
            if (doRemove) {
                remove(vnode);
            }
        }
        if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
                vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
                shouldInvokeDirs &&
                    invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
            }, parentSuspense);
        }
    };
    const remove = vnode => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (( true) && type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = () => {
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) {
                transition.afterLeave();
            }
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */ &&
            transition &&
            !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
                delayLeave(vnode.el, performRemove, performLeave);
            }
            else {
                performLeave();
            }
        }
        else {
            performRemove();
        }
    };
    const removeFragment = (cur, end) => {
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
        if ( true && instance.type.__hmrId) {
            unregisterHMR(instance);
        }
        const { bum, effects, update, subTree, um } = instance;
        // beforeUnmount hook
        if (bum) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
        }
        if (effects) {
            for (let i = 0; i < effects.length; i++) {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(effects[i]);
            }
        }
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(update);
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) {
            queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (
            parentSuspense &&
            parentSuspense.pendingBranch &&
            !parentSuspense.isUnmounted &&
            instance.asyncDep &&
            !instance.asyncResolved &&
            instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
                parentSuspense.resolve();
            }
        }
        if (true) {
            devtoolsComponentRemoved(instance);
        }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
            unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
    };
    const getNextHostNode = vnode => {
        if (vnode.shapeFlag & 6 /* COMPONENT */) {
            return getNextHostNode(vnode.component.subTree);
        }
        if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
            return vnode.suspense.next();
        }
        return hostNextSibling((vnode.anchor || vnode.el));
    };
    const render = (vnode, container) => {
        if (vnode == null) {
            if (container._vnode) {
                unmount(container._vnode, null, null, true);
            }
        }
        else {
            patch(container._vnode || null, vnode, container);
        }
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */, [
        vnode,
        prevVNode
    ]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
            // this is only called in the optimized path so array children are
            // guaranteed to be vnodes
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 /* ELEMENT */ && !c2.dynamicChildren) {
                if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */) {
                    c2 = ch2[i] = cloneIfMounted(ch2[i]);
                    c2.el = c1.el;
                }
                if (!shallow)
                    traverseStaticChildren(c1, c2);
            }
            // also inherit for comment nodes, but not placeholders (e.g. v-if which
            // would have received .el during block patch)
            if (( true) && c2.type === Comment && !c2.el) {
                c2.el = c1.el;
            }
        }
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = ((u + v) / 2) | 0;
                if (arr[result[c]] < arrI) {
                    u = c + 1;
                }
                else {
                    v = c;
                }
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) {
                    p[i] = result[u - 1];
                }
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}

const isTeleport = (type) => type.__isTeleport;
const isTeleportDisabled = (props) => props && (props.disabled || props.disabled === '');
const resolveTarget = (props, select) => {
    const targetSelector = props && props.to;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
        if (!select) {
            ( true) &&
                warn(`Current renderer does not support string target for Teleports. ` +
                    `(missing querySelector renderer option)`);
            return null;
        }
        else {
            const target = select(targetSelector);
            if (!target) {
                ( true) &&
                    warn(`Failed to locate Teleport target with selector "${targetSelector}". ` +
                        `Note the target element must exist before the component is mounted - ` +
                        `i.e. the target cannot be rendered by the component itself, and ` +
                        `ideally should be outside of the entire Vue component tree.`);
            }
            return target;
        }
    }
    else {
        if (( true) && !targetSelector && !isTeleportDisabled(props)) {
            warn(`Invalid Teleport target: ${targetSelector}`);
        }
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        const { shapeFlag, children } = n2;
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = (n2.el = ( true)
                ? createComment('teleport start')
                : 0);
            const mainAnchor = (n2.anchor = ( true)
                ? createComment('teleport end')
                : 0);
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = (n2.target = resolveTarget(n2.props, querySelector));
            const targetAnchor = (n2.targetAnchor = createText(''));
            if (target) {
                insert(targetAnchor, target);
            }
            else if (( true) && !disabled) {
                warn('Invalid Teleport target on mount:', target, `(${typeof target})`);
            }
            const mount = (container, anchor) => {
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
                    mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
                }
            };
            if (disabled) {
                mount(container, mainAnchor);
            }
            else if (target) {
                mount(target, targetAnchor);
            }
        }
        else {
            // update content
            n2.el = n1.el;
            const mainAnchor = (n2.anchor = n1.anchor);
            const target = (n2.target = n1.target);
            const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (n2.dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, n2.dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            }
            else if (!optimized) {
                patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG);
            }
            if (disabled) {
                if (!wasDisabled) {
                    // enabled -> disabled
                    // move into main container
                    moveTeleport(n2, container, mainAnchor, internals, 1 /* TOGGLE */);
                }
            }
            else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = (n2.target = resolveTarget(n2.props, querySelector));
                    if (nextTarget) {
                        moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */);
                    }
                    else if ((true)) {
                        warn('Invalid Teleport target on update:', target, `(${typeof target})`);
                    }
                }
                else if (wasDisabled) {
                    // disabled -> enabled
                    // move into teleport target
                    moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */);
                }
            }
        }
    },
    remove(vnode, { r: remove, o: { remove: hostRemove } }) {
        const { shapeFlag, children, anchor } = vnode;
        hostRemove(anchor);
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                remove(children[i]);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2 /* REORDER */) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */) {
        insert(vnode.targetAnchor, container, parentAnchor);
    }
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2 /* REORDER */;
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(el, container, parentAnchor);
    }
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */) {
            for (let i = 0; i < children.length; i++) {
                move(children[i], container, parentAnchor, 2 /* REORDER */);
            }
        }
    }
    // move main view anchor if this is a re-order.
    if (isReorder) {
        insert(anchor, container, parentAnchor);
    }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = (vnode.target = resolveTarget(vnode.props, querySelector));
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, optimized);
                vnode.targetAnchor = targetNode;
            }
            else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, optimized);
            }
            target._lpa =
                vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;

const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */
function resolveComponent(name) {
    return resolveAsset(COMPONENTS, name) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */
function resolveDynamicComponent(component) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
    }
    else {
        // invalid types will fallthrough to createVNode and raise warning
        return (component || NULL_DYNAMIC_COMPONENT);
    }
}
/**
 * @private
 */
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // self name has highest priority
        if (type === COMPONENTS) {
            const selfName = Component.displayName || Component.name;
            if (selfName &&
                (selfName === name ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) ||
                    selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
                return Component;
            }
        }
        const res = 
        // local registration
        // check instance[type] first for components with mixin or extends.
        resolve(instance[type] || Component[type], name) ||
            // global registration
            resolve(instance.appContext[type], name);
        if (( true) && warnMissing && !res) {
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
        }
        return res;
    }
    else if ((true)) {
        warn(`resolve${(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1))} ` +
            `can only be used in render() or setup().`);
    }
}
function resolve(registry, name) {
    return (registry &&
        (registry[name] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] ||
            registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]));
}

const Fragment = Symbol(( true) ? 'Fragment' : 0);
const Text = Symbol(( true) ? 'Text' : 0);
const Comment = Symbol(( true) ? 'Comment' : 0);
const Static = Symbol(( true) ? 'Static' : 0);
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
function openBlock(disableTracking = false) {
    blockStack.push((currentBlock = disableTracking ? null : []));
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let shouldTrack = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
function setBlockTracking(value) {
    shouldTrack += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
function createBlock(type, props, children, patchFlag, dynamicProps) {
    const vnode = createVNode(type, props, children, patchFlag, dynamicProps, true /* isBlock: prevent a block from tracking itself */);
    // save current block children on the block vnode
    vnode.dynamicChildren = currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (shouldTrack > 0 && currentBlock) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (( true) &&
        n2.shapeFlag & 6 /* COMPONENT */ &&
        hmrDirtyComponents.has(n2.type)) {
        // HMR only: if the component has been hot-updated, force a reload.
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...(vnodeArgsTransformer
        ? vnodeArgsTransformer(args, currentRenderingInstance)
        : args));
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref }) => {
    return (ref != null
        ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref)
            ? ref
            : { i: currentRenderingInstance, r: ref }
        : null);
};
const createVNode = (( true)
    ? createVNodeWithArgsTransform
    : 0);
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (( true) && !type) {
            warn(`Invalid vnode type when creating vnode: ${type}.`);
        }
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true /* mergeRef: true */);
        if (children) {
            normalizeChildren(cloned, children);
        }
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) {
        type = type.__vccOpts;
    }
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props) {
            props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props);
        }
        let { class: klass, style } = props;
        if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
            props.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
        }
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
                style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
            }
            props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type)
        ? 1 /* ELEMENT */
        :  isSuspense(type)
            ? 128 /* SUSPENSE */
            : isTeleport(type)
                ? 64 /* TELEPORT */
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type)
                    ? 4 /* STATEFUL_COMPONENT */
                    : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type)
                        ? 2 /* FUNCTIONAL_COMPONENT */
                        : 0;
    if (( true) && shapeFlag & 4 /* STATEFUL_COMPONENT */ && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
        type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
        warn(`Vue received a Component which was made a reactive object. This can ` +
            `lead to unnecessary performance overhead, and should be avoided by ` +
            `marking the component with \`markRaw\` or using \`shallowRef\` ` +
            `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    const vnode = {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        children: null,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    // validate key
    if (( true) && vnode.key !== vnode.key) {
        warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    normalizeChildren(vnode, children);
    // normalize suspense children
    if ( shapeFlag & 128 /* SUSPENSE */) {
        const { content, fallback } = normalizeSuspenseChildren(vnode);
        vnode.ssContent = content;
        vnode.ssFallback = fallback;
    }
    if (shouldTrack > 0 &&
        // avoid a block node from tracking itself
        !isBlockNode &&
        // has current parent block
        currentBlock &&
        // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (patchFlag > 0 || shapeFlag & 6 /* COMPONENT */) &&
        // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        patchFlag !== 32 /* HYDRATE_EVENTS */) {
        currentBlock.push(vnode);
    }
    return vnode;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props, ref, patchFlag } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    return {
        __v_isVNode: true,
        ["__v_skip" /* SKIP */]: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
                // if the vnode itself already has a ref, cloneVNode will need to merge
                // the refs so the single vnode can be set on multiple refs
                mergeRef && ref
                    ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref)
                        ? ref.concat(normalizeRef(extraProps))
                        : [ref, normalizeRef(extraProps)]
                    : normalizeRef(extraProps)
            : ref,
        scopeId: vnode.scopeId,
        children: vnode.children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: perserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment
            ? patchFlag === -1 // hoisted node
                ? 16 /* FULL_PROPS */
                : patchFlag | 16 /* FULL_PROPS */
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
}
/**
 * @private
 */
function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */
function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */
function createCommentVNode(text = '', 
// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') {
        // empty placeholder
        return createVNode(Comment);
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
        // fragment
        return createVNode(Fragment, null, child);
    }
    else if (typeof child === 'object') {
        // already vnode, this should be the most common since compiled templates
        // always produce all-vnode children arrays
        return child.el === null ? child : cloneVNode(child);
    }
    else {
        // strings and numbers
        return createVNode(Text, null, String(child));
    }
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
        children = null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
        type = 16 /* ARRAY_CHILDREN */;
    }
    else if (typeof children === 'object') {
        if (shapeFlag & 1 /* ELEMENT */ || shapeFlag & 64 /* TELEPORT */) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && setCompiledSlotRendering(1);
                normalizeChildren(vnode, slot());
                slot._c && setCompiledSlotRendering(-1);
            }
            return;
        }
        else {
            type = 32 /* SLOTS_CHILDREN */;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) {
                children._ctx = currentRenderingInstance;
            }
            else if (slotFlag === 3 /* FORWARDED */ && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.vnode.patchFlag & 1024 /* DYNAMIC_SLOTS */) {
                    children._ = 2 /* DYNAMIC */;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */;
                }
                else {
                    children._ = 1 /* STABLE */;
                }
            }
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32 /* SLOTS_CHILDREN */;
    }
    else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */) {
            type = 16 /* ARRAY_CHILDREN */;
            children = [createTextVNode(children)];
        }
        else {
            type = 8 /* TEXT_CHILDREN */;
        }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, args[0]);
    for (let i = 1; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
            if (key === 'class') {
                if (ret.class !== toMerge.class) {
                    ret.class = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret.class, toMerge.class]);
                }
            }
            else if (key === 'style') {
                ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (existing !== incoming) {
                    ret[key] = existing
                        ? [].concat(existing, toMerge[key])
                        : incoming;
                }
            }
            else if (key !== '') {
                ret[key] = toMerge[key];
            }
        }
    }
    return ret;
}

function provide(key, value) {
    if (!currentInstance) {
        if ((true)) {
            warn(`provide() can only be used inside setup().`);
        }
    }
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
        }
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the intance is at root
        const provides = instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides;
        if (provides && key in provides) {
            // TS doesn't allow symbol as index type
            return provides[key];
        }
        else if (arguments.length > 1) {
            return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)
                ? defaultValue()
                : defaultValue;
        }
        else if ((true)) {
            warn(`injection "${String(key)}" not found.`);
        }
    }
    else if ((true)) {
        warn(`inject() can only be used inside setup() or functional components.`);
    }
}

function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key) => {
        if (cache[key]) {
            warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        }
        else {
            cache[key] = type;
        }
    };
}
let isInBeforeCreate = false;
function applyOptions(instance, options, deferredData = [], deferredWatch = [], deferredProvide = [], asMixin = false) {
    const { 
    // composition
    mixins, extends: extendsOptions, 
    // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, 
    // assets
    components, directives, 
    // lifecycle
    beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, 
    // public API
    expose } = options;
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    const globalMixins = instance.appContext.mixins;
    if (asMixin && render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        instance.render = render;
    }
    // applyOptions is called non-as-mixin once per instance
    if (!asMixin) {
        isInBeforeCreate = true;
        callSyncHook('beforeCreate', "bc" /* BEFORE_CREATE */, options, instance, globalMixins);
        isInBeforeCreate = false;
        // global mixins are applied first
        applyMixins(instance, globalMixins, deferredData, deferredWatch, deferredProvide);
    }
    // extending a base component...
    if (extendsOptions) {
        applyOptions(instance, extendsOptions, deferredData, deferredWatch, deferredProvide, true);
    }
    // local mixins
    if (mixins) {
        applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide);
    }
    const checkDuplicateProperties = ( true) ? createDuplicateChecker() : 0;
    if ((true)) {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) {
            for (const key in propsOptions) {
                checkDuplicateProperties("Props" /* PROPS */, key);
            }
        }
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
            for (let i = 0; i < injectOptions.length; i++) {
                const key = injectOptions[i];
                ctx[key] = inject(key);
                if ((true)) {
                    checkDuplicateProperties("Inject" /* INJECT */, key);
                }
            }
        }
        else {
            for (const key in injectOptions) {
                const opt = injectOptions[key];
                if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
                    ctx[key] = inject(opt.from || key, opt.default, true /* treat default function as factory */);
                }
                else {
                    ctx[key] = inject(opt);
                }
                if ((true)) {
                    checkDuplicateProperties("Inject" /* INJECT */, key);
                }
            }
        }
    }
    if (methods) {
        for (const key in methods) {
            const methodHandler = methods[key];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
                ctx[key] = methodHandler.bind(publicThis);
                if ((true)) {
                    checkDuplicateProperties("Methods" /* METHODS */, key);
                }
            }
            else if ((true)) {
                warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` +
                    `Did you reference the function correctly?`);
            }
        }
    }
    if (!asMixin) {
        if (deferredData.length) {
            deferredData.forEach(dataFn => resolveData(instance, dataFn, publicThis));
        }
        if (dataOptions) {
            resolveData(instance, dataOptions, publicThis);
        }
        if ((true)) {
            const rawData = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data);
            for (const key in rawData) {
                checkDuplicateProperties("Data" /* DATA */, key);
                // expose data on ctx during dev
                if (key[0] !== '$' && key[0] !== '_') {
                    Object.defineProperty(ctx, key, {
                        configurable: true,
                        enumerable: true,
                        get: () => rawData[key],
                        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
                    });
                }
            }
        }
    }
    else if (dataOptions) {
        deferredData.push(dataOptions);
    }
    if (computedOptions) {
        for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt)
                ? opt.bind(publicThis, publicThis)
                : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get)
                    ? opt.get.bind(publicThis, publicThis)
                    : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
            if (( true) && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
                warn(`Computed property "${key}" has no getter.`);
            }
            const set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set)
                ? opt.set.bind(publicThis)
                : ( true)
                    ? () => {
                        warn(`Write operation failed: computed property "${key}" is readonly.`);
                    }
                    : 0;
            const c = computed({
                get,
                set
            });
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => c.value,
                set: v => (c.value = v)
            });
            if ((true)) {
                checkDuplicateProperties("Computed" /* COMPUTED */, key);
            }
        }
    }
    if (watchOptions) {
        deferredWatch.push(watchOptions);
    }
    if (!asMixin && deferredWatch.length) {
        deferredWatch.forEach(watchOptions => {
            for (const key in watchOptions) {
                createWatcher(watchOptions[key], ctx, publicThis, key);
            }
        });
    }
    if (provideOptions) {
        deferredProvide.push(provideOptions);
    }
    if (!asMixin && deferredProvide.length) {
        deferredProvide.forEach(provideOptions => {
            const provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions)
                ? provideOptions.call(publicThis)
                : provideOptions;
            for (const key in provides) {
                provide(key, provides[key]);
            }
        });
    }
    // asset options.
    // To reduce memory usage, only components with mixins or extends will have
    // resolved asset registry attached to instance.
    if (asMixin) {
        if (components) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.components ||
                (instance.components = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, instance.type.components)), components);
        }
        if (directives) {
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.directives ||
                (instance.directives = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, instance.type.directives)), directives);
        }
    }
    // lifecycle options
    if (!asMixin) {
        callSyncHook('created', "c" /* CREATED */, options, instance, globalMixins);
    }
    if (beforeMount) {
        onBeforeMount(beforeMount.bind(publicThis));
    }
    if (mounted) {
        onMounted(mounted.bind(publicThis));
    }
    if (beforeUpdate) {
        onBeforeUpdate(beforeUpdate.bind(publicThis));
    }
    if (updated) {
        onUpdated(updated.bind(publicThis));
    }
    if (activated) {
        onActivated(activated.bind(publicThis));
    }
    if (deactivated) {
        onDeactivated(deactivated.bind(publicThis));
    }
    if (errorCaptured) {
        onErrorCaptured(errorCaptured.bind(publicThis));
    }
    if (renderTracked) {
        onRenderTracked(renderTracked.bind(publicThis));
    }
    if (renderTriggered) {
        onRenderTriggered(renderTriggered.bind(publicThis));
    }
    if (( true) && beforeDestroy) {
        warn(`\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`);
    }
    if (beforeUnmount) {
        onBeforeUnmount(beforeUnmount.bind(publicThis));
    }
    if (( true) && destroyed) {
        warn(`\`destroyed\` has been renamed to \`unmounted\`.`);
    }
    if (unmounted) {
        onUnmounted(unmounted.bind(publicThis));
    }
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
        if (!asMixin) {
            if (expose.length) {
                const exposed = instance.exposed || (instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)({}));
                expose.forEach(key => {
                    exposed[key] = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef)(publicThis, key);
                });
            }
            else if (!instance.exposed) {
                instance.exposed = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
            }
        }
        else if ((true)) {
            warn(`The \`expose\` option is ignored when used in mixins.`);
        }
    }
}
function callSyncHook(name, type, options, instance, globalMixins) {
    callHookFromMixins(name, type, globalMixins, instance);
    const { extends: base, mixins } = options;
    if (base) {
        callHookFromExtends(name, type, base, instance);
    }
    if (mixins) {
        callHookFromMixins(name, type, mixins, instance);
    }
    const selfHook = options[name];
    if (selfHook) {
        callWithAsyncErrorHandling(selfHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromExtends(name, type, base, instance) {
    if (base.extends) {
        callHookFromExtends(name, type, base.extends, instance);
    }
    const baseHook = base[name];
    if (baseHook) {
        callWithAsyncErrorHandling(baseHook.bind(instance.proxy), instance, type);
    }
}
function callHookFromMixins(name, type, mixins, instance) {
    for (let i = 0; i < mixins.length; i++) {
        const chainedMixins = mixins[i].mixins;
        if (chainedMixins) {
            callHookFromMixins(name, type, chainedMixins, instance);
        }
        const fn = mixins[i][name];
        if (fn) {
            callWithAsyncErrorHandling(fn.bind(instance.proxy), instance, type);
        }
    }
}
function applyMixins(instance, mixins, deferredData, deferredWatch, deferredProvide) {
    for (let i = 0; i < mixins.length; i++) {
        applyOptions(instance, mixins[i], deferredData, deferredWatch, deferredProvide, true);
    }
}
function resolveData(instance, dataFn, publicThis) {
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataFn)) {
        warn(`The data option must be a function. ` +
            `Plain object usage is no longer supported.`);
    }
    const data = dataFn.call(publicThis, publicThis);
    if (( true) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn(`data() returned a Promise - note data() cannot be async; If you ` +
            `intend to perform data fetching before component renders, use ` +
            `async setup() + <Suspense>.`);
    }
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
        ( true) && warn(`data() should return an object.`);
    }
    else if (instance.data === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);
    }
    else {
        // existing data: this is a mixin or extends.
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(instance.data, data);
    }
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.')
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
        const handler = ctx[raw];
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
            watch(getter, handler);
        }
        else if ((true)) {
            warn(`Invalid watch handler specified by key "${raw}"`, handler);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
        watch(getter, raw.bind(publicThis));
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
            raw.forEach(r => createWatcher(r, ctx, publicThis, key));
        }
        else {
            const handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler)
                ? raw.handler.bind(publicThis)
                : ctx[raw.handler];
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
                watch(getter, handler, raw);
            }
            else if ((true)) {
                warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
        }
    }
    else if ((true)) {
        warn(`Invalid watch option: "${key}"`, raw);
    }
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
        }
        return cur;
    };
}
function resolveMergedOptions(instance) {
    const raw = instance.type;
    const { __merged, mixins, extends: extendsOptions } = raw;
    if (__merged)
        return __merged;
    const globalMixins = instance.appContext.mixins;
    if (!globalMixins.length && !mixins && !extendsOptions)
        return raw;
    const options = {};
    globalMixins.forEach(m => mergeOptions(options, m, instance));
    mergeOptions(options, raw, instance);
    return (raw.__merged = options);
}
function mergeOptions(to, from, instance) {
    const strats = instance.appContext.config.optionMergeStrategies;
    const { mixins, extends: extendsOptions } = from;
    extendsOptions && mergeOptions(to, extendsOptions, instance);
    mixins &&
        mixins.forEach((m) => mergeOptions(to, m, instance));
    for (const key in from) {
        if (strats && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(strats, key)) {
            to[key] = strats[key](to[key], from[key], instance.proxy, key);
        }
        else {
            to[key] = from[key];
        }
    }
}

const publicPropertiesMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
    $: i => i,
    $el: i => i.vnode.el,
    $data: i => i.data,
    $props: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0),
    $attrs: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0),
    $slots: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0),
    $refs: i => (( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0),
    $parent: i => i.parent && i.parent.proxy,
    $root: i => i.root && i.root.proxy,
    $emit: i => i.emit,
    $options: i => (__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
    $forceUpdate: i => () => queueJob(i.update),
    $nextTick: i => nextTick.bind(i.proxy),
    $watch: i => (__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP)
});
const PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        // let @vue/reactivity know it should never observe Vue public instances.
        if (key === "__v_skip" /* SKIP */) {
            return true;
        }
        // for internal formatters to know that this is a Vue instance
        if (( true) && key === '__isVue') {
            return true;
        }
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) {
                switch (n) {
                    case 0 /* SETUP */:
                        return setupState[key];
                    case 1 /* DATA */:
                        return data[key];
                    case 3 /* CONTEXT */:
                        return ctx[key];
                    case 2 /* PROPS */:
                        return props[key];
                    // default: just fallthrough
                }
            }
            else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
                accessCache[key] = 0 /* SETUP */;
                return setupState[key];
            }
            else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
                accessCache[key] = 1 /* DATA */;
                return data[key];
            }
            else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 2 /* PROPS */;
                return props[key];
            }
            else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
                accessCache[key] = 3 /* CONTEXT */;
                return ctx[key];
            }
            else if (!__VUE_OPTIONS_API__ || !isInBeforeCreate) {
                accessCache[key] = 4 /* OTHER */;
            }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get" /* GET */, key);
                ( true) && markAttrsAccessed();
            }
            return publicGetter(instance);
        }
        else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) &&
            (cssModule = cssModule[key])) {
            return cssModule;
        }
        else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 3 /* CONTEXT */;
            return ctx[key];
        }
        else if (
        // global properties
        ((globalProperties = appContext.config.globalProperties),
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key))) {
            return globalProperties[key];
        }
        else if (( true) &&
            currentRenderingInstance &&
            (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) ||
                // #1091 avoid internal isRef/isVNode checks on component instance leading
                // to infinite warning loop
                key.indexOf('__v') !== 0)) {
            if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ &&
                (key[0] === '$' || key[0] === '_') &&
                (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
                warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` +
                    `character ("$" or "_") and is not proxied on the render context.`);
            }
            else {
                warn(`Property ${JSON.stringify(key)} was accessed during render ` +
                    `but is not defined on instance.`);
            }
        }
    },
    set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
            setupState[key] = value;
        }
        else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
            data[key] = value;
        }
        else if (key in instance.props) {
            ( true) &&
                warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            ( true) &&
                warn(`Attempting to mutate public property "${key}". ` +
                    `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        }
        else {
            if (( true) && key in instance.appContext.config.globalProperties) {
                Object.defineProperty(ctx, key, {
                    enumerable: true,
                    configurable: true,
                    value
                });
            }
            else {
                ctx[key] = value;
            }
        }
        return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return (accessCache[key] !== undefined ||
            (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) ||
            (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) ||
            ((normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) ||
            (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key));
    }
};
if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
        warn(`Avoid app logic that relies on enumerating keys on a component instance. ` +
            `The keys will be empty in production mode to avoid performance overhead.`);
        return Reflect.ownKeys(target);
    };
}
const RuntimeCompiledPublicInstanceProxyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
    get(target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) {
            return;
        }
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has(_, key) {
        const has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);
        if (( true) && !has && PublicInstanceProxyHandlers.has(_, key)) {
            warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        }
        return has;
    }
});
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: () => instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
    // expose global properties
    const { globalProperties } = instance.appContext.config;
    Object.keys(globalProperties).forEach(key => {
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => globalProperties[key],
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
        Object.keys(propsOptions).forEach(key => {
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: () => instance.props[key],
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
            });
        });
    }
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(key => {
        if (key[0] === '$' || key[0] === '_') {
            warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` +
                `which are reserved prefixes for Vue internals.`);
            return;
        }
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => setupState[key],
            set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
        });
    });
}

const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        update: null,
        render: null,
        proxy: null,
        exposed: null,
        withProxy: null,
        effects: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // state
        ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null
    };
    if ((true)) {
        instance.ctx = createRenderContext(instance);
    }
    else {}
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (true) {
        devtoolsComponentAdded(instance);
    }
    return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
    currentInstance = instance;
};
const isBuiltInTag = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
        warn('Do not use built-in or reserved HTML elements as component id: ' + name);
    }
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children, shapeFlag } = instance.vnode;
    const isStateful = shapeFlag & 4 /* STATEFUL_COMPONENT */;
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if ((true)) {
        if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
        }
        if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
                validateComponentName(names[i], instance.appContext.config);
            }
        }
        if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
                validateDirectiveName(names[i]);
            }
        }
    }
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if ((true)) {
        exposePropsOnRenderContext(instance);
    }
    // 2. call setup()
    const { setup } = Component;
    if (setup) {
        const setupContext = (instance.setupContext =
            setup.length > 1 ? createSetupContext(instance) : null);
        currentInstance = instance;
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */, [( true) ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
        currentInstance = null;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
            if (isSSR) {
                // return the promise so server-renderer can wait on it
                return setupResult.then((resolvedResult) => {
                    handleSetupResult(instance, resolvedResult);
                });
            }
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
            }
        }
        else {
            handleSetupResult(instance, setupResult);
        }
    }
    else {
        finishComponentSetup(instance);
    }
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
        // setup returned an inline render function
        {
            instance.render = setupResult;
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
        if (( true) && isVNode(setupResult)) {
            warn(`setup() should not return VNodes directly - ` +
                `return a render function instead.`);
        }
        // setup returned bindings.
        // assuming a render function compiled from template is present.
        if (true) {
            instance.devtoolsRawSetupState = setupResult;
        }
        instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);
        if ((true)) {
            exposeSetupStateOnRenderContext(instance);
        }
    }
    else if (( true) && setupResult !== undefined) {
        warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    }
    finishComponentSetup(instance);
}
let compile;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
function registerRuntimeCompiler(_compile) {
    compile = _compile;
}
function finishComponentSetup(instance, isSSR) {
    const Component = instance.type;
    // template / render function normalization
    if (!instance.render) {
        // could be set from setup()
        if (compile && Component.template && !Component.render) {
            if ((true)) {
                startMeasure(instance, `compile`);
            }
            Component.render = compile(Component.template, {
                isCustomElement: instance.appContext.config.isCustomElement,
                delimiters: Component.delimiters
            });
            if ((true)) {
                endMeasure(instance, `compile`);
            }
        }
        instance.render = (Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (instance.render._rc) {
            instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
        }
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__) {
        currentInstance = instance;
        applyOptions(instance, Component);
        currentInstance = null;
    }
    // warn missing template/render
    if (( true) && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        /* istanbul ignore if */
        if (!compile && Component.template) {
            warn(`Component provided template option but ` +
                `runtime compilation is not supported in this build of Vue.` +
                ( ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                    ) /* should not happen */);
        }
        else {
            warn(`Component is missing template or render function.`);
        }
    }
}
const attrHandlers = {
    get: (target, key) => {
        if ((true)) {
            markAttrsAccessed();
        }
        return target[key];
    },
    set: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty: () => {
        warn(`setupContext.attrs is readonly.`);
        return false;
    }
};
function createSetupContext(instance) {
    const expose = exposed => {
        if (( true) && instance.exposed) {
            warn(`expose() should be called only once per setup().`);
        }
        instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(exposed);
    };
    if ((true)) {
        // We use getters in dev in case libs like test-utils overwrite instance
        // properties (overwrites should not be done in prod)
        return Object.freeze({
            get props() {
                return instance.props;
            },
            get attrs() {
                return new Proxy(instance.attrs, attrHandlers);
            },
            get slots() {
                return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
            },
            get emit() {
                return (event, ...args) => instance.emit(event, ...args);
            },
            expose
        });
    }
    else {}
}
// record effects created during a component's setup() so that they can be
// stopped when the component unmounts
function recordInstanceBoundEffect(effect) {
    if (currentInstance) {
        (currentInstance.effects || (currentInstance.effects = [])).push(effect);
    }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');
/* istanbul ignore next */
function formatComponentName(instance, Component, isRoot = false) {
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component)
        ? Component.displayName || Component.name
        : Component.name;
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.vue$/);
        if (match) {
            name = match[1];
        }
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry) => {
            for (const key in registry) {
                if (registry[key] === Component) {
                    return key;
                }
            }
        };
        name =
            inferFromRegistry(instance.components ||
                instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
    const c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions);
    recordInstanceBoundEffect(c.effect);
    return c;
}

// implementation, close to no-op
function defineComponent(options) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? { setup: options, name: options.name } : options;
}

function defineAsyncComponent(source) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
        source = { loader: source };
    }
    const { loader, loadingComponent: loadingComponent, errorComponent: errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = () => {
        let thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest = loader()
                .catch(err => {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                    return new Promise((resolve, reject) => {
                        const userRetry = () => resolve(retry());
                        const userFail = () => reject(err);
                        userOnError(err, userRetry, userFail, retries + 1);
                    });
                }
                else {
                    throw err;
                }
            })
                .then((comp) => {
                if (thisRequest !== pendingRequest && pendingRequest) {
                    return pendingRequest;
                }
                if (( true) && !comp) {
                    warn(`Async component loader resolved to undefined. ` +
                        `If you are using retry(), make sure to return its return value.`);
                }
                // interop module default
                if (comp &&
                    (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                if (( true) && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
                    throw new Error(`Invalid async component load result: ${comp}`);
                }
                resolvedComp = comp;
                return comp;
            })));
    };
    return defineComponent({
        __asyncLoader: load,
        name: 'AsyncComponentWrapper',
        setup() {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) {
                return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */, !errorComponent /* do not throw in dev if user provided error component */);
            };
            // suspense-controlled or SSR.
            if (( suspensible && instance.suspense) ||
                (false )) {
                return load()
                    .then(comp => {
                    return () => createInnerComp(comp, instance);
                })
                    .catch(err => {
                    onError(err);
                    return () => errorComponent
                        ? createVNode(errorComponent, {
                            error: err
                        })
                        : null;
                });
            }
            const loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
            const error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
            const delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);
            if (delay) {
                setTimeout(() => {
                    delayed.value = false;
                }, delay);
            }
            if (timeout != null) {
                setTimeout(() => {
                    if (!loaded.value && !error.value) {
                        const err = new Error(`Async component timed out after ${timeout}ms.`);
                        onError(err);
                        error.value = err;
                    }
                }, timeout);
            }
            load()
                .then(() => {
                loaded.value = true;
            })
                .catch(err => {
                onError(err);
                error.value = err;
            });
            return () => {
                if (loaded.value && resolvedComp) {
                    return createInnerComp(resolvedComp, instance);
                }
                else if (error.value && errorComponent) {
                    return createVNode(errorComponent, {
                        error: error.value
                    });
                }
                else if (loadingComponent && !delayed.value) {
                    return createVNode(loadingComponent);
                }
            };
        }
    });
}
function createInnerComp(comp, { vnode: { props, children } }) {
    return createVNode(comp, props, children);
}

// implementation
function defineProps(props) {
    if (( true) && props) {
        warn(`defineProps() is a compiler-hint helper that is only usable inside ` +
            `<script setup> of a single file component. Its arguments should be ` +
            `compiled away and passing it at runtime has no effect.`);
    }
    return null;
}
// implementation
function defineEmit(emitOptions) {
    if (( true) && emitOptions) {
        warn(`defineEmit() is a compiler-hint helper that is only usable inside ` +
            `<script setup> of a single file component. Its arguments should be ` +
            `compiled away and passing it at runtime has no effect.`);
    }
    return null;
}
function useContext() {
    return getCurrentInstance().setupContext;
}

// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) {
                return createVNode(type, null, [propsOrChildren]);
            }
            // props without children
            return createVNode(type, propsOrChildren);
        }
        else {
            // omit props
            return createVNode(type, null, propsOrChildren);
        }
    }
    else {
        if (l > 3) {
            children = Array.prototype.slice.call(arguments, 2);
        }
        else if (l === 3 && isVNode(children)) {
            children = [children];
        }
        return createVNode(type, propsOrChildren, children);
    }
}

const ssrContextKey = Symbol(( true) ? `ssrContext` : 0);
const useSSRContext = () => {
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) {
            warn(`Server rendering context not provided. Make sure to only call ` +
                `useSsrContext() conditionally in the server build.`);
        }
        return ctx;
    }
};

function initCustomFormatter() {
    if (false) {}
    const vueStyle = { style: 'color:#3ba776' };
    const numberStyle = { style: 'color:#0b1bc9' };
    const stringStyle = { style: 'color:#b62e24' };
    const keywordStyle = { style: 'color:#9d288c' };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header(obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
                return null;
            }
            if (obj.__isVue) {
                return ['div', vueStyle, `VueInstance`];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, genRefFlag(obj)],
                    '<',
                    formatValue(obj.value),
                    `>`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Reactive'],
                    '<',
                    formatValue(obj),
                    `>${(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? ` (readonly)` : ``}`
                ];
            }
            else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
                return [
                    'div',
                    {},
                    ['span', vueStyle, 'Readonly'],
                    '<',
                    formatValue(obj),
                    '>'
                ];
            }
            return null;
        },
        hasBody(obj) {
            return obj && obj.__isVue;
        },
        body(obj) {
            if (obj && obj.__isVue) {
                return [
                    'div',
                    {},
                    ...formatInstance(obj.$)
                ];
            }
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
        }
        if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('setup', instance.setupState));
        }
        if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
            blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
        }
        const computed = extractKeys(instance, 'computed');
        if (computed) {
            blocks.push(createInstanceBlock('computed', computed));
        }
        const injected = extractKeys(instance, 'inject');
        if (injected) {
            blocks.push(createInstanceBlock('injected', injected));
        }
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            ['object', { object: instance }]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);
        if (!Object.keys(target).length) {
            return ['span', {}];
        }
        return [
            'div',
            { style: 'line-height:1.25em;margin-bottom:0.6em' },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map(key => {
                    return [
                        'div',
                        {},
                        ['span', keywordStyle, key + ': '],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') {
            return ['span', numberStyle, v];
        }
        else if (typeof v === 'string') {
            return ['span', stringStyle, JSON.stringify(v)];
        }
        else if (typeof v === 'boolean') {
            return ['span', keywordStyle, v];
        }
        else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
            return ['object', { object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v }];
        }
        else {
            return ['span', stringStyle, String(v)];
        }
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
            return;
        }
        const extracted = {};
        for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
                extracted[key] = instance.ctx[key];
            }
        }
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key)) ||
            ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts)) {
            return true;
        }
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
        }
        if (Comp.mixins && Comp.mixins.some(m => isKeyOfType(m, key, type))) {
            return true;
        }
    }
    function genRefFlag(v) {
        if (v._shallow) {
            return `ShallowRef`;
        }
        if (v.effect) {
            return `ComputedRef`;
        }
        return `Ref`;
    }
    /* eslint-disable no-restricted-globals */
    if (window.devtoolsFormatters) {
        window.devtoolsFormatters.push(formatter);
    }
    else {
        window.devtoolsFormatters = [formatter];
    }
}

/**
 * Actual implementation
 */
function renderList(source, renderItem) {
    let ret;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i);
        }
    }
    else if (typeof source === 'number') {
        if (( true) && !Number.isInteger(source)) {
            warn(`The v-for range expect an integer value but got ${source}.`);
            return [];
        }
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i);
        }
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
        if (source[Symbol.iterator]) {
            ret = Array.from(source, renderItem);
        }
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i);
            }
        }
    }
    else {
        ret = [];
    }
    return ret;
}

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
function toHandlers(obj) {
    const ret = {};
    if (( true) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for (const key in obj) {
        ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
    }
    return ret;
}

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
function createSlots(slots, dynamicSlots) {
    for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
            for (let j = 0; j < slot.length; j++) {
                slots[slot[j].name] = slot[j].fn;
            }
        }
        else if (slot) {
            // conditional single slot generated by <template v-if="..." #foo>
            slots[slot.name] = slot.fn;
        }
    }
    return slots;
}

// Core API ------------------------------------------------------------------
const version = "3.0.3";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */
const ssrUtils = ( null);




/***/ }),

/***/ "../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************************************************************************************/
/*! namespace exports */
/*! export BaseTransition [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .BaseTransition */
/*! export Comment [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Comment */
/*! export Fragment [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Fragment */
/*! export KeepAlive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .KeepAlive */
/*! export Static [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Static */
/*! export Suspense [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Suspense */
/*! export Teleport [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Teleport */
/*! export Text [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Text */
/*! export Transition [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TransitionGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! export callWithAsyncErrorHandling [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .callWithAsyncErrorHandling */
/*! export callWithErrorHandling [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .callWithErrorHandling */
/*! export camelize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .camelize */
/*! export capitalize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .capitalize */
/*! export cloneVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .cloneVNode */
/*! export computed [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .computed */
/*! export createApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createBlock [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createBlock */
/*! export createCommentVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createCommentVNode */
/*! export createHydrationRenderer [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createHydrationRenderer */
/*! export createRenderer [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createRenderer */
/*! export createSSRApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createSlots [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createSlots */
/*! export createStaticVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createStaticVNode */
/*! export createTextVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createTextVNode */
/*! export createVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createVNode */
/*! export customRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .customRef */
/*! export defineAsyncComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineAsyncComponent */
/*! export defineComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineComponent */
/*! export defineEmit [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineEmit */
/*! export defineProps [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineProps */
/*! export devtools [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .devtools */
/*! export getCurrentInstance [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .getCurrentInstance */
/*! export getTransitionRawChildren [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .getTransitionRawChildren */
/*! export h [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .h */
/*! export handleError [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .handleError */
/*! export hydrate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCustomFormatter [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .initCustomFormatter */
/*! export inject [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .inject */
/*! export isProxy [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isProxy */
/*! export isReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReactive */
/*! export isReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReadonly */
/*! export isRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isRef */
/*! export isVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .isVNode */
/*! export markRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .markRaw */
/*! export mergeProps [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .mergeProps */
/*! export nextTick [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .nextTick */
/*! export onActivated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onActivated */
/*! export onBeforeMount [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeMount */
/*! export onBeforeUnmount [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeUnmount */
/*! export onBeforeUpdate [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeUpdate */
/*! export onDeactivated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onDeactivated */
/*! export onErrorCaptured [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onErrorCaptured */
/*! export onMounted [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onMounted */
/*! export onRenderTracked [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onRenderTracked */
/*! export onRenderTriggered [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onRenderTriggered */
/*! export onUnmounted [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onUnmounted */
/*! export onUpdated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onUpdated */
/*! export openBlock [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .openBlock */
/*! export popScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .popScopeId */
/*! export provide [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .provide */
/*! export proxyRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .proxyRefs */
/*! export pushScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .pushScopeId */
/*! export queuePostFlushCb [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .queuePostFlushCb */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .reactive */
/*! export readonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .readonly */
/*! export ref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .ref */
/*! export registerRuntimeCompiler [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .registerRuntimeCompiler */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! export renderList [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .renderList */
/*! export renderSlot [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .renderSlot */
/*! export resolveComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveComponent */
/*! export resolveDirective [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveDirective */
/*! export resolveDynamicComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveDynamicComponent */
/*! export resolveTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveTransitionHooks */
/*! export setBlockTracking [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setBlockTracking */
/*! export setDevtoolsHook [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setDevtoolsHook */
/*! export setTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setTransitionHooks */
/*! export shallowReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReactive */
/*! export shallowReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReadonly */
/*! export shallowRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowRef */
/*! export ssrContextKey [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .ssrContextKey */
/*! export ssrUtils [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .ssrUtils */
/*! export toDisplayString [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toDisplayString */
/*! export toHandlerKey [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toHandlerKey */
/*! export toHandlers [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .toHandlers */
/*! export toRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRaw */
/*! export toRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRef */
/*! export toRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRefs */
/*! export transformVNodeArgs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .transformVNodeArgs */
/*! export triggerRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .triggerRef */
/*! export unref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .unref */
/*! export useContext [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useContext */
/*! export useCssModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useCssVars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useSSRContext [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useSSRContext */
/*! export useTransitionState [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useTransitionState */
/*! export vModelCheckbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export vModelDynamic [provided] [no usage info] [missing usage info prevents renaming] */
/*! export vModelRadio [provided] [no usage info] [missing usage info prevents renaming] */
/*! export vModelSelect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export vModelText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export vShow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .version */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .warn */
/*! export watch [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .watch */
/*! export watchEffect [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .watchEffect */
/*! export withCtx [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withCtx */
/*! export withDirectives [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withDirectives */
/*! export withKeys [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withModifiers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export withScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withScopeId */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition,
/* harmony export */   "Comment": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment,
/* harmony export */   "Fragment": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment,
/* harmony export */   "KeepAlive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive,
/* harmony export */   "Static": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static,
/* harmony export */   "Suspense": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense,
/* harmony export */   "Teleport": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport,
/* harmony export */   "Text": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text,
/* harmony export */   "callWithAsyncErrorHandling": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize,
/* harmony export */   "cloneVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode,
/* harmony export */   "computed": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed,
/* harmony export */   "createBlock": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock,
/* harmony export */   "createCommentVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer,
/* harmony export */   "createSlots": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots,
/* harmony export */   "createStaticVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode,
/* harmony export */   "createTextVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode,
/* harmony export */   "createVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode,
/* harmony export */   "customRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "defineAsyncComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent,
/* harmony export */   "defineEmit": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmit,
/* harmony export */   "defineProps": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps,
/* harmony export */   "devtools": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools,
/* harmony export */   "getCurrentInstance": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren,
/* harmony export */   "h": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h,
/* harmony export */   "handleError": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError,
/* harmony export */   "initCustomFormatter": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter,
/* harmony export */   "inject": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "isVNode": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "mergeProps": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps,
/* harmony export */   "nextTick": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick,
/* harmony export */   "onActivated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated,
/* harmony export */   "onBeforeMount": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured,
/* harmony export */   "onMounted": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted,
/* harmony export */   "onRenderTracked": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
/* harmony export */   "onUpdated": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated,
/* harmony export */   "openBlock": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock,
/* harmony export */   "popScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId,
/* harmony export */   "provide": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "pushScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "registerRuntimeCompiler": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler,
/* harmony export */   "renderList": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList,
/* harmony export */   "renderSlot": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot,
/* harmony export */   "resolveComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent,
/* harmony export */   "resolveDirective": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "ssrContextKey": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey,
/* harmony export */   "ssrUtils": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey,
/* harmony export */   "toHandlers": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "transformVNodeArgs": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "useContext": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useContext,
/* harmony export */   "useSSRContext": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext,
/* harmony export */   "useTransitionState": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState,
/* harmony export */   "version": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version,
/* harmony export */   "warn": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn,
/* harmony export */   "watch": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch,
/* harmony export */   "watchEffect": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect,
/* harmony export */   "withCtx": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx,
/* harmony export */   "withDirectives": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives,
/* harmony export */   "withScopeId": () => /* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId,
/* harmony export */   "Transition": () => /* binding */ Transition,
/* harmony export */   "TransitionGroup": () => /* binding */ TransitionGroup,
/* harmony export */   "createApp": () => /* binding */ createApp,
/* harmony export */   "createSSRApp": () => /* binding */ createSSRApp,
/* harmony export */   "hydrate": () => /* binding */ hydrate,
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "useCssModule": () => /* binding */ useCssModule,
/* harmony export */   "useCssVars": () => /* binding */ useCssVars,
/* harmony export */   "vModelCheckbox": () => /* binding */ vModelCheckbox,
/* harmony export */   "vModelDynamic": () => /* binding */ vModelDynamic,
/* harmony export */   "vModelRadio": () => /* binding */ vModelRadio,
/* harmony export */   "vModelSelect": () => /* binding */ vModelSelect,
/* harmony export */   "vModelText": () => /* binding */ vModelText,
/* harmony export */   "vShow": () => /* binding */ vShow,
/* harmony export */   "withKeys": () => /* binding */ withKeys,
/* harmony export */   "withModifiers": () => /* binding */ withModifiers
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");




const svgNS = 'http://www.w3.org/2000/svg';
const doc = (typeof document !== 'undefined' ? document : null);
let tempContainer;
let tempSVGContainer;
const nodeOps = {
    insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
    },
    remove: child => {
        const parent = child.parentNode;
        if (parent) {
            parent.removeChild(child);
        }
    },
    createElement: (tag, isSVG, is) => isSVG
        ? doc.createElementNS(svgNS, tag)
        : doc.createElement(tag, is ? { is } : undefined),
    createText: text => doc.createTextNode(text),
    createComment: text => doc.createComment(text),
    setText: (node, text) => {
        node.nodeValue = text;
    },
    setElementText: (el, text) => {
        el.textContent = text;
    },
    parentNode: node => node.parentNode,
    nextSibling: node => node.nextSibling,
    querySelector: selector => doc.querySelector(selector),
    setScopeId(el, id) {
        el.setAttribute(id, '');
    },
    cloneNode(el) {
        return el.cloneNode(true);
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, isSVG) {
        const temp = isSVG
            ? tempSVGContainer ||
                (tempSVGContainer = doc.createElementNS(svgNS, 'svg'))
            : tempContainer || (tempContainer = doc.createElement('div'));
        temp.innerHTML = content;
        const first = temp.firstChild;
        let node = first;
        let last = node;
        while (node) {
            last = node;
            nodeOps.insert(node, parent, anchor);
            node = temp.firstChild;
        }
        return [first, last];
    }
};

// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    if (value == null) {
        value = '';
    }
    if (isSVG) {
        el.setAttribute('class', value);
    }
    else {
        // directly setting className should be faster than setAttribute in theory
        // if this is an element during a transition, take the temporary transition
        // classes into account.
        const transitionClasses = el._vtc;
        if (transitionClasses) {
            value = (value
                ? [value, ...transitionClasses]
                : [...transitionClasses]).join(' ');
        }
        el.className = value;
    }
}

function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
        el.removeAttribute('style');
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next)) {
        if (prev !== next) {
            style.cssText = next;
        }
    }
    else {
        for (const key in next) {
            setStyle(style, key, next[key]);
        }
        if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
            for (const key in prev) {
                if (next[key] == null) {
                    setStyle(style, key, '');
                }
            }
        }
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
        val.forEach(v => setStyle(style, name, v));
    }
    else {
        if (name.startsWith('--')) {
            // custom property definition
            style.setProperty(name, val);
        }
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
                // !important
                style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
            }
            else {
                style[prefixed] = val;
            }
        }
    }
}
const prefixes = ['Webkit', 'Moz', 'ms'];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
        return cached;
    }
    let name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);
    if (name !== 'filter' && name in style) {
        return (prefixCache[rawName] = name);
    }
    name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);
    for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
            return (prefixCache[rawName] = prefixed);
        }
    }
    return rawName;
}

const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        }
        else {
            el.setAttributeNS(xlinkNS, key, value);
        }
    }
    else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);
        if (value == null || (isBoolean && value === false)) {
            el.removeAttribute(key);
        }
        else {
            el.setAttribute(key, isBoolean ? '' : value);
        }
    }
}

// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, 
// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
        return;
    }
    if (value === '' && typeof el[key] === 'boolean') {
        // e.g. <select multiple> compiles to { multiple: '' }
        el[key] = true;
    }
    else if (value == null && typeof el[key] === 'string') {
        // e.g. <div :id="null">
        el[key] = '';
        el.removeAttribute(key);
    }
    else {
        // some properties perform value validation and throw
        try {
            el[key] = value;
        }
        catch (e) {
            if ((true)) {
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` +
                    `value ${value} is invalid.`, e);
            }
        }
    }
}

// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if (typeof document !== 'undefined' &&
    _getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = () => performance.now();
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
    cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), (cachedNow = _getNow()));
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
        // patch
        existingInvoker.value = nextValue;
    }
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = (invokers[rawName] = createInvoker(nextValue, instance));
            addEventListener(el, name, invoker, options);
        }
        else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [name.slice(2).toLowerCase(), options];
}
function createInvoker(initialValue, instance) {
    const invoker = (e) => {
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (timeStamp >= invoker.attached - 1) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */, [e]);
        }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map(fn => (e) => !e._stopped && fn(e));
    }
    else {
        return value;
    }
}

const nativeOnRE = /^on[a-z]/;
const forcePatchProp = (_, key) => key === 'value';
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    switch (key) {
        // special
        case 'class':
            patchClass(el, nextValue, isSVG);
            break;
        case 'style':
            patchStyle(el, prevValue, nextValue);
            break;
        default:
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                // ignore v-model listeners
                if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                    patchEvent(el, key, prevValue, nextValue, parentComponent);
                }
            }
            else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
                patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
            }
            else {
                // special case for <input v-model type="checkbox"> with
                // :true-value & :false-value
                // store value as dom properties since non-string values will be
                // stringified.
                if (key === 'true-value') {
                    el._trueValue = nextValue;
                }
                else if (key === 'false-value') {
                    el._falseValue = nextValue;
                }
                patchAttr(el, key, nextValue, isSVG);
            }
            break;
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML
        if (key === 'innerHTML') {
            return true;
        }
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
            return true;
        }
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') {
        return false;
    }
    // #1787 form as an attribute must be a string, while it accepts an Element as
    // a prop
    if (key === 'form' && typeof value === 'string') {
        return false;
    }
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') {
        return false;
    }
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
        return false;
    }
    return key in el;
}

function useCssModule(name = '$style') {
    /* istanbul ignore else */
    {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        if (!instance) {
            ( true) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssModule must be called inside setup()`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            ( true) && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS modules injected.`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            ( true) &&
                (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Current instance does not have CSS module named "${name}".`);
            return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
        }
        return mod;
    }
}

/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVars(getter) {
    const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    /* istanbul ignore next */
    if (!instance) {
        ( true) &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(setVars, { flush: 'post' }));
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(setVars);
}
function setVarsOnVNode(vnode, vars) {
    if ( vnode.shapeFlag & 128 /* SUSPENSE */) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
            suspense.effects.push(() => {
                setVarsOnVNode(suspense.activeBranch, vars);
            });
        }
    }
    // drill down HOCs until it's a non-component vnode
    while (vnode.component) {
        vnode = vnode.component.subTree;
    }
    if (vnode.shapeFlag & 1 /* ELEMENT */ && vnode.el) {
        const style = vnode.el.style;
        for (const key in vars) {
            style.setProperty(`--${key}`, vars[key]);
        }
    }
    else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
        vnode.children.forEach(c => setVarsOnVNode(c, vars));
    }
}

const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots }) => (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = (Transition.props = /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators));
function resolveTransitionProps(rawProps) {
    let { name = 'v', type, css = true, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const baseProps = {};
    for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
        }
    }
    if (!css) {
        return baseProps;
    }
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done) => {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear) => {
        return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            hook && hook(el, resolve);
            nextFrame(() => {
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!(hook && hook.length > 1)) {
                    if (enterDuration) {
                        setTimeout(resolve, enterDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, resolve);
                    }
                }
            });
        };
    };
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
        onBeforeEnter(el) {
            onBeforeEnter && onBeforeEnter(el);
            addTransitionClass(el, enterActiveClass);
            addTransitionClass(el, enterFromClass);
        },
        onBeforeAppear(el) {
            onBeforeAppear && onBeforeAppear(el);
            addTransitionClass(el, appearActiveClass);
            addTransitionClass(el, appearFromClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveActiveClass);
            addTransitionClass(el, leaveFromClass);
            nextFrame(() => {
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!(onLeave && onLeave.length > 1)) {
                    if (leaveDuration) {
                        setTimeout(resolve, leaveDuration);
                    }
                    else {
                        whenTransitionEnds(el, type, resolve);
                    }
                }
            });
            onLeave && onLeave(el, resolve);
        },
        onEnterCancelled(el) {
            finishEnter(el, false);
            onEnterCancelled && onEnterCancelled(el);
        },
        onAppearCancelled(el) {
            finishEnter(el, true);
            onAppearCancelled && onAppearCancelled(el);
        },
        onLeaveCancelled(el) {
            finishLeave(el);
            onLeaveCancelled && onLeaveCancelled(el);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) {
        return null;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
    }
    else {
        const n = NumberOf(duration);
        return [n, n];
    }
}
function NumberOf(val) {
    const res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
    if ((true))
        validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is not a valid number - ` +
            `got ${JSON.stringify(val)}.`);
    }
    else if (isNaN(val)) {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<transition> explicit duration is NaN - ` +
            'the duration expression might be incorrect.');
    }
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.add(c));
    (el._vtc ||
        (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach(c => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
            el._vtc = undefined;
        }
    }
}
function nextFrame(cb) {
    requestAnimationFrame(() => {
        requestAnimationFrame(cb);
    });
}
function whenTransitionEnds(el, expectedType, cb) {
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
        return cb();
    }
    const endEvent = type + 'end';
    let ended = 0;
    const end = () => {
        el.removeEventListener(endEvent, onEnd);
        cb();
    };
    const onEnd = (e) => {
        if (e.target === el) {
            if (++ended >= propCount) {
                end();
            }
        }
    };
    setTimeout(() => {
        if (ended < propCount) {
            end();
        }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key) => (styles[key] || '').split(', ');
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    }
    else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    }
    else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
            timeout > 0
                ? transitionTimeout > animationTimeout
                    ? TRANSITION
                    : ANIMATION
                : null;
        propCount = type
            ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
            : 0;
    }
    const hasTransform = type === TRANSITION &&
        /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
        delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}

const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup(props, { slots }) {
        const instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
        const state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
        let prevChildren;
        let children;
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(() => {
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) {
                return;
            }
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
                return;
            }
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach(c => {
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = (el._moveCb = (e) => {
                    if (e && e.target !== el) {
                        return;
                    }
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                });
                el.addEventListener('transitionend', cb);
            });
        });
        return () => {
            const rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            const tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
            prevChildren = children;
            children = slots.default ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots.default()) : [];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                if (child.key != null) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                }
                else if ((true)) {
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<TransitionGroup> children must be keyed.`);
                }
            }
            if (prevChildren) {
                for (let i = 0; i < prevChildren.length; i++) {
                    const child = prevChildren[i];
                    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) {
        el._moveCb();
    }
    if (el._enterCb) {
        el._enterCb();
    }
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
// this is put in a dedicated function to avoid the line from being treeshaken
function forceReflow() {
    return document.body.offsetHeight;
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) {
        el._vtc.forEach(cls => {
            cls.split(/\s+/).forEach(c => c && clone.classList.remove(c));
        });
    }
    moveClass.split(/\s+/).forEach(c => c && clone.classList.add(c));
    clone.style.display = 'none';
    const container = (root.nodeType === 1
        ? root
        : root.parentNode);
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}

const getModelAssigner = (vnode) => {
    const fn = vnode.props['onUpdate:modelValue'];
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? value => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created(el, { modifiers: { lazy, trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || el.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', e => {
            if (e.target.composing)
                return;
            let domValue = el.value;
            if (trim) {
                domValue = domValue.trim();
            }
            else if (castToNumber) {
                domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
            }
            el._assign(domValue);
        });
        if (trim) {
            addEventListener(el, 'change', () => {
                el.value = el.value.trim();
            });
        }
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(el, { value }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate(el, { value, modifiers: { trim, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing)
            return;
        if (document.activeElement === el) {
            if (trim && el.value.trim() === value) {
                return;
            }
            if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
                return;
            }
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) {
            el.value = newValue;
        }
    }
};
const vModelCheckbox = {
    created(el, binding, vnode) {
        setChecked(el, binding, vnode);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
                const index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) {
                    assign(modelValue.concat(elementValue));
                }
                else if (!checked && found) {
                    const filtered = [...modelValue];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            }
            else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
                if (checked) {
                    modelValue.add(elementValue);
                }
                else {
                    modelValue.delete(elementValue);
                }
            }
            else {
                assign(getCheckboxValue(el, checked));
            }
        });
    },
    beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
    }
    else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        el.checked = value.has(vnode.props.value);
    }
    else if (value !== oldValue) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
    }
}
const vModelRadio = {
    created(el, { value }, vnode) {
        el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', () => {
            el._assign(getValue(el));
        });
    },
    beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
            el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
        }
    }
};
const vModelSelect = {
    created(el, { modifiers: { number } }, vnode) {
        addEventListener(el, 'change', () => {
            const selectedVal = Array.prototype.filter
                .call(el.options, (o) => o.selected)
                .map((o) => number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple ? selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated(el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
        ( true) &&
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`<select multiple v-model> expects an Array or Set value for its binding, ` +
                `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
                option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
            }
            else {
                option.selected = value.has(optionValue);
            }
        }
        else {
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
                el.selectedIndex = i;
                return;
            }
        }
    }
    if (!isMultiple) {
        el.selectedIndex = -1;
    }
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch (el.tagName) {
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch (vnode.props && vnode.props.type) {
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}

const systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
const modifierGuards = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, modifiers) => systemModifiers.some(m => e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */
const withModifiers = (fn, modifiers) => {
    return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
                return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */
const withKeys = (fn, modifiers) => {
    return (event) => {
        if (!('key' in event))
            return;
        const eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);
        if (
        // None of the provided key modifiers match the current event key
        !modifiers.some(k => k === eventKey || keyNames[k] === eventKey)) {
            return;
        }
        return fn(event);
    };
};

const vShow = {
    beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) {
            transition.beforeEnter(el);
        }
        else {
            setDisplay(el, value);
        }
    },
    mounted(el, { value }, { transition }) {
        if (transition && value) {
            transition.enter(el);
        }
    },
    updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue)
            return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            }
            else {
                transition.leave(el, () => {
                    setDisplay(el, false);
                });
            }
        }
        else {
            setDisplay(el, value);
        }
    },
    beforeUnmount(el, { value }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}

const rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({ patchProp, forcePatchProp }, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration
        ? renderer
        : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = ((...args) => {
    ensureRenderer().render(...args);
});
const hydrate = ((...args) => {
    ensureHydrationRenderer().hydrate(...args);
});
const createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
            return;
        const component = app._component;
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
        }
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container);
        container.removeAttribute('v-cloak');
        container.setAttribute('data-v-app', '');
        return proxy;
    };
    return app;
});
const createSSRApp = ((...args) => {
    const app = ensureHydrationRenderer().createApp(...args);
    if ((true)) {
        injectNativeTagCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
            return mount(container, true);
        }
    };
    return app;
});
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag),
        writable: false
    });
}
function normalizeContainer(container) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
        const res = document.querySelector(container);
        if (( true) && !res) {
            (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(`Failed to mount app: mount target selector returned null.`);
        }
        return res;
    }
    return container;
}




/***/ }),

/***/ "../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \********************************************************************************************************************************/
/*! namespace exports */
/*! export EMPTY_ARR [provided] [no usage info] [missing usage info prevents renaming] */
/*! export EMPTY_OBJ [provided] [no usage info] [missing usage info prevents renaming] */
/*! export NO [provided] [no usage info] [missing usage info prevents renaming] */
/*! export NOOP [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PatchFlagNames [provided] [no usage info] [missing usage info prevents renaming] */
/*! export babelParserDefaultPlugins [provided] [no usage info] [missing usage info prevents renaming] */
/*! export camelize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export capitalize [provided] [no usage info] [missing usage info prevents renaming] */
/*! export def [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escapeHtml [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escapeHtmlComment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export extend [provided] [no usage info] [missing usage info prevents renaming] */
/*! export generateCodeFrame [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getGlobalThis [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasChanged [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasOwn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hyphenate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invokeArrayFns [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isBooleanAttr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFunction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isGloballyWhitelisted [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isHTMLTag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isIntegerKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isKnownAttr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isMap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isModelListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNoUnitNumericStyleProp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isOn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isPlainObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isPromise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isReservedProp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSSRSafeAttrName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSVGTag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSet [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSpecialBooleanAttr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSymbol [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isVoidTag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export looseEqual [provided] [no usage info] [missing usage info prevents renaming] */
/*! export looseIndexOf [provided] [no usage info] [missing usage info prevents renaming] */
/*! export makeMap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalizeClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalizeStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export objectToString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parseStringStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export propsToAttrMap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export remove [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stringifyStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toDisplayString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toHandlerKey [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toNumber [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toRawType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toTypeString [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.g, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => /* binding */ EMPTY_ARR,
/* harmony export */   "EMPTY_OBJ": () => /* binding */ EMPTY_OBJ,
/* harmony export */   "NO": () => /* binding */ NO,
/* harmony export */   "NOOP": () => /* binding */ NOOP,
/* harmony export */   "PatchFlagNames": () => /* binding */ PatchFlagNames,
/* harmony export */   "babelParserDefaultPlugins": () => /* binding */ babelParserDefaultPlugins,
/* harmony export */   "camelize": () => /* binding */ camelize,
/* harmony export */   "capitalize": () => /* binding */ capitalize,
/* harmony export */   "def": () => /* binding */ def,
/* harmony export */   "escapeHtml": () => /* binding */ escapeHtml,
/* harmony export */   "escapeHtmlComment": () => /* binding */ escapeHtmlComment,
/* harmony export */   "extend": () => /* binding */ extend,
/* harmony export */   "generateCodeFrame": () => /* binding */ generateCodeFrame,
/* harmony export */   "getGlobalThis": () => /* binding */ getGlobalThis,
/* harmony export */   "hasChanged": () => /* binding */ hasChanged,
/* harmony export */   "hasOwn": () => /* binding */ hasOwn,
/* harmony export */   "hyphenate": () => /* binding */ hyphenate,
/* harmony export */   "invokeArrayFns": () => /* binding */ invokeArrayFns,
/* harmony export */   "isArray": () => /* binding */ isArray,
/* harmony export */   "isBooleanAttr": () => /* binding */ isBooleanAttr,
/* harmony export */   "isDate": () => /* binding */ isDate,
/* harmony export */   "isFunction": () => /* binding */ isFunction,
/* harmony export */   "isGloballyWhitelisted": () => /* binding */ isGloballyWhitelisted,
/* harmony export */   "isHTMLTag": () => /* binding */ isHTMLTag,
/* harmony export */   "isIntegerKey": () => /* binding */ isIntegerKey,
/* harmony export */   "isKnownAttr": () => /* binding */ isKnownAttr,
/* harmony export */   "isMap": () => /* binding */ isMap,
/* harmony export */   "isModelListener": () => /* binding */ isModelListener,
/* harmony export */   "isNoUnitNumericStyleProp": () => /* binding */ isNoUnitNumericStyleProp,
/* harmony export */   "isObject": () => /* binding */ isObject,
/* harmony export */   "isOn": () => /* binding */ isOn,
/* harmony export */   "isPlainObject": () => /* binding */ isPlainObject,
/* harmony export */   "isPromise": () => /* binding */ isPromise,
/* harmony export */   "isReservedProp": () => /* binding */ isReservedProp,
/* harmony export */   "isSSRSafeAttrName": () => /* binding */ isSSRSafeAttrName,
/* harmony export */   "isSVGTag": () => /* binding */ isSVGTag,
/* harmony export */   "isSet": () => /* binding */ isSet,
/* harmony export */   "isSpecialBooleanAttr": () => /* binding */ isSpecialBooleanAttr,
/* harmony export */   "isString": () => /* binding */ isString,
/* harmony export */   "isSymbol": () => /* binding */ isSymbol,
/* harmony export */   "isVoidTag": () => /* binding */ isVoidTag,
/* harmony export */   "looseEqual": () => /* binding */ looseEqual,
/* harmony export */   "looseIndexOf": () => /* binding */ looseIndexOf,
/* harmony export */   "makeMap": () => /* binding */ makeMap,
/* harmony export */   "normalizeClass": () => /* binding */ normalizeClass,
/* harmony export */   "normalizeStyle": () => /* binding */ normalizeStyle,
/* harmony export */   "objectToString": () => /* binding */ objectToString,
/* harmony export */   "parseStringStyle": () => /* binding */ parseStringStyle,
/* harmony export */   "propsToAttrMap": () => /* binding */ propsToAttrMap,
/* harmony export */   "remove": () => /* binding */ remove,
/* harmony export */   "stringifyStyle": () => /* binding */ stringifyStyle,
/* harmony export */   "toDisplayString": () => /* binding */ toDisplayString,
/* harmony export */   "toHandlerKey": () => /* binding */ toHandlerKey,
/* harmony export */   "toNumber": () => /* binding */ toNumber,
/* harmony export */   "toRawType": () => /* binding */ toRawType,
/* harmony export */   "toTypeString": () => /* binding */ toTypeString
/* harmony export */ });
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

// Patch flags are optimization hints generated by the compiler.
// when a block with dynamicChildren is encountered during diff, the algorithm
// enters "optimized mode". In this mode, we know that the vdom is produced by
// a render function generated by the compiler, so the algorithm only needs to
// handle updates explicitly marked by these patch flags.
// dev only flag -> name mapping
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl';
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count += lines[i].length + 1;
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                if (j === i) {
                    // push underline
                    const pad = start - (count - lineLength) + 1;
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + 1;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`);

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            res += normalizeClass(value[i]) + ' ';
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot';
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return val == null
        ? ''
        : isObject(val)
            ? JSON.stringify(val, replacer, 2)
            : String(val);
};
const replacer = (_key, val) => {
    if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */
const babelParserDefaultPlugins = [
    'bigInt',
    'optionalChaining',
    'nullishCoalescingOperator'
];
const EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
const EMPTY_ARR = ( true) ? Object.freeze([]) : 0;
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted');
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => (str ? `on${capitalize(str)}` : ``));
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};




/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_Symbol.js":
/*!********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_Symbol.js ***!
  \********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayLikeKeys.js":
/*!***************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayLikeKeys.js ***!
  \***************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayMap.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayMap.js ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseGetTag.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseGetTag.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsArguments.js":
/*!*****************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsArguments.js ***!
  \*****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsTypedArray.js":
/*!******************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsTypedArray.js ***!
  \******************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseKeys.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseKeys.js ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseTimes.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseTimes.js ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseUnary.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseUnary.js ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseValues.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseValues.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_freeGlobal.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_freeGlobal.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.g, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_getRawTag.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_getRawTag.js ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isIndex.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isIndex.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isPrototype.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_isPrototype.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nativeKeys.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nativeKeys.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nodeUtil.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nodeUtil.js ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_objectToString.js":
/*!****************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_objectToString.js ***!
  \****************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_overArg.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_overArg.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_root.js":
/*!******************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_root.js ***!
  \******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArguments.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArguments.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArray.js":
/*!********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArray.js ***!
  \********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArrayLike.js":
/*!************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArrayLike.js ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isBuffer.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isBuffer.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__, __webpack_require__.* */
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isFunction.js":
/*!***********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isFunction.js ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isLength.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isLength.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObject.js":
/*!*********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObject.js ***!
  \*********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObjectLike.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isObjectLike.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isTypedArray.js":
/*!*************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isTypedArray.js ***!
  \*************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/keys.js":
/*!*****************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/keys.js ***!
  \*****************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/stubFalse.js":
/*!**********************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/stubFalse.js ***!
  \**********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/values.js":
/*!*******************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/values.js ***!
  \*******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseValues = __webpack_require__(/*! ./_baseValues */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./src/Setting/Root.vue":
/*!******************************!*\
  !*** ./src/Setting/Root.vue ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Root_vue_vue_type_template_id_a827f54c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root.vue?vue&type=template&id=a827f54c&scoped=true */ "./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true");
/* harmony import */ var _Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root.vue?vue&type=script&lang=ts */ "./src/Setting/Root.vue?vue&type=script&lang=ts");
/* harmony import */ var _Root_vue_vue_type_style_index_0_id_a827f54c_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less */ "./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less");




;
_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _Root_vue_vue_type_template_id_a827f54c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-a827f54c"
/* hot reload */
if (false) {}

_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/Setting/Root.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/compts/Button.vue":
/*!*******************************!*\
  !*** ./src/compts/Button.vue ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_15ddd3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=15ddd3ac&scoped=true */ "./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true");
/* harmony import */ var _Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=ts */ "./src/compts/Button.vue?vue&type=script&lang=ts");
/* harmony import */ var _Button_vue_vue_type_style_index_0_id_15ddd3ac_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less */ "./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less");




;
_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = _Button_vue_vue_type_template_id_15ddd3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-15ddd3ac"
/* hot reload */
if (false) {}

_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/compts/Button.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true":
/*!************************************************************************!*\
  !*** ./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true ***!
  \************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_template_id_a827f54c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_template_id_a827f54c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Root.vue?vue&type=template&id=a827f54c&scoped=true */ "../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true");


/***/ }),

/***/ "./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true":
/*!*************************************************************************!*\
  !*** ./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true ***!
  \*************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_template_id_15ddd3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_template_id_15ddd3ac_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Button.vue?vue&type=template&id=15ddd3ac&scoped=true */ "../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true");


/***/ }),

/***/ "./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less":
/*!***************************************************************************************!*\
  !*** ./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less ***!
  \***************************************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_cjs_js_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_style_index_0_id_a827f54c_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less */ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less");


/***/ }),

/***/ "./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less":
/*!****************************************************************************************!*\
  !*** ./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less ***!
  \****************************************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_cjs_js_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_style_index_0_id_15ddd3ac_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less */ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less");


/***/ }),

/***/ "./src/Setting/Root.vue?vue&type=script&lang=ts":
/*!******************************************************!*\
  !*** ./src/Setting/Root.vue?vue&type=script&lang=ts ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=script&lang=ts .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _yarn_$$virtual_ts_loader_virtual_bae4e07acc_5_yarn_berry_cache_ts_loader_npm_8_0_11_a6f1286fbd_7_zip_node_modules_ts_loader_index_js_clonedRuleSet_1_use_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_ts_loader_virtual_bae4e07acc_5_yarn_berry_cache_ts_loader_npm_8_0_11_a6f1286fbd_7_zip_node_modules_ts_loader_index_js_clonedRuleSet_1_use_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Root.vue?vue&type=script&lang=ts */ "./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/compts/Button.vue?vue&type=script&lang=ts":
/*!*******************************************************!*\
  !*** ./src/compts/Button.vue?vue&type=script&lang=ts ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=script&lang=ts .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _yarn_$$virtual_ts_loader_virtual_bae4e07acc_5_yarn_berry_cache_ts_loader_npm_8_0_11_a6f1286fbd_7_zip_node_modules_ts_loader_index_js_clonedRuleSet_1_use_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_ts_loader_virtual_bae4e07acc_5_yarn_berry_cache_ts_loader_npm_8_0_11_a6f1286fbd_7_zip_node_modules_ts_loader_index_js_clonedRuleSet_1_use_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Button.vue?vue&type=script&lang=ts */ "./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=template&id=a827f54c&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-a827f54c")

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a827f54c")
const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" + 新增规则集合 ")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X ")
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", null, "域名匹配规则：", -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 添加 Api 规则 ")
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", null, null, -1 /* HOISTED */)
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" X ")
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Api 匹配规则： ")
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mock Response（仅 JSON）： ")
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)()

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button")

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    class: _ctx.cls,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.close && _ctx.close(...args)), ["self"]))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      class: `${_ctx.cls}--container`
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        class: `${_ctx.cls}--ctrl-type-wrap`
      }, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.ctrlList, (item, index) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
            key: index,
            onClick: $event => (_ctx.showType = item[0]),
            type: _ctx.showType === item[0] ? 'primary' : 'secondary',
            style: {"width":"120px"}
          }, {
            default: _withId(() => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[1]) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.showType === item[0] ? _ctx.state.matchedSetList.length : ''), 1 /* TEXT */)
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "type"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 2 /* CLASS */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        type: "primary",
        onClick: _ctx.handleAddSet,
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
        }
      }, {
        default: _withId(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["onClick"]),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.state.matchedSetList, (it, idx) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          key: it.id,
          class: `${_ctx.cls}--set-wrap`
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            class: `${_ctx.cls}--set-del`,
            size: "small",
            shape: "circle",
            onClick: $event => (_ctx.handleDelSet(it, _ctx.i))
          }, {
            default: _withId(() => [
              _hoisted_2
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "onClick"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            class: `${_ctx.cls}--set-domain-head`
          }, [
            _hoisted_3,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              value: it.domainTest,
              class: `${_ctx.cls}--set-domain-input`,
              placeholder: "请输入"
            }, null, 10 /* CLASS, PROPS */, ["value"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
              type: "primary",
              onClick: () => _ctx.handleAddRule(idx),
              size: "small"
            }, {
              default: _withId(() => [
                _hoisted_4
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
          ], 2 /* CLASS */),
          _hoisted_5,
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(it.rules, (rule, idx2) => {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
              key: rule.id,
              style: {"padding":"0 10px","margin":"10px 0"}
            }, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", null, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rule " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(idx2 + 1) + " ---- ", 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
                    class: `${_ctx.cls}--set-del-rule`,
                    size: "small",
                    shape: "circle",
                    onClick: $event => (_ctx.handleDelRule(rule, idx, idx2))
                  }, {
                    default: _withId(() => [
                      _hoisted_6
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["class", "onClick"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
                  _hoisted_7,
                  _hoisted_8,
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                    "onUpdate:modelValue": $event => (rule.apiTest = $event),
                    style: {"width":"100%","padding":"8px"},
                    placeholder: "请输入"
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, rule.apiTest]
                  ])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
                  _hoisted_9,
                  _hoisted_10,
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("textarea", {
                    "onUpdate:modelValue": $event => (rule.response = $event),
                    placeholder: "请输入",
                    rows: "6",
                    style: {"width":"100%","max-width":"100%","padding":"8px","resize":"vertical"}
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, rule.response]
                  ])
                ])
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */)
  ], 2 /* CLASS */)), [
    [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.show]
  ])
})

/***/ }),

/***/ "../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=template&id=15ddd3ac&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-15ddd3ac")

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    class: [
      _ctx.cls,
      `${_ctx.cls}--${_ctx.type}`,
      `${_ctx.cls}--size-${_ctx.size}`,
      `${_ctx.cls}--shape-${_ctx.shape}`,
    ],
    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ], 2 /* CLASS */))
})

/***/ }),

/***/ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!*********************************************************************************************************************!*\
  !*** ../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \*********************************************************************************************************************/
/*! namespace exports */
/*! export BaseTransition [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .BaseTransition */
/*! export Comment [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Comment */
/*! export Fragment [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Fragment */
/*! export KeepAlive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .KeepAlive */
/*! export Static [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Static */
/*! export Suspense [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Suspense */
/*! export Teleport [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Teleport */
/*! export Text [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .Text */
/*! export Transition [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .Transition */
/*! export TransitionGroup [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .TransitionGroup */
/*! export callWithAsyncErrorHandling [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .callWithAsyncErrorHandling */
/*! export callWithErrorHandling [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .callWithErrorHandling */
/*! export camelize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .camelize */
/*! export capitalize [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .capitalize */
/*! export cloneVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .cloneVNode */
/*! export compile [provided] [no usage info] [missing usage info prevents renaming] */
/*! export computed [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .computed */
/*! export createApp [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .createApp */
/*! export createBlock [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createBlock */
/*! export createCommentVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createCommentVNode */
/*! export createHydrationRenderer [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createHydrationRenderer */
/*! export createRenderer [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createRenderer */
/*! export createSSRApp [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .createSSRApp */
/*! export createSlots [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createSlots */
/*! export createStaticVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createStaticVNode */
/*! export createTextVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createTextVNode */
/*! export createVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .createVNode */
/*! export customRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .customRef */
/*! export defineAsyncComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineAsyncComponent */
/*! export defineComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineComponent */
/*! export defineEmit [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineEmit */
/*! export defineProps [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .defineProps */
/*! export devtools [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .devtools */
/*! export getCurrentInstance [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .getCurrentInstance */
/*! export getTransitionRawChildren [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .getTransitionRawChildren */
/*! export h [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .h */
/*! export handleError [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .handleError */
/*! export hydrate [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .hydrate */
/*! export initCustomFormatter [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .initCustomFormatter */
/*! export inject [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .inject */
/*! export isProxy [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isProxy */
/*! export isReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReactive */
/*! export isReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isReadonly */
/*! export isRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .isRef */
/*! export isVNode [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .isVNode */
/*! export markRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .markRaw */
/*! export mergeProps [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .mergeProps */
/*! export nextTick [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .nextTick */
/*! export onActivated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onActivated */
/*! export onBeforeMount [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeMount */
/*! export onBeforeUnmount [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeUnmount */
/*! export onBeforeUpdate [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onBeforeUpdate */
/*! export onDeactivated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onDeactivated */
/*! export onErrorCaptured [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onErrorCaptured */
/*! export onMounted [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onMounted */
/*! export onRenderTracked [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onRenderTracked */
/*! export onRenderTriggered [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onRenderTriggered */
/*! export onUnmounted [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onUnmounted */
/*! export onUpdated [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .onUpdated */
/*! export openBlock [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .openBlock */
/*! export popScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .popScopeId */
/*! export provide [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .provide */
/*! export proxyRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .proxyRefs */
/*! export pushScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .pushScopeId */
/*! export queuePostFlushCb [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .queuePostFlushCb */
/*! export reactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .reactive */
/*! export readonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .readonly */
/*! export ref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .ref */
/*! export registerRuntimeCompiler [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .registerRuntimeCompiler */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .render */
/*! export renderList [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .renderList */
/*! export renderSlot [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .renderSlot */
/*! export resolveComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveComponent */
/*! export resolveDirective [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveDirective */
/*! export resolveDynamicComponent [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveDynamicComponent */
/*! export resolveTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .resolveTransitionHooks */
/*! export setBlockTracking [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setBlockTracking */
/*! export setDevtoolsHook [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setDevtoolsHook */
/*! export setTransitionHooks [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .setTransitionHooks */
/*! export shallowReactive [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReactive */
/*! export shallowReadonly [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowReadonly */
/*! export shallowRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .shallowRef */
/*! export ssrContextKey [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .ssrContextKey */
/*! export ssrUtils [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .ssrUtils */
/*! export toDisplayString [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toDisplayString */
/*! export toHandlerKey [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js .toHandlerKey */
/*! export toHandlers [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .toHandlers */
/*! export toRaw [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRaw */
/*! export toRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRef */
/*! export toRefs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .toRefs */
/*! export transformVNodeArgs [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .transformVNodeArgs */
/*! export triggerRef [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .triggerRef */
/*! export unref [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-reactivity-npm-3.0.3-c5b53e2410-7.zip/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js .unref */
/*! export useContext [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useContext */
/*! export useCssModule [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .useCssModule */
/*! export useCssVars [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .useCssVars */
/*! export useSSRContext [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useSSRContext */
/*! export useTransitionState [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .useTransitionState */
/*! export vModelCheckbox [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vModelCheckbox */
/*! export vModelDynamic [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vModelDynamic */
/*! export vModelRadio [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vModelRadio */
/*! export vModelSelect [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vModelSelect */
/*! export vModelText [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vModelText */
/*! export vShow [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .vShow */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .version */
/*! export warn [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .warn */
/*! export watch [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .watch */
/*! export watchEffect [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .watchEffect */
/*! export withCtx [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withCtx */
/*! export withDirectives [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withDirectives */
/*! export withKeys [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .withKeys */
/*! export withModifiers [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js .withModifiers */
/*! export withScopeId [provided] [no usage info] [missing usage info prevents renaming] -> ../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js .withScopeId */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition,
/* harmony export */   "Comment": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment,
/* harmony export */   "Fragment": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment,
/* harmony export */   "KeepAlive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive,
/* harmony export */   "Static": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static,
/* harmony export */   "Suspense": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense,
/* harmony export */   "Teleport": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport,
/* harmony export */   "Text": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text,
/* harmony export */   "Transition": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition,
/* harmony export */   "TransitionGroup": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup,
/* harmony export */   "callWithAsyncErrorHandling": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling,
/* harmony export */   "callWithErrorHandling": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling,
/* harmony export */   "camelize": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize,
/* harmony export */   "capitalize": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize,
/* harmony export */   "cloneVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode,
/* harmony export */   "computed": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed,
/* harmony export */   "createApp": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp,
/* harmony export */   "createBlock": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock,
/* harmony export */   "createCommentVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode,
/* harmony export */   "createHydrationRenderer": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer,
/* harmony export */   "createRenderer": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer,
/* harmony export */   "createSSRApp": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp,
/* harmony export */   "createSlots": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots,
/* harmony export */   "createStaticVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode,
/* harmony export */   "createTextVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode,
/* harmony export */   "createVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode,
/* harmony export */   "customRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef,
/* harmony export */   "defineAsyncComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent,
/* harmony export */   "defineComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent,
/* harmony export */   "defineEmit": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit,
/* harmony export */   "defineProps": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps,
/* harmony export */   "devtools": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools,
/* harmony export */   "getCurrentInstance": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
/* harmony export */   "getTransitionRawChildren": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren,
/* harmony export */   "h": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h,
/* harmony export */   "handleError": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError,
/* harmony export */   "hydrate": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate,
/* harmony export */   "initCustomFormatter": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter,
/* harmony export */   "inject": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject,
/* harmony export */   "isProxy": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy,
/* harmony export */   "isReactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive,
/* harmony export */   "isReadonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly,
/* harmony export */   "isRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef,
/* harmony export */   "isVNode": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode,
/* harmony export */   "markRaw": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw,
/* harmony export */   "mergeProps": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps,
/* harmony export */   "nextTick": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick,
/* harmony export */   "onActivated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated,
/* harmony export */   "onBeforeMount": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount,
/* harmony export */   "onBeforeUnmount": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount,
/* harmony export */   "onBeforeUpdate": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate,
/* harmony export */   "onDeactivated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated,
/* harmony export */   "onErrorCaptured": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured,
/* harmony export */   "onMounted": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted,
/* harmony export */   "onRenderTracked": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked,
/* harmony export */   "onRenderTriggered": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered,
/* harmony export */   "onUnmounted": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted,
/* harmony export */   "onUpdated": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated,
/* harmony export */   "openBlock": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock,
/* harmony export */   "popScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId,
/* harmony export */   "provide": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide,
/* harmony export */   "proxyRefs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs,
/* harmony export */   "pushScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId,
/* harmony export */   "queuePostFlushCb": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb,
/* harmony export */   "reactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive,
/* harmony export */   "readonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly,
/* harmony export */   "ref": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref,
/* harmony export */   "registerRuntimeCompiler": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler,
/* harmony export */   "render": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "renderList": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList,
/* harmony export */   "renderSlot": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot,
/* harmony export */   "resolveComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent,
/* harmony export */   "resolveDirective": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective,
/* harmony export */   "resolveDynamicComponent": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent,
/* harmony export */   "resolveTransitionHooks": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks,
/* harmony export */   "setBlockTracking": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking,
/* harmony export */   "setDevtoolsHook": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook,
/* harmony export */   "setTransitionHooks": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks,
/* harmony export */   "shallowReactive": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive,
/* harmony export */   "shallowReadonly": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly,
/* harmony export */   "shallowRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef,
/* harmony export */   "ssrContextKey": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey,
/* harmony export */   "ssrUtils": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils,
/* harmony export */   "toDisplayString": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString,
/* harmony export */   "toHandlerKey": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey,
/* harmony export */   "toHandlers": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers,
/* harmony export */   "toRaw": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw,
/* harmony export */   "toRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef,
/* harmony export */   "toRefs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs,
/* harmony export */   "transformVNodeArgs": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs,
/* harmony export */   "triggerRef": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef,
/* harmony export */   "unref": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref,
/* harmony export */   "useContext": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext,
/* harmony export */   "useCssModule": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule,
/* harmony export */   "useCssVars": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars,
/* harmony export */   "useSSRContext": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext,
/* harmony export */   "useTransitionState": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState,
/* harmony export */   "vModelCheckbox": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox,
/* harmony export */   "vModelDynamic": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic,
/* harmony export */   "vModelRadio": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio,
/* harmony export */   "vModelSelect": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect,
/* harmony export */   "vModelText": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText,
/* harmony export */   "vShow": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow,
/* harmony export */   "version": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version,
/* harmony export */   "warn": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn,
/* harmony export */   "watch": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch,
/* harmony export */   "watchEffect": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect,
/* harmony export */   "withCtx": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx,
/* harmony export */   "withDirectives": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives,
/* harmony export */   "withKeys": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys,
/* harmony export */   "withModifiers": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers,
/* harmony export */   "withScopeId": () => /* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId,
/* harmony export */   "compile": () => /* binding */ compile
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-dom */ "../../../../.yarn/berry/cache/@vue-runtime-core-npm-3.0.3-927486f956-7.zip/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "../../../../.yarn/berry/cache/@vue-runtime-dom-npm-3.0.3-a1a02983b0-7.zip/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "../../../../.yarn/berry/cache/@vue-shared-npm-3.0.3-92f499ae97-7.zip/node_modules/@vue/shared/dist/shared.esm-bundler.js");




function initDev() {
    const target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
    target.__VUE__ = true;
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.setDevtoolsHook)(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    {
        (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.initCustomFormatter)();
    }
}

// This entry exports the runtime only, and is built as
( true) && initDev();
const compile = () => {
    if ((true)) {
        (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(`Runtime compilation is not supported in this build of Vue.` +
            ( ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
                ) /* should not happen */);
    }
};




/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gm-rp__root[data-v-a827f54c] {\n  overflow: hidden auto;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  outline: none;\n  position: fixed;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.gm-rp__root--ctrl-type-wrap[data-v-a827f54c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n}\n.gm-rp__root--container[data-v-a827f54c] {\n  position: absolute;\n  left: 50%;\n  box-sizing: border-box;\n  pointer-events: auto;\n  top: 40%;\n  transform: translate(-50%, -40%);\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 24px 0 rgba(102, 102, 102, 0.08);\n  height: 640px;\n  max-height: 100%;\n  max-width: 100%;\n  width: 720px;\n  overflow-y: auto;\n}\n.gm-rp__root--set-wrap[data-v-a827f54c] {\n  border: #36cfc9 1px solid;\n  border-radius: 4px;\n  margin: 15px 30px;\n  padding: 16px;\n  position: relative;\n}\n.gm-rp__root--set-del[data-v-a827f54c] {\n  position: absolute;\n  top: -12px;\n  right: -12px;\n}\n.gm-rp__root--set-domain-input[data-v-a827f54c] {\n  width: 300px;\n  margin-right: 10px;\n}\n.gm-rp__root--set-domain-head[data-v-a827f54c] {\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gm-rp__button[data-v-15ddd3ac] {\n  text-transform: none;\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  user-select: none;\n  touch-action: manipulation;\n  height: 32px;\n  padding: 0 15px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid #d9d9d9;\n  outline: 0;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n}\n.gm-rp__button--primary[data-v-15ddd3ac] {\n  background-color: #13c2c2;\n  border-color: #13c2c2;\n}\n.gm-rp__button--primary[data-v-15ddd3ac]:hover {\n  background-color: #36cfc9;\n  border-color: #36cfc9;\n}\n.gm-rp__button--primary[data-v-15ddd3ac]:active {\n  background-color: #00474f;\n  border-color: #00474f;\n}\n.gm-rp__button--secondary[data-v-15ddd3ac] {\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-color: #bfbfbf;\n}\n.gm-rp__button--secondary[data-v-15ddd3ac]:hover {\n  border-color: #36cfc9;\n  color: #36cfc9;\n}\n.gm-rp__button--secondary[data-v-15ddd3ac]:active {\n  border-color: #006d75;\n  color: #006d75;\n}\n.gm-rp__button--size-default[data-v-15ddd3ac] {\n  min-width: 32px;\n}\n.gm-rp__button--size-small[data-v-15ddd3ac] {\n  height: 24px;\n  min-width: 24px;\n  padding: 0 12px;\n}\n.gm-rp__button--shape-circle[data-v-15ddd3ac] {\n  border-radius: 50%;\n  padding: 0;\n}\n.gm-rp__button--shape-round[data-v-15ddd3ac] {\n  border-radius: 32px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./src/global.less":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./src/global.less ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[class*='gm-rp__'] {\n  font-size: 14px;\n  font-family: Penrose, 'PingFang SC', 'Hiragino Sans GB', Tahoma, Arial, 'Lantinghei SC', 'Microsoft YaHei', '\\5FAE软雅黑', sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-feature-settings: 'tnum';\n  font-weight: 400;\n}\n.gm-rp__page-root-fixed-button {\n  position: fixed;\n  top: 148px;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  z-index: 4000;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.3s;\n  box-shadow: 0 0 10px 0px rgb(0 0 0 / 35%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b5f5ec;\n  color: rgba(0, 0, 0, 0.65);\n}\n.gm-rp__page-root-fixed-button:hover {\n  opacity: 1;\n}\n.gm-rp__page-root-fixed-button.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

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

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_style_index_0_id_a827f54c_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=style&index=0&id=a827f54c&scoped=true&lang=less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_style_index_0_id_a827f54c_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Root_vue_vue_type_style_index_0_id_a827f54c_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/cjs.js!./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_style_index_0_id_15ddd3ac_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!../../.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/stylePostLoader.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=style&index=0&id=15ddd3ac&scoped=true&lang=less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_style_index_0_id_15ddd3ac_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_stylePostLoader_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_yarn_berry_cache_vue_loader_npm_16_0_0_8cfe737dff_7_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_Button_vue_vue_type_style_index_0_id_15ddd3ac_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/global.less":
/*!*************************!*\
  !*** ./src/global.less ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_global_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!../.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./global.less */ "./.yarn/$$virtual/css-loader-virtual-cfb3398efa/5/.yarn/berry/cache/css-loader-npm-5.0.1-d2034d30e0-7.zip/node_modules/css-loader/dist/cjs.js!./.yarn/$$virtual/less-loader-virtual-ecae940d78/5/.yarn/berry/cache/less-loader-npm-7.1.0-515a1e35fe-7.zip/node_modules/less-loader/dist/cjs.js??clonedRuleSet-2.use[2]!./src/global.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _yarn_$$virtual_style_loader_virtual_9cffe23b25_5_yarn_berry_cache_style_loader_npm_2_0_0_b9a5c4a2aa_7_zip_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_global_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_css_loader_virtual_cfb3398efa_5_yarn_berry_cache_css_loader_npm_5_0_1_d2034d30e0_7_zip_node_modules_css_loader_dist_cjs_js_yarn_$$virtual_less_loader_virtual_ecae940d78_5_yarn_berry_cache_less_loader_npm_7_1_0_515a1e35fe_7_zip_node_modules_less_loader_dist_cjs_js_clonedRuleSet_2_use_2_global_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/style-loader-virtual-9cffe23b25/5/.yarn/berry/cache/style-loader-npm-2.0.0-b9a5c4a2aa-7.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/Setting/Root.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/data */ "./src/data/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _compts_Button_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/compts/Button.vue */ "./src/compts/Button.vue");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common */ "./src/common/index.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
    components: { Button: _compts_Button_vue__WEBPACK_IMPORTED_MODULE_2__.default },
    setup() {
        const state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
            matchedSetList: [],
        });
        const show = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        const showType = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)('CURRENT');
        const isAll = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => showType.value === 'ALL');
        (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(() => state.matchedSetList, () => {
            _data__WEBPACK_IMPORTED_MODULE_0__.Store.updateSetList(state.matchedSetList);
        }, { deep: true });
        (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(isAll, () => {
            console.log(222, isAll);
            state.matchedSetList = isAll.value
                ? _data__WEBPACK_IMPORTED_MODULE_0__.Store.getSetList()
                : _data__WEBPACK_IMPORTED_MODULE_0__.Store.getMatchedSetList();
        }, { immediate: true });
        return {
            cls: (0,_common__WEBPACK_IMPORTED_MODULE_3__.ns)('root'),
            state,
            show,
            showType,
            isAll,
            ctrlList: [
                ['CURRENT', '当前匹配'],
                ['ALL', '所有规则'],
            ],
            open: () => {
                show.value = true;
            },
            close: () => {
                show.value = false;
            },
            handleAddSet: () => {
                state.matchedSetList.unshift({
                    domainTest: location.hostname,
                    rules: [],
                    id: (0,_common__WEBPACK_IMPORTED_MODULE_3__.uuid4)(),
                });
            },
            handleAddRule: (i) => {
                state.matchedSetList[i].rules.push({
                    id: (0,_common__WEBPACK_IMPORTED_MODULE_3__.uuid4)(),
                    apiTest: '',
                    response: '',
                    disabled: false,
                });
            },
            handleDelSet: (item) => {
                if (confirm('是否删除该集合，包括其下所有 Api 配置？')) {
                    _data__WEBPACK_IMPORTED_MODULE_0__.Store.deleteSets([item.id]);
                    state.matchedSetList = state.matchedSetList.filter(it => it !== item);
                }
            },
            handleDelRule: (item, setIdx, _ruleIdx) => {
                state.matchedSetList[setIdx].rules = state.matchedSetList[setIdx].rules.filter(it => it !== item);
            },
        };
    },
}));


/***/ }),

/***/ "./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/ts-loader-virtual-bae4e07acc/5/.yarn/berry/cache/ts-loader-npm-8.0.11-a6f1286fbd-7.zip/node_modules/ts-loader/index.js??clonedRuleSet-1.use!../../../../.yarn/berry/cache/vue-loader-npm-16.0.0-8cfe737dff-7.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/compts/Button.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common */ "./src/common/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
    name: 'RPButton',
    props: {
        type: {
            type: String,
            default: 'secondary',
        },
        size: {
            type: String,
            default: 'default',
        },
        shape: {
            type: String,
            default: 'default',
        },
        onClick: {
            type: Function,
            default: () => null,
        },
    },
    setup(props, _ctx) {
        const innerLoading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
        const handleClick = (e) => __awaiter(this, void 0, void 0, function* () {
            // ctx.emit('click', e);
            if (innerLoading.value)
                return;
            try {
                innerLoading.value = true;
                yield props.onClick(e); // ? 能触发 @click
            }
            catch (_) {
            }
            finally {
                innerLoading.value = false;
            }
        });
        return {
            cls: (0,_common__WEBPACK_IMPORTED_MODULE_0__.ns)('button'),
            handleClick,
        };
    },
}));


/***/ }),

/***/ "./src/Setting/index.ts":
/*!******************************!*\
  !*** ./src/Setting/index.ts ***!
  \******************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../../../.yarn/berry/cache/vue-npm-3.0.3-bc2c888cf8-7.zip/node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _Root_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root.vue */ "./src/Setting/Root.vue");


function render(el) {
    const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_Root_vue__WEBPACK_IMPORTED_MODULE_1__.default);
    const $root = vm.mount(el);
    return {
        $root,
        open: () => {
            return $root.open();
        },
        close: () => {
            return $root.close();
        },
    };
}


/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! namespace exports */
/*! export NAMESPACE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export PREFIX [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cache [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isMatchUrl [provided] [no usage info] [missing usage info prevents renaming] -> ./src/common/utils.ts .isMatchUrl */
/*! export isPromise [provided] [no usage info] [missing usage info prevents renaming] -> ./src/common/utils.ts .isPromise */
/*! export ns [provided] [no usage info] [missing usage info prevents renaming] */
/*! export safeParse [provided] [no usage info] [missing usage info prevents renaming] -> ./src/common/utils.ts .safeParse */
/*! export uuid4 [provided] [no usage info] [missing usage info prevents renaming] -> ./src/common/utils.ts .uuid4 */
/*! export vmCtx [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMatchUrl": () => /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isMatchUrl,
/* harmony export */   "isPromise": () => /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.isPromise,
/* harmony export */   "safeParse": () => /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.safeParse,
/* harmony export */   "uuid4": () => /* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.uuid4,
/* harmony export */   "cache": () => /* binding */ cache,
/* harmony export */   "NAMESPACE": () => /* binding */ NAMESPACE,
/* harmony export */   "PREFIX": () => /* binding */ PREFIX,
/* harmony export */   "vmCtx": () => /* binding */ vmCtx,
/* harmony export */   "ns": () => /* binding */ ns
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/common/utils.ts");

const cache = new WeakMap();
const NAMESPACE = location.host;
const PREFIX = 'gm-rp';
const vmCtx = typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
function ns(c = '') {
    return `${PREFIX}__${c}`;
}


/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/*! namespace exports */
/*! export isMatchUrl [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isPromise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export safeParse [provided] [no usage info] [missing usage info prevents renaming] */
/*! export uuid4 [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "safeParse": () => /* binding */ safeParse,
/* harmony export */   "isPromise": () => /* binding */ isPromise,
/* harmony export */   "uuid4": () => /* binding */ uuid4,
/* harmony export */   "isMatchUrl": () => /* binding */ isMatchUrl
/* harmony export */ });
function safeParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (error) {
        return str;
    }
}
function isPromise(obj) {
    return (!!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function');
}
function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function isMatchUrl(matchRule, url) {
    if (/^\/.*\/$/.test(matchRule)) {
        return new RegExp(matchRule, 'ig').test(url);
    }
    return url.includes(matchRule);
}


/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/*! namespace exports */
/*! export Store [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => /* binding */ Store
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common */ "./src/common/index.ts");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/values */ "../../../../.yarn/berry/cache/lodash-npm-4.17.20-c0db62021c-7.zip/node_modules/lodash/values.js");
/* harmony import */ var lodash_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_values__WEBPACK_IMPORTED_MODULE_1__);


// const _key = (k: string) => `${NAMESPACE}_${k}`;
const KEY_SET = 'all_set';
const Store = {
    NAMESPACE: _common__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE,
    getStoreObject() {
        return GM_getValue(KEY_SET) || {};
    },
    getSetList() {
        let res = lodash_values__WEBPACK_IMPORTED_MODULE_1___default()(Store.getStoreObject());
        res = Array.isArray(res) ? res : [];
        return res;
    },
    getMatchedSetList() {
        return Store.getSetList().filter(it => (0,_common__WEBPACK_IMPORTED_MODULE_0__.isMatchUrl)(it.domainTest, location.host));
    },
    findCurrentSet() {
        const ruleSet = Store.getSetList().find(it => new RegExp(it.domainTest, 'ig').test(location.host)) || {
            id: (0,_common__WEBPACK_IMPORTED_MODULE_0__.uuid4)(),
            domainTest: location.host,
            rules: [],
        };
        return ruleSet;
    },
    updateSetList(input) {
        const store = Store.getStoreObject();
        input.forEach(it => {
            const target = store[it.id];
            if (target) {
                return Object.assign(target, it);
            }
            store[it.id] = it;
        });
        GM_setValue(KEY_SET, store);
    },
    deleteSets(ids) {
        const store = Store.getStoreObject();
        ids.forEach(id => {
            delete store[id];
        });
        GM_setValue(KEY_SET, store);
    },
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proxy_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy/fetch */ "./src/proxy/fetch.ts");
/* harmony import */ var _proxy_xhr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy/xhr */ "./src/proxy/xhr.ts");
/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.less */ "./src/global.less");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/common/index.ts");
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Setting */ "./src/Setting/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// TODO change to async

// import(/* webpackChunkName: 'setting' */ './Setting');
function bootstrap() {
    let handler;
    let isDrag = false;
    let isMove = false;
    let tX = 0;
    let tY = 0;
    let elRect = null;
    const el = document.createElement('div');
    el.innerText = 'o_O||';
    el.className = 'gm-rp__page-root-fixed-button';
    function onClickEl(_e) {
        if (isMove) {
            return;
        }
        if (!handler) {
            handler = (0,_Setting__WEBPACK_IMPORTED_MODULE_4__.render)(elForMount);
            handler.$root.$watch('show', (newVal) => {
                el.classList[newVal ? 'add' : 'remove']('hidden');
            });
        }
        handler.open();
    }
    el.addEventListener('mousedown', e => {
        isDrag = true;
        isMove = false;
        elRect = el.getBoundingClientRect();
        tX = e.clientX - elRect.left;
        tY = e.clientY - elRect.top;
    });
    _common__WEBPACK_IMPORTED_MODULE_3__.vmCtx.addEventListener('mouseup', (e) => __awaiter(this, void 0, void 0, function* () {
        isDrag = false;
        if (isMove) {
            isMove = false;
            return;
        }
        // mock click event
        if (e.target === el) {
            yield onClickEl(e);
        }
    }));
    _common__WEBPACK_IMPORTED_MODULE_3__.vmCtx.addEventListener('mousemove', e => {
        isMove = true;
        if (!isDrag) {
            return;
        }
        e.preventDefault();
        let left = e.clientX - tX;
        left = Math.min(left, _common__WEBPACK_IMPORTED_MODULE_3__.vmCtx.innerWidth - elRect.width);
        left = Math.max(left, 0);
        let top = e.clientY - tY;
        top = Math.min(top, _common__WEBPACK_IMPORTED_MODULE_3__.vmCtx.innerHeight - elRect.height);
        top = Math.max(top, 0);
        el.style.left = left + 'px';
        el.style.top = top + 'px';
    });
    const elForMount = document.createElement('div');
    document.body.appendChild(el);
    document.body.appendChild(elForMount);
}
if (document.readyState === 'loading') {
    _common__WEBPACK_IMPORTED_MODULE_3__.vmCtx.addEventListener('DOMContentLoaded', () => {
        bootstrap();
    });
}
else {
    bootstrap();
}


/***/ }),

/***/ "./src/proxy/fetch.ts":
/*!****************************!*\
  !*** ./src/proxy/fetch.ts ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common */ "./src/common/index.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data */ "./src/data/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function proxyRes(response) {
    const ruleSet = _data__WEBPACK_IMPORTED_MODULE_1__.Store.findCurrentSet();
    const matchedRule = ruleSet.rules.find(it => (0,_common__WEBPACK_IMPORTED_MODULE_0__.isMatchUrl)(it.apiTest, response.url));
    return matchedRule === null || matchedRule === void 0 ? void 0 : matchedRule.response;
}
function log({ method, url, status, response }) {
    GM_log(`❗️ [fetch] Response is proxyed:\n`);
    console.table({
        method,
        url,
        status,
        'proxyed response': response,
    });
}
if (typeof Response !== 'undefined') {
    const nativeFetch = _common__WEBPACK_IMPORTED_MODULE_0__.vmCtx.fetch;
    const nativeJson = Response.prototype.json;
    const nativeText = Response.prototype.text;
    Response.prototype.json = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const nativeRes = yield nativeJson.apply(this, args);
            const payload = _common__WEBPACK_IMPORTED_MODULE_0__.cache.get(this);
            if (payload === null || payload === void 0 ? void 0 : payload.proxyedResponse) {
                log({
                    method: payload.method,
                    url: this.url,
                    status: this.status,
                    response: payload.proxyedResponse,
                });
                return JSON.parse(payload.proxyedResponse);
            }
            return nativeRes;
        });
    };
    Response.prototype.text = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const nativeRes = yield nativeText.apply(this, args);
            const payload = _common__WEBPACK_IMPORTED_MODULE_0__.cache.get(this);
            if (payload === null || payload === void 0 ? void 0 : payload.proxyedResponse) {
                log({
                    method: payload.method,
                    url: this.url,
                    status: this.status,
                    response: payload.proxyedResponse,
                });
                return payload.proxyedResponse;
            }
            return nativeRes;
        });
    };
    _common__WEBPACK_IMPORTED_MODULE_0__.vmCtx.fetch = function (input, init) {
        return __awaiter(this, void 0, void 0, function* () {
            let method = 'GET';
            if (input instanceof Request) {
                method = input.method;
            }
            else {
                method = (init === null || init === void 0 ? void 0 : init.method) || method;
            }
            const res = yield nativeFetch.apply(this, [input, init]);
            const proxyedResponse = proxyRes(res);
            _common__WEBPACK_IMPORTED_MODULE_0__.cache.set(res, {
                method,
                url: res.url,
                proxyedResponse,
            });
            return res;
        });
    };
}


/***/ }),

/***/ "./src/proxy/xhr.ts":
/*!**************************!*\
  !*** ./src/proxy/xhr.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common */ "./src/common/index.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data */ "./src/data/index.ts");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _mockResponse, _url, _method, _proxyed, _a;


const NativeXMLHttpRequest = _common__WEBPACK_IMPORTED_MODULE_0__.vmCtx.XMLHttpRequest;
_common__WEBPACK_IMPORTED_MODULE_0__.vmCtx.XMLHttpRequest = (_a = class extends (NativeXMLHttpRequest) {
        constructor() {
            super();
            _mockResponse.set(this, void 0);
            _url.set(this, void 0);
            _method.set(this, void 0);
            _proxyed.set(this, false);
            ['load', 'error'].forEach(ev => {
                this.addEventListener(ev, () => {
                    if (!__classPrivateFieldGet(this, _proxyed))
                        return;
                    GM_log(`❗️ [XHR] Response is proxyed:\n`);
                    console.table({
                        method: __classPrivateFieldGet(this, _method),
                        url: __classPrivateFieldGet(this, _url),
                        status: this.status,
                        'proxyed response': __classPrivateFieldGet(this, _mockResponse),
                    });
                });
            });
        }
        get response() {
            return __classPrivateFieldGet(this, _mockResponse) || super.response;
        }
        get responseText() {
            return __classPrivateFieldGet(this, _mockResponse) || super.responseText;
        }
        open(method, url) {
            __classPrivateFieldSet(this, _method, method);
            __classPrivateFieldSet(this, _url, url);
            if (/^(https?:\/\/)|(\/\/)/.test(url)) {
                __classPrivateFieldSet(this, _url, url);
            }
            else {
                __classPrivateFieldSet(this, _url, `${location.origin}/${url.replace(/^\//, '')}`);
            }
            const ruleSet = _data__WEBPACK_IMPORTED_MODULE_1__.Store.findCurrentSet();
            const matchedRule = ruleSet.rules.find(it => (0,_common__WEBPACK_IMPORTED_MODULE_0__.isMatchUrl)(it.apiTest, __classPrivateFieldGet(this, _url)));
            if (matchedRule === null || matchedRule === void 0 ? void 0 : matchedRule.response) {
                __classPrivateFieldSet(this, _mockResponse, matchedRule.response);
                __classPrivateFieldSet(this, _proxyed, true);
            }
            return super.open(method, url);
        }
    },
    _mockResponse = new WeakMap(),
    _url = new WeakMap(),
    _method = new WeakMap(),
    _proxyed = new WeakMap(),
    _a);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=index.js.map