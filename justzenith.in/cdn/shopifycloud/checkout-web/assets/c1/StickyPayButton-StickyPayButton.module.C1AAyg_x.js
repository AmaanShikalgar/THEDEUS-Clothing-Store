import {
    u as h,
    S as N,
    f as m,
    q as g,
    T as I,
    l as w
} from "./esnext-vendor.BDPAaZdq.js";
import {
    P as x,
    o as q,
    e2 as K,
    a5 as Y,
    B as k,
    e3 as J,
    e4 as $,
    c0 as U,
    e5 as V,
    e6 as X,
    e7 as j,
    e8 as H,
    e as Q,
    Q as L,
    h as z,
    bx as Z
} from "./hydrate.B0xlt2dG.js";
import {
    O as c,
    cz as ee,
    P as te,
    Q as A,
    dn as F,
    cy as ne,
    dk as O,
    dp as se,
    bH as oe,
    S as re,
    dq as ae,
    a5 as B,
    X as ie,
    aq as le,
    ap as ue,
    dr as ce,
    b8 as pe,
    ds as E,
    dt as de
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    S as he
} from "./Switch.BG-32C8R.js";
import {
    u as ye,
    c as Pe,
    d as me,
    e as ge
} from "./hooks-useWalletsTimeout.i08rvNYN.js";
import {
    E as T
} from "./addresses-is-address-empty.Ch6V3XcM.js";
import {
    s as fe
} from "./PayButton-helpers.Dg5kgVMm.js";
import {
    a as _e
} from "./app.D1P6yWfp.js";
import {
    g as Se,
    a as ve,
    b as be
} from "./helpers-credit-card-disabled.BnSr1GsQ.js";
import {
    v as Ee,
    a as ke,
    u as Ce
} from "./useShopPayButtonClassName.nv37ytUz.js";
import {
    u as Ie
} from "./AddressPresenter.B0qw2vWQ.js";
import {
    u as Ae,
    a as D
} from "./hooks-payment-button.DClnUefe.js";

function At({
    line: e
}) {
    const {
        i18n: t,
        source: s
    } = c(), n = s.type === "paymentCollection", {
        title: o,
        lineAmount: r
    } = e, a = r.amount === 0 ? t.translate("shipping.free_rate_label") : t.formatCurrency(r.amount, {
        currency: r.currencyCode,
        form: "short"
    }), i = r.amount === 0 ? "uppercase" : void 0;
    return h(x, {
        children: [o, n ? null : h(N, {
            children: [" · ", h(q, {
                type: "strong",
                letterCase: i,
                children: a
            })]
        })]
    }, o)
}
const C = "shop-pay-hsa-details",
    M = `${C}-description`;

function Be() {
    const {
        checkout: e,
        shop: t,
        shopPay: s
    } = c(), n = te().paymentMethods, {
        paymentLines: o
    } = A();
    return m(() => {
        const r = F(n.value);
        if (!(t.hasFlagEnabled(ne) && Re({
                identity: e.identity
            }) && (r === "ELIGIBLE" || r === "MIXED_CART")) || s.session.isInstallmentsSelected.value) return !1;
        const i = s.session.selectedPaymentMethod.value;
        if (i) return i.paymentMethod === "CREDIT_CARD";
        const u = o.value[0] ? .method,
            l = u ? .type === "wallet" && u.name === "SHOP_PAY" ? u.walletContent : void 0,
            p = l != null && "paymentMethod" in l && l.paymentMethod === "CREDIT_CARD";
        return u ? .type === "direct" || p
    })
}

function Re({
    identity: e
}) {
    return e.current.value === "shopPay"
}

function Bt() {
    const {
        checkout: e,
        shopPay: t
    } = c(), s = Be();
    return m(() => s.value && ee(e.proposal.negotiated.fields.paymentMethods.value) && t.session.hsaRequested.value)
}

