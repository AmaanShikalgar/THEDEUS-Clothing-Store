import {
    l as K,
    e as X,
    f as L,
    u as e,
    S as H,
    i as ee,
    k,
    h as w,
    q as v,
    T,
    A as I,
    o as me,
    G as pe,
    g as he,
    D as ge
} from "./esnext-vendor.BDPAaZdq.js";
import {
    dk as te,
    dl as ve,
    d2 as ne,
    dm as se,
    dn as ye,
    c as C,
    H as ae,
    P as x,
    aL as fe,
    aN as be,
    aO as _e,
    o as V,
    dp as Se,
    U as Pe,
    I as Ae,
    B as ie,
    bs as Ie,
    h as Ce,
    bH as Oe,
    b as Me
} from "./hydrate.B0xlt2dG.js";
import {
    j as Le,
    h as we,
    i as Be,
    k as G
} from "./components-PaymentMethodProgressionHost.BmXVNMRw.js";
import {
    O as f,
    P as q,
    Q as Ne,
    cR as Te,
    V as Ee,
    cS as ke,
    aS as De,
    cT as Re,
    aq as Fe,
    cU as xe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    j as Ve,
    D as He
} from "./components-useVaultedMsiInstallments.Br5peiWP.js";
import {
    b as qe
} from "./hooks-useGeneralPaymentErrorMessage.Zl8_48Ok.js";
import {
    a as We,
    C as ze
} from "./localization-index.Bo8bPuxq.js";
import {
    B as Ye
} from "./BillingAddressSelector.5rPdOC_H.js";
import {
    a as Ue,
    b as E,
    C as je
} from "./Choice.BIzIW4rp.js";
import {
    c as Ge,
    d as $e
} from "./components-VatNumberValidationField.mzwVZP7U.js";
import {
    S as $
} from "./ChangeCompanyLocationLink.Ci5U9F_D.js";
import {
    u as Je
} from "./hooks-useUpdateCheckoutAddress.xu8w67CI.js";
import {
    C as Qe
} from "./EmptyState.b83C9ddY.js";
import {
    d as Ze,
    e as Ke
} from "./OnePage.h2sKDhjN.js";
import {
    g as Xe
} from "./helpers-getNormalizedPaymentMethodName.B-mE5wnL.js";
import {
    g as et
} from "./shop-pay-installments-monorail.D0Myc1k_.js";
import {
    S as tt
} from "./checkout-updaters-helpers.BAeH3ddd.js";
import {
    I as nt
} from "./hooks-useStableHostMethodsReferences.DLE4q0sj.js";

function qt({
    selectorShowsTiles: s,
    afterPaymentSelector: t,
    renderVaultingAgreementInline: a
}) {
    const l = qe(),
        o = te(),
        {
            checkout: n,
            i18n: r,
            shopPay: i,
            source: d
        } = f(),
        u = ve(),
        m = ne(),
        c = se(),
        {
            paymentMethods: g
        } = q(),
        p = i.user.creditCards,
        y = K(We().creditCardDisabled),
        h = X(null),
        b = L(() => !(u.value || ye({
            checkout: n,
            source: d
        }) ? .pickupAddress) && !m.value && n.isShippingRequired.value),
        _ = L(() => at({
            identity: n.identity
        }, {
            billingPosition: o,
            vaultedSections: c,
            showBillingAddressInContext: b
        })),
        O = L(() => Ve({
            paymentMethods: g.value
        })),
        M = L(() => st({
            identity: n.identity,
            i18n: r
        }, {
            paymentMethodMustSupportInterestBearingLoans: n.installments.paymentMethodMustSupportInterestBearingLoans.value,
            supportedCountryOptions: n.installments.supportedCountryOptions.value,
            creditCards: p.value,
            creditCardDisabled: y.value
        })),
        B = e(He, {
            blurValidationFieldDenylist: O.value,
            onSetFieldErrors: l,
            children: [e(Le, {
                vaultHandle: h
            }), e(C, {
                gap: "base",
                children: [e(it, {}), e(we, {
                    billingAddressInContext: _.value,
                    vaultHandle: h,
                    selectorShowsTiles: s,
                    afterPaymentSelector: t,
                    renderVaultingAgreementInline: a
                })]
            })]
        });
    return e(ee, {
        when: M,
        fallback: B,
        children: N => e(H, {
            children: [e(C, {
                gap: "small-400",
                children: [e(ae, {
                    level: 2,
                    children: r.translate("credit_card_form.add_debit_card")
                }), e(x, {
                    color: "subdued",
                    children: N
                })]
            }), B]
        })
    })
}

