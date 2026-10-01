import {
    k as me,
    A as fe,
    T as L,
    h as ne,
    n as Ce,
    u as n,
    S as D,
    x as Ve,
    e as Fe,
    _ as we,
    q as V,
    Q as is,
    f as ze,
    i as as,
    o as $e
} from "./esnext-vendor.BDPAaZdq.js";
import {
    e4 as rs,
    br as os,
    ea as ls,
    bP as ds,
    o as Y,
    fl as qe,
    b as W,
    _ as cs,
    fc as Ie,
    l as Te,
    eM as us,
    c as Z,
    P as te,
    B as pe,
    F as Me,
    fm as ms,
    W as Ge,
    E as ye,
    K as fs,
    cV as ps,
    fn as gs,
    O as hs,
    a4 as bs,
    I as vs,
    fo as As,
    bH as _s,
    d0 as Ss
} from "./hydrate.B0xlt2dG.js";
import {
    b as Cs
} from "./Choice.BIzIW4rp.js";
import {
    O as x,
    aS as Pe,
    ba as Be,
    eb as Is,
    eS as Ms,
    cC as ys,
    ef as Ps,
    bW as Es,
    d7 as ke,
    eT as Ns,
    du as Le,
    eU as Fs,
    d as ws,
    k as He,
    eV as Ee,
    Q as ge,
    eW as Bs,
    cm as Ne,
    bi as Ue,
    bg as We,
    eX as Ke,
    a6 as ks,
    eY as Ls,
    eZ as Ds
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    O as je
} from "./components-RedirectionNotice.module.BGJWZ6-9.js";
import {
    C as xs
} from "./EmptyState.b83C9ddY.js";
import {
    O as Je,
    u as Qe
} from "./hooks-useShopPayProgressIntercepts.Sxhi7oHx.js";
import {
    M as Os,
    a as Xe,
    u as Ye
} from "./useAddressMutationsWithNegotiation.BfzEjUy6.js";
import {
    C as Rs
} from "./ChangeCompanyLocationLink.Ci5U9F_D.js";
import {
    C as Vs
} from "./Checkbox.CiixBh9Z.js";
import {
    u as zs,
    A as $s
} from "./BillingAddressForm.aTSlVDrG.js";
import {
    P as qs
} from "./PhoneField.ykPh8SPx.js";
import {
    u as Ze
} from "./AddressPresenter.B0qw2vWQ.js";

function Ts({
    i18n: e,
    paymentMethodMustSupportInterestBearingLoans: s,
    supportedCountryOptions: t
}) {
    const a = t.map(i => i.label).join(", ");
    return s ? a ? e.translate("installments.installments_debit_cards_supported_countries", {
        countries: a
    }) : e.translate("installments.installments_valid_debit_cards_fallback") : a ? e.translate("installments.installments_cards_supported_countries", {
        countries: a
    }) : e.translate("installments.installments_valid_cards_fallback")
}

function Gs({
    id: e,
    editableAddress: s,
    addressType: t,
    countriesOverride: a,
    saveText: i,
    cancelText: r,
    onSave: o,
    onSuccess: d,
    onCancel: m,
    showSavedAddressSelector: f = !0,
    addressErrorsSignal: b,
    combineViolationAndValidationErrors: v = !0,
    addressSettings: u,
    showDefaultAddressCheckbox: h = !1,
    onAddressAutoComplete: l
}) {
    const [A, g] = me(!1), {
        i18n: S,
        checkout: I,
        shopPay: p
    } = x(), {
        createAddressParts: c
    } = Pe(), _ = c.addressModalState.value, M = Be("shippingAddress").value, z = Be("billingAddress").value, O = t === "shipping", y = rs(), N = Is(), w = Ms(), T = a ? ? (O ? N : w), ee = t === "billing", B = y !== null && p.session.isInstallmentsSelected.value && I.installments.supportedCountryOptions.value.length > 0 ? I.installments.supportedCountryOptions.value : w, $ = ee && y !== null && p.session.isInstallmentsSelected.value, Q = $ ? B : T, {
        updateCountryCodeForSPIBillingAddress: K
    } = zs(s.fields.countryCode, Q), G = ee ? I.configuration.addressSettings.billingAddressSettings.value : I.configuration.addressSettings.nonBillingAddressSettings.value, ie = y ? Ts({
        i18n: S,
        paymentMethodMustSupportInterestBearingLoans: I.installments.paymentMethodMustSupportInterestBearingLoans.value,
        supportedCountryOptions: I.installments.supportedCountryOptions.value
    }) : "", q = s.value, P = fe({ ...q
    }), k = s.fields ? .countryCode.value, j = u ? ? G, H = os(k, Q, j), oe = ls(k), he = L(() => ys(), []), J = b ? ? he, be = O ? Ps : Es, {
        violations: le,
        clearViolations: de
    } = ds(be);
    ne(() => {
        (t === "shipping" && M || t === "billing" && z) && de()
    }, [de, t, M, z]), ne(() => {
        if (_.status !== "editing") return;
        const E = oe(t, Array.from(le)),
            re = Array.from(E).filter(([F]) => q[F] === P.current ? .[F]);
        if (re.length === 0) return;
        const se = H(q, t),
            C = v ? re.concat(Array.from(se)) : Array.from(se);
        Ce(() => {
            for (const [F, U] of C) J[F].value = U
        })
    }, [J, _.status, t, v, q, H, le, oe]);
    const ve = fe(() => {
        for (const E of Object.keys(J)) J[E].value = void 0
    });
    ne(() => {
        const E = ve.current;
        return () => E()
    }, []), ne(() => {
        $ && K()
    }, [$, K]);
    const ae = I.configuration.defaultPhoneNumber.value;
    ne(() => {
        if (!ae) return;
        j ? .isRequired("phone", {
            useMerchantSettings: !0
        }) && !s.fields.phone.value && (s.fields.phone.value = ae)
    }, [ae, j, s.fields.phone]);
    const Ae = async () => {
            if (A) return;
            g(!0);
            const E = H(q, t);
            if (E.size) {
                Ce(() => {
                    for (const [se, C] of E) J[se].value = C
                }), g(!1);
                return
            }
            await o ? .(q) && d ? .(), g(!1)
        },
        _e = n(D, {
            children: [h ? n(Vs, {
                id: `${e??`${t}AddressForm`}_default_address`,
                name: "default_address",
                checked: _.setAsDefault === "default" || _.setAsDefault === "enabled",
                disabled: _.setAsDefault === "default",
                onChange: E => {
                    c.addressModalState.value = { ..._,
                        setAsDefault: E ? "enabled" : "disabled"
                    }
                },
                label: _.setAsDefault === "default" ? n(Y, {
                    color: "subdued",
                    children: S.translate("address_management.address_form.default_address")
                }) : S.translate("address_management.address_form.default_address")
            }) : null, n(qe, {
                submitText: i ? ? S.translate("address_management.address_form.save"),
                cancelText: r ? ? S.translate("address_management.address_form.cancel"),
                loading: A,
                handleCancel: m
            })]
        });
    return n(cs, {
        onSubmit: Ae,
        children: [$ ? n(D, {
            children: [n(Y, {
                children: ie
            }), n(W, {
                blockSize: "base"
            })]
        }) : null, n($s, {
            id: e ? ? `${t}AddressForm`,
            address: s,
            addressType: t,
            addressErrors: J,
            showSavedAddressSelector: f,
            addressSettings: j,
            onAddressAutoComplete: l,
            countries: Q,
            children: _e
        })]
    })
}
const Hs = "CctLS",
    Us = {
        SmallBadge: Hs
    };