function Rt() {
    const {
        i18n: e,
        shopPay: t,
        checkout: s
    } = c(), n = m(() => F(s.proposal.negotiated.fields.paymentMethods.value)), o = m(() => n.value !== "ELIGIBLE"), r = n.value === "MIXED_CART", a = m(() => !o.value && t.session.hsaRequested.value), i = r ? e.translate("payment.shop_pay_hsa.mixed_cart_description") : e.translate("payment.shop_pay_hsa.description"), u = g(l => {
        o.value || t.session.unstable_setHsaRequested(l)
    }, [o, t.session]);
    return h(k, {
        background: "base",
        colorLayer: "control",
        border: "base",
        borderRadius: "base",
        children: [h("span", {
            id: M,
            hidden: !0,
            children: i
        }), h(K, {
            id: C,
            open: r || a.value,
            summary: h(k, {
                padding: "base",
                children: h(he, {
                    label: e.translate("payment.shop_pay_hsa.label"),
                    checked: a.value,
                    disabled: o.value,
                    onChange: u,
                    icon: "none",
                    "aria-controls": `${C}-content`,
                    "aria-describedby": M
                })
            }),
            content: h(N, {
                children: [h(Y, {}), h(k, {
                    padding: "base",
                    children: h(x, {
                        type: "small",
                        color: "subdued",
                        children: i
                    })
                })]
            })
        })]
    })
}

function wt(e) {
    return I(() => e.some(t => {
        if (t.kind === "customField") return O(t).required.peek();
        const s = O(t);
        return s.behaviors.peek().blockProgress && s.capabilities.blockProgress
    }), [e])
}

function we() {
    const {
        shop: e,
        shopPay: {
            user: t
        }
    } = c();
    return e.hasFlagEnabled(se) ? !1 : t.getExperimentAssignment(T) === T.variants.treatment
}

function G() {
    const e = c(),
        {
            shop: t
        } = e,
        s = ye(),
        n = oe(),
        o = t.hasFlagEnabled(re);
    return m(() => ae(e.checkout, {
        showPayWithApplePayButton: s.value,
        paymentFullyCoveredByRedeemablesAndGiftCards: n.value,
        isApplePayInShopPayKillswitched: o
    }))
}

function Oe() {
    return J() ? .config ? .payActionType === "NATIVE"
}

function Te() {
    const {
        persistedGooglePaySignal: e
    } = B(), {
        checkout: t
    } = c();
    return m(() => {
        const s = e.value ? .receiptIdForPaymentFailure,
            n = t.latestReceipt.value;
        return !!(n ? .status === "failed" && n ? .failure ? .type === "payment" && s && n ? .id === s)
    })
}

function Me() {
    const {
        checkout: {
            identity: e
        }
    } = c(), {
        paymentLines: t
    } = A(), {
        inMemoryGooglePayParts: {
            paymentSheetOpenPromise: s
        }
    } = B(), n = Te();
    return m(() => e.current.value !== "googlePay" || !ie(t.value, "GOOGLE_PAY") ? !1 : s ? .value !== void 0 ? !0 : n.value)
}

function Ne() {
    const e = c(),
        {
            checkout: t,
            shopPay: s
        } = e,
        n = t.identity.current.value === "shopPay",
        o = Pe().value,
        r = Me().value,
        a = me().value,
        i = !n && o && !a,
        u = !n && r,
        {
            showApplePay: l,
            isApplePayInShopPay: p
        } = G().value,
        P = ge(),
        d = Oe(),
        f = $(),
        _ = we();
    return {
        kind: fe(t, {
            showPayWithPayPal: i,
            showApplePay: l && !a,
            showPayWithGooglePay: u,
            isEmbeddedCheckout: P,
            shouldRenderCheckoutProtocolButton: d,
            isInstallmentsSupported: f != null,
            isInstallmentsSelected: s.session.isInstallmentsSelected.value,
            isInstallmentsUkHoldoutTreatment: _
        }),
        showPayWithPayPal: i,
        isApplePayInShopPay: p,
        shouldDeferWalletToReview: a
    }
}

function xe() {
    const {
        source: e,
        checkout: t,
        shop: s,
        shopPay: n,
        observability: o,
        userEvents: r
    } = c(), a = n.installments, i = n.user.installments;
    return g(() => {
        i.isRejected.value && !i.isRetryable.value || (a.unstable_setModalOpen(!0, "checkout_button"), o.log("installments_modal_opened", "[Installments] Modal opened"), r.monorailEvent({
            schemaId: "shopify_pay_payment_page_ui_interaction/1.2",
            payload: { ...le(e, t, s),
                action: "continue_with_installments"
            }
        }))
    }, [a, i, o, r, e, t, s])
}

function Ue({
    existing: e,
    scope: t,
    next: s
}) {
    return [...e.filter(n => !He(n.target, t)), ...s]
}

