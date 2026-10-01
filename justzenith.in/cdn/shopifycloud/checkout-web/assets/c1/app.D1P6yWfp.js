const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["context-browser.Dp9ku7jw.js", "esnext-vendor.BDPAaZdq.js", "hooks-useReplaceShopPayInHistory.C8UL-mAH.js", "assets/useReplaceShopPayInHistory.BpuyvRSB.css", "PayButton-helpers.Dg5kgVMm.js", "graphql-PaymentSessionMutation.BhOnX3QJ.js", "helpers-setAddressErrors.BA8OjimY.js", "utilities-stable-ref.Dvd2X3ul.js", "addresses-is-address-empty.Ch6V3XcM.js", "checkout-updaters-helpers.BAeH3ddd.js", "shared-receipt-mapper-load-recovery.C9sfUBl4.js", "shared-receipt-eager-mappers.CpLC5HH7.js", "shared-report-graphql-error.d-L7q9TK.js", "shop-pay-normalizeBuyerDetails.ThnUnxcv.js", "helpers-derivations.DLW2fhKL.js", "redemption-promotions.CgqGtCd-.js", "helpers-credit-card-disabled.BnSr1GsQ.js", "hydrate.B0xlt2dG.js", "helpers-getNormalizedPaymentMethodName.B-mE5wnL.js", "shared-permissions.BaDWlj5_.js", "hooks-useShopPayExternalAppContext.DyGXtar4.js", "assets/previous.SPd9u6sV.css"]))) => i.map(i => d[i]);
import {
    m as ee,
    b6 as $,
    y as q,
    E as te,
    j as ne,
    G as re
} from "./esnext-vendor.BDPAaZdq.js";
const oe = "modulepreload",
    ie = function(e) {
        return "/cdn/shopifycloud/checkout-web/assets/c1/" + e
    },
    O = {},
    M = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let p = function(l) {
                return Promise.all(l.map(f => Promise.resolve(f).then(u => ({
                    status: "fulfilled",
                    value: u
                }), u => ({
                    status: "rejected",
                    reason: u
                }))))
            };
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                a = i ? .nonce || i ? .getAttribute("nonce");
            o = p(n.map(l => {
                if (l = ie(l), l in O) return;
                O[l] = !0;
                const f = l.endsWith(".css"),
                    u = f ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${l}"]${u}`)) return;
                const d = document.createElement("link");
                if (d.rel = f ? "stylesheet" : oe, f || (d.as = "script"), d.crossOrigin = "", d.href = l, a && d.setAttribute("nonce", a), document.head.appendChild(d), f) return new Promise((E, g) => {
                    d.addEventListener("load", E), d.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function s(i) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i
        }
        return o.then(i => {
            for (const a of i || []) a.status === "rejected" && s(a.reason);
            return t().catch(s)
        })
    };
typeof window < "u" && typeof window.Element < "u" && (Element.prototype.closest = Element.prototype.closest ? ? function(t) {
    let n = this;
    for (; n != null;) {
        if (n.matches(t)) return n;
        const r = n.parentElement ? ? n.parentNode;
        n = r != null && r.nodeType === 1 ? r : null
    }
    return null
}, Element.prototype.matches = Element.prototype.matches ? ? Element.prototype.msMatchesSelector ? ? Element.prototype.webkitMatchesSelector);
const se = 50;

function ae(e) {
    const t = Date.now();
    return window.setTimeout(() => {
        e({
            didTimeout: !1,
            timeRemaining() {
                return Math.max(0, se - (Date.now() - t))
            }
        })
    }, 0)
}

function ce(e) {
    window.clearTimeout(e)
}
if (typeof window < "u") {
    const e = typeof window.requestIdleCallback != "function",
        t = typeof window.cancelIdleCallback != "function";
    (e || t) && (window.requestIdleCallback = ae, window.cancelIdleCallback = ce)
}

function le(e) {
    const t = {};
    for (const n of e) {
        if (Object(n) !== n) throw new TypeError(`Iterator value ${n} is not an entry object`);
        const {
            "0": r,
            "1": o
        } = n;
        Object.defineProperty(t, r, {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: o
        })
    }
    return t
}
Object.fromEntries = Object.fromEntries ? ? le;

function de(e) {
    const t = Number.isNaN(e) || e === void 0 ? 0 : Math.trunc(e),
        n = t < 0 ? t + this.length : t;
    return this[n]
}
typeof Array.prototype.at != "function" && (Array.prototype.at = de);
const ue = Element.prototype.insertBefore,
    fe = Element.prototype.appendChild;
Element.prototype.insertBefore = function(e, t) {
    try {
        const n = !e || !(e instanceof Node),
            r = e instanceof Text && t instanceof HTMLElement && t ? .localName === "font";
        return n || r || K(e) ? e : ue.apply(this, [e, t])
    } catch {
        return e
    }
};
Element.prototype.appendChild = function(e) {
    try {
        const t = !e || !(e instanceof Node),
            n = e instanceof Text && this.firstChild instanceof HTMLElement && this.firstChild.localName === "font";
        return t || n || K(e) ? e : fe.apply(this, [e])
    } catch {
        return e
    }
};

function K(e) {
    if (!(e instanceof HTMLScriptElement) || !e.textContent) return !1;
    try {
        return new Function(e.textContent), !1
    } catch (t) {
        return console.warn("Blocked script with invalid JavaScript content:", {
            source: e.src || "inline script",
            contentPreview: `${e.textContent.slice(0,100)}...`,
            error: t instanceof Error ? t.message : String(t)
        }), !0
    }
}
if (typeof performance < "u") try {
    const e = performance.measure.bind(performance),
        t = performance.mark.bind(performance);
    performance.measure = function(...r) {
        try {
            return e.call(this, ...r)
        } catch {
            return L("measure", String(r[0]))
        }
    }, performance.mark = function(...n) {
        try {
            return t.call(this, ...n)
        } catch {
            return L("mark", String(n[0]))
        }
    }
} catch {}

function L(e, t) {
    const n = {
        startTime: 0,
        duration: 0,
        entryType: e,
        name: t
    };
    return { ...n,
        detail: void 0,
        toJSON: () => n
    }
}
typeof window < "u" && (window.ShopPay = {});
const pe = "checkout:cf-challenge",
    X = "checkout-web:cf-challenge-reloads",
    me = 2,
    he = 300 * 1e3;

function ye(e) {
    try {
        const t = sessionStorage.getItem(X);
        if (!t) return [];
        const n = JSON.parse(t);
        return Array.isArray(n) ? n.filter(r => typeof r == "number" && r <= e && e - r < he) : []
    } catch {
        return []
    }
}

function Ee(e) {
    try {
        return sessionStorage.setItem(X, JSON.stringify(e)), !0
    } catch {
        return !1
    }
}

function F(e) {
    window.dispatchEvent(new CustomEvent(pe, {
        detail: e
    }))
}
if (typeof window < "u") {
    const e = window.fetch;
    let t = !1,
        n = !1;
    const r = () => {
        const o = Date.now(),
            s = ye(o);
        if (s.length >= me) {
            n || (n = !0, F({
                event: "reload_suppressed",
                reloadCount: s.length,
                budgetTracked: !0
            }));
            return
        }
        t = !0;
        const i = Ee([...s, o]);
        F({
            event: "reload",
            reloadCount: s.length + 1,
            budgetTracked: i
        }), window.location.reload()
    };
    window.fetch = async (...o) => {
        const s = await e(...o);
        return !t && !s.ok && s.headers.get("cf-mitigated") === "challenge" && r(), s
    }
}
const c = {
        pendingTransition: !1,
        transitionTypes: [],
        inflightTransition: void 0,
        inflightTransitionTypes: [],
        scheduled: !1,
        containers: new Set,
        get prefersReducedMotion() {
            return typeof window < "u" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
        }
    },
    ge = '[role="dialog"][aria-modal="true"]';

function Te(e, t = [], {
    interrupt: n = !1,
    replace: r = !1
} = {}) {
    if (typeof window > "u") {
        e();
        return
    }
    c.transitionTypes = c.pendingTransition && !r ? [...new Set([...c.transitionTypes, ...t])] : t, c.pendingTransition = !0, e(), n && c.inflightTransition ? .skipTransition()
}

function tt() {
    return c.inflightTransitionTypes.some(e => e === "payment-details-slide-start" || e === "payment-details-slide-end")
}

function nt() {
    return c.inflightTransitionTypes.includes("payment-details-slide-start") ? "start" : "end"
}
class we extends ee {#
    e;#
    t;
    constructor(t, n, r) {
        super(t), this.#e = n, this.#t = r
    }
    get value() {
        return super.value
    }
    set value(t) {
        this.#e ? .(this.peek(), t) ? ? !0 ? Te(() => {
            super.value = t
        }, this.#t) : super.value = t
    }
}

function rt(e, t, n) {
    return new we(e, t, n)
}
const _e = ["Load failed", "Failed to fetch", "when attempting to fetch resource", "SystemJS https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3"],
    J = ["Importing a module script failed.", "Failed to fetch dynamically imported module", "error loading dynamically imported module", "Cannot load script due to integrity mismatch"],
    ot = ["TranslationNotStringError", "MissingReplacementError", "CardFieldsSetupError", "CardFieldsLoadError", "IFrameNotFoundError", "CardFieldsFetchFailureError", "CardFieldsOperationalError", "PayPalAPIError", "WalletProviderFailureError", "AbortedSessionError", "AbortError", "GraphQLFetchNetworkError", "MonorailRequestError", "BreadcrumbsPluginFetchError", "OpenTelemetryClientError", "InsecurePageError", "UnsafeURLError", "GraphQLFetchHttpBadRequestError", "GraphQLFetchHttpStatusError", "GraphQLFetchHttpContentTypeError", "GraphQLFetchJsonParseError", "SettingsCreateError", "MerchantCommunicationError", "PostPurchase::ClientJsonParseError", "MissingAppContextError", "MissingContextError"];

function it(e) {
    return e.name === "TypeError" && J.some(t => e.message.includes(t))
}

function st(e) {
    return _e.some(t => e.message.includes(t))
}
class h extends Error {
    constructor(t, n = {}) {
        super(t, n), this.metadata = n.metadata ? ? {}, this.instanceGroupingHash = n.groupingHash, this.unactionable = !1, "captureStackTrace" in Error && Error.captureStackTrace(this, this.constructor)
    }
    get groupingHash() {
        return this.instanceGroupingHash ? ? this.defaultGroupingHash ? ? this.name
    }
    isUnactionable() {
        return this.unactionable
    }
}
class at extends h {
    constructor(t, n = {}) {
        super(t, n)
    }
}
class Se extends h {
    constructor() {
        super(...arguments), this.name = "DynamicImportError", this.unactionable = !0
    }
}
class be extends h {
    constructor() {
        super(...arguments), this.name = "ViewTransitionRenderError", this.defaultGroupingHash = "ViewTransitionRenderError"
    }
}

function Ae(e) {
    return e.name === "TypeError" ? `ViewTransitionRenderError: ${e.message}` : `ViewTransitionRenderError: ${e.name}`
}

function ve(e, t) {
    return t === void 0 || Object.defineProperty(e, "groupingHash", {
        value: t,
        enumerable: !1,
        configurable: !0
    }), e
}
const W = (() => {
        if (!document.startViewTransition) return () => !1;
        try {
            const e = document.startViewTransition({
                update: () => {},
                types: []
            });
            return e.skipTransition(), e.ready.catch(() => {}), () => !0
        } catch {
            return () => !1
        }
    })(),
    A = "modal-content-cross-fade",
    Ce = new Set(["payment-icons", A]),
    Ie = new Set(["delivery-slide-start", "delivery-slide-end", "payment-icons", A, "payment-selector-change", "payment-details-slide-start", "payment-details-slide-end", "money-lines"]),
    ke = new Set(["payment-details-slide-start", "payment-details-slide-end"]);

function D() {
    if (!c.inflightTransition) return !1;
    const e = c.inflightTransitionTypes;
    return e.length === 0 || !e.every(t => ke.has(t))
}

function H() {
    const e = c.inflightTransition;
    if (!e) return !1;
    const t = c.inflightTransitionTypes;
    return t.length > 0 && t.every(r => Ie.has(r)) ? (e.skipTransition(), !0) : !1
}

function Pe() {
    let e = !1;
    document.addEventListener("keydown", () => {
        H()
    }, {
        capture: !0,
        passive: !0
    }), document.addEventListener("pointerdown", () => {
        e = H()
    }, {
        capture: !0,
        passive: !0
    }), document.addEventListener("pointercancel", () => {
        e = !1
    }, {
        capture: !0,
        passive: !0
    }), document.addEventListener("click", t => {
        e && (e = !1, t.target === document.documentElement && Ne(t) && t.stopImmediatePropagation())
    }, {
        capture: !0
    })
}
Pe();

function Ne({
    clientX: e,
    clientY: t,
    ctrlKey: n,
    metaKey: r,
    shiftKey: o,
    altKey: s,
    detail: i
}) {
    const a = document.elementFromPoint(e, t);
    return !a || a === document.documentElement || a.closest("[inert], :disabled") ? !1 : (a.closest("input, textarea, select, [contenteditable]") ? .focus(), a.dispatchEvent(new MouseEvent("click", {
        bubbles: !0,
        cancelable: !0,
        clientX: e,
        clientY: t,
        ctrlKey: n,
        metaKey: r,
        shiftKey: o,
        altKey: s,
        detail: i
    })), !0)
}
$.debounceRendering = e => {
    if (!c.scheduled) {
        if (c.scheduled = !0, !C() && !D()) {
            queueMicrotask(() => {
                if (C() || D()) {
                    x(e);
                    return
                }
                Q(e)
            });
            return
        }
        x(e)
    }
};

function C() {
    const e = document.querySelectorAll(ge),
        t = c.transitionTypes,
        n = t.length > 0 && t.every(o => Ce.has(o)),
        r = t.includes(A);
    return c.pendingTransition && !c.prefersReducedMotion && !(typeof window < "u" && window !== window.parent) && !document.hidden && W() && (e.length === 0 || n) && (!r || e.length === 1)
}

function Q(e) {
    const t = c.pendingTransition,
        n = c.transitionTypes;
    c.pendingTransition = !1, c.transitionTypes = [], c.scheduled = !1;
    try {
        e()
    } catch (r) {
        const o = r instanceof Error ? r.message : String(r);
        if (J.some(s => o.includes(s))) throw new Se(o); {
            const s = r instanceof Error ? Ae(r) : void 0;
            throw ve(new be(`Error during render (no view transition): ${o}`, {
                cause: r,
                groupingHash: s,
                metadata: {
                    prefersReducedMotion: c.prefersReducedMotion,
                    pendingTransition: t,
                    transitionTypes: n,
                    isInIframe: typeof window < "u" && window !== window.parent,
                    supportsViewTransitions: W(),
                    ...Oe(r)
                }
            }), s)
        }
    }
}
const Re = "view-transition-generated-names";

function _(e) {
    return `@layer ${Re} {${e}}`
}
async function x(e) {
    if (await (c.inflightTransition ? .finished ? ? Promise.resolve()), !C()) {
        Q(e);
        return
    }
    const n = c.transitionTypes.includes(A),
        r = new Map,
        o = document.createElement("style");
    let s = 0,
        i = 0;

    function a() {
        if (n) return _("");
        let u = "";
        for (const d of c.containers) {
            let E = 1;
            d.dataset.vtContainerId = `${s++}`;
            for (const g of d.children) {
                const w = `vt-${i++}`;
                r.set(g, w), u += `
              [data-vt-container-id="${d.dataset.vtContainerId}"] > :nth-child(${E++}) {
                view-transition-name: ${w};
            }
          `
            }
        }
        return _(u)
    }

    function p() {
        if (n) return _("");
        let u = "";
        for (const d of c.containers) {
            let E = 1;
            for (const g of d.children) {
                const w = r.get(g);
                d.dataset.vtContainerId || (d.dataset.vtContainerId = `${s++}`), u += `
              [data-vt-container-id="${d.dataset.vtContainerId}"] > :nth-child(${E++}) {
                view-transition-name: ${w??`vt-${i++}`};
              }
            `
            }
        }
        return _(u)
    }
    o.innerHTML = a(), document.head.appendChild(o);
    const l = c.transitionTypes ? .length ? c.transitionTypes : void 0;
    c.transitionTypes = [];
    const f = document.startViewTransition({
        update: () => {
            c.scheduled = !1, e(), o.innerHTML = p()
        },
        types: l
    });
    c.inflightTransition = f, c.inflightTransitionTypes = l ? [...l] : [], f.ready.catch(() => {}), f.updateCallbackDone.then(() => {
        c.pendingTransition = !1
    }).catch(() => {}), f.finished.finally(() => {
        c.inflightTransition = void 0, c.inflightTransitionTypes = [], document.head.removeChild(o);
        for (const u of c.containers) delete u.dataset.vtContainerId
    }).catch(() => {})
}

function Oe(e) {
    const t = {};
    e instanceof Error && (t.originalErrorName = e.name, t.originalErrorMessage = e.message, t.originalErrorStack = e.stack);
    try {
        const n = document.querySelectorAll("script[integrity]"),
            r = n.length;
        t.scriptsWithIntegrityCount = r, t.scriptsWithIntegrity = Array.from(n).slice(0, 10).map(o => ({
            src: o.getAttribute("src"),
            integrity: o.getAttribute("integrity")
        }))
    } catch {}
    try {
        const n = document.querySelector('script[type="importmap"], script[type="systemjs-importmap"]');
        if (n ? .textContent) {
            const r = JSON.parse(n.textContent);
            if (r.integrity != null && typeof r.integrity == "object" && !Array.isArray(r.integrity)) {
                const o = Object.entries(r.integrity);
                t.importMapIntegrityCount = o.length, t.importMapIntegritySample = Object.fromEntries(o.slice(0, 10))
            }
        }
    } catch {}
    return t
}
const k = "fast-thank-you-progress-root",
    Me = ".LoadingShellMainContentPrimary, .LoadingShellOrderSummaryContentPrimary";

function Le(e, t) {
    return e !== "/processing" && e !== "/thank-you" || t === void 0 || t === "action_required" || t === "failed" || t === "abandoned"
}
const Fe = 100,
    De = 150,
    He = 1e4;
class ct {
    constructor({
        progress: t
    } = {}) {
        this.#e = q("pending"), this.phase = this.#e, this.isRevealing = te(() => this.#e.value === "revealing"), this.progress = t
    }#
    e;
    reveal() {
        this.#t("pending", "revealing")
    }
    settle() {
        this.#t("revealing", "settled")
    }
    skip() {
        this.#t("pending", "settled")
    }#
    t(t, n) {
        this.#e.peek() === t && (this.#e.value = n)
    }
}
class lt {
    constructor() {
        this.#e = q("loading"), this.phase = this.#e, this.#n = new Promise(t => {
            this.#t = t
        })
    }#
    e;#
    t;#
    n;#
    r;
    complete() {
        this.#o("completing")
    }
    cancel() {
        this.#o("cancelled")
    }
    fill() {
        return this.#r ? ? = this.#i(), this.#r
    }
    async# i() {
        if (await this.#n, this.#e.peek() !== "completing") return;
        const t = document.getElementById(k) ? .querySelector(".FastThankYouReceiptProgressBar");
        t && await xe(t), this.#e.value = "complete"
    }#
    o(t) {
        this.#e.peek() === "loading" && (this.#e.value = t, this.#t())
    }
}
async function xe(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof e.animate != "function") e.style.animation = "none", e.style.transform = "scaleX(1)";
    else {
        const t = getComputedStyle(e).transform;
        e.style.animation = "none", await e.animate([{
            transform: t
        }, {
            transform: "scaleX(1)"
        }], {
            duration: Fe,
            easing: "ease-out",
            fill: "forwards"
        }).finished.catch(() => {}), await new Promise(r => setTimeout(r, De))
    }
    await U(), await U()
}

