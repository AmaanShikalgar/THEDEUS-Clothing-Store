import {
    u as n,
    S as u,
    f as y
} from "./esnext-vendor.BDPAaZdq.js";
import {
    K as b,
    L as f,
    cj as P,
    O as v
} from "./hydrate.B0xlt2dG.js";
import {
    O as m,
    ch as C,
    bv as M,
    P as L,
    a$ as O,
    dz as g,
    aq as k
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const I = v("legal-link-modal");

function q({
    handle: i,
    tone: o
}) {
    const {
        embed: e,
        i18n: s,
        shop: {
            merchantPolicies: a
        }
    } = m(), t = s.translate("shop_policies", {
        scope: i.replace(/-/g, "_")
    }), {
        localPolicies: w
    } = C(), r = a.some(d => d.handle === i) ? w.find(d => d.handle === i) : void 0, l = b(void 0, I);
    return r ? .url && M(e ? .embedder) ? n(f, {
        tone: o,
        "aria-haspopup": "dialog",
        onClick: () => {
            e ? .client ? .windowOpenRequest(r.url)
        },
        children: t
    }) : r ? n(u, {
        children: [n(f, {
            commandFor: l,
            tone: o,
            children: t
        }), n(P, {
            id: l,
            defaultPolicy: r
        })]
    }) : n(u, {
        children: t
    })
}

function F() {
    const i = L().buyerIdentity,
        {
            shop: o,
            source: e
        } = m();
    return y(() => !!(o.customerAccountLocationsUrl && e.type !== "draftOrder" && !O(e) && g(i.value ? .purchasingCompany)))
}
const S = /Shop App\/[^/]+\/(?:iOS|Android)\//i;

function c(i) {
    return /Android/i.test(i) ? "android" : "ios"
}

function h(i = typeof window > "u" ? "" : window.navigator.userAgent, o, e) {
    return e && e !== "web" ? c(i) : o && o !== "WEB" ? /android/i.test(o) ? "android" : "ios" : S.test(i) || typeof window < "u" && window.ReactNativeWebView ? c(i) : "web"
}

function T(i) {
    if (!/Macintosh/i.test(i) || typeof window > "u" || !window.navigator) return !1;
    const o = window.navigator.maxTouchPoints;
    return typeof o == "number" && o > 1
}

function x(i) {
    return /iPad|Macintosh|Linux; Android/i.test(i)
}

function p(i) {
    return /iPad/i.test(i) || /Android/i.test(i) && !/Mobile/i.test(i) || T(i)
}

function U(i) {
    return /iPhone|iPod/i.test(i) || /Android/i.test(i) && /Mobile/i.test(i)
}

function A(i = typeof window > "u" ? "" : window.navigator.userAgent, o, e) {
    return h(i, o, e) !== "web" ? x(i) && p(i) ? "tablet" : "mobile" : p(i) ? "tablet" : U(i) ? "mobile" : "desktop"
}

function R(i, o, e, s = {}) {
    const {
        embedPlatform: a,
        shopAppSurface: t
    } = s;
    return { ...k(i, o, e),
        platform: h(void 0, a, t),
        deviceType: A(void 0, a, t)
    }
}
export {
    q as L, R as g, F as u
};