"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [71239], {
        24872(e, t, s) {
            s.d(t, {
                A: () => r
            });
            var n = s(88603),
                a = (s(66891), s(73283), s(75533), s(99120)),
                o = a.vUu('<div data-testid="screen-container"><!></div>');

            function r(e, t) {
                if (new.target) return (0, n.YU)({
                    component: r,
                    ...e
                });
                const s = a.gjz(t, ["children", "$$slots", "$$events", "$$legacy"]);
                a.VCO(t, !1);
                var d = {
                    $set: a.hpB,
                    $on: (e, s) => a.oeX(t, e, s)
                };
                a.TsN();
                var i = o(),
                    c = a.jfp(i);
                return a.NIy(c, t, "default", {}, null), a.cLc(i), a.vNg((() => {
                    a.aIK(i, "id", (a.iTV(s), a.vzK((() => s.id)))), a.ysU(i, 1, (a.iTV(s), a.vzK((() => `mx-auto flex w-full grow flex-col p-5 d:max-w-[440px] d:p-6 d:pb-0 ${s.class} ${s.disabled?"pointer-events-none grayscale":""}`))))
                })), a.BCw(e, i), a.uYY(d)
            }
        },
        31644(e, t, s) {
            s.d(t, {
                A: () => d
            });
            var n = s(88603),
                a = (s(66891), s(73283), s(99120)),
                o = s(65402),
                r = s(87575);

            function d(e, t) {
                if (new.target) return (0, n.YU)({
                    component: d,
                    ...e
                });
                a.VCO(t, !0);
                const i = a._w2(t, "id", 7),
                    c = a._w2(t, "name", 7),
                    l = a._w2(t, "selectable", 7),
                    u = a._w2(t, "enabled", 7, !0),
                    _ = a._w2(t, "mode", 7),
                    m = a._w2(t, "class", 7, ""),
                    g = a._w2(t, "children", 7),
                    v = (0, o.U7)(),
                    p = !v && u();
                let h = a.wk1(null);
                const C = (0, o.tt)() ? (0, r.CZ)() : null;
                if (C && !v && ("both" === _() || _() === C)) {
                    ("standard" === C ? s.e(8622).then(s.bind(s, 55982)) : s.e(50335).then(s.bind(s, 41763))).then((e => {
                        a.hZp(h, e.default, !0)
                    })).catch((() => {}))
                }
                var f = {
                        get id() {
                            return i()
                        },
                        set id(e) {
                            i(e), a.bX()
                        },
                        get name() {
                            return c()
                        },
                        set name(e) {
                            c(e), a.bX()
                        },
                        get selectable() {
                            return l()
                        },
                        set selectable(e) {
                            l(e), a.bX()
                        },
                        get enabled() {
                            return u()
                        },
                        set enabled(e) {
                            void 0 === e && (e = !0), u(e), a.bX()
                        },
                        get mode() {
                            return _()
                        },
                        set mode(e) {
                            _(e), a.bX()
                        },
                        get class() {
                            return m()
                        },
                        set class(e) {
                            void 0 === e && (e = ""), m(e), a.bX()
                        },
                        get children() {
                            return g()
                        },
                        set children(e) {
                            g(e), a.bX()
                        },
                        $set: a.hpB,
                        $on: (e, s) => a.oeX(t, e, s)
                    },
                    b = a.Imx(),
                    w = a.esp(b),
                    y = e => {
                        var t = a.Imx(),
                            s = a.esp(t);
                        a.s9R(s, (() => a.JtY(h)), ((e, t) => {
                            t(e, {
                                get id() {
                                    return i()
                                },
                                get name() {
                                    return c()
                                },
                                get selectable() {
                                    return l()
                                },
                                get class() {
                                    return m()
                                },
                                children: (e, t) => {
                                    var s = a.Imx(),
                                        n = a.esp(s);
                                    a.UAl(n, (() => g() ? ? a.lQ1)), a.BCw(e, s)
                                },
                                $$slots: {
                                    default: !0
                                }
                            })
                        })), a.BCw(e, t)
                    },
                    $ = e => {
                        var t = a.Imx(),
                            s = a.esp(t);
                        a.UAl(s, (() => g() ? ? a.lQ1)), a.BCw(e, t)
                    };
                return a.if(w, (e => {
                    a.JtY(h) && p ? e(y) : e($, -1)
                })), a.BCw(e, b), a.uYY(f)
            }
        },
        2780(e, t, s) {
            s.d(t, {
                D3: () => l,
                RO: () => u
            });
            var n = s(31800),
                a = s(95896),
                o = s(60431),
                r = s(87202),
                d = s(98953),
                i = s(14494),
                c = s(45325);
            async function l() {
                const e = await a.z.thirdPartyAddressConsent.overlay();
                return (0, n.default)(e.component, {}).promise
            }
            async function u() {
                const e = await a.z.thirdPartyAddressConsent.overlayError();
                return (0, n.default)(e.default, {}).promise
            }

            function _() {
                return (0, i._m)("one_cc_third_party_address_ingestion")
            }
            s.d(t, ["HH", 0, e => {
                (0, c.$s)("thirdPartyAddressConsentUpdateStart", {
                    partner_name: "unicommerce",
                    is_consent_given: e,
                    logged_in_status: !1
                });
                const t = Date.now();
                return (0, o.Ay)({
                    url: "magic/customer/address/consent",
                    method: "post",
                    data: {
                        contact: (0, r.getContact)(),
                        provider: "unicommerce",
                        unicommerce_address_consent: e
                    },
                    cache: Number.POSITIVE_INFINITY,
                    cacheKey: () => `customer_${(0,r.getContact)()}_address_consent_${Boolean(e)}`,
                    name: "3p_address_consent_update"
                }, o.i9).then((s => ((0, c.$s)("thirdPartyAddressConsentUpdateEnd", {
                    partner_name: "unicommerce",
                    is_consent_given: e,
                    logged_in_status: !1,
                    status_key: "success",
                    response_time: Date.now() - t
                }), s.data))).catch((s => ((0, c.$s)("thirdPartyAddressConsentUpdateEnd", {
                    partner_name: "unicommerce",
                    is_consent_given: e,
                    logged_in_status: !1,
                    status_key: "failure",
                    response_time: Date.now() - t
                }), s))).finally((() => {
                    (0, d.KF)(0), (0, d.Kh)(!1)
                }))
            }, "Hn", 0, () => "auto_submit" === _() || "manual_submit" === _(), "oX", 0, () => "auto_submit" === _(), "tT", 0, () => {
                (0, c.$s)("thirdPartyGetAddressCountStart", {
                    partner_name: "unicommerce",
                    logged_in_status: !1
                });
                const e = Date.now();
                return (0, o.Ay)({
                    url: "magic/customer/address/count",
                    params: {
                        contact: (0, r.getContact)(),
                        provider: "unicommerce"
                    },
                    cache: Number.POSITIVE_INFINITY,
                    name: "3p_address_count_fetch"
                }).then((t => {
                    const {
                        consent_view: s,
                        address_count: n
                    } = t.data, a = s > 0 && n > 0;
                    return (0, c.$s)("thirdPartyGetAddressCountEnd", {
                        partner_name: "unicommerce",
                        logged_in_status: !1,
                        status_key: "success",
                        unicommerce_address_count: n,
                        response_time: Date.now() - e
                    }), (0, d.KF)(s || 0), (0, d.Kh)(a), t.data
                })).catch((() => ((0, c.$s)("thirdPartyGetAddressCountEnd", {
                    partner_name: "unicommerce",
                    logged_in_status: !1,
                    status_key: "failure",
                    unicommerce_address_count: 0,
                    response_time: Date.now() - e
                }), {
                    consent_view: 0,
                    address_count: 0
                })))
            }])
        },
        27080(e, t, s) {
            s.d(t, {
                B: () => l
            });
            var n = s(55818),
                a = s(26481),
                o = s(47783),
                r = s(7186),
                d = s(92533),
                i = s(59543);
            let c = !1;

            function l(e) {
                (0, r.yP)() && (0, d.isCouponAllowedWithPreDiscountGC)() && (0, r.Xk)() && (c || (c = !0, (0, o.logRender)({
                    name: "retargeting_discount_coupon_widget_hidden",
                    properties: {
                        surface: e
                    }
                })), (0, i.$w)().catch((t => (0, n.default)(t instanceof Error ? t : String(t), {
                    severity: a.m.S3,
                    analytics: {
                        event: "retargeting_discount_coupon_prefetch_failed",
                        data: {
                            source: e
                        }
                    }
                }))))
            }
        },
        53143(e, t, s) {
            s.r(t), s.d(t, {
                breadcrumbHighlight: () => oe,
                component: () => ne,
                magicInitScreen: () => de,
                name: () => re
            });
            var n = s(88603),
                a = (s(66891), s(73283), s(75533), s(99120)),
                o = s(46434),
                r = s(31992),
                d = s(76945),
                i = s(55391),
                c = s(30994),
                l = s(64523),
                u = s(25328),
                _ = s(31800),
                m = s(95896);
            var g = s(28766),
                v = s(22424),
                p = s(87202),
                h = s(46423),
                C = s(59016),
                f = s(30192),
                b = s(7186),
                w = s(80532),
                y = s(78867),
                $ = s(80146),
                A = s(22974),
                E = s(98953),
                T = s(2780),
                S = s(23135),
                O = s(28241),
                z = s(71279),
                D = s(62244),
                R = s(58214),
                k = s(71021),
                I = s(45325),
                N = s(47783),
                U = s(82435),
                P = s(42875),
                x = s(68661),
                Y = s(90741),
                X = s(94600),
                H = s(63538);
            const B = "one_cc_address_count_cap_display";
            async function K() {
                if (!(0, p.getContact)().startsWith("+91")) return M();
                const e = await (0, l.EF)();
                let t = !1;
                if ((0, r.Jt)((0, u.d3)()) > 0 && !e.hasSavedAddresses) {
                    t = !0;
                    await async function() {
                        const e = await m.z.addressConsent.overlay();
                        return (0, _.default)(e.component, {}).promise
                    }() && !e.otpReason && (e.otpReason = (0, k.E)() ? "access_address_v9" : "access_address_v2")
                }
                let n = {};
                const a = (0, T.Hn)(),
                    o = (0, p.isIndianContact)();
                if (V({
                        experiment_disabled: () => !a,
                        has_saved_addresses: () => e.hasSavedAddresses,
                        is_international_contact: () => !o,
                        third_watch_consent_modal_shown: () => t
                    }), a && !e.hasSavedAddresses && o && !t && (n = await J()), n.consentModalDismissCtaClicked) return;
                if (!e.otpReason && !n.otpReason) return M();
                const d = {
                    otp_reason: n.otpReason || e.otpReason
                };
                e.savedAddressCount && (d.saved_addresses_count = e.savedAddressCount), n.hasSavedAddresses && (d.thirdPartyAddressCount = n.addressCount), (0, A.logEvent)("trigger_otp_data", d);
                const i = function(e) {
                    const t = e > 20,
                        s = t && (0, U.Br)(B);
                    return (0, P.logExperimentsEligibility)({
                        [B]: {
                            eligibility: t,
                            ineligibility_reasons: t ? "" : e ? "count_within_display_limit" : "no_saved_addresses",
                            variant: (0, U._m)(B),
                            result: s
                        }
                    }), s
                }(e.savedAddressCount);
                return (0, l.EG)({
                    hasSavedAddresses: e.hasSavedAddresses,
                    otpReason: e.otpReason,
                    onDone: t => {
                        let n = !1;
                        const a = () => {
                            n || (n = !0, null == t || t.close())
                        };
                        (async function(e, t) {
                            if (!(0, p.isRemoveEmailFromLoginEnabled)() || (0, p.isOptionalEmail)() || (0, p.getEmail)() || !e) return;
                            const n = await (0, h.a)();
                            if (!n) return;
                            if (null == t || t.close(), await (0, _.default)(n, {
                                    emailRequired: !0,
                                    postOtp: !0
                                }, {
                                    removeCross: !0,
                                    allowDismiss: !1
                                }).promise, !(0, b.E9)()) return;
                            let a;
                            try {
                                const {
                                    syncAutomaticDiscountsWithContactDetails: e
                                } = await Promise.resolve().then(s.bind(s, 66194));
                                await Promise.race([e(), new Promise((e => {
                                    a = setTimeout((() => {
                                        (0, N.log)({
                                            name: "magic:coupons:post_otp_revalidate_timeout"
                                        }), e()
                                    }), 5e3)
                                }))])
                            } catch (e) {
                                (0, C.A)(e instanceof Error ? e : void 0, "magic-coupons-contact-revalidate")
                            } finally {
                                clearTimeout(a)
                            }
                        })(e.hasSavedAddresses, {
                            close: a
                        }).then((() => M().finally(a).catch((() => {}))), (() => {
                            a(), M().catch((() => {}))
                        })).catch((() => {}))
                    },
                    title: e.hasSavedAddresses && e.savedAddressCount ? {
                        label: "address_fill_help"
                    } : {
                        label: "verify_mobile_number"
                    },
                    subtitle: e.hasSavedAddresses ? {
                        label: "otp_sent_to_contact_to_fetch_address",
                        data: {
                            contact: (0, p.getContact)()
                        }
                    } : {
                        label: "otp_sent_to_contact",
                        data: {
                            contact: (0, p.getContact)()
                        }
                    },
                    imageText: e.hasSavedAddresses && e.savedAddressCount ? {
                        label: "found_saved_addresses_with_count",
                        data: {
                            addressCount: i ? "20+" : `${e.savedAddressCount}`,
                            address: (0, f.td)(e.savedAddressCount, "address", "addresses")
                        }
                    } : {
                        label: "verify_mobile_number"
                    },
                    successCTAText: e.hasSavedAddresses ? {
                        label: "address_found"
                    } : void 0,
                    verifyOverlay: !0,
                    ...n
                })
            }
            async function J() {
                const e = await (0, T.tT)();
                let t;
                if ((0, E.ez)() && (t = await (0, T.D3)()), t && !t.consentUpdatedSuccessfully && (t = await (0, T.RO)()), !t && (0, E.ez)()) return {
                    consentModalDismissCtaClicked: !0
                };
                const {
                    consentGiven: s,
                    consentUpdatedSuccessfully: n
                } = t || {}, {
                    address_count: a
                } = e || {};
                var o;
                return s && n && a ? {
                    hasSavedAddresses: !!a,
                    otpReason: (0, k.E)() ? "access_address_v9" : "access_address_v2",
                    imageText: {
                        label: "found_saved_addresses_with_count",
                        data: {
                            addressCount: `${(null==e?void 0:e.address_count)||0}`,
                            address: (0, f.td)(e.address_count || 0, "address", "addresses")
                        }
                    },
                    successCTAText: {
                        label: "address_unlocked"
                    },
                    addresses: null === (o = t) || void 0 === o ? void 0 : o.addresses,
                    addressCount: a
                } : {}
            }

            function M() {
                const e = (0, r.Jt)((0, $.h4)());
                return (0, v.CG)({
                    event: `${Object.keys(e).length?"with":"without"}_coupons_${y.kl.CTA_CLICKED}`,
                    category: y.R6.COUPONS,
                    params: {
                        page_title: y.R6.COUPONS
                    }
                }), (0, v.HT)({
                    phone: (0, p.getContact)(),
                    email: (0, p.getEmail)()
                }), (0, w.updateMagicOrder)().then((() => {
                    var e;
                    const t = null === (e = (0, p.getEmail)()) || void 0 === e ? void 0 : e.toLowerCase();
                    (0, v.CG)({
                        event: y.kl.ORDER_CUSTOMER_DETAILS_UPDATED,
                        category: y.R6.MAGIC_CHECKOUT,
                        params: {
                            contact: (0, p.getContact)(),
                            ...t ? {
                                email: t
                            } : {}
                        }
                    }, {
                        sendTo: [y.OR.BE]
                    })
                })).catch((() => {})), (0, r.Jt)((0, d.getCustomer$)()) && ((0, O.O)({ ...(0, z.g)()
                }), (0, D.O)(R.Dp.USER_DATA, {}, {
                    auth_context: "authenticated",
                    source_screen: R.wQ.MAGIC_ENTRY
                })), G()
            }
            async function G() {
                var e;
                let {
                    isCustomerStatusCallSkipped: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (t) {
                    const e = await async function() {
                        const e = (0, T.Hn)(),
                            t = !!(0, r.Jt)((0, S.Ob)()).length,
                            s = (0, p.isIndianContact)(),
                            n = (0, r.Jt)((0, E.qt)());
                        if (V({
                                experiment_disabled: () => !e,
                                has_saved_addresses: () => t,
                                is_international_contact: () => !s,
                                consent_view_count: () => 0 === n
                            }), s && e && !t && n > 0) {
                            const e = await J();
                            if (e.consentModalDismissCtaClicked) return Promise.resolve({
                                consentProvided: !1
                            });
                            const t = (0, r.Jt)((0, d.getCustomer$)());
                            if (t && e.addresses) {
                                const s = { ...t,
                                    addresses: e.addresses
                                };
                                (0, d.setCustomer)(s)
                            }
                        }
                        return Promise.resolve({
                            consentProvided: !0
                        })
                    }();
                    if (!e.consentProvided) return
                }
                const s = (0, r.Jt)((0, d.getCustomer$)());
                (0, N.log)({
                    name: "opc_pre_check",
                    properties: {
                        opc_pre_check_customer: !!s,
                        opc_pre_check_addresses: !(null == s || null === (e = s.addresses) || void 0 === e || !e.length),
                        call_site: "magic_entry"
                    }
                }), (0, Y.F0)(), (0, Y.nU)();
                const n = (0, r.Jt)((0, d.getCustomer$)()),
                    a = (0, S.Hz)((null == n ? void 0 : n.addresses) ? ? []);
                s && !n && (0, N.log)({
                    name: "opc_customer_cleared_after_check",
                    properties: {
                        opc_customer_cleared_after_check: !0,
                        call_site: "magic_entry"
                    }
                });
                const o = n && a.length > 0 && (0, U.Br)("one_cc_show_review_after_login") && !(0, x.t)();
                (0, P.logExperimentsEligibility)({
                    one_cc_show_review_after_login: {
                        eligibility: a.length > 0,
                        variant: (0, U._m)("one_cc_show_review_after_login"),
                        ineligibility_reasons: 0 === a.length ? "no_save_addresses" : (0, x.t)() ? "one_page_checkout_enabled" : "",
                        result: Boolean(o)
                    }
                });
                const i = (0, H.getRouteDiversionTier)(a);
                return i ? ((0, N.log)({
                    name: "behav:address_i18n_validation_route_divert",
                    properties: {
                        tier: i,
                        call_site: "magic_entry"
                    }
                }), (0, g.X9)(m.z.address.selectDeliveryAddress())) : (0, x.t)() ? (0, Y.CY)() ? void(0, X.df)() : (0, g.X9)(m.z.payments()) : (0, g.X9)(o ? m.z.magicL0.magicHome() : m.z.address.address())
            }

            function V(e) {
                let t = !0;
                const s = [];
                for (const [n, a] of Object.entries(e)) a() && (t = !1, s.push(n));
                (0, I.Ez)({
                    unicommerce_eligible: t,
                    unicommerce_ineligible_reason: s.join(",")
                })
            }
            var W = s(64009),
                F = s(47978),
                L = s(17987),
                Z = s(27080),
                j = s(95308),
                Q = s(40093),
                q = s(14833),
                ee = s(21629),
                te = s(22401),
                se = s(28351);

            function ne(e, t) {
                if (new.target) return (0, n.YU)({
                    component: ne,
                    ...e
                });
                a.VCO(t, !1);
                const s = () => a.Hzn(T, "$consentEnabled$", v),
                    l = () => a.Hzn(c.WE, "$isContactConsentEnabled$", v),
                    u = () => a.Hzn(E, "$customerConsentStatus$", v),
                    _ = () => a.Hzn($, "$festivalConfig$", v),
                    g = () => a.Hzn(y, "$customer$", v),
                    [v, h] = a.DZI(),
                    C = a.zgK(),
                    f = a.zgK();
                var b = a.zgK(),
                    w = a.zgK();
                const y = (0, d.getCustomer$)(),
                    $ = (0, te.WM)(),
                    E = (0, c.hF)(),
                    T = (0, se.UN)(se.iE.CONTACT_CONSENT_ENABLED),
                    S = a.Hzn(W.contact$, "$contact$", v);
                (0, A.logRender)("magic_entry", {}, A.EVENTS.MOUNT, "MagicEntry"), (0, o.Rc)((() => {
                    (0, F.Us)(), (0, j.M)(), (0, L.a)(), (0, Z.B)("magic_entry"), (0, m.k)([m.z.address.address, m.z.address.addShippingAddress, m.z.address.selectDeliveryAddress])
                })), a.M3l((() => (s(), l(), u())), (() => {
                    a.hZp(C, (s(), l() && !u()))
                })), a.M3l((() => (a.$iW(w), a.$iW(b), _())), (() => {
                    a.hZp(f, !!(null === a.hZp(w, null === a.hZp(b, null === _() || void 0 === _() ? void 0 : _().assets) || void 0 === a.$iW(b) ? void 0 : a.$iW(b).illustration) || void 0 === a.$iW(w) ? void 0 : a.$iW(w).hero))
                })), a.iqF();
                var k = {
                    $set: a.hpB,
                    $on: (e, s) => a.oeX(t, e, s)
                };
                a.TsN(); {
                    let t = a.Xdt((() => (a.iTV(A.EVENTS), a.vzK((() => `${A.EVENTS.MOUNT},${A.EVENTS.CHANGE}`)))));
                    (0, i.A)(e, {
                        name: "contact",
                        get log() {
                            return a.JtY(t)
                        },
                        next: () => function() {
                            if ((0, p.isOptionalEmail)() || (0, p.getEmail)() || (0, p.showEmailOnAddressScreen)()) return (0, A.logEvent)("magicEntrySubmit"), !g() || S && S !== (0, p.getContact)() ? K() : ((0, r.Jt)((0, d.getCustomer$)()) && ((0, O.O)({ ...(0, z.g)()
                            }), (0, D.O)(R.Dp.USER_DATA, {}, {
                                auth_context: "authenticated",
                                source_screen: R.wQ.MAGIC_ENTRY
                            })), G({
                                isCustomerStatusCallSkipped: !0
                            }));
                            (0, N.log)({
                                name: "behav:magic_entry_blocked",
                                properties: {
                                    reason: "email_missing",
                                    has_customer: !!g()
                                }
                            })
                        }(),
                        get showConsentCheckbox() {
                            return a.JtY(C)
                        },
                        $$slots: {
                            "header-icon": (e, t) => {
                                var s = a.Imx(),
                                    n = a.esp(s),
                                    o = e => {
                                        (0, Q.default)(e, {
                                            showLanguageIcon: !0,
                                            class: "ml-auto bg-on-surface/10 d:hidden",
                                            $$slots: {
                                                "button-image": (e, t) => {
                                                    {
                                                        let t = a.Xdt((() => (a.iTV(ee.XO), a.vzK((() => (0, ee.XO)("language"))))));
                                                        (0, q.A)(e, {
                                                            slot: "button-image",
                                                            get src() {
                                                                return a.JtY(t)
                                                            },
                                                            alt: "options",
                                                            class: "text-on-surface/60"
                                                        })
                                                    }
                                                }
                                            }
                                        })
                                    };
                                a.if(n, (e => {
                                    a.JtY(f) && e(o)
                                })), a.BCw(e, s)
                            }
                        }
                    })
                }
                var I = a.uYY(k);
                return h(), I
            }
            var ae = s(21734);
            const oe = "contact",
                re = ae.G5,
                de = !0
        },
        59070(e, t, s) {
            s.r(t), s.d(t, {
                component: () => a.A
            });
            var n = s(21734),
                a = s(74860);
            const o = n.z2;
            s.d(t, ["breadcrumbHighlight", 0, "contact", "magicInitScreen", 0, !0, "name", 0, o])
        }
    }
]);