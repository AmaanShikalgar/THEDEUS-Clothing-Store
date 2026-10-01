import {
    bq as P,
    X as m,
    gY as S,
    gZ as h
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    c as l
} from "./esnext-vendor.BDPAaZdq.js";
const _ = new Map([
        ["paymentOnDelivery", "PAYMENT_ON_DELIVERY"],
        ["offsite", "OFFSITE"],
        ["manualPayment", "MANUAL_PAYMENT"],
        ["customManualPayment", "CUSTOM_MANUAL_PAYMENT"]
    ]),
    R = e => {
        if (!e ? .length) return;
        const t = e.filter(n => !P(n));
        if (!t.length) return;
        if (m(t, "APPLE_PAY")) return "APPLE_PAY";
        if (S(t)) return "IDEAL";
        if (h(t)) return "CUSTOM_ONSITE";
        const r = t.find(n => _.has(n.method.type));
        return r ? _.get(r.method.type) : "CREDIT_CARD"
    };

function T(e, t, r) {
    const n = window.webkit ? .messageHandlers ? .CheckoutSheetProtocolConsumer,
        c = window.CheckoutSheetProtocolConsumer,
        o = [n, c, r];
    for (const s of o)
        if (s && typeof s ? .postMessage == "function") try {
            const a = {
                name: t.handlerId,
                body: JSON.stringify(t.body)
            };
            return e.log("checkout_sheet_protocol_client_message_posted", "Posting message to checkout sheet protocol consumer.", {
                handlerId: t.handlerId
            }), s.postMessage(JSON.stringify(a)), e.counter({
                name: "checkout_sheet_protocol_event_emitted",
                value: 1,
                exportImmediately: !0,
                attributes: {
                    event: String(t.handlerId),
                    status: "success"
                }
            }), !0
        } catch (a) {
            return e.log("checkout_sheet_protocol_client_message_posting_failed", "Error posting message to checkout sheet protocol consumer", {
                handlerId: t.handlerId,
                error: a instanceof Error ? a.message : String(a)
            }), e.counter({
                name: "checkout_sheet_protocol_event_emitted",
                value: 1,
                exportImmediately: !0,
                attributes: {
                    event: String(t.handlerId),
                    status: "failed"
                }
            }), console.info("Error received when posting message to checkout sheet protocol consumer", t, a), !1
        }
    return e.log("checkout_sheet_protocol_client_no_consumer_found", "No checkout sheet protocol consumer found", {
        handlerId: t.handlerId
    }), e.counter({
        name: "checkout_sheet_protocol_event_emitted",
        value: 1,
        exportImmediately: !0,
        attributes: {
            event: String(t.handlerId),
            status: "no_consumer"
        }
    }), !1
}

function H() {
    const e = window.opener || (window.parent === window ? void 0 : window.parent);
    return e ? {
        postMessage(t) {
            e.postMessage({
                _ecp: "2025-10",
                data: t
            }, "*")
        }
    } : void 0
}
const g = "SHOP_CASH",
    E = "SHOP_CASH_BALANCE",
    O = "SHOP_DISCOUNT_OFFER",
    I = "SHOP_PROMOTION",
    y = [E, O, I],
    L = {
        SHOP_CASH_BALANCE: null,
        SHOP_DISCOUNT_OFFER: null,
        SHOP_PROMOTION: []
    };
var A = (e => (e.ShopCashMerchantNotSupported = "SHOP_CASH_MERCHANT_NOT_SUPPORTED", e.ShopCashInvalidShippingAddress = "SHOP_CASH_INVALID_SHIPPING_ADDRESS", e.ShopCashInvalidBillingAddress = "SHOP_CASH_INVALID_BILLING_ADDRESS", e.ShopCashInsufficientFundingLedgerBalance = "INSUFFICIENT_FUNDING_LEDGER_BALANCE", e.ShopCashCheckoutNotReadyToFetch = "SHOP_CASH_CHECKOUT_NOT_READY_TO_FETCH", e.ShopCashCreditCardVaultedRequired = "CREDIT_CARD_VAULT_REQUIRED", e.ShopCashNotAvailable = "SHOP_CASH_NOT_AVAILABLE", e))(A || {});
const u = (e, t = 2) => Math.round(e * 10 ** t) / 10 ** t,
    d = e => ({ ...e,
        amount: u(e.amount, l(e.currencyCode))
    }),
    N = {
        USD: .5,
        AED: 2,
        ARS: .5,
        AUD: .5,
        BRL: .5,
        CAD: .5,
        CHF: .5,
        COP: .5,
        CZK: 15,
        DKK: 2.5,
        EUR: .5,
        GBP: .3,
        HKD: 4,
        HUF: 175,
        IDR: .5,
        ILS: .5,
        INR: .5,
        JPY: 50,
        KRW: 50,
        MXN: 10,
        MYR: 2,
        NOK: 3,
        NZD: .5,
        PHP: .5,
        PLN: 2,
        RON: 2,
        RUB: .5,
        SEK: 3,
        SGD: .5,
        THB: 10,
        ZAR: .5
    },
    i = .5,
    p = e => e ? N[e] ? ? i : i;

function f(e, t) {
    if (!t) return e;
    const r = [];
    let n = t;
    for (const c of e) {
        if (n.amount <= 0) break;
        const o = c.availableBalance;
        if (!o || o.amount <= 0) continue;
        const s = o.amount >= n.amount ? { ...c,
            availableBalance: n
        } : c;
        r.push(s), n = d({
            amount: n.amount - s.availableBalance.amount,
            currencyCode: n.currencyCode
        })
    }
    return C(r, n)
}

function U(e, t) {
    return !e || !t ? e : f([e], t)[0] ? ? null
}

function C(e, t) {
    const r = p(t.currencyCode);
    if (t.amount <= 0 || t.amount >= r) return e;
    const n = l(t.currencyCode),
        c = [...e];
    let o = u(r - t.amount, n);
    for (; o > 0;) {
        const s = c.pop();
        if (!s) break;
        const a = s.availableBalance;
        a.amount > o ? (c.push({ ...s,
            availableBalance: d({
                amount: a.amount - o,
                currencyCode: a.currencyCode
            })
        }), o = 0) : o = u(o - a.amount, n)
    }
    return c
}
export {
    L as E, A as S, g as a, O as b, I as c, U as d, E as e, y as f, p as g, d as h, f as i, R as j, H as k, T as p, u as r
};