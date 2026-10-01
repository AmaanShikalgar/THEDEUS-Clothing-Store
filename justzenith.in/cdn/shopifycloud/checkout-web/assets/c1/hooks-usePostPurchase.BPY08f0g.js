import {
    h as i,
    A as u,
    x as m,
    q as l,
    _ as f
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as a,
    aL as d
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    iX as c,
    cf as p,
    iY as b
} from "./hydrate.B0xlt2dG.js";
var g = (e => (e.Loading = "loading", e.Usable = "usable", e.Complete = "complete", e))(g || {});

function v({
    stage: e,
    id: n
}) {
    if (typeof window > "u") return;
    const {
        client: t
    } = a(), o = t.unstable_legacyNavigationPerformance;
    i(() => {
        e === "usable" ? o ? .usable() : e === "complete" ? o ? .finish() : o ? .mark(e, n)
    }, [o, e, n])
}

function L(e, n = !0) {
    const t = c();
    f(() => {
        if (!(!t || !n)) return t.registerComponent(e)
    }, [t, e, n])
}

function C(e) {
    const n = c(),
        t = u(e);
    i(() => {
        t.current = e
    }, [e]), i(() => {
        let o = !1;
        if (!n) return;
        const {
            pendingComponentsSignal: s
        } = n;
        return t.current(s.value), s.subscribe(r => {
            o && t.current(r), o = !0
        })
    }, [n])
}

function S() {
    const e = m(p),
        n = l(() => {
            e && (e.completeStatusSignal.value = !0)
        }, [e]);
    return {
        id: e ? .id,
        markAsLoaded: n
    }
}

function y({
    id: e,
    stage: n
}) {
    const {
        client: t
    } = a(), o = t.unstable_legacyNavigationPerformance;
    C(s => {
        const r = n({
            pendingComponents: s
        });
        switch (r) {
            case "usable":
                {
                    o ? .usable();
                    break
                }
            case "complete":
                {
                    o ? .finish();
                    break
                }
            default:
                o ? .mark(r, e)
        }
    })
}
const P = class extends Error {
    constructor() {
        super(...arguments), this.name = "SkeletonNotRemovedError"
    }
};

function R(e) {
    const {
        observability: n
    } = a();
    i(() => {
        let t = document.body.classList.contains("Loading");
        if (!t) return;
        const o = setTimeout(() => {
            t = document.body.classList.contains("Loading"), t && n.error(new P("The skeleton is still in the DOM after 10 seconds."))
        }, 1e4);
        return () => clearTimeout(o)
    }, [n, e])
}

function N() {
    return d(b)
}
export {
    g as S, L as a, R as b, N as c, S as d, y as e, v as u
};