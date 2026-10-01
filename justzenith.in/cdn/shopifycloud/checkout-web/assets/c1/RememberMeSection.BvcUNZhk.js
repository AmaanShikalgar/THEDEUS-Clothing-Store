const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-RememberMe.CbXMLqez.js", "esnext-vendor.BDPAaZdq.js", "Checkbox.CiixBh9Z.js", "hydrate.B0xlt2dG.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css", "assets/Checkbox.SrYMuQu4.css", "AddressPresenter.B0qw2vWQ.js", "EmailField.BtJiNLVF.js", "PhoneField.ykPh8SPx.js", "FormLayout.CMVyKzjL.js", "amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js", "assets/FormLayout.CrYq3At_.css", "hooks-useSuppressShopPayModalOnLoad.brztd70E.js", "assets/PhoneField.uZEuHncj.css", "ChangeCompanyLocationLink.Ci5U9F_D.js", "BillingAddressForm.aTSlVDrG.js", "Popover.BUTwaoOa.js", "assets/Popover.Bi1nHaU-.css", "Choice.BIzIW4rp.js", "assets/Choice.B7lVAtpz.css", "assets/BillingAddressForm.BdwN7V1K.css", "components-PaymentMethodProgressionHost.BmXVNMRw.js", "graphql-PaymentSessionMutation.BhOnX3QJ.js", "Section._KuAKpGQ.js", "assets/Section.CU18S7Ap.css", "ImpressionEventCapture.iMEQlBKs.js", "components-useVaultedMsiInstallments.Br5peiWP.js", "PaymentIcon.CQXs-ePm.js", "assets/PaymentIcon.gzvCNwz_.css", "PaymentLine.BkPc0Zsc.js", "assets/PaymentLine.BGhbZYQP.css", "EmptyState.b83C9ddY.js", "localization-index.Bo8bPuxq.js", "helpers-credit-card-disabled.BnSr1GsQ.js", "assets/index.CIy8uDiZ.css", "assets/EmptyState.BEvzDDvy.css", "hooks-useUpdateCheckoutAddress.xu8w67CI.js", "helpers-derivations.DLW2fhKL.js", "money-toShopPayMoneyInput.-nuohgDW.js", "redemption-promotions.CgqGtCd-.js", "shop-pay-normalizeBuyerDetails.ThnUnxcv.js", "checkout-updaters-helpers.BAeH3ddd.js", "helpers-setAddressErrors.BA8OjimY.js", "assets/useVaultedMsiInstallments.BcTJoNaV.css", "hooks-useShopPayProgressIntercepts.Sxhi7oHx.js", "assets/useShopPayProgressIntercepts.xO_7ctnq.css", "MissingFields.DB7ri4eR.js", "components-RedirectionNotice.module.BGJWZ6-9.js", "assets/RedirectionNotice.B8v_QGNW.css", "useAddressMutationsWithNegotiation.BfzEjUy6.js", "assets/MissingFields.BbxB_6wt.css", "Rollup.iQVJ47hC.js", "assets/Rollup.DKll7CHa.css", "utilities-publishMessage.BORnEDuA.js", "utilities-stable-ref.Dvd2X3ul.js", "PayButton-helpers.Dg5kgVMm.js", "hooks-useGeneralPaymentErrorMessage.Zl8_48Ok.js", "assets/PaymentMethodProgressionHost.BIxPaYCu.css", "hooks-useShowShopPayOptin.DZ4Mf9YD.js", "assets/RememberMe.Df3s08WT.css"]))) => i.map(i => d[i]);
import {
    f as D,
    A as M,
    q as A,
    h as N,
    u as n,
    k as w,
    i as J,
    e as z,
    T as j,
    g as Z,
    _ as Q,
    S as V,
    d as ee,
    r as ne
} from "./esnext-vendor.BDPAaZdq.js";
import {
    bR as te,
    h as K,
    B as k,
    c$ as ae,
    bk as oe,
    d0 as T,
    d1 as se,
    bH as re,
    d2 as ie,
    c as _,
    H as le,
    P as ce,
    cn as G,
    a3 as de,
    b as ue,
    o as I,
    c4 as C,
    al as v,
    L as pe,
    l as me,
    F as x
} from "./hydrate.B0xlt2dG.js";
import {
    O as m,
    P as q,
    F as he,
    t as ye,
    aS as _e,
    Q as R,
    aV as ge,
    u as be,
    cl as fe,
    bi as ve,
    cy as Pe,
    cz as Se,
    b$ as Ie,
    cA as Ce,
    W as Re,
    bd as Ee,
    bf as Oe,
    c9 as Me,
    bc as Te,
    S as Ae,
    X as ke,
    cB as Le,
    ad as He
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    v as xe
} from "./amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js";
import {
    u as Ne
} from "./ChangeCompanyLocationLink.Ci5U9F_D.js";
import {
    u as we,
    a as Be,
    b as Fe,
    g as De,
    c as ze,
    d as Ve
} from "./components-PaymentMethodProgressionHost.BmXVNMRw.js";
import {
    a as Ke
} from "./money-toShopPayMoneyInput.-nuohgDW.js";
import {
    u as Ge
} from "./hooks-useShowShopPayOptin.DZ4Mf9YD.js";
import {
    _ as qe
} from "./app.D1P6yWfp.js";
import {
    C as B
} from "./Checkbox.CiixBh9Z.js";
import {
    a as Ue,
    b as We
} from "./AddressPresenter.B0qw2vWQ.js";
const F = "shop_pay_approval_id",
    $e = 250,
    Ye = 14;

