import {
    q as M,
    T as w,
    k as D,
    A as Z,
    h as G
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as ve,
    dh as Ee,
    b1 as x,
    di as Me,
    dj as ee,
    aa as _e,
    bX as De,
    dk as me,
    G as j,
    dl as he,
    dm as Oe
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    s as Ue
} from "./BillingAddressForm.aTSlVDrG.js";
import {
    u as Le
} from "./FormLayout.CMVyKzjL.js";
import {
    cn as ke,
    e0 as Ge,
    e1 as $e,
    v as te,
    cV as Ne
} from "./hydrate.B0xlt2dG.js";
import {
    A as Be
} from "./shared-permissions.BaDWlj5_.js";

function Ve(e) {
    const {
        observability: t
    } = ve(), {
        geolocation: s
    } = ke();
    return M(async (n, u, d) => {
        const o = await e(n, u, d);
        return t.histogram({
            name: "prediction_duration",
            value: o.duration.end - o.duration.start,
            attributes: {
                buyerCountry: s.country.code
            }
        }), o.data
    }, [e, t, s.country.code])
}

function we(e) {
    return new Promise((t, s) => {
        Ge(e.approvalScopes, Be.CustomerPersonalData) || s(new Ee(`Extension ${e.id} at target \`${e.extensionPoint.target}\` is missing required access to read customer personal data.`)), t()
    })
}

function xe(e, t, s) {
    switch (!0) {
        case e instanceof Ee:
            Ae(e, t);
            break;
        case e instanceof x:
            if (t.type === "persisted") Ae(e, t);
            else {
                const {
                    extensionPoint: {
                        target: n
                    }
                } = t;
                s(new x(`[${n}] ${e.message}`))
            }
            break;
        default:
            s(e)
    }
}

function Ae(e, t) {
    const s = `[${t.extensionPoint.target}] ${e.name}: ${e.message}`;
    console.error(s)
}

function je(e) {
    if (typeof e != "object") throw new x(`formattedAddress must be an object: received type ${typeof e}`);
    const t = Pe(e);
    if (t.length) throw new x(t.join("; "));
    return e
}

function Qe(e) {
    const t = [];
    if (!Array.isArray(e)) throw new x("An array of address suggestions must be defined");
    const s = e.slice(0, 5);
    for (const [n, {
            id: u,
            label: d,
            matchedSubstrings: o,
            formattedAddress: r
        }] of s.entries()) {
        if (q(d) || t.push(`label is required and must be a non-empty string: received ${typeof d} in suggestions[${n}]`), u && !q(u) && t.push(`id must be a non-empty string: received ${typeof u} in suggestions[${n}]`), o)
            if (Array.isArray(o))
                for (const [l, {
                        offset: a,
                        length: c
                    }] of o.entries()) typeof a != "number" && t.push(`offset must be a number: received type ${typeof a} in matchedSubstrings[${l}] for suggestions[${n}]`), typeof c != "number" && t.push(`length must be a number: received type ${typeof c} in matchedSubstrings[${l}] for suggestions[${n}]`);
            else t.push(`matchedSubstrings must be an array: received type ${typeof o} in suggestions[${n}]`);
        if (r)
            if (typeof r == "object") {
                const l = Pe(r);
                for (const a of l) t.push(`${a} for suggestions[${n}]`)
            } else t.push(`formattedAddress must be an object: received type ${typeof r} in suggestions[${n}]`);
        if (t.length) throw new x(t.join("; "))
    }
    return s
}

function Pe(e) {
    const t = [],
        {
            address1: s,
            address2: n,
            city: u,
            company: d,
            provinceCode: o,
            zip: r,
            countryCode: l,
            latitude: a,
            longitude: c
        } = e;
    return s && !q(s) && t.push(`address1 must be a non-empty string: received type ${typeof s} in formattedAddress`), n && !q(n) && t.push(`address2 must be a non-empty string: received type ${typeof n} in formattedAddress`), u && !q(u) && t.push(`city must be a non-empty string: received type ${typeof u} in formattedAddress`), d && !q(d) && t.push(`company must be a non-empty string: received type ${typeof d} in formattedAddress`), o && !q(o) && t.push(`provinceCode must be a non-empty string: received type ${typeof o} in formattedAddress`), r && !q(r) && t.push(`zip must be a non-empty string: received type ${typeof r} in formattedAddress`), l && !Me(l) && t.push(`countryCode must be a valid alpha-2 country code: received "${l}" in formattedAddress`), a && (typeof a != "number" ? t.push(`latitude must be a number: received type ${typeof a} in formattedAddress`) : (a < -90 || a > 90) && t.push(`latitude must be between -90 and 90: received ${a} in formattedAddress`)), c && (typeof c != "number" ? t.push(`longitude must be a number: received type ${typeof c} in formattedAddress`) : (c < -180 || c > 180) && t.push(`longitude must be between -180 and 180: received ${c} in formattedAddress`)), t
}

