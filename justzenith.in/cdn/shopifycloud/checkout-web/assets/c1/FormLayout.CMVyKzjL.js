import {
    T as m,
    q as F,
    u as p,
    g as d
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as f,
    G as I,
    A as L
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    c as v,
    D as l,
    b as w
} from "./amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js";
import {
    a4 as g
} from "./hydrate.B0xlt2dG.js";

function b() {
    let e, t;
    const o = new Promise((r, a) => {
        e = r, t = a
    });
    return {
        get promise() {
            return o
        },
        resolve(r) {
            e(r)
        },
        reject(r) {
            t(r)
        }
    }
}
let u = null,
    c = null;

function C({
    observability: e,
    url: t
}) {
    if (c) return c;
    const o = t.sandboxAutocomplete(),
        r = {
            current: null
        },
        {
            promise: a,
            resolve: n
        } = b();
    if (c = a, !u) {
        const h = i => async S => {
            e.leaveErrorBreadcrumb("Autocomplete iframe loaded", {
                url: o,
                event: JSON.stringify(S),
                time: Date.now(),
                specialId: i ? .getAttribute(l)
            }), r.current = w(i, o, "autocomplete", e, {}), n(r)
        };
        u = v({
            id: "Autocomplete-IFrame",
            name: "Autocomplete-IFrame",
            url: o,
            privileges: ["allow-scripts", "allow-same-origin"],
            iframeSpecialId: L(),
            onLoad: h
        }), e.leaveErrorBreadcrumb("Autocomplete iframe created", {
            url: o,
            specialId: u.getAttribute(l)
        })
    }
    return c
}

function y() {
    const {
        observability: e,
        url: t
    } = f();
    return F(() => C({
        observability: e,
        url: t
    }), [e, t])
}

function j() {
    const {
        shop: {
            id: e
        },
        source: {
            sourceId: t,
            checkoutSessionIdentifier: o
        }
    } = f(), r = y();
    return m(() => {
        function a() {
            return {
                shopId: I(e),
                sourceId: t || "",
                checkoutSessionIdentifier: o || ""
            }
        }
        return {
            async search(...n) {
                return (await r()).current.call.search(...n)
            },
            async fetchAddress(...n) {
                return (await r()).current.call.fetchAddress(...n)
            },
            async formatAddress(n) {
                return (await r()).current.call.formatAddress(n, a())
            },
            async fetchCountriesWithPhoneNumberPrefix(n) {
                return (await r()).current.call.fetchCountriesWithPhoneNumberPrefix(n, a())
            }
        }
    }, [r, e, t, o])
}

function R() {
    const e = y();
    return m(() => ({
        async validation(...t) {
            return (await e()).current.call.validation(...t)
        }
    }), [e])
}
const E = "fjTgn",
    P = "fa7nz",
    x = "RV2tT",
    N = "wOVuC",
    G = "_9Mesh",
    s = {
        FormLayout: E,
        FormLayoutGroup: P,
        SpacingSmall100: x,
        SpacingBase: N,
        FormLayoutConnected: G
    };

function V({
    children: e
}) {
    const {
        formLayout: {
            spacing: t
        }
    } = g(), o = t === "none";
    return p("div", {
        className: d(s.FormLayout, A(t), o && s.FormLayoutConnected),
        children: e
    })
}

function _({
    children: e,
    gridTemplateColumns: t
}) {
    const {
        formLayout: {
            spacing: o
        }
    } = g();
    return p("div", {
        className: d(s.FormLayoutGroup, A(o)),
        style: {
            "--form-layout-group-columns": t
        },
        children: e
    })
}

function A(e) {
    switch (e) {
        case "base":
            return s.SpacingBase;
        case "none":
            return;
        default:
            return s.SpacingSmall100
    }
}
export {
    V as F, _ as a, R as b, C as g, j as u
};