function He(e, t) {
    return e ? e === t || e.startsWith(`${t}.`) : !1
}
var y = (e => (e.BlankEmail = "blank_email", e.BlankPhone = "blank_phone", e.InvalidEmail = "invalid_email", e.InvalidPhone = "invalid_phone", e.ShopAccountsInvalidEmail = "shop_accounts_invalid_email", e.ShopAccountsInvalidPhone = "shop_accounts_invalid_phone", e.ShopAccountsPhoneLimitReached = "shop_accounts_phone_limit_reached", e))(y || {});

function Le() {
    const {
        email: e
    } = A(), {
        shopPay: t
    } = c();
    return m(() => {
        const s = e.value.trim(),
            n = t.userVerification.value,
            o = Ee(s, y.BlankEmail),
            r = ke(s, y.InvalidEmail),
            a = n.status === "invalid" && n.email === s ? y.InvalidEmail : void 0;
        return {
            email: s,
            emailError: o || r || a
        }
    })
}
const Fe = () => {
        const {
            shopPay: e
        } = c(), t = e.signup.phoneNumber, s = e.signup.phoneCountryCode, n = Ie(), o = w(n.isPhoneNumberUtilLoaded), r = w(n.validatePhoneNumber), a = e.user.isAuthenticatedUser;
        return m(() => ({
            missingRequiredMobilePhoneNumber: !!(!a.value && (!t.value || o.value && !r.value(t.value, s.value, !0)))
        }))
    },
    De = "Mobile phone number is missing or invalid";

