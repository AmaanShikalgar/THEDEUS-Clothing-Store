const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["receipt-mappers.DbC12m7I.js", "esnext-vendor.BDPAaZdq.js", "shared-receipt-eager-mappers.CpLC5HH7.js", "shared-receipt-merchandise-lines.CYwfsV6X.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css"]))) => i.map(i => d[i]);
import {
    y as N,
    m as as,
    E as Q,
    j as rs,
    x as _t,
    b4 as Ei,
    X as $e,
    b3 as Ai,
    q as be,
    u as Zn,
    A as ke,
    h as ft,
    f as C,
    e as Gt,
    T as ie,
    n as ve,
    U as de,
    F as Qa,
    G as ss,
    a as qe,
    k as os,
    l as is,
    _ as vi,
    o as hi,
    r as bi,
    b2 as Ti,
    b8 as yi,
    aC as Dn
} from "./esnext-vendor.BDPAaZdq.js";
import {
    S as le,
    o as Ii,
    _ as Ci
} from "./app.D1P6yWfp.js";
const tv = "127e7418",
    nv = "3da88bfb",
    av = "86d98af5",
    Ni = "150f1f5a",
    rv = "0cc1ad7d",
    sv = "1564e6da",
    ov = "279eb2ef",
    iv = "f70efa5b",
    Pi = "a1d1f9a1",
    Oi = "8defa558",
    dv = "764d78cb",
    lv = "b124d6ab",
    uv = "19ebb89e",
    cv = "947c03d4",
    mv = "c8d78a39",
    _v = "f9634b22",
    fv = "6534e980",
    gv = "04fa4c68",
    Ri = "54cfe4f7",
    pv = "2622974a",
    Sv = "ed74ba26",
    Ev = "40ab3289",
    Mi = "74dae6f8",
    Av = "6c6c397b",
    wi = "4e251757",
    vv = "a7aa1afc",
    Li = "6445f1a2",
    hv = "818a4c42",
    bv = "3b15b09c",
    Tv = "e30c6c46",
    yv = "f0707057",
    Iv = "3b27c007",
    Cv = "a87c29a8",
    Nv = "9725ffe7",
    Di = "84c25ab3",
    Pv = "ef6f96d3",
    Ov = "e6cf17ba",
    Rv = "e1970715",
    Mv = "5f870968",
    wv = "36f8f0c3",
    ki = "2fe3f077",
    Lv = "56af846c",
    Dv = "151446e0",
    kv = "491d20bb",
    xv = "7223af9a",
    jv = "333f50d4",
    Bv = "9e663486",
    Uv = "490d77ae",
    Fv = "d4d372c5",
    Yv = "ca245bc1",
    Hv = "6e02f8ae",
    Vv = "fc0f5929",
    Gv = "4c2de6af",
    zv = "a46f0b68",
    Wv = "b6a7053d",
    qv = "2b8e5580",
    Kv = "cc238f4f",
    Xv = "5cbdf41c",
    $v = "b7f830d9",
    Qv = "32199942",
    Jv = "26081d61",
    Zv = "8450a54b",
    eh = "f5afabb3",
    th = "9881044d",
    nh = "26f581df",
    ah = "7ee89bf1",
    xi = "dcaf0f65",
    ji = "a290bb7e",
    ds = "2e0da322",
    Bi = "5db64f17",
    rh = "370070f3",
    sh = "de3797dd",
    oh = "59fbf257",
    ih = "605ad318",
    dh = "7b21cf0b",
    lh = "b13923a8",
    uh = "4c64608a",
    ch = "16072cab",
    mh = "6b3fd603",
    _h = "f12a06f7",
    fh = "1576ad69",
    gh = "63209598",
    ph = "3a1b43ad",
    Sh = "e0fdff21",
    Eh = "bdb960ec",
    Ah = "7322bcc8",
    Ui = {
        id: "0e99bd249f7991aa181554e2af75e941bd88ab972c71ba38611c7fa034ef0ea2",
        type: "query",
        name: "NegotiateFromSession",
        source: ""
    },
    Fi = null,
    Yi = 2;

function it(e, t, n = !1) {
    if (!(!e || e.status === "unavailable")) {
        if (n) {
            const a = e.lines.find(({
                type: r,
                status: s
            }) => r === t && s === "available");
            return a || (e.lines.find(ls) ? ? e.lines[0])
        }
        return e.lines.find(({
            type: a
        }) => a === t) ? ? e.lines[0]
    }
}

function Be(e) {
    if (!e || e.status === "not_required") return;
    const {
        methods: t,
        selectedDeliveryMethodHandle: n
    } = e;
    return t.find(({
        handle: a
    }) => a === n)
}

function Ue(e) {
    const t = e ? .filter(({
            lineComponents: a
        }) => a.length === 0) ? ? [],
        n = e ? .flatMap(({
            lineComponents: a
        }) => a) ? ? [];
    return [...t, ...n]
}

function ls(e) {
    return e ? .status === "available"
}

function Te(e, t) {
    return e ? .find(n => n.method ? .type === "wallet" && n.method.name === t)
}
const Qe = e => e.type === "local" ? e.name === "IDEAL" : e.type !== "customOnsite" ? !1 : (e.paymentBrands ? .map(n => n.toLowerCase()) ? ? []).includes("ideal"),
    us = (e, t, n) => {
        if (e.type !== "customOnsite") return !1;
        const a = t.map(s => s.toLowerCase());
        if (a.length === 0) return !1;
        const r = e.paymentBrands ? .map(s => s.toLowerCase()) ? ? [];
        return a.length === r.length && a.every(s => r.includes(s))
    };

function cs(e, t) {
    return t ? .stableIdToShopId.has(e) ? ? !1
}

function Hi(e, t) {
    return e.filter(a => !cs(a.stableId, t))
}

function vh({
    availableDeliveryAddresses: e,
    mustSelectProvidedAddress: t
}) {
    return !!t && e ? .length === 1
}

function wt(e) {
    return e.type === "wallet" && e.name === "APPLE_PAY"
}

function Je(e) {
    return wt(e) && !!e.placements ? .includes("PAYMENT_METHOD")
}

function ms(e, t = !1) {
    let n = e.filter(({
        type: a,
        status: r
    }) => a === "ONE_TIME_PURCHASE" && r === "available");
    return t && (n = n.filter(a => {
        const s = Be(a) ? .methodType;
        return s === "SHIPPING" || s === "LOCAL"
    })), n.length >= Yi
}

function hh({
    proposedPaymentLines: e
}) {
    for (const t of e)
        if (t.method.type === "shopWallet" && t.method.cardId) return t.method.cardId
}
var Lt = (e => (e.BlankApplePayWalletContent = "BLANK_APPLE_PAY_WALLET_CONTENT", e.BlankSubscriptionAgreement = "BLANK_SUBSCRIPTION_AGREEMENT", e.BlankVaultingAgreement = "BLANK_VAULTING_AGREEMENT", e.CalculatingTaxes = "CALCULATING_TAXES", e.CardFieldInputIsInvalid = "CARD_FIELD_INPUT_IS_INVALID", e.CardFieldsIsLoading = "CARD_FIELDS_IS_LOADING", e.CheckingShippingRequirement = "CHECKING_SHIPPING_REQUIREMENT", e.CvvFieldIsInvalid = "CVV_FIELD_IS_INVALID", e.EmptyPaymentLines = "EMPTY_PAYMENT_LINES", e.ExtensionInterceptorError = "EXTENSION_INTERCEPTOR_ERROR", e.InstallmentsFailed = "INSTALLMENTS_FAILED", e.InstallmentsPaymentMethodIncompatible = "INSTALLMENTS_PAYMENT_METHOD_INCOMPATIBLE", e.InvalidAddress = "INVALID_ADDRESS", e.InvalidCaptcha = "INVALID_CAPTCHA", e.InvalidContactMethod = "INVALID_CONTACT_METHOD", e.InvalidCustomFieldValue = "INVALID_CUSTOM_FIELD_VALUE", e.InvalidDeliveryMethodPhoneNumber = "INVALID_DELIVERY_METHOD_PHONE_NUMBER", e.InvalidExtensionState = "INVALID_EXTENSION_STATE", e.InvalidLocalPickupAddress = "INVALID_LOCAL_PICKUP_ADDRESS", e.InvalidOptInName = "INVALID_OPT_IN_NAME", e.InvalidOptInPhone = "INVALID_OPT_IN_PHONE", e.MissingCreditCard = "MISSING_CREDIT_CARD", e.MissingDeliveryMethod = "MISSING_DELIVERY_METHOD", e.MissingSourceId = "MISSING_SOURCE_ID", e.MissingTermsOfService = "MISSING_TERMS_OF_SERVICE", e.OpeningApplePayPaymentSheet = "OPENING_APPLE_PAY_PAYMENT_SHEET", e.OpeningGooglePayPaymentSheet = "OPENING_GOOGLE_PAY_PAYMENT_SHEET", e.PaymentMethodNotAllowed = "PAYMENT_METHOD_NOT_ALLOWED", e.RedirectingToShopPay = "REDIRECTING_TO_SHOP_PAY", e.ShopPayPaymentFailed = "SHOPPAY_PAYMENT_FAILED", e.UnknownReason = "UNKNOWN_REASON", e.CheckoutSheetKitPreload = "CHECKOUT_SHEET_KIT_PRELOAD", e.SubmittedForCompletion = "SUBMITTED_FOR_COMPLETION", e.MissingBankAccount = "MISSING_BANK_ACCOUNT", e.NoPickupPointsAvailable = "NO_PICKUP_POINTS_AVAILABLE", e.PaymentMethodLoading = "PAYMENT_METHOD_LOADING", e.PaymentMethodUnavailable = "PAYMENT_METHOD_UNAVAILABLE", e))(Lt || {}),
    P = (e => (e.CreditCard = "CREDIT_CARD_ON_FILE", e.PayPal = "PAYPAL_ON_FILE", e))(P || {});

function Vi(e) {
    return Gi(e.discount)
}

function Gi(e) {
    return e.type === "discountCodeTrigger"
}
var kn = (e => (e.Fulfillment = "FULFILLMENT", e.Receipt = "RECEIPT", e))(kn || {});
const zi = /\/(\w+(-\w+)*)$/;
class Wi extends Error {
    constructor() {
        super(...arguments), this.name = "ParseGidError"
    }
}

function Ze(e) {
    const n = `/${e}`.match(zi);
    if (n && n[1] !== void 0) return n[1];
    throw new Wi(`Invalid gid: ${e}`)
}

function bh(e) {
    return e ? parseInt(Ze(e), 10) : void 0
}

function ea(e) {
    return e === "PICK_UP"
}

function qi(e) {
    return (("facts" in e ? e.facts.delivery : e.deliveryFacts) ? ? []).some(({
        deliveryAddress: n,
        pickupAddress: a
    }) => a !== null || n !== null)
}

function Th(e) {
    return e ? .find(t => t.type === "wallet" && t.name === "SHOPIFY_INSTALLMENTS")
}

function _s(e) {
    return !e || e.status === "unavailable" ? [] : e.lines
}

function Ki(e) {
    return !e || e.status === "unavailable" ? [] : e.deliveryExpectationLines
}

function Xi(e) {
    return !!e.method
}

function yh(e) {
    return _s(e).map(t => ({
        line: t,
        method: Be(t)
    })).filter(Xi)
}
const ta = e => {
    if (!e || e.status === "unavailable" || e.lines.length === 0) return;
    const t = e.lines.filter(n => n.status !== "not_required");
    if (t.length !== 0) return t
};

function Ih(e) {
    if (e && e.status === "partial") return !1;
    const t = ta(e);
    return t ? t.every(n => {
        const a = Be(n);
        return ea(a ? .methodType)
    }) : !1
}

function Ch(e) {
    const t = ta(e);
    return t ? t.some(n => {
        const a = Be(n);
        return ea(a ? .methodType)
    }) : !1
}

function Nh(e) {
    return !e || e.status === "unavailable" || e.lines.length === 0 ? !1 : e.lines.every(t => Be(t) ? .methodType === "PICKUP_POINT")
}
const $i = new Set(["SHIPPING", "LOCAL"]);

function Ph(e) {
    if (e && e.status === "partial") return !1;
    const t = ta(e);
    return t ? t.every(n => {
        const a = Be(n);
        return a != null && !$i.has(a.methodType)
    }) : !1
}

function Oh(e) {
    if (fs(e)) return e.deliveryMacros
}

function Qi(e) {
    return e.targetMerchandiseLines ? .[0] ? .stableId
}

function Ji({
    deliveryLine: e,
    remoteMerchandiseDetails: t,
    remoteShopsConfigMap: n,
    localShopId: a,
    localShopName: r,
    fallbackRemoteShopName: s
}) {
    const o = Qi(e),
        i = o && t ? .stableIdToShopId ? .get(o);
    return i ? {
        shopId: i,
        shopName: n ? .get(i) ? .name ? ? s ? ? r,
        isLocal: !1
    } : {
        shopId: a,
        shopName: r,
        isLocal: !0
    }
}

function Rh(e, t) {
    const n = new Set(Object.values(t));
    return e.find(({
        deliveryMethodHandles: a
    }) => {
        const r = Object.values(a);
        return n.size === r.length && r.every(s => n.has(s))
    })
}

function fs(e, t = !1) {
    return !!(e && (e.status === "filled" || e.status === "partial") && ms(e.lines, t))
}

function Mh(e, t) {
    return `${e}${t?`-${Ze(t)}`:""}`
}

function wh(e) {
    return e ? .find(t => t.method ? .type === "wallet")
}

function Lh(e, t) {
    return e.filter(n => n.method ? .type === "walletsPlatformPaymentMethod" && t.includes(n.method.name))
}

function gs(e, t) {
    return e ? .find(n => n.method ? .type === "walletsPlatformPaymentMethod" && n.method.name === t)
}

function Dh(e, t) {
    return e ? .find(n => n.type === "wallet" && n.name === t)
}
const Zi = ["SHOP_PAY", "SHOPIFY_INSTALLMENTS"],
    ed = e => e.type === "direct" || e.type === "wallet" && Zi.includes(e.name),
    td = (e, {
        paymentBrands: t,
        paymentMethodIdentifier: n
    }) => {
        if (e ? .length) {
            if (n) {
                const a = e.find(r => r.type === "customOnsite" && r.paymentMethodIdentifier === n);
                if (a) return a
            }
            return e.find(a => us(a, t ? ? []))
        }
    };

function kh(e) {
    return e ? .type === "wallet" && e.name === "APPLE_PAY"
}

function xh(e) {
    return e ? .some(t => ["wallet", "walletsPlatformPaymentMethod"].includes(t.method ? .type)) ? ? !1
}

function jh(e, t) {
    const n = new Map;
    return e ? .forEach(a => {
        const r = t ? .stableIdToShopId.get(a.stableId);
        if (r) {
            const s = [...n.get(r) || [], a];
            n.set(r, s)
        }
    }), n
}

function na({
    paymentDue: e,
    checkoutTotal: t,
    orderDeposit: n,
    hasFixedSellingPlan: a
}) {
    return (a || n) && t ? t : e
}

function nd(e, t) {
    return e.filter(n => n ? .targetMerchandiseLines ? n.targetMerchandiseLines.every(r => !cs(r.stableId, t)) : !0)
}

function Bh(e) {
    return !!(("negotiated" in e ? e.negotiated.fields.isShippingRequired.value : e.negotiatedIsShippingRequired) || qi(e))
}

function ad(e, t) {
    return e ? .some(a => a.type === P.CreditCard || a.type === P.PayPal || a.type === "bank" && a.availableInstruments.length > 0) ? !0 : (t ? .length ? ? 0) > 0
}

function rd({
    identitySource: e,
    isOrderSession: t,
    storeVaultEnabled: n,
    customerProfile: a
}) {
    return !(e === "customerAccount" && !n || e !== "customerAccount" && e !== "businessCustomer" || e === "businessCustomer" && (t || a ? .__typename !== "BusinessCustomerProfile"))
}

function Uh(e) {
    return rd(e) && e.hasCustomerStoredPaymentMethod
}

function Fh(e) {
    const t = "checkout" in e ? e.checkout.proposal.negotiated.fields.merchandiseLines.value : e.merchandiseLines;
    return Ue(t ? .lines).some(n => !!n.sellingPlan ? .subscriptionDetails)
}
const Dt = "⁠";

function ps(e, t) {
    return e.reduce((n, a, r) => {
        if (t[a.key]) {
            const s = a.decorator && n.length > 0 ? a.decorator : "";
            return `${n}${s}${r===0?"":Dt}${t[a.key]}`
        }
        return n
    }, "")
}

function Ss(e, t) {
    const [n, ...a] = t.split(Dt), r = a.join(Dt), s = [n, r];
    return e.reduce((i, d, l) => {
        var u;
        if (s[l]) {
            const m = (u = e[l + 1]) === null || u === void 0 ? void 0 : u.decorator,
                c = m && m.length > 0 && s[l].endsWith(m) ? s[l].substring(0, s[l].length - m.length) : s[l];
            return Object.assign(Object.assign({}, i), {
                [d.key]: c
            })
        }
        return i
    }, {})
}

function sd(e, t, n) {
    for (const a of t) {
        const r = n.match(a);
        if (r ? .groups) return r.groups
    }
    return {
        [e[0].key]: n
    }
}
const od = ["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AR", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MK", "ML", "MM", "MN", "MO", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PS", "PT", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
    id = {
        AE: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        BE: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+),? (?<streetNumber>\\d+(?:-\\d+)?(?: ?[A-Za-z])?)$", "^(?<streetNumber>\\d+(?:-\\d+)?(?: ?[A-Za-z])?),? (?<streetName>[^\\d,]+)$"]
        },
        BR: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: ", "
                    }],
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>.+?),\\s*(?<streetNumber>(?:\\d+[a-zà-öø-ÿ]?|\\d+(?:[-/]\\d+[a-zà-öø-ÿ]?)+|\\d+(?:\\s+\\d+)+|s\\/?n|sem n[úu]mero))$", "^(?<streetName>.+?),\\s*(?<streetNumber>(?:\\d+[a-zà-öø-ÿ]?|\\d+(?:[-/]\\d+[a-zà-öø-ÿ]?)+|\\d+(?:\\s+\\d+)+|s\\/?n|sem n[úu]mero))\\s*,\\s*(?<line2>.+)$", "^(?<streetName>.+?),\\s*(?<streetNumber>(?:\\d+[a-zà-öø-ÿ]?|\\d+(?:[-/]\\d+[a-zà-öø-ÿ]?)+|\\d+(?:\\s+\\d+)+|s\\/?n|sem n[úu]mero))\\s+(?<line2>(?:apt(?:o|\\.)?|apartamento|bloco|casa|sala|fundos|loja|condom[ií]nio)\\b.+)$", "^(?<streetName>(?:[^\\d,\\s]+\\s)*[^\\d,\\s]+)\\s+(?<streetNumber>\\d+(?: ?[a-z])?)\\s+(?<line2>(?:apt(?:o|\\.)?|apartamento|bloco|casa|sala|fundos|loja)\\b.+)$", "^(?<streetName>(?:[^\\d,\\s]+\\s)*[^\\d,\\s]+)(?:,? ?)(?<streetNumber>\\d+(?: ?[a-z])?)\\s*,\\s*(?<line2>.+)$", "^(?<streetName>(?:[^\\d,\\s]+\\s)*[^\\d,\\s]+)(?:,? ?)(?<streetNumber>\\d+(?: ?[a-z])?)$"]
        },
        CL: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }],
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+?),? (?<streetNumber>(?:n|n\\.|nº|número|no\\.|no|#)? ?\\d+(?: ?[a-z])?)$"]
        },
        CO: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            }
        },
        CR: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        DE: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+?\\.?)[, ]{1,2}(?<streetNumber>\\d+(?:-\\d+)?(?: ?[A-Za-z])?)$", "^(?<streetName>[^\\d,]+\\.)(?<streetNumber>\\d+(?:-\\d+)?(?: ?[A-Za-z])?)$"]
        },
        ES: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+?),? (?<streetNumber>(?:n|n\\.|nº|número|no\\.|no|#)? ?\\d+(?: ?[a-z])?)$"]
        },
        ID: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        IL: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetNumber"
                    }, {
                        key: "streetName",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+),? (?<streetNumber>\\d+(?:/\\d+)?)$", "^(?<streetNumber>\\d+(?:/\\d+)?),? (?<streetName>[^\\d,]+)$"]
        },
        KW: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            }
        },
        MX: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }],
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>[^\\d,]+?),? (?<streetNumber>(?:n|n\\.|nº|número|no\\.|no|#)? ?\\d+(?: ?[a-z])?)$"]
        },
        NL: {
            combined_address_format: {
                default: {
                    address1: [{
                        key: "streetName"
                    }, {
                        key: "streetNumber",
                        decorator: " "
                    }]
                }
            },
            address1_regex: ["^(?<streetName>(?:\\d+[a-z]+\\s)?[^\\d]+)\\s(?<streetNumber>\\d+(?:-[A-Za-z0-9]+)?(?: ?[A-Za-z])?)$"]
        },
        PA: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        PE: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            }
        },
        PH: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            }
        },
        SA: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        TR: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: " "
                    }]
                }
            }
        },
        TW: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood"
                    }]
                },
                Latin: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        },
        VN: {
            combined_address_format: {
                default: {
                    address2: [{
                        key: "line2"
                    }, {
                        key: "neighborhood",
                        decorator: ", "
                    }]
                }
            }
        }
    },
    dd = {
        Arabic: new RegExp("\\p{Script=Arabic}", "u"),
        Han: new RegExp("\\p{Script=Han}", "u"),
        Hangul: new RegExp("\\p{Script=Hangul}", "u"),
        Hiragana: new RegExp("\\p{Script=Hiragana}", "u"),
        Katakana: new RegExp("\\p{Script=Katakana}", "u"),
        Latin: new RegExp("\\p{Script=Latin}", "u"),
        Thai: new RegExp("\\p{Script=Thai}", "u")
    };

function Es(e) {
    return Object.entries(dd).filter(([, t]) => t.test(e)).map(([t]) => t)
}

function ld(e, t) {
    const n = Es(e);
    return n.length === 1 && n[0] === t
}

function zt(e) {
    const t = id[e];
    return t || (od.includes(e) ? {} : null)
}

function ud(e, t, n) {
    const a = new Set(e.flatMap(r => {
        const s = t[r.key];
        return s ? Es(s) : []
    }).flat());
    return a.size === 1 && a.has(n)
}

function Wt(e, t, n) {
    if (e.combined_address_format === void 0) return;
    const a = e.combined_address_format,
        r = "default",
        s = Object.keys(a).filter(d => d !== "default"),
        o = a[r][n],
        i = s.filter(d => {
            var l, u;
            const m = (u = (l = e.combined_address_format) === null || l === void 0 ? void 0 : l[d]) === null || u === void 0 ? void 0 : u[n];
            return m ? typeof t == "string" ? ld(t, d) : ud(m, t, d) : !1
        });
    return i.length === 1 ? a[i[0]][n] : o
}

function cd(e) {
    return e.address1_regex === void 0 ? [] : e.address1_regex.map(t => new RegExp(t, "i"))
}

function qt(e) {
    const t = zt(e.countryCode),
        n = t ? Wt(t, e, "address1") : void 0,
        a = n ? .some(r => r.key in e && e[r.key] !== void 0);
    return n && a ? ps(n, e) : e.address1 !== void 0 ? e.address1 : null
}

function dt(e) {
    const t = zt(e.countryCode),
        n = t ? Wt(t, e, "address2") : void 0,
        a = n ? .some(r => r.key in e && e[r.key] !== void 0);
    return n && a ? ps(n, e) : e.address2 !== void 0 ? e.address2 : null
}

function me(e, t, n = !1) {
    const a = zt(e),
        r = a ? Wt(a, t, "address1") : void 0,
        s = a ? cd(a) : void 0;
    return r ? t === "" ? {} : t.includes(Dt) ? Ss(r, t) : n && s ? sd(r, s, t) : {
        [r[0].key]: t
    } : null
}

function Me(e, t) {
    const n = zt(e),
        a = n ? Wt(n, t, "address2") : void 0;
    return a ? Ss(a, t) : null
}

function aa(e) {
    const t = {};
    for (const n of Object.keys(e)) t[n] = N(e[n]);
    return t
}

function xn(e) {
    return typeof e != "object" || e == null ? !1 : e instanceof as
}

function md(e) {
    return Object.values(e).every(t => xn(t))
}

function Yh(e) {
    const t = e.initial && md(e.initial) ? e.initial : aa(e.initial ? ? {});
    return n => {
        const a = _d(n);
        return !t.hasOwnProperty(a) && (e.get ? t[a] = e.get(n) : e.defaultValue && (t[a] = N(e.defaultValue))), t[a]
    }
}

function _d(e) {
    return Object.keys(e).sort().reduce((t, n) => {
        if (typeof e[n] > "u") return t;
        const a = `${n}:${e[n]}`;
        return t ? `${t}-${a}` : a
    }, "")
}
class ye extends as {#
    e;#
    t;#
    n;
    constructor(t, n, a) {
        super(t.peek()), this.#e = t, this.#t = n, this.#n = a
    }
    get value() {
        return this.#e.value
    }
    set value(t) {
        this.#t(t)
    }
    get fields() {
        return this.#n
    }
}

function Hh(e) {
    const t = N(e.peek()),
        n = rs(() => {
            t.value = e.value
        });
    return [t, n]
}

function Vh(e) {
    return e.i
}

function Gh(e, t) {
    const n = N(t),
        a = new Set,
        r = new ye(Q(() => n.value), o => {
            const i = n.peek(),
                d = e(i, o);
            d && (n.value = d, a.forEach(l => l({
                previousState: i,
                nextState: d,
                action: o
            })))
        });
    return Object.defineProperty(r, "listen", {
        value: o => (a.add(o), () => {
            a.delete(o)
        }),
        writable: !1
    }), r
}

function X(e) {
    return e === null || typeof e > "u" || typeof e == "string" && e.trim() === ""
}

function Kt(e, t) {
    return X(e) && X(t) ? !0 : e === t
}

function kt(e) {
    return (e ? ? "").replace(/\s/g, "").toUpperCase()
}

function fd(e, t, n = []) {
    const a = ["firstName", "lastName", "company", "city", "countryCode", "zoneCode", "postalCode", "phone", "district", "subdistrict"],
        r = n.includes("address1") || As(e, t),
        s = n.includes("address2") || ra(e, t);
    return r && s && a.every(o => n.includes(o) || gd(e, t, o))
}

function gd(e, t, n) {
    return n === "postalCode" ? kt(e.postalCode) === kt(t.postalCode) : Kt(e[n], t[n])
}

function As(e, t) {
    return Kt(Ja(e), Ja(t))
}

function ra(e, t) {
    return Kt(xt(e), xt(t))
}

function vs(e) {
    return !e.countryCode || !e.address1 ? e.address1 : qt({
        countryCode: e.countryCode,
        ...me(e.countryCode, e.address1, !0)
    }) ? ? e.address1
}

function jn(e) {
    const t = e.map(n => n ? .trim() ? ? "");
    return t.every(n => n === "") ? void 0 : JSON.stringify(t)
}

function pd(e, t) {
    const n = t.trim(),
        a = e.line2 ? .trim();
    return a && a !== n ? !0 : X(e.address2) ? "line2" in e && !a : Me("BR", e.address2 ? ? "") ? .line2 ? .trim() !== n
}

function Ja(e) {
    if (X(e.address1) && e.countryCode && (!X(e.streetName) || !X(e.streetNumber))) return qt({
        countryCode: e.countryCode,
        streetName: e.streetName ? ? "",
        streetNumber: e.streetNumber ? ? ""
    }) ? ? jn([e.streetName, e.streetNumber]);
    if (e.countryCode === "BR" && e.address1) {
        const t = me("BR", e.address1, !0) ? .line2;
        if (t && pd(e, t)) return e.address1
    }
    return vs(e)
}

function xt(e) {
    if (!X(e.address2) && e.countryCode) {
        const t = Me(e.countryCode, e.address2 ? ? "");
        if (t) return dt({
            countryCode: e.countryCode,
            ...t
        }) ? ? jn([t.line2, t.neighborhood]) ? ? e.address2
    }
    if (X(e.address2) && e.countryCode) {
        let t = e.line2;
        if (X(t) && e.address1 && !(e.countryCode === "BR" && "line2" in e) && (t = me(e.countryCode, e.address1, !0) ? .line2), !X(t) || !X(e.neighborhood)) return dt({
            countryCode: e.countryCode,
            line2: t ? ? "",
            neighborhood: e.neighborhood ? ? ""
        }) ? ? jn([t, e.neighborhood])
    }
    return e.address2
}

function Xt(e, t, n = []) {
    return ["firstName", "lastName", "company", "address1", "address2", "city", "countryCode", "zoneCode", "postalCode", "phone", "district", "subdistrict"].filter(r => !n.includes(r)).every(r => r === "address1" ? As(e, t) : r === "address2" ? ra(e, t) : r === "postalCode" ? kt(e.postalCode) === kt(t.postalCode) : (e[r] ? ? "") === (t[r] ? ? ""))
}

function zh(e, t) {
    return ["line2", "streetName", "streetNumber"].every(a => X(t[a]) || (e[a] ? ? "") === t[a])
}
const hs = Symbol("editableAddress"),
    bs = Symbol("markClean");

function Sd(e) {
    return typeof e == "object" && !!e[hs]
}
const Ed = {
    AC: 1,
    AD: 1,
    AE: 1,
    AF: 1,
    AG: 1,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AO: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AW: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BB: 1,
    BD: 1,
    BE: 1,
    BF: 1,
    BG: 1,
    BH: 1,
    BI: 1,
    BJ: 1,
    BL: 1,
    BM: 1,
    BN: 1,
    BO: 1,
    BQ: 1,
    BR: 1,
    BS: 1,
    BT: 1,
    BV: 1,
    BW: 1,
    BY: 1,
    BZ: 1,
    CA: 1,
    CC: 1,
    CD: 1,
    CF: 1,
    CG: 1,
    CH: 1,
    CI: 1,
    CK: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CO: 1,
    CR: 1,
    CU: 1,
    CV: 1,
    CW: 1,
    CX: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 1,
    DK: 1,
    DM: 1,
    DO: 1,
    DZ: 1,
    EC: 1,
    EE: 1,
    EG: 1,
    EH: 1,
    ER: 1,
    ES: 1,
    ET: 1,
    FI: 1,
    FJ: 1,
    FK: 1,
    FO: 1,
    FR: 1,
    GA: 1,
    GB: 1,
    GD: 1,
    GE: 1,
    GF: 1,
    GG: 1,
    GH: 1,
    GI: 1,
    GL: 1,
    GM: 1,
    GN: 1,
    GP: 1,
    GQ: 1,
    GR: 1,
    GS: 1,
    GT: 1,
    GW: 1,
    GY: 1,
    HK: 1,
    HM: 1,
    HN: 1,
    HR: 1,
    HT: 1,
    HU: 1,
    ID: 1,
    IE: 1,
    IL: 1,
    IM: 1,
    IN: 1,
    IO: 1,
    IQ: 1,
    IR: 1,
    IS: 1,
    IT: 1,
    JE: 1,
    JM: 1,
    JO: 1,
    JP: 1,
    KE: 1,
    KG: 1,
    KH: 1,
    KI: 1,
    KM: 1,
    KN: 1,
    KP: 1,
    KR: 1,
    KW: 1,
    KY: 1,
    KZ: 1,
    LA: 1,
    LB: 1,
    LC: 1,
    LI: 1,
    LK: 1,
    LR: 1,
    LS: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 1,
    MA: 1,
    MC: 1,
    MD: 1,
    ME: 1,
    MF: 1,
    MG: 1,
    MK: 1,
    ML: 1,
    MM: 1,
    MN: 1,
    MO: 1,
    MQ: 1,
    MR: 1,
    MS: 1,
    MT: 1,
    MU: 1,
    MV: 1,
    MW: 1,
    MX: 1,
    MY: 1,
    MZ: 1,
    NA: 1,
    NC: 1,
    NE: 1,
    NF: 1,
    NG: 1,
    NI: 1,
    NL: 1,
    NO: 1,
    NP: 1,
    NR: 1,
    NU: 1,
    NZ: 1,
    OM: 1,
    PA: 1,
    PE: 1,
    PF: 1,
    PG: 1,
    PH: 1,
    PK: 1,
    PL: 1,
    PM: 1,
    PN: 1,
    PS: 1,
    PT: 1,
    PY: 1,
    QA: 1,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    RW: 1,
    SA: 1,
    SB: 1,
    SC: 1,
    SD: 1,
    SE: 1,
    SG: 1,
    SH: 1,
    SI: 1,
    SJ: 1,
    SK: 1,
    SL: 1,
    SM: 1,
    SN: 1,
    SO: 1,
    SR: 1,
    SS: 1,
    ST: 1,
    SV: 1,
    SX: 1,
    SY: 1,
    SZ: 1,
    TA: 1,
    TC: 1,
    TD: 1,
    TF: 1,
    TG: 1,
    TH: 1,
    TJ: 1,
    TK: 1,
    TL: 1,
    TM: 1,
    TN: 1,
    TO: 1,
    TR: 1,
    TT: 1,
    TV: 1,
    TW: 1,
    TZ: 1,
    UA: 1,
    UG: 1,
    UM: 1,
    US: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VC: 1,
    VE: 1,
    VG: 1,
    VN: 1,
    VU: 1,
    WF: 1,
    WS: 1,
    XK: 1,
    YE: 1,
    YT: 1,
    ZA: 1,
    ZM: 1,
    ZW: 1,
    ZZ: 1
};

function Ad(e) {
    return Ed[e] === 1
}

function Wh(e) {
    if (!e) return;
    const t = e.toUpperCase();
    return Ad(t) ? t : void 0
}
const qh = () => aa({
        handle: void 0,
        address1: void 0,
        address2: void 0,
        city: void 0,
        company: void 0,
        coordinates: void 0,
        countryCode: void 0,
        firstName: void 0,
        lastName: void 0,
        name: void 0,
        phone: void 0,
        postalCode: void 0,
        zoneCode: void 0,
        oneTimeUse: void 0,
        streetName: void 0,
        streetNumber: void 0,
        neighborhood: void 0,
        line2: void 0,
        district: void 0,
        subdistrict: void 0
    }),
    vd = ["address1", "address2", "city", "postalCode", "streetName", "streetNumber", "neighborhood", "district", "subdistrict", "line2"];

function Kh(e) {
    return !!(e && !sa(e, vd))
}

function sa(e, t) {
    return t.every(n => {
        const a = e[n];
        return a == null || typeof a == "string" && a.trim() === ""
    })
}
const hd = "EPHEMERAL_ADDRESS",
    Xh = "ephemeral-address-from-initial-negotiation";
class $h extends le {
    constructor() {
        super(...arguments), this.name = "InvalidSelectedAddressError"
    }
}
class Qh extends Error {
    constructor() {
        super(...arguments), this.name = "AddressManagerMethodNotImplementedError"
    }
}
class bd extends le {
    constructor() {
        super(...arguments), this.name = "UnhandledAddressTypeErrorNotThrowing", this.defaultGroupingHash = "UnhandledAddressTypeErrorNotThrowing"
    }
}

function Td(e, t) {
    return t && t.error(new bd(`Unhandled address type: ${JSON.stringify(e)}. This indicates a type was added to GraphQLAddress but not handled in addressForUI.`)), ot
}
const ot = {
    handle: void 0,
    city: void 0,
    countryCode: void 0,
    postalCode: void 0,
    address1: void 0,
    address2: void 0,
    company: void 0,
    firstName: void 0,
    lastName: void 0,
    name: void 0,
    zoneCode: void 0,
    phone: void 0,
    oneTimeUse: void 0,
    coordinates: void 0,
    district: void 0,
    line2: void 0,
    streetName: void 0,
    streetNumber: void 0,
    subdistrict: void 0
};

function yd(e) {
    return e ? {
        district: e.district ? ? void 0,
        line2: e.line2 ? ? void 0,
        streetName: e.streetName ? ? void 0,
        streetNumber: e.streetNumber ? ? void 0,
        subdistrict: e.subdistrict ? ? void 0
    } : {}
}

function ee(e, t) {
    if (!e) return ot;
    switch (e.__typename) {
        case "Geolocation":
            return { ...ot,
                countryCode: e.country ? .code ? ? void 0,
                postalCode: e.postalCode ? ? void 0,
                zoneCode: e.zone ? .code ? ? void 0,
                coordinates: e.coordinates ? .latitude != null && e.coordinates ? .longitude != null ? {
                    latitude: e.coordinates.latitude,
                    longitude: e.coordinates.longitude
                } : void 0
            };
        case "PostalCodeAddress":
            return { ...ot,
                countryCode: e.countryCode ? ? void 0,
                postalCode: e.postalCode ? ? void 0,
                zoneCode: e.zoneCode ? ? void 0
            };
        case "InvalidDeliveryAddress":
        case "InvalidBillingAddress":
            return ot;
        case "StreetAddress":
        case "PartialStreetAddress":
        case "PickupAddress":
        case "UnvalidatedAddressParameters":
            return {
                handle: e.handle ? ? void 0,
                city: e.city ? ? void 0,
                countryCode: e.countryCode ? ? void 0,
                postalCode: e.postalCode ? ? void 0,
                address1: e.address1 ? ? void 0,
                address2: e.address2 ? ? void 0,
                company: e.company ? ? void 0,
                firstName: e.firstName ? ? void 0,
                lastName: e.lastName ? ? void 0,
                name: e.name ? ? void 0,
                zoneCode: e.zoneCode ? ? void 0,
                phone: e.phone ? ? void 0,
                oneTimeUse: e.oneTimeUse ? ? void 0,
                ...yd(e.extendedFields),
                coordinates: e.coordinates ? .latitude != null && e.coordinates ? .longitude != null ? {
                    latitude: e.coordinates.latitude,
                    longitude: e.coordinates.longitude,
                    accuracy: e.coordinates.accuracy ? ? void 0
                } : void 0
            };
        default:
            return Td(e, t)
    }
}

function ne(e) {
    const t = typeof e == "string" ? e : e.type;
    return t === "orderEdit" || t === "paymentCollection"
}

function Jh(e) {
    return e ? e.contact.locationCount > 1 : !1
}
const Ts = [
        ["DELIVERY_STREET_NAME_REQUIRED", "streetName"],
        ["DELIVERY_STREET_NAME_TOO_LONG", "streetName"],
        ["DELIVERY_STREET_NAME_CONTAINS_EMOJIS", "streetName"],
        ["DELIVERY_STREET_NAME_CONTAINS_HTML_TAGS", "streetName"],
        ["DELIVERY_STREET_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "streetName"],
        ["DELIVERY_STREET_NUMBER_REQUIRED", "streetNumber"],
        ["DELIVERY_STREET_NUMBER_TOO_LONG", "streetNumber"],
        ["DELIVERY_STREET_NUMBER_CONTAINS_EMOJIS", "streetNumber"],
        ["DELIVERY_STREET_NUMBER_CONTAINS_HTML_TAGS", "streetNumber"],
        ["DELIVERY_STREET_NUMBER_CONTAINS_MATHEMATICAL_SYMBOLS", "streetNumber"],
        ["DELIVERY_LINE2_REQUIRED", "line2"],
        ["DELIVERY_LINE2_TOO_LONG", "line2"],
        ["DELIVERY_LINE2_CONTAINS_EMOJIS", "line2"],
        ["DELIVERY_LINE2_CONTAINS_HTML_TAGS", "line2"],
        ["DELIVERY_LINE2_CONTAINS_MATHEMATICAL_SYMBOLS", "line2"],
        ["DELIVERY_DISTRICT_REQUIRED", "district"],
        ["DELIVERY_DISTRICT_TOO_LONG", "district"],
        ["DELIVERY_DISTRICT_CONTAINS_EMOJIS", "district"],
        ["DELIVERY_DISTRICT_CONTAINS_HTML_TAGS", "district"],
        ["DELIVERY_DISTRICT_CONTAINS_MATHEMATICAL_SYMBOLS", "district"],
        ["DELIVERY_SUBDISTRICT_REQUIRED", "subdistrict"],
        ["DELIVERY_SUBDISTRICT_TOO_LONG", "subdistrict"],
        ["DELIVERY_SUBDISTRICT_CONTAINS_EMOJIS", "subdistrict"],
        ["DELIVERY_SUBDISTRICT_CONTAINS_HTML_TAGS", "subdistrict"],
        ["DELIVERY_SUBDISTRICT_CONTAINS_MATHEMATICAL_SYMBOLS", "subdistrict"]
    ],
    ys = [
        ["PAYMENTS_STREET_NAME_REQUIRED", "streetName"],
        ["PAYMENTS_STREET_NAME_TOO_LONG", "streetName"],
        ["PAYMENTS_STREET_NAME_CONTAINS_EMOJIS", "streetName"],
        ["PAYMENTS_STREET_NAME_CONTAINS_HTML_TAGS", "streetName"],
        ["PAYMENTS_STREET_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "streetName"],
        ["PAYMENTS_STREET_NUMBER_REQUIRED", "streetNumber"],
        ["PAYMENTS_STREET_NUMBER_TOO_LONG", "streetNumber"],
        ["PAYMENTS_STREET_NUMBER_CONTAINS_EMOJIS", "streetNumber"],
        ["PAYMENTS_STREET_NUMBER_CONTAINS_HTML_TAGS", "streetNumber"],
        ["PAYMENTS_STREET_NUMBER_CONTAINS_MATHEMATICAL_SYMBOLS", "streetNumber"],
        ["PAYMENTS_LINE2_REQUIRED", "line2"],
        ["PAYMENTS_LINE2_TOO_LONG", "line2"],
        ["PAYMENTS_LINE2_CONTAINS_EMOJIS", "line2"],
        ["PAYMENTS_LINE2_CONTAINS_HTML_TAGS", "line2"],
        ["PAYMENTS_LINE2_CONTAINS_MATHEMATICAL_SYMBOLS", "line2"],
        ["PAYMENTS_DISTRICT_REQUIRED", "district"],
        ["PAYMENTS_DISTRICT_TOO_LONG", "district"],
        ["PAYMENTS_DISTRICT_CONTAINS_EMOJIS", "district"],
        ["PAYMENTS_DISTRICT_CONTAINS_HTML_TAGS", "district"],
        ["PAYMENTS_DISTRICT_CONTAINS_MATHEMATICAL_SYMBOLS", "district"],
        ["PAYMENTS_SUBDISTRICT_REQUIRED", "subdistrict"],
        ["PAYMENTS_SUBDISTRICT_TOO_LONG", "subdistrict"],
        ["PAYMENTS_SUBDISTRICT_CONTAINS_EMOJIS", "subdistrict"],
        ["PAYMENTS_SUBDISTRICT_CONTAINS_HTML_TAGS", "subdistrict"],
        ["PAYMENTS_SUBDISTRICT_CONTAINS_MATHEMATICAL_SYMBOLS", "subdistrict"]
    ];

function Is(e) {
    return e.map(([t]) => t)
}
const Cs = Is(Ts),
    $t = Is(ys),
    oa = {
        address1: ["streetName", "streetNumber"],
        address2: ["line2", "neighborhood", "district", "subdistrict"]
    };

function Ns(e) {
    return new Map(e)
}
const Id = Ns(Ts),
    Cd = Ns(ys),
    Zh = new Set(["BUYER_IDENTITY_MISSING_CONTACT_METHOD", "DELIVERY_ADDRESS_REQUIRED", "DELIVERY_FIRST_NAME_INVALID", "DELIVERY_FIRST_NAME_REQUIRED", "DELIVERY_FIRST_NAME_TOO_LONG", "DELIVERY_FIRST_NAME_CONTAINS_EMOJIS", "DELIVERY_FIRST_NAME_CONTAINS_HTML_TAGS", "DELIVERY_FIRST_NAME_CONTAINS_URL", "DELIVERY_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_LAST_NAME_INVALID", "DELIVERY_LAST_NAME_REQUIRED", "DELIVERY_LAST_NAME_TOO_LONG", "DELIVERY_LAST_NAME_CONTAINS_EMOJIS", "DELIVERY_LAST_NAME_CONTAINS_HTML_TAGS", "DELIVERY_LAST_NAME_CONTAINS_URL", "DELIVERY_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_COMPANY_INVALID", "DELIVERY_COMPANY_REQUIRED", "DELIVERY_COMPANY_TOO_LONG", "DELIVERY_COMPANY_CONTAINS_EMOJIS", "DELIVERY_COMPANY_CONTAINS_HTML_TAGS", "DELIVERY_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_ADDRESS1_INVALID", "DELIVERY_ADDRESS1_REQUIRED", "DELIVERY_ADDRESS1_TOO_LONG", "DELIVERY_ADDRESS1_CONTAINS_EMOJIS", "DELIVERY_ADDRESS1_CONTAINS_HTML_TAGS", "DELIVERY_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", ...Cs, "DELIVERY_ADDRESS2_INVALID", "DELIVERY_ADDRESS2_REQUIRED", "DELIVERY_ADDRESS2_TOO_LONG", "DELIVERY_ADDRESS2_CONTAINS_EMOJIS", "DELIVERY_ADDRESS2_CONTAINS_HTML_TAGS", "DELIVERY_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_CITY_INVALID", "DELIVERY_CITY_REQUIRED", "DELIVERY_CITY_TOO_LONG", "DELIVERY_CITY_CONTAINS_EMOJIS", "DELIVERY_CITY_CONTAINS_HTML_TAGS", "DELIVERY_CITY_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_COUNTRY_REQUIRED", "DELIVERY_OPTIONS_PHONE_NUMBER_INVALID", "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED", "DELIVERY_PHONE_NUMBER_INVALID", "DELIVERY_PHONE_NUMBER_REQUIRED", "DELIVERY_PHONE_NUMBER_CONTAINS_EMOJIS", "DELIVERY_PHONE_NUMBER_CONTAINS_HTML_TAGS", "DELIVERY_PHONE_NUMBER_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "DELIVERY_POSTAL_CODE_INVALID", "DELIVERY_POSTAL_CODE_REQUIRED", "DELIVERY_POSTAL_CODE_CONTAINS_EMOJIS", "DELIVERY_POSTAL_CODE_CONTAINS_HTML_TAGS", "DELIVERY_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE", "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY", "DELIVERY_ZONE_NOT_FOUND", "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY"]),
    Nd = new Set(["PAYMENTS_FIRST_NAME_REQUIRED", "PAYMENTS_FIRST_NAME_TOO_LONG", "PAYMENTS_FIRST_NAME_CONTAINS_EMOJIS", "PAYMENTS_FIRST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_FIRST_NAME_CONTAINS_URL", "PAYMENTS_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_LAST_NAME_REQUIRED", "PAYMENTS_LAST_NAME_TOO_LONG", "PAYMENTS_LAST_NAME_CONTAINS_EMOJIS", "PAYMENTS_LAST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_LAST_NAME_CONTAINS_URL", "PAYMENTS_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_COMPANY_REQUIRED", "PAYMENTS_COMPANY_TOO_LONG", "PAYMENTS_COMPANY_CONTAINS_EMOJIS", "PAYMENTS_COMPANY_CONTAINS_HTML_TAGS", "PAYMENTS_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ADDRESS1_REQUIRED", "PAYMENTS_ADDRESS1_TOO_LONG", "PAYMENTS_ADDRESS1_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS1_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", ...$t, "PAYMENTS_ADDRESS2_REQUIRED", "PAYMENTS_ADDRESS2_TOO_LONG", "PAYMENTS_ADDRESS2_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS2_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_CITY_REQUIRED", "PAYMENTS_CITY_TOO_LONG", "PAYMENTS_CITY_CONTAINS_EMOJIS", "PAYMENTS_CITY_CONTAINS_HTML_TAGS", "PAYMENTS_CITY_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_COUNTRY_REQUIRED", "PAYMENTS_PHONE_NUMBER_REQUIRED", "PAYMENTS_PHONE_NUMBER_CONTAINS_EMOJIS", "PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "PAYMENTS_POSTAL_CODE_REQUIRED", "PAYMENTS_POSTAL_CODE_CONTAINS_EMOJIS", "PAYMENTS_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE", "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY", "PAYMENTS_ZONE_NOT_FOUND", "PAYMENTS_ZONE_REQUIRED_FOR_COUNTRY"]),
    e1 = new Set(["BUYER_IDENTITY_MISSING_CONTACT_METHOD", ...Nd]),
    t1 = new Set(["LOCALIZATION_EXTENSION_FIELD_ERROR"]),
    n1 = 20,
    a1 = 2,
    Pd = new Map([
        ["neighborhood_label", "neighborhood"],
        ["district_label", "district"],
        ["subdistrict_label", "subdistrict"],
        ["commune_label", "commune"],
        ["colony_label", "colony"],
        ["barangay_label", "barangay"],
        ["ward_label", "ward"],
        ["block_label", "block"],
        ["area_label", "area"]
    ]);

function fn({
    localizationKey: e,
    fallback: t
}) {
    return `address_${Pd.get(e??"")??t}_blank`
}
const Od = (e, t) => {
        const n = it(e, "ONE_TIME_PURCHASE"),
            a = n ? .status === "available" ? n : void 0,
            r = a ? .methods ? .find(s => s.handle === a.selectedDeliveryMethodHandle);
        return t === "billing" && r ? .methodType === "PICKUP_POINT"
    },
    Rd = $e(null);
class Md extends Error {
    constructor() {
        super("No app context is available; something has gone terribly wrong."), this.name = "MissingAppContextError"
    }
}

function q() {
    const e = _t(Rd);
    if (!e) throw new Md;
    return e
}

function wd(e, ...t) {
    const n = q();
    return Ei(() => new e(n, ...t))
}
class Ld extends le {
    constructor() {
        super(...arguments), this.name = "ShopPayError"
    }
}
class r1 extends le {
    constructor(t) {
        super("Checkout identifier is missing", t), this.name = "ShopPayCheckoutIdentifierMissingError"
    }
}
class s1 extends Ld {
    constructor() {
        super(...arguments), this.name = "ShopPayRenderError"
    }
}
let Dd = class extends Error {
    constructor() {
        super(...arguments), this.name = "MissingContextError"
    }
};

function gt(e) {
    const t = $e(null);
    return t.displayName = e, t
}

function ia(e) {
    const t = _t(e);
    if (t == null) throw new Dd(`Required context ${e.displayName} was not found`);
    return t
}
const kd = gt("FieldValidationBehaviourContext");
var xd = (e => (e.Control = "control", e.UnauthenticatedCheckout = "unauthenticated_checkout", e))(xd || {}),
    jd = (e => (e.Control = "control", e.Treatment = "treatment", e))(jd || {}),
    Bd = (e => (e.Control = "control", e.Treatment = "treatment", e))(Bd || {}),
    Ud = (e => (e.Control = "control", e.Treatment = "treatment", e))(Ud || {}),
    Fd = (e => (e.Control = "control", e.VariantA = "variant_a", e.VariantB = "variant_b", e.VariantC = "variant_c", e))(Fd || {}),
    lt = (e => (e.Control = "control", e.Treatment1 = "treatment_1", e.Treatment2 = "treatment_2", e.Treatment4 = "treatment_4", e))(lt || {}),
    Yd = (e => (e.Control = "control", e.Phone = "phone", e.Bar = "bar", e.LegacyCopy = "legacy_copy", e))(Yd || {}),
    Hd = (e => (e.Control = "control", e.Treatment = "treatment", e))(Hd || {});

function Vd(e) {
    const t = e ? .find(({
        clientHandle: n
    }) => n === Ii) ? .variant;
    return Object.values(lt).find(n => n === t) ? ? null
}

function Gd(e) {
    switch (e) {
        case lt.Treatment1:
            return "full_express_agreement";
        case lt.Treatment4:
            return "explicit_modal";
        default:
            return
    }
}

function i1({
    hasSubscription: e,
    isApplePayAvailable: t,
    variant: n
}) {
    if (!(!e || !t)) return Gd(n)
}

function zd(e) {
    return e === lt.Treatment2
}

function Wd({
    isApplePaySubscriptionsDecelerationActive: e,
    isApplePaySubscriptionReviewLayoutSupported: t,
    hasSubscriptionReviewQueryParam: n,
    isABTestActive: a,
    variant: r,
    isCaliforniaBillingOrShippingAddress: s
}) {
    return e && t && n && qd({
        isABTestActive: a,
        variant: r,
        isCaliforniaBillingOrShippingAddress: s
    })
}

function d1({
    experiments: e,
    ...t
}) {
    return Wd({ ...t,
        variant: Vd(e)
    })
}

function qd({
    isABTestActive: e,
    variant: t,
    isCaliforniaBillingOrShippingAddress: n
}) {
    return n || !e || zd(t)
}

function l1(e) {
    return e.hasFlagEnabled(Pi) || e.hasFlagEnabled(Oi)
}

function Kd(e, t) {
    const n = a => a ? .zoneCode === "CA" || a ? .zoneCode === "US-CA";
    return e ? .countryCode === "US" && n(e) || t ? .countryCode === "US" && n(t)
}
const u1 = "checkout_queue_token",
    c1 = gt("ThrottleContextContext");

function Xd() {
    const {
        client: e
    } = q();
    return e.unstable_getSerialization("queueToken")
}
const $d = Ai,
    Qd = $d(({
        checkout: e,
        graphql: {
            coreGraphql: t
        }
    }, {
        queueToken: n,
        serializedReceipt: a,
        sessionFinished: r
    }) => {
        const s = t.query(Ui, {
            variables: {
                checkpointData: e.checkpointToken.peek() ? ? null,
                queueToken: n ? ? null
            },
            skip: r === void 0 || r || !!(a ? .exists && a ? .inProgress && a ? .status !== "action_required")
        });
        return {
            context: Q(() => ({
                data: s.data.value ? ? void 0,
                loading: s.loading.value
            })),
            data: s.data,
            error: s.error
        }
    });
class Jd extends Error {
    constructor() {
        super(...arguments), this.name = "InitialNegotiationError"
    }
}
const Zd = gt("NegotiatorContext");

function pt() {
    return ia(Zd)
}

function el() {
    return pt().context
}

function Ps() {
    return pt()
}

function m1() {
    const e = pt();
    return be(() => e.getNegotiationInput(), [e])
}

function tl() {
    const {
        observability: e
    } = q();
    return be((t, n) => {
        const r = n ? .errors ? .find(s => s ? .code === "SESSION_SOURCE_MISSING") && n ? .result ? .__typename === "NegotiationResultFailed" && (!t ? .exists || t ? .status === "failed");
        return r && (e.counter({
            name: "negotiation_session_source_missing",
            value: 1
        }), e.log("negotiation_session_source_missing", "An error occurred fetching negotation result due to missing source")), r
    }, [e])
}
const nl = gt("InitialNegotiationContext");

function _1({
    children: e
}) {
    const {
        client: t,
        observability: n,
        url: a,
        router: r
    } = q(), s = t.unstable_getSerialization("sessionFinished"), o = t.unstable_getSerialization("receipt"), i = Xd(), {
        context: d,
        data: l,
        error: u
    } = wd(Qd, {
        queueToken: i,
        serializedReceipt: o,
        sessionFinished: s
    }), m = tl();
    if (u.value) throw n.leaveErrorBreadcrumb("InitialNegotiation: serialized data", {
        sessionFinished: s,
        receiptExist: !!o ? .exists,
        receiptInProgress: !!o ? .inProgress,
        receiptStatus: o ? .status
    }), new Jd(`Error loading cart from negotiateFromSessionQuery: ${u.value.message}`);
    return m(o, l.value ? .session ? .negotiate) ? (typeof window > "u" ? r.redirect(a.cart()) : window.location.replace(a.cart()), null) : Zn(nl.Provider, {
        value: d.value,
        children: e
    })
}

function St() {
    return Ps().parts
}

function al(e) {
    const t = Ps(),
        n = ke(e);
    n.current = e, ft(() => t.intercept((...a) => n.current(...a)), [t])
}

function f1() {
    const {
        shippingAddress: e,
        billingAddress: t
    } = St();
    return C(() => Kd(t.value, e.value))
}
const rl = $e(null);

function g1() {
    return Gt()
}

function p1(e, t, n, a = Lt.UnknownReason, r) {
    const {
        observability: s
    } = q(), o = ke(n), i = ke(r);
    o.current = n, i.current = r, al(be(async ({
        reason: d
    }) => {
        if (d === "negotiation") return {
            behavior: "allow"
        };
        if (i.current ? .()) return s.debug("journey_validation_intercepted", "[useJourneyInterceptValidation] Allowing - validation skipped"), {
            behavior: "allow"
        };
        const l = t.value;
        if (typeof l == "string" && l) return s.leaveErrorBreadcrumb("[useJourneyInterceptValidation] Blocking - existing error", {
            error: l
        }), {
            behavior: "block",
            reason: a,
            perform: () => {
                t.value = l
            }
        };
        const u = e.value,
            m = await o.current(u);
        return m ? (s.leaveErrorBreadcrumb("[useJourneyInterceptValidation] Blocking - validation error", {
            validationError: m
        }), {
            behavior: "block",
            reason: a,
            perform() {
                t.value = m
            }
        }) : (s.debug("journey_validation_intercepted", "[useJourneyInterceptValidation] Allowing - validation passed"), {
            behavior: "allow"
        })
    }, [t, e, a, s]))
}

function S1(e, t, n) {
    const a = Gt(!1),
        r = _t(rl),
        s = ia(kd),
        o = C(() => sl(t.value) ? t.value.message : t.value),
        i = ie(() => s(e, o, d => t.value = d, a, n), [o, t, e, a, n, s]);
    return ft(() => {
        if (n) return r ? .registerValidator ? .(e, n)
    }, [r, e, n]), i
}

function $(e) {
    return e != null && e.trim().length !== 0
}

function sl(e) {
    return e != null && typeof e == "object" && "message" in e
}
const ol = /[A-Za-z0-9]+/g,
    il = {
        zip: "postalCode",
        country: "countryCode",
        province: "zoneCode"
    };

function dl({
    country: e,
    editFormat: t,
    addressSettings: n
}) {
    return t.split("_").reduce((r, s) => {
        const o = s.match(ol);
        if (o == null) return r.push({
            id: s,
            fields: []
        }), r;
        const i = o.reduce((d, l) => {
            const u = il[l] || l,
                m = u === "line2" ? "address2" : u;
            return n.isVisible(m, {
                countryCode: e.code
            }) && !ll(m, e) && d.push(u), d
        }, []);
        return i.length > 0 && r.push({
            id: s,
            fields: i
        }), r
    }, [])
}

function Et({
    country: e,
    editFormat: t,
    addressSettings: n
}) {
    return !e || t === void 0 ? [] : dl({
        country: e,
        editFormat: t,
        addressSettings: n
    }).flatMap(({
        fields: a
    }) => a)
}

function ll(e, t) {
    return e === "zoneCode" && t.zones.length === 0
}

function ul(e, t, {
    addressSettings: n,
    countryDetails: a,
    fallbackCountry: r,
    editFormat: s,
    availableCountries: o,
    deliveryNextValue: i,
    isMobilePhoneFieldVisible: d,
    additionalFieldsEnabled: l,
    i18n: u
}) {
    const m = Et({
            country: a ? ? r,
            editFormat: s,
            addressSettings: n
        }),
        c = new Map;
    return (n.isRequired("firstName") || Od(i, t)) && !$(e.firstName) && c.set("firstName", u.translate("field_errors.address_first_name_blank")), n.isRequired("lastName") && !$(e.lastName) && c.set("lastName", u.translate("field_errors.address_last_name_blank")), n.isRequired("company") && !$(e.company) && c.set("company", u.translate("field_errors.address_company_blank")), n.isRequired("address1") && m.includes("address1") && !$(e.address1) && c.set("address1", u.translate("field_errors.address_address1_blank")), n.isRequired("address2") && m.includes("address2") && !$(e.address2) && c.set("address2", u.translate("field_errors.address_address2_blank")), n.isRequired("city") && m.includes("city") && !$(e.city) && c.set("city", u.translate("field_errors.address_city_blank")), n.isRequired("countryCode") && !$(e.countryCode) && c.set("countryCode", u.translate("field_errors.address_country_blank")), o ? .some(_ => _.value === e.countryCode) || c.set("countryCode", u.translate("field_errors.address_country_invalid")), n.isRequired("phone", {
        countryCode: e.countryCode
    }) && !$(e.phone) && !d && c.set("phone", u.translate("field_errors.phone_blank")), a ? .postalCodeRequired && m.includes("postalCode") && !$(e.postalCode) && c.set("postalCode", u.translate("field_errors.address_zip_blank")), a ? .zones && a ? .zones.length > 0 && a ? .formatting.edit.includes("{province}") && !$(e.zoneCode) && c.set("zoneCode", u.translate("field_errors.address_province_blank")), l && (m.includes("streetName") && a ? .streetNameRequired && !$(e.streetName) && c.set("streetName", u.translate("field_errors.address_street_name_blank")), m.includes("streetNumber") && a ? .streetNumberRequired && !$(e.streetNumber) && c.set("streetNumber", u.translate("field_errors.address_street_number_blank")), m.includes("line2") && n.isRequired("address2") && !$(e.line2) && c.set("line2", u.translate("field_errors.address_address2_blank")), m.includes("neighborhood") && a ? .neighborhoodRequired && !$(e.neighborhood) && c.set("neighborhood", u.translate("field_errors", {
        scope: fn({
            localizationKey: a.localizationKeys.neighborhood,
            fallback: "neighborhood"
        })
    })), a ? .districtRequired && m.includes("district") && !$(e.district) && c.set("district", u.translate("field_errors", {
        scope: fn({
            localizationKey: a.localizationKeys.district,
            fallback: "district"
        })
    })), a ? .subdistrictRequired && m.includes("subdistrict") && !$(e.subdistrict) && c.set("subdistrict", u.translate("field_errors", {
        scope: fn({
            localizationKey: a.localizationKeys.subdistrict,
            fallback: "subdistrict"
        })
    }))), c
}

function E1(e) {
    const {
        purchasingCompany: t,
        shippingCountries: n,
        countryDetails: a,
        editFormat: r,
        ...s
    } = e;
    if (!t || !t.location.shippingAddress) return !1;
    if (!a || !r) return !0;
    const o = ee(t.location.shippingAddress);
    return ul(o, "shipping", { ...s,
        countryDetails: a,
        fallbackCountry: a,
        editFormat: r,
        availableCountries: n,
        isMobilePhoneFieldVisible: !1
    }).size === 0
}

function cl({
    district: e,
    line2: t,
    streetName: n,
    streetNumber: a,
    subdistrict: r
}) {
    return e != null || t != null || n != null || a != null || r != null
}

function ml({
    streetName: e,
    streetNumber: t
}) {
    return e != null || t != null
}

function _l({
    district: e,
    line2: t,
    subdistrict: n
}) {
    return e != null || t != null || n != null
}

function fl(e, t) {
    if (!t || !cl(e)) return;
    const {
        district: n,
        line2: a,
        streetName: r,
        streetNumber: s,
        subdistrict: o
    } = e;
    return {
        district: n ? ? void 0,
        line2: a ? ? void 0,
        streetName: r ? ? void 0,
        streetNumber: s ? ? void 0,
        subdistrict: o ? ? void 0
    }
}

function Os({
    address1: e,
    address2: t,
    countryCode: n,
    fields: a,
    extendedAddressMode: r
}) {
    const s = r ? .get(n) === "dedicated",
        o = fl(a, s),
        i = o !== void 0,
        d = i && ml(a),
        l = i && _l(a);
    return {
        address1: d ? void 0 : e,
        address2: l ? void 0 : t,
        extendedFields: o
    }
}

function Bn({
    address1: e = "",
    address2: t,
    city: n,
    company: a,
    countryCode: r,
    firstName: s,
    lastName: o = "",
    postalCode: i,
    zoneCode: d,
    phone: l = "",
    district: u,
    line2: m,
    streetName: c,
    streetNumber: _,
    subdistrict: f
}, b) {
    const {
        extendedFields: E,
        ...I
    } = Os({
        address1: e,
        address2: t,
        countryCode: r,
        fields: {
            district: u,
            line2: m,
            streetName: c,
            streetNumber: _,
            subdistrict: f
        },
        extendedAddressMode: b ? .extendedAddressMode
    });
    return { ...I,
        city: n ? ? "",
        countryCode: r || "ZZ",
        postalCode: i,
        company: a,
        firstName: s,
        lastName: o,
        zoneCode: d,
        phone: l,
        extendedFields: E
    }
}
var gl = (e => (e.SourceToken = "cartToken", e.TrackedSourceId = "trackedSourceId", e.TrackedCompleteOrderSourceId = "trackedCompleteOrderSourceId", e.ExtensionStorage = "extensionStorage", e.PlacementReference = "placementReference", e.PayPal = "payPal", e.GooglePay = "googlePay", e.AmazonPay = "amazonPay", e.ApplePay = "applePay", e.LastSeenErrorReceiptId = "lastSeenErrorReceiptId", e.ShopPayVerification = "shopPayVerification", e.ShopPaySessionToken = "shopPaySessionToken", e.ShopPayRememberMeOptOut = "shopPayRememberMeOptOut", e.ShopPayExternalPaymentConfirmedHint = "shopPayExternalPaymentConfirmedHint", e.ExtensionSkeletonData = "extensionSkeletonData", e.Metafields = "metafields", e.LastSeenCaptchaRequestedErrorReceiptId = "lastSeenCaptchaRequestedErrorReceiptId", e.PostPurchaseInquiryStatus = "postPurchaseInquiryStatus", e.ExternalDeliveryIds = "externalDeliveryIds", e.SetShippingAddressAsDefault = "setShippingAddressAsDefault", e.ShopPayArtifact = "shopPayArtifact", e))(gl || {});

function A1(e, t, {
    strict: n = !1
} = {}) {
    return n && e.length !== t.length ? !1 : e.every(([a, r]) => {
        const s = t.find(([o]) => a === o);
        return s == null ? !n : s[1] === r
    })
}

function v1({
    sourceId: e
}) {
    return {
        id: e
    }
}

function pl({
    sourceId: e,
    checkoutSessionIdentifier: t
}) {
    return {
        id: e,
        ...t && {
            checkoutSessionIdentifier: t
        }
    }
}

function Sl(e) {
    let t = 0;
    return e.split("").forEach(n => {
        t = (t << 5) - t + n.charCodeAt(0), t |= 0
    }), t.toString()
}
const Nt = "idempotency-token";

function Rs(e) {
    return pl(e)
}

function h1(e, t) {
    let n;
    const a = Rs(e);
    return t ? .syncWithStorage(Nt, {
        scope: a
    }), n = t ? .get(Nt, {
        scope: a
    }), n || (n = El(e.sourceId), t ? .createUpdate(Nt, {
        scope: a
    }) ? .(n)), n
}

function El(e) {
    return `${e}-${Math.random().toString(36).slice(2)}`
}

function b1(e, t) {
    e.remove(Nt, {
        scope: Rs(t)
    })
}

function Al(e, t) {
    const n = t.trim();
    if (!e || !n) return e;
    const a = n.toLowerCase();
    let r = e;
    for (;;) {
        const s = r.trimEnd();
        if (!s.toLowerCase().endsWith(a)) break;
        const o = s.slice(0, s.length - n.length);
        if (!/,\s*$/.test(o)) break;
        const i = o.replace(/,\s*$/, "").trimEnd();
        if (!i) return e;
        r = i
    }
    return r
}
var Za;
const vl = /_+/g,
    Ms = /^\s?_+|_\s?$/g;

function hl(e, t, n = [], a = "short", r = "short") {
    const s = Tl(t.formatting.show, n, e),
        o = bl(s, n),
        i = () => a === "explicit" ? t.name : e.countryCode;

    function d() {
        if (r === "explicit") {
            const l = t.zones.find(u => u.code === e.zoneCode);
            if (l) return l.name
        }
        return e.zoneCode ? ? ""
    }
    return o.replace(/}{/g, "} {").replace(/\{([^}]+)\}/g, (l, u) => {
        switch (u) {
            case "zip":
                return e.postalCode ? ? "";
            case "country":
                return i() ? ? "";
            case "province":
                return d();
            default:
                return e[u] ? ? ""
        }
    }).replace(Ms, "").split("_").map(l => l.trim()).filter(Boolean)
}

function T1(e, t, n = [], a = !1, r = "short", s = "short") {
    return hl(e, t, n, r, s).join(a ? `
` : ", ").trim()
}

function bl(e, t = []) {
    const n = yl(t);
    return e.replace(n, "").replace(vl, "_").replace(Ms, "")
}

function Tl(e, t, n) {
    let a = e;
    return (t.includes("postalCode") || !n.postalCode) && (a = a.replace("〒{zip}", "")), (t.includes("lastName") && t.includes("firstName") || !(n.lastName || n.firstName)) && (a = a.replace("{firstName}様", "")), a
}

function yl(e = []) {
    const t = e.map(n => `{${Il(n)}}`).join("|");
    return new RegExp(t, "g")
}

function Il(e) {
    switch (e) {
        case "countryCode":
            return "country";
        case "postalCode":
            return "zip";
        case "zoneCode":
            return "province";
        default:
            return e
    }
}

function Cl(e, t) {
    return !!(e.countryCode && t.isVisible("address2", {
        countryCode: e.countryCode
    }))
}

function er(e) {
    return e != null && e.trim().length > 0
}

function y1(e, t, n) {
    const s = (e.countryCode === "BR" ? n ? ? (e.address1 ? me("BR", e.address1, !0) : void 0) : void 0) ? .line2 ? .trim();
    return s && (!Cl(e, t) || er(e.address2) || er(e.line2)) ? {
        address: e,
        shouldPreserveAddress1: !0
    } : {
        address: { ...e,
            address1: vs(e),
            ...s ? {
                address2: dt({
                    countryCode: "BR",
                    line2: s,
                    neighborhood: ""
                }) ? ? s,
                line2: s
            } : {}
        },
        prefilledLine2: s
    }
}

function I1(e, t, n) {
    return n.every(a => Kt(e[a], t[a]))
}
const Nl = new Set(["coordinates", "name", "oneTimeUse", "handle"]),
    Pl = new Set(Object.values(oa).flat());

function Ol(e) {
    return !Nl.has(e)
}

function C1({
    address: e,
    addressSettings: t,
    countryDetails: n
}) {
    if (!e) return !1;
    const {
        isRequired: a
    } = t, r = e.countryCode, s = n && n.code === r && !n.isFallback ? n : void 0, o = s ? new Set(Et({
        country: s,
        editFormat: s.formatting.edit,
        addressSettings: t
    })) : void 0;
    for (const i of Object.keys(e)) {
        if (!Ol(i) || Pl.has(i) || o && !o.has(i)) continue;
        if ((i === "postalCode" && s ? s.postalCodeRequired : a(i, {
                countryCode: r
            })) && (e[i] == null || e[i] ? .length === 0)) return !1
    }
    return !0
}

function N1(e, t, n, a, r) {
    return t.find(s => {
        const o = Rl(n, a, r, s.address, e);
        return fd(s.address, e, o)
    })
}

function Rl(e, t, n, a, r) {
    const s = [];
    return t ? .postalCodeRequired || Ye(s, "postalCode"), Pt(e, t, n, "zoneCode") || Ye(s, "zoneCode"), Pt(e, t, n, "district") || Ye(s, "district"), Pt(e, t, n, "subdistrict") || Ye(s, "subdistrict"), a && r && (tr(a, r, "district") && Ye(s, "district"), tr(a, r, "subdistrict") && Ye(s, "subdistrict")), s
}

function Ye(e, t) {
    e.includes(t) || e.push(t)
}

function tr(e, t, n) {
    return !X(e[n]) && X(t[n]) && ra(e, t) && !X(xt(e)) && !X(xt(t))
}

function P1(e, t) {
    return e !== void 0 && Xt(e, t, ["firstName", "phone"])
}

function O1(e) {
    return !e || Object.keys(e).length === 0 || Object.values(e).every(X)
}

function R1(e) {
    if (!e || !Object.keys(e).length) return !1;
    const t = new Set(["countryCode", "zoneCode"]);
    for (const n in e)
        if (e[n] !== void 0 && !t.has(n)) return !0;
    return !1
}
const ws = new Set(["streetName", "streetNumber", "neighborhood", "line2"]);

function Ml(e) {
    return {
        handle: N(e ? .handle),
        name: N(e.name),
        firstName: N(e.firstName),
        lastName: N(e.lastName),
        company: N(e.company),
        address1: N(e.address1),
        address2: N(e.address2),
        city: N(e.city),
        zoneCode: N(e.zoneCode),
        postalCode: N(e.postalCode),
        countryCode: N(e.countryCode),
        coordinates: N(e.coordinates),
        phone: N(e.phone),
        oneTimeUse: N(e ? .oneTimeUse),
        district: N(e.district),
        subdistrict: N(e.subdistrict)
    }
}

function nr(e, t, n, a, r) {
    const s = n === "streetName" ? "streetNumber" : "streetName",
        o = Q(() => {
            const i = me(e.value ? ? "", t.value ? ? "");
            return i ? i[n] ? ? "" : void 0
        });
    return new ye(o, i => {
        const d = e.peek(),
            l = me(d ? ? "", t.value ? ? "");
        if (!l) return;
        const u = i ? .trim() ? ? "",
            m = l[s] ? .trim() ? ? "",
            c = n === "streetName" ? u : m,
            _ = n === "streetName" ? m : u,
            f = a ? .peek() === "concatenated" ? Al(c, _) : c,
            b = qt({
                countryCode: d ? ? "",
                streetName: f,
                streetNumber: _
            });
        t.value = b ? ? i, f !== c && b != null && r({
            streetName: f,
            countryCode: d
        })
    })
}

function ar(e, t, n) {
    const a = n === "neighborhood" ? "line2" : "neighborhood",
        r = Q(() => {
            const s = Me(e.value ? ? "", t.value ? ? "");
            return s ? s[n] ? ? "" : void 0
        });
    return new ye(r, s => {
        const o = Me(e.value ? ? "", t.value ? ? "");
        o && (t.value = dt({
            countryCode: e.value ? ? "",
            [n]: s ? .trim() ? ? "",
            [a]: o[a] ? .trim() ? ? ""
        }) ? ? s)
    })
}

function wl(e, t, n) {
    return {
        streetName: nr(e.countryCode, e.address1, "streetName", t, n),
        streetNumber: nr(e.countryCode, e.address1, "streetNumber", t, n),
        neighborhood: ar(e.countryCode, e.address2, "neighborhood"),
        line2: ar(e.countryCode, e.address2, "line2")
    }
}

function bt(e, t, n, a) {
    const r = Q(() => e.value === "dedicated" ? t.value : n.value);
    return new ye(r, s => {
        e.peek() === "dedicated" ? ve(() => {
            t.value = s, a()
        }) : n.value = s
    })
}

function Ll(e, t, n, a) {
    const r = g => g != null && g.trim().length !== 0 ? g : void 0,
        s = me(n.countryCode ? ? "", n.address1 ? ? "", !0),
        o = Me(n.countryCode ? ? "", n.address2 ? ? ""),
        i = N("streetName" in n ? r(n.streetName) : r(s ? .streetName)),
        d = N("streetNumber" in n ? r(n.streetNumber) : r(s ? .streetNumber)),
        l = N("line2" in n ? r(n.line2) : r(o ? .line2 ? ? s ? .line2)),
        u = N("neighborhood" in n ? r(n.neighborhood) : r(o ? .neighborhood)),
        m = g => g in n && r(n[g]) === void 0,
        c = m("streetName") || m("streetNumber"),
        _ = m("line2") || m("neighborhood"),
        f = new ye(Q(() => e.countryCode.value), g => {
            const p = e.countryCode.peek();
            if (g === p) {
                e.countryCode.value = g;
                return
            }
            ve(() => {
                i.value = void 0, d.value = void 0, l.value = void 0, u.value = void 0, e.district.value = void 0, e.subdistrict.value = void 0, e.countryCode.value = g
            })
        }),
        b = e.address1.peek(),
        E = e.address2.peek();
    let I = !1,
        h = E;
    e.address2.subscribe(g => {
        g !== h && (h = g, a.peek() !== "dedicated" && (I = !0))
    });
    let v = a.peek();
    a.subscribe(g => {
        const p = v;
        if (v = g, p === "dedicated" || g !== "dedicated") return;
        const y = e.countryCode.peek() ? ? "",
            M = e.address1.peek(),
            R = e.address2.peek(),
            U = I || R !== E,
            H = M !== b || i.peek() === void 0 && d.peek() === void 0 && !c,
            k = U || l.peek() === void 0 && u.peek() === void 0 && !_;
        !H && !k || ve(() => {
            const A = H || k ? me(y, M ? ? "", !0) : void 0;
            if (H && (i.value = r(A ? .streetName), d.value = r(A ? .streetNumber)), k) {
                const j = Me(y, R ? ? "");
                l.value = r(j ? .line2 ? ? (U ? void 0 : A ? .line2)), u.value = r(j ? .neighborhood)
            }
        })
    });
    const B = () => {
            const g = qt({
                countryCode: e.countryCode.peek() ? ? "",
                streetName: i.peek() ? .trim() ? ? "",
                streetNumber: d.peek() ? .trim() ? ? ""
            });
            g != null && (e.address1.value = g)
        },
        S = () => {
            const g = dt({
                countryCode: e.countryCode.peek() ? ? "",
                line2: l.peek() ? .trim() ? ? "",
                neighborhood: u.peek() ? .trim() ? ? ""
            });
            g != null && (e.address2.value = g)
        },
        T = g => {
            if (a.peek() !== "dedicated") return;
            const p = "address1" in g,
                y = g.streetName !== void 0,
                M = g.streetNumber !== void 0,
                R = "address2" in g,
                U = g.line2 !== void 0,
                H = g.neighborhood !== void 0;
            if (p || y || M) {
                const k = me(g.countryCode ? ? e.countryCode.peek() ? ? "", g.address1 ? ? e.address1.peek() ? ? "", !0);
                i.value = r(y ? g.streetName : k ? .streetName), d.value = r(M ? g.streetNumber : k ? .streetNumber), (y || M) && B(), !R && l.peek() === void 0 && u.peek() === void 0 && (l.value = r(k ? .line2))
            }
            if (R || U || H) {
                const k = Me(g.countryCode ? ? e.countryCode.peek() ? ? "", g.address2 ? ? e.address2.peek() ? ? "");
                l.value = r(U ? g.line2 : k ? .line2), u.value = r(H ? g.neighborhood : k ? .neighborhood), (U || H) && S()
            }
        };
    return {
        fields: {
            streetName: bt(a, i, t.streetName, B),
            streetNumber: bt(a, d, t.streetNumber, B),
            neighborhood: bt(a, u, t.neighborhood, S),
            line2: bt(a, l, t.line2, S),
            countryCode: f
        },
        reseedFromUpdate: T
    }
}

function Dl(e) {
    return Q(() => ({
        handle: e.handle.value,
        name: e.name.value,
        firstName: e.firstName.value,
        lastName: e.lastName.value,
        company: e.company.value,
        address1: e.address1.value,
        streetName: e.streetName.value,
        streetNumber: e.streetNumber.value,
        address2: e.address2.value,
        line2: e.line2.value,
        neighborhood: e.neighborhood.value,
        city: e.city.value,
        zoneCode: e.zoneCode.value,
        postalCode: e.postalCode.value,
        countryCode: e.countryCode.value,
        coordinates: e.coordinates.value,
        phone: e.phone.value,
        oneTimeUse: e.oneTimeUse.value,
        district: e.district.value,
        subdistrict: e.subdistrict.value
    }))
}

function kl(e, t) {
    return n => {
        ve(() => {
            "countryCode" in n && (e.countryCode.value = n.countryCode);
            for (const [a, r] of Object.entries(n)) {
                if (a === "countryCode" || ws.has(a)) continue;
                const s = e[a];
                s && (s.value = r)
            }
            t && t(n)
        })
    }
}
const xl = ["handle", "name", "firstName", "lastName", "company", "address1", "address2", "city", "zoneCode", "postalCode", "countryCode", "coordinates", "phone", "oneTimeUse", "district", "subdistrict"];

function jl(e) {
    const t = {};
    for (const n of xl) t[n] = N(e[n]);
    return t
}

function Bl(e, t) {
    return Q(() => {
        const n = new Set;
        for (const [a, r] of Object.entries(e)) {
            if (ws.has(a)) continue;
            const s = t[a];
            s && r.value !== s.value && n.add(a)
        }
        return n
    })
}
class Ul extends ye {
    constructor(t, n = {}) {
        const a = Ml(t),
            r = n.extendedAddressMode,
            s = r ? Q(() => r.get(a.countryCode.value)) : null,
            o = N(),
            i = wl(a, s, _ => {
                o.value = _
            }),
            d = s ? Ll(a, i, t, s) : null,
            l = d ? .fields ? ? i,
            u = { ...a,
                ...l
            },
            m = Dl(u),
            c = kl(u, d ? .reseedFromUpdate ? ? null);
        super(m, c, u), this[Za] = !0, this.#e = jl(t), this.dirtyFields = Bl(u, this.#e), this.streetNameCorrection = o
    }#
    e;
    [(Za = hs, bs)](t) {
        const n = t ? ? Object.keys(this.#e);
        ve(() => {
            for (const a of n) {
                const r = this.#e[a],
                    s = this.fields[a];
                r && s && (r.value = s.peek())
            }
        })
    }
}

function M1(e, t) {
    return new Ul(e, t.extendedAddressMode === null ? void 0 : {
        extendedAddressMode: t.extendedAddressMode
    })
}

function w1(e, t) {
    Sd(e) && e[bs](t)
}
const L1 = () => aa({
        address1: void 0,
        address2: void 0,
        city: void 0,
        countryCode: void 0,
        postalCode: void 0,
        zoneCode: void 0,
        phone: void 0,
        streetName: void 0,
        streetNumber: void 0,
        neighborhood: void 0,
        line2: void 0,
        district: void 0,
        subdistrict: void 0
    }),
    D1 = e => e !== null && typeof e == "object" && "origin" in e && e.origin === "validation-api",
    Fl = {
        GB: "United Kingdom",
        AX: "Åland Islands",
        AL: "Albania",
        AD: "Andorra",
        AM: "Armenia",
        AT: "Austria",
        BY: "Belarus",
        BE: "Belgium",
        BA: "Bosnia & Herzegovina",
        BV: "Bouvet Island",
        BG: "Bulgaria",
        HR: "Croatia",
        CY: "Cyprus",
        CZ: "Czechia",
        DK: "Denmark",
        EE: "Estonia",
        FO: "Faroe Islands",
        FI: "Finland",
        FR: "France",
        GE: "Georgia",
        DE: "Germany",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GP: "Guadeloupe",
        GG: "Guernsey",
        VA: "Vatican City",
        HU: "Hungary",
        IS: "Iceland",
        IE: "Ireland",
        IM: "Isle of Man",
        IT: "Italy",
        JE: "Jersey",
        XK: "Kosovo",
        LV: "Latvia",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MT: "Malta",
        YT: "Mayotte",
        MD: "Moldova",
        MC: "Monaco",
        ME: "Montenegro",
        NL: "Netherlands",
        MK: "North Macedonia",
        NO: "Norway",
        PL: "Poland",
        PT: "Portugal",
        RE: "Réunion",
        RO: "Romania",
        SM: "San Marino",
        RS: "Serbia",
        SK: "Slovakia",
        SI: "Slovenia",
        ES: "Spain",
        SJ: "Svalbard & Jan Mayen",
        SE: "Sweden",
        CH: "Switzerland",
        TR: "Turkey",
        UA: "Ukraine"
    };

function k1(e) {
    return e === void 0 ? !0 : Fl[e] !== void 0
}

function x1(e) {
    return !!(e ? .coords ? .latitude && e ? .coords ? .longitude)
}

function j1(e) {
    return Sl(JSON.stringify(e))
}

function Yl({
    countryDetails: e,
    format: t,
    addressSettings: n
}) {
    const a = Et({
            country: e,
            editFormat: t,
            addressSettings: n
        }),
        r = [];
    return Object.values(oa).forEach(s => {
        const o = a.find(i => s.includes(i));
        o && r.push(o)
    }), r
}

function Hl({
    countryDetails: e,
    format: t,
    addressSettings: n
}) {
    const a = Yl({
            countryDetails: e,
            format: t,
            addressSettings: n
        }),
        r = s => {
            const o = oa[s];
            return o.some(d => a ? .includes(d)) ? o : []
        };
    return (s, o, i) => r(o).forEach(d => {
        const l = a ? .includes(d) ? i : " ";
        s.set(d, l)
    })
}

function B1({
    addressType: e,
    violations: t,
    countryDetails: n,
    format: a,
    addressSettings: r
}) {
    const s = Hl({
            countryDetails: n,
            format: a,
            addressSettings: r
        }),
        o = Et({
            country: n,
            editFormat: a,
            addressSettings: r
        }),
        i = new Map,
        d = e === "shipping" || e === "shipping_address",
        l = !d;
    for (const u of t) {
        if (u.__typename !== "UnprocessableTermViolation" && u.__typename !== "CustomerAddressModificationError") continue;
        const {
            code: m,
            localizedMessage: c,
            nonLocalizedMessage: _
        } = u, f = c ? ? _, b = d ? Id.get(m) : Cd.get(m);
        if (b) {
            o.includes(b) && i.set(b, f);
            continue
        }
        switch (m) {
            case "DELIVERY_FIRST_NAME_REQUIRED":
            case "DELIVERY_FIRST_NAME_TOO_LONG":
            case "DELIVERY_FIRST_NAME_CONTAINS_EMOJIS":
            case "DELIVERY_FIRST_NAME_CONTAINS_HTML_TAGS":
            case "DELIVERY_FIRST_NAME_CONTAINS_URL":
            case "DELIVERY_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && i.set("firstName", f);
                    break
                }
            case "DELIVERY_LAST_NAME_REQUIRED":
            case "DELIVERY_LAST_NAME_TOO_LONG":
            case "DELIVERY_LAST_NAME_CONTAINS_EMOJIS":
            case "DELIVERY_LAST_NAME_CONTAINS_HTML_TAGS":
            case "DELIVERY_LAST_NAME_CONTAINS_URL":
            case "DELIVERY_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && i.set("lastName", f);
                    break
                }
            case "DELIVERY_COMPANY_REQUIRED":
            case "DELIVERY_COMPANY_TOO_LONG":
            case "DELIVERY_COMPANY_CONTAINS_EMOJIS":
            case "DELIVERY_COMPANY_CONTAINS_HTML_TAGS":
            case "DELIVERY_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && i.set("company", f);
                    break
                }
            case "DELIVERY_ADDRESS1_REQUIRED":
            case "DELIVERY_ADDRESS1_TOO_LONG":
            case "DELIVERY_ADDRESS1_CONTAINS_EMOJIS":
            case "DELIVERY_ADDRESS1_CONTAINS_HTML_TAGS":
            case "DELIVERY_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && (i.set("address1", f), s(i, "address1", f));
                    break
                }
            case "DELIVERY_ADDRESS2_REQUIRED":
            case "DELIVERY_ADDRESS2_TOO_LONG":
            case "DELIVERY_ADDRESS2_CONTAINS_EMOJIS":
            case "DELIVERY_ADDRESS2_CONTAINS_HTML_TAGS":
            case "DELIVERY_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && (i.set("address2", f), s(i, "address2", f));
                    break
                }
            case "DELIVERY_PHONE_NUMBER_REQUIRED":
            case "DELIVERY_PHONE_NUMBER_CONTAINS_EMOJIS":
            case "DELIVERY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN":
                {
                    d && i.set("phone", f);
                    break
                }
            case "DELIVERY_POSTAL_CODE_REQUIRED":
            case "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE":
            case "DELIVERY_POSTAL_CODE_CONTAINS_EMOJIS":
            case "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY":
            case "DELIVERY_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && i.set("postalCode", f);
                    break
                }
            case "DELIVERY_ZONE_NOT_FOUND":
            case "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY":
                {
                    d && i.set("zoneCode", f);
                    break
                }
            case "DELIVERY_CITY_REQUIRED":
            case "DELIVERY_CITY_TOO_LONG":
            case "DELIVERY_CITY_CONTAINS_EMOJIS":
            case "DELIVERY_CITY_CONTAINS_HTML_TAGS":
            case "DELIVERY_CITY_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    d && i.set("city", f);
                    break
                }
            case "DELIVERY_COUNTRY_REQUIRED":
                {
                    d && i.set("countryCode", f);
                    break
                }
            case "PAYMENTS_FIRST_NAME_REQUIRED":
            case "PAYMENTS_FIRST_NAME_TOO_LONG":
            case "PAYMENTS_FIRST_NAME_CONTAINS_EMOJIS":
            case "PAYMENTS_FIRST_NAME_CONTAINS_HTML_TAGS":
            case "PAYMENTS_FIRST_NAME_CONTAINS_URL":
            case "PAYMENTS_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && i.set("firstName", f);
                    break
                }
            case "PAYMENTS_LAST_NAME_REQUIRED":
            case "PAYMENTS_LAST_NAME_TOO_LONG":
            case "PAYMENTS_LAST_NAME_CONTAINS_EMOJIS":
            case "PAYMENTS_LAST_NAME_CONTAINS_HTML_TAGS":
            case "PAYMENTS_LAST_NAME_CONTAINS_URL":
            case "PAYMENTS_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && i.set("lastName", f);
                    break
                }
            case "PAYMENTS_COMPANY_REQUIRED":
            case "PAYMENTS_COMPANY_TOO_LONG":
            case "PAYMENTS_COMPANY_CONTAINS_EMOJIS":
            case "PAYMENTS_COMPANY_CONTAINS_HTML_TAGS":
            case "PAYMENTS_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && i.set("company", f);
                    break
                }
            case "PAYMENTS_CITY_REQUIRED":
            case "PAYMENTS_CITY_TOO_LONG":
            case "PAYMENTS_CITY_CONTAINS_EMOJIS":
            case "PAYMENTS_CITY_CONTAINS_HTML_TAGS":
            case "PAYMENTS_CITY_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && i.set("city", f);
                    break
                }
            case "PAYMENTS_COUNTRY_REQUIRED":
                {
                    l && i.set("countryCode", f);
                    break
                }
            case "PAYMENTS_ADDRESS1_REQUIRED":
            case "PAYMENTS_ADDRESS1_TOO_LONG":
            case "PAYMENTS_ADDRESS1_CONTAINS_EMOJIS":
            case "PAYMENTS_ADDRESS1_CONTAINS_HTML_TAGS":
            case "PAYMENTS_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && (i.set("address1", f), s(i, "address1", f));
                    break
                }
            case "PAYMENTS_ADDRESS2_REQUIRED":
            case "PAYMENTS_ADDRESS2_TOO_LONG":
            case "PAYMENTS_ADDRESS2_CONTAINS_EMOJIS":
            case "PAYMENTS_ADDRESS2_CONTAINS_HTML_TAGS":
            case "PAYMENTS_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && (i.set("address2", f), s(i, "address2", f));
                    break
                }
            case "PAYMENTS_PHONE_NUMBER_REQUIRED":
            case "PAYMENTS_PHONE_NUMBER_CONTAINS_EMOJIS":
            case "PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN":
                {
                    l && i.set("phone", f);
                    break
                }
            case "PAYMENTS_POSTAL_CODE_REQUIRED":
            case "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE":
            case "PAYMENTS_POSTAL_CODE_CONTAINS_EMOJIS":
            case "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY":
            case "PAYMENTS_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS":
                {
                    l && i.set("postalCode", f);
                    break
                }
            case "PAYMENTS_ZONE_NOT_FOUND":
            case "PAYMENTS_ZONE_REQUIRED_FOR_COUNTRY":
                {
                    l && i.set("zoneCode", f);
                    break
                }
        }
    }
    return i
}

function U1(e, t, n) {
    return Pt(e, t, n, "zoneCode")
}

function Pt(e, t, n, a) {
    return Et({
        country: t,
        editFormat: n,
        addressSettings: e
    }).includes(a)
}
const Vl = () => window.self !== window.top,
    F1 = "shop_pay_external";

function Gl(e) {
    return e.isExternal
}
const Y1 = ["SHOP_CASH_BALANCE"],
    zl = "direct",
    Ke = "ideal",
    da = "wallet-apple-pay",
    Wl = "shop_pay_checkout_as_guest",
    ql = "optin_pm",
    H1 = "redirect_source",
    V1 = "auto_redirect",
    G1 = "profile_preview_token",
    z1 = "checkout_profile_context",
    Kl = "unauthorized_access",
    W1 = "shop_pay_switch_account",
    q1 = "utm_medium",
    K1 = 10,
    X1 = 255,
    $1 = 200;
var Xl = (e => (e.PromptAllowed = "prompt_allowed", e.True = "true", e))(Xl || {}),
    Un = (e => (e.CheckoutOne = "checkout_one", e.ShopPayExternal = "shop_pay_external", e))(Un || {});
const Q1 = "0bd1648b-c9c2-47fb-b1ca-75ce423d61d0",
    J1 = "login_with_shop_success",
    ut = Object.freeze({
        id: Ke,
        paymentMethod: "IDEAL",
        lastUsedAt: null
    }),
    Ls = Object.freeze({
        id: da,
        paymentMethod: "APPLE_PAY",
        lastUsedAt: null
    });
var Ds = (e => (e.CartPermalink = "cart_permalink", e.CheckoutAutomaticRedirect = "checkout_automatic_redirect", e.CheckoutExtensionSignInWithShop = "checkout_extension_sign_in_with_shop", e.CheckoutPaymentStep = "checkout_payment_step", e.CheckoutUniversalRedirect = "checkout_universal_redirect", e.DirectCheckoutCart = "direct_checkout_cart", e.DirectCheckoutCheckout = "direct_checkout_checkout", e.DirectCheckoutProduct = "direct_checkout_product", e.ShopPayAsPaymentMethod = "checkout_payment_step_regular_pay", e.ShopPayInstallmentsAsPaymentMethod = "checkout_payment_step_installments", e.ShopPaySdk = "shop_pay_sdk", e.ShopPayVerificationModal = "shop_pay_verification_modal", e))(Ds || {});
const $l = {
        AMEX: ["american_express"],
        BANCONTACT: ["bancontact"],
        BOGUS: ["bogus"],
        CARTES_BANCAIRES: ["cartes_bancaires"],
        DANKORT: ["dankort"],
        DINERS_CLUB: ["diners_club"],
        DISCOVER: ["discover"],
        ELO: ["elo"],
        FORBRUGSFORENINGEN: ["forbrugsforeningen"],
        HYPERCARD: ["hypercard"],
        INTERAC: ["interac"],
        JCB: ["jcb"],
        LASER: ["laser"],
        MAESTRO: ["maestro"],
        MASTERCARD: ["master", "masterdebit"],
        RUPAY: ["rupay"],
        UNIONPAY: ["unionpay"],
        VISA: ["visa", "visadebit"],
        VISAELECTRON: ["visaelectron"]
    },
    Ql = Object.entries($l).reduce((e, [t, n]) => (n.forEach(a => {
        e[a] = t
    }), e), {}),
    Z1 = "Shop Pay Progress Button Press",
    eb = "Apple Pay In Shop Pay Button Press";

function tb(e) {
    return Gl(e) && typeof window < "u" && Vl()
}
const nb = {
        AED: 1,
        AFN: 1,
        ALL: 1,
        AMD: 1,
        ANG: 1,
        AOA: 1,
        ARS: 1,
        AUD: 1,
        AWG: 1,
        AZN: 1,
        BAM: 1,
        BBD: 1,
        BDT: 1,
        BGN: 1,
        BHD: 1,
        BIF: 1,
        BMD: 1,
        BND: 1,
        BOB: 1,
        BRL: 1,
        BSD: 1,
        BTN: 1,
        BWP: 1,
        BYN: 1,
        BYR: 1,
        BZD: 1,
        CAD: 1,
        CDF: 1,
        CHF: 1,
        CLP: 1,
        CNY: 1,
        COP: 1,
        CRC: 1,
        CVE: 1,
        CZK: 1,
        DJF: 1,
        DKK: 1,
        DOP: 1,
        DZD: 1,
        EGP: 1,
        ERN: 1,
        ETB: 1,
        EUR: 1,
        FJD: 1,
        FKP: 1,
        GBP: 1,
        GEL: 1,
        GHS: 1,
        GIP: 1,
        GMD: 1,
        GNF: 1,
        GTQ: 1,
        GYD: 1,
        HKD: 1,
        HNL: 1,
        HRK: 1,
        HTG: 1,
        HUF: 1,
        IDR: 1,
        ILS: 1,
        INR: 1,
        IQD: 1,
        IRR: 1,
        ISK: 1,
        JEP: 1,
        JMD: 1,
        JOD: 1,
        JPY: 1,
        KES: 1,
        KGS: 1,
        KHR: 1,
        KID: 1,
        KMF: 1,
        KRW: 1,
        KWD: 1,
        KYD: 1,
        KZT: 1,
        LAK: 1,
        LBP: 1,
        LKR: 1,
        LRD: 1,
        LSL: 1,
        LTL: 1,
        LVL: 1,
        LYD: 1,
        MAD: 1,
        MDL: 1,
        MGA: 1,
        MKD: 1,
        MMK: 1,
        MNT: 1,
        MOP: 1,
        MRU: 1,
        MUR: 1,
        MVR: 1,
        MWK: 1,
        MXN: 1,
        MYR: 1,
        MZN: 1,
        NAD: 1,
        NGN: 1,
        NIO: 1,
        NOK: 1,
        NPR: 1,
        NZD: 1,
        OMR: 1,
        PAB: 1,
        PEN: 1,
        PGK: 1,
        PHP: 1,
        PKR: 1,
        PLN: 1,
        PYG: 1,
        QAR: 1,
        RON: 1,
        RSD: 1,
        RUB: 1,
        RWF: 1,
        SAR: 1,
        SBD: 1,
        SCR: 1,
        SDG: 1,
        SEK: 1,
        SGD: 1,
        SHP: 1,
        SLL: 1,
        SOS: 1,
        SRD: 1,
        SSP: 1,
        STD: 1,
        STN: 1,
        SYP: 1,
        SZL: 1,
        THB: 1,
        TJS: 1,
        TMT: 1,
        TND: 1,
        TOP: 1,
        TRY: 1,
        TTD: 1,
        TWD: 1,
        TZS: 1,
        UAH: 1,
        UGX: 1,
        USD: 1,
        USDC: 1,
        UYU: 1,
        UZS: 1,
        VED: 1,
        VEF: 1,
        VES: 1,
        VND: 1,
        VUV: 1,
        WST: 1,
        XAF: 1,
        XCD: 1,
        XCG: 1,
        XOF: 1,
        XPF: 1,
        XXX: 1,
        YER: 1,
        ZAR: 1,
        ZMW: 1
    },
    Jl = /Shop App\/(?<appVersion>[^/]+)\/(?<platform>[^/]+)\/(?<platformVersion>[^/]+)\/WebView\s?(\((?<annotations>.+)\))?/i,
    Zl = /(\w+)=([^;]+)/gi;

function ks(e) {
    const t = e.fields.reduce((s, {
            key: o,
            value: i
        }) => (s[o] = i, s), {}),
        n = e.addressLineComponents,
        a = n ? .streetName != null || n ? .streetNumber != null,
        r = n ? .additionalInformation != null || n ? .district != null || n ? .subdistrict != null;
    return {
        firstName: t.first_name,
        lastName: t.last_name,
        company: t.company,
        address1: t.address1,
        address2: t.address2,
        ...a ? {
            streetName: n ? .streetName ? ? "",
            streetNumber: n ? .streetNumber ? ? ""
        } : {},
        ...r ? {
            line2: n ? .additionalInformation ? ? "",
            district: n ? .district ? ? "",
            subdistrict: n ? .subdistrict ? ? ""
        } : {},
        city: t.city,
        countryCode: t.country_code,
        zoneCode: t.zone_code,
        postalCode: t.zip,
        phone: t.phone
    }
}

function eu(e) {
    return e.find(n => n.userPreferred) ? ? ou(e)
}

function ab(e) {
    return e.filter(n => !n.expired)[0] ? ? null
}

function tu(e, t) {
    return e.find(n => n.id === t)
}

function rb(e) {
    return {
        address: ks(e),
        id: e.id,
        uuid: e.uuid,
        lastUsedAt: e.lastUsedAt ? ? "",
        requiresVerification: e.requiresVerification,
        valid: e.valid,
        userPreferred: e.explicitlyPreferred ? ? !1
    }
}

function nu(e) {
    const t = e ? [...e.matchAll(Zl)].reduce((n, [, a, r]) => a === void 0 ? n : { ...n,
        [a]: r
    }, {}) : {};
    return {
        theme: t.theme,
        fontScale: typeof t.fontScale == "string" && t.fontScale ? parseFloat(t.fontScale) : void 0,
        surface: t.surface
    }
}

function sb(e) {
    if (!e.includes("Shop App/")) return;
    const t = e.match(Jl);
    if (t && t.groups) {
        const {
            appVersion: n,
            platform: a,
            platformVersion: r,
            annotations: s
        } = t.groups;
        return !n || !a || !r ? void 0 : {
            appVersion: n,
            platform: a,
            platformVersion: r,
            ...nu(s)
        }
    }
}

function rr(e, t) {
    return {
        address: e,
        id: t || hd,
        uuid: "",
        lastUsedAt: "",
        requiresVerification: !1,
        valid: !0,
        userPreferred: !1,
        isEphemeralAddress: !0
    }
}

function ob(e) {
    return !!(e && "isEphemeralAddress" in e && e.isEphemeralAddress === !0)
}

function au(e) {
    return {
        address: ks(e)
    }
}

function ru(e) {
    return {
        id: e.id,
        uuid: e.uuid,
        bank: e.bank,
        brand: e.brand,
        expired: e.expired,
        expiring: e.expiring,
        expiryMonth: e.expiryMonth,
        expiryYear: e.expiryYear,
        lastDigits: e.lastDigits,
        lastUsedAt: e.lastUsedAt,
        name: e.name,
        nickname: e.nickname,
        preferred: e.preferred,
        funding: e.funding || "unknown",
        supportsInstallmentsSplitPayLoan: e.supportsInstallmentsSplitPayLoan,
        supportsInstallmentsInterestLoan: e.supportsInstallmentsInterestLoan,
        verified: e.verified,
        billingAddressValid: e.billingAddressValid,
        billingAddress: au(e.billingAddress),
        installmentsSplitPayLoanNotSupportedReason: e.installmentsSplitPayLoanNotSupportedReason,
        installmentsInterestLoanNotSupportedReason: e.installmentsInterestLoanNotSupportedReason
    }
}
const su = "duplicate_installments_autopay_card";

function ib(e) {
    return e.some(({
        message: t
    }) => t === su)
}

function db(e) {
    return e ? {
        amount: Number(e.prequalifiedAmount.value),
        currencyCode: e.prequalifiedAmount.currency
    } : null
}

function ou(e) {
    return e.length === 0 ? null : e.reduce((t, n) => n.lastUsedAt < t.lastUsedAt || parseInt(n.id, 10) < parseInt(t.id, 10) ? t : n, {})
}

function lb(e) {
    return /^[^@]+@[^@]+\.[^@]+$/.test(e)
}

function ub(e, t) {
    const {
        extendedFields: n,
        ...a
    } = Os({
        address1: e.address1,
        address2: e.address2,
        countryCode: e.countryCode,
        fields: {
            streetName: e.streetName,
            streetNumber: e.streetNumber,
            line2: e.line2,
            district: e.district,
            subdistrict: e.subdistrict
        },
        extendedAddressMode: t
    }), r = n ? {
        streetName: n.streetName,
        streetNumber: n.streetNumber,
        additionalInformation: n.line2,
        district: n.district,
        subdistrict: n.subdistrict
    } : void 0;
    return {
        firstName: e.firstName,
        lastName: e.lastName,
        company: e.company,
        ...a,
        addressLineComponents: r,
        city: e.city,
        countryCode: e.countryCode,
        zoneCode: e.zoneCode,
        zip: e.postalCode,
        phone: e.phone
    }
}

function cb(e, t, n) {
    return e ? !!(e.includes("SPLIT_PAY") && t) || cu(e) && n : !1
}

function mb(e) {
    const t = it(e, "ONE_TIME_PURCHASE"),
        n = it(e, "SUBSCRIPTION");
    return t !== n && t ? .status === "available" && n ? .status === "available"
}

function _b(e, t) {
    const n = du(e);
    if (n === void 0) throw new TypeError("Cannot build a delivery title without a delivery method");
    switch (n.methodType) {
        case "SHIPPING":
            return lu(e, t);
        case "LOCAL":
            return t.localDeliveryTitle;
        case "PICK_UP":
            return n.title;
        default:
            return n.title
    }
}

function iu(e) {
    return e.deliveryLine.type === "ONE_TIME_PURCHASE"
}

function du(e) {
    return e.find(iu) || e[0]
}

function lu(e, t) {
    const n = e.find(o => o.deliveryLine.type === "ONE_TIME_PURCHASE"),
        r = e.find(o => o.deliveryLine.type === "SUBSCRIPTION") ? .title ? ? "",
        s = n ? .title ? ? "";
    return s && r ? t.combineTwoShippingTitles(s, r) : s || r
}

function fb(e) {
    const t = e[0];
    if (t === void 0) throw new TypeError("Cannot calculate shipping cost without a delivery method");
    return {
        amount: e.reduce((n, a) => n + a.cost.amount, 0),
        currencyCode: t.cost.currencyCode
    }
}

function gb(e) {
    const t = e[0];
    if (t === void 0) throw new TypeError("Cannot calculate discounted shipping cost without a delivery method");
    return {
        amount: e.reduce((n, a) => n + a.costAfterDiscounts.amount, 0),
        currencyCode: t.costAfterDiscounts.currencyCode
    }
}

function pb(e) {
    return uu.get(e) ? ? e
}
const uu = new Map([
    ["american_express", "American Express"],
    ["cartes_bancaires", "Cartes Bancaires"],
    ["diners_club", "Diners Club"],
    ["discover", "Discover"],
    ["elo", "Elo"],
    ["jcb", "JCB"],
    ["master", "Mastercard"],
    ["masterdebit", "Mastercard"],
    ["unionpay", "UnionPay"],
    ["visa", "Visa"],
    ["visadebit", "Visa"],
    ["maestro", "Maestro"]
]);

function Sb(e) {
    return e ? .find(t => t.type === "wallet" && t.name === "SHOP_PAY") ? .paymentMethodIdentifier ? ? ""
}

function cu(e) {
    return e ? e.includes("INTEREST") || e.includes("ZERO_PERCENT") : !1
}

function Eb(e, t) {
    return e ? "RETAIL" : t ? t.methodType : "SHIPPING"
}
const Ab = e => e ? !!e.errors ? .some ? .(t => t ? .extensions ? .code === Kl) : !1,
    vb = async () => {
        await fetch("/shopify_pay/accelerated_checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                shop_pay_redirect: "true"
            }),
            credentials: "include"
        })
    },
    hb = ({
        source: {
            type: e
        }
    }) => e === "shopPayExternal" ? Un.ShopPayExternal : Un.CheckoutOne;

function bb(e = {}, t, n) {
    const a = t ? ? e.countryCode,
        r = n ? ? e.zoneCode;
    return {
        city: void 0,
        address1: void 0,
        address2: void 0,
        company: void 0,
        firstName: void 0,
        lastName: void 0,
        name: void 0,
        phone: void 0,
        postalCode: void 0,
        coordinates: void 0,
        ...e,
        countryCode: a,
        zoneCode: r
    }
}

function Tb(e = {}) {
    return {
        city: void 0,
        address1: void 0,
        address2: void 0,
        company: void 0,
        firstName: void 0,
        lastName: void 0,
        name: void 0,
        phone: void 0,
        postalCode: void 0,
        coordinates: void 0,
        ...e
    }
}
const mu = [...Array(50)].map(() => (~~(Math.random() * 36)).toString(36)).join("");

function _u(e, t) {
    return e === "shopPayExternal" ? "shop_pay_external" : t ? "checkout_one_redesign" : "checkout_one"
}

function yb(e, t, n) {
    return {
        checkoutToken: e.checkoutSessionIdentifier ? ? "checkout_identifier_undefined",
        checkoutVersion: _u(e.type, t.configuration.layout.isOnePage.value),
        pageLoadId: mu,
        shopifyDomain: n.myshopifyDomain,
        shopId: Number(Ze(n.id))
    }
}
class fu extends Error {
    constructor() {
        super(...arguments), this.name = "UnhandledMoneyValueError"
    }
}

function jt(e) {
    return +`${Math.round(+`${e}e+3`)}e-3`
}

function Ib(e) {
    switch (e.__typename) {
        case "MoneyValueConstraint":
            return {
                amount: jt(parseFloat(e.value.amount)),
                currencyCode: e.value.currencyCode
            };
        case "Money":
        case "MoneyV2":
            return {
                amount: jt(parseFloat(e.amount)),
                currencyCode: e.currencyCode
            };
        case "AnyConstraint":
        case "MoneyIntervalConstraint":
            return {
                amount: 0,
                currencyCode: "USD"
            };
        default:
            de(e)
    }
}

function L(e) {
    switch (e.__typename) {
        case "MoneyValueConstraint":
            return {
                amount: jt(parseFloat(e.value.amount)),
                currencyCode: e.value.currencyCode
            };
        case "Money":
        case "MoneyV2":
            return {
                amount: jt(parseFloat(e.amount)),
                currencyCode: e.currencyCode
            };
        case "AnyConstraint":
        case "MoneyIntervalConstraint":
            throw new fu(`Can’t handle money value: ${JSON.stringify(e)}`);
        default:
            de(e)
    }
}

function gu(e) {
    switch (e.__typename) {
        case "IntIntervalConstraint":
            return {
                lower: e.lowerBound ? ? void 0,
                upper: e.upperBound ? ? void 0
            };
        case "IntValueConstraint":
            return e.value;
        case "AnyConstraint":
            return;
        default:
            de(e)
    }
}

function pu(e) {
    switch (e.__typename) {
        case "PercentageValue":
            return {
                percentage: e.percentage
            };
        case "FixedAmountValue":
            return {
                fixedAmount: Su(e.fixedAmount),
                appliesOnEachItem: e.appliesOnEachItem
            };
        default:
            de(e)
    }
}

function Su(e) {
    if (e.__typename === "MoneyValueConstraint") return {
        value: L(e.value)
    };
    de(e)
}
const Eu = /^\$\.merchandise\.merchandiseLines\[(\d+)\](?=$|[.[])/;

function Au(e) {
    const t = Eu.exec(e);
    if (t ? .[1] == null) return;
    const n = parseInt(t[1], 10);
    if (!isNaN(n)) return {
        index: n,
        linePath: t[0],
        suffix: e.slice(t[0].length)
    }
}

function vu(e) {
    return `$.merchandise.merchandiseLines[${e}]`
}
const xs = ["PAYMENTS_PAYPAL_OVER_CAPTURE_DETECTED", "PAYMENTS_PAYPAL_TOKEN_EXPIRED", "PAYMENTS_PAYPAL_CURRENCY_CHANGED"],
    js = ["PAYMENTS_APPLE_PAY_SESSION_EXPIRED"],
    Cb = new Set(["DELIVERY_PHONE_NUMBER_REQUIRED", "DELIVERY_PHONE_NUMBER_CONTAINS_EMOJIS", "DELIVERY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]),
    Nb = new Set(["DELIVERY_COMPANY_REQUIRED", "DELIVERY_COMPANY_TOO_LONG", "DELIVERY_COMPANY_CONTAINS_EMOJIS", "DELIVERY_COMPANY_CONTAINS_HTML_TAGS"]),
    Pb = new Set(["DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED", "DELIVERY_OPTIONS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "DELIVERY_OPTIONS_INSTRUCTIONS_INVALID"]),
    hu = new Set(["PAYMENTS_PHONE_NUMBER_REQUIRED", "PAYMENTS_PHONE_NUMBER_CONTAINS_EMOJIS", "PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]),
    bu = new Set(["PAYMENTS_COMPANY_REQUIRED", "PAYMENTS_COMPANY_TOO_LONG", "PAYMENTS_COMPANY_CONTAINS_EMOJIS", "PAYMENTS_COMPANY_CONTAINS_HTML_TAGS", "PAYMENTS_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS"]),
    Ob = new Set(["PAYMENTS_CREDIT_CARD_BASE_EXPIRED"]),
    Rb = new Set(["PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED"]),
    Mb = new Set(["PAYMENTS_PROPOSED_GATEWAY_UNAVAILABLE"]),
    Tu = new Set(["PAYMENTS_PAYMENT_METHOD_INCOMPATIBLE_WITH_PAYMENT_TERMS"]),
    yu = new Set(["PAYMENTS_LOCAL_PAYMENT_METHOD_AMOUNT_OUT_OF_RANGE"]),
    wb = new Set(["MISSING_SHIPPING_ADDRESS"]),
    Iu = new Set(["AMOUNT_TOO_SMALL", "AUTHENTICATION_ERROR", "AUTHENTICATION_REQUIRED", "AUTHORIZATION_ERROR", "CALL_ISSUER", "CANCELED_PAYPAL_BILLING_AGREEMENT", "CANCELLED_PAYMENT", "CARD_DECLINED", "EXPIRED_CARD", "EXPIRED_BUYER_ACTION", "FUNDING_ERROR", "GENERIC_ERROR", "INCORRECT_ADDRESS", "INCORRECT_CVC", "INCORRECT_NUMBER", "INCORRECT_PIN", "INCORRECT_ZIP", "INSUFFICIENT_FUNDS", "INVALID_CURRENCY", "INVALID_CVC", "INVALID_EXPIRY_DATE", "INVALID_ITEM_TOTAL", "INVALID_NUMBER", "INVALID_PAYMENT_METHOD", "INVALID_SHIPPING_ADDRESS", "INVALID_TOKEN", "INVOICE_ALREADY_PAID", "MISSING_SHIPPING_ADDRESS", "NAME_MISMATCH", "PICK_UP_CARD", "PROCESSING_ERROR", "PUBLIC_PAYMENT_ERROR", "SUCCESSFUL_OFFSITE_WITH_GIFT_CARD_ERROR", "SHOP_PAY_DECLINED", "TEST_MODE_LIVE_CARD", "THIRD_PARTY_INTERNAL_ERROR", "TOKEN_EXPIRED", "TRANSIENT_ERROR", "UNILATERAL_AUTH_ERROR", "UNPROCESSABLE_TRANSACTION", "PAYMENT_ABOVE_THRESHOLD", "RISKY", "DECISION_RULE_BLOCK", "FRAUD_SUSPECTED", "CVV_ATTEMPTS_EXCEEDED"]),
    Lb = new Set([...Iu, "CUSTOM_REDEEMABLE_NO_LONGER_AVAILABLE"]),
    Db = new Set(["PRE_CHARGE_ERROR"]),
    kb = new Set(["CAPTCHA_REQUIRED"]),
    xb = new Set(["DELIVERY_CITY_REQUIRED", "DELIVERY_ADDRESS1_REQUIRED", "DELIVERY_ADDRESS2_REQUIRED", "DELIVERY_POSTAL_CODE_REQUIRED", "DELIVERY_COUNTRY_REQUIRED", "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY"]),
    Cu = new Set(["PAYMENTS_FIRST_NAME_REQUIRED"]),
    Nu = new Set([...Cu, "PAYMENTS_FIRST_NAME_TOO_LONG", "PAYMENTS_FIRST_NAME_CONTAINS_EMOJIS", "PAYMENTS_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_FIRST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_FIRST_NAME_CONTAINS_URL"]),
    jb = new Set([...Nu, "PAYMENTS_LAST_NAME_REQUIRED", "PAYMENTS_LAST_NAME_TOO_LONG", "PAYMENTS_LAST_NAME_CONTAINS_EMOJIS", "PAYMENTS_LAST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_LAST_NAME_CONTAINS_URL", "PAYMENTS_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_CITY_REQUIRED", "PAYMENTS_CITY_TOO_LONG", "PAYMENTS_CITY_CONTAINS_EMOJIS", "PAYMENTS_CITY_CONTAINS_HTML_TAGS", "PAYMENTS_CITY_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ADDRESS1_REQUIRED", "PAYMENTS_ADDRESS1_TOO_LONG", "PAYMENTS_ADDRESS1_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS1_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ADDRESS2_REQUIRED", "PAYMENTS_ADDRESS2_TOO_LONG", "PAYMENTS_ADDRESS2_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS2_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", ...$t, "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE", "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY", "PAYMENTS_POSTAL_CODE_CONTAINS_EMOJIS", "PAYMENTS_POSTAL_CODE_REQUIRED", "PAYMENTS_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_COUNTRY_REQUIRED", "PAYMENTS_ZONE_REQUIRED_FOR_COUNTRY", "PAYMENTS_ZONE_NOT_FOUND", "PAYMENTS_SHIPPING_MUST_MATCH_BILLING", ...hu, ...bu]),
    Bb = new Set(["PAYMENTS_SHIPPING_MUST_MATCH_BILLING"]),
    Pu = new Set(["PAYMENTS_STORE_CREDIT_BUYING_GIFT_CARD", "PAYMENTS_STORE_CREDIT_NO_FIXED_SELLING_PLANS"]),
    Ou = new Set(["PAYMENTS_STORE_CREDIT_NOT_ENABLED", "PAYMENTS_STORE_CREDIT_ACCOUNT_NOT_FOUND", "PAYMENTS_STORE_CREDIT_ACCOUNT_MISMATCH", "PAYMENTS_STORE_CREDIT_MISMATCHED_CURRENCY", "PAYMENTS_STORE_CREDIT_INSUFFICIENT_FUNDS"]),
    Ru = new Set([...Pu, ...Ou]),
    Mu = new Set(["PAYMENTS_MARKET_MANAGER_BLOCKS_WALLET_PAYMENTS", "PAYMENTS_SHOP_PAY_WALLET_NOT_AVAILABLE"]),
    Ub = new Set(["DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE"]),
    Fb = new Set(["DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE"]),
    Yb = new Set(["DELIVERY_STRATEGY_CONDITIONS_NOT_SATISFIED"]),
    Hb = new Set(["DELIVERY_PHONE_NUMBER_CONTAINS_EMOJIS", "DELIVERY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]),
    Vb = new Set(["TOKEN_EXPIRED", "INVALID_CURRENCY", "INVALID_TOKEN", "FUNDING_ERROR", "CARD_DECLINED"]),
    wu = new Set(["MERCHANDISE_QUANTITY_RULES_INCREMENT_NOT_MET", "MERCHANDISE_QUANTITY_RULES_MINIMUM_NOT_MET", "MERCHANDISE_QUANTITY_RULES_MAXIMUM_EXCEEDED"]),
    Gb = new Set(["DELIVERY_DELIVERY_LINE_DETAIL_CHANGED", "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED"]),
    zb = new Set(["DELIVERY_SELECTED_PICKUP_OPTION_NO_LONGER_AVAILABLE"]),
    Wb = new Set(["DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION", "MERCHANDISE_PRODUCT_NOT_PUBLISHED_IN_BUYER_LOCATION", "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE", "MERCHANDISE_OUT_OF_STOCK_IN_CONTEXT"]),
    Lu = new Set(["MERCHANDISE_CART_UPDATED_BASED_ON_COUNTRY", "MERCHANDISE_EXPECTED_PRICE_MISMATCH", "MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE", "MERCHANDISE_NOT_FOUND", "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND", "MERCHANDISE_ONLY_EMPTY_TERMS_ACCEPTED", "MERCHANDISE_OUT_OF_STOCK", "MERCHANDISE_OUT_OF_STOCK_IN_CONTEXT", "MERCHANDISE_PRODUCT_NOT_PUBLISHED", "MERCHANDISE_PRODUCT_NOT_PUBLISHED_IN_BUYER_LOCATION", "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE", ...wu]),
    qb = new Set(["DELIVERY_DELIVERY_LINE_DETAIL_CHANGED", "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED"]),
    Du = new Set(["DISCOUNTS_INCOMPATIBLE_SCRIPT_DISCOUNT", "MEMBERSHIPS_DELIVERY_PROMISE_UNFULFILLABLE", "MEMBERSHIPS_LOCAL_DELIVERY_UNSUPPORTED", "MEMBERSHIPS_ITEMS_SPLIT_ACROSS_LOCATIONS_UNSUPPORTED"]),
    Kb = new Set(["PAYMENTS_DEFERRED_PAYMENT_NOT_ALLOWED", "PAYMENTS_DEFERRED_PAYMENT_REQUIRED", "PAYMENTS_SUBSCRIPTIONS_TERMS_NOT_ACCEPTED", "PAYMENTS_TOTAL_AMOUNT", "PAYMENTS_POSITIVE_AMOUNT_EXPECTED", "PAYMENTS_UNACCEPTABLE_CHECKOUT_PAYMENT_AMOUNT", "PAYMENTS_UNACCEPTABLE_DEFERRED_PAYMENT_AMOUNT", "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT", "PAYMENTS_UNACCEPTABLE_DEFERRED_PAYMENT_TIME", "PAYMENTS_WALLET_PAYPAL_EXPRESS_CONTENT", "PAYMENTS_GIFT_CARD_NON_SUFFICIENT_FUNDS", "PAYMENTS_GIFT_CARD_BUYING_GIFT_CARD", "PAYMENTS_GIFT_CARD_ALREADY_APPLIED", ...xs, ...js]),
    ku = new Set(["DELIVERY_OPTIONS_INSTRUCTIONS_INVALID", "DELIVERY_OPTIONS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED", "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED", "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED", "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE", "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE", "DELIVERY_WRONG_NUMBER_OF_DELIVERY_LINES"]),
    Bs = new Set(["PAYMENTS_GIFT_CARD_DISABLED", "PAYMENTS_GIFT_CARD_NON_SUFFICIENT_FUNDS", "PAYMENTS_GIFT_CARD_NOT_FOUND", "PAYMENTS_GIFT_CARDS_UNAVAILABLE", "PAYMENTS_GIFT_CARD_EXPIRED"]),
    xu = new Set(["DISCOUNTS_CUSTOMER_USAGE_LIMIT_REACHED", "DISCOUNTS_NO_ENTITLED_LINE_ITEMS", "DISCOUNTS_DISCOUNT_CODE_NOT_HONOURED", "DISCOUNTS_HIGHER_VALUE_DISCOUNT_APPLIED", "DISCOUNTS_DISCOUNT_CODE_APPLICATION_FAILED", "DISCOUNTS_ALLOCATIONS_MISMATCH", "DISCOUNTS_CURRENTLY_INACTIVE", "DISCOUNTS_PURCHASE_NOT_IN_RANGE", "DISCOUNTS_ADDITIONAL_REQUESTED_DISCOUNT_CODE_DISCARDED", "DISCOUNTS_USAGE_LIMIT_REACHED", "DISCOUNTS_NOT_FOUND", "DISCOUNTS_MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED", "DISCOUNTS_DISCOUNT_TITLE_TOO_LONG", "DISCOUNTS_CUSTOMER_NOT_ELIGIBLE"]),
    Xb = new Set([...Bs, ...xu]),
    ju = new Set(["PAYMENTS_SHOP_CASH_GIFT_CARD_NOT_ALLOWED", "PAYMENTS_SHOP_CASH_NOT_ENABLED", "PAYMENTS_SHOP_CASH_MISMATCHED_CURRENCY", "PAYMENTS_SHOP_CASH_UNSUPPORTED_CURRENCY"]),
    Bu = new Set(["PAYMENTS_CUSTOM_REDEEMABLE_INVALID", "PAYMENTS_CUSTOM_REDEEMABLE_CURRENCY_MISMATCH", "PAYMENTS_CUSTOM_REDEEMABLE_INSUFFICIENT_BALANCE", "PAYMENTS_CUSTOM_REDEEMABLE_ALREADY_APPLIED"]),
    Us = new Set(["PAYMENTS_TERMS_CHANGED", "PAYMENTS_GIFT_CARDS_UNAVAILABLE", "PAYMENTS_COUNTRY_INVALID", "PAYMENTS_PAYMENT_METHOD_INCOMPATIBLE_WITH_PAYMENT_TERMS"]),
    Uu = new Set(["PAYMENTS_CREDIT_CARD_SESSION_ID", "PAYMENTS_METHOD"]),
    $b = new Set(["PAYMENTS_CREDIT_CARD_SESSION_ID"]),
    Qb = new Set(["PAYMENTS_METHOD"]),
    Fu = new Set(["PAYMENTS_CREDIT_CARD_BRAND_NOT_SUPPORTED", "PAYMENTS_CREDIT_CARD_NUMBER_INVALID_FORMAT", "PAYMENTS_CREDIT_CARD_NUMBER_INVALID"]),
    Yu = new Set(["PAYMENTS_CREDIT_CARD_FIRST_NAME_BLANK", "PAYMENTS_CREDIT_CARD_LAST_NAME_BLANK"]),
    Hu = new Set(["PAYMENTS_CREDIT_CARD_BASE_EXPIRED", "PAYMENTS_CREDIT_CARD_YEAR_INVALID_EXPIRY_YEAR", "PAYMENTS_CREDIT_CARD_MONTH_INCLUSION", "PAYMENTS_CREDIT_CARD_YEAR_EXPIRED"]),
    Vu = new Set(["PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_BLANK", "PAYMENTS_CREDIT_CARD_VERIFICATION_VALUE_INVALID_FOR_CARD_TYPE"]),
    Gu = new Set(["PAYMENTS_CREDIT_CARD_GENERIC", "PAYMENTS_CREDIT_CARD_BASE_INVALID_START_DATE_OR_ISSUE_NUMBER_FOR_DEBIT", "PAYMENTS_CREDIT_CARD_NAME_INVALID", "PAYMENTS_CREDIT_CARD_SESSION_ID"]),
    zu = new Set([...Fu, ...Yu, ...Hu, ...Vu, ...Gu]),
    Jb = new Set(["TAX_NEW_TAX_MUST_BE_ACCEPTED"]),
    Zb = new Set([...zu, ...xs, ...js, "PAYMENTS_CREDIT_CARD_BASE_GATEWAY_NOT_SUPPORTED"]),
    Wu = new Set(["PAYMENTS_FIRST_NAME_REQUIRED", "PAYMENTS_LAST_NAME_REQUIRED", "PAYMENTS_COMPANY_REQUIRED", "PAYMENTS_CITY_REQUIRED", "PAYMENTS_COUNTRY_REQUIRED", "PAYMENTS_ADDRESS1_REQUIRED", "PAYMENTS_ADDRESS2_REQUIRED", "PAYMENTS_PHONE_NUMBER_REQUIRED", "PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "PAYMENTS_POSTAL_CODE_REQUIRED", "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE", "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY", "PAYMENTS_ZONE_NOT_FOUND", "PAYMENTS_ZONE_REQUIRED_FOR_COUNTRY"]),
    eT = new Set(["BUYER_IDENTITY_CUSTOMER_ACCOUNT_REQUIRED"]),
    qu = new Set(["MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B"]),
    Ku = new Set(["MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS", "MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED", "MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO", "MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT"]),
    Xu = new Set(["MERCHANDISE_PRODUCT_NOT_PUBLISHED"]),
    $u = new Set(["DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED", "DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED"]),
    Qu = new Set(["MERCHANDISE_NOT_ENOUGH_STOCK_AVAILABLE"]),
    Ju = new Set(["MERCHANDISE_OUT_OF_STOCK", "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND", "MERCHANDISE_NOT_FOUND"]),
    tT = new Set(["MERCHANDISE_PRODUCT_NOT_PUBLISHED", "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND", "MERCHANDISE_NOT_FOUND"]),
    nT = new Set(["DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION", "MERCHANDISE_OUT_OF_STOCK_IN_CONTEXT"]),
    Zu = new Set(["DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE"]),
    aT = "MERCHANDISE_EXPECTED_PRICE_MISMATCH",
    rT = new Set(["DELIVERY_ZONE_NOT_FOUND", "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY"]),
    sT = new Set(["MEMBERSHIPS_DELIVERY_PROMISE_UNFULFILLABLE", "MEMBERSHIPS_LOCAL_DELIVERY_UNSUPPORTED", "MEMBERSHIPS_ITEMS_SPLIT_ACROSS_LOCATIONS_UNSUPPORTED"]),
    ec = new Set([...Ju, ...Qu, ...Xu, ...Zu, ...qu, ...Ku, ...$u]),
    tc = new Set(["DELIVERY_DELIVERY_LINE_DETAIL_CHANGED", "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED"]),
    nc = new Set(["DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE", "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE", "DELIVERY_FULFILLMENT_CONSTRAINTS_NOT_SATISFIED"]),
    oT = new Set(["DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE", "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE", "MERCHANDISE_OUT_OF_STOCK_IN_CONTEXT", "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE", "DELIVERY_FULFILLMENT_CONSTRAINTS_NOT_SATISFIED"]),
    ac = new Set(["PAYMENTS_NON_TEST_ORDER_LIMIT_REACHED", "PAYMENTS_INVALID_GATEWAY_FOR_DEVELOPMENT_STORE"]),
    rc = new Set(["PAYMENTS_ADDRESS1_REQUIRED", "PAYMENTS_ADDRESS1_TOO_LONG", "PAYMENTS_ADDRESS1_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS1_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ADDRESS2_REQUIRED", "PAYMENTS_ADDRESS2_TOO_LONG", "PAYMENTS_ADDRESS2_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS2_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", ...$t]),
    Fs = new Set(["PAYMENTS_FIRST_NAME_REQUIRED", "PAYMENTS_FIRST_NAME_TOO_LONG", "PAYMENTS_FIRST_NAME_CONTAINS_EMOJIS", "PAYMENTS_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_FIRST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_FIRST_NAME_CONTAINS_URL", "PAYMENTS_LAST_NAME_REQUIRED", "PAYMENTS_LAST_NAME_TOO_LONG", "PAYMENTS_LAST_NAME_CONTAINS_EMOJIS", "PAYMENTS_LAST_NAME_CONTAINS_HTML_TAGS", "PAYMENTS_LAST_NAME_CONTAINS_URL", "PAYMENTS_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_COMPANY_REQUIRED", "PAYMENTS_COMPANY_TOO_LONG", "PAYMENTS_COMPANY_CONTAINS_EMOJIS", "PAYMENTS_COMPANY_CONTAINS_HTML_TAGS", "PAYMENTS_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_CITY_REQUIRED", "PAYMENTS_CITY_TOO_LONG", "PAYMENTS_CITY_CONTAINS_EMOJIS", "PAYMENTS_CITY_CONTAINS_HTML_TAGS", "PAYMENTS_CITY_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_COUNTRY_REQUIRED", "PAYMENTS_ADDRESS1_REQUIRED", "PAYMENTS_ADDRESS1_TOO_LONG", "PAYMENTS_ADDRESS1_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS1_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ADDRESS2_REQUIRED", "PAYMENTS_ADDRESS2_TOO_LONG", "PAYMENTS_ADDRESS2_CONTAINS_EMOJIS", "PAYMENTS_ADDRESS2_CONTAINS_HTML_TAGS", "PAYMENTS_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", ...$t, "PAYMENTS_PHONE_NUMBER_REQUIRED", "PAYMENTS_PHONE_NUMBER_CONTAINS_EMOJIS", "PAYMENTS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "PAYMENTS_POSTAL_CODE_REQUIRED", "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE", "PAYMENTS_POSTAL_CODE_CONTAINS_EMOJIS", "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY", "PAYMENTS_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS", "PAYMENTS_ZONE_NOT_FOUND", "PAYMENTS_ZONE_REQUIRED_FOR_COUNTRY"]);

function iT(e, {
    billingAddressLineFieldsVisible: t = !1
} = {}) {
    return Fs.has(e) ? !t || !rc.has(e) : !1
}
const sc = new Set(["DELIVERY_FIRST_NAME_REQUIRED", "DELIVERY_FIRST_NAME_TOO_LONG", "DELIVERY_FIRST_NAME_CONTAINS_EMOJIS", "DELIVERY_FIRST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_FIRST_NAME_CONTAINS_HTML_TAGS", "DELIVERY_FIRST_NAME_CONTAINS_URL"]),
    Ys = new Set([...sc, "DELIVERY_LAST_NAME_REQUIRED", "DELIVERY_LAST_NAME_TOO_LONG", "DELIVERY_LAST_NAME_CONTAINS_EMOJIS", "DELIVERY_LAST_NAME_CONTAINS_HTML_TAGS", "DELIVERY_LAST_NAME_CONTAINS_URL", "DELIVERY_LAST_NAME_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_COMPANY_REQUIRED", "DELIVERY_COMPANY_TOO_LONG", "DELIVERY_COMPANY_CONTAINS_EMOJIS", "DELIVERY_COMPANY_CONTAINS_HTML_TAGS", "DELIVERY_COMPANY_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_ADDRESS1_REQUIRED", "DELIVERY_ADDRESS1_TOO_LONG", "DELIVERY_ADDRESS1_CONTAINS_EMOJIS", "DELIVERY_ADDRESS1_CONTAINS_HTML_TAGS", "DELIVERY_ADDRESS1_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_ADDRESS2_REQUIRED", "DELIVERY_ADDRESS2_TOO_LONG", "DELIVERY_ADDRESS2_CONTAINS_EMOJIS", "DELIVERY_ADDRESS2_CONTAINS_HTML_TAGS", "DELIVERY_ADDRESS2_CONTAINS_MATHEMATICAL_SYMBOLS", ...Cs, "DELIVERY_PHONE_NUMBER_REQUIRED", "DELIVERY_PHONE_NUMBER_CONTAINS_EMOJIS", "DELIVERY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN", "DELIVERY_POSTAL_CODE_REQUIRED", "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE", "DELIVERY_POSTAL_CODE_CONTAINS_EMOJIS", "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY", "DELIVERY_POSTAL_CODE_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_ZONE_NOT_FOUND", "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY", "DELIVERY_CITY_REQUIRED", "DELIVERY_CITY_TOO_LONG", "DELIVERY_CITY_CONTAINS_EMOJIS", "DELIVERY_CITY_CONTAINS_HTML_TAGS", "DELIVERY_CITY_CONTAINS_MATHEMATICAL_SYMBOLS", "DELIVERY_COUNTRY_REQUIRED"]),
    oc = new Set([...Fs, ...Ys]),
    dT = new Set(["VALIDATION_CUSTOM", "CART_CHECKOUT_VALIDATION_RUNTIME_ERROR"]),
    ic = new Set(["PAYMENT_MANUAL_PAYMENTS_NOT_ALLOWED_FOR_B2B"]),
    dc = new Set(["BUYER_IDENTITY_CURRENCY_NOT_SUPPORTED_BY_SHOP"]),
    lc = "REMOTE_CURRENCY_MISMATCH",
    uc = new Set(["BUYER_IDENTITY_LOST_ACCESS_TO_COMPANY", "BUYER_IDENTITY_COMPANY_PURCHASE_PERMISSION_REQUIRED", "NOTE_LENGTH_EXCEEDS_MAXIMUM", "PROPOSAL_LINE_ITEM_LIMIT_REACHED", "MERCHANDISE_LINE_LIMIT_REACHED", "PAYMENTS_WALLET_PAYPAL_EXPRESS_ADDRESS_INVALID", "PROPOSAL_SESSION_IDENTIFIER_NOT_UNIQUE", "PROPOSAL_SESSION_ALREADY_FINISHED", "PROPOSAL_PAYMENT_COLLECTION_CANCELLED", "PROPOSAL_PAYMENT_COLLECTION_PAID", lc]),
    lT = new Set(["PAYMENTS_SHIPPING_MUST_MATCH_BILLING", "DISCOUNTS_CURRENTLY_INACTIVE", "DISCOUNTS_NO_ENTITLED_LINE_ITEMS", "DISCOUNTS_USAGE_LIMIT_REACHED", "DISCOUNTS_CUSTOMER_NOT_ELIGIBLE", "DISCOUNTS_CUSTOMER_USAGE_LIMIT_REACHED"]),
    cc = new Set(["BUYER_IDENTITY_CONTACT_INFO_DOES_NOT_MATCH_CUSTOMER_PROFILE", "BUYER_IDENTITY_PRESENTMENT_CURRENCY_DOES_NOT_MATCH", "ARTIFACT_DISSATISFACTION"]),
    uT = new Set([...ic, ...uc, ...cc, ...dc]),
    cT = new Set(["BUYER_IDENTITY_MISSING_CONTACT_METHOD", "BUYER_IDENTITY_EMAIL_DOES_NOT_MATCH_EXPECTED_PATTERN", "BUYER_IDENTITY_EMAIL_DOMAIN_IS_INVALID", "BUYER_IDENTITY_EMAIL_REQUIRED", "BUYER_IDENTITY_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]),
    mT = new Set(["BUYER_IDENTITY_LOST_ACCESS_TO_COMPANY", "BUYER_IDENTITY_COMPANY_PURCHASE_PERMISSION_REQUIRED"]),
    _T = new Set(["MERCHANDISE_CART_UPDATED_BASED_ON_COUNTRY", "MERCHANDISE_CART_AND_CURRENCY_UPDATED_BASED_ON_COUNTRY"]),
    mc = "$.customFields";

function fT(e) {
    return oc.has(e.code)
}

function _c(e) {
    return e.some(Fn)
}

function Fn(e) {
    return ec.has(e.code)
}

function et(e, t, n, a) {
    const r = Yn(e),
        s = Yn(t);
    if (r) return s && _c(n) && pc(a) ? s : r
}

function Hs(e, t, n, a) {
    return et(e, t, n, a)
}

function gT(e, t, n, a) {
    return et(e, t, n, a)
}

function Vs(e, t, n, a) {
    return et(e, t, n, a)
}

function fc(e, t, n, a) {
    return et(e, t, n, a)
}

function gc(e, t, n, a) {
    return et(e, t, n, a)
}

function Gs(e, t, n, a) {
    return et(e, t, n, a)
}

function pT(e, t) {
    if (!e) return;
    const n = L(e.amount),
        a = t ? new Date(t) : null,
        r = e.dueAt ? new Date(e.dueAt) : a,
        s = L(e.subtotalAmount),
        o = L(e.taxes);
    return {
        amount: n,
        dueAt: r,
        subtotalAmount: s,
        taxes: o
    }
}

function Yn(e) {
    return !e || e.__typename === "AnyConstraint" || e.__typename === "MoneyIntervalConstraint" ? null : L(e)
}

function pc(e) {
    const t = e ? .__typename === "FilledMerchandiseTerms" ? e.merchandiseLines : void 0;
    return t == null || t.length === 0
}

function sr(e) {
    return e ? .__typename === "FilledMerchandiseTerms"
}

function la(e) {
    return e ? .__typename === "RemoteNegotiationResultAvailable"
}

function ST(e, t) {
    return !e || e ? .__typename !== "FilledMerchandiseTerms" || t.length === 0 ? e : { ...e,
        merchandiseLines: [...e.merchandiseLines, ...t]
    }
}

function ET(e) {
    const t = {
        remoteMerchandise: {
            remoteBuyerMerchandiseLines: [],
            remoteSellerMerchandiseLines: [],
            stableIdToShopId: new Map
        },
        remoteDelivery: e && e.remoteNegotiations.length > 0 ? {
            deliveryMacros: e.consolidated.delivery.deliveryMacros,
            deliveryMacrosOmitted: e.consolidated.delivery.deliveryMacrosOmitted,
            remoteSellerDeliveryLines: [],
            remoteBuyerDeliveryLines: [],
            isShippingRequired: e.consolidated.delivery.isShippingRequired
        } : void 0,
        remotePayment: {
            availablePaymentLines: e && e.remoteNegotiations.length > 0 ? e.consolidated.payment.availablePaymentLines : [],
            paymentDetails: new Map
        }
    };
    if (!e ? .remoteNegotiations) return t;
    for (const {
            shopId: n,
            result: a
        } of e.remoteNegotiations) {
        if (!la(a)) continue;
        const r = a.sellerProposal.merchandise;
        sr(r) && r.merchandiseLines && (t.remoteMerchandise.remoteSellerMerchandiseLines.push(...r.merchandiseLines), r.merchandiseLines.forEach(m => {
            t.remoteMerchandise.stableIdToShopId.set(m.stableId, n)
        }));
        const s = a.buyerProposal.merchandise;
        sr(s) && s.merchandiseLines && (t.remoteMerchandise.remoteBuyerMerchandiseLines.push(...s.merchandiseLines), s.merchandiseLines.forEach(m => {
            t.remoteMerchandise.stableIdToShopId.set(m.stableId, n)
        }));
        const o = a.sellerProposal.delivery;
        o ? .__typename === "FilledDeliveryTerms" && t.remoteDelivery ? .remoteSellerDeliveryLines.push(...o.deliveryLines);
        const i = a.buyerProposal.delivery;
        i ? .__typename === "FilledDeliveryTerms" && t.remoteDelivery ? .remoteBuyerDeliveryLines.push(...i.deliveryLines);
        const d = a.sellerProposal.payment;
        let l, u;
        if (d ? .__typename === "FilledPaymentTerms") {
            const {
                availablePaymentLines: m,
                paymentLines: c
            } = d, _ = m ? .find(({
                paymentMethod: b
            }) => or(b)) ? .paymentMethod;
            _ && or(_) && (l = _.paymentMethodIdentifier);
            const f = c ? .find(b => b.paymentMethod ? .__typename === "DirectPaymentMethod") ? .paymentMethod;
            f ? .__typename === "DirectPaymentMethod" && (u = f.sessionId)
        }
        t.remotePayment.paymentDetails.set(n, {
            paymentDue: Yn(a.sellerProposal.runningTotal),
            paymentFlexibilityTermsId: d ? .__typename === "FilledPaymentTerms" ? d.paymentFlexibilityPaymentTermsTemplate ? .id ? ? null : null,
            paymentMethodIdentifier: l,
            sessionId: u
        })
    }
    return t
}

function or(e) {
    return e.__typename === "PaymentProvider" && e.name === "shopify_payments" && e.paymentMethodIdentifier
}

function AT({
    sellerProposal: e,
    buyerProposal: t,
    negotiationViolations: n,
    sellerMerchandise: a
}) {
    const r = !!e ? .remote ? .remoteNegotiations ? .length;
    if (!e || !t || !r) return;
    const {
        subtotalBeforeTaxesAndShipping: s,
        subtotalBeforeReductions: o,
        runningTotal: i,
        totalSavings: d = void 0,
        total: l,
        checkoutTotalTaxes: u,
        checkoutTotalBeforeTaxesAndShipping: m,
        checkoutTotal: c
    } = e.remote ? .consolidated.totals ? ? {}, {
        subtotalBeforeTaxesAndShipping: _,
        runningTotal: f,
        checkoutTotalTaxes: b,
        checkoutTotalBeforeTaxesAndShipping: E,
        checkoutTotal: I
    } = t.remote ? .consolidated.totals ? ? {}, h = Vs(i, f, n ? ? [], a), v = d && d.__typename === "MoneyValueConstraint" ? L(d) : void 0, B = o && o.__typename === "MoneyValueConstraint" ? L(o) : void 0, S = Gs(c ? ? void 0, I ? ? void 0, n ? ? [], a), T = Hs(s, _, n ? ? [], a), g = l ? .__typename === "MoneyValueConstraint" ? L(l) : void 0, p = gc(m, E, n ? ? [], a), y = fc(u, b, n ? ? [], a);
    return {
        checkoutTotal: S,
        checkoutTotalTaxes: y,
        checkoutTotalBeforeTaxesAndShipping: p,
        runningTotal: h,
        totalSavings: v,
        subtotalBeforeReductions: B,
        subtotal: T,
        total: g
    }
}

function vT({
    remote: e,
    negotiationViolations: t,
    sellerMerchandise: n
}) {
    const a = !!e ? .remoteNegotiations ? .length;
    if (!e || !a) return;
    const r = new Map;
    return e.remoteNegotiations.forEach(({
        shopId: s,
        result: o
    }) => {
        if (!la(o)) return;
        const {
            checkoutTotal: i,
            subtotalBeforeTaxesAndShipping: d,
            runningTotal: l
        } = o.sellerProposal, {
            checkoutTotal: u,
            subtotalBeforeTaxesAndShipping: m,
            runningTotal: c
        } = o.buyerProposal, _ = Hs(d, m, t ? ? [], n), f = Gs(i ? ? void 0, u ? ? void 0, t ? ? [], n), b = Vs(l, c, t ? ? [], n);
        r.set(s, {
            checkoutTotal: f,
            subtotal: _,
            runningTotal: b
        })
    }), {
        perShopRemoteTotals: r
    }
}

function hT(e) {
    return e ? .__typename === "NegotiationResultAvailable" && !!e.sellerProposal.remote ? .remoteNegotiations ? .length
}

function bT(e) {
    if (!e ? .remoteNegotiations ? .length) return;
    const t = new Map,
        n = new Map,
        a = new Map;
    return e.remoteNegotiations.forEach(r => {
        const {
            shopId: s,
            sessionToken: o,
            checkoutSessionIdentifier: i,
            result: d
        } = r;
        t.set(s, o), n.set(s, i), la(d) && d.queueToken && a.set(s, d.queueToken)
    }), {
        perShopSessionToken: t,
        perShopCheckoutSessionIdentifier: n,
        perShopQueueToken: a
    }
}

function Sc(e, t) {
    if (!e ? .remote) return [];
    const n = t ? .merchandise.__typename === "FilledMerchandiseTerms" ? t.merchandise.merchandiseLines.length : 0,
        a = [];
    let r = n;
    for (const s of e.remote.remoteNegotiations) a.push(r), s.result ? .__typename === "RemoteNegotiationResultAvailable" && s.result.buyerProposal ? .merchandise ? .__typename === "FilledMerchandiseTerms" && (r += s.result.buyerProposal.merchandise.merchandiseLines.length);
    return e.remote.remoteNegotiations.flatMap((s, o) => {
        const i = a[o];
        return s.errors.map(d => {
            if (d.__typename === "ConfirmChangeViolation") {
                const u = ir(d.from, i);
                return u == null ? d : { ...d,
                    from: u
                }
            }
            const l = "target" in d ? ir(d.target, i) : void 0;
            return l == null ? d : { ...d,
                target: l
            }
        })
    })
}

function ir(e, t) {
    if (typeof e != "string") return;
    const n = Au(e);
    return n == null ? void 0 : `${vu(n.index+t)}${n.suffix}`
}

function TT(e, t, n) {
    const a = !!t ? .remote ? .remoteNegotiations ? .length;
    if (!t || !a) return e;
    const r = Sc(t, n);
    return [...e ? ? [], ...r]
}

function Ec(e) {
    return (e ? .__typename === "FilledMerchandiseTerms" && e.merchandiseLines || []).reduce((n, a) => (dr(a.merchandise) && (a.lineComponents.length === 0 && n.push(a.merchandise), a.lineComponents.forEach(r => {
        r.__typename === "MerchandiseBundleLineComponent" && dr(r.merchandise) && n.push(r.merchandise)
    })), n), new Array)
}

function dr(e) {
    return e.__typename === "ContextualizedProductVariantMerchandise" || e.__typename === "ProductVariantMerchandise" || e.__typename === "SourceProvidedMerchandise"
}

function zs({
    id: e,
    type: t,
    handle: n = void 0,
    options: a = {},
    methodTypes: r = ["SHIPPING"],
    externalCustomerId: s,
    externalCheckoutSessionId: o,
    externalPromiseId: i,
    targetMerchandiseLines: d = [],
    isCustomRate: l
}) {
    return {
        id: e,
        type: t,
        deliveryMethodHandle: n,
        deliveryMethodOptions: a,
        deliveryMethodTypes: r,
        externalCustomerId: s,
        externalCheckoutSessionId: o,
        externalPromiseId: i,
        targetMerchandiseLines: d,
        isCustomRate: l
    }
}

function lr(e, t) {
    const n = it(e, t),
        a = Be(n) ? .handle,
        r = n ? .status === "available" ? n.methods[0] ? .handle : void 0,
        s = a || r,
        o = n ? .status === "available" ? n.methods.find(i => i.handle === s) ? .isCustomRate : void 0;
    return zs({
        id: n ? .id,
        type: t,
        handle: s,
        methodTypes: [],
        options: {},
        targetMerchandiseLines: [],
        isCustomRate: o
    })
}

function ur(e, t) {
    if (e == null || e ? .__typename !== "FilledDeliveryTerms") return;
    const n = t ? [...e.deliveryLines, ...t] : e.deliveryLines;
    return (() => {
        const r = n.filter(s => !!s.destinationAddress);
        return r.length > 0 ? r : n
    })().find(r => r.groupType === "ONE_TIME_PURCHASE" && (r.deliveryMethodTypes.includes("SHIPPING") || r.deliveryMethodTypes.includes("LOCAL")))
}

function Ac(e) {
    return e === "PICK_UP" || e === "PICKUP_POINT"
}

function yT({
    delivery: e,
    buyerDelivery: t,
    remoteDelivery: n
}) {
    const {
        remoteSellerDeliveryLines: a,
        remoteBuyerDeliveryLines: r
    } = n ? ? {}, s = e.__typename === "PendingTerms" ? ur(t, r) : ur(e, a);
    return s ? .destinationAddress && s.destinationAddress.__typename !== "InvalidDeliveryAddress" && s.destinationAddress.__typename !== "Geolocation" ? ee(s.destinationAddress) : void 0
}
const vc = e => e.deliveryMethodTypes.some(Ac);

function IT(e) {
    if (e ? .__typename === "FilledDeliveryTerms" && e ? .deliveryLines ? .length > 0) {
        const t = e.deliveryLines.find(vc);
        return t ? .destinationAddress ? .__typename === "Geolocation" ? ee(t.destinationAddress) : void 0
    }
}
const Ws = ["firstName", "lastName", "company", "address1", "address2", "city", "phone", "postalCode", "streetName", "streetNumber", "neighborhood", "line2"];

function hc({
    proposedAddress: e,
    buyerAddresses: t,
    additionalBuyerAddresses: n = []
}) {
    return sa(e, Ws) ? !0 : [...t.map(s => s.address), ...n].some(s => Xt(s, e))
}

function CT({
    canUpdateDeliveryAddress: e,
    mustSelectProvidedAddress: t,
    proposedAddress: n,
    buyerAddresses: a
}) {
    return (e ? ? !0) && !t && hc({
        proposedAddress: n,
        buyerAddresses: a
    })
}
const bc = "{firstName} {lastName}_{company}_{address1}_{address2}_{city} {province} {zip}_{country}_{phone}",
    Tc = "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{province}{zip}_{phone}",
    yc = new Set(["BR", "KW", "PA", "PE", "PH"]),
    Ic = new Set(["CL", "TR", "IL", "CO", "TW", "ID", "CR", "VN"]),
    Cc = new Set(["BE", "DE", "ES"]),
    Nc = new Set(["BR"]),
    Pc = new Set(["BE", "DE", "ES"]);

function NT(e, t) {
    return t === void 0 ? !1 : Nc.has(t) || Pc.has(t) && e.hasFlagEnabled(ds)
}

function PT(e) {
    return {
        isConcatenatedEnabled: () => e.additionalAddressFieldsEnabled,
        isDedicatedEnabled: t => {
            const n = t.code.toUpperCase();
            return e.hasFlagEnabled(xi) && yc.has(n) || e.hasFlagEnabled(ji) && Ic.has(n) || e.hasFlagEnabled(ds) && Cc.has(n)
        },
        getDedicatedFormat: t => t.extendedFormattingV2 ? .edit
    }
}

function OT(e, t) {
    return e ? { ...e,
        labels: { ...e.labels,
            zone: Oc(e.localizationKeys.zone, t),
            postalCode: Rc(e.localizationKeys.postalCode, t)
        }
    } : {
        name: "",
        code: "CA",
        neighborhoodRequired: !1,
        streetNameRequired: !1,
        streetNumberRequired: !1,
        districtRequired: !1,
        subdistrictRequired: !1,
        buildingNumberRequired: !1,
        buildingNumberMayBeInAddress2: !1,
        pureNumericPostalCode: !1,
        postalCodeRequired: !0,
        localizationKeys: {
            address2: "address2_label",
            postalCode: "postal_code_label",
            zone: "province_label"
        },
        labels: {
            firstName: t.translate("contact.first_name_label"),
            lastName: t.translate("contact.last_name_label"),
            company: t.translate("contact.company_label"),
            address1: t.translate("contact.address1_label"),
            address2: t.translate("contact.address2_label"),
            city: t.translate("contact.city_label"),
            country: t.translate("contact.country_label"),
            zone: t.translate("contact.province_label"),
            postalCode: t.translate("contact.postal_code_label"),
            phone: t.translate("contact.phone_label")
        },
        formatting: {
            edit: Tc,
            show: bc
        },
        zones: [],
        autofillPostalCodeEnabled: !1,
        autofillCityEnabled: !1
    }
}

function Oc(e, t) {
    switch (e) {
        case "province_label":
            return t.translate("contact.province_label");
        case "county_label":
            return t.translate("contact.county_label");
        case "state_label":
            return t.translate("contact.state_label");
        case "region_label":
            return t.translate("contact.region_label");
        case "prefecture_label":
            return t.translate("contact.prefecture_label");
        case "governorate_label":
            return t.translate("contact.governorate_label");
        case "emirate_label":
            return t.translate("contact.emirate_label");
        case "state_and_territory_label":
            return t.translate("contact.state_and_territory_label");
        default:
            return t.translate("contact.province_label")
    }
}

function Rc(e, t) {
    switch (e) {
        case "zip_code_label":
            return t.translate("contact.zip_code_label");
        case "postal_code_label":
            return t.translate("contact.postal_code_label");
        case "postcode_label":
            return t.translate("contact.postcode_label");
        case "pincode_label":
            return t.translate("contact.pincode_label");
        default:
            return t.translate("contact.postal_code_label")
    }
}

function RT(e = navigator.userAgent) {
    const t = [{
        name: "Opera",
        pattern: /OPR\/([\d.]+)/
    }, {
        name: "Klarna",
        pattern: /Klarna\/([\d.]+)/
    }, {
        name: "TikTok",
        pattern: /musical_ly(?:.+app_?version\/|_)([\d.]+)/
    }, {
        name: "Instagram",
        pattern: /Instagram\s([\d.]+)/
    }, {
        name: "Facebook",
        pattern: /FBAV\/([\d.]+)/
    }, {
        name: "Edge",
        pattern: /Edg(?:e|iOS|A)?\/([\d.]+)/
    }, {
        name: "Chrome",
        pattern: /Chrome\/([\d.]+)(?!.*Edg)/
    }, {
        name: "Firefox",
        pattern: /Firefox\/([\d.]+)/
    }, {
        name: "Safari",
        pattern: /Version\/([\d.]+).*Safari/
    }];
    for (const n of t) {
        const a = e.match(n.pattern),
            r = a ? .[1];
        if (a && r !== void 0) return {
            name: n.name,
            version: Mc(r)
        }
    }
    return {
        name: "Other",
        version: null
    }
}

function Mc(e) {
    const [t] = e.replace(/[^\d.]/g, "").split(".");
    return t ? ? ""
}

function MT(e = navigator.userAgent) {
    const t = [{
        name: "Android",
        pattern: /Android|android-x86|harmonyos/i
    }, {
        name: "iOS",
        pattern: /iPhone|iPad|iPod/i
    }, {
        name: "Mac OS",
        pattern: /Mac OS X|Macintosh|Mac_PowerPC/i
    }, {
        name: "Windows",
        pattern: /Windows NT|Win(?:dows)?[ ]?(?:Phone|Mobile)?|Windows/i
    }, {
        name: "Smart TV",
        pattern: /SmartTV|NetTV|Viera|TV/i
    }, {
        name: "Game Console",
        pattern: /PlayStation|Xbox|Nintendo/i
    }, {
        name: "Linux",
        pattern: /Linux|X11/i
    }, {
        name: "Googlebot",
        pattern: /Googlebot/i
    }, {
        name: "Other",
        pattern: /webOS|BlackBerry|bada|Tizen|Symbian|KaiOS/i
    }];
    for (const n of t)
        if (e.match(n.pattern)) return n.name;
    return "Other"
}
const wT = {
        id: "1eb20fb9dc0010cf9f3527f5978d8d8615e3317e4560cf330a1bb47aebff33e7",
        type: "query",
        name: "CheckoutProfile",
        source: ""
    },
    wc = {
        METHOD_NOT_FOUND: -32601,
        INVALID_PARAMS: -32602,
        INTERNAL: -32603
    },
    Lc = {
        USER_CANCELLED: -32001
    },
    Dc = {
        ABORT: "abort_error",
        SECURITY: "security_error",
        NOT_SUPPORTED: "not_supported_error",
        INVALID_STATE: "invalid_state_error",
        NOT_ALLOWED: "not_allowed_error",
        WINDOW_OPEN_REJECTED: "window_open_rejected_error"
    },
    kc = /CheckoutSheetProtocol\/(?<schemaVersion>\d{4}-\d{2})(?=\s|$)/,
    xc = /.*ShopifyCheckoutSDK\/(?<version>\d+\.\d+(?:\.\d+)?(?:-[\w.]+)?)\s?\((?<schemaVersion>(\d+\.\d+(?:\.\d+)?)|noconnect);(?<theme>\w+);?(?<variant>\w+)?\)/i,
    jc = /Mobile|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|webOS|BlackBerry|SamsungBrowser|FB_IAB|FBAV|Instagram|Shop App|UCBrowser/i,
    LT = new Set(["2026-01-23", "2026-04-08", "2026-08-25"]);

function Bc(e) {
    switch (e.toLowerCase()) {
        case "light":
            return "LIGHT";
        case "dark":
            return "DARK";
        case "automatic":
        case "auto":
            return "AUTOMATIC";
        case "web_default":
            return "WEB_DEFAULT";
        default:
            return
    }
}
const Uc = new Set(["2024-04", "2024-07", "2024-10", "2025-01"]),
    Fc = new Set(["2025-04"]),
    Yc = new Set([...Uc, ...Fc]);

function Hc(e) {
    const t = e.match(kc);
    if (t ? .groups == null) return;
    const {
        schemaVersion: n
    } = t.groups, a = n && Yc.has(n) ? n : void 0;
    return a ? {
        schemaVersion: a
    } : void 0
}
const Vc = new Set(["5.1", "5.3", "7.0", "8.0", "8.1"]),
    DT = "8.1";

function Gc(e) {
    const t = e.match(xc);
    if (t ? .groups == null) return;
    const {
        version: n,
        schemaVersion: a,
        theme: r,
        variant: s
    } = t.groups, o = Bc(r);
    if (o == null) return;
    const i = a && (Vc.has(a) || Hn(a)) ? a : void 0,
        d = n && Wc(n) ? n : void 0;
    if (!(d == null || i == null)) return {
        version: d,
        schemaVersion: Hn(i) ? void 0 : i,
        theme: o,
        variant: zc(s)
    }
}

function zc(e) {
    switch (e ? .toLowerCase()) {
        case "standard":
            return "STANDARD";
        case "standard_recovery":
            return "STANDARD_RECOVERY";
        case "partner":
            return "PARTNER";
        default:
            return "STANDARD"
    }
}

function Hn(e) {
    return e.toLowerCase() === "noconnect"
}

function Wc(e) {
    return /\d+\.\d+(\.\d+)?/.test(e) || Hn(e)
}
const qs = "ec_version",
    Ks = "embed",
    kT = "ec_auth",
    qc = "ec_delegate",
    xT = "ec_color_scheme",
    jT = "uc_experience",
    BT = "ck_version",
    UT = "ck_branding",
    FT = "skip_interstitial",
    Kc = "force_interstitial_branding",
    Xc = "2026-04-08";

function $c({
    embedder: e,
    shop: t
}) {
    const n = a => "hasFlagEnabled" in t ? t.hasFlagEnabled(a) : t.enabledFlags.includes(a);
    return e === "google" ? n(wi) : e === "microsoft"
}

function YT(e, t) {
    return t === "google" && e.searchParams.get(Kc) === "true"
}

function Qc(e) {
    const t = e.searchParams.get(Ks);
    if (!t ? .trim()) return;
    const n = {};
    for (const a of t.replace(/^["']|["']$/g, "").split(",")) {
        const [r, ...s] = a.split("="), o = s.join("=");
        !r || !o || (n[r.trim().replace(/-/g, "")] = o.trim())
    }
    return Object.keys(n).length > 0 ? n : void 0
}
const Jc = /^(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
    Zc = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/,
    Xs = String.raw `\d+(?:\.\d+){0,3}(?:-[A-Za-z0-9.]+)?`,
    em = new RegExp(String.raw `(?:^|\s)ShopifyCheckoutKit/(?<version>${Xs})\s+\((?<os>iOS|Android)\s*;\s*[A-Za-z][A-Za-z0-9]{0,30}(?:\s+[^)\s]+)?\)(?<trailing>(?:\s+[A-Za-z0-9._/-]{1,100})*)\s*$`, "i"),
    tm = new RegExp(String.raw `(?:^|\s)ReactNative(?:/${Xs})?(?:\s|$)`, "i");

function HT(e) {
    return am(e) && e >= Xc
}

function VT(e) {
    return e ? Jc.test(e) : !1
}

function GT(e) {
    return e ? nm(e) != null : !1
}

function nm(e) {
    const t = em.exec(e);
    if (!t ? .groups) return;
    const {
        version: n,
        os: a,
        trailing: r
    } = t.groups;
    return {
        version: n,
        os: a.toLowerCase(),
        isReactNative: tm.test(r ? ? "")
    }
}

function am(e) {
    const t = e ? Zc.exec(e) : null;
    if (!t ? .groups) return !1;
    const n = Number(t.groups.month),
        a = Number(t.groups.day);
    return n >= 1 && n <= 12 && a >= 1 && a <= 31
}
class rm {
    constructor(t, n) {
        this.version = t ? ? "unstable", this.type = n
    }
    get isUcpEcp() {
        return this.type === "EMBEDDED_CHECKOUT_PROTOCOL"
    }
    get isShopifyEcp() {
        return !this.isUcpEcp
    }
    get isCheckoutSheetKit() {
        return this.type === "CHECKOUT_SHEET_KIT"
    }
    get isCheckoutSheetProtocol() {
        return this.type === "CHECKOUT_SHEET_PROTOCOL"
    }
}
var sm = (e => (e.None = "none", e.CheckoutSheetProtocolNative = "csp_native", e.FlagshipPartner = "flagship_partner", e.CheckoutSheetKit = "csk", e.CheckoutKit = "checkout_kit", e))(sm || {});
const om = new Set(["fulfillment.address_change", "payment.instruments_change", "payment.credential", "window.open"]);

function im(e) {
    return e == null ? [] : e.split(",").map(n => n.trim()).filter(n => om.has(n))
}

function dm(e, t = []) {
    return {
        requested: new Set(e),
        allowed: new Set(t)
    }
}
var lm = (e => (e.AddressEmpty = "ADDRESS_EMPTY", e))(lm || {}),
    um = (e => (e.PaymentEmpty = "PAYMENT_EMPTY", e.PaymentDelegationError = "PAYMENT_DELEGATION_ERROR", e))(um || {});

function cm(e) {
    return e === "uc"
}
const zT = "finalizer",
    mm = ["microsoft"];

function WT(e) {
    return e !== void 0 && mm.includes(e)
}
const _m = new Set(["uc", "internal", "e2e", "editions", "shopApp"]);

function qT(e) {
    return e !== void 0 && _m.has(e)
}
const fm = "UC_INCOMPATIBLE_FLOW";

function KT(e, t) {
    !e || !cm(e.embedder) || e.client ? .error({
        code: fm,
        message: t,
        timestamp: Date.now()
    })
}
const $s = {
    "2026-01-23": {
        supportsEcError: !1,
        supportsUnauthenticated: !1
    },
    "2026-04-08": {
        supportsEcError: !0,
        supportsUnauthenticated: !0
    },
    "2026-08-25": {
        supportsEcError: !0,
        supportsUnauthenticated: !0
    },
    unstable: {
        supportsEcError: !0,
        supportsUnauthenticated: !0
    }
};

function gm(e) {
    return Object.hasOwn($s, e)
}

function pm(e) {
    return gm(e) && $s[e].supportsUnauthenticated
}
class ua extends Error {
    constructor(t, n) {
        super(t), this.context = n, this.name = "TransportError"
    }
}
class XT extends ua {
    constructor(t, n, a) {
        super(`Request timed out after ${n}ms`, {
            requestId: t,
            timeoutMs: n,
            ...a
        }), this.name = "TransportTimeoutError"
    }
}
class $T extends ua {
    constructor(t, n, a) {
        super(`Request failed: ${a}`, {
            requestId: t,
            errorCode: n,
            errorMessage: a
        }), this.name = "TransportResponseError", this.errorCode = n, this.errorMessage = a
    }
    get isUserCancelledError() {
        return this.errorCode === Lc.USER_CANCELLED || this.errorCode === Dc.ABORT
    }
    get isInternalError() {
        return this.errorCode === wc.INTERNAL
    }
}
class QT extends ua {
    constructor(t, n) {
        super(`Invalid response: ${t}`, {
            responseType: t,
            ...n
        }), this.name = "TransportInvalidResponseError"
    }
}

function Sm(e) {
    return !e || !e.version ? !1 : e.type === "EMBEDDED_CHECKOUT_PROTOCOL" && pm(e.version)
}

function JT(e) {
    return e.searchParams.has(qs) || e.searchParams.has(Ks)
}

function ZT(e) {
    const t = e.searchParams.get(qs);
    return t || Qc(e) ? .protocol
}

function Em(e) {
    if (!e ? .embed) return !1;
    const {
        isAuthenticated: t,
        protocol: n
    } = e.embed;
    return n ? .type === "CHECKOUT_SHEET_PROTOCOL" ? !1 : t ? !0 : Sm(n)
}

function ey(e, {
    client: t,
    userAgent: n = ""
}) {
    if (!Em(e)) return;
    const a = e.embed,
        r = new rm(a.protocol.version, a.protocol.type),
        s = r.isUcpEcp ? im(t.initialRequest.url.searchParams.get(qc)) : [],
        o = Am(n),
        i = t.unstable_getSerialization("embed") ? .embedder,
        d = a.library ? .name && a.library ? .version ? {
            name: a.library.name,
            version: a.library.version
        } : void 0;
    return {
        isAuthenticated: a.isAuthenticated,
        isFlagshipPartner: a.isFlagshipPartner,
        isPreload: a.isPreload,
        protocol: r,
        ui: {
            colorScheme: a.ui ? .colorScheme ? ? "AUTOMATIC",
            branding: a.ui ? .branding ? ? "SHOP"
        },
        embedder: i,
        delegations: dm(s),
        platformCategory: o,
        library: d,
        isCheckoutKit({
            includeLegacyCsk: l = !0
        } = {}) {
            if (a.isFlagshipPartner) return !1;
            const u = r.isUcpEcp && d ? .name === "CheckoutKit",
                m = r.isCheckoutSheetKit || d ? .name === "CheckoutSheetKit";
            return u || l && m
        }
    }
}

function Am(e) {
    return e && jc.test(e) ? "MOBILE" : "WEB"
}
var vm = (e => (e[e.Country = 1] = "Country", e[e.CountryProvince = 2] = "CountryProvince", e[e.CountryProvinceZip = 3] = "CountryProvinceZip", e[e.CountryProvinceZipAddress = 4] = "CountryProvinceZipAddress", e[e.Anything = 5] = "Anything", e))(vm || {});

function ty({
    country: e,
    countrySpecific: t,
    addressFormSettings: n,
    requestInfoData: a
}) {
    const r = a ? .shop ? .defaultShippingDetails ? .country ? {
            country: a.shop.defaultShippingDetails.country,
            zone: {
                code: a.shop.defaultShippingDetails.zone ? .code
            }
        } : {
            country: e,
            zone: {
                code: void 0
            }
        },
        s = o => (o && t[o] ? .addressFormSettings) ? ? n;
    return {
        isVisible: (o, i) => {
            const l = s(i ? .countryCode)[o] ? .mode;
            return l == null || l !== "IGNORED"
        },
        isRequired: (o, i) => {
            const l = s(i ? .countryCode)[o] ? .mode;
            return l == null || l === "REQUIRED"
        },
        autocompleteEnabled: n.addressAutocompletion,
        validationEnabled: n.addressValidation,
        defaultShippingDetails: r
    }
}

function hm({
    contactInfoOptions: e,
    countrySpecific: t
}, n) {
    return (n ? t[n] ? .contactInfoOptions : void 0) ? ? e
}
class ny extends le {
    constructor() {
        super(...arguments), this.name = "SettingsCreateError"
    }
}
const Qt = ["scheme1", "scheme2", "scheme3", "scheme4", "scheme5", "scheme6", "scheme7", "scheme8"],
    bm = {
        accent: "#005BD1",
        critical: "#D91C1C",
        info: "#000000",
        success: "#4D7A50",
        warning: "#8F6900",
        base: {
            background: "#FFFFFF",
            border: "#DEDEDE",
            textSubdued: "#707070"
        },
        controlBackground: "#FFFFFF",
        controlText: "#000000",
        controlTextSubdued: "#707070"
    },
    Z = {
        global: bm
    };

function K(e) {
    return e ? e.a !== void 0 && e.a === 0 : !1
}
class cr extends Error {
    constructor() {
        super(...arguments), this.name = "CheckoutWebUIError"
    }
}
class ay extends Error {
    constructor() {
        super(...arguments), this.name = "MissingContextError"
    }
}
const mr = 1,
    Tm = .19783000664283,
    ym = .46831999493879,
    Ot = [
        [3.240969941904521, -1.537383177570093, -.498610760293],
        [-.96924363628087, 1.87596750150772, .041555057407175],
        [.055630079696993, -.20397695888897, 1.056971514242878]
    ],
    Qs = 903.2962962,
    Im = .0088564516;
class Ae {
    constructor(t, n, a, r) {
        this.h = t, this.s = n, this.l = a, this.a = r
    }*[Symbol.iterator]() {
        yield this.h, yield this.s, yield this.l
    }
    adjust({
        h: t,
        s: n,
        l: a,
        a: r
    }) {
        return new Ae(t ? .(this.h) ? ? this.h, n ? .(this.s) ? ? this.s, a ? .(this.l) ? ? this.l, r ? .(this.a) ? ? this.a)
    }
    toRgb() {
        return Js(this)
    }
    toRgba() {
        return Zs(this)
    }
    toRgbOrRgba() {
        return Pm(this)
    }
    toRgbTuple() {
        return ca(this)
    }
    getYiqPerceivedBrightness() {
        return Om(this)
    }
}
const Cm = /hsl\(\s*(?<h>\d+(\.\d{1,3})?),\s*(?<s>\d+(\.\d{1,3})?)%,\s(?<l>\d+(\.\d{1,3})?)%\)/;

function Nm(e) {
    if (typeof e == "string") {
        const t = e.match(Cm);
        if (t == null) throw new cr(`Invalid HSLuv value: ${e}`);
        const {
            h: n,
            s: a,
            l: r
        } = t.groups, s = n ? parseFloat(n) : NaN, o = a ? parseFloat(a) : NaN, i = r ? parseFloat(r) : NaN;
        if (Number.isNaN(s) || Number.isNaN(o) || Number.isNaN(i)) throw new cr(`Invalid HSLuv value: ${e}`);
        return new Ae(s, o, i, 1)
    }
    return new Ae(e[0], e[1], e[2], 1)
}

function Js(e) {
    return `rgb(${ca(e).join(",")})`
}

function Zs(e) {
    return `rgba(${ca(e).join(",")},${e.a})`
}

function Pm(e) {
    return e.a !== void 0 && e.a !== 1 ? Zs(e) : Js(e)
}

function ca({
    h: e,
    s: t,
    l: n
}) {
    return ma(..._a(e, t, n))
}

function Om({
    h: e,
    s: t,
    l: n
}) {
    const [a] = Rm(e, t, n);
    return a
}

function Rm(e, t, n) {
    const [a, r, s] = ma(..._a(e, t, n));
    return [(a * .299 + r * .587 + s * .114) / 255, (a * .596 - r * .275 - s * .321) / 255, (a * .212 - r * .523 + s * .311) / 255]
}

function ma(e, t, n) {
    return Mm(...Lm(...wm(e, t, n)))
}

function Mm(...e) {
    return [gn(pn(ze(Ot[0], e))), gn(pn(ze(Ot[1], e))), gn(pn(ze(Ot[2], e)))]
}

function gn(e) {
    return Math.round(e * 255)
}

function ze(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
}

function pn(e) {
    return e <= .0031308 ? 12.92 * e : 1.055 * e ** .4166666666666667 - .055
}

function wm(e, t, n) {
    const a = n / 360 * 2 * Math.PI;
    return [e, Math.cos(a) * t, Math.sin(a) * t]
}

function Lm(e, t, n) {
    if (e === 0) return [0, 0, 0];
    const a = t / (13 * e) + Tm,
        r = n / (13 * e) + ym,
        s = Dm(e),
        o = 0 - 9 * s * a / ((a - 4) * r - a * r);
    return [o, s, (9 * s - 15 * r * s - r * o) / (3 * r)]
}

function Dm(e) {
    return e <= 8 ? mr * e / Qs : mr * ((e + 16) / 116) ** 3
}

function _a(e, t, n) {
    if (n > 99.9999999) return [100, 0, e];
    if (n < 1e-8) return [0, 0, e];
    const r = eo(n, e) / 100 * t;
    return [n, r, e]
}

function eo(e, t) {
    const n = t / 360 * Math.PI * 2,
        a = xm(e);
    return Math.min(...a.map(r => km(n, r)).filter(r => r > 0))
}

function km(e, t) {
    return t.intercept / (Math.sin(e) - t.slope * Math.cos(e))
}

function xm(e) {
    const t = [],
        n = (e + 16) ** 3 / 1560896,
        a = n > Im ? n : e / Qs;
    for (const [r, s, o] of Ot)
        for (const i of [0, 1]) {
            const d = (284517 * r - 94839 * o) * a,
                l = (838422 * o + 769860 * s + 731718 * r) * e * a - 769860 * i * e,
                u = (632260 * o - 126452 * s) * a + 126452 * i;
            t.push({
                slope: d / u,
                intercept: l / u
            })
        }
    return t
}
const Ge = "0123456789abcdef",
    Sn = [
        [.41239079926595, .35758433938387, .18048078840183],
        [.21263900587151, .71516867876775, .072192315360733],
        [.019330818715591, .11919477979462, .95053215224966]
    ],
    _r = 1,
    jm = .19783000664283,
    Bm = .46831999493879,
    Um = 903.2962962,
    Fm = .0088564516;

function En(e) {
    return e > .04045 ? ((e + .055) / 1.055) ** 2.4 : e / 12.92
}

function Ym(e) {
    const t = [En(e[0]), En(e[1]), En(e[2])];
    return [ze(Sn[0], t), ze(Sn[1], t), ze(Sn[2], t)]
}

function Hm(e) {
    return e <= Fm ? e / _r * Um : 116 * (e / _r) ** .3333333333333333 - 16
}

function Vm(e) {
    const t = e[0],
        n = e[1],
        a = e[2],
        r = t + 15 * n + 3 * a;
    let s = 4 * t,
        o = 9 * n;
    r === 0 ? (s = NaN, o = NaN) : (s /= r, o /= r);
    const i = Hm(n);
    if (i === 0) return [0, 0, 0];
    const d = 13 * i * (s - jm),
        l = 13 * i * (o - Bm);
    return [i, d, l]
}

function Gm(e) {
    const t = e[0],
        n = e[1],
        a = e[2],
        r = Math.sqrt(n * n + a * a);
    let s;
    return r < 1e-8 ? s = 0 : (s = Math.atan2(a, n) * 180 / Math.PI, s < 0 && (s = 360 + s)), [t, r, s]
}

function zm(e) {
    const t = e[0],
        n = e[1],
        a = e[2];
    if (t > 99.9999999) return [a, 0, 100];
    if (t < 1e-8) return [a, 0, 0];
    const r = eo(t, a),
        s = n / r * 100;
    return [a, s, t]
}

function Wm(e) {
    let t = "#",
        n = 0;
    for (; n < 3;) {
        const a = n++,
            r = e[a],
            s = Math.round(r * 255),
            o = s % 16,
            i = (s - o) / 16 | 0;
        t += Ge.charAt(i) + Ge.charAt(o)
    }
    return t
}
const qm = e => {
    let t = e.toLowerCase();
    t.length === 4 ? t = `#${t.charAt(1)}${t.charAt(1)}${t.charAt(2)}${t.charAt(2)}${t.charAt(3)}${t.charAt(3)}` : t.length === 5 && (t = `#${t.charAt(1)}${t.charAt(1)}${t.charAt(2)}${t.charAt(2)}${t.charAt(3)}${t.charAt(3)}${t.charAt(4)}${t.charAt(4)}`);
    const n = [];
    let a = 0;
    for (; a < 3;) {
        const r = a++,
            s = Ge.indexOf(t.charAt(r * 2 + 1)),
            o = Ge.indexOf(t.charAt(r * 2 + 2)),
            i = s * 16 + o;
        n.push(i / 255)
    }
    if (t.length === 9) {
        const r = Ge.indexOf(t.charAt(7)),
            s = Ge.indexOf(t.charAt(8)),
            o = (r * 16 + s) / 255;
        n.push(o)
    } else n.push(1);
    return n
};

function Km(e) {
    return Gm(Vm(Ym(e)))
}

function Xm(e) {
    return ma(..._a(...e))
}

function $m(e) {
    return zm(Km(e))
}

function ry(e) {
    const [t, n, a] = Xm(e);
    return Wm([t / 255, n / 255, a / 255])
}

function ae(e) {
    const [t, n, a, r] = qm(e), [s, o, i] = $m([t, n, a]);
    return new Ae(s, o, i, r)
}

function fa(e, t, n = "text") {
    if (K(e)) return t;
    const r = {
        text: 50,
        border: 40
    }[n];
    return Math.abs(e.l - t.l) >= r ? t : e.l < 50 ? t.adjust({
        l: () => Math.min(e.l + r, 100)
    }) : t.adjust({
        l: () => Math.max(e.l - r, 0)
    })
}

function Jt({
    background: e,
    backgroundSubdued: t
} = {}) {
    if (t != null) return t;
    if (!e || K(e)) return;

    function n(a) {
        return a < 15 ? 8 : a >= 15 && a < 50 ? 3 : -3
    }
    return e.adjust({
        l: a => Vn(e) ? a - 2 : a + n(a),
        s: a => Vn(e) ? a / 2 : a
    })
}

function to({
    background: e
} = {}) {
    if (!e || K(e)) return;

    function t(n) {
        return n < 15 ? 10 : n >= 15 && n < 95 ? 5 : n >= 95 && n <= 99 ? 99 - n : 0
    }
    return e.adjust({
        l: n => n + t(n),
        s: n => Vn(e) ? n / 2 : n >= 90 ? 90 : n
    })
}
const Qm = 51,
    Jm = 8;

function no({
    background: e
} = {}) {
    if (!e || K(e)) return;
    const t = .5,
        n = .75,
        a = .1,
        r = Zm(e),
        s = Math.min(Math.max((r - t) / (n - t), 0), 1),
        o = a + (1 - a) * s ** 3,
        i = e.l + (100 - e.l) * o,
        d = Math.max(0, 100 - Qm - i),
        l = ro(e) ? Math.min(Jm, d) : 0;
    return e.adjust({
        l: () => Math.min(i + l, 100)
    })
}

function Zm(e) {
    return e.getYiqPerceivedBrightness() * (1 - e.s / 300)
}

function we({
    background: e
} = {}) {
    if (!(!e || K(e))) return e.adjust({
        l: () => se(e) ? 0 : 100,
        a: () => se(e) ? .045 : .065
    })
}

function he({
    background: e,
    text: t
} = {}) {
    if (t != null) return t;
    if (!(!e || K(e))) return e.adjust({
        l: () => se(e) ? 0 : 100
    })
}

function xe({
    background: e,
    text: t,
    textSubdued: n
} = {}) {
    if (n != null) return n;
    const a = e == null || K(e) || se(e) ? .56 : .66;
    return he({
        background: e,
        text: t
    }) ? .adjust({
        a: () => a
    })
}

function Bt({
    background: e,
    text: t
} = {}) {
    const n = e == null || K(e) || se(e) ? .1 : .2;
    return xe({
        background: e,
        text: t
    }) ? .adjust({
        a: () => n
    })
}

function F(e, t) {
    return e ? .adjust({
        l: () => t
    })
}

function Ut({
    background: e,
    text: t
} = {}) {
    if (t != null) return t.adjust({
        l: () => se(t) ? 0 : 100
    });
    if (!(!e || K(e))) return e.adjust({
        l: () => se(e) ? 100 : 0
    })
}

function ga({
    accent: e
} = {}) {
    return e ? .adjust({
        l: t => t - 10
    })
}

function e_({
    background: e,
    text: t
} = {}) {
    return ct({
        background: e,
        text: t
    }) ? .adjust({
        l: n => n - 10
    })
}

function Zt({
    accent: e
} = {}) {
    return e ? .adjust({
        l: () => se(e) ? 0 : 100
    })
}

function pa({
    accent: e
} = {}) {
    return e ? .adjust({
        l: () => 97,
        s: t => e.h > 75 && e.h < 210 ? 15 : t
    })
}

function Sa({
    accent: e
} = {}) {
    return e ? .adjust({
        l: () => 94,
        s: t => e.h > 75 && e.h < 210 ? 15 : t
    })
}

function Ea({
    accent: e
} = {}) {
    return e ? .adjust({
        l: () => 99,
        s: t => e.h > 75 && e.h < 210 ? 15 : t
    })
}

function ao({
    accent: e,
    background: t
} = {}) {
    if (e && !(t == null || K(t))) return e.adjust({
        a: () => se(t) ? .05 : .15
    })
}

function Aa({
    accent: e
} = {}) {
    return e ? .adjust({
        s: t => t * .25,
        l: () => 44.2
    })
}

function va({
    background: e
} = {}) {
    if (!(!e || K(e))) return e.adjust({
        l: t => t - 10
    })
}

function t_({
    background: e
} = {}) {
    if (!(!e || K(e))) return e.adjust({
        l: t => t - 10
    })
}

function ct({
    background: e,
    text: t
} = {}) {
    if (t != null) return t;
    if (!(!e || K(e))) return e.adjust({
        l: () => se(e) ? 4 : 100
    })
}

function Re({
    background: e,
    border: t
} = {}) {
    if (t != null) return t;
    if (!(!e || K(e))) return e.adjust({
        s: n => n * .5,
        l: n => se(e) ? n - 11.2 : n + 21.2
    })
}

function Ft({
    background: e,
    border: t
} = {}) {
    return fa(e ? ? ae(Z.global.base.background), Re({
        background: e,
        border: t
    }) ? ? ae(Z.global.base.border), "border")
}

function n_({
    background: e
} = {}) {
    if (!(!e || K(e))) return ro(e) ? no({
        background: e
    }) ? .adjust({
        s: t => t * .8,
        l: t => Math.min(t + 8, 100)
    }) : e.adjust({
        a: () => 0
    })
}

function ro(e) {
    return e.getYiqPerceivedBrightness() < .3
}

function Vn(e) {
    return typeof e > "u" ? !1 : e.h > 76 && e.h < 98 && e.s > 75 && e.l > 97
}

function se(e) {
    return typeof e > "u" ? !1 : e.getYiqPerceivedBrightness() >= .65
}

function Ve(e) {
    return Object.keys(e).reduce((t, n) => e[n] == null ? t : n === "global" ? { ...t,
        global: a_(e.global)
    } : n === "schemes" ? { ...t,
        schemes: Qt.reduce((a, r) => ({ ...a,
            [r]: s_(e.schemes ? .[r])
        }), {})
    } : t, {})
}

function a_(e = {}) {
    const {
        success: t,
        warning: n,
        critical: a,
        info: r,
        brand: s,
        accent: o,
        custom: i,
        control: d
    } = e;
    return {
        success: t ? z(t) : void 0,
        warning: n ? z(n) : void 0,
        critical: a ? z(a) : void 0,
        info: r ? z(r) : void 0,
        brand: s ? z(s) : void 0,
        accent: o ? z(o) : void 0,
        custom: i ? z(i) : void 0,
        control: d ? z(d) : void 0
    }
}

function ge(e = {}) {
    const {
        background: t,
        backgroundSubdued: n,
        text: a,
        textSubdued: r,
        border: s,
        icon: o,
        accent: i,
        custom: d
    } = e;
    return {
        background: t ? z(t) : void 0,
        backgroundSubdued: n ? z(n) : void 0,
        text: a ? z(a) : void 0,
        textSubdued: r ? z(r) : void 0,
        border: s ? z(s) : void 0,
        icon: o ? z(o) : void 0,
        accent: i ? z(i) : void 0,
        custom: d ? z(d) : void 0
    }
}

function r_(e = {}) {
    const {
        critical: t,
        info: n,
        success: a,
        warning: r
    } = e;
    return { ...ge(e),
        critical: t ? z(t) : void 0,
        info: n ? z(n) : void 0,
        success: a ? z(a) : void 0,
        warning: r ? z(r) : void 0
    }
}

function s_(e = {}) {
    return {
        base: r_(e ? .base ? ? {}),
        control: { ...ge(e ? .control ? ? {}),
            invalid: ge(e ? .control ? .invalid ? ? {}),
            selected: ge(e ? .control ? .selected ? ? {})
        },
        primaryButton: { ...ge(e ? .primaryButton ? ? {}),
            hover: ge(e ? .primaryButton ? .hover ? ? {})
        },
        secondaryButton: { ...ge(e ? .secondaryButton ? ? {}),
            hover: ge(e ? .secondaryButton ? .hover ? ? {})
        }
    }
}

function o_(e, t) {
    if (!e || !t) return e;
    const n = a => a ? z(a) : void 0;
    return ["success", "warning", "critical", "info", "brand", "accent", "custom", "control"].reduce((a, r) => ({ ...a,
        [r]: t[r] ? n(t[r]) : e[r]
    }), {})
}

function i_(e, t) {
    if (!e || !t) return e;
    const n = s => s ? z(s) : void 0,
        a = ["background", "backgroundSubdued", "text", "textSubdued", "border", "icon", "accent", "custom"],
        r = [...a, "critical", "info", "success", "warning"];
    return Qt.reduce((s, o) => ({ ...s,
        [o]: {
            base: r.reduce((i, d) => ({ ...i,
                [d]: t[o] ? .base ? .[d] ? n(t[o] ? .base ? .[d]) : e[o] ? .base ? .[d]
            }), {}),
            control: { ...a.reduce((i, d) => ({ ...i,
                    [d]: t[o] ? .control ? .[d] ? n(t[o] ? .control ? .[d]) : e[o] ? .control ? .[d]
                }), {}),
                selected: a.reduce((i, d) => ({ ...i,
                    [d]: t[o] ? .control ? .selected ? .[d] ? n(t[o] ? .control ? .selected ? .[d]) : e[o] ? .control ? .selected ? .[d]
                }), {}),
                invalid: a.reduce((i, d) => ({ ...i,
                    [d]: t[o] ? .control ? .invalid ? .[d] ? n(t[o] ? .control ? .invalid ? .[d]) : e[o] ? .control ? .invalid ? .[d]
                }), {})
            },
            ...["primaryButton", "secondaryButton"].reduce((i, d) => ({ ...i,
                [d]: { ...a.reduce((l, u) => ({ ...l,
                        [u]: t[o] ? .[d] ? .[u] ? n(t[o] ? .[d] ? .[u]) : e[o] ? .[d] ? .[u]
                    }), {}),
                    hover: a.reduce((l, u) => ({ ...l,
                        [u]: t[o] ? .[d] ? .hover ? .[u] ? n(t[o] ? .[d] ? .hover ? .[u]) : e[o] ? .[d] ? .hover ? .[u]
                    }), {})
                }
            }), {})
        }
    }), {})
}
const d_ = /^#(?:[0-9a-f]{3}(?:[0-9a-f])?|[0-9a-f]{6}(?:[0-9a-f]{2})?)$/i;

function z(e) {
    if (e instanceof Ae) return e;
    if (typeof e == "string") {
        const t = e.trim();
        return t.toLowerCase() === "transparent" ? new Ae(0, 0, 0, 0) : d_.test(t) ? ae(t) : Nm(t)
    }
    return new Ae(...e)
}

function l_(e, t) {
    const n = t ? .[e];
    return {
        base: u_(n ? .base),
        control: { ...pe(n ? .control),
            selected: { ...pe(n ? .control ? .selected)
            },
            invalid: { ...pe(n ? .control ? .invalid)
            }
        },
        primaryButton: { ...pe(n ? .primaryButton),
            hover: pe(n ? .primaryButton ? .hover)
        },
        secondaryButton: { ...pe(n ? .secondaryButton),
            hover: pe(n ? .secondaryButton ? .hover)
        }
    }
}

function u_(e) {
    return { ...pe(e),
        critical: e ? .critical ? ? void 0,
        info: e ? .info ? ? void 0,
        success: e ? .success ? ? void 0,
        warning: e ? .warning ? ? void 0
    }
}

function pe(e) {
    return {
        background: e ? .background ? ? void 0,
        backgroundSubdued: e ? .backgroundSubdued ? ? void 0,
        text: e ? .text ? ? void 0,
        textSubdued: e ? .textSubdued ? ? void 0,
        border: e ? .border ? ? void 0,
        icon: e ? .icon ? ? void 0,
        accent: e ? .accent ? ? void 0,
        custom: e ? .custom ? ? void 0
    }
}

function At(e) {
    return e !== null && typeof e == "object" && "conditionals" in e
}

function sy(e) {
    return At(e) && "default" in e && e.default !== void 0
}
const Rt = {
    base: 0,
    extraSmall: 580,
    small: 750,
    medium: 1e3,
    large: 1200
};

function c_({
    addMaxWidth: e
} = {
    addMaxWidth: !0
}) {
    return Object.entries(Rt).map(([t, n], a, r) => {
        const s = r[a + 1],
            [, o] = s || [],
            i = o && e ? `(min-width: ${n}px) and (max-width: ${o-1}px)` : `(min-width: ${n}px)`;
        return {
            breakpoint: t,
            query: i
        }
    })
}
const so = c_();

function oy() {
    const e = _t(io);
    return e ? e.value : "base"
}

function oo() {
    if (typeof window > "u" || typeof window.matchMedia != "function") return "base";
    const e = so.find(({
        query: t
    }) => window.matchMedia(t).matches);
    return e ? e.breakpoint : "base"
}

function m_(e) {
    if (typeof window > "u" || typeof window.matchMedia != "function") return () => {};
    const t = () => {
        const a = oo();
        e.peek() !== a && (e.value = a)
    };
    t();
    const n = so.map(({
        query: a
    }) => window.matchMedia(a));
    for (const a of n) typeof a.addEventListener == "function" ? a.addEventListener("change", t) : a ? .addListener ? .(t);
    return () => {
        for (const a of n) typeof a.removeEventListener == "function" ? a.removeEventListener("change", t) : a ? .removeListener ? .(t)
    }
}
const io = $e(null);

function iy({
    children: e
}) {
    const t = Gt(oo());
    return ft(() => m_(t), [t]), Zn(io.Provider, {
        value: t,
        children: e
    })
}

function __(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var a = n.call(e, t);
        if (typeof a != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function f_(e) {
    var t = __(e, "string");
    return typeof t == "symbol" ? t : String(t)
}

function g_(e, t, n) {
    return t = f_(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function fr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, a)
    }
    return n
}

function An(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? fr(Object(n), !0).forEach(function(a) {
            g_(e, a, n[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fr(Object(n)).forEach(function(a) {
            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
        })
    }
    return e
}
var p_ = e => function() {
        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        var r = Object.assign({}, ...n.map(d => d.styles)),
            s = Object.keys(r),
            o = s.filter(d => "mappings" in r[d]),
            i = d => {
                var l = [],
                    u = {},
                    m = An({}, d),
                    c = !1;
                for (var _ of o) {
                    var f = d[_];
                    if (f != null) {
                        var b = r[_];
                        c = !0;
                        for (var E of b.mappings) u[E] = f, m[E] == null && delete m[E]
                    }
                }
                var I = c ? An(An({}, u), m) : d,
                    h = function() {
                        var S = I[v],
                            T = r[v];
                        try {
                            if (T.mappings) return 1;
                            if (typeof S == "string" || typeof S == "number") l.push(T.values[S].defaultClass);
                            else if (Array.isArray(S))
                                for (var g = 0; g < S.length; g++) {
                                    var p = S[g];
                                    if (p != null) {
                                        var y = T.responsiveArray[g];
                                        l.push(T.values[p].conditions[y])
                                    }
                                } else
                                    for (var M in S) {
                                        var R = S[M];
                                        R != null && l.push(T.values[R].conditions[M])
                                    }
                        } catch (U) {
                            throw U
                        }
                    };
                for (var v in I) h();
                return e(l.join(" "))
            };
        return Object.assign(i, {
            properties: new Set(s)
        })
    },
    S_ = e => e,
    E_ = function() {
        return p_(S_)(...arguments)
    },
    en = {
        conditions: {
            defaultCondition: "base",
            conditionNames: ["base", "extraSmall", "small", "medium", "large"],
            responsiveArray: void 0
        },
        styles: {
            border: {
                mappings: ["borderBlockStart", "borderInlineEnd", "borderBlockEnd", "borderInlineStart"]
            },
            borderBlock: {
                mappings: ["borderBlockStart", "borderBlockEnd"]
            },
            borderInline: {
                mappings: ["borderInlineStart", "borderInlineEnd"]
            },
            borderRadius: {
                mappings: ["borderStartStartRadius", "borderStartEndRadius", "borderEndEndRadius", "borderEndStartRadius"]
            },
            borderStyle: {
                mappings: ["borderBlockStartStyle", "borderInlineEndStyle", "borderBlockEndStyle", "borderInlineStartStyle"]
            },
            borderWidth: {
                mappings: ["borderBlockStartWidth", "borderInlineEndWidth", "borderBlockEndWidth", "borderInlineStartWidth"]
            },
            gap: {
                mappings: ["rowGap", "columnGap"]
            },
            overflow: {
                mappings: ["overflowBlock", "overflowInline"]
            },
            padding: {
                mappings: ["paddingBlockStart", "paddingInlineEnd", "paddingBlockEnd", "paddingInlineStart"]
            },
            paddingBlock: {
                mappings: ["paddingBlockStart", "paddingBlockEnd"]
            },
            paddingInline: {
                mappings: ["paddingInlineStart", "paddingInlineEnd"]
            },
            placeContent: {
                mappings: ["alignContent", "justifyContent"]
            },
            placeItems: {
                mappings: ["alignItems", "justifyItems"]
            },
            alignContent: {
                values: {
                    around: {
                        conditions: {
                            base: "_1fragem0",
                            extraSmall: "_1fragem1",
                            small: "_1fragem2",
                            medium: "_1fragem3",
                            large: "_1fragem4"
                        },
                        defaultClass: "_1fragem0"
                    },
                    between: {
                        conditions: {
                            base: "_1fragem5",
                            extraSmall: "_1fragem6",
                            small: "_1fragem7",
                            medium: "_1fragem8",
                            large: "_1fragem9"
                        },
                        defaultClass: "_1fragem5"
                    },
                    center: {
                        conditions: {
                            base: "_1fragema",
                            extraSmall: "_1fragemb",
                            small: "_1fragemc",
                            medium: "_1fragemd",
                            large: "_1frageme"
                        },
                        defaultClass: "_1fragema"
                    },
                    end: {
                        conditions: {
                            base: "_1fragemf",
                            extraSmall: "_1fragemg",
                            small: "_1fragemh",
                            medium: "_1fragemi",
                            large: "_1fragemj"
                        },
                        defaultClass: "_1fragemf"
                    },
                    evenly: {
                        conditions: {
                            base: "_1fragemk",
                            extraSmall: "_1frageml",
                            small: "_1fragemm",
                            medium: "_1fragemn",
                            large: "_1fragemo"
                        },
                        defaultClass: "_1fragemk"
                    },
                    normal: {
                        conditions: {
                            base: "_1fragemp",
                            extraSmall: "_1fragemq",
                            small: "_1fragemr",
                            medium: "_1fragems",
                            large: "_1fragemt"
                        },
                        defaultClass: "_1fragemp"
                    },
                    start: {
                        conditions: {
                            base: "_1fragemu",
                            extraSmall: "_1fragemv",
                            small: "_1fragemw",
                            medium: "_1fragemx",
                            large: "_1fragemy"
                        },
                        defaultClass: "_1fragemu"
                    },
                    stretch: {
                        conditions: {
                            base: "_1fragemz",
                            extraSmall: "_1fragem10",
                            small: "_1fragem11",
                            medium: "_1fragem12",
                            large: "_1fragem13"
                        },
                        defaultClass: "_1fragemz"
                    }
                }
            },
            alignItems: {
                values: {
                    baseline: {
                        conditions: {
                            base: "_1fragem14",
                            extraSmall: "_1fragem15",
                            small: "_1fragem16",
                            medium: "_1fragem17",
                            large: "_1fragem18"
                        },
                        defaultClass: "_1fragem14"
                    },
                    center: {
                        conditions: {
                            base: "_1fragem19",
                            extraSmall: "_1fragem1a",
                            small: "_1fragem1b",
                            medium: "_1fragem1c",
                            large: "_1fragem1d"
                        },
                        defaultClass: "_1fragem19"
                    },
                    centerSafe: {
                        conditions: {
                            base: "_1fragem1e",
                            extraSmall: "_1fragem1f",
                            small: "_1fragem1g",
                            medium: "_1fragem1h",
                            large: "_1fragem1i"
                        },
                        defaultClass: "_1fragem1e"
                    },
                    end: {
                        conditions: {
                            base: "_1fragem1j",
                            extraSmall: "_1fragem1k",
                            small: "_1fragem1l",
                            medium: "_1fragem1m",
                            large: "_1fragem1n"
                        },
                        defaultClass: "_1fragem1j"
                    },
                    normal: {
                        conditions: {
                            base: "_1fragem1o",
                            extraSmall: "_1fragem1p",
                            small: "_1fragem1q",
                            medium: "_1fragem1r",
                            large: "_1fragem1s"
                        },
                        defaultClass: "_1fragem1o"
                    },
                    start: {
                        conditions: {
                            base: "_1fragem1t",
                            extraSmall: "_1fragem1u",
                            small: "_1fragem1v",
                            medium: "_1fragem1w",
                            large: "_1fragem1x"
                        },
                        defaultClass: "_1fragem1t"
                    },
                    stretch: {
                        conditions: {
                            base: "_1fragem1y",
                            extraSmall: "_1fragem1z",
                            small: "_1fragem20",
                            medium: "_1fragem21",
                            large: "_1fragem22"
                        },
                        defaultClass: "_1fragem1y"
                    }
                }
            },
            alignSelf: {
                values: {
                    auto: {
                        conditions: {
                            base: "_1fragem23",
                            extraSmall: "_1fragem24",
                            small: "_1fragem25",
                            medium: "_1fragem26",
                            large: "_1fragem27"
                        },
                        defaultClass: "_1fragem23"
                    },
                    baseline: {
                        conditions: {
                            base: "_1fragem28",
                            extraSmall: "_1fragem29",
                            small: "_1fragem2a",
                            medium: "_1fragem2b",
                            large: "_1fragem2c"
                        },
                        defaultClass: "_1fragem28"
                    },
                    center: {
                        conditions: {
                            base: "_1fragem2d",
                            extraSmall: "_1fragem2e",
                            small: "_1fragem2f",
                            medium: "_1fragem2g",
                            large: "_1fragem2h"
                        },
                        defaultClass: "_1fragem2d"
                    },
                    start: {
                        conditions: {
                            base: "_1fragem2i",
                            extraSmall: "_1fragem2j",
                            small: "_1fragem2k",
                            medium: "_1fragem2l",
                            large: "_1fragem2m"
                        },
                        defaultClass: "_1fragem2i"
                    },
                    end: {
                        conditions: {
                            base: "_1fragem2n",
                            extraSmall: "_1fragem2o",
                            small: "_1fragem2p",
                            medium: "_1fragem2q",
                            large: "_1fragem2r"
                        },
                        defaultClass: "_1fragem2n"
                    },
                    stretch: {
                        conditions: {
                            base: "_1fragem2s",
                            extraSmall: "_1fragem2t",
                            small: "_1fragem2u",
                            medium: "_1fragem2v",
                            large: "_1fragem2w"
                        },
                        defaultClass: "_1fragem2s"
                    }
                }
            },
            blockSize: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragem2x",
                            extraSmall: "_1fragem2y",
                            small: "_1fragem2z",
                            medium: "_1fragem30",
                            large: "_1fragem31"
                        },
                        defaultClass: "_1fragem2x"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragem32",
                            extraSmall: "_1fragem33",
                            small: "_1fragem34",
                            medium: "_1fragem35",
                            large: "_1fragem36"
                        },
                        defaultClass: "_1fragem32"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragem37",
                            extraSmall: "_1fragem38",
                            small: "_1fragem39",
                            medium: "_1fragem3a",
                            large: "_1fragem3b"
                        },
                        defaultClass: "_1fragem37"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragem3c",
                            extraSmall: "_1fragem3d",
                            small: "_1fragem3e",
                            medium: "_1fragem3f",
                            large: "_1fragem3g"
                        },
                        defaultClass: "_1fragem3c"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragem3h",
                            extraSmall: "_1fragem3i",
                            small: "_1fragem3j",
                            medium: "_1fragem3k",
                            large: "_1fragem3l"
                        },
                        defaultClass: "_1fragem3h"
                    },
                    base: {
                        conditions: {
                            base: "_1fragem3m",
                            extraSmall: "_1fragem3n",
                            small: "_1fragem3o",
                            medium: "_1fragem3p",
                            large: "_1fragem3q"
                        },
                        defaultClass: "_1fragem3m"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragem3r",
                            extraSmall: "_1fragem3s",
                            small: "_1fragem3t",
                            medium: "_1fragem3u",
                            large: "_1fragem3v"
                        },
                        defaultClass: "_1fragem3r"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragem3w",
                            extraSmall: "_1fragem3x",
                            small: "_1fragem3y",
                            medium: "_1fragem3z",
                            large: "_1fragem40"
                        },
                        defaultClass: "_1fragem3w"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragem41",
                            extraSmall: "_1fragem42",
                            small: "_1fragem43",
                            medium: "_1fragem44",
                            large: "_1fragem45"
                        },
                        defaultClass: "_1fragem41"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragem46",
                            extraSmall: "_1fragem47",
                            small: "_1fragem48",
                            medium: "_1fragem49",
                            large: "_1fragem4a"
                        },
                        defaultClass: "_1fragem46"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragem4b",
                            extraSmall: "_1fragem4c",
                            small: "_1fragem4d",
                            medium: "_1fragem4e",
                            large: "_1fragem4f"
                        },
                        defaultClass: "_1fragem4b"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragem4g",
                            extraSmall: "_1fragem4h",
                            small: "_1fragem4i",
                            medium: "_1fragem4j",
                            large: "_1fragem4k"
                        },
                        defaultClass: "_1fragem4g"
                    },
                    none: {
                        conditions: {
                            base: "_1fragem4l",
                            extraSmall: "_1fragem4m",
                            small: "_1fragem4n",
                            medium: "_1fragem4o",
                            large: "_1fragem4p"
                        },
                        defaultClass: "_1fragem4l"
                    },
                    fill: {
                        conditions: {
                            base: "_1fragem4q",
                            extraSmall: "_1fragem4r",
                            small: "_1fragem4s",
                            medium: "_1fragem4t",
                            large: "_1fragem4u"
                        },
                        defaultClass: "_1fragem4q"
                    },
                    "1lh": {
                        conditions: {
                            base: "_1fragem4v",
                            extraSmall: "_1fragem4w",
                            small: "_1fragem4x",
                            medium: "_1fragem4y",
                            large: "_1fragem4z"
                        },
                        defaultClass: "_1fragem4v"
                    }
                }
            },
            boxShadow: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragem50",
                            extraSmall: "_1fragem51",
                            small: "_1fragem52",
                            medium: "_1fragem53",
                            large: "_1fragem54"
                        },
                        defaultClass: "_1fragem50"
                    },
                    extraSmall: {
                        conditions: {
                            base: "_1fragem55",
                            extraSmall: "_1fragem56",
                            small: "_1fragem57",
                            medium: "_1fragem58",
                            large: "_1fragem59"
                        },
                        defaultClass: "_1fragem55"
                    },
                    small: {
                        conditions: {
                            base: "_1fragem5a",
                            extraSmall: "_1fragem5b",
                            small: "_1fragem5c",
                            medium: "_1fragem5d",
                            large: "_1fragem5e"
                        },
                        defaultClass: "_1fragem5a"
                    },
                    base: {
                        conditions: {
                            base: "_1fragem5f",
                            extraSmall: "_1fragem5g",
                            small: "_1fragem5h",
                            medium: "_1fragem5i",
                            large: "_1fragem5j"
                        },
                        defaultClass: "_1fragem5f"
                    },
                    large: {
                        conditions: {
                            base: "_1fragem5k",
                            extraSmall: "_1fragem5l",
                            small: "_1fragem5m",
                            medium: "_1fragem5n",
                            large: "_1fragem5o"
                        },
                        defaultClass: "_1fragem5k"
                    },
                    extraLarge: {
                        conditions: {
                            base: "_1fragem5p",
                            extraSmall: "_1fragem5q",
                            small: "_1fragem5r",
                            medium: "_1fragem5s",
                            large: "_1fragem5t"
                        },
                        defaultClass: "_1fragem5p"
                    }
                }
            },
            display: {
                values: {
                    block: {
                        conditions: {
                            base: "_1fragem5u",
                            extraSmall: "_1fragem5v",
                            small: "_1fragem5w",
                            medium: "_1fragem5x",
                            large: "_1fragem5y"
                        },
                        defaultClass: "_1fragem5u"
                    },
                    contents: {
                        conditions: {
                            base: "_1fragem5z",
                            extraSmall: "_1fragem60",
                            small: "_1fragem61",
                            medium: "_1fragem62",
                            large: "_1fragem63"
                        },
                        defaultClass: "_1fragem5z"
                    },
                    flex: {
                        conditions: {
                            base: "_1fragem64",
                            extraSmall: "_1fragem65",
                            small: "_1fragem66",
                            medium: "_1fragem67",
                            large: "_1fragem68"
                        },
                        defaultClass: "_1fragem64"
                    },
                    inline: {
                        conditions: {
                            base: "_1fragem69",
                            extraSmall: "_1fragem6a",
                            small: "_1fragem6b",
                            medium: "_1fragem6c",
                            large: "_1fragem6d"
                        },
                        defaultClass: "_1fragem69"
                    },
                    inlineBlock: {
                        conditions: {
                            base: "_1fragem6e",
                            extraSmall: "_1fragem6f",
                            small: "_1fragem6g",
                            medium: "_1fragem6h",
                            large: "_1fragem6i"
                        },
                        defaultClass: "_1fragem6e"
                    },
                    inlineFlex: {
                        conditions: {
                            base: "_1fragem6j",
                            extraSmall: "_1fragem6k",
                            small: "_1fragem6l",
                            medium: "_1fragem6m",
                            large: "_1fragem6n"
                        },
                        defaultClass: "_1fragem6j"
                    },
                    inlineGrid: {
                        conditions: {
                            base: "_1fragem6o",
                            extraSmall: "_1fragem6p",
                            small: "_1fragem6q",
                            medium: "_1fragem6r",
                            large: "_1fragem6s"
                        },
                        defaultClass: "_1fragem6o"
                    },
                    grid: {
                        conditions: {
                            base: "_1fragem6t",
                            extraSmall: "_1fragem6u",
                            small: "_1fragem6v",
                            medium: "_1fragem6w",
                            large: "_1fragem6x"
                        },
                        defaultClass: "_1fragem6t"
                    },
                    none: {
                        conditions: {
                            base: "_1fragem6y",
                            extraSmall: "_1fragem6z",
                            small: "_1fragem70",
                            medium: "_1fragem71",
                            large: "_1fragem72"
                        },
                        defaultClass: "_1fragem6y"
                    }
                }
            },
            flexDirection: {
                values: {
                    column: {
                        conditions: {
                            base: "_1fragem73",
                            extraSmall: "_1fragem74",
                            small: "_1fragem75",
                            medium: "_1fragem76",
                            large: "_1fragem77"
                        },
                        defaultClass: "_1fragem73"
                    },
                    row: {
                        conditions: {
                            base: "_1fragem78",
                            extraSmall: "_1fragem79",
                            small: "_1fragem7a",
                            medium: "_1fragem7b",
                            large: "_1fragem7c"
                        },
                        defaultClass: "_1fragem78"
                    }
                }
            },
            flexWrap: {
                values: {
                    wrap: {
                        conditions: {
                            base: "_1fragem7d",
                            extraSmall: "_1fragem7e",
                            small: "_1fragem7f",
                            medium: "_1fragem7g",
                            large: "_1fragem7h"
                        },
                        defaultClass: "_1fragem7d"
                    },
                    nowrap: {
                        conditions: {
                            base: "_1fragem7i",
                            extraSmall: "_1fragem7j",
                            small: "_1fragem7k",
                            medium: "_1fragem7l",
                            large: "_1fragem7m"
                        },
                        defaultClass: "_1fragem7i"
                    }
                }
            },
            rowGap: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragem7n",
                            extraSmall: "_1fragem7o",
                            small: "_1fragem7p",
                            medium: "_1fragem7q",
                            large: "_1fragem7r"
                        },
                        defaultClass: "_1fragem7n"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragem7s",
                            extraSmall: "_1fragem7t",
                            small: "_1fragem7u",
                            medium: "_1fragem7v",
                            large: "_1fragem7w"
                        },
                        defaultClass: "_1fragem7s"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragem7x",
                            extraSmall: "_1fragem7y",
                            small: "_1fragem7z",
                            medium: "_1fragem80",
                            large: "_1fragem81"
                        },
                        defaultClass: "_1fragem7x"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragem82",
                            extraSmall: "_1fragem83",
                            small: "_1fragem84",
                            medium: "_1fragem85",
                            large: "_1fragem86"
                        },
                        defaultClass: "_1fragem82"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragem87",
                            extraSmall: "_1fragem88",
                            small: "_1fragem89",
                            medium: "_1fragem8a",
                            large: "_1fragem8b"
                        },
                        defaultClass: "_1fragem87"
                    },
                    base: {
                        conditions: {
                            base: "_1fragem8c",
                            extraSmall: "_1fragem8d",
                            small: "_1fragem8e",
                            medium: "_1fragem8f",
                            large: "_1fragem8g"
                        },
                        defaultClass: "_1fragem8c"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragem8h",
                            extraSmall: "_1fragem8i",
                            small: "_1fragem8j",
                            medium: "_1fragem8k",
                            large: "_1fragem8l"
                        },
                        defaultClass: "_1fragem8h"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragem8m",
                            extraSmall: "_1fragem8n",
                            small: "_1fragem8o",
                            medium: "_1fragem8p",
                            large: "_1fragem8q"
                        },
                        defaultClass: "_1fragem8m"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragem8r",
                            extraSmall: "_1fragem8s",
                            small: "_1fragem8t",
                            medium: "_1fragem8u",
                            large: "_1fragem8v"
                        },
                        defaultClass: "_1fragem8r"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragem8w",
                            extraSmall: "_1fragem8x",
                            small: "_1fragem8y",
                            medium: "_1fragem8z",
                            large: "_1fragem90"
                        },
                        defaultClass: "_1fragem8w"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragem91",
                            extraSmall: "_1fragem92",
                            small: "_1fragem93",
                            medium: "_1fragem94",
                            large: "_1fragem95"
                        },
                        defaultClass: "_1fragem91"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragem96",
                            extraSmall: "_1fragem97",
                            small: "_1fragem98",
                            medium: "_1fragem99",
                            large: "_1fragem9a"
                        },
                        defaultClass: "_1fragem96"
                    },
                    none: {
                        conditions: {
                            base: "_1fragem9b",
                            extraSmall: "_1fragem9c",
                            small: "_1fragem9d",
                            medium: "_1fragem9e",
                            large: "_1fragem9f"
                        },
                        defaultClass: "_1fragem9b"
                    }
                }
            },
            columnGap: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragem9g",
                            extraSmall: "_1fragem9h",
                            small: "_1fragem9i",
                            medium: "_1fragem9j",
                            large: "_1fragem9k"
                        },
                        defaultClass: "_1fragem9g"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragem9l",
                            extraSmall: "_1fragem9m",
                            small: "_1fragem9n",
                            medium: "_1fragem9o",
                            large: "_1fragem9p"
                        },
                        defaultClass: "_1fragem9l"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragem9q",
                            extraSmall: "_1fragem9r",
                            small: "_1fragem9s",
                            medium: "_1fragem9t",
                            large: "_1fragem9u"
                        },
                        defaultClass: "_1fragem9q"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragem9v",
                            extraSmall: "_1fragem9w",
                            small: "_1fragem9x",
                            medium: "_1fragem9y",
                            large: "_1fragem9z"
                        },
                        defaultClass: "_1fragem9v"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragema0",
                            extraSmall: "_1fragema1",
                            small: "_1fragema2",
                            medium: "_1fragema3",
                            large: "_1fragema4"
                        },
                        defaultClass: "_1fragema0"
                    },
                    base: {
                        conditions: {
                            base: "_1fragema5",
                            extraSmall: "_1fragema6",
                            small: "_1fragema7",
                            medium: "_1fragema8",
                            large: "_1fragema9"
                        },
                        defaultClass: "_1fragema5"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemaa",
                            extraSmall: "_1fragemab",
                            small: "_1fragemac",
                            medium: "_1fragemad",
                            large: "_1fragemae"
                        },
                        defaultClass: "_1fragemaa"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemaf",
                            extraSmall: "_1fragemag",
                            small: "_1fragemah",
                            medium: "_1fragemai",
                            large: "_1fragemaj"
                        },
                        defaultClass: "_1fragemaf"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragemak",
                            extraSmall: "_1fragemal",
                            small: "_1fragemam",
                            medium: "_1frageman",
                            large: "_1fragemao"
                        },
                        defaultClass: "_1fragemak"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragemap",
                            extraSmall: "_1fragemaq",
                            small: "_1fragemar",
                            medium: "_1fragemas",
                            large: "_1fragemat"
                        },
                        defaultClass: "_1fragemap"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragemau",
                            extraSmall: "_1fragemav",
                            small: "_1fragemaw",
                            medium: "_1fragemax",
                            large: "_1fragemay"
                        },
                        defaultClass: "_1fragemau"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragemaz",
                            extraSmall: "_1fragemb0",
                            small: "_1fragemb1",
                            medium: "_1fragemb2",
                            large: "_1fragemb3"
                        },
                        defaultClass: "_1fragemaz"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemb4",
                            extraSmall: "_1fragemb5",
                            small: "_1fragemb6",
                            medium: "_1fragemb7",
                            large: "_1fragemb8"
                        },
                        defaultClass: "_1fragemb4"
                    }
                }
            },
            justifyContent: {
                values: {
                    around: {
                        conditions: {
                            base: "_1fragemb9",
                            extraSmall: "_1fragemba",
                            small: "_1fragembb",
                            medium: "_1fragembc",
                            large: "_1fragembd"
                        },
                        defaultClass: "_1fragemb9"
                    },
                    between: {
                        conditions: {
                            base: "_1fragembe",
                            extraSmall: "_1fragembf",
                            small: "_1fragembg",
                            medium: "_1fragembh",
                            large: "_1fragembi"
                        },
                        defaultClass: "_1fragembe"
                    },
                    center: {
                        conditions: {
                            base: "_1fragembj",
                            extraSmall: "_1fragembk",
                            small: "_1fragembl",
                            medium: "_1fragembm",
                            large: "_1fragembn"
                        },
                        defaultClass: "_1fragembj"
                    },
                    centerSafe: {
                        conditions: {
                            base: "_1fragembo",
                            extraSmall: "_1fragembp",
                            small: "_1fragembq",
                            medium: "_1fragembr",
                            large: "_1fragembs"
                        },
                        defaultClass: "_1fragembo"
                    },
                    end: {
                        conditions: {
                            base: "_1fragembt",
                            extraSmall: "_1fragembu",
                            small: "_1fragembv",
                            medium: "_1fragembw",
                            large: "_1fragembx"
                        },
                        defaultClass: "_1fragembt"
                    },
                    evenly: {
                        conditions: {
                            base: "_1fragemby",
                            extraSmall: "_1fragembz",
                            small: "_1fragemc0",
                            medium: "_1fragemc1",
                            large: "_1fragemc2"
                        },
                        defaultClass: "_1fragemby"
                    },
                    normal: {
                        conditions: {
                            base: "_1fragemc3",
                            extraSmall: "_1fragemc4",
                            small: "_1fragemc5",
                            medium: "_1fragemc6",
                            large: "_1fragemc7"
                        },
                        defaultClass: "_1fragemc3"
                    },
                    start: {
                        conditions: {
                            base: "_1fragemc8",
                            extraSmall: "_1fragemc9",
                            small: "_1fragemca",
                            medium: "_1fragemcb",
                            large: "_1fragemcc"
                        },
                        defaultClass: "_1fragemc8"
                    },
                    stretch: {
                        conditions: {
                            base: "_1fragemcd",
                            extraSmall: "_1fragemce",
                            small: "_1fragemcf",
                            medium: "_1fragemcg",
                            large: "_1fragemch"
                        },
                        defaultClass: "_1fragemcd"
                    }
                }
            },
            justifyItems: {
                values: {
                    baseline: {
                        conditions: {
                            base: "_1fragemci",
                            extraSmall: "_1fragemcj",
                            small: "_1fragemck",
                            medium: "_1fragemcl",
                            large: "_1fragemcm"
                        },
                        defaultClass: "_1fragemci"
                    },
                    center: {
                        conditions: {
                            base: "_1fragemcn",
                            extraSmall: "_1fragemco",
                            small: "_1fragemcp",
                            medium: "_1fragemcq",
                            large: "_1fragemcr"
                        },
                        defaultClass: "_1fragemcn"
                    },
                    end: {
                        conditions: {
                            base: "_1fragemcs",
                            extraSmall: "_1fragemct",
                            small: "_1fragemcu",
                            medium: "_1fragemcv",
                            large: "_1fragemcw"
                        },
                        defaultClass: "_1fragemcs"
                    },
                    normal: {
                        conditions: {
                            base: "_1fragemcx",
                            extraSmall: "_1fragemcy",
                            small: "_1fragemcz",
                            medium: "_1fragemd0",
                            large: "_1fragemd1"
                        },
                        defaultClass: "_1fragemcx"
                    },
                    start: {
                        conditions: {
                            base: "_1fragemd2",
                            extraSmall: "_1fragemd3",
                            small: "_1fragemd4",
                            medium: "_1fragemd5",
                            large: "_1fragemd6"
                        },
                        defaultClass: "_1fragemd2"
                    },
                    stretch: {
                        conditions: {
                            base: "_1fragemd7",
                            extraSmall: "_1fragemd8",
                            small: "_1fragemd9",
                            medium: "_1fragemda",
                            large: "_1fragemdb"
                        },
                        defaultClass: "_1fragemd7"
                    }
                }
            },
            borderInlineStart: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemdc",
                            extraSmall: "_1fragemdd",
                            small: "_1fragemde",
                            medium: "_1fragemdf",
                            large: "_1fragemdg"
                        },
                        defaultClass: "_1fragemdc"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemdh",
                            extraSmall: "_1fragemdi",
                            small: "_1fragemdj",
                            medium: "_1fragemdk",
                            large: "_1fragemdl"
                        },
                        defaultClass: "_1fragemdh"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemdm",
                            extraSmall: "_1fragemdn",
                            small: "_1fragemdo",
                            medium: "_1fragemdp",
                            large: "_1fragemdq"
                        },
                        defaultClass: "_1fragemdm"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemdr",
                            extraSmall: "_1fragemds",
                            small: "_1fragemdt",
                            medium: "_1fragemdu",
                            large: "_1fragemdv"
                        },
                        defaultClass: "_1fragemdr"
                    }
                }
            },
            borderInlineEnd: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemdw",
                            extraSmall: "_1fragemdx",
                            small: "_1fragemdy",
                            medium: "_1fragemdz",
                            large: "_1frageme0"
                        },
                        defaultClass: "_1fragemdw"
                    },
                    base: {
                        conditions: {
                            base: "_1frageme1",
                            extraSmall: "_1frageme2",
                            small: "_1frageme3",
                            medium: "_1frageme4",
                            large: "_1frageme5"
                        },
                        defaultClass: "_1frageme1"
                    },
                    dotted: {
                        conditions: {
                            base: "_1frageme6",
                            extraSmall: "_1frageme7",
                            small: "_1frageme8",
                            medium: "_1frageme9",
                            large: "_1fragemea"
                        },
                        defaultClass: "_1frageme6"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemeb",
                            extraSmall: "_1fragemec",
                            small: "_1fragemed",
                            medium: "_1fragemee",
                            large: "_1fragemef"
                        },
                        defaultClass: "_1fragemeb"
                    }
                }
            },
            borderBlockStart: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemeg",
                            extraSmall: "_1fragemeh",
                            small: "_1fragemei",
                            medium: "_1fragemej",
                            large: "_1fragemek"
                        },
                        defaultClass: "_1fragemeg"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemel",
                            extraSmall: "_1fragemem",
                            small: "_1fragemen",
                            medium: "_1fragemeo",
                            large: "_1fragemep"
                        },
                        defaultClass: "_1fragemel"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemeq",
                            extraSmall: "_1fragemer",
                            small: "_1fragemes",
                            medium: "_1fragemet",
                            large: "_1fragemeu"
                        },
                        defaultClass: "_1fragemeq"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemev",
                            extraSmall: "_1fragemew",
                            small: "_1fragemex",
                            medium: "_1fragemey",
                            large: "_1fragemez"
                        },
                        defaultClass: "_1fragemev"
                    }
                }
            },
            borderBlockEnd: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemf0",
                            extraSmall: "_1fragemf1",
                            small: "_1fragemf2",
                            medium: "_1fragemf3",
                            large: "_1fragemf4"
                        },
                        defaultClass: "_1fragemf0"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemf5",
                            extraSmall: "_1fragemf6",
                            small: "_1fragemf7",
                            medium: "_1fragemf8",
                            large: "_1fragemf9"
                        },
                        defaultClass: "_1fragemf5"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemfa",
                            extraSmall: "_1fragemfb",
                            small: "_1fragemfc",
                            medium: "_1fragemfd",
                            large: "_1fragemfe"
                        },
                        defaultClass: "_1fragemfa"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemff",
                            extraSmall: "_1fragemfg",
                            small: "_1fragemfh",
                            medium: "_1fragemfi",
                            large: "_1fragemfj"
                        },
                        defaultClass: "_1fragemff"
                    }
                }
            },
            borderStartStartRadius: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemfk",
                            extraSmall: "_1fragemfl",
                            small: "_1fragemfm",
                            medium: "_1fragemfn",
                            large: "_1fragemfo"
                        },
                        defaultClass: "_1fragemfk"
                    },
                    small: {
                        conditions: {
                            base: "_1fragemfp",
                            extraSmall: "_1fragemfq",
                            small: "_1fragemfr",
                            medium: "_1fragemfs",
                            large: "_1fragemft"
                        },
                        defaultClass: "_1fragemfp"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemfu",
                            extraSmall: "_1fragemfv",
                            small: "_1fragemfw",
                            medium: "_1fragemfx",
                            large: "_1fragemfy"
                        },
                        defaultClass: "_1fragemfu"
                    },
                    large: {
                        conditions: {
                            base: "_1fragemfz",
                            extraSmall: "_1fragemg0",
                            small: "_1fragemg1",
                            medium: "_1fragemg2",
                            large: "_1fragemg3"
                        },
                        defaultClass: "_1fragemfz"
                    },
                    fullyRounded: {
                        conditions: {
                            base: "_1fragemg4",
                            extraSmall: "_1fragemg5",
                            small: "_1fragemg6",
                            medium: "_1fragemg7",
                            large: "_1fragemg8"
                        },
                        defaultClass: "_1fragemg4"
                    },
                    max: {
                        conditions: {
                            base: "_1fragemg9",
                            extraSmall: "_1fragemga",
                            small: "_1fragemgb",
                            medium: "_1fragemgc",
                            large: "_1fragemgd"
                        },
                        defaultClass: "_1fragemg9"
                    }
                }
            },
            borderStartEndRadius: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemge",
                            extraSmall: "_1fragemgf",
                            small: "_1fragemgg",
                            medium: "_1fragemgh",
                            large: "_1fragemgi"
                        },
                        defaultClass: "_1fragemge"
                    },
                    small: {
                        conditions: {
                            base: "_1fragemgj",
                            extraSmall: "_1fragemgk",
                            small: "_1fragemgl",
                            medium: "_1fragemgm",
                            large: "_1fragemgn"
                        },
                        defaultClass: "_1fragemgj"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemgo",
                            extraSmall: "_1fragemgp",
                            small: "_1fragemgq",
                            medium: "_1fragemgr",
                            large: "_1fragemgs"
                        },
                        defaultClass: "_1fragemgo"
                    },
                    large: {
                        conditions: {
                            base: "_1fragemgt",
                            extraSmall: "_1fragemgu",
                            small: "_1fragemgv",
                            medium: "_1fragemgw",
                            large: "_1fragemgx"
                        },
                        defaultClass: "_1fragemgt"
                    },
                    fullyRounded: {
                        conditions: {
                            base: "_1fragemgy",
                            extraSmall: "_1fragemgz",
                            small: "_1fragemh0",
                            medium: "_1fragemh1",
                            large: "_1fragemh2"
                        },
                        defaultClass: "_1fragemgy"
                    },
                    max: {
                        conditions: {
                            base: "_1fragemh3",
                            extraSmall: "_1fragemh4",
                            small: "_1fragemh5",
                            medium: "_1fragemh6",
                            large: "_1fragemh7"
                        },
                        defaultClass: "_1fragemh3"
                    }
                }
            },
            borderEndStartRadius: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemh8",
                            extraSmall: "_1fragemh9",
                            small: "_1fragemha",
                            medium: "_1fragemhb",
                            large: "_1fragemhc"
                        },
                        defaultClass: "_1fragemh8"
                    },
                    small: {
                        conditions: {
                            base: "_1fragemhd",
                            extraSmall: "_1fragemhe",
                            small: "_1fragemhf",
                            medium: "_1fragemhg",
                            large: "_1fragemhh"
                        },
                        defaultClass: "_1fragemhd"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemhi",
                            extraSmall: "_1fragemhj",
                            small: "_1fragemhk",
                            medium: "_1fragemhl",
                            large: "_1fragemhm"
                        },
                        defaultClass: "_1fragemhi"
                    },
                    large: {
                        conditions: {
                            base: "_1fragemhn",
                            extraSmall: "_1fragemho",
                            small: "_1fragemhp",
                            medium: "_1fragemhq",
                            large: "_1fragemhr"
                        },
                        defaultClass: "_1fragemhn"
                    },
                    fullyRounded: {
                        conditions: {
                            base: "_1fragemhs",
                            extraSmall: "_1fragemht",
                            small: "_1fragemhu",
                            medium: "_1fragemhv",
                            large: "_1fragemhw"
                        },
                        defaultClass: "_1fragemhs"
                    },
                    max: {
                        conditions: {
                            base: "_1fragemhx",
                            extraSmall: "_1fragemhy",
                            small: "_1fragemhz",
                            medium: "_1fragemi0",
                            large: "_1fragemi1"
                        },
                        defaultClass: "_1fragemhx"
                    }
                }
            },
            borderEndEndRadius: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemi2",
                            extraSmall: "_1fragemi3",
                            small: "_1fragemi4",
                            medium: "_1fragemi5",
                            large: "_1fragemi6"
                        },
                        defaultClass: "_1fragemi2"
                    },
                    small: {
                        conditions: {
                            base: "_1fragemi7",
                            extraSmall: "_1fragemi8",
                            small: "_1fragemi9",
                            medium: "_1fragemia",
                            large: "_1fragemib"
                        },
                        defaultClass: "_1fragemi7"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemic",
                            extraSmall: "_1fragemid",
                            small: "_1fragemie",
                            medium: "_1fragemif",
                            large: "_1fragemig"
                        },
                        defaultClass: "_1fragemic"
                    },
                    large: {
                        conditions: {
                            base: "_1fragemih",
                            extraSmall: "_1fragemii",
                            small: "_1fragemij",
                            medium: "_1fragemik",
                            large: "_1fragemil"
                        },
                        defaultClass: "_1fragemih"
                    },
                    fullyRounded: {
                        conditions: {
                            base: "_1fragemim",
                            extraSmall: "_1fragemin",
                            small: "_1fragemio",
                            medium: "_1fragemip",
                            large: "_1fragemiq"
                        },
                        defaultClass: "_1fragemim"
                    },
                    max: {
                        conditions: {
                            base: "_1fragemir",
                            extraSmall: "_1fragemis",
                            small: "_1fragemit",
                            medium: "_1fragemiu",
                            large: "_1fragemiv"
                        },
                        defaultClass: "_1fragemir"
                    }
                }
            },
            borderInlineStartStyle: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemiw",
                            extraSmall: "_1fragemix",
                            small: "_1fragemiy",
                            medium: "_1fragemiz",
                            large: "_1fragemj0"
                        },
                        defaultClass: "_1fragemiw"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemj1",
                            extraSmall: "_1fragemj2",
                            small: "_1fragemj3",
                            medium: "_1fragemj4",
                            large: "_1fragemj5"
                        },
                        defaultClass: "_1fragemj1"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemj6",
                            extraSmall: "_1fragemj7",
                            small: "_1fragemj8",
                            medium: "_1fragemj9",
                            large: "_1fragemja"
                        },
                        defaultClass: "_1fragemj6"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemjb",
                            extraSmall: "_1fragemjc",
                            small: "_1fragemjd",
                            medium: "_1fragemje",
                            large: "_1fragemjf"
                        },
                        defaultClass: "_1fragemjb"
                    }
                }
            },
            borderInlineEndStyle: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemjg",
                            extraSmall: "_1fragemjh",
                            small: "_1fragemji",
                            medium: "_1fragemjj",
                            large: "_1fragemjk"
                        },
                        defaultClass: "_1fragemjg"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemjl",
                            extraSmall: "_1fragemjm",
                            small: "_1fragemjn",
                            medium: "_1fragemjo",
                            large: "_1fragemjp"
                        },
                        defaultClass: "_1fragemjl"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemjq",
                            extraSmall: "_1fragemjr",
                            small: "_1fragemjs",
                            medium: "_1fragemjt",
                            large: "_1fragemju"
                        },
                        defaultClass: "_1fragemjq"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemjv",
                            extraSmall: "_1fragemjw",
                            small: "_1fragemjx",
                            medium: "_1fragemjy",
                            large: "_1fragemjz"
                        },
                        defaultClass: "_1fragemjv"
                    }
                }
            },
            borderBlockStartStyle: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemk0",
                            extraSmall: "_1fragemk1",
                            small: "_1fragemk2",
                            medium: "_1fragemk3",
                            large: "_1fragemk4"
                        },
                        defaultClass: "_1fragemk0"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemk5",
                            extraSmall: "_1fragemk6",
                            small: "_1fragemk7",
                            medium: "_1fragemk8",
                            large: "_1fragemk9"
                        },
                        defaultClass: "_1fragemk5"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemka",
                            extraSmall: "_1fragemkb",
                            small: "_1fragemkc",
                            medium: "_1fragemkd",
                            large: "_1fragemke"
                        },
                        defaultClass: "_1fragemka"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemkf",
                            extraSmall: "_1fragemkg",
                            small: "_1fragemkh",
                            medium: "_1fragemki",
                            large: "_1fragemkj"
                        },
                        defaultClass: "_1fragemkf"
                    }
                }
            },
            borderBlockEndStyle: {
                values: {
                    none: {
                        conditions: {
                            base: "_1fragemkk",
                            extraSmall: "_1fragemkl",
                            small: "_1fragemkm",
                            medium: "_1fragemkn",
                            large: "_1fragemko"
                        },
                        defaultClass: "_1fragemkk"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemkp",
                            extraSmall: "_1fragemkq",
                            small: "_1fragemkr",
                            medium: "_1fragemks",
                            large: "_1fragemkt"
                        },
                        defaultClass: "_1fragemkp"
                    },
                    dotted: {
                        conditions: {
                            base: "_1fragemku",
                            extraSmall: "_1fragemkv",
                            small: "_1fragemkw",
                            medium: "_1fragemkx",
                            large: "_1fragemky"
                        },
                        defaultClass: "_1fragemku"
                    },
                    dashed: {
                        conditions: {
                            base: "_1fragemkz",
                            extraSmall: "_1frageml0",
                            small: "_1frageml1",
                            medium: "_1frageml2",
                            large: "_1frageml3"
                        },
                        defaultClass: "_1fragemkz"
                    }
                }
            },
            borderInlineStartWidth: {
                values: {
                    base: {
                        conditions: {
                            base: "_1frageml4",
                            extraSmall: "_1frageml5",
                            small: "_1frageml6",
                            medium: "_1frageml7",
                            large: "_1frageml8"
                        },
                        defaultClass: "_1frageml4"
                    },
                    large100: {
                        conditions: {
                            base: "_1frageml9",
                            extraSmall: "_1fragemla",
                            small: "_1fragemlb",
                            medium: "_1fragemlc",
                            large: "_1fragemld"
                        },
                        defaultClass: "_1frageml9"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemle",
                            extraSmall: "_1fragemlf",
                            small: "_1fragemlg",
                            medium: "_1fragemlh",
                            large: "_1fragemli"
                        },
                        defaultClass: "_1fragemle"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemlj",
                            extraSmall: "_1fragemlk",
                            small: "_1fragemll",
                            medium: "_1fragemlm",
                            large: "_1fragemln"
                        },
                        defaultClass: "_1fragemlj"
                    }
                }
            },
            borderInlineEndWidth: {
                values: {
                    base: {
                        conditions: {
                            base: "_1fragemlo",
                            extraSmall: "_1fragemlp",
                            small: "_1fragemlq",
                            medium: "_1fragemlr",
                            large: "_1fragemls"
                        },
                        defaultClass: "_1fragemlo"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemlt",
                            extraSmall: "_1fragemlu",
                            small: "_1fragemlv",
                            medium: "_1fragemlw",
                            large: "_1fragemlx"
                        },
                        defaultClass: "_1fragemlt"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemly",
                            extraSmall: "_1fragemlz",
                            small: "_1fragemm0",
                            medium: "_1fragemm1",
                            large: "_1fragemm2"
                        },
                        defaultClass: "_1fragemly"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemm3",
                            extraSmall: "_1fragemm4",
                            small: "_1fragemm5",
                            medium: "_1fragemm6",
                            large: "_1fragemm7"
                        },
                        defaultClass: "_1fragemm3"
                    }
                }
            },
            borderBlockStartWidth: {
                values: {
                    base: {
                        conditions: {
                            base: "_1fragemm8",
                            extraSmall: "_1fragemm9",
                            small: "_1fragemma",
                            medium: "_1fragemmb",
                            large: "_1fragemmc"
                        },
                        defaultClass: "_1fragemm8"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemmd",
                            extraSmall: "_1fragemme",
                            small: "_1fragemmf",
                            medium: "_1fragemmg",
                            large: "_1fragemmh"
                        },
                        defaultClass: "_1fragemmd"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemmi",
                            extraSmall: "_1fragemmj",
                            small: "_1fragemmk",
                            medium: "_1fragemml",
                            large: "_1fragemmm"
                        },
                        defaultClass: "_1fragemmi"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemmn",
                            extraSmall: "_1fragemmo",
                            small: "_1fragemmp",
                            medium: "_1fragemmq",
                            large: "_1fragemmr"
                        },
                        defaultClass: "_1fragemmn"
                    }
                }
            },
            borderBlockEndWidth: {
                values: {
                    base: {
                        conditions: {
                            base: "_1fragemms",
                            extraSmall: "_1fragemmt",
                            small: "_1fragemmu",
                            medium: "_1fragemmv",
                            large: "_1fragemmw"
                        },
                        defaultClass: "_1fragemms"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemmx",
                            extraSmall: "_1fragemmy",
                            small: "_1fragemmz",
                            medium: "_1fragemn0",
                            large: "_1fragemn1"
                        },
                        defaultClass: "_1fragemmx"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemn2",
                            extraSmall: "_1fragemn3",
                            small: "_1fragemn4",
                            medium: "_1fragemn5",
                            large: "_1fragemn6"
                        },
                        defaultClass: "_1fragemn2"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemn7",
                            extraSmall: "_1fragemn8",
                            small: "_1fragemn9",
                            medium: "_1fragemna",
                            large: "_1fragemnb"
                        },
                        defaultClass: "_1fragemn7"
                    }
                }
            },
            paddingBlockEnd: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragemnc",
                            extraSmall: "_1fragemnd",
                            small: "_1fragemne",
                            medium: "_1fragemnf",
                            large: "_1fragemng"
                        },
                        defaultClass: "_1fragemnc"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragemnh",
                            extraSmall: "_1fragemni",
                            small: "_1fragemnj",
                            medium: "_1fragemnk",
                            large: "_1fragemnl"
                        },
                        defaultClass: "_1fragemnh"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragemnm",
                            extraSmall: "_1fragemnn",
                            small: "_1fragemno",
                            medium: "_1fragemnp",
                            large: "_1fragemnq"
                        },
                        defaultClass: "_1fragemnm"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragemnr",
                            extraSmall: "_1fragemns",
                            small: "_1fragemnt",
                            medium: "_1fragemnu",
                            large: "_1fragemnv"
                        },
                        defaultClass: "_1fragemnr"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragemnw",
                            extraSmall: "_1fragemnx",
                            small: "_1fragemny",
                            medium: "_1fragemnz",
                            large: "_1fragemo0"
                        },
                        defaultClass: "_1fragemnw"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemo1",
                            extraSmall: "_1fragemo2",
                            small: "_1fragemo3",
                            medium: "_1fragemo4",
                            large: "_1fragemo5"
                        },
                        defaultClass: "_1fragemo1"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemo6",
                            extraSmall: "_1fragemo7",
                            small: "_1fragemo8",
                            medium: "_1fragemo9",
                            large: "_1fragemoa"
                        },
                        defaultClass: "_1fragemo6"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemob",
                            extraSmall: "_1fragemoc",
                            small: "_1fragemod",
                            medium: "_1fragemoe",
                            large: "_1fragemof"
                        },
                        defaultClass: "_1fragemob"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragemog",
                            extraSmall: "_1fragemoh",
                            small: "_1fragemoi",
                            medium: "_1fragemoj",
                            large: "_1fragemok"
                        },
                        defaultClass: "_1fragemog"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragemol",
                            extraSmall: "_1fragemom",
                            small: "_1fragemon",
                            medium: "_1fragemoo",
                            large: "_1fragemop"
                        },
                        defaultClass: "_1fragemol"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragemoq",
                            extraSmall: "_1fragemor",
                            small: "_1fragemos",
                            medium: "_1fragemot",
                            large: "_1fragemou"
                        },
                        defaultClass: "_1fragemoq"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragemov",
                            extraSmall: "_1fragemow",
                            small: "_1fragemox",
                            medium: "_1fragemoy",
                            large: "_1fragemoz"
                        },
                        defaultClass: "_1fragemov"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemp0",
                            extraSmall: "_1fragemp1",
                            small: "_1fragemp2",
                            medium: "_1fragemp3",
                            large: "_1fragemp4"
                        },
                        defaultClass: "_1fragemp0"
                    }
                }
            },
            paddingBlockStart: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragemp5",
                            extraSmall: "_1fragemp6",
                            small: "_1fragemp7",
                            medium: "_1fragemp8",
                            large: "_1fragemp9"
                        },
                        defaultClass: "_1fragemp5"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragempa",
                            extraSmall: "_1fragempb",
                            small: "_1fragempc",
                            medium: "_1fragempd",
                            large: "_1fragempe"
                        },
                        defaultClass: "_1fragempa"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragempf",
                            extraSmall: "_1fragempg",
                            small: "_1fragemph",
                            medium: "_1fragempi",
                            large: "_1fragempj"
                        },
                        defaultClass: "_1fragempf"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragempk",
                            extraSmall: "_1fragempl",
                            small: "_1fragempm",
                            medium: "_1fragempn",
                            large: "_1fragempo"
                        },
                        defaultClass: "_1fragempk"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragempp",
                            extraSmall: "_1fragempq",
                            small: "_1fragempr",
                            medium: "_1fragemps",
                            large: "_1fragempt"
                        },
                        defaultClass: "_1fragempp"
                    },
                    base: {
                        conditions: {
                            base: "_1fragempu",
                            extraSmall: "_1fragempv",
                            small: "_1fragempw",
                            medium: "_1fragempx",
                            large: "_1fragempy"
                        },
                        defaultClass: "_1fragempu"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragempz",
                            extraSmall: "_1fragemq0",
                            small: "_1fragemq1",
                            medium: "_1fragemq2",
                            large: "_1fragemq3"
                        },
                        defaultClass: "_1fragempz"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemq4",
                            extraSmall: "_1fragemq5",
                            small: "_1fragemq6",
                            medium: "_1fragemq7",
                            large: "_1fragemq8"
                        },
                        defaultClass: "_1fragemq4"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragemq9",
                            extraSmall: "_1fragemqa",
                            small: "_1fragemqb",
                            medium: "_1fragemqc",
                            large: "_1fragemqd"
                        },
                        defaultClass: "_1fragemq9"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragemqe",
                            extraSmall: "_1fragemqf",
                            small: "_1fragemqg",
                            medium: "_1fragemqh",
                            large: "_1fragemqi"
                        },
                        defaultClass: "_1fragemqe"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragemqj",
                            extraSmall: "_1fragemqk",
                            small: "_1fragemql",
                            medium: "_1fragemqm",
                            large: "_1fragemqn"
                        },
                        defaultClass: "_1fragemqj"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragemqo",
                            extraSmall: "_1fragemqp",
                            small: "_1fragemqq",
                            medium: "_1fragemqr",
                            large: "_1fragemqs"
                        },
                        defaultClass: "_1fragemqo"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemqt",
                            extraSmall: "_1fragemqu",
                            small: "_1fragemqv",
                            medium: "_1fragemqw",
                            large: "_1fragemqx"
                        },
                        defaultClass: "_1fragemqt"
                    }
                }
            },
            paddingInlineEnd: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragemqy",
                            extraSmall: "_1fragemqz",
                            small: "_1fragemr0",
                            medium: "_1fragemr1",
                            large: "_1fragemr2"
                        },
                        defaultClass: "_1fragemqy"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragemr3",
                            extraSmall: "_1fragemr4",
                            small: "_1fragemr5",
                            medium: "_1fragemr6",
                            large: "_1fragemr7"
                        },
                        defaultClass: "_1fragemr3"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragemr8",
                            extraSmall: "_1fragemr9",
                            small: "_1fragemra",
                            medium: "_1fragemrb",
                            large: "_1fragemrc"
                        },
                        defaultClass: "_1fragemr8"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragemrd",
                            extraSmall: "_1fragemre",
                            small: "_1fragemrf",
                            medium: "_1fragemrg",
                            large: "_1fragemrh"
                        },
                        defaultClass: "_1fragemrd"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragemri",
                            extraSmall: "_1fragemrj",
                            small: "_1fragemrk",
                            medium: "_1fragemrl",
                            large: "_1fragemrm"
                        },
                        defaultClass: "_1fragemri"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemrn",
                            extraSmall: "_1fragemro",
                            small: "_1fragemrp",
                            medium: "_1fragemrq",
                            large: "_1fragemrr"
                        },
                        defaultClass: "_1fragemrn"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemrs",
                            extraSmall: "_1fragemrt",
                            small: "_1fragemru",
                            medium: "_1fragemrv",
                            large: "_1fragemrw"
                        },
                        defaultClass: "_1fragemrs"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemrx",
                            extraSmall: "_1fragemry",
                            small: "_1fragemrz",
                            medium: "_1fragems0",
                            large: "_1fragems1"
                        },
                        defaultClass: "_1fragemrx"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragems2",
                            extraSmall: "_1fragems3",
                            small: "_1fragems4",
                            medium: "_1fragems5",
                            large: "_1fragems6"
                        },
                        defaultClass: "_1fragems2"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragems7",
                            extraSmall: "_1fragems8",
                            small: "_1fragems9",
                            medium: "_1fragemsa",
                            large: "_1fragemsb"
                        },
                        defaultClass: "_1fragems7"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragemsc",
                            extraSmall: "_1fragemsd",
                            small: "_1fragemse",
                            medium: "_1fragemsf",
                            large: "_1fragemsg"
                        },
                        defaultClass: "_1fragemsc"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragemsh",
                            extraSmall: "_1fragemsi",
                            small: "_1fragemsj",
                            medium: "_1fragemsk",
                            large: "_1fragemsl"
                        },
                        defaultClass: "_1fragemsh"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemsm",
                            extraSmall: "_1fragemsn",
                            small: "_1fragemso",
                            medium: "_1fragemsp",
                            large: "_1fragemsq"
                        },
                        defaultClass: "_1fragemsm"
                    }
                }
            },
            paddingInlineStart: {
                values: {
                    small500: {
                        conditions: {
                            base: "_1fragemsr",
                            extraSmall: "_1fragemss",
                            small: "_1fragemst",
                            medium: "_1fragemsu",
                            large: "_1fragemsv"
                        },
                        defaultClass: "_1fragemsr"
                    },
                    small400: {
                        conditions: {
                            base: "_1fragemsw",
                            extraSmall: "_1fragemsx",
                            small: "_1fragemsy",
                            medium: "_1fragemsz",
                            large: "_1fragemt0"
                        },
                        defaultClass: "_1fragemsw"
                    },
                    small300: {
                        conditions: {
                            base: "_1fragemt1",
                            extraSmall: "_1fragemt2",
                            small: "_1fragemt3",
                            medium: "_1fragemt4",
                            large: "_1fragemt5"
                        },
                        defaultClass: "_1fragemt1"
                    },
                    small200: {
                        conditions: {
                            base: "_1fragemt6",
                            extraSmall: "_1fragemt7",
                            small: "_1fragemt8",
                            medium: "_1fragemt9",
                            large: "_1fragemta"
                        },
                        defaultClass: "_1fragemt6"
                    },
                    small100: {
                        conditions: {
                            base: "_1fragemtb",
                            extraSmall: "_1fragemtc",
                            small: "_1fragemtd",
                            medium: "_1fragemte",
                            large: "_1fragemtf"
                        },
                        defaultClass: "_1fragemtb"
                    },
                    base: {
                        conditions: {
                            base: "_1fragemtg",
                            extraSmall: "_1fragemth",
                            small: "_1fragemti",
                            medium: "_1fragemtj",
                            large: "_1fragemtk"
                        },
                        defaultClass: "_1fragemtg"
                    },
                    large100: {
                        conditions: {
                            base: "_1fragemtl",
                            extraSmall: "_1fragemtm",
                            small: "_1fragemtn",
                            medium: "_1fragemto",
                            large: "_1fragemtp"
                        },
                        defaultClass: "_1fragemtl"
                    },
                    large200: {
                        conditions: {
                            base: "_1fragemtq",
                            extraSmall: "_1fragemtr",
                            small: "_1fragemts",
                            medium: "_1fragemtt",
                            large: "_1fragemtu"
                        },
                        defaultClass: "_1fragemtq"
                    },
                    large300: {
                        conditions: {
                            base: "_1fragemtv",
                            extraSmall: "_1fragemtw",
                            small: "_1fragemtx",
                            medium: "_1fragemty",
                            large: "_1fragemtz"
                        },
                        defaultClass: "_1fragemtv"
                    },
                    large400: {
                        conditions: {
                            base: "_1fragemu0",
                            extraSmall: "_1fragemu1",
                            small: "_1fragemu2",
                            medium: "_1fragemu3",
                            large: "_1fragemu4"
                        },
                        defaultClass: "_1fragemu0"
                    },
                    large500: {
                        conditions: {
                            base: "_1fragemu5",
                            extraSmall: "_1fragemu6",
                            small: "_1fragemu7",
                            medium: "_1fragemu8",
                            large: "_1fragemu9"
                        },
                        defaultClass: "_1fragemu5"
                    },
                    large600: {
                        conditions: {
                            base: "_1fragemua",
                            extraSmall: "_1fragemub",
                            small: "_1fragemuc",
                            medium: "_1fragemud",
                            large: "_1fragemue"
                        },
                        defaultClass: "_1fragemua"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemuf",
                            extraSmall: "_1fragemug",
                            small: "_1fragemuh",
                            medium: "_1fragemui",
                            large: "_1fragemuj"
                        },
                        defaultClass: "_1fragemuf"
                    }
                }
            },
            overflowBlock: {
                values: {
                    auto: {
                        conditions: {
                            base: "_1fragemuk",
                            extraSmall: "_1fragemul",
                            small: "_1fragemum",
                            medium: "_1fragemun",
                            large: "_1fragemuo"
                        },
                        defaultClass: "_1fragemuk"
                    },
                    hidden: {
                        conditions: {
                            base: "_1fragemup",
                            extraSmall: "_1fragemuq",
                            small: "_1fragemur",
                            medium: "_1fragemus",
                            large: "_1fragemut"
                        },
                        defaultClass: "_1fragemup"
                    },
                    scroll: {
                        conditions: {
                            base: "_1fragemuu",
                            extraSmall: "_1fragemuv",
                            small: "_1fragemuw",
                            medium: "_1fragemux",
                            large: "_1fragemuy"
                        },
                        defaultClass: "_1fragemuu"
                    }
                }
            },
            overflowInline: {
                values: {
                    auto: {
                        conditions: {
                            base: "_1fragemuz",
                            extraSmall: "_1fragemv0",
                            small: "_1fragemv1",
                            medium: "_1fragemv2",
                            large: "_1fragemv3"
                        },
                        defaultClass: "_1fragemuz"
                    },
                    hidden: {
                        conditions: {
                            base: "_1fragemv4",
                            extraSmall: "_1fragemv5",
                            small: "_1fragemv6",
                            medium: "_1fragemv7",
                            large: "_1fragemv8"
                        },
                        defaultClass: "_1fragemv4"
                    },
                    scroll: {
                        conditions: {
                            base: "_1fragemv9",
                            extraSmall: "_1fragemva",
                            small: "_1fragemvb",
                            medium: "_1fragemvc",
                            large: "_1fragemvd"
                        },
                        defaultClass: "_1fragemv9"
                    }
                }
            },
            maxBlockSize: {
                values: {
                    fill: {
                        conditions: {
                            base: "_1fragemve",
                            extraSmall: "_1fragemvf",
                            small: "_1fragemvg",
                            medium: "_1fragemvh",
                            large: "_1fragemvi"
                        },
                        defaultClass: "_1fragemve"
                    },
                    none: {
                        conditions: {
                            base: "_1fragemvj",
                            extraSmall: "_1fragemvk",
                            small: "_1fragemvl",
                            medium: "_1fragemvm",
                            large: "_1fragemvn"
                        },
                        defaultClass: "_1fragemvj"
                    }
                }
            },
            maxInlineSize: {
                values: {
                    fill: {
                        conditions: {
                            base: "_1fragemvo",
                            extraSmall: "_1fragemvp",
                            small: "_1fragemvq",
                            medium: "_1fragemvr",
                            large: "_1fragemvs"
                        },
                        defaultClass: "_1fragemvo"
                    }
                }
            },
            minBlockSize: {
                values: {
                    fill: {
                        conditions: {
                            base: "_1fragemvt",
                            extraSmall: "_1fragemvu",
                            small: "_1fragemvv",
                            medium: "_1fragemvw",
                            large: "_1fragemvx"
                        },
                        defaultClass: "_1fragemvt"
                    },
                    viewport: {
                        conditions: {
                            base: "_1fragemvy",
                            extraSmall: "_1fragemvz",
                            small: "_1fragemw0",
                            medium: "_1fragemw1",
                            large: "_1fragemw2"
                        },
                        defaultClass: "_1fragemvy"
                    }
                }
            },
            objectFit: {
                values: {
                    contain: {
                        conditions: {
                            base: "_1fragemw3",
                            extraSmall: "_1fragemw4",
                            small: "_1fragemw5",
                            medium: "_1fragemw6",
                            large: "_1fragemw7"
                        },
                        defaultClass: "_1fragemw3"
                    },
                    cover: {
                        conditions: {
                            base: "_1fragemw8",
                            extraSmall: "_1fragemw9",
                            small: "_1fragemwa",
                            medium: "_1fragemwb",
                            large: "_1fragemwc"
                        },
                        defaultClass: "_1fragemw8"
                    },
                    fill: {
                        conditions: {
                            base: "_1fragemwd",
                            extraSmall: "_1fragemwe",
                            small: "_1fragemwf",
                            medium: "_1fragemwg",
                            large: "_1fragemwh"
                        },
                        defaultClass: "_1fragemwd"
                    }
                }
            },
            position: {
                values: {
                    absolute: {
                        conditions: {
                            base: "_1fragemwi",
                            extraSmall: "_1fragemwj",
                            small: "_1fragemwk",
                            medium: "_1fragemwl",
                            large: "_1fragemwm"
                        },
                        defaultClass: "_1fragemwi"
                    },
                    fixed: {
                        conditions: {
                            base: "_1fragemwn",
                            extraSmall: "_1fragemwo",
                            small: "_1fragemwp",
                            medium: "_1fragemwq",
                            large: "_1fragemwr"
                        },
                        defaultClass: "_1fragemwn"
                    },
                    relative: {
                        conditions: {
                            base: "_1fragemws",
                            extraSmall: "_1fragemwt",
                            small: "_1fragemwu",
                            medium: "_1fragemwv",
                            large: "_1fragemww"
                        },
                        defaultClass: "_1fragemws"
                    },
                    static: {
                        conditions: {
                            base: "_1fragemwx",
                            extraSmall: "_1fragemwy",
                            small: "_1fragemwz",
                            medium: "_1fragemx0",
                            large: "_1fragemx1"
                        },
                        defaultClass: "_1fragemwx"
                    },
                    sticky: {
                        conditions: {
                            base: "_1fragemx2",
                            extraSmall: "_1fragemx3",
                            small: "_1fragemx4",
                            medium: "_1fragemx5",
                            large: "_1fragemx6"
                        },
                        defaultClass: "_1fragemx2"
                    }
                }
            },
            gridAutoFlow: {
                values: {
                    column: {
                        conditions: {
                            base: "_1fragemx7",
                            extraSmall: "_1fragemx8",
                            small: "_1fragemx9",
                            medium: "_1fragemxa",
                            large: "_1fragemxb"
                        },
                        defaultClass: "_1fragemx7"
                    },
                    row: {
                        conditions: {
                            base: "_1fragemxc",
                            extraSmall: "_1fragemxd",
                            small: "_1fragemxe",
                            medium: "_1fragemxf",
                            large: "_1fragemxg"
                        },
                        defaultClass: "_1fragemxc"
                    }
                }
            }
        }
    },
    tn = {
        conditions: void 0,
        styles: {
            borderColor: {
                mappings: ["borderBlockStartColor", "borderInlineEndColor", "borderBlockEndColor", "borderInlineStartColor"]
            },
            inset: {
                mappings: ["insetBlockStart", "insetInlineEnd", "insetBlockEnd", "insetInlineStart"]
            },
            backgroundFit: {
                values: {
                    contain: {
                        defaultClass: "_1fragemxh"
                    },
                    cover: {
                        defaultClass: "_1fragemxi"
                    }
                }
            },
            backgroundPosition: {
                values: {
                    bottom: {
                        defaultClass: "_1fragemxj"
                    },
                    center: {
                        defaultClass: "_1fragemxk"
                    },
                    left: {
                        defaultClass: "_1fragemxl"
                    },
                    right: {
                        defaultClass: "_1fragemxm"
                    },
                    top: {
                        defaultClass: "_1fragemxn"
                    }
                }
            },
            backgroundRepeat: {
                values: {
                    noRepeat: {
                        defaultClass: "_1fragemxo"
                    },
                    repeat: {
                        defaultClass: "_1fragemxp"
                    }
                }
            },
            color: {
                values: {
                    accent: {
                        defaultClass: "_1fragemxq"
                    },
                    critical: {
                        defaultClass: "_1fragemxr"
                    },
                    custom: {
                        defaultClass: "_1fragemxs"
                    },
                    info: {
                        defaultClass: "_1fragemxt"
                    },
                    success: {
                        defaultClass: "_1fragemxu"
                    },
                    warning: {
                        defaultClass: "_1fragemxv"
                    },
                    inherit: {
                        defaultClass: "_1fragemxw"
                    }
                }
            },
            colorScheme: {
                values: {
                    scheme1: {
                        defaultClass: "_1fragemxx"
                    },
                    scheme2: {
                        defaultClass: "_1fragemxy"
                    },
                    scheme3: {
                        defaultClass: "_1fragemxz"
                    },
                    scheme4: {
                        defaultClass: "_1fragemy0"
                    },
                    scheme5: {
                        defaultClass: "_1fragemy1"
                    },
                    scheme6: {
                        defaultClass: "_1fragemy2"
                    },
                    scheme7: {
                        defaultClass: "_1fragemy3"
                    },
                    scheme8: {
                        defaultClass: "_1fragemy4"
                    }
                }
            },
            colorLayer: {
                values: {
                    base: {
                        defaultClass: "_1fragemy5"
                    },
                    control: {
                        defaultClass: "_1fragemy6"
                    },
                    controlInvalid: {
                        defaultClass: "_1fragemy7"
                    },
                    controlSelected: {
                        defaultClass: "_1fragemy8"
                    },
                    primaryButton: {
                        defaultClass: "_1fragemy9"
                    },
                    secondaryButton: {
                        defaultClass: "_1fragemya"
                    }
                }
            },
            cursor: {
                values: {
                    default: {
                        defaultClass: "_1fragemyb"
                    },
                    notAllowed: {
                        defaultClass: "_1fragemyc"
                    },
                    pointer: {
                        defaultClass: "_1fragemyd"
                    },
                    text: {
                        defaultClass: "_1fragemye"
                    }
                }
            },
            fill: {
                values: {
                    none: {
                        defaultClass: "_1fragemyf"
                    }
                }
            },
            fontFamily: {
                values: {
                    primary: {
                        defaultClass: "_1fragemyg"
                    },
                    secondary: {
                        defaultClass: "_1fragemyh"
                    }
                }
            },
            flexDirection: {
                values: {
                    column: {
                        defaultClass: "_1fragemyi"
                    },
                    row: {
                        defaultClass: "_1fragemyj"
                    }
                }
            },
            focusRing: {
                values: {
                    base: {
                        defaultClass: "_1fragemyk"
                    },
                    resting: {
                        defaultClass: "_1fragemyl"
                    }
                }
            },
            flexGrow: {
                values: {
                    0: {
                        defaultClass: "_1fragemym"
                    },
                    1: {
                        defaultClass: "_1fragemyn"
                    }
                }
            },
            flexShrink: {
                values: {
                    0: {
                        defaultClass: "_1fragemyo"
                    },
                    1: {
                        defaultClass: "_1fragemyp"
                    }
                }
            },
            flexWrap: {
                values: {
                    wrap: {
                        defaultClass: "_1fragemyq"
                    },
                    nowrap: {
                        defaultClass: "_1fragemyr"
                    }
                }
            },
            fontSize: {
                values: {
                    extraSmall: {
                        defaultClass: "_1fragemys"
                    },
                    small: {
                        defaultClass: "_1fragemyt"
                    },
                    base: {
                        defaultClass: "_1fragemyu"
                    },
                    medium: {
                        defaultClass: "_1fragemyv"
                    },
                    large: {
                        defaultClass: "_1fragemyw"
                    },
                    extraLarge: {
                        defaultClass: "_1fragemyx"
                    },
                    extraExtraLarge: {
                        defaultClass: "_1fragemyy"
                    }
                }
            },
            fontWeight: {
                values: {
                    bold: {
                        defaultClass: "_1fragemyz"
                    }
                }
            },
            inert: {
                values: {
                    true: {
                        defaultClass: "_1fragemz0"
                    }
                }
            },
            inlineSize: {
                values: {
                    small500: {
                        defaultClass: "_1fragemz1"
                    },
                    small400: {
                        defaultClass: "_1fragemz2"
                    },
                    small300: {
                        defaultClass: "_1fragemz3"
                    },
                    small200: {
                        defaultClass: "_1fragemz4"
                    },
                    small100: {
                        defaultClass: "_1fragemz5"
                    },
                    base: {
                        defaultClass: "_1fragemz6"
                    },
                    large100: {
                        defaultClass: "_1fragemz7"
                    },
                    large200: {
                        defaultClass: "_1fragemz8"
                    },
                    large300: {
                        defaultClass: "_1fragemz9"
                    },
                    large400: {
                        defaultClass: "_1fragemza"
                    },
                    large500: {
                        defaultClass: "_1fragemzb"
                    },
                    large600: {
                        defaultClass: "_1fragemzc"
                    },
                    none: {
                        defaultClass: "_1fragemzd"
                    },
                    auto: {
                        defaultClass: "_1fragemze"
                    },
                    fill: {
                        defaultClass: "_1fragemzf"
                    },
                    fitContent: {
                        defaultClass: "_1fragemzg"
                    }
                }
            },
            lineHeight: {
                values: {
                    none: {
                        defaultClass: "_1fragemzh"
                    },
                    small: {
                        defaultClass: "_1fragemzi"
                    },
                    base: {
                        defaultClass: "_1fragemzj"
                    }
                }
            },
            listStyleType: {
                values: {
                    none: {
                        defaultClass: "_1fragemzk"
                    }
                }
            },
            borderInlineStartColor: {
                values: {
                    base: {
                        defaultClass: "_1fragemzl"
                    },
                    transparent: {
                        defaultClass: "_1fragemzm"
                    }
                }
            },
            borderInlineEndColor: {
                values: {
                    base: {
                        defaultClass: "_1fragemzn"
                    },
                    transparent: {
                        defaultClass: "_1fragemzo"
                    }
                }
            },
            borderBlockStartColor: {
                values: {
                    base: {
                        defaultClass: "_1fragemzp"
                    },
                    transparent: {
                        defaultClass: "_1fragemzq"
                    }
                }
            },
            borderBlockEndColor: {
                values: {
                    base: {
                        defaultClass: "_1fragemzr"
                    },
                    transparent: {
                        defaultClass: "_1fragemzs"
                    }
                }
            },
            insetBlockEnd: {
                values: {
                    0: {
                        defaultClass: "_1fragemzt"
                    },
                    50: {
                        defaultClass: "_1fragemzu"
                    },
                    100: {
                        defaultClass: "_1fragemzv"
                    },
                    small500: {
                        defaultClass: "_1fragemzw"
                    },
                    small400: {
                        defaultClass: "_1fragemzx"
                    },
                    small300: {
                        defaultClass: "_1fragemzy"
                    },
                    small200: {
                        defaultClass: "_1fragemzz"
                    },
                    small100: {
                        defaultClass: "_1fragem100"
                    },
                    base: {
                        defaultClass: "_1fragem101"
                    },
                    large100: {
                        defaultClass: "_1fragem102"
                    },
                    large200: {
                        defaultClass: "_1fragem103"
                    },
                    large300: {
                        defaultClass: "_1fragem104"
                    },
                    large400: {
                        defaultClass: "_1fragem105"
                    },
                    large500: {
                        defaultClass: "_1fragem106"
                    },
                    large600: {
                        defaultClass: "_1fragem107"
                    }
                }
            },
            insetBlockStart: {
                values: {
                    0: {
                        defaultClass: "_1fragem108"
                    },
                    50: {
                        defaultClass: "_1fragem109"
                    },
                    100: {
                        defaultClass: "_1fragem10a"
                    },
                    small500: {
                        defaultClass: "_1fragem10b"
                    },
                    small400: {
                        defaultClass: "_1fragem10c"
                    },
                    small300: {
                        defaultClass: "_1fragem10d"
                    },
                    small200: {
                        defaultClass: "_1fragem10e"
                    },
                    small100: {
                        defaultClass: "_1fragem10f"
                    },
                    base: {
                        defaultClass: "_1fragem10g"
                    },
                    large100: {
                        defaultClass: "_1fragem10h"
                    },
                    large200: {
                        defaultClass: "_1fragem10i"
                    },
                    large300: {
                        defaultClass: "_1fragem10j"
                    },
                    large400: {
                        defaultClass: "_1fragem10k"
                    },
                    large500: {
                        defaultClass: "_1fragem10l"
                    },
                    large600: {
                        defaultClass: "_1fragem10m"
                    }
                }
            },
            insetInlineEnd: {
                values: {
                    0: {
                        defaultClass: "_1fragem10n"
                    },
                    50: {
                        defaultClass: "_1fragem10o"
                    },
                    100: {
                        defaultClass: "_1fragem10p"
                    },
                    small500: {
                        defaultClass: "_1fragem10q"
                    },
                    small400: {
                        defaultClass: "_1fragem10r"
                    },
                    small300: {
                        defaultClass: "_1fragem10s"
                    },
                    small200: {
                        defaultClass: "_1fragem10t"
                    },
                    small100: {
                        defaultClass: "_1fragem10u"
                    },
                    base: {
                        defaultClass: "_1fragem10v"
                    },
                    large100: {
                        defaultClass: "_1fragem10w"
                    },
                    large200: {
                        defaultClass: "_1fragem10x"
                    },
                    large300: {
                        defaultClass: "_1fragem10y"
                    },
                    large400: {
                        defaultClass: "_1fragem10z"
                    },
                    large500: {
                        defaultClass: "_1fragem110"
                    },
                    large600: {
                        defaultClass: "_1fragem111"
                    }
                }
            },
            insetInlineStart: {
                values: {
                    0: {
                        defaultClass: "_1fragem112"
                    },
                    50: {
                        defaultClass: "_1fragem113"
                    },
                    100: {
                        defaultClass: "_1fragem114"
                    },
                    small500: {
                        defaultClass: "_1fragem115"
                    },
                    small400: {
                        defaultClass: "_1fragem116"
                    },
                    small300: {
                        defaultClass: "_1fragem117"
                    },
                    small200: {
                        defaultClass: "_1fragem118"
                    },
                    small100: {
                        defaultClass: "_1fragem119"
                    },
                    base: {
                        defaultClass: "_1fragem11a"
                    },
                    large100: {
                        defaultClass: "_1fragem11b"
                    },
                    large200: {
                        defaultClass: "_1fragem11c"
                    },
                    large300: {
                        defaultClass: "_1fragem11d"
                    },
                    large400: {
                        defaultClass: "_1fragem11e"
                    },
                    large500: {
                        defaultClass: "_1fragem11f"
                    },
                    large600: {
                        defaultClass: "_1fragem11g"
                    }
                }
            },
            margin: {
                values: {
                    none: {
                        defaultClass: "_1fragem11h"
                    },
                    auto: {
                        defaultClass: "_1fragem11i"
                    }
                }
            },
            minInlineSize: {
                values: {
                    fill: {
                        defaultClass: "_1fragem11j"
                    }
                }
            },
            opacity: {
                values: {
                    0: {
                        defaultClass: "_1fragem11k"
                    },
                    10: {
                        defaultClass: "_1fragem11l"
                    },
                    20: {
                        defaultClass: "_1fragem11m"
                    },
                    30: {
                        defaultClass: "_1fragem11n"
                    },
                    40: {
                        defaultClass: "_1fragem11o"
                    },
                    50: {
                        defaultClass: "_1fragem11p"
                    },
                    60: {
                        defaultClass: "_1fragem11q"
                    },
                    70: {
                        defaultClass: "_1fragem11r"
                    },
                    80: {
                        defaultClass: "_1fragem11s"
                    },
                    90: {
                        defaultClass: "_1fragem11t"
                    },
                    100: {
                        defaultClass: "_1fragem11u"
                    },
                    disabled: {
                        defaultClass: "_1fragem11v"
                    },
                    readOnly: {
                        defaultClass: "_1fragem11w"
                    }
                }
            },
            outline: {
                values: {
                    base: {
                        defaultClass: "_1fragem11x"
                    },
                    none: {
                        defaultClass: "_1fragem11y"
                    }
                }
            },
            pointerEvents: {
                values: {
                    none: {
                        defaultClass: "_1fragem11z"
                    },
                    auto: {
                        defaultClass: "_1fragem120"
                    }
                }
            },
            screenReaders: {
                values: {
                    only: {
                        defaultClass: "_1fragem121"
                    },
                    untilFocus: {
                        defaultClass: "_1fragem122"
                    }
                }
            },
            shadowContext: {
                values: {
                    clipSafe: {
                        defaultClass: "_1fragem123"
                    }
                }
            },
            textAlign: {
                values: {
                    center: {
                        defaultClass: "_1fragem124"
                    },
                    end: {
                        defaultClass: "_1fragem125"
                    },
                    start: {
                        defaultClass: "_1fragem126"
                    },
                    justify: {
                        defaultClass: "_1fragem127"
                    }
                }
            },
            textDecoration: {
                values: {
                    none: {
                        defaultClass: "_1fragem128"
                    },
                    underline: {
                        defaultClass: "_1fragem129"
                    },
                    lineThrough: {
                        defaultClass: "_1fragem12a"
                    },
                    inherit: {
                        defaultClass: "_1fragem12b"
                    }
                }
            },
            transitionDuration: {
                values: {
                    faster: {
                        defaultClass: "_1fragem12c"
                    },
                    fast: {
                        defaultClass: "_1fragem12d"
                    },
                    base: {
                        defaultClass: "_1fragem12e"
                    },
                    slow: {
                        defaultClass: "_1fragem12f"
                    },
                    slower: {
                        defaultClass: "_1fragem12g"
                    },
                    slowest: {
                        defaultClass: "_1fragem12h"
                    },
                    none: {
                        defaultClass: "_1fragem12i"
                    }
                }
            },
            transitionProperty: {
                values: {
                    all: {
                        defaultClass: "_1fragem12j"
                    },
                    colors: {
                        defaultClass: "_1fragem12k"
                    },
                    opacity: {
                        defaultClass: "_1fragem12l"
                    },
                    size: {
                        defaultClass: "_1fragem12m"
                    },
                    allButBorderRadiusAndHeight: {
                        defaultClass: "_1fragem12n"
                    },
                    none: {
                        defaultClass: "_1fragem12o"
                    }
                }
            },
            transitionTimingFunction: {
                values: {
                    base: {
                        defaultClass: "_1fragem12p"
                    },
                    easeOut: {
                        defaultClass: "_1fragem12q"
                    },
                    linear: {
                        defaultClass: "_1fragem12r"
                    },
                    spring: {
                        defaultClass: "_1fragem12s"
                    },
                    easeInOut: {
                        defaultClass: "_1fragem12t"
                    }
                }
            },
            tapHighlightColor: {
                values: {
                    transparent: {
                        defaultClass: "_1fragem12u"
                    }
                }
            },
            touchCallout: {
                values: {
                    none: {
                        defaultClass: "_1fragem12v"
                    }
                }
            },
            userSelect: {
                values: {
                    none: {
                        defaultClass: "_1fragem12w"
                    }
                }
            },
            verticalAlign: {
                values: {
                    middle: {
                        defaultClass: "_1fragem12x"
                    }
                }
            },
            whiteSpace: {
                values: {
                    nowrap: {
                        defaultClass: "_1fragem12y"
                    }
                }
            },
            zIndex: {
                values: {
                    1: {
                        defaultClass: "_1fragem12z"
                    },
                    10: {
                        defaultClass: "_1fragem130"
                    },
                    20: {
                        defaultClass: "_1fragem131"
                    },
                    portal: {
                        defaultClass: "_1fragem132"
                    }
                }
            }
        }
    },
    ha = {
        conditions: {
            defaultCondition: "base",
            conditionNames: ["base", "extraSmall", "small", "medium", "large"],
            responsiveArray: void 0
        },
        styles: {
            backgroundColor: {
                values: {
                    base: {
                        conditions: {
                            base: "_1fragem133",
                            extraSmall: "_1fragem134",
                            small: "_1fragem135",
                            medium: "_1fragem136",
                            large: "_1fragem137"
                        },
                        defaultClass: "_1fragem133"
                    },
                    baseSpecified: {
                        conditions: {
                            base: "_1fragem138",
                            extraSmall: "_1fragem139",
                            small: "_1fragem13a",
                            medium: "_1fragem13b",
                            large: "_1fragem13c"
                        },
                        defaultClass: "_1fragem138"
                    },
                    subdued: {
                        conditions: {
                            base: "_1fragem13d",
                            extraSmall: "_1fragem13e",
                            small: "_1fragem13f",
                            medium: "_1fragem13g",
                            large: "_1fragem13h"
                        },
                        defaultClass: "_1fragem13d"
                    },
                    transparent: {
                        conditions: {
                            base: "_1fragem13i",
                            extraSmall: "_1fragem13j",
                            small: "_1fragem13k",
                            medium: "_1fragem13l",
                            large: "_1fragem13m"
                        },
                        defaultClass: "_1fragem13i"
                    },
                    subdued200: {
                        conditions: {
                            base: "_1fragem13n",
                            extraSmall: "_1fragem13o",
                            small: "_1fragem13p",
                            medium: "_1fragem13q",
                            large: "_1fragem13r"
                        },
                        defaultClass: "_1fragem13n"
                    }
                }
            }
        }
    },
    A_ = {
        conditions: {
            defaultCondition: "base",
            conditionNames: ["base", "extraSmall", "small", "medium", "large"],
            responsiveArray: void 0
        },
        styles: {
            backgroundColorHoverAndFocus: {
                values: {
                    base: {
                        conditions: {
                            base: "_1fragem13s",
                            extraSmall: "_1fragem13t",
                            small: "_1fragem13u",
                            medium: "_1fragem13v",
                            large: "_1fragem13w"
                        },
                        defaultClass: "_1fragem13s"
                    },
                    subdued: {
                        conditions: {
                            base: "_1fragem13x",
                            extraSmall: "_1fragem13y",
                            small: "_1fragem13z",
                            medium: "_1fragem140",
                            large: "_1fragem141"
                        },
                        defaultClass: "_1fragem13x"
                    },
                    transparent: {
                        conditions: {
                            base: "_1fragem142",
                            extraSmall: "_1fragem143",
                            small: "_1fragem144",
                            medium: "_1fragem145",
                            large: "_1fragem146"
                        },
                        defaultClass: "_1fragem142"
                    }
                }
            }
        }
    },
    dy = E_(tn, en, ha, A_);
const v_ = ({
    cssConfig: e,
    properties: t
}) => n => {
    const a = {},
        r = [],
        s = {},
        o = n;
    for (const i in o)
        if (i) {
            if (!t.includes(i)) {
                s[i] = n[i];
                continue
            }
            const d = e[i],
                l = o[i];
            if ("mappings" in d) continue;
            d && (r.push(h_(d, l)), Object.assign(a, b_(d, l)))
        }
    return {
        className: r.join(" ").trim(),
        style: a,
        otherProps: s
    }
};

function h_(e, t) {
    if (!t) return "";
    const {
        dynamic: n,
        values: a,
        name: r
    } = e;
    if (typeof t == "string") {
        const i = t;
        return a ? .[i] ? a[i].default : n ? n.default : (console.error(`Dynamic Sprinkles: invalid value provided to prop '${r}'. Expected one of ${Object.keys(a).map(d=>`"${d}"`).join(", ")}. Received: ${JSON.stringify(t)}.`), "")
    }
    const s = Object.keys(t);
    return s.length < 1 ? "" : s.map(i => {
        const l = t[i];
        return a ? .[l] ? a[l].conditions[i] : n ? n.conditions[i] : (console.error(`Dynamic Sprinkles: invalid value provided to prop '${r}'. Expected one of ${Object.keys(a).map(u=>`"${u}"`).join(", ")}. Received: ${JSON.stringify(l)}.`), null)
    }).filter(Boolean).join(" ").trim()
}

function b_(e, t) {
    const {
        vars: n,
        values: a,
        dynamic: r
    } = e;
    if (typeof t == "string") {
        const i = t;
        return a ? .[i] || a ? .conditions ? .[i] || !r ? {} : Qa({
            [n.default]: t
        })
    }
    if (t && Object.keys(t).length < 1 || t == null) return {};
    let s = !1;
    const o = Object.entries(t).reduce((i, [d, l]) => {
        if (l) {
            if (a ? .[l] || !r) return i;
            s = !0, i[n.conditions[d]] = l
        }
        return i
    }, {});
    return s ? Qa(o) : {}
}
var ba = {
        config: {
            insetBlock: {
                mappings: ["insetBlockStart", "insetBlockEnd"]
            },
            insetInline: {
                mappings: ["insetInlineStart", "insetInlineEnd"]
            },
            blockSize: {
                dynamic: {
                    default: "_16s97g75",
                    conditions: {
                        base: "_16s97g75",
                        extraSmall: "_16s97g76",
                        small: "_16s97g77",
                        medium: "_16s97g78",
                        large: "_16s97g79"
                    }
                },
                name: "blockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g70)",
                        extraSmall: "var(--_16s97g71)",
                        small: "var(--_16s97g72)",
                        medium: "var(--_16s97g73)",
                        large: "var(--_16s97g74)"
                    },
                    default: "var(--_16s97g70)"
                },
                values: {
                    small500: {
                        conditions: {
                            base: "_16s97g74q",
                            extraSmall: "_16s97g74r",
                            small: "_16s97g74s",
                            medium: "_16s97g74t",
                            large: "_16s97g74u"
                        },
                        default: "_16s97g74q"
                    },
                    small400: {
                        conditions: {
                            base: "_16s97g74v",
                            extraSmall: "_16s97g74w",
                            small: "_16s97g74x",
                            medium: "_16s97g74y",
                            large: "_16s97g74z"
                        },
                        default: "_16s97g74v"
                    },
                    small300: {
                        conditions: {
                            base: "_16s97g750",
                            extraSmall: "_16s97g751",
                            small: "_16s97g752",
                            medium: "_16s97g753",
                            large: "_16s97g754"
                        },
                        default: "_16s97g750"
                    },
                    small200: {
                        conditions: {
                            base: "_16s97g755",
                            extraSmall: "_16s97g756",
                            small: "_16s97g757",
                            medium: "_16s97g758",
                            large: "_16s97g759"
                        },
                        default: "_16s97g755"
                    },
                    small100: {
                        conditions: {
                            base: "_16s97g75a",
                            extraSmall: "_16s97g75b",
                            small: "_16s97g75c",
                            medium: "_16s97g75d",
                            large: "_16s97g75e"
                        },
                        default: "_16s97g75a"
                    },
                    base: {
                        conditions: {
                            base: "_16s97g75f",
                            extraSmall: "_16s97g75g",
                            small: "_16s97g75h",
                            medium: "_16s97g75i",
                            large: "_16s97g75j"
                        },
                        default: "_16s97g75f"
                    },
                    large100: {
                        conditions: {
                            base: "_16s97g75k",
                            extraSmall: "_16s97g75l",
                            small: "_16s97g75m",
                            medium: "_16s97g75n",
                            large: "_16s97g75o"
                        },
                        default: "_16s97g75k"
                    },
                    large200: {
                        conditions: {
                            base: "_16s97g75p",
                            extraSmall: "_16s97g75q",
                            small: "_16s97g75r",
                            medium: "_16s97g75s",
                            large: "_16s97g75t"
                        },
                        default: "_16s97g75p"
                    },
                    large300: {
                        conditions: {
                            base: "_16s97g75u",
                            extraSmall: "_16s97g75v",
                            small: "_16s97g75w",
                            medium: "_16s97g75x",
                            large: "_16s97g75y"
                        },
                        default: "_16s97g75u"
                    },
                    large400: {
                        conditions: {
                            base: "_16s97g75z",
                            extraSmall: "_16s97g760",
                            small: "_16s97g761",
                            medium: "_16s97g762",
                            large: "_16s97g763"
                        },
                        default: "_16s97g75z"
                    },
                    large500: {
                        conditions: {
                            base: "_16s97g764",
                            extraSmall: "_16s97g765",
                            small: "_16s97g766",
                            medium: "_16s97g767",
                            large: "_16s97g768"
                        },
                        default: "_16s97g764"
                    },
                    large600: {
                        conditions: {
                            base: "_16s97g769",
                            extraSmall: "_16s97g76a",
                            small: "_16s97g76b",
                            medium: "_16s97g76c",
                            large: "_16s97g76d"
                        },
                        default: "_16s97g769"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g76e",
                            extraSmall: "_16s97g76f",
                            small: "_16s97g76g",
                            medium: "_16s97g76h",
                            large: "_16s97g76i"
                        },
                        default: "_16s97g76e"
                    },
                    fill: {
                        conditions: {
                            base: "_16s97g76j",
                            extraSmall: "_16s97g76k",
                            small: "_16s97g76l",
                            medium: "_16s97g76m",
                            large: "_16s97g76n"
                        },
                        default: "_16s97g76j"
                    },
                    "1lh": {
                        conditions: {
                            base: "_16s97g76o",
                            extraSmall: "_16s97g76p",
                            small: "_16s97g76q",
                            medium: "_16s97g76r",
                            large: "_16s97g76s"
                        },
                        default: "_16s97g76o"
                    }
                }
            },
            gridAutoColumns: {
                dynamic: {
                    default: "_16s97g7f",
                    conditions: {
                        base: "_16s97g7f",
                        extraSmall: "_16s97g7g",
                        small: "_16s97g7h",
                        medium: "_16s97g7i",
                        large: "_16s97g7j"
                    }
                },
                name: "gridAutoColumns",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7a)",
                        extraSmall: "var(--_16s97g7b)",
                        small: "var(--_16s97g7c)",
                        medium: "var(--_16s97g7d)",
                        large: "var(--_16s97g7e)"
                    },
                    default: "var(--_16s97g7a)"
                }
            },
            gridAutoRows: {
                dynamic: {
                    default: "_16s97g7p",
                    conditions: {
                        base: "_16s97g7p",
                        extraSmall: "_16s97g7q",
                        small: "_16s97g7r",
                        medium: "_16s97g7s",
                        large: "_16s97g7t"
                    }
                },
                name: "gridAutoRows",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7k)",
                        extraSmall: "var(--_16s97g7l)",
                        small: "var(--_16s97g7m)",
                        medium: "var(--_16s97g7n)",
                        large: "var(--_16s97g7o)"
                    },
                    default: "var(--_16s97g7k)"
                }
            },
            gridColumn: {
                dynamic: {
                    default: "_16s97g7z",
                    conditions: {
                        base: "_16s97g7z",
                        extraSmall: "_16s97g710",
                        small: "_16s97g711",
                        medium: "_16s97g712",
                        large: "_16s97g713"
                    }
                },
                name: "gridColumn",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7u)",
                        extraSmall: "var(--_16s97g7v)",
                        small: "var(--_16s97g7w)",
                        medium: "var(--_16s97g7x)",
                        large: "var(--_16s97g7y)"
                    },
                    default: "var(--_16s97g7u)"
                }
            },
            gridRow: {
                dynamic: {
                    default: "_16s97g719",
                    conditions: {
                        base: "_16s97g719",
                        extraSmall: "_16s97g71a",
                        small: "_16s97g71b",
                        medium: "_16s97g71c",
                        large: "_16s97g71d"
                    }
                },
                name: "gridRow",
                vars: {
                    conditions: {
                        base: "var(--_16s97g714)",
                        extraSmall: "var(--_16s97g715)",
                        small: "var(--_16s97g716)",
                        medium: "var(--_16s97g717)",
                        large: "var(--_16s97g718)"
                    },
                    default: "var(--_16s97g714)"
                }
            },
            gridTemplateColumns: {
                dynamic: {
                    default: "_16s97g71j",
                    conditions: {
                        base: "_16s97g71j",
                        extraSmall: "_16s97g71k",
                        small: "_16s97g71l",
                        medium: "_16s97g71m",
                        large: "_16s97g71n"
                    }
                },
                name: "gridTemplateColumns",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71e)",
                        extraSmall: "var(--_16s97g71f)",
                        small: "var(--_16s97g71g)",
                        medium: "var(--_16s97g71h)",
                        large: "var(--_16s97g71i)"
                    },
                    default: "var(--_16s97g71e)"
                }
            },
            gridTemplateRows: {
                dynamic: {
                    default: "_16s97g71t",
                    conditions: {
                        base: "_16s97g71t",
                        extraSmall: "_16s97g71u",
                        small: "_16s97g71v",
                        medium: "_16s97g71w",
                        large: "_16s97g71x"
                    }
                },
                name: "gridTemplateRows",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71o)",
                        extraSmall: "var(--_16s97g71p)",
                        small: "var(--_16s97g71q)",
                        medium: "var(--_16s97g71r)",
                        large: "var(--_16s97g71s)"
                    },
                    default: "var(--_16s97g71o)"
                }
            },
            inlineSize: {
                dynamic: {
                    default: "_16s97g723",
                    conditions: {
                        base: "_16s97g723",
                        extraSmall: "_16s97g724",
                        small: "_16s97g725",
                        medium: "_16s97g726",
                        large: "_16s97g727"
                    }
                },
                name: "inlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71y)",
                        extraSmall: "var(--_16s97g71z)",
                        small: "var(--_16s97g720)",
                        medium: "var(--_16s97g721)",
                        large: "var(--_16s97g722)"
                    },
                    default: "var(--_16s97g71y)"
                },
                values: {
                    small500: {
                        conditions: {
                            base: "_16s97g76t",
                            extraSmall: "_16s97g76u",
                            small: "_16s97g76v",
                            medium: "_16s97g76w",
                            large: "_16s97g76x"
                        },
                        default: "_16s97g76t"
                    },
                    small400: {
                        conditions: {
                            base: "_16s97g76y",
                            extraSmall: "_16s97g76z",
                            small: "_16s97g770",
                            medium: "_16s97g771",
                            large: "_16s97g772"
                        },
                        default: "_16s97g76y"
                    },
                    small300: {
                        conditions: {
                            base: "_16s97g773",
                            extraSmall: "_16s97g774",
                            small: "_16s97g775",
                            medium: "_16s97g776",
                            large: "_16s97g777"
                        },
                        default: "_16s97g773"
                    },
                    small200: {
                        conditions: {
                            base: "_16s97g778",
                            extraSmall: "_16s97g779",
                            small: "_16s97g77a",
                            medium: "_16s97g77b",
                            large: "_16s97g77c"
                        },
                        default: "_16s97g778"
                    },
                    small100: {
                        conditions: {
                            base: "_16s97g77d",
                            extraSmall: "_16s97g77e",
                            small: "_16s97g77f",
                            medium: "_16s97g77g",
                            large: "_16s97g77h"
                        },
                        default: "_16s97g77d"
                    },
                    base: {
                        conditions: {
                            base: "_16s97g77i",
                            extraSmall: "_16s97g77j",
                            small: "_16s97g77k",
                            medium: "_16s97g77l",
                            large: "_16s97g77m"
                        },
                        default: "_16s97g77i"
                    },
                    large100: {
                        conditions: {
                            base: "_16s97g77n",
                            extraSmall: "_16s97g77o",
                            small: "_16s97g77p",
                            medium: "_16s97g77q",
                            large: "_16s97g77r"
                        },
                        default: "_16s97g77n"
                    },
                    large200: {
                        conditions: {
                            base: "_16s97g77s",
                            extraSmall: "_16s97g77t",
                            small: "_16s97g77u",
                            medium: "_16s97g77v",
                            large: "_16s97g77w"
                        },
                        default: "_16s97g77s"
                    },
                    large300: {
                        conditions: {
                            base: "_16s97g77x",
                            extraSmall: "_16s97g77y",
                            small: "_16s97g77z",
                            medium: "_16s97g780",
                            large: "_16s97g781"
                        },
                        default: "_16s97g77x"
                    },
                    large400: {
                        conditions: {
                            base: "_16s97g782",
                            extraSmall: "_16s97g783",
                            small: "_16s97g784",
                            medium: "_16s97g785",
                            large: "_16s97g786"
                        },
                        default: "_16s97g782"
                    },
                    large500: {
                        conditions: {
                            base: "_16s97g787",
                            extraSmall: "_16s97g788",
                            small: "_16s97g789",
                            medium: "_16s97g78a",
                            large: "_16s97g78b"
                        },
                        default: "_16s97g787"
                    },
                    large600: {
                        conditions: {
                            base: "_16s97g78c",
                            extraSmall: "_16s97g78d",
                            small: "_16s97g78e",
                            medium: "_16s97g78f",
                            large: "_16s97g78g"
                        },
                        default: "_16s97g78c"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g78h",
                            extraSmall: "_16s97g78i",
                            small: "_16s97g78j",
                            medium: "_16s97g78k",
                            large: "_16s97g78l"
                        },
                        default: "_16s97g78h"
                    },
                    auto: {
                        conditions: {
                            base: "_16s97g78m",
                            extraSmall: "_16s97g78n",
                            small: "_16s97g78o",
                            medium: "_16s97g78p",
                            large: "_16s97g78q"
                        },
                        default: "_16s97g78m"
                    },
                    fill: {
                        conditions: {
                            base: "_16s97g78r",
                            extraSmall: "_16s97g78s",
                            small: "_16s97g78t",
                            medium: "_16s97g78u",
                            large: "_16s97g78v"
                        },
                        default: "_16s97g78r"
                    },
                    fitContent: {
                        conditions: {
                            base: "_16s97g78w",
                            extraSmall: "_16s97g78x",
                            small: "_16s97g78y",
                            medium: "_16s97g78z",
                            large: "_16s97g790"
                        },
                        default: "_16s97g78w"
                    }
                }
            },
            insetBlockStart: {
                dynamic: {
                    default: "_16s97g72d",
                    conditions: {
                        base: "_16s97g72d",
                        extraSmall: "_16s97g72e",
                        small: "_16s97g72f",
                        medium: "_16s97g72g",
                        large: "_16s97g72h"
                    }
                },
                name: "insetBlockStart",
                vars: {
                    conditions: {
                        base: "var(--_16s97g728)",
                        extraSmall: "var(--_16s97g729)",
                        small: "var(--_16s97g72a)",
                        medium: "var(--_16s97g72b)",
                        large: "var(--_16s97g72c)"
                    },
                    default: "var(--_16s97g728)"
                }
            },
            insetBlockEnd: {
                dynamic: {
                    default: "_16s97g72n",
                    conditions: {
                        base: "_16s97g72n",
                        extraSmall: "_16s97g72o",
                        small: "_16s97g72p",
                        medium: "_16s97g72q",
                        large: "_16s97g72r"
                    }
                },
                name: "insetBlockEnd",
                vars: {
                    conditions: {
                        base: "var(--_16s97g72i)",
                        extraSmall: "var(--_16s97g72j)",
                        small: "var(--_16s97g72k)",
                        medium: "var(--_16s97g72l)",
                        large: "var(--_16s97g72m)"
                    },
                    default: "var(--_16s97g72i)"
                }
            },
            insetInlineStart: {
                dynamic: {
                    default: "_16s97g72x",
                    conditions: {
                        base: "_16s97g72x",
                        extraSmall: "_16s97g72y",
                        small: "_16s97g72z",
                        medium: "_16s97g730",
                        large: "_16s97g731"
                    }
                },
                name: "insetInlineStart",
                vars: {
                    conditions: {
                        base: "var(--_16s97g72s)",
                        extraSmall: "var(--_16s97g72t)",
                        small: "var(--_16s97g72u)",
                        medium: "var(--_16s97g72v)",
                        large: "var(--_16s97g72w)"
                    },
                    default: "var(--_16s97g72s)"
                }
            },
            insetInlineEnd: {
                dynamic: {
                    default: "_16s97g737",
                    conditions: {
                        base: "_16s97g737",
                        extraSmall: "_16s97g738",
                        small: "_16s97g739",
                        medium: "_16s97g73a",
                        large: "_16s97g73b"
                    }
                },
                name: "insetInlineEnd",
                vars: {
                    conditions: {
                        base: "var(--_16s97g732)",
                        extraSmall: "var(--_16s97g733)",
                        small: "var(--_16s97g734)",
                        medium: "var(--_16s97g735)",
                        large: "var(--_16s97g736)"
                    },
                    default: "var(--_16s97g732)"
                }
            },
            maxBlockSize: {
                dynamic: {
                    default: "_16s97g73h",
                    conditions: {
                        base: "_16s97g73h",
                        extraSmall: "_16s97g73i",
                        small: "_16s97g73j",
                        medium: "_16s97g73k",
                        large: "_16s97g73l"
                    }
                },
                name: "maxBlockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73c)",
                        extraSmall: "var(--_16s97g73d)",
                        small: "var(--_16s97g73e)",
                        medium: "var(--_16s97g73f)",
                        large: "var(--_16s97g73g)"
                    },
                    default: "var(--_16s97g73c)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g791",
                            extraSmall: "_16s97g792",
                            small: "_16s97g793",
                            medium: "_16s97g794",
                            large: "_16s97g795"
                        },
                        default: "_16s97g791"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g796",
                            extraSmall: "_16s97g797",
                            small: "_16s97g798",
                            medium: "_16s97g799",
                            large: "_16s97g79a"
                        },
                        default: "_16s97g796"
                    }
                }
            },
            maxInlineSize: {
                dynamic: {
                    default: "_16s97g73r",
                    conditions: {
                        base: "_16s97g73r",
                        extraSmall: "_16s97g73s",
                        small: "_16s97g73t",
                        medium: "_16s97g73u",
                        large: "_16s97g73v"
                    }
                },
                name: "maxInlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73m)",
                        extraSmall: "var(--_16s97g73n)",
                        small: "var(--_16s97g73o)",
                        medium: "var(--_16s97g73p)",
                        large: "var(--_16s97g73q)"
                    },
                    default: "var(--_16s97g73m)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79b",
                            extraSmall: "_16s97g79c",
                            small: "_16s97g79d",
                            medium: "_16s97g79e",
                            large: "_16s97g79f"
                        },
                        default: "_16s97g79b"
                    }
                }
            },
            minBlockSize: {
                dynamic: {
                    default: "_16s97g741",
                    conditions: {
                        base: "_16s97g741",
                        extraSmall: "_16s97g742",
                        small: "_16s97g743",
                        medium: "_16s97g744",
                        large: "_16s97g745"
                    }
                },
                name: "minBlockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73w)",
                        extraSmall: "var(--_16s97g73x)",
                        small: "var(--_16s97g73y)",
                        medium: "var(--_16s97g73z)",
                        large: "var(--_16s97g740)"
                    },
                    default: "var(--_16s97g73w)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79g",
                            extraSmall: "_16s97g79h",
                            small: "_16s97g79i",
                            medium: "_16s97g79j",
                            large: "_16s97g79k"
                        },
                        default: "_16s97g79g"
                    },
                    viewport: {
                        conditions: {
                            base: "_16s97g79l",
                            extraSmall: "_16s97g79m",
                            small: "_16s97g79n",
                            medium: "_16s97g79o",
                            large: "_16s97g79p"
                        },
                        default: "_16s97g79l"
                    }
                }
            },
            minInlineSize: {
                dynamic: {
                    default: "_16s97g74b",
                    conditions: {
                        base: "_16s97g74b",
                        extraSmall: "_16s97g74c",
                        small: "_16s97g74d",
                        medium: "_16s97g74e",
                        large: "_16s97g74f"
                    }
                },
                name: "minInlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g746)",
                        extraSmall: "var(--_16s97g747)",
                        small: "var(--_16s97g748)",
                        medium: "var(--_16s97g749)",
                        large: "var(--_16s97g74a)"
                    },
                    default: "var(--_16s97g746)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79q",
                            extraSmall: "_16s97g79r",
                            small: "_16s97g79s",
                            medium: "_16s97g79t",
                            large: "_16s97g79u"
                        },
                        default: "_16s97g79q"
                    }
                }
            },
            transform: {
                dynamic: {
                    default: "_16s97g74l",
                    conditions: {
                        base: "_16s97g74l",
                        extraSmall: "_16s97g74m",
                        small: "_16s97g74n",
                        medium: "_16s97g74o",
                        large: "_16s97g74p"
                    }
                },
                name: "transform",
                vars: {
                    conditions: {
                        base: "var(--_16s97g74g)",
                        extraSmall: "var(--_16s97g74h)",
                        small: "var(--_16s97g74i)",
                        medium: "var(--_16s97g74j)",
                        large: "var(--_16s97g74k)"
                    },
                    default: "var(--_16s97g74g)"
                }
            }
        }
    },
    ly = v_({
        cssConfig: {
            insetBlock: {
                mappings: ["insetBlockStart", "insetBlockEnd"]
            },
            insetInline: {
                mappings: ["insetInlineStart", "insetInlineEnd"]
            },
            blockSize: {
                dynamic: {
                    default: "_16s97g75",
                    conditions: {
                        base: "_16s97g75",
                        extraSmall: "_16s97g76",
                        small: "_16s97g77",
                        medium: "_16s97g78",
                        large: "_16s97g79"
                    }
                },
                name: "blockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g70)",
                        extraSmall: "var(--_16s97g71)",
                        small: "var(--_16s97g72)",
                        medium: "var(--_16s97g73)",
                        large: "var(--_16s97g74)"
                    },
                    default: "var(--_16s97g70)"
                },
                values: {
                    small500: {
                        conditions: {
                            base: "_16s97g74q",
                            extraSmall: "_16s97g74r",
                            small: "_16s97g74s",
                            medium: "_16s97g74t",
                            large: "_16s97g74u"
                        },
                        default: "_16s97g74q"
                    },
                    small400: {
                        conditions: {
                            base: "_16s97g74v",
                            extraSmall: "_16s97g74w",
                            small: "_16s97g74x",
                            medium: "_16s97g74y",
                            large: "_16s97g74z"
                        },
                        default: "_16s97g74v"
                    },
                    small300: {
                        conditions: {
                            base: "_16s97g750",
                            extraSmall: "_16s97g751",
                            small: "_16s97g752",
                            medium: "_16s97g753",
                            large: "_16s97g754"
                        },
                        default: "_16s97g750"
                    },
                    small200: {
                        conditions: {
                            base: "_16s97g755",
                            extraSmall: "_16s97g756",
                            small: "_16s97g757",
                            medium: "_16s97g758",
                            large: "_16s97g759"
                        },
                        default: "_16s97g755"
                    },
                    small100: {
                        conditions: {
                            base: "_16s97g75a",
                            extraSmall: "_16s97g75b",
                            small: "_16s97g75c",
                            medium: "_16s97g75d",
                            large: "_16s97g75e"
                        },
                        default: "_16s97g75a"
                    },
                    base: {
                        conditions: {
                            base: "_16s97g75f",
                            extraSmall: "_16s97g75g",
                            small: "_16s97g75h",
                            medium: "_16s97g75i",
                            large: "_16s97g75j"
                        },
                        default: "_16s97g75f"
                    },
                    large100: {
                        conditions: {
                            base: "_16s97g75k",
                            extraSmall: "_16s97g75l",
                            small: "_16s97g75m",
                            medium: "_16s97g75n",
                            large: "_16s97g75o"
                        },
                        default: "_16s97g75k"
                    },
                    large200: {
                        conditions: {
                            base: "_16s97g75p",
                            extraSmall: "_16s97g75q",
                            small: "_16s97g75r",
                            medium: "_16s97g75s",
                            large: "_16s97g75t"
                        },
                        default: "_16s97g75p"
                    },
                    large300: {
                        conditions: {
                            base: "_16s97g75u",
                            extraSmall: "_16s97g75v",
                            small: "_16s97g75w",
                            medium: "_16s97g75x",
                            large: "_16s97g75y"
                        },
                        default: "_16s97g75u"
                    },
                    large400: {
                        conditions: {
                            base: "_16s97g75z",
                            extraSmall: "_16s97g760",
                            small: "_16s97g761",
                            medium: "_16s97g762",
                            large: "_16s97g763"
                        },
                        default: "_16s97g75z"
                    },
                    large500: {
                        conditions: {
                            base: "_16s97g764",
                            extraSmall: "_16s97g765",
                            small: "_16s97g766",
                            medium: "_16s97g767",
                            large: "_16s97g768"
                        },
                        default: "_16s97g764"
                    },
                    large600: {
                        conditions: {
                            base: "_16s97g769",
                            extraSmall: "_16s97g76a",
                            small: "_16s97g76b",
                            medium: "_16s97g76c",
                            large: "_16s97g76d"
                        },
                        default: "_16s97g769"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g76e",
                            extraSmall: "_16s97g76f",
                            small: "_16s97g76g",
                            medium: "_16s97g76h",
                            large: "_16s97g76i"
                        },
                        default: "_16s97g76e"
                    },
                    fill: {
                        conditions: {
                            base: "_16s97g76j",
                            extraSmall: "_16s97g76k",
                            small: "_16s97g76l",
                            medium: "_16s97g76m",
                            large: "_16s97g76n"
                        },
                        default: "_16s97g76j"
                    },
                    "1lh": {
                        conditions: {
                            base: "_16s97g76o",
                            extraSmall: "_16s97g76p",
                            small: "_16s97g76q",
                            medium: "_16s97g76r",
                            large: "_16s97g76s"
                        },
                        default: "_16s97g76o"
                    }
                }
            },
            gridAutoColumns: {
                dynamic: {
                    default: "_16s97g7f",
                    conditions: {
                        base: "_16s97g7f",
                        extraSmall: "_16s97g7g",
                        small: "_16s97g7h",
                        medium: "_16s97g7i",
                        large: "_16s97g7j"
                    }
                },
                name: "gridAutoColumns",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7a)",
                        extraSmall: "var(--_16s97g7b)",
                        small: "var(--_16s97g7c)",
                        medium: "var(--_16s97g7d)",
                        large: "var(--_16s97g7e)"
                    },
                    default: "var(--_16s97g7a)"
                }
            },
            gridAutoRows: {
                dynamic: {
                    default: "_16s97g7p",
                    conditions: {
                        base: "_16s97g7p",
                        extraSmall: "_16s97g7q",
                        small: "_16s97g7r",
                        medium: "_16s97g7s",
                        large: "_16s97g7t"
                    }
                },
                name: "gridAutoRows",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7k)",
                        extraSmall: "var(--_16s97g7l)",
                        small: "var(--_16s97g7m)",
                        medium: "var(--_16s97g7n)",
                        large: "var(--_16s97g7o)"
                    },
                    default: "var(--_16s97g7k)"
                }
            },
            gridColumn: {
                dynamic: {
                    default: "_16s97g7z",
                    conditions: {
                        base: "_16s97g7z",
                        extraSmall: "_16s97g710",
                        small: "_16s97g711",
                        medium: "_16s97g712",
                        large: "_16s97g713"
                    }
                },
                name: "gridColumn",
                vars: {
                    conditions: {
                        base: "var(--_16s97g7u)",
                        extraSmall: "var(--_16s97g7v)",
                        small: "var(--_16s97g7w)",
                        medium: "var(--_16s97g7x)",
                        large: "var(--_16s97g7y)"
                    },
                    default: "var(--_16s97g7u)"
                }
            },
            gridRow: {
                dynamic: {
                    default: "_16s97g719",
                    conditions: {
                        base: "_16s97g719",
                        extraSmall: "_16s97g71a",
                        small: "_16s97g71b",
                        medium: "_16s97g71c",
                        large: "_16s97g71d"
                    }
                },
                name: "gridRow",
                vars: {
                    conditions: {
                        base: "var(--_16s97g714)",
                        extraSmall: "var(--_16s97g715)",
                        small: "var(--_16s97g716)",
                        medium: "var(--_16s97g717)",
                        large: "var(--_16s97g718)"
                    },
                    default: "var(--_16s97g714)"
                }
            },
            gridTemplateColumns: {
                dynamic: {
                    default: "_16s97g71j",
                    conditions: {
                        base: "_16s97g71j",
                        extraSmall: "_16s97g71k",
                        small: "_16s97g71l",
                        medium: "_16s97g71m",
                        large: "_16s97g71n"
                    }
                },
                name: "gridTemplateColumns",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71e)",
                        extraSmall: "var(--_16s97g71f)",
                        small: "var(--_16s97g71g)",
                        medium: "var(--_16s97g71h)",
                        large: "var(--_16s97g71i)"
                    },
                    default: "var(--_16s97g71e)"
                }
            },
            gridTemplateRows: {
                dynamic: {
                    default: "_16s97g71t",
                    conditions: {
                        base: "_16s97g71t",
                        extraSmall: "_16s97g71u",
                        small: "_16s97g71v",
                        medium: "_16s97g71w",
                        large: "_16s97g71x"
                    }
                },
                name: "gridTemplateRows",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71o)",
                        extraSmall: "var(--_16s97g71p)",
                        small: "var(--_16s97g71q)",
                        medium: "var(--_16s97g71r)",
                        large: "var(--_16s97g71s)"
                    },
                    default: "var(--_16s97g71o)"
                }
            },
            inlineSize: {
                dynamic: {
                    default: "_16s97g723",
                    conditions: {
                        base: "_16s97g723",
                        extraSmall: "_16s97g724",
                        small: "_16s97g725",
                        medium: "_16s97g726",
                        large: "_16s97g727"
                    }
                },
                name: "inlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g71y)",
                        extraSmall: "var(--_16s97g71z)",
                        small: "var(--_16s97g720)",
                        medium: "var(--_16s97g721)",
                        large: "var(--_16s97g722)"
                    },
                    default: "var(--_16s97g71y)"
                },
                values: {
                    small500: {
                        conditions: {
                            base: "_16s97g76t",
                            extraSmall: "_16s97g76u",
                            small: "_16s97g76v",
                            medium: "_16s97g76w",
                            large: "_16s97g76x"
                        },
                        default: "_16s97g76t"
                    },
                    small400: {
                        conditions: {
                            base: "_16s97g76y",
                            extraSmall: "_16s97g76z",
                            small: "_16s97g770",
                            medium: "_16s97g771",
                            large: "_16s97g772"
                        },
                        default: "_16s97g76y"
                    },
                    small300: {
                        conditions: {
                            base: "_16s97g773",
                            extraSmall: "_16s97g774",
                            small: "_16s97g775",
                            medium: "_16s97g776",
                            large: "_16s97g777"
                        },
                        default: "_16s97g773"
                    },
                    small200: {
                        conditions: {
                            base: "_16s97g778",
                            extraSmall: "_16s97g779",
                            small: "_16s97g77a",
                            medium: "_16s97g77b",
                            large: "_16s97g77c"
                        },
                        default: "_16s97g778"
                    },
                    small100: {
                        conditions: {
                            base: "_16s97g77d",
                            extraSmall: "_16s97g77e",
                            small: "_16s97g77f",
                            medium: "_16s97g77g",
                            large: "_16s97g77h"
                        },
                        default: "_16s97g77d"
                    },
                    base: {
                        conditions: {
                            base: "_16s97g77i",
                            extraSmall: "_16s97g77j",
                            small: "_16s97g77k",
                            medium: "_16s97g77l",
                            large: "_16s97g77m"
                        },
                        default: "_16s97g77i"
                    },
                    large100: {
                        conditions: {
                            base: "_16s97g77n",
                            extraSmall: "_16s97g77o",
                            small: "_16s97g77p",
                            medium: "_16s97g77q",
                            large: "_16s97g77r"
                        },
                        default: "_16s97g77n"
                    },
                    large200: {
                        conditions: {
                            base: "_16s97g77s",
                            extraSmall: "_16s97g77t",
                            small: "_16s97g77u",
                            medium: "_16s97g77v",
                            large: "_16s97g77w"
                        },
                        default: "_16s97g77s"
                    },
                    large300: {
                        conditions: {
                            base: "_16s97g77x",
                            extraSmall: "_16s97g77y",
                            small: "_16s97g77z",
                            medium: "_16s97g780",
                            large: "_16s97g781"
                        },
                        default: "_16s97g77x"
                    },
                    large400: {
                        conditions: {
                            base: "_16s97g782",
                            extraSmall: "_16s97g783",
                            small: "_16s97g784",
                            medium: "_16s97g785",
                            large: "_16s97g786"
                        },
                        default: "_16s97g782"
                    },
                    large500: {
                        conditions: {
                            base: "_16s97g787",
                            extraSmall: "_16s97g788",
                            small: "_16s97g789",
                            medium: "_16s97g78a",
                            large: "_16s97g78b"
                        },
                        default: "_16s97g787"
                    },
                    large600: {
                        conditions: {
                            base: "_16s97g78c",
                            extraSmall: "_16s97g78d",
                            small: "_16s97g78e",
                            medium: "_16s97g78f",
                            large: "_16s97g78g"
                        },
                        default: "_16s97g78c"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g78h",
                            extraSmall: "_16s97g78i",
                            small: "_16s97g78j",
                            medium: "_16s97g78k",
                            large: "_16s97g78l"
                        },
                        default: "_16s97g78h"
                    },
                    auto: {
                        conditions: {
                            base: "_16s97g78m",
                            extraSmall: "_16s97g78n",
                            small: "_16s97g78o",
                            medium: "_16s97g78p",
                            large: "_16s97g78q"
                        },
                        default: "_16s97g78m"
                    },
                    fill: {
                        conditions: {
                            base: "_16s97g78r",
                            extraSmall: "_16s97g78s",
                            small: "_16s97g78t",
                            medium: "_16s97g78u",
                            large: "_16s97g78v"
                        },
                        default: "_16s97g78r"
                    },
                    fitContent: {
                        conditions: {
                            base: "_16s97g78w",
                            extraSmall: "_16s97g78x",
                            small: "_16s97g78y",
                            medium: "_16s97g78z",
                            large: "_16s97g790"
                        },
                        default: "_16s97g78w"
                    }
                }
            },
            insetBlockStart: {
                dynamic: {
                    default: "_16s97g72d",
                    conditions: {
                        base: "_16s97g72d",
                        extraSmall: "_16s97g72e",
                        small: "_16s97g72f",
                        medium: "_16s97g72g",
                        large: "_16s97g72h"
                    }
                },
                name: "insetBlockStart",
                vars: {
                    conditions: {
                        base: "var(--_16s97g728)",
                        extraSmall: "var(--_16s97g729)",
                        small: "var(--_16s97g72a)",
                        medium: "var(--_16s97g72b)",
                        large: "var(--_16s97g72c)"
                    },
                    default: "var(--_16s97g728)"
                }
            },
            insetBlockEnd: {
                dynamic: {
                    default: "_16s97g72n",
                    conditions: {
                        base: "_16s97g72n",
                        extraSmall: "_16s97g72o",
                        small: "_16s97g72p",
                        medium: "_16s97g72q",
                        large: "_16s97g72r"
                    }
                },
                name: "insetBlockEnd",
                vars: {
                    conditions: {
                        base: "var(--_16s97g72i)",
                        extraSmall: "var(--_16s97g72j)",
                        small: "var(--_16s97g72k)",
                        medium: "var(--_16s97g72l)",
                        large: "var(--_16s97g72m)"
                    },
                    default: "var(--_16s97g72i)"
                }
            },
            insetInlineStart: {
                dynamic: {
                    default: "_16s97g72x",
                    conditions: {
                        base: "_16s97g72x",
                        extraSmall: "_16s97g72y",
                        small: "_16s97g72z",
                        medium: "_16s97g730",
                        large: "_16s97g731"
                    }
                },
                name: "insetInlineStart",
                vars: {
                    conditions: {
                        base: "var(--_16s97g72s)",
                        extraSmall: "var(--_16s97g72t)",
                        small: "var(--_16s97g72u)",
                        medium: "var(--_16s97g72v)",
                        large: "var(--_16s97g72w)"
                    },
                    default: "var(--_16s97g72s)"
                }
            },
            insetInlineEnd: {
                dynamic: {
                    default: "_16s97g737",
                    conditions: {
                        base: "_16s97g737",
                        extraSmall: "_16s97g738",
                        small: "_16s97g739",
                        medium: "_16s97g73a",
                        large: "_16s97g73b"
                    }
                },
                name: "insetInlineEnd",
                vars: {
                    conditions: {
                        base: "var(--_16s97g732)",
                        extraSmall: "var(--_16s97g733)",
                        small: "var(--_16s97g734)",
                        medium: "var(--_16s97g735)",
                        large: "var(--_16s97g736)"
                    },
                    default: "var(--_16s97g732)"
                }
            },
            maxBlockSize: {
                dynamic: {
                    default: "_16s97g73h",
                    conditions: {
                        base: "_16s97g73h",
                        extraSmall: "_16s97g73i",
                        small: "_16s97g73j",
                        medium: "_16s97g73k",
                        large: "_16s97g73l"
                    }
                },
                name: "maxBlockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73c)",
                        extraSmall: "var(--_16s97g73d)",
                        small: "var(--_16s97g73e)",
                        medium: "var(--_16s97g73f)",
                        large: "var(--_16s97g73g)"
                    },
                    default: "var(--_16s97g73c)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g791",
                            extraSmall: "_16s97g792",
                            small: "_16s97g793",
                            medium: "_16s97g794",
                            large: "_16s97g795"
                        },
                        default: "_16s97g791"
                    },
                    none: {
                        conditions: {
                            base: "_16s97g796",
                            extraSmall: "_16s97g797",
                            small: "_16s97g798",
                            medium: "_16s97g799",
                            large: "_16s97g79a"
                        },
                        default: "_16s97g796"
                    }
                }
            },
            maxInlineSize: {
                dynamic: {
                    default: "_16s97g73r",
                    conditions: {
                        base: "_16s97g73r",
                        extraSmall: "_16s97g73s",
                        small: "_16s97g73t",
                        medium: "_16s97g73u",
                        large: "_16s97g73v"
                    }
                },
                name: "maxInlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73m)",
                        extraSmall: "var(--_16s97g73n)",
                        small: "var(--_16s97g73o)",
                        medium: "var(--_16s97g73p)",
                        large: "var(--_16s97g73q)"
                    },
                    default: "var(--_16s97g73m)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79b",
                            extraSmall: "_16s97g79c",
                            small: "_16s97g79d",
                            medium: "_16s97g79e",
                            large: "_16s97g79f"
                        },
                        default: "_16s97g79b"
                    }
                }
            },
            minBlockSize: {
                dynamic: {
                    default: "_16s97g741",
                    conditions: {
                        base: "_16s97g741",
                        extraSmall: "_16s97g742",
                        small: "_16s97g743",
                        medium: "_16s97g744",
                        large: "_16s97g745"
                    }
                },
                name: "minBlockSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g73w)",
                        extraSmall: "var(--_16s97g73x)",
                        small: "var(--_16s97g73y)",
                        medium: "var(--_16s97g73z)",
                        large: "var(--_16s97g740)"
                    },
                    default: "var(--_16s97g73w)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79g",
                            extraSmall: "_16s97g79h",
                            small: "_16s97g79i",
                            medium: "_16s97g79j",
                            large: "_16s97g79k"
                        },
                        default: "_16s97g79g"
                    },
                    viewport: {
                        conditions: {
                            base: "_16s97g79l",
                            extraSmall: "_16s97g79m",
                            small: "_16s97g79n",
                            medium: "_16s97g79o",
                            large: "_16s97g79p"
                        },
                        default: "_16s97g79l"
                    }
                }
            },
            minInlineSize: {
                dynamic: {
                    default: "_16s97g74b",
                    conditions: {
                        base: "_16s97g74b",
                        extraSmall: "_16s97g74c",
                        small: "_16s97g74d",
                        medium: "_16s97g74e",
                        large: "_16s97g74f"
                    }
                },
                name: "minInlineSize",
                vars: {
                    conditions: {
                        base: "var(--_16s97g746)",
                        extraSmall: "var(--_16s97g747)",
                        small: "var(--_16s97g748)",
                        medium: "var(--_16s97g749)",
                        large: "var(--_16s97g74a)"
                    },
                    default: "var(--_16s97g746)"
                },
                values: {
                    fill: {
                        conditions: {
                            base: "_16s97g79q",
                            extraSmall: "_16s97g79r",
                            small: "_16s97g79s",
                            medium: "_16s97g79t",
                            large: "_16s97g79u"
                        },
                        default: "_16s97g79q"
                    }
                }
            },
            transform: {
                dynamic: {
                    default: "_16s97g74l",
                    conditions: {
                        base: "_16s97g74l",
                        extraSmall: "_16s97g74m",
                        small: "_16s97g74n",
                        medium: "_16s97g74o",
                        large: "_16s97g74p"
                    }
                },
                name: "transform",
                vars: {
                    conditions: {
                        base: "var(--_16s97g74g)",
                        extraSmall: "var(--_16s97g74h)",
                        small: "var(--_16s97g74i)",
                        medium: "var(--_16s97g74j)",
                        large: "var(--_16s97g74k)"
                    },
                    default: "var(--_16s97g74g)"
                }
            },
            backgroundImage: {
                dynamic: {
                    default: "_16s97g79w",
                    conditions: {
                        base: "_16s97g79w"
                    }
                },
                name: "backgroundImage",
                vars: {
                    conditions: {
                        base: "var(--_16s97g79v)"
                    },
                    default: "var(--_16s97g79v)"
                }
            }
        },
        properties: ["insetBlock", "insetInline", "blockSize", "gridAutoColumns", "gridAutoRows", "gridColumn", "gridRow", "gridTemplateColumns", "gridTemplateRows", "inlineSize", "insetBlockStart", "insetBlockEnd", "insetInlineStart", "insetInlineEnd", "maxBlockSize", "maxInlineSize", "minBlockSize", "minInlineSize", "transform", "backgroundImage"]
    });

function vn(e) {
    return Object.keys(e).filter(t => "mappings" in e[t])
}
const uy = [...vn(tn.styles), ...vn(en.styles), ...vn(ba.config)];

function cy(e, t, n) {
    const a = vt(e, r => r ? .[t]);
    return At(a) ? {
        default: a.default ? ? n,
        conditionals: a.conditionals.filter(r => r.value !== void 0)
    } : a
}

function vt(e, t) {
    if (e !== void 0) return At(e) ? {
        default: t(e.default),
        conditionals: e.conditionals.map(n => ({
            conditions: n.conditions,
            value: t(n.value)
        }))
    } : t(e)
}

function T_(e) {
    if (e !== void 0) return At(e) ? { ...e.default !== void 0 && {
            base: e.default
        },
        ...e.conditionals.reduce((t, n) => {
            const a = n.conditions ? .viewportInlineSize ? .min;
            return a === void 0 ? t : { ...t,
                [a]: n.value
            }
        }, {})
    } : {
        base: e
    }
}
const y_ = Object.keys(Rt).filter(e => e !== "base").sort((e, t) => Rt[e] - Rt[t]),
    I_ = /^[A-Za-z0-9][A-Za-z0-9 .%_-]*$/;

function gr(e) {
    return I_.test(e) ? e : `'${e.replace(/['"]/g,"")}'`
}

function Yt(e, t) {
    if (e === void 0) return;
    if (!At(e)) return e;
    const n = T_(e),
        a = typeof n.base == "string" ? n.base : t,
        r = [];
    let s = a;
    for (const o of y_) {
        const i = n[o];
        typeof i == "string" && i !== s && (r.push(`(inline-size >= ${o}) ${gr(i)}`), s = i)
    }
    return r.length === 0 ? a : `@media ${r.join(", ")}, ${gr(a)}`
}

function my(e) {
    if (N_(e)) return ba.config[e].mappings;
    if (P_(e)) return tn.styles[e].mappings;
    if (C_(e)) {
        const t = en.styles,
            n = ha.styles;
        return (t[e] ? ? n[e]).mappings
    }
    return []
}

function C_(e) {
    return e in en.styles || e in ha.styles
}

function N_(e) {
    return e in ba.config
}

function P_(e) {
    return e in tn.styles
}
const pr = "none",
    Sr = "base",
    Er = "auto",
    O_ = 3,
    Xe = " ",
    R_ = /\s+/,
    Ta = new Set([2, 4]),
    hn = {
        none: "none",
        base: "solid",
        dotted: "dotted",
        dashed: "dashed"
    },
    Ar = {
        base: "base",
        medium: "large-100",
        thick: "large-200"
    },
    M_ = {
        none: "none",
        base: "base",
        large100: "large-100",
        large200: "large-200"
    },
    bn = {
        none: "none",
        base: "base",
        small: "small-100",
        large: "large-100",
        fullyRounded: "fullyRounded",
        tight: "small-100",
        loose: "large-100"
    },
    w_ = {
        none: "none",
        base: "base",
        small: "small",
        large: "large",
        fullyRounded: "fullyRounded"
    };

function lo(e) {
    return vt(e, n => {
        if (Array.isArray(n) && Ta.has(n.length)) return n.map(a => hn[a] || hn.none).join(Xe);
        if (typeof n == "string") {
            const a = n.split(Xe);
            return a.length > 1 ? void 0 : hn[a[0]] ? ? void 0
        }
    })
}

function L_(e) {
    return vt(e, n => {
        if (Array.isArray(n) && Ta.has(n.length)) return n.map(a => Ar[a] ? ? "none").join(Xe);
        if (typeof n == "string") {
            const a = n.split(Xe);
            return a.length > 1 ? void 0 : Ar[a[0]] ? ? void 0
        }
    })
}

function D_(e) {
    return e ? M_[e] : void 0
}

function _y(e) {
    return vt(e, n => {
        if (Array.isArray(n) && Ta.has(n.length)) return n.map(a => bn[a] || bn.none).join(Xe);
        if (typeof n == "string") {
            const a = n.split(Xe);
            return a.length > 1 ? void 0 : bn[a[0]] ? ? void 0
        }
    })
}

function fy(e) {
    return e ? w_[e] : void 0
}

function gy({
    border: e,
    borderColor: t,
    borderStyle: n,
    borderWidth: a
}) {
    const r = (l => {
            if (!l || typeof l != "string" || l === pr) return;
            const u = l.trim().split(R_, O_),
                m = u[0] || void 0,
                c = u[1] || void 0,
                _ = u[2] || void 0;
            return m === pr ? {
                borderWidth: void 0,
                borderColor: c,
                borderStyle: _
            } : {
                borderWidth: m,
                borderColor: c || Sr,
                borderStyle: _ || Er
            }
        })(e),
        s = r ? .borderWidth,
        o = r ? .borderColor,
        i = r ? .borderStyle,
        d = a || s;
    return d ? {
        borderWidth: d,
        borderStyle: n || i || Er,
        borderColor: t || o || Sr
    } : {
        borderWidth: void 0,
        borderStyle: void 0,
        borderColor: void 0
    }
}

function py(e, t) {
    const n = lo(e),
        a = L_(t),
        r = !!n && n !== "none",
        s = r && !a ? "base" : a;
    return {
        borderStyle: Yt(n ? ? "none", "none"),
        borderWidth: Yt(s, r ? "base" : "none")
    }
}

function k_(e) {
    return x_(e)
}

function x_(e) {
    return j_(e) || uo(e)
}

function j_(e) {
    return Array.isArray(e) && e.length === 2
}

function uo(e) {
    return Array.isArray(e) && e.length === 4
}
const B_ = " ",
    U_ = {
        small500: "small-500",
        small400: "small-400",
        small300: "small-300",
        small200: "small-200",
        small100: "small-100",
        base: "base",
        none: "none",
        large100: "large-100",
        large200: "large-200",
        large300: "large-300",
        large400: "large-400",
        large500: "large-500",
        extraTight: "small-400",
        tight: "small-200",
        loose: "large-200",
        extraLoose: "large-500"
    };

function Sy(e) {
    return vt(e, t => t === void 0 ? "none" : co(t))
}

function vr(e) {
    if (e !== void 0) return co(e)
}

function co(e) {
    return (Array.isArray(e) ? e : [e]).map(a => U_[a] || "none").join(B_)
}
const F_ = "medium",
    Y_ = "large200";

function Ey(e) {
    const {
        background: t,
        colorScheme: n,
        cornerRadius: a,
        border: r,
        borderStyle: s,
        borderWidth: o,
        shadow: i,
        padding: d
    } = e ? ? {}, l = r === "auto" ? "none" : r;
    return {
        background: t,
        borderRadius: a,
        borderStyle: Yt(l === "full" ? lo(s) ? ? "solid" : l, "none"),
        borderWidth: Yt(D_(o), "none"),
        colorScheme: n,
        padding: H_(d),
        boxShadow: i
    }
}

function H_(e) {
    if (e == null) return;
    const t = vr(e),
        n = vr(Oe(e, Y_));
    if (!(t == null || n == null)) return t === n ? t : V_(F_, t, n)
}

function V_(e, t, n) {
    return `@media (inline-size >= ${e}) ${t}, ${n}`
}
const G_ = ["background", "colorScheme", "cornerRadius", "border", "borderStyle", "borderWidth", "shadow", "padding"];

function Ay(e, t = G_) {
    return e ? t.some(n => e[n] !== void 0) : !1
}
const hr = ["none", "small500", "small400", "small300", "small200", "small100", "base", "large100", "large200", "large300", "large400", "large500"];

function Oe(e, t) {
    return k_(e) ? uo(e) ? [Oe(e[0], t), Oe(e[1], t), Oe(e[2], t), Oe(e[3], t)] : [Oe(e[0], t), Oe(e[1], t)] : e && z_(e, t) > 0 ? t : e
}

function z_(e, t) {
    return hr.indexOf(e) - hr.indexOf(t)
}

function vy(e) {
    return e.trim().replace(/(?:^[-_\s]+|[-_\s]+(.)?)/g, (t, n) => n ? n.toUpperCase() : "")
}

function ce(e, t, n = 1.17, a = "rem") {
    const r = typeof t == "string" ? parseFloat(t) : t,
        s = typeof n == "string" ? parseFloat(n) : n,
        o = a === "rem" ? r / 10 : r;
    return `${Math.round(s**e*o*10)/10}${a}`
}
const hy = {
        base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    Ce = 14,
    Se = 1.17,
    by = {
        extraSmall: ce(-2, Ce, Se),
        small: ce(-.75, Ce, Se),
        base: ce(0, Ce, Se),
        medium: ce(.7, Ce, Se),
        large: ce(1.43, Ce, Se),
        extraLarge: ce(2.12, Ce, Se),
        extraExtraLarge: ce(2.74, Ce, Se)
    },
    Ty = {
        base: "normal",
        loose: "0.125em",
        xLoose: "0.16em"
    },
    yy = {
        base: "1.35"
    },
    W_ = 1.225;

function br(e) {
    if (!e) return;
    const t = e.replace(/['"]/g, "").split(/\s*,\s*/).map(n => /[^A-Za-z-]/.test(n) ? `"${n}"` : n);
    return !t.includes("serif") && !t.includes("sans-serif") && t.push("sans-serif"), t.join(", ")
}

function Le(e, t = 10) {
    return `${e/t}rem`
}

function Iy(e, t = 10) {
    return t * parseFloat(e)
}

function Cy(e, t = 14) {
    return `${e/t}em`
}
const q_ = String.raw `[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?`,
    K_ = new RegExp(`^(${q_})(fr|%|px|ch|em|lh|vh)$`, "i");

function X_(e) {
    if (typeof e != "string") return;
    const t = e.match(K_);
    if (t === null) return;
    const n = parseFloat(t[1]);
    if (Number.isFinite(n)) return {
        number: n,
        unit: t[2].toLowerCase()
    }
}

function Ny(e) {
    if (typeof e == "number") return Le(e);
    const t = X_(e);
    if (t !== void 0) {
        const {
            number: n,
            unit: a
        } = t;
        if (a === "px") return Le(n);
        if (a === "%" || a === "fr" || a === "ch" || a === "em" || a === "lh" || a === "vh") return `${n}${a}`
    }
}
var w = {
    border: {
        full: "var(--x-border-full)",
        blockEnd: "var(--x-border-block-end)"
    },
    borderRadius: {
        none: "var(--x-border-radius-none)",
        small: "var(--x-border-radius-small)",
        base: "var(--x-border-radius-base)",
        large: "var(--x-border-radius-large)",
        fullyRounded: "var(--x-border-radius-fully-rounded)",
        max: "var(--x-border-radius-max)"
    },
    borderWidth: {
        base: "var(--x-border-width-base)",
        large100: "var(--x-border-width-large-100)",
        large200: "var(--x-border-width-large-200)"
    },
    ring: {
        width: "var(--x-ring-width)",
        color: "var(--x-ring-color)",
        offset: "var(--x-ring-offset)"
    },
    button: {
        primary: {
            blockPadding: "var(--x-primary-button-block-padding)",
            inlinePadding: "var(--x-primary-button-inline-padding)",
            borderWidth: "var(--x-primary-button-border-width)",
            borderRadius: "var(--x-primary-button-border-radius)",
            fontFamily: "var(--x-primary-button-font-family)",
            fontSize: "var(--x-primary-button-font-size)",
            fontWeight: "var(--x-primary-button-font-weight)",
            letterSpacing: "var(--x-primary-button-letter-spacing)",
            textTransform: "var(--x-primary-button-text-transform)"
        },
        secondary: {
            blockPadding: "var(--x-secondary-button-block-padding)",
            inlinePadding: "var(--x-secondary-button-inline-padding)",
            borderWidth: "var(--x-secondary-button-border-width)",
            borderRadius: "var(--x-secondary-button-border-radius)",
            fontFamily: "var(--x-secondary-button-font-family)",
            fontSize: "var(--x-secondary-button-font-size)",
            fontWeight: "var(--x-secondary-button-font-weight)",
            letterSpacing: "var(--x-secondary-button-letter-spacing)",
            textTransform: "var(--x-secondary-button-text-transform)"
        }
    },
    control: {
        borderWidth: "var(--x-control-border-width)",
        borderRadius: "var(--x-control-border-radius)"
    },
    datepicker: {
        minColumnSize: "var(--x-datepicker-min-column-size)",
        minRowSize: "var(--x-datepicker-min-row-size)"
    },
    choiceList: {
        group: {
            spacing: "var(--x-choice-list-group-spacing)"
        }
    },
    optionList: {
        blockPadding: "var(--x-option-list-block-padding)",
        inlinePadding: "var(--x-option-list-inline-padding)"
    },
    portal: {
        zIndex: "var(--x-z-index-portal)"
    },
    productThumbnail: {
        borderRadius: "var(--x-product-thumbnail-border-radius)",
        badgeOffset: "var(--x-product-thumbnail-badge-offset)"
    },
    link: {
        textDecoration: "var(--x-link-text-decoration)"
    },
    checkbox: {
        borderRadius: "var(--x-checkbox-border-radius)"
    },
    heading: {
        level1: {
            fontFamily: "var(--x-heading-level1-font-family)",
            fontSize: "var(--x-heading-level1-font-size)",
            fontWeight: "var(--x-heading-level1-font-weight)",
            letterSpacing: "var(--x-heading-level1-letter-spacing)",
            textTransform: "var(--x-heading-level1-text-transform)"
        },
        level2: {
            fontFamily: "var(--x-heading-level2-font-family)",
            fontSize: "var(--x-heading-level2-font-size)",
            fontWeight: "var(--x-heading-level2-font-weight)",
            letterSpacing: "var(--x-heading-level2-letter-spacing)",
            textTransform: "var(--x-heading-level2-text-transform)"
        },
        level3: {
            fontFamily: "var(--x-heading-level3-font-family)",
            fontSize: "var(--x-heading-level3-font-size)",
            fontWeight: "var(--x-heading-level3-font-weight)",
            letterSpacing: "var(--x-heading-level3-letter-spacing)",
            textTransform: "var(--x-heading-level3-text-transform)"
        },
        level4: {
            fontFamily: "var(--x-heading-level4-font-family)",
            fontSize: "var(--x-heading-level4-font-size)",
            fontWeight: "var(--x-heading-level4-font-weight)",
            letterSpacing: "var(--x-heading-level4-letter-spacing)",
            textTransform: "var(--x-heading-level4-text-transform)"
        }
    },
    divider: {
        borderStyle: "var(--x-divider-border-style)",
        borderWidth: "var(--x-divider-border-width)"
    },
    moneyLines: {
        spacing: "var(--x-money-lines-spacing)",
        inlinePadding: "var(--x-money-lines-inline-padding)"
    },
    moneySummary: {
        blockPadding: "var(--x-money-summary-block-padding)",
        inlinePadding: "var(--x-money-summary-inline-padding)"
    },
    modal: {
        blockPaddingStart: "var(--x-modal-block-padding-start)",
        blockPaddingEnd: "var(--x-modal-block-padding-end)",
        borderRadius: "var(--x-modal-border-radius)",
        margin: "var(--x-modal-margin)"
    },
    select: {
        fontFamily: "var(--x-select-font-family)",
        fontSize: "var(--x-select-font-size)",
        fontWeight: "var(--x-select-font-weight)",
        letterSpacing: "var(--x-select-letter-spacing)",
        textTransform: "var(--x-select-text-transform)"
    },
    textField: {
        fontFamily: "var(--x-text-field-font-family)",
        fontSize: "var(--x-text-field-font-size)",
        fontWeight: "var(--x-text-field-font-weight)",
        letterSpacing: "var(--x-text-field-letter-spacing)",
        textTransform: "var(--x-text-field-text-transform)"
    },
    rollup: {
        primaryContent: {
            fontSize: "var(--x-rollup-primary-content-font-size)",
            fontWeight: "var(--x-rollup-primary-content-font-weight)",
            lineHeight: "var(--x-rollup-primary-content-line-height)"
        },
        secondaryContent: {
            fontSize: "var(--x-rollup-secondary-content-font-size)",
            fontWeight: "var(--x-rollup-secondary-content-font-weight)",
            lineHeight: "var(--x-rollup-secondary-content-line-height)"
        },
        tertiaryContent: {
            fontSize: "var(--x-rollup-tertiary-content-font-size)",
            fontWeight: "var(--x-rollup-tertiary-content-font-weight)",
            lineHeight: "var(--x-rollup-tertiary-content-line-height)"
        }
    },
    opacity: {
        disabled: "var(--x-opacity-disabled)",
        readOnly: "var(--x-opacity-readonly)"
    },
    boxShadow: {
        extraSmall: "var(--x-box-shadow-extra-small)",
        small: "var(--x-box-shadow-small)",
        base: "var(--x-box-shadow-base)",
        large: "var(--x-box-shadow-large)",
        extraLarge: "var(--x-box-shadow-extra-large)"
    },
    dropShadow: {
        extraLarge: "var(--x-drop-shadow-extra-large)"
    },
    spacing: {
        small500: "var(--x-spacing-small-500)",
        small400: "var(--x-spacing-small-400)",
        small300: "var(--x-spacing-small-300)",
        small200: "var(--x-spacing-small-200)",
        small100: "var(--x-spacing-small-100)",
        base: "var(--x-spacing-base)",
        large100: "var(--x-spacing-large-100)",
        large200: "var(--x-spacing-large-200)",
        large300: "var(--x-spacing-large-300)",
        large400: "var(--x-spacing-large-400)",
        large500: "var(--x-spacing-large-500)",
        large600: "var(--x-spacing-large-600)"
    },
    transitionDuration: {
        faster: "var(--x-duration-faster)",
        fast: "var(--x-duration-fast)",
        base: "var(--x-duration-base)",
        slow: "var(--x-duration-slow)",
        slower: "var(--x-duration-slower)",
        slowest: "var(--x-duration-slowest)",
        reducedMotion: "var(--x-duration-reduced-motion)"
    },
    transitionTimingFunction: {
        base: "var(--x-timing-base)",
        easeOut: "var(--x-timing-ease-out)",
        linear: "var(--x-timing-linear)",
        spring: "var(--x-timing-spring)"
    },
    fontSize: {
        extraSmall: "var(--x-typography-size-extra-small)",
        small: "var(--x-typography-size-small)",
        base: "var(--x-typography-size-default)",
        medium: "var(--x-typography-size-medium)",
        large: "var(--x-typography-size-large)",
        extraLarge: "var(--x-typography-size-extra-large)",
        extraExtraLarge: "var(--x-typography-size-extra-extra-large)"
    },
    lineHeight: {
        base: "var(--x-typography-line-height-base)",
        small: "var(--x-typography-line-height-small)"
    },
    typography: {
        primary: {
            fontFamily: "var(--x-typography-primary-fonts)",
            fontWeight: {
                base: "var(--x-typography-primary-weight-base)",
                bold: "var(--x-typography-primary-weight-bold)"
            }
        },
        secondary: {
            fontFamily: "var(--x-typography-secondary-fonts)",
            fontWeight: {
                base: "var(--x-typography-secondary-weight-base)",
                bold: "var(--x-typography-secondary-weight-bold)"
            }
        }
    },
    fontFamily: {
        base: "var(--_12e54cf0)"
    },
    fontStyle: {
        base: "var(--_12e54cf1)",
        italic: "var(--_12e54cf2)"
    },
    letterSpacing: {
        base: "var(--_12e54cf3)",
        loose: "var(--_12e54cf4)",
        xLoose: "var(--_12e54cf5)"
    },
    textTransform: {
        uppercase: "var(--_12e54cf6)",
        lowercase: "var(--_12e54cf7)",
        capitalize: "var(--_12e54cf8)",
        none: "var(--_12e54cf9)"
    },
    color: {
        default: {
            accent: "var(--x-default-color-accent)",
            accentContrast: "var(--x-default-color-accent-contrast)",
            accentHovered: "var(--x-default-color-accent-hovered)",
            accentForegroundAsSubduedBackground: "var(--x-default-color-accent-foreground-as-subdued-background)",
            accentForegroundAsSubduedBackgroundAlpha: "var(--x-default-color-accent-foreground-as-subdued-background-alpha)",
            accentTextOnForegroundAsSubduedBackground: "var(--x-default-color-accent-text-on-foreground-as-subdued-background)",
            accentTextSubduedOnForegroundAsSubduedBackground: "var(--x-default-color-accent-text-subdued-on-foreground-as-subdued-background)",
            critical: "var(--x-default-color-critical)",
            custom: "var(--x-default-color-custom)",
            icon: "var(--x-default-color-icon)",
            iconStrong: "var(--x-default-color-icon-strong)",
            spinner: "var(--x-default-color-spinner)",
            info: "var(--x-default-color-info)",
            success: "var(--x-default-color-success)",
            warning: "var(--x-default-color-warning)",
            background: "var(--x-default-color-background)",
            backgroundLight: "var(--x-default-color-background-light)",
            backgroundSubdued: "var(--x-default-color-background-subdued)",
            backgroundSubduedAlpha: "var(--x-default-color-background-subdued-alpha)",
            backgroundSubdued200: "var(--x-default-color-background-subdued-200)",
            border: "var(--x-default-color-border)",
            borderEmphasized: "var(--x-default-color-border-emphasized)",
            borderSubdued200: "var(--x-default-color-border-subdued-200)",
            text: "var(--x-default-color-text)",
            textContrast: "var(--x-default-color-text-contrast)",
            textSubdued: "var(--x-default-color-text-subdued)",
            textSubdued200: "var(--x-default-color-text-subdued-200)",
            base: {
                background: "var(--swn0jz5)",
                text: "var(--swn0jz6)",
                border: "var(--swn0jz7)",
                icon: "var(--swn0jz8)",
                spinner: "var(--swn0jz9)",
                accent: "var(--swn0jza)",
                custom: "var(--swn0jzb)",
                accentContrast: "var(--swn0jzc)",
                accentForegroundAsLightBackground: "var(--swn0jzd)",
                accentForegroundAsSubduedBackground: "var(--swn0jze)",
                accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jzf)",
                accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jzg)",
                accentHovered: "var(--swn0jzh)",
                accentTextOnForegroundAsSubduedBackground: "var(--swn0jzi)",
                accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jzj)",
                backgroundLight: "var(--swn0jzk)",
                backgroundSubdued: "var(--swn0jzl)",
                backgroundSubduedAlpha: "var(--swn0jzm)",
                borderEmphasized: "var(--swn0jzn)",
                textContrast: "var(--swn0jzo)",
                textSubdued: "var(--swn0jzp)",
                textSubdued200: "var(--swn0jzq)",
                iconStrong: "var(--swn0jzr)",
                critical: "var(--swn0jzs)",
                info: "var(--swn0jzt)",
                success: "var(--swn0jzu)",
                warning: "var(--swn0jzv)",
                backgroundSpecified: "var(--swn0jzw)",
                backgroundSubdued200: "var(--swn0jzx)",
                borderSubdued200: "var(--swn0jzy)"
            },
            hover: {
                background: "var(--swn0jzz)",
                text: "var(--swn0j100)",
                border: "var(--swn0j101)",
                icon: "var(--swn0j102)",
                spinner: "var(--swn0j103)",
                accent: "var(--swn0j104)",
                custom: "var(--swn0j105)"
            },
            control: {
                background: "var(--swn0j106)",
                text: "var(--swn0j107)",
                border: "var(--swn0j108)",
                icon: "var(--swn0j109)",
                spinner: "var(--swn0j10a)",
                accent: "var(--swn0j10b)",
                custom: "var(--swn0j10c)",
                accentContrast: "var(--swn0j10d)",
                accentForegroundAsLightBackground: "var(--swn0j10e)",
                accentForegroundAsSubduedBackground: "var(--swn0j10f)",
                accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j10g)",
                accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j10h)",
                accentHovered: "var(--swn0j10i)",
                accentTextOnForegroundAsSubduedBackground: "var(--swn0j10j)",
                accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j10k)",
                backgroundLight: "var(--swn0j10l)",
                backgroundSubdued: "var(--swn0j10m)",
                backgroundSubduedAlpha: "var(--swn0j10n)",
                borderEmphasized: "var(--swn0j10o)",
                textContrast: "var(--swn0j10p)",
                textSubdued: "var(--swn0j10q)",
                textSubdued200: "var(--swn0j10r)",
                iconStrong: "var(--swn0j10s)",
                selected: {
                    background: "var(--swn0j10t)",
                    text: "var(--swn0j10u)",
                    border: "var(--swn0j10v)",
                    icon: "var(--swn0j10w)",
                    spinner: "var(--swn0j10x)",
                    accent: "var(--swn0j10y)",
                    custom: "var(--swn0j10z)",
                    accentContrast: "var(--swn0j110)",
                    accentForegroundAsLightBackground: "var(--swn0j111)",
                    accentForegroundAsSubduedBackground: "var(--swn0j112)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j113)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j114)",
                    accentHovered: "var(--swn0j115)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j116)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j117)",
                    backgroundLight: "var(--swn0j118)",
                    backgroundSubdued: "var(--swn0j119)",
                    backgroundSubduedAlpha: "var(--swn0j11a)",
                    borderEmphasized: "var(--swn0j11b)",
                    textContrast: "var(--swn0j11c)",
                    textSubdued: "var(--swn0j11d)",
                    textSubdued200: "var(--swn0j11e)",
                    iconStrong: "var(--swn0j11f)"
                },
                invalid: {
                    background: "var(--swn0j11g)",
                    text: "var(--swn0j11h)",
                    border: "var(--swn0j11i)",
                    icon: "var(--swn0j11j)",
                    spinner: "var(--swn0j11k)",
                    accent: "var(--swn0j11l)",
                    custom: "var(--swn0j11m)",
                    backgroundSubdued: "var(--swn0j11n)",
                    backgroundSubduedAlpha: "var(--swn0j11o)",
                    textSubdued: "var(--swn0j11p)"
                }
            },
            primaryButton: {
                background: "var(--swn0j11q)",
                text: "var(--swn0j11r)",
                border: "var(--swn0j11s)",
                icon: "var(--swn0j11t)",
                spinner: "var(--swn0j11u)",
                accent: "var(--swn0j11v)",
                custom: "var(--swn0j11w)",
                accentContrast: "var(--swn0j11x)",
                accentForegroundAsLightBackground: "var(--swn0j11y)",
                accentForegroundAsSubduedBackground: "var(--swn0j11z)",
                accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j120)",
                accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j121)",
                accentHovered: "var(--swn0j122)",
                accentTextOnForegroundAsSubduedBackground: "var(--swn0j123)",
                accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j124)",
                backgroundLight: "var(--swn0j125)",
                backgroundSubdued: "var(--swn0j126)",
                backgroundSubduedAlpha: "var(--swn0j127)",
                borderEmphasized: "var(--swn0j128)",
                textContrast: "var(--swn0j129)",
                textSubdued: "var(--swn0j12a)",
                textSubdued200: "var(--swn0j12b)",
                iconStrong: "var(--swn0j12c)",
                hover: {
                    background: "var(--swn0j12d)",
                    text: "var(--swn0j12e)",
                    border: "var(--swn0j12f)",
                    icon: "var(--swn0j12g)",
                    spinner: "var(--swn0j12h)",
                    accent: "var(--swn0j12i)",
                    custom: "var(--swn0j12j)"
                }
            },
            secondaryButton: {
                background: "var(--swn0j12k)",
                text: "var(--swn0j12l)",
                border: "var(--swn0j12m)",
                icon: "var(--swn0j12n)",
                spinner: "var(--swn0j12o)",
                accent: "var(--swn0j12p)",
                custom: "var(--swn0j12q)",
                accentContrast: "var(--swn0j12r)",
                accentForegroundAsLightBackground: "var(--swn0j12s)",
                accentForegroundAsSubduedBackground: "var(--swn0j12t)",
                accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j12u)",
                accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j12v)",
                accentHovered: "var(--swn0j12w)",
                accentTextOnForegroundAsSubduedBackground: "var(--swn0j12x)",
                accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j12y)",
                backgroundLight: "var(--swn0j12z)",
                backgroundSubdued: "var(--swn0j130)",
                backgroundSubduedAlpha: "var(--swn0j131)",
                borderEmphasized: "var(--swn0j132)",
                textContrast: "var(--swn0j133)",
                textSubdued: "var(--swn0j134)",
                textSubdued200: "var(--swn0j135)",
                iconStrong: "var(--swn0j136)",
                hover: {
                    background: "var(--swn0j137)",
                    text: "var(--swn0j138)",
                    border: "var(--swn0j139)",
                    icon: "var(--swn0j13a)",
                    spinner: "var(--swn0j13b)",
                    accent: "var(--swn0j13c)",
                    custom: "var(--swn0j13d)"
                }
            }
        },
        global: {
            accent: "var(--swn0j0)",
            accentContrast: "var(--swn0j1)",
            accentHovered: "var(--swn0j2)",
            accentForegroundAsLightBackground: "var(--swn0j3)",
            accentForegroundAsSubduedBackground: "var(--swn0j4)",
            accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j5)",
            accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j6)",
            accentTextOnForegroundAsSubduedBackground: "var(--swn0j7)",
            accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j8)",
            brand: "var(--swn0j9)",
            brandSubdued: "var(--swn0ja)",
            brandSubduedAlpha: "var(--swn0jb)",
            brandBorder: "var(--swn0jc)",
            brandText: "var(--swn0jd)",
            brandTextSubdued: "var(--swn0je)",
            critical: "var(--swn0jf)",
            criticalSubdued: "var(--swn0jg)",
            criticalBackground: "var(--swn0jh)",
            criticalBackgroundSubdued: "var(--swn0ji)",
            criticalBorder: "var(--swn0jj)",
            criticalContrast: "var(--swn0jk)",
            criticalContrastSubdued: "var(--swn0jl)",
            criticalIcon: "var(--swn0jm)",
            criticalText: "var(--swn0jn)",
            criticalTextSubdued: "var(--swn0jo)",
            criticalTextSubdued200: "var(--swn0jp)",
            custom: "var(--swn0jq)",
            info: "var(--swn0jr)",
            infoBackground: "var(--swn0js)",
            infoBackgroundSubdued: "var(--swn0jt)",
            infoBorder: "var(--swn0ju)",
            infoIcon: "var(--swn0jv)",
            infoText: "var(--swn0jw)",
            infoTextSubdued: "var(--swn0jx)",
            infoTextSubdued200: "var(--swn0jy)",
            success: "var(--swn0jz)",
            successBackground: "var(--swn0j10)",
            successBackgroundSubdued: "var(--swn0j11)",
            successBorder: "var(--swn0j12)",
            successIcon: "var(--swn0j13)",
            successText: "var(--swn0j14)",
            successTextSubdued: "var(--swn0j15)",
            successTextSubdued200: "var(--swn0j16)",
            warning: "var(--swn0j17)",
            warningBackground: "var(--swn0j18)",
            warningBackgroundSubdued: "var(--swn0j19)",
            warningBorder: "var(--swn0j1a)",
            warningIcon: "var(--swn0j1b)",
            warningText: "var(--swn0j1c)",
            warningTextSubdued: "var(--swn0j1d)",
            warningTextSubdued200: "var(--swn0j1e)",
            base: {
                background: "var(--swn0j1f)",
                backgroundSubdued: "var(--swn0j1g)",
                backgroundSubduedAlpha: "var(--swn0j1h)",
                backgroundSubdued200: "var(--swn0j1i)",
                border: "var(--swn0j1j)",
                borderEmphasized: "var(--swn0j1k)",
                borderSubdued200: "var(--swn0j1l)",
                text: "var(--swn0j1m)",
                textContrast: "var(--swn0j1n)",
                textSubdued: "var(--swn0j1o)",
                textSubdued200: "var(--swn0j1p)"
            },
            controlBackground: "var(--swn0j1q)",
            controlBackgroundSubdued: "var(--swn0j1r)",
            controlBackgroundSubduedAlpha: "var(--swn0j1s)",
            controlBorder: "var(--swn0j1t)",
            controlBorderEmphasized: "var(--swn0j1u)",
            controlText: "var(--swn0j1v)",
            controlTextContrast: "var(--swn0j1w)",
            controlTextSubdued: "var(--swn0j1x)",
            controlTextSubdued200: "var(--swn0j1y)"
        },
        schemes: {
            scheme1: {
                base: {
                    background: "var(--swn0j2x)",
                    text: "var(--swn0j2y)",
                    border: "var(--swn0j2z)",
                    icon: "var(--swn0j30)",
                    spinner: "var(--swn0j31)",
                    accent: "var(--swn0j32)",
                    custom: "var(--swn0j33)",
                    accentContrast: "var(--swn0j34)",
                    accentForegroundAsLightBackground: "var(--swn0j35)",
                    accentForegroundAsSubduedBackground: "var(--swn0j36)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j37)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j38)",
                    accentHovered: "var(--swn0j39)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j3a)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j3b)",
                    backgroundLight: "var(--swn0j3c)",
                    backgroundSubdued: "var(--swn0j3d)",
                    backgroundSubduedAlpha: "var(--swn0j3e)",
                    borderEmphasized: "var(--swn0j3f)",
                    textContrast: "var(--swn0j3g)",
                    textSubdued: "var(--swn0j3h)",
                    textSubdued200: "var(--swn0j3i)",
                    iconStrong: "var(--swn0j3j)",
                    critical: "var(--swn0j3k)",
                    info: "var(--swn0j3l)",
                    success: "var(--swn0j3m)",
                    warning: "var(--swn0j3n)",
                    backgroundSubdued200: "var(--swn0j3o)",
                    borderSubdued200: "var(--swn0j3p)"
                },
                control: {
                    background: "var(--swn0j3q)",
                    text: "var(--swn0j3r)",
                    border: "var(--swn0j3s)",
                    icon: "var(--swn0j3t)",
                    spinner: "var(--swn0j3u)",
                    accent: "var(--swn0j3v)",
                    custom: "var(--swn0j3w)",
                    accentContrast: "var(--swn0j3x)",
                    accentForegroundAsLightBackground: "var(--swn0j3y)",
                    accentForegroundAsSubduedBackground: "var(--swn0j3z)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j40)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j41)",
                    accentHovered: "var(--swn0j42)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j43)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j44)",
                    backgroundLight: "var(--swn0j45)",
                    backgroundSubdued: "var(--swn0j46)",
                    backgroundSubduedAlpha: "var(--swn0j47)",
                    borderEmphasized: "var(--swn0j48)",
                    textContrast: "var(--swn0j49)",
                    textSubdued: "var(--swn0j4a)",
                    textSubdued200: "var(--swn0j4b)",
                    iconStrong: "var(--swn0j4c)",
                    invalid: {
                        background: "var(--swn0j4d)",
                        text: "var(--swn0j4e)",
                        border: "var(--swn0j4f)",
                        icon: "var(--swn0j4g)",
                        spinner: "var(--swn0j4h)",
                        accent: "var(--swn0j4i)",
                        custom: "var(--swn0j4j)",
                        backgroundSubdued: "var(--swn0j4k)",
                        backgroundSubduedAlpha: "var(--swn0j4l)",
                        textSubdued: "var(--swn0j4m)"
                    },
                    selected: {
                        background: "var(--swn0j4n)",
                        text: "var(--swn0j4o)",
                        border: "var(--swn0j4p)",
                        icon: "var(--swn0j4q)",
                        spinner: "var(--swn0j4r)",
                        accent: "var(--swn0j4s)",
                        custom: "var(--swn0j4t)",
                        accentContrast: "var(--swn0j4u)",
                        accentForegroundAsLightBackground: "var(--swn0j4v)",
                        accentForegroundAsSubduedBackground: "var(--swn0j4w)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j4x)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j4y)",
                        accentHovered: "var(--swn0j4z)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0j50)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j51)",
                        backgroundLight: "var(--swn0j52)",
                        backgroundSubdued: "var(--swn0j53)",
                        backgroundSubduedAlpha: "var(--swn0j54)",
                        borderEmphasized: "var(--swn0j55)",
                        textContrast: "var(--swn0j56)",
                        textSubdued: "var(--swn0j57)",
                        textSubdued200: "var(--swn0j58)",
                        iconStrong: "var(--swn0j59)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0j5a)",
                    text: "var(--swn0j5b)",
                    border: "var(--swn0j5c)",
                    icon: "var(--swn0j5d)",
                    spinner: "var(--swn0j5e)",
                    accent: "var(--swn0j5f)",
                    custom: "var(--swn0j5g)",
                    accentContrast: "var(--swn0j5h)",
                    accentForegroundAsLightBackground: "var(--swn0j5i)",
                    accentForegroundAsSubduedBackground: "var(--swn0j5j)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j5k)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j5l)",
                    accentHovered: "var(--swn0j5m)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j5n)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j5o)",
                    backgroundLight: "var(--swn0j5p)",
                    backgroundSubdued: "var(--swn0j5q)",
                    backgroundSubduedAlpha: "var(--swn0j5r)",
                    borderEmphasized: "var(--swn0j5s)",
                    textContrast: "var(--swn0j5t)",
                    textSubdued: "var(--swn0j5u)",
                    textSubdued200: "var(--swn0j5v)",
                    iconStrong: "var(--swn0j5w)",
                    hover: {
                        background: "var(--swn0j5x)",
                        text: "var(--swn0j5y)",
                        border: "var(--swn0j5z)",
                        icon: "var(--swn0j60)",
                        spinner: "var(--swn0j61)",
                        accent: "var(--swn0j62)",
                        custom: "var(--swn0j63)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0j64)",
                    text: "var(--swn0j65)",
                    border: "var(--swn0j66)",
                    icon: "var(--swn0j67)",
                    spinner: "var(--swn0j68)",
                    accent: "var(--swn0j69)",
                    custom: "var(--swn0j6a)",
                    accentContrast: "var(--swn0j6b)",
                    accentForegroundAsLightBackground: "var(--swn0j6c)",
                    accentForegroundAsSubduedBackground: "var(--swn0j6d)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j6e)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j6f)",
                    accentHovered: "var(--swn0j6g)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j6h)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j6i)",
                    backgroundLight: "var(--swn0j6j)",
                    backgroundSubdued: "var(--swn0j6k)",
                    backgroundSubduedAlpha: "var(--swn0j6l)",
                    borderEmphasized: "var(--swn0j6m)",
                    textContrast: "var(--swn0j6n)",
                    textSubdued: "var(--swn0j6o)",
                    textSubdued200: "var(--swn0j6p)",
                    iconStrong: "var(--swn0j6q)",
                    hover: {
                        background: "var(--swn0j6r)",
                        text: "var(--swn0j6s)",
                        border: "var(--swn0j6t)",
                        icon: "var(--swn0j6u)",
                        spinner: "var(--swn0j6v)",
                        accent: "var(--swn0j6w)",
                        custom: "var(--swn0j6x)"
                    }
                }
            },
            scheme2: {
                base: {
                    background: "var(--swn0j1z)",
                    text: "var(--swn0j25)",
                    border: "var(--swn0j23)",
                    icon: "var(--swn0j71)",
                    spinner: "var(--swn0j72)",
                    accent: "var(--swn0j73)",
                    custom: "var(--swn0j74)",
                    accentContrast: "var(--swn0j75)",
                    accentForegroundAsLightBackground: "var(--swn0j76)",
                    accentForegroundAsSubduedBackground: "var(--swn0j77)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j78)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j79)",
                    accentHovered: "var(--swn0j7a)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j7b)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j7c)",
                    backgroundLight: "var(--swn0j7d)",
                    backgroundSubdued: "var(--swn0j20)",
                    backgroundSubduedAlpha: "var(--swn0j21)",
                    borderEmphasized: "var(--swn0j7g)",
                    textContrast: "var(--swn0j26)",
                    textSubdued: "var(--swn0j27)",
                    textSubdued200: "var(--swn0j28)",
                    iconStrong: "var(--swn0j7k)",
                    critical: "var(--swn0j7l)",
                    info: "var(--swn0j7m)",
                    success: "var(--swn0j7n)",
                    warning: "var(--swn0j7o)",
                    backgroundSubdued200: "var(--swn0j22)",
                    borderSubdued200: "var(--swn0j24)"
                },
                control: {
                    background: "var(--swn0j7r)",
                    text: "var(--swn0j7s)",
                    border: "var(--swn0j7t)",
                    icon: "var(--swn0j7u)",
                    spinner: "var(--swn0j7v)",
                    accent: "var(--swn0j7w)",
                    custom: "var(--swn0j7x)",
                    accentContrast: "var(--swn0j7y)",
                    accentForegroundAsLightBackground: "var(--swn0j7z)",
                    accentForegroundAsSubduedBackground: "var(--swn0j80)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j81)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j82)",
                    accentHovered: "var(--swn0j83)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j84)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j85)",
                    backgroundLight: "var(--swn0j86)",
                    backgroundSubdued: "var(--swn0j87)",
                    backgroundSubduedAlpha: "var(--swn0j88)",
                    borderEmphasized: "var(--swn0j89)",
                    textContrast: "var(--swn0j8a)",
                    textSubdued: "var(--swn0j8b)",
                    textSubdued200: "var(--swn0j8c)",
                    iconStrong: "var(--swn0j8d)",
                    invalid: {
                        background: "var(--swn0j8e)",
                        text: "var(--swn0j8f)",
                        border: "var(--swn0j8g)",
                        icon: "var(--swn0j8h)",
                        spinner: "var(--swn0j8i)",
                        accent: "var(--swn0j8j)",
                        custom: "var(--swn0j8k)",
                        backgroundSubdued: "var(--swn0j8l)",
                        backgroundSubduedAlpha: "var(--swn0j8m)",
                        textSubdued: "var(--swn0j8n)"
                    },
                    selected: {
                        background: "var(--swn0j8o)",
                        text: "var(--swn0j8p)",
                        border: "var(--swn0j8q)",
                        icon: "var(--swn0j8r)",
                        spinner: "var(--swn0j8s)",
                        accent: "var(--swn0j8t)",
                        custom: "var(--swn0j8u)",
                        accentContrast: "var(--swn0j8v)",
                        accentForegroundAsLightBackground: "var(--swn0j8w)",
                        accentForegroundAsSubduedBackground: "var(--swn0j8x)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j8y)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j8z)",
                        accentHovered: "var(--swn0j90)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0j91)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j92)",
                        backgroundLight: "var(--swn0j93)",
                        backgroundSubdued: "var(--swn0j94)",
                        backgroundSubduedAlpha: "var(--swn0j95)",
                        borderEmphasized: "var(--swn0j96)",
                        textContrast: "var(--swn0j97)",
                        textSubdued: "var(--swn0j98)",
                        textSubdued200: "var(--swn0j99)",
                        iconStrong: "var(--swn0j9a)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0j9b)",
                    text: "var(--swn0j9c)",
                    border: "var(--swn0j9d)",
                    icon: "var(--swn0j9e)",
                    spinner: "var(--swn0j9f)",
                    accent: "var(--swn0j9g)",
                    custom: "var(--swn0j9h)",
                    accentContrast: "var(--swn0j9i)",
                    accentForegroundAsLightBackground: "var(--swn0j9j)",
                    accentForegroundAsSubduedBackground: "var(--swn0j9k)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0j9l)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j9m)",
                    accentHovered: "var(--swn0j9n)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0j9o)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0j9p)",
                    backgroundLight: "var(--swn0j9q)",
                    backgroundSubdued: "var(--swn0j9r)",
                    backgroundSubduedAlpha: "var(--swn0j9s)",
                    borderEmphasized: "var(--swn0j9t)",
                    textContrast: "var(--swn0j9u)",
                    textSubdued: "var(--swn0j9v)",
                    textSubdued200: "var(--swn0j9w)",
                    iconStrong: "var(--swn0j9x)",
                    hover: {
                        background: "var(--swn0j9y)",
                        text: "var(--swn0j9z)",
                        border: "var(--swn0ja0)",
                        icon: "var(--swn0ja1)",
                        spinner: "var(--swn0ja2)",
                        accent: "var(--swn0ja3)",
                        custom: "var(--swn0ja4)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0ja5)",
                    text: "var(--swn0ja6)",
                    border: "var(--swn0ja7)",
                    icon: "var(--swn0ja8)",
                    spinner: "var(--swn0ja9)",
                    accent: "var(--swn0jaa)",
                    custom: "var(--swn0jab)",
                    accentContrast: "var(--swn0jac)",
                    accentForegroundAsLightBackground: "var(--swn0jad)",
                    accentForegroundAsSubduedBackground: "var(--swn0jae)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jaf)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jag)",
                    accentHovered: "var(--swn0jah)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jai)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jaj)",
                    backgroundLight: "var(--swn0jak)",
                    backgroundSubdued: "var(--swn0jal)",
                    backgroundSubduedAlpha: "var(--swn0jam)",
                    borderEmphasized: "var(--swn0jan)",
                    textContrast: "var(--swn0jao)",
                    textSubdued: "var(--swn0jap)",
                    textSubdued200: "var(--swn0jaq)",
                    iconStrong: "var(--swn0jar)",
                    hover: {
                        background: "var(--swn0jas)",
                        text: "var(--swn0jat)",
                        border: "var(--swn0jau)",
                        icon: "var(--swn0jav)",
                        spinner: "var(--swn0jaw)",
                        accent: "var(--swn0jax)",
                        custom: "var(--swn0jay)"
                    }
                }
            },
            scheme3: {
                base: {
                    background: "var(--swn0jaz)",
                    text: "var(--swn0jb0)",
                    border: "var(--swn0jb1)",
                    icon: "var(--swn0jb2)",
                    spinner: "var(--swn0jb3)",
                    accent: "var(--swn0jb4)",
                    custom: "var(--swn0jb5)",
                    accentContrast: "var(--swn0jb6)",
                    accentForegroundAsLightBackground: "var(--swn0jb7)",
                    accentForegroundAsSubduedBackground: "var(--swn0jb8)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jb9)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jba)",
                    accentHovered: "var(--swn0jbb)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jbc)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jbd)",
                    backgroundLight: "var(--swn0jbe)",
                    backgroundSubdued: "var(--swn0jbf)",
                    backgroundSubduedAlpha: "var(--swn0jbg)",
                    borderEmphasized: "var(--swn0jbh)",
                    textContrast: "var(--swn0jbi)",
                    textSubdued: "var(--swn0jbj)",
                    textSubdued200: "var(--swn0jbk)",
                    iconStrong: "var(--swn0jbl)",
                    critical: "var(--swn0jbm)",
                    info: "var(--swn0jbn)",
                    success: "var(--swn0jbo)",
                    warning: "var(--swn0jbp)",
                    backgroundSubdued200: "var(--swn0jbq)",
                    borderSubdued200: "var(--swn0jbr)"
                },
                control: {
                    background: "var(--swn0jbs)",
                    text: "var(--swn0jbt)",
                    border: "var(--swn0jbu)",
                    icon: "var(--swn0jbv)",
                    spinner: "var(--swn0jbw)",
                    accent: "var(--swn0jbx)",
                    custom: "var(--swn0jby)",
                    accentContrast: "var(--swn0jbz)",
                    accentForegroundAsLightBackground: "var(--swn0jc0)",
                    accentForegroundAsSubduedBackground: "var(--swn0jc1)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jc2)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jc3)",
                    accentHovered: "var(--swn0jc4)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jc5)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jc6)",
                    backgroundLight: "var(--swn0jc7)",
                    backgroundSubdued: "var(--swn0jc8)",
                    backgroundSubduedAlpha: "var(--swn0jc9)",
                    borderEmphasized: "var(--swn0jca)",
                    textContrast: "var(--swn0jcb)",
                    textSubdued: "var(--swn0jcc)",
                    textSubdued200: "var(--swn0jcd)",
                    iconStrong: "var(--swn0jce)",
                    invalid: {
                        background: "var(--swn0jcf)",
                        text: "var(--swn0jcg)",
                        border: "var(--swn0jch)",
                        icon: "var(--swn0jci)",
                        spinner: "var(--swn0jcj)",
                        accent: "var(--swn0jck)",
                        custom: "var(--swn0jcl)",
                        backgroundSubdued: "var(--swn0jcm)",
                        backgroundSubduedAlpha: "var(--swn0jcn)",
                        textSubdued: "var(--swn0jco)"
                    },
                    selected: {
                        background: "var(--swn0jcp)",
                        text: "var(--swn0jcq)",
                        border: "var(--swn0jcr)",
                        icon: "var(--swn0jcs)",
                        spinner: "var(--swn0jct)",
                        accent: "var(--swn0jcu)",
                        custom: "var(--swn0jcv)",
                        accentContrast: "var(--swn0jcw)",
                        accentForegroundAsLightBackground: "var(--swn0jcx)",
                        accentForegroundAsSubduedBackground: "var(--swn0jcy)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jcz)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jd0)",
                        accentHovered: "var(--swn0jd1)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jd2)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jd3)",
                        backgroundLight: "var(--swn0jd4)",
                        backgroundSubdued: "var(--swn0jd5)",
                        backgroundSubduedAlpha: "var(--swn0jd6)",
                        borderEmphasized: "var(--swn0jd7)",
                        textContrast: "var(--swn0jd8)",
                        textSubdued: "var(--swn0jd9)",
                        textSubdued200: "var(--swn0jda)",
                        iconStrong: "var(--swn0jdb)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jdc)",
                    text: "var(--swn0jdd)",
                    border: "var(--swn0jde)",
                    icon: "var(--swn0jdf)",
                    spinner: "var(--swn0jdg)",
                    accent: "var(--swn0jdh)",
                    custom: "var(--swn0jdi)",
                    accentContrast: "var(--swn0jdj)",
                    accentForegroundAsLightBackground: "var(--swn0jdk)",
                    accentForegroundAsSubduedBackground: "var(--swn0jdl)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jdm)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jdn)",
                    accentHovered: "var(--swn0jdo)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jdp)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jdq)",
                    backgroundLight: "var(--swn0jdr)",
                    backgroundSubdued: "var(--swn0jds)",
                    backgroundSubduedAlpha: "var(--swn0jdt)",
                    borderEmphasized: "var(--swn0jdu)",
                    textContrast: "var(--swn0jdv)",
                    textSubdued: "var(--swn0jdw)",
                    textSubdued200: "var(--swn0jdx)",
                    iconStrong: "var(--swn0jdy)",
                    hover: {
                        background: "var(--swn0jdz)",
                        text: "var(--swn0je0)",
                        border: "var(--swn0je1)",
                        icon: "var(--swn0je2)",
                        spinner: "var(--swn0je3)",
                        accent: "var(--swn0je4)",
                        custom: "var(--swn0je5)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0je6)",
                    text: "var(--swn0je7)",
                    border: "var(--swn0je8)",
                    icon: "var(--swn0je9)",
                    spinner: "var(--swn0jea)",
                    accent: "var(--swn0jeb)",
                    custom: "var(--swn0jec)",
                    accentContrast: "var(--swn0jed)",
                    accentForegroundAsLightBackground: "var(--swn0jee)",
                    accentForegroundAsSubduedBackground: "var(--swn0jef)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jeg)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jeh)",
                    accentHovered: "var(--swn0jei)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jej)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jek)",
                    backgroundLight: "var(--swn0jel)",
                    backgroundSubdued: "var(--swn0jem)",
                    backgroundSubduedAlpha: "var(--swn0jen)",
                    borderEmphasized: "var(--swn0jeo)",
                    textContrast: "var(--swn0jep)",
                    textSubdued: "var(--swn0jeq)",
                    textSubdued200: "var(--swn0jer)",
                    iconStrong: "var(--swn0jes)",
                    hover: {
                        background: "var(--swn0jet)",
                        text: "var(--swn0jeu)",
                        border: "var(--swn0jev)",
                        icon: "var(--swn0jew)",
                        spinner: "var(--swn0jex)",
                        accent: "var(--swn0jey)",
                        custom: "var(--swn0jez)"
                    }
                }
            },
            scheme4: {
                base: {
                    background: "var(--swn0jf0)",
                    text: "var(--swn0jf1)",
                    border: "var(--swn0jf2)",
                    icon: "var(--swn0jf3)",
                    spinner: "var(--swn0jf4)",
                    accent: "var(--swn0jf5)",
                    custom: "var(--swn0jf6)",
                    accentContrast: "var(--swn0jf7)",
                    accentForegroundAsLightBackground: "var(--swn0jf8)",
                    accentForegroundAsSubduedBackground: "var(--swn0jf9)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jfa)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jfb)",
                    accentHovered: "var(--swn0jfc)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jfd)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jfe)",
                    backgroundLight: "var(--swn0jff)",
                    backgroundSubdued: "var(--swn0jfg)",
                    backgroundSubduedAlpha: "var(--swn0jfh)",
                    borderEmphasized: "var(--swn0jfi)",
                    textContrast: "var(--swn0jfj)",
                    textSubdued: "var(--swn0jfk)",
                    textSubdued200: "var(--swn0jfl)",
                    iconStrong: "var(--swn0jfm)",
                    critical: "var(--swn0jfn)",
                    info: "var(--swn0jfo)",
                    success: "var(--swn0jfp)",
                    warning: "var(--swn0jfq)",
                    backgroundSubdued200: "var(--swn0jfr)",
                    borderSubdued200: "var(--swn0jfs)"
                },
                control: {
                    background: "var(--swn0jft)",
                    text: "var(--swn0jfu)",
                    border: "var(--swn0jfv)",
                    icon: "var(--swn0jfw)",
                    spinner: "var(--swn0jfx)",
                    accent: "var(--swn0jfy)",
                    custom: "var(--swn0jfz)",
                    accentContrast: "var(--swn0jg0)",
                    accentForegroundAsLightBackground: "var(--swn0jg1)",
                    accentForegroundAsSubduedBackground: "var(--swn0jg2)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jg3)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jg4)",
                    accentHovered: "var(--swn0jg5)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jg6)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jg7)",
                    backgroundLight: "var(--swn0jg8)",
                    backgroundSubdued: "var(--swn0jg9)",
                    backgroundSubduedAlpha: "var(--swn0jga)",
                    borderEmphasized: "var(--swn0jgb)",
                    textContrast: "var(--swn0jgc)",
                    textSubdued: "var(--swn0jgd)",
                    textSubdued200: "var(--swn0jge)",
                    iconStrong: "var(--swn0jgf)",
                    invalid: {
                        background: "var(--swn0jgg)",
                        text: "var(--swn0jgh)",
                        border: "var(--swn0jgi)",
                        icon: "var(--swn0jgj)",
                        spinner: "var(--swn0jgk)",
                        accent: "var(--swn0jgl)",
                        custom: "var(--swn0jgm)",
                        backgroundSubdued: "var(--swn0jgn)",
                        backgroundSubduedAlpha: "var(--swn0jgo)",
                        textSubdued: "var(--swn0jgp)"
                    },
                    selected: {
                        background: "var(--swn0jgq)",
                        text: "var(--swn0jgr)",
                        border: "var(--swn0jgs)",
                        icon: "var(--swn0jgt)",
                        spinner: "var(--swn0jgu)",
                        accent: "var(--swn0jgv)",
                        custom: "var(--swn0jgw)",
                        accentContrast: "var(--swn0jgx)",
                        accentForegroundAsLightBackground: "var(--swn0jgy)",
                        accentForegroundAsSubduedBackground: "var(--swn0jgz)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jh0)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jh1)",
                        accentHovered: "var(--swn0jh2)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jh3)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jh4)",
                        backgroundLight: "var(--swn0jh5)",
                        backgroundSubdued: "var(--swn0jh6)",
                        backgroundSubduedAlpha: "var(--swn0jh7)",
                        borderEmphasized: "var(--swn0jh8)",
                        textContrast: "var(--swn0jh9)",
                        textSubdued: "var(--swn0jha)",
                        textSubdued200: "var(--swn0jhb)",
                        iconStrong: "var(--swn0jhc)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jhd)",
                    text: "var(--swn0jhe)",
                    border: "var(--swn0jhf)",
                    icon: "var(--swn0jhg)",
                    spinner: "var(--swn0jhh)",
                    accent: "var(--swn0jhi)",
                    custom: "var(--swn0jhj)",
                    accentContrast: "var(--swn0jhk)",
                    accentForegroundAsLightBackground: "var(--swn0jhl)",
                    accentForegroundAsSubduedBackground: "var(--swn0jhm)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jhn)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jho)",
                    accentHovered: "var(--swn0jhp)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jhq)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jhr)",
                    backgroundLight: "var(--swn0jhs)",
                    backgroundSubdued: "var(--swn0jht)",
                    backgroundSubduedAlpha: "var(--swn0jhu)",
                    borderEmphasized: "var(--swn0jhv)",
                    textContrast: "var(--swn0jhw)",
                    textSubdued: "var(--swn0jhx)",
                    textSubdued200: "var(--swn0jhy)",
                    iconStrong: "var(--swn0jhz)",
                    hover: {
                        background: "var(--swn0ji0)",
                        text: "var(--swn0ji1)",
                        border: "var(--swn0ji2)",
                        icon: "var(--swn0ji3)",
                        spinner: "var(--swn0ji4)",
                        accent: "var(--swn0ji5)",
                        custom: "var(--swn0ji6)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0ji7)",
                    text: "var(--swn0ji8)",
                    border: "var(--swn0ji9)",
                    icon: "var(--swn0jia)",
                    spinner: "var(--swn0jib)",
                    accent: "var(--swn0jic)",
                    custom: "var(--swn0jid)",
                    accentContrast: "var(--swn0jie)",
                    accentForegroundAsLightBackground: "var(--swn0jif)",
                    accentForegroundAsSubduedBackground: "var(--swn0jig)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jih)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jii)",
                    accentHovered: "var(--swn0jij)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jik)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jil)",
                    backgroundLight: "var(--swn0jim)",
                    backgroundSubdued: "var(--swn0jin)",
                    backgroundSubduedAlpha: "var(--swn0jio)",
                    borderEmphasized: "var(--swn0jip)",
                    textContrast: "var(--swn0jiq)",
                    textSubdued: "var(--swn0jir)",
                    textSubdued200: "var(--swn0jis)",
                    iconStrong: "var(--swn0jit)",
                    hover: {
                        background: "var(--swn0jiu)",
                        text: "var(--swn0jiv)",
                        border: "var(--swn0jiw)",
                        icon: "var(--swn0jix)",
                        spinner: "var(--swn0jiy)",
                        accent: "var(--swn0jiz)",
                        custom: "var(--swn0jj0)"
                    }
                }
            },
            scheme5: {
                base: {
                    background: "var(--swn0jj1)",
                    text: "var(--swn0jj2)",
                    border: "var(--swn0jj3)",
                    icon: "var(--swn0jj4)",
                    spinner: "var(--swn0jj5)",
                    accent: "var(--swn0jj6)",
                    custom: "var(--swn0jj7)",
                    accentContrast: "var(--swn0jj8)",
                    accentForegroundAsLightBackground: "var(--swn0jj9)",
                    accentForegroundAsSubduedBackground: "var(--swn0jja)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jjb)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jjc)",
                    accentHovered: "var(--swn0jjd)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jje)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jjf)",
                    backgroundLight: "var(--swn0jjg)",
                    backgroundSubdued: "var(--swn0jjh)",
                    backgroundSubduedAlpha: "var(--swn0jji)",
                    borderEmphasized: "var(--swn0jjj)",
                    textContrast: "var(--swn0jjk)",
                    textSubdued: "var(--swn0jjl)",
                    textSubdued200: "var(--swn0jjm)",
                    iconStrong: "var(--swn0jjn)",
                    critical: "var(--swn0jjo)",
                    info: "var(--swn0jjp)",
                    success: "var(--swn0jjq)",
                    warning: "var(--swn0jjr)",
                    backgroundSubdued200: "var(--swn0jjs)",
                    borderSubdued200: "var(--swn0jjt)"
                },
                control: {
                    background: "var(--swn0jju)",
                    text: "var(--swn0jjv)",
                    border: "var(--swn0jjw)",
                    icon: "var(--swn0jjx)",
                    spinner: "var(--swn0jjy)",
                    accent: "var(--swn0jjz)",
                    custom: "var(--swn0jk0)",
                    accentContrast: "var(--swn0jk1)",
                    accentForegroundAsLightBackground: "var(--swn0jk2)",
                    accentForegroundAsSubduedBackground: "var(--swn0jk3)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jk4)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jk5)",
                    accentHovered: "var(--swn0jk6)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jk7)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jk8)",
                    backgroundLight: "var(--swn0jk9)",
                    backgroundSubdued: "var(--swn0jka)",
                    backgroundSubduedAlpha: "var(--swn0jkb)",
                    borderEmphasized: "var(--swn0jkc)",
                    textContrast: "var(--swn0jkd)",
                    textSubdued: "var(--swn0jke)",
                    textSubdued200: "var(--swn0jkf)",
                    iconStrong: "var(--swn0jkg)",
                    invalid: {
                        background: "var(--swn0jkh)",
                        text: "var(--swn0jki)",
                        border: "var(--swn0jkj)",
                        icon: "var(--swn0jkk)",
                        spinner: "var(--swn0jkl)",
                        accent: "var(--swn0jkm)",
                        custom: "var(--swn0jkn)",
                        backgroundSubdued: "var(--swn0jko)",
                        backgroundSubduedAlpha: "var(--swn0jkp)",
                        textSubdued: "var(--swn0jkq)"
                    },
                    selected: {
                        background: "var(--swn0jkr)",
                        text: "var(--swn0jks)",
                        border: "var(--swn0jkt)",
                        icon: "var(--swn0jku)",
                        spinner: "var(--swn0jkv)",
                        accent: "var(--swn0jkw)",
                        custom: "var(--swn0jkx)",
                        accentContrast: "var(--swn0jky)",
                        accentForegroundAsLightBackground: "var(--swn0jkz)",
                        accentForegroundAsSubduedBackground: "var(--swn0jl0)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jl1)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jl2)",
                        accentHovered: "var(--swn0jl3)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jl4)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jl5)",
                        backgroundLight: "var(--swn0jl6)",
                        backgroundSubdued: "var(--swn0jl7)",
                        backgroundSubduedAlpha: "var(--swn0jl8)",
                        borderEmphasized: "var(--swn0jl9)",
                        textContrast: "var(--swn0jla)",
                        textSubdued: "var(--swn0jlb)",
                        textSubdued200: "var(--swn0jlc)",
                        iconStrong: "var(--swn0jld)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jle)",
                    text: "var(--swn0jlf)",
                    border: "var(--swn0jlg)",
                    icon: "var(--swn0jlh)",
                    spinner: "var(--swn0jli)",
                    accent: "var(--swn0jlj)",
                    custom: "var(--swn0jlk)",
                    accentContrast: "var(--swn0jll)",
                    accentForegroundAsLightBackground: "var(--swn0jlm)",
                    accentForegroundAsSubduedBackground: "var(--swn0jln)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jlo)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jlp)",
                    accentHovered: "var(--swn0jlq)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jlr)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jls)",
                    backgroundLight: "var(--swn0jlt)",
                    backgroundSubdued: "var(--swn0jlu)",
                    backgroundSubduedAlpha: "var(--swn0jlv)",
                    borderEmphasized: "var(--swn0jlw)",
                    textContrast: "var(--swn0jlx)",
                    textSubdued: "var(--swn0jly)",
                    textSubdued200: "var(--swn0jlz)",
                    iconStrong: "var(--swn0jm0)",
                    hover: {
                        background: "var(--swn0jm1)",
                        text: "var(--swn0jm2)",
                        border: "var(--swn0jm3)",
                        icon: "var(--swn0jm4)",
                        spinner: "var(--swn0jm5)",
                        accent: "var(--swn0jm6)",
                        custom: "var(--swn0jm7)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0jm8)",
                    text: "var(--swn0jm9)",
                    border: "var(--swn0jma)",
                    icon: "var(--swn0jmb)",
                    spinner: "var(--swn0jmc)",
                    accent: "var(--swn0jmd)",
                    custom: "var(--swn0jme)",
                    accentContrast: "var(--swn0jmf)",
                    accentForegroundAsLightBackground: "var(--swn0jmg)",
                    accentForegroundAsSubduedBackground: "var(--swn0jmh)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jmi)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jmj)",
                    accentHovered: "var(--swn0jmk)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jml)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jmm)",
                    backgroundLight: "var(--swn0jmn)",
                    backgroundSubdued: "var(--swn0jmo)",
                    backgroundSubduedAlpha: "var(--swn0jmp)",
                    borderEmphasized: "var(--swn0jmq)",
                    textContrast: "var(--swn0jmr)",
                    textSubdued: "var(--swn0jms)",
                    textSubdued200: "var(--swn0jmt)",
                    iconStrong: "var(--swn0jmu)",
                    hover: {
                        background: "var(--swn0jmv)",
                        text: "var(--swn0jmw)",
                        border: "var(--swn0jmx)",
                        icon: "var(--swn0jmy)",
                        spinner: "var(--swn0jmz)",
                        accent: "var(--swn0jn0)",
                        custom: "var(--swn0jn1)"
                    }
                }
            },
            scheme6: {
                base: {
                    background: "var(--swn0j2c)",
                    text: "var(--swn0j2e)",
                    border: "var(--swn0j2d)",
                    icon: "var(--swn0jn5)",
                    spinner: "var(--swn0jn6)",
                    accent: "var(--swn0j29)",
                    custom: "var(--swn0jn8)",
                    accentContrast: "var(--swn0j2a)",
                    accentForegroundAsLightBackground: "var(--swn0jna)",
                    accentForegroundAsSubduedBackground: "var(--swn0jnb)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jnc)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0j2o)",
                    accentHovered: "var(--swn0j2b)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jnf)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jng)",
                    backgroundLight: "var(--swn0j2f)",
                    backgroundSubdued: "var(--swn0j2g)",
                    backgroundSubduedAlpha: "var(--swn0j2h)",
                    borderEmphasized: "var(--swn0j2j)",
                    textContrast: "var(--swn0j2l)",
                    textSubdued: "var(--swn0j2m)",
                    textSubdued200: "var(--swn0j2n)",
                    iconStrong: "var(--swn0jno)",
                    critical: "var(--swn0j2p)",
                    info: "var(--swn0j2q)",
                    success: "var(--swn0j2r)",
                    warning: "var(--swn0j2s)",
                    backgroundSubdued200: "var(--swn0j2i)",
                    borderSubdued200: "var(--swn0j2k)"
                },
                control: {
                    background: "var(--swn0jnv)",
                    text: "var(--swn0jnw)",
                    border: "var(--swn0jnx)",
                    icon: "var(--swn0jny)",
                    spinner: "var(--swn0jnz)",
                    accent: "var(--swn0j2v)",
                    custom: "var(--swn0jo1)",
                    accentContrast: "var(--swn0j2w)",
                    accentForegroundAsLightBackground: "var(--swn0jo3)",
                    accentForegroundAsSubduedBackground: "var(--swn0jo4)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jo5)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jo6)",
                    accentHovered: "var(--swn0jo7)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jo8)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jo9)",
                    backgroundLight: "var(--swn0joa)",
                    backgroundSubdued: "var(--swn0job)",
                    backgroundSubduedAlpha: "var(--swn0joc)",
                    borderEmphasized: "var(--swn0jod)",
                    textContrast: "var(--swn0joe)",
                    textSubdued: "var(--swn0jof)",
                    textSubdued200: "var(--swn0jog)",
                    iconStrong: "var(--swn0joh)",
                    invalid: {
                        background: "var(--swn0joi)",
                        text: "var(--swn0joj)",
                        border: "var(--swn0jok)",
                        icon: "var(--swn0jol)",
                        spinner: "var(--swn0jom)",
                        accent: "var(--swn0jon)",
                        custom: "var(--swn0joo)",
                        backgroundSubdued: "var(--swn0jop)",
                        backgroundSubduedAlpha: "var(--swn0joq)",
                        textSubdued: "var(--swn0jor)"
                    },
                    selected: {
                        background: "var(--swn0jos)",
                        text: "var(--swn0jot)",
                        border: "var(--swn0jou)",
                        icon: "var(--swn0jov)",
                        spinner: "var(--swn0jow)",
                        accent: "var(--swn0jox)",
                        custom: "var(--swn0joy)",
                        accentContrast: "var(--swn0joz)",
                        accentForegroundAsLightBackground: "var(--swn0jp0)",
                        accentForegroundAsSubduedBackground: "var(--swn0jp1)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jp2)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jp3)",
                        accentHovered: "var(--swn0jp4)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jp5)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jp6)",
                        backgroundLight: "var(--swn0jp7)",
                        backgroundSubdued: "var(--swn0jp8)",
                        backgroundSubduedAlpha: "var(--swn0jp9)",
                        borderEmphasized: "var(--swn0jpa)",
                        textContrast: "var(--swn0jpb)",
                        textSubdued: "var(--swn0jpc)",
                        textSubdued200: "var(--swn0jpd)",
                        iconStrong: "var(--swn0jpe)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jpf)",
                    text: "var(--swn0jpg)",
                    border: "var(--swn0jph)",
                    icon: "var(--swn0jpi)",
                    spinner: "var(--swn0jpj)",
                    accent: "var(--swn0jpk)",
                    custom: "var(--swn0jpl)",
                    accentContrast: "var(--swn0jpm)",
                    accentForegroundAsLightBackground: "var(--swn0jpn)",
                    accentForegroundAsSubduedBackground: "var(--swn0jpo)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jpp)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jpq)",
                    accentHovered: "var(--swn0jpr)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jps)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jpt)",
                    backgroundLight: "var(--swn0jpu)",
                    backgroundSubdued: "var(--swn0jpv)",
                    backgroundSubduedAlpha: "var(--swn0jpw)",
                    borderEmphasized: "var(--swn0jpx)",
                    textContrast: "var(--swn0jpy)",
                    textSubdued: "var(--swn0jpz)",
                    textSubdued200: "var(--swn0jq0)",
                    iconStrong: "var(--swn0jq1)",
                    hover: {
                        background: "var(--swn0jq2)",
                        text: "var(--swn0jq3)",
                        border: "var(--swn0jq4)",
                        icon: "var(--swn0jq5)",
                        spinner: "var(--swn0jq6)",
                        accent: "var(--swn0jq7)",
                        custom: "var(--swn0jq8)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0jq9)",
                    text: "var(--swn0j2t)",
                    border: "var(--swn0jqb)",
                    icon: "var(--swn0jqc)",
                    spinner: "var(--swn0jqd)",
                    accent: "var(--swn0jqe)",
                    custom: "var(--swn0jqf)",
                    accentContrast: "var(--swn0jqg)",
                    accentForegroundAsLightBackground: "var(--swn0jqh)",
                    accentForegroundAsSubduedBackground: "var(--swn0jqi)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jqj)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jqk)",
                    accentHovered: "var(--swn0jql)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jqm)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jqn)",
                    backgroundLight: "var(--swn0jqo)",
                    backgroundSubdued: "var(--swn0jqp)",
                    backgroundSubduedAlpha: "var(--swn0jqq)",
                    borderEmphasized: "var(--swn0jqr)",
                    textContrast: "var(--swn0jqs)",
                    textSubdued: "var(--swn0jqt)",
                    textSubdued200: "var(--swn0jqu)",
                    iconStrong: "var(--swn0jqv)",
                    hover: {
                        background: "var(--swn0jqw)",
                        text: "var(--swn0j2u)",
                        border: "var(--swn0jqy)",
                        icon: "var(--swn0jqz)",
                        spinner: "var(--swn0jr0)",
                        accent: "var(--swn0jr1)",
                        custom: "var(--swn0jr2)"
                    }
                }
            },
            scheme7: {
                base: {
                    background: "var(--swn0jr3)",
                    text: "var(--swn0jr4)",
                    border: "var(--swn0jr5)",
                    icon: "var(--swn0jr6)",
                    spinner: "var(--swn0jr7)",
                    accent: "var(--swn0jr8)",
                    custom: "var(--swn0jr9)",
                    accentContrast: "var(--swn0jra)",
                    accentForegroundAsLightBackground: "var(--swn0jrb)",
                    accentForegroundAsSubduedBackground: "var(--swn0jrc)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jrd)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jre)",
                    accentHovered: "var(--swn0jrf)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jrg)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jrh)",
                    backgroundLight: "var(--swn0jri)",
                    backgroundSubdued: "var(--swn0jrj)",
                    backgroundSubduedAlpha: "var(--swn0jrk)",
                    borderEmphasized: "var(--swn0jrl)",
                    textContrast: "var(--swn0jrm)",
                    textSubdued: "var(--swn0jrn)",
                    textSubdued200: "var(--swn0jro)",
                    iconStrong: "var(--swn0jrp)",
                    critical: "var(--swn0jrq)",
                    info: "var(--swn0jrr)",
                    success: "var(--swn0jrs)",
                    warning: "var(--swn0jrt)",
                    backgroundSubdued200: "var(--swn0jru)",
                    borderSubdued200: "var(--swn0jrv)"
                },
                control: {
                    background: "var(--swn0jrw)",
                    text: "var(--swn0jrx)",
                    border: "var(--swn0jry)",
                    icon: "var(--swn0jrz)",
                    spinner: "var(--swn0js0)",
                    accent: "var(--swn0js1)",
                    custom: "var(--swn0js2)",
                    accentContrast: "var(--swn0js3)",
                    accentForegroundAsLightBackground: "var(--swn0js4)",
                    accentForegroundAsSubduedBackground: "var(--swn0js5)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0js6)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0js7)",
                    accentHovered: "var(--swn0js8)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0js9)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jsa)",
                    backgroundLight: "var(--swn0jsb)",
                    backgroundSubdued: "var(--swn0jsc)",
                    backgroundSubduedAlpha: "var(--swn0jsd)",
                    borderEmphasized: "var(--swn0jse)",
                    textContrast: "var(--swn0jsf)",
                    textSubdued: "var(--swn0jsg)",
                    textSubdued200: "var(--swn0jsh)",
                    iconStrong: "var(--swn0jsi)",
                    invalid: {
                        background: "var(--swn0jsj)",
                        text: "var(--swn0jsk)",
                        border: "var(--swn0jsl)",
                        icon: "var(--swn0jsm)",
                        spinner: "var(--swn0jsn)",
                        accent: "var(--swn0jso)",
                        custom: "var(--swn0jsp)",
                        backgroundSubdued: "var(--swn0jsq)",
                        backgroundSubduedAlpha: "var(--swn0jsr)",
                        textSubdued: "var(--swn0jss)"
                    },
                    selected: {
                        background: "var(--swn0jst)",
                        text: "var(--swn0jsu)",
                        border: "var(--swn0jsv)",
                        icon: "var(--swn0jsw)",
                        spinner: "var(--swn0jsx)",
                        accent: "var(--swn0jsy)",
                        custom: "var(--swn0jsz)",
                        accentContrast: "var(--swn0jt0)",
                        accentForegroundAsLightBackground: "var(--swn0jt1)",
                        accentForegroundAsSubduedBackground: "var(--swn0jt2)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jt3)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jt4)",
                        accentHovered: "var(--swn0jt5)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jt6)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jt7)",
                        backgroundLight: "var(--swn0jt8)",
                        backgroundSubdued: "var(--swn0jt9)",
                        backgroundSubduedAlpha: "var(--swn0jta)",
                        borderEmphasized: "var(--swn0jtb)",
                        textContrast: "var(--swn0jtc)",
                        textSubdued: "var(--swn0jtd)",
                        textSubdued200: "var(--swn0jte)",
                        iconStrong: "var(--swn0jtf)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jtg)",
                    text: "var(--swn0jth)",
                    border: "var(--swn0jti)",
                    icon: "var(--swn0jtj)",
                    spinner: "var(--swn0jtk)",
                    accent: "var(--swn0jtl)",
                    custom: "var(--swn0jtm)",
                    accentContrast: "var(--swn0jtn)",
                    accentForegroundAsLightBackground: "var(--swn0jto)",
                    accentForegroundAsSubduedBackground: "var(--swn0jtp)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jtq)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jtr)",
                    accentHovered: "var(--swn0jts)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jtt)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jtu)",
                    backgroundLight: "var(--swn0jtv)",
                    backgroundSubdued: "var(--swn0jtw)",
                    backgroundSubduedAlpha: "var(--swn0jtx)",
                    borderEmphasized: "var(--swn0jty)",
                    textContrast: "var(--swn0jtz)",
                    textSubdued: "var(--swn0ju0)",
                    textSubdued200: "var(--swn0ju1)",
                    iconStrong: "var(--swn0ju2)",
                    hover: {
                        background: "var(--swn0ju3)",
                        text: "var(--swn0ju4)",
                        border: "var(--swn0ju5)",
                        icon: "var(--swn0ju6)",
                        spinner: "var(--swn0ju7)",
                        accent: "var(--swn0ju8)",
                        custom: "var(--swn0ju9)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0jua)",
                    text: "var(--swn0jub)",
                    border: "var(--swn0juc)",
                    icon: "var(--swn0jud)",
                    spinner: "var(--swn0jue)",
                    accent: "var(--swn0juf)",
                    custom: "var(--swn0jug)",
                    accentContrast: "var(--swn0juh)",
                    accentForegroundAsLightBackground: "var(--swn0jui)",
                    accentForegroundAsSubduedBackground: "var(--swn0juj)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0juk)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jul)",
                    accentHovered: "var(--swn0jum)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jun)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0juo)",
                    backgroundLight: "var(--swn0jup)",
                    backgroundSubdued: "var(--swn0juq)",
                    backgroundSubduedAlpha: "var(--swn0jur)",
                    borderEmphasized: "var(--swn0jus)",
                    textContrast: "var(--swn0jut)",
                    textSubdued: "var(--swn0juu)",
                    textSubdued200: "var(--swn0juv)",
                    iconStrong: "var(--swn0juw)",
                    hover: {
                        background: "var(--swn0jux)",
                        text: "var(--swn0juy)",
                        border: "var(--swn0juz)",
                        icon: "var(--swn0jv0)",
                        spinner: "var(--swn0jv1)",
                        accent: "var(--swn0jv2)",
                        custom: "var(--swn0jv3)"
                    }
                }
            },
            scheme8: {
                base: {
                    background: "var(--swn0jv4)",
                    text: "var(--swn0jv5)",
                    border: "var(--swn0jv6)",
                    icon: "var(--swn0jv7)",
                    spinner: "var(--swn0jv8)",
                    accent: "var(--swn0jv9)",
                    custom: "var(--swn0jva)",
                    accentContrast: "var(--swn0jvb)",
                    accentForegroundAsLightBackground: "var(--swn0jvc)",
                    accentForegroundAsSubduedBackground: "var(--swn0jvd)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jve)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jvf)",
                    accentHovered: "var(--swn0jvg)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jvh)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jvi)",
                    backgroundLight: "var(--swn0jvj)",
                    backgroundSubdued: "var(--swn0jvk)",
                    backgroundSubduedAlpha: "var(--swn0jvl)",
                    borderEmphasized: "var(--swn0jvm)",
                    textContrast: "var(--swn0jvn)",
                    textSubdued: "var(--swn0jvo)",
                    textSubdued200: "var(--swn0jvp)",
                    iconStrong: "var(--swn0jvq)",
                    critical: "var(--swn0jvr)",
                    info: "var(--swn0jvs)",
                    success: "var(--swn0jvt)",
                    warning: "var(--swn0jvu)",
                    backgroundSubdued200: "var(--swn0jvv)",
                    borderSubdued200: "var(--swn0jvw)"
                },
                control: {
                    background: "var(--swn0jvx)",
                    text: "var(--swn0jvy)",
                    border: "var(--swn0jvz)",
                    icon: "var(--swn0jw0)",
                    spinner: "var(--swn0jw1)",
                    accent: "var(--swn0jw2)",
                    custom: "var(--swn0jw3)",
                    accentContrast: "var(--swn0jw4)",
                    accentForegroundAsLightBackground: "var(--swn0jw5)",
                    accentForegroundAsSubduedBackground: "var(--swn0jw6)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jw7)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jw8)",
                    accentHovered: "var(--swn0jw9)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jwa)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jwb)",
                    backgroundLight: "var(--swn0jwc)",
                    backgroundSubdued: "var(--swn0jwd)",
                    backgroundSubduedAlpha: "var(--swn0jwe)",
                    borderEmphasized: "var(--swn0jwf)",
                    textContrast: "var(--swn0jwg)",
                    textSubdued: "var(--swn0jwh)",
                    textSubdued200: "var(--swn0jwi)",
                    iconStrong: "var(--swn0jwj)",
                    invalid: {
                        background: "var(--swn0jwk)",
                        text: "var(--swn0jwl)",
                        border: "var(--swn0jwm)",
                        icon: "var(--swn0jwn)",
                        spinner: "var(--swn0jwo)",
                        accent: "var(--swn0jwp)",
                        custom: "var(--swn0jwq)",
                        backgroundSubdued: "var(--swn0jwr)",
                        backgroundSubduedAlpha: "var(--swn0jws)",
                        textSubdued: "var(--swn0jwt)"
                    },
                    selected: {
                        background: "var(--swn0jwu)",
                        text: "var(--swn0jwv)",
                        border: "var(--swn0jww)",
                        icon: "var(--swn0jwx)",
                        spinner: "var(--swn0jwy)",
                        accent: "var(--swn0jwz)",
                        custom: "var(--swn0jx0)",
                        accentContrast: "var(--swn0jx1)",
                        accentForegroundAsLightBackground: "var(--swn0jx2)",
                        accentForegroundAsSubduedBackground: "var(--swn0jx3)",
                        accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jx4)",
                        accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jx5)",
                        accentHovered: "var(--swn0jx6)",
                        accentTextOnForegroundAsSubduedBackground: "var(--swn0jx7)",
                        accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jx8)",
                        backgroundLight: "var(--swn0jx9)",
                        backgroundSubdued: "var(--swn0jxa)",
                        backgroundSubduedAlpha: "var(--swn0jxb)",
                        borderEmphasized: "var(--swn0jxc)",
                        textContrast: "var(--swn0jxd)",
                        textSubdued: "var(--swn0jxe)",
                        textSubdued200: "var(--swn0jxf)",
                        iconStrong: "var(--swn0jxg)"
                    }
                },
                primaryButton: {
                    background: "var(--swn0jxh)",
                    text: "var(--swn0jxi)",
                    border: "var(--swn0jxj)",
                    icon: "var(--swn0jxk)",
                    spinner: "var(--swn0jxl)",
                    accent: "var(--swn0jxm)",
                    custom: "var(--swn0jxn)",
                    accentContrast: "var(--swn0jxo)",
                    accentForegroundAsLightBackground: "var(--swn0jxp)",
                    accentForegroundAsSubduedBackground: "var(--swn0jxq)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jxr)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jxs)",
                    accentHovered: "var(--swn0jxt)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jxu)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jxv)",
                    backgroundLight: "var(--swn0jxw)",
                    backgroundSubdued: "var(--swn0jxx)",
                    backgroundSubduedAlpha: "var(--swn0jxy)",
                    borderEmphasized: "var(--swn0jxz)",
                    textContrast: "var(--swn0jy0)",
                    textSubdued: "var(--swn0jy1)",
                    textSubdued200: "var(--swn0jy2)",
                    iconStrong: "var(--swn0jy3)",
                    hover: {
                        background: "var(--swn0jy4)",
                        text: "var(--swn0jy5)",
                        border: "var(--swn0jy6)",
                        icon: "var(--swn0jy7)",
                        spinner: "var(--swn0jy8)",
                        accent: "var(--swn0jy9)",
                        custom: "var(--swn0jya)"
                    }
                },
                secondaryButton: {
                    background: "var(--swn0jyb)",
                    text: "var(--swn0jyc)",
                    border: "var(--swn0jyd)",
                    icon: "var(--swn0jye)",
                    spinner: "var(--swn0jyf)",
                    accent: "var(--swn0jyg)",
                    custom: "var(--swn0jyh)",
                    accentContrast: "var(--swn0jyi)",
                    accentForegroundAsLightBackground: "var(--swn0jyj)",
                    accentForegroundAsSubduedBackground: "var(--swn0jyk)",
                    accentForegroundAsSubduedBackgroundSubdued: "var(--swn0jyl)",
                    accentForegroundAsSubduedBackgroundAlpha: "var(--swn0jym)",
                    accentHovered: "var(--swn0jyn)",
                    accentTextOnForegroundAsSubduedBackground: "var(--swn0jyo)",
                    accentTextSubduedOnForegroundAsSubduedBackground: "var(--swn0jyp)",
                    backgroundLight: "var(--swn0jyq)",
                    backgroundSubdued: "var(--swn0jyr)",
                    backgroundSubduedAlpha: "var(--swn0jys)",
                    borderEmphasized: "var(--swn0jyt)",
                    textContrast: "var(--swn0jyu)",
                    textSubdued: "var(--swn0jyv)",
                    textSubdued200: "var(--swn0jyw)",
                    iconStrong: "var(--swn0jyx)",
                    hover: {
                        background: "var(--swn0jyy)",
                        text: "var(--swn0jyz)",
                        border: "var(--swn0jz0)",
                        icon: "var(--swn0jz1)",
                        spinner: "var(--swn0jz2)",
                        accent: "var(--swn0jz3)",
                        custom: "var(--swn0jz4)"
                    }
                }
            }
        }
    },
    global: {
        letterSpacing: "var(--x-global-typography-kerning)",
        transformDirectionModifier: "var(--x-global-transform-direction-modifier)",
        borderRadius: "var(--x-global-border-radius)",
        textTransform: "var(--x-global-typography-letter-case)"
    }
};
const mo = {
        extraSmall: w.fontSize.extraSmall,
        small: w.fontSize.small,
        base: w.fontSize.base,
        medium: w.fontSize.medium,
        large: w.fontSize.large,
        extraLarge: w.fontSize.extraLarge,
        extraExtraLarge: w.fontSize.extraExtraLarge
    },
    _o = {
        none: "none",
        title: "capitalize",
        upper: "uppercase",
        lower: "lowercase"
    },
    $_ = {
        primary: w.typography.primary.fontFamily,
        secondary: w.typography.secondary.fontFamily
    },
    fo = {
        base: w.letterSpacing.base,
        loose: w.letterSpacing.loose,
        xloose: w.letterSpacing.xLoose
    },
    go = {
        base: w.typography.primary.fontWeight.base,
        bold: w.typography.primary.fontWeight.bold
    },
    Q_ = {
        base: w.typography.secondary.fontWeight.base,
        bold: w.typography.secondary.fontWeight.bold
    },
    Ne = {
        none: "0px",
        base: w.borderRadius.base,
        small: w.borderRadius.small,
        large: w.borderRadius.large,
        rounded: w.borderRadius.fullyRounded,
        tight: w.borderRadius.small,
        loose: w.borderRadius.large,
        fullyRounded: w.borderRadius.fullyRounded
    },
    J_ = {
        full: w.borderWidth.base,
        none: "0px"
    },
    Z_ = {
        none: "0px",
        ...w.borderWidth
    },
    ef = {
        base: "solid",
        dashed: "dashed",
        dotted: "dotted"
    },
    J = {
        none: "0px",
        small500: w.spacing.small500,
        small400: w.spacing.small400,
        small300: w.spacing.small300,
        small200: w.spacing.small200,
        small100: w.spacing.small100,
        base: w.spacing.base,
        large100: w.spacing.large100,
        large200: w.spacing.large200,
        large300: w.spacing.large300,
        large400: w.spacing.large400,
        large500: w.spacing.large500
    },
    tf = {
        base: w.lineHeight.base,
        small: w.lineHeight.small
    };

function nf(e) {
    const {
        global: t,
        schemes: n
    } = Ve(e);
    return {
        global: af(t),
        schemes: Qt.reduce((a, r) => ({ ...a,
            [r]: of (r === "scheme6" ? sf(n, t) : n ? .[r], t)
        }), {})
    }
}

function af(e = {}) {
    return {
        accent: e ? .accent ? .toRgb(),
        accentContrast: Zt(e) ? .toRgb(),
        accentHovered: ga(e) ? .toRgb(),
        accentForegroundAsLightBackground: Ea(e) ? .toRgb(),
        accentForegroundAsSubduedBackground: pa(e) ? .toRgb(),
        accentForegroundAsSubduedBackgroundSubdued: Sa(e) ? .toRgb(),
        accentTextSubduedOnForegroundAsSubduedBackground: Aa(e) ? .toRgb(),
        custom: e ? .custom ? .toRgb(),
        ...e ? .brand && {
            brand: e.brand.toRgb(),
            brandBorder: t_({
                background: e.brand
            }) ? .toRgb(),
            brandSubdued: va({
                background: e.brand
            }) ? .toRgb(),
            brandText: ct({
                background: e.brand
            }) ? .toRgb(),
            brandTextSubdued: ct({
                background: e.brand
            }) ? .toRgb()
        },
        ...e ? .critical && {
            critical: e.critical.toRgb(),
            criticalBackground: F(e.critical, 97) ? .toRgb(),
            criticalBackgroundSubdued: F(e.critical, 95) ? .toRgb(),
            criticalBorder: F(e.critical, 90) ? .toRgb(),
            criticalContrast: he({
                background: e.critical
            }) ? .toRgb(),
            criticalContrastSubdued: xe({
                background: e.critical
            }) ? .toRgba(),
            criticalIcon: F(e.critical, 47) ? .toRgb(),
            criticalSubdued: Jt({
                background: e.critical
            }) ? .toRgb(),
            criticalText: F(e.critical, 10) ? .toRgb(),
            criticalTextSubdued: F(e.critical, 20) ? .toRgb(),
            criticalTextSubdued200: F(e.critical, 10) ? .adjust({
                a: () => .1
            }) ? .toRgba()
        },
        ...e ? .info && {
            info: e ? .info ? .toRgb(),
            infoBackground: F(e.info, 97) ? .toRgb(),
            infoBackgroundSubdued: F(e.info, 95) ? .toRgb(),
            infoBorder: F(e.info, 90) ? .toRgb(),
            infoIcon: F(e.info, 47) ? .toRgb(),
            infoText: F(e.info, 10) ? .toRgb(),
            infoTextSubdued: F(e.info, 20) ? .toRgb(),
            infoTextSubdued200: F(e.info, 10) ? .adjust({
                a: () => .1
            }) ? .toRgba()
        },
        ...e ? .success && {
            success: e ? .success ? .toRgb(),
            successBackground: F(e.success, 97) ? .toRgb(),
            successBackgroundSubdued: F(e.success, 95) ? .toRgb(),
            successBorder: F(e.success, 90) ? .toRgb(),
            successIcon: F(e.success, 47) ? .toRgb(),
            successText: F(e.success, 10) ? .toRgb(),
            successTextSubdued: F(e.success, 20) ? .toRgb(),
            successTextSubdued200: F(e.success, 10) ? .adjust({
                a: () => .1
            }) ? .toRgba()
        },
        ...e ? .warning && {
            warning: e ? .warning ? .toRgb(),
            warningBackground: F(e.warning, 97) ? .toRgb(),
            warningBackgroundSubdued: F(e.warning, 95) ? .toRgb(),
            warningBorder: F(e.warning, 90) ? .toRgb(),
            warningIcon: F(e.warning, 47) ? .toRgb(),
            warningText: F(e.warning, 10) ? .toRgb(),
            warningTextSubdued: F(e.warning, 20) ? .toRgb(),
            warningTextSubdued200: F(e.warning, 10) ? .adjust({
                a: () => .1
            }) ? .toRgba()
        },
        ...e ? .control && rf(e.control)
    }
}

function rf(e) {
    if (K(e)) {
        const t = ae(Z.global.base.background);
        return {
            controlBackground: e.toRgbOrRgba(),
            controlBackgroundSubdued: e.toRgbOrRgba(),
            controlBorder: Re({
                background: t
            }) ? .toRgbOrRgba(),
            controlBorderEmphasized: Ft({
                background: t,
                border: Re({
                    background: t
                })
            }) ? .toRgb(),
            controlText: he({
                background: t
            }) ? .toRgbOrRgba(),
            controlTextContrast: Ut({
                background: t
            }) ? .toRgb(),
            controlTextSubdued: xe({
                background: t
            }) ? .toRgbOrRgba(),
            controlTextSubdued200: Bt({
                background: t
            }) ? .toRgba()
        }
    }
    return {
        controlBackground: e.toRgbOrRgba(),
        controlBackgroundSubdued: Jt({
            background: e
        }) ? .toRgbOrRgba(),
        controlBackgroundSubduedAlpha: we({
            background: e
        }) ? .toRgba(),
        controlBorder: Re({
            background: e
        }) ? .toRgbOrRgba(),
        controlBorderEmphasized: Ft({
            background: e,
            border: Re({
                background: e
            })
        }) ? .toRgb(),
        controlText: he({
            background: e
        }) ? .toRgbOrRgba(),
        controlTextContrast: Ut({
            background: e
        }) ? .toRgb(),
        controlTextSubdued: xe({
            background: e
        }) ? .toRgbOrRgba(),
        controlTextSubdued200: Bt({
            background: e
        }) ? .toRgba()
    }
}

function sf(e, t) {
    if (t ? .accent === void 0) return;
    const n = e ? .scheme6,
        a = t ? .accent,
        r = he({
            background: a
        }),
        s = Zt({
            accent: a
        });
    return { ...n,
        base: {
            background: a,
            text: r,
            accent: s,
            ...He(n ? .base)
        },
        primaryButton: {
            background: r,
            ...He(n ? .primaryButton),
            hover: {
                text: a,
                ...He(n ? .primaryButton ? .hover)
            }
        },
        secondaryButton: {
            text: r,
            ...He(n ? .secondaryButton),
            hover: {
                text: e_({
                    background: a
                }),
                ...He(n ? .secondaryButton ? .hover)
            }
        },
        control: {
            accent: s,
            ...He(n ? .control)
        }
    }
}

function He(e) {
    return e && Object.fromEntries(Object.entries(e).filter(([t, n]) => n !== void 0))
}

function of ({
    base: e,
    control: t,
    primaryButton: n,
    secondaryButton: a
} = {}, r = {}) {
    return {
        base: df({
            base: e,
            global: r
        }),
        control: { ...Tn({
                control: t,
                global: r,
                base: e
            }),
            invalid: Tn({
                control: t,
                global: r,
                base: e,
                layer: "invalid"
            }),
            selected: Tn({
                control: t,
                global: r,
                base: e,
                layer: "selected"
            })
        },
        primaryButton: { ...yt({
                button: n
            }),
            hover: yt({
                button: n ? .hover
            })
        },
        secondaryButton: { ...yt({
                button: a
            }),
            hover: yt({
                button: a ? .hover
            })
        }
    }
}

function ya({
    accent: e,
    background: t,
    backgroundSubdued: n,
    border: a,
    custom: r,
    icon: s,
    text: o,
    textSubdued: i
} = {}) {
    return {
        accent: e ? .toRgbOrRgba(),
        background: t ? .toRgbOrRgba(),
        backgroundSubdued: n ? .toRgbOrRgba(),
        border: Re({
            background: t,
            border: a
        }) ? .toRgbOrRgba(),
        custom: r ? .toRgbOrRgba(),
        icon: s ? .toRgbOrRgba(),
        text: he({
            background: t,
            text: o
        }) ? .toRgbOrRgba(),
        textSubdued: i ? .toRgbOrRgba()
    }
}

function df({
    base: e = {},
    global: t = {}
} = {}) {
    const n = ya(e),
        {
            accent: a,
            background: r,
            backgroundSubdued: s,
            border: o,
            text: i,
            textSubdued: d,
            critical: l,
            info: u,
            success: m,
            warning: c
        } = e;
    return { ...n,
        background: K(r) ? void 0 : n.background,
        backgroundLight: to({
            background: r
        }) ? .toRgb(),
        backgroundSpecified: n.background,
        backgroundSubdued: Jt({
            background: r,
            backgroundSubdued: s
        }) ? .toRgbOrRgba(),
        backgroundSubduedAlpha: (s ? ? we({
            background: r
        })) ? .toRgbOrRgba(),
        backgroundSubdued200: no({
            background: r
        }) ? .toRgbOrRgba(),
        borderEmphasized: r || o ? Ft({
            background: r,
            border: o
        }).toRgb() : void 0,
        borderSubdued200: n_({
            background: r
        }) ? .toRgbOrRgba(),
        textContrast: Ut({
            background: r,
            text: i
        }) ? .toRgb(),
        textSubdued: xe({
            background: r,
            text: i,
            textSubdued: d
        }) ? .toRgbOrRgba(),
        textSubdued200: Bt({
            background: r,
            text: i
        }) ? .toRgba(),
        accentContrast: Zt({
            accent: a
        }) ? .toRgb(),
        accentHovered: ga({
            accent: a
        }) ? .toRgb(),
        accentForegroundAsLightBackground: Ea({
            accent: a
        }) ? .toRgb(),
        accentForegroundAsSubduedBackground: pa({
            accent: a
        }) ? .toRgb(),
        accentForegroundAsSubduedBackgroundSubdued: Sa({
            accent: a
        }) ? .toRgb(),
        accentTextOnForegroundAsSubduedBackground: a && "rgb(0, 0, 0)" || void 0,
        accentTextSubduedOnForegroundAsSubduedBackground: Aa({
            accent: a
        }) ? .toRgb(),
        accentForegroundAsSubduedBackgroundAlpha: ((r || a || t.accent) && ao({
            accent: a ? ? t.accent ? ? ae(Z.global.accent),
            background: r ? ? ae(Z.global.base.background)
        })) ? .toRgba(),
        critical: Tt({
            baseSurfaceColor: l,
            background: r,
            globalColor: t.critical,
            defaultColor: Z.global.critical
        }),
        info: Tt({
            baseSurfaceColor: u,
            background: r,
            globalColor: t.info,
            defaultColor: Z.global.info
        }),
        success: Tt({
            baseSurfaceColor: m,
            background: r,
            globalColor: t.success,
            defaultColor: Z.global.success
        }),
        warning: Tt({
            baseSurfaceColor: c,
            background: r,
            globalColor: t.warning,
            defaultColor: Z.global.warning
        })
    }
}

function Tt({
    baseSurfaceColor: e,
    background: t,
    globalColor: n,
    defaultColor: a
}) {
    return e ? e.toRgb() : ((t || n) && fa(t ? ? ae(Z.global.base.background), n ? ? ae(a))) ? .toRgb()
}

function yt({
    button: e = {}
} = {}) {
    const t = ya(e),
        {
            background: n,
            text: a
        } = e;
    return K(n) ? { ...t,
        backgroundSubdued: t.backgroundSubdued ? ? t.background,
        backgroundSubduedAlpha: t.backgroundSubdued ? ? we({
            background: n
        }) ? .toRgba(),
        text: he({
            text: a
        }) ? .toRgbOrRgba() ? ? w.color.global.brand,
        textSubdued: t.textSubdued ? ? w.color.global.brandSubdued
    } : { ...t,
        backgroundSubdued: t.backgroundSubdued ? ? va({
            background: n
        }) ? .toRgb(),
        backgroundSubduedAlpha: t.backgroundSubdued ? ? we({
            background: n
        }) ? .toRgba(),
        textSubdued: t.textSubdued ? ? ct({
            background: n,
            text: a
        }) ? .toRgb()
    }
}

function Tn({
    control: e = {},
    global: t = {},
    base: n = {},
    layer: a
} = {}) {
    const r = a ? e[a] ? ? {} : e,
        s = ya(r),
        {
            accent: o,
            background: i,
            backgroundSubdued: d,
            border: l,
            icon: u,
            text: m,
            textSubdued: c
        } = r;
    if (K(i ? ? e.background ? ? t ? .control)) {
        const _ = a && !K(e.background ? ? t ? .control) ? e.background ? ? t ? .control : n.background;
        return { ...s,
            backgroundSubdued: s.backgroundSubdued ? ? s.background,
            backgroundSubduedAlpha: s.backgroundSubdued ? ? we({
                background: i
            }) ? .toRgbOrRgba(),
            border: a === "selected" ? s.border : a === "invalid" ? s.border ? ? fa(_ ? ? ae(Z.global.base.background), t.critical ? ? ae(Z.global.critical), "border") ? .toRgbOrRgba() : Re({
                background: n.background,
                border: l ? ? n.border
            }) ? .toRgbOrRgba(),
            icon: (u ? ? n.icon) ? .toRgbOrRgba(),
            text: he({
                background: _,
                text: m ? ? e.text ? ? n.text
            }) ? .toRgbOrRgba(),
            textSubdued: xe({
                background: _,
                text: m ? ? e.text ? ? n.text,
                textSubdued: c ? ? e.textSubdued ? ? n.textSubdued
            }) ? .toRgbOrRgba(),
            accentForegroundAsSubduedBackground: "transparent",
            accentForegroundAsSubduedBackgroundSubdued: "transparent",
            accentForegroundAsLightBackground: "transparent",
            accentForegroundAsSubduedBackgroundAlpha: "transparent"
        }
    }
    return a === "invalid" ? { ...s,
        backgroundSubdued: s.backgroundSubdued ? ? va({
            background: i
        }) ? .toRgb(),
        backgroundSubduedAlpha: s.backgroundSubdued ? ? we({
            background: i
        }) ? .toRgbOrRgba(),
        textSubdued: s.textSubdued ? ? ct({
            background: i,
            text: m
        }) ? .toRgb()
    } : { ...s,
        backgroundLight: to({
            background: i
        }) ? .toRgb(),
        backgroundSubdued: Jt({
            background: i,
            backgroundSubdued: d
        }) ? .toRgbOrRgba(),
        backgroundSubduedAlpha: (d ? ? we({
            background: i
        })) ? .toRgbOrRgba(),
        borderEmphasized: i || l ? Ft({
            background: i,
            border: l
        }).toRgb() : void 0,
        textContrast: Ut({
            background: i,
            text: m
        }) ? .toRgb(),
        textSubdued: xe({
            background: i,
            text: m,
            textSubdued: c
        }) ? .toRgbOrRgba(),
        textSubdued200: Bt({
            background: i,
            text: m
        }) ? .toRgba(),
        accentContrast: Zt({
            accent: o
        }) ? .toRgb(),
        accentHovered: ga({
            accent: o
        }) ? .toRgb(),
        accentForegroundAsLightBackground: Ea({
            accent: o
        }) ? .toRgb(),
        accentForegroundAsSubduedBackground: pa({
            accent: o
        }) ? .toRgb(),
        accentForegroundAsSubduedBackgroundSubdued: Sa({
            accent: o
        }) ? .toRgb(),
        accentTextOnForegroundAsSubduedBackground: o && "rgb(0, 0, 0)" || void 0,
        accentTextSubduedOnForegroundAsSubduedBackground: Aa({
            accent: o
        }) ? .toRgb(),
        accentForegroundAsSubduedBackgroundAlpha: ((i || o || t.accent) && ao({
            accent: o ? ? t.accent ? ? ae(Z.global.accent),
            background: i ? ? ae(Z.global.base.background)
        })) ? .toRgba()
    }
}

function te(e, t, n) {
    if (e != null) return Le(e);
    if (n) return ce(t, n, W_)
}

function Pe(e, t, n, a) {
    if (e != null) return Le(e);
    if (n) return ce(t, n, a)
}

function fe(e) {
    return {
        fontFamily: x($_)(e ? .fonts),
        fontSize: x(mo)(e ? .size),
        fontWeight: e ? .weight && (e.fonts === "primary" ? go[e.weight] : Q_[e.weight]),
        letterSpacing: x(fo)(e ? .kerning),
        textTransform: x(_o)(e ? .letterCase)
    }
}

function Tr({
    checkbox: e,
    control: t,
    cornerRadius: n,
    colors: a,
    divider: r,
    typographySize: s,
    global: o,
    headingLevel1: i,
    headingLevel2: d,
    headingLevel3: l,
    headingLevel4: u,
    typographyLineHeight: m,
    merchandiseThumbnail: c,
    modal: _,
    moneyLines: f,
    moneySummary: b,
    choiceList: E,
    optionList: I,
    primaryButton: h,
    secondaryButton: v,
    select: B,
    spacing: S,
    textField: T,
    typographyPrimary: g,
    typographyScale: {
        base: p,
        ratio: y = Se
    } = {},
    typographySecondary: M,
    rollup: R
}) {
    return {
        borderRadius: {
            base: n ? .base ? Le(n.base) : void 0,
            small: n ? .small ? Le(n.small) : void 0,
            large: n ? .large ? Le(n.large) : void 0
        },
        button: {
            primary: {
                blockPadding: x(J)(h ? .blockPadding),
                inlinePadding: x(J)(h ? .inlinePadding),
                borderRadius: x(Ne)(h ? .cornerRadius),
                ...fe(h ? .typography)
            },
            secondary: {
                blockPadding: x(J)(v ? .blockPadding),
                inlinePadding: x(J)(v ? .inlinePadding),
                borderRadius: x(Ne)(v ? .cornerRadius),
                ...fe(v ? .typography)
            }
        },
        checkbox: {
            borderRadius: x(Ne)(e ? .cornerRadius)
        },
        color: nf(a ? ? {}),
        control: {
            borderRadius: x(Ne)(t ? .cornerRadius),
            borderWidth: x(J_)(t ? .border)
        },
        divider: {
            borderStyle: x(ef)(r ? .borderStyle),
            borderWidth: x(Z_)(r ? .borderWidth)
        },
        global: {
            borderRadius: x(Ne)(o ? .cornerRadius),
            letterSpacing: x(fo)(o ? .typographyKerning),
            textTransform: x(_o)(o ? .typographyLetterCase)
        },
        heading: {
            level1: fe(i ? .typography),
            level2: fe(d ? .typography),
            level3: fe(l ? .typography),
            level4: fe(u ? .typography)
        },
        moneyLines: {
            inlinePadding: x(J)(f ? .inlinePadding),
            spacing: x(J)(f ? .spacing)
        },
        moneySummary: {
            blockPadding: x(J)(b ? .blockPadding),
            inlinePadding: x(J)(b ? .inlinePadding)
        },
        modal: {
            blockPaddingStart: x(J)(_ ? .blockPaddingStart),
            blockPaddingEnd: x(J)(_ ? .blockPaddingEnd),
            borderRadius: x(Ne)(_ ? .cornerRadius),
            margin: x(J)(_ ? .margin)
        },
        choiceList: {
            group: {
                spacing: x(J)(E ? .group ? .spacing)
            }
        },
        optionList: {
            blockPadding: x(J)(I ? .blockPadding),
            inlinePadding: x(J)(I ? .inlinePadding)
        },
        productThumbnail: {
            borderRadius: x(Ne)(c ? .cornerRadius)
        },
        select: { ...fe(B ? .typography)
        },
        spacing: {
            small500: te(S ? .small500, -9, p),
            small400: te(S ? .small400, -6, p),
            small300: te(S ? .small300, -4, p),
            small200: te(S ? .small200, -3, p),
            small100: te(S ? .small100, -1.5, p),
            base: te(S ? .base, 0, p),
            large100: te(S ? .large100, .6, p),
            large200: te(S ? .large200, 1.8, p),
            large300: te(S ? .large300, 2.6, p),
            large400: te(S ? .large400, 4, p),
            large500: te(S ? .large500, 5.2, p),
            large600: te(S ? .large600, 6.1, p)
        },
        textField: { ...fe(T ? .typography)
        },
        rollup: {
            primaryContent: yn(R ? .primaryContent ? .typography),
            secondaryContent: yn(R ? .secondaryContent ? .typography),
            tertiaryContent: yn(R ? .tertiaryContent ? .typography)
        },
        typography: {
            primary: {
                fontFamily: br(g ? .fonts),
                fontWeight: {
                    base: g ? .weightBase ? ? void 0,
                    bold: g ? .weightBold ? ? void 0
                }
            },
            secondary: {
                fontFamily: br(M ? .fonts),
                fontWeight: {
                    base: M ? .weightBase ? ? void 0,
                    bold: M ? .weightBold ? ? void 0
                }
            }
        },
        lineHeight: {
            base: m ? .base ? .toString(),
            small: m ? .small ? .toString()
        },
        fontSize: {
            extraSmall: Pe(s ? .extraSmall, -2, p, y),
            small: Pe(s ? .small, -.75, p, y),
            base: Pe(s ? .base, 0, p, y),
            medium: Pe(s ? .medium, .7, p, y),
            large: Pe(s ? .large, 1.43, p, y),
            extraLarge: Pe(s ? .extraLarge, 2.12, p, y),
            extraExtraLarge: Pe(s ? .extraExtraLarge, 2.74, p, y)
        }
    }
}

function yn(e) {
    return {
        fontSize: x(mo)(e ? .size),
        fontWeight: x(go)(e ? .weight),
        lineHeight: x(tf)(e ? .lineHeight)
    }
}

function x(e) {
    return t => t ? e[t] : void 0
}
const Py = $e(void 0);

function Oy({
    global: e = {},
    cornerRadius: t = {},
    spacing: n = {},
    typographyScale: a = {},
    typographySize: r = {},
    typographyLineHeight: s = {},
    typographyPrimary: o = {},
    typographySecondary: i = {},
    headingLevel1: d = {},
    headingLevel2: l = {},
    headingLevel3: u = {},
    headingLevel4: m = {},
    divider: c = {},
    link: _ = {},
    control: f = {},
    textField: b = {},
    select: E = {},
    checkbox: I = {},
    choiceList: h = {},
    optionList: v = {},
    rollup: B = {},
    modal: S = {},
    lineItems: T = {},
    moneyLines: g = {},
    moneySummary: p = {},
    primaryButton: y = {},
    secondaryButton: M = {},
    formLayout: R = {},
    popover: U = {},
    merchandiseThumbnail: H = {},
    vaulted: k = {},
    icons: A = {},
    colors: j,
    rules: O = []
} = {}) {
    return new lf({
        global: e,
        cornerRadius: t,
        spacing: n,
        typographyScale: a,
        typographySize: r,
        typographyLineHeight: s,
        typographyPrimary: o,
        typographySecondary: i,
        headingLevel1: d,
        headingLevel2: l,
        headingLevel3: u,
        headingLevel4: m,
        divider: c,
        link: _,
        control: f,
        textField: b,
        select: E,
        checkbox: I,
        choiceList: h,
        optionList: v,
        rollup: B,
        modal: S,
        lineItems: T,
        moneyLines: g,
        moneySummary: p,
        primaryButton: y,
        secondaryButton: M,
        formLayout: R,
        popover: U,
        merchandiseThumbnail: H,
        vaulted: k,
        icons: A,
        colors: j,
        rules: O
    })
}
class lf {#
    e = N({});#
    t;#
    n = Q(() => Tr(this.#e.value));#
    a = Q(() => {
        const n = this.#e.value.rules ? .find(i => i.condition ? .prefersColorScheme === "dark");
        if (!n) return;
        const {
            condition: a,
            ...r
        } = n, s = r.colors ? Ve(r.colors) : {}, o = { ...r,
            colors: s
        };
        return Tr(o)
    });
    constructor(t) {
        const n = { ...t,
            colors: Ve(t.colors ? ? {}),
            icons: { ...t.icons
            },
            rules: t.rules ? .map(({
                colors: a,
                ...r
            }) => ({ ...r,
                ...a && {
                    colors: Ve(a)
                }
            }))
        };
        this.#e.value = n, this.#t = { ...n
        }, this.customProperties = this.#n, this.darkModeCustomProperties = this.#a
    }
    get configuration() {
        return ss(() => this.#e.value)
    }
    get configurationSignal() {
        return this.#e
    }
    get initialConfiguration() {
        return this.#t
    }
    preview(t) {
        const n = {
                global: {
                    success: t ? .global ? .success,
                    warning: t ? .global ? .warning,
                    critical: t ? .global ? .critical,
                    info: t ? .global ? .info,
                    brand: t ? .global ? .brand,
                    accent: t ? .global ? .accent,
                    custom: t ? .global ? .custom,
                    control: t ? .global ? .control
                },
                schemes: Qt.reduce((r, s) => ({ ...r,
                    [s]: l_(s, t ? .schemes)
                }), {})
            },
            a = { ...this.configuration
            };
        a.colors = { ...this.configuration.colors
        };
        for (const r of Object.keys(a.colors)) {
            a.colors[r] = { ...a.colors[r]
            };
            const s = a.colors[r],
                o = s && r === "schemes";
            s && r === "global" && (a.colors.global = o_(a.colors.global, n.global)), o && (a.colors.schemes = i_(a.colors.schemes, n.schemes))
        }
        this.#e.value = a
    }
    set(t, n) {
        this.#e.value = { ...this.configuration,
            [t]: n
        }
    }
    reset() {
        this.#e.value = { ...this.#t
        }
    }
    replace(t, n = !0) {
        n ? this.#e.value = { ...t,
            colors: Ve(t.colors ? ? {}),
            icons: { ...t.icons
            },
            rules: t.rules ? .map(({
                colors: a,
                ...r
            }) => ({ ...r,
                ...a && {
                    colors: Ve(a)
                }
            }))
        } : this.#e.value = t
    }
}

function Ry(e) {
    return e.config.redirectSource === Ds.ShopPaySdk
}
const uf = 1.5;

function My(e) {
    return Math.min(uf, e ? ? 1)
}

function wy(e) {
    return !!e.version
}

function Ly(e) {
    return e.surface === "shop_app"
}

function Dy(e, t = !1) {
    return e.darkMode ? ? t
}

function ky(e) {
    return !!new URLSearchParams(e ? ? location.search).has("shop_on_web")
}

function xy({
    name: e,
    base: t,
    bold: n
}) {
    const {
        weight: a,
        sources: r
    } = t || {}, {
        weight: s,
        sources: o
    } = n || {};
    return {
        fonts: e ? ? void 0,
        weightBase: a ? ? void 0,
        sourceBase: r ? ? void 0,
        weightBold: s ? ? void 0,
        sourceBold: o ? ? void 0
    }
}

function jy() {
    return !!(typeof window < "u" && window.Shopify ? .designMode)
}

function Gn(e, t) {
    const n = xn(e),
        a = xn(t);
    if (n !== a) return !1;
    if (n && a) return Gn(e.value, t.value);
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return e === t;
    const r = Object.keys(e),
        s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (const o of r) {
        if (!s.includes(o)) return !1;
        const i = e[o],
            d = t[o];
        if (!Gn(i, d)) return !1
    }
    return !0
}
var cf = (e => (e.AddressApiError = "AddressApiError", e.AddressAutocompleteMissingSuggestionError = "AddressAutocompleteMissingSuggestionError", e.AddressAutocompleteSignalAbortedError = "AddressAutocompleteSignalAbortedError", e.AddressAutocompleteUnexpectedFieldError = "AddressAutocompleteUnexpectedFieldError", e.ApplyChangeRejectedError = "ApplyChangeRejectedError", e.ApplyChangeUnknownError = "ApplyChangeUnknownError", e.DeliveryGroupsApiError = "DeliveryGroupsApiError", e.DiscountsApiError = "DiscountsApiError", e.DynamicExtensionsPlacementError = "DynamicExtensionsPlacementError", e.ExtensionAssetFetchError = "ExtensionAssetFetchError", e.ExtensionSandboxAssetFetchError = "ExtensionSandboxAssetFetchError", e.ExtensionSandboxPolyfillFetchError = "ExtensionSandboxPolyfillFetchError", e.ExtensionSandboxTruncatedPolyfillError = "ExtensionSandboxTruncatedPolyfillError", e.ExtensionSandboxUncaughtError = "ExtensionSandboxUncaughtError", e.ExtensionDestroyedError = "ExtensionDestroyedError", e.ExtensionRestartedError = "ExtensionRestartedError", e.ExtensionInteractionError = "ExtensionInteractionError", e.ExtensionInterceptorError = "ExtensionInterceptorError", e.ExtensionMissingPlacementReferenceError = "ExtensionMissingPlacementReferenceError", e.ExtensionPostMessageMemoryError = "ExtensionPostMessageMemoryError", e.ExtensionPreloadParsingError = "ExtensionPreloadParsingError", e.ExtensionMissingRequiredAccessError = "ExtensionMissingRequiredAccessError", e.ExtensionNegotiatorError = "ExtensionNegotiatorError", e.ExtensionUnknownNegotiatorError = "ExtensionUnknownNegotiatorError", e.ExtensionStaleNegotiatorError = "ExtensionStaleNegotiatorError", e.ExtensionNegotiatorMaxQueueSizeError = "ExtensionNegotiatorMaxQueueSizeError", e.TooManyChangesError = "TooManyChangesError", e.ExtensionNegotiatorUsageError = "ExtensionNegotiatorUsageError", e.ExtensionRenderError = "ExtensionRenderError", e.ExtensionRunError = "ExtensionRunError", e.ExtensionsMetafieldsError = "ExtensionsMetafieldsError", e.ExtensionCustomerPrivacyApiBrowserError = "ExtensionCustomerPrivacyApiBrowserError", e.ExtensionCustomerPrivacyApiError = "ExtensionCustomerPrivacyApiError", e.ExtensionCustomerPrivacyLikelyBotError = "ExtensionCustomerPrivacyLikelyBotError", e.ExtensionCustomerPrivacyServerError = "ExtensionCustomerPrivacyServerError", e.ExtensionTimeoutError = "ExtensionTimeoutError", e.ExtensionUsageError = "ExtensionUsageError", e.GiftCardsApiError = "GiftCardsApiError", e.HostedIframeHandshakeTimeoutError = "HostedIframeHandshakeTimeoutError", e.InvalidInterceptionRequestError = "InvalidInterceptionRequestError", e.InvalidPlacementError = "InvalidPlacementError", e.MissingSandboxError = "MissingSandboxError", e.MissingSandboxCacheError = "MissingSandboxCacheError", e.NoMerchandiseItemFoundError = "NoMerchandiseItemFoundError", e.OrderConfirmationError = "OrderConfirmationError", e.PaymentMethodRenderError = "PaymentMethodRenderError", e.SessionTokenApiError = "SessionTokenApiError", e.SessionTokenNotFoundError = "SessionTokenNotFoundError", e.SessionTokenAbortError = "SessionTokenAbortError", e.StorefrontMissingToken = "StorefrontMissingToken", e.StorefrontQueryError = "StorefrontQueryError", e.StorefrontResponseParseError = "StorefrontResponseParseError", e.UnhandledMetafieldOwnerTypeError = "UnhandledMetafieldOwnerTypeError", e.LocalExtensionRestartedError = "LocalExtensionRestartedError", e.LocalExtensionDestroyedBeforeMountedError = "LocalExtensionDestroyedBeforeMountedError", e.ExtensionUnsupportedFeatureError = "ExtensionUnsupportedFeatureError", e.ExtensionDestroyedBeforeFinishedMountingError = "ExtensionDestroyedBeforeFinishedMountingError", e.NoComponentFoundForRemoteElementError = "NoComponentFoundForRemoteElementError", e.RemoteMethodNotImplementedError = "RemoteMethodNotImplementedError", e))(cf || {});
class nn extends le {}
class In extends nn {
    constructor() {
        super(...arguments), this.name = "DynamicExtensionsPlacementError"
    }
}
class By extends nn {
    constructor() {
        super(...arguments), this.name = "InvalidPlacementError"
    }
}
class Uy extends nn {
    constructor() {
        super(...arguments), this.name = "ExtensionMissingPlacementReferenceError"
    }
}
class Fy extends nn {
    constructor() {
        super(...arguments), this.name = "ExtensionPreloadParsingError"
    }
}
class re extends le {}
class Yy extends le {
    constructor() {
        super(...arguments), this.name = "ExtensionUsageError"
    }
}
class Hy extends le {
    constructor() {
        super(...arguments), this.name = "ExtensionUnsupportedFeatureError"
    }
}
class Vy extends re {
    constructor() {
        super(...arguments), this.name = "AddressAutocompleteSignalAbortedError"
    }
}
class Gy extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionPostMessageMemoryError"
    }
}
class zy extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionMissingRequiredAccessError"
    }
}
class Wy extends re {
    constructor() {
        super(...arguments), this.name = "MissingSandboxError"
    }
}
class qy extends re {
    constructor() {
        super(...arguments), this.name = "StorefrontQueryError"
    }
}
class Ky extends re {
    constructor() {
        super(...arguments), this.name = "StorefrontMissingToken"
    }
}
class Xy extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionAssetFetchError"
    }
}
class $y extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionSandboxAssetFetchError"
    }
}
class Qy extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionSandboxPolyfillFetchError"
    }
}
class Jy extends re {
    constructor() {
        super(...arguments), this.name = "ExtensionSandboxTruncatedPolyfillError"
    }
}
class Zy extends re {
    constructor() {
        super(...arguments), this.name = "AddressAutocompleteUnexpectedFieldError"
    }
}
class eI extends re {
    constructor() {
        super(...arguments), this.name = "AddressAutocompleteMissingSuggestionError"
    }
}
const mf = ["Checkout::Dynamic::Render", "Checkout::CartLineDetails::RenderAfter", "Checkout::CartLineDetails::RenderLineComponents", "Checkout::CartLines::RenderAfter", "Checkout::Reductions::RenderBefore", "Checkout::Reductions::RenderAfter", "Checkout::Actions::RenderBefore", "Checkout::GiftCard::Render", "purchase.checkout.header.render-after", "purchase.checkout.footer.render-after", "purchase.checkout.chat.render", "purchase.address-autocomplete.suggest", "purchase.address-autocomplete.format-suggestion"],
    _f = ["Checkout::PickupLocations::RenderBefore", "Checkout::PickupLocations::RenderAfter", "purchase.checkout.pickup-location-option-item.render-after"],
    ff = ["Checkout::PickupPoints::RenderBefore", "Checkout::PickupPoints::RenderAfter"],
    gf = [..._f, ...ff],
    pf = ["Checkout::ShippingMethods::RenderBefore", "Checkout::ShippingMethods::RenderAfter", "Checkout::ShippingMethodDetails::RenderAfter", "Checkout::ShippingMethodDetails::RenderExpanded"],
    Sf = new Map([
        ["shipping-address", ["Checkout::DeliveryAddress::RenderBefore", "purchase.checkout.delivery-address.render-after"]],
        ["contact-information", ["Checkout::Contact::RenderAfter", ...gf]],
        ["delivery-method", pf],
        ["payment-methods", ["Checkout::PaymentMethod::Render", "Checkout::PaymentMethod::HostedFields::RenderAfter", "purchase.checkout.payment-method-list.render-before", "purchase.checkout.payment-method-list.render-after"]]
    ]);

function Ef(e) {
    const t = new Set(mf);
    for (const n of e) {
        const a = Sf.get(n) ? ? [];
        for (const r of a) t.add(r)
    }
    return t
}
const po = ["DELIVERY1", "DELIVERY2"],
    So = ["INFORMATION1", "INFORMATION2", "INFORMATION3"],
    Eo = ["PAYMENT1", "PAYMENT2", "PAYMENT3", "PAYMENT4"],
    Ao = ["WALLETS1"],
    Af = ["ORDER_SUMMARY1", "ORDER_SUMMARY2", "ORDER_SUMMARY3", "ORDER_SUMMARY4"],
    tI = ["ORDER_STATUS1", "ORDER_STATUS2", "ORDER_STATUS3"],
    nI = [...Ao, ...So, ...po, ...Eo],
    vf = [
        ["contact-information", [...Ao, ...So]],
        ["delivery-method", po],
        ["payment-methods", Eo]
    ];

function hf(e) {
    const t = [];
    return vf.forEach(([n, a]) => {
        e.includes(n) && t.push(...a)
    }), new Set([...t, ...Af])
}

function vo({
    supported: e,
    swappable: t,
    disabled: n
}) {
    const a = new Map([...e].map(o => [o, o]));
    let r;
    const s = new Set;
    return t.forEach(o => {
        if (n.has(o)) {
            r ? a.set(o, r) : s.add(o);
            return
        }
        if (s.size > 0) {
            for (const i of s.values()) a.set(i, o);
            s.clear()
        }
        r = o
    }), a
}

function bf(e) {
    const {
        fixed: t,
        supported: n,
        disabled: a
    } = e;
    for (const s of a) {
        if (t.has(s)) throw new In(`Cannot disable fixed placement: ${s}`);
        if (!n.has(s)) throw new In(`Cannot disable unregistered placement: ${s}`)
    }
    const r = vo(e);
    return function(o, i) {
        const d = r.get(o);
        if (d === void 0) throw new In(`No dynamic placement was registered for ${o}`);
        return d === i
    }
}
const Ia = {
        "Checkout::Actions::RenderBefore": "purchase.checkout.actions.render-before",
        "Checkout::CartLineDetails::RenderAfter": "purchase.checkout.cart-line-item.render-after",
        "Checkout::CartLineDetails::RenderLineComponents": "purchase.cart-line-item.line-components.render",
        "Checkout::CartLines::RenderAfter": "purchase.checkout.cart-line-list.render-after",
        "Checkout::Contact::RenderAfter": "purchase.checkout.contact.render-after",
        "Checkout::CustomerInformation::RenderAfter": "purchase.thank-you.customer-information.render-after",
        "Checkout::DeliveryAddress::RenderBefore": "purchase.checkout.delivery-address.render-before",
        "Checkout::Dynamic::Render": "purchase.checkout.block.render",
        "Checkout::GiftCard::Render": "purchase.checkout.gift-card.render",
        "Checkout::PaymentMethod::Render": "purchase.checkout.payment-option-item.details.render",
        "Checkout::PaymentMethod::HostedFields::RenderAfter": "purchase.checkout.payment-option-item.hosted-fields.render-after",
        "Checkout::PaymentMethod::RenderRequiredAction": "purchase.checkout.payment-option-item.action-required.render",
        "Checkout::PickupLocations::RenderAfter": "purchase.checkout.pickup-location-list.render-after",
        "Checkout::PickupLocations::RenderBefore": "purchase.checkout.pickup-location-list.render-before",
        "Checkout::PickupPoints::RenderAfter": "purchase.checkout.pickup-point-list.render-after",
        "Checkout::PickupPoints::RenderBefore": "purchase.checkout.pickup-point-list.render-before",
        "Checkout::Reductions::RenderAfter": "purchase.checkout.reductions.render-after",
        "Checkout::Reductions::RenderBefore": "purchase.checkout.reductions.render-before",
        "Checkout::ShippingMethodDetails::RenderAfter": "purchase.checkout.shipping-option-item.render-after",
        "Checkout::ShippingMethodDetails::RenderExpanded": "purchase.checkout.shipping-option-item.details.render",
        "Checkout::ShippingMethods::RenderAfter": "purchase.checkout.shipping-option-list.render-after",
        "Checkout::ShippingMethods::RenderBefore": "purchase.checkout.shipping-option-list.render-before",
        "Checkout::ThankYou::CartLineDetails::RenderAfter": "purchase.thank-you.cart-line-item.render-after",
        "Checkout::ThankYou::CartLines::RenderAfter": "purchase.thank-you.cart-line-list.render-after",
        "Checkout::ThankYou::CustomerInformation::RenderAfter": "purchase.thank-you.customer-information.render-after",
        "Checkout::ThankYou::Dynamic::Render": "purchase.thank-you.block.render"
    },
    Tf = (() => {
        const e = {};
        for (const [t, n] of Object.entries(Ia)) e[n] = t;
        return e
    })();

function yf(e) {
    return e in Ia ? e : Tf[e]
}

function Ht(e) {
    return Ia[e] ? ? e
}

function mt(e) {
    return yf(e) ? ? Ht(e)
}
const If = /^(?:Checkout::|purchase\.).+/;

function aI(e) {
    return If.test(e)
}
const Cf = ["purchase.checkout.block.render", "Checkout::Dynamic::Render", "purchase.thank-you.block.render", "Checkout::ThankYou::Dynamic::Render"],
    Nf = new Set(Cf);

function Pf(e) {
    return Nf.has(e)
}
const Of = new Set(["purchase.checkout.payment-option-item.hosted-fields.render-after", "purchase.checkout.payment-option-item.details.render"]);

function yr(e) {
    return e === "unstable" ? "2025-07" : e
}

function Rf(e, t) {
    const n = yr(e),
        a = yr(t);
    return n !== a && n < a
}

function Mf(e, {
    sourceType: t,
    isThankYou: n = !1
}) {
    return t !== "draftOrder" || n ? !0 : Of.has(Ht(e.extensionPoint.target)) || e.type === "global" || !Rf(e.apiVersion, "2024-07")
}

function wf(...[e, t]) {
    return e === "uiExtension" ? {
        kind: e,
        extension: t
    } : {
        kind: e,
        field: t
    }
}

function Lf(e) {
    return e.kind === "uiExtension" ? e.extension : e.field
}

function rI(e, t) {
    return e.filter(n => n.kind === t)
}

function Df(e) {
    const t = [],
        n = [],
        a = [];
    for (const r of e) {
        if (r.kind === "customField") {
            n.push({
                customization: r,
                position: r.field.position
            });
            continue
        }
        const {
            extension: s
        } = r;
        switch (s.type) {
            case "global":
                t.push(r);
                break;
            case "persisted":
                n.push({
                    customization: r,
                    position: s.position.value
                });
                break;
            case "local":
                a.push(r);
                break;
            default:
                qe(s)
        }
    }
    return n.sort(kf), [...t, ...n.map(({
        customization: r
    }) => r), ...a]
}

function kf(e, t) {
    return e.position - t.position
}

function ho({
    itemTarget: e,
    queryTarget: t
}) {
    return mt(e) === mt(t)
}

function xf({
    itemTarget: e,
    queryTarget: t,
    isMatch: n
}) {
    return !ho({
        itemTarget: e.target,
        queryTarget: t.target
    }) || !e.placementReference || !t.placementReference ? !1 : n(e.placementReference, t.placementReference)
}

function jf() {
    const e = new WeakMap;
    return function(n, a) {
        if (!a.placementReference) return ho({
            itemTarget: n.target,
            queryTarget: a.target
        });
        const {
            target: r,
            placements: s,
            placementReference: o
        } = a;
        let i = e.get(s);
        return i || (i = bf(s), e.set(s, i)), xf({
            itemTarget: n,
            queryTarget: {
                target: r,
                placementReference: o
            },
            isMatch: i
        })
    }
}

function sI({
    items: e,
    getTarget: t
}) {
    const n = jf();
    return function(r) {
        return r ? Q(() => e.value.filter(s => n(t(s), r))) : e
    }
}

function oI(e) {
    const t = e.indexOf(".");
    return t === -1 ? {
        namespace: "",
        key: e
    } : {
        namespace: e.slice(0, t),
        key: e.slice(t + 1)
    }
}

function iI({
    target: e
}) {
    return {
        target: e.target,
        placementReference: e.placementReference ? ? void 0
    }
}

function dI(e) {
    return [...e].sort((t, n) => t.position - n.position)
}

function Bf(e, t, n, a, r = new Set) {
    const s = Ff(r),
        o = Uf(e, n);
    return i => {
        const {
            id: d,
            behaviors: l,
            capabilities: u,
            extensionPoint: m
        } = i;
        return l.peek().blockProgress !== !0 || u.blockProgress !== !0 || t.has(d) || !Mf(i, {
            sourceType: a
        }) || s.has(mt(m.target)) ? !1 : o(Gf(i))
    }
}

function Uf(e, t) {
    const n = Ef(e),
        a = hf(e),
        r = vo(t);
    return ({
        target: s,
        placementReference: o
    }) => {
        const i = mt(s);
        if (!i || !n.has(i)) return !1;
        if (Pf(i)) {
            if (!o || !t.supported.has(o)) return !1;
            const d = r.get(o);
            if (!d || !a.has(d)) return !1
        }
        return !0
    }
}

function lI({
    features: e,
    extensions: t,
    deactivatedExtensionIds: n,
    placementReferences: a,
    sourceType: r,
    excludedExtensionTargets: s
}) {
    return t.some(Bf(e, n, a, r, s))
}

function Ff(e) {
    const t = new Set;
    for (const n of e) t.add(mt(n));
    return t
}

function Yf({
    filteredExtensions: e,
    shop: t,
    proposal: n
}) {
    return e.length > 0 || t.globalUIExtensions.length > 0 || t.lpmWithUiExtensionEnabled || n.negotiated.fields.paymentMethods.value ? .some(a => "uiExtension" in a && a.uiExtension != null || a.type === "customOnsite") === !0
}

function uI(e) {
    return e.isCheckoutEditor || e.shop.developmentShop || e.shop.allowExtensionDevelopment || !1 || Yf({
        filteredExtensions: e.filteredExtensions,
        shop: e.shop,
        proposal: e.proposal
    })
}

function cI(e, {
    identity: t
}) {
    return Vf(Hf(e, {
        identity: t
    }))
}

function Hf(e, {
    identity: t
}) {
    return e.filter(n => {
        const a = n.behaviors.value,
            r = t.current.value === "shopPay";
        return !(r && !a.showInExpressCheckout || r && n.capabilities.collectBuyerConsent.customerPrivacy)
    })
}

function Vf(e) {
    return Df(e.map(t => wf("uiExtension", t))).map(Lf)
}

function Gf(e) {
    return {
        target: e.extensionPoint.target,
        placementReference: e.placementReference
    }
}

function mI({
    extension: e,
    extensionPoint: t
}) {
    const {
        preloads: n,
        appUrl: a
    } = e;
    let r;
    return n ? .forEach(({
        target: s,
        namespace: o,
        value: i
    }) => {
        if (Ht(s) !== Ht(t)) return;
        const d = zf(o, i, a);
        d && (r = r || {}, r[o] = d)
    }), r
}

function zf(e, t, n) {
    let a;
    try {
        a = new URL(t, n || void 0)
    } catch {}
    if (!a || a.protocol !== "https:") {
        console.warn(`Invalid URL specified for preload "${e}": Please use a valid HTTPS URL.`);
        return
    }
    return a.search = "", a.hash = "", a.toString()
}
class ht extends Event {
    constructor(t) {
        const n = new.target.type;
        super(n, { ...t,
            bubbles: !0
        })
    }
}
class bo extends ht {#
    e = [];
    waitUntil(t) {
        this.#e.push(t)
    }
    async allResolved() {
        await Promise.all(this.#e)
    }
}
const za = class za extends bo {
    constructor(t, {
        bootStartTime: n,
        bootPhaseTimings: a
    }) {
        super(), this.context = t, this.bootStartTime = n, this.bootPhaseTimings = a
    }
};
za.type = "bootloader:hydrate-start";
let Ir = za;
const Wa = class Wa extends ht {
    constructor(t) {
        super(), this.cause = t
    }
};
Wa.type = "bootloader:hydrate-start-resolve";
let Cr = Wa;
const qa = class qa extends bo {
    constructor(t, {
        hydrateStartTime: n
    }) {
        super(), this.context = t, this.hydrateStartTime = n
    }
};
qa.type = "bootloader:hydrate-end";
let Nr = qa;
const Ka = class Ka extends ht {
    constructor(t) {
        super(), this.cause = t
    }
};
Ka.type = "bootloader:hydrate-end-resolve";
let Pr = Ka;
const Xa = class Xa extends ht {};
Xa.type = "wallet:enter";
let Or = Xa;
const $a = class $a extends ht {};
$a.type = "wallet:exit";
let Rr = $a;
var W = (e => (e.AmazonPay = "amazon_pay", e.BuyWithPrime = "buy_with_prime", e))(W || {});
const _I = "wallet_subscription_review_required";
class fI extends le {
    constructor() {
        super(...arguments), this.name = "ActiveWalletSessionError", this.defaultGroupingHash = "ActiveWalletSessionError"
    }
}
const gI = "guest";
class Wf extends Error {
    constructor(t) {
        super(`Wallet "${t}" does not have a corresponding identity source`), this.name = "UnsupportedWalletIdentityError"
    }
}

function pI(e) {
    switch (e) {
        case "GOOGLE_PAY":
            return "googlePay";
        case "PAYPAL_EXPRESS":
        case "VENMO":
            return "payPal";
        case "APPLE_PAY":
            return "applePay";
        case W.AmazonPay:
            return "amazonPay";
        case W.BuyWithPrime:
            return "buyWithPrime";
        case "FACEBOOK_PAY":
        case "SHOPIFY_INSTALLMENTS":
        case "SHOP_PAY":
            throw new Wf(e);
        default:
            qe(e)
    }
}
const To = new Set(["payPal", "googlePay", "applePay"]);

function SI(e) {
    return To.has(e)
}
const qf = new Set([...To, "amazonPay", "buyWithPrime"]);

function EI(e) {
    return qf.has(e)
}
const Kf = [{
    buyerCountryCode: "CA",
    currencyCode: "CAD",
    scheduledPaymentCount: 3,
    buyerFacingPaymentCount: 4
}, {
    buyerCountryCode: "GB",
    currencyCode: "GBP",
    scheduledPaymentCount: 2,
    buyerFacingPaymentCount: 3
}];

function AI(e, {
    buyerCountryCode: t,
    currencyCode: n
}) {
    if (e.loanType !== "SPLIT_PAY" || e.apr !== 0 || !n) return e.installmentsCount;
    const a = t ? ? (n === "GBP" ? "GB" : void 0);
    return Kf.find(s => s.buyerCountryCode === a && s.currencyCode === n && s.scheduledPaymentCount === e.installmentsCount) ? .buyerFacingPaymentCount ? ? e.installmentsCount
}

function vI(e) {
    return !e || e.length === 0 ? !1 : e.every(t => t === "INTEREST" || t === "ZERO_PERCENT")
}
const Xf = 9;
class $f extends Error {
    constructor() {
        super(...arguments), this.name = "TrekkieError"
    }
}
const yo = $e(null);

function hI({
    children: e
}) {
    const [t, n] = os(new Jf), a = ie(() => ({
        value: t,
        setValue: n
    }), [t, n]);
    return Zn(yo.Provider, {
        value: a,
        children: e
    })
}

function Qf() {
    const e = _t(yo);
    if (!e) throw new $f("useTrekkieContext must be used inside of TrekkieProvider");
    return e
}
class Jf {
    constructor() {
        this.defaultAttributes = void 0
    }
}

function bI(e) {
    const {
        checkout: {
            address: {
                countryDetails: t
            }
        },
        router: n
    } = q(), {
        pathname: a
    } = n.currentUrl.value, r = a.endsWith("/throttle");
    return ie(() => {
        e && !r && t.fetch(e)
    }, [t, e, r]), {
        details: e ? t.get(e) : void 0,
        loading: e ? t.isLoading(e) : !1
    }
}

function TI(e) {
    const {
        checkout: {
            address: t
        }
    } = q(), n = C(() => [...new Set(e.value)].sort().filter(Boolean).join("|")), a = C(() => n.value.split("|").filter(Boolean)), r = ke(void 0);
    return ie(() => {
        r.current ? .(), r.current = rs(() => {
            const s = a.value;
            ss(() => {
                s.forEach(o => t.countryDetails.fetch(o))
            })
        })
    }, [t.countryDetails, a]), ft(() => () => {
        r.current ? .(), r.current = void 0
    }, []), C(() => a.value.some(s => t.countryDetails.isLoading(s)) ? {} : Object.fromEntries(a.value.map(s => [s, t.countryDetails.get(s)]).filter(s => s[1] !== void 0)))
}

function yI() {
    const {
        shop: {
            popularBillingCountries: e,
            billingCountries: t
        }
    } = q();
    return ie(() => Io(e, t), [e, t])
}

function II() {
    const {
        shop: {
            popularShippingCountries: e,
            shippingCountries: t
        }
    } = q();
    return ie(() => Io(e, t), [e, t])
}

function Io(e, t) {
    return t && t.length >= Xf && e.length > 0 ? [...e.map(n => ({ ...n,
        key: `popular-${n.value}`
    })), {
        value: "",
        label: "---",
        disabled: !0
    }, ...t] : t
}

function CI() {
    const {
        i18n: {
            locale: e
        },
        userEvents: t,
        shop: {
            id: n
        },
        source: a
    } = q(), r = Qf();
    return be((s, o, i) => {
        const l = i ? {
            shipping: "Shipping address",
            billing: "Billing address",
            pickup: "Pickup address",
            pickupPoint: "Pickup point address"
        }[i] : "Unknown";
        if (r ? .value ? .defaultAttributes && t) {
            const u = r.value.defaultAttributes ? .uniqToken || "";
            t.monorailEvent({
                schemaId: "checkout_country_selection/1.1",
                payload: {
                    checkoutToken: a ? .checkoutSessionIdentifier || "",
                    shopId: parseInt(Ze(n), 10),
                    uniqueToken: u,
                    territoryCode: o,
                    selectionMethod: s,
                    context: l,
                    locale: e
                }
            })
        }
    }, [r.value.defaultAttributes, t, a ? .checkoutSessionIdentifier, n, e])
}
const Co = "retail_source",
    No = "pos",
    NI = "retail_shop_pay_trace_id",
    PI = "device_id",
    Zf = "location_id",
    OI = "user_id",
    eg = "Location",
    tg = "discount_code",
    RI = "store_address",
    ng = "is_ship_to_customer",
    MI = {
        SHOP_PAY_LOGIN: "SHOP_PAY_LOGIN_REQUESTED",
        SHOP_PAY_INSTALLMENTS: "SHOP_PAY_INSTALLMENTS_SELECTED",
        SHOP_PAY_PAY_NOW: "SHOP_PAY_PAY_NOW_SELECTED",
        SHOP_PAY_CHECKOUT_COMPLETE: "SHOP_PAY_CHECKOUT_COMPLETED",
        SHOP_PAY_PAY_NOW_DEFAULTED: "SHOP_PAY_PAY_NOW_DEFAULTED",
        SHOP_PAY_INSTALLMENTS_DEFAULTED: "SHOP_PAY_INSTALLMENTS_DEFAULTED"
    };

function wI(e) {
    return e ? .length ? e.find(n => n.key === Co) ? .value === No : !1
}

function LI(e, t) {
    return t ? .find(n => n.key === e)
}
const ag = ["ab", "abn", "ach", "achdirectdebit", "acimaleasing", "acuotaz", "ada", "addi", "adyen", "aeropay", "affinbank", "affirm", "aftee", "afterpay", "afterpaypaynlversion", "airtelmoney", "airteltigomobilemoney", "aktia", "akulaku", "akulakupaylater", "alandsbanken", "alfamart", "alfamidi", "alifpay", "alipay", "alipayhk", "alipaypaynlversion", "alliancebank", "alma", "almapaynlversion", "aman", "amazon", "amazonpay", "ambank", "americanexpress", "amex", "amwal", "amwalpay", "ansa", "ansastoredvalue", "anyday", "apc", "apecoin", "aplazo", "aplus", "applepay", "aqsat", "arbitrum", "arca", "areeba", "arhaus", "artea", "arvato", "ashleyplcc", "ask", "astrapay", "astropay", "atmbersama", "atobaraidotcom", "atome", "atone", "atrato", "aukantankessai", "aupay", "authorizenet", "avalanche", "avardabubbleroom", "avardakekale", "avardapartpayment", "avardapaylater", "axs", "azericard", "babycadeaubon", "bacs", "bancnet", "bancoazteca", "bancobice", "bancocuscatlan", "bancodebogota", "bancodechile", "bancoedwards", "bancoestado", "bancofalabella", "bancolombia", "bancomat", "bancontact", "bancosecurity", "bangkokbank", "bankislam", "bankmuamalat", "bankofamerica", "bankrakyat", "barclays", "barion", "base", "basepay", "bbqcadeaukaart", "bbvacie", "bca", "bcaklikpay", "bccard", "bci", "bdc", "bdo", "beautyandmorecadeaukaart", "becs", "belfius", "bemovil", "benefit", "benefitpay", "bestbuycard", "betalingsservice", "bgautogiro", "bierchequepaynlversion", "bigc", "billease", "billerpaynlversion", "billie", "billink", "billinkmethod", "bit", "bitcoin", "bitcoincash", "bizum", "bizumpaynlversion", "blackhorseflexpay", "blik", "bmo", "bnbchain", "bni", "bnp", "bnplx", "bny", "bobpayeft", "bobpayinstanteft", "bobpaymanualeft", "boekencadeau", "bogpay", "bogus", "bogusappcoin", "bol", "boleto", "boodil", "boost", "bpi", "braintree", "bread", "breadpay", "breb", "bri", "bridirectdebit", "brimo", "brite", "broadnet", "bsi", "bsn", "bss", "buckaroopaybybank", "buckaroopayments", "bumper", "busd", "buywithprime", "cabal", "cacpaywallet", "capitalone", "capitecpay", "carecredit", "careempay", "cartebleue", "cartesbancaires", "cash", "cashappafterpay", "cashapppay", "cashew", "cashinvoicelatinamerica", "catchpayments", "cbc", "cebuana", "cembrapay", "centi", "centrapay", "cetelem", "charlesschwab", "chase", "checkoutfinance", "chinabank", "cimb", "cimbclicks", "circlek", "citadele", "citi", "citipay", "citizens", "clavetelered", "clearpay", "clerq", "cleverpay", "clickuz", "clip", "cliq", "cmb", "codensa", "cofidis3x", "cofidis4x", "cofidisexpressz", "coinsph", "collectorbank", "coop", "coppelpay", "creditagricole", "creditclickpaynlversion", "crediteapay", "creditkey", "crediviva", "credix", "credova", "cuotas", "curacaopay", "dai", "dailyyamazaki", "dana", "danamononline", "dandan", "dankort", "danskebank", "dappmx", "dash", "daviplata", "dbarai", "decadeaukaart", "decadeaukaartblack", "deema", "depay", "deutschebank", "dinacard", "dinersclub", "directa24", "directbanktransferlatinamerica", "directpay", "discover", "divido", "dnb", "docomobarai", "dogecoin", "dopple", "dropp", "duitnow", "duologi", "dwolla", "easycreditratenkauf", "easypaisa", "easywallet", "ebucks", "echelonfinancing", "ecpay", "edenred", "efecty", "eftposau", "eftsecure", "eghl", "elo", "elv", "energieloket", "enets", "eos", "epayments", "epospay", "eps", "erste", "escrowcom", "esewa", "esrpaymentslipswitzerland", "ethereum", "etihadguestpay", "etika", "eurobonuscheckout", "ewalletindonesia", "ewalletphilippines", "ewalletsouthkorea", "ezcash", "fairstonepayments", "fam", "familymart", "fantom", "farmlands", "fashioncheque", "fashiongiftcardpaynlversion", "favepay", "fawry", "finloup", "fintecture", "fintoc", "firstcitizens", "flex", "flexfsa", "flexhsa", "flexiti", "floapay", "floatpayments", "flow", "flyingblueplus", "forbrugsforeningen", "forsa", "fortiva", "fps", "fpx", "free", "freecharge", "freedompay", "fundiin", "futurepaymytab", "gale", "galefsa", "galehsa", "gcash", "generalfinancing", "generic", "genericdark", "genericbank", "genie", "genoapay", "gezondheidsbonpaynlversion", "giftcard", "giftforgood", "giftstation", "giropay", "givacard", "glbemoreoptions", "glbepaypal", "glbeplus", "gmoatokara", "gmobanktransfer", "gmopostpay", "gmovirtualaccount", "gnosis", "goldmansachs", "golfbon", "googlepay", "googlewallet", "gopay", "gosettle", "grabpay", "grailpay", "gusd", "halotel", "hanacard", "handelsbanken", "happypay", "helloclever", "hesabe", "heylight", "hitrustpaytransfer", "homecredit", "hongleongbank", "hongleongconnect", "horsesandgifts", "hsbc", "hsbcukversion", "huistuincadeau", "humm", "humo", "hyper", "hypercard", "hypercash", "hyundaicard", "iberent", "ibexpay", "ideal", "idealwero", "idram", "in3", "in3viaideal", "inbank", "indexo", "indomaret", "inghomepay", "interac", "ipass", "ipwire", "ipwireinst", "iris", "itau", "ivy", "iwocapaypaylater", "jaywan", "jcb", "jenius", "jko", "jousto", "kakaopay", "kakebaraidotcom", "kasikornbank", "kasssh", "katapult", "kbcard", "kbccbc", "kcpcreditcard", "keuzecadeau", "kfast", "khalti", "khipu", "khqr", "kidsandteen", "klap", "klarna", "klarnapaylater", "klarnapaynow", "klarnasliceit", "knakensettle", "knet", "koalafi", "koin", "konbini", "krediidipank", "kredivo", "krungsri", "krungthaibank", "kueskipay", "kunstencultuurcadeaukaart", "kuwaitfinancehouse", "landbank", "laser", "latitudecreditlineau", "latitudegemau", "latitudegemnz", "latitudegoau", "latitudepay", "lawson", "laybuy", "laybuybyklarna", "laybuyheart", "lbc", "leanpay", "ledyer", "leescadeaukaart", "lhv", "linepay", "linkaja", "linkpay", "litecoin", "lku", "lloyds", "lottecard", "lpb", "luminor", "lunchcheck", "lydia", "mach", "mada", "maestro", "magnetiq", "mandiri", "mash", "master", "mastercard", "masterpass", "maxima", "maxit", "maya", "mayabank", "maybank", "maybankm2u", "maybankqrpay", "mb", "mbway", "mbwaypaynlversion", "mcash", "mcashcreditcard", "mcb", "medicinosbankas", "meeza", "mercadocredito", "mercadopago", "merpay", "metamask", "metjebank", "metrobank", "militarystarcard", "minicuotas", "ministop", "mispay", "mobicash", "mobicred", "mobikwik", "mobilepay", "mode", "modo", "mokka", "momopay", "moncash", "mondido", "mondu", "mondupurple", "monero", "monizze", "monizzenew", "monzo", "moov", "mpesa", "mtnmobilemoney", "multibanco", "multisafepay", "mybank", "myfatoorah", "mymonty", "n26", "naps", "naranjax", "nationalebioscoopbon", "nationaleentertainmentcard", "natwest", "naverpay", "nayapay", "nelo", "neocuotas", "neopay", "nequi", "netbanking", "neteller", "newpay", "nexi", "nhcard", "nomba", "nordea", "notyd", "novalnetcashpayment", "novalnetdirectdebitach", "novalnetinstalmentbydirectdebitsepa", "novalnetinstalmentbyinvoice", "novalnetinvoice", "novalnetprepayment", "novuna", "npatobarai", "npkakebarai", "nubank", "oca", "ocbcbank", "octoclicks", "octopus", "offlinebanktransferlatinamerica", "olamoney", "omannet", "omasp", "omtpay", "oney", "onlinebanking", "onlinebanktransfer", "op", "opay", "openbankpay", "openpay", "optimism", "orangemobilemoney", "orco", "otpbank", "overstockciticobrand", "overstockcitiplcc", "ovo", "oxxo", "ozow", "pads", "pagoefectivo", "paid", "paidy", "palawa", "palawan", "pastpay", "payafterdeliveryinstalments", "payap", "paybox", "paybybank", "paybybankmollie", "paybybankus", "paybylink", "paycash", "payco", "payconiq", "payd", "payeasy", "payeverpaybybank", "payfastinstanteft", "payflex", "payid", "payinstore", "payitmonthly", "payjustnow", "paymarkonlineeftpos", "paymaya", "payme", "paymee", "paymentassist", "paynlspraypaynew", "paynow", "paynowmbank", "paynuno", "payoo", "payooqr", "paypal", "paypay", "payphone", "payplan", "paypo", "payrexxbanktransfer", "payrexxcrypto", "payrexxpaybybank", "payrexxpowerpay", "payright", "paysafecard", "paysafecardpaynlversion", "paysafecash", "paysera", "payshap", "paysquad", "paytm", "payto", "paytomorrow", "payu", "payuinstallments", "payzapp", "pei", "perlasfinance", "permata", "pfpay", "pivo", "pix", "plata", "pluxee", "pluxeenew", "pnc", "podiumcadeaukaart", "pointspay", "poli", "polygon", "poppankki", "portmone", "postepay", "postfinancecard", "postfinanceefinance", "postfinancenew", "postpay", "poweredbyansa", "poweredbyansastoredvalue", "powerpay", "pragmapay", "prepaysolutions", "progressiveleasing", "przelew24", "przelewy24", "przelewytwofourpaynlversion", "pse", "publicbank", "publicbankpbe", "purdeygiftcard", "pxpay", "qasitli", "qcard", "qliro", "qpay", "qris", "qrpaymentslip", "qrph", "qrpromptpay", "rabbitlinepay", "rabby", "rabobank", "raiffeisenbank", "rainbow", "rakutenpay", "rapidtransfer", "ratepay", "ratypekao", "rcbc", "rcs", "redactiva", "reka", "resolvepay", "revolut", "rhbbank", "rhbnow", "rietumu", "riverty", "rivertypaynlversion", "rupay", "rvrpas", "saastopankki", "sadad", "sadapay", "safetypaybanktransfer", "safetypaycashpayment", "sam", "samsungcard", "samsungpay", "santander", "satisfi", "satispay", "saunaandwellnesscadeau", "sbpl", "scalapay", "scantopay", "scotiabank", "screamtruck", "screamtruckwallet", "seabankid", "seabankph", "seb", "seicomart", "sentoo", "sepabanktransfer", "sepadirectdebit", "sequra", "seveneleven", "sezzle", "shib", "shinhancard", "shopcash", "shopeepay", "shoppay", "shopifypay", "siamcommercial", "siauliubankas", "siirto", "sika", "sikafsa", "sikahsa", "simpl", "simplepay", "sinpemovil", "sistecredito", "skeps", "skrilldigitalwallet", "skyro", "slicefnbo", "smartpay", "snapcheckout", "snapmint", "societegenerale", "sofort", "softbank", "solana", "solanapay", "solanapayhelio", "souhoola", "spankki", "sparkasse", "spaylater", "spei", "spidealwero", "splitit", "sportsgiftcard", "spotii", "spraypay", "sslcommerz", "stadspasamsterdam", "stadspasrotterdam", "standardchartered", "statestreet", "stcpay", "stitch", "stoov", "storecredit", "stripe", "sumas", "sunkus", "superpayments", "suyool", "sveab2bfaktura", "sveab2binvoice", "sveacheckout", "sveacreditaccount", "sveadelbetalning", "sveaeramaksu", "sveafaktura", "sveainvoice", "svealasku", "sveaostukonto", "sveapartpayment", "sveayrityslasku", "swedbank", "swiftpay", "swish", "swissbilling", "sympl", "synchrony", "synchronypay", "tabby", "tabit", "tafi", "taly", "tamara", "tandympayment", "tappay", "tasacero", "tbibank", "tcf", "td", "tendopay", "tensile", "tescolotus", "thanachartbank", "timepayment", "tiptop", "tnmmoney", "todopay", "togocel", "toss", "touchngo", "tpay", "tpgpay", "transendicon", "trevipay", "truelayer", "truemed", "truemoneypay", "truist", "trustly", "twigpay", "twint", "twisto", "twoinvoice", "uaevisa", "uangme", "ubp", "underpay", "unionpay", "unipay", "unzerbanktransfer", "unzerdirectdebit", "unzerinstallment", "unzerinvoice", "unzerprepayment", "uob", "uobezpay", "uobthai", "upas", "upgradeflexpay", "upi", "urbo", "urpay", "usaa", "usbank", "usdc", "usdp", "usdt", "uzcard", "v12finance", "valu", "venmo", "ventipay", "venusplcc", "verdcash", "verifonebnpl", "verve", "viabill", "vipps", "vippspaynlversion", "virementmaitrise", "visa", "visaelectron", "vnpayqr", "vodafone", "volksbank", "volt", "vpay", "vvvcadeaukaartpaynlversion", "vvvgiftcard", "waavepaybybank", "wallet", "walley", "wallid", "wave", "wbtc", "webpay", "webpaynew", "webshopgiftcard", "wechatpay", "wechatpaynlversion", "wegetfinancing", "wellsfargo", "wero", "whishcheckout", "whishpay", "wib", "wingbank", "wise", "wissel", "worldchain", "xendit", "xrp", "yape", "yappy", "ymobile", "younitedpay", "yourgift", "zalopay", "zamtel", "zapper", "zaver", "zingala", "zinia", "zip", "zoodpay", "zulilycreditcard", "zustaina"];

function rg(e) {
    return e.toLowerCase().replace(/[-_]/g, "")
}
const sg = new Set(ag);

function og(e) {
    return sg.has(rg(e))
}

function ig(e) {
    return `${e.type}-${e.id}`
}

function dg(e) {
    return `customCreditCard-${e.paymentMethodIdentifier}`
}

function Po(e) {
    return ["wallet", "local", "offsite", "walletsPlatform", "walletsPlatformPaymentMethod", "customOnsite"].includes(e.type)
}

function je(e) {
    return Po(e) ? e.name : e.type === "customManualPayment" || e.type === "manualPayment" ? ig(e) : e.type === P.CreditCard || e.type === "direct" && !e.alternative ? "creditCards" : e.type === "direct" && e.alternative ? dg(e) : e.type
}

function an(e) {
    return ["direct", "wallet", "manualPayment", "paymentOnDelivery", "customManualPayment", "offsite", "local", "customOnsite", P.PayPal, P.CreditCard, "bank"].includes(e.type)
}
var lg = (e => (e.And = "and", e.Or = "or", e.Narrow = "narrow", e))(lg || {});

function ug(e, t, n = "and") {
    switch (t.length) {
        case 0:
            return "";
        case 1:
            return t[0];
        case 2:
            switch (n) {
                case "and":
                    return e.translate("general.list_formatter.and.twoWordConnector", {
                        firstWord: t[0],
                        secondWord: t[1]
                    });
                case "or":
                    return e.translate("general.list_formatter.or.twoWordConnector", {
                        firstWord: t[0],
                        secondWord: t[1]
                    });
                case "narrow":
                    return e.translate("general.list_formatter.narrow.twoWordConnector", {
                        firstWord: t[0],
                        secondWord: t[1]
                    });
                default:
                    return ""
            }
        default:
            return t.reduce((a, r, s) => {
                if (s !== t.length - 1) switch (n) {
                    case "and":
                        return e.translate("general.list_formatter.and.wordConnector", {
                            previousWords: a,
                            anotherWord: r
                        });
                    case "or":
                        return e.translate("general.list_formatter.or.wordConnector", {
                            previousWords: a,
                            anotherWord: r
                        });
                    case "narrow":
                        return e.translate("general.list_formatter.narrow.wordConnector", {
                            previousWords: a,
                            anotherWord: r
                        });
                    default:
                        return ""
                }
                switch (n) {
                    case "and":
                        return e.translate("general.list_formatter.and.lastWordConnector", {
                            previousWords: a,
                            lastWord: r
                        });
                    case "or":
                        return e.translate("general.list_formatter.or.lastWordConnector", {
                            previousWords: a,
                            lastWord: r
                        });
                    case "narrow":
                        return e.translate("general.list_formatter.narrow.lastWordConnector", {
                            previousWords: a,
                            lastWord: r
                        });
                    default:
                        return ""
                }
            })
    }
}

function cg(e) {
    return e.type === "direct" && !e.alternative
}

function mg(e, t) {
    return t ? e.translate("payment_gateway.debit_card_label") : e.translate("payment_gateway.credit_card_label")
}

function DI({
    identitySource: e,
    i18n: t
}, n, {
    forceDebitCardLabel: a
}) {
    return e === "shopPay" ? mg(t, a) : n.alternative && n.extensibilityDisplayName || n.displayName || t.translate("payment_gateway.credit_card_label")
}

function Ca(e) {
    return `${e.type}-${e.token}`
}

function kI(e) {
    switch (e.type) {
        case "wallet":
        case "walletsPlatform":
        case "local":
            return e.name;
        default:
            return e.type
    }
}

function Mr(e, {
    identity: t
}) {
    return e.type === P.CreditCard && t.current.value === "shopPay" ? Ca(e) : je(e)
}

function _g(e, t) {
    return e ? .availablePresentmentCurrencies ? e.availablePresentmentCurrencies.includes(t) : !0
}

function fg(e) {
    if (e === void 0) return;
    const t = e.type;
    if (t === "direct" || t === "offsite" || t === "paymentOnDelivery" || t === "manualPayment" || t === "customManualPayment" || t === "customOnsite") return e
}

function wr(e, t) {
    const n = fg(t);
    return _g(n, e)
}

function xI(e, t, n) {
    const a = wr(n, e),
        r = wr(n, t);
    return a !== r ? !0 : !r && e && t ? je(e) !== je(t) : !1
}

function jI(e, t) {
    return Lr(e) !== Lr(t)
}

function Lr(e) {
    return e ? .type === "customOnsite" ? e.name : void 0
}

function BI(e) {
    return e === "IDEAL" || e.toLowerCase().includes("ideal")
}
const gg = ["pix", "bogus_app_coin", "blik", "swish"];

function UI(e) {
    return e ? e.paymentBrands ? .find(t => gg.includes(t)) : null
}

function FI(e, t) {
    const n = e > 9 ? e : `0${e}`,
        a = `${t}`.slice(2);
    return `${n}/${a}`
}

function pg(e) {
    const {
        paymentAttributes: t
    } = e;
    if (t && typeof t == "object" && "id" in t && typeof t.id == "string") return t.id
}

function YI(e, t) {
    return t.some(({
        method: n
    }) => cg(e) ? n.paymentMethod === "CREDIT_CARD" && n.id === zl : e.type === P.CreditCard ? n.paymentMethod === "CREDIT_CARD" && (n.id === e.token || pg(n) === e.token) : e.type === P.PayPal ? n.paymentMethod === "PAYPAL" && (n.id === e.token || n.paymentMethodIdentifier === e.paymentMethodIdentifier) : Oo(n, [e]) != null)
}

function HI(e, t) {
    return e.filter(n => {
        switch (n.paymentMethod) {
            case "CREDIT_CARD":
                return t.some(ed);
            case "IDEAL":
                return t.some(Qe);
            case "CUSTOM_ONSITE":
                return t.some(a => n.paymentBrands && us(a, n.paymentBrands));
            case "APPLE_PAY":
                return t.some(Je);
            case "SHOP_PAY":
                return t.some(a => a.type === "wallet" && a.name === "SHOP_PAY");
            case "SHOP_PAY_INSTALLMENTS":
                return t.some(a => a.type === "wallet" && a.name === "SHOPIFY_INSTALLMENTS");
            case "PAYPAL":
                return t.some(a => a.type === "wallet" && a.name === "PAYPAL_EXPRESS" || a.type === P.PayPal);
            case "BANK":
                return t.some(a => a.type === "bank");
            case "OFFSITE":
            case "MANUAL_PAYMENT":
            case "CUSTOM_MANUAL_PAYMENT":
            case "PAYMENT_ON_DELIVERY":
                return t.some(a => "name" in a && n.name && a.name.toLowerCase() === n.name.toLowerCase());
            default:
                return !1
        }
    })
}
const Sg = new Set(["OFFSITE", "MANUAL_PAYMENT", "CUSTOM_MANUAL_PAYMENT", "PAYMENT_ON_DELIVERY"]);

function Oo(e, t) {
    if (t ? .length) {
        if (e.id === Ke) {
            const n = t.find(Qe);
            if (n) return n
        }
        if (e.paymentMethod === "CUSTOM_ONSITE") {
            const n = td(t, {
                paymentBrands: e.paymentBrands,
                paymentMethodIdentifier: e.paymentMethodIdentifier
            });
            if (n) return n
        }
        if (e.paymentMethod === "APPLE_PAY") {
            const n = t.find(Je);
            if (n) return n
        }
        if (e.paymentMethod === "SHOP_PAY") {
            const n = t.find(a => a.type === "wallet" && a.name === "SHOP_PAY");
            if (n) return n
        }
        if (e.paymentMethod === "SHOP_PAY_INSTALLMENTS") {
            const n = t.find(a => a.type === "wallet" && a.name === "SHOPIFY_INSTALLMENTS");
            if (n) return n
        }
        if (e.paymentMethod === "PAYPAL") {
            const n = "vaultedToken" in e ? e.vaultedToken : void 0;
            return n ? t.find(a => a.type === P.PayPal && a.token === n) : t.find(a => a.type === "wallet" && a.name === "PAYPAL_EXPRESS")
        }
        if (e.paymentMethod === "BANK") return t.find(n => n.type === "bank" && n.paymentMethodIdentifier === e.paymentMethodIdentifier);
        if (e.paymentMethod === "DEFERRED") return t.find(n => n.type === "deferred");
        if (Sg.has(e.paymentMethod)) {
            if (e.paymentMethodIdentifier) {
                const n = t.find(a => "paymentMethodIdentifier" in a && a.paymentMethodIdentifier === e.paymentMethodIdentifier);
                if (n) return n
            }
            return t.find(n => "name" in n && e.name != null && n.name.toLowerCase() === e.name.toLowerCase())
        }
    }
}
const Eg = 4,
    Ag = 3;

function vg(e, t) {
    const n = e > Eg ? Ag : e;
    return t !== void 0 ? Math.min(t, n) : n
}

function hg(e, t) {
    return {
        visiblePaymentBrands: e.slice(0, t),
        hiddenPaymentBrands: e.slice(t)
    }
}

function bg(e) {
    return Ro.get(e) ? ? e
}

function VI(e) {
    return Ro.has(e)
}
const Ro = new Map([
    ["AMEX", "American Express"],
    ["BANCONTACT", "Bancontact"],
    ["BOGUS", "Test Payment Gateway"],
    ["CARTES_BANCAIRES", "Cartes Bancaires"],
    ["DANKORT", "Dankort"],
    ["DINERS_CLUB", "Diners Club"],
    ["DISCOVER", "Discover"],
    ["ELO", "Elo"],
    ["FORBRUGSFORENINGEN", "Forbrugsforeningen"],
    ["HYPERCARD", "HyperCard"],
    ["INTERAC", "Interac"],
    ["JCB", "JCB"],
    ["LASER", "Laser"],
    ["MAESTRO", "Maestro"],
    ["MASTERCARD", "Mastercard"],
    ["RUPAY", "RuPay"],
    ["UNIONPAY", "UnionPay"],
    ["VISA", "Visa"],
    ["VISAELECTRON", "Visa Electron"],
    ["DINERSCLUB", "Diners Club"],
    ["HIPERCARD", "HyperCard"],
    ["GIROCARD", "Girocard"]
]);

function GI(e, t, n, a) {
    if (n) return e.translate("tooltip.additional_payment_methods");
    const r = (t ? ? []).filter(o => og(o)),
        {
            hiddenPaymentBrands: s
        } = hg(r, vg(r.length, a));
    return ug(e, s.map(o => bg(String(o))))
}

function Tg(e, t) {
    const n = e.lastUsedAt || "",
        a = t.lastUsedAt || "";
    return n > a ? -1 : n < a ? 1 : 0
}
class yg extends Error {
    constructor() {
        super(...arguments), this.name = "ShopPaySelectedPaymentMethodError"
    }
}

function Ig({
    cards: e,
    paymentAttributeUuid: t
}) {
    return e.find(n => !n.paymentAttributes.expired && n.paymentAttributes.uuid === t)
}
const Na = Tg,
    zI = e => e && _e(e) ? e.paymentAttributes : void 0,
    Cg = e => ({
        id: e.id,
        paymentMethod: "CREDIT_CARD",
        lastUsedAt: e.lastUsedAt,
        paymentAttributes: e
    }),
    WI = (e, t) => [...t.map(Cg), ...e].sort(Na),
    Ng = (e, t) => t.find(n => n.paymentMethod === e.paymentMethod && n.id === e.id),
    qI = e => e === ut.id,
    Mo = e => e.paymentMethod === "IDEAL" || e.paymentMethod === "CUSTOM_ONSITE" && e.paymentBrands ? .some(t => t.toLowerCase() === "ideal") === !0,
    _e = e => e.paymentMethod === "CREDIT_CARD",
    Pg = e => _e(e) ? !0 : !!e.lastUsedAt,
    Dr = e => _e(e) ? `CREDIT_CARD:${e.id}` : Mo(e) ? "IDEAL" : `${e.paymentMethod}:${e.id}`,
    KI = (e, t) => {
        const n = Dr(e);
        return t.some(a => Dr(a) === n)
    },
    XI = e => !!e.length && e.every(Mo),
    Og = e => e.__typename === "PaymentMethod",
    Rg = e => e.paymentMethod === "CUSTOM_ONSITE",
    Vt = e => e.paymentMethod === "APPLE_PAY",
    Mg = e => e.paymentMethod === "OFFSITE" || e.paymentMethod === "MANUAL_PAYMENT" || e.paymentMethod === "CUSTOM_MANUAL_PAYMENT" || e.paymentMethod === "PAYMENT_ON_DELIVERY",
    $I = e => !!e.length && e.every(Vt),
    QI = e => !!e.length && e.every(Rg),
    JI = e => e.__typename === "CreditCard",
    wg = e => {
        const t = e.paymentMethod,
            n = {
                id: e.id,
                paymentMethodName: e.paymentMethodName,
                lastUsedAt: e.lastUsedAt ? ? ""
            },
            a = JSON.parse(e.paymentAttributes || "{}");
        switch (t) {
            case "CREDIT_CARD":
                return { ...n,
                    paymentMethod: t,
                    paymentAttributes: ru(a)
                };
            case "IDEAL":
                return { ...n,
                    paymentMethod: t
                };
            case "APPLE_PAY":
                return { ...n,
                    paymentMethod: t
                };
            case "BOGUS_APP_COIN":
            case "USDC":
            case "OTHER":
                return { ...n,
                    paymentMethod: t
                };
            case "UNSPECIFIED":
                return { ...n,
                    paymentMethod: "OTHER"
                };
            default:
                return qe(t)
        }
    },
    ZI = e => e.filter(Og).map(wg),
    Lg = e => {
        for (const t of e)
            if (!_e(t) || !t.paymentAttributes.expired) return t;
        return e[0]
    };

function eC(e) {
    return Ql[e.brand]
}
const Dg = new Set(["paymentOnDelivery", "offsite", "manualPayment", "customManualPayment"]);

function tC(e, t) {
    if (e.type === "customOnsite") {
        const o = e.paymentBrands ? ? [],
            i = o.map(l => l.toLowerCase());
        return i.length === 1 && i.includes("ideal") ? t.find(u => u.paymentMethod === "IDEAL") ? ? ut : t.find(l => l.paymentMethod === "CUSTOM_ONSITE" && l.paymentBrands ? .some(u => i.includes(u.toLowerCase()))) ? ? {
            id: e.paymentMethodIdentifier || e.name || e.type,
            paymentMethod: "CUSTOM_ONSITE",
            paymentBrands: o,
            lastUsedAt: null
        }
    }
    if (Qe(e)) return t.find(i => i.paymentMethod === "IDEAL") ? ? ut;
    if (Je(e)) return t.find(i => i.paymentMethod === "APPLE_PAY") ? ? {
        id: "apple_pay",
        paymentMethod: "APPLE_PAY",
        lastUsedAt: null
    };
    const n = "name" in e ? e.name : e.type,
        a = "paymentMethodIdentifier" in e ? e.paymentMethodIdentifier : void 0,
        s = {
            id: a ? ? n,
            name: n,
            paymentMethodIdentifier: a,
            lastUsedAt: null
        };
    switch (e.type) {
        case "offsite":
            return { ...s,
                paymentMethod: "OFFSITE",
                paymentBrands: Array.isArray(e.paymentBrands) ? e.paymentBrands : void 0
            };
        case "manualPayment":
            return { ...s,
                paymentMethod: "MANUAL_PAYMENT"
            };
        case "customManualPayment":
            return { ...s,
                paymentMethod: "CUSTOM_MANUAL_PAYMENT"
            };
        case "paymentOnDelivery":
            return { ...s,
                paymentMethod: "PAYMENT_ON_DELIVERY"
            };
        default:
            return
    }
}
const nC = e => e ? .some(t => Dg.has(t.method.type)) ? ? !1;

function aC(e) {
    let t = !1;
    const n = e.map(a => {
        if (a.method.type === "wallet" && a.method.name === "SHOP_PAY") {
            const r = a.method.walletContent;
            if (r ? .msiEligibleCard) {
                t = !0;
                const {
                    msiEligibleCard: s,
                    ...o
                } = r;
                return { ...a,
                    method: { ...a.method,
                        walletContent: o
                    }
                }
            }
        }
        return a
    });
    return t ? n : e
}

function rC(e) {
    let t = !1;
    const n = e.map(a => {
        if (a.method.type === "wallet" && a.method.name === "SHOP_PAY") {
            const r = a.method.walletContent;
            if (r ? .creditCardInstallments != null) {
                t = !0;
                const {
                    creditCardInstallments: s,
                    ...o
                } = r;
                return { ...a,
                    method: { ...a.method,
                        walletContent: o
                    }
                }
            }
        }
        return a
    });
    return t ? n : e
}
const sC = (e, t, n) => !!(n || e.paymentMethod === "CREDIT_CARD" && Ng(e, t)),
    kg = (e, t) => {
        if (!Qe(e)) return null;
        const n = t.find(a => a.paymentMethod === "IDEAL");
        return {
            method: { ...ut,
                lastUsedAt: n ? .lastUsedAt ? ? null
            },
            isValidForCheckout: !0,
            isExpired: !1,
            isDisabled: !1
        }
    },
    xg = (e, t, n) => {
        if (e.type !== "customOnsite") return null;
        const a = n.find(s => s.paymentMethod === "CUSTOM_ONSITE" && e.paymentBrands.some(o => o.toLowerCase() === s.paymentBrand.toLowerCase())),
            r = t.find(s => s.paymentMethod === "CUSTOM_ONSITE" && e.paymentBrands.some(o => o.toLowerCase() === s.id.toLowerCase()));
        return {
            method: {
                id: e.paymentMethodIdentifier,
                paymentMethod: "CUSTOM_ONSITE",
                paymentBrands: e.paymentBrands,
                lastUsedAt: a ? .lastUsedAt ? ? r ? .lastUsedAt ? ? null
            },
            isValidForCheckout: !0,
            isExpired: !1,
            isDisabled: !1
        }
    },
    jg = (e, t, n) => {
        if (!n || !Je(e)) return null;
        const a = t.find(r => Vt(r));
        return {
            method: { ...Ls,
                lastUsedAt: a ? .lastUsedAt ? ? null
            },
            isValidForCheckout: !0,
            isExpired: !1,
            isDisabled: !1
        }
    },
    wo = {
        offsite: "OFFSITE",
        manualPayment: "MANUAL_PAYMENT",
        customManualPayment: "CUSTOM_MANUAL_PAYMENT",
        paymentOnDelivery: "PAYMENT_ON_DELIVERY"
    };

function Bg(e) {
    return e.type in wo
}
const Ug = (e, t) => {
        if (!Bg(e)) return null;
        const {
            name: n,
            paymentMethodIdentifier: a
        } = e;
        if (!n) return null;
        const r = t.find(d => Mg(d) && d.name.toLowerCase() === n.toLowerCase()),
            s = {
                id: n,
                name: n,
                paymentMethodIdentifier: a,
                lastUsedAt: r ? .lastUsedAt ? ? null
            },
            o = wo[e.type];
        let i;
        switch (o) {
            case "OFFSITE":
                i = { ...s,
                    paymentMethod: "OFFSITE",
                    paymentBrands: e.type === "offsite" ? e.paymentBrands : void 0
                };
                break;
            case "MANUAL_PAYMENT":
                i = { ...s,
                    paymentMethod: "MANUAL_PAYMENT"
                };
                break;
            case "CUSTOM_MANUAL_PAYMENT":
                i = { ...s,
                    paymentMethod: "CUSTOM_MANUAL_PAYMENT"
                };
                break;
            case "PAYMENT_ON_DELIVERY":
                i = { ...s,
                    paymentMethod: "PAYMENT_ON_DELIVERY"
                };
                break
        }
        return {
            method: i,
            isValidForCheckout: !0,
            isExpired: !1,
            isDisabled: !1
        }
    },
    oC = (e, t) => t ? .length ? t.flatMap(n => {
        if (n.type !== "customOnsite") return [];
        const a = n.paymentBrands.some(s => s.toLowerCase() === "ideal"),
            r = e.find(s => n.paymentBrands.some(o => s.paymentMethodName.toLowerCase() === o.toLowerCase()));
        return a ? [{ ...ut,
            lastUsedAt: r ? .lastUsedAt ? ? null
        }] : [{
            id: n.paymentMethodIdentifier,
            paymentMethod: "CUSTOM_ONSITE",
            paymentBrands: n.paymentBrands,
            lastUsedAt: r ? .lastUsedAt ? ? null
        }]
    }) : [],
    Lo = "apple_pay",
    Fg = e => e.paymentMethod === "APPLE_PAY" || e.paymentMethod === "CUSTOM_ONSITE" && e.paymentBrand.toLowerCase() === Lo,
    iC = ({
        vaultedPaymentMethods: e,
        paymentMethodHistory: t,
        isApplePayAvailable: n
    }) => {
        if (!n) return e;
        const a = t.find(Fg);
        return [...e, { ...Ls,
            lastUsedAt: a ? .lastUsedAt ? ? null
        }].sort(Na)
    },
    dC = e => e.some(Vt) ? e.filter(t => !Vt(t)) : e,
    lC = e => e.map(t => {
        const n = t.paymentMethodName.toLowerCase();
        return n === Lo ? {
            paymentMethod: "APPLE_PAY",
            lastUsedAt: t.lastUsedAt
        } : {
            paymentMethod: "CUSTOM_ONSITE",
            paymentBrand: n,
            lastUsedAt: t.lastUsedAt
        }
    }).sort(Na),
    uC = ({
        negotiatedPaymentMethods: e,
        userStoredPaymentMethods: t,
        paymentMethodHistory: n,
        isApplePayAvailable: a
    }) => e ? .length ? e.map(r => kg(r, t) || xg(r, t, n) || jg(r, t, a) || Ug(r, t)).filter(Boolean) : [];

function cC({
    paymentRequiredMethod: e,
    isIdealEnabledForShopPay: t
}) {
    return t && e === "IDEAL" || e === "CUSTOM_ONSITE"
}

function mC({
    paymentMethod: e,
    billingAddressToSelect: t,
    shouldUseLpmBillingAddress: n
}) {
    return _e(e) ? n ? t ? .address : e.paymentAttributes.billingAddress ? .address ? ? t ? .address : t ? .address
}

function _C({
    negotiatedPaymentMethods: e,
    paymentMethod: t,
    observability: n
}) {
    const a = t.paymentMethod;
    switch (a) {
        case "CUSTOM_ONSITE":
        case "IDEAL":
        case "APPLE_PAY":
            {
                const r = Oo(t, e);
                if (!r || !("name" in r)) {
                    n.log("shop_pay_payment_line_name_unavailable", "no negotiated method with a name for the settled Shop Pay selection", {
                        selectedPaymentMethod: a,
                        paymentMethodId: t.id,
                        negotiatedPaymentMethodCount: e ? .length ? ? 0
                    });
                    return
                }
                return r.name
            }
        case "OFFSITE":
        case "MANUAL_PAYMENT":
        case "CUSTOM_MANUAL_PAYMENT":
        case "PAYMENT_ON_DELIVERY":
            return t.name;
        case "CREDIT_CARD":
            return "SHOP_PAY";
        default:
            {
                (s => {
                    n.error(new yg(`Unknown selected payment method ${s}`))
                })(a);
                return
            }
    }
}

function fC({
    addressesForUI: e,
    immutableAddresses: t,
    proposedShippingAddress: n,
    mustSelectProvidedAddress: a
}) {
    const r = sa(n, Ws),
        s = eu(e),
        o = t ? [...e, ...t.map(({
            address: u,
            id: m
        }) => rr(u, m))] : e,
        i = a ? t.map(({
            address: u,
            id: m
        }) => rr(u, m)) : o,
        d = r ? void 0 : i.find(u => Xt(u.address, n, ["phone"])) ? .id;
    return (d ? e.find(u => u.id === d) : null) || s
}

function gC({
    selectedPaymentMethod: e,
    addressesForUI: t,
    proposedShippingAddressId: n
}) {
    const a = n && t.find(o => o.id === n) || null;
    if (!e || !_e(e)) return a;
    const r = e.paymentAttributes.billingAddress.address;
    return t.find(o => Xt(o.address, r, ["phone"])) ? ? a
}

function pC({
    userStoredPaymentMethods: e,
    serverSelectedPaymentMethodId: t,
    currentSelectedPaymentMethod: n,
    negotiatedCardUuid: a
}) {
    if (!e.some(Pg)) return {
        selectedPaymentMethod: Yg({
            userStoredPaymentMethods: e,
            currentSelectedPaymentMethod: n
        }),
        expiredCardPreselectPrevented: !1
    };
    const s = t ? tu(e, t) : void 0,
        o = a ? Ig({
            cards: e.filter(_e),
            paymentAttributeUuid: a
        }) : void 0,
        i = s || o || e[0] || null,
        d = s || o || Lg(e),
        l = !!(d && i && _e(i) && i.paymentAttributes.expired && d.id !== i.id);
    return {
        selectedPaymentMethod: d,
        expiredCardPreselectPrevented: l
    }
}

function Yg({
    userStoredPaymentMethods: e,
    currentSelectedPaymentMethod: t
}) {
    if (!(!t || _e(t))) return e.find(n => n.id === t.id && n.paymentMethod === t.paymentMethod)
}

function SC(e = navigator.userAgent) {
    return /iPhone|iPad|iPod|Android/i.test(e)
}

function Hg(e = navigator.userAgent) {
    return e.includes("wv")
}

function Vg(e = navigator.userAgent) {
    const t = /iPhone|iPod|iPad/i.test(e),
        n = e.includes("AppleWebKit"),
        a = e.includes("Safari");
    return t && n && !a
}

function EC(e = navigator.userAgent) {
    return typeof window < "u" && window.ReactNativeWebView ? !0 : Hg(e) || Vg(e)
}

function AC(e = navigator.userAgent) {
    const t = Hc(e) ? .schemaVersion,
        n = Gc(e) ? .schemaVersion;
    return t ? ? n
}

function vC(e) {
    if (!e) return !1;
    if (/iPhone|iPad|iPod/.test(e) || /Shop App\/[^/]+\/iOS\//.test(e)) return !0;
    const t = /Safari\//.test(e) && /AppleWebKit\//.test(e),
        n = /Chrom(e|ium)\/|Edg(e|A)?\/|OPR\/|SamsungBrowser\//.test(e),
        a = /Firefox\/|FxiOS\//.test(e);
    return t && !n && !a
}

function Gg({
    deferredTotal: e,
    checkoutTotal: t,
    paymentFlexibilityPaymentTermsTemplate: n,
    isCheckoutToDraft: a
}) {
    if (n && e && t && !a) return t
}
const Pa = "_shopify_buyer_membership_key",
    Do = "buy_with_prime",
    zg = {
        key: Pa,
        value: Do
    };

function hC(e) {
    return [...e.filter(t => t.key !== Pa), zg]
}

function bC(e) {
    return e.filter(t => t.key !== Pa || t.value !== Do)
}

function TC({
    shopRequireMatchingShippingAndBilling: e,
    selectedPaymentMethodType: t,
    isShippingRequired: n,
    isOrderSession: a,
    isB2B: r,
    isPickupPointDeliveryMethod: s
}) {
    return e && Wg(t) && n && !a && !r && !s
}

function Wg(e) {
    return e === "offsite" || e === "paymentOnDelivery" || e === "direct"
}

function qg(e, t) {
    return e in t
}

function ko(e) {
    const t = {
            id: N(e.id),
            type: N(e.type),
            deliveryMethodHandle: N(e.deliveryMethodHandle),
            deliveryMethodTypes: N(e.deliveryMethodTypes),
            deliveryMethodOptions: N({
                phone: N(e.deliveryMethodOptions.phone),
                instructions: N(e.deliveryMethodOptions.instructions)
            }),
            externalCustomerId: N(e.externalCustomerId ? ? null),
            externalCheckoutSessionId: N(e.externalCheckoutSessionId ? ? null),
            externalPromiseId: N(e.externalPromiseId ? ? null),
            targetMerchandiseLines: N(e.targetMerchandiseLines ? ? []),
            isCustomRate: N(e.isCustomRate),
            customDeliveryStrategy: N(e.customDeliveryStrategy)
        },
        n = Q(() => {
            const r = t.deliveryMethodOptions.value;
            return {
                id: t.id.value,
                type: t.type.value,
                deliveryMethodHandle: t.deliveryMethodHandle.value,
                deliveryMethodTypes: t.deliveryMethodTypes.value,
                deliveryMethodOptions: {
                    phone: r.phone.value,
                    instructions: r.instructions.value
                },
                externalCustomerId: t.externalCustomerId.value,
                externalCheckoutSessionId: t.externalCheckoutSessionId.value,
                externalPromiseId: t.externalPromiseId.value,
                targetMerchandiseLines: t.targetMerchandiseLines.value,
                isCustomRate: t.isCustomRate.value,
                customDeliveryStrategy: t.customDeliveryStrategy.value
            }
        });
    return new ye(n, r => {
        ve(() => {
            for (const s in r)
                if (qg(s, r))
                    if (s === "deliveryMethodOptions") {
                        if (!r.deliveryMethodOptions) continue;
                        const o = r.deliveryMethodOptions;
                        "instructions" in o && (t.deliveryMethodOptions.value.instructions.value = o.instructions), "phone" in o && (t.deliveryMethodOptions.value.phone.value = o.phone)
                    } else(["deliveryMethodHandle", "externalCustomerId", "externalCheckoutSessionId", "externalPromiseId", "targetMerchandiseLines", "isCustomRate", "customDeliveryStrategy"].includes(s) || r[s]) && (t[s].value = r[s])
        })
    }, t)
}

function yC(e) {
    const t = e.map(n => ko(n));
    return N(t)
}

function IC(e) {
    const t = e[0];
    return e.length !== 1 || !t ? !1 : t.type === "SUBSCRIPTION" && t.methods.some(n => n.displayCheckoutRedesign)
}

function CC(e, t) {
    return t.map((n, a) => {
        const r = e[a];
        if (r) {
            const {
                key: s,
                title: o,
                value: i,
                required: d
            } = r.fields;
            return s.value = n.key, i.value = n.value, o.value = n.title, d.value = n.required, r
        }
        return Kg(n)
    })
}

function Kg(e) {
    const t = N(e.title),
        n = N(e.key),
        a = N(e.value),
        r = N(e.required),
        s = {
            title: t,
            key: n,
            value: a,
            required: r
        },
        o = Q(() => ({
            title: t.value,
            key: n.value,
            value: a.value,
            required: r.value
        }));
    return new ye(o, d => {
        ve(() => {
            for (const [l, u] of Object.entries(d)) {
                const m = s[l];
                m && (m.value = u)
            }
        })
    }, s)
}

function NC(e) {
    return e.get(Wl) === "true" || e.get(ql) === "true"
}
const Xg = {
    name: void 0,
    firstName: void 0,
    lastName: void 0,
    company: void 0,
    address1: void 0,
    address2: void 0,
    city: void 0,
    postalCode: void 0,
    zoneCode: void 0,
    phone: void 0
};

function PC(e) {
    const t = { ...e
    };
    for (const [n, a] of Object.entries(t))(a === null || typeof a == "string" && !a.trim()) && delete t[n];
    return { ...Xg,
        ...t
    }
}

function OC(e) {
    return e ? Object.entries(e).reduce((t, [n, a]) => (a === void 0 || (t[n] = a), t), {}) : {}
}

function $g(e, t) {
    return {
        apiVersion: t.apiVersion,
        appId: t.appId,
        appApiKey: t.apiKey ? ? null,
        appName: t.appName,
        approvalScopes: new Set(t.approvalScopes.map(({
            handle: n
        }) => n)),
        capabilities: {
            apiAccess: t.capabilities.apiAccess,
            blockProgress: t.capabilities.blockProgress,
            collectBuyerConsent: {
                customerPrivacy: t.capabilities.collectBuyerConsent.customerPrivacy,
                smsMarketing: t.capabilities.collectBuyerConsent.smsMarketing
            },
            networkAccess: t.capabilities.networkAccess
        },
        extensionId: t.uuid,
        extensionLocale: t.extensionLocale,
        extensionPoint: {
            target: e,
            metafields: t.metafieldRequests.map(({
                namespace: n,
                key: a
            }) => ({
                namespace: n,
                key: a
            }))
        },
        name: t.name,
        scriptUrl: t.scriptUrl,
        translations: JSON.parse(t.translations),
        version: t.version
    }
}

function Qg(e) {
    return e ? e.map(({
        id: t,
        type: n,
        evidence: a
    }) => ({
        id: t,
        type: n,
        evidence: a
    })) : []
}
class xo extends Error {
    constructor() {
        super(...arguments), this.name = "PaymentError"
    }
}
const kr = e => e.length === 1 || e.length > 1 && e.every(t => typeof t == "string" && t === e[0]),
    Jg = (e, t) => {
        if (e.lines.length === 0 || t.length === 0) return !1;
        const n = t.filter(i => i.paymentMethod.__typename === "DirectPaymentMethod").map(i => i.paymentMethod.paymentMethodIdentifier);
        if (!kr(n)) return !1;
        const r = n[0],
            s = e.lines.filter(i => i.method.type === "direct").map(i => i.method.paymentMethodIdentifier);
        return kr(s) ? s[0] !== r : !1
    },
    Zg = "AfUEYT7nO4BwZQERn9Vym5TbHAG08ptiKa9gm8OARBYgoqiAJIjllRjeIMI4g294KAH1JdTnkzubt1fr",
    ep = "AftTXN0blRv0ltUpXOXhTWgUgyoMXw83iV54WUwm2VFXevA-_z4oWajYoxeWwZ-Y_mK1kxIBBXG0HqQ1",
    RC = e => !e.some(t => t.method.type === "deferred");

function jo(e) {
    return e.method.type === "local" && e.method.name === "IDEAL" || e.method.type === "customOnsite" && e.method.paymentBrands ? .map(t => t.toLowerCase()).includes("ideal") === !0
}

function MC(e) {
    return e.some(jo)
}

function Mt(e) {
    return e.method.type === "direct"
}

function xr(e) {
    return Mt(e) || e.method.type === P.CreditCard
}

function De(e) {
    return e.method.type === "giftCard" || e.method.type === "redeemable"
}

function tp(e) {
    if (!e) return !1;
    const t = e.find(a => a.type === "wallet" && a.name === "PAYPAL_EXPRESS");
    if (!t) return !1;
    const n = t.clientId;
    return !!n && n !== Zg && n !== ep
}

function rn(e, t, n, a) {
    if ((t || n) && e && (a === kn.Fulfillment || a === kn.Receipt)) return {
        event: a
    };
    if (e ? .dueAt) return {
        time: e.dueAt
    }
}

function np(e) {
    return e.method.type === "redeemable"
}

function Bo(e) {
    return e.method.type === "redeemable" && e.method.redemptionSource === "STORE_CREDIT"
}

function zn(e) {
    return e.type === "redeemable" ? e.redemptionSource === "STORE_CREDIT" && e.redemptionContent && "storeCreditAccountId" in e.redemptionContent ? e.redemptionContent.storeCreditAccountId : e.redemptionSource === "CUSTOM" && e.redemptionContent && "redemptionAttributes" in e.redemptionContent ? JSON.stringify(e.redemptionContent.redemptionAttributes) : e.redemptionSource : e.type
}
class Uo extends Error {
    constructor() {
        super(...arguments), this.name = "UnsupportedPaymentMethodError"
    }
}

function Oa(e, t, n) {
    const a = ["wallet", "offsite", "customOnsite", "local"],
        r = e.type === "direct" && e.name !== "shopify_payments" && !e.paymentBrands ? .includes("BOGUS") && e.supportsVaulting !== !0;
    if (n && (a.includes(e.type) || r)) return {
        method: {
            type: "deferred"
        },
        due: t
    };
    if (an(e)) return { ...We(e),
        due: t
    };
    throw new Uo(`${e.type} payment method cannot be used to build a deferred payment line`)
}

function We(e) {
    switch (e.type) {
        case "direct":
            return {
                method: {
                    type: "direct",
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    alternative: e.alternative
                }
            };
        case P.CreditCard:
            return {
                method: {
                    type: P.CreditCard,
                    id: e.id,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    token: e.token,
                    billingAddress: e.billingAddress,
                    brand: e.brand,
                    firstDigits: e.firstDigits,
                    displayLastDigits: e.displayLastDigits,
                    defaultPaymentMethod: e.defaultPaymentMethod,
                    deletable: e.deletable,
                    requiresCvvConfirmation: e.requiresCvvConfirmation
                }
            };
        case P.PayPal:
            return {
                method: {
                    type: P.PayPal,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    token: e.token,
                    billingAddress: e.billingAddress
                }
            };
        case "paymentOnDelivery":
            return {
                method: {
                    type: "paymentOnDelivery",
                    additionalDetails: e.additionalDetails,
                    paymentInstructions: e.paymentInstructions,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    availablePresentmentCurrencies: e.availablePresentmentCurrencies
                }
            };
        case "deferred":
            return {
                method: {
                    type: "deferred"
                }
            };
        case "customManualPayment":
            return {
                method: {
                    id: e.id,
                    type: e.type,
                    name: e.name,
                    additionalDetails: e.additionalDetails,
                    paymentInstructions: e.paymentInstructions,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    availablePresentmentCurrencies: e.availablePresentmentCurrencies
                }
            };
        case "manualPayment":
            return {
                method: {
                    id: e.id,
                    type: e.type,
                    name: e.name,
                    additionalDetails: e.additionalDetails,
                    paymentInstructions: e.paymentInstructions,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    availablePresentmentCurrencies: e.availablePresentmentCurrencies
                }
            };
        case "local":
            return {
                method: {
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    name: e.name,
                    type: e.type
                }
            };
        case "offsite":
        case "customOnsite":
            return {
                method: {
                    type: e.type,
                    name: e.name,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    paymentBrands: e.paymentBrands,
                    popupEnabled: e.popupEnabled
                }
            };
        case "wallet":
            return {
                method: {
                    type: "wallet",
                    name: e.name
                }
            };
        case "walletsPlatform":
            return {
                method: {
                    type: "walletsPlatform",
                    name: e.name
                }
            };
        case "bank":
            return {
                method: {
                    type: "bank",
                    selectedToken: void 0,
                    selectedType: void 0,
                    paymentMethodIdentifier: e.paymentMethodIdentifier
                }
            };
        default:
            throw new Uo(`${e.type} payment method cannot be used to build a payment line`)
    }
}
const Ra = ["PAYPAL_EXPRESS", W.AmazonPay, "SHOP_PAY", "SHOPIFY_INSTALLMENTS", "APPLE_PAY"];

function ap(e) {
    return e.find(t => t.type === P.CreditCard && !t.expired || t.type === P.PayPal)
}

function rp(e, t, n) {
    return t ? .amount ? .amount && n ? {
        lines: [{
            method: e
        }, {
            method: e,
            due: n
        }]
    } : {
        lines: [{
            method: e
        }]
    }
}

function Fo(e) {
    return !(!["customOnsite", "offsite", "deferred", "customManualPayment", "manualPayment", "local", "paymentOnDelivery", "direct", "wallet", P.PayPal, P.CreditCard, "bank"].includes(e.type) || e.type === "wallet" && !Ra.includes(e.name) || e.type === P.CreditCard && e.expired)
}

function Ma(e, t, n, a, r) {
    const s = e.find(Fo);
    if (!s) return {
        lines: []
    };
    const o = rn(t, n, a, r);
    if (s.type === "direct") {
        const i = ap(e);
        if (i) return rp(i, t, o)
    }
    return t ? .amount ? .amount && o && an(s) ? {
        lines: [We(s), Oa(s, o, n)]
    } : {
        lines: [We(s)]
    }
}
const jr = "skip_shop_pay";

function wa(e) {
    return e ? .find(t => t.type === "wallet" && t.name === "SHOP_PAY")
}

function sp(e) {
    return wa(e) ? .isHsaEligible ? ? !1
}

function wC(e) {
    return wa(e) ? .hsaEligibleProducts ? ? []
}

function LC(e) {
    return wa(e) ? .hsaEligibilityState
}

function op({
    buyerMethodsAvailable: e,
    hasRegularSubscriptionPaymentTerms: t,
    sellerLines: n,
    proposedPaymentLines: a,
    shouldFilterUnacceptedStoreCredit: r
}) {
    const s = [...ip({
        buyerMethodsAvailable: e,
        hasRegularSubscriptionPaymentTerms: t,
        sellerLines: n,
        proposedPaymentLines: a
    }), ...dp({
        buyerMethodsAvailable: e,
        hasRegularSubscriptionPaymentTerms: t,
        sellerLines: n,
        proposedPaymentLines: a
    })];
    return r ? lp(s, n) : s
}

function ip({
    buyerMethodsAvailable: e,
    hasRegularSubscriptionPaymentTerms: t,
    sellerLines: n,
    proposedPaymentLines: a
}) {
    const r = n.length > 0 && n.every(De);
    return e || !t || !r || !a.some(De) ? [] : a.filter(s => !De(s))
}

function dp({
    buyerMethodsAvailable: e,
    hasRegularSubscriptionPaymentTerms: t,
    sellerLines: n,
    proposedPaymentLines: a
}) {
    return e || !t || !n.some(xr) || n.some(De) || !a.some(xr) ? [] : a.filter(De)
}

function lp(e, t) {
    return e.filter(n => Bo(n) ? t.includes(n) : !0)
}
const Yo = new Set(["CAPTCHA_METADATA_MISSING", "CAPTCHA_METADATA_MISMATCH", "CAPTCHA_TOKEN_MISSING", "CAPTCHA_JOB_ENQUEUE_FAILED", "CAPTCHA_TOKEN_EXPIRED", "CAPTCHA_TOKEN_INVALID", "CAPTCHA_TOKEN_NOT_VALID_FOR_SESSION"]);

function DC(e, t) {
    if (!e || e.__typename !== "Captcha") return;
    const {
        provider: n,
        challenge: a,
        sitekey: r,
        token: s
    } = e;
    if (!n || !a) return;
    const o = t ? t.find(i => Yo.has(i.code)) : void 0;
    return {
        provider: n,
        challenge: a,
        sitekey: r || void 0,
        token: s || void 0,
        violationCode: o ? .code
    }
}

function up(e = []) {
    const t = [];
    return e.includes("deliveryNext") || t.push("delivery-method"), e.includes("paymentLines") || (t.push("payment-terms-changed"), t.push("payment-session")), e.includes("billingAddress") || t.push("payment-address"), e.includes("captcha") || t.push("captcha"), e.includes("localizationExtensions") || t.push("localization-extension"), t
}
up();

function cp(e) {
    return [...e].filter(t => !ac.has(t.code))
}

function mp(e, t) {
    let n = cp(e);
    if (!t || t.length === 0) return n;
    if (t.includes("all")) return n.filter(r => bp(r));
    t.includes("delivery-method") && (n = n.filter(r => !gp(r))), t.includes("delivery-line-detail") && (n = n.filter(r => !Sp(r))), t.includes("non-merchandise") && (n = n.filter(r => Tp(r))), t.includes("payment-session") && (n = n.filter(r => !Ap(r))), t.includes("payment-address") && (n = n.filter(r => !Ur(r))), t.includes("payment-terms-changed") && (n = n.filter(r => !Ep(r))), t.includes("captcha") && (n = n.filter(r => !vp(r))), t.includes("localization-extension") && (n = n.filter(r => !hp(r)));
    const a = t.filter(r => r.startsWith(mc));
    return a.length > 0 && (n = n.filter(r => !("target" in r) || !a.some(s => s === r.target))), t.includes("non-giftcard") && t.includes("non-stock") ? n.filter(r => Br(r) || Fn(r)) : t.includes("non-giftcard") ? n.filter(Br) : t.includes("non-stock") ? n.filter(Fn) : t.includes("non-store-credit") ? n.filter(Ho) : t.includes("non-delivery-address") ? n.filter(pp) : t.includes("non-shop-cash") ? n.filter(r => fp(r) || Ur(r)) : n
}
const kC = e => e ? .session ? .negotiate ? .result ? .__typename === "NegotiationResultAvailable" && e ? .session ? .negotiate ? .result ? .sellerProposal ? (e ? .session ? .negotiate).errors : [],
    xC = e => {
        if (e ? .session ? .negotiate ? .result ? .__typename === "NegotiationResultAvailable" && e ? .session ? .negotiate ? .result ? .sellerProposal) {
            const t = e ? .session ? .negotiate ? .result ? .sellerProposal,
                n = e ? .session ? .negotiate;
            if (n.errors.length === 0) return n.errors;
            const a = [_p],
                r = [];
            return a.forEach(o => {
                const i = o(t);
                r.push(...i)
            }), mp(n.errors, r)
        }
    },
    _p = e => {
        if (e.payment.__typename !== "FilledPaymentTerms") return [];
        const t = e.payment.paymentLines.find(s => s.paymentMethod.__typename === "WalletPaymentMethod" && s.paymentMethod.name === "PAYPAL_EXPRESS");
        if (t ? .paymentMethod.__typename !== "WalletPaymentMethod" || t ? .paymentMethod.walletContent.__typename !== "PaypalWalletContent") return [];
        const n = t.paymentMethod.walletContent,
            a = n ? .email ? ? void 0,
            r = n ? .token ? ? void 0;
        return a && r ? ["delivery-method"] : []
    };

function Br(e) {
    return Bs.has(e.code)
}

function Ho(e) {
    return Ru.has(e.code)
}

function fp(e) {
    return ju.has(e.code)
}

function jC(e) {
    return Bu.has(e.code)
}

function BC(e) {
    return e && Us.has(e)
}

function UC(e) {
    return e && Tu.has(e)
}

function FC(e) {
    return e && yu.has(e)
}

function YC(e) {
    return e && Mu.has(e)
}

function gp(e) {
    return ku.has(e.code)
}

function pp(e) {
    return Ys.has(e.code)
}

function Sp(e) {
    return e.code === "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED"
}

function Ur(e) {
    return Wu.has(e.code)
}

function Ep(e) {
    return Us.has(e.code)
}

function Ap(e) {
    return Uu.has(e.code)
}

function vp(e) {
    return Yo.has(e.code)
}

function hp(e) {
    return e.code === "LOCALIZATION_EXTENSION_FIELD_ERROR"
}

function bp(e) {
    return Du.has(e.code)
}

function HC(e) {
    const t = new Set;
    return n => {
        const a = t.has(n[e]);
        return t.add(n[e]), !a
    }
}

function Tp(e) {
    return Lu.has(e.code)
}
const yp = "WalletsPlatformPaymentMethod",
    Wn = {
        get: () => "dedicated"
    };

function Ip({
    hasSellingPlan: e,
    hasFixedSellingPlan: t,
    paymentTermsTemplateType: n
}) {
    return e && !t && (n == null || n === "FULFILLMENT")
}
class Cp extends Error {
    constructor() {
        super(...arguments), this.name = "PaymentLineMissingDueError"
    }
}
class qn extends Error {
    constructor() {
        super(...arguments), this.name = "BankPaymentTokenRecoveryError"
    }
}

function VC({
    payment: e,
    sortedPaymentMethods: t,
    runningTotal: n,
    paymentDue: a,
    deferredTotal: r,
    checkoutTotal: s,
    paymentMethodAutoSelectionDisabled: o,
    requiresVaulting: i,
    proposedPaymentLines: d,
    hasPayableDeposit: l,
    hasFixedSellingPlan: u,
    paymentTermsTemplateType: m,
    preserveAllocatedImmediatePaymentLineAmount: c,
    observability: _
}) {
    if (!e || e.__typename !== "FilledPaymentTerms") return {
        lines: []
    };
    const f = { ...e,
            paymentLines: e.paymentLines.filter(({
                paymentMethod: g
            }) => g.__typename !== "NoopPaymentMethod")
        },
        b = d ? .find(g => g.method.type === "direct") ? .method;
    if (b && b.alternative) return {
        lines: []
    };
    const E = o ? {
            lines: []
        } : Ma(t, r, l, u, m),
        I = f.paymentLines.length === 0,
        h = Jg(E, e.paymentLines);
    if (I || Yp(e.paymentLines, l ? ? !1, r) || h) return {
        lines: E.lines
    };
    const B = xp({
            payment: f,
            paymentDue: a,
            runningTotal: n,
            deferredTotal: r,
            checkoutTotal: s,
            hasPayableDeposit: l ? ? !1,
            hasFixedSellingPlan: u ? ? !1,
            paymentTermsTemplateType: m,
            preserveAllocatedImmediatePaymentLineAmount: c ? ? !1,
            observability: _,
            proposedPaymentLines: d
        }),
        S = e.paymentLines.some(g => g.amount.__typename === "AnyConstraint");
    return B.length > 0 && !S && n ? .amount && a ? .amount && a ? .amount < n ? .amount || i ? {
        lines: Bp(B, E)
    } : {
        lines: B
    }
}
const Kn = (e, t = !1) => {
        if (t) {
            if (e.method.type === "giftCard") return [e.method.type, e.method.code].join("_");
            if (e.method.type === "redeemable") return [e.method.type, zn(e.method)].join("_")
        }
        return [e.method.type, ("name" in e.method && e.method.name) ? ? "", ("firstDigits" in e.method && e.method.firstDigits) ? ? "", ("displayLastFourDigits" in e.method && e.method.displayLastFourDigits) ? ? ""].join("_")
    },
    Np = (e, t = !1) => e.reduce((n, a, r) => {
        const s = Kn(a, t);
        return n[s] = n[s] || [], n[s].push(r), n
    }, {});

function Vo(e, t) {
    switch (e.type) {
        case "wallet":
            return t.type === "wallet" && e.name === t.name;
        case "walletsPlatformPaymentMethod":
            return t.type === "walletsPlatform" && e.name === t.name;
        case "redeemable":
            return t.type === "redeemable" && e.redemptionSource === t.redemptionSource;
        case P.CreditCard:
            return t.type === P.CreditCard && e.token === t.token;
        default:
            return e.type === t.type
    }
}

function Pp(e, t) {
    function n(s) {
        return s.method.type === "direct" ? s.due ? 1 : 0 : s.method.type === "deferred" ? 3 : 2
    }
    const a = n(e),
        r = n(t);
    return a - r
}

function Op(e) {
    return e.type === "wallet" && e.name === "SHOP_PAY"
}

function Rp(e) {
    return e.type === "direct"
}

function Mp(e) {
    return !!e ? .some(t => Op(t) || Rp(t))
}

function wp(e = [], t = []) {
    return e.every(n => n.method.type === "deferred" && e.length > 1 ? !0 : t.some(a => a.type === P.CreditCard && a.expired ? !1 : Vo(n.method, a)))
}

function Lp(e, t, n) {
    if (!t || t.length === 0) return e;
    if (!e) return;
    const a = n && n.amount.amount > 0;
    return e.some(o => o.due) && !a ? e.filter(o => !o.due) : t ? .some(o => o.code === "PAYMENTS_CREDIT_CARD_SESSION_ID") ? e.filter(o => o.method.type !== "direct") : e
}

function Dp(e, t) {
    return t.find(a => e.some(r => Vo(r.method, a)))
}

function GC({
    paymentLines: e,
    proposedPaymentLines: t,
    availablePaymentMethods: n = [],
    violations: a,
    url: r,
    deferredTotal: s,
    shouldNotSetInitialState: o,
    fixSubscriptionRedeemablePaymentAmount: i = !1,
    isImmediateAmountReducedForRedeemables: d = !1,
    hasSellingPlan: l,
    hasFixedSellingPlan: u,
    hasPayableDeposit: m,
    paymentTermsTemplateType: c,
    observability: _,
    delegatedPaymentInstrument: f,
    bankPaymentToken: b
}) {
    const E = Lp(t, a, s);
    if (!E || E.length === 0) {
        const A = n.some(Je),
            O = !!(typeof window > "u" ? r ? .searchParams ? .get(jr) : new URL(window.location.href).searchParams.get(jr)),
            V = !A,
            Y = n.filter(G => O && G.type === "wallet" && G.name === "SHOP_PAY" || V && G.type === "wallet" && G.name === "APPLE_PAY" ? !1 : Fo(G));
        return e.length ? e : Y.length && !o ? Ma(Y, s, m, u, c).lines : []
    }
    const I = [],
        h = Np(E, i),
        v = f != null && "handler_id" in f && f.handler_id === "gpay",
        B = Mp(n) && E.some(A => A.method.type === "shopWallet"),
        S = v || B || wp(E, n);
    if (!S && _) {
        const A = E ? .find(j => j.method.type === "bank");
        A && (!!A.method.selectedToken ? _.error(new qn("Bank payment token at risk: buyerMethodsAvailable is false but proposed bank line has selectedToken")) : _.error(new qn("Bank payment line present but buyerMethodsAvailable is false and selectedToken is already missing")))
    }
    const T = S ? e.filter(A => A.method.type === "giftCard" || !!h[Kn(A, i)]) : e,
        g = a ? .some(A => Ho(A)),
        p = !!n ? .find(A => A.type === "redeemable" && A.redemptionSource === "STORE_CREDIT"),
        y = g || !p,
        M = Ip({
            hasSellingPlan: l ? ? !1,
            hasFixedSellingPlan: u ? ? !1,
            paymentTermsTemplateType: c
        }),
        R = i && !d ? op({
            buyerMethodsAvailable: S,
            hasRegularSubscriptionPaymentTerms: M,
            sellerLines: T,
            proposedPaymentLines: E,
            shouldFilterUnacceptedStoreCredit: y
        }) : [],
        U = E.find(Mt),
        H = E.find(A => A.method.type === "bank"),
        k = [];
    if (T.forEach(A => {
            const j = Kn(A, i);
            if (k.push(...h[j] || []), Mt(A) && U) {
                const {
                    sessionId: O,
                    paymentAttributes: V,
                    creditCardInstallments: Y
                } = U.method;
                I.push({ ...A,
                    method: { ...A.method,
                        ...O && {
                            sessionId: O
                        },
                        ...V && {
                            paymentAttributes: V
                        },
                        ...Y != null && {
                            creditCardInstallments: Y
                        }
                    }
                })
            } else if (A.method.type === P.CreditCard) {
                const O = A.method.token,
                    Y = E.find(G => G.method.type === P.CreditCard && G.method.token === O) ? .method.creditCardInstallments;
                I.push({ ...A,
                    method: { ...A.method,
                        ...Y != null && {
                            creditCardInstallments: Y
                        }
                    }
                })
            } else if (A.method.type === "shopWallet") {
                const O = E.find(V => V.method.type === "shopWallet") ? .method.shopPayApprovalId;
                I.push(O ? { ...A,
                    method: { ...A.method,
                        shopPayApprovalId: O
                    }
                } : A)
            } else if (A.method.type === "bank") {
                const O = b ? ? H ? .method,
                    V = O ? .selectedToken,
                    Y = O ? .selectedType;
                I.push({ ...A,
                    method: { ...A.method,
                        ...V && {
                            selectedToken: V
                        },
                        ...Y && {
                            selectedType: Y
                        }
                    }
                })
            } else if (i && np(A)) {
                const O = zn(A.method),
                    V = E.find(G => G.method.type === "redeemable" && zn(G.method) === O),
                    Y = M && !d && (A.cost == null || A.cost.amount <= 0) && V ? .cost != null && V.cost.amount > 0;
                I.push({ ...A,
                    ...Y && {
                        cost: V.cost
                    }
                })
            } else if (A.method.type === "wallet" && A.method.name === "SHOP_PAY") {
                const O = A.method.walletContent,
                    Y = Te(E, "SHOP_PAY") ? .method.walletContent,
                    G = Y ? .creditCardInstallments ? ? U ? .method.creditCardInstallments,
                    Ie = Y ? .msiEligibleCard,
                    Fe = sp(n) && Y ? .hsaRequested === !0,
                    at = O != null || G != null || Ie || Fe;
                I.push({ ...A,
                    method: { ...A.method,
                        ...at && {
                            walletContent: { ...O,
                                ...G != null && {
                                    creditCardInstallments: G
                                },
                                ...Ie && {
                                    msiEligibleCard: Ie
                                },
                                hsaRequested: Fe
                            }
                        }
                    }
                })
            } else I.push(A)
        }), S) {
        const A = new Set(k);
        let j = E.filter((Y, G) => !A.has(G));
        const O = Dp(j, n),
            V = rn(s, m, u, c);
        O && s ? .amount ? .amount && V && an(O) && j.every(Y => !Y.due) && (j = [...j, Oa(O, V, m)]), y && (j = kp(j, T)), I.push(...j)
    }
    return R.length > 0 && I.push(...R), I.forEach(A => {
        Mt(A) && (A.method.paymentMethodIdentifier = A.method.paymentMethodIdentifier ? ? "")
    }), I.sort(Pp)
}

function kp(e, t) {
    return e.filter(n => Bo(n) ? t.includes(n) : !0)
}

function xp({
    payment: e,
    runningTotal: t,
    paymentDue: n,
    deferredTotal: a,
    checkoutTotal: r,
    hasFixedSellingPlan: s,
    hasPayableDeposit: o,
    paymentTermsTemplateType: i,
    preserveAllocatedImmediatePaymentLineAmount: d = !1,
    observability: l,
    proposedPaymentLines: u
}) {
    return e == null || e.__typename !== "FilledPaymentTerms" ? [] : e.paymentLines.map(m => {
        const {
            paymentMethod: c,
            specialInstructions: _,
            amount: f,
            dueAt: b,
            due: E
        } = m, I = b && !E ? (l && l.error(new Cp), b) : E, h = rn(a, o, s, i);
        let v = {
            amount: 0,
            currencyCode: t ? .currencyCode ? ? "CAD"
        };
        const B = Xn(m) && a ? .amount && h && r,
            S = !!(Xn(m) && h && I);
        switch (n && ["DirectPaymentMethod", "WalletPaymentMethod", "LocalPaymentMethod", "OffsitePaymentMethod", "CustomOnsitePaymentMethod", "CustomerCreditCardPaymentMethod", "PaypalBillingAgreementPaymentMethod", "DeferredPaymentMethod", "ManualPaymentMethod", "PaymentOnDeliveryMethod", "CustomPaymentMethod", "BankPaymentInstrument", "ShopWalletPaymentInstrument"].includes(c.__typename) ? B ? S ? v = a.amount : d ? v = f.__typename === "MoneyValueConstraint" ? L(f) : n : v = r : v = n : (c.__typename === "GiftCardPaymentMethod" && f.__typename === "MoneyValueConstraint" || c.__typename === "RedeemablePaymentMethod" && f.__typename === "MoneyValueConstraint") && (v = L(f)), c.__typename) {
            case "DirectPaymentMethod":
                return {
                    cost: v,
                    due: S ? h : void 0,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        type: "direct",
                        sessionId: c.sessionId,
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? "",
                        creditCardFirstDigits: c.creditCard ? .firstDigits ? ? void 0,
                        creditCardLastFourDigits: c.creditCard ? .lastDigits ? ? void 0,
                        brand: c.creditCard ? .brand ? ? void 0,
                        cardholderName: c.creditCard ? .name ? ? void 0,
                        paymentAttributes: c.paymentAttributes ? ? void 0
                    }
                };
            case "GiftCardPaymentMethod":
                return {
                    stableId: m.stableId,
                    cost: v,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        type: "giftCard",
                        code: c.code,
                        balance: {
                            amount: parseFloat(c.balance.amount),
                            currencyCode: v.currencyCode
                        }
                    }
                };
            case "RedeemablePaymentMethod":
                return {
                    cost: v,
                    method: Fp(c)
                };
            case "WalletPaymentMethod":
                {
                    if (c.walletContent.__typename === "ShopPayWalletContent") {
                        const {
                            billingAddress: T,
                            sessionToken: g,
                            paymentMethodIdentifier: p,
                            hsaRequested: y
                        } = c.walletContent;
                        return {
                            cost: v,
                            specialInstructions: _ ? ? void 0,
                            method: {
                                type: "wallet",
                                name: c.name,
                                walletContent: {
                                    paymentMethod: "CREDIT_CARD",
                                    billingAddress: Bn(ee(T), {
                                        extendedAddressMode: Wn
                                    }),
                                    sessionToken: g,
                                    paymentMethodIdentifier: p ? ? "",
                                    ...y != null && {
                                        hsaRequested: y
                                    }
                                }
                            }
                        }
                    }
                    if (c.walletContent.__typename === "PaypalWalletContent") {
                        const {
                            email: T,
                            payerId: g,
                            token: p,
                            paymentMethodIdentifier: y,
                            merchantId: M,
                            payerApprovedAmount: R,
                            expiresAt: U,
                            currencyCode: H,
                            isVaultWithPurchaseOrder: k,
                            isVenmo: A,
                            authAssertionContext: j
                        } = c.walletContent, O = Te(u, "PAYPAL_EXPRESS") ? .method.walletContent, V = k || O ? .token === p && O.isVaultWithPurchaseOrder, Y = j ? ? (O ? .token === p ? O.authAssertionContext : void 0);
                        return {
                            cost: v,
                            due: S ? h : void 0,
                            specialInstructions: _ ? ? void 0,
                            method: {
                                type: "wallet",
                                name: c.name,
                                walletContent: {
                                    email: T,
                                    payerId: g,
                                    token: p,
                                    expiresAt: U ? ? void 0,
                                    currencyCode: H ? ? void 0,
                                    ...Y && {
                                        authAssertionContext: Y
                                    },
                                    ...V && {
                                        isVaultWithPurchaseOrder: !0
                                    },
                                    isVenmo: A ? ? void 0,
                                    acceptedSubscriptionTerms: c.walletContent.acceptedSubscriptionTerms || !1,
                                    paymentMethodIdentifier: y ? ? "",
                                    merchantId: M ? ? void 0,
                                    ...R && {
                                        payerApprovedAmount: R
                                    }
                                }
                            }
                        }
                    }
                    if (c.walletContent.__typename === "GooglePayWalletContent") {
                        const {
                            signature: T,
                            signedMessage: g,
                            protocolVersion: p,
                            sessionId: y,
                            paymentMethodIdentifier: M
                        } = c.walletContent;
                        return {
                            cost: v,
                            specialInstructions: _ ? ? void 0,
                            method: {
                                type: "wallet",
                                name: c.name,
                                walletContent: {
                                    signature: T,
                                    signedMessage: g,
                                    protocolVersion: p,
                                    sessionId: y ? ? void 0,
                                    paymentMethodIdentifier: M ? ? void 0
                                }
                            }
                        }
                    }
                    if (c.walletContent.__typename === "ApplePayWalletContent") {
                        const {
                            data: T,
                            signature: g,
                            version: p,
                            lastDigits: y,
                            cardNetworkBrand: M,
                            header: R,
                            paymentMethodIdentifier: U,
                            expiresAt: H
                        } = c.walletContent;
                        return {
                            cost: v,
                            specialInstructions: _ ? ? void 0,
                            method: {
                                type: "wallet",
                                name: c.name,
                                walletContent: {
                                    data: T,
                                    signature: g,
                                    version: p,
                                    lastDigits: y ? ? void 0,
                                    cardNetworkBrand: M ? ? void 0,
                                    header: R ? ? void 0,
                                    paymentMethodIdentifier: U ? ? void 0,
                                    expiresAt: H ? ? void 0
                                }
                            }
                        }
                    }
                    if (c.walletContent.__typename === "ShopifyInstallmentsWalletContent") {
                        const {
                            autoPayEnabled: T,
                            billingAddress: g,
                            disclosureDetails: p,
                            installmentsToken: y,
                            sessionToken: M,
                            paymentMethodIdentifier: R
                        } = c.walletContent;
                        return {
                            cost: v,
                            specialInstructions: _ ? ? void 0,
                            method: {
                                type: "wallet",
                                name: c.name,
                                walletContent: {
                                    autoPayEnabled: T,
                                    billingAddress: Bn(ee(g), {
                                        extendedAddressMode: Wn
                                    }),
                                    disclosureDetails: Qg(p),
                                    installmentsToken: y,
                                    sessionToken: M,
                                    paymentMethodIdentifier: R ? ? ""
                                }
                            }
                        }
                    }
                    return {
                        cost: v,
                        specialInstructions: _ ? ? void 0,
                        method: {
                            type: "wallet",
                            name: c.name
                        }
                    }
                }
            case yp:
                return {
                    cost: v,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        walletParams: c.walletParams,
                        type: "walletsPlatformPaymentMethod",
                        name: c.name
                    }
                };
            case "LocalPaymentMethod":
                return {
                    cost: v,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        type: "local",
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? "",
                        name: c.name
                    }
                };
            case "PaymentOnDeliveryMethod":
                return {
                    method: {
                        type: "paymentOnDelivery",
                        additionalDetails: c.additionalDetails ? ? "",
                        paymentInstructions: c.paymentInstructions ? ? "",
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? "",
                        availablePresentmentCurrencies: []
                    },
                    ...S && h ? {
                        due: h
                    } : {}
                };
            case "ManualPaymentMethod":
                return {
                    method: {
                        type: "manualPayment",
                        id: c.id,
                        name: c.name,
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? "",
                        availablePresentmentCurrencies: []
                    },
                    ...S && h ? {
                        due: h
                    } : {}
                };
            case "CustomPaymentMethod":
                return {
                    method: {
                        type: "customManualPayment",
                        id: c.id,
                        name: c.name ? ? "",
                        additionalDetails: c.additionalDetails ? ? "",
                        paymentInstructions: c.paymentInstructions ? ? "",
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? "",
                        availablePresentmentCurrencies: []
                    },
                    ...S && h ? {
                        due: h
                    } : {}
                };
            case "OffsitePaymentMethod":
            case "CustomOnsitePaymentMethod":
                {
                    const T = e.availablePaymentLines.find(({
                            paymentMethod: p
                        }) => (p.__typename === "OffsiteProvider" || p.__typename === "CustomOnsiteProvider") && p.paymentMethodIdentifier === c.paymentMethodIdentifier) ? .paymentMethod,
                        g = {
                            paymentMethodIdentifier: c.paymentMethodIdentifier ? ? void 0,
                            name: c.name,
                            paymentBrands: T ? .paymentBrands,
                            popupEnabled: T ? .popupEnabled ? ? !1
                        };
                    return {
                        cost: v,
                        specialInstructions: _ ? ? void 0,
                        method: c.__typename === "OffsitePaymentMethod" ? { ...g,
                            type: "offsite"
                        } : { ...g,
                            type: "customOnsite",
                            paymentAttributes: c.paymentAttributes ? ? ""
                        }
                    }
                }
            case "DeferredPaymentMethod":
                return {
                    cost: v,
                    method: {
                        type: "deferred"
                    },
                    due: S ? h : void 0
                };
            case "CustomerCreditCardPaymentMethod":
                return {
                    cost: v,
                    due: S ? h : void 0,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        type: P.CreditCard,
                        id: c.id,
                        cvvSessionId: c.cvvSessionId,
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? void 0,
                        token: c.token,
                        billingAddress: ee(c.billingAddress),
                        brand: c.brand,
                        firstDigits: c.firstDigits ? ? void 0,
                        displayLastDigits: c.displayLastDigits,
                        defaultPaymentMethod: c.defaultPaymentMethod,
                        deletable: c.deletable,
                        requiresCvvConfirmation: c.requiresCvvConfirmation
                    }
                };
            case "PaypalBillingAgreementPaymentMethod":
                return {
                    cost: v,
                    due: S ? h : void 0,
                    specialInstructions: _ ? ? void 0,
                    method: {
                        type: P.PayPal,
                        paymentMethodIdentifier: c.paymentMethodIdentifier ? ? void 0,
                        token: c.token,
                        billingAddress: ee(c.billingAddress)
                    }
                };
            case "BankPaymentInstrument":
                {
                    const T = u ? .find(g => g.method.type === "bank" && g.method.paymentMethodIdentifier === c.paymentMethodIdentifier);
                    return T && !T.method.selectedToken && l ? .error(new qn("Bank payment token recovery failed in paymentLinesForUI: selectedToken is undefined on BankPaymentInstrument line")),
                    {
                        cost: v,
                        due: S ? h : void 0,
                        specialInstructions: _ ? ? void 0,
                        method: {
                            type: "bank",
                            paymentMethodIdentifier: c.paymentMethodIdentifier,
                            selectedToken: T ? .method ? .selectedToken ? ? void 0,
                            selectedType: T ? .method ? .selectedType ? ? void 0
                        }
                    }
                }
            case "ShopWalletPaymentInstrument":
                {
                    const T = u ? .find(g => g.method.type === "shopWallet");
                    return {
                        cost: v,
                        due: S ? h : void 0,
                        specialInstructions: _ ? ? void 0,
                        method: {
                            type: "shopWallet",
                            token: c.token ? ? void 0,
                            cardId: c.cardId ? ? void 0,
                            shopPayApprovalId: T ? .method.shopPayApprovalId
                        }
                    }
                }
            default:
                throw new xo(`Can’t handle payment line: ${JSON.stringify(c)}`)
        }
    })
}
const jp = ["direct", "shopWallet", "wallet", "local", "paymentOnDelivery", "offsite", "customManualPayment", "customOnsite", P.CreditCard, P.PayPal, "deferred"];

function Bp(e, t) {
    return e.some(({
        method: {
            type: a
        }
    }) => jp.includes(a)) ? e : [...t.lines, ...e]
}

function Up(e, t) {
    return e.some(n => n.type === "direct" && !!n.alternative === t)
}

function zC(e, t) {
    const n = (() => {
            if (t.length > 0) {
                const s = e ? .__typename === "FilledPaymentTerms" ? e.availablePaymentLines.filter(({
                    paymentMethod: o
                }) => o.__typename === "AnyGiftCardPaymentMethod" || o.__typename === "AnyRedeemablePaymentMethod") : [];
                return [...t, ...s]
            } else if (e ? .__typename === "FilledPaymentTerms") return e.availablePaymentLines;
            return []
        })(),
        a = [];
    try {
        for (const {
                paymentMethod: s,
                placements: o
            } of n) switch (s.__typename) {
            case "PaymentProvider":
                {
                    const {
                        paymentBrands: i,
                        paymentMethodIdentifier: d,
                        orderingIndex: l,
                        displayName: u,
                        extensibilityDisplayName: m,
                        name: c,
                        availablePresentmentCurrencies: _,
                        paymentMethodUiExtension: f,
                        checkoutHostedFields: b,
                        alternative: E,
                        supportsNetworkSelection: I,
                        supportsVaulting: h,
                        installmentPlans: v
                    } = s;
                    if (Up(a, E)) break;a.push({
                        type: "direct",
                        paymentBrands: i,
                        paymentMethodIdentifier: d,
                        orderingIndex: l,
                        displayName: u,
                        extensibilityDisplayName: m,
                        name: c,
                        availablePresentmentCurrencies: _,
                        uiExtension: f ? Cn(f, "Checkout::PaymentMethod::HostedFields::RenderAfter") : void 0,
                        checkoutHostedFields: b,
                        alternative: E,
                        placements: o,
                        supportsNetworkSelection: I,
                        supportsVaulting: h,
                        installmentPlans: v ? ? void 0
                    });
                    break
                }
            case "AnyGiftCardPaymentMethod":
                a.push({
                    type: "giftCard",
                    orderingIndex: Number.MAX_SAFE_INTEGER,
                    placements: o
                });
                break;
            case "WalletsPlatformConfiguration":
                switch (s.name) {
                    case W.AmazonPay:
                    case W.BuyWithPrime:
                        a.push({
                            type: "walletsPlatform",
                            name: s.name,
                            configurationParams: s.configurationParams,
                            orderingIndex: Number.MAX_SAFE_INTEGER,
                            paymentMethodIdentifier: s.paymentMethodIdentifier ? ? void 0,
                            placements: o
                        });
                        break;
                    default:
                        de(s)
                }
                break;
            case "PaypalWalletConfig":
                a.push({
                    type: "wallet",
                    name: "PAYPAL_EXPRESS",
                    clientId: s.clientId ? ? void 0,
                    gatewayType: s.gatewayType,
                    merchantId: s.merchantId ? ? void 0,
                    venmoEnabled: s.venmoEnabled,
                    payflow: s.payflow,
                    paymentIntent: s.paymentIntent,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o,
                    clientToken: s.clientToken ? ? void 0,
                    supportsVaulting: s.supportsVaulting,
                    sandboxTestMode: s.sandboxTestMode ? ? !1
                });
                break;
            case "VenmoWalletConfig":
                a.push({
                    type: "wallet",
                    name: "VENMO",
                    clientId: s.clientId ? ? void 0,
                    merchantId: s.merchantId ? ? void 0,
                    paymentIntent: s.paymentIntent,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o,
                    clientToken: s.clientToken ? ? void 0,
                    sandboxTestMode: s.sandboxTestMode ? ? !1
                });
                break;
            case "ShopPayWalletConfig":
                a.push({
                    type: "wallet",
                    name: "SHOP_PAY",
                    storefrontUrl: s.storefrontUrl,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o,
                    eligibilityToken: s.eligibilityToken ? ? void 0,
                    isHsaEligible: s.isHsaEligible,
                    hsaEligibilityState: s.hsaEligibilityState,
                    hsaEligibleProducts: s.hsaEligibleProducts ? ? []
                });
                break;
            case "ApplePayWalletConfig":
                a.push({
                    type: "wallet",
                    name: "APPLE_PAY",
                    supportedNetworks: s.supportedNetworks,
                    walletAuthenticationToken: s.walletAuthenticationToken ? ? null,
                    walletServiceUrl: s.walletServiceUrl ? ? null,
                    walletOrderTypeIdentifier: s.walletOrderTypeIdentifier ? ? null,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o
                });
                break;
            case "GooglePayWalletConfig":
                a.push({
                    type: "wallet",
                    name: "GOOGLE_PAY",
                    allowedAuthMethods: s.allowedAuthMethods,
                    allowedCardNetworks: s.allowedCardNetworks,
                    gateway: s.gateway,
                    gatewayMerchantId: s.gatewayMerchantId,
                    merchantId: s.merchantId,
                    authJwt: s.authJwt,
                    environment: s.environment,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o
                });
                break;
            case "ShopifyInstallmentsWalletConfig":
                a.push({
                    type: "wallet",
                    name: "SHOPIFY_INSTALLMENTS",
                    sellerId: s.sellerId ? ? void 0,
                    cbtEnabled: s.cbtEnabled,
                    financingPlans: s.financingPlans,
                    merchantCountry: s.merchantCountry,
                    availableLoanTypes: s.availableLoanTypes,
                    maxPrice: {
                        amount: parseFloat(s.maxPrice.amount),
                        currencyCode: s.maxPrice.currencyCode
                    },
                    minPrice: {
                        amount: parseFloat(s.minPrice.amount),
                        currencyCode: s.minPrice.currencyCode
                    },
                    supportedCountries: s.supportedCountries,
                    supportedCurrencies: s.supportedCurrencies,
                    creditCardEnabledCountries: s.creditCardEnabledCountries,
                    giftCardsNotAllowed: s.giftCardsNotAllowed,
                    subscriptionItemsNotAllowed: s.subscriptionItemsNotAllowed,
                    ineligibleTestModeCheckout: s.ineligibleTestModeCheckout,
                    ineligibleLineItem: s.ineligibleLineItem,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    placements: o
                });
                break;
            case "LocalPaymentMethodConfig":
                a.push({
                    type: "local",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    name: s.name,
                    displayName: s.displayName,
                    orderingIndex: s.orderingIndex,
                    placements: o
                });
                break;
            case "AnyPaymentOnDeliveryMethod":
                a.push({
                    type: "paymentOnDelivery",
                    additionalDetails: s.additionalDetails ? ? "",
                    paymentInstructions: s.paymentInstructions ? ? "",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    name: s.name,
                    availablePresentmentCurrencies: s.availablePresentmentCurrencies,
                    placements: o
                });
                break;
            case "ManualPaymentMethodConfig":
                a.push({
                    type: "manualPayment",
                    id: s.id,
                    name: s.name ? ? "",
                    additionalDetails: s.additionalDetails ? ? "",
                    paymentInstructions: s.paymentInstructions ? ? "",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    availablePresentmentCurrencies: s.availablePresentmentCurrencies,
                    placements: o
                });
                break;
            case "CustomPaymentMethodConfig":
                a.push({
                    type: "customManualPayment",
                    id: s.id,
                    name: s.name ? ? "",
                    additionalDetails: s.additionalDetails ? ? "",
                    paymentInstructions: s.paymentInstructions ? ? "",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    orderingIndex: s.orderingIndex,
                    availablePresentmentCurrencies: s.availablePresentmentCurrencies,
                    placements: o
                });
                break;
            case "OffsiteProvider":
                a.push({
                    type: "offsite",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    name: s.name,
                    paymentBrands: s.paymentBrands,
                    orderingIndex: s.orderingIndex,
                    showRedirectionNotice: s.showRedirectionNotice,
                    availablePresentmentCurrencies: s.availablePresentmentCurrencies,
                    popupEnabled: s.popupEnabled,
                    placements: o
                });
                break;
            case "CustomOnsiteProvider":
                a.push({
                    type: "customOnsite",
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    name: s.name,
                    paymentBrands: s.paymentBrands,
                    orderingIndex: s.orderingIndex,
                    availablePresentmentCurrencies: s.availablePresentmentCurrencies,
                    uiExtension: s ? .paymentMethodUiExtension ? Cn(s ? .paymentMethodUiExtension, "Checkout::PaymentMethod::Render") : void 0,
                    popupEnabled: s.popupEnabled,
                    incentiveType: s.incentiveType,
                    placements: o
                });
                break;
            case "DeferredPaymentMethod":
                {
                    a.push({
                        type: "deferred",
                        orderingIndex: s.orderingIndex,
                        displayName: s.displayName,
                        placements: o
                    });
                    break
                }
            case "AnyRedeemablePaymentMethod":
                for (const i of s.availableRedemptionConfigs) switch (i.__typename) {
                    case "ShopCashRedemptionConfig":
                        a.push({
                            type: "redeemable",
                            redemptionSource: "SHOP_CASH",
                            orderingIndex: s.orderingIndex,
                            placements: o
                        });
                        break;
                    case "StoreCreditRedemptionConfig":
                        a.push({
                            type: "redeemable",
                            redemptionSource: "STORE_CREDIT",
                            orderingIndex: s.orderingIndex,
                            placements: o
                        });
                        break;
                    case "CustomRedemptionConfig":
                        a.push({
                            type: "redeemable",
                            redemptionSource: "CUSTOM",
                            orderingIndex: s.orderingIndex,
                            uiExtension: i.paymentMethodUiExtension ? Cn(i.paymentMethodUiExtension, "Checkout::GiftCard::Render") : void 0,
                            paymentMethodIdentifier: i.paymentMethodIdentifier,
                            placements: o
                        });
                        break;
                    default:
                }
                break;
            case "CustomerCreditCardPaymentMethod":
                a.push({
                    type: P.CreditCard,
                    id: s.id,
                    billingAddress: ee(s.billingAddress),
                    brand: s.brand,
                    firstDigits: s.firstDigits ? ? void 0,
                    cvvSessionId: s.cvvSessionId,
                    displayLastDigits: s.displayLastDigits,
                    expired: s.expired,
                    lastUsedAt: s.lastUsedAt ? ? null,
                    expiryMonth: s.expiryMonth,
                    expiryYear: s.expiryYear,
                    cardholderName: s.name,
                    orderingIndex: s.orderingIndex,
                    paymentMethodIdentifier: s.paymentMethodIdentifier ? ? void 0,
                    token: s.token,
                    defaultPaymentMethod: s.defaultPaymentMethod,
                    deletable: s.deletable,
                    requiresCvvConfirmation: s.requiresCvvConfirmation,
                    placements: o
                });
                break;
            case "PaypalBillingAgreementPaymentMethod":
                a.push({
                    type: P.PayPal,
                    billingAddress: ee(s.billingAddress),
                    orderingIndex: s.orderingIndex,
                    paymentMethodIdentifier: s.paymentMethodIdentifier ? ? void 0,
                    paypalAccountEmail: s.paypalAccountEmail,
                    token: s.token,
                    placements: o
                });
                break;
            case "BankPaymentMethod":
                a.push({
                    type: "bank",
                    placements: o,
                    displayName: s.displayName,
                    orderingIndex: s.orderingIndex,
                    availableInstruments: s.availableInstruments,
                    paymentProviderClientCredentials: s.paymentProviderClientCredentials,
                    paymentMethodIdentifier: s.paymentMethodIdentifier,
                    supportsVaulting: s.supportsVaulting
                });
                break;
            case "InvalidPaymentMethod":
            case "AnyStripeTerminalPaymentMethod":
            case "AnyCashPaymentMethod":
            case "CustomRetailPaymentMethodConfig":
                break;
            default:
        }
    } catch (s) {
        console.warn(s)
    }
    return a.sort((s, o) => s.orderingIndex - o.orderingIndex)
}

function WC({
    availablePayments: e,
    hasPayableDeposit: t
}) {
    return t ? e.filter(n => n.type !== "deferred") : e
}

function Fp(e) {
    switch (e.redemptionSource) {
        case "SHOP_CASH":
            {
                const t = e.redemptionContent.__typename === "ShopCashRedemptionContent" ? e.redemptionContent : null;
                return {
                    type: "redeemable",
                    redemptionSource: "SHOP_CASH",
                    redemptionContent: t ? {
                        redemptionId: t.redemptionId,
                        billingAddress: {
                            streetAddress: Bn(ee(t.billingAddress), {
                                extendedAddressMode: Wn
                            })
                        },
                        destinationAmount: t.destinationAmount ? {
                            amount: t.destinationAmount.amount,
                            currencyCode: t.destinationAmount.currencyCode
                        } : null,
                        sourceAmount: t.sourceAmount ? {
                            amount: t.sourceAmount.amount,
                            currencyCode: t.sourceAmount.currencyCode
                        } : null,
                        redemptionPaymentOptionKind: t.redemptionPaymentOptionKind,
                        details: t.details ? .map(n => ({
                            redemptionId: n.redemptionId,
                            destinationAmount: {
                                amount: n.destinationAmount.amount,
                                currencyCode: n.destinationAmount.currencyCode
                            },
                            sourceAmount: n.sourceAmount ? {
                                amount: n.sourceAmount.amount,
                                currencyCode: n.sourceAmount.currencyCode
                            } : null,
                            redemptionType: n.redemptionType
                        }))
                    } : void 0
                }
            }
        case "STORE_CREDIT":
            {
                const t = e.redemptionContent.__typename === "StoreCreditRedemptionContent" ? e.redemptionContent : null;
                return {
                    type: "redeemable",
                    redemptionSource: "STORE_CREDIT",
                    redemptionContent: t ? {
                        storeCreditAccountId: t.storeCreditAccountId
                    } : void 0
                }
            }
        case "CUSTOM":
            {
                const t = e.redemptionContent.__typename === "CustomRedemptionContent" ? e.redemptionContent : null,
                    n = t ? .redemptionAttributes.map(a => ({
                        key: a.key,
                        value: a.value || ""
                    }));
                return {
                    type: "redeemable",
                    redemptionSource: "CUSTOM",
                    redemptionContent: t ? {
                        redemptionAttributes: n ? ? [],
                        maskedIdentifier: t.maskedIdentifier,
                        paymentMethodIdentifier: t ? .paymentMethodIdentifier ? ? ""
                    } : void 0
                }
            }
        default:
            throw new xo(`Can’t handle payment line: ${JSON.stringify(e)}`)
    }
}

function Yp(e, t, n) {
    const a = e.filter(Xn),
        r = t || !!(n ? .amount && n ? .dueAt),
        s = a.length === 1 && r,
        o = a.length === 2 && !r;
    return s || o
}

function Xn(e) {
    return ["DirectPaymentMethod", "CustomerCreditCardPaymentMethod", "PaypalBillingAgreementPaymentMethod", "OffsitePaymentMethod", "CustomOnsitePaymentMethod", "DeferredPaymentMethod", "ManualPaymentMethod", "PaymentOnDeliveryMethod", "CustomPaymentMethod", "LocalPaymentMethod", "BankPaymentInstrument"].includes(e.paymentMethod.__typename) || e.paymentMethod.__typename === "WalletPaymentMethod" && e.paymentMethod.name === "PAYPAL_EXPRESS"
}

function qC(e) {
    if (!(e ? .__typename !== "FilledPaymentTerms" || e.paymentFlexibilityPaymentTermsTemplate === null)) return e.paymentFlexibilityPaymentTermsTemplate
}

function KC(e) {
    if (!(e ? .__typename !== "FilledPaymentTerms" || e.depositConfiguration === null || e.depositConfiguration ? .__typename !== "DepositPercentage")) return e.depositConfiguration
}

function Cn(e, t) {
    return { ...$g(t, e.extension),
        type: "persisted",
        id: e.extension.registrationUuid,
        extensionId: e.extension.registrationUuid,
        registrationId: e.extension.registrationUuid,
        version: e.extension.version,
        publicIdentifier: e.extension.registrationUuid,
        targetPublicIdentifier: e.extension.registrationUuid,
        placementReference: void 0,
        behaviors: N({
            showInExpressCheckout: !0,
            alwaysReveal: !1,
            blockProgress: !0
        }),
        configuration: N({}),
        isCheckoutEditor: !1,
        position: N(0)
    }
}

function Hp(e) {
    return "__typename" in e
}

function XC(e) {
    return e ? e.flatMap(n => {
        if (!Hp(n)) return [n];
        switch (n.__typename) {
            case "CartMetafieldUpdateOperation":
                return [{
                    update: {
                        key: n.key,
                        namespace: n.namespace,
                        appId: n.appId,
                        value: n.value,
                        type: n.type
                    }
                }];
            case "CartMetafieldDeleteOperation":
                return [{
                    delete: {
                        key: n.key,
                        namespace: n.namespace,
                        appId: n.appId
                    }
                }];
            default:
                qe(n)
        }
    }) : []
}

function $C(e) {
    return e ? e.filter(t => t.__typename === "CartMetafieldUpdateOperation") : []
}

function Vp(e) {
    return {
        firstName: e ? .firstName ? ? void 0,
        lastName: e ? .lastName ? ? void 0,
        company: e ? .company ? ? void 0,
        address1: e ? .address1 ? ? void 0,
        address2: e ? .address2 ? ? void 0,
        city: e ? .city ? ? void 0,
        province: e ? .zoneCode ? ? void 0,
        country: e ? .countryCode ? ? void 0,
        zip: e ? .postalCode ? ? void 0,
        phone: e ? .phone ? ? void 0
    }
}

function Gp(e) {
    if (e) return {
        first_name: e.firstName ? ? void 0,
        last_name: e.lastName ? ? void 0,
        street_address: e.address1 ? ? void 0,
        extended_address: e.address2 ? ? void 0,
        address_locality: e.city ? ? void 0,
        address_region: e.zoneCode ? ? void 0,
        address_country: e.countryCode ? ? void 0,
        postal_code: e.postalCode ? ? void 0,
        phone_number: e.phone ? ? void 0
    }
}

function QC(e) {
    return Wp(e) ? ? zp(e)
}

function zp(e) {
    const n = e ? .find(r => r.__typename === "CreditCardPaymentMethod") ? .instruments ? .[0];
    if (!n) return;
    const a = n.billingAddress ? .__typename === "StreetAddress" ? n.billingAddress : null;
    return {
        externalReferenceId: n.externalReferenceId,
        lastDigits: n.lastDigits,
        brand: n.brand ? .toUpperCase(),
        cardHolderName: n.cardHolderName,
        month: n.month,
        year: n.year,
        billingAddress: Vp(a)
    }
}

function Wp(e) {
    const t = e ? .find(r => r.__typename === "UcpPaymentMethod");
    if (!t) return;
    const n = t.instruments ? .find(r => r.id === t.selectedInstrumentId);
    if (!n) return;
    const a = n.billingAddress ? .__typename === "StreetAddress" ? n.billingAddress : null;
    return {
        id: n.id,
        handler_id: n.handlerId,
        type: n.type ? ? "card",
        selected: !0,
        display: {
            brand: n.brand ? ? void 0,
            last_digits: n.lastDigits ? ? void 0,
            description: n.richTextDescription ? ? void 0,
            card_art: n.richCardArt ? ? void 0
        },
        cardholder_name: void 0,
        expiry_month: n.expiryMonth ? ? void 0,
        expiry_year: n.expiryYear ? ? void 0,
        billing_address: Gp(a)
    }
}

function Fr(e) {
    return ms(e) ? e.map(t => t.status === "not_required" || t.availableOn !== Fi ? t : { ...t,
        methods: t.methods.map(n => ({ ...n,
            deliveryPromisePresentmentTitle: null,
            estimatedTimeInTransit: void 0
        }))
    }) : e
}

function qp(e) {
    return e ? {
        altText: e.altText || void 0,
        url: e.url,
        one: e.one,
        two: e.two,
        four: e.four
    } : void 0
}

function JC(e) {
    return e ? {
        lines: e.map(t => ({
            title: t.title,
            description: t.description ? ? void 0,
            total: L(t.total)
        }))
    } : {
        lines: []
    }
}

function La(e) {
    return e == null ? [] : e.filter(n => {
        const a = n.value ? .__typename;
        return n.value === null || a === "MerchandisePropertyValueBoolean" || a === "MerchandisePropertyValueFloat" || a === "MerchandisePropertyValueInt" || a === "MerchandisePropertyValueString" || a === "MerchandisePropertyValueJson"
    }).map(({
        name: n,
        value: a,
        visible: r
    }) => {
        if (a === null) return {
            sourceType: "MerchandisePropertyValueNull",
            name: n,
            value: a,
            visible: r
        };
        switch (a.__typename) {
            case "MerchandisePropertyValueBoolean":
                return {
                    sourceType: a.__typename,
                    name: n,
                    value: a.boolean,
                    visible: r
                };
            case "MerchandisePropertyValueFloat":
                return {
                    sourceType: a.__typename,
                    name: n,
                    value: a.float,
                    visible: r
                };
            case "MerchandisePropertyValueInt":
                return {
                    sourceType: a.__typename,
                    name: n,
                    value: a.int,
                    visible: r
                };
            case "MerchandisePropertyValueString":
                return {
                    sourceType: a.__typename,
                    name: n,
                    value: a.string,
                    visible: r
                };
            case "MerchandisePropertyValueJson":
                return {
                    sourceType: a.__typename,
                    name: n,
                    value: JSON.stringify(a.json),
                    visible: r
                };
            default:
                de(a)
        }
    })
}

function Go(e) {
    if (!e) return null;
    const {
        id: t,
        digest: n,
        name: a,
        deliveriesPerBillingCycle: r,
        prepaid: s,
        allowStoreCredit: o
    } = e;
    if (!e.subscriptionDetails) return {
        id: t,
        digest: n,
        name: a,
        deliveriesPerBillingCycle: r,
        prepaid: s,
        allowStoreCredit: o ? ? !1,
        isFixed: !0
    };
    const {
        billingMaxCycles: i,
        billingInterval: d,
        deliveryInterval: l,
        deliveryIntervalCount: u,
        billingIntervalCount: m
    } = e.subscriptionDetails;
    return {
        id: t,
        digest: n,
        name: a,
        deliveriesPerBillingCycle: r,
        prepaid: s,
        allowStoreCredit: o ? ? !1,
        isFixed: !1,
        subscriptionDetails: {
            billingMaxCycles: i ? ? null,
            billingInterval: Yr(d),
            deliveryInterval: Yr(l),
            deliveryIntervalCount: u,
            billingIntervalCount: m
        }
    }
}

function Yr(e) {
    switch (e) {
        case "DAY":
            return "day";
        case "WEEK":
            return "week";
        case "MONTH":
            return "month";
        case "YEAR":
            return "year"
    }
}
class zo extends Error {
    constructor() {
        super(...arguments), this.name = "MissingProposalMerchandiseError"
    }
}
class Kp extends Error {
    constructor() {
        super(...arguments), this.name = "UndefinedTotalAmount"
    }
}

function ZC({
    delivery: e,
    deliveryMethods: t,
    negotiatedMerchandise: n,
    buyerDelivery: a,
    violations: r,
    isPointOfSale: s,
    isPointOfSaleShipToHome: o,
    observability: i,
    isAbandonedCartSession: d,
    remoteDelivery: l
}) {
    if (!e) return;
    if (e.__typename === "PendingTerms") {
        if (!a || a.__typename !== "FilledDeliveryTerms") return;
        const {
            intermediateRates: p,
            shippingRatesStatusToken: y,
            progressiveRatesEstimatedTimeUntilCompletion: M,
            deliveryLines: R
        } = a;
        return (l ? .remoteBuyerDeliveryLines.length ? [...R, ...l.remoteBuyerDeliveryLines] : R).some(k => k.__typename === "DeliveryLine" && (k.selectedDeliveryStrategy ? .__typename === "DeliveryStrategyReference" || k.selectedDeliveryStrategy ? .__typename === "CustomDeliveryStrategy")) ? {
            status: "filled",
            lines: R.map(k => $p({
                buyerDeliveryLine: k,
                negotiatedMerchandise: n,
                isPointOfSale: s,
                isPointOfSaleShipToHome: o
            })),
            intermediateRates: p,
            shippingRatesStatusToken: y,
            progressiveRatesEstimatedTimeUntilCompletion: M,
            sourceIsBuyerProposal: !0
        } : void 0
    }
    const u = (r || []).reduce((p, y) => (y.code === "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED" && d || (y.__typename === "ConfirmChangeViolation" && tc.has(y.code) && (p.hasDeliveryLineChange = !0), y.__typename === "UnresolvableTermViolation" && nc.has(y.code) && (p.hasNoDeliveryMethods = !0)), p), {
        hasDeliveryLineChange: !1,
        hasNoDeliveryMethods: !1
    });
    if (e.__typename === "UnavailableTerms") {
        if (t ? .__typename === "FilledDeliveryMethods") {
            const p = [...t.shipping.deliveryLines, ...t.pickUp.deliveryLines, ...t.local.deliveryLines, ...t.pickupPoint.deliveryLines, ...t.retail.deliveryLines, ...t.none.deliveryLines];
            if (p.length > 0) return {
                status: "partial",
                lines: Fr(p.map((M, R) => Hr({
                    negotiatedDeliveryLine: M,
                    negotiatedDeliveryLineIndex: R,
                    negotiatedMerchandise: n,
                    isPointOfSale: s,
                    isPointOfSaleShipToHome: o,
                    observability: i,
                    isAbandonedCartSession: d
                }))),
                supportsSplitDeliveryMethod: t.supportsSplitDeliveryMethod
            }
        }
        return {
            status: "unavailable",
            ...u
        }
    }
    if (e.__typename !== "FilledDeliveryTerms") return;
    const {
        intermediateRates: m,
        shippingRatesStatusToken: c,
        progressiveRatesEstimatedTimeUntilCompletion: _,
        deliveryLines: f,
        deliveryMacros: b,
        deliveryMacrosOmitted: E,
        splitShippingToggle: I,
        supportsSplitDeliveryMethod: h
    } = e, v = l ? .remoteSellerDeliveryLines.length ? [...f, ...l.remoteSellerDeliveryLines] : f, B = Fr(v.map((p, y) => Hr({
        negotiatedDeliveryLine: p,
        negotiatedDeliveryLineIndex: y,
        negotiatedMerchandise: n,
        violations: r,
        isPointOfSale: s,
        isPointOfSaleShipToHome: o,
        observability: i,
        isAbandonedCartSession: d
    }))), S = l ? .deliveryMacros ? ? b, T = l ? .deliveryMacrosOmitted ? ? E, g = S.map(({
        id: p,
        amount: y,
        amountAfterDiscounts: M,
        totalAmount: R,
        totalAmountAfterDiscounts: U,
        title: H,
        totalTitle: k,
        deliveryPromisePresentmentTitle: A,
        deliveryStrategyHandles: j,
        isSharedRate: O
    }) => ((R == null || U == null) && i ? .error(new Kp(`Undefined total field for deliveryMacros: totalAmount=${JSON.stringify(R)}, totalAmountAfterDiscounts=${JSON.stringify(U)}`), {
        severity: "error"
    }), {
        id: p,
        cost: L(y),
        costAfterDiscounts: L(M),
        totalCost: L(R ? ? y),
        totalCostAfterDiscounts: L(U ? ? M),
        title: H,
        totalTitle: k || H,
        deliveryPromisePresentmentTitle: A,
        deliveryMethodHandles: Xp(j, B),
        ...typeof O == "boolean" && {
            isSharedRate: O
        }
    }));
    return {
        status: "filled",
        lines: B,
        intermediateRates: m,
        shippingRatesStatusToken: c,
        progressiveRatesEstimatedTimeUntilCompletion: _,
        deliveryMacros: g,
        deliveryMacrosOmitted: T,
        splitShippingToggle: I,
        supportsSplitDeliveryMethod: h || (t ? .__typename === "FilledDeliveryMethods" ? t.supportsSplitDeliveryMethod : !1)
    }
}

function Xp(e, t) {
    const n = t.reduce((a, r) => (ls(r) && r.methods.forEach(s => a[s.handle] = r), a), {});
    return e.reduce((a, r) => {
        const s = n[r];
        if (!s) return a;
        const o = `${s.type}${s?.id?`-${Ze(s?.id)}`:""}`;
        return a[o] = r, a
    }, {})
}

function Hr({
    negotiatedDeliveryLine: e,
    negotiatedDeliveryLineIndex: t,
    negotiatedMerchandise: n,
    violations: a,
    isPointOfSale: r,
    isPointOfSaleShipToHome: s,
    observability: o,
    isAbandonedCartSession: i
}) {
    const {
        id: d,
        availableOn: l,
        groupType: u,
        targetMerchandise: m,
        availableDeliveryStrategies: c,
        selectedDeliveryStrategy: _
    } = e;
    if (!(m.__typename === "FilledMerchandiseLineTargetCollection" && m.linesV2.some(h => {
            if (h.__typename !== "MerchandiseLine" && h.__typename !== "MerchandiseBundleLineComponent") return !1;
            const {
                merchandise: v,
                stableId: B
            } = h;
            return (v.__typename === "ProductVariantMerchandise" || v.__typename === "SourceProvidedMerchandise" || v.__typename === "ContextualizedProductVariantMerchandise") && Da({
                targetStableId: B,
                merchandise: v,
                negotiatedMerchandise: n,
                isPointOfSale: r,
                isPointOfSaleShipToHome: s,
                targetIsLineComponent: h.__typename === "MerchandiseBundleLineComponent"
            })
        }))) return {
        id: d,
        availableOn: l,
        type: u,
        status: "not_required",
        targetMerchandiseLines: $n({
            targetMerchandise: m,
            negotiatedMerchandise: n,
            observability: o,
            isPointOfSale: r
        })
    };
    const b = c.filter(h => h.__typename === "CompleteDeliveryStrategy").map(({
            handle: h,
            title: v,
            description: B,
            amount: S,
            code: T,
            amountAfterDiscounts: g,
            estimatedTimeInTransit: p,
            minDeliveryDateTime: y,
            maxDeliveryDateTime: M,
            deliveryPredictionEligible: R,
            deliveryPromiseProviderApiClientId: U,
            deliveryPromisePresentmentTitle: H,
            acceptsInstructions: k,
            phoneRequired: A,
            methodType: j,
            pickupLocation: O,
            carrierName: V,
            deliveryStrategyBreakdown: Y,
            custom: G,
            brandedPromise: Ie,
            originLocation: Fe,
            displayCheckoutRedesign: at,
            metafields: ln,
            amountCombinabilityToken: un,
            deliveryPresentationGroupToken: cn,
            availability: mn
        }) => {
            let rt;
            O ? .__typename === "PickupInStoreLocation" ? rt = {
                type: O ? .__typename,
                ...O,
                address: ee(O.address)
            } : O ? .__typename === "PickupPointLocation" && (rt = {
                type: O ? .__typename,
                ...O,
                address: ee(O.address)
            });
            const _n = ln.map(st => ({
                key: st.key,
                namespace: st.namespace,
                value: st.value,
                valueType: "string"
            }));
            return {
                handle: h,
                title: v,
                description: B,
                code: T,
                cost: L(S),
                costAfterDiscounts: L(g),
                estimatedTimeInTransit: gu(p),
                minDeliveryDateTime: y,
                maxDeliveryDateTime: M,
                deliveryPredictionEligible: R,
                deliveryPromiseProviderApiClientId: U,
                deliveryPromisePresentmentTitle: H,
                acceptsInstructions: k,
                phoneRequired: A,
                methodType: j,
                pickupLocation: rt,
                carrierName: V,
                priceBreakdown: Zp(Y, n, o),
                isCustomRate: G ? ? !1,
                brandedPromise: Ie,
                originLocation: Fe,
                displayCheckoutRedesign: at,
                metafields: _n,
                amountCombinabilityToken: un,
                deliveryPresentationGroupToken: cn,
                availability: mn
            }
        }),
        E = _ && _.__typename === "CompleteDeliveryStrategy" ? _.handle : void 0,
        I = a ? .some(h => h.__typename === "ConfirmChangeViolation" && h.code === "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED" && h.to.includes(`delivery.deliveryLines[${t}]`)) && !i;
    return {
        id: d,
        availableOn: l,
        status: "available",
        type: u,
        targetMerchandiseLines: $n({
            targetMerchandise: m,
            negotiatedMerchandise: n,
            observability: o,
            isPointOfSale: r,
            isPointOfSaleShipToHome: s
        }),
        methods: b,
        hasDeliveryLineChange: I,
        hasNoDeliveryMethods: b.length === 0,
        selectedDeliveryMethodHandle: E
    }
}

function $p({
    buyerDeliveryLine: e,
    negotiatedMerchandise: t,
    isPointOfSale: n,
    isPointOfSaleShipToHome: a
}) {
    const {
        groupType: r,
        targetMerchandise: s,
        selectedDeliveryStrategy: o
    } = e, i = [];
    return {
        status: "available",
        type: r,
        targetMerchandiseLines: Qp({
            targetMerchandise: s,
            negotiatedMerchandise: t,
            isPointOfSale: n,
            isPointOfSaleShipToHome: a
        }),
        methods: i,
        selectedDeliveryMethodHandle: o && o.__typename === "DeliveryStrategyReference" ? o.handle : void 0
    }
}

function Da({
    targetStableId: e,
    merchandise: t,
    negotiatedMerchandise: n,
    isPointOfSale: a,
    isPointOfSaleShipToHome: r,
    targetIsLineComponent: s
}) {
    if (a && !r) return !1;
    if (t.requiresShipping !== void 0) return t.requiresShipping;
    if (!n || n.__typename !== "FilledMerchandiseTerms") return !0;
    const o = s ? n.merchandiseLines.flatMap(({
        lineComponents: i
    }) => i).filter(i => i.__typename === "MerchandiseBundleLineComponent") : n.merchandiseLines;
    for (const i of o)
        if ("requiresShipping" in i.merchandise && i.stableId === e) return i.merchandise.requiresShipping;
    return !0
}

function Wo(e, t) {
    const n = e ? .__typename === "ProposalMerchandiseQuantityByItem" && e.items ? .__typename === "IntValueConstraint" ? e.items.value : 0,
        a = t ? { ...t,
            altText: t.altText || void 0
        } : void 0;
    return {
        quantity: n,
        image: a
    }
}

function qo(e) {
    if (e.totalAmount.__typename === "MoneyValueConstraint") return L(e.totalAmount)
}

function Ko(e) {
    const n = (e ? .__typename === "FilledMerchandiseTerms" && e.merchandiseLines || []).flatMap(a => [a, ...a.lineComponents.filter(r => r.__typename === "MerchandiseBundleLineComponent")]);
    return new Map(n.map(a => [a.stableId, a]))
}

function $n({
    targetMerchandise: e,
    negotiatedMerchandise: t,
    observability: n,
    isPointOfSale: a,
    isPointOfSaleShipToHome: r
}) {
    if (e.__typename !== "FilledMerchandiseLineTargetCollection") return [];
    const s = Ko(t);
    return e.linesV2.reduce((o, i) => {
        if (i.__typename !== "MerchandiseLine" && i.__typename !== "MerchandiseBundleLineComponent") return o;
        const {
            stableId: d,
            __typename: l,
            quantity: u
        } = i, m = qo(i), c = s.get(d) ? .merchandise;
        if (!c) return n ? .error(new zo(`Missing merchandise for stableId: ${d} in negotiatedMerchandise. Available keys: ${s.keys()} negotiatedMerchandise=${JSON.stringify(t)}`), {
            severity: "error"
        }), o;
        if (c.__typename === "ContextualizedProductVariantMerchandise" || c.__typename === "SourceProvidedMerchandise") {
            const {
                quantity: _,
                image: f
            } = Wo(u, c.image);
            return [...o, {
                digest: c.digest,
                title: c.title,
                stableId: d,
                quantity: _,
                ...m && {
                    totalPrice: m
                },
                image: f,
                requiresShipping: Da({
                    targetStableId: d,
                    merchandise: c,
                    negotiatedMerchandise: t,
                    isPointOfSale: a,
                    isPointOfSaleShipToHome: r,
                    targetIsLineComponent: l === "MerchandiseBundleLineComponent"
                }),
                properties: La(c.properties),
                ...Jp(c) && {
                    id: c.id,
                    subtitle: c.subtitle ? ? void 0,
                    sellingPlan: Go(c.sellingPlan)
                }
            }]
        }
        return o
    }, [])
}

function Qp({
    targetMerchandise: e,
    negotiatedMerchandise: t,
    isPointOfSale: n,
    isPointOfSaleShipToHome: a,
    observability: r
}) {
    if (e.__typename !== "FilledMerchandiseLineTargetCollection") return [];
    const s = Ko(t),
        o = e.linesV2.reduce((i, d) => {
            if (d.__typename !== "MerchandiseLine" && d.__typename !== "MerchandiseBundleLineComponent") return i;
            const {
                stableId: l,
                __typename: u,
                quantity: m
            } = d, c = qo(d), _ = s.get(l) ? .merchandise;
            if (!_) return r ? .error(new zo(`Missing merchandise for stableId: ${l} in negotiatedMerchandise. Available keys: ${s.keys()} negotiatedMerchandise=${JSON.stringify(t)}`), {
                severity: "error"
            }), i;
            if (_.__typename === "ProductVariantMerchandise" || _.__typename === "SourceProvidedMerchandise" || _.__typename === "ContextualizedProductVariantMerchandise") {
                const {
                    quantity: f,
                    image: b
                } = Wo(m, _.image);
                return [...i, {
                    digest: _.digest,
                    title: _.title,
                    stableId: l,
                    quantity: f,
                    ...c && {
                        totalPrice: c
                    },
                    image: b,
                    requiresShipping: Da({
                        targetStableId: l,
                        merchandise: _,
                        negotiatedMerchandise: t,
                        isPointOfSale: n,
                        isPointOfSaleShipToHome: a,
                        targetIsLineComponent: u === "MerchandiseBundleLineComponent"
                    }),
                    properties: La(_.properties)
                }]
            }
            return i
        }, []);
    return o.length ? o : void 0
}

function Jp(e) {
    return e.__typename === "ContextualizedProductVariantMerchandise"
}

function Zp(e, t, n) {
    return e ? .reduce((a, r) => {
        const {
            excludeFromDeliveryOptionPrice: s,
            amount: o,
            targetMerchandise: i,
            discountRecurringCycleLimit: d,
            flatRateGroupId: l
        } = r, u = $n({
            targetMerchandise: i,
            negotiatedMerchandise: t,
            observability: n
        }).filter(m => m.requiresShipping);
        return u.length ? [...a, {
            excludeFromDeliveryOptionPrice: s,
            amount: L(o),
            targetMerchandiseLines: u,
            discountRecurringCycleLimit: d ? ? void 0,
            flatRateGroupId: l ? ? void 0
        }] : a
    }, [])
}

function Xo(e) {
    return {
        title: e.title,
        appliedDiscounts: e.appliedDiscounts.map(({
            label: t,
            allocationValue: n,
            amountDiscounted: a
        }) => ({
            label: t,
            allocationValue: pu(n),
            amountDiscounted: L(a)
        })),
        lineAmount: L(e.lineAmount),
        deliveryChange: e.deliveryChange,
        isFulfilled: e.isFulfilled
    }
}

function eS(e) {
    return {
        groupType: e.groupType,
        methodType: e.methodType,
        targetMerchandiseLines: e.targetMerchandiseLines.map(({
            stableId: t
        }) => ({
            stableId: t
        })),
        total: L(e.total),
        deliveryLines: e.deliveryLines.map(Xo)
    }
}

function e0(e, {
    includeDeliveryGroups: t = !1
} = {}) {
    const n = e.deliveryAddress ? ee(e.deliveryAddress) : null,
        a = e.pickupAddress ? .coordinates,
        r = a ? .latitude && a ? .longitude ? {
            latitude: a ? .latitude,
            longitude: a ? .longitude
        } : void 0,
        s = e.pickupAddress ? {
            address1: e.pickupAddress.address1,
            address2: e.pickupAddress.address2 ? ? void 0,
            countryCode: e.pickupAddress.countryCode,
            coordinates: r,
            city: e.pickupAddress.city,
            postalCode: e.pickupAddress.postalCode ? ? void 0,
            zoneCode: e.pickupAddress.zoneCode ? ? void 0,
            phone: e.pickupAddress.phone ? ? void 0
        } : null;
    return {
        deliveryAddress: n,
        deliveryGroups: t && e.deliveryGroups ? e.deliveryGroups.map(eS) : null,
        lines: e.lines.map(Xo),
        pickupAddress: s,
        pickupAddressName: e.pickupAddressName ? ? null,
        total: L(e.total)
    }
}

function tS(e, t = []) {
    if (t.length === 0) {
        let r;
        return e.length === 0 ? r = [] : e.includes("SHIPPING") && e.includes("LOCAL") ? r = ["SHIPPING", "LOCAL"] : e.includes("SHIPPING") ? r = ["SHIPPING"] : r = [e[0]], r
    }
    const n = t.filter(r => e.includes(r));
    t.length === 1 && n.includes("SHIPPING") && e.includes("LOCAL") && n.push("LOCAL"), t.length === 1 && n.includes("LOCAL") && e.includes("SHIPPING") && n.push("SHIPPING");
    const a = [...new Set(n)];
    return a.length > 0 ? a : e.length === 0 ? [] : e.includes("SHIPPING") ? ["SHIPPING"] : [e[0]]
}

function t0({
    negotiatedMerchandise: e,
    negotiatedDeliveryNext: t,
    enabledDeliveryMethods: n,
    buyerProposalDelivery: a,
    mustSelectProvidedShippingRate: r = !1
}) {
    const s = _S(a);
    return (t ? .status === "filled" || t ? .status === "partial") && t.lines.length > 0 ? iS({
        negotiatedDeliveryNext: t,
        enabledDeliveryMethods: n,
        fallbackToFirstDeliveryMethod: !0,
        mustSelectProvidedShippingRate: r,
        buyerDeliveryOptionsMap: s
    }) : nS({
        negotiatedDeliveryNext: t,
        enabledDeliveryMethods: n,
        buyerProposalDelivery: a,
        negotiatedMerchandise: e,
        mustSelectProvidedShippingRate: r
    })
}

function nS({
    negotiatedDeliveryNext: e,
    enabledDeliveryMethods: t,
    buyerProposalDelivery: n,
    negotiatedMerchandise: a,
    mustSelectProvidedShippingRate: r = !1
}) {
    const s = Ec(a),
        o = [],
        [i, d] = s.reduce((u, m) => m.__typename !== "SourceProvidedMerchandise" && m.sellingPlan ? .subscriptionDetails ? [u[0], !0] : [!0, u[1]], [!1, !1]);
    i && o.push(lr(e, "ONE_TIME_PURCHASE")), d && o.push(lr(e, "SUBSCRIPTION"));
    const l = r ? rS(n) : void 0;
    return o.map(u => ({ ...u,
        deliveryMethodTypes: tS(t, aS(n) ? ? u.deliveryMethodTypes),
        ...l ? {
            customDeliveryStrategy: l
        } : {}
    }))
}

function aS(e) {
    if (e ? .__typename !== "FilledDeliveryTerms" || e.deliveryLines.length === 0) return;
    const t = [...new Set(e.deliveryLines.flatMap(({
        deliveryMethodTypes: n
    }) => n))];
    return t.length > 0 ? t : void 0
}

function rS(e) {
    if (!(e ? .__typename !== "FilledDeliveryTerms" || e.deliveryLines.length === 0))
        for (const t of e.deliveryLines) {
            const n = t.selectedDeliveryStrategy;
            if (n ? .__typename === "CustomDeliveryStrategy") {
                const a = n.price.__typename === "MoneyValueConstraint" ? n.price.value : void 0;
                if (a) return {
                    title: n.title,
                    code: n.code ? ? void 0,
                    source: n.source ? ? void 0,
                    price: {
                        amount: a.amount,
                        currencyCode: a.currencyCode
                    }
                }
            }
        }
}

function sS(e) {
    const t = new Map;
    for (const n of e) {
        t.set(n.stableId, n);
        for (const a of n.lineComponents) t.set(a.stableId, a)
    }
    return t
}

function oS(e, t) {
    if (e.targetMerchandiseLines.length === 0) return e;
    const n = e.targetMerchandiseLines.flatMap(a => {
        const r = t.get(a.stableId);
        return r ? [r] : []
    });
    if (n.length !== 0) return { ...e,
        targetMerchandiseLines: n
    }
}

function iS({
    negotiatedDeliveryNext: e,
    negotiatedMerchandiseLines: t,
    enabledDeliveryMethods: n,
    existingProposedDeliveryLines: a,
    fallbackToFirstDeliveryMethod: r = !1,
    mustSelectProvidedShippingRate: s = !1,
    buyerDeliveryOptionsMap: o
}) {
    const {
        lines: i,
        status: d
    } = e, l = u => {
        const m = u.status === "available" ? u.methods.map(({
            methodType: T
        }) => T) : [];
        n.includes("LOCAL") && m.includes("SHIPPING") && m.push("LOCAL"), !s && n.includes("SHIPPING") && m.includes("LOCAL") && m.push("SHIPPING");
        const c = [...new Set(m)],
            _ = u ? .status === "available" ? u.methods[0] ? .handle : void 0,
            f = u.status === "available" ? u.selectedDeliveryMethodHandle : void 0,
            b = a ? .find(T => T.type === u.type && (!T.id || !u.id || T.id === u.id));
        let E = !f && r ? _ : f;
        const I = s && !E && b ? .deliveryMethodHandle && b ? .isCustomRate;
        I && (E = b.deliveryMethodHandle);
        const h = ["SHIPPING"];
        n.includes("LOCAL") && h.push("LOCAL");
        const v = f && c.length === 0 ? h : c,
            B = u.status === "available" ? u.methods.find(({
                handle: T
            }) => T === E) ? .isCustomRate ? ? (I ? b ? .isCustomRate : void 0) : fS(u, a),
            S = lS(u, a);
        return {
            id: u.id,
            type: u.type,
            deliveryMethodHandle: E,
            deliveryMethodOptions: uS(u, o, E === b ? .deliveryMethodHandle ? S : void 0),
            deliveryMethodTypes: v,
            targetMerchandiseLines: u.targetMerchandiseLines || [],
            isCustomRate: B,
            customDeliveryStrategy: b ? .customDeliveryStrategy
        }
    };
    if (d === "partial" && a) {
        const u = t ? sS(t) : void 0,
            m = u ? a.flatMap(c => {
                const _ = oS(c, u);
                return _ ? [_] : []
            }) : a.slice();
        for (const c of i) {
            const _ = dS(c, m);
            _ >= 0 ? m[_] = l(c) : m.push(l(c))
        }
        return m
    }
    return i.map(l)
}

function dS(e, t) {
    const n = t.findIndex(s => s.type === e.type && s.id != null && e.id != null && s.id === e.id);
    if (n >= 0) return n;
    const a = new Set(e.targetMerchandiseLines ? .map(s => s.stableId).filter(Boolean) ? ? []);
    if (a.size > 0) {
        const s = t.findIndex(o => o.type === e.type && o.targetMerchandiseLines ? .some(i => i.stableId && a.has(i.stableId)));
        if (s >= 0) return s
    }
    const r = t.findIndex(s => s.type === e.type && s.id == null && s.targetMerchandiseLines.length === 0);
    return r >= 0 ? r : -1
}

function lS(e, t) {
    return t ? t.find(a => a.type === e.type && (!e.id || e.id === a.id)) ? .deliveryMethodOptions ? ? {} : {}
}

function uS(e, t, n) {
    if (e.status !== "available") return {};
    const a = e.selectedDeliveryMethodHandle,
        r = a ? t ? .get(a) ? ? {} : {};
    return n ? cS(n, r) : r
}

function cS(e, t) {
    const n = t.phone ? ? e.phone,
        a = t.instructions ? ? e.instructions;
    return {
        phone: n,
        instructions: a
    }
}

function mS(e) {
    return !e || typeof e != "object" || !("options" in e) ? void 0 : e.options ? ? void 0
}

function _S(e) {
    const t = new Map;
    if (!e || e.__typename !== "FilledDeliveryTerms") return t;
    for (const n of e.deliveryLines) {
        if (n.__typename !== "DeliveryLine") continue;
        const a = n.selectedDeliveryStrategy;
        if (a ? .__typename !== "DeliveryStrategyReference") continue;
        const r = mS(a);
        r && t.set(a.handle, {
            phone: r.phone ? ? void 0,
            instructions: r.instructions ? ? void 0
        })
    }
    return t
}

function fS(e, t) {
    return t ? t.find(a => a.type === e.type && (!e.id || e.id === a.id)) ? .isCustomRate : void 0
}

function gS(e) {
    switch (e.__typename) {
        case "CustomDiscount":
            return {
                title: e.title,
                discount: Ee(e)
            };
        case "CodeDiscount":
            return {
                title: e.title,
                discount: Ee(e)
            };
        case "DiscountCodeTrigger":
            return {
                title: e.code,
                discount: Ee(e)
            };
        case "AutomaticDiscount":
            return {
                title: e.title,
                discount: Ee(e)
            };
        default:
            return
    }
}

function Ee(e) {
    switch (e.__typename) {
        case "CustomDiscount":
            return {
                title: e.title,
                description: e.description ? ? void 0,
                type: "custom",
                value: Nn(e.value),
                presentationLevel: e.presentationLevel,
                allocationMethod: e.allocationMethod,
                targetSelection: e.targetSelection,
                targetType: e.targetType,
                signature: e.signature ? ? void 0,
                signatureUuid: e.signatureUuid ? ? void 0,
                discountType: e.type
            };
        case "CodeDiscount":
            return {
                title: e.title,
                codeHidden: e.codeHidden ? ? !1,
                type: "code",
                allocationMethod: e.allocationMethod,
                targetSelection: e.targetSelection,
                targetType: e.targetType,
                presentationLevel: e.presentationLevel,
                value: Nn(e.value)
            };
        case "DiscountCodeTrigger":
            return {
                title: e.code,
                type: "discountCodeTrigger"
            };
        case "AutomaticDiscount":
            return {
                title: e.title,
                type: "automatic",
                allocationMethod: e.allocationMethod,
                targetSelection: e.targetSelection,
                targetType: e.targetType,
                presentationLevel: e.presentationLevel,
                value: Nn(e.value)
            };
        default:
            return
    }
}

function Nn(e) {
    switch (e.__typename) {
        case "FixedAmountValue":
            return {
                appliesOnEachItem: e.appliesOnEachItem,
                fixedAmount: L(e.fixedAmount),
                typename: "FixedAmountValue"
            };
        case "PercentageValue":
            return {
                percentage: e.percentage,
                typename: "PercentageValue"
            };
        default:
            de(e)
    }
}
class pS extends Error {
    constructor() {
        super(...arguments), this.name = "UnhandledLineAmountError"
    }
}

function n0(e) {
    if (e == null) return !1;
    switch (e.__typename) {
        case "UnavailableTerms":
        case "PendingTerms":
            return !1;
        case "FilledDiscountTerms":
            return e.acceptUnexpectedDiscounts || !1;
        default:
            de(e)
    }
}

function a0(e) {
    return e.discount.targetType === "DELIVERYLINE" ? !1 : e.discount.presentationLevel === "CART" && e.allocations.length > 0 && e.allocations.every(t => t.target.type !== "DELIVERYLINE")
}

function Vr(e) {
    if (e == null) return [];
    switch (e.__typename) {
        case "UnavailableTerms":
        case "PendingTerms":
            return [];
        case "FilledDiscountTerms":
            return e.lines;
        default:
            de(e)
    }
}

function r0({
    merchandiseDiscount: e,
    deliveryDiscount: t
}) {
    const n = Vr(e).map(s => Gr(s)),
        a = Vr(t).map(s => Gr(s, {
            sourceTerm: "delivery"
        }));
    return {
        lines: [...n, ...a].filter(s => !!s)
    }
}

function Pn(e) {
    return e ? {
        sourceTerm: e
    } : {}
}

function Gr(e, {
    sourceTerm: t
} = {}) {
    switch (e.discount.__typename) {
        case "CustomDiscount":
            return {
                title: e.discount.title,
                ...e.lineAmount.__typename === "MoneyValueConstraint" ? {
                    amount: On(e.lineAmount)
                } : {},
                allocations: Rn(e.allocations),
                discount: Ee(e.discount),
                ...e.lineAmount.__typename === "AnyConstraint" ? {
                    anyAllocation: {
                        totalAmount: {
                            any: !0
                        }
                    }
                } : {},
                ...Pn(t)
            };
        case "CodeDiscount":
            return {
                title: e.discount.title,
                amount: On(e.lineAmount),
                message: e.discount ? .message ? ? null,
                allocations: Rn(e.allocations),
                discount: Ee(e.discount),
                ...Pn(t)
            };
        case "DiscountCodeTrigger":
            return {
                title: e.discount.code,
                discount: Ee(e.discount)
            };
        case "AutomaticDiscount":
            return {
                title: e.discount.title,
                amount: On(e.lineAmount),
                message: e.discount ? .message ? ? null,
                allocations: Rn(e.allocations),
                discount: Ee(e.discount),
                ...Pn(t)
            };
        default:
            return
    }
}

function On(e) {
    if (e.__typename !== "MoneyValueConstraint") throw new pS(`Unable to handle line amount type: ${e.__typename}`);
    return L(e.value)
}

function Rn(e) {
    return e ? .__typename !== "DiscountAllocatedAllocationSet" ? [] : e.allocations.map(t => {
        const {
            amount: n
        } = t;
        return {
            target: {
                index: t ? .target ? .index,
                type: t ? .target ? .targetType ? ? null,
                amount: L(n),
                stableId: t ? .target ? .stableId
            }
        }
    })
}

function s0(e) {
    return e ? .__typename === "Throttled" ? {
        merchandiseDiscount: e ? .buyerProposal ? .merchandiseDiscount,
        deliveryDiscount: e ? .buyerProposal ? .deliveryDiscount
    } : e ? .__typename === "NegotiationResultAvailable" ? {
        merchandiseDiscount: e ? .sellerProposal ? .merchandiseDiscount,
        deliveryDiscount: e ? .sellerProposal ? .deliveryDiscount
    } : {
        merchandiseDiscount: void 0,
        deliveryDiscount: void 0
    }
}

function o0(e) {
    if (e ? .length) return e.map($o)
}

function $o(e) {
    return { ...e,
        recurringPrice: L(e.recurringPrice),
        fixedPrice: e.fixedPrice ? L(e.fixedPrice) : void 0,
        interval: e.interval.toLowerCase()
    }
}
class SS extends Error {
    constructor() {
        super(...arguments), this.name = "MerchandiseQuantityError"
    }
}

function i0(e) {
    return e == null || e.__typename !== "FilledMerchandiseTerms" ? [] : e.merchandiseLines.filter(t => t.merchandise.__typename === "MissingProductVariantMerchandise").map(t => t.stableId)
}

function ES(e, t) {
    if (e == null || e.__typename !== "FilledMerchandiseTerms") return [];
    const n = {
        preserveUnpriced: t != null
    };
    return e.merchandiseLines.map(a => a.merchandise.__typename === "MissingProductVariantMerchandise" ? t ? .find(r => r.stableId === a.stableId) : Qo(a, n)).filter(a => a !== void 0)
}

function d0({
    proposedMerchandise: e,
    negotiatedMerchandiseLines: t
}) {
    const n = t ? .sellerPriced ? t.lines : void 0,
        a = t ? .unpricedStableIds;
    return e.map(r => {
        const s = a ? .includes(r.stableId) ? void 0 : n ? .find(i => i.stableId === r.stableId),
            o = r.quantity !== s ? .quantity;
        return s ? { ...s,
            ...o ? {
                quantity: r.quantity,
                lineAllocations: r.lineAllocations,
                lineComponentsSource: r.lineComponentsSource,
                lineComponents: r.lineComponents,
                totalPrice: r.totalPrice
            } : {}
        } : r
    }, [])
}

function l0(e, t, n) {
    const a = e ? ? t,
        r = n ? .some(d => d.__typename === "ConfirmChangeViolation" && d.code === "MERCHANDISE_EXPECTED_PRICE_MISMATCH"),
        s = n ? .some(d => d.__typename === "ConfirmChangeViolation" && d.code === "MERCHANDISE_EXPECTED_SELLING_PLAN_MISMATCH");
    if (a ? .__typename !== "FilledMerchandiseTerms") return {
        lines: [],
        taxesIncluded: !1,
        priceMismatch: r,
        sellingPlanMismatch: s
    };
    const o = ES(a),
        i = a.merchandiseLines.filter(d => "totalAmount" in d ? d.totalAmount.__typename === "AnyConstraint" || d.lineComponents ? .some(l => l.totalAmount.__typename === "AnyConstraint") : !1).map(d => d.stableId);
    return {
        lines: o,
        sellerPriced: a === e,
        ...i.length > 0 && {
            unpricedStableIds: i
        },
        taxesIncluded: a.taxesIncluded,
        priceMismatch: r,
        sellingPlanMismatch: s
    }
}

function Qo(e, t) {
    if (e.__typename !== "MerchandiseLine" && e.__typename !== "MerchandiseBundleLineComponent") return;
    const {
        merchandise: n,
        quantity: a,
        totalAmount: r,
        lineAllocations: s,
        recurringTotal: o,
        stableId: i
    } = e;
    if (n.__typename === "ProductVariantMerchandise" || n.__typename === "ContextualizedProductVariantMerchandise" || n.__typename === "SourceProvidedMerchandise") {
        let d, l, u, m, c, _, f;
        const b = n.digest;
        n.__typename === "SourceProvidedMerchandise" ? (f = n.optionalIdentifier, l = n.taxable, u = n.taxCode, m = n.taxesIncluded, c = n.weight ? {
            value: n.weight ? .value,
            unit: n.weight ? .unit
        } : void 0) : d = n.id, (n.__typename === "SourceProvidedMerchandise" || n.__typename === "ContextualizedProductVariantMerchandise") && (_ = n.sku);
        let E;
        return r.__typename !== "AnyConstraint" ? E = L(r) : t ? .preserveUnpriced || (E = {
            currencyCode: "CAD",
            amount: 0
        }), {
            quantity: hS(a),
            totalPrice: E,
            itemPrice: n.__typename === "ContextualizedProductVariantMerchandise" || n.__typename === "SourceProvidedMerchandise" ? L(n.price) : void 0,
            compareAtPrice: "compareAtPrice" in n && n.compareAtPrice ? L(n.compareAtPrice) : void 0,
            deferredAmount: n.__typename === "ContextualizedProductVariantMerchandise" && n.deferredAmount ? L(n.deferredAmount) : void 0,
            recurringTotal: o ? $o(o) : null,
            id: d,
            digest: b,
            variantId: n.variantId,
            stableId: i,
            title: n.title,
            untranslatedTitle: n.untranslatedTitle,
            subtitle: n.subtitle ? ? void 0,
            untranslatedSubtitle: n.untranslatedSubtitle ? ? void 0,
            productUrl: n.productUrl ? ? "",
            image: qp(n.image),
            vendor: n.product.vendor,
            productType: n.product.productType,
            productId: n.product.id,
            requiresShipping: n.requiresShipping,
            properties: La(n.properties),
            options: n.options,
            giftCard: n.giftCard,
            disclosures: "disclosures" in n.product ? n.product.disclosures : [],
            taxable: l,
            taxCode: u,
            taxesIncluded: m,
            weight: c,
            sku: _,
            optionalIdentifier: f,
            typename: n.__typename,
            legacyFee: !!(e.__typename === "MerchandiseLine" && e.legacyFee),
            sellingPlan: "sellingPlan" in n ? Go(n.sellingPlan) : void 0,
            lineAllocations: s ? s.map(I => vS(I)) : [],
            parentRelationship: e.__typename !== "MerchandiseBundleLineComponent" && "parentRelationship" in e && e.parentRelationship ? {
                parent: e.parentRelationship.parent
            } : null,
            ..."lineComponents" in e && AS(e) && {
                lineComponentsSource: e.lineComponentsSource,
                lineComponents: e.lineComponents ? e.lineComponents.map(I => Qo(I, t)).filter(I => I !== void 0) : []
            }
        }
    }
}

function AS(e) {
    return e.__typename === "MerchandiseLine"
}

function vS(e) {
    const {
        stableId: t,
        quantity: n,
        totalAmountAfterDiscounts: a,
        totalAmountAfterLineDiscounts: r,
        totalAmountBeforeReductions: s,
        checkoutPriceAfterDiscounts: o,
        checkoutPriceBeforeReductions: i,
        allocations: d,
        unitPrice: l
    } = e, u = l ? { ...l,
        price: L(l.price)
    } : null, m = d.reduce((c, _) => {
        if (_.__typename !== "LineComponentDiscountAllocation") return c;
        const {
            discount: f,
            allocation: b
        } = _, E = gS(f);
        return E !== void 0 && c.push({
            discountDetails: E,
            amount: L(b.amount)
        }), c
    }, []) ? ? [];
    return {
        stableId: t,
        quantity: n,
        totalAmountAfterDiscounts: L(a),
        totalAmountAfterLineDiscounts: L(r),
        totalAmountBeforeReductions: L(s),
        checkoutPriceAfterDiscounts: L(o),
        checkoutPriceBeforeReductions: L(i),
        allocations: m,
        unitPrice: u
    }
}

function hS(e) {
    if (e.__typename === "ProposalMerchandiseQuantityByItem" && e.items.__typename === "IntValueConstraint") return e.items.value;
    throw new SS(`Unable to determine quantity for merchandise item: ${JSON.stringify(e)}`)
}

function u0(e) {
    return !!e ? .customAttributes ? .some(t => t.key === Co && t.value === No)
}

function c0(e) {
    return e ? .customAttributes ? .find(t => t.key === ng) ? .value === "true"
}

function m0(e) {
    return e ? .customAttributes ? .find(t => t.key === tg) ? .value
}

function _0(e) {
    const t = e ? .attributions.find(n => n.__typename === "RetailAttributions");
    if (t) return {
        retail: {
            deviceId: t.deviceId,
            locationId: t.locationId,
            userId: t.userId
        }
    }
}

function f0(e) {
    if (!e) return;
    const t = bS(Zf, e.customAttributes);
    if (t) return TS(eg, t.value)
}

function bS(e, t) {
    return t ? .find(n => n.key === e)
}

function TS(e, t) {
    return `gid://shopify/${e}/${t}`
}

function yS(e, {
    isShippingRequired: t,
    ucp: n
} = {}) {
    const {
        shopPayArtifact: a,
        purchaseOrder: {
            paymentLines: r,
            email: s,
            phone: o,
            shippingAddress: i,
            billingAddress: d,
            deliveryNext: l,
            deliveryExpectations: u,
            runningTotal: m,
            paymentDue: c,
            merchandiseLines: _,
            checkoutCompletionTarget: f,
            metafields: b,
            cartMetafields: E
        },
        recurringTotals: I,
        deferredTotal: h,
        checkoutTotalBeforeTaxesAndShipping: v,
        checkoutTotal: B,
        checkoutTotalTaxes: S,
        taxes: T,
        subtotal: g,
        legacyRepresentProductsAsFees: p,
        totalSavings: y,
        landedCostDetails: M,
        duties: R,
        paymentFlexibilityPaymentTermsTemplate: U,
        optionalDuties: H,
        discountLines: k,
        tipLines: A,
        hasOnlyDeferredShipping: j,
        note: O,
        paymentMethods: V,
        buyerIdentity: Y,
        subtotalBeforeReductions: G,
        subtotalAfterMerchandiseDiscounts: Ie,
        customAttributes: Fe,
        dutiesIncluded: at,
        legacySubtotalBeforeTaxesShippingAndFees: ln,
        legacyMerchandiseLinesAsFees: un,
        consolidatedTotals: cn,
        consolidatedTaxes: mn,
        remotePaymentDue: rt,
        remoteMerchandiseDetails: _n,
        shopPayEnabledForSellerOfRecord: st
    } = e;
    return {
        deliveryNext: l,
        billingAddress: d,
        shippingAddress: i,
        runningTotal: m,
        paymentDue: c,
        shopPayArtifact: a,
        recurringTotals: I,
        deferredTotal: h,
        checkoutTotalBeforeTaxesAndShipping: v,
        checkoutTotal: B,
        checkoutTotalTaxes: S,
        taxes: T,
        taxExemptions: void 0,
        subtotal: g,
        legacyRepresentProductsAsFees: p,
        totalSavings: y,
        landedCostDetails: M,
        duties: R,
        paymentFlexibilityPaymentTermsTemplate: U,
        optionalDuties: H,
        discountLines: k,
        hasOnlyDeferredShipping: j,
        note: O,
        paymentMethods: V,
        buyerIdentity: Y,
        merchandiseLines: _,
        subtotalBeforeReductions: G,
        paymentMethodHistory: void 0,
        paymentLines: r ? {
            lines: r
        } : void 0,
        customAttributes: Fe,
        shopPayEnabledForSellerOfRecord: st,
        acceptEmailMarketing: void 0,
        emailMarketingConsentGrantReached: void 0,
        checkoutCompletionTarget: f,
        acceptSmsMarketing: void 0,
        attribution: void 0,
        deliveryExpectations: u,
        localizationExtensions: void 0,
        locationAddress: void 0,
        nonNegotiableTerms: void 0,
        purchaseOrderNumber: void 0,
        scriptFingerprint: void 0,
        transformerFingerprintV2: void 0,
        checkoutCardsinkCallerIdentificationSignature: void 0,
        smsMarketingPhone: void 0,
        allViolations: void 0,
        tipOptions: void 0,
        total: m,
        captcha: void 0,
        availableRedeemables: void 0,
        shopCashBalance: void 0,
        shopPromotion: void 0,
        shopDiscountOffer: void 0,
        reduction: void 0,
        managedByMarketsPro: void 0,
        managedMarketsPaymentProcessor: void 0,
        alternativePaymentCurrency: void 0,
        lpmDisclosure: void 0,
        saleAttributions: void 0,
        cartCheckoutValidation: void 0,
        metafields: b,
        acceptUnexpectedDiscounts: void 0,
        dutiesIncluded: at,
        subtotalAfterMerchandiseDiscounts: Ie,
        legacySubtotalBeforeTaxesShippingAndFees: ln,
        legacyMerchandiseLinesAsFees: un,
        isShippingRequired: t ? ? _ ? .lines ? .some(Si => Si.requiresShipping),
        availableDeliveryAddresses: void 0,
        mustSelectProvidedAddress: void 0,
        mustSelectProvidedShippingRate: void 0,
        canUpdateDiscountCodes: void 0,
        canUpdateDeliveryAddress: void 0,
        canUpdateMerchandise: void 0,
        depositConfiguration: void 0,
        isImmediateAmountReducedForRedeemables: void 0,
        contactInfo: {
            email: s,
            phone: o
        },
        tipLines: A,
        memberships: void 0,
        cartMetafields: E,
        customFields: void 0,
        additionalMoneyLines: void 0,
        remoteMerchandiseDetails: _n,
        remotePaymentDetails: void 0,
        remoteSessionDetails: void 0,
        remoteTaxDetails: mn,
        remoteConsolidatedTotals: cn,
        remoteTotalDetails: void 0,
        remotePaymentDue: rt,
        sellability: void 0,
        ucp: n
    }
}

function g0(e, t) {
    if (t ? .status !== "processed") return e;
    const n = yS(t, {
            isShippingRequired: e.isShippingRequired,
            ucp: e.ucp
        }),
        a = { ...e
        };
    for (const r of Object.keys(a)) a[r] = n[r];
    return a
}
const p0 = "·",
    S0 = 86400;

function IS(e) {
    return e === "SHIPPING" || e === "PICK_UP"
}

function E0(e) {
    return e.filter(t => t === "SHIPPING" || t === "LOCAL")
}
const CS = "sellability_enabled_delivery_methods_fallback",
    zr = new Set;

function Qn(e, t, n, a) {
    zr.has(t) || (zr.add(t), e.log(CS, n, { ...a,
        reason: t
    }))
}
const NS = [{
    key: "shipping",
    type: "SHIPPING"
}, {
    key: "pickUp",
    type: "PICK_UP"
}, {
    key: "pickupPoint",
    type: "PICKUP_POINT"
}, {
    key: "local",
    type: "LOCAL"
}, {
    key: "none",
    type: "NONE"
}];

function PS(e, t, n) {
    const {
        enabledDeliveryMethods: a
    } = e;
    return n && Qn(n, "missing_seller_proposal", "[Sellability] Falling back to enabledDeliveryMethods because sellerProposal was not available", {
        enabledDeliveryMethods: a,
        missingSellerProposalReason: t
    }), {
        enabledDeliveryMethods: a,
        deliveryMethodsByMerchandise: {}
    }
}

function OS({
    shop: e,
    sellerProposal: t,
    missingSellerProposalReason: n,
    observability: a,
    isShippingRequired: r
}) {
    return t ? RS(e, t.sellability, a, r) : PS(e, n, a)
}

function RS(e, t, n, a) {
    const {
        enabledDeliveryMethods: r
    } = e;
    if (t.__typename === "FilledSellability") {
        const s = [],
            o = {};
        for (const {
                key: i,
                type: d
            } of NS) {
            const l = t[i];
            if (l.length > 0 && (s.push(d), IS(d)))
                for (const u of l) {
                    const m = u.targetMerchandise.stableId;
                    (o[m] ? ? = []).push(d)
                }
        }
        return a && s.length > 0 && s.every(i => i === "NONE") ? (n && Qn(n, "none_only_shipping_required", "[Sellability] Falling back to enabledDeliveryMethods because shipping is required but FilledSellability returned only NONE", {
            enabledDeliveryMethods: r
        }), {
            enabledDeliveryMethods: r,
            deliveryMethodsByMerchandise: o
        }) : s.length === 0 ? (n && Qn(n, "empty_available_types", "[Sellability] Falling back to enabledDeliveryMethods because FilledSellability returned empty available types", {
            enabledDeliveryMethods: r
        }), {
            enabledDeliveryMethods: r,
            deliveryMethodsByMerchandise: {}
        }) : {
            enabledDeliveryMethods: s,
            deliveryMethodsByMerchandise: o
        }
    }
    return {
        enabledDeliveryMethods: [],
        deliveryMethodsByMerchandise: {}
    }
}

function MS(e) {
    return Ue(e).some(t => t.sellingPlan)
}

function A0(e) {
    return Ue(e).some(t => t.sellingPlan ? .isFixed)
}

function v0(e) {
    return e.hasFlagEnabled(Mi) || e.hasFlagEnabled(Bi)
}

function wS(e) {
    return e === "EU_REVERSE_CHARGE_EXEMPTION_RULE"
}

function Jo(e) {
    return wS(e.handle) && !!e.details
}
const Zo = e => ({
    handle: "EU_REVERSE_CHARGE_EXEMPTION_RULE",
    details: {
        taxId: e.details.taxId
    }
});

function h0(e, t) {
    return t.some(n => new RegExp(n).test(e))
}
const LS = ["EuReverseChargeTaxExemption"],
    DS = e => LS.includes(e.__typename);

function b0(e) {
    if (e) switch (e.__typename) {
        case "PendingTerms":
            return {
                status: "pending",
                pollDelay: e.pollDelay
            };
        case "UnavailableTerms":
            return {
                status: "unavailable"
            };
        case "FilledTaxExemptionTerms":
            return {
                status: "filled",
                available: e.available.filter(DS).map(kS)
            };
        default:
            return
    }
}
const kS = e => {
    if (e.__typename === "EuReverseChargeTaxExemption") return {
        applied: e.applied,
        handle: "EU_REVERSE_CHARGE_EXEMPTION_RULE",
        details: xS(e)
    }
};

function xS({
    details: e
}) {
    return e ? { ...e,
        taxId: e.taxId ? ? "",
        status: e.status ? ? null
    } : null
}

function T0(e = {}) {
    return e ? .currentProposed ? .length ? e.currentProposed : e ? .negotiated ? .status !== "filled" ? [] : e.negotiated.available.filter(Jo).map(Zo)
}

function y0(e = {}) {
    return e ? .negotiated ? .status !== "filled" ? [] : e.negotiated.available.filter(Jo).map(Zo)
}

function jS({
    checkout: e
}) {
    const t = e.proposal.negotiated.fields.buyerIdentity.value ? .purchasingCompany,
        n = e.proposal.proposed.deliveryLines.peek().some(a => a.fields.deliveryMethodTypes.peek().some(ea));
    return !!t && (!e.isShippingRequired.value || n)
}

function ei(e) {
    return e != null && e.title != null && e.digest != null
}

function ti(e) {
    let t = !1;
    const n = e.value.map(a => Vi(a) || a.sourceTerm !== "delivery" || a.anyAllocation ? a : (t = !0, { ...a,
        anyAllocation: {
            totalAmount: {
                any: !0
            }
        }
    }));
    t && (e.value = n)
}

function I0(e) {
    const t = e.value;
    if (t.length <= 1) return;
    const n = new Map;
    for (const s of t) {
        const o = s.value.type,
            i = n.get(o);
        i ? i.push(s) : n.set(o, [s])
    }
    const a = [];
    let r = !1;
    for (const s of n.values()) {
        const [o, ...i] = s;
        if (!o || (a.push(o), i.length === 0)) continue;
        const d = o.value;
        o.value = { ...d,
            targetMerchandiseLines: [...d.targetMerchandiseLines, ...i.flatMap(l => l.value.targetMerchandiseLines)]
        }, r = !0
    }
    r && (e.value = a)
}

function ka(e) {
    const t = new Map;
    for (const n of e) t.set(n.stableId, n);
    return Array.from(t.values())
}

function tt(e) {
    return e.lineComponents ? .length ? e.lineComponents : ei(e) ? [e] : []
}

function BS(e) {
    return Array.isArray(e) ? e : e.value
}

function US(e) {
    return !Array.isArray(e)
}

function ni(e, t) {
    return tt(e).every(({
        stableId: n,
        requiresShipping: a
    }) => !a || (t[n] ? .length ? ? 0) > 0)
}

function FS(e, t, n) {
    return tt(e).every(({
        stableId: a,
        requiresShipping: r
    }) => !r || n[a] ? .includes(t))
}

function C0(e) {
    return ka(e.filter(t => t.value.deliveryMethodTypes.every(n => n === "SHIPPING" || n === "LOCAL")).flatMap(t => t.value.targetMerchandiseLines ? ? []))
}

function N0(e) {
    return ka(e.filter(t => t.value.deliveryMethodTypes.includes("PICK_UP")).flatMap(t => t.value.targetMerchandiseLines ? ? []))
}

function YS(e) {
    return e.some(t => t.value.deliveryMethodTypes.includes("PICK_UP") && (t.value.targetMerchandiseLines ? ? []).some(n => n.requiresShipping))
}

function HS(e, t) {
    return e.find(n => n.stableId === t) ? ? e.find(n => n.lineComponents ? .some(a => a.stableId === t))
}

function VS({
    deliveryLines: e,
    merchandiseStableIds: t
}) {
    const n = new Set(t);
    e.value = e.value.filter(a => {
        const r = a.value,
            s = r.targetMerchandiseLines.filter(o => !n.has(o.stableId));
        return s.length === r.targetMerchandiseLines.length ? !0 : s.length === 0 ? !1 : (a.value = { ...r,
            targetMerchandiseLines: s
        }, !0)
    })
}

function GS({
    deliveryLines: e,
    discountLines: t,
    merchandiseLines: n,
    merchandiseStableIds: a
}) {
    const r = new Set,
        s = new Set,
        o = n.value;
    for (const i of a) {
        const d = HS(o, i);
        d && (r.add(d.stableId), s.add(d.stableId), d.lineComponents ? .forEach(l => {
            s.add(l.stableId)
        }))
    }
    ve(() => {
        n.value = o.filter(({
            stableId: i
        }) => !r.has(i)), VS({
            deliveryLines: e,
            merchandiseStableIds: [...s]
        })
    }), ti(t)
}

function ai({
    deliveryLines: e,
    deliveryGroupType: t,
    targetDeliveryMethodType: n,
    merchandiseLines: a,
    excludedLine: r,
    insertion: s = "end",
    createDeliveryLineIfMissing: o = !0,
    createDeliveryMethodTypes: i
}) {
    const d = ka(a);
    if (d.length === 0) return !1;
    const l = e.value.find(u => {
        const m = u.value;
        return u !== r && m.type === t && m.deliveryMethodTypes.includes(n)
    });
    if (l) {
        const u = l.fields.targetMerchandiseLines.value,
            m = new Set(d.map(_ => _.stableId)),
            c = u.filter(_ => !m.has(_.stableId));
        return l.value = { ...l.value,
            targetMerchandiseLines: s === "start" ? [...d, ...c] : [...c, ...d]
        }, !0
    }
    return o ? (e.value = [...e.value, ko(zs({
        type: t,
        methodTypes: i ? .length ? [...i] : [n],
        targetMerchandiseLines: d
    }))], !0) : !1
}

function zS({
    deliveryLines: e,
    sourceDeliveryLine: t,
    sourceDeliveryLineValue: n,
    stableIds: a
}) {
    const r = new Set(a),
        s = n.targetMerchandiseLines.filter(o => !r.has(o.stableId));
    if (s.length === 0) {
        e.value = e.value.filter(o => o !== t);
        return
    }
    t.value = { ...n,
        targetMerchandiseLines: s
    }
}

function ri(e) {
    return e.length > 0 && e.every(t => !t.requiresShipping)
}

function WS({
    deliveryLines: e,
    sourceDeliveryLine: t,
    stableId: n,
    targetDeliveryMethodType: a
}) {
    const r = t.value;
    if (r.deliveryMethodTypes.includes(a)) return;
    const s = r.targetMerchandiseLines.find(d => d.stableId === n);
    if (!s || !s.requiresShipping) return;
    const o = r.targetMerchandiseLines.filter(d => d.stableId !== n),
        i = ri(o) ? [s, ...o] : [s];
    ai({
        deliveryLines: e,
        deliveryGroupType: r.type,
        targetDeliveryMethodType: a,
        merchandiseLines: i,
        excludedLine: t,
        insertion: a === "SHIPPING" ? "start" : "end"
    }), zS({
        deliveryLines: e,
        sourceDeliveryLine: t,
        sourceDeliveryLineValue: r,
        stableIds: i.map(d => d.stableId)
    })
}

function qS(e) {
    return e === "SHIPPING" ? "PICK_UP" : "SHIPPING"
}

function xa({
    deliveryLines: e,
    merchandiseLines: t,
    stableId: n,
    targetDeliveryMethodType: a,
    createDeliveryLineIfMissing: r = !0,
    createDeliveryMethodTypes: s,
    shouldMoveNonPhysicalItems: o = !1
}) {
    const i = t.find(l => l.stableId === n) ? ? t.flatMap(l => l.lineComponents ? ? []).find(l => l.stableId === n);
    if (!i || !i.requiresShipping && !o) return !1;
    const d = i.sellingPlan ? .subscriptionDetails ? "SUBSCRIPTION" : "ONE_TIME_PURCHASE";
    return ei(i) ? ai({
        deliveryLines: e,
        deliveryGroupType: d,
        targetDeliveryMethodType: a,
        merchandiseLines: [i],
        createDeliveryLineIfMissing: r,
        createDeliveryMethodTypes: s
    }) : !1
}

function KS(e, t) {
    return e.find(n => n.stableId === t)
}

function XS(e, t) {
    const n = KS(t, e.stableId);
    return n ? .lineComponents ? .length ? tt(n).map(({
        stableId: a
    }) => a) : [e.stableId]
}

function $S({
    deliveryLines: e,
    merchandiseLines: t,
    targetDeliveryMethodType: n,
    createDeliveryLineIfMissing: a,
    createDeliveryMethodTypes: r,
    shouldMoveNonPhysicalItems: s = !1
}) {
    const o = new Set(e.value.flatMap(d => d.value.targetMerchandiseLines.flatMap(l => XS(l, t))));
    let i = !1;
    for (const d of t)
        for (const l of tt(d)) {
            if (o.has(l.stableId)) continue;
            xa({
                deliveryLines: e,
                merchandiseLines: t,
                stableId: l.stableId,
                targetDeliveryMethodType: n,
                createDeliveryLineIfMissing: a,
                createDeliveryMethodTypes: r,
                shouldMoveNonPhysicalItems: s
            }) && (i = !0), o.add(l.stableId)
        }
    return i
}

function P0({
    deliveryLines: e,
    merchandiseLines: t,
    deliveryMethodTypes: n
}) {
    const a = n[0];
    return a ? $S({
        deliveryLines: e,
        merchandiseLines: t,
        targetDeliveryMethodType: a,
        createDeliveryLineIfMissing: !0,
        createDeliveryMethodTypes: n,
        shouldMoveNonPhysicalItems: !0
    }) : !1
}

function QS({
    deliveryLines: e,
    targetDeliveryMethodType: t
}) {
    const n = qS(t);
    e.value.some(a => a.value.deliveryMethodTypes.includes(n) && a.value.targetMerchandiseLines.some(({
        requiresShipping: r
    }) => r)) || (e.value = e.value.filter(a => !a.value.deliveryMethodTypes.includes(n) || !ri(a.value.targetMerchandiseLines)))
}

function O0({
    deliveryLines: e,
    discountLines: t,
    merchandiseLines: n,
    targetDeliveryMethodType: a,
    merchandiseStableIds: r,
    sellableDeliveryMethodsByStableId: s
}) {
    const i = BS(n).filter(m => ni(m, s)),
        d = Array.from(new Set(r));
    a === "SHIPPING" && d.reverse();
    for (const m of d) {
        const c = e.value.filter(_ => _.value.targetMerchandiseLines.some(f => f.stableId === m));
        if (c.length === 0) {
            xa({
                deliveryLines: e,
                merchandiseLines: i,
                stableId: m,
                targetDeliveryMethodType: a
            });
            continue
        }
        for (const _ of c) WS({
            deliveryLines: e,
            sourceDeliveryLine: _,
            stableId: m,
            targetDeliveryMethodType: a
        })
    }
    QS({
        deliveryLines: e,
        targetDeliveryMethodType: a
    });
    const l = ZS({
            deliveryLines: e,
            merchandiseLines: i,
            sellableDeliveryMethodsByStableId: s
        }),
        u = US(n) ? JS({
            deliveryLines: e,
            discountLines: t,
            merchandiseLines: n,
            sellableDeliveryMethodsByStableId: s
        }) : [];
    return ti(t), {
        orphanedMovedToShipping: l,
        orphanedRemovedFromCartStableIds: u
    }
}

function JS({
    deliveryLines: e,
    discountLines: t,
    merchandiseLines: n,
    sellableDeliveryMethodsByStableId: a
}) {
    if (Object.keys(a).length === 0) return [];
    const r = new Set(e.value.flatMap(o => o.value.targetMerchandiseLines.map(i => i.stableId))),
        s = n.value.filter(o => {
            if (!o.requiresShipping) return !1;
            const i = tt(o).filter(({
                requiresShipping: l
            }) => l).map(({
                stableId: l
            }) => l);
            return r.has(o.stableId) || i.every(l => r.has(l)) ? !1 : !ni(o, a)
        }).map(({
            stableId: o
        }) => o);
    return s.length === 0 ? [] : (GS({
        deliveryLines: e,
        discountLines: t,
        merchandiseLines: n,
        merchandiseStableIds: s
    }), s)
}

function ZS({
    deliveryLines: e,
    merchandiseLines: t,
    sellableDeliveryMethodsByStableId: n
}) {
    if (!e.value.some(o => o.value.deliveryMethodTypes.includes("SHIPPING"))) return !1;
    const r = new Set(e.value.flatMap(o => o.value.targetMerchandiseLines.map(i => i.stableId)));
    let s = !1;
    for (const o of t)
        if (FS(o, "SHIPPING", n))
            for (const i of tt(o)) {
                if (r.has(i.stableId)) continue;
                xa({
                    deliveryLines: e,
                    merchandiseLines: t,
                    stableId: i.stableId,
                    targetDeliveryMethodType: "SHIPPING"
                }) && (s = !0), r.add(i.stableId)
            }
    return s
}

function si(e) {
    return new Set(e.map(r => r.fields.type.peek())).size <= 1 ? !1 : ((e.find(r => {
        const s = r.peek();
        return s.type === "ONE_TIME_PURCHASE" && s.deliveryMethodTypes.length > 0
    }) ? ? e[0]) ? .fields.deliveryMethodTypes.value ? ? []).length === 0
}

function eE(e, t) {
    return e.find(a => {
        const r = a.value;
        return r.type === t && r.deliveryMethodTypes.length > 0
    }) ? ? e[0]
}

function tE(e, t) {
    return eE(e, t) ? .fields.deliveryMethodTypes.value ? ? []
}

function R0(e) {
    const t = e.flatMap(n => n.fields.deliveryMethodTypes.value);
    return [...new Set(t)]
}
const nE = new Set(["amazonPay", "applePay", "buyWithPrime", "googlePay", "payPal", "shopPay"]);

function aE({
    isContactVaulted: e,
    identity: t,
    isPartnerEmbed: n = !1,
    embedder: a,
    isInterstitialBrandingEnabled: r = !1,
    customerContactMethodPrefilled: s = !1
}) {
    return e ? n ? t === "sdkCartHints" && (a === "microsoft" || a === "google") && r && s || nE.has(t) : t !== "sdkCartHints" : !1
}
const M0 = new Set(["delivery", "pickup", "shipping"]);

function oi({
    isContactVaulted: e,
    configuration: t,
    identity: n,
    embed: a,
    shop: r
}) {
    return !e || !t.showContactInformation ? !1 : !aE({
        isContactVaulted: e,
        identity: n.current.value,
        isPartnerEmbed: a ? .isFlagshipPartner ? ? !1,
        embedder: a ? .embedder,
        isInterstitialBrandingEnabled: $c({
            embedder: a ? .embedder,
            shop: r
        }),
        customerContactMethodPrefilled: n.customerContactMethodPrefilled
    })
}

function w0({
    configuration: e,
    identity: t,
    shop: n,
    shopPay: a,
    embed: r,
    vaultedSections: s,
    isShippingRequired: o,
    hasSellingPlan: i,
    phoneCountryCode: d
}) {
    if (!e.showContactInformation) return "hidden";
    const l = t.current.value,
        u = n.hasFlagEnabled(ki);
    if (!s.contact) {
        const m = s.delivery && o || s.payment;
        return u && l !== "guest" && m ? "standalone-form" : "form"
    }
    return oi({
        isContactVaulted: !0,
        configuration: e,
        identity: t,
        embed: r,
        shop: n
    }) ? "vaulted-rollup" : u && l === "shopPay" && a.user.isAuthenticatedUser.value && !a.user.email.value && (i || !hm(n, d).includes("PHONE")) ? "standalone-vaulted" : "vaulted-adjacent"
}

function ue({
    vaultedSections: e,
    isShippingRequired: t
}) {
    return e.signal.value.delivery && t.value
}

function Wr({
    concepts: e,
    preactContext: t
}) {
    if (!ue(e)) return !1;
    const {
        source: n,
        identity: a
    } = e;
    return a.current.value === "businessCustomer" ? ne(n) && !t.isBusinessCustomerSingleChoiceMode : ne(n)
}

function ii(e) {
    return fs(e.negotiated.fields.deliveryNext.value)
}

function rE(e) {
    const t = new Set;
    for (const n of e.proposed.deliveryLines.peek())
        for (const a of n.fields.deliveryMethodTypes.peek()) t.add(a);
    return [...t]
}

function di(e) {
    return tE(e.proposed.deliveryLines.value, "ONE_TIME_PURCHASE")
}

function Mn(e, t) {
    if (ii(e) || si(e.proposed.deliveryLines.value)) {
        const a = rE(e);
        return a.length > 0 && a.every(r => r === t)
    }
    return di(e).includes(t)
}

function qr({
    concepts: {
        proposal: e
    },
    preactContext: {
        isSplitShipAndPickup: t
    }
}) {
    return t || ii(e) || si(e.proposed.deliveryLines.value) ? e.proposed.deliveryLines.value.some(a => a.fields.deliveryMethodTypes.value.some(Kr)) : di(e).some(Kr)
}

function Kr(e) {
    return e === "SHIPPING" || e === "LOCAL"
}
const sE = {
        contact: {
            shouldRender: ({
                concepts: {
                    configuration: e,
                    embed: t,
                    identity: n,
                    shop: a,
                    vaultedSections: r
                }
            }) => oi({
                isContactVaulted: r.signal.value.contact,
                configuration: e,
                identity: n,
                embed: t,
                shop: a
            })
        },
        businessCustomerSingleChoice: {
            groupId: "delivery",
            shouldRender: ({
                preactContext: e,
                concepts: t
            }) => ue(t) && t.identity.current.value === "businessCustomer" ? e.isBusinessCustomerSingleChoiceMode : !1
        },
        orderEditDeliveryAddress: {
            groupId: "delivery",
            shouldRender: e => {
                if (!Wr(e)) return !1;
                const {
                    concepts: {
                        proposal: t,
                        isShippingRequired: n
                    }
                } = e, a = t.facts.delivery ? ? [], r = a[0];
                return !((!a.length || !r ? .lines ? .length) && !n.value)
            }
        },
        orderEditShippingMethod: {
            groupId: "delivery",
            shouldRender: e => {
                if (!Wr(e)) return !1;
                const {
                    concepts: {
                        proposal: t,
                        isShippingRequired: n
                    }
                } = e, a = t.facts.delivery ? ? [], r = a[0];
                return (!a.length || !r ? .lines ? .length) && !n.value || !r || r.pickupAddress ? !1 : r.lines ? .some(s => s.deliveryChange !== "REMOVED" && !s.isFulfilled)
            }
        },
        deliveryAddress: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "shipping" : "delivery",
            shouldRender: e => {
                const {
                    concepts: t,
                    preactContext: n
                } = e, {
                    source: a,
                    identity: r
                } = t;
                return !ue(t) || ne(a) || r.current.value === "businessCustomer" && n.isBusinessCustomerSingleChoiceMode ? !1 : qr(e)
            }
        },
        shippingMerchandiseList: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "shipping" : "delivery",
            shouldRender: ({
                concepts: e,
                preactContext: t
            }) => !ue(e) || ne(e.source) || !t.hasShippingMerchandiseLines ? !1 : t.isSplitShipAndPickup
        },
        shippingMethods: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "shipping" : "delivery",
            shouldRender: e => {
                const {
                    concepts: t,
                    preactContext: n
                } = e, {
                    source: a,
                    identity: r
                } = t;
                return !ue(t) || ne(a) || r.current.value === "businessCustomer" && n.isBusinessCustomerSingleChoiceMode || r.current.value === "businessCustomer" && n.businessCustomerCannotProvideShippingAddress ? !1 : qr(e)
            }
        },
        pickupMerchandiseList: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "pickup" : "delivery",
            shouldRender: e => {
                const {
                    concepts: t,
                    preactContext: n
                } = e, {
                    source: a,
                    proposal: r
                } = t;
                return !ue(t) || ne(a) || !n.hasLocalPickupDeliveryLine && !n.deliveryNextLoading || !n.shouldAllowInlineSplit || !YS(r.proposed.deliveryLines.value) ? !1 : n.isSplitShipAndPickup ? !0 : Mn(r, "PICK_UP")
            }
        },
        localPickupOptions: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "pickup" : "delivery",
            shouldRender: e => {
                const {
                    concepts: t,
                    preactContext: n
                } = e, {
                    source: a,
                    identity: r,
                    proposal: s
                } = t;
                return !ue(t) || ne(a) || r.current.value === "businessCustomer" && n.isBusinessCustomerSingleChoiceMode ? !1 : n.isSplitShipAndPickup ? !0 : Mn(s, "PICK_UP")
            }
        },
        pickupPoint: {
            groupId: "delivery",
            shouldRender: ({
                concepts: e,
                preactContext: t
            }) => {
                const {
                    source: n,
                    identity: a,
                    proposal: r
                } = e;
                return !ue(e) || ne(n) || a.current.value === "businessCustomer" && t.isBusinessCustomerSingleChoiceMode ? !1 : Mn(r, "PICKUP_POINT")
            }
        },
        dutyOptions: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "shipping" : "delivery",
            shouldRender: ({
                concepts: e,
                preactContext: t
            }) => {
                const {
                    source: n,
                    identity: a,
                    proposal: r
                } = e;
                return !ue(e) || ne(n) || a.current.value === "businessCustomer" && t.isBusinessCustomerSingleChoiceMode ? !1 : r.negotiated.fields.optionalDuties.value ? .refuseDutiesPermitted ? ? !1
            }
        },
        paymentOptions: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "payment" : void 0,
            shouldRender: ({
                concepts: {
                    vaultedSections: e,
                    installments: t
                }
            }) => e.signal.value.payment && t.isSupported.value
        },
        payment: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "payment" : void 0,
            shouldRender: ({
                concepts: e
            }) => e.vaultedSections.signal.value.payment
        },
        billing: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "payment" : void 0,
            shouldRender: ({
                concepts: {
                    source: e,
                    proposal: t,
                    isShippingRequired: n,
                    vaultedSections: a
                }
            }) => ne(e) ? !1 : jS({
                checkout: {
                    isShippingRequired: n,
                    proposal: t
                }
            }) || a.signal.value.payment && a.signal.value.billing
        },
        cashRedemption: {
            groupId: ({
                preactContext: e
            }) => e.isSplitShipAndPickup ? "payment" : void 0,
            shouldRender: ({
                concepts: {
                    source: e,
                    configuration: t,
                    vaultedSections: n
                },
                preactContext: a
            }) => ne(e) || !a.redemptionEligibilityVisible ? !1 : n.signal.value.payment && t.visibility.showCashRedemption.value
        }
    },
    Xr = {
        default: ["contact", "orderEditDeliveryAddress", "orderEditShippingMethod", "deliveryAddress", "shippingMerchandiseList", "shippingMethods", "pickupMerchandiseList", "localPickupOptions", "pickupPoint", "dutyOptions", "paymentOptions", "payment", "billing", "cashRedemption"],
        businessCustomer: ["contact", "businessCustomerSingleChoice", "orderEditDeliveryAddress", "orderEditShippingMethod", "deliveryAddress", "shippingMerchandiseList", "shippingMethods", "pickupMerchandiseList", "localPickupOptions", "pickupPoint", "dutyOptions", "billing", "paymentOptions", "payment", "cashRedemption"]
    },
    $r = ["pickupMerchandiseList", "localPickupOptions", "shippingMerchandiseList", "deliveryAddress", "shippingMethods"];

function Qr(e) {
    return [...e].sort((t, n) => {
        const a = $r.indexOf(t),
            r = $r.indexOf(n);
        return a !== -1 && r !== -1 ? a - r : 0
    })
}
const L0 = {
    default: Qr(Xr.default),
    businessCustomer: Qr(Xr.businessCustomer)
};

function oE(e, t) {
    return typeof e.groupId == "function" ? e.groupId(t) : e.groupId
}

function D0(e, t) {
    return e.map(n => ({
        sectionId: n,
        groupId: oE(sE[n], t)
    }))
}

function k0(e) {
    if (e.length === 0) return [];
    const t = [];
    let n = [],
        a;
    for (const r of e) n.length > 0 && r.groupId != null && r.groupId !== a && (t.push(n), n = []), n.push(r), a = r.groupId;
    return n.length > 0 && t.push(n), t
}
class wn extends Error {
    constructor() {
        super("NoopCheckoutSections is not implemented"), this.name = "NoopCheckoutSectionsError"
    }
}
class x0 {
    constructor() {
        this.availableToRender = Q(() => {
            throw new wn
        }), this.availableToRenderGrouped = Q(() => {
            throw new wn
        })
    }
    unstable_providePreactContext(t) {
        throw new wn
    }
}

function j0(e) {
    return e ? .__typename === "BusinessCustomerProfile"
}

function B0(e) {
    return e.hasFlagEnabled(Li)
}
const iE = 6,
    dE = 8;

function U0(e) {
    const t = e ? .replace(/\s/g, "");
    if (!(!t || t.length < iE)) return t.slice(0, dE)
}
const lE = ["PAYPAL_EXPRESS", "SHOP_PAY", "GOOGLE_PAY"];

function uE(e, t, n = !1) {
    const a = e.find(d => d.method.type !== "giftCard" && d.method.type !== "redeemable" && !d.due),
        r = n && t.method.type !== "giftCard" && t.method.type !== "redeemable" && t.cost == null && a ? .cost != null ? { ...t,
            cost: a.cost
        } : t,
        s = e.filter(d => d.method.type === "giftCard"),
        o = e.filter(d => d.method.type === "redeemable"),
        i = cE(r, e);
    return [r, ...i, ...s, ...o]
}

function cE(e, t) {
    const n = ["direct", "manualPayment", "customManualPayment", "paymentOnDelivery", "deferred"],
        a = t.filter(o => (n.includes(o.method.type) || !!Jr(o)) && !!o.due),
        r = Jr(e),
        s = a.map(o => ({ ...o,
            method: e.method
        }));
    return r === "PAYPAL_EXPRESS" ? s : a.some(o => o.method.type === "deferred") ? a : r ? a.map(o => ({ ...o,
        method: {
            type: "deferred"
        }
    })) : mE(e) ? _E(a, e) : a
}

function Jr(e) {
    return e.method.type === "wallet" && lE.includes(e.method.name) ? e.method.name : null
}

function mE(e) {
    return e.method.type === "direct" && "sessionId" in e.method
}

function _E(e, t) {
    return e.map(n => ({ ...n,
        method: { ...n.method,
            sessionId: t.method.sessionId
        }
    }))
}

function F0(e, t = !1) {
    return e.find(n => n.type === "direct" && ("alternative" in n ? n.alternative === t : !0))
}

function nt(e) {
    const t = D(),
        n = t.remoteMerchandiseDetails,
        a = C(() => !!n ? .value ? .stableIdToShopId.size),
        r = t[e],
        s = t.remoteConsolidatedTotals;
    return C(() => a.value && s ? .value ? s.value[e] ? ? r.value : r.value)
}

function fE(e) {
    const t = D(),
        n = t.remoteMerchandiseDetails,
        a = t.remotePaymentDue,
        r = C(() => !!n ? .value ? .stableIdToShopId.size),
        s = t[e];
    return C(() => r.value && a ? .value ? a.value : s.value)
}

function D() {
    return pt().current.fields
}

function Y0(e) {
    const t = pt();
    return C(() => t.loading.value.has(e))
}

function gE() {
    return nt("checkoutTotal")
}

function H0() {
    return nt("subtotal")
}

function pE() {
    return nt("totalSavings")
}

function li() {
    return nt("runningTotal")
}

function SE() {
    return nt("subtotalBeforeReductions")
}

function V0() {
    return nt("total")
}

function sn() {
    return fE("paymentDue")
}

function ja(e) {
    return e.amountCombinabilityToken || void 0
}

function G0(e, t, n) {
    const a = new Map;
    return e.forEach((r, s) => {
        const o = n(r);
        if (!o) return;
        const i = a.get(o) ? ? [];
        i.push({
            index: s,
            rate: r
        }), a.set(o, i)
    }), new Set([...a.values()].filter(r => r.length >= 2).flatMap(r => {
        const s = EE(r, t).index;
        return r.map(({
            index: o
        }) => o).filter(o => o !== s)
    }))
}

function EE(e, t) {
    return e.reduce((n, a) => t(a.rate) > t(n.rate) ? a : n)
}

function z0(e) {
    if (e.status === "not_required") return;
    const {
        methods: t,
        selectedDeliveryMethodHandle: n
    } = e;
    return t.find(({
        handle: a
    }) => a === n)
}

function AE(e) {
    if (!(!e || e.status === "unavailable")) return e.lines.map(t => {
        if (t.status !== "not_required") return t.methods.find(({
            handle: n
        }) => n === t.selectedDeliveryMethodHandle)
    }).filter(t => t !== void 0)
}

function vE(e) {
    return [...e.filter(({
        type: t
    }) => t === "ONE_TIME_PURCHASE"), ...e.filter(({
        type: t
    }) => t !== "ONE_TIME_PURCHASE")]
}

function W0(e) {
    return e.toLowerCase().replace(/\s/g, "-")
}

function q0(e) {
    return `-${e}`
}

function K0(e, t) {
    const n = {};
    for (const a of t) a in e && (n[a] = e[a]);
    return n
}

function hE(e) {
    return Ue(e).some(t => t.sellingPlan ? .isFixed !== !0 && t.sellingPlan ? .allowStoreCredit === !0 && t.sellingPlan.subscriptionDetails != null && t.sellingPlan.subscriptionDetails.billingMaxCycles !== 1)
}

function bE(e, t) {
    return !e || !t || t.amount <= 0 ? null : {
        amount: e.amount + t.amount,
        currencyCode: e.currencyCode
    }
}

function X0({
    comparisonPrice: e,
    payableTotal: t,
    suppressed: n,
    hasStoredValue: a
}) {
    return e != null && t != null && !n && !a && t.amount < e.amount
}
const TE = ["refund-policy", "privacy-policy", "terms-of-service", "shipping-policy", "contact-information", "subscription-policy", "purchase-options-cancellation-policy", "terms-of-sale", "legal-notice"];

function yE(e) {
    return e.reduce((t, n) => {
        const {
            shopId: a,
            shopName: r,
            squareLogo: s,
            handle: o,
            sessionToken: i
        } = n;
        return t[a] || (t[a] = {
            shopName: r,
            shopId: a,
            sessionToken: i,
            squareLogo: s,
            policies: new Map
        }), t[a].policies.has(o) || t[a].policies.set(o, n), t
    }, {})
}

function Zr(e, t, n) {
    const a = new Set,
        r = [];
    return e.forEach(({
        handle: s,
        url: o,
        body: i
    }) => {
        a.add(s), r.push({
            shopName: t.shopName,
            shopId: t.shopId,
            sessionToken: t.sessionToken,
            handle: s,
            url: o,
            body: i,
            squareLogo: t.squareLogo,
            name: n.translate("shop_policies", {
                scope: s.replace(/-/g, "_")
            })
        })
    }), TE.forEach(s => {
        a.has(s) || r.push({
            shopName: t.shopName,
            shopId: t.shopId,
            sessionToken: t.sessionToken,
            handle: s,
            url: "",
            body: void 0,
            squareLogo: t.squareLogo,
            name: n.translate("shop_policies", {
                scope: s.replace(/-/g, "_")
            })
        })
    }), r
}

function IE() {
    const {
        i18n: e,
        shop: {
            merchantPolicies: t,
            name: n,
            id: a,
            brandSettings: r,
            remoteShopsConfigMap: s = new Map
        }
    } = q(), o = ie(() => Zr(t, {
        shopName: n,
        shopId: a,
        sessionToken: void 0,
        squareLogo: r ? .squareLogo
    }, e), [t, e, n, a, r ? .squareLogo]), i = ie(() => o.filter(u => u.body || u.url), [o]), d = ie(() => Array.from(s.values()).flatMap(({
        id: u,
        name: m,
        sessionToken: c,
        merchantPolicies: _,
        brandSettings: f
    }) => Zr(_, {
        shopName: m,
        shopId: u,
        sessionToken: c,
        squareLogo: f ? .squareLogo
    }, e)), [s, e]), l = ie(() => yE([...o, ...d]), [o, d]);
    return {
        localPolicies: o,
        remotePolicies: d,
        localPoliciesWithContent: i,
        policiesByShopId: l
    }
}

function CE() {
    const e = D().checkoutCompletionTarget;
    return C(() => e.value === "DRAFT_ORDER")
}

function Ba() {
    const e = D(),
        t = CE();
    return C(() => Gg({
        deferredTotal: e.deferredTotal.value,
        checkoutTotal: e.checkoutTotal.value,
        paymentFlexibilityPaymentTermsTemplate: e.paymentFlexibilityPaymentTermsTemplate.value,
        isCheckoutToDraft: t.value
    }))
}

function $0(e) {
    const n = D().deliveryNext;
    return C(() => it(n.value, e))
}

function ui() {
    const t = D().deliveryNext;
    return C(() => {
        const n = _s(t.value);
        return n.length > 0 ? n : void 0
    })
}

function NE() {
    const e = D().canUpdateDeliveryAddress;
    return C(() => e.value ? ? !0)
}

function Q0() {
    const {
        source: e
    } = q(), t = e.type === "draftOrder", a = D().deliveryNext, r = NE();
    return C(() => {
        const s = AE(a.value),
            i = !!(s && s[0]) ? .isCustomRate;
        return t && i && !r.value
    })
}

function J0() {
    const e = D().deliveryExpectations;
    return C(() => {
        const t = Ki(e.value);
        return t.length > 0 ? t : void 0
    })
}

function Z0() {
    const e = ui();
    return C(() => {
        const t = e.value;
        if (!(!t || t.length === 0)) return t.find(PE)
    })
}

function PE(e) {
    return e ? .status === "available" && e.methods.every(t => t.pickupLocation ? .type === "PickupInStoreLocation")
}

function Ua() {
    const e = D().merchandiseLines;
    return C(() => MS(e.value ? .lines))
}

function on() {
    const e = D().merchandiseLines;
    return C(() => Ue(e.value ? .lines).some(t => t.sellingPlan && t.sellingPlan.isFixed))
}

function eN() {
    const e = D().merchandiseLines;
    return C(() => hE(e.value ? .lines))
}

function tN() {
    const t = D().deliveryNext;
    return C(() => !t.value || t.value.status !== "filled" ? !1 : new Set(t.value.lines.filter(n => n.status !== "not_required").map(({
        type: n
    }) => n)).size > 1)
}

function nN() {
    const e = OE();
    return C(() => e.value > 0)
}

function OE() {
    const e = D().merchandiseLines;
    return C(() => Ue(e.value ? .lines).reduce((t, n) => t + (n.giftCard ? n.quantity : 0), 0))
}

function aN() {
    const e = D().merchandiseLines;
    return C(() => e.value ? .lines ? Ue(e.value.lines).every(t => t.giftCard) : !1)
}

function rN(...e) {
    const t = D().paymentLines;
    return C(() => t.value ? .lines.filter(n => n.method.type === "redeemable" && (e.length === 0 || e.includes(n.method.redemptionSource))) || [])
}

function sN() {
    const e = D().merchandiseLines;
    return C(() => e.value ? .lines.reduce((t, n) => t + n.quantity, 0))
}

function oN() {
    const e = D().merchandiseLines;
    return C(() => e.value ? .lines.reduce((t, n) => t + n.totalPrice.amount, 0))
}

function iN() {
    const e = li();
    return C(() => {
        const t = e.value;
        return t && t ? .amount <= 0
    })
}

function dN() {
    const e = D(),
        t = e.taxes,
        n = e.merchandiseLines;
    return C(() => {
        const a = t.value ? .status;
        return a === "pending" || a === "unavailable" ? !!n.value ? .taxesIncluded : a === "available_total_included"
    })
}

function lN() {
    const e = D().dutiesIncluded;
    return C(() => e.value || !1)
}

function RE() {
    const e = sn(),
        t = on(),
        n = Ba(),
        a = gE();
    return C(() => na({
        paymentDue: e.value,
        checkoutTotal: a.value,
        orderDeposit: n.value,
        hasFixedSellingPlan: t.value
    }))
}

function uN() {
    const {
        shop: {
            id: e
        }
    } = q(), t = ME(), n = D().remoteTotalDetails, a = on(), r = Ba();
    return C(() => {
        const s = new Map([
            [e, t.value]
        ]);
        for (const [o, i] of n.value ? .perShopRemoteTotals ? ? []) {
            const d = na({
                paymentDue: i ? .runningTotal,
                checkoutTotal: i ? .checkoutTotal,
                orderDeposit: r.value,
                hasFixedSellingPlan: a.value
            });
            s.set(o, d)
        }
        return s
    })
}

function ME() {
    const e = D(),
        t = on(),
        n = Ba();
    return C(() => {
        const a = e.paymentDue.value,
            r = e.checkoutTotal.value;
        return na({
            paymentDue: a,
            checkoutTotal: r,
            orderDeposit: n.value,
            hasFixedSellingPlan: t.value
        })
    })
}

function cN(e) {
    const {
        deliveryNext: t,
        remoteMerchandiseDetails: n
    } = D(), a = is(IE()), {
        checkout: r,
        i18n: s,
        shop: {
            name: o,
            id: i,
            remoteShopsConfigMap: d
        }
    } = q();
    return C(() => {
        const l = t.value,
            u = n.value;
        if (l ? .status !== "filled") return {
            allMoneyLines: [],
            moneyLinesForShop: []
        };
        const c = !r.configuration.layout.isOnePage.value,
            _ = l.lines,
            f = vE(_).reduce((E, I) => {
                if (I.status === "not_required") return E;
                const {
                    methods: h,
                    selectedDeliveryMethodHandle: v,
                    type: B
                } = I, S = h.find(({
                    handle: j
                }) => v === j);
                if (!S) return E;
                const T = S ? .priceBreakdown ? .length && S.priceBreakdown.every(j => j.excludeFromDeliveryOptionPrice),
                    g = S ? .priceBreakdown ? .every(j => !!!j.targetMerchandiseLines[0] ? .sellingPlan ? .prepaid);
                if (T && g && c) return E;
                const {
                    shopId: p,
                    shopName: y,
                    isLocal: M
                } = Ji({
                    deliveryLine: I,
                    remoteMerchandiseDetails: u,
                    remoteShopsConfigMap: d,
                    localShopId: i,
                    localShopName: o,
                    fallbackRemoteShopName: s.translate("order_summary.from_other_stores_heading")
                }), R = S.costAfterDiscounts.amount, U = S.cost.amount, H = M && R !== U, k = a.value.policiesByShopId[p] ? .policies.get("shipping-policy"), A = k && (!M || k.body || k.url) ? k : void 0;
                return [...E, {
                    type: B,
                    cost: R,
                    costBeforeDiscounts: U,
                    currencyCode: S.costAfterDiscounts.currencyCode,
                    methodType: S.methodType,
                    shopId: p,
                    shopName: y,
                    shippingPolicy: A,
                    lineId: I.id,
                    hasLocalDiscountApplied: H,
                    amountCombinabilityToken: ja(S)
                }]
            }, []),
            b = e ? f.filter(E => E.shopId === e) : f;
        return {
            allMoneyLines: f,
            moneyLinesForShop: b
        }
    })
}

function wE() {
    const e = D().remoteMerchandiseDetails;
    return C(() => !!e.value ? .stableIdToShopId.size)
}

function mN() {
    const e = D(),
        t = e.merchandiseLines,
        n = e.remoteMerchandiseDetails;
    return C(() => Hi(t.value ? .lines ? ? [], n.value))
}

function _N() {
    const e = ui(),
        t = D().remoteMerchandiseDetails;
    return C(() => nd(e.value ? ? [], t.value))
}

function fN(e) {
    const {
        i18n: t,
        shop: {
            name: n,
            id: a,
            remoteShopsConfigMap: r
        }
    } = q(), s = D();
    return C(() => {
        const o = s.remoteTaxDetails.value,
            i = new Map([]);
        e && i.set(a, {
            totalTax: e,
            shopName: n
        });
        for (const [d, l] of o ? .perShopTaxes ? ? []) {
            if (l.status === "unavailable" || l.status === "pending") continue;
            const u = l.status === "available_total" ? l.totalTax : l.totalIncludedInTarget,
                m = r ? .get(d) ? .name ? ? t.translate("order_summary.from_other_stores_heading");
            i.set(d, {
                totalTax: u,
                shopName: m,
                status: l.status
            })
        }
        return i
    })
}
const gN = () => {
    const e = D(),
        t = wE(),
        n = e.remoteTaxDetails;
    return C(() => {
        if (!t.value) return null;
        const a = n.value;
        return a ? .consolidatedTaxes ? .status === "available_total" ? a.consolidatedTaxes.totalTax ? ? null : a ? .consolidatedTaxes ? .status === "available_total_included" ? a.consolidatedTaxes.totalIncludedInTarget ? ? null : null
    })
};

function LE() {
    const e = RE(),
        t = pE();
    return C(() => bE(e.value, t.value))
}

function pN() {
    const e = SE(),
        {
            shop: t
        } = q(),
        n = t.hasFlagEnabled(Ri),
        a = LE();
    return C(() => n && a.value ? a.value : e.value)
}

function SN() {
    const {
        checkout: e,
        shop: t
    } = q(), n = t.hasFlagEnabled(Ni);
    return C(() => n || !!e.proposal.facts.previouslyPaidTotal)
}

function EN() {
    const {
        checkout: {
            proposal: {
                negotiated: {
                    fields: {
                        sellability: e
                    }
                }
            }
        },
        shop: t,
        observability: n
    } = q();
    return C(() => e.value === void 0 ? OS({
        shop: t,
        missingSellerProposalReason: "app_context_sellability_missing",
        observability: n
    }) : e.value)
}
const DE = ["direct", "local", "paymentOnDelivery", "offsite", "manualPayment", "customManualPayment", "deferred", "chooseLater", "customOnsite", "bank", P.CreditCard, P.PayPal];

function ci(e) {
    return e.type === "wallet" && (e.name === "SHOP_PAY" || e.name === "SHOPIFY_INSTALLMENTS")
}
const kE = {
    current: !1
};

function xE() {
    const e = Gt(typeof window > "u" ? !1 : !kE.current);
    return vi(() => {
        e.value = !0
    }, [e]), e
}
const jE = gt("WalletsContext");

function BE() {
    return ia(jE)
}

function UE() {
    const {
        availableWallets: e
    } = BE(), t = is(e);
    return C(() => t.value.some(Je))
}

function FE({
    deferClientOnlyWalletsUntilHydrated: e = !1
} = {}) {
    const {
        source: {
            type: t
        }
    } = q(), n = D(), a = n.paymentMethods, r = n.paymentLines, s = on(), o = UE(), i = xE();
    return C(() => {
        const d = [WE(s.value), VE(r.value), GE(r.value), zE(o.value), HE(r.value), YE(t)].reduce((l, u) => u(l), a.value || []);
        return e && !i.value ? d.filter(l => !wt(l)) : d
    })
}

function YE(e) {
    return t => t.filter(n => DE.includes(n.type) || (n.type === "wallet" || n.type === "walletsPlatform") && Ra.includes(n.name) && !(ne(e) && n.name === "SHOPIFY_INSTALLMENTS"))
}

function HE(e) {
    return t => t.filter(n => (n.type === "wallet" || n.type === "walletsPlatform") && e ? .lines.some(({
        method: r
    }) => r.type === n.type && r.name === n.name) ? !0 : n.placements ? .includes("PAYMENT_METHOD"))
}

function VE(e) {
    return t => {
        const n = t.filter(({
            type: o
        }) => o !== P.PayPal);
        if (e ? .lines.some(({
                method: o
            }) => o.type === "wallet" && o.name === "PAYPAL_EXPRESS")) return n;
        const r = t.findIndex(o => o.type === "wallet" && o.name === "PAYPAL_EXPRESS"),
            s = t.find(o => o.type === P.PayPal);
        return r < 0 || !s ? t : (s && (n[r] = s), n)
    }
}

function GE(e) {
    return t => {
        const n = e ? .lines.some(({
                method: o
            }) => o.type === "walletsPlatformPaymentMethod" && o.name === W.AmazonPay),
            a = t.findIndex(o => o.type === "walletsPlatform" && o.name === W.AmazonPay),
            r = t.filter(o => o.type !== "walletsPlatform" ? !0 : o.name !== W.AmazonPay),
            s = t[a];
        return s === void 0 || !n || r.splice(a, 0, s), r
    }
}

function zE(e) {
    return t => t.some(wt) && !e ? t.filter(a => !wt(a)) : t
}

function WE(e) {
    return t => {
        if (e) return t.filter(r => !ci(r));
        const n = t.findIndex(r => r.type === "wallet" && r.name === "SHOPIFY_INSTALLMENTS"),
            a = t.findIndex(r => r.type === "wallet" && r.name === "SHOP_PAY");
        if (a !== -1) {
            if (n !== -1) {
                const r = { ...t[a],
                        ...t[n],
                        installments: !0
                    },
                    s = t.filter((o, i) => i !== n && i !== a);
                return s.splice(a, 0, r), s
            }
            return t.filter((r, s) => s !== a)
        }
        return t
    }
}

function mi(e) {
    return [...e.filter(n => n.method.type === "giftCard")]
}

function AN() {
    const {
        paymentLines: e
    } = St();
    return be(() => {
        e.value = mi(e.value)
    }, [e])
}

function vN() {
    const e = St(),
        {
            paymentMethods: t
        } = D(),
        {
            bankIdNumberSignal: n
        } = el(),
        a = e.remotePaymentDetails,
        r = !!qE(t.value).length;
    return () => {
        n.value = void 0;
        const s = e.paymentLines.peek(),
            o = s.find(d => d.method.type === "direct"),
            i = o && !r ? (o.method.creditCardLastFourDigits = void 0, o.method.brand = void 0, o.method.sessionId = void 0, o.method.paymentAttributes = void 0, uE(s, o)) : s;
        if (a) {
            const d = new Map(a.peek());
            if (d && d.size > 0)
                for (const [, l] of d) l.sessionId = void 0;
            a.value = d
        }
        e.paymentLines.value = i
    }
}

function hN() {
    const e = sn(),
        t = Ua(),
        n = D().paymentLines;
    return C(() => !e.value || e.value ? .amount > 0 || t.value ? !1 : !!n.value ? .lines.filter(s => s.cost ? .amount && s.cost.amount > 0) ? .every(s => s.method.type === "giftCard"))
}

function bN(e) {
    const t = D().paymentLines,
        n = sn(),
        a = Ua(),
        r = li();
    return C(() => {
        const s = t.value,
            o = n.value,
            i = r.value,
            d = s ? .lines.filter(l => l.method.type === "redeemable" && (!e || e.includes(l.method.redemptionSource)) || l.method.type === "giftCard").reduce((l, u) => l + (u.cost ? .amount || 0), 0);
        return !!(o && o.amount <= 0 && !a.value && i && d === i.amount)
    })
}

function TN(e) {
    const t = sn(),
        n = Ua(),
        a = D().paymentLines;
    return C(() => {
        const r = t.value;
        return !r || r.amount > 0 || n.value ? !1 : !!a.value ? .lines.filter(o => o.cost ? .amount && o.cost.amount > 0) ? .every(o => o.method.type === "redeemable" && o.method.redemptionSource === e)
    })
}

function yN() {
    const e = St(),
        t = FE();
    return be(() => {
        const n = e.paymentLines.value,
            a = mi(n),
            r = (() => {
                if (t.value.length === 0) return a;
                const s = Ma(t.value).lines[0] ? .method;
                return s ? [{
                    method: s
                }, ...a] : a
            })();
        e.paymentLines.value = r
    }, [e.paymentLines, t])
}

function qE(e) {
    return Fa(e).filter(t => !t.expired)
}

function Fa(e) {
    return e ? .filter(t => t.type === P.CreditCard) || []
}

function IN() {
    const e = D().paymentMethods;
    return C(() => e.value ? .filter(t => t.type === P.CreditCard ? !t.expired : Object.values(P).includes(t.type)) || [])
}

function CN() {
    const e = D().paymentMethods;
    return C(() => Fa(e.value).filter(t => t.expired))
}
const NN = e => {
    const t = St().paymentLines,
        n = t.value[0],
        a = ke(n);
    hi(() => {
        const r = a.current,
            s = t.value[0];
        r && s && !KE(r, s) && !XE(r, s) && e(), a.current = s
    })
};

function KE(e, t) {
    return e === t ? !0 : Gn(e.method, t.method)
}

function XE(e, t) {
    return e.method.type === "wallet" && t.method.type === "wallet" && e.method.name === t.method.name
}

function PN(e, t = {}) {
    return {
        id: e.token,
        paymentMethod: "CREDIT_CARD",
        paymentAttributes: QE(e, t),
        lastUsedAt: e.lastUsedAt ? ? null
    }
}

function $E(e) {
    return {
        paymentMethod: "PAYPAL",
        variant: "billing_agreement",
        id: e.token,
        paypalAccountEmail: e.paypalAccountEmail,
        vaultedToken: e.token,
        lastUsedAt: null
    }
}

function ON(e) {
    const t = e.availableInstruments.reduce((n, a) => {
        const r = a.lastUsedAt ? ? null;
        return r && (!n || r > n) ? r : n
    }, null);
    return {
        id: e.paymentMethodIdentifier,
        paymentMethod: "BANK",
        paymentMethodIdentifier: e.paymentMethodIdentifier,
        displayName: e.displayName,
        lastUsedAt: t
    }
}

function QE(e, {
    cvvVerificationEnabled: t = !1
} = {}) {
    const n = t && e.requiresCvvConfirmation ? {
        type: "proposal-line",
        paymentMethodId: e.token
    } : void 0;
    return {
        id: e.token,
        brand: e.brand,
        defaultPaymentMethod: e.defaultPaymentMethod,
        deletable: e.deletable,
        expired: e.expired,
        expiryMonth: e.expiryMonth,
        expiryYear: e.expiryYear,
        lastDigits: e.displayLastDigits,
        lastUsedAt: e.lastUsedAt,
        name: e.cardholderName,
        billingAddress: {
            address: e.billingAddress
        },
        ...n && {
            cvvVerification: n
        }
    }
}

function JE({
    paymentMethodHistory: e,
    availablePaymentMethods: t
}) {
    const n = eA(e);
    return t.flatMap(a => ZE(a, n))
}

function RN({
    availablePaymentMethods: e,
    paymentMethodHistory: t
}) {
    return ad(e, t) ? Fa(e).length > 0 || e.some(n => n.type === P.PayPal) || e.some(n => n.type === "bank" && n.availableInstruments.length > 0) || JE({
        paymentMethodHistory: t,
        availablePaymentMethods: e
    }).length > 0 : !1
}

function MN(e, t) {
    switch (e.type) {
        case "customOnsite":
            {
                const [n] = e.paymentBrands;
                return e.paymentBrands.length === 1 && n ? .toLowerCase() === "ideal" ? {
                    id: Ke,
                    paymentMethod: "IDEAL",
                    lastUsedAt: t
                } : {
                    id: e.paymentMethodIdentifier,
                    paymentMethod: "CUSTOM_ONSITE",
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    paymentBrands: e.paymentBrands,
                    incentiveType: e.incentiveType,
                    lastUsedAt: t
                }
            }
        case "local":
            return Qe(e) ? {
                id: Ke,
                paymentMethod: "IDEAL",
                lastUsedAt: t
            } : void 0;
        case "wallet":
            switch (e.name) {
                case "APPLE_PAY":
                    return {
                        id: da,
                        paymentMethod: "APPLE_PAY",
                        lastUsedAt: t
                    };
                case "SHOP_PAY":
                    return {
                        id: "shop_pay",
                        paymentMethod: "SHOP_PAY",
                        lastUsedAt: t
                    };
                case "SHOPIFY_INSTALLMENTS":
                    return {
                        id: "shop_pay_installments",
                        paymentMethod: "SHOP_PAY_INSTALLMENTS",
                        lastUsedAt: t
                    };
                case "PAYPAL_EXPRESS":
                    return {
                        paymentMethod: "PAYPAL",
                        variant: "wallet",
                        id: "paypal_express",
                        lastUsedAt: t
                    };
                default:
                    return
            }
        case P.PayPal:
            return $E(e);
        case "offsite":
            return {
                id: e.paymentMethodIdentifier,
                paymentMethod: "OFFSITE",
                name: e.name,
                paymentMethodIdentifier: e.paymentMethodIdentifier,
                paymentBrands: e.paymentBrands,
                lastUsedAt: t
            };
        case "manualPayment":
            return {
                id: e.id,
                paymentMethod: "MANUAL_PAYMENT",
                name: e.name,
                additionalDetails: e.additionalDetails,
                paymentMethodIdentifier: e.paymentMethodIdentifier,
                lastUsedAt: t
            };
        case "customManualPayment":
            return {
                id: e.id,
                paymentMethod: "CUSTOM_MANUAL_PAYMENT",
                name: e.name,
                additionalDetails: e.additionalDetails,
                paymentMethodIdentifier: e.paymentMethodIdentifier,
                lastUsedAt: t
            };
        case "paymentOnDelivery":
            return {
                id: e.paymentMethodIdentifier,
                paymentMethod: "PAYMENT_ON_DELIVERY",
                name: e.name,
                additionalDetails: e.additionalDetails,
                paymentMethodIdentifier: e.paymentMethodIdentifier,
                lastUsedAt: t
            };
        case "bank":
            return {
                id: e.paymentMethodIdentifier,
                paymentMethod: "BANK",
                paymentMethodIdentifier: e.paymentMethodIdentifier,
                displayName: e.displayName,
                lastUsedAt: t
            };
        case "deferred":
            return {
                id: "deferred",
                paymentMethod: "DEFERRED",
                displayName: e.displayName,
                lastUsedAt: null
            };
        default:
            return
    }
}

function ZE(e, t) {
    switch (e.type) {
        case "direct":
            return [];
        case P.CreditCard:
            return [];
        case "giftCard":
        case "redeemable":
            return [];
        case "deferred":
            return [{
                id: "deferred",
                paymentMethod: "DEFERRED",
                displayName: e.displayName,
                lastUsedAt: null
            }];
        case "customOnsite":
            {
                const [n] = e.paymentBrands;
                if (e.paymentBrands.length !== 1 || !n) return [];
                const a = t.get(oe(n));
                return a ? n.toLowerCase() === "ideal" ? [{
                    id: Ke,
                    paymentMethod: "IDEAL",
                    lastUsedAt: a
                }] : [{
                    id: e.paymentMethodIdentifier,
                    paymentMethod: "CUSTOM_ONSITE",
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    paymentBrands: e.paymentBrands,
                    incentiveType: e.incentiveType,
                    lastUsedAt: a
                }] : []
            }
        case "local":
            {
                const n = t.get(oe(e.name));
                return !n || !Qe(e) ? [] : [{
                    id: Ke,
                    paymentMethod: "IDEAL",
                    lastUsedAt: n
                }]
            }
        case P.PayPal:
            return [];
        case "bank":
            return [];
        case "wallet":
            switch (e.name) {
                case "APPLE_PAY":
                    {
                        const n = t.get(oe(e.name));
                        return n ? [{
                            id: da,
                            paymentMethod: "APPLE_PAY",
                            lastUsedAt: n
                        }] : []
                    }
                case "SHOP_PAY":
                    {
                        const n = t.get(oe(e.name));
                        return n ? [{
                            id: "shop_pay",
                            paymentMethod: "SHOP_PAY",
                            lastUsedAt: n
                        }] : []
                    }
                case "SHOPIFY_INSTALLMENTS":
                    {
                        const n = t.get(oe(e.name));
                        return n ? [{
                            id: "shop_pay_installments",
                            paymentMethod: "SHOP_PAY_INSTALLMENTS",
                            lastUsedAt: n
                        }] : []
                    }
                case "PAYPAL_EXPRESS":
                    {
                        const n = t.get(oe(e.name));
                        return n ? [{
                            paymentMethod: "PAYPAL",
                            variant: "wallet",
                            id: "paypal_express",
                            lastUsedAt: n
                        }] : []
                    }
                case "GOOGLE_PAY":
                case "VENMO":
                    return [];
                default:
                    return qe(e)
            }
        case "walletsPlatform":
            return [];
        case "offsite":
            {
                const n = t.get(oe(e.name));
                return n ? [{
                    id: e.paymentMethodIdentifier,
                    paymentMethod: "OFFSITE",
                    name: e.name,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    paymentBrands: e.paymentBrands,
                    lastUsedAt: n
                }] : []
            }
        case "manualPayment":
            {
                const n = es(t, e.name);
                return n ? [{
                    id: e.id,
                    paymentMethod: "MANUAL_PAYMENT",
                    name: e.name,
                    additionalDetails: e.additionalDetails,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    lastUsedAt: n
                }] : []
            }
        case "customManualPayment":
            {
                const n = t.get(oe(`custom_payment_method:${e.id}`));
                return n ? [{
                    id: e.id,
                    paymentMethod: "CUSTOM_MANUAL_PAYMENT",
                    name: e.name,
                    additionalDetails: e.additionalDetails,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    lastUsedAt: n
                }] : []
            }
        case "paymentOnDelivery":
            {
                const n = es(t, e.name);
                return n ? [{
                    id: e.paymentMethodIdentifier,
                    paymentMethod: "PAYMENT_ON_DELIVERY",
                    name: e.name,
                    additionalDetails: e.additionalDetails,
                    paymentMethodIdentifier: e.paymentMethodIdentifier,
                    lastUsedAt: n
                }] : []
            }
        default:
            qe(e)
    }
}

function eA(e) {
    const t = new Map;
    for (const n of e) {
        const a = oe(n.paymentMethod);
        if (!a) continue;
        const r = t.get(a);
        (!r || n.lastUsedAt > r) && t.set(a, n.lastUsedAt)
    }
    return t
}

function oe(e) {
    return e ? .trim().toLowerCase() ? ? ""
}

function es(e, t) {
    if (!t) return;
    const n = oe(t),
        a = e.get(n);
    if (a) return a;
    const r = n.replace(/\s*\(.*?\)\s*/g, "").trim();
    if (r !== n) {
        const o = e.get(r);
        if (o) return o;
        const i = r.replace(/\s+/g, "_");
        if (i !== r) {
            const d = e.get(i);
            if (d) return d
        }
    }
    const s = n.replace(/\s+/g, "_");
    if (s !== n) {
        const o = e.get(s);
        if (o) return o
    }
}

function wN(e) {
    return [...e].some(t => t.code === "PAYMENTS_ADDRESS1_REQUIRED")
}
const tA = "amazonCheckoutSessionId",
    Ya = "amazon_cancelled",
    Ha = "wallet",
    nA = "promiseId",
    aA = [tA, nA, Ya, Ha];

function _i(e, t) {
    return e ? .find(n => n.type === "walletsPlatform" && n.name === t)
}

function LN({
    paymentLines: e,
    paymentMethods: t,
    urlParams: n
}) {
    const a = !!gs(e, W.AmazonPay),
        r = !!_i(t, W.AmazonPay),
        s = n[Ha],
        o = n[Ya],
        i = s === W.AmazonPay && o !== "true";
    return !!((a || i) && r)
}

function DN({
    paymentLines: e,
    paymentMethods: t,
    urlParams: n,
    isThankYouPage: a
}) {
    const r = !!gs(e, W.BuyWithPrime),
        s = !!_i(t, W.BuyWithPrime),
        o = n[Ha],
        i = n[Ya],
        d = o === W.BuyWithPrime && !i;
    return !!((r || d) && s || a && r)
}

function rA(e, t) {
    e.value = Object.fromEntries(aA.map(n => [n, t(n)]))
}

function kN(e) {
    rA(e, () => null)
}

function sA(e) {
    if (!e.method ? .walletContent) return !1;
    const {
        walletContent: t
    } = e.method;
    return t.data !== "" && t.header ? .transactionId !== "" && t.header ? .ephemeralPublicKey !== "" && t.header ? .publicKeyHash !== "" && t.lastDigits !== "" && t.signature !== "" && t.version !== "" && t.paymentMethodIdentifier !== ""
}

function oA({
    supportsOnePage: e,
    isShopPayActive: t
}) {
    return e && !t
}

function xN({
    isOnePage: e,
    isApplePay3PageVaultedReviewEnabled: t,
    asPaymentMethod: n
}) {
    return e || t && !n
}

function jN({
    paymentLines: e,
    isOnePage: t,
    isShopPayActive: n
}) {
    if (!oA({
            supportsOnePage: t,
            isShopPayActive: n
        })) return !1;
    const r = Te(e, "APPLE_PAY");
    return r ? sA(r) : !1
}

function BN({
    identity: e
}, {
    showPayWithApplePayButton: t,
    paymentFullyCoveredByRedeemablesAndGiftCards: n,
    isApplePayInShopPayKillswitched: a
}) {
    if (e.current.value === "shopPay") {
        const r = t && !n && !a;
        return {
            showApplePay: r,
            isApplePayInShopPay: r
        }
    }
    return {
        showApplePay: t,
        isApplePayInShopPay: !1
    }
}

function iA(e) {
    if (!e.method ? .walletContent) return !1;
    const {
        walletContent: t
    } = e.method, n = t.signature !== "" && t.signedMessage !== "" && t.protocolVersion !== "", a = !!t.sessionId;
    return n || a
}

function UN({
    paymentLines: e
}) {
    const t = Te(e, "GOOGLE_PAY");
    return t ? iA(t) : !1
}

function FN({
    paymentLines: e
}) {
    const t = Te(e, "GOOGLE_PAY") ? .method ? .walletContent;
    return !t || t.sessionId ? !1 : !!t.signature && !!t.signedMessage && !!t.protocolVersion
}

function dA(e) {
    const {
        walletContent: t
    } = e.method;
    return !!(t ? .email && t ? .token && t ? .payerId)
}

function YN({
    paymentLines: e,
    isOnePage: t
}) {
    if (!t) return !1;
    const n = Te(e, "PAYPAL_EXPRESS");
    return n ? dA(n) : !1
}
const lA = [/Internal error\. Looks like something went wrong on our end/, /Session source not found/, /Country [A-Z]{0,2} is not supported/, /Invalid session token/, /Invalid query string parameter\./, /server_unavailable/];

function HN(e) {
    return lA.some(t => t.test(e))
}
class VN extends Error {
    constructor() {
        super(...arguments), this.name = "UnactionableGraphQLExecutionError"
    }
}
const GN = 1e3,
    zN = 1e3,
    WN = 1e3;
let It;

function uA() {
    return It || (It = bi(() => Ci(() =>
        import ("./receipt-mappers.DbC12m7I.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5]))).then(({
        receiptForUI: e
    }) => e), It)
}

function qN(e) {
    const t = e ? .latestReceipt;
    return !!(e ? .status !== "abandoned" && t && t.__typename !== "ReceiptNotFound" && t.__typename !== "FailedReceipt")
}

function KN() {
    const e = uA();
    return e.catch(() => {}), e
}
const Ln = "__storage_test";
var cA = (e => (e.QuotaExceeded = "quotaExceeded", e.Usable = "usable", e.Unavailable = "unavailable", e.Unusable = "unusable", e))(cA || {});

function mA(e) {
    return e instanceof DOMException && (e.code === 1014 || e.name === "NS_ERROR_DOM_QUOTA_REACHED" || e.code === 22 || e.name === "QuotaExceededError")
}

function dn(e) {
    let t;
    if (!(typeof window > "u")) {
        try {
            t = window[e]
        } catch {}
        return t
    }
}

function XN(e) {
    const t = dn(e);
    if (t == null) return {
        result: "unavailable"
    };
    try {
        return t.setItem(Ln, Ln), t.removeItem(Ln), {
            result: "usable"
        }
    } catch (n) {
        return mA(n) && t && t.length > 0 ? {
            result: "quotaExceeded",
            error: n
        } : {
            result: "unusable",
            error: n
        }
    }
}

function $N(e, t = null, n = !1) {
    const a = dn(n ? "sessionStorage" : "localStorage");
    try {
        let r = a ? .getItem(e);
        try {
            return r = r ? JSON.parse(r) : null, r === "undefined" || r == null ? t : r
        } catch {
            return r === "undefined" || r == null ? t : r
        }
    } catch {
        return t
    }
}

function QN(e, t, n = !1) {
    const a = dn(n ? "sessionStorage" : "localStorage");
    try {
        return a ? .setItem(e, JSON.stringify(t))
    } catch {}
}

function JN(e, t = !1) {
    const n = dn(t ? "sessionStorage" : "localStorage");
    try {
        return n ? .removeItem(e)
    } catch {}
}
const ZN = "usable",
    eP = {
        core: {
            type: "production",
            url: "https://app.shopify.com"
        },
        checkout: {
            type: "production",
            url: "https://checkout.shopify.com"
        },
        hostedFields: {
            type: "production",
            url: "https://checkout.pci.shopifyinc.com/build/09497de/card_fields.js"
        },
        shopServer: {
            type: "production",
            url: "https://shop.app"
        },
        serverShopApp: {
            type: "production",
            url: "https://server.shop.app"
        },
        payShopifyCom: {
            type: "production",
            url: "https://pay.shopify.com"
        },
        admin: {
            type: "production",
            url: "https://admin.shopify.com"
        },
        shopJS: {
            type: "production",
            url: "/cdn/shopifycloud/shop-js"
        },
        webPixelsManager: {
            type: "production",
            url: "/cdn/wpm"
        },
        webPixelsManagerExtensions: {
            type: "production",
            url: "https://extensions.shopifycdn.com"
        },
        trekkie: {
            type: "production",
            url: "/cdn"
        },
        portableWallets: {
            type: "production",
            url: "/cdn"
        },
        atlas: {
            type: "production",
            url: "https://atlas.shopifysvc.com"
        }
    },
    tP = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-"),
    _A = /[\w-]+/,
    nP = /\d+/;

function aP(e, t, n = _A) {
    return typeof e != "string" ? !1 : new RegExp(`^gid://shopify/${t}/${n.source}$`).test(e)
}

function rP(e) {
    try {
        return e ? Ze(e) : void 0
    } catch {
        return
    }
}

function sP(e, t, n = {}) {
    const a = `gid://shopify/${e}/${t}`;
    if (Object.keys(n).length === 0) return a;
    const s = new URLSearchParams(n).toString();
    return `${a}?${s}`
}

function oP({
    serialized: e,
    expiration: t
}) {
    if (e && t) {
        const n = Number(t);
        if (Number.isFinite(n) && Date.now() < n) return e
    }
}
const fA = new Set(["ApplyChangeRejectedError", "ExtensionNegotiatorUsageError", "ExtensionNegotiatorMaxQueueSizeError", "TooManyChangesError", "ExtensionsMetafieldsError", "ExtensionInteractionError", "ExtensionMissingRequiredAccessError", "ExtensionInterceptorError", "InvalidInterceptionRequestError", "ExtensionUsageError", "AddressApiError", "StorefrontQueryError", "AddressAutocompleteUnexpectedFieldError"]),
    gA = new Set(["ExtensionNegotiatorError", "ExtensionStaleNegotiatorError", "ExtensionUnsupportedFeatureError", "StorefrontMissingToken", "ExtensionCustomerPrivacyLikelyBotError", "ExtensionCustomerPrivacyApiBrowserError", "ExtensionPostMessageMemoryError", "ExtensionTimeoutError", "SessionTokenNotFoundError", "SessionTokenAbortError", "StorefrontResponseParseError", "ExtensionAssetFetchError", "ExtensionSandboxAssetFetchError", "ExtensionSandboxTruncatedPolyfillError", "LocalExtensionRestartedError", "LocalExtensionDestroyedBeforeMountedError", "ExtensionDestroyedBeforeFinishedMountingError", "AddressAutocompleteMissingSuggestionError", "NoComponentFoundForRemoteElementError", "HostedIframeHandshakeTimeoutError"]);

function pA(e) {
    return fA.has(e)
}

function SA(e) {
    return gA.has(e)
}

function iP(e) {
    return pA(e) || SA(e)
}
const EA = [/bytedance-ads$/i, /Acunetix-Deepscan/i, /Storebot-Google/i, /Googlebot/i, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/74\.0\.3729\.131 Safari\/537\.36$/, /^Mozilla\/5\.0 \(Windows NT 10\.0; WOW64; rv:58\.0\) Gecko\/20100101 Firefox\/59\.0$/, /facebookexternalhit/i, /meta-externalagent/i, /meta-externalads/i, /meta-externalfetcher/i, /meta-webindexer/i, /ClaudeBot/i, /Amazonbot/i, /Baiduspider/i, /PetalBot/i];

function dP(e) {
    return EA.some(t => t.test(e))
}
const AA = [/\bDdg\//, /\bEdgiOS\//];

function lP(e) {
    return AA.some(t => t.test(e))
}

function uP(e, {
    isShopPayActive: t,
    shopPay: n
}) {
    const a = Ti(typeof e == "string" ? new URL(e) : e, {
        isShopPayActive: t,
        isShopPayExternal: n.isExternal
    });
    return a == null ? void 0 : (a.route.startsWith("/") ? a.route.slice(1) : a.route) || "information"
}
const cP = "checkout:wallet-interactive",
    mP = "checkout:wallet-offered-at-load",
    fi = 200;

function _P(e, t) {
    const [n, a] = os(e);
    return ft(() => {
        const r = setTimeout(() => {
            a(e)
        }, t);
        return () => {
            clearTimeout(r)
        }
    }, [e, t]), n
}

function fP(e, t = fi) {
    const n = ke(),
        a = ke(e);
    return a.current = e, be((...r) => {
        n.current != null && clearTimeout(n.current), n.current = setTimeout((...s) => a.current ? .(...s), t, ...r)
    }, [t])
}

function gP(e, t = fi) {
    let n;
    return function(...a) {
        clearTimeout(n), n = setTimeout(() => e.apply(this, a), t)
    }
}

function pP(e) {
    const t = ["c", "co", "o", "ac", "cn", "do", "md", "bin", "sh", "sim", "e", "ba", "pc", "uc"],
        n = "(?:[a-z]{2,3}|zh-hans|zh-hant)(?:-[a-zA-Z0-9]+)?",
        a = `(?:${t.join("|")})`,
        i = `${e?"^/checkout/[0-9]+":"^.*"}/${a}/[a-zA-Z0-9=\\-_]+(?:/${n})?`;
    return new RegExp(`${i}(/|$)`, "i")
}

function SP(e, t) {
    const n = new URL(e);
    if (n.searchParams.set("data_via", "query_param"), t) {
        const a = new URL(t);
        n.searchParams.delete(gi), n.searchParams.set("return_to", a.href)
    } else {
        const a = vA();
        n.searchParams.set("return_to", a)
    }
    return n
}

function vA() {
    if (typeof window > "u") return "";
    const e = new URL(window.location.href);
    return e.searchParams.delete(gi), e.href
}
const gi = "_cD",
    EP = "preselect_method",
    AP = "preselect_id",
    vP = "wallet_subscription_review_required_banner_less",
    hP = ["SHOP_PAY", "APPLE_PAY", "PAYPAL_EXPRESS", "GOOGLE_PAY", W.BuyWithPrime, W.AmazonPay, "VENMO"],
    Va = ["SHOP_PAY", "GOOGLE_PAY", "SHOPIFY_INSTALLMENTS", W.AmazonPay, W.BuyWithPrime],
    pi = [...Va, "APPLE_PAY"],
    bP = ["APPLE_PAY", "PAYPAL_EXPRESS", "VENMO", "GOOGLE_PAY", W.AmazonPay, W.BuyWithPrime],
    TP = [Lt.InvalidExtensionState, Lt.InvalidCaptcha],
    yP = "payment_method_unavailable",
    IP = "shipping_country_unavailable",
    CP = ["AS", "GU", "MP", "PR", "VI"],
    NP = 6,
    hA = new Set(["customManualPayment", "direct", "giftCard", "local", "manualPayment", "noop", "offsite", "customOnsite", "paymentOnDelivery"]);

function bA({
    line: e,
    paymentMethods: t,
    purchasingCompany: n,
    isBillingAddressForced: a = !1
}) {
    return hA.has(e.method.type) || e.method.type === "bank" || yA({
        line: e,
        paymentMethods: t,
        purchasingCompany: n,
        isBillingAddressForced: a
    }) || IA({
        line: e,
        purchasingCompany: n
    })
}

function PP(e, t, n, a) {
    return e.map(r => RA(r, t, n, a ? ? {})).reduce((r, s) => s == null ? r : [...r, ...s], []).concat(t.filter(r => r.method.type === "giftCard" || r.method.type === "redeemable"))
}

function TA(e) {
    const t = e.find(n => !n.due && !De(n));
    return t ? .method.type === "shopWallet" && t.method.shopPayApprovalId ? t : void 0
}

function OP(e) {
    return e.map(n => je(n.method)) ? ? []
}

function yA({
    line: e,
    paymentMethods: t,
    purchasingCompany: n,
    isBillingAddressForced: a = !1
}) {
    if (e.method.type !== "wallet") return !1;
    const r = n ? pi : Va;
    if (e.method.name !== "AMAZON_PAY_CLASSIC" && r.includes(e.method.name)) return !0;
    const s = tp(t) && !a;
    return e.method.name === "PAYPAL_EXPRESS" && !s
}

function IA({
    line: e,
    purchasingCompany: t
}) {
    const n = t ? pi : Va;
    return e.method.type === "walletsPlatformPaymentMethod" && n.includes(e.method.name)
}

function RP({
    lines: e,
    paymentMethods: t,
    purchasingCompany: n,
    isBillingAddressForced: a = !1
}) {
    return e.some(r => bA({
        line: r,
        paymentMethods: t,
        purchasingCompany: n,
        isBillingAddressForced: a
    }))
}
const MP = e => e.length > 1 ? !1 : e.some(({
    method: t
}) => t.type === "direct" || t.type === "wallet" && t.name === "SHOP_PAY");

function wP(e) {
    return e.sort((t, n) => {
        const a = t.method.type === "giftCard",
            r = n.method.type === "giftCard";
        return a && !r ? -1 : !a && r ? 1 : 0
    })
}

function LP(e, t = !1) {
    return (t ? e.filter(a => a.method.type === "giftCard" || a.method.type === "redeemable") : e).filter((a, r) => {
        if (a.method.type === "deferred" && e.length !== 1) return !1;
        if (!a.due) return !0;
        const s = e.some((o, i) => r !== i && (CA(a, o) || NA(a, o)));
        return !!(a.due && !s)
    })
}

function CA(e, t) {
    return "paymentMethodIdentifier" in e.method && "paymentMethodIdentifier" in t.method && e.method.paymentMethodIdentifier === t.method.paymentMethodIdentifier
}

function NA(e, t) {
    return e.method.type === "wallet" && t.method.type === "wallet" && e.method.name === t.method.name && PA(e.method.walletContent ? .paymentMethodIdentifier, t.method.walletContent ? .paymentMethodIdentifier)
}

function PA(e, t) {
    return !!e && !!t && e === t
}

function DP(e) {
    return e.find(jo) ? .method
}

function kP(e) {
    return e.map(t => t.method).find(t => t.type === "customOnsite")
}

function xP(e) {
    return e.find(({
        method: t
    }) => je(t).toLowerCase() === "multibanco")
}

function OA(e, t) {
    return e.some(n => n.type === "direct" && n.paymentMethodIdentifier === t.paymentMethodIdentifier)
}

function jP(e, t, n) {
    const {
        method: a
    } = e;
    return a.type === "direct" ? OA(t, a) : t.some(r => Mr(r, n) === Mr(a, n))
}

function BP(e) {
    return (e.method.type === "wallet" || e.method.type === "walletsPlatformPaymentMethod") && Ra.includes(e.method.name)
}

function RA(e, t, n, {
    negotiatedPaymentLines: a,
    deferredTotal: r,
    hasPayableDeposit: s = !1,
    hasFixedSellingPlan: o = !1,
    rebuild: i = !1,
    paymentTermsTemplateType: d,
    preserveShopPayApproval: l = !1
}) {
    if (MA(e)) return null;
    const u = DA(e, n),
        m = TA(t);
    if (l && m && n.some(f => ci(f) && je(f) === u)) return [m, ...t.filter(f => f.due && !De(f))];
    const c = kA(u, t, a),
        _ = wA(t, r, !1, s, o, d);
    return c && !i ? LA(c, _, s) : xA(u, n, _, s)
}

function UP(e) {
    return e ? Te(e.lines, "GOOGLE_PAY") !== void 0 : !1
}

function FP(e) {
    return e ? Te(e.lines, "PAYPAL_EXPRESS") !== void 0 : !1
}

function MA(e) {
    return e === "giftCard" || e === "redeemable"
}

function wA(e, t, n = !1, a = !1, r = !1, s) {
    return n ? rn(t, a, r, s) : e.find(i => !!i.due) ? .due
}

function LA(e, t, n) {
    return t ? ["direct", P.CreditCard, P.PayPal].includes(e.method.type) && !n ? [e] : [e, { ...e,
        due: t
    }] : [e]
}

function DA(e, t) {
    if (e === "creditCards") {
        const n = t.find(a => a.type === P.CreditCard && !a.expired);
        return n ? Ca(n) : "direct"
    }
    return e
}

function Jn(e, t) {
    const n = je(t);
    return t.type === "direct" && e === "direct" && n === "creditCards" || t.type === P.CreditCard && e.startsWith(`${P.CreditCard}-`) && e === Ca(t) ? !0 : n === e
}

function kA(e, t, n) {
    const a = t.find(s => Jn(e, s.method));
    if (a) return a;
    const r = n ? .find(s => Po(s.method) && Jn(e, s.method));
    return r || null
}

function xA(e, t, n, a) {
    const r = t.find(s => Jn(e, s));
    return r ? r.type === "local" && !a ? [We(r)] : n && an(r) ? [We(r), Oa(r, n, a)] : [We(r)] : null
}
const jA = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]? 0ZZ$/,
    BA = /^[A-Z][0-9][A-Z] 0Z0$/;

function YP(e, t) {
    if (e == null || t == null) return !1;
    const n = e.trim().toUpperCase();
    switch (t) {
        case "CA":
            return BA.test(n);
        case "GB":
            return jA.test(n);
        default:
            return !1
    }
}

function HP({
    managedByMarketsPro: e
}) {
    return !e
}

function VP({
    route: e,
    isEmbedded: t,
    source: n,
    checkout: a,
    shopPay: r
}) {
    return FA(e) && UA({
        isEmbedded: t,
        isShopPayActive: a.identity.current.value === "shopPay",
        isShopPayExternal: r.isExternal,
        isSourceSimulated: n.type === "simulated",
        isSourceShopPayExternal: n.type === "shopPayExternal",
        hasCheckoutSessionIdentifier: !!n.checkoutSessionIdentifier,
        embeddedShopPayServerRenderEnabled: !0
    })
}

function UA({
    isShopPayActive: e,
    isEmbedded: t,
    embeddedShopPayServerRenderEnabled: n,
    isShopPayExternal: a,
    isSourceSimulated: r,
    isSourceShopPayExternal: s,
    hasCheckoutSessionIdentifier: o
}) {
    return e && (!t || n) && !a && !r && !s && o
}

function FA(e) {
    return e === "/shoppay" || e === "shoppay"
}
const YA = ["/processing", "/throttle", "/post-purchase"],
    HA = "/shoppay_login",
    VA = [...YA, HA];

function GP({
    isShopPay: e,
    isOnePage: t,
    path: n
}) {
    return e && t && !VA.some(a => n.startsWith(a))
}
const zP = e => {
        const t = e ? ? (typeof window > "u" ? void 0 : window.location.href);
        if (!t) return;
        let n;
        try {
            n = typeof t == "string" ? new URL(t).pathname : t.pathname
        } catch {
            return
        }
        const a = n.match(/checkout\/([^/]+)\/([a-z]{2,3})/) ? .[1];
        if (!a) return;
        const r = parseInt(a, 10);
        if (!isNaN(r)) return r
    },
    GA = 10;

function WP(e) {
    try {
        const t = zA(e);
        if (!t) return;
        const {
            outcome: n,
            tokens: a,
            uniqueToken: r,
            visitToken: s
        } = t;
        try {
            e.observability.counter({
                name: "minted_tracking_tokens_persist",
                value: 1,
                attributes: {
                    outcome: n,
                    tokens: a
                }
            })
        } catch {}
        if (n !== "persist_attempted") return;
        Promise.resolve(yi(r, s)).catch(() => {})
    } catch {}
}

function zA({
    shop: e,
    serializations: t,
    isShopApp: n,
    cookieString: a
}) {
    try {
        if (!e.hasFlagEnabled(Di)) return;
        const r = t.get("shopifyYIsNewlyMinted") === !0,
            s = t.get("shopifySIsNewlyMinted") === !0,
            o = ts(r, s);
        if (t.get("isNewCookieStorageEnabled") !== !0) return {
            outcome: "new_cookie_storage_disabled",
            tokens: o
        };
        if (n) return {
            outcome: "shop_app",
            tokens: o
        };
        const i = WA(t.get("servedAt"));
        if (i !== !1) return {
            outcome: i === void 0 ? "stale_unknown_age" : "stale_document",
            tokens: o
        };
        if (!r && !s) return {
            outcome: "no_tokens_minted",
            tokens: "none"
        };
        const d = Dn(t.get("shopifyY"), t.get("shopifyYExpiration")),
            l = Dn(t.get("shopifyS"), t.get("shopifySExpiration")),
            u = a ? ? document.cookie,
            m = r && !!d && !ns(u, "_shopify_y"),
            c = s && !!l && !ns(u, "_shopify_s");
        return !m && !c ? {
            outcome: r && !!d || s && !!l ? "minted_cookies_blocked" : "minted_tokens_unusable",
            tokens: o
        } : {
            outcome: "persist_attempted",
            tokens: ts(m, c),
            uniqueToken: m ? d : void 0,
            visitToken: c ? l : void 0
        }
    } catch {
        return
    }
}

function ts(e, t) {
    return [e && "y", t && "s"].filter(Boolean).join(",") || "none"
}

function WA(e) {
    return typeof e != "number" || !Number.isFinite(e) ? void 0 : (qA() - e) / 1e3 > GA
}

function ns(e, t) {
    return e.split(";").some(n => {
        const [a, ...r] = n.split("=");
        return a.trim() !== t ? !1 : Dn(r.join("=").trim()) !== void 0
    })
}

function qA() {
    return typeof performance.timeOrigin == "number" ? performance.timeOrigin : Date.now() - performance.now()
}
const Ga = "wallet_prefilled_guest_checkout",
    KA = "shop_pay";
class XA extends Error {
    constructor() {
        super(...arguments), this.name = "UnhandledGuestReturnSourceError"
    }
}

function qP(e) {
    const t = e.searchParams.get(Ga);
    return t === KA ? t : void 0
}

function KP(e, t) {
    e.searchParams.set(Ga, t)
}

function XP(e) {
    e.searchParams.delete(Ga)
}

function $P(e) {
    switch (e) {
        case "checkout":
        case "abandonedCart":
        case "buyItNow":
        case "draftOrder":
        case "cartNext":
            return !0;
        case "orderEdit":
        case "other":
        case "simulated":
        case "shopPayExternal":
        case "paymentCollection":
            return !1;
        default:
            {
                const t = e;
                throw new XA(`Unhandled guest-return source: ${t}`)
            }
    }
}

function QP() {
    return `${Ct()}-${Ct()}-${Ct()}-${Ct()}`
}

function Ct() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
}

function $A(e, t, n) {
    const a = e.targetMerchandiseLines ? .[0] ? .stableId;
    return a && t ? .stableIdToShopId.get(a) || n
}

function JP({
    line: e,
    method: t,
    localShopId: n,
    marketDrivenShippingEnabled: a,
    remoteShopsConfigMap: r,
    remoteMerchandiseDetails: s
}) {
    const o = ja(t);
    if (!o) return;
    const i = $A(e, s, n);
    if (QA({
            lineShopId: i,
            localShopId: n,
            marketDrivenShippingEnabled: a,
            remoteShopsConfigMap: r,
            method: t
        })) return `${i}:${o}`
}

function QA({
    lineShopId: e,
    localShopId: t,
    marketDrivenShippingEnabled: n,
    remoteShopsConfigMap: a,
    method: r
}) {
    if (e === t) return n;
    const s = a ? .get(e);
    return s ? s.marketDrivenShippingEnabled : r ? !!ja(r) : !1
}

function ZP() {
    const {
        client: e
    } = q();
    return e.unstable_getSerialization("preloaded") === !0
}

function eO({
    isShippingRequired: e,
    isPickupSelected: t,
    shippingCountryCode: n,
    billingCountryCode: a
}) {
    return !e || t ? a || n : n || a
}

function tO(e, t) {
    const n = t ? e.countrySpecific[t] ? .phoneMarketingDisclosure : void 0;
    return n === void 0 ? e.phoneMarketingDisclosure : n
}
const JA = "vowWK",
    nO = {
        borderRadius: JA
    },
    aO = () => {
        const {
            shop: {
                hasStorefront: e
            },
            observability: t,
            url: n
        } = q();
        return {
            replaceShopPayInHistory: be(r => {
                typeof window > "u" || (r ? window.location.replace(r) : e ? (t.log("shop_pay_in_history_storefront_redirected", "[Shop Pay] Redirecting to storefront url, as replacementUrl is not provided"), window.location.replace(n.storefront())) : (t.counter({
                    name: "shop_pay_cannot_replace_browser_history",
                    value: 1
                }), t.log("shop_pay_cannot_replace_browser_history", "[Shop Pay] Unable to replace Shop Pay in browser history", {
                    replacementUrl: r,
                    storefrontUrl: n.storefront()
                })))
            }, [e, t, n])
        }
    };
export {
    ua as $, QP as A, Qv as B, Yo as C, OT as D, T1 as E, oh as F, Ze as G, bb as H, Cb as I, Nb as J, hu as K, bu as L, Ae as M, dy as N, q as O, D as P, St as Q, Dt as R, _v as S, qE as T, zl as U, P as V, NC as W, Te as X, EI as Y, Fi as Z, W as _, Me as a, ne as a$, db as a0, ZI as a1, JI as a2, ru as a3, rb as a4, BE as a5, pt as a6, Ua as a7, ki as a8, ee as a9, ls as aA, re as aB, $A as aC, ja as aD, _s as aE, Je as aF, CT as aG, YP as aH, w1 as aI, Ly as aJ, HP as aK, ia as aL, Zd as aM, Ab as aN, Kl as aO, $d as aP, hb as aQ, tT as aR, el as aS, ui as aT, rl as aU, fv as aV, on as aW, TA as aX, Fh as aY, Ih as aZ, j0 as a_, bI as aa, vr as ab, D_ as ac, xE as ad, gt as ae, Dd as af, Vc as ag, Yc as ah, LT as ai, gs as aj, F1 as ak, RT as al, MT as am, Vl as an, zP as ao, Ps as ap, yb as aq, L as ar, Go as as, $o as at, La as au, qp as av, gS as aw, Hg as ax, nO as ay, vE as az, dt as b, je as b$, Tb as b0, Yy as b1, Ef as b2, vy as b3, Le as b4, rg as b5, sg as b6, Cy as b7, Ld as b8, CE as b9, SC as bA, UI as bB, $y as bC, Gy as bD, Qy as bE, Rb as bF, pb as bG, bN as bH, eC as bI, Mo as bJ, us as bK, Ob as bL, Mb as bM, $b as bN, Qb as bO, Uu as bP, Ou as bQ, Lb as bR, BC as bS, UC as bT, YC as bU, FC as bV, jb as bW, Qf as bX, FE as bY, Ba as bZ, ci as b_, Y0 as ba, GI as bb, $N as bc, gl as bd, By as be, QN as bf, p1 as bg, Lt as bh, S1 as bi, u1 as bj, gi as bk, ae as bl, xy as bm, lA as bn, sn as bo, U0 as bp, De as bq, Vt as br, zI as bs, nb as bt, cs as bu, cm as bv, KT as bw, fs as bx, Fp as by, zN as bz, qt as c, C_ as c$, jP as c0, BP as c1, OP as c2, PP as c3, xI as c4, jI as c5, wr as c6, UE as c7, li as c8, JN as c9, og as cA, iN as cB, qh as cC, Iu as cD, Z0 as cE, AE as cF, z0 as cG, zb as cH, RP as cI, kb as cJ, Hy as cK, ti as cL, aP as cM, nP as cN, Lu as cO, ec as cP, _c as cQ, jS as cR, RE as cS, Th as cT, vI as cU, At as cV, Rt as cW, gr as cX, en as cY, uy as cZ, ly as c_, jy as ca, p0 as cb, wd as cc, i1 as cd, al as ce, VI as cf, bg as cg, IE as ch, PC as ci, jt as cj, Ib as ck, g1 as cl, $ as cm, tN as cn, K as co, DT as cp, nv as cq, IC as cr, Ny as cs, Jt as ct, Re as cu, he as cv, xe as cw, pv as cx, Fv as cy, sp as cz, Xt as d, Hi as d$, N_ as d0, x_ as d1, my as d2, uo as d3, k_ as d4, X_ as d5, vN as d6, w as d7, QT as d8, EE as d9, Nh as dA, wP as dB, LP as dC, Xy as dD, qy as dE, Jy as dF, Wy as dG, gP as dH, Ky as dI, pN as dJ, SN as dK, X0 as dL, se as dM, Ni as dN, pE as dO, Mv as dP, dN as dQ, dv as dR, Zv as dS, ah as dT, dh as dU, lh as dV, uh as dW, Eh as dX, wE as dY, $f as dZ, bh as d_, G0 as da, av as db, $t as dc, Cs as dd, yh as de, Mh as df, Gb as dg, zy as dh, Ad as di, Vy as dj, Lf as dk, Zy as dl, eI as dm, LC as dn, kv as dp, BN as dq, HN as dr, Z1 as ds, eb as dt, M1 as du, K1 as dv, rn as dw, wN as dx, NE as dy, Jh as dz, Kh as e, Gl as e$, jh as e0, fP as e1, V0 as e2, Yi as e3, mu as e4, Cg as e5, LI as e6, RI as e7, $0 as e8, Eb as e9, u0 as eA, JC as eB, pT as eC, o0 as eD, WN as eE, Ee as eF, Bn as eG, Cv as eH, ky as eI, r1 as eJ, H1 as eK, Ds as eL, pl as eM, lb as eN, jr as eO, vb as eP, J1 as eQ, $1 as eR, yI as eS, Iy as eT, j1 as eU, P1 as eV, hd as eW, sl as eX, Nu as eY, sc as eZ, tb as e_, _P as ea, II as eb, Xg as ec, v1 as ed, Uv as ee, Ys as ef, na as eg, A0 as eh, Gg as ei, $u as ej, Ku as ek, Xu as el, Ju as em, Qu as en, Zb as eo, Wu as ep, oc as eq, ku as er, cT as es, ZP as et, aa as eu, CI as ev, Wh as ew, cr as ex, Rv as ey, x1 as ez, rP as f, _C as f$, gv as f0, Sv as f1, Ry as f2, Iv as f3, aO as f4, MI as f5, Lv as f6, W1 as f7, bC as f8, Pa as f9, sm as fA, qT as fB, qs as fC, BT as fD, VT as fE, im as fF, qc as fG, Em as fH, rm as fI, Am as fJ, dm as fK, Hv as fL, ov as fM, EN as fN, oN as fO, it as fP, wy as fQ, cu as fR, eu as fS, cC as fT, oC as fU, WI as fV, Pg as fW, fC as fX, mC as fY, hh as fZ, KI as f_, LN as fa, Ya as fb, Ha as fc, uv as fd, tA as fe, Db as ff, Lh as fg, J0 as fh, hC as fi, tp as fj, yd as fk, Vg as fl, m1 as fm, eh as fn, rh as fo, Nv as fp, Kv as fq, IP as fr, Nd as fs, xs as ft, wc as fu, um as fv, $T as fw, Dc as fx, XT as fy, Gn as fz, sP as g, kh as g$, s1 as g0, ht as g1, Vi as g2, Gu as g3, YI as g4, cg as g5, td as g6, Eg as g7, ug as g8, lg as g9, Vh as gA, oa as gB, NT as gC, fi as gD, EC as gE, fn as gF, Pd as gG, L1 as gH, TI as gI, dl as gJ, y1 as gK, Od as gL, I1 as gM, sa as gN, $c as gO, lm as gP, AI as gQ, nC as gR, cb as gS, ub as gT, mN as gU, ob as gV, Qe as gW, Ls as gX, DP as gY, kP as gZ, Ah as g_, Oo as ga, qI as gb, ut as gc, iP as gd, mt as ge, Ht as gf, Pf as gg, zf as gh, Ev as gi, mI as gj, lv as gk, a0 as gl, q0 as gm, CP as gn, qv as go, vh as gp, aT as gq, mi as gr, rT as gs, Dh as gt, Oh as gu, Qt as gv, ry as gw, Oy as gx, dn as gy, Et as gz, Ph as h, c0 as h$, TP as h0, rI as h1, wv as h2, Us as h3, Pu as h4, Kb as h5, dc as h6, ic as h7, dT as h8, _T as h9, MN as hA, Ca as hB, Fa as hC, JE as hD, PN as hE, $E as hF, ON as hG, yv as hH, Vb as hI, ph as hJ, Bo as hK, jC as hL, gE as hM, Ip as hN, ih as hO, eN as hP, nN as hQ, Ru as hR, aC as hS, ei as hT, zh as hU, xr as hV, xo as hW, MC as hX, eO as hY, tO as hZ, MS as h_, tc as ha, Jb as hb, HC as hc, l1 as hd, cv as he, xi as hf, Tu as hg, js as hh, f1 as hi, Pi as hj, Oi as hk, zd as hl, yN as hm, Vd as hn, lt as ho, Gd as hp, mv as hq, NP as hr, rC as hs, sC as ht, Rg as hu, Mg as hv, tC as hw, ab as hx, uC as hy, ib as hz, Ac as i, Ey as i$, f0 as i0, B0 as i1, Bi as i2, la as i3, ET as i4, ST as i5, bT as i6, mp as i7, AT as i8, Hs as i9, TT as iA, b1 as iB, SP as iC, vC as iD, rv as iE, Sh as iF, Ud as iG, hm as iH, gh as iI, k1 as iJ, Dy as iK, bP as iL, cP as iM, Ay as iN, Sy as iO, Mu as iP, GS as iQ, HS as iR, Wb as iS, Ub as iT, xb as iU, nT as iV, E0 as iW, nh as iX, D1 as iY, C0 as iZ, P0 as i_, gT as ia, Vs as ib, qC as ic, KC as id, Gs as ie, l0 as ig, zC as ih, WC as ii, VC as ij, yT as ik, ZC as il, _0 as im, vT as io, th as ip, $C as iq, DC as ir, r0 as is, b0 as it, OS as iu, Gr as iv, Au as iw, h1 as ix, uA as iy, GN as iz, Ue as j, gb as j$, N0 as j0, O0 as j1, vg as j2, hg as j3, hN as j4, TN as j5, n1 as j6, Uh as j7, RN as j8, kI as j9, Bv as jA, iv as jB, yu as jC, NN as jD, rN as jE, yP as jF, rd as jG, hv as jH, ju as jI, Bb as jJ, Q0 as jK, wb as jL, Yb as jM, SI as jN, zv as jO, Pb as jP, L0 as jQ, Xr as jR, k0 as jS, D0 as jT, sE as jU, M0 as jV, oi as jW, w0 as jX, mT as jY, mb as jZ, du as j_, DI as ja, fI as jb, Fs as jc, Vv as jd, br as je, X1 as jf, FI as jg, CN as jh, Fd as ji, EP as jj, AP as jk, BI as jl, aN as jm, _N as jn, xP as jo, tv as jp, Y1 as jq, zn as jr, Ji as js, OE as jt, sh as ju, Ov as jv, Yd as jw, Fr as jx, Yv as jy, jv as jz, _e as k, d0 as k$, fb as k0, _b as k1, xd as k2, Hb as k3, $h as k4, Qh as k5, a1 as k6, E1 as k7, Os as k8, B1 as k9, cI as kA, uI as kB, pI as kC, gI as kD, Io as kE, wI as kF, Kg as kG, R1 as kH, OC as kI, ur as kJ, e0 as kK, ye as kL, xC as kM, kC as kN, bv as kO, m0 as kP, hT as kQ, s0 as kR, n0 as kS, fc as kT, gc as kU, t0 as kV, QC as kW, GC as kX, TC as kY, XC as kZ, IT as k_, Hh as ka, N1 as kb, rr as kc, Bh as kd, Ws as ke, Xh as kf, U1 as kg, ny as kh, ty as ki, Hd as kj, xv as kk, lf as kl, l_ as km, jT as kn, zT as ko, wT as kp, sI as kq, iI as kr, dI as ks, nI as kt, aI as ku, Uy as kv, Fy as kw, jf as kx, Gf as ky, lI as kz, Tg as l, YT as l$, ES as l0, y0 as l1, yC as l2, g0 as l3, d1 as l4, Kd as l5, _I as l6, UN as l7, jN as l8, DN as l9, XN as lA, cA as lB, pP as lC, FT as lD, VP as lE, My as lF, Fg as lG, lC as lH, iC as lI, pC as lJ, hc as lK, gC as lL, dC as lM, Na as lN, Dr as lO, vm as lP, VN as lQ, Ga as lR, qP as lS, XP as lT, Wv as lU, $P as lV, $v as lW, Jv as lX, JT as lY, ZT as lZ, Ui as l_, YN as la, Or as lb, Rr as lc, PT as ld, x0 as le, qN as lf, KN as lg, ZN as lh, eP as li, Kc as lj, kT as lk, xT as ll, UT as lm, GT as ln, HT as lo, jc as lp, tP as lq, Un as lr, lP as ls, dP as lt, AC as lu, uP as lv, oP as lw, mP as lx, mA as ly, A1 as lz, HI as m, Af as m$, wi as m0, ey as m1, WT as m2, WP as m3, Q1 as m4, V1 as m5, Xl as m6, Lc as m7, uN as m8, MP as m9, ch as mA, mh as mB, _h as mC, sb as mD, pA as mE, K0 as mF, Zu as mG, qu as mH, Cu as mI, NI as mJ, PI as mK, Zf as mL, OI as mM, sN as mN, H0 as mO, hl as mP, Yl as mQ, Zh as mR, e1 as mS, t1 as mT, Ol as mU, Sl as mV, Ja as mW, xt as mX, ea as mY, qd as mZ, hP as m_, vt as ma, Yt as mb, T_ as mc, py as md, _y as me, ct as mf, cy as mg, q_ as mh, Gv as mi, ul as mj, $I as mk, XI as ml, QI as mm, Py as mn, Sb as mo, oy as mp, nd as mq, ay as mr, fy as ms, gy as mt, Gh as mu, R0 as mv, Rh as mw, Tv as mx, Xv as my, fh as mz, Be as n, Bf as n$, tI as n0, Yh as n1, qb as n2, Du as n3, fT as n4, Fu as n5, Yu as n6, Hu as n7, Vu as n8, Ho as n9, Ch as nA, FP as nB, UP as nC, wh as nD, iy as nE, cf as nF, AN as nG, Av as nH, FN as nI, KP as nJ, G1 as nK, z1 as nL, q1 as nM, Wl as nN, KA as nO, oA as nP, xN as nQ, Xb as nR, Wd as nS, vP as nT, jE as nU, _1 as nV, hI as nW, Rd as nX, sy as nY, c_ as nZ, Mf as n_, sT as na, cp as nb, Sd as nc, bs as nd, vv as ne, T0 as nf, CC as ng, i0 as nh, Qn as ni, nS as nj, _S as nk, iS as nl, ko as nm, nl as nn, c1 as no, yS as np, C1 as nq, eT as nr, Uf as ns, mc as nt, wS as nu, h0 as nv, jd as nw, _f as nx, ff as ny, pf as nz, O1 as o, wf as o0, Df as o1, Bd as o2, zA as o3, S0 as o4, oT as o5, Fb as o6, Pv as o7, si as o8, I0 as o9, by as oA, hy as oB, Ty as oC, Z as oD, yy as oE, GP as oF, _i as oG, rA as oH, sv as oI, IN as oJ, kE as oK, Ir as oL, Cr as oM, Nr as oN, Pr as oO, kN as oP, yE as oa, Dv as ob, oI as oc, xh as od, kd as oe, W0 as of , Ri as og, Do as oh, wC as oi, gN as oj, fN as ok, qi as ol, cN as om, lN as on, iT as oo, nc as op, wu as oq, zu as or, ac as os, uT as ot, aA as ou, cc as ov, uc as ow, lT as ox, lc as oy, ce as oz, RC as p, F0 as q, JP as r, me as s, Mp as t, uE as u, v0 as v, fd as w, dA as x, iA as y, sA as z
};