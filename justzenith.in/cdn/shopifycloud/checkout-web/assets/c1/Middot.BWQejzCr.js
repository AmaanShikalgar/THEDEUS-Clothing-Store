import {
    u as t,
    S as u
} from "./esnext-vendor.BDPAaZdq.js";
import {
    H as _,
    aa as b,
    o as s,
    b as x,
    L as C,
    ah as D,
    b5 as L,
    c as f,
    b6 as E,
    B as I,
    am as M
} from "./hydrate.B0xlt2dG.js";
import {
    O as a,
    b9 as N,
    ba as k,
    n as A
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    L as o
} from "./shop-pay-installments-monorail.D0Myc1k_.js";
import {
    h as R
} from "./helpers-getNormalizedPaymentMethodName.B-mE5wnL.js";
import {
    u as w,
    S as B,
    B as z
} from "./EstimatedDeliveryContent.C1e3pn_u.js";
import {
    u as O,
    m as V
} from "./shipping-methods-consolidated-included.DWdbzJpL.js";
import {
    g as F,
    h as H
} from "./utilities-publishMessage.BORnEDuA.js";
import {
    S as G
} from "./localization-index.Bo8bPuxq.js";
import "./app.D1P6yWfp.js";

function se({
    id: e
}) {
    const {
        i18n: i
    } = a();
    return N().value ? null : t(_, {
        level: 1,
        autoFocus: !0,
        id: e,
        children: i.translate("review.review_title")
    })
}

function ae({
    isVaultedReview: e = !1
}) {
    const {
        i18n: i
    } = a();
    if (e && !R("review.review_notice_html", i)) return null;
    const n = t(b, {
        children: i.translate("review.review_notice_html", {
            terms_of_sale: t(o, {
                handle: "terms-of-sale"
            }),
            privacy_policy: t(o, {
                handle: "privacy-policy"
            }),
            terms_of_service: t(o, {
                handle: "terms-of-service"
            }),
            refund_policy: t(o, {
                handle: "refund-policy"
            }),
            contact_information: t(o, {
                handle: "contact-information"
            }),
            purchase_options_cancellation_policy: t(o, {
                handle: "purchase-options-cancellation-policy"
            }),
            subscription_policy: t(o, {
                handle: "subscription-policy"
            }),
            shipping_policy: t(o, {
                handle: "shipping-policy"
            }),
            legal_notice: t(o, {
                handle: "legal-notice"
            })
        })
    });
    return e ? t(u, {
        children: [t(s, {
            color: "subdued",
            size: "small",
            children: n
        }), t(x, {
            blockSize: "@media (inline-size >= medium) large-200, small-300"
        })]
    }) : n
}

function ce({
    vatNumber: e,
    onAdd: i
}) {
    return e ? t(U, {
        vatNumber: e
    }) : t(q, {
        onAdd: i
    })
}

function U({
    vatNumber: e
}) {
    const {
        i18n: i
    } = a();
    return t(s, {
        color: "subdued",
        children: i.translate("taxes.vat_number.vaulted", {
            number: e
        })
    })
}

function q({
    onAdd: e
}) {
    const {
        i18n: i
    } = a();
    return t(C, {
        onClick: e,
        textDecoration: "none",
        children: i.translate("taxes.vat_number.add")
    })
}

