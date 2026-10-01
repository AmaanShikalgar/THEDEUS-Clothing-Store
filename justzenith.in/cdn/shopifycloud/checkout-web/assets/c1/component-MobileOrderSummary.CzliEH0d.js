import {
    f as p,
    h as xe,
    u as e,
    i as u,
    g as k,
    A as Le,
    T as Ha,
    k as M,
    G as Ia,
    a7 as Pa,
    o as Na,
    q as V,
    S as Te
} from "./esnext-vendor.BDPAaZdq.js";
import {
    dJ as Ae,
    dK as De,
    O,
    dL as He,
    dM as ka,
    dN as Oa,
    dO as Ie,
    bv as Pe,
    dP as Ra,
    cS as Ne,
    P as ke,
    aS as Ba,
    bZ as Ea,
    dQ as za,
    a$ as we,
    N as Fe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    er as Oe,
    a4 as Re,
    a2 as Be,
    es as Ee,
    b7 as Ma,
    aw as ze,
    c,
    aI as Me,
    o as h,
    et as $,
    I as D,
    a8 as Va,
    eu as Wa,
    ev as Ga,
    ew as Ua,
    bF as Ve,
    ex as $a,
    ey as Ja,
    B as A,
    F as te,
    ez as Ka,
    e as Qa,
    df as Ya,
    dm as ja,
    eA as qa,
    dW as Za,
    cc as Xa,
    eB as en,
    eC as an,
    eD as nn,
    H as W,
    l as sn,
    aJ as tn,
    di as on,
    eE as _e,
    eF as rn,
    b as ln
} from "./hydrate.B0xlt2dG.js";
import {
    T as cn
} from "./TransitionHeight.M5zGQYzu.js";
import {
    u as dn
} from "./hooks-useShouldRevealCustomization.wOAvQfO_.js";
import {
    u as un
} from "./hooks-useShowMobileOrderSummary.DmZ0FrVc.js";
import {
    u as mn,
    f as hn
} from "./styles-floating-layer.module.BOdGEzlq.js";
import "./app.D1P6yWfp.js";
import "./helpers-getNormalizedPaymentMethodName.B-mE5wnL.js";
import "./shared-permissions.BaDWlj5_.js";
import "./hooks-useShopPayExternalAppContext.DyGXtar4.js";
const yn = "Uo0Cz",
    pn = "YrNyQ",
    G = {
        FloatingSummaryWrapper: yn,
        "FloatingSummaryWrapper-enter": "vbGnb",
        "FloatingSummaryWrapper-entering": "_30e7y",
        "FloatingSummaryWrapper-exit": "_1LMtV",
        "FloatingSummaryWrapper-exiting": "TEpNv",
        "FloatingSummaryWrapper-exited": "_16LRF",
        FloatingSummary: pn,
        "FloatingSummaryWrapper-hidden": "Ngyh8",
        "FloatingSummary-dark": "Y0h8K"
    },
    gn = 32;