function U() {
    return new Promise(e => {
        requestAnimationFrame(() => e())
    })
}

function Ue() {
    document.getElementById("app") ? .removeAttribute("inert"), document.querySelectorAll(Me).forEach(e => e.removeAttribute("aria-hidden")), document.querySelectorAll(".LoadingShell-fastThankYouProgressCover").forEach(e => e.classList.remove("LoadingShell-fastThankYouProgressCover")), document.getElementById(k) ? .remove()
}

function z() {
    return document.getElementById(k) !== null
}

function dt(e, {
    currentUrl: t,
    latestReceipt: n
}) {
    const r = setTimeout(() => e.cancel(), He),
        o = ne(function() {
            const i = e.phase.value,
                {
                    normalizedPath: a
                } = t.value,
                p = n.value ? .status;
            re(() => {
                const l = i === "loading" && Le(a, p);
                i === "loading" && !l || (this.dispose(), clearTimeout(r), l && e.cancel(), document.getElementById("app") ? .removeAttribute("inert"))
            })
        });
    return () => {
        clearTimeout(r), o()
    }
}
const Be = 32,
    Ve = 4,
    Z = 10,
    B = 100,
    Ge = 8 * 1024,
    y = Symbol("unreadable"),
    S = $,
    I = new WeakMap;
