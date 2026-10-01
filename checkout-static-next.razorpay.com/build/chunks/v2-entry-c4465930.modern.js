"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [65441], {
        51581(e, n, t) {
            t.d(n, {
                br: () => b,
                dU: () => w,
                hm: () => E
            });
            var o = t(31992),
                r = t(22974),
                c = t(80896),
                i = t(26718),
                a = t(28949),
                l = t(8281),
                s = t(95340),
                u = t(47783),
                d = t(61114),
                p = t(33535),
                m = t(15993),
                f = t(25921),
                _ = t(59843),
                v = t(26518),
                h = t(54359);
            let g, k, y;

            function w(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                g && !n && (0, v.EO)() && (0, v.nl)();
                const o = (0, h.bd)();
                e && (g !== e || k !== o || t) && (g = e, k = o, (0, u.log)({
                    name: "method:selected",
                    method: e,
                    properties: {
                        default_open: n ? 1 : 0,
                        ...C(),
                        ...o ? {
                            is_nudge: 1
                        } : {}
                    }
                }))
            }

            function b(e) {
                var n;
                y = e;
                const o = (null === (n = y) || void 0 === n ? void 0 : n.properties) ? ? {},
                    r = o.app || o.bank || o.flow || o.wallet || o.type;
                (0, u.log)({
                    name: "instrument:selected",
                    ...e,
                    last_selected_instrument: r,
                    properties: { ...e.properties,
                        ...C()
                    }
                }),
                function(e) {
                    A || (A = Promise.all([t.e(38544), t.e(92587), t.e(92026), t.e(23696), t.e(81352), t.e(88292), t.e(84745)]).then(t.bind(t, 625)));
                    A.then((n => {
                        let {
                            registerFlowToPostHog: t
                        } = n;
                        return t(e)
                    })).catch((() => {}))
                }(e.properties)
            }
            let A = null;

            function P() {
                return (0, p.t0)()
            }

            function C() {
                const e = P();
                if (e) return {
                    offer_id: e.id,
                    offer_name: e.name,
                    offer_amount: (0, _.Fe)(e),
                    isAutoApplied: (0, m.isOfferAutoApplied)()
                }
            }

            function E(e) {
                var n, t;
                const d = function(e) {
                        var n, t, o, r;
                        let c = { ...e.payload,
                            ...e.meta
                        };
                        c = function(e) {
                            var n;
                            delete e.token, delete e.vpa_token;
                            const t = null == e || null === (n = e._) || void 0 === n ? void 0 : n.checkout_id;
                            delete e._;
                            const o = Object.keys(e).reduce(((n, t) => ("card" !== t.slice(0, 4) && (n[t] = e[t]), n)), {});
                            return o.checkout_id = t, o
                        }(c), (0, i.HW)(c, ((e, n) => {
                            "_" === n[0] && delete c[n]
                        }));
                        const a = c.method,
                            l = (0, s.s)(e.payload, e.params),
                            u = null !== (n = e.params) && void 0 !== n && n.checkoutOrder ? 1 : 0,
                            d = {
                                payload: c,
                                type: null === (t = e.params) || void 0 === t ? void 0 : t.type,
                                bank: c.bank || (null === (o = e.params) || void 0 === o ? void 0 : o.issuer),
                                network: null === (r = e.params) || void 0 === r ? void 0 : r.network,
                                wallet: c.wallet,
                                ...C(),
                                ...q(e)
                            };
                        return {
                            isQr: u,
                            propsV1: {
                                options: { ...e,
                                    payload: c
                                },
                                offer: P(),
                                flow: d.flow,
                                instrument: "card" === a ? "card" : l,
                                type: ("card" !== a && "upi" !== a || !c.token && !c.vpa_token ? "new" : "saved") + "_" + a
                            },
                            propsV2: {
                                method: a,
                                properties: d
                            }
                        }
                    }(e),
                    p = null === (n = e.payload) || void 0 === n ? void 0 : n.method,
                    {
                        isQr: m,
                        propsV1: _,
                        propsV2: v
                    } = d,
                    g = (0, f.C)({ ...e.payload,
                        section: (null === (t = e.meta) || void 0 === t || null === (t = t.config) || void 0 === t ? void 0 : t.section) || "generic"
                    }),
                    k = {
                        method: p,
                        instrument: (0, s.s)(e.payload, e.params),
                        flow: g
                    };
                let y, A;
                const E = (0, c.Oo)((() => {
                    (0, s.q)("checkout.cr.metrics", k), y = Date.now(), (0, r.logEvent)("paymentSubmit", _);
                    const e = (0, o.Jt)(l.PM).deductions;
                    (0, u.log)({
                        name: "submit",
                        ...v,
                        properties: { ...v.properties,
                            checkout_flow: g,
                            ...(0, h.bd)() ? {
                                from_nudge: 1
                            } : {},
                            deductions_breakdown: e.deductionsApplied.map((e => ({
                                type: e.type,
                                amount: e.appliedDeductionAmount,
                                ..."code" in e ? {
                                    code: e.code
                                } : {}
                            }))),
                            total_deduction: e.totalDeductionAmount
                        }
                    }), w(p), b(v)
                }));
                return {
                    logPaymentSubmit: E,
                    logPaymentCancel: (0, c.Oo)((() => {
                        const e = (0, h.bd)();
                        (0, h.Xb)(!1), m || ((0, r.logEvent)("paymentCancel", _), (0, u.log)({
                            name: "cancel",
                            ...v,
                            properties: { ...v.properties,
                                time_since_submit: Date.now() - y,
                                time_since_create: Date.now() - A,
                                ...e ? {
                                    from_nudge: 1
                                } : {}
                            }
                        }))
                    })),
                    logPaymentCreate: (0, c.Oo)((e => {
                        m || (O(e, d), A = Date.now(), (0, r.logEvent)("paymentInitiate", _), (0, u.log)({
                            name: "payment_create",
                            ...v,
                            value: (null == e ? void 0 : e.payment_id) || "",
                            properties: { ...v.properties,
                                time_since_submit: Date.now() - y
                            }
                        }))
                    })),
                    logPaymentComplete: (0, c.Oo)((e => {
                        O(e, d);
                        const n = e.error;
                        E(), (0, r.logEvent)("paymentComplete", { ..._,
                            response: e
                        }), (0, u.log)({
                            name: n ? "error" : "oncomplete",
                            ...v,
                            properties: { ...v.properties,
                                error: null == n ? void 0 : n.description,
                                time_since_submit: Date.now() - y,
                                time_since_create: Date.now() - A,
                                is_retry_enabled: !1 === (0, a.om)("retry") && !((0, a.om)("redirect") && (0, a.om)("callback_url")),
                                ...(0, h.bd)() ? {
                                    from_nudge: 1
                                } : {}
                            },
                            value: (null == e ? void 0 : e.razorpay_payment_id) || ""
                        }), (0, h.Xb)(!1), n || (0, s.q)("checkout.sr.metrics", k)
                    }))
                }
            }

            function O(e, n) {
                e.payment_id && (n.propsV1.payment_id = e.payment_id, n.propsV2.payment_id = e.payment_id)
            }

            function q(e) {
                var n, t, o;
                const {
                    payload: r,
                    params: c
                } = e;
                switch (r.method) {
                    case "upi":
                        {
                            const e = {
                                flow: r["upi[flow]"] || "collect"
                            };
                            let n;
                            return r.vpa ? n = (0, d.Fz)(r.vpa) : null != c && c.upi_provider && (n = (0, d.qX)(c.upi_provider)),
                            n && (e.app = n.shortcode),
                            e
                        }
                    case "card":
                        return {
                            flow: r.token ? "saved_card" : "new_card"
                        };
                    case "netbanking":
                        return {
                            type: null !== (n = r.bank) && void 0 !== n && null !== (t = n.includes) && void 0 !== t && t.call(n, "_C") ? "corporate" : "retail"
                        };
                    case "ach":
                        return {
                            bank_code: r["bank_account[code]"],
                            account_type: r["bank_account[account_type]"]
                        };
                    case "duitnow":
                        return {
                            flow: null === (o = r.duitnow) || void 0 === o ? void 0 : o.flow
                        }
                }
            }
        },
        65441(e, n, t) {
            t.d(n, {
                cV: () => w,
                N8: () => b,
                Vq: () => q,
                Vc: () => O,
                uI: () => y,
                Ms: () => g,
                gv: () => k,
                MZ: () => v,
                xt: () => E
            });
            var o = t(44579);

            function r(e, n) {
                (0, o.A)(e, n) || e.push(n)
            }
            var c = t(94900),
                i = t(47783),
                a = t(14494),
                l = t(40255),
                s = t(23897),
                u = t(45325),
                d = t(51581),
                p = t(43356),
                m = t(70916),
                f = t(91645),
                _ = t(93153);

            function v(e) {
                (0, u.$s)("sectionClick", {
                    section: e
                }), (0, i.setSection)(e)
            }
            let h = !0;
            const g = (0, s.A)((e => {
                let n, t, {
                    method: o,
                    config: r,
                    section: a,
                    blocks: l,
                    quickbuy: s,
                    isPop: u
                } = e;
                n = s ? "quickbuy" : o ? u && !(0, _.PS)() ? "L2" : "L1" : u && !(0, _.PS)() ? "L1" : "L0", (0, i.setScreen)(n), a = `${(null==r?void 0:r.section)||a||"generic"}`, o === (0, p.q6)() && h && (h = !1, a = "prefill"), (0, i.setSection)(a), o && (0, d.dU)(o, "prefill" === a), t = o ? `${o}_method_page` : s ? "payment_quickbuy_page" : u ? "payment_pop_page" : "payment_l0_page", (0, i.logPageRender)({
                    name: t,
                    method: o,
                    content: l ? (0, c.A)(l, (e => e.instruments.map((e => e.module.name)))) : void 0
                }), l ? l.forEach((e => {
                    k({
                        section: "" + (e.custom ? "custom" : "generic")
                    }, Promise.resolve((null == e ? void 0 : e.instruments) || []))
                })) : o && k({
                    method: o,
                    section: a
                })
            }));

            function k(e, n) {
                const t = (0, i.logContentFn)({ ...e,
                    name: "payment_section",
                    screen: (0, i.getScreen)()
                });
                n ? n.then((e => {
                    A(t, e), t.logger()
                })) : t.logger()
            }

            function y(e, n) {
                const t = (0, i.getParentEvent)();
                t && C(t, e, n)
            }

            function w(e, n) {
                const t = (0, i.getParentEvent)();
                t && P(t, e, n)
            }

            function b(e) {
                const n = (0, i.getParentEvent)();
                n && A(n, e)
            }

            function A(e, n) {
                n.forEach((n => {
                    var t, o, r;
                    if ("cod" !== n.module.name && C(e, n.module.name), null !== (t = n.config) && void 0 !== t && t.method) switch (n.config.method) {
                        case "card":
                            n.config.token && P(e, "saved_card");
                            break;
                        case "emi":
                        case "cardless_emi":
                            try {
                                e.properties.config || (e.properties.config = []), e.properties.config.push(n.config), P(e, "emi_preferred")
                            } catch (e) {}
                            break;
                        case "upi":
                            n.config.token ? (P(e, "upi_collect"), P(e, "upi_saved_vpa")) : null !== (o = n.config.flows) && void 0 !== o && o.includes("intent") ? P(e, "upi_intent_app") : null !== (r = n.config.flows) && void 0 !== r && r.includes("collect") && (P(e, "upi_collect"), P(e, "upi_collect_app")), Array.isArray(n.config.apps) && n.config.apps.forEach((n => {
                                P(e, n)
                            }))
                    }
                }))
            }

            function P(e, n, t) {
                e.content.push(n), null == t || t(e.properties), e.logger()
            }

            function C(e, n, t) {
                e.content.push(n);
                const o = e.properties;
                o.methods || (o.methods = [], o.methods_offers = [], o.methods_downtimes = [], o.downtimes = [], o.offers = []), r(o.methods, n);
                (0, l.getAllOffers)().some((e => (0, m.I7)(e, n))) && r(o.methods_offers, n);
                (0, a.vI)().some((e => e.method === n)) && (o.has_downtime = 1, r(o.downtimes, n));
                (0, f.J9)(n) && (o.has_full_method_downtime = 1, r(o.methods_downtimes, n)), null == t || t(o), e.logger()
            }

            function E() {
                (0, i.logClick)({
                    name: "pay_cta"
                })
            }

            function O(e, n, t) {
                let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                (0, i.setSection)(o ? "custom" : "generic"), (0, d.dU)(e, n), k({
                    section: o ? "custom" : "dropdown",
                    method: e,
                    properties: {
                        default_open: n ? 1 : 0,
                        instruments: [],
                        custom_rzp_priority: t
                    }
                })
            }

            function q(e, n) {
                "upi" === e && w("upi_intent_app"), y(e), n.forEach((e => w(e)))
            }
        },
        25921(e, n, t) {
            t.d(n, {
                C: () => P
            });
            var o = t(81137),
                r = t(43356),
                c = t(56141),
                i = t(31992),
                a = t(28949),
                l = t(87202),
                s = t(14494),
                u = t(26718),
                d = t(93153);

            function p() {
                return (0, r.AD)()
            }

            function m() {
                return (0, o.isASubscription)()
            }

            function f() {
                return (0, i.Jt)(c.B8)
            }

            function _() {
                return (0, a.om)("callback_url")
            }

            function v() {
                return (0, l.isOptionalContact)()
            }

            function h() {
                return (0, s.id)()
            }

            function g() {
                return (0, s.Wi)()
            }

            function k() {
                return (0, a.om)("timeout")
            }

            function y() {
                return !(0, u.RI)((0, s.PT)()) || !(0, u.RI)((0, s.t0)())
            }

            function w() {
                return !(0, a.om)("key")
            }

            function b() {
                return !(0, a.om)("retry")
            }

            function A(e) {
                const n = [{
                    name: "recurring",
                    check: p
                }, {
                    name: "subscription",
                    check: m
                }, {
                    name: "vernacular",
                    check: f
                }, {
                    name: "callback_url",
                    check: _
                }, {
                    name: "optional_contact",
                    check: v
                }, {
                    name: "cfb",
                    check: h
                }, {
                    name: "offer",
                    check: () => function(e) {
                        return e.offer_id
                    }(e)
                }, {
                    name: "partial_payment",
                    check: g
                }, {
                    name: "p13n",
                    check: () => function(e) {
                        return "p13n" === e.section
                    }(e)
                }, {
                    name: "avs",
                    check: () => function(e) {
                        return "card" === e.method && e["billing_address[postal_code]"]
                    }(e)
                }, {
                    name: "partner",
                    check: () => (0, a.om)("account_id")
                }, {
                    name: "dcc",
                    check: () => function(e) {
                        return !e.currency_request_id
                    }(e)
                }, {
                    name: "timeout",
                    check: k
                }, {
                    name: "checkout_config",
                    check: y
                }, {
                    name: "keyless",
                    check: w
                }, {
                    name: "no_retry",
                    check: b
                }];
                return n.filter((e => e.check())).map((e => e.name)).join("-")
            }

            function P(e) {
                try {
                    const n = (0, d.Y0)(),
                        t = A(e);
                    return n ? n + "-" + t : t
                } catch {
                    return ""
                }
            }
        },
        95340(e, n, t) {
            t.d(n, {
                q: () => m,
                s: () => f
            });
            var o = t(56337),
                r = t(26718),
                c = t(93153),
                i = t(14494),
                a = t(60431),
                l = t(81345),
                s = t(65023),
                u = t(31994),
                d = t(28949),
                p = t(41040);

            function m(e, n) {
                try {
                    if (!o.uO || !(0, i.A9)() || c.w2) return !1;
                    const t = (0, r.cK)(navigator, "sendBeacon");
                    n.instrument || (n.instrument = ""), n.env || (n.env = (0, o.zG)()), n.source || (n.source = (0, u.el)()), n.platform || (n.platform = (0, p.u)()), n.integration = (0, d.om)("_.integration"), n.region = (0, o.JN)(), n.version = "2";
                    const l = {
                            metrics: [{
                                name: e,
                                labels: [n]
                            }]
                        },
                        s = {
                            url: (0, u.IR)(),
                            data: {
                                key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                                data: encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(l)))))
                            }
                        };
                    try {
                        return t ? navigator.sendBeacon(s.url, JSON.stringify(s.data)) : (0, a.Ay)({ ...s,
                            method: "post"
                        }), !0
                    } catch (e) {}
                } catch (e) {}
            }

            function f(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    const c = e.method;
                    switch (c) {
                        case l.Nr:
                            return "" + (e.token ? "saved" : "new");
                        case l.nU:
                            {
                                var t, o;
                                const r = "intent" === (null == e || null === (t = e.upi) || void 0 === t ? void 0 : t.flow) || "intent" === e["_[flow]"];
                                let c = e.vpa || "";c && (c = c.split("@")[1]);
                                const i = c ? "collect" : ((null == e || null === (o = e.upi) || void 0 === o ? void 0 : o.flow) || e["_[flow]"]) ? ? "";
                                return `${r?(null==n?void 0:n.upi_provider)||"intent":i}${e["_[upiqr]"]?"-qr":""}${c?"@"+c:""}`
                            }
                        case l.sP:
                        case l.EW:
                            {
                                var r;
                                const n = null === (r = s.pw[e.provider]) || void 0 === r ? void 0 : r.name;
                                return `${null!=e&&e.token||e["card[number]"]?"cardemi":"cardless"}${n?"-"+n:""}`
                            }
                        default:
                            return e[{
                                [l.sP]: "provider",
                                [l.$d]: "provider",
                                [l.yA]: "provider",
                                [l.W2]: "wallet",
                                [l.g8]: "bank"
                            }[c]]
                    }
                } catch (e) {
                    return ""
                }
            }
        }
    }
]);