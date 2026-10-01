import {
    k8 as G,
    p as Q,
    eG as l,
    ew as v
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    u as x,
    g as P,
    f as S
} from "./esnext-vendor.BDPAaZdq.js";
import {
    jC as R
} from "./hydrate.B0xlt2dG.js";

function T({
    address1: e = "",
    address2: r,
    city: n = "",
    company: i,
    countryCode: t,
    firstName: o,
    lastName: s = "",
    postalCode: a,
    zoneCode: p,
    phone: f = "",
    oneTimeUse: h = !1,
    coordinates: d,
    district: m,
    line2: y,
    streetName: g,
    streetNumber: A,
    subdistrict: L
}, F) {
    const {
        extendedFields: C,
        ...B
    } = G({
        address1: e,
        address2: r,
        countryCode: t,
        fields: {
            district: m,
            line2: y,
            streetName: g,
            streetNumber: A,
            subdistrict: L
        },
        extendedAddressMode: F ? .extendedAddressMode
    });
    return { ...B,
        city: n ? ? "",
        countryCode: t || "ZZ",
        postalCode: a,
        company: i,
        firstName: o,
        lastName: s,
        zoneCode: p,
        phone: f,
        oneTimeUse: h,
        coordinates: d ? c(d) : void 0,
        extendedFields: C
    }
}

function W({
    handle: e = ""
}) {
    return {
        handle: e
    }
}

function c(e) {
    return {
        latitude: e.latitude,
        longitude: e.longitude
    }
}

function Z(e, r, n, i, t = !1) {
    const o = Q(e),
        s = e ? .[0] ? .method ? .type === "deferred" && n === "custom" && !t;
    if (!o && s) return null;
    const a = !!r.address1;
    return o || a ? {
        streetAddress: l(r, i)
    } : null
}

function j(e, r) {
    return e.coordinates ? {
        geolocation: {
            coordinates: c(e.coordinates),
            countryCode: v(e.countryCode),
            zoneCode: e.zoneCode,
            postalCode: e.postalCode
        }
    } : {
        streetAddress: l(e, r)
    }
}

function w({
    deliveryMethodHandle: e,
    deliveryMethodOptions: r,
    isCustomRate: n,
    isPointOfSale: i,
    retailLocationId: t,
    isPointOfSaleShipToHome: o,
    customDeliveryStrategy: s
} = {}) {
    return i && t && !o ? {
        deliveryStrategyMatchingConditions: {
            shipments: {
                any: !0
            }
        },
        options: r,
        originLocationId: t,
        autoFulfill: !0
    } : e ? {
        deliveryStrategyByHandle: {
            handle: e,
            customDeliveryRate: n ? ? !1
        },
        options: r
    } : s ? {
        customDeliveryStrategy: {
            title: s.title,
            price: {
                value: s.price
            },
            code: s.code,
            source: s.source
        },
        options: r
    } : {
        deliveryStrategyMatchingConditions: {
            estimatedTimeInTransit: {
                any: !0
            },
            shipments: {
                any: !0
            }
        },
        options: r
    }
}
const z = "v9oRy",
    b = "XdrBA",
    u = {
        Layout: z,
        isAnimated: b
    };

function E({
    children: e,
    className: r
}) {
    return x("main", {
        className: P([u.Layout, u.isAnimated, r]),
        children: e
    })
}

function H() {
    const e = R();
    return S(() => Array.from(e.value.values()).filter(n => n.length > 0).length > 1)
}
export {
    E as F, W as a, Z as b, T as d, j as g, w as s, H as u
};