import {
    cm as f,
    M as S,
    O as l,
    b8 as P,
    iK as y
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    T as d,
    u as C,
    g as m,
    q as v
} from "./esnext-vendor.BDPAaZdq.js";
import {
    S as h
} from "./addresses-is-address-empty.Ch6V3XcM.js";
import {
    S as b
} from "./AddressPresenter.B0qw2vWQ.js";
import {
    b as k,
    a as B
} from "./hooks-useShouldRevealCustomization.wOAvQfO_.js";
import {
    a2 as E,
    a4 as L
} from "./hydrate.B0xlt2dG.js";
const M = /\S+@\S+\.\S{2,}/;

function K(t, o) {
    if (!f(t)) return o
}

function W(t, o) {
    return M.test(t) ? void 0 : o
}
const c = new S(0, 0, 100);

function U({
    foregroundColor: t,
    backgroundColor: o,
    section: e = "main"
}) {
    const n = E(),
        {
            colors: s
        } = L(),
        a = n[e];
    let r = c;
    if (o === void 0) {
        const p = a.colorScheme;
        r = p ? s.schemes ? .[p] ? .base ? .background ? ? c : c
    } else r = o;
    const {
        isValidContrast: g
    } = d(() => k({
        backgroundColor: r,
        foregroundColor: t
    }), [r, t]);
    return g
}
const T = "_8ssCG",
    w = "zS4x6",
    I = "PrlUn",
    _ = "SsCEp",
    O = "eEpXo",
    x = "PJvCw",
    D = "aTkbO",
    u = {
        xsmall: T,
        small: w,
        medium: I,
        large: _,
        ShopPayLogo: O,
        ShopLogo: x,
        inline: D
    };

function $({
    accessibilityVisibility: t = "visible",
    color: o = "white",
    inline: e,
    size: n = "medium"
}) {
    const s = o === "branded" ? h.toRgb() : o,
        a = t === "hidden";
    return C(b, {
        className: m(u.ShopLogo, u[n], {
            [u.inline]: e
        }),
        style: {
            fill: s
        },
        "aria-hidden": a || void 0,
        "aria-label": a ? void 0 : "Shop",
        role: a ? void 0 : "img"
    })
}

function q() {
    const {
        observability: t,
        source: o,
        shopPay: e
    } = l();
    return {
        openModal: v(s => {
            e.user.isUnauthenticatedUser.value ? e.session.unstable_setUnauthenticatedErrorModal(s) : t.error(new P("Cannot open an unauthenticated error modal outside of the unauthenticated flow", {
                groupingHash: "ShopPayError::UnauthenticatedErrorModal"
            }), {
                severity: "error",
                metadata: {
                    source: {
                        type: o.type
                    },
                    checkout: {
                        token: o.checkoutSessionIdentifier || o.sourceId
                    },
                    event: {
                        modalType: s.type,
                        shopPayFlow: e.user.flow.value
                    }
                }
            })
        }, [t, o, e])
    }
}
const A = "_0mzUL",
    i = {
        Button: A,
        "Button--dark": "_6W0f3",
        "Button--contrast": "aFsKX",
        "Button--progressing": "XVUQD"
    };

function F({
    progressing: t = !1
} = {}) {
    const o = U({
            foregroundColor: h
        }),
        e = B(),
        n = l().shopPay.app.config,
        s = y(n, e);
    return d(() => m(i.Button, {
        [i["Button--contrast"]]: !o && !s,
        [i["Button--dark"]]: s,
        [i["Button--progressing"]]: t
    }), [s, o, t])
}

function G() {
    const {
        shopPay: t
    } = l(), o = t.session.isInternalProgressing.value;
    return F({
        progressing: o
    })
}
export {
    $ as S, W as a, G as b, U as c, F as d, u as s, q as u, K as v
};