function st({
    identity: s,
    i18n: t
}, {
    paymentMethodMustSupportInterestBearingLoans: a,
    supportedCountryOptions: l,
    creditCards: o,
    creditCardDisabled: n
}) {
    if (s.current.value !== "shopPay" || !a || !o.every(i => n(i))) return null;
    const r = l.map(i => i.label).join(", ");
    return r ? t.translate("installments.installments_debit_cards_supported_countries", {
        countries: r
    }) : t.translate("installments.installments_valid_debit_cards_fallback")
}

function at({
    identity: s
}, {
    billingPosition: t,
    vaultedSections: a,
    showBillingAddressInContext: l
}) {
    switch (s.current.value) {
        case "shopPay":
            return t.value === "inContext" && !a.value.payment;
        case "businessCustomer":
            return !0;
        default:
            return l.value
    }
}

function it() {
    return Be(), null
}
const ot = "billing_address_selector",
    R = "shipping_address",
    J = "custom_billing_address";

function lt({
    renderFormOnly: s = !1
} = {}) {
    const {
        i18n: t
    } = f(), a = fe(), {
        billingAddressOption: l
    } = Ne(), o = be(), n = l.value === "shipping" ? R : J, [r, i] = k([n]), {
        isBilling: d
    } = Ge().value, u = d ? e($e, {}) : null;
    w(() => {
        i([n])
    }, [n]);
    const m = v(p => {
        const y = p[0] === R ? "shipping" : "custom";
        l.value = y, i(p), y === "shipping" && o()
    }, [l, o]);
    _e();
    const c = v(({
            billing: p
        }) => {
            p.value = !0
        }, []),
        g = v(({
            billing: p
        }) => {
            p.value = !1
        }, []);
    return e(ee, {
        when: () => !s && a.value !== "form",
        fallback: e($, {
            onValid: c,
            onInvalid: g,
            children: e(G, {
                children: u
            })
        }),
        children: e(Ue, {
            name: ot,
            values: r,
            onChange: m,
            variant: "block",
            children: [e(E, {
                value: R,
                accessibilityLabel: t.translate("payment.same_billing_address_label"),
                children: e(V, {
                    type: "strong",
                    children: t.translate("payment.same_billing_address_label")
                })
            }), e(E, {
                value: J,
                selectedContent: e($, {
                    onValid: c,
                    onInvalid: g,
                    children: e(G, {
                        children: u
                    })
                }),
                accessibilityLabel: t.translate("payment.different_billing_address_label"),
                children: e(V, {
                    type: "strong",
                    children: t.translate("payment.different_billing_address_label")
                })
            })]
        })
    })
}
const Q = () => {
    const {
        i18n: s,
        checkout: {
            identity: t
        }
    } = f(), a = rt({
        identity: t
    });
    return e(C, {
        accessibilityRole: "group",
        accessibilityLabelledBy: "billingAddress",
        gap: "base",
        children: [e(ae, {
            id: "billingAddress",
            level: 2,
            children: s.translate("payment.billing_address_title")
        }), e(a, {})]
    })
};

function Wt({
    dynamicPaymentExtensions: s = [],
    children: t
}) {
    Se();
    const a = te(),
        l = ne(),
        {
            checkout: o
        } = f(),
        n = se(),
        r = Te({
            checkout: o
        }),
        i = n.value.payment && n.value.billing && !r,
        [d] = Je(),
        u = T(() => Object.values(Ee).some(c => d === c), [d]),
        m = !i && !l.value && !u;
    return e(C, {
        gap: "base",
        children: [a.value === "beforePayment" && m && e(Q, {}), t, a.value === "afterPayment" && !u && e(H, {
            children: [m && e(Q, {}), e(Pe, {
                customizations: s
            })]
        })]
    })
}

function rt({
    identity: s
}) {
    return s.current.value === "businessCustomer" ? Ye : lt
}

function ct() {
    const {
        checkout: {
            identity: s
        },
        shopPay: t
    } = f(), a = ke(), l = q().paymentMethods;
    return L(() => {
        const o = a.value,
            n = t.user.installments.prequalifiedAmount.value,
            r = t.user.installments.credential.value,
            i = l.value ? .find(m => m.type === "wallet" && m.name === "SHOPIFY_INSTALLMENTS"),
            d = s.current.value === "shopPay" && o != null && i != null && o.amount >= Math.max(i.minPrice.amount, 50) && o.currencyCode === i.minPrice.currencyCode,
            u = n != null && o != null && (!i ? .cbtEnabled || n.currencyCode === o.currencyCode) && (r ? .requiresAdditionalInformation && o.amount <= n.amount || !r ? .requiresAdditionalInformation);
        return d && u
    })
}

