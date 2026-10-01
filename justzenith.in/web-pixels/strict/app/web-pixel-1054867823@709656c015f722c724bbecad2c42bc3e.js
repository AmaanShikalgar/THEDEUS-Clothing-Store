(() => {
    var I = Object.create;
    var n = Object.defineProperty;
    var S = Object.getOwnPropertyDescriptor;
    var k = Object.getOwnPropertyNames;
    var x = Object.getPrototypeOf,
        N = Object.prototype.hasOwnProperty;
    var c = (t, e) => () => (t && (e = t(t = 0)), e);
    var O = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var P = (t, e, _, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of k(e)) !N.call(t, i) && i !== _ && n(t, i, {
                get: () => e[i],
                enumerable: !(r = S(e, i)) || r.enumerable
            });
        return t
    };
    var T = (t, e, _) => (_ = t != null ? I(x(t)) : {}, P(e || !t || !t.__esModule ? n(_, "default", {
        value: t,
        enumerable: !0
    }) : _, t));
    var p = (t, e, _) => new Promise((r, i) => {
        var s = o => {
                try {
                    h(_.next(o))
                } catch (a) {
                    i(a)
                }
            },
            d = o => {
                try {
                    h(_.throw(o))
                } catch (a) {
                    i(a)
                }
            },
            h = o => o.done ? r(o.value) : Promise.resolve(o.value).then(s, d);
        h((_ = _.apply(t, e)).next())
    });
    var w, g = c(() => {
        w = "WebPixel::Render"
    });
    var m, y = c(() => {
        g();
        m = t => shopify.extend(w, t)
    });
    var u = c(() => {
        y()
    });
    var f = c(() => {
        u()
    });
    var v = O(l => {
        f();
        var E = "https://api.whatmore.live";
        m(i => p(null, [i], function*({
            analytics: t,
            browser: e,
            settings: _,
            init: r
        }) {
            try {
                t.subscribe("checkout_completed", s => p(null, null, function*() {
                    _whatmore_viewed_products = yield e.localStorage.getItem("_whatmore_viewed_products"), _whatmore_session_id = yield e.localStorage.getItem("_whatmore_session_id"), _whatmore_last_video_view_session = yield e.localStorage.getItem("_whatmore_last_video_view_session"), _whatmore_user_id = yield e.localStorage.getItem("_whatmore_user_id"), _whatmore_store_id = yield e.localStorage.getItem("_whatmore_store_id"), is_impression = yield e.localStorage.getItem("wht_is_impression"), user_group = yield e.localStorage.getItem("wht_user_group"), ab_test_id = yield e.localStorage.getItem("wht_ab_test_id"), ab_test_version = yield e.localStorage.getItem("wht_ab_test_version"), _shopify_y = "", _shopify_s = "", _shopify_client_id = "";
                    try {
                        _shopify_y = (yield e.cookie.get("_shopify_y")) || ""
                    } catch (a) {}
                    try {
                        _shopify_s = (yield e.cookie.get("_shopify_s")) || ""
                    } catch (a) {}
                    try {
                        _shopify_client_id = s.clientId || ""
                    } catch (a) {}
                    _whatmore_shop_id = _.storeID, checkout_data = JSON.stringify({
                        order_payload: s.data.checkout,
                        shopify_client_id: _shopify_client_id,
                        shopify_user_id: _shopify_y,
                        shopify_session_id: _shopify_s,
                        whatmore_video_view: _whatmore_viewed_products ? JSON.parse(_whatmore_viewed_products) : [],
                        whatmore_session_id: _whatmore_last_video_view_session != null ? _whatmore_last_video_view_session : _whatmore_session_id,
                        whatmore_user_id: _whatmore_user_id,
                        is_impression,
                        store_id: _whatmore_store_id,
                        shop_id: _whatmore_shop_id,
                        user_group,
                        ab_test_id,
                        ab_test_version
                    });
                    var d = new Headers;
                    d.append("Content-Type", "application/json");
                    var h = {
                            method: "POST",
                            headers: d,
                            body: checkout_data,
                            redirect: "follow"
                        },
                        o = E + "/webpixel/tracking/checkout";
                    fetch(o, h)
                }))
            } catch (s) {
                console.log("webPixel error", s)
            }
        }))
    });
    var A = T(v());
})();