import {
    u as e,
    T as _,
    q as R,
    h as E,
    i as M
} from "./esnext-vendor.BDPAaZdq.js";
import {
    b as A,
    a as U
} from "./Choice.BIzIW4rp.js";
import {
    c as C,
    o as g,
    aL as H,
    aM as V,
    aN as $,
    aO as q,
    H as w,
    P as z,
    a3 as Q
} from "./hydrate.B0xlt2dG.js";
import {
    B as k
} from "./BillingAddressForm.aTSlVDrG.js";
import {
    O as F,
    P as W,
    aZ as Z,
    Q as j,
    a_ as G,
    a$ as N,
    b0 as J
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    A as K
} from "./AddressPresenter.B0qw2vWQ.js";

function X() {
    const {
        i18n: a,
        checkout: i
    } = F(), t = i.addressManager.billing.value.suggestedAddress.value, r = t.address, n = t.type, m = {
        hiddenFields: ["phone", "company", "firstName", "lastName"],
        multiline: !1
    }, u = (() => {
        if (n === "billing-fact") return a.translate("payment.use_order_billing_address_label");
        if (n === "billing") return a.translate("payment.use_location_billing_address_label");
        if (n === "shipping") return a.translate("payment.use_location_shipping_address_label")
    })();
    return !r || !n || !u ? null : e(A, {
        value: n,
        children: e(C, {
            children: [e(g, {
                type: "strong",
                children: u
            }), e(g, {
                color: "subdued",
                children: e(K, { ...m,
                    address: r
                })
            })]
        })
    })
}
const Y = "billing_address_selector";

function ae({
    renderFormOnly: a = !1
} = {}) {
    const {
        i18n: i,
        source: t,
        checkout: r
    } = F(), n = W(), m = n.deliveryNext.value, u = Z(m), P = H(), {
        billingAddress: s,
        shippingAddress: h,
        billingAddressOption: d
    } = j(), T = h.value, o = r.proposal.facts.billingAddress, f = r.configuration.layout.isOnePage.value, p = V(), S = $(), b = n.buyerIdentity.value ? .purchasingCompany, c = n.buyerIdentity.value ? .customerProfile, L = c && !G(c) && c.billingAddresses.length === 0 && c.shippingAddresses.length === 0, x = (!c || L) && T.oneTimeUse, y = _(() => ({
        firstName: void 0,
        lastName: void 0,
        address1: void 0,
        address2: void 0,
        company: void 0,
        city: void 0,
        postalCode: void 0,
        phone: void 0,
        zoneCode: void 0,
        name: void 0,
        countryCode: s.fields.countryCode.peek()
    }), [s.fields.countryCode]), v = _(() => h.fields.countryCode.peek(), [h.fields.countryCode]), I = R(([l]) => {
        l && (d.value = l, N(t) ? l === "custom" ? s.value = y : l === "shipping" ? s.value = p.value : l === "billing-fact" && o && (s.value = o) : l === "custom" && b ? s.value = J({
            countryCode: v
        }) : l === "custom" ? s.fields.countryCode.value = v : l === "shipping" && (s.value = p.value, S()))
    }, [d, t, b, o, s, y, p, v, S]), B = i.translate("payment.billing_address_title");
    q(), E(() => {
        N(t) && P.value === "form" ? s.value = y : d.value === "shipping" ? s.value = p.value : d.value === "billing-fact" && o && (s.value = o)
    }, []);
    const O = d.value,
        D = _(() => [O], [O]);
    return e(Q, {
        accessibilityRole: "group",
        accessibilityLabelledBy: f ? void 0 : "billingAddress",
        accessibilityLabel: f ? B : void 0,
        children: e(C, {
            gap: "base",
            children: [f ? null : e(C, {
                gap: "small-400",
                children: [e(w, {
                    id: "billingAddress",
                    children: B
                }), x ? null : e(z, {
                    color: "subdued",
                    children: u ? i.translate("payment.billing_address_description_no_shipping_address") : i.translate("payment.billing_address_description")
                })]
            }), e(M, {
                when: () => !a && P.value !== "form",
                fallback: e(k, {}),
                children: e(U, {
                    name: Y,
                    values: D,
                    onChange: I,
                    variant: "block",
                    children: [b ? e(X, {}) : e(A, {
                        value: "shipping",
                        accessibilityLabel: i.translate("payment.same_billing_address_label"),
                        children: e(g, {
                            type: "strong",
                            children: i.translate("payment.same_billing_address_label")
                        })
                    }), e(A, {
                        value: "custom",
                        selectedContent: e(k, {}),
                        accessibilityLabel: i.translate("payment.different_billing_address_label"),
                        children: e(g, {
                            type: "strong",
                            children: i.translate("payment.different_billing_address_label")
                        })
                    })]
                })
            })]
        })
    })
}
export {
    ae as B
};