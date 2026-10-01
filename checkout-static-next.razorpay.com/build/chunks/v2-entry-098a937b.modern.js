"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [9547], {
        84681(u, i, t) {
            t.d(i, {
                ZM: () => F,
                xJ: () => r,
                xg: () => l
            });
            var n = t(54045),
                e = t(13909);

            function r(u) {
                var i;
                const t = u.toUpperCase();
                return o(t) ? (null === (i = n.a[t]) || void 0 === i ? void 0 : i.name) ? ? "" : ""
            }

            function o(u) {
                return !!n.a[u]
            }

            function F(u) {
                var i;
                const t = u.toUpperCase();
                return o(t) ? (null === (i = n.a[t]) || void 0 === i ? void 0 : i.pattern) ? ? "" : ""
            }

            function l(u) {
                try {
                    return (0, e.KH)(u)["4X3"]
                } catch (i) {
                    return `https://unpkg.com/@razorpay/i18nify-js/lib/assets/flags/${u}.svg`
                }
            }
        },
        76945(u, i, t) {
            t.r(i), t.d(i, {
                getCustomer: () => a,
                getCustomer$: () => c,
                isAuthGradeCustomer: () => f,
                isLoggedIn: () => g,
                isVerifiedCustomer: () => d,
                setCustomer: () => s
            });
            var n = t(65047),
                e = t(31992),
                r = t(97623),
                o = t(75022);
            const F = (0, n.symbol)(),
                l = (0, e.T5)((0, o.b)());

            function s(u) {
                l.set(u)
            }

            function a() {
                return (0, e.Jt)(l)
            }

            function c() {
                return (0, r.u)(l)
            }

            function g() {
                return !!(0, e.Jt)(c())
            }

            function f(u) {
                return !!u && !!u.customer_id
            }(0, n.setStore)(F, l);
            const _ = (0, e.un)(l, (u => !!u && !1 !== u.verified));

            function d() {
                return (0, e.Jt)(_)
            }
            t.d(i, ["customerStore", 0, l, "isVerifiedCustomer$", 0, _])
        },
        23135(u, i, t) {
            t.d(i, {
                Hz: () => l,
                Ob: () => s,
                eb: () => a
            });
            var n = t(31992),
                e = t(76945),
                r = t(21117),
                o = t(10340),
                F = t(53207);

            function l() {
                let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!(0, r.u)() || 0 === u.length) return u;
                const i = (0, o.r$)(),
                    t = (0, o.HH)();
                return i || t ? u.filter((u => {
                    var n;
                    return (!i || !(0, F.Nv)(u.name ? ? "")) && !(t && ((0, F.YJ)(u.line1 ? ? "") || (0, F.YJ)(u.line2 ? ? "") || (0, F.YJ)(u.city ? ? "") || (0, F.YJ)(u.state ? ? "") || (0, F.YJ)(u.landmark ? ? "") || "IN" === (null === (n = u.country) || void 0 === n ? void 0 : n.toUpperCase()) && (0, F.x)(u.zipcode ? ? "")))
                })) : u
            }

            function s() {
                return (0, n.un)((0, e.getCustomer$)(), (u => l((null == u ? void 0 : u.addresses) ? ? [])))
            }

            function a(u) {
                if (u) return (0, n.Jt)(s()).find((i => i.id === u))
            }
        },
        10340(u, i, t) {
            t.d(i, {
                $p: () => x,
                ET: () => v,
                G: () => D,
                GA: () => _,
                HH: () => h,
                Ip: () => C,
                _B: () => k,
                j8: () => f,
                mU: () => w,
                mY: () => b,
                oA: () => J,
                r$: () => B
            });
            var n = t(14494),
                e = t(82435),
                r = t(76945),
                o = t(21117),
                F = t(42875),
                l = t(11674);
            const s = "magic_save_add_by_default",
                a = "magic_save_add_for_logged_out";

            function c() {
                const u = "IN" === (0, n.Rb)(),
                    i = [!(0, o.u)() && "not_magic", !u && "non_india_checkout", !(0, r.isLoggedIn)() && "not_logged_in"].filter(Boolean).join(","),
                    t = 0 === i.length;
                return {
                    isEligible: t,
                    ineligibility_reasons: i,
                    variant: (0, n._m)(s) ? ? "",
                    result: t && (0, n.Br)(s)
                }
            }

            function g() {
                const u = "IN" === (0, n.Rb)(),
                    i = [!(0, o.u)() && "not_magic", !u && "non_india_checkout", (0, r.isLoggedIn)() && "logged_in"].filter(Boolean).join(","),
                    t = 0 === i.length,
                    F = (0, e.z_)("magic_buyer_exp_orchestrator_v2", a);
                return {
                    isEligible: t,
                    ineligibility_reasons: i,
                    variant: F ? "variant_on" : "control",
                    result: t && F
                }
            }

            function f() {
                return c().result || g().result
            }

            function _() {
                const u = c(),
                    i = g();
                (0, F.logExperimentsEligibility)({
                    [s]: {
                        eligibility: u.isEligible,
                        ineligibility_reasons: u.ineligibility_reasons,
                        variant: u.variant,
                        result: u.result
                    },
                    [a]: {
                        eligibility: i.isEligible,
                        ineligibility_reasons: i.ineligibility_reasons,
                        variant: i.variant,
                        result: i.result
                    }
                })
            }
            const d = "prefill_address_form";

            function b() {
                const u = "IN" === (0, n.Rb)();
                return (0, o.u)() && u && (0, n.Br)(d)
            }

            function v() {
                const u = "IN" === (0, n.Rb)(),
                    i = [!(0, o.u)() && "not_magic", !u && "non_india_checkout"].filter(Boolean).join(","),
                    t = 0 === i.length;
                (0, F.logExperimentsEligibility)({
                    [d]: {
                        eligibility: t,
                        ineligibility_reasons: i,
                        variant: (0, n._m)(d) ? ? "",
                        result: t && (0, n.Br)(d)
                    }
                })
            }
            const y = "magic_address_name_alpha_only",
                p = "magic_address_vernacular_filter",
                A = "magic_address_vernacular_filter_v2",
                E = "shipping_outside_india_confirm";

            function m(u) {
                const i = "IN" === (0, n.Rb)(),
                    t = [!(0, o.u)() && "not_magic", !i && "non_india_checkout"].filter(Boolean).join(","),
                    e = 0 === t.length;
                return {
                    isEligible: e,
                    ineligibility_reasons: t,
                    variant: (0, n._m)(u) ? ? "",
                    result: e && (0, n.Br)(u)
                }
            }

            function B() {
                return m(y).result
            }

            function C() {
                const u = m(y);
                (0, F.logExperimentsEligibility)({
                    [y]: {
                        eligibility: u.isEligible,
                        ineligibility_reasons: u.ineligibility_reasons,
                        variant: u.variant,
                        result: u.result
                    }
                })
            }

            function h() {
                return m(p).result
            }

            function w() {
                const u = m(p);
                (0, F.logExperimentsEligibility)({
                    [p]: {
                        eligibility: u.isEligible,
                        ineligibility_reasons: u.ineligibility_reasons,
                        variant: u.variant,
                        result: u.result
                    }
                })
            }

            function x() {
                return m(A).result
            }

            function D() {
                (0, l.OE)() || ((0, l._G)(), function() {
                    const u = m(A);
                    (0, F.logExperimentsEligibility)({
                        [A]: {
                            eligibility: u.isEligible,
                            ineligibility_reasons: u.ineligibility_reasons,
                            variant: u.variant,
                            result: u.result
                        }
                    })
                }())
            }

            function J() {
                return m(E).result
            }

            function k() {
                const u = m(E);
                (0, F.logExperimentsEligibility)({
                    [E]: {
                        eligibility: u.isEligible,
                        ineligibility_reasons: u.ineligibility_reasons,
                        variant: u.variant,
                        result: u.result
                    }
                })
            }
        },
        53207(u, i, t) {
            t.d(i, {
                Bc: () => r,
                K$: () => o,
                L_: () => s,
                Nv: () => c,
                YJ: () => l,
                _T: () => F,
                x: () => a
            });
            var n = t(84681);
            const e = new RegExp("https?:\\/\\/|\\/\\/(?:www\\.)?|www\\.|\\.(?:com|in|org|net|co\\.in|io|info|biz|edu|gov|uk|au|de|fr|app|dev|ly|gl|me|tv|cc|link|online|store|shop|tech|website|xyz)\\b", "i");

            function r(u) {
                if (!u || "string" != typeof u) return "";
                return u.replace(/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F000}-\u{1F0FF}\u{1F10D}-\u{1F10F}\u{1F12F}\u{1F16C}-\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AD}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F3FA}\u{1F400}-\u{1F53D}\u{1F546}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F774}-\u{1F77F}\u{1F7D5}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1FAFF}\u{1FC00}-\u{1FFFD}]/gu, "").replace(/[^a-zA-Z0-9 #&.\-/,\()']/g, "")
            }

            function o(u) {
                return u && "string" == typeof u ? u.replace(/[^a-zA-Z ]/g, "") : ""
            }

            function F(u) {
                return u && "string" == typeof u ? u.replace(/[^ -~]/g, "") : ""
            }

            function l(u) {
                return !(!u || "string" != typeof u) && /[^ -~]/.test(u)
            }

            function s(u) {
                return u && "string" == typeof u ? u.replace(/[^0-9]/g, "") : ""
            }

            function a(u) {
                return !(!u || "string" != typeof u) && /[^0-9]/.test(u)
            }

            function c(u) {
                return !(!u || "string" != typeof u) && /[^a-zA-Z ]/.test(u)
            }
            t.d(i, ["Gw", 0, u => /<(nil|null|undefined|none|na)>/i.test(u), "JF", 0, u => /[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F000}-\u{1F0FF}\u{1F10D}-\u{1F10F}\u{1F12F}\u{1F16C}-\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AD}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F3FA}\u{1F400}-\u{1F53D}\u{1F546}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F774}-\u{1F77F}\u{1F7D5}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1FAFF}\u{1FC00}-\u{1FFFD}]/gu.test(u), "NB", 0, (u, i) => {
                const t = (0, n.ZM)(i);
                return !!t && !new RegExp(t).test(u)
            }, "VE", 0, (u, i, t) => u.length < i || u.length > t, "Y8", 0, u => "string" == typeof u && e.test(u), "ZE", 0, u => !/^[0-9a-zA-Z&+,:;@#'./*()\s-]*$/.test(u), "lx", 0, u => !/^[1-9][0-9]{5}$/.test(u), "ve", 0, (u, i) => {
                for (const t of i) {
                    const i = t(u);
                    if (i) return i
                }
                return ""
            }, "yJ", 0, u => /[\u{1D400}-\u{1D7FF}]/u.test(u)])
        },
        11674(u, i, t) {
            t.d(i, {
                OE: () => e,
                _G: () => r,
                es: () => o
            });
            let n = !1;

            function e() {
                return n
            }

            function r() {
                n = !0
            }

            function o() {
                n = !1
            }
        },
        72265(u, i, t) {
            t.d(i, {
                F: () => e
            });
            var n = t(61613);

            function e() {
                const u = ((0, n.IN)() || "").match(/^(?:https?:\/\/)?(?:www\.)?([^:\/?\n]+)/i);
                return u && u.length > 0 ? u[0].includes("www.") ? `www.${u[1]}` : u[1] : ""
            }
        }
    }
]);