function Ws({
    explicitlyPreferred: e,
    onSetDefault: s,
    showBadge: t = !0,
    badgeSize: a = "base"
}) {
    const {
        i18n: i
    } = x(), r = e && t, o = !e && s;
    return n(D, {
        children: [r && n(D, {
            children: [n(W, {
                blockSize: "small-400"
            }), a === "small" ? n("span", {
                className: Us.SmallBadge,
                children: n(Ie, {
                    size: "small",
                    children: i.translate("payment.default")
                })
            }) : n(Ie, {
                size: a,
                children: i.translate("payment.default")
            })]
        }), o && n(Te, {
            inlineSize: "fill",
            variant: "plain",
            onClick: s,
            accessibilityLabel: i.translate("shipping.address_default"),
            inlineAlignment: "start",
            textDecoration: "none",
            children: i.translate("shipping.address_default")
        })]
    })
}
const Ks = "bAwqP",
    js = "_2x9LQ",
    Js = "Oic4c",
    Se = {
        Content: Ks,
        InlineDefaultBadge: js,
        InlineBadgeProbe: Js
    };

function Qs({
    address: e,
    actions: s,
    nameLinePosition: t,
    addressDisplayName: a,
    explicitlyPreferred: i,
    onSetDefault: r,
    isImmutableAddress: o,
    isSelected: d,
    showsMoreOptionsWhenSelected: m,
    showPhone: f
}) {
    const {
        i18n: b
    } = x(), {
        nameLine: v,
        primary: u,
        secondary: h
    } = us({
        address: e,
        nameLinePosition: t,
        addressDisplayName: a,
        showPhone: f
    }), l = Ve(je), A = l && !!i && !o, {
        nameRef: g,
        probeRef: S,
        showProbe: I,
        inlineBadgeFits: p
    } = Zs({
        enabled: A,
        primary: u,
        isSelected: d,
        showsMoreOptionsWhenSelected: m
    }), c = n(D, {
        children: [n(W, {
            display: "inline",
            inlineSize: "small-200"
        }), n("span", {
            className: Se.InlineDefaultBadge,
            children: n(Ie, {
                size: "small",
                children: b.translate("payment.default")
            })
        })]
    });
    return n(Me, {
        gridAutoFlow: "column",
        gridTemplateColumns: "minmax(0, 1fr) minmax(auto, max-content)",
        gridTemplateRows: "minmax(0, 1fr)",
        gap: "base",
        alignItems: "start",
        alignContent: "start",
        children: [n(Z, {
            alignItems: "start",
            children: n("div", {
                className: Se.Content,
                children: [t === "block" && n(te, {
                    children: v
                }), A ? n(pe, {
                    children: [n("span", {
                        ref: g,
                        children: n(Y, {
                            type: "strong",
                            children: u
                        })
                    }), I.value && n("span", {
                        "aria-hidden": !0,
                        className: Se.InlineBadgeProbe,
                        ref: S,
                        children: c
                    }), p.value && c]
                }) : n(te, {
                    children: n(Y, {
                        type: "strong",
                        children: u
                    })
                }), n(te, {
                    children: h
                }), !o && n(Ws, {
                    explicitlyPreferred: i,
                    onSetDefault: d ? r : void 0,
                    showBadge: !l || !p.value,
                    badgeSize: l ? "small" : "base"
                })]
            })
        }), s]
    })
}
const Xs = 24;

