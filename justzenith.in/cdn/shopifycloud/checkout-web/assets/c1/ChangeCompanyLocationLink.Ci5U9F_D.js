const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["component-amazonWalletLazy.DHzdkYWT.js", "esnext-vendor.BDPAaZdq.js", "hydrate.B0xlt2dG.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "app.D1P6yWfp.js", "assets/app.BuSMBobh.css", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css", "hooks-useStableHostMethodsReferences.DLE4q0sj.js", "amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js", "WalletsSandbox-WalletSandbox.Dp4t7VmS.js", "assets/WalletSandbox.BoV0vp4z.css", "amazon-constants.CrSKDLZa.js", "assets/amazonWalletLazy.D78LrA7v.css"]))) => i.map(i => d[i]);
import {
    e as B,
    A,
    T as k,
    E,
    q as I,
    h as M,
    u as d,
    f as V,
    d as O
} from "./esnext-vendor.BDPAaZdq.js";
import {
    aS as w,
    aU as F,
    P as b,
    O as L,
    aV as x,
    aW as z,
    W as D,
    aX as T,
    a5 as W,
    _ as N
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    e as U,
    aB as H,
    aC as R,
    aD as G,
    L as K,
    c as Y,
    I as j,
    o as q
} from "./hydrate.B0xlt2dG.js";
import {
    _ as J
} from "./app.D1P6yWfp.js";
import {
    M as X
} from "./BillingAddressForm.aTSlVDrG.js";

function se({
    onValid: e,
    onInvalid: n,
    children: i
}) {
    const {
        billing: l,
        contact: u,
        payment: p,
        shipping: y
    } = w(), a = B(new Map), h = A(new WeakMap), f = k(() => E(() => {
        const t = a.value;
        let o = !1,
            s = t.size > 0;
        for (const [c, {
                validator: r,
                previousValue: m
            }] of t) {
            const g = c.value;
            r(g) && (s = !1), g !== m && (o = !0)
        }
        return {
            valid: s,
            changed: o
        }
    }), [a]), v = I(t => {
        const o = {
            billing: l,
            contact: u,
            payment: p,
            shipping: y
        };
        t.valid ? e ? .(o) : n ? .(o);
        const s = new Map;
        for (const [c, r] of a.value) s.set(c, { ...r,
            previousValue: c.value
        });
        a.value = s
    }, [a, e, n, l, u, p, y]), P = A(!1);
    M(() => f.subscribe(t => {
        const o = !P.current;
        if (t.changed || o) return P.current = !0, v(t)
    }), [f, v]);
    const S = k(() => ({
        registerValidator: (t, o) => {
            const s = new Map(a.peek()),
                c = h.current.get(t);
            return s.set(t, {
                validator: o,
                previousValue: c
            }), a.value = s, () => {
                const r = a.peek().get(t);
                r ? .previousValue !== void 0 && h.current.set(t, r.previousValue);
                const m = new Map(a.peek());
                m.delete(t), a.value = m
            }
        }
    }), [a]);
    return d(F.Provider, {
        value: S,
        children: i
    })
}

function re() {
    const {
        paymentMethods: e,
        buyerIdentity: n
    } = b(), {
        router: i,
        source: {
            type: l
        },
        mobileCheckoutSdk: u,
        embed: p,
        checkout: y,
        shop: a
    } = L(), h = i.currentUrl, f = y.proposal.proposed.paymentLines, v = a.hasFlagEnabled(x), P = z(), S = U(), t = l === "simulated", o = u.variant.isStandard() || !!p ? .isCheckoutKit();
    return V(() => {
        const s = e.value ? .some(_ => _.type === "wallet" && _.name === "SHOP_PAY"),
            c = n.value ? .purchasingCompany,
            {
                currentDetour: r
            } = S.value,
            m = r != null && ["stockProblems"].includes(r.type),
            g = D(h.value.searchParams),
            C = v && !!T(f.value);
        return !!(!t && s && !g && !P.value && !o && !m && !c && !C)
    })
}

function Q(e, {
    wallet: n
} = {}) {
    const {
        sdkStatus: i,
        buttonStatus: l,
        buyWithPrimeButtonStatus: u
    } = W().inMemoryAmazonPayParts, p = n === N.BuyWithPrime ? u : l;
    M(() => {
        e && (i.value = {
            status: H.Error
        }, p.value = {
            status: "error"
        })
    }, [e, i, p])
}
const Z = O({
    displayName: "AmazonPayButtonContent",
    load: () => J(() =>
        import ("./component-amazonWalletLazy.DHzdkYWT.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).then(e => e.AmazonPayButtonContent),
    useError: Q
});

function ie({
    isSdkOnly: e = !1
}) {
    return d(Z, {
        isSdkOnly: e
    })
}
const $ = ["paymentMethods"];

function le() {
    const e = b().paymentMethods,
        n = R($);
    return V(() => n.value && !e.value ? .length)
}

function ue({
    showIcon: e = !1
}) {
    const {
        i18n: n,
        source: i
    } = L(), l = G(), u = i.type === "simulated";
    return d(X, {
        interactive: !u,
        children: d(K, {
            href: l.value,
            display: "block",
            accessibilityLabel: n.translate("contact.change_company_location_link_label"),
            textDecoration: e ? "none" : void 0,
            children: d(Y, {
                direction: "inline",
                alignItems: "center",
                gap: "small-100",
                children: [e && d(j, {
                    type: "location"
                }), d(q, {
                    children: n.translate("contact.change_location_link_label")
                })]
            })
        })
    })
}
export {
    ie as A, ue as C, se as S, le as a, Q as b, re as u
};