let b;

function Ye() {
    if (typeof window > "u") return () => {};
    if (b) return b;
    const e = S.__e;

    function t(...r) {
        return je(r[0], r[1]), e.apply(this, r)
    }

    function n() {
        typeof window > "u" || S.__e === t && (S.__e = e, b = void 0)
    }
    return S.__e = t, b = n, n
}

function ut(e) {
    if (typeof window > "u") return;
    const t = I.get(e);
    if (!(!t || t.reported)) return t.reported = !0, t.metadata
}

function je(e, t) {
    if (!(typeof window > "u")) try {
        if (!(e instanceof TypeError) || I.has(e)) return;
        const n = Object.getOwnPropertyDescriptor(e, "message");
        if (!n || !("value" in n) || n.value !== "Cannot convert object to primitive value") return;
        const r = {
            reported: !1
        };
        I.set(e, r), r.metadata = qe(t)
    } catch {}
}

function T(e) {
    return typeof e == "object" && e !== null || typeof e == "function"
}

function P(e) {
    return e === y ? "unreadable" : e === null ? "null" : typeof e
}

function N(e, t, n) {
    try {
        return Object.getOwnPropertyDescriptor(e, t)
    } catch {
        return n.inspectionFailed = !0, y
    }
}

function m(e, t, n) {
    if (!T(e)) return;
    const r = N(e, t, n);
    if (r) return r !== y && "value" in r ? r.value : (n.inspectionFailed = !0, y)
}