function vn({
    merchandise: s,
    paymentDue: n,
    onClick: d
}) {
    const r = Ae(),
        i = De(),
        t = Oe(),
        {
            i18n: l,
            checkout: g
        } = O(),
        m = g.configuration.layout.isOnePage.value,
        H = p(() => n.value.amount > 0 && He({
            comparisonPrice: r.value,
            payableTotal: n.value,
            suppressed: i.value,
            hasStoredValue: t.value
        })),
        {
            colors: {
                schemes: y = {}
            }
        } = Re(),
        {
            orderSummary: {
                floatingSummary: {
                    visibility: J
                } = {}
            }
        } = Be(),
        T = J === "visible" && m,
        {
            config: v,
            floatingElementHidden: I,
            ready: f
        } = Ee("floating_summary"),
        {
            offset: w
        } = mn("floating_summary", {
            active: T
        }),
        R = f.value && !I.value;
    xe(() => {
        if (!T) {
            v.value = void 0;
            return
        }
        v.value = {
            blockEndOffset: w.value + gn,
            floatingElementBlockSize: 0,
            floatingElementHiddenBelowTrigger: !0
        }
    }, [w.value, v, T]);
    const b = Ma(R, R ? "fast" : "none");
    if (!T || !f.value || b === "exited") return null;
    const B = y ? .scheme1 ? .base ? .background,
        K = !!(B && !ka(B));
    return e("div", {
        className: k(G.FloatingSummaryWrapper, G[`FloatingSummaryWrapper-${b}`], hn.FloatingLayer),
        style: {
            "--floating-summary-offset": `${w.value}px`,
            "--floating-layer-view-transition-name": "vt-floating-summary"
        },
        children: e(ze, {
            onClick: d,
            accessibilityVisibility: "hidden",
            "data-event-name": "floating_summary",
            children: e(c, {
                className: k(G.FloatingSummary, K && G["FloatingSummary-dark"]),
                alignItems: "center",
                direction: "inline",
                padding: "small-100",
                gap: "small-200",
                children: [e(Me, {
                    merchandise: s,
                    size: "small-200",
                    variant: s.length <= 3 ? "inline" : "fan",
                    max: 3
                }), e(c, {
                    direction: "inline",
                    alignItems: "center",
                    gap: "small-200",
                    children: [e(c, {
                        gap: "small-400",
                        alignItems: "end",
                        children: [e(u, {
                            when: H,
                            children: () => e(h, {
                                size: "small",
                                color: "subdued",
                                type: "redundant",
                                translate: !1,
                                children: l.formatCurrency(r.value.amount, {
                                    currency: r.value.currencyCode,
                                    form: "short"
                                })
                            })
                        }), e($, {
                            paymentDue: n,
                            hideCurrencyCode: !0
                        })]
                    }), e(D, {
                        type: "chevron-down",
                        size: "small-200"
                    })]
                })]
            })
        })
    })
}

function We() {
    const {
        embed: s,
        shop: n
    } = O(), d = n.hasFlagEnabled(Oa), r = Ie(), i = Va();
    return p(() => {
        const t = i.configurationSignal.value.orderSummary ? .collapsedSavingsDisplay,
            l = r.value;
        return {
            showTotalSavings: t !== "base" && !d && !Pe(s ? .embedder) && l && l.amount !== 0
        }
    })
}
const fn = "izreX",
    Sn = {
        LineSpacing: fn
    };

function bn() {
    const {
        i18n: s
    } = O(), n = Ie(), d = We(), r = Wa(), i = p(() => d.value.showTotalSavings ? n.value : void 0), t = p(() => r.value != null || i.value != null);
    return e(u, {
        when: t,
        children: e(c, {
            alignItems: "end",
            gap: "small-500",
            children: [e(u, {
                when: r,
                children: l => e(Ga, {
                    bgnAmount: l
                })
            }), e(u, {
                when: i,
                children: l => e("div", {
                    className: Sn.LineSpacing,
                    children: e(c, {
                        direction: "inline",
                        alignItems: "center",
                        gap: "small-400",
                        children: [e(c, {
                            direction: "inline",
                            alignItems: "center",
                            gap: "small-500",
                            children: [e(D, {
                                type: "savings",
                                size: "small",
                                color: "base"
                            }), e(h, {
                                color: "subdued",
                                children: s.translate("order_summary.total_savings")
                            })]
                        }), e(h, {
                            color: "subdued",
                            translate: !1,
                            children: s.formatCurrency(l.amount, {
                                currency: l.currencyCode,
                                form: "short"
                            })
                        })]
                    })
                })
            })]
        })
    })
}

