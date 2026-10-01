import {
    X as w,
    x as E,
    u as r,
    Y as B,
    q as T,
    E as m,
    j as D
} from "./esnext-vendor.BDPAaZdq.js";
import {
    b6 as I,
    o as M,
    P as N,
    aM as V,
    A as G,
    C as R,
    gv as q,
    bw as Y,
    e6 as k,
    jE as z
} from "./hydrate.B0xlt2dG.js";
import {
    O as f,
    P as U,
    aP as W,
    G as O,
    aQ as X,
    q as Q,
    k as x,
    x as K,
    y as j,
    z as F,
    Q as H,
    eG as J,
    cc as $,
    cz as Z,
    mo as ee
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    i as te
} from "./helpers-credit-card-disabled.BnSr1GsQ.js";
const L = w(!1);
L.displayName = "CompactContext";

function Ee() {
    return E(L)
}

function Be({
    methodTitle: e,
    price: t,
    showInterpunct: s = !1,
    sellingPlan: n
}) {
    const o = r("bdi", {
        children: e
    });
    return t && s && n ? r(C, {
        children: [o, I, t, r(M, {
            type: "strong",
            children: n
        })]
    }) : s && t ? r(C, {
        children: [o, I, t]
    }) : r(C, {
        children: o
    })
}

function C({
    children: e
}) {
    const t = B.toArray(e).flatMap((s, n, o) => n < o.length - 1 ? [s, " "] : s);
    return r(N, {
        children: r(M, {
            type: "strong",
            children: t
        })
    })
}

function Te() {
    const {
        shopPay: e,
        checkout: t
    } = f(), {
        paymentMethods: s
    } = U(), n = t.installments.paymentMethodMustSupportInterestBearingLoans;
    return {
        creditCardDisabled: T(l => te(l, s, e.session.isInstallmentsSelected, n), [s, n, e.session.isInstallmentsSelected])
    }
}
const se = {
        id: "fdc8128f690860079c498a10b90912e0f80562eb838162c450f12b65d69b0389",
        type: "query",
        name: "MsiCardEligibility",
        source: "query MsiCardEligibility($checkoutContextInput:CheckoutContextInput!){checkoutSession(checkoutContextInput:$checkoutContextInput){user{paymentMethods{...on CreditCard{id msiEligible __typename}__typename}__typename}__typename}}"
    },
    A = Object.freeze({}),
    oe = W(({
        checkout: e,
        graphql: t,
        shop: s,
        shopPay: n,
        source: o
    }) => {
        const l = e.proposal.negotiated.fields,
            a = m(() => l.buyerIdentity.value ? .presentmentCurrency),
            y = m(() => Q(l.paymentMethods.value ? ? [])),
            i = m(() => e.identity.current.value !== "shopPay" || !y.value || a.value !== "MXN"),
            c = m(() => n.user.paymentMethods.value.filter(x).map(u => u.id).sort().join(",")),
            d = t.shopPayGraphql.query(se, {
                variables: {
                    checkoutContextInput: {
                        checkoutVersion: X({
                            source: o
                        }),
                        checkoutIdentifier: o.checkoutSessionIdentifier ? ? "unknown",
                        shopifyDomain: s.myshopifyDomain,
                        shopId: O(s.id)
                    }
                },
                skip: () => i.value
            });
        let g = c.peek(),
            P = a.peek();
        return D(function() {
            const p = c.value,
                h = a.value,
                S = p !== g || h !== P;
            g = p, P = h, !(!S || i.peek()) && d.refetch({
                deduplicate: !0
            })
        }), {
            eligibilityByCardId: m(() => {
                if (i.value) return A;
                const u = d.data.value ? .checkoutSession ? .user ? .paymentMethods;
                if (!u) return A;
                const p = {};
                for (const h of u) h.__typename === "CreditCard" && (p[h.id] = h.msiEligible ? ? !1);
                return p
            }),
            error: d.error,
            loading: d.loading
        }
    });

function De(e) {
    if (e ? .method.type !== "wallet") return !1;
    switch (e.method.name) {
        case "APPLE_PAY":
            return F(e);
        case "GOOGLE_PAY":
            return j(e);
        case "PAYPAL_EXPRESS":
            return K(e);
        default:
            return !1
    }
}

