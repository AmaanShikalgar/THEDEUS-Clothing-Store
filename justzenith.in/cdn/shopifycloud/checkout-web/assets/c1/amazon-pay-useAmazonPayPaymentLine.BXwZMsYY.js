import {
    a8 as m,
    a9 as p,
    f as h
} from "./esnext-vendor.BDPAaZdq.js";
import {
    Q as l,
    fg as b,
    _ as g
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";

function x(t, e, a = []) {
    try {
        const o = new URL(t),
            i = new URL(e),
            r = d(o, i) || a.some(s => {
                try {
                    const f = new URL(s);
                    return f.origin === s && d(o, f)
                } catch {
                    return !1
                }
            });
        return o.origin === t && o.protocol === "https:" && r
    } catch {
        return !1
    }
}

function d(t, e) {
    return t.protocol === e.protocol && t.port === e.port && (t.hostname === e.hostname || t.hostname.endsWith(`.${e.hostname}`))
}

function A() {
    const t = document.querySelector('meta[name="serialized-shop"]') ? .getAttribute("content");
    if (t) try {
        return JSON.parse(t)
    } catch {
        return
    }
}
const y = "data-special-id";

function L({
    id: t,
    url: e,
    privileges: a,
    title: o,
    name: i,
    iframeSpecialId: r,
    onLoad: s
}) {
    const f = document.getElementById(`sandbox-${t}`);
    if (f && f.tagName === "IFRAME") return f;
    const n = document.createElement("iframe");
    if (n.setAttribute("id", `sandbox-${t}`), n.setAttribute("src", e), n.setAttribute("sandbox", a.join(" ")), n.setAttribute("tabIndex", "-1"), n.setAttribute("aria-hidden", "true"), r && n.setAttribute(y, r), o && n.setAttribute("title", o), i && n.setAttribute("name", i), n.setAttribute("style", "display:none; height:0; width:0; visibility: hidden;"), E(n), s) {
        const c = s(n);
        n.addEventListener("load", c, {
            once: !0
        })
    }
    return n
}
const u = {};

function O(t, e, a, o, i) {
    const r = t.getAttribute("id");
    if (!r) throw Error("Endpoint cannot be created without an iframe id");
    o && P(e, o);
    const s = `${r}-endpoint-${a}`,
        f = u[s];
    f && (o ? .leaveErrorBreadcrumb(`Terminating existing RPC endpoint ${s}`), f.terminate());
    const n = i ? .isSandboxedWithNullOrigin ? "*" : new URL(e).origin,
        c = m(p(t, {
            targetOrigin: n
        }));
    return u[s] = c, c
}

function P(t, e) {
    let a;
    try {
        a = new URL(t, window.location.href)
    } catch {
        return
    }
    const o = a.searchParams.get("shopHost");
    if (!o) return;
    const i = `https://${o}`,
        r = window.location.origin;
    x(r, i, A() ? .origins) || e.log("sandbox_parent_origin_mismatch", "Sandbox shopHost does not match the parent origin", {
        sandbox: a.pathname,
        expectedOrigin: i,
        actualOrigin: r
    })
}

function E(t) {
    let e = document.querySelector("#SandboxContainer");
    e == null && (e = document.createElement("div"), e.setAttribute("id", "SandboxContainer"), document.body.appendChild(e)), e.appendChild(t)
}
const S = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

function R(t) {
    return typeof t == "string" && S.test(t)
}

function $() {
    const t = l().paymentLines;
    return h(() => {
        const [e] = b(t.value, [g.AmazonPay]);
        return e
    })
}
export {
    y as D, E as a, O as b, L as c, P as r, $ as u, R as v
};