function v(e, t, n) {
    const r = N(e, t, n);
    return r === y ? {
        kind: "unreadable"
    } : r ? "value" in r ? {
        kind: "data",
        valueType: P(r.value)
    } : {
        kind: "accessor"
    } : {
        kind: "absent"
    }
}

function $e(e, t) {
    const n = {
        category: P(e)
    };
    if (!T(e) || typeof e == "function") return n;
    try {
        n.nullPrototype = Object.getPrototypeOf(e) === null
    } catch {
        t.inspectionFailed = !0
    }
    const r = N(e, Symbol.toStringTag, t);
    return n.moduleLike = r !== y && r !== void 0 && "value" in r && r.value === "Module", n.defaultProperty = v(e, "default", t), n.toStringProperty = v(e, "toString", t), n.valueOfProperty = v(e, "valueOf", t), n
}

function V(e, t) {
    const n = [],
        r = new Set;
    let o = e;
    for (; T(o) && n.length < Z && !r.has(o);) {
        r.add(o);
        const s = m(o, "type", t),
            i = {
                category: P(s)
            };
        if (typeof s == "function") {
            const a = m(s, "displayName", t),
                p = typeof a == "string" && a.length > 0 ? a : m(s, "name", t);
            typeof p == "string" && (i.name = p.slice(0, B), i.nameTruncated = p.length > B)
        }
        n.push(i), o = m(o, "__", t)
    }
    return {
        type: $e(m(e, "type", t), t),
        ancestry: Object.fromEntries(n.map((s, i) => [i, s])),
        ancestryTruncated: T(o)
    }
}

