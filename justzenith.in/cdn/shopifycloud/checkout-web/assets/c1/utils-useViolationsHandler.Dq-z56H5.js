import {
    T as d,
    u as S,
    X as f,
    x as i,
    h as _,
    f as T,
    q as u
} from "./esnext-vendor.BDPAaZdq.js";
import {
    ae as p,
    af as h,
    _ as c,
    ag as v,
    ah as O,
    ai as w,
    O as P,
    Q as L,
    aj as g,
    X as M
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
const k = p("CheckoutSheetProtocolSchemaContext");

function V(e, o) {
    e.postMessageToConsumer(o)
}
var x = (e => (e.Continue = "continue", e.Cancel = "cancel", e))(x || {});
class A {
    constructor() {
        this.listeners = new Set
    }
    listen(o) {
        return this.listeners.add(o), () => {
            this.listeners.delete(o)
        }
    }
    emit(o = "continue") {
        this.listeners.forEach(t => t(o))
    }
}
const y = f(void 0);

function b() {
    const e = i(y);
    if (e == null) throw new h("Missing CheckoutProtocolEventContext");
    return e
}

function j(e) {
    const o = b();
    _(() => o.listen(e), [e, o])
}

function K({
    children: e
}) {
    const o = d(() => new A, []);
    return S(y.Provider, {
        value: o,
        children: e
    })
}
const H = p("MobileCheckoutSdkSchemaContext");

function I() {
    const e = i(k),
        o = i(H);
    if (!e && !o) throw new h("No Checkout Sheet Protocol or Mobile Checkout SDK Schema context found");
    return e || o
}
const N = [{
    brand: "APPLE_PAY",
    flowType: "applePay"
}, {
    brand: "GOOGLE_PAY",
    flowType: "googlePay"
}, {
    brand: "PAYPAL_EXPRESS",
    flowType: "payPal"
}, {
    brand: "SHOPIFY_INSTALLMENTS",
    flowType: "shopifyInstallments"
}, {
    brand: c.AmazonPay,
    flowType: "amazonPay"
}, {
    brand: c.BuyWithPrime,
    flowType: "buyWithPrime"
}];
[...v, ...O, ...w];

function D(e) {
    return Object.values(c).includes(e)
}

function Y() {
    const {
        checkout: {
            identity: e
        },
        router: o,
        shopPay: t
    } = P(), r = L().paymentLines;
    return T(() => {
        const n = e.current.value === "shopPay",
            s = o.currentUrlMatches("/shoppay_login"),
            l = r.value,
            m = t.session.paymentMethodOption.value ? .name.toUpperCase() === "SHOPIFY_INSTALLMENTS",
            E = N.map(({
                brand: a,
                flowType: C
            }) => ({
                condition: D(a) ? !!g(l, a) : !!M(l, a),
                flowType: C
            }));
        return [{
            condition: s,
            flowType: "shopPayLogin"
        }, {
            condition: m,
            flowType: "shopifyInstallments"
        }, {
            condition: n,
            flowType: "shopPay"
        }, ...E].find(({
            condition: a
        }) => a) ? .flowType ? ? "regular"
    })
}
const B = () => {
    const {
        schema: {
            postMessageHandler: e
        }
    } = I(), {
        observability: o
    } = P(), t = u((n, s) => {
        o.log("checkout_sheet_protocol_violation_event_emitted", "Emitting event: `violation`."), e({
            type: "violation",
            flowType: s,
            violationErrors: n
        })
    }, [e, o]), r = u((n, s) => {
        o.log("checkout_sheet_protocol_journey_progression_error_event_emitted", "Emitting event: `journeyProgressionError`."), e({
            type: "journeyProgressionError",
            flowType: s,
            reasons: n
        })
    }, [e, o]);
    return {
        handleViolationEvent: t,
        handleJourneyProgressionErrorEvent: r
    }
};
export {
    k as C, x as E, H as M, K as P, I as a, Y as b, B as c, j as d, V as p, b as u
};