function Ys(e) {
    const s = parseFloat(getComputedStyle(document.documentElement).fontSize),
        t = De(e.getPropertyValue(xe(ke.fontSize.base)), s) * ms,
        a = De(e.getPropertyValue(xe(ke.spacing.small100)), s),
        i = t + a;
    return Number.isFinite(i) ? i : Xs
}

function De(e, s) {
    const t = e.trim();
    return t.endsWith("rem") ? Ns(t, s) : t.endsWith("px") ? parseFloat(t) : NaN
}

function xe(e) {
    return e.replace(/^var\(|\)$/g, "")
}

function Zs({
    enabled: e,
    primary: s,
    isSelected: t,
    showsMoreOptionsWhenSelected: a
}) {
    const i = fe(null),
        r = fe(null),
        o = Fe(!1),
        d = Fe(!1);
    return we(() => {
        d.value = e
    }, [e, d]), we(() => {
        const m = i.current,
            f = r.current;
        if (!e || !m || !f) return;
        const b = () => {
            const h = m.closest("label") ? .parentElement,
                l = m.getClientRects();
            if (!h || l.length !== 1) {
                o.value = !1;
                return
            }
            const [A] = l, g = h.getBoundingClientRect(), S = getComputedStyle(h), p = S.direction === "rtl" ? A.left - g.left : g.right - A.right, c = f.getBoundingClientRect().width, _ = a && !t ? Ys(S) : 0;
            o.value = c > 0 && p - _ >= c
        };
        let v = !1;
        return b(), document.fonts ? .ready.then(() => {
            v || b()
        }).catch(() => {}), window.addEventListener("resize", b), () => {
            v = !0, window.removeEventListener("resize", b)
        }
    }, [e, d.value, s, t, a, o]), {
        nameRef: i,
        probeRef: r,
        showProbe: d,
        inlineBadgeFits: o
    }
}

function en({
    state: e,
    description: s,
    error: t,
    onConfirm: a,
    onCancel: i
}) {
    const {
        i18n: r
    } = x();
    return n(D, {
        children: [t ? n(Z, {
            gap: "base",
            children: n(Ge, {
                tone: "critical",
                errorType: ye.PaymentError,
                children: t
            })
        }) : null, n(te, {
            children: s
        }), n(W, {
            blockSize: "base"
        }), n(qe, {
            submitText: r.translate("shipping.delete"),
            cancelText: r.translate("address_management.address_form.cancel"),
            loading: e === "deleting",
            handleSubmit: a,
            handleCancel: i,
            submitButtonAppearance: "critical"
        })]
    })
}

function sn({
    state: e,
    title: s,
    description: t,
    error: a,
    onConfirm: i,
    onCancel: r
}) {
    return n(Je, {
        open: e === "active" || e === "deleting",
        heading: s,
        onHide: r,
        children: n(en, {
            state: e,
            description: t,
            error: a,
            onConfirm: i,
            onCancel: r
        })
    })
}

function nn(e, s) {
    return L(() => {
        const t = new Map(e.map(o => [o.id, o])),
            a = new Set(s.flatMap(({
                addressIds: o
            }) => [...o])),
            i = e.filter(({
                id: o
            }) => !a.has(o)),
            r = s.map(({
                title: o,
                addressIds: d
            }) => ({
                title: o,
                addresses: Array.from(d).flatMap(m => {
                    const f = t.get(m);
                    return f ? [f] : []
                })
            }));
        return {
            ungroupedImmutableAddresses: i,
            groupedImmutableAddresses: r
        }
    }, [e, s])
}
const es = "addressSelector--",
    tn = hs("AddressSelector");

