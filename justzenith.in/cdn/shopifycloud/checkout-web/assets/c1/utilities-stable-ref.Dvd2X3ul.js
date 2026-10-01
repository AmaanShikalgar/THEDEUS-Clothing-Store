import {
    ew as l
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    A as f
} from "./esnext-vendor.BDPAaZdq.js";

function g(e, r) {
    let t = e;
    const o = r.split(".");
    for (const n of o) {
        if (t == null) return;
        t = t[n]
    }
    return t
}

function b(e, r, t) {
    const o = { ...e
        },
        n = r.split("."),
        a = n.pop();
    if (!a) return e;
    let s = o;
    for (const d of n) s[d] = { ...s[d]
    }, s = s[d];
    return t == null ? delete s[a] : s[a] = t, o
}

function u(e, ...r) {
    const t = { ...e
    };
    for (const o of r)
        for (const n of Object.keys(o)) {
            const a = t[n],
                s = o[n];
            c(a) && c(s) ? t[n] = u(a, s) : s != null && (t[n] = s)
        }
    return t
}

function c(e) {
    if (e == null || typeof e != "object" || Array.isArray(e)) return !1;
    const r = Object.getPrototypeOf(e);
    return r === Object.prototype || r === null
}

function _(e) {
    return {
        address1: e ? .address1 || "",
        address2: e ? .address2 || "",
        city: e ? .city || "",
        company: e ? .company || "",
        countryCode: l(e ? .countryCodeV2 ? ? e ? .country),
        firstName: e ? .firstName || "",
        lastName: e ? .lastName || "",
        phone: e ? .phone || "",
        zoneCode: e ? .province || "",
        postalCode: e ? .zip || ""
    }
}

function h(e) {
    return "id" in e && "handler_id" in e
}

function i(e) {
    return "externalReferenceId" in e
}

function m(e) {
    if (e) return i(e) ? e.externalReferenceId : e.id
}

function C(e) {
    if (e) return i(e) ? {
        brand: e.brand,
        lastDigits: e.lastDigits
    } : {
        brand: e.display ? .brand,
        lastDigits: e.display ? .last_digits
    }
}

function I(e) {
    if (!e) return;
    if (i(e)) return e.billingAddress;
    const r = e.billing_address;
    if (r) return {
        firstName: r.first_name,
        lastName: r.last_name,
        address1: r.street_address,
        address2: r.extended_address,
        city: r.address_locality,
        province: r.address_region,
        country: r.address_country,
        zip: r.postal_code,
        phone: r.phone_number
    }
}

function A(e) {
    const r = f(e);
    return r.current = e, r
}
export {
    i as a, b, g as c, u as d, I as e, _ as f, m as g, C as h, h as i, A as u
};