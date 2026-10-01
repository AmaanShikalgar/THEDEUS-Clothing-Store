import {
    ae as y,
    aL as C,
    O as f,
    Q as p,
    br as c,
    mk as P,
    bJ as R,
    ml as S,
    hu as h,
    mm as v,
    j4 as D,
    j5 as E,
    bH as I,
    P as O
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    f as d
} from "./esnext-vendor.BDPAaZdq.js";
import {
    bR as l,
    dm as T,
    bF as b
} from "./hydrate.B0xlt2dG.js";
import {
    j as u
} from "./redemption-promotions.CgqGtCd-.js";
const m = y("ShopCashContext"),
    q = m.Provider,
    B = () => C(m),
    U = () => {
        const {
            shopPay: e
        } = f(), t = l(), n = T(), o = p().paymentLines;
        return d(() => {
            const r = o.value,
                a = e.user.paymentMethods.value,
                i = e.session.selectedPaymentMethod.value;
            if (!t.value) return;
            const s = u(r);
            return s && s !== "CREDIT_CARD" ? s : n.value ? .payment ? u(r) === "CREDIT_CARD" ? "CREDIT_CARD" : A(i, a) : u(r)
        })
    },
    A = (e, t) => {
        if (!(!e && !t.length)) return e && c(e) || P(t) ? "APPLE_PAY" : e && R(e) || S(t) ? "IDEAL" : e && h(e) || v(t) ? "CUSTOM_ONSITE" : "CREDIT_CARD"
    },
    L = new Set(["giftCard", "freeOrder", "storeCredit", "redeemables"]);

function N(e) {
    return e !== null && L.has(e)
}

function j() {
    const e = l(),
        t = D(),
        n = E("STORE_CREDIT"),
        o = I(["CUSTOM", "STORE_CREDIT"]),
        r = b(),
        a = O().deferredTotal;
    return d(() => {
        if (e.value) {
            if (t.value) return "giftCard";
            if (n.value) return "storeCredit";
            if (o.value) return "redeemables"
        } else return "freeOrder";
        return r.value && !a.value ? .amount.amount ? "deferred" : null
    })
}

function _(e) {
    return {
        value: e.amount.toString(),
        currency: e.currencyCode.toUpperCase()
    }
}

function G(e) {
    if (!(e ? .amount == null || !Number.isFinite(e.amount) || !e.currencyCode)) return _({
        amount: e.amount,
        currencyCode: e.currencyCode
    })
}
export {
    m as S, j as a, B as b, q as c, G as d, N as i, _ as t, U as u
};