function de({
    deliveryLines: e
}) {
    const {
        i18n: i,
        shop: {
            asyncDeliveryPromiseExperienceEnabled: n
        }
    } = a(), {
        selectedMacro: r
    } = D(), {
        deliveryExpectationLines: v
    } = w(), T = k("deliveryExpectations"), g = L(), y = O(), l = K(e ? ? []);
    if (!r || l.length < 2) return;
    const c = F({
            selectedMethods: l,
            deliveryExpectationLines: v ? ? [],
            deliveryPromiseText: r.deliveryPromisePresentmentTitle ? .short
        }),
        d = !!n && H(l) && T.value,
        p = V(l),
        P = p ? g(p) : void 0,
        S = J({
            deliveryPromiseLoading: d,
            shopPromiseSummary: c,
            formattedTimeInTransit: P ? ? void 0,
            selectedMacroDeliveryPromiseText: r.deliveryPromisePresentmentTitle ? .long
        }),
        m = y.value.groups.length,
        h = j({
            i18n: i,
            deliveryLines: e ? ? [],
            shipmentCount: m > 0 ? m : l.length
        });
    return {
        totalTitle: r.totalTitle,
        totalCost: r.totalCost,
        totalCostAfterDiscounts: r.totalCostAfterDiscounts,
        deliveryPromiseText: S,
        ...h && {
            shipmentCountText: h
        },
        ...c ? .brandedPromise && {
            deliveryPromiseBrandedPromise: c.brandedPromise
        },
        ...d && {
            deliveryPromiseLoading: d
        }
    }
}

function j({
    i18n: e,
    deliveryLines: i,
    shipmentCount: n
}) {
    if (Q(i)) return e.translate("shipping.split_shipping_multiple_shipment_label");
    if (!(n <= 1)) return e.translate("shipping.split_shipping_multiple_shipment_quantity_label", {
        quantity: n
    })
}

function J({
    deliveryPromiseLoading: e,
    shopPromiseSummary: i,
    formattedTimeInTransit: n,
    selectedMacroDeliveryPromiseText: r
}) {
    if (!e) return i ? i.deliveryPromiseText : n || r
}

function K(e) {
    return e.reduce((i, n) => {
        if (n.status !== "available" || n.type !== "ONE_TIME_PURCHASE") return i;
        const r = A(n);
        return r ? .methodType !== "SHIPPING" && r ? .methodType !== "LOCAL" || i.push(r), i
    }, [])
}

function Q(e) {
    return e.some(({
        status: i,
        type: n
    }) => i === "available" && n === "SUBSCRIPTION")
}

function ue({
    summary: e
}) {
    return t(G, {
        methodTitle: e.totalTitle,
        showInterpunct: !0,
        price: t(B, {
            cost: e.totalCost,
            costAfterDiscounts: e.totalCostAfterDiscounts,
            inlineDiscount: !0
        })
    })
}

function pe({
    summary: e,
    secondaryContentColor: i
}) {
    return !e.deliveryPromiseLoading && !e.deliveryPromiseText && !e.shipmentCountText ? null : t(f, {
        direction: "@media (inline-size >= extraSmall) inline, block",
        columnGap: "small-400",
        alignItems: "baseline",
        children: [t(W, {
            summary: e,
            secondaryContentColor: i
        }), e.shipmentCountText ? t(s, {
            color: i,
            children: e.shipmentCountText
        }) : null]
    })
}

function W({
    summary: e,
    secondaryContentColor: i
}) {
    const n = e.shipmentCountText ? t(I, {
        display: "@media (inline-size >= extraSmall) auto, none",
        children: t(s, {
            color: i,
            accessibilityVisibility: "hidden",
            children: E
        })
    }) : null;
    return e.deliveryPromiseLoading ? t(u, {
        children: [t(M, {
            inlineSize: "base"
        }), n]
    }) : e.deliveryPromiseText ? t(u, {
        children: [t(f, {
            direction: "inline",
            gap: "small-300",
            alignItems: "center",
            children: [t(s, {
                color: i,
                children: e.deliveryPromiseText
            }), e.deliveryPromiseBrandedPromise ? t(z, {
                brandedPromise: e.deliveryPromiseBrandedPromise
            }) : null]
        }), n]
    }) : null
}
var X = {
    Middot: "yh3r740"
};

function me() {
    return t("span", {
        "aria-hidden": "true",
        className: X.Middot,
        children: "·"
    })
}
export {
    U as D, me as M, se as R, ue as S, ce as V, pe as a, ae as b, de as u
};