(function() {
    function rel(url) {
        if (typeof url !== 'string') return url;
        if (url.startsWith('//') || url.startsWith('http:') || url.startsWith('https:')) return url;
        if (url.startsWith('justzenith.in/') || url.startsWith('../') || url.startsWith('./')) return url;
        if (url.charAt(0) === '/') return 'justzenith.in' + url;
        return url;
    }
    var preconnectOrigins = ["https://cdn.shopify.com"];
    var scripts = [];
    var styles = [];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = [];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        try { document.head.appendChild(link); } catch (e) {}
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        if (!url) return callback && callback();
        var link = document.createElement('link');
        if (link.relList && typeof link.relList.supports === 'function' && link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            try { link.fetchPriority = 'low'; } catch (e) {}
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            try { document.head.appendChild(link); } catch (e) { callback && callback(); }
        } else {
            callback && callback();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) { return [rel(url), 'script']; }),
            styles.map(function(url) { return [rel(url), 'style']; }),
            fontPrefetchUrls.map(function(url) { return [rel(url), 'font']; }),
            imgPrefetchUrls.map(function(url) { return [rel(url), 'image']; })
        );
        var index = 0;
        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = function() {
            if (typeof self.requestIdleCallback === 'function') {
                self.requestIdleCallback(run);
            } else {
                setTimeout(run, 200);
            }
        };
        next();
    }

    function onLoaded() {
        try { preconnectAssets(); } catch (e) {}
        try { prefetchAssets(); } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();
