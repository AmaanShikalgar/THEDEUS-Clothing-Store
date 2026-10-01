import {
    u as e,
    S as H,
    q as D,
    e as ne,
    k as j,
    h as b,
    T as F,
    g as xe,
    W as Ae
} from "./esnext-vendor.BDPAaZdq.js";
import {
    b as te,
    P as v,
    L as ke,
    cl as Fe,
    bk as ie,
    cm as He,
    bY as Ue,
    h as ze,
    cn as we,
    v as Z,
    co as Ve,
    cp as Be,
    cq as Ge,
    cr as qe,
    a4 as Ye,
    cs as We,
    bn as $e,
    c as oe,
    F as Je,
    B as x,
    S as Qe,
    ct as Xe,
    U as Ke,
    cu as je
} from "./hydrate.B0xlt2dG.js";
import {
    b as Ze
} from "./Choice.BIzIW4rp.js";
import {
    T as en
} from "./TextArea.C0R8_jwI.js";
import {
    F as nn
} from "./FormLayout.CMVyKzjL.js";
import {
    C as tn
} from "./EmptyState.b83C9ddY.js";
import {
    S as on
} from "./localization-index.Bo8bPuxq.js";
import {
    u as sn,
    S as rn,
    E as an,
    d as ln
} from "./EstimatedDeliveryContent.C1e3pn_u.js";
import {
    O as C,
    cl as se,
    bg as cn,
    bh as dn,
    cm as un,
    bi as re,
    Q as pn,
    cn as hn,
    G as vn,
    _ as gn
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    P as mn
} from "./PhoneField.ykPh8SPx.js";

function yn() {
    const {
        i18n: t,
        checkout: o
    } = C();
    return o.configuration.layout.isOnePage.value ? null : e(H, {
        children: [e(te, {
            blockSize: "small-400"
        }), e(v, {
            children: t.translate("shipping.shipping_line_delivery_instructions")
        })]
    })
}

function En({
    displayAddInstructionsButton: t,
    onPress: o
}) {
    const {
        i18n: i,
        checkout: r
    } = C();
    return r.configuration.layout.isOnePage.value ? t ? e(ke, {
        onClick: o,
        children: i.translate("shipping.add_delivery_instructions")
    }) : null : e(v, {
        children: i.translate("shipping.shipping_line_delivery_phone")
    })
}
const _n = new Set(["DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED", "DELIVERY_OPTIONS_PHONE_NUMBER_DOES_NOT_MATCH_EXPECTED_PATTERN"]),
    fn = new Set(["DELIVERY_OPTIONS_INSTRUCTIONS_INVALID"]),
    ae = (t, o) => {
        if (t.type === "error") {
            for (const i of t.violations)
                if (!(i.__typename !== "UnprocessableTermViolation" || !o.has(i.code))) return i.localizedMessage ? ? i.nonLocalizedMessage
        }
    };

function Sn(t, o = "ONE_TIME_PURCHASE", i) {
    const r = se(),
        s = Fe(o, i),
        {
            i18n: d,
            checkout: {
                wallets: c
            }
        } = C();
    ie(D(u => {
        const p = ae(u, _n);
        p && (r.value = p)
    }, [r]));
    const O = ne(void 0),
        g = c.activeSession.value ? O : r;
    return cn(s, g, u => {
        if (c.activeSession.value) return;
        const p = un(u);
        if (!(!t || !t.phoneRequired) && !p) return d.translate("field_errors.shipping_line_phone_invalid")
    }, dn.InvalidDeliveryMethodPhoneNumber), {
        value: s,
        error: r,
        validated: re(s, r, void 0)
    }
}

function Pn(t = "ONE_TIME_PURCHASE", o) {
    const i = se(),
        r = He(t, o);
    return ie(D(s => {
        const d = ae(s, fn);
        d && (i.value = d)
    }, [i])), {
        value: r,
        error: i,
        validated: re(r, i, void 0)
    }
}
const Dn = "sqcDF",
    Cn = "z2IIo",
    On = "qi1py",
    Tn = "pcf8k",
    A = {
        OnTop: Dn,
        LoadingOption: Cn,
        LoadingOptionBorderNone: On,
        LoadingOptionBorderFull: Tn
    },
    Ln = 255,
    In = {
        textSize: "small",
        freeTextLetterCase: "uppercase"
    },
    Nn = {};

