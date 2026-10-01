const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-AutocompleteField.BZI1dcBS.js", "esnext-vendor.BDPAaZdq.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "hydrate.B0xlt2dG.js", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css", "AutocompleteField-hooks.D2O1AcIY.js", "FormLayout.CMVyKzjL.js", "amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js", "assets/FormLayout.CrYq3At_.css", "PhoneField.ykPh8SPx.js", "hooks-useSuppressShopPayModalOnLoad.brztd70E.js", "assets/PhoneField.uZEuHncj.css", "Popover.BUTwaoOa.js", "assets/Popover.Bi1nHaU-.css", "AddressPresenter.B0qw2vWQ.js", "Choice.BIzIW4rp.js", "Checkbox.CiixBh9Z.js", "assets/Checkbox.SrYMuQu4.css", "assets/Choice.B7lVAtpz.css", "assets/AutocompleteField.u4tHylJ6.css"]))) => i.map(i => d[i]);
import {
    u as m,
    q as O,
    S as ve,
    T as K,
    e as Kt,
    o as fe,
    ae as Tn,
    y as Mn,
    l as _e,
    f as re,
    A as $,
    h as te,
    n as ie,
    d as Bn,
    r as qn,
    k as pe,
    g as xn,
    Q as Yt,
    i as Un,
    G as Lt
} from "./esnext-vendor.BDPAaZdq.js";
import {
    S as Wn,
    eV as Ne,
    gz as Ve,
    br as Zt,
    gA as jt,
    v as $n,
    gB as Hn,
    gC as Gn,
    d0 as ne,
    gD as V,
    c as Qe,
    I as De,
    dz as Kn,
    B as Yn,
    gE as he,
    aw as Jt,
    f7 as Zn,
    bq as et,
    bp as tt,
    gF as jn,
    T as Jn,
    gG as Xn,
    h as Xt,
    a as Qn,
    ea as Qt,
    gH as zt,
    bk as eo,
    e$ as to,
    ct as no,
    cU as oo,
    e4 as so,
    gI as ro,
    gJ as ao
} from "./hydrate.B0xlt2dG.js";
import {
    b as io,
    u as lo,
    F as co,
    a as Vt
} from "./FormLayout.CMVyKzjL.js";
import {
    O as k,
    bX as we,
    G as Ee,
    aa as nt,
    gz as uo,
    a6 as ot,
    e1 as en,
    gA as Le,
    ce as tn,
    bh as Dt,
    gB as fo,
    gC as po,
    gD as mo,
    di as Xe,
    s as nn,
    a as on,
    cm as X,
    bi as R,
    ad as Re,
    al as vo,
    gE as ho,
    dH as go,
    ev as bo,
    gF as st,
    gG as rt,
    w as wt,
    ci as Co,
    ec as yo,
    eb as Ao,
    eS as sn,
    gH as rn,
    dy as _o,
    P as Se,
    gI as Rt,
    fq as So,
    gJ as No,
    E as Eo,
    gK as Ae,
    gp as Io,
    d as Fo,
    gL as ko,
    Q as an,
    gM as Oo,
    gN as Pt
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    a as Lo
} from "./helpers-getNormalizedPaymentMethodName.B-mE5wnL.js";
import {
    _ as zo,
    s as Vo
} from "./app.D1P6yWfp.js";
import {
    s as Do,
    P as wo
} from "./PhoneField.ykPh8SPx.js";
import {
    P as Ro
} from "./Popover.BUTwaoOa.js";
import {
    u as Po,
    A as Ye
} from "./AddressPresenter.B0qw2vWQ.js";
import {
    a as To,
    b as Mo,
    C as Bo
} from "./Choice.BIzIW4rp.js";
const qo = "r62YW",
    xo = "kV1Pe",
    Tt = {
        Wrapper: qo,
        Loading: xo
    };

function Uo({
    active: e = !1,
    size: n = "base",
    children: t
}) {
    return m("div", {
        className: Tt.Wrapper,
        "aria-hidden": e,
        "aria-busy": e,
        children: [e && m("div", {
            className: Tt.Loading,
            children: m(Wn, {
                size: n
            })
        }), t]
    })
}

function Wo() {
    const {
        i18n: {
            locale: e
        },
        userEvents: n,
        shop: {
            id: t
        },
        source: r
    } = k(), s = we();
    return O((a, o, l, d, u) => {
        if (n) {
            const i = s ? .value ? .defaultAttributes ? .uniqToken || "";
            n.monorailEvent({
                schemaId: "checkout_address_validation_suggestion_acceptance/1.0",
                payload: {
                    shopId: parseInt(Ee(t), 10),
                    checkoutToken: r.checkoutSessionIdentifier || "",
                    uniqueToken: i,
                    locale: e,
                    country: a,
                    validationId: o,
                    suggestionId: l,
                    acceptedField: d,
                    context: u === "shipping" ? "Shipping address" : "Billing address"
                }
            })
        }
    }, [e, n, r.checkoutSessionIdentifier, t, s ? .value ? .defaultAttributes ? .uniqToken])
}

function $o(e, n) {
    return t => {
        const {
            address1: r,
            streetName: s,
            streetNumber: a,
            address2: o,
            line2: l,
            neighborhood: d,
            district: u,
            subdistrict: i,
            city: f,
            zoneCode: c,
            postalCode: h,
            countryCode: b
        } = n.fields, v = t[e] ? ? "";
        switch (e) {
            case "address1":
                {
                    r.value = v;
                    break
                }
            case "streetName":
                {
                    s.value = v;
                    break
                }
            case "streetNumber":
                {
                    a.value = v;
                    break
                }
            case "address2":
                {
                    o.value = v;
                    break
                }
            case "line2":
                {
                    l.value = v;
                    break
                }
            case "neighborhood":
                {
                    d.value = v;
                    break
                }
            case "district":
                {
                    u.value = v;
                    break
                }
            case "subdistrict":
                {
                    i.value = v;
                    break
                }
            case "city":
                {
                    f.value = v;
                    break
                }
            case "zoneCode":
                {
                    c.value = v;
                    break
                }
            case "postalCode":
                {
                    h.value = v;
                    break
                }
            case "countryCode":
                {
                    b.value = v;
                    break
                }
        }
    }
}
const Ho = "Xnr0a",
    Go = {
        SuggestionMessage: Ho
    },
    Ko = ({
        suggestion: e,
        field: n,
        onClick: t,
        countryOptions: r,
        withConcernMessage: s = !1
    }) => {
        const {
            i18n: a
        } = k(), o = e.address ? ? {};
        let l;
        if (n === "zoneCode") l = o.zone;
        else if (n === "countryCode") {
            const d = r.find(u => u.value === o.countryCode);
            d && (l = d.label)
        } else {
            const d = o[n];
            typeof d == "string" && (l = d)
        }
        return l ? m(ve, {
            children: [s && `${e.message}. `, a.translate("field_errors.address_suggestion_did_you_mean_html", {
                html: m("button", {
                    className: Go.SuggestionMessage,
                    onClick: t,
                    type: "button",
                    children: l
                })
            }, {
                noWrapElementReplacements: !0
            })]
        }) : m(ve, {
            children: e.message
        })
    };

function Yo({
    address: e,
    addressErrors: n,
    addressSuggestions: t,
    suggestion: r,
    field: s,
    addressType: a,
    validationId: o,
    availableCountries: l
}) {
    const d = e.value,
        u = $o(s, e),
        {
            resetAddressFieldSuggestions: i
        } = Ve(t, n),
        {
            resetAddressFieldErrors: f
        } = Ne(n),
        c = Wo(),
        h = () => {
            r.address && (c(d.countryCode || "", o, r.id, s, a), u({ ...d,
                ...r.address
            }), i(s), f(s))
        },
        b = r.type;
    return m(Ko, {
        suggestion: r,
        field: s,
        onClick: h,
        countryOptions: l,
        withConcernMessage: b !== "warning"
    })
}
class Mt extends Error {
    constructor(n) {
        super("AddressValidationServiceError"), this.name = "AddressValidationServiceError";
        const t = ["Not allowed"];
        this.errors = n.map(r => r.message).filter(r => !t.includes(r))
    }
}

function Zo(e) {
    return e.source === "validation-api"
}

function jo(e, n, t, r = "", s = "") {
    const a = e.completionService,
        o = Array.from(n.values()).filter(Zo),
        l = o.map(i => i.concern.code).filter(Boolean),
        d = o.reduce((i, f) => {
            if (f.suggestion ? .address) {
                const c = Object.keys(f.suggestion.address).filter(h => f.suggestion ? .address[h]);
                i.push(...c)
            }
            return i
        }, []),
        u = e.address ? .countryCode;
    a && u && l.length > 0 && t.monorailEvent({
        schemaId: "checkout_address_autocomplete_validation_suggestion/1.2",
        payload: {
            completionService: a,
            countryCode: u,
            concernCodes: l,
            validationId: r,
            checkoutToken: s,
            suggestedFields: d
        }
    })
}
const Ze = e => ({
    origin: "validation-api",
    ...e
});

function Bt({
    fieldValidationResult: e,
    address: n,
    addressErrors: t,
    suggestions: r,
    addressType: s,
    availableCountries: a,
    addressAutocompleteSelection: o,
    observability: l,
    userEvents: d,
    validationId: u,
    checkoutSessionIdentifier: i
}) {
    if (o && d) {
        const f = o.peek();
        if (f) try {
            jo(f, e, d, u, i)
        } catch (c) {
            const h = {
                error: c,
                errorName: c instanceof Error ? c.name : "Unknown",
                errorMessage: c instanceof Error ? c.message : String(c),
                ...c instanceof Error && c.stack && {
                    errorStack: c.stack
                }
            };
            l ? .leaveErrorBreadcrumb("Autocomplete validation suggestion tracking failed", h)
        } finally {
            o.value = void 0
        }
    }
    e.forEach((f, c) => {
        if (f.source !== "validation-api") {
            t[c].value = {
                message: f.error,
                origin: "client",
                type: "on-submit"
            };
            return
        }
        if (f.suggestion) {
            const {
                id: h,
                suggestion: b,
                type: v
            } = f, y = m(Yo, {
                validationId: h,
                address: n,
                addressErrors: t,
                addressSuggestions: r,
                suggestion: b,
                field: c,
                addressType: s,
                availableCountries: a
            });
            t[c].value = Ze({
                value: y,
                type: v,
                textValue: "Invalid address"
            }), r[c].value = b
        } else if (f.error)
            if (f.type === "warning") t[c].value = Ze({
                value: f.error,
                type: "warning",
                textValue: "Invalid address"
            }), r[c].value = {
                type: "warning",
                message: f.error
            };
            else {
                if (t[c].value) return;
                t[c].value = Ze({
                    type: "error",
                    value: f.error,
                    textValue: f.error
                })
            }
    })
}

function Jo(e, n) {
    switch (e) {
        case "address_zip_invalid_for_country":
            return n === "shipping" ? "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY" : "PAYMENTS_INVALID_POSTAL_CODE_FOR_COUNTRY";
        case "address_zip_blank":
            return n === "shipping" ? "DELIVERY_POSTAL_CODE_REQUIRED" : "PAYMENTS_POSTAL_CODE_REQUIRED";
        case "address_zip_invalid_for_country_and_province":
            return n === "shipping" ? "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE" : "PAYMENTS_INVALID_POSTAL_CODE_FOR_ZONE";
        case "address_zip_contains_emojis":
            return n === "shipping" ? "DELIVERY_POSTAL_CODE_CONTAINS_EMOJIS" : "PAYMENTS_POSTAL_CODE_CONTAINS_EMOJIS"
    }
    return n === "shipping" ? "DELIVERY_POSTAL_CODE_BLANK" : "PAYMENTS_POSTAL_CODE_BLANK"
}
class Xo extends Error {
    constructor() {
        super(...arguments), this.name = "AddressValidationError"
    }
}

function ln(e) {
    switch (e) {
        case "address1":
            return "address1";
        case "address2":
            return "address2";
        case "country_code":
        case "countryCode":
        case "country":
            return "countryCode";
        case "zip":
            return "postalCode";
        case "province":
        case "province_code":
        case "provinceCode":
            return "zoneCode";
        case "city":
            return "city";
        case "phone":
            return "phone";
        case "street_name":
        case "streetName":
            return "streetName";
        case "street_number":
        case "streetNumber":
            return "streetNumber";
        case "line2":
            return "line2";
        case "neighborhood":
            return "neighborhood";
        case "district":
            return "district";
        case "subdistrict":
            return "subdistrict";
        default:
            throw new Xo(`Unknown Address Component - ${e}`)
    }
}

