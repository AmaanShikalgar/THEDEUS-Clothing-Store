import {
    A as C,
    f as p,
    l as P,
    T as I,
    q as y
} from "./esnext-vendor.BDPAaZdq.js";
import {
    P as E,
    O as m,
    Q as R,
    bq as M,
    br as L,
    bs as N,
    ba as B,
    bt as V,
    aq as A
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    S
} from "./redemption-promotions.CgqGtCd-.js";
import {
    br as b,
    bs as O
} from "./hydrate.B0xlt2dG.js";
import {
    u as T
} from "./money-toShopPayMoneyInput.-nuohgDW.js";
import {
    P as f
} from "./checkout-updaters-helpers.BAeH3ddd.js";
const _ = {
        eligible: !1,
        nonEligibleReason: "SHOP_CASH_NOT_AVAILABLE",
        serverConfirmed: !0
    },
    H = {
        eligible: !0,
        nonEligibleReason: null,
        serverConfirmed: !1
    };

function k({
    requiresAvailableBalance: e = !0
} = {}) {
    const i = E().shopCashBalance,
        s = C(null);
    return p(() => {
        const n = i.value;
        if (n ? .status === "filled") {
            const t = {
                eligible: n.eligible,
                nonEligibleReason: n.eligible ? null : n.nonEligibleReason ? ? "SHOP_CASH_NOT_AVAILABLE",
                serverConfirmed: !0
            };
            return s.current = t, t
        }
        return n ? .status === "unavailable" && e ? (s.current = _, _) : s.current ? { ...s.current,
            serverConfirmed: !1
        } : H
    })
}

function U() {
    const {
        shopPay: e,
        checkout: i
    } = m(), s = R(), n = T(), t = p(() => {
        if (!i.isShippingRequired.value) return {
            address: null,
            isShopPayVaultAddress: !1
        };
        const o = e.session.selectedShippingAddress.value;
        return o ? .address ? {
            address: o.address,
            isShopPayVaultAddress: !0
        } : {
            address: s.shippingAddress.value,
            isShopPayVaultAddress: !1
        }
    }), l = p(() => {
        const o = e.session.selectedPaymentMethod.value,
            u = !s.paymentLines.value.some(a => !M(a)) && o != null && L(o);
        return (n.value === "APPLE_PAY" || u) && t.value.address != null
    }), r = p(() => {
        const o = e.session.selectedPaymentMethod.value;
        if (l.value && t.value.address) {
            const a = t.value.address,
                g = a.phone || s.billingAddress.value.phone || e.user.phoneNumber.value;
            return {
                address: g && g !== a.phone ? { ...a,
                    phone: g
                } : a,
                isShopPayVaultAddress: t.value.isShopPayVaultAddress
            }
        }
        const d = N(o);
        if (d) {
            const a = d.billingAddress.address;
            return {
                address: a.phone ? a : { ...a,
                    phone: s.billingAddress.value.phone
                },
                isShopPayVaultAddress: !0
            }
        }
        const u = e.session.selectedBillingAddress.value;
        return u ? .address ? {
            address: u.address,
            isShopPayVaultAddress: !0
        } : s.billingAddressOption.value === "shipping" && t.value.address ? t.value : {
            address: s.billingAddress.value,
            isShopPayVaultAddress: !1
        }
    }), c = P(b(t.value.address ? .countryCode, void 0, i.configuration.addressSettings.nonBillingAddressSettings.value, t.value.isShopPayVaultAddress ? null : void 0)), h = P(b(r.value.address.countryCode, void 0, i.configuration.addressSettings.billingAddressSettings.value, r.value.isShopPayVaultAddress ? null : void 0));
    return p(() => {
        const o = t.value.address,
            d = r.value.address,
            u = o ? c.value(o, "shipping") : new Map,
            a = h.value(d, "billing");
        return {
            selectedBillingAddress: d,
            selectedShippingAddress: o,
            isUsingApplePayShippingFallback: l.value,
            billingAddressErrors: a,
            shippingAddressErrors: u
        }
    })
}

