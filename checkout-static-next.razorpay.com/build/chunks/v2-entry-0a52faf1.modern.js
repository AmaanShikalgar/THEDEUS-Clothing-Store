"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [92520], {
        3344(t, e, n) {
            n.d(e, {
                A: () => s
            });
            var o = n(88603),
                r = (n(66891), n(73283), n(75533), n(99120)),
                a = n(73480),
                i = n(43162),
                c = n(42868),
                l = r.vUu("<div><!></div>");

            function s(t, e) {
                if (new.target) return (0, o.YU)({
                    component: s,
                    ...t
                });
                const n = r.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                r.VCO(e, !1);
                var d = {
                    $set: r.hpB,
                    $on: (t, n) => r.oeX(e, t, n)
                };
                r.TsN();
                var u = r.Imx(),
                    v = r.esp(u),
                    g = t => {
                        {
                            let e = r.Xdt((() => (r.iTV(c.V), r.vzK(c.V))));
                            (0, a.A)(t, {
                                get promise() {
                                    return r.JtY(e)
                                },
                                children: r.y8B,
                                $$slots: {
                                    default: (t, e) => {
                                        const o = r.Xdt((() => e.data));
                                        r.JtY(o).default(t, {
                                            get class() {
                                                return r.iTV(n), r.vzK((() => n.class))
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    },
                    m = r.unG((() => (r.iTV(c.$), r.vzK((() => (0, c.$)(!0)))))),
                    p = t => {
                        var e = l(),
                            o = r.jfp(e);
                        (0, i.A)(o, {}), r.cLc(e), r.vNg((() => r.ysU(e, 1, (r.iTV(n), r.vzK((() => `flex items-center justify-center ${n.class}`)))))), r.BCw(t, e)
                    };
                return r.if(v, (t => {
                    r.JtY(m) ? t(g) : t(p, -1)
                })), r.BCw(t, u), r.uYY(d)
            }
        },
        55391(t, e, n) {
            n.d(e, {
                A: () => ue
            });
            var o = n(88603),
                r = (n(66891), n(73283), n(75533), n(99120)),
                a = n(46434),
                i = n(31992),
                c = n(15461),
                l = n(66844),
                s = n(54341),
                d = n(72162),
                u = n(9989),
                v = n(8449),
                g = n(46003),
                m = n(4503),
                p = n(27944),
                h = n(7409),
                f = n(93153),
                Y = n(65878),
                J = n(30192),
                C = n(88142),
                y = n(65047),
                T = n(21629);
            const _ = n.p + "assets/images/rings.e74f7171.svg";
            var b = n(5928),
                w = n(76945),
                $ = n(43356),
                z = n(63220),
                E = n(87202),
                S = n(26718),
                V = n(64009),
                x = n(13232),
                K = n(83529),
                X = n(16047),
                B = n(10340),
                A = n(26900),
                O = n(69807),
                k = n(48786),
                G = n(45440),
                I = n(11587),
                Z = n(22424),
                N = n(78867),
                P = n(80896),
                R = n(28766),
                L = n(73738),
                D = n(21117);
            var j = n(81825),
                F = n(33456),
                U = n(68100),
                M = n(22974),
                H = n(24958),
                W = n(66182);

            function q(t) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || !(0, y.getStore)(V.kF)) return (0, y.setStore)(V.kF, !0), Promise.all([n.e(77054), n.e(71062)]).then(n.bind(n, 92150)).then((e => e.triggerTruecallerIntent().then((async e => {
                    var o;
                    (function(t) {
                        if ("resolved" !== t.status || !t.contact) return !1;
                        t.email && !(0, E.isEmailHidden)() && !(0, E.isReadonlyEmail)() && (!(0, D.u)() || L.Xw.test(t.email) && (0, E.passesVernacularEmailGate)(t.email)) && ((0, y.setStore)(E.contactEmailStore, t.email), V.email$.set(t.email));
                        const e = (0, E.parseContact)(t.contact),
                            n = (0, G.tc)(e),
                            o = (0, G.B8)(n.code || "91");
                        return (0, y.setStore)(E.contactStore, e), (0, y.setStore)(G.MC, o), !!t.contact.startsWith("+91") && ((0, w.setCustomer)(t), !0)
                    })(e) && (0, j.p4)("truecaller"), (0, H.Z2)(e, "truecaller");
                    try {
                        e.email && !(0, E.getEmail)() && ((0, y.setStore)(E.contactEmailStore, e.email), (0, W.x)(e.email))
                    } catch (t) {}(0, M.logMeta)({
                        loggedIn: !0,
                        hasSavedAddress: !(null === (o = e.addresses) || void 0 === o || !o.length),
                        login_source: "truecaller"
                    }), null == t || t({
                        contact: e.contact,
                        email: e.email
                    });
                    const r = (0, R.BH)({
                        component: (await Promise.all([n.e(77054), n.e(71062)]).then(n.bind(n, 24986))).default,
                        props: {}
                    });
                    setTimeout((() => {
                        r.close()
                    }), 2e3)
                })).catch((e => {
                    if ([F.Sr.TRUECALLER_LOGIN_DISABLED, F.Sr.TRUECALLER_NOT_FOUND].includes(e.code)) return;
                    const n = (0, i.Jt)(p.t);
                    null == t || t({
                        error: n("could_not_verify")
                    })
                })).finally((() => {
                    (0, U.IE)()
                })))).catch((() => {}))
            }
            const Q = (0, P.Oo)(q);
            var tt = n(75155),
                et = n(37824),
                nt = n(3344),
                ot = n(98571),
                rt = n(4535),
                at = r.vUu('<button class="flex items-center py-3 text-base font-normal" type="button"><span class="italic text-on-surface-50/60"> </span> <!> <!></button>');

            function it(t, e) {
                if (new.target) return (0, o.YU)({
                    component: it,
                    ...t
                });
                r.VCO(e, !1);
                const n = () => r.Hzn(ot.t, "$t", a),
                    [a, i] = r.DZI();
                let c = r._w2(e, "onclick", 12, void 0);
                var l = {
                    get onclick() {
                        return c()
                    },
                    set onclick(t) {
                        c(t), r.bX()
                    },
                    $set: r.hpB,
                    $on: (t, n) => r.oeX(e, t, n)
                };
                r.TsN();
                var d = at(),
                    u = r.jfp(d),
                    v = r.IuP(u, !0),
                    g = r.hg4(u, 2);
                (0, s.A)(g, {
                    get src() {
                        return rt
                    },
                    alt: "Truecaller",
                    class: "ml-1 h-[14px]"
                });
                var m = r.hg4(g, 2); {
                    let t = r.Xdt((() => (r.iTV(T.XO), r.vzK((() => (0, T.XO)("chevron"))))));
                    (0, s.A)(m, {
                        get src() {
                            return r.JtY(t)
                        },
                        class: "-rotate-90 text-on-surface opacity-60"
                    })
                }
                r.cLc(d), r.vNg((t => r.jax(v, t)), [() => (n(), r.vzK((() => n()("login_using"))))]), r.kgv("click", d, (function() {
                    for (var t, e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    null === (t = c()) || void 0 === t || t.apply(this, n)
                })), r.BCw(t, d);
                var p = r.uYY(l);
                return i(), p
            }
            r.MmH(["click"]);
            var ct = n(2076),
                lt = n(26481),
                st = n(57948),
                dt = n(95896),
                ut = n(72912),
                vt = n(36750),
                gt = n(55818),
                mt = n(80146),
                pt = n(21734),
                ht = n(66194),
                ft = n(10028),
                Yt = n(47402),
                Jt = n(35777),
                Ct = n(31800),
                yt = n(47783),
                Tt = n(14494),
                _t = n(59543);

            function bt(t) {
                if (!t || Array.isArray(t) || !t.data) return {
                    ok: !1
                };
                return {
                    ok: !0,
                    availableCodes: [...t.data.promotions ? ? [], ...t.data.applied_promotions ? ? []].map((t => t.code))
                }
            }
            var wt = n(48496);
            var $t = n(60431);
            const zt = 1e4;
            let Et, St = Promise.resolve();

            function Vt(t) {
                return (0, Jt.xx)(), (0, Jt.Kd)() && t ? (Et = t, xt((() => ((0, ht.QF)(), Kt((e => async function(t, e) {
                    if (t === (0, Jt.sn)()) return;
                    if (void 0 === (0, Jt.sn)() && t === (0, _t.Lp)()) return;
                    if (t !== Et) return;
                    const n = (0, i.Jt)(ft.hV) ? ? {},
                        o = Object.keys(n).filter((t => {
                            var e, o;
                            return !(null !== (e = n[t]) && void 0 !== e && e.automaticDiscount) && "automatic" !== (null === (o = n[t]) || void 0 === o ? void 0 : o.type)
                        })),
                        r = () => e.expired || t !== Et,
                        [a, c] = (0, $t.nt)();
                    e.abort = c;
                    const l = await
                    function(t, e, n, o) {
                        return (0, _t.w6)({
                            contact: t ? ? "",
                            isRediscovery: !0,
                            timeout: e,
                            abortSymbol: n,
                            skipIf: o
                        }).then(bt)
                    }(t, zt, a, r);
                    if (e.abort = void 0, r()) return;
                    if (!l.ok) return (0, yt.log)({
                        name: "magic:coupons:contact_discovery_failed"
                    }), void await (0, ht.syncAutomaticDiscountsWithContactDetails)();
                    const s = await async function(t, e) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
                        const o = [],
                            r = [];
                        if (!t.length) return {
                            dropped: o,
                            failed: r
                        };
                        const a = new Set(e);
                        for (const e of t) {
                            if (n()) return {
                                dropped: o,
                                failed: r,
                                aborted: !0
                            };
                            if (await (0, _t.TY)(e, "contact_sync")) {
                                if (n()) return o.push(e), {
                                    dropped: o,
                                    failed: r,
                                    aborted: !0
                                };
                                a.has(e) && await (0, wt.VY)(e, !1, "contact_sync") || o.push(e)
                            } else r.push(e)
                        }
                        return {
                            dropped: o,
                            failed: r
                        }
                    }(o, l.availableCodes, r);
                    await async function(t, e, n) {
                        let {
                            dropped: o,
                            failed: r,
                            aborted: a
                        } = n;
                        const c = !e.expired && !a && t === Et;
                        c && (0, Jt.FW)(t);
                        const l = c ? await (0, ht.syncAutomaticDiscountsWithContactDetails)({
                                deferRemovedNotice: !0
                            }) : [],
                            s = [...o, ...l];
                        s.length && await async function(t) {
                            try {
                                const e = await dt.z.coupon.removeAutomaticDiscountBottomSheet();
                                (0, Ct.default)(e.default, {
                                    removedCodes: t
                                })
                            } catch {}
                        }(s);
                        (o.length || r.length) && (0, yt.log)({
                            name: "magic:coupons:contact_settle_incomplete",
                            properties: {
                                dropped_count: o.length,
                                failed_count: r.length,
                                aborted: !c
                            }
                        });
                        if (!c) return;
                        const d = (0, i.Jt)((0, Yt.iH)()) ? ? [],
                            u = d.filter((t => t.unavailable)).length;
                        (0, yt.log)({
                            name: "magic:coupons:contact_settle_completed",
                            properties: {
                                variant: (0, Tt._m)(Jt.iK),
                                eligible_count: d.length - u,
                                ineligible_count: u,
                                dropped_count: o.length,
                                failed_count: r.length
                            }
                        })
                    }(t, e, s)
                }(t, e))).finally(ht.gJ))))) : Promise.resolve()
            }

            function xt(t) {
                const e = St.then(t);
                return St = e.catch((() => {})), e
            }
            async function Kt(t) {
                let e;
                const n = {
                    expired: !1
                };
                try {
                    await Promise.race([t(n), new Promise((t => {
                        e = setTimeout((() => {
                            var e;
                            n.expired = !0, null === (e = n.abort) || void 0 === e || e.call(n), (0, yt.log)({
                                name: "magic:coupons:contact_settle_timeout"
                            }), t()
                        }), zt)
                    }))])
                } catch (t) {
                    throw (0, yt.log)({
                        name: "magic:coupons:contact_settle_failed"
                    }), t
                } finally {
                    e && clearTimeout(e)
                }
            }
            var Xt = n(45496),
                Bt = n(62897),
                At = n(12829),
                Ot = n(80532),
                kt = n(47846),
                Gt = n(97105),
                It = n(38615),
                Zt = n(82435),
                Nt = n(81137),
                Pt = n(79904),
                Rt = n(26518),
                Lt = n(9591),
                Dt = n(44837),
                jt = n(41537),
                Ft = n(6347),
                Ut = n(10542),
                Mt = n(86916),
                Ht = n(28351),
                Wt = n(56337),
                qt = n(84681),
                Qt = r.vUu('<div><img alt="rings" class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[720px] w-[720px] max-w-none -translate-x-1/2 -translate-y-1/2"/> <!></div>'),
                te = r.vUu('<p class="mt-1 text-base text-on-surface/70"><!></p>'),
                ee = r.vUu('<button type="button" data-test-id="country-code-selector"><!> <!></button>'),
                ne = r.vUu('<div class="mt-6 flex flex-col" data-testid="contact-container"><!> <!></div>'),
                oe = r.vUu('<div class="mt-2 rounded-lg bg-info-100 px-3 py-2 text-sm font-medium text-info-600"> </div>'),
                re = r.vUu('<div class="mt-4 flex flex-col" data-testid="email-container"><!> <!> <!></div>'),
                ae = r.vUu('<div class="mt-6"><!></div>'),
                ie = r.vUu('<div class="mt-3 flex justify-center"><!></div>'),
                ce = r.vUu("<!> <!>", 1),
                le = r.vUu('<div class="flex justify-center d:mt-4"><!></div>'),
                se = r.vUu('<!> <div class="-mb-2 mt-auto hidden pt-6 d:mb-6 d:flex"><!></div>', 1),
                de = r.vUu('<div><!> <div><div class="flex gap-4"><h3 class="relative z-[1] font-heading text-2xl font-semibold text-on-surface"> </h3> <!></div> <!> <!> <!> <!> <!></div></div> <div id="contact-submit"><!>  <!></div> <!>', 1);

            function ue(t, e) {
                if (new.target) return (0, o.YU)({
                    component: ue,
                    ...t
                });
                r.VCO(e, !1);
                const P = () => r.Hzn(V.yP, "$dialCode$", ft),
                    R = () => r.Hzn(V.contact$, "$contact$", ft),
                    L = () => r.Hzn(V.email$, "$email$", ft),
                    j = () => r.Hzn(Dt.a, "$isCTAFixed$", ft),
                    F = () => r.Hzn(tt.bX, "$truecallerPresent", ft),
                    H = () => r.Hzn(tt.MT, "$truecallerLoginEnabled", ft),
                    W = () => r.Hzn(p.t, "$t", ft),
                    ot = () => r.Hzn(qe, "$ctaBg$", ft),
                    rt = () => r.Hzn(Qe, "$ctaTextColor$", ft),
                    at = () => r.Hzn(We, "$ctaText$", ft),
                    [ft, Yt] = r.DZI(),
                    Ct = r.zgK(),
                    yt = r.zgK();
                let Tt = r._w2(e, "next", 12),
                    _t = r._w2(e, "showConsentCheckbox", 12, !1),
                    bt = r._w2(e, "edit", 12, !1),
                    wt = r._w2(e, "isOverlay", 12, !1),
                    $t = r._w2(e, "name", 12, "contact"),
                    zt = r._w2(e, "track", 28, (() => ({}))),
                    Et = r._w2(e, "log", 12, ""),
                    St = r._w2(e, "header", 12, ""),
                    ve = r._w2(e, "hideSubtext", 12, !1);
                const {
                    showMerchantTrustMarker: ge,
                    showPaymentMarker: me,
                    showSecuredByRazorpay: pe
                } = (0, Lt.I2)(), he = ge || me;
                let fe = r._w2(e, "hideRingsAlways", 12, !1),
                    Ye = r._w2(e, "hideSecuredAlways", 12, !1),
                    Je = r._w2(e, "hideTrustMarkers", 12, !1),
                    Ce = r._w2(e, "hideTrueCallerFlow", 12, !1),
                    ye = r._w2(e, "forceShowEmail", 12),
                    Te = r._w2(e, "forceEmailOptional", 12),
                    _e = r._w2(e, "forceShowContact", 12),
                    be = r._w2(e, "disableEmailEdit", 12, !1);
                (0, U.IE)();
                const we = ["", "!pl-[5rem]", "!pl-[5.5rem]", "!pl-[6rem]", "!pl-[6.5rem]", "!pl-[7rem]", "!pl-[7.5rem]"];
                let $e = r.zgK("IN"),
                    ze = r.zgK(""),
                    Ee = r.zgK((0, E.getEmail)() || "");
                const Se = (0, B.$p)();
                let Ve = r.zgK(!1);
                const xe = (0, z.F$)((() => Se && r.JtY(Ve)));
                let Ke = r.zgK(!1),
                    Xe = r.zgK(!1),
                    Be = r.zgK(!1),
                    Ae = r.zgK(!1),
                    Oe = r.zgK(),
                    ke = r.zgK(),
                    Ge = r.zgK(),
                    Ie = r.zgK(),
                    Ze = r.zgK(),
                    Ne = r.zgK(),
                    Pe = r.zgK(""),
                    Re = (0, Bt.Xv)(),
                    Le = Re || (0, At.J)(),
                    De = null,
                    je = null;
                const Fe = (0, mt.Zx)();
                let Ue = r.zgK(!1);
                const Me = null !== _e() && void 0 !== _e() ? _e() : (0, E.renderContact)(),
                    He = null !== ye() && void 0 !== ye() ? ye() : !(0, E.isRemoveEmailFromLoginEnabled)() && (0, E.renderEmail)() && !(0, E.showEmailOnAddressScreen)(),
                    We = (0, Ht.Dq)(Ht.iE.CONTACT_CTA_TEXT),
                    qe = (0, Ht.rQ)(Ht.iE.CONTACT_CTA_BG),
                    Qe = (0, Ht.rQ)(Ht.iE.CONTACT_CTA_TEXT_COLOR),
                    tn = (0, Zt.Br)("contact_validation_with_dial_code");
                (0, M.logRender)($t(), zt(), Et(), "Contact");
                const {
                    logChange: en
                } = (0, M.logRender)("country_code", zt(), Et(), "Contact"), {
                    logCountryChangeClick: nn,
                    logCountryChange: on,
                    logContactChange: rn,
                    logContactInput: an,
                    logContactError: cn,
                    logEmailChange: ln,
                    logEmailInput: sn,
                    logEmailError: dn,
                    logSubmit: un
                } = (0, ct.i)({
                    isOverlay: wt(),
                    edit: bt()
                });
                (0, a.Rc)((() => {
                    (0, y.setStore)(E.contactStore, (0, E.getContact)()), (0, y.setStore)(E.contactEmailStore, (0, E.getEmail)()), (0, y.setStore)(E.emailFilledInContactScreen, Boolean((0, E.getEmail)())), (0, y.setStore)(G.MC, (0, G.B8)(P())), (0, D.u)() && ((0, B.G)(), Q(mn), R() && !L() && (0, Zt.Br)("one_cc_customer_by_contact") && (0, E.fetchEmailDetailsFromContact)(R()).then((t => {
                        r.hZp(Ee, t), r.fTr(V.email$, r.JtY(Ee))
                    })).catch((() => {})), ((0, E.getContact)() || (0, E.getEmail)()) && (0, Ot.updateMagicOrder)().catch((() => {})).finally((() => {
                        (0, kt.SO)()
                    })), (0, Z.CG)({
                        event: N.kl.PAGE_VIEW,
                        category: N.R6.LOGIN,
                        params: {
                            page_title: N.R6.LOGIN
                        }
                    }));
                    const t = (0, G.tc)((0, E.getContact)());
                    t.code && t.phone && (r.fTr(V.yP, t.code), r.hZp(ze, t.phone)), r.hZp($e, (0, y.getStore)(G.MC) || (0, G.B8)(r.JtY(Ne) || "91") || "IN");
                    const e = (0, Mt.z$)({
                        contact: r.JtY(ze),
                        countryCode: r.JtY($e),
                        dialCode: P()
                    });
                    return r.hZp($e, e.countryCode), r.fTr(V.yP, e.dialCode), r.hZp(ze, e.contact), e.wasBlocked && (V.contact$.set(""), (0, y.setStore)(E.contactStore, "")), r.hZp(Ee, L()), () => {
                        if (wt() || (0, f.PS)()) return;
                        r.fTr(Dt.a, !0);
                        const t = (0, Y.iT)("#bottom-container #contact-submit");
                        t && (0, Y.Nz)(t)
                    }
                })), (0, a.Rc)((async () => {
                    if (wt() || (0, f.PS)()) return;
                    (0, D.u)() && r.fTr(Dt.J, !0);
                    const t = (0, Y.iT)("#contact-submit");
                    let e = ge || me;
                    try {
                        if ((0, Lt.nh)() && (e || pe)) {
                            const [n, o] = (0, ut._7)(), a = setInterval((() => {
                                const t = !(0, D.u)() || (0, jt.OK)("#overview-container") > 20;
                                (0, jt.OK)("#merchant-identity", "#overview-container") && t && (clearInterval(a), o())
                            }), 100);
                            await n;
                            let i = 190;
                            const c = (0, Xt.pq)().showBuyerProtect || !1;
                            e ? i = pe && ge ? 190 : !pe && ge ? 160 : 135 : pe && (i = 90);
                            const l = (null === r.JtY(Ie) || void 0 === r.JtY(Ie) ? void 0 : r.JtY(Ie).clientHeight) || 0;
                            if (window.innerHeight - (l || 190) - (c ? 44 : 0) - ((0, jt.OK)("#merchant-identity", "#overview-container") || 387) - ((0, jt.OK)("#bottom-container") + 76) - 24 > i) return t.style.padding = "1rem 0", void r.fTr(Dt.a, !1)
                        }
                    } catch (t) {}
                    const n = (0, Y.iT)("#bottom-container");
                    n && t && (r.fTr(Dt.a, !0), (0, Y.NI)(n, t))
                })), (0, a.sA)((() => {
                    null == je || je.destroy(), wt() || (0, f.PS)() || r.fTr(Dt.J, !1)
                }));

                function vn(t, e) {
                    r.hZp(Ne, t), r.fTr(V.yP, t), r.hZp(ze, e);
                    const n = pn(e);
                    r.fTr(V.contact$, n), (0, y.setStore)(E.contactStore, n), (0, y.setStore)(G.MC, (0, G.B8)(t) || r.JtY($e)), Vt(n).catch((() => {}))
                }
                async function gn() {
                    return De || (De = n.e(45189).then(n.bind(n, 45189)).then((t => {
                        let {
                            createPhoneNumberHintClient: e
                        } = t;
                        return e({
                            getDialCode: () => r.JtY(Ne),
                            getPhone: () => r.JtY(ze),
                            getContact: () => (0, E.getContact)(),
                            isTruecallerAvailable: () => Boolean(F()) && Boolean(H()),
                            setHintResult: vn
                        })
                    })).catch((() => {
                        De = void 0
                    }))), je = await De, je
                }
                async function mn(t) {
                    if (t.error) return void r.hZp(Pe, t.error || "");
                    const e = (0, G.tc)(t.contact);
                    r.hZp(ze, e.phone || t.contact), r.hZp(Ee, t.email || L()), r.fTr(V.yP, e.code || P()), r.fTr(V.email$, t.email || L()), r.hZp($e, (0, y.getStore)(G.MC) || r.JtY($e));
                    const n = (0, Mt.z$)({
                        countryCode: r.JtY($e),
                        dialCode: P()
                    });
                    r.hZp($e, n.countryCode), r.fTr(V.yP, n.dialCode), await (0, a.io)(), hn()
                }

                function pn() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return t ? `+${r.JtY(Ne)}${(0,G.Z)(t,r.JtY($e))}` : ""
                }

                function hn() {
                    try {
                        if (Me && r.JtY(ze)) {
                            const t = pn(r.JtY(ze));
                            (0, O.S6)(O.b_.CONTACT, t) && (0, O.O5)(O.b_.CONTACT, t, O.u2.USER_INPUT)
                        }
                    } catch (t) {}
                    return null === r.JtY(Oe) || void 0 === r.JtY(Oe) ? void 0 : r.JtY(Oe).handleSubmit({
                        target: {
                            name: "contact"
                        }
                    })
                }

                function fn() {
                    return dt.z.notificationsConsent()
                }
                async function Yn() {
                    var t;
                    nn();
                    const e = await (0, k.qW)(r.JtY($e));
                    e && (r.hZp($e, e.code), null == en || en({
                        country_code_selected: r.JtY($e)
                    }), r.hZp(Ne, e.details.dial_code), null === r.JtY(Oe) || void 0 === r.JtY(Oe) || r.JtY(Oe).refresh(), on({
                        value: r.JtY(Ne),
                        properties: {
                            country_code: r.JtY($e),
                            country_name: null === (t = null == e ? void 0 : e.details) || void 0 === t ? void 0 : t.name,
                            country_dial_code: r.JtY(Ne)
                        }
                    }))
                }

                function Jn(t) {
                    r.hZp(Ze, t)
                }

                function Cn() {
                    Boolean(H()) && Boolean(F()) && !Ce() ? q(mn) : async function() {
                        const t = await gn();
                        t && await t.maybeTrigger()
                    }().catch((() => {}))
                }

                function yn(t) {
                    r.hZp(ze, t), (0, Zt.Br)("one_cc_customer_by_contact") && (0, D.u)() && (async () => {
                        try {
                            if ((await (0, X.Q)({
                                    contact: r.JtY(ze)
                                }, r.JtY($e), !1)).contact) return;
                            const t = pn(r.JtY(ze)),
                                e = await (0, E.fetchEmailDetailsFromContact)(t);
                            (0, J.Kg)(e) && e.trim().length > 0 && (r.hZp(Ee, e), r.fTr(V.email$, r.JtY(Ee)))
                        } catch (t) {}
                    })().catch((() => {})), an()
                }

                function Tn() {
                    He ? null === r.JtY(Ge) || void 0 === r.JtY(Ge) || r.JtY(Ge).focus() : null === r.JtY(ke) || void 0 === r.JtY(ke) || r.JtY(ke).click()
                }
                r.M3l((() => (D.u, L())), (() => {
                    (0, D.u)() && r.hZp(Ee, L())
                })), r.M3l((() => (r.JtY(Ve), A._, r.JtY(Ee))), (() => {
                    r.hZp(Ct, !r.JtY(Ve) && (0, A._)(r.JtY(Ee), Se))
                })), r.M3l((() => P()), (() => {
                    r.hZp(Ne, P())
                })), r.M3l((() => (D.u, G.tc, R(), P())), (() => {
                    if ((0, D.u)()) {
                        const t = (0, G.tc)(R());
                        r.hZp(Ne, t.code || P()), r.hZp(ze, t.phone)
                    }
                })), r.M3l((() => (z.dL, r.JtY(Ne), r.JtY($e))), (() => {
                    r.hZp(yt, (0, z.dL)(r.JtY(Ne), r.JtY($e)))
                })), r.M3l((() => r.JtY(Ze)), (() => {
                    ! function(t) {
                        if (wt()) return;
                        const e = t - (He ? 280 : 195);
                        r.hZp(Be, (0, f.PS)() && !fe() ? (0, D.u)() : t > (He ? 500 : 420)), e > 0 && !r.JtY(Ae) ? r.hZp(Ae, e > 50) : e < 0 && r.JtY(Ae) && r.hZp(Ae, e > -50)
                    }(r.JtY(Ze))
                })), r.M3l((() => (r.JtY(Ct), r.JtY(Ke), a.io, r.JtY(Oe))), (() => {
                    r.JtY(Ct) && !r.JtY(Ke) && (r.hZp(Ke, !0), r.hZp(Xe, !0), He && (dn({
                        value: "prefill_invalid_on_load"
                    }), (0, a.io)().then((() => null === r.JtY(Oe) || void 0 === r.JtY(Oe) ? void 0 : r.JtY(Oe).refresh("prefill_invalid", "email"))).catch((() => {}))))
                })), r.iqF();
                var _n = {
                    get next() {
                        return Tt()
                    },
                    set next(t) {
                        Tt(t), r.bX()
                    },
                    get showConsentCheckbox() {
                        return _t()
                    },
                    set showConsentCheckbox(t) {
                        _t(t), r.bX()
                    },
                    get edit() {
                        return bt()
                    },
                    set edit(t) {
                        bt(t), r.bX()
                    },
                    get isOverlay() {
                        return wt()
                    },
                    set isOverlay(t) {
                        wt(t), r.bX()
                    },
                    get name() {
                        return $t()
                    },
                    set name(t) {
                        $t(t), r.bX()
                    },
                    get track() {
                        return zt()
                    },
                    set track(t) {
                        zt(t), r.bX()
                    },
                    get log() {
                        return Et()
                    },
                    set log(t) {
                        Et(t), r.bX()
                    },
                    get header() {
                        return St()
                    },
                    set header(t) {
                        St(t), r.bX()
                    },
                    get hideSubtext() {
                        return ve()
                    },
                    set hideSubtext(t) {
                        ve(t), r.bX()
                    },
                    get hideRingsAlways() {
                        return fe()
                    },
                    set hideRingsAlways(t) {
                        fe(t), r.bX()
                    },
                    get hideSecuredAlways() {
                        return Ye()
                    },
                    set hideSecuredAlways(t) {
                        Ye(t), r.bX()
                    },
                    get hideTrustMarkers() {
                        return Je()
                    },
                    set hideTrustMarkers(t) {
                        Je(t), r.bX()
                    },
                    get hideTrueCallerFlow() {
                        return Ce()
                    },
                    set hideTrueCallerFlow(t) {
                        Ce(t), r.bX()
                    },
                    get forceShowEmail() {
                        return ye()
                    },
                    set forceShowEmail(t) {
                        ye(t), r.bX()
                    },
                    get forceEmailOptional() {
                        return Te()
                    },
                    set forceEmailOptional(t) {
                        Te(t), r.bX()
                    },
                    get forceShowContact() {
                        return _e()
                    },
                    set forceShowContact(t) {
                        _e(t), r.bX()
                    },
                    get disableEmailEdit() {
                        return be()
                    },
                    set disableEmailEdit(t) {
                        be(t), r.bX()
                    },
                    $set: r.hpB,
                    $on: (t, n) => r.oeX(e, t, n)
                };
                r.TsN(); {
                    let n = r.Xdt((() => ({
                            edit: bt()
                        }))),
                        o = r.Xdt((() => (r.iTV(M.EVENTS), r.vzK((() => `${M.EVENTS.MOUNT},${M.EVENTS.CLICK},${M.EVENTS.VALIDATE},${M.EVENTS.SUBMIT}`)))));
                    r.Lcc((0, d.lV)(t, {
                        name: "contactForm",
                        get track() {
                            return r.JtY(n)
                        },
                        onSubmit: async function(t) {
                            let e = Me ? pn(t.contact) : R();
                            try {
                                (0, c.isValidPhoneNumber)(e, r.JtY($e)) && (e = (0, c.parsePhoneNumber)(e).dialCode ? e : `+91${e}`)
                            } catch (t) {
                                (0, gt.default)(t, {
                                    severity: lt.m.S1
                                })
                            }
                            const n = (0, E.getContact)(),
                                o = (0, i.Jt)((0, w.getCustomer$)()),
                                a = e !== n;
                            (0, D.u)() && a && n && !He && (0, E.resetEmailForContactChange)();
                            const l = He ? t.email : (0, i.Jt)(V.email$),
                                s = (0, $.AD)() ? n && a && o : a && o;
                            if (s && (0, b.r)().catch((() => {})), (0, S.RI)(await (0, X.Q)({ ...t,
                                    contact: tn ? e : null == t ? void 0 : t.contact
                                }, r.JtY($e), He, Me))) return V.contact$.set(e), V.email$.set(l), V.yP.set(r.JtY(Ne)), (0, y.setStore)(E.contactStore, e), Vt(e).catch((() => {})), l && (0, y.setStore)(E.contactEmailStore, l), (0, y.setStore)(E.emailFilledInContactScreen, Boolean(l)), (0, y.setStore)(G.MC, r.JtY($e)), (e || l) && C.y({
                                contact: e,
                                email: l
                            }), (0, x.YY)() && (0, K.k)((0, I.g)(), "isContactEligibleForCRED", e), !(0, Rt.EO)() || (0, f.PS)() && wt() || (0, Rt.nl)(), un(), (0, It.$)() && !s && (0, Gt.Z)().then((t => {
                                t.refreshRazorpayWalletDetails()
                            })), f.tO && await (0, ut.cb)(300), Tt()()
                        },
                        validator: t => (0, X.Q)({
                            email: L(),
                            ...t,
                            contact: tn ? pn((null == t ? void 0 : t.contact) ? ? (0, G.tc)(R()).phone) : (null == t ? void 0 : t.contact) ? ? (0, G.tc)(R()).phone
                        }, r.JtY($e), He, Me),
                        get log() {
                            return r.JtY(o)
                        },
                        class: "flex w-full grow flex-col overflow-hidden p-6 pb-0 d:m-auto d:w-[21.45rem] d:overflow-visible d:px-0",
                        children: r.y8B,
                        $$slots: {
                            default: (t, n) => {
                                const o = r.Xdt((() => n.touched)),
                                    i = r.Xdt((() => n.errors)),
                                    c = r.Xdt((() => n.logClick)),
                                    d = r.Xdt((() => n.formData));
                                var p = de(),
                                    Y = r.esp(p),
                                    J = r.jfp(Y),
                                    C = t => {
                                        var e = Qt(),
                                            n = r.jfp(e),
                                            o = r.hg4(n, 2); {
                                            let t = r.Xdt((() => (r.iTV(T.XO), r.vzK((() => (0, T.XO)("user"))))));
                                            (0, s.A)(o, {
                                                get src() {
                                                    return r.JtY(t)
                                                }
                                            })
                                        }
                                        r.cLc(e), r.vNg((() => {
                                            r.ysU(e, 1, "pointer-events-none relative mb-5 flex aspect-square h-8 w-8 items-center justify-center rounded-lg border border-on-surface/15 " + (He ? "mt-6" : "mt-10 d:mt-20")), r.aIK(n, "src", _)
                                        })), r.BCw(t, e)
                                    },
                                    b = r.unG((() => (r.JtY(Be), r.iTV(Nt.isEmandateCAWFlow), r.iTV(f.PS), r.vzK((() => r.JtY(Be) && !(0, Nt.isEmandateCAWFlow)() && ((0, f.PS)() || !he && !(0, f.PS)()))))));
                                r.if(J, (t => {
                                    r.JtY(b) && t(C)
                                }));
                                var w = r.hg4(J, 2),
                                    $ = r.jfp(w),
                                    z = r.jfp($),
                                    S = r.IuP(z, !0),
                                    x = r.hg4(z, 2);
                                r.NIy(x, e, "header-icon", {}, null), r.cLc($);
                                var K = r.hg4($, 2),
                                    B = t => {
                                        var e = te(),
                                            n = r.jfp(e),
                                            o = t => {
                                                var e = r.Qq7();
                                                r.vNg((t => r.jax(e, t)), [() => (W(), r.vzK((() => W()("add_your_email_mobile_number"))))]), r.BCw(t, e)
                                            },
                                            a = t => {
                                                var e = r.Qq7();
                                                r.vNg((t => r.jax(e, t)), [() => (W(), r.vzK((() => W()("add_your_mobile_number"))))]), r.BCw(t, e)
                                            },
                                            i = t => {
                                                var e = r.Qq7();
                                                r.vNg((t => r.jax(e, t)), [() => (W(), r.vzK((() => W()("add_your_email_number"))))]), r.BCw(t, e)
                                            };
                                        r.if(n, (t => {
                                            Me && He ? t(o) : Me ? t(a, 1) : He && t(i, 2)
                                        })), r.cLc(e), r.BCw(t, e)
                                    };
                                r.if(K, (t => {
                                    ve() || t(B)
                                }));
                                var A = r.hg4(K, 2),
                                    O = t => {
                                        var e = ne(),
                                            n = r.jfp(e); {
                                            let t = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => !(0, Wt.G$)()))))),
                                                e = r.Xdt((() => (W(), r.iTV(E.isOptionalContact), r.iTV(_e()), r.vzK((() => W()((0, E.isOptionalContact)() && !_e() ? "enter_contact_optional_placeholder" : "enter_contact_input_placeholder")))))),
                                                a = r.Xdt((() => (r.iTV(Wt.G$), W(), r.iTV(E.isOptionalContact), r.iTV(_e()), r.vzK((() => (0, Wt.G$)() ? W()((0, E.isOptionalContact)() && !_e() ? "enter_contact_optional_placeholder" : "enter_contact_input_placeholder") : void 0))))),
                                                d = r.Xdt((() => (r.iTV(Wt.G$), r.iTV(r.JtY(o)), r.JtY(Pe), r.iTV(r.JtY(i)), r.vzK((() => (0, Wt.G$)() && r.JtY(o).contact && (r.JtY(Pe) || r.JtY(i).contact) || void 0))))),
                                                u = r.Xdt((() => (r.iTV(Wt.G$), r.JtY(Ne), r.vzK((() => (0, Wt.G$)() ? `+${r.JtY(Ne)}` : void 0))))),
                                                v = r.Xdt((() => (r.iTV(Wt.G$), r.iTV(qt.xg), r.JtY($e), r.vzK((() => (0, Wt.G$)() ? (0, qt.xg)(r.JtY($e)) : void 0))))),
                                                g = r.Xdt((() => (r.iTV(Wt.G$), r.iTV(E.isReadonlyContact), r.iTV(Mt.cz), r.vzK((() => !(0, Wt.G$)() || Re || (0, E.isReadonlyContact)() || (0, Mt.cz)() ? void 0 : Yn))))),
                                                m = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => (0, Wt.G$)() ? He ? "next" : "done" : void 0))))),
                                                p = r.Xdt((() => (r.iTV(E.isOptionalContact), r.iTV(_e()), r.vzK((() => !(0, E.isOptionalContact)() || _e()))))),
                                                h = r.Xdt((() => (r.iTV(E.isReadonlyContact), r.vzK(E.isReadonlyContact)))),
                                                Y = r.Xdt((() => (r.iTV(E.getContact), r.vzK(E.getContact)))),
                                                J = r.Xdt((() => (r.iTV(r.JtY(o)), r.iTV(r.JtY(i)), r.vzK((() => r.JtY(o).contact && Boolean(r.JtY(i).contact)))))),
                                                C = r.Xdt((() => (r.iTV(r.JtY(i)), r.JtY(Ne), r.iTV("91"), r.JtY(ze), r.vzK((() => {
                                                    var t;
                                                    return !r.JtY(i).contact && "91" === r.JtY(Ne) && 10 === (null === (t = r.JtY(ze)) || void 0 === t ? void 0 : t.length)
                                                }))))),
                                                _ = r.Xdt((() => (r.iTV(Wt.G$), r.JtY(Ne), r.vzK((() => {
                                                    var t;
                                                    return (0, Wt.G$)() ? "w-full text-lg font-normal" : `w-full border-primary-500 border-opacity-20 !bg-surface-0 pl-20 font-normal placeholder:text-on-surface-50 placeholder:text-opacity-60 d:min-w-[16rem] ${null!==(t=r.JtY(Ne))&&void 0!==t&&t.length?we[r.JtY(Ne).length]:""}`
                                                })))));
                                            (0, l.A)(n, {
                                                "data-testid": "contactNumber",
                                                get withLeftSlot() {
                                                    return r.JtY(t)
                                                },
                                                get skipIphoneInternalBlur() {
                                                    return He
                                                },
                                                onclick: () => {
                                                    var t;
                                                    if (Cn(), null === (t = r.JtY(c)) || void 0 === t || t({
                                                            target: "contactField"
                                                        }), r.hZp(Pe, ""), f.YT && He) {
                                                        const t = document.getElementById("scroll-container");
                                                        t && t.scrollTo({
                                                            top: t.scrollHeight,
                                                            behavior: "smooth"
                                                        })
                                                    }
                                                },
                                                get placeholder() {
                                                    return r.JtY(e)
                                                },
                                                get label() {
                                                    return r.JtY(a)
                                                },
                                                get error() {
                                                    return r.JtY(d)
                                                },
                                                get "data-prefix" () {
                                                    return r.JtY(u)
                                                },
                                                get "data-starticon" () {
                                                    return r.JtY(v)
                                                },
                                                get onstarticonclick() {
                                                    return r.JtY(g)
                                                },
                                                get enterkeyhint() {
                                                    return r.JtY(m)
                                                },
                                                type: "tel",
                                                get required() {
                                                    return r.JtY(p)
                                                },
                                                name: "contact",
                                                get readonly() {
                                                    return r.JtY(h)
                                                },
                                                log: "render,change",
                                                get parse() {
                                                    return r.JtY(yt), r.vzK((() => r.JtY(yt).raw))
                                                },
                                                get format() {
                                                    return r.JtY(yt), r.vzK((() => r.JtY(yt).pretty))
                                                },
                                                get defaultValue() {
                                                    return r.JtY(Y)
                                                },
                                                get invalid() {
                                                    return r.JtY(J)
                                                },
                                                get value() {
                                                    return r.JtY(ze)
                                                },
                                                onChange: yn,
                                                onblur: () => {
                                                    if ((0, y.setStore)(E.formErrorInContactScreen, !!r.JtY(i).contact), !r.JtY(i).contact) {
                                                        const t = pn(r.JtY(ze));
                                                        !(0, Jt.Kd)() && (0, ht.uV)(t, void 0) && (0, ht.syncAutomaticDiscountsWithContactDetails)(), (0, D.u)() && (r.fTr(V.contact$, t), Vt(t).catch((() => {})), (0, ct.u)({
                                                            phone: R(),
                                                            email: L()
                                                        }), (0, Ot.updatePartialMagicOrder)({
                                                            contact: R()
                                                        }), (0, y.setStore)(E.contactOnBlurInContactScreen, R())), rn({
                                                            value: r.JtY(ze)
                                                        })
                                                    }
                                                },
                                                get filled() {
                                                    return r.JtY(C)
                                                },
                                                onfilled: Tn,
                                                get class() {
                                                    return r.JtY(_)
                                                },
                                                $$slots: {
                                                    left: (t, e) => {
                                                        var n = r.Imx(),
                                                            o = r.esp(n),
                                                            a = t => {},
                                                            i = r.unG((() => (r.iTV(Wt.G$), r.vzK(Wt.G$)))),
                                                            c = t => {
                                                                var e = ee();
                                                                let n;
                                                                var o = r.jfp(e);
                                                                (0, st.A)(o, {
                                                                    get countryCode() {
                                                                        return r.JtY($e)
                                                                    }
                                                                });
                                                                var a = r.hg4(o),
                                                                    i = r.hg4(a),
                                                                    c = t => {
                                                                        {
                                                                            let e = r.Xdt((() => (r.iTV(T.XO), r.vzK((() => (0, T.XO)("chevron"))))));
                                                                            (0, s.A)(t, {
                                                                                class: "h-4 w-4 ",
                                                                                get src() {
                                                                                    return r.JtY(e)
                                                                                }
                                                                            })
                                                                        }
                                                                    },
                                                                    l = r.unG((() => (r.iTV(Mt.cz), r.vzK((() => !Le && !(0, Mt.cz)())))));
                                                                r.if(i, (t => {
                                                                    r.JtY(l) && t(c)
                                                                })), r.cLc(e), r.vNg(((t, o) => {
                                                                    n = r.ysU(e, 1, "ml-4 flex items-center gap-0.5 text-lg disabled:opacity-50 d:text-base", null, n, {
                                                                        "cursor-pointer": t
                                                                    }), e.disabled = o, r.jax(a, ` +${r.JtY(Ne)??""} `)
                                                                }), [() => !Le && !(0, Mt.cz)(), () => (r.iTV(E.isReadonlyContact), r.iTV(Mt.cz), r.vzK((() => Le || (0, E.isReadonlyContact)() || (0, Mt.cz)())))]), r.kgv("click", e, Yn), r.BCw(t, e)
                                                            };
                                                        r.if(o, (t => {
                                                            r.JtY(i) ? t(a) : t(c, -1)
                                                        })), r.BCw(t, n)
                                                    }
                                                }
                                            })
                                        }
                                        var a = r.hg4(n, 2); {
                                            let t = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => (0, Wt.G$)() ? "hidden" : ""))))),
                                                e = r.Xdt((() => (r.iTV(r.JtY(o)), r.JtY(Pe), r.iTV(r.JtY(i)), r.vzK((() => r.JtY(o).contact && (r.JtY(Pe) || r.JtY(i).contact))))));
                                            (0, v.A)(a, {
                                                name: "contact",
                                                get class() {
                                                    return r.JtY(t)
                                                },
                                                get error() {
                                                    return r.JtY(e)
                                                },
                                                onChange: t => t && cn({
                                                    value: t,
                                                    previous: r.JtY(ze)
                                                })
                                            })
                                        }
                                        r.cLc(e), r.BCw(t, e)
                                    };
                                r.if(A, (t => {
                                    Me && t(O)
                                }));
                                var k = r.hg4(A, 2),
                                    G = t => {
                                        var e = re(),
                                            n = r.jfp(e); {
                                            let t = r.Xdt((() => (W(), r.iTV(E.isOptionalEmail), r.iTV(ye()), r.iTV(Te()), r.vzK((() => W()(!(0, E.isOptionalEmail)() || ye() && !Te() ? "enter_email_placeholder" : "enter_email_optional_placeholder")))))),
                                                e = r.Xdt((() => (r.iTV(Wt.G$), W(), r.iTV(E.isOptionalEmail), r.iTV(ye()), r.iTV(Te()), r.vzK((() => (0, Wt.G$)() ? W()(!(0, E.isOptionalEmail)() || ye() && !Te() ? "enter_email_placeholder" : "enter_email_optional_placeholder") : void 0))))),
                                                c = r.Xdt((() => (r.iTV(Wt.G$), r.iTV(r.JtY(o)), r.JtY(Ct), r.iTV(r.JtY(i)), r.vzK((() => (0, Wt.G$)() && (r.JtY(o).email || r.JtY(Ct)) && r.JtY(i).email || void 0))))),
                                                s = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => (0, Wt.G$)() ? "clear" : void 0))))),
                                                u = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => (0, Wt.G$)() ? "done" : void 0))))),
                                                v = r.Xdt((() => (r.iTV(E.isOptionalEmail), r.iTV(ye()), r.iTV(Te()), r.vzK((() => !(0, E.isOptionalEmail)() || ye() && !Te()))))),
                                                g = r.Xdt((() => (r.iTV(E.isReadonlyEmail), r.iTV(be()), r.JtY(Xe), r.vzK((() => ((0, E.isReadonlyEmail)() || be()) && !r.JtY(Xe)))))),
                                                m = r.Xdt((() => (r.iTV(E.getEmail), r.vzK(E.getEmail)))),
                                                p = r.Xdt((() => (r.iTV(Wt.G$), r.vzK((() => (0, Wt.G$)() ? "w-full text-lg font-normal" : "w-full border-primary-500 border-opacity-20 !bg-surface-0 font-normal placeholder:text-on-surface-50 placeholder:text-opacity-60 d:min-w-[16rem]"))))),
                                                h = r.Xdt((() => (r.iTV(r.JtY(o)), r.JtY(Ct), r.iTV(r.JtY(i)), r.vzK((() => (r.JtY(o).email || r.JtY(Ct)) && Boolean(r.JtY(i).email))))));
                                            (0, l.A)(n, {
                                                get placeholder() {
                                                    return r.JtY(t)
                                                },
                                                get label() {
                                                    return r.JtY(e)
                                                },
                                                get error() {
                                                    return r.JtY(c)
                                                },
                                                get "data-endicon" () {
                                                    return r.JtY(s)
                                                },
                                                get enterkeyhint() {
                                                    return r.JtY(u)
                                                },
                                                get required() {
                                                    return r.JtY(v)
                                                },
                                                "data-testid": "email",
                                                name: "email",
                                                inputmode: "email",
                                                get readonly() {
                                                    return r.JtY(g)
                                                },
                                                get parse() {
                                                    return r.vzK((() => xe.raw))
                                                },
                                                get format() {
                                                    return r.vzK((() => xe.pretty))
                                                },
                                                log: "render,change",
                                                get pattern() {
                                                    return X.z
                                                },
                                                get defaultValue() {
                                                    return r.JtY(m)
                                                },
                                                get value() {
                                                    return r.JtY(Ee)
                                                },
                                                oninput: () => {
                                                    r.hZp(Ve, !0), sn()
                                                },
                                                onChange: t => {
                                                    r.hZp(Ee, String(t ? ? "")), (0, a.io)().then((() => {
                                                        var t;
                                                        return null === (t = r.JtY(Oe)) || void 0 === t ? void 0 : t.refresh("reparse", "email")
                                                    })).catch((() => {}))
                                                },
                                                onblur: () => {
                                                    if ((0, y.setStore)(E.formErrorInContactScreen, !!r.JtY(i).email), !r.JtY(i).email) {
                                                        const t = r.JtY(d).email ? ? r.JtY(Ee);
                                                        (0, ht.uV)(void 0, t) && ((0, Jt.xx)(), (0, Jt.Kd)() ? xt((() => Kt((() => (0, ht.syncAutomaticDiscountsWithContactDetails)().then((() => {})))))) : (0, ht.syncAutomaticDiscountsWithContactDetails)().then((() => {}))).catch((() => {})), (0, D.u)() && ((0, y.setStore)(E.contactEmailStore, t ? ? ""), r.fTr(V.email$, t), (0, ct.u)({
                                                            phone: R(),
                                                            email: L()
                                                        }), (0, Ot.updatePartialMagicOrder)({
                                                            email: L()
                                                        }), (0, y.setStore)(E.emailOnBlurInContactScreen, L())), ln({
                                                            value: t
                                                        })
                                                    }
                                                },
                                                get class() {
                                                    return r.JtY(p)
                                                },
                                                get invalid() {
                                                    return r.JtY(h)
                                                },
                                                get ref() {
                                                    return r.JtY(Ge)
                                                },
                                                set ref(t) {
                                                    r.hZp(Ge, t)
                                                },
                                                $$legacy: !0
                                            })
                                        }
                                        var c = r.hg4(n, 2),
                                            s = t => {
                                                (0, v.A)(t, {
                                                    name: "email",
                                                    get error() {
                                                        return r.iTV(r.JtY(i)), r.vzK((() => r.JtY(i).email))
                                                    }
                                                })
                                            },
                                            u = r.unG((() => (r.iTV(r.JtY(o)), r.JtY(Ct), r.iTV(Wt.G$), r.vzK((() => (r.JtY(o).email || r.JtY(Ct)) && !(0, Wt.G$)())))));
                                        r.if(c, (t => {
                                            r.JtY(u) && t(s)
                                        }));
                                        var g = r.hg4(c, 2),
                                            m = t => {
                                                var e = oe(),
                                                    n = r.IuP(e, !0);
                                                r.vNg((t => r.jax(n, t)), [() => (W(), r.vzK((() => W()("email_edit_disabled"))))]), r.BCw(t, e)
                                            };
                                        r.if(g, (t => {
                                            be() && t(m)
                                        })), r.cLc(e), r.BCw(t, e)
                                    };
                                r.if(k, (t => {
                                    He && t(G)
                                }));
                                var I = r.hg4(k, 2),
                                    Z = t => {
                                        {
                                            let e = r.Xdt((() => r.vzK(fn)));
                                            (0, g.A)(t, {
                                                get promise() {
                                                    return r.JtY(e)
                                                },
                                                children: r.y8B,
                                                $$slots: {
                                                    default: (t, e) => {
                                                        const n = r.Xdt((() => e.data));
                                                        var o = ae(),
                                                            a = r.jfp(o);
                                                        r.s9R(a, (() => r.JtY(n).component), ((t, e) => {
                                                            e(t, {})
                                                        })), r.cLc(o), r.BCw(t, o)
                                                    }
                                                }
                                            })
                                        }
                                    };
                                r.if(I, (t => {
                                    _t() && t(Z)
                                }));
                                var N = r.hg4(I, 2),
                                    P = t => {
                                        var e = ie();
                                        it(r.jfp(e), {
                                            onclick: () => {
                                                q(mn, !0)
                                            }
                                        }), r.cLc(e), r.BCw(t, e)
                                    };
                                r.if(N, (t => {
                                    !H() || !0 !== F() || Ce() || he || t(P)
                                })), r.cLc(w), r.Lcc(w, (t => r.hZp(Ie, t)), (() => r.JtY(Ie))), r.cLc(Y), r.XId(Y, ((t, e) => null === vt.o || void 0 === vt.o ? void 0 : (0, vt.o)(t, e)), (() => Jn));
                                var U = r.hg4(Y, 2),
                                    M = r.jfp(U); {
                                    let t = r.Xdt((() => r.Hzn(Fe, "$isApplyingCoupon$", ft) || r.JtY(Ue))),
                                        e = r.Xdt((() => `${ot()?`background: ${ot()};`:""}${rt()?` color: ${rt()};`:""}`));
                                    (0, u.Ay)(M, {
                                        onClick: async () => {
                                            r.hZp(Ue, !0);
                                            try {
                                                const e = await hn();
                                                var t;
                                                if (!(0, f.PS)() && void 0 === e) null === (t = r.JtY(Ie)) || void 0 === t || t.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                })
                                            } finally {
                                                r.hZp(Ue, !1)
                                            }
                                        },
                                        class: "w-full",
                                        type: "button",
                                        get loading() {
                                            return r.JtY(t)
                                        },
                                        validateForm: !0,
                                        get style() {
                                            return r.JtY(e)
                                        },
                                        get ref() {
                                            return r.JtY(ke)
                                        },
                                        set ref(t) {
                                            r.hZp(ke, t)
                                        },
                                        children: (t, e) => {
                                            r.K2T();
                                            var n = r.Qq7();
                                            r.vNg((t => r.jax(n, t)), [() => (at(), W(), r.iTV(h.P6), r.vzK((() => at() || W()(h.P6))))]), r.BCw(t, n)
                                        },
                                        $$slots: {
                                            default: !0
                                        },
                                        $$legacy: !0
                                    })
                                }
                                var Q = r.hg4(M, 2),
                                    tt = t => {
                                        {
                                            let e = r.Xdt((() => (r.iTV(Pt.N), r.vzK(Pt.N))));
                                            (0, m.A)(t, {
                                                get promise() {
                                                    return r.JtY(e)
                                                },
                                                showDefaultShimmer: !1,
                                                children: r.y8B,
                                                $$slots: {
                                                    default: (t, e) => {
                                                        const n = r.Xdt((() => e.Component));
                                                        r.JtY(n)(t, {
                                                            class: "mt-2"
                                                        })
                                                    }
                                                }
                                            })
                                        }
                                    },
                                    lt = r.unG((() => (r.iTV(f.PS), r.iTV(Rt.ce), r.iTV(Rt.Ah), r.vzK((() => !(0, f.PS)() && !(0, Rt.ce)() && (0, Rt.Ah)()))))),
                                    dt = t => {
                                        var e = ce(),
                                            n = r.esp(e),
                                            o = t => {
                                                {
                                                    let e = r.Xdt((() => (r.iTV(Xt.ex), r.vzK(Xt.ex))));
                                                    (0, m.A)(t, {
                                                        get promise() {
                                                            return r.JtY(e)
                                                        },
                                                        children: r.y8B,
                                                        $$slots: {
                                                            default: (t, e) => {
                                                                const n = r.Xdt((() => e.Component));
                                                                r.JtY(n)(t, {
                                                                    type: "banner",
                                                                    get page() {
                                                                        return pt.G5
                                                                    },
                                                                    class: "mt-3 [&+.js-secured-by]:hidden"
                                                                })
                                                            }
                                                        }
                                                    })
                                                }
                                            },
                                            a = r.unG((() => (r.iTV(Ut.w), r.vzK((() => !(0, Ut.w)())))));
                                        r.if(n, (t => {
                                            r.JtY(a) && t(o)
                                        }));
                                        var i = r.hg4(n, 2),
                                            c = t => {
                                                {
                                                    let e = r.Xdt((() => `js-secured-by ${j()?"mt-3 pb-3":"mt-0"} d:hidden`));
                                                    (0, nt.A)(t, {
                                                        get class() {
                                                            return r.JtY(e)
                                                        }
                                                    })
                                                }
                                            };
                                        r.if(i, (t => {
                                            !r.JtY(Ae) || Ye() || !wt() && pe && !wt() || t(c)
                                        })), r.BCw(t, e)
                                    };
                                r.if(Q, (t => {
                                    r.JtY(lt) ? t(tt) : t(dt, -1)
                                })), r.cLc(U);
                                var ut = r.hg4(U, 2),
                                    gt = t => {
                                        var e = se(),
                                            n = r.esp(e),
                                            o = t => {
                                                var e = le(),
                                                    n = r.jfp(e);
                                                (0, Ft.A)(n, {}), r.cLc(e), r.BCw(t, e)
                                            },
                                            a = r.unG((() => (r.iTV(f.PS), r.vzK((() => (0, f.PS)() && (ge || me))))));
                                        r.if(n, (t => {
                                            r.JtY(a) && t(o)
                                        }));
                                        var i = r.hg4(n, 2),
                                            c = r.jfp(i),
                                            l = t => {
                                                (0, et.A)(t, {})
                                            };
                                        r.if(c, (t => {
                                            (ge || me) && t(l)
                                        })), r.cLc(i), r.BCw(t, e)
                                    };
                                r.if(ut, (t => {
                                    Je() || t(gt)
                                })), r.vNg((t => {
                                    r.ysU(Y, 1, `relative flex flex-col d:grow-0 ${wt()?"":"grow"} ${j()?"":"justify-center"}`), r.jax(S, t), r.ysU(U, 1, `bg-surface p-4 d:mt-2 d:px-0 ${wt()?"px-0":""}${j()?"":" !pb-0"}`)
                                }), [() => (r.iTV(St()), W(), r.iTV(bt()), r.vzK((() => St() || W()(bt() ? "edit_contact_details" : "contact_details"))))]), r.BCw(t, p)
                            }
                        },
                        $$legacy: !0
                    }), (t => r.hZp(Oe, t)), (() => r.JtY(Oe)))
                }
                var bn = r.uYY(_n);
                return Yt(), bn
            }
            r.MmH(["click"])
        },
        13232(t, e, n) {
            n.d(e, {
                TZ: () => a,
                YY: () => r
            });
            n(43356), n(31992), n(26418);
            var o = n(14494);
            n(76765), n(79869), n(45325), n(87791);

            function r() {
                return !1
            }

            function a() {
                return (0, o.Br)("cred_logo_on_desktop")
            }
        },
        2076(t, e, n) {
            n.d(e, {
                i: () => d,
                u: () => u
            });
            var o = n(47783),
                r = n(46434),
                a = n(82278),
                i = n(87202),
                c = n(28241),
                l = n(62244),
                s = n(58214);

            function d(t) {
                var e;
                let {
                    isOverlay: n,
                    edit: c,
                    fireContactRender: l = !0
                } = t, s = !1;
                const d = {
                    edit: c ? 1 : 0
                };
                (0, r.Rc)((() => {
                    if (l) {
                        const t = (0, i.renderContact)();
                        (n ? o.logRender : o.logPageRender)({
                            name: a.zo,
                            content: [t && a.$T, t && a.jq, (0, i.renderEmail)() && "email"],
                            properties: {
                                country: (0, i.getDialCode)(),
                                contact: (0, i.getContact)(),
                                email: (0, i.getEmail)(),
                                ...d
                            },
                            parent: n ? a.Lw : void 0
                        })
                    }
                    return () => {
                        !s && l && (0, o.logDismiss)({
                            name: a.zo,
                            properties: d
                        })
                    }
                }));
                return {
                    logCountryChangeClick: () => (0, o.logClick)({
                        name: `${a.$T}_code`,
                        value: (0, i.getDialCode)(),
                        properties: d
                    }),
                    logCountryChange: (0, o.logChangeFn)({
                        name: a.$T,
                        value: (0, i.getDialCode)(),
                        properties: d
                    }),
                    logContactChange: (0, o.logChangeFn)({
                        name: a.jq,
                        value: null === (e = (0, i.getContact)()) || void 0 === e ? void 0 : e.replace(`+${(0,i.getDialCode)()}`, ""),
                        properties: d
                    }),
                    logContactInput: (0, o.logInputFn)({
                        name: "contact",
                        properties: d
                    }),
                    logContactError: (0, o.logRenderFn)({
                        name: a.wW,
                        properties: d
                    }),
                    logEmailChange: (0, o.logChangeFn)({
                        name: "email",
                        value: (0, i.getEmail)(),
                        properties: d
                    }),
                    logEmailInput: (0, o.logInputFn)({
                        name: "email",
                        properties: d
                    }),
                    logEmailError: (0, o.logRenderFn)({
                        name: a.u5,
                        properties: d
                    }),
                    logSubmit: () => {
                        s = !0;
                        const t = {
                            country: (0, i.getDialCode)(),
                            contact: (0, i.getContact)(),
                            email: (0, i.getEmail)(),
                            ...d
                        };
                        (0, o.logSubmit)({
                            name: a.zo,
                            properties: t
                        })
                    }
                }
            }

            function u(t) {
                (0, c.O)(t), (0, l.O)(s.Dp.CONTACT_INPUT_ENTERED)
            }
        },
        26900(t, e, n) {
            n.d(e, {
                _: () => a
            });
            var o = n(22986);
            const r = new RegExp(o.z);

            function a(t, e) {
                return e && Boolean(t) && !r.test(t ? ? "")
            }
        },
        11587(t, e, n) {
            n.d(e, ["g", 0, () => n.e(14499).then(n.bind(n, 94580))])
        },
        35777(t, e, n) {
            n.d(e, {
                FW: () => g,
                Kd: () => l,
                Zm: () => m,
                sn: () => v,
                xx: () => u
            });
            var o = n(14494),
                r = n(42875),
                a = n(7186),
                i = n(21117);
            const c = "cev2_third_party_coupon_provider_support";

            function l() {
                return (0, a.E9)() && (0, o.Br)(c)
            }
            let s, d = !1;

            function u() {
                if (d) return;
                if (d = !0, !(0, i.u)()) return;
                const t = (0, a.E9)();
                (0, r.logExperimentsEligibility)({
                    [c]: {
                        eligibility: t,
                        variant: (0, o._m)(c),
                        result: t && (0, o.Br)(c)
                    }
                })
            }

            function v() {
                return s
            }

            function g(t) {
                s = t
            }

            function m(t) {
                return void 0 !== t && "" !== t && t === s
            }
            n.d(e, ["iK", 0, c])
        },
        66194(t, e, n) {
            n.d(e, {
                QF: () => f,
                b0: () => y,
                gJ: () => Y,
                syncAutomaticDiscountsWithContactDetails: () => C,
                uV: () => J
            });
            var o = n(31992),
                r = n(64009),
                a = n(7186),
                i = n(31800),
                c = n(80146),
                l = n(14494),
                s = n(24606),
                d = n(48496),
                u = n(95896),
                v = n(47783),
                g = n(35777);
            let m, p, h = 0;

            function f() {
                h++, (0, c.b1)(!0)
            }

            function Y() {
                h--, 0 === h && (0, c.b1)(!1)
            }

            function J(t, e) {
                if (!(0, a.E9)()) return !1;
                void 0 === m && (m = (0, o.Jt)(r.contact$) ? ? ""), void 0 === p && (p = (0, o.Jt)(r.email$) ? ? "");
                const n = void 0 !== t && t !== m,
                    i = void 0 !== e && e !== p;
                return n && (m = t), i && (p = e), n || i
            }
            async function C(t) {
                f();
                try {
                    const e = (0, o.Jt)((0, c.h4)()),
                        n = Object.keys(e),
                        r = await (0, d.VY)("", !1, "contact_sync");
                    if (!r || !r.promotions) return [];
                    const a = r.promotions.map((t => t.code)),
                        l = a.filter((t => !n.includes(t))),
                        s = n.filter((t => !a.includes(t)));
                    if (l.length > 0) return (0, d.oL)(!1, "bottom", l), [];
                    if (s.length > 0) {
                        if (null != t && t.deferRemovedNotice) return s;
                        const e = await u.z.coupon.removeAutomaticDiscountBottomSheet();
                        (0, i.default)(e.default, {
                            removedCodes: s
                        })
                    }
                    return []
                } catch {
                    return (0, v.log)({
                        name: "magic:coupons:contact_sync_failed"
                    }), []
                } finally {
                    Y()
                }
            }

            function y(t) {
                var e;
                if ((0, g.xx)(), (0, g.Kd)() && (0, g.Zm)((0, o.Jt)(r.contact$))) return;
                Boolean(null == t || null === (e = t.data) || void 0 === e || null === (e = e.applied_promotions) || void 0 === e ? void 0 : e.some((t => "automatic" === t.type))) && (0, l.Br)("magic_force_coupons_with_orders") && (0, s.aL)() && !(0, s.Gk)() && C().catch((() => {}))
            }
        },
        36750(t, e, n) {
            n.d(e, {
                $: () => l,
                o: () => c
            });
            var o = n(56337);
            const r = "height",
                a = "width";

            function i(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
                try {
                    if ((0, o.G$)()) return function(t, e, n) {
                        const o = () => {
                            const o = t.getBoundingClientRect();
                            e(n === r ? o.height : o.width)
                        };
                        return t.addEventListener("resize", o), {
                            destroy() {
                                t.removeEventListener("resize", o)
                            }
                        }
                    }(t, e, n);
                    const i = new ResizeObserver((t => {
                        for (const s of t) {
                            var o, i, c, l;
                            if (n === r && s.borderBoxSize) e(null === (o = (null === (i = s.borderBoxSize) || void 0 === i ? void 0 : i[0]) || s.borderBoxSize) || void 0 === o ? void 0 : o.blockSize);
                            if (n === a && s.borderBoxSize) e(null === (c = (null === (l = s.borderBoxSize) || void 0 === l ? void 0 : l[0]) || s.borderBoxSize) || void 0 === c ? void 0 : c.inlineSize)
                        }
                    }));
                    return i.observe(t), {
                        destroy() {
                            i.unobserve(t)
                        }
                    }
                } catch (t) {}
            }

            function c(t, e) {
                return i(t, e, r)
            }

            function l(t, e) {
                return i(t, e, a)
            }
        }
    }
]);