function Xe(e, a) {
    if (!xe(e)) return "malformed_uuid";
    if (e[Ye] !== "7") return "uuid_v7_required";
    if (!a) return "payment_not_required"
}

function An() {
    const {
        shop: e
    } = m(), {
        paymentMethods: a
    } = q();
    return D(() => e.hasFlagEnabled(he) && ye(a.value))
}

function kn() {
    const {
        observability: e,
        shop: a
    } = m(), {
        checkoutProtocolModalEventSignal: t
    } = _e(), o = R(), s = te(), {
        negotiate: r
    } = K(), i = M(null), l = M(""), d = M(""), c = a.hasFlagEnabled(ge), b = A(() => {
        const u = i.current ? .value.trim() ? ? "";
        if (!u || u === l.current) return;
        const p = Xe(u, s.value);
        if (p) {
            d.current !== u && (d.current = u, e.counter({
                name: "shop_pay_approval_id_field_discarded",
                value: 1,
                attributes: {
                    reason: p
                }
            }), e.histogram({
                name: "shop_pay_approval_id_field_discarded_length",
                value: u.length,
                attributes: {
                    reason: p
                }
            }), e.log("shop_pay_approval_id_field_discarded", "Shop Pay approval id discarded before negotiation", {
                reason: p,
                valueLength: u.length
            }));
            return
        }
        l.current = u, e.counter({
            name: "shop_pay_approval_id_field_applied",
            value: 1,
            attributes: {
                verificationOpen: t.peek() === "shopPayVerification"
            }
        });
        const f = {
            method: {
                type: "shopWallet",
                shopPayApprovalId: u
            }
        };
        o.paymentLines.value = be(o.paymentLines.value, f), o.generalPaymentError.value = void 0, o.generalPaymentErrorCode.value = void 0, r({})
    }, [t, r, e, o, s]);
    return N(() => {
        const u = setInterval(b, $e);
        return () => clearInterval(u)
    }, [b]), n(k, {
        accessibilityVisibility: "exclusive",
        children: n("input", {
            ref: i,
            type: "text",
            tabIndex: -1,
            "aria-hidden": !0,
            id: F,
            name: F,
            autoComplete: "off",
            onInput: c ? b : void 0
        })
    })
}

function Ln({
    localizationExtension: e,
    index: a
}) {
    const t = fe(),
        {
            negotiate: o
        } = K(),
        [s, r] = w(),
        [i, l] = w(),
        d = ve(e.fields.value, t),
        c = e.fields.title.value,
        {
            localizedFieldErrors: b
        } = ae().value,
        u = `$.cart.localizedField.${e.peek().key}`,
        p = `$.localizationExtension[${a}]`,
        f = b.find(({
            target: h
        }) => h === u),
        E = h => {
            const S = h.violations ? .find(H => {
                const {
                    code: g,
                    localizedMessage: W,
                    nonLocalizedMessage: $,
                    target: Y
                } = H, X = W ? ? $;
                if (g === "LOCALIZATION_EXTENSION_FIELD_ERROR" && Y === p) return X
            });
            if (!S) return;
            const {
                localizedMessage: y,
                nonLocalizedMessage: O
            } = S;
            return y ? ? O
        };
    N(() => {
        if (f) {
            t.value = f.message;
            return
        }
        if (i) {
            t.value = i;
            return
        }
        t.value = void 0
    }, [t, f, i, s]);
    const L = () => {
        d.onBlur(), r(void 0), l(void 0), o({
            fieldsToResolve: ["localizationExtensions"],
            include: [],
            onComplete: h => {
                l(E(h)), r("blur")
            }
        })
    };
    return oe(h => {
        l(E(h)), r("submit")
    }), n(T, { ...d,
        label: c,
        name: c,
        onBlur: L,
        value: d.value ? ? void 0
    })
}