function Qo(e) {
    const {
        address1: n,
        address2: t,
        zoneCode: r,
        countryCode: s,
        postalCode: a,
        city: o,
        phone: l,
        streetName: d,
        streetNumber: u,
        line2: i,
        neighborhood: f,
        district: c,
        subdistrict: h
    } = e;
    return {
        address1: n,
        address2: t,
        zoneCode: r,
        countryCode: s,
        postalCode: a,
        city: o,
        phone: l,
        streetName: d,
        streetNumber: u,
        line2: i,
        neighborhood: f,
        district: c,
        subdistrict: h
    }
}

function es(e) {
    return !e || e.length === 0 ? [] : e.map(n => ({ ...n,
        type: n.type.toLowerCase()
    }))
}

function ts(e) {
    const n = new Map([
            ["countryCode", 0],
            ["coordinates", 2],
            ["zoneCode", 4],
            ["postalCode", 8],
            ["address1", 16],
            ["address2", 32],
            ["city", 64],
            ["streetName", 128],
            ["streetNumber", 256],
            ["line2", 512],
            ["neighborhood", 1024],
            ["district", 2048],
            ["subdistrict", 4096]
        ]),
        t = (a, o) => a | (n.get(ln(o)) ? ? 0),
        r = (a, o) => {
            if (!a && o) return o;
            if (a && !o) return a;
            if (a.type !== o.type) return a.type === "error" ? a : o;
            switch (a.type) {
                case "error":
                    return a.typeLevel < o.typeLevel ? a : o;
                case "warning":
                    return a.typeLevel > o.typeLevel ? a : o
            }
        },
        s = e.reduce((a, o) => {
            if (o.fieldNames == null) return [];
            const l = o.fieldNames.reduce(t, 0);
            return a[l] = r(a[l] ? ? void 0, o), a
        }, {});
    return [...new Set(Object.values(s))]
}

function ns(e) {
    return typeof e > "u" ? {} : {
        address1: e.address1 ? ? void 0,
        streetName: e.streetName ? ? void 0,
        streetNumber: e.streetNumber ? ? void 0,
        address2: e.address2 ? ? void 0,
        line2: e.line2 ? ? void 0,
        neighborhood: e.neighborhood ? ? void 0,
        district: e.district ? ? void 0,
        subdistrict: e.subdistrict ? ? void 0,
        city: e.city ? ? void 0,
        zoneCode: e.provinceCode ? ? void 0,
        zone: e.province ? ? void 0,
        postalCode: e.zip ? ? void 0,
        countryCode: e.countryCode ? ? void 0
    }
}
const je = {
        MissingBuildingNumber: "missing_building_number",
        AddressUnknown: "address_unknown",
        CountryInvalidForZip: "country_invalid_for_zip"
    },
    os = ({
        countries: e
    }) => O((n, t) => {
        const r = e ? .map(({
            value: s
        }) => s);
        return n.filter(s => {
            if (!r ? .length) return !0;
            if (s.code === je.AddressUnknown || s.code === je.MissingBuildingNumber) return !1;
            if (s.code !== je.CountryInvalidForZip) return !0;
            const a = t.find(o => s.suggestionIds.includes(o.id));
            return !a ? .countryCode || r.includes(a.countryCode)
        })
    }, [e]),
    ss = ["address1", "zoneCode", "countryCode", "postalCode", "city"];

function rs() {
    return O(({
        addressType: e,
        errors: n
    }) => e !== "shipping" ? !1 : !ss.some(r => n.get(r) !== void 0), [])
}
class as extends Error {
    constructor() {
        super(...arguments), this.name = "ApiTimeoutError"
    }
}
const is = (e, n) => {
        const t = new Promise((r, s) => {
            setTimeout(() => {
                s(new as(`Request took too long. Max timeout ${n} reached`))
            }, n)
        });
        return Promise.race([e, t])
    },
    ls = 1e3;

function ds({
    extended: e = !1,
    countryExtendedFields: n
}) {
    const {
        observability: t,
        i18n: {
            locale: r
        },
        shop: {
            id: s
        },
        source: a
    } = k(), o = K(() => new Map, []), l = (...u) => u.join(""), {
        validation: d
    } = io();
    return O(async ({
        address1: u,
        address2: i,
        zoneCode: f,
        countryCode: c,
        postalCode: h,
        city: b,
        phone: v,
        streetName: y,
        streetNumber: C,
        line2: p,
        neighborhood: A,
        district: _,
        subdistrict: E
    }, N, S) => {
        const L = e && y !== void 0 ? {
                streetName: y,
                streetNumber: C
            } : {
                address1: u
            },
            I = w => n === void 0 || n.includes(w),
            x = e ? {
                line2: p,
                ...I("neighborhood") && {
                    neighborhood: A
                },
                ...I("district") && {
                    district: _
                },
                ...I("subdistrict") && {
                    subdistrict: E
                }
            } : {
                address2: i
            },
            Z = l(...Object.values(L), ...Object.values(x), i, b, f, h, c, v, N);
        try {
            const w = o.get(Z) || is(d({ ...L,
                ...x,
                countryCode: c,
                provinceCode: f,
                zip: h,
                city: b,
                phone: v
            }, r, N, {
                shopId: Ee(s),
                sourceId: a.sourceId || "",
                checkoutSessionIdentifier: a.checkoutSessionIdentifier || "",
                sessionToken: S
            }), ls);
            o.clear(), o.set(Z, w);
            const H = await w;
            if (H instanceof Error) throw H;
            const F = H.errors || [];
            if (F.length > 0) throw new Mt(F);
            return H.data
        } catch (w) {
            return w instanceof Mt ? w.errors.length > 0 && t.leaveErrorBreadcrumb("AddressValidation service failed", {
                errors: w.errors
            }) : w instanceof Error && t.leaveErrorBreadcrumb("AddressValidation service failed", {
                error: w.message
            }), {
                id: "",
                concerns: [],
                suggestions: [],
                locale: r,
                validationScope: [],
                fields: [],
                validationProfile: "UNKNOWN"
            }
        }
    }, [e, n, o, d, r, s, a.sourceId, a.checkoutSessionIdentifier, t])
}

function cs() {
    const {
        checkout: e,
        i18n: {
            locale: n
        },
        userEvents: t,
        shop: {
            id: r
        },
        source: s
    } = k(), a = we(), o = e.configuration.layout.isOnePage, l = K(() => new Map, []), d = (...u) => u.join("");
    return O((u, i, f, c, h, b) => {
        const v = d(JSON.stringify(i), JSON.stringify(h), b, f, c, u);
        if (t && !l.has(v)) {
            l.set(v, {
                address: i,
                suggestion: h,
                addressType: b,
                concern: f,
                validationProfile: c,
                validationId: u
            });
            const y = a ? .value ? .defaultAttributes ? .uniqToken || "";
            t.monorailEvent({
                schemaId: "checkout_address_validation/2.2",
                payload: {
                    checkoutToken: s.checkoutSessionIdentifier || "",
                    shopId: parseInt(Ee(r), 10),
                    uniqueToken: y,
                    locale: n,
                    address1: i.address1,
                    address2: i.address2,
                    city: i.city,
                    zip: i.postalCode,
                    zone: i.zoneCode,
                    country: i.countryCode || "",
                    validationId: u,
                    address1Suggested: h ? .address ? .address1,
                    address2Suggested: h ? .address ? .address2,
                    citySuggested: h ? .address ? .city,
                    zipSuggested: h ? .address ? .postalCode,
                    zoneSuggested: h ? .address ? .zoneCode,
                    countrySuggested: h ? .address ? .countryCode || "",
                    errorFields: f.fieldNames || [],
                    errorCodes: [f.code],
                    errorType: f.type,
                    validationProfile: c,
                    suggestionsCount: f.suggestionIds.length || 0,
                    checkoutView: o.value ? "Single page" : "Multi page",
                    context: b === "shipping" ? "Shipping address" : "Billing address"
                }
            })
        }
    }, [t, l, a ? .value ? .defaultAttributes ? .uniqToken, s.checkoutSessionIdentifier, r, n, o])
}

function us({
    countryCode: e,
    countries: n,
    addressSettings: t
}) {
    const {
        checkout: {
            wallets: r,
            address: s
        }
    } = k(), o = s.extendedAddressMode.get(e) !== null, l = r.activeSession.value, {
        details: d
    } = nt(e), u = d ? s.extendedAddressMode.getFormatFromCountry(d) : void 0, i = K(() => !d || !t || u === void 0 ? void 0 : uo({
        country: d,
        editFormat: u,
        addressSettings: t
    }).filter(p => p === "district" || p === "neighborhood" || p === "subdistrict"), [d, t, u]), f = ds({
        extended: o && !l,
        countryExtendedFields: i
    }), c = Zt(e, n, t), h = rs(), b = os({
        countries: n
    }), v = cs(), y = O((C, p) => {
        if (!C.suggestionIds || C.suggestionIds.length === 0) return;
        const A = p.find(_ => _.id === C.suggestionIds[0]);
        if (A) return {
            address: ns(A),
            message: C.message,
            code: C.code,
            type: C.type,
            id: C.suggestionIds[0]
        }
    }, []);
    return O(async ({
        addressType: C,
        address: p,
        validationProfile: A,
        action: _,
        sessionToken: E
    }) => {
        const N = new Map;
        let S;
        const L = c(p, C);
        _ === "submit" && L.forEach((x, Z) => {
            N.set(Z, {
                error: x,
                type: "error",
                source: void 0,
                validationProfile: A
            })
        });
        const I = h({
            addressType: C,
            errors: L
        });
        if (I) {
            const x = await f(Qo(p), A, E);
            if (!x) return {
                fieldValidationResult: N,
                validationId: S,
                calledValidationApi: I
            };
            const {
                concerns: Z,
                suggestions: w,
                id: H,
                validationProfile: F
            } = x;
            S = H;
            const M = es(Z);
            M.forEach(B => {
                const Q = y(B, w);
                v(H, p, B, F, Q, C)
            });
            const P = b(M, w);
            ts(P).forEach(B => {
                const Q = ln(B.fieldNames[0]),
                    T = y(B, w);
                N.set(Q, {
                    id: H,
                    error: B.message,
                    suggestion: T,
                    concernCode: Q === "postalCode" ? Jo(B.code || "", C) : B.code,
                    type: B.type,
                    concern: B,
                    source: "validation-api",
                    validationProfile: F
                }), L.set(Q, B.message)
            })
        }
        return {
            fieldValidationResult: N,
            validationId: S,
            calledValidationApi: I
        }
    }, [y, c, h, f, b, v])
}

function fs(e, n, t, r) {
    const {
        addressType: s,
        addressErrors: a,
        suggestions: o,
        countryCode: l,
        availableCountries: d,
        addressSettings: u
    } = n, i = Kt(""), {
        observability: f,
        userEvents: c,
        source: {
            checkoutSessionIdentifier: h
        },
        checkout: {
            wallets: b
        }
    } = k(), {
        lastNegotiation: v
    } = ot(), {
        resetAddressSuggestions: y
    } = Ve(o, a), {
        resetAddressErrors: C
    } = Ne(a), p = jt(), A = us({
        countryCode: l,
        countries: d,
        addressSettings: u
    }), _ = O(N => {
        const S = e.value,
            L = t.value ? .sessionToken;
        return A({
            address: S,
            addressType: s,
            validationProfile: p.value,
            action: N,
            sessionToken: L
        })
    }, [e, t, s, A, p]), E = en(async N => {
        if (i.peek() === "progression") return;
        const S = Le(e),
            L = Le(v),
            {
                fieldValidationResult: I,
                validationId: x
            } = await _(),
            Z = Le(e) !== S,
            w = Le(v) !== L;
        !Z && !w ? Bt({
            fieldValidationResult: I,
            address: e,
            addressErrors: a,
            suggestions: o,
            validationProfile: p.value,
            addressType: s,
            availableCountries: d,
            addressAutocompleteSelection: t,
            observability: f,
            userEvents: c,
            validationId: x,
            checkoutSessionIdentifier: h
        }) : f.leaveErrorBreadcrumb("The address revision has been modified as the negotiation responded faster than the atlas validation .", {
            isAddressRevisionChanged: Z,
            isNegotiationRevisionChanged: w
        })
    }, 150);
    fe(() => {
        i.value = "", E(e.value)
    }), tn(async ({
        reason: N,
        parts: S
    }) => {
        if (i.value = N, r ? .shouldSkipAddressValidation) return {
            behavior: "allow"
        };
        if (N === "negotiation") return {
            behavior: "allow"
        };
        if (b.activeSession.value) return {
            behavior: "allow"
        };
        Object.entries(a).forEach(F => {
            const M = Object.keys(a).includes(F[0]) ? a[F[0]].peek() : "";
            let P;
            if (typeof M == "string" && (P = M), Object.keys(o).includes(F[0]) && Tn(M)) {
                const B = o[F[0]].peek();
                P = B ? .type === "error" ? B ? .message : ""
            }
            if (P) return f.leaveErrorBreadcrumb("Blocking address error", {
                errorMessage: P
            }), {
                behavior: "block",
                reason: Dt.InvalidAddress
            }
        });
        const {
            fieldValidationResult: L,
            validationId: I
        } = await _("submit");
        if (S.billingAddressOption.peek() === "shipping" && s === "billing") return C(), y(), {
            behavior: "allow"
        };
        const Z = Array.from(L, ([, F]) => F.error).filter(F => F),
            w = Array.from(L, ([, F]) => F).filter(F => F ? .type === "error").length > 0,
            H = Array.from(L, ([, F]) => F).filter(F => F ? .source !== "validation-api").length > 0;
        return w || H ? (f.leaveErrorBreadcrumb("blocking errors", {
            errors: Z
        }), {
            behavior: "block",
            reason: Dt.InvalidAddress,
            perform: () => {
                Bt({
                    fieldValidationResult: L,
                    validationId: I,
                    address: e,
                    addressErrors: a,
                    suggestions: o,
                    validationProfile: p.value,
                    addressType: s,
                    availableCountries: d,
                    addressAutocompleteSelection: t,
                    observability: f,
                    userEvents: c
                })
            }
        }) : {
            behavior: "allow",
            perform: () => {
                y()
            }
        }
    })
}

