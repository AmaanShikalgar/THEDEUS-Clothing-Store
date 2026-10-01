"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [23696, 74268], {
        22974(e, n, a) {
            a.r(n), a.d(n, {
                logRender: () => d
            });
            var r = a(46434),
                o = a(30551),
                t = a(45325);
            const l = o.q,
                i = t.$s,
                p = t.Ez;

            function d(e, n, a, i) {
                if (!e) return {};
                const p = {
                    name: e,
                    detail: n,
                    class: i,
                    parent: (0, r.SD)(o.f),
                    events: [],
                    eventTypes: null == a ? void 0 : a.split(",")
                };
                return (0, r.o)(o.f, p), (0, r.Rc)((() => ((0, t.Ic)(p, l.MOUNT), () => {
                    (0, t.Ic)(p, l.DESTROY)
                }))), {
                    logClick: c(l.CLICK, p),
                    logChange: c(l.CHANGE, p),
                    logValidate: c(l.VALIDATE, p),
                    logSubmit: c(l.SUBMIT, p),
                    logEvent: c(l.CUSTOM, p),
                    logError: c(l.ERROR, p)
                }
            }

            function c(e, n) {
                const a = {
                    name: n.name,
                    class: n.class,
                    parent: n.parent,
                    eventTypes: n.eventTypes,
                    trackDetail: n.detail
                };
                return function(n) {
                    a.detail = n, (0, t.Ic)(a, e)
                }
            }
            a.d(n, ["EVENTS", 0, l, "logEvent", 0, i, "logMeta", 0, p])
        },
        93153(e, n, a) {
            a.d(n, {
                FP: () => x,
                Jm: () => y,
                L1: () => r.L1,
                LO: () => r.LO,
                N7: () => r.N7,
                Oh: () => r.Oh,
                PS: () => r.PS,
                Pj: () => r.Pj,
                XR: () => r.XR,
                Y0: () => u,
                YT: () => r.YT,
                _L: () => z,
                f1: () => r.f1,
                f2: () => r.f2,
                hB: () => r.hB,
                me: () => r.me,
                pd: () => r.pd,
                tO: () => r.tO,
                vZ: () => m,
                yA: () => r.yA,
                z3: () => k
            });
            var r = a(18938);
            const o = navigator.userAgent;

            function t(e) {
                return e.test(o)
            }
            const l = t(/Windows NT/),
                i = t(/Linux/),
                p = t(/Mac OS/),
                d = t(/Firefox/),
                c = t(/ShopifyCheckoutSDK\//);

            function u() {
                const e = [{
                    check: r.L1,
                    name: "safari"
                }, {
                    check: d,
                    name: "firefox"
                }, {
                    check: r.hB,
                    name: "chrome"
                }, {
                    check: r.f2,
                    name: "android_webview"
                }, {
                    check: r.tO,
                    name: "ios_webview"
                }, {
                    check: r.me,
                    name: "webview"
                }, {
                    check: _,
                    name: "dalvik"
                }, {
                    check: r.pd,
                    name: "instagram"
                }, {
                    check: r.Pj,
                    name: "samsung_browser"
                }, {
                    check: s,
                    name: "headless_chrome"
                }, {
                    check: h,
                    name: "bot"
                }, {
                    check: r.f1,
                    name: "facebook"
                }, {
                    check: k,
                    name: "brave"
                }];
                for (const {
                        check: n,
                        name: a
                    } of e)
                    if (n) return a;
                return ""
            }
            async function m() {
                var e, n, a;
                if (null !== (e = navigator) && void 0 !== e && e.userAgentData && "function" == typeof(null === (n = navigator) || void 0 === n || null === (n = n.userAgentData) || void 0 === n ? void 0 : n.getHighEntropyValues)) try {
                    var r;
                    const e = await (null === (r = navigator) || void 0 === r || null === (r = r.userAgentData) || void 0 === r ? void 0 : r.getHighEntropyValues(["brands"]));
                    for (const n of (null == e ? void 0 : e.brands) || []) {
                        if ("Google Chrome" === String(null == n ? void 0 : n.brand).replace(/\s+/g, " ").trim()) return !0
                    }
                    return !1
                } catch (e) {
                    return !1
                }
                const o = (null === (a = navigator) || void 0 === a ? void 0 : a.userAgent) || "",
                    t = /\bChrome\/\d+/i.test(o),
                    l = !/\bEdg\/\d+/i.test(o),
                    i = !/\bOPR\/\d+/i.test(o);
                return t && l && i
            }
            const _ = t(/Dalvik\//),
                s = (t(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/), t(/HeadlessChrome/)),
                h = t(/Storebot|Googlebot/),
                g = t(/(iPod|iPhone|iPad).+GSA\/(\d+)\.(\d+)\.(\d+) Mobile/),
                b = () => {
                    return e = "(max-device-height: 490px),(max-device-width: 490px)", !globalThis.matchMedia || (null === (n = globalThis.matchMedia(e)) || void 0 === n ? void 0 : n.matches);
                    var e, n
                },
                v = t(/YouTube/i);

            function k() {
                if (navigator.brave) try {
                    return navigator.brave.isBrave()
                } catch (e) {}
                return Promise.resolve(!1)
            }

            function x() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => !1;
                return (Boolean(r.yA) || Boolean(r.Oh)) && !e() && !r.me
            }
            const f = {
                IOS: "iOS",
                ANDROID: "android",
                WINDOWS: "windows",
                LINUX: "linux",
                MACOS: "macOS",
                OTHERS: "other"
            };
            async function y() {
                if ("userAgentData" in navigator) {
                    const e = await async function() {
                        if (navigator.userAgentData && "getHighEntropyValues" in navigator.userAgentData) try {
                            return (await navigator.userAgentData.getHighEntropyValues(["model"])).model || null
                        } catch {
                            return null
                        }
                        return null
                    }();
                    if (e) return e
                }
                return function() {
                    const e = /\(.*?;\s*([^;)]+)(?:\s*Build\/|\))/,
                        n = o.match(e);
                    return n ? n[1] : "Unknown device"
                }()
            }
            const S = "browser",
                A = "android-webview",
                w = "ios-webview",
                I = "facebook-browser",
                $ = "instagram-browser",
                M = "ios-pwa",
                B = "android-pwa",
                T = "chrome-twa";

            function C() {
                var e, n, a, r, o, t, l, i;
                return (null === (e = window) || void 0 === e || null === (n = e.matchMedia) || void 0 === n || null === (n = n.call(e, "(display-mode: standalone)")) || void 0 === n ? void 0 : n.matches) || (null === (a = window) || void 0 === a || null === (r = a.matchMedia) || void 0 === r || null === (r = r.call(a, "(display-mode: fullscreen)")) || void 0 === r ? void 0 : r.matches) || (null === (o = window) || void 0 === o || null === (t = o.matchMedia) || void 0 === t || null === (t = t.call(o, "(display-mode: minimal-ui)")) || void 0 === t ? void 0 : t.matches) || (null === (l = window) || void 0 === l || null === (i = l.matchMedia) || void 0 === i || null === (i = i.call(l, "(display-mode: window-controls-overlay)")) || void 0 === i ? void 0 : i.matches) || !1
            }

            function z(e) {
                return r.f1 ? I : r.pd ? $ : r.f2 ? A : r.tO ? w : function(e) {
                    var n;
                    const a = e || (null === (n = document) || void 0 === n ? void 0 : n.referrer) || "";
                    return r.yA && r.hB && a.startsWith("android-app://")
                }(e) && C() ? T : r.Oh && (!0 === navigator.standalone || C()) ? M : r.yA && C() ? B : S
            }
            a.d(n, ["By", 0, _, "Cx", 0, p, "DE", 0, c, "Fr", 0, () => globalThis.innerWidth && globalThis.innerWidth < 485 || b(), "KF", 0, l, "MM", 0, b, "OS", 0, f, "R0", 0, () => r.YT || r.XN ? f.IOS : r.yA ? f.ANDROID : l ? f.WINDOWS : i ? f.LINUX : p ? f.MACOS : f.OTHERS, "dp", 0, g, "ib", 0, d, "k", 0, v, "sx", 0, s, "w2", 0, h])
        },
        61114(e, n, a) {
            a.d(n, {
                y8: () => h,
                YJ: () => k,
                JG: () => m,
                gG: () => g,
                nl: () => b,
                vQ: () => oe,
                kO: () => pe,
                FM: () => de,
                Qw: () => c,
                Tc: () => s,
                N_: () => Q,
                O_: () => d,
                bB: () => _,
                uH: () => u,
                Py: () => re,
                iV: () => v,
                qO: () => ne,
                WI: () => ee,
                $h: () => A,
                xo: () => L,
                b3: () => S,
                Tl: () => w,
                Dq: () => J,
                Rf: () => U,
                c2: () => E,
                Fz: () => te,
                qX: () => le,
                MB: () => ie,
                Et: () => ae,
                IQ: () => x,
                Ur: () => $,
                YL: () => j,
                Hb: () => z,
                lt: () => N,
                rA: () => H,
                vi: () => V,
                S4: () => M,
                wr: () => B,
                kx: () => q,
                Zc: () => C,
                G0: () => y,
                wW: () => f,
                Ey: () => O,
                u3: () => D,
                rW: () => K,
                lv: () => I,
                oO: () => Z,
                Jw: () => P,
                lM: () => G,
                Gp: () => R,
                JB: () => F,
                NZ: () => W,
                WF: () => Y
            });
            var r = a(91908),
                o = a(7774),
                t = a(83944);
            const l = a.p + "assets/images/imobile-icici.df4c790f.svg",
                i = a.p + "assets/images/moneyview.e24a2045.svg";
            var p = a(93153);
            const d = {
                    package_name: "other_intent_apps",
                    app_name: "Others",
                    handles: [],
                    name: "Others",
                    shortcode: "others",
                    app_icon: "https://cdn.razorpay.com/upi/upi-logo.svg"
                },
                c = "com.google.android.apps.nbu.paisa.user",
                u = "com.phonepe.app",
                m = "in.org.npci.upiapp",
                _ = "net.one97.paytm",
                s = "microapps.gpay",
                h = "in.amazon.mShop.android.shopping",
                g = "com.dreamplug.androidapp",
                b = "cred_pay",
                v = "samsung_pay",
                k = "amazon_pay",
                x = {
                    app_name: "Google Pay",
                    package_name: c,
                    app_icon: "https://cdn.razorpay.com/app/googlepay.svg",
                    handles: ["okhdfcbank", "okicici", "okaxis", "oksbi"],
                    verify_registration: !0,
                    shortcode: "google_pay",
                    share: .43,
                    sr: .85
                },
                f = {
                    package_name: "com.phonepe.app",
                    app_icon: r,
                    shortcode: "phonepe",
                    app_name: "PhonePe",
                    handles: ["ybl", "ibl", "axl"],
                    share: .41,
                    sr: .82
                },
                y = {
                    name: "PayTM",
                    app_name: "PayTM UPI",
                    package_name: "net.one97.paytm",
                    shortcode: "paytm",
                    app_icon: "https://cdn.razorpay.com/app/paytm.svg",
                    handles: ["ptsbi", "pthdfc", "ptaxis", "ptyes"],
                    share: .088,
                    sr: .84
                },
                S = {
                    package_name: "in.org.npci.upiapp",
                    shortcode: "bhim",
                    app_icon: "https://cdn.razorpay.com/app/bhim.svg",
                    app_name: "BHIM",
                    handles: ["upi"],
                    share: .002,
                    sr: .83
                },
                A = {
                    app_name: "Amazon",
                    package_name: "in.amazon.mShop.android.shopping",
                    shortcode: "amazon",
                    app_icon: "https://cdn.razorpay.com/app/amazonpay.svg",
                    handles: ["apl", "yapl"],
                    share: .007,
                    sr: .78
                },
                w = {
                    app_name: "CRED",
                    package_name: "com.dreamplug.androidapp",
                    shortcode: "cred",
                    app_icon: t,
                    handles: ["axisb", "yescred"],
                    share: .028,
                    sr: .75
                },
                I = {
                    app_name: "Samsung Wallet UPI",
                    package_name: "com.samsung.android.spay",
                    shortcode: "samsung",
                    app_icon: o,
                    handles: ["pingpay"],
                    genericIntentSupported: !0,
                    share: 2e-4,
                    sr: .87
                },
                $ = {
                    app_name: "iMobile by ICICI",
                    package_name: "com.csam.icici.bank.imobile",
                    shortcode: "icici",
                    app_icon: l,
                    handles: ["icici"],
                    genericIntentSupported: !0,
                    share: 2e-4,
                    sr: .59
                },
                M = {
                    app_name: "MobiKwik",
                    package_name: p.yA ? "com.mobikwik_new" : "com.mobikwik",
                    shortcode: "mobikwik",
                    app_icon: "https://cdn.razorpay.com/app/mobikwik.png",
                    handles: ["ikwik", "mbk"],
                    share: .0019,
                    sr: .79
                },
                B = {
                    app_name: "MoneyView",
                    package_name: "com.whizdm.moneyview.loans",
                    shortcode: "moneyview",
                    app_icon: i,
                    handles: ["mvhdfc"]
                },
                T = {
                    app_name: "PayZapp",
                    package_name: "com.hdfcbank.payzapp",
                    shortcode: "payzapp",
                    app_icon: "https://cdn.razorpay.com/app/payzapp.png",
                    handles: ["pz"],
                    genericIntentSupported: !0
                },
                C = {
                    app_name: "Navi",
                    package_name: p.yA ? "com.naviapp" : "com.gonavi.app",
                    shortcode: "navi",
                    handles: ["naviaxis"],
                    app_icon: "https://cdn.razorpay.com/app/navi.png",
                    genericIntentSupported: p.yA,
                    share: .026,
                    sr: .79
                },
                z = {
                    app_name: "Kiwi",
                    package_name: p.yA ? "in.gokiwi.kiwitpap" : "in.kiwi.kiwitpap",
                    shortcode: "gokiwi",
                    handles: ["goaxb"],
                    app_icon: "https://cdn.razorpay.com/static/assets/instrument-request/kiwi.svg",
                    genericIntentSupported: !0,
                    share: 9e-5,
                    sr: .73
                },
                N = {
                    app_name: "Kotak811",
                    shortcode: "kotakbank",
                    package_name: "com.kotak811mobilebankingapp.instantsavingsupiscanandpayrecharge",
                    handles: ["kotak811"],
                    app_icon: "https://cdn.razorpay.com/app/kotak811.png",
                    genericIntentSupported: !0,
                    share: 3e-4,
                    sr: .8
                },
                G = {
                    app_name: "slice",
                    shortcode: "slice",
                    package_name: "indwin.c3.shareapp",
                    handles: ["slice"],
                    genericIntentSupported: !0,
                    app_icon: "https://cdn.razorpay.com/app/slice.png",
                    share: 1e-4,
                    sr: .8
                },
                P = {
                    app_name: "ShriRamOne",
                    app_icon: "https://cdn.razorpay.com/app/shriramone.png",
                    shortcode: "shriramone",
                    package_name: "com.shriram.one",
                    handles: ["shriramhdfcbank"]
                },
                R = {
                    app_name: "Super.Money",
                    shortcode: "super_money",
                    package_name: "money.super.payments",
                    handles: ["superyes"],
                    app_icon: "https://cdn.razorpay.com/app/super-money.png",
                    share: .0015,
                    sr: .89
                },
                E = {
                    app_name: "Fi Money",
                    shortcode: "fi",
                    package_name: p.yA ? "com.epifi.paisa" : "com.epifi.fi",
                    handles: ["fifederal"],
                    app_icon: "https://cdn.razorpay.com/app/fimoney.png",
                    genericIntentSupported: !0,
                    share: 1e-4,
                    sr: .8
                },
                O = {
                    app_name: "POP UPI",
                    shortcode: "popclubapp",
                    package_name: p.yA ? "com.popclub.android" : "com.popclub.popclubapp",
                    handles: ["yespop"],
                    app_icon: "https://cdn.razorpay.com/app/popclubapp.png",
                    share: 9e-4,
                    sr: .74
                },
                L = {
                    app_name: "Bajaj Pay UPI",
                    shortcode: "bajaj_finserve",
                    package_name: "org.altruist.BajajExperia",
                    handles: ["abfspay"],
                    app_icon: "https://cdn.razorpay.com/app/bajaj.png",
                    share: 2e-4,
                    sr: .36
                },
                D = {
                    app_name: "BharatPe",
                    shortcode: "postpe",
                    package_name: "com.postpe.app",
                    handles: ["bpunity"],
                    app_icon: "https://cdn.razorpay.com/app/postpe.png",
                    genericIntentSupported: !0
                },
                j = {
                    app_name: "Jupiter",
                    package_name: "money.jupiter",
                    shortcode: "jupiter",
                    app_icon: "https://cdn.razorpay.com/app/jupiter.png",
                    handles: ["jupiteraxis"],
                    genericIntentSupported: !0
                },
                W = {
                    app_name: "WhatsApp",
                    shortcode: "whatsapp",
                    package_name: "com.whatsapp",
                    handles: ["waicici", "wahdfcbank", "wasbi", "waaxis"],
                    app_icon: "https://cdn.razorpay.com/app/whatsapp.svg"
                },
                H = {
                    app_name: "Kredit.pe",
                    shortcode: "kreditpe",
                    package_name: p.yA ? "com.kreditpe.android.app" : "com.ios.kreditpe.app",
                    handles: ["kphdfc"],
                    app_icon: "https://cdn.razorpay.com/app/kreditpe.png"
                },
                U = {
                    app_name: "FamApp UPI",
                    package_name: "com.fampay.in",
                    shortcode: "fampay",
                    app_icon: "https://cdn.razorpay.com/app/fampay.png",
                    handles: [],
                    genericIntentSupported: p.yA
                },
                F = {
                    app_name: "Tata Neu UPI",
                    package_name: "com.tatadigital.tcp",
                    shortcode: "tataneu",
                    app_icon: "https://cdn.razorpay.com/app/tataneu.png",
                    handles: []
                },
                V = {
                    app_name: "Lxme",
                    shortcode: "lxme",
                    package_name: p.yA ? "com.lxme" : "in.lxme.reactjs.ios",
                    handles: ["lxaxis"],
                    app_icon: "https://cdn.razorpay.com/app/lxme.png"
                },
                Z = {
                    app_name: "Scapia UPI",
                    shortcode: "scapia",
                    package_name: p.yA ? "cards.scapia.android" : "cards.scapia.ios",
                    handles: ["tlaxis"],
                    app_icon: "https://cdn.razorpay.com/app/scapia.png"
                },
                K = {
                    app_name: "SalarySe UPI",
                    shortcode: "salaryse",
                    package_name: "com.salaryse.android",
                    handles: [],
                    app_icon: "https://cdn.razorpay.com/app/salaryse.png"
                },
                J = {
                    app_name: "Curie UPI",
                    shortcode: "curie_money",
                    package_name: p.yA ? "com.yield.curie_money" : "com.yield.curieMoney",
                    handles: ["yescurie"],
                    app_icon: "https://cdn.razorpay.com/app/curie_money.png"
                },
                Y = {
                    app_name: "ZET",
                    shortcode: "zet",
                    package_name: "in.magnetapp",
                    handles: ["ztrbl"],
                    app_icon: "https://cdn.razorpay.com/app/zet.svg"
                },
                q = {
                    app_name: "CTRLPay",
                    shortcode: "mswipe",
                    package_name: "com.mswipe.mswipeppiwallet",
                    handles: ["mswipe"],
                    app_icon: "https://cdn.razorpay.com/app/mswipe.png"
                },
                X = [x, f, O, w, S, y, z, C, R, P, N, G, M, E, L, $, D, { ...A,
                    shortcode: k
                }, { ...I,
                    shortcode: v
                }, W, j, H, V, Z, F, Y, K, J, q],
                Q = [$, C, T],
                ee = {
                    preferred: [x, f, y, w, S, F],
                    qr: [{ ...O,
                        app_icon: "https://cdn.razorpay.com/app/popclubapp.svg"
                    }, x, f, A, C, S],
                    whitelist: [$, S, A, I, M, z, C, R, P, N, G, T, E, O, L, D, B, W, H, U, V, Z, Y, {
                        package_name: "com.olive.kotak.upi",
                        shortcode: "kotak"
                    }, {
                        package_name: "com.msf.kbank.mobile",
                        shortcode: "kotak"
                    }, {
                        package_name: "com.sbi.upi",
                        shortcode: "sbi",
                        handles: ["sbi"]
                    }, {
                        package_name: "com.sbi.lotusintouch",
                        shortcode: "sbiyono"
                    }, {
                        package_name: "com.snapwork.hdfc",
                        shortcode: "hdfc-bank"
                    }, {
                        package_name: "com.upi.axispay",
                        shortcode: "axispay"
                    }, {
                        package_name: "com.axis.mobile",
                        shortcode: "axis"
                    }, {
                        package_name: "money.jupiter",
                        shortcode: "jupiter"
                    }, {
                        package_name: "com.idfcfirstbank.optimus",
                        shortcode: "idfc-first"
                    }, {
                        package_name: "com.canarabank.mobility",
                        shortcode: "canara"
                    }, {
                        package_name: "in.bajajfinservmarkets.app",
                        shortcode: "finserv",
                        handles: ["abfspay"]
                    }, {
                        package_name: "com.bankofbaroda.upi",
                        shortcode: "bobupi"
                    }, {
                        package_name: "com.fss.pnbpsp",
                        shortcode: "pnb-bank"
                    }, {
                        package_name: "com.fedmobile",
                        shortcode: "fedmobile"
                    }, {
                        package_name: "com.iexceed.appzillon.ippbMB",
                        shortcode: "india-post"
                    }, {
                        package_name: "com.jio.myjio",
                        shortcode: "myjio"
                    }, {
                        package_name: "com.infrasoft.uboi",
                        shortcode: "vyom"
                    }, {
                        package_name: "com.freecharge.android",
                        shortcode: "freecharge"
                    }, {
                        package_name: "com.SIBMobile",
                        shortcode: "sibmirror"
                    }, {
                        package_name: "com.eroute.omnicard",
                        shortcode: "omnicard"
                    }, {
                        package_name: "com.nextbillion.groww",
                        shortcode: "groww"
                    }, {
                        package_name: "com.dbs.in.digitalbank",
                        shortcode: "digibank"
                    }, {
                        package_name: "com.IndianBank.IndOASIS",
                        shortcode: "indoasis"
                    }, F, {
                        package_name: "com.ausmallfinancebank.amb",
                        shortcode: "au0101"
                    }, {
                        package_name: "com.infrasofttech.CentralBank",
                        shortcode: "cent-mobile"
                    }, {
                        package_name: "com.rblbank.mobank",
                        shortcode: "rbl-mobank"
                    }, {
                        package_name: "com.fss.indus",
                        shortcode: "indusmobile"
                    }, {
                        package_name: "com.indusind.indie",
                        shortcode: "indus-indie"
                    }, {
                        package_name: "com.paypointz.wallet",
                        shortcode: "digi-khata"
                    }, {
                        package_name: "com.lcode.ucoupi",
                        shortcode: "bhim-uco"
                    }, {
                        package_name: "in.irisbyyes.app",
                        shortcode: "yesbank-iris"
                    }, {
                        package_name: "com.YesBank",
                        shortcode: "yes-bank"
                    }, {
                        app_name: "IntentSample",
                        shortcode: "intentsample",
                        package_name: "com.sumedh.intentsample"
                    }, {
                        name: "WhatsApp Business",
                        app_name: "WhatsApp Business UPI",
                        package_name: "com.whatsapp.w4b",
                        shortcode: "whatsapp-biz",
                        handles: ["icicibank"],
                        app_icon: "https://cdn.razorpay.com/app/whatsapp.svg"
                    }, {
                        package_name: "com.icicibank.pockets",
                        shortcode: "icici-pocket"
                    }, {
                        package_name: "com.fss.unbipsp",
                        shortcode: "united-upi"
                    }, {
                        package_name: "com.mycompany.kvb",
                        shortcode: "kvb"
                    }, {
                        package_name: "com.fss.vijayapsp",
                        shortcode: "vijaya"
                    }, {
                        package_name: "com.dena.upi.gui",
                        shortcode: "dena"
                    }, {
                        package_name: "com.fss.jnkpsp",
                        shortcode: "jk-upi"
                    }, {
                        package_name: "com.bsb.hike",
                        shortcode: "hike"
                    }, {
                        package_name: "com.fss.idfcpsp",
                        shortcode: "idfc"
                    }, {
                        package_name: "com.abipbl.upi",
                        shortcode: "abpb"
                    }, {
                        package_name: "com.microsoft.mobile.polymer",
                        shortcode: "microsoft-kaizala"
                    }, {
                        package_name: "com.finopaytech.bpayfino",
                        shortcode: "fino"
                    }, {
                        package_name: "com.mgs.obcbank",
                        shortcode: "oriental"
                    }, {
                        package_name: "com.upi.federalbank.org.lotza",
                        shortcode: "lotza"
                    }, {
                        package_name: "com.mgs.induspsp",
                        shortcode: "induspay"
                    }, {
                        package_name: "ai.wizely.android",
                        shortcode: "wizely"
                    }, {
                        package_name: "com.olive.dcb.upi",
                        shortcode: "dcb-bank"
                    }, {
                        package_name: "com.mgs.yesmerchantnative.prod",
                        shortcode: "yesmerchantnative"
                    }, {
                        package_name: "in.chillr",
                        shortcode: "chillr"
                    }, {
                        package_name: "money.bullet",
                        shortcode: "bullet"
                    }, {
                        package_name: "com.mipay.in.wallet",
                        shortcode: "mipay"
                    }, {
                        package_name: "com.mipay.wallet.in",
                        shortcode: "mipay_2"
                    }, {
                        package_name: "com.pinelabs.fave",
                        shortcode: "fave"
                    }, {
                        package_name: "com.ultracash.payment.customer",
                        shortcode: "ultracash"
                    }, {
                        package_name: "com.npst.timepay.society",
                        shortcode: "timepay"
                    }, {
                        package_name: "com.goibibo",
                        shortcode: "goibibo"
                    }, {
                        package_name: "com.fss.ippbpsp",
                        shortcode: "dakpay"
                    }, {
                        package_name: "com.euronet.iobupi",
                        shortcode: "bhim-iob"
                    }, {
                        package_name: "com.lcode.csbupi",
                        shortcode: "bhim-csb"
                    }, {
                        package_name: "com.atyati.tvamapp",
                        shortcode: "tvam"
                    }, {
                        package_name: "com.Version1",
                        shortcode: "pnb-one"
                    }, {
                        package_name: "com.flipkart.android",
                        shortcode: "flipkart"
                    }, {
                        package_name: "com.moneytap.bnpl.app",
                        shortcode: "freopay"
                    }, K, J, q],
                    blacklist: [{
                        package_name: "com.whatsapp",
                        shortcode: "whatsapp"
                    }, {
                        package_name: "com.truecaller",
                        shortcode: "truecaller"
                    }, {
                        package_name: "com.olacabs.customer"
                    }, {
                        package_name: "com.myairtelapp",
                        shortcode: "airtel"
                    }, {
                        package_name: "com.paytmmall"
                    }, {
                        package_name: "com.gbwhatsapp"
                    }, {
                        package_name: "com.msf.angelmobile"
                    }, {
                        package_name: "com.fundsindia"
                    }, {
                        package_name: "com.muthootfinance.imuthoot"
                    }, {
                        package_name: "com.angelbroking.angelwealth"
                    }, {
                        package_name: "com.citrus.citruspay",
                        shortcode: "lazypay"
                    }]
                },
                ne = [w, A, S, R, C],
                ae = () => ne.filter((e => e.package_name !== g)),
                re = new Set([c, u]),
                oe = new Set(ae().map((e => e.package_name))),
                te = e => {
                    const n = e.split("@")[1];
                    return X.find((e => e.handles.includes(n)))
                },
                le = e => X.find((n => n.app_name.includes(e))),
                ie = e => X.find((n => n.shortcode.includes(e))),
                pe = {
                    total_slots: "5",
                    organic_list: [],
                    ad_slots: ["3", "4", "5"],
                    name: "control_variant"
                },
                de = {
                    ad_slots: ["3", "4", "5", "6", "7", "8", "9"],
                    name: "control_variant"
                }
        },
        54045(e, n, a) {
            const r = "^[0-9]{4}$",
                o = {
                    IN: {
                        pattern: "^[1-9][0-9]{5}$",
                        name: "India",
                        phone_number_regex: null,
                        dial_code: "91"
                    },
                    US: {
                        pattern: "^[0-9]{5}(?:[\\-\\s][0-9]{4})?$",
                        name: "United States of America",
                        phone_number_regex: "^[2-9]{1}\\d{2}[2-9]{1}\\d{6}$",
                        dial_code: "1"
                    },
                    GB: {
                        pattern: "^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$",
                        name: "United Kingdom",
                        phone_number_regex: null,
                        dial_code: "44"
                    },
                    CA: {
                        pattern: "^[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]$",
                        name: "Canada",
                        phone_number_regex: "^[2-9]{1}\\d{2}[2-9]{1}\\d{6}$",
                        dial_code: "1"
                    },
                    AU: {
                        pattern: r,
                        name: "Australia",
                        phone_number_regex: null,
                        dial_code: "61"
                    },
                    AF: {
                        pattern: r,
                        name: "Afghanistan",
                        phone_number_regex: null,
                        dial_code: "93"
                    },
                    AL: {
                        pattern: null,
                        name: "Albania",
                        phone_number_regex: null,
                        dial_code: "355"
                    },
                    AQ: {
                        pattern: null,
                        name: "Antarctica",
                        phone_number_regex: null,
                        dial_code: "672"
                    },
                    AX: {
                        pattern: null,
                        name: "Åland Islands",
                        phone_number_regex: null,
                        dial_code: "358"
                    },
                    CC: {
                        pattern: null,
                        name: "Cocos Islands",
                        phone_number_regex: null,
                        dial_code: "61"
                    },
                    CX: {
                        pattern: null,
                        name: "Christmas Island",
                        phone_number_regex: null,
                        dial_code: "61"
                    },
                    EH: {
                        pattern: null,
                        name: "Western Sahara",
                        phone_number_regex: null,
                        dial_code: "212"
                    },
                    DZ: {
                        pattern: "^[0-9]{5}$",
                        name: "Algeria",
                        phone_number_regex: null,
                        dial_code: "213"
                    },
                    AS: {
                        pattern: null,
                        name: "American Samoa",
                        phone_number_regex: null,
                        dial_code: "1684"
                    },
                    AD: {
                        pattern: "^AD ?[0-9]{3}$",
                        name: "Andorra",
                        phone_number_regex: null,
                        dial_code: "376"
                    },
                    AO: {
                        pattern: null,
                        name: "Angola",
                        phone_number_regex: null,
                        dial_code: "244"
                    },
                    AI: {
                        pattern: null,
                        name: "Anguilla",
                        phone_number_regex: null,
                        dial_code: "1264"
                    },
                    AG: {
                        pattern: null,
                        name: "Antigua and Barbuda",
                        phone_number_regex: null,
                        dial_code: "1268"
                    },
                    AR: {
                        pattern: "^[A-Z]{1}[0-9]{4}[A-Z]{3}$",
                        name: "Argentina",
                        phone_number_regex: null,
                        dial_code: "54"
                    },
                    AM: {
                        pattern: r,
                        name: "Armenia",
                        phone_number_regex: null,
                        dial_code: "374"
                    },
                    AW: {
                        pattern: null,
                        name: "Aruba",
                        phone_number_regex: null,
                        dial_code: "297"
                    },
                    AT: {
                        pattern: r,
                        name: "Austria",
                        phone_number_regex: null,
                        dial_code: "43"
                    },
                    AZ: {
                        pattern: r,
                        name: "Azerbaijan",
                        phone_number_regex: null,
                        dial_code: "994"
                    },
                    BS: {
                        pattern: null,
                        name: "Bahamas",
                        phone_number_regex: null,
                        dial_code: "1242"
                    },
                    BH: {
                        pattern: null,
                        name: "Bahrain",
                        phone_number_regex: null,
                        dial_code: "973"
                    },
                    BD: {
                        pattern: r,
                        name: "Bangladesh",
                        phone_number_regex: null,
                        dial_code: "880"
                    },
                    BB: {
                        pattern: "^BB[0-9]{5}$",
                        name: "Barbados",
                        phone_number_regex: null,
                        dial_code: "1246"
                    },
                    BY: {
                        pattern: "^[0-9]{6}$",
                        name: "Belarus",
                        phone_number_regex: null,
                        dial_code: "375"
                    },
                    BE: {
                        pattern: r,
                        name: "Belgium",
                        phone_number_regex: null,
                        dial_code: "32"
                    },
                    BZ: {
                        pattern: null,
                        name: "Belize",
                        phone_number_regex: null,
                        dial_code: "501"
                    },
                    BJ: {
                        pattern: null,
                        name: "Benin",
                        phone_number_regex: null,
                        dial_code: "229"
                    },
                    BM: {
                        pattern: "^[A-Z]{2}[0-9]{2}$",
                        name: "Bermuda",
                        phone_number_regex: null,
                        dial_code: "1441"
                    },
                    BT: {
                        pattern: "^[0-9]{5}$",
                        name: "Bhutan",
                        phone_number_regex: null,
                        dial_code: "975"
                    },
                    BO: {
                        pattern: null,
                        name: "Bolivia",
                        phone_number_regex: null,
                        dial_code: "591"
                    },
                    BA: {
                        pattern: null,
                        name: "Bosnia and Herzegovina",
                        phone_number_regex: null,
                        dial_code: "387"
                    },
                    BW: {
                        pattern: null,
                        name: "Botswana",
                        phone_number_regex: null,
                        dial_code: "267"
                    },
                    BR: {
                        pattern: "^[0-9]{5}-[0-9]{3}$",
                        name: "Brazil",
                        phone_number_regex: null,
                        dial_code: "55"
                    },
                    BN: {
                        pattern: "^[A-Z]{2}[0-9]{4}$",
                        name: "Brunei",
                        phone_number_regex: null,
                        dial_code: "673"
                    },
                    BG: {
                        pattern: r,
                        name: "Bulgaria",
                        phone_number_regex: null,
                        dial_code: "359"
                    },
                    BF: {
                        pattern: null,
                        name: "Burkina Faso",
                        phone_number_regex: null,
                        dial_code: "226"
                    },
                    BI: {
                        pattern: null,
                        name: "Burundi",
                        phone_number_regex: null,
                        dial_code: "257"
                    },
                    KH: {
                        pattern: "^[0-9]{5}$",
                        name: "Cambodia",
                        phone_number_regex: null,
                        dial_code: "855"
                    },
                    CM: {
                        pattern: null,
                        name: "Cameroon",
                        phone_number_regex: null,
                        dial_code: "237"
                    },
                    CV: {
                        pattern: null,
                        name: "Cape Verde",
                        phone_number_regex: null,
                        dial_code: "238"
                    },
                    KY: {
                        pattern: "^[A-Z]{2}[0-9]-[0-9]{4}$",
                        name: "Cayman Islands",
                        phone_number_regex: null,
                        dial_code: "1345"
                    },
                    CF: {
                        pattern: null,
                        name: "Central African Republic",
                        phone_number_regex: null,
                        dial_code: "236"
                    },
                    TD: {
                        pattern: null,
                        name: "Chad",
                        phone_number_regex: null,
                        dial_code: "235"
                    },
                    CL: {
                        pattern: "^[0-9]{7}$",
                        name: "Chile",
                        phone_number_regex: null,
                        dial_code: "56"
                    },
                    CN: {
                        pattern: "^[0-9]{6}$",
                        name: "China, People's Republic",
                        phone_number_regex: null,
                        dial_code: "86"
                    },
                    CO: {
                        pattern: "^[0-9]{6}$",
                        name: "Colombia",
                        phone_number_regex: null,
                        dial_code: "57"
                    },
                    KM: {
                        pattern: null,
                        name: "Comoros",
                        phone_number_regex: null,
                        dial_code: "269"
                    },
                    CG: {
                        pattern: null,
                        name: "Congo",
                        phone_number_regex: null,
                        dial_code: "242"
                    },
                    CD: {
                        pattern: null,
                        name: "Congo, The Democratic Republic of",
                        phone_number_regex: null,
                        dial_code: "243"
                    },
                    CK: {
                        pattern: null,
                        name: "Cook Islands",
                        phone_number_regex: null,
                        dial_code: "682"
                    },
                    CR: {
                        pattern: "^[0-9]{5}$",
                        name: "Costa Rica",
                        phone_number_regex: null,
                        dial_code: "506"
                    },
                    HR: {
                        pattern: "^[0-9]{5}$",
                        name: "Croatia",
                        phone_number_regex: null,
                        dial_code: "385"
                    },
                    CU: {
                        pattern: "^[0-9]{5}$",
                        name: "Cuba",
                        phone_number_regex: null,
                        dial_code: "53"
                    },
                    CW: {
                        pattern: null,
                        name: "Curacao",
                        phone_number_regex: null,
                        dial_code: "599"
                    },
                    CY: {
                        pattern: r,
                        name: "Cyprus",
                        phone_number_regex: null,
                        dial_code: "357"
                    },
                    CZ: {
                        pattern: "^[0-9]{3} [0-9]{2}$",
                        name: "Czech Republic",
                        phone_number_regex: null,
                        dial_code: "420"
                    },
                    DK: {
                        pattern: r,
                        name: "Denmark",
                        phone_number_regex: null,
                        dial_code: "45"
                    },
                    DJ: {
                        pattern: null,
                        name: "Djibouti",
                        phone_number_regex: null,
                        dial_code: "253"
                    },
                    DM: {
                        pattern: null,
                        name: "Dominica",
                        phone_number_regex: null,
                        dial_code: "1767"
                    },
                    DO: {
                        pattern: null,
                        name: "Dominican Republic",
                        phone_number_regex: null,
                        dial_code: "1849"
                    },
                    TL: {
                        pattern: null,
                        name: "East Timor",
                        phone_number_regex: null,
                        dial_code: "670"
                    },
                    EC: {
                        pattern: "^[0-9]{6}$",
                        name: "Ecuador",
                        phone_number_regex: null,
                        dial_code: "593"
                    },
                    EG: {
                        pattern: "^[0-9]{5}$",
                        name: "Egypt",
                        phone_number_regex: null,
                        dial_code: "20"
                    },
                    SV: {
                        pattern: null,
                        name: "El Salvador",
                        phone_number_regex: null,
                        dial_code: "503"
                    },
                    ER: {
                        pattern: null,
                        name: "Eritrea",
                        phone_number_regex: null,
                        dial_code: "291"
                    },
                    EE: {
                        pattern: "^[0-9]{5}$",
                        name: "Estonia",
                        phone_number_regex: null,
                        dial_code: "372"
                    },
                    ET: {
                        pattern: r,
                        name: "Ethiopia",
                        phone_number_regex: null,
                        dial_code: "251"
                    },
                    FK: {
                        pattern: null,
                        name: "Falkland Islands",
                        phone_number_regex: null,
                        dial_code: "500"
                    },
                    FO: {
                        pattern: null,
                        name: "Faroe Islands",
                        phone_number_regex: null,
                        dial_code: "298"
                    },
                    FJ: {
                        pattern: null,
                        name: "Fiji",
                        phone_number_regex: null,
                        dial_code: "679"
                    },
                    FI: {
                        pattern: "^[0-9]{5}$",
                        name: "Finland",
                        phone_number_regex: null,
                        dial_code: "358"
                    },
                    FR: {
                        pattern: "^[0-9]{5}$",
                        name: "France",
                        phone_number_regex: null,
                        dial_code: "33"
                    },
                    PF: {
                        pattern: null,
                        name: "French Polynesia",
                        phone_number_regex: null,
                        dial_code: "689"
                    },
                    GA: {
                        pattern: null,
                        name: "Gabon",
                        phone_number_regex: null,
                        dial_code: "241"
                    },
                    GM: {
                        pattern: null,
                        name: "Gambia",
                        phone_number_regex: null,
                        dial_code: "220"
                    },
                    GE: {
                        pattern: null,
                        name: "Georgia",
                        phone_number_regex: null,
                        dial_code: "995"
                    },
                    DE: {
                        pattern: "^[0-9]{5}$",
                        name: "Germany",
                        phone_number_regex: null,
                        dial_code: "49"
                    },
                    GH: {
                        pattern: null,
                        name: "Ghana",
                        phone_number_regex: null,
                        dial_code: "233"
                    },
                    GI: {
                        pattern: null,
                        name: "Gibraltar",
                        phone_number_regex: null,
                        dial_code: "350"
                    },
                    GR: {
                        pattern: "^[0-9]{3} ?[0-9]{2}$",
                        name: "Greece",
                        phone_number_regex: null,
                        dial_code: "30"
                    },
                    GL: {
                        pattern: null,
                        name: "Greenland",
                        phone_number_regex: null,
                        dial_code: "299"
                    },
                    GD: {
                        pattern: null,
                        name: "Grenada",
                        phone_number_regex: null,
                        dial_code: "1473"
                    },
                    GP: {
                        pattern: null,
                        name: "Guadeloupe",
                        phone_number_regex: null,
                        dial_code: "590"
                    },
                    GU: {
                        pattern: null,
                        name: "Guam",
                        phone_number_regex: null,
                        dial_code: "1671"
                    },
                    FM: {
                        pattern: null,
                        name: "Micronesia",
                        phone_number_regex: null,
                        dial_code: "691"
                    },
                    GT: {
                        pattern: null,
                        name: "Guatemala",
                        phone_number_regex: null,
                        dial_code: "502"
                    },
                    IM: {
                        pattern: null,
                        name: "Isle of Man",
                        phone_number_regex: null,
                        dial_code: "441624"
                    },
                    IO: {
                        pattern: null,
                        name: "British Indian Ocean Territory",
                        phone_number_regex: null,
                        dial_code: "246"
                    },
                    MF: {
                        pattern: "^97150$",
                        name: "Saint Martin",
                        phone_number_regex: null,
                        dial_code: "590"
                    },
                    NF: {
                        pattern: null,
                        name: "Norfolk Island",
                        phone_number_regex: null,
                        dial_code: "672"
                    },
                    PM: {
                        pattern: null,
                        name: "Saint Pierre and Miquelon",
                        phone_number_regex: null,
                        dial_code: "508"
                    },
                    PN: {
                        pattern: null,
                        name: "Pitcairn",
                        phone_number_regex: null,
                        dial_code: "64"
                    },
                    GG: {
                        pattern: null,
                        name: "Guernsey",
                        phone_number_regex: null,
                        dial_code: "441481"
                    },
                    PS: {
                        pattern: null,
                        name: "Palestine",
                        phone_number_regex: null,
                        dial_code: "970"
                    },
                    GW: {
                        pattern: r,
                        name: "Guinea-Bissau",
                        phone_number_regex: null,
                        dial_code: "245"
                    },
                    GQ: {
                        pattern: null,
                        name: "Guinea-Equatorial",
                        phone_number_regex: null,
                        dial_code: "240"
                    },
                    GN: {
                        pattern: "^[0-9]{3}$",
                        name: "Guinea Republic",
                        phone_number_regex: null,
                        dial_code: "224"
                    },
                    GY: {
                        pattern: null,
                        name: "Guyana (British)",
                        phone_number_regex: null,
                        dial_code: "592"
                    },
                    GF: {
                        pattern: null,
                        name: "Guyana (French)",
                        phone_number_regex: null,
                        dial_code: "594"
                    },
                    HT: {
                        pattern: r,
                        name: "Haiti",
                        phone_number_regex: null,
                        dial_code: "509"
                    },
                    HN: {
                        pattern: null,
                        name: "Honduras",
                        phone_number_regex: null,
                        dial_code: "504"
                    },
                    HK: {
                        pattern: null,
                        name: "Hong Kong",
                        phone_number_regex: null,
                        dial_code: "852"
                    },
                    HU: {
                        pattern: r,
                        name: "Hungary",
                        phone_number_regex: null,
                        dial_code: "36"
                    },
                    IS: {
                        pattern: "^[0-9]{3}$",
                        name: "Iceland",
                        phone_number_regex: null,
                        dial_code: "354"
                    },
                    ID: {
                        pattern: "^[0-9]{5}$",
                        name: "Indonesia",
                        phone_number_regex: null,
                        dial_code: "62"
                    },
                    IR: {
                        pattern: "null",
                        name: "Iran",
                        phone_number_regex: null,
                        dial_code: "98"
                    },
                    IQ: {
                        pattern: "^[0-9]{5}$",
                        name: "Iraq",
                        phone_number_regex: null,
                        dial_code: "964"
                    },
                    IE: {
                        pattern: "(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$",
                        name: "Ireland, Republic of",
                        phone_number_regex: null,
                        dial_code: "353"
                    },
                    IL: {
                        pattern: "^[0-9]{5}|[0-9]{7}$",
                        name: "Israel",
                        phone_number_regex: null,
                        dial_code: "972"
                    },
                    IT: {
                        pattern: "^[0-9]{5}$",
                        name: "Italy",
                        phone_number_regex: null,
                        dial_code: "39"
                    },
                    SJ: {
                        pattern: null,
                        name: "Svalbard and Jan Mayen",
                        phone_number_regex: null,
                        dial_code: "47"
                    },
                    SM: {
                        pattern: null,
                        name: "San Marino",
                        phone_number_regex: null,
                        dial_code: "378"
                    },
                    CI: {
                        pattern: null,
                        name: "Ivory Coast",
                        phone_number_regex: null,
                        dial_code: "225"
                    },
                    JM: {
                        pattern: "(JM)[A-Z]{3}[0-9]{2}$",
                        name: "Jamaica",
                        phone_number_regex: null,
                        dial_code: "1876"
                    },
                    JP: {
                        pattern: "^[0-9]{3}-?[0-9]{4}$",
                        name: "Japan",
                        phone_number_regex: null,
                        dial_code: "81"
                    },
                    JE: {
                        pattern: null,
                        name: "Jersey",
                        phone_number_regex: null,
                        dial_code: "441534"
                    },
                    JO: {
                        pattern: "^[0-9]{5}$",
                        name: "Jordan",
                        phone_number_regex: null,
                        dial_code: "962"
                    },
                    KZ: {
                        pattern: "^[0-9]{6}$",
                        name: "Kazakhstan",
                        phone_number_regex: null,
                        dial_code: "7"
                    },
                    TJ: {
                        pattern: "^[0-9]{6}$",
                        name: "Tajikistan",
                        phone_number_regex: null,
                        dial_code: "992"
                    },
                    TK: {
                        pattern: null,
                        name: "Tokelau",
                        phone_number_regex: null,
                        dial_code: "690"
                    },
                    KE: {
                        pattern: "^[0-9]{5}$",
                        name: "Kenya",
                        phone_number_regex: null,
                        dial_code: "254"
                    },
                    KI: {
                        pattern: null,
                        name: "Kiribati",
                        phone_number_regex: null,
                        dial_code: "686"
                    },
                    KR: {
                        pattern: "^[0-9]{3}[-][0-9]{3}$|^[0-9]{5}$",
                        name: "Korea, Republic of",
                        phone_number_regex: null,
                        dial_code: "82"
                    },
                    KP: {
                        pattern: null,
                        name: "Korea, The D.P.R of",
                        phone_number_regex: null,
                        dial_code: "850"
                    },
                    XK: {
                        pattern: null,
                        name: "Kosovo",
                        phone_number_regex: null,
                        dial_code: "383"
                    },
                    KW: {
                        pattern: null,
                        name: "Kuwait",
                        phone_number_regex: null,
                        dial_code: "965"
                    },
                    KG: {
                        pattern: "^[0-9]{6}$",
                        name: "Kyrgyzstan",
                        phone_number_regex: null,
                        dial_code: "996"
                    },
                    LA: {
                        pattern: "^[0-9]{5}$",
                        name: "Laos",
                        phone_number_regex: null,
                        dial_code: "856"
                    },
                    LV: {
                        pattern: r,
                        name: "Latvia",
                        phone_number_regex: null,
                        dial_code: "371"
                    },
                    LB: {
                        pattern: "^[0-9]{4} ?[0-9]{4}$",
                        name: "Lebanon",
                        phone_number_regex: null,
                        dial_code: "961"
                    },
                    LS: {
                        pattern: "^[0-9]{3}$",
                        name: "Lesotho",
                        phone_number_regex: null,
                        dial_code: "266"
                    },
                    LR: {
                        pattern: r,
                        name: "Liberia",
                        phone_number_regex: null,
                        dial_code: "231"
                    },
                    LY: {
                        pattern: null,
                        name: "Libya",
                        phone_number_regex: null,
                        dial_code: "218"
                    },
                    LI: {
                        pattern: null,
                        name: "Liechtenstein",
                        phone_number_regex: null,
                        dial_code: "423"
                    },
                    LT: {
                        pattern: "^LT-[0-9]{5}$",
                        name: "Lithuania",
                        phone_number_regex: null,
                        dial_code: "370"
                    },
                    LU: {
                        pattern: r,
                        name: "Luxembourg",
                        phone_number_regex: null,
                        dial_code: "352"
                    },
                    MO: {
                        pattern: null,
                        name: "Macau",
                        phone_number_regex: null,
                        dial_code: "853"
                    },
                    MK: {
                        pattern: null,
                        name: "Macedonia, Republic of",
                        phone_number_regex: null,
                        dial_code: "389"
                    },
                    MG: {
                        pattern: "^[0-9]{3}$",
                        name: "Madagascar",
                        phone_number_regex: null,
                        dial_code: "261"
                    },
                    MW: {
                        pattern: null,
                        name: "Malawi",
                        phone_number_regex: null,
                        dial_code: "265"
                    },
                    MY: {
                        pattern: "^[0-9]{5}$",
                        name: "Malaysia",
                        phone_number_regex: "^(\\+60|0)?(1)-*[0-9]{8}$|^(\\+60|0)?(11)-*[0-9]{8}$",
                        dial_code: "60"
                    },
                    MV: {
                        pattern: "^[0-9]{5}$",
                        name: "Maldives",
                        phone_number_regex: null,
                        dial_code: "960"
                    },
                    ML: {
                        pattern: null,
                        name: "Mali",
                        phone_number_regex: null,
                        dial_code: "223"
                    },
                    MT: {
                        pattern: null,
                        name: "Malta",
                        phone_number_regex: null,
                        dial_code: "356"
                    },
                    MH: {
                        pattern: null,
                        name: "Marshall Islands",
                        phone_number_regex: null,
                        dial_code: "692"
                    },
                    MQ: {
                        pattern: null,
                        name: "Martinique",
                        phone_number_regex: null,
                        dial_code: "596"
                    },
                    MR: {
                        pattern: null,
                        name: "Mauritania",
                        phone_number_regex: null,
                        dial_code: "222"
                    },
                    MU: {
                        pattern: "^[0-9]{5}$",
                        name: "Mauritius",
                        phone_number_regex: null,
                        dial_code: "230"
                    },
                    YT: {
                        pattern: null,
                        name: "Mayotte",
                        phone_number_regex: null,
                        dial_code: "262"
                    },
                    MX: {
                        pattern: "^[0-9]{5}$",
                        name: "Mexico",
                        phone_number_regex: null,
                        dial_code: "52"
                    },
                    MD: {
                        pattern: "^MD-?[0-9]{4}$",
                        name: "Moldova, Republic of",
                        phone_number_regex: null,
                        dial_code: "373"
                    },
                    MC: {
                        pattern: null,
                        name: "Monaco",
                        phone_number_regex: null,
                        dial_code: "377"
                    },
                    MN: {
                        pattern: "^[0-9]{5}$",
                        name: "Mongolia",
                        phone_number_regex: null,
                        dial_code: "976"
                    },
                    ME: {
                        pattern: null,
                        name: "Montenegro",
                        phone_number_regex: null,
                        dial_code: "382"
                    },
                    MS: {
                        pattern: "^MSR ?[0-9]{4}$",
                        name: "Montserrat",
                        phone_number_regex: null,
                        dial_code: "1664"
                    },
                    MA: {
                        pattern: "^[0-9]{5}$",
                        name: "Morocco",
                        phone_number_regex: null,
                        dial_code: "212"
                    },
                    MZ: {
                        pattern: r,
                        name: "Mozambique",
                        phone_number_regex: null,
                        dial_code: "258"
                    },
                    MM: {
                        pattern: "^[0-9]{5}$",
                        name: "Myanmar",
                        phone_number_regex: null,
                        dial_code: "95"
                    },
                    NA: {
                        pattern: null,
                        name: "Namibia",
                        phone_number_regex: null,
                        dial_code: "264"
                    },
                    NR: {
                        pattern: null,
                        name: "Nauru",
                        phone_number_regex: null,
                        dial_code: "674"
                    },
                    NP: {
                        pattern: "^[0-9]{5}$",
                        name: "Nepal",
                        phone_number_regex: null,
                        dial_code: "977"
                    },
                    NL: {
                        pattern: "^(?:NL-)?([0-9]{4}) ?([A-Za-z]{2})$",
                        name: "Netherlands",
                        phone_number_regex: null,
                        dial_code: "31"
                    },
                    NC: {
                        pattern: null,
                        name: "New Caledonia",
                        phone_number_regex: null,
                        dial_code: "687"
                    },
                    NZ: {
                        pattern: r,
                        name: "New Zealand",
                        phone_number_regex: null,
                        dial_code: "64"
                    },
                    NI: {
                        pattern: null,
                        name: "Nicaragua",
                        phone_number_regex: null,
                        dial_code: "505"
                    },
                    NE: {
                        pattern: r,
                        name: "Niger",
                        phone_number_regex: null,
                        dial_code: "227"
                    },
                    NG: {
                        pattern: "^[0-9]{6}$",
                        name: "Nigeria",
                        phone_number_regex: null,
                        dial_code: "234"
                    },
                    NU: {
                        pattern: null,
                        name: "Niue",
                        phone_number_regex: null,
                        dial_code: "683"
                    },
                    MP: {
                        pattern: null,
                        name: "Northern Mariana Islands",
                        phone_number_regex: null,
                        dial_code: "1670"
                    },
                    NO: {
                        pattern: r,
                        name: "Norway",
                        phone_number_regex: null,
                        dial_code: "47"
                    },
                    OM: {
                        pattern: "^[0-9]{3}$",
                        name: "Oman",
                        phone_number_regex: null,
                        dial_code: "968"
                    },
                    PK: {
                        pattern: null,
                        name: "Pakistan",
                        phone_number_regex: null,
                        dial_code: "92"
                    },
                    PW: {
                        pattern: null,
                        name: "Palau",
                        phone_number_regex: null,
                        dial_code: "680"
                    },
                    PA: {
                        pattern: r,
                        name: "Panama",
                        phone_number_regex: null,
                        dial_code: "507"
                    },
                    PG: {
                        pattern: "^[0-9]{3}$",
                        name: "Papua New Guinea",
                        phone_number_regex: null,
                        dial_code: "675"
                    },
                    PY: {
                        pattern: r,
                        name: "Paraguay",
                        phone_number_regex: null,
                        dial_code: "595"
                    },
                    PE: {
                        pattern: "^[0-9]{5}$",
                        name: "Peru",
                        phone_number_regex: null,
                        dial_code: "51"
                    },
                    PH: {
                        pattern: r,
                        name: "Philippines",
                        phone_number_regex: null,
                        dial_code: "63"
                    },
                    PL: {
                        pattern: "^[0-9]{2}-[0-9]{3}$",
                        name: "Poland",
                        phone_number_regex: null,
                        dial_code: "48"
                    },
                    PT: {
                        pattern: "^[0-9]{4}-[0-9]{3}$",
                        name: "Portugal",
                        phone_number_regex: null,
                        dial_code: "351"
                    },
                    PR: {
                        pattern: null,
                        name: "Puerto Rico",
                        phone_number_regex: null,
                        dial_code: "1939"
                    },
                    QA: {
                        pattern: null,
                        name: "Qatar",
                        phone_number_regex: null,
                        dial_code: "974"
                    },
                    RE: {
                        pattern: null,
                        name: "Réunion",
                        phone_number_regex: null,
                        dial_code: "262"
                    },
                    RO: {
                        pattern: "^[0-9]{6}$",
                        name: "Romania",
                        phone_number_regex: null,
                        dial_code: "40"
                    },
                    RU: {
                        pattern: "^[0-9]{6}$",
                        name: "Russian Federation",
                        phone_number_regex: null,
                        dial_code: "7"
                    },
                    RW: {
                        pattern: null,
                        name: "Rwanda",
                        phone_number_regex: null,
                        dial_code: "250"
                    },
                    WS: {
                        pattern: null,
                        name: "Samoa",
                        phone_number_regex: null,
                        dial_code: "685"
                    },
                    ST: {
                        pattern: null,
                        name: "Sao Tome and Principe",
                        phone_number_regex: null,
                        dial_code: "239"
                    },
                    SA: {
                        pattern: "^[0-9]{5}(-[0-9]{4})?$",
                        name: "Saudi Arabia",
                        phone_number_regex: null,
                        dial_code: "966"
                    },
                    SN: {
                        pattern: "^[0-9]{5}$",
                        name: "Senegal",
                        phone_number_regex: null,
                        dial_code: "221"
                    },
                    RS: {
                        pattern: "^[0-9]{5}$",
                        name: "Serbia",
                        phone_number_regex: null,
                        dial_code: "381"
                    },
                    SC: {
                        pattern: null,
                        name: "Seychelles",
                        phone_number_regex: null,
                        dial_code: "248"
                    },
                    SL: {
                        pattern: null,
                        name: "Sierra Leone",
                        phone_number_regex: null,
                        dial_code: "232"
                    },
                    SG: {
                        pattern: "^[0-9]{6}$",
                        name: "Singapore",
                        phone_number_regex: null,
                        dial_code: "65"
                    },
                    SK: {
                        pattern: "^[0-9]{3} ?[0-9]{2}$",
                        name: "Slovakia",
                        phone_number_regex: null,
                        dial_code: "421"
                    },
                    SI: {
                        pattern: r,
                        name: "Slovenia",
                        phone_number_regex: null,
                        dial_code: "386"
                    },
                    SB: {
                        pattern: null,
                        name: "Solomon Islands",
                        phone_number_regex: null,
                        dial_code: "677"
                    },
                    SO: {
                        pattern: null,
                        name: "Somalia",
                        phone_number_regex: null,
                        dial_code: "252"
                    },
                    ZA: {
                        pattern: r,
                        name: "South Africa",
                        phone_number_regex: null,
                        dial_code: "27"
                    },
                    SS: {
                        pattern: null,
                        name: "South Sudan",
                        phone_number_regex: null,
                        dial_code: "211"
                    },
                    ES: {
                        pattern: "^[0-9]{5}$",
                        name: "Spain",
                        phone_number_regex: null,
                        dial_code: "34"
                    },
                    LK: {
                        pattern: "^[0-9]{5}$",
                        name: "Sri Lanka",
                        phone_number_regex: null,
                        dial_code: "94"
                    },
                    BL: {
                        pattern: null,
                        name: "St. Barthélemy",
                        phone_number_regex: null,
                        dial_code: "590"
                    },
                    SH: {
                        pattern: null,
                        name: "St. Helena",
                        phone_number_regex: null,
                        dial_code: "290"
                    },
                    KN: {
                        pattern: "^[A-Z]{2}[0-9]{4}$",
                        name: "St. Kitts and Nevis",
                        phone_number_regex: null,
                        dial_code: "1869"
                    },
                    LC: {
                        pattern: "^[A-Z]{2}[0-9]{2} ?[0-9]{3}$",
                        name: "St. Lucia",
                        phone_number_regex: null,
                        dial_code: "1758"
                    },
                    SX: {
                        pattern: null,
                        name: "St. Maarten",
                        phone_number_regex: null,
                        dial_code: "1721"
                    },
                    VC: {
                        pattern: "^VC[0-9]{4}$",
                        name: "St. Vincent and the Grenadines",
                        phone_number_regex: null,
                        dial_code: "1784"
                    },
                    SD: {
                        pattern: "^[0-9]{5}$",
                        name: "Sudan",
                        phone_number_regex: null,
                        dial_code: "249"
                    },
                    SR: {
                        pattern: null,
                        name: "Suriname",
                        phone_number_regex: null,
                        dial_code: "597"
                    },
                    SZ: {
                        pattern: "^[A-Z]{1}[0-9]{3}$",
                        name: "Swaziland",
                        phone_number_regex: null,
                        dial_code: "268"
                    },
                    SE: {
                        pattern: "^[0-9]{3} ?[0-9]{2}$",
                        name: "Sweden",
                        phone_number_regex: null,
                        dial_code: "46"
                    },
                    CH: {
                        pattern: r,
                        name: "Switzerland",
                        phone_number_regex: null,
                        dial_code: "41"
                    },
                    SY: {
                        pattern: null,
                        name: "Syria",
                        phone_number_regex: null,
                        dial_code: "963"
                    },
                    TW: {
                        pattern: "^[0-9]{3}(-[0-9]{2})?$",
                        name: "Taiwan",
                        phone_number_regex: null,
                        dial_code: "886"
                    },
                    TZ: {
                        pattern: "^[0-9]{5}$",
                        name: "Tanzania",
                        phone_number_regex: null,
                        dial_code: "255"
                    },
                    TH: {
                        pattern: "^[0-9]{5}$",
                        name: "Thailand",
                        phone_number_regex: null,
                        dial_code: "66"
                    },
                    TG: {
                        pattern: null,
                        name: "Togo",
                        phone_number_regex: null,
                        dial_code: "228"
                    },
                    TO: {
                        pattern: null,
                        name: "Tonga",
                        phone_number_regex: null,
                        dial_code: "676"
                    },
                    TT: {
                        pattern: "^[0-9]{6}$",
                        name: "Trinidad and Tobago",
                        phone_number_regex: null,
                        dial_code: "1868"
                    },
                    TN: {
                        pattern: r,
                        name: "Tunisia",
                        phone_number_regex: null,
                        dial_code: "216"
                    },
                    TR: {
                        pattern: "^[0-9]{5}$",
                        name: "Turkey",
                        phone_number_regex: null,
                        dial_code: "90"
                    },
                    TM: {
                        pattern: "^[0-9]{6}$",
                        name: "Turkmenistan",
                        phone_number_regex: null,
                        dial_code: "993"
                    },
                    TC: {
                        pattern: "^TKCA ?1ZZ$",
                        name: "Turks and Caicos Islands",
                        phone_number_regex: null,
                        dial_code: "1649"
                    },
                    TV: {
                        pattern: null,
                        name: "Tuvalu",
                        phone_number_regex: null,
                        dial_code: "688"
                    },
                    UG: {
                        pattern: null,
                        name: "Uganda",
                        phone_number_regex: null,
                        dial_code: "256"
                    },
                    UA: {
                        pattern: "^[0-9]{5}$",
                        name: "Ukraine",
                        phone_number_regex: null,
                        dial_code: "380"
                    },
                    AE: {
                        pattern: null,
                        name: "United Arab Emirates",
                        phone_number_regex: null,
                        dial_code: "971"
                    },
                    UY: {
                        pattern: "^[0-9]{5}$",
                        name: "Uruguay",
                        phone_number_regex: null,
                        dial_code: "598"
                    },
                    UZ: {
                        pattern: "^[0-9]{6}$",
                        name: "Uzbekistan",
                        phone_number_regex: null,
                        dial_code: "998"
                    },
                    WF: {
                        pattern: null,
                        name: "Wallis and Futuna",
                        phone_number_regex: null,
                        dial_code: "681"
                    },
                    VA: {
                        pattern: null,
                        name: "Vatican",
                        phone_number_regex: null,
                        dial_code: "379"
                    },
                    VU: {
                        pattern: null,
                        name: "Vanuatu",
                        phone_number_regex: null,
                        dial_code: "678"
                    },
                    VE: {
                        pattern: "^[0-9]{4}(-[A-Z]{1})?$",
                        name: "Venezuela",
                        phone_number_regex: null,
                        dial_code: "58"
                    },
                    VN: {
                        pattern: "^[0-9]{6}$",
                        name: "Vietnam",
                        phone_number_regex: null,
                        dial_code: "84"
                    },
                    VG: {
                        pattern: null,
                        name: "British Virgin Islands",
                        phone_number_regex: null,
                        dial_code: "1284"
                    },
                    VI: {
                        pattern: null,
                        name: "U.S. Virgin Islands",
                        phone_number_regex: null,
                        dial_code: "1340"
                    },
                    YE: {
                        pattern: null,
                        name: "Yemen",
                        phone_number_regex: null,
                        dial_code: "967"
                    },
                    ZM: {
                        pattern: "^[0-9]{5}$",
                        name: "Zambia",
                        phone_number_regex: null,
                        dial_code: "260"
                    },
                    ZW: {
                        pattern: null,
                        name: "Zimbabwe",
                        phone_number_regex: null,
                        dial_code: "263"
                    }
                };
            a.d(n, ["T", 0, "^\\(\\d{3}\\)[\\s-]?\\d{3}-?\\d{4}$", "a", 0, o])
        },
        45440(e, n, a) {
            a.d(n, {
                $O: () => u,
                B8: () => l,
                Uh: () => i,
                Z: () => m,
                tc: () => p
            });
            var r = a(54045),
                o = a(69417);
            const t = (0, a(65047).symbol)();

            function l(e) {
                return e = s(e), Object.keys(r.a).find((n => r.a[n].dial_code === e))
            }

            function i(e) {
                return !/[^\d\+\s\-\(\)]+/.test(e)
            }

            function p(e) {
                const n = ["IN", "US", "MY"];
                for (const o of n) {
                    var a;
                    const n = r.a[o].phone_number_regex;
                    let t;
                    if ("IN" === o ? t = d(e) : "US" === o ? t = h(e, o, r.T) : n && (t = h(e, o, n)), null !== (a = t) && void 0 !== a && a.success) return {
                        phone: t.phone,
                        code: t.code,
                        countryCode: o
                    }
                }
                const o = c(e),
                    t = function(e) {
                        e = s(e);
                        let n = [];
                        Object.keys(r.a).forEach((e => {
                            const a = r.a[e].dial_code,
                                o = a.length;
                            n[o] || (n[o] = []), n[o].push(a)
                        })), n = n.filter(Boolean).reverse();
                        for (let a = 0; a < n.length; a++) {
                            const r = n[a].find((n => e.startsWith(n)));
                            if (r) return r
                        }
                    }(o);
                let l = s(o);
                return t && (l = l.slice(t.length)), {
                    phone: l,
                    code: t
                }
            }

            function d(e) {
                if (e = c(e), _(e) && !e.startsWith("+91")) return {
                    success: !1
                };
                let n = s(e),
                    a = !1;
                for (; n.startsWith("91") && n.length > 10;) n = n.slice(2);
                return 10 === n.length && /^[6-9]/.test(n) && (a = !0), {
                    success: a,
                    phone: n,
                    code: "91"
                }
            }

            function c(e) {
                const n = (e = function(e) {
                    return /^0{2}/.test(e)
                }(e += "") ? `+${u(e)}` : u(e)).startsWith("+");
                let a = e.replace(/\D/g, "");
                return n && (a = "+" + a), a
            }

            function u(e) {
                return e.replace(/^0*/, "")
            }

            function m(e, n) {
                return (0, o.kw)(n) ? e : u(e)
            }
            const _ = e => e.startsWith("+"),
                s = e => e.replace(/^\+/, "");

            function h(e, n, a) {
                e = e.trim();
                if (new RegExp(a).test(e)) {
                    const a = r.a[n].dial_code,
                        o = "+" + a;
                    return e.startsWith(a) ? e = e.slice(a.length) : e.startsWith(o) && (e = e.slice(o.length)), {
                        success: !0,
                        code: a,
                        phone: c(e)
                    }
                }
                return {
                    success: !1
                }
            }
            a.d(n, ["MC", 0, t, "n$", 0, s])
        },
        11905(e, n, a) {
            a.d(n, {
                Sx: () => o,
                kW: () => t,
                qD: () => l
            });
            var r = a(82435);

            function o() {
                return (0, r.jI)("dcc")
            }

            function t() {
                return o() && (0, r.jI)("show_custom_dcc_disclosures", !1)
            }

            function l() {
                return (0, r.jI)("hide_rzpbrand_on_checkout", !1) && t()
            }
        },
        71826(e, n, a) {
            a.d(n, {
                LP: () => t
            });
            var r = a(82435),
                o = a(28949);

            function t(e) {
                const n = (0, r.Br)("netbanking_2_0_checkout"),
                    a = (0, o.ve)("methods.data.details.netbanking_2_0", {});
                return n && Boolean(null == a ? void 0 : a[e])
            }
            const l = "duitnow_revamp_enabled",
                i = "pix_in_checkout_experiment";
            a.d(n, ["EG", 0, () => (0, r.Br)(i), "J", 0, () => (0, r.Br)(l), "NS", 0, () => (0, r.Br)("linked_payments_enable") && (0, r.jI)("is_linked_payment_enabled"), "_c", 0, i, "dB", 0, l, "wU", 0, () => (0, r.Br)("paynow_revamp_enabled")])
        },
        95845(e, n, a) {
            a.d(n, {
                Ou: () => p,
                Rb: () => d,
                Ry: () => i,
                iI: () => c,
                r$: () => o,
                uV: () => t,
                ud: () => l
            });
            var r = a(28949);

            function o() {
                return (0, r.ve)("order.data")
            }

            function t() {
                return (0, r.ve)("subscription.data")
            }

            function l() {
                return (0, r.ve)("order.data.currency")
            }

            function i() {
                return (0, r.ve)("subscription.data.currency")
            }

            function p() {
                return (0, r.ve)("merchant.data.metadata.currency") || "INR"
            }

            function d() {
                return (0, r.ve)("merchant.data.metadata.country") || "IN"
            }

            function c() {
                var e;
                const n = null === (e = o()) || void 0 === e ? void 0 : e.bank,
                    a = (0, r.ve)("methods.data.details.netbanking", {});
                return n ? a[n] ? {
                    [n]: a[n]
                } : {} : a
            }
        },
        63478(e, n, a) {
            a.d(n, {
                OJ: () => k,
                jW: () => f,
                rN: () => v
            });
            var r = a(28949),
                o = a(45440),
                t = a(71826),
                l = a(26718);
            const i = () => (0, r.ve)("methods.data.details.addon_methods.affordability.paylater"),
                p = () => (0, r.ve)("methods.data.details.i18n.duitnow_pay", {}),
                d = () => (0, r.ve)("methods.data.details.upi.enabled"),
                c = () => (0, r.ve)("methods.data.details.wallet"),
                u = () => (0, r.ve)("methods.data.details.duitnow_qr", {}),
                m = () => (0, r.ve)("methods.data.details.duitnow_qr.enabled"),
                _ = () => (0, r.ve)("methods.data.details.duitnow", {}),
                s = () => {
                    var e;
                    return !(null === (e = _()) || void 0 === e || !e.enabled)
                },
                h = () => {
                    var e;
                    return s() && !(null === (e = _()) || void 0 === e || null === (e = e.flow) || void 0 === e || !e.qr)
                },
                g = () => {
                    var e;
                    return s() && !(null === (e = _()) || void 0 === e || null === (e = e.flow) || void 0 === e || !e.online_banking)
                },
                b = () => Boolean((0, r.ve)("methods.data.details.pix.enabled"));

            function v() {
                const e = d(),
                    n = (0, r.ve)("methods.data.details.upi.upi_type") || {
                        collect: Number(e),
                        intent: Number(e)
                    };
                return {
                    collect: e && (null == n ? void 0 : n.collect),
                    intent: e && (null == n ? void 0 : n.intent) && Boolean((0, r.ve)("methods.data.details.upi.upi_intent"))
                }
            }

            function k() {
                return {
                    credit: Boolean((0, r.ve)("methods.data.details.card.card_type.credit")),
                    debit: Boolean((0, r.ve)("methods.data.details.card.card_type.debit")),
                    prepaid: Boolean((0, r.ve)("methods.data.details.card.card_type.prepaid"))
                }
            }
            const x = {
                blockedCountries: ["in"]
            };

            function f(e) {
                try {
                    var n;
                    if (!(null === (a = c()) || void 0 === a ? void 0 : a.paypal) && !(null === (r = i()) || void 0 === r ? void 0 : r.paypal)) return !1;
                    if (!e) return !1;
                    const t = null === (n = (0, o.B8)(e)) || void 0 === n ? void 0 : n.toLowerCase();
                    if (!t) return !1;
                    const {
                        blockedCountries: l
                    } = x;
                    return !l.includes(t)
                } catch {
                    return !1
                }
                var a, r
            }
            a.d(n, ["BG", 0, () => (0, r.ve)("methods.data.details.wallet_groups.alipay_plus", []), "Dk", 0, () => (0, r.ve)("methods.data.details.app", {}), "FO", 0, () => (0, t.J)() ? h() : !1 !== m(), "GI", 0, () => (0, r.ve)("methods.data.details.paynow.countryBanks", []), "GL", 0, b, "Gf", 0, () => (0, r.ve)("methods.data.details.emi.debit_emi_providers"), "JO", 0, g, "JX", 0, () => (0, r.ve)("methods.data.details.upi.upi_config"), "Lg", 0, () => (0, r.ve)("methods.data.details.i18n.fpx"), "Nj", 0, () => (0, r.ve)("methods.data.details.addon_methods.sodexo"), "Op", 0, () => (0, r.ve)("methods.data.details.recurring"), "QK", 0, () => (0, r.ve)("methods.data.details.enabled.bank_transfer"), "R3", 0, () => (0, r.ve)("methods.data.details.enabled.cod"), "TP", 0, () => (0, r.ve)("methods.data.details.paynow", {}), "TU", 0, p, "U2", 0, () => (0, r.ve)("methods.data.details.enabled.offline"), "VA", 0, () => (0, r.ve)("methods.data.details.emi.emi_types"), "VQ", 0, () => (0, r.ve)("methods.data.details.i18n.paynow"), "WX", 0, () => (0, r.ve)("methods.data.details.addon_methods.intl_bank_transfer"), "XF", 0, () => h() || g() || !(0, l.RI)(p()) || !1 !== m() && !(0, l.RI)(u()), "XJ", 0, () => (0, r.ve)("methods.data.details.card.enabled"), "Z4", 0, () => (0, r.ve)("methods.data.details.i18n.ach"), "cH", 0, () => (0, r.ve)("methods.data.details.emi.enabled"), "dz", 0, c, "en", 0, () => (0, r.ve)("methods.data.details.emi.emi_options"), "f1", 0, d, "kJ", 0, u, "nl", 0, () => b() && (0, t.EG)(), "si", 0, () => (0, r.ve)("methods.data.details.card.card_networks", {}), "tj", 0, h, "vR", 0, () => (0, r.ve)("methods.data.details.enabled.nach"), "z7", 0, () => (0, r.ve)("methods.data.details.addon_methods.affordability.cardless_emi"), "zi", 0, i])
        },
        14494(e, n, a) {
            a.d(n, {
                dX: () => Z,
                yi: () => re,
                Gl: () => ae,
                Dk: () => m.Dk,
                r3: () => oe,
                si: () => m.si,
                OJ: () => m.OJ,
                z7: () => m.z7,
                d7: () => W,
                LG: () => pe,
                AV: () => g,
                W5: () => ne,
                Gf: () => m.Gf,
                PT: () => x,
                vI: () => K,
                HA: () => T,
                en: () => m.en,
                VA: () => m.VA,
                _m: () => o._m,
                Ci: () => V,
                p5: () => B,
                WX: () => m.WX,
                Y4: () => I,
                CS: () => de,
                L0: () => O,
                Rb: () => l.Rb,
                Ou: () => l.Ou,
                qL: () => ee,
                MJ: () => D,
                kd: () => z,
                nd: () => le,
                getNetbanking: () => l.iI,
                Sw: () => F,
                QP: () => S,
                hR: () => j,
                r$: () => l.r$,
                ud: () => l.ud,
                QW: () => A,
                TP: () => m.TP,
                zi: () => m.zi,
                qM: () => he,
                _T: () => C,
                zF: () => me,
                Op: () => m.Op,
                t0: () => k,
                GD: () => f,
                o6: () => y,
                iW: () => M,
                uV: () => l.uV,
                Ry: () => l.Ry,
                uG: () => X,
                f1: () => m.f1,
                JX: () => m.JX,
                rN: () => m.rN,
                dz: () => m.dz,
                jI: () => o.jI,
                Sg: () => $,
                qD: () => i.qD,
                Wl: () => P,
                tq: () => N,
                id: () => h,
                Sx: () => i.Sx,
                kW: () => i.kW,
                XF: () => m.XF,
                d5: () => b,
                Br: () => o.Br,
                Pr: () => _e,
                Dh: () => ge,
                WN: () => Q,
                QV: () => G,
                Wq: () => L,
                kT: () => te,
                A9: () => Y,
                av: () => w,
                h5: () => R,
                z_: () => o.z_,
                DY: () => H,
                Wi: () => v,
                VF: () => ie,
                GL: () => m.GL,
                tF: () => se,
                gJ: () => E,
                j: () => ce,
                _w: () => ue,
                f$: () => J,
                Wj: () => q,
                VS: () => U
            });
            var r = a(28949),
                o = a(82435),
                t = a(26718),
                l = a(95845),
                i = a(11905);
            const p = {
                blocks: {
                    hdfcvas: {
                        name: "Pay using HDFC Bank",
                        instruments: [{
                            method: "netbanking",
                            banks: ["HDFC"]
                        }, {
                            method: "netbanking",
                            banks: ["HDFC_C"]
                        }, {
                            method: "card",
                            issuers: ["HDFC"],
                            types: ["credit"]
                        }, {
                            method: "card",
                            issuers: ["HDFC"],
                            types: ["debit"]
                        }, {
                            method: "wallet",
                            wallets: ["payzapp"]
                        }, {
                            method: "emi",
                            issuers: ["HDFC"]
                        }]
                    }
                },
                sequence: ["block.hdfcvas"]
            };
            var d = a(61114),
                c = a(21117),
                u = a(22974),
                m = a(63478);
            let _;
            a.e(36534).then(a.bind(a, 9523)).then((e => {
                _ = e.isUntrustedResolvedEmail
            })).catch((() => {}));
            let s = !1;

            function h() {
                return (0, r.ve)("merchant.data.properties.fee_bearer", !1)
            }

            function g() {
                return (0, r.ve)("order.data.convenience_fee_config", null)
            }

            function b() {
                return Boolean(g())
            }

            function v() {
                return (0, r.ve)("order.data.partial_payment") || !1
            }

            function k() {
                return (0, r.om)("config.restrictions", null) || (0, r.ve)("methods.data.config.restrictions", null) || (0, r.ve)("checkout_configuration.data.checkout_config.restrictions", {}) || {}
            }

            function x() {
                let e = G() ? p : (0, r.om)("config.display", null) || (0, r.ve)("methods.data.config.display", null) || (0, r.ve)("checkout_configuration.data.checkout_config.display", {}) || {};
                try {
                    const n = k();
                    return (0, t.RI)(e) && !(0, t.RI)(n) && (e = {
                        blocks: {
                            restrict: {
                                instruments: n.allow
                            }
                        },
                        sequence: ["block.restrict"],
                        preferences: {
                            show_default_blocks: !1
                        }
                    }), e
                } catch (n) {
                    return e || {}
                }
            }

            function f() {
                const e = (0, r.ve)("customer.data.contact") || "";
                return e || ""
            }

            function y() {
                var e;
                const n = (0, r.ve)("customer.data.email") || "";
                return n && (0, c.u)() && null !== (e = _) && void 0 !== e && e(n) ? (s || (s = !0, (0, u.logEvent)("untrusted_email_filtered", {
                    source: "preferences_api",
                    email_domain: n.split("@")[1] || "",
                    local_part_length: n.split("@")[0].length
                })), "") : n
            }

            function S() {
                return (0, r.ve)("merchant.data.properties.optional") || []
            }

            function A() {
                const e = (0, r.ve)("order.data.total_tax");
                return "number" == typeof e && Number.isFinite(e) ? e : void 0
            }

            function w() {
                var e;
                return "moto" === (null === (e = (0, l.r$)()) || void 0 === e ? void 0 : e.product_type)
            }

            function I() {
                return (0, r.ve)("invoice.data")
            }

            function $() {
                var e;
                return (null === (e = (0, l.uV)()) || void 0 === e || null === (e = e.offer_applicable) || void 0 === e ? void 0 : e.includes("addon")) ? ? !1
            }

            function M() {
                return (0, r.ve)("methods.data.details.i18n.instalment_plans") || {}
            }

            function B() {
                var e;
                const n = null === (e = (0, l.r$)()) || void 0 === e ? void 0 : e.bank,
                    a = (0, r.ve)("methods.data.details.i18n.fpx", {});
                return n ? a[n] ? {
                    [n]: a[n]
                } : {} : a
            }

            function T() {
                var e;
                const n = null === (e = (0, l.r$)()) || void 0 === e ? void 0 : e.bank,
                    a = (0, r.ve)("methods.data.details.i18n.duitnow_pay", {});
                return n ? a[n] ? {
                    [n]: a[n]
                } : {} : a
            }

            function C() {
                return (0, r.ve)("order.data.amount_due") ? ? (0, r.ve)("order.data.amount") ? ? (0, r.ve)("invoice.data.amount") ? ? (0, r.ve)("subscription.data.amount")
            }

            function z() {
                return (0, r.ve)("merchant.data.analytics.order_count")
            }

            function N() {
                return (0, o.Br)("checkout_v2_vas") || (0, o.jI)("show_checkout_v2") && !(0, o.Fn)("checkout_v2_vas") || !1
            }

            function G() {
                return (0, o.jI)("hdfc_checkout_2")
            }

            function P() {
                return (0, o.jI)("enable_cbdc_org") || (0, o.jI)("enable_cbdc_mx")
            }

            function R() {
                return (0, o.jI)("raas")
            }

            function E() {
                return (0, r.ve)("merchant.data.properties.rtb")
            }

            function O() {
                return (0, r.ve)("merchant.data.metadata.brand_name", "")
            }

            function L() {
                return Boolean((0, r.ve)("merchant.data.properties.international"))
            }

            function D() {
                return (0, r.ve)("merchant.data.metadata.name", "")
            }

            function j() {
                return (0, r.ve)("merchant.data.options")
            }

            function W() {
                return (0, r.ve)("merchant.data.metadata.checkout_logo_url")
            }

            function H() {
                return (0, r.ve)("merchant.data.properties.razorpay_org")
            }

            function U() {
                return (0, o.jI)("vas_org_identifier")
            }

            function F() {
                return v() ? [] : (0, r.ve)("offers.data.items", [])
            }

            function V() {
                return (0, r.ve)("offers.data.force_offer")
            }

            function Z() {
                return (0, r.ve)("ads.items", [])
            }

            function K() {
                return (0, r.ve)("downtime.data.items", [])
            }

            function J() {
                return (0, o.jI)("redirect_to_earlysalary")
            }

            function Y() {
                return "live" === (0, r.ve)("merchant.data.options.mode")
            }

            function q() {
                return "test" === (0, r.ve)("merchant.data.options.mode")
            }

            function X() {
                return (0, r.ve)("truecaller.data.request_id")
            }

            function Q() {
                return (0, r.ve)("customer.data.global", !0)
            }

            function ee() {
                return (0, r.ve)("merchant.data.metadata.key") || (0, r.om)("key")
            }

            function ne() {
                return (0, r.ve)("prefill_data") || {}
            }

            function ae(e) {
                return (0, r.ve)(e)
            }

            function re() {
                const e = (0, r.ve)("ads_slot_configs"),
                    {
                        total_slots: n,
                        organic_list: a,
                        ad_slots: o,
                        name: t
                    } = (null == e ? void 0 : e.l0) ? ? (0, r.ve)("ads_slot_config") ? ? d.kO;
                return {
                    variant: t,
                    totalSlots: Number(n),
                    organicList: a,
                    adsSlots: o
                }
            }

            function oe() {
                const e = (0, r.ve)("buyer_protection"),
                    n = (0, r.ve)("headers.rtb_fingerprint_id");
                return e && n ? { ...e,
                    rtb_fingerprint_id: n
                } : {}
            }

            function te() {
                return (0, r.ve)("merchant.data.properties.lending")
            }

            function le() {
                return (0, r.ve)("merchant.data.properties.merchant_policy", {})
            }

            function ie() {
                return (0, r.om)("payout")
            }

            function pe() {
                return (0, r.ve)("checkout_signature", "")
            }
            const de = (e, n) => (0, r.ve)(`merchant.data.one_cc.configs.${e}`, n);

            function ce() {
                return (0, o.Br)("razorpay_club_checkout")
            }

            function ue() {
                return !1
            }

            function me() {
                return (0, r.ve)("prefill_data.contact")
            }

            function _e() {
                return (0, o.Br)("checkout_festivities") && (0, r.om)("theme.festivities.enabled", !0) && (0, r.ve)("checkout_configuration.data.checkout_style_config.festivities_enabled", !0)
            }

            function se() {
                return (0, o.Br)("razorpay_club_v2")
            }

            function he() {
                return (0, o._m)("pop_container_ui")
            }

            function ge() {
                return (0, r.ve)("merchant.data.properties.disable_fingerprint", !1)
            }
        },
        72564(e, n, a) {
            const r = {
                    ENGLISH: "en",
                    BENGALI: "ben",
                    HINDI: "hi",
                    MARATHI: "mar",
                    GUJARATI: "guj",
                    TAMIL: "tam",
                    TELUGU: "tel",
                    KANNADA: "kan"
                },
                o = {
                    [r.ENGLISH]: "English",
                    [r.BENGALI]: "বাংলা",
                    [r.HINDI]: "हिंदी",
                    [r.MARATHI]: "मराठी",
                    [r.GUJARATI]: "ગુજરાતી",
                    [r.TAMIL]: "தமிழ்",
                    [r.TELUGU]: "తెలుగు",
                    [r.KANNADA]: "ಕನ್ನಡ"
                };
            a.d(n, ["A", 0, o, "Y", 0, r])
        },
        69417(e, n, a) {
            a.d(n, {
                Eu: () => o,
                kw: () => l
            });
            var r = a(72564);

            function o(e) {
                return r.A[e]
            }
            const t = new Set(["CI", "IT", "VA", "SM", "BF", "NE", "CG", "GA", "RW", "TJ", "NO", "SJ", "NC"]);

            function l(e) {
                return t.has(e)
            }
        },
        83944(e, n, a) {
            e.exports = a.p + "assets/images/cred_rounded.40246282.svg"
        },
        91908(e, n, a) {
            e.exports = a.p + "assets/images/phonepe.e101f376.svg"
        },
        7774(e, n, a) {
            e.exports = a.p + "assets/images/samsung_pay.c771f356.svg"
        }
    }
]);