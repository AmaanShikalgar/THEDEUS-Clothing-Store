import {
    u as e,
    S as x,
    q as z,
    l as N,
    f as C,
    i as M,
    A as R,
    h as ae,
    g as ne,
    k as oe,
    T as se,
    e as ie
} from "./esnext-vendor.BDPAaZdq.js";
import {
    a4 as le,
    o as A,
    ci as re,
    e as D,
    W as ue,
    E as ce,
    b as F,
    bw as de,
    dz as ye,
    a9 as I,
    cV as pe,
    j1 as H,
    l as O,
    B as S,
    al as V,
    j2 as me,
    A as Pe,
    C as he,
    j3 as ge,
    bk as ve,
    F as L,
    ao as be,
    aw as fe,
    I as Se,
    aJ as ke,
    ip as Ce,
    j4 as Be,
    ij as we,
    j5 as xe,
    j6 as _e,
    ik as Ee,
    il as Le,
    im as Te,
    j7 as Ne,
    ez as Re,
    a5 as Ae,
    c as $,
    cC as Me,
    L as Oe,
    bB as We,
    P as j,
    Q as ze,
    g8 as De,
    gS as Fe,
    H as Ie
} from "./hydrate.B0xlt2dG.js";
import {
    O as g,
    a5 as G,
    d7 as B,
    aS as He,
    P as q,
    a6 as Ve,
    ba as $e,
    m8 as je,
    Q as Ge,
    m9 as qe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    c as J,
    j as Je,
    g as K,
    h as Ke,
    u as Qe,
    d as Ue
} from "./hooks-useWalletsTimeout.i08rvNYN.js";
import {
    u as Ye
} from "./hooks-useHasOrdersFromMultipleShops.C_XGQrjx.js";
import {
    k as Ze
} from "./PayButton-helpers.Dg5kgVMm.js";
import {
    a as Q
} from "./hooks-useWalletsMonorailTrack.CvfUTPBc.js";
import {
    A as Xe
} from "./app.D1P6yWfp.js";

function et({
    children: t,
    size: n = "medium",
    ignoreBranding: a = !1
}) {
    const {
        primaryButton: {
            typography: {
                size: o
            } = {}
        }
    } = le();
    return n && !o || a ? e(A, {
        size: n,
        children: t
    }) : e(x, {
        children: t
    })
}

function tt(t) {
    const n = document.getElementById(t);
    n && n.dispatchEvent(new Event("submit", {
        bubbles: !0,
        cancelable: !0
    }))
}

function at(t) {
    return t.current.value === "payPal"
}

function At() {
    const t = J().value,
        n = Je(),
        {
            i18n: a,
            checkout: o
        } = g(),
        l = o.configuration.layout.isOnePage.value,
        i = re(),
        {
            currentPage: u
        } = D().value,
        r = u ? .id === "review",
        c = at(o.identity);
    if (l && !c || !l && i.value && !r || !n.value || !t) return null;
    const P = a.translate("payment_errors.paypal_over_capture", {
        walletName: a.translate("brand.paypal")
    });
    return e(x, {
        children: [e(ue, {
            errorType: ce.PaymentError,
            tone: "info",
            children: P
        }), l && e(F, {
            blockSize: "large-200"
        })]
    })
}

function nt() {
    const t = g(),
        {
            shopPay: n,
            mobileCheckoutSdk: a
        } = t,
        {
            isAppLayout: o
        } = de();
    if (n.visibility.shouldRenderFloatingShopPayButton) return "floating";
    const l = a.variant.isPartner();
    return Ze(t.checkout, {
        isPartnerSdkEnabled: l,
        isAppLayout: o
    }) ? "sticky" : "inline"
}

function ot() {
    return nt() !== "inline"
}
const st = "SJwrb",
    it = "NIOCQ",
    lt = "_20EXH",
    T = {
        Wrapper: st,
        ButtonWhenSkeletonDisplayed: it,
        SkeletonOverlay: lt
    };