function Cn() {
    const {
        shop: s,
        i18n: n
    } = O(), d = s.hasFlagEnabled(Ra), r = Ua(), i = Ve(), t = Ne(), l = ke(), g = p(() => {
        const m = l.paymentFlexibilityPaymentTermsTemplate.value;
        if (m ? .dueDate) {
            const H = r(m.dueDate, {
                month: "short"
            });
            return n.translate("order_summary.deferred_total_due_date_label", {
                date: H
            })
        }
        return m ? .type === "FULFILLMENT" ? n.translate("order_summary.payment_terms_totals.due_on_fulfillment") : n.translate("order_summary.total_due_later_label")
    });
    return e(u, {
        when: () => l.recurringTotals.value || t.value && i.value,
        children: e(c, {
            gap: "small-300",
            children: [e($a, {
                cardStyle: !0
            }), e(u, {
                when: () => i.value && d,
                children: e(Ja, {
                    variant: "card"
                })
            }), e(u, {
                when: () => i.value && !d ? t.value : void 0,
                children: m => e(A, {
                    background: "subdued",
                    padding: "small-300",
                    borderRadius: "small",
                    children: e(te, {
                        gridAutoFlow: "column",
                        gridTemplateColumns: "minmax(0, 1fr) minmax(auto, max-content)",
                        gridTemplateRows: "minmax(0, 1fr)",
                        alignItems: "center",
                        alignContent: "center",
                        children: [e(h, {
                            color: "subdued",
                            children: g
                        }), e(h, {
                            color: "subdued",
                            children: n.formatCurrency(m.amount, {
                                currency: m.currencyCode,
                                form: "short"
                            })
                        })]
                    })
                })
            }), e(Ka, {
                variant: "card"
            })]
        })
    })
}

function Tn({
    open: s,
    setOpen: n,
    enabled: d = !0
}) {
    const r = Le(new Set),
        {
            discountCodeWarningSignal: i
        } = Ba(),
        t = Ha(() => wn(i.value || []), [i.value]);
    xe(() => {
        if (!d) return;
        const l = t.some(g => !r.current.has(g));
        !s && l && n(!0), r.current = new Set(t)
    }, [d, s, t, n])
}

function wn(s) {
    return !s || s.length === 0 ? [] : s.map(n => JSON.stringify({
        code: n.discountCode,
        errorCode: n.errorCode ? ? null,
        message: n.message ? ? n.messageHtml ? ? "",
        tone: n.tone ? ? "info"
    }))
}
const Fn = "bsjG3",
    _n = "j2rxR",
    xn = "hQkNb",
    Ln = "NIPDG",
    An = "JuILZ",
    Dn = "LHaS4",
    Hn = "g27Iy",
    In = "FaOzC",
    Pn = "RwFM8",
    Nn = "Hq60r",
    o = {
        FlexHeader: Fn,
        Spacer: _n,
        isHidden: xn,
        Icon: Ln,
        HeaderContent: An,
        HeaderLine: Dn,
        SimplifiedHeader: Hn,
        HeaderClickable: In,
        "HeaderClickable-invisible": "cGOGy",
        ThumbnailBadgeSpace: Pn,
        BadgeGapCompensation: Nn
    },
    U = "mobileOrderSummary",
    se = {
        base: "small-200",
        "large-100": "small-100"
    };

function kn(s) {
    return s === void 0 ? "default" : s ? "simplified" : "flex"
}