function dt({
    selectable: s
}) {
    const {
        userEvents: t,
        source: a,
        checkout: l,
        shop: o,
        shopPay: n,
        embed: r
    } = f(), {
        ineligibilityReasons: i
    } = l.installments, {
        isServiceAvailable: d
    } = n.installments, {
        isRejected: u
    } = n.user.installments, {
        isLoading: m
    } = n.session, c = X(null), g = I(!1), p = K(s);

    function y() {
        const h = p.value,
            b = h ? void 0 : JSON.stringify(ut({
                ineligibilityReasons: i.value,
                serviceAvailable: d.value,
                userRejected: u.value
            }));
        t.monorailEvent({
            schemaId: "shopify_pay_payment_page_installments/1.4",
            payload: { ...et(a, l, o, {
                    embedPlatform: r ? .platform,
                    shopAppSurface: n.app.config.surface
                }),
                eventType: tt.OptionImpression,
                success: h,
                errorMessage: b
            }
        })
    }
    return me(() => {
        const h = c.value;
        if (!h || m.value || g.current) return;
        const b = () => {
            g.current = !0, pe(y)
        };
        if (!window.IntersectionObserver) {
            b();
            return
        }
        const _ = new IntersectionObserver(O => {
            O.some(({
                isIntersecting: M
            }) => M) && (_.disconnect(), b())
        }, {
            threshold: 1
        });
        return _.observe(h), () => _.disconnect()
    }), v(h => {
        c.value = h
    }, [c])
}

function ut({
    ineligibilityReasons: s,
    serviceAvailable: t,
    userRejected: a
}) {
    return s.length > 0 ? s : t ? a ? ["user_rejected"] : ["unknown"] : ["installments_unavailable"]
}
const mt = 1e4,
    F = {
        error: "iovation_sandbox_error",
        init: "iovation_sandbox_initialize",
        fingerprint: "iovation_sandbox_fingerprint"
    };

function pt({
    onComplete: s
}) {
    const t = I(null),
        a = I(),
        [l, o] = k(!1),
        {
            environment: {
                services: {
                    shopServer: n
                }
            },
            observability: r
        } = f(),
        i = I(performance.now()),
        d = v(c => {
            s(c), o(!0), a.current = c
        }, [s]),
        u = v(({
            data: c,
            origin: g,
            source: p
        }) => {
            if (g === "null" && p === t.current ? .contentWindow && typeof c.payload == "string" && c.payload !== "") switch (c.action) {
                case F.error:
                    r.leaveErrorBreadcrumb("[Iovation] Fingerprint error", {
                        error: c.payload
                    }), d("");
                    break;
                case F.fingerprint:
                    r.histogram({
                        name: "iovation_fingerprint_load_time",
                        value: performance.now() - i.current
                    }), d(c.payload);
                    break
            }
        }, [d, r]),
        m = v(() => {
            t.current ? .contentWindow && t.current.contentWindow.postMessage({
                action: F.init
            }, "*")
        }, []);
    return w(() => (window.addEventListener("message", u), () => {
        window.removeEventListener("message", u)
    }), [u]), w(() => {
        const c = setTimeout(() => {
            a.current === void 0 && (r.histogram({
                name: "iovation_fingerprint_load_time",
                value: performance.now() - i.current
            }), d(""))
        }, mt);
        return () => clearTimeout(c)
    }, [d, r]), l ? null : e(nt, {
        ref: t,
        id: "iovation_sandbox_iframe",
        sandbox: "allow-scripts",
        src: new URL("/pay/iovation", n.url).href,
        style: {
            display: "none"
        },
        onLoad: m
    })
}

function ht(s) {
    const t = I(null),
        a = I(!1);
    return w(() => {
        if (a.current) return;
        if (!window.IntersectionObserver) {
            a.current = !0, s();
            return
        }
        const l = new IntersectionObserver(n => {
                const r = n.some(({
                    isIntersecting: i
                }) => i);
                o && r && (a.current = !0, l.unobserve(o), s())
            }, {
                threshold: 1
            }),
            o = t.current;
        return o && l.observe(o), () => {
            o && l.unobserve(o)
        }
    }, [s]), t
}
const gt = "Pdl91",
    vt = "n7rut",
    yt = "_4PVkL",
    ft = "a3kZU",
    bt = "F1g68",
    _t = "Wkh24",
    A = {
        Wrapper: gt,
        Active: vt,
        NoAnimation: yt,
        Badge: ft,
        Icon: bt,
        Label: _t
    };

function St() {
    const {
        prequalifiedAnimatedBadgeShowCounter: s
    } = De(), [t, a] = k(!1), {
        i18n: l
    } = f(), o = l.translate("installments.installments_prequalified_status_badge"), n = ht(v(() => {
        a(!0), s.value += 1
    }, [s]));
    return e("div", {
        className: he(A.Wrapper, {
            [A.Active]: t
        }, {
            [A.NoAnimation]: s.value > 1
        }),
        ref: n,
        children: e("span", {
            className: A.Badge,
            children: [e("span", {
                className: A.Icon,
                children: e(Ae, {
                    type: "check-circle",
                    size: "fill"
                })
            }), e("span", {
                className: A.Label,
                children: o
            })]
        })
    })
}
const Z = ge(function({
    title: t,
    subtitle: a,
    disabled: l,
    badge: o
}, n) {
    const r = e(x, {
            color: l ? "subdued" : void 0,
            children: e(V, {
                type: "strong",
                children: t
            })
        }),
        i = e(x, {
            children: a
        });
    return o ? e(C, {
        ref: n,
        gap: "small-100",
        children: [e(C, {
            direction: "inline",
            gap: "base",
            children: [r, e(St, {})]
        }), i]
    }) : e(ie, {
        ref: n,
        children: [r, i]
    })
});

