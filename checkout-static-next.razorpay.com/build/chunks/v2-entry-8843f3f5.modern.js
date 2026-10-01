(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [44286, 50005], {
        18780(t, e, r) {
            const o = {
                "./ben.ts": [12645, [58094]],
                "./en.ts": [13173, [44286]],
                "./guj.ts": [87306, [84017]],
                "./hi.ts": [48089, [91794]],
                "./kan.ts": [88854, [37645]],
                "./mar.ts": [15376, [58659]],
                "./tam.ts": [44074, [76465]],
                "./tel.ts": [1685, [23166]]
            };

            function a(t) {
                try {
                    if (!r.o(o, t)) return Promise.resolve().then((() => {
                        const e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }))
                } catch (t) {
                    return Promise.reject(t)
                }
                const e = o[t],
                    a = e[0];
                return r.e(e[1][0]).then((() => r(a)))
            }
            a.keys = () => Object.keys(o), a.id = 18780, t.exports = a
        },
        50005(t, e, r) {
            "use strict";
            r.d(e, {
                A: () => K
            });
            var o = r(88603),
                a = (r(66891), r(73283), r(75533), r(99120)),
                n = r(54341),
                s = r(4503),
                i = r(50952),
                c = r(5455),
                u = r(47541),
                p = r(21629),
                d = r(81352),
                l = r(19352),
                m = r(79869),
                y = r(76765),
                v = r(54195),
                _ = r(14494),
                f = r(81345),
                h = r(32555),
                g = r(45496),
                b = r(33192),
                x = a.vUu('<div class="my-3"><span class="text-sm font-normal"> <a class="text-primary"> </a></span></div>');

            function C(t, e) {
                if (new.target) return (0, o.YU)({
                    component: C,
                    ...t
                });
                a.VCO(e, !1);
                const [r, n] = a.DZI();
                var s = {
                    $set: a.hpB,
                    $on: (t, r) => a.oeX(e, t, r)
                };
                a.TsN();
                var i = x(),
                    c = a.jfp(i),
                    u = a.jfp(c),
                    p = a.hg4(u),
                    d = a.IuP(p, !0);
                a.cLc(c), a.cLc(i), a.vNg((t => {
                    a.jax(u, `${t??""} `), a.aIK(p, "href", `mailto:${b.IQ}`), a.jax(d, b.IQ)
                }), [() => a.Hzn(v.t, "$t", r)("your_purchase_is_protected")]), a.BCw(t, i);
                var l = a.uYY(s);
                return n(), l
            }
            var w = r(11213),
                z = a.vUu("<h2> </h2>"),
                P = a.vUu("<span> </span>"),
                T = a.vUu('<span class="flex items-center"><span class="ml-2 font-medium"> </span> <button><!></button></span>'),
                Y = a.vUu("<div><!> <!></div>"),
                j = a.vUu('<div class="flex items-center divide-x divide-on-surface-50/60 text-sm text-on-surface-50"><span class="mr-2 font-normal opacity-60"> </span> <span class="flex items-center"><span class="ml-2 font-medium"> </span> <button><!></button></span></div>'),
                I = a.vUu('<div class="mt-3 flex flex-col gap-2"></div>'),
                U = a.vUu('<div><!> <p class="ml-1"><span class="opacity-60"> </span> <a target="_blank" rel="noopener"> </a> <span class="opacity-60"> </span></p></div>'),
                V = a.vUu('<div><div class="flex items-start justify-between"><h3> </h3> <!></div> <p> </p> <!> <!> <!> <!></div> <!>', 1);

            function K(t, e) {
                if (new.target) return (0, o.YU)({
                    component: K,
                    ...t
                });
                a.VCO(e, !1);
                const r = () => a.Hzn(h.re, "$selectedDCCCurrency$", J),
                    x = () => a.Hzn(y.t, "$t", J),
                    $ = () => a.Hzn(v.t, "$clubTranslate", J),
                    [J, k] = a.DZI(),
                    S = a.zgK(),
                    B = a.zgK();
                let L = a._w2(e, "state", 12),
                    N = a._w2(e, "method", 12),
                    M = a._w2(e, "amount", 12),
                    X = a._w2(e, "secondaryPaymentMethods", 28, (() => [])),
                    A = a._w2(e, "paymentId", 12),
                    E = a._w2(e, "paymentPayload", 28, (() => ({}))),
                    D = a._w2(e, "overrideColors", 28, (() => ({})));
                const O = (0, u.cV)({
                    method: N(),
                    paymentPayload: E()
                });

                function R() {
                    return (new Date).toLocaleString("en-US", {
                        hourCycle: "h12",
                        dateStyle: "medium",
                        timeStyle: "short"
                    })
                }
                const q = (0, u.RP)((0, _.Rb)()),
                    G = !(0, _.DY)() && (0, _.tq)();
                a.M3l((() => (a.iTV(E()), f.k, r())), (() => {
                    a.hZp(S, (null === E() || void 0 === E() ? void 0 : E().method) === f.k ? r() : null)
                })), a.M3l((() => (a.JtY(S), m.ej, m.HN, a.iTV(M()))), (() => {
                    a.hZp(B, (null === a.JtY(S) || void 0 === a.JtY(S) ? void 0 : a.JtY(S).currency) && (null === a.JtY(S) || void 0 === a.JtY(S) ? void 0 : a.JtY(S).amount) ? (0, m.ej)(a.JtY(S).amount, a.JtY(S).currency) : (0, m.HN)(M()))
                })), a.iqF();
                var H = {
                    get state() {
                        return L()
                    },
                    set state(t) {
                        L(t), a.bX()
                    },
                    get method() {
                        return N()
                    },
                    set method(t) {
                        N(t), a.bX()
                    },
                    get amount() {
                        return M()
                    },
                    set amount(t) {
                        M(t), a.bX()
                    },
                    get secondaryPaymentMethods() {
                        return X()
                    },
                    set secondaryPaymentMethods(t) {
                        X(t), a.bX()
                    },
                    get paymentId() {
                        return A()
                    },
                    set paymentId(t) {
                        A(t), a.bX()
                    },
                    get paymentPayload() {
                        return E()
                    },
                    set paymentPayload(t) {
                        E(t), a.bX()
                    },
                    get overrideColors() {
                        return D()
                    },
                    set overrideColors(t) {
                        D(t), a.bX()
                    },
                    $set: a.hpB,
                    $on: (t, r) => a.oeX(e, t, r)
                };
                a.TsN();
                var F = a.Imx(),
                    Q = a.esp(F),
                    Z = t => {
                        var e = V(),
                            r = a.esp(e),
                            o = a.jfp(r),
                            c = a.jfp(o),
                            m = a.IuP(c, !0),
                            y = a.hg4(c, 2),
                            v = t => {
                                var e = z(),
                                    r = a.IuP(e, !0);
                                a.vNg((() => {
                                    a.ysU(e, 1, (a.iTV(D()), a.vzK((() => `font-heading text-3xl font-semibold ${D().textClass}`)))), a.jax(r, a.JtY(B))
                                })), a.BCw(t, e)
                            },
                            _ = a.unG((() => (a.iTV(i.Et), a.iTV(M()), a.iTV(N()), a.iTV(f.N7), a.vzK((() => (0, i.Et)(M()) && N().toLowerCase() !== f.N7)))));
                        a.if(y, (t => {
                            a.JtY(_) && t(v)
                        })), a.cLc(o);
                        var h = a.hg4(o, 2),
                            K = a.IuP(h, !0),
                            J = a.hg4(h, 2),
                            k = t => {
                                var e = Y(),
                                    r = a.jfp(e),
                                    o = t => {
                                        var e = P(),
                                            r = a.IuP(e, !0);
                                        a.vNg((() => {
                                            a.ysU(e, 1, (a.iTV(D()), a.vzK((() => `mr-2 font-normal opacity-60 ${D().opacityClass}`)))), a.jax(r, N())
                                        })), a.BCw(t, e)
                                    };
                                a.if(r, (t => {
                                    N() && t(o)
                                }));
                                var s = a.hg4(r, 2),
                                    i = t => {
                                        var e = T(),
                                            r = a.jfp(e),
                                            o = a.IuP(r, !0),
                                            s = a.hg4(r, 2),
                                            i = a.jfp(s); {
                                            let t = a.Xdt((() => (a.iTV(p.ME), a.vzK((() => (0, p.ME)("copy")))))),
                                                e = a.Xdt((() => (a.iTV(D()), a.vzK((() => `ml-1 h-4 w-4 {${D().textSecondaryClass||"text-[#2950DA]"}`)))));
                                            (0, n.A)(i, {
                                                get src() {
                                                    return a.JtY(t)
                                                },
                                                get class() {
                                                    return a.JtY(e)
                                                }
                                            })
                                        }
                                        a.cLc(s), a.cLc(e), a.vNg((() => a.jax(o, A()))), a.kgv("click", s, (() => {
                                            (0, l.l)(A())
                                        })), a.BCw(t, e)
                                    };
                                a.if(s, (t => {
                                    A() && t(i)
                                })), a.cLc(e), a.vNg((() => a.ysU(e, 1, (a.iTV(D()), a.vzK((() => `mt-2 flex items-center divide-x divide-on-surface-50/60  ${D().borderColorClass||"border-on-surface border-opacity-10"} border-b border-dashed pb-4 text-sm ${D().textSecondaryClass||"text-on-surface-50"}`)))))), a.BCw(t, e)
                            },
                            S = t => {
                                var e = I();
                                a.__1(e, 5, X, a.Pe0, ((t, e, r, o) => {
                                    var s = j(),
                                        i = a.jfp(s),
                                        c = a.IuP(i, !0),
                                        d = a.hg4(i, 2),
                                        m = a.jfp(d),
                                        y = a.IuP(m, !0),
                                        v = a.hg4(m, 2),
                                        _ = a.jfp(v); {
                                        let t = a.Xdt((() => (a.iTV(p.ME), a.vzK((() => (0, p.ME)("copy"))))));
                                        (0, n.A)(_, {
                                            get src() {
                                                return a.JtY(t)
                                            },
                                            class: "ml-1 h-4 w-4 text-[#2950DA]"
                                        })
                                    }
                                    a.cLc(v), a.cLc(d), a.cLc(s), a.vNg((t => {
                                        a.jax(c, t), a.jax(y, (a.JtY(e), a.vzK((() => a.JtY(e).payment_id))))
                                    }), [() => (a.iTV(u._M), a.JtY(e), a.vzK((() => (0, u._M)(a.JtY(e).method))))]), a.kgv("click", v, (() => {
                                        (0, l.l)(a.JtY(e).payment_id)
                                    })), a.BCw(t, s)
                                })), a.cLc(e), a.BCw(t, e)
                            };
                        a.if(J, (t => {
                            a.iTV(X()), a.vzK((() => 0 === X().length)) ? t(k) : t(S, -1)
                        }));
                        var L = a.hg4(J, 2),
                            E = t => {
                                C(t, {})
                            };
                        a.if(L, (t => {
                            O && t(E)
                        }));
                        var H = a.hg4(L, 2); {
                            let t = a.Xdt((() => (a.iTV(g.ex), a.vzK(g.ex))));
                            (0, s.A)(H, {
                                get promise() {
                                    return a.JtY(t)
                                },
                                children: a.y8B,
                                $$slots: {
                                    default: (t, e) => {
                                        const r = a.Xdt((() => e.Component));
                                        a.JtY(r)(t, {
                                            type: "payment-info",
                                            page: "payment-info"
                                        })
                                    }
                                }
                            })
                        }
                        var F = a.hg4(H, 2),
                            Q = t => {
                                var e = U(),
                                    r = a.jfp(e); {
                                    let t = a.Xdt((() => (a.iTV(p.XO), a.vzK((() => (0, p.XO)("info"))))));
                                    (0, n.A)(r, {
                                        get src() {
                                            return a.JtY(t)
                                        },
                                        class: "shrink-0 opacity-60"
                                    })
                                }
                                var o = a.hg4(r, 2),
                                    s = a.jfp(o),
                                    i = a.IuP(s, !0),
                                    c = a.hg4(s, 2),
                                    u = a.IuP(c, !0),
                                    d = a.hg4(c, 2),
                                    l = a.IuP(d, !0);
                                a.cLc(o), a.cLc(e), a.vNg(((t, r) => {
                                    a.ysU(e, 1, (a.iTV(D()), a.vzK((() => `mt-3 flex items-center justify-center text-sm ${D().textSecondaryClass||"text-on-surface-50"}`)))), a.jax(i, t), a.aIK(c, "href", (a.iTV(b.SL), a.vzK((() => O ? b.SL.url : q.url)))), a.ysU(c, 1, a.$z$((a.iTV(D()), a.vzK((() => D().linkClass))))), a.jax(u, (a.iTV(b.SL), a.vzK((() => O ? b.SL.text : q.text)))), a.jax(l, r)
                                }), [() => (x(), a.vzK((() => x()("visit")))), () => ($(), x(), a.vzK((() => O ? $()("for_club_queries") : x()("for_queries"))))]), a.BCw(t, e)
                            };
                        a.if(F, (t => {
                            G || O || t(Q)
                        })), a.cLc(r);
                        var Z = a.hg4(r, 2),
                            W = t => {
                                {
                                    let e = a.Xdt((() => (a.iTV(w._N), a.vzK(w._N))));
                                    (0, s.A)(t, {
                                        get promise() {
                                            return a.JtY(e)
                                        },
                                        children: a.y8B,
                                        $$slots: {
                                            default: (t, e) => {
                                                const r = a.Xdt((() => e.Component));
                                                a.JtY(r)(t, {})
                                            }
                                        }
                                    })
                                }
                            };
                        a.if(Z, (t => {
                            O && t(W)
                        })), a.vNg(((t, e) => {
                            a.ysU(r, 1, (a.iTV(D()), a.vzK((() => `rounded-xl p-6 ${D().bgClass||"bg-surface-50"} ${D().borderClass}`)))), a.ysU(c, 1, (a.iTV(D()), a.vzK((() => `truncate font-heading text-xl font-semibold ${D().textClass||"text-on-surface-50"}`)))), a.jax(m, t), a.ysU(h, 1, (a.iTV(D()), a.vzK((() => `mt-3 text-sm font-normal ${D().textSecondaryClass||"text-on-surface-50 opacity-60"}`)))), a.jax(K, e)
                        }), [() => (a.iTV(d.MJ), a.vzK(d.MJ)), () => a.vzK(R)]), a.BCw(t, e)
                    };
                a.if(Q, (t => {
                    a.iTV(L()), a.iTV(c.m), a.vzK((() => L() !== c.m.pending)) && t(Z)
                })), a.BCw(t, F);
                var W = a.uYY(H);
                return k(), W
            }
            a.MmH(["click"])
        },
        19352(t, e, r) {
            "use strict";

            function o(t) {
                const e = document.createElement("textarea");
                e.textContent = t, e.style.position = "fixed", document.body.appendChild(e), e.select();
                try {
                    document.execCommand("copy")
                } catch (t) {}
                document.body.removeChild(e)
            }

            function a(t) {
                try {
                    var e;
                    null !== (e = navigator.clipboard) && void 0 !== e && e.writeText && window.isSecureContext ? navigator.clipboard.writeText(t).catch((e => {
                        e && o(t)
                    })) : o(t)
                } catch {
                    o(t)
                }
            }
            r.d(e, {
                l: () => a
            })
        },
        5455(t, e, r) {
            "use strict";
            r.d(e, ["m", 0, {
                pending: "pending",
                confirming: "confirming",
                success: "success",
                failure: "failure"
            }, "w", 0, {
                background: "#009E5C",
                foreground: "#ffffff"
            }])
        },
        47541(t, e, r) {
            "use strict";
            r.d(e, {
                cV: () => _,
                _M: () => f,
                RP: () => v
            });
            var o = r(11213),
                a = r(94299),
                n = r(81345),
                s = r(30192),
                i = r(31992),
                c = r(8281),
                u = r(76765),
                p = r(30206);
            const d = new Set(["coupon", "offer", "automatic", "shopify_pre_discount"]),
                l = [{
                    key: "coins",
                    match: t => "loyalty_points" === t
                }, {
                    key: "gift_card",
                    match: t => "gift_card" === t
                }, {
                    key: "store_credit",
                    match: t => t === p.ng
                }, {
                    key: "coupon",
                    match: t => d.has(t)
                }];
            var m = r(57655),
                y = r(63478);
            const v = function() {
                    switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "IN") {
                        case "MY":
                            return {
                                url: "https://curlec.com/support/",
                                text: "curlec.com/support/"
                            };
                        case "SG":
                            return {
                                url: "https://razorpay.com/sg/support/",
                                text: "razorpay.com/sg/support"
                            };
                        default:
                            return {
                                url: "https://razorpay.com/support/",
                                text: "razorpay.com/support"
                            }
                    }
                },
                _ = t => {
                    let {
                        method: e,
                        paymentPayload: r = {}
                    } = t;
                    const {
                        receiver_type: s
                    } = r;
                    return (0, o.r)() && (0, a.E)() && e.toLowerCase() === n.nU && !(s && "qr_code" === s)
                };

            function f(t, e) {
                if ((0, m.nn)()) return function() {
                    const {
                        deductions: t
                    } = (0, i.Jt)(c.PM), e = t.deductionsApplied, r = (0, i.Jt)(u.t), o = l.filter((t => {
                        let {
                            match: r
                        } = t;
                        return e.some((t => r(t.type)))
                    })).map((t => {
                        let {
                            key: e
                        } = t;
                        return e
                    }));
                    if (0 === o.length) return "";
                    const a = o.map((t => r(`zero_payment_order.method_${t}`))),
                        n = (0, s.yv)(a, "and");
                    return r("zero_payment_order.paid_via_label", {
                        methods: n
                    })
                }();
                if ("upi" === t) return "UPI";
                if ("gift_cards" === t) return "Gift Card";
                if (t === n.W2 && e) {
                    if (((0, y.BG)() ? ? []).includes(e)) return "Alipay+"
                }
                return (0, s.Zr)(t)
            }
        },
        33192(t, e, r) {
            "use strict";
            r.d(e, ["IQ", 0, "support@razorpay.com", "NC", 0, 2e6, "SL", 0, {
                text: "razorpay.com/club",
                url: "https://razorpay.com/club"
            }, "iG", 0, "https://razorpay.com/terms/club-buyer-protection/"])
        },
        11213(t, e, r) {
            "use strict";
            r.d(e, {
                _N: () => c,
                r: () => i
            });
            var o = r(14494),
                a = r(10884),
                n = r(43356),
                s = r(96155);

            function i(t) {
                const e = (0, a.Sn)(t),
                    r = (0, a.qS)(t) || [],
                    i = e && r.some((t => t !== s.t.QR));
                return ((0, o._w)() || (0, o.j)()) && i && !(0, n.kX)()
            }
            async function c() {
                return r.e(21942).then(r.bind(r, 43311))
            }
        },
        54195(t, e, r) {
            "use strict";
            var o = r(59016),
                a = r(56141),
                n = r(13173);
            const s = (0, a.uU)((t => r(18780)(`./${t}.ts`).catch((t => {
                (0, o.A)(t, "i18n")
            }))), n.default);
            r.d(e, ["t", 0, s])
        },
        13173(t, e, r) {
            "use strict";
            r.r(e);
            r.d(e, ["default", 0, {
                pay_via_upi_and_get_free: "Pay via UPI and get free",
                purchase_protection: "Purchase Protection",
                by_razorpay_club: "by Razorpay Club",
                refund_up_description_sm: "upto {amount} by Razorpay Club.",
                refund_up_description_lg: "Refunds upto {amount} against undelivered, wrong or damaged products.",
                use_any_upi_on_phone: "Use any UPI app on your phone",
                free_purchase_protection: "Free Buyer Protection",
                your_purchase_is_protected: "You’ll receive a confirmation SMS in 24hrs. If not, reach out to our support at",
                razorpay_club_purchase_protection: "Razorpay Club Purchase Protection.",
                you_will_receive_sms: "You’ll receive a confirmation SMS in 24hrs. If not, reach out to our support at",
                for_club_queries: "to avail Purchase Protection",
                purchase_protection_not_available: "Free Buyer Protection is not yet applicable on UPI QR",
                terms_and_conditions: "Terms & Conditions apply.",
                tnc: "T&Cs apply.",
                get_refund_for_products: "Get 100% refunds for undelivered, damaged or wrong products.",
                get_refund_upto_amount: "Get refunds upto {amount} for undelivered, damaged or wrong products.",
                secure_this_order_with: "Secure this order with free",
                your_order_is: "Your order is",
                secure: "secure",
                with: "with",
                buyer_protection: "Buyer Protection",
                free: "free",
                order_is_secure_pay_via_upi_to_avail: "Order secured! 🎉  Now pay via UPI to avail",
                pay_via_upi_and_secure_order_for_free: "Pay via UPI & secure this order for free",
                buyer_protection_not_applicable: "Buyer Protection is not applicable",
                on_this_payment_method: "on this payment method",
                sit_back_and_relax: "Sit back & relax! This order is",
                visit: "visit",
                razorpay_club_url: "razorpay.com/club",
                to_avail_buyer_protection: "to avail Buyer Protection",
                with_free: "with free",
                pay_via_upi_avail_buyer_protection: "Pay via UPI & avail free Buyer Protection",
                continue_without_buyer_protection: "Continue without buyer protection",
                free_buyer_protection_is_not_applicable: "Free Buyer Protection is not applicable on this payment method"
            }])
        }
    }
]);