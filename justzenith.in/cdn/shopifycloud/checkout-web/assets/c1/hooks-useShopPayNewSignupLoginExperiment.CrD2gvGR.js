import {
    u as o,
    S as u
} from "./esnext-vendor.BDPAaZdq.js";
import {
    K as _,
    L as y,
    bB as h,
    o as f,
    O as v
} from "./hydrate.B0xlt2dG.js";
import {
    O as E,
    P as k,
    eK as O,
    g_ as C,
    k2 as d,
    eI as M,
    eL as g
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const b = v("MarketsProTermsModal"),
    N = v("MarketsProPrivacyModal");

function F({
    textProps: t
}) {
    const {
        i18n: e,
        shop: {
            name: n
        }
    } = E(), i = k(), r = _(void 0, b), a = _(void 0, N), c = i.managedMarketsPaymentProcessor ? .value === "shopify_payments" ? "https://content.global-e.com/shopper-terms-v2" : "https://content.global-e.com/shopper-terms", l = {
        markets_pro_terms: o(u, {
            children: [o(y, {
                textDecoration: "none",
                commandFor: r,
                children: e.translate("payment.markets_pro_disclaimer_terms_and_conditions")
            }), o(h, {
                id: r,
                source: c,
                heading: e.translate("payment.markets_pro_disclaimer_terms_and_conditions_title")
            })]
        }),
        privacy_policy: o(u, {
            children: [o(y, {
                textDecoration: "none",
                commandFor: a,
                children: e.translate("payment.markets_pro_disclaimer_privacy_policy")
            }), o(h, {
                id: a,
                source: "https://content.global-e.com/privacy-policy",
                heading: e.translate("payment.markets_pro_disclaimer_privacy_policy_title")
            })]
        }),
        shop_name: n
    };
    return o(f, { ...t,
        children: e.translate("payment.markets_pro_disclaimer_label", l)
    })
}
const p = d.Control,
    P = "shop_pay_new_signup_login_variant",
    T = ["draftOrder", "simulated"];

function R({
    shop: t,
    checkout: e,
    source: n,
    router: i,
    client: r
}, {
    url: a = i.currentUrl.value
} = {}) {
    const s = e.identity.current.value === "shopPay",
        c = a.searchParams.get(O),
        l = t.hasFlagEnabled(C),
        S = e.proposal.negotiated.fields.buyerIdentity.value ? .customerProfile != null,
        I = c !== g.ShopPayAsPaymentMethod && c !== g.ShopPayInstallmentsAsPaymentMethod;
    if (!(s && I && !T.includes(n.type) && (!S || l))) return p;
    const m = U({
        client: r
    }, a);
    return m || (M(a.search) ? p : l ? d.UnauthenticatedCheckout : p)
}

function U({
    client: t
}, e) {
    const n = Object.values(d),
        i = e.searchParams.get(P),
        r = n.find(s => s === i);
    if (r) return r;
    const a = t.cookies.get(P);
    return n.find(s => s === a)
}
const D = [d.UnauthenticatedCheckout];

function w() {
    const t = E(),
        e = t.router.currentUrl.value;
    return R(t, {
        url: e
    })
}
export {
    F as M, D as U, w as u
};