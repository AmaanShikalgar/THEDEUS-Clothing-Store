import {
    l as u,
    f as g
} from "./esnext-vendor.BDPAaZdq.js";
import {
    a6 as b
} from "./hydrate.B0xlt2dG.js";
import {
    O as d,
    ad as f
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
var s = (t => (t.Light = "LIGHT", t.Dark = "DARK", t))(s || {});
const p = [90, 49, 244],
    i = [255, 255, 255];

function l(t) {
    const e = t.map(r => {
        const n = r / 255;
        return n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4
    });
    return e[0] * .2126 + e[1] * .7152 + e[2] * .0722
}

function c(t, e) {
    const r = l(t),
        n = l(e),
        o = Math.max(r, n),
        a = Math.min(r, n);
    return (o + .05) / (a + .05)
}

function v(t) {
    let e = t,
        r = "rgba(255, 255, 255, 1)";
    for (; e;) {
        const n = getComputedStyle(e).backgroundColor;
        if (n) {
            const o = m(n);
            if (o[3] && o[3] > .1) {
                r = n;
                break
            }
        }
        e = e.parentElement
    }
    return r
}

function A(t) {
    let e = i;
    if (t.startsWith("#")) e = $(t);
    else if (t.startsWith("rgb") && (e = m(t), e.length === 4 && e[3] <= .043 && e.slice(0, 3).every(r => r === 0))) return s.Light;
    return c(e, p) > c(e, i) ? s.Light : s.Dark
}

function $(t) {
    let e = 0,
        r = 0,
        n = 0;
    return t.length === 4 ? (e = +`0x${t[1]}${t[1]}`, r = +`0x${t[2]}${t[2]}`, n = +`0x${t[3]}${t[3]}`) : t.length === 7 && (e = +`0x${t[1]}${t[2]}`, r = +`0x${t[3]}${t[4]}`, n = +`0x${t[5]}${t[6]}`), [e, r, n]
}

function m(t) {
    const r = (t.match(/(\d+\.\d+|\d+)/g) || []).map(Number);
    for (; r.length < 4;) r.push(1);
    return r
}
const C = () => {
    const {
        checkout: t
    } = d(), e = t.configuration.visibility.showAside, r = f(), n = b({
        base: !0,
        medium: !1
    }), o = u(e), a = u(n);
    return g(() => !(o.value && !a.value && r.value))
};
export {
    s as T, v as g, A as p, C as u
};