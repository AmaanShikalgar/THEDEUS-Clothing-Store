import {
    O as F,
    P as r,
    Q as T,
    S as Y,
    T as E,
    W as H,
    X as u,
    Y as R
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    u as N,
    d as M,
    e as W,
    f as w,
    g as x
} from "./hydrate.B0xlt2dG.js";

function B() {
    const e = N();
    if (e) return { ...e.shopAppLinksAndResources
    }
}

function V() {
    const {
        checkout: e,
        embed: l,
        mobileCheckoutSdk: i,
        router: c,
        shop: p,
        shopPay: f
    } = F(), s = r(), d = r().buyerIdentity.value ? .purchasingCompany, P = s.buyerIdentity.value ? .customerProfile, y = M().value, h = e.configuration.layout.isOnePage.value, S = B(), t = T(), m = t.paymentLines.value, {
        value: a
    } = s.paymentLines, {
        value: v
    } = s.paymentMethods, {
        currentDetour: n
    } = W().value, A = w(), g = !p.hasFlagEnabled(Y), C = x(), L = !!E(s.paymentMethods.value).length, b = e.proposal.negotiated.fields.mustSelectProvidedAddress.value, O = c.currentUrl.value, I = H(O.searchParams), _ = v ? .some(o => o.type === "wallet" && o.name === "SHOP_PAY"), k = u(m, "SHOPIFY_INSTALLMENTS") != null;
    return t.phone.value || A ? .shopPayOptInEnabled === !1 || d || !C.value || P ? .__typename === "CustomerProfile" && y && (!h || !L) || f.userIdentified.value || e.identity.current.value === "shopPay" || R(e.identity.current.value) || I || b || l || i.enabled || g && S ? .shopPayOrder || !_ && n ? .type !== "thankYou" ? !1 : n ? .type === "thankYou" ? a ? !u(a.lines, "SHOPIFY_INSTALLMENTS") : !1 : !k
}
export {
    B as a, V as u
};