function qe(e) {
    const t = {
        version: 1,
        inspectedNodeCount: 0,
        candidateCount: 0,
        scanTruncated: !1,
        candidatesTruncated: !1,
        inspectionFailed: !1,
        outputTruncated: !1,
        catchVNode: {
            type: {
                category: "unreadable"
            },
            ancestry: {},
            ancestryTruncated: !1
        },
        candidates: {}
    };
    t.catchVNode = V(e, t);
    const n = [e],
        r = new Set;
    for (const i of n) {
        if (!T(i) || r.has(i)) continue;
        r.add(i), t.inspectedNodeCount++;
        const a = m(i, "type", t);
        a !== y && a !== null && a !== void 0 && typeof a != "string" && typeof a != "function" && (t.candidateCount < Ve ? t.candidates[t.candidateCount++] = V(i, t) : t.candidatesTruncated = !0);
        try {
            const p = m(i, "__k", t);
            if (!Array.isArray(p)) continue;
            const l = m(p, "length", t);
            if (typeof l != "number") continue;
            const f = Math.min(l, Be - n.length);
            f < l && (t.scanTruncated = !0);
            for (let u = 0; u < f; u++) n.push(m(p, u, t))
        } catch {
            t.inspectionFailed = !0
        }
    }
    const o = [t.catchVNode, ...Object.values(t.candidates)],
        s = new TextEncoder;
    for (let i = Z - 1; i >= 0; i--)
        for (const a of o) {
            if (s.encode(JSON.stringify(t)).byteLength <= Ge) return t;
            a.ancestry[i] && (delete a.ancestry[i], a.ancestryTruncated = !0, t.outputTruncated = !0)
        }
    return t
}
const ft = "e_e5eef1f760ed55e19c6defbc6ce215af",
    pt = "e_bdd4ad9fc347bfc12f78dabcc6059bc7",
    mt = "e_6221c0aa1c5a577e83a5c1e4c9b3d592",
    ht = "e_2e28467f22ae5396e5a4d2b8e02c531e",
    yt = "e_5494add585d1f70ed2467b09056b8914",
    Et = "e_178b603bb3abd8a0d967da5edd358635",
    Ke = "e_fd1e35bf8f1ad8ee87a7dc13dba7b296",
    gt = "e_ba10a6a3303393a1e759ef39209360d2",
    G = Symbol("checkout-web.skeletonRemovalLatch");