function rt({
    disabled: t = !1,
    loading: n = !1,
    pixelId: a,
    setRef: o,
    buttonContent: l
}) {
    const i = ye(),
        u = ot(),
        r = I(),
        c = pe(),
        p = z(b => {
            a && r(a)(b), o ? .(b)
        }, [a, r, o]),
        {
            i18n: P,
            checkout: s,
            observability: y
        } = g(),
        d = s.configuration.layout.isOnePage.value,
        {
            applePaySessionHandler: m,
            inMemoryApplePayParts: {
                isLoadingPaymentSheet: h,
                sessionLoadFailed: v
            }
        } = G(),
        f = N(t),
        _ = N(n),
        w = C(() => m.value ? .onClickHandler),
        E = C(() => w.value == null);
    K([{
        walletName: Q.ApplePay,
        isRendered: () => w.value != null,
        isLoading: () => w.value == null && !v.value,
        onTimeout: () => {
            v.value = !0
        }
    }], H());
    const U = C(() => h.value || _.value),
        Y = C(() => h.value || f.value || E.value),
        Z = d && u && i ? .id ? () => tt(i.id) : void 0,
        X = d ? Z : () => {
            const b = w.value;
            if (b == null) {
                y.error(new Xe("Pay with Apple Pay button clicked without a ready session handler."));
                return
            }
            b({
                disabled: f.value,
                isMountedRef: c
            })
        };

    function ee() {
        if (l) return l;
        const b = P.translate("general.pay_now_button_label");
        return d ? e(et, {
            children: b
        }) : b
    }
    const te = ee(),
        W = E.value;
    return e(S, {
        className: T.Wrapper,
        inert: W || void 0,
        children: [e(O, {
            variant: "primary",
            size: d ? "base" : "large",
            type: d ? "submit" : "button",
            inlineSize: "fill",
            loading: U.value,
            loadingMode: "extended",
            disabled: Y.value,
            ref: p,
            onClick: X,
            className: W ? T.ButtonWhenSkeletonDisplayed : void 0,
            children: te
        }), e(M, {
            when: E,
            children: e(S, {
                className: T.SkeletonOverlay,
                children: e(V, {
                    contentDisplay: "block",
                    inlineSize: "100%",
                    blockSize: "100%"
                })
            })
        })]
    })
}
const ut = {
        "PaymentButtonSize-base": "vzWSA"
    },
    ct = `calc(${B.button.primary.blockPadding} * 2 + ${B.fontSize.medium} * ${B.lineHeight.base})`,
    dt = `calc(${B.button.primary.blockPadding} * 2 * 1.5 + ${B.fontSize.base} * ${B.lineHeight.base})`,
    yt = {
        base: {
            blockSize: ct,
            className: ut["PaymentButtonSize-base"]
        },
        large: {
            blockSize: dt
        }
    },
    pt = "RTmkG",
    mt = "_8Flfy",
    Pt = "h1pXK",
    ht = "E4OHT",
    gt = "NFpbC",
    vt = "vnCpz",
    k = {
        PayPalExpressButtonContainer: pt,
        PayPalExpressButtonSizer: mt,
        PayPalExpressButtonContainerOnePageCheckout: Pt,
        PayPalExpressButtonContainerWhenLoading: ht,
        PayPalExpressButtonSkeletonOverlay: gt,
        isHidden: vt
    };

function bt({
    isLoading: t,
    showSkeleton: n,
    hidden: a = !1,
    setRef: o,
    children: l
}) {
    const {
        source: i,
        checkout: u
    } = g(), r = u.configuration.layout.isOnePage.value, c = i.type === "simulated", p = n.value;
    let P;
    return !a && p && r && (P = yt.base.className), e(S, {
        ref: o,
        className: ne(k.PayPalExpressButtonContainer, P, {
            [k.PayPalExpressButtonContainerOnePageCheckout]: r,
            [k.PayPalExpressButtonContainerWhenLoading]: t,
            [k.isHidden]: a
        }),
        inert: c || p,
        children: [l, e(M, {
            when: n,
            children: e(S, {
                className: k.PayPalExpressButtonSkeletonOverlay,
                children: e(V, {
                    contentDisplay: "block",
                    inlineSize: "100%",
                    blockSize: "100%"
                })
            })
        })]
    })
}

