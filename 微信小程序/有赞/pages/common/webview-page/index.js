!function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = global.installedModules[o] = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    e = Object.assign(require("../../../commons.js").modules, e);
    var n = {};
    n = global.installedModules = global.installedModules || {}, t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 233);
}({
    233: function(e, t, n) {
        var o, r = {
            onLoad: function(e) {
                this.query = e;
            },
            onReady: function() {
                this.query.title && wx.setNavigationBarTitle({
                    title: this.query.title
                }), this.query.src && this.setData({
                    viewSrc: decodeURIComponent(this.query.src)
                });
            }
        };
        (0, ((o = n(0)) && o.__esModule ? o : {
            default: o
        }).default)(r);
    }
});