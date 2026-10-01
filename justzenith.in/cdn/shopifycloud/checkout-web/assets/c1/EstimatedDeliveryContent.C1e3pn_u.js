import {
    P as ie,
    ba as Z,
    O as k,
    _ as q,
    n as ae,
    aD as M,
    cG as G,
    d9 as le,
    da as ce,
    db as de,
    ab as B,
    Q as ue
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    A as S,
    h as x,
    T as R,
    k as A,
    u as s,
    S as w,
    _ as me,
    Q as Y,
    g as he
} from "./esnext-vendor.BDPAaZdq.js";
import {
    cB as fe,
    c as _,
    o as F,
    bt as pe,
    b5 as ye,
    P as g,
    B as Q,
    bv as ge,
    am as ve,
    n as V
} from "./hydrate.B0xlt2dG.js";
import {
    g as be,
    p as Pe,
    T as J
} from "./hooks-useShowMobileOrderSummary.DmZ0FrVc.js";

function Te() {
    const n = ie(),
        {
            value: e
        } = n.deliveryExpectations,
        o = Z("deliveryExpectations").value,
        {
            value: t
        } = n.deliveryNext,
        r = Z("deliveryNext").value,
        {
            shop: {
                asyncDeliveryPromiseExperienceEnabled: i
            },
            observability: l
        } = k(),
        a = S();
    return x(() => {
        if (!o && t ? .status === "filled" && e ? .status === "filled" && a.current && (a.current(), a.current = void 0), t ? .status === "filled" && o) {
            const m = performance.now();
            a.current = () => {
                const c = performance.now() - m;
                l.histogram({
                    name: "delivery_expectations_loading_duration",
                    value: c
                })
            }
        }
    }, [e ? .status, t ? .status, r, o, l]), {
        deliveryExpectationLines: (() => {
            const m = e ? .deliveryExpectationLines ? .some(({
                brandedPromise: d
            }) => d ? .handle === q.BuyWithPrime);
            if (e ? .status === "filled" && (i || m)) return e ? .deliveryExpectationLines
        })(),
        deliveryExpectationLinesLoading: e === void 0,
        status: e ? .status
    }
}

function Ye(n) {
    if (n.length < 2) return !1;
    const e = n.map(t => {
            const r = ae(t);
            return r ? M(r) : void 0
        }),
        [o] = e;
    return !!(o && e.every(t => t === o))
}

function Je(n) {
    const e = [],
        o = new Map;
    for (const t of n) {
        const r = G(t) ? ? t.methods[0],
            i = r && M(r),
            l = i ? o.get(i) : void 0;
        if (l) l.push(t);
        else {
            const a = [t];
            i && o.set(i, a), e.push(a)
        }
    }
    return e.length === n.length ? n : e.map(t => {
        const r = t[0];
        return t.length === 1 && r ? r : Se(t)
    })
}

function _e(n) {
    const e = G(n) ? ? n.methods[0],
        o = e ? .priceBreakdown ? .map(({
            amount: t
        }) => t.amount);
    return o ? .length ? Math.max(...o) : e ? .cost.amount ? ? 0
}

function Se(n) {
    const e = le(n.map((r, i) => ({
            index: i,
            rate: r
        })), _e).rate,
        o = n.flatMap(r => r.targetMerchandiseLines ? ? []),
        t = G(e) ? ? e.methods[0];
    return { ...e,
        methods: t && t !== e.methods[0] ? [t, ...e.methods.filter(r => r !== t)] : e.methods,
        targetMerchandiseLines: o.length ? o : e.targetMerchandiseLines
    }
}

function et(n) {
    const e = new Map;
    for (const o of n) {
        const t = o.fields.id.value,
            r = o.fields.deliveryMethodHandle.value;
        t && r && e.set(t, r)
    }
    return e
}

function tt(n, e) {
    return n.map(o => {
        const t = o.id ? e.get(o.id) : void 0;
        return {
            line: o,
            method: o.methods.find(({
                handle: r
            }) => r === t)
        }
    })
}

function nt(n, e, o = (t, r) => M(r)) {
    const t = e.map(({
            line: i,
            method: l
        }, a) => ({
            lineIndex: a,
            amountCombinabilityToken: l ? o(i, l) : void 0,
            amount: l ? .cost.amount
        })),
        r = new Set;
    return n.forEach((i, l) => {
        for (const a of i.methods) {
            const u = a.cost.amount,
                m = o(i, a);
            if (!m) continue;
            t.some(c => c.lineIndex === l || c.amountCombinabilityToken !== m || c.amount === void 0 ? !1 : c.amount > u || c.amount === u && c.lineIndex < l) && r.add(a)
        }
    }), r
}