function R(e) {
    const t = e;
    let n = t[G];
    if (!n) {
        let r = () => {};
        n = {
            promise: new Promise(s => {
                r = s
            }),
            resolve: r,
            removed: !1
        }, t[G] = n
    }
    return n
}

function Tt() {
    return typeof document > "u" ? new Promise(() => {}) : R(document).promise
}

function Xe(e) {
    const t = R(e);
    t.removed = !0, t.resolve()
}

function wt(e) {
    return R(e).removed
}

function Je(e, t) {
    const n = z();
    n && Ue();
    const r = e.querySelector(".client-terminal-error-page__stack-trace");
    return r && r.remove(), e.style.display = "block", n ? (document.querySelector(".LoadingShell") ? .remove(), document.body ? .classList.remove("Loading"), Xe(document), !0) : !1
}
Ye();
We();
async function We() {
    const e = performance.now();
    let t;
    try {
        const [{
            buildAppContextForBrowser: n
        }, {
            hydrateApp: r,
            renderTerminalError: o
        }] = await Promise.all([M(() =>
            import ("./context-browser.Dp9ku7jw.js").then(d => d.b), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])), M(() =>
            import ("./hydrate.B0xlt2dG.js").then(d => d.jF), __vite__mapDeps([17, 1, 2, 3, 18, 19, 20, 21]))]), s = performance.now();
        await Y();
        const i = performance.now(),
            a = document.getElementById("app"),
            p = document.getElementById("terminal-error-page"),
            l = await n({
                rootElement: a,
                onTerminalError: o({
                    rootElement: a,
                    terminalErrorPageElement: p
                }),
                eagerAppMetafieldsExperiment: Ke
            }),
            f = performance.now();
        if (l.status === "error") throw t = l.errorHandlingContext, l.error;
        t = l.appContext;
        const u = l.appContext;
        await r(u, {
            bootStartTime: e,
            bootPhaseTimings: {
                importsCompleteTime: s,
                bootUnblockedTime: i,
                appContextBuiltTime: f
            }
        })
    } catch (n) {
        if (t) await t.terminalErrorHandler.notify(n);
        else if (z()) {
            await Y();
            const r = document.getElementById("terminal-error-page");
            if (!r) throw n;
            document.getElementById("app") ? .replaceChildren(), Je(r)
        } else throw n
    } finally {
        if (t) {
            const {
                client: {
                    initialRequest: n
                },
                observability: r
            } = t;
            r.counter({
                name: "checkout_web_client_received",
                value: 1,
                attributes: {
                    serverRendered: n.isServerRendered,
                    didHydrate: n.isServerRendered
                }
            })
        }
    }
}
const Qe = Symbol.for("Shopify.checkout.htmlAvailable"),
    ze = "checkout:htmlavailable";
