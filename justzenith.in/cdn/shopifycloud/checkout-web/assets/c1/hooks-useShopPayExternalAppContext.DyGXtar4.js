import {
    X as n,
    fg as r,
    _ as i,
    l7 as l,
    O as c
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const u = /^[A-Za-z]{1,2}[\d]{1,2}(?:[A-Za-z])?\s?[\d][A-Za-z]{2}$|^BFPO\s\d{1,3}$/,
    p = /^[A-Za-z]\d[A-Za-z]\s*\d[A-Za-z]\d$/;

function m({
    applePaySubscriptionsDecelerationActive: t,
    applePayThreePageVaultedReviewEnabled: e,
    isOnePageCheckout: a
}) {
    return t && (a || e)
}

function O(t, e) {
    if (t == null || e == null) return !1;
    switch (e) {
        case "CA":
            return p.test(t.trim());
        case "GB":
            return u.test(t.trim());
        default:
            return !0
    }
}

function d(t) {
    return t.reduce((e, a) => e.flatMap(o => a.map(s => [...o, s])), [
        []
    ])
}

function M(t) {
    return t.methods.map(e => ({
        deliveryLine: t,
        ...e
    }))
}

function _(t) {
    const e = d(t.map(s => s.filter(f))),
        a = t.flatMap(s => s.filter(h)),
        o = t.flatMap(s => s.filter(P)).reduce(A, new Map).values();
    return [...e, a, ...o]
}

function f(t) {
    return t.methodType === "SHIPPING"
}

function h(t) {
    return t.methodType === "LOCAL"
}

function P(t) {
    return t.methodType === "PICK_UP"
}

function A(t, e) {
    const a = e.title,
        o = t.get(a) || [];
    return o.push(e), t.set(a, o)
}

function D(t) {
    if (!t) return !1;
    const e = !!n(t, "GOOGLE_PAY"),
        a = r(t, [i.BuyWithPrime]).length > 0,
        o = t.some(s => s.method.type === "shopWallet");
    return e || a || o
}

function E({
    paymentLines: t,
    walletUsedForSubmission: e
}) {
    return e !== "GOOGLE_PAY" && l({
        paymentLines: t
    })
}

function G(t) {
    return { ...t,
        firstName: "",
        lastName: "",
        company: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        phone: "",
        district: void 0,
        subdistrict: void 0
    }
}

function g() {
    const {
        shopPay: t
    } = c();
    return t
}
export {
    M as a, E as b, G as c, O as d, _ as g, D as h, m as i, g as u
};