function zt({
    ineligibilityReason: s
}) {
    const {
        observability: t,
        userEvents: a,
        i18n: l,
        source: o,
        checkout: n,
        shop: r,
        shopPay: i
    } = f(), [d, u] = k(!1), m = Ie(), {
        recordRetailEvent: c
    } = Ze(), {
        negotiate: g
    } = Ce(), {
        paymentMethods: p
    } = q(), y = Xe(i), h = ct(), b = Ke(), {
        payNowLabel: _,
        payNowSubtitle: O,
        installmentsLabel: M,
        installmentsSubtitle: B
    } = b.value, N = i.user.installments.prequalifiedAmount.value, W = i.installments.isServiceAvailable.value, D = i.session.paymentMethodOption.value, oe = T(() => D ? [D.name] : [], [D]), z = i.user.installments.isRetryable.value, Y = n.installments.isUnavailable.value, S = T(() => !W || Y && !z, [W, Y, z]), le = dt({
        selectable: !S
    }), re = T(() => {
        if (h.value && N && !S) return "prequalified"
    }, [h.value, S, N]), U = v(async () => {
        d || (u(!0), await g({
            force: !1,
            fieldsToResolve: ["taxes", "paymentMethods"],
            include: ["paymentLines"],
            customizeNegotiation: P => (P.payment ? .paymentLines.push({
                amount: {
                    any: !0
                },
                paymentMethod: {
                    walletPaymentMethodConfig: {
                        name: "SHOPIFY_INSTALLMENTS"
                    }
                }
            }), P)
        }))
    }, [g, d]);
    w(() => {
        y === "SHOPIFY_INSTALLMENTS" && U()
    }, [U, y]);
    const ce = v(([P = "SHOPIFY_INSTALLMENTS"]) => {
        const de = Re(p.value) ? .availableLoanTypes,
            {
                action: j,
                method: ue
            } = Pt({
                paymentMethodName: P,
                availableLoanTypes: de
            });
        i.session.unstable_updatePaymentMethodOption(ue), m.value && c(j), P === "SHOPIFY_INSTALLMENTS" && t.log("payment_method_selected", "[Installments] Payment method selected", {
            paymentMethodName: P
        }), a.monorailEvent({
            schemaId: "shopify_pay_payment_page_ui_interaction/1.2",
            payload: { ...Fe(o, n, r),
                action: j
            }
        })
    }, [p, i.session, m, t, a, o, n, r, c]);
    return e(H, {
        children: [S && e(ie, {
            children: [e(Oe, {
                heading: l.translate("payment_ux.payment.payment_option.installments_unavailable"),
                tone: "info",
                children: s || l.translate("payment.payment_option.installments_temporarily_unavailable")
            }), e(Me, {
                blockSize: "base"
            })]
        }), e(ze.Provider, {
            value: !0,
            children: e(je, {
                presentation: "base",
                children: e(Qe, {
                    name: "payment_method_options",
                    title: l.translate("payment.payment_option.accessibility_label"),
                    titleHidden: !0,
                    onChange: ce,
                    values: oe,
                    children: [e(E, {
                        value: "SHOP_PAY",
                        children: e(Z, {
                            title: _,
                            subtitle: O
                        })
                    }), e(E, {
                        value: "SHOPIFY_INSTALLMENTS",
                        disabled: S,
                        children: [!S && e(pt, {
                            onComplete: i.setDeviceFingerprint
                        }), e(Z, {
                            ref: le,
                            title: M,
                            subtitle: B,
                            disabled: S,
                            badge: re
                        })]
                    })]
                })
            })
        })]
    })
}

function Pt({
    paymentMethodName: s,
    availableLoanTypes: t
}) {
    if (s === "SHOP_PAY") return {
        action: "payment_method_pay_now",
        method: {
            type: "wallet",
            name: "SHOP_PAY"
        }
    };
    const a = {
        type: "wallet",
        name: "SHOPIFY_INSTALLMENTS"
    };
    return xe(t) ? {
        action: "payment_method_interest_bearing_installments",
        method: a
    } : {
        action: "payment_method_installments",
        method: a
    }
}
export {
    qt as P, Wt as W, zt as a, rt as g
};