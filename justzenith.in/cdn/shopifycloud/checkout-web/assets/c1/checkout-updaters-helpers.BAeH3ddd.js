import {
    C as s
} from "./app.D1P6yWfp.js";
import {
    f7 as m,
    eH as E,
    di as O
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const A = {
    id: "21821ce8045ac8c9039907679be78fa2e313ef8ddc074e46680820689ec0aed4",
    type: "query",
    name: "ActivatedExtensionMetafields",
    source: ""
};

function k(e) {
    const n = [],
        t = e.fields.merchandiseLines.value,
        r = e.fields.buyerIdentity.value;
    return t ? .lines.forEach(i => {
        i.variantId && n.push(i.variantId), i.productId && n.push(i.productId)
    }), r ? .customerProfile && (n.push(r.customerProfile.id), r.purchasingCompany && (n.push(r.purchasingCompany.location.id), n.push(r.purchasingCompany.company.id))), n.sort()
}

function T({
    withCache: e = !0,
    coreGraphql: n,
    resourceIds: t,
    checkoutProfileId: r
}) {
    return n.staticQuery(A, {
        variables: {
            resourceIds: t,
            checkoutProfileId: r
        },
        cache: e
    })
}
const y = /^3[Aa]?[Mm]?[Pp]?[Ss]?\.[Aa]?[Mm]?[Pp]?[Ss]?$/,
    N = ["a", "m", "p", "s"],
    P = Object.freeze({
        allowedProcessing: Object.freeze({
            analytics: !1,
            marketing: !1,
            preferences: !1,
            saleOfData: !1
        }),
        visitorConsent: Object.freeze({
            analytics: s.NO_VALUE,
            marketing: s.NO_VALUE,
            preferences: s.NO_VALUE,
            sale_of_data: s.NO_VALUE
        })
    });

function u(e) {
    if (!e) return;
    const n = e.indexOf("_"),
        t = n >= 0 ? e.slice(0, n) : e;
    if (!y.test(t)) return;
    const r = t.indexOf("."),
        i = t.slice(1, r).toLowerCase(),
        o = t.slice(r + 1).toLowerCase();
    if (!N.some(a => i.includes(a) && o.includes(a))) return t
}

function v(e) {
    const n = e.slice(1).replace(".", "");
    return {
        analytics: n.includes("A"),
        marketing: n.includes("M"),
        preferences: n.includes("P"),
        saleOfData: n.includes("S")
    }
}

function x(e) {
    const n = u(e);
    if (!n) return P;
    const t = v(n),
        r = n.indexOf("."),
        i = n.slice(1, r),
        o = (_, p) => i.includes(_) ? s.ACCEPTED : i.includes(p) ? s.DECLINED : s.NO_VALUE,
        d = o("A", "a"),
        a = o("M", "m"),
        f = o("P", "p"),
        C = o("S", "s");
    return Object.freeze({
        allowedProcessing: Object.freeze(t),
        visitorConsent: Object.freeze({
            analytics: d,
            marketing: a,
            preferences: f,
            sale_of_data: C
        })
    })
}

function U(e) {
    if (e) {
        if (e.length === 2) return {
            countryCode: e
        };
        if (e.length > 2) return {
            countryCode: e.slice(0, 2),
            provinceCode: e.slice(2)
        }
    }
}

function L(e) {
    if (e === s.ACCEPTED) return !0;
    if (e === s.DECLINED) return !1
}

function c({
    consented: e,
    providedAt: n,
    isExpired: t
}) {
    return e === void 0 || n === void 0 || Number.isNaN(n.getTime()) || t !== !1 ? s.NO_INTERACTION : e ? s.ACCEPTED : s.DECLINED
}

function M({
    analytics: e,
    marketing: n
}) {
    return {
        analytics: l(e),
        marketing: l(n)
    }
}

function l(e) {
    return e.isExpired === !0 || e.providedAt !== void 0 ? c(e) === s.ACCEPTED : e.consented === void 0 ? e.defaultConsented ? ? !1 : !1
}

function R({
    analytics: e,
    marketing: n,
    displayBanner: t,
    trackingConsentHeader: r
}) {
    return t ? u(r) ? c(e) === s.NO_INTERACTION && c(n) === s.NO_INTERACTION : !0 : !1
}

function w(e) {
    if (!e) return;
    const n = e.consent.analytics.providedAt,
        t = e.consent.marketing.providedAt;
    return {
        analytics: {
            consented: e.consent.analytics.consented ? ? void 0,
            providedAt: n ? new Date(n) : void 0,
            isExpired: e.consent.analytics.isExpired ? ? void 0,
            defaultConsented: e.consent.analytics.defaultConsented
        },
        marketing: {
            consented: e.consent.marketing.consented ? ? void 0,
            providedAt: t ? new Date(t) : void 0,
            isExpired: e.consent.marketing.isExpired ? ? void 0,
            defaultConsented: e.consent.marketing.defaultConsented
        },
        saleOfData: !e.dataSharingOptOut,
        displayBanner: e.consent.displayBanner,
        trackingConsentHeader: e.trackingConsentHeader ? ? void 0
    }
}
var h = (e => (e.InterestEligibility = "interest_bearing_checkout_eligibility", e.SplitPayEligibility = "split_pay_checkout_eligibility", e.UserEligibility = "user_eligibility", e.CheckoutEligibility = "checkout_eligibility", e.InstallmentsRetryError = "installments_retryable_error", e.InstallmentsPermanentRejection = "installments_permanent_rejection", e.InstallmentsPlanSelected = "plan_selected", e.CreateAgreement = "create_agreement", e.OptionImpression = "installments_option_impression", e))(h || {}),
    b = (e => (e.PointOfSale = "point_of_sale", e.SpiBanner = "spi_banner", e.ReturningSpiBuyer = "returning_spi_buyer", e.SelectedSpi = "selected_spi", e))(b || {});
const g = "/shoppay_login";

function D(e) {
    return e.replace(/\/+$/, "").endsWith(g)
}

function V(e) {
    return e.searchParams.has(m) && D(e.pathname)
}

function H({
    consentManager: e,
    shop: n
}, {
    shopAccountUuid: t,
    userPrivacySettings: r
}) {
    r && n.hasFlagEnabled(E) && e.setPrefetchedConsent(r, t)
}

function j(e) {
    const n = e ? .address_country ? .toUpperCase();
    return {
        address1: e ? .street_address ? ? "",
        address2: e ? .extended_address ? ? "",
        city: e ? .address_locality ? ? "",
        company: "",
        countryCode: n && O(n) ? n : void 0,
        firstName: e ? .first_name ? ? "",
        lastName: e ? .last_name ? ? "",
        phone: e ? .phone_number ? ? "",
        zoneCode: e ? .address_region ? ? "",
        postalCode: e ? .postal_code ? ? ""
    }
}
export {
    b as P, h as S, D as a, L as b, j as c, g as d, x as e, w as f, k as g, V as i, U as p, T as q, H as r, R as s, M as t, u as v
};