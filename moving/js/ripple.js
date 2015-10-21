/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, t) {
    var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], p = "1.9.1", f = c.concat, d = c.push, h = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = p.trim, b = function(e, t) {
        return new b.fn.init(e,t,r)
    }
    , x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, j = /^-ms-/, D = /-([\da-z])/gi, L = function(e, t) {
        return t.toUpperCase()
    }
    , H = function(e) {
        (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(),
        b.ready())
    }
    , q = function() {
        o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1),
        e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H),
        e.detachEvent("onload", H))
    }
    ;
    b.fn = b.prototype = {
        jquery: p,
        constructor: b,
        init: function(e, n, r) {
            var i, a;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : N.exec(e),
                !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n,
                    b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)),
                    C.test(i[1]) && b.isPlainObject(n)) {
                        for (i in n) {
                            b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (a = o.getElementById(i[2]),
                a && a.parentNode) {
                    if (a.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1,
                    this[0] = a
                }
                return this.context = o,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return h.call(this)
        },
        get: function(e) {
            return null  == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return b.each(this, e, t)
        },
        ready: function(e) {
            return b.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }
            ))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: d,
        sort: [].sort,
        splice: [].splice
    },
    b.fn.init.prototype = b.fn,
    b.extend = b.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        u = 2),
        "object" == typeof s || b.isFunction(s) || (s = {}),
        l === u && (s = this,
        --u); l > u; u++) {
            if (null  != (o = arguments[u])) {
                for (i in o) {
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1,
                    a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {},
                    s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    }
    ,
    b.extend({
        noConflict: function(t) {
            return e.$ === b && (e.$ = u),
            t && e.jQuery === b && (e.jQuery = s),
            b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!o.body) {
                    return setTimeout(b.ready)
                }
                b.isReady = !0,
                e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]),
                b.fn.trigger && b(o).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === b.type(e)
        }
        ,
        isWindow: function(e) {
            return null  != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null  == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (n) {
                return !1
            }
            var r;
            for (r in e) {}
            return r === t || y.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null 
            }
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || o;
            var r = C.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i),
            i && b(i).remove(),
            b.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null  === n ? n : "string" == typeof n && (n = b.trim(n),
            n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null 
            }
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && b.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(j, "ms-").replace(D, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n),
                        r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]),
                        r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: v && !v.call("\ufeff\u00a0") ? function(e) {
            return null  == e ? "" : v.call(e)
        }
         : function(e) {
            return null  == e ? "" : (e + "").replace(T, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null  != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (g) {
                    return g.call(t, e, n)
                }
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o),
                n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n),
                    null  != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n),
                    null  != r && (s[s.length] = r)
                }
            }
            return f.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            b.isFunction(e) ? (r = h.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(h.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || b.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var u = 0
              , l = e.length
              , c = null  == r;
            if ("object" === b.type(r)) {
                o = !0;
                for (u in r) {
                    b.access(e, n, u, r[u], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0,
                b.isFunction(i) || (s = !0),
                c && (s ? (n.call(e, i),
                n = null ) : (c = n,
                n = function(e, t, n) {
                    return c.call(b(e), n)
                }
                )),
                n)) {
                    for (; l > u; u++) {
                        n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    b.ready.promise = function(t) {
        if (!n) {
            if (n = b.Deferred(),
            "complete" === o.readyState) {
                setTimeout(b.ready)
            } else {
                if (o.addEventListener) {
                    o.addEventListener("DOMContentLoaded", H, !1),
                    e.addEventListener("load", H, !1)
                } else {
                    o.attachEvent("onreadystatechange", H),
                    e.attachEvent("onload", H);
                    var r = !1;
                    try {
                        r = null  == e.frameElement && o.documentElement
                    } catch (i) {}
                    r && r.doScroll && function a() {
                        if (!b.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(a, 50)
                            }
                            q(),
                            b.ready()
                        }
                    }
                    ()
                }
            }
        }
        return n.promise(t)
    }
    ,
    b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    }
    );
    function M(e) {
        var t = e.length
          , n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = b(o);
    var _ = {};
    function F(e) {
        var t = _[e] = {};
        return b.each(e.match(w) || [], function(e, n) {
            t[n] = !0
        }
        ),
        t
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
        var n, r, i, o, a, s, u = [], l = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = u.length,
            n = !0; u && o > a; a++) {
                if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            }
            n = !1,
            u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
        }
        , p = {
            add: function() {
                if (u) {
                    var t = u.length;
                    (function i(t) {
                        b.each(t, function(t, n) {
                            var r = b.type(n);
                            "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                        }
                        )
                    }
                    )(arguments),
                    n ? o = u.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return u && b.each(arguments, function(e, t) {
                    var r;
                    while ((r = b.inArray(t, u, r)) > -1) {
                        u.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                    }
                }
                ),
                this
            },
            has: function(e) {
                return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                this
            },
            disable: function() {
                return u = l = r = t,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !u || i && !l || (n ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    b.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", b.Callbacks("once memory"), "resolved"], ["reject", "fail", b.Callbacks("once memory"), "rejected"], ["notify", "progress", b.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return b.Deferred(function(n) {
                        b.each(t, function(t, o) {
                            var a = o[0]
                              , s = b.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            }
                            )
                        }
                        ),
                        e = null 
                    }
                    ).promise()
                },
                promise: function(e) {
                    return null  != e ? b.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            b.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }
                , t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }
            ),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = h.call(arguments), r = n.length, i = 1 !== r || e && b.isFunction(e.promise) ? r : 0, o = 1 === i ? e : b.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? h.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }
            , s, u, l;
            if (r > 1) {
                for (s = Array(r),
                u = Array(r),
                l = Array(r); r > t; t++) {
                    n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i
                }
            }
            return i || o.resolveWith(l, n),
            o.promise()
        }
    }),
    b.support = function() {
        var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*"),
        r = d.getElementsByTagName("a")[0],
        !n || !r || !n.length) {
            return {}
        }
        s = o.createElement("select"),
        l = s.appendChild(o.createElement("option")),
        a = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!a.value,
            optSelected: l.selected,
            enctype: !!o.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === o.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        a.checked = !0,
        t.noCloneChecked = a.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !l.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        a = o.createElement("input"),
        a.setAttribute("value", ""),
        t.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        t.radioValue = "t" === a.value,
        a.setAttribute("checked", "t"),
        a.setAttribute("name", "t"),
        u = o.createDocumentFragment(),
        u.appendChild(a),
        t.appendChecked = a.checked,
        t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }
        ),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        return d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip,
        b(function() {
            var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0];
            u && (n = o.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            u.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            a = d.getElementsByTagName("td"),
            a[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === a[0].offsetHeight,
            a[0].style.display = "",
            a[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            t.boxSizing = 4 === d.offsetWidth,
            t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop,
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null ) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null ) || {
                width: "4px"
            }).width,
            r = d.appendChild(o.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null ) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (u.style.zoom = 1)),
            u.removeChild(n),
            n = d = a = r = null )
        }
        ),
        n = s = u = l = r = a = null ,
        t
    }
    ();
    var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , B = /([A-Z])/g;
    function P(e, n, r, i) {
        if (b.acceptData(e)) {
            var o, a, s = b.expando, u = "string" == typeof n, l = e.nodeType, p = l ? b.cache : e, f = l ? e[s] : e[s] && s;
            if (f && p[f] && (i || p[f].data) || !u || r !== t) {
                return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s),
                p[f] || (p[f] = {},
                l || (p[f].toJSON = b.noop)),
                ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)),
                o = p[f],
                i || (o.data || (o.data = {}),
                o = o.data),
                r !== t && (o[b.camelCase(n)] = r),
                u ? (a = o[n],
                null  == a && (a = o[b.camelCase(n)])) : a = o,
                a
            }
        }
    }
    function R(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, o, a = e.nodeType, s = a ? b.cache : e, u = a ? e[b.expando] : b.expando;
            if (s[u]) {
                if (t && (o = n ? s[u] : s[u].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t),
                    t = t in o ? [t] : t.split(" "));
                    for (r = 0,
                    i = t.length; i > r; r++) {
                        delete o[t[r]]
                    }
                    if (!(n ? $ : b.isEmptyObject)(o)) {
                        return
                    }
                }
                (n || (delete s[u].data,
                $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null )
            }
        }
    }
    b.extend({
        cache: {},
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando],
            !!e && !$(e)
        },
        data: function(e, t, n) {
            return P(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return P(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1
            }
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    b.fn.extend({
        data: function(e, n) {
            var r, i, o = this[0], a = 0, s = null ;
            if (e === t) {
                if (this.length && (s = b.data(o),
                1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > a; a++) {
                        i = r[a].name,
                        i.indexOf("data-") || (i = b.camelCase(i.slice(5)),
                        W(o, i, s[i]))
                    }
                    b._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                b.data(this, e)
            }
            ) : b.access(this, function(n) {
                return n === t ? o ? W(o, e, b.data(o, e)) : null  : (this.each(function() {
                    b.data(this, e, n)
                }
                ),
                t)
            }
            , null , n, arguments.length > 1, null , !0)
        },
        removeData: function(e) {
            return this.each(function() {
                b.removeData(this, e)
            }
            )
        }
    });
    function W(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(B, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null  : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
                } catch (o) {}
                b.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }
    function $(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    b.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = b._data(e, n),
            r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = b._queueHooks(e, t)
              , a = function() {
                b.dequeue(e, t)
            }
            ;
            "inprogress" === i && (i = n.shift(),
            r--),
            o.cur = i,
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    b._removeData(e, t + "queue"),
                    b._removeData(e, n)
                }
                )
            })
        }
    }),
    b.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            }
            )
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            }
            )
        },
        delay: function(e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            }
            )
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = b.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [a])
            }
            ;
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--) {
                r = b._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(u))
            }
            return u(),
            o.promise(n)
        }
    });
    var I, z, X = /[\t\r\n]/g, U = /\r/g, V = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, G = /^(?:checked|selected)$/i, Q = b.support.getSetAttribute, K = b.support.input;
    b.fn.extend({
        attr: function(e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            }
            )
        },
        prop: function(e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = b.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            }
            )
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).addClass(e.call(this, t, this.className))
                }
                )
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = b.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).removeClass(e.call(this, t, this.className))
                }
                )
            }
            if (u) {
                for (t = (e || "").match(w) || []; s > a; a++) {
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? b.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }
            ) : this.each(function() {
                if ("string" === n) {
                    var o, a = 0, s = b(this), u = t, l = e.match(w) || [];
                    while (o = l[a++]) {
                        u = r ? u : !s.hasClass(o),
                        s[u ? "addClass" : "removeClass"](o)
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
                }
            }
            )
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = b.isFunction(e),
                this.each(function(n) {
                    var o, a = b(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e,
                    null  == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
                        return null  == e ? "" : e + ""
                    }
                    )),
                    r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()],
                    r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                }
                )
            }
            if (o) {
                return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()],
                r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                "string" == typeof n ? n.replace(U, "") : null  == n ? "" : n)
            }
        }
    }),
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null  : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0;
                    for (; s > u; u++) {
                        if (n = r[u],
                        !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null  !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(),
                            o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function() {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }
                    ),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) {
                return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e),
                a && (n = n.toLowerCase(),
                o = b.attrHooks[n] || (J.test(n) ? z : I)),
                r === t ? o && a && "get" in o && null  !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)),
                null  == s ? t : s) : null  !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""),
                r) : (b.removeAttr(e, n),
                t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = b.propFix[n] || n,
                    J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !b.isXMLDoc(e),
                a && (n = b.propFix[n] || n,
                o = b.propHooks[n]),
                r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null  !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    z = {
        get: function(e, n) {
            var r = b.prop(e, n)
              , i = "boolean" == typeof r && e.getAttribute(n)
              , o = "boolean" == typeof r ? K && Q ? null  != i : G.test(n) ? e[b.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    K && Q || (b.attrHooks.value = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function(e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n,
            t) : I && I.set(e, n, r)
        }
    }),
    Q || (I = b.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    b.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            I.set(e, "" === t ? !1 : t, n)
        }
    },
    b.each(["width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        })
    }
    )),
    b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null  == r ? t : r
            }
        })
    }
    ),
    b.each(["href", "src"], function(e, t) {
        b.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }
    )),
    b.support.style || (b.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null 
        }
    })),
    b.support.enctype || (b.propFix.enctype = "encoding"),
    b.support.checkOn || b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            get: function(e) {
                return null  === e.getAttribute("value") ? "on" : e.value
            }
        }
    }
    ),
    b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function(e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    }
    );
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    b.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = b.guid++),
                (u = v.events) || (u = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(w) || [""],
                l = n.length;
                while (l--) {
                    s = rt.exec(n[l]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    p = b.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = b.event.special[g] || {},
                    d = b.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && b.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = u[g]) || (h = u[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    b.event.global[g] = !0
                }
                e = null 
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(w) || [""],
                l = t.length;
                while (l--) {
                    if (s = rt.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = b.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        u = o = f.length;
                        while (o--) {
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a))
                        }
                        u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else {
                        for (d in c) {
                            b.event.remove(e, d + t[l], n, r, !0)
                        }
                    }
                }
                b.isEmptyObject(c) && (delete m.handle,
                b._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, a) {
            var s, u, l, c, p, f, d, h = [i || o], g = y.call(n, "type") ? n.type : n, m = y.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || o,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            u = 0 > g.indexOf(":") && "on" + g,
            n = n[b.expando] ? n : new b.Event(g,"object" == typeof n && n),
            n.isTrigger = !0,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            n.result = t,
            n.target || (n.target = i),
            r = null  == r ? [n] : b.makeArray(r, [n]),
            p = b.event.special[g] || {},
            a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!a && !p.noBubble && !b.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
                        h.push(l),
                        f = l
                    }
                    f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((l = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"),
                    s && s.apply(l, r),
                    s = u && l[u],
                    s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault()
                }
                if (n.type = g,
                !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
                    f = i[u],
                    f && (i[u] = null ),
                    b.event.triggered = g;
                    try {
                        i[g]()
                    } catch (v) {}
                    b.event.triggered = t,
                    f && (i[u] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = b.event.fix(e);
            var n, r, i, o, a, s = [], u = h.call(arguments), l = (b._data(this, "events") || {})[e.type] || [], c = b.event.special[e.type] || {};
            if (u[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = b.event.handlers.call(this, e, l),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this) {
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; u > a; a++) {
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null , [l]).length),
                            o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > u && s.push({
                elem: this,
                handlers: n.slice(u)
            }),
            s
        },
        fix: function(e) {
            if (e[b.expando]) {
                return e
            }
            var t, n, r, i = e.type, a = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new b.Event(a),
            t = r.length;
            while (t--) {
                n = r[t],
                e[n] = a[n]
            }
            return e.target || (e.target = a.srcElement || o),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null  == e.which && (e.which = null  != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, a, s = n.button, u = n.fromElement;
                return null  == e.pageX && null  != n.clientX && (i = e.target.ownerDocument || o,
                a = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                }
            },
            focus: {
                trigger: function() {
                    if (this !== o.activeElement && this.focus) {
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === o.activeElement && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null , t) : b.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    b.removeEvent = o.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
     : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null ),
        e.detachEvent(r, n))
    }
    ,
    b.Event = function(e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && b.extend(this, n),
        this.timeStamp = e && e.timeStamp || b.now(),
        this[b.expando] = !0,
        t) : new b.Event(e,n)
    }
    ,
    b.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    ),
    b.support.submitBubbles || (b.event.special.submit = {
        setup: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }
                ),
                b._data(r, "submitBubbles", !0))
            }
            ),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"),
            t)
        }
    }),
    b.support.changeBubbles || (b.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }
            ),
            b.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                b.event.simulate("change", this, e, !0)
            }
            )),
            !1) : (b.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }
                ),
                b._data(t, "changeBubbles", !0))
            }
            ),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return b.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e), !0)
        }
        ;
        b.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }
    ),
    b.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null  == r && null  == i ? (i = n,
            r = n = t) : null  == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i,
            i = function(e) {
                return b().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = b.guid++)),
            this.each(function() {
                b.event.add(this, e, i, r, n)
            }
            )
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj,
                b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                b.event.remove(this, e, r, n)
            }
            )
        },
        bind: function(e, t, n) {
            return this.on(e, null , t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            }
            )
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),
    function(e, t) {
        var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = it(), E = it(), S = it(), A = typeof t, j = 1 << 31, D = [], L = D.pop, H = D.push, q = D.slice, M = D.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++) {
                if (this[t] === e) {
                    return t
                }
            }
            return -1
        }
        , _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
            ID: RegExp("^#(" + F + ")"),
            CLASS: RegExp("^\\.(" + F + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
            TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + P),
            PSEUDO: RegExp("^" + R),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
            needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
        }, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
        }
        ;
        try {
            q.call(w.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            q = function(e) {
                var t, n = [];
                while (t = this[e++]) {
                    n.push(t)
                }
                return n
            }
        }
        function rt(e) {
            return Y.test(e + "")
        }
        function it() {
            var e, t = [];
            return e = function(n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()],
                e[n] = r
            }
        }
        function ot(e) {
            return e[x] = !0,
            e
        }
        function at(e) {
            var t = p.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null 
            }
        }
        function st(e, t, n, r) {
            var i, o, a, s, u, l, f, g, m, v;
            if ((t ? t.ownerDocument || t : w) !== p && c(t),
            t = t || p,
            n = n || [],
            !e || "string" != typeof e) {
                return n
            }
            if (1 !== (s = t.nodeType) && 9 !== s) {
                return []
            }
            if (!d && !r) {
                if (i = J.exec(e)) {
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a),
                            !o || !o.parentNode) {
                                return n
                            }
                            if (o.id === a) {
                                return n.push(o),
                                n
                            }
                        } else {
                            if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) {
                                return n.push(o),
                                n
                            }
                        }
                    } else {
                        if (i[2]) {
                            return H.apply(n, q.call(t.getElementsByTagName(e), 0)),
                            n
                        }
                        if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) {
                            return H.apply(n, q.call(t.getElementsByClassName(a), 0)),
                            n
                        }
                    }
                }
                if (T.qsa && !h.test(e)) {
                    if (f = !0,
                    g = x,
                    m = t,
                    v = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        l = ft(e),
                        (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g),
                        g = "[id='" + g + "'] ",
                        u = l.length;
                        while (u--) {
                            l[u] = g + dt(l[u])
                        }
                        m = V.test(e) && t.parentNode || t,
                        v = l.join(",")
                    }
                    if (v) {
                        try {
                            return H.apply(n, q.call(m.querySelectorAll(v), 0)),
                            n
                        } catch (b) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
            }
            return wt(e.replace(W, "$1"), t, n, r)
        }
        a = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        c = st.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w;
            return n !== p && 9 === n.nodeType && n.documentElement ? (p = n,
            f = n.documentElement,
            d = a(n),
            T.tagNameNoComments = at(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }
            ),
            T.attributes = at(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }
            ),
            T.getByClassName = at(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e",
                2 === e.getElementsByClassName("e").length) : !1
            }
            ),
            T.getByName = at(function(e) {
                e.id = x + 0,
                e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>",
                f.insertBefore(e, f.firstChild);
                var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
                return T.getIdNotName = !n.getElementById(x),
                f.removeChild(e),
                t
            }
            ),
            i.attrHandle = at(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
            }
            ) ? {} : {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            T.getIdNotName ? (i.find.ID = function(e, t) {
                if (typeof t.getElementById !== A && !d) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (i.find.ID = function(e, n) {
                if (typeof n.getElementById !== A && !d) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }
            ,
            i.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            i.find.TAG = T.tagNameNoComments ? function(e, n) {
                return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
            }
             : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            }
            ,
            i.find.NAME = T.getByName && function(e, n) {
                return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
            }
            ,
            i.find.CLASS = T.getByClassName && function(e, n) {
                return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
            }
            ,
            g = [],
            h = [":focus"],
            (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || h.push(":checked")
            }
            ),
            at(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                h.push(",.*:")
            }
            )),
            (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                T.disconnectedMatch = m.call(e, "div"),
                m.call(e, "[s!='']:x"),
                g.push("!=", R)
            }
            ),
            h = RegExp(h.join("|")),
            g = RegExp(g.join("|")),
            y = rt(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
             : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return !0
                        }
                    }
                }
                return !1
            }
            ,
            v = f.compareDocumentPosition ? function(e, t) {
                var r;
                return e === t ? (u = !0,
                0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
             : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t) {
                    return u = !0,
                    0
                }
                if (!o || !a) {
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0
                }
                if (o === a) {
                    return ut(e, t)
                }
                r = e;
                while (r = r.parentNode) {
                    s.unshift(r)
                }
                r = t;
                while (r = r.parentNode) {
                    l.unshift(r)
                }
                while (s[i] === l[i]) {
                    i++
                }
                return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            u = !1,
            [0, 0].sort(v),
            T.detectDuplicates = u,
            p) : p
        }
        ,
        st.matches = function(e, t) {
            return st(e, null , null , t)
        }
        ,
        st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && c(e),
            t = t.replace(Z, "='$1']"),
            !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) {
                try {
                    var n = m.call(e, t);
                    if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch (r) {}
            }
            return st(t, p, null , [e]).length > 0
        }
        ,
        st.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && c(e),
            y(e, t)
        }
        ,
        st.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== p && c(e),
            d || (t = t.toLowerCase()),
            (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null 
        }
        ,
        st.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        st.uniqueSort = function(e) {
            var t, n = [], r = 1, i = 0;
            if (u = !T.detectDuplicates,
            e.sort(v),
            u) {
                for (; t = e[r]; r++) {
                    t === e[r - 1] && (i = n.push(r))
                }
                while (i--) {
                    e.splice(n[i], 1)
                }
            }
            return e
        }
        ;
        function ut(e, t) {
            var n = t && e
              , r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) {
                return r
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function pt(e) {
            return ot(function(t) {
                return t = +t,
                ot(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                }
                )
            }
            )
        }
        o = st.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += o(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += o(t)
                }
            }
            return n
        }
        ,
        i = st.selectors = {
            cacheLength: 50,
            createPseudo: ot,
            match: U,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt),
                    e[3] = (e[4] || e[5] || "").replace(et, tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null  : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ? function() {
                        return !0
                    }
                     : (e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                    )
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
                        return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                    }
                    )
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = st.attr(r, e);
                        return null  == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                     : function(t, n, u) {
                        var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                            return !1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[x] || (m[x] = {}),
                                l = c[e] || [],
                                d = l[0] === N && l[1],
                                f = l[0] === N && l[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [N, d, f];
                                        break
                                    }
                                }
                            } else {
                                if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) {
                                    f = l[1]
                                } else {
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]),
                                        p === t)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--) {
                            i = M.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                        }
                    }
                    ) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ot(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(W, "$1"));
                    return r[x] ? ot(function(e, t, n, i) {
                        var o, a = r(e, null , i, []), s = e.length;
                        while (s--) {
                            (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }
                    ) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null , o, n),
                        !n.pop()
                    }
                }
                ),
                has: ot(function(e) {
                    return function(t) {
                        return st(e, t).length > 0
                    }
                }
                ),
                contains: ot(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }
                ),
                lang: ot(function(e) {
                    return X.test(e || "") || st.error("unsupported lang: " + e),
                    e = e.replace(et, tt).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-")
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }
                ),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === f
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(e) {
                    return !i.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null  == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: pt(function() {
                    return [0]
                }
                ),
                last: pt(function(e, t) {
                    return [t - 1]
                }
                ),
                eq: pt(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }
                ),
                even: pt(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }
                ),
                odd: pt(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }
                ),
                lt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; ) {
                        e.push(r)
                    }
                    return e
                }
                ),
                gt: pt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; ) {
                        e.push(r)
                    }
                    return e
                }
                )
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            i.pseudos[n] = lt(n)
        }
        for (n in {
            submit: !0,
            reset: !0
        }) {
            i.pseudos[n] = ct(n)
        }
        function ft(e, t) {
            var n, r, o, a, s, u, l, c = E[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            s = e,
            u = [],
            l = i.preFilter;
            while (s) {
                (!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                u.push(o = [])),
                n = !1,
                (r = I.exec(s)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }),
                s = s.slice(n.length));
                for (a in i.filter) {
                    !(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
        }
        function dt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++) {
                r += e[t].value
            }
            return r
        }
        function ht(e, t, n) {
            var i = t.dir
              , o = n && "parentNode" === i
              , a = C++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) {
                    if (1 === t.nodeType || o) {
                        return e(t, n, r)
                    }
                }
            }
             : function(t, n, s) {
                var u, l, c, p = N + " " + a;
                if (s) {
                    while (t = t[i]) {
                        if ((1 === t.nodeType || o) && e(t, n, s)) {
                            return !0
                        }
                    }
                } else {
                    while (t = t[i]) {
                        if (1 === t.nodeType || o) {
                            if (c = t[x] || (t[x] = {}),
                            (l = c[i]) && l[0] === p) {
                                if ((u = l[1]) === !0 || u === r) {
                                    return u === !0
                                }
                            } else {
                                if (l = c[i] = [p],
                                l[1] = e(t, n, s) || r,
                                l[1] === !0) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }
        }
        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) {
                    if (!e[i](t, n, r)) {
                        return !1
                    }
                }
                return !0
            }
             : e[0]
        }
        function mt(e, t, n, r, i) {
            var o, a = [], s = 0, u = e.length, l = null  != t;
            for (; u > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                l && t.push(s))
            }
            return a
        }
        function yt(e, t, n, r, i, o) {
            return r && !r[x] && (r = yt(r)),
            i && !i[x] && (i = yt(i, o)),
            ot(function(o, a, s, u) {
                var l, c, p, f = [], d = [], h = a.length, g = o || xt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : mt(g, f, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, u),
                r) {
                    l = mt(y, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--) {
                        (p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
                    }
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && l.push(m[c] = p)
                            }
                            i(null , y = [], l, u)
                        }
                        c = y.length;
                        while (c--) {
                            (p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
                        }
                    }
                } else {
                    y = mt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null , a, y, u) : H.apply(a, y)
                }
            }
            )
        }
        function vt(e) {
            var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = ht(function(e) {
                return e === t
            }
            , s, !0), p = ht(function(e) {
                return M.call(t, e) > -1
            }
            , s, !0), f = [function(e, n, r) {
                return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; o > u; u++) {
                if (n = i.relative[e[u].type]) {
                    f = [ht(gt(f), n)]
                } else {
                    if (n = i.filter[e[u].type].apply(null , e[u].matches),
                    n[x]) {
                        for (r = ++u; o > r; r++) {
                            if (i.relative[e[r].type]) {
                                break
                            }
                        }
                        return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
                    }
                    f.push(n)
                }
            }
            return gt(f)
        }
        function bt(e, t) {
            var n = 0
              , o = t.length > 0
              , a = e.length > 0
              , s = function(s, u, c, f, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null  != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null  == T ? 1 : Math.random() || 0.1;
                for (w && (l = u !== p && u,
                r = n); null  != (h = C[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++]) {
                            if (m(h, u, c)) {
                                f.push(h);
                                break
                            }
                        }
                        w && (N = k,
                        r = ++n)
                    }
                    o && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                o && b !== v) {
                    g = 0;
                    while (m = t[g++]) {
                        m(x, y, u, c)
                    }
                    if (s) {
                        if (v > 0) {
                            while (b--) {
                                x[b] || y[b] || (y[b] = L.call(f))
                            }
                        }
                        y = mt(y)
                    }
                    H.apply(f, y),
                    w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
                }
                return w && (N = k,
                l = T),
                x
            }
            ;
            return o ? ot(s) : s
        }
        s = st.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = ft(e)),
                n = t.length;
                while (n--) {
                    o = vt(t[n]),
                    o[x] ? r.push(o) : i.push(o)
                }
                o = S(e, bt(i, r))
            }
            return o
        }
        ;
        function xt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++) {
                st(e, t[r], n)
            }
            return n
        }
        function wt(e, t, n, r) {
            var o, a, u, l, c, p = ft(e);
            if (!r && 1 === p.length) {
                if (a = p[0] = p[0].slice(0),
                a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
                    if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0],
                    !t) {
                        return n
                    }
                    e = e.slice(a.shift().value.length)
                }
                o = U.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o],
                    i.relative[l = u.type]) {
                        break
                    }
                    if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1),
                        e = r.length && dt(a),
                        !e) {
                            return H.apply(n, q.call(r, 0)),
                            n
                        }
                        break
                    }
                }
            }
            return s(e, p)(r, t, d, n, V.test(e)),
            n
        }
        i.pseudos.nth = i.pseudos.eq;
        function Tt() {}
        i.filters = Tt.prototype = i.pseudos,
        i.setFilters = new Tt,
        c(),
        st.attr = b.attr,
        b.find = st,
        b.expr = st.selectors,
        b.expr[":"] = b.expr.pseudos,
        b.unique = st.uniqueSort,
        b.text = st.getText,
        b.isXMLDoc = st.isXML,
        b.contains = st.contains
    }
    (e);
    var at = /Until$/
      , st = /^(?:parents|prev(?:Until|All))/
      , ut = /^.[^:#\[\.,]*$/
      , lt = b.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    b.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) {
                return r = this,
                this.pushStack(b(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (b.contains(r[t], this)) {
                            return !0
                        }
                    }
                }
                ))
            }
            for (n = [],
            t = 0; i > t; t++) {
                b.find(e, this[t], n)
            }
            return n = this.pushStack(i > 1 ? b.unique(n) : n),
            n.selector = (this.selector ? this.selector + " " : "") + e,
            n
        },
        has: function(e) {
            var t, n = b(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (b.contains(this, n[t])) {
                        return !0
                    }
                }
            }
            )
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? b.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e)
              , r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function(e) {
            return this.add(null  == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    b.fn.andSelf = b.fn.addBack;
    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);return e
    }
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null 
        },
        parents: function(e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return b.sibling(e.firstChild)
        },
        contents: function(e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return at.test(e) || (r = n),
            r && "string" == typeof r && (i = b.filter(r, i)),
            i = this.length > 1 && !ct[e] ? b.unique(i) : i,
            this.length > 1 && st.test(e) && (i = i.reverse()),
            this.pushStack(i)
        }
    }
    ),
    b.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
                1 === o.nodeType && i.push(o),
                o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    function ft(e, t, n) {
        if (t = t || 0,
        b.isFunction(t)) {
            return b.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            }
            )
        }
        if (t.nodeType) {
            return b.grep(e, function(e) {
                return e === t === n
            }
            )
        }
        if ("string" == typeof t) {
            var r = b.grep(e, function(e) {
                return 1 === e.nodeType
            }
            );
            if (ut.test(t)) {
                return b.filter(t, r, !n)
            }
            t = b.filter(t, r)
        }
        return b.grep(e, function(e) {
            return b.inArray(e, t) >= 0 === n
        }
        )
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Nt = /^(?:checkbox|radio)$/i
      , Ct = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(o)
      , Dt = jt.appendChild(o.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    b.fn.extend({
        text: function(e) {
            return b.access(this, function(e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }
            , null , e, arguments.length)
        },
        wrapAll: function(e) {
            if (b.isFunction(e)) {
                return this.each(function(t) {
                    b(this).wrapAll(e.call(this, t))
                }
                )
            }
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }
                ).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return b.isFunction(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }
            ) : this.each(function() {
                var t = b(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            )
        },
        wrap: function(e) {
            var t = b.isFunction(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            }
            )
        },
        unwrap: function() {
            return this.parent().each(function() {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }
            ).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            }
            )
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            }
            )
        },
        before: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            )
        },
        after: function() {
            return this.domManip(arguments, !1, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            )
        },
        remove: function(e, t) {
            var n, r = 0;
            for (; null  != (n = this[r]); r++) {
                (!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)),
                n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")),
                n.parentNode.removeChild(n)))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null  != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(Ot(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null  == e ? !1 : e,
            t = null  == t ? e : t,
            this.map(function() {
                return b.clone(this, e, t)
            }
            )
        },
        html: function(e) {
            return b.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {},
                            1 === n.nodeType && (b.cleanData(Ot(n, !1)),
                            n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }
            , null , e, arguments.length)
        },
        replaceWith: function(e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()),
            this.domManip([e], !0, function(e) {
                var t = this.nextSibling
                  , n = this.parentNode;
                n && (b(this).remove(),
                n.insertBefore(e, t))
            }
            )
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            e = f.apply([], e);
            var i, o, a, s, u, l, c = 0, p = this.length, d = this, h = p - 1, g = e[0], m = b.isFunction(g);
            if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) {
                return this.each(function(i) {
                    var o = d.eq(i);
                    m && (e[0] = g.call(this, i, n ? o.html() : t)),
                    o.domManip(e, n, r)
                }
                )
            }
            if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this),
            i = l.firstChild,
            1 === l.childNodes.length && (l = i),
            i)) {
                for (n = n && b.nodeName(i, "tr"),
                s = b.map(Ot(l, "script"), Ht),
                a = s.length; p > c; c++) {
                    o = l,
                    c !== h && (o = b.clone(o, !0, !0),
                    a && b.merge(s, Ot(o, "script"))),
                    r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c)
                }
                if (a) {
                    for (u = s[s.length - 1].ownerDocument,
                    b.map(s, qt),
                    c = 0; a > c; c++) {
                        o = s[c],
                        kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
                            url: o.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")))
                    }
                }
                l = i = null 
            }
            return this
        }
    });
    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function Ht(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Mt(e, t) {
        var n, r = 0;
        for (; null  != (n = e[r]); r++) {
            b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
        }
    }
    function _t(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, o = b._data(e), a = b._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) {
                    for (r = 0,
                    i = s[n].length; i > r; r++) {
                        b.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = b.extend({}, a.data))
        }
    }
    function Ft(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) {
                    b.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            var n, r = 0, i = [], o = b(e), a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0),
                b(o[r])[t](n),
                d.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    }
    );
    function Ot(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [],
            r = e.childNodes || e; null  != (o = r[a]); a++) {
                !n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n))
            }
        }
        return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
    }
    function Bt(e) {
        Nt.test(e.type) && (e.defaultChecked = e.checked)
    }
    b.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
                for (r = Ot(o),
                s = Ot(e),
                a = 0; null  != (i = s[a]); ++a) {
                    r[a] && Ft(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ot(e),
                    r = r || Ot(o),
                    a = 0; null  != (i = s[a]); a++) {
                        _t(i, r[a])
                    }
                } else {
                    _t(e, o)
                }
            }
            return r = Ot(o, "script"),
            r.length > 0 && Mt(r, !u && Ot(e, "script")),
            r = s = i = null ,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, u, l, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++) {
                if (o = e[h],
                o || 0 === o) {
                    if ("object" === b.type(o)) {
                        b.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")),
                            u = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                            c = At[u] || At._default,
                            s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                            i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                            !b.support.tbody) {
                                o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                                i = o && o.childNodes.length;
                                while (i--) {
                                    b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
                                }
                            }
                            b.merge(d, s.childNodes),
                            s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s),
            b.support.appendChecked || b.grep(Ot(d, "input"), Bt),
            h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o),
                s = Ot(f.appendChild(o), "script"),
                a && Mt(s),
                n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null ,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, u = b.expando, l = b.cache, p = b.support.deleteExpando, f = b.event.special;
            for (; null  != (n = e[s]); s++) {
                if ((t || b.acceptData(n)) && (o = n[u],
                a = o && l[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle)
                        }
                    }
                    l[o] && (delete l[o],
                    p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null ,
                    c.push(o))
                }
            }
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + x + ")(.*)$", "i"), Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + x + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--) {
            if (t = en[i] + n,
            t in e) {
                return t
            }
        }
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++) {
            r = e[a],
            r.style && (o[a] = b._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    b.fn.extend({
        css: function(e, n) {
            return b.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (b.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++) {
                        a[n[s]] = b.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }
            , e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            }
            )
        }
    }),
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = b.camelCase(n), l = e.style;
                if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)),
                s = b.cssHooks[n] || b.cssHooks[u],
                r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]
                }
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)),
                a = "number"),
                !(null  == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"),
                b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"),
                s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        l[n] = r
                    } catch (c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, u = b.camelCase(n);
            return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)),
            s = b.cssHooks[n] || b.cssHooks[u],
            s && "get" in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || b.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o],
                e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null )
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)),
        Yt.test(u) && Ut.test(n) && (i = l.width,
        o = l.minWidth,
        a = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = u,
        u = s.width,
        l.width = i,
        l.minWidth = o,
        l.maxWidth = a)),
        u
    }
    ) : o.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), u = s ? s[n] : t, l = e.style;
        return null  == u && l && l[n] && (u = l[n]),
        Yt.test(u) && !zt.test(n) && (i = l.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        l.left = "fontSize" === n ? "1em" : u,
        u = l.pixelLeft + "px",
        l.left = i,
        a && (o.left = a)),
        "" === u ? "auto" : u
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += b.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
        if (0 >= i || null  == i) {
            if (i = Wt(e, t, o),
            (0 > i || null  == i) && (i = e.style[t]),
            Yt.test(i)) {
                return i
            }
            r = a && (b.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function un(e) {
        var t = o
          , n = Gt[e];
        return n || (n = ln(e, t),
        "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = ln(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function ln(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body)
          , r = b.css(n[0], "display");
        return n.remove(),
        r
    }
    b.each(["height", "width"], function(e, n) {
        b.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
                    return sn(e, n, i)
                }
                ) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }
    ),
    b.support.opacity || (b.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    b(function() {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
            b.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        }
        )
    }
    ),
    b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }
    ,
    b.expr.filters.visible = function(e) {
        return !b.expr.filters.hidden(e)
    }
    ),
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        },
        Ut.test(e) || (b.cssHooks[e + t].set = on)
    }
    );
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }
            ).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
            }
            ).map(function(e, t) {
                var n = b(this).val();
                return null  == n ? null  : b.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }
                ) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }
            ).get()
        }
    }),
    b.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = b.isFunction(t) ? t() : null  == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional),
        b.isArray(e) || e.jquery && !b.isPlainObject(e)) {
            b.each(e, function() {
                o(this.name, this.value)
            }
            )
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (b.isArray(t)) {
            b.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            }
            )
        } else {
            if (n || "object" !== b.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
        }
    }
    ),
    b.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }
    ;
    var mn, yn, vn = b.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Cn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = b.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = a.href
    } catch (Ln) {
        yn = o.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (b.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(u) {
            var l;
            return o[u] = !0,
            b.each(e[u] || [], function(e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }
            ),
            l
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function Mn(e, n) {
        var r, i, o = b.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && b.extend(!0, e, r),
        e
    }
    b.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length),
        e = e.slice(0, u)),
        b.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && b.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }
        ).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    ),
    b.each(["get", "post"], function(e, n) {
        b[n] = function(e, r, i, o) {
            return b.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            b.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }
    ),
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Nn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event, h = b.Deferred(), g = b.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, x = 0, T = "canceled", N = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a)) {
                                c[t[1].toLowerCase()] = t[2]
                            }
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null  == t ? null  : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null 
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (2 > x) {
                            for (t in e) {
                                m[t] = [m[t], e[t]]
                            }
                        } else {
                            N.always(e[N.status])
                        }
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return l && l.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(N).complete = g.add,
            N.success = N.done,
            N.error = N.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""],
            null  == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))),
            p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)),
            qn(An, p, n, N),
            2 === x) {
                return N
            }
            u = p.global,
            u && 0 === b.active++ && b.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Cn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]),
            b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType),
            N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                N.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) {
                return N.abort()
            }
            T = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                N[i](p[i])
            }
            if (l = qn(jn, p, n, N)) {
                N.readyState = 1,
                u && d.trigger("ajaxSend", [N, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    N.abort("timeout")
                }
                , p.timeout));
                try {
                    x = 1,
                    l.send(y, k)
                } catch (C) {
                    if (!(2 > x)) {
                        throw C
                    }
                    k(-1, C)
                }
            } else {
                k(-1, "No Transport")
            }
            function k(e, n, r, i) {
                var c, y, v, w, T, C = n;
                2 !== x && (x = 2,
                s && clearTimeout(s),
                l = t,
                a = i || "",
                N.readyState = e > 0 ? 4 : 0,
                r && (w = _n(p, N, r)),
                e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"),
                T && (b.lastModified[o] = T),
                T = N.getResponseHeader("etag"),
                T && (b.etag[o] = T)),
                204 === e ? (c = !0,
                C = "nocontent") : 304 === e ? (c = !0,
                C = "notmodified") : (c = Fn(p, w),
                C = c.state,
                y = c.data,
                v = c.error,
                c = !v)) : (v = C,
                (e || !C) && (C = "error",
                0 > e && (e = 0))),
                N.status = e,
                N.statusText = (n || C) + "",
                c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]),
                N.statusCode(m),
                m = t,
                u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]),
                g.fireWith(f, [N, C]),
                u && (d.trigger("ajaxComplete", [N, p]),
                --b.active || b.event.trigger("ajaxStop")))
            }
            return N
        },
        getScript: function(e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        }
    });
    function _n(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c) {
            s in r && (n[c[s]] = r[s])
        }
        while ("*" === l[0]) {
            l.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in u) {
                if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break
                }
            }
        }
        if (l[0] in r) {
            a = l[0]
        } else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a),
        r[a]) : t
    }
    function Fn(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        u[1]) {
            for (i in e.converters) {
                a[i.toLowerCase()] = e.converters[i]
            }
        }
        for (; r = u[++s]; ) {
            if ("*" !== r) {
                if ("*" !== l && l !== r) {
                    if (i = a[l + " " + r] || a["* " + r],
                    !i) {
                        for (n in a) {
                            if (o = n.split(" "),
                            o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                                i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0],
                                u.splice(s--, 0, r));
                                break
                            }
                        }
                    }
                    if (i !== !0) {
                        if (i && e["throws"]) {
                            t = i(t)
                        } else {
                            try {
                                t = i(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: i ? c : "No conversion from " + l + " to " + r
                                }
                            }
                        }
                    }
                }
                l = r
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e),
                e
            }
        }
    }),
    b.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }
    ),
    b.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = o.head || b("head")[0] || o.documentElement;
            return {
                send: function(t, i) {
                    n = o.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null ,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null ,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    }
    );
    var On = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = On.pop() || b.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    b.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || b.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            On.push(o)),
            s && b.isFunction(a) && a(s[0]),
            s = a = t
        }
        ),
        "script") : t
    }
    );
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn) {
            Pn[e](t, !0)
        }
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    b.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
     : In,
    Rn = b.ajaxSettings.xhr(),
    b.support.cors = !!Rn && "withCredentials" in Rn,
    Rn = b.support.ajax = !!Rn,
    Rn && b.ajaxTransport(function(n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async),
                    n.xhrFields) {
                        for (s in n.xhrFields) {
                            u[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            u.setRequestHeader(s, i[s])
                        }
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null ),
                    r = function(e, i) {
                        var s, l, c, p;
                        try {
                            if (r && (i || 4 === u.readyState)) {
                                if (r = t,
                                a && (u.onreadystatechange = b.noop,
                                $n && delete Pn[a]),
                                i) {
                                    4 !== u.readyState && u.abort()
                                } else {
                                    p = {},
                                    s = u.status,
                                    l = u.getAllResponseHeaders(),
                                    "string" == typeof u.responseText && (p.text = u.responseText);
                                    try {
                                        c = u.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, l)
                    }
                    ,
                    n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    b(e).unload($n)),
                    Pn[a] = r),
                    u.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    }
    );
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n, r, i = this.createTween(e, t), o = Yn.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2],
                r = o[3] || (b.cssNumber[e] ? "" : "px"),
                "px" !== r && s) {
                    s = b.css(i.elem, e, !0) || n || 1;
                    do {
                        u = u || ".5",
                        s /= u,
                        b.style(i.elem, e, s + r)
                    } while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r,
                i.start = s,
                i.end = o[1] ? s + (o[1] + 1) * n : n
            }
            return i
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }
        ),
        Xn = b.now()
    }
    function Zn(e, t) {
        b.each(t, function(t, n) {
            var r = (Qn[t] || []).concat(Qn["*"])
              , i = 0
              , o = r.length;
            for (; o > i; i++) {
                if (r[i].call(e, t, n)) {
                    return
                }
            }
        }
        )
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = b.Deferred().always(function() {
            delete u.elem
        }
        ), u = function() {
            if (i) {
                return !1
            }
            var t = Xn || Kn()
              , n = Math.max(0, l.startTime + l.duration - t)
              , r = n / l.duration || 0
              , o = 1 - r
              , a = 0
              , u = l.tweens.length;
            for (; u > a; a++) {
                l.tweens[a].run(o)
            }
            return s.notifyWith(e, [l, o, n]),
            1 > o && u ? n : (s.resolveWith(e, [l]),
            !1)
        }
        , l = s.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    l.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (tr(c, l.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(l, e, c, l.opts)) {
                return r
            }
        }
        return Zn(l, c),
        b.isFunction(l.opts.start) && l.opts.start.call(e, l),
        b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (i in e) {
            if (r = b.camelCase(i),
            o = t[r],
            n = e[i],
            b.isArray(n) && (o = n[1],
            n = e[i] = n[0]),
            i !== r && (e[r] = n,
            delete e[i]),
            a = b.cssHooks[r],
            a && "expand" in a) {
                n = a.expand(n),
                delete e[r];
                for (i in n) {
                    i in e || (e[i] = n[i],
                    t[i] = o)
                }
            } else {
                t[r] = o
            }
        }
    }
    b.Animation = b.extend(er, {
        tweener: function(e, t) {
            b.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) {
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, u, l, c, p, f = this, d = e.style, h = {}, g = [], m = e.nodeType && nn(e);
        n.queue || (c = b._queueHooks(e, "fx"),
        null  == c.unqueued && (c.unqueued = 0,
        p = c.empty.fire,
        c.empty.fire = function() {
            c.unqueued || p()
        }
        ),
        c.unqueued++,
        f.always(function() {
            f.always(function() {
                c.unqueued--,
                b.queue(e, "fx").length || c.empty.fire()
            }
            )
        }
        )),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        b.support.shrinkWrapBlocks || f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }
        ));
        for (i in t) {
            if (a = t[i],
            Vn.exec(a)) {
                if (delete t[i],
                u = u || "toggle" === a,
                a === (m ? "hide" : "show")) {
                    continue
                }
                g.push(i)
            }
        }
        if (o = g.length) {
            s = b._data(e, "fxshow") || b._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            u && (s.hidden = !m),
            m ? b(e).show() : f.done(function() {
                b(e).hide()
            }
            ),
            f.done(function() {
                var t;
                b._removeData(e, "fxshow");
                for (t in h) {
                    b.style(e, t, h[t])
                }
            }
            );
            for (i = 0; o > i; i++) {
                r = g[i],
                l = f.createTween(r, m ? s[r] : 0),
                h[r] = s[r] || b.style(e, r),
                r in s || (s[r] = l.start,
                m && (l.end = l.start,
                l.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    b.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null  == e.elem[e.prop] || e.elem.style && null  != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null  != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null  == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }
    ),
    b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e)
              , o = b.speed(t, n, r)
              , a = function() {
                var t = er(this, b.extend({}, e), o);
                a.finish = function() {
                    t.stop(!0)
                }
                ,
                (i || b._data(this, "finish")) && t.stop(!0)
            }
            ;
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            }
            ;
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null  != e && e + "queueHooks"
                  , o = b.timers
                  , a = b._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--; ) {
                    o[n].elem !== this || null  != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1))
                }
                (t || !r) && b.dequeue(this, e)
            }
            )
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = b._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                b.queue(this, e, []),
                i && i.cur && i.cur.finish && i.cur.finish.call(this),
                t = o.length; t--; ) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            }
            )
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e),
        r
    }
    b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    ),
    b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default,
        (null  == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            b.isFunction(r.old) && r.old.call(this),
            r.queue && b.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    },
    b.timers = [],
    b.fx = rr.prototype.init,
    b.fx.tick = function() {
        var e, n = b.timers, r = 0;
        for (Xn = b.now(); n.length > r; r++) {
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || b.fx.stop(),
        Xn = t
    }
    ,
    b.fx.timer = function(e) {
        e() && b.timers.push(e) && b.fx.start()
    }
    ,
    b.fx.interval = 13,
    b.fx.start = function() {
        Un || (Un = setInterval(b.fx.tick, b.fx.interval))
    }
    ,
    b.fx.stop = function() {
        clearInterval(Un),
        Un = null 
    }
    ,
    b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    b.fx.step = {},
    b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }
        ).length
    }
    ),
    b.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                b.offset.setOffset(this, e, t)
            }
            )
        }
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement,
            b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    }
    ,
    b.offset = {
        setOffset: function(e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e), o = i.offset(), a = b.css(e, "top"), s = b.css(e, "left"), u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1, l = {}, c = {}, p, f;
            u ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            b.isFunction(t) && (t = t.call(e, n, o)),
            null  != t.top && (l.top = t.top - o.top + p),
            null  != t.left && (l.left = t.left - o.left + f),
            "using" in t ? t.using.call(e, l) : i.css(l)
        }
    },
    b.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                b.nodeName(e[0], "html") || (n = e.offset()),
                n.top += b.css(e[0], "borderTopWidth", !0),
                n.left += b.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || o.documentElement
            }
            )
        }
    }),
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function(i) {
            return b.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o,
                t)
            }
            , e, i, arguments.length, null )
        }
    }
    );
    function or(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    b.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            b.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return b.access(this, function(n, r, i) {
                    var o;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
                }
                , n, a ? i : t, a, null )
            }
        }
        )
    }
    ),
    e.jQuery = e.$ = b,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return b
    }
    )
}
)(window);
(function(d, b) {
    var a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    d.fn.imagesLoaded = function(n) {
        function k() {
            var e = d(r)
              , f = d(s);
            v && (s.length ? v.reject(u, e, f) : v.resolve(u));
            d.isFunction(n) && n.call(t, u, e, f)
        }
        function q(e, f) {
            e.src === a || -1 !== d.inArray(e, p) || (p.push(e),
            f ? s.push(e) : r.push(e),
            d.data(e, "imagesLoaded", {
                isBroken: f,
                src: e.src
            }),
            c && v.notifyWith(d(e), [f, u, d(r), d(s)]),
            u.length === p.length && (setTimeout(k),
            u.unbind(".imagesLoaded")))
        }
        var t = this
          , v = d.isFunction(d.Deferred) ? d.Deferred() : 0
          , c = d.isFunction(v.notify)
          , u = t.find("img").add(t.filter("img"))
          , p = []
          , r = []
          , s = [];
        u.length ? u.bind("load.imagesLoaded error.imagesLoaded", function(e) {
            q(e.target, "error" === e.type)
        }
        ).each(function(f, g) {
            var h = g.src
              , i = d.data(g, "imagesLoaded");
            if (i && i.src === h) {
                q(g, i.isBroken)
            } else {
                if (g.complete && g.naturalWidth !== b) {
                    q(g, 0 === g.naturalWidth || 0 === g.naturalHeight)
                } else {
                    if (g.readyState || g.complete) {
                        g.src = a,
                        g.src = h
                    }
                }
            }
        }
        ) : k();
        return v ? v.promise(t) : t
    }
}
)(jQuery);
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1000 / 60)
        }
    }
    )()
}
$.fn.spin = function(a) {
    this.each(function() {
        var c = $(this)
          , b = c.data();
        if (b.spinner) {
            b.spinner.stop();
            delete b.spinner
        }
        if (a !== false) {
            b.spinner = new Spinner($.extend({
                color: c.css("color")
            }, a)).spin(this)
        }
    }
    );
    return this
}
;
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(F) {
        var z, w, G, b = _gsScope.GreenSockGlobals || _gsScope, k = b.com.greensock, C = 2 * Math.PI, j = Math.PI / 2, x = k._class, v = function(f, a) {
            var c = x("easing." + f, function() {}
            , !0)
              , d = c.prototype = new F;
            return d.constructor = c,
            d.getRatio = a,
            c
        }
        , D = F.register || function() {}
        , E = function(c, h, a, d) {
            var f = x("easing." + c, {
                easeOut: new h,
                easeIn: new a,
                easeInOut: new d
            }, !0);
            return D(f, c),
            f
        }
        , B = function(c, d, a) {
            this.t = c,
            this.v = d,
            a && (this.next = a,
            a.prev = this,
            this.c = a.v - d,
            this.gap = a.t - c)
        }
        , g = function(f, a) {
            var c = x("easing." + f, function(e) {
                this._p1 = e || 0 === e ? e : 1.70158,
                this._p2 = 1.525 * this._p1
            }
            , !0)
              , d = c.prototype = new F;
            return d.constructor = c,
            d.getRatio = a,
            d.config = function(e) {
                return new c(e)
            }
            ,
            c
        }
        , y = E("Back", g("BackOut", function(a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
        }
        ), g("BackIn", function(a) {
            return a * a * ((this._p1 + 1) * a - this._p1)
        }
        ), g("BackInOut", function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
        }
        )), q = x("easing.SlowMo", function(c, d, a) {
            d = d || 0 === d ? d : 0.7,
            null  == c ? c = 0.7 : c > 1 && (c = 1),
            this._p = 1 !== c ? d : 0,
            this._p1 = (1 - c) / 2,
            this._p2 = c,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = a === !0
        }
        , !0), A = q.prototype = new F;
        return A.constructor = q,
        A.getRatio = function(a) {
            var c = a + (0.5 - a) * this._p;
            return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : c - (a = 1 - a / this._p1) * a * a * a * c : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : c + (a - c) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : c
        }
        ,
        q.ease = new q(0.7,0.7),
        A.config = q.config = function(c, d, a) {
            return new q(c,d,a)
        }
        ,
        z = x("easing.SteppedEase", function(a) {
            a = a || 1,
            this._p1 = 1 / a,
            this._p2 = a + 1
        }
        , !0),
        A = z.prototype = new F,
        A.constructor = z,
        A.getRatio = function(a) {
            return 0 > a ? a = 0 : a >= 1 && (a = 0.999999999),
            (this._p2 * a >> 0) * this._p1
        }
        ,
        A.config = z.config = function(a) {
            return new z(a)
        }
        ,
        w = x("easing.RoughEase", function(P) {
            P = P || {};
            for (var L, U, c, I, R, H, M = P.taper || "none", K = [], S = 0, T = 0 | (P.points || 20), t = T, O = P.randomize !== !1, J = P.clamp === !0, Q = P.template instanceof F ? P.template : null , N = "number" == typeof P.strength ? 0.4 * P.strength : 0.4; --t > -1; ) {
                L = O ? Math.random() : 1 / T * t,
                U = Q ? Q.getRatio(L) : L,
                "none" === M ? c = N : "out" === M ? (I = 1 - L,
                c = I * I * N) : "in" === M ? c = L * L * N : 0.5 > L ? (I = 2 * L,
                c = 0.5 * I * I * N) : (I = 2 * (1 - L),
                c = 0.5 * I * I * N),
                O ? U += Math.random() * c - 0.5 * c : t % 2 ? U += 0.5 * c : U -= 0.5 * c,
                J && (U > 1 ? U = 1 : 0 > U && (U = 0)),
                K[S++] = {
                    x: L,
                    y: U
                }
            }
            for (K.sort(function(a, d) {
                return a.x - d.x
            }
            ),
            H = new B(1,1,null ),
            t = T; --t > -1; ) {
                R = K[t],
                H = new B(R.x,R.y,H)
            }
            this._prev = new B(0,0,0 !== H.t ? H : H.next)
        }
        , !0),
        A = w.prototype = new F,
        A.constructor = w,
        A.getRatio = function(a) {
            var c = this._prev;
            if (a > c.t) {
                for (; c.next && a >= c.t; ) {
                    c = c.next
                }
                c = c.prev
            } else {
                for (; c.prev && c.t >= a; ) {
                    c = c.prev
                }
            }
            return this._prev = c,
            c.v + (a - c.t) / c.gap * c.c
        }
        ,
        A.config = function(a) {
            return new w(a)
        }
        ,
        w.ease = new w,
        E("Bounce", v("BounceOut", function(a) {
            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        }
        ), v("BounceIn", function(a) {
            return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }
        ), v("BounceInOut", function(a) {
            var c = 0.5 > a;
            return a = c ? 1 - 2 * a : 2 * a - 1,
            a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375,
            c ? 0.5 * (1 - a) : 0.5 * a + 0.5
        }
        )),
        E("Circ", v("CircOut", function(a) {
            return Math.sqrt(1 - (a -= 1) * a)
        }
        ), v("CircIn", function(a) {
            return -(Math.sqrt(1 - a * a) - 1)
        }
        ), v("CircInOut", function(a) {
            return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }
        )),
        G = function(f, a, c) {
            var d = x("easing." + f, function(i, l) {
                this._p1 = i || 1,
                this._p2 = l || c,
                this._p3 = this._p2 / C * (Math.asin(1 / this._p1) || 0)
            }
            , !0)
              , h = d.prototype = new F;
            return h.constructor = d,
            h.getRatio = a,
            h.config = function(i, l) {
                return new d(i,l)
            }
            ,
            d
        }
        ,
        E("Elastic", G("ElasticOut", function(a) {
            return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * C / this._p2) + 1
        }
        , 0.3), G("ElasticIn", function(a) {
            return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2))
        }
        , 0.3), G("ElasticInOut", function(a) {
            return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * C / this._p2) + 1
        }
        , 0.45)),
        E("Expo", v("ExpoOut", function(a) {
            return 1 - Math.pow(2, -10 * a)
        }
        ), v("ExpoIn", function(a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001
        }
        ), v("ExpoInOut", function(a) {
            return 1 > (a *= 2) ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)))
        }
        )),
        E("Sine", v("SineOut", function(a) {
            return Math.sin(a * j)
        }
        ), v("SineIn", function(a) {
            return -Math.cos(a * j) + 1
        }
        ), v("SineInOut", function(a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1)
        }
        )),
        x("easing.EaseLookup", {
            find: function(a) {
                return F.map[a]
            }
        }, !0),
        D(b.SlowMo, "SlowMo", "ease,"),
        D(w, "RoughEase", "ease,"),
        D(z, "SteppedEase", "ease,"),
        y
    }
    , !0)
}
),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.15.0
 * DATE: 2014-12-03
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(av, aO) {
        var aJ, ax, aw, aC, aU = function() {
            av.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = aU.prototype.setRatio
        }
        , aB = _gsScope._gsDefine.globals, aG = {}, aK = aU.prototype = new av("css");
        aK.constructor = aU,
        aU.version = "1.15.0",
        aU.API = 2,
        aU.defaultTransformPerspective = 0,
        aU.defaultSkewType = "compensated",
        aK = "px",
        aU.suffixMap = {
            top: aK,
            right: aK,
            bottom: aK,
            left: aK,
            width: aK,
            height: aK,
            fontSize: aK,
            padding: aK,
            margin: aK,
            perspective: aK,
            lineHeight: ""
        };
        var au, aN, aA, aV, aQ, aP, aD = /(?:\d|\-\d|\.\d|\-\.\d)+/g, aM = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, at = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, ap = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, aq = /(?:\d|\-|\+|=|#|\.)*/g, a2 = /opacity *= *([^)]*)/i, ar = /opacity:([^;]*)/i, aT = /alpha\(opacity *=.+?\)/i, a7 = /^(rgb|hsl)/, a4 = /([A-Z])/g, br = /-([a-z])/gi, a5 = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, aH = function(a, b) {
            return b.toUpperCase()
        }
        , a8 = /(?:Left|Right|Width)/i, bt = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, bo = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, bc = /,(?=[^\)]*(?:\(|$))/gi, bd = Math.PI / 180, ba = 180 / Math.PI, ao = {}, aY = document, bh = function(a) {
            return aY.createElementNS ? aY.createElementNS("http://www.w3.org/1999/xhtml", a) : aY.createElement(a)
        }
        , bm = bh("div"), bn = bh("img"), aX = aU._internals = {
            _specialProps: aG
        }, bs = navigator.userAgent, a1 = function() {
            var a = bs.indexOf("Android")
              , b = bh("a");
            return aA = -1 !== bs.indexOf("Safari") && -1 === bs.indexOf("Chrome") && (-1 === a || Number(bs.substr(a + 8, 1)) > 3),
            aQ = aA && 6 > Number(bs.substr(bs.indexOf("Version/") + 8, 1)),
            aV = -1 !== bs.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(bs) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(bs)) && (aP = parseFloat(RegExp.$1)),
            b ? (b.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(b.style.opacity)) : !1
        }
        (), aI = function(a) {
            return a2.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }
        , aZ = function(a) {
            window.console && console.log(a)
        }
        , a0 = "", az = "", bk = function(b, f) {
            f = f || bm;
            var a, d, c = f.style;
            if (void 0 !== c[b]) {
                return b
            }
            for (b = b.charAt(0).toUpperCase() + b.substr(1),
            a = ["O", "Moz", "ms", "Ms", "Webkit"],
            d = 5; --d > -1 && void 0 === c[a[d] + b]; ) {}
            return d >= 0 ? (az = 3 === d ? "ms" : a[d],
            a0 = "-" + az.toLowerCase() + "-",
            az + b) : null 
        }
        , a6 = aY.defaultView ? aY.defaultView.getComputedStyle : function() {}
        , bl = aU.getStyle = function(b, f, a, d, c) {
            var g;
            return a1 || "opacity" !== f ? (!d && b.style[f] ? g = b.style[f] : (a = a || a6(b)) ? g = a[f] || a.getPropertyValue(f) || a.getPropertyValue(f.replace(a4, "-$1").toLowerCase()) : b.currentStyle && (g = b.currentStyle[f]),
            null  == c || g && "none" !== g && "auto" !== g && "auto auto" !== g ? g : c) : aI(b)
        }
        , aW = aX.convertToPixels = function(v, g, a, w, d) {
            if ("px" === w || !w) {
                return a
            }
            if ("auto" === w || !a) {
                return 0
            }
            var c, e, j, q = a8.test(g), k = v, b = bm.style, m = 0 > a;
            if (m && (a = -a),
            "%" === w && -1 !== g.indexOf("border")) {
                c = a / 100 * (q ? v.clientWidth : v.clientHeight)
            } else {
                if (b.cssText = "border:0 solid red;position:" + bl(v, "position") + ";line-height:0;",
                "%" !== w && k.appendChild) {
                    b[q ? "borderLeftWidth" : "borderTopWidth"] = a + w
                } else {
                    if (k = v.parentNode || aY.body,
                    e = k._gsCache,
                    j = aO.ticker.frame,
                    e && q && e.time === j) {
                        return e.width * a / 100
                    }
                    b[q ? "width" : "height"] = a + w
                }
                k.appendChild(bm),
                c = parseFloat(bm[q ? "offsetWidth" : "offsetHeight"]),
                k.removeChild(bm),
                q && "%" === w && aU.cacheWidths !== !1 && (e = k._gsCache = k._gsCache || {},
                e.time = j,
                e.width = 100 * (c / a)),
                0 !== c || d || (c = aW(v, g, a, w, !0))
            }
            return m ? -c : c
        }
        , bB = aX.calculateOffset = function(b, f, a) {
            if ("absolute" !== bl(b, "position", a)) {
                return 0
            }
            var d = "left" === f ? "Left" : "Top"
              , c = bl(b, "margin" + d, a);
            return b["offset" + d] - (aW(b, f, parseFloat(c), c.replace(aq, "")) || 0)
        }
        , bf = function(b, f) {
            var a, d, c = {};
            if (f = f || a6(b, null )) {
                if (a = f.length) {
                    for (; --a > -1; ) {
                        c[f[a].replace(br, aH)] = f.getPropertyValue(f[a])
                    }
                } else {
                    for (a in f) {
                        c[a] = f[a]
                    }
                }
            } else {
                if (f = b.currentStyle || b.style) {
                    for (a in f) {
                        "string" == typeof a && void 0 === c[a] && (c[a.replace(br, aH)] = f[a])
                    }
                }
            }
            return a1 || (c.opacity = aI(b)),
            d = bI(b, f, !1),
            c.rotation = d.rotation,
            c.skewX = d.skewX,
            c.scaleX = d.scaleX,
            c.scaleY = d.scaleY,
            c.x = d.x,
            c.y = d.y,
            bK && (c.z = d.z,
            c.rotationX = d.rotationX,
            c.rotationY = d.rotationY,
            c.scaleZ = d.scaleZ),
            c.filters && delete c.filters,
            c
        }
        , bg = function(p, k, g, b, q) {
            var d, m, c, f = {}, j = p.style;
            for (m in g) {
                "cssText" !== m && "length" !== m && isNaN(m) && (k[m] !== (d = g[m]) || q && q[m]) && -1 === m.indexOf("Origin") && ("number" == typeof d || "string" == typeof d) && (f[m] = "auto" !== d || "left" !== m && "top" !== m ? "" !== d && "auto" !== d && "none" !== d || "string" != typeof k[m] || "" === k[m].replace(ap, "") ? d : 0 : bB(p, m),
                void 0 !== j[m] && (c = new ab(j,m,j[m],c)))
            }
            if (b) {
                for (m in b) {
                    "className" !== m && (f[m] = b[m])
                }
            }
            return {
                difs: f,
                firstMPT: c
            }
        }
        , bp = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ac = ["marginLeft", "marginRight", "marginTop", "marginBottom"], aE = function(b, f, a) {
            var d = parseFloat("width" === f ? b.offsetWidth : b.offsetHeight)
              , c = bp[f]
              , g = c.length;
            for (a = a || a6(b, null ); --g > -1; ) {
                d -= parseFloat(bl(b, "padding" + c[g], a, !0)) || 0,
                d -= parseFloat(bl(b, "border" + c[g] + "Width", a, !0)) || 0
            }
            return d
        }
        , bH = function(b, f) {
            (null  == b || "" === b || "auto" === b || "auto auto" === b) && (b = "0 0");
            var a = b.split(" ")
              , d = -1 !== b.indexOf("left") ? "0%" : -1 !== b.indexOf("right") ? "100%" : a[0]
              , c = -1 !== b.indexOf("top") ? "0%" : -1 !== b.indexOf("bottom") ? "100%" : a[1];
            return null  == c ? c = "0" : "center" === c && (c = "50%"),
            ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"),
            f && (f.oxp = -1 !== d.indexOf("%"),
            f.oyp = -1 !== c.indexOf("%"),
            f.oxr = "=" === d.charAt(1),
            f.oyr = "=" === c.charAt(1),
            f.ox = parseFloat(d.replace(ap, "")),
            f.oy = parseFloat(c.replace(ap, ""))),
            d + " " + c + (a.length > 2 ? " " + a[2] : "")
        }
        , bz = function(a, b) {
            return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
        }
        , bi = function(a, b) {
            return null  == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
        }
        , bv = function(k, h, g, b) {
            var m, d, j, c, f = 0.000001;
            return null  == k ? c = h : "number" == typeof k ? c = k : (m = 360,
            d = k.split("_"),
            j = Number(d[0].replace(ap, "")) * (-1 === k.indexOf("rad") ? 1 : ba) - ("=" === k.charAt(1) ? 0 : h),
            d.length && (b && (b[g] = h + j),
            -1 !== k.indexOf("short") && (j %= m,
            j !== j % (m / 2) && (j = 0 > j ? j + m : j - m)),
            -1 !== k.indexOf("_cw") && 0 > j ? j = (j + 9999999999 * m) % m - (0 | j / m) * m : -1 !== k.indexOf("ccw") && j > 0 && (j = (j - 9999999999 * m) % m - (0 | j / m) * m)),
            c = h + j),
            f > c && c > -f && (c = 0),
            c
        }
        , aL = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, bG = function(b, c, a) {
            return b = 0 > b ? b + 1 : b > 1 ? b - 1 : b,
            0 | 255 * (1 > 6 * b ? c + 6 * (a - c) * b : 0.5 > b ? a : 2 > 3 * b ? c + 6 * (a - c) * (2 / 3 - b) : c) + 0.5
        }
        , a9 = aU.parseColor = function(d) {
            var h, c, g, f, j, b;
            return d && "" !== d ? "number" == typeof d ? [d >> 16, 255 & d >> 8, 255 & d] : ("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)),
            aL[d] ? aL[d] : "#" === d.charAt(0) ? (4 === d.length && (h = d.charAt(1),
            c = d.charAt(2),
            g = d.charAt(3),
            d = "#" + h + h + c + c + g + g),
            d = parseInt(d.substr(1), 16),
            [d >> 16, 255 & d >> 8, 255 & d]) : "hsl" === d.substr(0, 3) ? (d = d.match(aD),
            f = Number(d[0]) % 360 / 360,
            j = Number(d[1]) / 100,
            b = Number(d[2]) / 100,
            c = 0.5 >= b ? b * (j + 1) : b + j - b * j,
            h = 2 * b - c,
            d.length > 3 && (d[3] = Number(d[3])),
            d[0] = bG(f + 1 / 3, h, c),
            d[1] = bG(f, h, c),
            d[2] = bG(f - 1 / 3, h, c),
            d) : (d = d.match(aD) || aL.transparent,
            d[0] = Number(d[0]),
            d[1] = Number(d[1]),
            d[2] = Number(d[2]),
            d.length > 3 && (d[3] = Number(d[3])),
            d)) : aL.black
        }
        , aR = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (aK in aL) {
            aR += "|" + aK + "\\b"
        }
        aR = RegExp(aR + ")", "gi");
        var bE = function(w, p, j, b) {
            if (null  == w) {
                return function(a) {
                    return a
                }
            }
            var x, d = p ? (w.match(aR) || [""])[0] : "", q = w.split(d).join("").match(at) || [], c = w.substr(0, w.indexOf(q[0])), g = ")" === w.charAt(w.length - 1) ? ")" : "", k = -1 !== w.indexOf(" ") ? " " : ",", v = q.length, m = v > 0 ? q[0].replace(aD, "") : "";
            return v ? x = p ? function(f) {
                var i, h, a, l;
                if ("number" == typeof f) {
                    f += m
                } else {
                    if (b && bc.test(f)) {
                        for (l = f.replace(bc, "|").split("|"),
                        a = 0; l.length > a; a++) {
                            l[a] = x(l[a])
                        }
                        return l.join(",")
                    }
                }
                if (i = (f.match(aR) || [d])[0],
                h = f.split(i).join("").match(at) || [],
                a = h.length,
                v > a--) {
                    for (; v > ++a; ) {
                        h[a] = j ? h[0 | (a - 1) / 2] : q[a]
                    }
                }
                return c + h.join(k) + k + i + g + (-1 !== f.indexOf("inset") ? " inset" : "")
            }
             : function(a) {
                var h, i, f;
                if ("number" == typeof a) {
                    a += m
                } else {
                    if (b && bc.test(a)) {
                        for (i = a.replace(bc, "|").split("|"),
                        f = 0; i.length > f; f++) {
                            i[f] = x(i[f])
                        }
                        return i.join(",")
                    }
                }
                if (h = a.match(at) || [],
                f = h.length,
                v > f--) {
                    for (; v > ++f; ) {
                        h[f] = j ? h[0 | (f - 1) / 2] : q[f]
                    }
                }
                return c + h.join(k) + g
            }
             : function(a) {
                return a
            }
        }
          , am = function(a) {
            return a = a.split(","),
            function(k, g, b, p, d, m, c) {
                var f, j = (g + "").split(" ");
                for (c = {},
                f = 0; 4 > f; f++) {
                    c[a[f]] = j[f] = j[f] || j[(f - 1) / 2 >> 0]
                }
                return p.parse(k, c, d, m)
            }
        }
          , ab = (aX._setPluginRatio = function(k) {
            this.plugin.setRatio(k);
            for (var h, g, b, m, d = this.data, j = d.proxy, c = d.firstMPT, f = 0.000001; c; ) {
                h = j[c.v],
                c.r ? h = Math.round(h) : f > h && h > -f && (h = 0),
                c.t[c.p] = h,
                c = c._next
            }
            if (d.autoRotate && (d.autoRotate.rotation = j.rotation),
            1 === k) {
                for (c = d.firstMPT; c; ) {
                    if (g = c.t,
                    g.type) {
                        if (1 === g.type) {
                            for (m = g.xs0 + g.s + g.xs1,
                            b = 1; g.l > b; b++) {
                                m += g["xn" + b] + g["xs" + (b + 1)]
                            }
                            g.e = m
                        }
                    } else {
                        g.e = g.s + g.xs0
                    }
                    c = c._next
                }
            }
        }
        ,
        function(b, f, a, d, c) {
            this.t = b,
            this.p = f,
            this.v = a,
            this.r = c,
            d && (d._prev = this,
            this._next = d)
        }
        )
          , ay = (aX._parseToProxy = function(D, x, q, b, E, k) {
            var A, j, m, v, C, w = b, g = {}, B = {}, z = q._transform, y = ao;
            for (q._transform = null ,
            ao = x,
            b = C = q.parse(D, x, b, E),
            ao = y,
            k && (q._transform = z,
            w && (w._prev = null ,
            w._prev && (w._prev._next = null ))); b && b !== w; ) {
                if (1 >= b.type && (j = b.p,
                B[j] = b.s + b.c,
                g[j] = b.s,
                k || (v = new ab(b,"s",j,v,b.r),
                b.c = 0),
                1 === b.type)) {
                    for (A = b.l; --A > 0; ) {
                        m = "xn" + A,
                        j = b.p + "_" + m,
                        B[j] = b.data[m],
                        g[j] = b[m],
                        k || (v = new ab(b,m,j,v,b.rxp[m]))
                    }
                }
                b = b._next
            }
            return {
                proxy: g,
                end: B,
                firstMPT: v,
                pt: C
            }
        }
        ,
        aX.CSSPropTween = function(q, k, b, v, m, d, g, i, n, j, c) {
            this.t = q,
            this.p = k,
            this.s = b,
            this.c = v,
            this.n = g || k,
            q instanceof ay || aC.push(this.n),
            this.r = i,
            this.type = d || 0,
            n && (this.pr = n,
            aJ = !0),
            this.b = void 0 === j ? b : j,
            this.e = void 0 === c ? b + v : c,
            m && (this._next = m,
            m._prev = this)
        }
        )
          , ak = aU.parseComplex = function(D, Q, M, G, E, J, X, I, K, N) {
            M = M || J || "",
            X = new ay(D,Q,0,0,X,N ? 2 : 1,null ,!1,I,M,G),
            G += "";
            var P, H, Y, V, U, B, u, z, g, A, W, j, F = M.split(", ").join(",").split(" "), m = G.split(", ").join(",").split(" "), L = F.length, q = au !== !1;
            for ((-1 !== G.indexOf(",") || -1 !== M.indexOf(",")) && (F = F.join(" ").replace(bc, ", ").split(" "),
            m = m.join(" ").replace(bc, ", ").split(" "),
            L = F.length),
            L !== m.length && (F = (J || "").split(" "),
            L = F.length),
            X.plugin = K,
            X.setRatio = N,
            P = 0; L > P; P++) {
                if (V = F[P],
                U = m[P],
                z = parseFloat(V),
                z || 0 === z) {
                    X.appendXtra("", z, bz(U, z), U.replace(aM, ""), q && -1 !== U.indexOf("px"), !0)
                } else {
                    if (E && ("#" === V.charAt(0) || aL[V] || a7.test(V))) {
                        j = "," === U.charAt(U.length - 1) ? ")," : ")",
                        V = a9(V),
                        U = a9(U),
                        g = V.length + U.length > 6,
                        g && !a1 && 0 === U[3] ? (X["xs" + X.l] += X.l ? " transparent" : "transparent",
                        X.e = X.e.split(m[P]).join("transparent")) : (a1 || (g = !1),
                        X.appendXtra(g ? "rgba(" : "rgb(", V[0], U[0] - V[0], ",", !0, !0).appendXtra("", V[1], U[1] - V[1], ",", !0).appendXtra("", V[2], U[2] - V[2], g ? "," : j, !0),
                        g && (V = 4 > V.length ? 1 : V[3],
                        X.appendXtra("", V, (4 > U.length ? 1 : U[3]) - V, j, !1)))
                    } else {
                        if (B = V.match(aD)) {
                            if (u = U.match(aM),
                            !u || u.length !== B.length) {
                                return X
                            }
                            for (Y = 0,
                            H = 0; B.length > H; H++) {
                                W = B[H],
                                A = V.indexOf(W, Y),
                                X.appendXtra(V.substr(Y, A - Y), Number(W), bz(u[H], W), "", q && "px" === V.substr(A + W.length, 2), 0 === H),
                                Y = A + W.length
                            }
                            X["xs" + X.l] += V.substr(Y)
                        } else {
                            X["xs" + X.l] += X.l ? " " + V : V
                        }
                    }
                }
            }
            if (-1 !== G.indexOf("=") && X.data) {
                for (j = X.xs0 + X.data.s,
                P = 1; X.l > P; P++) {
                    j += X["xs" + P] + X.data["xn" + P]
                }
                X.e = j + X["xs" + P]
            }
            return X.l || (X.type = -1,
            X.xs0 = X.e),
            X.xfirst || X
        }
          , by = 9;
        for (aK = ay.prototype,
        aK.l = aK.pr = 0; --by > 0; ) {
            aK["xn" + by] = 0,
            aK["xs" + by] = ""
        }
        aK.xs0 = "",
        aK._next = aK._prev = aK.xfirst = aK.data = aK.plugin = aK.setRatio = aK.rxp = null ,
        aK.appendXtra = function(d, h, c, g, f, k) {
            var b = this
              , j = b.l;
            return b["xs" + j] += k && j ? " " + d : d || "",
            c || 0 === j || b.plugin ? (b.l++,
            b.type = b.setRatio ? 2 : 1,
            b["xs" + b.l] = g || "",
            j > 0 ? (b.data["xn" + j] = h + c,
            b.rxp["xn" + j] = f,
            b["xn" + j] = h,
            b.plugin || (b.xfirst = new ay(b,"xn" + j,h,c,b.xfirst || b,0,b.n,f,b.pr),
            b.xfirst.xs0 = 0),
            b) : (b.data = {
                s: h + c
            },
            b.rxp = {},
            b.s = h,
            b.c = c,
            b.r = f,
            b)) : (b["xs" + j] += h + (g || ""),
            b)
        }
        ;
        var bw = function(a, b) {
            b = b || {},
            this.p = b.prefix ? bk(a) || a : a,
            aG[a] = aG[this.p] = this,
            this.format = b.formatter || bE(b.defaultValue, b.color, b.collapsible, b.multi),
            b.parser && (this.parse = b.parser),
            this.clrs = b.color,
            this.multi = b.multi,
            this.keyword = b.keyword,
            this.dflt = b.defaultValue,
            this.pr = b.priority || 0
        }
          , an = aX._registerComplexSpecialProp = function(d, h, c) {
            "object" != typeof h && (h = {
                parser: c
            });
            var g, f, j = d.split(","), b = h.defaultValue;
            for (c = c || [b],
            g = 0; j.length > g; g++) {
                h.prefix = 0 === g && h.prefix,
                h.defaultValue = c[g] || b,
                f = new bw(j[g],h)
            }
        }
          , bC = function(a) {
            if (!aG[a]) {
                var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                an(a, {
                    parser: function(f, e, k, j, l, c, g) {
                        var d = aB.com.greensock.plugins[b];
                        return d ? (d._cssRegister(),
                        aG[k].parse(f, e, k, j, l, c, g)) : (aZ("Error: " + b + " js file not loaded."),
                        l)
                    }
                })
            }
        }
        ;
        aK = bw.prototype,
        aK.parseComplex = function(y, v, k, b, z, g) {
            var w, d, j, m, x, q, c = this.keyword;
            if (this.multi && (bc.test(k) || bc.test(v) ? (d = v.replace(bc, "|").split("|"),
            j = k.replace(bc, "|").split("|")) : c && (d = [v],
            j = [k])),
            j) {
                for (m = j.length > d.length ? j.length : d.length,
                w = 0; m > w; w++) {
                    v = d[w] = d[w] || this.dflt,
                    k = j[w] = j[w] || this.dflt,
                    c && (x = v.indexOf(c),
                    q = k.indexOf(c),
                    x !== q && (k = -1 === q ? j : d,
                    k[w] += " " + c))
                }
                v = d.join(", "),
                k = j.join(", ")
            }
            return ak(y, this.p, v, k, this.clrs, this.dflt, b, this.pr, z, g)
        }
        ,
        aK.parse = function(d, g, c, f, h, b) {
            return this.parseComplex(d.style, this.format(bl(d, this.p, aw, !1, this.dflt)), this.format(g), h, b)
        }
        ,
        aU.registerSpecialProp = function(b, c, a) {
            an(b, {
                parser: function(f, h, g, j, e, i) {
                    var d = new ay(f,g,0,0,e,2,g,!1,a);
                    return d.plugin = i,
                    d.setRatio = c(f, h, j._tween, g),
                    d
                },
                priority: a
            })
        }
        ;
        var bJ, bD = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), ah = bk("transform"), a3 = a0 + "transform", aS = bk("transformOrigin"), bK = null  !== bk("perspective"), bb = aX.Transform = function() {
            this.perspective = parseFloat(aU.defaultTransformPerspective) || 0,
            this.force3D = aU.defaultForce3D !== !1 && bK ? aU.defaultForce3D || "auto" : !1
        }
        , ai = window.SVGElement, ad = function(b, f, a) {
            var d, c = aY.createElementNS("http://www.w3.org/2000/svg", b), g = /([a-z])([A-Z])/g;
            for (d in a) {
                c.setAttributeNS(null , d.replace(g, "$1-$2").toLowerCase(), a[d])
            }
            return f.appendChild(c),
            c
        }
        , bq = document.documentElement, bF = function() {
            var b, d, a, c = aP || /Android/i.test(bs) && !window.chrome;
            return aY.createElementNS && !c && (b = ad("svg", bq),
            d = ad("rect", b, {
                width: 100,
                height: 50,
                x: 100
            }),
            a = d.getBoundingClientRect().width,
            d.style[aS] = "50% 50%",
            d.style[ah] = "scaleX(0.5)",
            c = a === d.getBoundingClientRect().width,
            bq.removeChild(b)),
            c
        }
        (), aF = function(b, d, a) {
            var c = b.getBBox();
            d = bH(d).split(" "),
            a.xOrigin = (-1 !== d[0].indexOf("%") ? parseFloat(d[0]) / 100 * c.width : parseFloat(d[0])) + c.x,
            a.yOrigin = (-1 !== d[1].indexOf("%") ? parseFloat(d[1]) / 100 * c.height : parseFloat(d[1])) + c.y
        }
        , bI = aX.getTransform = function(b3, ch, cd, b4) {
            if (b3._gsTransform && cd && !b4) {
                return b3._gsTransform
            }
            var b8, b7, ca, ce, b2, cg, b6, cl, cj, ci, b9 = cd ? b3._gsTransform || new bb : new bb, cf = 0 > b9.scaleX, b1 = 0.00002, bY = 100000, bZ = bK ? parseFloat(bl(b3, aS, ch, !1, "0 0 0").split(" ")[2]) || b9.zOrigin || 0 : 0, N = parseFloat(aU.defaultTransformPerspective) || 0;
            if (ah ? b7 = bl(b3, a3, ch, !0) : b3.currentStyle && (b7 = b3.currentStyle.filter.match(bt),
            b7 = b7 && 4 === b7.length ? [b7[0].substr(4), Number(b7[2].substr(4)), Number(b7[1].substr(4)), b7[3].substr(4), b9.x || 0, b9.y || 0].join(",") : ""),
            b8 = !b7 || "none" === b7 || "matrix(1, 0, 0, 1, 0, 0)" === b7,
            b9.svg = !!(ai && "function" == typeof b3.getBBox && b3.getCTM && (!b3.parentNode || b3.parentNode.getBBox && b3.parentNode.getCTM)),
            b9.svg && (aF(b3, bl(b3, aS, aw, !1, "50% 50%") + "", b9),
            bJ = aU.useSVGTransformAttr || bF,
            ca = b3.getAttribute("transform"),
            b8 && ca && -1 !== ca.indexOf("matrix") && (b7 = ca,
            b8 = 0)),
            !b8) {
                for (ca = (b7 || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                ce = ca.length; --ce > -1; ) {
                    b2 = Number(ca[ce]),
                    ca[ce] = (cg = b2 - (b2 |= 0)) ? (0 | cg * bY + (0 > cg ? -0.5 : 0.5)) / bY + b2 : b2
                }
                if (16 === ca.length) {
                    var b0 = ca[8]
                      , ck = ca[9]
                      , bM = ca[10]
                      , ae = ca[12]
                      , bV = ca[13]
                      , be = ca[14];
                    b9.zOrigin && (be = -b9.zOrigin,
                    ae = b0 * be - ca[12],
                    bV = ck * be - ca[13],
                    be = bM * be + b9.zOrigin - ca[14]);
                    var cb, bN, bU, bO, bP, bX = ca[0], A = ca[1], bQ = ca[2], bS = ca[3], bT = ca[4], s = ca[5], bW = ca[6], K = ca[7], cc = ca[11], G = Math.atan2(A, s);
                    b9.rotation = G * ba,
                    G && (bO = Math.cos(-G),
                    bP = Math.sin(-G),
                    bX = bX * bO + bT * bP,
                    bN = A * bO + s * bP,
                    s = A * -bP + s * bO,
                    bW = bQ * -bP + bW * bO,
                    A = bN),
                    G = Math.atan2(b0, bX),
                    b9.rotationY = G * ba,
                    G && (bO = Math.cos(-G),
                    bP = Math.sin(-G),
                    cb = bX * bO - b0 * bP,
                    bN = A * bO - ck * bP,
                    bU = bQ * bO - bM * bP,
                    ck = A * bP + ck * bO,
                    bM = bQ * bP + bM * bO,
                    cc = bS * bP + cc * bO,
                    bX = cb,
                    A = bN,
                    bQ = bU),
                    G = Math.atan2(bW, bM),
                    b9.rotationX = G * ba,
                    G && (bO = Math.cos(-G),
                    bP = Math.sin(-G),
                    cb = bT * bO + b0 * bP,
                    bN = s * bO + ck * bP,
                    bU = bW * bO + bM * bP,
                    b0 = bT * -bP + b0 * bO,
                    ck = s * -bP + ck * bO,
                    bM = bW * -bP + bM * bO,
                    cc = K * -bP + cc * bO,
                    bT = cb,
                    s = bN,
                    bW = bU),
                    b9.scaleX = (0 | Math.sqrt(bX * bX + A * A) * bY + 0.5) / bY,
                    b9.scaleY = (0 | Math.sqrt(s * s + ck * ck) * bY + 0.5) / bY,
                    b9.scaleZ = (0 | Math.sqrt(bW * bW + bM * bM) * bY + 0.5) / bY,
                    b9.skewX = 0,
                    b9.perspective = cc ? 1 / (0 > cc ? -cc : cc) : 0,
                    b9.x = ae,
                    b9.y = bV,
                    b9.z = be
                } else {
                    if (!(bK && !b4 && ca.length && b9.x === ca[4] && b9.y === ca[5] && (b9.rotationX || b9.rotationY) || void 0 !== b9.x && "none" === bl(b3, "display", ch))) {
                        var J = ca.length >= 6
                          , b5 = J ? ca[0] : 1
                          , bR = ca[1] || 0
                          , bL = ca[2] || 0
                          , a = J ? ca[3] : 1;
                        b9.x = ca[4] || 0,
                        b9.y = ca[5] || 0,
                        b6 = Math.sqrt(b5 * b5 + bR * bR),
                        cl = Math.sqrt(a * a + bL * bL),
                        cj = b5 || bR ? Math.atan2(bR, b5) * ba : b9.rotation || 0,
                        ci = bL || a ? Math.atan2(bL, a) * ba + cj : b9.skewX || 0,
                        Math.abs(ci) > 90 && 270 > Math.abs(ci) && (cf ? (b6 *= -1,
                        ci += 0 >= cj ? 180 : -180,
                        cj += 0 >= cj ? 180 : -180) : (cl *= -1,
                        ci += 0 >= ci ? 180 : -180)),
                        b9.scaleX = b6,
                        b9.scaleY = cl,
                        b9.rotation = cj,
                        b9.skewX = ci,
                        bK && (b9.rotationX = b9.rotationY = b9.z = 0,
                        b9.perspective = N,
                        b9.scaleZ = 1)
                    }
                }
                b9.zOrigin = bZ;
                for (ce in b9) {
                    b1 > b9[ce] && b9[ce] > -b1 && (b9[ce] = 0)
                }
            }
            return cd && (b3._gsTransform = b9),
            b9
        }
        , ag = function(B) {
            var Q, L, F = this.data, D = -F.rotation * bd, I = D + F.skewX * bd, V = 100000, H = (0 | Math.cos(D) * F.scaleX * V) / V, K = (0 | Math.sin(D) * F.scaleX * V) / V, M = (0 | Math.sin(I) * -F.scaleY * V) / V, A = (0 | Math.cos(I) * F.scaleY * V) / V, O = this.t.style, G = this.t.currentStyle;
            if (G) {
                L = K,
                K = -M,
                M = -L,
                Q = G.filter,
                O.filter = "";
                var W, T, J = this.t.offsetWidth, N = this.t.offsetHeight, z = "absolute" !== G.position, q = "progid:DXImageTransform.Microsoft.Matrix(M11=" + H + ", M12=" + K + ", M21=" + M + ", M22=" + A, x = F.x + J * F.xPercent / 100, U = F.y + N * F.yPercent / 100;
                if (null  != F.ox && (W = (F.oxp ? 0.01 * J * F.ox : F.ox) - J / 2,
                T = (F.oyp ? 0.01 * N * F.oy : F.oy) - N / 2,
                x += W - (W * H + T * K),
                U += T - (W * M + T * A)),
                z ? (W = J / 2,
                T = N / 2,
                q += ", Dx=" + (W - (W * H + T * K) + x) + ", Dy=" + (T - (W * M + T * A) + U) + ")") : q += ", sizingMethod='auto expand')",
                O.filter = -1 !== Q.indexOf("DXImageTransform.Microsoft.Matrix(") ? Q.replace(bo, q) : q + " " + Q,
                (0 === B || 1 === B) && 1 === H && 0 === K && 0 === M && 1 === A && (z && -1 === q.indexOf("Dx=0, Dy=0") || a2.test(Q) && 100 !== parseFloat(RegExp.$1) || -1 === Q.indexOf("gradient(" && Q.indexOf("Alpha")) && O.removeAttribute("filter")),
                !z) {
                    var k, d, E, j = 8 > aP ? 1 : -1;
                    for (W = F.ieOffsetX || 0,
                    T = F.ieOffsetY || 0,
                    F.ieOffsetX = Math.round((J - ((0 > H ? -H : H) * J + (0 > K ? -K : K) * N)) / 2 + x),
                    F.ieOffsetY = Math.round((N - ((0 > A ? -A : A) * N + (0 > M ? -M : M) * J)) / 2 + U),
                    by = 0; 4 > by; by++) {
                        d = ac[by],
                        k = G[d],
                        L = -1 !== k.indexOf("px") ? parseFloat(k) : aW(this.t, d, parseFloat(k), k.replace(aq, "")) || 0,
                        E = L !== F[d] ? 2 > by ? -F.ieOffsetX : -F.ieOffsetY : 2 > by ? W - F.ieOffsetX : T - F.ieOffsetY,
                        O[d] = (F[d] = Math.round(L - E * (0 === by || 2 === by ? 1 : j))) + "px"
                    }
                }
            }
        }
        , bA = aX.set3DTransformRatio = function(bN) {
            var b0, bW, bP, bO, bS, b4, bR, bU, bX, bM, bZ, bQ, b2, b1, bT, bY, bL, Z, ae, q, be, b3, G, B, V, E = this.data, bV = this.t.style, H = E.rotation * bd, W = E.scaleX, U = E.scaleY, K = E.scaleZ, J = E.x, Y = E.y, j = E.z, L = E.perspective;
            if (!(1 !== bN && 0 !== bN || "auto" !== E.force3D || E.rotationY || E.rotationX || 1 !== K || L || j)) {
                return bu.call(this, bN),
                void 0
            }
            if (aV) {
                var Q = 0.0001;
                Q > W && W > -Q && (W = K = 0.00002),
                Q > U && U > -Q && (U = K = 0.00002),
                !L || E.z || E.rotationX || E.rotationY || (L = 0)
            }
            if (H || E.skewX) {
                Z = Math.cos(H),
                ae = Math.sin(H),
                b0 = Z,
                bS = ae,
                E.skewX && (H -= E.skewX * bd,
                Z = Math.cos(H),
                ae = Math.sin(H),
                "simple" === E.skewType && (q = Math.tan(E.skewX * bd),
                q = Math.sqrt(1 + q * q),
                Z *= q,
                ae *= q)),
                bW = -ae,
                b4 = Z
            } else {
                if (!(E.rotationY || E.rotationX || 1 !== K || L || E.svg)) {
                    return bV[ah] = (E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) translate3d(" : "translate3d(") + J + "px," + Y + "px," + j + "px)" + (1 !== W || 1 !== U ? " scale(" + W + "," + U + ")" : ""),
                    void 0
                }
                b0 = b4 = 1,
                bW = bS = 0
            }
            bZ = 1,
            bP = bO = bR = bU = bX = bM = bQ = b2 = b1 = 0,
            bT = L ? -1 / L : 0,
            bY = E.zOrigin,
            bL = 100000,
            V = ",",
            H = E.rotationY * bd,
            H && (Z = Math.cos(H),
            ae = Math.sin(H),
            bX = bZ * -ae,
            b2 = bT * -ae,
            bP = b0 * ae,
            bR = bS * ae,
            bZ *= Z,
            bT *= Z,
            b0 *= Z,
            bS *= Z),
            H = E.rotationX * bd,
            H && (Z = Math.cos(H),
            ae = Math.sin(H),
            q = bW * Z + bP * ae,
            be = b4 * Z + bR * ae,
            b3 = bM * Z + bZ * ae,
            G = b1 * Z + bT * ae,
            bP = bW * -ae + bP * Z,
            bR = b4 * -ae + bR * Z,
            bZ = bM * -ae + bZ * Z,
            bT = b1 * -ae + bT * Z,
            bW = q,
            b4 = be,
            bM = b3,
            b1 = G),
            1 !== K && (bP *= K,
            bR *= K,
            bZ *= K,
            bT *= K),
            1 !== U && (bW *= U,
            b4 *= U,
            bM *= U,
            b1 *= U),
            1 !== W && (b0 *= W,
            bS *= W,
            bX *= W,
            b2 *= W),
            bY && (bQ -= bY,
            bO = bP * bQ,
            bU = bR * bQ,
            bQ = bZ * bQ + bY),
            E.svg && (bO += E.xOrigin - (E.xOrigin * b0 + E.yOrigin * bW),
            bU += E.yOrigin - (E.xOrigin * bS + E.yOrigin * b4)),
            bO = (q = (bO += J) - (bO |= 0)) ? (0 | q * bL + (0 > q ? -0.5 : 0.5)) / bL + bO : bO,
            bU = (q = (bU += Y) - (bU |= 0)) ? (0 | q * bL + (0 > q ? -0.5 : 0.5)) / bL + bU : bU,
            bQ = (q = (bQ += j) - (bQ |= 0)) ? (0 | q * bL + (0 > q ? -0.5 : 0.5)) / bL + bQ : bQ,
            B = E.xPercent || E.yPercent ? "translate(" + E.xPercent + "%," + E.yPercent + "%) matrix3d(" : "matrix3d(",
            B += (0 | b0 * bL) / bL + V + (0 | bS * bL) / bL + V + (0 | bX * bL) / bL,
            B += V + (0 | b2 * bL) / bL + V + (0 | bW * bL) / bL + V + (0 | b4 * bL) / bL,
            B += V + (0 | bM * bL) / bL + V + (0 | b1 * bL) / bL + V + (0 | bP * bL) / bL,
            B += V + (0 | bR * bL) / bL + V + (0 | bZ * bL) / bL + V + (0 | bT * bL) / bL,
            B += V + bO + V + bU + V + bQ + V + (L ? 1 + -bQ / L : 1) + ")",
            bV[ah] = B
        }
        , bu = aX.set2DTransformRatio = function(F) {
            var z, w, b, G, k, C, j, v, x, E, y, g = this.data, D = this.t, B = D.style, A = g.x, q = g.y;
            return !(g.rotationX || g.rotationY || g.z || g.force3D === !0 || "auto" === g.force3D && 1 !== F && 0 !== F) || g.svg && bJ || !bK ? (G = g.scaleX,
            k = g.scaleY,
            g.rotation || g.skewX || g.svg ? (z = g.rotation * bd,
            w = z - g.skewX * bd,
            b = 100000,
            C = Math.cos(z) * G,
            j = Math.sin(z) * G,
            v = Math.sin(w) * -k,
            x = Math.cos(w) * k,
            g.svg && (A += g.xOrigin - (g.xOrigin * C + g.yOrigin * v),
            q += g.yOrigin - (g.xOrigin * j + g.yOrigin * x),
            y = 0.000001,
            y > A && A > -y && (A = 0),
            y > q && q > -y && (q = 0)),
            E = (0 | C * b) / b + "," + (0 | j * b) / b + "," + (0 | v * b) / b + "," + (0 | x * b) / b + "," + A + "," + q + ")",
            g.svg && bJ ? D.setAttribute("transform", "matrix(" + E) : B[ah] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + E) : B[ah] = (g.xPercent || g.yPercent ? "translate(" + g.xPercent + "%," + g.yPercent + "%) matrix(" : "matrix(") + G + ",0,0," + k + "," + A + "," + q + ")",
            void 0) : (this.setRatio = bA,
            bA.call(this, F),
            void 0)
        }
        ;
        aK = bb.prototype,
        aK.x = aK.y = aK.z = aK.skewX = aK.skewY = aK.rotation = aK.rotationX = aK.rotationY = aK.zOrigin = aK.xPercent = aK.yPercent = 0,
        aK.scaleX = aK.scaleY = aK.scaleZ = 1,
        an("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
            parser: function(s, I, E, w, B, A, D) {
                if (w._lastParsedTransform === D) {
                    return B
                }
                w._lastParsedTransform = D;
                var F, q, H, z, L, K, J, C = w._transform = bI(s, aw, !0, D.parseTransform), G = s.style, k = 0.000001, b = bD.length, j = D, a = {};
                if ("string" == typeof j.transform && ah) {
                    H = bm.style,
                    H[ah] = j.transform,
                    H.display = "block",
                    H.position = "absolute",
                    aY.body.appendChild(bm),
                    F = bI(bm, null , !1),
                    aY.body.removeChild(bm)
                } else {
                    if ("object" == typeof j) {
                        if (F = {
                            scaleX: bi(null  != j.scaleX ? j.scaleX : j.scale, C.scaleX),
                            scaleY: bi(null  != j.scaleY ? j.scaleY : j.scale, C.scaleY),
                            scaleZ: bi(j.scaleZ, C.scaleZ),
                            x: bi(j.x, C.x),
                            y: bi(j.y, C.y),
                            z: bi(j.z, C.z),
                            xPercent: bi(j.xPercent, C.xPercent),
                            yPercent: bi(j.yPercent, C.yPercent),
                            perspective: bi(j.transformPerspective, C.perspective)
                        },
                        J = j.directionalRotation,
                        null  != J) {
                            if ("object" == typeof J) {
                                for (H in J) {
                                    j[H] = J[H]
                                }
                            } else {
                                j.rotation = J
                            }
                        }
                        "string" == typeof j.x && -1 !== j.x.indexOf("%") && (F.x = 0,
                        F.xPercent = bi(j.x, C.xPercent)),
                        "string" == typeof j.y && -1 !== j.y.indexOf("%") && (F.y = 0,
                        F.yPercent = bi(j.y, C.yPercent)),
                        F.rotation = bv("rotation" in j ? j.rotation : "shortRotation" in j ? j.shortRotation + "_short" : "rotationZ" in j ? j.rotationZ : C.rotation, C.rotation, "rotation", a),
                        bK && (F.rotationX = bv("rotationX" in j ? j.rotationX : "shortRotationX" in j ? j.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", a),
                        F.rotationY = bv("rotationY" in j ? j.rotationY : "shortRotationY" in j ? j.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", a)),
                        F.skewX = null  == j.skewX ? C.skewX : bv(j.skewX, C.skewX),
                        F.skewY = null  == j.skewY ? C.skewY : bv(j.skewY, C.skewY),
                        (q = F.skewY - C.skewY) && (F.skewX += q,
                        F.rotation += q)
                    }
                }
                for (bK && null  != j.force3D && (C.force3D = j.force3D,
                K = !0),
                C.skewType = j.skewType || C.skewType || aU.defaultSkewType,
                L = C.force3D || C.z || C.rotationX || C.rotationY || F.z || F.rotationX || F.rotationY || F.perspective,
                L || null  == j.scale || (F.scaleZ = 1); --b > -1; ) {
                    E = bD[b],
                    z = F[E] - C[E],
                    (z > k || -k > z || null  != j[E] || null  != ao[E]) && (K = !0,
                    B = new ay(C,E,C[E],z,B),
                    E in a && (B.e = a[E]),
                    B.xs0 = 0,
                    B.plugin = A,
                    w._overwriteProps.push(B.n))
                }
                return z = j.transformOrigin,
                z && C.svg && (aF(s, z, F),
                B = new ay(C,"xOrigin",C.xOrigin,F.xOrigin - C.xOrigin,B,-1,"transformOrigin"),
                B.b = C.xOrigin,
                B.e = B.xs0 = F.xOrigin,
                B = new ay(C,"yOrigin",C.yOrigin,F.yOrigin - C.yOrigin,B,-1,"transformOrigin"),
                B.b = C.yOrigin,
                B.e = B.xs0 = F.yOrigin,
                z = "0px 0px"),
                (z || bK && L && C.zOrigin) && (ah ? (K = !0,
                E = aS,
                z = (z || bl(s, E, aw, !1, "50% 50%")) + "",
                B = new ay(G,E,0,0,B,-1,"transformOrigin"),
                B.b = G[E],
                B.plugin = A,
                bK ? (H = C.zOrigin,
                z = z.split(" "),
                C.zOrigin = (z.length > 2 && (0 === H || "0px" !== z[2]) ? parseFloat(z[2]) : H) || 0,
                B.xs0 = B.e = z[0] + " " + (z[1] || "50%") + " 0px",
                B = new ay(C,"zOrigin",0,0,B,-1,B.n),
                B.b = H,
                B.xs0 = B.e = C.zOrigin) : B.xs0 = B.e = z) : bH(z + "", C)),
                K && (w._transformType = C.svg && bJ || !L && 3 !== this._transformType ? 2 : 3),
                B
            },
            prefix: !0
        }),
        an("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        an("borderRadius", {
            defaultValue: "0px",
            parser: function(B, L, H, E, Q) {
                L = this.format(L);
                var D, G, I, A, K, C, R, N, M, F, J, z, q, r, j, s, O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = B.style;
                for (M = parseFloat(B.offsetWidth),
                F = parseFloat(B.offsetHeight),
                D = L.split(" "),
                G = 0; O.length > G; G++) {
                    this.p.indexOf("border") && (O[G] = bk(O[G])),
                    K = A = bl(B, O[G], aw, !1, "0px"),
                    -1 !== K.indexOf(" ") && (A = K.split(" "),
                    K = A[0],
                    A = A[1]),
                    C = I = D[G],
                    R = parseFloat(K),
                    z = K.substr((R + "").length),
                    q = "=" === C.charAt(1),
                    q ? (N = parseInt(C.charAt(0) + "1", 10),
                    C = C.substr(2),
                    N *= parseFloat(C),
                    J = C.substr((N + "").length - (0 > N ? 1 : 0)) || "") : (N = parseFloat(C),
                    J = C.substr((N + "").length)),
                    "" === J && (J = ax[H] || z),
                    J !== z && (r = aW(B, "borderLeft", R, z),
                    j = aW(B, "borderTop", R, z),
                    "%" === J ? (K = 100 * (r / M) + "%",
                    A = 100 * (j / F) + "%") : "em" === J ? (s = aW(B, "borderLeft", 1, "em"),
                    K = r / s + "em",
                    A = j / s + "em") : (K = r + "px",
                    A = j + "px"),
                    q && (C = parseFloat(K) + N + J,
                    I = parseFloat(A) + N + J)),
                    Q = ak(k, O[G], K + " " + A, C + " " + I, !1, "0px", Q)
                }
                return Q
            },
            prefix: !0,
            formatter: bE("0px 0px 0px 0px", !1, !0)
        }),
        an("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(E, z, v, b, k, B) {
                var j, s, w, D, y, d, C = "background-position", A = aw || a6(E, null ), q = this.format((A ? aP ? A.getPropertyValue(C + "-x") + " " + A.getPropertyValue(C + "-y") : A.getPropertyValue(C) : E.currentStyle.backgroundPositionX + " " + E.currentStyle.backgroundPositionY) || "0 0"), x = this.format(z);
                if (-1 !== q.indexOf("%") != (-1 !== x.indexOf("%")) && (d = bl(E, "backgroundImage").replace(a5, ""),
                d && "none" !== d)) {
                    for (j = q.split(" "),
                    s = x.split(" "),
                    bn.setAttribute("src", d),
                    w = 2; --w > -1; ) {
                        q = j[w],
                        D = -1 !== q.indexOf("%"),
                        D !== (-1 !== s[w].indexOf("%")) && (y = 0 === w ? E.offsetWidth - bn.width : E.offsetHeight - bn.height,
                        j[w] = D ? parseFloat(q) / 100 * y + "px" : 100 * (parseFloat(q) / y) + "%")
                    }
                    q = j.join(" ")
                }
                return this.parseComplex(E.style, q, x, k, B)
            },
            formatter: bH
        }),
        an("backgroundSize", {
            defaultValue: "0 0",
            formatter: bH
        }),
        an("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        an("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        an("transformStyle", {
            prefix: !0
        }),
        an("backfaceVisibility", {
            prefix: !0
        }),
        an("userSelect", {
            prefix: !0
        }),
        an("margin", {
            parser: am("marginTop,marginRight,marginBottom,marginLeft")
        }),
        an("padding", {
            parser: am("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        an("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(p, k, g, b, d, m) {
                var c, f, j;
                return 9 > aP ? (f = p.currentStyle,
                j = 8 > aP ? " " : ",",
                c = "rect(" + f.clipTop + j + f.clipRight + j + f.clipBottom + j + f.clipLeft + ")",
                k = this.format(k).split(",").join(j)) : (c = this.format(bl(p, this.p, aw, !1, this.dflt)),
                k = this.format(k)),
                this.parseComplex(p.style, c, k, d, m)
            }
        }),
        an("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        an("autoRound,strictUnits", {
            parser: function(b, f, a, d, c) {
                return c
            }
        }),
        an("border", {
            defaultValue: "0px solid #000",
            parser: function(d, g, c, f, h, b) {
                return this.parseComplex(d.style, this.format(bl(d, "borderTopWidth", aw, !1, "0px") + " " + bl(d, "borderTopStyle", aw, !1, "solid") + " " + bl(d, "borderTopColor", aw, !1, "#000")), this.format(g), h, b)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(aR) || ["#000"])[0]
            }
        }),
        an("borderWidth", {
            parser: am("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        an("float,cssFloat,styleFloat", {
            parser: function(d, h, c, g, f) {
                var j = d.style
                  , b = "cssFloat" in j ? "cssFloat" : "styleFloat";
                return new ay(j,b,0,0,f,-1,c,!1,0,j[b],h)
            }
        });
        var aj = function(b) {
            var f, a = this.t, d = a.filter || bl(this.data, "filter") || "", c = 0 | this.s + this.c * b;
            100 === c && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (a.removeAttribute("filter"),
            f = !bl(this.data, "filter")) : (a.filter = d.replace(aT, ""),
            f = !0)),
            f || (this.xn1 && (a.filter = d = d || "alpha(opacity=" + c + ")"),
            -1 === d.indexOf("pacity") ? 0 === c && this.xn1 || (a.filter = d + " alpha(opacity=" + c + ")") : a.filter = d.replace(a2, "opacity=" + c))
        }
        ;
        an("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(p, k, g, b, d, m) {
                var c = parseFloat(bl(p, "opacity", aw, !1, "1"))
                  , f = p.style
                  , j = "autoAlpha" === g;
                return "string" == typeof k && "=" === k.charAt(1) && (k = ("-" === k.charAt(0) ? -1 : 1) * parseFloat(k.substr(2)) + c),
                j && 1 === c && "hidden" === bl(p, "visibility", aw) && 0 !== k && (c = 0),
                a1 ? d = new ay(f,"opacity",c,k - c,d) : (d = new ay(f,"opacity",100 * c,100 * (k - c),d),
                d.xn1 = j ? 1 : 0,
                f.zoom = 1,
                d.type = 2,
                d.b = "alpha(opacity=" + d.s + ")",
                d.e = "alpha(opacity=" + (d.s + d.c) + ")",
                d.data = p,
                d.plugin = m,
                d.setRatio = aj),
                j && (d = new ay(f,"visibility",0,0,d,-1,null ,!1,0,0 !== c ? "inherit" : "hidden",0 === k ? "hidden" : "inherit"),
                d.xs0 = "inherit",
                b._overwriteProps.push(d.n),
                b._overwriteProps.push(g)),
                d
            }
        });
        var bj = function(a, b) {
            b && (a.removeProperty ? ("ms" === b.substr(0, 2) && (b = "M" + b.substr(1)),
            a.removeProperty(b.replace(a4, "-$1").toLowerCase())) : a.removeAttribute(b))
        }
          , af = function(b) {
            if (this.t._gsClassPT = this,
            1 === b || 0 === b) {
                this.t.setAttribute("class", 0 === b ? this.b : this.e);
                for (var c = this.data, a = this.t.style; c; ) {
                    c.v ? a[c.p] = c.v : bj(a, c.p),
                    c = c._next
                }
                1 === b && this.t._gsClassPT === this && (this.t._gsClassPT = null )
            } else {
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }
        }
        ;
        an("className", {
            parser: function(A, s, b, j, x, i, k) {
                var m, z, q, g, y, w = A.getAttribute("class") || "", v = A.style.cssText;
                if (x = j._classNamePT = new ay(A,b,0,0,x,2),
                x.setRatio = af,
                x.pr = -11,
                aJ = !0,
                x.b = w,
                z = bf(A, aw),
                q = A._gsClassPT) {
                    for (g = {},
                    y = q.data; y; ) {
                        g[y.p] = 1,
                        y = y._next
                    }
                    q.setRatio(1)
                }
                return A._gsClassPT = x,
                x.e = "=" !== s.charAt(1) ? s : w.replace(RegExp("\\s*\\b" + s.substr(2) + "\\b"), "") + ("+" === s.charAt(0) ? " " + s.substr(2) : ""),
                j._tween._duration && (A.setAttribute("class", x.e),
                m = bg(A, z, bf(A), k, g),
                A.setAttribute("class", w),
                x.data = m.firstMPT,
                A.style.cssText = v,
                x = x.xfirst = j.parse(A, m.difs, x, i)),
                x
            }
        });
        var al = function(d) {
            if ((1 === d || 0 === d) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var h, c, g, f, j = this.t.style, b = aG.transform.parse;
                if ("all" === this.e) {
                    j.cssText = "",
                    f = !0
                } else {
                    for (h = this.e.split(" ").join("").split(","),
                    g = h.length; --g > -1; ) {
                        c = h[g],
                        aG[c] && (aG[c].parse === b ? f = !0 : c = "transformOrigin" === c ? aS : aG[c].p),
                        bj(j, c)
                    }
                }
                f && (bj(j, ah),
                this.t._gsTransform && delete this.t._gsTransform)
            }
        }
        ;
        for (an("clearProps", {
            parser: function(a, d, c, b, f) {
                return f = new ay(a,c,0,0,f,2),
                f.setRatio = al,
                f.e = d,
                f.pr = -10,
                f.data = b._tween,
                aJ = !0,
                f
            }
        }),
        aK = "bezier,throwProps,physicsProps,physics2D".split(","),
        by = aK.length; by--; ) {
            bC(aK[by])
        }
        aK = aU.prototype,
        aK._firstPT = aK._lastParsedTransform = aK._transform = null ,
        aK._onInitTween = function(u, k, a) {
            if (!u.nodeType) {
                return !1
            }
            this._target = u,
            this._tween = a,
            this._vars = k,
            au = k.autoRound,
            aJ = !1,
            ax = k.suffixMap || aU.suffixMap,
            aw = a6(u, ""),
            aC = this._overwriteProps;
            var c, i, s, n, b, j, r, p, q, f = u.style;
            if (aN && "" === f.zIndex && (c = bl(u, "zIndex", aw),
            ("auto" === c || "" === c) && this._addLazySet(f, "zIndex", 0)),
            "string" == typeof k && (n = f.cssText,
            c = bf(u, aw),
            f.cssText = n + ";" + k,
            c = bg(u, c, bf(u)).difs,
            !a1 && ar.test(k) && (c.opacity = parseFloat(RegExp.$1)),
            k = c,
            f.cssText = n),
            this._firstPT = i = this.parse(u, k, null ),
            this._transformType) {
                for (q = 3 === this._transformType,
                ah ? aA && (aN = !0,
                "" === f.zIndex && (r = bl(u, "zIndex", aw),
                ("auto" === r || "" === r) && this._addLazySet(f, "zIndex", 0)),
                aQ && this._addLazySet(f, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (q ? "visible" : "hidden"))) : f.zoom = 1,
                s = i; s && s._next; ) {
                    s = s._next
                }
                p = new ay(u,"transform",0,0,null ,2),
                this._linkCSSP(p, null , s),
                p.setRatio = q && bK ? bA : ah ? bu : ag,
                p.data = this._transform || bI(u, aw, !0),
                aC.pop()
            }
            if (aJ) {
                for (; i; ) {
                    for (j = i._next,
                    s = n; s && s.pr > i.pr; ) {
                        s = s._next
                    }
                    (i._prev = s ? s._prev : b) ? i._prev._next = i : n = i,
                    (i._next = s) ? s._prev = i : b = i,
                    i = j
                }
                this._firstPT = n
            }
            return !0
        }
        ,
        aK.parse = function(C, w, q, k) {
            var z, j, r, u, b, B, y, x, l, s, A = C.style;
            for (z in w) {
                B = w[z],
                j = aG[z],
                j ? q = j.parse(C, B, z, this, q, k, w) : (b = bl(C, z, aw) + "",
                l = "string" == typeof B,
                "color" === z || "fill" === z || "stroke" === z || -1 !== z.indexOf("Color") || l && a7.test(B) ? (l || (B = a9(B),
                B = (B.length > 3 ? "rgba(" : "rgb(") + B.join(",") + ")"),
                q = ak(A, z, b, B, !0, "transparent", q, 0, k)) : !l || -1 === B.indexOf(" ") && -1 === B.indexOf(",") ? (r = parseFloat(b),
                y = r || 0 === r ? b.substr((r + "").length) : "",
                ("" === b || "auto" === b) && ("width" === z || "height" === z ? (r = aE(C, z, aw),
                y = "px") : "left" === z || "top" === z ? (r = bB(C, z, aw),
                y = "px") : (r = "opacity" !== z ? 0 : 1,
                y = "")),
                s = l && "=" === B.charAt(1),
                s ? (u = parseInt(B.charAt(0) + "1", 10),
                B = B.substr(2),
                u *= parseFloat(B),
                x = B.replace(aq, "")) : (u = parseFloat(B),
                x = l ? B.substr((u + "").length) || "" : ""),
                "" === x && (x = z in ax ? ax[z] : y),
                B = u || 0 === u ? (s ? u + r : u) + x : w[z],
                y !== x && "" !== x && (u || 0 === u) && r && (r = aW(C, z, r, y),
                "%" === x ? (r /= aW(C, z, 100, "%") / 100,
                w.strictUnits !== !0 && (b = r + "%")) : "em" === x ? r /= aW(C, z, 1, "em") : "px" !== x && (u = aW(C, z, u, x),
                x = "px"),
                s && (u || 0 === u) && (B = u + r + x)),
                s && (u += r),
                !r && 0 !== r || !u && 0 !== u ? void 0 !== A[z] && (B || "NaN" != B + "" && null  != B) ? (q = new ay(A,z,u || r || 0,0,q,-1,z,!1,0,b,B),
                q.xs0 = "none" !== B || "display" !== z && -1 === z.indexOf("Style") ? B : b) : aZ("invalid " + z + " tween value: " + w[z]) : (q = new ay(A,z,r,u - r,q,0,z,au !== !1 && ("px" === x || "zIndex" === z),0,b,B),
                q.xs0 = x)) : q = ak(A, z, b, B, !0, null , q, 0, k)),
                k && q && !q.plugin && (q.plugin = k)
            }
            return q
        }
        ,
        aK.setRatio = function(b) {
            var f, a, d, c = this._firstPT, g = 0.000001;
            if (1 !== b || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
                if (b || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -0.000001) {
                    for (; c; ) {
                        if (f = c.c * b + c.s,
                        c.r ? f = Math.round(f) : g > f && f > -g && (f = 0),
                        c.type) {
                            if (1 === c.type) {
                                if (d = c.l,
                                2 === d) {
                                    c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2
                                } else {
                                    if (3 === d) {
                                        c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3
                                    } else {
                                        if (4 === d) {
                                            c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4
                                        } else {
                                            if (5 === d) {
                                                c.t[c.p] = c.xs0 + f + c.xs1 + c.xn1 + c.xs2 + c.xn2 + c.xs3 + c.xn3 + c.xs4 + c.xn4 + c.xs5
                                            } else {
                                                for (a = c.xs0 + f + c.xs1,
                                                d = 1; c.l > d; d++) {
                                                    a += c["xn" + d] + c["xs" + (d + 1)]
                                                }
                                                c.t[c.p] = a
                                            }
                                        }
                                    }
                                }
                            } else {
                                -1 === c.type ? c.t[c.p] = c.xs0 : c.setRatio && c.setRatio(b)
                            }
                        } else {
                            c.t[c.p] = f + c.xs0
                        }
                        c = c._next
                    }
                } else {
                    for (; c; ) {
                        2 !== c.type ? c.t[c.p] = c.b : c.setRatio(b),
                        c = c._next
                    }
                }
            } else {
                for (; c; ) {
                    2 !== c.type ? c.t[c.p] = c.e : c.setRatio(b),
                    c = c._next
                }
            }
        }
        ,
        aK._enableTransforms = function(a) {
            this._transform = this._transform || bI(this._target, aw, !0),
            this._transformType = this._transform.svg && bJ || !a && 3 !== this._transformType ? 2 : 3
        }
        ;
        var aa = function() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null , !0)
        }
        ;
        aK._addLazySet = function(b, d, a) {
            var c = this._firstPT = new ay(b,d,0,0,this._firstPT,2);
            c.e = a,
            c.setRatio = aa,
            c.data = this
        }
        ,
        aK._linkCSSP = function(b, d, a, c) {
            return b && (d && (d._prev = b),
            b._next && (b._next._prev = b._prev),
            b._prev ? b._prev._next = b._next : this._firstPT === b && (this._firstPT = b._next,
            c = !0),
            a ? a._next = b : c || null  !== this._firstPT || (this._firstPT = b),
            b._next = d,
            b._prev = a),
            b
        }
        ,
        aK._kill = function(d) {
            var a, c, b, f = d;
            if (d.autoAlpha || d.alpha) {
                f = {};
                for (c in d) {
                    f[c] = d[c]
                }
                f.opacity = 1,
                f.autoAlpha && (f.visibility = 1)
            }
            return d.className && (a = this._classNamePT) && (b = a.xfirst,
            b && b._prev ? this._linkCSSP(b._prev, a._next, b._prev._prev) : b === this._firstPT && (this._firstPT = a._next),
            a._next && this._linkCSSP(a._next, a._next._next, b._prev),
            this._classNamePT = null ),
            av.prototype._kill.call(this, f)
        }
        ;
        var bx = function(d, h, c) {
            var g, f, j, b;
            if (d.slice) {
                for (f = d.length; --f > -1; ) {
                    bx(d[f], h, c)
                }
            } else {
                for (g = d.childNodes,
                f = g.length; --f > -1; ) {
                    j = g[f],
                    b = j.type,
                    j.style && (h.push(bf(j)),
                    c && c.push(j)),
                    1 !== b && 9 !== b && 11 !== b || !j.childNodes.length || bx(j, h, c)
                }
            }
        }
        ;
        return aU.cascadeTo = function(w, j, b) {
            var x, e, q, d = aO.to(w, j, b), g = [d], k = [], v = [], m = [], c = aO._internals.reservedProps;
            for (w = d._targets || d.target,
            bx(w, k, m),
            d.render(j, !0),
            bx(w, v),
            d.render(0, !0),
            d._enabled(!0),
            x = m.length; --x > -1; ) {
                if (e = bg(m[x], k[x], v[x]),
                e.firstMPT) {
                    e = e.difs;
                    for (q in b) {
                        c[q] && (e[q] = b[q])
                    }
                    g.push(aO.to(m[x], j, e))
                }
            }
            return g
        }
        ,
        av.activate([aU]),
        aU
    }
    , !0)
}
),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(a) {
    var b = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[a]
    }
    ;
    "function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    module.exports = b())
}
("CSSPlugin");
/*!
 * VERSION: 1.15.0
 * DATE: 2014-12-03
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(aA, aP) {
    var aL = aA.GreenSockGlobals = aA.GreenSockGlobals || aA;
    if (!aL.TweenLite) {
        var aB, aC, aG, aT, aF, aI = function(a) {
            var d, b = a.split("."), c = aL;
            for (d = 0; b.length > d; d++) {
                c[b[d]] = c = c[b[d]] || {}
            }
            return c
        }
        , aM = aI("com.greensock"), aU = 1e-10, az = function(b) {
            var d, a = [], c = b.length;
            for (d = 0; d !== c; a.push(b[d++])) {}
            return a
        }
        , aH = function() {}
        , aO = function() {
            var a = Object.prototype.toString
              , b = a.call([]);
            return function(c) {
                return null  != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
            }
        }
        (), aR = {}, aE = function(c, d, f, b) {
            this.sc = aR[c] ? aR[c].sc : [],
            aR[c] = this,
            this.gsClass = null ,
            this.func = f;
            var e = [];
            this.check = function(k) {
                for (var j, i, a, l, n = d.length, g = n; --n > -1; ) {
                    (j = aR[d[n]] || new aE(d[n],[])).gsClass ? (e[n] = j.gsClass,
                    g--) : k && j.sc.push(this)
                }
                if (0 === g && f) {
                    for (i = ("com.greensock." + c).split("."),
                    a = i.pop(),
                    l = aI(i.join("."))[a] = this.gsClass = f.apply(f, e),
                    b && (aL[a] = l,
                    "function" == typeof define && define.amd ? define((aA.GreenSockAMDPath ? aA.GreenSockAMDPath + "/" : "") + c.split(".").pop(), [], function() {
                        return l
                    }
                    ) : c === aP && "undefined" != typeof module && module.exports && (module.exports = l)),
                    n = 0; this.sc.length > n; n++) {
                        this.sc[n].check()
                    }
                }
            }
            ,
            this.check(!0)
        }
        , aQ = aA._gsDefine = function(b, d, a, c) {
            return new aE(b,d,a,c)
        }
        , ay = aM._class = function(b, c, a) {
            return c = c || function() {}
            ,
            aQ(b, [], function() {
                return c
            }
            , a),
            c
        }
        ;
        aQ.globals = aL;
        var aN = [0, 0, 1, 1]
          , Y = []
          , av = ay("easing.Ease", function(b, d, a, c) {
            this._func = b,
            this._type = a || 0,
            this._power = c || 0,
            this._params = d ? aN.concat(d) : aN
        }
        , !0)
          , ax = av.map = {}
          , ac = av.register = function(p, h, g, q) {
            for (var b, d, j, c, f = h.split(","), k = f.length, m = (g || "easeIn,easeOut,easeInOut").split(","); --k > -1; ) {
                for (d = f[k],
                b = q ? ay("easing." + d, null , !0) : aM.easing[d] || {},
                j = m.length; --j > -1; ) {
                    c = m[j],
                    ax[d + "." + c] = ax[c + d] = b[c] = p.getRatio ? p : p[c] || new p
                }
            }
        }
        ;
        for (aG = av.prototype,
        aG._calcEnd = !1,
        aG.getRatio = function(b) {
            if (this._func) {
                return this._params[0] = b,
                this._func.apply(null , this._params)
            }
            var d = this._type
              , a = this._power
              , c = 1 === d ? 1 - b : 2 === d ? b : 0.5 > b ? 2 * b : 2 * (1 - b);
            return 1 === a ? c *= c : 2 === a ? c *= c * c : 3 === a ? c *= c * c * c : 4 === a && (c *= c * c * c * c),
            1 === d ? 1 - c : 2 === d ? c : 0.5 > b ? c / 2 : 1 - c / 2
        }
        ,
        aB = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        aC = aB.length; --aC > -1; ) {
            aG = aB[aC] + ",Power" + aC,
            ac(new av(null ,null ,1,aC), aG, "easeOut", !0),
            ac(new av(null ,null ,2,aC), aG, "easeIn" + (0 === aC ? ",easeNone" : "")),
            ac(new av(null ,null ,3,aC), aG, "easeInOut")
        }
        ax.linear = aM.easing.Linear.easeIn,
        ax.swing = aM.easing.Quad.easeInOut;
        var aS = ay("events.EventDispatcher", function(a) {
            this._listeners = {},
            this._eventTarget = a || this
        }
        );
        aG = aS.prototype,
        aG.addEventListener = function(k, g, d, m, a) {
            a = a || 0;
            var b, c, f = this._listeners[k], j = 0;
            for (null  == f && (this._listeners[k] = f = []),
            c = f.length; --c > -1; ) {
                b = f[c],
                b.c === g && b.s === d ? f.splice(c, 1) : 0 === j && a > b.pr && (j = c + 1)
            }
            f.splice(j, 0, {
                c: g,
                s: d,
                up: m,
                pr: a
            }),
            this !== aT || aF || aT.wake()
        }
        ,
        aG.removeEventListener = function(b, d) {
            var a, c = this._listeners[b];
            if (c) {
                for (a = c.length; --a > -1; ) {
                    if (c[a].c === d) {
                        return c.splice(a, 1),
                        void 0
                    }
                }
            }
        }
        ,
        aG.dispatchEvent = function(b) {
            var f, a, c, d = this._listeners[b];
            if (d) {
                for (f = d.length,
                a = this._eventTarget; --f > -1; ) {
                    c = d[f],
                    c && (c.up ? c.c.call(c.s || a, {
                        type: b,
                        target: a
                    }) : c.c.call(c.s || a))
                }
            }
        }
        ;
        var aJ = aA.requestAnimationFrame
          , ar = aA.cancelAnimationFrame
          , Z = Date.now || function() {
            return (new Date).getTime()
        }
          , aw = Z();
        for (aB = ["ms", "moz", "webkit", "o"],
        aC = aB.length; --aC > -1 && !aJ; ) {
            aJ = aA[aB[aC] + "RequestAnimationFrame"],
            ar = aA[aB[aC] + "CancelAnimationFrame"] || aA[aB[aC] + "CancelRequestAnimationFrame"]
        }
        ay("Ticker", function(A, q) {
            var k, B, a, g, j, m = this, z = Z(), o = q !== !1 && aJ, x = 500, b = 33, w = "tick", y = function(d) {
                var f, c, h = Z() - aw;
                h > x && (z += h - b),
                aw += h,
                m.time = (aw - z) / 1000,
                f = m.time - j,
                (!k || f > 0 || d === !0) && (m.frame++,
                j += f + (f >= g ? 0.004 : g - f),
                c = !0),
                d !== !0 && (a = B(y)),
                c && m.dispatchEvent(w)
            }
            ;
            aS.call(m),
            m.time = m.frame = 0,
            m.tick = function() {
                y(!0)
            }
            ,
            m.lagSmoothing = function(c, d) {
                x = c || 1 / aU,
                b = Math.min(d, x, 0)
            }
            ,
            m.sleep = function() {
                null  != a && (o && ar ? ar(a) : clearTimeout(a),
                B = aH,
                a = null ,
                m === aT && (aF = !1))
            }
            ,
            m.wake = function() {
                null  !== a ? m.sleep() : m.frame > 10 && (aw = Z() - x + 5),
                B = 0 === k ? aH : o && aJ ? aJ : function(c) {
                    return setTimeout(c, 0 | 1000 * (j - m.time) + 1)
                }
                ,
                m === aT && (aF = !0),
                y(2)
            }
            ,
            m.fps = function(c) {
                return arguments.length ? (k = c,
                g = 1 / (k || 60),
                j = this.time + g,
                m.wake(),
                void 0) : k
            }
            ,
            m.useRAF = function(c) {
                return arguments.length ? (m.sleep(),
                o = c,
                m.fps(k),
                void 0) : o
            }
            ,
            m.fps(A),
            setTimeout(function() {
                o && (!a || 5 > m.frame) && m.useRAF(!1)
            }
            , 1500)
        }
        ),
        aG = aM.Ticker.prototype = new aM.events.EventDispatcher,
        aG.constructor = aM.Ticker;
        var aa = ay("core.Animation", function(b, c) {
            if (this.vars = c = c || {},
            this._duration = this._totalDuration = b || 0,
            this._delay = Number(c.delay) || 0,
            this._timeScale = 1,
            this._active = c.immediateRender === !0,
            this.data = c.data,
            this._reversed = c.reversed === !0,
            aq) {
                aF || aT.wake();
                var a = this.vars.useFrames ? aD : aq;
                a.add(this, a._time),
                this.vars.paused && this.paused(!0)
            }
        }
        );
        aT = aa.ticker = new aM.Ticker,
        aG = aa.prototype,
        aG._dirty = aG._gc = aG._initted = aG._paused = !1,
        aG._totalTime = aG._time = 0,
        aG._rawPrevTime = -1,
        aG._next = aG._last = aG._onUpdate = aG._timeline = aG.timeline = null ,
        aG._paused = !1;
        var ap = function() {
            aF && Z() - aw > 2000 && aT.wake(),
            setTimeout(ap, 2000)
        }
        ;
        ap(),
        aG.play = function(a, b) {
            return null  != a && this.seek(a, b),
            this.reversed(!1).paused(!1)
        }
        ,
        aG.pause = function(a, b) {
            return null  != a && this.seek(a, b),
            this.paused(!0)
        }
        ,
        aG.resume = function(a, b) {
            return null  != a && this.seek(a, b),
            this.paused(!1)
        }
        ,
        aG.seek = function(a, b) {
            return this.totalTime(Number(a), b !== !1)
        }
        ,
        aG.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
        }
        ,
        aG.reverse = function(a, b) {
            return null  != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
        }
        ,
        aG.render = function() {}
        ,
        aG.invalidate = function() {
            return this._time = this._totalTime = 0,
            this._initted = this._gc = !1,
            this._rawPrevTime = -1,
            (this._gc || !this.timeline) && this._enabled(!0),
            this
        }
        ,
        aG.isActive = function() {
            var b, c = this._timeline, a = this._startTime;
            return !c || !this._gc && !this._paused && c.isActive() && (b = c.rawTime()) >= a && a + this.totalDuration() / this._timeScale > b
        }
        ,
        aG._enabled = function(a, b) {
            return aF || aT.wake(),
            this._gc = !a,
            this._active = this.isActive(),
            b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        aG._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        aG.kill = function(a, b) {
            return this._kill(a, b),
            this
        }
        ,
        aG._uncache = function(a) {
            for (var b = a ? this : this.timeline; b; ) {
                b._dirty = !0,
                b = b.timeline
            }
            return this
        }
        ,
        aG._swapSelfInParams = function(b) {
            for (var c = b.length, a = b.concat(); --c > -1; ) {
                "{self}" === b[c] && (a[c] = this)
            }
            return a
        }
        ,
        aG.eventCallback = function(b, f, a, c) {
            if ("on" === (b || "").substr(0, 2)) {
                var d = this.vars;
                if (1 === arguments.length) {
                    return d[b]
                }
                null  == f ? delete d[b] : (d[b] = f,
                d[b + "Params"] = aO(a) && -1 !== a.join("").indexOf("{self}") ? this._swapSelfInParams(a) : a,
                d[b + "Scope"] = c),
                "onUpdate" === b && (this._onUpdate = f)
            }
            return this
        }
        ,
        aG.delay = function(a) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay),
            this._delay = a,
            this) : this._delay
        }
        ,
        aG.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        aG.totalDuration = function(a) {
            return this._dirty = !1,
            arguments.length ? this.duration(a) : this._totalDuration
        }
        ,
        aG.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
        }
        ,
        aG.totalTime = function(b, f, a) {
            if (aF || aT.wake(),
            !arguments.length) {
                return this._totalTime
            }
            if (this._timeline) {
                if (0 > b && !a && (b += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var c = this._totalDuration
                      , d = this._timeline;
                    if (b > c && !a && (b = c),
                    this._startTime = (this._paused ? this._pauseTime : d._time) - (this._reversed ? c - b : b) / this._timeScale,
                    d._dirty || this._uncache(!1),
                    d._timeline) {
                        for (; d._timeline; ) {
                            d._timeline._time !== (d._startTime + d._totalTime) / d._timeScale && d.totalTime(d._totalTime, !0),
                            d = d._timeline
                        }
                    }
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== b || 0 === this._duration) && (this.render(b, f, !1),
                au.length && af())
            }
            return this
        }
        ,
        aG.progress = aG.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        }
        ,
        aG.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)),
            this) : this._startTime
        }
        ,
        aG.endTime = function(a) {
            return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
        }
        ,
        aG.timeScale = function(b) {
            if (!arguments.length) {
                return this._timeScale
            }
            if (b = b || aU,
            this._timeline && this._timeline.smoothChildTiming) {
                var c = this._pauseTime
                  , a = c || 0 === c ? c : this._timeline.totalTime();
                this._startTime = a - (a - this._startTime) * this._timeScale / b
            }
            return this._timeScale = b,
            this._uncache(!1)
        }
        ,
        aG.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        aG.paused = function(b) {
            if (!arguments.length) {
                return this._paused
            }
            if (b != this._paused && this._timeline) {
                aF || b || aT.wake();
                var d = this._timeline
                  , a = d.rawTime()
                  , c = a - this._pauseTime;
                !b && d.smoothChildTiming && (this._startTime += c,
                this._uncache(!1)),
                this._pauseTime = b ? a : null ,
                this._paused = b,
                this._active = this.isActive(),
                !b && 0 !== c && this._initted && this.duration() && this.render(d.smoothChildTiming ? this._totalTime : (a - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !b && this._enabled(!0, !1),
            this
        }
        ;
        var ao = ay("core.SimpleTimeline", function(a) {
            aa.call(this, 0, a),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        }
        );
        aG = ao.prototype = new aa,
        aG.constructor = ao,
        aG.kill()._gc = !1,
        aG._first = aG._last = aG._recent = null ,
        aG._sortChildren = !1,
        aG.add = aG.insert = function(b, d) {
            var a, c;
            if (b._startTime = Number(d || 0) + b._delay,
            b._paused && this !== b._timeline && (b._pauseTime = b._startTime + (this.rawTime() - b._startTime) / b._timeScale),
            b.timeline && b.timeline._remove(b, !0),
            b.timeline = b._timeline = this,
            b._gc && b._enabled(!0, !0),
            a = this._last,
            this._sortChildren) {
                for (c = b._startTime; a && a._startTime > c; ) {
                    a = a._prev
                }
            }
            return a ? (b._next = a._next,
            a._next = b) : (b._next = this._first,
            this._first = b),
            b._next ? b._next._prev = b : this._last = b,
            b._prev = a,
            this._recent = b,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        aG._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0),
            a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next),
            a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev),
            a._next = a._prev = a.timeline = null ,
            a === this._recent && (this._recent = this._last),
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        aG.render = function(b, f, a) {
            var c, d = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = b; d; ) {
                c = d._next,
                (d._active || b >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (b - d._startTime) * d._timeScale, f, a) : d.render((b - d._startTime) * d._timeScale, f, a)),
                d = c
            }
        }
        ,
        aG.rawTime = function() {
            return aF || aT.wake(),
            this._totalTime
        }
        ;
        var aj = ay("TweenLite", function(h, d, f) {
            if (aa.call(this, d, f),
            this.render = aj.prototype.render,
            null  == h) {
                throw "Cannot tween a null target."
            }
            this.target = h = "string" != typeof h ? h : aj.selector(h) || h;
            var g, k, c, j = h.jquery || h.length && h !== aA && h[0] && (h[0] === aA || h[0].nodeType && h[0].style && !h.nodeType), b = this.vars.overwrite;
            if (this._overwrite = b = null  == b ? ab[aj.defaultOverwrite] : "number" == typeof b ? b >> 0 : ab[b],
            (j || h instanceof Array || h.push && aO(h)) && "number" != typeof h[0]) {
                for (this._targets = c = az(h),
                this._propLookup = [],
                this._siblings = [],
                g = 0; c.length > g; g++) {
                    k = c[g],
                    k ? "string" != typeof k ? k.length && k !== aA && k[0] && (k[0] === aA || k[0].nodeType && k[0].style && !k.nodeType) ? (c.splice(g--, 1),
                    this._targets = c = c.concat(az(k))) : (this._siblings[g] = at(k, this, !1),
                    1 === b && this._siblings[g].length > 1 && ak(k, this, null , 1, this._siblings[g])) : (k = c[g--] = aj.selector(k),
                    "string" == typeof k && c.splice(g + 1, 1)) : c.splice(g--, 1)
                }
            } else {
                this._propLookup = {},
                this._siblings = at(h, this, !1),
                1 === b && this._siblings.length > 1 && ak(h, this, null , 1, this._siblings)
            }
            (this.vars.immediateRender || 0 === d && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -aU,
            this.render(-this._delay))
        }
        , !0)
          , an = function(a) {
            return a && a.length && a !== aA && a[0] && (a[0] === aA || a[0].nodeType && a[0].style && !a.nodeType)
        }
          , ad = function(b, d) {
            var a, c = {};
            for (a in b) {
                al[a] || a in d && "transform" !== a && "x" !== a && "y" !== a && "width" !== a && "height" !== a && "className" !== a && "border" !== a || !(!X[a] || X[a] && X[a]._autoCSS) || (c[a] = b[a],
                delete b[a])
            }
            b.css = c
        }
        ;
        aG = aj.prototype = new aa,
        aG.constructor = aj,
        aG.kill()._gc = !1,
        aG.ratio = 0,
        aG._firstPT = aG._targets = aG._overwrittenProps = aG._startAt = null ,
        aG._notifyPluginsOfEnabled = aG._lazy = !1,
        aj.version = "1.15.0",
        aj.defaultEase = aG._ease = new av(null ,null ,1,1),
        aj.defaultOverwrite = "auto",
        aj.ticker = aT,
        aj.autoSleep = !0,
        aj.lagSmoothing = function(a, b) {
            aT.lagSmoothing(a, b)
        }
        ,
        aj.selector = aA.$ || aA.jQuery || function(b) {
            var a = aA.$ || aA.jQuery;
            return a ? (aj.selector = a,
            a(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
        }
        ;
        var au = []
          , ag = {}
          , ae = aj._internals = {
            isArray: aO,
            isSelector: an,
            lazyTweens: au
        }
          , X = aj._plugins = {}
          , am = ae.tweenLookup = {}
          , aK = 0
          , al = ae.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }
          , ab = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , aD = aa._rootFramesTimeline = new ao
          , aq = aa._rootTimeline = new ao
          , af = ae.lazyRender = function() {
            var a, b = au.length;
            for (ag = {}; --b > -1; ) {
                a = au[b],
                a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0),
                a._lazy = !1)
            }
            au.length = 0
        }
        ;
        aq._startTime = aT.time,
        aD._startTime = aT.frame,
        aq._active = aD._active = !0,
        setTimeout(af, 1),
        aa._updateRoot = aj.render = function() {
            var b, c, a;
            if (au.length && af(),
            aq.render((aT.time - aq._startTime) * aq._timeScale, !1, !1),
            aD.render((aT.frame - aD._startTime) * aD._timeScale, !1, !1),
            au.length && af(),
            !(aT.frame % 120)) {
                for (a in am) {
                    for (c = am[a].tweens,
                    b = c.length; --b > -1; ) {
                        c[b]._gc && c.splice(b, 1)
                    }
                    0 === c.length && delete am[a]
                }
                if (a = aq._first,
                (!a || a._paused) && aj.autoSleep && !aD._first && 1 === aT._listeners.tick.length) {
                    for (; a && a._paused; ) {
                        a = a._next
                    }
                    a || aT.sleep()
                }
            }
        }
        ,
        aT.addEventListener("tick", aa._updateRoot);
        var at = function(b, f, a) {
            var c, d, g = b._gsTweenID;
            if (am[g || (b._gsTweenID = g = "t" + aK++)] || (am[g] = {
                target: b,
                tweens: []
            }),
            f && (c = am[g].tweens,
            c[d = c.length] = f,
            a)) {
                for (; --d > -1; ) {
                    c[d] === f && c.splice(d, 1)
                }
            }
            return am[g].tweens
        }
          , ah = function(d, h, c, f) {
            var g, j, b = d.vars.onOverwrite;
            return b && (g = b(d, h, c, f)),
            b = aj.onOverwrite,
            b && (j = b(d, h, c, f)),
            g !== !1 && j !== !1
        }
          , ak = function(A, w, p, B, b) {
            var g, y, d, k;
            if (1 === B || B >= 4) {
                for (k = b.length,
                g = 0; k > g; g++) {
                    if ((d = b[g]) !== w) {
                        d._gc || ah(d, w) && d._enabled(!1, !1) && (y = !0)
                    } else {
                        if (5 === B) {
                            break
                        }
                    }
                }
                return y
            }
            var q, z = w._startTime + aU, j = [], v = 0, x = 0 === w._duration;
            for (g = b.length; --g > -1; ) {
                (d = b[g]) === w || d._gc || d._paused || (d._timeline !== w._timeline ? (q = q || ai(w, 0, x),
                0 === ai(d, q, x) && (j[v++] = d)) : z >= d._startTime && d._startTime + d.totalDuration() / d._timeScale > z && ((x || !d._initted) && 2e-10 >= z - d._startTime || (j[v++] = d)))
            }
            for (g = v; --g > -1; ) {
                if (d = j[g],
                2 === B && d._kill(p, A, w) && (y = !0),
                2 !== B || !d._firstPT && d._initted) {
                    if (2 !== B && !ah(d, w)) {
                        continue
                    }
                    d._enabled(!1, !1) && (y = !0)
                }
            }
            return y
        }
          , ai = function(b, f, a) {
            for (var c = b._timeline, d = c._timeScale, g = b._startTime; c._timeline; ) {
                if (g += c._startTime,
                d *= c._timeScale,
                c._paused) {
                    return -100
                }
                c = c._timeline
            }
            return g /= d,
            g > f ? g - f : a && g === f || !b._initted && 2 * aU > g - f ? aU : (g += b.totalDuration() / b._timeScale / d) > f + aU ? 0 : g - f - aU
        }
        ;
        aG._init = function() {
            var p, k, g, q, b, d = this.vars, m = this._overwrittenProps, c = this._duration, f = !!d.immediateRender, j = d.ease;
            if (d.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                b = {};
                for (q in d.startAt) {
                    b[q] = d.startAt[q]
                }
                if (b.overwrite = !1,
                b.immediateRender = !0,
                b.lazy = f && d.lazy !== !1,
                b.startAt = b.delay = null ,
                this._startAt = aj.to(this.target, 0, b),
                f) {
                    if (this._time > 0) {
                        this._startAt = null 
                    } else {
                        if (0 !== c) {
                            return
                        }
                    }
                }
            } else {
                if (d.runBackwards && 0 !== c) {
                    if (this._startAt) {
                        this._startAt.render(-1, !0),
                        this._startAt.kill(),
                        this._startAt = null 
                    } else {
                        0 !== this._time && (f = !1),
                        g = {};
                        for (q in d) {
                            al[q] && "autoCSS" !== q || (g[q] = d[q])
                        }
                        if (g.overwrite = 0,
                        g.data = "isFromStart",
                        g.lazy = f && d.lazy !== !1,
                        g.immediateRender = f,
                        this._startAt = aj.to(this.target, 0, g),
                        f) {
                            if (0 === this._time) {
                                return
                            }
                        } else {
                            this._startAt._init(),
                            this._startAt._enabled(!1),
                            this.vars.immediateRender && (this._startAt = null )
                        }
                    }
                }
            }
            if (this._ease = j = j ? j instanceof av ? j : "function" == typeof j ? new av(j,d.easeParams) : ax[j] || aj.defaultEase : aj.defaultEase,
            d.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, d.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null ,
            this._targets) {
                for (p = this._targets.length; --p > -1; ) {
                    this._initProps(this._targets[p], this._propLookup[p] = {}, this._siblings[p], m ? m[p] : null ) && (k = !0)
                }
            } else {
                k = this._initProps(this.target, this._propLookup, this._siblings, m)
            }
            if (k && aj._onPluginEvent("_onInitAllProps", this),
            m && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            d.runBackwards) {
                for (g = this._firstPT; g; ) {
                    g.s += g.c,
                    g.c = -g.c,
                    g = g._next
                }
            }
            this._onUpdate = d.onUpdate,
            this._initted = !0
        }
        ,
        aG._initProps = function(k, g, q, b) {
            var d, m, c, f, j, p;
            if (null  == k) {
                return !1
            }
            ag[k._gsTweenID] && af(),
            this.vars.css || k.style && k !== aA && k.nodeType && X.css && this.vars.autoCSS !== !1 && ad(this.vars, k);
            for (d in this.vars) {
                if (p = this.vars[d],
                al[d]) {
                    p && (p instanceof Array || p.push && aO(p)) && -1 !== p.join("").indexOf("{self}") && (this.vars[d] = p = this._swapSelfInParams(p, this))
                } else {
                    if (X[d] && (f = new X[d])._onInitTween(k, this.vars[d], this)) {
                        for (this._firstPT = j = {
                            _next: this._firstPT,
                            t: f,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: d,
                            pg: !0,
                            pr: f._priority
                        },
                        m = f._overwriteProps.length; --m > -1; ) {
                            g[f._overwriteProps[m]] = this._firstPT
                        }
                        (f._priority || f._onInitAllProps) && (c = !0),
                        (f._onDisable || f._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else {
                        this._firstPT = g[d] = j = {
                            _next: this._firstPT,
                            t: k,
                            p: d,
                            f: "function" == typeof k[d],
                            n: d,
                            pg: !1,
                            pr: 0
                        },
                        j.s = j.f ? k[d.indexOf("set") || "function" != typeof k["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(k[d]),
                        j.c = "string" == typeof p && "=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * Number(p.substr(2)) : Number(p) - j.s || 0
                    }
                }
                j && j._next && (j._next._prev = j)
            }
            return b && this._kill(b, k) ? this._initProps(k, g, q, b) : this._overwrite > 1 && this._firstPT && q.length > 1 && ak(k, this, g, this._overwrite, q) ? (this._kill(g, k),
            this._initProps(k, g, q, b)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (ag[k._gsTweenID] = !0),
            c)
        }
        ,
        aG.render = function(y, v, k) {
            var z, b, d, w, c = this._time, j = this._duration, p = this._rawPrevTime;
            if (y >= j) {
                this._totalTime = this._time = j,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (z = !0,
                b = "onComplete"),
                0 === j && (this._initted || !this.vars.lazy || k) && (this._startTime === this._timeline._duration && (y = 0),
                (0 === y || 0 > p || p === aU && "isPause" !== this.data) && p !== y && (k = !0,
                p > aU && (b = "onReverseComplete")),
                this._rawPrevTime = w = !v || y || p === y ? y : aU)
            } else {
                if (1e-7 > y) {
                    this._totalTime = this._time = 0,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                    (0 !== c || 0 === j && p > 0 && p !== aU) && (b = "onReverseComplete",
                    z = this._reversed),
                    0 > y && (this._active = !1,
                    0 === j && (this._initted || !this.vars.lazy || k) && (p >= 0 && (p !== aU || "isPause" !== this.data) && (k = !0),
                    this._rawPrevTime = w = !v || y || p === y ? y : aU)),
                    this._initted || (k = !0)
                } else {
                    if (this._totalTime = this._time = y,
                    this._easeType) {
                        var x = y / j
                          , g = this._easeType
                          , q = this._easePower;
                        (1 === g || 3 === g && x >= 0.5) && (x = 1 - x),
                        3 === g && (x *= 2),
                        1 === q ? x *= x : 2 === q ? x *= x * x : 3 === q ? x *= x * x * x : 4 === q && (x *= x * x * x * x),
                        this.ratio = 1 === g ? 1 - x : 2 === g ? x : 0.5 > y / j ? x / 2 : 1 - x / 2
                    } else {
                        this.ratio = this._ease.getRatio(y / j)
                    }
                }
            }
            if (this._time !== c || k) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc) {
                        return
                    }
                    if (!k && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) {
                        return this._time = this._totalTime = c,
                        this._rawPrevTime = p,
                        au.push(this),
                        this._lazy = [y, v],
                        void 0
                    }
                    this._time && !z ? this.ratio = this._ease.getRatio(this._time / j) : z && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== c && y >= 0 && (this._active = !0),
                0 === c && (this._startAt && (y >= 0 ? this._startAt.render(y, v, k) : b || (b = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === j) && (v || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || Y))),
                d = this._firstPT; d; ) {
                    d.f ? d.t[d.p](d.c * this.ratio + d.s) : d.t[d.p] = d.c * this.ratio + d.s,
                    d = d._next
                }
                this._onUpdate && (0 > y && this._startAt && y !== -0.0001 && this._startAt.render(y, v, k),
                v || (this._time !== c || z) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || Y)),
                b && (!this._gc || k) && (0 > y && this._startAt && !this._onUpdate && y !== -0.0001 && this._startAt.render(y, v, k),
                z && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !v && this.vars[b] && this.vars[b].apply(this.vars[b + "Scope"] || this, this.vars[b + "Params"] || Y),
                0 === j && this._rawPrevTime === aU && w !== aU && (this._rawPrevTime = 0))
            }
        }
        ,
        aG._kill = function(v, k, g) {
            if ("all" === v && (v = null ),
            null  == v && (null  == k || k === this.target)) {
                return this._lazy = !1,
                this._enabled(!1, !1)
            }
            k = "string" != typeof k ? k || this._targets || this.target : aj.selector(k) || k;
            var w, b, d, m, c, f, j, p, q;
            if ((aO(k) || an(k)) && "number" != typeof k[0]) {
                for (w = k.length; --w > -1; ) {
                    this._kill(v, k[w]) && (f = !0)
                }
            } else {
                if (this._targets) {
                    for (w = this._targets.length; --w > -1; ) {
                        if (k === this._targets[w]) {
                            c = this._propLookup[w] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            b = this._overwrittenProps[w] = v ? this._overwrittenProps[w] || {} : "all";
                            break
                        }
                    }
                } else {
                    if (k !== this.target) {
                        return !1
                    }
                    c = this._propLookup,
                    b = this._overwrittenProps = v ? this._overwrittenProps || {} : "all"
                }
                if (c) {
                    if (j = v || c,
                    p = v !== b && "all" !== b && v !== c && ("object" != typeof v || !v._tempKill),
                    g && (aj.onOverwrite || this.vars.onOverwrite)) {
                        for (d in j) {
                            c[d] && (q || (q = []),
                            q.push(d))
                        }
                        if (!ah(this, g, k, q)) {
                            return !1
                        }
                    }
                    for (d in j) {
                        (m = c[d]) && (m.pg && m.t._kill(j) && (f = !0),
                        m.pg && 0 !== m.t._overwriteProps.length || (m._prev ? m._prev._next = m._next : m === this._firstPT && (this._firstPT = m._next),
                        m._next && (m._next._prev = m._prev),
                        m._next = m._prev = null ),
                        delete c[d]),
                        p && (b[d] = 1)
                    }
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return f
        }
        ,
        aG.invalidate = function() {
            return this._notifyPluginsOfEnabled && aj._onPluginEvent("_onDisable", this),
            this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null ,
            this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            aa.prototype.invalidate.call(this),
            this.vars.immediateRender && (this._time = -aU,
            this.render(-this._delay)),
            this
        }
        ,
        aG._enabled = function(b, d) {
            if (aF || aT.wake(),
            b && this._gc) {
                var a, c = this._targets;
                if (c) {
                    for (a = c.length; --a > -1; ) {
                        this._siblings[a] = at(c[a], this, !0)
                    }
                } else {
                    this._siblings = at(this.target, this, !0)
                }
            }
            return aa.prototype._enabled.call(this, b, d),
            this._notifyPluginsOfEnabled && this._firstPT ? aj._onPluginEvent(b ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        aj.to = function(b, c, a) {
            return new aj(b,c,a)
        }
        ,
        aj.from = function(b, c, a) {
            return a.runBackwards = !0,
            a.immediateRender = 0 != a.immediateRender,
            new aj(b,c,a)
        }
        ,
        aj.fromTo = function(b, d, a, c) {
            return c.startAt = a,
            c.immediateRender = 0 != c.immediateRender && 0 != a.immediateRender,
            new aj(b,d,c)
        }
        ,
        aj.delayedCall = function(b, f, a, c, d) {
            return new aj(f,0,{
                delay: b,
                onComplete: f,
                onCompleteParams: a,
                onCompleteScope: c,
                onReverseComplete: f,
                onReverseCompleteParams: a,
                onReverseCompleteScope: c,
                immediateRender: !1,
                lazy: !1,
                useFrames: d,
                overwrite: 0
            })
        }
        ,
        aj.set = function(a, b) {
            return new aj(a,0,b)
        }
        ,
        aj.getTweensOf = function(b, f) {
            if (null  == b) {
                return []
            }
            b = "string" != typeof b ? b : aj.selector(b) || b;
            var a, c, d, g;
            if ((aO(b) || an(b)) && "number" != typeof b[0]) {
                for (a = b.length,
                c = []; --a > -1; ) {
                    c = c.concat(aj.getTweensOf(b[a], f))
                }
                for (a = c.length; --a > -1; ) {
                    for (g = c[a],
                    d = a; --d > -1; ) {
                        g === c[d] && c.splice(a, 1)
                    }
                }
            } else {
                for (c = at(b).concat(),
                a = c.length; --a > -1; ) {
                    (c[a]._gc || f && !c[a].isActive()) && c.splice(a, 1)
                }
            }
            return c
        }
        ,
        aj.killTweensOf = aj.killDelayedCallsTo = function(b, f, a) {
            "object" == typeof f && (a = f,
            f = !1);
            for (var c = aj.getTweensOf(b, f), d = c.length; --d > -1; ) {
                c[d]._kill(a, b)
            }
        }
        ;
        var W = ay("plugins.TweenPlugin", function(a, b) {
            this._overwriteProps = (a || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = b || 0,
            this._super = W.prototype
        }
        , !0);
        if (aG = W.prototype,
        W.version = "1.10.1",
        W.API = 2,
        aG._firstPT = null ,
        aG._addTween = function(d, h, c, f, g, k) {
            var b, j;
            return null  != f && (b = "number" == typeof f || "=" !== f.charAt(1) ? Number(f) - c : parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))) ? (this._firstPT = j = {
                _next: this._firstPT,
                t: d,
                p: h,
                s: c,
                c: b,
                f: "function" == typeof d[h],
                n: g || h,
                r: k
            },
            j._next && (j._next._prev = j),
            j) : void 0
        }
        ,
        aG.setRatio = function(b) {
            for (var d, a = this._firstPT, c = 0.000001; a; ) {
                d = a.c * b + a.s,
                a.r ? d = Math.round(d) : c > d && d > -c && (d = 0),
                a.f ? a.t[a.p](d) : a.t[a.p] = d,
                a = a._next
            }
        }
        ,
        aG._kill = function(b) {
            var d, a = this._overwriteProps, c = this._firstPT;
            if (null  != b[this._propName]) {
                this._overwriteProps = []
            } else {
                for (d = a.length; --d > -1; ) {
                    null  != b[a[d]] && a.splice(d, 1)
                }
            }
            for (; c; ) {
                null  != b[c.n] && (c._next && (c._next._prev = c._prev),
                c._prev ? (c._prev._next = c._next,
                c._prev = null ) : this._firstPT === c && (this._firstPT = c._next)),
                c = c._next
            }
            return !1
        }
        ,
        aG._roundProps = function(b, c) {
            for (var a = this._firstPT; a; ) {
                (b[this._propName] || null  != a.n && b[a.n.split(this._propName + "_").join("")]) && (a.r = c),
                a = a._next
            }
        }
        ,
        aj._onPluginEvent = function(d, h) {
            var c, f, g, k, b, j = h._firstPT;
            if ("_onInitAllProps" === d) {
                for (; j; ) {
                    for (b = j._next,
                    f = g; f && f.pr > j.pr; ) {
                        f = f._next
                    }
                    (j._prev = f ? f._prev : k) ? j._prev._next = j : g = j,
                    (j._next = f) ? f._prev = j : k = j,
                    j = b
                }
                j = h._firstPT = g
            }
            for (; j; ) {
                j.pg && "function" == typeof j.t[d] && j.t[d]() && (c = !0),
                j = j._next
            }
            return c
        }
        ,
        W.activate = function(a) {
            for (var b = a.length; --b > -1; ) {
                a[b].API === W.API && (X[(new a[b])._propName] = a[b])
            }
            return !0
        }
        ,
        aQ.plugin = function(d) {
            if (!(d && d.propName && d.init && d.API)) {
                throw "illegal plugin definition."
            }
            var h, c = d.propName, f = d.priority || 0, g = d.overwriteProps, k = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, b = ay("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                W.call(this, c, f),
                this._overwriteProps = g || []
            }
            , d.global === !0), j = b.prototype = new W(c);
            j.constructor = b,
            b.API = d.API;
            for (h in k) {
                "function" == typeof d[h] && (j[k[h]] = d[h])
            }
            return b.version = d.version,
            W.activate([b]),
            b
        }
        ,
        aB = aA._gsQueue) {
            for (aC = 0; aB.length > aC; aC++) {
                aB[aC]()
            }
            for (aG in aR) {
                aR[aG].func || aA.console.log("GSAP encountered missing dependency: com.greensock." + aG)
            }
        }
        aF = !1
    }
}
)("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
window.Modernizr = (function(n, s, i) {
    var e = "2.7.1", l = {}, C = s.documentElement, D = "modernizr", A = s.createElement(D), o = A.style, f, v = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), c = "Webkit Moz O ms", F = c.split(" "), p = c.toLowerCase().split(" "), j = {}, d = {}, t = {}, z = [], u = z.slice, b, y = function(P, R, J, Q) {
        var I, O, L, M, H = s.createElement("div"), N = s.body, K = N || s.createElement("body");
        if (parseInt(J, 10)) {
            while (J--) {
                L = s.createElement("div");
                L.id = Q ? Q[J] : D + (J + 1);
                H.appendChild(L)
            }
        }
        I = ["&#173;", '<style id="s', D, '">', P, "</style>"].join("");
        H.id = D;
        (N ? H : K).innerHTML += I;
        K.appendChild(H);
        if (!N) {
            K.style.background = "";
            K.style.overflow = "hidden";
            M = C.style.overflow;
            C.style.overflow = "hidden";
            C.appendChild(K)
        }
        O = R(H, P);
        if (!N) {
            K.parentNode.removeChild(K);
            C.style.overflow = M
        } else {
            H.parentNode.removeChild(H)
        }
        return !!O
    }
    , r = ({}).hasOwnProperty, B;
    if (!k(r, "undefined") && !k(r.call, "undefined")) {
        B = function(H, I) {
            return r.call(H, I)
        }
    } else {
        B = function(H, I) {
            return ( (I in H) && k(H.constructor.prototype[I], "undefined")) 
        }
    }
    if (!Function.prototype.bind) {
        Function.prototype.bind = function G(J) {
            var K = this;
            if (typeof K != "function") {
                throw new TypeError()
            }
            var H = u.call(arguments, 1)
              , I = function() {
                if (this instanceof I) {
                    var N = function() {}
                    ;
                    N.prototype = K.prototype;
                    var M = new N();
                    var L = K.apply(M, H.concat(u.call(arguments)));
                    if (Object(L) === L) {
                        return L
                    }
                    return M
                } else {
                    return K.apply(J, H.concat(u.call(arguments)))
                }
            }
            ;
            return I
        }
    }
    function q(H) {
        o.cssText = H
    }
    function h(I, H) {
        return q(x.join(I + ";") + (H || ""))
    }
    function k(I, H) {
        return typeof I === H
    }
    function m(I, H) {
        return !!~("" + I).indexOf(H)
    }
    function E(J, H) {
        for (var I in J) {
            var K = J[I];
            if (!m(K, "-") && o[K] !== i) {
                return H == "pfx" ? K : true
            }
        }
        return false
    }
    function w(I, L, K) {
        for (var H in I) {
            var J = L[I[H]];
            if (J !== i) {
                if (K === false) {
                    return I[H]
                }
                if (k(J, "function")) {
                    return J.bind(K || L)
                }
                return J
            }
        }
        return false
    }
    function a(L, H, K) {
        var I = L.charAt(0).toUpperCase() + L.slice(1)
          , J = (L + " " + F.join(I + " ") + I).split(" ");
        if (k(H, "string") || k(H, "undefined")) {
            return E(J, H)
        } else {
            J = (L + " " + (p).join(I + " ") + I).split(" ");
            return w(J, H, K)
        }
    }
    j.canvas = function() {
        var H = s.createElement("canvas");
        return !!(H.getContext && H.getContext("2d"))
    }
    ;
    j.canvastext = function() {
        return !!(l.canvas && k(s.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ;
    j.csstransforms3d = function() {
        var H = !!a("perspective");
        if (H && "webkitPerspective" in C.style) {
            y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(I, J) {
                H = I.offsetLeft === 9 && I.offsetHeight === 3
            }
            )
        }
        return H
    }
    ;
    j.csstransitions = function() {
        return a("transition")
    }
    ;
    for (var g in j) {
        if (B(j, g)) {
            b = g.toLowerCase();
            l[b] = j[g]();
            z.push((l[b] ? "" : "no-") + b)
        }
    }
    l.addTest = function(I, J) {
        if (typeof I == "object") {
            for (var H in I) {
                if (B(I, H)) {
                    l.addTest(H, I[H])
                }
            }
        } else {
            I = I.toLowerCase();
            if (l[I] !== i) {
                return l
            }
            J = typeof J == "function" ? J() : J;
            if (typeof enableClasses !== "undefined" && enableClasses) {
                C.className += " " + (J ? "" : "no-") + I
            }
            l[I] = J
        }
        return l
    }
    ;
    q("");
    A = f = null ;
    l._version = e;
    l._prefixes = x;
    l._domPrefixes = p;
    l._cssomPrefixes = F;
    l.testProp = function(H) {
        return E([H])
    }
    ;
    l.testAllProps = a;
    l.testStyles = y;
    l.prefixed = function(J, I, H) {
        if (!I) {
            return a(J, "pfx")
        } else {
            return a(J, I, H)
        }
    }
    ;
    return l
}
)(this, this.document);
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2014
 */
!function(a, b) {
    if (typeof module != "undefined" && module.exports) {
        module.exports.browser = b()
    } else {
        if (typeof define == "function") {
            define(b)
        } else {
            this[a] = b()
        }
    }
}
("bowser", function() {
    var b = true;
    function a(e) {
        function i(p) {
            var o = e.match(p);
            return (o && o.length > 1 && o[1]) || ""
        }
        var m = i(/(ipod|iphone|ipad)/i).toLowerCase(), l = /like android/i.test(e), g = !l && /android/i.test(e), d = i(/version\/(\d+(\.\d+)?)/i), k = /tablet/i.test(e), f = !k && /[^-]mobi/i.test(e), n;
        if (/opera|opr/i.test(e)) {
            n = {
                name: "Opera",
                opera: b,
                version: d || i(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
            }
        } else {
            if (/windows phone/i.test(e)) {
                n = {
                    name: "Windows Phone",
                    windowsphone: b,
                    msie: b,
                    version: i(/iemobile\/(\d+(\.\d+)?)/i)
                }
            } else {
                if (/msie|trident/i.test(e)) {
                    n = {
                        name: "Internet Explorer",
                        msie: b,
                        version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                    }
                } else {
                    if (/chrome|crios|crmo/i.test(e)) {
                        n = {
                            name: "Chrome",
                            chrome: b,
                            version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                        }
                    } else {
                        if (m) {
                            n = {
                                name: m == "iphone" ? "iPhone" : m == "ipad" ? "iPad" : "iPod"
                            };
                            if (d) {
                                n.version = d
                            }
                        } else {
                            if (/sailfish/i.test(e)) {
                                n = {
                                    name: "Sailfish",
                                    sailfish: b,
                                    version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                                }
                            } else {
                                if (/seamonkey\//i.test(e)) {
                                    n = {
                                        name: "SeaMonkey",
                                        seamonkey: b,
                                        version: i(/seamonkey\/(\d+(\.\d+)?)/i)
                                    }
                                } else {
                                    if (/firefox|iceweasel/i.test(e)) {
                                        n = {
                                            name: "Firefox",
                                            firefox: b,
                                            version: i(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                                        };
                                        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)) {
                                            n.firefoxos = b
                                        }
                                    } else {
                                        if (/silk/i.test(e)) {
                                            n = {
                                                name: "Amazon Silk",
                                                silk: b,
                                                version: i(/silk\/(\d+(\.\d+)?)/i)
                                            }
                                        } else {
                                            if (g) {
                                                n = {
                                                    name: "Android",
                                                    version: d
                                                }
                                            } else {
                                                if (/phantom/i.test(e)) {
                                                    n = {
                                                        name: "PhantomJS",
                                                        phantom: b,
                                                        version: i(/phantomjs\/(\d+(\.\d+)?)/i)
                                                    }
                                                } else {
                                                    if (/blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e)) {
                                                        n = {
                                                            name: "BlackBerry",
                                                            blackberry: b,
                                                            version: d || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                                                        }
                                                    } else {
                                                        if (/(web|hpw)os/i.test(e)) {
                                                            n = {
                                                                name: "WebOS",
                                                                webos: b,
                                                                version: d || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                                                            };
                                                            /touchpad\//i.test(e) && (n.touchpad = b)
                                                        } else {
                                                            if (/bada/i.test(e)) {
                                                                n = {
                                                                    name: "Bada",
                                                                    bada: b,
                                                                    version: i(/dolfin\/(\d+(\.\d+)?)/i)
                                                                }
                                                            } else {
                                                                if (/tizen/i.test(e)) {
                                                                    n = {
                                                                        name: "Tizen",
                                                                        tizen: b,
                                                                        version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || d
                                                                    }
                                                                } else {
                                                                    if (/safari/i.test(e)) {
                                                                        n = {
                                                                            name: "Safari",
                                                                            safari: b,
                                                                            version: d
                                                                        }
                                                                    } else {
                                                                        n = {}
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (/(apple)?webkit/i.test(e)) {
            n.name = n.name || "Webkit";
            n.webkit = b;
            if (!n.version && d) {
                n.version = d
            }
        } else {
            if (!n.opera && /gecko\//i.test(e)) {
                n.name = n.name || "Gecko";
                n.gecko = b;
                n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)
            }
        }
        if (g || n.silk) {
            n.android = b
        } else {
            if (m) {
                n[m] = b;
                n.ios = b
            }
        }
        var h = "";
        if (m) {
            h = i(/os (\d+([_\s]\d+)*) like mac os x/i);
            h = h.replace(/[_\s]/g, ".")
        } else {
            if (g) {
                h = i(/android[ \/-](\d+(\.\d+)*)/i)
            } else {
                if (n.windowsphone) {
                    h = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)
                } else {
                    if (n.webos) {
                        h = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)
                    } else {
                        if (n.blackberry) {
                            h = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i)
                        } else {
                            if (n.bada) {
                                h = i(/bada\/(\d+(\.\d+)*)/i)
                            } else {
                                if (n.tizen) {
                                    h = i(/tizen[\/\s](\d+(\.\d+)*)/i)
                                }
                            }
                        }
                    }
                }
            }
        }
        if (h) {
            n.osversion = h
        }
        var j = h.split(".")[0];
        if (k || m == "ipad" || (g && (j == 3 || (j == 4 && !f))) || n.silk) {
            n.tablet = b
        } else {
            if (f || m == "iphone" || m == "ipod" || g || n.blackberry || n.webos || n.bada) {
                n.mobile = b
            }
        }
        if ((n.msie && n.version >= 10) || (n.chrome && n.version >= 20) || (n.firefox && n.version >= 20) || (n.safari && n.version >= 6) || (n.opera && n.version >= 10) || (n.ios && n.osversion && n.osversion.split(".")[0] >= 6)) {
            n.a = b
        } else {
            if ((n.msie && n.version < 10) || (n.chrome && n.version < 20) || (n.firefox && n.version < 20) || (n.safari && n.version < 6) || (n.opera && n.version < 10) || (n.ios && n.osversion && n.osversion.split(".")[0] < 6)) {
                n.c = b
            } else {
                n.x = b
            }
        }
        return n
    }
    var c = a(typeof navigator !== "undefined" ? navigator.userAgent : "");
    c._detect = a;
    return c
}
);
function PerspectiveTransform(c, d, a, b) {
    this.element = c;
    this.style = c.style;
    this.computedStyle = window.getComputedStyle(c);
    this.width = d;
    this.height = a;
    this.useBackFacing = !!b;
    this.topLeft = {
        x: 0,
        y: 0
    };
    this.topRight = {
        x: d,
        y: 0
    };
    this.bottomLeft = {
        x: 0,
        y: a
    };
    this.bottomRight = {
        x: d,
        y: a
    }
}
PerspectiveTransform.useDPRFix = false;
PerspectiveTransform.dpr = 1;
PerspectiveTransform.prototype = (function() {
    var b = {
        stylePrefix: ""
    };
    var d;
    var i;
    var a;
    var k = [[0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0]];
    var g = [0, 0, 0, 0, 0, 0, 0, 0];
    function l() {
        var m = document.createElement("div").style;
        b.stylePrefix = "webkitTransform" in m ? "webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "";
        d = b.stylePrefix + (b.stylePrefix.length > 0 ? "Transform" : "transform");
        a = "-" + b.stylePrefix.toLowerCase() + "-transform-origin"
    }
    function f() {
        var n = this.topLeft.x - this.topRight.x;
        var m = this.topLeft.y - this.topRight.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        n = this.bottomLeft.x - this.bottomRight.x;
        m = this.bottomLeft.y - this.bottomRight.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        n = this.topLeft.x - this.bottomLeft.x;
        m = this.topLeft.y - this.bottomLeft.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        n = this.topRight.x - this.bottomRight.x;
        m = this.topRight.y - this.bottomRight.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        n = this.topLeft.x - this.bottomRight.x;
        m = this.topLeft.y - this.bottomRight.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        n = this.topRight.x - this.bottomLeft.x;
        m = this.topRight.y - this.bottomLeft.y;
        if (Math.sqrt(n * n + m * m) <= 1) {
            return true
        }
        return false
    }
    function h(o, n, m) {
        return o.x * n.y + n.x * m.y + m.x * o.y - o.y * n.x - n.y * m.x - m.y * o.x
    }
    function j() {
        var n = h(this.topLeft, this.topRight, this.bottomRight);
        var m = h(this.bottomRight, this.bottomLeft, this.topLeft);
        if (this.useBackFacing) {
            if (n * m <= 0) {
                return true
            }
        } else {
            if (n <= 0 || m <= 0) {
                return true
            }
        }
        var n = h(this.topRight, this.bottomRight, this.bottomLeft);
        var m = h(this.bottomLeft, this.topLeft, this.topRight);
        if (this.useBackFacing) {
            if (n * m <= 0) {
                return true
            }
        } else {
            if (n <= 0 || m <= 0) {
                return true
            }
        }
        return false
    }
    function e() {
        if (f.apply(this)) {
            return 1
        }
        if (j.apply(this)) {
            return 2
        }
        return 0
    }
    function c() {
        var v = this.width;
        var t = this.height;
        var C = 0;
        var B = 0;
        var r = this.computedStyle.getPropertyValue(a);
        if (r.indexOf("px") > -1) {
            r = r.split("px");
            C = -parseFloat(r[0]);
            B = -parseFloat(r[1])
        } else {
            if (r.indexOf("%") > -1) {
                r = r.split("%");
                C = -parseFloat(r[0]) * v / 100;
                B = -parseFloat(r[1]) * t / 100
            }
        }
        var E = [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight];
        var n = [0, 1, 2, 3, 4, 5, 6, 7];
        for (var z = 0; z < 4; z++) {
            k[z][0] = k[z + 4][3] = z & 1 ? v + C : C;
            k[z][1] = k[z + 4][4] = (z > 1 ? t + B : B);
            k[z][6] = (z & 1 ? -C - v : -C) * (E[z].x + C);
            k[z][7] = (z > 1 ? -B - t : -B) * (E[z].x + C);
            k[z + 4][6] = (z & 1 ? -C - v : -C) * (E[z].y + B);
            k[z + 4][7] = (z > 1 ? -B - t : -B) * (E[z].y + B);
            g[z] = (E[z].x + C);
            g[z + 4] = (E[z].y + B);
            k[z][2] = k[z + 4][5] = 1;
            k[z][3] = k[z][4] = k[z][5] = k[z + 4][0] = k[z + 4][1] = k[z + 4][2] = 0
        }
        var w, o;
        var s;
        var q = [];
        var z, y, x, D;
        for (var y = 0; y < 8; y++) {
            for (var z = 0; z < 8; z++) {
                q[z] = k[z][y]
            }
            for (z = 0; z < 8; z++) {
                s = k[z];
                w = z < y ? z : y;
                o = 0;
                for (var x = 0; x < w; x++) {
                    o += s[x] * q[x]
                }
                s[y] = q[z] -= o
            }
            var u = y;
            for (z = y + 1; z < 8; z++) {
                if (Math.abs(q[z]) > Math.abs(q[u])) {
                    u = z
                }
            }
            if (u != y) {
                for (x = 0; x < 8; x++) {
                    D = k[u][x];
                    k[u][x] = k[y][x];
                    k[y][x] = D
                }
                D = n[u];
                n[u] = n[y];
                n[y] = D
            }
            if (k[y][y] != 0) {
                for (z = y + 1; z < 8; z++) {
                    k[z][y] /= k[y][y]
                }
            }
        }
        for (z = 0; z < 8; z++) {
            n[z] = g[n[z]]
        }
        for (x = 0; x < 8; x++) {
            for (z = x + 1; z < 8; z++) {
                n[z] -= n[x] * k[z][x]
            }
        }
        for (x = 7; x > -1; x--) {
            n[x] /= k[x][x];
            for (z = 0; z < x; z++) {
                n[z] -= n[x] * k[z][x]
            }
        }
        var A = "matrix3d(" + n[0].toFixed(9) + "," + n[3].toFixed(9) + ", 0," + n[6].toFixed(9) + "," + n[1].toFixed(9) + "," + n[4].toFixed(9) + ", 0," + n[7].toFixed(9) + ",0, 0, 1, 0," + n[2].toFixed(9) + "," + n[5].toFixed(9) + ", 0, 1)";
        if (PerspectiveTransform.useDPRFix) {
            var m = PerspectiveTransform.dpr;
            A = "scale(" + m + "," + m + ")perspective(1000px)" + A + "translateZ(" + ((1 - m) * 1000) + "px)"
        }
        return this.style[d] = A
    }
    l();
    b.update = c;
    b.checkError = e;
    return b
}
)();
(function(a) {
    function b(g, f, k, i, h) {
        this._listener = f;
        this._isOnce = k;
        this.context = i;
        this._signal = g;
        this._priority = h || 0
    }
    function c(f, e) {
        if (typeof f !== "function") {
            throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
        }
    }
    function j() {
        this._bindings = [];
        this._prevParams = null ;
        var e = this;
        this.dispatch = function() {
            j.prototype.dispatch.apply(e, arguments)
        }
    }
    b.prototype = {
        active: !0,
        params: null ,
        execute: function(f) {
            var e;
            this.active && this._listener && (f = this.params ? this.params.concat(f) : f,
            e = this._listener.apply(this.context, f),
            this._isOnce && this.detach());
            return e
        },
        detach: function() {
            return this.isBound() ? this._signal.remove(this._listener, this.context) : null 
        },
        isBound: function() {
            return !!this._signal && !!this._listener
        },
        isOnce: function() {
            return this._isOnce
        },
        getListener: function() {
            return this._listener
        },
        getSignal: function() {
            return this._signal
        },
        _destroy: function() {
            delete this._signal;
            delete this._listener;
            delete this.context
        },
        toString: function() {
            return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
        }
    };
    j.prototype = {
        VERSION: "1.0.0",
        memorize: !1,
        _shouldPropagate: !0,
        active: !0,
        _registerListener: function(g, f, k, i) {
            var h = this._indexOfListener(g, k);
            if (h !== -1) {
                if (g = this._bindings[h],
                g.isOnce() !== f) {
                    throw Error("You cannot add" + (f ? "" : "Once") + "() then add" + (!f ? "" : "Once") + "() the same listener without removing the relationship first.")
                }
            } else {
                g = new b(this,g,f,k,i),
                this._addBinding(g)
            }
            this.memorize && this._prevParams && g.execute(this._prevParams);
            return g
        },
        _addBinding: function(f) {
            var e = this._bindings.length;
            do {
                --e
            } while (this._bindings[e] && f._priority <= this._bindings[e]._priority);this._bindings.splice(e + 1, 0, f)
        },
        _indexOfListener: function(f, e) {
            for (var h = this._bindings.length, g; h--; ) {
                if (g = this._bindings[h],
                g._listener === f && g.context === e) {
                    return h
                }
            }
            return -1
        },
        has: function(f, e) {
            return this._indexOfListener(f, e) !== -1
        },
        add: function(f, e, g) {
            c(f, "add");
            return this._registerListener(f, !1, e, g)
        },
        addOnce: function(f, e, g) {
            c(f, "addOnce");
            return this._registerListener(f, !0, e, g)
        },
        remove: function(f, e) {
            c(f, "remove");
            var g = this._indexOfListener(f, e);
            g !== -1 && (this._bindings[g]._destroy(),
            this._bindings.splice(g, 1));
            return f
        },
        removeAll: function() {
            for (var e = this._bindings.length; e--; ) {
                this._bindings[e]._destroy()
            }
            this._bindings.length = 0
        },
        getNumListeners: function() {
            return this._bindings.length
        },
        halt: function() {
            this._shouldPropagate = !1
        },
        dispatch: function(f) {
            if (this.active) {
                var e = Array.prototype.slice.call(arguments), h = this._bindings.length, g;
                if (this.memorize) {
                    this._prevParams = e
                }
                if (h) {
                    g = this._bindings.slice();
                    this._shouldPropagate = !0;
                    do {
                        h--
                    } while (g[h] && this._shouldPropagate && g[h].execute(e) !== !1)
                }
            }
        },
        forget: function() {
            this._prevParams = null 
        },
        dispose: function() {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams
        },
        toString: function() {
            return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
        }
    };
    var d = j;
    d.Signal = j;
    typeof define === "function" && define.amd ? define(function() {
        return d
    }
    ) : typeof module !== "undefined" && module.exports ? module.exports = d : a.signals = d
}
)(this);
/*!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */
(function() {
    var b = function(a) {
        var d = (function(aa) {
            var V = 25, R = aa.document, X = aa.history, H = a.Signal, af, J, Y, L, ah, P, N = /#(.*)$/, ab = /(\?.*)|(\#.*)/, ae = /^\#/, ac = (!+"\v1"), T = ("onhashchange" in aa) && R.documentMode !== 7, ag = ac && !T, O = (location.protocol === "file:");
            function W(e) {
                return String(e || "").replace(/\W/g, "\\$&")
            }
            function K(e) {
                if (!e) {
                    return ""
                }
                var f = new RegExp("^" + W(af.prependHash) + "|" + W(af.appendHash) + "$","g");
                return e.replace(f, "")
            }
            function M() {
                var g = N.exec(af.getURL());
                var e = (g && g[1]) || "";
                try {
                    return af.raw ? e : decodeURIComponent(e)
                } catch (f) {
                    return e
                }
            }
            function U() {
                return (ah) ? ah.contentWindow.frameHash : null 
            }
            function c() {
                ah = R.createElement("iframe");
                ah.src = "about:blank";
                ah.style.display = "none";
                R.body.appendChild(ah)
            }
            function ad() {
                if (ah && J !== U()) {
                    var e = ah.contentWindow.document;
                    e.open();
                    e.write("<html><head><title>" + R.title + '</title><script type="text/javascript">var frameHash="' + J + '";<\/script></head><body>&nbsp;</body></html>');
                    e.close()
                }
            }
            function Z(g, f) {
                if (J !== g) {
                    var e = J;
                    J = g;
                    if (ag) {
                        if (!f) {
                            ad()
                        } else {
                            ah.contentWindow.frameHash = g
                        }
                    }
                    af.changed.dispatch(K(g), K(e))
                }
            }
            if (ag) {
                P = function() {
                    var e = M()
                      , f = U();
                    if (f !== J && f !== e) {
                        af.setHash(K(f))
                    } else {
                        if (e !== J) {
                            Z(e)
                        }
                    }
                }
            } else {
                P = function() {
                    var e = M();
                    if (e !== J) {
                        Z(e)
                    }
                }
            }
            function Q(e, g, f) {
                if (e.addEventListener) {
                    e.addEventListener(g, f, false)
                } else {
                    if (e.attachEvent) {
                        e.attachEvent("on" + g, f)
                    }
                }
            }
            function G(e, g, f) {
                if (e.removeEventListener) {
                    e.removeEventListener(g, f, false)
                } else {
                    if (e.detachEvent) {
                        e.detachEvent("on" + g, f)
                    }
                }
            }
            function S(e) {
                e = Array.prototype.slice.call(arguments);
                var f = e.join(af.separator);
                f = f ? af.prependHash + f.replace(ae, "") + af.appendHash : f;
                return f
            }
            function I(e) {
                e = encodeURI(e);
                if (ac && O) {
                    e = e.replace(/\?/, "%3F")
                }
                return e
            }
            af = {
                VERSION: "1.2.0",
                raw: false,
                appendHash: "",
                prependHash: "/",
                separator: "/",
                changed: new H(),
                stopped: new H(),
                initialized: new H(),
                init: function() {
                    if (L) {
                        return
                    }
                    J = M();
                    if (T) {
                        Q(aa, "hashchange", P)
                    } else {
                        if (ag) {
                            if (!ah) {
                                c()
                            }
                            ad()
                        }
                        Y = setInterval(P, V)
                    }
                    L = true;
                    af.initialized.dispatch(K(J))
                },
                stop: function() {
                    if (!L) {
                        return
                    }
                    if (T) {
                        G(aa, "hashchange", P)
                    } else {
                        clearInterval(Y);
                        Y = null 
                    }
                    L = false;
                    af.stopped.dispatch(K(J))
                },
                isActive: function() {
                    return L
                },
                getURL: function() {
                    return aa.location.href
                },
                getBaseURL: function() {
                    return af.getURL().replace(ab, "")
                },
                setHash: function(e) {
                    e = S.apply(null , arguments);
                    if (e !== J) {
                        Z(e);
                        if (e === J) {
                            if (!af.raw) {
                                e = I(e)
                            }
                            aa.location.hash = "#" + e
                        }
                    }
                },
                replaceHash: function(e) {
                    e = S.apply(null , arguments);
                    if (e !== J) {
                        Z(e, true);
                        if (e === J) {
                            if (!af.raw) {
                                e = I(e)
                            }
                            aa.location.replace("#" + e)
                        }
                    }
                },
                getHash: function() {
                    return K(J)
                },
                getHashAsArray: function() {
                    return af.getHash().split(af.separator)
                },
                dispose: function() {
                    af.stop();
                    af.initialized.dispose();
                    af.stopped.dispose();
                    af.changed.dispose();
                    ah = af = aa.hasher = null 
                },
                toString: function() {
                    return '[hasher version="' + af.VERSION + '" hash="' + af.getHash() + '"]'
                }
            };
            af.initialized.memorize = true;
            return af
        }
        (window));
        return d
    }
    ;
    if (typeof define === "function" && define.amd) {
        define(["signals"], b)
    } else {
        if (typeof exports === "object") {
            module.exports = b(require("signals"))
        } else {
            window.hasher = b(window.signals)
        }
    }
}
());
(function() {
    function d(o, k) {
        var p;
        k = k || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null ;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = k.touchBoundary || 10;
        this.layer = o;
        this.tapDelay = k.tapDelay || 200;
        this.tapTimeout = k.tapTimeout || 700;
        if (d.notNeeded(o)) {
            return
        }
        function q(l, i) {
            return function() {
                return l.apply(i, arguments)
            }
        }
        var j = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"];
        var n = this;
        for (var m = 0, h = j.length; m < h; m++) {
            n[j[m]] = q(n[j[m]], n)
        }
        if (b) {
            o.addEventListener("mouseover", this.onMouse, true);
            o.addEventListener("mousedown", this.onMouse, true);
            o.addEventListener("mouseup", this.onMouse, true)
        }
        o.addEventListener("click", this.onClick, true);
        o.addEventListener("touchstart", this.onTouchStart, false);
        o.addEventListener("touchmove", this.onTouchMove, false);
        o.addEventListener("touchend", this.onTouchEnd, false);
        o.addEventListener("touchcancel", this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            o.removeEventListener = function(l, s, i) {
                var r = Node.prototype.removeEventListener;
                if (l === "click") {
                    r.call(o, l, s.hijacked || s, i)
                } else {
                    r.call(o, l, s, i)
                }
            }
            ;
            o.addEventListener = function(r, s, l) {
                var i = Node.prototype.addEventListener;
                if (r === "click") {
                    i.call(o, r, s.hijacked || (s.hijacked = function(t) {
                        if (!t.propagationStopped) {
                            s(t)
                        }
                    }
                    ), l)
                } else {
                    i.call(o, r, s, l)
                }
            }
        }
        if (typeof o.onclick === "function") {
            p = o.onclick;
            o.addEventListener("click", function(i) {
                p(i)
            }
            , false);
            o.onclick = null 
        }
    }
    var c = navigator.userAgent.indexOf("Windows Phone") >= 0;
    var b = navigator.userAgent.indexOf("Android") > 0 && !c;
    var g = /iP(ad|hone|od)/.test(navigator.userAgent) && !c;
    var e = g && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
    var f = g && (/OS [6-7]_\d/).test(navigator.userAgent);
    var a = navigator.userAgent.indexOf("BB10") > 0;
    d.prototype.needsClick = function(h) {
        switch (h.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (h.disabled) {
                return true
            }
            break;
        case "input":
            if ((g && h.type === "file") || h.disabled) {
                return true
            }
            break;
        case "label":
        case "iframe":
        case "video":
            return true
        }
        return (/\bneedsclick\b/).test(h.className)
    }
    ;
    d.prototype.needsFocus = function(h) {
        switch (h.nodeName.toLowerCase()) {
        case "textarea":
            return true;
        case "select":
            return !b;
        case "input":
            switch (h.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return false
            }
            return !h.disabled && !h.readOnly;
        default:
            return (/\bneedsfocus\b/).test(h.className)
        }
    }
    ;
    d.prototype.sendClick = function(i, j) {
        var h, k;
        if (document.activeElement && document.activeElement !== i) {
            document.activeElement.blur()
        }
        k = j.changedTouches[0];
        h = document.createEvent("MouseEvents");
        h.initMouseEvent(this.determineEventType(i), true, true, window, 1, k.screenX, k.screenY, k.clientX, k.clientY, false, false, false, false, 0, null );
        h.forwardedTouchEvent = true;
        i.dispatchEvent(h)
    }
    ;
    d.prototype.determineEventType = function(h) {
        if (b && h.tagName.toLowerCase() === "select") {
            return "mousedown"
        }
        return "click"
    }
    ;
    d.prototype.focus = function(h) {
        var i;
        if (g && h.setSelectionRange && h.type.indexOf("date") !== 0 && h.type !== "time" && h.type !== "month") {
            i = h.value.length;
            h.setSelectionRange(i, i)
        } else {
            h.focus()
        }
    }
    ;
    d.prototype.updateScrollParent = function(i) {
        var j, h;
        j = i.fastClickScrollParent;
        if (!j || !j.contains(i)) {
            h = i;
            do {
                if (h.scrollHeight > h.offsetHeight) {
                    j = h;
                    i.fastClickScrollParent = h;
                    break
                }
                h = h.parentElement
            } while (h)
        }
        if (j) {
            j.fastClickLastScrollTop = j.scrollTop
        }
    }
    ;
    d.prototype.getTargetElementFromEventTarget = function(h) {
        if (h.nodeType === Node.TEXT_NODE) {
            return h.parentNode
        }
        return h
    }
    ;
    d.prototype.onTouchStart = function(j) {
        var h, k, i;
        if (j.targetTouches.length > 1) {
            return true
        }
        h = this.getTargetElementFromEventTarget(j.target);
        k = j.targetTouches[0];
        if (g) {
            i = window.getSelection();
            if (i.rangeCount && !i.isCollapsed) {
                return true
            }
            if (!e) {
                if (k.identifier && k.identifier === this.lastTouchIdentifier) {
                    j.preventDefault();
                    return false
                }
                this.lastTouchIdentifier = k.identifier;
                this.updateScrollParent(h)
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = j.timeStamp;
        this.targetElement = h;
        this.touchStartX = k.pageX;
        this.touchStartY = k.pageY;
        if ((j.timeStamp - this.lastClickTime) < this.tapDelay) {
            j.preventDefault()
        }
        return true
    }
    ;
    d.prototype.touchHasMoved = function(h) {
        var j = h.changedTouches[0]
          , i = this.touchBoundary;
        if (Math.abs(j.pageX - this.touchStartX) > i || Math.abs(j.pageY - this.touchStartY) > i) {
            return true
        }
        return false
    }
    ;
    d.prototype.onTouchMove = function(h) {
        if (!this.trackingClick) {
            return true
        }
        if (this.targetElement !== this.getTargetElementFromEventTarget(h.target) || this.touchHasMoved(h)) {
            this.trackingClick = false;
            this.targetElement = null 
        }
        return true
    }
    ;
    d.prototype.findControl = function(h) {
        if (h.control !== undefined) {
            return h.control
        }
        if (h.htmlFor) {
            return document.getElementById(h.htmlFor)
        }
        return h.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }
    ;
    d.prototype.onTouchEnd = function(j) {
        var l, k, i, n, m, h = this.targetElement;
        if (!this.trackingClick) {
            return true
        }
        if ((j.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true
        }
        if ((j.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true
        }
        this.cancelNextClick = false;
        this.lastClickTime = j.timeStamp;
        k = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (f) {
            m = j.changedTouches[0];
            h = document.elementFromPoint(m.pageX - window.pageXOffset, m.pageY - window.pageYOffset) || h;
            h.fastClickScrollParent = this.targetElement.fastClickScrollParent
        }
        i = h.tagName.toLowerCase();
        if (i === "label") {
            l = this.findControl(h);
            if (l) {
                this.focus(h);
                if (b) {
                    return false
                }
                h = l
            }
        } else {
            if (this.needsFocus(h)) {
                if ((j.timeStamp - k) > 100 || (g && window.top !== window && i === "input")) {
                    this.targetElement = null ;
                    return false
                }
                this.focus(h);
                this.sendClick(h, j);
                if (!g || i !== "select") {
                    this.targetElement = null ;
                    j.preventDefault()
                }
                return false
            }
        }
        if (g && !e) {
            n = h.fastClickScrollParent;
            if (n && n.fastClickLastScrollTop !== n.scrollTop) {
                return true
            }
        }
        if (!this.needsClick(h)) {
            j.preventDefault();
            this.sendClick(h, j)
        }
        return false
    }
    ;
    d.prototype.onTouchCancel = function() {
        this.trackingClick = false;
        this.targetElement = null 
    }
    ;
    d.prototype.onMouse = function(h) {
        if (!this.targetElement) {
            return true
        }
        if (h.forwardedTouchEvent) {
            return true
        }
        if (!h.cancelable) {
            return true
        }
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (h.stopImmediatePropagation) {
                h.stopImmediatePropagation()
            } else {
                h.propagationStopped = true
            }
            h.stopPropagation();
            h.preventDefault();
            return false
        }
        return true
    }
    ;
    d.prototype.onClick = function(h) {
        var i;
        if (this.trackingClick) {
            this.targetElement = null ;
            this.trackingClick = false;
            return true
        }
        if (h.target.type === "submit" && h.detail === 0) {
            return true
        }
        i = this.onMouse(h);
        if (!i) {
            this.targetElement = null 
        }
        return i
    }
    ;
    d.prototype.destroy = function() {
        var h = this.layer;
        if (b) {
            h.removeEventListener("mouseover", this.onMouse, true);
            h.removeEventListener("mousedown", this.onMouse, true);
            h.removeEventListener("mouseup", this.onMouse, true)
        }
        h.removeEventListener("click", this.onClick, true);
        h.removeEventListener("touchstart", this.onTouchStart, false);
        h.removeEventListener("touchmove", this.onTouchMove, false);
        h.removeEventListener("touchend", this.onTouchEnd, false);
        h.removeEventListener("touchcancel", this.onTouchCancel, false)
    }
    ;
    d.notNeeded = function(i) {
        var h;
        var k;
        var j;
        if (typeof window.ontouchstart === "undefined") {
            return true
        }
        k = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (k) {
            if (b) {
                h = document.querySelector("meta[name=viewport]");
                if (h) {
                    if (h.content.indexOf("user-scalable=no") !== -1) {
                        return true
                    }
                    if (k > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            } else {
                return true
            }
        }
        if (a) {
            j = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (j[1] >= 10 && j[2] >= 3) {
                h = document.querySelector("meta[name=viewport]");
                if (h) {
                    if (h.content.indexOf("user-scalable=no") !== -1) {
                        return true
                    }
                    if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            }
        }
        if (i.style.msTouchAction === "none") {
            return true
        }
        if (i.style.touchAction === "none") {
            return true
        }
        return false
    }
    ;
    d.attach = function(i, h) {
        return new d(i,h)
    }
    ;
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
            return d
        }
        )
    } else {
        if (typeof module !== "undefined" && module.exports) {
            module.exports = d.attach;
            module.exports.FastClick = d
        } else {
            window.FastClick = d
        }
    }
}
());
var CMUtiles = CMUtiles || (function() {
    var m = {};
    function p(r, t) {
        var s, q;
        q = document.createElement("script");
        q.type = "text/javascript";
        q.src = r;
        q.onload = t;
        s = document.getElementsByTagName("head")[0];
        s.appendChild(q);
        return q
    }
    function a(r) {
        var q = r.parentNode;
        if (q) {
            q.removeChild(r)
        }
    }
    function k(u, z, y, t) {
        var s = u / z
          , r = y / t
          , x = u
          , q = z
          , w = 0
          , v = 0;
        if (r > s) {
            x = (0.5 + (y * (z / t))) | 0;
            w = (0.5 + ((u - x) / 2)) | 0
        } else {
            q = (0.5 + (t * (u / y))) | 0;
            v = (0.5 + ((z - q) / 2)) | 0
        }
        return [x, q, w, v]
    }
    function l(u, z, y, t) {
        var s = u / z
          , r = y / t
          , x = u
          , q = z
          , w = 0
          , v = 0;
        if (r < s) {
            x = (0.5 + (y * (z / t))) | 0;
            w = (0.5 + ((u - x) / 2)) | 0
        } else {
            q = (0.5 + (t * (u / y))) | 0;
            v = (0.5 + ((z - q) / 2)) | 0
        }
        return [x, q, w, v]
    }
    function e(r, q) {
        return (r + (q * (Math.abs((r / 10) | 0) + 1))) % q
    }
    function h(q, u, s, t, r) {
        return (r - t) / (s - u) * (q - u) + t
    }
    function n(r, u, t, v) {
        var s = (r % u) * t
          , q = ((r / u) | 0) * v;
        return [s, q]
    }
    function c(s, r, t, q) {
        var v = (screen.width - t) >> 1
          , u = (screen.height - q) >> 1;
        window.open(s, r, "top=" + u + ",left=" + v + ",width=" + t + ",height=" + q)
    }
    function g(r, x) {
        var w = r.toString()
          , v = ""
          , q = w.length
          , u = x + 1;
        if (q < u) {
            var t = u - q, s;
            for (s = 1; s <= t; s++) {
                v += "0"
            }
            w = v + w
        }
        return w
    }
    function j(t, s) {
        var r = t.toString().split(""), v = r.length, q = (v / 3), u, w = (q << 0);
        w = (w == q) ? w : w + 1;
        for (u = 1; u < w; u++) {
            r.splice(v - u * 3, 0, s)
        }
        return r.join("")
    }
    function b(q, r) {
        return (0.5 + (Math.random() * (r - q) + q)) | 0
    }
    function d(q, r) {
        return q + Math.random() * (r - q)
    }
    function f(q) {
        return Object.prototype.toString.call(q) === "[object Array]"
    }
    function o(q) {
        return Object.prototype.toString.call(q) === "[object Object]"
    }
    function i(v) {
        var r = v.slice();
        var q = r.length;
        var u = q;
        while (u--) {
            var w = parseInt(Math.random() * q);
            var s = r[u];
            r[u] = r[w];
            r[w] = s
        }
        return r
    }
    m.domLoadScript = p;
    m.getFullSize = k;
    m.getFitSize = l;
    m.getInsideMax = e;
    m.openPopup = c;
    m.addZeros = g;
    m.addDots = j;
    m.getCurrent = h;
    m.getWallPosition = n;
    m.randomInteger = b;
    m.randomFloat = d;
    m.isArray = f;
    m.isObject = o;
    m.shuffle = i;
    m.removeDom = a;
    return m
}
)();
var CMDetect = new function() {
    this.IMG_HALF_W = 110;
    this.IMG_HALF_H = 155;
    this.IMG_W = 220;
    this.IMG_H = 310;
    this.APP_ID = "304280369692789";
    this.SITE_URL = "http://fff.cmiscm.com/";
    this.SITE_TITLE = "Form Follows Function";
    this.SITE_DES = "FFF is a collection of interactive experiences. Each experience has its own unique design and functionality.";
    this.isPaused = false;
    this.isTranslate3d = Modernizr.csstransforms3d;
    this.isCanvas = Modernizr.canvas;
    this.isMobile = false;
    this.isTablet = false;
    this.isDevice = false;
    this.cssHead = Modernizr.prefixed("transform");
    this.isFirefox = bowser.firefox || false;
    this.isSafari = bowser.safari || false;
    this.isChrome = bowser.chrome || false;
    this.isIE = bowser.msie || false;
    this.ieVersion = bowser.version;
    this.isIpad = bowser.ipad;
    this.isRetina = (window.devicePixelRatio > 1) ? true : false;
    this.isTouch = !!("ontouchstart" in window);
    this.browserName = "";
    if (this.isChrome) {
        this.browserName = "ch"
    } else {
        if (this.isFirefox) {
            this.browserName = "ff"
        } else {
            if (this.isSafari) {
                this.browserName = "sf"
            } else {
                if (this.isIE) {
                    this.browserName = "ie";
                    if (this.ieVersion >= 10) {
                        this.browserName = "ie10"
                    }
                } else {
                    if (this.isTouch) {
                        this.browserName = "touch"
                    }
                }
            }
        }
    }
    this.circleMask = document.createElement("div");
    this.circleMask.className = "circle-mask";
    this.circleMask.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="476px" height="476px" viewBox="0 0 476 476" enable-background="new 0 0 476 476" xml:space="preserve"><path d="M0,0v476h476V0H0z M238,471C109.318,471,5,366.684,5,238C5,109.317,109.318,5,238,5c128.683,0,233,104.317,233,233 C471,366.684,366.684,471,238,471z"/></svg>';
    if ((this.isIE && this.ieVersion < 10) || this.browserName == "") {
        window.location = "browser.php"
    }
    if (navigator.appVersion.indexOf("Win") != -1 && !this.isFirefox) {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@font-face{font-family:'Crimson Text';src:url(font/crimsontext-semibold-webfont.svg#crimson_textsemibold) format('svg');font-weight:600;font-style:normal}@font-face{font-family:Roboto;src:url(font/roboto-bold-webfont.svg#robotobold) format('svg');font-weight:700;font-style:normal}@font-face{font-family:Roboto;src:url(font/roboto-medium-webfont.svg#robotomedium) format('svg');font-weight:500;font-style:normal}@font-face{font-family:Roboto;src:url(font/roboto-regular-webfont.svg#robotoregular) format('svg');font-weight:400;font-style:normal}@font-face{font-family:Roboto;src:url(font/roboto-light-webfont.svg#robotolight) format('svg');font-weight:300;font-style:normal}"));
        document.head.appendChild(a)
    }
}
;
var StageController = StageController || (function() {
    var i = {
        minWidth: 800,
        minHeight: 645,
        stageWidth: 0,
        stageHeight: 0
    }, n, y, h = [], b = [], c = [], t = [], j = [], m = [], A = [], r = [];
    function w(B) {
        i.minWidth = B;
        n = document.getElementById("check");
        y = document.getElementById("root");
        $(window).resize(d);
        d();
        if (CMDetect.isTouch) {
            new FastClick(document.body);
            $(document).on("touchstart", a).on("touchmove", x).on("touchend", f)
        }
        $(document).on("mousedown", e).on("mousemove", l).on("mouseup", z);
        if (window.DeviceOrientationEvent) {
            window.addEventListener("orientationchange", d, false)
        }
    }
    function k(C, D) {
        var B = c.indexOf(C);
        if (B > -1) {
            return
        }
        c.unshift(C);
        t.unshift(D)
    }
    function p(C) {
        var B = c.indexOf(C);
        if (B > -1) {
            c.splice(B, 1);
            t.splice(B, 1)
        }
    }
    function q(C, D) {
        var B = j.indexOf(C);
        if (B > -1) {
            return
        }
        j.unshift(C);
        m.unshift(D)
    }
    function u(C) {
        var B = j.indexOf(C);
        if (B > -1) {
            j.splice(B, 1);
            m.splice(B, 1)
        }
    }
    function s(C, D) {
        var B = A.indexOf(C);
        if (B > -1) {
            return
        }
        A.unshift(C);
        r.unshift(D)
    }
    function g(C) {
        var B = A.indexOf(C);
        if (B > -1) {
            A.splice(B, 1);
            r.splice(B, 1)
        }
    }
    function e(C) {
        var B = t.length;
        while (B--) {
            t[B](C.pageX, C.pageY)
        }
    }
    function l(C) {
        var B = m.length;
        while (B--) {
            m[B](C.pageX, C.pageY)
        }
    }
    function z(C) {
        var B = r.length;
        while (B--) {
            r[B]()
        }
    }
    function a(C) {
        var D = C.originalEvent.touches[0];
        var B = t.length;
        while (B--) {
            t[B](D.pageX | 0, D.pageY | 0)
        }
    }
    function x(C) {
        C.preventDefault();
        var D = C.originalEvent.touches[0];
        var B = m.length;
        while (B--) {
            m[B](D.pageX | 0, D.pageY | 0)
        }
    }
    function f(C) {
        var B = r.length;
        while (B--) {
            r[B]()
        }
    }
    function o(C, D) {
        var B = h.indexOf(C);
        if (B > -1) {
            return
        }
        h.unshift(C);
        b.unshift(D);
        D()
    }
    function v(C) {
        var B = h.indexOf(C);
        if (B > -1) {
            h.splice(B, 1);
            b.splice(B, 1)
        }
    }
    function d() {
        var E = n.getBoundingClientRect()
          , B = E.width
          , D = E.height;
        if (i.minWidth > 0) {
            B = (B < i.minWidth) ? i.minWidth : B
        }
        if (i.minHeight > 0) {
            D = (D < i.minHeight) ? i.minHeight : D
        }
        i.stageWidth = B;
        i.stageHeight = D;
        if (CMDetect.isTouch) {
            y.style.height = D + "px"
        }
        var C = b.length;
        while (C--) {
            b[C]()
        }
    }
    i.init = w;
    i.onResize = d;
    i.addResize = o;
    i.removeResize = v;
    i.addDown = k;
    i.removeDown = p;
    i.addMove = q;
    i.removeMove = u;
    i.addUp = s;
    i.removeUp = g;
    return i
}
)();
(function(b) {
    b.fn.shuffleLetters = function(d) {
        var c = b.extend({
            step: 20,
            fps: 30,
            text: "",
            callback: function() {}
        }, d);
        return this.each(function() {
            var j = b(this)
              , k = "";
            if (j.data("animated")) {
                return true
            }
            j.data("animated", true);
            if (c.text) {
                k = c.text.split("")
            } else {
                k = j.text().split("")
            }
            var f = []
              , l = [];
            for (var e = 0; e < k.length; e++) {
                var h = k[e];
                if (h == " ") {
                    f[e] = "space";
                    continue
                } else {
                    if (/[a-z]/.test(h)) {
                        f[e] = "lowerLetter"
                    } else {
                        if (/[A-Z]/.test(h)) {
                            f[e] = "upperLetter"
                        } else {
                            f[e] = "symbol"
                        }
                    }
                }
                l.push(e)
            }
            j.html("");
            (function g(p) {
                var o, m = l.length, n = k.slice(0);
                if (p > m) {
                    j.data("animated", false);
                    c.callback(j);
                    return
                }
                for (o = Math.max(p, 0); o < m; o++) {
                    if (o < p + c.step) {
                        n[l[o]] = a(f[l[o]])
                    } else {
                        n[l[o]] = ""
                    }
                }
                j.text(n.join(""));
                setTimeout(function() {
                    g(p + 1)
                }
                , 1000 / c.fps)
            }
            )(-c.step)
        }
        )
    }
    ;
    function a(e) {
        var d = "";
        if (e == "lowerLetter") {
            d = "abcdefghijklmnopqrstuvwxyz"
        } else {
            if (e == "upperLetter") {
                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            } else {
                if (e == "symbol") {
                    d = "abcdefghijklmnopqrstuvwxyz"
                }
            }
        }
        var c = d.split("");
        return c[(Math.random() * c.length) | 0]
    }
}
)(jQuery);
!function(A, G, k) {
    function j(d, f) {
        var c = G.createElement(d || "div"), a;
        for (a in f) {
            c[a] = f[a]
        }
        return c
    }
    function F(c) {
        for (var a = 1, d = arguments.length; a < d; a++) {
            c.appendChild(arguments[a])
        }
        return c
    }
    function z(p, I, h, a) {
        var d = ["opacity", I, ~~(p * 100), h, a].join("-")
          , v = 0.01 + h / a * 100
          , m = Math.max(1 - (1 - p) / I * (100 - v), p)
          , i = H.substring(0, H.indexOf("Animation")).toLowerCase()
          , s = i && "-" + i + "-" || "";
        return x[d] || (D.insertRule("@" + s + "keyframes " + d + "{0%{opacity:" + m + "}" + v + "%{opacity:" + p + "}" + (v + 0.01) + "%{opacity:1}" + (v + I) % 100 + "%{opacity:" + p + "}100%{opacity:" + m + "}}", D.cssRules.length),
        x[d] = 1),
        d
    }
    function w(f, c) {
        var a = f.style, d, h;
        if (a[c] !== k) {
            return c
        }
        c = c.charAt(0).toUpperCase() + c.slice(1);
        for (h = 0; h < b.length; h++) {
            d = b[h] + c;
            if (a[d] !== k) {
                return d
            }
        }
    }
    function C(c, a) {
        for (var d in a) {
            c.style[w(c, d) || d] = a[d]
        }
        return c
    }
    function y(f) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            for (var a in d) {
                f[a] === k && (f[a] = d[a])
            }
        }
        return f
    }
    function g(c) {
        var a = {
            x: c.offsetLeft,
            y: c.offsetTop
        };
        while (c = c.offsetParent) {
            a.x += c.offsetLeft,
            a.y += c.offsetTop
        }
        return a
    }
    var b = ["webkit", "Moz", "ms", "O"], x = {}, H, D = function() {
        var a = j("style", {
            type: "text/css"
        });
        return F(G.getElementsByTagName("head")[0], a),
        a.sheet || a.styleSheet
    }
    (), B = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        speed: 1,
        trail: 100,
        opacity: 0.25,
        fps: 20,
        zIndex: 2000000000,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    }, E = function q(a) {
        if (!this.spin) {
            return new q(a)
        }
        this.opts = y(a || {}, q.defaults, B)
    }
    ;
    E.defaults = {},
    y(E.prototype, {
        spin: function(L) {
            this.stop();
            var Q = this, o = Q.opts, c = Q.el = C(j(0, {
                className: o.className
            }), {
                position: o.position,
                width: 0,
                zIndex: o.zIndex
            }), I = o.radius + o.length + o.width, P, N;
            L && (L.insertBefore(c, L.firstChild || null ),
            N = g(L),
            P = g(c),
            C(c, {
                left: (o.left == "auto" ? N.x - P.x + (L.offsetWidth >> 1) : parseInt(o.left, 10) + I) + "px",
                top: (o.top == "auto" ? N.y - P.y + (L.offsetHeight >> 1) : parseInt(o.top, 10) + I) + "px"
            })),
            c.setAttribute("aria-role", "progressbar"),
            Q.lines(c, Q.opts);
            if (!H) {
                var K = 0
                  , s = o.fps
                  , J = s / o.speed
                  , M = (1 - o.opacity) / (J * o.trail / 100)
                  , O = J / o.lines;
                (function p() {
                    K++;
                    for (var d = o.lines; d; d--) {
                        var a = Math.max(1 - (K + d * O) % J * M, o.opacity);
                        Q.opacity(c, o.lines - d, a, o)
                    }
                    Q.timeout = Q.el && setTimeout(p, ~~(1000 / s))
                }
                )()
            }
            return Q
        },
        stop: function() {
            var a = this.el;
            return a && (clearTimeout(this.timeout),
            a.parentNode && a.parentNode.removeChild(a),
            this.el = k),
            this
        },
        lines: function(f, c) {
            function a(l, i) {
                return C(j(), {
                    position: "absolute",
                    width: c.length + c.width + "px",
                    height: c.width + "px",
                    background: l,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / c.lines * h + c.rotate) + "deg) translate(" + c.radius + "px,0)",
                    borderRadius: (c.corners * c.width >> 1) + "px"
                })
            }
            var h = 0, d;
            for (; h < c.lines; h++) {
                d = C(j(), {
                    position: "absolute",
                    top: 1 + ~(c.width / 2) + "px",
                    transform: c.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: c.opacity,
                    animation: H && z(c.opacity, c.trail, h, c.lines) + " " + 1 / c.speed + "s linear infinite"
                }),
                c.shadow && F(d, C(a("#000", "0 0 4px #000"), {
                    top: "2px"
                })),
                F(f, F(d, a(c.color, "0 0 1px rgba(0,0,0,.1)")))
            }
            return f
        },
        opacity: function(c, a, d) {
            a < c.childNodes.length && (c.childNodes[a].style.opacity = d)
        }
    }),
    function() {
        function c(f, d) {
            return j("<" + f + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', d)
        }
        var a = C(j("group"), {
            behavior: "url(#default#VML)"
        });
        !w(a, "transform") && a.adj ? (D.addRule(".spin-vml", "behavior:url(#default#VML)"),
        E.prototype.lines = function(I, h) {
            function J() {
                return C(c("group", {
                    coordsize: p + " " + p,
                    coordorigin: -d + " " + -d
                }), {
                    width: p,
                    height: p
                })
            }
            function m(l, f, n) {
                F(v, F(C(J(), {
                    rotation: 360 / h.lines * l + "deg",
                    left: ~~f
                }), F(C(c("roundrect", {
                    arcsize: h.corners
                }), {
                    width: d,
                    height: h.width,
                    left: h.radius,
                    top: -h.width >> 1,
                    filter: n
                }), c("fill", {
                    color: h.color,
                    opacity: h.opacity
                }), c("stroke", {
                    opacity: 0
                }))))
            }
            var d = h.length + h.width, p = 2 * d, e = -(h.width + h.length) * 2 + "px", v = C(J(), {
                position: "absolute",
                top: e,
                left: e
            }), u;
            if (h.shadow) {
                for (u = 1; u <= h.lines; u++) {
                    m(u, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
                }
            }
            for (u = 1; u <= h.lines; u++) {
                m(u)
            }
            return F(I, v)
        }
        ,
        E.prototype.opacity = function(l, f, m, h) {
            var d = l.firstChild;
            h = h.shadow && h.lines || 0,
            d && f + h < d.childNodes.length && (d = d.childNodes[f + h],
            d = d && d.firstChild,
            d = d && d.firstChild,
            d && (d.opacity = m))
        }
        ) : H = w(a, "animation")
    }
    (),
    typeof define == "function" && define.amd ? define(function() {
        return E
    }
    ) : A.Spinner = E
}
(window, document);
var ShareButtons = ShareButtons || (function() {
    var q, r, n, e, a, c, b, o, i, f, j, l = -70;
    function m() {
        q = document.getElementById("root");
        f = document.createElement("ul");
        f.id = "left";
        r = document.createElement("li");
        r.id = "share-fbt";
        r.className = "buttons fbt-pos";
        n = document.createElement("li");
        n.id = "share-tbt";
        n.className = "buttons tbt-pos";
        e = document.createElement("li");
        e.id = "share-gbt";
        e.className = "buttons gbt-pos";
        a = document.createElement("li");
        a.id = "share-pbt";
        a.className = "buttons pbt-pos";
        f.appendChild(r);
        f.appendChild(n);
        f.appendChild(e);
        f.appendChild(a);
        c = $(r);
        b = $(n);
        o = $(e);
        i = $(a);
        if (CMDetect.isMobile) {
            l = -140
        }
        return f
    }
    function p(u) {
        j = u;
        q.appendChild(f);
        TweenLite.set(r, {
            css: {
                x: l
            }
        });
        TweenLite.set(n, {
            css: {
                x: l
            }
        });
        TweenLite.set(e, {
            css: {
                x: l
            }
        });
        TweenLite.set(a, {
            css: {
                x: l
            }
        });
        TweenLite.to(r, 0.3, {
            delay: 0.1,
            css: {
                x: 0
            },
            ease: Back.easeOut
        });
        TweenLite.to(n, 0.3, {
            delay: 0.2,
            css: {
                x: 0
            },
            ease: Back.easeOut
        });
        TweenLite.to(e, 0.3, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Back.easeOut
        });
        TweenLite.to(a, 0.3, {
            delay: 0.4,
            css: {
                x: 0
            },
            ease: Back.easeOut
        });
        c.on("click", s);
        b.on("click", k);
        o.on("click", h);
        i.on("click", d)
    }
    function g() {
        TweenLite.to(r, 0.3, {
            css: {
                x: l
            },
            ease: Back.easeIn
        });
        TweenLite.to(n, 0.3, {
            delay: 0.1,
            css: {
                x: l
            },
            ease: Back.easeIn
        });
        TweenLite.to(e, 0.3, {
            delay: 0.2,
            css: {
                x: l
            },
            ease: Back.easeIn
        });
        TweenLite.to(a, 0.3, {
            delay: 0.3,
            css: {
                x: l
            },
            ease: Back.easeIn,
            onComplete: t
        })
    }
    function t() {
        c.off("click", s);
        b.off("click", k);
        o.off("click", h);
        i.off("click", d);
        TweenLite.killTweensOf(r);
        TweenLite.killTweensOf(n);
        TweenLite.killTweensOf(e);
        TweenLite.killTweensOf(a);
        CMUtiles.removeDom(f)
    }
    function s() {
        var y = CMDetect.SITE_URL + ConfigModel.configArr[j].poster.img + "_t.jpg"
          , w = CMDetect.SITE_TITLE + " - " + ConfigModel.configArr[j].poster.title
          , u = CMDetect.SITE_URL + "#!/section/" + ConfigModel.configArr[j].poster.id
          , x = CMDetect.SITE_URL + "share.php?url=" + encodeURIComponent(u) + "&title=" + encodeURIComponent(w) + "&poster=" + encodeURIComponent(y)
          , v = "https://www.facebook.com/dialog/feed?app_id=" + CMDetect.APP_ID + "&link=" + encodeURIComponent(x) + "&picture=" + encodeURIComponent(y) + "&name=" + encodeURIComponent(w) + "&caption=" + encodeURIComponent(u) + "&description=" + encodeURIComponent(CMDetect.SITE_DES) + "&redirect_uri=" + encodeURIComponent(CMDetect.SITE_URL + "close.html") + "&display=popup";
        CMUtiles.openPopup(v, "", 600, 500)
    }
    function k() {
        var w = CMDetect.SITE_TITLE + " - " + ConfigModel.configArr[j].poster.title
          , u = CMDetect.SITE_URL + "#!/section/" + ConfigModel.configArr[j].poster.id
          , v = "http://twitter.com/share?url=" + encodeURIComponent(u) + "&text=" + encodeURIComponent(w);
        CMUtiles.openPopup(v, "", 600, 260)
    }
    function h() {
        var y = CMDetect.SITE_URL + ConfigModel.configArr[j].poster.img + "_t.jpg"
          , w = CMDetect.SITE_TITLE + " - " + ConfigModel.configArr[j].poster.title
          , u = CMDetect.SITE_URL + "#!/section/" + ConfigModel.configArr[j].poster.id
          , x = CMDetect.SITE_URL + "share.php?url=" + encodeURIComponent(u) + "&title=" + encodeURIComponent(w) + "&poster=" + encodeURIComponent(y)
          , v = "https://plus.google.com/share?url=" + encodeURIComponent(x);
        CMUtiles.openPopup(v, "", 600, 400)
    }
    function d() {
        var x = CMDetect.SITE_URL + ConfigModel.configArr[j].poster.img + "_b.jpg"
          , w = CMDetect.SITE_TITLE + " - " + ConfigModel.configArr[j].poster.title
          , u = CMDetect.SITE_URL + "#!/section/" + ConfigModel.configArr[j].poster.id
          , v = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(u) + "&media=" + encodeURIComponent(x) + "&description=" + encodeURIComponent(w);
        CMUtiles.openPopup(v, "", 700, 300)
    }
    return {
        init: m,
        show: p,
        hide: g,
        remove: t
    }
}
)();
var ShareTooltip = ShareTooltip || (function() {
    var m, n, i, g = '<ul id="foot-share-box"><li id="foot-share-0">facebook</li><li id="foot-share-1">twitter</li><li id="foot-share-2">google plus</li><li id="foot-share-3">pinterest</li><li id="foot-share-4">tumblr</li><li id="foot-share-5">delicious</li></ul>';
    function p(q) {
        m = false;
        n = q;
        n.innerHTML = g;
        i = document.getElementById("foot-share-box");
        TweenLite.set(n, {
            css: {
                y: 118
            }
        });
        TweenLite.set(i, {
            css: {
                y: -118
            }
        });
        $(i).on("mouseenter", o).on("mouseleave", j);
        $("#foot-share-0").on("click", f);
        $("#foot-share-1").on("click", e);
        $("#foot-share-2").on("click", d);
        $("#foot-share-3").on("click", c);
        $("#foot-share-4").on("click", b);
        $("#foot-share-5").on("click", a)
    }
    function f(r) {
        var q = "https://www.facebook.com/dialog/feed?app_id=" + CMDetect.APP_ID + "&link=" + encodeURIComponent(CMDetect.SITE_URL) + "&picture=" + encodeURIComponent(CMDetect.SITE_URL + "images/share.png") + "&name=" + encodeURIComponent(CMDetect.SITE_TITLE) + "&caption=" + encodeURIComponent(CMDetect.SITE_URL) + "&description=" + encodeURIComponent(CMDetect.SITE_DES) + "&redirect_uri=" + encodeURIComponent(CMDetect.SITE_URL + "close.html") + "&display=popup";
        CMUtiles.openPopup(q, "", 600, 500)
    }
    function e(r) {
        var q = "http://twitter.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&text=" + encodeURIComponent("Form Follows Function - FFF is a collection of interactive experiences.");
        CMUtiles.openPopup(q, "", 600, 260)
    }
    function d(r) {
        var q = "https://plus.google.com/share?url=" + encodeURIComponent(CMDetect.SITE_URL);
        CMUtiles.openPopup(q, "", 600, 400)
    }
    function c(r) {
        var q = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&media=" + encodeURIComponent(CMDetect.SITE_URL + "images/share.png") + "&description=" + encodeURIComponent(CMDetect.SITE_DES);
        CMUtiles.openPopup(q, "", 700, 300)
    }
    function b(r) {
        var q = "http://www.tumblr.com/share/link?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&name=" + encodeURIComponent(CMDetect.SITE_TITLE) + "&description=" + encodeURIComponent(CMDetect.SITE_DES);
        CMUtiles.openPopup(q, "", 450, 450)
    }
    function a(r) {
        var q = "http://delicious.com/save?url=" + encodeURIComponent(CMDetect.SITE_URL) + "&title=" + encodeURIComponent(CMDetect.SITE_TITLE);
        CMUtiles.openPopup(q, "", 600, 550)
    }
    function l() {
        if (m) {
            return
        }
        m = true;
        n.style.display = "block";
        TweenLite.killTweensOf(n);
        TweenLite.killTweensOf(i);
        TweenLite.to(n, 0.4, {
            css: {
                y: 0
            },
            ease: Expo.easeOut
        });
        TweenLite.to(i, 0.4, {
            css: {
                y: 0
            },
            ease: Expo.easeOut
        })
    }
    function h() {
        if (!m) {
            return
        }
        m = false;
        TweenLite.killTweensOf(n);
        TweenLite.killTweensOf(i);
        TweenLite.to(n, 0.25, {
            css: {
                y: 118
            },
            ease: Cubic.easeIn,
            onComplete: k
        });
        TweenLite.to(i, 0.25, {
            css: {
                y: -118
            },
            ease: Cubic.easeIn
        })
    }
    function k() {
        n.style.display = "none"
    }
    function o(q) {
        l()
    }
    function j(q) {
        h()
    }
    return {
        init: p,
        show: l,
        hide: h
    }
}
)();
var CloseButton = CloseButton || (function() {
    var d, g, b, e, i = 70;
    function h() {
        d = document.getElementById("root");
        e = document.createElement("div");
        e.id = "right";
        e.className = "right-pos";
        g = document.createElement("div");
        g.id = "close-bt";
        g.className = "buttons close-pos";
        b = $(g);
        e.appendChild(g);
        if (CMDetect.isMobile) {
            i = 140
        }
        return {
            right: e,
            close: g
        }
    }
    function f(j) {
        d.appendChild(e);
        TweenLite.set(g, {
            css: {
                x: i
            }
        });
        TweenLite.to(g, 0.35, {
            delay: 0.1,
            css: {
                x: 0
            },
            ease: Back.easeOut
        });
        b.on("click", j)
    }
    function c() {
        TweenLite.to(g, 0.3, {
            css: {
                x: i
            },
            ease: Back.easeIn,
            onComplete: a
        })
    }
    function a() {
        b.off("click");
        TweenLite.killTweensOf(g);
        CMUtiles.removeDom(e)
    }
    return {
        init: h,
        show: f,
        hide: c,
        remove: a
    }
}
)();
var CircleAniamtion = CircleAniamtion || (function() {
    var v, m, A, l, x = 62, a = 6, b = 31, y = 28, g = 1.6, z = {
        no: 0
    }, D, f, u, s, p, n = false, k, r, F, d = {
        lines: 12,
        length: 3,
        width: 2,
        radius: 6,
        color: "#fff",
        speed: 1,
        trail: 60,
        shadow: false,
        hwaccel: false,
        zIndex: 2000000000
    };
    function C(G, H) {
        if (CMDetect.isMobile) {
            x = 124;
            b = 62;
            a = 12;
            y = 56;
            d.width = 4;
            d.length = 6;
            d.radius = 12
        }
        v = G;
        l = H;
        m = document.createElement("canvas");
        m.id = "circleCon";
        m.width = x;
        m.height = x;
        D = m.getContext("2d");
        A = document.createElement("div");
        A.id = "circleCon-loading"
    }
    function w() {
        r = false;
        F = false
    }
    function E(G) {
        v.appendChild(m);
        D.lineWidth = a;
        if (ConfigModel.isWhite == 1) {
            f = "rgba(255,255,255,.24)";
            u = "#ffffff"
        } else {
            f = "rgba(34,34,34,.24)";
            u = "#222222"
        }
        z.no = -0.5;
        q();
        TweenLite.set(m, {
            css: {
                autoAlpha: 0
            }
        });
        s = TweenLite.to(m, 0.2, {
            css: {
                autoAlpha: 1
            },
            onComplete: j,
            onCompleteParams: [G]
        })
    }
    function j(G) {
        s = null ;
        k = G;
        p = TweenLite.to(z, g, {
            no: 1.5,
            onUpdate: q,
            ease: Cubic.easeInOut,
            onComplete: h
        })
    }
    function B() {
        F = true;
        t()
    }
    function h() {
        r = true;
        t()
    }
    function t() {
        if (r && !F) {
            n = true;
            v.appendChild(A);
            if (ConfigModel.isWhite == 1) {
                d.color = "#fff"
            } else {
                d.color = "#000"
            }
            $(A).spin(d);
            l.style.display = "none"
        } else {
            if (r && F) {
                p = null ;
                if (n) {
                    n = false;
                    $(A).spin(false);
                    CMUtiles.removeDom(A);
                    l.style.display = "block"
                }
                TweenLite.to(m, 0.2, {
                    css: {
                        autoAlpha: 0
                    },
                    onComplete: o
                });
                k();
                k = null 
            }
        }
    }
    function o() {
        CMUtiles.removeDom(m)
    }
    function e() {
        TweenLite.killTweensOf(m);
        TweenLite.killTweensOf(z);
        CMUtiles.removeDom(m);
        k = null 
    }
    function i() {
        if (s != null ) {
            s.pause()
        }
        if (p != null ) {
            p.pause()
        }
    }
    function c() {
        if (s != null ) {
            s.resume()
        }
        if (p != null ) {
            p.resume()
        }
    }
    function q() {
        D.clearRect(0, 0, x, x);
        D.beginPath();
        D.strokeStyle = f;
        D.arc(b, b, y, 0, 2 * Math.PI, false);
        D.stroke();
        D.beginPath();
        D.strokeStyle = u;
        D.arc(b, b, y, -0.5 * Math.PI, (z.no) * Math.PI, false);
        D.stroke()
    }
    return {
        init: C,
        show: E,
        cancel: e,
        pause: i,
        resume: c,
        loaded: B,
        ready: w
    }
}
)();
var BrowserError = BrowserError || (function() {
    var f = 'Your browser does not seem to support HTML5 perfectly.<br>Please use <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a> browser.', a;
    function e(h) {
        if (ConfigModel.isWhite == 1) {
            a = '<div class="expError expError-white">' + f + "</div>"
        } else {
            a = '<div class="expError expError-black">' + f + "</div>"
        }
        h.innerHTML = a
    }
    function g() {}
    function d() {}
    function c() {}
    function b() {}
    return {
        init: e,
        start: g,
        dispose: d,
        pause: c,
        resume: b
    }
}
)();
var Home = Home || (function() {
    var f = {
        posArr: []
    }, N, y, j, an, o = [], k, R, Q, z = CMDetect.IMG_HALF_W, H = CMDetect.IMG_HALF_H, ai = 900, U = Math.PI / 180, ak = 10, F = 26, Z, b = 360 / ak, af = 0, av = 0, ab = false, P = 0, T = 0, L = false, aj = false, al, x = {
        pos: 0
    }, ar, g = [], m = [], E = [], au, a, c = 0, u = CMDetect.cssHead;
    function V() {
        N = document.getElementById("pantone-loading");
        y = document.getElementById("pantone");
        j = document.getElementById("header");
        an = document.getElementById("footer");
        StageController.addResize("home", r);
        ah()
    }
    function r() {
        s();
        if (aj) {
            aa()
        }
    }
    function s() {
        var ay = StageController.stageHeight
          , ax = StageController.stageWidth
          , az = ay + 400;
        R = (ax >> 1);
        Q = (0.5 + (ai + (ay / 1.618))) | 0;
        if (Q < az) {
            Q = az
        }
    }
    function q() {
        s();
        aa()
    }
    function i() {
        StageController.removeResize("home");
        J();
        N.style.display = "none";
        y.style.display = "none"
    }
    function O() {
        aj = true;
        J()
    }
    function ap() {
        aj = false;
        G();
        Address.able()
    }
    function G() {
        StageController.addDown("home", aw);
        StageController.addMove("home", C);
        StageController.addUp("home", d);
        K()
    }
    function J() {
        StageController.removeDown("home");
        StageController.removeMove("home");
        StageController.removeUp("home");
        ab = false;
        T = 0
    }
    function ae() {
        var ax, ay;
        for (ax = 0; ax < F; ax++) {
            ay = o[ax];
            ay.click = 0
        }
        if (k) {
            TweenLite.set(k, {
                css: {
                    autoAlpha: 1
                }
            })
        }
        L = false;
        aj = false;
        y.style.display = "block";
        aa()
    }
    function t() {
        StageController.addResize("home", r);
        G();
        Address.able();
        if (CMDetect.isPaused) {
            O()
        }
    }
    function ah() {
        au = Address.curSection;
        al = ConfigModel.total;
        c = 36 - al;
        a = ConfigModel.convertIdToOrder(au);
        var ax, ay;
        for (ax = 0; ax < F; ax++) {
            ay = document.createElement("div");
            ay.id = "items" + ax;
            ay.className = "items";
            y.appendChild(ay);
            o[ax] = {
                item: ay,
                use: 0,
                no: 0,
                click: 0,
                bg: -1
            };
            D(ay, ax, o[ax])
        }
        for (ax = 0; ax < b; ax++) {
            f.posArr[ax] = {
                pos: ax * ak - 90,
                use: 0,
                cur: 0,
                item: null ,
                no: ax
            }
        }
        Z = o.length;
        l()
    }
    function D(aA, aB, ay) {
        var az = document.createElement("div")
          , ax = document.createElement("div");
        az.className = "item-button";
        az.setAttribute("data-id", aB);
        ax.className = "item-txt";
        ax.innerHTML = '<div class="item-txt-title"></div><div class="item-txt-date"></div>';
        aA.appendChild(ax);
        aA.appendChild(az);
        $(az).on("click", S);
        E[aB] = ax;
        g[aB] = ax.getElementsByClassName("item-txt-title")[0];
        m[aB] = ax.getElementsByClassName("item-txt-date")[0];
        A(ay)
    }
    function l() {
        var az, ax, ay;
        az = f.posArr[0];
        ay = az.pos;
        for (ax = 0; ax < b; ax++) {
            az = f.posArr[ax];
            ad(az, ay + (ak * ax), ax)
        }
        e()
    }
    function ad(aA, ax, az) {
        ax = ax % 360;
        if (ax < 0) {
            ax = ax + 360
        }
        aA.pos = ax;
        if (ax > 190 && ax < 350) {
            if (aA.use == 0 || aA.item == null ) {
                aA.use = 1;
                var ay;
                if (az < 18) {
                    ay = n(az + a, al)
                } else {
                    ay = n(az - c + a, al)
                }
                aA.cur = ay;
                aA.item = aq(az, ay)
            }
            if (aA.item != null ) {
                am(aA.item, ax)
            }
        } else {
            if (aA.use == 1) {
                aA.use = 0;
                if (aA.item != null ) {
                    aA.item.use = 0;
                    aA.item.bg = -1;
                    A(aA.item);
                    aA.item = null 
                }
            }
        }
    }
    function at(az) {
        var ay = x.pos, aA, ax;
        for (ax = 0; ax < b; ax++) {
            aA = f.posArr[ax];
            ad(aA, ay - (ak * (az - ax)), ax)
        }
    }
    function e() {
        switch (Address.curURL) {
        case Address.URL_HOME:
            ag();
            break;
        case Address.URL_SECTION:
            W();
            break;
        case Address.URL_ABOUT:
            w();
            break;
        case Address.URL_SCREENSAVER:
            ao();
            break
        }
    }
    function ag() {
        var ax = 0.8;
        if (CMDetect.isDevice) {
            x.pos = 0;
            ax = 1.2
        } else {
            x.pos = 320
        }
        TweenLite.to(x, 2, {
            pos: -90,
            ease: Back.easeOut,
            easeParams: [ax],
            onUpdate: at,
            onUpdateParams: [0],
            onComplete: p
        });
        y.className = "chand show-pantone"
    }
    function p() {
        ac();
        G();
        Address.able()
    }
    function w() {
        var ax = 1.2;
        x.pos = 0;
        aj = true;
        TweenLite.to(x, 2, {
            pos: -90,
            ease: Back.easeOut,
            easeParams: [ax],
            onUpdate: M,
            onUpdateParams: [0]
        });
        y.className = "chand show-pantone";
        ac();
        About.show(1)
    }
    function ao() {
        var ax = 1.2;
        x.pos = 0;
        aj = true;
        TweenLite.to(x, 2, {
            pos: -90,
            ease: Back.easeOut,
            easeParams: [ax],
            onUpdate: M,
            onUpdateParams: [0]
        });
        y.className = "chand show-pantone";
        ac();
        ScreenSaver.show(1)
    }
    function W() {
        var ax = 1.2;
        x.pos = 0;
        aj = true;
        TweenLite.to(x, 1, {
            pos: -90,
            ease: Back.easeOut,
            easeParams: [ax],
            onUpdate: M,
            onUpdateParams: [0],
            onComplete: v
        });
        y.className = "chand show-pantone";
        ac()
    }
    function v() {
        L = true;
        T = 0;
        Address.unable();
        h(au)
    }
    function ac() {
        j.className = "showme header-black";
        an.className = "showme footer-black"
    }
    function aw(ay, ax) {
        ab = true;
        T = 0;
        av = 0;
        P = af = ay
    }
    function C(ay, ax) {
        if (!ab) {
            return
        }
        av = T = (ay - P);
        P = ay
    }
    function d() {
        if (!ab) {
            return
        }
        ab = false
    }
    function S(ay) {
        if (Math.abs(av) > 10) {
            return
        }
        var aA = ay.currentTarget.getAttribute("data-id") | 0
          , ax = o[aA].bg
          , az = ConfigModel.configArr[ax].poster.id;
        if (az == "lock") {
            return
        }
        L = true;
        T = 0;
        Address.goSection(az)
    }
    function Y(ax) {
        var ay, az;
        for (ay = 0; ay < F; ay++) {
            az = o[ay];
            if (az.bg == ax) {
                return ay
            }
        }
        return 0
    }
    function h(az) {
        var aA = ConfigModel.convertIdToOrder(az)
          , aC = Y(aA)
          , aB = o[aC].no
          , ay = o[aC].item
          , ax = E[aC];
        ar = aC;
        o[aC].click = 1;
        x.pos = f.posArr[aB].pos;
        TweenLite.to(x, 0.6, {
            pos: 270,
            ease: Cubic.easeOut,
            onUpdate: M,
            onUpdateParams: [aB]
        });
        k = ay;
        ConfigModel.load(aB, aA, ax, ay);
        ConfigModel.isWhite = (ConfigModel.configArr[aA].poster.white == 1) ? 1 : 0;
        if (ConfigModel.isWhite == 1) {
            Address.whiteLeft()
        } else {
            Address.blackLeft()
        }
        TweenLite.delayedCall(0.42, B, [ax])
    }
    function B(ax) {
        if (ConfigModel.isWhite == 1) {
            Address.whiteTop();
            ax.className = "item-txt white"
        } else {
            ax.className = "item-txt black"
        }
    }
    function M(az) {
        var ay = x.pos, aA, ax;
        for (ax = 0; ax < b; ax++) {
            aA = f.posArr[ax];
            I(aA, ay - (ak * (az - ax)), ax)
        }
    }
    function K() {
        if (L || aj) {
            return
        }
        requestAnimationFrame(K);
        aa()
    }
    function aa() {
        var az, ax, ay;
        T = T * 0.9;
        az = f.posArr[0];
        ay = (az.pos + (T * 0.1));
        for (ax = 0; ax < b; ax++) {
            az = f.posArr[ax];
            I(az, ay + (ak * ax), ax)
        }
    }
    function I(aD, aA, aC) {
        aA = (aA + 360) % 360;
        aD.pos = aA;
        if (aA > 10 && aA < 170) {
            if (aD.use == 1) {
                aD.use = 0;
                if (aD.item != null ) {
                    aD.item.use = 0;
                    aD.item.bg = -1;
                    A(aD.item);
                    aD.item = null 
                }
            }
        } else {
            if (aD.use == 0 || aD.item == null ) {
                aD.use = 1;
                var aB, az, ax, ay;
                if (aA > 170 && aA < 270) {
                    ax = 1;
                    ay = -1
                } else {
                    ax = -1;
                    ay = 1
                }
                az = f.posArr[n(aC + ax, b)];
                aB = n(az.cur + ay, al);
                aD.cur = aB;
                aD.item = aq(aC, aB)
            }
            if (aD.item != null ) {
                am(aD.item, aA)
            }
        }
    }
    function n(ay, ax) {
        return (ay + (ax * (Math.abs((ay / 10) | 0) + 1))) % ax
    }
    function aq(aB, aA) {
        var az, ay, ax, aC;
        for (ay = 0; ay < Z; ay++) {
            az = o[ay];
            if (az.use == 0) {
                az.use = 1;
                az.no = aB;
                az.bg = aA;
                ax = ConfigModel.imgArr[aA] + "_c.png";
                aC = ConfigModel.configArr[aA].poster;
                az.item.style.background = aC.itemcolor + " url(" + ax + ") no-repeat";
                g[ay].innerHTML = (aC.title).toLowerCase();
                m[ay].innerHTML = aC.date;
                return az
            }
        }
    }
    function A(ax) {
        ax.item.style[u] = "translate3d(-500px, -500px, 0px) rotate(0deg)"
    }
    function am(aA, aC) {
        var aB = 270 - aC
          , ax = Math.abs(aB)
          , ay = 100 - ax | 0
          , aD = 1 - (ax * 0.006)
          , az = X(aC + (aB * aB * aB * aB * aB * 5e-9));
        aA.item.style[u] = "translate3d(" + az.x + "px, " + az.y + "px, 0px) rotate(" + (aC + 90) + "deg) scale(" + aD + ")";
        if (aA.click == 1) {
            aA.item.style.zIndex = 110
        } else {
            aA.item.style.zIndex = ay
        }
    }
    function X(aB) {
        var aA = Math.cos(aB * U)
          , ax = Math.sin(aB * U)
          , az = (aA) * ai + R - z
          , ay = (ax) * ai + Q - H;
        return {
            x: az,
            y: ay
        }
    }
    f.init = V;
    f.dispose = i;
    f.pause = O;
    f.resume = ap;
    f.changeSection = h;
    f.backToHome = ae;
    f.endBackToHome = t;
    f.circlePos = X;
    f.initBackHome = q;
    return f
}
)();
var Contents = Contents || (function() {
    var h = Math.PI / 180, t = CMDetect.IMG_HALF_W, x = CMDetect.IMG_HALF_H, K = CMDetect.IMG_W, b = CMDetect.IMG_H, L = CMDetect.isTranslate3d, o, C, f, d, G, a, e, Q = 0, i, y, H, T, D, g, F = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
    if (CMDetect.isFirefox && CMDetect.isRetina) {
        L = false
    }
    function M(Y, W, V, X, U) {
        if (C == null ) {
            C = document.getElementById("load-con");
            f = document.getElementById("poster-big");
            d = document.getElementById("poster-con");
            G = document.getElementById("detail-con");
            a = document.getElementById("mask");
            e = document.getElementById("contents")
        }
        g = U;
        StageController.addResize("contents", I);
        T = V;
        D = X;
        if (L) {
            if (o == null ) {
                o = new PerspectiveTransform(a,K,b,true)
            }
            A(Y, W)
        } else {
            z(Y, W)
        }
    }
    function I() {
        var Y = StageController.stageHeight
          , U = StageController.stageWidth
          , Z = Y - 180
          , X = (K * (Z / b)) | 0;
        if (X > 700) {
            X = 700;
            Z = 986
        }
        if (X > U - 340) {
            X = U - 340;
            Z = (b * (X / K)) | 0
        }
        var W = U - X >> 1
          , V = ((Y - Z) >> 1) + 2;
        F.x = W;
        F.y = V;
        F.w = X;
        F.h = Z;
        f.style.left = W + "px";
        f.style.top = V + "px";
        f.style.width = X + "px";
        f.style.height = Z + "px";
        C.style.width = U + "px";
        C.style.height = Y + "px"
    }
    function c() {
        if (Q == 0) {
            CircleAniamtion.pause()
        } else {
            g.pause()
        }
    }
    function m() {
        if (Q == 0) {
            CircleAniamtion.resume()
        } else {
            g.resume()
        }
        Address.able()
    }
    function p() {
        r(F.x, F.y, F.x + F.w, F.y, F.x, F.y + F.h, F.x + F.w, F.y + F.h);
        a.style.display = "block";
        d.style.display = "none";
        var X = Home.posArr[i].pos
          , W = Home.circlePos(X)
          , U = X + 90
          , V = E(W, U);
        B(V.topLeft.x, V.topLeft.y, V.topRight.x, V.topRight.y, V.bottomLeft.x, V.bottomLeft.y, V.bottomRight.x, V.bottomRight.y, O)
    }
    function j() {
        a.style.display = "block";
        d.style.display = "none";
        TweenLite.set(a, {
            css: {
                x: F.x,
                y: F.y,
                width: F.w,
                height: F.h
            }
        });
        var X = Home.posArr[i].pos
          , W = Home.circlePos(X)
          , U = X + 90
          , V = E(W, U);
        TweenLite.to(a, 0.8, {
            delay: 0.1,
            css: {
                x: V.topLeft.x,
                y: V.topLeft.y,
                width: 220,
                height: 310
            },
            ease: Expo.easeInOut,
            onComplete: O
        })
    }
    function S() {
        g.pause();
        var Z = Home.posArr[i].pos
          , Y = Home.circlePos(Z)
          , W = Z + 90
          , X = E(Y, W)
          , V = X.topLeft.x
          , U = X.topLeft.y;
        TweenLite.to(e, 0.6, {
            css: {
                x: V,
                y: U,
                width: 220,
                height: 310
            },
            ease: Expo.easeOut,
            onComplete: O
        });
        TweenLite.to(C, 0.6, {
            css: {
                x: -V,
                y: -U
            },
            ease: Expo.easeOut
        });
        CloseButton.remove();
        ShareButtons.remove();
        Address.blackTop()
    }
    function q() {
        Address.unable();
        Home.initBackHome();
        if (Q == 1) {
            TweenLite.delayedCall(0.1, S);
            Home.backToHome()
        } else {
            CircleAniamtion.cancel();
            CloseButton.hide();
            ShareButtons.hide();
            if (L) {
                p()
            } else {
                j()
            }
        }
    }
    function O() {
        TweenLite.to(e, 0.2, {
            css: {
                autoAlpha: 0
            },
            ease: Cubic.easeIn,
            onComplete: u
        });
        if (Q == 0) {
            Home.backToHome();
            TweenLite.delayedCall(0.1, Address.blackTop)
        }
    }
    function u() {
        StageController.removeResize("contents");
        g.dispose();
        d.style.display = "none";
        C.innerHTML = "";
        C.style.display = "none";
        G.style.display = "block";
        e.style.backgroundColor = "transparent";
        TweenLite.set(e, {
            css: {
                autoAlpha: 1,
                x: 0,
                y: 0,
                width: "100%",
                height: "100%"
            }
        });
        e.style.display = "none";
        TweenLite.set(d, {
            css: {
                x: 0
            }
        });
        TweenLite.set(C, {
            css: {
                x: StageController.stageWidth,
                y: 0
            }
        });
        Home.endBackToHome()
    }
    function z(Y, V) {
        var Z = Home.posArr[Y].pos
          , X = Home.circlePos(Z)
          , U = Z + 90
          , W = E(X, U);
        N(Y, V);
        TweenLite.set(a, {
            css: {
                x: W.topLeft.x,
                y: W.topLeft.y,
                width: 220,
                height: 310
            }
        });
        v()
    }
    function v() {
        TweenLite.to(D, 0.5, {
            css: {
                autoAlpha: 0
            },
            ease: Cubic.easeIn
        });
        TweenLite.to(a, 0.8, {
            delay: 0.1,
            css: {
                x: F.x,
                y: F.y,
                width: F.w,
                height: F.h
            },
            ease: Expo.easeInOut,
            onComplete: R
        })
    }
    function N(X, W) {
        var Y = ConfigModel.configArr[W].poster
          , U = Y.itemcolor
          , V = ConfigModel.svgHeader + Y.svg + ConfigModel.svgTxt + "</svg>";
        Q = 0;
        i = X;
        y = W;
        e.style.display = "block";
        f.style.backgroundColor = U;
        f.innerHTML = V;
        a.style.backgroundColor = U;
        a.innerHTML = V;
        a.style.display = "block"
    }
    function A(Y, V) {
        var Z = Home.posArr[Y].pos
          , X = Home.circlePos(Z)
          , U = Z + 90
          , W = E(X, U);
        N(Y, V);
        r(W.topLeft.x, W.topLeft.y, W.topRight.x, W.topRight.y, W.bottomLeft.x, W.bottomLeft.y, W.bottomRight.x, W.bottomRight.y);
        TweenLite.delayedCall(0.1, s)
    }
    function s() {
        B(F.x, F.y, F.x + F.w, F.y, F.x, F.y + F.h, F.x + F.w, F.y + F.h, R);
        TweenLite.to(D, 0.3, {
            css: {
                autoAlpha: 0
            },
            ease: Cubic.easeOut
        })
    }
    function R() {
        var U = ConfigModel.configArr[y].poster.bgcolor;
        e.style.display = "block";
        e.style.backgroundColor = U;
        TweenLite.set(D, {
            css: {
                autoAlpha: 1
            }
        });
        Home.dispose();
        a.style.display = "none";
        d.style.display = "block";
        C.innerHTML = H;
        H = null ;
        T.className = "item-txt";
        var V = 0.2;
        if (CMDetect.isDevice) {
            V = 0.4
        }
        TweenLite.delayedCall(V, k)
    }
    function k() {
        ShareButtons.show(y);
        CloseButton.show(w);
        TweenLite.delayedCall(0.45, J)
    }
    function J() {
        g.init(C);
        CircleAniamtion.show(l);
        Address.able()
    }
    function l() {
        Address.unable();
        Q = 1;
        C.style.display = "block";
        TweenLite.set(C, {
            css: {
                x: StageController.stageWidth
            }
        });
        TweenLite.to(d, 1, {
            css: {
                x: -StageController.stageWidth
            },
            ease: Expo.easeInOut
        });
        TweenLite.to(C, 1, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Expo.easeInOut,
            onComplete: n
        })
    }
    function n() {
        G.style.display = "none";
        g.start();
        Address.able();
        if (CMDetect.isPaused) {
            c()
        }
    }
    function E(W, U) {
        var V = {
            topLeft: {
                x: 0,
                y: 0
            },
            topRight: {
                x: 0,
                y: 0
            },
            bottomLeft: {
                x: 0,
                y: 0
            },
            bottomRight: {
                x: 0,
                y: 0
            }
        };
        V.topLeft = P(W.x + t, W.y + x, W.x, W.y, U * h);
        V.topRight = P(W.x + t, W.y + x, W.x + K, W.y, U * h);
        V.bottomLeft = P(W.x + t, W.y + x, W.x, W.y + b, U * h);
        V.bottomRight = P(W.x + t, W.y + x, W.x + K, W.y + b, U * h);
        return V
    }
    function r(V, ab, U, aa, Z, Y, X, W) {
        o.topLeft.x = V;
        o.topLeft.y = ab;
        o.topRight.x = U;
        o.topRight.y = aa;
        o.bottomLeft.x = Z;
        o.bottomLeft.y = Y;
        o.bottomRight.x = X;
        o.bottomRight.y = W;
        o.update()
    }
    function B(ai, af, ae, ab, ad, ac, ah, ag, V) {
        var aa = 0.1
          , Z = 0.3
          , Y = 0.2
          , X = 0.4
          , U = 0.4
          , W = Quad.easeOut;
        TweenLite.to(o.topLeft, U, {
            delay: aa,
            x: ai,
            y: af,
            ease: W,
            onUpdate: function() {
                o.update()
            }
        });
        TweenLite.to(o.topRight, U, {
            delay: Z,
            x: ae,
            y: ab,
            ease: W,
            onUpdate: function() {
                o.update()
            }
        });
        TweenLite.to(o.bottomLeft, U, {
            delay: Y,
            x: ad,
            y: ac,
            ease: W,
            onUpdate: function() {
                o.update()
            }
        });
        TweenLite.to(o.bottomRight, U, {
            delay: X,
            x: ah,
            y: ag,
            ease: W,
            onUpdate: function() {
                o.update()
            },
            onComplete: V
        })
    }
    function w(U) {
        Address.goHome()
    }
    function P(V, aa, X, W, U) {
        var Z = Math.cos(U) * (X - V) - Math.sin(U) * (W - aa) + V
          , Y = Math.sin(U) * (X - V) + Math.cos(U) * (W - aa) + aa;
        return {
            x: Z,
            y: Y
        }
    }
    return {
        init: M,
        pause: c,
        resume: m,
        changeHome: q
    }
}
)();
var About = About || (function() {
    var y, w, d, i, b, h, q, f, n, a, s = 70, g;
    function t() {
        y = document.getElementById("root");
        w = document.getElementById("about");
        d = document.getElementById("about-close-bt");
        i = $(d);
        b = document.getElementById("about-contents");
        h = b.getElementsByTagName("h1")[0];
        q = $(h);
        f = b.getElementsByTagName("h2")[0];
        n = b.getElementsByTagName("p")[0];
        a = b.getElementsByClassName("copyright")[0];
        g = b.getElementsByClassName("press")[0];
        w.style.display = "block";
        if (CMDetect.isMobile) {
            s = 140
        }
        CMUtiles.removeDom(b);
        CMUtiles.removeDom(w)
    }
    function x(A) {
        p();
        TweenLite.set(w, {
            css: {
                autoAlpha: 0
            }
        });
        TweenLite.to(w, 0.4, {
            delay: 0.1,
            css: {
                autoAlpha: 1
            },
            onComplete: e,
            onStart: Address.whiteTop
        });
        if (A == 1) {
            TweenLite.set(d, {
                css: {
                    x: s
                }
            });
            TweenLite.to(d, 0.35, {
                delay: 2,
                css: {
                    x: 0
                },
                ease: Back.easeOut
            })
        }
    }
    function p() {
        y.appendChild(w);
        w.appendChild(b);
        h.innerHTML = "";
        TweenLite.set(f, {
            css: {
                opacity: 0,
                y: 10
            }
        });
        TweenLite.set(n, {
            css: {
                opacity: 0,
                y: 10
            }
        });
        TweenLite.set(a, {
            css: {
                opacity: 0,
                y: 10
            }
        });
        TweenLite.set(g, {
            css: {
                opacity: 0,
                y: 10
            }
        });
        r()
    }
    function r() {
        i.on("click", c)
    }
    function u() {
        i.off("click", c)
    }
    function e() {
        if (CMDetect.isDevice) {
            q.shuffleLetters({
                text: "Form Follows Function",
                step: 16,
                fps: 25
            })
        } else {
            q.shuffleLetters({
                text: "Form Follows Function",
                step: 26,
                fps: 32
            })
        }
        TweenLite.delayedCall(0.7, o)
    }
    function o() {
        TweenLite.to(f, 0.4, {
            css: {
                opacity: 1,
                y: 0
            }
        });
        TweenLite.to(n, 0.4, {
            delay: 0.15,
            css: {
                opacity: 1,
                y: 0
            }
        });
        TweenLite.to(a, 0.4, {
            delay: 0.3,
            css: {
                opacity: 1,
                y: 0
            }
        });
        TweenLite.to(g, 0.4, {
            delay: 0.45,
            css: {
                opacity: 1,
                y: 0
            },
            onComplete: v
        })
    }
    function v() {
        Address.able()
    }
    function m(A) {
        u();
        TweenLite.to(w, 0.3, {
            css: {
                autoAlpha: 0
            },
            onComplete: j,
            onCompleteParams: [A]
        })
    }
    function j(A) {
        CMUtiles.removeDom(b);
        CMUtiles.removeDom(w);
        A()
    }
    function k() {
        p();
        TweenLite.delayedCall(0.1, e)
    }
    function z() {
        Address.unable();
        u();
        TweenLite.to(b, 0.2, {
            css: {
                autoAlpha: 0
            },
            onComplete: l
        })
    }
    function l() {
        CMUtiles.removeDom(b);
        TweenLite.to(b, 0, {
            css: {
                autoAlpha: 1
            }
        })
    }
    function c(A) {
        Address.closePopup()
    }
    return {
        init: t,
        show: x,
        hide: m,
        changeShow: k,
        changeHide: z
    }
}
)();
var ScreenSaver = ScreenSaver || (function() {
    var A, N, p, d, D, j, k, q, n, u, l, i, M, K, z, f, v, H = false, s, r, C = '<div id="ss-prev-block" class="ss-button-arrow"></div><div id="ss-next-block" class="ss-button-arrow"></div><div id="ss-prev" class="buttons ss-button-arrow"></div><div id="ss-next" class="buttons ss-button-arrow"></div><div id="ss-display"><div id="ss-canvas-mask"></div><canvas id="ss-canvas"></canvas></div><ul><li id="ss-button-mac">FOR MACINTOSH</li><li id="ss-button-win">FOR WINDOWS</li></ul><p>You need <a href="http://www.adobe.com/go/getflashplayer" target="_blank">Adobe Flash Player</a> 10.1 or higher to install this screensaver.</p>';
    function J() {
        A = document.getElementById("root");
        N = document.getElementById("about");
        p = $("#about-close-bt");
        d = document.createElement("div");
        d.id = "screen-contents";
        N.appendChild(d);
        d.innerHTML = C;
        i = document.getElementById("ss-display");
        M = d.getElementsByTagName("ul")[0];
        K = d.getElementsByTagName("p")[0];
        D = $("#ss-prev");
        j = $("#ss-next");
        k = document.getElementById("ss-prev-block");
        q = document.getElementById("ss-next-block");
        n = $("#ss-button-mac");
        u = $("#ss-button-win");
        s = document.getElementById("ss-canvas");
        s.width = 441;
        s.height = 277;
        r = s.getContext("2d");
        CMUtiles.removeDom(d)
    }
    function B(O) {
        z = Address.curScreenSaver;
        f = ConfigModel.convertSaverIdToOrder(z);
        v = ConfigModel.screensaverTotal;
        A.appendChild(N);
        TweenLite.set(N, {
            css: {
                autoAlpha: 0
            }
        });
        TweenLite.to(N, 0.4, {
            delay: 0.1,
            css: {
                autoAlpha: 1
            },
            onStart: Address.whiteTop
        });
        F();
        if (O == 1) {
            TweenLite.to(p, 0, {
                css: {
                    x: 70
                }
            });
            TweenLite.to(p, 0.35, {
                delay: 0.4,
                css: {
                    x: 0
                },
                ease: Back.easeOut
            })
        }
        g()
    }
    function F() {
        N.appendChild(d);
        TweenLite.set(i, {
            css: {
                autoAlpha: 0,
                y: 14
            }
        });
        TweenLite.to(i, 0.4, {
            delay: 0.3,
            css: {
                autoAlpha: 1,
                y: 4
            }
        });
        TweenLite.set(M, {
            css: {
                autoAlpha: 0,
                y: 10
            }
        });
        TweenLite.to(M, 0.4, {
            delay: 0.5,
            css: {
                autoAlpha: 1,
                y: 0
            }
        });
        TweenLite.set(K, {
            css: {
                autoAlpha: 0,
                y: 10
            }
        });
        TweenLite.to(K, 0.4, {
            delay: 0.65,
            css: {
                autoAlpha: 1,
                y: 0
            }
        });
        var O, P;
        if (f == 0) {
            O = 0.2;
            P = 1;
            k.style.display = "block";
            q.style.display = "none"
        } else {
            if (f == v - 1) {
                O = 1;
                P = 0.2;
                k.style.display = "none";
                q.style.display = "block"
            } else {
                O = 1;
                P = 1;
                k.style.display = "none";
                q.style.display = "none"
            }
        }
        TweenLite.set(D, {
            css: {
                autoAlpha: 0,
                x: -10
            }
        });
        TweenLite.set(j, {
            css: {
                autoAlpha: 0,
                x: 10
            }
        });
        TweenLite.to(D, 0.4, {
            delay: 0.8,
            css: {
                autoAlpha: O,
                x: 0
            }
        });
        TweenLite.to(j, 0.4, {
            delay: 0.8,
            css: {
                autoAlpha: P,
                x: 0
            },
            onComplete: h
        });
        ScreenDraw.drawFirst(f, r)
    }
    function h() {
        Address.able();
        w();
        H = false;
        requestAnimationFrame(I)
    }
    function I(O) {
        if (H) {
            return
        }
        requestAnimationFrame(I);
        ScreenDraw.draw(O)
    }
    function b() {
        H = true;
        ScreenDraw.dispose();
        z = Address.curScreenSaver;
        f = ConfigModel.convertSaverIdToOrder(z);
        w();
        ScreenDraw.drawSecond(f, r);
        TweenLite.delayedCall(0.4, h)
    }
    function y() {
        var O = f - 1
          , P = ConfigModel.screensaverArr[O].item.id;
        Address.goScreenSaver(P)
    }
    function e() {
        var O = f + 1
          , P = ConfigModel.screensaverArr[O].item.id;
        Address.goScreenSaver(P)
    }
    function w() {
        if (f == 0) {
            TweenLite.to(D, 0.2, {
                css: {
                    autoAlpha: 0.2
                }
            });
            TweenLite.to(j, 0.2, {
                css: {
                    autoAlpha: 1
                }
            });
            k.style.display = "block";
            q.style.display = "none"
        } else {
            if (f == v - 1) {
                TweenLite.to(D, 0.2, {
                    css: {
                        autoAlpha: 1
                    }
                });
                TweenLite.to(j, 0.2, {
                    css: {
                        autoAlpha: 0.2
                    }
                });
                k.style.display = "none";
                q.style.display = "block"
            } else {
                TweenLite.to(D, 0.2, {
                    css: {
                        autoAlpha: 1
                    }
                });
                TweenLite.to(j, 0.2, {
                    css: {
                        autoAlpha: 1
                    }
                });
                k.style.display = "none";
                q.style.display = "none"
            }
        }
    }
    function G(O) {
        H = true;
        a();
        TweenLite.to(N, 0.3, {
            css: {
                autoAlpha: 0
            },
            onComplete: o,
            onCompleteParams: [O]
        })
    }
    function o(O) {
        CMUtiles.removeDom(d);
        CMUtiles.removeDom(N);
        ScreenDraw.dispose();
        O()
    }
    function x() {
        Address.closePopup()
    }
    function g() {
        p.on("click", x);
        D.on("click", y);
        j.on("click", e);
        n.on("click", m);
        u.on("click", t)
    }
    function a() {
        p.off("click", x);
        D.off("click", y);
        j.off("click", e);
        n.off("click", m);
        u.off("click", t)
    }
    function E() {
        z = Address.curScreenSaver;
        f = ConfigModel.convertSaverIdToOrder(z);
        v = ConfigModel.screensaverTotal;
        A.appendChild(N);
        A.appendChild(d);
        TweenLite.set(d, {
            css: {
                autoAlpha: 0
            }
        });
        TweenLite.to(d, 0.4, {
            delay: 0.2,
            css: {
                autoAlpha: 1
            }
        });
        F();
        g()
    }
    function L() {
        Address.unable();
        H = true;
        a();
        TweenLite.to(d, 0.2, {
            css: {
                autoAlpha: 0
            },
            onComplete: c
        })
    }
    function c() {
        CMUtiles.removeDom(d);
        ScreenDraw.dispose();
        TweenLite.set(d, {
            css: {
                autoAlpha: 1
            }
        })
    }
    function m() {
        var O = ConfigModel.screensaverArr[f].item.mac;
        window.open(O)
    }
    function t() {
        var O = ConfigModel.screensaverArr[f].item.win;
        window.open(O)
    }
    return {
        init: J,
        show: B,
        hide: G,
        change: b,
        changeShow: E,
        changeHide: L
    }
}
)();
var ScreenDraw = ScreenDraw || (function() {
    var b, n, e, i = 441, d = 277, h, g = [{
        h: 201,
        s: 68,
        l: 47
    }, {
        h: 0,
        s: 0,
        l: 7
    }, {
        h: 200,
        s: 100,
        l: 35
    }, {
        h: 0,
        s: 0,
        l: 87
    }], c, k;
    function f(q, p) {
        n = q;
        b = p;
        switch (n) {
        case 0:
            h = new SSSheeps(b,i,d);
            break;
        case 1:
            h = new SSScream(b,i,d);
            break;
        case 2:
            h = new SSWiper(b,i,d);
            break;
        case 3:
            h = new SSRain(b,i,d);
            break
        }
        b.fillStyle = "hsl(" + g[n].h + ", " + g[n].s + "%, " + g[n].l + "%)";
        b.fillRect(0, 0, i, d)
    }
    function m(q, p) {
        e = n;
        n = q;
        b = p;
        switch (n) {
        case 0:
            h = new SSSheeps(b,i,d);
            break;
        case 1:
            h = new SSScream(b,i,d);
            break;
        case 2:
            h = new SSWiper(b,i,d);
            break;
        case 3:
            h = new SSRain(b,i,d);
            break
        }
        c = g[e];
        k = {
            l: c.l
        };
        b.fillStyle = "hsl(" + c.h + ", " + c.s + "%, " + k.l + "%)";
        b.fillRect(0, 0, i, d);
        TweenLite.killTweensOf(c);
        TweenLite.to(k, 0.2, {
            l: 0,
            onUpdate: a,
            onComplete: j
        })
    }
    function j() {
        c = g[n];
        k = {
            l: 0
        };
        b.fillStyle = "hsl(" + c.h + ", " + c.s + "%, " + k.l + "%)";
        b.fillRect(0, 0, i, d);
        TweenLite.to(k, 0.2, {
            l: c.l,
            onUpdate: a
        })
    }
    function a() {
        b.fillStyle = "hsl(" + c.h + ", " + c.s + "%, " + k.l + "%)";
        b.fillRect(0, 0, i, d)
    }
    function l(p) {
        h.loop(p)
    }
    function o() {
        h.dispose();
        h = null 
    }
    return {
        drawSecond: m,
        drawFirst: f,
        draw: l,
        dispose: o
    }
}
)();
var SSRain = function(l, h, g) {
    var a = l, f = h, b = g, d = 30, j = [], c;
    function k() {
        j = [];
        var m, n;
        for (m = 0; m < d; m++) {
            n = new RainmenItemsSS(a,f,b);
            j[m] = n
        }
        c = -1
    }
    function e(q) {
        if (!c) {
            c = q
        }
        var m = q
          , p = m - c;
        if (p > 20) {
            c = m;
            a.fillStyle = "rgb(221, 221, 221)";
            a.fillRect(0, 0, f, b);
            var n, o;
            for (n = 0; n < d; n++) {
                o = j[n];
                o.loop()
            }
        }
    }
    function i() {
        a = null ;
        var m, n;
        for (m = 0; m < d; m++) {
            n = j[m];
            n.dispose()
        }
        j = []
    }
    k();
    return {
        loop: e,
        dispose: i
    }
}
;
var SSWiper = function(p, m, w) {
    var l = p, c = m, i = w, k, e = 100, f = 32, t = e + f, s = 11, n = 26, u = 0.1, a = 0.4, x = 0.96, d = {
        no: 0
    }, j = 0, o = ["T", "Y", "P", "O", "G", "R", "H"], g = o.length;
    function q() {
        r()
    }
    function v(z) {
        l.fillStyle = "rgb(0, 116, 176)";
        l.fillRect(0, 0, c, i);
        h();
        b()
    }
    function y() {
        l = null 
    }
    function r() {
        k = [];
        var C, z;
        for (var B = 0; B < e; B++) {
            C = new WiperTypo(l,n,x,u,c,i,o,g,20,0,8);
            k[B] = C
        }
        for (var A = 0; A < f; A++) {
            z = new WiperLine(l,A,s,c,i);
            k[B + A] = z
        }
    }
    function h() {
        var B, A, L, J, H, I, C, G, E, z, K, F, D;
        for (F = 0; F < t - 1; F++) {
            B = k[F];
            for (D = F + 1; D < t; D++) {
                A = k[D];
                L = A.x - B.x;
                J = A.y - B.y;
                H = Math.sqrt(L * L + J * J);
                I = B.radius + A.radius;
                if (H < I) {
                    C = Math.atan2(J, L);
                    G = B.x + Math.cos(C) * I;
                    E = B.y + Math.sin(C) * I;
                    z = (G - A.x) * a;
                    K = (E - A.y) * a;
                    B.vx -= z;
                    B.vy -= K;
                    A.vx += z;
                    A.vy += K
                }
            }
        }
    }
    function b() {
        var A, z;
        j += 0.01;
        d.no = Math.abs(Math.sin(j));
        for (z = 0; z < t; z++) {
            A = k[z];
            A.draw();
            A.move(d.no)
        }
    }
    q();
    return {
        loop: v,
        dispose: y
    }
}
;
var SSScream = function(p, m, h) {
    var b = p, k, a, g = m, d = h, e, c, l, i;
    function o() {
        var q = document.getElementById("screen-contents");
        i = document.createElement("canvas");
        i.id = "ss-scream-color";
        i.className = "disabled";
        q.appendChild(i);
        i.width = g;
        i.height = d;
        k = i.getContext("2d");
        a = new Image();
        a.src = "contents/scream/screammonk.jpg";
        a.onload = j
    }
    function j() {
        e = a.width;
        c = a.height;
        var s = g / d
          , u = e / c
          , q = g
          , r = d
          , v = 0
          , t = 0;
        if (u < s) {
            q = (0.5 + (e * (d / c))) | 0;
            v = (0.5 + ((g - q) / 2)) | 0
        } else {
            r = (0.5 + (c * (g / e))) | 0;
            t = (0.5 + ((d - r) / 2)) | 0
        }
        k.fillStyle = "rgb(17, 17, 17)";
        k.fillRect(0, 0, g, d);
        k.drawImage(a, v, t, q, r);
        l = new TheScreamDraw();
        l.init(b, k, 0.2, 5, 2);
        l.resize(v, t, q, r, g, d)
    }
    function f(q) {
        l.loop()
    }
    function n() {
        CMUtiles.removeDom(i);
        b = null ;
        k = null ;
        a = null 
    }
    o();
    return {
        loop: f,
        dispose: n
    }
}
;
var SSSheeps = function(n, j, i) {
    var a = n, h = j, c = i, e = [], d, l = 0;
    function m() {
        d = -1;
        b()
    }
    function b() {
        f();
        TweenLite.delayedCall(1 + Math.random(), b)
    }
    function f() {
        var o, p;
        for (o = 0; o < l; o++) {
            p = e[o];
            if (!p.show) {
                p.reset();
                return
            }
        }
        p = new SheepItemsSS(a,h,c);
        e.push(p);
        l = e.length
    }
    function g(s) {
        if (!d) {
            d = s
        }
        var o = s
          , r = o - d;
        if (r > 34) {
            d = o;
            a.fillStyle = "rgb(37, 142, 204)";
            a.fillRect(0, 0, h, c);
            var p, q;
            for (p = 0; p < l; p++) {
                q = e[p];
                q.loop()
            }
        }
    }
    function k() {
        TweenLite.killDelayedCallsTo(b);
        a = null ;
        var o, p;
        for (o = 0; o < l; o++) {
            p = e[o];
            p.dispose()
        }
        e = []
    }
    m();
    return {
        loop: g,
        dispose: k
    }
}
;
(function(b) {
    function c() {
        this.init.apply(this, arguments)
    }
    c.prototype = {
        init: function(e, d, f) {
            this.mx = 0;
            this.ctx = e;
            this.sw = d;
            this.sh = f;
            this.img = new Image();
            this.img.src = "images/ss-rain.png";
            this.reset()
        },
        dispose: function() {
            this.img = null 
        },
        reset: function() {
            this.posX = CMUtiles.randomInteger(-20, this.sw + 20);
            this.posY = CMUtiles.randomInteger(97, 500) * -1;
            this.duration = CMUtiles.randomInteger(10, 3);
            var d = this.duration * 0.1;
            this.tw = 57 * d;
            this.th = 95 * d;
            this.duration = (this.duration / 4)
        },
        loop: function() {
            this.posY = (this.posY + this.duration);
            if (this.posY > this.sh || this.posX < -97 || this.posX > this.sw + 97) {
                this.reset();
                return
            }
            this.mx = this.mx * 0.995;
            this.posX += this.mx;
            this.ctx.drawImage(this.img, this.posX, this.posY, this.tw, this.th)
        }
    };
    b.RainmenItemsSS = c;
    function a() {
        this.init.apply(this, arguments)
    }
    a.prototype = {
        init: function(e, d, f) {
            this.show = false;
            this.ctx = e;
            this.sw = d;
            this.sh = f;
            this.tw = 77;
            this.th = 59;
            this.cur = 0;
            this.last = 8;
            this.ty = this.sh - 80;
            this.img = new Image();
            this.img.src = "images/sheep-ani-ss.png";
            this.reset()
        },
        dispose: function() {
            this.img = null ;
            this.show = false
        },
        reset: function() {
            this.speed = (0.5 + (Math.random() * (6 - 3) + 3)) | 0;
            this.tx = this.sw + 5;
            this.show = true
        },
        loop: function() {
            if (!this.show) {
                return
            }
            this.tx = this.tx - this.speed;
            if (this.tx < -100) {
                this.show = false
            } else {
                this.cur = (this.cur + 1) % this.last;
                var d = this.cur * 82;
                this.ctx.drawImage(this.img, d, 0, this.tw, this.th, this.tx, this.ty, this.tw, this.th)
            }
        }
    };
    b.SheepItemsSS = a
}
)(window);
var Address = Address || (function() {
    var w = {
        app: null ,
        curURL: null ,
        prevURL: null ,
        curSection: "",
        curScreenSaver: "",
        URL_HOME: "main",
        URL_SECTION: "section",
        URL_ABOUT: "about",
        URL_SCREENSAVER: "screensaver"
    };
    var L, P, Q, W, q, h, n, s, Y, v, d, e, ab, l, i, X, Z = true, m = {
        no: 0
    }, A = 1, H = -1, T = "", E = '<div id="foot-sharecon"></div><div id="foot-bigcon"><div id="foot-web-about">about fff project</div><div id="foot-dot-big">•</div><div id="foot-web-screen">screen saver</div></div><div id="foot-smallcon"><div id="foot-share" class="foot-share-full">share</div><div id="foot-dot">•</div><div id="foot-full" class="foot-full-full">fullscreen</div></div>', F = '<div id="foot-sharecon"></div><div id="foot-bigcon"><div id="foot-web-about">about fff project</div><div id="foot-dot-big">•</div><div id="foot-web-screen">screen saver</div></div><div id="foot-smallcon"><div id="foot-share-ie">share to sns</div></div>', t = '<div id="foot-touch">about fff project</div>', G = '<div id="loader"><div id="loading-txt">LOADING&nbsp;&nbsp;<span id="loading-num">0</span>%</div></div>';
    function U(ah) {
        var ae = 900;
        if (ah == "tablet") {
            ae = 600;
            CMDetect.isTablet = true;
            CMDetect.isDevice = true
        } else {
            if (ah == "phone") {
                ae = 600;
                CMDetect.isMobile = true;
                CMDetect.isDevice = true
            }
        }
        Q = document.getElementById("preloader");
        P = document.getElementById("block");
        L = document.getElementById("root");
        q = document.getElementById("footer");
        h = document.getElementById("header");
        $(L).append(G);
        if (CMDetect.isMobile) {
            L.className = "mobile"
        } else {
            if (CMDetect.isTablet) {
                L.className = "tablet"
            }
        }
        if (CMDetect.isDevice) {
            q.innerHTML = t;
            ab = $("#foot-touch")
        } else {
            if (CMDetect.isIE) {
                q.innerHTML = F;
                l = document.getElementById("foot-share-ie")
            } else {
                q.innerHTML = E;
                l = document.getElementById("foot-share");
                if (L.webkitRequestFullscreen) {
                    document.addEventListener("webkitfullscreenchange", function() {
                        if (document.webkitIsFullScreen) {
                            z()
                        } else {
                            y()
                        }
                    }
                    , false)
                } else {
                    if (L.mozRequestFullScreen) {
                        document.addEventListener("mozfullscreenchange", function() {
                            if (document.mozFullScreen) {
                                z()
                            } else {
                                y()
                            }
                        }
                        , false)
                    }
                }
                X = document.getElementById("foot-full");
                $(X).on("click", aa)
            }
            ab = $("#foot-web-about");
            i = $("#foot-web-screen");
            i.on("click", u);
            $(l).on("mouseenter", g).on("mouseleave", b);
            ShareTooltip.init(document.getElementById("foot-sharecon"));
            ScreenSaver.init()
        }
        W = document.getElementById("loading-num");
        StageController.init(ae);
        var ag = CloseButton.init();
        s = ag.right;
        CircleAniamtion.init(s, ag.close);
        n = ShareButtons.init();
        About.init();
        ab.on("click", O);
        hasher.changed.add(j);
        hasher.initialized.add(j);
        hasher.prependHash = "!/";
        var ad = ConfigModel.init()
          , af = ad.join("");
        Q.innerHTML = af;
        var ac = $(Q).imagesLoaded();
        ac.progress(function(aj, ai, ak, am) {
            var al = (ak.length + am.length) / ai.length;
            TweenLite.killTweensOf(m);
            TweenLite.to(m, 0.3, {
                no: al,
                onUpdate: D,
                ease: Cubic.easeOut
            })
        }
        );
        ac.always(function() {
            Q.innerHTML = "";
            ac = null 
        }
        );
        e = -1;
        Y = document.getElementById("fwa-motd");
        v = document.getElementById("fwa-sotd");
        d = document.getElementById("fwa-adobe");
        $("#fwa").on("click", B);
        R()
    }
    function D() {
        var ad = (m.no * 100) | 0;
        W.innerHTML = ad;
        if (ad == 100) {
            var ac = document.getElementById("loader");
            TweenLite.to(ac, 0.2, {
                delay: 0.3,
                css: {
                    autoAlpha: 0
                },
                ease: Cubic.easeOut,
                onComplete: o,
                onCompleteParams: [ac]
            })
        }
    }
    function o(ac) {
        CMUtiles.removeDom(ac);
        hasher.init();
        Home.init()
    }
    function R() {
        e = e + 1;
        if (e > 2) {
            e = 0
        }
        if (e == 0) {
            Y.className = "hide-fwa";
            v.className = "show-fwa"
        } else {
            if (e == 1) {
                v.className = "hide-fwa";
                d.className = "show-fwa"
            } else {
                d.className = "hide-fwa";
                Y.className = "show-fwa"
            }
        }
        TweenLite.delayedCall(7, R)
    }
    function B() {
        if (e == 0) {
            window.open("http://www.thefwa.com/site/form-follows-function")
        } else {
            if (e == 1) {
                window.open("http://www.thefwa.com/adobe/tcea/form-follows-function")
            } else {
                window.open("http://www.thefwa.com/mobile/form-follows-function")
            }
        }
    }
    function j(ae, ag) {
        if (!Z) {
            C();
            return
        }
        x();
        var ac = I(ae)
          , af = ac[0]
          , ad = ac[1];
        if (CMDetect.isDevice && af == w.URL_SCREENSAVER) {
            C();
            return
        }
        if (af == w.URL_SCREENSAVER) {
            w.curScreenSaver = ad
        } else {
            if (af == w.URL_SECTION) {
                w.curSection = ad
            }
        }
        if (w.curURL == af) {
            if (af == w.URL_SCREENSAVER) {
                ScreenSaver.change()
            } else {
                if (af == w.URL_SECTION) {}
            }
            return
        }
        w.prevURL = w.curURL;
        w.curURL = af;
        if (w.prevURL) {
            switch (w.curURL) {
            case w.URL_HOME:
                if (w.prevURL == w.URL_SECTION) {
                    Contents.changeHome()
                } else {
                    if (w.prevURL == w.URL_ABOUT) {
                        About.hide(Home.resume);
                        Address.blackTop()
                    } else {
                        ScreenSaver.hide(Home.resume);
                        Address.blackTop()
                    }
                }
                break;
            case w.URL_SECTION:
                w.curSection = ad;
                if (w.prevURL == w.URL_HOME) {
                    Home.changeSection(ad)
                } else {
                    if (w.prevURL == w.URL_ABOUT) {
                        About.hide(Contents.resume);
                        if (ConfigModel.isWhite == 0) {
                            Address.blackTop()
                        }
                    } else {
                        ScreenSaver.hide(Contents.resume);
                        if (ConfigModel.isWhite == 0) {
                            Address.blackTop()
                        }
                    }
                }
                break;
            case w.URL_ABOUT:
                if (w.prevURL == w.URL_HOME) {
                    T = w.prevURL;
                    Home.pause();
                    About.show(1)
                } else {
                    if (w.prevURL == w.URL_SECTION) {
                        T = w.prevURL;
                        Contents.pause();
                        About.show(0)
                    } else {
                        ScreenSaver.changeHide();
                        TweenLite.delayedCall(0.2, About.changeShow)
                    }
                }
                break;
            case w.URL_SCREENSAVER:
                w.curScreenSaver = ad;
                if (w.prevURL == w.URL_HOME) {
                    T = w.prevURL;
                    Home.pause();
                    ScreenSaver.show(1)
                } else {
                    if (w.prevURL == w.URL_SECTION) {
                        T = w.prevURL;
                        Contents.pause();
                        ScreenSaver.show(0)
                    } else {
                        About.changeHide();
                        TweenLite.delayedCall(0.2, ScreenSaver.changeShow)
                    }
                }
                break
            }
        }
    }
    function I(ae) {
        var ac = ae.split("/")
          , af = ac[0]
          , ad = ac[1];
        switch (af) {
        case w.URL_SECTION:
            break;
        case w.URL_ABOUT:
            break;
        case w.URL_SCREENSAVER:
            break;
        default:
            N(w.URL_HOME);
            af = w.URL_HOME;
            break
        }
        if (af == w.URL_SCREENSAVER) {
            ad = c(ad)
        } else {
            if (af == w.URL_SECTION) {
                ad = K(ad)
            }
        }
        return [af, ad]
    }
    function c(ad) {
        var ac = ConfigModel.screensaverID.indexOf(ad);
        if (ac > -1) {
            return ad
        } else {
            return ConfigModel.screensaverID[0]
        }
    }
    function K(ad) {
        var ac = ConfigModel.sectionID.indexOf(ad);
        if (ac > -1) {
            return ad
        } else {
            return ConfigModel.sectionID[0]
        }
    }
    function C() {
        switch (w.curURL) {
        case w.URL_SECTION:
            N(w.curURL + "/" + w.curSection);
            break;
        case w.URL_SCREENSAVER:
            N(w.curURL + "/" + w.curScreenSaver);
            break;
        default:
            N(w.curURL);
            break
        }
    }
    function N(ac) {
        hasher.changed.active = false;
        hasher.setHash(ac);
        hasher.changed.active = true
    }
    function r() {
        if (A == 0) {
            return
        }
        A = 0;
        h.className = "showme header-white";
        q.className = "showme footer-white"
    }
    function M() {
        if (A == 1) {
            return
        }
        A = 1;
        h.className = "showme header-black";
        q.className = "showme footer-black"
    }
    function p() {
        if (H == 0) {
            return
        }
        H = 0;
        n.className = "white";
        s.className = "right-pos white"
    }
    function k() {
        if (H == 1) {
            return
        }
        H = 1;
        n.className = "black";
        s.className = "right-pos black"
    }
    function aa(ac) {
        if (L.webkitRequestFullscreen) {
            if (document.webkitIsFullScreen) {
                document.webkitCancelFullScreen();
                y()
            } else {
                L.webkitRequestFullscreen();
                z()
            }
        } else {
            if (L.mozRequestFullScreen) {
                if (document.mozFullScreen) {
                    document.mozCancelFullScreen();
                    y()
                } else {
                    L.mozRequestFullScreen();
                    z()
                }
            }
        }
    }
    function z() {
        X.className = "foot-full-normal";
        l.className = "foot-share-normal";
        X.innerHTML = "exit fullscreen"
    }
    function y() {
        X.className = "foot-full-full";
        l.className = "foot-share-full";
        X.innerHTML = "fullscreen"
    }
    function g(ac) {
        ShareTooltip.show()
    }
    function b(ac) {
        ShareTooltip.hide()
    }
    function S() {
        hasher.setHash(w.URL_HOME)
    }
    function O(ac) {
        hasher.setHash(w.URL_ABOUT)
    }
    function u(ac) {
        hasher.setHash(w.URL_SCREENSAVER + "/" + (ConfigModel.screensaverArr[0].item.id))
    }
    function J(ac) {
        hasher.setHash(w.URL_SCREENSAVER + "/" + ac)
    }
    function V(ac) {
        hasher.setHash(w.URL_SECTION + "/" + ac)
    }
    function a() {
        if (T == w.URL_SECTION) {
            V(w.curSection)
        } else {
            S()
        }
    }
    function f() {
        Z = true;
        P.style.display = "none"
    }
    function x() {
        Z = false;
        P.style.display = "block"
    }
    w.init = U;
    w.able = f;
    w.unable = x;
    w.goHome = S;
    w.goSection = V;
    w.closePopup = a;
    w.goScreenSaver = J;
    w.whiteTop = r;
    w.blackTop = M;
    w.whiteLeft = p;
    w.blackLeft = k;
    return w
}
)();
var Sheeps = Sheeps || (function() {
    var k = false, c, n, i = [], o = 0, p, m, e = false, b, q = '<div id="sheepCon" class="contents-data chand-pick"></div>';
    function t(z) {
        z.innerHTML = q;
        p = document.getElementById("sheepCon");
        o = 0;
        i = [];
        StageController.addResize("sheeps", w)
    }
    function f() {
        k = false;
        e = false;
        m = -1;
        requestAnimationFrame(g);
        r();
        j()
    }
    function j() {
        if (k) {
            return
        }
        u();
        TweenLite.delayedCall(1 + Math.random(), j)
    }
    function u() {
        var z, A;
        for (z = 0; z < o; z++) {
            A = i[z];
            if (!A.show) {
                A.reset();
                return
            }
        }
        A = new TheSheep(p);
        i.push(A);
        o = i.length
    }
    function y() {
        StageController.removeResize("sheeps");
        TweenLite.killDelayedCallsTo(j);
        k = true;
        s();
        if (o == 0) {
            return
        }
        var z, A;
        for (z = 0; z < o; z++) {
            A = i[z];
            A.dispose()
        }
        i = [];
        o = 0;
        p = null 
    }
    function h() {
        k = true;
        s()
    }
    function a() {
        k = false;
        m = -1;
        requestAnimationFrame(g);
        r();
        j()
    }
    function w() {
        c = StageController.stageWidth;
        n = StageController.stageHeight;
        var z, A;
        for (z = 0; z < o; z++) {
            A = i[z];
            A.resize(n)
        }
    }
    function g(B) {
        if (k) {
            return
        }
        requestAnimationFrame(g);
        if (!m) {
            m = B
        }
        var z = B
          , A = z - m;
        if (A > 34) {
            m = z;
            v()
        }
    }
    function v() {
        var z, A;
        for (z = 0; z < o; z++) {
            A = i[z];
            A.loop()
        }
    }
    function r() {
        StageController.addDown("thesheep", d);
        StageController.addMove("thesheep", l);
        StageController.addUp("thesheep", x)
    }
    function s() {
        StageController.removeDown("thesheep");
        StageController.removeMove("thesheep");
        StageController.removeUp("thesheep")
    }
    function d(C, B) {
        var z, A;
        for (z = 0; z < o; z++) {
            A = i[z];
            if (A.hitTest(C, B)) {
                e = true;
                b = A;
                break
            }
        }
    }
    function l(A, z) {
        if (!e || !b) {
            return
        }
        b.drag(A, z)
    }
    function x() {
        e = false;
        if (b) {
            b.up();
            b = null 
        }
    }
    return {
        init: t,
        start: f,
        dispose: y,
        pause: h,
        resume: a
    }
}
)();
(function(b) {
    function a(c) {
        this.$con = c;
        this.cur = 0;
        this.last = 8;
        this.tx = 0;
        this.ty = 0;
        this.by = 0;
        this.targetY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.show = false;
        this.isPress = false;
        this.$dom = document.createElement("div");
        this.$dom.className = "sheeps";
        this.reset()
    }
    a.prototype = {
        hitTest: function(g, f) {
            var c = this.tx + 45
              , e = this.tx + 157
              , h = this.ty
              , d = this.ty + 100;
            if (g > c && g < e && f > h && f < d) {
                this.offsetX = 70;
                this.offsetY = 5;
                this.isPress = true;
                this.by = -127;
                return true
            }
            return false
        },
        drag: function(e, d) {
            var c = e - this.offsetX
              , f = d - this.offsetY;
            this.tx = c;
            this.ty = f;
            this.$dom.style[CMDetect.cssHead] = "translate3d(" + this.tx + "px, " + this.ty + "px, 0px)"
        },
        up: function() {
            this.isPress = false;
            this.targetY = (StageController.stageHeight - 220);
            this.by = 0
        },
        loop: function() {
            this.cur = (this.cur + 1) % this.last;
            var c = this.cur * 164;
            this.$dom.style.backgroundPosition = -c + "px " + this.by + "px";
            this.move()
        },
        move: function() {
            if (!this.show || this.isPress) {
                return
            }
            this.tx = this.tx - this.speed;
            if (this.tx < -200) {
                this.show = false;
                this.isPress = false;
                CMUtiles.removeDom(this.$dom)
            } else {
                if (this.ty != this.targetY) {
                    this.ty += (this.targetY - this.ty) * 0.32;
                    this.ty = this.ty | 0;
                    if (this.ty < this.targetY + 5 && this.ty > this.targetY - 5) {
                        this.ty = this.targetY
                    }
                }
                this.$dom.style[CMDetect.cssHead] = "translate3d(" + this.tx + "px, " + this.ty + "px, 0px)"
            }
        },
        resize: function(c) {
            if (this.isPress) {
                return
            }
            this.ty = this.targetY = (c - 220);
            this.$dom.style[CMDetect.cssHead] = "translate3d(" + this.tx + "px, " + this.ty + "px, 0px)"
        },
        reset: function() {
            this.cur = 0;
            this.show = true;
            this.isPress = false;
            this.speed = (0.5 + (Math.random() * (12 - 5) + 5)) | 0;
            this.tx = StageController.stageWidth + 20;
            this.$dom.style.zIndex = this.speed;
            this.$dom.style[CMDetect.cssHead] = "translate3d(" + this.tx + "px, " + this.ty + "px, 0px)";
            this.resize(StageController.stageHeight);
            this.$con.appendChild(this.$dom)
        },
        dispose: function() {
            this.show = false;
            CMUtiles.removeDom(this.$dom);
            this.$dom = null ;
            this.isPress = false
        }
    };
    b.TheSheep = a
}
)(window);
var TheScream = TheScream || (function() {
    var j = false, c, p, q, r, m, o, l, y, a, H, k, F, E, u, z, h, e, t = '<div class="contents-data chand-brush"><canvas id="scream-world"></canvas><canvas id="scream-world-color"></canvas></div>';
    function x(I) {
        I.innerHTML = t;
        j = false;
        z = false;
        h = false;
        q = document.getElementById("scream-world");
        m = document.getElementById("scream-world-color");
        l = new Image();
        l.src = "contents/scream/screammonk.jpg";
        l.onload = A;
        u = new TheScreamDraw();
        StageController.addResize("scream", B)
    }
    function A() {
        y = l.width;
        a = l.height;
        z = true;
        s()
    }
    function f() {
        h = true;
        s()
    }
    function s() {
        if (h && z) {
            B();
            u.init(r, o, 1, 20, 10);
            v()
        }
    }
    function D() {
        StageController.removeResize("scream");
        TweenLite.killDelayedCallsTo(G);
        j = true;
        q = null ;
        r = null ;
        m = null ;
        o = null ;
        l = null ;
        u = null ;
        w()
    }
    function i() {
        j = true;
        w();
        e = false
    }
    function b() {
        j = false;
        g();
        v()
    }
    function B() {
        j = true;
        c = StageController.stageWidth;
        p = StageController.stageHeight;
        q.width = c;
        q.height = p;
        m.width = c;
        m.height = p;
        r = q.getContext("2d");
        o = m.getContext("2d");
        var I = c / p
          , J = y / a;
        H = c;
        k = p;
        F = 0;
        E = 0;
        if (J < I) {
            H = (0.5 + (y * (p / a))) | 0;
            F = (0.5 + ((c - H) / 2)) | 0
        } else {
            k = (0.5 + (a * (c / y))) | 0;
            E = (0.5 + ((p - k) / 2)) | 0
        }
        o.fillStyle = "rgb(17, 17, 17)";
        o.fillRect(0, 0, c, p);
        o.drawImage(l, F, E, H, k);
        u.resize(F, E, H, k, c, p);
        if (h && z) {
            TweenLite.killDelayedCallsTo(G);
            TweenLite.delayedCall(0.2, G)
        }
    }
    function G() {
        j = false;
        g()
    }
    function g() {
        if (j) {
            return
        }
        requestAnimationFrame(g);
        if (e) {
            return
        }
        u.loop()
    }
    function v() {
        StageController.addDown("thescream", d);
        StageController.addMove("thescream", n);
        StageController.addUp("thescream", C)
    }
    function w() {
        StageController.removeDown("thescream");
        StageController.removeMove("thescream");
        StageController.removeUp("thescream")
    }
    function d(J, I) {
        e = true;
        u.mouseDraw(J, I)
    }
    function n(J, I) {
        if (!e) {
            return
        }
        u.mouseDraw(J, I)
    }
    function C() {
        e = false
    }
    return {
        init: x,
        start: f,
        dispose: D,
        pause: i,
        resume: b,
        resize: B
    }
}
)();
(function(b) {
    function a() {}
    a.prototype = {
        init: function(e, f, d, g, c) {
            this.scrCtx = e;
            this.colorCtx = f;
            this.lineWidth = d;
            this.ranMax = g;
            this.curveMax = c
        },
        resize: function(e, d, f, j, c, h) {
            this.sw = c;
            this.sh = h;
            this.tx1 = e;
            this.ty1 = d;
            this.tx2 = e + f;
            this.ty2 = d + j;
            this.num = 3;
            this.checkBounce = [];
            for (var g = 0; g < this.num; g++) {
                this.checkBounce[g] = {
                    x: CMUtiles.randomInteger(this.tx1, this.tx2),
                    y: CMUtiles.randomInteger(this.ty1, this.ty2)
                }
            }
        },
        loop: function() {
            var e = 100, d, c;
            for (d = 0; d < this.num; d++) {
                c = this.checkBounce[d];
                this.checkBounce[d] = this.draw(c);
                c = this.checkBounce[d];
                if (c.x > this.tx2 + e || c.x < this.tx1 - e || c.y > this.ty2 + e || c.y < this.ty1 - e) {
                    this.checkBounce[d] = {
                        x: CMUtiles.randomInteger(this.tx1, this.tx2),
                        y: CMUtiles.randomInteger(this.ty1, this.ty2)
                    }
                }
            }
        },
        draw: function(d) {
            var g = d.x, f = d.y, h = g, c = f, e;
            for (e = 0; e < 16; e++) {
                g = h;
                f = c;
                h = CMUtiles.randomInteger(h - this.ranMax, h + this.ranMax);
                c = CMUtiles.randomInteger(c - this.ranMax, c + this.ranMax);
                this.scrCtx.beginPath();
                this.scrCtx.lineWidth = this.lineWidth;
                this.scrCtx.strokeStyle = this.processImageData(this.colorCtx.getImageData(g - 2, f - 2, 4, 4).data);
                this.scrCtx.moveTo(g, f);
                this.scrCtx.bezierCurveTo(g, f + this.curveMax, h, f - this.curveMax, h, c);
                this.scrCtx.stroke()
            }
            return {
                x: h,
                y: c
            }
        },
        mouseDraw: function(h, g) {
            var f = h, e = g, j = f, c = e, d;
            for (d = 0; d < 16; d++) {
                f = j;
                e = c;
                j = CMUtiles.randomInteger(j - 10, j + 10);
                c = CMUtiles.randomInteger(c - 10, c + 10);
                this.scrCtx.beginPath();
                this.scrCtx.lineWidth = 3;
                this.scrCtx.strokeStyle = "rgb(17,17,17)";
                this.scrCtx.moveTo(f, e);
                this.scrCtx.bezierCurveTo(f, e + 5, j, e - 5, j, c);
                this.scrCtx.stroke();
                this.scrCtx.beginPath();
                this.scrCtx.lineWidth = 1;
                this.scrCtx.strokeStyle = this.processImageData(this.colorCtx.getImageData(f - 2, e - 2, 4, 4).data);
                this.scrCtx.moveTo(f, e);
                this.scrCtx.bezierCurveTo(f, e + 5, j, e - 5, j, c);
                this.scrCtx.stroke()
            }
        },
        processImageData: function(j) {
            var h = 0, f = 0, c = 0, e, k = j.length;
            for (e = 0; e < k; e += 4) {
                h += j[e];
                f += j[e + 1];
                c += j[e + 2]
            }
            h = (0.5 + (h / (j.length / 4))) | 0;
            f = (0.5 + (f / (j.length / 4))) | 0;
            c = (0.5 + (c / (j.length / 4))) | 0;
            return "rgb(" + h + "," + f + "," + c + ")"
        }
    };
    b.TheScreamDraw = a
}
)(window);
var wiperTypo = wiperTypo || (function() {
    var D = false, o, v, j, M, s, h = 350, G, z = 22, f, d, I = false, i = {
        no: 0
    }, q, a, C, A = 50, m = 0.1, K = 0.4, w = 0.96, L = ["T", "Y", "P", "O", "G", "R", "H"], J = L.length, B = '<div class="contents-data"><canvas id="wipertypo-world"></canvas><div id="wipertypo-cursor" class="chand-leftright"></div></div>';
    function F(O) {
        O.innerHTML = B;
        D = false;
        f = h + G;
        s = 0;
        j = document.getElementById("wipertypo-world");
        q = document.getElementById("wipertypo-cursor");
        if (CMDetect.isDevice) {
            if (CMDetect.isIpad) {
                h = 150
            } else {
                h = 120
            }
        }
        i.no = 0;
        a = -10;
        C = 1;
        StageController.addResize("wiper", u)
    }
    function y() {
        E();
        k()
    }
    function x() {
        StageController.removeResize("wiper");
        D = true;
        d = [];
        j = null ;
        M = null ;
        q = null ;
        c();
        I = false
    }
    function b() {
        D = true;
        c();
        I = false
    }
    function p() {
        D = false;
        E();
        k()
    }
    function u() {
        o = StageController.stageWidth;
        v = StageController.stageHeight;
        G = (v / z * 1.2) | 0;
        var O = 75;
        if (CMDetect.isDevice) {
            if (CMDetect.isIpad) {
                O = 60
            } else {
                O = 50
            }
        }
        if (G > O) {
            G = O
        }
        f = h + G;
        j.width = o;
        j.height = v;
        M = j.getContext("2d");
        q.style.width = (o - 200) + "px";
        g()
    }
    function g() {
        d = [];
        var R, O;
        for (var Q = 0; Q < h; Q++) {
            R = new WiperTypo(M,A,w,m,o,v,L,J,40,0,15);
            d[Q] = R
        }
        for (var P = 0; P < G; P++) {
            O = new WiperLine(M,P,z,o,v);
            d[Q + P] = O
        }
    }
    function E() {
        if (D) {
            return
        }
        requestAnimationFrame(E);
        e()
    }
    function e() {
        M.fillStyle = "#1171b2";
        M.fillRect(0, 0, o, v);
        n();
        N()
    }
    function n() {
        var Q, P, aa, Y, W, X, R, V, T, O, Z, U, S;
        for (U = 0; U < f - 1; U++) {
            Q = d[U];
            for (S = U + 1; S < f; S++) {
                P = d[S];
                aa = P.x - Q.x;
                Y = P.y - Q.y;
                W = Math.sqrt(aa * aa + Y * Y);
                X = Q.radius + P.radius;
                if (W < X) {
                    R = Math.atan2(Y, aa);
                    V = Q.x + Math.cos(R) * X;
                    T = Q.y + Math.sin(R) * X;
                    O = (V - P.x) * K;
                    Z = (T - P.y) * K;
                    Q.vx -= O;
                    Q.vy -= Z;
                    P.vx += O;
                    P.vy += Z
                }
            }
        }
    }
    function N() {
        var P, O;
        if (I) {
            for (O = 0; O < f; O++) {
                P = d[O];
                P.draw();
                P.move(i.no)
            }
        } else {
            s += 0.01;
            i.no = Math.abs(Math.sin(s));
            for (O = 0; O < f; O++) {
                P = d[O];
                P.draw();
                P.move(i.no)
            }
        }
    }
    function k() {
        StageController.addDown("wipertypo", r);
        StageController.addMove("wipertypo", t);
        StageController.addUp("wipertypo", H)
    }
    function c() {
        StageController.removeDown("wipertypo");
        StageController.removeMove("wipertypo");
        StageController.removeUp("wipertypo")
    }
    function r(P, O) {
        if (P < 100 || P > o - 100) {
            return
        }
        I = true;
        l(P)
    }
    function t(P, O) {
        if (!I) {
            return
        }
        l(P)
    }
    function H() {
        I = false;
        TweenLite.killTweensOf(i);
        s = Math.asin(i.no) * C;
        a = -10
    }
    function l(P) {
        if (!I) {
            return
        }
        var O = CMUtiles.getCurrent(P, 100, o - 100, 0, 101) * 0.01;
        TweenLite.killTweensOf(i);
        TweenLite.to(i, 2, {
            no: O
        });
        if (a >= 0) {
            if (P > a) {
                C = 1
            } else {
                C = -1
            }
        } else {
            if (i.no > O) {
                C = -1
            } else {
                C = 1
            }
        }
        a = P
    }
    return {
        init: F,
        start: y,
        dispose: x,
        pause: b,
        resume: p,
        resize: u
    }
}
)();
(function(b) {
    var d = Math.PI;
    function a(o, l, h, n, k, i, j, m, e, g, f) {
        this.w = l;
        this.radius = this.w * 0.5;
        this.color = "rgb(255, 255, 255)";
        this.ctx = o;
        this.friction = h;
        this.gravity = n;
        this.sw = k;
        this.sh = i;
        this.str = j;
        this.strtotal = m;
        this.textSize = e;
        this.fx = g;
        this.fy = f;
        this.reset()
    }
    a.prototype = {
        move: function() {
            this.vx *= this.friction;
            this.vy *= this.friction;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            if (this.x - this.radius > this.sw) {
                this.reset()
            } else {
                if (this.x + this.radius < 0) {
                    this.reset()
                }
            }
            if (this.y - this.radius > this.sh) {
                this.reset()
            }
        },
        reset: function() {
            this.x = CMUtiles.randomInteger(0, this.sw);
            this.y = -30;
            this.vx = Math.random() * 6 - 3;
            this.vy = Math.random() * 6 - 3;
            this.rotate = 0;
            this.text = this.str[CMUtiles.randomInteger(0, this.strtotal - 1)]
        },
        draw: function() {
            this.rotate += 0.01;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.rotate * d);
            this.ctx.textAlign = "center";
            this.ctx.font = "bold " + this.textSize + "px Helvetica";
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.fx, this.fy);
            this.ctx.restore()
        }
    };
    function c(g, h, f, e, i) {
        this.index = h;
        this.w = f;
        this.h = f - (h * 0.2);
        this.ctx = g;
        this.radius = this.w * 0.5;
        this.hh = this.h * 0.5;
        this.color = "rgb(0,0,0)";
        this.centerX = e >> 1;
        this.centerY = i + this.w;
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.rotation = 0
    }
    c.prototype = {
        move: function(i) {
            var h = Math.cos(i * d)
              , e = Math.sin(i * d)
              , g = (h) * (-(this.w - 2) * this.index) + this.centerX
              , f = (e) * (-(this.w - 2) * this.index) + this.centerY;
            this.x = g;
            this.y = f;
            this.rotation = i
        },
        draw: function() {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = this.color;
            this.ctx.translate(this.x, this.y);
            this.ctx.rotate(this.rotation * d);
            this.ctx.fillRect(-this.radius, -this.hh, this.w, this.h);
            this.ctx.restore()
        }
    };
    b.WiperTypo = a;
    b.WiperLine = c
}
)(window);
var PlantTrees = PlantTrees || (function() {
    var n = false, L = 180, C = 140, p = 9, a = 6, e, M, q, F = 1, g, l, m, o, A, D, v, I, E = '<div id="planttrees-con" class="contents-data"><div id="planttrees-bg"></div><canvas id="planttrees"></canvas><div id="planttrees-bt"></div><div id="planttrees-guide" class="contents-guide"><div class="guide-tooltip">press</div><div class="guide-mouse"></div></div></div>';
    function K(N) {
        N.innerHTML = E;
        n = false;
        g = StageController.stageWidth;
        l = StageController.stageHeight;
        F = 1;
        e = document.getElementById("planttrees");
        q = $("#planttrees-bt");
        A = document.getElementById("planttrees-guide");
        D = A.getElementsByClassName("guide-tooltip")[0];
        v = document.getElementById("planttrees-con");
        I = document.getElementById("planttrees-bg");
        o = null ;
        StageController.addResize("PlantTrees", k)
    }
    function w() {
        g = StageController.stageWidth;
        l = StageController.stageHeight;
        A.style.display = "block";
        TweenLite.set(A, {
            css: {
                opacity: 0,
                x: ((g >> 1) - 90),
                y: (l >> 1)
            }
        });
        o = TweenLite.to(A, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: x
        })
    }
    function x() {
        o = TweenLite.to(A, 0.5, {
            onComplete: t
        })
    }
    function t() {
        m = G(g / 2, l);
        J();
        o = TweenLite.to(A, 3, {
            onComplete: s
        })
    }
    function s() {
        g = StageController.stageWidth;
        l = StageController.stageHeight;
        D.innerHTML = "click";
        var N = 110
          , O = 50;
        if (CMDetect.isMobile) {
            N = 190;
            O = 70
        }
        o = TweenLite.to(A, 1, {
            css: {
                x: (g - N),
                y: O
            },
            onComplete: r
        })
    }
    function r() {
        o = TweenLite.to(A, 0.5, {
            onComplete: y
        })
    }
    function y() {
        o = null ;
        TweenLite.to(A, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: z
        })
    }
    function z() {
        CMUtiles.removeDom(A);
        f()
    }
    function u() {
        StageController.removeResize("PlantTrees");
        n = true;
        if (A != null ) {
            TweenLite.killTweensOf(A)
        }
        if (o != null ) {
            TweenLite.killTweensOf(o)
        }
        o = null ;
        c();
        m = null ;
        e = null ;
        q = null ;
        A = null ;
        D = null ;
        v = null ;
        I = null 
    }
    function b() {
        n = true;
        c();
        if (o != null ) {
            o.pause()
        }
    }
    function h() {
        n = false;
        J();
        if (o == null ) {
            f()
        } else {
            o.resume()
        }
    }
    function k() {
        g = StageController.stageWidth;
        l = StageController.stageHeight;
        e.width = g;
        e.height = l;
        M = e.getContext("2d");
        M.lineCap = "round";
        M.globalCompositeOperation = "lighter";
        m = null 
    }
    function J() {
        if (n) {
            return
        }
        requestAnimationFrame(J);
        d()
    }
    function d() {
        if (!m) {
            return
        }
        m.draw(M);
        if (m.complete()) {
            m = null 
        }
    }
    function G(P, N) {
        var Q = CMUtiles.randomFloat(C, L)
          , T = Q - C
          , R = (L - C) / (p - a)
          , S = a + ((0.5 + (T / R)) | 0)
          , O = (Math.random() * 360) | 0;
        return new TreeClass(P,N,Q,-90,O,S,F)
    }
    function f() {
        StageController.addDown("planttrees", j);
        q.on("click", H)
    }
    function c() {
        StageController.removeDown("planttrees");
        q.off("click", H)
    }
    function j(O, N) {
        if (m) {
            return
        }
        if (O < 100 || O > g - 100 || N > l - 70) {
            return
        }
        m = G(O, l)
    }
    function H() {
        if (F == 1) {
            F = 0;
            i()
        } else {
            F = 1;
            B()
        }
    }
    function B() {
        TweenLite.to(v, 1, {
            css: {
                backgroundColor: "#ddd"
            }
        });
        I.style.backgroundPosition = "0px 0px";
        q[0].style.backgroundPosition = "0px 0px";
        k();
        m = G(g / 2, l);
        Address.blackLeft();
        Address.blackTop();
        ConfigModel.isWhite = 0
    }
    function i() {
        TweenLite.to(v, 1, {
            css: {
                backgroundColor: "#222"
            }
        });
        I.style.backgroundPosition = "0px -90px";
        if (CMDetect.isMobile) {
            q[0].style.backgroundPosition = "0px -148px"
        } else {
            q[0].style.backgroundPosition = "0px -74px"
        }
        k();
        m = G(g / 2, l);
        Address.whiteLeft();
        Address.whiteTop();
        ConfigModel.isWhite = 1
    }
    return {
        init: K,
        start: w,
        dispose: u,
        pause: b,
        resume: h,
        resize: k
    }
}
)();
(function(f) {
    var g = Math.PI
      , d = 60
      , b = g / 180
      , a = {};
    function h(k, j, m, l, i, o, n) {
        this._color = i;
        this._isDay = n;
        this._changeColor = 90;
        this._brances = [];
        this._brances.push(new c(k,j,m,l,CMUtiles.randomFloat(3, 6),o,1))
    }
    h.prototype = {
        _brances: null ,
        _complete: false,
        complete: function() {
            return this._complete
        },
        draw: function(s) {
            var r = this._brances, o = r.length, l, p, m, j;
            if (!o) {
                this._complete = true;
                return
            }
            for (l = 0; l < o; l++) {
                p = r[l];
                p.update();
                if (p.complete()) {
                    r.splice(l, 1);
                    l--;
                    j = p.generation() < 3 ? CMUtiles.randomInteger(3, 4) : CMUtiles.randomInteger(2, 4);
                    m = p.createNext(j);
                    if (m) {
                        r = this._brances = r.concat(m)
                    }
                    o = r.length
                }
            }
            if (this._isDay == 1) {
                s.strokeStyle = "hsl(0,100%,0%)"
            } else {
                s.strokeStyle = "hsl(" + this._color + ",100%," + this._changeColor + "%)";
                if (this._changeColor > 50) {
                    this._changeColor = this._changeColor - 0.4
                }
            }
            var k, u, t;
            for (var q in a) {
                k = a[q];
                t = k.lines;
                s.beginPath();
                s.lineWidth = k.lineWidth;
                for (l = 0,
                o = t.length; l < o; l++) {
                    u = t[l];
                    s.moveTo(u[0][0], u[0][1]);
                    s.lineTo(u[1][0], u[1][1])
                }
                s.stroke();
                delete a[q]
            }
        }
    };
    function c(k, j, l, p, n, o, m) {
        this._start = new e(k,j);
        this._length = l || 1;
        this._angle = p || -90;
        this._speed = n || 3;
        this._depth = o || 1;
        this._generation = m;
        this._speed *= 60 / d;
        var i = this._angle * b;
        this._end = new e(this._start.x + this._length * Math.cos(i),this._start.y + this._length * Math.sin(i));
        this._v = this._end.subtract(this._start);
        this._v.normalize(this._speed);
        this._current = this._start.add(this._v);
        this._latest = this._start.clone();
        this._currentLength = this._speed
    }
    c.prototype = {
        _complete: false,
        _angleOffsetRange: 90,
        generation: function() {
            return this._generation
        },
        complete: function() {
            return this._complete
        },
        interpolate: function(i) {
            return e.interpolate(this._end, this._start, i)
        },
        createNext: function(v) {
            var o = Math.max(this._depth - 1, 0);
            if (!o) {
                return null 
            }
            var y = [], w = this._angleOffsetRange, k = w / v, u, r, z;
            for (u = 0; u < v; u++) {
                r = k * u - w / 2;
                z = r + k;
                y[u] = (CMUtiles.randomFloat(r, z)) | 0
            }
            y.sort(function(l, i) {
                return (l > 0 ? l : -l) - (i > 0 ? i : -i)
            }
            );
            var C = [], q = this._generation + 1, B = 0.55 / v, x, A, D, m, j;
            for (u = 0; u < v; u++) {
                x = u === 0 ? 0 : CMUtiles.randomFloat(B * u, B * (u + 1));
                j = this.interpolate(x);
                A = this._angle + y[u];
                D = 0.3 * Math.abs(Math.cos((A + 90) * b));
                m = this._length * CMUtiles.randomFloat(0.25 + D, 0.65 + D);
                C[u] = new c(j.x,j.y,m,A,CMUtiles.randomFloat(3, 5),o,q)
            }
            return C
        },
        update: function() {
            var j = this._complete;
            if (j) {
                return
            }
            var m = this._current
              , k = this._latest;
            if (this._length <= this._currentLength) {
                m = this._end;
                j = this._complete = true
            }
            var i = this._depth * this._depth * 0.2
              , l = "CM" + i
              , n = a[l];
            if (!n) {
                n = a[l] = {
                    lineWidth: i,
                    lines: []
                }
            }
            n.lines.push([[k.x, k.y], [m.x, m.y]]);
            if (j) {
                return
            }
            k.set(m);
            m.offset(this._v);
            this._currentLength += this._speed
        }
    };
    function e(i, j) {
        this.x = i || 0;
        this.y = j || 0
    }
    e.create = function(i, j) {
        if (CMUtiles.isObject(i)) {
            return new e(i.x,i.y)
        }
        return new e(i,j)
    }
    ;
    e.add = function(j, i) {
        return new e(j.x + i.x,j.y + i.y)
    }
    ;
    e.subtract = function(j, i) {
        return new e(j.x - i.x,j.y - i.y)
    }
    ;
    e.interpolate = function(m, l, k) {
        var j = l.x - m.x
          , i = l.y - m.y;
        return new e(m.x + j * k,m.y + i * k)
    }
    ;
    e.prototype = {
        add: function(i) {
            return e.add(this, i)
        },
        subtract: function(i) {
            return e.subtract(this, i)
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        set: function(i, j) {
            if (CMUtiles.isObject(i)) {
                j = i.y;
                i = i.x
            }
            this.x = i || 0;
            this.y = j || 0;
            return this
        },
        offset: function(i, j) {
            if (CMUtiles.isObject(i)) {
                j = i.y;
                i = i.x
            }
            this.x += i || 0;
            this.y += j || 0;
            return this
        },
        normalize: function(i) {
            if ((i === null ) || (i === "undefined")) {
                i = 1
            }
            var j = this.length();
            if (j > 0) {
                this.x = this.x / j * i;
                this.y = this.y / j * i
            }
            return this
        },
        clone: function() {
            return e.create(this)
        }
    };
    f.TreeClass = h
}
)(window);
var WaveInCircle = WaveInCircle || (function() {
    var X, D, A, ai = 8, p = ai - 2, y = 0.96, r = 0.04, i = 0.06, h = 0.03, u = 100, T = 0, O = 0, j, x, ab = false, ah = false, f, e, g, I, M, W, U, P, w, q, L = {
        left: 0,
        top: 0
    }, Q, ae, N = 0, af = 466, c = 466, S = '<div class="contents-data"><div id="wavecircle"><canvas id="wavecircle-world" class="chand-updown"></canvas><div id="wavecircle-btcon"><div id="wavecircle-bt-blue" class="wavecircle-bt"><p></p></div><div id="wavecircle-bt-rainbow" class="wavecircle-bt"><p></p><ul><li></li><li></li><li></li><li></li><li></li></ul></div></div></div><div id="wavecircle-guide" class="contents-guide"><div class="guide-mouse"></div><div class="guide-tooltip">press & move</div></div></div>';
    function ad(ao) {
        ao.innerHTML = S;
        ab = false;
        X = [];
        D = [];
        A = [];
        var an, ak, am, al;
        for (an = 0; an < ai; an++) {
            ak = {};
            ak.x = af / (ai - 1) * an;
            ak.y = c;
            ak.vy = Math.random() * 40 - 20;
            X[an] = ak;
            am = {};
            am.x = af / (ai - 1) * an;
            am.y = c;
            am.vy = Math.random() * 40 - 20;
            D[an] = am;
            al = {};
            al.x = af / (ai - 1) * an;
            al.y = c;
            al.vy = Math.random() * 40 - 20;
            A[an] = al
        }
        W = {
            r: 189,
            g: 100,
            b: 46
        };
        U = {
            r: 196,
            g: 100,
            b: 39
        };
        P = {
            r: 207,
            g: 100,
            b: 31
        };
        j = document.getElementById("wavecircle-world");
        j.width = af;
        j.height = c;
        x = j.getContext("2d");
        Q = $("#wavecircle-bt-blue");
        ae = $("#wavecircle-bt-rainbow");
        N = 0;
        Q.removeClass("blue-out").addClass("blue-over");
        ae.removeClass("rainbow-over").addClass("rainbow-out");
        M = document.getElementById("wavecircle");
        M.appendChild(CMDetect.circleMask);
        I = document.getElementById("wavecircle-guide");
        w = null ;
        StageController.addResize("WaveInCircle", t)
    }
    function E() {
        q = 0;
        g = -1;
        requestAnimationFrame(ac);
        w = TweenLite.delayedCall(3.2, aa);
        if (CMDetect.isTouch) {
            Q.on("click", F);
            ae.on("click", Z)
        } else {
            Q.on("click", F).on("mouseenter", V).on("mouseleave", m);
            ae.on("click", Z).on("mouseenter", o).on("mouseleave", m)
        }
    }
    function C() {
        StageController.removeResize("WaveInCircle");
        CMUtiles.removeDom(CMDetect.circleMask);
        if (I != null ) {
            TweenLite.killTweensOf(I)
        }
        I = null ;
        if (w != null ) {
            TweenLite.killTweensOf(w)
        }
        w = null ;
        Q.off();
        ae.off();
        Q = null ;
        ae = null ;
        ab = true;
        b();
        ah = false;
        j = null ;
        x = null ;
        M = null 
    }
    function a() {
        ab = true;
        b();
        ah = false;
        T = O = 0;
        if (w != null ) {
            w.pause()
        }
    }
    function l() {
        ab = false;
        g = -1;
        requestAnimationFrame(ac);
        if (w == null ) {
            k()
        } else {
            w.resume()
        }
    }
    function k() {
        StageController.addDown("waveinacircle", n);
        StageController.addMove("waveinacircle", s);
        StageController.addUp("waveinacircle", ag)
    }
    function b() {
        StageController.removeDown("waveinacircle", n);
        StageController.removeMove("waveinacircle", s);
        StageController.removeUp("waveinacircle", ag)
    }
    function t() {
        var ak = StageController.stageWidth, al = StageController.stageHeight, am;
        f = (ak - af) >> 1;
        e = ((al - c) >> 1);
        if (al > 710) {
            am = e
        } else {
            am = (e - 25)
        }
        M.style[CMDetect.cssHead] = "translate(" + f + "px, " + am + "px)"
    }
    function aa() {
        I.style.display = "block";
        TweenLite.set(I, {
            css: {
                opacity: 0,
                x: (f + 300),
                y: (e + 60)
            }
        });
        w = TweenLite.to(I, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: B
        })
    }
    function B() {
        w = TweenLite.to(I, 0.6, {
            delay: 1,
            css: {
                x: f + 240,
                y: e + 420
            },
            onUpdate: R,
            onComplete: z
        })
    }
    function z() {
        w = TweenLite.to(I, 0.6, {
            css: {
                x: f + 120,
                y: e + 60
            },
            onUpdate: R,
            onComplete: G
        })
    }
    function R() {
        var ak = I.getBoundingClientRect();
        J(ak.left, ak.top)
    }
    function G() {
        T = 0;
        O = 0;
        w = null ;
        TweenLite.to(I, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: H
        })
    }
    function H() {
        CMUtiles.removeDom(I);
        k()
    }
    function F() {
        if (N == 0) {
            return
        }
        N = 0;
        Q.removeClass("blue-out").addClass("blue-over");
        ae.removeClass("rainbow-over").addClass("rainbow-out");
        TweenLite.to(W, 0.8, {
            r: 189,
            g: 100,
            b: 46
        });
        TweenLite.to(U, 0.8, {
            r: 196,
            g: 100,
            b: 39
        });
        TweenLite.to(P, 0.8, {
            r: 207,
            g: 100,
            b: 31
        })
    }
    function Z() {
        if (N == 1) {
            return
        }
        N = 1;
        Q.removeClass("blue-over").addClass("blue-out");
        ae.removeClass("rainbow-out").addClass("rainbow-over");
        TweenLite.to(W, 0.8, {
            r: 0,
            g: 100,
            b: 50
        });
        TweenLite.to(U, 0.8, {
            r: 60,
            g: 100,
            b: 50
        });
        TweenLite.to(P, 0.8, {
            r: 180,
            g: 100,
            b: 50
        })
    }
    function V() {
        if (N == 0) {
            return
        }
        TweenLite.killTweensOf(Q);
        TweenLite.killTweensOf(ae);
        TweenLite.to(Q, 0.2, {
            css: {
                opacity: 1
            }
        });
        TweenLite.to(ae, 0.2, {
            css: {
                opacity: 0.4
            }
        });
        Q.removeClass("blue-out").addClass("blue-over");
        ae.removeClass("rainbow-over").addClass("rainbow-out")
    }
    function o() {
        if (N == 1) {
            return
        }
        TweenLite.killTweensOf(Q);
        TweenLite.killTweensOf(ae);
        TweenLite.to(Q, 0.2, {
            css: {
                opacity: 0.4
            }
        });
        TweenLite.to(ae, 0.2, {
            css: {
                opacity: 1
            }
        });
        Q.removeClass("blue-over").addClass("blue-out");
        ae.removeClass("rainbow-out").addClass("rainbow-over")
    }
    function m() {
        TweenLite.killTweensOf(Q);
        TweenLite.killTweensOf(ae);
        TweenLite.to(Q, 0.2, {
            css: {
                opacity: 1
            }
        });
        TweenLite.to(ae, 0.2, {
            css: {
                opacity: 1
            }
        });
        if (N == 1) {
            Q.removeClass("blue-over").addClass("blue-out");
            ae.removeClass("rainbow-out").addClass("rainbow-over")
        } else {
            Q.removeClass("blue-out").addClass("blue-over");
            ae.removeClass("rainbow-over").addClass("rainbow-out")
        }
    }
    function n(al, ak) {
        ah = true;
        J(al, ak)
    }
    function s(al, ak) {
        if (!ah) {
            return
        }
        J(al, ak)
    }
    function ag() {
        if (!ah) {
            return
        }
        ah = false;
        T = 0;
        O = 0;
        q = 0
    }
    function J(al, ak) {
        var am = ak - e
          , an = al - f;
        if (an < 0 || an > af || am < 0 || am > c) {
            return
        }
        T = an;
        O = am;
        q = 0
    }
    function ac(am) {
        if (ab) {
            return
        }
        requestAnimationFrame(ac);
        if (!g) {
            g = am
        }
        var ak = am
          , al = ak - g;
        if (al > 25) {
            g = ak;
            q = q + 1;
            if (q > 600) {
                q = 0;
                K()
            }
            d()
        }
    }
    function K() {
        var al = e + CMUtiles.randomInteger(0, 100)
          , am = f + CMUtiles.randomInteger(0, 466)
          , an = e + CMUtiles.randomInteger(300, 466)
          , ak = f + CMUtiles.randomInteger(0, 466);
        L.left = am;
        L.top = al;
        TweenLite.to(L, 0.6, {
            left: ak,
            top: an,
            onUpdate: v,
            onComplete: Y
        })
    }
    function v() {
        J(L.left, L.top)
    }
    function Y() {
        T = 0;
        O = 0;
        q = 0
    }
    function d() {
        x.fillStyle = "#fff";
        x.fillRect(0, 0, af, c);
        var am, al, ak, an;
        for (am = 0; am < ai; am++) {
            X[am].vy += (c / 2 - X[am].y) * r;
            D[am].vy += (c / 2 - D[am].y + 5) * i;
            A[am].vy += (c / 2 - A[am].y - 5) * h;
            al = T - X[am].x;
            ak = O - c / 2;
            an = Math.sqrt(al * al + (ak / 2) * (ak / 2));
            if (an < u) {
                X[am].vy += (O - X[am].y) * r;
                D[am].vy += (O - D[am].y + 10) * i;
                A[am].vy += (O - A[am].y + 10) * h
            }
            X[am].vy *= y;
            X[am].y += X[am].vy;
            D[am].vy *= y;
            D[am].y += D[am].vy;
            A[am].vy *= y;
            A[am].y += A[am].vy;
            if (X[am].x != 0) {
                aj(A, W);
                aj(X, U);
                aj(D, P)
            }
        }
    }
    function aj(al, am) {
        x.beginPath();
        x.fillStyle = "hsla(" + am.r + ", " + am.g + "%, " + am.b + "%, 0.4)";
        x.moveTo(al[0].x, al[0].y);
        var an, ak, ao;
        for (an = 0; an < p; an++) {
            ak = (al[an].x + al[an + 1].x) * 0.5;
            ao = (al[an].y + al[an + 1].y) * 0.5;
            x.quadraticCurveTo(al[an].x, al[an].y, ak, ao)
        }
        x.quadraticCurveTo(al[al.length - 2].x, al[al.length - 2].y, al[al.length - 1].x, al[al.length - 1].y);
        x.lineTo(af, c);
        x.lineTo(0, c);
        x.lineTo(0, al[0].y);
        x.fill()
    }
    return {
        init: ad,
        start: E,
        dispose: C,
        pause: a,
        resume: l,
        resize: t
    }
}
)();
var RainingMen = RainingMen || (function() {
    var r = false, J = 40, f, l = (CMDetect.isIE && CMDetect.ieVersion < 11), D, j, q, E, a, h, n = 0, A = {
        no: 0
    }, s, y, d, C = '<div id="rainmen-home" class="contents-data chand-leftright"><div id="rainmen"></div><div id="rainmen-guide" class="contents-guide"><div class="guide-mouse"></div><div class="guide-tooltip">press & move</div></div></div>';
    function H(N) {
        N.innerHTML = C;
        r = false;
        a = false;
        j = StageController.stageWidth;
        q = StageController.stageHeight;
        d = document.getElementById("rainmen-home");
        f = document.getElementById("rainmen");
        y = document.getElementById("rainmen-guide");
        D = [];
        var K, L;
        for (K = 0; K < J; K++) {
            L = new RainmenItems(j,q);
            f.appendChild(L.item);
            D[K] = L
        }
        if (l) {
            var M = document.createElement("div");
            M.id = "rainmen-block";
            d.appendChild(M)
        }
        s = null ;
        StageController.addResize("RainingMen", o)
    }
    function u() {
        n = 0;
        G();
        s = TweenLite.delayedCall(4, F)
    }
    function t() {
        StageController.removeResize("RainingMen");
        r = true;
        c();
        n = 0;
        var K, L;
        for (K = 0; K < J; K++) {
            L = D[K];
            L.dispose()
        }
        if (y != null ) {
            TweenLite.killTweensOf(y)
        }
        y = null ;
        if (s != null ) {
            TweenLite.killTweensOf(s)
        }
        s = null ;
        d = null ;
        f = null 
    }
    function b() {
        r = true;
        a = false;
        c();
        if (s != null ) {
            s.pause()
        }
    }
    function k() {
        r = false;
        G();
        if (s == null ) {
            i()
        } else {
            s.resume()
        }
    }
    function o() {
        j = StageController.stageWidth;
        q = StageController.stageHeight;
        E = j >> 1;
        var K, L;
        for (K = 0; K < J; K++) {
            L = D[K];
            L.resize(j, q)
        }
    }
    function F() {
        y.style.display = "block";
        TweenLite.to(y, 0, {
            css: {
                opacity: 0,
                x: E + 100,
                y: (q >> 1)
            }
        });
        s = TweenLite.to(y, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: v
        })
    }
    function v() {
        h = E + 100;
        s = TweenLite.to(y, 1, {
            delay: 0.5,
            css: {
                x: E - 200
            },
            onUpdate: B,
            onComplete: w
        })
    }
    function B() {
        var K = y.getBoundingClientRect();
        g(K.left, 0)
    }
    function w() {
        a = false;
        s = null ;
        TweenLite.to(y, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: x
        })
    }
    function x() {
        CMUtiles.removeDom(y);
        i()
    }
    function G() {
        if (r) {
            return
        }
        requestAnimationFrame(G);
        e()
    }
    function e() {
        var K, L;
        for (K = 0; K < J; K++) {
            L = D[K];
            L.loop()
        }
        n = n + 1;
        if (n > 1200) {
            n = 0;
            z()
        }
    }
    function z() {
        var K, L;
        for (K = 0; K < J; K++) {
            L = D[K];
            L.move(10)
        }
    }
    function i() {
        StageController.addDown("rainmen", m);
        StageController.addMove("rainmen", p);
        StageController.addUp("rainmen", I)
    }
    function c() {
        StageController.removeDown("rainmen", m);
        StageController.removeMove("rainmen", p);
        StageController.removeUp("rainmen", I)
    }
    function m(L, K) {
        a = true;
        h = L;
        n = 0
    }
    function p(L, K) {
        if (!a) {
            return
        }
        g(L)
    }
    function I() {
        a = false
    }
    function g(L) {
        var M = L - h, K, N;
        for (K = 0; K < J; K++) {
            N = D[K];
            N.move(M)
        }
    }
    return {
        init: H,
        start: u,
        dispose: t,
        pause: b,
        resume: k,
        resize: o
    }
}
)();
(function(b) {
    function a() {
        this.init.apply(this, arguments)
    }
    a.prototype = {
        init: function(c, d) {
            this.mx = 0;
            this.sw = c;
            this.sh = d;
            this.item = document.createElement("div");
            this.item.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 220 370" enable-background="new 0 0 220 370" xml:space="preserve"><path fill="#00a1e7" d="M219.997,63.729C181.482,7.644,120.94,5.854,111.316,5.936l-0.491-5.347h-0.004C110.8,0.262,110.442,0,110,0 c-0.441,0-0.799,0.262-0.82,0.589h-0.005l-0.49,5.347C99.057,5.854,38.518,7.645,0.003,63.729c0,0-0.138,1.851,1.513,1.058 c0,0,4.537-5.42,7.838-0.661c0,0,1.649,2.908-2.062,9.253c0,0-0.275,1.718,3.024,0.396c0,0,36.024-21.546,65.449,5.288 c0,0,0.413,0.793,1.788,0c0,0,8.725-6.724,31.072-7.118v57.405c-0.611,0.375-1.049,1.012-1.049,1.925c0,1.415,0,2.831,0,4.246 c-0.445-0.065-0.955,0.105-1.53,0.622c-0.647,0.58-0.612,1.913-0.852,2.708c-0.337,1.121-0.412,2.061-0.464,3.25 c-0.046,1.034,0.416,2.496,0.673,3.862c-0.203,1.737-0.497,3.477-0.753,5.174c-0.396,2.627-0.505,5.24-0.753,7.88 c-0.312,3.326-1.387,6.559-1.558,9.868c-0.063,1.212-0.104,2.428-0.033,3.644c0.042,0.718,0.029,1.911,0.297,2.894 c0.036,1.175,0.126,2.341,0.271,3.498c-0.064,1.859,0.366,4.44,3.105,5.054c0,0,0.557,0.209,1.551,0.518 c0.026,0.008,0.053,0.017,0.079,0.024c2.475,0.762,7.538,2.095,13.586,2.457c0.452,1.971,1.032,1.869,3.136,1.494 c1.558-0.277,2.733-0.646,4.217-0.354c1.471,0.293,3.389,0.834,4.767,0.852c0.828,0.012,1.64-0.07,2.447-0.166 c0.347,0.621,0.702,1.23,1.101,1.807c0.917,1.324,1.538,2.787,2.353,4.195c0.917,1.586,0.368,3.832,0.558,5.605 c0.187,1.732,0.771,3.635,0.387,5.395c-0.321,1.471-1.488,3.088-1.364,4.664c0.048,0.611,0.404,1.664,0.779,2.172 c0.434,0.588,1.416,0.844,1.558,1.674c0.156,0.908-0.77,1.5-1.362,2.061c-0.874,0.822-0.809,1.053-0.873,2.143 c-0.091,1.543-0.861,3.158-0.369,4.756c0.245,0.795,0.853,1.375,0.931,2.225c0.072,0.797-0.301,1.355-0.73,2.004 c-0.687,1.031-0.202,1.928,0.624,2.682c-0.933,2.682-1.074,5.984-1.617,8.441c-0.638,2.887-1.557,5.74-1.428,8.709 c0.102,2.32,0.901,4.58,1.166,6.848c0.264,2.268-0.009,4.725-0.13,6.963c-0.27,4.984,1.284,9.535,2.065,14.328 c0.391,2.4,0.828,5.32,1.582,7.578c0.546,1.635,1.265,3.277,1.524,5.012c0.189,1.264-0.052,2.33,0.008,3.586 c0.124,2.633,1.458,5,1.554,7.59c0.042,1.156-0.304,2.025-0.26,3.115c0.045,1.076,0.454,1.777,0.383,2.852 c-0.187,2.787-1.548,4.699-1.548,7.607c0,2.975,0.234,5.838,0.389,8.799c0.135,2.568,0,5.18,0,7.752 c0,2.732-0.807,4.936,0.078,7.576c1.219,3.633,3.328,6.945,4.458,10.594c0.268,0.863,0.53,2.098,0.514,2.994 c-0.027,1.471-0.412,1.725-1.524,2.492c-1.255,0.867-2.871,4.852-0.159,4.979c0.038,0.002,0.076-0.002,0.113-0.002 c-0.126,0.299-0.287,0.594-0.411,0.779c-0.271,0.406-0.553,0.793-0.868,1.176c-0.349,0.422-0.65,0.82-1.068,1.18 c-0.771,0.666-1.602,1.258-2.387,1.85c-0.946,0.713-1.724,1.572-2.015,2.703c-0.072,0.279-0.062,0.471-0.066,0.746 s-0.16,0.361-0.289,0.621c-0.248,0.496-0.272,1.213-0.128,1.744c0.173,0.633,0.685,0.84,1.357,0.809 c0.765-0.035,1.652,0.182,2.441,0.35c0.504,0.105,0.88,0.018,1.394-0.008c0.52-0.025,1.045-0.008,1.562-0.031 c0.582-0.025,1.166-0.055,1.754-0.031c0.589,0.025,1.115-0.096,1.688-0.271c0.771-0.236,1.383-0.51,2.071-0.879 c0.319-0.172,0.686-0.314,0.97-0.539c0.22-0.17,0.257-0.383,0.325-0.645c0.16-0.607,0.204-1.068,0.662-1.553 c0.221-0.234,0.419-0.365,0.696-0.539c0.173-0.107,0.333-0.326,0.513-0.393c0.088,0.371,0.161,0.369,0.523,0.336 c0.421-0.037,0.794-0.1,1.202-0.215c0.655-0.189,1.475-0.352,1.899-0.906c0.674-0.881,0.427-2.139,0.427-3.203 c0-0.572-0.285-0.988-0.291-1.549c-0.008-0.609-0.071-1.229-0.21-1.818c0.132,0.047,0.266,0.096,0.403,0.145 c1.244-1.627,0.103-4.037-0.09-5.799c-0.31-2.83,0.485-5.281,0.773-8c0.234-2.215-0.551-4.594-0.14-6.717 c0.278-1.438,0.771-2.754,0.784-4.244c0.01-1.201-0.205-2.314-0.259-3.479c-0.143-3.025,0.069-6.012,0.524-8.969 c0.525-3.416,0.222-6.531-0.107-9.961c-0.113-1.184,0.008-2.459-0.285-3.605c-0.149-0.586-0.536-0.982-0.523-1.615 c0.012-0.574,0.554-1.168,0.656-1.738c0.225-1.248-0.198-2.607-0.013-3.861c0.188-1.271,0.657-2.189,0.654-3.584 c-0.008-2.791,1.041-5.238,0.905-7.984c-0.201-4.07-0.278-8.01,0.131-12.064c0.126-1.262,0.404-2.82,0.197-4.105 c0.522,0.885,0.852,1.924,1.067,2.814c0.29,1.189,0.214,2.477,0.414,3.668c0.182,1.08,0.599,2.072,0.651,3.205 c0.13,2.811,0.58,5.875,0.294,8.623c-0.085,0.812-0.444,1.789-0.524,2.699c-0.108,1.227,0.403,1.74,0.59,2.773 c0.175,0.973-0.51,1.738-0.619,2.709c-0.132,1.176,0.276,2.369,0.511,3.486c0.408,1.939,1.017,4.213,0.688,6.215 c-0.362,2.203-1.031,4.373-1.484,6.482c-0.299,1.383-0.245,2.916-0.461,4.328c-0.285,1.855-0.558,3.76-0.648,5.664 c-0.124,2.615,0.346,5.021,0.461,7.531c0.05,1.078,0.443,2.533,0.067,3.547c-0.152,0.406-0.72,0.84-0.912,1.328 c-0.258,0.652-0.298,1.453-0.393,2.117c-0.451,3.145-0.288,6.414-0.288,9.627c0,1.078-0.753,5.883,0.287,6.613 c0.146,0.102,0.309,0.186,0.481,0.252c-0.106,0.332-0.208,0.738-0.23,0.85c-0.108,0.545-0.121,1.084-0.121,1.641 c0,0.285,0.048,0.621,0,0.904c-0.045,0.264-0.13,0.455-0.13,0.75c0,0.746,0.087,1.424,0.164,2.15 c0.085,0.812-0.037,1.449,0.943,1.682c0.518,0.123,1.045,0.189,1.568,0.244c0.269,0.027,0.573,0.125,0.828,0.006 c0.224-0.105,0.396-0.254,0.641-0.359c0.358-0.15,0.343-0.111,0.678,0.102c0.336,0.211,0.751,0.379,1.036,0.654 c0.258,0.246,0.378,0.646,0.549,0.957c0.155,0.281,0.213,0.588,0.439,0.818c0.267,0.271,0.691,0.449,1.019,0.645 c0.783,0.469,1.505,0.43,2.396,0.498c1.12,0.086,2.27,0.035,3.399,0.039c1.129,0.002,2.224-0.314,3.354-0.312 c0.815,0.002,1.759-0.041,2.538-0.248c0.659-0.174,1.032-0.221,1.066-0.936c0.014-0.285,0.053-0.555-0.007-0.832 c-0.041-0.191-0.104-0.549-0.186-0.723c-0.042-0.088-0.223-0.193-0.237-0.24c-0.056-0.168,0.096-0.221,0.099-0.383 c0.004-0.221-0.233-0.525-0.349-0.717c-0.396-0.65-1.034-1.164-1.684-1.578c-0.738-0.471-1.532-0.865-2.234-1.377 c-0.801-0.586-1.309-1.295-1.78-2.115c-0.483-0.842-1.12-1.568-1.552-2.453c-0.229-0.467-0.355-0.799-0.423-1.307 c-0.007-0.053-0.016-0.104-0.023-0.154c0.78-0.855,0.192-3.947,0.519-5.004c0.477-1.547,0.403-2.979,1.094-4.475 c0.812-1.762,1.479-3.709,1.913-5.559c0.714-3.049,0.816-6.363,1.301-9.494c0.539-3.475,0.641-6.811,0.641-10.369 c0-1.574-0.11-3.135,0.266-4.668c0.251-1.025,0.607-2.096,0.771-3.131c0.322-2.053-1.345-3.652-1.043-5.748 c0.174-1.203,1.195-2.018,1.173-3.215c-0.022-1.146-0.885-1.76-0.356-2.959c0.527-1.199,1.301-1.773,0.975-3.27 c-0.298-1.365-0.479-1.34,0.188-2.725c0.709-1.475,0.486-2.963,0.745-4.49c0.213-1.26,0.634-2.322,1.039-3.514 c0.571-1.682,0.632-3.467,0.77-5.221c0.152-1.941,0.679-3.879,0.79-5.795c0.165-2.832,0.058-5.633,0.353-8.453 c0.355-3.389,0.433-6.766,0.288-10.156c-0.041-0.973-0.076-2.271-0.249-3.439c0.007-0.006,0.014-0.012,0.021-0.018 c1.357-1.242,2.121-2.707,3.207-4.113c0.606-0.785,1.215-1.533,1.681-2.404c0.428-0.801,0.511-1.805,1.012-2.539 c1.042-1.523,2.712-2.635,3.596-4.289c0.859-1.609,1.349-3.428,2.18-5.045c0.851-1.654,1.998-3.111,2.79-4.777 c0.967-2.033,1.975-4.133,2.605-6.332c0.504-1.758,0.905-3.77,0.898-5.586c-0.006-1.48,0.578-4.793,0.584-6.736 c0.2-0.004,0.391-0.037,0.559-0.117c1.308-0.621,0.272-3.459,0.003-4.461c-0.264-0.979-1.257-1.826-1.442-2.795 c-0.08-0.42,0.123-0.805,0.102-1.219c-0.025-0.518-0.276-0.99-0.296-1.52c-0.034-0.973,0.392-1.637,0.102-2.588 c-0.221-0.727-0.391-1.531-0.682-2.238c-0.846-2.053-1.948-3.475-1.821-5.791c0.083-1.496-0.321-3.307-0.677-4.857 c-0.494-2.151-1.22-4.44-1.967-6.533c-0.641-1.797-1.88-3.281-2.795-4.948c-0.756-1.376-1.703-3.208-3.032-4.133 c-1.268-0.884-2.963-1.319-4.374-2.006c-1.801-0.875-3.486-1.617-5.434-2.103c-1.025-0.255-2.115-0.36-3.129-0.647 c-0.936-0.266-1.413-0.874-2.31-1.403c-1.541-0.91-3.422-0.718-4.47-2.216c-0.435-0.62-0.766-1.312-1.163-1.965 c-0.273-0.451-0.577-1.576-0.966-1.844c-0.859-0.592-2.2-0.069-3.401,0.181c-0.014-0.062-0.025-0.125-0.035-0.188 c-0.303-2.074-0.356-4.688,0.194-6.674c0.128-0.46,0.134-1.016,0.452-1.429c0.354-0.458,0.831-0.535,1.365-0.732 c0.872-0.322,1.561-1.061,1.875-1.883c0.379-0.989,1.938-5.726-0.52-5.229l-0.081,0.104c-0.01-0.048-0.021-0.096-0.033-0.143 l0.114,0.038c0.016-0.437,0.378-0.833,0.504-1.243c0.149-0.493,0.042-0.983,0.014-1.482c-0.057-1.003,0.568-1.874,0.457-2.813 c-0.103-0.865-0.218-1.861-0.518-2.677c-0.183-0.496-0.048-0.636-0.069-1.058c-0.018-0.381-0.384-0.681-0.313-1.035 c0.062-0.018,0.112-0.015,0.177-0.032c-0.262-0.709-0.577-1.497-0.982-2.156c-0.259-0.419-0.584-1.601-0.979-1.865 c-0.21-0.14-0.66-0.153-0.894-0.25c-0.21-0.089-0.405-0.235-0.617-0.341c-1.677-0.835-2.924-2.312-4.66-3.033 c-1.261-0.522-3.125-0.374-4.494-0.314c-2.901,0.126-5.99,1.472-7.823,3.611c-0.954,1.114-1.711,2.569-2.177,3.897 c0.071-0.021,0.155-0.048,0.225-0.078c-0.196,0.638-0.265,1.371-0.25,2.08c0.049-0.028,0,0,0.058-0.029 c-0.107,0.588-0.104,0.816-0.121,1.412l0.116,0.038c0.043,0.673-0.263,1.571-0.263,2.191c0,0.386,0.03,0.769,0.049,1.131 c0.022,0.424-0.1,0.638-0.194,0.98c-0.212,0.769,0.055,1.415,0.28,2.147c0.243,0.786,0.029,1.782-0.231,2.507 c-0.302,0.837-0.448,1.778-0.39,2.671c0.063,0.982,0.48,1.932,0.644,2.897c0.358,2.129,1.113,4.309,1.982,6.295 c0.203,0.467,0.471,0.994,0.811,1.373c0.229,0.255,0.548,0.41,0.727,0.698c0.252,0.403,0.212,0.921,0.259,1.393 c0.038,0.379,0.066,0.76,0.076,1.141c-0.223,0.057-0.443,0.117-0.661,0.188c-0.97,0.314-1.178,0.799-1.651,1.605 c-0.432,0.734-0.593,1.175-0.799,1.966c-0.148,0.573-0.504,1.539-0.971,1.96c-0.513,0.461-1.381,0.647-1.996,1.05 c-0.397,0.261-0.746,0.588-1.081,0.925c-1.037,0.147-6.281,0.883-7.768,0.883c0,0-0.551,0.453-1.182,1.058 c0,0-0.865,0.379-1.731,0.152c0,0-2.597-0.605-4.249-0.075c0,0-1.417,0.831-2.204,0.831c0,0-2.125,0-3.306,0.681 c0,0-0.865,1.211-1.73,1.287c0,0-7.513,0.252-9.723-0.208c0.033-0.444,0.033-1.007-0.012-1.736 c-0.209-3.364-0.774-9.631-0.259-14.899c4.345,3.457,11.215,2.658,15.331-0.618c5.142-4.094,4.954-11.357,1.958-16.528 c-1.569-2.71-5.893-0.284-4.321,2.429c2.522,4.354,1.749,10-3.042,11.753c-3.863,1.413-7.812-0.408-9.005-4.145 c-0.085-0.265-0.12-0.551-0.134-0.705c0-0.297,0-0.594,0-0.891c0-0.098,0-0.195,0-0.293c0.25-0.349,0.723-0.745,0.723-0.745 c0.765-0.32,0.698-0.927,0.698-0.927c0.058-0.701-0.207-0.79-0.207-0.79c0.955-0.271,0.631-1.533,0.631-1.533 c-0.17-0.77-0.792-0.782-0.792-0.782c0.986-0.166,0.712-1.563,0.712-1.563c0.002-0.962-0.889-0.786-0.889-0.786 c0.831-0.333,0.409-1.897,0.409-1.897c-0.34-0.561-0.807-0.906-1.285-1.119c0-1.486,0-2.972,0-4.457c0-0.99-0.511-1.661-1.205-2.019 V71.945c22.349,0.394,31.073,7.118,31.073,7.118c1.375,0.793,1.788,0,1.788,0c29.424-26.833,65.449-5.288,65.449-5.288 c3.3,1.322,3.024-0.396,3.024-0.396c-3.712-6.345-2.062-9.253-2.062-9.253c3.3-4.759,7.838,0.661,7.838,0.661 C220.135,65.58,219.997,63.729,219.997,63.729z M184.796,227.002c0.624-0.609,1.396-1.281,1.497-2.154 c0.186-1.576-0.473-3.807-0.882-5.303c-1.016-3.715-0.194-7.184-0.019-10.93c0.09-1.91,0.201-3.572,0.583-5.412 c0.211-1.016,0.421-2.113,0.51-3.158c0.05-0.598-0.274-2.111,0.361-2.471c1.658-0.938,1.976,2.432,2.163,3.107 c0.387,1.4,0.845,2.826,1.088,4.295c0.062,0.371,0.015,0.863,0.191,1.215c0.208,0.412,0.576,0.375,0.831,0.676 c0.465,0.551,0.516,1.227,0.631,2.01c0.207,1.41-0.182,3.045,1.456,2.662c0.099,1.383-0.376,3.004-0.611,4.174 c-0.41,2.043-0.572,4.064-0.775,6.16c-0.354,3.684-2.229,7.379-3.322,10.926c-0.331,1.072-0.709,2.963-1.627,3.732 c-0.636,0.535-1.595,0.697-2.561,0.805c-0.239-0.814-0.554-1.566-0.612-2.453c-0.066-1.033,0.042-2.078,0-3.111 c-0.042-1.059-0.141-2.104-0.383-3.1C183.765,228.09,184.214,227.572,184.796,227.002z M112.575,146.996 C112.571,146.933,112.573,146.924,112.575,146.996L112.575,146.996z"/></svg>';
            this.item.style[CMDetect.cssHead] = "translate3d(" + 0 + "px, " + -370 + "px, 0px) rotate(0deg)";
            this.reset()
        },
        dispose: function() {
            this.item = null 
        },
        resize: function(c, d) {
            this.sw = c;
            this.sh = d
        },
        reset: function() {
            this.posX = CMUtiles.randomInteger(-370, this.sw + 370);
            this.posY = CMUtiles.randomInteger(370, 1200) * -1;
            this.rotate = 0;
            this.duration = CMUtiles.randomInteger(10, 3);
            var e = this.duration * 0.1
              , c = 220 * e
              , d = 370 * e;
            this.duration = this.duration / 3;
            this.item.style[CMDetect.cssHead] = "translate3d(" + this.posX + "px, " + this.posY + "px, 0px) rotate(0deg)";
            this.item.style.width = c + "px";
            this.item.style.height = d + "px"
        },
        move: function(c) {
            this.mx = c * 0.01
        },
        loop: function() {
            this.posY = this.posY + this.duration;
            if (this.posY > this.sh || this.posX < -370 || this.posX > this.sw + 370) {
                this.reset();
                return
            }
            this.mx = this.mx * 0.995;
            this.posX += this.mx;
            this.rotate += ((this.mx * -2) - this.rotate) * 0.1;
            this.item.style[CMDetect.cssHead] = "translate3d(" + this.posX + "px, " + this.posY + "px, 0px) rotate(" + this.rotate + "deg)"
        }
    };
    b.RainmenItems = a
}
)(window);
var RippleGreen = RippleGreen || (function() {
    var m, w, l = false, n, t, g = 0, d, q, b, r, c, x = 1.56, v = 1.28, s = 0.07, i, j = 2, A = Math.ceil(198 / j), o = '<div class="contents-data"><div id="home-ripple"><div id="ripple-front"></div><canvas id="ripple-back"></canvas><div id="ripple-mask"></div><div id="ripple-buttons"><div id="ripple-button-plus" class="ripple-buttons-img"><p><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M17.441,14.08H6.559c-1.148,0-2.08-0.932-2.08-2.08s0.931-2.08,2.08-2.08h10.883c1.148,0,2.08,0.931,2.08,2.08 S18.59,14.08,17.441,14.08z"/><path d="M12,19.521c-1.148,0-2.08-0.932-2.08-2.08V6.559c0-1.148,0.931-2.08,2.08-2.08s2.08,0.931,2.08,2.08v10.883 C14.08,18.59,13.148,19.521,12,19.521z"/></svg></p></div><div id="ripple-button-minus" class="ripple-buttons-img"><p><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path d="M17.441,14.08H6.559c-1.148,0-2.08-0.932-2.08-2.08s0.931-2.08,2.08-2.08h10.883c1.148,0,2.08,0.931,2.08,2.08 S18.59,14.08,17.441,14.08z"/></svg></p></div></div></div></div>';
    function u(C) {
        C.innerHTML = o;
        m = [];
        var B;
        for (B = 0; B < A; B++) {
            m[B] = new RippleJS(B)
        }
        l = false;
        d = document.getElementById("ripple-back");
        q = d.getContext("2d");
        d.width = 698;
        d.height = 198;
        b = document.createElement("canvas");
        b.width = 698;
        b.height = 198;
        r = b.getContext("2d");
        c = new Image();
        c.src = "contents/ripple/ripple2.png";
        c.onload = function() {
            if (l) {
                return
            }
            r.drawImage(c, 0, 0);
            q.drawImage(r.canvas, 0, 0)
        }
        ;
        n = $("#ripple-button-plus");
        t = $("#ripple-button-minus");
        n.on("click", k);
        t.on("click", p);
        RippleGreen.value = 1.42
    }
    function e() {
        y();
        i = -1;
        requestAnimationFrame(f)
    }
    function z() {
        l = true;
        m = [];
        c = null ;
        n.off("click", k);
        t.off("click", p);
        n = null ;
        t = null 
    }
    function h() {
        l = true
    }
    function a() {
        l = false;
        y();
        i = -1;
        requestAnimationFrame(f)
    }
    function k() {
        var B = Number(RippleGreen.value - s);
        if (B < v) {
            B = v
        }
        RippleGreen.value = B
    }
    function p() {
        var B = Number(RippleGreen.value + s);
        if (B > x) {
            B = x
        }
        RippleGreen.value = B
    }
    function f(D) {
        if (l) {
            return
        }
        if (!i) {
            i = D
        }
        requestAnimationFrame(f);
        var B = D
          , C = B - i;
        if (C > 20) {
            i = B;
            y()
        }
    }
    function y() {
        q.fillStyle = "#8fc600";
        q.fillRect(0, 0, 698, 198);
        var C, B;
        for (C = 0; C < A; C++) {
            B = w;
            w = m[C].loop(B);
            q.beginPath();
            q.drawImage(r.canvas, 0, (C * j), 698, j, w, (C * j), 698, j)
        }
    }
    return {
        init: u,
        start: e,
        dispose: z,
        pause: h,
        resume: a,
        value: g
    }
}
)();
(function(a) {
    function b() {
        this.init.apply(this, arguments)
    }
    b.prototype = {
        init: function(c) {
            this.curNo = c;
            this.ddx = 0;
            this.px = 0;
            this.curTx = 0
        },
        loop: function(c) {
            var d;
            if (this.curNo == 0) {
                d = 2 * Math.random() - 1
            } else {
                d = c
            }
            this.ddx += (d - this.px - this.ddx) / 1.45;
            this.px += this.ddx / RippleGreen.value;
            this.curTx = this.px;
            return this.curTx
        }
    };
    a.RippleJS = b
}
)(window);
var FlipClock = FlipClock || (function() {
    var j = false, r = 0, l = 0, q = 0, h, c, g, n, i = 960, o = 200, m = '<div id="flipclock" class="contents-data"><div class="flipclock-con"><ul class="flip flip-hour"><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div><div class="flip-apm">AM</div></div></span></li><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div><div class="flip-apm">AM</div></div></span></li></ul><ul class="flip flip-minute"><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div></div></span></li><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div></div></span></li></ul></div><div class="flipclock-con2"><ul class="flip flip-second"><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div></div></span></li><li><span><div class="flip-up"><div class="flip-shadow"></div><div class="flip-text">00</div></div><div class="flip-down"><div class="flip-shadow"></div><div class="flip-text">00</div></div></span></li></ul></div></div>';
    function p(v) {
        v.innerHTML = m;
        j = false;
        n = $("#flipclock");
        if (CMDetect.isMobile) {
            o = 280
        }
        StageController.addResize("FlipClock", t)
    }
    function d() {
        r = 0;
        l = 0;
        q = 0;
        var x = new Date()
          , w = x.getMinutes()
          , y = x.getSeconds()
          , v = x.getHours();
        c = w;
        g = v;
        k(w);
        f(v);
        s(y);
        TweenLite.delayedCall(1, a)
    }
    function t() {
        var v = StageController.stageWidth - o
          , w = 1;
        if (i > v) {
            w = v / i
        }
        n[0].style[CMDetect.cssHead] = "scale(" + w + ")"
    }
    function u() {
        StageController.removeResize("FlipClock");
        j = true;
        TweenLite.killDelayedCallsTo(a);
        n = null 
    }
    function e() {
        j = true;
        TweenLite.killDelayedCallsTo(a)
    }
    function b() {
        j = false;
        a()
    }
    function a() {
        if (j) {
            return
        }
        TweenLite.delayedCall(1, a);
        var x = new Date()
          , w = x.getMinutes()
          , y = x.getSeconds()
          , v = x.getHours();
        if (h != y) {
            h = y;
            s(y)
        }
        if (c != w) {
            c = w;
            k(w)
        }
        if (g != v) {
            g = v;
            f(v)
        }
    }
    function s(y) {
        n.removeClass("play");
        var x = $("ul.flip-second li.active"), w;
        if (x.html() == undefined) {
            x = $("ul.flip-second li").eq(0);
            x.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
            r = 0
        } else {
            if (x.is(":last-child")) {
                $("ul.flip-second li").removeClass("before");
                x.addClass("before").removeClass("active");
                x = $("ul.flip-second li").eq(0);
                x.addClass("active").closest("#flipclock").addClass("play");
                r = -1
            } else {
                $("ul.flip-second li").removeClass("before");
                x.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
                r = r + 1
            }
        }
        var v = CMUtiles.addZeros(y, 1);
        w = $("ul.flip-second li").eq(r + 1);
        w.find(".flip-text").html(v)
    }
    function k(x) {
        n.removeClass("play");
        var y = $("ul.flip-minute li.active"), w;
        if (y.html() == undefined) {
            y = $("ul.flip-minute li").eq(0);
            y.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
            l = 0
        } else {
            if (y.is(":last-child")) {
                $("ul.flip-minute li").removeClass("before");
                y.addClass("before").removeClass("active");
                y = $("ul.flip-minute li").eq(0);
                y.addClass("active").closest("#flipclock").addClass("play");
                l = -1
            } else {
                $("ul.flip-minute li").removeClass("before");
                y.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
                l = l + 1
            }
        }
        var v = CMUtiles.addZeros(x, 1);
        w = $("ul.flip-minute li").eq(l + 1);
        w.find(".flip-text").html(v)
    }
    function f(w) {
        n.removeClass("play");
        var y = $("ul.flip-hour li.active"), x;
        if (y.html() == undefined) {
            y = $("ul.flip-hour li").eq(0);
            y.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
            q = 0
        } else {
            if (y.is(":last-child")) {
                $("ul.flip-hour li").removeClass("before");
                y.addClass("before").removeClass("active");
                y = $("ul.flip-hour li").eq(0);
                y.addClass("active").closest("#flipclock").addClass("play");
                q = -1
            } else {
                $("ul.flip-hour li").removeClass("before");
                y.addClass("before").removeClass("active").next("li").addClass("active").closest("#flipclock").addClass("play");
                q = q + 1
            }
        }
        var v = "AM";
        if (w > 12) {
            w = w - 12;
            v = "PM"
        } else {
            if (w == 12) {
                v = "PM"
            }
        }
        var z = CMUtiles.addZeros(w, 1);
        x = $("ul.flip-hour li").eq(q + 1);
        x.find(".flip-text").html(z);
        x.find(".flip-apm").html(v)
    }
    return {
        init: p,
        start: d,
        dispose: u,
        pause: e,
        resume: b
    }
}
)();
var BlendHue = BlendHue || (function() {
    var n = false, a, f, l, H = 10, t = 174, B = 204, C = t >> 1, m = B >> 1, M, q, A, I, K, i, b = ["#d80c1b", "#d80c80", "#c80cd8", "#630cd8", "#0c1bd8", "#0c80d8", "#0cd8c8", "#0cd863", "#80d80c", "#d8c80c"], o, y, E, F = '<div id="con-blend" class="contents-data"><div id="home-blend"></div><div id="blend-guide" class="contents-guide"><div class="guide-mouse"></div><div class="guide-tooltip">move</div></div></div>';
    function J(O) {
        O.innerHTML = F;
        n = false;
        a = false;
        q = [];
        M = document.getElementById("home-blend");
        y = document.getElementById("blend-guide");
        E = y.getElementsByClassName("guide-tooltip")[0];
        K = i = 0;
        o = null ;
        StageController.addResize("BlendHue", k)
    }
    function u() {
        if (CMDetect.isTouch) {
            E.innerHTML = "press & move"
        }
        o = TweenLite.delayedCall(0.2, G)
    }
    function s() {
        StageController.removeResize("BlendHue");
        n = true;
        d();
        q = [];
        M.innerHTML = "";
        M = null ;
        if (y != null ) {
            TweenLite.killTweensOf(y)
        }
        y = null ;
        E = null ;
        if (o != null ) {
            TweenLite.killTweensOf(o)
        }
        o = null 
    }
    function c() {
        n = true;
        d();
        if (o != null ) {
            o.pause()
        }
    }
    function g() {
        n = false;
        if (o == null ) {
            e()
        } else {
            o.resume()
        }
    }
    function k() {
        f = StageController.stageWidth;
        l = StageController.stageHeight;
        var Q = Math.ceil((f + 0) / t)
          , P = Math.ceil((l + 0) / B)
          , O = (f - (Q * t)) >> 1
          , R = (l - (P * B)) >> 1;
        M.style[CMDetect.cssHead] = "translate3d(" + O + "px, " + R + "px, 0px)";
        if (K != Q || i != P) {
            K = Q;
            i = P;
            z()
        }
    }
    function G() {
        y.style.display = "block";
        TweenLite.set(y, {
            css: {
                opacity: 0,
                x: (f >> 1),
                y: (l >> 1)
            }
        });
        o = TweenLite.to(y, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: v
        })
    }
    function v() {
        o = TweenLite.to(y, 1, {
            delay: 0.5,
            css: {
                x: 100
            },
            onUpdate: D,
            onComplete: r
        })
    }
    function r() {
        o = TweenLite.to(y, 1, {
            delay: 0.2,
            css: {
                x: (f >> 1) + 100
            },
            onUpdate: D,
            onComplete: w
        })
    }
    function D() {
        var O = y.getBoundingClientRect();
        N(O.left, O.top)
    }
    function w() {
        a = false;
        o = null ;
        TweenLite.to(y, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: x
        })
    }
    function x() {
        CMUtiles.removeDom(y);
        e()
    }
    function z() {
        q = [];
        M.innerHTML = "";
        var T = K * i, Q, S, V, P, O, U, R;
        A = T;
        for (Q = 0; Q < A; Q++) {
            V = CMUtiles.getWallPosition(Q, K, t, B);
            P = Number(V[0]);
            O = Number(V[1]);
            S = document.createElement("div");
            S.className = "blend-item";
            S.innerHTML = '<div class="blend-frame"><span class="blend-front"><div class="blend-img2"></div></span><span class="blend-right"></span><span class="blend-left"></span><span class="blend-top"></span><span class="blend-bottom"></span></div>';
            S.style.top = O + "px";
            S.style.left = P + "px";
            S.style.width = t + "px";
            S.style.height = B + "px";
            M.appendChild(S);
            q[Q] = {
                img: S.getElementsByClassName("blend-img")[0],
                front: S.getElementsByClassName("blend-front")[0],
                x: P + C,
                y: O + m
            };
            if (Q == 0) {
                U = [P, O]
            } else {
                if (Q == A - 1) {
                    R = [P, O]
                }
            }
        }
        I = (p(U[0], U[1], R[0], R[1]) / H) | 0
    }
    function N(T, R) {
        var P, Q, O, S;
        for (P = 0; P < A; P++) {
            Q = q[P];
            O = p(T, R, Q.x, Q.y);
            S = (O / I) | 0;
            if (S < 0) {
                S = 0
            } else {
                if (S >= H) {
                    S = H - 1
                }
            }
            Q.front.style.backgroundColor = b[S]
        }
    }
    function p(Q, S, P, R) {
        var O = Q - P;
        var T = S - R;
        return Math.sqrt(O * O + T * T)
    }
    function e() {
        if (CMDetect.isTouch) {
            StageController.addDown("blendhue", h);
            StageController.addUp("blendhue", L)
        } else {
            a = true
        }
        StageController.addMove("blendhue", j)
    }
    function d() {
        if (CMDetect.isTouch) {
            StageController.removeDown("blendhue", h);
            StageController.removeUp("blendhue", L)
        }
        StageController.removeMove("blendhue", j)
    }
    function h(P, O) {
        a = true
    }
    function j(P, O) {
        if (a) {
            N(P, O)
        }
    }
    function L() {
        a = false
    }
    return {
        init: J,
        start: u,
        dispose: s,
        pause: c,
        resume: g,
        resize: k
    }
}
)();
var GlowLight = GlowLight || (function() {
    var c, t, k, b, p, o, l = CMDetect.isTouch, h = (CMDetect.browserName == "ch" || CMDetect.browserName == "sf" || CMDetect.browserName == "ie" || CMDetect.browserName == "ie10") ? true : false, d, n = 16, j = 200, r = 5, q = 0, e = 0.002, s = '<div id="glowlight" class="contents-data"><div id="glowlight-con"><canvas id="glowlight-world"></canvas></div></div>';
    function u(D) {
        D.innerHTML = s;
        k = false;
        q = 0;
        var y = StageController.stageWidth, A = StageController.stageHeight, C;
        if (CMDetect.isRetina && CMDetect.isIpad) {
            l = false;
            h = true
        }
        d = document.getElementById("glowlight-con");
        if (l) {
            n = 6;
            e = 0.008;
            j = 150;
            b = 466;
            p = 466;
            d.style.width = "466px";
            d.style.height = "466px";
            d.style.position = "absolute";
            d.style.zIndex = 1;
            d.appendChild(CMDetect.circleMask)
        } else {
            if (!h) {
                n = 8;
                e = 0.008;
                j = 180;
                b = 466;
                p = 466;
                d.style.width = "466px";
                d.style.height = "466px";
                d.style.position = "absolute";
                d.style.zIndex = 1;
                d.appendChild(CMDetect.circleMask)
            } else {
                b = y;
                p = A;
                if (y > A) {
                    C = y
                } else {
                    C = A
                }
                j = (C / 8) | 0;
                if (j < 200) {
                    j = 200
                }
                r = (j / 40) | 0
            }
        }
        c = document.getElementById("glowlight-world");
        c.width = b;
        c.height = p;
        t = c.getContext("2d");
        t.fillStyle = "rgb(17,17,17)";
        t.fillRect(0, 0, b, p);
        if (o == null ) {
            m()
        } else {
            var z, B;
            for (z = 0; z < n; z++) {
                B = o[z];
                B.initialize(2 * b, 2 * p, Math.random() * (j - r) + r)
            }
        }
        StageController.addResize("GlowLight", w)
    }
    function f() {
        k = false;
        g()
    }
    function x() {
        StageController.removeResize("GlowLight");
        k = true;
        c = null ;
        t = null ;
        d = null 
    }
    function i() {
        k = true
    }
    function a() {
        k = false;
        g()
    }
    function w() {
        var z = StageController.stageWidth
          , B = StageController.stageHeight;
        if (l || !h) {
            var A = (z - 466) >> 1
              , y = (B - 466) >> 1;
            d.style[CMDetect.cssHead] = "translate(" + A + "px, " + y + "px)"
        } else {
            b = z;
            p = B;
            c.width = b;
            c.height = p;
            t = c.getContext("2d")
        }
    }
    function m() {
        o = [];
        var y, z;
        for (y = 0; y < n; y++) {
            z = new GlowLightParticle(2 * b,2 * p,Math.random() * (j - r) + r);
            o[y] = z
        }
    }
    function g() {
        if (k) {
            return
        }
        requestAnimationFrame(g);
        v()
    }
    function v() {
        t.globalCompositeOperation = "source-over";
        t.fillStyle = "rgb(17,17,17)";
        t.fillRect(0, 0, b, p);
        t.globalCompositeOperation = "lighter";
        var z, B, y = -1, C = 300, A;
        for (z = 0; z < n; z++) {
            B = o[z];
            B.x = B.x + B.vx;
            B.y = B.y + B.vy;
            B.r = B.r + Math.sin(q);
            q = q + e;
            if (B.x > b - B.r + C) {
                B.vx *= y;
                B.x = b - B.r + C
            }
            if (B.x < 0 + B.r - C) {
                B.vx *= y;
                B.x = B.r - C
            }
            if (B.y > p - B.r + C) {
                B.vy *= y;
                B.y = p - B.r + C
            }
            if (B.y < 0 + B.r - C) {
                B.vy *= y;
                B.y = B.r - C
            }
            A = t.createRadialGradient(B.x, B.y, B.r, B.x, B.y, B.r * 2);
            A.addColorStop(0, B.hsla);
            A.addColorStop(1, "rgba(0,0,0,0)");
            t.beginPath();
            t.fillStyle = A;
            t.arc(B.x, B.y, B.r * 3, 0, Math.PI * 2, false);
            t.fill()
        }
    }
    return {
        init: u,
        start: f,
        dispose: x,
        pause: i,
        resume: a,
        resize: w
    }
}
)();
(function(b) {
    function a() {
        this.initialize.apply(this, arguments)
    }
    a.prototype = {
        initialize: function(c, e, d) {
            this.x = c;
            this.y = e;
            this.r = d;
            this.vx = Math.random() * 7;
            this.vy = Math.random() * 7;
            this.h = CMUtiles.randomInteger(0, 15);
            this.hsla = "hsla(" + ((360 / 15) * this.h) + ",100%,50%,1)"
        },
        r: 1,
        vx: 1,
        vy: 1
    };
    b.GlowLightParticle = a
}
)(window);
var Cylinder3D = Cylinder3D || (function() {
    var m = false, u, k, i, o, n, w, v, c, b, g, j, p = '<div id="soup-homecon" class="contents-data chand"><div class="gradation gradation-css"></div><div id="soup-home"><div id="soup-frame"><div id="soup-position"><div id="soup-strip"><span id="soup-up"></span></div></div></div></div></div>';
    function s(B) {
        B.innerHTML = p;
        m = false;
        u = false;
        w = 50;
        v = 0;
        c = 0;
        b = 0;
        o = 0;
        n = 0;
        g = document.getElementById("soup-strip");
        j = document.getElementById("soup-position");
        if (!CMDetect.isDevice && CMDetect.cssHead == "WebkitTransform") {
            document.getElementById("soup-home").className = "soup-reflect"
        }
        var z, A, C;
        for (z = 0; z < 24; z++) {
            A = document.createElement("div");
            A.id = "soup-item-" + z;
            g.appendChild(A);
            if (z == 0) {
                C = 0
            } else {
                C = 1200 - (50 * z)
            }
            A.style.backgroundPosition = C + "px 0";
            A.style[CMDetect.cssHead] = "rotateY(" + (15 * z) + "deg) translateZ(187px) translateY(-242px)"
        }
        t()
    }
    function e() {
        f();
        q()
    }
    function y() {
        m = true;
        r();
        g.innerHTML = "";
        g = null ;
        j = null 
    }
    function h() {
        m = true;
        r()
    }
    function a() {
        m = false;
        f();
        q()
    }
    function f() {
        if (m) {
            return
        }
        requestAnimationFrame(f);
        t()
    }
    function t() {
        if (!u) {
            c = (c > 0) ? (c + 0.02) : (c - 0.02)
        }
        c = c * 0.95;
        b = b * 0.95;
        w = w + c;
        v = v + b;
        v = (v > 30) ? 30 : (v < -40) ? -40 : v;
        g.style[CMDetect.cssHead] = "rotateY(" + w + "deg)";
        j.style[CMDetect.cssHead] = "rotateX(" + -v + "deg)"
    }
    function q() {
        StageController.addDown("cylinder", d);
        StageController.addMove("cylinder", l);
        StageController.addUp("cylinder", x)
    }
    function r() {
        StageController.removeDown("cylinder", d);
        StageController.removeMove("cylinder", l);
        StageController.removeUp("cylinder", x)
    }
    function d(A, z) {
        u = true;
        c = 0;
        b = 0;
        o = k = A;
        n = i = z
    }
    function l(A, z) {
        if (!u) {
            return
        }
        c = (A - o) * 0.6;
        b = (z - n) * 0.1;
        o = k = A;
        n = i = z
    }
    function x() {
        u = false
    }
    return {
        init: s,
        start: e,
        dispose: y,
        pause: h,
        resume: a
    }
}
)();
var Panorama = Panorama || (function() {
    var n = false, z = false, k, i, p, o, d, c, B, A, m, E, y, j, b = CMDetect.cssHead, q = '<div id="panorama-home" class="contents-data chand"><div id="panorama-container"><div id="panorama-position"><div id="panorama-cube"><div id="panorama-cube-top" class="panorama-face"><img src="contents/panorama/panorama-up.jpg" width="100%" height="100%" /></div><div id="panorama-cube-bottom" class="panorama-face"><img src="contents/panorama/panorama-down.jpg" width="100%" height="100%" /></div><div id="panorama-cube-left" class="panorama-face"><img src="contents/panorama/panorama-left.jpg" width="100%" height="100%" /></div><div id="panorama-cube-right" class="panorama-face"><img src="contents/panorama/panorama-right.jpg" width="100%" height="100%" /></div><div id="panorama-cube-front" class="panorama-face"><img src="contents/panorama/panorama-front.jpg" width="100%" height="100%" /></div><div id="panorama-cube-back" class="panorama-face"><img src="contents/panorama/panorama-back.jpg" width="100%" height="100%" /></div></div></div></div></div>';
    function t(F) {
        F.innerHTML = q;
        z = false;
        n = false;
        d = 0;
        c = 0;
        B = 0;
        A = 0;
        p = 0;
        o = 0;
        y = document.getElementById("panorama-cube");
        j = document.getElementById("panorama-position");
        E = {
            no: 0
        };
        m = null 
    }
    function f() {
        g();
        w()
    }
    function D() {
        n = true;
        if (E != null ) {
            TweenLite.killTweensOf(E)
        }
        E = null ;
        if (m != null ) {
            TweenLite.killTweensOf(m)
        }
        m = null ;
        s();
        y = null ;
        j = null 
    }
    function h() {
        s();
        z = false;
        d = 0;
        c = 0;
        if (m != null ) {
            m.pause()
        }
    }
    function a() {
        n = false;
        g();
        if (m == null ) {
            r()
        } else {
            m.resume()
        }
    }
    function w() {
        z = true;
        k = 0;
        i = 0;
        m = TweenLite.to(E, 2, {
            no: -270,
            ease: Circ.easeInOut,
            onUpdate: v,
            onComplete: u
        })
    }
    function v() {
        B = E.no;
        y.style[b] = "rotateY(" + -B + "deg)"
    }
    function u() {
        z = false;
        m = null ;
        r()
    }
    function g() {
        if (n) {
            return
        }
        requestAnimationFrame(g);
        x()
    }
    function x() {
        d = d * 0.95;
        B = (B + d) % 360;
        B = (B < 0) ? B + 360 : B;
        c = c * 0.95;
        A = A + c;
        A = (A > 50) ? 50 : (A < -50) ? -50 : A;
        y.style[b] = "rotateY(" + -B + "deg)";
        j.style[b] = "translateZ(500px) rotateX(" + A + "deg)"
    }
    function r() {
        StageController.addDown("panorama", e);
        StageController.addMove("panorama", l);
        StageController.addUp("panorama", C)
    }
    function s() {
        StageController.removeDown("panorama", e);
        StageController.removeMove("panorama", l);
        StageController.removeUp("panorama", C)
    }
    function e(G, F) {
        z = true;
        d = 0;
        c = 0;
        p = k = G;
        o = i = F
    }
    function l(G, F) {
        if (!z) {
            return
        }
        d = (G - p) * 0.1;
        c = (F - o) * 0.08;
        p = k = G;
        o = i = F
    }
    function C() {
        z = false
    }
    return {
        init: t,
        start: f,
        dispose: D,
        pause: h,
        resume: a
    }
}
)();
var ColorPixelated = ColorPixelated || (function() {
    var P, q, u, s, r, av, k, g, N, T, w, ak, aa, ao, d, au, x = Math.PI * 2, o = 67, l, S, Y = 0, n = 16, H = 15, A, ai, aw, ar, p, D, h, ap = 115, am = 10, M = 0, L = 0, af = 0, ae = 0, z, I = false, v, b = '<div id="pixelated-home" class="contents-data"><div id="pixelated-con" class="chand-leftright"><div id="pixelated-img"></div><div id="pixelated-mask"><div id="pixelated-mask-move"><div id="pixelated-move"><canvas id="pixelated-world"></canvas></div><div id="pixelated-drag" class="chand-resize-nw"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="67px" height="67px" viewBox="0 0 67 67" enable-background="new 0 0 67 67" xml:space="preserve"><polygon points="67,67 0,67 0,67 67,0 "/><polygon fill="#FFFFFF" points="55.298,49.377 49.305,55.369 56.206,56.277 "/><polyline fill="#FFFFFF" points="41.325,41.379 42.233,48.279 48.227,42.287 "/></svg></div></div></div></div><div id="pixelated-loading"></div><div id="pixelated-guide" class="contents-guide"><div id="pixelated-guide-tooltip" class="guide-tooltip">press & move</div><div class="guide-mouse"></div></div></div>';
    function O(az) {
        az.innerHTML = b;
        v = {
            lines: 12,
            length: 3,
            width: 3,
            radius: 6,
            color: "#fff",
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: false,
            zIndex: 2000000000
        };
        if (CMDetect.isTablet) {
            n = 26;
            H = 25;
            o = 80
        } else {
            if (CMDetect.isMobile) {
                n = 46;
                H = 45;
                o = 160;
                v.width = 9;
                v.length = 9;
                v.radius = 18;
                ap = 140;
                am = 30
            }
        }
        d = document.getElementById("pixelated-world");
        au = d.getContext("2d");
        A = document.getElementById("pixelated-img");
        ai = document.getElementById("pixelated-mask");
        g = document.getElementById("pixelated-mask-move");
        aw = document.getElementById("pixelated-drag");
        ar = document.getElementById("pixelated-move");
        p = document.getElementById("pixelated-con");
        s = document.getElementById("pixelated-guide");
        r = document.getElementById("pixelated-guide-tooltip");
        D = $("#pixelated-loading");
        l = false;
        S = false;
        z = 0;
        aa = N = StageController.stageWidth;
        ao = T = StageController.stageHeight;
        w = N >> 1;
        ak = T >> 1;
        aw.style[CMDetect.cssHead] = "translate3d(" + (aa - o) + "px, " + (ao - o) + "px, 0px)";
        M = N;
        L = T;
        f(0);
        StageController.addResize("ColorPixelated", i)
    }
    function f(az) {
        z = az;
        if (P != null ) {
            P = null 
        }
        P = new Image();
        P.src = "contents/pixelated/gogh" + az + ".jpg";
        P.onload = ah
    }
    function ah() {
        q = P.width;
        u = P.height;
        A.innerHTML = '<img src="' + P.src + '" width="100%" height="100%" />';
        i();
        if (I) {
            D.hide().spin(false);
            TweenLite.killTweensOf(p);
            TweenLite.to(p, 0.6, {
                delay: 0.2,
                css: {
                    x: 0
                },
                ease: Cubic.easeOut,
                onComplete: R
            })
        }
    }
    function R() {
        TweenLite.set(ai, {
            css: {
                x: -N
            }
        });
        TweenLite.set(g, {
            css: {
                x: N
            }
        });
        TweenLite.to(ai, 1, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Expo.easeInOut
        });
        TweenLite.to(g, 1, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Expo.easeInOut,
            onComplete: K
        })
    }
    function K() {
        A.innerHTML = "";
        I = false;
        Address.able()
    }
    function i() {
        N = StageController.stageWidth;
        T = StageController.stageHeight;
        var aA = 0
          , az = 0;
        if (N == aa && T == ao) {
            aa = N;
            ao = T;
            ar.style[CMDetect.cssHead] = "translate3d(" + 0 + "px, " + 0 + "px, 0px)";
            ar.style.width = "100%";
            ar.style.height = "100%"
        } else {
            if (N < aa) {
                aa = N
            }
            if (T < ao) {
                ao = T
            }
            aA = (N - aa) >> 1;
            az = (T - ao) >> 1;
            ar.style[CMDetect.cssHead] = "translate3d(" + aA + "px, " + az + "px, 0px)"
        }
        w = N >> 1;
        ak = T >> 1;
        d.width = N;
        d.height = T;
        au = d.getContext("2d");
        aw.style[CMDetect.cssHead] = "translate3d(" + (aa - o + aA) + "px, " + (ao - o + az) + "px, 0px)";
        C(aa, ao)
    }
    function j() {
        StageController.removeResize("ColorPixelated");
        F();
        M = 0;
        L = 0;
        af = 0;
        ae = 0;
        P = null ;
        A = null ;
        ai = null ;
        g = null ;
        aw = null ;
        ar = null ;
        s = null ;
        p = null ;
        D = null ;
        d = null ;
        au = null ;
        if (av != null ) {
            TweenLite.killTweensOf(av)
        }
        av = null ;
        if (k != null ) {
            TweenLite.killTweensOf(k)
        }
        k = null 
    }
    function m() {
        ai.style.display = "block";
        TweenLite.set(ai, {
            css: {
                x: -N
            }
        });
        TweenLite.set(g, {
            css: {
                x: N
            }
        });
        av = TweenLite.to(ai, 1, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Expo.easeInOut
        });
        k = TweenLite.to(g, 1, {
            delay: 0.3,
            css: {
                x: 0
            },
            ease: Expo.easeInOut,
            onComplete: y
        })
    }
    function y() {
        A.innerHTML = "";
        k = null ;
        aj()
    }
    function J() {
        F();
        if (av != null ) {
            av.pause()
        }
        if (k != null ) {
            k.pause()
        }
    }
    function aq() {
        if (av == null  && k == null ) {
            E()
        } else {
            if (av != null ) {
                av.resume()
            }
            if (k != null ) {
                k.resume()
            }
        }
    }
    function aj() {
        s.style.display = "block";
        var az = 0;
        if (CMDetect.isMobile) {
            az = 150
        }
        TweenLite.to(s, 0, {
            css: {
                opacity: 0,
                x: (N >> 1) - az,
                y: T >> 1
            }
        });
        av = TweenLite.to(s, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: ac
        })
    }
    function ac() {
        var az = 140
          , aA = 20;
        if (CMDetect.isMobile) {
            az = 260;
            aA = 60
        }
        av = TweenLite.to(s, 0.6, {
            delay: 0.4,
            css: {
                x: N - az,
                y: T - aA
            },
            onComplete: ab
        })
    }
    function ab() {
        av = TweenLite.to(s, 1, {
            delay: 0.6,
            css: {
                x: (N - (N / 3)),
                y: (T - (T / 3))
            },
            onUpdate: t,
            onComplete: X
        })
    }
    function X() {
        var az = 140
          , aA = 20;
        if (CMDetect.isMobile) {
            az = 260;
            aA = 60
        }
        av = TweenLite.to(s, 1, {
            delay: 0.2,
            css: {
                x: (N - az),
                y: (T - aA)
            },
            onUpdate: t,
            onComplete: W
        })
    }
    function W() {
        var az = 0;
        if (CMDetect.isMobile) {
            az = 160
        }
        av = TweenLite.to(s, 0.6, {
            delay: 0.2,
            css: {
                x: (N >> 1) - az,
                y: (T >> 1)
            },
            onComplete: V
        })
    }
    function V() {
        var az = 150;
        if (CMDetect.isMobile) {
            az = 300
        }
        r.innerHTML = "press & slide";
        av = TweenLite.to(s, 0.6, {
            delay: 0.6,
            css: {
                x: (N >> 1) - az,
                y: (T >> 1)
            },
            onComplete: U
        });
        k = TweenLite.to(p, 0.6, {
            delay: 0.6,
            css: {
                x: -150
            }
        })
    }
    function U() {
        var az = 0;
        if (CMDetect.isMobile) {
            az = 150
        }
        av = TweenLite.to(s, 0.6, {
            delay: 0.2,
            css: {
                x: (N >> 1) - az,
                y: (T >> 1)
            },
            onComplete: ad
        });
        k = TweenLite.to(p, 0.6, {
            delay: 0.2,
            css: {
                x: 0
            }
        })
    }
    function ad() {
        av = null ;
        k = null ;
        M = N;
        L = T;
        TweenLite.to(s, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: an
        })
    }
    function an() {
        CMUtiles.removeDom(s);
        aa = N = StageController.stageWidth;
        ao = T = StageController.stageHeight;
        E()
    }
    function t() {
        var az = s.getBoundingClientRect();
        M = (0.5 + (az.left + ap)) | 0;
        L = (0.5 + (az.top - am)) | 0;
        ag()
    }
    function E() {
        StageController.addDown("pixelated", ay);
        StageController.addMove("pixelated", B);
        StageController.addUp("pixelated", e)
    }
    function F() {
        StageController.removeDown("pixelated", ay);
        StageController.removeMove("pixelated", B);
        StageController.removeUp("pixelated", e)
    }
    function ay(aB, aA) {
        if (I) {
            return
        }
        var az = ax(aB, aA);
        if (az == 1) {
            l = true;
            S = false
        } else {
            if (az == 2) {
                TweenLite.killTweensOf(p);
                Y = aB;
                h = aB;
                S = true;
                l = false
            }
        }
    }
    function B(aA, az) {
        if (I) {
            return
        }
        if (l) {
            M = aA;
            L = az;
            ag()
        } else {
            if (S) {
                h = aA;
                at(aA)
            }
        }
    }
    function e() {
        if (I) {
            return
        }
        if (S) {
            a()
        }
        l = false;
        S = false
    }
    function ax(aA, az) {
        var aD = aw.getBoundingClientRect()
          , aC = aD.left
          , aB = aD.top;
        if (aA > aC && aA < aC + o && az > aB && az < aB + o) {
            return 1
        } else {
            if (aA > 100 && aA < N - 100 && az > 100 && az < T - 100) {
                return 2
            } else {
                return 0
            }
        }
    }
    function at(az) {
        var aA = az - Y;
        TweenLite.set(p, {
            css: {
                x: aA
            }
        })
    }
    function a() {
        var az = h - Y
          , aA = Math.abs(az);
        TweenLite.killTweensOf(p);
        if (aA < 150) {
            TweenLite.to(p, 0.6, {
                css: {
                    x: 0
                },
                ease: Cubic.easeOut
            })
        } else {
            Address.unable();
            D.show().spin(v);
            I = true;
            if (az < 0) {
                al()
            } else {
                G()
            }
        }
    }
    function G() {
        TweenLite.to(p, 0.6, {
            css: {
                x: N
            },
            ease: Cubic.easeOut,
            onComplete: Z
        })
    }
    function al() {
        TweenLite.to(p, 0.6, {
            css: {
                x: -N
            },
            ease: Cubic.easeOut,
            onComplete: c
        })
    }
    function Z() {
        TweenLite.killTweensOf(p);
        TweenLite.killTweensOf(g);
        TweenLite.killTweensOf(ai);
        TweenLite.set(p, {
            css: {
                x: -N
            }
        });
        TweenLite.set(ai, {
            css: {
                x: -N
            }
        });
        TweenLite.set(g, {
            css: {
                x: N
            }
        });
        aa = N;
        ao = T;
        ar.style[CMDetect.cssHead] = "translate3d(" + 0 + "px, " + 0 + "px, 0px)";
        ar.style.width = aa + "px";
        ar.style.height = ao + "px";
        var az = CMUtiles.getInsideMax(z - 1, 3);
        f(az)
    }
    function c() {
        TweenLite.killTweensOf(p);
        TweenLite.killTweensOf(g);
        TweenLite.killTweensOf(ai);
        TweenLite.set(p, {
            css: {
                x: N
            }
        });
        TweenLite.set(ai, {
            css: {
                x: -N
            }
        });
        TweenLite.set(g, {
            css: {
                x: N
            }
        });
        aa = N;
        ao = T;
        ar.style[CMDetect.cssHead] = "translate3d(" + 0 + "px, " + 0 + "px, 0px)";
        ar.style.width = aa + "px";
        ar.style.height = ao + "px";
        var az = CMUtiles.getInsideMax(z + 1, 3);
        f(az)
    }
    function ag() {
        var aC = M - 33
          , aB = L - 33;
        if (af == aC && ae == aB) {
            return
        }
        af = aC;
        ae = aB;
        if (aC < w + o) {
            aC = w + o
        } else {
            if (aC > N - o) {
                aC = N - o
            }
        }
        if (aB < ak + o) {
            aB = ak + o
        } else {
            if (aB > T - o) {
                aB = T - o
            }
        }
        aw.style[CMDetect.cssHead] = "translate3d(" + aC + "px, " + aB + "px, 0px)";
        aa = N - ((N - aC - o) * 2);
        ao = T - ((T - aB - o) * 2);
        var aA = (N - aa) >> 1
          , az = (T - ao) >> 1;
        ar.style[CMDetect.cssHead] = "translate3d(" + aA + "px, " + az + "px, 0px)";
        ar.style.width = aa + "px";
        ar.style.height = ao + "px";
        C(aa, ao)
    }
    function C(az, aD) {
        var aE = az / aD, aG = q / u, aB, aF, aC, aA;
        if (aG > aE) {
            aB = (0.5 + (q * (aD / u))) | 0;
            aF = aD;
            aC = (0.5 + ((az - aB) / 2)) | 0;
            aA = 0
        } else {
            aB = az;
            aF = (0.5 + (u * (az / q))) | 0;
            aC = 0;
            aA = (0.5 + ((aD - aF) / 2)) | 0
        }
        A.style[CMDetect.cssHead] = "translate3d(" + aC + "px, " + aA + "px, 0px)";
        A.style.width = aB + "px";
        A.style.height = aF + "px";
        Q(az, aD, aC, aA, aB, aF)
    }
    function Q(aN, aT, aK, aH, aL, aP) {
        au.drawImage(P, aK, aH, aL, aP);
        var aS = au.getImageData(0, 0, aN, aT).data, aE = 0, aR = 0, aQ = 0, aM = aN / n + 1, aJ = aT / n + 1, aO = H / 2, aG, aD;
        au.fillStyle = "#111";
        au.fillRect(0, 0, N, T);
        if (CMUtiles.isObject(aE)) {
            aR = aE.x || 0;
            aQ = aE.y || 0
        } else {
            if (CMUtiles.isArray(aE)) {
                aR = aE[0] || 0;
                aQ = aE[1] || 0
            } else {
                aR = aQ = aE
            }
        }
        for (aG = 0; aG < aJ; aG++) {
            var aH = (aG - 0.5) * n + aQ
              , aB = Math.max(Math.min(aH, aT - 1), 0);
            for (aD = 0; aD < aM; aD++) {
                var aK = (aD - 0.5) * n + aR
                  , aC = Math.max(Math.min(aK, aN - 1), 0)
                  , aA = (aC + aB * aN) * 4
                  , aF = aS[aA + 0]
                  , aI = aS[aA + 1]
                  , az = aS[aA + 2];
                au.beginPath();
                au.fillStyle = "rgb(" + aF + "," + aI + "," + az + ")";
                au.arc(aK, aH, aO, 0, x, false);
                au.fill()
            }
        }
    }
    return {
        init: O,
        resize: i,
        start: m,
        pause: J,
        resume: aq,
        dispose: j
    }
}
)();
var Spiral = Spiral || (function() {
    var k = false, o, e = 40, j = 8, i = 3, m, h, r, l, a, d = "ROBERTSMITHSONAMERICANARTISTSMITHSONISMOSTWELLKNOWNFORHISPROVOCATIVEEARTHWORKTHESPIRALJETTYHEGAINEDINTERNATIONALRECOGNITIONFORHISGROUNDBREAKINGARTWHICHWASNOTLIMITEDBYGENREORMATERIALSASWELLASFORHISCRITICALWRITINGSTHATCHALLENGEDTRADITIONALCATEGORIESOFARTBETWEENTHEYEARSOF19641973", n = '<div id="spiral-con" class="contents-data"><div id="spiral-circle"></div><div id="spiral-home"></div></div>';
    function p(x) {
        x.innerHTML = n;
        k = false;
        o = document.getElementById("spiral-home");
        if (CMDetect.isDevice) {
            j = 7
        }
        l = j * e;
        r = d.split("");
        h = r.length;
        m = [];
        var w, t, s, v, u;
        for (s = 0; s < j; s++) {
            for (t = 0; t < e; t++) {
                v = (e - t) + (s * e) - 1;
                w = CMUtiles.getInsideMax(v - 1, h);
                u = new SpiralItem(s,t,e,i,r[w]);
                o.appendChild(u.element);
                m[v] = (u)
            }
        }
        a = l - 1
    }
    function f() {
        var s, t;
        for (s = 0; s < l; s++) {
            t = m[s];
            t.start()
        }
        TweenLite.delayedCall(2, b)
    }
    function b() {
        $(o).addClass("spiral-rotate")
    }
    function q() {
        k = true;
        TweenLite.killDelayedCallsTo(b);
        $(o).removeClass("spiral-rotate");
        m = []
    }
    function g() {
        k = true;
        TweenLite.killDelayedCallsTo(b);
        $(o).addClass("spiral-rotate-pause")
    }
    function c() {
        k = false;
        $(o).removeClass("spiral-rotate-pause")
    }
    return {
        init: p,
        start: f,
        dispose: q,
        pause: g,
        resume: c
    }
}
)();
(function(b) {
    function a() {
        this.init.apply(this, arguments)
    }
    a.prototype = {
        init: function(d, e, f, c, g) {
            this.element = document.createElement("p");
            this.div = document.createElement("div");
            this.div.innerHTML = g;
            this.element.appendChild(this.div);
            this.rotate = ((e + (f * ((c - 1) - d))) * -(360 / f)) - 90;
            this.scale = (1 - (e + (f * ((c - 1) - d))) / f / c);
            this.scale = this.scale * this.scale;
            this.element.style[CMDetect.cssHead] = "rotate(" + 0 + "deg) scale(" + 0 + ")"
        },
        start: function() {
            this.element.style[CMDetect.cssHead] = "rotate(" + this.rotate + "deg) scale(" + this.scale + ")"
        }
    };
    b.SpiralItem = a
}
)(window);
var Triangulation = Triangulation || (function() {
    var Z, k, y, v, G, K, B, ag = 4, S = 2, j = {
        no: 0
    }, U, ad, R, s, aa, ac, d, i, T, aj, z, I, x, am, n, h, g, ah, ao, O, e = ["contents/triangulation/tri1.json", "contents/triangulation/tri2.json", "contents/triangulation/tri3.json", "contents/triangulation/tri4.json", "contents/triangulation/tri5.json", "contents/triangulation/tri6.json", "contents/triangulation/tri7.json"], al = ["contents/triangulation/ny1.jpg", "contents/triangulation/ny2.jpg", "contents/triangulation/ny3.jpg", "contents/triangulation/ny4.jpg", "contents/triangulation/ny5.jpg", "contents/triangulation/ny6.jpg", "contents/triangulation/ny7.jpg"], W, Q = '<div id="triangulation-root" class="contents-data"><div id="triangulation-con" class="chand-updown"><div id="triangulation-img"><ul id="triangulation-img-move"><li><img src="contents/triangulation/ny1.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny2.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny3.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny4.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny5.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny6.jpg" width="466" height="466" /></li><li><img src="contents/triangulation/ny7.jpg" width="466" height="466" /></li></ul></div><canvas id="triangulation-world"></canvas><ul id="triangulation-btcon"><li id="triangulation-bt-1"><p></p></li><li id="triangulation-bt-2"><p></p></li><li id="triangulation-bt-3"><p></p></li><li id="triangulation-bt-4"><p></p></li><li id="triangulation-bt-5"><p></p></li><li id="triangulation-bt-6"><p></p></li><li id="triangulation-bt-7"><p></p></li></ul><div id="triangulation-loading"></div></div><div id="triangulation-guide" class="contents-guide"><div class="guide-mouse"></div><div class="guide-tooltip">press & up/down</div></div></div>';
    function ab(at) {
        at.innerHTML = Q;
        Z = false;
        ah = false;
        d = true;
        W = {
            lines: 12,
            length: 3,
            width: 3,
            radius: 6,
            color: "#fff",
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: false,
            zIndex: 2000000000
        };
        if (CMDetect.isMobile) {
            ag = 10;
            S = 6;
            W.width = 9;
            W.length = 9;
            W.radius = 18
        } else {
            if (CMDetect.isTablet) {
                ag = 6;
                S = 3
            }
        }
        k = document.getElementById("triangulation-world");
        k.width = 466;
        k.height = 466;
        y = k.getContext("2d");
        v = document.createElement("canvas");
        v.width = 466;
        v.height = 466;
        G = v.getContext("2d");
        T = $("#triangulation-loading");
        aj = document.getElementById("triangulation-con");
        z = document.getElementById("triangulation-img-move");
        aj.appendChild(CMDetect.circleMask);
        I = document.getElementById("triangulation-guide");
        O = [];
        B = [];
        var ar, ap, aq;
        for (aq = 0; aq < 7; aq++) {
            ar = $("#triangulation-bt-" + (aq + 1));
            ap = ar[0].getElementsByTagName("p")[0];
            O[aq] = ar;
            B[aq] = ap
        }
        i = 0;
        ae();
        StageController.addResize("Triangulation", u)
    }
    function V(aq) {
        Address.unable();
        T.show().spin(W);
        if (K != null ) {
            K = null 
        }
        s = false;
        aa = false;
        if (d) {
            ac = true
        }
        var ap = al[aq]
          , ar = e[aq];
        K = new Image();
        K.src = ap;
        K.onload = an;
        $.ajax({
            url: ar,
            dataType: "json"
        }).done(function(at) {
            f(at)
        }
        ).fail(function(at, av, au) {
            w()
        }
        )
    }
    function an() {
        G.drawImage(K, 0, 0);
        U = G.getImageData(0, 0, 466, 466).data;
        s = true;
        b()
    }
    function f(ap) {
        ad = ap;
        R = ad.length;
        aa = true;
        b()
    }
    function b() {
        if (Z) {
            return
        }
        if (s && aa && ac) {
            N()
        }
    }
    function w() {}
    function E() {
        V(0)
    }
    function D() {
        StageController.removeResize("Triangulation");
        TweenLite.killTweensOf(j);
        c();
        Z = true;
        if (I != null ) {
            TweenLite.killTweensOf(I)
        }
        I = null ;
        if (x != null ) {
            TweenLite.killTweensOf(x)
        }
        x = null ;
        U = null ;
        ad = null ;
        k = null ;
        y = null ;
        v = null ;
        G = null ;
        T = null ;
        aj = null ;
        z = null ;
        O = []
    }
    function a() {
        Z = true;
        TweenLite.killTweensOf(j);
        c();
        if (x != null ) {
            x.pause()
        }
    }
    function m() {
        Z = false;
        if (x == null ) {
            l()
        } else {
            x.resume()
        }
    }
    function u() {
        var ap = StageController.stageWidth, aq = StageController.stageHeight, ar;
        h = (ap - 476) >> 1;
        g = ((aq - 476) >> 1);
        if (aq > 710) {
            ar = g
        } else {
            ar = g - 25
        }
        aj.style[CMDetect.cssHead] = "translate(" + h + "px, " + ar + "px)"
    }
    function N() {
        T.hide().spin(false);
        TweenLite.killTweensOf(j);
        ao = 0;
        n = 0;
        j.no = 0;
        if (d) {
            d = false;
            x = TweenLite.to(j, 3, {
                delay: 0.1,
                no: R,
                onUpdate: M,
                onComplete: X,
                ease: Expo.easeInOut
            })
        } else {
            TweenLite.to(j, 3, {
                delay: 0.1,
                no: R,
                onUpdate: M,
                ease: Expo.easeInOut
            });
            Address.able()
        }
    }
    function X() {
        am = 0;
        var ap = 280;
        if (CMDetect.isMobile) {
            ap = 220
        }
        I.style.display = "block";
        TweenLite.set(I, {
            css: {
                opacity: 0,
                x: (h + ap),
                y: g
            }
        });
        x = TweenLite.to(I, 0.2, {
            css: {
                opacity: 1
            },
            onComplete: C
        })
    }
    function C() {
        x = TweenLite.to(I, 1, {
            delay: 0.6,
            css: {
                y: g + 350
            },
            onUpdate: P,
            onComplete: A
        })
    }
    function A() {
        x = TweenLite.to(I, 1, {
            delay: 0.3,
            css: {
                y: g
            },
            onUpdate: P,
            onComplete: F
        })
    }
    function F() {
        x = null ;
        TweenLite.to(I, 0.2, {
            css: {
                opacity: 0
            },
            onComplete: H
        })
    }
    function H() {
        CMUtiles.removeDom(I);
        am = 1;
        l();
        Address.able()
    }
    function P() {
        var ap = I.getBoundingClientRect();
        L(ap.left, ap.top + 10)
    }
    function M() {
        if (Z) {
            return
        }
        var ap = (0.5 + (j.no)) | 0;
        if (n == ap) {
            return
        }
        n = ap;
        y.clearRect(0, 0, 466, 466);
        var aq;
        for (aq = 0; aq < ap; aq++) {
            ak(aq)
        }
    }
    function ak(ar) {
        var aq, ax, av, au, ap, aw, at;
        at = ad[ar];
        ax = at.nodes[0];
        av = at.nodes[1];
        au = at.nodes[2];
        y.beginPath();
        y.moveTo(ax.x, ax.y);
        y.lineTo(av.x, av.y);
        y.lineTo(au.x, au.y);
        y.lineTo(ax.x, ax.y);
        ap = (ax.x + av.x + au.x) * 0.33333;
        aw = (ax.y + av.y + au.y) * 0.33333;
        aq = ((ap | 0) + (aw | 0) * 466) << 2;
        y.fillStyle = "rgba(" + U[aq] + ", " + U[aq + 1] + ", " + U[aq + 2] + ", 1)";
        y.fill()
    }
    function r(ap) {
        y.clearRect(0, 0, 466, 466);
        ac = false;
        TweenLite.killTweensOf(j);
        V(ap);
        TweenLite.to(z, 0.4, {
            css: {
                left: (466 * -ap)
            },
            onComplete: Y,
            ease: Cubic.easeInOut
        })
    }
    function Y() {
        ac = true;
        b()
    }
    function l() {
        StageController.addDown("triangulation", o);
        StageController.addMove("triangulation", t);
        StageController.addUp("triangulation", af);
        var aq, ap;
        if (CMDetect.isTouch) {
            for (ap = 0; ap < 7; ap++) {
                aq = O[ap];
                aq.off().on("click", J)
            }
        } else {
            for (ap = 0; ap < 7; ap++) {
                aq = O[ap];
                aq.off().on("click", J).on("mouseenter", ai).on("mouseleave", q)
            }
        }
    }
    function c() {
        StageController.removeDown("triangulation", o);
        StageController.removeMove("triangulation", t);
        StageController.removeUp("triangulation", af);
        var aq, ap;
        for (ap = 0; ap < 7; ap++) {
            aq = O[ap];
            aq.off()
        }
    }
    function ai(ar) {
        var at = Number((ar.currentTarget.id).substr(17, 18)) - 1;
        var aq, ap;
        for (ap = 0; ap < 7; ap++) {
            aq = B[ap];
            TweenLite.killTweensOf(aq);
            if (ap == at) {
                TweenLite.to(aq, 0.2, {
                    css: {
                        opacity: 1
                    }
                })
            } else {
                TweenLite.to(aq, 0.2, {
                    css: {
                        opacity: 0.4
                    }
                })
            }
        }
    }
    function q(ar) {
        var aq, ap;
        for (ap = 0; ap < 7; ap++) {
            aq = B[ap];
            TweenLite.killTweensOf(aq);
            TweenLite.to(aq, 0.2, {
                css: {
                    opacity: 1
                }
            })
        }
    }
    function J(ap) {
        i = Number((ap.currentTarget.id).substr(17, 18)) - 1;
        r(i);
        ae()
    }
    function ae() {
        var aq, ap;
        for (ap = 0; ap < 7; ap++) {
            aq = B[ap];
            if (ap == i) {
                aq.style.border = ag + "px solid #fff"
            } else {
                aq.style.border = S + "px solid #fff"
            }
        }
    }
    function o(aq, ap) {
        if (!ac) {
            return
        }
        ah = true;
        L(aq, ap)
    }
    function t(aq, ap) {
        if (!ah || !ac) {
            return
        }
        L(aq, ap)
    }
    function af() {
        if (!ah || !ac) {
            return
        }
        ah = false
    }
    function L(aq, ap) {
        var at = ap - g
          , au = aq - h;
        if (au < 0 || au > 476 || at < 0 || at > 476) {
            return
        }
        var ar = CMUtiles.getCurrent(at, 0, 476, R, 0);
        p(ar)
    }
    function p(ap) {
        if (n == ap) {
            return
        }
        ao = ap;
        TweenLite.killTweensOf(j);
        TweenLite.to(j, am, {
            no: ao,
            onUpdate: M,
            ease: Cubic.easeOut
        })
    }
    return {
        init: ab,
        start: E,
        dispose: D,
        pause: a,
        resume: m,
        resize: u
    }
}
)();
var ConfigModel = ConfigModel || (function() {
    var i = {
        configArr: null ,
        screensaverArr: null ,
        total: 0,
        screensaverTotal: 0,
        isWhite: 0,
        imgArr: null ,
        screensaverID: null ,
        sectionID: null 
    }, j, e, m = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 700 986" enable-background="new 0 0 700 986" xml:space="preserve">', b = '<polygon fill="#FFFFFF" points="565.612,732.012 565.612,730.106 558.402,730.106 558.402,739.992 560.744,739.992 560.744,736.002 565.228,736.002 565.228,734.083 560.744,734.083 560.744,732.012 "/><polygon fill="#FFFFFF" points="557.301,732.012 557.301,730.106 550.092,730.106 550.092,739.992 552.433,739.992 552.433,736.002 556.914,736.002 556.914,734.083 552.433,734.083 552.433,732.012 "/><rect x="578.526" y="734.672" fill="#FFFFFF" width="3.977" height="2.002"/><polygon fill="#FFFFFF" points="566.716,739.992 569.057,739.992 569.057,736.002 573.538,736.002 573.538,734.083 569.057,734.083 569.057,732.012 573.925,732.012 573.925,730.106 566.716,730.106 "/><polygon fill="#FFFFFF" points="594.434,756.992 596.775,756.992 596.775,753.001 601.256,753.001 601.256,751.083 596.775,751.083 596.775,749.011 601.643,749.011 601.643,747.106 594.434,747.106 "/><path fill="#FFFFFF" d="M607.054,746.799c-3.391,0-4.642,2.954-4.642,5.21c0,2.714,1.57,5.277,4.669,5.277 c3.021,0,4.734-2.521,4.734-5.167C611.815,749.767,610.475,746.799,607.054,746.799z M607.095,755.187 c-1.689,0-2.368-1.624-2.368-3.208c0-1.33,0.545-3.107,2.327-3.107c1.663,0,2.409,1.43,2.409,3.221 C609.463,753.479,608.837,755.187,607.095,755.187z"/><polygon fill="#FFFFFF" points="613.293,747.106 613.293,756.992 619.304,756.992 619.304,754.906 615.634,754.906 615.634,747.106 "/><polygon fill="#FFFFFF" points="626.513,754.906 622.842,754.906 622.842,747.106 620.5,747.106 620.5,756.992 626.513,756.992 "/><path fill="#FFFFFF" d="M575.057,753.044c1.022-0.377,1.927-1.052,1.927-2.729c0-2.828-2.208-3.208-3.604-3.208h-4.442v9.886h2.368 v-3.529h1.461l1.876,3.529h2.581L575.057,753.044z M573.233,751.631h-1.941v-2.689h1.954c0.412,0,1.396,0.029,1.396,1.316 C574.643,750.565,574.577,751.631,573.233,751.631z"/><polygon fill="#FFFFFF" points="647.991,747.106 646.623,753.911 644.867,747.106 642.777,747.106 641.076,753.911 639.691,747.106 637.339,747.106 639.719,756.992 642.14,756.992 643.843,750.665 645.533,756.992 647.953,756.992 650.333,747.106 "/><path fill="#FFFFFF" d="M583.566,754.023l-1.77-6.917h-3.431v9.886h2.289c0,0-0.014-6.006-0.055-7.393l1.943,7.393h2.033 l1.957-7.393c-0.054,1.932-0.055,7.393-0.054,7.393h2.262v-9.886h-3.432L583.566,754.023z"/><path fill="#FFFFFF" d="M627.363,752.009c0,2.714,1.57,5.277,4.669,5.277c3.021,0,4.734-2.521,4.734-5.167 c0-2.353-1.343-5.32-4.762-5.32C628.614,746.799,627.363,749.753,627.363,752.009z M632.005,748.871c1.663,0,2.407,1.43,2.407,3.221 c0,1.387-0.624,3.095-2.366,3.095c-1.689,0-2.368-1.624-2.368-3.208C629.678,750.648,630.223,748.871,632.005,748.871z"/><polygon fill="#FFFFFF" points="557.301,749.011 557.301,747.106 550.092,747.106 550.092,756.992 552.433,756.992 552.433,753.001  556.914,753.001 556.914,751.083 552.433,751.083 552.433,749.011 "/><path fill="#FFFFFF" d="M655.572,750.93l-1.036-0.154c-0.799-0.127-1.197-0.378-1.197-0.909c0-0.464,0.439-1.05,1.396-1.05 c1.011,0,1.782,0.488,2.461,1.23l1.729-1.301c-0.919-0.925-2.154-1.877-4.138-1.877c-2.421,0-3.789,1.359-3.789,3.305 c0,1.735,1.344,2.547,2.992,2.787l1.077,0.153c0.837,0.111,1.636,0.308,1.636,1.007c0,0.826-1.038,1.149-1.729,1.149 c-1.011,0-2.088-0.448-2.715-1.247l-1.782,1.19c0.959,1.176,2.088,2.002,4.284,2.002c2.686,0,4.27-1.357,4.27-3.443 C659.031,752.078,658.02,751.294,655.572,750.93z"/><path fill="#FFFFFF" d="M562.739,757.286c3.02,0,4.736-2.521,4.736-5.167c0-2.353-1.344-5.32-4.762-5.32 c-3.393,0-4.644,2.954-4.644,5.21C558.07,754.723,559.64,757.286,562.739,757.286z M562.714,748.871c1.663,0,2.407,1.43,2.407,3.221 c0,1.387-0.627,3.095-2.368,3.095c-1.69,0-2.366-1.624-2.366-3.208C560.387,750.648,560.932,748.871,562.714,748.871z"/><path fill="#FFFFFF" d="M598.436,769.008c0,2.715,1.569,5.278,4.669,5.278c3.02,0,4.734-2.521,4.734-5.167 c0-2.353-1.342-5.32-4.762-5.32C599.687,763.799,598.436,766.753,598.436,769.008z M603.077,765.871c1.663,0,2.409,1.43,2.409,3.221 c0,1.387-0.627,3.095-2.368,3.095c-1.69,0-2.369-1.624-2.369-3.208C600.749,767.648,601.295,765.871,603.077,765.871z"/><path fill="#FFFFFF" d="M562.313,774.216c2.541,0,4.045-1.651,4.045-4.131v-5.979h-2.354v6.302c0,1.134-0.412,1.765-1.611,1.765 c-1.049,0-1.688-0.323-1.688-1.64v-6.427h-2.368v6.148C558.337,772.985,560.105,774.216,562.313,774.216z"/><rect x="594.605" y="764.106" fill="#FFFFFF" width="2.342" height="9.885"/><polygon fill="#FFFFFF" points="557.301,766.011 557.301,764.106 550.092,764.106 550.092,773.991 552.433,773.991 552.433,770.001 556.914,770.001 556.914,768.083 552.433,768.083 552.433,766.011 "/><path fill="#FFFFFF" d="M585.962,771.738l-1.851-0.995c-0.318,0.574-0.81,1.471-2.033,1.471c-1.265,0-2.314-1.077-2.314-3.249 c0-1.651,0.799-3.135,2.314-3.135c0.957,0,1.796,0.769,1.995,1.511l1.861-0.979c-0.665-1.483-2.234-2.562-3.963-2.562 c-2.66,0-4.549,2.312-4.549,5.236c0,3.346,2.009,5.251,4.494,5.251C583.874,774.286,585.218,773.109,585.962,771.738z"/><polygon fill="#FFFFFF" points="593.583,764.106 586.333,764.106 586.333,766.054 588.78,766.054 588.78,773.991 591.149,773.991 591.149,766.054 593.583,766.054 "/><polygon fill="#FFFFFF" points="609.303,764.106 609.303,773.991 611.562,773.991 611.562,768.083 614.888,773.991 617.19,773.991 617.19,764.106 614.942,764.106 614.942,770.128 611.604,764.106 "/><polygon fill="#FFFFFF" points="575.986,764.106 573.74,764.106 573.74,770.128 570.4,764.106 568.101,764.106 568.101,773.991  570.36,773.991 570.36,768.083 573.686,773.991 575.986,773.991 "/><path fill="#FFFFFF" d="M554.374,814.83c0.959,0,1.796,0.769,1.995,1.511l1.861-0.979c-0.665-1.484-2.234-2.562-3.963-2.562 c-2.66,0-4.549,2.312-4.549,5.236c0,3.346,2.008,5.25,4.496,5.25c1.955,0,3.299-1.176,4.043-2.547l-1.848-0.995 c-0.319,0.574-0.812,1.471-2.036,1.471c-1.263,0-2.314-1.077-2.314-3.249C552.06,816.313,552.858,814.83,554.374,814.83z"/><polygon fill="#FFFFFF" points="591.746,821.046 586.733,821.046 586.733,818.693 591.029,818.693 591.029,816.818 586.733,816.818 586.733,815.026 591.335,815.026 591.335,813.108 584.393,813.108 584.393,822.991 591.746,822.991 "/><polygon fill="#FFFFFF" points="575.986,820.905 572.314,820.905 572.314,813.108 569.976,813.108 569.976,822.991 575.986,822.991 "/><path fill="#FFFFFF" d="M563.764,823.285c3.02,0,4.734-2.52,4.734-5.166c0-2.351-1.344-5.32-4.762-5.32 c-3.391,0-4.642,2.954-4.642,5.209C559.095,820.725,560.665,823.285,563.764,823.285z M563.736,814.87 c1.663,0,2.409,1.43,2.409,3.222c0,1.387-0.626,3.095-2.368,3.095c-1.689,0-2.368-1.624-2.368-3.208 C561.409,816.648,561.954,814.87,563.736,814.87z"/><polygon fill="#FFFFFF" points="583.195,820.905 579.524,820.905 579.524,813.108 577.183,813.108 577.183,822.991 583.195,822.991 "/><path fill="#FFFFFF" d="M552.152,804.41h3.459l0.466,1.581h2.5l-3.459-9.885h-2.445l-3.486,9.885h2.5L552.152,804.41z M553.855,798.459l1.224,4.174h-2.382L553.855,798.459z"/><path fill="#FFFFFF" d="M642.365,812.799c-3.391,0-4.642,2.954-4.642,5.209c0,2.717,1.57,5.277,4.669,5.277 c3.021,0,4.734-2.52,4.734-5.166C647.127,815.769,645.784,812.799,642.365,812.799z M642.406,821.187 c-1.689,0-2.368-1.624-2.368-3.208c0-1.33,0.545-3.108,2.327-3.108c1.663,0,2.407,1.43,2.407,3.222 C644.772,819.479,644.148,821.187,642.406,821.187z"/><polygon fill="#FFFFFF" points="648.589,822.991 650.93,822.991 650.93,819.001 655.414,819.001 655.414,817.083 650.93,817.083 650.93,815.011 655.798,815.011 655.798,813.108 648.589,813.108 "/><rect x="609.779" y="813.108" fill="#FFFFFF" width="2.342" height="9.883"/><path fill="#FFFFFF" d="M601.137,820.738l-1.849-0.995c-0.319,0.574-0.812,1.471-2.036,1.471c-1.262,0-2.313-1.077-2.313-3.249 c0-1.651,0.798-3.135,2.313-3.135c0.959,0,1.797,0.769,1.995,1.511l1.862-0.979c-0.665-1.484-2.232-2.562-3.964-2.562 c-2.66,0-4.549,2.312-4.549,5.236c0,3.346,2.009,5.25,4.497,5.25C599.049,823.285,600.393,822.109,601.137,820.738z"/><polygon fill="#FFFFFF" points="606.323,822.991 606.323,815.054 608.758,815.054 608.758,813.108 601.508,813.108 601.508,815.054 603.955,815.054 603.955,822.991 "/><polygon fill="#FFFFFF" points="626.739,817.083 630.064,822.991 632.365,822.991 632.365,813.108 630.116,813.108 630.116,819.128 626.777,813.108 624.477,813.108 624.477,822.991 626.739,822.991 "/><path fill="#FFFFFF" d="M623.016,818.119c0-2.351-1.344-5.32-4.762-5.32c-3.394,0-4.642,2.954-4.642,5.209 c0,2.717,1.569,5.277,4.669,5.277C621.299,823.285,623.016,820.766,623.016,818.119z M615.926,817.979 c0-1.33,0.545-3.108,2.328-3.108c1.662,0,2.406,1.43,2.406,3.222c0,1.387-0.624,3.095-2.368,3.095 C616.604,821.187,615.926,819.562,615.926,817.979z"/><polygon fill="#FFFFFF" points="578.793,838.046 573.778,838.046 573.778,835.693 578.074,835.693 578.074,833.818 573.778,833.818 573.778,832.026 578.379,832.026 578.379,830.108 571.437,830.108 571.437,839.991 578.793,839.991 "/><polygon fill="#FFFFFF" points="567.967,832.054 570.4,832.054 570.4,830.108 563.15,830.108 563.15,832.054 565.599,832.054 565.599,839.991 567.967,839.991 "/><rect x="550.092" y="830.108" fill="#FFFFFF" width="2.341" height="9.883"/><polygon fill="#FFFFFF" points="554.254,830.108 554.254,839.991 556.516,839.991 556.516,834.083 559.841,839.991 562.142,839.991 562.142,830.108 559.894,830.108 559.894,836.128 556.555,830.108 "/><path fill="#FFFFFF" d="M586.134,836.044c1.024-0.378,1.93-1.05,1.93-2.73c0-2.827-2.208-3.205-3.605-3.205h-4.443v9.883h2.368 v-3.526h1.464l1.876,3.526h2.581L586.134,836.044z M584.312,834.63h-1.942v-2.689h1.954c0.414,0,1.398,0.029,1.398,1.316 C585.723,833.564,585.654,834.63,584.312,834.63z"/><polygon fill="#FFFFFF" points="609.834,839.991 612.203,839.991 612.203,832.054 614.637,832.054 614.637,830.108 607.387,830.108 607.387,832.054 609.834,832.054 "/><polygon fill="#FFFFFF" points="623.359,837.137 621.418,830.108 618.917,830.108 622.136,839.991 624.531,839.991 627.789,830.108 625.289,830.108 "/><polygon fill="#FFFFFF" points="636.062,838.046 631.049,838.046 631.049,835.693 635.344,835.693 635.344,833.818 631.049,833.818 631.049,832.026 635.649,832.026 635.649,830.108 628.707,830.108 628.707,839.991 636.062,839.991 "/><rect x="615.659" y="830.108" fill="#FFFFFF" width="2.341" height="9.883"/><path fill="#FFFFFF" d="M594.461,830.108h-2.448l-3.485,9.883h2.502l0.464-1.581h3.458l0.467,1.581h2.499L594.461,830.108z M592.038,836.632l1.158-4.174l1.224,4.174H592.038z"/><path fill="#FFFFFF" d="M602.971,840.285c1.957,0,3.301-1.176,4.045-2.547l-1.849-0.995c-0.321,0.574-0.812,1.47-2.035,1.47 c-1.265,0-2.314-1.076-2.314-3.248c0-1.651,0.799-3.136,2.314-3.136c0.956,0,1.796,0.77,1.995,1.512l1.861-0.979 c-0.665-1.484-2.234-2.563-3.963-2.563c-2.66,0-4.55,2.312-4.55,5.237C598.476,838.383,600.484,840.285,602.971,840.285z"/><polygon fill="#FFFFFF" points="558.258,847.107 555.903,847.107 555.903,850.678 552.472,850.678 552.472,847.107 550.105,847.107 550.105,856.991 552.472,856.991 552.472,852.776 555.903,852.776 555.903,856.991 558.258,856.991 "/><polygon fill="#FFFFFF" points="564.083,856.991 564.083,849.054 566.517,849.054 566.517,847.107 559.269,847.107 559.269,849.054  561.717,849.054 561.717,856.991 "/><path fill="#FFFFFF" d="M577.93,847.107h-3.432l-1.742,6.916l-1.77-6.916h-3.432v9.884h2.287c0,0-0.014-6.006-0.054-7.393 l1.943,7.393h2.033l1.957-7.393c-0.055,1.934-0.055,7.393-0.055,7.393h2.263V847.107z"/><polygon fill="#FFFFFF" points="585.763,854.905 582.092,854.905 582.092,847.107 579.75,847.107 579.75,856.991 585.763,856.991 "/><path fill="#FFFFFF" d="M596.788,853.702c0-1.722-0.973-3.138-2.714-3.138c-0.812,0-1.225,0.337-1.423,0.491l0.212-1.735h3.405 l0.133-1.794h-5.187l-0.545,4.973l1.848,0.32c0.093-0.28,0.28-0.741,0.945-0.741c0.611,0,1.143,0.475,1.143,1.638 c0,0.518-0.065,1.765-1.117,1.765c-0.785,0-1.063-0.615-1.063-1.555l-2.115,0.084c0,1.624,0.878,3.165,3.086,3.165 C595.803,857.175,596.788,855.354,596.788,853.702z"/><rect x="596.097" y="864.107" fill="#FFFFFF" width="2.339" height="9.884"/><path fill="#FFFFFF" d="M622.828,872.213c-1.263,0-2.314-1.076-2.314-3.248c0-1.651,0.799-3.136,2.314-3.136 c0.959,0,1.796,0.77,1.995,1.511l1.861-0.979c-0.665-1.484-2.232-2.562-3.963-2.562c-2.66,0-4.55,2.31-4.55,5.235 c0,3.348,2.009,5.25,4.498,5.25c1.954,0,3.298-1.174,4.042-2.547l-1.849-0.993C624.545,871.317,624.052,872.213,622.828,872.213z"/><polygon fill="#FFFFFF" points="630.236,869.693 634.532,869.693 634.532,867.817 630.236,867.817 630.236,866.026 634.838,866.026  634.838,864.107 627.895,864.107 627.895,873.991 635.251,873.991 635.251,872.046 630.236,872.046 "/><polygon fill="#FFFFFF" points="557.459,872.046 552.446,872.046 552.446,869.693 556.742,869.693 556.742,867.817 552.446,867.817  552.446,866.026 557.048,866.026 557.048,864.107 550.105,864.107 550.105,873.991 557.459,873.991 "/><path fill="#FFFFFF" d="M576.983,867.48c0-2.267-1.169-3.373-3.391-3.373h-4.655v9.884h2.354v-3.232h1.902 C574.896,870.759,576.983,869.987,576.983,867.48z M572.835,868.924h-1.543v-2.997h1.502c0.733,0,1.849,0.016,1.849,1.443 C574.643,868.657,573.898,868.924,572.835,868.924z"/><polygon fill="#FFFFFF" points="564.35,868.63 567.449,864.107 564.721,864.107 562.886,867.089 561.076,864.107 558.296,864.107  561.423,868.63 557.792,873.991 560.479,873.991 562.913,870.254 565.32,873.991 568.021,873.991 "/><path fill="#FFFFFF" d="M640.796,867.929l-1.036-0.154c-0.799-0.124-1.196-0.378-1.196-0.909c0-0.461,0.438-1.05,1.396-1.05 c1.011,0,1.782,0.489,2.461,1.233l1.729-1.304c-0.919-0.925-2.153-1.875-4.138-1.875c-2.42,0-3.789,1.357-3.789,3.303 c0,1.737,1.344,2.55,2.993,2.787l1.076,0.153c0.837,0.113,1.636,0.308,1.636,1.01c0,0.825-1.038,1.146-1.729,1.146 c-1.011,0-2.088-0.448-2.714-1.246l-1.783,1.189c0.96,1.177,2.088,2.002,4.285,2.002c2.685,0,4.269-1.357,4.269-3.443 C644.255,869.078,643.243,868.293,640.796,867.929z"/><polygon fill="#FFFFFF" points="585.455,872.046 580.442,872.046 580.442,869.693 584.738,869.693 584.738,867.817 580.442,867.817  580.442,866.026 585.044,866.026 585.044,864.107 578.102,864.107 578.102,873.991 585.455,873.991 "/><path fill="#FFFFFF" d="M589.048,870.465h1.461l1.875,3.526h2.581l-2.167-3.947c1.025-0.378,1.928-1.05,1.928-2.73 c0-2.828-2.208-3.206-3.604-3.206h-4.443v9.884h2.369V870.465z M589.034,865.942h1.954c0.412,0,1.396,0.027,1.396,1.314 c0,0.31-0.065,1.373-1.409,1.373h-1.94V865.942z"/><polygon fill="#FFFFFF" points="607.626,872.046 602.613,872.046 602.613,869.693 606.909,869.693 606.909,867.817 602.613,867.817  602.613,866.026 607.215,866.026 607.215,864.107 600.272,864.107 600.272,873.991 607.626,873.991 "/><polygon fill="#FFFFFF" points="611.11,868.085 614.436,873.991 616.738,873.991 616.738,864.107 614.489,864.107 614.489,870.127  611.15,864.107 608.851,864.107 608.851,873.991 611.11,873.991 "/><rect x="597.08" y="900.91" fill="#FFFFFF" width="1.5" height="1.67"/><path fill="#FFFFFF" d="M601.944,901.53c-0.808,0-1.103-0.912-1.103-1.57c0-0.631,0.276-1.572,1.055-1.572 c0.57,0,0.837,0.441,0.971,0.73l1.083-0.648c-0.694-1.161-1.674-1.261-2.119-1.261c-1.122,0-2.491,0.711-2.491,2.801 c0,1.959,1.304,2.739,2.462,2.739c0.76,0,1.645-0.368,2.205-1.4l-1.102-0.599C602.799,901.08,602.514,901.53,601.944,901.53z"/><path fill="#FFFFFF" d="M585.938,901.53c-0.808,0-1.102-0.912-1.102-1.57c0-0.631,0.273-1.572,1.054-1.572 c0.57,0,0.837,0.441,0.968,0.73l1.084-0.648c-0.692-1.161-1.672-1.261-2.117-1.261c-1.122,0-2.491,0.711-2.491,2.801 c0,1.959,1.301,2.739,2.462,2.739c0.76,0,1.645-0.368,2.205-1.4l-1.104-0.599C586.792,901.08,586.507,901.53,585.938,901.53z"/><path fill="#FFFFFF" d="M594.488,897.219c-0.742,0-1.197,0.371-1.473,0.61c-0.306-0.38-0.722-0.61-1.387-0.61 c-0.857,0-1.273,0.52-1.398,0.681v-0.541h-1.454v5.222h1.445v-3.021c0-0.441,0.074-1.081,0.73-1.081 c0.457,0,0.713,0.251,0.713,0.981v3.12h1.454v-3.131c0-0.629,0.229-0.979,0.751-0.979s0.686,0.4,0.686,1.099v3.012h1.452v-3.83 C596.008,897.719,595.399,897.219,594.488,897.219z"/><path fill="#FFFFFF" d="M607.065,897.198c-1.855,0-2.615,1.421-2.615,2.741c0,2.062,1.369,2.801,2.663,2.801 c1.662,0,2.669-1.081,2.669-2.771C609.782,898.718,609.146,897.198,607.065,897.198z M607.131,901.51 c-0.855,0-1.206-0.69-1.206-1.561c0-1.091,0.579-1.529,1.132-1.529c0.796,0,1.244,0.488,1.244,1.599 C608.301,900.8,607.938,901.51,607.131,901.51z"/><path fill="#FFFFFF" d="M580.418,901.539c-0.532,0-1.084-0.319-1.446-0.72l-0.92,0.88c0.359,0.41,1.169,1.012,2.404,1.012 c1.036,0,2.346-0.521,2.346-1.821c0-0.97-0.713-1.43-1.785-1.64l-0.353-0.07c-0.579-0.12-0.808-0.201-0.808-0.45 c0-0.29,0.371-0.4,0.686-0.4c0.464,0,0.938,0.24,1.263,0.521l0.902-0.88c-0.598-0.479-1.357-0.78-2.203-0.78 c-1.398,0-2.102,0.859-2.102,1.75c0,0.799,0.486,1.34,1.662,1.55l0.448,0.079c0.531,0.091,0.789,0.172,0.789,0.462 C581.302,901.36,580.901,901.539,580.418,901.539z"/><rect x="559.717" y="900.91" fill="#FFFFFF" width="1.502" height="1.67"/><path fill="#FFFFFF" d="M616.433,897.219c-0.742,0-1.196,0.371-1.473,0.61c-0.306-0.38-0.722-0.61-1.387-0.61 c-0.857,0-1.273,0.52-1.397,0.681v-0.541h-1.455v5.222h1.445v-3.021c0-0.441,0.075-1.081,0.731-1.081 c0.456,0,0.712,0.251,0.712,0.981v3.12h1.455v-3.131c0-0.629,0.229-0.979,0.751-0.979s0.686,0.4,0.686,1.099v3.012h1.452v-3.83 C617.953,897.719,617.345,897.219,616.433,897.219z"/><rect x="575.952" y="895.518" fill="#FFFFFF" width="1.454" height="1.191"/><path fill="#FFFFFF" d="M566.644,901.349l-1.102-0.599c-0.104,0.33-0.392,0.78-0.962,0.78c-0.808,0-1.102-0.912-1.102-1.57 c0-0.631,0.276-1.572,1.055-1.572c0.569,0,0.837,0.441,0.97,0.73l1.084-0.648c-0.694-1.161-1.674-1.261-2.12-1.261 c-1.121,0-2.49,0.711-2.49,2.801c0,1.959,1.303,2.739,2.461,2.739C565.198,902.749,566.082,902.381,566.644,901.349z"/><rect x="575.952" y="897.358" fill="#FFFFFF" width="1.454" height="5.222"/><path fill="#FFFFFF" d="M554.892,902.58v-4.16h0.969v-0.941h-0.978v-0.31c0-0.38,0.047-0.509,0.653-0.509h0.268v-1.161 c-0.057-0.011-0.532-0.09-0.874-0.09c-0.856,0-1.492,0.42-1.492,1.318v0.751h-0.778v0.941h0.778v4.16H554.892z"/><path fill="#FFFFFF" d="M571.765,902.58v-3.131c0-0.629,0.227-0.979,0.749-0.979c0.525,0,0.686,0.4,0.686,1.099v3.012h1.454v-3.83 c0-1.031-0.608-1.531-1.52-1.531c-0.742,0-1.199,0.371-1.476,0.61c-0.303-0.38-0.722-0.61-1.387-0.61 c-0.854,0-1.273,0.52-1.397,0.681v-0.541h-1.452v5.222h1.443v-3.021c0-0.441,0.076-1.081,0.732-1.081 c0.455,0,0.713,0.251,0.713,0.981v3.12H571.765z"/><path fill="#FFFFFF" d="M558.244,897.169c0-0.38,0.048-0.509,0.656-0.509h0.267v-1.161c-0.057-0.011-0.534-0.09-0.875-0.09 c-0.855,0-1.491,0.42-1.491,1.318v0.751h-0.78v0.941h0.78v4.16h1.452v-4.16h0.971v-0.941h-0.979V897.169z"/><path fill="#FFFFFF" d="M550.073,902.58h1.455v-4.16h0.97v-0.941h-0.979v-0.31c0-0.38,0.048-0.509,0.656-0.509h0.267v-1.161 c-0.059-0.011-0.533-0.09-0.875-0.09c-0.855,0-1.493,0.42-1.493,1.318v0.751h-0.778v0.941h0.778V902.58z"/><path fill="#FFFFFF" d="M555.881,926.198c-1.855,0-2.615,1.421-2.615,2.742c0,2.061,1.368,2.8,2.662,2.8 c1.663,0,2.669-1.081,2.669-2.771C558.597,927.719,557.961,926.198,555.881,926.198z M555.946,930.51 c-0.855,0-1.206-0.689-1.206-1.561c0-1.091,0.579-1.529,1.129-1.529c0.799,0,1.246,0.488,1.246,1.6 C557.115,929.8,556.754,930.51,555.946,930.51z"/><path fill="#FFFFFF" d="M563.983,931.58v-3.751c0-1.061-0.532-1.602-1.538-1.602c-0.695,0-1.161,0.292-1.398,0.591v-0.459h-1.481 v5.221h1.464v-2.92c0-0.702,0.095-1.201,0.769-1.201c0.591,0,0.722,0.411,0.722,0.899v3.222H563.983z"/><path fill="#FFFFFF" d="M552.345,929.879v-5.361h-1.681v5.002c0,0.511-0.19,0.631-0.979,0.631h-0.333v1.43h1.122 C551.7,931.58,552.345,931.221,552.345,929.879z"/><rect x="579.542" y="924.518" fill="#FFFFFF" width="1.455" height="1.19"/><path fill="#FFFFFF" d="M568.362,926.839c-0.267-0.27-0.655-0.57-1.377-0.57c-1.188,0-2.055,0.991-2.055,2.552 c0,2.029,1.247,2.52,2.055,2.52c0.665,0,0.968-0.219,1.301-0.45v0.711c0,0.59-0.321,0.83-0.864,0.83c-0.761,0-0.902-0.5-0.902-0.851 h-1.512v0.16c0,1.141,0.932,1.711,2.271,1.711c1.615,0,2.461-0.641,2.461-2.002v-5.09h-1.378V926.839z M567.374,930.171 c-0.798,0-0.932-0.672-0.932-1.412c0-0.33,0.047-1.339,0.894-1.339c0.854,0,0.95,0.729,0.95,1.389 C568.286,929.341,568.238,930.171,567.374,930.171z"/><rect x="579.542" y="926.359" fill="#FFFFFF" width="1.455" height="5.221"/><path fill="#FFFFFF" d="M576.724,926.219c-0.742,0-1.197,0.371-1.473,0.611c-0.306-0.381-0.722-0.611-1.387-0.611 c-0.857,0-1.273,0.521-1.398,0.681v-0.54h-1.454v5.221h1.445v-3.02c0-0.441,0.074-1.082,0.73-1.082c0.457,0,0.713,0.252,0.713,0.979 v3.122h1.454v-3.131c0-0.631,0.229-0.979,0.751-0.979c0.523,0,0.686,0.4,0.686,1.1v3.011h1.452v-3.832 C578.243,926.719,577.635,926.219,576.724,926.219z"/><path fill="#FFFFFF" d="M585.206,926.228c-0.694,0-1.16,0.292-1.397,0.591v-0.459h-1.481v5.221h1.463v-2.92 c0-0.702,0.096-1.201,0.77-1.201c0.591,0,0.722,0.411,0.722,0.899v3.222h1.464v-3.751 C586.745,926.769,586.213,926.228,585.206,926.228z"/><polygon fill="#FFFFFF" points="555.976,938.518 553.953,938.518 551.442,941.4 551.442,938.518 549.848,938.518 549.848,945.58  551.442,945.58 551.442,943.511 552.479,942.38 554.266,945.58 556.156,945.58 553.6,941.14 "/><rect x="556.582" y="940.359" fill="#FFFFFF" width="1.454" height="5.221"/><rect x="556.582" y="938.518" fill="#FFFFFF" width="1.454" height="1.19"/><path fill="#FFFFFF" d="M565.049,940.219c-0.742,0-1.199,0.369-1.473,0.611c-0.306-0.38-0.724-0.611-1.389-0.611 c-0.855,0-1.273,0.521-1.396,0.682v-0.541h-1.454v5.221h1.443v-3.02c0-0.441,0.077-1.081,0.732-1.081 c0.457,0,0.713,0.251,0.713,0.979v3.121h1.454v-3.131c0-0.631,0.229-0.979,0.752-0.979c0.522,0,0.683,0.398,0.683,1.1v3.011h1.454 v-3.832C566.568,940.719,565.96,940.219,565.049,940.219z"/>', c = {
        data: {
            screensaver: [{
                item: {
                    id: "sheeps",
                    mac: "data/screensaver/fffsheeps_mac_1.0.zip",
                    win: "data/screensaver/fffsheeps_win_1.0.zip"
                }
            }, {
                item: {
                    id: "scream",
                    mac: "data/screensaver/fffscream_mac_1.0.zip",
                    win: "data/screensaver/fffscream_win_1.0.zip"
                }
            }, {
                item: {
                    id: "wipertypo",
                    mac: "data/screensaver/fffwiper_mac_1.0.zip",
                    win: "data/screensaver/fffwiper_win_1.0.zip"
                }
            }],
            section: [{
                poster: {
                    id: "sheeps",
                    classfn: Sheeps,
                    svg: '<path fill="#FFFFFF" d="M582.41,48.27c-1.011,0-2.088-0.448-2.714-1.247l-1.783,1.192c0.959,1.174,2.091,2.002,4.285,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.036-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.919-0.923-2.153-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C584.139,47.948,583.103,48.27,582.41,48.27z"/><path fill="#FFFFFF" d="M569.924,100.993v-9.494H568.3c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351 v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931H569.924z"/><path fill="#FFFFFF" d="M556.41,94.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V94.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C555.559,97.143,556.41,95.882,556.41,94.229z"/><polygon fill="#FFFFFF" points="570.84,74.107 574.364,79.385 574.364,83.993 576.678,83.993 576.678,79.314 580.229,74.107  577.556,74.107 575.547,77.453 573.525,74.107 "/><path fill="#FFFFFF" d="M564.867,74.107l-3.485,9.885h2.502l0.466-1.583h3.457l0.466,1.583h2.502l-3.459-9.885H564.867z M564.895,80.631l1.156-4.171l1.224,4.171H564.895z"/><polygon fill="#FFFFFF" points="609.289,49.993 611.655,49.993 611.655,42.053 614.089,42.053 614.089,40.107 606.842,40.107  606.842,42.053 609.289,42.053 "/><path fill="#FFFFFF" d="M572.595,97.801v0.208c0,1.891,1.079,3.151,3.074,3.151c2.859,0,3.419-2.1,3.419-2.995 c0-1.093-0.586-1.961-1.718-2.172c0.84-0.308,1.491-0.923,1.491-2.113c0-0.912-0.507-2.549-2.941-2.549 c-1.449,0-2.938,0.588-3.15,2.871l2.102,0.197c0-0.407,0-1.373,0.918-1.373c0.439,0,0.971,0.308,0.971,1.079 c0,0.097,0,1.12-1.131,1.12c-0.106,0-0.306-0.014-0.306-0.014v1.608c0,0,0.186-0.014,0.292-0.014c0.559,0,1.33,0.141,1.33,1.219 c0,0.882-0.479,1.4-1.184,1.4c-0.612,0-1.104-0.518-1.104-1.4c0-0.14,0.014-0.407,0.014-0.407L572.595,97.801z"/><path fill="#FFFFFF" d="M560.894,101.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C557.767,99.242,558.765,101.203,560.894,101.203z M560.945,93.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C559.748,94.482,560.002,93.096,560.945,93.096z"/><polygon fill="#FFFFFF" points="555.344,57.107 553.455,57.107 549.413,66.993 551.302,66.993 "/><path fill="#FFFFFF" d="M554.215,50.287c1.71,0,2.952-0.9,3.734-2.044c0.952,1.158,2.083,1.974,4.258,1.974 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.917-0.923-2.154-1.875-4.136-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.839,0.113,1.638,0.308,1.638,1.009 c0,0.826-1.038,1.147-1.73,1.147c-1.011,0-2.088-0.448-2.712-1.247l-1.712,1.145c0.093-0.141,0.183-0.283,0.262-0.43l-1.848-0.993 c-0.319,0.572-0.812,1.47-2.036,1.47c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138 c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237 C549.719,48.382,551.727,50.287,554.215,50.287z"/><rect x="604.208" y="40.107" fill="#FFFFFF" width="2.342" height="9.886"/><path fill="#FFFFFF" d="M597.89,46.464h1.464l1.876,3.529h2.581l-2.17-3.95c1.025-0.378,1.93-1.05,1.93-2.73 c0-2.828-2.208-3.206-3.604-3.206h-4.443v9.886h2.366V46.464z M597.877,41.942h1.956c0.412,0,1.396,0.027,1.396,1.316 c0,0.308-0.066,1.371-1.41,1.371h-1.942V41.942z"/><path fill="#FFFFFF" d="M621.751,48.536c0.904,0.999,2.016,1.681,4.004,1.681c2.686,0,4.269-1.359,4.269-3.445 c0-1.694-1.011-2.477-3.459-2.841l-1.035-0.154c-0.799-0.127-1.199-0.38-1.199-0.912c0-0.462,0.438-1.05,1.397-1.05 c1.012,0,1.783,0.491,2.462,1.233l1.728-1.303c-0.918-0.923-2.155-1.875-4.137-1.875c-2.421,0-3.789,1.357-3.789,3.303 c0,1.737,1.341,2.549,2.992,2.787l1.077,0.153c0.837,0.113,1.636,0.308,1.636,1.009c0,0.826-1.039,1.147-1.729,1.147 c-1.012,0-2.091-0.448-2.715-1.247l-1.529,1.022h-4.987v-2.353h4.295v-1.875h-4.295v-1.792h4.603v-1.918h-6.944v9.886h7.356V48.536z "/><path fill="#FFFFFF" d="M589.459,46.758h1.902c1.701,0,3.789-0.771,3.789-3.276c0-2.269-1.169-3.375-3.391-3.375h-4.655v9.886h2.354 V46.758z M589.459,41.929h1.502c0.733,0,1.849,0.014,1.849,1.441c0,1.287-0.744,1.554-1.808,1.554h-1.543V41.929z"/><path fill="#FFFFFF" d="M569.855,45.96l1.077,0.153c0.837,0.113,1.636,0.308,1.636,1.009c0,0.826-1.036,1.147-1.729,1.147 c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.09,2.002,4.284,2.002c2.686,0,4.269-1.359,4.269-3.445 c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.196-0.38-1.196-0.912c0-0.462,0.438-1.05,1.396-1.05 c1.012,0,1.783,0.491,2.462,1.233l1.728-1.303c-0.918-0.923-2.153-1.875-4.137-1.875c-2.421,0-3.789,1.357-3.789,3.303 C566.863,44.91,568.207,45.722,569.855,45.96z"/><path fill="#FFFFFF" d="M558.217,83.993h2.263v-9.885h-3.432l-1.742,6.917l-1.769-6.917h-3.432v9.885h2.286 c0,0-0.013-6.008-0.052-7.393l1.941,7.393h2.036l1.954-7.393C558.217,78.532,558.217,83.993,558.217,83.993z"/><path fill="#FFFFFF" d="M93.69,938.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C96.814,938.988,96.468,938.643,93.69,938.643z"/><path fill="#FFFFFF" d="M163.461,847.339c2.776,0,5.208,0,6.422-1.215c2.255-1.909,5.902-15.103,5.902-15.622 c0-0.521-0.349-0.869-2.083-0.869c-0.52,0-1.389,0.869-1.909,1.563c-1.389,1.735-4.167,1.909-10.415,1.909 c-4.513,0.174-26.211,0-31.07,0c-1.737,0-2.258,0.174-2.952,2.43c-1.909,6.422-12.15,38.709-12.15,40.271 c0,1.736,0.866,2.083,3.818,3.126c25.343,10.066,39.75,15.622,39.75,34.54c0,14.235-8.68,23.956-22.219,23.956 c-4.167,0-17.011-1.215-21.35-13.367c-0.694-2.083-1.389-4.164-4.341-4.164c-2.082,0-7.983,2.604-7.983,7.288 c0,6.425,8.852,17.706,26.558,17.706c22.564,0,42.7-16.143,42.7-36.798c0-11.284-6.596-21.179-13.885-26.386 c-6.945-4.859-18.4-9.372-27.946-13.19c-4.861-1.911-6.425-2.778-6.425-4.341c0-1.215,4.861-13.539,6.076-16.491 C139.159,847.513,154.087,847.513,163.461,847.339z"/><path fill="#FFFFFF" d="M233.462,213.945c-0.785-0.26-0.916-0.523-1.57-3.267c-1.83-7.191-9.15-14.12-19.742-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.142,26.146c13.727,0,24.972-8.89,24.972-10.458 c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.557,5.23c-15.69,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.529-0.654,3.529-2.744C234.376,214.861,234.376,214.207,233.462,213.945z M214.766,217.345c-6.535,1.699-10.327,2.615-16.996,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C219.342,215.121,218.951,216.3,214.766,217.345z"/><path fill="#FFFFFF" d="M81.435,205.186c-12.55-5.49-19.348-8.367-19.348-17.649c0-7.583,5.359-13.466,15.034-13.466 c3.922,0,9.152,1.047,13.073,3.922c3.791,2.875,4.838,6.407,6.668,11.766c0.26,1.178,0.654,1.438,1.308,1.438 c1.699,0,3.398-0.522,3.398-2.221c0-0.654-0.783-7.323-0.783-10.066v-8.236c0-0.654-0.263-1.048-0.785-1.048 c-0.262,0-0.785,0.131-1.438,0.263c-0.523,0.26-1.045,0.392-1.439,0.392c-0.391,0-3.267-0.392-6.798-0.914 c-3.66-0.394-7.974-0.785-11.636-0.785c-21.178,0-29.808,10.982-29.808,23.14c0,13.989,10.851,18.827,23.01,24.187 c12.812,5.621,19.61,8.63,19.61,18.042c0,8.497-6.536,14.643-16.473,14.643c-5.359,0-12.419-1.57-17.386-5.361 c-3.009-2.353-5.493-6.144-7.191-12.55c-0.392-1.961-0.522-3.006-1.439-3.006c-3.791,0-3.791,2.222-3.791,3.138 c0,1.439,0.785,12.55,2.092,21.178c0.262,1.179,0.392,1.57,1.83,1.57c1.57,0,1.57-1.176,3.4-1.176 c1.568,0,11.765,2.221,22.225,2.221c12.419,0,18.435-3.006,22.486-5.881c4.838-3.531,8.89-9.938,8.89-18.043 C106.144,215.906,93.855,210.547,81.435,205.186z"/><path fill="#FFFFFF" d="M284.964,213.945c-0.785-0.26-0.917-0.523-1.57-3.267c-1.83-7.191-9.15-14.12-19.741-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.142,26.146c13.727,0,24.971-8.89,24.971-10.458 c0-0.262,0-0.262-0.262-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.557,5.23c-15.69,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.529-0.654,3.529-2.744C285.878,214.861,285.878,214.207,284.964,213.945z M266.268,217.345c-6.535,1.699-10.327,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C270.844,215.121,270.453,216.3,266.268,217.345z"/><path fill="#FFFFFF" d="M328.883,196.558c-6.669,0-13.075,2.221-20.789,5.49c0-0.914,0.525-5.359,0.525-6.406 c0-0.654-0.394-0.914-1.83-0.914c-1.57,0-3.662,1.176-4.316,1.568c-1.961,1.176-11.896,6.668-14.118,7.845 c-1.832,1.176-2.092,1.308-2.092,3.006c0,1.308,0.26,1.308,1.567,1.439c4.577,0.131,6.277,0.26,7.061,4.183 c0.262,1.438,0.393,8.368,0.393,20.264c0,8.368,0,40.137-0.785,45.235c-0.263,1.699-0.654,5.099-6.144,6.015 c-2.355,0.391-2.355,0.391-2.355,2.09c0,1.438,0.131,1.961,1.57,1.961c2.746,0,10.851-0.26,16.081-0.26 c5.228,0,9.936,0.26,13.464,0.26c1.57,0,1.83-0.26,1.83-2.092c0-1.83,0-2.353-3.006-2.353c-7.452,0-8.236-1.83-8.368-15.557v-15.819 c2.746,0.654,6.275,1.437,10.982,1.437c17.649,0,33.599-12.028,33.599-30.984C352.153,207.67,341.825,196.558,328.883,196.558z M334.374,242.576c-3.006,2.747-6.538,3.531-10.589,3.531c-8.89,0-13.989-2.746-16.341-4.054c0-11.896,0-25.231,0.391-35.561 c1.83-0.653,5.884-2.092,11.505-2.092c14.511,0,20.133,13.466,20.133,23.664C339.472,232.25,338.688,238.394,334.374,242.576z"/><path fill="#FFFFFF" d="M180.787,248.983c-4.97-0.654-6.538-0.785-6.538-8.497v-9.284c0-16.864,0-18.694-0.522-21.962 c-0.916-5.884-6.015-12.421-15.165-12.421c-7.845,0-15.559,3.4-24.581,7.714c0-10.329,0.131-23.139,0.394-30.984 c0.131-1.961,0.914-11.374,0.914-12.028c0-0.522,0-1.176-2.353-1.176c-1.699,0-12.419,3.269-17.912,5.099 c-2.09,0.785-2.353,0.785-2.353,2.744c0,1.308,0.263,1.438,1.439,1.438c3.922,0.394,6.275,0.523,6.929,5.099 c0.522,4.054,0.522,23.271,0.522,29.023c0,21.965-0.262,26.802-0.522,34.253c-0.262,5.624-0.916,9.938-6.275,10.852 c-2.224,0.262-2.484,0.394-2.484,2.615c0,1.176,0.26,1.701,1.699,1.701c1.699,0,10.458-0.263,12.55-0.263 c2.092,0,12.55,0.263,14.905,0.263c1.567,0,1.961-0.263,1.961-2.093c0-1.699-0.262-2.092-2.092-2.092 c-4.185-0.26-5.884-1.045-6.538-4.183c-0.522-2.877-0.654-8.89-0.785-35.954c3.531-1.307,9.153-3.397,14.514-3.397 c13.073,0,13.073,10.066,13.073,20.264c0,3.66-0.263,15.425-0.917,18.303c-0.654,3.006-1.961,4.183-5.359,4.836 c-2.353,0.394-2.615,0.525-2.615,2.355c0,1.567,0.131,1.961,1.567,1.961c1.701,0,10.069-0.263,12.03-0.263 c4.051,0,10.589,0.263,14.64,0.263c1.833,0,2.224-0.394,2.224-2.093C183.139,249.245,182.877,249.114,180.787,248.983z"/>',
                    title: "Sheep",
                    date: "May, thirteen",
                    img: "data/poster/sheep",
                    itemcolor: "#4a42ad",
                    bgcolor: "#2691c9",
                    preload: ["contents/sheeps/sheep-ani.png"],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "scream",
                    classfn: TheScream,
                    svg: '<polygon fill="#FFFFFF" points="653.428,41.107 653.428,43.053 655.875,43.053 655.875,50.993 658.243,50.993 658.243,43.053 660.678,43.053 660.678,41.107 "/> <path fill="#FFFFFF" d="M597.103,75.107l-3.483,9.885h2.5l0.466-1.583h3.459l0.466,1.583h2.499l-3.458-9.885H597.103z M597.13,81.631l1.158-4.171l1.224,4.171H597.13z"/> <path fill="#FFFFFF" d="M584.761,75.107v6.146c0,2.73,1.769,3.963,3.977,3.963c2.54,0,4.045-1.654,4.045-4.131v-5.979h-2.354v6.3 c0,1.136-0.412,1.765-1.608,1.765c-1.053,0-1.69-0.321-1.69-1.638v-6.426H584.761z"/> <path fill="#FFFFFF" d="M595.893,49.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,48.948,596.585,49.27,595.893,49.27z"/> <path fill="#FFFFFF" d="M585.08,50.993l0.466-1.583h3.458l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886H585.08z M587.249,43.46l1.224,4.171h-2.382L587.249,43.46z"/> <path fill="#FFFFFF" d="M574.07,82.219c0-1.735-1.464-2.226-2.369-2.31c0.572-0.07,2.009-0.545,2.009-2.212 c0-1.441-0.851-2.59-3.325-2.59h-4.377v9.885h4.604C572.527,84.993,574.07,84.041,574.07,82.219z M568.242,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.397,1.065h-1.77V76.955z M568.242,83.199v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219c0,1.133-1.049,1.174-1.81,1.174H568.242z"/> <path fill="#FFFFFF" d="M568.924,101.993v-9.494H567.3c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351 v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931H568.924z"/> <polygon fill="#FFFFFF" points="617.625,48.905 613.955,48.905 613.955,41.107 611.614,41.107 611.614,50.993 617.625,50.993 "/> <polygon fill="#FFFFFF" points="611.109,49.045 606.095,49.045 606.095,46.693 610.391,46.693 610.391,44.817 606.095,44.817 606.095,43.026 610.696,43.026 610.696,41.107 603.754,41.107 603.754,50.993 611.109,50.993 "/> <polygon fill="#FFFFFF" points="644.771,49.045 639.758,49.045 639.758,46.693 644.053,46.693 644.053,44.817 639.758,44.817 639.758,43.026 644.358,43.026 644.358,41.107 637.416,41.107 637.416,50.993 644.771,50.993 "/> <path fill="#FFFFFF" d="M628.185,43.601l1.943,7.393h2.035l1.955-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432 l-1.742,6.916l-1.77-6.916h-3.432v9.886h2.287C628.238,50.993,628.225,44.985,628.185,43.601z"/> <polygon fill="#FFFFFF" points="647.523,45.084 650.849,50.993 653.149,50.993 653.149,41.107 650.902,41.107 650.902,47.127 647.564,41.107 645.264,41.107 645.264,50.993 647.523,50.993 "/> <polygon fill="#FFFFFF" points="625.445,49.045 620.432,49.045 620.432,46.693 624.728,46.693 624.728,44.817 620.432,44.817 620.432,43.026 625.033,43.026 625.033,41.107 618.091,41.107 618.091,50.993 625.445,50.993 "/> <polygon fill="#FFFFFF" points="618.33,84.993 618.33,80.314 621.882,75.107 619.208,75.107 617.199,78.453 615.18,75.107 612.492,75.107 616.017,80.385 616.017,84.993 "/> <path fill="#FFFFFF" d="M603.938,75.107v9.885h2.369v-3.529h1.463l1.876,3.529h2.581l-2.17-3.95c1.025-0.377,1.93-1.05,1.93-2.73 c0-2.828-2.208-3.205-3.605-3.205H603.938z M609.646,78.258c0,0.308-0.068,1.371-1.409,1.371h-1.943v-2.687h1.954 C608.662,76.942,609.646,76.969,609.646,78.258z"/> <path fill="#FFFFFF" d="M574.669,102.16c2.859,0,3.419-2.1,3.419-2.995c0-1.093-0.586-1.961-1.718-2.172 c0.84-0.308,1.491-0.923,1.491-2.113c0-0.912-0.507-2.549-2.941-2.549c-1.449,0-2.938,0.588-3.15,2.871l2.102,0.197 c0-0.407,0-1.373,0.918-1.373c0.439,0,0.971,0.308,0.971,1.079c0,0.097,0,1.12-1.131,1.12c-0.106,0-0.306-0.014-0.306-0.014v1.608 c0,0,0.186-0.014,0.292-0.014c0.559,0,1.33,0.141,1.33,1.219c0,0.882-0.479,1.4-1.184,1.4c-0.612,0-1.104-0.518-1.104-1.4 c0-0.14,0.014-0.407,0.014-0.407l-2.077,0.184v0.208C571.595,100.9,572.674,102.16,574.669,102.16z"/> <polygon fill="#FFFFFF" points="564.772,83.045 559.758,83.045 559.758,80.695 564.053,80.695 564.053,78.817 559.758,78.817 559.758,77.025 564.361,77.025 564.361,75.107 557.416,75.107 557.416,84.993 564.772,84.993 "/> <path fill="#FFFFFF" d="M553.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,49.382,550.727,51.287,553.215,51.287z"/> <path fill="#FFFFFF" d="M559.291,50.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,43.46l1.224,4.171h-2.382L561.461,43.46z"/> <polygon fill="#FFFFFF" points="554.344,58.107 552.455,58.107 548.413,67.993 550.302,67.993 "/> <polygon fill="#FFFFFF" points="556.301,77.012 556.301,75.107 549.092,75.107 549.092,84.993 551.433,84.993 551.433,81.002 555.914,81.002 555.914,79.084 551.433,79.084 551.433,77.012 "/> <path fill="#FFFFFF" d="M556.767,97.176c0,3.065,0.998,5.027,3.127,5.027c2.592,0,3.271-2.76,3.271-4.916 c0-1.343-0.306-4.942-3.191-4.942C557.765,92.345,556.767,94.5,556.767,97.176z M561.169,97.317c0,1.524-0.186,3.149-1.196,3.149 c-1.077,0-1.237-1.735-1.237-2.828c0.013-2.156,0.267-3.542,1.21-3.542C560.93,94.096,561.169,95.776,561.169,97.317z"/> <path fill="#FFFFFF" d="M551.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C553.177,96.77,552.405,97.568,551.34,98.547z"/> <polygon fill="#FFFFFF" points="568.643,45.084 571.969,50.993 574.269,50.993 574.269,41.107 572.021,41.107 572.021,47.127 568.682,41.107 566.381,41.107 566.381,50.993 568.643,50.993 "/> <path fill="#FFFFFF" d="M581.119,84.993h2.578l-2.167-3.95c1.024-0.377,1.928-1.05,1.928-2.73c0-2.828-2.208-3.205-3.604-3.205 h-4.443v9.885h2.368v-3.529h1.464L581.119,84.993z M577.767,79.629v-2.687h1.954c0.414,0,1.398,0.027,1.398,1.316 c0,0.308-0.068,1.371-1.412,1.371H577.767z"/> <polygon fill="#FFFFFF" points="580.053,50.993 583.312,41.107 580.811,41.107 578.884,48.136 576.94,41.107 574.44,41.107 577.66,50.993 "/> <path fill="#FFFFFF" d="M92.69,939.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C95.814,939.988,95.468,939.643,92.69,939.643z"/> <path fill="#FFFFFF" d="M182.076,902.842c-0.869,0-4.688,0.175-12.499,0.175h-4.167c0-27.772,0-35.583,0.174-51.729l0.174-17.356 c0-0.695-0.694-0.869-3.646-1.562l-1.561-0.349c-2.432,3.124-28.641,35.932-45.826,56.936c-3.472,4.165-9.026,10.761-12.324,14.928 c-0.869,1.215-0.869,2.604-0.869,7.117c0,1.215,0.348,1.561,1.389,1.561c7.291,0,41.659-0.346,49.471-0.346 c-0.174,3.298-0.695,24.822-0.695,30.203c0,1.735,0.349,1.909,1.043,1.909c0.692,0,2.95-0.174,6.422-0.174 c1.909,0,4.513,0.174,5.379,0.174c1.389,0,1.389-0.522,1.389-1.562c0-4.339-0.346-25.691-0.52-30.55h14.407 c1.041,0,2.083,0,2.083-0.521c0.346-3.473,0.866-5.382,0.866-7.291C182.768,903.711,182.768,902.842,182.076,902.842z M152.393,903.19c-14.582,0.175-33.674,0-41.833,0c3.298-3.646,29.335-35.757,41.833-52.422V903.19z"/> <path fill="#FFFFFF" d="M197.04,249.983c-4.968-0.654-6.535-0.785-6.535-8.497v-9.284c0-16.864,0-18.694-0.525-21.962 c-0.914-5.884-6.013-12.421-15.166-12.421c-7.843,0-15.557,3.4-24.578,7.714c0-10.329,0.131-23.139,0.391-30.984 c0.131-1.961,0.916-11.374,0.916-12.028c0-0.522,0-1.176-2.353-1.176c-1.701,0-12.421,3.269-17.911,5.099 c-2.093,0.785-2.353,0.785-2.353,2.744c0,1.308,0.26,1.438,1.437,1.438c3.923,0.394,6.275,0.523,6.929,5.099 c0.524,4.054,0.524,23.271,0.524,29.023c0,21.965-0.262,26.802-0.524,34.253c-0.26,5.624-0.914,9.938-6.275,10.852 c-2.221,0.262-2.484,0.394-2.484,2.615c0,1.176,0.263,1.701,1.699,1.701c1.701,0,10.46-0.263,12.552-0.263 c2.09,0,12.55,0.263,14.903,0.263c1.57,0,1.961-0.263,1.961-2.093c0-1.699-0.26-2.092-2.093-2.092 c-4.183-0.26-5.881-1.045-6.535-4.183c-0.522-2.877-0.654-8.89-0.785-35.954c3.529-1.307,9.152-3.397,14.511-3.397 c13.073,0,13.073,10.066,13.073,20.264c0,3.66-0.26,15.425-0.914,18.303c-0.654,3.006-1.961,4.183-5.361,4.836 c-2.353,0.394-2.613,0.525-2.613,2.355c0,1.567,0.129,1.961,1.567,1.961c1.699,0,10.066-0.263,12.028-0.263 c4.054,0,10.589,0.263,14.643,0.263c1.83,0,2.222-0.394,2.222-2.093C199.393,250.245,199.132,250.114,197.04,249.983z"/> <path fill="#FFFFFF" d="M486.053,214.945c-0.785-0.26-0.916-0.523-1.569-3.267c-1.83-7.191-9.152-14.12-19.742-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.142,26.146c13.727,0,24.97-8.89,24.97-10.458 c0-0.262,0-0.262-0.261-1.308l-0.522-1.961h-0.784c-7.061,5.23-14.12,5.23-15.56,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.553-2.484,20.136-3.922,32.816-5.884c3.27-0.522,3.529-0.654,3.529-2.744C486.967,215.861,486.967,215.207,486.053,214.945z M467.356,218.345c-6.537,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C471.933,216.121,471.539,217.3,467.356,218.345z"/> <path fill="#FFFFFF" d="M361.606,205.926c3.138,0,8.497,0.654,12.942,4.051c1.701,1.176,2.224,1.439,3.138,1.439 c1.961,0,6.931-3.269,6.931-6.538c0-4.576-7.322-7.32-15.559-7.32c-18.957,0-32.683,15.034-32.683,32.552 c0,12.682,7.32,25.363,23.924,25.363c12.812,0,23.924-9.019,23.924-10.458c0-0.262-0.131-0.262-0.522-1.045l-1.045-2.484h-0.916 c-6.145,5.097-13.204,5.097-14.644,5.097c-14.902,0-17.386-15.426-17.386-22.617C349.71,219.915,350.102,205.926,361.606,205.926z" /> <path fill="#FFFFFF" d="M306.574,206.186c-12.55-5.49-19.348-8.367-19.348-17.649c0-7.583,5.359-13.466,15.034-13.466 c3.922,0,9.152,1.047,13.075,3.922c3.792,2.875,4.837,6.407,6.667,11.766c0.262,1.178,0.653,1.438,1.307,1.438 c1.699,0,3.4-0.522,3.4-2.221c0-0.654-0.785-7.323-0.785-10.066v-8.236c0-0.654-0.263-1.048-0.785-1.048 c-0.26,0-0.785,0.131-1.438,0.263c-0.522,0.26-1.045,0.392-1.437,0.392c-0.394,0-3.269-0.392-6.8-0.914 c-3.66-0.394-7.974-0.785-11.634-0.785c-21.18,0-29.808,10.982-29.808,23.14c0,13.989,10.852,18.827,23.008,24.187 c12.812,5.621,19.61,8.63,19.61,18.042c0,8.497-6.535,14.643-16.473,14.643c-5.359,0-12.419-1.57-17.386-5.361 c-3.006-2.353-5.49-6.144-7.191-12.55c-0.392-1.961-0.522-3.006-1.439-3.006c-3.791,0-3.791,2.222-3.791,3.138 c0,1.439,0.785,12.55,2.092,21.178c0.263,1.179,0.394,1.57,1.83,1.57c1.57,0,1.57-1.176,3.4-1.176 c1.568,0,11.766,2.221,22.226,2.221c12.419,0,18.434-3.006,22.485-5.881c4.839-3.531,8.89-9.938,8.89-18.043 C331.283,216.906,318.995,211.547,306.574,206.186z"/> <path fill="#FFFFFF" d="M539.645,246.583c-3.399,0-4.444-2.222-4.444-6.929c0-3.791,0.653-23.008,0.653-27.324 c0-3.006-0.392-6.929-2.746-9.804c-1.308-1.439-4.705-4.968-12.288-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.914,1.83,1.961,1.83c2.09,0,7.32-1.176,8.759-1.699c1.568-0.525,2.093-1.179,2.093-2.355 c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.132-1.308,1.438-1.83c2.876-1.045,6.145-1.176,7.452-1.176 c3.137,0,7.06,0.654,8.367,4.051c1.045,2.093,1.177,4.316,1.045,15.559c-8.627,0.914-16.864,2.484-22.616,4.314 c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.206,12.159,13.206c7.974,0,16.732-4.054,20.655-5.752 c0.263,1.308,1.176,5.881,7.06,5.881c3.531,0,10.329-1.83,17.78-5.75c1.439-0.785,1.439-1.047,1.439-3.009l0.131-2.875l-0.653-0.263 C546.313,245.015,542.392,246.583,539.645,246.583z M522.519,243.576c-0.785,2.747-7.974,4.054-11.505,4.054 c-4.968,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.222,9.544-2.222 c2.483,0,3.531,1.177,3.531,3.923C522.912,235.994,522.912,242.269,522.519,243.576z"/> <path fill="#FFFFFF" d="M247.103,214.945c-0.785-0.26-0.917-0.523-1.57-3.267c-1.83-7.191-9.15-14.12-19.742-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.142,26.146c13.727,0,24.969-8.89,24.969-10.458 c0-0.262,0-0.262-0.26-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.552-2.484,20.135-3.922,32.816-5.884c3.269-0.522,3.529-0.654,3.529-2.744C248.017,215.861,248.017,215.207,247.103,214.945z M228.406,218.345c-6.537,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C232.983,216.121,232.589,217.3,228.406,218.345z"/> <path fill="#FFFFFF" d="M657.561,249.983c-6.406-0.131-7.583-1.308-7.714-6.013v-23.533c0-10.066-0.785-13.989-4.314-17.78 c-2.875-3.138-7.451-4.839-12.027-4.839c-8.759,0-19.351,6.406-23.271,8.761c-2.093-5.884-7.583-8.761-13.598-8.761 c-7.845,0-14.773,4.316-23.01,9.415c0-1.439,0.653-8.107,0.653-9.284c0-0.914-0.522-1.176-1.961-1.176 c-1.308,0-1.962,0.131-3.66,0.917c-9.544,4.445-10.589,4.968-14.381,6.929c-1.83,0.914-1.961,1.045-1.961,2.744 c0,1.701,0.131,1.701,2.746,1.701c4.837,0,5.753,1.176,5.753,10.458v21.049c0,7.452-2.615,8.628-6.146,9.282 c-2.222,0.394-2.353,0.394-2.353,2.484c0,1.438,0.131,1.833,1.308,1.833c2.092,0,12.027-0.263,14.249-0.263 c1.832,0,10.852,0.263,12.812,0.263c2.093,0,2.224-0.131,2.224-2.093c0-1.308-0.131-1.699-1.176-1.961 c-1.439-0.262-2.878-0.391-4.708-0.522c-2.875-0.394-3.528-2.224-3.528-19.087c0-8.759,0.129-17.781,0.26-18.303 c0.394-1.438,8.499-5.099,14.251-5.099c10.98,0,10.98,8.627,10.98,23.402c0,3.922,0,12.027-0.914,15.556 c-0.916,2.877-3.138,3.4-5.492,3.792c-1.83,0.394-2.09,0.394-2.09,2.355c0,1.699,0.391,1.961,1.308,1.961 c1.961,0,11.765-0.263,13.988-0.263c1.962,0,11.506,0.263,13.727,0.263c1.045,0,1.57,0,1.57-2.093c0-1.176-0.263-1.699-1.048-1.83 c-1.045-0.131-2.092-0.262-3.528-0.394c-4.576-0.522-4.839-1.437-4.839-19.348c-0.129-4.054,0-9.021,0-15.166 c0-3.009-0.129-4.708,1.048-5.23c4.836-2.746,9.149-3.269,11.765-3.269c12.682,0,12.682,9.806,12.682,23.795 c0,16.996-1.177,17.909-6.013,19.348c-2.484,0.654-2.484,0.654-2.484,2.224c0,1.83,0.261,1.961,1.699,1.961 c2.875,0,8.236-0.263,14.249-0.263c6.146,0,10.198,0.263,13.206,0.263c1.699,0,1.83-0.263,1.83-2.224 C659.652,250.245,659.521,249.983,657.561,249.983z"/> <path fill="#FFFFFF" d="M102.528,252.207c0-1.961-0.26-1.961-2.875-2.093c-10.198-0.262-10.72-4.054-11.114-8.105 c-0.392-5.492-0.522-8.89-0.522-35.038c0-9.413,0.131-19.219,0.262-28.632c10.852,0,17.258,0.131,20.524,0.654 c5.752,0.785,5.752,3.006,5.752,11.243c0,1.57,1.047,1.57,2.746,1.57c1.57,0,1.83-0.263,2.224-2.224 c1.959-7.974,4.183-18.172,4.183-18.957c0-0.785-0.653-0.914-1.438-0.914c-0.522,0-3.138,0.783-3.792,0.914 c-5.621,1.048-33.599,1.048-41.967,1.048c-5.359,0-27.324,0-30.199-1.439c-0.785-0.394-1.438-0.522-2.092-0.522 c-1.045,0-1.176,0.391-1.437,1.437c-1.047,4.97-3.269,17.52-3.269,19.219c0,1.176,0.914,1.439,2.615,1.439 c1.699,0,1.699-0.263,2.484-3.006c2.744-10.198,7.058-10.198,29.414-10.46c0.131,8.368,0.131,22.617,0.131,25.625 c0,4.836-0.131,29.677-0.522,35.689c-0.522,6.929-1.699,9.415-11.243,10.329c-2.484,0.262-2.484,0.262-2.484,2.224 c0,1.83,0,2.09,1.699,2.09c4.705,0,9.544-0.392,20.001-0.392c11.374,0,16.867,0.392,19.088,0.392 C102.268,254.297,102.528,254.297,102.528,252.207z"/> <path fill="#FFFFFF" d="M429.842,197.296c-1.83,0-4.705,1.83-7.061,3.269c-3.92,2.484-8.236,5.49-12.027,8.236 c0-1.83,0.653-10.329,0.653-11.374c0-0.785,0-1.308-1.698-1.308c-1.57,0-1.962,0.263-5.49,2.353 c-2.615,1.57-9.021,4.708-11.114,5.622c-2.353,1.179-2.615,1.179-2.615,2.615c0,1.83,0.263,1.961,0.917,1.961 c1.307,0,4.705,0.522,5.49,1.83c1.307,2.093,1.307,9.807,1.307,16.344c0,10.589-0.391,14.511-0.653,16.602 c-0.522,4.185-1.567,5.492-5.23,6.406c-2.09,0.525-2.221,0.525-2.221,2.484c0,1.833,0.391,1.833,1.961,1.833 c2.746,0,9.021-0.263,13.467-0.263c6.144,0,12.55,0.263,16.341,0.263c1.439,0,1.83-0.263,1.83-2.224 c0-1.308-0.131-1.961-1.308-1.961c-1.176,0-2.353-0.131-3.269-0.26c-8.367-0.654-8.627-0.654-8.627-25.757 c0-1.567,0-9.544,0.522-10.458c0.262-0.654,5.752-4.838,10.72-4.838c3.007,0,4.313,1.701,5.884,4.053 c1.045,1.699,1.438,1.83,1.83,1.83c1.177,0,7.191-4.576,7.191-9.281C436.642,202.395,433.373,197.296,429.842,197.296z"/>',
                    title: "The Scream",
                    date: "february, thirteen",
                    img: "data/poster/scream",
                    itemcolor: "#544cbb",
                    bgcolor: "#111",
                    preload: ["contents/scream/screammonk.jpg"],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "wipertypo",
                    classfn: wiperTypo,
                    svg: '<path fill="#FFFFFF" d="M552.603,82.613v-7.505h-2.355v7.001c0,0.713-0.265,0.882-1.368,0.882h-0.466v2.002h1.569 C551.697,84.993,552.603,84.488,552.603,82.613z"/><polygon fill="#FFFFFF" points="554.344,58.107 552.455,58.107 548.413,67.993 550.302,67.993 "/><polygon fill="#FFFFFF" points="571.661,84.993 571.661,75.107 569.414,75.107 569.414,81.127 566.075,75.107 563.775,75.107  563.775,84.993 566.035,84.993 566.035,79.084 569.36,84.993 "/><path fill="#FFFFFF" d="M559.291,50.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,43.46l1.224,4.171h-2.382L561.461,43.46z"/><polygon fill="#FFFFFF" points="568.643,45.084 571.969,50.993 574.269,50.993 574.269,41.107 572.021,41.107 572.021,47.127  568.682,41.107 566.381,41.107 566.381,50.993 568.643,50.993 "/><path fill="#FFFFFF" d="M581.424,81.086v-5.979h-2.354v6.3c0,1.136-0.412,1.765-1.608,1.765c-1.052,0-1.689-0.321-1.689-1.638 v-6.426h-2.369v6.146c0,2.73,1.77,3.963,3.977,3.963C579.92,85.217,581.424,83.563,581.424,81.086z"/><path fill="#FFFFFF" d="M559.894,102.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C556.767,100.242,557.765,102.203,559.894,102.203z M559.945,94.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C558.748,95.482,559.002,94.096,559.945,94.096z"/><path fill="#FFFFFF" d="M553.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,49.382,550.727,51.287,553.215,51.287z"/><path fill="#FFFFFF" d="M574.669,102.16c2.859,0,3.419-2.1,3.419-2.995c0-1.093-0.586-1.961-1.718-2.172 c0.84-0.308,1.491-0.923,1.491-2.113c0-0.912-0.507-2.549-2.941-2.549c-1.449,0-2.938,0.588-3.15,2.871l2.102,0.197 c0-0.407,0-1.373,0.918-1.373c0.439,0,0.971,0.308,0.971,1.079c0,0.097,0,1.12-1.131,1.12c-0.106,0-0.306-0.014-0.306-0.014v1.608 c0,0,0.186-0.014,0.292-0.014c0.559,0,1.33,0.141,1.33,1.219c0,0.882-0.479,1.4-1.184,1.4c-0.612,0-1.104-0.518-1.104-1.4 c0-0.14,0.014-0.407,0.014-0.407l-2.077,0.184v0.208C571.595,100.9,572.674,102.16,574.669,102.16z"/><path fill="#FFFFFF" d="M556.419,83.409h3.458l0.467,1.583h2.499l-3.456-9.885h-2.448l-3.485,9.885h2.502L556.419,83.409z M558.122,77.46l1.224,4.171h-2.38L558.122,77.46z"/><path fill="#FFFFFF" d="M551.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C553.177,96.77,552.405,97.568,551.34,98.547z"/><path fill="#FFFFFF" d="M628.185,43.601l1.943,7.393h2.035l1.955-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432 l-1.742,6.916l-1.77-6.916h-3.432v9.886h2.287C628.238,50.993,628.225,44.985,628.185,43.601z"/><polygon fill="#FFFFFF" points="625.445,49.045 620.432,49.045 620.432,46.693 624.728,46.693 624.728,44.817 620.432,44.817  620.432,43.026 625.033,43.026 625.033,41.107 618.091,41.107 618.091,50.993 625.445,50.993 "/><polygon fill="#FFFFFF" points="617.625,48.905 613.955,48.905 613.955,41.107 611.614,41.107 611.614,50.993 617.625,50.993 "/><polygon fill="#FFFFFF" points="611.109,49.045 606.095,49.045 606.095,46.693 610.391,46.693 610.391,44.817 606.095,44.817  606.095,43.026 610.696,43.026 610.696,41.107 603.754,41.107 603.754,50.993 611.109,50.993 "/><polygon fill="#FFFFFF" points="644.771,49.045 639.758,49.045 639.758,46.693 644.053,46.693 644.053,44.817 639.758,44.817  639.758,43.026 644.358,43.026 644.358,41.107 637.416,41.107 637.416,50.993 644.771,50.993 "/><polygon fill="#FFFFFF" points="653.428,41.107 653.428,43.053 655.875,43.053 655.875,50.993 658.243,50.993 658.243,43.053  660.678,43.053 660.678,41.107 "/><path fill="#FFFFFF" d="M568.924,101.993v-9.494H567.3c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351 v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931H568.924z"/><polygon fill="#FFFFFF" points="647.523,45.084 650.849,50.993 653.149,50.993 653.149,41.107 650.902,41.107 650.902,47.127  647.564,41.107 645.264,41.107 645.264,50.993 647.523,50.993 "/><path fill="#FFFFFF" d="M585.745,75.107l-3.484,9.885h2.5l0.466-1.583h3.459l0.466,1.583h2.5l-3.459-9.885H585.745z M585.771,81.631 l1.158-4.171l1.225,4.171H585.771z"/><path fill="#FFFFFF" d="M585.08,50.993l0.466-1.583h3.458l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886H585.08z M587.249,43.46l1.224,4.171h-2.382L587.249,43.46z"/><polygon fill="#FFFFFF" points="580.053,50.993 583.312,41.107 580.811,41.107 578.884,48.136 576.94,41.107 574.44,41.107  577.66,50.993 "/><polygon fill="#FFFFFF" points="604.658,84.993 606.973,84.993 606.973,80.314 610.524,75.107 607.851,75.107 605.842,78.453  603.819,75.107 601.134,75.107 604.658,80.385 "/><path fill="#FFFFFF" d="M600.63,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.579 l-2.167-3.95C599.725,80.666,600.63,79.993,600.63,78.312z M596.879,79.629h-1.943v-2.687h1.954c0.414,0,1.398,0.027,1.398,1.316 C598.288,78.566,598.221,79.629,596.879,79.629z"/><path fill="#FFFFFF" d="M595.893,49.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,48.948,596.585,49.27,595.893,49.27z"/><path fill="#FFFFFF" d="M166.974,882.187c-6.596-4.167-13.193-4.339-18.574-4.339c8.68-5.207,21.35-12.498,21.35-25.864 c0-9.893-7.811-19.962-22.913-19.962c-21.696,0-34.368,19.441-34.368,20.136c0,1.215,2.604,2.604,3.472,2.604 c1.041,0,1.389-0.346,2.255-2.604c1.909-4.165,11.632-9.721,20.31-9.721c5.035,0,16.142,2.778,16.142,16.317 c0,7.29-2.081,15.102-27.772,26.731c-2.778,1.215-3.124,1.389-3.124,2.257c0,0.692,1.041,3.296,2.083,3.296 c1.561,0,6.074-4.338,14.754-4.338c14.582,0,22.564,11.283,22.564,24.476c0,10.415-5.554,27.946-24.128,27.946 c-6.422,0-15.794-2.604-19.787-11.283c-1.389-2.952-2.083-4.513-4.861-4.513c-2.255,0-7.637,2.255-7.637,6.768 c0,4.167,4.513,15.797,24.996,15.797c23.085,0,47.039-15.622,47.039-39.75C178.775,896.769,175.131,887.395,166.974,882.187z"/><path fill="#FFFFFF" d="M92.69,939.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C95.814,939.988,95.468,939.643,92.69,939.643z"/><path fill="#FFFFFF" d="M364.88,313.494c-5.229,0-10.589,0.394-15.819,1.047c-4.836-2.092-9.021-2.484-12.29-2.484 c-14.249,0-26.408,9.019-26.408,23.008c0,7.845,3.791,12.813,7.583,15.428c3.529,2.615,7.06,3.269,10.066,3.923 c-12.419,4.836-12.55,4.836-12.55,9.281c0,2.746,1.568,7.454,10.329,9.021c-3.531,1.57-9.415,3.922-14.643,7.451 c-3.662,2.484-3.662,4.185-3.662,8.499c0,4.968,0.394,6.275,0.785,7.06c2.224,5.884,14.383,7.974,21.312,7.974 c19.479,0,38.698-11.112,38.698-24.578c0-12.944-15.036-13.857-24.056-14.251c-11.768-0.654-18.042-0.914-18.042-5.097 c0-0.785,0.262-1.307,0.785-1.57c0.785-0.522,6.929-2.224,10.327-3.269c16.212-4.836,22.879-13.595,22.879-22.617 c0-6.015-2.222-8.89-3.66-10.591c3.66-0.129,5.229-0.129,10.46-0.129c2.353,0,2.483-0.525,2.483-4.316 C369.456,313.494,369.325,313.494,364.88,313.494z M331.804,374.026c2.615,0.262,14.12,1.045,16.473,1.438 c3.006,0.522,9.544,1.438,9.544,7.583c0,7.714-9.15,13.466-22.226,13.466c-6.667,0-17.518-1.832-17.518-9.675 C318.077,381.609,322.522,378.08,331.804,374.026z M339.386,349.708c-3.006-0.654-7.06-1.437-10.852-5.099 c-3.792-3.529-6.275-8.627-6.275-14.771c0-9.544,5.752-12.553,10.46-12.553c9.413,0,15.688,9.415,15.688,19.088 C348.408,345.395,342.264,348.401,339.386,349.708z"/><path fill="#FFFFFF" d="M411.023,311.795c-1.833,0-4.708,1.83-7.061,3.269c-3.923,2.484-8.236,5.49-12.027,8.236 c0-1.83,0.653-10.329,0.653-11.374c0-0.785,0-1.307-1.701-1.307c-1.567,0-1.961,0.262-5.49,2.353 c-2.615,1.57-9.021,4.707-11.113,5.621c-2.353,1.179-2.613,1.179-2.613,2.615c0,1.83,0.261,1.961,0.914,1.961 c1.308,0,4.708,0.523,5.49,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.392,14.511-0.654,16.602 c-0.522,4.185-1.567,5.492-5.228,6.406c-2.092,0.522-2.224,0.522-2.224,2.484c0,1.83,0.394,1.83,1.961,1.83 c2.747,0,9.021-0.26,13.467-0.26c6.144,0,12.551,0.26,16.342,0.26c1.438,0,1.83-0.26,1.83-2.222c0-1.307-0.131-1.961-1.308-1.961 s-2.353-0.131-3.269-0.263c-8.365-0.651-8.628-0.651-8.628-25.754c0-1.568,0-9.544,0.522-10.458 c0.263-0.654,5.753-4.839,10.72-4.839c3.009,0,4.314,1.701,5.884,4.054c1.046,1.699,1.439,1.83,1.83,1.83 c1.177,0,7.191-4.576,7.191-9.281C417.82,316.894,414.552,311.795,411.023,311.795z"/><path fill="#FFFFFF" d="M278.472,312.058c-18.174,0-32.945,10.98-32.945,29.286c0,18.825,13.335,28.629,28.892,28.629 c17.52,0,32.945-11.374,32.945-29.937C307.363,326.307,297.82,312.058,278.472,312.058z M278.603,364.351 c-9.415,0-19.088-9.413-19.088-27.715c0-12.55,6.929-18.957,14.771-18.957c10.852,0,19.088,12.028,19.088,27.324 C293.375,358.076,286.708,364.351,278.603,364.351z"/><path fill="#FFFFFF" d="M658.994,313.365c-1.698,0-5.229,0.26-8.89,0.26c-4.968,0-8.236-0.26-10.198-0.26 c-1.176,0-1.438,0.391-1.438,2.221c0,1.439,0.263,1.699,1.308,1.83c4.968,0.654,6.015,0.785,6.015,3.4 c0,1.699-1.308,5.099-2.092,7.06c-2.875,6.667-4.054,9.15-13.073,28.238c-2.746-6.667-11.898-31.116-11.898-35.298 c0-2.746,2.486-3.006,5.492-3.4c1.437-0.131,1.567-0.26,1.567-2.221c0-1.57-0.131-1.83-1.567-1.83c-1.83,0-10.591,0.26-12.55,0.26 c-5.624,0-8.891-0.26-11.899-0.26c-1.437,0-1.698,0.129-1.698,2.221c0,0.654,0,1.439,0.784,1.699c2.354,0.917,2.876,1.179,4.314,3.4 c3.529,5.49,19.61,49.158,19.61,50.072c0,0.394-9.675,20.396-18.303,24.972c-3.269,1.699-4.186,2.221-4.186,5.099 c0,3.006,2.615,3.138,4.708,3.138c7.845,0,9.281-2.353,13.072-10.852c11.377-24.971,16.473-35.952,31.51-62.884 c5.358-9.544,6.929-11.112,8.367-12.028c2.09-1.308,2.353-1.57,2.353-2.875C660.302,313.625,659.91,313.365,658.994,313.365z"/><path fill="#FFFFFF" d="M475.729,361.213l0.132-2.875l-0.654-0.262c-2.483,1.438-6.406,3.006-9.15,3.006 c-3.399,0-4.445-2.221-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324c0-3.006-0.394-6.929-2.746-9.804 c-1.308-1.439-4.708-4.968-12.29-4.968c-17.127,0-28.501,11.896-28.501,16.473c0,1.176,0.916,1.83,1.962,1.83 c2.092,0,7.322-1.176,8.759-1.699c1.569-0.525,2.092-1.179,2.092-2.355c0-0.522-0.262-2.615-0.262-3.006 c0-0.654,0.131-1.308,1.438-1.83c2.877-1.045,6.146-1.176,7.451-1.176c3.14,0,7.061,0.654,8.368,4.051 c1.047,2.093,1.176,4.316,1.047,15.559c-8.63,0.914-16.866,2.484-22.619,4.314c-7.188,2.353-10.326,3.922-10.326,12.419 c0,5.361,1.83,13.207,12.156,13.207c7.977,0,16.735-4.054,20.658-5.753c0.26,1.308,1.176,5.882,7.06,5.882 c3.529,0,10.327-1.83,17.78-5.753C475.729,363.437,475.729,363.175,475.729,361.213z M448.93,358.076 c-0.785,2.746-7.977,4.054-11.506,4.054c-4.967,0-7.582-1.83-7.582-8.89c0-2.353,0-4.054,6.406-6.669 c2.615-1.045,6.275-2.221,9.544-2.221c2.483,0,3.528,1.176,3.528,3.922C449.32,350.493,449.32,356.769,448.93,358.076z"/><path fill="#FFFFFF" d="M218.733,312.058c-6.666,0-13.073,2.222-20.787,5.49c0-0.916,0.523-5.361,0.523-6.406 c0-0.654-0.392-0.914-1.83-0.914c-1.568,0-3.66,1.176-4.314,1.567c-1.961,1.177-11.896,6.669-14.12,7.845 c-1.83,1.176-2.09,1.308-2.09,3.006c0,1.308,0.26,1.308,1.568,1.439c4.576,0.131,6.275,0.26,7.06,4.183 c0.262,1.438,0.391,8.368,0.391,20.264c0,8.367,0,40.137-0.783,45.235c-0.262,1.699-0.654,5.099-6.146,6.013 c-2.353,0.394-2.353,0.394-2.353,2.093c0,1.438,0.131,1.961,1.57,1.961c2.744,0,10.849-0.262,16.079-0.262s9.938,0.262,13.466,0.262 c1.568,0,1.83-0.262,1.83-2.092s0-2.353-3.006-2.353c-7.451,0-8.236-1.83-8.368-15.557v-15.819 c2.747,0.651,6.275,1.436,10.983,1.436c17.649,0,33.599-12.027,33.599-30.984C242.006,323.169,231.677,312.058,218.733,312.058z M224.226,358.076c-3.009,2.746-6.538,3.531-10.591,3.531c-8.89,0-13.989-2.747-16.341-4.054c0-11.896,0-25.231,0.394-35.561 c1.83-0.654,5.881-2.092,11.503-2.092c14.514,0,20.135,13.466,20.135,23.664C229.325,347.747,228.54,353.894,224.226,358.076z"/><path fill="#FFFFFF" d="M327.745,254.168c2.746,0,9.021-0.263,13.466-0.263c6.144,0,12.55,0.263,16.341,0.263 c1.439,0,1.833-0.263,1.833-2.224c0-1.308-0.132-1.961-1.308-1.961c-1.179,0-2.354-0.131-3.269-0.26 c-8.368-0.654-8.63-0.654-8.63-25.757c0-1.567,0-9.544,0.522-10.458c0.263-0.654,5.752-4.838,10.722-4.838 c3.007,0,4.314,1.701,5.882,4.053c1.048,1.699,1.438,1.83,1.83,1.83c1.179,0,7.191-4.576,7.191-9.281 c0-2.877-3.269-7.976-6.798-7.976c-1.83,0-4.707,1.83-7.06,3.269c-3.923,2.484-8.236,5.49-12.028,8.236 c0-1.83,0.653-10.329,0.653-11.374c0-0.785,0-1.308-1.699-1.308c-1.57,0-1.961,0.263-5.492,2.353 c-2.615,1.57-9.021,4.708-11.112,5.622c-2.355,1.179-2.615,1.179-2.615,2.615c0,1.83,0.26,1.961,0.914,1.961 c1.308,0,4.708,0.522,5.493,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.394,14.511-0.654,16.602 c-0.523,4.185-1.57,5.492-5.23,6.406c-2.093,0.525-2.224,0.525-2.224,2.484C325.784,254.168,326.178,254.168,327.745,254.168z"/><path fill="#FFFFFF" d="M504.352,369.45c17.651,0,33.602-12.027,33.602-30.984c0-15.297-10.329-26.408-23.273-26.408 c-6.666,0-13.072,2.222-20.786,5.49c0-0.916,0.522-5.361,0.522-6.406c0-0.654-0.392-0.914-1.83-0.914 c-1.57,0-3.66,1.176-4.313,1.567c-1.962,1.177-11.896,6.669-14.12,7.845c-1.83,1.176-2.093,1.308-2.093,3.006 c0,1.308,0.263,1.308,1.57,1.439c4.576,0.131,6.274,0.26,7.06,4.183c0.26,1.438,0.392,8.368,0.392,20.264 c0,8.367,0,40.137-0.785,45.235c-0.26,1.699-0.653,5.099-6.144,6.013c-2.353,0.394-2.353,0.394-2.353,2.093 c0,1.438,0.131,1.961,1.567,1.961c2.746,0,10.852-0.262,16.081-0.262c5.23,0,9.936,0.262,13.467,0.262 c1.567,0,1.83-0.262,1.83-2.092s0-2.353-3.007-2.353c-7.453,0-8.236-1.83-8.367-15.557v-15.819 C496.115,368.665,499.646,369.45,504.352,369.45z M493.24,357.553c0-11.896,0-25.231,0.391-35.561 c1.83-0.654,5.884-2.092,11.505-2.092c14.512,0,20.134,13.466,20.134,23.664c0,4.183-0.783,10.329-5.097,14.512 c-3.009,2.746-6.538,3.531-10.592,3.531C500.691,361.607,495.593,358.861,493.24,357.553z"/><path fill="#FFFFFF" d="M605.534,366.575c0-1.83-0.263-1.961-2.354-2.092c-4.97-0.654-6.537-0.785-6.537-8.499v-9.281 c0-16.864,0-18.694-0.522-21.963c-0.916-5.884-6.015-12.421-15.165-12.421c-7.846,0-15.56,3.4-24.58,7.714 c0-10.329,0.131-23.139,0.394-30.984c0.129-1.961,0.914-11.374,0.914-12.028c0-0.522,0-1.176-2.354-1.176 c-1.698,0-12.419,3.269-17.911,5.099c-2.093,0.785-2.353,0.785-2.353,2.744c0,1.308,0.26,1.439,1.438,1.439 c3.921,0.394,6.275,0.522,6.929,5.099c0.522,4.054,0.522,23.271,0.522,29.023c0,21.965-0.262,26.802-0.522,34.253 c-0.262,5.624-0.916,9.938-6.274,10.852c-2.224,0.262-2.484,0.394-2.484,2.615c0,1.177,0.261,1.699,1.699,1.699 c1.698,0,10.458-0.26,12.55-0.26c2.093,0,12.551,0.26,14.905,0.26c1.567,0,1.959-0.26,1.959-2.09c0-1.701-0.26-2.092-2.09-2.092 c-4.186-0.263-5.884-1.045-6.538-4.183c-0.522-2.877-0.653-8.89-0.784-35.955c3.53-1.307,9.152-3.397,14.511-3.397 c13.075,0,13.075,10.066,13.075,20.264c0,3.66-0.262,15.425-0.916,18.303c-0.653,3.006-1.961,4.183-5.358,4.836 c-2.355,0.394-2.615,0.522-2.615,2.355c0,1.567,0.131,1.959,1.567,1.959c1.701,0,10.068-0.26,12.027-0.26 c4.054,0,10.592,0.26,14.644,0.26C605.141,368.665,605.534,368.273,605.534,366.575z"/><path fill="#FFFFFF" d="M181.345,181.085c3.792,0,7.845-3.922,7.845-7.714c0-3.66-4.183-7.452-7.452-7.452 c-3.269,0-7.845,3.66-7.845,7.843C173.894,177.423,177.816,181.085,181.345,181.085z"/><path fill="#FFFFFF" d="M201.474,285.283c-2.353,0.391-2.353,0.391-2.353,2.09c0,1.438,0.131,1.961,1.567,1.961 c2.747,0,10.852-0.26,16.082-0.26s9.936,0.26,13.466,0.26c1.568,0,1.83-0.26,1.83-2.092c0-1.83,0-2.353-3.006-2.353 c-7.454,0-8.236-1.83-8.368-15.557v-15.819c2.744,0.654,6.275,1.437,10.98,1.437c17.651,0,33.6-12.028,33.6-30.984 c0-15.296-10.327-26.408-23.271-26.408c-6.667,0-13.073,2.221-20.787,5.49c0-0.914,0.522-5.359,0.522-6.406 c0-0.654-0.392-0.914-1.83-0.914c-1.57,0-3.66,1.176-4.314,1.568c-1.961,1.176-11.896,6.668-14.12,7.845 c-1.83,1.176-2.092,1.308-2.092,3.006c0,1.308,0.262,1.308,1.57,1.439c4.576,0.131,6.275,0.26,7.06,4.183 c0.26,1.438,0.391,8.368,0.391,20.264c0,8.368,0,40.137-0.785,45.235C207.357,280.967,206.964,284.367,201.474,285.283z M220.953,207.493c1.83-0.653,5.884-2.092,11.505-2.092c14.511,0,20.133,13.466,20.133,23.664c0,4.185-0.783,10.329-5.099,14.511 c-3.006,2.747-6.536,3.531-10.589,3.531c-8.89,0-13.989-2.746-16.341-4.054C220.562,231.157,220.562,217.822,220.953,207.493z"/><path fill="#FFFFFF" d="M295.202,255.473c13.727,0,24.97-8.89,24.97-10.458c0-0.262,0-0.262-0.26-1.308l-0.522-1.961h-0.785 c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.386-16.082-17.78-20.396c12.553-2.484,20.135-3.922,32.817-5.884 c3.267-0.522,3.529-0.654,3.529-2.744c0-2.092,0-2.746-0.916-3.008c-0.783-0.26-0.914-0.523-1.568-3.267 c-1.83-7.191-9.152-14.12-19.742-14.12c-13.204,0-27.324,11.505-27.324,31.769C272.061,239.654,276.375,255.473,295.202,255.473z M295.856,203.048c6.406,0,10.72,7.191,10.72,11.768c0,1.305-0.394,2.484-4.576,3.529c-6.538,1.699-10.329,2.615-16.995,3.792 C285.136,208.147,290.495,203.048,295.856,203.048z"/><path fill="#FFFFFF" d="M41.736,174.679c3.138,0.914,4.185,2.744,6.275,6.667c3.66,6.668,10.983,24.709,13.204,30.201 C72.198,239,73.114,241.746,76.251,251.682c0.914,2.877,1.176,3.269,1.961,3.269c1.568,0,2.875-0.522,4.836-0.653 c1.045,0,2.224-0.392,2.615-1.568c3.529-9.675,9.282-21.44,15.557-33.077c4.97,12.55,9.152,23.793,11.767,32.292 c0.785,2.746,0.914,3.006,1.699,3.006c1.176,0,2.877-0.391,4.054-0.522c1.83-0.26,3.529-0.391,3.791-1.308 c2.615-9.675,24.578-55.824,32.814-69.42c4.445-7.191,5.622-8.107,8.105-8.63c1.048-0.26,1.308-0.522,1.308-2.353 c0-1.57-0.391-1.83-1.308-1.83c-1.699,0-10.458,0.26-12.419,0.26c-1.699,0-10.197-0.26-12.159-0.26c-1.308,0-1.568,0.26-1.568,2.222 c0,1.83,0.26,1.83,3.267,1.961c2.877,0.263,6.669,1.176,6.669,5.492c0,2.09-0.785,4.837-4.314,13.073 c-0.916,1.83-19.61,43.274-20.658,45.235c-3.269-9.284-9.544-23.795-13.073-32.945c5.359-10.198,12.288-22.879,12.941-23.927 c2.224-4.051,3.792-5.752,5.884-6.666c1.83-0.654,2.093-0.785,2.093-2.747c0-1.567-0.523-1.699-1.699-1.699 c-2.092,0-9.806,0.392-22.488,0.392c-16.473,0-20.395-0.392-25.885-0.392c-1.047,0-1.83,0.131-1.83,1.176 c0,1.699,0,2.484,0.654,2.615c0.914,0.391,2.221,0.785,2.875,1.438c3.138,2.875,15.034,32.552,16.735,37.391 c-1.701,3.66-10.591,21.309-12.682,25.363c-1.961-5.361-12.29-30.986-14.643-36.737c-1.961-5.099-7.845-19.741-7.845-23.01 c0-3.269,1.83-3.4,6.929-3.922c2.092-0.263,2.092-0.522,2.092-2.484c0-1.83-0.391-1.83-1.57-1.83c-4.183,0-8.365,0.26-13.595,0.26 c-6.538,0-9.675-0.26-15.034-0.26c-1.308,0-1.439,0-1.439,1.699S40.822,174.417,41.736,174.679z M106.582,175.202 c5.361,0,8.368,0.654,8.368,3.791c0,3.66-5.884,15.951-8.236,20.527c-1.57-3.792-7.454-18.696-7.454-21.049 C99.26,175.202,103.313,175.202,106.582,175.202z"/><path fill="#FFFFFF" d="M99.653,364.613c-10.198-0.262-10.72-4.054-11.114-8.105c-0.392-5.493-0.522-8.89-0.522-35.038 c0-9.413,0.131-19.219,0.262-28.631c10.852,0,17.258,0.131,20.524,0.653c5.752,0.785,5.752,3.006,5.752,11.243 c0,1.57,1.047,1.57,2.746,1.57c1.57,0,1.83-0.263,2.224-2.224c1.959-7.974,4.183-18.172,4.183-18.957 c0-0.785-0.653-0.914-1.438-0.914c-0.522,0-3.138,0.783-3.792,0.914c-5.621,1.045-33.599,1.045-41.967,1.045 c-5.359,0-27.324,0-30.199-1.437c-0.785-0.394-1.438-0.522-2.092-0.522c-1.045,0-1.176,0.391-1.437,1.437 c-1.047,4.967-3.269,17.52-3.269,19.219c0,1.176,0.914,1.439,2.615,1.439c1.699,0,1.699-0.263,2.484-3.006 c2.744-10.198,7.058-10.198,29.414-10.46c0.131,8.367,0.131,22.617,0.131,25.625c0,4.836-0.131,29.677-0.522,35.689 c-0.522,6.929-1.699,9.415-11.243,10.329c-2.484,0.262-2.484,0.262-2.484,2.224c0,1.83,0,2.09,1.699,2.09 c4.705,0,9.544-0.391,20.001-0.391c11.374,0,16.867,0.391,19.088,0.391c1.57,0,1.83,0,1.83-2.09 C102.528,364.745,102.268,364.745,99.653,364.613z"/><path fill="#FFFFFF" d="M167.356,208.016c6.668,0.917,6.668,2.615,6.668,15.69c0,23.139-0.131,25.101-7.714,26.277 c-2.224,0.394-2.353,0.394-2.353,2.353c0,1.438,0.392,1.833,1.308,1.833c2.875,0,7.452-0.263,15.948-0.263 c7.191,0,12.553,0.263,14.643,0.263c1.307,0,1.701-0.131,1.701-2.224c0-1.568-0.263-1.831-2.224-1.961 c-4.705-0.26-7.32-0.392-8.105-3.792c-0.654-2.615-0.654-16.473-0.654-20.395c0-12.55,0.131-15.951,0.263-18.694 c0.26-3.009,0.391-6.146,0.654-9.153c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.615,0.394-3.923,0.916 c-4.967,1.961-9.935,3.922-14.774,6.013c-1.83,0.785-2.092,0.785-2.092,2.484C165.395,207.756,165.789,207.756,167.356,208.016z"/><path fill="#FFFFFF" d="M119.515,395.729c-3.269,1.699-4.183,2.221-4.183,5.099c0,3.006,2.613,3.138,4.705,3.138 c7.845,0,9.284-2.353,13.075-10.852c11.374-24.971,16.473-35.952,31.507-62.884c5.359-9.544,6.929-11.112,8.368-12.028 c2.09-1.308,2.353-1.57,2.353-2.875c0-1.701-0.392-1.961-1.308-1.961c-1.699,0-5.23,0.26-8.89,0.26c-4.968,0-8.236-0.26-10.198-0.26 c-1.176,0-1.438,0.391-1.438,2.221c0,1.439,0.262,1.699,1.308,1.83c4.97,0.654,6.015,0.785,6.015,3.4 c0,1.699-1.307,5.099-2.092,7.06c-2.875,6.667-4.051,9.15-13.073,28.238c-2.746-6.667-11.896-31.116-11.896-35.298 c0-2.746,2.484-3.006,5.49-3.4c1.438-0.131,1.567-0.26,1.567-2.221c0-1.57-0.129-1.83-1.567-1.83c-1.83,0-10.589,0.26-12.55,0.26 c-5.622,0-8.89-0.26-11.899-0.26c-1.437,0-1.699,0.129-1.699,2.221c0,0.654,0,1.439,0.785,1.699c2.353,0.917,2.875,1.179,4.313,3.4 c3.531,5.49,19.61,49.158,19.61,50.072C137.817,371.151,128.143,391.153,119.515,395.729z"/>',
                    title: "Wiper Typography",
                    date: "january, thirteen",
                    img: "data/poster/wiper",
                    itemcolor: "#5f57ca",
                    bgcolor: "#0074b0",
                    preload: [],
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "planttrees",
                    classfn: PlantTrees,
                    svg: '<path fill="#FFFFFF" d="M564.879,96.369c1.292-0.027,1.412-0.084,1.902-0.308v6.931h2.143v-9.494H567.3 c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351V96.369z"/> <path fill="#FFFFFF" d="M551.34,99.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V96.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C553.177,97.77,552.405,98.568,551.34,99.547z"/> <polygon fill="#FFFFFF" points="568.643,46.084 571.969,51.993 574.269,51.993 574.269,42.107 572.021,42.107 572.021,48.127 568.682,42.107 566.381,42.107 566.381,51.993 568.643,51.993 "/> <path fill="#FFFFFF" d="M559.894,103.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C556.767,101.242,557.765,103.203,559.894,103.203z M559.945,95.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C558.748,96.482,559.002,95.096,559.945,95.096z"/> <polygon fill="#FFFFFF" points="566.154,84.045 561.142,84.045 561.142,81.695 565.438,81.695 565.438,79.817 561.142,79.817 561.142,78.025 565.743,78.025 565.743,76.107 558.801,76.107 558.801,85.993 566.154,85.993 "/> <path fill="#FFFFFF" d="M623.559,79.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C622.653,81.666,623.559,80.993,623.559,79.312z M619.808,80.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,79.566,621.151,80.629,619.808,80.629z"/> <polygon fill="#FFFFFF" points="613.876,78.025 613.876,76.107 606.932,76.107 606.932,85.993 614.288,85.993 614.288,84.045 609.273,84.045 609.273,81.695 613.568,81.695 613.568,79.817 609.273,79.817 609.273,78.025 "/> <polygon fill="#FFFFFF" points="611.109,50.045 606.095,50.045 606.095,47.693 610.391,47.693 610.391,45.817 606.095,45.817 606.095,44.026 610.696,44.026 610.696,42.107 603.754,42.107 603.754,51.993 611.109,51.993 "/> <polygon fill="#FFFFFF" points="617.625,49.905 613.955,49.905 613.955,42.107 611.614,42.107 611.614,51.993 617.625,51.993 "/> <polygon fill="#FFFFFF" points="625.445,50.045 620.432,50.045 620.432,47.693 624.728,47.693 624.728,45.817 620.432,45.817 620.432,44.026 625.033,44.026 625.033,42.107 618.091,42.107 618.091,51.993 625.445,51.993 "/> <path fill="#FFFFFF" d="M597.517,85.993h4.602c1.916,0,3.459-0.952,3.459-2.773c0-1.735-1.464-2.226-2.369-2.31 c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375V85.993z M599.749,77.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V77.955z M599.749,81.806h2.022 c0.479,0,1.423,0.027,1.423,1.219c0,1.133-1.049,1.174-1.807,1.174h-1.639V81.806z"/> <path fill="#FFFFFF" d="M567.005,81.036c0,3.346,2.009,5.25,4.497,5.25c1.955,0,3.299-1.176,4.043-2.549l-1.849-0.993 c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249c0-1.654,0.799-3.138,2.314-3.138 c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562C568.895,75.8,567.005,78.109,567.005,81.036z" /> <path fill="#FFFFFF" d="M577.834,96.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V96.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C576.983,99.143,577.834,97.882,577.834,96.229z"/> <polygon fill="#FFFFFF" points="580.053,51.993 583.312,42.107 580.811,42.107 578.884,49.136 576.94,42.107 574.44,42.107 577.66,51.993 "/> <path fill="#FFFFFF" d="M595.893,50.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,49.948,596.585,50.27,595.893,50.27z"/> <path fill="#FFFFFF" d="M557.498,81.05c0-3.248-1.557-4.942-5.188-4.942h-3.219v9.885h3.696 C556.527,85.993,557.498,83.402,557.498,81.05z M552.218,84.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,83.262,554.238,84.004,552.218,84.004z"/> <path fill="#FFFFFF" d="M587.555,78.6l1.943,7.393h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432 l-1.743,6.917l-1.77-6.917h-3.432v9.885h2.289C587.608,85.993,587.595,79.984,587.555,78.6z"/> <polygon fill="#FFFFFF" points="579.069,81.695 583.365,81.695 583.365,79.817 579.069,79.817 579.069,78.025 583.67,78.025 583.67,76.107 576.728,76.107 576.728,85.993 584.084,85.993 584.084,84.045 579.069,84.045 "/> <path fill="#FFFFFF" d="M631.152,49.023l-1.77-6.916h-3.432v9.886h2.287c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.035l1.955-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432L631.152,49.023z"/> <path fill="#FFFFFF" d="M589.004,50.41l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886h2.5l0.466-1.583H589.004z M587.249,44.46l1.224,4.171h-2.382L587.249,44.46z"/> <path fill="#FFFFFF" d="M559.291,51.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,44.46l1.224,4.171h-2.382L561.461,44.46z"/> <polygon fill="#FFFFFF" points="639.758,47.693 644.053,47.693 644.053,45.817 639.758,45.817 639.758,44.026 644.358,44.026 644.358,42.107 637.416,42.107 637.416,51.993 644.771,51.993 644.771,50.045 639.758,50.045 "/> <path fill="#FFFFFF" d="M553.215,52.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,50.382,550.727,52.287,553.215,52.287z"/> <polygon fill="#FFFFFF" points="554.344,59.107 552.455,59.107 548.413,68.993 550.302,68.993 "/> <polygon fill="#FFFFFF" points="653.428,42.107 653.428,44.053 655.875,44.053 655.875,51.993 658.243,51.993 658.243,44.053 660.678,44.053 660.678,42.107 "/> <polygon fill="#FFFFFF" points="650.902,48.127 647.564,42.107 645.264,42.107 645.264,51.993 647.523,51.993 647.523,46.084 650.849,51.993 653.149,51.993 653.149,42.107 650.902,42.107 "/> <path fill="#FFFFFF" d="M92.69,940.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C95.814,940.988,95.468,940.643,92.69,940.643z"/> <path fill="#FFFFFF" d="M177.735,915.82c-0.869,0-1.389,0.868-2.083,3.473c-0.52,1.909-2.429,7.811-4.859,9.72 c-3.993,3.124-22.739,3.124-28.989,3.124c-8.68,0-15.968-0.174-21.35-0.174c39.576-38.013,52.769-50.686,52.769-70.82 c0-16.316-11.978-28.121-27.6-28.121c-23.954,0-35.409,21.699-35.409,24.475c0,1.389,2.95,2.777,3.818,2.777 c1.041,0,1.215-0.52,2.083-3.124c3.124-9.199,12.67-13.364,21.87-13.364c8.332,0,19.789,4.339,19.789,20.135 c0,4.859-0.174,14.06-18.226,37.318c-10.937,14.233-25.17,30.03-34.717,39.578c-0.868,0.866-0.868,1.562-0.868,3.124 c0,1.215,0.868,1.215,3.818,1.215c3.472,0,25.691-0.349,30.552-0.349c8.677,0,22.911,0.349,32.285,0.349 c2.43,0,3.473-0.349,4.339-3.818c0.694-3.124,5.556-22.219,5.556-23.781C180.513,916.166,178.775,915.82,177.735,915.82z"/> <path fill="#FFFFFF" d="M611.272,221.697c-8.89-3.922-11.765-6.535-11.765-10.72c0-1.961,0.914-7.451,8.627-7.451 c6.538,0,10.461,3.66,13.204,9.675c0.785,1.568,1.048,1.699,1.701,1.699c3.007,0,3.138-0.522,3.138-1.57 c0-1.959-0.785-9.413-1.047-11.243c-0.261-2.484-0.261-2.744-1.177-2.744c-0.653,0-1.698,0.26-2.09,0.26 c-0.654,0-7.061-1.045-11.637-1.045c-17.911,0-22.094,10.327-22.094,16.21c0,9.284,8.236,13.204,14.249,16.081 c10.328,4.837,14.383,7.452,14.383,12.419c0,1.961-0.917,8.236-9.544,8.236c-2.484,0-12.553-0.26-16.082-12.028 c-0.653-1.961-0.785-2.353-1.698-2.353c-1.177,0-3.009,0.131-3.009,1.57c0,1.699,0.524,4.183,0.524,7.32 c0,8.368,0,9.021,0.914,9.021c0.785,0,1.438-0.131,2.224-0.131c1.045,0,3.269,0.392,6.013,0.785 c2.746,0.391,6.146,0.782,9.544,0.782c13.075,0,23.533-5.49,23.533-16.602C629.185,229.673,620.034,225.62,611.272,221.697z"/> <path fill="#FFFFFF" d="M470.234,198.296c-1.83,0-4.708,1.83-7.061,3.269c-3.923,2.484-8.236,5.49-12.027,8.236 c0-1.83,0.653-10.329,0.653-11.374c0-0.785,0-1.308-1.701-1.308c-1.567,0-1.959,0.263-5.49,2.353 c-2.615,1.57-9.021,4.708-11.111,5.622c-2.354,1.179-2.615,1.179-2.615,2.615c0,1.83,0.261,1.961,0.914,1.961 c1.308,0,4.708,0.522,5.492,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.394,14.511-0.653,16.602 c-0.525,4.185-1.57,5.492-5.23,6.406c-2.092,0.525-2.224,0.525-2.224,2.484c0,1.833,0.394,1.833,1.962,1.833 c2.746,0,9.021-0.263,13.466-0.263c6.145,0,12.551,0.263,16.342,0.263c1.438,0,1.83-0.263,1.83-2.224 c0-1.308-0.129-1.961-1.308-1.961c-1.177,0-2.353-0.131-3.267-0.26c-8.367-0.654-8.63-0.654-8.63-25.757 c0-1.567,0-9.544,0.522-10.458c0.263-0.654,5.753-4.838,10.721-4.838c3.008,0,4.315,1.701,5.884,4.053 c1.047,1.699,1.438,1.83,1.83,1.83c1.176,0,7.19-4.576,7.19-9.281C477.031,203.395,473.763,198.296,470.234,198.296z"/> <path fill="#FFFFFF" d="M195.468,247.583c-3.4,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324 c0-3.006-0.394-6.929-2.746-9.804c-1.308-1.439-4.705-4.968-12.288-4.968c-17.128,0-28.502,11.896-28.502,16.473 c0,1.176,0.916,1.83,1.961,1.83c2.092,0,7.322-1.176,8.761-1.699c1.567-0.525,2.09-1.179,2.09-2.355c0-0.522-0.26-2.615-0.26-3.006 c0-0.654,0.129-1.308,1.437-1.83c2.877-1.045,6.146-1.176,7.454-1.176c3.138,0,7.06,0.654,8.366,4.051 c1.047,2.093,1.178,4.316,1.047,15.559c-8.63,0.914-16.867,2.484-22.619,4.314c-7.189,2.353-10.327,3.922-10.327,12.419 c0,5.361,1.83,13.206,12.159,13.206c7.974,0,16.733-4.054,20.655-5.752c0.262,1.308,1.176,5.881,7.06,5.881 c3.529,0,10.329-1.83,17.78-5.75c1.439-0.785,1.439-1.047,1.439-3.009l0.129-2.875l-0.654-0.263 C202.134,246.015,198.214,247.583,195.468,247.583z M178.341,244.576c-0.785,2.747-7.977,4.054-11.505,4.054 c-4.968,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.222,9.544-2.222 c2.484,0,3.529,1.177,3.529,3.923C178.732,236.994,178.732,243.269,178.341,244.576z"/> <path fill="#FFFFFF" d="M100.044,177.509c-4.313-3.269-10.066-6.015-23.139-6.015c-6.668,0-11.896,0.525-21.312,0.525 c-4.445,0-10.066-0.131-13.335-0.131c-1.699,0-1.959,0.131-1.959,1.83c0,2.093,0,2.093,1.437,2.221 c5.621,0.394,8.107,0.654,8.89,3.792c1.047,4.054,0.785,41.184,0.654,46.152c-0.392,20.655-0.783,24.187-9.021,25.231 c-2.353,0.392-2.613,0.392-2.613,2.353c0,0.916,0,1.83,1.045,1.83c1.439,0,3.4-0.26,17.518-0.26c12.812,0,17.52,0.26,18.565,0.26 c1.045,0,1.307-0.26,1.307-2.222c0-1.83-0.262-1.83-1.83-1.83c-5.621-0.262-8.499-0.394-9.675-3.662 c-1.308-3.661-1.568-18.041-1.568-25.363c2.09,0.263,4.836,0.394,8.497,0.394c23.795,0,35.3-12.29,35.3-26.539 C108.806,187.967,105.015,181.562,100.044,177.509z M71.415,217.906c-2.486,0-4.707-0.26-6.277-0.392 c0-0.654-0.129-7.322-0.129-14.905c0-9.935,0.129-21.571,0.522-24.055c0.131-1.308,0.26-2.353,7.32-2.353 c4.054,0,10.591,0.785,14.774,4.967c4.708,4.708,5.622,11.374,5.622,15.819C93.247,209.147,86.056,217.906,71.415,217.906z"/> <path fill="#FFFFFF" d="M277.038,251.114c-4.836-0.131-7.452-0.522-7.714-8.89c-0.131-3.006,0-11.243,0-21.309 c0-8.236,0-22.096-15.034-22.096c-5.884,0-13.727,3.008-25.103,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.392-0.914-1.177-0.914c-0.391,0-1.436,0-2.221,0.26c-1.701,0.522-15.165,6.275-16.341,6.797 c-2.224,0.917-2.355,1.047-2.355,2.615c0,1.83,0,1.83,2.224,1.83c6.667,0.262,6.667,1.307,6.667,15.559 c0,7.583-0.26,16.473-0.522,19.088c-0.523,4.576-2.875,6.275-6.275,6.798c-2.224,0.262-2.353,0.394-2.353,2.353 c0,1.178,0.129,1.833,1.437,1.833c2.484,0,5.099-0.263,12.681-0.263c5.493,0,13.989,0.263,16.082,0.263 c0.785,0,1.439-0.131,1.439-2.224c0-1.439-0.131-1.699-1.439-1.831c-4.836-0.522-7.06-0.654-7.974-3.531 c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.522-19.87c0.522-0.917,8.759-3.923,15.166-3.923 c2.746,0,6.275,0.785,8.63,3.138c3.267,3.4,3.267,10.198,3.267,15.95c0,4.705,0,16.473-0.914,20.133 c-0.785,2.877-2.877,3.531-5.622,4.054c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.57,1.045,1.57 c2.484,0,10.589-0.263,14.905-0.263c6.406,0,11.243,0.263,13.857,0.263c1.699,0,1.961-0.394,1.961-2.093 C279.784,251.245,279.39,251.114,277.038,251.114z"/> <path fill="#FFFFFF" d="M109.317,171.888c5.099,0.654,6.669,0.785,7.454,3.923c0.914,3.137,0.914,11.111,0.914,29.808 c0,16.602-0.131,28.107-0.654,36.997c-0.26,5.621-1.83,7.714-7.189,8.499c-2.092,0.263-2.355,0.263-2.355,1.961 s0.394,2.093,1.57,2.093c2.615,0,8.367-0.131,14.511-0.131c7.06,0,12.942,0.131,16.733,0.131c1.57,0,1.961-0.131,1.961-2.224 c0-1.439-0.26-1.699-1.568-1.699c-5.23-0.522-7.845-0.654-9.021-2.746c-0.914-1.439-1.439-2.353-1.439-36.475 c0-9.415,0.131-19.873,0.131-21.834c0-9.152,0.131-14.774,0.654-21.309c0.131-1.308,0.522-3.531,0.522-4.97 c0-0.914-0.522-1.437-1.308-1.437c-3.006,0-9.019,1.961-19.61,5.359c-2.353,0.654-2.615,0.785-2.615,2.484 C108.01,171.756,108.272,171.756,109.317,171.888z"/> <path fill="#FFFFFF" d="M580.56,215.945c-0.784-0.26-0.916-0.523-1.569-3.267c-1.83-7.191-9.15-14.12-19.742-14.12 c-13.203,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.142,26.146c13.727,0,24.972-8.89,24.972-10.458 c0-0.262,0-0.262-0.262-1.308l-0.523-1.961h-0.784c-7.061,5.23-14.12,5.23-15.557,5.23c-15.69,0-17.39-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.528-0.654,3.528-2.744C581.474,216.861,581.474,216.207,580.56,215.945z M561.863,219.345c-6.537,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C566.439,217.121,566.049,218.3,561.863,219.345z"/> <path fill="#FFFFFF" d="M526.443,215.945c-0.785-0.26-0.916-0.523-1.57-3.267c-1.83-7.191-9.15-14.12-19.739-14.12 c-13.206,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.14,26.146c13.729,0,24.972-8.89,24.972-10.458 c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.118,5.23-15.557,5.23c-15.688,0-17.389-16.082-17.78-20.396 c12.551-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.531-0.654,3.531-2.744C527.359,216.861,527.359,216.207,526.443,215.945z M507.747,219.345c-6.535,1.699-10.327,2.615-16.995,3.792c0.131-13.989,5.492-19.088,10.851-19.088 c6.406,0,10.721,7.191,10.721,11.768C512.323,217.121,511.932,218.3,507.747,219.345z"/> <path fill="#FFFFFF" d="M434.945,171.625c0-0.785-0.654-0.914-1.439-0.914c-0.522,0-3.138,0.783-3.791,0.914 c-5.621,1.048-33.6,1.048-41.967,1.048c-5.359,0-27.324,0-30.199-1.439c-0.785-0.394-1.438-0.522-2.093-0.522 c-1.045,0-1.176,0.391-1.438,1.437c-1.045,4.97-3.267,17.52-3.267,19.219c0,1.176,0.914,1.439,2.612,1.439 c1.701,0,1.701-0.263,2.486-3.006c2.744-10.198,7.058-10.198,29.415-10.46c0.131,8.368,0.131,22.617,0.131,25.625 c0,4.836-0.131,29.677-0.522,35.689c-0.522,6.929-1.699,9.415-11.243,10.329c-2.485,0.262-2.485,0.262-2.485,2.224 c0,1.83,0,2.09,1.7,2.09c4.706,0,9.544-0.392,20.002-0.392c11.374,0,16.866,0.392,19.088,0.392c1.57,0,1.83,0,1.83-2.09 c0-1.961-0.26-1.961-2.875-2.093c-10.198-0.262-10.721-4.054-11.114-8.105c-0.391-5.492-0.522-8.89-0.522-35.038 c0-9.413,0.132-19.219,0.263-28.632c10.852,0,17.258,0.131,20.524,0.654c5.752,0.785,5.752,3.006,5.752,11.243 c0,1.57,1.048,1.57,2.747,1.57c1.569,0,1.829-0.263,2.223-2.224C432.722,182.608,434.945,172.41,434.945,171.625z"/> <path fill="#FFFFFF" d="M319.647,199.995c-0.914-0.129-18.565,0-20.787,0c0-1.568,0.654-10.066,0.654-10.195 c0-0.785-0.394-1.047-1.57-1.047c-1.567,0-1.83,0.262-3.922,2.615c-3.529,3.922-8.236,7.845-12.941,11.243 c-1.699,1.308-1.83,1.439-1.83,2.615c0,1.438,0.131,1.701,0.522,1.83h6.275c-0.131,3.791-0.785,30.855-0.785,33.339 c0,4.706,0,15.95,13.204,15.95c7.976,0,16.344-4.185,18.958-5.492c2.353-1.176,2.353-1.308,2.353-3.006v-2.484h-1.307 c-2.224,1.045-5.49,2.615-10.329,2.615c-10.066,0-10.066-6.407-10.066-14.251c0-7.189,0-8.759,0.131-13.989 c0.131-1.436,0.391-12.288,0.391-12.55h19.35c0.654,0,1.961,0,2.222-0.26c0.262-0.394,0.262-3.009,0.262-3.663 C320.432,200.388,320.432,199.995,319.647,199.995z"/>',
                    title: "Plant Trees",
                    date: "december, twelve",
                    img: "data/poster/tree",
                    itemcolor: "#2291a9",
                    bgcolor: "#ddd",
                    preload: ["contents/planttrees/plants.png", "contents/planttrees/plants-bt@2x.png"],
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "surfacewaves",
                    classfn: WaveInCircle,
                    svg: '<path fill="#FFFFFF" d="M553.215,52.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,50.382,550.727,52.287,553.215,52.287z"/> <polygon fill="#FFFFFF" points="568.643,46.084 571.969,51.993 574.269,51.993 574.269,42.107 572.021,42.107 572.021,48.127 568.682,42.107 566.381,42.107 566.381,51.993 568.643,51.993 "/> <path fill="#FFFFFF" d="M595.893,50.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,49.948,596.585,50.27,595.893,50.27z"/> <polygon fill="#FFFFFF" points="620.432,47.693 624.728,47.693 624.728,45.817 620.432,45.817 620.432,44.026 625.033,44.026 625.033,42.107 618.091,42.107 618.091,51.993 625.445,51.993 625.445,50.045 620.432,50.045 "/> <polygon fill="#FFFFFF" points="611.109,50.045 606.095,50.045 606.095,47.693 610.391,47.693 610.391,45.817 606.095,45.817 606.095,44.026 610.696,44.026 610.696,42.107 603.754,42.107 603.754,51.993 611.109,51.993 "/> <polygon fill="#FFFFFF" points="653.428,42.107 653.428,44.053 655.875,44.053 655.875,51.993 658.243,51.993 658.243,44.053 660.678,44.053 660.678,42.107 "/> <polygon fill="#FFFFFF" points="580.053,51.993 583.312,42.107 580.811,42.107 578.884,49.136 576.94,42.107 574.44,42.107 577.66,51.993 "/> <polygon fill="#FFFFFF" points="565.743,78.025 565.743,76.107 558.801,76.107 558.801,85.993 566.154,85.993 566.154,84.045 561.142,84.045 561.142,81.695 565.438,81.695 565.438,79.817 561.142,79.817 561.142,78.025 "/> <polygon fill="#FFFFFF" points="617.625,49.905 613.955,49.905 613.955,42.107 611.614,42.107 611.614,51.993 617.625,51.993 "/> <path fill="#FFFFFF" d="M559.291,51.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,44.46l1.224,4.171h-2.382L561.461,44.46z"/> <polygon fill="#FFFFFF" points="639.758,47.693 644.053,47.693 644.053,45.817 639.758,45.817 639.758,44.026 644.358,44.026 644.358,42.107 637.416,42.107 637.416,51.993 644.771,51.993 644.771,50.045 639.758,50.045 "/> <polygon fill="#FFFFFF" points="650.902,48.127 647.564,42.107 645.264,42.107 645.264,51.993 647.523,51.993 647.523,46.084 650.849,51.993 653.149,51.993 653.149,42.107 650.902,42.107 "/> <path fill="#FFFFFF" d="M631.152,49.023l-1.77-6.916h-3.432v9.886h2.287c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.035l1.955-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432L631.152,49.023z"/> <path fill="#FFFFFF" d="M577.834,96.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V96.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C576.983,99.143,577.834,97.882,577.834,96.229z"/> <path fill="#FFFFFF" d="M575.545,83.737l-1.849-0.993c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249 c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25C573.457,86.287,574.801,85.11,575.545,83.737z"/> <polygon fill="#FFFFFF" points="579.069,81.695 583.365,81.695 583.365,79.817 579.069,79.817 579.069,78.025 583.67,78.025 583.67,76.107 576.728,76.107 576.728,85.993 584.084,85.993 584.084,84.045 579.069,84.045 "/> <path fill="#FFFFFF" d="M590.521,83.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L590.521,83.025z"/> <path fill="#FFFFFF" d="M603.208,80.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C605.577,81.484,604.113,80.993,603.208,80.91z M599.749,77.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V77.955z M601.388,84.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C603.194,84.158,602.146,84.199,601.388,84.199z"/> <path fill="#FFFFFF" d="M566.369,94.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H567.3C567.127,93.878,566.955,94.24,566.369,94.564z"/> <path fill="#FFFFFF" d="M589.004,50.41l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886h2.5l0.466-1.583H589.004z M587.249,44.46l1.224,4.171h-2.382L587.249,44.46z"/> <path fill="#FFFFFF" d="M555.41,96.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V96.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C554.559,99.143,555.41,97.882,555.41,96.229z"/> <path fill="#FFFFFF" d="M623.559,79.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C622.653,81.666,623.559,80.993,623.559,79.312z M619.808,80.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,79.566,621.151,80.629,619.808,80.629z"/> <path fill="#FFFFFF" d="M552.311,76.107h-3.219v9.885h3.696c3.739,0,4.71-2.59,4.71-4.943 C557.498,77.802,555.941,76.107,552.311,76.107z M552.218,84.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,83.262,554.238,84.004,552.218,84.004z"/> <polygon fill="#FFFFFF" points="554.344,59.107 552.455,59.107 548.413,68.993 550.302,68.993 "/> <polygon fill="#FFFFFF" points="609.273,81.695 613.568,81.695 613.568,79.817 609.273,79.817 609.273,78.025 613.876,78.025 613.876,76.107 606.932,76.107 606.932,85.993 614.288,85.993 614.288,84.045 609.273,84.045 "/> <path fill="#FFFFFF" d="M559.973,93.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C563.164,96.944,562.858,93.345,559.973,93.345z M559.973,101.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C561.169,99.841,560.983,101.466,559.973,101.466z"/> <path fill="#FFFFFF" d="M92.69,940.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C95.814,940.988,95.468,940.643,92.69,940.643z"/> <path fill="#FFFFFF" d="M164.544,940.643c-12.498-0.349-16.145-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.389-0.694-2.083-0.869-2.604-0.869c-0.52,0-3.992,2.778-5.901,3.993c-11.456,7.465-16.489,9.72-23.434,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.521,3.472,0.521,20.309,0.521,24.822c0,19.269,0,38.535-0.695,47.215 c-0.866,10.066-1.909,13.885-16.837,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C167.668,940.988,167.32,940.643,164.544,940.643z"/> <path fill="#FFFFFF" d="M278.858,215.031c0,1.176,0.917,1.83,1.961,1.83c2.092,0,7.323-1.176,8.759-1.699 c1.57-0.525,2.093-1.179,2.093-2.355c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.131-1.308,1.439-1.83 c2.877-1.045,6.146-1.176,7.451-1.176c3.14,0,7.06,0.654,8.368,4.051c1.047,2.093,1.176,4.316,1.047,15.559 c-8.63,0.914-16.866,2.484-22.619,4.314c-7.189,2.353-10.326,3.922-10.326,12.419c0,5.361,1.83,13.206,12.156,13.206 c7.977,0,16.735-4.054,20.658-5.752c0.26,1.308,1.176,5.881,7.06,5.881c3.529,0,10.327-1.83,17.78-5.75 c1.437-0.785,1.437-1.047,1.437-3.009l0.131-2.875l-0.654-0.263c-2.484,1.439-6.406,3.007-9.15,3.007 c-3.4,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324c0-3.006-0.394-6.929-2.747-9.804 c-1.307-1.439-4.708-4.968-12.29-4.968C290.232,198.558,278.858,210.455,278.858,215.031z M309.06,244.576 c-0.785,2.747-7.976,4.054-11.505,4.054c-4.967,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.407-6.669 c2.615-1.045,6.275-2.222,9.543-2.222c2.484,0,3.529,1.177,3.529,3.923C309.452,236.994,309.452,243.269,309.06,244.576z"/> <path fill="#FFFFFF" d="M107.489,207.055c4.183,0.131,6.275,0.131,6.538,6.8c0.129,3.398-0.131,20.133-0.131,23.924 c0,6.013,0.522,9.413,3.398,12.944c3.14,3.791,8.236,5.621,12.552,5.621c7.714,0,16.21-4.054,24.187-7.976 c0,0.785-0.394,4.577-0.394,5.493c0,0.914,0,2.353,1.961,2.353c2.484,0,14.12-3.006,18.696-4.445 c4.183-1.176,4.183-1.176,4.183-2.224c0-2.613-0.262-2.613-0.916-2.613c-0.391,0-2.353,0.392-2.744,0.392 c-1.57,0.26-3.006,0.391-4.054,0.391c-4.051,0-4.051-2.875-4.051-9.673c0-6.277,0.522-23.142,0.654-27.195 c0-1.567,0.522-9.15,0.522-10.851c0-1.045-0.394-1.437-1.308-1.437c-0.916,0-5.492,0.785-6.406,0.914 c-4.838,0.654-12.812,1.439-13.335,1.439c-2.877,0.131-3.138,0.131-3.138,2.353c0,1.308,0.654,1.701,3.66,1.701 c7.191,0,7.191,2.615,7.191,10.98c0,7.06,0,27.193-0.785,28.24c-0.785,1.045-8.105,3.922-14.905,3.922 c-12.157,0-12.157-11.245-12.157-22.748c0-5.099,0.129-13.075,0.392-17.52c0.263-2.747,0.522-6.667,0.522-7.974 c0-0.654,0-1.439-1.176-1.439c-2.221,0-17.649,4.183-18.042,4.314c-2.222,0.654-2.484,0.654-2.484,2.353 C105.919,206.926,106.182,206.926,107.489,207.055z"/> <path fill="#FFFFFF" d="M319.912,330.444c-0.785-0.26-0.917-0.522-1.568-3.269c-1.832-7.189-9.152-14.118-19.741-14.118 c-13.207,0-27.324,11.505-27.324,31.769c0,10.327,4.313,26.146,23.139,26.146c13.729,0,24.972-8.891,24.972-10.458 c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.118,5.23-15.557,5.23c-15.688,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.531-0.654,3.531-2.744C320.828,331.36,320.828,330.707,319.912,330.444z M301.217,333.844c-6.538,1.699-10.329,2.615-16.998,3.792c0.131-13.989,5.493-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C305.792,331.621,305.4,332.799,301.217,333.844z"/> <path fill="#FFFFFF" d="M235.722,255.297c1.176,0,7.322-0.26,12.028-0.26c6.668,0,16.866,0.26,19.087,0.26 c2.747,0,3.138-0.26,3.138-2.353c0-1.699,0-1.961-2.09-1.961c-8.368-0.131-11.245-0.785-11.376-8.628 c-0.26-7.714-0.26-22.879-0.26-35.169h17.649c1.83,0,1.83-0.653,1.83-3.791s0-3.4-1.438-3.529 c-2.484-0.131-15.165,0.129-18.041,0.129c0.131-19.871,0.522-28.37,14.12-28.37c7.189,0,9.936,2.615,11.374,4.054 c1.568,1.438,2.222,2.092,3.269,2.092c1.045,0,7.843-3.14,7.843-6.538c0-4.445-6.407-8.63-15.557-8.63 c-9.284,0-19.219,4.445-26.279,12.812c-6.929,8.236-7.06,14.251-7.32,24.84l-7.322,3.138c-0.654,0.263-0.654,0.522-0.654,2.353 c0,1.438,0.131,1.438,1.047,1.438h6.798c0,9.544,0,25.494-0.263,33.6c-0.26,8.89-1.308,9.544-7.451,10.46 c-1.176,0.131-1.176,0.392-1.176,2.222C234.677,254.514,234.808,255.297,235.722,255.297z"/> <path fill="#FFFFFF" d="M269.978,314.365c-1.045,0-2.615,0.26-7.191,0.26c-4.183,0-11.111-0.26-12.157-0.26 c-1.308,0-1.438,0.522-1.438,2.353c0,1.438,0.26,1.567,1.699,1.699c3.66,0.394,6.146,0.654,6.146,3.66 c0,2.746-1.961,6.931-14.382,34.647l-8.368-20.133c-1.437-3.531-4.836-11.636-4.836-14.643c0-2.746,1.57-2.877,5.49-3.4 c1.308-0.131,1.701-0.392,1.701-1.961c0-1.568-0.263-2.221-1.176-2.221c-2.486,0-7.06,0.26-12.944,0.26 c-7.583,0-9.282-0.26-12.028-0.26c-0.916,0-1.438,0.26-1.438,1.699c0,1.568,0.262,1.699,0.653,2.092 c1.961,1.045,2.615,1.437,3.531,2.744c3.66,4.97,19.739,43.928,21.047,47.851c0.525,1.568,0.785,1.83,1.308,1.699l4.708-0.785 l1.176-0.129c0.522,0,0.916-1.57,2.746-5.23c20.787-43.012,23.533-44.582,24.969-45.367c1.961-1.045,1.961-1.437,1.961-2.744 C271.154,315.542,271.154,314.365,269.978,314.365z"/> <path fill="#FFFFFF" d="M364.873,206.926c3.141,0,8.499,0.654,12.944,4.051c1.698,1.176,2.224,1.439,3.138,1.439 c1.961,0,6.929-3.269,6.929-6.538c0-4.576-7.32-7.32-15.557-7.32c-18.957,0-32.686,15.034-32.686,32.552 c0,12.682,7.323,25.363,23.927,25.363c12.811,0,23.924-9.019,23.924-10.458c0-0.262-0.131-0.262-0.522-1.045l-1.047-2.484h-0.914 c-6.146,5.097-13.204,5.097-14.643,5.097c-14.905,0-17.39-15.426-17.39-22.617C352.977,220.915,353.37,206.926,364.873,206.926z"/> <path fill="#FFFFFF" d="M442.392,215.945c-0.782-0.26-0.914-0.523-1.567-3.267c-1.83-7.191-9.152-14.12-19.741-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.313,26.146,23.142,26.146c13.727,0,24.969-8.89,24.969-10.458 c0-0.262,0-0.262-0.26-1.308l-0.525-1.961h-0.782c-7.061,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.53-0.654,3.53-2.744C443.308,216.861,443.308,216.207,442.392,215.945z M423.697,219.345c-6.537,1.699-10.328,2.615-16.995,3.792c0.129-13.989,5.49-19.088,10.85-19.088 c6.406,0,10.723,7.191,10.723,11.768C428.274,217.121,427.88,218.3,423.697,219.345z"/> <path fill="#FFFFFF" d="M353.239,336.197c-8.89-3.922-11.765-6.535-11.765-10.72c0-1.961,0.914-7.451,8.627-7.451 c6.538,0,10.46,3.66,13.206,9.675c0.783,1.568,1.046,1.699,1.699,1.699c3.007,0,3.138-0.523,3.138-1.57 c0-1.959-0.785-9.413-1.045-11.243c-0.263-2.484-0.263-2.746-1.179-2.746c-0.654,0-1.699,0.262-2.091,0.262 c-0.653,0-7.06-1.045-11.636-1.045c-17.912,0-22.094,10.327-22.094,16.21c0,9.284,8.236,13.204,14.249,16.082 c10.329,4.836,14.382,7.451,14.382,12.419c0,1.961-0.916,8.236-9.543,8.236c-2.484,0-12.55-0.26-16.082-12.028 c-0.654-1.961-0.785-2.353-1.699-2.353c-1.176,0-3.006,0.131-3.006,1.568c0,1.701,0.522,4.185,0.522,7.322 c0,8.368,0,9.021,0.914,9.021c0.785,0,1.438-0.131,2.224-0.131c1.045,0,3.269,0.391,6.013,0.785 c2.746,0.391,6.146,0.783,9.544,0.783c13.075,0,23.532-5.49,23.532-16.602C371.15,344.173,362.001,340.119,353.239,336.197z"/> <path fill="#FFFFFF" d="M185.396,255.168c2.747,0,9.021-0.263,13.467-0.263c6.144,0,12.55,0.263,16.341,0.263 c1.439,0,1.83-0.263,1.83-2.224c0-1.308-0.131-1.961-1.308-1.961s-2.353-0.131-3.269-0.26c-8.365-0.654-8.628-0.654-8.628-25.757 c0-1.567,0-9.544,0.523-10.458c0.262-0.654,5.752-4.838,10.72-4.838c3.006,0,4.313,1.701,5.884,4.053 c1.045,1.699,1.438,1.83,1.83,1.83c1.177,0,7.191-4.576,7.191-9.281c0-2.877-3.269-7.976-6.8-7.976c-1.83,0-4.705,1.83-7.058,3.269 c-3.923,2.484-8.236,5.49-12.028,8.236c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.308-1.701-1.308 c-1.568,0-1.961,0.263-5.49,2.353c-2.615,1.57-9.021,4.708-11.114,5.622c-2.353,1.179-2.615,1.179-2.615,2.615 c0,1.83,0.263,1.961,0.917,1.961c1.307,0,4.707,0.522,5.49,1.83c1.307,2.093,1.307,9.807,1.307,16.344 c0,10.589-0.391,14.511-0.654,16.602c-0.522,4.185-1.567,5.492-5.228,6.406c-2.093,0.525-2.224,0.525-2.224,2.484 C183.436,255.168,183.827,255.168,185.396,255.168z"/> <path fill="#FFFFFF" d="M203.833,362.082c-3.397,0-4.445-2.221-4.445-6.929c0-3.791,0.653-23.008,0.653-27.324 c0-3.006-0.391-6.929-2.744-9.804c-1.308-1.439-4.708-4.968-12.29-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.916,1.83,1.961,1.83c2.093,0,7.32-1.176,8.759-1.699c1.57-0.525,2.092-1.179,2.092-2.355 c0-0.522-0.262-2.615-0.262-3.006c0-0.654,0.131-1.308,1.438-1.83c2.875-1.045,6.144-1.176,7.452-1.176 c3.137,0,7.06,0.654,8.367,4.051c1.045,2.093,1.177,4.316,1.045,15.559c-8.628,0.914-16.864,2.484-22.617,4.314 c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.207,12.159,13.207c7.976,0,16.735-4.054,20.658-5.753 c0.26,1.308,1.176,5.882,7.058,5.882c3.531,0,10.329-1.83,17.78-5.753c1.439-0.783,1.439-1.045,1.439-3.006l0.131-2.875 l-0.654-0.262C210.502,360.515,206.579,362.082,203.833,362.082z M186.707,359.076c-0.783,2.746-7.974,4.054-11.503,4.054 c-4.97,0-7.583-1.83-7.583-8.89c0-2.353,0-4.054,6.404-6.669c2.615-1.045,6.277-2.221,9.544-2.221c2.484,0,3.531,1.176,3.531,3.922 C187.1,351.493,187.1,357.769,186.707,359.076z"/> <path fill="#FFFFFF" d="M45.527,255.559c1.57,0,1.57-1.176,3.4-1.176c1.57,0,11.765,2.221,22.225,2.221 c12.419,0,18.434-3.006,22.488-5.881c4.836-3.531,8.89-9.938,8.89-18.043c0-14.773-12.29-20.133-24.711-25.494 c-12.55-5.49-19.348-8.367-19.348-17.649c0-7.583,5.359-13.466,15.034-13.466c3.922,0,9.153,1.047,13.075,3.922 c3.791,2.875,4.836,6.407,6.667,11.766c0.262,1.178,0.654,1.438,1.308,1.438c1.699,0,3.4-0.522,3.4-2.221 c0-0.654-0.785-7.323-0.785-10.066v-8.236c0-0.654-0.262-1.048-0.785-1.048c-0.26,0-0.785,0.131-1.439,0.263 c-0.522,0.26-1.045,0.392-1.437,0.392c-0.394,0-3.269-0.392-6.8-0.914c-3.66-0.394-7.974-0.785-11.634-0.785 c-21.18,0-29.808,10.982-29.808,23.14c0,13.989,10.851,18.827,23.008,24.187c12.812,5.621,19.613,8.63,19.613,18.042 c0,8.497-6.538,14.643-16.473,14.643c-5.361,0-12.421-1.57-17.389-5.361c-3.006-2.353-5.49-6.144-7.191-12.55 c-0.391-1.961-0.522-3.006-1.437-3.006c-3.791,0-3.791,2.222-3.791,3.138c0,1.439,0.783,12.55,2.09,21.178 C43.96,255.168,44.091,255.559,45.527,255.559z"/> <path fill="#FFFFFF" d="M114.688,370.45c1.176,0,2.877-0.391,4.054-0.522c1.83-0.262,3.529-0.391,3.791-1.307 c2.615-9.675,24.578-55.825,32.814-69.42c4.445-7.191,5.622-8.107,8.105-8.63c1.048-0.26,1.308-0.522,1.308-2.353 c0-1.57-0.391-1.83-1.308-1.83c-1.699,0-10.458,0.26-12.419,0.26c-1.699,0-10.197-0.26-12.159-0.26c-1.308,0-1.568,0.26-1.568,2.221 c0,1.83,0.26,1.83,3.267,1.961c2.877,0.262,6.669,1.176,6.669,5.49c0,2.092-0.785,4.839-4.314,13.075 c-0.916,1.83-19.61,43.274-20.658,45.235c-3.269-9.284-9.544-23.795-13.073-32.945c5.359-10.198,12.288-22.879,12.941-23.927 c2.224-4.051,3.792-5.752,5.884-6.667c1.83-0.653,2.093-0.785,2.093-2.746c0-1.567-0.523-1.699-1.699-1.699 c-2.092,0-9.806,0.391-22.488,0.391c-16.473,0-20.395-0.391-25.885-0.391c-1.047,0-1.83,0.131-1.83,1.176 c0,1.699,0,2.484,0.654,2.615c0.914,0.391,2.221,0.785,2.875,1.436c3.138,2.877,15.034,32.554,16.735,37.393 c-1.701,3.66-10.591,21.309-12.682,25.363c-1.961-5.361-12.29-30.986-14.643-36.739c-1.961-5.097-7.845-19.739-7.845-23.008 c0-3.269,1.83-3.4,6.929-3.922c2.092-0.263,2.092-0.522,2.092-2.484c0-1.83-0.391-1.83-1.57-1.83c-4.183,0-8.365,0.26-13.595,0.26 c-6.538,0-9.675-0.26-15.034-0.26c-1.308,0-1.439,0-1.439,1.699c0,1.699,0.131,1.83,1.045,2.093 c3.138,0.914,4.185,2.744,6.275,6.666c3.66,6.669,10.983,24.709,13.204,30.202c10.982,27.453,11.899,30.2,15.036,40.135 c0.914,2.877,1.176,3.269,1.961,3.269c1.568,0,2.875-0.522,4.836-0.654c1.045,0,2.224-0.391,2.615-1.567 c3.529-9.675,9.282-21.44,15.557-33.077c4.97,12.55,9.152,23.793,11.767,32.292C113.773,370.19,113.902,370.45,114.688,370.45z M99.26,293.97c0-3.269,4.054-3.269,7.322-3.269c5.361,0,8.368,0.654,8.368,3.791c0,3.66-5.884,15.95-8.236,20.526 C105.144,311.228,99.26,296.322,99.26,293.97z"/>',
                    title: "Surface Waves",
                    date: "december, twelve",
                    img: "data/poster/wave",
                    itemcolor: "#259ab3",
                    bgcolor: "#29a5c0",
                    preload: [],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "rainingmen",
                    classfn: RainingMen,
                    svg: '<path fill="#FFFFFF" d="M93.69,939.643c-12.498-0.349-16.143-2.604-17.011-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.387-0.694-2.081-0.869-2.604-0.869c-0.52,0-3.99,2.778-5.899,3.993c-11.458,7.465-16.491,9.72-23.436,12.498 c-0.866,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.458-3.645,13.713-3.645 c2.778,0,4.167,1.389,4.513,3.645c0.522,3.472,0.522,20.309,0.522,24.822c0,19.269,0,38.535-0.694,47.215 c-0.869,10.066-1.909,13.885-16.839,14.928c-3.298,0.174-3.47,0.174-3.47,2.604c0,1.561,0,1.909,1.735,1.909 c2.778,0,9.72-0.174,21.524-0.174c5.382,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C96.814,939.988,96.468,939.643,93.69,939.643z"/> <path fill="#FFFFFF" d="M141.415,832.021c-37.144,0-37.144,46.347-37.144,57.282c0,38.881,15.274,56.587,36.972,56.587 c6.422,0,14.407-1.735,21.35-7.463c16.143-12.847,16.491-39.75,16.491-52.423C179.083,848.859,164.501,832.021,141.415,832.021z M141.415,940.163c-22.216,0-22.216-39.402-22.216-56.936c0-10.066,0.866-45.478,22.564-45.478 c19.615,0,22.219,30.029,22.219,50.859C163.981,905.274,162.767,940.163,141.415,940.163z"/> <path fill="#FFFFFF" d="M467.361,198.995c-5.23,0-10.592,0.394-15.821,1.047c-4.837-2.093-9.02-2.484-12.288-2.484 c-14.251,0-26.41,9.021-26.41,23.008c0,7.845,3.791,12.812,7.583,15.427c3.531,2.615,7.06,3.269,10.068,3.922 c-12.421,4.837-12.553,4.837-12.553,9.282c0,2.747,1.57,7.454,10.329,9.021c-3.529,1.57-9.413,3.922-14.643,7.451 c-3.66,2.484-3.66,4.185-3.66,8.499c0,4.967,0.392,6.275,0.785,7.06c2.221,5.884,14.38,7.974,21.309,7.974 c19.479,0,38.698-11.112,38.698-24.578c0-12.944-15.034-13.858-24.056-14.249c-11.765-0.654-18.04-0.917-18.04-5.099 c0-0.785,0.26-1.307,0.783-1.57c0.784-0.522,6.929-2.221,10.328-3.269c16.211-4.836,22.879-13.595,22.879-22.617 c0-6.015-2.224-8.89-3.659-10.589c3.659-0.131,5.228-0.131,10.457-0.131c2.355,0,2.484-0.522,2.484-4.314 C471.936,198.995,471.807,198.995,467.361,198.995z M434.284,259.526c2.615,0.263,14.118,1.045,16.473,1.439 c3.007,0.522,9.544,1.439,9.544,7.583c0,7.714-9.152,13.466-22.225,13.466c-6.669,0-17.521-1.83-17.521-9.675 C420.556,267.109,425.001,263.581,434.284,259.526z M441.867,235.209c-3.009-0.654-7.061-1.437-10.852-5.099 c-3.791-3.529-6.275-8.627-6.275-14.771c0-9.544,5.753-12.55,10.458-12.55c9.413,0,15.688,9.413,15.688,19.085 C450.886,230.895,444.742,233.901,441.867,235.209z"/> <path fill="#FFFFFF" d="M334.288,249.983c-4.708-0.26-7.323-0.392-8.107-3.792c-0.654-2.615-0.654-16.473-0.654-20.395 c0-12.55,0.131-15.951,0.262-18.694c0.263-3.009,0.392-6.146,0.654-9.153c0-1.045-0.654-1.307-1.308-1.307 c-1.176,0-2.615,0.394-3.922,0.916c-4.968,1.961-9.935,3.922-14.771,6.013c-1.833,0.785-2.093,0.785-2.093,2.484 c0,1.701,0.392,1.701,1.961,1.961c6.667,0.917,6.667,2.615,6.667,15.69c0,23.139-0.131,25.101-7.714,26.277 c-2.222,0.394-2.353,0.394-2.353,2.353c0,1.438,0.391,1.833,1.307,1.833c2.877,0,7.452-0.263,15.951-0.263 c7.191,0,12.55,0.263,14.643,0.263c1.308,0,1.699-0.131,1.699-2.224C336.509,250.376,336.249,250.114,334.288,249.983z"/> <path fill="#FFFFFF" d="M297.037,250.114c-4.836-0.131-7.452-0.522-7.711-8.89c-0.131-3.006,0-11.243,0-21.309 c0-8.236,0-22.096-15.037-22.096c-5.881,0-13.727,3.008-25.101,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.394-0.914-1.176-0.914c-0.394,0-1.438,0-2.224,0.26c-1.699,0.522-15.165,6.275-16.341,6.797 c-2.224,0.917-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.221,1.83c6.669,0.262,6.669,1.307,6.669,15.559 c0,7.583-0.263,16.473-0.525,19.088c-0.523,4.576-2.875,6.275-6.275,6.798c-2.221,0.262-2.353,0.394-2.353,2.353 c0,1.178,0.131,1.833,1.439,1.833c2.483,0,5.099-0.263,12.681-0.263c5.49,0,13.989,0.263,16.079,0.263 c0.785,0,1.439-0.131,1.439-2.224c0-1.439-0.131-1.699-1.439-1.831c-4.836-0.522-7.058-0.654-7.974-3.531 c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.522-19.87c0.525-0.917,8.761-3.923,15.167-3.923 c2.744,0,6.275,0.785,8.628,3.138c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.916,20.133 c-0.783,2.877-2.875,3.531-5.621,4.054c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.57,1.047,1.57 c2.484,0,10.589-0.263,14.903-0.263c6.406,0,11.243,0.263,13.858,0.263c1.701,0,1.961-0.394,1.961-2.093 C299.783,250.245,299.392,250.114,297.037,250.114z"/> <path fill="#FFFFFF" d="M413.376,252.075c0-1.83-0.392-1.961-2.744-1.961c-4.839-0.131-7.454-0.522-7.714-8.89 c-0.131-3.006,0-11.243,0-21.309c0-8.236,0-22.096-15.036-22.096c-5.882,0-13.727,3.008-25.101,8.63 c0-1.308,0.653-6.538,0.653-8.499c0-0.785-0.391-0.914-1.176-0.914c-0.394,0-1.438,0-2.224,0.26 c-1.699,0.522-15.166,6.275-16.342,6.797c-2.221,0.917-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.221,1.83 c6.669,0.262,6.669,1.307,6.669,15.559c0,7.583-0.263,16.473-0.522,19.088c-0.525,4.576-2.877,6.275-6.275,6.798 c-2.224,0.262-2.355,0.394-2.355,2.353c0,1.178,0.131,1.833,1.439,1.833c2.484,0,5.099-0.263,12.681-0.263 c5.49,0,13.989,0.263,16.082,0.263c0.782,0,1.437-0.131,1.437-2.224c0-1.439-0.129-1.699-1.437-1.831 c-4.839-0.522-7.061-0.654-7.977-3.531c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.525-19.87 c0.522-0.917,8.759-3.923,15.165-3.923c2.744,0,6.275,0.785,8.628,3.138c3.269,3.4,3.269,10.198,3.269,15.95 c0,4.705,0,16.473-0.916,20.133c-0.783,2.877-2.876,3.531-5.622,4.054c-1.961,0.26-1.961,0.392-1.961,2.353 c0,1.176,0.131,1.57,1.048,1.57c2.483,0,10.589-0.263,14.902-0.263c6.406,0,11.243,0.263,13.857,0.263 C413.115,254.168,413.376,253.774,413.376,252.075z"/> <path fill="#FFFFFF" d="M206.706,181.085c3.792,0,7.843-3.922,7.843-7.714c0-3.66-4.183-7.452-7.451-7.452 c-3.269,0-7.845,3.66-7.845,7.843C199.252,177.423,203.175,181.085,206.706,181.085z"/> <path fill="#FFFFFF" d="M138.992,229.719c-7.189,2.353-10.327,3.922-10.327,12.419c0,5.361,1.83,13.206,12.159,13.206 c7.974,0,16.733-4.054,20.655-5.752c0.262,1.308,1.176,5.881,7.06,5.881c3.529,0,10.329-1.83,17.78-5.75 c1.438-0.785,1.438-1.047,1.438-3.009l0.129-2.875l-0.654-0.263c-2.484,1.439-6.404,3.007-9.15,3.007 c-3.4,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324c0-3.006-0.394-6.929-2.746-9.804 c-1.308-1.439-4.705-4.968-12.288-4.968c-17.127,0-28.503,11.896-28.503,16.473c0,1.176,0.916,1.83,1.961,1.83 c2.092,0,7.322-1.176,8.761-1.699c1.567-0.525,2.09-1.179,2.09-2.355c0-0.522-0.26-2.615-0.26-3.006c0-0.654,0.129-1.308,1.436-1.83 c2.877-1.045,6.146-1.176,7.454-1.176c3.138,0,7.061,0.654,8.366,4.051c1.047,2.093,1.178,4.316,1.047,15.559 C152.98,226.319,144.744,227.889,138.992,229.719z M160.957,243.576c-0.785,2.747-7.977,4.054-11.505,4.054 c-4.967,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.222,9.544-2.222 c2.484,0,3.529,1.177,3.529,3.923C161.348,235.994,161.348,242.269,160.957,243.576z"/> <path fill="#FFFFFF" d="M320.298,181.085c3.792,0,7.843-3.922,7.843-7.714c0-3.66-4.183-7.452-7.451-7.452 c-3.269,0-7.845,3.66-7.845,7.843C312.845,177.423,316.768,181.085,320.298,181.085z"/> <path fill="#FFFFFF" d="M41.736,254.297c2.224,0,13.466-0.26,18.174-0.26c11.634,0,15.034,0.26,16.996,0.26 c1.176,0,1.438-0.523,1.438-2.222c0-1.308-0.262-1.699-1.179-1.699c-8.105-0.654-9.935-1.179-10.849-6.146 c-0.653-3.529-0.524-21.309-0.524-26.016c2.354,0.131,7.583,0.394,12.944-0.131c13.597,28.894,24.84,37.261,40.005,37.261 c1.83,0,4.968-0.131,7.714-1.047c1.045-0.26,1.176-0.783,1.176-2.09c0-1.179-0.131-1.701-0.916-1.701 c-2.744-0.129-5.359-0.26-9.673-2.615c-11.636-6.667-23.404-30.068-24.972-33.074c10.329-3.922,16.604-11.245,16.604-22.357 c0-22.225-23.926-22.225-27.718-22.225c-3.529,0-20.393,0.785-24.315,0.785c-1.83,0.129-11.245,0-13.335,0 c-1.83,0-1.961,0.129-1.961,2.09c0,1.57,0.131,1.701,1.307,1.83c4.968,0.394,7.32,0.525,8.368,3.663 c1.176,3.397,1.176,19.088,1.176,24.056c0,12.159,0,27.978-0.522,37.521c-0.131,3.92-0.654,8.89-7.845,9.804 c-2.746,0.394-3.137,0.394-3.137,2.224C40.691,253.514,40.951,254.297,41.736,254.297z M66.186,181.085 c0.131-5.099,0.131-5.884,8.367-5.884c8.105,0,13.073,2.875,15.819,7.845c2.221,3.92,2.744,8.236,2.744,12.027 c0,16.342-10.98,18.041-19.87,18.041c-3.531,0-5.361-0.26-7.454-0.654C65.923,207.493,66.054,185.399,66.186,181.085z"/> <path fill="#FFFFFF" d="M130.769,302.12v41.053c0,19.479-0.785,20.656-9.675,21.44c-3.138,0.26-3.529,0.26-3.529,2.222 c0,1.701,0.654,1.961,1.567,1.961c2.747,0,9.807-0.26,19.219-0.26c9.935,0,13.858,0.26,16.604,0.26c0.783,0,1.176-0.653,1.176-2.353 c0-1.699,0-1.699-2.484-1.83c-6.275-0.262-8.236-2.353-8.63-7.322c-0.522-5.621-1.045-45.104-1.176-53.601 c0-8.759,0.394-12.421,5.621-13.466l4.839-0.654c0.914-0.131,1.045-1.308,1.045-2.353c0-0.916-0.262-1.699-0.653-1.699 c-1.699,0-4.183,0.129-9.021,0.129c-4.445,0-9.019-0.129-13.335-0.129c-0.783,0-1.176,0-1.437,1.045 c-0.785,2.746-1.57,5.23-3.662,9.935c-3.006,7.06-26.017,51.249-27.193,53.472c-2.222-4.576-13.596-26.802-16.079-31.9 c-5.624-11.243-11.245-23.01-13.335-29.414c-0.394-0.917-1.047-3.138-1.832-3.138c-1.959,0-7.189,0.129-10.72,0.129 c-5.622,0-9.673-0.129-12.159-0.129c-1.959,0-2.353,0.129-2.353,2.09c0,1.83,0.394,1.961,3.4,2.224 c8.236,0.654,9.544,4.445,9.544,10.589c0,3.4-1.83,41.444-2.746,50.594c-0.914,9.284-1.961,12.553-10.458,13.467 c-2.746,0.262-2.877,0.391-2.877,2.092c0,2.221,0.394,2.221,1.699,2.221c2.615,0,15.296-0.391,18.305-0.391 c7.712,0,12.55,0.391,14.512,0.391c1.176,0,1.308-0.653,1.308-2.221c0-1.961-0.263-1.961-2.747-2.092 c-10.589-0.392-11.111-1.308-11.111-25.754c0-5.361,0.522-31.378,0.26-37.262c1.57,5.884,2.746,7.976,10.851,24.58 c5.49,10.98,15.034,30.331,18.043,38.567c1.176,3.007,1.308,3.4,1.959,3.4c0.916,0,3.922-1.048,5.099-1.308 c0.917-0.263,1.179-0.525,1.57-1.701c1.83-5.622,6.798-15.296,10.589-22.879C126.584,311.404,128.414,307.873,130.769,302.12z"/> <path fill="#FFFFFF" d="M204.621,329.444c-0.785-0.26-0.917-0.522-1.57-3.269c-1.83-7.189-9.15-14.118-19.741-14.118 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.142,26.146c13.727,0,24.971-8.891,24.971-10.458 c0-0.262,0-0.262-0.262-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.557,5.23c-15.69,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.529-0.654,3.529-2.744C205.534,330.36,205.534,329.707,204.621,329.444z M185.924,332.844c-6.538,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C190.5,330.621,190.109,331.799,185.924,332.844z"/> <path fill="#FFFFFF" d="M222.917,251.944c0-1.568-0.263-1.831-2.222-1.961c-4.707-0.26-7.322-0.392-8.107-3.792 c-0.653-2.615-0.653-16.473-0.653-20.395c0-12.55,0.131-15.951,0.262-18.694c0.26-3.009,0.391-6.146,0.654-9.153 c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.615,0.394-3.922,0.916c-4.968,1.961-9.936,3.922-14.774,6.013 c-1.83,0.785-2.09,0.785-2.09,2.484c0,1.701,0.392,1.701,1.961,1.961c6.667,0.917,6.667,2.615,6.667,15.69 c0,23.139-0.131,25.101-7.714,26.277c-2.222,0.394-2.353,0.394-2.353,2.353c0,1.438,0.391,1.833,1.307,1.833 c2.875,0,7.452-0.263,15.95-0.263c7.189,0,12.55,0.263,14.643,0.263C222.525,254.168,222.917,254.037,222.917,251.944z"/> <path fill="#FFFFFF" d="M278.216,364.613c-4.839-0.131-7.454-0.522-7.714-8.89c-0.131-3.007,0-11.243,0-21.312 c0-8.236,0-22.094-15.034-22.094c-5.884,0-13.729,3.008-25.103,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.392-0.914-1.177-0.914c-0.391,0-1.438,0-2.224,0.26c-1.699,0.523-15.165,6.275-16.341,6.798 c-2.221,0.916-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.221,1.83c6.669,0.262,6.669,1.307,6.669,15.559 c0,7.583-0.263,16.473-0.522,19.088c-0.523,4.576-2.877,6.275-6.275,6.798c-2.224,0.262-2.355,0.391-2.355,2.353 c0,1.179,0.131,1.83,1.439,1.83c2.484,0,5.099-0.26,12.682-0.26c5.49,0,13.989,0.26,16.081,0.26c0.783,0,1.437-0.129,1.437-2.222 c0-1.438-0.129-1.699-1.437-1.83c-4.838-0.522-7.06-0.653-7.976-3.531c-0.783-2.353-0.783-12.288-0.783-15.819 c0-8.89,0-19.087,0.522-19.87c0.522-0.917,8.759-3.923,15.166-3.923c2.744,0,6.275,0.785,8.627,3.138 c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.917,20.133c-0.783,2.877-2.875,3.529-5.621,4.054 c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.568,1.047,1.568c2.484,0,10.589-0.26,14.903-0.26 c6.406,0,11.245,0.26,13.858,0.26c1.701,0,1.961-0.392,1.961-2.09C280.96,364.745,280.569,364.613,278.216,364.613z"/> <path fill="#FFFFFF" d="M621.937,44.931l-1.036-0.154c-0.799-0.127-1.199-0.38-1.199-0.912c0-0.462,0.441-1.05,1.398-1.05 c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.919-0.923-2.156-1.875-4.138-1.875c-2.42,0-3.789,1.357-3.789,3.303 c0,1.737,1.342,2.549,2.993,2.787l1.076,0.153c0.838,0.113,1.636,0.308,1.636,1.009c0,0.826-1.038,1.147-1.729,1.147 c-1.011,0-2.088-0.448-2.714-1.247l-1.783,1.192c0.96,1.174,2.088,2.002,4.285,2.002c2.685,0,4.269-1.359,4.269-3.445 C625.396,46.077,624.384,45.295,621.937,44.931z"/> <rect x="626.764" y="41.107" fill="#FFFFFF" width="2.342" height="9.886"/> <rect x="638.402" y="41.107" fill="#FFFFFF" width="2.342" height="9.886"/> <polygon fill="#FFFFFF" points="630.13,43.053 632.577,43.053 632.577,50.993 634.943,50.993 634.943,43.053 637.378,43.053 637.378,41.107 630.13,41.107 "/> <path fill="#FFFFFF" d="M624.559,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C623.653,80.666,624.559,79.993,624.559,78.312z M620.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C622.217,78.566,622.151,79.629,620.808,79.629z"/> <polygon fill="#FFFFFF" points="613.558,47.127 610.221,41.107 607.918,41.107 607.918,50.993 610.181,50.993 610.181,45.084 613.506,50.993 615.807,50.993 615.807,41.107 613.558,41.107 "/> <path fill="#FFFFFF" d="M563.153,49.27c-1.012,0-2.091-0.448-2.715-1.247l-1.782,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.687,0,4.271-1.359,4.271-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.038-0.154c-0.796-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.397-1.05c1.011,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.993,2.787l1.079,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C564.881,48.948,563.843,49.27,563.153,49.27z"/> <polygon fill="#FFFFFF" points="610.273,80.695 614.568,80.695 614.568,78.817 610.273,78.817 610.273,77.025 614.876,77.025 614.876,75.107 607.932,75.107 607.932,84.993 615.288,84.993 615.288,83.045 610.273,83.045 "/> <path fill="#FFFFFF" d="M572.304,49.27c-1.012,0-2.091-0.448-2.715-1.247l-1.782,1.192c0.956,1.174,2.088,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.397-1.05c1.011,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.993,2.787l1.079,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C574.031,48.948,572.993,49.27,572.304,49.27z"/> <polygon fill="#FFFFFF" points="566.743,77.025 566.743,75.107 559.801,75.107 559.801,84.993 567.154,84.993 567.154,83.045 562.142,83.045 562.142,80.695 566.438,80.695 566.438,78.817 562.142,78.817 562.142,77.025 "/> <polygon fill="#FFFFFF" points="658.736,41.107 658.736,47.127 655.4,41.107 653.098,41.107 653.098,50.993 655.359,50.993 655.359,45.084 658.685,50.993 660.985,50.993 660.985,41.107 "/> <path fill="#FFFFFF" d="M646.874,40.8c-3.391,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C651.636,43.768,650.292,40.8,646.874,40.8z M646.915,49.186c-1.69,0-2.368-1.624-2.368-3.206 c0-1.33,0.545-3.108,2.327-3.108c1.663,0,2.407,1.427,2.407,3.219C649.281,47.478,648.656,49.186,646.915,49.186z"/> <path fill="#FFFFFF" d="M556.41,95.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C555.559,98.143,556.41,96.882,556.41,95.229z"/> <path fill="#FFFFFF" d="M554.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C549.719,49.382,551.727,51.287,554.215,51.287z"/> <path fill="#FFFFFF" d="M560.973,92.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C564.164,95.944,563.858,92.345,560.973,92.345z M560.973,100.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C562.169,98.841,561.983,100.466,560.973,100.466z"/> <path fill="#FFFFFF" d="M567.369,93.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H568.3C568.127,92.878,567.955,93.24,567.369,93.564z"/> <path fill="#FFFFFF" d="M576.545,82.737l-1.849-0.993c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249 c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25C574.457,85.287,575.801,84.11,576.545,82.737z"/> <path fill="#FFFFFF" d="M578.834,95.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C577.983,98.143,578.834,96.882,578.834,95.229z"/> <path fill="#FFFFFF" d="M553.311,75.107h-3.219v9.885h3.696c3.739,0,4.71-2.59,4.71-4.943 C558.498,76.802,556.941,75.107,553.311,75.107z M553.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C556.143,82.262,555.238,83.004,553.218,83.004z"/> <polygon fill="#FFFFFF" points="555.344,58.107 553.455,58.107 549.413,67.993 551.302,67.993 "/> <path fill="#FFFFFF" d="M601.082,41.107l-3.483,9.886h2.499l0.467-1.583h3.458l0.466,1.583h2.5l-3.459-9.886H601.082z M601.109,47.631l1.158-4.171l1.224,4.171H601.109z"/> <path fill="#FFFFFF" d="M597.133,44.313c0-2.828-2.208-3.206-3.604-3.206h-4.443v9.886h2.368v-3.529h1.464l1.875,3.529h2.579 l-2.167-3.95C596.229,46.666,597.133,45.994,597.133,44.313z M593.382,45.629h-1.941v-2.687h1.955c0.411,0,1.397,0.027,1.397,1.316 C594.793,44.566,594.726,45.629,593.382,45.629z"/> <path fill="#FFFFFF" d="M604.208,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C606.577,80.484,605.113,79.993,604.208,79.91z M600.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M602.388,83.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C604.194,83.158,603.146,83.199,602.388,83.199z"/> <path fill="#FFFFFF" d="M591.521,82.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L591.521,82.025z"/> <polygon fill="#FFFFFF" points="588.063,41.107 580.813,41.107 580.813,43.053 583.261,43.053 583.261,50.993 585.63,50.993 585.63,43.053 588.063,43.053 "/> <polygon fill="#FFFFFF" points="580.069,80.695 584.365,80.695 584.365,78.817 580.069,78.817 580.069,77.025 584.67,77.025 584.67,75.107 577.728,75.107 577.728,84.993 585.084,84.993 585.084,83.045 580.069,83.045 "/>',
                    title: "Raining Men",
                    date: "december, twelve",
                    img: "data/poster/rain",
                    itemcolor: "#29a5c0",
                    bgcolor: "#ddd",
                    preload: ["contents/rainingmen/rain.png"],
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "ripples",
                    classfn: RippleGreen,
                    svg: '<path fill="#FFFFFF" d="M557.498,79.05c0-3.248-1.557-4.942-5.188-4.942h-3.219v9.885h3.696 C556.527,83.993,557.498,81.402,557.498,79.05z M552.218,82.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,81.262,554.238,82.004,552.218,82.004z"/> <path fill="#FFFFFF" d="M631.152,47.023l-1.77-6.916h-3.432v9.886h2.287c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.035 l1.955-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432L631.152,47.023z"/> <polygon fill="#FFFFFF" points="639.758,45.693 644.053,45.693 644.053,43.817 639.758,43.817 639.758,42.026 644.358,42.026 644.358,40.107 637.416,40.107 637.416,49.993 644.771,49.993 644.771,48.045 639.758,48.045 "/> <path fill="#FFFFFF" d="M551.34,97.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V94.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C553.177,95.77,552.405,96.568,551.34,97.547z"/> <polygon fill="#FFFFFF" points="620.432,45.693 624.728,45.693 624.728,43.817 620.432,43.817 620.432,42.026 625.033,42.026 625.033,40.107 618.091,40.107 618.091,49.993 625.445,49.993 625.445,48.045 620.432,48.045 "/> <path fill="#FFFFFF" d="M564.879,94.369c1.292-0.027,1.412-0.084,1.902-0.308v6.931h2.143v-9.494H567.3 c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351V94.369z"/> <polygon fill="#FFFFFF" points="650.902,46.127 647.564,40.107 645.264,40.107 645.264,49.993 647.523,49.993 647.523,44.084 650.849,49.993 653.149,49.993 653.149,40.107 650.902,40.107 "/> <path fill="#FFFFFF" d="M595.893,48.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,47.948,596.585,48.27,595.893,48.27z"/> <path fill="#FFFFFF" d="M559.291,49.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,42.46l1.224,4.171h-2.382L561.461,42.46z"/> <path fill="#FFFFFF" d="M553.215,50.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,48.382,550.727,50.287,553.215,50.287z"/> <polygon fill="#FFFFFF" points="653.428,40.107 653.428,42.053 655.875,42.053 655.875,49.993 658.243,49.993 658.243,42.053 660.678,42.053 660.678,40.107 "/> <polygon fill="#FFFFFF" points="568.643,44.084 571.969,49.993 574.269,49.993 574.269,40.107 572.021,40.107 572.021,46.127 568.682,40.107 566.381,40.107 566.381,49.993 568.643,49.993 "/> <path fill="#FFFFFF" d="M559.894,101.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C556.767,99.242,557.765,101.203,559.894,101.203z M559.945,93.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C558.748,94.482,559.002,93.096,559.945,93.096z"/> <polygon fill="#FFFFFF" points="554.344,57.107 552.455,57.107 548.413,66.993 550.302,66.993 "/> <path fill="#FFFFFF" d="M567.005,79.036c0,3.346,2.009,5.25,4.497,5.25c1.955,0,3.299-1.176,4.043-2.549l-1.849-0.993 c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249c0-1.654,0.799-3.138,2.314-3.138 c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562C568.895,73.8,567.005,76.109,567.005,79.036z" /> <path fill="#FFFFFF" d="M573.765,97.547c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792 c-0.373,0-3.511,0.054-3.511,0.054c2.633-2.113,3.483-3.373,3.483-5.026c0-1.833-1.21-2.898-3.059-2.898 c-1.796,0-3.167,0.995-3.167,3.235V94.9l2.143,0.127c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163 c0.916,0,0.916,0.925,0.916,1.303C575.599,95.77,574.828,96.568,573.765,97.547z"/> <polygon fill="#FFFFFF" points="584.084,82.045 579.069,82.045 579.069,79.695 583.365,79.695 583.365,77.817 579.069,77.817 579.069,76.025 583.67,76.025 583.67,74.107 576.728,74.107 576.728,83.993 584.084,83.993 "/> <polygon fill="#FFFFFF" points="611.109,48.045 606.095,48.045 606.095,45.693 610.391,45.693 610.391,43.817 606.095,43.817 606.095,42.026 610.696,42.026 610.696,40.107 603.754,40.107 603.754,49.993 611.109,49.993 "/> <path fill="#FFFFFF" d="M603.208,78.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C605.577,79.484,604.113,78.993,603.208,78.91z M599.749,75.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V75.955z M601.388,82.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C603.194,82.158,602.146,82.199,601.388,82.199z"/> <path fill="#FFFFFF" d="M595.695,83.993v-9.885h-3.432l-1.743,6.917l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393 l1.943,7.393h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393H595.695z"/> <path fill="#FFFFFF" d="M585.08,49.993l0.466-1.583h3.458l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886H585.08z M587.249,42.46l1.224,4.171h-2.382L587.249,42.46z"/> <polygon fill="#FFFFFF" points="580.053,49.993 583.312,40.107 580.811,40.107 578.884,47.136 576.94,40.107 574.44,40.107 577.66,49.993 "/> <polygon fill="#FFFFFF" points="566.154,82.045 561.142,82.045 561.142,79.695 565.438,79.695 565.438,77.817 561.142,77.817 561.142,76.025 565.743,76.025 565.743,74.107 558.801,74.107 558.801,83.993 566.154,83.993 "/> <polygon fill="#FFFFFF" points="609.273,79.695 613.568,79.695 613.568,77.817 609.273,77.817 609.273,76.025 613.876,76.025 613.876,74.107 606.932,74.107 606.932,83.993 614.288,83.993 614.288,82.045 609.273,82.045 "/> <polygon fill="#FFFFFF" points="617.625,47.905 613.955,47.905 613.955,40.107 611.614,40.107 611.614,49.993 617.625,49.993 "/> <path fill="#FFFFFF" d="M623.559,77.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C622.653,79.666,623.559,78.993,623.559,77.312z M619.808,78.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,77.566,621.151,78.629,619.808,78.629z"/> <path fill="#FFFFFF" d="M78.091,831.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C115.757,847.859,101.178,831.021,78.091,831.021z M78.091,939.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478 c19.615,0,22.218,30.029,22.218,50.859C100.655,904.274,99.441,939.163,78.091,939.163z"/> <path fill="#FFFFFF" d="M161.052,831.021c-28.12,0-36.104,22.219-36.104,35.932c0,16.143,9.72,31.245,27.078,31.245 c9.2,0,18.574-4.688,22.044-8.332c0.694-0.868,1.043-3.992,1.043-4.861c0-0.694-0.349-0.866-0.869-0.866 c-0.869,0-1.041,0.347-1.909,1.387c-1.389,1.909-6.597,3.993-11.804,3.993c-15.622,0-21.003-14.754-21.003-26.731 c0-16.837,8.331-25.689,18.92-25.689c6.25,0,12.324,3.471,15.796,8.506c3.298,4.859,6.771,12.496,6.771,28.987 c0,35.931-16.317,51.033-29.335,59.019c-6.424,3.99-10.068,5.033-14.061,5.033c-3.298,0-7.812-1.215-9.895-1.215 c-1.387,0-3.298,0.521-3.298,2.604c0,2.95,2.258,6.422,5.208,6.422c15.45,0,66.31-12.672,66.31-72.037 C195.943,845.775,182.23,831.021,161.052,831.021z"/> <path fill="#FFFFFF" d="M41.736,253.297c2.224,0,13.466-0.26,18.174-0.26c11.634,0,15.034,0.26,16.995,0.26 c1.176,0,1.439-0.523,1.439-2.222c0-1.308-0.263-1.699-1.179-1.699c-8.105-0.654-9.935-1.179-10.849-6.146 c-0.654-3.529-0.525-21.309-0.525-26.016c2.355,0.131,7.583,0.394,12.944-0.131c13.598,28.894,24.84,37.261,40.006,37.261 c1.83,0,4.967-0.131,7.714-1.047c1.045-0.26,1.176-0.783,1.176-2.09c0-1.179-0.131-1.701-0.917-1.701 c-2.744-0.129-5.359-0.26-9.672-2.615c-11.637-6.667-23.402-30.068-24.972-33.074c10.329-3.922,16.604-11.245,16.604-22.357 c0-22.225-23.924-22.225-27.716-22.225c-3.531,0-20.395,0.785-24.317,0.785c-1.831,0.129-11.243,0-13.335,0 c-1.83,0-1.961,0.129-1.961,2.09c0,1.57,0.131,1.701,1.308,1.83c4.968,0.394,7.32,0.525,8.368,3.663 c1.176,3.397,1.176,19.088,1.176,24.056c0,12.159,0,27.978-0.522,37.521c-0.131,3.92-0.654,8.89-7.845,9.804 c-2.746,0.394-3.138,0.394-3.138,2.224C40.691,252.514,40.954,253.297,41.736,253.297z M66.185,180.085 c0.131-5.099,0.131-5.884,8.368-5.884c8.105,0,13.073,2.875,15.819,7.845c2.222,3.92,2.744,8.236,2.744,12.027 c0,16.342-10.98,18.041-19.871,18.041c-3.531,0-5.361-0.26-7.454-0.654C65.923,206.493,66.054,184.399,66.185,180.085z"/> <path fill="#FFFFFF" d="M281.48,442.944c-0.785-0.26-0.916-0.522-1.568-3.269c-1.832-7.188-9.152-14.118-19.741-14.118 c-13.207,0-27.324,11.505-27.324,31.769c0,10.327,4.313,26.146,23.139,26.146c13.729,0,24.972-8.89,24.972-10.458 c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.118,5.23-15.557,5.23c-15.688,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.531-0.654,3.531-2.744C282.396,443.86,282.396,443.206,281.48,442.944z M262.786,446.344c-6.538,1.699-10.329,2.615-16.998,3.792c0.131-13.989,5.493-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.765C267.36,444.12,266.969,445.299,262.786,446.344z"/> <path fill="#FFFFFF" d="M306.047,253.168c2.615,0,8.368-0.131,14.514-0.131c7.058,0,12.942,0.131,16.733,0.131 c1.57,0,1.961-0.131,1.961-2.224c0-1.439-0.26-1.699-1.567-1.699c-5.23-0.522-7.845-0.654-9.021-2.746 c-0.916-1.439-1.439-2.353-1.439-36.475c0-9.415,0.131-19.873,0.131-21.834c0-9.152,0.131-14.774,0.654-21.309 c0.131-1.308,0.522-3.531,0.522-4.97c0-0.914-0.522-1.437-1.308-1.437c-3.006,0-9.021,1.961-19.61,5.359 c-2.353,0.654-2.615,0.785-2.615,2.484c0,1.438,0.262,1.438,1.308,1.57c5.099,0.654,6.668,0.785,7.451,3.923 c0.916,3.137,0.916,11.111,0.916,29.808c0,16.602-0.131,28.107-0.653,36.997c-0.263,5.621-1.83,7.714-7.191,8.499 c-2.09,0.263-2.353,0.263-2.353,1.961S304.871,253.168,306.047,253.168z"/> <path fill="#FFFFFF" d="M227.364,442.944c-0.783-0.26-0.914-0.522-1.568-3.269c-1.83-7.188-9.152-14.118-19.741-14.118 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.313,26.146,23.141,26.146c13.727,0,24.97-8.89,24.97-10.458 c0-0.262,0-0.262-0.26-1.308l-0.525-1.961h-0.783c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.531-0.654,3.531-2.744C228.28,443.86,228.28,443.206,227.364,442.944z M208.669,446.344c-6.538,1.699-10.329,2.615-16.995,3.792c0.129-13.989,5.49-19.088,10.849-19.088 c6.406,0,10.722,7.191,10.722,11.765C213.246,444.12,212.852,445.299,208.669,446.344z"/> <path fill="#FFFFFF" d="M387.753,213.945c-0.785-0.26-0.914-0.523-1.568-3.267c-1.83-7.191-9.152-14.12-19.741-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.14,26.146c13.729,0,24.972-8.89,24.972-10.458 c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.783c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.531-0.654,3.531-2.744C388.669,214.861,388.669,214.207,387.753,213.945z M369.059,217.345c-6.538,1.699-10.329,2.615-16.995,3.792c0.129-13.989,5.489-19.088,10.849-19.088 c6.406,0,10.723,7.191,10.723,11.768C373.635,215.121,373.241,216.3,369.059,217.345z"/> <path fill="#FFFFFF" d="M495.722,196.558c-18.172,0-32.946,10.98-32.946,29.286c0,18.825,13.336,28.629,28.895,28.629 c17.518,0,32.945-11.374,32.945-29.937C524.615,210.807,515.071,196.558,495.722,196.558z M495.853,248.852 c-9.413,0-19.088-9.413-19.088-27.715c0-12.55,6.929-18.957,14.774-18.957c10.851,0,19.087,12.027,19.087,27.324 C510.626,242.576,503.958,248.852,495.853,248.852z"/> <path fill="#FFFFFF" d="M597.035,249.114c-4.837-0.131-7.451-0.522-7.714-8.89c-0.132-3.006,0-11.243,0-21.309 c0-8.236,0-22.096-15.034-22.096c-5.884,0-13.729,3.008-25.103,8.63c0-1.308,0.653-6.538,0.653-8.499 c0-0.785-0.392-0.914-1.176-0.914c-0.392,0-1.439,0-2.222,0.26c-1.701,0.522-15.165,6.275-16.344,6.797 c-2.222,0.917-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.224,1.83c6.666,0.262,6.666,1.307,6.666,15.559 c0,7.583-0.26,16.473-0.522,19.088c-0.522,4.576-2.875,6.275-6.275,6.798c-2.224,0.262-2.353,0.394-2.353,2.353 c0,1.178,0.129,1.833,1.437,1.833c2.484,0,5.099-0.263,12.682-0.263c5.492,0,13.989,0.263,16.082,0.263 c0.784,0,1.438-0.131,1.438-2.224c0-1.439-0.132-1.699-1.438-1.831c-4.837-0.522-7.061-0.654-7.975-3.531 c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.522-19.87c0.522-0.917,8.76-3.923,15.166-3.923 c2.746,0,6.274,0.785,8.627,3.138c3.27,3.4,3.27,10.198,3.27,15.95c0,4.705,0,16.473-0.914,20.133 c-0.785,2.877-2.878,3.531-5.622,4.054c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.57,1.045,1.57 c2.484,0,10.589-0.263,14.905-0.263c6.404,0,11.243,0.263,13.858,0.263c1.698,0,1.961-0.394,1.961-2.093 C599.781,249.245,599.388,249.114,597.035,249.114z"/> <path fill="#FFFFFF" d="M418.468,219.697c-8.891-3.922-11.768-6.535-11.768-10.72c0-1.961,0.916-7.451,8.63-7.451 c6.537,0,10.458,3.66,13.204,9.675c0.785,1.568,1.045,1.699,1.698,1.699c3.009,0,3.138-0.522,3.138-1.57 c0-1.959-0.782-9.413-1.045-11.243c-0.263-2.484-0.263-2.744-1.176-2.744c-0.654,0-1.699,0.26-2.093,0.26 c-0.653,0-7.061-1.045-11.634-1.045c-17.912,0-22.097,10.327-22.097,16.21c0,9.284,8.236,13.204,14.251,16.081 c10.329,4.837,14.381,7.452,14.381,12.419c0,1.961-0.914,8.236-9.544,8.236c-2.484,0-12.551-0.26-16.079-12.028 c-0.654-1.961-0.785-2.353-1.701-2.353c-1.177,0-3.007,0.131-3.007,1.57c0,1.699,0.522,4.183,0.522,7.32 c0,8.368,0,9.021,0.917,9.021c0.784,0,1.436-0.131,2.221-0.131c1.048,0,3.27,0.392,6.016,0.785 c2.743,0.391,6.144,0.782,9.544,0.782c13.072,0,23.532-5.49,23.532-16.602C436.379,227.673,427.227,223.62,418.468,219.697z"/> <path fill="#FFFFFF" d="M125.801,443.86c1.438-0.262,1.438-1.176,1.438-3.006c0-0.916-0.522-0.916-1.047-0.916 c-5.228,0-10.327,0.262-15.557,0.262c-9.152,0-14.905-0.262-18.042-0.262c-1.045,0-1.308,0.785-1.308,2.484 c0,1.57,0.262,1.83,1.179,1.961c13.333,0.654,13.727,0.654,13.727,15.557c0,8.761-0.394,12.159-1.308,13.989 c-1.83,3.4-11.114,3.791-14.774,3.791c-7.451,0-15.034-1.699-21.571-6.404c-9.413-6.669-13.204-18.043-13.204-31.378 c0-18.565,9.281-35.952,33.861-35.952c7.583,0,15.95,1.83,19.61,4.836c1.437,1.176,2.615,2.747,4.183,9.413 c0.654,2.483,0.654,2.746,1.83,2.746c3.138,0,3.138-0.654,3.138-1.57c0-0.522-0.522-6.798-0.654-8.105 c-0.129-3.66-0.129-6.929-0.129-11.111c0-1.179-0.131-1.83-1.701-1.83c-0.522,0-0.914,0.26-1.437,0.391 c-0.394,0.26-0.785,0.522-1.438,0.522c-1.57,0-4.185-0.391-7.583-0.914c-3.269-0.394-7.323-0.785-12.028-0.785 c-11.768,0-23.273,2.615-33.47,8.368c-12.157,6.929-19.61,20.787-19.61,36.737c0,6.667,1.57,24.187,17.52,33.73 c6.929,4.052,15.819,7.189,30.984,7.189c11.374,0,19.348-1.438,29.285-3.269c3.006-0.522,3.006-0.914,3.006-1.437 c0-1.308-0.916-2.877-0.916-15.296c0-2.615,0.263-11.374,0.394-13.466C120.44,447.782,120.702,444.905,125.801,443.86z"/> <path fill="#FFFFFF" d="M357.691,478.113c-4.839-0.131-7.452-0.522-7.714-8.89c-0.131-3.006,0-11.243,0-21.311 c0-8.237,0-22.094-15.034-22.094c-5.884,0-13.729,3.009-25.103,8.63c0-1.308,0.653-6.538,0.653-8.499 c0-0.785-0.391-0.916-1.176-0.916c-0.391,0-1.438,0-2.221,0.263c-1.701,0.522-15.167,6.275-16.344,6.797 c-2.222,0.916-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.221,1.83c6.668,0.262,6.668,1.307,6.668,15.559 c0,7.583-0.262,16.473-0.522,19.088c-0.522,4.576-2.877,6.275-6.275,6.798c-2.224,0.262-2.355,0.391-2.355,2.353 c0,1.176,0.131,1.83,1.439,1.83c2.484,0,5.099-0.26,12.681-0.26c5.493,0,13.989,0.26,16.082,0.26c0.785,0,1.438-0.129,1.438-2.222 c0-1.438-0.131-1.699-1.438-1.83c-4.839-0.522-7.06-0.653-7.976-3.531c-0.783-2.353-0.783-12.288-0.783-15.819 c0-8.89,0-19.088,0.522-19.87c0.522-0.917,8.759-3.923,15.165-3.923c2.747,0,6.275,0.785,8.628,3.138 c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.914,20.133c-0.785,2.875-2.877,3.529-5.624,4.054 c-1.959,0.26-1.959,0.392-1.959,2.353c0,1.176,0.129,1.568,1.045,1.568c2.484,0,10.589-0.26,14.903-0.26 c6.406,0,11.245,0.26,13.86,0.26c1.698,0,1.959-0.392,1.959-2.09C360.436,478.244,360.044,478.113,357.691,478.113z"/> <path fill="#FFFFFF" d="M169.971,208.586c4.576,0.131,6.275,0.26,7.06,4.183c0.26,1.438,0.392,8.368,0.392,20.264 c0,8.368,0,40.137-0.785,45.235c-0.26,1.699-0.654,5.099-6.144,6.015c-2.353,0.391-2.353,0.391-2.353,2.09 c0,1.438,0.131,1.961,1.568,1.961c2.746,0,10.852-0.26,16.082-0.26s9.935,0.26,13.466,0.26c1.567,0,1.83-0.26,1.83-2.092 c0-1.83,0-2.353-3.006-2.353c-7.454,0-8.236-1.83-8.368-15.557v-15.819c2.744,0.654,6.275,1.437,10.98,1.437 c17.651,0,33.599-12.028,33.599-30.984c0-15.296-10.327-26.408-23.271-26.408c-6.667,0-13.073,2.221-20.787,5.49 c0-0.914,0.522-5.359,0.522-6.406c0-0.654-0.391-0.914-1.83-0.914c-1.57,0-3.66,1.176-4.313,1.568 c-1.961,1.176-11.896,6.668-14.121,7.845c-1.83,1.176-2.092,1.308-2.092,3.006C168.401,208.455,168.664,208.455,169.971,208.586z M189.973,206.493c1.83-0.653,5.884-2.092,11.505-2.092c14.512,0,20.133,13.466,20.133,23.664c0,4.185-0.783,10.329-5.096,14.511 c-3.009,2.747-6.538,3.531-10.591,3.531c-8.89,0-13.989-2.746-16.342-4.054C189.582,230.157,189.582,216.822,189.973,206.493z"/> <path fill="#FFFFFF" d="M206.708,331.453c0-2.093,0-2.747-0.914-3.009c-0.785-0.26-0.917-0.522-1.57-3.269 c-1.83-7.189-9.15-14.118-19.742-14.118c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.142,26.146 c13.727,0,24.972-8.891,24.972-10.458c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.557,5.23 c-15.69,0-17.389-16.082-17.78-20.396c12.55-2.484,20.133-3.922,32.814-5.884C206.448,333.674,206.708,333.543,206.708,331.453z M187.098,331.844c-6.535,1.699-10.326,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C191.674,329.621,191.283,330.799,187.098,331.844z"/> <path fill="#FFFFFF" d="M163.049,436.669c3.006,0,4.314,1.699,5.884,4.054c1.045,1.699,1.437,1.83,1.83,1.83 c1.176,0,7.189-4.576,7.189-9.284c0-2.875-3.269-7.974-6.798-7.974c-1.83,0-4.708,1.83-7.06,3.269 c-3.922,2.484-8.236,5.49-12.027,8.236c0-1.83,0.653-10.329,0.653-11.374c0-0.785,0-1.308-1.699-1.308 c-1.57,0-1.961,0.263-5.492,2.353c-2.613,1.57-9.019,4.708-11.112,5.621c-2.353,1.176-2.615,1.176-2.615,2.615 c0,1.83,0.262,1.961,0.916,1.961c1.308,0,4.705,0.522,5.49,1.83c1.308,2.092,1.308,9.806,1.308,16.343 c0,10.589-0.392,14.512-0.654,16.602c-0.523,4.185-1.57,5.492-5.23,6.406c-2.093,0.522-2.222,0.522-2.222,2.484 c0,1.83,0.392,1.83,1.961,1.83c2.744,0,9.019-0.26,13.464-0.26c6.146,0,12.553,0.26,16.344,0.26c1.436,0,1.83-0.26,1.83-2.222 c0-1.307-0.131-1.961-1.308-1.961s-2.355-0.131-3.269-0.263c-8.367-0.654-8.627-0.654-8.627-25.754c0-1.568,0-9.544,0.522-10.458 C152.589,440.854,158.082,436.669,163.049,436.669z"/> <path fill="#FFFFFF" d="M238.991,284.283c-2.354,0.391-2.354,0.391-2.354,2.09c0,1.438,0.131,1.961,1.57,1.961 c2.746,0,10.851-0.26,16.082-0.26c5.228,0,9.935,0.26,13.464,0.26c1.57,0,1.83-0.26,1.83-2.092c0-1.83,0-2.353-3.006-2.353 c-7.451,0-8.236-1.83-8.368-15.557v-15.819c2.746,0.654,6.275,1.437,10.983,1.437c17.649,0,33.599-12.028,33.599-30.984 c0-15.296-10.329-26.408-23.271-26.408c-6.668,0-13.075,2.221-20.787,5.49c0-0.914,0.522-5.359,0.522-6.406 c0-0.654-0.394-0.914-1.83-0.914c-1.57,0-3.662,1.176-4.316,1.568c-1.961,1.176-11.896,6.668-14.118,7.845 c-1.832,1.176-2.092,1.308-2.092,3.006c0,1.308,0.26,1.308,1.568,1.439c4.576,0.131,6.277,0.26,7.06,4.183 c0.262,1.438,0.394,8.368,0.394,20.264c0,8.368,0,40.137-0.785,45.235C244.873,279.967,244.481,283.367,238.991,284.283z M258.47,206.493c1.83-0.653,5.884-2.092,11.505-2.092c14.512,0,20.133,13.466,20.133,23.664c0,4.185-0.785,10.329-5.099,14.511 c-3.006,2.747-6.538,3.531-10.589,3.531c-8.89,0-13.989-2.746-16.342-4.054C258.079,230.157,258.079,216.822,258.47,206.493z"/> <path fill="#FFFFFF" d="M152.98,180.085c3.792,0,7.845-3.922,7.845-7.714c0-3.66-4.185-7.452-7.454-7.452 c-3.267,0-7.843,3.66-7.843,7.843C145.529,176.423,149.452,180.085,152.98,180.085z"/> <path fill="#FFFFFF" d="M106.707,288.047c0.131-1.961,0.914-11.374,0.914-12.028c0-0.522,0-1.176-2.353-1.176 c-1.699,0-12.419,3.269-17.912,5.099c-2.09,0.785-2.353,0.785-2.353,2.744c0,1.308,0.262,1.439,1.438,1.439 c3.923,0.394,6.275,0.522,6.929,5.099c0.522,4.054,0.522,23.271,0.522,29.023c0,21.965-0.263,26.802-0.522,34.253 c-0.263,5.624-0.917,9.938-6.275,10.852c-2.224,0.262-2.484,0.394-2.484,2.615c0,1.177,0.26,1.699,1.699,1.699 c1.699,0,10.458-0.26,12.55-0.26c2.093,0,12.55,0.26,14.905,0.26c1.568,0,1.961-0.26,1.961-2.09c0-1.701-0.263-2.092-2.093-2.092 c-4.185-0.263-5.883-1.045-6.537-4.183c-0.523-2.877-0.654-8.89-0.785-35.955c3.531-1.307,9.152-3.397,14.514-3.397 c13.073,0,13.073,10.066,13.073,20.264c0,3.66-0.262,15.425-0.916,18.303c-0.654,3.006-1.961,4.183-5.359,4.836 c-2.353,0.394-2.615,0.522-2.615,2.355c0,1.567,0.131,1.959,1.568,1.959c1.701,0,10.069-0.26,12.03-0.26 c4.051,0,10.589,0.26,14.641,0.26c1.832,0,2.224-0.392,2.224-2.09c0-1.83-0.262-1.961-2.353-2.092 c-4.97-0.654-6.538-0.785-6.538-8.499v-9.281c0-16.864,0-18.694-0.522-21.963c-0.917-5.884-6.015-12.421-15.166-12.421 c-7.845,0-15.559,3.4-24.58,7.714C106.313,308.703,106.444,295.893,106.707,288.047z"/> <path fill="#FFFFFF" d="M136.899,253.168c2.877,0,7.454-0.263,15.95-0.263c7.191,0,12.55,0.263,14.643,0.263 c1.307,0,1.701-0.131,1.701-2.224c0-1.568-0.263-1.831-2.224-1.961c-4.708-0.26-7.32-0.392-8.105-3.792 c-0.654-2.615-0.654-16.473-0.654-20.395c0-12.55,0.131-15.951,0.26-18.694c0.262-3.009,0.394-6.146,0.654-9.153 c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.613,0.394-3.92,0.916c-4.97,1.961-9.938,3.922-14.773,6.013 c-1.83,0.785-2.093,0.785-2.093,2.484c0,1.701,0.394,1.701,1.961,1.961c6.668,0.917,6.668,2.615,6.668,15.69 c0,23.139-0.131,25.101-7.714,26.277c-2.224,0.394-2.354,0.394-2.354,2.353C135.592,252.774,135.985,253.168,136.899,253.168z"/> <path fill="#FFFFFF" d="M60.17,319.686h19.35c0.654,0,1.961,0,2.221-0.26c0.263-0.394,0.263-3.009,0.263-3.663 c0-2.875,0-3.269-0.785-3.269c-0.914-0.129-18.565,0-20.787,0c0-1.568,0.654-10.066,0.654-10.195c0-0.785-0.394-1.047-1.57-1.047 c-1.568,0-1.83,0.262-3.923,2.615c-3.529,3.923-8.236,7.845-12.941,11.243c-1.699,1.308-1.83,1.439-1.83,2.615 c0,1.439,0.131,1.701,0.522,1.83h6.275c-0.131,3.791-0.785,30.855-0.785,33.339c0,4.705,0,15.95,13.204,15.95 c7.976,0,16.344-4.185,18.959-5.493c2.353-1.176,2.353-1.308,2.353-3.006v-2.484h-1.308c-2.224,1.045-5.49,2.615-10.329,2.615 c-10.066,0-10.066-6.407-10.066-14.251c0-7.189,0-8.759,0.131-13.989C59.91,330.799,60.17,319.948,60.17,319.686z"/>',
                    title: "Ripples on the Green",
                    date: "december, twelve",
                    img: "data/poster/ripple",
                    itemcolor: "#80b23c",
                    bgcolor: "#8fc600",
                    preload: ["contents/ripple/ripple-mask.png", "contents/ripple/ripple1.png", "contents/ripple/ripple2.png"],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "flipclock",
                    classfn: FlipClock,
                    svg: '<path fill="#FFFFFF" d="M552.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C554.177,96.77,553.405,97.568,552.34,98.547z"/> <path fill="#FFFFFF" d="M635.663,40.8c-3.394,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C640.425,43.768,639.081,40.8,635.663,40.8z M635.701,49.186c-1.688,0-2.366-1.624-2.366-3.206 c0-1.33,0.546-3.108,2.328-3.108c1.663,0,2.407,1.427,2.407,3.219C638.07,47.478,637.445,49.186,635.701,49.186z"/> <path fill="#FFFFFF" d="M558.498,80.05c0-3.248-1.557-4.942-5.188-4.942h-3.219v9.885h3.696 C557.527,84.993,558.498,82.402,558.498,80.05z M553.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C556.143,82.262,555.238,83.004,553.218,83.004z"/> <path fill="#FFFFFF" d="M649.562,44.313c0-2.828-2.208-3.206-3.605-3.206h-4.44v9.886h2.365v-3.529h1.464l1.876,3.529h2.58 l-2.169-3.95C648.656,46.666,649.562,45.994,649.562,44.313z M645.811,45.629h-1.942v-2.687h1.956c0.412,0,1.396,0.027,1.396,1.316 C647.221,44.566,647.154,45.629,645.811,45.629z"/> <polygon fill="#FFFFFF" points="623.414,50.993 625.755,50.993 625.755,47.002 630.236,47.002 630.236,45.084 625.755,45.084 625.755,43.012 630.623,43.012 630.623,41.107 623.414,41.107 "/> <path fill="#FFFFFF" d="M571.557,49.27c-1.011,0-2.088-0.448-2.712-1.247l-1.782,1.192c0.956,1.174,2.087,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.077,0.153c0.84,0.113,1.638,0.308,1.638,1.009 C573.287,48.948,572.249,49.27,571.557,49.27z"/> <path fill="#FFFFFF" d="M562.78,49.27c-1.012,0-2.089-0.448-2.715-1.247l-1.78,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.457-2.841l-1.038-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.916-0.923-2.153-1.875-4.135-1.875 c-2.423,0-3.792,1.357-3.792,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.84,0.113,1.636,0.308,1.636,1.009 C564.508,48.948,563.472,49.27,562.78,49.27z"/> <polygon fill="#FFFFFF" points="567.154,83.045 562.142,83.045 562.142,80.695 566.438,80.695 566.438,78.817 562.142,78.817 562.142,77.025 566.743,77.025 566.743,75.107 559.801,75.107 559.801,84.993 567.154,84.993 "/> <polygon fill="#FFFFFF" points="555.344,58.107 553.455,58.107 549.413,67.993 551.302,67.993 "/> <path fill="#FFFFFF" d="M554.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C549.719,49.382,551.727,51.287,554.215,51.287z"/> <path fill="#FFFFFF" d="M657.516,41.107l-1.744,6.916l-1.77-6.916h-3.432v9.886h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393 h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886H657.516z"/> <path fill="#FFFFFF" d="M560.894,102.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C557.767,100.242,558.765,102.203,560.894,102.203z M560.945,94.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C559.748,95.482,560.002,94.096,560.945,94.096z"/> <polygon fill="#FFFFFF" points="581.771,50.993 584.139,50.993 584.139,43.053 586.572,43.053 586.572,41.107 579.325,41.107 579.325,43.053 581.771,43.053 "/> <path fill="#FFFFFF" d="M591.521,82.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L591.521,82.025z"/> <path fill="#FFFFFF" d="M618.36,49.27c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.088,2.002,4.284,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.198-0.38-1.198-0.912 c0-0.462,0.44-1.05,1.397-1.05c1.012,0,1.783,0.491,2.461,1.233l1.729-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.342,2.549,2.993,2.787l1.077,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C620.088,48.948,619.05,49.27,618.36,49.27z"/> <polygon fill="#FFFFFF" points="580.069,80.695 584.365,80.695 584.365,78.817 580.069,78.817 580.069,77.025 584.67,77.025 584.67,75.107 577.728,75.107 577.728,84.993 585.084,84.993 585.084,83.045 580.069,83.045 "/> <polygon fill="#FFFFFF" points="613.2,50.993 613.2,41.107 610.951,41.107 610.951,47.127 607.613,41.107 605.312,41.107 605.312,50.993 607.574,50.993 607.574,45.084 610.897,50.993 "/> <polygon fill="#FFFFFF" points="610.273,80.695 614.568,80.695 614.568,78.817 610.273,78.817 610.273,77.025 614.876,77.025 614.876,75.107 607.932,75.107 607.932,84.993 615.288,84.993 615.288,83.045 610.273,83.045 "/> <path fill="#FFFFFF" d="M602.254,50.993h2.5l-3.457-9.886h-2.447l-3.429,9.722l-2.077-3.786c1.022-0.378,1.927-1.05,1.927-2.73 c0-2.828-2.208-3.206-3.604-3.206h-4.442v9.886h2.368v-3.529h1.461l1.876,3.529h2.434h0.147h2.354l0.464-1.583h3.459L602.254,50.993 z M591.521,45.629h-1.941v-2.687h1.954c0.412,0,1.396,0.027,1.396,1.316C592.93,44.566,592.863,45.629,591.521,45.629z M598.874,47.631l1.158-4.171l1.224,4.171H598.874z"/> <path fill="#FFFFFF" d="M604.208,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C606.577,80.484,605.113,79.993,604.208,79.91z M600.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M602.388,83.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C604.194,83.158,603.146,83.199,602.388,83.199z"/> <path fill="#FFFFFF" d="M572.661,76.829c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25c1.955,0,3.299-1.176,4.043-2.549l-1.849-0.993 c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249C570.347,78.312,571.146,76.829,572.661,76.829z"/> <path fill="#FFFFFF" d="M578.834,95.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C577.983,98.143,578.834,96.882,578.834,95.229z"/> <path fill="#FFFFFF" d="M569.924,101.993v-9.494H568.3c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351 v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931H569.924z"/> <path fill="#FFFFFF" d="M624.559,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C623.653,80.666,624.559,79.993,624.559,78.312z M620.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C622.217,78.566,622.151,79.629,620.808,79.629z"/> <path fill="#FFFFFF" d="M79.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C116.757,848.859,102.178,832.021,79.091,832.021z M79.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C101.655,905.274,100.441,940.163,79.091,940.163z"/> <path fill="#FFFFFF" d="M170.383,883.75c11.283-5.382,23.956-11.458,23.956-27.601c0-23.259-26.037-24.128-31.244-24.128 c-17.706,0-34.542,9.547-34.542,28.815c0,15.448,10.066,20.829,22.39,27.426c-13.19,6.248-26.557,13.365-26.557,30.55 c0,17.706,15.276,27.078,34.022,27.078c26.383,0,40.27-14.928,40.27-31.939C198.678,897.463,187.568,891.907,170.383,883.75z M141.917,856.845c0-11.979,8.332-18.921,19.269-18.921c12.15,0,19.787,8.852,19.787,20.483c0,14.405-8.852,19.44-15.102,23.085 C153.2,875.765,141.917,870.731,141.917,856.845z M162.746,939.988c-16.663,0-24.127-12.844-24.127-25.343 c0-14.753,10.415-20.48,17.011-23.953c20.309,8.852,28.989,14.582,28.989,27.426C184.619,930.442,175.765,939.988,162.746,939.988z" /> <path fill="#FFFFFF" d="M396.333,250.245c-5.23-0.522-7.843-0.654-9.021-2.746c-0.914-1.439-1.437-2.353-1.437-36.475 c0-9.415,0.129-19.873,0.129-21.834c0-9.152,0.131-14.774,0.654-21.309c0.131-1.308,0.524-3.531,0.524-4.97 c0-0.914-0.524-1.437-1.308-1.437c-3.009,0-9.021,1.961-19.61,5.359c-2.354,0.654-2.615,0.785-2.615,2.484 c0,1.438,0.261,1.438,1.308,1.57c5.099,0.654,6.667,0.785,7.452,3.923c0.913,3.137,0.913,11.111,0.913,29.808 c0,16.602-0.129,28.107-0.653,36.997c-0.26,5.621-1.83,7.714-7.189,8.499c-2.092,0.263-2.354,0.263-2.354,1.961 s0.394,2.093,1.57,2.093c2.614,0,8.367-0.131,14.511-0.131c7.061,0,12.944,0.131,16.735,0.131c1.567,0,1.961-0.131,1.961-2.224 C397.902,250.505,397.641,250.245,396.333,250.245z"/> <path fill="#FFFFFF" d="M171.627,181.085c3.791,0,7.845-3.922,7.845-7.714c0-3.66-4.185-7.452-7.454-7.452 c-3.267,0-7.843,3.66-7.843,7.843C164.176,177.423,168.099,181.085,171.627,181.085z"/> <path fill="#FFFFFF" d="M489.144,205.926c3.138,0,8.496,0.654,12.941,4.051c1.701,1.176,2.224,1.439,3.138,1.439 c1.961,0,6.929-3.269,6.929-6.538c0-4.576-7.32-7.32-15.557-7.32c-18.957,0-32.686,15.034-32.686,32.552 c0,12.682,7.322,25.363,23.927,25.363c12.812,0,23.924-9.019,23.924-10.458c0-0.262-0.131-0.262-0.522-1.045l-1.047-2.484h-0.914 c-6.145,5.097-13.204,5.097-14.643,5.097c-14.903,0-17.39-15.426-17.39-22.617C477.244,219.915,477.638,205.926,489.144,205.926z"/> <path fill="#FFFFFF" d="M583.264,250.376c-2.354-0.525-3.792-1.179-7.452-4.97c-7.974-8.236-23.793-26.017-23.924-26.276 c2.875-2.093,14.773-10.329,17.258-11.896c3.66-2.355,6.144-3.663,9.936-4.708c1.307-0.392,1.698-0.523,1.698-2.093 c0-1.307-0.26-1.699-1.308-1.699c-2.483,0-7.32,0.26-14.511,0.26c-6.93,0-8.628-0.26-10.852-0.26c-1.699,0-2.353,0.392-2.353,2.353 c0,1.57,0,1.57,2.353,1.701c3.399,0.26,5.361,0.26,5.361,2.09c0,1.438-1.308,2.484-5.361,6.146 c-1.177,1.045-9.413,8.236-15.95,13.335c0.131-24.317,0.262-46.412,0.524-52.033l0.914-9.938c0-1.045-1.308-1.045-1.961-1.045 c-2.354,0-6.798,1.439-15.297,4.052c-4.705,1.438-5.228,1.57-5.228,3.662c0,1.437,0.392,1.699,1.437,1.699 c3.008,0.131,5.621,0.263,6.406,3.269c0.785,2.615,0.785,26.931,0.785,32.423c0,9.15-0.132,24.969-0.523,32.029 c-0.262,7.714-0.784,10.329-6.144,11.374c-2.615,0.394-2.877,1.176-2.877,1.961c0,1.307,0,2.355,1.83,2.355 s10.589-0.263,12.55-0.263c2.093,0,12.159,0.263,14.514,0.263c1.437,0,1.959-0.394,1.959-1.961c0-1.179-0.26-1.83-1.83-1.961 c-3.922-0.522-5.881-0.785-6.535-4.054c-0.524-2.615-0.524-13.858-0.524-17.649l3.399-2.484 c6.929,7.974,11.506,12.941,15.034,16.733c4.97,5.361,5.099,5.361,5.099,6.146c0,1.045-1.961,1.176-3.006,1.308 c-1.961,0.131-1.961,0.392-1.961,2.222c0,1.701,0.522,1.701,2.352,1.701c2.225,0,8.237-0.263,11.768-0.263 c6.667,0,10.721,0.263,11.766,0.263c1.179,0,1.701-0.394,1.701-1.833C584.311,251.29,584.18,250.505,583.264,250.376z"/> <path fill="#FFFFFF" d="M325.223,175.464c5.492,0,13.335,1.045,17.389,3.792c2.222,1.307,4.577,3.66,5.49,11.634 c0.394,3.137,0.917,3.531,3.008,3.531c1.437,0,1.962-0.262,1.962-1.438c0.26-4.314,0.392-6.929,1.045-12.29 c0.131-1.568,1.438-7.843,1.438-9.282c0-0.522-0.916-0.785-1.961-0.785c-0.916,0-2.224,0.917-3.009,0.785 c-7.583-0.785-15.165-1.83-22.879-1.83c-34.907,0-49.287,21.31-49.287,43.535c0,8.236,1.961,23.273,14.643,33.077 c9.675,7.583,22.094,9.413,32.292,9.413c9.544,0,20.264-1.436,24.709-3.269c1.047-0.391,1.176-0.914,2.354-4.968 c0.261-1.437,3.007-10.851,3.007-10.98c0-1.179-2.615-1.439-3.138-1.439c-0.394,0-0.785,0.131-1.308,0.914 c-4.054,6.275-9.284,14.251-24.578,14.251c-17.389,0-32.163-12.55-32.163-38.698C294.239,187.229,307.705,175.464,325.223,175.464z" /> <path fill="#FFFFFF" d="M430.713,197.558c-18.174,0-32.948,10.98-32.948,29.286c0,18.825,13.335,28.629,28.895,28.629 c17.518,0,32.945-11.374,32.945-29.937C459.604,211.807,450.061,197.558,430.713,197.558z M430.842,249.852 c-9.413,0-19.088-9.413-19.088-27.715c0-12.55,6.931-18.957,14.773-18.957c10.852,0,19.088,12.027,19.088,27.324 C445.615,243.576,438.949,249.852,430.842,249.852z"/> <path fill="#FFFFFF" d="M115.547,254.168c2.615,0,8.368-0.131,14.512-0.131c7.06,0,12.944,0.131,16.735,0.131 c1.57,0,1.961-0.131,1.961-2.224c0-1.439-0.262-1.699-1.57-1.699c-5.228-0.522-7.843-0.654-9.019-2.746 c-0.916-1.439-1.438-2.353-1.438-36.475c0-9.415,0.131-19.873,0.131-21.834c0-9.152,0.131-14.774,0.654-21.309 c0.131-1.308,0.522-3.531,0.522-4.97c0-0.914-0.522-1.437-1.307-1.437c-3.006,0-9.021,1.961-19.61,5.359 c-2.353,0.654-2.615,0.785-2.615,2.484c0,1.438,0.263,1.438,1.308,1.57c5.099,0.654,6.667,0.785,7.451,3.923 c0.917,3.137,0.917,11.111,0.917,29.808c0,16.602-0.131,28.107-0.654,36.997c-0.263,5.621-1.83,7.714-7.191,8.499 c-2.092,0.263-2.353,0.263-2.353,1.961S114.371,254.168,115.547,254.168z"/> <path fill="#FFFFFF" d="M227.054,197.558c-6.667,0-13.073,2.221-20.787,5.49c0-0.914,0.522-5.359,0.522-6.406 c0-0.654-0.391-0.914-1.83-0.914c-1.567,0-3.66,1.176-4.313,1.568c-1.961,1.176-11.896,6.668-14.12,7.845 c-1.83,1.176-2.09,1.308-2.09,3.006c0,1.308,0.26,1.308,1.567,1.439c4.577,0.131,6.275,0.26,7.06,4.183 c0.263,1.438,0.392,8.368,0.392,20.264c0,8.368,0,40.137-0.783,45.235c-0.262,1.699-0.654,5.099-6.146,6.015 c-2.353,0.391-2.353,0.391-2.353,2.09c0,1.438,0.131,1.961,1.57,1.961c2.744,0,10.849-0.26,16.079-0.26s9.938,0.26,13.466,0.26 c1.57,0,1.83-0.26,1.83-2.092c0-1.83,0-2.353-3.006-2.353c-7.452,0-8.236-1.83-8.368-15.557v-15.819 c2.746,0.654,6.275,1.437,10.982,1.437c17.649,0,33.6-12.028,33.6-30.984C250.327,208.67,239.998,197.558,227.054,197.558z M232.546,243.576c-3.006,2.747-6.538,3.531-10.591,3.531c-8.89,0-13.987-2.746-16.342-4.054c0-11.896,0-25.231,0.394-35.561 c1.83-0.653,5.881-2.092,11.502-2.092c14.514,0,20.135,13.466,20.135,23.664C237.645,233.25,236.86,239.394,232.546,243.576z"/> <path fill="#FFFFFF" d="M155.546,254.168c2.877,0,7.454-0.263,15.95-0.263c7.191,0,12.553,0.263,14.643,0.263 c1.308,0,1.701-0.131,1.701-2.224c0-1.568-0.262-1.831-2.224-1.961c-4.708-0.26-7.32-0.392-8.105-3.792 c-0.654-2.615-0.654-16.473-0.654-20.395c0-12.55,0.131-15.951,0.26-18.694c0.262-3.009,0.394-6.146,0.654-9.153 c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.613,0.394-3.92,0.916c-4.97,1.961-9.938,3.922-14.774,6.013 c-1.83,0.785-2.092,0.785-2.092,2.484c0,1.701,0.394,1.701,1.961,1.961c6.669,0.917,6.669,2.615,6.669,15.69 c0,23.139-0.131,25.101-7.714,26.277c-2.224,0.394-2.355,0.394-2.355,2.353C154.238,253.774,154.632,254.168,155.546,254.168z"/> <path fill="#FFFFFF" d="M61.693,253.905c2.355,0,14.12,0.263,16.735,0.263c1.83,0,1.961,0,1.961-2.093 c0-2.092-0.131-2.092-2.746-2.092c-8.368,0-9.804-2.353-10.458-12.682l-0.262-23.01c10.329,0,18.957,0,23.142,0.916 c4.183,1.045,4.445,3.007,5.228,8.759c0.131,1.439,0.131,1.57,2.355,1.57c1.568,0,1.83-0.394,1.83-1.57 c0-1.83-0.262-10.458-0.262-12.419c0-1.961,0.262-10.329,0.262-12.159c0-1.308-0.654-1.439-2.353-1.439 c-1.179,0-1.57,0.263-1.701,1.439c-1.176,9.021-1.308,9.804-29.023,9.675l0.131-24.318c0-5.753,0-6.538,1.045-7.452 c1.047-0.916,7.845-0.916,9.938-0.916c5.228,0,14.64,0.394,19.217,2.224c3.269,1.437,3.531,3.397,4.445,11.503 c0.263,2.092,0.654,2.224,2.615,2.224c1.83,0,2.353-0.263,2.484-2.875c0.394-6.146,1.57-16.735,1.57-17.521 c0-0.653-0.131-1.176-1.308-1.176c-5.099,0-19.088,0.523-45.758,0.523c-7.322,0-13.598-0.523-16.604-0.523 c-2.092,0-2.615,0.523-2.615,2.222c0,1.57,0.394,1.57,3.006,1.833c6.146,0.391,7.191,3.791,7.583,7.058 c0.394,4.316,0.525,9.021,0.525,21.18c0,12.028,0,27.586-0.654,35.692c-0.654,7.714-1.701,10.329-8.63,11.243 c-2.09,0.394-2.353,0.394-2.353,2.353c0,1.438,0.131,1.833,1.961,1.833C45.614,254.168,58.817,253.905,61.693,253.905z"/>',
                    title: "Flip Clock",
                    date: "december, twelve",
                    img: "data/poster/flipclock",
                    itemcolor: "#83ba3a",
                    bgcolor: "#111",
                    preload: ["contents/flipclock/flipbg.png", "contents/flipclock/flipbg2.png"],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie10"]
                }
            }, {
                poster: {
                    id: "blendhue",
                    classfn: BlendHue,
                    svg: '<polygon fill="#FFFFFF" points="580.771,49.993 583.139,49.993 583.139,42.053 585.572,42.053 585.572,40.107 578.325,40.107 578.325,42.053 580.771,42.053 "/> <polygon fill="#FFFFFF" points="565.743,76.025 565.743,74.107 558.801,74.107 558.801,83.993 566.154,83.993 566.154,82.045 561.142,82.045 561.142,79.695 565.438,79.695 565.438,77.817 561.142,77.817 561.142,76.025 "/> <polygon fill="#FFFFFF" points="622.414,49.993 624.755,49.993 624.755,46.002 629.236,46.002 629.236,44.084 624.755,44.084 624.755,42.012 629.623,42.012 629.623,40.107 622.414,40.107 "/> <path fill="#FFFFFF" d="M570.557,48.27c-1.011,0-2.088-0.448-2.712-1.247l-1.782,1.192c0.956,1.174,2.087,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.077,0.153c0.84,0.113,1.638,0.308,1.638,1.009 C572.287,47.948,571.249,48.27,570.557,48.27z"/> <path fill="#FFFFFF" d="M648.562,43.313c0-2.828-2.208-3.206-3.605-3.206h-4.44v9.886h2.365v-3.529h1.464l1.876,3.529h2.58 l-2.169-3.95C647.656,45.666,648.562,44.994,648.562,43.313z M644.811,44.629h-1.942v-2.687h1.956c0.412,0,1.396,0.027,1.396,1.316 C646.221,43.566,646.154,44.629,644.811,44.629z"/> <path fill="#FFFFFF" d="M656.516,40.107l-1.744,6.916l-1.77-6.916h-3.432v9.886h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393 h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886H656.516z"/> <path fill="#FFFFFF" d="M623.559,77.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C622.653,79.666,623.559,78.993,623.559,77.312z M619.808,78.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,77.566,621.151,78.629,619.808,78.629z"/> <path fill="#FFFFFF" d="M634.663,39.8c-3.394,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C639.425,42.768,638.081,39.8,634.663,39.8z M634.701,48.186c-1.688,0-2.366-1.624-2.366-3.206 c0-1.33,0.546-3.108,2.328-3.108c1.663,0,2.407,1.427,2.407,3.219C637.07,46.478,636.445,48.186,634.701,48.186z"/> <path fill="#FFFFFF" d="M561.78,48.27c-1.012,0-2.089-0.448-2.715-1.247l-1.78,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.457-2.841l-1.038-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.916-0.923-2.153-1.875-4.135-1.875 c-2.423,0-3.792,1.357-3.792,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.84,0.113,1.636,0.308,1.636,1.009 C563.508,47.948,562.472,48.27,561.78,48.27z"/> <path fill="#FFFFFF" d="M553.215,50.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,48.382,550.727,50.287,553.215,50.287z"/> <path fill="#FFFFFF" d="M559.973,91.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C563.164,94.944,562.858,91.345,559.973,91.345z M559.973,99.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C561.169,97.841,560.983,99.466,559.973,99.466z"/> <path fill="#FFFFFF" d="M590.521,81.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L590.521,81.025z"/> <polygon fill="#FFFFFF" points="579.069,79.695 583.365,79.695 583.365,77.817 579.069,77.817 579.069,76.025 583.67,76.025 583.67,74.107 576.728,74.107 576.728,83.993 584.084,83.993 584.084,82.045 579.069,82.045 "/> <polygon fill="#FFFFFF" points="612.2,49.993 612.2,40.107 609.951,40.107 609.951,46.127 606.613,40.107 604.312,40.107 604.312,49.993 606.574,49.993 606.574,44.084 609.897,49.993 "/> <path fill="#FFFFFF" d="M577.834,94.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V94.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C576.983,97.143,577.834,95.882,577.834,94.229z"/> <path fill="#FFFFFF" d="M617.36,48.27c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.088,2.002,4.284,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.198-0.38-1.198-0.912 c0-0.462,0.44-1.05,1.397-1.05c1.012,0,1.783,0.491,2.461,1.233l1.729-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.342,2.549,2.993,2.787l1.077,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C619.088,47.948,618.05,48.27,617.36,48.27z"/> <path fill="#FFFFFF" d="M603.208,78.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C605.577,79.484,604.113,78.993,603.208,78.91z M599.749,75.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V75.955z M601.388,82.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C603.194,82.158,602.146,82.199,601.388,82.199z"/> <path fill="#FFFFFF" d="M601.254,49.993h2.5l-3.457-9.886h-2.447l-3.429,9.722l-2.077-3.786c1.022-0.378,1.927-1.05,1.927-2.73 c0-2.828-2.208-3.206-3.604-3.206h-4.442v9.886h2.368v-3.529h1.461l1.876,3.529h2.434h0.147h2.354l0.464-1.583h3.459L601.254,49.993 z M590.521,44.629h-1.941v-2.687h1.954c0.412,0,1.396,0.027,1.396,1.316C591.93,43.566,591.863,44.629,590.521,44.629z M597.874,46.631l1.158-4.171l1.224,4.171H597.874z"/> <path fill="#FFFFFF" d="M555.41,94.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V94.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C554.559,97.143,555.41,95.882,555.41,94.229z"/> <path fill="#FFFFFF" d="M566.369,92.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H567.3C567.127,91.878,566.955,92.24,566.369,92.564z"/> <path fill="#FFFFFF" d="M552.311,74.107h-3.219v9.885h3.696c3.739,0,4.71-2.59,4.71-4.943 C557.498,75.802,555.941,74.107,552.311,74.107z M552.218,82.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,81.262,554.238,82.004,552.218,82.004z"/> <polygon fill="#FFFFFF" points="609.273,79.695 613.568,79.695 613.568,77.817 609.273,77.817 609.273,76.025 613.876,76.025 613.876,74.107 606.932,74.107 606.932,83.993 614.288,83.993 614.288,82.045 609.273,82.045 "/> <polygon fill="#FFFFFF" points="554.344,57.107 552.455,57.107 548.413,66.993 550.302,66.993 "/> <path fill="#FFFFFF" d="M575.545,81.737l-1.849-0.993c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249 c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25C573.457,84.287,574.801,83.11,575.545,81.737z"/> <path fill="#FFFFFF" d="M78.091,831.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C115.757,847.859,101.178,831.021,78.091,831.021z M78.091,939.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C100.655,904.274,99.441,939.163,78.091,939.163z"/> <path fill="#FFFFFF" d="M204.1,832.757c-3.473,0-19.789,0.349-31.419,0.349c-10.761,0-32.113-0.349-39.229-0.349 c-2.255,0-2.255,0.175-2.255,3.299c0,3.818-0.52,10.763-0.694,12.672c-0.349,3.993-0.869,7.812-1.215,11.804 c0,1.389,0.694,1.909,2.604,1.909c1.389,0,1.561-0.521,2.43-4.341c2.604-11.802,3.818-11.802,29.509-11.802 c2.43,0,13.019,0,28.292,0.172c-5.033,8.854-6.769,11.979-23.605,41.14c-21.698,38.36-26.211,46.521-28.641,49.818 c-2.083,2.95-2.604,3.47-2.604,4.685c0,2.604,4.859,4.341,6.594,4.341c2.432,0,3.298-1.909,3.647-2.952 c1.735-3.992,2.604-6.073,5.728-11.804c22.739-41.311,51.728-93.905,52.769-95.988C206.704,834.32,205.663,832.757,204.1,832.757z" /> <path fill="#FFFFFF" d="M235.725,254.473c13.729,0,24.971-8.89,24.971-10.458c0-0.262,0-0.262-0.26-1.308l-0.525-1.961h-0.783 c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396c12.55-2.484,20.133-3.922,32.814-5.884 c3.269-0.522,3.531-0.654,3.531-2.744c0-2.092,0-2.746-0.916-3.008c-0.783-0.26-0.914-0.523-1.568-3.267 c-1.83-7.191-9.152-14.12-19.742-14.12c-13.204,0-27.324,11.505-27.324,31.769C212.585,238.654,216.899,254.473,235.725,254.473z M236.378,202.048c6.407,0,10.723,7.191,10.723,11.768c0,1.305-0.394,2.484-4.576,3.529c-6.538,1.699-10.329,2.615-16.996,3.792 C225.658,207.147,231.019,202.048,236.378,202.048z"/> <path fill="#FFFFFF" d="M363.433,294.585c3.791,0,7.845-3.923,7.845-7.714c0-3.66-4.183-7.452-7.451-7.452s-7.845,3.66-7.845,7.843 C355.981,290.922,359.903,294.585,363.433,294.585z"/> <path fill="#FFFFFF" d="M269.063,363.613c-4.836-0.131-7.451-0.522-7.714-8.89c-0.131-3.007,0-11.243,0-21.312 c0-8.236,0-22.094-15.034-22.094c-5.884,0-13.729,3.008-25.103,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.392-0.914-1.176-0.914c-0.392,0-1.439,0-2.222,0.26c-1.701,0.523-15.165,6.275-16.344,6.798 c-2.221,0.916-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.224,1.83c6.667,0.262,6.667,1.307,6.667,15.559 c0,7.583-0.262,16.473-0.522,19.088c-0.522,4.576-2.877,6.275-6.275,6.798c-2.224,0.262-2.355,0.391-2.355,2.353 c0,1.179,0.131,1.83,1.438,1.83c2.484,0,5.099-0.26,12.682-0.26c5.492,0,13.989,0.26,16.082,0.26c0.785,0,1.438-0.129,1.438-2.222 c0-1.438-0.131-1.699-1.438-1.83c-4.836-0.522-7.061-0.653-7.977-3.531c-0.783-2.353-0.783-12.288-0.783-15.819 c0-8.89,0-19.087,0.522-19.87c0.523-0.917,8.759-3.923,15.166-3.923c2.746,0,6.275,0.785,8.628,3.138 c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.914,20.133c-0.785,2.877-2.877,3.529-5.621,4.054 c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.129,1.568,1.045,1.568c2.484,0,10.589-0.26,14.903-0.26 c6.407,0,11.245,0.26,13.86,0.26c1.699,0,1.961-0.392,1.961-2.09C271.81,363.745,271.416,363.613,269.063,363.613z"/> <path fill="#FFFFFF" d="M456.512,365.575c0-1.83-0.391-1.961-2.746-1.961c-4.836-0.131-7.451-0.522-7.714-8.89 c-0.129-3.007,0-11.243,0-21.312c0-8.236,0-22.094-15.034-22.094c-5.884,0-13.727,3.008-25.101,8.63 c0-1.308,0.654-6.538,0.654-8.499c0-0.785-0.394-0.914-1.177-0.914c-0.394,0-1.438,0-2.224,0.26 c-1.698,0.523-15.165,6.275-16.342,6.798c-2.224,0.916-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.222,1.83 c6.669,0.262,6.669,1.307,6.669,15.559c0,7.583-0.263,16.473-0.524,19.088c-0.523,4.576-2.876,6.275-6.275,6.798 c-2.222,0.262-2.353,0.391-2.353,2.353c0,1.179,0.131,1.83,1.438,1.83c2.483,0,5.099-0.26,12.682-0.26 c5.49,0,13.989,0.26,16.079,0.26c0.785,0,1.438-0.129,1.438-2.222c0-1.438-0.131-1.699-1.438-1.83 c-4.837-0.522-7.061-0.653-7.975-3.531c-0.784-2.353-0.784-12.288-0.784-15.819c0-8.89,0-19.087,0.522-19.87 c0.522-0.917,8.761-3.923,15.165-3.923c2.746,0,6.277,0.785,8.63,3.138c3.269,3.4,3.269,10.198,3.269,15.95 c0,4.705,0,16.473-0.916,20.133c-0.785,2.877-2.875,3.529-5.621,4.054c-1.961,0.26-1.961,0.392-1.961,2.353 c0,1.176,0.131,1.568,1.045,1.568c2.483,0,10.591-0.26,14.905-0.26c6.406,0,11.242,0.26,13.857,0.26 C456.25,367.665,456.512,367.273,456.512,365.575z"/> <path fill="#FFFFFF" d="M332.982,362.96c-2.615,0-3.529-1.439-3.92-4.054c-0.525-3.529-0.525-16.996-0.525-19.217 c0-15.037,0-42.752,1.176-57.132c0-1.047,0.654-6.146,0.654-6.8c0-0.392,0-1.045-1.568-1.045c-0.391,0-0.785,0-2.092,0.522 c-3.792,1.57-11.634,4.968-15.819,6.929c-2.221,1.047-2.483,1.176-2.483,2.877c0,1.699,0.262,1.699,3.006,1.83 c4.445,0.131,5.492,1.438,5.23,26.017c-3.006-0.654-6.144-1.438-10.852-1.438c-19.61,0-33.859,13.727-33.859,31.769 c0,15.165,10.066,25.625,23.139,25.625c8.105,0,15.819-3.792,20.918-6.275c0.262,4.574,0.262,5.881,0.785,6.929 c0.523,1.176,1.699,1.568,2.747,1.568c3.266,0,15.165-3.4,19.216-4.705c2.484-0.785,2.484-0.917,2.484-2.877v-1.961 c-1.045,0-1.307,0-3.529,0.785C337.036,362.437,334.812,362.96,332.982,362.96z M316.118,347.794c0,6.929-0.131,7.583-0.131,10.458 c-3.529,1.83-7.452,2.746-11.505,2.746c-7.189,0-19.348-4.968-19.348-24.187c0-12.29,5.881-18.826,16.079-18.826 c5.23,0,14.12,2.09,14.905,9.413C316.378,328.707,316.118,344.917,316.118,347.794z"/> <path fill="#FFFFFF" d="M377.422,363.482c-4.706-0.263-7.32-0.392-8.105-3.792c-0.654-2.615-0.654-16.473-0.654-20.396 c0-12.55,0.132-15.95,0.263-18.694c0.261-3.009,0.392-6.146,0.653-9.152c0-1.045-0.653-1.308-1.307-1.308 c-1.177,0-2.615,0.394-3.923,0.916c-4.968,1.961-9.936,3.922-14.774,6.013c-1.83,0.785-2.09,0.785-2.09,2.484 c0,1.701,0.392,1.701,1.959,1.961c6.669,0.916,6.669,2.615,6.669,15.688c0,23.142-0.131,25.103-7.714,26.279 c-2.222,0.391-2.353,0.391-2.353,2.353c0,1.438,0.391,1.83,1.308,1.83c2.875,0,7.451-0.26,15.95-0.26 c7.188,0,12.55,0.26,14.643,0.26c1.306,0,1.699-0.129,1.699-2.222C379.646,363.874,379.383,363.613,377.422,363.482z"/> <path fill="#FFFFFF" d="M513.11,312.494c-5.23,0-10.589,0.394-15.819,1.047c-4.836-2.092-9.021-2.484-12.29-2.484 c-14.249,0-26.408,9.019-26.408,23.008c0,7.845,3.792,12.813,7.583,15.428c3.529,2.615,7.061,3.269,10.066,3.923 c-12.419,4.836-12.55,4.836-12.55,9.281c0,2.746,1.567,7.454,10.328,9.021c-3.531,1.57-9.415,3.922-14.643,7.451 c-3.662,2.484-3.662,4.185-3.662,8.499c0,4.968,0.394,6.275,0.785,7.06c2.224,5.884,14.382,7.974,21.312,7.974 c19.479,0,38.697-11.112,38.697-24.578c0-12.944-15.036-13.857-24.055-14.251c-11.768-0.654-18.043-0.914-18.043-5.097 c0-0.785,0.263-1.307,0.785-1.57c0.782-0.522,6.929-2.224,10.326-3.269c16.213-4.836,22.879-13.595,22.879-22.617 c0-6.015-2.221-8.89-3.66-10.591c3.66-0.129,5.23-0.129,10.461-0.129c2.353,0,2.483-0.525,2.483-4.316 C517.687,312.494,517.556,312.494,513.11,312.494z M480.033,373.026c2.615,0.262,14.12,1.045,16.473,1.438 c3.007,0.522,9.544,1.438,9.544,7.583c0,7.714-9.15,13.466-22.225,13.466c-6.667,0-17.519-1.832-17.519-9.675 C466.307,380.609,470.752,377.08,480.033,373.026z M487.616,348.708c-3.007-0.654-7.061-1.437-10.852-5.099 c-3.791-3.529-6.275-8.627-6.275-14.771c0-9.544,5.753-12.553,10.46-12.553c9.413,0,15.688,9.415,15.688,19.088 C496.638,344.395,490.493,347.401,487.616,348.708z"/> <path fill="#FFFFFF" d="M59.388,367.405c4.442,0.131,8.759,0.131,13.073,0.131c10.458,0,18.825-0.263,25.101-3.269 c10.197-4.839,14.511-14.121,14.511-21.441c0-5.23-2.09-19.35-25.492-21.442c5.228-1.437,18.694-4.968,18.694-18.826 c0-6.275-3.529-12.027-8.89-15.165c-5.622-3.138-12.159-3.4-18.434-3.4c-2.484,0-20.918,0.394-24.84,0.394 c-1.437,0.131-7.974,0-9.544,0c-2.353,0-2.353,0.26-2.353,2.484c0,1.308,0.262,1.567,1.438,1.567 c2.353,0.131,5.359,0.394,6.798,1.57c1.961,1.699,2.746,2.353,2.746,34.644c0,9.806,0,21.44-0.522,29.286 c-0.654,8.105-3.269,9.152-8.761,9.675c-2.09,0.26-2.353,0.26-2.353,1.961c0,1.961,0,2.221,2.353,2.221 C45.268,367.796,56.772,367.405,59.388,367.405z M66.185,291.185c0-2.222,0.523-2.484,5.23-2.484c5.882,0,18.563,0,18.563,15.688 c0,6.669-2.484,12.551-8.105,14.905c-3.529,1.437-6.538,1.699-16.082,1.699C65.792,317.724,65.792,302.69,66.185,291.185z M65.792,325.569c13.466-0.263,30.855-0.523,30.855,18.171c0,6.929-3.006,13.729-9.153,16.735 c-4.445,2.221-9.804,2.353-11.765,2.353c-6.668,0-8.759-1.699-9.413-5.752C65.663,353.024,65.792,331.713,65.792,325.569z"/> <path fill="#FFFFFF" d="M146.97,365.443c0-1.438-0.263-1.699-1.57-1.699c-5.23-0.525-7.843-0.654-9.021-2.746 c-0.914-1.439-1.437-2.353-1.437-36.477c0-9.413,0.129-19.871,0.129-21.832c0-9.152,0.131-14.774,0.654-21.312 c0.131-1.305,0.525-3.529,0.525-4.967c0-0.914-0.525-1.437-1.308-1.437c-3.009,0-9.021,1.959-19.61,5.359 c-2.355,0.654-2.615,0.785-2.615,2.484c0,1.438,0.26,1.438,1.307,1.57c5.099,0.654,6.667,0.783,7.452,3.922 c0.914,3.138,0.914,11.112,0.914,29.808c0,16.602-0.129,28.107-0.653,36.997c-0.26,5.622-1.83,7.714-7.189,8.499 c-2.092,0.26-2.353,0.26-2.353,1.961c0,1.699,0.392,2.09,1.568,2.09c2.615,0,8.368-0.129,14.511-0.129 c7.06,0,12.944,0.129,16.735,0.129C146.577,367.665,146.97,367.536,146.97,365.443z"/> <path fill="#FFFFFF" d="M196.382,331.453c0-2.093,0-2.747-0.914-3.009c-0.785-0.26-0.916-0.522-1.57-3.269 c-1.83-7.189-9.15-14.118-19.742-14.118c-13.204,0-27.322,11.505-27.322,31.769c0,10.327,4.314,26.146,23.139,26.146 c13.727,0,24.972-8.891,24.972-10.458c0-0.262,0-0.262-0.263-1.308l-0.522-1.961h-0.785c-7.061,5.23-14.121,5.23-15.557,5.23 c-15.69,0-17.389-16.082-17.78-20.396c12.55-2.484,20.133-3.922,32.814-5.884C196.122,333.674,196.382,333.543,196.382,331.453z M176.771,331.844c-6.536,1.699-10.327,2.615-16.996,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C181.348,329.621,180.956,330.799,176.771,331.844z"/> <path fill="#FFFFFF" d="M41.999,253.297c2.353,0,8.759-0.26,15.428-0.26c15.165,0,17.649,0.26,19.217,0.26 c1.176,0,1.961-0.129,1.961-2.09c0-1.83-0.26-1.83-2.484-1.83c-6.538-0.263-8.89-1.57-9.413-7.976 c-0.523-5.49-0.523-10.458-0.523-28.501h44.057c-0.129,20.527-0.129,25.363-0.914,29.286c-0.785,4.051-2.224,6.406-8.63,7.06 c-2.353,0.131-2.483,0.26-2.483,1.961c0,1.83,0.653,2.09,1.438,2.09c1.83,0,6.668-0.26,21.309-0.26 c10.329,0,13.466,0.26,14.643,0.26c0.785,0,1.439-0.26,1.439-1.961c0-1.83-0.131-1.959-1.83-1.959 c-7.06-0.525-9.152-0.654-10.198-5.752c-0.914-4.185-1.045-12.553-0.914-42.49c0.129-22.488,0.26-25.756,8.236-26.801 c3.791-0.522,4.183-0.654,4.313-2.615c0-1.57-0.131-1.83-1.438-1.83c-2.353,0-13.989,0.26-16.604,0.26 c-2.615,0-15.165-0.26-18.041-0.26c-1.57,0-1.701,0.26-1.701,1.961c0,1.961,0.131,1.961,2.484,2.09 c6.406,0.394,8.236,2.093,8.499,6.929c0.391,4.838,0.391,8.236,0.391,26.017c-8.497,0-30.331,0.131-44.057,0 c0-14.249,0-21.047,0.654-26.017c0.785-5.097,3.66-6.404,8.628-6.798c2.615-0.26,2.615-0.522,2.615-2.353s-0.262-1.83-1.83-1.83 c-2.353,0-13.727,0.26-16.341,0.26c-2.484,0-14.643-0.26-17.389-0.26c-1.307,0-1.567,0-1.567,2.353c0,1.439,0.26,1.439,2.744,1.699 c5.622,0.654,7.323,1.833,7.977,6.146c0.522,4.183,0.522,16.341,0.522,21.703c0,8.236,0,25.754-0.263,32.683 c-0.391,8.628-0.653,13.858-8.627,14.643c-2.615,0.263-2.877,0.392-2.877,1.568C40.429,252.905,40.954,253.297,41.999,253.297z"/> <path fill="#FFFFFF" d="M138.86,205.055c4.185,0.131,6.275,0.131,6.538,6.8c0.131,3.398-0.131,20.133-0.131,23.924 c0,6.013,0.522,9.413,3.4,12.944c3.138,3.791,8.236,5.621,12.55,5.621c7.714,0,16.21-4.054,24.187-7.976 c0,0.785-0.394,4.577-0.394,5.493c0,0.914,0,2.353,1.961,2.353c2.484,0,14.12-3.006,18.696-4.445 c4.183-1.176,4.183-1.176,4.183-2.224c0-2.613-0.26-2.613-0.914-2.613c-0.394,0-2.355,0.392-2.747,0.392 c-1.57,0.26-3.006,0.391-4.053,0.391c-4.052,0-4.052-2.875-4.052-9.673c0-6.277,0.522-23.142,0.654-27.195 c0-1.567,0.522-9.15,0.522-10.851c0-1.045-0.391-1.437-1.308-1.437c-0.916,0-5.49,0.785-6.406,0.914 c-4.836,0.654-12.812,1.439-13.335,1.439c-2.875,0.131-3.138,0.131-3.138,2.353c0,1.308,0.654,1.701,3.66,1.701 c7.191,0,7.191,2.615,7.191,10.98c0,7.06,0,27.193-0.785,28.24c-0.785,1.045-8.105,3.922-14.903,3.922 c-12.159,0-12.159-11.245-12.159-22.748c0-5.099,0.131-13.075,0.391-17.52c0.262-2.747,0.522-6.667,0.522-7.974 c0-0.654,0-1.439-1.176-1.439c-2.221,0-17.649,4.183-18.041,4.314c-2.224,0.654-2.483,0.654-2.483,2.353 C137.293,204.926,137.553,204.926,138.86,205.055z"/>',
                    title: "Hue Blending",
                    date: "december, twelve",
                    img: "data/poster/blend",
                    itemcolor: "#8dc63f",
                    bgcolor: "#ddd",
                    preload: ["contents/blend/soup.png"],
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "lock",
                    title: "",
                    date: "",
                    img: "data/poster/lock",
                    itemcolor: "#222"
                }
            }, {
                poster: {
                    id: "lock",
                    title: "",
                    date: "",
                    img: "data/poster/lock",
                    itemcolor: "#222"
                }
            }, {
                poster: {
                    id: "lock",
                    title: "",
                    date: "",
                    img: "data/poster/lock",
                    itemcolor: "#222"
                }
            }, {
                poster: {
                    id: "lock",
                    title: "",
                    date: "",
                    img: "data/poster/lock",
                    itemcolor: "#222"
                }
            }, {
                poster: {
                    id: "lock",
                    title: "",
                    date: "",
                    img: "data/poster/lock",
                    itemcolor: "#222"
                }
            }, {
                poster: {
                    id: "triangulation",
                    classfn: Triangulation,
                    svg: '<path fill="#FFFFFF" d="M573.765,98.547c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.483-3.373,3.483-5.026c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 C575.599,96.77,574.828,97.568,573.765,98.547z"/> <polygon fill="#FFFFFF" points="568.643,45.084 571.969,50.993 574.269,50.993 574.269,41.107 572.021,41.107 572.021,47.127 568.682,41.107 566.381,41.107 566.381,50.993 568.643,50.993 "/> <path fill="#FFFFFF" d="M567.005,80.036c0,3.346,2.009,5.25,4.497,5.25c1.955,0,3.299-1.176,4.043-2.549l-1.849-0.993 c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249c0-1.654,0.799-3.138,2.314-3.138 c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562C568.895,74.8,567.005,77.109,567.005,80.036z" /> <polygon fill="#FFFFFF" points="580.053,50.993 583.312,41.107 580.811,41.107 578.884,48.136 576.94,41.107 574.44,41.107 577.66,50.993 "/> <polygon fill="#FFFFFF" points="584.084,83.045 579.069,83.045 579.069,80.695 583.365,80.695 583.365,78.817 579.069,78.817 579.069,77.025 583.67,77.025 583.67,75.107 576.728,75.107 576.728,84.993 584.084,84.993 "/> <path fill="#FFFFFF" d="M621.629,81.043c1.024-0.377,1.93-1.05,1.93-2.73c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368 v-3.529h1.464l1.875,3.529h2.581L621.629,81.043z M619.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,78.566,621.151,79.629,619.808,79.629z"/> <path fill="#FFFFFF" d="M557.498,80.05c0-3.248-1.557-4.942-5.188-4.942h-3.219v9.885h3.696 C556.527,84.993,557.498,82.402,557.498,80.05z M552.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,82.262,554.238,83.004,552.218,83.004z"/> <path fill="#FFFFFF" d="M559.894,102.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C556.767,100.242,557.765,102.203,559.894,102.203z M559.945,94.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C558.748,95.482,559.002,94.096,559.945,94.096z"/> <path fill="#FFFFFF" d="M551.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C553.177,96.77,552.405,97.568,551.34,98.547z"/> <path fill="#FFFFFF" d="M564.879,95.369c1.292-0.027,1.412-0.084,1.902-0.308v6.931h2.143v-9.494H567.3 c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351V95.369z"/> <polygon fill="#FFFFFF" points="617.625,48.905 613.955,48.905 613.955,41.107 611.614,41.107 611.614,50.993 617.625,50.993 "/> <polygon fill="#FFFFFF" points="625.445,49.045 620.432,49.045 620.432,46.693 624.728,46.693 624.728,44.817 620.432,44.817 620.432,43.026 625.033,43.026 625.033,41.107 618.091,41.107 618.091,50.993 625.445,50.993 "/> <path fill="#FFFFFF" d="M628.185,43.601l1.943,7.393h2.035l1.955-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432 l-1.742,6.916l-1.77-6.916h-3.432v9.886h2.287C628.238,50.993,628.225,44.985,628.185,43.601z"/> <polygon fill="#FFFFFF" points="644.771,49.045 639.758,49.045 639.758,46.693 644.053,46.693 644.053,44.817 639.758,44.817 639.758,43.026 644.358,43.026 644.358,41.107 637.416,41.107 637.416,50.993 644.771,50.993 "/> <polygon fill="#FFFFFF" points="647.523,45.084 650.849,50.993 653.149,50.993 653.149,41.107 650.902,41.107 650.902,47.127 647.564,41.107 645.264,41.107 645.264,50.993 647.523,50.993 "/> <path fill="#FFFFFF" d="M595.893,49.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,48.948,596.585,49.27,595.893,49.27z"/> <path fill="#FFFFFF" d="M585.08,50.993l0.466-1.583h3.458l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886H585.08z M587.249,43.46l1.224,4.171h-2.382L587.249,43.46z"/> <path fill="#FFFFFF" d="M597.517,84.993h4.602c1.916,0,3.459-0.952,3.459-2.773c0-1.735-1.464-2.226-2.369-2.31 c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375V84.993z M599.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M599.749,80.806h2.022 c0.479,0,1.423,0.027,1.423,1.219c0,1.133-1.049,1.174-1.807,1.174h-1.639V80.806z"/> <polygon fill="#FFFFFF" points="611.109,49.045 606.095,49.045 606.095,46.693 610.391,46.693 610.391,44.817 606.095,44.817 606.095,43.026 610.696,43.026 610.696,41.107 603.754,41.107 603.754,50.993 611.109,50.993 "/> <polygon fill="#FFFFFF" points="653.428,41.107 653.428,43.053 655.875,43.053 655.875,50.993 658.243,50.993 658.243,43.053 660.678,43.053 660.678,41.107 "/> <path fill="#FFFFFF" d="M595.695,84.993v-9.885h-3.432l-1.743,6.917l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393 l1.943,7.393h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393H595.695z"/> <path fill="#FFFFFF" d="M553.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,49.382,550.727,51.287,553.215,51.287z"/> <polygon fill="#FFFFFF" points="566.154,83.045 561.142,83.045 561.142,80.695 565.438,80.695 565.438,78.817 561.142,78.817 561.142,77.025 565.743,77.025 565.743,75.107 558.801,75.107 558.801,84.993 566.154,84.993 "/> <polygon fill="#FFFFFF" points="554.344,58.107 552.455,58.107 548.413,67.993 550.302,67.993 "/> <polygon fill="#FFFFFF" points="609.273,80.695 613.568,80.695 613.568,78.817 609.273,78.817 609.273,77.025 613.876,77.025 613.876,75.107 606.932,75.107 606.932,84.993 614.288,84.993 614.288,83.045 609.273,83.045 "/> <path fill="#FFFFFF" d="M559.291,50.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,43.46l1.224,4.171h-2.382L561.461,43.46z"/> <path fill="#FFFFFF" d="M192.125,830.287c-16.491,0-66.482,12.844-66.482,72.209c0,33.328,19.267,43.395,35.583,43.395 c15.796,0,35.757-10.241,35.757-35.932c0-17.357-9.895-33.153-26.906-33.153c-10.935,0-19.961,6.25-22.391,9.72 c-0.869,1.043-1.215,2.084-1.215,3.993c0,1.389,0,1.737,0.695,1.737c0.52,0,1.215-0.695,1.909-1.563 c3.99-4.339,9.72-5.207,12.496-5.207c12.324,0,20.658,12.149,20.658,29.16c0,17.36-9.2,24.997-18.92,24.997 c-10.763,0-22.393-9.721-22.393-38.882c0-51.382,35.932-63.357,43.223-63.357c4.165,0,7.811,2.084,10.589,2.084 c2.604,0,3.124-1.737,3.124-2.778c0-1.389-0.521-2.952-1.215-4.513C196.115,830.981,195.594,830.287,192.125,830.287z"/> <path fill="#FFFFFF" d="M78.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C115.757,848.859,101.178,832.021,78.091,832.021z M78.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C100.655,905.274,99.441,940.163,78.091,940.163z"/> <path fill="#FFFFFF" d="M210.889,364.613c-4.836-0.131-7.452-0.522-7.711-8.89c-0.131-3.007,0-11.243,0-21.312 c0-8.236,0-22.094-15.037-22.094c-5.881,0-13.727,3.008-25.101,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.394-0.914-1.176-0.914c-0.394,0-1.438,0-2.224,0.26c-1.699,0.523-15.165,6.275-16.341,6.798 c-2.224,0.916-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.222,1.83c6.668,0.262,6.668,1.307,6.668,15.559 c0,7.583-0.262,16.473-0.524,19.088c-0.523,4.576-2.875,6.275-6.275,6.798c-2.221,0.262-2.353,0.391-2.353,2.353 c0,1.179,0.131,1.83,1.439,1.83c2.483,0,5.099-0.26,12.681-0.26c5.49,0,13.989,0.26,16.079,0.26c0.785,0,1.439-0.129,1.439-2.222 c0-1.438-0.131-1.699-1.439-1.83c-4.836-0.522-7.058-0.653-7.974-3.531c-0.785-2.353-0.785-12.288-0.785-15.819 c0-8.89,0-19.087,0.522-19.87c0.525-0.917,8.761-3.923,15.167-3.923c2.744,0,6.275,0.785,8.628,3.138 c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.916,20.133c-0.785,2.877-2.875,3.529-5.622,4.054 c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.568,1.047,1.568c2.483,0,10.589-0.26,14.903-0.26 c6.406,0,11.243,0.26,13.857,0.26c1.701,0,1.961-0.392,1.961-2.09C213.635,364.745,213.244,364.613,210.889,364.613z"/> <path fill="#FFFFFF" d="M565.13,246.583c-3.399,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324 c0-3.006-0.392-6.929-2.746-9.804c-1.308-1.439-4.705-4.968-12.288-4.968c-17.127,0-28.501,11.896-28.501,16.473 c0,1.176,0.914,1.83,1.962,1.83c2.09,0,7.32-1.176,8.759-1.699c1.567-0.525,2.09-1.179,2.09-2.355c0-0.522-0.26-2.615-0.26-3.006 c0-0.654,0.131-1.308,1.438-1.83c2.875-1.045,6.145-1.176,7.451-1.176c3.138,0,7.061,0.654,8.368,4.051 c1.045,2.093,1.176,4.316,1.045,15.559c-8.628,0.914-16.864,2.484-22.616,4.314c-7.191,2.353-10.329,3.922-10.329,12.419 c0,5.361,1.83,13.206,12.158,13.206c7.975,0,16.733-4.054,20.656-5.752c0.262,1.308,1.176,5.881,7.06,5.881 c3.531,0,10.329-1.83,17.78-5.75c1.438-0.785,1.438-1.047,1.438-3.009l0.132-2.875l-0.654-0.263 C571.799,245.015,567.876,246.583,565.13,246.583z M548.004,243.576c-0.785,2.747-7.975,4.054-11.506,4.054 c-4.968,0-7.582-1.831-7.582-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.274-2.222,9.544-2.222 c2.483,0,3.528,1.177,3.528,3.923C548.395,235.994,548.395,242.269,548.004,243.576z"/> <path fill="#FFFFFF" d="M473.371,245.931c-0.394,0-2.354,0.392-2.746,0.392c-1.569,0.26-3.006,0.391-4.054,0.391 c-4.051,0-4.051-2.875-4.051-9.673c0-6.277,0.522-23.142,0.653-27.195c0-1.567,0.522-9.15,0.522-10.851 c0-1.045-0.394-1.437-1.308-1.437c-0.916,0-5.492,0.785-6.406,0.914c-4.836,0.654-12.812,1.439-13.335,1.439 c-2.878,0.131-3.138,0.131-3.138,2.353c0,1.308,0.654,1.701,3.66,1.701c7.191,0,7.191,2.615,7.191,10.98 c0,7.06,0,27.193-0.785,28.24c-0.785,1.045-8.105,3.922-14.902,3.922c-12.159,0-12.159-11.245-12.159-22.748 c0-5.099,0.129-13.075,0.392-17.52c0.262-2.747,0.522-6.667,0.522-7.974c0-0.654,0-1.439-1.177-1.439 c-2.222,0-17.648,4.183-18.04,4.314c-2.224,0.654-2.486,0.654-2.486,2.353c0,1.833,0.263,1.833,1.57,1.961 c4.183,0.131,6.274,0.131,6.537,6.8c0.129,3.398-0.131,20.133-0.131,23.924c0,6.013,0.522,9.413,3.399,12.944 c3.138,3.791,8.236,5.621,12.551,5.621c7.714,0,16.21-4.054,24.187-7.976c0,0.785-0.394,4.577-0.394,5.493 c0,0.914,0,2.353,1.961,2.353c2.484,0,14.12-3.006,18.696-4.445c4.183-1.176,4.183-1.176,4.183-2.224 C474.285,245.931,474.023,245.931,473.371,245.931z"/> <path fill="#FFFFFF" d="M510.357,250.245c-5.23-0.522-7.846-0.654-9.021-2.746c-0.914-1.439-1.437-2.353-1.437-36.475 c0-9.415,0.129-19.873,0.129-21.834c0-9.152,0.131-14.774,0.653-21.309c0.132-1.308,0.525-3.531,0.525-4.97 c0-0.914-0.525-1.437-1.308-1.437c-3.009,0-9.021,1.961-19.61,5.359c-2.354,0.654-2.615,0.785-2.615,2.484 c0,1.438,0.261,1.438,1.308,1.57c5.099,0.654,6.667,0.785,7.451,3.923c0.914,3.137,0.914,11.111,0.914,29.808 c0,16.602-0.129,28.107-0.653,36.997c-0.261,5.621-1.83,7.714-7.189,8.499c-2.092,0.263-2.354,0.263-2.354,1.961 s0.394,2.093,1.569,2.093c2.615,0,8.368-0.131,14.512-0.131c7.061,0,12.944,0.131,16.735,0.131c1.567,0,1.961-0.131,1.961-2.224 C511.927,250.505,511.665,250.245,510.357,250.245z"/> <path fill="#FFFFFF" d="M255.068,246.583c-3.398,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324 c0-3.006-0.391-6.929-2.744-9.804c-1.308-1.439-4.708-4.968-12.291-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.916,1.83,1.961,1.83c2.093,0,7.32-1.176,8.759-1.699c1.57-0.525,2.093-1.179,2.093-2.355 c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.131-1.308,1.439-1.83c2.875-1.045,6.144-1.176,7.452-1.176 c3.137,0,7.06,0.654,8.367,4.051c1.045,2.093,1.176,4.316,1.045,15.559c-8.628,0.914-16.864,2.484-22.617,4.314 c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.206,12.159,13.206c7.976,0,16.735-4.054,20.658-5.752 c0.26,1.308,1.176,5.881,7.058,5.881c3.531,0,10.329-1.83,17.78-5.75c1.439-0.785,1.439-1.047,1.439-3.009l0.131-2.875l-0.654-0.263 C261.736,245.015,257.814,246.583,255.068,246.583z M237.941,243.576c-0.783,2.747-7.974,4.054-11.503,4.054 c-4.97,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.404-6.669c2.615-1.045,6.277-2.222,9.544-2.222c2.484,0,3.531,1.177,3.531,3.923 C238.335,235.994,238.335,242.269,237.941,243.576z"/> <path fill="#FFFFFF" d="M56.895,368.405c7.191,0,12.553,0.26,14.643,0.26c1.307,0,1.701-0.129,1.701-2.222 c0-1.57-0.263-1.83-2.224-1.961c-4.705-0.263-7.32-0.392-8.105-3.792c-0.654-2.615-0.654-16.473-0.654-20.396 c0-12.55,0.131-15.95,0.263-18.694c0.26-3.009,0.391-6.146,0.653-9.152c0-1.045-0.653-1.308-1.307-1.308 c-1.176,0-2.615,0.394-3.923,0.916c-4.967,1.961-9.938,3.922-14.774,6.013c-1.83,0.785-2.092,0.785-2.092,2.484 c0,1.701,0.394,1.701,1.961,1.961c6.668,0.916,6.668,2.615,6.668,15.688c0,23.142-0.131,25.103-7.714,26.279 c-2.224,0.391-2.353,0.391-2.353,2.353c0,1.438,0.392,1.83,1.308,1.83C43.822,368.665,48.398,368.405,56.895,368.405z"/> <path fill="#FFFFFF" d="M339.384,252.075c0-1.83-0.391-1.961-2.744-1.961c-4.839-0.131-7.454-0.522-7.714-8.89 c-0.131-3.006,0-11.243,0-21.309c0-8.236,0-22.096-15.034-22.096c-5.884,0-13.729,3.008-25.103,8.63 c0-1.308,0.654-6.538,0.654-8.499c0-0.785-0.391-0.914-1.176-0.914c-0.391,0-1.438,0-2.224,0.26 c-1.699,0.522-15.165,6.275-16.341,6.797c-2.222,0.917-2.353,1.047-2.353,2.615c0,1.83,0,1.83,2.221,1.83 c6.669,0.262,6.669,1.307,6.669,15.559c0,7.583-0.263,16.473-0.523,19.088c-0.525,4.576-2.877,6.275-6.275,6.798 c-2.224,0.262-2.355,0.394-2.355,2.353c0,1.178,0.131,1.833,1.439,1.833c2.483,0,5.099-0.263,12.681-0.263 c5.49,0,13.989,0.263,16.082,0.263c0.783,0,1.437-0.131,1.437-2.224c0-1.439-0.129-1.699-1.437-1.831 c-4.839-0.522-7.06-0.654-7.976-3.531c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.525-19.87 c0.522-0.917,8.759-3.923,15.165-3.923c2.744,0,6.275,0.785,8.628,3.138c3.269,3.4,3.269,10.198,3.269,15.95 c0,4.705,0,16.473-0.916,20.133c-0.783,2.877-2.875,3.531-5.622,4.054c-1.961,0.26-1.961,0.392-1.961,2.353 c0,1.176,0.131,1.57,1.047,1.57c2.484,0,10.589-0.263,14.903-0.263c6.406,0,11.245,0.263,13.858,0.263 C339.124,254.168,339.384,253.774,339.384,252.075z"/> <path fill="#FFFFFF" d="M613.103,198.995c-0.916-0.129-18.565,0-20.789,0c0-1.568,0.654-10.066,0.654-10.195 c0-0.785-0.392-1.047-1.567-1.047c-1.57,0-1.83,0.262-3.923,2.615c-3.531,3.922-8.236,7.845-12.944,11.243 c-1.698,1.308-1.83,1.439-1.83,2.615c0,1.438,0.132,1.701,0.523,1.83h6.277c-0.132,3.791-0.785,30.855-0.785,33.339 c0,4.706,0,15.95,13.204,15.95c7.974,0,16.341-4.185,18.956-5.492c2.353-1.176,2.353-1.308,2.353-3.006v-2.484h-1.308 c-2.221,1.045-5.49,2.615-10.326,2.615c-10.066,0-10.066-6.407-10.066-14.251c0-7.189,0-8.759,0.129-13.989 c0.131-1.436,0.394-12.288,0.394-12.55h19.348c0.654,0,1.962,0,2.224-0.26c0.261-0.394,0.261-3.009,0.261-3.663 C613.886,199.388,613.886,198.995,613.103,198.995z"/> <path fill="#FFFFFF" d="M49.574,288.262c0,3.66,3.923,7.323,7.452,7.323c3.792,0,7.845-3.923,7.845-7.714 c0-3.66-4.183-7.452-7.452-7.452C54.151,280.419,49.574,284.08,49.574,288.262z"/> <path fill="#FFFFFF" d="M120.03,206.708c0,1.83,0.263,1.961,0.917,1.961c1.308,0,4.705,0.522,5.49,1.83 c1.307,2.093,1.307,9.807,1.307,16.344c0,10.589-0.391,14.511-0.653,16.602c-0.523,4.185-1.568,5.492-5.23,6.406 c-2.09,0.525-2.221,0.525-2.221,2.484c0,1.833,0.391,1.833,1.961,1.833c2.744,0,9.021-0.263,13.466-0.263 c6.144,0,12.55,0.263,16.341,0.263c1.439,0,1.83-0.263,1.83-2.224c0-1.308-0.131-1.961-1.307-1.961s-2.353-0.131-3.269-0.26 c-8.368-0.654-8.627-0.654-8.627-25.757c0-1.567,0-9.544,0.522-10.458c0.26-0.654,5.752-4.838,10.72-4.838 c3.006,0,4.313,1.701,5.884,4.053c1.045,1.699,1.436,1.83,1.83,1.83c1.176,0,7.191-4.576,7.191-9.281c0-2.877-3.269-7.976-6.8-7.976 c-1.83,0-4.705,1.83-7.06,3.269c-3.92,2.484-8.236,5.49-12.028,8.236c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.308-1.699-1.308 c-1.57,0-1.961,0.263-5.49,2.353c-2.615,1.57-9.021,4.708-11.114,5.622C120.293,205.272,120.03,205.272,120.03,206.708z"/> <path fill="#FFFFFF" d="M171.272,254.168c2.877,0,7.452-0.263,15.95-0.263c7.191,0,12.55,0.263,14.643,0.263 c1.307,0,1.699-0.131,1.699-2.224c0-1.568-0.26-1.831-2.222-1.961c-4.708-0.26-7.322-0.392-8.107-3.792 c-0.654-2.615-0.654-16.473-0.654-20.395c0-12.55,0.131-15.951,0.263-18.694c0.262-3.009,0.391-6.146,0.654-9.153 c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.615,0.394-3.922,0.916c-4.968,1.961-9.936,3.922-14.772,6.013 c-1.832,0.785-2.092,0.785-2.092,2.484c0,1.701,0.391,1.701,1.961,1.961c6.667,0.917,6.667,2.615,6.667,15.69 c0,23.139-0.131,25.101-7.713,26.277c-2.222,0.394-2.353,0.394-2.353,2.353C169.964,253.774,170.358,254.168,171.272,254.168z"/> <path fill="#FFFFFF" d="M187.354,181.085c3.791,0,7.843-3.922,7.843-7.714c0-3.66-4.183-7.452-7.452-7.452 c-3.269,0-7.845,3.66-7.845,7.843C179.9,177.423,183.822,181.085,187.354,181.085z"/> <path fill="#FFFFFF" d="M106.962,312.058c-18.172,0-32.946,10.98-32.946,29.286c0,18.825,13.335,28.629,28.894,28.629 c17.518,0,32.946-11.374,32.946-29.937C135.856,326.307,126.312,312.058,106.962,312.058z M107.093,364.351 c-9.413,0-19.087-9.413-19.087-27.715c0-12.55,6.929-18.957,14.773-18.957c10.852,0,19.088,12.028,19.088,27.324 C121.867,358.076,115.199,364.351,107.093,364.351z"/> <path fill="#FFFFFF" d="M42.514,191.806c1.699,0,1.699-0.263,2.484-3.006c2.747-10.198,7.06-10.198,29.417-10.46 c0.131,8.368,0.131,22.617,0.131,25.625c0,4.836-0.131,29.677-0.525,35.689c-0.522,6.929-1.699,9.415-11.243,10.329 c-2.484,0.262-2.484,0.262-2.484,2.224c0,1.83,0,2.09,1.699,2.09c4.708,0,9.544-0.392,20.004-0.392 c11.374,0,16.864,0.392,19.088,0.392c1.567,0,1.83,0,1.83-2.09c0-1.961-0.262-1.961-2.877-2.093 c-10.198-0.262-10.72-4.054-11.112-8.105c-0.394-5.492-0.522-8.89-0.522-35.038c0-9.413,0.129-19.219,0.26-28.632 c10.851,0,17.257,0.131,20.526,0.654c5.752,0.785,5.752,3.006,5.752,11.243c0,1.57,1.045,1.57,2.746,1.57 c1.568,0,1.83-0.263,2.222-2.224c1.961-7.974,4.183-18.172,4.183-18.957c0-0.785-0.654-0.914-1.437-0.914 c-0.522,0-3.138,0.783-3.791,0.914c-5.622,1.048-33.6,1.048-41.967,1.048c-5.361,0-27.324,0-30.201-1.439 c-0.783-0.394-1.437-0.522-2.09-0.522c-1.047,0-1.176,0.391-1.439,1.437c-1.045,4.97-3.269,17.52-3.269,19.219 C39.899,191.543,40.815,191.806,42.514,191.806z"/> <path fill="#FFFFFF" d="M393.369,198.995c-5.229,0-10.591,0.394-15.818,1.047c-4.839-2.093-9.021-2.484-12.291-2.484 c-14.251,0-26.41,9.021-26.41,23.008c0,7.845,3.793,12.812,7.585,15.427c3.529,2.615,7.058,3.269,10.066,3.922 c-12.421,4.837-12.552,4.837-12.552,9.282c0,2.747,1.57,7.454,10.329,9.021c-3.528,1.57-9.412,3.922-14.643,7.451 c-3.66,2.484-3.66,4.185-3.66,8.499c0,4.967,0.391,6.275,0.785,7.06c2.222,5.884,14.38,7.974,21.31,7.974 c19.481,0,38.697-11.112,38.697-24.578c0-12.944-15.033-13.858-24.055-14.249c-11.766-0.654-18.041-0.917-18.041-5.099 c0-0.785,0.261-1.307,0.783-1.57c0.785-0.522,6.929-2.221,10.329-3.269c16.212-4.836,22.879-13.595,22.879-22.617 c0-6.015-2.222-8.89-3.66-10.589c3.66-0.131,5.229-0.131,10.458-0.131c2.354,0,2.483-0.522,2.483-4.314 C397.943,198.995,397.814,198.995,393.369,198.995z M360.293,259.526c2.614,0.263,14.117,1.045,16.473,1.439 c3.006,0.522,9.544,1.439,9.544,7.583c0,7.714-9.152,13.466-22.226,13.466c-6.669,0-17.52-1.83-17.52-9.675 C346.564,267.109,351.009,263.581,360.293,259.526z M367.875,235.209c-3.009-0.654-7.06-1.437-10.852-5.099 c-3.791-3.529-6.274-8.627-6.274-14.771c0-9.544,5.752-12.55,10.458-12.55c9.412,0,15.689,9.413,15.689,19.085 C376.896,230.895,370.75,233.901,367.875,235.209z"/> <rect x="622.191" y="219.942" fill="#FFFFFF" width="37.81" height="9.822"/>',
                    title: "Triangulation",
                    date: "december, twelve",
                    img: "data/poster/triangulation",
                    itemcolor: "#e1b000",
                    bgcolor: "#ffb700",
                    preload: ["contents/triangulation/ny1.jpg"],
                    white: 0,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "spiral",
                    classfn: Spiral,
                    svg: '<polygon fill="#FFFFFF" points="555.344,58.107 553.455,58.107 549.413,67.993 551.302,67.993 "/> <path fill="#FFFFFF" d="M556.41,95.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C555.559,98.143,556.41,96.882,556.41,95.229z"/> <path fill="#FFFFFF" d="M553.311,75.107h-3.219v9.885h3.696c3.739,0,4.71-2.59,4.71-4.943 C558.498,76.802,556.941,75.107,553.311,75.107z M553.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C556.143,82.262,555.238,83.004,553.218,83.004z"/> <path fill="#FFFFFF" d="M618.36,49.27c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.088,2.002,4.284,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.198-0.38-1.198-0.912 c0-0.462,0.44-1.05,1.397-1.05c1.012,0,1.783,0.491,2.461,1.233l1.729-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.342,2.549,2.993,2.787l1.077,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C620.088,48.948,619.05,49.27,618.36,49.27z"/> <path fill="#FFFFFF" d="M554.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C549.719,49.382,551.727,51.287,554.215,51.287z"/> <path fill="#FFFFFF" d="M562.78,49.27c-1.012,0-2.089-0.448-2.715-1.247l-1.78,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.457-2.841l-1.038-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.916-0.923-2.153-1.875-4.135-1.875 c-2.423,0-3.792,1.357-3.792,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.84,0.113,1.636,0.308,1.636,1.009 C564.508,48.948,563.472,49.27,562.78,49.27z"/> <polygon fill="#FFFFFF" points="566.743,77.025 566.743,75.107 559.801,75.107 559.801,84.993 567.154,84.993 567.154,83.045 562.142,83.045 562.142,80.695 566.438,80.695 566.438,78.817 562.142,78.817 562.142,77.025 "/> <path fill="#FFFFFF" d="M571.557,49.27c-1.011,0-2.088-0.448-2.712-1.247l-1.782,1.192c0.956,1.174,2.087,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.077,0.153c0.84,0.113,1.638,0.308,1.638,1.009 C573.287,48.948,572.249,49.27,571.557,49.27z"/> <polygon fill="#FFFFFF" points="581.771,50.993 584.139,50.993 584.139,43.053 586.572,43.053 586.572,41.107 579.325,41.107 579.325,43.053 581.771,43.053 "/> <polygon fill="#FFFFFF" points="610.273,80.695 614.568,80.695 614.568,78.817 610.273,78.817 610.273,77.025 614.876,77.025 614.876,75.107 607.932,75.107 607.932,84.993 615.288,84.993 615.288,83.045 610.273,83.045 "/> <polygon fill="#FFFFFF" points="613.2,50.993 613.2,41.107 610.951,41.107 610.951,47.127 607.613,41.107 605.312,41.107 605.312,50.993 607.574,50.993 607.574,45.084 610.897,50.993 "/> <path fill="#FFFFFF" d="M624.559,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C623.653,80.666,624.559,79.993,624.559,78.312z M620.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C622.217,78.566,622.151,79.629,620.808,79.629z"/> <path fill="#FFFFFF" d="M604.208,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C606.577,80.484,605.113,79.993,604.208,79.91z M600.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M602.388,83.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C604.194,83.158,603.146,83.199,602.388,83.199z"/> <polygon fill="#FFFFFF" points="623.414,50.993 625.755,50.993 625.755,47.002 630.236,47.002 630.236,45.084 625.755,45.084 625.755,43.012 630.623,43.012 630.623,41.107 623.414,41.107 "/> <path fill="#FFFFFF" d="M657.516,41.107l-1.744,6.916l-1.77-6.916h-3.432v9.886h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393 h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886H657.516z"/> <path fill="#FFFFFF" d="M602.254,50.993h2.5l-3.457-9.886h-2.447l-3.429,9.722l-2.077-3.786c1.022-0.378,1.927-1.05,1.927-2.73 c0-2.828-2.208-3.206-3.604-3.206h-4.442v9.886h2.368v-3.529h1.461l1.876,3.529h2.434h0.147h2.354l0.464-1.583h3.459L602.254,50.993 z M591.521,45.629h-1.941v-2.687h1.954c0.412,0,1.396,0.027,1.396,1.316C592.93,44.566,592.863,45.629,591.521,45.629z M598.874,47.631l1.158-4.171l1.224,4.171H598.874z"/> <path fill="#FFFFFF" d="M635.663,40.8c-3.394,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C640.425,43.768,639.081,40.8,635.663,40.8z M635.701,49.186c-1.688,0-2.366-1.624-2.366-3.206 c0-1.33,0.546-3.108,2.328-3.108c1.663,0,2.407,1.427,2.407,3.219C638.07,47.478,637.445,49.186,635.701,49.186z"/> <path fill="#FFFFFF" d="M649.562,44.313c0-2.828-2.208-3.206-3.605-3.206h-4.44v9.886h2.365v-3.529h1.464l1.876,3.529h2.58 l-2.169-3.95C648.656,46.666,649.562,45.994,649.562,44.313z M645.811,45.629h-1.942v-2.687h1.956c0.412,0,1.396,0.027,1.396,1.316 C647.221,44.566,647.154,45.629,645.811,45.629z"/> <path fill="#FFFFFF" d="M576.545,82.737l-1.849-0.993c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249 c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25C574.457,85.287,575.801,84.11,576.545,82.737z"/> <path fill="#FFFFFF" d="M591.521,82.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L591.521,82.025z"/> <path fill="#FFFFFF" d="M578.834,95.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C577.983,98.143,578.834,96.882,578.834,95.229z"/> <path fill="#FFFFFF" d="M560.973,92.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C564.164,95.944,563.858,92.345,560.973,92.345z M560.973,100.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C562.169,98.841,561.983,100.466,560.973,100.466z"/> <path fill="#FFFFFF" d="M567.369,93.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H568.3C568.127,92.878,567.955,93.24,567.369,93.564z"/> <polygon fill="#FFFFFF" points="580.069,80.695 584.365,80.695 584.365,78.817 580.069,78.817 580.069,77.025 584.67,77.025 584.67,75.107 577.728,75.107 577.728,84.993 585.084,84.993 585.084,83.045 580.069,83.045 "/> <path fill="#FFFFFF" d="M183.402,848.339c2.778,0,5.207,0,6.424-1.215c2.255-1.909,5.902-15.103,5.902-15.622 c0-0.521-0.349-0.869-2.083-0.869c-0.52,0-1.389,0.869-1.909,1.563c-1.389,1.735-4.167,1.909-10.415,1.909 c-4.513,0.174-26.211,0-31.073,0c-1.735,0-2.255,0.174-2.95,2.43c-1.909,6.422-12.15,38.709-12.15,40.271 c0,1.736,0.866,2.083,3.818,3.126c25.343,10.066,39.75,15.622,39.75,34.54c0,14.235-8.68,23.956-22.219,23.956 c-4.167,0-17.011-1.215-21.35-13.367c-0.694-2.083-1.389-4.164-4.341-4.164c-2.083,0-7.985,2.604-7.985,7.288 c0,6.425,8.854,17.706,26.56,17.706c22.564,0,42.7-16.143,42.7-36.798c0-11.284-6.596-21.179-13.887-26.386 c-6.942-4.859-18.398-9.372-27.946-13.19c-4.859-1.911-6.422-2.778-6.422-4.341c0-1.215,4.861-13.539,6.076-16.491 C159.102,848.513,174.03,848.513,183.402,848.339z"/> <path fill="#FFFFFF" d="M79.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C116.757,848.859,102.178,832.021,79.091,832.021z M79.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C101.655,905.274,100.441,940.163,79.091,940.163z"/> <path fill="#FFFFFF" d="M354.332,250.245c-5.228-0.522-7.843-0.654-9.019-2.746c-0.916-1.439-1.438-2.353-1.438-36.475 c0-9.415,0.131-19.873,0.131-21.834c0-9.152,0.131-14.774,0.654-21.309c0.131-1.308,0.522-3.531,0.522-4.97 c0-0.914-0.522-1.437-1.307-1.437c-3.006,0-9.021,1.961-19.61,5.359c-2.353,0.654-2.615,0.785-2.615,2.484 c0,1.438,0.262,1.438,1.308,1.57c5.099,0.654,6.667,0.785,7.451,3.923c0.917,3.137,0.917,11.111,0.917,29.808 c0,16.602-0.131,28.107-0.654,36.997c-0.263,5.621-1.83,7.714-7.191,8.499c-2.092,0.263-2.353,0.263-2.353,1.961 s0.391,2.093,1.568,2.093c2.615,0,8.367-0.131,14.511-0.131c7.06,0,12.944,0.131,16.735,0.131c1.57,0,1.962-0.131,1.962-2.224 C355.902,250.505,355.64,250.245,354.332,250.245z"/> <path fill="#FFFFFF" d="M137.736,287.242c0-1.83,0-2.353-3.009-2.353c-7.451,0-8.236-1.83-8.368-15.557v-15.819 c2.747,0.654,6.278,1.437,10.983,1.437c17.649,0,33.599-12.028,33.599-30.984c0-15.296-10.329-26.408-23.271-26.408 c-6.668,0-13.075,2.221-20.787,5.49c0-0.914,0.522-5.359,0.522-6.406c0-0.654-0.394-0.914-1.83-0.914 c-1.57,0-3.662,1.176-4.316,1.568c-1.959,1.176-11.896,6.668-14.118,7.845c-1.83,1.176-2.093,1.308-2.093,3.006 c0,1.308,0.263,1.308,1.57,1.439c4.574,0.131,6.275,0.26,7.058,4.183c0.262,1.438,0.394,8.368,0.394,20.264 c0,8.368,0,40.137-0.785,45.235c-0.262,1.699-0.654,5.099-6.144,6.015c-2.355,0.391-2.355,0.391-2.355,2.09 c0,1.438,0.131,1.961,1.57,1.961c2.746,0,10.852-0.26,16.082-0.26c5.228,0,9.935,0.26,13.464,0.26 C137.474,289.334,137.736,289.074,137.736,287.242z M126.623,207.493c1.83-0.653,5.884-2.092,11.505-2.092 c14.512,0,20.133,13.466,20.133,23.664c0,4.185-0.785,10.329-5.099,14.511c-3.006,2.747-6.535,3.531-10.589,3.531 c-8.89,0-13.989-2.746-16.342-4.054C126.231,231.157,126.231,217.822,126.623,207.493z"/> <path fill="#FFFFFF" d="M251.851,197.296c-1.83,0-4.705,1.83-7.058,3.269c-3.922,2.484-8.236,5.49-12.028,8.236 c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.308-1.701-1.308c-1.567,0-1.961,0.263-5.49,2.353 c-2.615,1.57-9.021,4.708-11.114,5.622c-2.353,1.179-2.615,1.179-2.615,2.615c0,1.83,0.262,1.961,0.916,1.961 c1.308,0,4.708,0.522,5.49,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.392,14.511-0.654,16.602 c-0.522,4.185-1.568,5.492-5.228,6.406c-2.092,0.525-2.224,0.525-2.224,2.484c0,1.833,0.392,1.833,1.961,1.833 c2.746,0,9.021-0.263,13.466-0.263c6.144,0,12.55,0.263,16.342,0.263c1.438,0,1.83-0.263,1.83-2.224 c0-1.308-0.131-1.961-1.308-1.961s-2.353-0.131-3.269-0.26c-8.365-0.654-8.627-0.654-8.627-25.757c0-1.567,0-9.544,0.522-10.458 c0.262-0.654,5.752-4.838,10.72-4.838c3.009,0,4.314,1.701,5.884,4.053c1.045,1.699,1.438,1.83,1.83,1.83 c1.176,0,7.191-4.576,7.191-9.281C258.651,202.395,255.382,197.296,251.851,197.296z"/> <path fill="#FFFFFF" d="M204.27,249.983c-4.705-0.26-7.32-0.392-8.105-3.792c-0.654-2.615-0.654-16.473-0.654-20.395 c0-12.55,0.131-15.951,0.263-18.694c0.26-3.009,0.391-6.146,0.653-9.153c0-1.045-0.653-1.307-1.307-1.307 c-1.179,0-2.615,0.394-3.923,0.916c-4.967,1.961-9.938,3.922-14.774,6.013c-1.83,0.785-2.092,0.785-2.092,2.484 c0,1.701,0.394,1.701,1.961,1.961c6.668,0.917,6.668,2.615,6.668,15.69c0,23.139-0.131,25.101-7.714,26.277 c-2.224,0.394-2.353,0.394-2.353,2.353c0,1.438,0.392,1.833,1.308,1.833c2.875,0,7.451-0.263,15.948-0.263 c7.191,0,12.553,0.263,14.643,0.263c1.307,0,1.701-0.131,1.701-2.224C206.493,250.376,206.231,250.114,204.27,249.983z"/> <path fill="#FFFFFF" d="M190.281,181.085c3.792,0,7.845-3.922,7.845-7.714c0-3.66-4.185-7.452-7.452-7.452 c-3.269,0-7.845,3.66-7.845,7.843C182.83,177.423,186.752,181.085,190.281,181.085z"/> <path fill="#FFFFFF" d="M307.54,246.583c-3.4,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324 c0-3.006-0.394-6.929-2.747-9.804c-1.307-1.439-4.708-4.968-12.29-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.916,1.83,1.961,1.83c2.092,0,7.322-1.176,8.759-1.699c1.57-0.525,2.093-1.179,2.093-2.355 c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.131-1.308,1.439-1.83c2.877-1.045,6.144-1.176,7.451-1.176 c3.138,0,7.06,0.654,8.368,4.051c1.047,2.093,1.176,4.316,1.047,15.559c-8.63,0.914-16.866,2.484-22.619,4.314 c-7.189,2.353-10.329,3.922-10.329,12.419c0,5.361,1.833,13.206,12.159,13.206c7.977,0,16.735-4.054,20.658-5.752 c0.26,1.308,1.176,5.881,7.06,5.881c3.529,0,10.327-1.83,17.78-5.75c1.437-0.785,1.437-1.047,1.437-3.009l0.131-2.875l-0.654-0.263 C314.207,245.015,310.284,246.583,307.54,246.583z M290.414,243.576c-0.785,2.747-7.976,4.054-11.505,4.054 c-4.967,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.407-6.669c2.612-1.045,6.275-2.222,9.543-2.222 c2.484,0,3.529,1.177,3.529,3.923C290.805,235.994,290.805,242.269,290.414,243.576z"/> <path fill="#FFFFFF" d="M44.528,254.559c1.57,0,1.57-1.176,3.4-1.176c1.568,0,11.765,2.221,22.226,2.221 c12.419,0,18.434-3.006,22.485-5.881c4.838-3.531,8.89-9.938,8.89-18.043c0-14.773-12.288-20.133-24.709-25.494 c-12.55-5.49-19.348-8.367-19.348-17.649c0-7.583,5.359-13.466,15.034-13.466c3.922,0,9.152,1.047,13.075,3.922 c3.792,2.875,4.836,6.407,6.667,11.766c0.263,1.178,0.654,1.438,1.308,1.438c1.699,0,3.4-0.522,3.4-2.221 c0-0.654-0.785-7.323-0.785-10.066v-8.236c0-0.654-0.263-1.048-0.785-1.048c-0.262,0-0.785,0.131-1.438,0.263 c-0.522,0.26-1.045,0.392-1.437,0.392c-0.394,0-3.269-0.392-6.8-0.914c-3.66-0.394-7.974-0.785-11.634-0.785 c-21.18,0-29.808,10.982-29.808,23.14c0,13.989,10.852,18.827,23.008,24.187c12.812,5.621,19.61,8.63,19.61,18.042 c0,8.497-6.536,14.643-16.473,14.643c-5.359,0-12.419-1.57-17.387-5.361c-3.006-2.353-5.492-6.144-7.191-12.55 c-0.392-1.961-0.522-3.006-1.439-3.006c-3.791,0-3.791,2.222-3.791,3.138c0,1.439,0.785,12.55,2.092,21.178 C42.96,254.168,43.089,254.559,44.528,254.559z"/>',
                    title: "Spiral",
                    date: "december, twelve",
                    img: "data/poster/spiral",
                    itemcolor: "#efbb00",
                    bgcolor: "#ffae00",
                    preload: [],
                    white: 0,
                    browser: ["ch", "ff", "sf", "ie10"]
                }
            }, {
                poster: {
                    id: "pixelated",
                    classfn: ColorPixelated,
                    svg: '<path fill="#FFFFFF" d="M553.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,49.382,550.727,51.287,553.215,51.287z"/> <polygon fill="#FFFFFF" points="617.625,48.905 613.955,48.905 613.955,41.107 611.614,41.107 611.614,50.993 617.625,50.993 "/> <path fill="#FFFFFF" d="M595.893,49.27c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.398-1.05c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.421,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009 C597.623,48.948,596.585,49.27,595.893,49.27z"/> <polygon fill="#FFFFFF" points="611.109,49.045 606.095,49.045 606.095,46.693 610.391,46.693 610.391,44.817 606.095,44.817 606.095,43.026 610.696,43.026 610.696,41.107 603.754,41.107 603.754,50.993 611.109,50.993 "/> <polygon fill="#FFFFFF" points="580.053,50.993 583.312,41.107 580.811,41.107 578.884,48.136 576.94,41.107 574.44,41.107 577.66,50.993 "/> <polygon fill="#FFFFFF" points="565.743,77.025 565.743,75.107 558.801,75.107 558.801,84.993 566.154,84.993 566.154,83.045 561.142,83.045 561.142,80.695 565.438,80.695 565.438,78.817 561.142,78.817 561.142,77.025 "/> <path fill="#FFFFFF" d="M559.291,50.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,43.46l1.224,4.171h-2.382L561.461,43.46z"/> <polygon fill="#FFFFFF" points="568.643,45.084 571.969,50.993 574.269,50.993 574.269,41.107 572.021,41.107 572.021,47.127 568.682,41.107 566.381,41.107 566.381,50.993 568.643,50.993 "/> <path fill="#FFFFFF" d="M566.369,93.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H567.3C567.127,92.878,566.955,93.24,566.369,93.564z"/> <path fill="#FFFFFF" d="M559.973,92.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C563.164,95.944,562.858,92.345,559.973,92.345z M559.973,100.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C561.169,98.841,560.983,100.466,559.973,100.466z"/> <path fill="#FFFFFF" d="M552.311,75.107h-3.219v9.885h3.696c3.739,0,4.71-2.59,4.71-4.943 C557.498,76.802,555.941,75.107,552.311,75.107z M552.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C555.143,82.262,554.238,83.004,552.218,83.004z"/> <polygon fill="#FFFFFF" points="609.273,80.695 613.568,80.695 613.568,78.817 609.273,78.817 609.273,77.025 613.876,77.025 613.876,75.107 606.932,75.107 606.932,84.993 614.288,84.993 614.288,83.045 609.273,83.045 "/> <path fill="#FFFFFF" d="M603.208,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C605.577,80.484,604.113,79.993,603.208,79.91z M599.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M601.388,83.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C603.194,83.158,602.146,83.199,601.388,83.199z"/> <path fill="#FFFFFF" d="M575.545,82.737l-1.849-0.993c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249 c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25C573.457,85.287,574.801,84.11,575.545,82.737z"/> <path fill="#FFFFFF" d="M577.834,95.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C576.983,98.143,577.834,96.882,577.834,95.229z"/> <path fill="#FFFFFF" d="M589.004,49.41l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886h2.5l0.466-1.583H589.004z M587.249,43.46l1.224,4.171h-2.382L587.249,43.46z"/> <polygon fill="#FFFFFF" points="579.069,80.695 583.365,80.695 583.365,78.817 579.069,78.817 579.069,77.025 583.67,77.025 583.67,75.107 576.728,75.107 576.728,84.993 584.084,84.993 584.084,83.045 579.069,83.045 "/> <path fill="#FFFFFF" d="M590.521,82.025l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.033l1.957-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.262v-9.885h-3.432L590.521,82.025z"/> <polygon fill="#FFFFFF" points="650.902,47.127 647.564,41.107 645.264,41.107 645.264,50.993 647.523,50.993 647.523,45.084 650.849,50.993 653.149,50.993 653.149,41.107 650.902,41.107 "/> <polygon fill="#FFFFFF" points="639.758,46.693 644.053,46.693 644.053,44.817 639.758,44.817 639.758,43.026 644.358,43.026 644.358,41.107 637.416,41.107 637.416,50.993 644.771,50.993 644.771,49.045 639.758,49.045 "/> <path fill="#FFFFFF" d="M555.41,95.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C554.559,98.143,555.41,96.882,555.41,95.229z"/> <polygon fill="#FFFFFF" points="653.428,41.107 653.428,43.053 655.875,43.053 655.875,50.993 658.243,50.993 658.243,43.053 660.678,43.053 660.678,41.107 "/> <polygon fill="#FFFFFF" points="554.344,58.107 552.455,58.107 548.413,67.993 550.302,67.993 "/> <path fill="#FFFFFF" d="M631.152,48.023l-1.77-6.916h-3.432v9.886h2.287c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.035l1.955-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432L631.152,48.023z"/> <path fill="#FFFFFF" d="M623.559,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C622.653,80.666,623.559,79.993,623.559,78.312z M619.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C621.217,78.566,621.151,79.629,619.808,79.629z"/> <polygon fill="#FFFFFF" points="620.432,46.693 624.728,46.693 624.728,44.817 620.432,44.817 620.432,43.026 625.033,43.026 625.033,41.107 618.091,41.107 618.091,50.993 625.445,50.993 625.445,49.045 620.432,49.045 "/> <path fill="#FFFFFF" d="M78.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C115.757,848.859,101.178,832.021,78.091,832.021z M78.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C100.655,905.274,99.441,940.163,78.091,940.163z"/> <path fill="#FFFFFF" d="M205.489,902.842c-0.869,0-4.687,0.175-12.498,0.175h-4.167c0-27.772,0-35.583,0.174-51.729l0.174-17.356 c0-0.695-0.695-0.869-3.646-1.562l-1.561-0.349c-2.43,3.124-28.641,35.932-45.826,56.936c-3.47,4.165-9.026,10.761-12.324,14.928 c-0.869,1.215-0.869,2.604-0.869,7.117c0,1.215,0.348,1.561,1.389,1.561c7.291,0,41.659-0.346,49.47-0.346 c-0.172,3.298-0.694,24.822-0.694,30.203c0,1.735,0.349,1.909,1.043,1.909s2.95-0.174,6.422-0.174c1.91,0,4.513,0.174,5.382,0.174 c1.389,0,1.389-0.522,1.389-1.562c0-4.339-0.348-25.691-0.522-30.55h14.408c1.042,0,2.083,0,2.083-0.521 c0.348-3.473,0.869-5.382,0.869-7.291C206.184,903.711,206.184,902.842,205.489,902.842z M175.805,903.19 c-14.579,0.175-33.674,0-41.831,0c3.298-3.646,29.335-35.757,41.831-52.422V903.19z"/> <path fill="#FFFFFF" d="M187.711,254.168c2.615,0,8.368-0.131,14.512-0.131c7.06,0,12.944,0.131,16.735,0.131 c1.57,0,1.961-0.131,1.961-2.224c0-1.439-0.263-1.699-1.57-1.699c-5.228-0.522-7.843-0.654-9.019-2.746 c-0.917-1.439-1.439-2.353-1.439-36.475c0-9.415,0.131-19.873,0.131-21.834c0-9.152,0.131-14.774,0.654-21.309 c0.131-1.308,0.522-3.531,0.522-4.97c0-0.914-0.522-1.437-1.308-1.437c-3.006,0-9.021,1.961-19.61,5.359 c-2.353,0.654-2.615,0.785-2.615,2.484c0,1.438,0.262,1.438,1.307,1.57c5.099,0.654,6.667,0.785,7.452,3.923 c0.916,3.137,0.916,11.111,0.916,29.808c0,16.602-0.131,28.107-0.654,36.997c-0.262,5.621-1.83,7.714-7.191,8.499 c-2.093,0.263-2.353,0.263-2.353,1.961S186.535,254.168,187.711,254.168z"/> <path fill="#FFFFFF" d="M249.675,255.473c17.52,0,32.946-11.374,32.946-29.937c0-13.729-9.544-27.978-28.892-27.978 c-18.174,0-32.945,10.98-32.945,29.286C220.783,245.669,234.118,255.473,249.675,255.473z M249.544,203.18 c10.851,0,19.087,12.027,19.087,27.324c0,13.072-6.667,19.348-14.771,19.348c-9.415,0-19.088-9.413-19.088-27.715 C234.772,209.586,241.701,203.18,249.544,203.18z"/> <path fill="#FFFFFF" d="M263.401,329.444c-0.785-0.26-0.916-0.522-1.57-3.269c-1.83-7.189-9.15-14.118-19.742-14.118 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.316,26.146,23.141,26.146c13.727,0,24.972-8.891,24.972-10.458 c0-0.262,0-0.262-0.262-1.308l-0.523-1.961h-0.785c-7.06,5.23-14.12,5.23-15.557,5.23c-15.69,0-17.389-16.082-17.78-20.396 c12.55-2.484,20.133-3.922,32.814-5.884c3.269-0.522,3.529-0.654,3.529-2.744C264.315,330.36,264.315,329.707,263.401,329.444z M244.705,332.844c-6.535,1.699-10.327,2.615-16.996,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C249.281,330.621,248.89,331.799,244.705,332.844z"/> <path fill="#FFFFFF" d="M522.482,363.96c-2.615,0-3.531-1.439-3.923-4.054c-0.522-3.529-0.522-16.996-0.522-19.217 c0-15.037,0-42.752,1.176-57.132c0-1.047,0.654-6.146,0.654-6.8c0-0.392,0-1.045-1.57-1.045c-0.391,0-0.782,0-2.09,0.522 c-3.791,1.57-11.637,4.968-15.819,6.929c-2.224,1.047-2.485,1.176-2.485,2.877c0,1.699,0.262,1.699,3.008,1.83 c4.445,0.131,5.49,1.438,5.229,26.017c-3.007-0.654-6.145-1.438-10.85-1.438c-19.612,0-33.861,13.727-33.861,31.769 c0,15.165,10.066,25.625,23.139,25.625c8.107,0,15.821-3.792,20.92-6.275c0.261,4.574,0.261,5.881,0.783,6.929 c0.522,1.176,1.701,1.568,2.746,1.568c3.269,0,15.165-3.4,19.219-4.705c2.484-0.785,2.484-0.917,2.484-2.877v-1.961 c-1.048,0-1.308,0-3.531,0.785C526.533,363.437,524.312,363.96,522.482,363.96z M505.616,348.794c0,6.929-0.13,7.583-0.13,10.458 c-3.53,1.83-7.453,2.746-11.505,2.746c-7.191,0-19.35-4.968-19.35-24.187c0-12.29,5.884-18.826,16.081-18.826 c5.23,0,14.12,2.09,14.903,9.413C505.878,329.707,505.616,345.917,505.616,348.794z"/> <path fill="#FFFFFF" d="M299.606,364.745c-5.23-0.525-7.845-0.654-9.021-2.746c-0.916-1.439-1.439-2.353-1.439-36.477 c0-9.413,0.131-19.871,0.131-21.832c0-9.152,0.131-14.774,0.654-21.312c0.131-1.305,0.522-3.529,0.522-4.967 c0-0.914-0.522-1.437-1.308-1.437c-3.006,0-9.021,1.959-19.61,5.359c-2.353,0.654-2.615,0.785-2.615,2.484 c0,1.438,0.262,1.438,1.308,1.57c5.099,0.654,6.668,0.783,7.451,3.922c0.917,3.138,0.917,11.112,0.917,29.808 c0,16.602-0.131,28.107-0.654,36.997c-0.263,5.622-1.83,7.714-7.191,8.499c-2.09,0.26-2.353,0.26-2.353,1.961 c0,1.699,0.391,2.09,1.57,2.09c2.615,0,8.365-0.129,14.512-0.129c7.06,0,12.941,0.129,16.732,0.129c1.57,0,1.961-0.129,1.961-2.222 C301.174,365.005,300.914,364.745,299.606,364.745z"/> <path fill="#FFFFFF" d="M354.38,361.082c-3.4,0-4.445-2.221-4.445-6.929c0-3.791,0.653-23.008,0.653-27.324 c0-3.006-0.394-6.929-2.746-9.804c-1.308-1.439-4.708-4.968-12.29-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.916,1.83,1.961,1.83c2.092,0,7.322-1.176,8.759-1.699c1.57-0.525,2.093-1.179,2.093-2.355c0-0.522-0.26-2.615-0.26-3.006 c0-0.654,0.129-1.308,1.436-1.83c2.878-1.045,6.146-1.176,7.454-1.176c3.138,0,7.058,0.654,8.365,4.051 c1.047,2.093,1.176,4.316,1.047,15.559c-8.63,0.914-16.867,2.484-22.619,4.314c-7.189,2.353-10.327,3.922-10.327,12.419 c0,5.361,1.83,13.207,12.157,13.207c7.977,0,16.735-4.054,20.658-5.753c0.26,1.308,1.176,5.882,7.06,5.882 c3.529,0,10.327-1.83,17.781-5.753c1.437-0.783,1.437-1.045,1.437-3.006l0.131-2.875l-0.654-0.262 C361.046,359.515,357.123,361.082,354.38,361.082z M337.253,358.076c-0.785,2.746-7.976,4.054-11.505,4.054 c-4.968,0-7.583-1.83-7.583-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.221,9.544-2.221c2.484,0,3.529,1.176,3.529,3.922 C337.645,350.493,337.645,356.769,337.253,358.076z"/> <path fill="#FFFFFF" d="M320.133,251.944c0-1.308-0.129-1.961-1.308-1.961c-1.176,0-2.353-0.131-3.267-0.26 c-8.368-0.654-8.63-0.654-8.63-25.757c0-1.567,0-9.544,0.522-10.458c0.263-0.654,5.753-4.838,10.723-4.838 c3.006,0,4.314,1.701,5.881,4.053c1.047,1.699,1.439,1.83,1.83,1.83c1.176,0,7.191-4.576,7.191-9.281 c0-2.877-3.269-7.976-6.798-7.976c-1.83,0-4.708,1.83-7.06,3.269c-3.922,2.484-8.236,5.49-12.028,8.236 c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.308-1.701-1.308c-1.567,0-1.959,0.263-5.49,2.353 c-2.615,1.57-9.021,4.708-11.112,5.622c-2.355,1.179-2.615,1.179-2.615,2.615c0,1.83,0.26,1.961,0.914,1.961 c1.308,0,4.708,0.522,5.493,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.394,14.511-0.654,16.602 c-0.525,4.185-1.57,5.492-5.23,6.406c-2.093,0.525-2.224,0.525-2.224,2.484c0,1.833,0.394,1.833,1.961,1.833 c2.746,0,9.021-0.263,13.466-0.263c6.144,0,12.55,0.263,16.342,0.263C319.742,254.168,320.133,253.905,320.133,251.944z"/> <path fill="#FFFFFF" d="M404.965,313.494c-0.916-0.129-18.565,0-20.786,0c0-1.568,0.653-10.066,0.653-10.195 c0-0.785-0.394-1.047-1.569-1.047c-1.568,0-1.83,0.262-3.923,2.615c-3.529,3.923-8.236,7.845-12.941,11.243 c-1.701,1.308-1.83,1.439-1.83,2.615c0,1.439,0.129,1.701,0.522,1.83h6.275c-0.132,3.791-0.785,30.855-0.785,33.339 c0,4.705,0,15.95,13.204,15.95c7.976,0,16.344-4.185,18.956-5.493c2.355-1.176,2.355-1.308,2.355-3.006v-2.484h-1.308 c-2.224,1.045-5.493,2.615-10.329,2.615c-10.066,0-10.066-6.407-10.066-14.251c0-7.189,0-8.759,0.131-13.989 c0.132-1.437,0.392-12.288,0.392-12.55h19.351c0.653,0,1.961,0,2.221-0.26c0.263-0.394,0.263-3.009,0.263-3.663 C405.75,313.888,405.75,313.494,404.965,313.494z"/> <path fill="#FFFFFF" d="M455.946,329.444c-0.785-0.26-0.916-0.522-1.569-3.269c-1.83-7.189-9.153-14.118-19.742-14.118 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.142,26.146c13.727,0,24.97-8.891,24.97-10.458 c0-0.262,0-0.262-0.261-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.553-2.484,20.136-3.922,32.816-5.884c3.27-0.522,3.529-0.654,3.529-2.744C456.86,330.36,456.86,329.707,455.946,329.444z M437.25,332.844c-6.537,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088c6.406,0,10.72,7.191,10.72,11.768 C441.826,330.621,441.433,331.799,437.25,332.844z"/> <path fill="#FFFFFF" d="M138.824,287.871c0-3.66-4.183-7.452-7.452-7.452c-3.269,0-7.845,3.66-7.845,7.843 c0,3.66,3.922,7.323,7.451,7.323C134.771,295.585,138.824,291.662,138.824,287.871z"/> <path fill="#FFFFFF" d="M213.599,364.613c-2.222-0.262-3.398-0.394-4.836-1.307c-3.269-2.093-14.512-19.088-18.565-25.103 c5.49-5.75,17.912-18.432,21.963-20.393c1.438-0.654,2.223-1.047,2.223-2.484c0-1.832-0.522-1.832-1.57-1.832 c-2.613,0-5.49,0.262-8.759,0.262c-3.66,0-7.32-0.262-10.066-0.262c-1.439,0-1.568,0.524-1.568,2.092c0,1.439,0.654,1.83,1.437,1.83 c3.269,0.131,5.23,0.262,5.23,2.355c0,2.613-8.499,11.503-11.505,14.641c-2.484-3.792-6.406-9.542-7.32-11.112 c-0.785-1.308-1.57-2.615-1.57-3.792c0-1.699,1.047-1.83,4.185-2.353c1.176-0.131,1.307-0.262,1.307-1.83 c0-1.832-0.262-1.961-1.438-1.961c-3.922,0-7.977,0.391-11.896,0.391c-4.185,0-8.236-0.391-12.421-0.391 c-1.568,0-1.83,0.26-1.83,2.09c0,1.047,0.131,1.307,0.916,1.57c2.875,0.914,3.138,1.045,4.183,1.83 c2.484,1.961,7.32,9.021,17.127,23.401c-3.138,3.269-11.374,11.896-15.688,16.213c-2.746,2.744-4.968,4.967-7.454,5.75 c-2.222,0.785-2.484,0.917-2.484,2.877c0,1.568,0.525,1.568,2.224,1.568c2.875,0,7.32-0.26,10.198-0.26 c3.269,0,6.013,0.26,9.281,0.26c1.439,0,1.701-0.26,1.701-2.09c0-1.438-0.131-1.701-1.308-1.83c-5.23-0.525-5.884-0.525-5.884-2.484 c0-1.701,1.961-4.054,2.353-4.576c1.57-2.092,1.83-2.353,9.807-11.374c1.699,2.615,9.935,14.643,9.935,16.473 s-1.699,1.83-4.708,2.09c-1.567,0-1.699,0.131-1.699,2.224c0,1.176,0.262,1.568,1.308,1.568c2.092,0,6.144-0.26,14.774-0.26 c6.144,0,9.804,0.26,11.765,0.26c1.308,0,1.83-0.129,1.83-2.09C214.775,365.136,214.646,364.745,213.599,364.613z"/> <path fill="#FFFFFF" d="M151.375,255.473c17.52,0,32.945-11.374,32.945-29.937c0-13.729-9.542-27.978-28.892-27.978 c-18.172,0-32.946,10.98-32.946,29.286C122.482,245.669,135.818,255.473,151.375,255.473z M151.246,203.18 c10.849,0,19.088,12.027,19.088,27.324c0,13.072-6.669,19.348-14.774,19.348c-9.413,0-19.088-9.413-19.088-27.715 C136.472,209.586,143.4,203.18,151.246,203.18z"/> <path fill="#FFFFFF" d="M115.945,364.482c-2.222,0.391-2.353,0.391-2.353,2.353c0,1.438,0.392,1.83,1.308,1.83 c2.875,0,7.452-0.26,15.95-0.26c7.189,0,12.55,0.26,14.643,0.26c1.308,0,1.699-0.129,1.699-2.222c0-1.57-0.263-1.83-2.224-1.961 c-4.706-0.263-7.32-0.392-8.105-3.792c-0.654-2.615-0.654-16.473-0.654-20.396c0-12.55,0.131-15.95,0.263-18.694 c0.26-3.009,0.391-6.146,0.654-9.152c0-1.045-0.654-1.308-1.308-1.308c-1.176,0-2.615,0.394-3.922,0.916 c-4.968,1.961-9.936,3.922-14.774,6.013c-1.83,0.785-2.09,0.785-2.09,2.484c0,1.701,0.391,1.701,1.959,1.961 c6.668,0.916,6.668,2.615,6.668,15.688C123.659,361.345,123.528,363.306,115.945,364.482z"/> <path fill="#FFFFFF" d="M58.824,368.536c12.812,0,17.518,0.26,18.565,0.26c1.045,0,1.307-0.26,1.307-2.221 c0-1.83-0.262-1.83-1.83-1.83c-5.624-0.262-8.499-0.394-9.675-3.663c-1.308-3.66-1.57-18.04-1.57-25.363 c2.092,0.263,4.838,0.394,8.499,0.394c23.793,0,35.298-12.291,35.298-26.54c0-8.107-3.792-14.514-8.759-18.565 c-4.314-3.269-10.066-6.015-23.142-6.015c-6.667,0-11.896,0.525-21.309,0.525c-4.445,0-10.067-0.131-13.335-0.131 c-1.699,0-1.961,0.131-1.961,1.83c0,2.092,0,2.092,1.439,2.221c5.621,0.394,8.105,0.654,8.89,3.792 c1.045,4.054,0.785,41.182,0.654,46.152c-0.394,20.655-0.785,24.187-9.021,25.231c-2.353,0.392-2.615,0.392-2.615,2.353 c0,0.917,0,1.83,1.048,1.83C42.743,368.796,44.704,368.536,58.824,368.536z M66.145,292.054c0.131-1.308,0.262-2.353,7.322-2.353 c4.052,0,10.589,0.785,14.774,4.968c4.706,4.707,5.622,11.374,5.622,15.819c0,12.159-7.191,20.918-21.834,20.918 c-2.484,0-4.705-0.26-6.275-0.392c0-0.654-0.131-7.322-0.131-14.905C65.622,306.174,65.753,294.538,66.145,292.054z"/> <path fill="#FFFFFF" d="M55.164,246.191c9.675,7.583,22.094,9.413,32.292,9.413c9.544,0,20.264-1.436,24.709-3.269 c1.045-0.391,1.176-0.914,2.353-4.968c0.263-1.437,3.009-10.851,3.009-10.98c0-1.179-2.615-1.439-3.138-1.439 c-0.394,0-0.785,0.131-1.308,0.914c-4.054,6.275-9.284,14.251-24.58,14.251c-17.387,0-32.161-12.55-32.161-38.698 c0-24.187,13.466-35.952,30.984-35.952c5.493,0,13.335,1.045,17.389,3.792c2.221,1.307,4.576,3.66,5.49,11.634 c0.394,3.137,0.916,3.531,3.006,3.531c1.438,0,1.961-0.262,1.961-1.438c0.263-4.314,0.394-6.929,1.047-12.29 c0.129-1.568,1.437-7.843,1.437-9.282c0-0.522-0.914-0.785-1.961-0.785c-0.914,0-2.221,0.917-3.006,0.785 c-7.583-0.785-15.165-1.83-22.879-1.83c-34.907,0-49.287,21.31-49.287,43.535C40.521,221.351,42.483,236.388,55.164,246.191z"/>',
                    title: "Color Pixelated",
                    date: "december, twelve",
                    img: "data/poster/pixel",
                    itemcolor: "#ffc800",
                    bgcolor: "#111",
                    preload: ["contents/pixelated/gogh0.jpg"],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }, {
                poster: {
                    id: "universe",
                    classfn: Panorama,
                    svg: '<polygon fill="#FFFFFF" points="623.414,50.993 625.755,50.993 625.755,47.002 630.236,47.002 630.236,45.084 625.755,45.084 625.755,43.012 630.623,43.012 630.623,41.107 623.414,41.107 "/> <path fill="#FFFFFF" d="M649.562,44.313c0-2.828-2.208-3.206-3.605-3.206h-4.44v9.886h2.365v-3.529h1.464l1.876,3.529h2.58 l-2.169-3.95C648.656,46.666,649.562,45.994,649.562,44.313z M645.811,45.629h-1.942v-2.687h1.956c0.412,0,1.396,0.027,1.396,1.316 C647.221,44.566,647.154,45.629,645.811,45.629z"/> <path fill="#FFFFFF" d="M558.498,80.05c0-3.248-1.557-4.942-5.188-4.942h-3.219v9.885h3.696 C557.527,84.993,558.498,82.402,558.498,80.05z M553.218,83.004h-0.76v-5.812h1.158c2.047,0,2.526,1.29,2.526,2.828 C556.143,82.262,555.238,83.004,553.218,83.004z"/> <path fill="#FFFFFF" d="M552.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C554.177,96.77,553.405,97.568,552.34,98.547z"/> <path fill="#FFFFFF" d="M569.924,101.993v-9.494H568.3c-0.173,0.38-0.345,0.742-0.931,1.065c-0.492,0.265-0.945,0.308-1.49,0.351 v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931H569.924z"/> <path fill="#FFFFFF" d="M554.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C549.719,49.382,551.727,51.287,554.215,51.287z"/> <path fill="#FFFFFF" d="M572.661,76.829c0.959,0,1.796,0.771,1.995,1.513l1.861-0.979c-0.665-1.486-2.232-2.562-3.963-2.562 c-2.66,0-4.55,2.31-4.55,5.236c0,3.346,2.009,5.25,4.497,5.25c1.955,0,3.299-1.176,4.043-2.549l-1.849-0.993 c-0.318,0.575-0.812,1.471-2.035,1.471c-1.263,0-2.314-1.079-2.314-3.249C570.347,78.312,571.146,76.829,572.661,76.829z"/> <path fill="#FFFFFF" d="M571.557,49.27c-1.011,0-2.088-0.448-2.712-1.247l-1.782,1.192c0.956,1.174,2.087,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.077,0.153c0.84,0.113,1.638,0.308,1.638,1.009 C573.287,48.948,572.249,49.27,571.557,49.27z"/> <path fill="#FFFFFF" d="M562.78,49.27c-1.012,0-2.089-0.448-2.715-1.247l-1.78,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.457-2.841l-1.038-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.916-0.923-2.153-1.875-4.135-1.875 c-2.423,0-3.792,1.357-3.792,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.84,0.113,1.636,0.308,1.636,1.009 C564.508,48.948,563.472,49.27,562.78,49.27z"/> <polygon fill="#FFFFFF" points="555.344,58.107 553.455,58.107 549.413,67.993 551.302,67.993 "/> <polygon fill="#FFFFFF" points="567.154,83.045 562.142,83.045 562.142,80.695 566.438,80.695 566.438,78.817 562.142,78.817 562.142,77.025 566.743,77.025 566.743,75.107 559.801,75.107 559.801,84.993 567.154,84.993 "/> <path fill="#FFFFFF" d="M560.894,102.203c2.592,0,3.271-2.76,3.271-4.916c0-1.343-0.306-4.942-3.191-4.942 c-2.208,0-3.206,2.156-3.206,4.832C557.767,100.242,558.765,102.203,560.894,102.203z M560.945,94.096 c0.984,0,1.224,1.681,1.224,3.221c0,1.524-0.186,3.149-1.196,3.149c-1.077,0-1.237-1.735-1.237-2.828 C559.748,95.482,560.002,94.096,560.945,94.096z"/> <path fill="#FFFFFF" d="M635.663,40.8c-3.394,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C640.425,43.768,639.081,40.8,635.663,40.8z M635.701,49.186c-1.688,0-2.366-1.624-2.366-3.206 c0-1.33,0.546-3.108,2.328-3.108c1.663,0,2.407,1.427,2.407,3.219C638.07,47.478,637.445,49.186,635.701,49.186z"/> <path fill="#FFFFFF" d="M657.516,41.107l-1.744,6.916l-1.77-6.916h-3.432v9.886h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393 h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886H657.516z"/> <path fill="#FFFFFF" d="M589.593,47.464h1.461l1.876,3.529h2.434h0.147h2.354l0.464-1.583h3.459l0.466,1.583h2.5l-3.457-9.886 h-2.447l-3.429,9.722l-2.077-3.786c1.022-0.378,1.927-1.05,1.927-2.73c0-2.828-2.208-3.206-3.604-3.206h-4.442v9.886h2.368V47.464z M600.032,43.46l1.224,4.171h-2.382L600.032,43.46z M589.579,42.942h1.954c0.412,0,1.396,0.027,1.396,1.316 c0,0.308-0.066,1.371-1.409,1.371h-1.941V42.942z"/> <polygon fill="#FFFFFF" points="613.2,50.993 613.2,41.107 610.951,41.107 610.951,47.127 607.613,41.107 605.312,41.107 605.312,50.993 607.574,50.993 607.574,45.084 610.897,50.993 "/> <path fill="#FFFFFF" d="M624.559,78.312c0-2.828-2.208-3.205-3.606-3.205h-4.442v9.885h2.368v-3.529h1.464l1.875,3.529h2.581 l-2.169-3.95C623.653,80.666,624.559,79.993,624.559,78.312z M620.808,79.629h-1.943v-2.687h1.957c0.412,0,1.396,0.027,1.396,1.316 C622.217,78.566,622.151,79.629,620.808,79.629z"/> <path fill="#FFFFFF" d="M618.36,49.27c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.088,2.002,4.284,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.198-0.38-1.198-0.912 c0-0.462,0.44-1.05,1.397-1.05c1.012,0,1.783,0.491,2.461,1.233l1.729-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.342,2.549,2.993,2.787l1.077,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C620.088,48.948,619.05,49.27,618.36,49.27z"/> <path fill="#FFFFFF" d="M604.208,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.851-2.59-3.325-2.59h-4.375v9.885h4.602 c1.916,0,3.459-0.952,3.459-2.773C606.577,80.484,605.113,79.993,604.208,79.91z M600.749,76.955h1.93 c0.453,0,1.237,0.043,1.237,0.993c0,1.022-0.891,1.065-1.396,1.065h-1.771V76.955z M602.388,83.199h-1.639v-2.393h2.022 c0.479,0,1.423,0.027,1.423,1.219C604.194,83.158,603.146,83.199,602.388,83.199z"/> <path fill="#FFFFFF" d="M596.695,84.993v-9.885h-3.432l-1.743,6.917l-1.77-6.917h-3.432v9.885h2.289c0,0-0.014-6.008-0.054-7.393 l1.943,7.393h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393H596.695z"/> <polygon fill="#FFFFFF" points="581.771,50.993 584.139,50.993 584.139,43.053 586.572,43.053 586.572,41.107 579.325,41.107 579.325,43.053 581.771,43.053 "/> <polygon fill="#FFFFFF" points="585.084,83.045 580.069,83.045 580.069,80.695 584.365,80.695 584.365,78.817 580.069,78.817 580.069,77.025 584.67,77.025 584.67,75.107 577.728,75.107 577.728,84.993 585.084,84.993 "/> <polygon fill="#FFFFFF" points="610.273,80.695 614.568,80.695 614.568,78.817 610.273,78.817 610.273,77.025 614.876,77.025 614.876,75.107 607.932,75.107 607.932,84.993 615.288,84.993 615.288,83.045 610.273,83.045 "/> <path fill="#FFFFFF" d="M574.765,98.547c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.483-3.373,3.483-5.026c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 C576.599,96.77,575.828,97.568,574.765,98.547z"/> <path fill="#FFFFFF" d="M79.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C116.757,848.859,102.178,832.021,79.091,832.021z M79.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C101.655,905.274,100.441,940.163,79.091,940.163z"/> <path fill="#FFFFFF" d="M184.444,882.187c-6.596-4.167-13.192-4.339-18.574-4.339c8.68-5.207,21.352-12.498,21.352-25.864 c0-9.893-7.811-19.962-22.913-19.962c-21.698,0-34.369,19.441-34.369,20.136c0,1.215,2.604,2.604,3.47,2.604 c1.043,0,1.389-0.346,2.257-2.604c1.91-4.165,11.63-9.721,20.31-9.721c5.033,0,16.143,2.778,16.143,16.317 c0,7.29-2.083,15.102-27.774,26.731c-2.775,1.215-3.124,1.389-3.124,2.257c0,0.692,1.043,3.296,2.083,3.296 c1.563,0,6.076-4.338,14.753-4.338c14.582,0,22.567,11.283,22.567,24.476c0,10.415-5.556,27.946-24.128,27.946 c-6.422,0-15.796-2.604-19.789-11.283c-1.389-2.952-2.083-4.513-4.859-4.513c-2.257,0-7.639,2.255-7.639,6.768 c0,4.167,4.513,15.797,24.997,15.797c23.085,0,47.041-15.622,47.041-39.75C196.248,896.769,192.602,887.395,184.444,882.187z"/> <path fill="#FFFFFF" d="M533.073,364.482c-6.406-0.131-7.582-1.308-7.714-6.013v-23.533c0-10.066-0.782-13.989-4.313-17.78 c-2.875-3.138-7.451-4.838-12.027-4.838c-8.76,0-19.349,6.406-23.271,8.759c-2.093-5.881-7.583-8.759-13.598-8.759 c-7.843,0-14.771,4.314-23.008,9.413c0-1.437,0.653-8.105,0.653-9.281c0-0.914-0.524-1.177-1.961-1.177 c-1.308,0-1.962,0.131-3.663,0.914c-9.544,4.445-10.589,4.97-14.38,6.931c-1.83,0.914-1.961,1.045-1.961,2.744 c0,1.701,0.131,1.701,2.746,1.701c4.836,0,5.752,1.177,5.752,10.458v21.049c0,7.452-2.614,8.628-6.146,9.282 c-2.222,0.394-2.353,0.394-2.353,2.484c0,1.438,0.131,1.83,1.308,1.83c2.092,0,12.027-0.26,14.251-0.26 c1.83,0,10.852,0.26,12.811,0.26c2.092,0,2.224-0.129,2.224-2.09c0-1.307-0.132-1.701-1.177-1.961 c-1.438-0.262-2.877-0.394-4.707-0.522c-2.875-0.394-3.529-2.224-3.529-19.088c0-8.759,0.132-17.78,0.261-18.303 c0.394-1.438,8.498-5.099,14.251-5.099c10.982,0,10.982,8.628,10.982,23.401c0,3.923,0,12.028-0.916,15.557 c-0.916,2.877-3.138,3.4-5.49,3.792c-1.83,0.394-2.093,0.394-2.093,2.355c0,1.699,0.392,1.959,1.308,1.959 c1.962,0,11.766-0.26,13.989-0.26c1.961,0,11.505,0.26,13.727,0.26c1.047,0,1.57,0,1.57-2.09c0-1.176-0.263-1.701-1.048-1.83 c-1.045-0.131-2.09-0.262-3.529-0.394c-4.576-0.522-4.836-1.437-4.836-19.348c-0.131-4.054,0-9.021,0-15.165 c0-3.009-0.131-4.708,1.045-5.23c4.837-2.746,9.152-3.269,11.766-3.269c12.682,0,12.682,9.807,12.682,23.795 c0,16.996-1.177,17.909-6.013,19.348c-2.484,0.654-2.484,0.654-2.484,2.224c0,1.83,0.261,1.959,1.699,1.959 c2.877,0,8.236-0.26,14.251-0.26c6.145,0,10.198,0.26,13.204,0.26c1.699,0,1.83-0.26,1.83-2.222 C535.166,364.745,535.035,364.482,533.073,364.482z"/> <path fill="#FFFFFF" d="M284.308,312.058c-18.174,0-32.945,10.98-32.945,29.286c0,18.825,13.335,28.629,28.892,28.629 c17.518,0,32.945-11.374,32.945-29.937C313.2,326.307,303.656,312.058,284.308,312.058z M284.437,364.351 c-9.413,0-19.088-9.413-19.088-27.715c0-12.55,6.931-18.957,14.774-18.957c10.852,0,19.088,12.028,19.088,27.324 C299.211,358.076,292.544,364.351,284.437,364.351z"/> <path fill="#FFFFFF" d="M122.607,344.218c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.207,12.159,13.207 c7.974,0,16.735-4.054,20.656-5.753c0.262,1.308,1.178,5.882,7.06,5.882c3.531,0,10.329-1.83,17.78-5.753 c1.438-0.783,1.438-1.045,1.438-3.006l0.131-2.875l-0.654-0.262c-2.484,1.438-6.406,3.006-9.152,3.006 c-3.398,0-4.445-2.221-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324c0-3.006-0.391-6.929-2.744-9.804 c-1.307-1.439-4.707-4.968-12.29-4.968c-17.126,0-28.5,11.896-28.5,16.473c0,1.176,0.914,1.83,1.961,1.83 c2.09,0,7.32-1.176,8.759-1.699c1.568-0.525,2.093-1.179,2.093-2.355c0-0.522-0.263-2.615-0.263-3.006 c0-0.654,0.131-1.308,1.439-1.83c2.875-1.045,6.144-1.176,7.451-1.176c3.138,0,7.06,0.654,8.368,4.051 c1.045,2.093,1.176,4.316,1.045,15.559C136.596,340.818,128.36,342.388,122.607,344.218z M144.57,358.076 c-0.785,2.746-7.974,4.054-11.505,4.054c-4.968,0-7.583-1.83-7.583-8.89c0-2.353,0-4.054,6.406-6.669 c2.615-1.045,6.275-2.221,9.544-2.221c2.484,0,3.531,1.176,3.531,3.922C144.964,350.493,144.964,356.769,144.57,358.076z"/> <path fill="#FFFFFF" d="M77.774,368.796c1.045,0,1.307-0.26,1.307-2.221c0-1.83-0.262-1.83-1.83-1.83 c-5.621-0.262-8.499-0.394-9.675-3.663c-1.308-3.66-1.568-18.04-1.568-25.363c2.09,0.263,4.836,0.394,8.497,0.394 c23.795,0,35.3-12.291,35.3-26.54c0-8.107-3.791-14.514-8.761-18.565c-4.313-3.269-10.066-6.015-23.139-6.015 c-6.668,0-11.896,0.525-21.312,0.525c-4.445,0-10.066-0.131-13.335-0.131c-1.699,0-1.959,0.131-1.959,1.83 c0,2.092,0,2.092,1.437,2.221c5.621,0.394,8.107,0.654,8.89,3.792c1.047,4.054,0.785,41.182,0.654,46.152 c-0.392,20.655-0.783,24.187-9.021,25.231c-2.353,0.392-2.613,0.392-2.613,2.353c0,0.917,0,1.83,1.045,1.83 c1.439,0,3.4-0.26,17.518-0.26C72.021,368.536,76.729,368.796,77.774,368.796z M66.531,292.054c0.131-1.308,0.26-2.353,7.32-2.353 c4.054,0,10.591,0.785,14.774,4.968c4.708,4.707,5.622,11.374,5.622,15.819c0,12.159-7.191,20.918-21.832,20.918 c-2.486,0-4.707-0.26-6.277-0.392c0-0.654-0.129-7.322-0.129-14.905C66.009,306.174,66.138,294.538,66.531,292.054z"/> <path fill="#FFFFFF" d="M49.011,181.085c0.654,3.529,0.654,12.681,0.654,37.128c0,13.075,0,20.917,6.277,27.978 c7.058,7.977,18.563,9.544,27.453,9.544c15.428,0,23.533-5.359,27.586-9.281c8.759-8.759,8.89-18.303,9.15-36.477 c0.394-30.199,0.525-33.468,8.107-34.775c2.613-0.522,2.875-0.522,2.875-2.484c0-1.308-0.131-1.83-1.439-1.83 c-1.961,0-11.634,0.392-13.858,0.392c-2.221,0-13.204-0.392-15.688-0.392c-1.045,0-1.57,0.131-1.57,2.222 c0,1.57,0.262,1.701,1.83,1.83c5.361,0.525,9.415,0.917,10.722,5.493c1.437,4.968,1.437,24.447,1.437,31.115 c0,11.374,0,19.348-3.006,24.709c-4.445,7.843-13.598,10.72-22.748,10.72c-5.884,0-16.082-1.308-20.133-9.413 c-3.008-6.275-3.269-17.78-3.269-25.103c0-1.699,0.131-22.226,0.785-29.414c0.651-6.669,3.66-7.454,9.804-7.845 c2.877-0.263,3.006-0.263,3.006-2.484c0-1.308-0.392-1.83-1.83-1.83c-4.705,0-12.159,0.392-16.733,0.392 c-6.015,0-15.296-0.392-17.78-0.392c-1.438,0-1.438,0.522-1.438,2.09c0,1.701,0.26,1.833,2.746,1.961 C47.966,175.464,48.62,178.993,49.011,181.085z"/> <path fill="#FFFFFF" d="M245.881,364.613c-4.836-0.131-7.451-0.522-7.714-8.89c-0.129-3.007,0-11.243,0-21.312 c0-8.236,0-22.094-15.034-22.094c-5.884,0-13.727,3.008-25.101,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.394-0.914-1.179-0.914c-0.391,0-1.437,0-2.221,0.26c-1.699,0.523-15.166,6.275-16.342,6.798 c-2.224,0.916-2.355,1.047-2.355,2.615c0,1.83,0,1.83,2.224,1.83c6.667,0.262,6.667,1.307,6.667,15.559 c0,7.583-0.26,16.473-0.522,19.088c-0.522,4.576-2.875,6.275-6.275,6.798c-2.222,0.262-2.353,0.391-2.353,2.353 c0,1.179,0.131,1.83,1.439,1.83c2.484,0,5.097-0.26,12.681-0.26c5.49,0,13.987,0.26,16.08,0.26c0.785,0,1.438-0.129,1.438-2.222 c0-1.438-0.131-1.699-1.438-1.83c-4.836-0.522-7.06-0.653-7.974-3.531c-0.785-2.353-0.785-12.288-0.785-15.819 c0-8.89,0-19.087,0.523-19.87c0.522-0.917,8.759-3.923,15.165-3.923c2.746,0,6.275,0.785,8.63,3.138 c3.269,3.4,3.269,10.198,3.269,15.95c0,4.705,0,16.473-0.917,20.133c-0.785,2.877-2.877,3.529-5.621,4.054 c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.568,1.045,1.568c2.484,0,10.591-0.26,14.905-0.26 c6.406,0,11.243,0.26,13.858,0.26c1.699,0,1.961-0.392,1.961-2.09C248.628,364.745,248.234,364.613,245.881,364.613z"/> <path fill="#FFFFFF" d="M589.145,361.082c-3.397,0-4.444-2.221-4.444-6.929c0-3.791,0.653-23.008,0.653-27.324 c0-3.006-0.392-6.929-2.746-9.804c-1.306-1.439-4.705-4.968-12.288-4.968c-17.126,0-28.5,11.896-28.5,16.473 c0,1.176,0.913,1.83,1.961,1.83c2.09,0,7.32-1.176,8.759-1.699c1.567-0.525,2.093-1.179,2.093-2.355 c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.131-1.308,1.438-1.83c2.876-1.045,6.145-1.176,7.452-1.176 c3.137,0,7.06,0.654,8.367,4.051c1.045,2.093,1.176,4.316,1.045,15.559c-8.628,0.914-16.864,2.484-22.616,4.314 c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.207,12.159,13.207c7.974,0,16.734-4.054,20.655-5.753 c0.262,1.308,1.179,5.882,7.06,5.882c3.531,0,10.329-1.83,17.78-5.753c1.439-0.783,1.439-1.045,1.439-3.006l0.131-2.875 l-0.654-0.262C595.813,359.515,591.891,361.082,589.145,361.082z M572.019,358.076c-0.785,2.746-7.975,4.054-11.506,4.054 c-4.967,0-7.582-1.83-7.582-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.221,9.544-2.221c2.483,0,3.531,1.176,3.531,3.922 C572.412,350.493,572.412,356.769,572.019,358.076z"/> <path fill="#FFFFFF" d="M359.472,311.795c-1.83,0-4.705,1.83-7.061,3.269c-3.92,2.484-8.236,5.49-12.027,8.236 c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.307-1.699-1.307c-1.57,0-1.961,0.262-5.49,2.353 c-2.615,1.57-9.021,4.707-11.114,5.621c-2.353,1.179-2.615,1.179-2.615,2.615c0,1.83,0.263,1.961,0.917,1.961 c1.307,0,4.705,0.523,5.49,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.391,14.511-0.654,16.602 c-0.522,4.185-1.567,5.492-5.23,6.406c-2.09,0.522-2.221,0.522-2.221,2.484c0,1.83,0.391,1.83,1.961,1.83 c2.744,0,9.021-0.26,13.467-0.26c6.144,0,12.55,0.26,16.342,0.26c1.438,0,1.83-0.26,1.83-2.222c0-1.307-0.132-1.961-1.308-1.961 c-1.177,0-2.353-0.131-3.269-0.263c-8.368-0.651-8.628-0.651-8.628-25.754c0-1.568,0-9.544,0.523-10.458 c0.26-0.654,5.752-4.839,10.72-4.839c3.007,0,4.314,1.701,5.884,4.054c1.045,1.699,1.437,1.83,1.83,1.83 c1.177,0,7.191-4.576,7.191-9.281C366.271,316.894,363.003,311.795,359.472,311.795z"/> <path fill="#FFFFFF" d="M415.158,361.082c-3.397,0-4.445-2.221-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324 c0-3.006-0.392-6.929-2.744-9.804c-1.308-1.439-4.708-4.968-12.29-4.968c-17.127,0-28.501,11.896-28.501,16.473 c0,1.176,0.914,1.83,1.962,1.83c2.092,0,7.32-1.176,8.759-1.699c1.569-0.525,2.093-1.179,2.093-2.355 c0-0.522-0.263-2.615-0.263-3.006c0-0.654,0.131-1.308,1.438-1.83c2.875-1.045,6.144-1.176,7.451-1.176 c3.138,0,7.061,0.654,8.368,4.051c1.045,2.093,1.176,4.316,1.045,15.559c-8.628,0.914-16.864,2.484-22.617,4.314 c-7.19,2.353-10.328,3.922-10.328,12.419c0,5.361,1.83,13.207,12.158,13.207c7.975,0,16.735-4.054,20.656-5.753 c0.262,1.308,1.178,5.882,7.06,5.882c3.531,0,10.329-1.83,17.78-5.753c1.438-0.783,1.438-1.045,1.438-3.006l0.132-2.875 l-0.654-0.262C421.827,359.515,417.904,361.082,415.158,361.082z M398.031,358.076c-0.782,2.746-7.974,4.054-11.505,4.054 c-4.968,0-7.582-1.83-7.582-8.89c0-2.353,0-4.054,6.406-6.669c2.614-1.045,6.274-2.221,9.544-2.221c2.483,0,3.531,1.176,3.531,3.922 C398.426,350.493,398.426,356.769,398.031,358.076z"/> <path fill="#FFFFFF" d="M224.305,181.085c3.792,0,7.845-3.922,7.845-7.714c0-3.66-4.185-7.452-7.454-7.452 c-3.267,0-7.843,3.66-7.843,7.843C216.854,177.423,220.776,181.085,224.305,181.085z"/> <path fill="#FFFFFF" d="M321.038,255.473c13.727,0,24.969-8.89,24.969-10.458c0-0.262,0-0.262-0.26-1.308l-0.522-1.961h-0.785 c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396c12.553-2.484,20.135-3.922,32.817-5.884 c3.269-0.522,3.529-0.654,3.529-2.744c0-2.092,0-2.746-0.914-3.008c-0.785-0.26-0.916-0.523-1.57-3.267 c-1.83-7.191-9.152-14.12-19.742-14.12c-13.204,0-27.324,11.505-27.324,31.769C297.896,239.654,302.21,255.473,321.038,255.473z M321.692,203.048c6.406,0,10.72,7.191,10.72,11.768c0,1.305-0.394,2.484-4.576,3.529c-6.538,1.699-10.329,2.615-16.995,3.792 C310.972,208.147,316.331,203.048,321.692,203.048z"/> <path fill="#FFFFFF" d="M353.581,254.168c2.746,0,9.021-0.263,13.467-0.263c6.146,0,12.55,0.263,16.341,0.263 c1.439,0,1.833-0.263,1.833-2.224c0-1.308-0.132-1.961-1.308-1.961c-1.177,0-2.355-0.131-3.269-0.26 c-8.368-0.654-8.631-0.654-8.631-25.757c0-1.567,0-9.544,0.525-10.458c0.26-0.654,5.753-4.838,10.72-4.838 c3.007,0,4.314,1.701,5.882,4.053c1.048,1.699,1.438,1.83,1.832,1.83c1.177,0,7.189-4.576,7.189-9.281 c0-2.877-3.269-7.976-6.798-7.976c-1.83,0-4.707,1.83-7.06,3.269c-3.923,2.484-8.237,5.49-12.028,8.236 c0-1.83,0.654-10.329,0.654-11.374c0-0.785,0-1.308-1.699-1.308c-1.57,0-1.961,0.263-5.492,2.353 c-2.615,1.57-9.02,4.708-11.111,5.622c-2.354,1.179-2.615,1.179-2.615,2.615c0,1.83,0.262,1.961,0.914,1.961 c1.307,0,4.707,0.522,5.492,1.83c1.308,2.093,1.308,9.807,1.308,16.344c0,10.589-0.394,14.511-0.654,16.602 c-0.522,4.185-1.569,5.492-5.229,6.406c-2.093,0.525-2.222,0.525-2.222,2.484C351.622,254.168,352.014,254.168,353.581,254.168z"/> <path fill="#FFFFFF" d="M400.771,254.037c0.785,0,1.438-0.131,2.221-0.131c1.048,0,3.27,0.392,6.016,0.785 c2.746,0.391,6.144,0.782,9.544,0.782c13.072,0,23.532-5.49,23.532-16.602c0-10.198-9.152-14.251-17.911-18.174 c-8.891-3.922-11.766-6.535-11.766-10.72c0-1.961,0.914-7.451,8.628-7.451c6.538,0,10.46,3.66,13.204,9.675 c0.785,1.568,1.048,1.699,1.701,1.699c3.006,0,3.138-0.522,3.138-1.57c0-1.959-0.785-9.413-1.048-11.243 c-0.26-2.484-0.26-2.744-1.176-2.744c-0.654,0-1.699,0.26-2.093,0.26c-0.653,0-7.058-1.045-11.634-1.045 c-17.912,0-22.095,10.327-22.095,16.21c0,9.284,8.236,13.204,14.249,16.081c10.329,4.837,14.381,7.452,14.381,12.419 c0,1.961-0.914,8.236-9.544,8.236c-2.483,0-12.551-0.26-16.079-12.028c-0.654-1.961-0.785-2.353-1.701-2.353 c-1.177,0-3.007,0.131-3.007,1.57c0,1.699,0.523,4.183,0.523,7.32C399.855,253.383,399.855,254.037,400.771,254.037z"/> <path fill="#FFFFFF" d="M208.224,254.168c2.877,0,7.454-0.263,15.95-0.263c7.191,0,12.55,0.263,14.643,0.263 c1.308,0,1.699-0.131,1.699-2.224c0-1.568-0.26-1.831-2.221-1.961c-4.708-0.26-7.323-0.392-8.105-3.792 c-0.654-2.615-0.654-16.473-0.654-20.395c0-12.55,0.131-15.951,0.26-18.694c0.263-3.009,0.394-6.146,0.654-9.153 c0-1.045-0.654-1.307-1.308-1.307c-1.176,0-2.615,0.394-3.92,0.916c-4.97,1.961-9.938,3.922-14.774,6.013 c-1.83,0.785-2.093,0.785-2.093,2.484c0,1.701,0.394,1.701,1.961,1.961c6.669,0.917,6.669,2.615,6.669,15.69 c0,23.139-0.131,25.101-7.714,26.277c-2.224,0.394-2.355,0.394-2.355,2.353C206.917,253.774,207.31,254.168,208.224,254.168z"/> <path fill="#FFFFFF" d="M129.14,206.708c0,1.83,0,1.83,2.224,1.83c6.667,0.262,6.667,1.307,6.667,15.559 c0,7.583-0.26,16.473-0.522,19.088c-0.522,4.576-2.875,6.275-6.275,6.798c-2.224,0.262-2.353,0.394-2.353,2.353 c0,1.178,0.129,1.833,1.437,1.833c2.484,0,5.099-0.263,12.682-0.263c5.492,0,13.989,0.263,16.082,0.263 c0.785,0,1.438-0.131,1.438-2.224c0-1.439-0.131-1.699-1.438-1.831c-4.836-0.522-7.061-0.654-7.974-3.531 c-0.785-2.353-0.785-12.288-0.785-15.819c0-8.89,0-19.085,0.522-19.87c0.523-0.917,8.759-3.923,15.166-3.923 c2.746,0,6.275,0.785,8.63,3.138c3.267,3.4,3.267,10.198,3.267,15.95c0,4.705,0,16.473-0.914,20.133 c-0.785,2.877-2.877,3.531-5.621,4.054c-1.961,0.26-1.961,0.392-1.961,2.353c0,1.176,0.131,1.57,1.045,1.57 c2.484,0,10.589-0.263,14.905-0.263c6.406,0,11.243,0.263,13.858,0.263c1.699,0,1.961-0.394,1.961-2.093 c0-1.83-0.394-1.961-2.746-1.961c-4.836-0.131-7.451-0.522-7.714-8.89c-0.131-3.006,0-11.243,0-21.309 c0-8.236,0-22.096-15.034-22.096c-5.884,0-13.726,3.008-25.103,8.63c0-1.308,0.654-6.538,0.654-8.499 c0-0.785-0.392-0.914-1.176-0.914c-0.392,0-1.437,0-2.222,0.26c-1.701,0.522-15.165,6.275-16.341,6.797 C129.271,205.01,129.14,205.141,129.14,206.708z"/> <path fill="#FFFFFF" d="M238.941,202.657c1.961,1.045,2.615,1.436,3.531,2.744c3.66,4.97,19.741,43.928,21.049,47.851 c0.522,1.57,0.783,1.83,1.308,1.699l4.705-0.782l1.176-0.131c0.522,0,0.917-1.57,2.746-5.23 c20.787-43.012,23.533-44.582,24.972-45.367c1.961-1.045,1.961-1.437,1.961-2.744c0-0.654,0-1.83-1.179-1.83 c-1.045,0-2.615,0.26-7.189,0.26c-4.185,0-11.114-0.26-12.159-0.26c-1.308,0-1.439,0.522-1.439,2.353 c0,1.439,0.262,1.57,1.699,1.699c3.663,0.394,6.146,0.654,6.146,3.663c0,2.744-1.961,6.929-14.383,34.644l-8.365-20.133 c-1.438-3.531-4.839-11.636-4.839-14.643c0-2.746,1.57-2.877,5.493-3.4c1.308-0.131,1.699-0.391,1.699-1.961 c0-1.567-0.262-2.221-1.176-2.221c-2.484,0-7.06,0.26-12.944,0.26c-7.583,0-9.281-0.26-12.028-0.26c-0.914,0-1.438,0.26-1.438,1.699 C238.288,202.134,238.55,202.263,238.941,202.657z"/> <path fill="#FFFFFF" d="M471.363,255.473c13.727,0,24.969-8.89,24.969-10.458c0-0.262,0-0.262-0.26-1.308l-0.522-1.961h-0.785 c-7.061,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396c12.552-2.484,20.135-3.922,32.816-5.884 c3.269-0.522,3.528-0.654,3.528-2.744c0-2.092,0-2.746-0.913-3.008c-0.785-0.26-0.917-0.523-1.57-3.267 c-1.83-7.191-9.152-14.12-19.741-14.12c-13.204,0-27.324,11.505-27.324,31.769C448.222,239.654,452.535,255.473,471.363,255.473z M472.017,203.048c6.406,0,10.721,7.191,10.721,11.768c0,1.305-0.394,2.484-4.577,3.529c-6.537,1.699-10.328,2.615-16.995,3.792 C461.297,208.147,466.655,203.048,472.017,203.048z"/>',
                    title: "Universe Panorama",
                    date: "december, twelve",
                    img: "data/poster/universe",
                    itemcolor: "#c13227",
                    bgcolor: "#111",
                    preload: ["contents/panorama/panorama-up.jpg", "contents/panorama/panorama-down.jpg", "contents/panorama/panorama-left.jpg", "contents/panorama/panorama-right.jpg", "contents/panorama/panorama-front.jpg", "contents/panorama/panorama-back.jpg"],
                    white: 1,
                    browser: ["ch", "ff", "sf"]
                }
            }, {
                poster: {
                    id: "cylinder",
                    classfn: Cylinder3D,
                    svg: '<path fill="#FFFFFF" d="M79.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C116.757,848.859,102.178,832.021,79.091,832.021z M79.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C101.655,905.274,100.441,940.163,79.091,940.163z"/> <path fill="#FFFFFF" d="M195.206,914.82c-0.867,0-1.389,0.868-2.081,3.473c-0.523,1.909-2.432,7.811-4.861,9.72 c-3.993,3.124-22.739,3.124-28.989,3.124c-8.677,0-15.968-0.174-21.35-0.174c39.576-38.013,52.769-50.686,52.769-70.82 c0-16.316-11.976-28.121-27.598-28.121c-23.956,0-35.411,21.699-35.411,24.475c0,1.389,2.95,2.777,3.818,2.777 c1.043,0,1.215-0.52,2.083-3.124c3.124-9.199,12.67-13.364,21.87-13.364c8.333,0,19.789,4.339,19.789,20.135 c0,4.859-0.174,14.06-18.226,37.318c-10.935,14.233-25.168,30.03-34.717,39.578c-0.866,0.866-0.866,1.562-0.866,3.124 c0,1.215,0.866,1.215,3.818,1.215c3.47,0,25.688-0.349,30.55-0.349c8.678,0,22.913,0.349,32.285,0.349 c2.432,0,3.472-0.349,4.341-3.818c0.695-3.124,5.554-22.219,5.554-23.781C197.983,915.166,196.248,914.82,195.206,914.82z"/> <path fill="#FFFFFF" d="M542.875,250.245c-5.229-0.522-7.845-0.654-9.021-2.746c-0.913-1.439-1.438-2.353-1.438-36.475 c0-9.415,0.132-19.873,0.132-21.834c0-9.152,0.131-14.774,0.653-21.309c0.131-1.308,0.522-3.531,0.522-4.97 c0-0.914-0.522-1.437-1.308-1.437c-3.006,0-9.019,1.961-19.61,5.359c-2.353,0.654-2.612,0.785-2.612,2.484 c0,1.438,0.26,1.438,1.305,1.57c5.1,0.654,6.669,0.785,7.454,3.923c0.914,3.137,0.914,11.111,0.914,29.808 c0,16.602-0.131,28.107-0.654,36.997c-0.26,5.621-1.83,7.714-7.188,8.499c-0.411,0.052-0.733,0.094-1.015,0.141 c-0.093-0.004-0.182-0.009-0.288-0.009c-5.23-0.522-7.846-0.654-9.021-2.746c-0.914-1.439-1.437-2.353-1.437-36.475 c0-9.415,0.129-19.873,0.129-21.834c0-9.152,0.131-14.774,0.653-21.309c0.132-1.308,0.525-3.531,0.525-4.97 c0-0.914-0.525-1.437-1.308-1.437c-3.009,0-9.021,1.961-19.612,5.359c-2.354,0.654-2.613,0.785-2.613,2.484 c0,1.438,0.26,1.438,1.308,1.57c5.097,0.654,6.666,0.785,7.451,3.923c0.914,3.137,0.914,11.111,0.914,29.808 c0,16.602-0.129,28.107-0.653,36.997c-0.261,5.621-1.83,7.714-7.189,8.499c-2.093,0.263-2.354,0.263-2.354,1.961 s0.394,2.093,1.569,2.093c2.615,0,8.368-0.131,14.512-0.131c7.061,0,12.944,0.131,16.735,0.131c0.223,0,0.417-0.005,0.595-0.016 c0.1,0.008,0.2,0.016,0.314,0.016c2.615,0,8.367-0.131,14.512-0.131c7.06,0,12.943,0.131,16.735,0.131 c1.567,0,1.961-0.131,1.961-2.224C544.445,250.505,544.183,250.245,542.875,250.245z"/> <path fill="#FFFFFF" d="M131.504,229.719c-7.191,2.353-10.329,3.922-10.329,12.419c0,5.361,1.83,13.206,12.159,13.206 c7.974,0,16.733-4.054,20.656-5.752c0.262,1.308,1.176,5.881,7.06,5.881c3.531,0,10.329-1.83,17.78-5.75 c1.438-0.785,1.438-1.047,1.438-3.009l0.131-2.875l-0.654-0.263c-2.484,1.439-6.406,3.007-9.152,3.007 c-3.4,0-4.445-2.222-4.445-6.929c0-3.791,0.654-23.008,0.654-27.324c0-3.006-0.391-6.929-2.746-9.804 c-1.308-1.439-4.705-4.968-12.288-4.968c-17.126,0-28.5,11.896-28.5,16.473c0,1.176,0.914,1.83,1.961,1.83 c2.09,0,7.32-1.176,8.759-1.699c1.568-0.525,2.09-1.179,2.09-2.355c0-0.522-0.26-2.615-0.26-3.006c0-0.654,0.131-1.308,1.439-1.83 c2.875-1.045,6.144-1.176,7.451-1.176c3.138,0,7.06,0.654,8.368,4.051c1.045,2.093,1.176,4.316,1.045,15.559 C145.493,226.319,137.257,227.889,131.504,229.719z M153.467,243.576c-0.785,2.747-7.974,4.054-11.505,4.054 c-4.968,0-7.583-1.831-7.583-8.89c0-2.353,0-4.054,6.406-6.669c2.615-1.045,6.275-2.222,9.544-2.222 c2.484,0,3.529,1.177,3.529,3.923C153.858,235.994,153.858,242.269,153.467,243.576z"/> <path fill="#FFFFFF" d="M108.234,341.343c0,18.825,13.335,28.629,28.894,28.629c17.518,0,32.945-11.374,32.945-29.937 c0-13.729-9.544-27.978-28.894-27.978C123.008,312.058,108.234,323.038,108.234,341.343z M156.084,345.003 c0,13.073-6.669,19.348-14.774,19.348c-9.413,0-19.088-9.413-19.088-27.715c0-12.55,6.929-18.957,14.774-18.957 C147.848,317.679,156.084,329.707,156.084,345.003z"/> <path fill="#FFFFFF" d="M55.165,246.191c9.675,7.583,22.094,9.413,32.292,9.413c9.544,0,20.264-1.436,24.709-3.269 c1.045-0.391,1.176-0.914,2.353-4.968c0.262-1.437,3.008-10.851,3.008-10.98c0-1.179-2.615-1.439-3.14-1.439 c-0.392,0-0.783,0.131-1.305,0.914c-4.054,6.275-9.284,14.251-24.581,14.251c-17.387,0-32.16-12.55-32.16-38.698 c0-24.187,13.466-35.952,30.984-35.952c5.49,0,13.335,1.045,17.389,3.792c2.221,1.307,4.576,3.66,5.49,11.634 c0.391,3.137,0.916,3.531,3.006,3.531c1.438,0,1.961-0.262,1.961-1.438c0.263-4.314,0.394-6.929,1.047-12.29 c0.129-1.568,1.437-7.843,1.437-9.282c0-0.522-0.914-0.785-1.961-0.785c-0.914,0-2.222,0.917-3.006,0.785 c-7.583-0.785-15.166-1.83-22.879-1.83c-34.907,0-49.287,21.31-49.287,43.535C40.521,221.351,42.483,236.388,55.165,246.191z"/> <path fill="#FFFFFF" d="M449.02,255.473c13.729,0,24.972-8.89,24.972-10.458c0-0.262,0-0.262-0.262-1.308l-0.522-1.961h-0.785 c-7.058,5.23-14.118,5.23-15.557,5.23c-15.688,0-17.389-16.082-17.78-20.396c12.55-2.484,20.133-3.922,32.814-5.884 c3.269-0.522,3.531-0.654,3.531-2.744c0-2.092,0-2.746-0.917-3.008c-0.784-0.26-0.913-0.523-1.567-3.267 c-1.832-7.191-9.152-14.12-19.741-14.12c-13.204,0-27.324,11.505-27.324,31.769C425.881,239.654,430.194,255.473,449.02,255.473z M449.674,203.048c6.406,0,10.72,7.191,10.72,11.768c0,1.305-0.391,2.484-4.573,3.529c-6.538,1.699-10.329,2.615-16.998,3.792 C438.953,208.147,444.314,203.048,449.674,203.048z"/> <path fill="#FFFFFF" d="M72.028,364.091c-5.359,0-12.419-1.57-17.389-5.361c-3.006-2.353-5.49-6.144-7.189-12.55 c-0.394-1.961-0.523-3.007-1.439-3.007c-3.791,0-3.791,2.222-3.791,3.138c0,1.437,0.785,12.55,2.092,21.178 c0.26,1.176,0.391,1.57,1.83,1.57c1.567,0,1.567-1.176,3.4-1.176c1.567,0,11.765,2.221,22.223,2.221 c12.421,0,18.434-3.006,22.488-5.884c4.836-3.529,8.89-9.935,8.89-18.04c0-14.774-12.29-20.133-24.709-25.494 c-12.55-5.49-19.35-8.368-19.35-17.649c0-7.583,5.361-13.466,15.037-13.466c3.922,0,9.15,1.045,13.073,3.922 c3.791,2.875,4.838,6.407,6.668,11.766c0.26,1.178,0.654,1.438,1.308,1.438c1.699,0,3.397-0.522,3.397-2.221 c0-0.654-0.785-7.323-0.785-10.066v-8.239c0-0.651-0.26-1.045-0.783-1.045c-0.262,0-0.785,0.131-1.439,0.262 c-0.522,0.26-1.045,0.391-1.438,0.391c-0.391,0-3.269-0.391-6.798-0.914c-3.66-0.394-7.974-0.785-11.636-0.785 c-21.178,0-29.808,10.98-29.808,23.139c0,13.989,10.852,18.828,23.01,24.187c12.813,5.621,19.61,8.63,19.61,18.042 C88.501,357.945,81.964,364.091,72.028,364.091z"/> <path fill="#FFFFFF" d="M185.619,249.852c-2.222,0.394-2.353,0.394-2.353,2.484c0,1.438,0.131,1.833,1.307,1.833 c2.09,0,12.028-0.263,14.25-0.263c1.83,0,10.851,0.263,12.812,0.263c2.092,0,2.224-0.131,2.224-2.093 c0-1.308-0.131-1.699-1.179-1.961c-1.437-0.262-2.875-0.391-4.705-0.522c-2.877-0.394-3.531-2.224-3.531-19.087 c0-8.759,0.131-17.781,0.263-18.303c0.391-1.438,8.499-5.099,14.251-5.099c10.98,0,10.98,8.627,10.98,23.402 c0,3.922,0,12.027-0.914,15.556c-0.917,2.877-3.138,3.4-5.493,3.792c-1.83,0.394-2.09,0.394-2.09,2.355 c0,1.699,0.392,1.961,1.308,1.961c1.961,0,11.765-0.263,13.989-0.263c1.959,0,11.503,0.263,13.727,0.263 c1.045,0,1.568,0,1.568-2.093c0-1.176-0.26-1.699-1.045-1.83c-1.045-0.131-2.093-0.262-3.529-0.394 c-4.576-0.522-4.838-1.437-4.838-19.348c-0.129-4.054,0-9.021,0-15.166c0-3.009-0.129-4.708,1.047-5.23 c4.836-2.746,9.15-3.269,11.765-3.269c12.682,0,12.682,9.806,12.682,23.795c0,16.996-1.176,17.909-6.013,19.348 c-2.484,0.654-2.484,0.654-2.484,2.224c0,1.83,0.26,1.961,1.699,1.961c2.875,0,8.236-0.263,14.249-0.263 c6.146,0,10.198,0.263,13.207,0.263c1.699,0,1.83-0.263,1.83-2.224c0-1.699-0.131-1.961-2.093-1.961 c-6.406-0.131-7.583-1.308-7.714-6.013v-23.533c0-10.066-0.785-13.989-4.313-17.78c-2.877-3.138-7.452-4.839-12.028-4.839 c-8.759,0-19.35,6.406-23.271,8.761c-2.092-5.884-7.583-8.761-13.598-8.761c-7.845,0-14.774,4.316-23.01,9.415 c0-1.439,0.654-8.107,0.654-9.284c0-0.914-0.522-1.176-1.961-1.176c-1.308,0-1.961,0.131-3.66,0.917 c-9.544,4.445-10.589,4.968-14.38,6.929c-1.83,0.914-1.961,1.045-1.961,2.744c0,1.701,0.131,1.701,2.746,1.701 c4.836,0,5.75,1.176,5.75,10.458v21.049C191.763,248.021,189.15,249.198,185.619,249.852z"/> <path fill="#FFFFFF" d="M358.298,170.756c5.099,0.392,6.015,3.006,6.406,9.413c0.131,3.923,0.131,8.891,0.131,23.271 c0,14.514-0.263,28.894-1.047,43.406c0,1.438-0.522,3.922-0.522,5.49c0,0.525,0.262,0.785,0.784,1.047 c0.917,0.131,11.243,1.961,19.61,1.961c27.193,0,37.913-17.389,37.913-32.945c0-16.344-10.457-24.84-22.879-24.84 c-9.412,0-16.732,3.398-21.44,5.49c0.132-4.183,0.394-24.709,1.439-35.298c0.262-1.701,0.391-3.4,0.653-5.099 c0-0.916-0.653-1.047-1.308-1.047c-2.224,0-15.95,3.792-19.479,4.838c-2.614,0.654-2.877,0.785-2.877,2.353 C355.683,170.494,355.945,170.494,358.298,170.756z M377.123,207.362c3.531-1.308,7.454-2.875,12.553-2.875 c14.511,0,18.694,13.466,18.694,23.271c0,10.198-4.184,21.18-18.172,21.18c-12.159,0-12.682-7.451-12.944-11.636 C376.863,231.289,376.994,215.338,377.123,207.362z"/> <path fill="#FFFFFF" d="M245.239,363.043c0-2.615-0.263-2.615-0.917-2.615c-0.391,0-2.353,0.394-2.746,0.394 c-1.567,0.26-3.006,0.391-4.051,0.391c-4.054,0-4.054-2.875-4.054-9.675c0-6.275,0.522-23.139,0.654-27.193 c0-1.567,0.522-9.15,0.522-10.851c0-1.045-0.392-1.437-1.308-1.437c-0.914,0-5.49,0.783-6.406,0.914 c-4.836,0.653-12.811,1.438-13.335,1.438c-2.875,0.131-3.137,0.131-3.137,2.353c0,1.308,0.653,1.701,3.662,1.701 c7.189,0,7.189,2.613,7.189,10.98c0,7.06,0,27.193-0.785,28.24c-0.783,1.045-8.105,3.923-14.903,3.923 c-12.159,0-12.159-11.245-12.159-22.75c0-5.097,0.131-13.073,0.392-17.518c0.262-2.746,0.524-6.666,0.524-7.974 c0-0.654,0-1.439-1.176-1.439c-2.224,0-17.651,4.183-18.042,4.314c-2.224,0.654-2.484,0.654-2.484,2.353 c0,1.833,0.26,1.833,1.568,1.961c4.185,0.131,6.275,0.131,6.537,6.8c0.131,3.398-0.131,20.133-0.131,23.924 c0,6.013,0.522,9.413,3.4,12.941c3.138,3.794,8.236,5.624,12.55,5.624c7.714,0,16.212-4.054,24.187-7.977 c0,0.785-0.391,4.576-0.391,5.493c0,0.914,0,2.353,1.961,2.353c2.484,0,14.118-3.006,18.694-4.445 C245.239,364.091,245.239,364.091,245.239,363.043z"/> <path fill="#FFFFFF" d="M598.56,220.697c-8.89-3.922-11.768-6.535-11.768-10.72c0-1.961,0.916-7.451,8.63-7.451 c6.535,0,10.458,3.66,13.204,9.675c0.783,1.568,1.045,1.699,1.699,1.699c3.006,0,3.138-0.522,3.138-1.57 c0-1.959-0.785-9.413-1.045-11.243c-0.263-2.484-0.263-2.744-1.177-2.744c-0.653,0-1.701,0.26-2.093,0.26 c-0.653,0-7.06-1.045-11.636-1.045c-17.912,0-22.095,10.327-22.095,16.21c0,9.284,8.236,13.204,14.252,16.081 c10.326,4.837,14.38,7.452,14.38,12.419c0,1.961-0.916,8.236-9.544,8.236c-2.483,0-12.55-0.26-16.081-12.028 c-0.654-1.961-0.783-2.353-1.699-2.353c-1.176,0-3.006,0.131-3.006,1.57c0,1.699,0.522,4.183,0.522,7.32 c0,8.368,0,9.021,0.914,9.021c0.784,0,1.438-0.131,2.224-0.131c1.045,0,3.269,0.392,6.013,0.785 c2.746,0.391,6.146,0.782,9.544,0.782c13.074,0,23.532-5.49,23.532-16.602C616.469,228.673,607.318,224.62,598.56,220.697z"/> <path fill="#FFFFFF" d="M383.402,322.646c-4.838-3.4-10.591-3.4-13.988-3.529c5.099-2.877,16.079-9.152,16.079-19.742 c0-6.146-4.968-15.165-17.78-15.165c-17.127,0-26.277,14.118-26.277,15.688c0,0.914,2.353,2.484,3.398,2.484 c1.179,0,1.308-0.523,2.224-2.615c1.83-4.445,9.021-6.798,13.335-6.798c4.836,0,10.72,3.398,10.72,11.896 c0,4.836-1.045,11.896-18.956,20.004c-2.353,1.176-2.878,1.306-2.615,2.09c0.262,0.394,0.391,1.308,0.654,2.092 c0.391,0.654,0.785,1.308,1.307,1.308s3.923-3.138,10.458-3.138c10.46,0,14.514,8.891,14.514,17.78 c0,8.628-4.054,19.088-15.428,19.088c-8.89,0-11.505-5.752-12.29-7.454c-1.567-3.397-2.221-4.574-4.836-4.574 c-2.615,0-7.06,2.353-7.06,6.275c0,3.138,3.66,11.634,19.61,11.634c19.351,0,35.169-12.288,35.169-29.808 C391.639,329.967,386.409,324.739,383.402,322.646z"/> <path fill="#FFFFFF" d="M286.41,312.058c-6.669,0-13.075,2.222-20.787,5.49c0-0.916,0.522-5.361,0.522-6.406 c0-0.654-0.394-0.914-1.83-0.914c-1.57,0-3.662,1.176-4.316,1.567c-1.961,1.177-11.896,6.669-14.118,7.845 c-1.83,1.176-2.092,1.308-2.092,3.006c0,1.308,0.262,1.308,1.567,1.439c4.577,0.131,6.278,0.26,7.061,4.183 c0.262,1.438,0.394,8.368,0.394,20.264c0,8.367,0,40.137-0.785,45.235c-0.262,1.699-0.654,5.099-6.144,6.013 c-2.355,0.394-2.355,0.394-2.355,2.093c0,1.438,0.131,1.961,1.57,1.961c2.746,0,10.851-0.262,16.081-0.262 c5.228,0,9.936,0.262,13.464,0.262c1.57,0,1.83-0.262,1.83-2.092s0-2.353-3.006-2.353c-7.451,0-8.236-1.83-8.368-15.557v-15.819 c2.746,0.651,6.275,1.436,10.983,1.436c17.649,0,33.599-12.027,33.599-30.984C309.68,323.169,299.351,312.058,286.41,312.058z M291.9,358.076c-3.006,2.746-6.538,3.531-10.589,3.531c-8.89,0-13.989-2.747-16.341-4.054c0-11.896,0-25.231,0.391-35.561 c1.83-0.654,5.884-2.092,11.505-2.092c14.512,0,20.133,13.466,20.133,23.664C296.999,347.747,296.214,353.894,291.9,358.076z"/> <path fill="#FFFFFF" d="M563.395,169.449c-7.188,0-7.319,1.83-7.319,5.752c0,2.353,0.131,3.529,1.308,10.329 c1.045,5.753,1.83,13.335,2.09,16.733c0.263,3.009,0.263,3.269,1.179,3.269c0.914,0,2.743,0,3.006-0.654l0.914-8.628 c0.394-3.006,3.269-18.042,3.269-21.44C567.84,171.673,567.449,169.449,563.395,169.449z"/> <path fill="#FFFFFF" d="M319.349,284.89c-7.452,0-8.237-1.83-8.368-15.557v-15.819c2.746,0.654,6.275,1.437,10.982,1.437 c17.649,0,33.599-12.028,33.599-30.984c0-15.296-10.329-26.408-23.27-26.408c-6.669,0-13.075,2.221-20.789,5.49 c0-0.914,0.522-5.359,0.522-6.406c0-0.654-0.391-0.914-1.83-0.914c-1.567,0-3.66,1.176-4.314,1.568 c-1.961,1.176-11.896,6.668-14.12,7.845c-1.83,1.176-2.09,1.308-2.09,3.006c0,1.308,0.26,1.308,1.568,1.439 c4.576,0.131,6.275,0.26,7.06,4.183c0.262,1.438,0.394,8.368,0.394,20.264c0,8.368,0,40.137-0.785,45.235 c-0.263,1.699-0.654,5.099-6.146,6.015c-2.353,0.391-2.353,0.391-2.353,2.09c0,1.438,0.131,1.961,1.57,1.961 c2.744,0,10.852-0.26,16.079-0.26c5.23,0,9.938,0.26,13.467,0.26c1.57,0,1.83-0.26,1.83-2.092 C322.354,285.412,322.354,284.89,319.349,284.89z M311.243,207.493c1.83-0.653,5.882-2.092,11.505-2.092 c14.511,0,20.133,13.466,20.133,23.664c0,4.185-0.785,10.329-5.099,14.511c-3.006,2.747-6.537,3.531-10.589,3.531 c-8.89,0-13.989-2.746-16.344-4.054C310.85,231.157,310.85,217.822,311.243,207.493z"/> <path fill="#FFFFFF" d="M441.833,284.865c-3.399,0-20.004,0.522-23.664,0.522c-4.836,0.131-12.159,0.131-18.172,0.131 c-1.701,0-2.092,0-2.092,1.83c0,2.09,0,2.09,2.353,2.221c6.8,0.394,7.845,1.699,8.367,8.63c0.263,3.398,0.263,14.118,0.263,20.393 c0,9.153,0,27.064-0.394,34.907c-0.522,7.977-2.353,9.938-8.497,10.983c-2.483,0.391-2.746,0.391-2.746,2.092 c0,2.221,0,2.09,2.224,2.221c5.49,0,11.503-0.26,16.733-0.26c12.29,0,17.911,0.26,19.61,0.26c14.643,0,22.094-2.221,27.324-4.576 c23.01-10.458,24.84-31.375,24.84-39.221C487.982,307.219,477.394,284.865,441.833,284.865z M436.994,363.697 c-11.503,0-13.464-2.875-13.988-7.974c-0.261-2.224-0.392-5.361-0.392-23.142c0-12.028,0-31.245,0.392-34.907 c0.524-4.967,0.916-7.711,14.251-7.711c11.374,0,18.043,2.613,23.011,6.535c11.111,8.759,12.158,23.927,12.158,29.677 C472.426,350.362,457.13,363.697,436.994,363.697z"/> <path fill="#FFFFFF" d="M598.171,84.993v-9.885h-3.432l-1.742,6.917l-1.769-6.917h-3.432v9.885h2.287c0,0-0.014-6.008-0.053-7.393 l1.941,7.393h2.035l1.955-7.393c-0.052,1.932-0.052,7.393-0.052,7.393H598.171z"/> <path fill="#FFFFFF" d="M589.593,47.464h1.461l1.876,3.529h2.434h0.147h2.354l0.464-1.583h3.459l0.466,1.583h2.5l-3.457-9.886 h-2.447l-3.429,9.722l-2.077-3.786c1.022-0.378,1.927-1.05,1.927-2.73c0-2.828-2.208-3.206-3.604-3.206h-4.442v9.886h2.368V47.464z M600.032,43.46l1.224,4.171h-2.382L600.032,43.46z M589.579,42.942h1.954c0.412,0,1.396,0.027,1.396,1.316 c0,0.308-0.066,1.371-1.409,1.371h-1.941V42.942z"/> <polygon fill="#FFFFFF" points="581.771,50.993 584.139,50.993 584.139,43.053 586.572,43.053 586.572,41.107 579.325,41.107 579.325,43.053 581.771,43.053 "/> <polygon fill="#FFFFFF" points="586.56,83.045 581.546,83.045 581.546,80.695 585.842,80.695 585.842,78.817 581.546,78.817 581.546,77.025 586.147,77.025 586.147,75.107 579.205,75.107 579.205,84.993 586.56,84.993 "/> <polygon fill="#FFFFFF" points="571.916,75.107 569.417,75.107 572.634,84.993 575.029,84.993 578.287,75.107 575.787,75.107 573.857,82.136 "/> <path fill="#FFFFFF" d="M618.36,49.27c-1.012,0-2.088-0.448-2.715-1.247l-1.782,1.192c0.959,1.174,2.088,2.002,4.284,2.002 c2.685,0,4.269-1.359,4.269-3.445c0-1.694-1.011-2.477-3.459-2.841l-1.036-0.154c-0.798-0.127-1.198-0.38-1.198-0.912 c0-0.462,0.44-1.05,1.397-1.05c1.012,0,1.783,0.491,2.461,1.233l1.729-1.303c-0.918-0.923-2.155-1.875-4.138-1.875 c-2.42,0-3.789,1.357-3.789,3.303c0,1.737,1.342,2.549,2.993,2.787l1.077,0.153c0.837,0.113,1.635,0.308,1.635,1.009 C620.088,48.948,619.05,49.27,618.36,49.27z"/> <path fill="#FFFFFF" d="M571.557,49.27c-1.011,0-2.088-0.448-2.712-1.247l-1.782,1.192c0.956,1.174,2.087,2.002,4.281,2.002 c2.688,0,4.271-1.359,4.271-3.445c0-1.694-1.012-2.477-3.459-2.841l-1.038-0.154c-0.799-0.127-1.197-0.38-1.197-0.912 c0-0.462,0.439-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875 c-2.42,0-3.791,1.357-3.791,3.303c0,1.737,1.344,2.549,2.992,2.787l1.077,0.153c0.84,0.113,1.638,0.308,1.638,1.009 C573.287,48.948,572.249,49.27,571.557,49.27z"/> <path fill="#FFFFFF" d="M607.694,77.697c0-1.441-0.853-2.59-3.325-2.59h-4.377v9.885h4.603c1.914,0,3.457-0.952,3.457-2.773 c0-1.735-1.462-2.226-2.366-2.31C606.258,79.84,607.694,79.365,607.694,77.697z M602.227,76.955h1.93 c0.452,0,1.235,0.043,1.235,0.993c0,1.022-0.89,1.065-1.396,1.065h-1.77V76.955z M603.862,83.199h-1.636v-2.393h2.022 c0.478,0,1.423,0.027,1.423,1.219C605.672,83.158,604.62,83.199,603.862,83.199z"/> <path fill="#FFFFFF" d="M649.562,44.313c0-2.828-2.208-3.206-3.605-3.206h-4.44v9.886h2.365v-3.529h1.464l1.876,3.529h2.58 l-2.169-3.95C648.656,46.666,649.562,45.994,649.562,44.313z M645.811,45.629h-1.942v-2.687h1.956c0.412,0,1.396,0.027,1.396,1.316 C647.221,44.566,647.154,45.629,645.811,45.629z"/> <polygon fill="#FFFFFF" points="607.574,45.084 610.897,50.993 613.2,50.993 613.2,41.107 610.951,41.107 610.951,47.127 607.613,41.107 605.312,41.107 605.312,50.993 607.574,50.993 "/> <path fill="#FFFFFF" d="M657.516,41.107l-1.744,6.916l-1.77-6.916h-3.432v9.886h2.289c0,0-0.014-6.008-0.054-7.393l1.943,7.393 h2.033l1.957-7.393c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886H657.516z"/> <path fill="#FFFFFF" d="M574.765,98.547c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.483-3.373,3.483-5.026c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 C576.599,96.77,575.828,97.568,574.765,98.547z"/> <path fill="#FFFFFF" d="M552.34,98.547c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 c2.633-2.113,3.484-3.373,3.484-5.026c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 C554.177,96.77,553.405,97.568,552.34,98.547z"/> <polygon fill="#FFFFFF" points="611.75,80.695 616.046,80.695 616.046,78.817 611.75,78.817 611.75,77.025 616.352,77.025 616.352,75.107 609.409,75.107 609.409,84.993 616.763,84.993 616.763,83.045 611.75,83.045 "/> <path fill="#FFFFFF" d="M567.369,93.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H568.3C568.127,92.878,567.955,93.24,567.369,93.564z"/> <path fill="#FFFFFF" d="M626.033,78.312c0-2.828-2.208-3.205-3.604-3.205h-4.442v9.885h2.368v-3.529h1.461l1.878,3.529h2.579 l-2.168-3.95C625.131,80.666,626.033,79.993,626.033,78.312z M622.282,79.629h-1.94v-2.687h1.954c0.412,0,1.398,0.027,1.398,1.316 C623.694,78.566,623.626,79.629,622.282,79.629z"/> <polygon fill="#FFFFFF" points="552.352,79.084 555.677,84.993 557.979,84.993 557.979,75.107 555.731,75.107 555.731,81.127 552.392,75.107 550.092,75.107 550.092,84.993 552.352,84.993 "/> <path fill="#FFFFFF" d="M635.663,40.8c-3.394,0-4.642,2.954-4.642,5.208c0,2.717,1.569,5.28,4.669,5.28 c3.018,0,4.734-2.522,4.734-5.167C640.425,43.768,639.081,40.8,635.663,40.8z M635.701,49.186c-1.688,0-2.366-1.624-2.366-3.206 c0-1.33,0.546-3.108,2.328-3.108c1.663,0,2.407,1.427,2.407,3.219C638.07,47.478,637.445,49.186,635.701,49.186z"/> <polygon fill="#FFFFFF" points="555.344,58.107 553.455,58.107 549.413,67.993 551.302,67.993 "/> <path fill="#FFFFFF" d="M568.858,80.12c0-2.353-1.344-5.32-4.762-5.32c-3.392,0-4.643,2.954-4.643,5.207 c0,2.717,1.57,5.28,4.669,5.28C567.141,85.287,568.858,82.767,568.858,80.12z M564.137,83.185c-1.689,0-2.368-1.624-2.368-3.205 c0-1.33,0.545-3.108,2.328-3.108c1.662,0,2.406,1.427,2.406,3.219C566.503,81.478,565.879,83.185,564.137,83.185z"/> <polygon fill="#FFFFFF" points="623.414,50.993 625.755,50.993 625.755,47.002 630.236,47.002 630.236,45.084 625.755,45.084 625.755,43.012 630.623,43.012 630.623,41.107 623.414,41.107 "/> <path fill="#FFFFFF" d="M560.973,92.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C564.164,95.944,563.858,92.345,560.973,92.345z M560.973,100.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C562.169,98.841,561.983,100.466,560.973,100.466z"/> <path fill="#FFFFFF" d="M554.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C549.719,49.382,551.727,51.287,554.215,51.287z"/> <path fill="#FFFFFF" d="M562.78,49.27c-1.012,0-2.089-0.448-2.715-1.247l-1.78,1.192c0.957,1.174,2.088,2.002,4.282,2.002 c2.688,0,4.269-1.359,4.269-3.445c0-1.694-1.012-2.477-3.457-2.841l-1.038-0.154c-0.799-0.127-1.196-0.38-1.196-0.912 c0-0.462,0.438-1.05,1.396-1.05c1.011,0,1.782,0.491,2.461,1.233l1.729-1.303c-0.916-0.923-2.153-1.875-4.135-1.875 c-2.423,0-3.792,1.357-3.792,3.303c0,1.737,1.344,2.549,2.993,2.787l1.076,0.153c0.84,0.113,1.636,0.308,1.636,1.009 C564.508,48.948,563.472,49.27,562.78,49.27z"/>',
                    title: "Campbell's Soup 3D",
                    date: "november, twelve",
                    img: "data/poster/soup",
                    itemcolor: "#cc372b",
                    bgcolor: "#ddd",
                    bggra: "cylinder-gra",
                    preload: ["contents/cylinder/soupmat.jpg"],
                    browser: ["ch", "ff", "sf"]
                }
            }, {
                poster: {
                    id: "bokeh",
                    classfn: GlowLight,
                    svg: '<path fill="#FFFFFF" d="M559.291,50.993l0.467-1.583h3.458l0.467,1.583h2.499l-3.459-9.886h-2.447l-3.483,9.886H559.291z M561.461,43.46l1.224,4.171h-2.382L561.461,43.46z"/> <path fill="#FFFFFF" d="M553.215,51.287c1.955,0,3.299-1.176,4.043-2.549l-1.848-0.993c-0.319,0.572-0.812,1.47-2.036,1.47 c-1.263,0-2.314-1.079-2.314-3.248c0-1.654,0.799-3.138,2.314-3.138c0.959,0,1.796,0.771,1.995,1.513l1.861-0.982 c-0.665-1.484-2.234-2.561-3.963-2.561c-2.66,0-4.549,2.31-4.549,5.237C548.719,49.382,550.727,51.287,553.215,51.287z"/> <path fill="#FFFFFF" d="M585.08,50.993l0.466-1.583h3.458l0.467,1.583h2.499l-3.458-9.886h-2.445l-3.486,9.886H585.08z M587.249,43.46l1.224,4.171h-2.382L587.249,43.46z"/> <polygon fill="#FFFFFF" points="611.109,49.045 606.095,49.045 606.095,46.693 610.391,46.693 610.391,44.817 606.095,44.817 606.095,43.026 610.696,43.026 610.696,41.107 603.754,41.107 603.754,50.993 611.109,50.993 "/> <path fill="#FFFFFF" d="M558.454,80.007c0,2.717,1.57,5.28,4.669,5.28c3.018,0,4.735-2.52,4.735-5.167 c0-2.353-1.344-5.32-4.762-5.32C559.705,74.8,558.454,77.754,558.454,80.007z M565.503,80.091c0,1.387-0.624,3.094-2.366,3.094 c-1.689,0-2.368-1.624-2.368-3.205c0-1.33,0.545-3.108,2.328-3.108C564.759,76.872,565.503,78.299,565.503,80.091z"/> <polygon fill="#FFFFFF" points="617.625,48.905 613.955,48.905 613.955,41.107 611.614,41.107 611.614,50.993 617.625,50.993 "/> <polygon fill="#FFFFFF" points="568.643,45.084 571.969,50.993 574.269,50.993 574.269,41.107 572.021,41.107 572.021,47.127 568.682,41.107 566.381,41.107 566.381,50.993 568.643,50.993 "/> <polygon fill="#FFFFFF" points="580.053,50.993 583.312,41.107 580.811,41.107 578.884,48.136 576.94,41.107 574.44,41.107 577.66,50.993 "/> <polygon fill="#FFFFFF" points="570.916,75.107 568.417,75.107 571.634,84.993 574.029,84.993 577.287,75.107 574.787,75.107 572.857,82.136 "/> <path fill="#FFFFFF" d="M591.997,82.025l-1.769-6.917h-3.432v9.885h2.287c0,0-0.014-6.008-0.053-7.393l1.941,7.393h2.035 l1.955-7.393c-0.052,1.932-0.052,7.393-0.052,7.393h2.26v-9.885h-3.432L591.997,82.025z"/> <path fill="#FFFFFF" d="M604.686,79.91c0.572-0.07,2.009-0.545,2.009-2.212c0-1.441-0.853-2.59-3.325-2.59h-4.377v9.885h4.603 c1.914,0,3.457-0.952,3.457-2.773C607.052,80.484,605.59,79.993,604.686,79.91z M601.227,76.955h1.93 c0.452,0,1.235,0.043,1.235,0.993c0,1.022-0.89,1.065-1.396,1.065h-1.77V76.955z M602.862,83.199h-1.636v-2.393h2.022 c0.478,0,1.423,0.027,1.423,1.219C604.672,83.158,603.62,83.199,602.862,83.199z"/> <path fill="#FFFFFF" d="M577.834,95.229c0-1.833-1.21-2.898-3.059-2.898c-1.796,0-3.167,0.995-3.167,3.235V95.9l2.143,0.127 c-0.027-0.294-0.055-0.658-0.055-0.896c0-0.993,0.627-1.163,0.986-1.163c0.916,0,0.916,0.925,0.916,1.303 c0,1.498-0.771,2.296-1.834,3.275c-0.933,0.841-1.398,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C576.983,98.143,577.834,96.882,577.834,95.229z"/> <polygon fill="#FFFFFF" points="610.75,80.695 615.046,80.695 615.046,78.817 610.75,78.817 610.75,77.025 615.352,77.025 615.352,75.107 608.409,75.107 608.409,84.993 615.763,84.993 615.763,83.045 610.75,83.045 "/> <polygon fill="#FFFFFF" points="580.546,80.695 584.842,80.695 584.842,78.817 580.546,78.817 580.546,77.025 585.147,77.025 585.147,75.107 578.205,75.107 578.205,84.993 585.56,84.993 585.56,83.045 580.546,83.045 "/> <path fill="#FFFFFF" d="M596.492,44.931l-1.038-0.154c-0.797-0.127-1.197-0.38-1.197-0.912c0-0.462,0.439-1.05,1.398-1.05 c1.009,0,1.782,0.491,2.459,1.233l1.73-1.303c-0.919-0.923-2.156-1.875-4.138-1.875c-2.421,0-3.791,1.357-3.791,3.303 c0,1.737,1.344,2.549,2.992,2.787l1.079,0.153c0.837,0.113,1.636,0.308,1.636,1.009c0,0.826-1.038,1.147-1.73,1.147 c-1.009,0-2.088-0.448-2.712-1.247l-1.783,1.192c0.957,1.174,2.088,2.002,4.282,2.002c2.688,0,4.271-1.359,4.271-3.445 C599.951,46.077,598.939,45.295,596.492,44.931z"/> <path fill="#FFFFFF" d="M625.033,78.312c0-2.828-2.208-3.205-3.604-3.205h-4.442v9.885h2.368v-3.529h1.461l1.878,3.529h2.579 l-2.168-3.95C624.131,80.666,625.033,79.993,625.033,78.312z M621.282,79.629h-1.94v-2.687h1.954c0.412,0,1.398,0.027,1.398,1.316 C622.694,78.566,622.626,79.629,621.282,79.629z"/> <polygon fill="#FFFFFF" points="620.432,46.693 624.728,46.693 624.728,44.817 620.432,44.817 620.432,43.026 625.033,43.026 625.033,41.107 618.091,41.107 618.091,50.993 625.445,50.993 625.445,49.045 620.432,49.045 "/> <polygon fill="#FFFFFF" points="650.902,47.127 647.564,41.107 645.264,41.107 645.264,50.993 647.523,50.993 647.523,45.084 650.849,50.993 653.149,50.993 653.149,41.107 650.902,41.107 "/> <polygon fill="#FFFFFF" points="653.428,41.107 653.428,43.053 655.875,43.053 655.875,50.993 658.243,50.993 658.243,43.053 660.678,43.053 660.678,41.107 "/> <path fill="#FFFFFF" d="M631.152,48.023l-1.77-6.916h-3.432v9.886h2.287c0,0-0.014-6.008-0.054-7.393l1.943,7.393h2.035l1.955-7.393 c-0.055,1.932-0.055,7.393-0.055,7.393h2.263v-9.886h-3.432L631.152,48.023z"/> <polygon fill="#FFFFFF" points="639.758,46.693 644.053,46.693 644.053,44.817 639.758,44.817 639.758,43.026 644.358,43.026 644.358,41.107 637.416,41.107 637.416,50.993 644.771,50.993 644.771,49.045 639.758,49.045 "/> <polygon fill="#FFFFFF" points="551.352,79.084 554.677,84.993 556.979,84.993 556.979,75.107 554.731,75.107 554.731,81.127 551.392,75.107 549.092,75.107 549.092,84.993 551.352,84.993 "/> <path fill="#FFFFFF" d="M555.41,95.229c0-1.833-1.211-2.898-3.059-2.898c-1.797,0-3.165,0.995-3.165,3.235V95.9l2.14,0.127 c-0.027-0.294-0.052-0.658-0.052-0.896c0-0.993,0.624-1.163,0.984-1.163c0.918,0,0.918,0.925,0.918,1.303 c0,1.498-0.771,2.296-1.837,3.275c-0.93,0.841-1.396,1.219-2.088,1.792v1.654h6.185v-1.792c-0.373,0-3.511,0.054-3.511,0.054 C554.559,98.143,555.41,96.882,555.41,95.229z"/> <path fill="#FFFFFF" d="M566.369,93.564c-0.492,0.265-0.945,0.308-1.49,0.351v1.455c1.292-0.027,1.412-0.084,1.902-0.308v6.931 h2.143v-9.494H567.3C567.127,92.878,566.955,93.24,566.369,93.564z"/> <polygon fill="#FFFFFF" points="554.344,58.107 552.455,58.107 548.413,67.993 550.302,67.993 "/> <path fill="#FFFFFF" d="M559.973,92.345c-2.208,0-3.206,2.156-3.206,4.832c0,3.065,0.998,5.027,3.127,5.027 c2.592,0,3.271-2.76,3.271-4.916C563.164,95.944,562.858,92.345,559.973,92.345z M559.973,100.466c-1.077,0-1.237-1.735-1.237-2.828 c0.013-2.156,0.267-3.542,1.21-3.542c0.984,0,1.224,1.681,1.224,3.221C561.169,98.841,560.983,100.466,559.973,100.466z"/> <path fill="#FFFFFF" d="M78.091,832.021c-37.146,0-37.146,46.347-37.146,57.282c0,38.881,15.276,56.587,36.972,56.587 c6.422,0,14.408-1.735,21.35-7.463c16.145-12.847,16.491-39.75,16.491-52.423C115.757,848.859,101.178,832.021,78.091,832.021z M78.091,940.163c-22.219,0-22.219-39.402-22.219-56.936c0-10.066,0.869-45.478,22.565-45.478c19.615,0,22.218,30.029,22.218,50.859 C100.655,905.274,99.441,940.163,78.091,940.163z"/> <path fill="#FFFFFF" d="M184.485,939.643c-12.496-0.349-16.143-2.604-17.009-9.895c-0.694-7.465-0.694-31.244-0.694-40.619 c0-9.72,0-42.179,1.041-51.551c0.174-1.737,0.694-3.646,0.694-4.167c0-0.694-0.694-0.869-1.389-1.215 c-1.389-0.694-2.083-0.869-2.604-0.869c-0.52,0-3.993,2.778-5.902,3.993c-11.455,7.465-16.491,9.72-23.433,12.498 c-0.869,0.346-1.215,1.041-1.215,2.778c0,1.214,0,2.081,0.694,2.081c0.695,0,11.456-3.645,13.713-3.645 c2.778,0,4.165,1.389,4.513,3.645c0.521,3.472,0.521,20.309,0.521,24.822c0,19.269,0,38.535-0.695,47.215 c-0.866,10.066-1.909,13.885-16.837,14.928c-3.298,0.174-3.472,0.174-3.472,2.604c0,1.561,0,1.909,1.737,1.909 c2.775,0,9.72-0.174,21.524-0.174c5.379,0,17.532,0.174,30.376,0.174c1.563,0,1.563-0.521,1.563-2.952 C187.611,939.988,187.263,939.643,184.485,939.643z"/> <path fill="#FFFFFF" d="M247.673,250.376c-2.353-0.525-3.791-1.179-7.451-4.97c-7.974-8.236-23.793-26.017-23.924-26.276 c2.875-2.093,14.774-10.329,17.258-11.896c3.66-2.355,6.144-3.663,9.935-4.708c1.308-0.392,1.699-0.523,1.699-2.093 c0-1.307-0.26-1.699-1.307-1.699c-2.484,0-7.32,0.26-14.512,0.26c-6.929,0-8.628-0.26-10.852-0.26c-1.699,0-2.353,0.392-2.353,2.353 c0,1.57,0,1.57,2.353,1.701c3.4,0.26,5.361,0.26,5.361,2.09c0,1.438-1.308,2.484-5.361,6.146 c-1.176,1.045-9.413,8.236-15.948,13.335c0.129-24.317,0.26-46.412,0.522-52.033l0.914-9.938c0-1.045-1.308-1.045-1.961-1.045 c-2.353,0-6.798,1.439-15.296,4.052c-4.705,1.438-5.228,1.57-5.228,3.662c0,1.437,0.391,1.699,1.436,1.699 c3.009,0.131,5.624,0.263,6.406,3.269c0.785,2.615,0.785,26.931,0.785,32.423c0,9.15-0.131,24.969-0.522,32.029 c-0.263,7.714-0.785,10.329-6.144,11.374c-2.615,0.394-2.877,1.176-2.877,1.961c0,1.307,0,2.355,1.83,2.355 s10.591-0.263,12.55-0.263c2.092,0,12.159,0.263,14.514,0.263c1.437,0,1.959-0.394,1.959-1.961c0-1.179-0.26-1.83-1.83-1.961 c-3.92-0.522-5.881-0.785-6.535-4.054c-0.522-2.615-0.522-13.858-0.522-17.649l3.397-2.484c6.929,7.974,11.505,12.941,15.034,16.733 c4.97,5.361,5.099,5.361,5.099,6.146c0,1.045-1.959,1.176-3.007,1.308c-1.961,0.131-1.961,0.392-1.961,2.222 c0,1.701,0.522,1.701,2.355,1.701c2.221,0,8.236-0.263,11.765-0.263c6.667,0,10.72,0.263,11.765,0.263 c1.179,0,1.701-0.394,1.701-1.833C248.72,251.29,248.589,250.505,247.673,250.376z"/> <path fill="#FFFFFF" d="M367.021,249.983c-4.968-0.654-6.538-0.785-6.538-8.497v-9.284c0-16.864,0-18.694-0.522-21.962 c-0.916-5.884-6.015-12.421-15.165-12.421c-7.845,0-15.559,3.4-24.58,7.714c0-10.329,0.131-23.139,0.394-30.984 c0.131-1.961,0.914-11.374,0.914-12.028c0-0.522,0-1.176-2.353-1.176c-1.699,0-12.419,3.269-17.912,5.099 c-2.09,0.785-2.353,0.785-2.353,2.744c0,1.308,0.263,1.438,1.439,1.438c3.922,0.394,6.275,0.523,6.929,5.099 c0.522,4.054,0.522,23.271,0.522,29.023c0,21.965-0.262,26.802-0.522,34.253c-0.262,5.624-0.916,9.938-6.275,10.852 c-2.224,0.262-2.484,0.394-2.484,2.615c0,1.176,0.26,1.701,1.699,1.701c1.699,0,10.46-0.263,12.55-0.263 c2.092,0,12.55,0.263,14.905,0.263c1.567,0,1.961-0.263,1.961-2.093c0-1.699-0.262-2.092-2.092-2.092 c-4.183-0.26-5.884-1.045-6.538-4.183c-0.522-2.877-0.654-8.89-0.785-35.954c3.531-1.307,9.152-3.397,14.514-3.397 c13.073,0,13.073,10.066,13.073,20.264c0,3.66-0.263,15.425-0.916,18.303c-0.654,3.006-1.959,4.183-5.359,4.836 c-2.353,0.394-2.615,0.525-2.615,2.355c0,1.567,0.131,1.961,1.57,1.961c1.699,0,10.067-0.263,12.028-0.263 c4.052,0,10.589,0.263,14.641,0.263c1.832,0,2.224-0.394,2.224-2.093C369.373,250.245,369.11,250.114,367.021,249.983z"/> <path fill="#FFFFFF" d="M58.385,253.905c4.445,0.131,8.761,0.131,13.075,0.131c10.458,0,18.825-0.263,25.101-3.269 c10.198-4.836,14.511-14.12,14.511-21.44c0-5.23-2.09-19.35-25.492-21.442c5.228-1.437,18.694-4.968,18.694-18.825 c0-6.275-3.529-12.028-8.89-15.166c-5.622-3.138-12.159-3.4-18.434-3.4c-2.484,0-20.918,0.394-24.84,0.394 c-1.437,0.131-7.974,0-9.544,0c-2.353,0-2.353,0.26-2.353,2.484c0,1.308,0.262,1.567,1.438,1.567 c2.353,0.131,5.359,0.394,6.798,1.57c1.961,1.699,2.746,2.353,2.746,34.645c0,9.807,0,21.443-0.522,29.286 c-0.654,8.105-3.269,9.152-8.761,9.675c-2.09,0.263-2.353,0.263-2.353,1.961c0,1.961,0,2.222,2.353,2.222 C44.268,254.297,55.772,253.905,58.385,253.905z M65.186,177.686c0-2.222,0.522-2.484,5.228-2.484c5.884,0,18.565,0,18.565,15.688 c0,6.668-2.484,12.55-8.105,14.905c-3.529,1.439-6.538,1.699-16.081,1.699C64.792,204.225,64.792,189.19,65.186,177.686z M64.792,212.069c13.466-0.262,30.855-0.522,30.855,18.172c0,6.929-3.008,13.729-9.152,16.735 c-4.445,2.221-9.804,2.353-11.765,2.353c-6.669,0-8.761-1.699-9.413-5.753C64.663,239.525,64.792,218.214,64.792,212.069z"/> <path fill="#FFFFFF" d="M297.216,214.945c-0.785-0.26-0.917-0.523-1.57-3.267c-1.83-7.191-9.152-14.12-19.741-14.12 c-13.204,0-27.324,11.505-27.324,31.769c0,10.327,4.314,26.146,23.142,26.146c13.727,0,24.969-8.89,24.969-10.458 c0-0.262,0-0.262-0.26-1.308l-0.522-1.961h-0.785c-7.06,5.23-14.12,5.23-15.559,5.23c-15.688,0-17.387-16.082-17.78-20.396 c12.552-2.484,20.135-3.922,32.816-5.884c3.269-0.522,3.529-0.654,3.529-2.744C298.129,215.861,298.129,215.207,297.216,214.945z M278.519,218.345c-6.538,1.699-10.329,2.615-16.995,3.792c0.131-13.989,5.49-19.088,10.852-19.088 c6.406,0,10.72,7.191,10.72,11.768C283.096,216.121,282.702,217.3,278.519,218.345z"/> <path fill="#FFFFFF" d="M178.131,225.536c0-13.729-9.544-27.978-28.894-27.978c-18.172,0-32.946,10.98-32.946,29.286 c0,18.825,13.335,28.629,28.894,28.629C162.703,255.473,178.131,244.099,178.131,225.536z M130.28,222.136 c0-12.55,6.929-18.957,14.774-18.957c10.851,0,19.088,12.027,19.088,27.324c0,13.072-6.669,19.348-14.774,19.348 C139.955,249.852,130.28,240.439,130.28,222.136z"/>',
                    title: "Bokeh",
                    date: "november, twelve",
                    img: "data/poster/bokeh",
                    itemcolor: "#d94034",
                    bgcolor: "#111",
                    preload: [],
                    white: 1,
                    browser: ["ch", "ff", "sf", "ie", "ie10"]
                }
            }]
        }
    };
    function l() {
        i.configArr = [];
        i.screensaverArr = [];
        i.imgArr = [];
        i.screensaverID = [];
        i.sectionID = [];
        j = document.getElementById("pantone-loading");
        e = document.getElementById("preloader");
        i.configArr = c.data.section;
        i.screensaverArr = c.data.screensaver;
        i.total = i.configArr.length;
        i.screensaverTotal = i.screensaverArr.length;
        var q = [], o, p = i.total, n, r;
        for (o = 0; o < i.screensaverTotal; o++) {
            r = i.screensaverArr[o].item.id;
            i.screensaverID[o] = r
        }
        for (o = 0; o < p; o++) {
            n = i.configArr[o].poster.img;
            i.imgArr[o] = n;
            q[o] = '<img src="' + n + '_c.png">';
            r = i.configArr[o].poster.id;
            i.sectionID[o] = r
        }
        q.push('<img src="images/about-press@2x.png">');
        q.push('<img src="images/buttons@2x.png">');
        q.push('<img src="images/guide@2x.png">');
        if (!CMDetect.isDevice) {
            q.push('<img src="images/cinema.png">')
        }
        return q
    }
    function h(p) {
        if (p == "") {
            return 0
        }
        var n, o = i.screensaverTotal;
        for (n = 0; n < o; n++) {
            if (p == i.screensaverArr[n].item.id) {
                return n
            }
        }
        return 0
    }
    function f(p) {
        if (p == "") {
            return 0
        }
        var n, o = i.total;
        for (n = 0; n < o; n++) {
            if (p == i.configArr[n].poster.id) {
                return n
            }
        }
        return 0
    }
    function k(q, p, n, o) {
        j.style.display = "block";
        j.style.backgroundColor = ConfigModel.configArr[p].poster.bgcolor;
        TweenLite.set(j, {
            css: {
                x: -StageController.stageWidth
            }
        });
        TweenLite.to(j, 1, {
            css: {
                x: 0
            },
            ease: Cubic.easeInOut,
            onComplete: a,
            onCompleteParams: [q, p, n, o]
        })
    }
    function a(q, p, n, o) {
        d(q, p, n, o)
    }
    function d(t, s, o, q) {
        var p = ConfigModel.configArr[s].poster.browser, r = ConfigModel.configArr[s].poster.preload, n;
        CircleAniamtion.ready();
        if (p.indexOf(CMDetect.browserName) != -1 || CMDetect.isDevice) {
            n = ConfigModel.configArr[s].poster.classfn;
            g(r)
        } else {
            n = BrowserError;
            CircleAniamtion.loaded()
        }
        Contents.init(t, s, o, q, n)
    }
    function g(s) {
        var o = [], p, r = s.length;
        if (r != 0) {
            for (p = 0; p < r; p++) {
                o[p] = '<img src="' + s[p] + '">'
            }
            var q = o.join("");
            e.innerHTML = q;
            var n = $(e).imagesLoaded();
            n.always(function() {
                e.innerHTML = "";
                n = null ;
                CircleAniamtion.loaded()
            }
            )
        } else {
            CircleAniamtion.loaded()
        }
    }
    i.load = k;
    i.init = l;
    i.convertIdToOrder = f;
    i.convertSaverIdToOrder = h;
    i.svgHeader = m;
    i.svgTxt = b;
    return i
}
)();