async function Y() {
    window[Qe] || await new Promise(e => {
        document.addEventListener(ze, e, {
            once: !0
        })
    })
}

function _t(e, t) {
    return e === "phone" && t.user.isUnauthenticatedUser.value
}
const St = {
    ACCEPTED: "yes",
    DECLINED: "no",
    NO_INTERACTION: "no_interaction",
    NO_VALUE: ""
};

function Ze(e) {
    return Array.isArray(e ? .lines) ? e.lines.length : void 0
}

function bt(e, t) {
    try {
        if (window.webkit && typeof window.webkit.messageHandlers ? .mobileCheckoutSdk ? .postMessage == "function") {
            const n = {
                name: t.handlerId,
                body: JSON.stringify(t.body)
            };
            return e.log("mobile_checkout_sdk_client_message_posted", "Posting message to webkit client.", {
                handleId: t.handlerId
            }), j(e, t, "webkit"), window.webkit.messageHandlers.mobileCheckoutSdk.postMessage(JSON.stringify(n)), !0
        }
        return window.android && typeof window.android.postMessage == "function" ? (e.log("mobile_checkout_sdk_client_message_posted", "Posting message to android client."), j(e, t, "android"), window.android.postMessage(JSON.stringify({
            name: t.handlerId,
            body: JSON.stringify(t.body)
        })), !0) : (e.log("mobile_checkout_sdk_client_no_message_posted", "Neither window.android or window.webkit postMessage found, cannot post message."), !1)
    } catch (n) {
        return e.log("mobile_checkout_sdk_client_no_message_posted", `Error received when posting message to CSK', ${t}, ${n}`), !1
    }
}

