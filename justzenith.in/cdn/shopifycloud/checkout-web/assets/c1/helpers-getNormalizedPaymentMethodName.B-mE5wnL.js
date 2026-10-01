import {
    fj as c,
    mi as l,
    n as d,
    da as p,
    O as f
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    h as D
} from "./esnext-vendor.BDPAaZdq.js";

function T(e) {
    return e != null && "merchandiseLine" in e
}

function A(e) {
    return e != null && !("merchandiseLine" in e) ? e : void 0
}

function a(e) {
    return g(e.discount)
}

function g(e) {
    return e.type === "code" || e.type === "automatic" || e.type === "custom"
}
var h = (e => (e.Ddp = "DDP", e.Dap = "DAP", e.Ddu = "DDU", e.Unsupported = "UNSUPPORTED", e))(h || {}),
    P = (e => (e.BuyerConfigured = "Buyer Configured", e.DefaultDuties = "Default Duties and Taxes", e.DutyAndTaxInclusive = "Duty and Tax Inclusive Pricing", e.DutyInclusive = "Duty Inclusive Pricing", e.ErrorOccured = "Error Occured", e.FlowConfigured = "Flow Configured", e.LowValueGoodsFallback = "Low Value Goods Taxes Apply", e.PreConfigured = "Pre-configured", e.UnsupportedRegion = "Unsupported Region", e))(P || {});

function B({
    shop: e,
    checkout: i,
    paymentMethods: t
}) {
    return c(t) && e.hasFlagEnabled(l) && i.configuration.layout.isOnePage.value && !i.isCheckoutLayoutForcedToOnePage.value
}

function y(e) {
    return e.reduce((i, {
        cost: t,
        costBeforeDiscounts: n
    }) => ({
        priceBeforeDiscounts: i.priceBeforeDiscounts + n,
        priceAfterDiscounts: i.priceAfterDiscounts + t
    }), {
        priceBeforeDiscounts: 0,
        priceAfterDiscounts: 0
    })
}

function m(e, i = t => t.amountCombinabilityToken ? ? void 0) {
    if (!e.some(n => i(n))) return y(e);
    const t = p(e, n => n.costBeforeDiscounts, i);
    return e.reduce((n, s, r) => t.has(r) ? n : {
        priceBeforeDiscounts: n.priceBeforeDiscounts + s.costBeforeDiscounts,
        priceAfterDiscounts: n.priceAfterDiscounts + s.cost
    }, {
        priceBeforeDiscounts: 0,
        priceAfterDiscounts: 0
    })
}

function E(e) {
    return a(e) ? e.allocations.some(i => i.target.type === "DELIVERYLINE") : !1
}

function o(e, i) {
    return e ? e.filter(t => a(t) ? t.allocations.some(n => n.target.type === "DELIVERYLINE" && n.target.index != null && i.has(n.target.index)) : !1) : []
}

function O(e, i) {
    const t = new Set,
        n = new Set;
    return e && e.status === "filled" && e.lines.forEach((s, r) => {
        if (s.status !== "available") return;
        const u = d(s);
        u && (u.methodType === "PICK_UP" ? n.add(r) : t.add(r))
    }), {
        shippingDiscountLines: o(i, t),
        pickupDiscountLines: o(i, n)
    }
}

function _(e, i) {
    const t = i.translations.get(e);
    return !!(t && t.toString().trim() !== "")
}

function L(e) {
    D(() => {
        document.title = e
    }, [e])
}

function x({
    hasError: e,
    children: i
}) {
    const {
        i18n: t,
        shop: n
    } = f(), s = e ? `${t.translate("general.error_page_title")} - ` : "", r = n ? t.translate("general.full_title", {
        pageTitle: `${s}${i}`,
        shopName: n.name
    }) : t.translate("general.loading_title");
    return L(r), null
}

function M(e) {
    const i = e.session.paymentMethodOption.value;
    return i == null ? "SHOP_PAY" : i.name
}
export {
    h as I, x as T, B as a, T as b, m as c, g as d, A as e, E as f, M as g, _ as h, a as i, O as j, P as k, y as s, L as u
};