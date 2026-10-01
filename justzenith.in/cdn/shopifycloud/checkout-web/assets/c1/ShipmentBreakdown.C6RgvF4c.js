const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-SubscriptionGroupLine.B09gKcOU.js", "esnext-vendor.BDPAaZdq.js", "hydrate.B0xlt2dG.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css", "ShipmentLine.D7ZK6g9V.js", "MerchandiseModal.WyfeQS3f.js", "EstimatedDeliveryContent.C1e3pn_u.js", "hooks-useShowMobileOrderSummary.DmZ0FrVc.js", "assets/EstimatedDeliveryContent.B_THySFF.css", "SubscriptionPriceBreakdown.DYrSBpqu.js", "assets/SubscriptionPriceBreakdown.vTcdVGq4.css"]))) => i.map(i => d[i]);
import {
    d as k,
    r as f,
    T as w,
    u as e,
    S as v,
    e as T,
    f as d,
    i as I,
    p as B
} from "./esnext-vendor.BDPAaZdq.js";
import {
    H as x,
    U as g,
    c as o,
    F as D,
    aH as z,
    K as C,
    aw as b,
    aI as G,
    I as u,
    o as m,
    O as A,
    aJ as L,
    b as M,
    aK as R
} from "./hydrate.B0xlt2dG.js";
import {
    O as S,
    A as q,
    aY as E
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    u as P,
    M as H,
    a as O,
    b as F,
    g as N
} from "./MerchandiseModal.WyfeQS3f.js";
import {
    b as U
} from "./EstimatedDeliveryContent.C1e3pn_u.js";
import {
    _ as K
} from "./app.D1P6yWfp.js";
const Q = k({
        displayName: "SubscriptionGroupLine",
        load: () => f(() => K(() =>
            import ("./component-SubscriptionGroupLine.B09gKcOU.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])))
    }),
    _ = {
        groupType: z("SUBSCRIPTION"),
        includeDeliverySelectionGroups: !1
    };

function ie({
    subscriptionLines: i
}) {
    const {
        i18n: n,
        shop: t
    } = S(), {
        customizationsBefore: s,
        customizationsAfter: a
    } = P({
        targeted: !0,
        hasMultipleDeliveryGroups: !0
    }).value, l = w(() => t.marketDrivenShippingEnabled ? U(i) : i, [t.marketDrivenShippingEnabled, i]), c = l.length;
    return c === 0 ? null : e(D, {
        gridAutoRows: "minmax(auto, max-content)",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "minmax(auto, max-content)",
        gap: "small-200",
        children: [e(x, {
            level: 3,
            children: n.translate("shipping.shipping_method_recurring_shipments_group_title.other")
        }), e(g, {
            customizations: s,
            options: _
        }), e(o, {
            background: "subdued",
            padding: "base",
            borderRadius: "base",
            gap: "@media (inline-size >= extraSmall) small-100, small-200",
            children: l.map((r, p) => e(Q, {
                subscriptionLine: r,
                subscriptionLinesLength: c,
                index: p,
                showDivider: !1
            }, r.id || q()))
        }), e(g, {
            customizations: a,
            options: _
        })]
    })
}
const J = A("ShipmentBreakdownDetails");

function V({
    targetMerchandiseLines: i,
    selectedDeliveryMethod: n,
    merchandiseQuantityText: t,
    modalHeader: s
}) {
    const a = C(void 0, J);
    return e(v, {
        children: [e(b, {
            commandFor: a,
            children: e(o, {
                direction: "inline",
                alignItems: "center",
                gap: "base",
                children: [i.length > 1 ? e(G, {
                    variant: "fan-legacy",
                    merchandise: i,
                    size: "small",
                    useResponsiveImageSources: !0,
                    useTitleAsAltTextFallback: !0
                }) : e(H, {
                    merchandiseItem: i[0],
                    hideBadge: !0
                }), e(o, {
                    direction: "inline",
                    alignItems: "center",
                    gap: "small-500",
                    children: [e(u, {
                        tone: "accent",
                        type: "truck",
                        size: "small"
                    }), e(m, {
                        tone: "accent",
                        size: "small",
                        children: t
                    })]
                })]
            })
        }), e(O, {
            id: a,
            merchandiseLines: i,
            deliveryMethod: n,
            modalHeader: s
        })]
    })
}

function Y({
    quantityTitle: i,
    open: n,
    onClick: t,
    controlId: s
}) {
    return e(b, {
        expanded: n,
        controlId: s,
        onClick: t,
        children: e(o, {
            direction: "inline",
            gap: "small-400",
            alignItems: "center",
            children: [e(m, {
                children: i
            }), e(u, {
                size: "small-200",
                type: n ? "chevron-up" : "chevron-down"
            })]
        })
    })
}

function ne() {
    const {
        checkout: i,
        i18n: n
    } = S(), t = T(!1), s = F(), a = d(() => N(s.value.selectedDeliveryMethod)), l = d(() => a.value.length), c = d(() => {
        if (!a.value ? .length) return "";
        const r = n.translate("shipping.split_shipping_multiple_shipment_quantity_label", {
            quantity: a.value.length
        });
        return E({
            checkout: i
        }) ? n.translate("shipping.split_shipping_first_shipment_notice", {
            quantity_shipments: r
        }) : n.translate("shipping.split_shipping_shipment_notice", {
            quantity_shipments: r
        })
    }), h = d(() => s.value.selectedDeliveryMethod);
    return e(I, {
        when: h,
        children: r => e(v, {
            children: [e(m, {
                color: "subdued",
                children: e(o, {
                    direction: "inline",
                    alignItems: "center",
                    gap: "small-500",
                    children: [e(u, {
                        type: "truck"
                    }), e(Y, {
                        quantityTitle: c.value,
                        open: t.value,
                        onClick: () => t.value = !t.value,
                        controlId: "shipmentBreakdown"
                    })]
                })
            }), e(L, {
                open: t.value,
                id: "shipmentBreakdown",
                children: [e(M, {
                    blockSize: "small-100"
                }), e(o, {
                    gap: "small-100",
                    children: e(B, {
                        each: a,
                        children: ({
                            targetMerchandiseLines: p
                        }, y) => e(V, {
                            targetMerchandiseLines: p,
                            selectedDeliveryMethod: r,
                            merchandiseQuantityText: n.translate("order_summary.discount_discovery.merchandise_quantity_label", {
                                count: R(p)
                            }),
                            modalHeader: n.translate("shipping.split_shipping_merchandise_shipment_number", {
                                number: y + 1,
                                total: l.value
                            })
                        })
                    })
                })]
            })]
        })
    })
}
export {
    ne as S, ie as a
};