function j(e, t, n) {
    if (t.handlerId !== "completed" || t.body == null) return;
    const o = t.body.orderDetails ? .cart;
    Ze(o) === 0 && e.log("mobile_checkout_sdk_completed_event_empty_cart_lines", "Mobile Checkout SDK completed event has an empty cart lines array.", {
        client: n,
        cartPresent: o != null
    }, {
        exportImmediately: !0
    })
}
class At extends Error {
    constructor(t) {
        super(t), this.name = "CheckoutProtocolUnrecoverableTerminalError", this.reason = t
    }
}
class vt extends h {
    constructor(t) {
        super(t), this.name = "IgnoredApplePayAPIError"
    }
}
class Ct extends h {
    constructor() {
        super(...arguments), this.name = "ApplePayAPIError"
    }
}
class It extends h {
    constructor() {
        super(...arguments), this.name = "AbortedSessionError"
    }
}
class kt extends h {
    constructor() {
        super(...arguments), this.name = "WalletProviderFailureError"
    }
}
class Pt extends h {
    constructor() {
        super(...arguments), this.name = "ApplePaySessionNotReadyError", this.defaultGroupingHash = "ApplePaySessionNotReadyError"
    }
}
export {
    Pt as A, dt as B, St as C, z as D, lt as F, vt as I, ft as J, pt as O, yt as P, h as S, ct as T, ht as U, kt as W, M as _, ot as a, At as b, tt as c, nt as d, st as e, It as f, Ct as g, Te as h, it as i, mt as j, gt as k, J as l, _e as m, ut as n, Et as o, bt as p, at as q, ge as r, _t as s, rt as t, wt as u, c as v, Tt as w, Xe as x, Ue as y, Je as z
};