function Vn({
    id: t,
    type: o = "ONE_TIME_PURCHASE",
    methods: i,
    loadingAdditionalShippingRates: r = !1,
    isInSplitCartModal: s = !1
}) {
    const d = Ue(),
        {
            i18n: c,
            checkout: O
        } = C(),
        g = "base",
        {
            negotiate: u
        } = ze(),
        {
            geolocation: p
        } = we(),
        [le, ce] = j(p.country.code),
        {
            shippingAddress: T
        } = pn(),
        U = hn(),
        {
            deliveryExpectationLines: z,
            deliveryExpectationLinesLoading: de,
            status: ue
        } = sn(),
        w = Z("Checkout::ShippingMethodDetails::RenderAfter"),
        L = Z("Checkout::ShippingMethodDetails::RenderExpanded"),
        [pe] = Ve(o, t),
        he = Be(),
        [h, f] = Ge({
            type: o,
            id: t,
            deliveryMethodType: he.value ? "SHIPPING" : void 0
        }),
        m = ne(),
        {
            setInverseGroupDeliveryMethodHandle: V,
            getInverseGroupDeliveryMethodHandle: B
        } = qe(i, o),
        I = i.find(n => n.handle === h),
        {
            validated: y,
            value: G,
            error: q
        } = Sn(I, o, t),
        {
            validated: S,
            value: Y,
            error: W
        } = Pn(o, t),
        ve = O.configuration.layout.isOnePage.value,
        [$, ge] = j(!ve || S ? .value !== void 0);
    let E = i;
    pe.includes("PICKUP_POINT") && (E = E.filter(n => n.pickupLocation ? .type === "PickupPointLocation" && I ? .pickupLocation ? .type === "PickupPointLocation" && n.pickupLocation ? .handle === I ? .pickupLocation ? .handle));
    const me = E.map(n => !!n ? .deliveryPredictionEligible);
    b(() => {
        const {
            phone: n
        } = T.fields, a = n.value;
        !y.value && a && y.onChange(a)
    }, []), b(() => {
        const {
            countryCode: n
        } = T.fields, a = n.value;
        a && ce(a)
    }, [T]);
    const ye = F(() => ({
            state: {
                phone: G,
                instructions: Y
            },
            errors: {
                phone: q,
                instructions: W
            }
        }), [G, q, Y, W]),
        J = D(() => {
            y.clearError(), S.clearError()
        }, [y, S]),
        {
            optionList: {
                border: Ee = "full"
            }
        } = Ye(),
        _e = D(([n = ""]) => {
            if (J(), f(n), U.value && t == null) {
                const a = B(n);
                V(a)
            }
            if (s) {
                m.value = n;
                return
            }
            u({
                include: ["deliveryNext"]
            }), d("shippingMethodSelected", {
                timestamp: new Date
            })
        }, [m, J, f, U, t, s, u, B, V, d]);
    b(() => {
        if (!s) {
            m.value = void 0;
            return
        }
        const n = m.value;
        !n || n === h || !i.some(a => a.handle === n) || f(n)
    }, [s, i, h, f, m]);
    const fe = (n, a, l) => {
            const N = a || l,
                P = L.length > 0 && !s;
            return N ? e(ee, {
                children: [e(nn, {
                    children: [a && e(x, {
                        children: [e(mn, {
                            label: c.translate("shipping.shipping_line_delivery_phone_label"),
                            countryCode: le,
                            prefillCountryCode: !0,
                            ...y
                        }), e(te, {
                            blockSize: "small-400"
                        }), e(En, {
                            displayAddInstructionsButton: l && !$,
                            onPress: () => ge(!0)
                        })]
                    }), l && $ && e(x, {
                        children: [e(en, {
                            autoFocus: !0,
                            maxLength: Ln,
                            label: c.translate("shipping.optional_shipping_line_delivery_instructions_label"),
                            rows: 1,
                            ...S
                        }), e(yn, {})]
                    })]
                }), P && e(k, {
                    customizations: L,
                    isInModal: !1,
                    handle: n
                })]
            }) : P ? e(k, {
                customizations: L,
                handle: n,
                isInModal: !1,
                render: M => e(ee, {
                    children: M
                })
            }) : null
        },
        Q = `${t?`_${vn(t)}`:""}`,
        Se = o === "ONE_TIME_PURCHASE" ? `shipping_methods${Q}` : `${o.toLowerCase()}_shipping_methods${Q}`,
        Pe = w.length > 0,
        De = E.length === 1,
        Ce = F(() => h ? [h] : [], [h]),
        Oe = s ? In : Nn;
    return e(Xe, { ...ye,
        children: e("div", {
            className: A.OnTop,
            children: e(tn, {
                name: Se,
                title: c.translate("general.choose_shipping_method"),
                titleHidden: !0,
                values: Ce,
                onChange: _e,
                hideRadioControl: De,
                children: [E.map((n, a) => {
                    const l = me[a] || n.brandedPromise ? .handle === gn.BuyWithPrime,
                        {
                            showEstimatedDeliveryLabel: N
                        } = We(n, !!l, z, de, ue),
                        {
                            acceptsInstructions: P,
                            cost: M,
                            costAfterDiscounts: Te,
                            description: X,
                            estimatedTimeInTransit: Le,
                            handle: _,
                            hideDiscountedTotalOnShippingSelector: Ie,
                            included: Ne,
                            pickupLocation: K,
                            phoneRequired: Me
                        } = n,
                        Re = z ? .find(R => R.deliveryStrategyHandle === _),
                        be = $e({
                            deliveryMethod: n,
                            localDelivery: n.methodType === "LOCAL" ? c.translate("shipping.local_delivery") : void 0
                        });
                    return e(Ze, {
                        value: _,
                        renderSelectedContentWhenCollapsed: !0,
                        selectedContent: fe(_, Me, P) ? ? void 0,
                        details: e(H, {
                            children: [l && e(an, {
                                deliveryMethod: n,
                                deliveryExpectationLine: Re,
                                paragraphColor: g
                            }), !l && N && e(ln, {
                                timeInTransit: Le,
                                minDeliveryDateTime: n ? .minDeliveryDateTime,
                                maxDeliveryDateTime: n ? .maxDeliveryDateTime,
                                title: n ? .deliveryPromisePresentmentTitle ? .short,
                                paragraphColor: g
                            }), X && !l && e(v, {
                                color: g,
                                children: e("bdi", {
                                    children: X
                                })
                            }), K ? .type === "PickupInStoreLocation" && e(Mn, {
                                pickupLocation: K
                            })]
                        }),
                        secondaryContent: e(rn, {
                            cost: M,
                            costAfterDiscounts: Te,
                            included: Ne,
                            styleOverrides: Oe,
                            preDiscountCost: Ie
                        }),
                        tertiaryContent: Pe && e(k, {
                            customizations: w,
                            handle: _,
                            isInModal: s,
                            render: R => e(oe, {
                                padding: "small-100 none none none",
                                gap: "small-100",
                                children: R
                            })
                        }),
                        children: e(on, {
                            methodTitle: be
                        })
                    }, _)
                }), r ? e("div", {
                    className: xe([A.LoadingOption, A[Ae("LoadingOptionBorder", Ee)]]),
                    children: e(Je, {
                        gridAutoFlow: "column",
                        gridTemplateColumns: "minmax(auto, max-content) minmax(0, 1fr)",
                        gridTemplateRows: "minmax(0, 1fr)",
                        gap: "base",
                        alignItems: "center",
                        alignContent: "center",
                        children: [e(x, {
                            children: e(Qe, {})
                        }), e(v, {
                            color: "subdued",
                            type: "small",
                            children: c.translate("shipping.loading_progressive_rates")
                        })]
                    })
                }) : null]
            })
        })
    })
}

function k({
    customizations: t,
    handle: o,
    isInModal: i,
    render: r
}) {
    const s = F(() => ({
        handle: o,
        isInModal: i
    }), [o, i]);
    return e(Ke, {
        customizations: t,
        options: s,
        render: r
    })
}

function Mn({
    pickupLocation: t
}) {
    const o = je(t.address, {
        hiddenFields: ["firstName", "lastName", "phone", "company", "countryCode", "postalCode"]
    });
    return e(H, {
        children: [e(v, {
            type: "small",
            children: o
        }), e(v, {
            type: "small",
            children: t.instructions
        })]
    })
}

function ee({
    children: t
}) {
    return e(oe, {
        gap: "large-200",
        children: t
    })
}
export {
    Vn as S
};