function Je() {
    const {
        checkout: e,
        i18n: a,
        shop: t
    } = m(), {
        paymentMethods: o
    } = q(), s = se(), r = Ne(), i = D(() => t.hasFlagEnabled(Pe) && je({
        identity: e.identity
    }) && r.value && s.value && Se(o.value));
    return n(J, {
        when: i,
        children: n(k, {
            paddingBlockStart: "small-200",
            children: n(re, {
                tone: "info",
                children: a.translate("payment.shop_pay_hsa.login_message")
            })
        })
    })
}

function je({
    identity: e
}) {
    return ["guest", "customerAccount"].includes(e.current.value)
}

function Ze() {
    const e = z(!1),
        a = M(null);
    return {
        ref: A(o => {
            if (a.current ? .disconnect(), a.current = null, !o) return;
            const s = () => {
                const i = o.ownerDocument.createRange();
                i.selectNodeContents(o);
                const l = i.getClientRects;
                e.value = typeof l == "function" && Array.from(l.call(i)).filter(({
                    width: d
                }) => d > 0).length > 1
            };
            if (s(), typeof ResizeObserver > "u") return;
            const r = new ResizeObserver(s);
            r.observe(o), a.current = r
        }, [e]),
        isMultiline: e
    }
}

function Qe(e, a, t, o) {
    const s = {
        title: a.translate("payment.title")
    };
    if (!t) return s;
    const [r] = e;
    return r ? .type !== "direct" ? s : {
        title: o ? a.translate("payment.pay_with_debit_card") : a.translate("payment.pay_with_credit_card"),
        creditCardInline: {
            paymentBrands: r.paymentBrands,
            cardNetworkStateKey: Ie(r)
        }
    }
}

function en(e, a) {
    return e.current.value === "shopPay" && a
}

function nn() {
    const {
        i18n: e,
        checkout: a
    } = m(), {
        identity: t
    } = a, {
        displayedPaymentMethods: o
    } = we({
        experienceType: "list"
    }), s = Be(o), r = en(t, a.installments.paymentMethodMustSupportDebitCardOnly.value), i = Fe(), l = Ke(), c = !(De(t, l.value) !== null || i.value.freeOrder || i.value.giftCard || i.value.storeCredit || i.value.redeemables) && s.mode === "singlePaymentMethodCreditCard";
    return j(() => Qe(o, e, c, r), [o, e, c, r])
}
const tn = "zA7WO",
    an = "bIqDC",
    on = "jGvwB",
    sn = "haX3x",
    rn = "_1OE8N",
    P = {
        HeadingRow: tn,
        HeadingTitle: an,
        HeadingTitleText: on,
        HeadingIcons: sn,
        "HeadingIcons-networkSelector": "_5Jkpa",
        "HeadingIcons-multiline": "iq64C",
        HeadingIconsContent: rn
    };

function Hn({
    headingId: e,
    autoFocus: a
}) {
    const {
        i18n: t
    } = m(), s = ie().value ? `${t.translate("payment.billing_must_match_shipping_notice")} ` : "", r = t.translate("payment.card_security_notice"), {
        title: i,
        creditCardInline: l
    } = nn(), {
        ref: d,
        isMultiline: c
    } = Ze();
    return n(_, {
        gap: l ? "small-300" : "small-400",
        children: [n(_, {
            direction: "inline",
            gap: "small-200",
            alignItems: "end",
            className: P.HeadingRow,
            children: [n("div", {
                className: P.HeadingTitle,
                children: n(le, {
                    id: e,
                    level: 1,
                    autoFocus: a,
                    children: n("span", {
                        ref: d,
                        className: P.HeadingTitleText,
                        children: i
                    })
                })
            }), l && n(ln, {
                cardNetworkStateKey: l.cardNetworkStateKey,
                availableBrands: l.paymentBrands,
                headingIsMultiline: c.value
            })]
        }), n(ce, {
            color: "subdued",
            children: s + r
        }), n(Je, {})]
    })
}

