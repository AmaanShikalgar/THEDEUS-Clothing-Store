import {
    u as a,
    S as F
} from "./esnext-vendor.BDPAaZdq.js";
import {
    P as o
} from "./PaymentIcon.CQXs-ePm.js";
import {
    ca as D,
    cb as O,
    o as k,
    c as U,
    A as V,
    C as E,
    cc as x
} from "./hydrate.B0xlt2dG.js";
import {
    O as _,
    P as W,
    cf as w,
    V as f,
    ab as z,
    a5 as H,
    _ as R,
    cg as G
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const K = "lf3MA",
    Y = {
        Mask: K
    },
    $ = "····";

function X() {
    return a("span", {
        "aria-hidden": "true",
        className: Y.Mask,
        children: $
    })
}
const q = "genericbank",
    ne = "100",
    se = ["bankofamerica", "chase", "bmo"],
    T = {
        BMO: "bmo",
        "BMO Alto": "bmo",
        Chase: "chase",
        Citibank: "citi",
        "Citi PAY": "citi",
        "CitiBusiness PremierPass MasterCard": "citi",
        "Phillips 66 College MasterCard (Citibank)": "citi",
        "Citi Personal Wealth Management": "citi",
        "The Home Depot Commercial Revolving Charge Card": "citi",
        "The Citizens Bank Company": "citizens",
        "First Citizens Bank": "firstcitizens",
        "First Citizens Bank - Commercial Advantage": "firstcitizens",
        "First Citizens' Federal Credit Union": "firstcitizens",
        "CIT Bank (Mutual of Omaha Bank)": "firstcitizens",
        "Goldman Sachs - Transaction Banking": "goldmansachs",
        "Goldman Sachs - ADP 401k Program & Plan Plus": "goldmansachs",
        "Goldman Sachs Private Wealth Management": "goldmansachs",
        "Alight - Goldman Sachs": "goldmansachs",
        "PNC Bank": "pnc",
        "PNC Private Bank": "pnc",
        "PNC Small Business - Account View": "pnc",
        "PNC Bank - I-Link": "pnc",
        "PNC Bank - Health Savings Account": "pnc",
        "PNC Bank Small Business": "pnc",
        "PNC Bank - Benefit Plus": "pnc",
        "PNC Bank - Business Credit Card": "pnc",
        "State Street Bank": "statestreet",
        "State Street Global Advisor": "statestreet",
        "TD Bank": "td",
        "TD Bank Business Direct": "td",
        "TD Card Services": "td",
        "Truist - One View": "truist",
        "Truist Investment Services - Investor": "truist",
        "Truist - Commercial": "truist",
        "Truist - PortfolioView": "truist",
        "Truist Bank - Enterprise Spend Platform": "truist",
        "US Bank Quicken World Mastercard": "usbank",
        "Alight - US Bank": "usbank",
        "US Bank": "usbank",
        "US Bank SinglePoint": "usbank",
        "U.S. Bank Account Abilities": "usbank",
        "US Bank Pivot": "usbank",
        "USAA Bank": "usaa",
        "Wells Fargo Vantage": "wellsfargo",
        "Wells Fargo (Tax)": "wellsfargo",
        "Wells Fargo - Commercial Electronic Office": "wellsfargo",
        "Wells Fargo": "wellsfargo",
        "BNY Mellon - NEXEN": "bny",
        "Longleaf Partners Fund": "bny",
        "Menards - CapitalOne": "capitalone",
        "Cabela's Club CC by Capital One": "capitalone",
        "Dress Barn Credit Card": "capitalone",
        "Capital One": "capitalone",
        "Menards Business Solutions - SmartView": "capitalone",
        "Capital One - Commercial Card Platform": "capitalone",
        "BJ's Capital One Credit Card": "capitalone",
        "Walmart - Capital One": "capitalone",
        "Menards - SmartView": "capitalone",
        "Neiman Marcus Capital One Credit Card": "capitalone",
        "Charles Schwab": "charlesschwab",
        "Charles Schwab Advisor Services": "charlesschwab",
        "Charles Schwab Equity Account Center": "charlesschwab",
        "Charles Schwab - Learning Quest 529 Plan (Aggregator Login)": "charlesschwab",
        "Charles Schwab 529 Plan": "charlesschwab",
        "Charles Schwab Retirement": "charlesschwab",
        "HSBC Mortgage (USA)": "hsbc",
        "HSBC Loan (USA)": "hsbc",
        "HSBC Corporate Account": "hsbc",
        "HSBC Commercial": "hsbc",
        "HSBC Business": "hsbc",
        "HSBC Mortgage Services": "hsbc",
        "HSBC Expat - Internet Banking": "hsbc",
        "HSBC Personal (US)": "hsbc"
    },
    Q = e => T[e] ? T[e] : "genericbank";

function ie({
    paymentLine: e,
    showAmount: c = !1,
    showCardBrandLabel: n = !1
}) {
    const {
        i18n: s,
        observability: h,
        router: y
    } = _(), B = y.currentUrl.value, u = D(), d = W(), {
        value: g
    } = d.paymentMethods, M = O(), {
        value: I
    } = d.paymentFlexibilityPaymentTermsTemplate, b = c && e.cost ? s.formatCurrency(e.cost.amount, {
        form: "short",
        currency: e.cost.currencyCode
    }) : void 0, m = J(I, M.value), A = (t, i) => n ? a(j, {
        brandLabel: w(t) ? G(t) : null,
        lastDigits: i
    }) : s.translate("payment.ends_with_label", {
        last_digits: i
    });
    switch (e ? .method ? .type) {
        case "giftCard":
            return a(l, {
                label: s.translate("order_summary.gift_card_label"),
                icon: a(o, {
                    type: "gift-card"
                }),
                amount: b,
                details: s.translate("payment.ends_with_label", {
                    last_digits: e.method.code.slice(-4).toUpperCase()
                })
            });
        case "redeemable":
            return e.method.redemptionSource === "STORE_CREDIT" ? a(l, {
                label: s.translate("payment.store_credit.label"),
                icon: a(o, {
                    type: "store-credit"
                }),
                details: s.translate("payment.store_credit.label"),
                amount: b
            }) : null;
        case f.CreditCard:
            {
                const t = g ? .find(p => p.type === f.CreditCard && e.method.type === f.CreditCard && p.token === e.method.token),
                    i = t ? .brand || "generic",
                    r = t ? A(t.brand, t.displayLastDigits) : void 0,
                    C = n && w(i) && !!r ? void 0 : i,
                    P = n && r ? "hidden" : void 0;
                return m ? a(l, {
                    label: C,
                    icon: a(o, {
                        type: i,
                        accessibilityVisibility: P
                    }),
                    details: [r, r ? " · " : null, m],
                    amount: b
                }) : a(l, {
                    label: C,
                    icon: a(o, {
                        type: i,
                        accessibilityVisibility: P
                    }),
                    details: r,
                    amount: b
                })
            }
        case f.PayPal:
            {
                const t = g ? .find(r => r.type === f.PayPal && e.method.type === f.PayPal && r.token === e.method.token) ? .paypalAccountEmail,
                    i = s.translate("brand.paypal") + (t ? ` · ${t}` : "");
                return a(l, {
                    label: i,
                    icon: a(o, {
                        type: "paypal"
                    }),
                    details: i,
                    amount: b
                })
            }
        case "direct":
            {
                if (u.value) {
                    const S = s.translate("brand.paypal");
                    return a(l, {
                        label: S,
                        icon: a(o, {
                            type: "paypal"
                        }),
                        details: S,
                        amount: b
                    })
                }
                const t = e.method.brand ? ? "generic",
                    i = e.method.creditCardLastFourDigits,
                    r = i ? A(t, i) : void 0,
                    v = r ? [r, m ? " · " : null, m] : m,
                    C = typeof e.method.brand > "u" && typeof e.method.creditCardLastFourDigits > "u",
                    P = B.normalizedPath === "/review";
                if (C && P) {
                    const S = {
                        paymentLine: {
                            type: e.method.type,
                            brand: t,
                            selectedNetwork: e.method.selectedNetwork,
                            acceptedSubscriptionTerms: e.method.acceptedSubscriptionTerms,
                            vaultingAgreement: e.method.vaultingAgreement,
                            cardSource: e.method.cardSource,
                            alternative: e.method.alternative
                        }
                    };
                    h.log("payment_line_generic_brand_information_rendered", "Rendering payment line with generic brand information on the review page", S), h.leaveErrorBreadcrumb("Payment line with generic brand information was rendered on the review page. This indicates that vaulting did not work as expected", S)
                }
                const p = n && w(t) && !!r;
                return a(l, {
                    label: p ? void 0 : t,
                    icon: a(o, {
                        type: t,
                        accessibilityVisibility: n && r ? "hidden" : void 0
                    }),
                    details: v || s.translate("payment_gateway.credit_card_label"),
                    amount: b
                })
            }
        case "wallet":
            return a(N, {
                name: e.method.name,
                walletContent: e.method.walletContent
            });
        case "walletsPlatformPaymentMethod":
            return a(N, {
                name: e.method.name
            });
        case "offsite":
        case "customOnsite":
            return a(l, {
                label: e.method.name,
                icon: a(o, {
                    type: e.method.paymentBrands ? .length === 1 ? e.method.paymentBrands[0] : "generic"
                }),
                details: [e.method.name, m ? " · " : null, m]
            });
        case "paymentOnDelivery":
            return a(l, {
                label: s.translate("payment_gateway.cash_on_delivery_label")
            });
        case "manualPayment":
        case "customManualPayment":
            return a(l, {
                label: e.method.name
            });
        case "deferred":
            {
                const t = g ? .find(i => i.type === "deferred");
                return a(l, {
                    details: [t ? .displayName ? ? s.translate("payment_gateway.deferred_payment_label"), m ? " · " : null, m]
                })
            }
        case "local":
            {
                const {
                    name: t
                } = e.method;
                return a(l, {
                    label: t,
                    icon: a(o, {
                        type: t
                    })
                })
            }
        case "bank":
            {
                const t = g ? .find(p => p.type === "bank" && e.method.type === "bank" && p.paymentMethodIdentifier === e.method.paymentMethodIdentifier),
                    {
                        selectedToken: i
                    } = e.method,
                    r = i ? t ? .availableInstruments.find(p => p.shopifyPublicToken === i) : void 0,
                    v = t ? .displayName ? ? s.translate("payment.bank_payment_method_label"),
                    C = r ? .bankName ? Q(r.bankName) : q,
                    P = r ? .lastDigits ? s.translate("payment.ends_with_label", {
                        last_digits: r.lastDigits
                    }) : void 0;
                return a(l, {
                    label: v,
                    icon: a(o, {
                        type: C
                    }),
                    details: P,
                    amount: b
                })
            }
        default:
            return null
    }
}

function J(e, c) {
    if (e && !c && e.type !== "FIXED") return a(k, {
        type: "strong",
        children: e.translatedName
    }, "paymentTerms")
}

function j({
    brandLabel: e,
    lastDigits: c
}) {
    const {
        i18n: n
    } = _(), s = n.translate("payment.ends_with_label", {
        last_digits: c
    });
    return a(F, {
        children: [a(k, {
            accessibilityVisibility: "hidden",
            children: a("bdi", {
                children: [e, a(X, {}), c]
            })
        }), a(k, {
            accessibilityVisibility: "exclusive",
            children: e ? `${e} ${s}` : s
        })]
    })
}

function l({
    icon: e,
    label: c,
    details: n,
    amount: s,
    spacing: h = "base"
}) {
    const y = () => c ? a(k, {
        accessibilityVisibility: e ? "exclusive" : void 0,
        children: c
    }) : null;
    return a(U, {
        direction: "inline",
        alignItems: "center",
        gap: z(h),
        children: [y(), n && a(k, {
            children: n
        }), e, s && a(k, {
            type: "strong",
            children: s
        })]
    })
}

function Z(e) {
    const {
        cardNetworkBrand: c,
        lastDigits: n
    } = e ? ? {};
    return c && n ? `${c} •••• ${n}` : void 0
}

function N({
    name: e,
    walletContent: c
}) {
    const {
        i18n: n
    } = _(), {
        persistedGooglePaySignal: s
    } = H(), h = V(), y = E(h), B = x();
    switch (e) {
        case "PAYPAL_EXPRESS":
            {
                const u = y ? n.translate("brand.venmo") : n.translate("brand.paypal");
                return a(l, {
                    label: u,
                    icon: y ? a(o, {
                        type: "venmo"
                    }) : a(o, {
                        type: "paypal"
                    }),
                    details: u
                })
            }
        case "GOOGLE_PAY":
            {
                const u = a(o, {
                        type: "google-pay"
                    }),
                    d = s.value ? .description ? ? n.translate("brand.google_pay");
                return a(l, {
                    label: n.translate("brand.google_pay"),
                    icon: u,
                    details: d
                })
            }
        case "APPLE_PAY":
            {
                const u = a(o, {
                        type: "apple-pay"
                    }),
                    d = Z(c),
                    g = B.value && d ? d : n.translate("brand.apple_pay");
                return a(l, {
                    label: n.translate("brand.apple_pay"),
                    icon: u,
                    details: g
                })
            }
        case R.AmazonPay:
            {
                const u = a(o, {
                        type: "amazon-pay"
                    }),
                    d = n.translate("brand.amazon_pay");
                return a(l, {
                    label: d,
                    icon: u,
                    details: d
                })
            }
        default:
            return null
    }
}
export {
    X as C, se as D, q as F, ne as M, ie as P, l as a, j as b, Q as g
};