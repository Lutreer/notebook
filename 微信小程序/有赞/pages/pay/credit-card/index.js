!function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = global.installedModules[r] = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    e = Object.assign(require("../../../commons.js").modules, e);
    var n = {};
    n = global.installedModules = global.installedModules || {}, t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
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
    }, t.p = "", t(t.s = 216);
}({
    216: function(e, t, n) {
        var r;
        (0, ((r = n(0)) && r.__esModule ? r : {
            default: r
        }).default)({
            onLoad: function(e) {
                this.query = e;
            },
            onReady: function() {
                this.query.deepLinkData && this.setData({
                    viewSrc: "https://cashier.youzan.com/v2/pay/PreorderBankCard?deepLinkData=" + this.query.deepLinkData
                });
            }
        });
    }
});