function an({
    id: e,
    selectedId: s = "",
    addressType: t = "shipping",
    onChange: a,
    onEdit: i,
    onDelete: r,
    onSetDefault: o,
    addresses: d,
    addressesTitle: m,
    immutableAddresses: f = [],
    immutableAddressSections: b = [],
    getAddressDisplayName: v,
    selectedAddressDetails: u
}) {
    const h = fs(e, tn),
        {
            i18n: l
        } = x(),
        [A, g] = me("idle"),
        S = ps(),
        I = L(() => d.filter(P => !P.disabled), [d]),
        p = L(() => d.filter(P => P.disabled), [d]),
        c = t === "shipping",
        _ = gs(t),
        M = V(P => (i || r) && P === s, [i, r, s]),
        [z, O] = me(_),
        y = L(() => i ? {
            accessibilityLabel: c ? l.translate("shipping.address_edit") : l.translate("billing.address_edit"),
            onClick: i,
            label: c ? l.translate("shipping.edit") : l.translate("billing.edit")
        } : void 0, [i, c, l]),
        N = V(() => (O(_), g("active")), [_]),
        w = L(() => r ? {
            accessibilityLabel: c ? l.translate("shipping.address_delete") : l.translate("billing.address_delete"),
            onClick: N,
            label: c ? l.translate("shipping.delete") : l.translate("billing.delete"),
            destructive: !0
        } : void 0, [r, c, l, N]),
        T = s ? ss(s, h) : void 0,
        ee = V(([P = ""]) => {
            const k = rn(P, h);
            k && a(k)
        }, [a, h]),
        {
            ungroupedImmutableAddresses: B,
            groupedImmutableAddresses: $
        } = nn(f, b),
        Q = d.length + f.length === 1,
        K = c ? l.translate("shipping.address_more") : l.translate("billing.address_more"),
        G = L(() => [...y ? [y] : [], ...w ? [w] : []], [y, w]),
        ie = B.length > 0 && d.length > 0 && m,
        q = L(() => T ? [T] : [], [T]);
    return n(D, {
        children: [n(xs, {
            name: `${t}Address`,
            values: q,
            onChange: ee,
            hideRadioControl: Q,
            selectedContentBackground: u ? "selected" : void 0,
            children: [n(ce, {
                addresses: B,
                formId: h,
                selectedId: s,
                isImmutable: !0,
                getAddressDisplayName: v,
                onSetDefault: o
            }), ie && n(D, {
                children: [n(W, {
                    blockSize: "base"
                }), n(Y, {
                    color: "subdued",
                    children: m
                }), n(W, {
                    blockSize: "base"
                })]
            }), n(ce, {
                addresses: I,
                formId: h,
                selectedId: s,
                shouldShowMoreOptionsButton: M,
                moreOptionsAccessibilityLabel: K,
                moreOptionsActions: G,
                getAddressDisplayName: v,
                onSetDefault: o,
                selectedAddressDetails: u
            }), n(ce, {
                addresses: p,
                formId: h,
                selectedId: s,
                shouldShowMoreOptionsButton: M,
                moreOptionsAccessibilityLabel: K,
                moreOptionsActions: G,
                getAddressDisplayName: v,
                onSetDefault: o
            }), $.map(({
                title: P,
                addresses: k
            }) => n(ce, {
                title: P,
                addresses: k,
                formId: h,
                selectedId: s,
                isImmutable: !0,
                selectedAddressDetails: u
            }, P))]
        }), r && n(sn, {
            state: A,
            title: c ? l.translate("shipping.address_delete") : l.translate("billing.address_delete"),
            description: l.translate("address_management.confirm_address_deletion", {
                address: z
            }),
            onConfirm: async () => {
                g("deleting"), await r(), S.current && g("idle")
            },
            onCancel: () => g("idle")
        })]
    })
}

function ss(e, s = "") {
    return `${s}${es}${e}`
}

function rn(e, s = "") {
    return e.replace(`${s}${es}`, "")
}

function ce({
    title: e,
    addresses: s,
    formId: t,
    selectedId: a,
    isImmutable: i = !1,
    shouldShowMoreOptionsButton: r,
    moreOptionsAccessibilityLabel: o,
    moreOptionsActions: d,
    getAddressDisplayName: m,
    onSetDefault: f,
    selectedAddressDetails: b
}) {
    const v = s.map(u => n(on, {
        addressId: u.id,
        address: u.address,
        choiceValue: ss(u.id, t),
        disabled: u.disabled,
        isImmutableAddress: i,
        showMoreOptionsButton: !!r ? .(u.id),
        moreOptionsAccessibilityLabel: o,
        moreOptionsActions: d,
        addressDisplayName: m ? .(u.id),
        explicitlyPreferred: u.default,
        onSetDefault: f,
        isSelected: a === u.id,
        details: a === u.id ? b : void 0
    }, u.id));
    return e ? n(D, {
        children: [n(W, {
            blockSize: "base"
        }), n(Y, {
            color: "subdued",
            children: e
        }), n(W, {
            blockSize: "base"
        }), v]
    }) : n(D, {
        children: v
    })
}
const on = is(function({
    addressId: s,
    address: t,
    choiceValue: a,
    disabled: i = !1,
    isImmutableAddress: r = !1,
    showMoreOptionsButton: o = !1,
    moreOptionsAccessibilityLabel: d = "",
    moreOptionsActions: m = [],
    addressDisplayName: f,
    explicitlyPreferred: b,
    onSetDefault: v,
    isSelected: u,
    details: h
}) {
    const l = Ve(je),
        A = n(Cs, {
            value: a,
            disabled: i,
            selectedContent: h,
            selectedContentPadding: h ? "none" : void 0,
            secondaryContent: o && !r && n(Os, {
                accessibilityLabel: d,
                options: m
            }),
            children: n(Me, {
                gridAutoFlow: "column",
                gridTemplateColumns: "minmax(0, 1fr)",
                gridTemplateRows: "minmax(0, 1fr)",
                alignItems: "center",
                alignContent: "center",
                children: n(Z, {
                    gap: "small-400",
                    children: n(Qs, {
                        nameLinePosition: "inline",
                        address: t,
                        addressDisplayName: f,
                        explicitlyPreferred: b,
                        isImmutableAddress: r,
                        onSetDefault: v,
                        isSelected: u,
                        showsMoreOptionsWhenSelected: !r && m.length > 0,
                        showPhone: !0
                    })
                })
            })
        }, s);
    return l ? A : n(Me, {
        gridAutoFlow: "column",
        gridTemplateColumns: "minmax(0, 1fr)",
        gridTemplateRows: "minmax(0, 1fr)",
        alignItems: "start",
        alignContent: "start",
        children: A
    }, s)
});

