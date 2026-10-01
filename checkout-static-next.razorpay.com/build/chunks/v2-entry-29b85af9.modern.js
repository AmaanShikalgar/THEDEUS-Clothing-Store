(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [62704], {
        80139(e, t, i) {
            const r = {
                "./ben.ts": [1011, [99399]],
                "./en.ts": [64787, [56589, 21545]],
                "./guj.ts": [41664, [19180]],
                "./hi.ts": [33891, [2201]],
                "./kan.ts": [76964, [88632]],
                "./mar.ts": [87602, [90994]],
                "./tam.ts": [46920, [44668]],
                "./tel.ts": [74275, [59495]]
            };

            function n(e) {
                try {
                    if (!i.o(r, e)) return Promise.resolve().then((() => {
                        const t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
                const t = r[e],
                    n = t[0];
                return Promise.all(t[1].map(i.e)).then((() => i(n)))
            }
            n.keys = () => Object.keys(r), n.id = 80139, e.exports = n
        },
        55228(e, t, i) {
            "use strict";
            i.d(t, {
                $O: () => p,
                E$: () => g,
                Iw: () => v,
                UN: () => u,
                dd: () => d,
                ie: () => c,
                y_: () => _
            });
            var r = i(31992),
                n = i(32677),
                o = i(65047),
                s = i(97623);
            const a = (0, o.symbol)();

            function d() {
                return {
                    enabled: !1,
                    groups: [],
                    selected_groups: []
                }
            }
            const l = (0, r.T5)({
                enabled: !1,
                groups: [],
                selected_groups: []
            });

            function c() {
                return (0, s.u)(l)
            }

            function _() {
                return (0, r.Jt)(l)
            }

            function u(e) {
                l.set(e)
            }

            function p() {
                l.set({
                    enabled: !1,
                    groups: [],
                    selected_groups: []
                })
            }

            function g(e) {
                return ((null == e ? void 0 : e.line_items) || []).reduce(((e, t) => e + (t.quantity || 0)), 0)
            }

            function v(e) {
                const t = (0, r.Jt)(n.t)("delivery_in_shipments", {
                    count: String(e.selected_groups.length)
                });
                return {
                    id: "split_shipping",
                    name: t,
                    description: t,
                    shipping_fee: e.selected_groups.reduce(((e, t) => e + (t.selected_shipping_method.shipping_fee || 0)), 0),
                    cod_fee: e.selected_groups.reduce(((e, t) => e + (t.selected_shipping_method.cod_fee || 0)), 0),
                    cod: e.selected_groups.length > 0 && e.selected_groups.every((e => e.selected_shipping_method.cod)),
                    serviceable: !0,
                    etd: "",
                    etd_timestamp: ""
                }
            }(0, o.setStore)(a, l)
        },
        1337(e, t, i) {
            "use strict";
            i.d(t, {
                K6: () => _,
                OB: () => g,
                ZD: () => u,
                dw: () => p
            });
            var r = i(14494),
                n = i(42875),
                o = i(24606),
                s = i(55228),
                a = i(56337),
                d = i(38081);
            const l = "mel_experience_layer_enabled";
            let c;

            function _() {
                c = void 0
            }

            function u() {
                const {
                    eligible: e,
                    reason: t
                } = p(), i = e && (0, r.Br)(l) && !(0, d.hX)();
                return i !== c && (c = i, (0, n.logExperimentsEligibility)({
                    [l]: {
                        eligibility: e,
                        ineligibility_reasons: t,
                        variant: (0, r._m)(l),
                        result: i
                    }
                })), i
            }

            function p() {
                const e = (0, s.y_)().enabled,
                    t = (0, o.aL)() && !(0, a.Lq)() && !e;
                return {
                    eligible: t,
                    reason: t ? "" : e ? "split_shipping_unsupported" : (0, a.Lq)() ? "magic_x_flow_excluded" : "not_magic_shopify_checkout_flow"
                }
            }

            function g(e) {
                var t;
                return !!e && (!e.is_freebie && "shipping_fee" !== e.type && "SHIPPING_LINE" !== (null === (t = e.target_type) || void 0 === t ? void 0 : t.toUpperCase()))
            }
        },
        47923(e, t, i) {
            "use strict";
            i.d(t, {
                QB: () => a,
                Z4: () => d
            });
            var r = i(42875),
                n = i(14494);
            const o = "mel_parity_enabled";
            let s;

            function a() {
                s = void 0
            }

            function d(e, t) {
                const i = e && (0, n.Br)(o);
                i !== s && (s = i, (0, r.logExperimentsEligibility)({
                    [o]: {
                        eligibility: e,
                        ineligibility_reasons: t,
                        variant: (0, n._m)(o),
                        result: i
                    }
                }))
            }
            i.d(t, ["yl", 0, o])
        },
        32399(e, t, i) {
            "use strict";
            i.d(t, {
                BR: () => l,
                NS: () => a,
                iS: () => d,
                zD: () => c
            });
            var r = i(60901);
            let n, o = "";
            const s = ["coupon_apply", "coupons_remove", "serviceability_fetch", "taxes_fetch", "magic_order_update"];

            function a() {
                return Boolean(o)
            }

            function d(e) {
                return !o && (o = e, n = setTimeout(c, 15e3), !0)
            }

            function l() {
                setTimeout(c, 0)
            }

            function c() {
                o = "", n && (clearTimeout(n), n = void 0)
            }(0, r.l)((e => {
                const t = function(e) {
                    return o && e && s.indexOf(e) > -1 ? o : ""
                }(e);
                return t ? {
                    "x-mel-shadow": t
                } : void 0
            }))
        },
        38081(e, t, i) {
            "use strict";
            i.d(t, {
                Fb: () => d,
                Ix: () => g,
                L7: () => o,
                UP: () => v,
                a_: () => _,
                hX: () => s,
                ov: () => h,
                po: () => l,
                tb: () => b,
                wV: () => u,
                zW: () => f,
                zo: () => m
            });
            var r = i(32399);
            let n = !1;

            function o() {
                n = !0
            }

            function s() {
                return n
            }
            let a = !1;

            function d() {
                a = !0
            }

            function l() {
                return a
            }
            let c = 0;

            function _() {
                return ++c
            }

            function u(e) {
                return e === c
            }
            let p = 0;

            function g() {
                return p
            }

            function v(e) {
                return e === p
            }

            function h() {
                p += 1, (0, r.zD)()
            }
            let y = 0;

            function f() {
                return ++y
            }

            function m(e) {
                return e === y
            }

            function b() {
                c += 1, y += 1, p += 1, n = !1, a = !1, (0, r.zD)()
            }
        },
        62704(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                resetMagicOrder: () => g
            });
            var r = i(45148),
                n = i(60431),
                o = i(72912),
                s = i(24606),
                a = i(38081),
                d = i(1337),
                l = i(47923),
                c = i(24791),
                _ = i(87251);
            const [u, p] = (0, o._7)();
            async function g() {
                if ((0, a.tb)(), (0, d.K6)(), (0, l.QB)(), (0, c.$)(), (0, _.rE)(), (0, s.Hi)()) return void p();
                const e = await (0, r.X)();
                return (0, n.Ay)({
                    method: "post",
                    url: `magic/orders/${e}/reset`,
                    skipEdgeToken: !0,
                    name: "magic_order_reset"
                }).catch((() => {})).finally((() => {
                    p()
                }))
            }
            i.d(t, ["magicOrderReset", 0, u, "magicOrderResetFinished", 0, p])
        },
        32677(e, t, i) {
            "use strict";
            var r = i(59016),
                n = i(56141),
                o = i(64787);
            const s = (0, n.uU)((e => i(80139)(`./${e}.ts`).catch((e => {
                (0, r.A)(e, "i18n")
            }))), o.default);
            i.d(t, ["t", 0, s])
        },
        64787(e, t, i) {
            "use strict";
            i.r(t);
            i.d(t, ["default", 0, {
                bundle_redirect_toast: "Redirecting you to Checkout",
                delivery_fees_added: "Delivery fees",
                taxes_added_partial: "taxes",
                taxes_added: "Taxes",
                charged_delivery_fee: "You'll be charged an extra {fee} as delivery charges for this order.",
                charged_delivery_and_taxes: "You'll be charged an extra {fee} as delivery charges and taxes for this order.",
                charged_taxes: "You'll be charged an extra {fee} as taxes for this order.",
                free_delivery: "Free Delivery",
                on_this_order: "on this order",
                applying_coupon: "Applying Coupon",
                get_it_in: "Get it in {etd}",
                delivery_available: "Delivery available",
                addchange: "Add/Change",
                change: "Change",
                deliver_to: "Deliver to",
                delivery_charge: "Delivery Charge",
                delivery_by_date: "Delivery by {date}",
                standard_delivery: "Standard Delivery",
                standard_delivery_in_3_5_days: "Standard delivery in 3-5 days",
                delivery_options: "Delivery Options",
                delivery_in_shipments: "Delivery in {count} shipments",
                expected_between: "Expected between {range}",
                delivery_address: "Delivery Address",
                free: "FREE",
                cod_is_not_available_for_this_option: "COD is not available for this option",
                free_delivery_with: "Free delivery with {code}",
                saved: "saved",
                saved_amount: "Saved {amount}",
                checking_address_serviceability: "Checking serviceability",
                do_not_deliver: "Sorry! We do not deliver to this location",
                coupon: "Coupon",
                coupons: "Coupons",
                discount_applied: "discounts applied",
                applied: "applied",
                store_credits: "Store credits",
                flits_store_credit: "Flits Store Credit",
                store_credits_applied: "Store credits applied",
                store_credit_toggle_failed: "Could not update store credits. Please try again.",
                store_credit_reapply_failed_nudge: "Could not reapply store credits. Please try again.",
                store_credit_removed_email_changed: "Store credits removed because your email changed. Apply again to use them.",
                pay_via_store_credits: "Pay via {label}: {amount}",
                paying_via_store_credits: "Paying via {label}: {amount}",
                store_credit_none_available: "No {label} available",
                store_credit_not_available: "Not available",
                earliest_delivery_by: "Earliest delivery by {date}",
                free_item: "Free Item",
                others: "Others",
                add_items_for_delivery: "Add items worth {amount} more for delivery",
                back_to_cart: "Back to cart"
            }])
        },
        87251(e, t, i) {
            "use strict";
            let r;

            function n() {
                return r
            }

            function o(e) {
                r = e
            }

            function s() {
                r = void 0
            }
            i.d(t, {
                F0: () => o,
                Pp: () => n,
                rE: () => s
            })
        },
        24791(e, t, i) {
            "use strict";
            i.d(t, {
                $: () => n
            });
            const r = {
                pendingChanges: new Map,
                inFlight: !1,
                preDispatchSnapshot: [],
                loaderElement: null
            };

            function n() {
                r.pendingChanges = new Map, r.inFlight = !1, r.preDispatchSnapshot = [];
                const e = r.loaderElement;
                r.loaderElement = null, null == e || e.close()
            }
            i.d(t, ["I", 0, r])
        }
    }
]);