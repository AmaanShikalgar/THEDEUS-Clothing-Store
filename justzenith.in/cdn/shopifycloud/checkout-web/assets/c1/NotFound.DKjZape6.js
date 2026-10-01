import {
    h as l
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as c,
    f4 as f
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    e as m
} from "./hydrate.B0xlt2dG.js";

function y(r) {
    return !(!r || r.type !== "customOnsite")
}

function B(r, n, e) {
    return !!(y(r) || (e ? .paymentMethod === "IDEAL" || e ? .paymentMethod === "CUSTOM_ONSITE" && "paymentBrands" in e && e.paymentBrands ? .some(t => t.toLowerCase() === "ideal")) && n ? .some(d) || e ? .paymentMethod === "CUSTOM_ONSITE" && "paymentBrands" in e && n ? .some(t => h(t, e.paymentBrands ? ? [])))
}

function d(r) {
    return r.type === "local" ? r.name === "IDEAL" : r.type !== "customOnsite" ? !1 : (r.paymentBrands ? .map(e => e.toLowerCase()) ? ? []).includes("ideal")
}

function h(r, n) {
    if (r.type !== "customOnsite") return !1;
    const e = n.map(o => o.toLowerCase());
    if (e.length === 0) return !1;
    const t = r.paymentBrands ? .map(o => o.toLowerCase()) ? ? [];
    return e.length === t.length && e.every(o => t.includes(o))
}

function g() {
    const {
        currentPage: r
    } = m().value, {
        router: n,
        observability: e,
        shopPay: t
    } = c(), {
        search: o,
        pathname: i
    } = n.currentUrl.value, s = i.includes("/shoppay"), {
        replaceShopPayInHistory: a
    } = f(), p = r && !s;
    return l(() => {
        s && (e.error(new u('Attempted to render "/shoppay" route in 3 page layout, which is not supported')), e.counter({
            name: "shop_pay_route_not_found",
            value: 1
        }), a(t.config.checkoutAsGuestUrl))
    }, [s, e, a, t.config.checkoutAsGuestUrl]), p && n.redirect({
        pathname: r.route,
        search: o
    }), null
}
class u extends Error {
    constructor(n) {
        super(n), this.name = "RouteNotFoundError"
    }
}
const _ = Object.freeze(Object.defineProperty({
    __proto__: null,
    RouteNotFoundError: u,
    default: g
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    _ as N, y as i, B as s
};