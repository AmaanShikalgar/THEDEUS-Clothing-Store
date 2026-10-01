import {
    A as G,
    h as J,
    T as E,
    q as Q,
    l as de,
    f as ue
} from "./esnext-vendor.BDPAaZdq.js";
import {
    bX as le,
    aS as pe,
    P as Z,
    bY as ye,
    bZ as ce,
    O as M,
    Q as $,
    aW as me,
    V as j,
    b_ as he,
    aX as Pe,
    b$ as K,
    c0 as ve,
    c1 as fe,
    c2 as Ce,
    c3 as Se,
    c4 as ge,
    c5 as be,
    c6 as V,
    G as Ae,
    S as Me,
    c7 as Te,
    aH as _e
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    h as ee,
    bR as ke,
    bS as W,
    bT as Le
} from "./hydrate.B0xlt2dG.js";
import {
    h as Ie
} from "./hooks-useShopPayExternalAppContext.DyGXtar4.js";
import {
    s as Fe,
    i as we
} from "./helpers-derivations.DLW2fhKL.js";
class De extends Error {
    constructor() {
        super(...arguments), this.name = "UnsupportedShopPayCustomerCardError"
    }
}

function Je({
    allowPreselect: e = !0,
    displayedPaymentMethods: t
} = {}) {
    const n = le(),
        {
            hasNegotiatedAlternativePaymentCurrencySignal: a,
            newCardSignal: r
        } = pe(),
        o = Z(),
        y = o.paymentMethods,
        {
            value: s
        } = ye(),
        {
            negotiate: i
        } = ee(),
        P = o.paymentLines,
        S = ce(),
        {
            checkout: {
                identity: l
            },
            observability: p,
            userEvents: m,
            shop: te
        } = M(),
        {
            currencyCode: T,
            id: x,
            paymentMethodAutoSelectionDisabled: ne
        } = te,
        v = l.current.value === "shopPay",
        g = !v,
        c = Y(t ? ? s, v),
        {
            value: ae
        } = o.buyerIdentity,
        d = $().paymentLines,
        {
            value: U
        } = o.deferredTotal,
        {
            value: H
        } = o.paymentFlexibilityPaymentTermsTemplate,
        O = me(),
        _ = ae ? .presentmentCurrency || T,
        oe = ke(),
        k = G(!1),
        q = G(!1),
        b = v ? d.value.find(u => u.method.type === j.CreditCard) ? .method.type : void 0;
    J(() => {
        !b || q.current || (q.current = !0, p.counter({
            name: "shop_pay_unsupported_customer_card_on_payline",
            value: 1,
            attributes: {
                payment_method_type: b
            }
        }), p.error(new De("Shop Pay proposed payment line contains an unsupported Customer Account saved card"), {
            severity: "warning",
            metadata: {
                value: {
                    paymentMethodType: b
                }
            }
        }))
    }, [p, b]);
    const f = E(() => {
            const u = c.find(he);
            if (g && u && Pe(d.value)) return K(u);
            const C = d.value.filter(h => ve(h, c, {
                    identity: l
                }) || fe(h)),
                I = Ce(C),
                [A] = I;
            return A !== void 0 ? A : (p.leaveErrorBreadcrumb("Unexpected: Selected payment method is empty because `paymentLines` array is empty", {
                displayedPaymentMethods: JSON.stringify(c),
                displayedProposedPaymentLines: JSON.stringify(C)
            }), "")
        }, [c, l, p, d.value, g]),
        L = Q((u, C, {
            rebuild: I = !1,
            buyerInitiated: A = !1
        } = {}) => {
            const h = d.value,
                F = Y(t ? ? y.value ? ? [], v),
                w = z(h, F),
                se = h.some(ie => ie.method.type === "direct"),
                D = Se([u], [...h, ...!se && r.value ? [{
                    method: r.value
                }] : []], F, {
                    negotiatedPaymentLines: P.value ? .lines,
                    deferredTotal: U,
                    hasPayableDeposit: !!S.value ? .amount,
                    hasFixedSellingPlan: O.value,
                    rebuild: I,
                    paymentTermsTemplateType: H ? .type,
                    preserveShopPayApproval: g
                });
            C ? d.value = Ee(D, C) : d.value = D;
            const N = z(D, F),
                B = ge(w, N, _);
            B && (a.value = !0, m.monorailEvent(xe({
                uniqueToken: n.value.defaultAttributes ? .uniqToken || "",
                shopGid: x,
                shopCurrencyCode: T,
                presentmentCurrencyCode: _,
                previousPaymentMethod: w,
                currentPaymentMethod: N
            })));
            const re = A && be(w, N);
            (B || re) && i({})
        }, [a, y, P.value ? .lines, r, U, S.value ? .amount, _, d, m, n.value.defaultAttributes ? .uniqToken, x, T, i, H, O, t, v, g]);
    J(() => {
        oe && !f && d.value.length === 0 && (k.current = !1)
    }, [f]);
    const R = c.at(0);
    if (e && !f && !k.current && R && !Ie(d.value) && !(ne && c.length > 1)) {
        const u = K(R);
        p.leaveErrorBreadcrumb("rebuilding payment lines on missing selected payment line", {
            displayedPaymentMethods: JSON.stringify(c),
            selectedPaymentMethod: u
        }), L(u, void 0, {
            rebuild: !0
        }), k.current = !0
    }
    return E(() => [f, L], [f, L])
}

