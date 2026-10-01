(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [77054], {
        35053(e, t, n) {
            const r = {
                "./ben.ts": [53581, [99399]],
                "./en.ts": [7629, [56589, 21545]],
                "./guj.ts": [7538, [19180]],
                "./hi.ts": [25697, [2201]],
                "./kan.ts": [93966, [88632]],
                "./mar.ts": [41240, [90994]],
                "./tam.ts": [53522, [44668]],
                "./tel.ts": [58301, [59495]]
            };

            function o(e) {
                try {
                    if (!n.o(r, e)) return Promise.resolve().then((() => {
                        const t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
                const t = r[e],
                    o = t[0];
                return Promise.all(t[1].map(n.e)).then((() => n(o)))
            }
            o.keys = () => Object.keys(r), o.id = 35053, e.exports = o
        },
        63369(e, t, n) {
            "use strict";
            n.d(t, {
                Mn: () => s,
                Pn: () => c,
                cb: () => u,
                lb: () => d
            });
            var r = n(33456),
                o = n(93153),
                _ = n(26718),
                i = n(23871),
                l = n(78400),
                a = n(56337);

            function s() {
                return {
                    status: !0
                }
            }

            function c(e) {
                return {
                    status: !1,
                    reason: e
                }
            }

            function d(e) {
                return navigator.cookieEnabled ? o.hB || o.Pj ? a.Gw ? c(r.xK.disabled_on_private_window) : !1 === (0, l.Rw)("features.truecaller_login") ? c(r.xK.disabled_on_merchant_level) : function() {
                    const e = !(0, a.yt)() && o.yA,
                        t = !(0, a.yt)() && o.f2;
                    return !(e || (0, a.i0)()) || t
                }() ? c(r.xK.disabled_on_platform_level) : (null == e ? void 0 : e.skipped_count) >= 3 ? c(r.xK.disabled_for_exceeding_skip_count) : {
                    status: !0
                } : c(r.xK.disabled_on_unsupported_browser) : c(r.xK.cookie_not_enabled)
            }

            function u() {
                const e = {},
                    t = d((0, _.lj)((0, i.Gq)(r.B3))).status;
                return t && (e.truecaller = 1), t && (0, l.Rw)("prefill.contact") && (0, l.Rw)("prefill.email") && (e.prefill = 1), e
            }
        },
        33456(e, t, n) {
            "use strict";
            const r = {
                    en: "en",
                    hi: "hi",
                    mr: "mar",
                    te: "tel",
                    ml: !1,
                    ur: !1,
                    pa: !1,
                    ta: "tam",
                    bn: "ben",
                    kn: "kan",
                    sw: !1,
                    ar: !1
                },
                o = Object.keys(r);
            n.d(t, ["$3", 0, {
                client_unresponsive: "client_unresponsive",
                unhandled_error: "unhandled_error"
            }, "B3", 0, "truecaller_user_metric", "Fc", 0, r, "GK", 0, {
                use_another_number: "use_another_number",
                user_rejected: "user_rejected"
            }, "Hf", 0, "magic_disable_truecaller_login", "Sr", 0, {
                TRUECALLER_NOT_FOUND: "TRUECALLER_NOT_FOUND",
                TRUECALLER_LOGIN_DISABLED: "TRUECALLER_LOGIN_DISABLED",
                USER_DISMISSED_LOADER: "USER_DISMISSED_LOADER",
                SAVED_CARD_NOT_FOUND: "SAVED_CARD_NOT_FOUND",
                TRUECALLER_TIMEOUT_EXCEEDED: "TRUECALLER_TIMEOUT_EXCEEDED"
            }, "UL", 0, o, "Yi", 0, {
                PENDING: "pending",
                RESOLVED: "resolved",
                REJECTED: "rejected"
            }, "xK", 0, {
                cookie_not_enabled: "cookie_not_enabled",
                disabled_on_unsupported_browser: "disabled_on_unsupported_browser",
                disabled_on_private_window: "disabled_on_private_window",
                disabled_on_merchant_level: "disabled_on_merchant_level",
                disabled_on_platform_level: "disabled_on_platform_level",
                disabled_for_method_prefill: "disabled_for_method_prefill",
                disabled_for_non_editable_contact: "disabled_for_non_editable_contact",
                disabled_for_exceeding_skip_count: "disabled_for_exceeding_skip_count",
                user_already_logged_in: "user_already_logged_in",
                currency_non_inr: "currency_non_inr",
                truecaller_not_present: "truecaller_not_present",
                request_id_not_present: "request_id_not_present",
                id_generation_attempt_exceeded: "id_generation_attempt_exceeded",
                should_not_remember_customer: "should_not_remember_customer",
                disabled_by_screen_variant_feature_flag: "disabled_by_screen_variant_feature_flag",
                disabled_by_experiment: "disabled_by_experiment",
                disabled_by_magic_truecaller_experiment: "disabled_by_magic_truecaller_experiment"
            }])
        },
        68100(e, t, n) {
            "use strict";
            n.d(t, {
                sI: () => k,
                z5: () => D,
                su: () => w,
                gf: () => h,
                G1: () => x,
                Oo: () => E,
                IE: () => v
            });
            var r = n(31992);
            var o = n(99166),
                _ = n(76945),
                i = n(72538),
                l = n(87202),
                a = n(28949),
                s = n(79869),
                c = n(14494),
                d = n(75155),
                u = n(33456),
                b = n(63369),
                m = n(42875),
                f = n(82435),
                p = n(21117);
            const g = (0, n(80896).Oo)(((e, t, n) => {
                (0, m.logExperimentsEligibility)({
                    [u.Hf]: {
                        eligibility: e,
                        ineligibility_reasons: t,
                        variant: (0, f._m)(u.Hf),
                        result: n
                    }
                })
            }));
            var y = n(81345);

            function E(e) {
                const t = { ...e
                };
                if (!t.requestNonce) throw new Error("Invalid config. requestNonce required");
                return t.ctaColor && !(0, o.K6)(t.ctaColor) && delete t.ctaColor, t.ctaTextColor && !(0, o.K6)(t.ctaTextColor) && delete t.ctaTextColor, t.lang && !u.UL.includes(t.lang) && delete t.lang, t
            }

            function h() {
                const e = function() {
                    const e = (0, b.lb)((0, r.Jt)(d.LD));
                    return e.status ? (0, l.isContactHidden)() || (0, l.isReadonlyContact)() ? (0, b.Pn)(u.xK.disabled_for_non_editable_contact) : (0, _.isLoggedIn)() ? (0, b.Pn)(u.xK.user_already_logged_in) : ["card", "emi", "cardless_emi"].includes((0, a.om)("prefill.method")) && ((0, l.isOptionalContact)() || (0, a.om)("prefill.contact")) && ((0, l.isOptionalEmail)() || (0, a.om)("prefill.email")) ? (0, b.Pn)(u.xK.disabled_for_method_prefill) : (0, c.jI)("truecaller_login") ? window.CheckoutBridge ? (0, b.Pn)(u.xK.disabled_by_experiment) : !(0, c.jI)("truecaller_login_mweb") && !window.CheckoutBridge || !(0, c.jI)("truecaller_login_sdk") && window.CheckoutBridge ? (0, b.Pn)(u.xK.disabled_on_platform_level) : "INR" !== (0, s.OY)() ? (0, b.Pn)(u.xK.currency_non_inr) : !1 === (0, r.Jt)(d.bX) ? (0, b.Pn)(u.xK.truecaller_not_present) : (0, c.uG)() ? (0, r.Jt)(d.o_) >= 99 ? (0, b.Pn)(u.xK.id_generation_attempt_exceeded) : (0, i.NE)(y.Nr, !0) ? (0, b.Mn)() : (0, b.Pn)(u.xK.should_not_remember_customer) : (0, b.Pn)(u.xK.request_id_not_present) : (0, b.Pn)(u.xK.disabled_on_merchant_level) : e
                }();
                return function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    try {
                        if (!(0, p.u)()) return !1;
                        const n = e && (0, f.Br)(u.Hf);
                        return g(e, t, n), n
                    } catch {
                        return !1
                    }
                }(e.status, e.reason) ? (0, b.Pn)(u.xK.disabled_by_magic_truecaller_experiment) : e
            }

            function v() {
                d.MT.set(h().status)
            }

            function x() {
                var e;
                (function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    return Math.abs(Math.floor((t - e) / 864e5))
                })(null === (e = (0, r.Jt)(d.LD)) || void 0 === e ? void 0 : e.timestamp) > 180 && d.LD.set({
                    skipped_count: 0,
                    timestamp: Date.now()
                })
            }

            function w() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                return Object.keys(u.Fc).find((t => u.Fc[t] === e)) || "en"
            }

            function D() {
                return `${(0,c.uG)()}-${String((0,r.Jt)(d.o_)).padStart(2,"0")}`.slice(0, 64)
            }

            function k() {
                return (0, b.cb)()
            }
        },
        98571(e, t, n) {
            "use strict";
            var r = n(59016),
                o = n(56141),
                _ = n(7629);
            const i = (0, o.uU)((e => n(35053)(`./${e}.ts`).catch((e => {
                (0, r.A)(e, "i18n")
            }))), _.default);
            n.d(t, ["t", 0, i])
        },
        7629(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, ["default", 0, {
                could_not_verify: "Couldn't verify using Truecaller",
                you_may_entry_your_number_manually: "You may enter your number manually or try again using Truecaller to continue",
                add_contact_details: "Add contact details",
                verifying_you_using: "Verifying your account",
                this_will_only_take_a_few_seconds: "This only takes a few seconds",
                skip: "Skip",
                successfully_verified: "Successfully verified",
                you_can_continue_to_secure_checkout: "Continuing to checkout",
                login_using: "or login with"
            }])
        },
        75155(e, t, n) {
            "use strict";
            n.d(t, {
                UO: () => u
            });
            var r = n(26718),
                o = n(31992),
                _ = n(23871),
                i = n(33456),
                l = n(65047);
            const a = (0, o.T5)(0),
                s = (0, o.T5)(null),
                c = (0, o.T5)(function() {
                    const e = {
                        skipped_count: 0,
                        timestamp: Date.now()
                    };
                    try {
                        const t = (0, r.lj)((0, _.Gq)(i.B3));
                        return (0, r.Bx)(t) && "number" == typeof t.skipped_count && "number" == typeof t.timestamp ? t : e
                    } catch (t) {
                        return e
                    }
                }()),
                d = (0, o.T5)(!1);
            (0, o.T5)(!1);

            function u() {
                a.update((e => e + 1))
            }
            c.subscribe((e => {
                e && function(e) {
                    try {
                        return (0, _.SO)(i.B3, JSON.stringify(e))
                    } catch (e) {
                        return !1
                    }
                }(e)
            }));
            const b = (0, l.symbol)();
            n.d(t, ["LD", 0, c, "MT", 0, d, "bX", 0, s, "nq", 0, b, "o_", 0, a])
        },
        4535(e, t, n) {
            "use strict";
            e.exports = n.p + "assets/images/truecaller-logo.6a7fb334.svg"
        }
    }
]);