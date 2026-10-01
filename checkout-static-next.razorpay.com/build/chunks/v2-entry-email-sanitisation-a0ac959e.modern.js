"use strict";
(globalThis.webpackChunkv2 = globalThis.webpackChunkv2 || []).push([
    [36534], {
        9523(e, t, r) {
            r.d(t, {
                isUntrustedResolvedEmail: () => a
            });
            var n = r(78854);
            const s = /[^\x21-\x7E]/;
            const i = new Set(["contact", "contacts", "info", "information", "hello", "hi", "hey", "reach", "write", "ask", "connect", "mail", "inbox", "reply", "general", "official", "online", "query", "queries", "enquiry", "enquiries", "inquiry", "inquiries", "feedback", "admin", "administrator", "administration", "manager", "management", "director", "office", "head", "support", "helpdesk", "helpcenter", "helpcentre", "care", "customercare", "customer-care", "customer_care", "customerservice", "customer-service", "service", "services", "clientcare", "clientservice", "cs", "sales", "sale", "salesteam", "marketing", "marketingteam", "growth", "promotions", "promotion", "deals", "offers", "campaign", "campaigns", "crm", "team", "teams", "group", "groups", "noreply", "no-reply", "no_reply", "donotreply", "do-not-reply", "do_not_reply", "donot-reply", "automated", "automatic", "auto", "automailer", "mailer", "mailing", "mailinglist", "newsletter", "newsletters", "notifications", "notification", "updates", "update", "alerts", "alert", "bounce", "bounces", "unsubscribe", "billing", "payments", "payment", "accounts", "accounting", "finance", "financial", "invoices", "invoice", "receipts", "receipt", "refunds", "refund", "collections", "ar", "ap", "hr", "humanresources", "humanresource", "people", "careers", "career", "jobs", "job", "recruitment", "recruit", "hiring", "talent", "workforce", "legal", "compliance", "privacy", "dpo", "gdpr", "policy", "policies", "press", "media", "pr", "publicrelations", "communications", "comms", "partnerships", "partner", "partners", "alliance", "alliances", "vendor", "vendors", "suppliers", "supplier", "procurement", "purchasing", "purchase", "supply", "it", "itsupport", "itteam", "tech", "technology", "dev", "developer", "developers", "development", "engineering", "engineers", "platform", "infra", "infrastructure", "ops", "operations", "devops", "sre", "sysadmin", "system", "systems", "root", "webmaster", "postmaster", "hostmaster", "abuse", "security", "network", "orders", "order", "store", "shop", "shopping", "checkout", "ecommerce", "website", "web", "digital", "social", "community", "brand", "brands", "business", "corporate", "company", "global", "international", "test", "testing", "tests", "tester", "demo", "sandbox", "staging", "stage", "dummy", "fake", "placeholder", "null", "anonymous", "anon", "void", "sample", "example", "dummyemail", "fakeemail", "testemail", "sampleemail", "noemailid", "notprovided", "notavailable", "novalue"]),
                o = ["-admin", "-support", "-care", "-help", "-team", "-info", "-sales", "-billing", "-hr", "-it", "-ops", "-dev", "-legal", "-media", "_admin", "_support", "_care", "_help", "_team", "_info", "_sales", "_billing", "_service", "_orders", "_noreply", "_email", "_notifications"];

            function a(e) {
                return !(!e || "string" != typeof e) && (s.test(e) || function(e) {
                    if (!e) return !1;
                    const t = e.toLowerCase();
                    return t.startsWith("noemail") || t.startsWith("no_email") || t.startsWith("customer_") || "void@razorpay.com" === t
                }(e) || function(e) {
                    if (!e) return !1;
                    const t = e.indexOf("@");
                    if (t <= 0) return !1;
                    const r = e.slice(0, t).toLowerCase();
                    return !!i.has(r) || o.some((e => r.endsWith(e)))
                }(e) || (0, n.c)(e))
            }
        },
        78854(e, t, r) {
            r.d(t, {
                c: () => i
            });
            const n = ["example.com", "example.org", "example.net"],
                s = ["test", "example", "invalid", "localhost"];

            function i(e) {
                if (!e || "string" != typeof e) return !1;
                const t = e.lastIndexOf("@");
                if (t <= 0 || t === e.length - 1) return !1;
                const r = e.slice(t + 1).toLowerCase();
                if (n.some((e => r === e || r.endsWith(`.${e}`)))) return !0;
                const i = r.slice(r.lastIndexOf(".") + 1);
                return s.includes(i)
            }
        }
    }
]);