function Y(e, t) {
    return t ? e.filter(n => n.type !== j.CreditCard) : e
}

function Ne(e, t) {
    return e.method.type === t.type ? { ...e,
        method: { ...e.method,
            ...t
        }
    } : e
}

function Ee(e, t) {
    return e.map(n => Ne(n, t))
}

function X(e) {
    if (e === void 0) return "";
    const t = "name" in e && e.name || void 0,
        n = "paymentMethodIdentifier" in e && e.paymentMethodIdentifier || void 0;
    return Le(e.type, t, n)
}

function xe({
    uniqueToken: e,
    shopGid: t,
    shopCurrencyCode: n,
    presentmentCurrencyCode: a,
    checkoutSessionIdentifier: r,
    previousPaymentMethod: o,
    currentPaymentMethod: y
}) {
    return {
        schemaId: "multi_currency_checkout_payment_method_change/2.0",
        payload: {
            shopId: parseInt(Ae(t), 10),
            userToken: e,
            checkoutToken: r || "",
            shopCurrencyCode: n,
            checkoutPresentmentCurrencyCode: a,
            priorPaymentMethodHandle: X(o),
            priorPaymentType: W(o ? .type || ""),
            newPaymentMethodHandle: X(y),
            newPaymentType: W(y ? .type || ""),
            isPriorPaymentMethodMc: V(a, o),
            isNewPaymentMethodMc: V(a, y)
        }
    }
}

function z(e, t) {
    return t.find(n => e.find(a => "paymentMethodIdentifier" in a.method && "paymentMethodIdentifier" in n ? a.method.paymentMethodIdentifier === n.paymentMethodIdentifier : a.method.type === "wallet" && n.type === "wallet" ? a.method.name === n.name : a.method.type === n.type))
}

function Ke({
    isApplePayAvailable: e
}) {
    const {
        checkout: {
            identity: t
        },
        shopPay: n
    } = M(), a = Z(), r = de(e);
    return E(() => Fe({
        identity: t,
        shopPay: n,
        negotiatedFields: a
    }, {
        isApplePayAvailable: r
    }), [t, r, a, n])
}

function Ve() {
    const {
        shop: e
    } = M(), t = e.hasFlagEnabled(Me), n = Te();
    return ue(() => !t && n.value)
}

function We() {
    const e = $(),
        {
            negotiate: t
        } = ee(),
        {
            shopPay: n,
            checkout: a,
            observability: r
        } = M(),
        o = a.configuration.addressSettings.nonBillingAddressSettings;
    return {
        updateCheckoutAddress: Q(async ({
            shippingAddress: s,
            billingAddress: i,
            fallbackPhoneNumber: P
        }, S = !1) => {
            if (!s && !i) return;
            const l = [];
            if (s) {
                l.push("shippingAddress");
                const m = o.value.isRequired("phone", {
                    countryCode: s.countryCode,
                    useMerchantSettings: !0
                }) && !s.phone ? P : s.phone;
                r.log("wallets_shipping_address_update", "useUpdateCheckoutAddress: update with Shop Pay vaulted address", {
                    isPostalCodePadded: _e(s.postalCode, s.countryCode),
                    countryCode: s.countryCode
                }), e.shippingAddress.value = { ...s,
                    phone: m,
                    oneTimeUse: s.oneTimeUse || !1
                }
            }
            if (i) {
                l.push("billingAddress");
                const m = o.value.isRequired("phone", {
                    countryCode: i.countryCode,
                    useMerchantSettings: !0
                }) && !i.phone ? P : i.phone;
                e.billingAddress.value = { ...i,
                    phone: m
                }
            }
            const p = we(s ? ? e.shippingAddress.value, i ? ? e.billingAddress.value);
            n.user.hasCreditCards.value && (p ? e.billingAddressOption.value = "shipping" : e.billingAddressOption.value = "custom"), !S && await t({
                include: l,
                silenceViolations: ["non-stock"],
                fieldsToResolve: l
            })
        }, [t, e.shippingAddress, e.billingAddress, e.billingAddressOption, o, n.user, r])
    }
}
export {
    Ve as a, We as b, Ke as c, Je as u
};