function Ge() {
    const e = Le(),
        {
            source: {
                checkoutSessionIdentifier: t
            },
            url: s,
            shopPay: n
        } = c(),
        o = n.user.phoneNumber,
        r = n.user.unstable_setPhoneNumber,
        {
            transactionParams: a
        } = n.config,
        i = n.user.isAuthenticatedUser,
        u = Fe(),
        l = g(async (p = !0) => {
            const {
                email: P,
                emailError: d
            } = e.value;
            if (i.value || o.value) return {
                status: "skipped"
            };
            if (!a) return {
                status: "failed",
                errors: [{
                    field: [],
                    code: "missing_content",
                    message: "Transaction params are missing"
                }]
            };
            const f = [];
            if (d && f.push({
                    field: ["email"],
                    code: d,
                    message: "email is blank or invalid"
                }), u.value.missingRequiredMobilePhoneNumber && f.push({
                    field: ["phone"],
                    code: y.InvalidPhone,
                    message: De
                }), f.length > 0) return {
                status: "failed",
                errors: f
            };
            let _ = p ? n.signup.hcaptchaToken.value : void 0;
            if (!_) try {
                const R = await n.signup.captchaRef.value ? .execute({
                    async: !0
                });
                R && (_ = R.response)
            } catch (b) {
                return b === "challenge-closed" ? {
                    status: "failed",
                    errors: []
                } : {
                    status: "failed",
                    errors: [{
                        field: ["hcaptcha"],
                        code: String(b),
                        message: "A captcha error was caught and handled"
                    }]
                }
            }
            let S = null;
            try {
                const b = n.signup.phoneNumber.value || "";
                S = await fetch(s.shopPayCreateUnverifiedUser(), {
                    method: "POST",
                    body: JSON.stringify({
                        email: P,
                        phone: b,
                        hcaptcha_token: _,
                        origin: "c1_unverified_user_signup",
                        checkout_token: t,
                        transaction_params: a
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        accept: "application/json"
                    }
                })
            } catch {
                return {
                    status: "failed",
                    errors: [{
                        field: [],
                        code: "unknown_error",
                        message: "An error was caught and handled during API request"
                    }]
                }
            }
            const v = await S.json();
            return S.status !== 200 ? Array.isArray(v ? .errors) && v ? .errors.length === 1 && v ? .errors[0].code === "further_authorization_required" && p ? (n.signup.unstable_setHcaptchaToken(void 0), l(!1)) : {
                status: "failed",
                errors: v ? .errors || [{
                    field: [],
                    code: `response_with_http_error_${S.status}`,
                    message: "Failed to create user"
                }]
            } : (r(v.parsed_phone), n.user.unstable_setEmail(P), n.user.unstable_updateFlow("authenticated_user"), {
                status: "success"
            })
        }, [i, o, a, e, u, r, n, s, t]);
    return {
        createUnverifiedUser: l
    }
}

function We() {
    const {
        i18n: e,
        shopPay: t,
        checkout: {
            validation: {
                contactErrors: {
                    emailInputError: s
                }
            }
        }
    } = c(), n = U(), {
        openModal: o
    } = Ce(), r = {
        [y.BlankEmail]: e.translate("field_errors.email_blank"),
        [y.InvalidEmail]: e.translate("field_errors.email_invalid"),
        [y.ShopAccountsInvalidEmail]: e.translate("field_errors.email_invalid")
    }, a = {
        [y.BlankPhone]: e.translate("mobile_phone_number.mobile_phone_invalid"),
        [y.InvalidPhone]: e.translate("mobile_phone_number.mobile_phone_invalid"),
        [y.ShopAccountsInvalidPhone]: e.translate("mobile_phone_number.mobile_phone_invalid"),
        [y.ShopAccountsPhoneLimitReached]: e.translate("mobile_phone_number.phone_limit_reached")
    };
    return {
        handleCreateUnverifiedUserErrors: u => {
            if (u.length === 0) return;
            const l = u.map(d => d.code),
                p = r[l.find(d => d in r)],
                P = a[l.find(d => d in a)];
            return p || P ? (s.value = p, t.signup.unstable_setPhoneError(P)) : o({
                type: V.Generic
            }), Promise.resolve().then(() => n())
        }
    }
}

function W() {
    const {
        progressContinueWithResult: e
    } = qe();
    return {
        progressContinue: g(async () => await e() === "continue", [e])
    }
}

function qe() {
    const {
        source: e,
        observability: t,
        shopPay: {
            progressInterceptor: s
        }
    } = c(), n = ue(), {
        createUnverifiedUser: o
    } = Ge(), {
        handleCreateUnverifiedUserErrors: r
    } = We(), a = U(), i = g(async () => {
        try {
            const u = await o(),
                l = await s.runInterceptors();
            n.validationErrors.value = Ue({
                existing: n.validationErrors.value,
                scope: X,
                next: Se(l)
            });
            const p = ve(l);
            if (!p) {
                const P = be(l);
                t.log("shop_pay_progress_interceptor_error_reported", "Shop Pay progress interceptor reported an error in useShopPayProgressContinue", {
                    interceptorErrors: P
                })
            }
            if (u ? .status === "failed") return r(u.errors), "blocked";
            if (!p) return $e(a), "blocked"
        } catch (u) {
            const l = u;
            return ce(l.message) || Je(l) ? t.log("shop_pay_progress_continue_unactionable_error", "Shop Pay progress continue swallowed an unactionable error in useShopPayProgressContinue", {
                errorName: l.name,
                errorMessage: Ye(l.message),
                sourceType: e.type
            }) : t.error(l, {
                errorClass: j.ShopPayProgressIntercept,
                severity: "error",
                metadata: {
                    source: {
                        type: e.type
                    },
                    checkout: {
                        token: e.checkoutSessionIdentifier ? ? "checkout_identifier_undefined"
                    }
                }
            }), "errored"
        }
        return "continue"
    }, [o, a, r, s, n, t, e]);
    return I(() => ({
        progressContinueWithResult: i
    }), [i])
}
const Ke = 200;

function Ye(e) {
    return e ? .slice(0, Ke)
}

function Je(e) {
    return _e.includes(e.name)
}

function $e(e) {
    return Promise.resolve().then(() => e())
}

function Ve() {
    const {
        checkout: {
            identity: e
        },
        shopPay: t,
        observability: s
    } = c(), n = H(), {
        progressContinue: o
    } = W(), r = xe(), a = g(async () => {
        t.session.unstable_setButtonProgressing(!0), s.log("installments_cta_clicked", "[Installments] Continue to purchase button clicked");
        try {
            await o() && r()
        } finally {
            t.session.unstable_setButtonProgressing(!1)
        }
    }, [t.session, s, o, r]);
    return n || e.current.value !== "shopPay" || !t.session.isInstallmentsSelected.value ? null : a
}

function Xe() {
    const {
        observability: e,
        source: t,
        router: s
    } = c(), {
        currentDetour: n,
        currentPage: o
    } = Q().value, {
        nextPage: r,
        previousPage: a
    } = L();
    return I(() => ({
        ensureShopPayURL: () => {
            o || s.navigate("/shoppay", {
                replace: !0
            })
        },
        logError: (i, {
            result: u
        } = {}) => {
            e.error(new pe(i, {
                groupingHash: "ShopPayError::InvalidPageLogger"
            }), {
                severity: "error",
                metadata: {
                    source: {
                        type: t.type
                    },
                    checkout: {
                        token: t.checkoutSessionIdentifier || t.sourceId
                    },
                    event: {
                        currentDetour: JSON.stringify(n),
                        currentPage: JSON.stringify(o),
                        nextPage: JSON.stringify(r),
                        previousPage: JSON.stringify(a),
                        result: JSON.stringify(u)
                    }
                }
            })
        }
    }), [n, o, e, r, a, s, t.checkoutSessionIdentifier, t.sourceId, t.type])
}

function je() {
    const {
        checkout: {
            identity: e
        },
        observability: t,
        shopPay: s
    } = c(), n = H(), {
        nextPage: o
    } = L(), {
        progress: r
    } = z(), {
        progressContinue: a
    } = W(), i = Xe(), u = Z(), l = Ae(), p = D({
        breadcrumbPrefix: E
    }), P = g(async () => {
        if (p()) {
            l();
            try {
                s.session.unstable_setButtonProgressing(!0), await a() ? (t.leaveErrorBreadcrumb(`${E} - progress`), await r("shop-pay-progress-button-press", d => {
                    t.leaveErrorBreadcrumb(`${E} - progression`, {
                        status: d.status,
                        nextPageId: o.id
                    }), o.id !== "thankYou" && i.logError("Shop Pay button triggered progression when next page is not `thankYou`", {
                        result: d
                    })
                }, {
                    onProgressBlocked: () => {
                        t.leaveErrorBreadcrumb(`${E} - progress blocked`, {
                            nextPageId: o.id
                        }), i.ensureShopPayURL()
                    }
                }), u.notify({
                    checkout_in_progress: !0
                })) : (t.leaveErrorBreadcrumb(`${E} - progress continue failed`, {
                    nextPageId: o.id
                }), o.id !== "thankYou" && (i.logError("Shop Pay button is pressed when next page is not `thankYou`"), i.ensureShopPayURL()))
            } finally {
                s.session.unstable_setButtonProgressing(!1)
            }
        }
    }, [p, l, s.session, a, t, r, o, i, u]);
    return e.current.value !== "shopPay" || n ? null : P
}

function Qe() {
    const {
        showApplePay: e
    } = G().value, s = B().applePaySessionHandler.value ? .onClickHandler ? ? null, n = D({
        breadcrumbPrefix: de,
        isApplePay: !0
    }), o = g(() => {
        s ? .({
            validateButtonPress: n
        })
    }, [s, n]);
    return e && s ? o : null
}

function Ot(e) {
    const {
        kind: t
    } = Ne(), s = Qe(), n = je(), o = Ve();
    return t === "applePay" && s ? s : t === "installments" && o ? o : (t === "default" || t === "checkoutProtocol") && n ? n : e
}
const ze = "liLqL",
    Ze = "b71fw",
    Tt = {
        Button: ze,
        Sparkles: Ze
    },
    et = "OJbFq",
    tt = "wNUaA",
    Mt = {
        Button: et,
        "Button-prefersDarkMode": "LhoYl",
        WalletLogoContainer: tt
    },
    nt = "XR3sZ",
    st = "_4fPUS",
    ot = "_5FRe7",
    rt = "ZDqoP",
    at = "zANgR",
    it = "_3A6oJ",
    lt = "K8y4t",
    ut = "_7S3NK",
    ct = "SdyJr",
    Nt = {
        StickyFooter: nt,
        StickyFooterExperiment: st,
        StickyFooterAtBottom: ot,
        StickyFooterBuffer: rt,
        SDKStickyFooterBuffer: at,
        EmbedStickyFooterBuffer: it,
        ButtonContainer: lt,
        SDKButtonContainer: ut,
        EmbedButtonContainer: ct
    },
    pt = "GsMGr",
    dt = "eDhAI",
    ht = "P0xJW",
    yt = "COpTB",
    xt = {
        Wrapper: pt,
        Container: dt,
        Section: ht,
        "Container-fixed": "iRlFp",
        "Container-fixed-entering": "_24aJk",
        "Container-fixed-exiting": "ktbnR",
        "Container-fixed-enter": "PCKgT",
        "Container-fixed-exited": "DvZWz",
        Shadow: yt,
        "Shadow-enter": "_0hDB9",
        "Shadow-exiting": "P1NPi",
        "Shadow-exited": "lQN1j"
    };
export {
    At as D, Rt as H, we as a, Be as b, Mt as c, Nt as d, Bt as e, W as f, xe as g, Ne as h, G as i, qe as j, wt as k, xt as l, Ue as r, Tt as s, Ot as u
};