function Ne() {
    const {
        value: e
    } = U().paymentMethods, {
        billingAddress: t,
        billingAddressOption: s
    } = H(), n = V(), {
        shopPay: o,
        checkout: {
            address: l
        }
    } = f(), a = J(s.value === "shipping" ? n.value : t.value, {
        extendedAddressMode: l.extendedAddressMode
    }), {
        eligibilityByCardId: y
    } = $(oe), i = o.session.selectedPaymentMethod.value, c = Z(e), d = i != null && x(i) ? y.value[i.paymentAttributes.id] ? ? !1 : !1;
    return ({
        sessionToken: P,
        creditCardInstallments: b,
        msiEligibleCard: u = d
    } = {}) => {
        const p = o.session.hsaRequested.peek();
        return {
            method: {
                type: "wallet",
                name: "SHOP_PAY",
                walletContent: {
                    paymentMethod: "CREDIT_CARD",
                    sessionToken: P,
                    billingAddress: a,
                    paymentMethodIdentifier: ee(e),
                    ...b != null && b > 0 && {
                        creditCardInstallments: b
                    },
                    ...u && {
                        msiEligibleCard: u
                    },
                    ...c && {
                        hsaRequested: p
                    }
                }
            }
        }
    }
}
const ae = "/cdn/shopifycloud/checkout-web/assets/c1/assets/apay-logo-light.BOpRNbfJ.svg",
    ne = "/cdn/shopifycloud/checkout-web/assets/c1/assets/apay-logo.qbCmTpxR.svg",
    le = "/cdn/shopifycloud/checkout-web/assets/c1/assets/applepay-logo-borderless-light.D4uI0NI6.svg",
    ie = "/cdn/shopifycloud/checkout-web/assets/c1/assets/applepay-logo-borderless.BpIqGUgE.svg",
    v = "/cdn/shopifycloud/checkout-web/assets/c1/assets/applepay-logo.BVeJpuwf.svg",
    ce = "/cdn/shopifycloud/checkout-web/assets/c1/assets/bwp-logo-light.Be3NC6rq.svg",
    re = "/cdn/shopifycloud/checkout-web/assets/c1/assets/bwp-logo.BRDn9X4f.svg",
    de = "/cdn/shopifycloud/checkout-web/assets/c1/assets/gpay-logo-light.B_DsI0cq.svg",
    ue = "/cdn/shopifycloud/checkout-web/assets/c1/assets/gpay-logo.BbJVlra3.svg",
    pe = "/cdn/shopifycloud/checkout-web/assets/c1/assets/paypal-logo-light.Do6ddnMD.svg",
    he = "/cdn/shopifycloud/checkout-web/assets/c1/assets/paypal-logo.Q2f7XzPy.svg",
    ye = "/cdn/shopifycloud/checkout-web/assets/c1/assets/shop-pay-logo-light.Ts-yoc2V.svg",
    ge = "/cdn/shopifycloud/checkout-web/assets/c1/assets/shop-pay-logo.yJ-5VMKh.svg",
    me = "/cdn/shopifycloud/checkout-web/assets/c1/assets/venmo-logo-light.Nme_SAlP.svg",
    Pe = "/cdn/shopifycloud/checkout-web/assets/c1/assets/venmo-logo.DabXQIZQ.svg",
    be = "e5syv",
    fe = "_7NPtB",
    Ce = "XGA28",
    _e = "gKSKB",
    Ie = "DWmRr",
    ke = "RULId",
    Ae = "SMmkH",
    ve = "EpCJ3",
    Me = "_705vE",
    Ue = "Zxnlh",
    _ = {
        walletLogo: be,
        xxxsmall: fe,
        xxsmall: Ce,
        xsmall: _e,
        small: Ie,
        medium: ke,
        large: Ae,
        AmazonPayLogoVerticalAlignment: ve,
        BuyWithPrimeLogoVerticalAlignment: Me,
        ShopPayLogoVerticalAlignment: Ue
    };

function Ve({
    size: e = "medium",
    wallet: t,
    invertColor: s = !1
}) {
    const n = G(),
        o = R(n);
    let l = q();
    s && (l = l === "light" ? "dark" : "light");
    const {
        i18n: a,
        observability: y
    } = f(), i = {
        amazon_pay: {
            iconUrl: ne,
            customClassName: "AmazonPayLogoVerticalAlignment",
            lightIconUrl: ae,
            altText: a.translate("brand.amazon_pay")
        },
        APPLE_PAY: {
            iconUrl: v,
            lightIconUrl: v,
            altText: a.translate("brand.apple_pay")
        },
        APPLE_PAY_BORDERLESS: {
            iconUrl: ie,
            lightIconUrl: le,
            altText: a.translate("brand.apple_pay")
        },
        buy_with_prime: {
            iconUrl: re,
            customClassName: "BuyWithPrimeLogoVerticalAlignment",
            lightIconUrl: ce,
            altText: a.translate("brand.buy_with_prime")
        },
        GOOGLE_PAY: {
            iconUrl: ue,
            lightIconUrl: de,
            altText: a.translate("brand.google_pay")
        },
        PAYPAL_EXPRESS: {
            iconUrl: o ? Pe : he,
            lightIconUrl: o ? me : pe,
            altText: o ? a.translate("brand.venmo") : a.translate("brand.paypal")
        },
        SHOP_PAY: {
            iconUrl: ge,
            customClassName: "ShopPayLogoVerticalAlignment",
            lightIconUrl: ye,
            altText: a.translate("brand.shop_pay")
        }
    };
    if (!(t in i)) return y.log("wallet_logo_unsupported_wallet_encountered", "Unsupported wallet type in WalletLogo", {
        wallet: t,
        severity: "warning"
    }), null;
    const c = i[t],
        d = l === "light" ? c.lightIconUrl : c.iconUrl,
        g = [_.walletLogo, _[e], c.customClassName && _[c.customClassName]].filter(Boolean).join(" ");
    return r("img", {
        src: d,
        className: g,
        alt: c.altText
    })
}

function Ge() {
    const {
        i18n: e
    } = f(), {
        isWebLayout: t
    } = Y();
    return ({
        offerGuestCheckout: s = !1
    } = {}) => s && t ? {
        message: e.translate("payment_errors.processing_error_checkout_as_guest", {
            checkout_as_guest_link: e.translate("account_management.checkout_as_guest_link")
        }),
        messageNode: e.translate("payment_errors.processing_error_checkout_as_guest", {
            checkout_as_guest_link: r(z, {})
        }),
        target: k
    } : {
        message: e.translate("payment_errors.processing_error"),
        target: k
    }
}
const Re = e => e === "" ? "" : `${e.charAt(0).toLocaleUpperCase()+e.substring(1)}`;
export {
    L as C, Be as S, Ve as W, Te as a, Ge as b, Re as c, Ne as d, oe as e, De as i, Ee as u
};