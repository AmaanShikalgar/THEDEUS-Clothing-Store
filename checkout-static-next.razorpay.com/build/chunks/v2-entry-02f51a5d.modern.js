"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [73459, 83366], {
        89130(e, t, a) {
            a.d(t, {
                A: () => i
            });
            var n = a(65878);

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "anonymous",
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return new Promise(((s, r) => {
                    const o = (0, n.n)("script");
                    (0, n.NI)(document.head, o), o.type = "application/javascript", null !== t && (o.crossOrigin = t), o.defer = a, o.src = e, o.onload = s, o.onerror = i ? () => r(new Error(`Failed to load script: ${e}`)) : () => {}
                }))
            }
        },
        87414(e, t, a) {
            a.d(t, {
                d: () => c,
                m: () => r.m
            });
            var n = a(72912),
                i = a(28766),
                s = a(34695),
                r = a(5455),
                o = a(31992),
                l = a(21734);

            function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = (0, o.T5)(r.m.pending),
                    a = (0, o.T5)({
                        request: {},
                        response: {}
                    }),
                    c = {
                        value: null
                    };
                let p = () => {};
                const d = i.ff.get(),
                    y = null != d && d.length ? d[d.length - 1] : null;
                (null == y ? void 0 : y.name) === l.rB && y.pop();
                const h = (0, i.BH)({
                        component: s.A,
                        props: { ...e,
                            paymentState: t,
                            paymentData: a,
                            paymentId: c,
                            completeCallback: () => {
                                p()
                            }
                        }
                    }),
                    u = (0, n.cb)(1e3),
                    m = u.then((() => (0, n.cb)(1e3)));
                return {
                    ref: h,
                    close: async () => {
                        await m, h.pop()
                    },
                    setPaymentState: async e => {
                        let {
                            state: n,
                            data: i,
                            callback: s,
                            payment_id: r
                        } = e;
                        await u, t.set(n), a.set(i), c.value = r ? ? null, p = s
                    }
                }
            }
        },
        87296(e, t, a) {
            a.d(t, {
                EM: () => I,
                kP: () => f
            });
            var n = a(1866),
                i = a(83082),
                s = a(25577),
                r = a(60431),
                o = a(14494),
                l = a(17026),
                c = a(3296),
                p = a(56337),
                d = a(82435),
                y = a(57747),
                h = a(93153);

            function u() {
                try {
                    return window.self !== window.top
                } catch {
                    return !0
                }
            }
            let m = null;

            function A(e, t) {
                (m || (m = Promise.resolve().then(a.bind(a, 47783))), m).then((a => {
                    let {
                        log: n
                    } = a;
                    n({
                        name: y.XB.MERCHANT_CONTEXT_URL_RESOLVED,
                        properties: {
                            domain: e,
                            source: t,
                            is_iframe: u(),
                            experiment_on: (0, d.Br)(y.Md),
                            is_desktop: (0, h.PS)(),
                            is_webview: h.me,
                            library: (0, p.G9)()
                        }
                    })
                })).catch((() => {}))
            }
            var P = a(78400),
                _ = a(89479),
                E = a(87414),
                S = a(95451),
                g = a(47559),
                v = a(28949);
            var C = a(47783),
                b = a(80861);

            function w() {
                if ((0, d.Br)(y.Md)) {
                    try {
                        if (!u()) return window.location.hostname
                    } catch {}
                    const e = (0, p.$9)();
                    if (e) return e
                }
                return (0, c.A)()
            }
            const f = {
                isApplePaySupported() {
                    var e;
                    return "undefined" != typeof window && !0 === (null === (e = window.ApplePaySession) || void 0 === e ? void 0 : e.canMakePayments())
                },
                async getPaymentCredentialStatus(e) {
                    try {
                        var t;
                        if ("function" != typeof(null === (t = window.ApplePaySession) || void 0 === t ? void 0 : t.applePayCapabilities)) return null;
                        return (await window.ApplePaySession.applePayCapabilities(e)).paymentCredentialStatus
                    } catch (e) {
                        return null
                    }
                },
                formatAmount: (e, t) => (0, _.aG)(e, {
                    currency: t
                }).toString()
            };
            class I {
                constructor(e) {
                    (0, n.A)(this, "session", null), (0, n.A)(this, "paymentId", ""), (0, n.A)(this, "isProcessing", !1), (0, n.A)(this, "paymentInstance", null), (0, n.A)(this, "isS2SApplePay", (0, S.v)()), (0, n.A)(this, "paymentStatusModal", null), (0, n.A)(this, "isS2SPaymentInstance", !1), this.config = e
                }
                cancelPaymentInstance(e) {
                    this.paymentInstance && (this.paymentId && !this.paymentInstance.payment_id && (this.paymentInstance.payment_id = this.paymentId), this.paymentInstance.cancel({
                        description: e
                    }))
                }
                getBaseAnalyticsProperties() {
                    return {
                        apple_pay_flow: !0,
                        s2s_apple_pay: this.isS2SApplePay,
                        is_domestic: (0, g.v7)(),
                        payment_id: this.paymentId
                    }
                }
                startPayment(e, t, a, n) {
                    this.isProcessing = !0;
                    const i = this.buildPaymentRequest(a, n);
                    (0, C.log)({
                        name: y.XB.APPLE_PAY_PAYMENT_INITIATED,
                        properties: { ...this.getBaseAnalyticsProperties(),
                            is_dcc_flow: t,
                            currency: i.currencyCode,
                            amount: i.total.amount,
                            country_code: i.countryCode,
                            supported_networks: i.supportedNetworks,
                            merchant_capabilities: i.merchantCapabilities,
                            display_name: i.total.label
                        }
                    });
                    try {
                        this.session = new window.ApplePaySession(3, i), (0, C.log)({
                            name: y.XB.APPLE_PAY_SESSION_CREATED,
                            properties: { ...this.getBaseAnalyticsProperties(),
                                version: 3,
                                currency: a,
                                amount: n,
                                supported_networks: this.config.supportedNetworks,
                                country_code: this.config.countryCode
                            }
                        })
                    } catch (t) {
                        let i = "";
                        return i = t instanceof Error && t.message.includes(y.iO) ? y.LY : "Something went wrong!", this.isProcessing = !1, (0, C.log)({
                            name: y.XB.APPLE_PAY_SESSION_CREATE_FAILED,
                            properties: { ...this.getBaseAnalyticsProperties(),
                                version: 3,
                                currency: a,
                                amount: n,
                                supported_networks: this.config.supportedNetworks,
                                country_code: this.config.countryCode,
                                error_message: i,
                                original_error: t instanceof Error ? t.message : String(t)
                            }
                        }), e.onError(new Error(i)), null
                    }
                    if (this.isS2SApplePay && !this.paymentInstance) {
                        try {
                            this.paymentStatusModal = (0, E.d)({
                                payment: {},
                                cancelPayment: () => {
                                    this.cancel()
                                },
                                payload: {
                                    method: "card",
                                    provider: y.O7
                                }
                            })
                        } catch (t) {
                            return e.onError(new Error("Failed to initialize payment modal")), this.isProcessing = !1, null
                        }
                        this.paymentInstance = {
                            cancelled: !1,
                            terminated: !1,
                            cancel: e => {
                                this.updatePaymentStatusForS2S("failure", {
                                    error: e || {
                                        description: "Payment cancelled"
                                    }
                                }, (() => {
                                    (0, b.r)({
                                        error: e || {
                                            description: "Payment cancelled"
                                        }
                                    }, {
                                        method: "card",
                                        provider: y.O7
                                    })
                                }))
                            },
                            onComplete: e => {
                                this.updatePaymentStatusForS2S("success", e || {}, (() => {
                                    (0, b.o)(e || {}, {
                                        method: "card",
                                        provider: y.O7
                                    })
                                }))
                            }
                        }, this.isS2SPaymentInstance = !0
                    }
                    return this.isS2SApplePay ? this.session.onvalidatemerchant = a => {
                        (0, C.log)({
                            name: y.XB.APPLE_PAY_PAYMENT_SHEET_INVOKED,
                            properties: { ...this.getBaseAnalyticsProperties()
                            }
                        }), this.createCheckoutActivityForApplePay(t, null == a ? void 0 : a.validationURL).then((() => {
                            (0, C.log)({
                                name: y.XB.PAYMENT_TOKEN_RECEIVED,
                                properties: { ...this.getBaseAnalyticsProperties()
                                }
                            })
                        })).catch((t => {
                            try {
                                var a;
                                null === (a = this.session) || void 0 === a || a.abort()
                            } catch (e) {}
                            this.isProcessing = !1, this.isS2SApplePay && this.paymentStatusModal && this.updatePaymentStatusForS2S("failure", {
                                error: {
                                    description: t.message || ""
                                }
                            }), this.cancelPaymentInstance(""), e.onError(t)
                        }))
                    } : this.session.onvalidatemerchant = a => {
                        (0, C.log)({
                            name: y.XB.APPLE_PAY_MERCHANT_VALIDATION_STARTED,
                            properties: { ...this.getBaseAnalyticsProperties(),
                                validation_url: a.validationURL
                            }
                        }), this.createCheckoutPaymentForApplePay(a.validationURL, t).catch((t => {
                            (0, C.log)({
                                name: y.XB.APPLE_PAY_MERCHANT_VALIDATION_FAILED,
                                properties: { ...this.getBaseAnalyticsProperties(),
                                    error_message: t.message || "Unknown error"
                                }
                            });
                            try {
                                var a;
                                null === (a = this.session) || void 0 === a || a.abort()
                            } catch (e) {}
                            this.isProcessing = !1, this.paymentInstance && this.cancelPaymentInstance(""), e.onError(t)
                        }))
                    }, this.session.onpaymentauthorized = t => {
                        var a, n, i;
                        (0, C.log)({
                            name: y.XB.APPLE_PAY_USER_AUTHORIZED,
                            properties: { ...this.getBaseAnalyticsProperties(),
                                payment_network: null === (a = t.payment) || void 0 === a || null === (a = a.token) || void 0 === a || null === (a = a.paymentMethod) || void 0 === a ? void 0 : a.network,
                                payment_type: null === (n = t.payment) || void 0 === n || null === (n = n.token) || void 0 === n || null === (n = n.paymentMethod) || void 0 === n ? void 0 : n.type,
                                has_billing_contact: Boolean(null === (i = t.payment) || void 0 === i ? void 0 : i.billingContact)
                            }
                        }), this.processPayment(t.payment).then((t => {
                            if (t.razorpay_payment_id) {
                                try {
                                    var a;
                                    null === (a = this.session) || void 0 === a || a.completePayment(window.ApplePaySession.STATUS_SUCCESS)
                                } catch (e) {}
                                this.isProcessing = !1, this.paymentInstance && this.paymentInstance.onComplete(t), e.onSuccess(t)
                            } else {
                                var n;
                                try {
                                    var i;
                                    null === (i = this.session) || void 0 === i || i.completePayment(window.ApplePaySession.STATUS_FAILURE)
                                } catch (e) {}
                                const a = "string" == typeof t.error ? t.error : null === (n = t.error) || void 0 === n ? void 0 : n.description;
                                (0, C.log)({
                                    name: y.XB.PAYMENT_PARTNER_API_RESPONSE_ISSUE,
                                    properties: { ...this.getBaseAnalyticsProperties(),
                                        error_message: a
                                    }
                                }), this.isProcessing = !1, this.cancelPaymentInstance(a || "Payment failed");
                                const s = new Error(a || "Payment failed");
                                e.onError(s)
                            }
                        })).catch((t => {
                            try {
                                var a;
                                null === (a = this.session) || void 0 === a || a.completePayment(window.ApplePaySession.STATUS_FAILURE)
                            } catch (e) {}
                            this.isProcessing = !1, this.cancelPaymentInstance(t.message || "Payment processing failed"), e.onError(t)
                        }))
                    }, this.session.oncancel = () => {
                        (0, C.log)({
                            name: y.XB.APPLE_PAY_SESSION_CANCELLED,
                            properties: { ...this.getBaseAnalyticsProperties(),
                                cancel_source: "sheet cancel event",
                                had_session: Boolean(this.session),
                                is_processing: this.isProcessing
                            }
                        }), this.isProcessing = !1, this.cancelPaymentInstance("Apple Pay payment sheet was cancelled"), e.onCancel()
                    }, this.session.begin(), null
                }
                cancel() {
                    if (this.session) {
                        try {
                            this.session.abort()
                        } catch (e) {}
                        this.session = null, this.isProcessing = !1
                    }
                    this.paymentInstance && ((0, C.log)({
                        name: y.XB.APPLE_PAY_SESSION_CANCELLED,
                        properties: { ...this.getBaseAnalyticsProperties(),
                            cancel_source: "manual_cancel",
                            had_session: Boolean(this.session),
                            is_processing: this.isProcessing
                        }
                    }), this.cancelPaymentInstance("Payment session cancelled"))
                }
                buildPaymentRequest(e, t) {
                    return {
                        countryCode: this.config.countryCode,
                        currencyCode: e,
                        merchantCapabilities: this.config.merchantCapabilities,
                        supportedNetworks: this.config.supportedNetworks,
                        requiredBillingContactFields: ["postalAddress", "name"],
                        total: {
                            label: this.config.displayName,
                            amount: f.formatAmount(t, e),
                            type: "final"
                        }
                    }
                }
                async createCheckoutPaymentForApplePay(e, t) {
                    const a = w();
                    A(a, "checkout_payment");
                    const n = { ...await (0, s.Wc)(),
                        method: "card",
                        provider: y.O7,
                        initiative_context_url: a,
                        merchant_validation_url: e,
                        save: 0,
                        ...t ? (0, l.m2)({}) : {}
                    };
                    return new Promise(((e, t) => {
                        (0, i.fN)({
                            handlers: {
                                onResponse: a => {
                                    "string" == typeof a && (a = JSON.parse(a));
                                    try {
                                        var n, i, s, r;
                                        if (null === (n = a) || void 0 === n || null === (n = n.data) || void 0 === n || !n.session_data) throw (0, C.log)({
                                            name: y.XB.APPLE_PAY_MERCHANT_SESSION_CORRUPTED,
                                            properties: { ...this.getBaseAnalyticsProperties()
                                            }
                                        }), new Error("No Apple Pay session received from server");
                                        this.paymentId = null === (i = a.data.payment) || void 0 === i ? void 0 : i.id, (0, C.log)({
                                            name: y.XB.APPLE_PAY_MERCHANT_SESSION_RECEIVED,
                                            properties: { ...this.getBaseAnalyticsProperties()
                                            }
                                        }), null === (s = this.session) || void 0 === s || s.completeMerchantValidation(null === (r = a) || void 0 === r || null === (r = r.data) || void 0 === r ? void 0 : r.session_data), (0, C.log)({
                                            name: y.XB.APPLE_PAY_MERCHANT_SESSION_PASSED_TO_APPLE,
                                            properties: { ...this.getBaseAnalyticsProperties()
                                            }
                                        }), e()
                                    } catch (e) {
                                        t(e)
                                    }
                                },
                                errorHandler: e => {
                                    t(e)
                                },
                                cancelHandler: () => {
                                    t(new Error("Apple Pay merchant validation was cancelled during payment creation"))
                                }
                            },
                            payload: n
                        }).then((e => {
                            this.paymentInstance = e
                        })).catch(t)
                    }))
                }
                updatePaymentStatusForS2S(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    if (!this.paymentStatusModal) return null == a || a(), !1;
                    try {
                        return this.paymentStatusModal.setPaymentState({
                            state: E.m[e],
                            data: {
                                request: {
                                    method: "card",
                                    provider: y.O7
                                },
                                response: t
                            },
                            callback: () => {
                                null == a || a()
                            }
                        }), !0
                    } catch {
                        return !1
                    }
                }
                async createCheckoutActivityForApplePay(e, t) {
                    const a = w();
                    A(a, "s2s_session");
                    const n = function() {
                        const e = (0, v.om)("prefill.s2s_apple_pay.payment_id");
                        if (!e || "string" != typeof e) return "";
                        const t = e.trim();
                        return t.startsWith("pay_") && t.length > 4 ? t.substring(4) : t
                    }();
                    this.paymentId = n || "";
                    const i = {
                        payment_id: this.paymentId,
                        key_id: (0, o.qL)(),
                        action: "initiate_session",
                        initiate_session: {
                            app: {
                                name: "apple_pay",
                                apple_pay: {
                                    merchant_validation_url: t,
                                    initiative_context_url: a
                                }
                            }
                        }
                    };
                    try {
                        var s;
                        const e = (await (0, r.Ay)({
                            url: "/pg_router/v1/checkout/activity",
                            name: "checkout_activity",
                            method: "post",
                            headers: {
                                "Content-type": "application/json",
                                Authorization: `Basic ${btoa((0,P.V5)())}`
                            },
                            data: i,
                            skipEdgeToken: !0
                        })).data;
                        var l, c;
                        if (null != e && null !== (s = e.data) && void 0 !== s && s.session_data) return null === (l = this.session) || void 0 === l || l.completeMerchantValidation(null == e || null === (c = e.data) || void 0 === c ? void 0 : c.session_data), this.isS2SApplePay && this.paymentStatusModal && this.updatePaymentStatusForS2S("confirming", e), {
                            data: e
                        };
                        throw new Error("No Apple Pay session received from server")
                    } catch (e) {
                        throw this.isS2SApplePay && this.paymentStatusModal && this.updatePaymentStatusForS2S("failure", {
                            error: {
                                description: e.message || "Payment processing failed"
                            }
                        }), new Error(e.message)
                    }
                }
                async processPayment(e) {
                    (0, C.log)({
                        name: y.XB.PAYMENT_PARTNER_TOKEN_RECEIVED,
                        properties: { ...this.getBaseAnalyticsProperties()
                        }
                    });
                    try {
                        const t = await (0, r.Ay)({
                            url: `payments/${this.paymentId}/authorize_partner_payment`,
                            name: "authorize_partner_payment",
                            method: "post",
                            headers: {
                                "Content-type": "application/json",
                                Authorization: `Basic ${btoa((0,P.V5)())}`
                            },
                            data: {
                                key_id: (0, o.qL)(),
                                id: this.paymentId,
                                method: "card",
                                provider: y.O7,
                                partnerPayObject: {
                                    token: e.token,
                                    billingContact: e.billingContact
                                }
                            }
                        });
                        if (200 !== t.status) throw new Error("Payment processing failed");
                        return t.data
                    } catch (e) {
                        throw new Error(e.message)
                    }
                }
            }
        },
        83366(e, t, a) {
            var n = a(31992),
                i = a(73738),
                s = a(6171),
                r = a(87296),
                o = a(89130),
                l = a(7756),
                c = a(47783),
                p = a(93153),
                d = a(47559),
                y = a(81168),
                h = a(57747);
            const u = "paymentCredentialStatusUnknown",
                m = "paymentCredentialsUnavailable",
                A = "paymentCredentialsAvailable",
                P = (() => {
                    const e = e => {
                            const t = e.sdkLoadingState === i.a1.pending,
                                a = e.sdkLoadingState === i.a1.resolved,
                                n = e.sdkLoadingState === i.a1.rejected,
                                s = a && !e.credentialStatusChecked;
                            if (n) return "hide";
                            if (t || s) return "loading";
                            return e.credentialStatusChecked && (!0 === e.isCardAvailable || !0 === e.showApplePayEvenWhenNoCard) ? "show" : "hide"
                        },
                        t = {
                            sdkLoadingState: (0, s.o)() ? i.a1.resolved : "idle",
                            isCardAvailable: null,
                            showApplePayEvenWhenNoCard: null,
                            credentialStatusChecked: !1
                        },
                        a = e(t),
                        {
                            subscribe: P,
                            update: _
                        } = (0, n.T5)({ ...t,
                            displayState: a
                        });
                    l.G._setDisplayState(a), l.Mw._setIsCardAvailable(t.isCardAvailable);
                    let E = null;
                    const S = t => {
                            _((a => {
                                const n = t(a),
                                    i = { ...a,
                                        ...n
                                    };
                                return i.displayState = e(i), l.G._setDisplayState(i.displayState), l.Mw._setIsCardAvailable(i.isCardAvailable), i
                            }))
                        },
                        g = async () => {
                            const e = (0, n.Jt)({
                                subscribe: P
                            });
                            if (e.sdkLoadingState !== i.a1.resolved && e.sdkLoadingState !== i.a1.pending)
                                if ((0, s.o)()) v();
                                else {
                                    S((e => ({ ...e,
                                        sdkLoadingState: i.a1.pending
                                    })));
                                    try {
                                        const e = (0, o.A)("https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js", "anonymous", !0, !0);
                                        e.then((() => {
                                            const e = (0, n.Jt)({
                                                subscribe: P
                                            });
                                            e.sdkLoadingState === i.a1.rejected && e.error === h.BX && (0, s.o)() && v()
                                        })).catch((() => {}));
                                        let t = null;
                                        const a = new Promise(((e, a) => {
                                            t = setTimeout((() => {
                                                a(new Error(h.BX))
                                            }), 5e3)
                                        }));
                                        if (await Promise.race([e, a]).finally((() => {
                                                null !== t && clearTimeout(t)
                                            })), (0, s.o)()) v(), (0, c.log)({
                                            name: h.XB.APPLE_PAY_SDK_LOADED,
                                            properties: {
                                                is_desktop: (0, p.PS)()
                                            }
                                        });
                                        else {
                                            const e = "Apple Pay SDK not available";
                                            (0, c.log)({
                                                name: h.XB.SDK_NOT_AVAILABLE,
                                                properties: {
                                                    error: e,
                                                    is_desktop: (0, p.PS)()
                                                }
                                            }), S((t => ({ ...t,
                                                sdkLoadingState: i.a1.rejected,
                                                error: e
                                            }))), (0, y.logEnabledApplePayExperiments)({
                                                eligibility: !1,
                                                ineligibility_reasons: h.XB.SDK_NOT_AVAILABLE,
                                                result: !1
                                            })
                                        }
                                    } catch (e) {
                                        const t = e instanceof Error ? e.message : "Unknown error loading Apple Pay SDK",
                                            a = t === h.BX;
                                        (0, c.log)({
                                            name: a ? h.XB.SDK_LOAD_TIMEOUT : h.XB.SDK_LOAD_ERROR,
                                            properties: {
                                                error: t
                                            }
                                        }), (0, y.logEnabledApplePayExperiments)({
                                            eligibility: !1,
                                            ineligibility_reasons: a ? h.XB.SDK_LOAD_TIMEOUT : h.XB.SDK_LOAD_ERROR,
                                            result: !1
                                        }), S((e => ({ ...e,
                                            sdkLoadingState: i.a1.rejected,
                                            error: t
                                        })))
                                    }
                                }
                        },
                        v = () => {
                            S((e => ({ ...e,
                                sdkLoadingState: i.a1.resolved,
                                error: void 0
                            })));
                            (0, n.Jt)({
                                subscribe: P
                            }).merchantIdentifier && C().catch((e => {}))
                        },
                        C = async () => {
                            if (E) return E;
                            const e = (0, n.Jt)({
                                subscribe: P
                            });
                            if (e.credentialStatusChecked) return;
                            if (e.sdkLoadingState !== i.a1.resolved) return;
                            if (!e.merchantIdentifier) return;
                            let t = !1;
                            try {
                                t = r.kP.isApplePaySupported()
                            } catch (e) {}
                            return t ? (E = (async () => {
                                let t = null;
                                try {
                                    const a = new Promise(((e, a) => {
                                            t = setTimeout((() => {
                                                a(new Error("Apple Pay credential check timeout"))
                                            }), 5e3)
                                        })),
                                        n = await Promise.race([r.kP.getPaymentCredentialStatus(e.merchantIdentifier), a]);
                                    S((e => {
                                        let t = !1,
                                            a = !1;
                                        return n === A ? (t = !0, (0, c.log)({
                                            name: h.XB.CREDENTIAL_AVAILABLE
                                        })) : n === u || n === m ? (t = !1, a = !(!(0, p.PS)() || (0, d.v7)()), (0, c.log)({
                                            name: h.XB.CREDENTIAL_NOT_AVAILABLE_OR_UNKNOWN
                                        }), (0, y.logEnabledApplePayExperiments)({
                                            eligibility: !1,
                                            ineligibility_reasons: h.XB.CREDENTIAL_NOT_AVAILABLE_OR_UNKNOWN,
                                            result: !1
                                        })) : (t = !1, a = !1, (0, c.log)({
                                            name: h.XB.CREDENTIAL_STATUS_NOT_SUPPORTED
                                        }), (0, y.logEnabledApplePayExperiments)({
                                            eligibility: !1,
                                            ineligibility_reasons: h.XB.CREDENTIAL_STATUS_NOT_SUPPORTED,
                                            result: !1
                                        })), { ...e,
                                            isCardAvailable: t,
                                            showApplePayEvenWhenNoCard: a,
                                            credentialStatusChecked: !0
                                        }
                                    }))
                                } catch (e) {
                                    S((e => ({ ...e,
                                        isCardAvailable: !1,
                                        showApplePayEvenWhenNoCard: !1,
                                        credentialStatusChecked: !0
                                    }))), (0, c.log)({
                                        name: h.XB.CREDENTIAL_CHECK_ERROR
                                    }), (0, y.logEnabledApplePayExperiments)({
                                        eligibility: !1,
                                        ineligibility_reasons: h.XB.CREDENTIAL_CHECK_ERROR,
                                        result: !1
                                    })
                                } finally {
                                    null !== t && clearTimeout(t), E = null
                                }
                            })(), E) : ((0, c.log)({
                                name: h.XB.CAN_MAKE_PAYMENT_FALSE
                            }), (0, y.logEnabledApplePayExperiments)({
                                eligibility: !1,
                                ineligibility_reasons: h.XB.CAN_MAKE_PAYMENT_FALSE,
                                result: !1
                            }), void S((e => ({ ...e,
                                isCardAvailable: !1,
                                showApplePayEvenWhenNoCard: !1,
                                credentialStatusChecked: !0
                            }))))
                        };
                    return {
                        subscribe: P,
                        loadApplePaySDK: async () => {
                            try {
                                await g()
                            } catch (e) {}
                        },
                        initializeWithMerchant: e => {
                            S(e ? t => {
                                const a = { ...t,
                                    merchantIdentifier: e
                                };
                                return "idle" === t.sdkLoadingState ? setTimeout((() => {
                                    g().catch((e => {}))
                                }), 0) : t.sdkLoadingState !== i.a1.resolved || t.credentialStatusChecked || setTimeout((() => {
                                    try {
                                        r.kP.isApplePaySupported() ? (C().catch((e => {})), (0, c.log)({
                                            name: h.XB.APPLE_PAY_SUPPORTED
                                        })) : ((0, c.log)({
                                            name: h.XB.CAN_MAKE_PAYMENT_FALSE
                                        }), (0, y.logEnabledApplePayExperiments)({
                                            eligibility: !1,
                                            ineligibility_reasons: h.XB.CAN_MAKE_PAYMENT_FALSE,
                                            result: !1
                                        }), S((e => ({ ...e,
                                            isCardAvailable: !1,
                                            showApplePayEvenWhenNoCard: !1,
                                            credentialStatusChecked: !0
                                        }))))
                                    } catch (e) {
                                        S((e => ({ ...e,
                                            isCardAvailable: !1,
                                            showApplePayEvenWhenNoCard: !1,
                                            credentialStatusChecked: !0
                                        })))
                                    }
                                }), 0), a
                            } : t => ({ ...t,
                                merchantIdentifier: e,
                                isCardAvailable: !1,
                                showApplePayEvenWhenNoCard: !1,
                                credentialStatusChecked: !0
                            }))
                        }
                    }
                })();
            a.d(t, ["applePayJsStore", 0, P])
        },
        81168(e, t, a) {
            a.r(t), a.d(t, {
                logDisabledApplePayExperiments: () => r,
                logEnabledApplePayExperiments: () => s
            });
            let n = null;
            const i = () => (n || (n = a.e(6736).then(a.bind(a, 57114))), n);

            function s(e) {
                i().then((t => t.logEnabledApplePayExperiments(e))).catch((() => {}))
            }

            function r() {
                i().then((e => e.logDisabledApplePayExperiments())).catch((() => {}))
            }
        }
    }
]);