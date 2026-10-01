"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [39562, 62953], {
        56854(t, n, e) {
            e.d(n, {
                A: () => u
            });
            var r = e(88603),
                o = (e(66891), e(73283), e(75533), e(99120)),
                i = e(91645),
                a = e(28766),
                s = e(81345),
                l = e(75008),
                c = o.vUu("<div><!></div>");

            function u(t, n) {
                if (new.target) return (0, r.YU)({
                    component: u,
                    ...t
                });
                const e = o.gjz(n, ["children", "$$slots", "$$events", "$$legacy"]),
                    p = o.gjz(e, ["option", "onSubmit"]);
                o.VCO(n, !1);
                let d = o._w2(n, "option", 12),
                    f = o._w2(n, "onSubmit", 12, (() => {})),
                    h = o.zgK(d());
                o.M3l((() => o.iTV(d())), (() => {
                    d(), (0, i.DM)(s.nU) && (0, l.US)().then((t => {
                        const n = t.appHasCriticalDowntime(d().shortcode);
                        o.hZp(h, { ...d(),
                            critical: n,
                            disabled: n
                        })
                    })).catch((() => {}))
                })), o.iqF();
                var y = {
                    get option() {
                        return d()
                    },
                    set option(t) {
                        d(t), o.bX()
                    },
                    get onSubmit() {
                        return f()
                    },
                    set onSubmit(t) {
                        f(t), o.bX()
                    },
                    $set: o.hpB,
                    $on: (t, e) => o.oeX(n, t, e)
                };
                o.TsN();
                var g = c(),
                    _ = t => {
                        t.preventDefault(), async function() {
                            if (o.JtY(h).critical) try {
                                (0, a.BH)({
                                    component: (await (0, i.JT)()).default,
                                    props: {
                                        instrument: d().app_name,
                                        method: s.nU
                                    }
                                })
                            } catch (t) {} else f()()
                        }().catch((() => {}))
                    },
                    v = () => {};
                o.p_Y(g, (() => ({
                    role: "button",
                    tabindex: "-1",
                    onclick: _,
                    onkeydown: v,
                    ...p,
                    [o.tpM]: {
                        grayscale: o.JtY(h).critical,
                        "opacity-60": o.JtY(h).critical
                    }
                })));
                var m = o.jfp(g);
                return o.NIy(m, n, "default", {
                    get optionWithDowntime() {
                        return o.JtY(h)
                    }
                }, null), o.cLc(g), o.BCw(t, g), o.uYY(y)
            }
        },
        65628(t, n, e) {
            e.d(n, ["CB", 0, "STAGE_REDEMPTION", "HO", 0, {
                SINGLE_AD_VARIANT: "variant_1",
                MULTIPLE_AD_VARIANT: "variant_2"
            }, "MQ", 0, {
                PAYMENT_STATUS_PAGE: "payment_status",
                REWARD_DETAILS_PAGE: "reward_details"
            }, "XP", 0, "SURFACE_RZP_CHECKOUT", "z1", 0, {
                SINGLE: "single",
                MULTIPLE: "multiple"
            }])
        },
        92(t, n, e) {
            e.d(n, {
                BC: () => p,
                DB: () => d,
                dM: () => s
            });
            var r = e(82435),
                o = e(65628),
                i = e(43356),
                a = e(61114);

            function s() {
                return !(0, i.AD)() && (0, r.Br)("whatsapp_tpap_ranking")
            }
            let l = function(t) {
                return t.CONTROL = "control", t.VARIANT_1 = "variant_1", t.VARIANT_2 = "variant_2", t
            }({});
            const c = [l.CONTROL, l.VARIANT_1, l.VARIANT_2],
                u = () => {
                    const t = (0, r._m)("gpay_ad_slot") || l.CONTROL;
                    return c.includes(t) ? t : l.CONTROL
                };

            function p(t) {
                return !(t === a.IQ.shortcode && u() === l.CONTROL)
            }

            function d(t) {
                return !(t === a.NZ.shortcode && !(0, r.Br)("whatsapp_intent_upi")) && (!(t === a.$h.shortcode && !(0, r.Br)("amazon_intent_upi")) && p(t))
            }
            e.d(n, ["Mf", 0, () => u() === l.VARIANT_2, "Q9", 0, () => (0, r._m)("post_transaction_ads") === o.HO.MULTIPLE_AD_VARIANT, "s2", 0, () => {
                const t = (0, r._m)("post_transaction_ads");
                return Boolean(t && "control" !== t)
            }])
        },
        69944(t, n, e) {
            e.d(n, {
                D6: () => l,
                bL: () => s,
                qJ: () => c
            });
            var r = e(73123),
                o = e(61114),
                i = e(74988),
                a = e(92);

            function s(t) {
                return !(!t || !Array.isArray(t.psp_apps)) && t.psp_apps.some((t => (i.yM[t] ? ? t) === o.IQ.shortcode))
            }

            function l(t) {
                return t.filter((t => {
                    const n = (null == t ? void 0 : t.config) ? ? t;
                    return !(0, r.isGpayInstrument)({
                        module: null == t ? void 0 : t.module,
                        config: n
                    })
                }))
            }

            function c(t) {
                return (0, a.Mf)() ? t.filter((t => t.shortcode !== o.IQ.shortcode)) : t
            }
        },
        38394(t, n, e) {
            e.d(n, {
                hv: () => i,
                yi: () => r.yi
            });
            var r = e(14494),
                o = e(61114);

            function i() {
                const t = (0, r.Gl)("ads_slot_configs"),
                    {
                        ad_slots: n,
                        name: e
                    } = (null == t ? void 0 : t.l1) ? ? o.FM;
                return {
                    variant: e,
                    adsSlots: n
                }
            }
        },
        69551(t, n, e) {
            e.d(n, {
                R: () => o
            });
            var r = e(56337);

            function o() {
                return (0, r.QQ)() && (0, r.uv)()
            }
            const i = (0, e(65047).derived)(r.Sz, (t => (0, r.QQ)() && !0 === t));
            e.d(n, ["s", 0, i])
        },
        84727(t, n, e) {
            e.d(n, {
                D8: () => J,
                Qu: () => U,
                rg: () => C,
                ue: () => R
            });
            var r = e(37154),
                o = e(45325),
                i = e(56337),
                a = e(49329),
                s = e(46994),
                l = e(90924),
                c = e(40255),
                u = e(74988),
                p = e(61114),
                d = e(26866),
                f = e(59812),
                h = e(31992),
                y = e(65047),
                g = e(68211),
                _ = e(47608),
                v = e(37965),
                m = e(38394),
                A = e(92),
                b = e(69944),
                E = e(52130),
                I = e(98892),
                T = e(59016),
                L = e(65587),
                w = e(93153),
                k = e(49822);
            const B = { ...(0, c.getTpapPRAConfigs)()
                },
                N = [p.Tl, p.$h, p.Gp, p.Zc, p.c2, p.Jw, { ...p.lv,
                    shortcode: p.iV
                }, p.Hb, p.lt, p.b3, p.Ey, p.lM, p.xo, p.S4, p.G0, p.NZ, p.IQ, p.wW, p.oO, p.JB];
            async function S(t, n) {
                const e = (0, c.getFilteredPriorityOffers)(t);
                if (e.some((t => t.is_validated))) return u.yJ.ELIGIBILE;
                if ((0, r.A)(e) && e.length > 0) {
                    if (t.validationCallNotReqEnv === n) return u.yJ.ELIGIBILE;
                    try {
                        const {
                            offers: t
                        } = await (0, s.be)({
                            offers: e
                        });
                        if ((0, r.A)(t) && t.length > 0) {
                            if (e.some((n => t.includes(n.id)))) return u.yJ.ELIGIBILE
                        }
                    } catch (t) {
                        (0, o.vV)("validation Error", t)
                    }
                }
                return u.yJ.INELIGIBLE
            }
            const O = async (t, n) => {
                try {
                    if ("isEnvSDK" === n && t.sdkFn) return await t.sdkFn();
                    if ("isEnvMWeb" === n && t.mwebFn) return await t.mwebFn();
                    if (t[n]) {
                        return (0, g.TT)(t, n) ? (0, g.f7)(t) || (0, v.getIntentAppHasLinkAndPayOffer)(t.appConfig.shortcode) ? await S(t, n) : u.yJ.INELIGIBLE : await S(t, n)
                    }
                    return u.yJ.INELIGIBLE
                } catch (n) {
                    return (0, o.vV)("Validation error", {
                        shortcode: t.appConfig.shortcode,
                        error: n
                    }), u.yJ.INELIGIBLE
                }
            };

            function R() {
                const t = (0, d.L8)(),
                    n = new Map;
                return t.length ? (t.forEach((t => {
                    var e;
                    const r = null === (e = t.psp_apps) || void 0 === e ? void 0 : e[0],
                        o = u.yM[r] || r;
                    if (!o || t.ad_rank <= 0 || !t.should_display_psp_app) return;
                    if (!n.has(o)) return void n.set(o, t);
                    const i = n.get(o);
                    t.ad_rank < i.ad_rank && n.set(o, t)
                })), n) : n
            }

            function C() {
                const t = (0, m.yi)().adsSlots.map((t => Number(t) - 1)) || [],
                    n = (0, m.yi)().totalSlots;
                return t.filter((t => t < n))
            }

            function M(t) {
                let n, {
                    apps: e,
                    tpapOfferDisplayList: r
                } = t;
                if (r.length) {
                    let t = r.sort(((t, n) => t.offer.ad_rank - n.offer.ad_rank)).map((t => t.app));
                    (0, E.k)() && (t = (0, a.J1)(t)), (0, f.QM)(t), n = function(t, n) {
                        const e = C(),
                            r = (0, m.yi)().totalSlots,
                            o = new Array(r).fill(null);
                        let i = 0;
                        e.forEach((n => {
                            i < t.length && (o[n] = t[i], i++)
                        }));
                        let a = 0;
                        return o.reduce(((t, e, r) => (!e && a < n.length && (t[r] = n[a], a++), t)), [...o]).filter((t => null !== t))
                    }(t, e)
                } else if ((0, i.yt)()) {
                    const t = (0, m.yi)().totalSlots;
                    n = e.slice(0, t)
                } else n = e;
                return function(t) {
                    if (!(0, A.dM)()) return t;
                    if (t.some((t => t.shortcode === p.NZ.shortcode))) return t;
                    if ((0, i.yt)() && w.Oh) {
                        const n = (0, L.D9)();
                        if (n && !n.includes(p.NZ.shortcode)) return t
                    }
                    const n = (0, m.yi)().totalSlots || 5,
                        e = t.length;
                    if (n > e) return [...t, p.NZ];
                    if (e >= n) return [...t.slice(0, -1), p.NZ];
                    return t
                }(n)
            }
            async function D(t) {
                try {
                    const [n, e] = (await Promise.all([O(t, "isEnvSDK"), O(t, "isEnvMWeb")])).map((t => t === u.yJ.ELIGIBILE));
                    return {
                        sdkL0Enabled: n,
                        mWebL0Enabled: e
                    }
                } catch (n) {
                    return (0, o.vV)("Error checking app environment:", {
                        shortcode: t.appConfig.shortcode,
                        error: n
                    }), {
                        sdkL0Enabled: !1,
                        mWebL0Enabled: !1
                    }
                }
            }

            function G(t) {
                let {
                    allAppList: n,
                    appConfig: e,
                    sdkL0Enabled: r,
                    mWebL0Enabled: o
                } = t;
                return (0, a.oP)(n, e, !1) && (r || o) && (n = n.filter((t => t.shortcode !== e.shortcode))), n
            }

            function P(t, n, e, r) {
                try {
                    if (!(0, a.oP)(t, n) && (e || r)) return {
                        offer: R().get(n.shortcode),
                        app: n
                    }
                } catch (t) {
                    (0, o.vV)("Error getting tpap with rank", t)
                }
            }
            async function U(t, n) {
                if ((0, k.sI)()) return [...t];
                if ((0, I.mH)()) try {
                    const {
                        getRankedTpapsFromAds: r
                    } = await Promise.all([e.e(8088), e.e(62167)]).then(e.bind(e, 14658));
                    return r(t, n)
                } catch (e) {
                    return (0, T.A)(e, "getRankedTpaps"), [...t, n]
                }
                const r = [],
                    s = R(),
                    l = (t => {
                        const n = (0, m.yi)().organicList;
                        return n && n.length ? n.reduce(((t, n) => {
                            const e = (0, p.MB)(n);
                            return e && t.push(e), t
                        }), []) : t
                    })(t),
                    c = (u = N, (0, a.$O)() || (0, i.yt)() ? u.map((t => B[t.shortcode] ? B[t.shortcode] : {
                        isEnvSDK: (0, a._1)(t),
                        isEnvMWeb: (0, a.Zo)(),
                        appConfig: t
                    })) : []);
                var u;
                let d = [...l];
                try {
                    await (0, _.checkAllWebPaymentsApp)()
                } catch (t) {}
                if (!l.length) return [...t, n];
                for (const t of c) {
                    const {
                        appConfig: n
                    } = t;
                    if (s.has(n.shortcode) && (0, A.BC)(n.shortcode)) try {
                        const {
                            sdkL0Enabled: e,
                            mWebL0Enabled: o
                        } = await D(t);
                        d = G({
                            allAppList: d,
                            appConfig: n,
                            sdkL0Enabled: e,
                            mWebL0Enabled: o
                        });
                        const i = P(d, n, e, o);
                        null != i && i.offer && r.push(i)
                    } catch (t) {
                        (0, o.vV)("trackingError", t)
                    }
                }
                return d = M({
                    apps: d,
                    tpapOfferDisplayList: r
                }), [...d, n]
            }
            async function J(t, n) {
                if ((0, k.sI)()) return [...t];
                if ((0, I.mH)()) try {
                    const {
                        applyTpapRankingL1FromAds: r
                    } = await Promise.all([e.e(8088), e.e(62167)]).then(e.bind(e, 22891)), o = r(t);
                    return (0, l.filterAppsByConfigWhitelist)(o, null == n ? void 0 : n.apps)
                } catch (n) {
                    return (0, T.A)(n, "applyTpapRankingL1FromAds"), t
                }
                const r = (0, m.hv)();
                if (!r.adsSlots.length) return t;
                const o = function() {
                    const t = R();
                    if (!t.size) return [];
                    const n = [...t.entries()].filter((t => {
                        let [n] = t;
                        return (0, A.DB)(n)
                    })).sort(((t, n) => {
                        let [, e] = t, [, r] = n;
                        return (e.ad_rank ? ? 1 / 0) - (r.ad_rank ? ? 1 / 0)
                    })).map((t => {
                        let [n] = t;
                        const e = (0, p.MB)(n);
                        return e ? e.shortcode === n ? e : { ...e,
                            shortcode: n
                        } : null
                    })).filter((t => Boolean(t)));
                    return (0, b.qJ)(n)
                }();
                if (!o.length) return t;
                const {
                    appsWithoutOthers: i,
                    othersApp: a
                } = function(t) {
                    const n = p.O_.shortcode;
                    return {
                        othersApp: t.find((t => t.shortcode === n)),
                        appsWithoutOthers: t.filter((t => t.shortcode !== n))
                    }
                }(t), s = r.adsSlots.map((t => Number(t) - 1)).filter((t => t < i.length)), c = function(t, n, e) {
                    const r = new Map;
                    n.forEach(((t, n) => {
                        r.set(t.shortcode, n)
                    }));
                    const o = e.length ? e[0] : 1 / 0,
                        i = [];
                    return t.forEach((t => {
                        const n = r.get(t.shortcode);
                        void 0 !== n && n >= o && i.push(t)
                    })), i
                }(o, i, s), u = function(t, n, e) {
                    const r = t.length,
                        o = new Array(r).fill(null);
                    let i = 0;
                    e.forEach((t => {
                        i < n.length && (o[t] = n[i], i++)
                    }));
                    const a = new Set(o.filter((t => null !== t)).map((t => t.shortcode))),
                        s = t.filter((t => !a.has(t.shortcode)));
                    let l = 0;
                    for (let t = 0; t < r; t++) !o[t] && l < s.length && (o[t] = s[l], l++);
                    const c = o.filter((t => null !== t));
                    for (; l < s.length;) c.push(s[l]), l++;
                    return c
                }(i, c, s);
                return a ? [...u, a] : u
            }
            e.d(n, ["z6", 0, async t => {
                if ((0, k.sI)()) return [...t];
                if ((0, I.mH)()) return t;
                let n = (0, h.Jt)((0, f.uf)());
                const e = new Set,
                    r = t.find((t => "others" === t.shortcode)),
                    i = t.filter((t => "others" !== t.shortcode));
                if (!n) try {
                    const e = (0, y.symbol)();
                    await U(t, e), n = (0, h.Jt)((0, f.uf)())
                } catch (t) {
                    (0, o.vV)("Error to update the ranked apps on l1 screen", t)
                }
                const a = [...i, ...n || []].reduce(((t, n) => (e.has(n.shortcode) || (e.add(n.shortcode), t.push(n)), t)), []);
                return r ? [...a, r] : a
            }])
        },
        15993(t, n, e) {
            e.r(n), e.d(n, {
                getLastAutoAppliedOfferId$: () => c,
                isOfferAutoApplied: () => u,
                setLastAutoAppliedOfferId: () => l
            });
            var r = e(31992),
                o = e(65047),
                i = e(33535),
                a = e(97623);
            const s = (0, o.symbol)();

            function l(t) {
                (0, o.getStore)(s).set(t)
            }

            function c() {
                return (0, a.u)((0, o.getStore)(s))
            }

            function u() {
                const t = (0, i.t0)(),
                    n = (0, r.Jt)(c());
                return t ? (null == t ? void 0 : t.id) === n : Boolean(n)
            }(0, o.setStore)(s, (0, r.T5)(null))
        },
        68211(t, n, e) {
            var r = e(61114),
                o = e(93153),
                i = e(56337),
                a = e(47608);
            const s = t => t === r.gG ? "cred" : t;
            e.d(n, ["AA", 0, s, "TT", 0, (t, n) => "isEnvMWeb" === n && o.yA && !(null == t || !t.checkPaymentRequestApi), "f7", 0, t => {
                const n = t.appConfig.package_name,
                    e = r.qO.some((t => t.package_name === n)),
                    l = s(n),
                    c = Boolean(globalThis.PaymentRequest);
                return !(0, i.yt)() && o.yA && e && c && (0, a.isWebPaymentsApiAvailable)(l)
            }])
        },
        73813(t, n, e) {
            e.d(n, {
                Xp: () => l,
                XG: () => c,
                dA: () => p,
                Uy: () => d
            });
            var r = e(80896),
                o = e(47783),
                i = e(61114),
                a = e(69551);
            const s = e.p + "assets/images/cred_biometric.355e3ca2.png",
                l = i.Tl.shortcode;

            function c(t, n) {
                return n && t === l ? s : void 0
            }
            const u = (0, r.Oo)((() => {
                (0, o.log)({
                    name: "render:cred_biometric_nudge",
                    properties: {
                        nudge_shown: !0
                    }
                })
            }));

            function p() {
                u()
            }

            function d() {
                (0, o.log)({
                    name: "behav:cred_biometric_nudge_tap",
                    properties: {
                        nudge_shown: (0, a.R)()
                    }
                })
            }
        },
        73123(t, n, e) {
            e.r(n), e.d(n, {
                getFirstAccountDetails: () => b,
                getGpayInABoxFOPs: () => A,
                getSubTitle: () => E,
                handleGpayInABoxResponse: () => L,
                hasGpayInABoxSdk: () => f.VN,
                initGpayInABox: () => T,
                isGpayInABoxEnabled: () => g,
                isGpayInstrument: () => I,
                logGpayInABoxEligibility: () => v,
                routeGpayTap: () => m
            });
            var r = e(83082),
                o = e(79869),
                i = e(14494),
                a = e(79313),
                s = e(38787),
                l = e(81352),
                c = e(26718),
                u = e(22559),
                p = e(47783),
                d = e(82278),
                f = e(89291),
                h = e(55818),
                y = e(26481);

            function g() {
                return (0, i.Br)(a.UI) && !(0, f.vv)()
            }
            let _ = !1;

            function v() {
                if (!_) try {
                    const t = (0, f.vv)();
                    (0, p.log)({
                        name: d.V8,
                        properties: {
                            trigger: "gpay_tap",
                            eligible: !t,
                            ineligibility_reason: t ? t[0] : ""
                        }
                    }), _ = !0
                } catch (t) {}
            }

            function m(t, n) {
                const e = g();
                if (v(), (0, p.log)({
                        name: d.Iy,
                        properties: {
                            route: e ? "gpay_in_a_box" : "upi_intent"
                        }
                    }), !e) return !1;
                try {
                    n(t)
                } catch (t) {
                    (0, h.default)(t, {
                        analytics: {
                            event: "gpay_in_a_box_payment_failure",
                            data: t
                        },
                        severity: y.m.S0
                    })
                }
                return !0
            }

            function A(t) {
                if (t) return (0, s.hg)("getGPayFOPs", t)
            }

            function b(t) {
                if (t) return t.find((t => a.Pw.includes(t.instrumentType) && function(t) {
                    return !![t.instrumentToken, t.instrumentTitle, t.instrumentType, t.instrumentAccountType].every((t => t.trim())) && (t.instrumentType !== a.mv.UPI_LITE || void 0 !== (null === (n = t.liteDetails) || void 0 === n ? void 0 : n.balance));
                    var n
                }(t)))
            }

            function E(t) {
                try {
                    var n;
                    if (!t || "object" != typeof t) return "";
                    let e = t.instrumentTitle,
                        r = "";
                    return t.instrumentType === a.mv.BANK_ACCOUNT ? r = t.instrumentAccountType : t.instrumentType === a.mv.UPI_LITE && void 0 !== (null === (n = t.liteDetails) || void 0 === n ? void 0 : n.balance) && (r = `Balance: ${(0,o.HN)(100*t.liteDetails.balance)}`), r && (e = [e.trim(), r.trim()].join(" | ")), e
                } catch (t) {
                    return ""
                }
            }

            function I(t) {
                const {
                    config: n
                } = t || {};
                if (!n) return !1;
                return [n.method === a.jU.method, Array.isArray(n.flows) && n.flows.includes(a.jU.flows[0]), Array.isArray(n.apps) && n.apps.includes(a.jU.apps[0])].every((t => t))
            }

            function T() {
                try {
                    if (g()) {
                        const t = A((0, l.fE)() / 100);
                        if ("string" == typeof t) {
                            const n = (0, c.lj)(t);
                            null != n && n.paymentMethods && (0, u.l)(n.paymentMethods)
                        }
                    }
                } catch (t) {}
            }

            function L(t) {
                var n, e, o;
                (0, p.logExternalSDKMessage)({
                    name: d.nS,
                    properties: {
                        type: null === (n = t.data) || void 0 === n || null === (n = n.apiResponse) || void 0 === n ? void 0 : n.type,
                        description: null === (e = t.data) || void 0 === e || null === (e = e.apiResponse) || void 0 === e ? void 0 : e.description
                    }
                }), (null === (o = t.data) || void 0 === o || null === (o = o.apiResponse) || void 0 === o ? void 0 : o.type) === a.Pz && (0, r.HY)()
            }
        },
        89291(t, n, e) {
            e.d(n, {
                O_: () => b,
                VN: () => _,
                vv: () => m
            });
            var r = e(56337),
                o = e(14494),
                i = e(79313),
                a = e(38787),
                s = e(91645),
                l = e(81345),
                c = e(41970),
                u = e(43356),
                p = e(20203),
                d = e(65029),
                f = e(47783),
                h = e(82278),
                y = e(42875),
                g = e(82435);

            function _() {
                var t;
                const n = (0, a.jH)();
                return !0 === (null == n || null === (t = n.external_sdks) || void 0 === t ? void 0 : t.gpay_in_a_box)
            }
            const v = [
                ["not_android_sdk", () => (0, r.i0)()],
                ["bridge_unavailable", () => (0, a.Hq)()],
                ["plugin_not_packaged", () => _()],
                ["upi_critical_downtime", () => !(0, s.J9)(l.nU)],
                ["gpay_intent_not_enabled", () => (0, c.Sn)(i.jU)],
                ["recurring", () => !(0, u.AD)()],
                ["subscription", () => !(0, p.Uv)()],
                ["tpv_order", () => !(0, d.t)()],
                ["not_razorpay_org", () => (0, o.DY)()]
            ];

            function m() {
                return v.find((t => {
                    let [, n] = t;
                    return !n()
                }))
            }
            let A = !1;

            function b() {
                if (!A) try {
                    const t = m();
                    (0, f.log)({
                        name: h.V8,
                        properties: {
                            trigger: "render",
                            eligible: !t,
                            ineligibility_reason: t ? t[0] : ""
                        }
                    }), (0, y.logExperimentsEligibility)({
                        [i.UI]: {
                            eligibility: !t,
                            ineligibility_reasons: t ? t[0] : "",
                            variant: (0, g._m)(i.UI),
                            result: (0, o.Br)(i.UI) && !t
                        }
                    }), A = !0
                } catch (t) {}
            }
        }
    }
]);