function ln({
    cardNetworkStateKey: e,
    availableBrands: a,
    headingIsMultiline: t = !1
}) {
    const {
        checkout: {
            cardNetworkSelection: o
        }
    } = m(), s = o.forMethod(e), r = a.filter(Ce), i = s.networkSelectionEnabled.value && s.selectableBrands.value.length > 1, {
        ref: l,
        overflowIndicatorRef: d,
        maxVisibleBrands: c
    } = ze(r.length);
    return r.length === 0 ? null : n("div", {
        ref: l,
        className: Z(P.HeadingIcons, i && P["HeadingIcons-networkSelector"], t && P["HeadingIcons-multiline"]),
        children: n(_, {
            direction: "inline",
            gap: "none",
            alignItems: "center",
            justifyContent: "end",
            className: P.HeadingIconsContent,
            children: n(Ve, {
                animate: !0,
                availableBrands: a,
                selectableBrands: s.selectableBrands.value,
                activeBrand: s.activeBrand.value,
                savedCardBrand: s.selectedSavedCreditCardBrand.value,
                onSelectBrand: s.setSelectedNetwork,
                networkSelectionEnabled: s.networkSelectionEnabled.value,
                binLength: s.bankIdNumberLength.value,
                viewTransitionKey: e,
                maxVisibleBrands: c.value,
                overflowIndicatorRef: d,
                announceNetworkSelector: !0,
                announceOverflowBrands: !0
            })
        })
    })
}
const cn = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "GF", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"],
    dn = [...cn, "CH", "GB"],
    U = e => dn.includes(e);

function un() {
    const e = Ee.ShopPayRememberMeOptOut,
        a = A(o => {
            o ? Oe(e, o) : Me(e)
        }, [e]),
        t = A(() => Te(e), [e]);
    return {
        storeOptOutPreference: a,
        getOptOutPreference: t
    }
}

function pn() {
    const {
        geolocation: e
    } = G(), {
        router: a,
        shop: t
    } = m(), o = a.currentUrl.value, s = Re(o.searchParams), r = R().shopPayArtifact.value, {
        getOptOutPreference: i
    } = un(), l = z(!0);
    if (Q(() => {
            l.value = !!i()
        }, [i, l]), !(t.shopPayRememberMeAutoOptinEnabled ? ? !0)) return {
        autoOptIn: !1,
        isOptedIn: !1
    };
    const c = !U(e.country.code) && !s && !l.value;
    return {
        autoOptIn: c,
        isOptedIn: c && r ? .optIn !== !1
    }
}

function mn({
    busy: e,
    children: a,
    title: t,
    compact: o
}) {
    return o ? n(de, {
        accessibilityLabel: t,
        children: n(_, {
            gap: "base",
            children: n("div", {
                "aria-busy": e || void 0,
                children: a
            })
        })
    }) : n(V, {
        children: [n("div", {
            "aria-busy": e || void 0,
            "aria-label": t,
            role: "group",
            children: a
        }), n(ue, {
            blockSize: "large-300"
        })]
    })
}

function hn() {
    const {
        geolocation: e
    } = G();
    return U(e.country.code)
}

function yn({
    buyerPhone: e,
    isApplePayWalletSelected: a,
    requiresExplicitConsent: t,
    validatedProposedPhone: o
}) {
    return e ? "standard" : t ? a ? "gdprCheckboxOnly" : o ? "gdprCheckboxWithPhone" : "standaloneGdprPhone" : "noInputRow"
}

function _n(e) {
    const a = R(),
        {
            shop: t
        } = m(),
        s = !t.hasFlagEnabled(Ae) && !!ke(a.paymentLines.value, "APPLE_PAY"),
        r = hn(),
        i = Ue(),
        l = We(e ? ? i.value).value;
    return {
        kind: yn({
            buyerPhone: a.phone.value,
            isApplePayWalletSelected: s,
            requiresExplicitConsent: r,
            validatedProposedPhone: l
        }),
        isApplePayWalletSelected: s,
        requiresExplicitConsent: r,
        validatedProposedPhone: l
    }
}