function ln({
    onClick: e,
    textLabel: s
}) {
    const {
        rollup: {
            action: {
                tone: t
            } = {}
        } = {}
    } = bs();
    return n(Te, {
        tone: t === "custom" ? "custom" : void 0,
        variant: "plain",
        textDecoration: "none",
        onClick: e,
        children: n(Z, {
            direction: "inline",
            gap: "small-100",
            alignItems: "center",
            children: [n(vs, {
                type: "plus",
                size: "base"
            }), n(Y, {
                children: s
            })]
        })
    })
}

function dn({
    open: e,
    isEditing: s,
    address: t,
    addressType: a,
    onSave: i,
    onClose: r,
    id: o,
    saveText: d,
    cancelText: m,
    showSavedAddressSelector: f,
    combineViolationAndValidationErrors: b,
    addressErrorsSignal: v,
    addressSettings: u,
    modalSubtitle: h,
    showDefaultAddressCheckbox: l,
    errorBannerMessage: A
}) {
    const {
        i18n: g
    } = x(), S = a === "shipping", I = S ? g.translate("address_management.address_form.add") : g.translate("billing.address_form.add_address"), p = S ? g.translate("shipping.address_edit") : g.translate("billing.address_edit"), c = s ? p : I, _ = S ? g.translate("address_management.address_form.save") : g.translate("billing.address_form.save"), M = S ? g.translate("address_management.address_form.cancel") : g.translate("billing.address_form.cancel"), z = b === void 0 ? s : b, O = ze(() => A ? .value ? ? void 0);
    return n(Je, {
        open: e,
        heading: c,
        onHide: r,
        children: [h ? n(D, {
            children: [n(te, {
                color: "subdued",
                children: h
            }), n(W, {
                blockSize: "base"
            })]
        }) : null, n(Z, {
            gap: "base",
            children: [n(as, {
                when: O,
                children: y => n(Ge, {
                    tone: "critical",
                    errorType: a === "shipping" ? ye.DeliveryError : ye.PaymentError,
                    children: n(te, {
                        children: y
                    })
                })
            }), t && n(Gs, {
                id: o,
                editableAddress: t,
                addressType: a,
                saveText: d ? ? _,
                cancelText: m ? ? M,
                onSave: i,
                onSuccess: r,
                onCancel: r,
                showSavedAddressSelector: f,
                addressErrorsSignal: v,
                combineViolationAndValidationErrors: z,
                addressSettings: u,
                showDefaultAddressCheckbox: l
            })]
        })]
    })
}

function cn({
    id: e,
    addressType: s = "shipping",
    onSave: t,
    onAddAction: a,
    showSavedAddressSelector: i = !0,
    addressErrorsSignal: r,
    errorBannerMessage: o,
    showNewAddressButton: d = !0,
    combineViolationAndValidationErrors: m,
    addressSettings: f,
    modalSubtitle: b,
    showDefaultAddressCheckbox: v = !1,
    hideAddressModal: u = !1
}) {
    const {
        i18n: h
    } = x(), {
        createAddressParts: l
    } = Pe(), A = l.addressModalState.value, g = s === "shipping", S = A.status === "editing", I = A.addressType === s && (A.status === "editing" || A.status === "adding"), p = !u && I, c = () => {
        o && (o.value = void 0), l.addressModalState.value = {
            status: "idle",
            addressType: s,
            address: A.address,
            setAsDefault: "default"
        }
    }, _ = g ? h.translate("shipping.add_address") : h.translate("billing.add_address");
    return n(D, {
        children: [d && n(ln, {
            onClick: a,
            textLabel: _
        }), n(dn, {
            open: p,
            isEditing: S,
            address: A.address,
            addressType: s,
            onSave: t,
            onClose: c,
            id: e,
            showSavedAddressSelector: i,
            addressErrorsSignal: r,
            errorBannerMessage: o,
            combineViolationAndValidationErrors: m,
            addressSettings: f,
            modalSubtitle: b,
            showDefaultAddressCheckbox: v
        })]
    })
}
class ue extends Error {
    constructor(s, t) {
        super(s), this.name = "InvalidSelectedAddressError", this.groupingHash = "AddressEdit::InvalidSelectedAddressError", this.name = "InvalidSelectedAddressError", this.groupingHash = t
    }
}