function q(e) {
    return typeof e == "string" || e instanceof String ? e.trim().length > 0 : !1
}

function Xe(e) {
    const t = $e(e),
        s = w(() => e[0], [e]),
        n = te("purchase.address-autocomplete.suggest"),
        u = w(() => n.length > 0, [n]);
    return M(d => s ? new Promise((o, r) => {
        We(u).then(() => we(s)).then(() => {
            const {
                internalId: l,
                ...a
            } = d;
            return t({
                target: {
                    selectedSuggestion: a
                }
            })
        }).then(l => {
            const a = l ? .formattedAddress || {};
            o({
                formattedAddress: je(a)
            })
        }).catch(l => {
            xe(l, s, r), o({
                formattedAddress: {}
            })
        })
    }) : Promise.resolve({
        formattedAddress: {}
    }), [t, s, u])
}

function We(e) {
    return new Promise((t, s) => {
        if (e) t();
        else {
            const n = "A purchase.address-autocomplete.suggest extension is required for a purchase.address-autocomplete.format-suggestion extension";
            s(new x(n))
        }
    })
}

function Ye(e) {
    return e.map((t, s) => {
        const {
            id: n,
            label: u,
            matchedSubstrings: d,
            formattedAddress: o
        } = t;
        return {
            internalId: `extension-suggestion-${s}`,
            matchedSubstrings: He(d),
            label: u,
            ...n && {
                id: n
            },
            ...o && {
                formattedAddress: o
            }
        }
    })
}

function He(e) {
    return e ? .length ? e.sort(Je) : [{
        offset: 0,
        length: 0
    }]
}

function Je(e, t) {
    return e.offset - t.offset
}

function Ke(e) {
    const t = $e(e),
        s = w(() => e[0], [e]);
    return M((n, u) => s ? new Promise((d, o) => {
        u.aborted && o(new ee(u.reason)), we(s).then(() => t({
            signal: u,
            target: { ...n
            }
        })).then(r => r ? .suggestions || []).then(r => Qe(r)).then(r => Ye(r)).then(r => d(r)).catch(r => {
            xe(r, s, o), d([])
        }), u.addEventListener("abort", () => {
            o(new ee(u.reason))
        })
    }) : Promise.resolve([]), [t, s])
}
const Ze = 300,
    ye = "address_clobber",
    be = 20;

function k(e) {
    try {
        return e()
    } catch {
        return
    }
}

function et({
    addressType: e,
    field: t,
    log: s,
    now: n = Date.now
}) {
    let u = 0,
        d = 0,
        o = 0,
        r = 0,
        l, a, c = !1,
        N = be,
        E = be;
    const C = (h, A) => s(ye, `${ye}: ${h}`, {
        kind: h,
        addressType: e ? ? "unknown",
        field: t ? ? "unknown",
        ...A
    });
    return {
        recordQuery(h) {
            h !== l && (l = h, r += 1)
        },
        resetPredictionContext() {
            a = void 0, c = !1
        },
        startPredictionRequest() {
            return [r, ++u, n()]
        },
        recordPredictionResponse([h, A, _], O) {
            const T = A < d,
                P = d;
            d = Math.max(d, A), a = h, c = T, !(!T || N === 0) && (N -= 1, C("prediction-race", {
                latestAppliedPredictionGeneration: P,
                predictionCount: O,
                queryChangedSinceRequest: h !== r,
                requestGeneration: A,
                responseAgeMs: Math.max(0, n() - _)
            }))
        },
        startAddressRequest() {
            const h = c || a !== void 0 && a !== r;
            return [r, ++o, h, n()]
        },
        recordAddressResponse([h, A, _, O]) {
            const T = A !== o,
                P = h !== r;
            !T && !P && !_ || E === 0 || (E -= 1, C("address-race", {
                latestRequestGeneration: o,
                newerSelectionStarted: T,
                queryChangedSinceSelection: P,
                requestGeneration: A,
                responseAgeMs: Math.max(0, n() - O),
                selectedFromStalePredictionResponse: _
            }))
        }
    }
}

