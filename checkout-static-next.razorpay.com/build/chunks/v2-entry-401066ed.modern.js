"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [80532], {
        44631(e, n, t) {
            t.d(n, {
                nu: () => l,
                sI: () => u,
                un: () => d
            });
            var i = t(31992),
                r = t(65047),
                s = t(97623);
            const o = (0, r.symbol)(),
                a = (0, r.symbol)(),
                c = (0, i.T5)();

            function d() {
                return (0, s.u)(c)
            }

            function u(e) {
                c.set(e)
            }

            function l(e) {
                return "new_billing_address" === e || "opc_new_billing_address" === e
            }(0, r.setStore)(a, c), t.d(n, ["um", 0, o])
        },
        50436(e, n, t) {
            t.d(n, {
                Hl: () => y,
                L3: () => v,
                uU: () => b
            });
            var i = t(31992),
                r = t(47783),
                s = t(66182),
                o = t(97623),
                a = t(55818),
                c = t(26481);
            const d = [],
                u = (0, i.T5)(void 0),
                l = (0, i.T5)(!1);
            let p, _, m, g = null,
                f = 0;
            const h = (0, o.u)(l);

            function b(e) {
                d.some((n => n.name === e.name)) || (d.push(e), function() {
                    if (_) return;
                    _ = s.B.subscribe((e => {
                        const n = (0, i.Jt)(u);
                        e && void 0 !== n && e !== n && d.some(J) && (l.set(!0), T(), p = setTimeout((() => {
                            p = void 0, l.set(!1)
                        }), 8e3))
                    }))
                }())
            }

            function v(e) {
                if (!e) return Promise.resolve();
                const n = (0, i.Jt)(u);
                return void 0 === n ? (u.set(e), Promise.resolve()) : n === e ? Promise.resolve() : g ? (m = e, g) : A(e)
            }

            function y() {
                var e;
                f += 1, null === (e = _) || void 0 === e || e(), _ = void 0, d.length = 0, u.set(void 0), m = void 0, g = null, k()
            }

            function J(e) {
                try {
                    return e.isEnabled()
                } catch {
                    return !1
                }
            }

            function k() {
                T(), l.set(!1)
            }

            function T() {
                p && (clearTimeout(p), p = void 0)
            }

            function A(e) {
                const n = f;
                T(), l.set(!0);
                const t = async function(e, n) {
                    const t = d.filter(J);
                    if (!t.length) return void w(e, n);
                    (0, r.log)({
                        name: "order_email_changed",
                        properties: {
                            features: t.map((e => e.name)).join(",")
                        }
                    });
                    (await Promise.race([Promise.all(t.map(E)), new Promise((e => {
                        setTimeout((() => {
                            (0, r.log)({
                                name: "order_email_change_timed_out",
                                properties: {
                                    features: t.map((e => e.name)).join(",")
                                }
                            }), e([!1])
                        }), 5e3)
                    }))])).every(Boolean) && w(e, n)
                }(e, n).catch((e => {
                    P(e, "order_email_change_cycle_failed")
                })).then((() => {
                    if (n !== f) return;
                    g = null;
                    const e = m;
                    if (m = void 0, e && e !== (0, i.Jt)(u)) return A(e);
                    k()
                }));
                return g = t, t
            }

            function w(e, n) {
                n === f && u.set(e)
            }

            function E(e) {
                return Promise.resolve().then((() => e.invalidate())).then((() => !0), (n => (P(n, "order_email_change_invalidate_failed", e.name), !1)))
            }

            function P(e, n, t) {
                const i = e instanceof Error ? e : new Error(String(e));
                (0, r.log)({
                    name: n,
                    properties: t ? {
                        feature: t,
                        error: i.message
                    } : {
                        error: i.message
                    }
                }), (0, a.default)(i, {
                    severity: c.m.S2,
                    analytics: {
                        event: n,
                        data: {
                            reason: i.message
                        }
                    }
                })
            }
            t.d(n, ["wv", 0, h])
        },
        46658(e, n, t) {
            t.d(n, {
                A2: () => l,
                N1: () => h,
                RW: () => f,
                Ts: () => b,
                U4: () => p,
                Up: () => v,
                V7: () => c,
                Xz: () => a,
                bQ: () => d,
                er: () => _,
                fR: () => m
            });
            var i = t(31992),
                r = t(97623);
            const s = {
                    number: "",
                    org_address: "",
                    org_name: ""
                },
                o = (0, i.T5)("");

            function a() {
                return (0, r.u)(o)
            }

            function c() {
                return (0, i.Jt)(o)
            }

            function d(e) {
                o.set(e)
            }
            const u = (0, i.T5)(s);

            function l() {
                return (0, r.u)(u)
            }

            function p() {
                return (0, i.Jt)(u)
            }

            function _(e) {
                const {
                    number: n,
                    org_address: t,
                    org_name: i
                } = e;
                u.set({
                    number: n,
                    org_address: t,
                    org_name: i
                })
            }

            function m() {
                u.set(s)
            }
            const g = (0, i.T5)(s);

            function f() {
                return (0, r.u)(g)
            }

            function h() {
                return (0, i.Jt)(g)
            }

            function b(e) {
                const {
                    number: n,
                    org_address: t,
                    org_name: i
                } = e;
                g.set({
                    number: n,
                    org_address: t,
                    org_name: i
                })
            }

            function v() {
                g.set(s)
            }
        },
        80532(e, n, t) {
            t.r(n), t.d(n, {
                updateMagicOrder: () => C,
                updatePartialMagicOrder: () => j
            });
            var i = t(31992),
                r = t(60431),
                s = t(87202),
                o = t(13446),
                a = t(44631),
                c = t(71711),
                d = t(45148),
                u = t(16926),
                l = t(7472),
                p = t(7186),
                _ = t(46658),
                m = t(44138),
                g = t(73477),
                f = t(28949),
                h = t(47783),
                b = t(50436),
                v = t(26718),
                y = t(86358),
                J = t(55228);
            const [k, T] = (0, r.nt)();

            function A(e, n) {
                return Object.keys(e).every((t => t in n && (0, v.r$)(e[t], n[t])))
            }
            let w = null,
                E = null,
                P = 0;

            function j(e) {
                return C({
                    customer_details: S({
                        contact: e.contact,
                        email: e.email,
                        shippingAddress: e.shippingAddress
                    })
                }).catch((() => {}))
            }
            async function C(e) {
                let n = "magic_order_partial_update";
                e || (e = function() {
                    const e = (0, s.getEmail)(),
                        n = (0, s.getContact)(),
                        t = (0, i.Jt)((0, o.pE)()),
                        r = (0, i.Jt)((0, a.un)()),
                        c = {
                            customer_details: S({
                                email: e,
                                contact: n,
                                shippingAddress: t,
                                billingAddress: r
                            })
                        },
                        d = (0, i.Jt)((0, J.ie)());
                    if (d.enabled && d.selected_groups.length) return c.shipping_method = function(e) {
                        const n = (0, J.Iw)(e);
                        return {
                            id: n.id,
                            name: "Split shipping",
                            description: "Split shipping",
                            shipping_fee: n.shipping_fee,
                            cod_fee: (0, y.lF)(),
                            serviceable: n.serviceable,
                            cod: n.cod
                        }
                    }(d), c.split_shipping = function(e) {
                        return {
                            enabled: e.enabled,
                            groups: e.selected_groups.map((e => ({
                                variant_ids: e.variant_ids,
                                selected_shipping_method: e.selected_shipping_method
                            })))
                        }
                    }(d), c;
                    return U(c), c
                }(), n = "magic_order_update");
                const t = e.customer_details,
                    c = !(null == t || !t.contact),
                    u = !(null == t || !t.email),
                    l = !(null == t || !t.shipping_address),
                    v = !(null == t || !t.billing_address),
                    j = !((0, p.kg)() && (0, _.U4)().number),
                    C = !c || !u || !l || j && !v;
                C && (0, h.log)({
                    name: "nil_customer_update_attempted",
                    properties: {
                        has_contact: c,
                        has_email: u,
                        has_shipping_address: l,
                        is_billing_required: j,
                        has_billing_address: v,
                        has_customer_details: !!t
                    }
                }), C && t && (! function(e) {
                    const n = S({
                        email: (0, s.getEmail)(),
                        contact: (0, s.getContact)(),
                        shippingAddress: (0, i.Jt)((0, o.pE)()),
                        billingAddress: (0, i.Jt)((0, a.un)())
                    });
                    for (const t of Object.keys(n)) t in e || (e[t] = n[t])
                }(t), (0, h.log)({
                    name: "nil_customer_update_enriched",
                    properties: {
                        has_contact: !!t.contact,
                        has_email: !!t.email,
                        has_shipping_address: !!t.shipping_address,
                        has_billing_address: !!t.billing_address
                    }
                })), e.service = (0, p.RN)() ? "mcs" : "api", e.rzp_checkout_details = {
                    checkout_id: (0, m.v6)(),
                    session_id: (0, g._)(),
                    is_abandoned_checkout: (0, f.om)("abandoned_cart") || !1
                };
                const O = await (0, d.X)();
                if (U(e), E && w) {
                    if (function(e, n) {
                            for (const t of Object.keys(e)) {
                                if (!(t in n)) return !1;
                                const i = e[t],
                                    r = n[t];
                                if (i && r && "object" == typeof i && "object" == typeof r && !Array.isArray(i)) {
                                    if (!A(i, r)) return !1
                                } else if (i !== r) return !1
                            }
                            return !0
                        }(e, w)) return E;
                    T()
                }
                const B = (0, p.cp)() ? `magic/orders/${O}/customer` : (0, p.w_)() ? `magic/customer/${O}` : `orders/1cc/${O}/customer`,
                    $ = () => (0, r.Ay)({
                        url: B,
                        method: "patch",
                        data: (0, p.JB)() ? { ...e,
                            version: ++P
                        } : e,
                        skipEdgeToken: (0, p.Ub)(),
                        abortSymbol: k,
                        name: n
                    }),
                    I = null == t ? void 0 : t.email;
                return w = e, E = $().catch((n => {
                    var t;
                    const i = (0, r.d5)(null == n || null === (t = n.data) || void 0 === t ? void 0 : t.error),
                        s = (0, p.JB)() && w !== e;
                    if (!i && !s) return $()
                })).finally((() => {
                    w = null, E = null
                })).then((e => function(e, n) {
                    if (!e) return e;
                    return (0, b.L3)(n).then((() => e))
                }(e, I))), E
            }

            function S(e) {
                const n = {
                        device: {
                            id: (0, c.IP)()
                        }
                    },
                    t = e.shippingAddress,
                    i = e.billingAddress,
                    r = e.contact,
                    s = e.email;
                if (r && (n.contact = r), s && (n.email = s), t) {
                    const e = t.type ? ? "shipping_address";
                    n.shipping_address = (0, u.C)(t, {
                        type: e
                    })
                }
                if (i && !((0, p.kg)() && (0, _.U4)().number)) {
                    const e = i.type ? ? (0, o.g0)() ? "shipping_address" : "billing_address";
                    n.billing_address = (0, u.C)(i, {
                        type: e
                    })
                }
                return n
            }

            function U(e) {
                if (e.shipping_method) return;
                const n = (0, i.Jt)((0, l.sl)()),
                    t = (0, i.Jt)((0, o.pE)());
                null != n && n.id && t && (e.shipping_method = function(e) {
                    return {
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        shipping_fee: e.shipping_fee,
                        cod_fee: (0, y.lF)()
                    }
                }(n))
            }
        }
    }
]);