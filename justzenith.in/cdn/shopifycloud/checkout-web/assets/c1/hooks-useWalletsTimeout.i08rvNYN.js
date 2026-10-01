const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-PayPalButton.9W4kuaKu.js", "esnext-vendor.BDPAaZdq.js", "hydrate.B0xlt2dG.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css", "PaymentButtons.bhaFVFMx.js", "hooks-useHasOrdersFromMultipleShops.C_XGQrjx.js", "assets/useHasOrdersFromMultipleShops.B_iZlQze.css", "PayButton-helpers.Dg5kgVMm.js", "graphql-PaymentSessionMutation.BhOnX3QJ.js", "hooks-useWalletsMonorailTrack.CvfUTPBc.js", "assets/PaymentButtons.CKE1iCma.css", "cross-border-hooks.DVubeg9N.js", "hooks-useWalletsThreePageVaultedReviewEscalation.6IWrIMNS.js", "hooks-usePostPurchase.BPY08f0g.js", "hooks-useStableHostMethodsReferences.DLE4q0sj.js", "amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js", "WalletsSandbox-WalletSandbox.Dp4t7VmS.js", "assets/WalletSandbox.BoV0vp4z.css", "assets/PayPalButton.jBvXiHEe.css"]))) => i.map(i => d[i]);
import {
    _ as U
} from "./app.D1P6yWfp.js";
import {
    e as X,
    u as s,
    T as j,
    d as G,
    r as Q,
    f as i,
    l as P,
    i as m,
    S as h,
    A as y,
    o as $,
    G as z,
    h as E
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aL as K,
    O as u,
    a5 as v,
    Q as b,
    X as k,
    x as J,
    Y as x,
    aY as Z,
    ch as ee,
    bv as ne
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    cf as N,
    cg as _,
    cc as te,
    bQ as ae,
    h as se,
    A as I,
    ch as oe,
    y as re,
    ca as B,
    Q as f,
    ci as D,
    a3 as le,
    B as g,
    P as O,
    o as S,
    a as ie,
    aa as ue,
    K as ce,
    L as R,
    cj as pe,
    C as de,
    O as Pe,
    ck as me
} from "./hydrate.B0xlt2dG.js";
import {
    a as ye
} from "./hooks-usePostPurchase.BPY08f0g.js";

function _e({
    id: e,
    children: n
}) {
    const t = X(!1);
    return s(N.Provider, {
        value: j(() => ({
            id: e,
            completeStatusSignal: t
        }), [e, t]),
        children: [n, s(he, {})]
    })
}

