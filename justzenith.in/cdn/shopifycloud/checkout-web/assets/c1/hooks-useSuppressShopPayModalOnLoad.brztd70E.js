const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-PhoneNumberFormatter.BHQbjIll.js", "min-phone-number-library.CH-xVS8e.js"]))) => i.map(i => d[i]);
import {
    _ as I
} from "./app.D1P6yWfp.js";
import {
    N as w,
    A as v,
    h as E,
    q as _,
    T as R,
    r as V,
    f as A
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aS as k,
    O as j,
    P as B,
    et as L,
    m5 as T,
    eO as K,
    jY as $,
    m6 as M
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    i4 as x
} from "./hydrate.B0xlt2dG.js";
let b = null,
    P = null;

function G(e, r = "", o, c) {
    const [a, u] = w(({
        formatter: n,
        regionCode: s,
        phoneNumber: g
    }, h) => {
        switch (h.type) {
            case "reset":
                return h.state;
            case "formatter":
                {
                    const {
                        PhoneNumberFormatter: m
                    } = h,
                    F = new m(s);
                    return C(g, s, F, o)
                }
            case "phone":
                return C(h.phoneNumber, s, n)
        }
    }, {
        phoneNumber: r,
        regionCode: e,
        loading: !0
    }, ({
        regionCode: n,
        phoneNumber: s
    }) => O(s, n, c, o));
    let {
        phoneNumber: p,
        regionCode: l,
        formatter: t
    } = a;
    const f = a.loading,
        i = v(r),
        d = v(e);
    if (i.current !== r || d.current !== e) {
        const n = d.current !== e,
            s = /^\+\d/.test(r),
            g = !n && s;
        i.current = r, d.current = e;
        const m = O(r, g ? l ? ? e : e, a.formatter);
        p = m.phoneNumber, l = m.regionCode, t = m.formatter, u({
            type: "reset",
            state: m
        })
    }
    E(() => {
        let n = !0;
        return (async function() {
            if (t) return;
            const s = await D();
            n && u({
                type: "formatter",
                PhoneNumberFormatter: s
            })
        })(), () => {
            n = !1
        }
    }, [t]);
    const N = _(n => {
            t && !/^\+\d/.test(n) && t.updateRegionCode(e), u({
                type: "phone",
                phoneNumber: n
            })
        }, [t, e]),
        S = _(n => {
            t != null && (t.updateRegionCode(n), u({
                type: "phone",
                phoneNumber: `+${t.countryCode}${t.getNationalNumber(p)}`
            }))
        }, [t, p]),
        y = R(() => t == null ? "+1" : `+${t.getCountryCodeFromRegionCode(l??d.current)}`, [t, l]);
    return {
        loading: f,
        formattedNumber: p,
        formattedNumberValueObject: a.phoneNumberValueObject,
        regionCode: l,
        prefix: y,
        setPhoneNumber: N,
        selectCountry: S
    }
}

function D() {
    return P || (P = (async () => {
        const {
            default: e
        } = await V(() => I(() =>
            import ("./component-PhoneNumberFormatter.BHQbjIll.js"), __vite__mapDeps([0, 1])));
        return b = e, b
    })(), P)
}

function C(e, r, o, c) {
    if (o == null) return {
        phoneNumber: e,
        phoneNumberValueObject: {
            value: e
        },
        regionCode: r,
        loading: !0
    };
    const a = o.format(e || (c ? `+${o.countryCode}` : ""));
    return {
        formatter: o,
        phoneNumber: a,
        phoneNumberValueObject: {
            value: a
        },
        regionCode: o ? .regionCode,
        loading: !1
    }
}

function O(e, r, o, c) {
    let a;
    return o ? (o.updateRegionCode(r), a = o) : a = b ? new b(r) : void 0, C(e, r, a, c)
}

function z() {
    const {
        checkoutProtocolPresentedSignal: e
    } = k(), {
        checkout: r,
        router: o
    } = j(), {
        allViolations: c
    } = B(), a = L();
    return A(() => {
        const u = o.currentUrl.value,
            l = u.searchParams.get(T) === "false",
            t = u.searchParams.get(K),
            f = r.latestReceipt.value,
            i = f ? x(f) : !1,
            N = c.value ? .some(y => $.has(y.code)),
            S = () => a && !e.value;
        return !!(t && t !== M.PromptAllowed && !l || u.searchParams.get("storefront_wallet") || N || S() || i)
    })
}
export {
    z as a, G as u
};