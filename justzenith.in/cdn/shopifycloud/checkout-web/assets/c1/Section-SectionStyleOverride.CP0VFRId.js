import {
    T as B,
    u as i,
    i as N
} from "./esnext-vendor.BDPAaZdq.js";
import {
    a2 as x,
    a4 as L,
    aE as U
} from "./hydrate.B0xlt2dG.js";
import {
    T as W
} from "./utilities-publishMessage.BORnEDuA.js";
import {
    O as D,
    a8 as F
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";

function o(d) {
    return Object.fromEntries(Object.entries(d ? ? {}).filter(([, r]) => r != null))
}
const Y = {
        background: "base",
        border: "full",
        borderStyle: "base",
        borderWidth: "base",
        cornerRadius: "base"
    },
    M = "base";

function j(d, r) {
    return d ? {
        background: r ? void 0 : "subdued200",
        border: "auto",
        borderStyle: "base",
        borderWidth: "base",
        cornerRadius: "large",
        shadow: "small"
    } : Y
}

function l(d, r, e) {
    return { ...o(d),
        ...o(r),
        ...o(e)
    }
}

function z(d, r, e) {
    if (!d && !r) return;
    const a = Array.isArray(e) ? e[0] : e,
        t = Array.isArray(e) ? e[1] : e;
    return [d ? ? a, r ? ? t]
}
const G = {
    background: "transparent",
    border: "none",
    cornerRadius: "base"
};

function X({
    children: d,
    condition: r,
    target: e
}) {
    return i(N, {
        when: r,
        fallback: d,
        children: i(H, {
            target: e,
            children: d
        })
    })
}

function H({
    children: d,
    target: r
}) {
    const {
        main: {
            section: e
        },
        expressCheckout: {
            background: a,
            padding: t
        },
        orderSummary: {
            mobile: {
                background: s,
                padding: u
            } = {}
        }
    } = x(), {
        shop: P,
        checkout: R
    } = D(), n = P.hasFlagEnabled(F), g = n || R.configuration.isUniversalCheckoutFinalizer, b = L(), {
        vaulted: {
            background: S,
            border: m,
            borderStyle: p,
            borderWidth: h,
            cornerRadius: k,
            shadow: y,
            padding: C,
            rowPadding: I
        },
        lineItems: {
            blockPadding: f,
            inlinePadding: v
        },
        rollup: {
            cardPadding: w
        }
    } = b, E = e ? .colorScheme != null && b.colors ? .schemes ? .[e.colorScheme] ? .base ? .background != null, A = B(() => {
        const c = j(g, E);
        switch (r) {
            case "card":
                return {
                    padding: M,
                    ...l(c, void 0, e)
                };
            case "edgeToEdgeCard":
                return { ...l(c, void 0, e),
                    padding: "none"
                };
            case "edgeToEdge":
                return { ...e,
                    padding: "none"
                };
            case "plain":
                return G;
            case "expressCheckout":
                return { ...e,
                    background: a ? ? e ? .background,
                    padding: t ? ? e ? .padding
                };
            case "vaulted":
                {
                    const _ = n ? c : {},
                        T = o({
                            background: S,
                            border: m,
                            borderStyle: p,
                            borderWidth: h,
                            cornerRadius: k,
                            shadow: y
                        }),
                        O = o(e);
                    return { ...l(_, T, e),
                        padding: n ? "none" : C ? ? O.padding,
                        ...n ? {} : {
                            background: T.background ? ? O.background
                        }
                    }
                }
            case "lineItems":
                return { ...e,
                    padding: z(f, v, e ? .padding) ? ? e ? .padding
                };
            case "mobileOrderSummary":
                return u || s ? { ...e,
                    background: s ? ? e ? .background,
                    padding: u ? ? e ? .padding
                } : e ? ? {};
            default:
                return e ? ? {}
        }
    }, [e, r, a, t, s, u, S, m, p, h, k, y, C, E, n, g, f, v]);
    return i(U, {
        style: A,
        insetsRows: r === "vaulted",
        children: n && (r === "vaulted" || r === "edgeToEdgeCard" || r === "edgeToEdge") ? i(W, {
            theme: {
                rollup: (r === "vaulted" ? I ? ? w : w) ? ? {}
            },
            children: d
        }) : d
    })
}
export {
    X as M, H as S
};