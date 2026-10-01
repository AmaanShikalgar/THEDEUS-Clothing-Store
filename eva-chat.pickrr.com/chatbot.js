(function() {
    "use strict";

    function qm(c) {
        return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
    }
    var vu = {
            exports: {}
        },
        it = {};
    var Vo;

    function Lm() {
        if (Vo) return it;
        Vo = 1;
        var c = Symbol.for("react.transitional.element"),
            n = Symbol.for("react.portal"),
            s = Symbol.for("react.fragment"),
            r = Symbol.for("react.strict_mode"),
            d = Symbol.for("react.profiler"),
            h = Symbol.for("react.consumer"),
            p = Symbol.for("react.context"),
            _ = Symbol.for("react.forward_ref"),
            b = Symbol.for("react.suspense"),
            g = Symbol.for("react.memo"),
            v = Symbol.for("react.lazy"),
            T = Symbol.for("react.activity"),
            O = Symbol.iterator;

        function Y(y) {
            return y === null || typeof y != "object" ? null : (y = O && y[O] || y["@@iterator"], typeof y == "function" ? y : null)
        }
        var q = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            R = Object.assign,
            j = {};

        function H(y, D, Q) {
            this.props = y, this.context = D, this.refs = j, this.updater = Q || q
        }
        H.prototype.isReactComponent = {}, H.prototype.setState = function(y, D) {
            if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, y, D, "setState")
        }, H.prototype.forceUpdate = function(y) {
            this.updater.enqueueForceUpdate(this, y, "forceUpdate")
        };

        function k() {}
        k.prototype = H.prototype;

        function G(y, D, Q) {
            this.props = y, this.context = D, this.refs = j, this.updater = Q || q
        }
        var W = G.prototype = new k;
        W.constructor = G, R(W, H.prototype), W.isPureReactComponent = !0;
        var at = Array.isArray;

        function X() {}
        var V = {
                H: null,
                A: null,
                T: null,
                S: null
            },
            P = Object.prototype.hasOwnProperty;

        function et(y, D, Q) {
            var Z = Q.ref;
            return {
                $$typeof: c,
                type: y,
                key: D,
                ref: Z !== void 0 ? Z : null,
                props: Q
            }
        }

        function pt(y, D) {
            return et(y.type, D, y.props)
        }

        function ft(y) {
            return typeof y == "object" && y !== null && y.$$typeof === c
        }

        function yt(y) {
            var D = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + y.replace(/[=:]/g, function(Q) {
                return D[Q]
            })
        }
        var ne = /\/+/g;

        function qt(y, D) {
            return typeof y == "object" && y !== null && y.key != null ? yt("" + y.key) : D.toString(36)
        }

        function Ut(y) {
            switch (y.status) {
                case "fulfilled":
                    return y.value;
                case "rejected":
                    throw y.reason;
                default:
                    switch (typeof y.status == "string" ? y.then(X, X) : (y.status = "pending", y.then(function(D) {
                        y.status === "pending" && (y.status = "fulfilled", y.value = D)
                    }, function(D) {
                        y.status === "pending" && (y.status = "rejected", y.reason = D)
                    })), y.status) {
                        case "fulfilled":
                            return y.value;
                        case "rejected":
                            throw y.reason
                    }
            }
            throw y
        }

        function M(y, D, Q, Z, lt) {
            var nt = typeof y;
            (nt === "undefined" || nt === "boolean") && (y = null);
            var rt = !1;
            if (y === null) rt = !0;
            else switch (nt) {
                case "bigint":
                case "string":
                case "number":
                    rt = !0;
                    break;
                case "object":
                    switch (y.$$typeof) {
                        case c:
                        case n:
                            rt = !0;
                            break;
                        case v:
                            return rt = y._init, M(rt(y._payload), D, Q, Z, lt)
                    }
            }
            if (rt) return lt = lt(y), rt = Z === "" ? "." + qt(y, 0) : Z, at(lt) ? (Q = "", rt != null && (Q = rt.replace(ne, "$&/") + "/"), M(lt, D, Q, "", function(Wt) {
                return Wt
            })) : lt != null && (ft(lt) && (lt = pt(lt, Q + (lt.key == null || y && y.key === lt.key ? "" : ("" + lt.key).replace(ne, "$&/") + "/") + rt)), D.push(lt)), 1;
            rt = 0;
            var wt = Z === "" ? "." : Z + ":";
            if (at(y))
                for (var _t = 0; _t < y.length; _t++) Z = y[_t], nt = wt + qt(Z, _t), rt += M(Z, D, Q, nt, lt);
            else if (_t = Y(y), typeof _t == "function")
                for (y = _t.call(y), _t = 0; !(Z = y.next()).done;) Z = Z.value, nt = wt + qt(Z, _t++), rt += M(Z, D, Q, nt, lt);
            else if (nt === "object") {
                if (typeof y.then == "function") return M(Ut(y), D, Q, Z, lt);
                throw D = String(y), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.")
            }
            return rt
        }

        function L(y, D, Q) {
            if (y == null) return y;
            var Z = [],
                lt = 0;
            return M(y, Z, "", "", function(nt) {
                return D.call(Q, nt, lt++)
            }), Z
        }

        function F(y) {
            if (y._status === -1) {
                var D = y._result;
                D = D(), D.then(function(Q) {
                    (y._status === 0 || y._status === -1) && (y._status = 1, y._result = Q)
                }, function(Q) {
                    (y._status === 0 || y._status === -1) && (y._status = 2, y._result = Q)
                }), y._status === -1 && (y._status = 0, y._result = D)
            }
            if (y._status === 1) return y._result.default;
            throw y._result
        }
        var ot = typeof reportError == "function" ? reportError : function(y) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var D = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
                        error: y
                    });
                    if (!window.dispatchEvent(D)) return
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", y);
                    return
                }
                console.error(y)
            },
            st = {
                map: L,
                forEach: function(y, D, Q) {
                    L(y, function() {
                        D.apply(this, arguments)
                    }, Q)
                },
                count: function(y) {
                    var D = 0;
                    return L(y, function() {
                        D++
                    }), D
                },
                toArray: function(y) {
                    return L(y, function(D) {
                        return D
                    }) || []
                },
                only: function(y) {
                    if (!ft(y)) throw Error("React.Children.only expected to receive a single React element child.");
                    return y
                }
            };
        return it.Activity = T, it.Children = st, it.Component = H, it.Fragment = s, it.Profiler = d, it.PureComponent = G, it.StrictMode = r, it.Suspense = b, it.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, it.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(y) {
                return V.H.useMemoCache(y)
            }
        }, it.cache = function(y) {
            return function() {
                return y.apply(null, arguments)
            }
        }, it.cacheSignal = function() {
            return null
        }, it.cloneElement = function(y, D, Q) {
            if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
            var Z = R({}, y.props),
                lt = y.key;
            if (D != null)
                for (nt in D.key !== void 0 && (lt = "" + D.key), D) !P.call(D, nt) || nt === "key" || nt === "__self" || nt === "__source" || nt === "ref" && D.ref === void 0 || (Z[nt] = D[nt]);
            var nt = arguments.length - 2;
            if (nt === 1) Z.children = Q;
            else if (1 < nt) {
                for (var rt = Array(nt), wt = 0; wt < nt; wt++) rt[wt] = arguments[wt + 2];
                Z.children = rt
            }
            return et(y.type, lt, Z)
        }, it.createContext = function(y) {
            return y = {
                $$typeof: p,
                _currentValue: y,
                _currentValue2: y,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, y.Provider = y, y.Consumer = {
                $$typeof: h,
                _context: y
            }, y
        }, it.createElement = function(y, D, Q) {
            var Z, lt = {},
                nt = null;
            if (D != null)
                for (Z in D.key !== void 0 && (nt = "" + D.key), D) P.call(D, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (lt[Z] = D[Z]);
            var rt = arguments.length - 2;
            if (rt === 1) lt.children = Q;
            else if (1 < rt) {
                for (var wt = Array(rt), _t = 0; _t < rt; _t++) wt[_t] = arguments[_t + 2];
                lt.children = wt
            }
            if (y && y.defaultProps)
                for (Z in rt = y.defaultProps, rt) lt[Z] === void 0 && (lt[Z] = rt[Z]);
            return et(y, nt, lt)
        }, it.createRef = function() {
            return {
                current: null
            }
        }, it.forwardRef = function(y) {
            return {
                $$typeof: _,
                render: y
            }
        }, it.isValidElement = ft, it.lazy = function(y) {
            return {
                $$typeof: v,
                _payload: {
                    _status: -1,
                    _result: y
                },
                _init: F
            }
        }, it.memo = function(y, D) {
            return {
                $$typeof: g,
                type: y,
                compare: D === void 0 ? null : D
            }
        }, it.startTransition = function(y) {
            var D = V.T,
                Q = {};
            V.T = Q;
            try {
                var Z = y(),
                    lt = V.S;
                lt !== null && lt(Q, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(X, ot)
            } catch (nt) {
                ot(nt)
            } finally {
                D !== null && Q.types !== null && (D.types = Q.types), V.T = D
            }
        }, it.unstable_useCacheRefresh = function() {
            return V.H.useCacheRefresh()
        }, it.use = function(y) {
            return V.H.use(y)
        }, it.useActionState = function(y, D, Q) {
            return V.H.useActionState(y, D, Q)
        }, it.useCallback = function(y, D) {
            return V.H.useCallback(y, D)
        }, it.useContext = function(y) {
            return V.H.useContext(y)
        }, it.useDebugValue = function() {}, it.useDeferredValue = function(y, D) {
            return V.H.useDeferredValue(y, D)
        }, it.useEffect = function(y, D) {
            return V.H.useEffect(y, D)
        }, it.useEffectEvent = function(y) {
            return V.H.useEffectEvent(y)
        }, it.useId = function() {
            return V.H.useId()
        }, it.useImperativeHandle = function(y, D, Q) {
            return V.H.useImperativeHandle(y, D, Q)
        }, it.useInsertionEffect = function(y, D) {
            return V.H.useInsertionEffect(y, D)
        }, it.useLayoutEffect = function(y, D) {
            return V.H.useLayoutEffect(y, D)
        }, it.useMemo = function(y, D) {
            return V.H.useMemo(y, D)
        }, it.useOptimistic = function(y, D) {
            return V.H.useOptimistic(y, D)
        }, it.useReducer = function(y, D, Q) {
            return V.H.useReducer(y, D, Q)
        }, it.useRef = function(y) {
            return V.H.useRef(y)
        }, it.useState = function(y) {
            return V.H.useState(y)
        }, it.useSyncExternalStore = function(y, D, Q) {
            return V.H.useSyncExternalStore(y, D, Q)
        }, it.useTransition = function() {
            return V.H.useTransition()
        }, it.version = "19.2.7", it
    }
    var Ko;

    function Vn() {
        return Ko || (Ko = 1, vu.exports = Lm()), vu.exports
    }
    var J = Vn();
    const zt = qm(J);
    var yu = {
            exports: {}
        },
        Ja = {},
        bu = {
            exports: {}
        },
        xu = {};
    var Jo;

    function km() {
        return Jo || (Jo = 1, (function(c) {
            function n(M, L) {
                var F = M.length;
                M.push(L);
                t: for (; 0 < F;) {
                    var ot = F - 1 >>> 1,
                        st = M[ot];
                    if (0 < d(st, L)) M[ot] = L, M[F] = st, F = ot;
                    else break t
                }
            }

            function s(M) {
                return M.length === 0 ? null : M[0]
            }

            function r(M) {
                if (M.length === 0) return null;
                var L = M[0],
                    F = M.pop();
                if (F !== L) {
                    M[0] = F;
                    t: for (var ot = 0, st = M.length, y = st >>> 1; ot < y;) {
                        var D = 2 * (ot + 1) - 1,
                            Q = M[D],
                            Z = D + 1,
                            lt = M[Z];
                        if (0 > d(Q, F)) Z < st && 0 > d(lt, Q) ? (M[ot] = lt, M[Z] = F, ot = Z) : (M[ot] = Q, M[D] = F, ot = D);
                        else if (Z < st && 0 > d(lt, F)) M[ot] = lt, M[Z] = F, ot = Z;
                        else break t
                    }
                }
                return L
            }

            function d(M, L) {
                var F = M.sortIndex - L.sortIndex;
                return F !== 0 ? F : M.id - L.id
            }
            if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var h = performance;
                c.unstable_now = function() {
                    return h.now()
                }
            } else {
                var p = Date,
                    _ = p.now();
                c.unstable_now = function() {
                    return p.now() - _
                }
            }
            var b = [],
                g = [],
                v = 1,
                T = null,
                O = 3,
                Y = !1,
                q = !1,
                R = !1,
                j = !1,
                H = typeof setTimeout == "function" ? setTimeout : null,
                k = typeof clearTimeout == "function" ? clearTimeout : null,
                G = typeof setImmediate < "u" ? setImmediate : null;

            function W(M) {
                for (var L = s(g); L !== null;) {
                    if (L.callback === null) r(g);
                    else if (L.startTime <= M) r(g), L.sortIndex = L.expirationTime, n(b, L);
                    else break;
                    L = s(g)
                }
            }

            function at(M) {
                if (R = !1, W(M), !q)
                    if (s(b) !== null) q = !0, X || (X = !0, yt());
                    else {
                        var L = s(g);
                        L !== null && Ut(at, L.startTime - M)
                    }
            }
            var X = !1,
                V = -1,
                P = 5,
                et = -1;

            function pt() {
                return j ? !0 : !(c.unstable_now() - et < P)
            }

            function ft() {
                if (j = !1, X) {
                    var M = c.unstable_now();
                    et = M;
                    var L = !0;
                    try {
                        t: {
                            q = !1,
                            R && (R = !1, k(V), V = -1),
                            Y = !0;
                            var F = O;
                            try {
                                e: {
                                    for (W(M), T = s(b); T !== null && !(T.expirationTime > M && pt());) {
                                        var ot = T.callback;
                                        if (typeof ot == "function") {
                                            T.callback = null, O = T.priorityLevel;
                                            var st = ot(T.expirationTime <= M);
                                            if (M = c.unstable_now(), typeof st == "function") {
                                                T.callback = st, W(M), L = !0;
                                                break e
                                            }
                                            T === s(b) && r(b), W(M)
                                        } else r(b);
                                        T = s(b)
                                    }
                                    if (T !== null) L = !0;
                                    else {
                                        var y = s(g);
                                        y !== null && Ut(at, y.startTime - M), L = !1
                                    }
                                }
                                break t
                            }
                            finally {
                                T = null, O = F, Y = !1
                            }
                            L = void 0
                        }
                    }
                    finally {
                        L ? yt() : X = !1
                    }
                }
            }
            var yt;
            if (typeof G == "function") yt = function() {
                G(ft)
            };
            else if (typeof MessageChannel < "u") {
                var ne = new MessageChannel,
                    qt = ne.port2;
                ne.port1.onmessage = ft, yt = function() {
                    qt.postMessage(null)
                }
            } else yt = function() {
                H(ft, 0)
            };

            function Ut(M, L) {
                V = H(function() {
                    M(c.unstable_now())
                }, L)
            }
            c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(M) {
                M.callback = null
            }, c.unstable_forceFrameRate = function(M) {
                0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < M ? Math.floor(1e3 / M) : 5
            }, c.unstable_getCurrentPriorityLevel = function() {
                return O
            }, c.unstable_next = function(M) {
                switch (O) {
                    case 1:
                    case 2:
                    case 3:
                        var L = 3;
                        break;
                    default:
                        L = O
                }
                var F = O;
                O = L;
                try {
                    return M()
                } finally {
                    O = F
                }
            }, c.unstable_requestPaint = function() {
                j = !0
            }, c.unstable_runWithPriority = function(M, L) {
                switch (M) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        M = 3
                }
                var F = O;
                O = M;
                try {
                    return L()
                } finally {
                    O = F
                }
            }, c.unstable_scheduleCallback = function(M, L, F) {
                var ot = c.unstable_now();
                switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ot + F : ot) : F = ot, M) {
                    case 1:
                        var st = -1;
                        break;
                    case 2:
                        st = 250;
                        break;
                    case 5:
                        st = 1073741823;
                        break;
                    case 4:
                        st = 1e4;
                        break;
                    default:
                        st = 5e3
                }
                return st = F + st, M = {
                    id: v++,
                    callback: L,
                    priorityLevel: M,
                    startTime: F,
                    expirationTime: st,
                    sortIndex: -1
                }, F > ot ? (M.sortIndex = F, n(g, M), s(b) === null && M === s(g) && (R ? (k(V), V = -1) : R = !0, Ut(at, F - ot))) : (M.sortIndex = st, n(b, M), q || Y || (q = !0, X || (X = !0, yt()))), M
            }, c.unstable_shouldYield = pt, c.unstable_wrapCallback = function(M) {
                var L = O;
                return function() {
                    var F = O;
                    O = L;
                    try {
                        return M.apply(this, arguments)
                    } finally {
                        O = F
                    }
                }
            }
        })(xu)), xu
    }
    var $o;

    function Gm() {
        return $o || ($o = 1, bu.exports = km()), bu.exports
    }
    var Su = {
            exports: {}
        },
        le = {};
    var Wo;

    function Qm() {
        if (Wo) return le;
        Wo = 1;
        var c = Vn();

        function n(b) {
            var g = "https://react.dev/errors/" + b;
            if (1 < arguments.length) {
                g += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var v = 2; v < arguments.length; v++) g += "&args[]=" + encodeURIComponent(arguments[v])
            }
            return "Minified React error #" + b + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }

        function s() {}
        var r = {
                d: {
                    f: s,
                    r: function() {
                        throw Error(n(522))
                    },
                    D: s,
                    C: s,
                    L: s,
                    m: s,
                    X: s,
                    S: s,
                    M: s
                },
                p: 0,
                findDOMNode: null
            },
            d = Symbol.for("react.portal");

        function h(b, g, v) {
            var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: d,
                key: T == null ? null : "" + T,
                children: b,
                containerInfo: g,
                implementation: v
            }
        }
        var p = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

        function _(b, g) {
            if (b === "font") return "";
            if (typeof g == "string") return g === "use-credentials" ? g : ""
        }
        return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, le.createPortal = function(b, g) {
            var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(n(299));
            return h(b, g, null, v)
        }, le.flushSync = function(b) {
            var g = p.T,
                v = r.p;
            try {
                if (p.T = null, r.p = 2, b) return b()
            } finally {
                p.T = g, r.p = v, r.d.f()
            }
        }, le.preconnect = function(b, g) {
            typeof b == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, r.d.C(b, g))
        }, le.prefetchDNS = function(b) {
            typeof b == "string" && r.d.D(b)
        }, le.preinit = function(b, g) {
            if (typeof b == "string" && g && typeof g.as == "string") {
                var v = g.as,
                    T = _(v, g.crossOrigin),
                    O = typeof g.integrity == "string" ? g.integrity : void 0,
                    Y = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
                v === "style" ? r.d.S(b, typeof g.precedence == "string" ? g.precedence : void 0, {
                    crossOrigin: T,
                    integrity: O,
                    fetchPriority: Y
                }) : v === "script" && r.d.X(b, {
                    crossOrigin: T,
                    integrity: O,
                    fetchPriority: Y,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0
                })
            }
        }, le.preinitModule = function(b, g) {
            if (typeof b == "string")
                if (typeof g == "object" && g !== null) {
                    if (g.as == null || g.as === "script") {
                        var v = _(g.as, g.crossOrigin);
                        r.d.M(b, {
                            crossOrigin: v,
                            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                            nonce: typeof g.nonce == "string" ? g.nonce : void 0
                        })
                    }
                } else g == null && r.d.M(b)
        }, le.preload = function(b, g) {
            if (typeof b == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
                var v = g.as,
                    T = _(v, g.crossOrigin);
                r.d.L(b, v, {
                    crossOrigin: T,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                    nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                    type: typeof g.type == "string" ? g.type : void 0,
                    fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                    referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                    imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                    imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                    media: typeof g.media == "string" ? g.media : void 0
                })
            }
        }, le.preloadModule = function(b, g) {
            if (typeof b == "string")
                if (g) {
                    var v = _(g.as, g.crossOrigin);
                    r.d.m(b, {
                        as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                        crossOrigin: v,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0
                    })
                } else r.d.m(b)
        }, le.requestFormReset = function(b) {
            r.d.r(b)
        }, le.unstable_batchedUpdates = function(b, g) {
            return b(g)
        }, le.useFormState = function(b, g, v) {
            return p.H.useFormState(b, g, v)
        }, le.useFormStatus = function() {
            return p.H.useHostTransitionStatus()
        }, le.version = "19.2.7", le
    }
    var Fo;

    function Xm() {
        if (Fo) return Su.exports;
        Fo = 1;

        function c() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
            } catch (n) {
                console.error(n)
            }
        }
        return c(), Su.exports = Qm(), Su.exports
    }
    var Io;

    function Zm() {
        if (Io) return Ja;
        Io = 1;
        var c = Gm(),
            n = Vn(),
            s = Xm();

        function r(t) {
            var e = "https://react.dev/errors/" + t;
            if (1 < arguments.length) {
                e += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l])
            }
            return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }

        function d(t) {
            return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
        }

        function h(t) {
            var e = t,
                l = t;
            if (t.alternate)
                for (; e.return;) e = e.return;
            else {
                t = e;
                do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return; while (t)
            }
            return e.tag === 3 ? l : null
        }

        function p(t) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
            }
            return null
        }

        function _(t) {
            if (t.tag === 31) {
                var e = t.memoizedState;
                if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
            }
            return null
        }

        function b(t) {
            if (h(t) !== t) throw Error(r(188))
        }

        function g(t) {
            var e = t.alternate;
            if (!e) {
                if (e = h(t), e === null) throw Error(r(188));
                return e !== t ? null : t
            }
            for (var l = t, a = e;;) {
                var i = l.return;
                if (i === null) break;
                var u = i.alternate;
                if (u === null) {
                    if (a = i.return, a !== null) {
                        l = a;
                        continue
                    }
                    break
                }
                if (i.child === u.child) {
                    for (u = i.child; u;) {
                        if (u === l) return b(i), t;
                        if (u === a) return b(i), e;
                        u = u.sibling
                    }
                    throw Error(r(188))
                }
                if (l.return !== a.return) l = i, a = u;
                else {
                    for (var o = !1, f = i.child; f;) {
                        if (f === l) {
                            o = !0, l = i, a = u;
                            break
                        }
                        if (f === a) {
                            o = !0, a = i, l = u;
                            break
                        }
                        f = f.sibling
                    }
                    if (!o) {
                        for (f = u.child; f;) {
                            if (f === l) {
                                o = !0, l = u, a = i;
                                break
                            }
                            if (f === a) {
                                o = !0, a = u, l = i;
                                break
                            }
                            f = f.sibling
                        }
                        if (!o) throw Error(r(189))
                    }
                }
                if (l.alternate !== a) throw Error(r(190))
            }
            if (l.tag !== 3) throw Error(r(188));
            return l.stateNode.current === l ? t : e
        }

        function v(t) {
            var e = t.tag;
            if (e === 5 || e === 26 || e === 27 || e === 6) return t;
            for (t = t.child; t !== null;) {
                if (e = v(t), e !== null) return e;
                t = t.sibling
            }
            return null
        }
        var T = Object.assign,
            O = Symbol.for("react.element"),
            Y = Symbol.for("react.transitional.element"),
            q = Symbol.for("react.portal"),
            R = Symbol.for("react.fragment"),
            j = Symbol.for("react.strict_mode"),
            H = Symbol.for("react.profiler"),
            k = Symbol.for("react.consumer"),
            G = Symbol.for("react.context"),
            W = Symbol.for("react.forward_ref"),
            at = Symbol.for("react.suspense"),
            X = Symbol.for("react.suspense_list"),
            V = Symbol.for("react.memo"),
            P = Symbol.for("react.lazy"),
            et = Symbol.for("react.activity"),
            pt = Symbol.for("react.memo_cache_sentinel"),
            ft = Symbol.iterator;

        function yt(t) {
            return t === null || typeof t != "object" ? null : (t = ft && t[ft] || t["@@iterator"], typeof t == "function" ? t : null)
        }
        var ne = Symbol.for("react.client.reference");

        function qt(t) {
            if (t == null) return null;
            if (typeof t == "function") return t.$$typeof === ne ? null : t.displayName || t.name || null;
            if (typeof t == "string") return t;
            switch (t) {
                case R:
                    return "Fragment";
                case H:
                    return "Profiler";
                case j:
                    return "StrictMode";
                case at:
                    return "Suspense";
                case X:
                    return "SuspenseList";
                case et:
                    return "Activity"
            }
            if (typeof t == "object") switch (t.$$typeof) {
                case q:
                    return "Portal";
                case G:
                    return t.displayName || "Context";
                case k:
                    return (t._context.displayName || "Context") + ".Consumer";
                case W:
                    var e = t.render;
                    return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                case V:
                    return e = t.displayName || null, e !== null ? e : qt(t.type) || "Memo";
                case P:
                    e = t._payload, t = t._init;
                    try {
                        return qt(t(e))
                    } catch {}
            }
            return null
        }
        var Ut = Array.isArray,
            M = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            L = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            F = {
                pending: !1,
                data: null,
                method: null,
                action: null
            },
            ot = [],
            st = -1;

        function y(t) {
            return {
                current: t
            }
        }

        function D(t) {
            0 > st || (t.current = ot[st], ot[st] = null, st--)
        }

        function Q(t, e) {
            st++, ot[st] = t.current, t.current = e
        }
        var Z = y(null),
            lt = y(null),
            nt = y(null),
            rt = y(null);

        function wt(t, e) {
            switch (Q(nt, e), Q(lt, t), Q(Z, null), e.nodeType) {
                case 9:
                case 11:
                    t = (t = e.documentElement) && (t = t.namespaceURI) ? om(t) : 0;
                    break;
                default:
                    if (t = e.tagName, e = e.namespaceURI) e = om(e), t = sm(e, t);
                    else switch (t) {
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0
                    }
            }
            D(Z), Q(Z, t)
        }

        function _t() {
            D(Z), D(lt), D(nt)
        }

        function Wt(t) {
            t.memoizedState !== null && Q(rt, t);
            var e = Z.current,
                l = sm(e, t.type);
            e !== l && (Q(lt, t), Q(Z, l))
        }

        function He(t) {
            lt.current === t && (D(Z), D(lt)), rt.current === t && (D(rt), Gn._currentValue = F)
        }
        var Le, Ql;

        function ce(t) {
            if (Le === void 0) try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                Le = e && e[1] || "", Ql = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
            return `
` + Le + t + Ql
        }
        var pl = !1;

        function ke(t, e) {
            if (!t || pl) return "";
            pl = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (e) {
                                var B = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(B.prototype, "props", {
                                        set: function() {
                                            throw Error()
                                        }
                                    }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(B, [])
                                    } catch (C) {
                                        var A = C
                                    }
                                    Reflect.construct(t, [], B)
                                } else {
                                    try {
                                        B.call()
                                    } catch (C) {
                                        A = C
                                    }
                                    t.call(B.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (C) {
                                    A = C
                                }(B = t()) && typeof B.catch == "function" && B.catch(function() {})
                            }
                        } catch (C) {
                            if (C && A && typeof C.stack == "string") return [C.stack, A.stack]
                        }
                        return [null, null]
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var i = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                i && i.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var u = a.DetermineComponentFrameRoot(),
                    o = u[0],
                    f = u[1];
                if (o && f) {
                    var m = o.split(`
`),
                        z = f.split(`
`);
                    for (i = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot");) a++;
                    for (; i < z.length && !z[i].includes("DetermineComponentFrameRoot");) i++;
                    if (a === m.length || i === z.length)
                        for (a = m.length - 1, i = z.length - 1; 1 <= a && 0 <= i && m[a] !== z[i];) i--;
                    for (; 1 <= a && 0 <= i; a--, i--)
                        if (m[a] !== z[i]) {
                            if (a !== 1 || i !== 1)
                                do
                                    if (a--, i--, 0 > i || m[a] !== z[i]) {
                                        var N = `
` + m[a].replace(" at new ", " at ");
                                        return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N
                                    }
                            while (1 <= a && 0 <= i);
                            break
                        }
                }
            } finally {
                pl = !1, Error.prepareStackTrace = l
            }
            return (l = t ? t.displayName || t.name : "") ? ce(l) : ""
        }

        function hl(t, e) {
            switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    return ce(t.type);
                case 16:
                    return ce("Lazy");
                case 13:
                    return t.child !== e && e !== null ? ce("Suspense Fallback") : ce("Suspense");
                case 19:
                    return ce("SuspenseList");
                case 0:
                case 15:
                    return ke(t.type, !1);
                case 11:
                    return ke(t.type.render, !1);
                case 1:
                    return ke(t.type, !0);
                case 31:
                    return ce("Activity");
                default:
                    return ""
            }
        }

        function $e(t) {
            try {
                var e = "",
                    l = null;
                do e += hl(t, l), l = t, t = t.return; while (t);
                return e
            } catch (a) {
                return `
Error generating stack: ` + a.message + `
` + a.stack
            }
        }
        var Ge = Object.prototype.hasOwnProperty,
            Qe = c.unstable_scheduleCallback,
            gl = c.unstable_cancelCallback,
            sa = c.unstable_shouldYield,
            Du = c.unstable_requestPaint,
            ge = c.unstable_now,
            v0 = c.unstable_getCurrentPriorityLevel,
            qs = c.unstable_ImmediatePriority,
            Ls = c.unstable_UserBlockingPriority,
            ti = c.unstable_NormalPriority,
            y0 = c.unstable_LowPriority,
            ks = c.unstable_IdlePriority,
            b0 = c.log,
            x0 = c.unstable_setDisableYieldValue,
            Pa = null,
            ve = null;

        function vl(t) {
            if (typeof b0 == "function" && x0(t), ve && typeof ve.setStrictMode == "function") try {
                ve.setStrictMode(Pa, t)
            } catch {}
        }
        var ye = Math.clz32 ? Math.clz32 : w0,
            S0 = Math.log,
            _0 = Math.LN2;

        function w0(t) {
            return t >>>= 0, t === 0 ? 32 : 31 - (S0(t) / _0 | 0) | 0
        }
        var ei = 256,
            li = 262144,
            ai = 4194304;

        function Xl(t) {
            var e = t & 42;
            if (e !== 0) return e;
            switch (t & -t) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return t & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return t & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return t
            }
        }

        function ni(t, e, l) {
            var a = t.pendingLanes;
            if (a === 0) return 0;
            var i = 0,
                u = t.suspendedLanes,
                o = t.pingedLanes;
            t = t.warmLanes;
            var f = a & 134217727;
            return f !== 0 ? (a = f & ~u, a !== 0 ? i = Xl(a) : (o &= f, o !== 0 ? i = Xl(o) : l || (l = f & ~t, l !== 0 && (i = Xl(l))))) : (f = a & ~u, f !== 0 ? i = Xl(f) : o !== 0 ? i = Xl(o) : l || (l = a & ~t, l !== 0 && (i = Xl(l)))), i === 0 ? 0 : e !== 0 && e !== i && (e & u) === 0 && (u = i & -i, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : i
        }

        function tn(t, e) {
            return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
        }

        function T0(t, e) {
            switch (t) {
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return e + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1
            }
        }

        function Gs() {
            var t = ai;
            return ai <<= 1, (ai & 62914560) === 0 && (ai = 4194304), t
        }

        function ju(t) {
            for (var e = [], l = 0; 31 > l; l++) e.push(t);
            return e
        }

        function en(t, e) {
            t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
        }

        function E0(t, e, l, a, i, u) {
            var o = t.pendingLanes;
            t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
            var f = t.entanglements,
                m = t.expirationTimes,
                z = t.hiddenUpdates;
            for (l = o & ~l; 0 < l;) {
                var N = 31 - ye(l),
                    B = 1 << N;
                f[N] = 0, m[N] = -1;
                var A = z[N];
                if (A !== null)
                    for (z[N] = null, N = 0; N < A.length; N++) {
                        var C = A[N];
                        C !== null && (C.lane &= -536870913)
                    }
                l &= ~B
            }
            a !== 0 && Qs(t, a, 0), u !== 0 && i === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(o & ~e))
        }

        function Qs(t, e, l) {
            t.pendingLanes |= e, t.suspendedLanes &= ~e;
            var a = 31 - ye(e);
            t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930
        }

        function Xs(t, e) {
            var l = t.entangledLanes |= e;
            for (t = t.entanglements; l;) {
                var a = 31 - ye(l),
                    i = 1 << a;
                i & e | t[a] & e && (t[a] |= e), l &= ~i
            }
        }

        function Zs(t, e) {
            var l = e & -e;
            return l = (l & 42) !== 0 ? 1 : Ru(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
        }

        function Ru(t) {
            switch (t) {
                case 2:
                    t = 1;
                    break;
                case 8:
                    t = 4;
                    break;
                case 32:
                    t = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    t = 128;
                    break;
                case 268435456:
                    t = 134217728;
                    break;
                default:
                    t = 0
            }
            return t
        }

        function Uu(t) {
            return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
        }

        function Vs() {
            var t = L.p;
            return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Dm(t.type))
        }

        function Ks(t, e) {
            var l = L.p;
            try {
                return L.p = t, e()
            } finally {
                L.p = l
            }
        }
        var yl = Math.random().toString(36).slice(2),
            Ft = "__reactFiber$" + yl,
            oe = "__reactProps$" + yl,
            ra = "__reactContainer$" + yl,
            Hu = "__reactEvents$" + yl,
            z0 = "__reactListeners$" + yl,
            A0 = "__reactHandles$" + yl,
            Js = "__reactResources$" + yl,
            ln = "__reactMarker$" + yl;

        function Bu(t) {
            delete t[Ft], delete t[oe], delete t[Hu], delete t[z0], delete t[A0]
        }

        function fa(t) {
            var e = t[Ft];
            if (e) return e;
            for (var l = t.parentNode; l;) {
                if (e = l[ra] || l[Ft]) {
                    if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
                        for (t = gm(t); t !== null;) {
                            if (l = t[Ft]) return l;
                            t = gm(t)
                        }
                    return e
                }
                t = l, l = t.parentNode
            }
            return null
        }

        function da(t) {
            if (t = t[Ft] || t[ra]) {
                var e = t.tag;
                if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
            }
            return null
        }

        function an(t) {
            var e = t.tag;
            if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
            throw Error(r(33))
        }

        function ma(t) {
            var e = t[Js];
            return e || (e = t[Js] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), e
        }

        function Jt(t) {
            t[ln] = !0
        }
        var $s = new Set,
            Ws = {};

        function Zl(t, e) {
            pa(t, e), pa(t + "Capture", e)
        }

        function pa(t, e) {
            for (Ws[t] = e, t = 0; t < e.length; t++) $s.add(e[t])
        }
        var O0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Fs = {},
            Is = {};

        function C0(t) {
            return Ge.call(Is, t) ? !0 : Ge.call(Fs, t) ? !1 : O0.test(t) ? Is[t] = !0 : (Fs[t] = !0, !1)
        }

        function ii(t, e, l) {
            if (C0(e))
                if (l === null) t.removeAttribute(e);
                else {
                    switch (typeof l) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            t.removeAttribute(e);
                            return;
                        case "boolean":
                            var a = e.toLowerCase().slice(0, 5);
                            if (a !== "data-" && a !== "aria-") {
                                t.removeAttribute(e);
                                return
                            }
                    }
                    t.setAttribute(e, "" + l)
                }
        }

        function ui(t, e, l) {
            if (l === null) t.removeAttribute(e);
            else {
                switch (typeof l) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(e);
                        return
                }
                t.setAttribute(e, "" + l)
            }
        }

        function We(t, e, l, a) {
            if (a === null) t.removeAttribute(l);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(l);
                        return
                }
                t.setAttributeNS(e, l, "" + a)
            }
        }

        function ze(t) {
            switch (typeof t) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return t;
                case "object":
                    return t;
                default:
                    return ""
            }
        }

        function Ps(t) {
            var e = t.type;
            return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
        }

        function M0(t, e, l) {
            var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
            if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
                var i = a.get,
                    u = a.set;
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(o) {
                        l = "" + o, u.call(this, o)
                    }
                }), Object.defineProperty(t, e, {
                    enumerable: a.enumerable
                }), {
                    getValue: function() {
                        return l
                    },
                    setValue: function(o) {
                        l = "" + o
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[e]
                    }
                }
            }
        }

        function Yu(t) {
            if (!t._valueTracker) {
                var e = Ps(t) ? "checked" : "value";
                t._valueTracker = M0(t, e, "" + t[e])
            }
        }

        function tr(t) {
            if (!t) return !1;
            var e = t._valueTracker;
            if (!e) return !0;
            var l = e.getValue(),
                a = "";
            return t && (a = Ps(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1
        }

        function ci(t) {
            if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
            try {
                return t.activeElement || t.body
            } catch {
                return t.body
            }
        }
        var N0 = /[\n"\\]/g;

        function Ae(t) {
            return t.replace(N0, function(e) {
                return "\\" + e.charCodeAt(0).toString(16) + " "
            })
        }

        function qu(t, e, l, a, i, u, o, f) {
            t.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.type = o : t.removeAttribute("type"), e != null ? o === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ze(e)) : t.value !== "" + ze(e) && (t.value = "" + ze(e)) : o !== "submit" && o !== "reset" || t.removeAttribute("value"), e != null ? Lu(t, o, ze(e)) : l != null ? Lu(t, o, ze(l)) : a != null && t.removeAttribute("value"), i == null && u != null && (t.defaultChecked = !!u), i != null && (t.checked = i && typeof i != "function" && typeof i != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + ze(f) : t.removeAttribute("name")
        }

        function er(t, e, l, a, i, u, o, f) {
            if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
                if (!(u !== "submit" && u !== "reset" || e != null)) {
                    Yu(t);
                    return
                }
                l = l != null ? "" + ze(l) : "", e = e != null ? "" + ze(e) : l, f || e === t.value || (t.value = e), t.defaultValue = e
            }
            a = a ? ? i, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.name = o), Yu(t)
        }

        function Lu(t, e, l) {
            e === "number" && ci(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
        }

        function ha(t, e, l, a) {
            if (t = t.options, e) {
                e = {};
                for (var i = 0; i < l.length; i++) e["$" + l[i]] = !0;
                for (l = 0; l < t.length; l++) i = e.hasOwnProperty("$" + t[l].value), t[l].selected !== i && (t[l].selected = i), i && a && (t[l].defaultSelected = !0)
            } else {
                for (l = "" + ze(l), e = null, i = 0; i < t.length; i++) {
                    if (t[i].value === l) {
                        t[i].selected = !0, a && (t[i].defaultSelected = !0);
                        return
                    }
                    e !== null || t[i].disabled || (e = t[i])
                }
                e !== null && (e.selected = !0)
            }
        }

        function lr(t, e, l) {
            if (e != null && (e = "" + ze(e), e !== t.value && (t.value = e), l == null)) {
                t.defaultValue !== e && (t.defaultValue = e);
                return
            }
            t.defaultValue = l != null ? "" + ze(l) : ""
        }

        function ar(t, e, l, a) {
            if (e == null) {
                if (a != null) {
                    if (l != null) throw Error(r(92));
                    if (Ut(a)) {
                        if (1 < a.length) throw Error(r(93));
                        a = a[0]
                    }
                    l = a
                }
                l == null && (l = ""), e = l
            }
            l = ze(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Yu(t)
        }

        function ga(t, e) {
            if (e) {
                var l = t.firstChild;
                if (l && l === t.lastChild && l.nodeType === 3) {
                    l.nodeValue = e;
                    return
                }
            }
            t.textContent = e
        }
        var D0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

        function nr(t, e, l) {
            var a = e.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || D0.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
        }

        function ir(t, e, l) {
            if (e != null && typeof e != "object") throw Error(r(62));
            if (t = t.style, l != null) {
                for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
                for (var i in e) a = e[i], e.hasOwnProperty(i) && l[i] !== a && nr(t, i, a)
            } else
                for (var u in e) e.hasOwnProperty(u) && nr(t, u, e[u])
        }

        function ku(t) {
            if (t.indexOf("-") === -1) return !1;
            switch (t) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
            }
        }
        var j0 = new Map([
                ["acceptCharset", "accept-charset"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"],
                ["crossOrigin", "crossorigin"],
                ["accentHeight", "accent-height"],
                ["alignmentBaseline", "alignment-baseline"],
                ["arabicForm", "arabic-form"],
                ["baselineShift", "baseline-shift"],
                ["capHeight", "cap-height"],
                ["clipPath", "clip-path"],
                ["clipRule", "clip-rule"],
                ["colorInterpolation", "color-interpolation"],
                ["colorInterpolationFilters", "color-interpolation-filters"],
                ["colorProfile", "color-profile"],
                ["colorRendering", "color-rendering"],
                ["dominantBaseline", "dominant-baseline"],
                ["enableBackground", "enable-background"],
                ["fillOpacity", "fill-opacity"],
                ["fillRule", "fill-rule"],
                ["floodColor", "flood-color"],
                ["floodOpacity", "flood-opacity"],
                ["fontFamily", "font-family"],
                ["fontSize", "font-size"],
                ["fontSizeAdjust", "font-size-adjust"],
                ["fontStretch", "font-stretch"],
                ["fontStyle", "font-style"],
                ["fontVariant", "font-variant"],
                ["fontWeight", "font-weight"],
                ["glyphName", "glyph-name"],
                ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                ["glyphOrientationVertical", "glyph-orientation-vertical"],
                ["horizAdvX", "horiz-adv-x"],
                ["horizOriginX", "horiz-origin-x"],
                ["imageRendering", "image-rendering"],
                ["letterSpacing", "letter-spacing"],
                ["lightingColor", "lighting-color"],
                ["markerEnd", "marker-end"],
                ["markerMid", "marker-mid"],
                ["markerStart", "marker-start"],
                ["overlinePosition", "overline-position"],
                ["overlineThickness", "overline-thickness"],
                ["paintOrder", "paint-order"],
                ["panose-1", "panose-1"],
                ["pointerEvents", "pointer-events"],
                ["renderingIntent", "rendering-intent"],
                ["shapeRendering", "shape-rendering"],
                ["stopColor", "stop-color"],
                ["stopOpacity", "stop-opacity"],
                ["strikethroughPosition", "strikethrough-position"],
                ["strikethroughThickness", "strikethrough-thickness"],
                ["strokeDasharray", "stroke-dasharray"],
                ["strokeDashoffset", "stroke-dashoffset"],
                ["strokeLinecap", "stroke-linecap"],
                ["strokeLinejoin", "stroke-linejoin"],
                ["strokeMiterlimit", "stroke-miterlimit"],
                ["strokeOpacity", "stroke-opacity"],
                ["strokeWidth", "stroke-width"],
                ["textAnchor", "text-anchor"],
                ["textDecoration", "text-decoration"],
                ["textRendering", "text-rendering"],
                ["transformOrigin", "transform-origin"],
                ["underlinePosition", "underline-position"],
                ["underlineThickness", "underline-thickness"],
                ["unicodeBidi", "unicode-bidi"],
                ["unicodeRange", "unicode-range"],
                ["unitsPerEm", "units-per-em"],
                ["vAlphabetic", "v-alphabetic"],
                ["vHanging", "v-hanging"],
                ["vIdeographic", "v-ideographic"],
                ["vMathematical", "v-mathematical"],
                ["vectorEffect", "vector-effect"],
                ["vertAdvY", "vert-adv-y"],
                ["vertOriginX", "vert-origin-x"],
                ["vertOriginY", "vert-origin-y"],
                ["wordSpacing", "word-spacing"],
                ["writingMode", "writing-mode"],
                ["xmlnsXlink", "xmlns:xlink"],
                ["xHeight", "x-height"]
            ]),
            R0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

        function oi(t) {
            return R0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
        }

        function Fe() {}
        var Gu = null;

        function Qu(t) {
            return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
        }
        var va = null,
            ya = null;

        function ur(t) {
            var e = da(t);
            if (e && (t = e.stateNode)) {
                var l = t[oe] || null;
                t: switch (t = e.stateNode, e.type) {
                    case "input":
                        if (qu(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
                            for (l = t; l.parentNode;) l = l.parentNode;
                            for (l = l.querySelectorAll('input[name="' + Ae("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                                var a = l[e];
                                if (a !== t && a.form === t.form) {
                                    var i = a[oe] || null;
                                    if (!i) throw Error(r(90));
                                    qu(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                                }
                            }
                            for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && tr(a)
                        }
                        break t;
                    case "textarea":
                        lr(t, l.value, l.defaultValue);
                        break t;
                    case "select":
                        e = l.value, e != null && ha(t, !!l.multiple, e, !1)
                }
            }
        }
        var Xu = !1;

        function cr(t, e, l) {
            if (Xu) return t(e, l);
            Xu = !0;
            try {
                var a = t(e);
                return a
            } finally {
                if (Xu = !1, (va !== null || ya !== null) && ($i(), va && (e = va, t = ya, ya = va = null, ur(e), t)))
                    for (e = 0; e < t.length; e++) ur(t[e])
            }
        }

        function nn(t, e) {
            var l = t.stateNode;
            if (l === null) return null;
            var a = l[oe] || null;
            if (a === null) return null;
            l = a[e];
            t: switch (e) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
                    break t;
                default:
                    t = !1
            }
            if (t) return null;
            if (l && typeof l != "function") throw Error(r(231, e, typeof l));
            return l
        }
        var Ie = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            Zu = !1;
        if (Ie) try {
            var un = {};
            Object.defineProperty(un, "passive", {
                get: function() {
                    Zu = !0
                }
            }), window.addEventListener("test", un, un), window.removeEventListener("test", un, un)
        } catch {
            Zu = !1
        }
        var bl = null,
            Vu = null,
            si = null;

        function or() {
            if (si) return si;
            var t, e = Vu,
                l = e.length,
                a, i = "value" in bl ? bl.value : bl.textContent,
                u = i.length;
            for (t = 0; t < l && e[t] === i[t]; t++);
            var o = l - t;
            for (a = 1; a <= o && e[l - a] === i[u - a]; a++);
            return si = i.slice(t, 1 < a ? 1 - a : void 0)
        }

        function ri(t) {
            var e = t.keyCode;
            return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
        }

        function fi() {
            return !0
        }

        function sr() {
            return !1
        }

        function se(t) {
            function e(l, a, i, u, o) {
                this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = o, this.currentTarget = null;
                for (var f in t) t.hasOwnProperty(f) && (l = t[f], this[f] = l ? l(u) : u[f]);
                return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? fi : sr, this.isPropagationStopped = sr, this
            }
            return T(e.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = fi)
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = fi)
                },
                persist: function() {},
                isPersistent: fi
            }), e
        }
        var Vl = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(t) {
                    return t.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            di = se(Vl),
            cn = T({}, Vl, {
                view: 0,
                detail: 0
            }),
            U0 = se(cn),
            Ku, Ju, on, mi = T({}, cn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Wu,
                button: 0,
                buttons: 0,
                relatedTarget: function(t) {
                    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
                },
                movementX: function(t) {
                    return "movementX" in t ? t.movementX : (t !== on && (on && t.type === "mousemove" ? (Ku = t.screenX - on.screenX, Ju = t.screenY - on.screenY) : Ju = Ku = 0, on = t), Ku)
                },
                movementY: function(t) {
                    return "movementY" in t ? t.movementY : Ju
                }
            }),
            rr = se(mi),
            H0 = T({}, mi, {
                dataTransfer: 0
            }),
            B0 = se(H0),
            Y0 = T({}, cn, {
                relatedTarget: 0
            }),
            $u = se(Y0),
            q0 = T({}, Vl, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            L0 = se(q0),
            k0 = T({}, Vl, {
                clipboardData: function(t) {
                    return "clipboardData" in t ? t.clipboardData : window.clipboardData
                }
            }),
            G0 = se(k0),
            Q0 = T({}, Vl, {
                data: 0
            }),
            fr = se(Q0),
            X0 = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            },
            Z0 = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            },
            V0 = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function K0(t) {
            var e = this.nativeEvent;
            return e.getModifierState ? e.getModifierState(t) : (t = V0[t]) ? !!e[t] : !1
        }

        function Wu() {
            return K0
        }
        var J0 = T({}, cn, {
                key: function(t) {
                    if (t.key) {
                        var e = X0[t.key] || t.key;
                        if (e !== "Unidentified") return e
                    }
                    return t.type === "keypress" ? (t = ri(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Z0[t.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Wu,
                charCode: function(t) {
                    return t.type === "keypress" ? ri(t) : 0
                },
                keyCode: function(t) {
                    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
                },
                which: function(t) {
                    return t.type === "keypress" ? ri(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
                }
            }),
            $0 = se(J0),
            W0 = T({}, mi, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }),
            dr = se(W0),
            F0 = T({}, cn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Wu
            }),
            I0 = se(F0),
            P0 = T({}, Vl, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            th = se(P0),
            eh = T({}, mi, {
                deltaX: function(t) {
                    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                },
                deltaY: function(t) {
                    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            lh = se(eh),
            ah = T({}, Vl, {
                newState: 0,
                oldState: 0
            }),
            nh = se(ah),
            ih = [9, 13, 27, 32],
            Fu = Ie && "CompositionEvent" in window,
            sn = null;
        Ie && "documentMode" in document && (sn = document.documentMode);
        var uh = Ie && "TextEvent" in window && !sn,
            mr = Ie && (!Fu || sn && 8 < sn && 11 >= sn),
            pr = " ",
            hr = !1;

        function gr(t, e) {
            switch (t) {
                case "keyup":
                    return ih.indexOf(e.keyCode) !== -1;
                case "keydown":
                    return e.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
            }
        }

        function vr(t) {
            return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
        }
        var ba = !1;

        function ch(t, e) {
            switch (t) {
                case "compositionend":
                    return vr(e);
                case "keypress":
                    return e.which !== 32 ? null : (hr = !0, pr);
                case "textInput":
                    return t = e.data, t === pr && hr ? null : t;
                default:
                    return null
            }
        }

        function oh(t, e) {
            if (ba) return t === "compositionend" || !Fu && gr(t, e) ? (t = or(), si = Vu = bl = null, ba = !1, t) : null;
            switch (t) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                        if (e.char && 1 < e.char.length) return e.char;
                        if (e.which) return String.fromCharCode(e.which)
                    }
                    return null;
                case "compositionend":
                    return mr && e.locale !== "ko" ? null : e.data;
                default:
                    return null
            }
        }
        var sh = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };

        function yr(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return e === "input" ? !!sh[t.type] : e === "textarea"
        }

        function br(t, e, l, a) {
            va ? ya ? ya.push(a) : ya = [a] : va = a, e = lu(e, "onChange"), 0 < e.length && (l = new di("onChange", "change", null, l, a), t.push({
                event: l,
                listeners: e
            }))
        }
        var rn = null,
            fn = null;

        function rh(t) {
            lm(t, 0)
        }

        function pi(t) {
            var e = an(t);
            if (tr(e)) return t
        }

        function xr(t, e) {
            if (t === "change") return e
        }
        var Sr = !1;
        if (Ie) {
            var Iu;
            if (Ie) {
                var Pu = "oninput" in document;
                if (!Pu) {
                    var _r = document.createElement("div");
                    _r.setAttribute("oninput", "return;"), Pu = typeof _r.oninput == "function"
                }
                Iu = Pu
            } else Iu = !1;
            Sr = Iu && (!document.documentMode || 9 < document.documentMode)
        }

        function wr() {
            rn && (rn.detachEvent("onpropertychange", Tr), fn = rn = null)
        }

        function Tr(t) {
            if (t.propertyName === "value" && pi(fn)) {
                var e = [];
                br(e, fn, t, Qu(t)), cr(rh, e)
            }
        }

        function fh(t, e, l) {
            t === "focusin" ? (wr(), rn = e, fn = l, rn.attachEvent("onpropertychange", Tr)) : t === "focusout" && wr()
        }

        function dh(t) {
            if (t === "selectionchange" || t === "keyup" || t === "keydown") return pi(fn)
        }

        function mh(t, e) {
            if (t === "click") return pi(e)
        }

        function ph(t, e) {
            if (t === "input" || t === "change") return pi(e)
        }

        function hh(t, e) {
            return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
        }
        var be = typeof Object.is == "function" ? Object.is : hh;

        function dn(t, e) {
            if (be(t, e)) return !0;
            if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
            var l = Object.keys(t),
                a = Object.keys(e);
            if (l.length !== a.length) return !1;
            for (a = 0; a < l.length; a++) {
                var i = l[a];
                if (!Ge.call(e, i) || !be(t[i], e[i])) return !1
            }
            return !0
        }

        function Er(t) {
            for (; t && t.firstChild;) t = t.firstChild;
            return t
        }

        function zr(t, e) {
            var l = Er(t);
            t = 0;
            for (var a; l;) {
                if (l.nodeType === 3) {
                    if (a = t + l.textContent.length, t <= e && a >= e) return {
                        node: l,
                        offset: e - t
                    };
                    t = a
                }
                t: {
                    for (; l;) {
                        if (l.nextSibling) {
                            l = l.nextSibling;
                            break t
                        }
                        l = l.parentNode
                    }
                    l = void 0
                }
                l = Er(l)
            }
        }

        function Ar(t, e) {
            return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Ar(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
        }

        function Or(t) {
            t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
            for (var e = ci(t.document); e instanceof t.HTMLIFrameElement;) {
                try {
                    var l = typeof e.contentWindow.location.href == "string"
                } catch {
                    l = !1
                }
                if (l) t = e.contentWindow;
                else break;
                e = ci(t.document)
            }
            return e
        }

        function tc(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
        }
        var gh = Ie && "documentMode" in document && 11 >= document.documentMode,
            xa = null,
            ec = null,
            mn = null,
            lc = !1;

        function Cr(t, e, l) {
            var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            lc || xa == null || xa !== ci(a) || (a = xa, "selectionStart" in a && tc(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), mn && dn(mn, a) || (mn = a, a = lu(ec, "onSelect"), 0 < a.length && (e = new di("onSelect", "select", null, e, l), t.push({
                event: e,
                listeners: a
            }), e.target = xa)))
        }

        function Kl(t, e) {
            var l = {};
            return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l
        }
        var Sa = {
                animationend: Kl("Animation", "AnimationEnd"),
                animationiteration: Kl("Animation", "AnimationIteration"),
                animationstart: Kl("Animation", "AnimationStart"),
                transitionrun: Kl("Transition", "TransitionRun"),
                transitionstart: Kl("Transition", "TransitionStart"),
                transitioncancel: Kl("Transition", "TransitionCancel"),
                transitionend: Kl("Transition", "TransitionEnd")
            },
            ac = {},
            Mr = {};
        Ie && (Mr = document.createElement("div").style, "AnimationEvent" in window || (delete Sa.animationend.animation, delete Sa.animationiteration.animation, delete Sa.animationstart.animation), "TransitionEvent" in window || delete Sa.transitionend.transition);

        function Jl(t) {
            if (ac[t]) return ac[t];
            if (!Sa[t]) return t;
            var e = Sa[t],
                l;
            for (l in e)
                if (e.hasOwnProperty(l) && l in Mr) return ac[t] = e[l];
            return t
        }
        var Nr = Jl("animationend"),
            Dr = Jl("animationiteration"),
            jr = Jl("animationstart"),
            vh = Jl("transitionrun"),
            yh = Jl("transitionstart"),
            bh = Jl("transitioncancel"),
            Rr = Jl("transitionend"),
            Ur = new Map,
            nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        nc.push("scrollEnd");

        function Be(t, e) {
            Ur.set(t, e), Zl(e, [t])
        }
        var hi = typeof reportError == "function" ? reportError : function(t) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var e = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                        error: t
                    });
                    if (!window.dispatchEvent(e)) return
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", t);
                    return
                }
                console.error(t)
            },
            Oe = [],
            _a = 0,
            ic = 0;

        function gi() {
            for (var t = _a, e = ic = _a = 0; e < t;) {
                var l = Oe[e];
                Oe[e++] = null;
                var a = Oe[e];
                Oe[e++] = null;
                var i = Oe[e];
                Oe[e++] = null;
                var u = Oe[e];
                if (Oe[e++] = null, a !== null && i !== null) {
                    var o = a.pending;
                    o === null ? i.next = i : (i.next = o.next, o.next = i), a.pending = i
                }
                u !== 0 && Hr(l, i, u)
            }
        }

        function vi(t, e, l, a) {
            Oe[_a++] = t, Oe[_a++] = e, Oe[_a++] = l, Oe[_a++] = a, ic |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
        }

        function uc(t, e, l, a) {
            return vi(t, e, l, a), yi(t)
        }

        function $l(t, e) {
            return vi(t, null, null, e), yi(t)
        }

        function Hr(t, e, l) {
            t.lanes |= l;
            var a = t.alternate;
            a !== null && (a.lanes |= l);
            for (var i = !1, u = t.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (i = !0)), t = u, u = u.return;
            return t.tag === 3 ? (u = t.stateNode, i && e !== null && (i = 31 - ye(l), t = u.hiddenUpdates, a = t[i], a === null ? t[i] = [e] : a.push(e), e.lane = l | 536870912), u) : null
        }

        function yi(t) {
            if (50 < Un) throw Un = 0, go = null, Error(r(185));
            for (var e = t.return; e !== null;) t = e, e = t.return;
            return t.tag === 3 ? t.stateNode : null
        }
        var wa = {};

        function xh(t, e, l, a) {
            this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function xe(t, e, l, a) {
            return new xh(t, e, l, a)
        }

        function cc(t) {
            return t = t.prototype, !(!t || !t.isReactComponent)
        }

        function Pe(t, e) {
            var l = t.alternate;
            return l === null ? (l = xe(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
            }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l
        }

        function Br(t, e) {
            t.flags &= 65011714;
            var l = t.alternate;
            return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
            }), t
        }

        function bi(t, e, l, a, i, u) {
            var o = 0;
            if (a = t, typeof t == "function") cc(t) && (o = 1);
            else if (typeof t == "string") o = Eg(t, l, Z.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
            else t: switch (t) {
                case et:
                    return t = xe(31, l, e, i), t.elementType = et, t.lanes = u, t;
                case R:
                    return Wl(l.children, i, u, e);
                case j:
                    o = 8, i |= 24;
                    break;
                case H:
                    return t = xe(12, l, e, i | 2), t.elementType = H, t.lanes = u, t;
                case at:
                    return t = xe(13, l, e, i), t.elementType = at, t.lanes = u, t;
                case X:
                    return t = xe(19, l, e, i), t.elementType = X, t.lanes = u, t;
                default:
                    if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                        case G:
                            o = 10;
                            break t;
                        case k:
                            o = 9;
                            break t;
                        case W:
                            o = 11;
                            break t;
                        case V:
                            o = 14;
                            break t;
                        case P:
                            o = 16, a = null;
                            break t
                    }
                    o = 29, l = Error(r(130, t === null ? "null" : typeof t, "")), a = null
            }
            return e = xe(o, l, e, i), e.elementType = t, e.type = a, e.lanes = u, e
        }

        function Wl(t, e, l, a) {
            return t = xe(7, t, a, e), t.lanes = l, t
        }

        function oc(t, e, l) {
            return t = xe(6, t, null, e), t.lanes = l, t
        }

        function Yr(t) {
            var e = xe(18, null, null, 0);
            return e.stateNode = t, e
        }

        function sc(t, e, l) {
            return e = xe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation
            }, e
        }
        var qr = new WeakMap;

        function Ce(t, e) {
            if (typeof t == "object" && t !== null) {
                var l = qr.get(t);
                return l !== void 0 ? l : (e = {
                    value: t,
                    source: e,
                    stack: $e(e)
                }, qr.set(t, e), e)
            }
            return {
                value: t,
                source: e,
                stack: $e(e)
            }
        }
        var Ta = [],
            Ea = 0,
            xi = null,
            pn = 0,
            Me = [],
            Ne = 0,
            xl = null,
            Xe = 1,
            Ze = "";

        function tl(t, e) {
            Ta[Ea++] = pn, Ta[Ea++] = xi, xi = t, pn = e
        }

        function Lr(t, e, l) {
            Me[Ne++] = Xe, Me[Ne++] = Ze, Me[Ne++] = xl, xl = t;
            var a = Xe;
            t = Ze;
            var i = 32 - ye(a) - 1;
            a &= ~(1 << i), l += 1;
            var u = 32 - ye(e) + i;
            if (30 < u) {
                var o = i - i % 5;
                u = (a & (1 << o) - 1).toString(32), a >>= o, i -= o, Xe = 1 << 32 - ye(e) + i | l << i | a, Ze = u + t
            } else Xe = 1 << u | l << i | a, Ze = t
        }

        function rc(t) {
            t.return !== null && (tl(t, 1), Lr(t, 1, 0))
        }

        function fc(t) {
            for (; t === xi;) xi = Ta[--Ea], Ta[Ea] = null, pn = Ta[--Ea], Ta[Ea] = null;
            for (; t === xl;) xl = Me[--Ne], Me[Ne] = null, Ze = Me[--Ne], Me[Ne] = null, Xe = Me[--Ne], Me[Ne] = null
        }

        function kr(t, e) {
            Me[Ne++] = Xe, Me[Ne++] = Ze, Me[Ne++] = xl, Xe = e.id, Ze = e.overflow, xl = t
        }
        var It = null,
            Nt = null,
            vt = !1,
            Sl = null,
            De = !1,
            dc = Error(r(519));

        function _l(t) {
            var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw hn(Ce(e, t)), dc
        }

        function Gr(t) {
            var e = t.stateNode,
                l = t.type,
                a = t.memoizedProps;
            switch (e[Ft] = t, e[oe] = a, l) {
                case "dialog":
                    mt("cancel", e), mt("close", e);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    mt("load", e);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Bn.length; l++) mt(Bn[l], e);
                    break;
                case "source":
                    mt("error", e);
                    break;
                case "img":
                case "image":
                case "link":
                    mt("error", e), mt("load", e);
                    break;
                case "details":
                    mt("toggle", e);
                    break;
                case "input":
                    mt("invalid", e), er(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                    break;
                case "select":
                    mt("invalid", e);
                    break;
                case "textarea":
                    mt("invalid", e), ar(e, a.value, a.defaultValue, a.children)
            }
            l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || um(e.textContent, l) ? (a.popover != null && (mt("beforetoggle", e), mt("toggle", e)), a.onScroll != null && mt("scroll", e), a.onScrollEnd != null && mt("scrollend", e), a.onClick != null && (e.onclick = Fe), e = !0) : e = !1, e || _l(t, !0)
        }

        function Qr(t) {
            for (It = t.return; It;) switch (It.tag) {
                case 5:
                case 31:
                case 13:
                    De = !1;
                    return;
                case 27:
                case 3:
                    De = !0;
                    return;
                default:
                    It = It.return
            }
        }

        function za(t) {
            if (t !== It) return !1;
            if (!vt) return Qr(t), vt = !0, !1;
            var e = t.tag,
                l;
            if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || No(t.type, t.memoizedProps)), l = !l), l && Nt && _l(t), Qr(t), e === 13) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
                Nt = hm(t)
            } else if (e === 31) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
                Nt = hm(t)
            } else e === 27 ? (e = Nt, Hl(t.type) ? (t = Ho, Ho = null, Nt = t) : Nt = e) : Nt = It ? Re(t.stateNode.nextSibling) : null;
            return !0
        }

        function Fl() {
            Nt = It = null, vt = !1
        }

        function mc() {
            var t = Sl;
            return t !== null && (me === null ? me = t : me.push.apply(me, t), Sl = null), t
        }

        function hn(t) {
            Sl === null ? Sl = [t] : Sl.push(t)
        }
        var pc = y(null),
            Il = null,
            el = null;

        function wl(t, e, l) {
            Q(pc, e._currentValue), e._currentValue = l
        }

        function ll(t) {
            t._currentValue = pc.current, D(pc)
        }

        function hc(t, e, l) {
            for (; t !== null;) {
                var a = t.alternate;
                if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
                t = t.return
            }
        }

        function gc(t, e, l, a) {
            var i = t.child;
            for (i !== null && (i.return = t); i !== null;) {
                var u = i.dependencies;
                if (u !== null) {
                    var o = i.child;
                    u = u.firstContext;
                    t: for (; u !== null;) {
                        var f = u;
                        u = i;
                        for (var m = 0; m < e.length; m++)
                            if (f.context === e[m]) {
                                u.lanes |= l, f = u.alternate, f !== null && (f.lanes |= l), hc(u.return, l, t), a || (o = null);
                                break t
                            }
                        u = f.next
                    }
                } else if (i.tag === 18) {
                    if (o = i.return, o === null) throw Error(r(341));
                    o.lanes |= l, u = o.alternate, u !== null && (u.lanes |= l), hc(o, l, t), o = null
                } else o = i.child;
                if (o !== null) o.return = i;
                else
                    for (o = i; o !== null;) {
                        if (o === t) {
                            o = null;
                            break
                        }
                        if (i = o.sibling, i !== null) {
                            i.return = o.return, o = i;
                            break
                        }
                        o = o.return
                    }
                i = o
            }
        }

        function Aa(t, e, l, a) {
            t = null;
            for (var i = e, u = !1; i !== null;) {
                if (!u) {
                    if ((i.flags & 524288) !== 0) u = !0;
                    else if ((i.flags & 262144) !== 0) break
                }
                if (i.tag === 10) {
                    var o = i.alternate;
                    if (o === null) throw Error(r(387));
                    if (o = o.memoizedProps, o !== null) {
                        var f = i.type;
                        be(i.pendingProps.value, o.value) || (t !== null ? t.push(f) : t = [f])
                    }
                } else if (i === rt.current) {
                    if (o = i.alternate, o === null) throw Error(r(387));
                    o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (t !== null ? t.push(Gn) : t = [Gn])
                }
                i = i.return
            }
            t !== null && gc(e, t, l, a), e.flags |= 262144
        }

        function Si(t) {
            for (t = t.firstContext; t !== null;) {
                if (!be(t.context._currentValue, t.memoizedValue)) return !0;
                t = t.next
            }
            return !1
        }

        function Pl(t) {
            Il = t, el = null, t = t.dependencies, t !== null && (t.firstContext = null)
        }

        function Pt(t) {
            return Xr(Il, t)
        }

        function _i(t, e) {
            return Il === null && Pl(t), Xr(t, e)
        }

        function Xr(t, e) {
            var l = e._currentValue;
            if (e = {
                    context: e,
                    memoizedValue: l,
                    next: null
                }, el === null) {
                if (t === null) throw Error(r(308));
                el = e, t.dependencies = {
                    lanes: 0,
                    firstContext: e
                }, t.flags |= 524288
            } else el = el.next = e;
            return l
        }
        var Sh = typeof AbortController < "u" ? AbortController : function() {
                var t = [],
                    e = this.signal = {
                        aborted: !1,
                        addEventListener: function(l, a) {
                            t.push(a)
                        }
                    };
                this.abort = function() {
                    e.aborted = !0, t.forEach(function(l) {
                        return l()
                    })
                }
            },
            _h = c.unstable_scheduleCallback,
            wh = c.unstable_NormalPriority,
            Qt = {
                $$typeof: G,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };

        function vc() {
            return {
                controller: new Sh,
                data: new Map,
                refCount: 0
            }
        }

        function gn(t) {
            t.refCount--, t.refCount === 0 && _h(wh, function() {
                t.controller.abort()
            })
        }
        var vn = null,
            yc = 0,
            Oa = 0,
            Ca = null;

        function Th(t, e) {
            if (vn === null) {
                var l = vn = [];
                yc = 0, Oa = _o(), Ca = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        l.push(a)
                    }
                }
            }
            return yc++, e.then(Zr, Zr), e
        }

        function Zr() {
            if (--yc === 0 && vn !== null) {
                Ca !== null && (Ca.status = "fulfilled");
                var t = vn;
                vn = null, Oa = 0, Ca = null;
                for (var e = 0; e < t.length; e++)(0, t[e])()
            }
        }

        function Eh(t, e) {
            var l = [],
                a = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function(i) {
                        l.push(i)
                    }
                };
            return t.then(function() {
                a.status = "fulfilled", a.value = e;
                for (var i = 0; i < l.length; i++)(0, l[i])(e)
            }, function(i) {
                for (a.status = "rejected", a.reason = i, i = 0; i < l.length; i++)(0, l[i])(void 0)
            }), a
        }
        var Vr = M.S;
        M.S = function(t, e) {
            Md = ge(), typeof e == "object" && e !== null && typeof e.then == "function" && Th(t, e), Vr !== null && Vr(t, e)
        };
        var ta = y(null);

        function bc() {
            var t = ta.current;
            return t !== null ? t : Mt.pooledCache
        }

        function wi(t, e) {
            e === null ? Q(ta, ta.current) : Q(ta, e.pool)
        }

        function Kr() {
            var t = bc();
            return t === null ? null : {
                parent: Qt._currentValue,
                pool: t
            }
        }
        var Ma = Error(r(460)),
            xc = Error(r(474)),
            Ti = Error(r(542)),
            Ei = {
                then: function() {}
            };

        function Jr(t) {
            return t = t.status, t === "fulfilled" || t === "rejected"
        }

        function $r(t, e, l) {
            switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Fe, Fe), e = l), e.status) {
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw t = e.reason, Fr(t), t;
                default:
                    if (typeof e.status == "string") e.then(Fe, Fe);
                    else {
                        if (t = Mt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
                        t = e, t.status = "pending", t.then(function(a) {
                            if (e.status === "pending") {
                                var i = e;
                                i.status = "fulfilled", i.value = a
                            }
                        }, function(a) {
                            if (e.status === "pending") {
                                var i = e;
                                i.status = "rejected", i.reason = a
                            }
                        })
                    }
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw t = e.reason, Fr(t), t
                    }
                    throw la = e, Ma
            }
        }

        function ea(t) {
            try {
                var e = t._init;
                return e(t._payload)
            } catch (l) {
                throw l !== null && typeof l == "object" && typeof l.then == "function" ? (la = l, Ma) : l
            }
        }
        var la = null;

        function Wr() {
            if (la === null) throw Error(r(459));
            var t = la;
            return la = null, t
        }

        function Fr(t) {
            if (t === Ma || t === Ti) throw Error(r(483))
        }
        var Na = null,
            yn = 0;

        function zi(t) {
            var e = yn;
            return yn += 1, Na === null && (Na = []), $r(Na, t, e)
        }

        function bn(t, e) {
            e = e.props.ref, t.ref = e !== void 0 ? e : null
        }

        function Ai(t, e) {
            throw e.$$typeof === O ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
        }

        function Ir(t) {
            function e(S, x) {
                if (t) {
                    var E = S.deletions;
                    E === null ? (S.deletions = [x], S.flags |= 16) : E.push(x)
                }
            }

            function l(S, x) {
                if (!t) return null;
                for (; x !== null;) e(S, x), x = x.sibling;
                return null
            }

            function a(S) {
                for (var x = new Map; S !== null;) S.key !== null ? x.set(S.key, S) : x.set(S.index, S), S = S.sibling;
                return x
            }

            function i(S, x) {
                return S = Pe(S, x), S.index = 0, S.sibling = null, S
            }

            function u(S, x, E) {
                return S.index = E, t ? (E = S.alternate, E !== null ? (E = E.index, E < x ? (S.flags |= 67108866, x) : E) : (S.flags |= 67108866, x)) : (S.flags |= 1048576, x)
            }

            function o(S) {
                return t && S.alternate === null && (S.flags |= 67108866), S
            }

            function f(S, x, E, U) {
                return x === null || x.tag !== 6 ? (x = oc(E, S.mode, U), x.return = S, x) : (x = i(x, E), x.return = S, x)
            }

            function m(S, x, E, U) {
                var I = E.type;
                return I === R ? N(S, x, E.props.children, U, E.key) : x !== null && (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === P && ea(I) === x.type) ? (x = i(x, E.props), bn(x, E), x.return = S, x) : (x = bi(E.type, E.key, E.props, null, S.mode, U), bn(x, E), x.return = S, x)
            }

            function z(S, x, E, U) {
                return x === null || x.tag !== 4 || x.stateNode.containerInfo !== E.containerInfo || x.stateNode.implementation !== E.implementation ? (x = sc(E, S.mode, U), x.return = S, x) : (x = i(x, E.children || []), x.return = S, x)
            }

            function N(S, x, E, U, I) {
                return x === null || x.tag !== 7 ? (x = Wl(E, S.mode, U, I), x.return = S, x) : (x = i(x, E), x.return = S, x)
            }

            function B(S, x, E) {
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return x = oc("" + x, S.mode, E), x.return = S, x;
                if (typeof x == "object" && x !== null) {
                    switch (x.$$typeof) {
                        case Y:
                            return E = bi(x.type, x.key, x.props, null, S.mode, E), bn(E, x), E.return = S, E;
                        case q:
                            return x = sc(x, S.mode, E), x.return = S, x;
                        case P:
                            return x = ea(x), B(S, x, E)
                    }
                    if (Ut(x) || yt(x)) return x = Wl(x, S.mode, E, null), x.return = S, x;
                    if (typeof x.then == "function") return B(S, zi(x), E);
                    if (x.$$typeof === G) return B(S, _i(S, x), E);
                    Ai(S, x)
                }
                return null
            }

            function A(S, x, E, U) {
                var I = x !== null ? x.key : null;
                if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint") return I !== null ? null : f(S, x, "" + E, U);
                if (typeof E == "object" && E !== null) {
                    switch (E.$$typeof) {
                        case Y:
                            return E.key === I ? m(S, x, E, U) : null;
                        case q:
                            return E.key === I ? z(S, x, E, U) : null;
                        case P:
                            return E = ea(E), A(S, x, E, U)
                    }
                    if (Ut(E) || yt(E)) return I !== null ? null : N(S, x, E, U, null);
                    if (typeof E.then == "function") return A(S, x, zi(E), U);
                    if (E.$$typeof === G) return A(S, x, _i(S, E), U);
                    Ai(S, E)
                }
                return null
            }

            function C(S, x, E, U, I) {
                if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return S = S.get(E) || null, f(x, S, "" + U, I);
                if (typeof U == "object" && U !== null) {
                    switch (U.$$typeof) {
                        case Y:
                            return S = S.get(U.key === null ? E : U.key) || null, m(x, S, U, I);
                        case q:
                            return S = S.get(U.key === null ? E : U.key) || null, z(x, S, U, I);
                        case P:
                            return U = ea(U), C(S, x, E, U, I)
                    }
                    if (Ut(U) || yt(U)) return S = S.get(E) || null, N(x, S, U, I, null);
                    if (typeof U.then == "function") return C(S, x, E, zi(U), I);
                    if (U.$$typeof === G) return C(S, x, E, _i(x, U), I);
                    Ai(x, U)
                }
                return null
            }

            function K(S, x, E, U) {
                for (var I = null, bt = null, $ = x, ct = x = 0, gt = null; $ !== null && ct < E.length; ct++) {
                    $.index > ct ? (gt = $, $ = null) : gt = $.sibling;
                    var xt = A(S, $, E[ct], U);
                    if (xt === null) {
                        $ === null && ($ = gt);
                        break
                    }
                    t && $ && xt.alternate === null && e(S, $), x = u(xt, x, ct), bt === null ? I = xt : bt.sibling = xt, bt = xt, $ = gt
                }
                if (ct === E.length) return l(S, $), vt && tl(S, ct), I;
                if ($ === null) {
                    for (; ct < E.length; ct++) $ = B(S, E[ct], U), $ !== null && (x = u($, x, ct), bt === null ? I = $ : bt.sibling = $, bt = $);
                    return vt && tl(S, ct), I
                }
                for ($ = a($); ct < E.length; ct++) gt = C($, S, ct, E[ct], U), gt !== null && (t && gt.alternate !== null && $.delete(gt.key === null ? ct : gt.key), x = u(gt, x, ct), bt === null ? I = gt : bt.sibling = gt, bt = gt);
                return t && $.forEach(function(kl) {
                    return e(S, kl)
                }), vt && tl(S, ct), I
            }

            function tt(S, x, E, U) {
                if (E == null) throw Error(r(151));
                for (var I = null, bt = null, $ = x, ct = x = 0, gt = null, xt = E.next(); $ !== null && !xt.done; ct++, xt = E.next()) {
                    $.index > ct ? (gt = $, $ = null) : gt = $.sibling;
                    var kl = A(S, $, xt.value, U);
                    if (kl === null) {
                        $ === null && ($ = gt);
                        break
                    }
                    t && $ && kl.alternate === null && e(S, $), x = u(kl, x, ct), bt === null ? I = kl : bt.sibling = kl, bt = kl, $ = gt
                }
                if (xt.done) return l(S, $), vt && tl(S, ct), I;
                if ($ === null) {
                    for (; !xt.done; ct++, xt = E.next()) xt = B(S, xt.value, U), xt !== null && (x = u(xt, x, ct), bt === null ? I = xt : bt.sibling = xt, bt = xt);
                    return vt && tl(S, ct), I
                }
                for ($ = a($); !xt.done; ct++, xt = E.next()) xt = C($, S, ct, xt.value, U), xt !== null && (t && xt.alternate !== null && $.delete(xt.key === null ? ct : xt.key), x = u(xt, x, ct), bt === null ? I = xt : bt.sibling = xt, bt = xt);
                return t && $.forEach(function(Hg) {
                    return e(S, Hg)
                }), vt && tl(S, ct), I
            }

            function Ct(S, x, E, U) {
                if (typeof E == "object" && E !== null && E.type === R && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
                    switch (E.$$typeof) {
                        case Y:
                            t: {
                                for (var I = E.key; x !== null;) {
                                    if (x.key === I) {
                                        if (I = E.type, I === R) {
                                            if (x.tag === 7) {
                                                l(S, x.sibling), U = i(x, E.props.children), U.return = S, S = U;
                                                break t
                                            }
                                        } else if (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === P && ea(I) === x.type) {
                                            l(S, x.sibling), U = i(x, E.props), bn(U, E), U.return = S, S = U;
                                            break t
                                        }
                                        l(S, x);
                                        break
                                    } else e(S, x);
                                    x = x.sibling
                                }
                                E.type === R ? (U = Wl(E.props.children, S.mode, U, E.key), U.return = S, S = U) : (U = bi(E.type, E.key, E.props, null, S.mode, U), bn(U, E), U.return = S, S = U)
                            }
                            return o(S);
                        case q:
                            t: {
                                for (I = E.key; x !== null;) {
                                    if (x.key === I)
                                        if (x.tag === 4 && x.stateNode.containerInfo === E.containerInfo && x.stateNode.implementation === E.implementation) {
                                            l(S, x.sibling), U = i(x, E.children || []), U.return = S, S = U;
                                            break t
                                        } else {
                                            l(S, x);
                                            break
                                        }
                                    else e(S, x);
                                    x = x.sibling
                                }
                                U = sc(E, S.mode, U),
                                U.return = S,
                                S = U
                            }
                            return o(S);
                        case P:
                            return E = ea(E), Ct(S, x, E, U)
                    }
                    if (Ut(E)) return K(S, x, E, U);
                    if (yt(E)) {
                        if (I = yt(E), typeof I != "function") throw Error(r(150));
                        return E = I.call(E), tt(S, x, E, U)
                    }
                    if (typeof E.then == "function") return Ct(S, x, zi(E), U);
                    if (E.$$typeof === G) return Ct(S, x, _i(S, E), U);
                    Ai(S, E)
                }
                return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (E = "" + E, x !== null && x.tag === 6 ? (l(S, x.sibling), U = i(x, E), U.return = S, S = U) : (l(S, x), U = oc(E, S.mode, U), U.return = S, S = U), o(S)) : l(S, x)
            }
            return function(S, x, E, U) {
                try {
                    yn = 0;
                    var I = Ct(S, x, E, U);
                    return Na = null, I
                } catch ($) {
                    if ($ === Ma || $ === Ti) throw $;
                    var bt = xe(29, $, null, S.mode);
                    return bt.lanes = U, bt.return = S, bt
                }
            }
        }
        var aa = Ir(!0),
            Pr = Ir(!1),
            Tl = !1;

        function Sc(t) {
            t.updateQueue = {
                baseState: t.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            }
        }

        function _c(t, e) {
            t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                callbacks: null
            })
        }

        function El(t) {
            return {
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function zl(t, e, l) {
            var a = t.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (St & 2) !== 0) {
                var i = a.pending;
                return i === null ? e.next = e : (e.next = i.next, i.next = e), a.pending = e, e = yi(t), Hr(t, null, l), e
            }
            return vi(t, a, e, l), yi(t)
        }

        function xn(t, e, l) {
            if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
                var a = e.lanes;
                a &= t.pendingLanes, l |= a, e.lanes = l, Xs(t, l)
            }
        }

        function wc(t, e) {
            var l = t.updateQueue,
                a = t.alternate;
            if (a !== null && (a = a.updateQueue, l === a)) {
                var i = null,
                    u = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var o = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        u === null ? i = u = o : u = u.next = o, l = l.next
                    } while (l !== null);
                    u === null ? i = u = e : u = u.next = e
                } else i = u = e;
                l = {
                    baseState: a.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: u,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, t.updateQueue = l;
                return
            }
            t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e
        }
        var Tc = !1;

        function Sn() {
            if (Tc) {
                var t = Ca;
                if (t !== null) throw t
            }
        }

        function _n(t, e, l, a) {
            Tc = !1;
            var i = t.updateQueue;
            Tl = !1;
            var u = i.firstBaseUpdate,
                o = i.lastBaseUpdate,
                f = i.shared.pending;
            if (f !== null) {
                i.shared.pending = null;
                var m = f,
                    z = m.next;
                m.next = null, o === null ? u = z : o.next = z, o = m;
                var N = t.alternate;
                N !== null && (N = N.updateQueue, f = N.lastBaseUpdate, f !== o && (f === null ? N.firstBaseUpdate = z : f.next = z, N.lastBaseUpdate = m))
            }
            if (u !== null) {
                var B = i.baseState;
                o = 0, N = z = m = null, f = u;
                do {
                    var A = f.lane & -536870913,
                        C = A !== f.lane;
                    if (C ? (ht & A) === A : (a & A) === A) {
                        A !== 0 && A === Oa && (Tc = !0), N !== null && (N = N.next = {
                            lane: 0,
                            tag: f.tag,
                            payload: f.payload,
                            callback: null,
                            next: null
                        });
                        t: {
                            var K = t,
                                tt = f;A = e;
                            var Ct = l;
                            switch (tt.tag) {
                                case 1:
                                    if (K = tt.payload, typeof K == "function") {
                                        B = K.call(Ct, B, A);
                                        break t
                                    }
                                    B = K;
                                    break t;
                                case 3:
                                    K.flags = K.flags & -65537 | 128;
                                case 0:
                                    if (K = tt.payload, A = typeof K == "function" ? K.call(Ct, B, A) : K, A == null) break t;
                                    B = T({}, B, A);
                                    break t;
                                case 2:
                                    Tl = !0
                            }
                        }
                        A = f.callback, A !== null && (t.flags |= 64, C && (t.flags |= 8192), C = i.callbacks, C === null ? i.callbacks = [A] : C.push(A))
                    } else C = {
                        lane: A,
                        tag: f.tag,
                        payload: f.payload,
                        callback: f.callback,
                        next: null
                    }, N === null ? (z = N = C, m = B) : N = N.next = C, o |= A;
                    if (f = f.next, f === null) {
                        if (f = i.shared.pending, f === null) break;
                        C = f, f = C.next, C.next = null, i.lastBaseUpdate = C, i.shared.pending = null
                    }
                } while (!0);
                N === null && (m = B), i.baseState = m, i.firstBaseUpdate = z, i.lastBaseUpdate = N, u === null && (i.shared.lanes = 0), Nl |= o, t.lanes = o, t.memoizedState = B
            }
        }

        function tf(t, e) {
            if (typeof t != "function") throw Error(r(191, t));
            t.call(e)
        }

        function ef(t, e) {
            var l = t.callbacks;
            if (l !== null)
                for (t.callbacks = null, t = 0; t < l.length; t++) tf(l[t], e)
        }
        var Da = y(null),
            Oi = y(0);

        function lf(t, e) {
            t = fl, Q(Oi, t), Q(Da, e), fl = t | e.baseLanes
        }

        function Ec() {
            Q(Oi, fl), Q(Da, Da.current)
        }

        function zc() {
            fl = Oi.current, D(Da), D(Oi)
        }
        var Se = y(null),
            je = null;

        function Al(t) {
            var e = t.alternate;
            Q(Lt, Lt.current & 1), Q(Se, t), je === null && (e === null || Da.current !== null || e.memoizedState !== null) && (je = t)
        }

        function Ac(t) {
            Q(Lt, Lt.current), Q(Se, t), je === null && (je = t)
        }

        function af(t) {
            t.tag === 22 ? (Q(Lt, Lt.current), Q(Se, t), je === null && (je = t)) : Ol()
        }

        function Ol() {
            Q(Lt, Lt.current), Q(Se, Se.current)
        }

        function _e(t) {
            D(Se), je === t && (je = null), D(Lt)
        }
        var Lt = y(0);

        function Ci(t) {
            for (var e = t; e !== null;) {
                if (e.tag === 13) {
                    var l = e.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || Ro(l) || Uo(l))) return e
                } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                    if ((e.flags & 128) !== 0) return e
                } else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return null;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            return null
        }
        var al = 0,
            ut = null,
            At = null,
            Xt = null,
            Mi = !1,
            ja = !1,
            na = !1,
            Ni = 0,
            wn = 0,
            Ra = null,
            zh = 0;

        function Ht() {
            throw Error(r(321))
        }

        function Oc(t, e) {
            if (e === null) return !1;
            for (var l = 0; l < e.length && l < t.length; l++)
                if (!be(t[l], e[l])) return !1;
            return !0
        }

        function Cc(t, e, l, a, i, u) {
            return al = u, ut = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? kf : Xc, na = !1, u = l(a, i), na = !1, ja && (u = uf(e, l, a, i)), nf(t), u
        }

        function nf(t) {
            M.H = zn;
            var e = At !== null && At.next !== null;
            if (al = 0, Xt = At = ut = null, Mi = !1, wn = 0, Ra = null, e) throw Error(r(300));
            t === null || Zt || (t = t.dependencies, t !== null && Si(t) && (Zt = !0))
        }

        function uf(t, e, l, a) {
            ut = t;
            var i = 0;
            do {
                if (ja && (Ra = null), wn = 0, ja = !1, 25 <= i) throw Error(r(301));
                if (i += 1, Xt = At = null, t.updateQueue != null) {
                    var u = t.updateQueue;
                    u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
                }
                M.H = Gf, u = e(l, a)
            } while (ja);
            return u
        }

        function Ah() {
            var t = M.H,
                e = t.useState()[0];
            return e = typeof e.then == "function" ? Tn(e) : e, t = t.useState()[0], (At !== null ? At.memoizedState : null) !== t && (ut.flags |= 1024), e
        }

        function Mc() {
            var t = Ni !== 0;
            return Ni = 0, t
        }

        function Nc(t, e, l) {
            e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l
        }

        function Dc(t) {
            if (Mi) {
                for (t = t.memoizedState; t !== null;) {
                    var e = t.queue;
                    e !== null && (e.pending = null), t = t.next
                }
                Mi = !1
            }
            al = 0, Xt = At = ut = null, ja = !1, wn = Ni = 0, Ra = null
        }

        function ie() {
            var t = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Xt === null ? ut.memoizedState = Xt = t : Xt = Xt.next = t, Xt
        }

        function kt() {
            if (At === null) {
                var t = ut.alternate;
                t = t !== null ? t.memoizedState : null
            } else t = At.next;
            var e = Xt === null ? ut.memoizedState : Xt.next;
            if (e !== null) Xt = e, At = t;
            else {
                if (t === null) throw ut.alternate === null ? Error(r(467)) : Error(r(310));
                At = t, t = {
                    memoizedState: At.memoizedState,
                    baseState: At.baseState,
                    baseQueue: At.baseQueue,
                    queue: At.queue,
                    next: null
                }, Xt === null ? ut.memoizedState = Xt = t : Xt = Xt.next = t
            }
            return Xt
        }

        function Di() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }

        function Tn(t) {
            var e = wn;
            return wn += 1, Ra === null && (Ra = []), t = $r(Ra, t, e), e = ut, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? kf : Xc), t
        }

        function ji(t) {
            if (t !== null && typeof t == "object") {
                if (typeof t.then == "function") return Tn(t);
                if (t.$$typeof === G) return Pt(t)
            }
            throw Error(r(438, String(t)))
        }

        function jc(t) {
            var e = null,
                l = ut.updateQueue;
            if (l !== null && (e = l.memoCache), e == null) {
                var a = ut.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
                    data: a.data.map(function(i) {
                        return i.slice()
                    }),
                    index: 0
                })))
            }
            if (e == null && (e = {
                    data: [],
                    index: 0
                }), l === null && (l = Di(), ut.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
                for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = pt;
            return e.index++, l
        }

        function nl(t, e) {
            return typeof e == "function" ? e(t) : e
        }

        function Ri(t) {
            var e = kt();
            return Rc(e, At, t)
        }

        function Rc(t, e, l) {
            var a = t.queue;
            if (a === null) throw Error(r(311));
            a.lastRenderedReducer = l;
            var i = t.baseQueue,
                u = a.pending;
            if (u !== null) {
                if (i !== null) {
                    var o = i.next;
                    i.next = u.next, u.next = o
                }
                e.baseQueue = i = u, a.pending = null
            }
            if (u = t.baseState, i === null) t.memoizedState = u;
            else {
                e = i.next;
                var f = o = null,
                    m = null,
                    z = e,
                    N = !1;
                do {
                    var B = z.lane & -536870913;
                    if (B !== z.lane ? (ht & B) === B : (al & B) === B) {
                        var A = z.revertLane;
                        if (A === 0) m !== null && (m = m.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }), B === Oa && (N = !0);
                        else if ((al & A) === A) {
                            z = z.next, A === Oa && (N = !0);
                            continue
                        } else B = {
                            lane: 0,
                            revertLane: z.revertLane,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }, m === null ? (f = m = B, o = u) : m = m.next = B, ut.lanes |= A, Nl |= A;
                        B = z.action, na && l(u, B), u = z.hasEagerState ? z.eagerState : l(u, B)
                    } else A = {
                        lane: B,
                        revertLane: z.revertLane,
                        gesture: z.gesture,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }, m === null ? (f = m = A, o = u) : m = m.next = A, ut.lanes |= B, Nl |= B;
                    z = z.next
                } while (z !== null && z !== e);
                if (m === null ? o = u : m.next = f, !be(u, t.memoizedState) && (Zt = !0, N && (l = Ca, l !== null))) throw l;
                t.memoizedState = u, t.baseState = o, t.baseQueue = m, a.lastRenderedState = u
            }
            return i === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
        }

        function Uc(t) {
            var e = kt(),
                l = e.queue;
            if (l === null) throw Error(r(311));
            l.lastRenderedReducer = t;
            var a = l.dispatch,
                i = l.pending,
                u = e.memoizedState;
            if (i !== null) {
                l.pending = null;
                var o = i = i.next;
                do u = t(u, o.action), o = o.next; while (o !== i);
                be(u, e.memoizedState) || (Zt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u
            }
            return [u, a]
        }

        function cf(t, e, l) {
            var a = ut,
                i = kt(),
                u = vt;
            if (u) {
                if (l === void 0) throw Error(r(407));
                l = l()
            } else l = e();
            var o = !be((At || i).memoizedState, l);
            if (o && (i.memoizedState = l, Zt = !0), i = i.queue, Yc(rf.bind(null, a, i, t), [t]), i.getSnapshot !== e || o || Xt !== null && Xt.memoizedState.tag & 1) {
                if (a.flags |= 2048, Ua(9, {
                        destroy: void 0
                    }, sf.bind(null, a, i, l, e), null), Mt === null) throw Error(r(349));
                u || (al & 127) !== 0 || of (a, e, l)
            }
            return l
        }

        function of (t, e, l) {
            t.flags |= 16384, t = {
                getSnapshot: e,
                value: l
            }, e = ut.updateQueue, e === null ? (e = Di(), ut.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t))
        }

        function sf(t, e, l, a) {
            e.value = l, e.getSnapshot = a, ff(e) && df(t)
        }

        function rf(t, e, l) {
            return l(function() {
                ff(e) && df(t)
            })
        }

        function ff(t) {
            var e = t.getSnapshot;
            t = t.value;
            try {
                var l = e();
                return !be(t, l)
            } catch {
                return !0
            }
        }

        function df(t) {
            var e = $l(t, 2);
            e !== null && pe(e, t, 2)
        }

        function Hc(t) {
            var e = ie();
            if (typeof t == "function") {
                var l = t;
                if (t = l(), na) {
                    vl(!0);
                    try {
                        l()
                    } finally {
                        vl(!1)
                    }
                }
            }
            return e.memoizedState = e.baseState = t, e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: nl,
                lastRenderedState: t
            }, e
        }

        function mf(t, e, l, a) {
            return t.baseState = l, Rc(t, At, typeof a == "function" ? a : nl)
        }

        function Oh(t, e, l, a, i) {
            if (Bi(t)) throw Error(r(485));
            if (t = e.action, t !== null) {
                var u = {
                    payload: i,
                    action: t,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(o) {
                        u.listeners.push(o)
                    }
                };
                M.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, pf(e, u)) : (u.next = l.next, e.pending = l.next = u)
            }
        }

        function pf(t, e) {
            var l = e.action,
                a = e.payload,
                i = t.state;
            if (e.isTransition) {
                var u = M.T,
                    o = {};
                M.T = o;
                try {
                    var f = l(i, a),
                        m = M.S;
                    m !== null && m(o, f), hf(t, e, f)
                } catch (z) {
                    Bc(t, e, z)
                } finally {
                    u !== null && o.types !== null && (u.types = o.types), M.T = u
                }
            } else try {
                u = l(i, a), hf(t, e, u)
            } catch (z) {
                Bc(t, e, z)
            }
        }

        function hf(t, e, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
                gf(t, e, a)
            }, function(a) {
                return Bc(t, e, a)
            }) : gf(t, e, l)
        }

        function gf(t, e, l) {
            e.status = "fulfilled", e.value = l, vf(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, pf(t, l)))
        }

        function Bc(t, e, l) {
            var a = t.pending;
            if (t.pending = null, a !== null) {
                a = a.next;
                do e.status = "rejected", e.reason = l, vf(e), e = e.next; while (e !== a)
            }
            t.action = null
        }

        function vf(t) {
            t = t.listeners;
            for (var e = 0; e < t.length; e++)(0, t[e])()
        }

        function yf(t, e) {
            return e
        }

        function bf(t, e) {
            if (vt) {
                var l = Mt.formState;
                if (l !== null) {
                    t: {
                        var a = ut;
                        if (vt) {
                            if (Nt) {
                                e: {
                                    for (var i = Nt, u = De; i.nodeType !== 8;) {
                                        if (!u) {
                                            i = null;
                                            break e
                                        }
                                        if (i = Re(i.nextSibling), i === null) {
                                            i = null;
                                            break e
                                        }
                                    }
                                    u = i.data,
                                    i = u === "F!" || u === "F" ? i : null
                                }
                                if (i) {
                                    Nt = Re(i.nextSibling), a = i.data === "F!";
                                    break t
                                }
                            }
                            _l(a)
                        }
                        a = !1
                    }
                    a && (e = l[0])
                }
            }
            return l = ie(), l.memoizedState = l.baseState = e, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: yf,
                lastRenderedState: e
            }, l.queue = a, l = Yf.bind(null, ut, a), a.dispatch = l, a = Hc(!1), u = Qc.bind(null, ut, !1, a.queue), a = ie(), i = {
                state: e,
                dispatch: null,
                action: t,
                pending: null
            }, a.queue = i, l = Oh.bind(null, ut, i, u, l), i.dispatch = l, a.memoizedState = t, [e, l, !1]
        }

        function xf(t) {
            var e = kt();
            return Sf(e, At, t)
        }

        function Sf(t, e, l) {
            if (e = Rc(t, e, yf)[0], t = Ri(nl)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
                var a = Tn(e)
            } catch (o) {
                throw o === Ma ? Ti : o
            } else a = e;
            e = kt();
            var i = e.queue,
                u = i.dispatch;
            return l !== e.memoizedState && (ut.flags |= 2048, Ua(9, {
                destroy: void 0
            }, Ch.bind(null, i, l), null)), [a, u, t]
        }

        function Ch(t, e) {
            t.action = e
        }

        function _f(t) {
            var e = kt(),
                l = At;
            if (l !== null) return Sf(e, l, t);
            kt(), e = e.memoizedState, l = kt();
            var a = l.queue.dispatch;
            return l.memoizedState = t, [e, a, !1]
        }

        function Ua(t, e, l, a) {
            return t = {
                tag: t,
                create: l,
                deps: a,
                inst: e,
                next: null
            }, e = ut.updateQueue, e === null && (e = Di(), ut.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t
        }

        function wf() {
            return kt().memoizedState
        }

        function Ui(t, e, l, a) {
            var i = ie();
            ut.flags |= t, i.memoizedState = Ua(1 | e, {
                destroy: void 0
            }, l, a === void 0 ? null : a)
        }

        function Hi(t, e, l, a) {
            var i = kt();
            a = a === void 0 ? null : a;
            var u = i.memoizedState.inst;
            At !== null && a !== null && Oc(a, At.memoizedState.deps) ? i.memoizedState = Ua(e, u, l, a) : (ut.flags |= t, i.memoizedState = Ua(1 | e, u, l, a))
        }

        function Tf(t, e) {
            Ui(8390656, 8, t, e)
        }

        function Yc(t, e) {
            Hi(2048, 8, t, e)
        }

        function Mh(t) {
            ut.flags |= 4;
            var e = ut.updateQueue;
            if (e === null) e = Di(), ut.updateQueue = e, e.events = [t];
            else {
                var l = e.events;
                l === null ? e.events = [t] : l.push(t)
            }
        }

        function Ef(t) {
            var e = kt().memoizedState;
            return Mh({
                    ref: e,
                    nextImpl: t
                }),
                function() {
                    if ((St & 2) !== 0) throw Error(r(440));
                    return e.impl.apply(void 0, arguments)
                }
        }

        function zf(t, e) {
            return Hi(4, 2, t, e)
        }

        function Af(t, e) {
            return Hi(4, 4, t, e)
        }

        function Of(t, e) {
            if (typeof e == "function") {
                t = t();
                var l = e(t);
                return function() {
                    typeof l == "function" ? l() : e(null)
                }
            }
            if (e != null) return t = t(), e.current = t,
                function() {
                    e.current = null
                }
        }

        function Cf(t, e, l) {
            l = l != null ? l.concat([t]) : null, Hi(4, 4, Of.bind(null, e, t), l)
        }

        function qc() {}

        function Mf(t, e) {
            var l = kt();
            e = e === void 0 ? null : e;
            var a = l.memoizedState;
            return e !== null && Oc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t)
        }

        function Nf(t, e) {
            var l = kt();
            e = e === void 0 ? null : e;
            var a = l.memoizedState;
            if (e !== null && Oc(e, a[1])) return a[0];
            if (a = t(), na) {
                vl(!0);
                try {
                    t()
                } finally {
                    vl(!1)
                }
            }
            return l.memoizedState = [a, e], a
        }

        function Lc(t, e, l) {
            return l === void 0 || (al & 1073741824) !== 0 && (ht & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Dd(), ut.lanes |= t, Nl |= t, l)
        }

        function Df(t, e, l, a) {
            return be(l, e) ? l : Da.current !== null ? (t = Lc(t, l, a), be(t, e) || (Zt = !0), t) : (al & 42) === 0 || (al & 1073741824) !== 0 && (ht & 261930) === 0 ? (Zt = !0, t.memoizedState = l) : (t = Dd(), ut.lanes |= t, Nl |= t, e)
        }

        function jf(t, e, l, a, i) {
            var u = L.p;
            L.p = u !== 0 && 8 > u ? u : 8;
            var o = M.T,
                f = {};
            M.T = f, Qc(t, !1, e, l);
            try {
                var m = i(),
                    z = M.S;
                if (z !== null && z(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
                    var N = Eh(m, a);
                    En(t, e, N, Ee(t))
                } else En(t, e, a, Ee(t))
            } catch (B) {
                En(t, e, {
                    then: function() {},
                    status: "rejected",
                    reason: B
                }, Ee())
            } finally {
                L.p = u, o !== null && f.types !== null && (o.types = f.types), M.T = o
            }
        }

        function Nh() {}

        function kc(t, e, l, a) {
            if (t.tag !== 5) throw Error(r(476));
            var i = Rf(t).queue;
            jf(t, i, e, F, l === null ? Nh : function() {
                return Uf(t), l(a)
            })
        }

        function Rf(t) {
            var e = t.memoizedState;
            if (e !== null) return e;
            e = {
                memoizedState: F,
                baseState: F,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: nl,
                    lastRenderedState: F
                },
                next: null
            };
            var l = {};
            return e.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: nl,
                    lastRenderedState: l
                },
                next: null
            }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
        }

        function Uf(t) {
            var e = Rf(t);
            e.next === null && (e = t.alternate.memoizedState), En(t, e.next.queue, {}, Ee())
        }

        function Gc() {
            return Pt(Gn)
        }

        function Hf() {
            return kt().memoizedState
        }

        function Bf() {
            return kt().memoizedState
        }

        function Dh(t) {
            for (var e = t.return; e !== null;) {
                switch (e.tag) {
                    case 24:
                    case 3:
                        var l = Ee();
                        t = El(l);
                        var a = zl(e, t, l);
                        a !== null && (pe(a, e, l), xn(a, e, l)), e = {
                            cache: vc()
                        }, t.payload = e;
                        return
                }
                e = e.return
            }
        }

        function jh(t, e, l) {
            var a = Ee();
            l = {
                lane: a,
                revertLane: 0,
                gesture: null,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Bi(t) ? qf(e, l) : (l = uc(t, e, l, a), l !== null && (pe(l, t, a), Lf(l, e, a)))
        }

        function Yf(t, e, l) {
            var a = Ee();
            En(t, e, l, a)
        }

        function En(t, e, l, a) {
            var i = {
                lane: a,
                revertLane: 0,
                gesture: null,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Bi(t)) qf(e, i);
            else {
                var u = t.alternate;
                if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                    var o = e.lastRenderedState,
                        f = u(o, l);
                    if (i.hasEagerState = !0, i.eagerState = f, be(f, o)) return vi(t, e, i, 0), Mt === null && gi(), !1
                } catch {}
                if (l = uc(t, e, i, a), l !== null) return pe(l, t, a), Lf(l, e, a), !0
            }
            return !1
        }

        function Qc(t, e, l, a) {
            if (a = {
                    lane: 2,
                    revertLane: _o(),
                    gesture: null,
                    action: a,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, Bi(t)) {
                if (e) throw Error(r(479))
            } else e = uc(t, l, a, 2), e !== null && pe(e, t, 2)
        }

        function Bi(t) {
            var e = t.alternate;
            return t === ut || e !== null && e === ut
        }

        function qf(t, e) {
            ja = Mi = !0;
            var l = t.pending;
            l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e
        }

        function Lf(t, e, l) {
            if ((l & 4194048) !== 0) {
                var a = e.lanes;
                a &= t.pendingLanes, l |= a, e.lanes = l, Xs(t, l)
            }
        }
        var zn = {
            readContext: Pt,
            use: ji,
            useCallback: Ht,
            useContext: Ht,
            useEffect: Ht,
            useImperativeHandle: Ht,
            useLayoutEffect: Ht,
            useInsertionEffect: Ht,
            useMemo: Ht,
            useReducer: Ht,
            useRef: Ht,
            useState: Ht,
            useDebugValue: Ht,
            useDeferredValue: Ht,
            useTransition: Ht,
            useSyncExternalStore: Ht,
            useId: Ht,
            useHostTransitionStatus: Ht,
            useFormState: Ht,
            useActionState: Ht,
            useOptimistic: Ht,
            useMemoCache: Ht,
            useCacheRefresh: Ht
        };
        zn.useEffectEvent = Ht;
        var kf = {
                readContext: Pt,
                use: ji,
                useCallback: function(t, e) {
                    return ie().memoizedState = [t, e === void 0 ? null : e], t
                },
                useContext: Pt,
                useEffect: Tf,
                useImperativeHandle: function(t, e, l) {
                    l = l != null ? l.concat([t]) : null, Ui(4194308, 4, Of.bind(null, e, t), l)
                },
                useLayoutEffect: function(t, e) {
                    return Ui(4194308, 4, t, e)
                },
                useInsertionEffect: function(t, e) {
                    Ui(4, 2, t, e)
                },
                useMemo: function(t, e) {
                    var l = ie();
                    e = e === void 0 ? null : e;
                    var a = t();
                    if (na) {
                        vl(!0);
                        try {
                            t()
                        } finally {
                            vl(!1)
                        }
                    }
                    return l.memoizedState = [a, e], a
                },
                useReducer: function(t, e, l) {
                    var a = ie();
                    if (l !== void 0) {
                        var i = l(e);
                        if (na) {
                            vl(!0);
                            try {
                                l(e)
                            } finally {
                                vl(!1)
                            }
                        }
                    } else i = e;
                    return a.memoizedState = a.baseState = i, t = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: t,
                        lastRenderedState: i
                    }, a.queue = t, t = t.dispatch = jh.bind(null, ut, t), [a.memoizedState, t]
                },
                useRef: function(t) {
                    var e = ie();
                    return t = {
                        current: t
                    }, e.memoizedState = t
                },
                useState: function(t) {
                    t = Hc(t);
                    var e = t.queue,
                        l = Yf.bind(null, ut, e);
                    return e.dispatch = l, [t.memoizedState, l]
                },
                useDebugValue: qc,
                useDeferredValue: function(t, e) {
                    var l = ie();
                    return Lc(l, t, e)
                },
                useTransition: function() {
                    var t = Hc(!1);
                    return t = jf.bind(null, ut, t.queue, !0, !1), ie().memoizedState = t, [!1, t]
                },
                useSyncExternalStore: function(t, e, l) {
                    var a = ut,
                        i = ie();
                    if (vt) {
                        if (l === void 0) throw Error(r(407));
                        l = l()
                    } else {
                        if (l = e(), Mt === null) throw Error(r(349));
                        (ht & 127) !== 0 || of (a, e, l)
                    }
                    i.memoizedState = l;
                    var u = {
                        value: l,
                        getSnapshot: e
                    };
                    return i.queue = u, Tf(rf.bind(null, a, u, t), [t]), a.flags |= 2048, Ua(9, {
                        destroy: void 0
                    }, sf.bind(null, a, u, l, e), null), l
                },
                useId: function() {
                    var t = ie(),
                        e = Mt.identifierPrefix;
                    if (vt) {
                        var l = Ze,
                            a = Xe;
                        l = (a & ~(1 << 32 - ye(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Ni++, 0 < l && (e += "H" + l.toString(32)), e += "_"
                    } else l = zh++, e = "_" + e + "r_" + l.toString(32) + "_";
                    return t.memoizedState = e
                },
                useHostTransitionStatus: Gc,
                useFormState: bf,
                useActionState: bf,
                useOptimistic: function(t) {
                    var e = ie();
                    e.memoizedState = e.baseState = t;
                    var l = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: null,
                        lastRenderedState: null
                    };
                    return e.queue = l, e = Qc.bind(null, ut, !0, l), l.dispatch = e, [t, e]
                },
                useMemoCache: jc,
                useCacheRefresh: function() {
                    return ie().memoizedState = Dh.bind(null, ut)
                },
                useEffectEvent: function(t) {
                    var e = ie(),
                        l = {
                            impl: t
                        };
                    return e.memoizedState = l,
                        function() {
                            if ((St & 2) !== 0) throw Error(r(440));
                            return l.impl.apply(void 0, arguments)
                        }
                }
            },
            Xc = {
                readContext: Pt,
                use: ji,
                useCallback: Mf,
                useContext: Pt,
                useEffect: Yc,
                useImperativeHandle: Cf,
                useInsertionEffect: zf,
                useLayoutEffect: Af,
                useMemo: Nf,
                useReducer: Ri,
                useRef: wf,
                useState: function() {
                    return Ri(nl)
                },
                useDebugValue: qc,
                useDeferredValue: function(t, e) {
                    var l = kt();
                    return Df(l, At.memoizedState, t, e)
                },
                useTransition: function() {
                    var t = Ri(nl)[0],
                        e = kt().memoizedState;
                    return [typeof t == "boolean" ? t : Tn(t), e]
                },
                useSyncExternalStore: cf,
                useId: Hf,
                useHostTransitionStatus: Gc,
                useFormState: xf,
                useActionState: xf,
                useOptimistic: function(t, e) {
                    var l = kt();
                    return mf(l, At, t, e)
                },
                useMemoCache: jc,
                useCacheRefresh: Bf
            };
        Xc.useEffectEvent = Ef;
        var Gf = {
            readContext: Pt,
            use: ji,
            useCallback: Mf,
            useContext: Pt,
            useEffect: Yc,
            useImperativeHandle: Cf,
            useInsertionEffect: zf,
            useLayoutEffect: Af,
            useMemo: Nf,
            useReducer: Uc,
            useRef: wf,
            useState: function() {
                return Uc(nl)
            },
            useDebugValue: qc,
            useDeferredValue: function(t, e) {
                var l = kt();
                return At === null ? Lc(l, t, e) : Df(l, At.memoizedState, t, e)
            },
            useTransition: function() {
                var t = Uc(nl)[0],
                    e = kt().memoizedState;
                return [typeof t == "boolean" ? t : Tn(t), e]
            },
            useSyncExternalStore: cf,
            useId: Hf,
            useHostTransitionStatus: Gc,
            useFormState: _f,
            useActionState: _f,
            useOptimistic: function(t, e) {
                var l = kt();
                return At !== null ? mf(l, At, t, e) : (l.baseState = t, [t, l.queue.dispatch])
            },
            useMemoCache: jc,
            useCacheRefresh: Bf
        };
        Gf.useEffectEvent = Ef;

        function Zc(t, e, l, a) {
            e = t.memoizedState, l = l(a, e), l = l == null ? e : T({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l)
        }
        var Vc = {
            enqueueSetState: function(t, e, l) {
                t = t._reactInternals;
                var a = Ee(),
                    i = El(a);
                i.payload = e, l != null && (i.callback = l), e = zl(t, i, a), e !== null && (pe(e, t, a), xn(e, t, a))
            },
            enqueueReplaceState: function(t, e, l) {
                t = t._reactInternals;
                var a = Ee(),
                    i = El(a);
                i.tag = 1, i.payload = e, l != null && (i.callback = l), e = zl(t, i, a), e !== null && (pe(e, t, a), xn(e, t, a))
            },
            enqueueForceUpdate: function(t, e) {
                t = t._reactInternals;
                var l = Ee(),
                    a = El(l);
                a.tag = 2, e != null && (a.callback = e), e = zl(t, a, l), e !== null && (pe(e, t, l), xn(e, t, l))
            }
        };

        function Qf(t, e, l, a, i, u, o) {
            return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, o) : e.prototype && e.prototype.isPureReactComponent ? !dn(l, a) || !dn(i, u) : !0
        }

        function Xf(t, e, l, a) {
            t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Vc.enqueueReplaceState(e, e.state, null)
        }

        function ia(t, e) {
            var l = e;
            if ("ref" in e) {
                l = {};
                for (var a in e) a !== "ref" && (l[a] = e[a])
            }
            if (t = t.defaultProps) {
                l === e && (l = T({}, l));
                for (var i in t) l[i] === void 0 && (l[i] = t[i])
            }
            return l
        }

        function Zf(t) {
            hi(t)
        }

        function Vf(t) {
            console.error(t)
        }

        function Kf(t) {
            hi(t)
        }

        function Yi(t, e) {
            try {
                var l = t.onUncaughtError;
                l(e.value, {
                    componentStack: e.stack
                })
            } catch (a) {
                setTimeout(function() {
                    throw a
                })
            }
        }

        function Jf(t, e, l) {
            try {
                var a = t.onCaughtError;
                a(l.value, {
                    componentStack: l.stack,
                    errorBoundary: e.tag === 1 ? e.stateNode : null
                })
            } catch (i) {
                setTimeout(function() {
                    throw i
                })
            }
        }

        function Kc(t, e, l) {
            return l = El(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Yi(t, e)
            }, l
        }

        function $f(t) {
            return t = El(t), t.tag = 3, t
        }

        function Wf(t, e, l, a) {
            var i = l.type.getDerivedStateFromError;
            if (typeof i == "function") {
                var u = a.value;
                t.payload = function() {
                    return i(u)
                }, t.callback = function() {
                    Jf(e, l, a)
                }
            }
            var o = l.stateNode;
            o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
                Jf(e, l, a), typeof i != "function" && (Dl === null ? Dl = new Set([this]) : Dl.add(this));
                var f = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: f !== null ? f : ""
                })
            })
        }

        function Rh(t, e, l, a, i) {
            if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (e = l.alternate, e !== null && Aa(e, l, i, !0), l = Se.current, l !== null) {
                    switch (l.tag) {
                        case 31:
                        case 13:
                            return je === null ? Wi() : l.alternate === null && Bt === 0 && (Bt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === Ei ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([a]) : e.add(a), bo(t, a, i)), !1;
                        case 22:
                            return l.flags |= 65536, a === Ei ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([a])
                            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([a]) : l.add(a)), bo(t, a, i)), !1
                    }
                    throw Error(r(435, l.tag))
                }
                return bo(t, a, i), Wi(), !1
            }
            if (vt) return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = i, a !== dc && (t = Error(r(422), {
                cause: a
            }), hn(Ce(t, l)))) : (a !== dc && (e = Error(r(423), {
                cause: a
            }), hn(Ce(e, l))), t = t.current.alternate, t.flags |= 65536, i &= -i, t.lanes |= i, a = Ce(a, l), i = Kc(t.stateNode, a, i), wc(t, i), Bt !== 4 && (Bt = 2)), !1;
            var u = Error(r(520), {
                cause: a
            });
            if (u = Ce(u, l), Rn === null ? Rn = [u] : Rn.push(u), Bt !== 4 && (Bt = 2), e === null) return !0;
            a = Ce(a, l), l = e;
            do {
                switch (l.tag) {
                    case 3:
                        return l.flags |= 65536, t = i & -i, l.lanes |= t, t = Kc(l.stateNode, a, t), wc(l, t), !1;
                    case 1:
                        if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Dl === null || !Dl.has(u)))) return l.flags |= 65536, i &= -i, l.lanes |= i, i = $f(i), Wf(i, t, l, a), wc(l, i), !1
                }
                l = l.return
            } while (l !== null);
            return !1
        }
        var Jc = Error(r(461)),
            Zt = !1;

        function te(t, e, l, a) {
            e.child = t === null ? Pr(e, null, l, a) : aa(e, t.child, l, a)
        }

        function Ff(t, e, l, a, i) {
            l = l.render;
            var u = e.ref;
            if ("ref" in a) {
                var o = {};
                for (var f in a) f !== "ref" && (o[f] = a[f])
            } else o = a;
            return Pl(e), a = Cc(t, e, l, o, u, i), f = Mc(), t !== null && !Zt ? (Nc(t, e, i), il(t, e, i)) : (vt && f && rc(e), e.flags |= 1, te(t, e, a, i), e.child)
        }

        function If(t, e, l, a, i) {
            if (t === null) {
                var u = l.type;
                return typeof u == "function" && !cc(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Pf(t, e, u, a, i)) : (t = bi(l.type, null, a, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t)
            }
            if (u = t.child, !lo(t, i)) {
                var o = u.memoizedProps;
                if (l = l.compare, l = l !== null ? l : dn, l(o, a) && t.ref === e.ref) return il(t, e, i)
            }
            return e.flags |= 1, t = Pe(u, a), t.ref = e.ref, t.return = e, e.child = t
        }

        function Pf(t, e, l, a, i) {
            if (t !== null) {
                var u = t.memoizedProps;
                if (dn(u, a) && t.ref === e.ref)
                    if (Zt = !1, e.pendingProps = a = u, lo(t, i))(t.flags & 131072) !== 0 && (Zt = !0);
                    else return e.lanes = t.lanes, il(t, e, i)
            }
            return $c(t, e, l, a, i)
        }

        function td(t, e, l, a) {
            var i = a.children,
                u = t !== null ? t.memoizedState : null;
            if (t === null && e.stateNode === null && (e.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null
                }), a.mode === "hidden") {
                if ((e.flags & 128) !== 0) {
                    if (u = u !== null ? u.baseLanes | l : l, t !== null) {
                        for (a = e.child = t.child, i = 0; a !== null;) i = i | a.lanes | a.childLanes, a = a.sibling;
                        a = i & ~u
                    } else a = 0, e.child = null;
                    return ed(t, e, u, l, a)
                }
                if ((l & 536870912) !== 0) e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, t !== null && wi(e, u !== null ? u.cachePool : null), u !== null ? lf(e, u) : Ec(), af(e);
                else return a = e.lanes = 536870912, ed(t, e, u !== null ? u.baseLanes | l : l, l, a)
            } else u !== null ? (wi(e, u.cachePool), lf(e, u), Ol(), e.memoizedState = null) : (t !== null && wi(e, null), Ec(), Ol());
            return te(t, e, i, l), e.child
        }

        function An(t, e) {
            return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), e.sibling
        }

        function ed(t, e, l, a, i) {
            var u = bc();
            return u = u === null ? null : {
                parent: Qt._currentValue,
                pool: u
            }, e.memoizedState = {
                baseLanes: l,
                cachePool: u
            }, t !== null && wi(e, null), Ec(), af(e), t !== null && Aa(t, e, a, !0), e.childLanes = i, null
        }

        function qi(t, e) {
            return e = ki({
                mode: e.mode,
                children: e.children
            }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
        }

        function ld(t, e, l) {
            return aa(e, t.child, null, l), t = qi(e, e.pendingProps), t.flags |= 2, _e(e), e.memoizedState = null, t
        }

        function Uh(t, e, l) {
            var a = e.pendingProps,
                i = (e.flags & 128) !== 0;
            if (e.flags &= -129, t === null) {
                if (vt) {
                    if (a.mode === "hidden") return t = qi(e, a), e.lanes = 536870912, An(null, t);
                    if (Ac(e), (t = Nt) ? (t = pm(t, De), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                            dehydrated: t,
                            treeContext: xl !== null ? {
                                id: Xe,
                                overflow: Ze
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, l = Yr(t), l.return = e, e.child = l, It = e, Nt = null)) : t = null, t === null) throw _l(e);
                    return e.lanes = 536870912, null
                }
                return qi(e, a)
            }
            var u = t.memoizedState;
            if (u !== null) {
                var o = u.dehydrated;
                if (Ac(e), i)
                    if (e.flags & 256) e.flags &= -257, e = ld(t, e, l);
                    else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
                else throw Error(r(558));
                else if (Zt || Aa(t, e, l, !1), i = (l & t.childLanes) !== 0, Zt || i) {
                    if (a = Mt, a !== null && (o = Zs(a, l), o !== 0 && o !== u.retryLane)) throw u.retryLane = o, $l(t, o), pe(a, t, o), Jc;
                    Wi(), e = ld(t, e, l)
                } else t = u.treeContext, Nt = Re(o.nextSibling), It = e, vt = !0, Sl = null, De = !1, t !== null && kr(e, t), e = qi(e, a), e.flags |= 4096;
                return e
            }
            return t = Pe(t.child, {
                mode: a.mode,
                children: a.children
            }), t.ref = e.ref, e.child = t, t.return = e, t
        }

        function Li(t, e) {
            var l = e.ref;
            if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(r(284));
                (t === null || t.ref !== l) && (e.flags |= 4194816)
            }
        }

        function $c(t, e, l, a, i) {
            return Pl(e), l = Cc(t, e, l, a, void 0, i), a = Mc(), t !== null && !Zt ? (Nc(t, e, i), il(t, e, i)) : (vt && a && rc(e), e.flags |= 1, te(t, e, l, i), e.child)
        }

        function ad(t, e, l, a, i, u) {
            return Pl(e), e.updateQueue = null, l = uf(e, a, l, i), nf(t), a = Mc(), t !== null && !Zt ? (Nc(t, e, u), il(t, e, u)) : (vt && a && rc(e), e.flags |= 1, te(t, e, l, u), e.child)
        }

        function nd(t, e, l, a, i) {
            if (Pl(e), e.stateNode === null) {
                var u = wa,
                    o = l.contextType;
                typeof o == "object" && o !== null && (u = Pt(o)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Vc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Sc(e), o = l.contextType, u.context = typeof o == "object" && o !== null ? Pt(o) : wa, u.state = e.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (Zc(e, l, o, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (o = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), o !== u.state && Vc.enqueueReplaceState(u, u.state, null), _n(e, a, u, i), Sn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
            } else if (t === null) {
                u = e.stateNode;
                var f = e.memoizedProps,
                    m = ia(l, f);
                u.props = m;
                var z = u.context,
                    N = l.contextType;
                o = wa, typeof N == "object" && N !== null && (o = Pt(N));
                var B = l.getDerivedStateFromProps;
                N = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = e.pendingProps !== f, N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || z !== o) && Xf(e, u, a, o), Tl = !1;
                var A = e.memoizedState;
                u.state = A, _n(e, a, u, i), Sn(), z = e.memoizedState, f || A !== z || Tl ? (typeof B == "function" && (Zc(e, l, B, a), z = e.memoizedState), (m = Tl || Qf(e, l, m, a, A, z, o)) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = o, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
            } else {
                u = e.stateNode, _c(t, e), o = e.memoizedProps, N = ia(l, o), u.props = N, B = e.pendingProps, A = u.context, z = l.contextType, m = wa, typeof z == "object" && z !== null && (m = Pt(z)), f = l.getDerivedStateFromProps, (z = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== B || A !== m) && Xf(e, u, a, m), Tl = !1, A = e.memoizedState, u.state = A, _n(e, a, u, i), Sn();
                var C = e.memoizedState;
                o !== B || A !== C || Tl || t !== null && t.dependencies !== null && Si(t.dependencies) ? (typeof f == "function" && (Zc(e, l, f, a), C = e.memoizedState), (N = Tl || Qf(e, l, N, a, A, C, m) || t !== null && t.dependencies !== null && Si(t.dependencies)) ? (z || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, C, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = C), u.props = a, u.state = C, u.context = m, a = N) : (typeof u.componentDidUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1)
            }
            return u = a, Li(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = aa(e, t.child, null, i), e.child = aa(e, null, l, i)) : te(t, e, l, i), e.memoizedState = u.state, t = e.child) : t = il(t, e, i), t
        }

        function id(t, e, l, a) {
            return Fl(), e.flags |= 256, te(t, e, l, a), e.child
        }
        var Wc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };

        function Fc(t) {
            return {
                baseLanes: t,
                cachePool: Kr()
            }
        }

        function Ic(t, e, l) {
            return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Te), t
        }

        function ud(t, e, l) {
            var a = e.pendingProps,
                i = !1,
                u = (e.flags & 128) !== 0,
                o;
            if ((o = u) || (o = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0), o && (i = !0, e.flags &= -129), o = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
                if (vt) {
                    if (i ? Al(e) : Ol(), (t = Nt) ? (t = pm(t, De), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                            dehydrated: t,
                            treeContext: xl !== null ? {
                                id: Xe,
                                overflow: Ze
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, l = Yr(t), l.return = e, e.child = l, It = e, Nt = null)) : t = null, t === null) throw _l(e);
                    return Uo(t) ? e.lanes = 32 : e.lanes = 536870912, null
                }
                var f = a.children;
                return a = a.fallback, i ? (Ol(), i = e.mode, f = ki({
                    mode: "hidden",
                    children: f
                }, i), a = Wl(a, i, l, null), f.return = e, a.return = e, f.sibling = a, e.child = f, a = e.child, a.memoizedState = Fc(l), a.childLanes = Ic(t, o, l), e.memoizedState = Wc, An(null, a)) : (Al(e), Pc(e, f))
            }
            var m = t.memoizedState;
            if (m !== null && (f = m.dehydrated, f !== null)) {
                if (u) e.flags & 256 ? (Al(e), e.flags &= -257, e = to(t, e, l)) : e.memoizedState !== null ? (Ol(), e.child = t.child, e.flags |= 128, e = null) : (Ol(), f = a.fallback, i = e.mode, a = ki({
                    mode: "visible",
                    children: a.children
                }, i), f = Wl(f, i, l, null), f.flags |= 2, a.return = e, f.return = e, a.sibling = f, e.child = a, aa(e, t.child, null, l), a = e.child, a.memoizedState = Fc(l), a.childLanes = Ic(t, o, l), e.memoizedState = Wc, e = An(null, a));
                else if (Al(e), Uo(f)) {
                    if (o = f.nextSibling && f.nextSibling.dataset, o) var z = o.dgst;
                    o = z, a = Error(r(419)), a.stack = "", a.digest = o, hn({
                        value: a,
                        source: null,
                        stack: null
                    }), e = to(t, e, l)
                } else if (Zt || Aa(t, e, l, !1), o = (l & t.childLanes) !== 0, Zt || o) {
                    if (o = Mt, o !== null && (a = Zs(o, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, $l(t, a), pe(o, t, a), Jc;
                    Ro(f) || Wi(), e = to(t, e, l)
                } else Ro(f) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Nt = Re(f.nextSibling), It = e, vt = !0, Sl = null, De = !1, t !== null && kr(e, t), e = Pc(e, a.children), e.flags |= 4096);
                return e
            }
            return i ? (Ol(), f = a.fallback, i = e.mode, m = t.child, z = m.sibling, a = Pe(m, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = m.subtreeFlags & 65011712, z !== null ? f = Pe(z, f) : (f = Wl(f, i, l, null), f.flags |= 2), f.return = e, a.return = e, a.sibling = f, e.child = a, An(null, a), a = e.child, f = t.child.memoizedState, f === null ? f = Fc(l) : (i = f.cachePool, i !== null ? (m = Qt._currentValue, i = i.parent !== m ? {
                parent: m,
                pool: m
            } : i) : i = Kr(), f = {
                baseLanes: f.baseLanes | l,
                cachePool: i
            }), a.memoizedState = f, a.childLanes = Ic(t, o, l), e.memoizedState = Wc, An(t.child, a)) : (Al(e), l = t.child, t = l.sibling, l = Pe(l, {
                mode: "visible",
                children: a.children
            }), l.return = e, l.sibling = null, t !== null && (o = e.deletions, o === null ? (e.deletions = [t], e.flags |= 16) : o.push(t)), e.child = l, e.memoizedState = null, l)
        }

        function Pc(t, e) {
            return e = ki({
                mode: "visible",
                children: e
            }, t.mode), e.return = t, t.child = e
        }

        function ki(t, e) {
            return t = xe(22, t, null, e), t.lanes = 0, t
        }

        function to(t, e, l) {
            return aa(e, t.child, null, l), t = Pc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
        }

        function cd(t, e, l) {
            t.lanes |= e;
            var a = t.alternate;
            a !== null && (a.lanes |= e), hc(t.return, e, l)
        }

        function eo(t, e, l, a, i, u) {
            var o = t.memoizedState;
            o === null ? t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: l,
                tailMode: i,
                treeForkCount: u
            } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = a, o.tail = l, o.tailMode = i, o.treeForkCount = u)
        }

        function od(t, e, l) {
            var a = e.pendingProps,
                i = a.revealOrder,
                u = a.tail;
            a = a.children;
            var o = Lt.current,
                f = (o & 2) !== 0;
            if (f ? (o = o & 1 | 2, e.flags |= 128) : o &= 1, Q(Lt, o), te(t, e, a, l), a = vt ? pn : 0, !f && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
                if (t.tag === 13) t.memoizedState !== null && cd(t, l, e);
                else if (t.tag === 19) cd(t, l, e);
                else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === e) break t;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            switch (i) {
                case "forwards":
                    for (l = e.child, i = null; l !== null;) t = l.alternate, t !== null && Ci(t) === null && (i = l), l = l.sibling;
                    l = i, l === null ? (i = e.child, e.child = null) : (i = l.sibling, l.sibling = null), eo(e, !1, i, l, u, a);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for (l = null, i = e.child, e.child = null; i !== null;) {
                        if (t = i.alternate, t !== null && Ci(t) === null) {
                            e.child = i;
                            break
                        }
                        t = i.sibling, i.sibling = l, l = i, i = t
                    }
                    eo(e, !0, l, null, u, a);
                    break;
                case "together":
                    eo(e, !1, null, null, void 0, a);
                    break;
                default:
                    e.memoizedState = null
            }
            return e.child
        }

        function il(t, e, l) {
            if (t !== null && (e.dependencies = t.dependencies), Nl |= e.lanes, (l & e.childLanes) === 0)
                if (t !== null) {
                    if (Aa(t, e, l, !1), (l & e.childLanes) === 0) return null
                } else return null;
            if (t !== null && e.child !== t.child) throw Error(r(153));
            if (e.child !== null) {
                for (t = e.child, l = Pe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;) t = t.sibling, l = l.sibling = Pe(t, t.pendingProps), l.return = e;
                l.sibling = null
            }
            return e.child
        }

        function lo(t, e) {
            return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Si(t)))
        }

        function Hh(t, e, l) {
            switch (e.tag) {
                case 3:
                    wt(e, e.stateNode.containerInfo), wl(e, Qt, t.memoizedState.cache), Fl();
                    break;
                case 27:
                case 5:
                    Wt(e);
                    break;
                case 4:
                    wt(e, e.stateNode.containerInfo);
                    break;
                case 10:
                    wl(e, e.type, e.memoizedProps.value);
                    break;
                case 31:
                    if (e.memoizedState !== null) return e.flags |= 128, Ac(e), null;
                    break;
                case 13:
                    var a = e.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ud(t, e, l) : (Al(e), t = il(t, e, l), t !== null ? t.sibling : null);
                    Al(e);
                    break;
                case 19:
                    var i = (t.flags & 128) !== 0;
                    if (a = (l & e.childLanes) !== 0, a || (Aa(t, e, l, !1), a = (l & e.childLanes) !== 0), i) {
                        if (a) return od(t, e, l);
                        e.flags |= 128
                    }
                    if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Q(Lt, Lt.current), a) break;
                    return null;
                case 22:
                    return e.lanes = 0, td(t, e, l, e.pendingProps);
                case 24:
                    wl(e, Qt, t.memoizedState.cache)
            }
            return il(t, e, l)
        }

        function sd(t, e, l) {
            if (t !== null)
                if (t.memoizedProps !== e.pendingProps) Zt = !0;
                else {
                    if (!lo(t, l) && (e.flags & 128) === 0) return Zt = !1, Hh(t, e, l);
                    Zt = (t.flags & 131072) !== 0
                }
            else Zt = !1, vt && (e.flags & 1048576) !== 0 && Lr(e, pn, e.index);
            switch (e.lanes = 0, e.tag) {
                case 16:
                    t: {
                        var a = e.pendingProps;
                        if (t = ea(e.elementType), e.type = t, typeof t == "function") cc(t) ? (a = ia(t, a), e.tag = 1, e = nd(null, e, t, a, l)) : (e.tag = 0, e = $c(null, e, t, a, l));
                        else {
                            if (t != null) {
                                var i = t.$$typeof;
                                if (i === W) {
                                    e.tag = 11, e = Ff(null, e, t, a, l);
                                    break t
                                } else if (i === V) {
                                    e.tag = 14, e = If(null, e, t, a, l);
                                    break t
                                }
                            }
                            throw e = qt(t) || t, Error(r(306, e, ""))
                        }
                    }
                    return e;
                case 0:
                    return $c(t, e, e.type, e.pendingProps, l);
                case 1:
                    return a = e.type, i = ia(a, e.pendingProps), nd(t, e, a, i, l);
                case 3:
                    t: {
                        if (wt(e, e.stateNode.containerInfo), t === null) throw Error(r(387));a = e.pendingProps;
                        var u = e.memoizedState;i = u.element,
                        _c(t, e),
                        _n(e, a, null, l);
                        var o = e.memoizedState;
                        if (a = o.cache, wl(e, Qt, a), a !== u.cache && gc(e, [Qt], l, !0), Sn(), a = o.element, u.isDehydrated)
                            if (u = {
                                    element: a,
                                    isDehydrated: !1,
                                    cache: o.cache
                                }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                                e = id(t, e, a, l);
                                break t
                            } else if (a !== i) {
                            i = Ce(Error(r(424)), e), hn(i), e = id(t, e, a, l);
                            break t
                        } else
                            for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Nt = Re(t.firstChild), It = e, vt = !0, Sl = null, De = !0, l = Pr(e, null, a, l), e.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling;
                        else {
                            if (Fl(), a === i) {
                                e = il(t, e, l);
                                break t
                            }
                            te(t, e, a, l)
                        }
                        e = e.child
                    }
                    return e;
                case 26:
                    return Li(t, e), t === null ? (l = xm(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : vt || (l = e.type, t = e.pendingProps, a = au(nt.current).createElement(l), a[Ft] = e, a[oe] = t, ee(a, l, t), Jt(a), e.stateNode = a) : e.memoizedState = xm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
                case 27:
                    return Wt(e), t === null && vt && (a = e.stateNode = vm(e.type, e.pendingProps, nt.current), It = e, De = !0, i = Nt, Hl(e.type) ? (Ho = i, Nt = Re(a.firstChild)) : Nt = i), te(t, e, e.pendingProps.children, l), Li(t, e), t === null && (e.flags |= 4194304), e.child;
                case 5:
                    return t === null && vt && ((i = a = Nt) && (a = dg(a, e.type, e.pendingProps, De), a !== null ? (e.stateNode = a, It = e, Nt = Re(a.firstChild), De = !1, i = !0) : i = !1), i || _l(e)), Wt(e), i = e.type, u = e.pendingProps, o = t !== null ? t.memoizedProps : null, a = u.children, No(i, u) ? a = null : o !== null && No(i, o) && (e.flags |= 32), e.memoizedState !== null && (i = Cc(t, e, Ah, null, null, l), Gn._currentValue = i), Li(t, e), te(t, e, a, l), e.child;
                case 6:
                    return t === null && vt && ((t = l = Nt) && (l = mg(l, e.pendingProps, De), l !== null ? (e.stateNode = l, It = e, Nt = null, t = !0) : t = !1), t || _l(e)), null;
                case 13:
                    return ud(t, e, l);
                case 4:
                    return wt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = aa(e, null, a, l) : te(t, e, a, l), e.child;
                case 11:
                    return Ff(t, e, e.type, e.pendingProps, l);
                case 7:
                    return te(t, e, e.pendingProps, l), e.child;
                case 8:
                    return te(t, e, e.pendingProps.children, l), e.child;
                case 12:
                    return te(t, e, e.pendingProps.children, l), e.child;
                case 10:
                    return a = e.pendingProps, wl(e, e.type, a.value), te(t, e, a.children, l), e.child;
                case 9:
                    return i = e.type._context, a = e.pendingProps.children, Pl(e), i = Pt(i), a = a(i), e.flags |= 1, te(t, e, a, l), e.child;
                case 14:
                    return If(t, e, e.type, e.pendingProps, l);
                case 15:
                    return Pf(t, e, e.type, e.pendingProps, l);
                case 19:
                    return od(t, e, l);
                case 31:
                    return Uh(t, e, l);
                case 22:
                    return td(t, e, l, e.pendingProps);
                case 24:
                    return Pl(e), a = Pt(Qt), t === null ? (i = bc(), i === null && (i = Mt, u = vc(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), e.memoizedState = {
                        parent: a,
                        cache: i
                    }, Sc(e), wl(e, Qt, i)) : ((t.lanes & l) !== 0 && (_c(t, e), _n(e, null, null, l), Sn()), i = t.memoizedState, u = e.memoizedState, i.parent !== a ? (i = {
                        parent: a,
                        cache: a
                    }, e.memoizedState = i, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = i), wl(e, Qt, a)) : (a = u.cache, wl(e, Qt, a), a !== i.cache && gc(e, [Qt], l, !0))), te(t, e, e.pendingProps.children, l), e.child;
                case 29:
                    throw e.pendingProps
            }
            throw Error(r(156, e.tag))
        }

        function ul(t) {
            t.flags |= 4
        }

        function ao(t, e, l, a, i) {
            if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
                if (t.flags |= 16777216, (i & 335544128) === i)
                    if (t.stateNode.complete) t.flags |= 8192;
                    else if (Hd()) t.flags |= 8192;
                else throw la = Ei, xc
            } else t.flags &= -16777217
        }

        function rd(t, e) {
            if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
            else if (t.flags |= 16777216, !Em(e))
                if (Hd()) t.flags |= 8192;
                else throw la = Ei, xc
        }

        function Gi(t, e) {
            e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Gs() : 536870912, t.lanes |= e, qa |= e)
        }

        function On(t, e) {
            if (!vt) switch (t.tailMode) {
                case "hidden":
                    e = t.tail;
                    for (var l = null; e !== null;) e.alternate !== null && (l = e), e = e.sibling;
                    l === null ? t.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = t.tail;
                    for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
                    a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
        }

        function Dt(t) {
            var e = t.alternate !== null && t.alternate.child === t.child,
                l = 0,
                a = 0;
            if (e)
                for (var i = t.child; i !== null;) l |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = t, i = i.sibling;
            else
                for (i = t.child; i !== null;) l |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = t, i = i.sibling;
            return t.subtreeFlags |= a, t.childLanes = l, e
        }

        function Bh(t, e, l) {
            var a = e.pendingProps;
            switch (fc(e), e.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Dt(e), null;
                case 1:
                    return Dt(e), null;
                case 3:
                    return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ll(Qt), _t(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (za(e) ? ul(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, mc())), Dt(e), null;
                case 26:
                    var i = e.type,
                        u = e.memoizedState;
                    return t === null ? (ul(e), u !== null ? (Dt(e), rd(e, u)) : (Dt(e), ao(e, i, null, a, l))) : u ? u !== t.memoizedState ? (ul(e), Dt(e), rd(e, u)) : (Dt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ul(e), Dt(e), ao(e, i, t, a, l)), null;
                case 27:
                    if (He(e), l = nt.current, i = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ul(e);
                    else {
                        if (!a) {
                            if (e.stateNode === null) throw Error(r(166));
                            return Dt(e), null
                        }
                        t = Z.current, za(e) ? Gr(e) : (t = vm(i, a, l), e.stateNode = t, ul(e))
                    }
                    return Dt(e), null;
                case 5:
                    if (He(e), i = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ul(e);
                    else {
                        if (!a) {
                            if (e.stateNode === null) throw Error(r(166));
                            return Dt(e), null
                        }
                        if (u = Z.current, za(e)) Gr(e);
                        else {
                            var o = au(nt.current);
                            switch (u) {
                                case 1:
                                    u = o.createElementNS("http://www.w3.org/2000/svg", i);
                                    break;
                                case 2:
                                    u = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                    break;
                                default:
                                    switch (i) {
                                        case "svg":
                                            u = o.createElementNS("http://www.w3.org/2000/svg", i);
                                            break;
                                        case "math":
                                            u = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                            break;
                                        case "script":
                                            u = o.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                            break;
                                        case "select":
                                            u = typeof a.is == "string" ? o.createElement("select", {
                                                is: a.is
                                            }) : o.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                                            break;
                                        default:
                                            u = typeof a.is == "string" ? o.createElement(i, {
                                                is: a.is
                                            }) : o.createElement(i)
                                    }
                            }
                            u[Ft] = e, u[oe] = a;
                            t: for (o = e.child; o !== null;) {
                                if (o.tag === 5 || o.tag === 6) u.appendChild(o.stateNode);
                                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                                    o.child.return = o, o = o.child;
                                    continue
                                }
                                if (o === e) break t;
                                for (; o.sibling === null;) {
                                    if (o.return === null || o.return === e) break t;
                                    o = o.return
                                }
                                o.sibling.return = o.return, o = o.sibling
                            }
                            e.stateNode = u;
                            t: switch (ee(u, i, a), i) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a = !!a.autoFocus;
                                    break t;
                                case "img":
                                    a = !0;
                                    break t;
                                default:
                                    a = !1
                            }
                            a && ul(e)
                        }
                    }
                    return Dt(e), ao(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
                case 6:
                    if (t && e.stateNode != null) t.memoizedProps !== a && ul(e);
                    else {
                        if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
                        if (t = nt.current, za(e)) {
                            if (t = e.stateNode, l = e.memoizedProps, a = null, i = It, i !== null) switch (i.tag) {
                                case 27:
                                case 5:
                                    a = i.memoizedProps
                            }
                            t[Ft] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || um(t.nodeValue, l)), t || _l(e, !0)
                        } else t = au(t).createTextNode(a), t[Ft] = e, e.stateNode = t
                    }
                    return Dt(e), null;
                case 31:
                    if (l = e.memoizedState, t === null || t.memoizedState !== null) {
                        if (a = za(e), l !== null) {
                            if (t === null) {
                                if (!a) throw Error(r(318));
                                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                                t[Ft] = e
                            } else Fl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                            Dt(e), t = !1
                        } else l = mc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
                        if (!t) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
                        if ((e.flags & 128) !== 0) throw Error(r(558))
                    }
                    return Dt(e), null;
                case 13:
                    if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                        if (i = za(e), a !== null && a.dehydrated !== null) {
                            if (t === null) {
                                if (!i) throw Error(r(318));
                                if (i = e.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(r(317));
                                i[Ft] = e
                            } else Fl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                            Dt(e), i = !1
                        } else i = mc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = i), i = !0;
                        if (!i) return e.flags & 256 ? (_e(e), e) : (_e(e), null)
                    }
                    return _e(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Gi(e, e.updateQueue), Dt(e), null);
                case 4:
                    return _t(), t === null && zo(e.stateNode.containerInfo), Dt(e), null;
                case 10:
                    return ll(e.type), Dt(e), null;
                case 19:
                    if (D(Lt), a = e.memoizedState, a === null) return Dt(e), null;
                    if (i = (e.flags & 128) !== 0, u = a.rendering, u === null)
                        if (i) On(a, !1);
                        else {
                            if (Bt !== 0 || t !== null && (t.flags & 128) !== 0)
                                for (t = e.child; t !== null;) {
                                    if (u = Ci(t), u !== null) {
                                        for (e.flags |= 128, On(a, !1), t = u.updateQueue, e.updateQueue = t, Gi(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;) Br(l, t), l = l.sibling;
                                        return Q(Lt, Lt.current & 1 | 2), vt && tl(e, a.treeForkCount), e.child
                                    }
                                    t = t.sibling
                                }
                            a.tail !== null && ge() > Ki && (e.flags |= 128, i = !0, On(a, !1), e.lanes = 4194304)
                        }
                    else {
                        if (!i)
                            if (t = Ci(u), t !== null) {
                                if (e.flags |= 128, i = !0, t = t.updateQueue, e.updateQueue = t, Gi(e, t), On(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !vt) return Dt(e), null
                            } else 2 * ge() - a.renderingStartTime > Ki && l !== 536870912 && (e.flags |= 128, i = !0, On(a, !1), e.lanes = 4194304);
                        a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u)
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ge(), t.sibling = null, l = Lt.current, Q(Lt, i ? l & 1 | 2 : l & 1), vt && tl(e, a.treeForkCount), t) : (Dt(e), null);
                case 22:
                case 23:
                    return _e(e), zc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Dt(e), l = e.updateQueue, l !== null && Gi(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && D(ta), null;
                case 24:
                    return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), ll(Qt), Dt(e), null;
                case 25:
                    return null;
                case 30:
                    return null
            }
            throw Error(r(156, e.tag))
        }

        function Yh(t, e) {
            switch (fc(e), e.tag) {
                case 1:
                    return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 3:
                    return ll(Qt), _t(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
                case 26:
                case 27:
                case 5:
                    return He(e), null;
                case 31:
                    if (e.memoizedState !== null) {
                        if (_e(e), e.alternate === null) throw Error(r(340));
                        Fl()
                    }
                    return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 13:
                    if (_e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                        if (e.alternate === null) throw Error(r(340));
                        Fl()
                    }
                    return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 19:
                    return D(Lt), null;
                case 4:
                    return _t(), null;
                case 10:
                    return ll(e.type), null;
                case 22:
                case 23:
                    return _e(e), zc(), t !== null && D(ta), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 24:
                    return ll(Qt), null;
                case 25:
                    return null;
                default:
                    return null
            }
        }

        function fd(t, e) {
            switch (fc(e), e.tag) {
                case 3:
                    ll(Qt), _t();
                    break;
                case 26:
                case 27:
                case 5:
                    He(e);
                    break;
                case 4:
                    _t();
                    break;
                case 31:
                    e.memoizedState !== null && _e(e);
                    break;
                case 13:
                    _e(e);
                    break;
                case 19:
                    D(Lt);
                    break;
                case 10:
                    ll(e.type);
                    break;
                case 22:
                case 23:
                    _e(e), zc(), t !== null && D(ta);
                    break;
                case 24:
                    ll(Qt)
            }
        }

        function Cn(t, e) {
            try {
                var l = e.updateQueue,
                    a = l !== null ? l.lastEffect : null;
                if (a !== null) {
                    var i = a.next;
                    l = i;
                    do {
                        if ((l.tag & t) === t) {
                            a = void 0;
                            var u = l.create,
                                o = l.inst;
                            a = u(), o.destroy = a
                        }
                        l = l.next
                    } while (l !== i)
                }
            } catch (f) {
                Et(e, e.return, f)
            }
        }

        function Cl(t, e, l) {
            try {
                var a = e.updateQueue,
                    i = a !== null ? a.lastEffect : null;
                if (i !== null) {
                    var u = i.next;
                    a = u;
                    do {
                        if ((a.tag & t) === t) {
                            var o = a.inst,
                                f = o.destroy;
                            if (f !== void 0) {
                                o.destroy = void 0, i = e;
                                var m = l,
                                    z = f;
                                try {
                                    z()
                                } catch (N) {
                                    Et(i, m, N)
                                }
                            }
                        }
                        a = a.next
                    } while (a !== u)
                }
            } catch (N) {
                Et(e, e.return, N)
            }
        }

        function dd(t) {
            var e = t.updateQueue;
            if (e !== null) {
                var l = t.stateNode;
                try {
                    ef(e, l)
                } catch (a) {
                    Et(t, t.return, a)
                }
            }
        }

        function md(t, e, l) {
            l.props = ia(t.type, t.memoizedProps), l.state = t.memoizedState;
            try {
                l.componentWillUnmount()
            } catch (a) {
                Et(t, e, a)
            }
        }

        function Mn(t, e) {
            try {
                var l = t.ref;
                if (l !== null) {
                    switch (t.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var a = t.stateNode;
                            break;
                        case 30:
                            a = t.stateNode;
                            break;
                        default:
                            a = t.stateNode
                    }
                    typeof l == "function" ? t.refCleanup = l(a) : l.current = a
                }
            } catch (i) {
                Et(t, e, i)
            }
        }

        function Ve(t, e) {
            var l = t.ref,
                a = t.refCleanup;
            if (l !== null)
                if (typeof a == "function") try {
                    a()
                } catch (i) {
                    Et(t, e, i)
                } finally {
                    t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
                } else if (typeof l == "function") try {
                    l(null)
                } catch (i) {
                    Et(t, e, i)
                } else l.current = null
        }

        function pd(t) {
            var e = t.type,
                l = t.memoizedProps,
                a = t.stateNode;
            try {
                t: switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l.autoFocus && a.focus();
                        break t;
                    case "img":
                        l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
                }
            }
            catch (i) {
                Et(t, t.return, i)
            }
        }

        function no(t, e, l) {
            try {
                var a = t.stateNode;
                ug(a, t.type, l, e), a[oe] = e
            } catch (i) {
                Et(t, t.return, i)
            }
        }

        function hd(t) {
            return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hl(t.type) || t.tag === 4
        }

        function io(t) {
            t: for (;;) {
                for (; t.sibling === null;) {
                    if (t.return === null || hd(t.return)) return null;
                    t = t.return
                }
                for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                    if (t.tag === 27 && Hl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                    t.child.return = t, t = t.child
                }
                if (!(t.flags & 2)) return t.stateNode
            }
        }

        function uo(t, e, l) {
            var a = t.tag;
            if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Fe));
            else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
                for (uo(t, e, l), t = t.sibling; t !== null;) uo(t, e, l), t = t.sibling
        }

        function Qi(t, e, l) {
            var a = t.tag;
            if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
            else if (a !== 4 && (a === 27 && Hl(t.type) && (l = t.stateNode), t = t.child, t !== null))
                for (Qi(t, e, l), t = t.sibling; t !== null;) Qi(t, e, l), t = t.sibling
        }

        function gd(t) {
            var e = t.stateNode,
                l = t.memoizedProps;
            try {
                for (var a = t.type, i = e.attributes; i.length;) e.removeAttributeNode(i[0]);
                ee(e, a, l), e[Ft] = t, e[oe] = l
            } catch (u) {
                Et(t, t.return, u)
            }
        }
        var cl = !1,
            Vt = !1,
            co = !1,
            vd = typeof WeakSet == "function" ? WeakSet : Set,
            $t = null;

        function qh(t, e) {
            if (t = t.containerInfo, Co = ru, t = Or(t), tc(t)) {
                if ("selectionStart" in t) var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
                else t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var i = a.anchorOffset,
                            u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType, u.nodeType
                        } catch {
                            l = null;
                            break t
                        }
                        var o = 0,
                            f = -1,
                            m = -1,
                            z = 0,
                            N = 0,
                            B = t,
                            A = null;
                        e: for (;;) {
                            for (var C; B !== l || i !== 0 && B.nodeType !== 3 || (f = o + i), B !== u || a !== 0 && B.nodeType !== 3 || (m = o + a), B.nodeType === 3 && (o += B.nodeValue.length), (C = B.firstChild) !== null;) A = B, B = C;
                            for (;;) {
                                if (B === t) break e;
                                if (A === l && ++z === i && (f = o), A === u && ++N === a && (m = o), (C = B.nextSibling) !== null) break;
                                B = A, A = B.parentNode
                            }
                            B = C
                        }
                        l = f === -1 || m === -1 ? null : {
                            start: f,
                            end: m
                        }
                    } else l = null
                }
                l = l || {
                    start: 0,
                    end: 0
                }
            } else l = null;
            for (Mo = {
                    focusedElem: t,
                    selectionRange: l
                }, ru = !1, $t = e; $t !== null;)
                if (e = $t, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, $t = t;
                else
                    for (; $t !== null;) {
                        switch (e = $t, u = e.alternate, t = e.flags, e.tag) {
                            case 0:
                                if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                                    for (l = 0; l < t.length; l++) i = t[l], i.ref.impl = i.nextImpl;
                                break;
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if ((t & 1024) !== 0 && u !== null) {
                                    t = void 0, l = e, i = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                                    try {
                                        var K = ia(l.type, i);
                                        t = a.getSnapshotBeforeUpdate(K, u), a.__reactInternalSnapshotBeforeUpdate = t
                                    } catch (tt) {
                                        Et(l, l.return, tt)
                                    }
                                }
                                break;
                            case 3:
                                if ((t & 1024) !== 0) {
                                    if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) jo(t);
                                    else if (l === 1) switch (t.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            jo(t);
                                            break;
                                        default:
                                            t.textContent = ""
                                    }
                                }
                                break;
                            case 5:
                            case 26:
                            case 27:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                if ((t & 1024) !== 0) throw Error(r(163))
                        }
                        if (t = e.sibling, t !== null) {
                            t.return = e.return, $t = t;
                            break
                        }
                        $t = e.return
                    }
        }

        function yd(t, e, l) {
            var a = l.flags;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    sl(t, l), a & 4 && Cn(5, l);
                    break;
                case 1:
                    if (sl(t, l), a & 4)
                        if (t = l.stateNode, e === null) try {
                            t.componentDidMount()
                        } catch (o) {
                            Et(l, l.return, o)
                        } else {
                            var i = ia(l.type, e.memoizedProps);
                            e = e.memoizedState;
                            try {
                                t.componentDidUpdate(i, e, t.__reactInternalSnapshotBeforeUpdate)
                            } catch (o) {
                                Et(l, l.return, o)
                            }
                        }
                    a & 64 && dd(l), a & 512 && Mn(l, l.return);
                    break;
                case 3:
                    if (sl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
                        if (e = null, l.child !== null) switch (l.child.tag) {
                            case 27:
                            case 5:
                                e = l.child.stateNode;
                                break;
                            case 1:
                                e = l.child.stateNode
                        }
                        try {
                            ef(t, e)
                        } catch (o) {
                            Et(l, l.return, o)
                        }
                    }
                    break;
                case 27:
                    e === null && a & 4 && gd(l);
                case 26:
                case 5:
                    sl(t, l), e === null && a & 4 && pd(l), a & 512 && Mn(l, l.return);
                    break;
                case 12:
                    sl(t, l);
                    break;
                case 31:
                    sl(t, l), a & 4 && Sd(t, l);
                    break;
                case 13:
                    sl(t, l), a & 4 && _d(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Jh.bind(null, l), pg(t, l))));
                    break;
                case 22:
                    if (a = l.memoizedState !== null || cl, !a) {
                        e = e !== null && e.memoizedState !== null || Vt, i = cl;
                        var u = Vt;
                        cl = a, (Vt = e) && !u ? rl(t, l, (l.subtreeFlags & 8772) !== 0) : sl(t, l), cl = i, Vt = u
                    }
                    break;
                case 30:
                    break;
                default:
                    sl(t, l)
            }
        }

        function bd(t) {
            var e = t.alternate;
            e !== null && (t.alternate = null, bd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Bu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
        }
        var jt = null,
            re = !1;

        function ol(t, e, l) {
            for (l = l.child; l !== null;) xd(t, e, l), l = l.sibling
        }

        function xd(t, e, l) {
            if (ve && typeof ve.onCommitFiberUnmount == "function") try {
                ve.onCommitFiberUnmount(Pa, l)
            } catch {}
            switch (l.tag) {
                case 26:
                    Vt || Ve(l, e), ol(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Vt || Ve(l, e);
                    var a = jt,
                        i = re;
                    Hl(l.type) && (jt = l.stateNode, re = !1), ol(t, e, l), qn(l.stateNode), jt = a, re = i;
                    break;
                case 5:
                    Vt || Ve(l, e);
                case 6:
                    if (a = jt, i = re, jt = null, ol(t, e, l), jt = a, re = i, jt !== null)
                        if (re) try {
                            (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(l.stateNode)
                        } catch (u) {
                            Et(l, e, u)
                        } else try {
                            jt.removeChild(l.stateNode)
                        } catch (u) {
                            Et(l, e, u)
                        }
                    break;
                case 18:
                    jt !== null && (re ? (t = jt, dm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ka(t)) : dm(jt, l.stateNode));
                    break;
                case 4:
                    a = jt, i = re, jt = l.stateNode.containerInfo, re = !0, ol(t, e, l), jt = a, re = i;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Cl(2, l, e), Vt || Cl(4, l, e), ol(t, e, l);
                    break;
                case 1:
                    Vt || (Ve(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && md(l, e, a)), ol(t, e, l);
                    break;
                case 21:
                    ol(t, e, l);
                    break;
                case 22:
                    Vt = (a = Vt) || l.memoizedState !== null, ol(t, e, l), Vt = a;
                    break;
                default:
                    ol(t, e, l)
            }
        }

        function Sd(t, e) {
            if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
                t = t.dehydrated;
                try {
                    Ka(t)
                } catch (l) {
                    Et(e, e.return, l)
                }
            }
        }

        function _d(t, e) {
            if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
                Ka(t)
            } catch (l) {
                Et(e, e.return, l)
            }
        }

        function Lh(t) {
            switch (t.tag) {
                case 31:
                case 13:
                case 19:
                    var e = t.stateNode;
                    return e === null && (e = t.stateNode = new vd), e;
                case 22:
                    return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new vd), e;
                default:
                    throw Error(r(435, t.tag))
            }
        }

        function Xi(t, e) {
            var l = Lh(t);
            e.forEach(function(a) {
                if (!l.has(a)) {
                    l.add(a);
                    var i = $h.bind(null, t, a);
                    a.then(i, i)
                }
            })
        }

        function fe(t, e) {
            var l = e.deletions;
            if (l !== null)
                for (var a = 0; a < l.length; a++) {
                    var i = l[a],
                        u = t,
                        o = e,
                        f = o;
                    t: for (; f !== null;) {
                        switch (f.tag) {
                            case 27:
                                if (Hl(f.type)) {
                                    jt = f.stateNode, re = !1;
                                    break t
                                }
                                break;
                            case 5:
                                jt = f.stateNode, re = !1;
                                break t;
                            case 3:
                            case 4:
                                jt = f.stateNode.containerInfo, re = !0;
                                break t
                        }
                        f = f.return
                    }
                    if (jt === null) throw Error(r(160));
                    xd(u, o, i), jt = null, re = !1, u = i.alternate, u !== null && (u.return = null), i.return = null
                }
            if (e.subtreeFlags & 13886)
                for (e = e.child; e !== null;) wd(e, t), e = e.sibling
        }
        var Ye = null;

        function wd(t, e) {
            var l = t.alternate,
                a = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    fe(e, t), de(t), a & 4 && (Cl(3, t, t.return), Cn(3, t), Cl(5, t, t.return));
                    break;
                case 1:
                    fe(e, t), de(t), a & 512 && (Vt || l === null || Ve(l, l.return)), a & 64 && cl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                    break;
                case 26:
                    var i = Ye;
                    if (fe(e, t), de(t), a & 512 && (Vt || l === null || Ve(l, l.return)), a & 4) {
                        var u = l !== null ? l.memoizedState : null;
                        if (a = t.memoizedState, l === null)
                            if (a === null)
                                if (t.stateNode === null) {
                                    t: {
                                        a = t.type,
                                        l = t.memoizedProps,
                                        i = i.ownerDocument || i;e: switch (a) {
                                            case "title":
                                                u = i.getElementsByTagName("title")[0], (!u || u[ln] || u[Ft] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(u, i.querySelector("head > title"))), ee(u, a, l), u[Ft] = t, Jt(u), a = u;
                                                break t;
                                            case "link":
                                                var o = wm("link", "href", i).get(a + (l.href || ""));
                                                if (o) {
                                                    for (var f = 0; f < o.length; f++)
                                                        if (u = o[f], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                            o.splice(f, 1);
                                                            break e
                                                        }
                                                }
                                                u = i.createElement(a), ee(u, a, l), i.head.appendChild(u);
                                                break;
                                            case "meta":
                                                if (o = wm("meta", "content", i).get(a + (l.content || ""))) {
                                                    for (f = 0; f < o.length; f++)
                                                        if (u = o[f], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                            o.splice(f, 1);
                                                            break e
                                                        }
                                                }
                                                u = i.createElement(a), ee(u, a, l), i.head.appendChild(u);
                                                break;
                                            default:
                                                throw Error(r(468, a))
                                        }
                                        u[Ft] = t,
                                        Jt(u),
                                        a = u
                                    }
                                    t.stateNode = a
                                }
                        else Tm(i, t.type, t.stateNode);
                        else t.stateNode = _m(i, a, t.memoizedProps);
                        else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Tm(i, t.type, t.stateNode) : _m(i, a, t.memoizedProps)) : a === null && t.stateNode !== null && no(t, t.memoizedProps, l.memoizedProps)
                    }
                    break;
                case 27:
                    fe(e, t), de(t), a & 512 && (Vt || l === null || Ve(l, l.return)), l !== null && a & 4 && no(t, t.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (fe(e, t), de(t), a & 512 && (Vt || l === null || Ve(l, l.return)), t.flags & 32) {
                        i = t.stateNode;
                        try {
                            ga(i, "")
                        } catch (K) {
                            Et(t, t.return, K)
                        }
                    }
                    a & 4 && t.stateNode != null && (i = t.memoizedProps, no(t, i, l !== null ? l.memoizedProps : i)), a & 1024 && (co = !0);
                    break;
                case 6:
                    if (fe(e, t), de(t), a & 4) {
                        if (t.stateNode === null) throw Error(r(162));
                        a = t.memoizedProps, l = t.stateNode;
                        try {
                            l.nodeValue = a
                        } catch (K) {
                            Et(t, t.return, K)
                        }
                    }
                    break;
                case 3:
                    if (uu = null, i = Ye, Ye = nu(e.containerInfo), fe(e, t), Ye = i, de(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ka(e.containerInfo)
                    } catch (K) {
                        Et(t, t.return, K)
                    }
                    co && (co = !1, Td(t));
                    break;
                case 4:
                    a = Ye, Ye = nu(t.stateNode.containerInfo), fe(e, t), de(t), Ye = a;
                    break;
                case 12:
                    fe(e, t), de(t);
                    break;
                case 31:
                    fe(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Xi(t, a)));
                    break;
                case 13:
                    fe(e, t), de(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Vi = ge()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Xi(t, a)));
                    break;
                case 22:
                    i = t.memoizedState !== null;
                    var m = l !== null && l.memoizedState !== null,
                        z = cl,
                        N = Vt;
                    if (cl = z || i, Vt = N || m, fe(e, t), Vt = N, cl = z, de(t), a & 8192) t: for (e = t.stateNode, e._visibility = i ? e._visibility & -2 : e._visibility | 1, i && (l === null || m || cl || Vt || ua(t)), l = null, e = t;;) {
                        if (e.tag === 5 || e.tag === 26) {
                            if (l === null) {
                                m = l = e;
                                try {
                                    if (u = m.stateNode, i) o = u.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                                    else {
                                        f = m.stateNode;
                                        var B = m.memoizedProps.style,
                                            A = B != null && B.hasOwnProperty("display") ? B.display : null;
                                        f.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim()
                                    }
                                } catch (K) {
                                    Et(m, m.return, K)
                                }
                            }
                        } else if (e.tag === 6) {
                            if (l === null) {
                                m = e;
                                try {
                                    m.stateNode.nodeValue = i ? "" : m.memoizedProps
                                } catch (K) {
                                    Et(m, m.return, K)
                                }
                            }
                        } else if (e.tag === 18) {
                            if (l === null) {
                                m = e;
                                try {
                                    var C = m.stateNode;
                                    i ? mm(C, !0) : mm(m.stateNode, !1)
                                } catch (K) {
                                    Et(m, m.return, K)
                                }
                            }
                        } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break t;
                        for (; e.sibling === null;) {
                            if (e.return === null || e.return === t) break t;
                            l === e && (l = null), e = e.return
                        }
                        l === e && (l = null), e.sibling.return = e.return, e = e.sibling
                    }
                    a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Xi(t, l))));
                    break;
                case 19:
                    fe(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Xi(t, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    fe(e, t), de(t)
            }
        }

        function de(t) {
            var e = t.flags;
            if (e & 2) {
                try {
                    for (var l, a = t.return; a !== null;) {
                        if (hd(a)) {
                            l = a;
                            break
                        }
                        a = a.return
                    }
                    if (l == null) throw Error(r(160));
                    switch (l.tag) {
                        case 27:
                            var i = l.stateNode,
                                u = io(t);
                            Qi(t, u, i);
                            break;
                        case 5:
                            var o = l.stateNode;
                            l.flags & 32 && (ga(o, ""), l.flags &= -33);
                            var f = io(t);
                            Qi(t, f, o);
                            break;
                        case 3:
                        case 4:
                            var m = l.stateNode.containerInfo,
                                z = io(t);
                            uo(t, z, m);
                            break;
                        default:
                            throw Error(r(161))
                    }
                } catch (N) {
                    Et(t, t.return, N)
                }
                t.flags &= -3
            }
            e & 4096 && (t.flags &= -4097)
        }

        function Td(t) {
            if (t.subtreeFlags & 1024)
                for (t = t.child; t !== null;) {
                    var e = t;
                    Td(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
                }
        }

        function sl(t, e) {
            if (e.subtreeFlags & 8772)
                for (e = e.child; e !== null;) yd(t, e.alternate, e), e = e.sibling
        }

        function ua(t) {
            for (t = t.child; t !== null;) {
                var e = t;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Cl(4, e, e.return), ua(e);
                        break;
                    case 1:
                        Ve(e, e.return);
                        var l = e.stateNode;
                        typeof l.componentWillUnmount == "function" && md(e, e.return, l), ua(e);
                        break;
                    case 27:
                        qn(e.stateNode);
                    case 26:
                    case 5:
                        Ve(e, e.return), ua(e);
                        break;
                    case 22:
                        e.memoizedState === null && ua(e);
                        break;
                    case 30:
                        ua(e);
                        break;
                    default:
                        ua(e)
                }
                t = t.sibling
            }
        }

        function rl(t, e, l) {
            for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
                var a = e.alternate,
                    i = t,
                    u = e,
                    o = u.flags;
                switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                        rl(i, u, l), Cn(4, u);
                        break;
                    case 1:
                        if (rl(i, u, l), a = u, i = a.stateNode, typeof i.componentDidMount == "function") try {
                            i.componentDidMount()
                        } catch (z) {
                            Et(a, a.return, z)
                        }
                        if (a = u, i = a.updateQueue, i !== null) {
                            var f = a.stateNode;
                            try {
                                var m = i.shared.hiddenCallbacks;
                                if (m !== null)
                                    for (i.shared.hiddenCallbacks = null, i = 0; i < m.length; i++) tf(m[i], f)
                            } catch (z) {
                                Et(a, a.return, z)
                            }
                        }
                        l && o & 64 && dd(u), Mn(u, u.return);
                        break;
                    case 27:
                        gd(u);
                    case 26:
                    case 5:
                        rl(i, u, l), l && a === null && o & 4 && pd(u), Mn(u, u.return);
                        break;
                    case 12:
                        rl(i, u, l);
                        break;
                    case 31:
                        rl(i, u, l), l && o & 4 && Sd(i, u);
                        break;
                    case 13:
                        rl(i, u, l), l && o & 4 && _d(i, u);
                        break;
                    case 22:
                        u.memoizedState === null && rl(i, u, l), Mn(u, u.return);
                        break;
                    case 30:
                        break;
                    default:
                        rl(i, u, l)
                }
                e = e.sibling
            }
        }

        function oo(t, e) {
            var l = null;
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && gn(l))
        }

        function so(t, e) {
            t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gn(t))
        }

        function qe(t, e, l, a) {
            if (e.subtreeFlags & 10256)
                for (e = e.child; e !== null;) Ed(t, e, l, a), e = e.sibling
        }

        function Ed(t, e, l, a) {
            var i = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    qe(t, e, l, a), i & 2048 && Cn(9, e);
                    break;
                case 1:
                    qe(t, e, l, a);
                    break;
                case 3:
                    qe(t, e, l, a), i & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && gn(t)));
                    break;
                case 12:
                    if (i & 2048) {
                        qe(t, e, l, a), t = e.stateNode;
                        try {
                            var u = e.memoizedProps,
                                o = u.id,
                                f = u.onPostCommit;
                            typeof f == "function" && f(o, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                        } catch (m) {
                            Et(e, e.return, m)
                        }
                    } else qe(t, e, l, a);
                    break;
                case 31:
                    qe(t, e, l, a);
                    break;
                case 13:
                    qe(t, e, l, a);
                    break;
                case 23:
                    break;
                case 22:
                    u = e.stateNode, o = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? qe(t, e, l, a) : Nn(t, e) : u._visibility & 2 ? qe(t, e, l, a) : (u._visibility |= 2, Ha(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)), i & 2048 && oo(o, e);
                    break;
                case 24:
                    qe(t, e, l, a), i & 2048 && so(e.alternate, e);
                    break;
                default:
                    qe(t, e, l, a)
            }
        }

        function Ha(t, e, l, a, i) {
            for (i = i && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
                var u = t,
                    o = e,
                    f = l,
                    m = a,
                    z = o.flags;
                switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ha(u, o, f, m, i), Cn(8, o);
                        break;
                    case 23:
                        break;
                    case 22:
                        var N = o.stateNode;
                        o.memoizedState !== null ? N._visibility & 2 ? Ha(u, o, f, m, i) : Nn(u, o) : (N._visibility |= 2, Ha(u, o, f, m, i)), i && z & 2048 && oo(o.alternate, o);
                        break;
                    case 24:
                        Ha(u, o, f, m, i), i && z & 2048 && so(o.alternate, o);
                        break;
                    default:
                        Ha(u, o, f, m, i)
                }
                e = e.sibling
            }
        }

        function Nn(t, e) {
            if (e.subtreeFlags & 10256)
                for (e = e.child; e !== null;) {
                    var l = t,
                        a = e,
                        i = a.flags;
                    switch (a.tag) {
                        case 22:
                            Nn(l, a), i & 2048 && oo(a.alternate, a);
                            break;
                        case 24:
                            Nn(l, a), i & 2048 && so(a.alternate, a);
                            break;
                        default:
                            Nn(l, a)
                    }
                    e = e.sibling
                }
        }
        var Dn = 8192;

        function Ba(t, e, l) {
            if (t.subtreeFlags & Dn)
                for (t = t.child; t !== null;) zd(t, e, l), t = t.sibling
        }

        function zd(t, e, l) {
            switch (t.tag) {
                case 26:
                    Ba(t, e, l), t.flags & Dn && t.memoizedState !== null && zg(l, Ye, t.memoizedState, t.memoizedProps);
                    break;
                case 5:
                    Ba(t, e, l);
                    break;
                case 3:
                case 4:
                    var a = Ye;
                    Ye = nu(t.stateNode.containerInfo), Ba(t, e, l), Ye = a;
                    break;
                case 22:
                    t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Dn, Dn = 16777216, Ba(t, e, l), Dn = a) : Ba(t, e, l));
                    break;
                default:
                    Ba(t, e, l)
            }
        }

        function Ad(t) {
            var e = t.alternate;
            if (e !== null && (t = e.child, t !== null)) {
                e.child = null;
                do e = t.sibling, t.sibling = null, t = e; while (t !== null)
            }
        }

        function jn(t) {
            var e = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (e !== null)
                    for (var l = 0; l < e.length; l++) {
                        var a = e[l];
                        $t = a, Cd(a, t)
                    }
                Ad(t)
            }
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) Od(t), t = t.sibling
        }

        function Od(t) {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    jn(t), t.flags & 2048 && Cl(9, t, t.return);
                    break;
                case 3:
                    jn(t);
                    break;
                case 12:
                    jn(t);
                    break;
                case 22:
                    var e = t.stateNode;
                    t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Zi(t)) : jn(t);
                    break;
                default:
                    jn(t)
            }
        }

        function Zi(t) {
            var e = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (e !== null)
                    for (var l = 0; l < e.length; l++) {
                        var a = e[l];
                        $t = a, Cd(a, t)
                    }
                Ad(t)
            }
            for (t = t.child; t !== null;) {
                switch (e = t, e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Cl(8, e, e.return), Zi(e);
                        break;
                    case 22:
                        l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Zi(e));
                        break;
                    default:
                        Zi(e)
                }
                t = t.sibling
            }
        }

        function Cd(t, e) {
            for (; $t !== null;) {
                var l = $t;
                switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Cl(8, l, e);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var a = l.memoizedState.cachePool.pool;
                            a != null && a.refCount++
                        }
                        break;
                    case 24:
                        gn(l.memoizedState.cache)
                }
                if (a = l.child, a !== null) a.return = l, $t = a;
                else t: for (l = t; $t !== null;) {
                    a = $t;
                    var i = a.sibling,
                        u = a.return;
                    if (bd(a), a === l) {
                        $t = null;
                        break t
                    }
                    if (i !== null) {
                        i.return = u, $t = i;
                        break t
                    }
                    $t = u
                }
            }
        }
        var kh = {
                getCacheForType: function(t) {
                    var e = Pt(Qt),
                        l = e.data.get(t);
                    return l === void 0 && (l = t(), e.data.set(t, l)), l
                },
                cacheSignal: function() {
                    return Pt(Qt).controller.signal
                }
            },
            Gh = typeof WeakMap == "function" ? WeakMap : Map,
            St = 0,
            Mt = null,
            dt = null,
            ht = 0,
            Tt = 0,
            we = null,
            Ml = !1,
            Ya = !1,
            ro = !1,
            fl = 0,
            Bt = 0,
            Nl = 0,
            ca = 0,
            fo = 0,
            Te = 0,
            qa = 0,
            Rn = null,
            me = null,
            mo = !1,
            Vi = 0,
            Md = 0,
            Ki = 1 / 0,
            Ji = null,
            Dl = null,
            Kt = 0,
            jl = null,
            La = null,
            dl = 0,
            po = 0,
            ho = null,
            Nd = null,
            Un = 0,
            go = null;

        function Ee() {
            return (St & 2) !== 0 && ht !== 0 ? ht & -ht : M.T !== null ? _o() : Vs()
        }

        function Dd() {
            if (Te === 0)
                if ((ht & 536870912) === 0 || vt) {
                    var t = li;
                    li <<= 1, (li & 3932160) === 0 && (li = 262144), Te = t
                } else Te = 536870912;
            return t = Se.current, t !== null && (t.flags |= 32), Te
        }

        function pe(t, e, l) {
            (t === Mt && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) && (ka(t, 0), Rl(t, ht, Te, !1)), en(t, l), ((St & 2) === 0 || t !== Mt) && (t === Mt && ((St & 2) === 0 && (ca |= l), Bt === 4 && Rl(t, ht, Te, !1)), Ke(t))
        }

        function jd(t, e, l) {
            if ((St & 6) !== 0) throw Error(r(327));
            var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || tn(t, e),
                i = a ? Zh(t, e) : yo(t, e, !0),
                u = a;
            do {
                if (i === 0) {
                    Ya && !a && Rl(t, e, 0, !1);
                    break
                } else {
                    if (l = t.current.alternate, u && !Qh(l)) {
                        i = yo(t, e, !1), u = !1;
                        continue
                    }
                    if (i === 2) {
                        if (u = e, t.errorRecoveryDisabledLanes & u) var o = 0;
                        else o = t.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
                        if (o !== 0) {
                            e = o;
                            t: {
                                var f = t;i = Rn;
                                var m = f.current.memoizedState.isDehydrated;
                                if (m && (ka(f, o).flags |= 256), o = yo(f, o, !1), o !== 2) {
                                    if (ro && !m) {
                                        f.errorRecoveryDisabledLanes |= u, ca |= u, i = 4;
                                        break t
                                    }
                                    u = me, me = i, u !== null && (me === null ? me = u : me.push.apply(me, u))
                                }
                                i = o
                            }
                            if (u = !1, i !== 2) continue
                        }
                    }
                    if (i === 1) {
                        ka(t, 0), Rl(t, e, 0, !0);
                        break
                    }
                    t: {
                        switch (a = t, u = i, u) {
                            case 0:
                            case 1:
                                throw Error(r(345));
                            case 4:
                                if ((e & 4194048) !== e) break;
                            case 6:
                                Rl(a, e, Te, !Ml);
                                break t;
                            case 2:
                                me = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(r(329))
                        }
                        if ((e & 62914560) === e && (i = Vi + 300 - ge(), 10 < i)) {
                            if (Rl(a, e, Te, !Ml), ni(a, 0, !0) !== 0) break t;
                            dl = e, a.timeoutHandle = rm(Rd.bind(null, a, l, me, Ji, mo, e, Te, ca, qa, Ml, u, "Throttled", -0, 0), i);
                            break t
                        }
                        Rd(a, l, me, Ji, mo, e, Te, ca, qa, Ml, u, null, -0, 0)
                    }
                }
                break
            } while (!0);
            Ke(t)
        }

        function Rd(t, e, l, a, i, u, o, f, m, z, N, B, A, C) {
            if (t.timeoutHandle = -1, B = e.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
                B = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: Fe
                }, zd(e, u, B);
                var K = (u & 62914560) === u ? Vi - ge() : (u & 4194048) === u ? Md - ge() : 0;
                if (K = Ag(B, K), K !== null) {
                    dl = u, t.cancelPendingCommit = K(Gd.bind(null, t, e, u, l, a, i, o, f, m, N, B, null, A, C)), Rl(t, u, o, !z);
                    return
                }
            }
            Gd(t, e, u, l, a, i, o, f, m)
        }

        function Qh(t) {
            for (var e = t;;) {
                var l = e.tag;
                if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
                    for (var a = 0; a < l.length; a++) {
                        var i = l[a],
                            u = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!be(u(), i)) return !1
                        } catch {
                            return !1
                        }
                    }
                if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
                else {
                    if (e === t) break;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) return !0;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
            }
            return !0
        }

        function Rl(t, e, l, a) {
            e &= ~fo, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
            for (var i = e; 0 < i;) {
                var u = 31 - ye(i),
                    o = 1 << u;
                a[u] = -1, i &= ~o
            }
            l !== 0 && Qs(t, l, e)
        }

        function $i() {
            return (St & 6) === 0 ? (Hn(0), !1) : !0
        }

        function vo() {
            if (dt !== null) {
                if (Tt === 0) var t = dt.return;
                else t = dt, el = Il = null, Dc(t), Na = null, yn = 0, t = dt;
                for (; t !== null;) fd(t.alternate, t), t = t.return;
                dt = null
            }
        }

        function ka(t, e) {
            var l = t.timeoutHandle;
            l !== -1 && (t.timeoutHandle = -1, sg(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), dl = 0, vo(), Mt = t, dt = l = Pe(t.current, null), ht = e, Tt = 0, we = null, Ml = !1, Ya = tn(t, e), ro = !1, qa = Te = fo = ca = Nl = Bt = 0, me = Rn = null, mo = !1, (e & 8) !== 0 && (e |= e & 32);
            var a = t.entangledLanes;
            if (a !== 0)
                for (t = t.entanglements, a &= e; 0 < a;) {
                    var i = 31 - ye(a),
                        u = 1 << i;
                    e |= t[i], a &= ~u
                }
            return fl = e, gi(), l
        }

        function Ud(t, e) {
            ut = null, M.H = zn, e === Ma || e === Ti ? (e = Wr(), Tt = 3) : e === xc ? (e = Wr(), Tt = 4) : Tt = e === Jc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, we = e, dt === null && (Bt = 1, Yi(t, Ce(e, t.current)))
        }

        function Hd() {
            var t = Se.current;
            return t === null ? !0 : (ht & 4194048) === ht ? je === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? t === je : !1
        }

        function Bd() {
            var t = M.H;
            return M.H = zn, t === null ? zn : t
        }

        function Yd() {
            var t = M.A;
            return M.A = kh, t
        }

        function Wi() {
            Bt = 4, Ml || (ht & 4194048) !== ht && Se.current !== null || (Ya = !0), (Nl & 134217727) === 0 && (ca & 134217727) === 0 || Mt === null || Rl(Mt, ht, Te, !1)
        }

        function yo(t, e, l) {
            var a = St;
            St |= 2;
            var i = Bd(),
                u = Yd();
            (Mt !== t || ht !== e) && (Ji = null, ka(t, e)), e = !1;
            var o = Bt;
            t: do try {
                    if (Tt !== 0 && dt !== null) {
                        var f = dt,
                            m = we;
                        switch (Tt) {
                            case 8:
                                vo(), o = 6;
                                break t;
                            case 3:
                            case 2:
                            case 9:
                            case 6:
                                Se.current === null && (e = !0);
                                var z = Tt;
                                if (Tt = 0, we = null, Ga(t, f, m, z), l && Ya) {
                                    o = 0;
                                    break t
                                }
                                break;
                            default:
                                z = Tt, Tt = 0, we = null, Ga(t, f, m, z)
                        }
                    }
                    Xh(), o = Bt;
                    break
                } catch (N) {
                    Ud(t, N)
                }
                while (!0);
                return e && t.shellSuspendCounter++, el = Il = null, St = a, M.H = i, M.A = u, dt === null && (Mt = null, ht = 0, gi()), o
        }

        function Xh() {
            for (; dt !== null;) qd(dt)
        }

        function Zh(t, e) {
            var l = St;
            St |= 2;
            var a = Bd(),
                i = Yd();
            Mt !== t || ht !== e ? (Ji = null, Ki = ge() + 500, ka(t, e)) : Ya = tn(t, e);
            t: do try {
                    if (Tt !== 0 && dt !== null) {
                        e = dt;
                        var u = we;
                        e: switch (Tt) {
                            case 1:
                                Tt = 0, we = null, Ga(t, e, u, 1);
                                break;
                            case 2:
                            case 9:
                                if (Jr(u)) {
                                    Tt = 0, we = null, Ld(e);
                                    break
                                }
                                e = function() {
                                    Tt !== 2 && Tt !== 9 || Mt !== t || (Tt = 7), Ke(t)
                                }, u.then(e, e);
                                break t;
                            case 3:
                                Tt = 7;
                                break t;
                            case 4:
                                Tt = 5;
                                break t;
                            case 7:
                                Jr(u) ? (Tt = 0, we = null, Ld(e)) : (Tt = 0, we = null, Ga(t, e, u, 7));
                                break;
                            case 5:
                                var o = null;
                                switch (dt.tag) {
                                    case 26:
                                        o = dt.memoizedState;
                                    case 5:
                                    case 27:
                                        var f = dt;
                                        if (o ? Em(o) : f.stateNode.complete) {
                                            Tt = 0, we = null;
                                            var m = f.sibling;
                                            if (m !== null) dt = m;
                                            else {
                                                var z = f.return;
                                                z !== null ? (dt = z, Fi(z)) : dt = null
                                            }
                                            break e
                                        }
                                }
                                Tt = 0, we = null, Ga(t, e, u, 5);
                                break;
                            case 6:
                                Tt = 0, we = null, Ga(t, e, u, 6);
                                break;
                            case 8:
                                vo(), Bt = 6;
                                break t;
                            default:
                                throw Error(r(462))
                        }
                    }
                    Vh();
                    break
                } catch (N) {
                    Ud(t, N)
                }
                while (!0);
                return el = Il = null, M.H = a, M.A = i, St = l, dt !== null ? 0 : (Mt = null, ht = 0, gi(), Bt)
        }

        function Vh() {
            for (; dt !== null && !sa();) qd(dt)
        }

        function qd(t) {
            var e = sd(t.alternate, t, fl);
            t.memoizedProps = t.pendingProps, e === null ? Fi(t) : dt = e
        }

        function Ld(t) {
            var e = t,
                l = e.alternate;
            switch (e.tag) {
                case 15:
                case 0:
                    e = ad(l, e, e.pendingProps, e.type, void 0, ht);
                    break;
                case 11:
                    e = ad(l, e, e.pendingProps, e.type.render, e.ref, ht);
                    break;
                case 5:
                    Dc(e);
                default:
                    fd(l, e), e = dt = Br(e, fl), e = sd(l, e, fl)
            }
            t.memoizedProps = t.pendingProps, e === null ? Fi(t) : dt = e
        }

        function Ga(t, e, l, a) {
            el = Il = null, Dc(e), Na = null, yn = 0;
            var i = e.return;
            try {
                if (Rh(t, i, e, l, ht)) {
                    Bt = 1, Yi(t, Ce(l, t.current)), dt = null;
                    return
                }
            } catch (u) {
                if (i !== null) throw dt = i, u;
                Bt = 1, Yi(t, Ce(l, t.current)), dt = null;
                return
            }
            e.flags & 32768 ? (vt || a === 1 ? t = !0 : Ya || (ht & 536870912) !== 0 ? t = !1 : (Ml = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), kd(e, t)) : Fi(e)
        }

        function Fi(t) {
            var e = t;
            do {
                if ((e.flags & 32768) !== 0) {
                    kd(e, Ml);
                    return
                }
                t = e.return;
                var l = Bh(e.alternate, e, fl);
                if (l !== null) {
                    dt = l;
                    return
                }
                if (e = e.sibling, e !== null) {
                    dt = e;
                    return
                }
                dt = e = t
            } while (e !== null);
            Bt === 0 && (Bt = 5)
        }

        function kd(t, e) {
            do {
                var l = Yh(t.alternate, t);
                if (l !== null) {
                    l.flags &= 32767, dt = l;
                    return
                }
                if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
                    dt = t;
                    return
                }
                dt = t = l
            } while (t !== null);
            Bt = 6, dt = null
        }

        function Gd(t, e, l, a, i, u, o, f, m) {
            t.cancelPendingCommit = null;
            do Ii(); while (Kt !== 0);
            if ((St & 6) !== 0) throw Error(r(327));
            if (e !== null) {
                if (e === t.current) throw Error(r(177));
                if (u = e.lanes | e.childLanes, u |= ic, E0(t, l, u, o, f, m), t === Mt && (dt = Mt = null, ht = 0), La = e, jl = t, dl = l, po = u, ho = i, Nd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Wh(ti, function() {
                        return Kd(), null
                    })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
                    a = M.T, M.T = null, i = L.p, L.p = 2, o = St, St |= 4;
                    try {
                        qh(t, e, l)
                    } finally {
                        St = o, L.p = i, M.T = a
                    }
                }
                Kt = 1, Qd(), Xd(), Zd()
            }
        }

        function Qd() {
            if (Kt === 1) {
                Kt = 0;
                var t = jl,
                    e = La,
                    l = (e.flags & 13878) !== 0;
                if ((e.subtreeFlags & 13878) !== 0 || l) {
                    l = M.T, M.T = null;
                    var a = L.p;
                    L.p = 2;
                    var i = St;
                    St |= 4;
                    try {
                        wd(e, t);
                        var u = Mo,
                            o = Or(t.containerInfo),
                            f = u.focusedElem,
                            m = u.selectionRange;
                        if (o !== f && f && f.ownerDocument && Ar(f.ownerDocument.documentElement, f)) {
                            if (m !== null && tc(f)) {
                                var z = m.start,
                                    N = m.end;
                                if (N === void 0 && (N = z), "selectionStart" in f) f.selectionStart = z, f.selectionEnd = Math.min(N, f.value.length);
                                else {
                                    var B = f.ownerDocument || document,
                                        A = B && B.defaultView || window;
                                    if (A.getSelection) {
                                        var C = A.getSelection(),
                                            K = f.textContent.length,
                                            tt = Math.min(m.start, K),
                                            Ct = m.end === void 0 ? tt : Math.min(m.end, K);
                                        !C.extend && tt > Ct && (o = Ct, Ct = tt, tt = o);
                                        var S = zr(f, tt),
                                            x = zr(f, Ct);
                                        if (S && x && (C.rangeCount !== 1 || C.anchorNode !== S.node || C.anchorOffset !== S.offset || C.focusNode !== x.node || C.focusOffset !== x.offset)) {
                                            var E = B.createRange();
                                            E.setStart(S.node, S.offset), C.removeAllRanges(), tt > Ct ? (C.addRange(E), C.extend(x.node, x.offset)) : (E.setEnd(x.node, x.offset), C.addRange(E))
                                        }
                                    }
                                }
                            }
                            for (B = [], C = f; C = C.parentNode;) C.nodeType === 1 && B.push({
                                element: C,
                                left: C.scrollLeft,
                                top: C.scrollTop
                            });
                            for (typeof f.focus == "function" && f.focus(), f = 0; f < B.length; f++) {
                                var U = B[f];
                                U.element.scrollLeft = U.left, U.element.scrollTop = U.top
                            }
                        }
                        ru = !!Co, Mo = Co = null
                    } finally {
                        St = i, L.p = a, M.T = l
                    }
                }
                t.current = e, Kt = 2
            }
        }

        function Xd() {
            if (Kt === 2) {
                Kt = 0;
                var t = jl,
                    e = La,
                    l = (e.flags & 8772) !== 0;
                if ((e.subtreeFlags & 8772) !== 0 || l) {
                    l = M.T, M.T = null;
                    var a = L.p;
                    L.p = 2;
                    var i = St;
                    St |= 4;
                    try {
                        yd(t, e.alternate, e)
                    } finally {
                        St = i, L.p = a, M.T = l
                    }
                }
                Kt = 3
            }
        }

        function Zd() {
            if (Kt === 4 || Kt === 3) {
                Kt = 0, Du();
                var t = jl,
                    e = La,
                    l = dl,
                    a = Nd;
                (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Kt = 5 : (Kt = 0, La = jl = null, Vd(t, t.pendingLanes));
                var i = t.pendingLanes;
                if (i === 0 && (Dl = null), Uu(l), e = e.stateNode, ve && typeof ve.onCommitFiberRoot == "function") try {
                    ve.onCommitFiberRoot(Pa, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
                if (a !== null) {
                    e = M.T, i = L.p, L.p = 2, M.T = null;
                    try {
                        for (var u = t.onRecoverableError, o = 0; o < a.length; o++) {
                            var f = a[o];
                            u(f.value, {
                                componentStack: f.stack
                            })
                        }
                    } finally {
                        M.T = e, L.p = i
                    }
                }(dl & 3) !== 0 && Ii(), Ke(t), i = t.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? t === go ? Un++ : (Un = 0, go = t) : Un = 0, Hn(0)
            }
        }

        function Vd(t, e) {
            (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, gn(e)))
        }

        function Ii() {
            return Qd(), Xd(), Zd(), Kd()
        }

        function Kd() {
            if (Kt !== 5) return !1;
            var t = jl,
                e = po;
            po = 0;
            var l = Uu(dl),
                a = M.T,
                i = L.p;
            try {
                L.p = 32 > l ? 32 : l, M.T = null, l = ho, ho = null;
                var u = jl,
                    o = dl;
                if (Kt = 0, La = jl = null, dl = 0, (St & 6) !== 0) throw Error(r(331));
                var f = St;
                if (St |= 4, Od(u.current), Ed(u, u.current, o, l), St = f, Hn(0, !1), ve && typeof ve.onPostCommitFiberRoot == "function") try {
                    ve.onPostCommitFiberRoot(Pa, u)
                } catch {}
                return !0
            } finally {
                L.p = i, M.T = a, Vd(t, e)
            }
        }

        function Jd(t, e, l) {
            e = Ce(l, e), e = Kc(t.stateNode, e, 2), t = zl(t, e, 2), t !== null && (en(t, 2), Ke(t))
        }

        function Et(t, e, l) {
            if (t.tag === 3) Jd(t, t, l);
            else
                for (; e !== null;) {
                    if (e.tag === 3) {
                        Jd(e, t, l);
                        break
                    } else if (e.tag === 1) {
                        var a = e.stateNode;
                        if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Dl === null || !Dl.has(a))) {
                            t = Ce(l, t), l = $f(2), a = zl(e, l, 2), a !== null && (Wf(l, a, e, t), en(a, 2), Ke(a));
                            break
                        }
                    }
                    e = e.return
                }
        }

        function bo(t, e, l) {
            var a = t.pingCache;
            if (a === null) {
                a = t.pingCache = new Gh;
                var i = new Set;
                a.set(e, i)
            } else i = a.get(e), i === void 0 && (i = new Set, a.set(e, i));
            i.has(l) || (ro = !0, i.add(l), t = Kh.bind(null, t, e, l), e.then(t, t))
        }

        function Kh(t, e, l) {
            var a = t.pingCache;
            a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Mt === t && (ht & l) === l && (Bt === 4 || Bt === 3 && (ht & 62914560) === ht && 300 > ge() - Vi ? (St & 2) === 0 && ka(t, 0) : fo |= l, qa === ht && (qa = 0)), Ke(t)
        }

        function $d(t, e) {
            e === 0 && (e = Gs()), t = $l(t, e), t !== null && (en(t, e), Ke(t))
        }

        function Jh(t) {
            var e = t.memoizedState,
                l = 0;
            e !== null && (l = e.retryLane), $d(t, l)
        }

        function $h(t, e) {
            var l = 0;
            switch (t.tag) {
                case 31:
                case 13:
                    var a = t.stateNode,
                        i = t.memoizedState;
                    i !== null && (l = i.retryLane);
                    break;
                case 19:
                    a = t.stateNode;
                    break;
                case 22:
                    a = t.stateNode._retryCache;
                    break;
                default:
                    throw Error(r(314))
            }
            a !== null && a.delete(e), $d(t, l)
        }

        function Wh(t, e) {
            return Qe(t, e)
        }
        var Pi = null,
            Qa = null,
            xo = !1,
            tu = !1,
            So = !1,
            Ul = 0;

        function Ke(t) {
            t !== Qa && t.next === null && (Qa === null ? Pi = Qa = t : Qa = Qa.next = t), tu = !0, xo || (xo = !0, Ih())
        }

        function Hn(t, e) {
            if (!So && tu) {
                So = !0;
                do
                    for (var l = !1, a = Pi; a !== null;) {
                        if (t !== 0) {
                            var i = a.pendingLanes;
                            if (i === 0) var u = 0;
                            else {
                                var o = a.suspendedLanes,
                                    f = a.pingedLanes;
                                u = (1 << 31 - ye(42 | t) + 1) - 1, u &= i & ~(o & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                            }
                            u !== 0 && (l = !0, Pd(a, u))
                        } else u = ht, u = ni(a, a === Mt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || tn(a, u) || (l = !0, Pd(a, u));
                        a = a.next
                    }
                while (l);
                So = !1
            }
        }

        function Fh() {
            Wd()
        }

        function Wd() {
            tu = xo = !1;
            var t = 0;
            Ul !== 0 && og() && (t = Ul);
            for (var e = ge(), l = null, a = Pi; a !== null;) {
                var i = a.next,
                    u = Fd(a, e);
                u === 0 ? (a.next = null, l === null ? Pi = i : l.next = i, i === null && (Qa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (tu = !0)), a = i
            }
            Kt !== 0 && Kt !== 5 || Hn(t), Ul !== 0 && (Ul = 0)
        }

        function Fd(t, e) {
            for (var l = t.suspendedLanes, a = t.pingedLanes, i = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
                var o = 31 - ye(u),
                    f = 1 << o,
                    m = i[o];
                m === -1 ? ((f & l) === 0 || (f & a) !== 0) && (i[o] = T0(f, e)) : m <= e && (t.expiredLanes |= f), u &= ~f
            }
            if (e = Mt, l = ht, l = ni(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (Tt === 2 || Tt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && gl(a), t.callbackNode = null, t.callbackPriority = 0;
            if ((l & 3) === 0 || tn(t, l)) {
                if (e = l & -l, e === t.callbackPriority) return e;
                switch (a !== null && gl(a), Uu(l)) {
                    case 2:
                    case 8:
                        l = Ls;
                        break;
                    case 32:
                        l = ti;
                        break;
                    case 268435456:
                        l = ks;
                        break;
                    default:
                        l = ti
                }
                return a = Id.bind(null, t), l = Qe(l, a), t.callbackPriority = e, t.callbackNode = l, e
            }
            return a !== null && a !== null && gl(a), t.callbackPriority = 2, t.callbackNode = null, 2
        }

        function Id(t, e) {
            if (Kt !== 0 && Kt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
            var l = t.callbackNode;
            if (Ii() && t.callbackNode !== l) return null;
            var a = ht;
            return a = ni(t, t === Mt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (jd(t, a, e), Fd(t, ge()), t.callbackNode != null && t.callbackNode === l ? Id.bind(null, t) : null)
        }

        function Pd(t, e) {
            if (Ii()) return null;
            jd(t, e, !0)
        }

        function Ih() {
            rg(function() {
                (St & 6) !== 0 ? Qe(qs, Fh) : Wd()
            })
        }

        function _o() {
            if (Ul === 0) {
                var t = Oa;
                t === 0 && (t = ei, ei <<= 1, (ei & 261888) === 0 && (ei = 256)), Ul = t
            }
            return Ul
        }

        function tm(t) {
            return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : oi("" + t)
        }

        function em(t, e) {
            var l = e.ownerDocument.createElement("input");
            return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t
        }

        function Ph(t, e, l, a, i) {
            if (e === "submit" && l && l.stateNode === i) {
                var u = tm((i[oe] || null).action),
                    o = a.submitter;
                o && (e = (e = o[oe] || null) ? tm(e.formAction) : o.getAttribute("formAction"), e !== null && (u = e, o = null));
                var f = new di("action", "action", null, a, i);
                t.push({
                    event: f,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (a.defaultPrevented) {
                                if (Ul !== 0) {
                                    var m = o ? em(i, o) : new FormData(i);
                                    kc(l, {
                                        pending: !0,
                                        data: m,
                                        method: i.method,
                                        action: u
                                    }, null, m)
                                }
                            } else typeof u == "function" && (f.preventDefault(), m = o ? em(i, o) : new FormData(i), kc(l, {
                                pending: !0,
                                data: m,
                                method: i.method,
                                action: u
                            }, u, m))
                        },
                        currentTarget: i
                    }]
                })
            }
        }
        for (var wo = 0; wo < nc.length; wo++) {
            var To = nc[wo],
                tg = To.toLowerCase(),
                eg = To[0].toUpperCase() + To.slice(1);
            Be(tg, "on" + eg)
        }
        Be(Nr, "onAnimationEnd"), Be(Dr, "onAnimationIteration"), Be(jr, "onAnimationStart"), Be("dblclick", "onDoubleClick"), Be("focusin", "onFocus"), Be("focusout", "onBlur"), Be(vh, "onTransitionRun"), Be(yh, "onTransitionStart"), Be(bh, "onTransitionCancel"), Be(Rr, "onTransitionEnd"), pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]), Zl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Zl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Zl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Zl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Zl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Zl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            lg = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bn));

        function lm(t, e) {
            e = (e & 4) !== 0;
            for (var l = 0; l < t.length; l++) {
                var a = t[l],
                    i = a.event;
                a = a.listeners;
                t: {
                    var u = void 0;
                    if (e)
                        for (var o = a.length - 1; 0 <= o; o--) {
                            var f = a[o],
                                m = f.instance,
                                z = f.currentTarget;
                            if (f = f.listener, m !== u && i.isPropagationStopped()) break t;
                            u = f, i.currentTarget = z;
                            try {
                                u(i)
                            } catch (N) {
                                hi(N)
                            }
                            i.currentTarget = null, u = m
                        } else
                            for (o = 0; o < a.length; o++) {
                                if (f = a[o], m = f.instance, z = f.currentTarget, f = f.listener, m !== u && i.isPropagationStopped()) break t;
                                u = f, i.currentTarget = z;
                                try {
                                    u(i)
                                } catch (N) {
                                    hi(N)
                                }
                                i.currentTarget = null, u = m
                            }
                }
            }
        }

        function mt(t, e) {
            var l = e[Hu];
            l === void 0 && (l = e[Hu] = new Set);
            var a = t + "__bubble";
            l.has(a) || (am(e, t, 2, !1), l.add(a))
        }

        function Eo(t, e, l) {
            var a = 0;
            e && (a |= 4), am(l, t, a, e)
        }
        var eu = "_reactListening" + Math.random().toString(36).slice(2);

        function zo(t) {
            if (!t[eu]) {
                t[eu] = !0, $s.forEach(function(l) {
                    l !== "selectionchange" && (lg.has(l) || Eo(l, !1, t), Eo(l, !0, t))
                });
                var e = t.nodeType === 9 ? t : t.ownerDocument;
                e === null || e[eu] || (e[eu] = !0, Eo("selectionchange", !1, e))
            }
        }

        function am(t, e, l, a) {
            switch (Dm(e)) {
                case 2:
                    var i = Mg;
                    break;
                case 8:
                    i = Ng;
                    break;
                default:
                    i = ko
            }
            l = i.bind(null, e, l, t), i = void 0, !Zu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), a ? i !== void 0 ? t.addEventListener(e, l, {
                capture: !0,
                passive: i
            }) : t.addEventListener(e, l, !0) : i !== void 0 ? t.addEventListener(e, l, {
                passive: i
            }) : t.addEventListener(e, l, !1)
        }

        function Ao(t, e, l, a, i) {
            var u = a;
            if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (;;) {
                if (a === null) return;
                var o = a.tag;
                if (o === 3 || o === 4) {
                    var f = a.stateNode.containerInfo;
                    if (f === i) break;
                    if (o === 4)
                        for (o = a.return; o !== null;) {
                            var m = o.tag;
                            if ((m === 3 || m === 4) && o.stateNode.containerInfo === i) return;
                            o = o.return
                        }
                    for (; f !== null;) {
                        if (o = fa(f), o === null) return;
                        if (m = o.tag, m === 5 || m === 6 || m === 26 || m === 27) {
                            a = u = o;
                            continue t
                        }
                        f = f.parentNode
                    }
                }
                a = a.return
            }
            cr(function() {
                var z = u,
                    N = Qu(l),
                    B = [];
                t: {
                    var A = Ur.get(t);
                    if (A !== void 0) {
                        var C = di,
                            K = t;
                        switch (t) {
                            case "keypress":
                                if (ri(l) === 0) break t;
                            case "keydown":
                            case "keyup":
                                C = $0;
                                break;
                            case "focusin":
                                K = "focus", C = $u;
                                break;
                            case "focusout":
                                K = "blur", C = $u;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                C = $u;
                                break;
                            case "click":
                                if (l.button === 2) break t;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                C = rr;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                C = B0;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                C = I0;
                                break;
                            case Nr:
                            case Dr:
                            case jr:
                                C = L0;
                                break;
                            case Rr:
                                C = th;
                                break;
                            case "scroll":
                            case "scrollend":
                                C = U0;
                                break;
                            case "wheel":
                                C = lh;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                C = G0;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                C = dr;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                C = nh
                        }
                        var tt = (e & 4) !== 0,
                            Ct = !tt && (t === "scroll" || t === "scrollend"),
                            S = tt ? A !== null ? A + "Capture" : null : A;
                        tt = [];
                        for (var x = z, E; x !== null;) {
                            var U = x;
                            if (E = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || E === null || S === null || (U = nn(x, S), U != null && tt.push(Yn(x, U, E))), Ct) break;
                            x = x.return
                        }
                        0 < tt.length && (A = new C(A, K, null, l, N), B.push({
                            event: A,
                            listeners: tt
                        }))
                    }
                }
                if ((e & 7) === 0) {
                    t: {
                        if (A = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", A && l !== Gu && (K = l.relatedTarget || l.fromElement) && (fa(K) || K[ra])) break t;
                        if ((C || A) && (A = N.window === N ? N : (A = N.ownerDocument) ? A.defaultView || A.parentWindow : window, C ? (K = l.relatedTarget || l.toElement, C = z, K = K ? fa(K) : null, K !== null && (Ct = h(K), tt = K.tag, K !== Ct || tt !== 5 && tt !== 27 && tt !== 6) && (K = null)) : (C = null, K = z), C !== K)) {
                            if (tt = rr, U = "onMouseLeave", S = "onMouseEnter", x = "mouse", (t === "pointerout" || t === "pointerover") && (tt = dr, U = "onPointerLeave", S = "onPointerEnter", x = "pointer"), Ct = C == null ? A : an(C), E = K == null ? A : an(K), A = new tt(U, x + "leave", C, l, N), A.target = Ct, A.relatedTarget = E, U = null, fa(N) === z && (tt = new tt(S, x + "enter", K, l, N), tt.target = E, tt.relatedTarget = Ct, U = tt), Ct = U, C && K) e: {
                                for (tt = ag, S = C, x = K, E = 0, U = S; U; U = tt(U)) E++;U = 0;
                                for (var I = x; I; I = tt(I)) U++;
                                for (; 0 < E - U;) S = tt(S),
                                E--;
                                for (; 0 < U - E;) x = tt(x),
                                U--;
                                for (; E--;) {
                                    if (S === x || x !== null && S === x.alternate) {
                                        tt = S;
                                        break e
                                    }
                                    S = tt(S), x = tt(x)
                                }
                                tt = null
                            }
                            else tt = null;
                            C !== null && nm(B, A, C, tt, !1), K !== null && Ct !== null && nm(B, Ct, K, tt, !0)
                        }
                    }
                    t: {
                        if (A = z ? an(z) : window, C = A.nodeName && A.nodeName.toLowerCase(), C === "select" || C === "input" && A.type === "file") var bt = xr;
                        else if (yr(A))
                            if (Sr) bt = ph;
                            else {
                                bt = dh;
                                var $ = fh
                            }
                        else C = A.nodeName,
                        !C || C.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? z && ku(z.elementType) && (bt = xr) : bt = mh;
                        if (bt && (bt = bt(t, z))) {
                            br(B, bt, l, N);
                            break t
                        }
                        $ && $(t, A, z),
                        t === "focusout" && z && A.type === "number" && z.memoizedProps.value != null && Lu(A, "number", A.value)
                    }
                    switch ($ = z ? an(z) : window, t) {
                        case "focusin":
                            (yr($) || $.contentEditable === "true") && (xa = $, ec = z, mn = null);
                            break;
                        case "focusout":
                            mn = ec = xa = null;
                            break;
                        case "mousedown":
                            lc = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            lc = !1, Cr(B, l, N);
                            break;
                        case "selectionchange":
                            if (gh) break;
                        case "keydown":
                        case "keyup":
                            Cr(B, l, N)
                    }
                    var ct;
                    if (Fu) t: {
                        switch (t) {
                            case "compositionstart":
                                var gt = "onCompositionStart";
                                break t;
                            case "compositionend":
                                gt = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                gt = "onCompositionUpdate";
                                break t
                        }
                        gt = void 0
                    }
                    else ba ? gr(t, l) && (gt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (gt = "onCompositionStart");gt && (mr && l.locale !== "ko" && (ba || gt !== "onCompositionStart" ? gt === "onCompositionEnd" && ba && (ct = or()) : (bl = N, Vu = "value" in bl ? bl.value : bl.textContent, ba = !0)), $ = lu(z, gt), 0 < $.length && (gt = new fr(gt, t, null, l, N), B.push({
                        event: gt,
                        listeners: $
                    }), ct ? gt.data = ct : (ct = vr(l), ct !== null && (gt.data = ct)))),
                    (ct = uh ? ch(t, l) : oh(t, l)) && (gt = lu(z, "onBeforeInput"), 0 < gt.length && ($ = new fr("onBeforeInput", "beforeinput", null, l, N), B.push({
                        event: $,
                        listeners: gt
                    }), $.data = ct)),
                    Ph(B, t, z, l, N)
                }
                lm(B, e)
            })
        }

        function Yn(t, e, l) {
            return {
                instance: t,
                listener: e,
                currentTarget: l
            }
        }

        function lu(t, e) {
            for (var l = e + "Capture", a = []; t !== null;) {
                var i = t,
                    u = i.stateNode;
                if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = nn(t, l), i != null && a.unshift(Yn(t, i, u)), i = nn(t, e), i != null && a.push(Yn(t, i, u))), t.tag === 3) return a;
                t = t.return
            }
            return []
        }

        function ag(t) {
            if (t === null) return null;
            do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
            return t || null
        }

        function nm(t, e, l, a, i) {
            for (var u = e._reactName, o = []; l !== null && l !== a;) {
                var f = l,
                    m = f.alternate,
                    z = f.stateNode;
                if (f = f.tag, m !== null && m === a) break;
                f !== 5 && f !== 26 && f !== 27 || z === null || (m = z, i ? (z = nn(l, u), z != null && o.unshift(Yn(l, z, m))) : i || (z = nn(l, u), z != null && o.push(Yn(l, z, m)))), l = l.return
            }
            o.length !== 0 && t.push({
                event: e,
                listeners: o
            })
        }
        var ng = /\r\n?/g,
            ig = /\u0000|\uFFFD/g;

        function im(t) {
            return (typeof t == "string" ? t : "" + t).replace(ng, `
`).replace(ig, "")
        }

        function um(t, e) {
            return e = im(e), im(t) === e
        }

        function Ot(t, e, l, a, i, u) {
            switch (l) {
                case "children":
                    typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ga(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ga(t, "" + a);
                    break;
                case "className":
                    ui(t, "class", a);
                    break;
                case "tabIndex":
                    ui(t, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    ui(t, l, a);
                    break;
                case "style":
                    ir(t, a, u);
                    break;
                case "data":
                    if (e !== "object") {
                        ui(t, "data", a);
                        break
                    }
                case "src":
                case "href":
                    if (a === "" && (e !== "a" || l !== "href")) {
                        t.removeAttribute(l);
                        break
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        t.removeAttribute(l);
                        break
                    }
                    a = oi("" + a), t.setAttribute(l, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break
                    } else typeof u == "function" && (l === "formAction" ? (e !== "input" && Ot(t, e, "name", i.name, i, null), Ot(t, e, "formEncType", i.formEncType, i, null), Ot(t, e, "formMethod", i.formMethod, i, null), Ot(t, e, "formTarget", i.formTarget, i, null)) : (Ot(t, e, "encType", i.encType, i, null), Ot(t, e, "method", i.method, i, null), Ot(t, e, "target", i.target, i, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        t.removeAttribute(l);
                        break
                    }
                    a = oi("" + a), t.setAttribute(l, a);
                    break;
                case "onClick":
                    a != null && (t.onclick = Fe);
                    break;
                case "onScroll":
                    a != null && mt("scroll", t);
                    break;
                case "onScrollEnd":
                    a != null && mt("scrollend", t);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
                        if (l = a.__html, l != null) {
                            if (i.children != null) throw Error(r(60));
                            t.innerHTML = l
                        }
                    }
                    break;
                case "multiple":
                    t.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    t.muted = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                        t.removeAttribute("xlink:href");
                        break
                    }
                    l = oi("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
                    break;
                case "capture":
                case "download":
                    a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
                    break;
                case "popover":
                    mt("beforetoggle", t), mt("toggle", t), ii(t, "popover", a);
                    break;
                case "xlinkActuate":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    We(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    We(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    We(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    We(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    ii(t, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = j0.get(l) || l, ii(t, l, a))
            }
        }

        function Oo(t, e, l, a, i, u) {
            switch (l) {
                case "style":
                    ir(t, a, u);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
                        if (l = a.__html, l != null) {
                            if (i.children != null) throw Error(r(60));
                            t.innerHTML = l
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? ga(t, a) : (typeof a == "number" || typeof a == "bigint") && ga(t, "" + a);
                    break;
                case "onScroll":
                    a != null && mt("scroll", t);
                    break;
                case "onScrollEnd":
                    a != null && mt("scrollend", t);
                    break;
                case "onClick":
                    a != null && (t.onclick = Fe);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Ws.hasOwnProperty(l)) t: {
                        if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), e = l.slice(2, i ? l.length - 7 : void 0), u = t[oe] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, i), typeof a == "function")) {
                            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, i);
                            break t
                        }
                        l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : ii(t, l, a)
                    }
            }
        }

        function ee(t, e, l) {
            switch (e) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    mt("error", t), mt("load", t);
                    var a = !1,
                        i = !1,
                        u;
                    for (u in l)
                        if (l.hasOwnProperty(u)) {
                            var o = l[u];
                            if (o != null) switch (u) {
                                case "src":
                                    a = !0;
                                    break;
                                case "srcSet":
                                    i = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(r(137, e));
                                default:
                                    Ot(t, e, u, o, l, null)
                            }
                        }
                    i && Ot(t, e, "srcSet", l.srcSet, l, null), a && Ot(t, e, "src", l.src, l, null);
                    return;
                case "input":
                    mt("invalid", t);
                    var f = u = o = i = null,
                        m = null,
                        z = null;
                    for (a in l)
                        if (l.hasOwnProperty(a)) {
                            var N = l[a];
                            if (N != null) switch (a) {
                                case "name":
                                    i = N;
                                    break;
                                case "type":
                                    o = N;
                                    break;
                                case "checked":
                                    m = N;
                                    break;
                                case "defaultChecked":
                                    z = N;
                                    break;
                                case "value":
                                    u = N;
                                    break;
                                case "defaultValue":
                                    f = N;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (N != null) throw Error(r(137, e));
                                    break;
                                default:
                                    Ot(t, e, a, N, l, null)
                            }
                        }
                    er(t, u, f, m, z, o, i, !1);
                    return;
                case "select":
                    mt("invalid", t), a = o = u = null;
                    for (i in l)
                        if (l.hasOwnProperty(i) && (f = l[i], f != null)) switch (i) {
                            case "value":
                                u = f;
                                break;
                            case "defaultValue":
                                o = f;
                                break;
                            case "multiple":
                                a = f;
                            default:
                                Ot(t, e, i, f, l, null)
                        }
                    e = u, l = o, t.multiple = !!a, e != null ? ha(t, !!a, e, !1) : l != null && ha(t, !!a, l, !0);
                    return;
                case "textarea":
                    mt("invalid", t), u = i = a = null;
                    for (o in l)
                        if (l.hasOwnProperty(o) && (f = l[o], f != null)) switch (o) {
                            case "value":
                                a = f;
                                break;
                            case "defaultValue":
                                i = f;
                                break;
                            case "children":
                                u = f;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (f != null) throw Error(r(91));
                                break;
                            default:
                                Ot(t, e, o, f, l, null)
                        }
                    ar(t, a, i, u);
                    return;
                case "option":
                    for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Ot(t, e, m, a, l, null));
                    return;
                case "dialog":
                    mt("beforetoggle", t), mt("toggle", t), mt("cancel", t), mt("close", t);
                    break;
                case "iframe":
                case "object":
                    mt("load", t);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < Bn.length; a++) mt(Bn[a], t);
                    break;
                case "image":
                    mt("error", t), mt("load", t);
                    break;
                case "details":
                    mt("toggle", t);
                    break;
                case "embed":
                case "source":
                case "link":
                    mt("error", t), mt("load", t);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for (z in l)
                        if (l.hasOwnProperty(z) && (a = l[z], a != null)) switch (z) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, e));
                            default:
                                Ot(t, e, z, a, l, null)
                        }
                    return;
                default:
                    if (ku(e)) {
                        for (N in l) l.hasOwnProperty(N) && (a = l[N], a !== void 0 && Oo(t, e, N, a, l, void 0));
                        return
                    }
            }
            for (f in l) l.hasOwnProperty(f) && (a = l[f], a != null && Ot(t, e, f, a, l, null))
        }

        function ug(t, e, l, a) {
            switch (e) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var i = null,
                        u = null,
                        o = null,
                        f = null,
                        m = null,
                        z = null,
                        N = null;
                    for (C in l) {
                        var B = l[C];
                        if (l.hasOwnProperty(C) && B != null) switch (C) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                m = B;
                            default:
                                a.hasOwnProperty(C) || Ot(t, e, C, null, a, B)
                        }
                    }
                    for (var A in a) {
                        var C = a[A];
                        if (B = l[A], a.hasOwnProperty(A) && (C != null || B != null)) switch (A) {
                            case "type":
                                u = C;
                                break;
                            case "name":
                                i = C;
                                break;
                            case "checked":
                                z = C;
                                break;
                            case "defaultChecked":
                                N = C;
                                break;
                            case "value":
                                o = C;
                                break;
                            case "defaultValue":
                                f = C;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (C != null) throw Error(r(137, e));
                                break;
                            default:
                                C !== B && Ot(t, e, A, C, a, B)
                        }
                    }
                    qu(t, o, f, m, z, N, u, i);
                    return;
                case "select":
                    C = o = f = A = null;
                    for (u in l)
                        if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
                            case "value":
                                break;
                            case "multiple":
                                C = m;
                            default:
                                a.hasOwnProperty(u) || Ot(t, e, u, null, a, m)
                        }
                    for (i in a)
                        if (u = a[i], m = l[i], a.hasOwnProperty(i) && (u != null || m != null)) switch (i) {
                            case "value":
                                A = u;
                                break;
                            case "defaultValue":
                                f = u;
                                break;
                            case "multiple":
                                o = u;
                            default:
                                u !== m && Ot(t, e, i, u, a, m)
                        }
                    e = f, l = o, a = C, A != null ? ha(t, !!l, A, !1) : !!a != !!l && (e != null ? ha(t, !!l, e, !0) : ha(t, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    C = A = null;
                    for (f in l)
                        if (i = l[f], l.hasOwnProperty(f) && i != null && !a.hasOwnProperty(f)) switch (f) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Ot(t, e, f, null, a, i)
                        }
                    for (o in a)
                        if (i = a[o], u = l[o], a.hasOwnProperty(o) && (i != null || u != null)) switch (o) {
                            case "value":
                                A = i;
                                break;
                            case "defaultValue":
                                C = i;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (i != null) throw Error(r(91));
                                break;
                            default:
                                i !== u && Ot(t, e, o, i, a, u)
                        }
                    lr(t, A, C);
                    return;
                case "option":
                    for (var K in l) A = l[K], l.hasOwnProperty(K) && A != null && !a.hasOwnProperty(K) && (K === "selected" ? t.selected = !1 : Ot(t, e, K, null, a, A));
                    for (m in a) A = a[m], C = l[m], a.hasOwnProperty(m) && A !== C && (A != null || C != null) && (m === "selected" ? t.selected = A && typeof A != "function" && typeof A != "symbol" : Ot(t, e, m, A, a, C));
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for (var tt in l) A = l[tt], l.hasOwnProperty(tt) && A != null && !a.hasOwnProperty(tt) && Ot(t, e, tt, null, a, A);
                    for (z in a)
                        if (A = a[z], C = l[z], a.hasOwnProperty(z) && A !== C && (A != null || C != null)) switch (z) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (A != null) throw Error(r(137, e));
                                break;
                            default:
                                Ot(t, e, z, A, a, C)
                        }
                    return;
                default:
                    if (ku(e)) {
                        for (var Ct in l) A = l[Ct], l.hasOwnProperty(Ct) && A !== void 0 && !a.hasOwnProperty(Ct) && Oo(t, e, Ct, void 0, a, A);
                        for (N in a) A = a[N], C = l[N], !a.hasOwnProperty(N) || A === C || A === void 0 && C === void 0 || Oo(t, e, N, A, a, C);
                        return
                    }
            }
            for (var S in l) A = l[S], l.hasOwnProperty(S) && A != null && !a.hasOwnProperty(S) && Ot(t, e, S, null, a, A);
            for (B in a) A = a[B], C = l[B], !a.hasOwnProperty(B) || A === C || A == null && C == null || Ot(t, e, B, A, a, C)
        }

        function cm(t) {
            switch (t) {
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1
            }
        }

        function cg() {
            if (typeof performance.getEntriesByType == "function") {
                for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                    var i = l[a],
                        u = i.transferSize,
                        o = i.initiatorType,
                        f = i.duration;
                    if (u && f && cm(o)) {
                        for (o = 0, f = i.responseEnd, a += 1; a < l.length; a++) {
                            var m = l[a],
                                z = m.startTime;
                            if (z > f) break;
                            var N = m.transferSize,
                                B = m.initiatorType;
                            N && cm(B) && (m = m.responseEnd, o += N * (m < f ? 1 : (f - z) / (m - z)))
                        }
                        if (--a, e += 8 * (u + o) / (i.duration / 1e3), t++, 10 < t) break
                    }
                }
                if (0 < t) return e / t / 1e6
            }
            return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
        }
        var Co = null,
            Mo = null;

        function au(t) {
            return t.nodeType === 9 ? t : t.ownerDocument
        }

        function om(t) {
            switch (t) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0
            }
        }

        function sm(t, e) {
            if (t === 0) switch (e) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
            return t === 1 && e === "foreignObject" ? 0 : t
        }

        function No(t, e) {
            return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
        }
        var Do = null;

        function og() {
            var t = window.event;
            return t && t.type === "popstate" ? t === Do ? !1 : (Do = t, !0) : (Do = null, !1)
        }
        var rm = typeof setTimeout == "function" ? setTimeout : void 0,
            sg = typeof clearTimeout == "function" ? clearTimeout : void 0,
            fm = typeof Promise == "function" ? Promise : void 0,
            rg = typeof queueMicrotask == "function" ? queueMicrotask : typeof fm < "u" ? function(t) {
                return fm.resolve(null).then(t).catch(fg)
            } : rm;

        function fg(t) {
            setTimeout(function() {
                throw t
            })
        }

        function Hl(t) {
            return t === "head"
        }

        function dm(t, e) {
            var l = e,
                a = 0;
            do {
                var i = l.nextSibling;
                if (t.removeChild(l), i && i.nodeType === 8)
                    if (l = i.data, l === "/$" || l === "/&") {
                        if (a === 0) {
                            t.removeChild(i), Ka(e);
                            return
                        }
                        a--
                    } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
                else if (l === "html") qn(t.ownerDocument.documentElement);
                else if (l === "head") {
                    l = t.ownerDocument.head, qn(l);
                    for (var u = l.firstChild; u;) {
                        var o = u.nextSibling,
                            f = u.nodeName;
                        u[ln] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = o
                    }
                } else l === "body" && qn(t.ownerDocument.body);
                l = i
            } while (l);
            Ka(e)
        }

        function mm(t, e) {
            var l = t;
            t = 0;
            do {
                var a = l.nextSibling;
                if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
                    if (l = a.data, l === "/$") {
                        if (t === 0) break;
                        t--
                    } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
                l = a
            } while (l)
        }

        function jo(t) {
            var e = t.firstChild;
            for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
                var l = e;
                switch (e = e.nextSibling, l.nodeName) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        jo(l), Bu(l);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (l.rel.toLowerCase() === "stylesheet") continue
                }
                t.removeChild(l)
            }
        }

        function dg(t, e, l, a) {
            for (; t.nodeType === 1;) {
                var i = l;
                if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                    if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
                } else if (a) {
                    if (!t[ln]) switch (e) {
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                            if (u !== i.rel || t.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || t.getAttribute("title") !== (i.title == null ? null : i.title)) break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (u = t.getAttribute("src"), (u !== (i.src == null ? null : i.src) || t.getAttribute("type") !== (i.type == null ? null : i.type) || t.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                            return t;
                        default:
                            return t
                    }
                } else if (e === "input" && t.type === "hidden") {
                    var u = i.name == null ? null : "" + i.name;
                    if (i.type === "hidden" && t.getAttribute("name") === u) return t
                } else return t;
                if (t = Re(t.nextSibling), t === null) break
            }
            return null
        }

        function mg(t, e, l) {
            if (e === "") return null;
            for (; t.nodeType !== 3;)
                if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Re(t.nextSibling), t === null)) return null;
            return t
        }

        function pm(t, e) {
            for (; t.nodeType !== 8;)
                if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Re(t.nextSibling), t === null)) return null;
            return t
        }

        function Ro(t) {
            return t.data === "$?" || t.data === "$~"
        }

        function Uo(t) {
            return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
        }

        function pg(t, e) {
            var l = t.ownerDocument;
            if (t.data === "$~") t._reactRetry = e;
            else if (t.data !== "$?" || l.readyState !== "loading") e();
            else {
                var a = function() {
                    e(), l.removeEventListener("DOMContentLoaded", a)
                };
                l.addEventListener("DOMContentLoaded", a), t._reactRetry = a
            }
        }

        function Re(t) {
            for (; t != null; t = t.nextSibling) {
                var e = t.nodeType;
                if (e === 1 || e === 3) break;
                if (e === 8) {
                    if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                    if (e === "/$" || e === "/&") return null
                }
            }
            return t
        }
        var Ho = null;

        function hm(t) {
            t = t.nextSibling;
            for (var e = 0; t;) {
                if (t.nodeType === 8) {
                    var l = t.data;
                    if (l === "/$" || l === "/&") {
                        if (e === 0) return Re(t.nextSibling);
                        e--
                    } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
                }
                t = t.nextSibling
            }
            return null
        }

        function gm(t) {
            t = t.previousSibling;
            for (var e = 0; t;) {
                if (t.nodeType === 8) {
                    var l = t.data;
                    if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                        if (e === 0) return t;
                        e--
                    } else l !== "/$" && l !== "/&" || e++
                }
                t = t.previousSibling
            }
            return null
        }

        function vm(t, e, l) {
            switch (e = au(l), t) {
                case "html":
                    if (t = e.documentElement, !t) throw Error(r(452));
                    return t;
                case "head":
                    if (t = e.head, !t) throw Error(r(453));
                    return t;
                case "body":
                    if (t = e.body, !t) throw Error(r(454));
                    return t;
                default:
                    throw Error(r(451))
            }
        }

        function qn(t) {
            for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
            Bu(t)
        }
        var Ue = new Map,
            ym = new Set;

        function nu(t) {
            return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
        }
        var ml = L.d;
        L.d = {
            f: hg,
            r: gg,
            D: vg,
            C: yg,
            L: bg,
            m: xg,
            X: _g,
            S: Sg,
            M: wg
        };

        function hg() {
            var t = ml.f(),
                e = $i();
            return t || e
        }

        function gg(t) {
            var e = da(t);
            e !== null && e.tag === 5 && e.type === "form" ? Uf(e) : ml.r(t)
        }
        var Xa = typeof document > "u" ? null : document;

        function bm(t, e, l) {
            var a = Xa;
            if (a && typeof e == "string" && e) {
                var i = Ae(e);
                i = 'link[rel="' + t + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), ym.has(i) || (ym.add(i), t = {
                    rel: t,
                    crossOrigin: l,
                    href: e
                }, a.querySelector(i) === null && (e = a.createElement("link"), ee(e, "link", t), Jt(e), a.head.appendChild(e)))
            }
        }

        function vg(t) {
            ml.D(t), bm("dns-prefetch", t, null)
        }

        function yg(t, e) {
            ml.C(t, e), bm("preconnect", t, e)
        }

        function bg(t, e, l) {
            ml.L(t, e, l);
            var a = Xa;
            if (a && t && e) {
                var i = 'link[rel="preload"][as="' + Ae(e) + '"]';
                e === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + Ae(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + Ae(l.imageSizes) + '"]')) : i += '[href="' + Ae(t) + '"]';
                var u = i;
                switch (e) {
                    case "style":
                        u = Za(t);
                        break;
                    case "script":
                        u = Va(t)
                }
                Ue.has(u) || (t = T({
                    rel: "preload",
                    href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                    as: e
                }, l), Ue.set(u, t), a.querySelector(i) !== null || e === "style" && a.querySelector(Ln(u)) || e === "script" && a.querySelector(kn(u)) || (e = a.createElement("link"), ee(e, "link", t), Jt(e), a.head.appendChild(e)))
            }
        }

        function xg(t, e) {
            ml.m(t, e);
            var l = Xa;
            if (l && t) {
                var a = e && typeof e.as == "string" ? e.as : "script",
                    i = 'link[rel="modulepreload"][as="' + Ae(a) + '"][href="' + Ae(t) + '"]',
                    u = i;
                switch (a) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        u = Va(t)
                }
                if (!Ue.has(u) && (t = T({
                        rel: "modulepreload",
                        href: t
                    }, e), Ue.set(u, t), l.querySelector(i) === null)) {
                    switch (a) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(kn(u))) return
                    }
                    a = l.createElement("link"), ee(a, "link", t), Jt(a), l.head.appendChild(a)
                }
            }
        }

        function Sg(t, e, l) {
            ml.S(t, e, l);
            var a = Xa;
            if (a && t) {
                var i = ma(a).hoistableStyles,
                    u = Za(t);
                e = e || "default";
                var o = i.get(u);
                if (!o) {
                    var f = {
                        loading: 0,
                        preload: null
                    };
                    if (o = a.querySelector(Ln(u))) f.loading = 5;
                    else {
                        t = T({
                            rel: "stylesheet",
                            href: t,
                            "data-precedence": e
                        }, l), (l = Ue.get(u)) && Bo(t, l);
                        var m = o = a.createElement("link");
                        Jt(m), ee(m, "link", t), m._p = new Promise(function(z, N) {
                            m.onload = z, m.onerror = N
                        }), m.addEventListener("load", function() {
                            f.loading |= 1
                        }), m.addEventListener("error", function() {
                            f.loading |= 2
                        }), f.loading |= 4, iu(o, e, a)
                    }
                    o = {
                        type: "stylesheet",
                        instance: o,
                        count: 1,
                        state: f
                    }, i.set(u, o)
                }
            }
        }

        function _g(t, e) {
            ml.X(t, e);
            var l = Xa;
            if (l && t) {
                var a = ma(l).hoistableScripts,
                    i = Va(t),
                    u = a.get(i);
                u || (u = l.querySelector(kn(i)), u || (t = T({
                    src: t,
                    async: !0
                }, e), (e = Ue.get(i)) && Yo(t, e), u = l.createElement("script"), Jt(u), ee(u, "link", t), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(i, u))
            }
        }

        function wg(t, e) {
            ml.M(t, e);
            var l = Xa;
            if (l && t) {
                var a = ma(l).hoistableScripts,
                    i = Va(t),
                    u = a.get(i);
                u || (u = l.querySelector(kn(i)), u || (t = T({
                    src: t,
                    async: !0,
                    type: "module"
                }, e), (e = Ue.get(i)) && Yo(t, e), u = l.createElement("script"), Jt(u), ee(u, "link", t), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(i, u))
            }
        }

        function xm(t, e, l, a) {
            var i = (i = nt.current) ? nu(i) : null;
            if (!i) throw Error(r(446));
            switch (t) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Za(l.href), l = ma(i).hoistableStyles, a = l.get(e), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(e, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                        t = Za(l.href);
                        var u = ma(i).hoistableStyles,
                            o = u.get(t);
                        if (o || (i = i.ownerDocument || i, o = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: {
                                    loading: 0,
                                    preload: null
                                }
                            }, u.set(t, o), (u = i.querySelector(Ln(t))) && !u._p && (o.instance = u, o.state.loading = 5), Ue.has(t) || (l = {
                                rel: "preload",
                                as: "style",
                                href: l.href,
                                crossOrigin: l.crossOrigin,
                                integrity: l.integrity,
                                media: l.media,
                                hrefLang: l.hrefLang,
                                referrerPolicy: l.referrerPolicy
                            }, Ue.set(t, l), u || Tg(i, t, l, o.state))), e && a === null) throw Error(r(528, ""));
                        return o
                    }
                    if (e && a !== null) throw Error(r(529, ""));
                    return null;
                case "script":
                    return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Va(l), l = ma(i).hoistableScripts, a = l.get(e), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(e, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(r(444, t))
            }
        }

        function Za(t) {
            return 'href="' + Ae(t) + '"'
        }

        function Ln(t) {
            return 'link[rel="stylesheet"][' + t + "]"
        }

        function Sm(t) {
            return T({}, t, {
                "data-precedence": t.precedence,
                precedence: null
            })
        }

        function Tg(t, e, l, a) {
            t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
                return a.loading |= 1
            }), e.addEventListener("error", function() {
                return a.loading |= 2
            }), ee(e, "link", l), Jt(e), t.head.appendChild(e))
        }

        function Va(t) {
            return '[src="' + Ae(t) + '"]'
        }

        function kn(t) {
            return "script[async]" + t
        }

        function _m(t, e, l) {
            if (e.count++, e.instance === null) switch (e.type) {
                case "style":
                    var a = t.querySelector('style[data-href~="' + Ae(l.href) + '"]');
                    if (a) return e.instance = a, Jt(a), a;
                    var i = T({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (t.ownerDocument || t).createElement("style"), Jt(a), ee(a, "style", i), iu(a, l.precedence, t), e.instance = a;
                case "stylesheet":
                    i = Za(l.href);
                    var u = t.querySelector(Ln(i));
                    if (u) return e.state.loading |= 4, e.instance = u, Jt(u), u;
                    a = Sm(l), (i = Ue.get(i)) && Bo(a, i), u = (t.ownerDocument || t).createElement("link"), Jt(u);
                    var o = u;
                    return o._p = new Promise(function(f, m) {
                        o.onload = f, o.onerror = m
                    }), ee(u, "link", a), e.state.loading |= 4, iu(u, l.precedence, t), e.instance = u;
                case "script":
                    return u = Va(l.src), (i = t.querySelector(kn(u))) ? (e.instance = i, Jt(i), i) : (a = l, (i = Ue.get(u)) && (a = T({}, l), Yo(a, i)), t = t.ownerDocument || t, i = t.createElement("script"), Jt(i), ee(i, "link", a), t.head.appendChild(i), e.instance = i);
                case "void":
                    return null;
                default:
                    throw Error(r(443, e.type))
            } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, iu(a, l.precedence, t));
            return e.instance
        }

        function iu(t, e, l) {
            for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = a.length ? a[a.length - 1] : null, u = i, o = 0; o < a.length; o++) {
                var f = a[o];
                if (f.dataset.precedence === e) u = f;
                else if (u !== i) break
            }
            u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild))
        }

        function Bo(t, e) {
            t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
        }

        function Yo(t, e) {
            t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
        }
        var uu = null;

        function wm(t, e, l) {
            if (uu === null) {
                var a = new Map,
                    i = uu = new Map;
                i.set(l, a)
            } else i = uu, a = i.get(l), a || (a = new Map, i.set(l, a));
            if (a.has(t)) return a;
            for (a.set(t, null), l = l.getElementsByTagName(t), i = 0; i < l.length; i++) {
                var u = l[i];
                if (!(u[ln] || u[Ft] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var o = u.getAttribute(e) || "";
                    o = t + o;
                    var f = a.get(o);
                    f ? f.push(u) : a.set(o, [u])
                }
            }
            return a
        }

        function Tm(t, e, l) {
            t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
        }

        function Eg(t, e, l) {
            if (l === 1 || e.itemProp != null) return !1;
            switch (t) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                    return !0;
                case "link":
                    if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                    return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
                case "script":
                    if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
            }
            return !1
        }

        function Em(t) {
            return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
        }

        function zg(t, e, l, a) {
            if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
                if (l.instance === null) {
                    var i = Za(a.href),
                        u = e.querySelector(Ln(i));
                    if (u) {
                        e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = cu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Jt(u);
                        return
                    }
                    u = e.ownerDocument || e, a = Sm(a), (i = Ue.get(i)) && Bo(a, i), u = u.createElement("link"), Jt(u);
                    var o = u;
                    o._p = new Promise(function(f, m) {
                        o.onload = f, o.onerror = m
                    }), ee(u, "link", a), l.instance = u
                }
                t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = cu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l))
            }
        }
        var qo = 0;

        function Ag(t, e) {
            return t.stylesheets && t.count === 0 && su(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
                var a = setTimeout(function() {
                    if (t.stylesheets && su(t, t.stylesheets), t.unsuspend) {
                        var u = t.unsuspend;
                        t.unsuspend = null, u()
                    }
                }, 6e4 + e);
                0 < t.imgBytes && qo === 0 && (qo = 62500 * cg());
                var i = setTimeout(function() {
                    if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && su(t, t.stylesheets), t.unsuspend)) {
                        var u = t.unsuspend;
                        t.unsuspend = null, u()
                    }
                }, (t.imgBytes > qo ? 50 : 800) + e);
                return t.unsuspend = l,
                    function() {
                        t.unsuspend = null, clearTimeout(a), clearTimeout(i)
                    }
            } : null
        }

        function cu() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) su(this, this.stylesheets);
                else if (this.unsuspend) {
                    var t = this.unsuspend;
                    this.unsuspend = null, t()
                }
            }
        }
        var ou = null;

        function su(t, e) {
            t.stylesheets = null, t.unsuspend !== null && (t.count++, ou = new Map, e.forEach(Og, t), ou = null, cu.call(t))
        }

        function Og(t, e) {
            if (!(e.state.loading & 4)) {
                var l = ou.get(t);
                if (l) var a = l.get(null);
                else {
                    l = new Map, ou.set(t, l);
                    for (var i = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < i.length; u++) {
                        var o = i[u];
                        (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), a = o)
                    }
                    a && l.set(null, a)
                }
                i = e.instance, o = i.getAttribute("data-precedence"), u = l.get(o) || a, u === a && l.set(null, i), l.set(o, i), this.count++, a = cu.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(i, t.firstChild)), e.state.loading |= 4
            }
        }
        var Gn = {
            $$typeof: G,
            Provider: null,
            Consumer: null,
            _currentValue: F,
            _currentValue2: F,
            _threadCount: 0
        };

        function Cg(t, e, l, a, i, u, o, f, m) {
            this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ju(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ju(0), this.hiddenUpdates = ju(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map
        }

        function zm(t, e, l, a, i, u, o, f, m, z, N, B) {
            return t = new Cg(t, e, l, o, m, z, N, B, f), e = 1, u === !0 && (e |= 24), u = xe(3, null, null, e), t.current = u, u.stateNode = t, e = vc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
                element: a,
                isDehydrated: l,
                cache: e
            }, Sc(u), t
        }

        function Am(t) {
            return t ? (t = wa, t) : wa
        }

        function Om(t, e, l, a, i, u) {
            i = Am(i), a.context === null ? a.context = i : a.pendingContext = i, a = El(e), a.payload = {
                element: l
            }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = zl(t, a, e), l !== null && (pe(l, t, e), xn(l, t, e))
        }

        function Cm(t, e) {
            if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
                var l = t.retryLane;
                t.retryLane = l !== 0 && l < e ? l : e
            }
        }

        function Lo(t, e) {
            Cm(t, e), (t = t.alternate) && Cm(t, e)
        }

        function Mm(t) {
            if (t.tag === 13 || t.tag === 31) {
                var e = $l(t, 67108864);
                e !== null && pe(e, t, 67108864), Lo(t, 67108864)
            }
        }

        function Nm(t) {
            if (t.tag === 13 || t.tag === 31) {
                var e = Ee();
                e = Ru(e);
                var l = $l(t, e);
                l !== null && pe(l, t, e), Lo(t, e)
            }
        }
        var ru = !0;

        function Mg(t, e, l, a) {
            var i = M.T;
            M.T = null;
            var u = L.p;
            try {
                L.p = 2, ko(t, e, l, a)
            } finally {
                L.p = u, M.T = i
            }
        }

        function Ng(t, e, l, a) {
            var i = M.T;
            M.T = null;
            var u = L.p;
            try {
                L.p = 8, ko(t, e, l, a)
            } finally {
                L.p = u, M.T = i
            }
        }

        function ko(t, e, l, a) {
            if (ru) {
                var i = Go(a);
                if (i === null) Ao(t, e, a, fu, l), jm(t, a);
                else if (jg(i, t, e, l, a)) a.stopPropagation();
                else if (jm(t, a), e & 4 && -1 < Dg.indexOf(t)) {
                    for (; i !== null;) {
                        var u = da(i);
                        if (u !== null) switch (u.tag) {
                            case 3:
                                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                    var o = Xl(u.pendingLanes);
                                    if (o !== 0) {
                                        var f = u;
                                        for (f.pendingLanes |= 2, f.entangledLanes |= 2; o;) {
                                            var m = 1 << 31 - ye(o);
                                            f.entanglements[1] |= m, o &= ~m
                                        }
                                        Ke(u), (St & 6) === 0 && (Ki = ge() + 500, Hn(0))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                f = $l(u, 2), f !== null && pe(f, u, 2), $i(), Lo(u, 2)
                        }
                        if (u = Go(a), u === null && Ao(t, e, a, fu, l), u === i) break;
                        i = u
                    }
                    i !== null && a.stopPropagation()
                } else Ao(t, e, a, null, l)
            }
        }

        function Go(t) {
            return t = Qu(t), Qo(t)
        }
        var fu = null;

        function Qo(t) {
            if (fu = null, t = fa(t), t !== null) {
                var e = h(t);
                if (e === null) t = null;
                else {
                    var l = e.tag;
                    if (l === 13) {
                        if (t = p(e), t !== null) return t;
                        t = null
                    } else if (l === 31) {
                        if (t = _(e), t !== null) return t;
                        t = null
                    } else if (l === 3) {
                        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                        t = null
                    } else e !== t && (t = null)
                }
            }
            return fu = t, null
        }

        function Dm(t) {
            switch (t) {
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch (v0()) {
                        case qs:
                            return 2;
                        case Ls:
                            return 8;
                        case ti:
                        case y0:
                            return 32;
                        case ks:
                            return 268435456;
                        default:
                            return 32
                    }
                default:
                    return 32
            }
        }
        var Xo = !1,
            Bl = null,
            Yl = null,
            ql = null,
            Qn = new Map,
            Xn = new Map,
            Ll = [],
            Dg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

        function jm(t, e) {
            switch (t) {
                case "focusin":
                case "focusout":
                    Bl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Yl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    ql = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Qn.delete(e.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Xn.delete(e.pointerId)
            }
        }

        function Zn(t, e, l, a, i, u) {
            return t === null || t.nativeEvent !== u ? (t = {
                blockedOn: e,
                domEventName: l,
                eventSystemFlags: a,
                nativeEvent: u,
                targetContainers: [i]
            }, e !== null && (e = da(e), e !== null && Mm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t)
        }

        function jg(t, e, l, a, i) {
            switch (e) {
                case "focusin":
                    return Bl = Zn(Bl, t, e, l, a, i), !0;
                case "dragenter":
                    return Yl = Zn(Yl, t, e, l, a, i), !0;
                case "mouseover":
                    return ql = Zn(ql, t, e, l, a, i), !0;
                case "pointerover":
                    var u = i.pointerId;
                    return Qn.set(u, Zn(Qn.get(u) || null, t, e, l, a, i)), !0;
                case "gotpointercapture":
                    return u = i.pointerId, Xn.set(u, Zn(Xn.get(u) || null, t, e, l, a, i)), !0
            }
            return !1
        }

        function Rm(t) {
            var e = fa(t.target);
            if (e !== null) {
                var l = h(e);
                if (l !== null) {
                    if (e = l.tag, e === 13) {
                        if (e = p(l), e !== null) {
                            t.blockedOn = e, Ks(t.priority, function() {
                                Nm(l)
                            });
                            return
                        }
                    } else if (e === 31) {
                        if (e = _(l), e !== null) {
                            t.blockedOn = e, Ks(t.priority, function() {
                                Nm(l)
                            });
                            return
                        }
                    } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                        t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            t.blockedOn = null
        }

        function du(t) {
            if (t.blockedOn !== null) return !1;
            for (var e = t.targetContainers; 0 < e.length;) {
                var l = Go(t.nativeEvent);
                if (l === null) {
                    l = t.nativeEvent;
                    var a = new l.constructor(l.type, l);
                    Gu = a, l.target.dispatchEvent(a), Gu = null
                } else return e = da(l), e !== null && Mm(e), t.blockedOn = l, !1;
                e.shift()
            }
            return !0
        }

        function Um(t, e, l) {
            du(t) && l.delete(e)
        }

        function Rg() {
            Xo = !1, Bl !== null && du(Bl) && (Bl = null), Yl !== null && du(Yl) && (Yl = null), ql !== null && du(ql) && (ql = null), Qn.forEach(Um), Xn.forEach(Um)
        }

        function mu(t, e) {
            t.blockedOn === e && (t.blockedOn = null, Xo || (Xo = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Rg)))
        }
        var pu = null;

        function Hm(t) {
            pu !== t && (pu = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
                pu === t && (pu = null);
                for (var e = 0; e < t.length; e += 3) {
                    var l = t[e],
                        a = t[e + 1],
                        i = t[e + 2];
                    if (typeof a != "function") {
                        if (Qo(a || l) === null) continue;
                        break
                    }
                    var u = da(l);
                    u !== null && (t.splice(e, 3), e -= 3, kc(u, {
                        pending: !0,
                        data: i,
                        method: l.method,
                        action: a
                    }, a, i))
                }
            }))
        }

        function Ka(t) {
            function e(m) {
                return mu(m, t)
            }
            Bl !== null && mu(Bl, t), Yl !== null && mu(Yl, t), ql !== null && mu(ql, t), Qn.forEach(e), Xn.forEach(e);
            for (var l = 0; l < Ll.length; l++) {
                var a = Ll[l];
                a.blockedOn === t && (a.blockedOn = null)
            }
            for (; 0 < Ll.length && (l = Ll[0], l.blockedOn === null);) Rm(l), l.blockedOn === null && Ll.shift();
            if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
                for (a = 0; a < l.length; a += 3) {
                    var i = l[a],
                        u = l[a + 1],
                        o = i[oe] || null;
                    if (typeof u == "function") o || Hm(l);
                    else if (o) {
                        var f = null;
                        if (u && u.hasAttribute("formAction")) {
                            if (i = u, o = u[oe] || null) f = o.formAction;
                            else if (Qo(i) !== null) continue
                        } else f = o.action;
                        typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), Hm(l)
                    }
                }
        }

        function Bm() {
            function t(u) {
                u.canIntercept && u.info === "react-transition" && u.intercept({
                    handler: function() {
                        return new Promise(function(o) {
                            return i = o
                        })
                    },
                    focusReset: "manual",
                    scroll: "manual"
                })
            }

            function e() {
                i !== null && (i(), i = null), a || setTimeout(l, 20)
            }

            function l() {
                if (!a && !navigation.transition) {
                    var u = navigation.currentEntry;
                    u && u.url != null && navigation.navigate(u.url, {
                        state: u.getState(),
                        info: "react-transition",
                        history: "replace"
                    })
                }
            }
            if (typeof navigation == "object") {
                var a = !1,
                    i = null;
                return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100),
                    function() {
                        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), i !== null && (i(), i = null)
                    }
            }
        }

        function Zo(t) {
            this._internalRoot = t
        }
        hu.prototype.render = Zo.prototype.render = function(t) {
            var e = this._internalRoot;
            if (e === null) throw Error(r(409));
            var l = e.current,
                a = Ee();
            Om(l, a, t, e, null, null)
        }, hu.prototype.unmount = Zo.prototype.unmount = function() {
            var t = this._internalRoot;
            if (t !== null) {
                this._internalRoot = null;
                var e = t.containerInfo;
                Om(t.current, 2, null, t, null, null), $i(), e[ra] = null
            }
        };

        function hu(t) {
            this._internalRoot = t
        }
        hu.prototype.unstable_scheduleHydration = function(t) {
            if (t) {
                var e = Vs();
                t = {
                    blockedOn: null,
                    target: t,
                    priority: e
                };
                for (var l = 0; l < Ll.length && e !== 0 && e < Ll[l].priority; l++);
                Ll.splice(l, 0, t), l === 0 && Rm(t)
            }
        };
        var Ym = n.version;
        if (Ym !== "19.2.7") throw Error(r(527, Ym, "19.2.7"));
        L.findDOMNode = function(t) {
            var e = t._reactInternals;
            if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
            return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t
        };
        var Ug = {
            bundleType: 0,
            version: "19.2.7",
            rendererPackageName: "react-dom",
            currentDispatcherRef: M,
            reconcilerVersion: "19.2.7"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var gu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!gu.isDisabled && gu.supportsFiber) try {
                Pa = gu.inject(Ug), ve = gu
            } catch {}
        }
        return Ja.createRoot = function(t, e) {
            if (!d(t)) throw Error(r(299));
            var l = !1,
                a = "",
                i = Zf,
                u = Vf,
                o = Kf;
            return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (i = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (o = e.onRecoverableError)), e = zm(t, 1, !1, null, null, l, a, null, i, u, o, Bm), t[ra] = e.current, zo(t), new Zo(e)
        }, Ja.hydrateRoot = function(t, e, l) {
            if (!d(t)) throw Error(r(299));
            var a = !1,
                i = "",
                u = Zf,
                o = Vf,
                f = Kf,
                m = null;
            return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = zm(t, 1, !0, e, l ? ? null, a, i, m, u, o, f, Bm), e.context = Am(null), l = e.current, a = Ee(), a = Ru(a), i = El(a), i.callback = null, zl(l, i, a), l = a, e.current.lanes = l, en(e, l), Ke(e), t[ra] = e.current, zo(t), new hu(e)
        }, Ja.version = "19.2.7", Ja
    }
    var Po;

    function Vm() {
        if (Po) return yu.exports;
        Po = 1;

        function c() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
            } catch (n) {
                console.error(n)
            }
        }
        return c(), yu.exports = Zm(), yu.exports
    }
    var Km = Vm(),
        _u = {
            exports: {}
        },
        $a = {};
    var ts;

    function Jm() {
        if (ts) return $a;
        ts = 1;
        var c = Symbol.for("react.transitional.element"),
            n = Symbol.for("react.fragment");

        function s(r, d, h) {
            var p = null;
            if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
                h = {};
                for (var _ in d) _ !== "key" && (h[_] = d[_])
            } else h = d;
            return d = h.ref, {
                $$typeof: c,
                type: r,
                key: p,
                ref: d !== void 0 ? d : null,
                props: h
            }
        }
        return $a.Fragment = n, $a.jsx = s, $a.jsxs = s, $a
    }
    var es;

    function $m() {
        return es || (es = 1, _u.exports = Jm()), _u.exports
    }
    var w = $m();
    const ls = c => {
            let n;
            const s = new Set,
                r = (g, v) => {
                    const T = typeof g == "function" ? g(n) : g;
                    if (!Object.is(T, n)) {
                        const O = n;
                        n = v ? ? (typeof T != "object" || T === null) ? T : Object.assign({}, n, T), s.forEach(Y => Y(n, O))
                    }
                },
                d = () => n,
                _ = {
                    setState: r,
                    getState: d,
                    getInitialState: () => b,
                    subscribe: g => (s.add(g), () => s.delete(g))
                },
                b = n = c(r, d, _);
            return _
        },
        Wm = (c => c ? ls(c) : ls),
        Fm = c => c;

    function Im(c, n = Fm) {
        const s = zt.useSyncExternalStore(c.subscribe, zt.useCallback(() => n(c.getState()), [c, n]), zt.useCallback(() => n(c.getInitialState()), [c, n]));
        return zt.useDebugValue(s), s
    }
    const as = c => {
            const n = Wm(c),
                s = r => Im(n, r);
            return Object.assign(s, n), s
        },
        Wa = (c => c ? as(c) : as),
        Kn = "c-jwt",
        Jn = "c-jwt-expires-at",
        ns = "WIGZO_LEARNER_ID",
        is = "fastrr_uuid",
        us = "sr_chatbot_",
        Pm = "__uc_site",
        cs = "sr_chat_trace_id",
        os = "sr_chat_auto_opened",
        wu = "e360:cart-updated",
        ss = "fastrr-assist-overflow-hidden",
        t1 = "/chatbot/api/ve1/message/stream/v3",
        e1 = "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
        he = {
            get(c) {
                const n = document.cookie.split(";");
                for (const s of n) {
                    const [r, ...d] = s.split("=");
                    if (r.trim() === c) return decodeURIComponent(d.join("="))
                }
                return null
            },
            set(c, n, s = 183) {
                const r = new Date(Date.now() + s * 24 * 60 * 60 * 1e3).toUTCString();
                document.cookie = `${c}=${encodeURIComponent(n)}; expires=${r}; path=/`
            }
        };
    async function l1() {
        const c = he.get(ns);
        if (c) return c;
        const n = typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Tu();
        return he.set(ns, n, 183), n
    }
    const $n = new URLSearchParams(window.location.search),
        rs = {
            get(c) {
                try {
                    return sessionStorage.getItem(c)
                } catch {
                    return null
                }
            },
            set(c, n) {
                try {
                    sessionStorage.setItem(c, n)
                } catch {}
            },
            remove(c) {
                try {
                    sessionStorage.removeItem(c)
                } catch {}
            }
        },
        ue = {
            get(c) {
                try {
                    return localStorage.getItem(c)
                } catch {
                    return null
                }
            },
            set(c, n) {
                try {
                    localStorage.setItem(c, n)
                } catch {}
            },
            remove(c) {
                try {
                    localStorage.removeItem(c)
                } catch {}
            },
            keys() {
                try {
                    return Object.keys(localStorage)
                } catch {
                    return []
                }
            }
        };

    function a1() {
        try {
            const c = ue.get(Pm);
            if (!c) return;
            const n = JSON.parse(c);
            if (typeof n != "object" || n === null) return;
            const s = n.umid;
            return typeof s == "string" && s.length > 0 ? s : void 0
        } catch {
            return
        }
    }

    function n1() {
        const c = he.get(is);
        if (c && c.length > 0) return c;
        const n = Tu();
        return he.set(is, n), n
    }

    function Tu() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const n = Math.random() * 16 | 0;
            return (c === "x" ? n : n & 3 | 8).toString(16)
        })
    }
    const i1 = 8,
        u1 = 1;

    function fs() {
        return Tu().slice(0, i1)
    }

    function ds() {
        try {
            const c = he.get(cs);
            if (c) return c;
            const n = fs();
            return he.set(cs, n, u1), n
        } catch {
            return fs()
        }
    }

    function c1() {
        try {
            return he.get("fastrr_user_id") ? ? ""
        } catch {
            return ""
        }
    }

    function o1() {
        return window.innerWidth
    }

    function s1(c) {
        return window.matchMedia(`(max-width: ${c}px)`)
    }
    const r1 = /^(https?:\/\/|\/\/|\/|data:|blob:)/i;

    function oa(c) {
        return c ? r1.test(c) : !1
    }
    const Gt = Wa(c => ({
            messages: [],
            isOpen: !1,
            isStreaming: !1,
            streamingMessageId: null,
            traceId: ds(),
            addMessage: n => c(s => ({
                messages: [...s.messages, n]
            })),
            updateMessage: (n, s) => c(r => ({
                messages: r.messages.map(d => {
                    if (d.id !== n) return d;
                    const h = typeof s == "function" ? s(d) : s;
                    return { ...d,
                        ...h
                    }
                })
            })),
            removeMessage: n => c(s => ({
                messages: s.messages.filter(r => r.id !== n)
            })),
            clearErrorMessages: () => c(n => ({
                messages: n.messages.filter(s => s.status !== "error")
            })),
            setMessages: n => c({
                messages: n
            }),
            clearMessages: () => c({
                messages: []
            }),
            setOpen: n => c({
                isOpen: n
            }),
            setStreaming: (n, s = null) => c({
                isStreaming: n,
                streamingMessageId: s
            }),
            refreshTraceId: () => {
                const n = ds();
                return c({
                    traceId: n
                }), n
            }
        })),
        Fa = {
            widgetIcon: "chat",
            widgetPosition: {
                x: 3,
                y: 3
            },
            accentColor: "#5840bb",
            secondaryAccentColor: "#ede8f8",
            launcherZIndex: 2147483647,
            agentName: "Fastrr Assist",
            placeholder: "Ask me anything…",
            widgetBranding: !0,
            brandName: "Shiprocket",
            pageQuestions: {
                "/": [],
                "/products/***": [],
                "/collections/***": []
            },
            mobileChatFullscreen: !0,
            showOnlineDot: !0,
            showFollowUps: !0,
            imageCarouselAutoSlide: !0,
            nudgeText: "👋 Chat with product specialist!",
            nudgeDelaySeconds: 10,
            maxStoredMessages: 25,
            ctaLabels: {
                addToCart: "Add to bag",
                inCart: "In bag",
                buyNow: "Buy now",
                moreVariants: "More variants"
            },
            showEvaOn: [],
            hideOnCartPage: !0,
            headerTextColor: "#ffffff",
            userBubbleTextColor: "#ffffff"
        },
        f1 = {
            "consciouschemist.com": {
                hideHeaderCartIcon: !0,
                hideBuyNow: !0,
                showViewCartInToast: !0,
                cartDrawerSelector: "a.cart-drawer-button",
                postAddToCartHook: "cartGiftUpdate"
            },
            "packaging.shiprocket.in": {
                hideHeaderCartIcon: !0
            }
        };

    function d1(c, n) {
        return { ...f1[c] ? ? {},
            ...n ? ? {}
        }
    }

    function m1(c, n = {}) {
        return structuredClone({ ...Fa,
            ...c ? ? {},
            ...n,
            widgetPosition : {
                x: n.widgetPosition ? .x ? ? c ? .widgetPosition ? .x ? ? Fa.widgetPosition ? .x ? ? 3,
                y: n.widgetPosition ? .y ? ? c ? .widgetPosition ? .y ? ? Fa.widgetPosition ? .y ? ? 3
            }
        })
    }
    let ms = null;

    function ps() {
        return ms
    }
    async function p1() {
        const c = window.location.pathname;
        if (c.includes("/products/")) try {
            const n = await fetch(`${window.location.origin}${c}.js`, {
                headers: {
                    accept: "application/json"
                },
                credentials: "same-origin"
            });
            if (!n.ok) return;
            ms = await n.json()
        } catch {}
    }

    function Wn() {
        const c = document.getElementById("sellerDomain") ? .value ? .trim();
        return c || window.location.hostname
    }

    function Je() {
        return window.location.pathname
    }

    function hs() {
        return {
            utm_source: $n.get("utm_source"),
            utm_campaign: $n.get("utm_campaign"),
            utm_medium: $n.get("utm_medium")
        }
    }

    function h1(c) {
        if (c.chatbotEnabled === !1) return !1;
        const n = window.location.pathname;
        if (c.hideOnCartPage && (n === "/cart" || n.startsWith("/cart/"))) return !1;
        const s = c.showEvaOn;
        return !s || s.length === 0 ? !0 : s.some(r => {
            const d = {
                home: h => h === "/" || h === "",
                pdp: h => h.includes("products"),
                collections: h => h.includes("collections")
            };
            return d[r] ? d[r](n) : n.includes(r)
        })
    }
    const g1 = c => decodeURIComponent(c).replace(/[-_]/g, " ").replace(/\b\w/g, n => n.toUpperCase());

    function v1(c) {
        const {
            pageQuestions: n
        } = c;
        if (!n) return c.example_questions ? ? [];
        const s = window.location.pathname;
        if (n[s]) return n[s];
        for (const r of Object.keys(n)) {
            if (!r.includes("***")) continue;
            const d = r.replace("/***", "");
            if (s.startsWith(d + "/") || s === d) {
                const p = s.slice(d.length + 1).split("/")[0] || "",
                    _ = g1(p);
                return n[r].map(b => b.replace(/\{\{product_name\}\}/g, _).replace(/\{\{collection_name\}\}/g, _))
            }
        }
        return n["/"] ? ? []
    }
    const Yt = Wa(c => ({
        widgetConfig: Fa,
        initialized: !1,
        setConfig: n => c({
            widgetConfig: m1(n, {
                storeOverrides: d1(Wn(), n.storeOverrides)
            })
        }),
        setInitialized: n => c({
            initialized: n
        })
    }));
    var Eu = {
            exports: {}
        },
        zu = {};
    var gs;

    function y1() {
        if (gs) return zu;
        gs = 1;
        var c = Vn().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        return zu.c = function(n) {
            return c.H.useMemoCache(n)
        }, zu
    }
    var vs;

    function b1() {
        return vs || (vs = 1, Eu.exports = y1()), Eu.exports
    }
    var Rt = b1();
    const ys = {
        chat: w.jsxs(w.Fragment, {
            children: [w.jsx("path", {
                d: "M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4 3v-3H6a2 2 0 0 1-2-2z"
            }), w.jsx("circle", {
                cx: "9",
                cy: "10",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }), w.jsx("circle", {
                cx: "12",
                cy: "10",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            }), w.jsx("circle", {
                cx: "15",
                cy: "10",
                r: "1",
                fill: "currentColor",
                stroke: "none"
            })]
        }),
        spark: w.jsx("path", {
            d: "M12 3l2.2 5.5L20 11l-5.8 2.5L12 19l-2.2-5.5L4 11l5.8-2.5z"
        }),
        bot: w.jsxs(w.Fragment, {
            children: [w.jsx("rect", {
                x: "4",
                y: "7",
                width: "16",
                height: "12",
                rx: "3"
            }), w.jsx("circle", {
                cx: "9",
                cy: "13",
                r: "1",
                fill: "currentColor"
            }), w.jsx("circle", {
                cx: "15",
                cy: "13",
                r: "1",
                fill: "currentColor"
            }), w.jsx("path", {
                d: "M12 3v4"
            })]
        })
    };

    function bs(c) {
        const n = Rt.c(7),
            {
                widgetIcon: s,
                iconImage: r,
                size: d
            } = c,
            h = d === void 0 ? 26 : d;
        if (r) {
            let b;
            return n[0] !== r ? (b = w.jsx("img", {
                src: r,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover rounded-full"
            }), n[0] = r, n[1] = b) : b = n[1], b
        }
        const p = s ? ys[s] : null;
        if (p) {
            let b;
            return n[2] !== p || n[3] !== h ? (b = w.jsx("svg", {
                width: h,
                height: h,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: p
            }), n[2] = p, n[3] = h, n[4] = b) : b = n[4], b
        }
        let _;
        return n[5] !== h ? (_ = w.jsx("svg", {
            width: h,
            height: h,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: ys.chat
        }), n[5] = h, n[6] = _) : _ = n[6], _
    }
    const x1 = () => w.jsx("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: w.jsx("path", {
            d: "M6 6l12 12M18 6L6 18"
        })
    });

    function S1() {
        const c = Gt(X => X.isOpen),
            n = Gt(X => X.setOpen),
            s = Yt(X => X.widgetConfig),
            [r, d] = J.useState(!1),
            {
                widgetPosition: h,
                nudgeText: p,
                nudgeDelaySeconds: _,
                accentColor: b,
                showOnlineDot: g
            } = s,
            v = h ? .x ? ? 3,
            T = h ? .y ? ? 3,
            O = v >= 50,
            Y = T >= 50;
        J.useEffect(() => {
            if (!_ || c) return;
            const X = setTimeout(() => d(!0), _ * 1e3);
            return () => clearTimeout(X)
        }, [_, c]);
        const q = () => {
                d(!1), n(!c)
            },
            R = { ...O ? {
                    left: `max(8px, calc(${100-v}vw - 62px))`
                } : {
                    right: `max(8px, ${v}vw)`
                },
                ...Y ? {
                    top: `max(8px, calc(${100-T}vh - 62px))`
                } : {
                    bottom: `max(8px, ${T}vh)`
                },
                zIndex: c ? 2147483647 : 2147483646
            },
            j = Y ? O ? "5px 16px 16px 16px" : "16px 5px 16px 16px" : O ? "16px 16px 16px 5px" : "16px 16px 5px 16px",
            H = {
                background: b ? `linear-gradient(140deg, ${b}dd 0%, ${b} 60%)` : "var(--eva-grad)",
                boxShadow: "0 12px 28px -8px rgba(88,64,187,0.65), 0 3px 8px rgba(33,27,24,.18), inset 0 1px 0 rgba(255,255,255,.25)",
                transition: "transform 0.22s var(--spring-bounce), box-shadow 0.22s ease"
            },
            k = {
                border: `1.5px solid ${b??"var(--eva)"}`,
                animation: c ? "none" : void 0
            },
            G = g !== !1 && w.jsx("span", {
                className: "absolute top-1 right-1 rounded-full border-2 border-white w-2.5 h-2.5",
                style: {
                    background: "var(--online)",
                    animation: "cw-dot-blink 2.4s ease-in-out infinite"
                }
            }),
            W = c ? w.jsx(x1, {}) : w.jsx(bs, {
                size: 26
            }),
            at = r && !c && p && w.jsx("div", {
                className: `cw-greet-in cw-font-sans whitespace-pre-wrap cursor-pointer px-3.5 py-2.5 text-[13.5px] max-w-[220px] leading-[1.45]${O?" ml-4":""}`,
                style: {
                    borderRadius: j,
                    background: "var(--card)",
                    border: "1px solid var(--line)",
                    color: "var(--ink)",
                    boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 16px 34px -16px rgba(33,27,24,.3)"
                },
                onClick: q,
                children: p
            });
        return w.jsxs("div", {
            className: `fixed flex flex-col gap-[10px] ${O?"items-start":"items-end"}`,
            style: R,
            children: [!Y && at, w.jsxs("div", {
                className: "relative shrink-0",
                children: [w.jsx("div", {
                    className: "cw-ring absolute rounded-full pointer-events-none opacity-0",
                    style: {
                        inset: -6,
                        ...k
                    }
                }), w.jsxs("button", {
                    className: "rounded-full border-none cursor-pointer flex items-center justify-center text-white overflow-hidden w-[62px] h-[62px]",
                    style: H,
                    onClick: q,
                    "aria-label": c ? "Close chat" : "Open chat",
                    onMouseEnter: X => {
                        X.currentTarget.style.transform = "translateY(-3px) scale(1.05)", X.currentTarget.style.boxShadow = "0 16px 36px -6px rgba(88,64,187,0.7), 0 4px 12px rgba(33,27,24,.2), inset 0 1px 0 rgba(255,255,255,.25)"
                    },
                    onMouseLeave: X => {
                        X.currentTarget.style.transform = "", X.currentTarget.style.boxShadow = "0 12px 28px -8px rgba(88,64,187,0.65), 0 3px 8px rgba(33,27,24,.18), inset 0 1px 0 rgba(255,255,255,.25)"
                    },
                    children: [W, G]
                })]
            }), Y && at]
        })
    }
    const Fn = Wa(c => ({
            toasts: [],
            show: (n, s = {}) => {
                const r = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    d = {
                        id: r,
                        message: n,
                        type: s.type ? ? "info",
                        position: s.position ? ? "top-center",
                        duration: s.duration ? ? 4500,
                        exiting: !1,
                        remaining: s.duration ? ? 4500,
                        action: s.action
                    };
                return c(h => ({
                    toasts: [...h.toasts, d]
                })), r
            },
            hide: n => c(s => ({
                toasts: s.toasts.filter(r => r.id !== n)
            })),
            startExit: n => c(s => ({
                toasts: s.toasts.map(r => r.id === n ? { ...r,
                    exiting: !0
                } : r)
            }))
        })),
        Au = {
            show: (c, n) => Fn.getState().show(c, n),
            hide: c => Fn.getState().hide(c)
        };

    function _1(c) {
        return window.addEventListener(wu, c), () => window.removeEventListener(wu, c)
    }
    async function w1() {
        try {
            const c = await fetch(`${window.location.origin}/cart.js`, {
                headers: {
                    accept: "*/*"
                },
                credentials: "same-origin"
            });
            if (!c.ok) return null;
            const n = await c.json();
            return {
                itemCount: n.item_count ? ? 0,
                variantIds: new Set((n.items ? ? []).map(s => String(s.variant_id ? ? "")).filter(s => s !== ""))
            }
        } catch {
            return null
        }
    }
    const xs = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

    function T1(c) {
        if (!c) return {};
        try {
            const {
                searchParams: n
            } = new URL(c), s = {};
            for (const r of xs) {
                const d = n.get(r);
                d && (s[r] = d)
            }
            return s
        } catch {
            return {}
        }
    }

    function E1() {
        const c = {};
        for (const n of xs) {
            const s = $n.get(n);
            s && (c[n] = s)
        }
        return c
    }
    async function z1() {
        try {
            const c = window.location.origin,
                n = {
                    accept: "*/*",
                    origin: c,
                    referer: `${c}/`,
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "user-agent": navigator.userAgent
                },
                s = await fetch(`${c}/cart.js`, {
                    headers: n,
                    credentials: "same-origin"
                });
            if (!s.ok) return;
            const r = await s.json(),
                d = E1(),
                h = he.get("e360_session"),
                p = { ...r.attributes ? ? {},
                    ...d,
                    ...h ? {
                        e360_session: h
                    } : {}
                };
            await fetch(`${c}/cart/update.js`, {
                method: "POST",
                headers: { ...n,
                    "content-type": "application/json"
                },
                credentials: "same-origin",
                body: JSON.stringify({
                    note: "e360_ai_chatbot_session",
                    attributes: p
                })
            })
        } catch {}
    }

    function A1(c, n) {
        const s = window.shiprocketCheckoutEvents;
        if (!s) return;
        const r = String(n ? ? c.variants ? .[0] ? .channel_variant_id ? ? c.variant_id ? ? ""),
            d = he.get("e360_session"),
            h = `utm_medium=chatbot&utm_source=engage_ai&utm_campaign=product_recommendation${d?`&utm_content=${d}`:""}`,
            p = {
                page: window.location.pathname
            };
        d && (p.e360_session = d), s.buyDirect({
            type: "cart",
            products: [{
                variantId: r,
                quantity: 1
            }],
            utmParams: h,
            ...Object.keys(p).length > 0 ? {
                cartAttributes: p
            } : {}
        })
    }
    async function O1(c, n) {
        const s = n ? .variantId ? ? c.variants ? .[0] ? .channel_variant_id ? ? c.variant_id ? ? "",
            r = T1(c.product_link),
            d = {
                _page: window.location.pathname
            };
        for (const [h, p] of Object.entries(r)) d[`_${h}`] = p;
        try {
            const h = window.location.origin,
                p = await fetch(`${h}/cart/add.js`, {
                    method: "POST",
                    headers: {
                        accept: "*/*",
                        "content-type": "application/json",
                        origin: h,
                        referer: `${h}/`,
                        "user-agent": navigator.userAgent
                    },
                    body: JSON.stringify({
                        id: s,
                        quantity: 1,
                        properties: d
                    })
                });
            if (!p.ok) throw new Error(`Cart add failed: ${p.status}`);
            await p.json();
            const _ = Yt.getState().widgetConfig.storeOverrides,
                b = _ ? .postAddToCartHook;
            if (b) {
                const v = window[b];
                if (typeof v == "function") try {
                    v()
                } catch {}
            }
            const g = n ? .variantLabel && n.variantLabel !== "Default Title" ? ` (${n.variantLabel})` : "";
            return Au.show(`${c.title??"Item"}${g} added to bag!`, {
                type: "success",
                ..._ ? .showViewCartInToast ? {
                    action: {
                        label: "View cart",
                        onClick: _s
                    }
                } : {}
            }), !0
        } catch {
            return Au.show("Failed to add item to bag. Please try again.", {
                type: "error"
            }), !1
        }
    }
    async function Ss(c, n) {
        if (!await O1(c, n)) return !1;
        const r = he.get("e360_session"),
            d = `utm_medium=chatbot&utm_source=engage_ai&utm_campaign=product_recommendation${r?`&utm_content=${r}`:""}`;
        he.set("sr_checkout_utm", d, 365), z1();
        const h = document.querySelector("cart-count");
        h && (h.textContent = String(parseInt(h.textContent ? ? "0", 10) + 1));
        const p = [".header__cart-count", ".bubble-count", ".cart-bubble__text-count", ".cart-count-bubble", ".cart-count-bubble-mobile", ".t4s-count-box"];
        for (const _ of p) document.querySelectorAll(_).forEach(b => {
            b.textContent = String(parseInt(b.textContent ? ? "0", 10) + 1)
        });
        return window.dispatchEvent(new CustomEvent(wu)), !0
    }

    function _s() {
        const c = Yt.getState().widgetConfig.storeOverrides ? .cartDrawerSelector;
        if (c) {
            const n = document.querySelector(c);
            if (n) {
                n.click(), Gt.getState().setOpen(!1);
                return
            }
        }
        if (typeof window.slideShiprocketSmartCartInFrame == "function") {
            window.slideShiprocketSmartCartInFrame(!0), Gt.getState().setOpen(!1);
            return
        }
        window.location.href = `${window.location.origin}/cart`
    }

    function C1() {
        const c = Rt.c(5),
            [n, s] = J.useState(null);
        let r;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
            let b = !1;
            return w1().then(g => {
                !b && g && s(g)
            }), () => {
                b = !0
            }
        }, c[0] = r) : r = c[0];
        const d = r;
        let h, p;
        c[1] === Symbol.for("react.memo_cache_sentinel") ? (h = () => {
            const b = d(),
                g = _1(d);
            return () => {
                b ? .(), g()
            }
        }, p = [d], c[1] = h, c[2] = p) : (h = c[1], p = c[2]), J.useEffect(h, p);
        let _;
        return c[3] !== n ? (_ = {
            summary: n,
            refresh: d
        }, c[3] = n, c[4] = _) : _ = c[4], _
    }
    const M1 = () => {
            const c = Rt.c(1);
            let n;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (n = w.jsx("svg", {
                width: 16,
                height: 16,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: w.jsx("path", {
                    d: "M6 6l12 12M18 6L6 18"
                })
            }), c[0] = n) : n = c[0], n
        },
        N1 = () => {
            const c = Rt.c(1);
            let n;
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (n = w.jsxs("svg", {
                width: 18,
                height: 18,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [w.jsx("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), w.jsx("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), w.jsx("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                })]
            }), c[0] = n) : n = c[0], n
        };

    function D1(c) {
        const n = Rt.c(57),
            {
                isMobile: s
            } = c,
            r = s === void 0 ? !1 : s,
            d = Gt(L1),
            {
                agentName: h,
                accentColor: p,
                showOnlineDot: _,
                headerTextColor: b,
                storeOverrides: g
            } = Yt(q1),
            v = b ? ? "#ffffff",
            T = Gt(Y1),
            O = Gt(B1);
        let Y, q;
        n[0] !== O ? (Y = () => {
            O()
        }, q = [O], n[0] = O, n[1] = Y, n[2] = q) : (Y = n[1], q = n[2]), J.useEffect(Y, q);
        const {
            summary: R
        } = C1(), j = R !== null && !g ? .hideHeaderCartIcon, H = (R ? .itemCount ? ? 0) > 0, k = H ? R.itemCount > 99 ? "99+" : String(R.itemCount) : "", G = H ? `View cart, ${R.itemCount} item${R.itemCount===1?"":"s"}` : "View cart", W = p ? `linear-gradient(140deg, ${p}dd 0%, ${p} 60%)` : "var(--eva-grad)", at = r ? 0 : "22px 22px 0 0";
        let X;
        n[3] !== W || n[4] !== at ? (X = {
            background: W,
            borderRadius: at
        }, n[3] = W, n[4] = at, n[5] = X) : X = n[5];
        let V;
        n[6] !== v ? (V = {
            color: v,
            background: "rgba(255,255,255,.16)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,.28)"
        }, n[6] = v, n[7] = V) : V = n[7];
        let P;
        n[8] === Symbol.for("react.memo_cache_sentinel") ? (P = w.jsx(bs, {
            size: 20
        }), n[8] = P) : P = n[8];
        let et;
        n[9] !== V ? (et = w.jsx("div", {
            className: "flex items-center justify-center shrink-0 overflow-hidden relative rounded-full w-9 h-9",
            style: V,
            children: P
        }), n[9] = V, n[10] = et) : et = n[10];
        let pt;
        n[11] !== v ? (pt = {
            color: v
        }, n[11] = v, n[12] = pt) : pt = n[12];
        const ft = h ? ? "Fastrr Assist";
        let yt;
        n[13] !== ft || n[14] !== pt ? (yt = w.jsx("div", {
            className: "cw-font-sans font-semibold text-[15px] leading-[1.2]",
            style: pt,
            children: ft
        }), n[13] = ft, n[14] = pt, n[15] = yt) : yt = n[15];
        const ne = `color-mix(in srgb, ${v} 90%, transparent)`;
        let qt;
        n[16] !== ne ? (qt = {
            color: ne
        }, n[16] = ne, n[17] = qt) : qt = n[17];
        let Ut;
        n[18] !== _ ? (Ut = _ !== !1 && w.jsx("span", {
            className: "inline-block rounded-full w-1.5 h-1.5",
            style: {
                background: "var(--online)",
                animation: "cw-dot-blink 2.4s ease-in-out infinite"
            }
        }), n[18] = _, n[19] = Ut) : Ut = n[19];
        const M = `color-mix(in srgb, ${v} 50%, transparent)`;
        let L;
        n[20] !== M ? (L = w.jsx("span", {
            style: {
                color: M
            },
            children: "·"
        }), n[20] = M, n[21] = L) : L = n[21];
        const F = `color-mix(in srgb, ${v} 80%, transparent)`;
        let ot;
        n[22] !== F ? (ot = {
            color: F
        }, n[22] = F, n[23] = ot) : ot = n[23];
        let st;
        n[24] !== ot || n[25] !== T ? (st = w.jsxs("span", {
            className: "text-[10px]",
            style: ot,
            children: ["#", T]
        }), n[24] = ot, n[25] = T, n[26] = st) : st = n[26];
        let y;
        n[27] !== qt || n[28] !== Ut || n[29] !== L || n[30] !== st ? (y = w.jsxs("div", {
            className: "flex items-center gap-[5px] cw-font-sans text-[11px] mt-0.5",
            style: qt,
            children: [Ut, "Online", L, st]
        }), n[27] = qt, n[28] = Ut, n[29] = L, n[30] = st, n[31] = y) : y = n[31];
        let D;
        n[32] !== yt || n[33] !== y ? (D = w.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [yt, y]
        }), n[32] = yt, n[33] = y, n[34] = D) : D = n[34];
        let Q;
        n[35] !== p || n[36] !== k || n[37] !== G || n[38] !== v || n[39] !== H || n[40] !== j ? (Q = j && w.jsx("button", {
            type: "button",
            "aria-label": G,
            onClick: _s,
            className: "relative flex items-center cursor-pointer border-none bg-transparent p-1.5 rounded-lg transition-colors duration-150",
            style: {
                color: `color-mix(in srgb, ${v} 85%, transparent)`
            },
            onMouseEnter: H1,
            onMouseLeave: U1,
            children: w.jsxs("span", {
                className: "relative inline-flex",
                children: [w.jsx(N1, {}), H && w.jsx("span", {
                    className: "absolute -top-1 -right-1 translate-x-1/2 -translate-y-1/2 min-w-[16px] h-[16px] px-1 rounded-full text-[9px] font-bold leading-[16px] text-center whitespace-nowrap",
                    style: {
                        background: "white",
                        color: p ? ? "var(--eva)"
                    },
                    children: k
                })]
            })
        }), n[35] = p, n[36] = k, n[37] = G, n[38] = v, n[39] = H, n[40] = j, n[41] = Q) : Q = n[41];
        let Z;
        n[42] !== d ? (Z = () => d(!1), n[42] = d, n[43] = Z) : Z = n[43];
        const lt = `color-mix(in srgb, ${v} 85%, transparent)`;
        let nt;
        n[44] !== lt ? (nt = {
            color: lt
        }, n[44] = lt, n[45] = nt) : nt = n[45];
        let rt;
        n[46] === Symbol.for("react.memo_cache_sentinel") ? (rt = w.jsx(M1, {}), n[46] = rt) : rt = n[46];
        let wt;
        n[47] !== Z || n[48] !== nt ? (wt = w.jsx("button", {
            onClick: Z,
            "aria-label": "Close chat",
            className: "flex items-center cursor-pointer border-none bg-transparent p-1.5 rounded-lg transition-colors duration-150",
            style: nt,
            onMouseEnter: R1,
            onMouseLeave: j1,
            children: rt
        }), n[47] = Z, n[48] = nt, n[49] = wt) : wt = n[49];
        let _t;
        n[50] === Symbol.for("react.memo_cache_sentinel") ? (_t = w.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-px bg-black/[0.08]"
        }), n[50] = _t) : _t = n[50];
        let Wt;
        return n[51] !== D || n[52] !== Q || n[53] !== wt || n[54] !== X || n[55] !== et ? (Wt = w.jsxs("div", {
            className: "flex items-center gap-[10px] shrink-0 relative px-[17px] py-[15px] shadow-[inset_0_1px_0_rgba(255,255,255,.2)]",
            style: X,
            children: [et, D, Q, wt, _t]
        }), n[51] = D, n[52] = Q, n[53] = wt, n[54] = X, n[55] = et, n[56] = Wt) : Wt = n[56], Wt
    }

    function j1(c) {
        c.currentTarget.style.background = "transparent"
    }

    function R1(c) {
        c.currentTarget.style.background = "rgba(255,255,255,.15)"
    }

    function U1(c) {
        c.currentTarget.style.background = "transparent"
    }

    function H1(c) {
        c.currentTarget.style.background = "rgba(255,255,255,.15)"
    }

    function B1(c) {
        return c.refreshTraceId
    }

    function Y1(c) {
        return c.traceId
    }

    function q1(c) {
        return c.widgetConfig
    }

    function L1(c) {
        return c.setOpen
    }
    const k1 = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        G1 = /\[([^\]]+)\]\((https?:\/\/[^\s)]*)$/,
        Q1 = /\*\*(.+?)\*\*/g,
        X1 = new RegExp("(?<!\\*)\\*(?!\\*)(.+?)(?<!\\*)\\*(?!\\*)", "g"),
        Z1 = /(?:\s*-\s*)?https?:\/\/[^\s]+/g;

    function Ia(c, n) {
        const s = [];
        for (const p of c.matchAll(k1)) s.push({
            index: p.index,
            length: p[0].length,
            node: zt.createElement("a", {
                key: `${n}-mdlink-${p.index}`,
                href: p[2],
                target: "_blank",
                rel: "noopener noreferrer"
            }, p[1])
        });
        const r = c.match(G1);
        r ? .index !== void 0 && !s.some(p => r.index >= p.index && r.index < p.index + p.length) && s.push({
            index: r.index,
            length: r[0].length,
            node: zt.createElement("span", {
                key: `${n}-mdlink-partial-${r.index}`,
                "data-link-pending": "true"
            }, r[1])
        });
        for (const p of c.matchAll(Q1)) s.some(_ => p.index >= _.index && p.index < _.index + _.length) || s.push({
            index: p.index,
            length: p[0].length,
            node: zt.createElement("strong", {
                key: `${n}-bold-${p.index}`,
                className: "font-semibold"
            }, ...Ia(p[1], `${n}-boldin-${p.index}`))
        });
        for (const p of c.matchAll(X1)) s.some(_ => p.index >= _.index && p.index < _.index + _.length) || s.push({
            index: p.index,
            length: p[0].length,
            node: zt.createElement("em", {
                key: `${n}-italic-${p.index}`,
                className: "italic"
            }, p[1])
        });
        for (const p of c.matchAll(Z1)) {
            if (s.some(b => p.index >= b.index && p.index < b.index + b.length)) continue;
            const _ = p[0].replace(/^\s*-\s*/, "");
            s.push({
                index: p.index,
                length: p[0].length,
                node: zt.createElement("span", {
                    key: `${n}-url-${p.index}`
                }, " - ", zt.createElement("a", {
                    href: _,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, "View Product"))
            })
        }
        if (s.length === 0) return [c];
        s.sort((p, _) => p.index - _.index);
        const d = [];
        let h = 0;
        for (const p of s) p.index > h && d.push(c.substring(h, p.index)), d.push(p.node), h = p.index + p.length;
        return h < c.length && d.push(c.substring(h)), d
    }

    function V1(c) {
        return /^-{3,}\s*$/.test(c.trim())
    }

    function K1(c) {
        return c.match(/^(\d+)\.\s+(.*)/)
    }

    function J1(c) {
        return c.match(/^[-*]\s+(.*)/)
    }

    function $1(c) {
        return c.match(/^(#{1,3})\s+(.*)/)
    }

    function W1(c) {
        const n = c.split(`
`),
            s = [];
        let r = [],
            d = "ol";
        const h = () => {
            if (r.length === 0) return;
            const p = d === "ol" ? "ol" : "ul",
                _ = d === "ol" ? "list-none pl-0 my-1 space-y-1.5" : "list-none pl-0 my-1 space-y-1";
            s.push(zt.createElement(p, {
                key: `list-${s.length}`,
                className: _
            }, ...r)), r = []
        };
        for (let p = 0; p < n.length; p++) {
            const b = n[p].trim();
            if (b === "") {
                h(), s.push(zt.createElement("div", {
                    key: `spacer-${p}`,
                    className: "h-1"
                }));
                continue
            }
            if (V1(b)) {
                h(), s.push(zt.createElement("hr", {
                    key: `hr-${p}`,
                    className: "border-t border-gray-200 my-2"
                }));
                continue
            }
            const g = $1(b);
            if (g) {
                h();
                const O = g[1].length,
                    Y = O === 1 ? "text-base font-semibold" : O === 2 ? "text-sm font-semibold" : "text-sm font-medium";
                s.push(zt.createElement("div", {
                    key: `heading-${p}`,
                    className: `${Y} my-1`
                }, ...Ia(g[2], `h-${p}`)));
                continue
            }
            const v = K1(b);
            if (v) {
                d !== "ol" && r.length > 0 && h(), d = "ol", r.push(zt.createElement("li", {
                    key: `li-${p}`,
                    className: "flex items-start gap-1.5"
                }, zt.createElement("span", {
                    className: "font-semibold min-w-[1.25rem] text-right flex-shrink-0"
                }, `${v[1]}.`), zt.createElement("span", {
                    className: "flex-1"
                }, ...Ia(v[2], `li-${p}`))));
                continue
            }
            const T = J1(b);
            if (T) {
                d !== "ul" && r.length > 0 && h(), d = "ul", r.push(zt.createElement("li", {
                    key: `uli-${p}`,
                    className: "flex items-start gap-1.5"
                }, zt.createElement("span", {
                    className: "mt-2 flex-shrink-0 w-[5px] h-[5px] rounded-full bg-current opacity-50"
                }), zt.createElement("span", {
                    className: "flex-1"
                }, ...Ia(T[1], `uli-${p}`))));
                continue
            }
            h(), s.push(zt.createElement(zt.Fragment, {
                key: `line-${p}`
            }, ...Ia(b, `p-${p}`), p < n.length - 1 ? zt.createElement("br") : null))
        }
        return h(), zt.createElement(zt.Fragment, null, ...s)
    }

    function F1(c) {
        const n = new Date(c);
        if (Number.isNaN(n.getTime())) return "";
        const s = new Date,
            r = Math.floor((s.getTime() - n.getTime()) / 6e4);
        if (r < 1) return "Just now";
        if (r < 60) return `${r} min ago`;
        if (n.toDateString() === s.toDateString()) return n.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: !0
        });
        const h = new Date(s);
        return h.setDate(s.getDate() - 1), n.toDateString() === h.toDateString() ? "Yesterday" : n.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short"
        })
    }
    const I1 = c => {
        const n = Rt.c(9),
            {
                accentColor: s,
                agentName: r
            } = c,
            d = `color-mix(in srgb, ${s} 12%, #fff)`,
            h = `inset 0 0 0 1px color-mix(in srgb, ${s} 24%, transparent)`;
        let p;
        n[0] !== s || n[1] !== d || n[2] !== h ? (p = {
            background: d,
            boxShadow: h,
            color: s
        }, n[0] = s, n[1] = d, n[2] = h, n[3] = p) : p = n[3];
        let _;
        n[4] !== r[0] ? (_ = r[0].toUpperCase(), n[4] = r[0], n[5] = _) : _ = n[5];
        let b;
        return n[6] !== p || n[7] !== _ ? (b = w.jsx("div", {
            className: "flex items-center justify-center shrink-0 self-end rounded-full cw-font-sans w-6 h-6 mb-0.5 text-[10px] font-bold",
            style: p,
            children: _
        }), n[6] = p, n[7] = _, n[8] = b) : b = n[8], b
    };

    function P1(c) {
        const n = Rt.c(37),
            {
                message: s,
                timestampText: r,
                onRetry: d
            } = c,
            {
                accentColor: h,
                agentName: p,
                userBubbleTextColor: _
            } = Yt(tp),
            b = h ? ? "#5840bb",
            g = _ ? ? "#ffffff",
            v = s.role === "user",
            O = s.status === "error" && v;
        let Y;
        n[0] !== b || n[1] !== v ? (Y = v ? {
            background: `linear-gradient(140deg, ${b}dd 0%, ${b} 60%)`,
            borderRadius: "17px 17px 5px 17px",
            boxShadow: `0 4px 16px -6px color-mix(in srgb, ${b} 50%, transparent)`
        } : {
            background: "var(--card)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: "17px 17px 17px 5px",
            boxShadow: "0 1px 2px rgba(33,27,24,.05)"
        }, n[0] = b, n[1] = v, n[2] = Y) : Y = n[2];
        const q = Y,
            R = `flex items-end gap-[7px] cw-msg-in ${v?"flex-row-reverse":"flex-row"}`;
        let j;
        n[3] !== b || n[4] !== p || n[5] !== v ? (j = !v && w.jsx(I1, {
            accentColor: b,
            agentName: p ? ? "E"
        }), n[3] = b, n[4] = p, n[5] = v, n[6] = j) : j = n[6];
        const H = `flex flex-col gap-0.5 max-w-[86%] min-w-0 ${v?"items-end":"items-start"}`;
        let k;
        n[7] !== O ? (k = O && w.jsx("div", {
            className: "shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold cw-font-sans",
            style: {
                border: "1.5px solid var(--bad)",
                color: "var(--bad)"
            },
            children: "!"
        }), n[7] = O, n[8] = k) : k = n[8];
        let G;
        n[9] !== g || n[10] !== v ? (G = v ? {
            color: g
        } : {}, n[9] = g, n[10] = v, n[11] = G) : G = n[11];
        let W;
        n[12] !== q || n[13] !== G ? (W = { ...q,
            ...G,
            overflowWrap: "anywhere"
        }, n[12] = q, n[13] = G, n[14] = W) : W = n[14];
        let at;
        n[15] !== s.content ? (at = W1(s.content), n[15] = s.content, n[16] = at) : at = n[16];
        let X;
        n[17] !== W || n[18] !== at ? (X = w.jsx("div", {
            className: "max-w-full cw-font-sans px-3.5 py-[11px] text-[13.5px] leading-normal",
            style: W,
            children: at
        }), n[17] = W, n[18] = at, n[19] = X) : X = n[19];
        let V;
        n[20] !== k || n[21] !== X ? (V = w.jsxs("div", {
            className: "flex flex-row items-center gap-2 min-w-0",
            children: [k, X]
        }), n[20] = k, n[21] = X, n[22] = V) : V = n[22];
        let P;
        n[23] !== d || n[24] !== O ? (P = O && d && w.jsx("button", {
            onClick: d,
            className: "flex items-center gap-1 cw-font-sans text-[11.5px] font-medium leading-none cursor-pointer bg-transparent border-0 p-0 px-0.5 mt-1",
            style: {
                color: "var(--bad)"
            },
            children: "↺ Retry"
        }), n[23] = d, n[24] = O, n[25] = P) : P = n[25];
        let et;
        n[26] !== r ? (et = r && w.jsx("span", {
            className: "text-[10px] cw-font-sans leading-none px-1 mt-1",
            style: {
                color: "var(--muted)"
            },
            children: r
        }), n[26] = r, n[27] = et) : et = n[27];
        let pt;
        n[28] !== V || n[29] !== P || n[30] !== et || n[31] !== H ? (pt = w.jsxs("div", {
            className: H,
            children: [V, P, et]
        }), n[28] = V, n[29] = P, n[30] = et, n[31] = H, n[32] = pt) : pt = n[32];
        let ft;
        return n[33] !== pt || n[34] !== R || n[35] !== j ? (ft = w.jsxs("div", {
            className: R,
            children: [j, pt]
        }), n[33] = pt, n[34] = R, n[35] = j, n[36] = ft) : ft = n[36], ft
    }

    function tp(c) {
        return c.widgetConfig
    }

    function ws() {
        const c = Rt.c(4),
            n = ep;
        let s;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
            background: "var(--card)",
            border: "1px solid var(--line)"
        }, c[0] = s) : s = c[0];
        let r;
        c[1] === Symbol.for("react.memo_cache_sentinel") ? (r = w.jsx("span", {
            className: "size-[6px] rounded-full",
            style: n("0s")
        }), c[1] = r) : r = c[1];
        let d;
        c[2] === Symbol.for("react.memo_cache_sentinel") ? (d = w.jsx("span", {
            className: "size-[6px] rounded-full",
            style: n("0.15s")
        }), c[2] = d) : d = c[2];
        let h;
        return c[3] === Symbol.for("react.memo_cache_sentinel") ? (h = w.jsx("div", {
            className: "flex justify-start cw-msg-in",
            children: w.jsxs("div", {
                className: "flex items-center gap-[5px] rounded-[17px_17px_17px_5px] px-4 py-3 shadow-sm",
                style: s,
                children: [r, d, w.jsx("span", {
                    className: "size-[6px] rounded-full",
                    style: n("0.3s")
                })]
            })
        }), c[3] = h) : h = c[3], h
    }

    function ep(c) {
        return {
            background: "var(--muted)",
            animation: `cw-bounce 1.2s ease-in-out ${c} infinite`
        }
    }

    function lp(c) {
        const n = Rt.c(9),
            {
                chips: s,
                onSelect: r
            } = c,
            h = Yt(ap) ? ? "#5840bb";
        if (!s.length) return null;
        let p;
        if (n[0] !== h || n[1] !== s || n[2] !== r) {
            let b;
            n[4] !== h || n[5] !== r ? (b = g => w.jsx("button", {
                onClick: () => r(g),
                className: "rounded-full cursor-pointer cw-font-sans cw-pop text-[12.5px] font-medium px-[15px] py-2 leading-tight",
                style: {
                    color: h,
                    border: `1px solid color-mix(in srgb, ${h} 32%, var(--line))`,
                    background: "var(--card)",
                    transition: "transform 0.12s var(--spring-bounce), background 0.12s, border-color 0.12s, box-shadow 0.12s"
                },
                onMouseEnter: v => {
                    const T = v.currentTarget;
                    T.style.transform = "translateY(-1px)", T.style.background = `color-mix(in srgb, ${h} 6%, white)`, T.style.borderColor = `color-mix(in srgb, ${h} 60%, var(--line))`, T.style.boxShadow = "0 2px 8px rgba(88,64,187,0.12)"
                },
                onMouseLeave: v => {
                    const T = v.currentTarget;
                    T.style.transform = "", T.style.background = "var(--card)", T.style.borderColor = `color-mix(in srgb, ${h} 32%, var(--line))`, T.style.boxShadow = ""
                },
                children: g
            }, g), n[4] = h, n[5] = r, n[6] = b) : b = n[6], p = s.map(b), n[0] = h, n[1] = s, n[2] = r, n[3] = p
        } else p = n[3];
        let _;
        return n[7] !== p ? (_ = w.jsx("div", {
            className: "flex flex-wrap gap-[7px] pl-[34px] cw-msg-in",
            children: p
        }), n[7] = p, n[8] = _) : _ = n[8], _
    }

    function ap(c) {
        return c.widgetConfig.accentColor
    }

    function np({
        count: c,
        minDelayMs: n,
        imageIntervalMs: s,
        getImageCount: r,
        scrollFn: d
    }) {
        const [h, p] = J.useState(0), _ = J.useRef(0), b = J.useRef(!1), g = J.useRef(null), v = J.useRef(null), T = J.useRef(c);
        T.current = c;
        const O = J.useRef(n);
        O.current = n;
        const Y = J.useRef(s);
        Y.current = s;
        const q = J.useRef(r);
        q.current = r;
        const R = J.useRef(d);
        R.current = d;
        const j = J.useRef(() => {});
        j.current = () => {
            const G = _.current,
                W = q.current(G),
                at = Math.max(W * Y.current, O.current);
            v.current && clearTimeout(v.current), v.current = setTimeout(() => {
                if (b.current) return;
                const X = (_.current + 1) % T.current;
                _.current = X, p(X), R.current(X), j.current()
            }, at)
        };
        const H = J.useCallback(() => {
                b.current = !0, v.current && clearTimeout(v.current), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
                    b.current = !1, j.current()
                }, 3e3)
            }, []),
            k = J.useCallback(G => {
                v.current && clearTimeout(v.current), g.current && clearTimeout(g.current), b.current = !1, _.current = G, p(G), R.current(G), j.current()
            }, []);
        return J.useEffect(() => {
            if (!(c <= 1)) return j.current(), () => {
                v.current && clearTimeout(v.current), g.current && clearTimeout(g.current)
            }
        }, []), {
            activeIndex: h,
            handleUserInteraction: H,
            navigateTo: k
        }
    }

    function ip({
        count: c,
        intervalMs: n,
        scrollFn: s,
        enabled: r = !0
    }) {
        const [d, h] = J.useState(0), p = J.useRef(0), _ = J.useRef(!1), b = J.useRef(null), g = J.useRef(s);
        g.current = s;
        const v = J.useCallback(O => {
                p.current = O, h(O)
            }, []),
            T = J.useCallback(() => {
                _.current = !0, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
                    _.current = !1
                }, 3e3)
            }, []);
        return J.useEffect(() => {
            if (!r || c <= 1) return;
            const O = setInterval(() => {
                if (_.current) return;
                const Y = (p.current + 1) % c;
                p.current = Y, h(Y), g.current(Y)
            }, n);
            return () => clearInterval(O)
        }, [c, n, r]), J.useEffect(() => () => {
            b.current && clearTimeout(b.current)
        }, []), {
            activeIndex: d,
            handleUserInteraction: T,
            onIndexChange: v
        }
    }
    const ae = Wa(c => ({
            jwt: null,
            status: "idle",
            error: null,
            cookieId: null,
            setJwt: n => c({
                jwt: n
            }),
            setStatus: n => c({
                status: n
            }),
            setError: n => c({
                error: n
            }),
            setCookieId: n => c({
                cookieId: n
            }),
            clearSession: () => c({
                jwt: null,
                status: "session-expired"
            })
        })),
        Ts = "https://gateway.pickrr.com";

    function Ou() {
        const {
            jwt: c
        } = ae.getState();
        return c ? {
            "c-jwt": c
        } : {}
    }

    function Es(c) {
        const {
            setStatus: n
        } = ae.getState();
        throw c === 401 ? new Error("Session expired") : c === 403 ? (n("access-denied"), new Error("Access denied")) : new Error(`Request failed: ${c}`)
    }
    async function up(c, n, s) {
        const r = await fetch(c, {
            headers: {
                "Content-Type": "application/json",
                ...Ou(),
                ...n
            },
            signal: s
        });
        return r.ok || Es(r.status), r.json()
    }
    async function cp(c, n, s, r) {
        const d = await fetch(c, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...Ou(),
                ...s
            },
            body: n !== void 0 ? JSON.stringify(n) : void 0,
            signal: r
        });
        return d.ok || Es(d.status), d.json()
    }

    function In() {
        const c = J.useRef(new Set),
            n = J.useCallback(async (r, d = {}) => {
                try {
                    await cp("https://gateway.pickrr.com/chatbot/api/ve1/user/event", {
                        event_name: r,
                        meta_data: d
                    })
                } catch {} finally {
                    c.current.delete(r)
                }
            }, []),
            s = J.useCallback((r, d = {}) => {
                c.current.has(r) || (c.current.add(r), n(r, d))
            }, [n]);
        return {
            trackEvent: n,
            trackEventOnce: s
        }
    }

    function op(c, n) {
        return String(n ? ? c.variants ? .[0] ? .channel_variant_id ? ? c.variant_id ? ? "")
    }

    function sp(c, n) {
        window.location.href = `${window.location.origin}/cart/${op(c,n)}:1`
    }

    function rp(c) {
        window.open(c, "_blank", "noopener,noreferrer")
    }

    function fp() {
        const c = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return c === "Asia/Kolkata" || c === "Asia/Calcutta"
    }

    function zs(c, n) {
        window.shiprocketCheckoutEvents && fp() ? A1(c, n) : sp(c, n)
    }

    function dp(c) {
        if (!Array.isArray(c)) return;
        const n = c.filter(s => s != null && typeof s.name == "string" && Array.isArray(s.values)).map(s => ({
            name: s.name,
            values: s.values,
            position: s.position ? ? 0
        }));
        return n.length > 0 ? n : void 0
    }

    function mp(c) {
        const n = oa(c.imgUrl) ? c.imgUrl : c.images ? .find(oa);
        return {
            channel_variant_id: c.channel_variant_id ? ? (c.variantId != null ? String(c.variantId) : void 0),
            ...c.product_id ? {
                product_id: c.product_id
            } : {},
            ...c.channel_product_id ? {
                channel_product_id: c.channel_product_id
            } : {},
            variantTitle: c.variantTitle,
            price: c.price,
            compareAtPrice: c.compareAtPrice,
            qty: c.qty,
            outOfStock: c.outOfStock,
            variantTypes: c.variantTypes,
            images: n ? [n] : null
        }
    }

    function pp(c, n) {
        if (!n || n === "Default Title") return c;
        const s = ` - ${n}`;
        return c.endsWith(s) ? c.slice(0, -s.length) : c
    }

    function hp(c) {
        const n = dp(c.options),
            s = c.variants ? .map(mp),
            r = s ? .find(d => c.variant_id != null && d.channel_variant_id === String(c.variant_id));
        return {
            title: pp(c.title, r ? .variantTitle),
            product_link: c.product_link,
            price: c.price,
            ...c.mrp_price != null ? {
                mrp_price: c.mrp_price
            } : {},
            ...c.category ? {
                category: c.category
            } : {},
            ...c.channel_product_id ? {
                channel_product_id: c.channel_product_id
            } : {},
            ...c.product_id ? {
                product_id: c.product_id
            } : {},
            ...c.handle ? {
                handle: c.handle
            } : {},
            images: c.images ? .filter(oa) ? ? null,
            ...c.variant_id != null ? {
                variant_id: String(c.variant_id)
            } : {},
            ...n ? {
                options: n
            } : {},
            ...s ? {
                variants: s
            } : {},
            ...c.out_of_stock != null ? {
                out_of_stock: c.out_of_stock
            } : {},
            ...c.qty != null ? {
                qty: c.qty
            } : {}
        }
    }

    function As(c) {
        const n = new Map;
        return c.forEach((s, r) => {
            const d = s.channel_product_id ? ? s.product_id ? ? `__no_id_${r}`,
                h = n.get(d);
            (!h || (s.similarity_score ? ? 0) > (h.raw.similarity_score ? ? 0)) && n.set(d, {
                raw: s,
                order: h ? .order ? ? r
            })
        }), [...n.values()].sort((s, r) => s.order - r.order).map(({
            raw: s
        }) => hp(s))
    }

    function Pn(c) {
        return !c.outOfStock
    }

    function Os(c) {
        return (c.variants ? .length ? ? 0) > 1 && (c.options ? .length ? ? 0) > 0 && (c.variants ? ? []).some(n => n.variantTypes != null)
    }

    function Cs(c, n) {
        const s = Object.entries(n);
        if (s.length !== 0) return c.find(r => r.variantTypes != null && s.every(([d, h]) => r.variantTypes ? .[d] === h))
    }

    function gp(c) {
        const n = c.variants ? ? [],
            s = n.find(d => c.variant_id != null && d.channel_variant_id === String(c.variant_id)),
            r = n.find(Pn) ? ? n[0];
        return s ? .variantTypes ? ? r ? .variantTypes ? ? {}
    }

    function vp(c, n, s) {
        const r = {};
        for (const d of n) {
            r[d.name] = {};
            for (const h of d.values) {
                const p = Cs(c, { ...s,
                    [d.name]: h
                });
                r[d.name][h] = p != null && Pn(p)
            }
        }
        return r
    }

    function yp(c) {
        const n = c.variants ? ? [];
        return n.length > 1 ? !n.some(Pn) : c.out_of_stock ? ? !1
    }
    const Gl = Wa(c => ({
        product: null,
        open: n => c({
            product: n
        }),
        close: () => c({
            product: null
        })
    }));

    function bp(c) {
        const n = Rt.c(32),
            {
                product: s,
                accentColor: r,
                ctaLabels: d,
                inCart: h,
                adding: p,
                onAddToCart: _,
                onBuyNow: b,
                onOpenVariants: g
            } = c,
            v = Yt(Sp),
            T = Gl(xp);
        let O;
        n[0] !== s ? (O = Os(s), n[0] = s, n[1] = O) : O = n[1];
        const Y = O,
            q = `+${(s.variants?.length??1)-1} options`;
        let R;
        n[2] !== Y || n[3] !== _ || n[4] !== g || n[5] !== T || n[6] !== s ? (R = () => {
            if (Y) {
                T(s), g();
                return
            }
            _()
        }, n[2] = Y, n[3] = _, n[4] = g, n[5] = T, n[6] = s, n[7] = R) : R = n[7];
        const j = R;
        let H;
        n[8] !== Y || n[9] !== b || n[10] !== g || n[11] !== T || n[12] !== s ? (H = () => {
            if (Y) {
                T(s), g();
                return
            }
            b()
        }, n[8] = Y, n[9] = b, n[10] = g, n[11] = T, n[12] = s, n[13] = H) : H = n[13];
        const k = H,
            G = !Y && p,
            W = Y ? d.moreVariants : void 0,
            at = !Y && h ? "default" : "pointer",
            X = !Y && h ? "var(--ok)" : r,
            V = !Y && h ? "1.5px solid var(--ok)" : `1.5px solid color-mix(in srgb, ${r} 40%, transparent)`;
        let P;
        n[14] !== at || n[15] !== X || n[16] !== V ? (P = {
            cursor: at,
            color: X,
            border: V
        }, n[14] = at, n[15] = X, n[16] = V, n[17] = P) : P = n[17];
        const et = Y ? q : h ? d.inCart : p ? "…" : d.addToCart;
        let pt;
        n[18] !== j || n[19] !== et || n[20] !== G || n[21] !== W || n[22] !== P ? (pt = w.jsx("button", {
            onClick: j,
            disabled: G,
            "aria-label": W,
            className: "w-full cw-font-sans p-2 rounded-[9px] text-[12.5px] font-semibold bg-transparent transition-colors",
            style: P,
            children: et
        }), n[18] = j, n[19] = et, n[20] = G, n[21] = W, n[22] = P, n[23] = pt) : pt = n[23];
        let ft;
        n[24] !== r || n[25] !== d || n[26] !== k || n[27] !== v ? .hideBuyNow ? (ft = !v ? .hideBuyNow && w.jsx("button", {
            onClick: k,
            className: "w-full cw-font-sans p-2 rounded-[9px] text-[12.5px] font-semibold cursor-pointer text-white",
            style: {
                border: "1.5px solid transparent",
                background: `linear-gradient(140deg, ${r}dd 0%, ${r} 60%)`,
                boxShadow: `0 4px 12px -4px color-mix(in srgb, ${r} 50%, transparent)`
            },
            children: d.buyNow
        }), n[24] = r, n[25] = d, n[26] = k, n[27] = v ? .hideBuyNow, n[28] = ft) : ft = n[28];
        let yt;
        return n[29] !== pt || n[30] !== ft ? (yt = w.jsxs("div", {
            className: "flex flex-col gap-[6px]",
            children: [pt, ft]
        }), n[29] = pt, n[30] = ft, n[31] = yt) : yt = n[31], yt
    }

    function xp(c) {
        return c.open
    }

    function Sp(c) {
        return c.widgetConfig.storeOverrides
    }

    function _p(c) {
        const n = Rt.c(83),
            {
                product: s,
                accentColor: r,
                ctaLabels: d
            } = c,
            [h, p] = J.useState(!1),
            [_, b] = J.useState(!1),
            g = r;
        let v;
        n[0] !== s ? (v = yp(s), n[0] = s, n[1] = v) : v = n[1];
        const T = v;
        let O;
        n[2] !== s ? (O = Os(s), n[2] = s, n[3] = O) : O = n[3];
        const Y = O,
            {
                trackEvent: q
            } = In(),
            R = s.channel_product_id ? ? null,
            j = s.variant_id != null ? String(s.variant_id) : null,
            H = Y ? j : s.variants ? .[0] ? .channel_variant_id ? ? j,
            k = s.images ? .filter(oa) ? ? [],
            G = k.length > 0 ? k : s.variants ? .[0] ? .images ? .filter(oa) ? ? [],
            W = J.useRef(null),
            {
                activeIndex: at,
                handleUserInteraction: X,
                onIndexChange: V
            } = ip({
                count: G.length,
                intervalMs: 2500,
                scrollFn: wp,
                enabled: G.length > 1
            });
        let P;
        n[4] !== _ || n[5] !== h || n[6] !== R || n[7] !== s || n[8] !== q || n[9] !== H ? (P = async () => {
            if (h || _) return;
            b(!0), q("add_to_cart", {
                product_title: s.title,
                product_handle: s.handle ? ? null,
                product_price: s.price,
                product_category: s.category ? ? null,
                product_link: s.product_link,
                page: Je(),
                p_id: R,
                v_id: H
            });
            const sa = await Ss(s);
            b(!1), sa && p(!0)
        }, n[4] = _, n[5] = h, n[6] = R, n[7] = s, n[8] = q, n[9] = H, n[10] = P) : P = n[10];
        const et = P;
        let pt;
        n[11] !== j || n[12] !== Y || n[13] !== R || n[14] !== s || n[15] !== q || n[16] !== H ? (pt = () => {
            q("buy_now", {
                product_title: s.title,
                product_handle: s.handle ? ? null,
                product_price: s.price,
                product_category: s.category ? ? null,
                product_link: s.product_link,
                page: Je(),
                p_id: R,
                v_id: H
            }), zs(s, Y ? j ? ? void 0 : void 0)
        }, n[11] = j, n[12] = Y, n[13] = R, n[14] = s, n[15] = q, n[16] = H, n[17] = pt) : pt = n[17];
        const ft = pt;
        let yt;
        n[18] !== R || n[19] !== s.handle || n[20] !== s.product_link || n[21] !== s.title || n[22] !== q || n[23] !== H ? (yt = () => {
            q("variant_sheet_opened", {
                product_title: s.title,
                product_handle: s.handle ? ? null,
                product_link: s.product_link,
                page: Je(),
                p_id: R,
                v_id: H
            })
        }, n[18] = R, n[19] = s.handle, n[20] = s.product_link, n[21] = s.title, n[22] = q, n[23] = H, n[24] = yt) : yt = n[24];
        const ne = yt;
        let qt;
        n[25] !== s.price ? (qt = s.price ? `₹${Number(s.price).toLocaleString("en-IN")}` : "", n[25] = s.price, n[26] = qt) : qt = n[26];
        const Ut = qt,
            M = s.mrp_price != null && s.mrp_price > s.price;
        let L;
        n[27] !== M || n[28] !== s.mrp_price ? (L = M ? `₹${Number(s.mrp_price).toLocaleString("en-IN")}` : null, n[27] = M, n[28] = s.mrp_price, n[29] = L) : L = n[29];
        const F = L;
        let ot;
        n[30] !== M || n[31] !== s.mrp_price || n[32] !== s.price ? (ot = M ? Math.round((s.mrp_price - s.price) / s.mrp_price * 100) : null, n[30] = M, n[31] = s.mrp_price, n[32] = s.price, n[33] = ot) : ot = n[33];
        const st = ot;
        let y;
        n[34] !== T || n[35] !== R || n[36] !== s.product_link || n[37] !== q || n[38] !== H ? (y = () => {
            T || !oa(s.product_link) || (rp(s.product_link), q("link_click", {
                page: Je(),
                p_id: R,
                v_id: H
            }))
        }, n[34] = T, n[35] = R, n[36] = s.product_link, n[37] = q, n[38] = H, n[39] = y) : y = n[39];
        const D = y,
            Q = "shrink-0 flex flex-col overflow-hidden w-[158px] rounded-[15px] snap-start";
        let Z;
        n[40] === Symbol.for("react.memo_cache_sentinel") ? (Z = {
            background: "var(--card)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow-1)"
        }, n[40] = Z) : Z = n[40];
        const lt = "relative h-[176px] rounded-t-[10px] cursor-pointer",
            nt = "relative overflow-hidden w-full h-full rounded-t-[10px]",
            rt = T ? "grayscale(1)" : void 0;
        let wt;
        n[41] !== rt ? (wt = {
            background: "var(--paper-2)",
            cursor: "pointer",
            filter: rt
        }, n[41] = rt, n[42] = wt) : wt = n[42];
        const _t = G.length > 0 ? G.map((sa, Du) => w.jsx("img", {
            src: sa,
            alt: s.title,
            className: "absolute inset-0 w-full h-full object-cover",
            style: {
                opacity: Du === at ? 1 : 0,
                transition: "opacity 0.3s",
                position: "absolute"
            },
            onLoad: () => {
                V(at)
            }
        }, sa)) : w.jsx("div", {
            className: "w-full h-full flex items-center justify-center cw-font-sans text-[11px]",
            style: {
                color: "var(--muted)"
            },
            children: "No image"
        });
        let Wt;
        n[43] !== X || n[44] !== wt || n[45] !== _t ? (Wt = w.jsx("div", {
            ref: W,
            className: nt,
            style: wt,
            onClick: X,
            children: _t
        }), n[43] = X, n[44] = wt, n[45] = _t, n[46] = Wt) : Wt = n[46];
        let He;
        n[47] !== st || n[48] !== T ? (He = T ? w.jsx("span", {
            className: "absolute cw-font-sans top-2 left-2 text-white text-[10.5px] font-bold px-1.5 rounded tracking-[0.01em]",
            style: {
                background: "var(--bad)"
            },
            children: "Out of stock"
        }) : st ? w.jsxs("span", {
            className: "absolute cw-font-sans top-2 left-2 text-white text-[10.5px] font-bold px-1.5 rounded tracking-[0.01em]",
            style: {
                background: "var(--ok)"
            },
            children: [st, "% off"]
        }) : null, n[47] = st, n[48] = T, n[49] = He) : He = n[49];
        let Le;
        n[50] !== D || n[51] !== Wt || n[52] !== He ? (Le = w.jsxs("div", {
            className: lt,
            onClick: D,
            children: [Wt, He]
        }), n[50] = D, n[51] = Wt, n[52] = He, n[53] = Le) : Le = n[53];
        let Ql;
        n[54] === Symbol.for("react.memo_cache_sentinel") ? (Ql = {
            color: "var(--ink)"
        }, n[54] = Ql) : Ql = n[54];
        let ce;
        n[55] !== s.title ? (ce = w.jsx("div", {
            className: "cw-font-sans overflow-hidden text-[13.5px] font-semibold leading-[1.3] line-clamp-2",
            style: Ql,
            children: s.title
        }), n[55] = s.title, n[56] = ce) : ce = n[56];
        let pl;
        n[57] === Symbol.for("react.memo_cache_sentinel") ? (pl = {
            color: "var(--ink)"
        }, n[57] = pl) : pl = n[57];
        let ke;
        n[58] !== Ut ? (ke = w.jsx("span", {
            className: "cw-font-sans text-[17px] font-medium",
            style: pl,
            children: Ut
        }), n[58] = Ut, n[59] = ke) : ke = n[59];
        let hl;
        n[60] !== F ? (hl = F && w.jsx("span", {
            className: "cw-font-sans line-through text-xs",
            style: {
                color: "var(--muted)"
            },
            children: F
        }), n[60] = F, n[61] = hl) : hl = n[61];
        let $e;
        n[62] !== ke || n[63] !== hl ? ($e = w.jsxs("div", {
            className: "flex items-baseline mt-auto gap-[5px]",
            children: [ke, hl]
        }), n[62] = ke, n[63] = hl, n[64] = $e) : $e = n[64];
        let Ge;
        n[65] !== g || n[66] !== _ || n[67] !== d || n[68] !== et || n[69] !== ft || n[70] !== ne || n[71] !== h || n[72] !== T || n[73] !== s ? (Ge = T ? w.jsx("div", {
            className: "w-full text-center cw-font-sans p-2 rounded-[9px] text-xs",
            style: {
                background: "var(--paper-2)",
                color: "var(--muted)"
            },
            children: "Out of stock"
        }) : w.jsx(bp, {
            product: s,
            accentColor: g,
            ctaLabels: d,
            inCart: h,
            adding: _,
            onAddToCart: et,
            onBuyNow: ft,
            onOpenVariants: ne
        }), n[65] = g, n[66] = _, n[67] = d, n[68] = et, n[69] = ft, n[70] = ne, n[71] = h, n[72] = T, n[73] = s, n[74] = Ge) : Ge = n[74];
        let Qe;
        n[75] !== ce || n[76] !== $e || n[77] !== Ge ? (Qe = w.jsxs("div", {
            className: "flex flex-col flex-1 gap-[6px] px-[11px] pt-[10px] pb-[11px]",
            children: [ce, $e, Ge]
        }), n[75] = ce, n[76] = $e, n[77] = Ge, n[78] = Qe) : Qe = n[78];
        let gl;
        return n[79] !== Z || n[80] !== Le || n[81] !== Qe ? (gl = w.jsxs("div", {
            className: Q,
            style: Z,
            children: [Le, Qe]
        }), n[79] = Z, n[80] = Le, n[81] = Qe, n[82] = gl) : gl = n[82], gl
    }

    function wp() {}

    function Tp({
        products: c
    }) {
        const n = Yt(g => g.widgetConfig),
            s = n.accentColor ? ? "#5840bb",
            r = {
                addToCart: n.ctaLabels ? .addToCart ? ? "Add to bag",
                inCart: n.ctaLabels ? .inCart ? ? "In bag",
                buyNow: n.ctaLabels ? .buyNow ? ? "Buy now",
                moreVariants: n.ctaLabels ? .moreVariants ? ? "More variants"
            },
            d = J.useRef(null),
            {
                activeIndex: h,
                handleUserInteraction: p,
                navigateTo: _
            } = np({
                count: c.length,
                minDelayMs: 3500,
                imageIntervalMs: 1200,
                getImageCount: g => {
                    const v = c[g];
                    return v ? .variants ? .[0] ? .images ? .length ? ? v ? .images ? .length ? ? 1
                },
                scrollFn: g => {
                    const v = d.current;
                    if (!v) return;
                    const T = v.children[g];
                    T && v.scrollTo({
                        left: T.offsetLeft - v.offsetLeft,
                        behavior: "smooth"
                    })
                }
            });
        if (!c.length) return null;
        const b = h < c.length - 1;
        return w.jsxs("div", {
            className: "pl-[34px] flex flex-col gap-2",
            children: [w.jsxs("div", {
                className: "relative",
                children: [w.jsx("div", {
                    ref: d,
                    className: "flex gap-[10px] overflow-x-auto pb-1 snap-x snap-mandatory",
                    style: {
                        scrollbarWidth: "none"
                    },
                    onPointerDown: p,
                    onScroll: p,
                    children: c.map((g, v) => w.jsx(_p, {
                        product: g,
                        accentColor: s,
                        ctaLabels: r
                    }, `${g.product_id??g.channel_product_id??""}-${v}`))
                }), b && w.jsx("div", {
                    className: "absolute top-0 right-0 bottom-0 w-10 pointer-events-none",
                    style: {
                        background: "linear-gradient(to right, transparent, var(--paper))"
                    }
                })]
            }), c.length > 1 && w.jsx("div", {
                className: "flex items-center gap-[5px]",
                children: c.map((g, v) => w.jsx("button", {
                    onClick: () => _(v),
                    "aria-label": `Go to product ${v+1}`,
                    className: "rounded-full border-none p-0 cursor-pointer shrink-0",
                    style: {
                        width: v === h ? 16 : 6,
                        height: 6,
                        background: v === h ? s : "var(--line)",
                        transition: "width 0.25s var(--spring), background 0.25s"
                    }
                }, v))
            })]
        })
    }

    function Ep(c, n, s) {
        return !s || c.role !== "assistant" || c.status === "streaming" || c.status === "loading" || !c.follow_ups ? .length ? !1 : c.id === n
    }

    function zp({
        onQuickReply: c,
        onRetry: n
    }) {
        const s = Gt(v => v.messages),
            r = Gt(v => v.isStreaming),
            d = Gt(v => v.streamingMessageId),
            {
                showFollowUps: h,
                accentColor: p
            } = Yt(v => v.widgetConfig),
            _ = J.useRef(null);
        J.useEffect(() => {
            _.current ? .scrollIntoView({
                behavior: "smooth"
            })
        }, [s.length, r]);
        const [, b] = zt.useState(0);
        J.useEffect(() => {
            if (!s.length) return;
            const v = setInterval(() => b(T => T + 1), 6e4);
            return () => clearInterval(v)
        }, [s.length]);
        let g;
        for (let v = s.length - 1; v >= 0; v--)
            if (s[v].role === "assistant") {
                g = s[v].id;
                break
            }
        return w.jsxs("div", {
            className: "cw-scroll flex-1 overflow-y-auto overflow-x-hidden flex flex-col gap-[11px] px-4 py-5",
            style: {
                background: `linear-gradient(to bottom, color-mix(in srgb, ${p??"#5840bb"} 4%, var(--paper)) 0px, var(--paper) 110px)`
            },
            children: [s.map((v, T) => {
                const O = s[T + 1],
                    q = v.status !== "streaming" && (!O || O.role !== v.role) && v.created_at ? F1(v.created_at) : void 0;
                return w.jsxs(zt.Fragment, {
                    children: [v.status === "loading" && !v.content ? w.jsx(ws, {}) : w.jsx(P1, {
                        message: v,
                        timestampText: q,
                        onRetry: () => n(v.id)
                    }), v.products && v.products.length > 0 && v.status !== "streaming" && v.status !== "loading" && w.jsx(Tp, {
                        products: v.products
                    }), Ep(v, g, h) && w.jsx(lp, {
                        chips: v.follow_ups,
                        onSelect: c
                    })]
                }, v.id)
            }), r && d === null && w.jsx(ws, {}), w.jsx("div", {
                ref: _
            })]
        })
    }

    function Ap(c) {
        const n = Rt.c(24),
            {
                onQuestionSelect: s
            } = c,
            r = Yt(Op),
            {
                greeting: d,
                agentName: h,
                accentColor: p
            } = r,
            _ = p ? ? "#5840bb";
        let b;
        if (n[0] !== _ || n[1] !== h || n[2] !== d || n[3] !== s || n[4] !== r) {
            const g = v1(r),
                v = `linear-gradient(to bottom, color-mix(in srgb, ${_} 6%, var(--paper)) 0px, var(--paper) 140px)`;
            let T;
            n[6] !== v ? (T = {
                background: v
            }, n[6] = v, n[7] = T) : T = n[7];
            const O = `color-mix(in srgb, ${_} 14%, #fff)`,
                Y = `inset 0 0 0 1.5px color-mix(in srgb, ${_} 28%, transparent)`;
            let q;
            n[8] !== _ || n[9] !== O || n[10] !== Y ? (q = {
                background: O,
                boxShadow: Y,
                color: _
            }, n[8] = _, n[9] = O, n[10] = Y, n[11] = q) : q = n[11];
            const R = h ? ? "F";
            let j;
            n[12] !== R[0] ? (j = R[0].toUpperCase(), n[12] = R[0], n[13] = j) : j = n[13];
            let H;
            n[14] !== q || n[15] !== j ? (H = w.jsx("div", {
                className: "flex items-center justify-center rounded-full cw-font-sans w-12 h-12 text-xl font-bold mb-[14px]",
                style: q,
                children: j
            }), n[14] = q, n[15] = j, n[16] = H) : H = n[16];
            let k;
            n[17] === Symbol.for("react.memo_cache_sentinel") ? (k = {
                color: "var(--ink)"
            }, n[17] = k) : k = n[17];
            const G = d ? ? `Hi! I'm ${h??"Fastrr Assist"}`;
            let W;
            n[18] !== G ? (W = w.jsx("div", {
                className: "cw-font-sans text-[15px] font-semibold leading-[1.3] mb-2",
                style: k,
                children: G
            }), n[18] = G, n[19] = W) : W = n[19];
            let at;
            n[20] === Symbol.for("react.memo_cache_sentinel") ? (at = w.jsx("div", {
                className: "cw-font-sans text-[13px] leading-normal",
                style: {
                    color: "var(--muted)"
                },
                children: "Ask me anything about products, orders, or recommendations."
            }), n[20] = at) : at = n[20];
            let X;
            n[21] !== W || n[22] !== H ? (X = w.jsxs("div", {
                children: [H, W, at]
            }), n[21] = W, n[22] = H, n[23] = X) : X = n[23], b = w.jsxs("div", {
                className: "flex-1 overflow-y-auto flex flex-col px-[18px] pt-6 pb-5 gap-5",
                style: T,
                children: [X, g.length > 0 && w.jsxs("div", {
                    children: [w.jsx("div", {
                        className: "cw-font-sans uppercase text-[11px] font-semibold tracking-[0.06em] mb-2.5",
                        style: {
                            color: "var(--muted)"
                        },
                        children: "Try asking"
                    }), w.jsx("div", {
                        className: "flex flex-wrap gap-[7px]",
                        children: g.slice(0, 4).map(V => w.jsx("button", {
                            onClick: () => s(V),
                            className: "rounded-full cursor-pointer cw-font-sans cw-pop text-[12.5px] font-medium px-[15px] py-2 leading-tight",
                            style: {
                                color: _,
                                border: `1px solid color-mix(in srgb, ${_} 32%, var(--line))`,
                                background: "var(--card)",
                                transition: "transform 0.12s var(--spring-bounce), background 0.12s, border-color 0.12s, box-shadow 0.12s"
                            },
                            onMouseEnter: P => {
                                const et = P.currentTarget;
                                et.style.transform = "translateY(-1px)", et.style.background = `color-mix(in srgb, ${_} 6%, white)`, et.style.borderColor = `color-mix(in srgb, ${_} 60%, var(--line))`, et.style.boxShadow = "0 2px 8px rgba(88,64,187,0.12)"
                            },
                            onMouseLeave: P => {
                                const et = P.currentTarget;
                                et.style.transform = "", et.style.background = "var(--card)", et.style.borderColor = `color-mix(in srgb, ${_} 32%, var(--line))`, et.style.boxShadow = ""
                            },
                            children: V
                        }, V))
                    })]
                })]
            }), n[0] = _, n[1] = h, n[2] = d, n[3] = s, n[4] = r, n[5] = b
        } else b = n[5];
        return b
    }

    function Op(c) {
        return c.widgetConfig
    }
    const Cu = ["Ask me anything…", "Chat in any language…"],
        Cp = () => w.jsx("svg", {
            width: 16,
            height: 16,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: w.jsx("path", {
                d: "M5 12l14-7-5 14-2-6z"
            })
        });

    function Mp({
        onSend: c,
        disabled: n
    }) {
        const [s, r] = J.useState(""), d = J.useRef(null), {
            placeholder: h,
            accentColor: p
        } = Yt(j => j.widgetConfig), _ = p ? ? "#5840bb", [b, g] = J.useState(0), [v, T] = J.useState(!0), O = J.useRef(null);
        J.useEffect(() => {
            const j = setInterval(() => {
                T(!1), O.current = setTimeout(() => {
                    g(H => (H + 1) % Cu.length), T(!0)
                }, 300)
            }, 5e3);
            return () => {
                clearInterval(j), O.current && clearTimeout(O.current)
            }
        }, []);
        const Y = () => {
                const j = s.trim();
                !j || n || (c(j), r(""), d.current ? .focus())
            },
            q = j => {
                j.key === "Enter" && !j.shiftKey && (j.preventDefault(), Y())
            },
            R = !!s.trim() && !n;
        return w.jsxs("div", {
            className: "flex items-center gap-[9px] shrink-0 px-3.5 pt-3 pb-2 rounded-b-[22px]",
            style: {
                borderTop: "1px solid var(--line)",
                background: "var(--card)"
            },
            children: [w.jsxs("div", {
                className: "relative flex-1 min-w-0",
                children: [w.jsx("input", {
                    ref: d,
                    value: s,
                    onChange: j => r(j.target.value),
                    onKeyDown: q,
                    placeholder: "",
                    maxLength: 300,
                    disabled: n,
                    className: "w-full outline-none cw-font-sans rounded-full py-[11px] leading-[1.4]",
                    style: {
                        fontSize: 16,
                        paddingLeft: 16,
                        paddingRight: 16,
                        border: "1.5px solid var(--line)",
                        color: "var(--ink)",
                        background: "var(--paper)",
                        transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s"
                    },
                    onFocus: j => {
                        j.currentTarget.style.borderColor = _, j.currentTarget.style.background = "#fff", j.currentTarget.style.boxShadow = `0 0 0 3px color-mix(in srgb, ${_} 15%, transparent)`
                    },
                    onBlur: j => {
                        j.currentTarget.style.borderColor = "var(--line)", j.currentTarget.style.background = "var(--paper)", j.currentTarget.style.boxShadow = ""
                    }
                }), s === "" && w.jsx("span", {
                    className: "absolute inset-y-0 left-4 flex items-center pointer-events-none cw-font-sans",
                    style: {
                        fontSize: 16,
                        color: "var(--muted)",
                        opacity: n || v ? 1 : 0,
                        transition: n ? "none" : "opacity 0.3s ease"
                    },
                    children: b === 0 || n ? h ? ? Cu[0] : Cu[b]
                })]
            }), w.jsx("button", {
                onClick: Y,
                disabled: !R,
                "aria-label": "Send message",
                className: "flex items-center justify-center shrink-0 rounded-full border-none text-white w-10 h-10",
                style: {
                    background: R ? `linear-gradient(140deg, ${_}dd 0%, ${_} 60%)` : "var(--line)",
                    cursor: R ? "pointer" : "default",
                    transition: "background 0.15s, transform 0.15s var(--spring-bounce)",
                    boxShadow: R ? `0 4px 14px -4px color-mix(in srgb, ${_} 60%, transparent)` : "none"
                },
                onMouseEnter: j => {
                    R && (j.currentTarget.style.transform = "scale(1.07)")
                },
                onMouseLeave: j => {
                    j.currentTarget.style.transform = ""
                },
                children: w.jsx(Cp, {})
            })]
        })
    }

    function Np() {
        const c = Rt.c(2),
            {
                widgetBranding: n
            } = Yt(Dp);
        if (!n) return null;
        let s;
        c[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
            color: "var(--muted)",
            background: "var(--card)"
        }, c[0] = s) : s = c[0];
        let r;
        return c[1] === Symbol.for("react.memo_cache_sentinel") ? (r = w.jsxs("div", {
            className: "shrink-0 text-center cw-font-sans pb-[9px] pt-[6px] text-[10.5px] leading-none rounded-b-[22px]",
            style: s,
            children: ["Powered by ", w.jsx("b", {
                children: "Shiprocket"
            })]
        }), c[1] = r) : r = c[1], r
    }

    function Dp(c) {
        return c.widgetConfig
    }
    const jp = {
        success: "var(--ok)",
        error: "var(--bad)",
        warning: "var(--warn)",
        info: "var(--eva)"
    };

    function Rp(c) {
        const n = Rt.c(28),
            {
                toast: s
            } = c,
            {
                hide: r,
                startExit: d
            } = Fn();
        let h, p;
        n[0] !== r || n[1] !== d || n[2] !== s.duration || n[3] !== s.id ? (h = () => {
            if (s.duration <= 0) return;
            const k = s.duration - 240,
                G = setTimeout(() => d(s.id), Math.max(k, 0)),
                W = setTimeout(() => r(s.id), s.duration);
            return () => {
                clearTimeout(G), clearTimeout(W)
            }
        }, p = [s.id, s.duration, r, d], n[0] = r, n[1] = d, n[2] = s.duration, n[3] = s.id, n[4] = h, n[5] = p) : (h = n[4], p = n[5]), J.useEffect(h, p);
        const _ = jp[s.type] ? ? "var(--eva)",
            b = `w-full max-w-[300px] flex items-center gap-2.5 px-3.5 py-2.5 pointer-events-auto cursor-pointer cw-font-sans ${s.exiting?"cw-toast-out":"cw-toast-in"}`,
            g = `3.5px solid ${_}`;
        let v;
        n[6] !== g ? (v = {
            background: "var(--card)",
            border: "1px solid var(--line)",
            borderLeft: g,
            borderRadius: "var(--r-lg)",
            boxShadow: "var(--shadow-pop)"
        }, n[6] = g, n[7] = v) : v = n[7];
        let T;
        n[8] !== r || n[9] !== s.id ? (T = () => r(s.id), n[8] = r, n[9] = s.id, n[10] = T) : T = n[10];
        let O;
        n[11] !== _ ? (O = w.jsx("div", {
            className: "shrink-0 w-2 h-2 rounded-full",
            style: {
                background: _
            }
        }), n[11] = _, n[12] = O) : O = n[12];
        let Y;
        n[13] === Symbol.for("react.memo_cache_sentinel") ? (Y = {
            color: "var(--ink)"
        }, n[13] = Y) : Y = n[13];
        let q;
        n[14] !== r || n[15] !== s.action || n[16] !== s.id ? (q = s.action && w.jsx("button", {
            type: "button",
            className: "inline cw-font-sans text-[13px] font-semibold underline cursor-pointer border-none bg-transparent p-0 ml-1.5 align-baseline",
            style: {
                color: "var(--eva)"
            },
            onClick: k => {
                k.stopPropagation(), s.action ? .onClick(), r(s.id)
            },
            children: s.action.label
        }), n[14] = r, n[15] = s.action, n[16] = s.id, n[17] = q) : q = n[17];
        let R;
        n[18] !== q || n[19] !== s.message ? (R = w.jsxs("span", {
            className: "flex-1 text-[13px] font-medium leading-snug",
            style: Y,
            children: [s.message, q]
        }), n[18] = q, n[19] = s.message, n[20] = R) : R = n[20];
        let j;
        n[21] === Symbol.for("react.memo_cache_sentinel") ? (j = w.jsx("span", {
            className: "text-[15px] leading-none",
            style: {
                color: "var(--muted)"
            },
            children: "×"
        }), n[21] = j) : j = n[21];
        let H;
        return n[22] !== R || n[23] !== b || n[24] !== v || n[25] !== T || n[26] !== O ? (H = w.jsxs("div", {
            className: b,
            style: v,
            onClick: T,
            children: [O, R, j]
        }), n[22] = R, n[23] = b, n[24] = v, n[25] = T, n[26] = O, n[27] = H) : H = n[27], H
    }

    function Up() {
        const c = Rt.c(4),
            n = Fn(Bp);
        if (!n.length) return null;
        let s;
        c[0] !== n ? (s = n.map(Hp), c[0] = n, c[1] = s) : s = c[1];
        let r;
        return c[2] !== s ? (r = w.jsx("div", {
            className: "absolute bottom-3 left-0 right-0 flex flex-col items-center gap-2 z-30 pointer-events-none px-3",
            children: s
        }), c[2] = s, c[3] = r) : r = c[3], r
    }

    function Hp(c) {
        return w.jsx(Rp, {
            toast: c
        }, c.id)
    }

    function Bp(c) {
        return c.toasts
    }

    function Yp(c) {
        const n = Rt.c(19),
            {
                option: s,
                selectedValue: r,
                availability: d,
                onSelect: h,
                accentColor: p
            } = c;
        let _;
        n[0] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
            color: "var(--muted)"
        }, n[0] = _) : _ = n[0];
        let b;
        n[1] !== s.name ? (b = w.jsx("div", {
            className: "cw-font-sans text-[11px] font-bold uppercase tracking-[0.04em]",
            style: _,
            children: s.name
        }), n[1] = s.name, n[2] = b) : b = n[2];
        let g;
        if (n[3] !== p || n[4] !== d || n[5] !== h || n[6] !== s.values || n[7] !== r) {
            let O;
            n[9] !== p || n[10] !== d || n[11] !== h || n[12] !== r ? (O = Y => {
                const q = Y === r,
                    R = d[Y] ? ? !1;
                return w.jsx("button", {
                    onClick: () => {
                        R && h(Y)
                    },
                    disabled: !R,
                    className: "cw-font-sans text-[12.5px] font-semibold px-[13px] py-[7px] rounded-[9px] transition-colors",
                    style: {
                        cursor: R ? "pointer" : "not-allowed",
                        color: R ? q ? p : "var(--ink)" : "var(--muted)",
                        background: R ? q ? `color-mix(in srgb, ${p} 10%, var(--card))` : "var(--card)" : "var(--paper-2)",
                        border: q && R ? `1.5px solid ${p}` : "1.5px solid var(--line)",
                        textDecoration: R ? "none" : "line-through"
                    },
                    children: Y
                }, Y)
            }, n[9] = p, n[10] = d, n[11] = h, n[12] = r, n[13] = O) : O = n[13], g = s.values.map(O), n[3] = p, n[4] = d, n[5] = h, n[6] = s.values, n[7] = r, n[8] = g
        } else g = n[8];
        let v;
        n[14] !== g ? (v = w.jsx("div", {
            className: "flex flex-wrap gap-[7px]",
            children: g
        }), n[14] = g, n[15] = v) : v = n[15];
        let T;
        return n[16] !== b || n[17] !== v ? (T = w.jsxs("div", {
            className: "flex flex-col gap-[7px]",
            children: [b, v]
        }), n[16] = b, n[17] = v, n[18] = T) : T = n[18], T
    }
    const Ms = "w-full cw-font-sans p-3 rounded-[12px] text-[13.5px] font-bold transition-opacity";

    function Ns(c, n) {
        return {
            cursor: n ? "pointer" : "not-allowed",
            border: "none",
            background: n ? `linear-gradient(140deg, ${c}dd 0%, ${c} 60%)` : "var(--line)",
            color: n ? "#ffffff" : "var(--muted)",
            boxShadow: n ? `0 6px 16px -6px color-mix(in srgb, ${c} 55%, transparent)` : "none"
        }
    }

    function qp(c, n) {
        return {
            cursor: n ? "pointer" : "not-allowed",
            background: "transparent",
            color: n ? c : "var(--muted)",
            border: n ? `1.5px solid color-mix(in srgb, ${c} 40%, transparent)` : "1.5px solid var(--line)",
            boxShadow: "none"
        }
    }

    function Lp(c) {
        const n = Rt.c(19),
            {
                accentColor: s,
                ctaLabels: r,
                canAdd: d,
                adding: h,
                onAddToCart: p,
                onBuyNow: _
            } = c,
            g = !Yt(kp) ? .hideBuyNow;
        let v;
        n[0] === Symbol.for("react.memo_cache_sentinel") ? (v = {
            background: "var(--paper)",
            borderTop: "1px solid var(--line)"
        }, n[0] = v) : v = n[0];
        const T = !d || h;
        let O;
        n[1] !== s || n[2] !== d || n[3] !== g ? (O = g ? qp(s, d) : Ns(s, d), n[1] = s, n[2] = d, n[3] = g, n[4] = O) : O = n[4];
        const Y = d ? h ? "…" : r.addToCart : "Out of stock";
        let q;
        n[5] !== p || n[6] !== T || n[7] !== O || n[8] !== Y ? (q = w.jsx("button", {
            onClick: p,
            disabled: T,
            className: Ms,
            style: O,
            children: Y
        }), n[5] = p, n[6] = T, n[7] = O, n[8] = Y, n[9] = q) : q = n[9];
        let R;
        n[10] !== s || n[11] !== d || n[12] !== r || n[13] !== _ || n[14] !== g ? (R = g && w.jsx("button", {
            onClick: _,
            disabled: !d,
            className: Ms,
            style: Ns(s, d),
            children: d ? r.buyNow : "Out of stock"
        }), n[10] = s, n[11] = d, n[12] = r, n[13] = _, n[14] = g, n[15] = R) : R = n[15];
        let j;
        return n[16] !== q || n[17] !== R ? (j = w.jsxs("div", {
            className: "sticky bottom-0 flex flex-col gap-[8px] -mx-4 -mb-4 px-4 pt-3 pb-4",
            style: v,
            children: [q, R]
        }), n[16] = q, n[17] = R, n[18] = j) : j = n[18], j
    }

    function kp(c) {
        return c.widgetConfig.storeOverrides
    }

    function Gp(c) {
        const n = Rt.c(29),
            {
                title: s,
                image: r,
                price: d,
                compareAt: h
            } = c,
            p = h != null && h > d;
        let _;
        n[0] !== h || n[1] !== p || n[2] !== d ? (_ = p ? Math.round((h - d) / h * 100) : null, n[0] = h, n[1] = p, n[2] = d, n[3] = _) : _ = n[3];
        const b = _;
        let g;
        n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
            background: "var(--paper-2)",
            border: "1px solid var(--line)"
        }, n[4] = g) : g = n[4];
        let v;
        n[5] !== r || n[6] !== s ? (v = w.jsx("div", {
            className: "w-[56px] h-[56px] rounded-[12px] shrink-0 overflow-hidden flex items-center justify-center",
            style: g,
            children: r ? w.jsx("img", {
                src: r,
                alt: s,
                className: "w-full h-full object-cover"
            }) : w.jsx("span", {
                className: "cw-font-sans text-[9px]",
                style: {
                    color: "var(--muted)"
                },
                children: "No image"
            })
        }), n[5] = r, n[6] = s, n[7] = v) : v = n[7];
        let T;
        n[8] === Symbol.for("react.memo_cache_sentinel") ? (T = {
            color: "var(--ink)"
        }, n[8] = T) : T = n[8];
        let O;
        n[9] !== s ? (O = w.jsx("div", {
            className: "cw-font-sans text-[13.5px] font-semibold leading-[1.3] line-clamp-2",
            style: T,
            children: s
        }), n[9] = s, n[10] = O) : O = n[10];
        let Y;
        n[11] === Symbol.for("react.memo_cache_sentinel") ? (Y = {
            color: "var(--ink)"
        }, n[11] = Y) : Y = n[11];
        const q = Number(d);
        let R;
        n[12] !== q ? (R = q.toLocaleString("en-IN"), n[12] = q, n[13] = R) : R = n[13];
        let j;
        n[14] !== R ? (j = w.jsxs("span", {
            className: "cw-font-sans text-[16px] font-semibold",
            style: Y,
            children: ["₹", R]
        }), n[14] = R, n[15] = j) : j = n[15];
        let H;
        n[16] !== h || n[17] !== b || n[18] !== p ? (H = p && w.jsxs(w.Fragment, {
            children: [w.jsxs("span", {
                className: "cw-font-sans line-through text-[11.5px]",
                style: {
                    color: "var(--muted)"
                },
                children: ["₹", Number(h).toLocaleString("en-IN")]
            }), w.jsxs("span", {
                className: "cw-font-sans text-[10.5px] font-bold px-1.5 rounded",
                style: {
                    color: "var(--ok)",
                    background: "color-mix(in srgb, var(--ok) 10%, transparent)"
                },
                children: [b, "% off"]
            })]
        }), n[16] = h, n[17] = b, n[18] = p, n[19] = H) : H = n[19];
        let k;
        n[20] !== H || n[21] !== j ? (k = w.jsxs("div", {
            className: "flex items-baseline gap-[6px]",
            children: [j, H]
        }), n[20] = H, n[21] = j, n[22] = k) : k = n[22];
        let G;
        n[23] !== k || n[24] !== O ? (G = w.jsxs("div", {
            className: "flex flex-col gap-[2px] min-w-0",
            children: [O, k]
        }), n[23] = k, n[24] = O, n[25] = G) : G = n[25];
        let W;
        return n[26] !== G || n[27] !== v ? (W = w.jsxs("div", {
            className: "flex items-center gap-3",
            children: [v, G]
        }), n[26] = G, n[27] = v, n[28] = W) : W = n[28], W
    }

    function Qp(c) {
        const n = Rt.c(26),
            {
                product: s,
                accentColor: r,
                ctaLabels: d
            } = c;
        let h;
        n[0] !== s ? (h = () => gp(s), n[0] = s, n[1] = h) : h = n[1];
        const [p, _] = J.useState(h), [b, g] = J.useState(!1), v = Gl(Zp), {
            trackEvent: T
        } = In();
        let O, Y, q, R, j, H;
        if (n[2] !== r || n[3] !== b || n[4] !== v || n[5] !== s || n[6] !== p || n[7] !== T) {
            const W = s.variants ? ? [],
                at = [...s.options ? ? []].sort(Xp),
                X = Cs(W, p),
                V = vp(W, at, p);
            O = X != null && Pn(X);
            const P = X ? .price ? ? s.price,
                et = X ? .compareAtPrice ? ? s.mrp_price,
                pt = X ? .images ? .[0] ? ? s.images ? .[0];
            Y = async () => {
                if (!O || b || !X ? .channel_variant_id) return;
                g(!0), T("add_to_cart", {
                    product_title: s.title,
                    product_handle: s.handle ? ? null,
                    product_price: P,
                    product_link: s.product_link,
                    page: Je(),
                    p_id: s.channel_product_id ? ? null,
                    v_id: X.channel_variant_id
                });
                const ft = await Ss(s, {
                    variantId: X.channel_variant_id,
                    variantLabel: X.variantTitle
                });
                g(!1), ft && v()
            }, q = () => {
                !O || !X ? .channel_variant_id || (T("buy_now", {
                    product_title: s.title,
                    product_handle: s.handle ? ? null,
                    product_price: P,
                    product_link: s.product_link,
                    page: Je(),
                    p_id: s.channel_product_id ? ? null,
                    v_id: X.channel_variant_id
                }), v(), zs(s, X.channel_variant_id))
            }, R = "flex flex-col gap-[14px] px-4 pb-4", j = w.jsx(Gp, {
                title: s.title,
                image: pt,
                price: P,
                compareAt: et
            }), H = at.map(ft => w.jsx(Yp, {
                option: ft,
                selectedValue: p[ft.name],
                availability: V[ft.name] ? ? {},
                onSelect: yt => _({ ...p,
                    [ft.name]: yt
                }),
                accentColor: r
            }, ft.name)), n[2] = r, n[3] = b, n[4] = v, n[5] = s, n[6] = p, n[7] = T, n[8] = O, n[9] = Y, n[10] = q, n[11] = R, n[12] = j, n[13] = H
        } else O = n[8], Y = n[9], q = n[10], R = n[11], j = n[12], H = n[13];
        let k;
        n[14] !== r || n[15] !== b || n[16] !== O || n[17] !== d || n[18] !== Y || n[19] !== q ? (k = w.jsx(Lp, {
            accentColor: r,
            ctaLabels: d,
            canAdd: O,
            adding: b,
            onAddToCart: Y,
            onBuyNow: q
        }), n[14] = r, n[15] = b, n[16] = O, n[17] = d, n[18] = Y, n[19] = q, n[20] = k) : k = n[20];
        let G;
        return n[21] !== R || n[22] !== j || n[23] !== H || n[24] !== k ? (G = w.jsxs("div", {
            className: R,
            children: [j, H, k]
        }), n[21] = R, n[22] = j, n[23] = H, n[24] = k, n[25] = G) : G = n[25], G
    }

    function Xp(c, n) {
        return c.position - n.position
    }

    function Zp(c) {
        return c.close
    }

    function Vp() {
        const c = Rt.c(23),
            n = Gl(Fp),
            s = Gl(Wp),
            r = Yt($p);
        let d;
        if (c[0] === Symbol.for("react.memo_cache_sentinel") ? (d = [], c[0] = d) : d = c[0], J.useEffect(Kp, d), !n) return null;
        const h = r.accentColor ? ? "#5840bb",
            p = r.ctaLabels ? .addToCart ? ? "Add to bag",
            _ = r.ctaLabels ? .buyNow ? ? "Buy now";
        let b;
        c[1] !== p || c[2] !== _ ? (b = {
            addToCart: p,
            buyNow: _
        }, c[1] = p, c[2] = _, c[3] = b) : b = c[3];
        const g = b;
        let v;
        c[4] === Symbol.for("react.memo_cache_sentinel") ? (v = {
            background: "color-mix(in srgb, var(--ink) 40%, transparent)"
        }, c[4] = v) : v = c[4];
        let T;
        c[5] !== s ? (T = w.jsx("div", {
            className: "absolute inset-0 cw-scrim-in",
            style: v,
            onClick: s
        }), c[5] = s, c[6] = T) : T = c[6];
        let O;
        c[7] === Symbol.for("react.memo_cache_sentinel") ? (O = {
            background: "var(--paper)",
            borderRadius: "var(--r-xl) var(--r-xl) 0 0",
            boxShadow: "var(--shadow-pop)"
        }, c[7] = O) : O = c[7];
        let Y;
        c[8] === Symbol.for("react.memo_cache_sentinel") ? (Y = w.jsx("div", {
            className: "w-9 h-1 rounded-full",
            style: {
                background: "var(--line)"
            }
        }), c[8] = Y) : Y = c[8];
        let q;
        c[9] === Symbol.for("react.memo_cache_sentinel") ? (q = {
            color: "var(--muted)"
        }, c[9] = q) : q = c[9];
        let R;
        c[10] !== s ? (R = w.jsxs("div", {
            className: "relative shrink-0 flex justify-center pt-[10px] pb-2",
            children: [Y, w.jsx("button", {
                onClick: s,
                "aria-label": "Close",
                className: "absolute top-[6px] right-3 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer bg-transparent border-none cw-font-sans text-[14px]",
                style: q,
                children: "✕"
            })]
        }), c[10] = s, c[11] = R) : R = c[11];
        const j = n.channel_product_id ? ? n.product_id ? ? n.title;
        let H;
        c[12] !== h || c[13] !== g || c[14] !== n || c[15] !== j ? (H = w.jsx("div", {
            className: "flex-1 overflow-y-auto overscroll-contain cw-scroll",
            children: w.jsx(Qp, {
                product: n,
                accentColor: h,
                ctaLabels: g
            }, j)
        }), c[12] = h, c[13] = g, c[14] = n, c[15] = j, c[16] = H) : H = c[16];
        let k;
        c[17] !== H || c[18] !== R ? (k = w.jsxs("div", {
            className: "absolute bottom-0 left-0 right-0 flex flex-col cw-sheet-in max-h-[85%]",
            style: O,
            children: [R, H]
        }), c[17] = H, c[18] = R, c[19] = k) : k = c[19];
        let G;
        return c[20] !== k || c[21] !== T ? (G = w.jsxs("div", {
            className: "absolute inset-0 z-20",
            children: [T, k]
        }), c[20] = k, c[21] = T, c[22] = G) : G = c[22], G
    }

    function Kp() {
        return Jp
    }

    function Jp() {
        Gl.getState().close()
    }

    function $p(c) {
        return c.widgetConfig
    }

    function Wp(c) {
        return c.close
    }

    function Fp(c) {
        return c.product
    }
    async function Ds(c, n) {
        const s = await fetch(`${Ts}/chatbot/api/ve1/session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                domain: c,
                cookie_id: n,
                page: Je(),
                attributes: hs()
            })
        });
        if (!s.ok) throw new Error(`Session creation failed: ${s.status}`);
        const r = s.headers.get("c_jwt"),
            d = s.headers.get("e360_session"),
            h = s.headers.get("c_jwt_expires_at");
        if (!r) throw new Error("No JWT in session response");
        if (!d) throw new Error("No Fastrr Assist session in session response");
        return {
            jwt: r,
            e360_session: d,
            expiresAt: h
        }
    }

    function Ip(c, n) {
        const s = c.split(`

`),
            r = s.pop() ? ? "";
        for (const d of s) {
            const h = d.split(`
`);
            let p = "message";
            const _ = [];
            for (const v of h) v.startsWith("event:") ? p = v.slice(6).trim() : v.startsWith("data:") && _.push(v.slice(5).trim());
            const b = _.join(`
`);
            let g = b;
            try {
                g = JSON.parse(b)
            } catch {}
            n({
                event: p,
                data: g
            })
        }
        return r
    }
    async function js(c, n) {
        return fetch(`${Ts}${t1}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "text/event-stream",
                "Cache-Control": "no-cache",
                ...Ou()
            },
            body: JSON.stringify({
                message: c,
                page: Je(),
                device_id: n1(),
                umid: a1(),
                trace_id: Gt.getState().refreshTraceId(),
                src_usid: c1(),
                ...ps() !== null ? {
                    page_data: {
                        type: "product",
                        details: ps()
                    }
                } : {}
            }),
            signal: n
        })
    }
    async function Rs() {
        const {
            cookieId: c,
            setJwt: n
        } = ae.getState();
        if (!c) throw new Error("Cannot refresh session: cookieId not resolved");
        const s = Wn(),
            {
                jwt: r,
                e360_session: d,
                expiresAt: h
            } = await Ds(s, c);
        ue.set(Kn, r), h && ue.set(Jn, h), he.set("e360_session", d, 1), n(r)
    }
    async function Pp(c, n, s) {
        const {
            setStatus: r
        } = ae.getState();
        ae.getState().jwt || await Rs();
        let d = await js(c, s);
        if (d.status === 401 && (ue.remove(Kn), await Rs(), d = await js(c, s)), d.status === 401) throw ae.getState().clearSession(), new Error("Session expired");
        if (d.status === 403) throw r("access-denied"), new Error("Access denied");
        if (!d.ok) throw new Error(`Stream request failed: ${d.status}`);
        const h = d.body.getReader(),
            p = new TextDecoder;
        let _ = "";
        for (;;) {
            const {
                done: b,
                value: g
            } = await h.read();
            if (b) break;
            _ += p.decode(g, {
                stream: !0
            }), _ = Ip(_, ({
                event: v,
                data: T
            }) => {
                if (v === "token") {
                    const O = T ? .text ? ? "";
                    O && n.onToken(O)
                } else if (v === "final") {
                    const O = T;
                    n.onFinal({
                        messageId: String(O ? .message_id ? ? ""),
                        content: O ? .response ? ? "",
                        escalated: O ? .escalated ? ? !1,
                        products: O ? .products ? As(O.products) : void 0,
                        follow_ups: O ? .follow_ups
                    })
                } else if (v === "loading") {
                    const O = T ? .text ? ? "";
                    O && n.onLoading ? .(O)
                } else if (v === "error") {
                    const O = T;
                    n.onError(new Error(O ? .message ? ? "Stream error from server"))
                }
            })
        }
    }
    const t0 = 720 * 60 * 60 * 1e3,
        Mu = c => `${us}${c}`;

    function Us(c) {
        try {
            const n = Mu(c),
                s = ue.get(n);
            if (!s) return [];
            const r = JSON.parse(s);
            if (!r || typeof r != "object" || Array.isArray(r)) return [];
            const d = r;
            return Array.isArray(d.messages) ? d.sr_chatbot_updated_at && Date.now() - new Date(d.sr_chatbot_updated_at).getTime() > t0 ? (ue.remove(n), []) : d.messages.map(h => {
                if (!h ? .products) return h;
                try {
                    return { ...h,
                        products: As(h.products)
                    }
                } catch {
                    return { ...h,
                        products: void 0
                    }
                }
            }) : []
        } catch {
            return []
        }
    }

    function e0(c, n, s) {
        try {
            const d = [...Us(c), n, s],
                h = Yt.getState().widgetConfig.maxStoredMessages ? ? Fa.maxStoredMessages ? ? 25,
                p = d.length > h ? d.slice(d.length - h) : d,
                _ = {
                    v: 1,
                    sr_chatbot_updated_at: new Date().toISOString(),
                    messages: p
                };
            ue.set(Mu(c), JSON.stringify(_))
        } catch {}
    }

    function l0(c) {
        try {
            const n = Mu(c);
            for (const s of ue.keys()) s.startsWith(us) && s !== n && ue.remove(s)
        } catch {}
    }

    function a0() {
        const c = J.useRef(null),
            {
                messages: n,
                isStreaming: s,
                addMessage: r,
                updateMessage: d,
                removeMessage: h,
                clearErrorMessages: p,
                setStreaming: _
            } = Gt(),
            b = J.useCallback(async (O, Y, q, R, j) => {
                try {
                    await Pp(O, {
                        onToken: H => {
                            d(q, k => ({
                                content: (k.status === "loading" ? "" : k.content) + H,
                                status: "streaming"
                            }))
                        },
                        onFinal: H => {
                            d(q, {
                                content: H.content,
                                escalated: H.escalated,
                                products: H.products,
                                follow_ups: H.follow_ups,
                                status: "normal"
                            });
                            const {
                                cookieId: k
                            } = ae.getState();
                            if (k) {
                                const G = {
                                        role: "user",
                                        content: O,
                                        created_at: j,
                                        escalated: !1
                                    },
                                    W = {
                                        role: "assistant",
                                        content: H.content,
                                        created_at: new Date().toISOString(),
                                        escalated: H.escalated,
                                        products: H.products,
                                        follow_ups: H.follow_ups
                                    };
                                e0(k, G, W)
                            }
                        },
                        onError: () => {
                            h(q), d(Y, {
                                status: "error"
                            })
                        },
                        onLoading: H => {
                            d(q, {
                                loadingText: H,
                                status: "loading"
                            })
                        }
                    }, R.signal)
                } catch (H) {
                    H instanceof DOMException && H.name === "AbortError" || (h(q), d(Y, {
                        status: "error"
                    }))
                } finally {
                    const H = Gt.getState().messages.find(k => k.id === q);
                    (H ? .status === "loading" || H ? .status === "streaming") && (h(q), d(Y, {
                        status: "error"
                    })), _(!1, null)
                }
            }, [d, h, _]),
            g = J.useCallback(async O => {
                const {
                    status: Y
                } = ae.getState();
                if (Y !== "ready" || s) return;
                Gl.getState().close(), c.current ? .abort();
                const q = new AbortController;
                c.current = q, p();
                const R = `user-${Date.now()}`,
                    j = new Date().toISOString(),
                    H = {
                        id: R,
                        role: "user",
                        content: O,
                        created_at: j,
                        escalated: !1,
                        status: "normal"
                    },
                    k = `assistant-${Date.now()}`,
                    G = {
                        id: k,
                        role: "assistant",
                        content: "",
                        created_at: new Date().toISOString(),
                        escalated: !1,
                        status: "loading"
                    };
                r(H), r(G), _(!0, k), await b(O, R, k, q, j)
            }, [s, r, p, _, b]),
            v = J.useCallback(async O => {
                const {
                    status: Y
                } = ae.getState();
                if (Y !== "ready" || s) return;
                const R = Gt.getState().messages.find(G => G.id === O);
                if (!R) return;
                Gl.getState().close(), c.current ? .abort();
                const j = new AbortController;
                c.current = j;
                const H = `assistant-${Date.now()}`,
                    k = {
                        id: H,
                        role: "assistant",
                        content: "",
                        created_at: new Date().toISOString(),
                        escalated: !1,
                        status: "loading"
                    };
                d(O, {
                    status: "normal"
                }), r(k), _(!0, H), await b(R.content, O, H, j, R.created_at)
            }, [s, d, r, _, b]),
            T = J.useCallback(() => {
                c.current ? .abort()
            }, []);
        return {
            messages: n,
            isStreaming: s,
            sendMessage: g,
            retryMessage: v,
            abortStream: T
        }
    }
    const Hs = 480;

    function n0() {
        const c = Rt.c(2),
            [n, s] = J.useState(i0);
        let r, d;
        return c[0] === Symbol.for("react.memo_cache_sentinel") ? (r = () => {
            const h = s1(Hs),
                p = _ => s(_.matches);
            return h.addEventListener("change", p), () => h.removeEventListener("change", p)
        }, d = [], c[0] = r, c[1] = d) : (r = c[0], d = c[1]), J.useEffect(r, d), n
    }

    function i0() {
        return o1() <= Hs
    }

    function Bs(c) {
        try {
            document.body.classList.toggle(ss, c)
        } catch {}
    }

    function u0() {
        const c = Rt.c(31),
            {
                sendMessage: n,
                retryMessage: s,
                isStreaming: r
            } = a0(),
            d = Gt(s0),
            h = Yt(o0),
            p = n0(),
            _ = d.length === 0;
        let b, g;
        c[0] !== p ? (b = () => {
            if (p) return Bs(!0), c0
        }, g = [p], c[0] = p, c[1] = b, c[2] = g) : (b = c[1], g = c[2]), J.useEffect(b, g);
        const {
            widgetPosition: v,
            popupWidth: T,
            popupHeight: O
        } = h, Y = h.launcherZIndex ? ? 2147483647;
        let q;
        c[3] !== p || c[4] !== O || c[5] !== T || c[6] !== v ? .x || c[7] !== v ? .y || c[8] !== Y ? (q = p ? {
            inset: 0,
            background: "var(--card)",
            borderRadius: 0,
            border: "none",
            boxShadow: "none",
            zIndex: Y
        } : { ...(v ? .x ? ? 3) >= 50 ? {
                left: `max(8px, calc(${100-(v?.x??3)}vw - 24px))`
            } : {
                right: `max(8px, ${v?.x??3}vw)`
            },
            ...(v ? .y ? ? 3) >= 50 ? {
                top: `calc(${100-(v?.y??3)}vh + 10px)`
            } : {
                bottom: `calc(${v?.y??3}vh + 72px)`
            },
            width: T ? ? 384,
            maxWidth: "calc(100vw - 36px)",
            height: O ? ? "min(700px, calc(100vh - 120px))",
            maxHeight: "calc(100vh - 120px)",
            background: "var(--card)",
            borderRadius: 22,
            border: "none",
            boxShadow: "0 1px 1px rgba(0,0,0,.04), 0 10px 28px -14px rgba(33,27,24,.22), 0 44px 80px -28px rgba(88,64,187,.36)",
            zIndex: Y
        }, c[3] = p, c[4] = O, c[5] = T, c[6] = v ? .x, c[7] = v ? .y, c[8] = Y, c[9] = q) : q = c[9];
        const R = q;
        let j;
        c[10] !== n ? (j = pt => {
            n(pt)
        }, c[10] = n, c[11] = j) : j = c[11];
        const H = j;
        let k;
        c[12] !== p ? (k = w.jsx(D1, {
            isMobile: p
        }), c[12] = p, c[13] = k) : k = c[13];
        let G;
        c[14] !== H || c[15] !== s || c[16] !== _ ? (G = _ ? w.jsx(Ap, {
            onQuestionSelect: H
        }) : w.jsx(zp, {
            onQuickReply: H,
            onRetry: s
        }), c[14] = H, c[15] = s, c[16] = _, c[17] = G) : G = c[17];
        let W, at;
        c[18] === Symbol.for("react.memo_cache_sentinel") ? (W = w.jsx(Up, {}), at = w.jsx(Vp, {}), c[18] = W, c[19] = at) : (W = c[18], at = c[19]);
        let X;
        c[20] !== G ? (X = w.jsxs("div", {
            className: "relative flex-1 flex flex-col overflow-hidden",
            children: [G, W, at]
        }), c[20] = G, c[21] = X) : X = c[21];
        let V;
        c[22] !== H || c[23] !== r ? (V = w.jsx(Mp, {
            onSend: H,
            disabled: r
        }), c[22] = H, c[23] = r, c[24] = V) : V = c[24];
        let P;
        c[25] === Symbol.for("react.memo_cache_sentinel") ? (P = w.jsx(Np, {}), c[25] = P) : P = c[25];
        let et;
        return c[26] !== R || c[27] !== k || c[28] !== X || c[29] !== V ? (et = w.jsxs("div", {
            className: "fixed flex flex-col overflow-hidden cw-panel-in",
            style: R,
            children: [k, X, V, P]
        }), c[26] = R, c[27] = k, c[28] = X, c[29] = V, c[30] = et) : et = c[30], et
    }

    function c0() {
        return Bs(!1)
    }

    function o0(c) {
        return c.widgetConfig
    }

    function s0(c) {
        return c.messages
    }
    const r0 = "https://gateway.pickrr.com/public-api/api/v1/external/shopping-assistant/config";

    function f0(c) {
        const n = {};
        return c.widgetPosition != null && (n.widgetPosition = c.widgetPosition), c.agentName != null && (n.agentName = c.agentName), c.greeting != null && (n.greeting = c.greeting), c.accentColor != null && (n.accentColor = c.accentColor), c.widgetIcon != null && (n.widgetIcon = c.widgetIcon), c.iconImage != null && (n.iconImage = c.iconImage), c.hideOnCartPage != null && (n.hideOnCartPage = c.hideOnCartPage), c.showEvaOn != null && (n.showEvaOn = c.showEvaOn), c.chatbotEnabled != null && (n.chatbotEnabled = c.chatbotEnabled), c.headerTextColor != null && (n.headerTextColor = c.headerTextColor), c.userBubbleTextColor != null && (n.userBubbleTextColor = c.userBubbleTextColor), c.pageQuestions != null && (n.pageQuestions = c.pageQuestions), c.storeOverrides != null && (n.storeOverrides = c.storeOverrides), n
    }
    async function d0() {
        const c = `${r0}?domain=${encodeURIComponent(Wn())}`,
            s = (await up(c, {})).data ? .ui_config;
        return s ? f0(s) : {}
    }

    function m0() {
        const c = ae(r => r.status),
            n = Gt(r => r.isOpen),
            {
                trackEvent: s
            } = In();
        J.useEffect(() => {
            if (c !== "idle") return;
            const {
                setJwt: r,
                setStatus: d,
                setError: h,
                setCookieId: p
            } = ae.getState(), {
                setConfig: _,
                setInitialized: b
            } = Yt.getState();
            d("loading");
            async function g() {
                try {
                    p1();
                    const v = await l1();
                    p(v);
                    const T = ue.get(Kn),
                        O = ue.get(Jn),
                        Y = O ? new Date(O) <= new Date : !1;
                    T && !Y && r(T);
                    const q = Yt.getState().initialized;
                    let R = q;
                    if (!q) try {
                        const j = await d0();
                        _(j), b(!0), R = !0
                    } catch {}
                    if (Gt.getState().messages.length === 0) {
                        const j = Us(v);
                        if (j.length > 0) {
                            const H = j.map((k, G) => ({ ...k,
                                id: `stored-${G}-${k.created_at}`,
                                status: "normal"
                            }));
                            Gt.getState().setMessages(H)
                        }
                        l0(v)
                    }
                    if (d("ready"), R && !q) {
                        const {
                            autoOpenTime: j
                        } = Yt.getState().widgetConfig, H = rs.get(os);
                        j && j > 0 && !H && (rs.set(os, "1"), setTimeout(() => {
                            Gt.getState().setOpen(!0), s("chatbot_auto_opened", {
                                delaySeconds: j
                            })
                        }, j * 1e3))
                    }
                } catch (v) {
                    h(v instanceof Error ? v.message : "Initialization failed"), d("error")
                }
            }
            g()
        }, [c, s]), J.useEffect(() => {
            if (!n) return;
            const {
                jwt: r,
                cookieId: d
            } = ae.getState(), h = ue.get(Jn), p = h ? new Date(h) <= new Date : !1;
            if (r && !p || !d) return;
            async function _() {
                const {
                    cookieId: b
                } = ae.getState();
                if (b) try {
                    const {
                        jwt: g,
                        e360_session: v,
                        expiresAt: T
                    } = await Ds(Wn(), b);
                    ue.set(Kn, g), T && ue.set(Jn, T), he.set("e360_session", v, 1), ae.getState().setJwt(g)
                } catch {}
            }
            _()
        }, [n])
    }

    function p0() {
        m0();
        const c = Gt(b => b.isOpen),
            n = Yt(b => b.widgetConfig),
            s = Yt(b => b.initialized),
            r = ae(b => b.jwt),
            d = J.useMemo(() => h1(n), [n]),
            {
                trackEvent: h
            } = In(),
            p = J.useRef(!1),
            _ = J.useRef(!1);
        return J.useEffect(() => {
            const b = {
                page: Je(),
                ...hs()
            };
            c && r ? _.current || (_.current = !0, p.current = !0, h("chatbot_opened", b)) : c || (_.current = !1, p.current && h("chatbot_close", b))
        }, [c, r, h]), !s || !d ? null : w.jsxs(w.Fragment, {
            children: [w.jsx(S1, {}), c && w.jsx(u0, {})]
        })
    }
    const h0 = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-scroll-snap-strictness:proximity;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-black:#000;--color-white:#fff;--spacing:4px;--text-xs:12px;--text-xs--line-height:calc(1 / .75);--text-sm:14px;--text-sm--line-height:calc(1.25 / .875);--text-base:16px;--text-base--line-height: 1.5 ;--text-xl:20px;--text-xl--line-height:calc(1.75 / 1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--leading-tight:1.25;--leading-snug:1.375;--leading-normal:1.5;--radius-lg:8px;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:0}.inset-y-0{inset-block:0}.-top-1{top:calc(var(--spacing) * -1)}.top-0{top:0}.top-1{top:var(--spacing)}.top-2{top:calc(var(--spacing) * 2)}.top-\\[6px\\]{top:6px}.-right-1{right:calc(var(--spacing) * -1)}.right-0{right:0}.right-1{right:var(--spacing)}.right-3{right:calc(var(--spacing) * 3)}.bottom-0{bottom:0}.bottom-3{bottom:calc(var(--spacing) * 3)}.left-0{left:0}.left-2{left:calc(var(--spacing) * 2)}.left-4{left:calc(var(--spacing) * 4)}.z-20{z-index:20}.z-30{z-index:30}.-mx-4{margin-inline:calc(var(--spacing) * -4)}.my-1{margin-block:var(--spacing)}.my-2{margin-block:calc(var(--spacing) * 2)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:var(--spacing)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-auto{margin-top:auto}.-mb-4{margin-bottom:calc(var(--spacing) * -4)}.mb-0\\.5{margin-bottom:calc(var(--spacing) * .5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-2\\.5{margin-bottom:calc(var(--spacing) * 2.5)}.mb-\\[14px\\]{margin-bottom:14px}.ml-1\\.5{margin-left:calc(var(--spacing) * 1.5)}.ml-4{margin-left:calc(var(--spacing) * 4)}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.size-\\[6px\\]{width:6px;height:6px}.h-1{height:var(--spacing)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-\\[5px\\]{height:5px}.h-\\[16px\\]{height:16px}.h-\\[56px\\]{height:56px}.h-\\[62px\\]{height:62px}.h-\\[176px\\]{height:176px}.h-full{height:100%}.h-px{height:1px}.max-h-\\[85\\%\\]{max-height:85%}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-2{width:calc(var(--spacing) * 2)}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-\\[5px\\]{width:5px}.w-\\[56px\\]{width:56px}.w-\\[62px\\]{width:62px}.w-\\[158px\\]{width:158px}.w-full{width:100%}.max-w-\\[86\\%\\]{max-width:86%}.max-w-\\[220px\\]{max-width:220px}.max-w-\\[300px\\]{max-width:300px}.max-w-full{max-width:100%}.min-w-0{min-width:0}.min-w-\\[1\\.25rem\\]{min-width:1.25rem}.min-w-\\[16px\\]{min-width:16px}.flex-1{flex:1}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.translate-x-1\\/2{--tw-translate-x: 50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x) var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.snap-x{scroll-snap-type:x var(--tw-scroll-snap-strictness)}.snap-mandatory{--tw-scroll-snap-strictness:mandatory}.snap-start{scroll-snap-align:start}.list-none{list-style-type:none}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-row-reverse{flex-direction:row-reverse}.flex-wrap{flex-wrap:wrap}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-center{justify-content:center}.justify-start{justify-content:flex-start}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-\\[2px\\]{gap:2px}.gap-\\[5px\\]{gap:5px}.gap-\\[6px\\]{gap:6px}.gap-\\[7px\\]{gap:7px}.gap-\\[8px\\]{gap:8px}.gap-\\[9px\\]{gap:9px}.gap-\\[10px\\]{gap:10px}.gap-\\[11px\\]{gap:11px}.gap-\\[14px\\]{gap:14px}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.overscroll-contain{overscroll-behavior:contain}.rounded{border-radius:.25rem}.rounded-\\[9px\\]{border-radius:9px}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[15px\\]{border-radius:15px}.rounded-\\[17px_17px_17px_5px\\]{border-radius:17px 17px 17px 5px}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.rounded-b-\\[22px\\]{border-bottom-right-radius:22px;border-bottom-left-radius:22px}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-gray-200{border-color:var(--color-gray-200)}.border-white{border-color:var(--color-white)}.bg-\\[var\\(--card\\)\\]{background-color:var(--card)}.bg-black\\/\\[0\\.08\\]{background-color:#00000014}@supports (color:color-mix(in lab,red,red)){.bg-black\\/\\[0\\.08\\]{background-color:color-mix(in oklab,var(--color-black) 8%,transparent)}}.bg-current{background-color:currentColor}.bg-transparent{background-color:#0000}.object-cover{object-fit:cover}.p-0{padding:0}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-3{padding:calc(var(--spacing) * 3)}.px-0\\.5{padding-inline:calc(var(--spacing) * .5)}.px-1{padding-inline:var(--spacing)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-\\[11px\\]{padding-inline:11px}.px-\\[13px\\]{padding-inline:13px}.px-\\[15px\\]{padding-inline:15px}.px-\\[17px\\]{padding-inline:17px}.px-\\[18px\\]{padding-inline:18px}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-5{padding-block:calc(var(--spacing) * 5)}.py-\\[7px\\]{padding-block:7px}.py-\\[11px\\]{padding-block:11px}.py-\\[15px\\]{padding-block:15px}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-\\[6px\\]{padding-top:6px}.pt-\\[10px\\]{padding-top:10px}.pb-1{padding-bottom:var(--spacing)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-\\[9px\\]{padding-bottom:9px}.pb-\\[11px\\]{padding-bottom:11px}.pl-0{padding-left:0}.pl-\\[34px\\]{padding-left:34px}.text-center{text-align:center}.text-right{text-align:right}.align-baseline{vertical-align:baseline}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[9px\\]{font-size:9px}.text-\\[10\\.5px\\]{font-size:10.5px}.text-\\[10px\\]{font-size:10px}.text-\\[11\\.5px\\]{font-size:11.5px}.text-\\[11px\\]{font-size:11px}.text-\\[12\\.5px\\]{font-size:12.5px}.text-\\[13\\.5px\\]{font-size:13.5px}.text-\\[13px\\]{font-size:13px}.text-\\[14px\\]{font-size:14px}.text-\\[15px\\]{font-size:15px}.text-\\[16px\\]{font-size:16px}.text-\\[17px\\]{font-size:17px}.leading-\\[1\\.2\\]{--tw-leading:1.2;line-height:1.2}.leading-\\[1\\.3\\]{--tw-leading:1.3;line-height:1.3}.leading-\\[1\\.4\\]{--tw-leading:1.4;line-height:1.4}.leading-\\[16px\\]{--tw-leading:16px;line-height:16px}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.01em\\]{--tw-tracking:.01em;letter-spacing:.01em}.tracking-\\[0\\.04em\\]{--tw-tracking:.04em;letter-spacing:.04em}.tracking-\\[0\\.06em\\]{--tw-tracking:.06em;letter-spacing:.06em}.whitespace-nowrap{white-space:nowrap}.whitespace-pre-wrap{white-space:pre-wrap}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.line-through{text-decoration-line:line-through}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-\\[inset_0_1px_0_rgba\\(255\\,255\\,255\\,\\.2\\)\\]{--tw-shadow:inset 0 1px 0 var(--tw-shadow-color,#fff3);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-none{--tw-outline-style:none;outline-style:none}}:host{all:initial;font-family:var(--font-sans);font-optical-sizing:auto;color:var(--ink);text-transform:none;letter-spacing:normal;direction:ltr;font-size:16px;font-weight:400;line-height:1.4;display:block}:host,*{--paper:#fbf9f4;--paper-2:#f3efe6;--card:#fff;--ink:#211b18;--ink-2:#4a4139;--muted:#8a8174;--line:#e6dfd2;--eva:#5840bb;--eva-2:#7a5cf0;--eva-dark:#46329c;--eva-grad:linear-gradient(140deg, #7a5cf0 0%, #5840bb 60%, #4d39ab 100%);--eva-soft:#ede8f8;--ok:#16845a;--warn:#c87d22;--bad:#c8402f;--online:#7ef0b0;--r-sm:6px;--r-md:8px;--r-lg:12px;--r-xl:16px;--shadow-1:0 1px 0 #1a12300a, 0 1px 2px #1a12300a;--shadow-2:0 2px 8px #1a12300d, 0 12px 28px -12px #1a12301f;--shadow-pop:0 18px 48px -16px #5840bb40, 0 6px 18px -6px #1a12301f;--font-sans:"Inter", system-ui, sans-serif;--spring:cubic-bezier(.16, 1, .3, 1);--spring-bounce:cubic-bezier(.34, 1.56, .64, 1)}@keyframes cw-ring{0%,to{opacity:.5;transform:scale(1)}50%{opacity:0;transform:scale(1.55)}}@keyframes cw-panel-in{0%{opacity:.4;transform:translateY(20px)scale(.96)}to{opacity:1;transform:translateY(0)scale(1)}}@keyframes cw-msg-in{0%{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}@keyframes cw-greet-in{0%{opacity:0;transform:translateY(6px)scale(.94)}to{opacity:1;transform:translateY(0)scale(1)}}@keyframes cw-pop{0%{opacity:0;transform:scale(.88)}to{opacity:1;transform:scale(1)}}@keyframes cw-dot-blink{0%,to{opacity:1}50%{opacity:.3}}@keyframes cw-bounce{0%,80%,to{opacity:.4;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes cw-toast-in{0%{opacity:0;transform:translateY(14px)scale(.96)}to{opacity:1;transform:translateY(0)scale(1)}}@keyframes cw-toast-out{0%{opacity:1;transform:translateY(0)scale(1)}to{opacity:0;transform:translateY(8px)scale(.95)}}@keyframes cw-sheet-in{0%{transform:translateY(100%)}to{transform:translateY(0)}}@keyframes cw-scrim-in{0%{opacity:0}to{opacity:1}}.cw-panel-in{animation:cw-panel-in .42s var(--spring) forwards}.cw-msg-in{animation:cw-msg-in .44s var(--spring) forwards}.cw-greet-in{animation:cw-greet-in .5s var(--spring) forwards}.cw-pop{animation:cw-pop .35s var(--spring-bounce) forwards}.cw-ring{animation:2.6s ease-in-out infinite cw-ring}.cw-toast-in{animation:cw-toast-in .32s var(--spring-bounce) forwards}.cw-toast-out{animation:.24s ease-in forwards cw-toast-out}.cw-sheet-in{animation:cw-sheet-in .38s var(--spring) forwards}.cw-scrim-in{animation:.22s ease-out forwards cw-scrim-in}.cw-font-sans{font-family:var(--font-sans)}.cw-font-sans a{color:var(--eva);text-underline-offset:2px;text-decoration:underline}.cw-scroll::-webkit-scrollbar{width:6px}.cw-scroll::-webkit-scrollbar-track{background:0 0}.cw-scroll::-webkit-scrollbar-thumb{background:#211b1824;border-radius:3px}.cw-scroll::-webkit-scrollbar-thumb:hover{background:#211b1842}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-scroll-snap-strictness{syntax:"*";inherits:false;initial-value:proximity}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}';
    let Ys = !1;

    function g0() {
        if (Ys) return;
        Ys = !0;
        const c = document.createElement("div");
        c.id = "chatbot-root", c.style.cssText = "display:block!important";
        const n = document.createElement("style");
        n.setAttribute("data-chatbot-host", "true"), n.textContent = `#chatbot-root{display:block!important}body.${ss}{overflow:hidden!important}`, (document.head || document.documentElement).appendChild(n), document.body.appendChild(c);
        const s = c.attachShadow({
                mode: "open"
            }),
            r = document.createElement("style");
        r.textContent = `@import url("${e1}")`, s.appendChild(r);
        const d = document.createElement("style");
        d.textContent = h0, s.appendChild(d);
        const h = document.createElement("div");
        s.appendChild(h), Km.createRoot(h).render(w.jsx(zt.StrictMode, {
            children: w.jsx(p0, {})
        }))
    }

    function Nu() {
        g0()
    }
    window.shiprocketChatbot = {
        init: Nu,
        toast: Au
    }, typeof document < "u" && (document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Nu) : Nu())
})();