function ft({
    disabled: t,
    loading: n,
    hidden: a = !1,
    setRef: o
}) {
    const {
        checkout: l,
        i18n: i
    } = g(), u = R(null), r = l.configuration.layout.isOnePage.value, c = me(), p = Pe(), {
        inMemoryPayPalParts: P,
        inMemoryVenmoParts: s
    } = G(), y = he(p), d = y ? s.buttonStatus : P.payWithPayPalButtonStatus, {
        checkoutProtocolModalEventSignal: m
    } = He();
    ae(() => (a ? m.value = "none" : m.value = "paypal", () => {
        m.value = "none"
    }), [a, m]), K([{
        walletName: Q.PayPalV6,
        isRendered: () => d.value.status === "rendered",
        isLoading: () => d.value.status === "not_rendered",
        onTimeout: () => {
            d.value = {
                status: "error"
            }
        }
    }], H());
    const h = N(a),
        v = C(() => !h.value && d.value.status !== "rendered" && d.value.status !== "error" && d.value.status !== "not_eligible"),
        f = {
            buttonLabel: "pay",
            isPayWithPayPalFlow: !0,
            progressToNextPage: !0,
            buttonColor: "blue",
            isDisabled: c.value || t || !1,
            fundingSource: `${y?"venmo":"paypal"}`,
            sizingButtonRef: r ? void 0 : u
        },
        _ = c.value || n || !1;
    return e(bt, {
        isLoading: _,
        showSkeleton: v,
        hidden: a,
        setRef: o,
        children: [!r && e(S, {
            inert: !0,
            children: e(O, {
                ref: u,
                className: k.PayPalExpressButtonSizer,
                variant: "primary",
                size: "large",
                inlineSize: "fill",
                type: "button",
                children: i.translate("general.pay_now_button_label")
            })
        }), e(Ke, { ...f
        })]
    })
}
const St = "tEAw2",
    kt = {
        CheckoutExitPayButton: St
    };

function Mt({
    children: t
}) {
    const {
        observability: n,
        checkout: {
            wallets: a,
            identity: o
        }
    } = g(), l = ge(), i = D(), u = q().buyerIdentity, r = R(), c = R(), p = Ve();
    ve(s => {
        r.current = void 0, c.current = void 0, "violations" in s && (r.current = s.violations.map(y => y.code)), "reasons" in s && (c.current = s.reasons)
    });

    function P(s) {
        if (s.detail > 2) {
            const y = p.parts.paymentLines.value.map(h => h.method.type === "wallet" || h.method.type === "walletsPlatformPaymentMethod" ? h.method.name : h.method.type),
                d = i.value.currentDetour ? .type ? ? i.value.currentPage ? .id ? ? "unknown",
                m = {
                    identity: o.current.value,
                    activeWallet: a.activeSession.value ? .wallet ? ? null,
                    asPaymentMethod: a.activeSession.value ? .asPaymentMethod ? ? !1,
                    journeyStep: d,
                    primaryPaymentLine: y.at(0)
                };
            n.counter({
                name: "pay_now_rage_click",
                value: 1,
                attributes: m
            }), n.log("rage_click_capture_pay_now_rage_click_detected", "pay_now_rage_click", {
                customerProfile: u.value ? .customerProfile ? .__typename,
                numberOfErrors: l ? .numberOfErrors() ? ? "unknown",
                lastInterceptionReasons: c.current,
                lastViolations: r.current,
                blocked: p.isBlocked.value,
                paymentLineNames: y,
                ...m
            })
        }
    }
    return e("div", {
        onClickCapture: P,
        children: t
    })
}

function Ct({
    shopId: t,
    shopName: n,
    shopLogo: a,
    amount: o,
    showDivider: l,
    isLocalShop: i
}) {
    const [u, r] = oe(!1), {
        i18n: c
    } = g();
    return e($, {
        gap: "base",
        children: [e(L, {
            gridAutoFlow: "column",
            gridTemplateColumns: "minmax(auto, max-content) minmax(0, 1fr)",
            gridTemplateRows: "minmax(0, 1fr)",
            gap: "base",
            children: [e(S, {
                children: e(be, {
                    size: "small",
                    src: a,
                    alt: n
                })
            }), e(S, {
                blockAlignment: "center",
                children: [e(fe, {
                    "aria-expanded": u,
                    "aria-controls": `separate-payments-collapsible-${t}`,
                    onClick: () => r(p => !p),
                    children: e(L, {
                        gridAutoFlow: "column",
                        gridTemplateColumns: "minmax(0, 1fr) minmax(auto, max-content)",
                        gridTemplateRows: "minmax(0, 1fr)",
                        gap: "base",
                        children: [e(A, {
                            type: "strong",
                            children: n
                        }), e(L, {
                            gridAutoFlow: "column",
                            gridAutoColumns: "minmax(auto, max-content)",
                            gridTemplateColumns: "minmax(auto, max-content)",
                            gridTemplateRows: "minmax(0, 1fr)",
                            gap: "small-200",
                            alignItems: "center",
                            alignContent: "center",
                            children: [!u && e(A, {
                                type: "strong",
                                children: c.formatCurrency(o.amount, {
                                    currency: o.currencyCode,
                                    form: "short"
                                })
                            }), e(Se, {
                                type: u ? "chevron-up" : "chevron-down",
                                size: "small-200"
                            })]
                        })]
                    })
                }), e(ke, {
                    open: u,
                    id: `separate-payments-collapsible-${t}`,
                    children: [e(F, {
                        blockSize: "small-200"
                    }), e(Ce, {
                        title: c.translate("order_summary.cost_table_title"),
                        children: [e(Be, {
                            shopId: t
                        }), i && e(we, {
                            disableTooltip: !0
                        }), e(xe, {
                            shopId: t
                        }), e(_e, {
                            shopId: t
                        }), i && e(Ee, {}), i && e(Le, {}), i && e(Te, {
                            disableTooltip: !0
                        }), e(Ne, {
                            shopId: t
                        }), i && e(Re, {
                            shopId: t
                        })]
                    })]
                })]
            })]
        }), l && e(Ae, {
            direction: "inline",
            borderWidth: "base"
        })]
    })
}

