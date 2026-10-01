import {
    A as D,
    f as m,
    l as h,
    u as i,
    h as k
} from "./esnext-vendor.BDPAaZdq.js";
import {
    P as S,
    bx as T,
    aE as A,
    aA as B,
    n as P,
    O as G
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    v as y,
    ao as I,
    e as z,
    s as R,
    o as f,
    F as x,
    a4 as E,
    B as C,
    bt as F,
    bB as N,
    b as g,
    a5 as L,
    bn as _
} from "./hydrate.B0xlt2dG.js";
import {
    u as O,
    E as H,
    S as U
} from "./EstimatedDeliveryContent.C1e3pn_u.js";

function q(e) {
    switch (e) {
        case "2023-04":
        case "2023-07":
        case "2023-10":
            return !1;
        case "unstable":
            return !0;
        default:
            return !0
    }
}

function ne({
    targeted: e,
    hasMultipleDeliveryGroups: t,
    shouldHandleRollup: n
}) {
    const o = h(y("Checkout::ShippingMethods::RenderBefore")),
        r = h(y("Checkout::ShippingMethods::RenderAfter")),
        s = h(t);
    return m(() => {
        const l = e === s.value,
            a = b(o.value, l, e),
            u = b(r.value, l, e);
        return n ? l ? {
            customizationsBefore: a,
            customizationsAfter: u,
            customizationsForRollupReveal: [...a, ...u]
        } : {
            customizationsBefore: a,
            customizationsAfter: u,
            customizationsForRollupReveal: e ? [] : [...v(o.value), ...v(r.value)]
        } : {
            customizationsBefore: a,
            customizationsAfter: u
        }
    })
}

function b(e, t, n) {
    return t ? n ? v(e) : e : []
}

function v(e) {
    return e.filter(t => t.kind !== "uiExtension" ? !0 : q(t.extension.apiVersion))
}

function re() {
    const {
        deliveryNext: e
    } = S(), t = D(void 0);
    return m(() => V(e.value, t))
}

function V(e, t) {
    if (!!T(e)) return t.current = void 0, {
        hasMultipleDeliveryGroups: !0,
        onlyDeliveryGroupType: void 0
    };
    const r = (e ? .status === "filled" ? e.lines : []).filter(u => u.status !== "not_required" && !u.hasNoDeliveryMethods),
        s = r[0] ? .type,
        l = r.length > 1,
        a = l || !s ? void 0 : s;
    return a !== void 0 ? t.current = a : l && (t.current = void 0), {
        hasMultipleDeliveryGroups: l,
        onlyDeliveryGroupType: a ? ? t.current
    }
}

function $({
    merchandiseItem: e,
    hideBadge: t,
    size: n = "small"
}) {
    if (e == null) return null;
    const {
        title: o,
        quantity: r,
        image: s
    } = e, a = r !== 1 ? r : void 0;
    return i(I, {
        size: n,
        alt: s ? .altText || o,
        src: s ? .one,
        srcSet: s ? `${s.one} 1x, ${s.two} 2x, ${s.four} 4x` : void 0,
        totalItems: t ? void 0 : a
    })
}
const c = {
    showShipmentBreakdown: !1
};

function w(e) {
    return !e || e.status === "not_required" ? !1 : e.methods.some(({
        methodType: t
    }) => t === "LOCAL")
}

function M(e) {
    return e ? .methodType !== "SHIPPING" && e ? .methodType !== "PICKUP_POINT" ? [] : e.priceBreakdown ? ? []
}

function ie() {
    const e = S().deliveryNext,
        t = z();
    return m(() => {
        const n = e.value;
        if (!n || n.status !== "filled") return c;
        const o = n.splitShippingToggle;
        if (!o) return c;
        const r = A(n).filter(p => B(p) && !(R(t.value.currentDetour) && p.type === "SUBSCRIPTION")),
            s = r[0];
        if (w(s)) return c;
        const l = P(s),
            a = M(l),
            u = a[0] ? .flatRateGroupId;
        return !(!T(n) && u && a.every(({
            flatRateGroupId: p
        }) => p === u)) && r.length !== 1 || !l || a.length <= 1 ? c : {
            showShipmentBreakdown: o,
            selectedDeliveryMethod: l
        }
    })
}

function se() {
    const e = S().deliveryNext;
    return m(() => {
        const t = e.value;
        return !t || t.status !== "filled" || !t.splitShippingToggle ? !1 : t.lines.filter(r => !w(r)).map(P).filter(r => r !== void 0).some(r => M(r).length > 1)
    })
}

