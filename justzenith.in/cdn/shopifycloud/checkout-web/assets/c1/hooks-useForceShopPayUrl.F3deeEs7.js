import {
    O as p,
    bc as R,
    bd as E,
    be as C,
    bf as T,
    Q as f,
    aS as k,
    bg as A,
    bh as N,
    bi as O,
    bj as I,
    bk as U
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    bf as V,
    bg as x,
    bh as D,
    e as w,
    bi as K,
    h as _,
    bj as L,
    bk as F,
    bl as Y,
    bm as G
} from "./hydrate.B0xlt2dG.js";
import {
    T as g,
    h as j,
    f as B,
    A as S,
    o as J,
    G as $,
    e as H
} from "./esnext-vendor.BDPAaZdq.js";
import {
    u as q
} from "./AddressPresenter.B0qw2vWQ.js";
const b = "placement-reference";

function z() {
    const {
        router: s
    } = p(), e = s.currentUrl.value.searchParams.get(b), {
        supported: n
    } = D(), l = w(), t = g(() => {
        const r = K(l.value);
        if (!e) {
            const i = R(E.PlacementReference);
            return n.has(i) ? i : void 0
        }
        return n.has(e) ? e : (console.error(new C(`'${e}' is not a valid placement reference, falling back to '${r}'. Please see https://shopify.dev/apps/checkout/test-ui-extensions#dynamic-extension-points`)), r)
    }, [e, n, l.value]);
    return j(() => {
        t && T(E.PlacementReference, t)
    }, [t]), t ? ? void 0
}

function Q() {
    const s = V(),
        a = z(),
        e = s.workspace ? .root ? .url || s.workspace ? .queryUrl;
    return g(() => {
        const n = new URLSearchParams;
        return e && n.set(x, e), a && n.set(b, a), n
    }, [e, a])
}

function re() {
    const {
        acceptSmsMarketing: s,
        phone: a,
        smsMarketingPhone: e,
        shippingAddress: n
    } = f(), {
        negotiate: l
    } = _(), t = n.fields.phone.value, r = e.value, {
        checkout: i
    } = p(), u = (i.proposal.negotiated.fields.availableDeliveryAddresses.value ? ? []).length === 0 ? t : "", d = r || a.value || u || "";
    return {
        handleSmsMarketingConsent: m => {
            e.value = "", s.value = m, m ? e.value = d : l({
                include: [],
                silenceViolations: ["all"]
            })
        }
    }
}

function X() {
    const {
        shippingAddress: s,
        locationAddress: a
    } = f();
    return B(() => {
        const e = s.value,
            n = a.value;
        return L(e, n)
    })
}
const Z = "ZZ";

function oe() {
    const {
        smsMarketingPhone: s
    } = f(), {
        validatePhoneNumber: a
    } = q(), {
        negotiate: e
    } = _(), n = X(), {
        i18n: l,
        checkout: {
            wallets: t
        }
    } = p(), {
        marketingPhoneInputError: r
    } = k(), i = S(!1);
    J(() => {
        const h = s.value,
            u = n.value,
            d = r.peek();
        if (!i.current) {
            i.current = !0;
            return
        }
        const o = a(h, u ? ? Z) ? void 0 : l.translate("field_errors.address_phone_blank");
        o ? d || (r.value = o) : r.value = void 0, !o && !t.activeSession.value && $(() => {
            e({
                include: [],
                silenceViolations: ["all"]
            })
        })
    })
}

function W(s) {
    return s ? .includes("marketingConsent") === !0 || s ? .includes("messagingMarketingConsent") === !0
}
const ee = new Set(["BUYER_IDENTITY_MARKETING_CONSENT_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]);

function ie(s) {
    const {
        smsMarketingPhone: a,
        acceptSmsMarketing: e
    } = f(), {
        marketingPhoneInputError: n
    } = k(), {
        checkout: {
            wallets: l
        }
    } = p(), t = S();

    function r() {
        t.current !== void 0 && t.current === a.peek() && (n.value = void 0, t.current = void 0)
    }
    F(u => {
        if (u.type === "success") {
            r();
            return
        }
        if (u.type !== "error") return;
        let d = !1;
        for (const o of u.violations) {
            if (o.__typename !== "UnprocessableTermViolation" || !ee.has(o.code) || !W(o.target)) continue;
            d = !0;
            const m = s || (o.localizedMessage ? ? o.nonLocalizedMessage);
            n.value = m, t.current = a.peek()
        }
        d || r()
    });
    const i = H(void 0),
        h = e.value ? n : i;
    return A(a, h, () => {}, N.InvalidOptInPhone, () => !!l.activeSession.value), O(a, n)
}

function ce(s) {
    const {
        checkout: a,
        router: e
    } = p(), {
        origin: n,
        prefix: l,
        searchParams: t
    } = e.currentUrl.value, r = Q(), i = Y().current.token, h = G(), u = t.get("shop_client_uuid") ? ? t.get("client_uuid"), d = a.checkpointToken.value, o = a.configuration.renderContextToken.token.value;
    return g(() => {
        const P = t.get("channel"),
            v = t.get("preview_theme_id"),
            c = new URL(`${n}${l}`);
        c.searchParams.set("payment", "shop_pay");
        for (const [y, M] of r.entries()) c.searchParams.set(y, M);
        return i && c.searchParams.set(I, i), s && c.searchParams.set("redirect_source", s), d && c.searchParams.set(U, d), P && c.searchParams.set("channel", P), v && c.searchParams.set("preview_theme_id", v), u && c.searchParams.set("shop_client_uuid", u), o ? c.searchParams.set("rctx", o) : c.searchParams.delete("rctx"), h(c.searchParams, t), c.toString()
    }, [t, n, l, i, s, d, r, h, u, o])
}
export {
    z as a, X as b, re as c, oe as d, ie as e, ce as f, W as i, Q as u
};