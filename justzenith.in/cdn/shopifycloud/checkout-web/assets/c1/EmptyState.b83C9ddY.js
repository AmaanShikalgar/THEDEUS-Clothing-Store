import {
    T as p,
    u as t,
    S as m
} from "./esnext-vendor.BDPAaZdq.js";
import {
    C as b,
    a as f
} from "./Choice.BIzIW4rp.js";
import {
    H as k,
    c,
    B as l,
    P as h
} from "./hydrate.B0xlt2dG.js";
import {
    N as C,
    O as d
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    u as v
} from "./localization-index.Bo8bPuxq.js";
const y = "MsV8u",
    S = {
        Title: y
    };

function A(n) {
    const {
        title: e,
        titleHidden: i,
        selectedContentBackground: a,
        itemPadding: o,
        ...r
    } = n, s = v(), u = p(() => s ? {
        border: "none",
        spacing: "none",
        background: "transparent",
        backgroundSelected: "base",
        selectedContentBackground: "selected",
        selectedContentTransitionProperties: ["height", "opacity"],
        ...o && {
            itemPadding: o
        }
    } : { ...a && {
            selectedContentBackground: a
        },
        ...o && {
            itemPadding: o
        }
    }, [s, o, a]), g = e && (i ? t("legend", {
        className: C({
            screenReaders: "only"
        }),
        children: e
    }) : t("legend", {
        className: S.Title,
        children: t(k, {
            level: 3,
            accessibilityRole: "presentation",
            children: e
        })
    }));
    return t(c, {
        children: t(x, {
            id: r.name,
            title: e,
            children: [g, t(b, { ...u,
                children: t(f, { ...r,
                    variant: "block"
                })
            })]
        })
    })
}

function x({
    id: n,
    title: e,
    children: i
}) {
    return n ? e ? t("fieldset", {
        id: n,
        children: i
    }) : t("div", {
        id: n,
        children: i
    }) : t(m, {
        children: i
    })
}

function E({
    children: n
}) {
    const e = d().checkout.configuration.layout.isOnePage.value;
    return t(l, {
        background: e ? "subdued" : void 0,
        border: e ? void 0 : "base",
        borderRadius: "base",
        padding: `${e?"large-100":"base"} ${e?"large-100":"large-500"}`,
        children: t(c, {
            gap: "small-200",
            alignItems: "center",
            children: n
        })
    })
}

function L({
    children: n
}) {
    return t(l, {
        maxInlineSize: "64px",
        maxBlockSize: "64px",
        inlineSize: "100%",
        blockAlignment: "center",
        inlineAlignment: "center",
        children: n
    })
}

function z({
    children: n
}) {
    const e = d().checkout.configuration.layout.isOnePage.value;
    return t(h, {
        color: e ? "subdued" : void 0,
        textAlign: e ? void 0 : "center",
        children: n
    })
}
export {
    A as C, E, L as a, z as b
};