function Q({
    deliveryExpectationLine: e,
    deliveryMethod: t,
    children: n
}) {
    const {
        observability: o
    } = G(), r = D(!1);
    return k(() => {
        if (r.current) return;
        const s = t.brandedPromise ? .handle ? ? e ? .brandedPromise ? .handle ? ? "unbranded";
        r.current = !0, o.counter({
            name: "PostPurchase_page_delivery_prediction_rendered",
            value: 1,
            attributes: {
                handle: s
            }
        })
    }, [e ? .brandedPromise ? .handle, t.brandedPromise ? .handle, o]), n
}

function j({
    deliveryMethod: e,
    subtitle: t,
    isInModal: n = !1,
    choiceListContext: o = !0,
    useBaseFontSize: r,
    showSubtitleFallback: s = !0
}) {
    const {
        deliveryExpectationLines: l
    } = O(), a = l ? .find(d => d.deliveryStrategyHandle === e.handle), u = n || r ? void 0 : "small";
    return t ? i(f, {
        size: u,
        color: "subdued",
        children: t
    }) : s ? i(Q, {
        deliveryExpectationLine: a,
        deliveryMethod: e,
        children: i(H, {
            deliveryMethod: e,
            deliveryExpectationLine: a,
            size: u,
            choiceListContext: o && !n,
            paragraphColor: "subdued"
        })
    }) : null
}

function J({
    merchandiseItem: {
        title: e
    }
}) {
    return i(f, {
        children: e
    })
}

function W({
    merchandiseItem: {
        subtitle: e
    },
    textDefaultProps: t
}) {
    return e ? i(f, { ...t,
        children: e
    }) : null
}

function K({
    merchandiseItem: e,
    thumbnailSize: t,
    thumbnailContentGap: n
}) {
    const {
        lineItems: {
            optionsColor: o = "subdued"
        }
    } = E();
    return i(x, {
        gridAutoFlow: "column",
        gridTemplateColumns: "minmax(auto, max-content) minmax(0, 1fr)",
        gridTemplateRows: "minmax(0, 1fr)",
        gap: n,
        children: [i($, {
            merchandiseItem: e,
            size: t
        }), i(C, {
            blockAlignment: "center",
            children: [i(J, {
                merchandiseItem: e
            }), i(W, {
                merchandiseItem: e,
                textDefaultProps: {
                    size: "small",
                    color: o
                }
            })]
        })]
    })
}

function X({
    merchandise: e,
    thumbnailSize: t = "small",
    merchandiseItemGap: n = "small-200",
    merchandiseItemPadding: o = "none",
    thumbnailContentGap: r = "small-200"
}) {
    return i(x, {
        gridAutoRows: "minmax(auto, max-content)",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "minmax(auto, max-content)",
        gap: n,
        padding: o,
        children: e.map(s => i(K, {
            merchandiseItem: s,
            thumbnailSize: t,
            thumbnailContentGap: r
        }, s.stableId))
    })
}

function oe({
    id: e,
    merchandiseLines: t = [],
    deliveryMethod: n,
    modalHeader: o,
    subtitle: r,
    showSubtitleFallback: s,
    choiceListContext: l = !0,
    showPrice: a,
    open: u
}) {
    const d = n.included ? i(F, {
        strong: !l
    }) : i(U, {
        cost: n.cost,
        costAfterDiscounts: n.costAfterDiscounts,
        styleOverrides: {
            shouldBold: !l,
            freeTextLetterCase: "uppercase",
            costSpacing: "none"
        }
    });
    return i(N, {
        heading: o,
        id: e,
        open: u,
        children: [i(X, {
            merchandise: t,
            thumbnailSize: "base",
            merchandiseItemGap: "base",
            merchandiseItemPadding: "small-100 none none none"
        }), i(g, {
            blockSize: "large-200"
        }), i(L, {}), i(g, {
            blockSize: "base"
        }), i(x, {
            gridAutoFlow: "column",
            gridTemplateColumns: "minmax(0, 1fr) minmax(auto, max-content)",
            gridTemplateRows: "minmax(0, 1fr)",
            children: [i(C, {
                blockAlignment: "start",
                children: [i(f, {
                    children: _({
                        deliveryMethod: n
                    })
                }), i(j, {
                    subtitle: r,
                    showSubtitleFallback: s,
                    deliveryMethod: n,
                    choiceListContext: l,
                    isInModal: !0
                })]
            }), a ? d : null]
        }), i(g, {
            blockSize: "large-200"
        })]
    })
}
export {
    X as E, $ as M, j as S, oe as a, ie as b, re as c, se as d, M as g, ne as u
};