function ut({
    addressType: e,
    countryCode: t,
    field: s,
    initialAddressQuery: n = "",
    provider: u = "autocomplete-service",
    allowAllCountries: d
}) {
    const {
        i18n: {
            locale: o
        },
        observability: r,
        userEvents: l,
        shop: a,
        source: c,
        checkout: {
            address: N
        }
    } = ve(), {
        id: E
    } = a, [C, h] = D(n), [A, _] = D(C), [O, T] = D(!1), [P, F] = D([]), [se, X] = D([]), W = Z(!1), [z, Re] = D(Se(c.sourceId)), {
        geolocation: y
    } = ke(), {
        search: Ie,
        fetchAddress: ne
    } = Le(), R = Ne(), {
        details: oe
    } = _e(t), B = De(), re = N.extendedAddressMode.get(t) !== null, ie = e === "pickup" ? "google" : void 0, ce = Z(void 0);
    ce.current ? ? = et({
        addressType: e,
        field: s,
        log: (p, g, $) => r.log(p, g, $)
    });
    const b = ce.current,
        ue = te("purchase.address-autocomplete.suggest"),
        V = w(() => ue.map(me), [ue]),
        qe = Ke(V),
        de = w(() => V.length > 0, [V]),
        ae = te("purchase.address-autocomplete.format-suggestion"),
        Y = w(() => ae.map(me), [ae]),
        le = Xe(Y),
        pe = w(() => Y.length > 0, [Y]),
        fe = M((p, g, $, m) => {
            const S = B.value.defaultAttributes ? .uniqToken || "";
            l.monorailEvent({
                schemaId: "checkout_autocomplete_suggestion/5.1",
                payload: {
                    shopId: parseInt(j(E), 10),
                    checkoutToken: c.checkoutSessionIdentifier || "",
                    uniqueToken: S,
                    provider: g[0] ? .completionService ? ? "",
                    context: p === "shipping" ? "Shipping address" : "Billing address",
                    territoryCode: t ? ? y.country.code,
                    locale: o,
                    query: $,
                    sessionToken: z,
                    requestProvider: m,
                    requestLatitude: y.coordinates ? .latitude,
                    requestLongitude: y.coordinates ? .longitude,
                    addressIds: g.map(v => v.addressId)
                }
            })
        }, [t, y.country.code, o, z, E, c.checkoutSessionIdentifier, B.value.defaultAttributes ? .uniqToken, l, y.coordinates]),
        H = w(() => de && s && Q(e), [s, e, de]),
        J = w(() => H || d || Ue(t || y.country.code), [d, t, y.country.code, H]);
    G(() => {
        const p = setTimeout(() => {
            R && _(C)
        }, Ze);
        return () => {
            clearTimeout(p)
        }
    }, [R, C]), G(() => {
        k(() => b.recordQuery(n)), h(n)
    }, [n, b]), G(() => {
        J || F([])
    }, [J]);
    const K = Z(t);
    G(() => {
        K.current !== t && K.current !== void 0 && (F([]), X([]), W.current = !1), K.current = t
    }, [t]);
    const Ce = Ve(Ie);
    G(() => {
        let p = !1;
        async function g(m) {
            try {
                if (!m || typeof m != "string" || m.length <= 1) {
                    k(() => b.resetPredictionContext()), F([]);
                    return
                }
                const S = k(() => b.startPredictionRequest()),
                    v = await Ce(m, {
                        locale: o,
                        countryCode: t ? ? y.country.code,
                        location: y.coordinates,
                        requestToken: z,
                        shopId: j(E),
                        sourceId: c.sourceId || "",
                        checkoutSessionIdentifier: c.checkoutSessionIdentifier || ""
                    }, ie);
                R.current && !p && (S && k(() => b.recordPredictionResponse(S, v.length)), F(v), !W.current && Q(e) && (fe(e, v, m, ie), W.current = !0))
            } catch (S) {
                console.warn(`Unable to fetch predictions: ${S}`), R.current && !p && F([])
            }
        }
        async function $({
            query: m,
            field: S,
            signal: v
        }) {
            function U(i) {
                return i.map(({
                    label: f,
                    matchedSubstrings: I,
                    internalId: ze
                }) => ({
                    addressId: ze,
                    completionService: "AUTOCOMPLETE_EXTENSION",
                    description: f,
                    matchedSubstrings: I
                }))
            }

            function L(i) {
                switch (i) {
                    case "address1":
                    case "streetName":
                        return "address1";
                    case "postalCode":
                        return "zip";
                    default:
                        {
                            const f = i;
                            throw new he(`Unknown Address Autocomplete field: ${f}`)
                        }
                }
            }
            if (!m || typeof m != "string" || m.length <= 1) {
                k(() => b.resetPredictionContext()), X([]), F([]);
                return
            }
            try {
                const i = k(() => b.startPredictionRequest()),
                    f = await qe({
                        value: m,
                        field: L(S),
                        selectedCountryCode: t
                    }, v);
                R.current && !p && (i && k(() => b.recordPredictionResponse(i, f.length)), X(f), F(U(f)))
            } catch (i) {
                if (i instanceof he && r.error(i), V[0].type === "local")
                    if (i instanceof ee) console.warn("AddressAutocompleteSignalAbortedError: ", i.message);
                    else throw i
            }
        }
        if (J && O)
            if (H && Q(e)) {
                const m = new AbortController;
                return $({
                    query: A,
                    field: s,
                    signal: m.signal
                }), () => {
                    p = !0, m.abort("The query was debounced")
                }
            } else g(A);
        return () => {
            p = !0
        }
    }, [t, A, o, z, fe]);
    const ge = M((p, g, $, m, S) => {
            const v = oe ? .zones.find(i => i.code === g.zoneCode) ? .name || void 0,
                U = B.value.defaultAttributes ? .uniqToken,
                L = $.findIndex(i => i.addressId === p) + 1;
            l.monorailEvent({
                schemaId: "checkout_autocomplete_selection/6.2",
                payload: {
                    shopId: parseInt(j(E), 10),
                    checkoutToken: c.checkoutSessionIdentifier || "",
                    uniqueToken: U,
                    address1: g.address1,
                    address2: g.address2,
                    city: g.city,
                    zone: v,
                    latitude: g.coordinates ? .latitude,
                    longitude: g.coordinates ? .longitude,
                    zip: g.postalCode,
                    territoryCode: t ? ? y.country.code,
                    position: L,
                    query: A,
                    context: m === "shipping" ? "Shipping address" : "Billing address",
                    locale: o,
                    sessionToken: S,
                    requestLatitude: y.coordinates ? .latitude,
                    requestLongitude: y.coordinates ? .longitude
                }
            })
        }, [oe, B.value.defaultAttributes ? .uniqToken, E, c.checkoutSessionIdentifier, t, y.country.code, y.coordinates, A, o, l]),
        Te = M(async (p, g, $, m) => {
            const S = k(() => b.startAddressRequest());

            function v(i) {
                const f = se.find(I => I.internalId === i);
                return f || r.error(new Oe("Could not find selected suggestion in extension suggestions.")), f
            }
            async function U(i) {
                if (pe && i) return (await le(i)).formattedAddress;
                const f = new x("The address fields could not be auto-populated. Please provide a `formattedAddress` for the selected suggestion or implement the `purchase.address-autocomplete.format-suggestion` extension.");
                console.error(`${f.name}: ${f.message}`)
            }
            async function L(i) {
                const f = v(i),
                    I = f ? .formattedAddress || await U(f);
                return tt(I)
            }
            try {
                let i, f;
                if (g === "AUTOCOMPLETE_EXTENSION") i = await L(p);
                else {
                    const I = z;
                    i = await ne(p, {
                        locale: o,
                        requestToken: z,
                        completionService: g,
                        shopId: j(E),
                        sourceId: c.sourceId || "",
                        checkoutSessionIdentifier: c.checkoutSessionIdentifier || "",
                        extendedFields: !$ && re
                    }), f = I, R.current && (Re(Se(c.sourceId)), Q(e) && ge(p, i, P, e, I))
                }
                R.current && (S && k(() => b.recordAddressResponse(S)), m(i, f))
            } catch (i) {
                if (i instanceof x) throw i;
                console.warn(`Unable to select prediction: ${i}`)
            }
        }, [o, z, E, c.sourceId, c.checkoutSessionIdentifier, ne, R, e, ge, P, pe, se, le, r, re, b]),
        Fe = M((p, g = !0) => {
            k(() => b.recordQuery(p)), h(p), T(g)
        }, [b]);
    return {
        value: C,
        debouncedValue: A,
        setValue: Fe,
        predictions: P,
        selectPrediction: Te,
        provider: u
    }
}

function Se(e) {
    return `${e}-${Date.now()}`
}

function tt(e) {
    return {
        address1: e ? .address1,
        address2: e ? .address2,
        city: e ? .city,
        company: e ? .company,
        zoneCode: e ? .provinceCode,
        postalCode: e ? .zip,
        coordinates: e ? .latitude && e ? .longitude ? {
            latitude: e.latitude,
            longitude: e.longitude
        } : void 0
    }
}

function Q(e) {
    return e === "billing" || e === "shipping"
}
export {
    ut as u
};