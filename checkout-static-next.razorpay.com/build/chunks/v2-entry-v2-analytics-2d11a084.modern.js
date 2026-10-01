"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [88292], {
        30180(e, t, n) {
            n.d(t, {
                Le: () => l,
                eM: () => u
            });
            var r = n(65047),
                o = n(26718),
                i = n(72912);
            const a = [],
                c = (0, r.observable)(a);

            function l(e) {
                a.splice(e).forEach((e => e.resolve())), c.discharge()
            }

            function u() {
                l(-1)
            }
            n.d(t, ["Ej", 0, a, "jO", 0, c, "uP", 0, e => t => {
                var n, u;
                null === (n = document.activeElement) || void 0 === n || null === (u = n.blur) || void 0 === u || u.call(n);
                const [s, d] = (0, i._7)(), m = (0, o.yG)(t.props || {}), [f, p] = (0, r.createStore)(), _ = { ...t,
                    index: a.length,
                    id: (0, r.symbol)(),
                    container: e,
                    props: m,
                    promise: s,
                    getState: f,
                    setState: p,
                    pop: () => {
                        const e = a.indexOf(_);
                        e >= 0 && l(e)
                    },
                    popAfter: () => {
                        const e = a.indexOf(_);
                        e >= 0 && l(e + 1)
                    },
                    close: () => {
                        const e = a.indexOf(_);
                        e >= 0 && function(e) {
                            if (e >= 0 && e < a.length) {
                                var t;
                                null === (t = a.splice(e, 1)[0]) || void 0 === t || t.resolve(), c.discharge()
                            }
                        }(e)
                    },
                    resolve: e => {
                        d(e), _.pop()
                    }
                };
                return m.stackElement = _, a.push(_), c.discharge(), _
            }])
        },
        56155(e, t, n) {
            n.d(t, {
                A: () => E,
                z: () => b
            });
            var r = n(28949),
                o = n(14494),
                i = n(44138),
                a = n(56337),
                c = n(81352),
                l = n(18779),
                u = n(93153),
                s = n(47705),
                d = n(26718),
                m = n(78400),
                f = n(35999),
                p = n(21117),
                _ = n(45148),
                g = n(73477),
                h = n(81825);
            const v = [],
                y = {
                    sdk_version: (0, a.$2)()
                };

            function b(e, t) {
                t ? y[e] = t : delete y[e]
            }

            function w(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                const r = {
                    url: "https://lumberjack.razorpay.com/v1/track",
                    data: {
                        mode: "live",
                        key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                        events: e,
                        context: y
                    }
                };
                (0, m.V5)() && (r.url = `${r.url}?key_id=${(0,m.V5)()}`);
                const o = (0, d.Zm)(r.data);
                if (!o) return;
                if (new Blob([o]).size > (t ? 65536 : f.i)) {
                    if (n >= 10) return;
                    if (1 === e.length) return void w([(0, l.Jx)(e[0])], t, n + 1);
                    const r = Math.floor(e.length / 2);
                    return w(e.slice(0, r), t, n + 1), void w(e.slice(r), t, n + 1)
                }
                try {
                    fetch(r.url, {
                        method: "POST",
                        body: o,
                        keepalive: t
                    }).catch((() => {}))
                } catch (e) {}
            }

            function k() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const n = v.splice(0, v.length);
                if ((0, o.Wj)() && n.length && !u.w2) {
                    const e = (0, l.Rx)(n);
                    e.length && w(e, t)
                }
                n.length && !u.w2 && ((0, l.le)() ? null !== (e = (0, m.V5)()) && void 0 !== e && e.includes("rzp_live_") : (0, o.A9)()) && w(n, t)
            }
            async function E(e) {
                var t;
                const n = {
                    event: e.name,
                    properties: {},
                    merchant_id: "",
                    checkout_id: (0, i.v6)(),
                    event_version: "v2",
                    event_type: (0, l.vd)(),
                    build_id: a.L$ || "",
                    order_id: (0, c.EX)() || "",
                    platform: (0, a.yt)() ? 2 : 1,
                    product: (0, l.oM)(),
                    view: (0, s.a)() || (0, u.PS)() ? 1 : 0,
                    unified_session_id: (0, g._)(),
                    value: "",
                    previous: "",
                    lj_data: (0, r.ve)("merchant.data.metadata.lj_data"),
                    ...(0, l.w2)(),
                    ...e,
                    content: [...new Set(null === (t = e.content) || void 0 === t ? void 0 : t.filter((e => e)))],
                    parent: e.parent || "",
                    timestamp: Date.now()
                };
                try {
                    n.properties = { ...n.properties,
                        journey_context: (0, h.E3)()
                    }
                } catch {}
                if (!n.order_id && (0, p.u)()) try {
                    const e = await Promise.race([(0, _.X)(), (0, c.EX)()]);
                    n.order_id = e || ""
                } catch (e) {
                    n.order_id = ""
                }((0, l.le)() || (0, l.$C)() && !n.lj_data) && delete n.lj_data, delete n.name, v.push(n)
            }
            setInterval(k, 1e3), "undefined" != typeof document && document.addEventListener("visibilitychange", (() => {
                "hidden" === document.visibilityState && k(!0)
            }))
        },
        35999(e, t, n) {
            n.d(t, ["K", 0, {
                production: 1,
                canary: 2,
                baseline: 3
            }, "i", 0, 1e6])
        },
        18779(e, t, n) {
            n.d(t, {
                Jx: () => y,
                w2: () => d,
                vd: () => v,
                oM: () => _,
                Rx: () => f,
                $C: () => h,
                le: () => g
            });
            var r = n(56337);
            const o = 1,
                i = 2,
                a = 3,
                c = 4,
                l = 5;
            var u = n(35999),
                s = n(21117);

            function d() {
                return {
                    env: u.K[(0, r.zG)()] || 0,
                    device: p()
                }
            }
            const m = ["show_checkout_failed_on_missing_key", "show_checkout_failed_on_external_script_source"];

            function f(e) {
                return e.filter((e => m.includes(e.event)))
            }

            function p() {
                const e = "undefined" != typeof navigator ? navigator.userAgent : "";
                let t, n, r = e.match(/iPhone; CPU iPhone OS (\d+)/);
                return r ? (t = 1, n = r[1]) : (r = e.match(/iPad; CPU OS (\d+)/), r ? (t = 2, n = r[1]) : (r = e.match(/Mac OS X (\w+)/), r ? (t = 3, n = r[1].split("_").join("")) : (r = e.match(/Windows NT (\d+)/), r ? (t = 4, n = r[1]) : (r = e.match(/Linux; Android (\d+)/), r ? (t = 5, n = r[1]) : (r = e.match(/Linux/), r && (t = 6)))))), [t || 0, Number(n) || 0]
            }

            function _() {
                switch (!0) {
                    case (0, r.D4)():
                        return l;
                    case (0, r.Vr)():
                        return c;
                    case (0, r.Lq)():
                        return a;
                    case (0, s.u)():
                        return i;
                    default:
                        return o
                }
            }

            function g() {
                return _() === c
            }

            function h() {
                return _() === l
            }

            function v() {
                const e = _();
                return e === c || e === l ? "checkout-widgets" : "checkout"
            }

            function y(e) {
                return {
                    event: `log:${e.event}`,
                    page_url: window.location.href,
                    checkout_id: e.checkout_id,
                    order_id: e.order_id,
                    timestamp: Date.now()
                }
            }
        },
        47783(e, t, n) {
            n.r(t), n.d(t, {
                getParentEvent: () => Q,
                getScreen: () => L.XG,
                getSection: () => L.Sx,
                log: () => V,
                logChangeFn: () => ce,
                logClick: () => re,
                logContentFn: () => K,
                logDismiss: () => ee,
                logExternalSDKMessage: () => le,
                logInputFn: () => ue,
                logJSError: () => me,
                logNetworkRequest: () => ae,
                logPageRender: () => W,
                logPerformanceMetrics: () => de,
                logRender: () => q,
                logRenderFn: () => se,
                logRequest: () => ie,
                logScroll: () => oe,
                logSubmit: () => ne,
                logUnmount: () => te,
                setScreen: () => L.BJ,
                setSection: () => L.c4,
                v3Events: () => fe
            });
            var r = n(46434),
                o = n(65047),
                i = n(72912),
                a = n(58383),
                c = n(28949),
                l = n(44138),
                u = n(80896),
                s = n(45325),
                d = n(65878),
                m = n(71711),
                f = n(56337),
                p = n(14494),
                _ = n(81352),
                g = n(61613),
                h = n(78400),
                v = n(8281),
                y = n(30192),
                b = n(50952),
                w = n(60431),
                k = n(18779);
            async function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                const {
                    url: r,
                    data: o
                } = await t(e), i = (0, y.Kg)(o) ? o : JSON.stringify(o);
                if (new Blob([i]).size > 65536) {
                    if (n >= 10) return;
                    if (1 === e.length) return void await E([(0, k.Jx)(e[0])], t, n + 1);
                    const r = Math.floor(e.length / 2);
                    return await E(e.slice(0, r), t, n + 1), void await E(e.slice(r), t, n + 1)
                }
                let a = !1;
                try {
                    "function" == typeof window.navigator.sendBeacon && (a = navigator.sendBeacon(r, i)), a || (0, w.Ay)({
                        url: r,
                        method: "post",
                        data: o,
                        name: "analytics"
                    }).catch((() => {}))
                } catch {}
            }
            async function S(e, t) {
                const n = e.splice(0, e.length);
                n.length && await E(n, t)
            }
            var A = n(45148),
                C = n(30551),
                O = n(93153),
                R = n(87202),
                D = n(79869),
                P = n(21117);
            let I = 1;
            let N = {
                amount: () => (0, v.vn)(),
                "timeSince.open": () => Date.now() - ((0, a.s_)() || Date.now() + 1),
                checkout_id: (0, l.v6)(),
                platform_device: (0, f.uo)() === f.Xp ? "sdk" : (0, O.PS)() ? "dweb" : "mweb",
                sdk_version: (0, f.$2)(),
                checkout_build_number: f.L$,
                merchant_key: (0, h.V5)(),
                order_id: (0, _.EX)(),
                is_magic_checkout: (0, P.u)() || (0, f.rM)(),
                library: (0, f.G9)(),
                prefill_contact_number: (0, R.getPrefillContact)(),
                prefill_email: (0, R.getPrefillEmail)(),
                currency: (0, D.OY)(),
                plugin_name: (0, h.Rw)("_.integration"),
                plugin_version: (0, h.Rw)("_.integration_version"),
                "timeSince.render": () => Date.now() - ((0, a.qb)() || Date.now() + 1),
                region: () => (0, f.JN)()
            };
            const x = function(e) {
                    const t = [];
                    return setInterval((() => S(t, e)), 1e3),
                        function(n) {
                            t.push(n), (null == t ? void 0 : t.length) > 2 && S(t, e)
                        }
                }((async e => {
                    const t = await T();
                    return {
                        url: "https://lumberjack.razorpay.com/v1/track",
                        data: {
                            key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                            data: encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify({
                                context: t,
                                addons: [{
                                    name: "ua_parser",
                                    input_key: "user_agent",
                                    output_key: "user_agent_parsed"
                                }],
                                events: e
                            })))))
                        }
                    }
                })),
                T = async () => {
                    const e = {
                            checkout_id: (0, l.v6)(),
                            current_script_src: ((null === d.XZ || void 0 === d.XZ ? void 0 : d.XZ.src) ? ? "").replace(/.+\//, ""),
                            "device.id": (0, m.IP)(),
                            "device.screen.availHeight": window.screen.availHeight,
                            "device.screen.availWidth": window.screen.availWidth,
                            "device.screen.height": window.screen.height,
                            "device.screen.width": window.screen.width,
                            "device.screen.pixelDepth": window.screen.pixelDepth,
                            env: (0, f.zG)(),
                            is_magic_script: (0, f.rM)(),
                            is_magicx_script: (0, f.Lq)(),
                            product: (0, k.oM)(),
                            library: (0, f.G9)(),
                            library_src: (0, f.rM)() ? "magic-checkout.js" : "checkout.js",
                            mode: (0, p.A9)() ? "live" : "test",
                            platform: (0, f.uo)(),
                            user_agent: navigator.userAgent,
                            checkout_version: "v2",
                            merchant_key: (0, h.V5)()
                        },
                        t = (0, P.u)() ? await Promise.race([(0, A.X)(), (0, _.EX)()]) : (0, _.EX)();
                    t && (e.order_id = t);
                    const n = (0, g.IN)(),
                        r = (0, g._j)();
                    return r && (e.package_name = r), n && (e.referer = n), e
                };

            function M(e) {
                var t, n, r;
                const o = (0, h.Rw)();
                if (!o) return {};
                const i = { ...o
                };
                if (i.image) {
                    const e = i.image;
                    i.image = e.startsWith("data:") ? "data" : e.slice(0, 30)
                }
                return null != o && null !== (t = o.external) && void 0 !== t && t.handler && (i.handler = !0), o.callback_url && (i.callback_url = !0), delete i.keyless_header, (o["prefill.card[number]"] || o["prefill.card[cvv]"]) && (i.prefill.card = !0), "render:complete" !== e && null !== (n = o.shopify_cart) && void 0 !== n && n.items && (i.shopify_cart = { ...i.shopify_cart,
                    items: o.shopify_cart.items.length
                }), "render:complete" !== e && null !== (r = o.cart) && void 0 !== r && r.line_items && (i.cart = { ...i.cart,
                    line_items: o.cart.line_items.length
                }), i.external_wallets = (o["external.wallets"] || []).reduce(((e, t) => ({ ...e,
                    [t]: !0
                })), {}), i
            }

            function $() {
                const e = Object.entries(N).reduce(((e, t) => {
                    let [n, r] = t;
                    return (0, y.Kg)(r) || "boolean" == typeof r || (0, b.Et)(r) ? { ...e,
                        [n]: r
                    } : "function" == typeof r ? { ...e,
                        [n]: r()
                    } : e
                }), {});
                return N.counter = I++, e
            }
            var B = n(56155),
                L = n(15963),
                j = n(31992),
                G = n(74471),
                z = n(30180);
            (0, o.symbol)();
            const F = (0, o.symbol)();
            var X = n(21734);

            function J() {
                try {
                    const e = (0, G.P)(),
                        t = (0, j.Jt)(e),
                        n = (0, j.Jt)(z.jO).filter((e => e.container === F));
                    if (n.some((e => e.name === X.rB)) && !t) return {
                        pop_screen: "pop_L0"
                    };
                    if (!t) return;
                    const r = function(e) {
                        if (!e) return;
                        const t = e.match(/^L(\d+)$/i);
                        if (t) {
                            const e = parseInt(t[1], 10);
                            return (0, O.PS)() ? `pop_L${e}` : e > 0 ? "pop_L" + (e - 1) : "pop_L0"
                        }
                        return `pop_${e}`
                    }((0, L.XG)());
                    if (!r) return;
                    return {
                        pop_screen: r
                    }
                } catch {
                    return
                }
            }
            let Y = 1;

            function V(e, t) {
                try {
                    if ((0, l.v6)() === l.X2) return;
                    if ((0, i.yL)(e.promise)) ! function(e, t) {
                        const [n, r] = (0, i._7)();
                        let o = setTimeout(r, 1e3);
                        const a = Date.now();
                        e.promise.then((n => {
                            clearTimeout(o), V({ ...e,
                                promise: void 0,
                                metric: Date.now() - a,
                                meta: {
                                    init: o ? 0 : 1,
                                    status: 1
                                },
                                properties: { ...e.properties,
                                    response: null != t && t.trackPromiseResponse ? null == n ? void 0 : n.data : void 0
                                }
                            })
                        })).catch((() => {
                            clearTimeout(o), V({ ...e,
                                promise: void 0,
                                metric: Date.now() - a,
                                meta: {
                                    init: o ? 0 : 1,
                                    status: 2
                                }
                            })
                        })), n.then((() => {
                            o = null, V({ ...e,
                                promise: void 0,
                                meta: {
                                    status: 0
                                }
                            })
                        }))
                    }(e, t);
                    else {
                        var n;
                        const t = (0, a.s_)(),
                            r = (0, a.qb)(),
                            o = Date.now();
                        (0, B.A)({
                            parent: Z,
                            previous: H,
                            screen: L.ku,
                            section: L.PX,
                            ...e,
                            meta: { ...e.meta,
                                time_since_open: o - t,
                                time_since_render: o - r,
                                counter: Y++,
                                pop_tracking_props: J()
                            },
                            content: [...new Set(null === (n = e.content) || void 0 === n ? void 0 : n.filter((e => e)))]
                        })
                    }
                } catch (e) {
                    0,
                    (0, s.vV)("trackingError", e)
                }
            }

            function q(e) {
                V({ ...e,
                    name: `render:${e.name}`
                })
            }

            function W(e) {
                H = Z, Z = e.name, q({ ...e,
                    parent: ""
                })
            }
            let Z = "",
                H = "";
            const U = (0, o.symbol)();

            function K(e) {
                const t = {
                        properties: {},
                        content: [],
                        ...e
                    },
                    n = (0, u.sg)((() => {
                        t.content.length && (q(t), t.content.length = 0)
                    }), 1e3),
                    o = {
                        content: t.content,
                        properties: t.properties,
                        logger: n
                    };
                return (0, r.o)(U, o), o
            }

            function Q() {
                return (0, r.SD)(U)
            }

            function ee(e) {
                V({ ...e,
                    name: `dismiss:${e.name}`
                })
            }

            function te(e) {
                V({ ...e,
                    name: `unmount:${e.name}`
                })
            }

            function ne(e) {
                V({ ...e,
                    name: `submit:${e.name}`
                })
            }

            function re(e) {
                V({ ...e,
                    name: `click:${e.name}`
                })
            }

            function oe(e) {
                V({ ...e,
                    name: `scroll:${e.name}`
                })
            }

            function ie(e) {
                V({ ...e,
                    name: `net:${e.name}`
                })
            }

            function ae(e, t) {
                V({ ...e,
                    name: `net:${e.name}`,
                    value: e.value
                }, t)
            }

            function ce(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "change",
                    n = e.value;
                return (0, u.sg)((r => ("boolean" == typeof r ? r = {
                    value: r ? "1" : "0"
                } : "string" != typeof r && "number" != typeof r || (r = {
                    value: r
                }), r.value !== n && (V({ ...e,
                    name: `${t}:${e.name}`,
                    ...r
                }), n = r.value), n)), 0)
            }

            function le(e) {
                V({ ...e,
                    name: `sdk:${e.name}`
                })
            }

            function ue(e) {
                return (0, u.Oo)((() => {
                    V({ ...e,
                        name: `input:${e.name}`
                    })
                }))
            }
            const se = e => ce(e, "render"),
                de = e => V({ ...e,
                    name: `performance:${e.name}`
                }),
                me = e => V({
                    name: "js_error",
                    properties: { ...e
                    }
                }),
                fe = {
                    network_request_initiated: e => ae({ ...e,
                        value: e.url,
                        name: "initiated",
                        properties: {
                            key: e.key,
                            name: e.name,
                            priority: e.priority,
                            url: e.url,
                            ...e.x_entity_id && {
                                x_entity_id: e.x_entity_id
                            }
                        }
                    }, {
                        trackPromiseResponse: e.trackPromiseResponse
                    }),
                    network_request_success: e => ae({ ...e,
                        metric: e.latency,
                        value: e.url,
                        name: "success",
                        properties: {
                            key: e.key,
                            name: e.name,
                            priority: e.priority,
                            url: e.url,
                            status: e.status,
                            latency: e.latency,
                            request_id: e.request_id
                        }
                    }),
                    network_request_failed: e => ae({ ...e,
                        metric: e.latency,
                        value: e.url,
                        name: "failed",
                        properties: {
                            key: e.key,
                            priority: e.priority,
                            url: e.url,
                            status: e.status,
                            latency: e.latency,
                            data: e.data,
                            request_id: e.request_id
                        }
                    }),
                    network_request_aborted: e => ae({ ...e,
                        metric: e.latency,
                        value: e.url,
                        name: "aborted",
                        properties: {
                            key: e.key,
                            priority: e.priority,
                            url: e.url,
                            latency: e.latency,
                            status: e.status,
                            data: e.data,
                            request_id: e.request_id
                        }
                    }),
                    js_error: e => me(e),
                    dummy_value_detected: e => V({
                        name: "dummy_value_detected",
                        properties: e
                    })
                };
            (0, s.MR)((e => {
                const t = e;
                setTimeout((() => {
                    if ((0, l.v6)() !== l.X2 || !(0, c.ES)()) try {
                        var e;
                        !async function(e) {
                            var t;
                            if (e.type === C.q.SETMETA) return void(N = { ...N,
                                library: (0, f.G9)(),
                                ...e.log.detail
                            });
                            if (!(0, p.A9)() || O.w2 || (0, k.le)() || (0, k.$C)()) return;
                            null === (t = (await Promise.all([n.e(38544), n.e(92587), n.e(92026), n.e(23696), n.e(81352), n.e(88292), n.e(62624), n.e(25153)]).then(n.bind(n, 24746)).catch((() => ({
                                getEvents: () => []
                            })))).getEvents(e)) || void 0 === t || t.forEach((async t => {
                                let n;
                                n = (0, P.u)() ? await Promise.race([(0, A.X)(), Promise.resolve((0, _.EX)())]) : (0, _.EX)(), n = n || (0, l.v6)();
                                const r = await t;
                                if (!r || !r.name) return;
                                if ("add_meta" === r.name) return void(N = { ...N,
                                    ...r.data
                                });
                                const o = {
                                    event: r.name,
                                    properties: {
                                        options: M(r.name),
                                        local_order_id: n,
                                        build_number: f.L$,
                                        data: { ...r.data || {},
                                            meta: $()
                                        }
                                    },
                                    timestamp: e.time
                                };
                                x(o)
                            }))
                        }(t), null === (e = fe[t.log.name]) || void 0 === e || e.call(fe, { ...t.log.detail,
                            ...t.log.options || {}
                        })
                    } catch (e) {
                        0,
                        (0, s.vV)("trackingError", e)
                    }
                }))
            }))
        },
        81825(e, t, n) {
            n.d(t, {
                E3: () => h,
                HD: () => f,
                p4: () => m
            });
            var r = n(68661),
                o = n(62421),
                i = n(21117),
                a = n(82314),
                c = n(56337),
                l = n(78400),
                u = n(28949);
            let s = "",
                d = !1;

            function m(e) {
                s = e, d = !1
            }

            function f() {
                s = "", d = !0
            }

            function p() {
                if (s) return "logged_in";
                if (d) return "guest";
                return (0, u.ve)("customer.data") ? "pre_logged_in" : "guest"
            }

            function _() {
                if (!(0, i.u)()) return "";
                if ((0, a.yp)()) return "shopify";
                const e = (0, l.Rw)("_.integration");
                return "woocommerce" === e ? "woocommerce" : "magento" === e ? "magento" : (0, a.Zs)() ? "native" : "other"
            }
            const g = {
                flow: "",
                auth_state: "",
                login_source: "",
                store_platform: "",
                mid: ""
            };

            function h() {
                try {
                    const t = !(!(0, c.Vr)() && !(0, c.D4)()) || Boolean(null === (e = (0, u.xD)()) || void 0 === e ? void 0 : e.merchant);
                    return {
                        flow: t ? (0, i.u)() ? (0, o.nN)() ? "quickbuy" : (0, r.t)() ? "opc" : (0, r.RM)() ? "stepper" : "unknown" : "" : "unknown",
                        auth_state: t ? p() : "unknown",
                        login_source: s,
                        store_platform: t ? _() : "unknown",
                        mid: t ? String((0, u.ve)("merchant.data.metadata.unique_id", "") ? ? "") : "unknown"
                    }
                } catch {
                    return { ...g
                    }
                }
                var e
            }
        },
        15963(e, t, n) {
            let r, o;

            function i() {
                return r
            }

            function a(e) {
                r = e
            }

            function c() {
                return o
            }

            function l(e) {
                "recommended" === e && (e = "p13n"), o = e
            }
            n.d(t, {
                BJ: () => a,
                PX: () => o,
                Sx: () => c,
                XG: () => i,
                c4: () => l,
                ku: () => r
            })
        },
        73738(e, t, n) {
            const r = new RegExp("^[^@\\s]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)+$");
            n.d(t, ["MK", 0, {
                regular: "font-normal",
                medium: "font-medium",
                bold: "font-bold"
            }, "Xw", 0, r, "a1", 0, {
                pending: "pending",
                resolved: "resolved",
                rejected: "rejected"
            }])
        },
        8281(e, t, n) {
            n.d(t, {
                gp: () => b,
                j_: () => k,
                PM: () => R,
                mr: () => p,
                b0: () => P,
                Wx: () => D,
                hR: () => I,
                vn: () => N,
                nh: () => T,
                E2: () => M,
                v9: () => L,
                cb: () => x,
                HO: () => g,
                VL: () => v,
                Rs: () => B,
                EH: () => y,
                sr: () => C,
                fm: () => S,
                LP: () => w,
                ch: () => E,
                ug: () => A,
                o5: () => O
            });
            var r = n(31992),
                o = n(14494),
                i = n(81345);
            var a = n(21117),
                c = n(56141),
                l = n(55426),
                u = n(28949),
                s = n(82435),
                d = n(44160),
                m = n(89479);
            const f = (0, r.T5)(0),
                p = (0, r.T5)([]),
                _ = (0, r.T5)([]);

            function g() {
                const e = (0, o.ud)() || (0, o.Ry)() || (0, u.om)("currency") || (0, o.Ou)(),
                    t = (0, c.IP)() ? .1 : 1;
                try {
                    return (0, m.Mn)(t, {
                        currency: e
                    })
                } catch (e) {
                    return (0, c.IP)() ? 10 : 100
                }
            }

            function h(e) {
                var t;
                const n = "string" == typeof e ? parseInt(e, 10) : e,
                    r = "number" == typeof n && n >= g(),
                    a = Number.isFinite(n);
                return [i.C_, i.N7].includes(null === (t = (0, o.r$)()) || void 0 === t ? void 0 : t.method) || Boolean((0, o.uV)() || (0, u.om)("recurring") && (0, o.r$)()) || a && (0, s.jI)("enable_import_flow") ? Number(n) : a && r ? n : g()
            }

            function v(e) {
                const t = h(e);
                t && (f.set(0), p.set([]), _.set([]), C.set(0), f.set(t))
            }

            function y(e) {
                const t = h(e);
                t && f.set(t)
            }

            function b(e) {
                p.update((t => [...t, e]))
            }

            function w(e) {
                p.update((t => t.filter((t => !e(t)))))
            }

            function k(e) {
                _.update((t => [...t, e]))
            }

            function E(e) {
                _.update((t => t.filter((t => !e(t)))))
            }
            const S = _;

            function A(e) {
                _.update((t => function(e, t) {
                    const n = e.findIndex(t);
                    if (-1 === n) return e;
                    const r = [...e];
                    return r.splice(n, 1), r
                }(t, e)))
            }
            const C = (0, r.T5)(null);

            function O(e) {
                if (e) {
                    const t = h(e);
                    t && C.set(t)
                } else C.set(null)
            }
            const R = (0, r.un)([f, p, _], (e => {
                    let [t, n, r] = e;
                    const o = function(e, t, n) {
                        let r = e,
                            o = 0;
                        const c = [];
                        n.filter((e => "cart" === e.applicableOn)).forEach((e => m(e, t))), t.forEach(s), n.filter((e => "order" === e.applicableOn)).forEach((e => m(e, t))), n.filter((e => "shipping" === e.applicableOn)).forEach((e => m(e, t)));
                        const u = c.map((e => e.appliedDeductionAmount)).reduce(((e, t) => e + t), 0);
                        return {
                            finalOrderAmount: r,
                            totalDeductionAmount: u,
                            updatedDeductions: c,
                            totalAppliedChargeAmount: o
                        };

                        function s(e) {
                            "order" === e.appliedOn && (r += e.chargeAmount, o += e.chargeAmount)
                        }

                        function m(e, t) {
                            var o;
                            const u = "shipping" === e.applicableOn && "coupon" === e.type;
                            let s;
                            const m = (0, a.u)() && "partial-cod" === e.type && "number" == typeof(null === (o = e.metadata) || void 0 === o ? void 0 : o.advanceAmount) ? e.metadata.advanceAmount : null;
                            s = null !== m ? Math.max(r - m, 0) : (0, a.u)() ? Math.round(e.appliedDeductionAmount) : e.appliedDeductionAmount;
                            let f = g();
                            const p = t.find((e => e.chargeAmount > 0)) && !u,
                                _ = n.find((e => e.type === l.L)),
                                h = (0, a.u)() && (0, d.T)();
                            if ((p || _ || h) && (f = 0), !(0, a.u)() && e.type === i.eH) return s = Math.min(s, r), r = Math.max(r - s, 0), void c.push({ ...e,
                                appliedDeductionAmount: s
                            });
                            r - s < f && (s = r - f), r = Math.max(r - s, f), c.push({ ...e,
                                appliedDeductionAmount: s
                            })
                        }
                    }(t, n, r);
                    return {
                        originalOrderAmount: t,
                        finalOrderAmount: o.finalOrderAmount,
                        charges: {
                            totalAppliedChargeAmount: o.totalAppliedChargeAmount,
                            chargesApplied: n
                        },
                        deductions: {
                            totalDeductionAmount: o.totalDeductionAmount,
                            deductionsApplied: o.updatedDeductions
                        }
                    }
                })),
                D = (0, r.un)(R, (e => {
                    const t = e.charges.chargesApplied.filter((e => "fee" === e.type)).reduce(((e, t) => e + t.chargeAmount), 0),
                        n = e.deductions.deductionsApplied.reduce(((e, t) => "offer" === t.type ? e + t.appliedDeductionAmount : e), 0);
                    return e.finalOrderAmount + n - t
                })),
                P = (0, r.un)(R, (e => {
                    const t = e.deductions.deductionsApplied.reduce(((e, t) => "offer" === t.type ? e + t.appliedDeductionAmount : e), 0);
                    return e.finalOrderAmount + t
                })),
                I = (0, r.un)(R, (e => {
                    let {
                        finalOrderAmount: t
                    } = e;
                    return t
                }));

            function N() {
                return (0, r.Jt)(I)
            }

            function x() {
                return (0, r.Jt)(R).originalOrderAmount
            }

            function T() {
                return (0, r.Jt)(P)
            }
            const M = (0, r.un)(_, (e => e.filter((e => e.type === i.eH)).reduce(((e, t) => e + t.appliedDeductionAmount), 0))),
                $ = (0, r.un)(_, (e => e.filter((e => e.type === l.L)).reduce(((e, t) => e + t.appliedDeductionAmount), 0))),
                B = (0, r.un)([M, $], (e => {
                    let [t, n] = e;
                    return {
                        gift_cards: t,
                        razorpay_wallet: n,
                        isSecondaryPaymentApplied: t > 0 || n > 0
                    }
                }));

            function L() {
                return (0, r.Jt)(B)
            }
        },
        88142(e, t, n) {
            n.d(t, {
                J: () => f,
                y: () => _
            });
            var r = n(22974),
                o = n(23871),
                i = n(60431),
                a = n(14494),
                c = n(58518),
                l = n(78854),
                u = n(15461);
            let s = !1;
            const d = {
                cookie_enabled: "undefined" != typeof navigator && navigator.cookieEnabled
            };

            function m(e) {
                e && (0, l.c)(e.email) && (d.dummy_email = e.email, d.dummy_email_removed = !0, e.email = "")
            }

            function f() {
                try {
                    var e, t;
                    const n = function() {
                            let e;
                            try {
                                e = JSON.parse((0, o.Gq)("rzp_contact") || "")
                            } catch (e) {}
                            return e || (e = {}), Object.assign({
                                contact: "",
                                email: ""
                            }, e)
                        }(),
                        i = { ...(0, a.W5)()
                        };
                    m(n), m(i), d.experiment_enabled = !0, d.details_present_in_localstorage = Boolean((null == n ? void 0 : n.contact) || (null == n ? void 0 : n.email)), d.details_present_in_cookie = Boolean((null == i ? void 0 : i.contact) || (null == i ? void 0 : i.email));
                    let c = i;
                    if (null !== (e = c) && void 0 !== e && e.contact || null !== (t = c) && void 0 !== t && t.email || (d.missing_final_details = !0, null != n && n.contact || null != n && n.email ? (c = n, d.final_details_added_from_localstorage = !0) : (null != i && i.contact || null != i && i.email) && (c = i, d.final_details_added_from_cookie = !0)), (null == i || !i.contact) && (null == i || !i.email) && (null != n && n.contact || null != n && n.email)) try {
                        d.attemp_adding_local_storage_data_to_cookie = !0, s || (p(n), s = !0, (0, r.logEvent)("cookie_prefill_fallback"))
                    } catch (e) {}
                    return function(e) {
                        var t;
                        if (!e) return !1;
                        const n = null === (t = (0, u.parsePhoneNumber)(e)) || void 0 === t ? void 0 : t.phoneNumber;
                        return !!n && (new Set(n || "").size <= 2 || ["1234567890", "1231231234", "9876543210"].includes(n))
                    }(c.contact) && (d.dummy_contact = c.contact, d.dummy_contact_removed = !0, c.contact = ""), (0, r.logEvent)("contact_prefill_debug", d), {
                        contact: c.contact || "",
                        email: c.email || ""
                    }
                } catch (e) {
                    return {
                        contact: "",
                        email: ""
                    }
                }
            }

            function p(e) {
                (0, i.Ay)({
                    url: "checkout/prefill/encrypt",
                    method: "post",
                    data: e || {},
                    name: "checkout_prefill_encrypt",
                    s: 1
                }, i.i9).then((e => {
                    const t = null == e ? void 0 : e.data;
                    (0, c.D)(t, (0, a.Br)("checkout_merchant_domain_prefill"))
                })).catch((() => {}))
            }

            function _(e) {
                let {
                    contact: t,
                    email: n
                } = e;
                if ((0, a.jI)("one_cc_disableemailcookie")) return;
                const r = f();
                r.contact = t || r.contact;
                const o = (0, l.c)(n) ? "" : n;
                r.email = o || r.email, p(r)
            }
        },
        87202(e, t, n) {
            n.r(t), n.d(t, {
                getContact: () => j,
                getContactAndEmailOnBlurInContactScreen: () => _e,
                getDialCode: () => G,
                getEmail: () => H,
                getFormErrorInContactScreen: () => ge,
                getFormattedContact: () => L,
                getIsEmailOptionalConfig: () => de,
                getIsEmailVisibleConfig: () => se,
                getPrefillContact: () => Y,
                getPrefillContactFromOption: () => X,
                getPrefillContactFromStorage: () => F,
                getPrefillEmail: () => ee,
                getPrefillEmailFromOption: () => Q,
                getPrefillEmailFromStorage: () => K,
                getRemoveEmailFromLoginEligibilityData: () => me,
                isContactEmailOptional: () => W,
                isContactHidden: () => q,
                isEmailFilledInContactScreen: () => B,
                isEmailHidden: () => re,
                isIndianContact: () => oe,
                isMalaysianContact: () => ae,
                isOptionalContact: () => V,
                isOptionalEmail: () => te,
                isReadonlyContact: () => Z,
                isReadonlyEmail: () => ne,
                isRemoveEmailFromLoginEnabled: () => fe,
                isSingaporeanContact: () => ie,
                logDummyPrefillContacts: () => J,
                parseContact: () => z,
                passesVernacularEmailGate: () => T,
                renderContact: () => ce,
                renderEmail: () => le,
                resetEmailForContactChange: () => U,
                shouldStoreCustomerInStorage: () => ue
            });
            var r = n(28949),
                o = n(28351),
                i = n(65047),
                a = n(88142),
                c = n(66182),
                l = n(14494),
                u = n(35739),
                s = n(79869),
                d = n(45440),
                m = n(73738),
                f = n(22986),
                p = n(78400),
                _ = n(22974),
                g = n(15461),
                h = n(21117),
                v = n(93153),
                y = n(82435),
                b = n(56337),
                w = n(60431),
                k = n(56141),
                E = n(69807);
            const S = (0, i.symbol)(),
                A = (0, i.symbol)(),
                C = (0, i.symbol)(),
                O = (0, i.symbol)(),
                R = (0, i.symbol)(),
                D = (0, i.symbol)(),
                P = (0, i.symbol)(),
                [I, N] = (0, w.nt)(),
                x = new RegExp(f.z);

            function T(e) {
                return !((0, h.u)() && "IN" === (0, l.Rb)() && (0, l.Br)("magic_address_vernacular_filter_v2")) || x.test(e)
            }
            let M;
            n.e(36534).then(n.bind(n, 9523)).then((e => {
                M = e.isUntrustedResolvedEmail
            })).catch((() => {}));
            let $ = !1;

            function B() {
                return Boolean((0, i.getStore)(C)) || (0, l.o6)() || ee()
            }

            function L() {
                const e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") || j(),
                    t = (0, d.tc)(e);
                if (!t.phone) return "";
                return `${t.code?`+${t.code} `:""}${function(e,t){return t&&"IN"!==t?(0,g.formatPhoneNumber)(e,t):e.toString().replace(/(\d{5})(\d{5})/,"$1 $2")}(t.phone,t.countryCode||"IN")}`
            }

            function j() {
                return (0, i.hasStore)(S) ? (0, i.getStore)(S) : (0, l.GD)() || Y() || ""
            }

            function G() {
                const e = j();
                let t;
                try {
                    t = e ? (0, g.parsePhoneNumber)(e).dialCode : (0, g.getDialCodeByCountryCode)((0, l.Rb)()) || "91", t = (0, d.n$)(t)
                } catch {
                    t = "91"
                }
                return t
            }

            function z(e) {
                try {
                    if (e && (0, d.Uh)(e)) {
                        const t = (0, d.tc)(e),
                            n = "+" + (t.code || "91") + t.phone;
                        return t.phone && (0, g.isValidPhoneNumber)(t.phone, t.countryCode || (0, d.B8)(t.code || "91") || "IN") ? (e !== n && (e = n), e) : ""
                    }
                } catch (e) {
                    return ""
                }
                return ""
            }

            function F() {
                const e = z(ue() ? a.J().contact : "");
                return !e || (0, E.S6)(E.b_.CONTACT, e) ? "" : e
            }

            function X() {
                const e = z((0, r.om)("prefill.contact") || "");
                return !e || (0, E.S6)(E.b_.CONTACT, e) ? "" : e
            }

            function J() {
                try {
                    const e = z((0, r.om)("prefill.contact") || "");
                    e && (0, E.O5)(E.b_.CONTACT, e, E.u2.MERCHANT_PREFILL);
                    const t = z(ue() ? a.J().contact : "");
                    t && (0, E.O5)(E.b_.CONTACT, t, E.u2.BROWSER_STORAGE)
                } catch (e) {}
            }

            function Y() {
                const e = X(),
                    t = F();
                let n = e || t || "";
                return n = z(n), (0, _.logEvent)("prefill_data", {
                    is_contact_prefilled: n ? "yes" : "no",
                    user_contact: n,
                    contact_prefill_source: e ? "merchant" : t ? "browserstorage" : ""
                }), n || ""
            }

            function V() {
                const e = (0, r.om)("optional.contact");
                return !1 === e ? e : (0, l.QP)().includes("contact")
            }

            function q() {
                return V() && (0, r.om)("hidden.contact")
            }

            function W() {
                return V() && te()
            }

            function Z() {
                const e = Y(),
                    t = V();
                return !(!e && !t) && Boolean((0, r.om)("readonly.contact"))
            }

            function H() {
                if ((0, i.hasStore)(A)) return (0, i.getStore)(A);
                if (!0 === (0, r.om)("hidden.email")) {
                    const e = Q();
                    return T(e) ? e : ""
                }
                return (0, h.u)() ? (0, b.M4)() || ee() || (0, l.o6)() || "" : (0, b.M4)() || (0, l.o6)() || ee() || ""
            }

            function U() {
                (0, i.setStore)(A, ""), (0, c.x)("")
            }

            function K() {
                return ue() ? a.J().email : ""
            }

            function Q() {
                const e = (0, r.om)("prefill.email");
                return m.Xw.test(e) ? e : ""
            }

            function ee() {
                var e;
                const t = Q(),
                    n = K();
                let r = t || n || "";
                const o = X(),
                    i = F();
                return o.length && i.length && o !== i && re() && (r = t || ""), r && (0, h.u)() && null !== (e = M) && void 0 !== e && e(r) && ($ || ($ = !0, (0, _.logEvent)("untrusted_email_filtered", {
                    source: t ? "merchant_prefill" : "browser_storage",
                    email_domain: r.split("@")[1] || "",
                    local_part_length: r.split("@")[0].length
                })), r = ""), m.Xw.test(r) ? ((0, _.logEvent)("prefill_data", {
                    is_email_prefilled: r ? "yes" : "no",
                    user_email: r,
                    email_prefill_source: t ? "merchant" : n ? "browserstorage" : ""
                }), r) : ""
            }

            function te() {
                const e = Boolean(!(0, u.AD)() || (0, u.W9)()),
                    t = (() => {
                        if ((0, k.rE)()) return !1;
                        return !se() || de() && "embedded" !== (0, b.G9)()
                    })(),
                    n = !(0, h.u)() || (0, l.Br)("optional_email_magic"),
                    r = (0, l.QP)().includes("email");
                return !(!n || !r) || t && ((0, s.hG)() || !(0, s.Op)()) && e && (0, l.DY)()
            }

            function ne() {
                const e = ee(),
                    t = te();
                return !(!e && !t) && Boolean((0, r.om)("readonly.email"))
            }

            function re() {
                const e = !se() && (0, s.hG)() && (0, l.DY)(),
                    t = (0, r.om)("hidden.email"),
                    n = "boolean" == typeof t ? t : e,
                    o = te() && n;
                return (0, _.logMeta)({
                    email_optional: te(),
                    email_hidden: o
                }), o
            }

            function oe() {
                return j().startsWith("+91")
            }

            function ie() {
                return j().startsWith("+65")
            }

            function ae() {
                return j().startsWith("+60")
            }

            function ce() {
                return !q()
            }

            function le() {
                const e = re(),
                    t = e && Boolean(ee()) && !0 !== (0, r.om)("hidden.email");
                return (0, _.logEvent)("email_shown", {
                    is_email_box_shown: !e || t || H() ? "yes" : "no",
                    is_email_mandatory: te() ? "no" : "yes"
                }), !e || t
            }

            function ue() {
                const e = !!(0, r.om)("customer_id") || !(0, l.WN)(),
                    t = "payment_links" !== (0, r.om)("_.integration") ? (0, r.om)("remember_customer") : (0, p.Rw)("remember_customer");
                return !e && t
            }

            function se() {
                if ((0, b.Lq)()) {
                    const e = (0, r.om)("magicx.config", {});
                    return e.is_email_optional || e.is_email_mandatory
                }
                return (0, l.jI)("show_email_on_checkout") || "embedded" === (0, b.G9)()
            }

            function de() {
                if ((0, b.Lq)()) {
                    return (0, r.om)("magicx.config", {}).is_email_optional
                }
                return (0, l.jI)("email_optional_oncheckout")
            }

            function me() {
                const e = [];
                (0, h.u)() || e.push("not_magic"), (0, v.Fr)() || e.push("not_mobile");
                const t = 0 === e.length;
                return {
                    eligibility: t,
                    ineligibility_reasons: e.join(","),
                    variant: (0, y._m)("remove_email_from_login"),
                    result: t && (0, l.Br)("remove_email_from_login")
                }
            }

            function fe() {
                try {
                    return (0, h.u)() && (0, l.Br)("remove_email_from_login")
                } catch {
                    return !1
                }
            }
            const pe = () => {
                let e = !0;
                const t = {};
                return (0, h.u)() || (e = !1, t.non_magic = 1), te() && (e = !1, t.optional_email = 1), {
                    eligible: e,
                    ineligible_reasons: Object.keys(t).join(",")
                }
            };

            function _e() {
                let e = "",
                    t = "";
                return (0, i.hasStore)(R) && (e = (0, i.getStore)(R)), (0, i.hasStore)(D) && (t = (0, i.getStore)(D)), {
                    contact: e,
                    email: t
                }
            }

            function ge() {
                return Boolean((0, i.getStore)(P))
            }
            n.d(t, ["contactEmailStore", 0, A, "contactOnBlurInContactScreen", 0, R, "contactStore", 0, S, "emailFilledInAddressScreen", 0, O, "emailFilledInContactScreen", 0, C, "emailOnAddressScreenEligibility", 0, pe, "emailOnBlurInContactScreen", 0, D, "fetchEmailDetailsFromContact", 0, async e => (N(), (0, w.Ay)({
                url: "magic/customer",
                params: {
                    contact: e
                },
                cache: 9e5,
                cacheKey: t => `fetch-email-from-${e}`,
                abortSymbol: I
            }).then((e => e.data.email))), "formErrorInContactScreen", 0, P, "showEmailOnAddressScreen", 0, () => {
                var e;
                if (fe()) return !0;
                return ((0, o.hB)(o.iE.CONTACT_EMAIL_IN_ADDR) ? (0, o.dT)(o.iE.CONTACT_EMAIL_IN_ADDR) : (0, l.jI)("one_cc_email_in_address", !1)) && (null === (e = pe()) || void 0 === e ? void 0 : e.eligible)
            }])
        },
        79869(e, t, n) {
            n.d(t, {
                Aj: () => c,
                ej: () => u,
                HN: () => l,
                B2: () => s,
                OY: () => r.OY,
                hG: () => r.hG,
                Op: () => r.Op
            });
            var r = n(97412),
                o = n(89479),
                i = n(8281);
            const a = new Set(["BIF", "DJF", "GNF", "JPY", "KMF", "KRW", "PYG", "RWF", "UGX", "VUV", "XOF", "XPF", "XAF"]);

            function c(e) {
                const t = (0, r.OY)();
                return (0, o.Mn)(e, {
                    currency: t
                })
            }

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return u(e, (0, r.OY)(), t)
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                const r = (0, o.aG)(e, {
                        currency: t || "INR"
                    }),
                    i = {
                        currency: t,
                        intlOptions: {
                            minimumFractionDigits: a.has(t) ? 0 : 2,
                            trailingZeroDisplay: "stripIfInteger",
                            notation: n ? "compact" : "standard"
                        }
                    };
                try {
                    return (0, o.ZV)(r, i)
                } catch (t) {
                    return String(r || e)
                }
            }

            function s() {
                return l((0, i.vn)())
            }
        },
        97412(e, t, n) {
            n.d(t, {
                OY: () => i,
                Op: () => a,
                hG: () => c
            });
            var r = n(28949),
                o = n(95845);

            function i() {
                return (0, o.ud)() || (0, o.Ry)() || (0, r.om)("currency") || (0, o.Ou)()
            }

            function a() {
                return i() !== (0, o.Ou)()
            }

            function c() {
                return "INR" === i()
            }
        },
        45955(e, t, n) {
            n.d(t, {
                N: () => o
            });
            const r = ["0123456789", "1234567890", "9876543210", "0987654321"];

            function o(e) {
                if (!e || "string" != typeof e) return {
                    isDummy: !1
                };
                const t = function(e) {
                    return e.replace(/\D/g, "")
                }(e);
                return function(e) {
                    const t = function(e) {
                        if (0 === e.length) return 0;
                        let t = 1,
                            n = 1;
                        for (let r = 1; r < e.length; r++) e[r] === e[r - 1] ? (n++, n > t && (t = n)) : n = 1;
                        return t
                    }(e);
                    return t / e.length > .8
                }(t) ? {
                    isDummy: !0,
                    reason: "repeated_digits"
                } : function(e) {
                    return r.some((t => e.includes(t)))
                }(t) ? {
                    isDummy: !0,
                    reason: "sequential_digits"
                } : {
                    isDummy: !1
                }
            }
        },
        69807(e, t, n) {
            n.d(t, {
                O5: () => d,
                S6: () => s,
                b_: () => a,
                u2: () => c
            });
            var r = n(22974),
                o = n(82435),
                i = n(45955);
            let a = function(e) {
                    return e.CONTACT = "contact", e
                }({}),
                c = function(e) {
                    return e.MERCHANT_PREFILL = "merchant_prefill", e.BROWSER_STORAGE = "browser_storage", e.API = "api", e.USER_INPUT = "user_input", e
                }({});
            const l = {
                [a.CONTACT]: i.N
            };

            function u(e, t) {
                if (!e || !t || "string" != typeof t) return null;
                if (!(0, o.Br)("dummy_prefill_validate")) return null;
                const n = l[e];
                if (!n) return null;
                const r = n(t);
                return null != r && r.isDummy ? r : null
            }

            function s(e, t) {
                try {
                    return null !== u(e, t)
                } catch {
                    return !1
                }
            }

            function d(e, t, n) {
                try {
                    const o = u(e, t);
                    if (!o) return;
                    try {
                        (0, r.logEvent)("dummy_value_detected", {
                            field: e,
                            source: n,
                            reason: o.reason,
                            value_length: t.length
                        })
                    } catch {}
                } catch {}
            }
        },
        66182(e, t, n) {
            n.d(t, {
                x: () => o
            });
            const r = (0, n(31992).T5)("");

            function o(e) {
                r.set(e)
            }
            n.d(t, ["B", 0, r])
        },
        68661(e, t, n) {
            n.d(t, {
                $6: () => v,
                EO: () => p,
                RM: () => m,
                RV: () => f,
                rK: () => y,
                t: () => s
            });
            var r = n(65047),
                o = n(31992),
                i = n(97623),
                a = n(45148);
            const [c, l] = (0, r.createStore)(!1), u = (0, o.T5)(!1);

            function s() {
                return c()
            }
            let d = !1;

            function m() {
                return d
            }

            function f(e) {
                d = !0, l(e), u.set(e)
            }

            function p() {
                const e = s(),
                    t = (0, o.T5)(!e);
                return e && (0, a.C)().then((() => t.set(!0)), (() => t.set(!0))), (0, i.u)(t)
            }
            const _ = (0, o.T5)(!1),
                g = (0, o.T5)(!1);
            let h = 0;

            function v() {
                1 == ++h && g.set(!0)
            }

            function y() {
                --h <= 0 && (h = 0, g.set(!1))
            }
            n.d(t, ["HY", 0, u, "Lx", 0, g, "oE", 0, _])
        },
        78854(e, t, n) {
            n.d(t, {
                c: () => i
            });
            const r = ["example.com", "example.org", "example.net"],
                o = ["test", "example", "invalid", "localhost"];

            function i(e) {
                if (!e || "string" != typeof e) return !1;
                const t = e.lastIndexOf("@");
                if (t <= 0 || t === e.length - 1) return !1;
                const n = e.slice(t + 1).toLowerCase();
                if (r.some((e => n === e || n.endsWith(`.${e}`)))) return !0;
                const i = n.slice(n.lastIndexOf(".") + 1);
                return o.includes(i)
            }
        },
        62421(e, t, n) {
            var r = n(65047);
            const [o, i] = (0, r.createStore)(!1), [a, c] = (0, r.createStore)({
                eligibility: !1,
                ineligibility_reasons: "",
                variant: "",
                result: !1
            });
            n.d(t, ["$o", 0, c, "Vz", 0, i, "h9", 0, a, "nN", 0, o])
        },
        80975(e, t, n) {
            n.d(t, {
                j: () => i
            });
            var r = n(5275),
                o = n(28590);

            function i() {
                if ((0, o.N)()) {
                    const e = (0, r.X)("auto_renew_toggle_card", "config"),
                        t = ((null == e ? void 0 : e.props) ? ? []).reduce(((e, t) => (e[t.key] = t.value, e)), {});
                    return Boolean(null == t ? void 0 : t.default_unified_checkout_toggle_state)
                }
                return !1
            }
        },
        21734(e, t, n) {
            n.d(t, ["Fs", 0, "ach-address", "Fw", 0, "payment_purpose", "G5", 0, "magic-contact", "Gc", 0, "select-delivery-address", "L4", 0, "select-delivery-speed", "ZT", 0, "select-billing-address", "_D", 0, "partial-payment", "b_", 0, "otp-verify", "cz", 0, "methods", "eL", 0, "magic-add-address", "f6", 0, "data_collection", "f9", 0, "upi-billing-address", "kY", 0, "quick-buy-home", "oL", 0, "split-shipping-group-items", "rB", 0, "pop-club-upi-dialog", "u3", 0, "magic-add-billing-address", "u5", 0, "ach-bank-details", "uI", 0, "emi-plans", "z2", 0, "magic-home", "ze", 0, "smart_import"])
        },
        55426(e, t, n) {
            n.d(t, ["L", 0, "razorpay_wallet"])
        },
        22986(e, t, n) {
            n.d(t, ["z", 0, "^[a-zA-Z0-9]+([._%+\\-][a-zA-Z0-9]+)*@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)(\\.([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*))+$"])
        },
        5275(e, t, n) {
            n.d(t, {
                X: () => i
            });
            var r = n(28949),
                o = n(93153);

            function i(e, t) {
                const n = (0, r.ve)("methods.data.config.display.components", []),
                    i = (0, o.PS)() ? "desktop" : "mobile";
                return null == n ? void 0 : n.find((n => {
                    var r;
                    return null === (r = n.triggers) || void 0 === r ? void 0 : r.some((n => {
                        const [r, o, a] = n.split(".");
                        return o === t && r === e && ("all" === a || a === i)
                    }))
                }))
            }
        },
        35739(e, t, n) {
            n.d(t, {
                AD: () => s,
                W9: () => d
            });
            var r = n(31992),
                o = n(28949),
                i = n(95845),
                a = n(81345),
                c = n(28590),
                l = n(80975),
                u = n(20258);

            function s() {
                var e;
                return (0, c.r)() && (0, c.N)() ? (0, r.Jt)(u.m) ? ? (0, l.j)() : (null === (e = (0, i.r$)()) || void 0 === e ? void 0 : e.method) === a.C_ || ((0, i.uV)() || (0, o.om)("recurring") && (0, i.r$)())
            }

            function d() {
                return s() && (0, o.om)("recurring")
            }
        },
        45148(e, t, n) {
            n.d(t, {
                X: () => l
            });
            var r = n(80896),
                o = n(78400),
                i = n(14494),
                a = n(28949);
            const c = (0, r.Oo)((() => o.PC.then(a.D9).then(i.r$)));

            function l() {
                return o.PC
            }
            n.d(t, ["C", 0, c])
        },
        74471(e, t, n) {
            var r = n(31992),
                o = n(73733);
            n.d(t, ["P", 0, () => (0, r.un)(o.HB, (e => e)), "S", 0, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                o.HB.set(e)
            }])
        },
        73733(e, t, n) {
            var r = n(31992);
            const o = (0, r.T5)(!1),
                i = (0, r.T5)(!1),
                a = (0, r.T5)(!1);
            n.d(t, ["Cs", 0, i, "HB", 0, o, "xG", 0, a])
        },
        20258(e, t, n) {
            var r = n(31992);
            const o = (0, r.T5)(null),
                i = (0, r.T5)(!1);
            n.d(t, ["m", 0, o, "x", 0, i])
        },
        44160(e, t, n) {
            n.d(t, {
                T: () => i
            });
            var r = n(82435),
                o = n(82314);

            function i() {
                return (0, o.yp)() && (0, r.Br)("zero_amount_checkout_enabled")
            }
        },
        56141(e, t, n) {
            n.d(t, {
                Cx: () => E,
                IP: () => C,
                Jn: () => k,
                Lb: () => w,
                M$: () => R,
                cz: () => p,
                hV: () => h,
                j0: () => f,
                lR: () => s,
                rE: () => b,
                tN: () => S,
                uU: () => g,
                vr: () => v
            });
            var r = n(31992),
                o = n(26718),
                i = n(23871),
                a = n(72564),
                c = n(28949),
                l = n(14494);
            const u = "locale_v2";
            let s = a.Y.ENGLISH;
            const d = (0, r.T5)(s),
                m = (0, r.un)(d, (e => e !== a.Y.ENGLISH));

            function f(e) {
                e && s !== e && (s = e, (0, i.SO)(u, e), d.set(e))
            }

            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.replace(/\{\w+\}/g, (e => t[e.slice(1, -1)] || ""))
            }

            function _() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function(n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return p(e[n] || t[n] || (0, o.Jt)(e, n || "") || (0, o.Jt)(t, n || "", ""), r)
                }
            }

            function g(e, t) {
                const n = (0, r.T5)(_(t));
                return d.subscribe((r => {
                    e(r).then((e => {
                        null != e && e.default && n.set(_(e.default, t))
                    })).catch((() => {}))
                })), n
            }

            function h(e) {
                var t;
                t = e, Object.values(a.Y).includes(t) && s !== e && (s = e, d.set(e))
            }

            function v() {
                return (0, i.Gq)(u) || (0, c.om)("locale", "") || (0, c.om)("config.display.language") || (0, c.ve)("merchant.data.metadata.language_code", "")
            }
            const y = ["MY"];

            function b() {
                return y.includes((0, l.Rb)() || "")
            }

            function w() {
                return "US" === (0, l.Rb)()
            }

            function k() {
                return "SG" === (0, l.Rb)()
            }

            function E() {
                return "IN" === (0, l.Rb)()
            }

            function S() {
                return "MY" === (0, l.Rb)()
            }
            const A = ["MY", "US"];

            function C() {
                return A.includes((0, l.Rb)() || "")
            }
            const O = ["US", "SG", "MY"];

            function R() {
                return O.includes((0, l.Rb)() || "")
            }
            n.d(t, ["B8", 0, m, "V5", 0, e => "IN" === e ? Object.values(a.Y) : [a.Y.ENGLISH], "Zx", 0, d])
        },
        73477(e, t, n) {
            n.d(t, {
                _: () => o
            });
            var r = n(44138);

            function o() {
                try {
                    const e = new URLSearchParams(window.location.search).get("unified_session_id") || "";
                    if ((0, r.fz)(e)) return e
                } catch (e) {}
                return (0, r.v6)()
            }
        },
        97623(e, t, n) {
            function r(e) {
                return {
                    subscribe: e.subscribe.bind(e)
                }
            }
            n.d(t, {
                u: () => r
            })
        }
    }
]);