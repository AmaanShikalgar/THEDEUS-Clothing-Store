import {
    h as K,
    u as v,
    f as pe,
    T as W,
    A as z
} from "./esnext-vendor.BDPAaZdq.js";
import {
    W as ye,
    bF as me,
    bG as c,
    E as _e,
    bH as Pe,
    h as he,
    bI as be,
    bJ as fe,
    bK as ve,
    bL as Ee,
    bM as ge,
    bN as Se,
    bO as Ae,
    bP as Me,
    bQ as Ce
} from "./hydrate.B0xlt2dG.js";
import {
    O as E,
    P as X,
    aY as Ie,
    bF as q,
    k as N,
    bG as Te,
    bH as Re,
    bI as Ve,
    bJ as J,
    aK as Ne,
    bK as Oe,
    aS as Be,
    a6 as Le,
    a5 as Fe,
    bL as De,
    bM as Ye,
    bN as we,
    bO as Ge,
    bP as He,
    bQ as Ue,
    bR as ke,
    Q as Qe,
    bS as xe,
    bT as We,
    bU as Je,
    bV as Ke,
    T as ze,
    ba as Xe,
    bW as qe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    h as je,
    a as Ze,
    u as $e
} from "./hooks-useGeneralPaymentErrorMessage.Zl8_48Ok.js";

function ea({
    bannerId: e,
    errorType: r,
    children: t,
    ...n
}) {
    const {
        observability: i
    } = E(), {
        tone: y,
        ...s
    } = n;
    return K(() => {
        i.log("error_log_banner_error_banner_rendered", "[Displayed Error] Error banner was rendered", {
            bannerId: e
        })
    }, [e, i]), v(ye, {
        errorType: r,
        id: e,
        tone: y,
        ...s,
        children: t
    })
}

function aa() {
    const {
        checkout: e,
        i18n: r,
        shopPay: t
    } = E(), n = X(), {
        value: i
    } = n.paymentMethods, {
        value: y
    } = n.managedByMarketsPro, s = Ne({
        managedByMarketsPro: y
    }), d = pe(() => Ie({
        checkout: e
    })), m = me(), {
        value: g
    } = n.deferredTotal, o = t.session.selectedPaymentMethod.value, S = t.session.paymentMethodOption.value, {
        hasViolations: _
    } = c(q), p = o && N(o) ? Te(o.paymentAttributes.brand) : void 0, A = Re(), P = W(() => {
        if (S ? .name !== "SHOPIFY_INSTALLMENTS") {
            if (A.value || !o || m.value && !g ? .amount.amount) return !0;
            if (N(o)) {
                if (_) return !1;
                const h = i ? .filter(l => l.type === "direct").flatMap(l => l.paymentBrands);
                if (h && h.length > 0) {
                    const l = Ve(o.paymentAttributes);
                    return l ? h.includes(l) : void 0
                }
            }
            return J(o) ? ra(d.value, s, i) : !0
        }
    }, [S ? .name, A.value, o, m.value, g ? .amount.amount, _, i, d.value, s]), I = W(() => {
        if (o && P === !1) {
            if (N(o)) return p ? r.translate("payment.brand_not_available", {
                brand: p
            }) : r.translate("payment.generic_incorrect_card_info");
            if (J(o)) return d.value ? r.translate("payment_errors.payment_method_unavailable_with_subscriptions") : r.translate("payment.shop_pay_ideal_unavailable_error")
        }
    }, [P, o, p, r, d.value]);
    return {
        paymentMethods: i,
        isSelectedPaymentMethodSupported: P,
        notSupportedError: I,
        label: p
    }
}

function ra(e, r, t) {
    return !e && r && t ? .some(n => Oe(n, ["ideal"]))
}

function ta(e) {
    const {
        i18n: r
    } = E();
    if (e && e.code !== "SURVEY_EXITED") return r.translate("hsa_qualification_errors", {
        scope: e.code.toLowerCase()
    })
}

