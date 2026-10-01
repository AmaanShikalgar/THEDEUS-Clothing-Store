import {
    q as g,
    u,
    T as m,
    x as f
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as p,
    Q as A
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    a6 as M,
    av as b,
    K as k,
    I as F,
    c as S,
    l as y,
    aw as C,
    O as P,
    ax as N,
    h as _
} from "./hydrate.B0xlt2dG.js";
import {
    P as x
} from "./Popover.BUTwaoOa.js";
import {
    S as O
} from "./money-toShopPayMoneyInput.-nuohgDW.js";

function h({
    addressType: s = "shipping"
} = {}) {
    const {
        checkout: e
    } = p();
    return g(i => e.identity.current.value === "shopPay" && !i ? .trim() && (s === "billing" ? !e.isShippingRequired.value : !0), [e, s])
}

function L({
    addressType: s = "shipping"
} = {}) {
    const {
        checkout: {
            validation: e
        },
        i18n: o,
        shopPay: i
    } = p(), a = h({
        addressType: s
    }), n = g(() => {
        const t = e.missingFields.phone.isValid.value;
        if (!t) {
            const r = e.missingFields.phone.input.value;
            e.missingFields.phone.error.value = r ? o.translate("field_errors.shipping_line_phone_invalid") : o.translate("field_errors.phone_blank")
        }
        return t
    }, [e, o]);
    return {
        isMissingPhone: i.user.hasFlow.value && a(i ? .user.phoneNumber.value),
        assertMissingPhone: n
    }
}

function W({
    addressType: s = "shipping"
} = {}) {
    const e = A(),
        o = h({
            addressType: s
        }),
        i = s === "billing" ? e.billingAddress.value : e.shippingAddress.value;
    return {
        isMissingFirstName: o(i.firstName)
    }
}
const w = P("OverlayMoreOptionsButton");

function $({
    accessibilityLabel: s,
    options: e,
    positionArea: o
}) {
    const i = M({
            base: !0,
            medium: !1
        }),
        {
            closeOverlay: a
        } = b(),
        n = k(void 0, w);
    return e.length === 0 ? null : u(C, {
        accessibilityLabel: s,
        overlay: u(x, {
            connector: i ? "none" : "arrow",
            id: n,
            padding: "none",
            positionArea: o,
            children: u(S, {
                gap: "small-200",
                padding: "small-100 base",
                alignItems: "center",
                children: e.map(({
                    label: l,
                    accessibilityLabel: t,
                    destructive: r,
                    href: c,
                    onClick: d
                }) => {
                    const v = `${l}-${t}`;
                    return u(y, {
                        inlineSize: "fill",
                        variant: "plain",
                        onClick: () => {
                            d ? .(), a(n)
                        },
                        href: c,
                        accessibilityLabel: t,
                        inlineAlignment: "start",
                        textDecoration: "none",
                        tone: r ? "critical" : void 0,
                        children: l
                    }, v)
                })
            })
        }),
        children: u(F, {
            type: "menu-vertical",
            size: "small"
        })
    })
}

function D(s) {
    const {
        checkout: {
            addressManager: e
        },
        observability: o
    } = p(), i = e[s].value, a = I(s);
    return m(() => {
        function n(t, r) {
            return async (...c) => {
                const d = await t(...c);
                return d && a(r) ? .(), d
            }
        }
        return {
            selectAddress: n(s === "shipping" ? (t, r) => (o.log("shipping_address_select_invoked", "[useAddressMutationsWithNegotiation] selectAddress invoked for a shipping address", {
                address_id: t,
                source: r ? .source ? ? "unknown"
            }), i.selectAddress(t)) : t => i.selectAddress(t), "select"),
            createAddress: n(i.createAddress, "create"),
            updateAddress: n(i.updateAddress, "update"),
            deleteAddress: n(i.deleteAddress, "delete")
        }
    }, [i, a, o, s])
}

function I(s) {
    const e = N(),
        {
            checkout: {
                identity: o,
                wallets: i
            }
        } = p(),
        a = f(O),
        {
            negotiate: n
        } = _(),
        l = o.current;
    return g(t => {
        const r = l.value;
        if ((r === "customerAccount" || r === "guest") && s === "shipping") return e ? () => e.dispatch("addressReplaced") : () => {
            i.activeSession.value || n({
                include: [],
                fieldsToResolve: ["deliveryNext"],
                silenceViolations: ["non-delivery-address"],
                runListenersOnError: !0
            })
        };
        if (r === "shopPay") return async () => {
            const c = s === "shipping" ? ["shippingAddress"] : ["billingAddress"];
            await n({
                include: c,
                silenceViolations: ["non-stock"],
                fieldsToResolve: c
            }), a && ["create", "update"].includes(t) && (a.cashbackState.stale.value = !0)
        };
        if (s === "billing" && r === "businessCustomer") return () => {
            n({
                fieldsToResolve: ["billingAddress"]
            })
        }
    }, [l, s, e, a, n, i])
}
export {
    $ as M, W as a, D as b, L as u
};