function Dn({
    addressType: e,
    addresses: s,
    immutableAddresses: t = [],
    immutableAddressSections: a = [],
    addressesTitle: i,
    selectedAddress: r,
    onSelectAddress: o,
    onCreateAddress: d = async () => {},
    onUpdateAddress: m = async () => {},
    onDeleteAddress: f = async () => !1,
    onSetDefault: b = async () => !1,
    addressErrorsSignal: v,
    canCreateAddress: u = !1,
    canUpdateAddress: h = !1,
    canDeleteAddress: l = !1,
    canSetDefaultAddress: A = !1,
    getAddressDisplayName: g,
    addressSettings: S,
    modalSubtitle: I,
    canChangeCompanyLocation: p = !1,
    createAddressFormId: c,
    errorBannerMessage: _,
    noticesSection: M = "delivery",
    selectedAddressDetails: z,
    showNotices: O = !0,
    onBeforeSelectAddress: y,
    onBeforeCreateAddress: N,
    onBeforeUpdateAddress: w,
    onBeforeDeleteAddress: T,
    hideAddressModal: ee = !1
}) {
    const {
        createAddressParts: B
    } = Pe(), {
        checkout: $,
        i18n: Q,
        observability: K
    } = x(), {
        extendedAddressMode: G
    } = $.address, ie = e === "shipping" && $.proposal.negotiated.fields.mustSelectProvidedAddress.value, {
        defaultShippingDetails: q
    } = $.configuration.addressSettings.nonBillingAddressSettings.value, P = q.country.code, k = L(() => s.map(Oe), [s]), j = L(() => t.map(Oe), [t]), H = L(() => k.filter(C => !C.disabled), [k]), [oe, he] = me(0), J = V(C => {
        const F = [...H, ...j],
            U = F.find(({
                id: R
            }) => R === C);
        if (!U) {
            const R = F.map(({
                id: X
            }) => X).join(",");
            K.error(new ue(`Unexpected address id: '${C}' not found in choices ${R}`, "AddressEdit::handleChange::InvalidSelectedAddressError"));
            return
        }
        if (y) {
            let R = !1;
            y(U, () => {
                R = !0, o(U)
            }), R || he(X => X + 1)
        } else o(U)
    }, [H, j, o, y, K]), be = V(() => {
        if (!r) throw new ue("Attempted to edit an address without a selected address", "AddressEdit::handleEditAction::InvalidSelectedAddressError");
        B.addressModalState.value = {
            status: "editing",
            address: Le(r.address, {
                extendedAddressMode: G
            }),
            addressType: e,
            addressId: r.id,
            setAsDefault: r.default ? "default" : "disabled"
        }
    }, [r, e, B.addressModalState, G]), le = V(() => {
        const C = H ? .[0],
            F = Le({
                firstName: C ? .address.firstName,
                lastName: C ? .address.lastName,
                countryCode: P ? ? C ? .address.countryCode
            }, {
                extendedAddressMode: G
            });
        B.addressModalState.value = {
            status: "adding",
            address: F,
            addressType: e,
            setAsDefault: "disabled"
        }
    }, [e, H, B.addressModalState, P, G]), de = V(async () => {
        if (!r) throw new ue("Attempted to delete an address without a selected address", "AddressEdit::handleDelete::InvalidSelectedAddressError");
        const C = r.id;
        return T ? T(C, () => f(C)) : f(C)
    }, [f, T, r]), ve = V(async C => {
        const F = B.addressModalState.value,
            U = F.setAsDefault === "enabled";
        if (F.status === "adding") {
            const R = {
                address: C,
                setDefault: U
            };
            return N ? N(R, () => d(R)) : d(R)
        }
        if (F.status === "editing") {
            const X = {
                id: F.addressId,
                address: C,
                setDefault: U
            };
            return w ? w(X, () => m(X)) : m(X)
        }
    }, [B.addressModalState, d, m, N, w]), ae = V(async () => {
        if (!r) throw new ue("Attempted to set a default address without a selected address", "AddressEdit::handleSetDefault::InvalidSelectedAddressError");
        r.default || await b(r.id)
    }, [b, r]), Ae = l && H.length > 1, _e = u || h, E = B.addressModalState.value, re = E.status === "editing" && k.some(({
        id: C
    }) => C === E.addressId), se = A && (E.status !== "editing" || re);
    return n(Z, {
        gap: "base",
        children: [O && n(As, {
            section: M
        }), ie ? n(_s, {
            tone: "info",
            children: Q.translate("address_management.must_use_address_banner")
        }) : null, n(an, {
            id: e === "shipping" ? "shippingAddressSelector" : void 0,
            addressType: e,
            selectedId: r ? .id,
            onChange: J,
            onEdit: h ? be : void 0,
            getAddressDisplayName: g,
            addresses: k,
            addressesTitle: i,
            immutableAddresses: j,
            immutableAddressSections: a,
            onDelete: Ae ? de : void 0,
            onSetDefault: A ? ae : void 0,
            selectedAddressDetails: z
        }, oe), p && n(pe, {
            padding: "none small-100",
            children: n(Rs, {
                showIcon: !0
            })
        }), _e && n(pe, {
            padding: "none small-100",
            children: n(cn, {
                id: c,
                addressType: e,
                onSave: ve,
                onAddAction: le,
                showNewAddressButton: u,
                showSavedAddressSelector: !1,
                addressErrorsSignal: v,
                errorBannerMessage: _,
                modalSubtitle: I,
                addressSettings: S,
                showDefaultAddressCheckbox: se,
                hideAddressModal: ee
            })
        })]
    })
}

function Oe(e) {
    return { ...e,
        id: e.id ? e.id : Fs(e.address)
    }
}

function un(e, s, t, a) {
    return e === "billing" ? t ? s.find(i => ws(i.address, t, ["phone", "firstName"])) ? ? null : null : a ? ? null
}
const ns = e => !e.firstName ? .trim();

