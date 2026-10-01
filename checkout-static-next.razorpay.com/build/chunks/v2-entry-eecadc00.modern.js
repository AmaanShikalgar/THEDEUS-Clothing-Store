"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [74162], {
        74162(e, t, n) {
            n.r(t), n.d(t, {
                addFont: () => G,
                configureVariants: () => U,
                createNativeWebview: () => Z,
                create_root: () => F,
                default: () => B,
                onNativeKeyboard: () => K,
                positionRoot: () => X,
                resizeRoot: () => $,
                scrollNativeIntoView: () => Y,
                setImeMode: () => H,
                setNativeStyleDefinitionsUrl: () => P,
                setNativeTheme: () => W,
                translateRoot: () => J
            });
            let i = Object.freeze({});
            const r = new Set;
            const o = "ok",
                l = {
                    first: 1,
                    last: 2,
                    only: 4,
                    empty: 8,
                    checked: 32,
                    focus: 64,
                    "focus-visible": 64,
                    disabled: 256,
                    active: 128,
                    "peer-checked": 512,
                    "peer-focus": 1024
                },
                s = {
                    hover: !1,
                    "group-hover": !1
                };
            let a = { ...s
            };
            const c = new Set;
            let u = null,
                d = null;
            const f = {
                static: Object.freeze({
                    status: "static"
                }),
                irrelevant: Object.freeze({
                    status: "irrelevant"
                }),
                unsupported: Object.freeze({
                    status: "unsupported"
                }),
                peer: Object.freeze({
                    status: o,
                    marker: "peer"
                }),
                group: Object.freeze({
                    status: o,
                    marker: "group"
                })
            };

            function h(e) {
                if ("peer" === e) return f.peer;
                if ("group" === e) return f.group;
                const t = function(e) {
                        const t = [];
                        let n = 0,
                            i = 0;
                        for (let r = 0; r < e.length; r++) {
                            const o = e[r];
                            "[" === o ? n++ : "]" === o ? n = Math.max(0, n - 1) : ":" === o && 0 === n && (t.push(e.slice(i, r)), i = r + 1)
                        }
                        return t.push(e.slice(i)), t
                    }(e),
                    n = t[t.length - 1],
                    i = "!" === n[0],
                    r = i ? n.slice(1) : n;
                let s = 0,
                    c = 0;
                for (let n = 0; n < t.length - 1; n++) {
                    const i = t[n];
                    if ("*" === i) {
                        if (0 !== s) return v(e);
                        s = 1;
                        continue
                    }
                    if ("placeholder" === i) {
                        if (0 !== s) return v(e);
                        s = 2;
                        continue
                    }
                    const r = l[i];
                    if (void 0 === r) {
                        if (!(i in a)) return "[" === i[0] && i.includes("::") ? f.irrelevant : v(e);
                        if (!0 !== a[i]) return f.static
                    } else c |= r
                }
                return 0 === s && 0 === c && r.startsWith("divide-") && (s = 1, c = 16), {
                    status: o,
                    scope: s,
                    mask: c,
                    inner: r,
                    important: i
                }
            }

            function v(e) {
                return function(e) {
                    d && !u.has(e) && (u.add(e), d(e))
                }(e), f.unsupported
            }
            let p = !1;

            function g(e) {
                p = !0 === e
            }
            const y = {
                    classOps: 0,
                    classMs: 0,
                    styleSyncs: 0,
                    styleSyncMs: 0,
                    inheritSyncs: 0,
                    mounts: 0,
                    serializeMs: 0,
                    inserts: 0,
                    insertScanSteps: 0,
                    removes: 0,
                    destroys: 0,
                    liveNodes: 0,
                    flushes: 0,
                    flushMs: 0,
                    eventsIn: 0,
                    droppedVariantTokens: 0,
                    droppedNativeAttrs: 0,
                    hiddenInputs: 0,
                    ignoredHiddenFlips: 0,
                    bridgeCalls: 0,
                    bridgeBytes: 0,
                    bridgeMs: 0,
                    frameFetches: 0,
                    frameCacheHits: 0
                },
                m = "undefined" != typeof performance && performance.now ? () => performance.now() : () => Date.now();

            function b() {
                const e = y;
                return "{" + Object.keys(e).map((t => {
                    return `"${t}":${"number"==typeof e[t]?(n=e[t],Math.round(100*n)/100):0}`;
                    var n
                })).join(",") + "}"
            }
            const S = new Set(["chip", "radio", "checkbox", "switch", "fab"]),
                w = e => /^\s*$/.test(e),
                k = (e, t) => Math.max(0, Math.min(t, Math.trunc(Number(e) || 0))),
                T = e => {
                    var t;
                    return (null === (t = e.children) || void 0 === t ? void 0 : t.filter((e => 1 === e.nodeType))) ? ? []
                },
                _ = {
                    mountSubtree: 0,
                    insert: 1,
                    remove: 2,
                    destroyElement: 3,
                    setAttributes: 4,
                    setAttribute: 5,
                    removeAttribute: 6,
                    applyStyle: 7,
                    removeStyle: 8,
                    setText: 9,
                    addEventListener: 10,
                    removeEventListener: 11,
                    animate: 12,
                    setStyleDefinitionsUrl: 13,
                    setTheme: 14,
                    setClass: 15,
                    configureVariants: 16
                };
            const N = e => !(!e || !e.__frag);

            function x(e, t, n) {
                if (N(t)) {
                    const i = [...t.children];
                    t.children.length = 0;
                    for (const t of i) t.parent = null, x(e, t, n)
                } else {
                    if (N(e)) {
                        ! function(e) {
                            const t = e.parent;
                            if (t)
                                if (N(t)) {
                                    const n = t.children.indexOf(e);
                                    n >= 0 && t.children.splice(n, 1), e.parent = null
                                } else {
                                    var n;
                                    null === (n = e.remove) || void 0 === n || n.call(e)
                                }
                        }(t);
                        const i = n ? e.children.indexOf(n) : e.children.length;
                        return e.children.splice(i < 0 ? e.children.length : i, 0, t), void(t.parent = e)
                    }
                    e.insertBefore(t, n && !N(n) ? n : null)
                }
            }
            const E = e => {
                    var t;
                    return (null === (t = e.children) || void 0 === t ? void 0 : t[0]) ? ? null
                },
                C = e => {
                    const t = e.children;
                    return (null == t ? void 0 : t[t.length - 1]) ? ? null
                },
                M = e => {
                    const t = e.parent;
                    if (!t || !t.children) return null;
                    const n = t.children.indexOf(e);
                    return t.children[n + 1] ? ? null
                },
                A = e => e.parent ? ? null,
                R = e => N(e) ? "fragment" : 1 === e.nodeType ? "element" : 3 === e.nodeType ? "text" : "comment";
            const z = new Proxy({}, {
                    get: () => () => {}
                }),
                I = globalThis.RazorpayNativeBridge || globalThis.RazorpayNative && globalThis.RazorpayNative.bridge,
                O = !!I,
                L = O ? I : z;
            g("undefined" != typeof globalThis && !0 === globalThis.__RZP_NATIVE_LOG__);
            const V = function(e) {
                    const t = new Map;
                    return new Proxy(e, {
                        get(e, n) {
                            const i = t.get(n);
                            if (i) return i;
                            const r = e[n];
                            if ("function" != typeof r) return r;
                            const o = function() {
                                y.bridgeCalls++;
                                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                                for (const e of n) "string" == typeof e && (y.bridgeBytes += e.length);
                                const o = m();
                                try {
                                    return r.apply(e, n)
                                } finally {
                                    y.bridgeMs += m() - o
                                }
                            };
                            return t.set(n, o), o
                        }
                    })
                }(L),
                j = function(e) {
                    let t = 1;
                    const n = new Map,
                        o = new Map;
                    let l = !1;
                    const f = "undefined" != typeof FinalizationRegistry && "undefined" != typeof WeakRef,
                        v = new Map;

                    function g(e) {
                        v.delete(e), y.liveNodes = v.size, y.destroys++, U(["destroyElement", e])
                    }
                    const b = f ? new FinalizationRegistry(g) : null;

                    function N(e, t) {
                        v.set(e.id, f ? new WeakRef(e) : e), y.liveNodes = v.size, t && b && "number" == typeof e.id && b.register(e, e.id)
                    }
                    const x = new Map,
                        E = f ? new FinalizationRegistry((e => {
                            const t = x.get(e);
                            t && void 0 === t.deref() && x.delete(e)
                        })) : null;

                    function C(e) {
                        var t;
                        const n = x.get(e),
                            i = f ? null == n ? void 0 : n.deref() : n;
                        return i ? (null === (t = i.attrs) || void 0 === t ? void 0 : t.id) !== e ? (x.delete(e), null) : i : (n && x.delete(e), null)
                    }
                    let M = 1,
                        A = !1;
                    const R = [],
                        z = [],
                        I = new Map;
                    let O = null;
                    "undefined" != typeof globalThis && "function" == typeof globalThis.addEventListener && globalThis.addEventListener("message", (e => {
                        e && "__rzp_batch_port" === e.data && e.ports && e.ports[0] && (O = e.ports[0])
                    }));
                    const L = [],
                        V = new Map,
                        j = new Map;

                    function q(e) {
                        const t = "string" == typeof e ? e : JSON.stringify(e);
                        let n = V.get(t);
                        return void 0 === n && (n = L.length, L.push(e), V.set(t, n)), n
                    }
                    d = e => {
                        y.droppedVariantTokens++
                    }, u = u || new Set;
                    const B = new Set(["text", "value", "placeholder", "enabled", "disabled", "checked", "role", "maxLength", "inputType", "inputmode", "type", "format", "advance", "interceptkeys", "src", "exit", "marker", "segment", "frame", "loop", "autoplay", "playState", "speed", "data-radius", "data-draggable", "data-showhandle", "data-scrim", "data-background", "data-height", "data-native-transition", "data-expanded", "data-resize-axis", "data-resize-duration", "data-resize-easing", "label", "error", "helper", "readonly", "enterkeyhint", "data-counter", "data-endicon", "data-boxstyle", "data-prefix", "data-starticon"]),
                        D = new Set;

                    function W(e) {
                        D.has(e) || (D.add(e), y.droppedNativeAttrs++)
                    }
                    let P = 0;

                    function U(e) {
                        e[0] = _[e[0]], R.push(e), H()
                    }
                    const F = "function" == typeof MessageChannel ? ((e, t, n, i) => {
                        const r = new MessageChannel;
                        return r.port1.onmessage = () => K(), null === (e = (t = r.port1).unref) || void 0 === e || e.call(t), null === (n = (i = r.port2).unref) || void 0 === n || n.call(i), () => r.port2.postMessage(0)
                    })() : () => setTimeout(K, 0);

                    function H() {
                        M++, l || (l = !0, F())
                    }

                    function K() {
                        if (l = !1, !(n.size || o.size || R.length || z.length || I.size)) return;
                        y.flushes++;
                        const t = m();
                        ! function(e) {
                            for (const [t, i] of n) {
                                const n = {};
                                let r = !1;
                                for (const [o, l] of i) null === l ? e(["removeAttribute", t, o]) : (n[o] = l, r = !0);
                                r && e(["setAttributes", t, q(n)])
                            }
                            n.clear();
                            for (const [t, n] of o) {
                                const i = {};
                                let r = !1;
                                for (const [o, l] of n) null === l ? e(["removeStyle", t, o]) : (i[o] = l, r = !0);
                                r && e(["applyStyle", t, q(i)])
                            }
                            o.clear()
                        }((e => {
                            e[0] = _[e[0]], R.push(e)
                        }));
                        for (const e of z) e[0] = _[e[0]], R.push(e);
                        if (R.length) {
                            const t = JSON.stringify([L, R]);
                            O ? O.postMessage(t) : e.applyBatch(t)
                        }
                        R.length = 0, z.length = 0, L.length = 0, V.clear(), j.clear(),
                            function() {
                                if (!I.size) return;
                                const t = [];
                                for (const [e, n] of I) t.push([_.setAttribute, e, "src", n]);
                                I.clear();
                                const n = JSON.stringify([
                                    [], t
                                ]);
                                O ? O.postMessage(n) : e.applyBatch(n)
                            }(), y.flushMs += m() - t
                    }

                    function J(e, t) {
                        I.set(e, t), H()
                    }

                    function $(e, t, i) {
                        let r = n.get(e);
                        r || (r = new Map, n.set(e, r)), r.set(t, i), H()
                    }

                    function X(e, t, n) {
                        let i = o.get(e);
                        i || (i = new Map, o.set(e, i)), i.set(t, n), H()
                    }
                    const Y = e => 1 === e.nodeType && !e._nonNative || 3 === e.nodeType && e.native,
                        G = e => e.children.filter(Y);

                    function Z(e, t) {
                        let n = 0;
                        for (const i of e.children) {
                            if (i === t) break;
                            Y(i) && n++
                        }
                        return n
                    }

                    function Q(e) {
                        return 3 === e.nodeType ? {} : { ...e.inlineStyle
                        }
                    }

                    function ee(e) {
                        if (!e.live) return;
                        if (e.classManaged) {
                            const t = e.inlineStyle,
                                n = e.sentInlineStyle || {};
                            for (const i in t) t[i] !== n[i] && X(e.id, i, t[i]);
                            for (const i in n) i in t || X(e.id, i, null);
                            return void(e.sentInlineStyle = { ...t
                            })
                        }
                        y.styleSyncs++;
                        const t = m(),
                            n = Q(e),
                            i = e.sentStyle || {};
                        for (const t in n) n[t] !== i[t] && X(e.id, t, n[t]);
                        for (const t in i) t in n || X(e.id, t, null);
                        e.sentStyle = n, y.styleSyncMs += m() - t
                    }

                    function te(e) {
                        let t = "";
                        for (const n of e.children) 3 === n.nodeType && (t += n.value);
                        return t
                    }

                    function ne(e) {
                        var t;
                        let n = String(e.value).replace(/\s+/g, " ");
                        const i = e.parent && ((null === (t = e.parent.inlineStyle) || void 0 === t ? void 0 : t.display) || e.parent.nativeDisplay);
                        return "flex" !== i && "inline-flex" !== i || (n = n.trim()), n
                    }
                    const ie = e => 1 === e.nodeType && S.has(e.name);

                    function re(e) {
                        if (3 === e.nodeType) {
                            e.live = !0, e.sentStyle = {}, N(e, !0);
                            const t = ne(e);
                            return {
                                i: e.id,
                                v: t
                            }
                        }
                        e.live = !0, e.sentStyle = Q(e), N(e, !0);
                        const t = { ...e.attrs
                        };
                        if ("string" == typeof t.src) {
                            const n = ve(t.src);
                            n.startsWith("data:") ? (delete t.src, J(e.id, n)) : t.src = n
                        }
                        let n;
                        if (ie(e)) {
                            if (!("text" in t)) {
                                const n = te(e);
                                n && (t.text = n)
                            }
                            n = []
                        } else n = G(e).map(re);
                        const i = {
                                i: e.id,
                                n: e.name
                            },
                            r = function(e) {
                                const t = e.classString;
                                return t || null
                            }(e);
                        return e.classManaged = null !== r, null !== r ? (i.k = q(r), Object.keys(e.inlineStyle).length && (i.s = q(e.inlineStyle), e.sentInlineStyle = { ...e.inlineStyle
                            })) : i.s = q(e.sentStyle),
                            function(e) {
                                for (const t in e) B.has(t) || (delete e[t], W(t))
                            }(t), Object.keys(t).length && (i.a = t), n.length && (i.c = n), e.listeners.size && (i.l = [...e.listeners.keys()]), i
                    }

                    function oe(e, t, n) {
                        if ("number" != typeof t.id) return t;
                        t.parent && le(t.parent, t);
                        const i = e.children,
                            r = e.nativeCount || 0;
                        let o, l;
                        if (null == n) o = i.length, l = r;
                        else {
                            o = -1;
                            let e = 0,
                                t = i.length - 1,
                                s = 0,
                                a = 0,
                                c = 0;
                            for (; e <= t;) {
                                if (c++, i[e] === n) {
                                    o = e, l = s;
                                    break
                                }
                                if (i[t] === n) {
                                    o = t, l = r - a - (Y(n) ? 1 : 0);
                                    break
                                }
                                Y(i[e]) && s++, Y(i[t]) && a++, e++, t--
                            }
                            y.insertScanSteps += c, o < 0 && (o = i.length, l = r)
                        }
                        if (i.splice(o, 0, t), t.parent = e, Y(t) && (e.nativeCount = r + 1), e.live && Y(t) && !ie(e))
                            if (t.live) y.inserts++, U(["insert", e.id, t.id, l]);
                            else {
                                y.mounts++;
                                const n = m(),
                                    i = re(t);
                                y.serializeMs += m() - n, U(["mountSubtree", e.id, i, l])
                            }
                        else ie(e) && e.live && 3 === t.nodeType && se(e);
                        return t
                    }

                    function le(e, t) {
                        const n = e.children.indexOf(t);
                        n < 0 || (e.children.splice(n, 1), t.parent = null, Y(t) && (e.nativeCount = (e.nativeCount || 0) - 1), e.live && Y(t) && t.live && !ie(e) && (y.removes++, U(["remove", t.id])), ie(e) && e.live && 3 === t.nodeType && se(e))
                    }

                    function se(e) {
                        "text" in e.attrs || $(e.id, "text", te(e))
                    }

                    function ae(e, t, n) {
                        let i = !1,
                            r = !1,
                            o = !1;
                        const l = {
                            type: e,
                            detail: n,
                            target: t,
                            currentTarget: t,
                            bubbles: !0,
                            cancelable: !0,
                            get defaultPrevented() {
                                return o
                            },
                            preventDefault() {
                                o = !0
                            },
                            stopPropagation() {
                                i = !0
                            },
                            stopImmediatePropagation() {
                                r = !0, i = !0
                            },
                            get _propagationStopped() {
                                return i
                            },
                            get _immediatePropagationStopped() {
                                return r
                            }
                        };
                        return n && "object" == typeof n && "value" in n && (l.value = n.value), l
                    }
                    const ce = new Map;

                    function ue(e, t) {
                        if (e.classString === t) return;
                        y.classOps++;
                        const n = m();
                        e.classString = t;
                        const i = function(e) {
                            const t = ce.get(e);
                            if (t) return t;
                            let n = null,
                                i = null,
                                r = null,
                                o = null;
                            for (const t of e.split(/\s+/)) {
                                if (!t) continue;
                                const e = h(t);
                                if ("ok" !== e.status || e.marker || 0 !== e.scope || 0 !== e.mask) continue;
                                const l = e.inner;
                                let s = null;
                                "flex" === l || "flex-row" === l || "flex-row-reverse" === l || "flex-col" === l || "flex-col-reverse" === l ? s = "flex" : "inline-flex" === l ? s = "inline-flex" : "block" === l || "inline-block" === l ? s = l : "hidden" === l && (s = "none"), s && (e.important ? r = s : n = s);
                                const a = /^duration-(\d+)$/.exec(l);
                                a && (e.important ? o = a[1] : i = a[1])
                            }
                            const l = {
                                display: r ? ? n,
                                duration: o ? ? i
                            };
                            return ce.size >= 4096 && ce.clear(), ce.set(e, l), l
                        }(t);
                        if (e.nativeDisplay = i.display, e.nativeDuration = i.duration, e.live) {
                            e.classManaged = !0;
                            const n = j.get(e.id);
                            if (n) n[2] = q(t);
                            else {
                                const n = ["setClass", e.id, q(t)];
                                j.set(e.id, n), U(n)
                            }
                        }
                        y.classMs += m() - n
                    }
                    let de = !1;

                    function fe(e, t) {
                        const n = "hidden" === String(t).toLowerCase();
                        e.live ? n !== e._nonNative && (y.ignoredHiddenFlips++, !de && p && (de = !0)) : n !== e._nonNative && (e._nonNative = n, n && y.hiddenInputs++, e.parent && (e.parent.nativeCount = (e.parent.nativeCount || 0) + (n ? -1 : 1)))
                    }

                    function he(e, t, i) {
                        if ("class" === t || "className" === t) return void ue(e, String(i));
                        const r = String(i);
                        if ("style" !== t && e.attrs[t] === r) return;
                        const o = r;
                        if (e.attrs[t] = o, "id" === t && function(e, t) {
                                e && (x.set(e, f ? new WeakRef(t) : t), null == E || E.register(t, e))
                            }(o, e), "type" === t && "input" === e.name && fe(e, o), "value" === t ? e._value = o : "checked" === t && (e._checked = "true" === o), "style" === t && We(e, o), !ie(e) || "value" === t || "checked" === t || "style" === t || !e.live) {
                            var l;
                            if ("exit" === t && e.live) return null === (l = n.get(e.id)) || void 0 === l || l.delete(t), void U(["setAttribute", e.id, t, o]);
                            if (e.live)
                                if ("src" === t) {
                                    const n = ve(o);
                                    n.startsWith("data:") ? J(e.id, n) : $(e.id, t, n)
                                } else B.has(t) ? $(e.id, t, o) : W(t)
                        }
                    }

                    function ve(e) {
                        try {
                            var t, n;
                            const i = (null === globalThis || void 0 === globalThis || null === (t = globalThis.document) || void 0 === t ? void 0 : t.baseURI) || (null === globalThis || void 0 === globalThis || null === (n = globalThis.location) || void 0 === n ? void 0 : n.href) || void 0;
                            return i ? new URL(e, i).href : e
                        } catch {
                            return e
                        }
                    }

                    function pe(e, t) {
                        const n = e.native,
                            i = !w(t);
                        if (e.value = t, e.native = i, e.parent && ie(e.parent)) return void(e.parent.live && se(e.parent));
                        if (e.parent && n !== i && (e.parent.nativeCount = (e.parent.nativeCount || 0) + (i ? 1 : -1)), n === i) return void(i && e.live && U(["setText", e.id, ne(e)]));
                        if (n && !i) return void(e.live && (U(["remove", e.id]), e.live = !1));
                        const r = e.parent;
                        r && r.live && U(["mountSubtree", r.id, re(e), Z(r, e)])
                    }

                    function ge(e) {
                        if ("*" === e) return () => !0;
                        if ("#" === e[0]) {
                            const t = e.slice(1);
                            return e => e.attrs.id === t
                        }
                        if ("." === e[0]) {
                            const t = e.slice(1);
                            return e => e.classString.split(/\s+/).includes(t)
                        }
                        if ("[" === e[0]) {
                            const t = e.match(/^\[([^\]=~|^$*\s]+)(?:=(["']?)(.*?)\2)?\]$/);
                            if (!t) return () => !1;
                            const n = t[1],
                                i = t[3];
                            return void 0 === i ? e => void 0 !== e.attrs[n] : e => e.attrs[n] === i
                        }
                        const t = e.toLowerCase();
                        return e => e.name.toLowerCase() === t
                    }

                    function ye(e) {
                        const t = String(e).split(",").map((e => e.trim())).filter(Boolean).map((e => e.split(/\s+/).filter(Boolean).map(ge))).filter((e => e.length));
                        return e => {
                            if (1 !== e.nodeType || !e.name || !e.attrs) return !1;
                            for (const n of t) {
                                if (!n[n.length - 1](e)) continue;
                                let t = n.length - 2,
                                    i = e.parent;
                                for (; t >= 0 && i;) 1 === i.nodeType && i.name && i.attrs && n[t](i) && t--, i = i.parent;
                                if (t < 0) return !0
                            }
                            return !1
                        }
                    }

                    function me(t) {
                        M++, K();
                        try {
                            for (var n, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) r[o - 1] = arguments[o];
                            return null === (n = e[t]) || void 0 === n ? void 0 : n.call(e, ...r)
                        } catch {
                            return
                        }
                    }

                    function be(t) {
                        if (!t.live) return null;
                        if (t._frameEpoch === M) return y.frameCacheHits++, t._frame;
                        K();
                        try {
                            var n;
                            y.frameFetches++;
                            const i = null === (n = e.getFrame) || void 0 === n ? void 0 : n.call(e, t.id),
                                r = i && "null" !== i ? JSON.parse(i) : null;
                            return t._frame = r, t._frameEpoch = M, A || (A = !0, queueMicrotask((() => {
                                A = !1, M++
                            }))), r
                        } catch {
                            return null
                        }
                    }

                    function Se(e, t) {
                        for (let r = e; r; r = r.parent) {
                            var n, i;
                            if (null === (n = (i = r)._fire) || void 0 === n || n.call(i, t), t._propagationStopped) break
                        }
                        return t
                    }

                    function we(e, t) {
                        return 1 === (null == e ? void 0 : e.nodeType) && e.name === t
                    }

                    function ke(e) {
                        var t;
                        return String((null == e || null === (t = e.attrs) || void 0 === t ? void 0 : t.type) ? ? "").toLowerCase()
                    }

                    function Te(e) {
                        return we(e, "checkbox") || we(e, "input") && "checkbox" === ke(e)
                    }

                    function _e(e) {
                        return we(e, "radio") || we(e, "input") && "radio" === ke(e)
                    }

                    function Ne(e) {
                        return we(e, "input") && !Te(e) && !_e(e) && "hidden" !== ke(e)
                    }

                    function xe(e) {
                        return Te(e) || _e(e) || Ne(e)
                    }

                    function Ee(e) {
                        let t = e;
                        for (; null !== (n = t) && void 0 !== n && n.parent;) {
                            var n;
                            t = t.parent
                        }
                        return t
                    }

                    function Ce(e) {
                        e._selectionScheduled || (e._selectionScheduled = !0, queueMicrotask((() => {
                            e._selectionScheduled = !1, e.live && me("setSelection", e.id, e._selectionStart ? ? 0, e._selectionEnd ? ? 0)
                        })))
                    }

                    function Me(e, t) {
                        if (!t) return null;
                        const n = C(t);
                        if (n)
                            for (let t = n; t; t = t.parent)
                                if (t === e) return n;
                        if (1 === (null == e ? void 0 : e.nodeType) && e.attrs.id === t) return e;
                        for (const n of (null == e ? void 0 : e.children) ? ? []) {
                            const e = Me(n, t);
                            if (e) return e
                        }
                        return null
                    }

                    function Ae(e) {
                        for (const t of e.children ? ? []) {
                            if (1 !== t.nodeType) continue;
                            if (xe(t)) return t;
                            const e = Ae(t);
                            if (e) return e
                        }
                        return null
                    }

                    function Re(e) {
                        var t, n;
                        const i = (null == e || null === (t = e.attrs) || void 0 === t ? void 0 : t.for) || (null == e || null === (n = e.attrs) || void 0 === n ? void 0 : n.htmlFor);
                        if (i) {
                            const t = Me(Ee(e), i);
                            if (xe(t)) return t
                        }
                        return Ae(e)
                    }

                    function ze(e) {
                        if (e.disabled) return;
                        const t = ke(e);
                        if (t && "submit" !== t) return;
                        const n = function(e) {
                            var t;
                            const n = null == e || null === (t = e.attrs) || void 0 === t ? void 0 : t.form;
                            if (n) {
                                const t = Me(Ee(e), n);
                                if (we(t, "form")) return t
                            }
                            for (let t = null == e ? void 0 : e.parent; t; t = t.parent)
                                if (we(t, "form")) return t;
                            return null
                        }(e);
                        if (!n) return;
                        const i = ae("submit", n, null);
                        i.submitter = e, Se(n, i)
                    }

                    function Ie(e, t) {
                        1 === (null == e ? void 0 : e.nodeType) && t(e);
                        for (const n of (null == e ? void 0 : e.children) ? ? []) Ie(n, t)
                    }

                    function Oe(e) {
                        const t = e.attrs.name;
                        t && Ie(function(e) {
                            for (let t = e.parentElement; t; t = t.parentElement)
                                if (we(t, "form")) return t;
                            return Ee(e)
                        }(e), (n => {
                            n !== e && _e(n) && n.attrs.name === t && n.checked && (n.checked = !1)
                        }))
                    }

                    function Le(e) {
                        Se(e, ae("input", e, e.checked)), Se(e, ae("change", e, e.checked))
                    }

                    function Ve(e) {
                        const t = function(e) {
                            for (let t = e; t; t = t.parent)
                                if (we(t, "button")) return t;
                            return null
                        }(e);
                        if (t) return void ze(t);
                        const n = function(e) {
                            for (let t = e; t; t = t.parent)
                                if (we(t, "label")) return t;
                            return null
                        }(e);
                        if (n) {
                            const t = Re(n);
                            if (t && e !== t && !t.contains(e)) return void t.click()
                        }! function(e) {
                            if (xe(e) && !e.disabled) {
                                if (_e(e)) {
                                    if (e.checked) return;
                                    return Oe(e), e.checked = !0, void Le(e)
                                }
                                Te(e) && (e.checked = !e.checked, Le(e))
                            }
                        }(e)
                    }

                    function je(e) {
                        Ne(e) && xe(e) && !e.disabled && e.focus();
                        const t = Se(e, ae("click", e, null));
                        return t.defaultPrevented || Ve(e), t
                    }

                    function qe(e, t) {
                        const n = String(t).trim(),
                            i = "webkitTransform" === e ? "transform" : e;
                        return "" === n ? {
                            [i]: null
                        } : {
                            [i]: n
                        }
                    }
                    const Be = [...new Set(["height", "width", "minHeight", "minWidth", "maxHeight", "maxWidth"]), "left", "top", "right", "bottom", "display", "opacity", "background", "backgroundColor", "backgroundImage", "transform", "webkitTransform", "transition", "position", "overflow", "pointerEvents", "padding", "userSelect", "verticalAlign"],
                        De = e => String(e).replace(/-([a-z])/g, ((e, t) => t.toUpperCase()));

                    function We(e, t) {
                        let n = !1;
                        for (const t of e.styleAttrKeys) t in e.inlineStyle && (delete e.inlineStyle[t], n = !0);
                        const i = new Set;
                        for (const r of String(t).split(";")) {
                            const t = r.indexOf(":");
                            if (t < 0) continue;
                            const o = De(r.slice(0, t).trim()),
                                l = r.slice(t + 1).trim();
                            if (!o || !l) continue;
                            const s = qe(o, l);
                            for (const t of Object.keys(s)) null != s[t] && (i.add(t), e.inlineStyle[t] !== s[t] && (e.inlineStyle[t] = s[t], n = !0))
                        }
                        e.styleAttrKeys = i, n && e.live && ee(e)
                    }
                    class Pe {
                        constructor(e) {
                            this.nodeType = 1, this.id = t++, this.name = e, this.parent = null, this.children = [], this.attrs = {}, this._nonNative = !1, this.classString = "", this.nativeDisplay = null, this.nativeDuration = null, this.listeners = new Map, this.live = !1, this.sentStyle = null, this.classList = function(e) {
                                const t = () => e.classString.split(/\s+/).filter(Boolean),
                                    n = t => ue(e, t.join(" "));
                                return {
                                    add() {
                                        const e = t();
                                        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                                        for (const t of r.flatMap((e => String(e).split(/\s+/))).filter(Boolean)) e.includes(t) || e.push(t);
                                        n(e)
                                    },
                                    remove() {
                                        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                                        const o = new Set(i.flatMap((e => String(e).split(/\s+/))).filter(Boolean));
                                        n(t().filter((e => !o.has(e))))
                                    },
                                    contains: e => t().includes(String(e)),
                                    toggle(e, t) {
                                        const n = String(e),
                                            i = this.contains(n),
                                            r = void 0 === t ? !i : !!t;
                                        return r ? this.add(n) : this.remove(n), r
                                    },
                                    toString: () => e.classString
                                }
                            }(this), this.inlineStyle = {}, this.sentInlineStyle = {}, this.styleAttrKeys = new Set, this._style = null
                        }
                        appendChild(e) {
                            return oe(this, e, null)
                        }
                        insertBefore(e, t) {
                            return oe(this, e, t)
                        }
                        removeChild(e) {
                            return le(this, e), e
                        }
                        remove() {
                            this.parent && le(this.parent, this)
                        }
                        get contentDocument() {
                            return "native-webview" !== this.name ? null : (this._contentDocument || (this._contentDocument = function(e) {
                                const t = t => me("navigateWebView", e.id, String(t));
                                return {
                                    tagName: e.tagName,
                                    open() {},
                                    write(t) {
                                        me("writeWebView", e.id, String(t))
                                    },
                                    close() {},
                                    location: {
                                        assign: t,
                                        replace: t
                                    },
                                    post(t, n) {
                                        me("postUrl", e.id, String(t), function(e) {
                                            const t = e || {};
                                            return Object.keys(t).map((e => encodeURIComponent(e) + "=" + encodeURIComponent(String(t[e])))).join("&")
                                        }(n))
                                    },
                                    body: {}
                                }
                            }(this)), this._contentDocument)
                        }
                        setAttribute(e, t) {
                            he(this, e, t)
                        }
                        removeAttribute(e) {
                            var t, n;
                            t = this, "class" !== (n = e) && "className" !== n ? ("id" === n && t.attrs.id && x.delete(t.attrs.id), delete t.attrs[n], "type" !== n || "input" !== t.name || t.live || fe(t, ""), "value" === n ? delete t._value : "checked" === n && delete t._checked, "style" === n && We(t, ""), t.live && ("src" === n && I.delete(t.id), $(t.id, n, null))) : ue(t, "")
                        }
                        set className(e) {
                            ue(this, String(e))
                        }
                        get className() {
                            return this.classString
                        }
                        get value() {
                            return void 0 !== this._value ? this._value : this.attrs.value ? ? ""
                        }
                        set value(e) {
                            const t = null == e ? "" : String(e);
                            this._value !== t && (this._value = t, this.attrs.value = t, this.live && $(this.id, "value", t))
                        }
                        get selectionStart() {
                            return this._selectionStart ? ? 0
                        }
                        set selectionStart(e) {
                            const t = k(e, this.value.length),
                                n = k(this._selectionEnd ? ? t, this.value.length),
                                i = Math.max(t, n);
                            this._selectionStart = t, this._selectionEnd = i, this.live && Ce(this)
                        }
                        get selectionEnd() {
                            return this._selectionEnd ? ? 0
                        }
                        set selectionEnd(e) {
                            const t = k(e, this.value.length),
                                n = k(this._selectionStart ? ? t, this.value.length),
                                i = Math.min(n, t);
                            this._selectionStart = i, this._selectionEnd = t, this.live && Ce(this)
                        }
                        set textContent(e) {
                            for (const e of [...this.children]) le(this, e);
                            null != e && "" !== e && this.appendChild(new Ue(String(e)))
                        }
                        get textContent() {
                            let e = "";
                            const t = n => {
                                for (const i of n.children || []) 3 === i.nodeType ? e += i.value : 1 === i.nodeType && t(i)
                            };
                            return t(this), e
                        }
                        getAttribute(e) {
                            return "class" === e ? this.classString || null : e in this.attrs ? this.attrs[e] : null
                        }
                        hasAttribute(e) {
                            return "class" === e ? "" !== this.classString : e in this.attrs
                        }
                        querySelector(e) {
                            const t = ye(e),
                                n = e => {
                                    for (const i of e.children) {
                                        if (1 !== i.nodeType) continue;
                                        if (t(i)) return i;
                                        const e = n(i);
                                        if (e) return e
                                    }
                                    return null
                                };
                            return n(this)
                        }
                        querySelectorAll(e) {
                            const t = ye(e),
                                n = [],
                                i = e => {
                                    for (const r of e.children) 1 === r.nodeType && (t(r) && n.push(r), i(r))
                                };
                            return i(this), n
                        }
                        click() {
                            je(this)
                        }
                        dispatchEvent(e) {
                            const t = null == e ? void 0 : e.type;
                            if (!t) return !0;
                            const n = ae(t, this, e.detail ? ? null);
                            return !1 === e.bubbles ? this._fire(n) : Se(this, n), "click" !== t || n.defaultPrevented || Ve(this), !n.defaultPrevented
                        }
                        get checked() {
                            return void 0 !== this._checked ? this._checked : "true" === this.attrs.checked
                        }
                        set checked(e) {
                            const t = !!e;
                            this._checked !== t && (this._checked = t, this.attrs.checked = String(t), this.live && $(this.id, "checked", String(t)))
                        }
                        get disabled() {
                            return "true" === this.attrs.disabled
                        }
                        set disabled(e) {
                            const t = !!e;
                            this.attrs.disabled !== String(t) && (this.attrs.disabled = String(t), this.live && $(this.id, "disabled", String(t)))
                        }
                        select() {
                            this.live && me("setSelection", this.id, 0, -1)
                        }
                        animateNative(e, t) {
                            var n;
                            this.live && (n = ["animate", this.id, e, t], z.push(n), H())
                        }
                        focus() {
                            this.live && me("focus", this.id)
                        }
                        blur() {
                            this.live && me("blur", this.id)
                        }
                        scrollIntoView() {
                            this.live && me("scrollIntoView", this.id)
                        }
                        scrollTo(e, t) {
                            const n = "object" == typeof e && null !== e ? e : {
                                    left: e,
                                    top: t
                                },
                                i = "smooth" === n.behavior,
                                r = null == n.left ? -1 : Math.round(n.left),
                                o = null == n.top ? -1 : Math.round(n.top);
                            this.live && me("setScroll", this.id, r, o, i)
                        }
                        get offsetWidth() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.w) ? ? 0
                        }
                        get offsetHeight() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.h) ? ? 0
                        }
                        get offsetLeft() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.x) ? ? 0
                        }
                        get offsetTop() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.y) ? ? 0
                        }
                        get clientWidth() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.w) ? ? 0
                        }
                        get clientHeight() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.h) ? ? 0
                        }
                        get scrollWidth() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.contentW) ? ? 0
                        }
                        get scrollHeight() {
                            var e;
                            return (null === (e = be(this)) || void 0 === e ? void 0 : e.contentH) ? ? 0
                        }
                        get scrollLeft() {
                            var e;
                            return this._scrollEpoch === M ? (y.frameCacheHits++, this._scrollX) : (null === (e = be(this)) || void 0 === e ? void 0 : e.scrollX) ? ? 0
                        }
                        get scrollTop() {
                            var e;
                            return this._scrollEpoch === M ? (y.frameCacheHits++, this._scrollY) : (null === (e = be(this)) || void 0 === e ? void 0 : e.scrollY) ? ? 0
                        }
                        set scrollLeft(e) {
                            this.live && me("setScroll", this.id, Math.round(e), -1, !1)
                        }
                        set scrollTop(e) {
                            this.live && me("setScroll", this.id, -1, Math.round(e), !1)
                        }
                        getBoundingClientRect() {
                            const e = be(this),
                                t = (null == e ? void 0 : e.absX) ? ? 0,
                                n = (null == e ? void 0 : e.absY) ? ? 0,
                                i = (null == e ? void 0 : e.w) ? ? 0,
                                r = (null == e ? void 0 : e.h) ? ? 0;
                            return {
                                x: t,
                                y: n,
                                left: t,
                                top: n,
                                right: t + i,
                                bottom: n + r,
                                width: i,
                                height: r
                            }
                        }
                        get style() {
                            return this._style ? ? (this._style = function(e) {
                                const t = {},
                                    n = (n, i) => {
                                        t[n] = String(i);
                                        const r = qe(n, i);
                                        let o = !1;
                                        for (const t of Object.keys(r)) null == r[t] ? t in e.inlineStyle && (delete e.inlineStyle[t], o = !0) : e.inlineStyle[t] !== r[t] && (e.inlineStyle[t] = r[t], o = !0);
                                        o && ee(e)
                                    },
                                    i = {
                                        setProperty(e, t) {
                                            n(De(e), t)
                                        },
                                        removeProperty(e) {
                                            n(De(e), "")
                                        }
                                    };
                                for (const e of Be) Object.defineProperty(i, e, {
                                    get: () => t[e] ? ? "",
                                    set: t => n(e, t)
                                });
                                return i
                            }(this))
                        }
                        get isConnected() {
                            for (let e = this; e; e = e.parent)
                                if (e.isRoot) return !0;
                            return !1
                        }
                        getRootNode() {
                            let e = this;
                            for (; e.parent;) e = e.parent;
                            return e
                        }
                        get ownerDocument() {
                            return Ke
                        }
                        addEventListener(e, t) {
                            let n = this.listeners.get(e);
                            n || (n = new Set, this.listeners.set(e, n));
                            const i = n.size;
                            n.add(t), 0 === i && this.live && U(["addEventListener", this.id, e])
                        }
                        removeEventListener(e, t) {
                            const n = this.listeners.get(e);
                            n && (n.delete(t), 0 === n.size && this.live && U(["removeEventListener", this.id, e]))
                        }
                        _fire(e) {
                            const t = this.listeners.get(e.type);
                            if (t) {
                                e.currentTarget = this;
                                for (const n of [...t])
                                    if (("function" == typeof n ? n : n.handleEvent).call(this, e), e._immediatePropagationStopped) break
                            }
                        }
                        matches(e) {
                            return function(e, t) {
                                return ye(t)(e)
                            }(this, e)
                        }
                        closest(e) {
                            for (let t = this; t; t = t.parentElement)
                                if (t.matches(e)) return t;
                            return null
                        }
                        contains(e) {
                            for (let t = e; t; t = t.parent)
                                if (t === this) return !0;
                            return !1
                        }
                        get firstChild() {
                            return this.children[0] || null
                        }
                        get childNodes() {
                            return this.children
                        }
                        get parentNode() {
                            return this.parent
                        }
                        get parentElement() {
                            var e;
                            return 1 === (null === (e = this.parent) || void 0 === e ? void 0 : e.nodeType) ? this.parent : null
                        }
                        get childrenElements() {
                            return T(this)
                        }
                        get firstElementChild() {
                            return T(this)[0] || null
                        }
                        get lastElementChild() {
                            const e = T(this);
                            return e[e.length - 1] || null
                        }
                        get nextSibling() {
                            if (!this.parent) return null;
                            const e = this.parent.children.indexOf(this);
                            return this.parent.children[e + 1] || null
                        }
                        get nextElementSibling() {
                            for (let e = this.nextSibling; e; e = e.nextSibling)
                                if (1 === e.nodeType) return e;
                            return null
                        }
                        get previousElementSibling() {
                            if (!this.parent) return null;
                            for (let e = this.parent.children.indexOf(this) - 1; e >= 0; e--) {
                                const t = this.parent.children[e];
                                if (1 === t.nodeType) return t
                            }
                            return null
                        }
                        get tagName() {
                            return this.name.toUpperCase()
                        }
                        get nodeName() {
                            return this.tagName
                        }
                    }
                    class Ue {
                        constructor(e) {
                            this.nodeType = 3, this.id = t++, this.value = e, this.parent = null, this.native = !w(e), this.live = !1, this.sentStyle = null, this.listeners = new Map
                        }
                        set data(e) {
                            pe(this, String(e))
                        }
                        get data() {
                            return this.value
                        }
                        set nodeValue(e) {
                            pe(this, String(e))
                        }
                        get nodeValue() {
                            return this.value
                        }
                        set textContent(e) {
                            pe(this, String(e))
                        }
                        remove() {
                            this.parent && le(this.parent, this)
                        }
                        _fire(e) {
                            const t = this.listeners.get(e.type);
                            if (t) {
                                e.currentTarget = this;
                                for (const n of [...t])
                                    if (("function" == typeof n ? n : n.handleEvent).call(this, e), e._immediatePropagationStopped) break
                            }
                        }
                        get parentNode() {
                            return this.parent
                        }
                        get nextSibling() {
                            if (!this.parent) return null;
                            const e = this.parent.children.indexOf(this);
                            return this.parent.children[e + 1] || null
                        }
                    }
                    class Fe {
                        constructor(e) {
                            this.nodeType = 8, this.id = t++, this.value = e, this.parent = null, this.native = !1, this.live = !1
                        }
                        remove() {
                            this.parent && le(this.parent, this)
                        }
                        get parentNode() {
                            return this.parent
                        }
                        get nextSibling() {
                            if (!this.parent) return null;
                            const e = this.parent.children.indexOf(this);
                            return this.parent.children[e + 1] || null
                        }
                    }
                    const He = [],
                        Ke = {
                            createElement: e => new Pe(e),
                            createTextNode: e => new Ue(String(e)),
                            createComment: e => new Fe(String(e ? ? "")),
                            querySelector(e) {
                                for (const t of He) {
                                    const n = t.querySelector(e);
                                    if (n) return n
                                }
                                return null
                            },
                            querySelectorAll(e) {
                                const t = [];
                                for (const n of He) t.push(...n.querySelectorAll(e));
                                return t
                            },
                            getElementById(e) {
                                const t = String(e),
                                    n = C(t);
                                return n && n.isConnected ? n : this.querySelector("#" + t)
                            }
                        },
                        Je = new Map;
                    let $e = "manual";
                    const Xe = new Set;
                    return {
                        document: Ke,
                        createRoot: function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            const i = Je.get(t);
                            if (i) {
                                for (; i.firstChild;) i.removeChild(i.firstChild);
                                return i
                            }
                            const r = new Pe("div");
                            return r.live = !0, r.isRoot = !0, r.sentStyle = {}, N(r, !1), Je.set(t, r), He.push(r), e.createRoot(r.id, t, n.ime || $e), r
                        },
                        dispatch: function(e, t, n) {
                            y.eventsIn++, M++;
                            const i = function(e) {
                                const t = v.get(e);
                                return f ? null == t ? void 0 : t.deref() : t
                            }(e);
                            i && ("scroll" === t && n && "object" == typeof n && (i._scrollX = Number(n.scrollX) || 0, i._scrollY = Number(n.scrollY) || 0, i._scrollEpoch = M), n && "object" == typeof n && "value" in n ? (i._value = String(n.value), i.attrs && (i.attrs.value = i._value), "selectionStart" in n && (i._selectionStart = n.selectionStart), "selectionEnd" in n && (i._selectionEnd = n.selectionEnd)) : "change" === t && "boolean" == typeof n && (i._checked = n, i.attrs && (i.attrs.checked = String(n))), "click" === t ? je(i) : Se(i, ae(t, i, n)))
                        },
                        flush: K,
                        setNativeStyleDefinitionsUrl: function(e) {
                            let t = String(e || "");
                            try {
                                var n, i;
                                const e = (null === globalThis || void 0 === globalThis || null === (n = globalThis.document) || void 0 === n ? void 0 : n.baseURI) || (null === globalThis || void 0 === globalThis || null === (i = globalThis.location) || void 0 === i ? void 0 : i.href) || void 0;
                                e && (t = new URL(t, e).href)
                            } catch {}
                            U(["setStyleDefinitionsUrl", ++P, t])
                        },
                        setNativeTheme: function(e) {
                            const t = { ...e || {}
                            };
                            ! function(e) {
                                i = Object.freeze({ ...e || {}
                                });
                                for (const e of r) e(i)
                            }(t), U(["setTheme", t])
                        },
                        configureVariants: function(e) {
                            const t = { ...e || {}
                            };
                            ce.clear(),
                                function(e) {
                                    a = { ...s,
                                        ...e || {}
                                    };
                                    for (const e of c) e()
                                }(t), U(["configureVariants", t])
                        },
                        setImeMode: function(e) {
                            $e = e || "manual"
                        },
                        onNativeKeyboard: function(e) {
                            return Xe.add(e), () => Xe.delete(e)
                        },
                        emitNativeKeyboard: function(e) {
                            Xe.forEach((t => {
                                try {
                                    t(e)
                                } catch {}
                            }))
                        },
                        translateRoot: (t, n, i) => {
                            var r;
                            return null === (r = e.translate) || void 0 === r ? void 0 : r.call(e, t || "default", n, !!i)
                        },
                        resizeRoot: (t, n) => {
                            var i;
                            return null === (i = e.resize) || void 0 === i ? void 0 : i.call(e, t || "default", n)
                        },
                        positionRoot: (t, n, i) => {
                            var r;
                            return null === (r = e.position) || void 0 === r ? void 0 : r.call(e, t || "default", n, i)
                        },
                        scrollNativeIntoView: t => {
                            var n;
                            return null === (n = e.scrollIntoView) || void 0 === n ? void 0 : n.call(e, t)
                        },
                        createNativeWebview: function() {
                            return Ke.createElement("native-webview")
                        },
                        _onNodeCollected: g
                    }
                }(V);
            O && "undefined" != typeof setInterval && setInterval((() => {
                try {
                    var e;
                    null === (e = L.reportJsStats) || void 0 === e || e.call(L, b())
                } catch {}
            }), 2e3);
            const q = function(e) {
                return {
                    createRoot: () => e.createRoot("default"),
                    createFragment: () => ({
                        __frag: !0,
                        children: [],
                        parent: null
                    }),
                    createElement: t => e.document.createElement(t),
                    createTextNode: t => e.document.createTextNode(t),
                    createComment: t => e.document.createComment(t),
                    nodeType: R,
                    getNodeValue: e => 3 === e.nodeType || 8 === e.nodeType ? e.value : null,
                    getAttribute: (e, t) => {
                        var n;
                        return "class" === t ? e.classString || null : (null === (n = e.attrs) || void 0 === n ? void 0 : n[t]) ? ? null
                    },
                    setAttribute: (e, t, n) => e.setAttribute(t, "src" === t || "href" === t ? function(e) {
                        return !e || /^(https?:|data:|blob:)/.test(e) || "undefined" == typeof location ? e : "/" === e[0] ? location.origin + e : new URL(e, location.href).href
                    }(String(n)) : n),
                    removeAttribute: (e, t) => e.removeAttribute(t),
                    hasAttribute: (e, t) => "class" === t ? !!e.classString : !(!e.attrs || !(t in e.attrs)),
                    setText: (e, t) => {
                        e.nodeValue = t
                    },
                    getFirstChild: E,
                    getLastChild: C,
                    getNextSibling: M,
                    insert: (e, t, n) => x(e, t, n ? ? null),
                    remove: e => function(e) {
                        var t;
                        if (e.parent && N(e.parent)) {
                            const t = e.parent.children,
                                n = t.indexOf(e);
                            return n >= 0 && t.splice(n, 1), void(e.parent = null)
                        }
                        null === (t = e.remove) || void 0 === t || t.call(e)
                    }(e),
                    getParent: A,
                    addEventListener: (e, t, n) => {
                        var i;
                        return null === (i = e.addEventListener) || void 0 === i ? void 0 : i.call(e, t, n)
                    },
                    removeEventListener: (e, t, n) => {
                        var i;
                        return null === (i = e.removeEventListener) || void 0 === i ? void 0 : i.call(e, t, n)
                    }
                }
            }(j);
            if ("undefined" != typeof window) {
                const e = window.RazorpayNative;
                window.RazorpayNative = {
                    dispatch: j.dispatch,
                    keyboard: j.emitNativeKeyboard,
                    definitionsStatus: e ? e.definitionsStatus : void 0,
                    setTheme: j.setNativeTheme,
                    configureVariants: j.configureVariants,
                    bridge: O ? V : void 0,
                    setLog: g
                }
            }
            if (O && "undefined" != typeof document && document.querySelector) {
                const e = {
                    qs: document.querySelector.bind(document),
                    qsa: document.querySelectorAll.bind(document),
                    byId: document.getElementById.bind(document)
                };
                document.querySelector = t => e.qs(t) || j.document.querySelector(t), document.querySelectorAll = t => {
                    const n = e.qsa(t);
                    return n.length ? n : j.document.querySelectorAll(t)
                }, document.getElementById = t => e.byId(t) || j.document.getElementById(t)
            }
            const B = q,
                D = function(e) {
                    try {
                        for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                        null === (t = V[e]) || void 0 === t || t.call(V, ...i)
                    } catch {}
                };
            if ("undefined" != typeof navigator) try {
                navigator.vibrate = e => {
                    const t = Array.isArray(e) ? e : [Number(e) || 0];
                    return D("vibrate", JSON.stringify(t)), !0
                }
            } catch {}
            const W = j.setNativeTheme,
                P = j.setNativeStyleDefinitionsUrl,
                U = j.configureVariants,
                F = () => j.createRoot("default"),
                H = j.setImeMode,
                K = j.onNativeKeyboard,
                J = j.translateRoot,
                $ = j.resizeRoot,
                X = j.positionRoot,
                Y = j.scrollNativeIntoView,
                G = function(e, t) {
                    return D("addFont", e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "")
                },
                Z = j.createNativeWebview
        }
    }
]);