function gn({
    title: e,
    compact: a
}) {
    const {
        i18n: t,
        shop: {
            name: o
        }
    } = m(), s = R(), {
        shopPayArtifact: r
    } = s, {
        isOptedIn: i
    } = pn(), l = !!r.value ? .optIn || i, d = Le().value ? ? !1, {
        kind: c
    } = _n(), b = t.translate("shop_pay_remember_me.terms"), u = t.translate("shop_pay_remember_me.privacy_policy"), p = {
        terms_href: b,
        privacy_href: u
    }, f = d ? t.translate("shop_pay_remember_me.consent_by_completing_order", p) : t.translate("shop_pay_remember_me.consent_by_paying", p), E = t.translate("shop_pay_remember_me.value_prop_shop_name_verbose", {
        shop_name: o
    }), L = t.translate("shop_pay_remember_me.consent_with_phone", p), h = t.translate("shop_pay_remember_me.consent_with_email", p), S = t.translate("shop_pay_remember_me.consent_with_checkbox_only", p), y = t.translate("shop_pay_remember_me.label"), O = t.translate("shop_pay_remember_me.mobile_phone_optional"), H = t.translate("shop_pay_remember_me.email_label_optional");
    let g;
    return c === "standaloneGdprPhone" ? g = n(_, {
        gap: "base",
        children: [n(I, {
            children: y
        }), n(v, {
            contentDisplay: "block",
            inlineSize: "100%",
            children: n(T, {
                label: O
            })
        }), n(C, {
            content: L,
            size: "small"
        })]
    }) : c === "gdprCheckboxWithPhone" ? g = n(_, {
        gap: "base",
        children: [n(x, {
            gridTemplateColumns: "auto minmax(0, 1fr)",
            gap: "base",
            alignItems: "start",
            children: [n(v, {
                children: n(B, {
                    accessibilityLabel: y
                })
            }), n(I, {
                children: y
            })]
        }), n(v, {
            contentDisplay: "block",
            inlineSize: "100%",
            children: n(T, {
                label: O
            })
        }), n(C, {
            content: S
        })]
    }) : c === "gdprCheckboxOnly" ? g = n(x, {
        gridTemplateColumns: "auto minmax(0, 1fr)",
        gap: "base",
        alignItems: "start",
        children: [n(v, {
            children: n(B, {
                accessibilityLabel: y
            })
        }), n(_, {
            children: [n(I, {
                children: y
            }), n(C, {
                content: S,
                size: "small"
            })]
        })]
    }) : c === "standard" ? g = n(_, {
        gap: "base",
        children: [n(I, {
            children: y
        }), n(v, {
            contentDisplay: "block",
            inlineSize: "100%",
            children: n(T, {
                label: H
            })
        }), n(C, {
            content: h,
            size: "small"
        })]
    }) : g = n(x, {
        gridTemplateColumns: "minmax(0, 1fr) auto",
        gap: "base",
        alignItems: "center",
        children: [n(_, {
            children: [n(I, {
                children: y
            }), n(C, {
                content: l ? f : E,
                size: "small"
            })]
        }), l ? n(k, {
            paddingInlineStart: "small-500",
            children: n(v, {
                contentDisplay: "block",
                children: n(pe, {
                    textDecoration: "none",
                    children: t.translate("shop_pay_remember_me.not_now")
                })
            })
        }) : n(v, {
            contentDisplay: "block",
            children: n(me, {
                variant: "secondary",
                children: t.translate("shop_pay_remember_me.save")
            })
        })]
    }), n(mn, {
        busy: !0,
        title: e,
        compact: a,
        children: g
    })
}
const bn = ee({
    displayName: "RememberMe",
    renderLoading: e => n(gn, { ...e
    }),
    renderError: () => null,
    load: () => ne(() => qe(() =>
        import ("./component-RememberMe.CbXMLqez.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]))).then(({
        RememberMeSurface: e
    }) => e)
});

function xn({
    compact: e
}) {
    const {
        i18n: a
    } = m(), t = He(), o = Ge(), s = R(), r = a.translate("shop_pay_remember_me.title"), i = s.shopPayRememberMeVisible.value ? r : "";
    return N(() => {
        o || (s.shopPayRememberMeVisible.value = !1)
    }, [o, s.shopPayRememberMeVisible]), !t.value || !o ? null : n(V, {
        children: [n(k, {
            accessibilityRole: "status",
            accessibilityVisibility: "exclusive",
            children: i
        }), n(bn, {
            title: r,
            compact: e
        })]
    })
}
export {
    Ln as L, Hn as P, xn as R, kn as S, pn as a, un as b, _n as c, mn as d, An as u
};