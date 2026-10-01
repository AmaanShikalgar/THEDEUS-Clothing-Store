import {
    h as f,
    u as o,
    k as S,
    A as m,
    q as L,
    g as R,
    S as k
} from "./esnext-vendor.BDPAaZdq.js";
import {
    i$ as C,
    b7 as U,
    bw as x,
    bx as z,
    bB as W,
    fc as y,
    B as P,
    b0 as Y,
    L as F
} from "./hydrate.B0xlt2dG.js";
import {
    aS as G,
    O as H
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const B = C.get("base") ? ? 0;
C.get("slow");

function st({
    children: e,
    open: t = !1,
    ...l
}) {
    const r = U(t, "slow") === "entered",
        {
            isAppLayout: h
        } = x(),
        p = z(),
        {
            checkoutProtocolModalEventSignal: d
        } = G();
    return f(() => {
        const i = T => {
            d.value = T === "modal_open" ? "redesign" : "none", p.notify({
                checkout_ui: {
                    type: T,
                    payload: {
                        duration: B
                    }
                }
            })
        };
        if (!(!r || !h)) return i("modal_open"), () => {
            i("modal_close")
        }
    }, [r, h, p, d]), o(W, {
        size: "large",
        open: t,
        ...l,
        children: e
    })
}
const Q = "_1gj5H",
    j = "QhZg2",
    q = "_7cUDh",
    Z = "m110w",
    $ = "Ep6aM",
    J = "_6Qz8P",
    K = "iugcG",
    a = {
        incentiveBadge: Q,
        shimmer: j,
        giftIconOnly: q,
        tooltipWrapper: Z,
        tooltipPopover: $,
        tooltipArrow: J,
        incentiveBadgeTooltipContent: K
    },
    V = 150,
    X = 300,
    tt = 3;

function ot() {
    return typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia("(hover: hover)").matches
}

function ct({
    notice: e,
    selected: t,
    showTitleWhenUnselected: l,
    ...u
}) {
    const [r, h] = S(!1), [p, d] = S(!1), i = m(null), T = m(null), g = m("hover"), s = m(), c = m();
    f(() => {
        if (t) {
            h(!0);
            const n = setTimeout(() => {
                h(!1)
            }, 800);
            return () => clearTimeout(n)
        }
    }, [t]);
    const M = !!e.additionalInfo,
        v = L(() => {
            s.current && (clearTimeout(s.current), s.current = void 0)
        }, []),
        O = L(() => {
            c.current && (clearTimeout(c.current), c.current = void 0)
        }, []),
        w = L(() => {
            v(), O(), g.current = "hover", d(!1)
        }, [O, v]);
    f(() => () => {
        s.current && clearTimeout(s.current), c.current && clearTimeout(c.current)
    }, []), f(() => {
        (!M || t) && w()
    }, [M, t, w]), f(() => {
        if (!p) return;
        const n = E => {
            E.target instanceof Node && !i.current ? .contains(E.target) && !T.current ? .contains(E.target) && w()
        };
        return document.addEventListener("click", n), () => {
            document.removeEventListener("click", n)
        }
    }, [p, w]);
    const A = n => {
            v(), O(), g.current = n, d(!0)
        },
        N = () => {
            ot() && (v(), O(), s.current = setTimeout(() => {
                A("hover"), s.current = void 0
            }, V))
        },
        _ = () => {
            g.current !== "click" && (v(), O(), c.current = setTimeout(() => {
                g.current = "hover", d(!1), c.current = void 0
            }, X))
        },
        b = n => {
            n.preventDefault(), n.stopPropagation(), A("click")
        },
        D = n => {
            n.preventDefault(), n.stopPropagation()
        },
        I = t || l ? o(P, {
            className: R(a.incentiveBadge, {
                [a.shimmer]: r
            }),
            children: o(y, { ...u,
                icon: t ? "gift" : void 0,
                children: e.title
            })
        }) : o(P, {
            className: a.giftIconOnly,
            children: o(y, { ...u,
                icon: "gift",
                tone: "accent",
                size: "small"
            })
        });
    return M ? o(k, {
        children: [o("div", {
            ref: i,
            className: a.tooltipWrapper,
            onMouseEnter: N,
            onMouseLeave: _,
            onMouseDownCapture: t ? void 0 : w,
            onTouchEnd: t ? b : void 0,
            onClick: t ? D : void 0,
            children: I
        }), p && i.current ? o(Y, {
            activator: i.current,
            offset: tt,
            positionArea: "block-start",
            children: o("div", {
                ref: T,
                className: a.tooltipPopover,
                role: "tooltip",
                onMouseEnter: () => A(g.current),
                onMouseLeave: _,
                children: [o(P, {
                    className: a.incentiveBadgeTooltipContent,
                    children: [e.additionalInfo, e.terms && e.termsUrl ? o(k, {
                        children: [" ", o(F, {
                            href: e.termsUrl,
                            accessibilityLabel: e.terms,
                            children: e.terms
                        })]
                    }) : null]
                }), o("div", {
                    className: a.tooltipArrow
                })]
            })
        }) : null]
    }) : I
}
const at = "https://www.shopify.com/legal/usdc-rewards-terms";

function lt(...e) {
    const [t, l] = e, u = m(l), {
        shopPay: {
            progressInterceptor: r
        }
    } = H();
    u.current = l, f(() => r.intercept(t, () => u.current()), [r, t])
}
export {
    ct as I, B as M, st as O, at as U, lt as u
};