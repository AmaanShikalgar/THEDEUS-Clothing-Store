"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [5364], {
        41488(t, e, n) {
            n.d(e, {
                A: () => $
            });
            var r = n(88603),
                o = (n(66891), n(73283), n(75533), n(99120)),
                s = n(54341),
                i = n(21374),
                l = n(72912),
                c = n(76765),
                a = o.vUu("<div> </div>");

            function u(t, e) {
                if (new.target) return (0, r.YU)({
                    component: u,
                    ...t
                });
                const n = o.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]),
                    s = o.gjz(n, ["customText"]);
                o.VCO(e, !1);
                const i = () => o.Hzn(c.t, "$t", l),
                    [l, v] = o.DZI();
                let d = o._w2(e, "customText", 12, "");
                var p = {
                    get customText() {
                        return d()
                    },
                    set customText(t) {
                        d(t), o.bX()
                    },
                    $set: o.hpB,
                    $on: (t, n) => o.oeX(e, t, n)
                };
                o.TsN();
                var g = a();
                o.p_Y(g, (() => ({ ...s,
                    class: (o.iTV(s), o.vzK((() => `ml-0.5 inline-flex w-fit max-w-full rounded-xl border border-[#91EFC4] bg-[#E3F1EF] px-2 py-0 text-sm font-medium text-[#00663B] ${s.class}`)))
                })));
                var f = o.IuP(g, !0);
                o.vNg((t => o.jax(f, t)), [() => (o.iTV(d()), i(), o.vzK((() => d() || i()("new"))))]), o.BCw(t, g);
                var m = o.uYY(p);
                return v(), m
            }
            var v = n(56337),
                d = o.vUu("<!> <!>", 1),
                p = o.vUu('<span class="flex items-center"><span><!></span> <!> <!></span>'),
                g = o.vUu('<span class="flex items-center"><span> </span></span>'),
                f = o.vUu('<span class="text-sm text-on-surface/70"> </span>'),
                m = o.vUu('<div><!> <div class="mr-auto flex flex-col truncate text-on-surface"><!> <!> <!> <!> <!></div> <!></div>');

            function $(t, e) {
                if (new.target) return (0, r.YU)({
                    component: $,
                    ...t
                });
                const n = o.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                o.VCO(e, !1);
                let c = o._w2(e, "icon", 12, ""),
                    a = o._w2(e, "title", 12, ""),
                    w = o._w2(e, "subTitle", 12, ""),
                    h = o._w2(e, "description", 12, ""),
                    y = o._w2(e, "index", 28, (() => -1)),
                    b = o._w2(e, "showNewBadge", 12, !1),
                    x = o._w2(e, "titleStyle", 12, ""),
                    Y = o._w2(e, "value", 12, ""),
                    T = o._w2(e, "onclick", 12, void 0),
                    C = o._w2(e, "nativeRoleButton", 12, !0);
                o.M3l((() => (l.yL, o.iTV(w()))), (() => {
                    (0, l.yL)(w()) && w().then((t => {
                        w(t)
                    })).catch((() => {
                        w("")
                    }))
                })), o.iqF();
                var B = {
                    get icon() {
                        return c()
                    },
                    set icon(t) {
                        c(t), o.bX()
                    },
                    get title() {
                        return a()
                    },
                    set title(t) {
                        a(t), o.bX()
                    },
                    get subTitle() {
                        return w()
                    },
                    set subTitle(t) {
                        w(t), o.bX()
                    },
                    get description() {
                        return h()
                    },
                    set description(t) {
                        h(t), o.bX()
                    },
                    get index() {
                        return y()
                    },
                    set index(t) {
                        y(t), o.bX()
                    },
                    get showNewBadge() {
                        return b()
                    },
                    set showNewBadge(t) {
                        b(t), o.bX()
                    },
                    get titleStyle() {
                        return x()
                    },
                    set titleStyle(t) {
                        x(t), o.bX()
                    },
                    get value() {
                        return Y()
                    },
                    set value(t) {
                        Y(t), o.bX()
                    },
                    get onclick() {
                        return T()
                    },
                    set onclick(t) {
                        T(t), o.bX()
                    },
                    get nativeRoleButton() {
                        return C()
                    },
                    set nativeRoleButton(t) {
                        C(t), o.bX()
                    },
                    $set: o.hpB,
                    $on: (t, n) => o.oeX(e, t, n)
                };
                o.TsN();
                var X = m(),
                    k = o.jfp(X);
                o.NIy(k, e, "before", {}, (t => {
                    var r = d(),
                        l = o.esp(r),
                        u = t => {
                            {
                                let e = o.Xdt((() => (o.iTV(i.A), o.iTV(n), o.vzK((() => (0, i.A)("h-[18px] w-[18px] text-icon", n.iconClass))))));
                                (0, s.A)(t, {
                                    get src() {
                                        return c()
                                    },
                                    get alt() {
                                        return a()
                                    },
                                    get class() {
                                        return o.JtY(e)
                                    },
                                    showCharacterFallback: !0
                                })
                            }
                        };
                    o.if(l, (t => {
                        c() && t(u)
                    }));
                    var v = o.hg4(l, 2);
                    o.NIy(v, e, "custom-icon", {}, null), o.BCw(t, r)
                }));
                var I = o.hg4(k, 2),
                    N = o.jfp(I);
                o.NIy(N, e, "title", {}, (t => {
                    var r = p(),
                        s = o.jfp(r),
                        l = o.jfp(s),
                        c = t => {
                            var e = o.Qq7();
                            o.vNg((() => o.jax(e, a()))), o.BCw(t, e)
                        },
                        d = o.unG((() => (o.iTV(v.G$), o.vzK(v.G$)))),
                        g = t => {
                            var e = o.Imx(),
                                n = o.esp(e);
                            o.qyt(n, a), o.BCw(t, e)
                        };
                    o.if(l, (t => {
                        o.JtY(d) ? t(c) : t(g, -1)
                    })), o.cLc(s);
                    var f = o.hg4(s, 2),
                        m = t => {
                            u(t, {
                                class: "mr-1"
                            })
                        };
                    o.if(f, (t => {
                        b() && t(m)
                    }));
                    var $ = o.hg4(f, 2);
                    o.NIy($, e, "instrument-list", {}, null), o.cLc(r), o.vNg((t => {
                        o.ysU(s, 1, t), o.hgi(s, x()), o.aIK(s, "data-testid", a())
                    }), [() => o.$z$((o.iTV(i.A), o.iTV(n), o.vzK((() => (0, i.A)("mr-1 truncate font-medium", n.titleClass)))))]), o.BCw(t, r)
                }));
                var V = o.hg4(N, 2),
                    J = t => {
                        var r = o.Imx(),
                            s = o.esp(r);
                        o.NIy(s, e, "sub-title", {}, (t => {
                            var e = g(),
                                r = o.jfp(e),
                                s = o.IuP(r, !0);
                            o.cLc(e), o.vNg((t => {
                                o.ysU(r, 1, t), o.jax(s, w())
                            }), [() => o.$z$((o.iTV(i.A), o.iTV(n), o.vzK((() => (0, i.A)("mt-0.5 text-sm text-on-surface opacity-50", n.subTitleClass)))))]), o.BCw(t, e)
                        })), o.BCw(t, r)
                    };
                o.if(V, (t => {
                    w() && t(J)
                }));
                var z = o.hg4(V, 2);
                o.NIy(z, e, "offers", {}, null);
                var _ = o.hg4(z, 2);
                o.NIy(_, e, "club-buyer-protection", {}, null);
                var K = o.hg4(_, 2);
                o.NIy(K, e, "description", {}, (t => {
                    var e = f(),
                        n = o.IuP(e, !0);
                    o.vNg((() => o.jax(n, h()))), o.BCw(t, e)
                })), o.cLc(I);
                var A = o.hg4(I, 2);
                return o.NIy(A, e, "after", {}, null), o.cLc(X), o.vNg(((t, e) => {
                    o.ysU(X, 1, (o.iTV(n), o.vzK((() => `relative flex min-h-12 cursor-pointer items-center gap-3 px-4 py-3 focus:border-on-surface focus:border-opacity-10 d:gap-4 d:py-4 ${n.class||""}`)))), o.aIK(X, "data-value", Y()), o.aIK(X, "data-index", y()), o.aIK(X, "data-testid", t), o.aIK(X, "data-active", (o.iTV(n), o.vzK((() => n.active)))), o.aIK(X, "role", e)
                }), [() => (o.iTV(Y()), o.vzK((() => {
                    var t;
                    return null === (t = Y()) || void 0 === t ? void 0 : t.toLowerCase()
                }))), () => (o.iTV(C()), o.iTV(v.G$), o.vzK((() => C() && !(0, v.G$)() ? "button" : void 0)))]), o.kgv("click", X, (function() {
                    for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    null === (t = T()) || void 0 === t || t.apply(this, n)
                })), o.BCw(t, X), o.uYY(B)
            }
            o.MmH(["click"])
        },
        35582(t, e, n) {
            n.d(e, {
                A: () => i
            });
            var r = n(88603),
                o = (n(66891), n(73283), n(75533), n(99120)),
                s = o.vUu('<div><div class="flex min-w-0 grow flex-col d:h-full"><!></div></div>');

            function i(t, e) {
                if (new.target) return (0, r.YU)({
                    component: i,
                    ...t
                });
                const n = o.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                o.VCO(e, !1);
                let l = o._w2(e, "onclick", 12, void 0),
                    c = o.zgK(!0);

                function a(t) {
                    o.hZp(c, t)
                }
                var u = {
                    get onclick() {
                        return l()
                    },
                    set onclick(t) {
                        l(t), o.bX()
                    },
                    $set: o.hpB,
                    $on: (t, n) => o.oeX(e, t, n)
                };
                o.TsN();
                var v = o.Imx(),
                    d = o.esp(v),
                    p = t => {
                        var r = s(),
                            i = o.jfp(r),
                            c = o.jfp(i);
                        o.NIy(c, e, "default", {
                            changeOptionVisibility: a
                        }, null), o.cLc(i), o.cLc(r), o.vNg((() => o.ysU(r, 1, (o.iTV(n), o.vzK((() => `relative flex cursor-pointer items-center gap-4 px-4 py-0 empty:hidden focus:border-on-surface focus:border-opacity-10 ${n.class||""}`)))))), o.kgv("click", r, (function() {
                            for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            null === (t = l()) || void 0 === t || t.apply(this, n)
                        })), o.BCw(t, r)
                    };
                return o.if(d, (t => {
                    o.JtY(c) && t(p)
                })), o.BCw(t, v), o.uYY(u)
            }
            o.MmH(["click"])
        },
        31149(t, e, n) {
            n.d(e, {
                A: () => i
            });
            var r = n(88603),
                o = (n(66891), n(73283), n(75533), n(99120)),
                s = n(41488);

            function i(t, e) {
                if (new.target) return (0, r.YU)({
                    component: i,
                    ...t
                });
                const n = o.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                o.VCO(e, !1);
                var l = {
                    $set: o.hpB,
                    $on: (t, n) => o.oeX(e, t, n)
                };
                o.TsN(); {
                    let r = o.Xdt((() => (o.iTV(n), o.vzK((() => `h-12 rounded-lg border border-on-surface border-opacity-10 bg-surface px-2 hover:bg-surface-50 active:bg-surface-50 d:peer-checked:bg-surface-50  ${n.class||""}`)))));
                    (0, s.A)(t, o.DuQ((() => n), {
                        get class() {
                            return o.JtY(r)
                        },
                        $$slots: {
                            after: (t, n) => {
                                var r = o.Imx(),
                                    s = o.esp(r);
                                o.NIy(s, e, "after", {}, null), o.BCw(t, r)
                            },
                            offers: (t, n) => {
                                var r = o.Imx(),
                                    s = o.esp(r);
                                o.NIy(s, e, "offers", {}, null), o.BCw(t, r)
                            },
                            description: (t, n) => {
                                var r = o.Imx(),
                                    s = o.esp(r);
                                o.NIy(s, e, "description", {}, null), o.BCw(t, r)
                            },
                            "custom-icon": (t, n) => {
                                var r = o.Imx(),
                                    s = o.esp(r);
                                o.NIy(s, e, "custom-icon", {}, null), o.BCw(t, r)
                            }
                        }
                    }))
                }
                return o.uYY(l)
            }
        },
        42103(t, e, n) {
            n.r(e), n.d(e, {
                default: () => Y
            });
            var r = n(88603),
                o = (n(66891), n(73283), n(75533), n(99120)),
                s = n(65047),
                i = n(30446),
                l = n(1522),
                c = n(81345),
                a = n(28766),
                u = n(15532),
                v = n(21629),
                d = n(56860),
                p = n(65441),
                g = n(52879),
                f = n(3596),
                m = n(45325),
                $ = n(47783),
                w = n(4503),
                h = n(54341),
                y = n(56337),
                b = o.vUu('<span slot="custom-icon" class="flex h-[18px] w-[18px] shrink-0 items-center justify-center"><!></span>'),
                x = o.vUu('<div slot="offers"><!></div>');

            function Y(t, e) {
                if (new.target) return (0, r.YU)({
                    component: Y,
                    ...t
                });
                const T = o.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                o.VCO(e, !1);
                let C = o._w2(e, "trackRender", 12),
                    B = o._w2(e, "onclick", 12, void 0),
                    X = o._w2(e, "onMoreOptionsClick", 12, void 0),
                    k = o._w2(e, "onDirectPaymentClick", 12, void 0),
                    I = o._w2(e, "onBeforePayment", 12, void 0),
                    N = o._w2(e, "moduleName", 12, "");
                const V = N() === c.qE,
                    J = (0, s.symbol)();
                let z = o.zgK(V ? (0, l.YA)(T.config) : (0, i.Yr)(T.config)),
                    _ = o.zgK();
                if (C()) {
                    const t = o.JtY(z).slice(0, 5);
                    o.hZp(_, C()({
                        wallet_details: t.map(((t, e) => ({
                            network: t,
                            shown_rank: e + 1
                        }))),
                        shown: t
                    }).logClick)
                }
                o.JtY(z).length > 6 && o.hZp(z, o.JtY(z).slice(0, 5).concat(J)), (0, p.Vq)(c.W2, o.JtY(z));
                var K = {
                    get trackRender() {
                        return C()
                    },
                    set trackRender(t) {
                        C(t), o.bX()
                    },
                    get onclick() {
                        return B()
                    },
                    set onclick(t) {
                        B(t), o.bX()
                    },
                    get onMoreOptionsClick() {
                        return X()
                    },
                    set onMoreOptionsClick(t) {
                        X(t), o.bX()
                    },
                    get onDirectPaymentClick() {
                        return k()
                    },
                    set onDirectPaymentClick(t) {
                        k(t), o.bX()
                    },
                    get onBeforePayment() {
                        return I()
                    },
                    set onBeforePayment(t) {
                        I(t), o.bX()
                    },
                    get moduleName() {
                        return N()
                    },
                    set moduleName(t) {
                        N(t), o.bX()
                    },
                    $set: o.hpB,
                    $on: (t, n) => o.oeX(e, t, n)
                };
                return o.TsN(), (0, u.cy)(t, {
                    get options() {
                        return o.JtY(z)
                    },
                    children: o.y8B,
                    $$slots: {
                        default: (t, e) => {
                            const r = o.Xdt((() => e.option));
                            var s = o.Imx(),
                                p = o.esp(s),
                                Y = t => {
                                    {
                                        let e = o.Xdt((() => (o.iTV(v.XO), o.vzK((() => (0, v.XO)("more"))))));
                                        (0, u.O)(t, {
                                            onclick: t => {
                                                var e, n;
                                                null === (e = B()) || void 0 === e || e(t), null === (n = X()) || void 0 === n || n(), V && (0, $.logClick)({
                                                    name: "home_alipay_plus_more",
                                                    properties: {
                                                        instruments_count: o.JtY(z).length - 1
                                                    }
                                                }), (0, a.Lj)(V ? (0, l.K2)() : (0, i.K2)(), {
                                                    config: T.config,
                                                    moduleName: N()
                                                })
                                            },
                                            class: "bg-surface",
                                            get icon() {
                                                return o.JtY(e)
                                            },
                                            title: "More Wallets",
                                            value: "more"
                                        })
                                    }
                                },
                                C = t => {
                                    (0, u.O)(t, {
                                        get title() {
                                            return o.iTV(g.l$), o.iTV(o.JtY(r)), o.vzK((() => g.l$[o.JtY(r)]))
                                        },
                                        class: "truncate bg-surface",
                                        get value() {
                                            return o.JtY(r)
                                        },
                                        onclick: async t => {
                                            var e, n, s, i;
                                            null === (e = B()) || void 0 === e || e(t);
                                            try {
                                                if (I()) {
                                                    if (!await I()({
                                                            appName: g.l$[o.JtY(r)] || o.JtY(r),
                                                            appIcon: (0, d.R)(o.JtY(r))
                                                        })) return
                                                }
                                            } catch (t) {
                                                (0, m.vV)("Error in upi onBeforePayment", t)
                                            }
                                            null === (n = k()) || void 0 === n || n(), i = o.JtY(r), (0, f.Lb)({
                                                wallet: i
                                            }), null === (s = o.JtY(_)) || void 0 === s || s({
                                                method: c.W2,
                                                instrument_name: o.JtY(r),
                                                ...V && {
                                                    wallet_group: c.qE
                                                }
                                            })
                                        },
                                        $$slots: {
                                            "custom-icon": (t, e) => {
                                                var n = b(),
                                                    s = o.jfp(n); {
                                                    let t = o.Xdt((() => (o.iTV(d.R), o.iTV(o.JtY(r)), o.vzK((() => (0, d.R)(o.JtY(r)))))));
                                                    (0, h.A)(s, {
                                                        get src() {
                                                            return o.JtY(t)
                                                        },
                                                        get alt() {
                                                            return o.iTV(g.l$), o.iTV(o.JtY(r)), o.vzK((() => g.l$[o.JtY(r)]))
                                                        },
                                                        class: "h-[18px] w-[18px] text-icon",
                                                        showCharacterFallback: !0
                                                    })
                                                }
                                                o.cLc(n), o.BCw(t, n)
                                            },
                                            offers: (t, e) => {
                                                var s = x(),
                                                    i = o.jfp(s); {
                                                    let t = o.Xdt((() => (o.iTV(y.G$), o.vzK((() => !(0, y.G$)())))));
                                                    (0, w.A)(i, {
                                                        promise: n.e(59343).then(n.bind(n, 34904)),
                                                        get showDefaultShimmer() {
                                                            return o.JtY(t)
                                                        },
                                                        children: o.y8B,
                                                        $$slots: {
                                                            default: (t, e) => {
                                                                const n = o.Xdt((() => e.Component)); {
                                                                    let e = o.Xdt((() => o.JtY(r) || ""));
                                                                    o.JtY(n)(t, {
                                                                        get method() {
                                                                            return c.W2
                                                                        },
                                                                        isL0Screen: !0,
                                                                        hideMethodLevelOffer: !0,
                                                                        get instrument() {
                                                                            return o.JtY(e)
                                                                        },
                                                                        class: "!-mt-0.5"
                                                                    })
                                                                }
                                                            }
                                                        }
                                                    })
                                                }
                                                o.cLc(s), o.BCw(t, s)
                                            }
                                        }
                                    })
                                };
                            o.if(p, (t => {
                                o.JtY(r) === J ? t(Y) : t(C, -1)
                            })), o.BCw(t, s)
                        }
                    }
                }), o.uYY(K)
            }
        },
        15532(t, e, n) {
            n.d(e, {
                Zq: () => r.A,
                pF: () => a.A,
                cy: () => c,
                O: () => o.A
            });
            var r = n(41488),
                o = n(31149),
                s = n(88603),
                i = (n(66891), n(73283), n(75533), n(99120)),
                l = n(72162);

            function c(t, e) {
                if (new.target) return (0, s.YU)({
                    component: c,
                    ...t
                });
                const n = i.gjz(e, ["children", "$$slots", "$$events", "$$legacy"]);
                i.VCO(e, !1);
                let r = i._w2(e, "name", 12, ""),
                    o = i._w2(e, "options", 28, (() => []));
                const a = o().length;
                let u = i._w2(e, "compact", 12, a > 3);
                var v = {
                    get name() {
                        return r()
                    },
                    set name(t) {
                        r(t), i.bX()
                    },
                    get options() {
                        return o()
                    },
                    set options(t) {
                        o(t), i.bX()
                    },
                    get compact() {
                        return u()
                    },
                    set compact(t) {
                        u(t), i.bX()
                    },
                    $set: i.hpB,
                    $on: (t, n) => i.oeX(e, t, n)
                };
                i.TsN(); {
                    let s = i.Xdt((() => (i.iTV(u()), i.iTV(n), i.vzK((() => `grid ${u()?"grid-cols-2":"grid-cols-1"} gap-2 p-2 ${u()&&a%2?"col-span-full":""} ${n.class||""}`)))));
                    (0, l.me)(t, {
                        get name() {
                            return r()
                        },
                        get options() {
                            return o()
                        },
                        get class() {
                            return i.JtY(s)
                        },
                        children: i.y8B,
                        $$slots: {
                            default: (t, n) => {
                                const r = i.Xdt((() => n.option)),
                                    o = i.Xdt((() => n.index));
                                var s = i.Imx(),
                                    l = i.esp(s);
                                i.NIy(l, e, "default", {
                                    get option() {
                                        return i.JtY(r)
                                    },
                                    get index() {
                                        return i.JtY(o)
                                    }
                                }, null), i.BCw(t, s)
                            }
                        }
                    })
                }
                return i.uYY(v)
            }
            var a = n(35582)
        },
        15993(t, e, n) {
            n.r(e), n.d(e, {
                getLastAutoAppliedOfferId$: () => a,
                isOfferAutoApplied: () => u,
                setLastAutoAppliedOfferId: () => c
            });
            var r = n(31992),
                o = n(65047),
                s = n(33535),
                i = n(97623);
            const l = (0, o.symbol)();

            function c(t) {
                (0, o.getStore)(l).set(t)
            }

            function a() {
                return (0, i.u)((0, o.getStore)(l))
            }

            function u() {
                const t = (0, s.t0)(),
                    e = (0, r.Jt)(a());
                return t ? (null == t ? void 0 : t.id) === e : Boolean(e)
            }(0, o.setStore)(l, (0, r.T5)(null))
        }
    }
]);