function ps(e, n = !1) {
    return (n ? Hn : Gn).includes(e)
}

function at({
    country: e,
    field: n,
    collapsed: t
}) {
    const r = k().checkout.configuration.addressSettings,
        s = _e({
            country: e,
            field: n,
            collapsed: t
        }),
        a = _e(!!$n("purchase.address-autocomplete.suggest").length);
    return re(() => {
        const {
            country: o,
            field: l,
            collapsed: d
        } = s.value, u = r.nonBillingAddressSettings.value.autocompleteEnabled, i = a.value ? !0 : ps(o.code, d);
        return o.autocompletionField === l && u && i
    })
}
const ms = () => Mn(void 0);

function me(e) {
    return /[0-9\u0660-\u0669\u06f0-\u06f9\u0966-\u096f\uff10-\uff19]/.test(e)
}
const vs = ["address1", "address2"],
    hs = new Set(["streetName", "streetNumber", "line2", "district", "subdistrict"]);

function gs(e) {
    return hs.has(e)
}

function qt(e) {
    return !!e ? .trim()
}

function bs(e, n) {
    const t = new Set(n);
    return vs.some(r => {
        const s = fo[r].filter(a => gs(a) && t.has(a));
        return s.length === 0 ? !1 : !qt(e[r]) || s.some(a => !qt(e[a]))
    })
}
const xt = ["streetName", "streetNumber", "line2", "district", "subdistrict"],
    Cs = ["countryCode", "city", "provinceCode", "zip", "streetName", "streetNumber", "line2", "district", "subdistrict"],
    ys = mo + 50;

function As(e, n, t, r, s) {
    const {
        observability: a,
        shop: o
    } = k(), {
        formatAddress: l
    } = lo(), d = $(0), u = $(), i = $(), f = $(s);
    te(() => {
        f.current = s
    }, [s]);
    const c = O(() => {
        d.current += 1, u.current && (clearTimeout(u.current), u.current = void 0), i.current ? .("handled"), i.current = void 0
    }, []);
    te(() => c, [c]);
    const h = (v, y, C) => {
            for (const p of y) {
                const A = p === "line2" ? "address2" : p;
                if (!n.isVisible(A, {
                        countryCode: C
                    })) continue;
                const _ = v[p],
                    E = e.fields[p];
                _ === void 0 || !E || (E.value = _ ? ? "")
            }
        },
        b = v => ({
            address1: e.fields.address1 ? .value,
            address2: e.fields.address2 ? .value,
            city: e.fields.city ? .value,
            countryCode: v,
            provinceCode: e.fields.zoneCode ? .value,
            zip: e.fields.postalCode ? .value,
            streetName: e.fields.streetName ? .value,
            streetNumber: e.fields.streetNumber ? .value,
            line2: e.fields.line2 ? .value,
            district: e.fields.district ? .value,
            subdistrict: e.fields.subdistrict ? .value
        });
    return () => {
        if (r !== "dedicated") return c(), !1;
        const v = t.value;
        if (!po(o, v)) return c(), !1;
        c();
        const y = d.current;
        return new Promise(C => {
            i.current = C, u.current = setTimeout(() => {
                u.current = void 0, i.current === C && (i.current = void 0), (async () => {
                    if (y !== d.current) return "handled";
                    const p = t.value;
                    if (!p || p !== v) return "handled";
                    const A = b(p);
                    if (!bs(A, f.current)) return "handled";
                    const _ = () => {
                            if (y === d.current) return t.value
                        },
                        E = () => {
                            const N = _();
                            if (!N) return;
                            const S = b(N);
                            if (!Cs.some(L => S[L] !== A[L])) return N
                        };
                    try {
                        const N = await l(A);
                        if (N.unplaced.length) return "handled";
                        const S = E();
                        return !S || y !== d.current ? "handled" : (ie(() => {
                            h(N, ["streetNumber", "streetName", "line2", "district", "subdistrict", "address1", "address2"], S)
                        }), "applied")
                    } catch (N) {
                        return a.leaveErrorBreadcrumb("Atlas address formatting failed", {
                            countryCode: v,
                            mode: r ? ? "none",
                            errorType: N instanceof Error ? N.name : typeof N
                        }), "handled"
                    }
                })().then(C).catch(() => C("handled"))
            }, ys)
        })
    }
}

