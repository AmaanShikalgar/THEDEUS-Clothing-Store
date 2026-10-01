"use strict";
(globalThis.webpackChunksidecart = globalThis.webpackChunksidecart || []).push([
    [33982], {
        33982(e, t, n) {
            n.r(t), n.d(t, {
                createGooglePayJsStore: () => E,
                googlePayJsStore: () => m,
                loadGooglePaySdk: () => g
            });
            var o = n(89130),
                i = n(31992),
                r = n(26705),
                a = n(35359),
                l = n(33665);
            var s = n(8143),
                c = n(55789),
                d = n(25070),
                u = n(47783),
                y = n(26260);
            const _ = (e, t) => {
                    const n = (e, n, o) => {
                        t((t => ({ ...t,
                            sdkLoadingState: e,
                            ...void 0 !== n && {
                                paymentClient: n
                            },
                            ...void 0 !== o && {
                                error: o
                            }
                        })))
                    };
                    return {
                        updateSdkState: n,
                        createPaymentClient: () => {
                            const n = e();
                            if (null != n && n.paymentClient) return n.paymentClient;
                            const o = function() {
                                if (!(0, r.L)() || !window.google) return null;
                                try {
                                    return new window.google.payments.api.PaymentsClient({
                                        environment: "PRODUCTION"
                                    })
                                } catch {
                                    return null
                                }
                            }();
                            return o && t((e => ({ ...e,
                                paymentClient: o
                            }))), o
                        },
                        loadSdkScript: async (t, i) => {
                            n(a.qx.PENDING);
                            try {
                                const l = (0, o.A)("https://pay.google.com/gp/p/js/pay.js", null, !0, !0);
                                l.then((() => {
                                    const t = e();
                                    t.sdkLoadingState === a.qx.REJECTED && t.error === d.ec && (0, r.L)() && (null == i || i())
                                })).catch((() => {}));
                                let s = null;
                                const _ = new Promise(((e, t) => {
                                    s = setTimeout((() => {
                                        t(new Error(d.ec))
                                    }), 5e3)
                                }));
                                await Promise.race([l, _]).finally((() => {
                                    null !== s && clearTimeout(s)
                                }));
                                const p = t();
                                n(a.qx.RESOLVED, p), (0, c.s)(c.i.SDK_LOAD_SUCCESS);
                                const E = (0, y.b)(a.zc.IS_READY_TO_PAY);
                                (0, u.log)({
                                    name: c.i.GOOGLE_PAY_AMEX_TERMINAL_ELIGIBLE,
                                    properties: {
                                        eligible: E
                                    }
                                })
                            } catch (e) {
                                const t = e instanceof Error && e.message === d.ec;
                                n(a.qx.REJECTED, null, t ? d.ec : void 0), (0, c.s)(t ? c.i.SDK_LOAD_TIMEOUT : c.i.SDK_LOAD_FAILED)
                            }
                        }
                    }
                },
                p = {
                    sdkLoadingState: a.qx.IDLE,
                    isCardAvailable: !1,
                    credentialStatusChecked: !1,
                    displayState: "hide",
                    paymentClient: null,
                    isReadyToPay: !1
                },
                E = () => {
                    const {
                        subscribe: e,
                        update: t
                    } = (0, i.T5)(p), n = () => (0, i.Jt)({
                        subscribe: e
                    }), {
                        updateSdkState: o,
                        createPaymentClient: d,
                        loadSdkScript: u
                    } = _(n, t);
                    let y = null;
                    const E = async () => {
                            if (y) return y;
                            const e = n();
                            if (e.credentialStatusChecked) return;
                            if (e.sdkLoadingState !== a.qx.RESOLVED) return;
                            const o = g();
                            if (o) return y = (async () => {
                                let e = null;
                                try {
                                    const n = { ...(0, s.V)(a.zc.IS_READY_TO_PAY)
                                        },
                                        i = new Promise(((t, n) => {
                                            e = setTimeout((() => {
                                                n(new Error("Google Pay credential check timeout"))
                                            }), 6e3)
                                        })),
                                        r = await Promise.race([o.isReadyToPay(n), i]),
                                        l = "object" == typeof r ? r.result ? ? !1 : r,
                                        d = !n.existingPaymentMethodRequired || "object" == typeof r && (r.paymentMethodPresent ? ? !1);
                                    t((e => ({ ...e,
                                        isCardAvailable: d,
                                        credentialStatusChecked: !0,
                                        isReadyToPay: l
                                    }))), (0, c.s)(c.i.READY_CHECK_SUCCESS, {
                                        is_ready: l,
                                        hasCard: d
                                    })
                                } catch (e) {
                                    var n;
                                    t((e => ({ ...e,
                                        isCardAvailable: !1,
                                        credentialStatusChecked: !0,
                                        isReadyToPay: !1
                                    })));
                                    const o = null == e || null === (n = e.message) || void 0 === n ? void 0 : n.includes("timeout");
                                    (0, c.s)(o ? c.i.READY_CHECK_TIMEOUT : c.i.READY_CHECK_FAILED, {
                                        error: null == e ? void 0 : e.message
                                    })
                                } finally {
                                    null !== e && clearTimeout(e), y = null
                                }
                            })(), y;
                            t((e => ({ ...e,
                                isCardAvailable: !1,
                                credentialStatusChecked: !0,
                                isReadyToPay: !1
                            })))
                        },
                        m = async () => {
                            const e = n();
                            if (!(e => e === a.qx.RESOLVED || e === a.qx.PENDING)(e.sdkLoadingState)) {
                                if ((0, r.L)()) return o(a.qx.RESOLVED, e.paymentClient || g()), void await E().catch((() => {}));
                                try {
                                    await u(g, (() => {
                                        const e = g();
                                        o(a.qx.RESOLVED, e, ""), E().catch((() => {}))
                                    })), await E().catch((() => {}))
                                } catch (e) {}
                            }
                        },
                        g = () => {
                            const e = n();
                            return e.paymentClient ? e.paymentClient : (0, r.L)() ? d() : ((0, l.h)() && m().catch((() => null)), null)
                        };
                    return {
                        subscribe: e,
                        loadGooglePaySdk: m,
                        getPaymentClient: g,
                        createPaymentClient: d
                    }
                },
                m = E(),
                g = () => m.loadGooglePaySdk()
        },
        35359(e, t, n) {
            n.d(t, {
                u: () => o,
                zc: () => i
            });
            let o = function(e) {
                return e.FINAL = "FINAL", e.PENDING = "PENDING", e
            }({});
            let i = function(e) {
                return e.PAYMENT = "payment", e.IS_READY_TO_PAY = "is_ready_to_pay", e
            }({});
            n.d(t, ["qx", 0, {
                IDLE: "idle",
                PENDING: "pending",
                RESOLVED: "resolved",
                REJECTED: "rejected"
            }])
        },
        55789(e, t, n) {
            n.d(t, {
                i: () => r.i6,
                s: () => E
            });
            var o = n(93153),
                i = n(47783),
                r = n(25070),
                a = n(33665),
                l = n(82435),
                s = n(8143),
                c = n(35359),
                d = n(45440),
                u = n(87202),
                y = n(81352),
                _ = n(14494);

            function p() {
                const e = (0, a.f)();
                return {
                    eligibility: "" === e,
                    ineligibility_reason: e || void 0,
                    exp_gpay_enabled: (0, l.Br)(r.Z3),
                    exp_gpay_desktop: (0, l.Br)(r.iI),
                    exp_gpay_amex: (0, l.Br)(r.rc),
                    exp_gpay_new_button: (0, l.Br)(r.pS),
                    exp_gpay_button_config: (0, l.Br)(r.dE),
                    exp_googlepay_international_i18n: (0, l.Br)(r.Qf)
                }
            }

            function E(e, t) {
                var n, a;
                const {
                    allowedPaymentMethods: l,
                    existingPaymentMethodRequired: E
                } = (0, s.V)(c.zc.IS_READY_TO_PAY);
                (0, i.log)({
                    name: e,
                    properties: {
                        flow_type: r.zm,
                        merchant_key: (0, _.qL)(),
                        allowed_payment_methods: null == l || null === (n = l[0]) || void 0 === n || null === (n = n.parameters) || void 0 === n ? void 0 : n.allowedCardNetworks,
                        mode: E ? "Strict" : "Permissive",
                        phone_number_country_code: (0, d.B8)((0, u.getDialCode)()) || "",
                        ip_country_code: (null === (a = (0, y._J)()) || void 0 === a ? void 0 : a.country_iso) || "",
                        browser_type: (0, o.PS)() ? "Dweb" : "Mweb",
                        ...p(),
                        ...t
                    }
                })
            }
        },
        8143(e, t, n) {
            n.d(t, {
                V: () => h
            });
            var o = n(81352),
                i = n(44138),
                r = n(35359),
                a = n(26260),
                l = n(47783),
                s = n(25070),
                c = n(14494),
                d = n(82435),
                u = n(80896),
                y = n(42875);

            function _() {
                return (0, d._m)(s.vu)
            }
            const p = (0, u.Oo)((() => {
                const e = _(),
                    t = function(e) {
                        return e === s.xT || e === s.Jy
                    }(e);
                (0, y.logExperimentsEligibility)({
                    [s.vu]: {
                        eligibility: !0,
                        ineligibility_reasons: "",
                        variant: e ? ? s._9,
                        result: t
                    }
                })
            }));
            var E = n(3296),
                m = n(89479);

            function g(e, t) {
                return (0, m.aG)(e, {
                    currency: t
                }).toString()
            }
            const S = ["MC", "VISA"],
                A = {
                    MC: "MASTERCARD",
                    VISA: "VISA",
                    AMEX: "AMEX"
                },
                C = {
                    merchantName: (0, o.MJ)(),
                    merchantId: s.em,
                    merchantOrigin: (0, E.A)()
                },
                P = {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                        gateway: "razorpay",
                        gatewayMerchantId: (0, i.v6)()
                    }
                };

            function h(e, t, n, o) {
                const i = ((e, t, n) => {
                        const o = [...S];
                        (0, a.b)(e, t, n) && o.push("AMEX");
                        const i = [];
                        try {
                            const e = (0, c.si)();
                            for (const t of Object.keys(e))
                                if (1 === e[t] && o.includes(t)) {
                                    const e = A[t];
                                    e && i.push(e)
                                }
                        } catch (e) {
                            (0, l.log)({
                                name: s.i6.GOOGLE_PAY_PROCESSING_FAILED,
                                properties: {
                                    error: e.message
                                }
                            })
                        }
                        return i
                    })(e, t, n),
                    d = function() {
                        const e = _();
                        return e === s.xT ? [s.yL] : e === s.Jy ? [s.Ht] : [...s.Uh]
                    }();
                e === r.zc.PAYMENT && p();
                const u = [{
                        type: "CARD",
                        parameters: {
                            allowedAuthMethods: d,
                            allowedCardNetworks: i,
                            billingAddressRequired: !0,
                            billingAddressParameters: {
                                format: "FULL"
                            }
                        },
                        tokenizationSpecification: P
                    }],
                    y = e === r.zc.IS_READY_TO_PAY ? !(0, c.Br)(s.dE) : void 0;
                let E;
                return e === r.zc.PAYMENT && void 0 !== o && t && (E = {
                    totalPriceStatus: r.u.FINAL,
                    totalPrice: g(o, t),
                    currencyCode: t,
                    countryCode: "IN"
                }), {
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: u,
                    ...e === r.zc.PAYMENT && E && {
                        transactionInfo: E,
                        merchantInfo: C
                    },
                    ...void 0 !== y && {
                        existingPaymentMethodRequired: y
                    }
                }
            }
        },
        26260(e, t, n) {
            n.d(t, {
                A: () => y,
                b: () => u
            });
            var o = n(82435),
                i = n(25070),
                r = n(14494),
                a = n(84009),
                l = n(56141),
                s = n(35359);
            const c = (0, r.si)(),
                d = Boolean(1 === (null == c ? void 0 : c[a.wj.AMEX]));

            function u(e, t, n) {
                if (!(0, o.Br)(i.rc) || "IN" !== (0, r.Rb)()) return !1;
                if (e === s.zc.PAYMENT) {
                    if (d) return (0, l.Cx)() ? !n || "INR" === t : !n
                } else if (e === s.zc.IS_READY_TO_PAY && (0, l.Cx)() && d) return !0;
                return !1
            }

            function y() {
                return !(!(0, o.Br)(i.rc) || "IN" !== (0, r.Rb)()) && Boolean(d && (0, l.Cx)())
            }
        },
        33665(e, t, n) {
            n.d(t, {
                f: () => g,
                h: () => S
            });
            var o = n(82435),
                i = n(93153),
                r = n(25070),
                a = n(14494),
                l = n(21117),
                s = n(78400),
                c = n(28949),
                d = n(93665),
                u = n(56141),
                y = n(56337),
                _ = n(87202),
                p = n(45440);
            const E = (0, n(81352)._J)();

            function m() {
                return (0, o.Br)(r.JR)
            }

            function g() {
                return (0, u.Cx)() || (0, o.Br)(r.Qf) ? "IN" === (0, p.B8)((0, _.getDialCode)()) && "IN" === (null == E ? void 0 : E.country_iso) ? "user_country_not_supported" : "shopify" !== (0, c.om)("_.integration") || (0, d.O)() || m() ? (0, a.id)() ? "cfb" : (0, l.u)() ? "magic" : (0, a.DY)() ? (0, o.jI)("raas") ? "raas" : (0, s.Rw)("recurring") || (0, s.Rw)("subscription_id") ? "recurr_subsc" : "payment_button" === (0, s.Rw)("_.integration") ? "pb" : "whatsapp" === (0, s.Rw)("_.integration_parent") ? "whatsapp" : i.me ? "webview" : (0, y.yt)() && !m() ? "sdk_env" : "" : "not_rzp" : "shopify_non_hosted" : "merchant_country_not_supported"
            }

            function S() {
                try {
                    const e = (0, i.PS)() ? r.iI : r.Z3;
                    return !!(0, o.Br)(e) && "" === g()
                } catch {}
                return !1
            }
        },
        26705(e, t, n) {
            n.d(t, ["L", 0, () => {
                var e, t, n;
                return !!("undefined" != typeof window && window.google && null !== (e = window.google) && void 0 !== e && e.payments && null !== (t = window.google) && void 0 !== t && null !== (t = t.payments) && void 0 !== t && t.api && "function" == typeof(null === (n = window.google) || void 0 === n || null === (n = n.payments) || void 0 === n || null === (n = n.api) || void 0 === n ? void 0 : n.PaymentsClient))
            }])
        }
    }
]);