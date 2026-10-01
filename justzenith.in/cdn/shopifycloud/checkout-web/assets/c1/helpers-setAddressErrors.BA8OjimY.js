import {
    n as R
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aq as O,
    b8 as u
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const U = "company_location_shipping_address",
    Y = "one_time_shipping_address",
    q = "company_location_billing_address",
    x = "one_time_billing_address",
    J = "sdk_cart_hints_address",
    h = ["firstName", "lastName"],
    I = ["address1", "address2", "city", "company"],
    y = ["countryCode"],
    g = ["zoneCode"],
    b = ["phone"],
    v = ["postalCode"],
    A = ["streetName", "streetNumber", "line2", "district", "subdistrict"],
    F = ["blank", "too_long", "contains_emojis", "contains_html_tags", "contains_url", "contains_mathematical_symbols"],
    k = ["blank", "too_long", "contains_emojis", "contains_html_tags", "contains_mathematical_symbols"],
    C = ["blank", "invalid", "not_supported"],
    P = ["blank", "invalid"],
    L = ["blank", "contains_emojis", "invalid"],
    T = ["blank", "blocked_address", "invalid", "too_long", "not_supported", "invalid_for_country", "invalid_for_province", "invalid_for_country_and_province", "contains_emojis", "contains_mathematical_symbols"],
    $ = ["blank", "contains_emojis", "contains_html_tags", "contains_mathematical_symbols"],
    j = ["blank", "invalid"];

function c(s) {
    return s === "blocked" ? "blocked_address" : s
}

function V({
    addressErrors: s,
    shopPayErrors: n,
    i18n: e,
    observability: t,
    userEvents: i,
    source: E,
    configuration: f,
    shop: p,
    addressContext: S = "unknown",
    submittedAddress: _
}) {
    if (!n) return;
    const r = z(n);
    if (r.size === 0) return;
    const D = Array.from(r.keys()).filter(a => s[a].value);
    R(() => {
        for (const [a, o] of r) s[a].value || (s[a].value = e.translate("field_errors", {
            scope: G(a, o, t)
        }))
    }), t.log("shop_pay_address_fields_rejected", "Shop rejected address fields submitted from checkout", {
        addressContext: S,
        rejectedFields: Array.from(r.keys()).join(","),
        rejectedFieldCount: r.size,
        errorCodes: Array.from(new Set(Array.from(r, ([a, o]) => m(a, o) ? c(o) : "other"))).sort().join(","),
        blankButStateHadValueFields: _ ? Array.from(r).filter(([a, o]) => {
            if (c(o) !== "blank") return !1;
            const d = _[a];
            return typeof d == "string" && d.trim() !== ""
        }).map(([a]) => a).join(",") : "unknown",
        alreadyErroredFields: D.join(",")
    });
    const N = M(n);
    i.monorailEvent({
        schemaId: "shopify_pay_payment_page_address_sheet_error/1.1",
        payload: { ...O(E, {
                configuration: f
            }, p),
            errors: N
        }
    })
}

function z(s) {
    const n = new Map;
    for (const e of s) {
        const t = w(e.field);
        t && n.set(t, e.message)
    }
    return n
}

function w(s) {
    const [n, e, t] = s;
    if (n !== "address" && n !== "billingAddress") return;
    const i = e === "addressLineComponents" ? t : e;
    if (i) return H(i)
}

function M(s) {
    const n = [];
    return s.forEach(e => {
        e.field.forEach(t => {
            n.push({
                [t]: e.message
            })
        })
    }), JSON.stringify(n)
}

function H(s) {
    switch (s) {
        case "firstName":
        case "first_name":
            return "firstName";
        case "lastName":
        case "last_name":
            return "lastName";
        case "zoneCode":
        case "zone_code":
            return "zoneCode";
        case "company":
        case "address1":
        case "address2":
        case "city":
        case "phone":
        case "streetName":
        case "streetNumber":
        case "district":
        case "subdistrict":
            return s;
        case "additionalInformation":
            return "line2";
        case "postalCode":
        case "zip":
            return "postalCode";
        case "countryCode":
        case "country":
            return "countryCode";
        default:
            throw new u(`Failed to normalize Shop Pay address field: ${s}`, {
                groupingHash: "ShopPayError::FailedNormalize::AddressField"
            })
    }
}

function G(s, n, e) {
    const t = m(s, n);
    return t || (e.error(new u(`Failed to find translation key for fieldKey ${s} and errorCode ${n}. Falling back to generic address error`, {
        groupingHash: "ShopPayError::FailedToFindTranslationKey"
    }), {
        severity: "info"
    }), j.includes(n) ? `address_generic_${n}` : "address_generic_error")
}

function m(s, n) {
    if (h.includes(s)) return F.includes(n) ? `address_${l(s)}_${n}` : void 0;
    if (I.includes(s)) return k.includes(n) ? `address_${s}_${n}` : void 0;
    if (y.includes(s)) return C.includes(n) ? `address_country_${n}` : void 0;
    if (g.includes(s)) return P.includes(n) ? `address_province_${n}` : void 0;
    if (b.includes(s)) return L.includes(n) ? `address_phone_${n}` : void 0;
    if (v.includes(s)) {
        const e = c(n);
        return T.includes(e) ? `address_zip_${e}` : void 0
    }
    if (A.includes(s)) return n === "invalid" ? "address_generic_invalid" : $.includes(n) ? `address_${l(s)}_${n}` : void 0
}

function l(s) {
    return s.replace(/[A-Z]/g, n => `_${n.toLowerCase()}`)
}
export {
    U as C, x as O, q as S, Y as a, J as b, V as s
};