function ot(n) {
    const [e] = n;
    if (!e) return;
    const o = ce(n, t => t.cost.amount, M);
    return {
        amount: n.reduce((t, r, i) => o.has(i) ? t : t + r.costAfterDiscounts.amount, 0),
        currencyCode: e.costAfterDiscounts.currencyCode
    }
}

function ee(n) {
    const e = R(() => be(n), [n]);
    return {
        theme: R(() => Pe(e), [e])
    }
}
const Le = "Hlr02",
    Ee = "TtorW",
    xe = "jrKZE",
    W = {
        InlineLogo: Le,
        Logo: Ee,
        LogoCompact: xe
    };

function te({
    brandedPromise: n,
    useCompactLogo: e
}) {
    const o = S(null),
        [t, r] = A(null);
    x(() => {
        r(o.current)
    }, [o]);
    const {
        theme: i
    } = ee(t), l = Ce(i, n, o, e);
    return s("div", {
        ref: o,
        className: W.InlineLogo,
        children: l
    })
}
const Ce = (n, e, o, t) => {
        if (n && o.current) {
            const r = De(n, e, t);
            if (r) return s(fe, {
                src: r,
                alt: e.name,
                aspectRatio: "auto",
                className: Be(e, r, t)
            })
        }
        return null
    },
    De = (n, e, o) => {
        const t = n === J.Dark ? "dark" : "light";
        return e[`${t}Theme${o?"CompactLogoUrl":"LogoUrl"}`] || e[`${t}ThemeLogoUrl`] || e.logoUrl || ""
    },
    ke = "shop_promise_2026",
    Ie = (n, e) => n.handle === "shop_promise" && e.includes(ke),
    Be = (n, e, o) => {
        if (Ie(n, e)) return o ? W.LogoCompact : W.Logo
    },
    Ae = void 0,
    we = !0,
    Me = "small400";

function rt({
    cost: n,
    costAfterDiscounts: e,
    included: o = !1,
    inlineDiscount: t,
    preDiscountCost: r = !1,
    styleOverrides: i = {}
}) {
    const {
        shop: l,
        i18n: a
    } = k(), u = !l.hasFlagEnabled(de), {
        textSize: m = Ae,
        shouldBold: d = we,
        freeTextLetterCase: c = "uppercase",
        costSpacing: h = Me
    } = i, f = d ? "strong" : void 0, {
        amount: b
    } = n, {
        amount: y
    } = e, v = u && b > y, I = p => p ? s(F, {
        accessibilityVisibility: "exclusive",
        children: p
    }) : null, L = ({
        cost: p,
        accessibilityContext: P,
        isOriginalPrice: E = !1
    }) => {
        const T = p.amount === 0;
        let D = m;
        return E && (D = t ? "base" : "small"), T ? s(w, {
            children: [I(P), s(F, {
                type: f,
                size: D,
                letterCase: c,
                children: a.translate("shipping.free_rate_label")
            })]
        }) : s(w, {
            children: [I(P), s(F, {
                type: E ? "redundant" : f,
                color: E ? "subdued" : void 0,
                size: D,
                translate: !1,
                children: a.formatCurrency(p.amount, {
                    currency: p.currencyCode
                })
            })]
        })
    }, C = L({
        cost: e,
        accessibilityContext: v ? a.translate("order_summary.price_after_discount_aria_text") : void 0
    });
    if (o && y > 0) {
        const p = L({
                cost: e,
                accessibilityContext: a.translate("order_summary.original_price"),
                isOriginalPrice: !0
            }),
            P = s(pe, {
                size: m,
                strong: d
            });
        return t ? s(_, {
            direction: "inline",
            display: "inline",
            gap: B(h),
            alignItems: "baseline",
            children: [p, P]
        }) : s(_, {
            gap: B(h),
            alignItems: "end",
            children: [p, P]
        })
    }
    if (r) return L({
        cost: n,
        accessibilityContext: a.translate("order_summary.original_price")
    });
    if (v) {
        const p = L({
            cost: n,
            accessibilityContext: a.translate("order_summary.original_price"),
            isOriginalPrice: !0
        });
        return t ? s(_, {
            direction: "inline",
            display: "inline",
            gap: B(h),
            alignItems: "baseline",
            children: [p, C]
        }) : s(_, {
            gap: B(h),
            alignItems: "end",
            children: [p, C]
        })
    }
    return C
}
var H = (n => (n.Sync = "Sync", n.Async = "Async", n))(H || {});
const Ue = new Map([
    [q.BuyWithPrime, "Sync"],
    ["shop_promise", "Async"]
]);

