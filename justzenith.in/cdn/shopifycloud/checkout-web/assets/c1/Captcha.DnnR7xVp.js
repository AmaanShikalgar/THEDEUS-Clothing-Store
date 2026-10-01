import {
    _ as O
} from "./app.D1P6yWfp.js";
import {
    d as V,
    r as B,
    e as D,
    o as R,
    G as y,
    k as U,
    h as x,
    u as s,
    b3 as M,
    y as _,
    E as P,
    j as w,
    A as L,
    b4 as F,
    f as I,
    g as J,
    i as g
} from "./esnext-vendor.BDPAaZdq.js";
import {
    H as j
} from "./ShopPayCaptcha.CPpzhmEJ.js";
import {
    iZ as z,
    i_ as N,
    h as A,
    bJ as K,
    cc as $,
    af as Q,
    c as T,
    W,
    E as G,
    al as Z,
    a3 as X,
    ad as Y
} from "./hydrate.B0xlt2dG.js";
import {
    bv as ee,
    bw as ae,
    bd as te,
    ad as re,
    O as b,
    cJ as oe,
    cl as ne,
    a6 as se,
    Q as ie,
    bg as le,
    bh as ce
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    c as ue
} from "./PaymentErrorBanner.CHfgrXa-.js";
const be = V({
    displayName: "Captcha",
    load: () => B(() => O(() => Promise.resolve().then(() => me), void 0))
});

function de({
    embed: r
}, i) {
    const n = ee(r ? .embedder),
        a = D(!1),
        e = z();
    return R(() => {
        i.value ? n && y(() => ae(r, "captcha")) : a.value = !1
    }), R(() => {
        if (!(!n || !a.value || !e)) return y(() => {
            e.value += 1
        }), () => {
            y(() => {
                e.value = Math.max(0, e.value - 1)
            })
        }
    }), {
        onOpen: () => {
            a.value = n && !!i.value
        },
        onClose: () => {
            a.value = !1
        }
    }
}

function q(r, i) {
    return r ? .status === "failed" && i === r.id
}

function pe() {
    const [r, i] = N(te.LastSeenCaptchaRequestedErrorReceiptId), n = re(), {
        checkout: a
    } = b(), e = a.latestReceipt.value, [d, v] = U(() => n.peek() ? q(e, r) : !0);
    return x(() => {
        const c = q(e, r);
        v(c), e ? .status === "failed" && r !== e.id && i(e.id), e ? .status !== "failed" && i(void 0)
    }, [e ? .id, e ? .status]), d
}

function he() {
    const {
        i18n: r
    } = b(), {
        progressing: i
    } = A(), {
        hasError: n,
        error: a
    } = K(oe), e = pe();
    return i.value || !n || !a || e ? null : s(ue, {
        identifier: "CaptchaRequiredBanner",
        tone: "critical",
        children: r.translate("payment_errors.captcha_required_without_payment_information")
    })
}
let k = !1;
const ve = M(r => {
        const {
            appContext: {
                i18n: i,
                observability: n
            },
            captchaSignal: a,
            errorSignal: e,
            lastJourneyProgression: d,
            negotiate: v,
            onViolation: c
        } = r, p = _(y(() => a.value ? .sitekey)), f = _(k), S = _(y(() => !!a.value ? .token)), u = P(() => !!e.value), t = Date.now(), h = k, m = i.translate("captcha.errors.not_solved");
        w(() => {
            const o = a.value;
            o ? o.sitekey && (p.value = o.sitekey) : p.value = void 0
        }), w(() => {
            const o = d.value,
                l = o.type === "error" ? o.violations.map(H => H.code) : [],
                C = a.value;
            C && C.violationCode && l.includes(C.violationCode) ? (c ? .(), e.value = m) : C ? .token && (e.value = void 0)
        });
        const E = P(() => !!p.value);
        return {
            errorSignal: e,
            hasError: u,
            hasSiteKey: E,
            isLoaded: f,
            sitekey: p,
            solvedOnLoad: S,
            handleVerify(o) {
                const l = a.value;
                l && (a.value = { ...l,
                    token: o,
                    violationCode: void 0
                }, v({
                    include: ["captcha"],
                    skipStateUpdates: !0
                }))
            },
            handleLoad() {
                h || n.histogram({
                    name: "captcha_load_time",
                    value: Date.now() - t,
                    attributes: {
                        provider: a.value ? .provider,
                        success: !0
                    }
                }), k = !0, f.value = !0
            },
            handleError(o) {
                h || n.histogram({
                    name: "captcha_load_time",
                    value: Date.now() - t,
                    attributes: {
                        provider: a.peek() ? .provider,
                        success: !1,
                        error: String(o)
                    }
                })
            },
            validate(o) {
                if (o && !o.token) return m
            }
        }
    }),
    fe = {
        Error: "MTtRU"
    };

function ye() {
    const r = b(),
        {
            client: i,
            i18n: n
        } = r,
        a = i.unstable_getSerialization("workerVersion") !== "fast",
        e = $(),
        d = ne(),
        {
            lastJourneyProgression: v
        } = se(),
        {
            captcha: c
        } = ie(),
        {
            negotiate: p
        } = A(),
        f = L(null),
        {
            onOpen: S,
            onClose: u
        } = de(r, c),
        t = F(() => new ve({
            appContext: r,
            captchaSignal: c,
            errorSignal: d,
            lastJourneyProgression: v,
            negotiate: p,
            onViolation: () => {
                u(), f.current ? .resetCaptcha()
            }
        }));
    le(c, d, t.validate, ce.InvalidCaptcha);
    const h = L(null),
        m = Q({
            active: t.hasError.value
        });
    R(() => {
        c.value && t.isLoaded.value && h.current && (m.current = h.current.querySelector("iframe"))
    });
    const E = I(() => t.isLoaded.value ? void 0 : "none"),
        o = I(() => t.hasError.value ? J(fe.Error) : void 0);
    return s(g, {
        when: () => {
            const l = t.solvedOnLoad.value && !c.value ? .sitekey;
            return !!(c.value ? .provider === "hcaptcha" && !l && t.sitekey.value)
        },
        children: s(T, {
            gap: "large-100",
            children: [s(g, {
                when: () => e.value && t.isLoaded.value && t.hasSiteKey.value,
                children: s(W, {
                    tone: "critical",
                    errorType: G.CheckoutError,
                    children: n.translate("payment_errors.captcha_required_without_payment_information")
                })
            }), s(g, {
                when: () => !t.isLoaded.value,
                children: s(Z, {
                    delay: a,
                    contentDisplay: "block",
                    inlineSize: "302px",
                    blockSize: "83px"
                })
            }), s(X, {
                accessibilityLabel: n.translate("captcha.title"),
                display: E.value,
                children: s(T, {
                    gap: "small-400",
                    children: [s(he, {}), s("div", {
                        className: o.value,
                        ref: h,
                        children: s(j, {
                            sitekey: t.sitekey.value,
                            onVerify: l => {
                                u(), t.handleVerify(l)
                            },
                            languageOverride: n.locale,
                            ref: f,
                            onLoad: t.handleLoad,
                            onError: l => {
                                u(), t.handleError(l)
                            },
                            onOpen: S,
                            onClose: u,
                            onChalExpired: u
                        })
                    }), s(g, {
                        when: t.errorSignal,
                        children: l => s(Y, {
                            children: l ? .message ? ? l
                        })
                    })]
                })
            })]
        })
    })
}
const me = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ye
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    be as C
};