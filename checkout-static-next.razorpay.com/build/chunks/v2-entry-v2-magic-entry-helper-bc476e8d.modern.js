"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [64331], {
        56155(e, t, n) {
            n.d(t, {
                A: () => A,
                z: () => m
            });
            var o = n(28949),
                i = n(14494),
                r = n(44138),
                c = n(56337),
                a = n(81352),
                _ = n(18779),
                d = n(93153),
                u = n(47705),
                s = n(26718),
                l = n(78400),
                E = n(35999),
                f = n(21117),
                p = n(45148),
                v = n(73477),
                h = n(81825);
            const C = [],
                D = {
                    sdk_version: (0, c.$2)()
                };

            function m(e, t) {
                t ? D[e] = t : delete D[e]
            }

            function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                const o = {
                    url: "https://lumberjack.razorpay.com/v1/track",
                    data: {
                        mode: "live",
                        key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                        events: e,
                        context: D
                    }
                };
                (0, l.V5)() && (o.url = `${o.url}?key_id=${(0,l.V5)()}`);
                const i = (0, s.Zm)(o.data);
                if (!i) return;
                if (new Blob([i]).size > (t ? 65536 : E.i)) {
                    if (n >= 10) return;
                    if (1 === e.length) return void S([(0, _.Jx)(e[0])], t, n + 1);
                    const o = Math.floor(e.length / 2);
                    return S(e.slice(0, o), t, n + 1), void S(e.slice(o), t, n + 1)
                }
                try {
                    fetch(o.url, {
                        method: "POST",
                        body: i,
                        keepalive: t
                    }).catch((() => {}))
                } catch (e) {}
            }

            function g() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const n = C.splice(0, C.length);
                if ((0, i.Wj)() && n.length && !d.w2) {
                    const e = (0, _.Rx)(n);
                    e.length && S(e, t)
                }
                n.length && !d.w2 && ((0, _.le)() ? null !== (e = (0, l.V5)()) && void 0 !== e && e.includes("rzp_live_") : (0, i.A9)()) && S(n, t)
            }
            async function A(e) {
                var t;
                const n = {
                    event: e.name,
                    properties: {},
                    merchant_id: "",
                    checkout_id: (0, r.v6)(),
                    event_version: "v2",
                    event_type: (0, _.vd)(),
                    build_id: c.L$ || "",
                    order_id: (0, a.EX)() || "",
                    platform: (0, c.yt)() ? 2 : 1,
                    product: (0, _.oM)(),
                    view: (0, u.a)() || (0, d.PS)() ? 1 : 0,
                    unified_session_id: (0, v._)(),
                    value: "",
                    previous: "",
                    lj_data: (0, o.ve)("merchant.data.metadata.lj_data"),
                    ...(0, _.w2)(),
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
                if (!n.order_id && (0, f.u)()) try {
                    const e = await Promise.race([(0, p.X)(), (0, a.EX)()]);
                    n.order_id = e || ""
                } catch (e) {
                    n.order_id = ""
                }((0, _.le)() || (0, _.$C)() && !n.lj_data) && delete n.lj_data, delete n.name, C.push(n)
            }
            setInterval(g, 1e3), "undefined" != typeof document && document.addEventListener("visibilitychange", (() => {
                "hidden" === document.visibilityState && g(!0)
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
                Jx: () => D,
                w2: () => s,
                vd: () => C,
                oM: () => p,
                Rx: () => E,
                $C: () => h,
                le: () => v
            });
            var o = n(56337);
            const i = 1,
                r = 2,
                c = 3,
                a = 4,
                _ = 5;
            var d = n(35999),
                u = n(21117);

            function s() {
                return {
                    env: d.K[(0, o.zG)()] || 0,
                    device: f()
                }
            }
            const l = ["show_checkout_failed_on_missing_key", "show_checkout_failed_on_external_script_source"];

            function E(e) {
                return e.filter((e => l.includes(e.event)))
            }

            function f() {
                const e = "undefined" != typeof navigator ? navigator.userAgent : "";
                let t, n, o = e.match(/iPhone; CPU iPhone OS (\d+)/);
                return o ? (t = 1, n = o[1]) : (o = e.match(/iPad; CPU OS (\d+)/), o ? (t = 2, n = o[1]) : (o = e.match(/Mac OS X (\w+)/), o ? (t = 3, n = o[1].split("_").join("")) : (o = e.match(/Windows NT (\d+)/), o ? (t = 4, n = o[1]) : (o = e.match(/Linux; Android (\d+)/), o ? (t = 5, n = o[1]) : (o = e.match(/Linux/), o && (t = 6)))))), [t || 0, Number(n) || 0]
            }

            function p() {
                switch (!0) {
                    case (0, o.D4)():
                        return _;
                    case (0, o.Vr)():
                        return a;
                    case (0, o.Lq)():
                        return c;
                    case (0, u.u)():
                        return r;
                    default:
                        return i
                }
            }

            function v() {
                return p() === a
            }

            function h() {
                return p() === _
            }

            function C() {
                const e = p();
                return e === a || e === _ ? "checkout-widgets" : "checkout"
            }

            function D(e) {
                return {
                    event: `log:${e.event}`,
                    page_url: window.location.href,
                    checkout_id: e.checkout_id,
                    order_id: e.order_id,
                    timestamp: Date.now()
                }
            }
        },
        81825(e, t, n) {
            n.d(t, {
                E3: () => h,
                HD: () => E,
                p4: () => l
            });
            var o = n(68661),
                i = n(62421),
                r = n(21117),
                c = n(82314),
                a = n(56337),
                _ = n(78400),
                d = n(28949);
            let u = "",
                s = !1;

            function l(e) {
                u = e, s = !1
            }

            function E() {
                u = "", s = !0
            }

            function f() {
                if (u) return "logged_in";
                if (s) return "guest";
                return (0, d.ve)("customer.data") ? "pre_logged_in" : "guest"
            }

            function p() {
                if (!(0, r.u)()) return "";
                if ((0, c.yp)()) return "shopify";
                const e = (0, _.Rw)("_.integration");
                return "woocommerce" === e ? "woocommerce" : "magento" === e ? "magento" : (0, c.Zs)() ? "native" : "other"
            }
            const v = {
                flow: "",
                auth_state: "",
                login_source: "",
                store_platform: "",
                mid: ""
            };

            function h() {
                try {
                    const t = !(!(0, a.Vr)() && !(0, a.D4)()) || Boolean(null === (e = (0, d.xD)()) || void 0 === e ? void 0 : e.merchant);
                    return {
                        flow: t ? (0, r.u)() ? (0, i.nN)() ? "quickbuy" : (0, o.t)() ? "opc" : (0, o.RM)() ? "stepper" : "unknown" : "" : "unknown",
                        auth_state: t ? f() : "unknown",
                        login_source: u,
                        store_platform: t ? p() : "unknown",
                        mid: t ? String((0, d.ve)("merchant.data.metadata.unique_id", "") ? ? "") : "unknown"
                    }
                } catch {
                    return { ...v
                    }
                }
                var e
            }
        },
        68661(e, t, n) {
            n.d(t, {
                $6: () => C,
                EO: () => f,
                RM: () => l,
                RV: () => E,
                rK: () => D,
                t: () => u
            });
            var o = n(65047),
                i = n(31992),
                r = n(97623),
                c = n(45148);
            const [a, _] = (0, o.createStore)(!1), d = (0, i.T5)(!1);

            function u() {
                return a()
            }
            let s = !1;

            function l() {
                return s
            }

            function E(e) {
                s = !0, _(e), d.set(e)
            }

            function f() {
                const e = u(),
                    t = (0, i.T5)(!e);
                return e && (0, c.C)().then((() => t.set(!0)), (() => t.set(!0))), (0, r.u)(t)
            }
            const p = (0, i.T5)(!1),
                v = (0, i.T5)(!1);
            let h = 0;

            function C() {
                1 == ++h && v.set(!0)
            }

            function D() {
                --h <= 0 && (h = 0, v.set(!1))
            }
            n.d(t, ["HY", 0, d, "Lx", 0, v, "oE", 0, p])
        },
        62421(e, t, n) {
            var o = n(65047);
            const [i, r] = (0, o.createStore)(!1), [c, a] = (0, o.createStore)({
                eligibility: !1,
                ineligibility_reasons: "",
                variant: "",
                result: !1
            });
            n.d(t, ["$o", 0, a, "Vz", 0, r, "h9", 0, c, "nN", 0, i])
        },
        98200(e, t, n) {
            n.r(t), n.d(t, {
                fetchMerchantAnalyticsConfigs: () => E
            });
            var o = n(38787),
                i = n(60431),
                r = n(78400),
                c = n(28949),
                a = n(80896),
                _ = n(63099),
                d = n(56155),
                u = n(78867);
            const s = `rzp_lite_analytics_configs_${(0,r.V5)()}`,
                l = (0, a.nF)((function() {
                    return (0, i.Ay)({
                        url: "magic/analytics/configs",
                        skipEdgeToken: !0,
                        name: "analytics_configs_fetch"
                    })
                }), 18e5, s);

            function E() {
                return l().then((e => {
                    var t;
                    const n = null == e ? void 0 : e.data,
                        i = {
                            fb: (null == n ? void 0 : n.fb) || {},
                            ga4: (null == n ? void 0 : n.ga4) || {},
                            google_ads: (null == n ? void 0 : n.google_ads) || {}
                        };
                    (0, o._z)({
                        event: "customevent",
                        data: {
                            event: "magic.analytics_configs",
                            data: {
                                analyticsConfigs: i
                            }
                        }
                    }), (0, _.qO)(i), null === (t = (0, _.Rn)()) || void 0 === t || t()
                })).catch((() => {
                    (0, d.A)({
                        name: u.Q.CONFIG_FAILED,
                        properties: {
                            option: (0, c.om)("fb_analytics")
                        }
                    })
                }))
            }
        },
        63099(e, t, n) {
            n.d(t, {
                Dl: () => d,
                Rn: () => u,
                Zo: () => s
            });
            var o = n(65047),
                i = n(72912);
            let [r, c] = (0, i._7)();
            const [a, _] = (0, o.createStore)();

            function d() {
                return r
            }

            function u() {
                return c
            }

            function s() {
                r = void 0, c = void 0
            }
            n.d(t, ["MT", 0, a, "qO", 0, _])
        },
        45148(e, t, n) {
            n.d(t, {
                X: () => _
            });
            var o = n(80896),
                i = n(78400),
                r = n(14494),
                c = n(28949);
            const a = (0, o.Oo)((() => i.PC.then(c.D9).then(r.r$)));

            function _() {
                return i.PC
            }
            n.d(t, ["C", 0, a])
        },
        78867(e, t, n) {
            const o = {
                    PAGE_VIEW: "page_view",
                    COUPONS_VIEWED: "coupons_viewed",
                    COUPONS_MANUAL_INPUT: "coupon_manually_entered",
                    COUPON_AVAILABLE_CLICKED: "available_coupon_applied",
                    COUPONS_APPLIED_SUCCESS: "coupons_applied_success",
                    COUPONS_APPLIED_FAILED: "coupons_applied_failed",
                    COUPONS_REMOVED: "coupons_removed",
                    SELECT_ADDRESS: "saved_address_selected",
                    ADDRESS_ENTERED: "address_entered",
                    CTA_CLICKED: "continue_clicked",
                    PAYMENT_METHOD_SELECT: "payment_method_selected",
                    PAYMENT_SUCCESSFUL: "payment_successful",
                    PAYMENT_FAILED: "payment_failed",
                    PAY_NOW_CLICKED: "pay_now_clicked",
                    LOGIN_SUCCESS: "login_success",
                    LOGIN_FAILED: "login_failed",
                    OTP_SUBMITTED: "otp_submitted",
                    MAGIC_CHECKOUT_REQUESTED: "magic_checkout_requested",
                    SAVED_ADDRESS_CONTINUE_CLICKED: "saved_address_continue_clicked",
                    ADD_NEW_ADDRESS_CONTINUE_CLICKED: "addnew_address_continue_clicked",
                    LOGOUT_SUCCESS: "logout_success",
                    ORDER_CUSTOMER_DETAILS_UPDATED: "order_customer_details_updated"
                },
                i = {
                    INITIATECHECKOUT: "InitiateCheckout",
                    ADDPAYMENTINFO: "AddPaymentInfo"
                },
                r = {
                    checkout_initiated: [i.INITIATECHECKOUT, o.MAGIC_CHECKOUT_REQUESTED],
                    add_payment_info: [o.PAY_NOW_CLICKED, i.ADDPAYMENTINFO],
                    purchase: [o.PAYMENT_SUCCESSFUL],
                    add_shipping_info: [o.ADD_NEW_ADDRESS_CONTINUE_CLICKED, o.SAVED_ADDRESS_CONTINUE_CLICKED]
                };
            n.d(t, ["OR", 0, {
                GA: "ga",
                FB: "fb",
                BE: "be",
                WEB: "web"
            }, "Q", 0, {
                CONFIG_FAILED: "third_party_analytics:config_failed",
                DISPATCH: "third_party_analytics:dispatch",
                BE_EVENT_FAILED: "third_party_analytics:be_event_failed"
            }, "R6", 0, {
                COUPONS: "rzp_coupons",
                ADDRESS: "rzp_address",
                LOGIN: "rzp_login",
                ADD_ADDRESS: "rzp_add_address",
                PAYMENT_METHODS: "rzp_payments",
                MAGIC_CHECKOUT: "rzp_magic_checkout"
            }, "hA", 0, i, "jp", 0, r, "kl", 0, o])
        },
        73477(e, t, n) {
            n.d(t, {
                _: () => i
            });
            var o = n(44138);

            function i() {
                try {
                    const e = new URLSearchParams(window.location.search).get("unified_session_id") || "";
                    if ((0, o.fz)(e)) return e
                } catch (e) {}
                return (0, o.v6)()
            }
        },
        97623(e, t, n) {
            function o(e) {
                return {
                    subscribe: e.subscribe.bind(e)
                }
            }
            n.d(t, {
                u: () => o
            })
        },
        31992(e, t, n) {
            n.d(t, {
                HD: () => o.HD,
                Jt: () => o.Jt,
                T5: () => o.T5,
                tB: () => o.tB,
                un: () => o.un
            });
            n(17625);
            var o = n(44622);
            n(38544), n(62446)
        }
    }
]);