function he() {
    const e = K(N),
        n = e.completeStatusSignal.value;
    return ye(e.id, !n), null
}
const ve = G({
    displayName: "PayPalButtonComponent",
    load: () => Q(() => U(() =>
        import ("./component-PayPalButton.9W4kuaKu.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25])))
});

function Ye(e) {
    const n = e.fundingSource === "venmo" ? "Venmo" : "PayPal";
    return s(_e, {
        id: n,
        children: s(ve, { ...e
        })
    })
}
const T = "subscription-policy";

function be() {
    const {
        checkout: e
    } = u(), {
        persistedApplePaySignal: n
    } = v(), t = _("PAYMENTS_APPLE_PAY_SESSION_EXPIRED"), a = te();
    return i(() => {
        if (!a.value) return !1;
        const o = e.latestReceipt.value,
            r = o ? .status === "failed" && n.value ? .receiptIdForPaymentFailure === o ? .id;
        return t.value || r
    })
}

function W() {
    const {
        sessionLoadFailed: e
    } = v().inMemoryApplePayParts, {
        paymentLines: n
    } = b(), t = ae(), a = be(), {
        progressing: o
    } = se();
    return i(() => e.value || !k(n.value, "APPLE_PAY") || o.value ? !1 : !t.value || a.value)
}

function fe() {
    const {
        embed: e,
        mobileCheckoutSdk: n
    } = u(), t = n.enabled && n.variant.isPartner(), a = n.enabled && n.variant.isStandard();
    return !!(e ? .isEmbeddedCheckout() || t || a)
}

function ge() {
    const {
        paymentLines: e
    } = b(), n = _("PAYMENTS_PAYPAL_OVER_CAPTURE_DETECTED");
    return i(() => {
        const t = e.value,
            a = k(t, "PAYPAL_EXPRESS"),
            o = !!(a && !J(a));
        return n.value && !!a && !o
    })
}

function Ae() {
    const {
        persistedPayPalSignal: e
    } = v(), n = I(), t = oe(), a = ge(), o = _("PAYMENTS_PAYPAL_TOKEN_EXPIRED"), r = _("PAYMENTS_PAYPAL_CURRENCY_CHANGED");
    return i(() => {
        const c = e.value ? .newTokenRequiredDueToError;
        return !!n.value && !t.value && (c || o.value || r.value || a.value)
    })
}

function Se() {
    const {
        inMemoryPayPalParts: {
            isApproving: e
        }
    } = v(), n = re({
        isPayWithPayPalButton: !0
    }), t = B(), a = Ae();
    return i(() => n.value.status === "error" || e.value ? !1 : t.value || a.value)
}

function w() {
    const {
        checkout: {
            identity: e,
            wallets: n
        }
    } = u(), t = W(), a = Se(), {
        nextPage: o
    } = f(), r = P(o.id);
    return i(() => e.current.value === "shopPay" || n.escalatedWallet.value || r.value !== "review" ? !1 : a.value || t.value)
}

function Y() {
    const {
        checkout: {
            identity: e
        }
    } = u(), n = D(), t = w();
    return i(() => x(e.current.value) && n.value && !t.value)
}

function we() {
    const {
        checkout: e
    } = u(), {
        isOnePage: n
    } = e.configuration.layout, t = P(fe()), a = W(), o = w();
    return i(() => n.value && (t.value || a.value && !o.value))
}

function Ce() {
    const {
        nextPage: e
    } = f(), n = P(e.id), t = Y(), a = we();
    return i(() => n.value !== "review" || t.value || a.value)
}

function qe() {
    const {
        checkout: {
            identity: e
        }
    } = u(), n = D(), {
        nextPage: t
    } = f(), a = P(t.id), o = w();
    return i(() => x(e.current.value) && !o.value || n.value && a.value === "thankYou")
}

function Le() {
    const {
        i18n: e
    } = u(), {
        nextPage: n
    } = f(), t = P(n.label), a = Y();
    return i(() => a.value ? e.translate("general.pay_now_button_label") : t.value)
}
const Ee = Pe("PurchaseOptionsAgreementModal");

function Re({
    isForExpressCheckout: e = !1,
    showFullSubscriptionConsent: n,
    placement: t,
    wrapInSection: a = !1
}) {
    const {
        checkout: o
    } = u(), r = P(t), c = i(() => Z({
        checkout: o
    })), d = Ce(), l = i(() => r.value === "above-pay-button" ? c.value && d.value : !(r.value === "default" && c.value)), L = i(() => r.value === "above-pay-button" && l.value);
    return s(h, {
        children: [!e && s(Te, {
            shown: L
        }), s(m, {
            when: l,
            children: () => {
                if (e) return s(m, {
                    when: () => n ? .value ? ? !1,
                    fallback: s(V, {}),
                    children: s(H, {})
                });
                const p = s(g, {
                    id: "purchase_options_agreement",
                    padding: "none",
                    children: s(m, {
                        when: c,
                        fallback: s(F, {}),
                        children: s(M, {})
                    })
                });
                return a ? s(le, {
                    children: p
                }) : p
            }
        })]
    })
}

function Te({
    shown: e
}) {
    return xe(e), null
}

function q() {
    const {
        i18n: e
    } = u(), n = B(), t = I(), a = Le();
    return i(() => {
        if (!n.value) return a.value;
        const o = de(t) ? e.translate("brand.venmo") : e.translate("brand.paypal");
        return e.translate("wallets.call_to_action", {
            walletName: o
        })
    })
}

function ke() {
    const {
        i18n: e
    } = u(), {
        useStoreCreditForSubscriptionRenewals: n
    } = b(), t = q();
    return i(() => {
        const a = {
                button_label: t.value,
                consent_text: e.translate("payment.purchase_options_subscription_consent_text"),
                cancellation_instructions: e.translate("payment.purchase_options_subscription_cancellation_instructions", {
                    cancel_text: e.translate("payment.purchase_options_subscription_cancel_text"),
                    cancellation_policy_label: e.translate("payment.purchase_options_cancellation_policy_label")
                })
            },
            o = e.translate("payment.purchase_options_subscription_agreement_label", a);
        return n.value ? `${o} ${e.translate("payment.purchase_options_subscription_store_credit_agreement_label")}` : o
    })
}

function xe(e) {
    const n = ke(),
        t = y(e.peek());
    $(() => {
        const a = e.value;
        if (a !== t.current && (t.current = a, !!a)) return ie({
            content: z(() => n.value),
            role: "status"
        })
    })
}

function Ne({
    i18n: e,
    cancellationPolicyLink: n
}) {
    return {
        consent_text: s("strong", {
            children: e.translate("payment.purchase_options_subscription_consent_text")
        }),
        cancellation_instructions: s(h, {
            children: e.translate("payment.purchase_options_subscription_cancellation_instructions", {
                cancel_text: s("strong", {
                    children: e.translate("payment.purchase_options_subscription_cancel_text")
                }),
                cancellation_policy_label: n ? ? s(A, {
                    tone: "monochrome"
                })
            })
        })
    }
}

function C({
    buttonLabel: e,
    cancellationPolicyLink: n
}) {
    const {
        i18n: t
    } = u(), {
        useStoreCreditForSubscriptionRenewals: a
    } = b(), o = Ne({
        i18n: t,
        cancellationPolicyLink: n
    }), r = e === void 0 ? t.translate("payment.purchase_options_subscription_agreement_label_wallets", o) : t.translate("payment.purchase_options_subscription_agreement_label", {
        button_label: e,
        ...o
    });
    return s(h, {
        children: [s(ue, {
            children: r
        }), s(m, {
            when: a,
            children: [" ", t.translate("payment.purchase_options_subscription_store_credit_agreement_label")]
        })]
    })
}

function M() {
    const e = q();
    return s(g, {
        padding: "none",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: s(O, {
            children: s(C, {
                buttonLabel: e.value
            })
        })
    })
}

function F() {
    const {
        i18n: e
    } = u();
    return s(S, {
        color: "subdued",
        children: e.translate("payment.purchase_options_agreement_label", {
            cancellation_policy_label: s(A, {})
        })
    })
}

function V() {
    const {
        i18n: e
    } = u();
    return s(g, {
        id: "purchase_options_agreement",
        padding: "small-100 none none none",
        children: s(S, {
            color: "subdued",
            type: "small",
            children: e.translate("payment.purchase_options_agreement_label_wallets", {
                cancellation_policy_label: s(A, {})
            })
        })
    })
}

function H() {
    return s(g, {
        id: "purchase_options_agreement",
        padding: "large-100 none none none",
        children: s(O, {
            children: s(C, {})
        })
    })
}

function A({
    tone: e
}) {
    const {
        embed: n,
        i18n: t,
        shop: {
            merchantPolicies: a
        }
    } = u(), o = s(S, {
        children: t.translate("payment.purchase_options_cancellation_policy_label")
    }), r = ce(void 0, Ee), {
        localPolicies: c
    } = ee(), d = a.some(l => l.handle === T) ? c.find(l => l.handle === T) : void 0;
    return d ? d.url && ne(n ? .embedder) ? s(R, {
        tone: e,
        "aria-haspopup": "dialog",
        onClick: () => {
            n ? .client ? .windowOpenRequest(d.url)
        },
        children: o
    }) : s(h, {
        children: [s(R, {
            tone: e,
            commandFor: r,
            children: o
        }), s(pe, {
            id: r,
            defaultPolicy: { ...d,
                name: t.translate("shop_policies.purchase_options_cancellation_policy")
            }
        })]
    }) : o
}
Re.displayName = "PurchaseOptionsAgreement";
C.displayName = "SubscriptionAgreementContent";
M.displayName = "SubscriptionAgreement";
F.displayName = "DefaultAgreement";
V.displayName = "ExpressCheckoutAgreement";
H.displayName = "ExpressCheckoutSubscriptionAgreement";
A.displayName = "CancellationPolicyLink";

function Me(e, n = me()) {
    const t = y(null),
        a = y(new Set),
        {
            observability: o
        } = u(),
        r = y(e);
    r.current = e, E(() => {
        if (!e) return;
        const c = new Set(e.map(({
            walletName: l
        }) => l));
        a.current.forEach(l => {
            c.has(l) || a.current.delete(l)
        });
        const d = e.some(({
            walletName: l
        }) => !a.current.has(l));
        t.current || !d || (t.current = setTimeout(() => {
            t.current = null;
            const l = r.current;
            if (!l) return;
            l.filter(p => p.isLoading() && !a.current.has(p.walletName)).forEach(p => {
                a.current.add(p.walletName), o.counter({
                    name: "wallet_button_render_timeout",
                    value: 1,
                    attributes: {
                        wallet: p.walletName
                    }
                }), p.onTimeout()
            })
        }, n))
    }, [o, e, n]), E(() => () => {
        t.current && (clearTimeout(t.current), t.current = null)
    }, [])
}
export {
    Re as P, T as S, _e as a, C as b, Se as c, w as d, fe as e, Y as f, Me as g, Ye as h, qe as i, ge as j, W as u
};