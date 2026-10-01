import {
    q as A,
    u as s,
    A as k,
    T as X,
    h as w,
    x as Y,
    g as R
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aP as V,
    ae as Z,
    aQ as K,
    aR as $,
    aS as G,
    aF as J,
    a4 as M,
    aT as ee,
    aU as te,
    aV as T,
    aW as ne,
    aX as F,
    aY as re,
    aZ as ae,
    a_ as oe,
    a$ as h,
    b0 as se,
    b1 as ce,
    b2 as ie,
    b3 as le
} from "./hydrate.B0xlt2dG.js";
import {
    b3 as ue,
    b4 as fe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import "./app.D1P6yWfp.js";
var x = {
    Content: "xhuvqpk xhuvqpj _1fragem108 _1fragem10n _1fragemzt _1fragem112 _1fragemup _1fragemv4 _1fragemws _1fragem131 _1fragem133",
    Popover: "xhuvqp1 xhuvqp0 _1fragemws _1fragemy5 _1fragem133",
    popoverConnectorVariant: {
        arrow: "xhuvqp5",
        none: "xhuvqp6"
    },
    popoverPlacementVariant: {
        blockStart: "xhuvqp7",
        blockStartSpanInlineEnd: "xhuvqp8",
        blockStartSpanInlineStart: "xhuvqp9",
        blockEnd: "xhuvqpa",
        blockEndSpanInlineEnd: "xhuvqpb",
        blockEndSpanInlineStart: "xhuvqpc",
        inlineStart: "xhuvqpd",
        inlineStartSpanBlockEnd: "xhuvqpe",
        inlineStartSpanBlockStart: "xhuvqpf",
        inlineEnd: "xhuvqpg",
        inlineEndSpanBlockEnd: "xhuvqph",
        inlineEndSpanBlockStart: "xhuvqpi"
    }
};

function xe(c) {
    const r = V(),
        {
            active: u,
            setActive: i
        } = r || {},
        {
            onHide: f
        } = c,
        a = A(() => {
            i ? .(!1), typeof f == "function" && f()
        }, [i, f]);
    if (r) {
        r.setActivatorAttributes({
            "aria-expanded": r.active,
            "aria-controls": c.id
        }), r.attach("onClick", () => {
            u && a(), i ? .(!u)
        });
        const {
            children: v
        } = c;
        return s(O, { ...c,
            onHide: a,
            open: u,
            children: Z(v) && s(K, {
                children: v
            })
        })
    }
    return s(O, { ...c
    })
}
const O = $(G(function({
    blockSize: r = "auto",
    children: u,
    connector: i,
    offset: f,
    id: a,
    inlineSize: v = "auto",
    keepMounted: d = !1,
    maxBlockSize: y = "none",
    maxInlineSize: L = "none",
    minBlockSize: B = "0",
    minInlineSize: D = "0",
    onHide: C,
    onShow: S,
    padding: W = "base",
    positionArea: q = "block-start",
    open: t = !1
}) {
    const b = V(),
        {
            getInteraction: E
        } = J(),
        _ = k(t),
        I = k(t),
        l = k(null),
        {
            popover: {
                connector: H = "arrow",
                cornerRadius: j
            }
        } = M(),
        N = i ? ? H,
        {
            className: z,
            style: Q
        } = ee({
            blockSize: r,
            inlineSize: v,
            padding: W,
            maxBlockSize: y,
            maxInlineSize: L,
            minBlockSize: B,
            minInlineSize: D
        }),
        n = X(() => {
            if (b) return b.activatorRef.current ? ? null;
            if (a) {
                const o = E(a);
                if (te(o) && o.invokerRef ? .current) return o.invokerRef.current
            }
            return null
        }, [E, a, b]),
        p = A(() => {
            C ? .()
        }, [C]);
    return w(() => {
        const o = e => {
            const g = T(l.current),
                m = ne(e),
                P = F(n);
            e.target instanceof Node && document.contains(e.target) && !l.current ? .contains(e.target) && !n ? .contains(e.target) && (g || !m) && (P || !F(e.target)) && t && p()
        };
        return document.addEventListener("click", o), () => {
            document.removeEventListener("click", o)
        }
    }, [n, p, t]), w(() => {
        const o = e => {
            if (!t) return;
            const g = n && re(n),
                m = l.current && ae(l.current),
                P = l.current && oe(l.current),
                U = T(l.current);
            switch (e.key) {
                case "Escape":
                case "Esc":
                    U && (p(), n ? .focus());
                    break;
                case "Tab":
                    {
                        h(n) && e.shiftKey ? p() : h(n) ? (e.preventDefault(), m ? .focus()) : h(m) && e.shiftKey ? (e.preventDefault(), n ? .focus(), p()) : h(P) && !e.shiftKey && (e.preventDefault(), g ? .focus(), p());
                        break
                    }
            }
        };
        return t && document.addEventListener("keydown", o, !1), !_.current && t && S ? .(), _.current = t, t && (I.current = !0), () => {
            document.removeEventListener("keydown", o, !1)
        }
    }, [n, p, S, t]), !t && !(d && I.current) ? null : s(se, {
        activator: n,
        offset: f ? ? N === "arrow" ? 15 : 5,
        positionArea: q,
        preventOverflow: !0,
        id: a,
        hidden: !t,
        children: s(pe, {
            positionArea: q,
            connector: N,
            cornerRadius: j,
            popoverRef: l,
            responsiveClassNames: z,
            responsiveStyle: Q,
            children: u
        })
    })
}, {
    overlayType: "popover"
}), {
    focusActivatorWhenClosing: !0
});

function pe({
    children: c,
    positionArea: r,
    connector: u,
    cornerRadius: i,
    popoverRef: f,
    responsiveClassNames: a,
    responsiveStyle: v
}) {
    const d = Y(ce),
        y = d ? ie(d.position, d.alignment) : ue(r);
    return s(K, {
        children: s("div", {
            className: R(x.Popover, x.popoverPlacementVariant[y], x.popoverConnectorVariant[u]),
            ref: f,
            style: { ...i != null && {
                    borderRadius: fe(i)
                }
            },
            children: s("div", {
                className: R(x.Content, a),
                style: v,
                children: s(le, {
                    children: c
                })
            })
        })
    })
}
export {
    xe as P
};