function Yn() {
    const s = Qa(),
        {
            value: n
        } = ke().merchandiseLines,
        {
            showTotalSavings: d
        } = We().value,
        r = Ve(),
        {
            checkout: i,
            i18n: t,
            shop: {
                discountCodesEnabled: l,
                name: g
            },
            source: m,
            embed: H
        } = O(),
        {
            configuration: y
        } = i,
        J = i.proposal.facts.merchandiseLines ? ? [],
        ie = Ya(),
        T = l && ie.value,
        v = y.visibility.showReductions,
        I = Pe(H ? .embedder),
        f = I && y.orderSummary ? .placement !== "beforeDetails",
        {
            reductions: {
                position: w,
                disclosureVisibility: R
            },
            orderSummary: {
                isCollapsible: b,
                headerPosition: B,
                defaultState: K,
                chevronSize: Q = "base",
                collapsedSavingsDisplay: Ge,
                thumbnailStyle: Ue
            } = {}
        } = Be(),
        F = Ue === "base",
        oe = w !== "base" && v,
        $e = ja(),
        Je = y.orderSummary ? .layoutStyle === "COMPACT",
        Ke = t.translate("order_summary.payment_terms_totals.due_today_next"),
        {
            amount: re,
            label: Qe
        } = qa(),
        Ye = t.translate("order_summary.pay_merchant_label", {
            merchant_name: g
        }),
        le = p(() => r.value ? Ke : Qe.value),
        ce = y.orderSummary ? .headerPosition ? ? B,
        je = y.orderSummary ? .defaultState ? ? K,
        P = b ? ? !0,
        N = Ne(),
        Y = Ae(),
        qe = De(),
        de = Oe(),
        Ze = Ea(),
        Xe = za(),
        ea = p(() => ce === "BOTTOM" && b === !0 && (Xe.value || !!i.proposal.facts.taxesIncluded) && !Ze.value && !de.value && !!N.value),
        j = Ge === "base",
        ue = j && He({
            comparisonPrice: Y.value,
            payableTotal: N.value,
            suppressed: qe.value,
            hasStoredValue: de.value
        }),
        {
            lineItems: {
                priority: aa = "base"
            },
            moneyLines: {
                color: na
            }
        } = Re(),
        me = y.visibility.showAside,
        q = !y.visibility.showOrderSummaryMerchandiseLines || aa === "high",
        sa = Za("bottom", {
            hideMerchandiseLines: q
        }),
        _ = dn(sa),
        ta = Xa(),
        ia = en(),
        he = d || ue,
        oa = p(() => !_.value && P),
        [a, x] = M(Ia(() => _.value || je === "EXPANDED" || s.value.currentDetour ? .type === "shopPayLogin")),
        [ra, ye] = M(),
        {
            triggerNode: pe,
            floatingElementHidden: la,
            ready: ca,
            setTriggerNode: da
        } = Ee("floating_summary"),
        Z = Pa(null),
        {
            ref: ua,
            max: ma
        } = an("base");
    Tn({
        open: a,
        setOpen: x,
        enabled: oe
    }), Na(() => {
        ta.value && ia.value.hasViolations && x(!0)
    });
    const [X, ee] = M(!1), [ha, ae] = M(!1), ya = V(() => {
        a && X && (ae(!0), ee(!1))
    }, [a, X]), L = t.translate("order_summary.title"), pa = V(() => x(C => !C), []), ga = V(() => {
        const C = pe.value;
        if (!C) return;
        const Aa = Z.value ? .offsetHeight ? ? 0,
            Da = window.scrollY + C.getBoundingClientRect().top - Aa;
        ye({
            duration: 0
        }), x(!0), requestAnimationFrame(() => {
            window.scrollTo({
                top: Da,
                behavior: "smooth"
            }), ye(void 0)
        })
    }, [pe, Z]), {
        totalLineQuantities: va = 0,
        totalLineQuantitiesFact: fa = 0
    } = nn(), E = we(m) ? J : n ? .lines || [], Sa = un(), ba = V(() => {
        x(!0), ee(!0), ae(!1)
    }, [x, ee, ae]), ge = Le(re.peek() ? ? N.peek()), z = p(() => {
        if (r.value) return {
            amount: 0,
            currencyCode: N.value ? .currencyCode ? ? "USD"
        };
        const C = re.value ? ? N.value;
        return C && (ge.current = C), ge.current ? ? {
            amount: 0,
            currencyCode: "USD"
        }
    });
    if (!Sa.value) return null;
    const Ca = t.translate("order_summary.number_items", {
            count: we(m) ? fa : va
        }),
        ve = he && !a && !j && !F ? "start" : "center",
        fe = kn(b),
        Ta = !F || E.length <= 1,
        wa = {
            variant: F ? "inline-discrete" : "fan-legacy",
            size: F ? "base" : "small",
            merchandise: E,
            useImageAltTexts: !1,
            sortByPrice: !F
        },
        Se = fe === "default" && !a,
        Fa = e("div", {
            className: Se ? o.ThumbnailBadgeSpace : void 0,
            children: e(te, {
                gridAutoFlow: "column",
                gridTemplateColumns: a ? "minmax(0, 1fr) minmax(auto, max-content) minmax(auto, max-content)" : "minmax(0, 1fr) auto auto",
                gridTemplateRows: "minmax(0, 1fr)",
                gap: "small-200",
                alignItems: ve,
                alignContent: ve,
                children: [!a && e("span", {
                    className: Fe({
                        screenReaders: "only"
                    }),
                    children: L
                }), e(c, {
                    direction: "inline",
                    gap: "small-200",
                    alignItems: "center",
                    className: o.HeaderContent,
                    ref: ua,
                    children: [E && !a && e(Me, { ...wa,
                        ...F && {
                            max: ma.value
                        }
                    }), !a && Ta && e(c, {
                        gap: "small-400",
                        children: [e("div", {
                            className: o.HeaderLine,
                            children: e(h, {
                                size: f ? "base" : "large",
                                type: "strong",
                                children: le.value
                            })
                        }), e("div", {
                            className: o.HeaderLine,
                            children: e(h, {
                                color: "subdued",
                                children: Ca
                            })
                        })]
                    }), a && e(W, {
                        level: f ? 3 : 1,
                        accessibilityRole: "presentation",
                        children: L
                    })]
                }), e(c, {
                    direction: "inline",
                    alignItems: a ? "center" : "start",
                    gap: "small-200",
                    justifyContent: "end",
                    children: e("div", {
                        className: k(o.HeaderLine, a && o.isHidden),
                        children: e(c, {
                            gap: "small-400",
                            alignItems: "end",
                            children: [ue && e(h, {
                                size: "base",
                                color: "subdued",
                                type: "redundant",
                                translate: !1,
                                children: t.formatCurrency(Y.value.amount, {
                                    currency: Y.value.currencyCode,
                                    form: "short"
                                })
                            }), e($, {
                                paymentDue: z,
                                alignItems: "center",
                                showCurrencyBadge: !0,
                                size: I && !f ? "large" : void 0
                            }), a ? void 0 : e(bn, {})]
                        })
                    })
                }), e("div", {
                    className: k(he && !a && !j && o.Icon),
                    children: e(D, {
                        size: se[Q],
                        type: a ? "chevron-up" : "chevron-down",
                        color: "strong"
                    })
                })]
            })
        }),
        _a = e("div", {
            className: o.SimplifiedHeader,
            children: e(te, {
                gridAutoFlow: "column",
                gridTemplateColumns: "minmax(0, 1fr) minmax(auto, max-content)",
                gridAutoColumns: "1fr",
                gridTemplateRows: "minmax(0, 1fr)",
                gap: "small-200",
                alignItems: "center",
                alignContent: "center",
                children: [e("div", {
                    className: o.HeaderLine,
                    children: e(h, {
                        color: na,
                        children: Ye
                    })
                }), e(c, {
                    direction: "inline",
                    gap: "large-100",
                    alignItems: "center",
                    children: [e(u, {
                        when: () => !_.value,
                        children: e(D, {
                            size: se[Q],
                            type: a ? "chevron-up" : "chevron-down",
                            color: "strong"
                        })
                    }), e($, {
                        paymentDue: z,
                        alignItems: "center",
                        showCurrencyBadge: !1
                    })]
                }), e("span", {
                    className: Fe({
                        screenReaders: "only"
                    }),
                    children: L
                })]
            })
        }),
        be = e(u, {
            when: ea,
            children: e("div", {
                className: o.SimplifiedHeader,
                children: e(rn, {
                    taxesIncluded: !0,
                    variant: "card"
                })
            })
        }),
        xa = e("div", {
            className: o.FlexHeader,
            children: [e(W, {
                level: f ? 3 : 1,
                children: e(u, {
                    when: () => a || _.value,
                    fallback: le,
                    children: L
                })
            }), e(u, {
                when: () => !_.value,
                children: e(Te, {
                    children: [e("div", {
                        className: o.Spacer
                    }), e("div", {
                        className: a ? o.isHidden : void 0,
                        children: e($, {
                            paymentDue: z
                        })
                    }), e(D, {
                        size: se[Q],
                        type: a ? "chevron-up" : "chevron-down",
                        color: "strong"
                    })]
                })
            })]
        }),
        ne = (() => {
            switch (fe) {
                case "default":
                    return e(u, {
                        when: _,
                        fallback: Fa,
                        children: e("div", {
                            className: o.HeaderLine,
                            children: e(W, {
                                level: f ? 3 : 1,
                                children: L
                            })
                        })
                    });
                case "simplified":
                    return _a;
                case "flex":
                    return xa
            }
        })(),
        S = ce === "BOTTOM",
        Ce = e(ze, {
            "data-event-name": a ? "order_summary_hide" : "order_summary_show",
            expanded: a,
            controlId: U,
            onClick: pa,
            inlineSize: "100%",
            className: k(o.HeaderClickable, !a && ca.value && !la.value && o["HeaderClickable-invisible"]),
            children: ne
        }),
        La = e(c, {
            gap: "base",
            accessibilityRole: "section",
            accessibilityLabelledBy: "mobile-order-summary-heading",
            children: [e(W, {
                id: "mobile-order-summary-heading",
                visibility: "hidden",
                children: L
            }), R !== "hidden" && T && oe && !a && (!Je || I) && !b ? e(sn, {
                tone: "monochrome",
                onClick: ba,
                commandFor: U,
                size: "small",
                "aria-expanded": !1,
                children: e(c, {
                    direction: "inline",
                    gap: "small-400",
                    alignItems: "center",
                    children: [e(D, {
                        type: "discount",
                        size: "small-100",
                        tone: "monochrome"
                    }), e(h, {
                        children: t.translate("order_summary.discount_discovery.add_code")
                    })]
                })
            }) : null, e(A, {
                children: [w === "base" && v && e(tn, {
                    id: "inline-reductions",
                    open: !a,
                    duration: "fast",
                    children: e("div", {
                        ref: Z,
                        children: e(A, {
                            paddingBlockEnd: "large-400",
                            children: e(on, {
                                monorailSection: "order_summary",
                                headerLevel: $e.value.payment ? void 0 : 2
                            })
                        })
                    })
                }), e("div", {
                    ref: da,
                    children: e(A, {
                        display: me ? "@media (inline-size >= medium) none, auto" : "auto",
                        className: Se ? o.BadgeGapCompensation : void 0,
                        children: e(cn, {
                            config: ra,
                            onTransitionEnd: ya,
                            children: [!S && Ce, a ? e("div", {
                                id: U,
                                children: e(A, {
                                    paddingBlockStart: S ? void 0 : "small-100",
                                    children: e(_e, {
                                        skipWrappingSection: !0,
                                        hideAccessibilityTitle: !0,
                                        hideMerchandiseLines: q,
                                        hideReductions: !v,
                                        reductionsFieldAutoFocus: X,
                                        reductionsFieldAutoScroll: ha
                                    })
                                })
                            }, "mobile-order-summary-open") : e("div", {
                                id: U
                            }, "mobile-order-summary-closed"), S && a && be, S && Ce]
                        })
                    })
                })]
            }), a ? null : e(Cn, {})]
        });
    return e(Te, {
        children: [e(vn, {
            merchandise: E,
            paymentDue: z,
            onClick: ga
        }), e(u, {
            when: oa,
            fallback: e(c, {
                children: e(A, {
                    display: me ? "@media (inline-size >= medium) none, auto" : "auto",
                    children: [!S && P && ne, !S && P && e(ln, {
                        blockSize: "small-100"
                    }), e(_e, {
                        skipWrappingSection: !0,
                        hideAccessibilityTitle: !0,
                        hideMerchandiseLines: q,
                        hideReductions: !v
                    }), S && P && be, S && P && ne]
                })
            }),
            children: La
        })]
    })
}
export {
    Yn as MobileOrderSummary
};