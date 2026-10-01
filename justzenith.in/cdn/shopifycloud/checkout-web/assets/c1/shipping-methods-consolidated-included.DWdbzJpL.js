import {
    f as y
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aC as b,
    aD as S,
    n as C,
    O as T,
    P as I,
    ap as k,
    aE as x,
    aA as D,
    r as G
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    au as w,
    ai as A
} from "./hydrate.B0xlt2dG.js";
import {
    p as B,
    s as P,
    c as E,
    a as N
} from "./EstimatedDeliveryContent.C1e3pn_u.js";

function F(t) {
    if (t === void 0) return;
    if (typeof t == "number") return {
        lower: t,
        upper: t
    };
    const {
        lower: n,
        upper: e
    } = t;
    if (!(n === void 0 || e === void 0)) return {
        lower: n,
        upper: e
    }
}

function O(t) {
    let n, e;
    for (const {
            estimatedTimeInTransit: o
        } of t) {
        const i = F(o);
        if (!i) return;
        n = n === void 0 ? i.lower : Math.min(n, i.lower), e = e === void 0 ? i.upper : Math.max(e, i.upper)
    }
    if (!(n === void 0 || e === void 0)) return n === e ? n : {
        lower: n,
        upper: e
    }
}

function $({
    line: t,
    localShopId: n,
    marketDrivenShippingEnabled: e,
    remoteShopsConfigMap: o,
    remoteMerchandiseDetails: i
}) {
    const s = b(t, i, n);
    if (s === n) return e;
    const r = o ? .get(s);
    return r ? r.marketDrivenShippingEnabled : t.methods.some(u => !!S(u))
}

function H(t, n) {
    if (!t) return `unresolved:${n}`;
    const e = t.deliveryPresentationGroupToken;
    return e ? `token:${e}` : `no-token:${n}:${t.handle}`
}

function f(t) {
    const n = new Map;
    return t.forEach(({
        line: e,
        method: o
    }, i) => {
        const s = H(o, e.id ? ? `index-${i}`);
        let r = n.get(s);
        r || (r = {
            key: s,
            methods: [],
            merchandiseLines: [],
            mergedTimeInTransit: void 0,
            availableOn: e.availableOn
        }, n.set(s, r)), o && r.methods.push(o), e.targetMerchandiseLines && r.merchandiseLines.push(...e.targetMerchandiseLines)
    }), [...n.values()].map(e => ({ ...e,
        merchandiseLines: w(e.merchandiseLines),
        mergedTimeInTransit: O(e.methods)
    }))
}

function W(t) {
    const n = t.map(o => ({
            line: o,
            method: C(o)
        })),
        e = n.filter(g);
    return {
        groups: f(e),
        nonShippableCount: n.length - e.length
    }
}

function g({
    line: t,
    method: n
}) {
    return n ? n.methodType === "SHIPPING" || n.methodType === "LOCAL" : t.methods.length === 0 || t.methods.some(({
        methodType: e
    }) => e === "SHIPPING" || e === "LOCAL")
}

function j(t) {
    return { ...t,
        included: !0
    }
}

function q(t, n) {
    return [...t.filter(e => !n(e)), ...t.filter(n)]
}

function J() {
    const {
        shop: {
            id: t,
            marketDrivenShippingEnabled: n,
            remoteShopsConfigMap: e
        }
    } = T(), {
        deliveryNext: o,
        remoteMerchandiseDetails: i
    } = I(), {
        parts: s
    } = k();
    return y(() => {
        const r = {
                includedMethods: new Set,
                total: void 0,
                presentsConsolidatedShipping: !1,
                groups: []
            },
            u = o.value;
        if (!u || u.status !== "filled") return r;
        const {
            oneTimePurchaseLines: d
        } = A(x(u).filter(D));
        if (d.length < 2) return r;
        const c = (a, l) => G({
                line: a,
                method: l,
                localShopId: t,
                marketDrivenShippingEnabled: n,
                remoteShopsConfigMap: e,
                remoteMerchandiseDetails: i.value
            }),
            h = d.some(a => $({
                line: a,
                localShopId: t,
                marketDrivenShippingEnabled: n,
                remoteShopsConfigMap: e,
                remoteMerchandiseDetails: i.value
            }));
        if (!h) return r;
        const v = B(s.deliveryLines.value),
            p = P(d, v),
            m = p.filter(a => !!a.method),
            L = m.length === d.length ? E(m.map(({
                line: a,
                method: l
            }) => ({ ...l,
                amountCombinabilityToken: c(a, l)
            }))) : void 0,
            M = f(p.filter(g));
        return {
            includedMethods: N(d, p, c),
            total: L,
            presentsConsolidatedShipping: h,
            groups: M
        }
    })
}
export {
    j as a, W as b, f as c, g as i, O as m, q as o, H as s, J as u
};