function na() {
    const {
        i18n: e,
        checkout: r,
        embed: t,
        shopPay: n
    } = E(), {
        delegatedPaymentInstrument: i,
        inventoryRecoverySignal: y
    } = Be(), {
        lastJourneyProgression: s
    } = Le(), {
        progressing: d
    } = he(), {
        walletUsedForSubmissionSignal: m,
        inMemoryApplePayParts: {
            asPaymentMethod: g
        },
        receiptErrorSignal: o
    } = Fe(), {
        paymentMethods: S
    } = X(), {
        notSupportedError: _
    } = aa(), {
        hasViolations: p,
        violations: A
    } = c(q), {
        hasViolations: P
    } = c(De), {
        hasViolations: I
    } = c(Ye), {
        hasViolations: h
    } = c(we), {
        hasViolations: l
    } = c(Ge), {
        violations: O
    } = c(He), j = !(s.value.type === "success" || s.value.type === "error" ? s.value.negotiationStage === "completion" : !1) && O.size === 1 && O.values().next().value.code === "PAYMENTS_METHOD", {
        hasViolations: Z
    } = c(Ue), T = be(), {
        hasError: $,
        error: M
    } = fe(ke), {
        hasError: ee,
        error: ae
    } = ve(), {
        hasError: B
    } = Ee(), {
        hasError: re
    } = ge(), L = Se(M ? {
        type: "payment",
        code: M
    } : void 0), F = ta(ae), C = Qe(), te = C.generalPaymentError.value, b = C.generalPaymentErrorCode.value, ne = je(C.directPaymentErrors), D = Ze(C.directPaymentErrors), u = z(!1), oe = Ae(), Y = $e(te, b), w = Y && !xe(b) && !We(b) && !Je(b) && !Ke(b), G = e.translate("order_errors.inventory_reservation_failure"), {
        hasViolations: H
    } = Me(qe), se = !!ze(S.value).length, ie = Xe("billingAddress").value, le = Ce().value, ce = m.value === "APPLE_PAY" || le, ue = M === "INCORRECT_CVC" && n ? .session.selectedPaymentMethod.value ? .paymentMethod === "CREDIT_CARD", R = y.value, U = R != null && R.receiptId === r.latestReceipt.value ? .id, k = s.value.type === "failed" && s.value.negotiationStage === "completion", Q = !!(w || D || T || k), V = U && !R.dismissed && !Q;
    if (d.value) return {
        message: void 0,
        tone: "auto"
    };
    let a, f = "critical";
    if (t && r.configuration.isPaymentInstrumentsDelegationEnabled && i.value && H && !ie && (a = e.translate("payment_errors.payment_method_billing_address")), w && (u.current = !0, f = "warning", a = Y), T && (u.current = !0, a = T), (ne || D && (u.current || B)) && (a = e.translate("payment.generic_incorrect_card_info")), $ && M && L && !u.current && m.value !== "GOOGLE_PAY" && (!ce || g.value) && !o.value && !oe && !ue && (a = L), k && s.value.type === "failed" && (s.value.fetchFailed ? a = e.translate("order_errors.network_failure") : s.value.reason === "decision_rule_block" ? a = e.translate("payment_errors.generic_error") : a = e.translate("order_errors.creation_failure")), re && !u.current && (a = e.translate("order_errors.creation_failure")), B && !Q && (U ? V : !u.current) && (a = G, V && (f = "critical")), ee && F && !u.current && (a = F), Z && (a = e.translate("store_credit_errors.generic_error")), P && (a = e.translate("payment.expired_payment_method")), p) {
        const x = [...A][0] ? .nonLocalizedMessage ? .split(":")[1] ? .toLowerCase().trim();
        x ? a = e.translate("payment.brand_not_available", {
            brand: e.translate("payment_brand", {
                scope: x
            })
        }) : a = e.translate("payment.generic_incorrect_card_info")
    }
    h && (a = e.translate("payment.generic_incorrect_card_info")), l && (a = e.translate("payment_errors.method_not_available")), I && (a = e.translate("payment_errors.generic_error")), j && (a = e.translate("payment_errors.available_methods_updated"), f = "info"), _ && (a = _, f = "critical"), se && H && (a = e.translate("address_management.invalid_billing_address_selected"));
    const de = V && a === G ? r.latestReceipt.value ? .id : void 0;
    return {
        message: a,
        tone: f,
        inventoryRecoveryReceiptId: de
    }
}

function oa({
    message: e,
    tone: r,
    inventoryRecoveryReceiptId: t
}) {
    const {
        observability: n
    } = E(), i = z(!!t).current;
    return K(() => {
        t && n.counter({
            name: "inventory_recovery_error_banner_displayed",
            value: 1
        })
    }, [t, n]), v(sa, {
        identifier: "PaymentErrorBanner",
        tone: r,
        suppressAutoFocus: i,
        children: e
    })
}

function ya() {
    const e = na();
    return e.message ? v(oa, { ...e
    }) : null
}

function sa({
    children: e,
    identifier: r,
    tone: t,
    suppressAutoFocus: n = !1
}) {
    return t === "critical" || t === "warning" ? v(ea, {
        errorType: _e.PaymentError,
        bannerId: r,
        tone: t,
        autoFocus: !n,
        focusable: n,
        children: e
    }) : v(Pe, {
        tone: t,
        children: e
    })
}
export {
    ea as E, ya as P, aa as a, oa as b, sa as c, na as u
};