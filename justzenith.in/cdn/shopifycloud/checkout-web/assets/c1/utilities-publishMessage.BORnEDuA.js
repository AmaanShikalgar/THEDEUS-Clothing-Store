import {
    A as S,
    h as v,
    o as T,
    u as C,
    q as g
} from "./esnext-vendor.BDPAaZdq.js";
import {
    d as f
} from "./utilities-stable-ref.Dvd2X3ul.js";
import {
    kl as w,
    mn as M,
    O as y,
    G as N
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    a7 as O
} from "./hydrate.B0xlt2dG.js";

function W({
    children: e,
    theme: n
}) {
    const r = O(),
        t = S(n),
        i = S();
    if (i.current == null) {
        const u = new w(r.configuration);
        u.replace(f(r.configuration, n), !1), i.current = u
    }
    return v(() => {
        t.current = n, i.current ? .replace(f(r.configurationSignal.peek(), n), !1)
    }, [n, r]), T(() => {
        i.current.replace(f(r.configurationSignal.value, t.current), !1)
    }), C(M.Provider, {
        value: i.current,
        children: e
    })
}

function j(e) {
    return e.some(n => n.deliveryPredictionEligible)
}

function J({
    selectedMethods: e,
    deliveryExpectationLines: n,
    deliveryPromiseText: r
}) {
    const t = new Map;
    for (const a of n) {
        const {
            deliveryStrategyHandle: o
        } = a;
        o && t.set(o, a)
    }
    const u = e.flatMap(a => {
        if (!a.deliveryPredictionEligible) return [];
        const o = t.get(a.handle);
        return o ? .brandedPromise ? .handle === "shop_promise" ? [o] : []
    })[0];
    if (!u) return;
    const d = u.brandedPromise;
    if (d && r) return {
        brandedPromise: d,
        deliveryPromiseText: r
    }
}
const L = "shopify_pay",
    m = ":",
    Q = ["https://shop-server.shop.dev", "https://shop.app"];
var c = (e => (e.Closed = "closed", e.EmailChanged = "emailChanged", e.Error = "error", e.Hidden = "hidden", e.Loaded = "loaded", e.LoggedIn = "loggedIn", e.Ready = "ready", e.Resized = "resized", e.ShareCaptchaToken = "shareCaptchaToken", e))(c || {}),
    G = (e => (e.AllowNoInitialEmail = "allowNoInitialEmail", e.Create = "create", e.Hidden = "hidden", e.OriginChanged = "originChanged", e.Ready = "ready", e.CheckoutQueueToken = "checkoutQueueToken", e))(G || {}),
    U = (e => (e.ShopifyPayUserNotFound = "shopify_pay_user_not_found", e))(U || {}),
    B = (e => (e.FraudGuard = "fraud_guard", e.InvalidEmail = "invalid_email", e.InvalidPhone = "invalid_phone", e.LimitExceeded = "limit_exceeded", e.PhoneBlocked = "phone_blocked", e.RecordNotFound = "record_not_found", e))(B || {});
const q = () => {
        const {
            environment: {
                services: {
                    shopServer: e
                }
            },
            shop: n
        } = y(), r = parseInt(N(n.id), 10);
        return {
            extendBuyerIdentity: g(async () => {
                await fetch(new URL(`/checkout/${r}/shopify_pay/extend_buyer_identity`, e.url), {
                    method: "GET",
                    keepalive: !0
                })
            }, [r, e.url])
        }
    },
    Y = () => {
        const {
            environment: {
                services: {
                    shopServer: e
                }
            },
            shop: {
                myshopifyDomain: n
            },
            source: {
                checkoutSessionIdentifier: r
            },
            url: t
        } = y();
        return {
            exchangeSessionTokenForCookie: g(async ({
                token: u,
                origin: d,
                analytics_trace_id: a,
                flow: o
            }) => {
                const h = new URLSearchParams({
                    token: u,
                    origin: d,
                    shopify_domain: n
                });
                r && h.set("checkout_token", r), a && h.set("analytics_trace_id", a), o && h.set("flow", o);
                const l = new URL(t.shopPaySession(), e.url);
                return l.search = h.toString(), fetch(l.href, {
                    method: "POST",
                    keepalive: !0
                })
            }, [r, n, t, e.url])
        }
    };

function $({
    targetId: e,
    onLoaded: n,
    onClosed: r,
    onHidden: t,
    onError: i,
    onLoggedIn: u,
    onReady: d,
    onResized: a,
    onShareCaptchaToken: o,
    onEmailChange: h,
    skip: l = !1
}) {
    const k = g(s => {
            switch (s.action) {
                case c.Closed:
                    return r ? .();
                case c.Hidden:
                    return t ? .();
                case c.Error:
                    return i ? .(s.message, s.apiError, s.email);
                case c.Loaded:
                    return n ? .();
                case c.LoggedIn:
                    return u ? .(s.token, s.shop_pay_access_token);
                case c.Ready:
                    return d ? .(s.phoneNumber);
                case c.Resized:
                    return a ? .(parseInt(s.height, 10));
                case c.ShareCaptchaToken:
                    return o ? .(s.token);
                case c.EmailChanged:
                    return h ? .(s.email, s.isUserFound)
            }
        }, [r, t, i, n, u, d, a, o, h]),
        {
            environment: x
        } = y(),
        _ = x.services.payShopifyCom.url;
    v(() => {
        if (l) return;
        const s = ({
            data: p,
            origin: b
        }) => {
            if (b !== _ || !p || typeof p != "string" || !p.includes(m)) return;
            const [I, ...P] = p.split(m);
            if (I === L) try {
                const E = JSON.parse(P.join(m));
                (e && E.targetId === e || !e) && k(E)
            } catch {}
        };
        return window.addEventListener("message", s), () => {
            window.removeEventListener("message", s)
        }
    }, [k, _, e, l])
}

function F(e, n = {
    delimiter: m,
    messageKey: L
}) {
    return [n.messageKey, n.delimiter, JSON.stringify(e)].join("")
}

function z(e) {
    return F(e)
}

function V(e, n) {
    e && e.contentWindow ? .postMessage(z(n), "*")
}
export {
    B as A, m as D, U as M, c as R, G as S, W as T, q as a, $ as b, L as c, Q as d, J as g, j as h, V as p, Y as u
};