function it(e, n, t, r, s, a, o) {
    const {
        details: l,
        loading: d
    } = nt(t), {
        checkout: {
            address: {
                extendedAddressMode: u
            }
        }
    } = k(), i = c => u.get(c) !== null, f = c => u.get(c) === "dedicated";
    return (c, h, b, v) => {
        const {
            coordinates: y,
            address1: C,
            address2: p,
            city: A,
            company: _,
            zoneCode: E,
            countryCode: N,
            postalCode: S,
            streetName: L,
            streetNumber: I,
            line2: x,
            district: Z,
            subdistrict: w
        } = n.fields, H = l ? .zones ? .length && !d, F = N.peek(), M = c.countryCode ? .toUpperCase(), P = M && Xe(M) ? M : F, B = (T, G) => {
            const ge = T === "line2" ? "address2" : T;
            if (e.isVisible(ge, {
                    countryCode: P
                })) switch (T) {
                case "streetName":
                    G !== void 0 && (L.value = G);
                    break;
                case "streetNumber":
                    G !== void 0 && (I.value = G);
                    break;
                case "line2":
                    G !== void 0 && (x.value = G);
                    break;
                case "district":
                    Z.value = G;
                    break;
                case "subdistrict":
                    w.value = G;
                    break
            }
        }, Q = (T, G) => {
            n.fields[T].value = G
        };
        ie(() => {
            if (y.value = c.coordinates, C.value = c.address1 ? ? "", p.value = c.address2 ? ? "", A.value = c.city, e.isVisible("company") && c.company && (_.value = c.company), E.value = H ? c.zoneCode : void 0, N.value = M && Xe(M) ? M : F, S.value = c.postalCode, i(P))
                if (f(P)) {
                    const T = nn(P ? ? "", c.address1 ? ? "", !0),
                        G = on(P ? ? "", c.address2 ? ? "");
                    Q("streetName", c.streetName ? ? T ? .streetName), Q("streetNumber", c.streetNumber ? ? (c.streetName === void 0 ? T ? .streetNumber : void 0)), Q("line2", c.line2 ? ? G ? .line2 ? ? T ? .line2), Q("neighborhood", c.neighborhood ? ? G ? .neighborhood), B("district", c.district), B("subdistrict", c.subdistrict)
                } else
                    for (const T of xt) B(T, c[T]);
            if (o && (o("address1"), o("address2"), o("city"), o("zoneCode"), o("postalCode"), o("neighborhood"), i(P)))
                for (const T of xt) {
                    const G = T === "line2" ? "address2" : T;
                    e.isVisible(G, {
                        countryCode: P
                    }) && o(T)
                }
        }), r && (r.value = {
            address: c,
            addressId: h,
            completionService: b,
            sessionToken: v
        }), a ? .(), s ? .(c)
    }
}
const lt = Bn({
        displayName: "AutocompleteField",
        load: () => qn(() => zo(() =>
            import ("./component-AutocompleteField.BZI1dcBS.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]))),
        renderLoading(e) {
            return m(ne, { ...e
            })
        }
    }),
    Ut = {
        "Field-sizeSmall": "wfKnD",
        "Input-AccessoryOffset": "IGF4z"
    };

function _s(e) {
    const {
        country: n,
        address: t,
        addressRef: r,
        addressType: s,
        addressErrors: a,
        addressSettings: o,
        loading: l,
        editDisabled: d,
        missingBuildingNumberInAddress2: u,
        autocompleteDisabled: i,
        resetAddressSuggestions: f
    } = e, c = t.fields.address1.value, h = t.fields.address2.value, [b, v] = pe(!me(c || "")), {
        i18n: y,
        userEvents: C,
        shop: {
            id: p
        },
        source: A
    } = k(), _ = we(), E = t.peek(), N = O(j => {
        if (!X(j)) return y.translate("field_errors.address_address1_blank")
    }, [y]), S = R(t.fields.address1, a.address1, N), L = j => {
        j !== S.value && (t.fields.coordinates.value = void 0, S.onChange(j), f ? .(), me(j) || v(!0))
    }, I = j => {
        me(j) && v(!1), S.onInput(j)
    }, x = o.isVisible("address2") ? "address-line1" : "street-address", Z = at({
        country: n,
        field: "ADDRESS1"
    }), w = Re(), H = !i && w.value && Z.value, F = V([s, x]);

    function M() {
        if (_.value.defaultAttributes) {
            const j = _.value.defaultAttributes ? .uniqToken || "";
            C.monorailEvent({
                schemaId: "checkout_address_validation_prompt/3.0",
                payload: {
                    checkoutToken: A.checkoutSessionIdentifier || "",
                    shopId: parseInt(Ee(p), 10),
                    uniqueToken: j,
                    address1: E.address1 || "",
                    address2: E.address2 || "",
                    city: E.city || "",
                    zone: E.zoneCode || "",
                    zip: E.postalCode || "",
                    territory: n.code,
                    promptType: "missing_street_number",
                    locale: y.locale,
                    context: s === "shipping" ? "Shipping address" : "Billing address"
                }
            })
        }
    }
    let P = !1;
    n.buildingNumberRequired && o.validationEnabled && (P = !!(b && c), n.buildingNumberMayBeInAddress2 && (P = !!(b && u && (c || h))));
    const B = $(P);
    B.current !== P && (P && M(), B.current = P);
    const Q = P ? {
            type: "warning",
            value: y.translate("contact.civic_number_warning")
        } : void 0,
        T = S.error ? ? Q,
        G = H ? m(Ss, { ...e,
            ...S,
            onChange: L,
            onInput: I,
            error: T,
            autocomplete: F
        }) : m(ne, {
            ref: r,
            name: "address1",
            label: y.translate("contact.address1_label"),
            required: !0,
            autocomplete: F,
            readOnly: l || d,
            ...S,
            error: T,
            onChange: L,
            onInput: I
        }),
        ge = xn(Ut["Field-sizeSmall"], {
            [Ut["Input-AccessoryOffset"]]: H
        });
    return m("div", {
        className: ge,
        children: m(Qe, {
            gap: "small-200",
            children: G
        })
    })
}

function Ss({
    value: e,
    error: n,
    onInput: t,
    onChange: r,
    onAddressAutoComplete: s,
    addressAutocompleteSelection: a,
    loading: o,
    editDisabled: l,
    address: d,
    addressSettings: u,
    autocomplete: i,
    addressType: f,
    onBlur: c,
    resetAddressSuggestions: h,
    resetAddressFieldErrors: b,
    disableAutocompleteWithAdditionalFields: v
}) {
    const {
        i18n: y
    } = k(), C = d.fields.countryCode.value, p = it(u, d, C, a, s, h, b);
    return m(lt, {
        id: `${f}-address1`,
        name: "address1",
        field: "address1",
        label: y.translate("contact.address1_label"),
        accessoryEnd: m(De, {
            type: "search"
        }),
        countryCode: C,
        onSelect: p,
        required: !0,
        autocomplete: i,
        readOnly: o || l,
        value: e,
        error: n,
        onChange: r,
        onInput: t,
        addressType: f,
        onBlur: c,
        disableAdditionalFields: v
    })
}

function Ns({
    address: e,
    addressType: n,
    addressErrors: t,
    addressSettings: r,
    loading: s,
    editDisabled: a,
    setMissingBuildingNumberInAddress2: o,
    resetAddressSuggestions: l
}) {
    const {
        i18n: d
    } = k(), u = $(null), i = r.isRequired("address2"), f = O(v => {
        if (i && !X(v)) return d.translate("field_errors.address_address2_blank")
    }, [i, d]), c = R(e.fields.address2, t.address2, f), h = v => {
        c.onChange(v), l ? .(), me(v) || o ? .(!0)
    }, b = v => {
        c.onInput(v), me(v) && o ? .(!1)
    };
    return m(ne, {
        name: "address2",
        label: i ? d.translate("contact.address2_label") : d.translate("contact.optional_address2_label"),
        required: i,
        autocomplete: V([n, "address-line2"]),
        readOnly: s || a,
        ...c,
        ref: u,
        onChange: h,
        onInput: b
    })
}
const Es = ["firstName", "lastName", "company", "address1", "address2", "city", "zoneCode", "postalCode", "phone", "streetNumber", "streetName", "neighborhood", "line2", "district", "subdistrict"],
    Is = {
        zone: "zoneCode",
        province: "zoneCode",
        "address-level1": "zoneCode",
        autofill_phone_capture: "phone"
    };

function Fs(e) {
    const n = e.getAttribute("name"),
        t = e.getAttribute("autocomplete");
    return n === "countryCode" || n === "country" && !!t ? .includes("country")
}

function ks(e) {
    const n = e.getAttribute("name");
    if (!n) return;
    const t = Is[n];
    return t || (Es.includes(n) ? n : void 0)
}

function Os() {
    return new Promise(e => requestAnimationFrame(() => e()))
}

function Ls(e, n, t = !1, r) {
    const {
        observability: s,
        checkout: {
            address: {
                countryDetails: {
                    fetch: a
                }
            }
        }
    } = k(), o = $(!1), l = $(r);
    return te(() => {
        l.current = r
    }, [r]), te(() => {
        if (!t) return;
        const u = async i => {
            const f = i.autofillValues;
            if (!Array.isArray(f)) return;
            const c = new Set(f.map(({
                    field: p
                }) => ks(p)).filter(p => p !== void 0)),
                b = f.find(({
                    field: p
                }) => {
                    const A = p.getAttribute("autocomplete"),
                        _ = !n || A && A.includes(n);
                    return Fs(p) && _
                }) ? .value;
            if (!b) return;
            s.log("autofill_event_detected", "Autofill event fired with a matching country entry", {
                countryCode: b,
                addressType: n || "unknown"
            });
            const v = i.refill;
            if (typeof v != "function") return;
            o.current = !0;
            const y = () => {
                    for (const p of c) l.current ? .(p)
                },
                C = e.fields.countryCode;
            try {
                const p = await a(b);
                p ? .code ? (C.value = p.code, await Os()) : s.log("autofill_country_validation_failed", `Could not validate country code from autofill: ${b}`, {
                    countryCode: b,
                    addressType: n || "unknown",
                    hasCountryDetails: !!p
                }), await v(), y()
            } catch (p) {
                try {
                    await v(), y()
                } catch {}
                s.log("autofill_handler_error", `Error during autofill handling: ${p instanceof Error?p.message:"Unknown error"}`, {
                    countryCode: b,
                    addressType: n || "unknown",
                    errorName: p instanceof Error ? p.name : "Unknown"
                })
            }
        };
        return document.addEventListener("autofill", u), () => {
            document.removeEventListener("autofill", u), o.current = !1
        }
    }, [a, e, n, t, s]), {
        autofillEventHandledRef: o
    }
}
const J = {
        type: "text",
        tabIndex: -1,
        "aria-hidden": !0
    },
    zs = Yt(function({
        address: n,
        addressType: t,
        availableCountries: r,
        country: s,
        onAutofillCaptured: a
    }) {
        const o = Kn(),
            l = o ? .nested ? o.id : void 0,
            d = n.value,
            {
                shop: u,
                i18n: i,
                observability: f,
                client: {
                    userAgent: c
                },
                checkout: h
            } = k(),
            b = u.additionalAddressFieldsEnabled,
            v = h.configuration.addressSettings.nonBillingAddressSettings.value,
            y = vo(c).name === "Safari",
            C = h.address.extendedAddressMode.getFromCountry(s),
            p = typeof window < "u" && "AutofillEvent" in window && !ho(c),
            {
                autofillEventHandledRef: A
            } = Ls(n, t, p, a),
            _ = S => ({
                currentTarget: {
                    value: L
                }
            }) => {
                if (A.current) return;
                const I = S === "streetName" && C === "concatenated" ? "address1" : S;
                n.fields[I].value = S === "phone" ? Do(L) : L, a ? .(I)
            },
            N = go(S => {
                A.current || (n.fields.zoneCode.value = S, a ? .("zoneCode"))
            });
        return m(Yn, {
            accessibilityVisibility: "exclusive",
            children: [m("input", { ...J,
                id: "autofill_firstName",
                name: "firstName",
                autoComplete: V([t, "given-name"]),
                onChange: _("firstName"),
                value: d.firstName,
                form: l,
                "aria-label": i.translate("contact.first_name_label")
            }), m("input", { ...J,
                id: "autofill_lastName",
                name: "lastName",
                autoComplete: V([t, "family-name"]),
                onChange: _("lastName"),
                value: d.lastName,
                form: l,
                "aria-label": i.translate("contact.last_name_label")
            }), v.isVisible("company") && m("input", { ...J,
                id: "autofill_company",
                name: "company",
                autoComplete: V([t, "organization"]),
                onChange: _("company"),
                value: d.company,
                form: l,
                "aria-label": i.translate("contact.company_label")
            }), m("input", { ...J,
                id: "autofill_address1",
                name: "address1",
                autoComplete: V([t, v.isVisible("address2") ? "address-line1" : "street-address"]),
                onChange: _("address1"),
                value: d.address1,
                form: l,
                "aria-label": i.translate("contact.address1_label")
            }), b && m(ve, {
                children: [m("input", { ...J,
                    id: "autofill_streetNumber",
                    name: "streetNumber",
                    autoComplete: "off",
                    onChange: _("streetNumber"),
                    value: d.streetNumber,
                    form: l,
                    "aria-label": i.translate("contact.street_number_label")
                }), m("input", { ...J,
                    id: "autofill_streetName",
                    name: "streetName",
                    autoComplete: V([t, "street-address"]),
                    onChange: _("streetName"),
                    value: d.streetName,
                    form: l,
                    "aria-label": i.translate("contact.street_name_label")
                }), m("input", { ...J,
                    id: "autofill_neighborhood",
                    name: "neighborhood",
                    autoComplete: V([t, "address-level3"]),
                    onChange: _("neighborhood"),
                    value: d.neighborhood,
                    form: l,
                    "aria-label": i.translate("contact.neighborhood_label")
                })]
            }), v.isVisible("address2") && !y && m("input", { ...J,
                id: "autofill_address2",
                name: "address2",
                autoComplete: V([t, "address-line2"]),
                onChange: _("address2"),
                value: d.address2,
                form: l,
                "aria-label": i.translate("contact.address2_label")
            }), m("input", { ...J,
                id: "autofill_city",
                name: "city",
                autoComplete: V([t, "address-level2"]),
                onChange: _("city"),
                value: d.city,
                form: l,
                "aria-label": i.translate("contact.city_label")
            }), m("input", { ...J,
                id: "autofill_country",
                name: "country",
                autoComplete: V([t, "country"]),
                onChange: ({
                    currentTarget: {
                        value: S
                    }
                }) => {
                    if (A.current) return;
                    const L = r.find(I => I.value === S || I.label.toLowerCase() === S.toLowerCase());
                    L ? n.fields.countryCode.value = L.value : f.log("autofill_capture_country_not_matched", "Mismatch between autofill and available countries", {
                        rawCountryValue: S,
                        availableCountries: r.map(I => I.label)
                    })
                },
                value: d.countryCode,
                form: l,
                "aria-label": i.translate("contact.country_label")
            }), m("input", { ...J,
                id: "autofill_zone",
                name: "zone",
                autoComplete: V([t, "address-level1"]),
                onChange: S => N(S.currentTarget.value),
                value: d.zoneCode,
                form: l,
                "aria-label": i.translate("contact.province_label")
            }), m("input", { ...J,
                id: "autofill_address_level1",
                name: "address-level1",
                autoComplete: V([t, "address-level1"]),
                onChange: S => N(S.currentTarget.value),
                value: d.zoneCode,
                form: l,
                "aria-label": i.translate("contact.province_label")
            }), m("input", { ...J,
                id: "autofill_province",
                name: "province",
                autoComplete: V([t, "address-level1"]),
                onChange: S => N(S.currentTarget.value),
                value: d.zoneCode,
                form: l,
                "aria-label": i.translate("contact.province_label")
            }), m("input", { ...J,
                id: "autofill_postalCode",
                name: "postalCode",
                autoComplete: V([t, "postal-code"]),
                onChange: _("postalCode"),
                value: d.postalCode,
                form: l,
                "aria-label": i.translate("contact.postal_code_label")
            }), v.isVisible("phone", {
                countryCode: s.code
            }) && m("input", { ...J,
                id: "autofill_phone",
                name: "autofill_phone_capture",
                autoComplete: V([t, "tel-national"]),
                onChange: _("phone"),
                value: d.phone,
                form: l,
                "aria-label": i.translate("contact.phone_label")
            })]
        })
    }),
    Vs = new Map([
        ["city_label", "city"],
        ["suburb_label", "suburb"]
    ]);

function Ds({
    country: e,
    address: n,
    addressType: t,
    addressErrors: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l
    } = k(), d = O(h => {
        if (!X(h)) return l.translate("field_errors.address_city_blank")
    }, [l]), u = R(n.fields.city, r.city, d), i = h => {
        h !== u.value && (n.fields.coordinates.value = void 0, u.onChange(h), o ? .())
    }, c = he(e.localizationKeys ? .city ? ? "city_label", e.labels ? .city ? ? "", Vs)("label");
    return m(ne, {
        name: "city",
        label: c,
        required: !0,
        autocomplete: V([t, "address-level2"]),
        readOnly: s || a,
        ...u,
        onChange: i
    })
}

function ws({
    addressType: e,
    address: n,
    addressErrors: t,
    addressSettings: r,
    loading: s,
    editDisabled: a,
    hasPurchasingCompany: o
}) {
    const {
        i18n: l
    } = k(), d = r.isRequired("company"), u = O(h => {
        if (d && !X(h)) return l.translate("field_errors.address_company_blank")
    }, [d, l]), i = R(n.fields.company, t.company, u), f = d ? l.translate("contact.company_label") : l.translate("contact.optional_company_label"), c = d ? l.translate("contact.company_attention_label") : l.translate("contact.optional_company_attention_label");
    return m(ne, {
        name: "company",
        label: o ? c : f,
        required: d,
        autocomplete: V([e, "organization"]),
        readOnly: s || a,
        ...i
    })
}

function Rs({
    children: e
}) {
    const {
        i18n: n
    } = k();
    return m(ve, {
        children: [m(Jt, {
            command: "--show",
            commandFor: "non-interactive-tooltip",
            children: m("div", { ...{
                    inert: !0
                },
                children: e
            })
        }), m(Ro, {
            id: "non-interactive-tooltip",
            children: n.translate("editor.not_available")
        })]
    })
}

function Ps({
    children: e,
    interactive: n
}) {
    return n ? e : m(Rs, {
        children: e
    })
}
const Ts = "---",
    Ms = "";

function Bs({
    address: e,
    addressType: n,
    addressErrors: t,
    availableCountries: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o,
    onBeforeCountryChange: l
}) {
    const {
        i18n: d
    } = k(), u = R(e.fields.countryCode, t.countryCode), i = R(e.fields.zoneCode, t.zoneCode), f = Kt(void 0), c = bo(), h = Re();
    te(() => {
        c("auto-selected", u.value ? ? "unknown", n)
    }, []);
    const b = p => {
        if (p !== u.value) {
            f.value = p;
            const A = () => {
                i.onChange(void 0), u.onChange(p), o ? .(), e.fields.coordinates.value = void 0, t.zoneCode.value = void 0, t.postalCode.value = void 0, c("user-input", p, n), f.value = void 0
            };
            l ? l(p, A, () => {
                f.value = void 0
            }) : A()
        }
    };

    function v(p) {
        return !p || p.trim() === "" ? "" : p
    }
    const C = Zn() ? .checkoutProfile.hasOverrides.value && n === "shipping";
    return m(Ps, {
        interactive: !C,
        children: m(et, {
            name: "countryCode",
            label: d.translate("contact.country_label"),
            required: !0,
            autocomplete: V([n, "country-name"]),
            readOnly: s || a,
            ...u,
            value: v(f.value ? ? u.value),
            onChange: p => b(p),
            children: r.map(p => p.value === Ms && p.label === Ts ? m(Un, {
                when: h,
                children: m("hr", {})
            }, p.key ? ? "country-code-separator") : m(tt, {
                value: p.value,
                children: p.label
            }, p.key ? ? p.value))
        })
    })
}

function qs({
    address: e,
    addressType: n,
    addressErrors: t,
    country: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l
    } = k(), d = r.districtRequired, u = !d, i = u ? l.translate("contact.optional_district_label") : l.translate("contact.district_label"), f = he(r.localizationKeys.district ? ? "district_label", i, rt, u), c = O(v => {
        if (d && !X(v)) return l.translate("field_errors", {
            scope: st({
                localizationKey: r.localizationKeys.district,
                fallback: "district"
            })
        })
    }, [r.localizationKeys.district, l, d]), h = R(e.fields.district, t.district, c), b = v => {
        h.onChange(v), o ? .()
    };
    return m(ne, {
        name: "district",
        label: f("label"),
        required: d,
        autocomplete: V([n, "address-level3"]),
        readOnly: s || a,
        ...h,
        onChange: b
    })
}

function xs({
    address: e,
    addressErrors: n,
    addressType: t,
    addressSettings: r,
    loading: s,
    editDisabled: a,
    required: o
}) {
    const {
        i18n: l
    } = k(), d = r.isRequired("firstName") || o, u = O(f => {
        if (d && !X(f)) return l.translate("field_errors.address_first_name_blank")
    }, [d, l]), i = R(e.fields.firstName, n.firstName, u);
    return m(ne, {
        name: "firstName",
        label: d ? l.translate("contact.first_name_label") : l.translate("contact.optional_first_name_label"),
        required: d,
        autocomplete: V([t, "given-name"]),
        readOnly: s || a,
        ...i
    })
}

function Us({
    address: e,
    addressType: n,
    addressErrors: t,
    addressSettings: r,
    loading: s,
    editDisabled: a
}) {
    const {
        i18n: o
    } = k(), l = r.isRequired("lastName"), d = O(f => {
        if (l && !X(f)) return o.translate("field_errors.address_last_name_blank")
    }, [l, o]), u = R(e.fields.lastName, t.lastName, d), i = l ? o.translate("contact.last_name_label") : o.translate("contact.optional_last_name_label");
    return m(ne, {
        name: "lastName",
        label: i,
        required: l,
        autocomplete: V([n, "family-name"]),
        readOnly: s || a,
        ...u
    })
}

function Ws({
    address: e,
    addressType: n,
    addressErrors: t,
    addressSettings: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l
    } = k(), d = r.isRequired("address2"), u = O(v => {
        if (d && !X(v)) return l.translate("field_errors.address_address2_blank")
    }, [d, l]), i = R(e.fields.line2, t.line2, u), f = R(e.fields.neighborhood, t.neighborhood), c = R(e.fields.address2, t.address2), h = v => {
        i.onChange(v), o ? .()
    }, b = v => {
        i.onInput(v), c.error && f.clearError()
    };
    return m(ne, {
        name: "line2",
        label: d ? l.translate("contact.address2_label") : l.translate("contact.optional_address2_label"),
        required: d,
        autocomplete: V([n, "address-line2"]),
        readOnly: s || a,
        ...i,
        onChange: h,
        onInput: b
    })
}

function $s({
    address: e,
    addressType: n,
    addressErrors: t,
    country: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l
    } = k(), d = r.neighborhoodRequired, u = !d, i = d ? l.translate("contact.neighborhood_label") : l.translate("contact.optional_neighborhood_label"), f = he(r.localizationKeys.neighborhood ? ? "neighborhood_label", i, rt, u), c = O(p => {
        if (d && !X(p)) return l.translate("field_errors", {
            scope: st({
                localizationKey: r.localizationKeys.neighborhood,
                fallback: "neighborhood"
            })
        })
    }, [r.localizationKeys.neighborhood, d, l]), h = R(e.fields.neighborhood, t.neighborhood, c), b = R(e.fields.line2, t.line2), v = R(e.fields.address2, t.address2), y = p => {
        h.onChange(p), o ? .()
    }, C = p => {
        h.onInput(p), v.error && b.clearError()
    };
    return m(ne, {
        name: "neighborhood",
        label: f("label"),
        required: d,
        autocomplete: V([n, "address-level3"]),
        readOnly: s || a,
        ...h,
        onChange: y,
        onInput: C
    })
}

function Hs({
    country: e,
    addressType: n,
    addressErrors: t,
    addressSettings: r,
    addressFormSettings: s,
    address: a,
    loading: o,
    editDisabled: l
}) {
    const {
        code: d
    } = e, {
        i18n: u
    } = k(), i = r.isRequired("phone", {
        countryCode: d
    }), {
        validatePhoneNumber: f
    } = Po(), {
        setAddressError: c
    } = Ne(t), h = u.translate("field_errors.shipping_line_phone_invalid"), b = u.translate("field_errors.phone_blank"), v = O(_ => {
        const E = a.fields.countryCode.value,
            N = X(_);
        if (i && !N) return b;
        if (N && !f(_ ? ? "", E)) return h
    }, [a.fields.countryCode, i, f, b, h]), y = R(a.fields.phone, t.phone, v), C = u.translate("contact.optional_phone_label"), p = u.translate("contact.phone_label"), A = s ? .phoneTooltip !== !1 && m(Jt, {
        overlay: m(jn, {
            children: u.translate("contact.phone_tooltip")
        }),
        accessibilityLabel: u.translate("tooltip.accessibility_label_context", {
            context: u.translate("contact.phone_label")
        }),
        children: m(De, {
            type: "question-circle"
        })
    });
    return fe(() => {
        const _ = a.fields.phone.peek(),
            E = a.fields.countryCode.value;
        _ && E && (f(_, E) ? c("phone", void 0) : c("phone", h))
    }), m(wo, {
        name: "phone",
        countryCode: d,
        label: i ? p : C,
        required: i,
        autocomplete: V([n, "tel-national"]),
        readOnly: o || l,
        accessoryEnd: A || void 0,
        ...y
    })
}
const Gs = {
        "Field-sizeSmall": "hDo51"
    },
    Ks = new Map([
        ["AU", /^(?!2899|679[89])(\d{4})$/],
        ["CA", /^[A-Za-z]\d[A-Za-z]\s*\d[A-Za-z]\d$/],
        ["DE", /^(DE?-?)?\d{5}$/],
        ["FR", /^((FR?( |-)?)?([0-8]\d{4})|([0-9][01234569]\d{3}))$/],
        ["GB", /^[A-Za-z]{1,2}\d{1,2}(?:[A-Za-z])?\s?\d[A-Za-z]{2}$/],
        ["NZ", /^\d{4}$/],
        ["US", /^\d{5}(?:[-\s]?\d{4})?$/]
    ]),
    Ys = new Map([
        ["postal_code_label", "postal_code"],
        ["zip_code_label", "zip_code"],
        ["postcode_label", "postcode"],
        ["pincode_label", "pincode"]
    ]);

function Zs(e) {
    const {
        country: n,
        address: t,
        addressType: r,
        addressErrors: s,
        loading: a,
        editDisabled: o,
        resetAddressSuggestions: l
    } = e, {
        i18n: d
    } = k(), u = n.postalCodeRequired, i = O(I => {
        if (u && !X(I)) return d.translate("field_errors.address_zip_blank")
    }, [u, d]), f = !u, c = u ? d.translate("contact.postal_code_label") : d.translate("contact.optional_postal_code_label"), b = he(n.localizationKeys.postalCode ? ? "postal_code_label", c, Ys, f)("label"), v = R(t.fields.postalCode, s.postalCode, i), [y, C] = pe(v.value);
    fe(() => {
        const I = t.fields.postalCode.value;
        I !== y && C(I)
    });
    const p = at({
            country: n,
            field: "POSTAL_CODE"
        }),
        _ = Re().value && p.value,
        E = I => {
            I !== v.value && (t.fields.coordinates.value = void 0, v.onChange(I), l ? .())
        },
        N = Ks.get(n.code);

    function S(I) {
        const x = I.toLocaleUpperCase();
        v.onInput(x), C(x), N && N.test(x) && E(x)
    }
    const L = _ ? m(Js, { ...e,
        ...v,
        onChange: E,
        label: b
    }) : m(Jn, {
        name: "postalCode",
        label: b,
        required: u,
        inputMode: js(n),
        autocomplete: V([r, "postal-code"]),
        autoCapitalize: "characters",
        readOnly: a || o,
        ...v,
        onInput: S,
        onChange: E,
        controlledValue: y
    });
    return m("div", {
        className: Gs["Field-sizeSmall"],
        children: L
    })
}

function js(e) {
    const {
        pureNumericPostalCode: n
    } = e;
    return n ? "numeric" : "text"
}

function Js({
    label: e,
    value: n,
    error: t,
    onInput: r,
    onChange: s,
    onAddressAutoComplete: a,
    addressAutocompleteSelection: o,
    loading: l,
    editDisabled: d,
    address: u,
    addressSettings: i,
    addressType: f,
    onBlur: c,
    resetAddressSuggestions: h,
    resetAddressFieldErrors: b,
    disableAutocompleteWithAdditionalFields: v
}) {
    const y = u.fields.countryCode.value,
        C = it(i, u, y, o, a, h, b);
    return m(lt, {
        name: "postalCode",
        field: "postalCode",
        label: e,
        countryCode: y,
        onSelect: C,
        accessoryEnd: m(De, {
            type: "search"
        }),
        required: !0,
        autocomplete: V([f, "postal-code"]),
        readOnly: l || d,
        value: n,
        error: t,
        onChange: s,
        onInput: r,
        addressType: f,
        onBlur: c,
        disableAdditionalFields: v
    })
}
const Wt = ["1"];

function Xs({
    address: e
}) {
    return m(Bo, {
        border: "none",
        children: m(To, {
            hideRadioControl: !0,
            name: "readOnlyAddress",
            values: Wt,
            variant: "block",
            children: m(Mo, {
                value: Wt[0],
                disabled: !0,
                details: m(Qe, {
                    children: [m(Ye, {
                        address: e,
                        hiddenFields: ["address1", "phone", "company", "firstName", "lastName"]
                    }), m(Ye, {
                        address: e,
                        hiddenFields: ["company", "firstName", "lastName", "address1", "address2", "city", "postalCode", "zoneCode", "countryCode"]
                    })]
                }),
                children: m(Ye, {
                    address: e,
                    hiddenFields: ["address2", "phone", "company", "city", "postalCode", "zoneCode", "countryCode"]
                })
            })
        })
    })
}

function Qs({
    address: e,
    addressOptions: n,
    disabled: t = !1,
    disableNewAddressOption: r,
    callback: s,
    addressOptionsType: a
}) {
    const o = e.value,
        {
            i18n: l
        } = k(),
        d = er(e),
        u = n.find(C => wt(o, C.address, ["phone"])) ? .value,
        i = $({
            countryCode: e.fields.countryCode.peek(),
            zoneCode: e.fields.zoneCode.peek()
        }),
        f = K(() => r ? [...n] : [...n, {
            label: l.translate("contact.new_address_label"),
            value: `${n.length}`,
            address: Co({
                countryCode: i.current.countryCode,
                zoneCode: i.current.zoneCode
            })
        }], [r, n, l]),
        c = n.length ? n[0].value : void 0,
        h = r ? c : f[f.length - 1].value,
        [b, v] = pe(u || h),
        y = C => {
            const p = parseInt(C, 10),
                A = isNaN(p) || p < 0 || p >= f.length ? 0 : p,
                _ = A.toString(),
                E = f[A].address;
            d(E), v(_), s ? .(E, !r && _ === h)
        };
    return te(() => {
        const C = n.find(p => wt(o, p.address, ["phone"])) ? .value;
        v(C || h)
    }, [o, n, h]), !n.length && r ? null : m(et, {
        value: b,
        label: a === "available" ? l.translate("contact.available_addresses_label") : l.translate("contact.stored_addresses_label"),
        onChange: y,
        disabled: t,
        children: f.map(C => m(tt, {
            value: C.value,
            children: C.label
        }, C.value))
    })
}

function er(e) {
    return n => {
        const {
            handle: t,
            ...r
        } = n;
        e.value = { ...yo,
            oneTimeUse: void 0,
            coordinates: void 0,
            district: void 0,
            subdistrict: void 0,
            line2: void 0,
            streetName: void 0,
            streetNumber: void 0,
            neighborhood: void 0,
            ...r
        }
    }
}

function tr(e) {
    const {
        country: n,
        address: t,
        addressRef: r,
        addressErrors: s,
        loading: a,
        editDisabled: o,
        autocompleteDisabled: l,
        resetAddressSuggestions: d
    } = e, {
        i18n: u
    } = k(), i = n.streetNameRequired, f = i ? u.translate("contact.street_name_label") : u.translate("contact.optional_street_name_label"), c = O(S => {
        if (i && !X(S)) return u.translate("field_errors.address_street_name_blank")
    }, [u, i]), h = R(t.fields.streetName, s.streetName, c), b = R(t.fields.address1, s.address1), v = R(t.fields.streetNumber, s.streetNumber), y = S => {
        S !== h.value && (t.fields.coordinates.value = void 0, h.onChange(S), d ? .())
    }, C = S => {
        h.onInput(S), b ? .error && v.clearError()
    }, p = at({
        country: n,
        field: "ADDRESS1"
    }), A = Re(), _ = !l && A.value && p.value, E = h.error, N = _ ? m(nr, { ...e,
        ...h,
        label: f,
        required: i,
        onChange: y,
        onInput: C,
        error: E,
        autocomplete: "off"
    }) : m(ne, {
        ref: r,
        name: "streetName",
        label: f,
        required: i,
        autocomplete: "off",
        readOnly: a || o,
        ...h,
        error: E,
        onChange: y,
        onInput: C
    });
    return m(Qe, {
        gap: "small-200",
        children: N
    })
}

function nr({
    value: e,
    error: n,
    label: t,
    required: r,
    onInput: s,
    onChange: a,
    onAddressAutoComplete: o,
    addressAutocompleteSelection: l,
    loading: d,
    editDisabled: u,
    address: i,
    addressSettings: f,
    autocomplete: c,
    addressType: h,
    onBlur: b,
    resetAddressSuggestions: v,
    resetAddressFieldErrors: y
}) {
    const C = i.fields.countryCode.value,
        p = it(f, i, C, l, o, v, y);
    return m(lt, {
        name: "streetName",
        field: "streetName",
        label: t,
        accessoryEnd: m(De, {
            type: "search"
        }),
        countryCode: C,
        onSelect: p,
        required: r,
        autocomplete: c,
        readOnly: d || u,
        value: e,
        error: n,
        onChange: a,
        onInput: s,
        addressType: h,
        onBlur: b,
        disableAdditionalFields: !1
    })
}

function or(e) {
    const {
        address: n,
        addressRef: t,
        addressErrors: r,
        country: s,
        loading: a,
        editDisabled: o,
        resetAddressSuggestions: l
    } = e, {
        i18n: d
    } = k(), u = O(y => {
        if (!X(y)) return d.translate("field_errors.address_street_number_blank")
    }, [d]), i = R(n.fields.streetNumber, r.streetNumber, u), f = R(n.fields.address1, r.address1), c = R(n.fields.streetName, r.streetName), h = y => {
        y !== i.value && (i.onChange(y), l ? .())
    }, b = y => {
        i.onInput(y), f.error && c.clearError()
    }, v = s.streetNumberRequired;
    return m(ne, {
        ref: t,
        name: "streetNumber",
        label: v ? d.translate("contact.street_number_label") : d.translate("contact.optional_street_number_label"),
        required: v,
        autocomplete: "off",
        readOnly: a || o,
        ...i,
        error: i.error,
        onChange: h,
        onInput: b
    })
}

function sr({
    address: e,
    addressType: n,
    addressErrors: t,
    country: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l
    } = k(), d = r.subdistrictRequired, u = !d, i = u ? l.translate("contact.optional_subdistrict_label") : l.translate("contact.subdistrict_label"), f = he(r.localizationKeys.subdistrict ? ? "subdistrict_label", i, rt, u), c = O(v => {
        if (d && !X(v)) return l.translate("field_errors", {
            scope: st({
                localizationKey: r.localizationKeys.subdistrict,
                fallback: "subdistrict"
            })
        })
    }, [r.localizationKeys.subdistrict, l, d]), h = R(e.fields.subdistrict, t.subdistrict, c), b = v => {
        h.onChange(v), o ? .()
    };
    return m(ne, {
        name: "subdistrict",
        label: f("label"),
        required: d,
        autocomplete: V([n, "address-level4"]),
        readOnly: s || a,
        ...h,
        onChange: b
    })
}
const rr = new Map([
    ["province_label", "province"],
    ["county_label", "county"],
    ["state_label", "state"],
    ["region_label", "region"],
    ["prefecture_label", "prefecture"],
    ["governorate_label", "governorate"],
    ["emirate_label", "emirate"],
    ["state_and_territory_label", "state_and_territory"]
]);

function ar({
    country: e,
    address: n,
    addressType: t,
    addressErrors: r,
    loading: s,
    editDisabled: a,
    resetAddressSuggestions: o
}) {
    const {
        i18n: l,
        observability: d
    } = k(), u = O(p => {
        if (!X(p)) return l.translate("field_errors.address_province_blank")
    }, [l]), i = he(e.localizationKeys.zone ? ? "province_label", e.labels.zone, rr), f = i("label"), c = i("placeholder"), h = R(n.fields.zoneCode, r.zoneCode, u), b = p => {
        p !== h.value && (n.fields.coordinates.value = void 0, r.zoneCode.value = void 0, r.postalCode.value = void 0, o ? .(), h.onChange(p))
    }, v = h.value, y = v ? .toLowerCase(), C = e.zones.find(p => p.code === v || p.name.toLowerCase() === y || p.nameWithAlternates ? .some(A => A.toLocaleLowerCase() === y));
    return C ? h.onChange(C.code) : v && v.trim() !== "" && d.log("zone_code_field_autofill_zone_not_matched", "Mismatch between autofill and available zones", {
        autofillZoneCode: v,
        autofillZoneName: y,
        countryCode: e.code,
        countryName: e.name
    }), m(et, {
        name: "zone",
        label: f,
        placeholder: c,
        required: !0,
        autocomplete: V([t, "address-level1"]),
        readOnly: s || a,
        ...h,
        value: h.value || "",
        onChange: b,
        children: ir(e.zones).map(p => m(tt, {
            value: p.value,
            alternateValues: p.alternateValues,
            children: p.label
        }, p.value))
    })
}

function ir(e) {
    return e.map(n => {
        const {
            name: t,
            code: r,
            nameWithAlternates: s
        } = n;
        return {
            label: t,
            value: r,
            alternateValues: s
        }
    })
}
const lr = new Map([
        ["firstName", "firstName"],
        ["lastName", "lastName"],
        ["company", "company"],
        ["address1", "address1"],
        ["address2", "address2"],
        ["city", "city"],
        ["zone", "zoneCode"],
        ["postalCode", "postalCode"],
        ["streetName", "streetName"],
        ["streetNumber", "streetNumber"],
        ["line2", "line2"],
        ["neighborhood", "neighborhood"],
        ["district", "district"],
        ["subdistrict", "subdistrict"]
    ]),
    dr = "autofill_";

function cr(e, n) {
    const t = ur(e),
        r = [];
    for (const [s, a] of t) a.value.trim() !== "" && (n[s] ? ? "").trim() === "" && r.push(s);
    return {
        missingFromState: r,
        comparedFieldCount: t.size
    }
}

function ur(e) {
    const n = e.querySelectorAll("input[name], select[name]"),
        t = new Map;
    for (const r of n) {
        if (!fr(r)) continue;
        const s = lr.get(r.name);
        s && (t.has(s) || t.set(s, r))
    }
    return t
}

function fr(e) {
    return !e.id.startsWith(dr)
}
const ze = {
    behavior: "allow"
};

function pr({
    containerRef: e,
    address: n,
    addressType: t,
    autofillCapturedFieldsRef: r
}) {
    const {
        observability: s
    } = k(), a = $(new Set), o = O(l => a.current.has(l) ? !1 : (a.current.add(l), !0), []);
    tn(O(({
        reason: l
    }) => {
        try {
            if (l === "negotiation") return ze;
            const d = e.current;
            if (!d) return ze;
            const {
                missingFromState: u,
                comparedFieldCount: i
            } = cr(d, n.peek());
            if (u.length === 0) return ze;
            const f = {
                    addressType: t ? ? "unknown",
                    negotiationStage: l,
                    missingFromStateFields: u.join(","),
                    missingFromStateCount: u.length,
                    comparedFieldCount: i,
                    autofillCaptureObserved: (r.current ? .size ? ? 0) > 0,
                    focusInForm: d.contains(document.activeElement)
                },
                c = [l, t ? ? "unknown", u.join(","), f.focusInForm, f.autofillCaptureObserved].join(":");
            return {
                behavior: "allow",
                perform: () => {
                    try {
                        if (!o(c)) return;
                        s.log("address_form_dom_state_desync", "Address form controls hold values the proposal state does not", f)
                    } catch {}
                }
            }
        } catch {
            return ze
        }
    }, [n, t, r, o, e, s]))
}
const $t = "address_clobber",
    mr = 20,
    vr = 3e4;

function Ht(e, n) {
    switch (e) {
        case "address1":
        case "address2":
        case "city":
        case "district":
        case "line2":
        case "neighborhood":
        case "postalCode":
        case "streetName":
        case "streetNumber":
        case "subdistrict":
            return e;
        case "zone":
            return "zoneCode";
        case "country":
            return n ? "countryCode" : void 0;
        case "countryCode":
            return n ? void 0 : "countryCode";
        case "address_level1":
        case "province":
            return n ? "zoneCode" : void 0;
        default:
            return
    }
}

function hr(e, n) {
    switch (e) {
        case "zone":
            return "zoneCode";
        case "address1":
        case "address2":
        case "city":
        case "company":
        case "countryCode":
        case "district":
        case "email":
        case "firstName":
        case "lastName":
        case "line2":
        case "neighborhood":
        case "phone":
        case "postalCode":
        case "streetName":
        case "streetNumber":
        case "subdistrict":
            return e
    }
    switch (n) {
        case "button":
            return "button";
        case "input":
            return "other-input";
        case "select":
            return "other-select";
        case "other":
            return "other-element";
        case "unknown":
            return "unknown"
    }
}

function gr(e = Date.now) {
    let n, t = 0;
    const r = new Set,
        s = () => {
            n = void 0, t = 0, r.clear()
        },
        a = (o = e()) => n === void 0 ? !1 : o - n >= vr || t === 0 ? (s(), !1) : !0;
    return {
        isObserving: a,
        recordSelection() {
            n = e(), t = mr, r.clear()
        },
        observeAddressEvent(o) {
            const l = e();
            if (!a(l) || n === void 0) return;
            const d = o.id.startsWith("autofill_"),
                u = d ? Ht(o.id.slice(9), !0) : void 0,
                i = o.eventTrusted && (o.elementType === "input" && o.eventType === "input" && o.hasInputType && o.autofillSource === "none" || o.elementType === "select" && o.eventType === "change" && o.isFocused);
            if (!d && i) {
                s();
                return
            }
            const f = u ? ? Ht(o.name, !1);
            if (!f) return;
            const c = u ? "honeypot" : "visible-field";
            if (c === "visible-field" && (o.elementType === "input" && o.eventType === "change" && o.eventTrusted || o.elementType === "select" && o.eventType !== "change")) return;
            const h = `${c}:${f}:${o.autofillSource}`;
            if (r.has(h)) return;
            r.add(h);
            const b = {
                activeElement: o.activeElement,
                autofillSource: o.autofillSource,
                domEventType: o.eventType,
                eventTrusted: o.eventTrusted,
                field: f,
                hasInputType: o.hasInputType,
                selectionAgeMs: Math.max(0, l - n),
                writer: c
            };
            return t -= 1, t === 0 && s(), b
        }
    }
}

function br(e) {
    let n = "unknown";
    return e instanceof HTMLInputElement ? n = "input" : e instanceof HTMLSelectElement ? n = "select" : e instanceof HTMLButtonElement ? n = "button" : e && (n = "other"), hr(e ? .getAttribute("name") ? ? null, n)
}

function Cr({
    addressType: e,
    onAddressAutoComplete: n
}) {
    const {
        observability: t
    } = k(), r = $(void 0);
    r.current ? ? = gr();
    const s = O(l => {
            try {
                r.current ? .recordSelection()
            } catch {}
            n ? .(l)
        }, [n]),
        a = O((l, d) => {
            try {
                const u = d.target;
                if (!(u instanceof HTMLInputElement) && !(u instanceof HTMLSelectElement) || !r.current ? .isObserving()) return;
                const i = d,
                    f = document.activeElement,
                    c = u instanceof HTMLSelectElement,
                    h = r.current.observeAddressEvent({
                        activeElement: br(f),
                        autofillSource: c ? "unsupported" : Xn(d) ? ? "none",
                        elementType: c ? "select" : "input",
                        eventTrusted: d.isTrusted,
                        eventType: l,
                        hasInputType: !!(i.inputType ? ? i.nativeEvent ? .inputType),
                        id: u.id,
                        isFocused: u === f,
                        name: u.name
                    });
                h && t.log($t, `${$t}: autofill`, {
                    kind: "autofill",
                    addressType: e,
                    ...h
                })
            } catch {}
        }, [e, t]);
    return {
        addressEventCaptureProps: K(() => ({
            onChangeCapture: l => a("change", l),
            onInputCapture: l => a("input", l)
        }), [a]),
        handleAddressAutoComplete: s
    }
}
const yr = 400,
    Ar = [];
class _r extends Error {
    constructor() {
        super(...arguments), this.name = "UnexpectedFieldError"
    }
}
const Sr = Yt(function({
    id: n,
    address: t,
    countries: r,
    addressSettings: s,
    addressType: a,
    addressErrors: o,
    additionalFieldGroups: l,
    children: d,
    settings: u,
    loading: i = !1,
    onAddressAutoComplete: f,
    onBeforeCountryChange: c,
    onAutofillCaptured: h,
    showSavedAddressSelector: b = !0,
    shouldSkipAddressValidation: v = !1,
    availableAddresses: y,
    mustSelectProvidedAddress: C,
    filteredFields: p
}) {
    const A = re(() => y ? .value),
        _ = re(() => C ? .value),
        {
            negotiate: E
        } = Xt(),
        {
            lastJourneyProgression: N
        } = ot(),
        {
            checkout: S,
            source: L,
            i18n: I,
            shopPay: x,
            observability: Z,
            userEvents: w,
            shop: H
        } = k(),
        {
            wallets: F,
            address: {
                extendedAddressMode: M
            },
            configuration: P
        } = S,
        {
            id: B
        } = H,
        {
            locale: Q
        } = I,
        T = $(t.streetNameCorrection ? .peek());
    fe(() => {
        const g = t.streetNameCorrection ? .value;
        if (!(!g || g === T.current)) return T.current = g, Z.counter({
            name: "checkout_address1_street_number_deduplicated",
            value: 1,
            attributes: {
                country: g.countryCode ? ? "unknown"
            }
        }), Qn({
            content: `${I.translate("contact.street_name_label")}: ${g.streetName}`
        })
    });
    const {
        addressEventCaptureProps: G,
        handleAddressAutoComplete: ge
    } = Cr({
        addressType: a,
        onAddressAutoComplete: f
    }), j = P.addressSettings.nonBillingAddressSettings.value, dt = L.type === "draftOrder", dn = Ao(), cn = sn(), be = r ? ? (a === "shipping" ? dn : cn), Pe = K(() => rn(), []), ct = K(() => ms(), []), {
        resetAddressSuggestions: ut
    } = Ve(Pe, o), {
        resetAddressErrors: Te,
        resetAddressFieldErrors: Ie
    } = Ne(o), de = !_o().value && a === "shipping", ae = t.fields.countryCode, {
        details: ce,
        loading: Me
    } = nt(ae.value), Y = K(() => s ? ? j, [s, j]), oe = K(() => {
        const g = be ? .find(z => z.value === ce ? .code);
        return ce && (g || dt) ? ce : j.defaultShippingDetails.country
    }, [be, dt, j.defaultShippingDetails.country, ce]), Be = K(() => !be ? .length || de ? [{
        value: oe.code,
        label: oe.name
    }] : be, [be, oe, de]), {
        buyerIdentity: ft
    } = Se(), un = re(() => A.value ? .flatMap(({
        address: g
    }) => g ? .countryCode ? [g.countryCode] : []) ? ? []), qe = Rt(un), Ce = M.getFromCountry(oe), pt = M.getFormatFromCountry(oe), xe = H.hasFlagEnabled(So), Ue = K(() => No({
        country: oe,
        editFormat: pt,
        addressSettings: Y
    }), [Y, oe, pt]), fn = _e(a), Fe = re(() => {
        const g = ft.value ? .customerProfile;
        if (g ? .__typename === "CustomerProfile") return fn.value === "shipping" ? g.shippingAddresses : g.billingAddresses
    }), pn = re(() => (Fe.value ? ? []).flatMap(({
        address: g
    }) => g.countryCode ? [g.countryCode] : [])), mn = Rt(pn), mt = Object.keys(mn.value).length > 0, vt = K(() => {
        const g = [],
            z = A.value;
        if (z ? .length && Object.keys(qe.value).length && g.push(...z.map(({
                address: D
            }, U) => {
                const W = D.firstName ? I.formatName(D.firstName, D.lastName, !0) : D.lastName,
                    q = qe.value[D.countryCode],
                    ue = `${Eo(D,q,["firstName","lastName"],!1,"short","short")}${W?` (${W})`:""}`,
                    ee = D.countryCode ? M.get(D.countryCode) : null;
                return {
                    value: U.toString(),
                    label: ue,
                    address: ee === "concatenated" ? Ae(D, Y).address : D
                }
            })), Fe.value && !_.value && mt) {
            const D = Fe.value.map(({
                address: U
            }, W) => {
                const q = U.countryCode ? M.get(U.countryCode) : null;
                return {
                    value: (W + g.length).toString(),
                    label: U.label,
                    address: q === "concatenated" ? Ae(U, Y).address : U
                }
            });
            D.length && g.push(...D)
        }
        return g
    }, [A.value, qe.value, Y, Fe.value, mt, M, I, _.value]), vn = vt.length > 0, hn = re(() => !!(A.value && _.value)), gn = Io({
        availableDeliveryAddresses: A.value,
        mustSelectProvidedAddress: _.value
    }), bn = b && (vn || ft.value ? .customerProfile && A.value) && !gn, Cn = re(() => A.value ? .length ? "available" : "saved"), We = Qt(ae.value, Y), ke = K(() => Er(Ue, p ? ? Ar), [Ue, p]), yn = K(() => ke.flatMap(({
        fields: g
    }) => g), [ke]), An = As(t, Y, ae, Ce, yn), {
        groupsBeforeCountry: _n,
        countryGroup: ht,
        groupsAfterCountry: Sn
    } = K(() => Ir(ke), [ke]), Nn = {
        countryCode: ae.value,
        availableCountries: Be,
        addressSettings: Y,
        suggestions: Pe,
        addressType: a,
        addressErrors: o
    };
    fs(t, Nn, ct, {
        shouldSkipAddressValidation: v
    });
    const gt = we(),
        En = jt(),
        In = Se().paymentMethods.value,
        Fn = Lo({
            shop: H,
            checkout: S,
            paymentMethods: In
        }),
        ye = !F.activeSession.value && (F.escalatedWallet.value === "APPLE_PAY" || F.escalatedWallet.value === "GOOGLE_PAY" || (F.escalatedWallet.value === "PAYPAL_EXPRESS" || F.escalatedWallet.value === "VENMO") && (a === "shipping" || Fn)),
        bt = O(g => {
            if (g.type === "error" && a != null && !F.activeSession.value || g.type === "success" && a === "billing" && ye) return g.violations
        }, [a, F.activeSession, ye]),
        Ct = O(({
            result: g,
            violations: z,
            addressErrors: D
        }) => {
            const U = "negotiationStage" in g ? g.negotiationStage : void 0;
            return a !== "shipping" || U !== "negotiation" || F.escalatedWallet.value !== "PAYPAL_EXPRESS" || !xe ? D : zt({
                addressErrors: D,
                violations: z
            })
        }, [a, F.escalatedWallet, xe]),
        $e = O(g => {
            const z = bt(g);
            if (!z) return;
            const D = We(a, z),
                U = Ct({
                    result: g,
                    violations: z,
                    addressErrors: D
                });
            return {
                addressErrors: D,
                filteredAddressErrors: U
            }
        }, [a, We, bt, Ct]),
        He = O(({
            errors: g,
            shouldReset: z = !1
        }) => {
            let D = !1;
            Lt(() => {
                ie(() => {
                    z && Te();
                    for (const [U, W] of g) o[U].value || (o[U].value = W), Y.isVisible(U, {
                        countryCode: ae.value
                    }) || (D = !0)
                })
            }), D && window.location.reload()
        }, [o, Y, ae, Te]);

    function kn(g) {
        const {
            addressErrors: z,
            filteredAddressErrors: D
        } = $e(g) ? ? {};
        D && ie(() => {
            for (const [W, q] of D) o[W].value || (o[W].value = q)
        });
        const U = new Set(z ? .keys());
        for (const W of Object.keys(o)) o[W].peek() && U.add(W);
        if (g.type === "invalid" || g.type === "error" || g.type === "success" && g.negotiationStage === "progression") {
            const W = t.peek();
            let q;
            if (g.type === "invalid" && (q = g.reasons.toString()), gt.value.defaultAttributes) {
                const ue = gt.value.defaultAttributes ? .uniqToken || "",
                    ee = ce ? .zones ? .find(le => le.code === W.zoneCode) ? .name || W.zoneCode;
                w.monorailEvent({
                    schemaId: "checkout_address_submission/5.2",
                    payload: {
                        checkoutToken: L.checkoutSessionIdentifier || "",
                        shopId: parseInt(Ee(B), 10),
                        uniqueToken: ue,
                        territory: ce ? .name || "",
                        context: a === "shipping" ? "Shipping address" : "Billing address",
                        address1: W.address1 || "",
                        address2: W.address2 || "",
                        city: W.city || "",
                        zone: ee || "",
                        zip: W.postalCode || "",
                        errorCode: q || "",
                        errorFields: [...U],
                        locale: Q,
                        matchingStrategy: En.value
                    }
                })
            }
        }
    }
    const On = O(g => {
        const {
            filteredAddressErrors: z
        } = $e(g) ? ? {};
        z && He({
            errors: z,
            shouldReset: (a === "billing" || a === "shipping") && ye
        })
    }, [$e, He, a, ye]);
    fe(() => {
        const g = N.value;
        Lt(() => On(g))
    });
    const yt = $(!1);
    fe(() => {
        const g = N.value;
        if (yt.current || a !== "shipping" || !ye || !xe || g.type !== "success" || g.violations.length === 0) return;
        yt.current = !0;
        const z = zt({
            addressErrors: We(a, g.violations),
            violations: g.violations
        });
        He({
            errors: z
        })
    }), eo(g => {
        kn(g)
    }), Nr(Ue, o, Pe);
    const [Oe, At] = pe(!1);
    te(function() {
        Vo("phone", x) || Y.isVisible("phone", {
            countryCode: oe.code
        }) || (t.fields.phone.value = "")
    }, [oe, t.fields.phone, Y, x]), to(t, () => {
        ie(() => {
            t.fields.postalCode.value = void 0, t.fields.zoneCode.value = void 0, t.fields.city.value = void 0, t.fields.address1.value = void 0, t.fields.address2.value = void 0, t.fields.coordinates.value = void 0
        }), Te(), ut()
    });
    const _t = $(!1),
        se = $();
    te(() => {
        if (Me || i) {
            const g = setTimeout(() => At(!0), yr);
            return () => clearTimeout(g)
        } else At(Me)
    }, [i, Me]);
    const Ln = t.fields.address2.value,
        [zn, Vn] = pe(!me(Ln || "")),
        Dn = $(null),
        St = $(null),
        Nt = $(new Set),
        Ge = {
            address: t,
            addressErrors: o,
            addressType: a,
            addressSettings: Y,
            addressRef: Dn,
            addressFormSettings: u,
            country: oe,
            availableCountries: Be,
            onAddressAutoComplete: ge,
            onBeforeCountryChange: c,
            addressAutocompleteSelection: ct,
            missingBuildingNumberInAddress2: zn,
            setMissingBuildingNumberInAddress2: Vn,
            resetAddressSuggestions: ut,
            resetAddressFieldErrors: Ie,
            disableAutocompleteWithAdditionalFields: Ce === null
        },
        Et = O(g => A.value ? .find(({
            address: z
        }) => {
            const U = (z.countryCode ? M.get(z.countryCode) : null) === "concatenated" ? Ae(z, Y).address : z;
            return Fo(U, g, ["phone"])
        }), [Y, A, M]),
        [It, wn] = pe(Et(t.peek()));
    pr({
        containerRef: St,
        address: t,
        addressType: a,
        autofillCapturedFieldsRef: Nt
    }), te(() => {
        _t.current || Ce === "concatenated" && (_t.current = !0, ie(() => {
            const g = Ae(t.value, Y);
            t.fields.address1.value = g.address.address1, g.prefilledLine2 && (t.fields.address2.value = g.address.address2, t.fields.line2.value = g.prefilledLine2)
        }))
    }, [Y, Ce]);
    const Rn = g => {
        const z = ae.value;
        if (!z) return;
        if (Ce === "concatenated") {
            const q = t.fields.address1.value,
                ue = t.fields.address2.value;
            ie(() => {
                if (g === "address1" && q) {
                    const ee = nn(z, q, !0),
                        le = ee ? .streetNumber,
                        Ke = Ae({ ...t.value,
                            countryCode: z,
                            address1: q
                        }, Y, ee),
                        Ft = Ke.address,
                        kt = Ke.prefilledLine2,
                        Pn = le && le !== "undefined";
                    if (Ke.shouldPreserveAddress1) {
                        se.current = ee ? .streetName ? {
                            address1: q,
                            countryCode: z,
                            streetName: q
                        } : void 0;
                        return
                    }
                    if (ee ? .streetName && Pn) {
                        se.current = void 0;
                        const Ot = Ft.address1 ? ? q;
                        Ot.includes("undefined") || (t.fields.address1.value = Ot), Ie("streetNumber"), Ie("streetName"), t.fields.streetNumber.value = le, t.fields.streetName.value = ee.streetName, kt && (t.fields.address2.value = Ft.address2, t.fields.line2.value = kt)
                    } else ee ? .streetName ? se.current = {
                        address1: q,
                        countryCode: z,
                        streetName: ee.streetName
                    } : se.current = void 0
                }
                if (g === "address2" && ue) {
                    const ee = t.fields.neighborhood;
                    if (!ee) return;
                    const le = on(z, ue);
                    ee.value = le ? .neighborhood
                }
            })
        }
        const D = () => {
                const q = se.current;
                if (q) {
                    if (q.countryCode !== ae.value || q.address1 !== t.fields.address1.value) {
                        se.current = void 0;
                        return
                    }
                    se.current = void 0, ie(() => {
                        t.fields.streetNumber.value = "", t.fields.streetName.value = q.streetName
                    })
                }
            },
            U = se.current,
            W = An();
        W ? W.then(q => {
            q === "applied" && se.current === U && (se.current = void 0)
        }).catch(() => {}) : D()
    };
    return m(oo, {
        target: a === "shipping" ? "cart.deliveryGroups[0].deliveryAddress" : "cart.paymentLines[0].billingAddress",
        children: m(no, {
            state: t.fields,
            errors: o,
            children: m("div", {
                id: n,
                ref: St,
                ...G,
                children: m(Uo, {
                    active: Oe,
                    children: [m(co, {
                        children: [bn ? m(Qs, {
                            address: t,
                            addressOptions: vt,
                            disabled: de,
                            disableNewAddressOption: hn.value,
                            callback: (g, z) => {
                                a === "shipping" && (wn(Et(g)), z || E({
                                    include: []
                                }))
                            },
                            addressOptionsType: Cn.value
                        }) : null, It ? m(Xs, {
                            address: It.address
                        }) : m(ve, {
                            children: [_n.map(g => m(Je, {
                                group: g,
                                additionalGroups: l,
                                ...Ge,
                                loading: Oe,
                                editDisabled: de
                            }, g.id)), ht && m(Je, {
                                group: ht,
                                additionalGroups: l,
                                ...Ge,
                                loading: Oe,
                                editDisabled: de
                            }, "country"), Sn.map(g => m(Je, {
                                group: g,
                                additionalGroups: l,
                                ...Ge,
                                loading: Oe,
                                editDisabled: de
                            }, g.id)), d]
                        })]
                    }), m(zs, {
                        address: t,
                        addressType: a,
                        country: oe,
                        availableCountries: Be,
                        onAutofillCaptured: g => {
                            g && (Nt.current.add(g), Ie(g)), g && ["address1", "address2", "streetName", "streetNumber", "line2", "district", "subdistrict", "city", "postalCode", "zoneCode"].includes(g) && Rn(g), h ? .()
                        }
                    })]
                })
            })
        })
    })
});

function Nr(e, n, t) {
    const r = K(() => e.flatMap(({
        fields: s
    }) => s), [e]);
    te(() => {
        for (const s of Object.keys(n)) r.includes(s) || (n[s].value = void 0, Object.keys(t).includes(s) && (t[s].value = void 0))
    }, [n, t, r])
}

function Je({
    addressRef: e,
    additionalGroups: n,
    autocompleteDisabled: t,
    group: r,
    ...s
}) {
    const {
        loading: a
    } = s, o = n ? .filter(({
        after: i
    }) => r.fields.includes(i)) ? ? [], l = Se().deliveryNext, d = ko(l.value, s.addressType), u = Se().buyerIdentity.value ? .purchasingCompany;
    return m(ve, {
        children: [m(Vt, { ...Fr(r.fields),
            children: r.fields.map(i => {
                switch (i) {
                    case "firstName":
                        return m(xs, {
                            required: d,
                            ...s
                        }, i);
                    case "lastName":
                        return m(Us, { ...s
                        }, i);
                    case "company":
                        return m(ws, { ...s,
                            hasPurchasingCompany: !!u
                        }, i);
                    case "address1":
                        return m(_s, { ...s,
                            addressRef: e,
                            autocompleteDisabled: t
                        }, i);
                    case "address2":
                        return m(Ns, { ...s
                        }, i);
                    case "postalCode":
                        return m(Zs, { ...s
                        }, i);
                    case "city":
                        return m(Ds, { ...s
                        }, i);
                    case "zoneCode":
                        return m(ar, { ...s
                        }, i);
                    case "countryCode":
                        return m(Bs, { ...s
                        }, i);
                    case "phone":
                        return m(Hs, { ...s
                        }, i);
                    case "streetName":
                        return m(tr, { ...s
                        }, i);
                    case "streetNumber":
                        return m(or, { ...s
                        }, i);
                    case "neighborhood":
                        return m($s, { ...s
                        }, i);
                    case "line2":
                        return m(Ws, { ...s
                        }, i);
                    case "district":
                        return m(qs, { ...s
                        }, i);
                    case "subdistrict":
                        return m(sr, { ...s
                        }, i);
                    default:
                        throw new _r(`Unexpected field: ${i}`)
                }
            })
        }), o.map(i => m(Vt, {
            children: i.render({
                loading: a
            })
        }, i.id))]
    })
}

function Er(e, n) {
    if (n.length === 0) return e;
    const t = new Set(n),
        r = e.map(s => ({ ...s,
            fields: s.fields.filter(a => t.has(a))
        })).filter(s => s.fields.length > 0);
    return r.length > 0 ? r : e
}

function Ir(e) {
    const n = e.findIndex(t => t.fields.includes("countryCode"));
    return n === -1 ? {
        groupsBeforeCountry: e,
        countryGroup: void 0,
        groupsAfterCountry: []
    } : {
        groupsBeforeCountry: e.slice(0, n),
        countryGroup: e[n],
        groupsAfterCountry: e.slice(n + 1)
    }
}

function Fr(e) {
    return e.length === 2 && e.includes("streetName") && e.includes("streetNumber") ? {
        gridTemplateColumns: e.indexOf("streetName") === 0 ? "minmax(0, 2fr) minmax(0, 1fr)" : "minmax(0, 1fr) minmax(0, 2fr)"
    } : {}
}

function kr() {
    const {
        shopPay: e,
        checkout: n
    } = k(), t = _e(so()), r = _e(sn());
    return re(() => {
        if (n.identity.current.value !== "shopPay" || !t.value || !e.session.isInstallmentsSelected.value) return r.value;
        const s = n.installments.supportedCountryOptions.value;
        return s.length > 0 ? s : r.value
    })
}
const Or = ["postalCode", "zoneCode", "city", "address1", "address2"];

function Gt(e) {
    return !Pt(e, ["countryCode"]) && Pt(e, Or)
}

function Lr(e) {
    const n = K(() => rn(), []),
        {
            negotiate: t
        } = Xt(),
        r = ot().isBlocked.value,
        s = $(),
        {
            billingAddress: a
        } = an(),
        o = a.value,
        {
            shop: {
                billingCountries: l
            },
            checkout: {
                configuration: d
            },
            checkout: {
                wallets: u
            }
        } = k(),
        i = Zt(o.countryCode, l, d.addressSettings.billingAddressSettings.value),
        {
            setAddressError: f,
            resetAddressErrors: c
        } = Ne(e),
        {
            resetAddressSuggestions: h
        } = Ve(n, e),
        b = $(!1),
        v = Qt(o.countryCode, d.addressSettings.billingAddressSettings.value),
        y = K(() => i(o), [o, i]),
        C = K(() => y.size === 0, [y]),
        p = en(() => {
            c(), h(), t({
                include: ["billingAddress"],
                silenceViolations: ["non-stock"],
                onComplete: A => {
                    if ((A.status === "success" || A.status === "error") && "violations" in A && !Gt(o)) {
                        const _ = v("billing_address", A.violations);
                        for (const [E, N] of _) f(E, N)
                    }
                }
            })
        }, ro);
    te(function() {
        C ? b.current = !0 : b.current = !1
    }, [C]), te(function() {
        if (!(!b.current || C))
            for (const [_, E] of y.entries()) f(_, E)
    }, [C, y, c, h, f]), te(function() {
        r || !C && !Gt(o) || u.activeSession.value || s.current && Oo(s.current, o, ["countryCode", "postalCode"]) || (s.current = o, p())
    }, [r, t, C, o, c, h, f, u.activeSession.value, p])
}

function zr(e, n) {
    return {
        updateCountryCodeForSPIBillingAddress: O(() => {
            const r = n ? .[0];
            if (!n || !r || !!n.find(o => o.value === e.value)) return;
            const a = r.value.toUpperCase();
            a && Xe(a) && (e.value = a)
        }, [n, e])
    }
}

function Gr({
    settings: e,
    additionalFieldGroups: n,
    address: t,
    addressErrors: r
}) {
    const {
        shopPay: s,
        checkout: a
    } = k(), {
        billingAddressErrors: o
    } = a.validation, l = r ? ? o;
    Lr(l);
    const d = kr(),
        {
            billingAddress: u
        } = an(),
        i = t || u,
        f = ao(a),
        c = Se().buyerIdentity.value ? .purchasingCompany,
        {
            updateCountryCodeForSPIBillingAddress: h
        } = zr(i.fields.countryCode, d.value),
        b = c ? a.configuration.addressSettings.billingAddressSettings.value : f;
    return Vr({
        identity: a.identity,
        isInstallmentsSelected: s.session.isInstallmentsSelected.value,
        installmentsSupported: a.installments.isSupported.value,
        updateCountryCodeForSPIBillingAddress: h
    }), m(Sr, {
        id: "billingAddressForm",
        addressType: "billing",
        addressErrors: l,
        address: i,
        countries: d.value,
        settings: e,
        additionalFieldGroups: n,
        addressSettings: b
    })
}

function Vr({
    identity: e,
    isInstallmentsSelected: n,
    installmentsSupported: t,
    updateCountryCodeForSPIBillingAddress: r
}) {
    const s = e.current.value === "shopPay";
    te(() => {
        s && t && n && r()
    }, [s, n, t, r])
}
export {
    Sr as A, Gr as B, ws as C, Uo as L, Ps as M, lt as a, Lr as b, kr as c, ps as s, zr as u
};