function j({
    show: n,
    children: e,
    from: o = {
        opacity: 0
    },
    to: t = {
        opacity: 1
    },
    options: r = {
        duration: 500,
        fill: "forwards"
    },
    onStart: i,
    onEnd: l,
    animateOnShow: a = !0,
    animateOnHide: u = !0,
    unmountOnHide: m = !0
}) {
    const d = S(null),
        [c, h] = A(n),
        f = () => {
            h(!1), l ? .()
        },
        b = {
            duration: 500,
            fill: "forwards",
            ...r
        };
    return me(() => {
        if (c && a) {
            const y = d.current;
            if (y && typeof y.animate == "function") try {
                y.animate([o, t], b)
            } catch {}
        }
    }, [c, a]), x(() => {
        const y = d.current;
        if (n) i ? .(), h(!0);
        else if (u && y && typeof y.animate == "function") try {
            const v = y.animate([t, o], b);
            v && (v.onfinish = f)
        } catch {
            f()
        } else f()
    }, [n, u]), c || !m ? s("div", {
        ref: d,
        children: e
    }) : null
}
const Ne = Y(function({
    timeInTransit: e,
    price: o,
    textSize: t,
    paragraphColor: r
}) {
    const l = ye()(e);
    return l === null ? null : s(g, {
        color: r,
        size: t,
        children: [s("bdi", {
            children: o ? `(${l})` : l
        }), o ? ` · ${o}` : null]
    })
});

function Fe({
    title: n,
    price: e,
    textSize: o,
    paragraphColor: t
}) {
    return !n && e ? s(g, {
        color: t,
        children: e
    }) : s(g, {
        color: t,
        size: o,
        children: [s("bdi", {
            children: e ? `(${n})` : n
        }), e ? ` · ${e}` : null]
    })
}
const Oe = Y(function({
    timeInTransit: e,
    title: o,
    price: t,
    textSize: r,
    paragraphColor: i
}) {
    return o ? s(Fe, {
        title: o,
        price: t,
        textSize: r,
        paragraphColor: i
    }) : e ? s(Ne, {
        timeInTransit: e,
        price: t,
        textSize: r,
        paragraphColor: i
    }) : t ? s(g, {
        color: i,
        size: r,
        children: t
    }) : null
});

function ne(n, e) {
    const {
        i18n: o
    } = k(), {
        brandedPromise: t
    } = e || {}, {
        deliveryPromisePresentmentTitle: r
    } = n, {
        deliveryExpectationPresentmentTitle: i
    } = e || {}, l = r ? .short || "", a = r ? .long || "", u = (h, f) => f ? h ? .handle ? f : o.translate("delivery_promise.estimated_delivery_format", {
        date: f
    }) : "", m = u(t, i ? .short), d = t ? .handle ? u(t, i ? .long) : u(t, i ? .short);
    return {
        shouldDisplayPlaceholderTitle: !!((a || l) && !d && !m),
        deliveryPromiseTitle: d,
        deliveryPromiseTitleShort: m,
        deliveryPromisePlaceholderTitle: a,
        deliveryPromisePlaceholderTitleShort: l
    }
}
const Re = "x45Lq",
    We = "m39UP",
    He = "_5XR55",
    Ge = "PWTWF",
    O = {
        ShopPromiseWrapper: Re,
        WrapperHeightSmall: We,
        Branded: He,
        Unbranded: Ge
    };

