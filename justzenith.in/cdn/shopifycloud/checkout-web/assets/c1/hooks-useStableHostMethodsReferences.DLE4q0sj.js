import {
    D as g,
    u as b,
    T as y,
    A as d,
    q as w,
    h as A
} from "./esnext-vendor.BDPAaZdq.js";
import {
    O as E
} from "./hooks-useReplaceShopPayInHistory.C8UL-mAH.js";
import {
    b as D
} from "./amazon-pay-useAmazonPayPaymentLine.BXwZMsYY.js";
import {
    fZ as I
} from "./hydrate.B0xlt2dG.js";
const R = g(function(t, n) {
    const {
        allow: o,
        ...e
    } = t;
    return b("iframe", { ...e,
        ref: n,
        allow: o
    })
});

function T(r) {
    return y(() => Math.random(), [r])
}
const O = ({
    sandboxUrl: r,
    endpointId: t,
    iframeTitle: n,
    iframeId: o,
    iframeName: e,
    hostMethods: s,
    inlineStyle: c,
    className: v,
    allow: B,
    sandbox: h,
    onConnect: p,
    onTerminate: M,
    onIframeLoad: l,
    onEndpointCreated: m,
    onUnmount: k
}) => {
    const u = d(null),
        i = d(null),
        F = T(s),
        {
            observability: a
        } = E(),
        _ = w(() => {
            if (l ? .(), !u.current) {
                a.leaveErrorBreadcrumb("Sandbox iframe ref is null, skipping endpoint setup", {
                    iframeName: e
                });
                return
            }
            const f = D(u.current, r, t, a, {});
            m ? .(), i.current = f, f.expose(s), p(f)
        }, [l, r, t, a, m, s, p, e]);
    return A(() => () => {
        k ? .(), i.current && (i.current.terminate(), M ? .())
    }, []), b(R, {
        id: o,
        name: e,
        title: n,
        ref: u,
        sandbox: h,
        src: r,
        style: c,
        className: v,
        onLoad: _,
        allow: B
    }, F)
};
var q = (r => (r.Success = "success", r.Error = "error", r.ScriptLoadError = "script_load_error", r.UnsupportedBrowser = "unsupported_browser", r))(q || {});
const S = () => {
    const {
        observability: r
    } = E();
    return w(({
        message: t,
        attributes: n = {}
    }) => {
        r.leaveErrorBreadcrumb(t, n)
    }, [r])
};

function Z(r) {
    const t = I(r);
    return y(() => {
        const o = {};
        for (const e in r) o[e] = ((...s) => {
            const c = t.current;
            if (c[e] === void 0) throw new TypeError(`Missing wallet host method: ${e}`);
            return c[e](...s)
        });
        return o
    }, [])
}
export {
    O as B, R as I, q as S, Z as a, S as u
};