function Ot() {
    const {
        i18n: t,
        shop: {
            name: n,
            id: a,
            brandSettings: o,
            remoteShopsConfigMap: l
        }
    } = g(), i = $e("remoteMerchandiseDetails").value, u = Ye().value, r = je(), c = Me(), p = se(() => {
        const s = [];
        for (const [y, d] of r.value) {
            if (!d) continue;
            if (c.value && y === a) {
                s.push({
                    shopName: n,
                    shopLogo: o ? .squareLogo ? .url,
                    shopId: a,
                    amount: d
                });
                continue
            }
            const m = l ? .get(y);
            m && s.push({
                shopName: m.name,
                shopId: y,
                shopLogo: m.brandSettings ? .squareLogo ? .url,
                amount: d
            })
        }
        return s
    }, [r.value, a, n, o ? .squareLogo ? .url, l, c.value]);
    if (i || !u) return null;
    const P = e(x, {
        children: [e(Oe, {
            textDecoration: "none",
            commandFor: "separate-payments-modal",
            children: t.translate("payment.separate_payments_text")
        }), e(We, {
            id: "separate-payments-modal",
            heading: t.translate("payment.payments"),
            children: e($, {
                gap: "base",
                children: p.map((s, y) => e(Ct, {
                    shopId: s.shopId,
                    shopName: s.shopName,
                    shopLogo: s.shopLogo,
                    amount: s.amount,
                    showDivider: y !== p.length - 1,
                    isLocalShop: s.shopId === a
                }, s.shopId))
            })
        })]
    });
    return e(j, {
        color: "subdued",
        children: t.translate("payment.separate_payments_label", {
            separate_payments_link: P
        })
    })
}

function Wt() {
    const {
        i18n: t,
        shop: n
    } = g(), a = Ge().paymentLines.value;
    return !n.vaultForPaymentLater || !qe(a) ? null : e(j, {
        color: "subdued",
        children: t.translate("payment.vault_for_payment_later.notice")
    })
}

function zt() {
    const t = q().captcha;
    return C(() => !!t.value)
}
const Dt = ({
    disabled: t,
    loading: n,
    defaultLabel: a,
    pixelId: o
}) => {
    const {
        i18n: l
    } = g(), {
        nextPage: i
    } = ze(), u = I(), r = i.id === "review", c = J().value, p = Qe().value, P = Ue().value, s = De(), y = Fe(), d = z(f => {
        u(o)(f), y(f)
    }, [u, y, o]), m = p && !P, h = c && !P, v = ie(!1);
    return h && !v.value && (v.value = !0), e(x, {
        children: [e(Ie, {
            id: "checkout-pay-heading",
            tabIndex: -1,
            visibility: "hidden",
            children: l.translate("general.finalize_order_accessibility_label")
        }), e(M, {
            when: v,
            children: e(ft, {
                disabled: t,
                loading: n,
                hidden: !h
            })
        }), m && e(rt, {
            disabled: t,
            loading: n,
            pixelId: o
        }), !h && !m && e(O, {
            id: "checkout-pay-button",
            variant: "primary",
            size: "large",
            type: "submit",
            inlineSize: "fill",
            loading: n,
            disabled: t,
            ref: d,
            className: s && !r ? kt.CheckoutExitPayButton : void 0,
            children: a
        })]
    })
};
export {
    At as P, Mt as R, Ot as S, Wt as V, Dt as a, yt as b, et as c, nt as d, ot as e, ft as f, rt as g, kt as p, tt as t, zt as u
};