function $e({
    deliveryMethod: n,
    deliveryExpectationLine: e,
    estimatedTimeInTransit: o,
    hideDescription: t,
    formatContent: r = a => a,
    paragraphColor: i,
    size: l
}) {
    const {
        deliveryPromiseTitle: a,
        deliveryPromisePlaceholderTitleShort: u,
        deliveryPromisePlaceholderTitle: m,
        deliveryPromiseTitleShort: d,
        shouldDisplayPlaceholderTitle: c
    } = ne(n, e), [h, f] = A(!!a), b = S(c), y = S(!1), v = S(null), [I, L] = A(null), {
        theme: C
    } = ee(I), {
        observability: p,
        checkout: P
    } = k(), {
        shippingAddress: E
    } = ue(), T = e ? .brandedPromise ? .handle === "shop_promise", D = Ke(C, e ? .brandedPromise ? .handle), oe = P.configuration.layout.isOnePage.value, {
        short: $,
        long: K
    } = e ? .deliveryExpectationPresentmentTitle || {};
    x(() => {
        L(v.current)
    }, [v]), x(() => {
        if (!y.current && ($ || K)) {
            y.current = !0;
            const X = E.value.countryCode;
            p.counter({
                name: "estimated_delivery_date_rendered",
                value: 1,
                attributes: {
                    branded: String(T),
                    ...X && {
                        country_code: X
                    }
                }
            })
        }
    }, [$, K, T, E, p]);
    const z = a || d,
        U = m || u,
        N = n.description ? .trim() || void 0;
    if (!z && !U && !T && !(N && !t)) return null;
    const re = () => U && o || !o ? s(w, {
            children: u && s(g, {
                color: i,
                size: l,
                children: s(ge, {
                    children: u
                })
            })
        }) : s(Oe, {
            timeInTransit: o,
            textSize: oe ? void 0 : "small",
            paragraphColor: i
        }),
        se = s(_, {
            children: [(z || U || T) && s("div", {
                className: he({
                    [O.ShopPromiseWrapper]: !0,
                    [O.WrapperHeightSmall]: l === "small"
                }),
                ref: v,
                children: [s(j, {
                    show: c && !a,
                    options: {
                        duration: 300
                    },
                    onEnd: () => f(!0),
                    animateOnShow: !1,
                    children: re()
                }), s(j, {
                    animateOnShow: b.current,
                    show: h,
                    from: {
                        opacity: 0,
                        transform: "translateX(-10px)"
                    },
                    to: {
                        opacity: 1,
                        transform: "translateX(0)"
                    },
                    children: s("div", {
                        className: O[D],
                        children: s(_, {
                            direction: "inline",
                            gap: "small-300",
                            alignItems: "center",
                            children: [s(Q, {
                                display: "@media (inline-size >= small) auto, none",
                                children: a && s(g, {
                                    color: i,
                                    size: l,
                                    children: a
                                })
                            }), s(Q, {
                                display: "@media (inline-size >= small) none, auto",
                                children: d && s(g, {
                                    color: i,
                                    size: l,
                                    children: d
                                })
                            }), T && e ? .brandedPromise && s(te, {
                                brandedPromise: e.brandedPromise,
                                useCompactLogo: l === "small"
                            })]
                        })
                    })
                })]
            }), N && !t ? s(g, {
                color: i,
                size: l,
                children: s("bdi", {
                    children: N
                })
            }) : null]
        });
    return r(se)
}
const Ke = (n, e) => e === "shop_promise" ? n === J.Light ? "Branded" : "" : "Unbranded";

function ze({
    deliveryExpectationLine: n,
    deliveryMethod: e,
    formatContent: o = r => r,
    size: t
}) {
    const {
        observability: r,
        checkout: {
            identity: i
        }
    } = k(), l = i.current.value === "shopPay", {
        deliveryPromiseTitle: a,
        deliveryPromiseTitleShort: u,
        deliveryPromisePlaceholderTitle: m,
        deliveryPromisePlaceholderTitleShort: d
    } = ne(e, n), {
        deliveryExpectationLinesLoading: c
    } = Te(), h = R(() => a || u ? {
        long: a,
        short: u,
        fallback: !1
    } : m || d ? {
        long: m,
        short: d,
        fallback: !0
    } : {
        long: "",
        short: "",
        fallback: !1
    }, [m, d, a, u]), f = S(c);
    x(() => {
        f.current && !c && e.brandedPromise ? .handle === "buy_with_prime" && h.fallback && (r.log("synch_branding_delivery_content_fallback_promise_shown", "Fallback delivery promise shown", {
            is_shop_pay: l
        }), r.counter({
            name: "membership_fallback_delivery_promise_text_shown",
            value: 1,
            attributes: {
                is_shop_pay: l
            }
        }))
    }, [c, e.brandedPromise ? .handle, f, l, r, h.fallback]);
    const b = s(_, {
        direction: "inline",
        gap: "none small-400",
        alignItems: "center",
        children: [c ? s(ve, {
            inlineSize: "small"
        }) : s(w, {
            children: [s(V, {
                below: "small",
                children: s(g, {
                    size: t,
                    children: h.long
                })
            }), s(V, {
                above: "extraSmall",
                children: s(g, {
                    size: t,
                    children: h.short
                })
            })]
        }), e.brandedPromise && s(te, {
            brandedPromise: e.brandedPromise,
            useCompactLogo: t === "small"
        })]
    });
    return o(b)
}

function st(n) {
    const {
        deliveryMethod: e,
        deliveryExpectationLine: o
    } = n, t = e.brandedPromise ? .handle ? ? o ? .brandedPromise ? .handle;
    return (t ? Ue.get(t) : H.Async) === H.Sync ? s(ze, { ...n
    }) : s($e, { ...n
    })
}
export {
    te as B, st as E, rt as S, nt as a, Je as b, ot as c, Oe as d, Ye as i, et as p, tt as s, Te as u
};