function mn(e, s, t) {
    const a = e.selectedPaymentMethod.value;
    if (!a || !He(a)) return;
    const i = a.paymentAttributes.billingAddress.address;
    !ns(i) || !Ee(i, s) || e.selectPaymentMethod({ ...a,
        paymentAttributes: { ...a.paymentAttributes,
            billingAddressValid: t,
            billingAddress: { ...a.paymentAttributes.billingAddress,
                address: { ...i,
                    firstName: s.firstName
                }
            }
        }
    })
}

function fn(e, s, t) {
    Ce(() => {
        for (const a of e.paymentMethods.value) {
            if (!He(a)) continue;
            const {
                billingAddress: i
            } = a.paymentAttributes;
            !ns(i.address) || !Ee(i.address, s) || e.updateCreditCard(a.id, {
                billingAddressValid: t,
                billingAddress: { ...i,
                    address: { ...i.address,
                        firstName: s.firstName
                    }
                }
            })
        }
    })
}

function Re(e, s, t, a) {
    mn(e, t, a), fn(s, t, a)
}

function pn({
    enabled: e,
    addressType: s,
    onPersistSuccess: t
}) {
    const {
        i18n: a,
        shopPay: i,
        observability: r,
        checkout: o
    } = x(), d = ge(), {
        lastJourneyProgression: m,
        lastNegotiation: f
    } = ks(), b = o.validation.missingFields.firstName.input, v = o.validation.missingFields.firstName.error, u = s === "billing" ? Ls : Ds;

    function h(p) {
        const c = p.peek();
        if (!("violations" in c)) return;
        const _ = c.violations.filter(M => !u.has(M.code));
        _.length !== c.violations.length && (p.value = { ...c,
            violations: _
        })
    }

    function l() {
        v.value = "";
        const p = s === "billing" ? o.addressManager.billing.value : o.addressManager.shipping.value;
        p.errors.fields.firstName.value = void 0, h(m), h(f)
    }

    function A(p) {
        const c = d.billingAddress.value;
        if (!c) return {
            success: !1,
            location: "first_name_no_address"
        };
        const _ = { ...c,
            firstName: p
        };
        return d.billingAddress.value = _, l(), t ? .(), {
            success: !0
        }
    }

    function g(p, c) {
        const _ = { ...p,
            address: { ...p.address,
                firstName: c
            }
        };
        return s === "billing" ? (i.session.unstable_updateSelectedBillingAddress(_), d.billingAddress.value = _.address) : (i.session.unstable_updateSelectedShippingAddress(_), d.shippingAddress.value = _.address, S(_)), l(), t ? .(), {
            success: !0
        }
    }

    function S(p) {
        const c = i.session.selectedBillingAddress.value;
        !c || c.id !== p.id || Ee(c.address, p.address) && (i.session.unstable_updateSelectedBillingAddress(p), d.billingAddress.value = p.address)
    }
    async function I(p, c, _) {
        const M = _ === "billing",
            z = M ? o.addressManager.billing.value : o.addressManager.shipping.value,
            O = { ...p,
                address: { ...p.address,
                    firstName: c
                }
            },
            y = await z.updateAddress({
                id: p.id,
                address: O.address
            }),
            N = i.user.addresses.value.find(w => w.id === p.id) ? ? O;
        return y ? (M ? (d.billingAddress.value = y.address, Re(i.session, i.user, N.address, N.valid)) : (S(N), Re(i.session, i.user, N.address, N.valid)), l(), t ? .(), {
            success: !0
        }) : (r.leaveErrorBreadcrumb("Shop Pay update address first name failed"), v.value = a.translate("field_errors.address_generic_error"), {
            success: !1,
            location: "first_name_update_failed"
        })
    }
    Qe("firstName", async () => {
        if (!e) return {
            success: !0
        };
        const p = b.value.trim();
        if (!p) return v.value = a.translate("field_errors.address_first_name_blank"), {
            success: !1,
            location: "first_name_blank"
        };
        const c = un(s, i.user.addresses.value, d.billingAddress.value, i.session.selectedShippingAddress.value);
        return c ? i.user.addresses.value.some(M => M.id === c.id) ? I(c, p, s) : g(c, p) : s === "billing" ? A(p) : {
            success: !1,
            location: "first_name_no_address"
        }
    })
}

function gn({
    addressType: e = "shipping",
    onPersistSuccess: s
} = {}) {
    const {
        i18n: t,
        checkout: {
            validation: a
        },
        shopPay: i
    } = x(), {
        isMissingFirstName: r
    } = Xe({
        addressType: e
    }), o = ge(), d = ze(() => {
        const l = e === "billing" ? i.session.selectedBillingAddress.value : i.session.selectedShippingAddress.value;
        return l ? .id === Bs ? l : l ? .id ? ? (e === "billing" ? o.billingAddress.value : o.shippingAddress.value)
    }), m = a.missingFields.firstName.input, f = a.missingFields.firstName.error;
    pn({
        enabled: r,
        addressType: e,
        onPersistSuccess: s
    }), $e(() => {
        if (d.value) return () => {
            m.value = "", f.value = ""
        }
    });
    const b = V(l => {
            if (!Ne(l)) return t.translate("field_errors.address_first_name_blank")
        }, [t]),
        v = Ue(m, f, b);
    We(m, f, b);
    const u = f.value,
        h = Ke(u) ? u.message : u;
    return n(Ss, {
        name: "firstName",
        label: t.translate("contact.first_name_label"),
        required: !0,
        autocomplete: "given-name",
        ...v,
        error: v.error || h
    })
}

