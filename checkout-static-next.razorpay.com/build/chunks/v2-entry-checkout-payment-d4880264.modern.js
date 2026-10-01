(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [54006, 64402], {
        28714(e, n, t) {
            const o = {
                "./ben.ts": [2740, [99399]],
                "./en.ts": [97282, [56589, 21545]],
                "./guj.ts": [83551, [19180]],
                "./hi.ts": [4882, [2201]],
                "./kan.ts": [1899, [88632]],
                "./mar.ts": [33465, [90994]],
                "./tam.ts": [96719, [44668]],
                "./tel.ts": [23700, [59495]]
            };

            function a(e) {
                try {
                    if (!t.o(o, e)) return Promise.resolve().then((() => {
                        const n = new Error("Cannot find module '" + e + "'");
                        throw n.code = "MODULE_NOT_FOUND", n
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
                const n = o[e],
                    a = n[0];
                return Promise.all(n[1].map(t.e)).then((() => t(a)))
            }
            a.keys = () => Object.keys(o), a.id = 28714, e.exports = a
        },
        67307(e, n, t) {
            "use strict";
            t.d(n, {
                Aw: () => S,
                lp: () => w,
                rT: () => C,
                yq: () => A
            });
            var o = t(56159),
                a = t(65047),
                i = t(97623),
                c = t(31992),
                r = t(24176),
                l = t(30233),
                s = t(7186),
                u = t(82248),
                _ = t(9296),
                d = t(39835),
                m = t(75368),
                p = t(7472),
                b = t(51149),
                h = t(64523),
                y = t(87202),
                f = t(81345),
                g = t(21117);
            const v = (0, a.symbol)(),
                k = (0, c.T5)(!1);

            function w(e) {
                k.set(e)
            }

            function C() {
                return (0, i.u)(k)
            }

            function A() {
                return (0, g.u)() ? (0, c.un)([(0, o.$t)(), (0, p.sl)(), (0, l.jq)(), u.lk, (0, d.Lt)(), (0, r.SJ)()], (e => {
                    let [n, t, a, i, c, r] = e;
                    if (!(0, m.z)()) return !0;
                    const l = Object.keys(a).length > 0 || (0, _.Q2)(),
                        u = (0, s.Et)() || (0, o.kg)(),
                        d = l && u,
                        h = i && !(0, b.RT)(),
                        y = (0, p.nX)(t);
                    return n && y && !r.cod && !h && !d && !(c && (0, s.fb)())
                })) : (0, c.HD)(!0)
            }

            function S() {
                let {
                    onDone: e,
                    shouldPassOtpLength: n = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, h.Cf)({
                    icon: f.nn,
                    method: f.nn,
                    otpReason: "cod_verification",
                    title: {
                        label: "cod_with_otp.title"
                    },
                    subtitle: {
                        label: "cod_with_otp.subtitle",
                        data: {
                            number: (0, y.getContact)()
                        }
                    },
                    successCTAText: {
                        label: "cod_verification_cta_text"
                    },
                    actions: ["otp_resend"],
                    ...n ? {
                        shouldPassOtpLength: n
                    } : {},
                    onDone: () => {
                        null == e || e()
                    }
                })
            }(0, a.setStore)(v, k)
        },
        50717(e, n, t) {
            "use strict";
            var o = t(82435);
            const a = e => {
                    let {
                        merchantCouponCodes: n,
                        legacyCouponCode: t,
                        shopifyCart: o,
                        merchantCouponCodesEnabled: a
                    } = e;
                    const r = (e => {
                            if ("string" != typeof e) return [];
                            const n = e.trim();
                            return n ? [n] : []
                        })(t ? ? ""),
                        l = (s = (null == o ? void 0 : o.discount_codes) ? ? [], Array.isArray(s) ? s.map((e => ({
                            code: "string" == typeof e.code ? e.code.trim() : "",
                            applicable: !1 !== e.applicable
                        }))).filter((e => Boolean(e.code))) : []);
                    var s, u;
                    if (l.length) return {
                        source: "shopify_cart",
                        coupons: l
                    };
                    if (a) {
                        const e = (u = n ? ? [], Array.isArray(u) ? c(u.filter((e => "string" == typeof e)).map((e => e.trim())).filter(Boolean)) : []);
                        if (e.length) return {
                            source: "coupon_codes",
                            coupons: i(e)
                        }
                    }
                    return r.length ? {
                        source: "coupon_code",
                        coupons: i(r)
                    } : {
                        coupons: []
                    }
                },
                i = e => e.map((e => ({
                    code: e,
                    applicable: !0
                }))),
                c = e => {
                    const n = new Set;
                    return e.filter((e => {
                        const t = e.toLowerCase();
                        return !n.has(t) && (n.add(t), !0)
                    }))
                };
            t.d(n, ["VI", 0, a, "WF", 0, e => e.coupons.filter((e => e.applicable)).map((e => e.code)), "un", 0, () => (0, o.Br)("enable_multi_auto_apply_coupon_on_prefill")])
        },
        51149(e, n, t) {
            "use strict";
            t.d(n, {
                RT: () => d,
                rK: () => m
            });
            var o = t(31992),
                a = t(79748),
                i = t(82248),
                c = t(28949),
                r = t(7186),
                l = t(66744),
                s = t(49543),
                u = t(35314),
                _ = t(50717);

            function d() {
                return (0, u.getLoyaltyConfigEnableCod)() || (0, c.om)("magic.loyalty_points.enable_cod", !1)
            }

            function m() {
                return (0, c.om)("loyalty_points_disabled_with_coupons") ? ? !1
            }
            t.d(n, ["RF", 0, e => {
                const n = (0, i.Fr)(e),
                    t = (0, i.vs)(e),
                    o = n ? n * t * 100 : 0;
                return e === s.A.merchant_loyalty ? o > 0 ? o : (0, i.fB)(e) || 0 : o > 0 ? o : (0, i.fB)(e) * (0, i.vs)(e) || 0
            }, "jO", 0, () => {
                return !!(null === (e = (0, c.om)("prefill.coupon_code")) || void 0 === e ? void 0 : e.trim()) || (0, _.WF)((0, _.VI)({
                    merchantCouponCodes: (0, c.om)("prefill.coupon_codes"),
                    legacyCouponCode: (0, c.om)("prefill.coupon_code"),
                    shopifyCart: (0, c.om)("shopify_cart"),
                    merchantCouponCodesEnabled: (0, _.un)()
                })).length > 0;
                var e
            }, "nD", 0, e => {
                var n;
                const t = (0, o.Jt)(a.t),
                    s = (0, l.Id)();
                let u = e ? null == s || null === (n = s[e]) || void 0 === n ? void 0 : n.name : "";
                if (!u) {
                    var _;
                    const e = function() {
                        const e = (0, o.Jt)(i.ED);
                        for (const [n, t] of Object.entries(e))
                            if (t.applied) return n;
                        return ""
                    }();
                    u = e ? null == s || null === (_ = s[e]) || void 0 === _ ? void 0 : _.name : ""
                }
                return u || (0, r.cn)() || (0, c.om)("magic.nector_coins.blockName") || (0, c.om)("magic.flits_coins.blockName") || t("coins")
            }, "tK", 0, e => (0, i.Fr)(e) || (0, i.vw)(e)])
        },
        79748(e, n, t) {
            "use strict";
            var o = t(59016),
                a = t(56141),
                i = t(97282);
            const c = (0, a.uU)((e => t(28714)(`./${e}.ts`).catch((e => {
                (0, o.A)(e, "i18n")
            }))), i.default);
            t.d(n, ["t", 0, c])
        },
        97282(e, n, t) {
            "use strict";
            t.r(n);
            t.d(n, ["default", 0, {
                blockname: "{blockName}",
                coins: "Coins",
                save_with_coins_available: "Save {amount} with {coins_available} {points_name}",
                available_balance: "Available balance: {coins_available}",
                saved_with_coins_available: "Saved {amount} with {coins_available} {points_name}",
                buy_for_price_with_coins: "Buy for {final_price} with {coins_available} {points_name}",
                restrict_cod: "COD unavailable with {blockName}",
                no_coins_available: "No {blockName} available",
                not_enough_coins: "Not enough {blockName}",
                no_merchant_coins_available: "No {points_name} available",
                coins_not_applicable: "Can't be redeemed on this order",
                currently_facing_issues: "Currently facing issues",
                failed_to_remove: "{blockName} were not removed. Please retry",
                failed_to_apply: "{blockName} were not applied. Please retry",
                shop_more_to_use_coins: "Shop more to use {blockName}",
                login_to_redeem: "Login to redeem {points_name}",
                login_to_see_balance: "Login to see your {points_name} balance",
                an_OTP_will_be_sent_to_verify_your_number: "An OTP will be sent to verify your number",
                contact_details: "Contact details",
                edit_contact_details: "Edit contact details",
                enter_contact_input_placeholder: "Mobile number",
                enter_contact_optional_placeholder: "Mobile number (optional)",
                enter_email_placeholder: "Email address",
                enter_email_optional_placeholder: "Email address (optional)",
                add_your_mobile_number: "Enter mobile number to continue",
                add_your_email_number: "Enter email to continue",
                add_your_email_mobile_number: "Enter mobile & email to continue",
                fetch_saved_info: "Securely autofill saved address, if any.",
                submit_contact_cta: "Continue",
                login: "Login",
                not_available: "Not available",
                cannot_club_with_offers: "Cannot club with offers",
                cannot_club_with_coupons: "Cannot club with coupons",
                applying_coins: "Applying {blockName}",
                removing_coins: "Removing {blockName}",
                coins_applied_success: "{count} coins applied",
                coins_removed_success: "{count} coins removed",
                applied: "applied",
                saved: "Saved",
                removed: "removed",
                use_coins_to_get_off: "Use {coins_available} {points_name} to get {amount} OFF",
                amount_off: "{amount} OFF",
                applied_using_coins: "applied using {coins_available} {points_name}",
                balance_changed_to_zero: "Your {points_name} balance has changed to 0, so the coin discount has been removed.",
                coin_discount_updated: "Your {points_name} discount has been updated to {amount}",
                something_went_wrong_try_again: "Something went wrong, please try again",
                something_went_wrong_try_again_later: "Something went wrong, please try again later",
                facing_issues_try_again_later: "Facing issues, try again later",
                enter_valid_points: "Please enter a valid number of {points_name}",
                enter_points_to_redeem: "Enter points to redeem",
                apply: "Apply",
                remove: "Remove",
                earn_callout: "You will earn {points} {currency_name} on this order",
                burn_prefill_save: "Save {amount} using {coins} {currency_name}",
                unstackability_title: "Cannot be applied together",
                unstackability_body_coins: "Applying {currency_name} will remove the {code} coupon from your order.",
                unstackability_body_coupon: "Applying the {code} coupon will remove {currency_name} from your order.",
                unstackability_confirm_cta: "Apply {currency_name}",
                unstackability_confirm_cta_coupon: "Apply coupon",
                cancel: "Cancel",
                close: "Close"
            }])
        },
        66744(e, n, t) {
            "use strict";
            t.d(n, {
                Id: () => r,
                hM: () => l
            });
            var o = t(28949),
                a = t(7186),
                i = t(35314),
                c = t(49543);

            function r() {
                const e = (0, o.om)("magic.loyalty_points");
                if (Array.isArray(e)) return e[0] || {};
                var n;
                if ((0, i.isMerchantLoyaltyEnabled)()) return {
                    merchant_loyalty: { ...(null == e ? void 0 : e.merchant_loyalty) ? ? {},
                        name : (null == e || null === (n = e.merchant_loyalty) || void 0 === n ? void 0 : n.name) || "coins"
                    }
                };
                return function(e, n) {
                    if (!e) return {};
                    return {
                        [e]: n
                    }
                }(function() {
                    const e = [{
                        check: a.Qw,
                        name: "yotpo_points"
                    }, {
                        check: a.JH,
                        name: "capillary_coins"
                    }, {
                        check: a.U1,
                        name: "flits_coins"
                    }, {
                        check: a.VE,
                        name: "nector_coins"
                    }, {
                        check: a.Mt,
                        name: "nector_wallet"
                    }, {
                        check: i.isMerchantLoyaltyEnabled,
                        name: c.A.merchant_loyalty
                    }].find((e => e.check()));
                    return (null == e ? void 0 : e.name) || null
                }(), e)
            }

            function l(e) {
                return [{
                    check: a.Qw,
                    name: c.A.yotpo_points
                }, {
                    check: a.JH,
                    name: c.A.capillary_coins
                }, {
                    check: a.U1,
                    name: c.A.flits_coins
                }, {
                    check: a.VE,
                    name: c.A.nector_coins
                }, {
                    check: a.Mt,
                    name: c.A.nector_wallet
                }, {
                    check: i.isMerchantLoyaltyEnabled,
                    name: c.A.merchant_loyalty
                }].some((n => n.name === e && n.check()))
            }
        },
        24176(e, n, t) {
            "use strict";
            var o = t(31992),
                a = t(97623);
            const i = (0, o.T5)({
                emi: !1,
                cod: !1
            });
            t.d(n, ["$9", 0, (e, n) => {
                i.update((t => ({ ...t,
                    [e]: n
                })))
            }, "SJ", 0, () => (0, a.u)(i), "Sk", 0, (e, n) => !!n && (("cod" === n || "emi" === n) && e[n]), "WH", 0, () => Object.keys((0, o.Jt)(i)), "rn", 0, e => (0, o.Jt)(i)[e]])
        },
        64402(e, n, t) {
            "use strict";
            t.d(n, {
                QV: () => r,
                kG: () => c
            });
            const o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                i = e => e + (e > 0 ? ["th", "st", "nd", "rd"][e > 3 && e < 21 || e % 10 > 3 ? 0 : e % 10] : "");

            function c(e) {
                const n = new Date(+e),
                    t = a[n.getMonth()],
                    o = n.getDate();
                let i = n.getHours();
                const c = i >= 12 ? "PM" : "AM";
                i %= 12, i = i || 12;
                return `${o} ${t}, ${i.toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")} ${c}`
            }

            function r(e) {
                const n = new Date(+e * (+e < 1e10 ? 1e3 : 1));
                return `${o[n.getDay()]}, ${a[n.getMonth()]} ${n.getDate()}`
            }
            t.d(n, ["US", 0, a, "iS", 0, function(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const t = new Date(1e3 * e),
                    o = t.getFullYear(),
                    c = a[t.getMonth()],
                    r = t.getDate(),
                    l = `${i(r)} ${c}, ${o}`,
                    s = `${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}`;
                return n ? `${l}, ${s}` : l
            }, "kt", 0, i])
        }
    }
]);