(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [17263, 57804], {
        90343(e, t, n) {
            const o = {
                "./ben.ts": [57229, [4021]],
                "./en.ts": [34285, []],
                "./guj.ts": [28754, [10090]],
                "./hi.ts": [75137, [9147]],
                "./kan.ts": [91886, [88214]],
                "./mar.ts": [39160, [11172]],
                "./tam.ts": [91090, [47722]],
                "./tel.ts": [73629, [3349]]
            };

            function r(e) {
                try {
                    if (!n.o(o, e)) return Promise.resolve().then((() => {
                        const t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }))
                } catch (e) {
                    return Promise.reject(e)
                }
                const t = o[e],
                    r = t[0];
                return Promise.all(t[1].map(n.e)).then((() => n(r)))
            }
            r.keys = () => Object.keys(o), r.id = 90343, e.exports = r
        },
        94900(e, t, n) {
            "use strict";

            function o(e, t) {
                return e.reduce(((e, n, o, r) => [...e, ...t(n, o, r)]), [])
            }
            n.d(t, {
                A: () => o
            })
        },
        99166(e, t, n) {
            "use strict";

            function o(e) {
                const t = document.documentElement;
                t.style.outlineColor = e;
                return window.getComputedStyle(t).outlineColor.match(/[\.\d]+/g)
            }

            function r(e) {
                const t = o(e);
                return t ? i(t.map(Number)) : []
            }

            function a(e) {
                const t = o(e);
                if (!t) return "";
                const n = t.map(Number);
                return s(n[0], n[1], n[2])
            }

            function c(e) {
                let t, n, o, [r, a, c] = e;
                if (r /= 360, a /= 100, c /= 100, 0 === a) t = n = o = c;
                else {
                    const e = (e, t, n) => (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e),
                        i = c < .5 ? c * (1 + a) : c + a - c * a,
                        s = 2 * c - i;
                    t = e(s, i, r + 1 / 3), n = e(s, i, r), o = e(s, i, r - 1 / 3)
                }
                return [Math.round(255 * t), Math.round(255 * n), Math.round(255 * o)]
            }

            function i(e) {
                let [t, n, o] = e;
                t /= 255, n /= 255, o /= 255;
                const r = Math.max(t, n, o),
                    a = Math.min(t, n, o),
                    c = 50 * (r + a);
                if (r === a) return [0, 0, c];
                const i = r - a,
                    s = 100 * (c > 50 ? i / (2 - r - a) : i / (r + a));
                let u;
                return u = r === o ? (t - n) / i + 4 : r === n ? (o - t) / i + 2 : (n - o) / i + (n < o ? 6 : 0), u *= 60, [Math.round(u), Math.round(s), Math.round(c)]
            }
            n.d(t, {
                B: () => p,
                Jm: () => d,
                K6: () => m,
                LO: () => a,
                Tp: () => r,
                YL: () => c,
                iq: () => o,
                o7: () => i
            });
            const s = (e, t, n) => "#" + [e, t, n].map((e => {
                    const t = e.toString(16);
                    return 1 === t.length ? "0" + t : t
                })).join(""),
                u = e => (e / 255) ** 2.4,
                l = e => {
                    let [t, n, o] = e;
                    const r = .2126729 * u(t) + .7151522 * u(n) + .072175 * u(o);
                    return (a = r) > .022 ? a : Math.abs(.022 - a) ** 1.414 + a;
                    var a
                };

            function m(e) {
                return /^#(?:[0-9a-f]{3}){1,2}$/i.test(e)
            }

            function d(e, t) {
                return [e[0], e[1], t]
            }

            function p(e) {
                return `${e[0].toFixed()}deg ${e[1].toFixed()}% ${e[2].toFixed()}%`
            }
            n.d(t, ["Ob", 0, s, "yi", 0, (e, t) => {
                const n = ((e, t) => {
                        const n = l(e),
                            o = l(t);
                        return Math.abs(n - o) < 5e-4 ? 0 : n > o ? 1.14 * (n ** .56 - o ** .57) : n < o ? 1.14 * (n ** .65 - o ** .62) : 0
                    })(e, t),
                    o = (e => {
                        const t = .035991,
                            n = .027,
                            o = Math.abs(e);
                        return o < .001 ? 0 : o <= t ? e - 27.7847239587675 * e * n : e > t ? e - n : e < -.035991 ? e + n : 0
                    })(n);
                return 100 * o
            }])
        },
        31346(e, t, n) {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var o = n(26718),
                r = n(39221),
                a = n(65878);

            function c(e) {
                const {
                    doc: t = window.document,
                    url: n,
                    method: c = "post",
                    target: i
                } = e;
                let {
                    params: s = {}
                } = e;
                if (s = (0, r.YQ)(s), "get" === c.toLowerCase()) {
                    const e = (0, r.TU)(n, s || "");
                    return void(i ? window.open(e, i) : t !== window.document ? t.location.assign(e) : window.location.assign(e))
                }
                const u = (0, a.n)("form");
                u.method = c, u.action = n, i && (u.target = i), (0, o.Bx)(s) && Object.keys(s).forEach((e => {
                    const t = (0, a.n)("input");
                    t.type = "hidden", t.name = e, t.value = String(s[e]), (0, a.NI)(u, t)
                })), (0, a.NI)(t.body, u), u.submit()
            }
        },
        88795(e, t, n) {
            "use strict";
            n.d(t, {
                Ci: () => m,
                Sh: () => k,
                VU: () => C,
                an: () => l,
                ep: () => f,
                gG: () => E,
                im: () => w
            });
            var o = n(99166),
                r = n(50952),
                a = n(94900);
            var c = function(e) {
                return e.ROUNDED = "rounded", e.SHARP = "sharp", e
            }(c || {});
            const i = "border-radius",
                s = ["Inter", "Montserrat", "Open Sans", "Roboto", "Noto Sans", "Merriweather", "Roboto Slab", "Rokkitt", "Tasa", "Space Grotesk", "Syne", "Familjen Grotesk", "Playfair Display", "Poppins"],
                u = ["Inter", "Tasa"];

            function l(e) {
                let {
                    primaryColor: t,
                    surfaceColor: n,
                    iconColor: o,
                    styleConfig: r,
                    ctaColor: a,
                    ctaTextColor: s,
                    containerSelector: u
                } = e;
                const l = d({
                    primaryColor: t,
                    merchantSurfaceColor: n,
                    merchantIconColor: o,
                    ctaColor: a,
                    ctaTextColor: s
                });
                return `\n  <style>\n    ${u||":root"}{${b(l).map((e=>`--${e.name}: ${v(e.value)};`)).join("\n")}}\n    ${r.map((e=>{let{name:t,selector:n,value:o}=e;return function(e,t,n,o){const r=function(e,t){if("border_radius"===e&&t===c.SHARP)return{cssPropertyName:i,cssPropertyValue:"0px !important"};return null}(e,n);if(r){const{cssPropertyName:e,cssPropertyValue:a}=r,c=`
                $ {
                    e
                }: $ {
                    a
                };
                `;return`
                $ {
                    o ? `${o} [data-${e}=${n}] ${t}` : `[data-${e}=${n}] ${t}`
                } {\
                    n $ {
                        c
                    }\
                    n
                }\
                n $ {
                    o ? `${o}[data-${e}=${n}]${t}` : `[data-${e}=${n}]${t}`
                } {\
                    n $ {
                        c
                    }\
                    n
                }
                `}return null}(t,n,o,u)})).filter(Boolean).join("\n")}\n  </style>`
            }

            function m(e) {
                let {
                    primaryColor: t,
                    surfaceColor: n,
                    iconColor: r,
                    ctaColor: a,
                    ctaTextColor: c
                } = e;
                return b(d({
                    primaryColor: t,
                    merchantSurfaceColor: n,
                    merchantIconColor: r,
                    ctaColor: a,
                    ctaTextColor: c
                })).reduce(((e, t) => {
                    let {
                        name: n,
                        value: r
                    } = t;
                    return e[n] = function(e) {
                        const t = e.match(/^(-?\d+(?:\.\d+)?)deg\s+(-?\d+(?:\.\d+)?)%\s+(-?\d+(?:\.\d+)?)%$/);
                        if (!t) return v(e);
                        const [, n, r, a] = t, [c, i, s] = (0, o.YL)([Number(n), Number(r), Number(a)]);
                        return (0, o.Ob)(c, i, s)
                    }(r), e
                }), {})
            }

            function d(e) {
                let {
                    primaryColor: t,
                    merchantSurfaceColor: n,
                    merchantIconColor: a,
                    ctaColor: c,
                    ctaTextColor: i
                } = e;
                const s = (0, o.Tp)(t),
                    u = n || `hsl(${(0,o.B)((0,o.Jm)(s,99))})`,
                    l = (0, o.Tp)(u),
                    m = f(l, l[2] < 50);
                l[2] >= 98 && (m._ = (0, o.Jm)(l, 100));
                const d = f(s),
                    b = f((0, o.Tp)("#009E5C")),
                    v = f((0, o.Tp)("#ef4444")),
                    C = f((0, o.Tp)("#eab308")),
                    w = f((0, o.Tp)("#0ea5e9")),
                    P = f((0, o.Tp)("#C65C10")),
                    T = f((0, o.Tp)("#F56651")),
                    O = a ? (0, o.Tp)(a) : d[600],
                    M = c ? (0, o.Tp)(c) : m[950];
                return {
                    on: {
                        surface: g(_(m)),
                        primary: g(_(d)),
                        success: g(_(b)),
                        danger: g(_(v)),
                        warning: g(_(C)),
                        info: g(_(w)),
                        notice: g(_(P)),
                        pop: g(_(T)),
                        cta: i ? (0, o.B)((0, o.Tp)(i)) : (0, o.B)(y(M, (0, o.Tp)("#ffffff"), (0, o.Tp)("#000000")))
                    },
                    outline: {
                        surface: {
                            _: (0, o.Tp)("#D9D9D9")
                        }
                    },
                    surface: g(m),
                    primary: g(d),
                    success: g(b),
                    danger: g(v),
                    warning: g(C),
                    info: g(w),
                    notice: g(P),
                    pop: g(T),
                    icon: (0, o.B)(O),
                    cta: (0, o.B)(M),
                    i: {
                        shadow: (0, o.B)([s[0], Math.min(s[1], 60), 25]),
                        midtone: (0, o.B)([s[0], Math.min(s[1], 60), 50]),
                        highlight: (0, o.B)((0, o.Tp)("#fff9e8"))
                    },
                    illustration: {
                        shadow: k(t) ? (0, o.B)([s[0], (0, r.qE)(s[1] - (20 + s[1] / 5), 0, 60), (0, r.qE)(s[2] - 15, 0, 100)]) : (0, o.B)([s[0], (0, r.qE)(s[1] - (1 + s[1] / 10), 0, 90), (0, r.qE)(s[2] - (15 + s[2] / 10), 0, 90)]),
                        midtone: E(t) ? (0, o.B)([s[0], s[1], s[2] + 20 * (1 - s[2] / 100)]) : (0, o.B)(s),
                        highlight: (0, o.B)([s[0], s[1], p(Math.max(s[2] + (k(t) ? 5 : 15), k(t) ? 98 : 95))]),
                        accent: k(t) ? h(s) ? (0, o.B)((0, o.Tp)("#E16E50")) : (0, o.B)([s[0], (0, r.qE)(s[1] - (10 + s[1] / 5), 0, 60), s[2] - 20]) : h(s) ? (0, o.B)((0, o.Tp)("#29CC7A")) : (0, o.B)([s[0], s[1], Math.min(Math.abs(s[2] + ((s[2] < 10 ? 15 : 10) + (100 - s[2]) / 10)), 90)])
                    }
                }
            }

            function p(e) {
                return e <= 100 ? e : 100 - (e - 100)
            }

            function h(e) {
                const t = [
                        [217, 84, 63],
                        [210, 100, 35],
                        [210, 100, 50],
                        [210, 100, 25],
                        [217, 100, 47],
                        [0, 0, 7],
                        [0, 0, 92]
                    ].some((t => t[0] === Math.round(e[0]) && t[1] === Math.round(e[1]) && t[2] === Math.round(e[2]))),
                    n = (0, r.r4)(e[1], 0, 30) && (0, r.r4)(e[2], 0, 20);
                return (0, r.r4)(e[0], 190, 240) && (0, r.r4)(e[1], 0, 20) && (0, r.r4)(e[2], 10, 70) || n || t
            }

            function f(e) {
                let t = [100, 98, 96, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 0];
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (t = t.reverse()), {
                    _: e,
                    0: (0, o.Jm)(e, t[0]),
                    10: (0, o.Jm)(e, t[1]),
                    25: (0, o.Jm)(e, t[2]),
                    50: (0, o.Jm)(e, t[3]),
                    100: (0, o.Jm)(e, t[4]),
                    200: (0, o.Jm)(e, t[5]),
                    300: (0, o.Jm)(e, t[6]),
                    400: (0, o.Jm)(e, t[7]),
                    500: (0, o.Jm)(e, t[8]),
                    600: (0, o.Jm)(e, t[9]),
                    700: (0, o.Jm)(e, t[10]),
                    800: (0, o.Jm)(e, t[11]),
                    900: (0, o.Jm)(e, t[12]),
                    950: (0, o.Jm)(e, t[13]),
                    1e3: (0, o.Jm)(e, t[14])
                }
            }

            function _(e) {
                return {
                    _: y(e._, e[0], e[950]),
                    0: y(e[0], e[0], e[1e3]),
                    10: y(e[10], e[0], e[950]),
                    25: y(e[25], e[0], e[950]),
                    50: y(e[50], e[0], e[950]),
                    100: y(e[100], e[0], e[950]),
                    200: y(e[200], e[0], e[950]),
                    300: y(e[300], e[0], e[950]),
                    400: y(e[400], e[0], e[950]),
                    500: y(e[500], e[0], e[950]),
                    600: y(e[600], e[0], e[950]),
                    700: y(e[700], e[0], e[950]),
                    800: y(e[800], e[0], e[950]),
                    900: y(e[900], e[0], e[950]),
                    950: y(e[950], e[0], e[950]),
                    1e3: y(e[1e3], e[0], e[1e3])
                }
            }

            function g(e) {
                return Object.keys(e).reduce(((t, n) => {
                    const r = e[n];
                    return { ...t,
                        [n]: (0, o.B)(r)
                    }
                }), {})
            }

            function y(e, t, n) {
                return Math.abs((0, o.yi)((0, o.YL)(e), (0, o.YL)(t))) > Math.abs((0, o.yi)((0, o.YL)(e), (0, o.YL)(n))) ? t : n
            }

            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return (0, a.A)(Object.keys(e), (n => {
                    const o = "_" === n ? t : t ? `${t}-${n}` : n,
                        r = e[n];
                    return "string" == typeof r ? [{
                        name: o,
                        value: r
                    }] : b(r, o)
                }))
            }

            function v(e) {
                return e.replace(/[^\w\.#(),% ]/g, "")
            }

            function k(e) {
                try {
                    return (0, o.Tp)(e)[2] >= 90
                } catch (e) {}
                return !1
            }

            function E(e) {
                try {
                    return (0, o.Tp)(e)[2] <= 10
                } catch (e) {}
                return !1
            }

            function C(e) {
                try {
                    return (0, o.Tp)(e)[2]
                } catch (e) {}
                return null
            }

            function w(e) {
                const t = function(e) {
                        if (s.includes(e)) return e;
                        return "Tasa"
                    }(e.heading),
                    n = P(t),
                    o = function(e) {
                        if (e && s.includes(e)) return e;
                        return "Inter"
                    }(e.body),
                    r = o ? P(o) : "",
                    a = [],
                    c = [];
                return c.push(`--merchant-heading-font: "${t}";`), c.push(`--merchant-body-font: "${o}";`), e.fontSize && c.push(`--merchant-font-size: ${e.fontSize};`), (n || r) && (a.push('<link rel="preconnect" href="https://fonts.googleapis.com">'), a.push('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'), n && r && n === r ? a.push(`<link href="https://fonts.googleapis.com/css2?family=${n}:wght@400;500;600&display=swap" rel="stylesheet">`) : (n && a.push(`<link href="https://fonts.googleapis.com/css2?family=${n}:wght@600&display=swap" rel="stylesheet">`), r && a.push(`<link href="https://fonts.googleapis.com/css2?family=${r}:wght@400;500;600&display=swap" rel="stylesheet">`))), `${a.join("\n")}\n          <style>\n            :root{\n              ${c.join("\n              ")}\n            }\n          </style>`
            }

            function P(e) {
                return u.includes(e) ? "" : e.trim().replace(/\s+/g, "+")
            }
            n.d(t, ["Sx", 0, "[class*=rounded]:not(.rounded-full)"])
        },
        28766(e, t, n) {
            "use strict";
            n.d(t, {
                Lj: () => b,
                X9: () => k,
                eM: () => r.eM,
                uj: () => v
            });
            var o = n(65047),
                r = n(30180),
                a = n(72912),
                c = n(31992),
                i = n(37995),
                s = n(67764),
                u = n(15963),
                l = n(45325);
            const m = (0, o.symbol)(),
                d = (0, o.symbol)(),
                p = (0, o.derived)(r.jO, (e => e.filter((e => e.container === m)))),
                h = (0, o.derived)(r.jO, (e => e.filter((e => e.container === d)))),
                f = (0, o.derived)(h, (e => e.length)),
                _ = (0, o.derived)(p, (e => {
                    var t;
                    return (null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.name) ? ? ""
                })),
                g = (0, r.uP)(m),
                y = (0, r.uP)(d);
            async function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ((0, a.yL)(e)) try {
                    e = await e
                } catch (e) {
                    (0, s.handleChunkFailureError)(e, "pushScreen")
                }
                return e && e.component ? (function(e) {
                    try {
                        e.magicInitScreen && (0, u.BJ)("magic"), e.quickbuyInitScreen && (0, u.BJ)("quickbuy")
                    } catch (e) {}
                }(e), g({
                    name: e.name,
                    component: e.component,
                    breadcrumbHighlight: e.breadcrumbHighlight,
                    props: t
                })) : {
                    promise: Promise.resolve()
                }
            }

            function v(e) {
                return b(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).then((e => {
                    const t = (0, c.Jt)(p),
                        n = t[t.length - 1];
                    n && n === e ? t.forEach((e => {
                        var t;
                        e !== n && (null === (t = e.close) || void 0 === t || t.call(e))
                    })) : (0, l.$s)("replace_main_stack_push_not_on_top", {
                        top: (null == n ? void 0 : n.name) ? ? ""
                    })
                })).catch((e => {
                    (0, l.$s)("replace_main_stack_failed", {
                        message: e instanceof Error ? e.message : String(e)
                    })
                }))
            }
            async function k(e) {
                var t, n;
                if ((0, a.yL)(e) && (e = await e), e) return b(e).catch((() => {})),
                    function(e) {
                        !(0, i.P)() && e.magicInitScreen && (0, i.C)()
                    }(e), k(null === (t = e) || void 0 === t || null === (n = t.next) || void 0 === n ? void 0 : n.call(t));
                performance.mark("stack-population-end")
            }
            n.d(t, ["BH", 0, y, "Nm", 0, _, "Rx", 0, g, "eU", 0, p, "ff", 0, h, "jL", 0, f, "kA", 0, m, "pp", 0, d])
        },
        46684(e, t, n) {
            "use strict";
            n.d(t, ["dH", 0, {
                "v2-entry.js": "v2-entry.js",
                "v2-entry.modern.js": "v2-entry.modern.js",
                "v1-preferences": "v1/preferences?",
                "v2-preferences": "v2/preferences?",
                "v2-entry-app": "v2-entry-app-",
                "v2-entry-loader": "v2-entry-loader-",
                "keyless-auth-api": "v1/checkout/keyless_auth?"
            }, "iG", 0, {
                "v2-offers": "v2-entry-offers",
                "validate-offers": "validate/checkout/offers"
            }])
        },
        68241(e, t, n) {
            "use strict";
            n.d(t, {
                K0: () => l,
                am: () => i,
                dN: () => s,
                mD: () => m,
                zJ: () => u
            });
            var o = n(95574),
                r = n(26718),
                a = n(46684),
                c = n(58383);

            function i(e) {
                return Object.keys(e).map((t => {
                    const n = (0, o.V)(e[t]);
                    return !(0, r.RI)(n) && {
                        [t]: n
                    }
                })).filter((e => e)).reduce(((e, t) => e = { ...e,
                    ...t
                }), {})
            }

            function s() {
                return i(a.dH)
            }

            function u() {
                const e = (0, c.s_)(),
                    t = (0, c.qv)();
                return e && t ? {
                    tti: t - e,
                    open_timestamp: e,
                    tti_timestamp: t
                } : null
            }

            function l() {
                return performance.getEntries().filter((e => "mark" === e.entryType)).reduce(((e, t) => (e[t.name] = t.startTime, e)), {})
            }

            function m() {
                try {
                    return performance.getEntriesByType("resource").filter((e => ["script", "link", "css", "xmlhttprequest"].includes(e.initiatorType) && e.name.indexOf("/payment/status") < 0 && e.name.indexOf("w.clarity.ms/collect") < 0 && e.name.indexOf("lumberjack.razorpay.com") < 0)).reduce(((e, t) => {
                        let n = t.name;
                        return n = "xmlhttprequest" !== t.initiatorType ? n.split("/").pop() : n.split("?")[0], e.push({
                            n,
                            s: Math.round(t.startTime),
                            d: Math.round(t.duration),
                            i: t.initiatorType
                        }), e
                    }), [])
                } catch (e) {
                    return []
                }
            }
        },
        37995(e, t, n) {
            "use strict";
            n.d(t, {
                C: () => u,
                P: () => s
            });
            var o = n(68241),
                r = n(26718),
                a = n(58383),
                c = n(9571),
                i = n(47783);

            function s() {
                try {
                    return [...performance.getEntries()].filter((e => "mark" === e.entryType && "checkout-interactive" === e.name)).length
                } catch (e) {
                    return !0
                }
            }

            function u() {
                s() || (performance.mark("checkout-interactive"), (0, a.gE)(Date.now()), setTimeout(l, 1e4))
            }

            function l() {
                const e = (0, o.zJ)();
                (0, r.Bx)(e) && ((0, i.log)({
                    name: "checkout_tti",
                    properties: { ...e,
                        timeline: (0, o.K0)()
                    }
                }), (0, c.trackMetrics)("tti", null == e ? void 0 : e.tti), (0, i.log)({
                    name: "checkout_assets_loading",
                    properties: {
                        timeline: (0, o.mD)()
                    }
                }))
            }
        },
        95867(e, t, n) {
            "use strict";
            const o = (0, n(31992).T5)(null);
            n.d(t, ["e", 0, o])
        },
        79659(e, t, n) {
            "use strict";
            var o = n(59016),
                r = n(56141),
                a = n(34285);
            const c = (0, r.uU)((e => n(90343)(`./${e}.ts`).catch((e => {
                (0, o.A)(e, "i18n")
            }))), a.default);
            n.d(t, ["t", 0, c])
        },
        34285(e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, ["default", 0, {
                "header.nav.go_back": "Go back",
                "header.nav.close": "Close",
                "header.coins_alt": "POP Coins",
                "header.download_title": "Get assured <span>{amount} cashback</span><br />on POP app",
                "body.qr.title": "Pay via UPI QR",
                "other_payment_options.title": "Other Payment Options",
                "other_payment_options.subtitle": "Earn POP coins using any payment method.",
                "cashback.alt": "POP Cashback",
                "pop.block_name": "POP - Pay",
                "pop.screen_name": "POP",
                "mobile.widget.button": "Pay via POP UPI",
                "mobile.widget.earn": "Earn",
                "mobile.widget.cashback_with_amount": "{amount} cashback",
                "mobile.widget.using": "using",
                "mobile.widget.pop_coins_count": "{count} POP coins",
                "mobile.header.download_title": "Get assured <span>{amount}<br />cashback</span> on POP app",
                "mobile.payment_options": "Payment Options",
                "mobile.separator.or": "or",
                pop_use_any_method_get_cashback: "Get assured {amount} cashback",
                pop_dynamic_offer_text: "Get {cashback_to_earn} cashback using {coins_to_burn} POPcoins",
                popcoins_earned: "POPcoins earned",
                cashback_earned: "Instant cashback",
                download_pop_box_title: "Download POP app to claim<br />your cashback",
                download_pop_box_title_existing: "Claim your cashback<br />from POP UPI app",
                claim_now: "Claim now",
                download_and_claim: "Download & Claim",
                open_pop_upi: "Open POP UPI",
                learn_more: "Learn more",
                download_pop_box_logo_alt: "POP App",
                "confirm_non_pop.title_prefix": "You are missing on",
                "confirm_non_pop.title_assured": "assured",
                "confirm_non_pop.title_cashback": "{amount} cashback",
                "confirm_non_pop.pay_via_pop": "Pay via POP using QR",
                "confirm_non_pop.pay_via_pop_mobile": "Pay via POP UPI",
                "confirm_non_pop.continue_using": "Continue using",
                "loading.title_line1": "POP UPI makes every",
                "loading.title_line2": "payment truly rewarding",
                "loading.earn_coins": "Earn {coins} POPCoins",
                "loading.earn_cashback": "Earn {amount} Cashback",
                "loading.redirecting": "Unlocking Pop Pay rewards",
                "mobile.widget.earn_coins_and_cashback_prefix": "Earn ",
                "mobile.widget.earn_coins_and_cashback_coins": "{coins} POPcoins",
                "mobile.widget.earn_coins_and_cashback_plus": " + ",
                "mobile.widget.earn_coins_and_cashback_cashback": "2% cashback",
                "mobile.widget.earn_coins_and_cashback_suffix": " with Rupay Credit Card on this transaction",
                "mobile.widget.earn_coins_and_cashback_cashback_dweb": "Additional 2% cashback",
                "mobile.widget.use_coins_prefix": "Use {coins}",
                "mobile.widget.use_coins_suffix": "POPCoins to get {amount} cashback",
                "header.reward_card.earn_coins": "Earn {coins}",
                "header.reward_card.popcoins": "POPcoins",
                "header.reward_card.get_cashback": "Get {amount}",
                "header.reward_card.instant_cashback": "Instant cashback"
            }])
        },
        31994(e, t, n) {
            "use strict";
            n.d(t, {
                IR: () => d,
                Z1: () => m,
                el: () => p
            });
            var o = n(71711),
                r = n(44138),
                a = n(56337),
                c = n(21117),
                i = n(61613),
                s = n(93665),
                u = n(93153);
            const l = function(e) {
                if (!e) return "no-src";
                try {
                    const t = e.getAttribute("src") || "no-src";
                    return "no-src" === t ? t : t.split("/").slice(-1)[0]
                } catch (e) {
                    return "error"
                }
            }("undefined" != typeof document ? document.currentScript : null);

            function m() {
                const e = {
                        checkout_id: (0, r.v6)(),
                        "device.id": (0, o.IP)() ? ? "",
                        library: (0, a.G9)(),
                        library_src: l,
                        current_script_src: l,
                        platform: (0, a.uo)(),
                        env: "",
                        is_magic_script: (0, a.rM)(),
                        os: (0, u.R0)().toLowerCase()
                    },
                    t = (0, i.IN)(),
                    n = (0, i._j)();
                t && (e.referer = t), n && (e.package_name = n);
                const c = (0, a.xd)() || {};
                return (0, a.yt)() && (0, a.$2)() && !c.platform_version && (c.platform_version = (0, a.$2)()), { ...e,
                    ...c
                }
            }

            function d() {
                return "https://lumberjack-metrics.razorpay.com/v1/frontend-metrics"
            }

            function p() {
                return (0, s.O)() ? (0, a.G9)() : (0, c.u)() ? "magic" : "checkout"
            }
        },
        73937(e, t, n) {
            "use strict";
            n.d(t, {
                $6: () => b,
                E6: () => P,
                Ki: () => I,
                Nb: () => w,
                Rp: () => y,
                T5: () => $,
                XE: () => g,
                XG: () => B,
                Y0: () => J,
                _Z: () => T,
                c3: () => x,
                cF: () => M,
                hV: () => D,
                ki: () => R,
                ny: () => O,
                oC: () => N,
                rQ: () => v,
                xq: () => A
            });
            var o = n(88795),
                r = n(28949),
                a = n(78400),
                c = n(25749),
                i = n(31992),
                s = n(65047),
                u = n(98256),
                l = n(28766),
                m = n(74471),
                d = n(95867),
                p = n(73733),
                h = n(79659),
                f = n(28351);
            const _ = "#2950DA";

            function g() {
                return v() === _ || "rgb(41,80,218)" === v()
            }

            function y() {
                C(u.q$)
            }

            function b() {
                C(null)
            }

            function v() {
                const e = k.get();
                return e && "string" == typeof e && e.length > 0 ? e : (0, a.Rw)("theme.color") || (0, f.hB)(f.iE.THEME_COLOR) && (0, f.mn)(f.iE.THEME_COLOR) || (0, r.om)("theme.color") || (0, r.ve)("checkout_configuration.data.checkout_style_config.brand_color", "") || _
            }
            const k = (0, s.observable)(null),
                E = k;

            function C(e) {
                var t;
                k.set(e);
                const n = (0, c.Sx)();
                null == n || null === (t = n.update) || void 0 === t || t.call(n)
            }

            function w() {
                return (0, a.Rw)("theme.border_radius", "") || (0, f.hB)(f.iE.THEME_BORDER_RADIUS) && (0, f.KL)(f.iE.THEME_BORDER_RADIUS) || (0, r.om)("theme.border_radius", "") || (0, r.ve)("checkout_configuration.data.checkout_style_config.button.shape", "")
            }

            function P() {
                return (0, a.Rw)("theme.font_family.heading", "") || (0, f.hB)(f.iE.THEME_FONT_HEADING) && (0, f.Me)(f.iE.THEME_FONT_HEADING) || (0, r.om)("theme.font_family.heading", "") || (0, r.ve)("checkout_configuration.data.checkout_style_config.text.font", "")
            }

            function T() {
                return (0, a.Rw)("theme.font_family.body", "") || (0, f.hB)(f.iE.THEME_FONT_BODY) && (0, f.Me)(f.iE.THEME_FONT_BODY) || (0, r.om)("theme.font_family.body", "") || (0, r.ve)("checkout_configuration.data.checkout_style_config.text.body_font", "")
            }

            function O() {
                const e = (0, r.om)("theme.font_size");
                if (!e && 0 !== e) return;
                const t = "string" == typeof e ? parseFloat(e) : Number(e);
                return isNaN(t) || t <= 0 ? void 0 : Math.min(20, Math.max(12, t))
            }

            function M() {
                return (0, r.om)("theme.close_button", !0)
            }

            function $(e) {
                return (0, o.an)({
                    primaryColor: u.q$,
                    surfaceColor: (0, r.om)("theme.surface"),
                    styleConfig: S(),
                    iconColor: (0, r.om)("theme.icon_color"),
                    ctaColor: (0, r.om)("theme.cta_color"),
                    containerSelector: e
                })
            }

            function B() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = (0, r.om)("theme.cta_color");
                return (0, o.an)({
                    primaryColor: v(),
                    surfaceColor: (0, r.om)("theme.surface"),
                    styleConfig: S(),
                    iconColor: (0, r.om)("theme.icon_color"),
                    ctaColor: e.autoThemedCta && !t ? v() : (0, r.om)("theme.cta_color")
                })
            }

            function R() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                const t = (0, r.om)("theme.cta_color");
                return (0, o.Ci)({
                    primaryColor: v(),
                    surfaceColor: (0, r.om)("theme.surface"),
                    iconColor: (0, r.om)("theme.icon_color"),
                    ctaColor: e.autoThemedCta && !t ? v() : (0, r.om)("theme.cta_color")
                })
            }

            function S() {
                return [{
                    name: "border_radius",
                    selector: o.Sx,
                    value: w()
                }]
            }

            function x() {
                return (0, o.Sh)(v())
            }

            function I() {
                return (0, o.gG)(v())
            }

            function N() {
                return (0, o.VU)(v())
            }

            function D() {
                return (0, a.Rw)("theme.sidebar_graphic.svg", "") || (0, f.hB)(f.iE.THEME_SIDEBAR_SRC) && (0, f.Me)(f.iE.THEME_SIDEBAR_SRC) || (0, r.om)("theme.sidebar_graphic.svg", "") || (0, r.ve)("checkout_configuration.data.checkout_style_config.sidebar_graphic.svg", "sidebar")
            }

            function J() {
                const e = (0, a.Rw)("theme.sidebar_graphic.enabled");
                if (null != e) return !!e;
                if ((0, f.hB)(f.iE.THEME_SIDEBAR_ENABLED)) return (0, f.dT)(f.iE.THEME_SIDEBAR_ENABLED);
                const t = (0, r.om)("theme.sidebar_graphic.enabled");
                return null != t ? !!t : !!(0, r.ve)("checkout_configuration.data.checkout_style_config.sidebar_graphic.enabled", !1)
            }

            function A() {
                return !!(0, a.Rw)("theme.sidebar_graphic") || (0, f.hB)(f.iE.THEME_SIDEBAR_ENABLED) || (0, f.hB)(f.iE.THEME_SIDEBAR_SRC) || !!(0, r.om)("theme.sidebar_graphic") || !!(0, r.ve)("checkout_configuration.data.checkout_style_config.sidebar_graphic", !1)
            }
            let j = 0;
            l.eU.subscribe((e => {
                const t = Array.isArray(e) ? e.length : 0;
                t < j && (0, i.Jt)(p.HB) && !e.some((e => {
                    var t;
                    return (null == e ? void 0 : e.name) === (null === (t = (0, i.Jt)(h.t)) || void 0 === t ? void 0 : t("pop.screen_name"))
                })) && (b(), (0, m.S)(!1), d.e.set(null)), j = t
            })), n.d(t, ["kg", 0, E])
        },
        94615(e, t, n) {
            "use strict";
            n.d(t, {
                C: () => u,
                D: () => s
            });
            var o = n(93153),
                r = n(56337),
                a = n(26718),
                c = n(60431),
                i = n(31994);

            function s() {
                try {
                    if ("connection" in navigator) {
                        const {
                            effectiveType: e
                        } = navigator.connection;
                        return e
                    }
                } catch (e) {
                    return ""
                }
            }

            function u(e) {
                if (!r.uO || o.w2) return !1;
                const t = {
                    url: (0, i.IR)(),
                    data: {
                        key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                        data: encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(e)))))
                    }
                };
                try {
                    return (0, a.cK)(navigator, "sendBeacon") ? navigator.sendBeacon(t.url, JSON.stringify(t.data)) : (0, c.Ay)({ ...t,
                        method: "post"
                    }), !0
                } catch (e) {
                    return !1
                }
            }
        },
        41040(e, t, n) {
            "use strict";
            n.d(t, {
                u: () => a
            });
            var o = n(56337),
                r = n(93153);

            function a() {
                let e = "";
                const t = (0, o.yt)(),
                    n = (0, r.R0)();
                return e = r.me && !t ? `${n}-webview` : `${n}-${t?"sdk":"web"}`, e
            }
        },
        9571(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackMetrics: () => u
            });
            var o = n(56337),
                r = n(93153),
                a = n(31994),
                c = n(14494),
                i = n(94615),
                s = n(41040);

            function u(e, t, n) {
                let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!o.uO || !(0, c.A9)() || r.w2) return !1;
                const l = {
                    metrics: [{
                        name: "metrics.track",
                        labels: [{
                            app: (0, a.el)(),
                            route: n,
                            env: (0, o.zG)(),
                            platform: (0, s.u)(),
                            metric: e,
                            value: t,
                            connectionType: (0, i.D)(),
                            ...u,
                            region: (0, o.JN)()
                        }]
                    }]
                };
                return (0, i.C)(l)
            }
        }
    }
]);