function Z({
    requiresAvailableBalance: e = !0
} = {}) {
    const i = k({
            requiresAvailableBalance: e
        }),
        s = E().deliveryNext,
        n = B("deliveryNext"),
        t = U();
    return p(() => {
        const {
            nonEligibleReason: l,
            serverConfirmed: r
        } = i.value, c = s.value, h = n.value, {
            selectedShippingAddress: o,
            shippingAddressErrors: d,
            billingAddressErrors: u
        } = t.value, a = u.size > 0, g = d.size > 0 || o && !h && c ? .status === "unavailable";
        let v = null;
        return l ? v = l : g ? v = S.ShopCashInvalidShippingAddress : a && (v = S.ShopCashInvalidBillingAddress), {
            eligible: v == null,
            nonEligibleReason: v,
            serverConfirmed: r
        }
    })
}
const q = e => !!(e.amount && !isNaN(e.amount) && e.amount > 0 && e.currencyCode && V[e.currencyCode]),
    x = e => "amount" in e && typeof e.amount == "string",
    D = e => x(e) ? {
        amount: Number(e.amount),
        currencyCode: e.currencyCode
    } : {
        amount: Number(e.value),
        currencyCode: e.currency
    },
    $ = e => {
        if (!e) return null;
        const i = D(e);
        return q(i) ? i : null
    },
    F = "shopify_pay_payment_page_shop_cash_redemption_visibility/1.1",
    Y = "shopify_pay_payment_page_shop_cash_redemption_eligibility/3.1",
    w = "shopify_pay_payment_page_shop_cash_redemption_actions/1.0",
    z = "shopify_pay_payment_page_shop_cash_reward_eligibility/5.1",
    G = "shopify_pay_payment_page_ui_interaction/1.1",
    ee = () => {
        const {
            userEvents: e,
            source: i,
            checkout: s,
            shop: n,
            shopPay: t
        } = m(), l = t.user.publicId.value, r = I(() => ({
            publicId: l
        }), [l]), c = y(a => e.monorailEvent({
            schemaId: F,
            payload: { ...A(i, s, n),
                ...r,
                ...a
            }
        }), [e, i, s, n, r]), h = y(a => e.monorailEvent({
            schemaId: Y,
            payload: { ...A(i, s, n),
                ...r,
                ...a
            }
        }), [e, i, s, n, r]), o = y(a => e.monorailEvent({
            schemaId: w,
            payload: { ...A(i, s, n),
                ...r,
                ...a
            }
        }), [e, i, s, n, r]), d = y(a => e.monorailEvent({
            schemaId: z,
            payload: { ...A(i, s, n),
                ...r,
                ...a
            }
        }), [e, i, s, n, r]), u = y(a => e.monorailEvent({
            schemaId: G,
            payload: { ...A(i, s, n),
                ...a
            }
        }), [e, i, s, n]);
        return {
            recordRedemptionActionEvent: o,
            recordRedemptionVisibilityEvent: c,
            recordRedemptionEligibilityEvent: h,
            recordRewardEligibilityEvent: d,
            recordUiInteractionEvent: u
        }
    };

function se() {
    const {
        checkout: e,
        shopPay: i
    } = m(), s = O();
    return p(() => {
        if (!e.installments.isSupported.value) return {
            spiPreselected: !1,
            preselectionReason: void 0
        };
        const n = [];
        s.value && n.push(f.PointOfSale), i.config.shouldPreSelectInstallments && n.push(f.SpiBanner);
        const t = i.user.installments.preselectReason.value;
        t && n.push(t);
        const l = n.length > 0;
        return {
            spiPreselected: l,
            preselectionReason: l ? n.join(",") : void 0
        }
    })
}
export {
    $ as a, Z as b, se as c, U as d, D as t, ee as u
};