function ts(e, s, t) {
    return Ne(e) ? t(e, s) ? {
        isValid: !0
    } : {
        isValid: !1,
        reason: "phone_invalid"
    } : {
        isValid: !1,
        reason: "phone_blank"
    }
}
const hn = {
    id: "fb48dec1806e3e11b7375d723d9e47d5006dda9d3285b2f42dc9138fade9163b",
    type: "mutation",
    name: "AddPhone",
    source: "mutation AddPhone($phone:String!,$payAddressUuid:String){addPhone(phone:$phone,payAddressUuid:$payAddressUuid){userErrors{field message __typename}__typename}}"
};

function bn(e, s, {
    enabled: t,
    addressType: a = "shipping"
}) {
    const {
        i18n: i,
        graphql: {
            shopPayGraphql: r
        },
        shopPay: o,
        observability: d
    } = x(), m = ge(), {
        formatPhoneNumber: f,
        validatePhoneNumber: b
    } = Ze(), u = (a === "billing" ? m.billingAddress.value : m.shippingAddress.value) ? .countryCode, h = L(() => _n({
        graphql: r,
        observability: d
    }), [r, d]);
    Qe("phone", async () => {
        if (!t) return {
            success: !0
        };
        const l = ts(s.value, u, b);
        if (!l.isValid) return e.value = An(l.reason, i), {
            success: !1,
            location: l.reason
        };
        e.value = void 0;
        const A = f(s.value, u);
        if (!A) return e.value = i.translate("field_errors.shipping_line_phone_invalid"), {
            success: !1,
            location: "phone_format_failed"
        };
        const g = a === "billing" ? o.session.selectedBillingAddress.value ? .uuid : o.session.selectedShippingAddress.value ? .uuid;
        return await h(A, g) ? (o.user.unstable_setPhoneNumber(A), {
            success: !0
        }) : (e.value = i.translate("field_errors.shipping_line_phone_invalid"), {
            success: !1,
            location: "add_phone_mutation_failed"
        })
    })
}

function vn({
    addressType: e = "shipping"
} = {}) {
    const {
        i18n: s,
        checkout: {
            validation: t
        }
    } = x(), a = ge(), {
        validatePhoneNumber: i
    } = Ze(), {
        isMissingPhone: r
    } = Ye({
        addressType: e
    }), d = (e === "billing" ? a.billingAddress.value : a.shippingAddress.value) ? .countryCode, m = t.missingFields.phone.input, f = t.missingFields.phone.error, b = t.missingFields.phone.isValid;
    bn(f, m, {
        enabled: r,
        addressType: e
    }), $e(() => {
        const g = ts(m.value, d, i);
        b.value = g.isValid
    }), ne(() => () => {
        b.value = !0, f.value = ""
    }, [b, f]);
    const v = V(g => {
            if (!Ne(g)) return s.translate("field_errors.phone_blank");
            if (!i(g ? ? "", d)) return s.translate("field_errors.shipping_line_phone_invalid")
        }, [i, d, s]),
        {
            onInput: u,
            ...h
        } = Ue(m, f, v);
    We(m, f, v);
    const l = f.value,
        A = Ke(l) ? l.message : l;
    return n(qs, {
        name: "phone",
        countryCode: d ? ? "",
        label: s.translate("contact.phone_label"),
        prefillCountryCode: !0,
        required: !0,
        autocomplete: e === "billing" ? "billing tel-national" : "shipping tel-national",
        ...h,
        onInput: g => {
            u ? .(g), m.value = g ? ? ""
        },
        error: h.error || A
    })
}

function An(e, s) {
    return e === "phone_blank" ? s.translate("field_errors.phone_blank") : s.translate("field_errors.shipping_line_phone_invalid")
}

function _n({
    graphql: e,
    observability: s
}) {
    return async (t, a) => {
        const {
            data: i,
            error: r
        } = await e.mutate(hn, {
            variables: {
                phone: t,
                payAddressUuid: a
            }
        });
        return r || i == null || i.addPhone == null ? (s.leaveErrorBreadcrumb("Shop Pay add phone mutation failed with a transport or null-response error"), !1) : i.addPhone.userErrors ? .length > 0 ? (s.leaveErrorBreadcrumb("Shop Pay add phone mutation returned user errors", {
            userErrors: JSON.stringify(i.addPhone.userErrors)
        }), !1) : !0
    }
}

function xn({
    addressType: e = "shipping",
    onFirstNamePersisted: s
} = {}) {
    const {
        isMissingPhone: t
    } = Ye({
        addressType: e
    }), {
        isMissingFirstName: a
    } = Xe({
        addressType: e
    });
    return !t && !a ? null : n(pe, {
        paddingInline: "base",
        paddingBlockStart: "small-200",
        paddingBlockEnd: "base",
        children: n(Z, {
            direction: "block",
            gap: "base",
            children: [a && n(gn, {
                addressType: e,
                onPersistSuccess: s
            }), t && n(vn, {
                addressType: e
            })]
        })
    })
}
export {
    Dn as A, Gs as C, xn as M, ln as a, sn as b, an as c, Qs as d
};