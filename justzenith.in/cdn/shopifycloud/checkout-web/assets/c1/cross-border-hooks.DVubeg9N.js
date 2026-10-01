import {
    hW as c,
    Q as p,
    cE as m,
    cG as a,
    O as l
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    f as C,
    q as u
} from "./esnext-vendor.BDPAaZdq.js";
import {
    cp as A
} from "./hydrate.B0xlt2dG.js";

function f(t, ...[i]) {
    const r = (() => {
        switch (t.redemptionSource) {
            case "SHOP_CASH":
                {
                    const e = t.redemptionContent,
                        n = e.billingAddress ? .streetAddress,
                        o = !!(n ? .address1 || n ? .extendedFields) && n ? n : i;
                    return {
                        shopCashRedemptionContent: {
                            redemptionId: e.redemptionId,
                            billingAddress: {
                                streetAddress: o
                            },
                            destinationAmount: e.destinationAmount,
                            sourceAmount: e.sourceAmount,
                            redemptionPaymentOptionKind: e.redemptionPaymentOptionKind,
                            details: e.details ? .map(s => ({
                                redemptionId: s.redemptionId,
                                destinationAmount: {
                                    amount: s.destinationAmount.amount,
                                    currencyCode: s.destinationAmount.currencyCode
                                },
                                sourceAmount: s.sourceAmount ? {
                                    amount: s.sourceAmount.amount,
                                    currencyCode: s.sourceAmount.currencyCode
                                } : null,
                                redemptionType: s.redemptionType
                            }))
                        }
                    }
                }
            case "STORE_CREDIT":
                return {
                    storeCreditRedemptionContent: {
                        storeCreditAccountId: t.redemptionContent.storeCreditAccountId
                    }
                };
            case "CUSTOM":
                {
                    const e = t.redemptionContent;
                    return {
                        customRedemptionContent: {
                            paymentMethodIdentifier: e.paymentMethodIdentifier,
                            redemptionAttributes: e.redemptionAttributes,
                            maskedIdentifier: e.maskedIdentifier
                        }
                    }
                }
            default:
                throw new c(`Redemption source ${t.redemptionSource} not implemented`)
        }
    })();
    return {
        redemptionSource: t.redemptionSource,
        redemptionContent: r
    }
}

function P(t) {
    return {
        paymentMethod: f(t.paymentMethod)
    }
}

function y(t, i, {
    dismissible: r = !0,
    onCancel: e
} = {}) {
    let n = null;
    const d = new Promise(o => {
        n = o
    });
    t.setCrossBorderConfirmState({
        onConfirm: o => {
            t.setCrossBorderConfirmState(null), o.setSelectedMethodTypes(["SHIPPING"]), i(), n ? .()
        },
        ...r && {
            onCancel: () => {
                t.setCrossBorderConfirmState(null), e ? .(), n ? .()
            }
        },
        modalPromise: d
    })
}

function B() {
    const {
        checkout: t
    } = l(), {
        locationAddress: i
    } = p(), r = A(), e = u(d => {
        const o = i.fields.countryCode.value;
        return !!(r.value && o && d !== o)
    }, [i, r]), n = u((d, {
        dismissible: o = !0,
        onCancel: s
    } = {}) => {
        y(t, d, {
            dismissible: o,
            onCancel: s
        })
    }, [t]);
    return {
        shouldGateCrossBorder: e,
        crossBorderGate: n
    }
}

function R() {
    const {
        shippingAddress: t
    } = p(), i = m();
    return C(() => {
        const r = t.value ? .countryCode;
        if (!r) return !1;
        const e = i.value;
        if (!e) return !1;
        const n = a(e) ? .pickupLocation ? .address.countryCode;
        return n ? r !== n : !1
    })
}
export {
    f as a, R as b, P as g, B as u
};