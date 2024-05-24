function _toConsumableArray(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
  return Array.from(t);
}
!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (C, t) {
  function s(t) {
    var e = !!t && "length" in t && t.length,
      n = pt.type(t);
    return (
      "function" !== n &&
      !pt.isWindow(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && 0 < e && e - 1 in t))
    );
  }
  function e(t, n, i) {
    if (pt.isFunction(n))
      return pt.grep(t, function (t, e) {
        return !!n.call(t, e, t) !== i;
      });
    if (n.nodeType)
      return pt.grep(t, function (t) {
        return (t === n) !== i;
      });
    if ("string" == typeof n) {
      if (St.test(n)) return pt.filter(n, t, i);
      n = pt.filter(n, t);
    }
    return pt.grep(t, function (t) {
      return -1 < pt.inArray(t, n) !== i;
    });
  }
  function n(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function c(t) {
    var n = {};
    return (
      pt.each(t.match(Nt) || [], function (t, e) {
        n[e] = !0;
      }),
      n
    );
  }
  function r() {
    rt.addEventListener
      ? (rt.removeEventListener("DOMContentLoaded", o),
        C.removeEventListener("load", o))
      : (rt.detachEvent("onreadystatechange", o), C.detachEvent("onload", o));
  }
  function o() {
    (rt.addEventListener ||
      "load" === C.event.type ||
      "complete" === rt.readyState) &&
      (r(), pt.ready());
  }
  function l(t, e, n) {
    if (n === undefined && 1 === t.nodeType) {
      var i = "data-" + e.replace(Lt, "-$1").toLowerCase();
      if ("string" == typeof (n = t.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : $t.test(n)
                ? pt.parseJSON(n)
                : n));
        } catch (r) {}
        pt.data(t, e, n);
      } else n = undefined;
    }
    return n;
  }
  function u(t) {
    var e;
    for (e in t)
      if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e)
        return !1;
    return !0;
  }
  function i(t, e, n, i) {
    if (Ft(t)) {
      var r,
        o,
        a = pt.expando,
        s = t.nodeType,
        l = s ? pt.cache : t,
        u = s ? t[a] : t[a] && a;
      if (
        (u && l[u] && (i || l[u].data)) ||
        n !== undefined ||
        "string" != typeof e
      )
        return (
          u || (u = s ? (t[a] = it.pop() || pt.guid++) : a),
          l[u] || (l[u] = s ? {} : { toJSON: pt.noop }),
          ("object" != typeof e && "function" != typeof e) ||
            (i
              ? (l[u] = pt.extend(l[u], e))
              : (l[u].data = pt.extend(l[u].data, e))),
          (o = l[u]),
          i || (o.data || (o.data = {}), (o = o.data)),
          n !== undefined && (o[pt.camelCase(e)] = n),
          "string" == typeof e
            ? null == (r = o[e]) && (r = o[pt.camelCase(e)])
            : (r = o),
          r
        );
    }
  }
  function a(t, e, n) {
    if (Ft(t)) {
      var i,
        r,
        o = t.nodeType,
        a = o ? pt.cache : t,
        s = o ? t[pt.expando] : pt.expando;
      if (a[s]) {
        if (e && (i = n ? a[s] : a[s].data)) {
          r = (e = pt.isArray(e)
            ? e.concat(pt.map(e, pt.camelCase))
            : e in i
            ? [e]
            : (e = pt.camelCase(e)) in i
            ? [e]
            : e.split(" ")).length;
          for (; r--; ) delete i[e[r]];
          if (n ? !u(i) : !pt.isEmptyObject(i)) return;
        }
        (n || (delete a[s].data, u(a[s]))) &&
          (o
            ? pt.cleanData([t], !0)
            : ft.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = undefined));
      }
    }
  }
  function d(t, e, n, i) {
    var r,
      o = 1,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return pt.css(t, e, "");
          },
      l = s(),
      u = (n && n[3]) || (pt.cssNumber[e] ? "" : "px"),
      c = (pt.cssNumber[e] || ("px" !== u && +l)) && Ht.exec(pt.css(t, e));
    if (c && c[3] !== u)
      for (
        u = u || c[3], n = n || [], c = +l || 1;
        (c /= o = o || ".5"),
          pt.style(t, e, c + u),
          o !== (o = s() / l) && 1 !== o && --a;

      );
    return (
      n &&
        ((c = +c || +l || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = u), (i.start = c), (i.end = r))),
      r
    );
  }
  function g(t) {
    var e = Jt.split("|"),
      n = t.createDocumentFragment();
    if (n.createElement) for (; e.length; ) n.createElement(e.pop());
    return n;
  }
  function v(t, e) {
    var n,
      i,
      r = 0,
      o =
        "undefined" != typeof t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : "undefined" != typeof t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : undefined;
    if (!o)
      for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)
        !e || pt.nodeName(i, e) ? o.push(i) : pt.merge(o, v(i, e));
    return e === undefined || (e && pt.nodeName(t, e)) ? pt.merge([t], o) : o;
  }
  function y(t, e) {
    for (var n, i = 0; null != (n = t[i]); i++)
      pt._data(n, "globalEval", !e || pt._data(e[i], "globalEval"));
  }
  function b(t) {
    Ut.test(t.type) && (t.defaultChecked = t.checked);
  }
  function m(t, e, n, i, r) {
    for (
      var o, a, s, l, u, c, d, f = t.length, h = g(e), p = [], m = 0;
      m < f;
      m++
    )
      if ((a = t[m]) || 0 === a)
        if ("object" === pt.type(a)) pt.merge(p, a.nodeType ? [a] : a);
        else if (Yt.test(a)) {
          for (
            l = l || h.appendChild(e.createElement("div")),
              u = (Vt.exec(a) || ["", ""])[1].toLowerCase(),
              d = Gt[u] || Gt._default,
              l.innerHTML = d[1] + pt.htmlPrefilter(a) + d[2],
              o = d[0];
            o--;

          )
            l = l.lastChild;
          if (
            (!ft.leadingWhitespace &&
              Xt.test(a) &&
              p.push(e.createTextNode(Xt.exec(a)[0])),
            !ft.tbody)
          )
            for (
              o =
                (a =
                  "table" !== u || Kt.test(a)
                    ? "<table>" !== d[1] || Kt.test(a)
                      ? 0
                      : l
                    : l.firstChild) && a.childNodes.length;
              o--;

            )
              pt.nodeName((c = a.childNodes[o]), "tbody") &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (pt.merge(p, l.childNodes), l.textContent = ""; l.firstChild; )
            l.removeChild(l.firstChild);
          l = h.lastChild;
        } else p.push(e.createTextNode(a));
    for (
      l && h.removeChild(l),
        ft.appendChecked || pt.grep(v(p, "input"), b),
        m = 0;
      (a = p[m++]);

    )
      if (i && -1 < pt.inArray(a, i)) r && r.push(a);
      else if (
        ((s = pt.contains(a.ownerDocument, a)),
        (l = v(h.appendChild(a), "script")),
        s && y(l),
        n)
      )
        for (o = 0; (a = l[o++]); ) zt.test(a.type || "") && n.push(a);
    return (l = null), h;
  }
  function f() {
    return !0;
  }
  function h() {
    return !1;
  }
  function p() {
    try {
      return rt.activeElement;
    } catch (t) {}
  }
  function w(t, e, n, i, r, o) {
    var a, s;
    if ("object" == typeof e) {
      for (s in ("string" != typeof n && ((i = i || n), (n = undefined)), e))
        w(t, s, n, i, e[s], o);
      return t;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = undefined))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = undefined))
            : ((r = i), (i = n), (n = undefined))),
      !1 === r)
    )
      r = h;
    else if (!r) return t;
    return (
      1 === o &&
        ((a = r),
        ((r = function (t) {
          return pt().off(t), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = pt.guid++))),
      t.each(function () {
        pt.event.add(this, e, r, i, n);
      })
    );
  }
  function x(t, e) {
    return pt.nodeName(t, "table") &&
      pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function S(t) {
    return (t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type), t;
  }
  function T(t) {
    var e = le.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function D(t, e) {
    if (1 === e.nodeType && pt.hasData(t)) {
      var n,
        i,
        r,
        o = pt._data(t),
        a = pt._data(e, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (i = 0, r = s[n].length; i < r; i++) pt.event.add(e, n, s[n][i]);
      a.data && (a.data = pt.extend({}, a.data));
    }
  }
  function E(t, e) {
    var n, i, r;
    if (1 === e.nodeType) {
      if (((n = e.nodeName.toLowerCase()), !ft.noCloneEvent && e[pt.expando])) {
        for (i in (r = pt._data(e)).events) pt.removeEvent(e, i, r.handle);
        e.removeAttribute(pt.expando);
      }
      "script" === n && e.text !== t.text
        ? ((S(e).text = t.text), T(e))
        : "object" === n
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          ft.html5Clone &&
            t.innerHTML &&
            !pt.trim(e.innerHTML) &&
            (e.innerHTML = t.innerHTML))
        : "input" === n && Ut.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked),
          e.value !== t.value && (e.value = t.value))
        : "option" === n
        ? (e.defaultSelected = e.selected = t.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (e.defaultValue = t.defaultValue);
    }
  }
  function k(n, i, r, o) {
    i = at.apply([], i);
    var t,
      e,
      a,
      s,
      l,
      u,
      c = 0,
      d = n.length,
      f = d - 1,
      h = i[0],
      p = pt.isFunction(h);
    if (p || (1 < d && "string" == typeof h && !ft.checkClone && se.test(h)))
      return n.each(function (t) {
        var e = n.eq(t);
        p && (i[0] = h.call(this, t, e.html())), k(e, i, r, o);
      });
    if (
      d &&
      ((t = (u = m(i, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === u.childNodes.length && (u = t),
      t || o)
    ) {
      for (a = (s = pt.map(v(u, "script"), S)).length; c < d; c++)
        (e = u),
          c !== f &&
            ((e = pt.clone(e, !0, !0)), a && pt.merge(s, v(e, "script"))),
          r.call(n[c], e, c);
      if (a)
        for (l = s[s.length - 1].ownerDocument, pt.map(s, T), c = 0; c < a; c++)
          (e = s[c]),
            zt.test(e.type || "") &&
              !pt._data(e, "globalEval") &&
              pt.contains(l, e) &&
              (e.src
                ? pt._evalUrl && pt._evalUrl(e.src)
                : pt.globalEval(
                    (e.text || e.textContent || e.innerHTML || "").replace(
                      ue,
                      ""
                    )
                  ));
      u = t = null;
    }
    return n;
  }
  function A(t, e, n) {
    for (var i, r = e ? pt.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || pt.cleanData(v(i)),
        i.parentNode &&
          (n && pt.contains(i.ownerDocument, i) && y(v(i, "script")),
          i.parentNode.removeChild(i));
    return t;
  }
  function j(t, e) {
    var n = pt(e.createElement(t)).appendTo(e.body),
      i = pt.css(n[0], "display");
    return n.detach(), i;
  }
  function N(t) {
    var e = rt,
      n = fe[t];
    return (
      n ||
        (("none" !== (n = j(t, e)) && n) ||
          ((e = (
            (de = (
              de || pt("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(e.documentElement))[0].contentWindow ||
            de[0].contentDocument
          ).document).write(),
          e.close(),
          (n = j(t, e)),
          de.detach()),
        (fe[t] = n)),
      n
    );
  }
  function I(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function F(t) {
    if (t in Ee) return t;
    for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = De.length; n--; )
      if ((t = De[n] + e) in Ee) return t;
  }
  function $(t, e) {
    for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++)
      (i = t[a]).style &&
        ((o[a] = pt._data(i, "olddisplay")),
        (n = i.style.display),
        e
          ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              Wt(i) &&
              (o[a] = pt._data(i, "olddisplay", N(i.nodeName))))
          : ((r = Wt(i)),
            ((n && "none" !== n) || !r) &&
              pt._data(i, "olddisplay", r ? n : pt.css(i, "display"))));
    for (a = 0; a < s; a++)
      (i = t[a]).style &&
        ((e && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = e ? o[a] || "" : "none"));
    return t;
  }
  function L(t, e, n) {
    var i = Ce.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
  }
  function O(t, e, n, i, r) {
    for (
      var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        a = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += pt.css(t, n + Bt[o], !0, r)),
        i
          ? ("content" === n && (a -= pt.css(t, "padding" + Bt[o], !0, r)),
            "margin" !== n &&
              (a -= pt.css(t, "border" + Bt[o] + "Width", !0, r)))
          : ((a += pt.css(t, "padding" + Bt[o], !0, r)),
            "padding" !== n &&
              (a += pt.css(t, "border" + Bt[o] + "Width", !0, r)));
    return a;
  }
  function P(t, e, n) {
    var i = !0,
      r = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = ve(t),
      a = ft.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o);
    if (r <= 0 || null == r) {
      if (
        (((r = ye(t, e, o)) < 0 || null == r) && (r = t.style[e]), pe.test(r))
      )
        return r;
      (i = a && (ft.boxSizingReliable() || r === t.style[e])),
        (r = parseFloat(r) || 0);
    }
    return r + O(t, e, n || (a ? "border" : "content"), i, o) + "px";
  }
  function R(t, e, n, i, r) {
    return new R.prototype.init(t, e, n, i, r);
  }
  function M() {
    return (
      C.setTimeout(function () {
        ke = undefined;
      }),
      (ke = pt.now())
    );
  }
  function H(t, e) {
    var n,
      i = { height: t },
      r = 0;
    for (e = e ? 1 : 0; r < 4; r += 2 - e)
      i["margin" + (n = Bt[r])] = i["padding" + n] = t;
    return e && (i.opacity = i.width = t), i;
  }
  function B(t, e, n) {
    for (
      var i,
        r = (U.tweeners[e] || []).concat(U.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, e, t))) return i;
  }
  function W(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      l,
      u,
      c = this,
      d = {},
      f = e.style,
      h = e.nodeType && Wt(e),
      p = pt._data(e, "fxshow");
    for (i in (n.queue ||
      (null == (s = pt._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (l = s.empty.fire),
        (s.empty.fire = function () {
          s.unqueued || l();
        })),
      s.unqueued++,
      c.always(function () {
        c.always(function () {
          s.unqueued--, pt.queue(e, "fx").length || s.empty.fire();
        });
      })),
    1 === e.nodeType &&
      ("height" in t || "width" in t) &&
      ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
      "inline" ===
        ("none" === (u = pt.css(e, "display"))
          ? pt._data(e, "olddisplay") || N(e.nodeName)
          : u) &&
        "none" === pt.css(e, "float") &&
        (ft.inlineBlockNeedsLayout && "inline" !== N(e.nodeName)
          ? (f.zoom = 1)
          : (f.display = "inline-block"))),
    n.overflow &&
      ((f.overflow = "hidden"),
      ft.shrinkWrapBlocks() ||
        c.always(function () {
          (f.overflow = n.overflow[0]),
            (f.overflowX = n.overflow[1]),
            (f.overflowY = n.overflow[2]);
        })),
    t))
      if (((r = t[i]), Le.exec(r))) {
        if (
          (delete t[i], (o = o || "toggle" === r), r === (h ? "hide" : "show"))
        ) {
          if ("show" !== r || !p || p[i] === undefined) continue;
          h = !0;
        }
        d[i] = (p && p[i]) || pt.style(e, i);
      } else u = undefined;
    if (pt.isEmptyObject(d))
      "inline" === ("none" === u ? N(e.nodeName) : u) && (f.display = u);
    else
      for (i in (p
        ? "hidden" in p && (h = p.hidden)
        : (p = pt._data(e, "fxshow", {})),
      o && (p.hidden = !h),
      h
        ? pt(e).show()
        : c.done(function () {
            pt(e).hide();
          }),
      c.done(function () {
        var t;
        for (t in (pt._removeData(e, "fxshow"), d)) pt.style(e, t, d[t]);
      }),
      d))
        (a = B(h ? p[i] : 0, i, c)),
          i in p ||
            ((p[i] = a.start),
            h &&
              ((a.end = a.start),
              (a.start = "width" === i || "height" === i ? 1 : 0)));
  }
  function q(t, e) {
    var n, i, r, o, a;
    for (n in t)
      if (
        ((r = e[(i = pt.camelCase(n))]),
        (o = t[n]),
        pt.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
        n !== i && ((t[i] = o), delete t[n]),
        (a = pt.cssHooks[i]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete t[i], o))
          n in t || ((t[n] = o[n]), (e[n] = r));
      else e[i] = r;
  }
  function U(o, t, e) {
    var n,
      a,
      i = 0,
      r = U.prefilters.length,
      s = pt.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (a) return !1;
        for (
          var t = ke || M(),
            e = Math.max(0, u.startTime + u.duration - t),
            n = 1 - (e / u.duration || 0),
            i = 0,
            r = u.tweens.length;
          i < r;
          i++
        )
          u.tweens[i].run(n);
        return (
          s.notifyWith(o, [u, n, e]),
          n < 1 && r ? e : (s.resolveWith(o, [u]), !1)
        );
      },
      u = s.promise({
        elem: o,
        props: pt.extend({}, t),
        opts: pt.extend(
          !0,
          { specialEasing: {}, easing: pt.easing._default },
          e
        ),
        originalProperties: t,
        originalOptions: e,
        startTime: ke || M(),
        duration: e.duration,
        tweens: [],
        createTween: function (t, e) {
          var n = pt.Tween(
            o,
            u.opts,
            t,
            e,
            u.opts.specialEasing[t] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (t) {
          var e = 0,
            n = t ? u.tweens.length : 0;
          if (a) return this;
          for (a = !0; e < n; e++) u.tweens[e].run(1);
          return (
            t
              ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, t]))
              : s.rejectWith(o, [u, t]),
            this
          );
        },
      }),
      c = u.props;
    for (q(c, u.opts.specialEasing); i < r; i++)
      if ((n = U.prefilters[i].call(u, o, c, u.opts)))
        return (
          pt.isFunction(n.stop) &&
            (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(n.stop, n)),
          n
        );
    return (
      pt.map(c, B, u),
      pt.isFunction(u.opts.start) && u.opts.start.call(o, u),
      pt.fx.timer(pt.extend(l, { elem: o, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function V(t) {
    return pt.attr(t, "class") || "";
  }
  function z(o) {
    return function (t, e) {
      "string" != typeof t && ((e = t), (t = "*"));
      var n,
        i = 0,
        r = t.toLowerCase().match(Nt) || [];
      if (pt.isFunction(e))
        for (; (n = r[i++]); )
          "+" === n.charAt(0)
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(e))
            : (o[n] = o[n] || []).push(e);
    };
  }
  function X(e, r, o, a) {
    function s(t) {
      var i;
      return (
        (l[t] = !0),
        pt.each(e[t] || [], function (t, e) {
          var n = e(r, o, a);
          return "string" != typeof n || u || l[n]
            ? u
              ? !(i = n)
              : void 0
            : (r.dataTypes.unshift(n), s(n), !1);
        }),
        i
      );
    }
    var l = {},
      u = e === sn;
    return s(r.dataTypes[0]) || (!l["*"] && s("*"));
  }
  function J(t, e) {
    var n,
      i,
      r = pt.ajaxSettings.flatOptions || {};
    for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
    return n && pt.extend(!0, t, n), t;
  }
  function G(t, e, n) {
    for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        r === undefined &&
          (r = t.mimeType || e.getResponseHeader("Content-Type"));
    if (r)
      for (a in s)
        if (s[a] && s[a].test(r)) {
          l.unshift(a);
          break;
        }
    if (l[0] in n) o = l[0];
    else {
      for (a in n) {
        if (!l[0] || t.converters[a + " " + l[0]]) {
          o = a;
          break;
        }
        i || (i = a);
      }
      o = o || i;
    }
    if (o) return o !== l[0] && l.unshift(o), n[o];
  }
  function Y(t, e, n, i) {
    var r,
      o,
      a,
      s,
      l,
      u = {},
      c = t.dataTypes.slice();
    if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
    for (o = c.shift(); o; )
      if (
        (t.responseFields[o] && (n[t.responseFields[o]] = e),
        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = o),
        (o = c.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (!(a = u[l + " " + o] || u["* " + o]))
            for (r in u)
              if (
                (s = r.split(" "))[1] === o &&
                (a = u[l + " " + s[0]] || u["* " + s[0]])
              ) {
                !0 === a
                  ? (a = u[r])
                  : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && t["throws"]) e = a(e);
            else
              try {
                e = a(e);
              } catch (d) {
                return {
                  state: "parsererror",
                  error: a ? d : "No conversion from " + l + " to " + o,
                };
              }
        }
    return { state: "success", data: e };
  }
  function K(t) {
    return (t.style && t.style.display) || pt.css(t, "display");
  }
  function Q(t) {
    if (!pt.contains(t.ownerDocument || rt, t)) return !0;
    for (; t && 1 === t.nodeType; ) {
      if ("none" === K(t) || "hidden" === t.type) return !0;
      t = t.parentNode;
    }
    return !1;
  }
  function Z(n, t, i, r) {
    var e;
    if (pt.isArray(t))
      pt.each(t, function (t, e) {
        i || fn.test(n)
          ? r(n, e)
          : Z(
              n + "[" + ("object" == typeof e && null != e ? t : "") + "]",
              e,
              i,
              r
            );
      });
    else if (i || "object" !== pt.type(t)) r(n, t);
    else for (e in t) Z(n + "[" + e + "]", t[e], i, r);
  }
  function tt() {
    try {
      return new C.XMLHttpRequest();
    } catch (t) {}
  }
  function et() {
    try {
      return new C.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function nt(t) {
    return pt.isWindow(t)
      ? t
      : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  var it = [],
    rt = C.document,
    ot = it.slice,
    at = it.concat,
    st = it.push,
    lt = it.indexOf,
    ut = {},
    ct = ut.toString,
    dt = ut.hasOwnProperty,
    ft = {},
    ht = "1.12.4",
    pt = function (t, e) {
      return new pt.fn.init(t, e);
    },
    mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    gt = /^-ms-/,
    vt = /-([\da-z])/gi,
    yt = function (t, e) {
      return e.toUpperCase();
    };
  (pt.fn = pt.prototype =
    {
      jquery: ht,
      constructor: pt,
      selector: "",
      length: 0,
      toArray: function () {
        return ot.call(this);
      },
      get: function (t) {
        return null != t
          ? t < 0
            ? this[t + this.length]
            : this[t]
          : ot.call(this);
      },
      pushStack: function (t) {
        var e = pt.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t) {
        return pt.each(this, t);
      },
      map: function (n) {
        return this.pushStack(
          pt.map(this, function (t, e) {
            return n.call(t, e, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(ot.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(0 <= n && n < e ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: st,
      sort: it.sort,
      splice: it.splice,
    }),
    (pt.extend = pt.fn.extend =
      function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s = t || {},
          l = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[l] || {}), l++),
            "object" == typeof s || pt.isFunction(s) || (s = {}),
            l === u && ((s = this), l--);
          l < u;
          l++
        )
          if (null != (o = arguments[l]))
            for (r in o)
              (e = s[r]),
                s !== (i = o[r]) &&
                  (c && i && (pt.isPlainObject(i) || (n = pt.isArray(i)))
                    ? (n
                        ? ((n = !1), (a = e && pt.isArray(e) ? e : []))
                        : (a = e && pt.isPlainObject(e) ? e : {}),
                      (s[r] = pt.extend(c, a, i)))
                    : i !== undefined && (s[r] = i));
        return s;
      }),
    pt.extend({
      expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === pt.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return "array" === pt.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        var e = t && t.toString();
        return !pt.isArray(t) && 0 <= e - parseFloat(e) + 1;
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      isPlainObject: function (t) {
        var e;
        if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t))
          return !1;
        try {
          if (
            t.constructor &&
            !dt.call(t, "constructor") &&
            !dt.call(t.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!ft.ownFirst) for (e in t) return dt.call(t, e);
        for (e in t);
        return e === undefined || dt.call(t, e);
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? ut[ct.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        t &&
          pt.trim(t) &&
          (
            C.execScript ||
            function (t) {
              C.eval.call(C, t);
            }
          )(t);
      },
      camelCase: function (t) {
        return t.replace(gt, "ms-").replace(vt, yt);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e) {
        var n,
          i = 0;
        if (s(t))
          for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(mt, "");
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (s(Object(t))
              ? pt.merge(n, "string" == typeof t ? [t] : t)
              : st.call(n, t)),
          n
        );
      },
      inArray: function (t, e, n) {
        var i;
        if (e) {
          if (lt) return lt.call(e, t, n);
          for (
            i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
            n < i;
            n++
          )
            if (n in e && e[n] === t) return n;
        }
        return -1;
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, r = t.length; i < n; ) t[r++] = e[i++];
        if (n != n) for (; e[i] !== undefined; ) t[r++] = e[i++];
        return (t.length = r), t;
      },
      grep: function (t, e, n) {
        for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)
          !e(t[r], r) !== a && i.push(t[r]);
        return i;
      },
      map: function (t, e, n) {
        var i,
          r,
          o = 0,
          a = [];
        if (s(t))
          for (i = t.length; o < i; o++)
            null != (r = e(t[o], o, n)) && a.push(r);
        else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
        return at.apply([], a);
      },
      guid: 1,
      proxy: function (t, e) {
        var n, i, r;
        return (
          "string" == typeof e && ((r = t[e]), (e = t), (t = r)),
          pt.isFunction(t)
            ? ((n = ot.call(arguments, 2)),
              ((i = function () {
                return t.apply(e || this, n.concat(ot.call(arguments)));
              }).guid = t.guid =
                t.guid || pt.guid++),
              i)
            : undefined
        );
      },
      now: function () {
        return +new Date();
      },
      support: ft,
    }),
    "function" == typeof Symbol &&
      (pt.fn[Symbol.iterator] = it[Symbol.iterator]),
    pt.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        ut["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var bt = (function (n) {
    function w(t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        f = e && e.ownerDocument,
        h = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((e ? e.ownerDocument || e : H) !== I && N(e), (e = e || I), $)
      ) {
        if (11 !== h && (u = vt.exec(t)))
          if ((r = u[1])) {
            if (9 === h) {
              if (!(a = e.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n;
            } else if (f && (a = f.getElementById(r)) && R(e, a) && a.id === r)
              return n.push(a), n;
          } else {
            if (u[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
            if (
              (r = u[3]) &&
              v.getElementsByClassName &&
              e.getElementsByClassName
            )
              return Q.apply(n, e.getElementsByClassName(r)), n;
          }
        if (v.qsa && !V[t + " "] && (!L || !L.test(t))) {
          if (1 !== h) (f = e), (d = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (s = e.getAttribute("id"))
                ? (s = s.replace(bt, "\\$&"))
                : e.setAttribute("id", (s = M)),
                o = (c = T(t)).length,
                l = ft.test(s) ? "#" + s : "[id='" + s + "']";
              o--;

            )
              c[o] = l + " " + g(c[o]);
            (d = c.join(",")), (f = (yt.test(t) && m(e.parentNode)) || e);
          }
          if (d)
            try {
              return Q.apply(n, f.querySelectorAll(d)), n;
            } catch (p) {
            } finally {
              s === M && e.removeAttribute("id");
            }
        }
      }
      return E(t.replace(st, "$1"), e, n, i);
    }
    function t() {
      function n(t, e) {
        return (
          i.push(t + " ") > x.cacheLength && delete n[i.shift()],
          (n[t + " "] = e)
        );
      }
      var i = [];
      return n;
    }
    function l(t) {
      return (t[M] = !0), t;
    }
    function r(t) {
      var e = I.createElement("div");
      try {
        return !!t(e);
      } catch (n) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function e(t, e) {
      for (var n = t.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = e;
    }
    function u(t, e) {
      var n = e && t,
        i =
          n &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || X) - (~t.sourceIndex || X);
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
      return t ? 1 : -1;
    }
    function i(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function o(n) {
      return function (t) {
        var e = t.nodeName.toLowerCase();
        return ("input" === e || "button" === e) && t.type === n;
      };
    }
    function a(a) {
      return l(function (o) {
        return (
          (o = +o),
          l(function (t, e) {
            for (var n, i = a([], t.length, o), r = i.length; r--; )
              t[(n = i[r])] && (t[n] = !(e[n] = t[n]));
          })
        );
      });
    }
    function m(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t;
    }
    function s() {}
    function g(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
      return i;
    }
    function d(s, t, e) {
      var l = t.dir,
        u = e && "parentNode" === l,
        c = W++;
      return t.first
        ? function (t, e, n) {
            for (; (t = t[l]); ) if (1 === t.nodeType || u) return s(t, e, n);
          }
        : function (t, e, n) {
            var i,
              r,
              o,
              a = [B, c];
            if (n) {
              for (; (t = t[l]); )
                if ((1 === t.nodeType || u) && s(t, e, n)) return !0;
            } else
              for (; (t = t[l]); )
                if (1 === t.nodeType || u) {
                  if (
                    (i = (r =
                      (o = t[M] || (t[M] = {}))[t.uniqueID] ||
                      (o[t.uniqueID] = {}))[l]) &&
                    i[0] === B &&
                    i[1] === c
                  )
                    return (a[2] = i[2]);
                  if (((r[l] = a)[2] = s(t, e, n))) return !0;
                }
          };
    }
    function f(r) {
      return 1 < r.length
        ? function (t, e, n) {
            for (var i = r.length; i--; ) if (!r[i](t, e, n)) return !1;
            return !0;
          }
        : r[0];
    }
    function y(t, e, n) {
      for (var i = 0, r = e.length; i < r; i++) w(t, e[i], n);
      return n;
    }
    function _(t, e, n, i, r) {
      for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
        (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), u && e.push(s)));
      return a;
    }
    function b(h, p, m, g, v, t) {
      return (
        g && !g[M] && (g = b(g)),
        v && !v[M] && (v = b(v, t)),
        l(function (t, e, n, i) {
          var r,
            o,
            a,
            s = [],
            l = [],
            u = e.length,
            c = t || y(p || "*", n.nodeType ? [n] : n, []),
            d = !h || (!t && p) ? c : _(c, s, h, n, i),
            f = m ? (v || (t ? h : u || g) ? [] : e) : d;
          if ((m && m(d, f, n, i), g))
            for (r = _(f, l), g(r, [], n, i), o = r.length; o--; )
              (a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
          if (t) {
            if (v || h) {
              if (v) {
                for (r = [], o = f.length; o--; )
                  (a = f[o]) && r.push((d[o] = a));
                v(null, (f = []), r, i);
              }
              for (o = f.length; o--; )
                (a = f[o]) &&
                  -1 < (r = v ? tt(t, a) : s[o]) &&
                  (t[r] = !(e[r] = a));
            }
          } else (f = _(f === e ? f.splice(u, f.length) : f)), v ? v(null, e, f, i) : Q.apply(e, f);
        })
      );
    }
    function h(t) {
      for (
        var r,
          e,
          n,
          i = t.length,
          o = x.relative[t[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          l = d(
            function (t) {
              return t === r;
            },
            a,
            !0
          ),
          u = d(
            function (t) {
              return -1 < tt(r, t);
            },
            a,
            !0
          ),
          c = [
            function (t, e, n) {
              var i =
                (!o && (n || e !== k)) ||
                ((r = e).nodeType ? l(t, e, n) : u(t, e, n));
              return (r = null), i;
            },
          ];
        s < i;
        s++
      )
        if ((e = x.relative[t[s].type])) c = [d(f(c), e)];
        else {
          if ((e = x.filter[t[s].type].apply(null, t[s].matches))[M]) {
            for (n = ++s; n < i && !x.relative[t[n].type]; n++);
            return b(
              1 < s && f(c),
              1 < s &&
                g(
                  t
                    .slice(0, s - 1)
                    .concat({ value: " " === t[s - 2].type ? "*" : "" })
                ).replace(st, "$1"),
              e,
              s < n && h(t.slice(s, n)),
              n < i && h((t = t.slice(n))),
              n < i && g(t)
            );
          }
          c.push(e);
        }
      return f(c);
    }
    function c(g, v) {
      var y = 0 < v.length,
        b = 0 < g.length,
        t = function (t, e, n, i, r) {
          var o,
            a,
            s,
            l = 0,
            u = "0",
            c = t && [],
            d = [],
            f = k,
            h = t || (b && x.find.TAG("*", r)),
            p = (B += null == f ? 1 : Math.random() || 0.1),
            m = h.length;
          for (
            r && (k = e === I || e || r);
            u !== m && null != (o = h[u]);
            u++
          ) {
            if (b && o) {
              for (
                a = 0, e || o.ownerDocument === I || (N(o), (n = !$));
                (s = g[a++]);

              )
                if (s(o, e || I, n)) {
                  i.push(o);
                  break;
                }
              r && (B = p);
            }
            y && ((o = !s && o) && l--, t && c.push(o));
          }
          if (((l += u), y && u !== l)) {
            for (a = 0; (s = v[a++]); ) s(c, d, e, n);
            if (t) {
              if (0 < l) for (; u--; ) c[u] || d[u] || (d[u] = Y.call(i));
              d = _(d);
            }
            Q.apply(i, d),
              r && !t && 0 < d.length && 1 < l + v.length && w.uniqueSort(i);
          }
          return r && ((B = p), (k = f)), c;
        };
      return y ? l(t) : t;
    }
    var p,
      v,
      x,
      C,
      S,
      T,
      D,
      E,
      k,
      A,
      j,
      N,
      I,
      F,
      $,
      L,
      O,
      P,
      R,
      M = "sizzle" + 1 * new Date(),
      H = n.document,
      B = 0,
      W = 0,
      q = t(),
      U = t(),
      V = t(),
      z = function (t, e) {
        return t === e && (j = !0), 0;
      },
      X = 1 << 31,
      J = {}.hasOwnProperty,
      G = [],
      Y = G.pop,
      K = G.push,
      Q = G.push,
      Z = G.slice,
      tt = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
        return -1;
      },
      et =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      nt = "[\\x20\\t\\r\\n\\f]",
      it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      rt =
        "\\[" +
        nt +
        "*(" +
        it +
        ")(?:" +
        nt +
        "*([*^$|!~]?=)" +
        nt +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        it +
        "))|)" +
        nt +
        "*\\]",
      ot =
        ":(" +
        it +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        rt +
        ")*)|.*)\\)|)",
      at = new RegExp(nt + "+", "g"),
      st = new RegExp(
        "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
        "g"
      ),
      lt = new RegExp("^" + nt + "*," + nt + "*"),
      ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
      ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
      dt = new RegExp(ot),
      ft = new RegExp("^" + it + "$"),
      ht = {
        ID: new RegExp("^#(" + it + ")"),
        CLASS: new RegExp("^\\.(" + it + ")"),
        TAG: new RegExp("^(" + it + "|[*])"),
        ATTR: new RegExp("^" + rt),
        PSEUDO: new RegExp("^" + ot),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            nt +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            nt +
            "*(?:([+-]|)" +
            nt +
            "*(\\d+)|))" +
            nt +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + et + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            nt +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            nt +
            "*((?:-\\d)?\\d*)" +
            nt +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      pt = /^(?:input|select|textarea|button)$/i,
      mt = /^h\d$/i,
      gt = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yt = /[+~]/,
      bt = /'|\\/g,
      wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
      _t = function (t, e, n) {
        var i = "0x" + e - 65536;
        return i != i || n
          ? e
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      xt = function () {
        N();
      };
    try {
      Q.apply((G = Z.call(H.childNodes)), H.childNodes),
        G[H.childNodes.length].nodeType;
    } catch (Ct) {
      Q = {
        apply: G.length
          ? function (t, e) {
              K.apply(t, Z.call(e));
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1;
            },
      };
    }
    for (p in ((v = w.support = {}),
    (S = w.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (N = w.setDocument =
      function (t) {
        var e,
          n,
          i = t ? t.ownerDocument || t : H;
        return (
          i !== I &&
            9 === i.nodeType &&
            i.documentElement &&
            ((F = (I = i).documentElement),
            ($ = !S(I)),
            (n = I.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", xt, !1)
                : n.attachEvent && n.attachEvent("onunload", xt)),
            (v.attributes = r(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (v.getElementsByTagName = r(function (t) {
              return (
                t.appendChild(I.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (v.getElementsByClassName = gt.test(I.getElementsByClassName)),
            (v.getById = r(function (t) {
              return (
                (F.appendChild(t).id = M),
                !I.getElementsByName || !I.getElementsByName(M).length
              );
            })),
            v.getById
              ? ((x.find.ID = function (t, e) {
                  if ("undefined" != typeof e.getElementById && $) {
                    var n = e.getElementById(t);
                    return n ? [n] : [];
                  }
                }),
                (x.filter.ID = function (t) {
                  var e = t.replace(wt, _t);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }))
              : (delete x.find.ID,
                (x.filter.ID = function (t) {
                  var n = t.replace(wt, _t);
                  return function (t) {
                    var e =
                      "undefined" != typeof t.getAttributeNode &&
                      t.getAttributeNode("id");
                    return e && e.value === n;
                  };
                })),
            (x.find.TAG = v.getElementsByTagName
              ? function (t, e) {
                  return "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : v.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var n,
                    i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" !== t) return o;
                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                  return i;
                }),
            (x.find.CLASS =
              v.getElementsByClassName &&
              function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && $)
                  return e.getElementsByClassName(t);
              }),
            (O = []),
            (L = []),
            (v.qsa = gt.test(I.querySelectorAll)) &&
              (r(function (t) {
                (F.appendChild(t).innerHTML =
                  "<a id='" +
                  M +
                  "'></a><select id='" +
                  M +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    L.push("[*^$]=" + nt + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    L.push("\\[" + nt + "*(?:value|" + et + ")"),
                  t.querySelectorAll("[id~=" + M + "-]").length || L.push("~="),
                  t.querySelectorAll(":checked").length || L.push(":checked"),
                  t.querySelectorAll("a#" + M + "+*").length ||
                    L.push(".#.+[+~]");
              }),
              r(function (t) {
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    L.push("name" + nt + "*[*^$|!~]?="),
                  t.querySelectorAll(":enabled").length ||
                    L.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  L.push(",.*:");
              })),
            (v.matchesSelector = gt.test(
              (P =
                F.matches ||
                F.webkitMatchesSelector ||
                F.mozMatchesSelector ||
                F.oMatchesSelector ||
                F.msMatchesSelector)
            )) &&
              r(function (t) {
                (v.disconnectedMatch = P.call(t, "div")),
                  P.call(t, "[s!='']:x"),
                  O.push("!=", ot);
              }),
            (L = L.length && new RegExp(L.join("|"))),
            (O = O.length && new RegExp(O.join("|"))),
            (e = gt.test(F.compareDocumentPosition)),
            (R =
              e || gt.test(F.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode;
                    return (
                      t === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (z = e
              ? function (t, e) {
                  if (t === e) return (j = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!v.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === I || (t.ownerDocument === H && R(H, t))
                        ? -1
                        : e === I || (e.ownerDocument === H && R(H, e))
                        ? 1
                        : A
                        ? tt(A, t) - tt(A, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (j = !0), 0;
                  var n,
                    i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    s = [e];
                  if (!r || !o)
                    return t === I
                      ? -1
                      : e === I
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : A
                      ? tt(A, t) - tt(A, e)
                      : 0;
                  if (r === o) return u(t, e);
                  for (n = t; (n = n.parentNode); ) a.unshift(n);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (; a[i] === s[i]; ) i++;
                  return i
                    ? u(a[i], s[i])
                    : a[i] === H
                    ? -1
                    : s[i] === H
                    ? 1
                    : 0;
                })),
          I
        );
      }),
    (w.matches = function (t, e) {
      return w(t, null, null, e);
    }),
    (w.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== I && N(t),
        (e = e.replace(ct, "='$1']")),
        v.matchesSelector &&
          $ &&
          !V[e + " "] &&
          (!O || !O.test(e)) &&
          (!L || !L.test(e)))
      )
        try {
          var n = P.call(t, e);
          if (
            n ||
            v.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (Ct) {}
      return 0 < w(e, I, null, [t]).length;
    }),
    (w.contains = function (t, e) {
      return (t.ownerDocument || t) !== I && N(t), R(t, e);
    }),
    (w.attr = function (t, e) {
      (t.ownerDocument || t) !== I && N(t);
      var n = x.attrHandle[e.toLowerCase()],
        i =
          n && J.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !$) : undefined;
      return i !== undefined
        ? i
        : v.attributes || !$
        ? t.getAttribute(e)
        : (i = t.getAttributeNode(e)) && i.specified
        ? i.value
        : null;
    }),
    (w.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (w.uniqueSort = function (t) {
      var e,
        n = [],
        i = 0,
        r = 0;
      if (
        ((j = !v.detectDuplicates),
        (A = !v.sortStable && t.slice(0)),
        t.sort(z),
        j)
      ) {
        for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
        for (; i--; ) t.splice(n[i], 1);
      }
      return (A = null), t;
    }),
    (C = w.getText =
      function (t) {
        var e,
          n = "",
          i = 0,
          r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
          } else if (3 === r || 4 === r) return t.nodeValue;
        } else for (; (e = t[i++]); ) n += C(e);
        return n;
      }),
    ((x = w.selectors =
      {
        cacheLength: 50,
        createPseudo: l,
        match: ht,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(wt, _t)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(wt, _t)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || w.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && w.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              n = !t[6] && t[2];
            return ht.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : n &&
                    dt.test(n) &&
                    (e = T(n, !0)) &&
                    (e = n.indexOf(")", n.length - e) - n.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(wt, _t).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = q[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                q(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      ("undefined" != typeof t.getAttribute &&
                        t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, i, r) {
            return function (t) {
              var e = w.attr(t, n);
              return null == e
                ? "!=" === i
                : !i ||
                    ((e += ""),
                    "=" === i
                      ? e === r
                      : "!=" === i
                      ? e !== r
                      : "^=" === i
                      ? r && 0 === e.indexOf(r)
                      : "*=" === i
                      ? r && -1 < e.indexOf(r)
                      : "$=" === i
                      ? r && e.slice(-r.length) === r
                      : "~=" === i
                      ? -1 < (" " + e.replace(at, " ") + " ").indexOf(r)
                      : "|=" === i &&
                        (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (p, t, e, m, g) {
            var v = "nth" !== p.slice(0, 3),
              y = "last" !== p.slice(-4),
              b = "of-type" === t;
            return 1 === m && 0 === g
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (t, e, n) {
                  var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u = v !== y ? "nextSibling" : "previousSibling",
                    c = t.parentNode,
                    d = b && t.nodeName.toLowerCase(),
                    f = !n && !b,
                    h = !1;
                  if (c) {
                    if (v) {
                      for (; u; ) {
                        for (a = t; (a = a[u]); )
                          if (
                            b
                              ? a.nodeName.toLowerCase() === d
                              : 1 === a.nodeType
                          )
                            return !1;
                        l = u = "only" === p && !l && "nextSibling";
                      }
                      return !0;
                    }
                    if (((l = [y ? c.firstChild : c.lastChild]), y && f)) {
                      for (
                        h =
                          (s =
                            (i =
                              (r =
                                (o = (a = c)[M] || (a[M] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[p] || [])[0] === B &&
                            i[1]) && i[2],
                          a = s && c.childNodes[s];
                        (a = (++s && a && a[u]) || (h = s = 0) || l.pop());

                      )
                        if (1 === a.nodeType && ++h && a === t) {
                          r[p] = [B, s, h];
                          break;
                        }
                    } else if (
                      (f &&
                        (h = s =
                          (i =
                            (r =
                              (o = (a = t)[M] || (a[M] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[p] || [])[0] === B && i[1]),
                      !1 === h)
                    )
                      for (
                        ;
                        (a = (++s && a && a[u]) || (h = s = 0) || l.pop()) &&
                        ((b
                          ? a.nodeName.toLowerCase() !== d
                          : 1 !== a.nodeType) ||
                          !++h ||
                          (f &&
                            ((r =
                              (o = a[M] || (a[M] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[p] = [B, h]),
                          a !== t));

                      );
                    return (h -= g) === m || (h % m == 0 && 0 <= h / m);
                  }
                };
          },
          PSEUDO: function (t, o) {
            var e,
              a =
                x.pseudos[t] ||
                x.setFilters[t.toLowerCase()] ||
                w.error("unsupported pseudo: " + t);
            return a[M]
              ? a(o)
              : 1 < a.length
              ? ((e = [t, t, "", o]),
                x.setFilters.hasOwnProperty(t.toLowerCase())
                  ? l(function (t, e) {
                      for (var n, i = a(t, o), r = i.length; r--; )
                        t[(n = tt(t, i[r]))] = !(e[n] = i[r]);
                    })
                  : function (t) {
                      return a(t, 0, e);
                    })
              : a;
          },
        },
        pseudos: {
          not: l(function (t) {
            var i = [],
              r = [],
              s = D(t.replace(st, "$1"));
            return s[M]
              ? l(function (t, e, n, i) {
                  for (var r, o = s(t, null, i, []), a = t.length; a--; )
                    (r = o[a]) && (t[a] = !(e[a] = r));
                })
              : function (t, e, n) {
                  return (i[0] = t), s(i, null, n, r), (i[0] = null), !r.pop();
                };
          }),
          has: l(function (e) {
            return function (t) {
              return 0 < w(e, t).length;
            };
          }),
          contains: l(function (e) {
            return (
              (e = e.replace(wt, _t)),
              function (t) {
                return -1 < (t.textContent || t.innerText || C(t)).indexOf(e);
              }
            );
          }),
          lang: l(function (n) {
            return (
              ft.test(n || "") || w.error("unsupported lang: " + n),
              (n = n.replace(wt, _t).toLowerCase()),
              function (t) {
                var e;
                do {
                  if (
                    (e = $
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var e = n.location && n.location.hash;
            return e && e.slice(1) === t.id;
          },
          root: function (t) {
            return t === F;
          },
          focus: function (t) {
            return (
              t === I.activeElement &&
              (!I.hasFocus || I.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: function (t) {
            return !1 === t.disabled;
          },
          disabled: function (t) {
            return !0 === t.disabled;
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !x.pseudos.empty(t);
          },
          header: function (t) {
            return mt.test(t.nodeName);
          },
          input: function (t) {
            return pt.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: a(function () {
            return [0];
          }),
          last: a(function (t, e) {
            return [e - 1];
          }),
          eq: a(function (t, e, n) {
            return [n < 0 ? n + e : n];
          }),
          even: a(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n);
            return t;
          }),
          odd: a(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n);
            return t;
          }),
          lt: a(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; 0 <= --i; ) t.push(i);
            return t;
          }),
          gt: a(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
            return t;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[p] = i(p);
    for (p in { submit: !0, reset: !0 }) x.pseudos[p] = o(p);
    return (
      (s.prototype = x.filters = x.pseudos),
      (x.setFilters = new s()),
      (T = w.tokenize =
        function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s,
            l,
            u = U[t + " "];
          if (u) return e ? 0 : u.slice(0);
          for (a = t, s = [], l = x.preFilter; a; ) {
            for (o in ((n && !(i = lt.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), s.push((r = []))),
            (n = !1),
            (i = ut.exec(a)) &&
              ((n = i.shift()),
              r.push({ value: n, type: i[0].replace(st, " ") }),
              (a = a.slice(n.length))),
            x.filter))
              !(i = ht[o].exec(a)) ||
                (l[o] && !(i = l[o](i))) ||
                ((n = i.shift()),
                r.push({ value: n, type: o, matches: i }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return e ? a.length : a ? w.error(t) : U(t, s).slice(0);
        }),
      (D = w.compile =
        function (t, e) {
          var n,
            i = [],
            r = [],
            o = V[t + " "];
          if (!o) {
            for (e || (e = T(t)), n = e.length; n--; )
              (o = h(e[n]))[M] ? i.push(o) : r.push(o);
            (o = V(t, c(r, i))).selector = t;
          }
          return o;
        }),
      (E = w.select =
        function (t, e, n, i) {
          var r,
            o,
            a,
            s,
            l,
            u = "function" == typeof t && t,
            c = !i && T((t = u.selector || t));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              v.getById &&
              9 === e.nodeType &&
              $ &&
              x.relative[o[1].type]
            ) {
              if (!(e = (x.find.ID(a.matches[0].replace(wt, _t), e) || [])[0]))
                return n;
              u && (e = e.parentNode), (t = t.slice(o.shift().value.length));
            }
            for (
              r = ht.needsContext.test(t) ? 0 : o.length;
              r-- && ((a = o[r]), !x.relative[(s = a.type)]);

            )
              if (
                (l = x.find[s]) &&
                (i = l(
                  a.matches[0].replace(wt, _t),
                  (yt.test(o[0].type) && m(e.parentNode)) || e
                ))
              ) {
                if ((o.splice(r, 1), !(t = i.length && g(o))))
                  return Q.apply(n, i), n;
                break;
              }
          }
          return (
            (u || D(t, c))(
              i,
              e,
              !$,
              n,
              !e || (yt.test(t) && m(e.parentNode)) || e
            ),
            n
          );
        }),
      (v.sortStable = M.split("").sort(z).join("") === M),
      (v.detectDuplicates = !!j),
      N(),
      (v.sortDetached = r(function (t) {
        return 1 & t.compareDocumentPosition(I.createElement("div"));
      })),
      r(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        e("type|href|height|width", function (t, e, n) {
          if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (v.attributes &&
        r(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        e("value", function (t, e, n) {
          if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      r(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        e(et, function (t, e, n) {
          var i;
          if (!n)
            return !0 === t[e]
              ? e.toLowerCase()
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
        }),
      w
    );
  })(C);
  (pt.find = bt),
    (pt.expr = bt.selectors),
    (pt.expr[":"] = pt.expr.pseudos),
    (pt.uniqueSort = pt.unique = bt.uniqueSort),
    (pt.text = bt.getText),
    (pt.isXMLDoc = bt.isXML),
    (pt.contains = bt.contains);
  var wt = function (t, e, n) {
      for (var i = [], r = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && pt(t).is(n)) break;
          i.push(t);
        }
      return i;
    },
    _t = function (t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    xt = pt.expr.match.needsContext,
    Ct = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    St = /^.[^:#\[\.,]*$/;
  (pt.filter = function (t, e, n) {
    var i = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === i.nodeType
        ? pt.find.matchesSelector(i, t)
          ? [i]
          : []
        : pt.find.matches(
            t,
            pt.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    pt.fn.extend({
      find: function (t) {
        var e,
          n = [],
          i = this,
          r = i.length;
        if ("string" != typeof t)
          return this.pushStack(
            pt(t).filter(function () {
              for (e = 0; e < r; e++) if (pt.contains(i[e], this)) return !0;
            })
          );
        for (e = 0; e < r; e++) pt.find(t, i[e], n);
        return (
          ((n = this.pushStack(1 < r ? pt.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + t
            : t),
          n
        );
      },
      filter: function (t) {
        return this.pushStack(e(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(e(this, t || [], !0));
      },
      is: function (t) {
        return !!e(
          this,
          "string" == typeof t && xt.test(t) ? pt(t) : t || [],
          !1
        ).length;
      },
    });
  var Tt,
    Dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((pt.fn.init = function (t, e, n) {
    var i, r;
    if (!t) return this;
    if (((n = n || Tt), "string" != typeof t))
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : pt.isFunction(t)
        ? "undefined" != typeof n.ready
          ? n.ready(t)
          : t(pt)
        : (t.selector !== undefined &&
            ((this.selector = t.selector), (this.context = t.context)),
          pt.makeArray(t, this));
    if (
      !(i =
        "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length
          ? [null, t, null]
          : Dt.exec(t)) ||
      (!i[1] && e)
    )
      return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
    if (i[1]) {
      if (
        ((e = e instanceof pt ? e[0] : e),
        pt.merge(
          this,
          pt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)
        ),
        Ct.test(i[1]) && pt.isPlainObject(e))
      )
        for (i in e)
          pt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      return this;
    }
    if ((r = rt.getElementById(i[2])) && r.parentNode) {
      if (r.id !== i[2]) return Tt.find(t);
      (this.length = 1), (this[0] = r);
    }
    return (this.context = rt), (this.selector = t), this;
  }).prototype = pt.fn),
    (Tt = pt(rt));
  var Et = /^(?:parents|prev(?:Until|All))/,
    kt = { children: !0, contents: !0, next: !0, prev: !0 };
  pt.fn.extend({
    has: function (t) {
      var e,
        n = pt(t, this),
        i = n.length;
      return this.filter(function () {
        for (e = 0; e < i; e++) if (pt.contains(this, n[e])) return !0;
      });
    },
    closest: function (t, e) {
      for (
        var n,
          i = 0,
          r = this.length,
          o = [],
          a = xt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0;
        i < r;
        i++
      )
        for (n = this[i]; n && n !== e; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? -1 < a.index(n)
              : 1 === n.nodeType && pt.find.matchesSelector(n, t))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(1 < o.length ? pt.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? pt.inArray(this[0], pt(t))
          : pt.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    pt.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return wt(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return wt(t, "parentNode", n);
        },
        next: function (t) {
          return n(t, "nextSibling");
        },
        prev: function (t) {
          return n(t, "previousSibling");
        },
        nextAll: function (t) {
          return wt(t, "nextSibling");
        },
        prevAll: function (t) {
          return wt(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return wt(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return wt(t, "previousSibling", n);
        },
        siblings: function (t) {
          return _t((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return _t(t.firstChild);
        },
        contents: function (t) {
          return pt.nodeName(t, "iframe")
            ? t.contentDocument || t.contentWindow.document
            : pt.merge([], t.childNodes);
        },
      },
      function (i, r) {
        pt.fn[i] = function (t, e) {
          var n = pt.map(this, r, t);
          return (
            "Until" !== i.slice(-5) && (e = t),
            e && "string" == typeof e && (n = pt.filter(e, n)),
            1 < this.length &&
              (kt[i] || (n = pt.uniqueSort(n)),
              Et.test(i) && (n = n.reverse())),
            this.pushStack(n)
          );
        };
      }
    );
  var At,
    jt,
    Nt = /\S+/g;
  for (jt in ((pt.Callbacks = function (i) {
    i = "string" == typeof i ? c(i) : pt.extend({}, i);
    var r,
      t,
      e,
      n,
      o = [],
      a = [],
      s = -1,
      l = function () {
        for (n = i.once, e = r = !0; a.length; s = -1)
          for (t = a.shift(); ++s < o.length; )
            !1 === o[s].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((s = o.length), (t = !1));
        i.memory || (t = !1), (r = !1), n && (o = t ? [] : "");
      },
      u = {
        add: function () {
          return (
            o &&
              (t && !r && ((s = o.length - 1), a.push(t)),
              (function n(t) {
                pt.each(t, function (t, e) {
                  pt.isFunction(e)
                    ? (i.unique && u.has(e)) || o.push(e)
                    : e && e.length && "string" !== pt.type(e) && n(e);
                });
              })(arguments),
              t && !r && l()),
            this
          );
        },
        remove: function () {
          return (
            pt.each(arguments, function (t, e) {
              for (var n; -1 < (n = pt.inArray(e, o, n)); )
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? -1 < pt.inArray(t, o) : 0 < o.length;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (n = a = []), (o = t = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (n = !0), t || u.disable(), this;
        },
        locked: function () {
          return !!n;
        },
        fireWith: function (t, e) {
          return (
            n ||
              ((e = [t, (e = e || []).slice ? e.slice() : e]),
              a.push(e),
              r || l()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!e;
        },
      };
    return u;
  }),
  pt.extend({
    Deferred: function (t) {
      var o = [
          ["resolve", "done", pt.Callbacks("once memory"), "resolved"],
          ["reject", "fail", pt.Callbacks("once memory"), "rejected"],
          ["notify", "progress", pt.Callbacks("memory")],
        ],
        r = "pending",
        a = {
          state: function () {
            return r;
          },
          always: function () {
            return s.done(arguments).fail(arguments), this;
          },
          then: function () {
            var r = arguments;
            return pt
              .Deferred(function (i) {
                pt.each(o, function (t, e) {
                  var n = pt.isFunction(r[t]) && r[t];
                  s[e[1]](function () {
                    var t = n && n.apply(this, arguments);
                    t && pt.isFunction(t.promise)
                      ? t
                          .promise()
                          .progress(i.notify)
                          .done(i.resolve)
                          .fail(i.reject)
                      : i[e[0] + "With"](
                          this === a ? i.promise() : this,
                          n ? [t] : arguments
                        );
                  });
                }),
                  (r = null);
              })
              .promise();
          },
          promise: function (t) {
            return null != t ? pt.extend(t, a) : a;
          },
        },
        s = {};
      return (
        (a.pipe = a.then),
        pt.each(o, function (t, e) {
          var n = e[2],
            i = e[3];
          (a[e[1]] = n.add),
            i &&
              n.add(
                function () {
                  r = i;
                },
                o[1 ^ t][2].disable,
                o[2][2].lock
              ),
            (s[e[0]] = function () {
              return s[e[0] + "With"](this === s ? a : this, arguments), this;
            }),
            (s[e[0] + "With"] = n.fireWith);
        }),
        a.promise(s),
        t && t.call(s, s),
        s
      );
    },
    when: function (t) {
      var r,
        e,
        n,
        i = 0,
        o = ot.call(arguments),
        a = o.length,
        s = 1 !== a || (t && pt.isFunction(t.promise)) ? a : 0,
        l = 1 === s ? t : pt.Deferred(),
        u = function (e, n, i) {
          return function (t) {
            (n[e] = this),
              (i[e] = 1 < arguments.length ? ot.call(arguments) : t),
              i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
          };
        };
      if (1 < a)
        for (r = new Array(a), e = new Array(a), n = new Array(a); i < a; i++)
          o[i] && pt.isFunction(o[i].promise)
            ? o[i]
                .promise()
                .progress(u(i, e, r))
                .done(u(i, n, o))
                .fail(l.reject)
            : --s;
      return s || l.resolveWith(n, o), l.promise();
    },
  }),
  (pt.fn.ready = function (t) {
    return pt.ready.promise().done(t), this;
  }),
  pt.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (t) {
      t ? pt.readyWait++ : pt.ready(!0);
    },
    ready: function (t) {
      (!0 === t ? --pt.readyWait : pt.isReady) ||
        ((pt.isReady = !0) !== t && 0 < --pt.readyWait) ||
        (At.resolveWith(rt, [pt]),
        pt.fn.triggerHandler &&
          (pt(rt).triggerHandler("ready"), pt(rt).off("ready")));
    },
  }),
  (pt.ready.promise = function (t) {
    if (!At)
      if (
        ((At = pt.Deferred()),
        "complete" === rt.readyState ||
          ("loading" !== rt.readyState && !rt.documentElement.doScroll))
      )
        C.setTimeout(pt.ready);
      else if (rt.addEventListener)
        rt.addEventListener("DOMContentLoaded", o),
          C.addEventListener("load", o);
      else {
        rt.attachEvent("onreadystatechange", o), C.attachEvent("onload", o);
        var e = !1;
        try {
          e = null == C.frameElement && rt.documentElement;
        } catch (n) {}
        e &&
          e.doScroll &&
          (function i() {
            if (!pt.isReady) {
              try {
                e.doScroll("left");
              } catch (n) {
                return C.setTimeout(i, 50);
              }
              r(), pt.ready();
            }
          })();
      }
    return At.promise(t);
  }),
  pt.ready.promise(),
  pt(ft)))
    break;
  (ft.ownFirst = "0" === jt),
    (ft.inlineBlockNeedsLayout = !1),
    pt(function () {
      var t, e, n, i;
      (n = rt.getElementsByTagName("body")[0]) &&
        n.style &&
        ((e = rt.createElement("div")),
        ((i = rt.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(e),
        "undefined" != typeof e.style.zoom &&
          ((e.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (ft.inlineBlockNeedsLayout = t = 3 === e.offsetWidth),
          t && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
    (function () {
      var t = rt.createElement("div");
      ft.deleteExpando = !0;
      try {
        delete t.test;
      } catch (e) {
        ft.deleteExpando = !1;
      }
      t = null;
    })();
  var It,
    Ft = function (t) {
      var e = pt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!e || (!0 !== e && t.getAttribute("classid") === e))
      );
    },
    $t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Lt = /([A-Z])/g;
  pt.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (t) {
      return (
        !!(t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando]) && !u(t)
      );
    },
    data: function (t, e, n) {
      return i(t, e, n);
    },
    removeData: function (t, e) {
      return a(t, e);
    },
    _data: function (t, e, n) {
      return i(t, e, n, !0);
    },
    _removeData: function (t, e) {
      return a(t, e, !0);
    },
  }),
    pt.fn.extend({
      data: function (t, e) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (t !== undefined)
          return "object" == typeof t
            ? this.each(function () {
                pt.data(this, t);
              })
            : 1 < arguments.length
            ? this.each(function () {
                pt.data(this, t, e);
              })
            : o
            ? l(o, t, pt.data(o, t))
            : undefined;
        if (
          this.length &&
          ((r = pt.data(o)), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))
        ) {
          for (n = a.length; n--; )
            a[n] &&
              0 === (i = a[n].name).indexOf("data-") &&
              l(o, (i = pt.camelCase(i.slice(5))), r[i]);
          pt._data(o, "parsedAttrs", !0);
        }
        return r;
      },
      removeData: function (t) {
        return this.each(function () {
          pt.removeData(this, t);
        });
      },
    }),
    pt.extend({
      queue: function (t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (i = pt._data(t, e)),
            n &&
              (!i || pt.isArray(n)
                ? (i = pt._data(t, e, pt.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = pt.queue(t, e),
          i = n.length,
          r = n.shift(),
          o = pt._queueHooks(t, e),
          a = function () {
            pt.dequeue(t, e);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, a, o)),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          pt._data(t, n) ||
          pt._data(t, n, {
            empty: pt.Callbacks("once memory").add(function () {
              pt._removeData(t, e + "queue"), pt._removeData(t, n);
            }),
          })
        );
      },
    }),
    pt.fn.extend({
      queue: function (e, n) {
        var t = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), t--),
          arguments.length < t
            ? pt.queue(this[0], e)
            : n === undefined
            ? this
            : this.each(function () {
                var t = pt.queue(this, e, n);
                pt._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && pt.dequeue(this, e);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          pt.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var n,
          i = 1,
          r = pt.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = undefined)), t = t || "fx";
          a--;

        )
          (n = pt._data(o[a], t + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(e);
      },
    }),
    (ft.shrinkWrapBlocks = function () {
      return null != It
        ? It
        : ((It = !1),
          (e = rt.getElementsByTagName("body")[0]) && e.style
            ? ((t = rt.createElement("div")),
              ((n = rt.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              e.appendChild(n).appendChild(t),
              "undefined" != typeof t.style.zoom &&
                ((t.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (t.appendChild(rt.createElement("div")).style.width = "5px"),
                (It = 3 !== t.offsetWidth)),
              e.removeChild(n),
              It)
            : void 0);
      var t, e, n;
    });
  var Ot,
    Pt,
    Rt,
    Mt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ht = new RegExp("^(?:([+-])=|)(" + Mt + ")([a-z%]*)$", "i"),
    Bt = ["Top", "Right", "Bottom", "Left"],
    Wt = function (t, e) {
      return (
        (t = e || t),
        "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
      );
    },
    qt = function (t, e, n, i, r, o, a) {
      var s = 0,
        l = t.length,
        u = null == n;
      if ("object" === pt.type(n))
        for (s in ((r = !0), n)) qt(t, e, s, n[s], !0, o, a);
      else if (
        i !== undefined &&
        ((r = !0),
        pt.isFunction(i) || (a = !0),
        u &&
          (a
            ? (e.call(t, i), (e = null))
            : ((u = e),
              (e = function (t, e, n) {
                return u.call(pt(t), n);
              }))),
        e)
      )
        for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
      return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
    },
    Ut = /^(?:checkbox|radio)$/i,
    Vt = /<([\w:-]+)/,
    zt = /^$|\/(?:java|ecma)script/i,
    Xt = /^\s+/,
    Jt =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  (Ot = rt.createElement("div")),
    (Pt = rt.createDocumentFragment()),
    (Rt = rt.createElement("input")),
    (Ot.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (ft.leadingWhitespace = 3 === Ot.firstChild.nodeType),
    (ft.tbody = !Ot.getElementsByTagName("tbody").length),
    (ft.htmlSerialize = !!Ot.getElementsByTagName("link").length),
    (ft.html5Clone =
      "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML),
    (Rt.type = "checkbox"),
    (Rt.checked = !0),
    Pt.appendChild(Rt),
    (ft.appendChecked = Rt.checked),
    (Ot.innerHTML = "<textarea>x</textarea>"),
    (ft.noCloneChecked = !!Ot.cloneNode(!0).lastChild.defaultValue),
    Pt.appendChild(Ot),
    (Rt = rt.createElement("input")).setAttribute("type", "radio"),
    Rt.setAttribute("checked", "checked"),
    Rt.setAttribute("name", "t"),
    Ot.appendChild(Rt),
    (ft.checkClone = Ot.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ft.noCloneEvent = !!Ot.addEventListener),
    (Ot[pt.expando] = 1),
    (ft.attributes = !Ot.getAttribute(pt.expando));
  var Gt = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: ft.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  (Gt.optgroup = Gt.option),
    (Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead),
    (Gt.th = Gt.td);
  var Yt = /<|&#?\w+;/,
    Kt = /<tbody/i;
  !(function () {
    var t,
      e,
      n = rt.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (e = "on" + t),
        (ft[t] = e in C) ||
          (n.setAttribute(e, "t"), (ft[t] = !1 === n.attributes[e].expando));
    n = null;
  })();
  var Qt = /^(?:input|select|textarea)$/i,
    Zt = /^key/,
    te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ee = /^(?:focusinfocus|focusoutblur)$/,
    ne = /^([^.]*)(?:\.(.+)|)/;
  (pt.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        h,
        p,
        m,
        g = pt._data(t);
      if (g) {
        for (
          n.handler && ((n = (l = n).handler), (r = l.selector)),
            n.guid || (n.guid = pt.guid++),
            (a = g.events) || (a = g.events = {}),
            (c = g.handle) ||
              ((c = g.handle =
                function (t) {
                  return void 0 === pt || (t && pt.event.triggered === t.type)
                    ? undefined
                    : pt.event.dispatch.apply(c.elem, arguments);
                }).elem = t),
            s = (e = (e || "").match(Nt) || [""]).length;
          s--;

        )
          (h = m = (o = ne.exec(e[s]) || [])[1]),
            (p = (o[2] || "").split(".").sort()),
            h &&
              ((u = pt.event.special[h] || {}),
              (h = (r ? u.delegateType : u.bindType) || h),
              (u = pt.event.special[h] || {}),
              (d = pt.extend(
                {
                  type: h,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && pt.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                l
              )),
              (f = a[h]) ||
                (((f = a[h] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, i, p, c)) ||
                  (t.addEventListener
                    ? t.addEventListener(h, c, !1)
                    : t.attachEvent && t.attachEvent("on" + h, c))),
              u.add &&
                (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
              r ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (pt.event.global[h] = !0));
        t = null;
      }
    },
    remove: function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        c,
        d,
        f,
        h,
        p,
        m,
        g = pt.hasData(t) && pt._data(t);
      if (g && (c = g.events)) {
        for (u = (e = (e || "").match(Nt) || [""]).length; u--; )
          if (
            ((h = m = (s = ne.exec(e[u]) || [])[1]),
            (p = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = pt.event.special[h] || {},
                f = c[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = o = f.length;
              o--;

            )
              (a = f[o]),
                (!r && m !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (i && i !== a.selector && ("**" !== i || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(t, a));
            l &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(t, p, g.handle)) ||
                pt.removeEvent(t, h, g.handle),
              delete c[h]);
          } else for (h in c) pt.event.remove(t, h + e[u], n, i, !0);
        pt.isEmptyObject(c) && (delete g.handle, pt._removeData(t, "events"));
      }
    },
    trigger: function (t, e, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u,
        c,
        d = [n || rt],
        f = dt.call(t, "type") ? t.type : t,
        h = dt.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = u = n = n || rt),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !ee.test(f + pt.event.triggered) &&
          (-1 < f.indexOf(".") && ((f = (h = f.split(".")).shift()), h.sort()),
          (o = f.indexOf(":") < 0 && "on" + f),
          ((t = t[pt.expando]
            ? t
            : new pt.Event(f, "object" == typeof t && t)).isTrigger = i
            ? 2
            : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = undefined),
          t.target || (t.target = n),
          (e = null == e ? [t] : pt.makeArray(e, [t])),
          (l = pt.event.special[f] || {}),
          i || !l.trigger || !1 !== l.trigger.apply(n, e)))
      ) {
        if (!i && !l.noBubble && !pt.isWindow(n)) {
          for (
            s = l.delegateType || f, ee.test(s + f) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (u = a);
          u === (n.ownerDocument || rt) &&
            d.push(u.defaultView || u.parentWindow || C);
        }
        for (c = 0; (a = d[c++]) && !t.isPropagationStopped(); )
          (t.type = 1 < c ? s : l.bindType || f),
            (r =
              (pt._data(a, "events") || {})[t.type] && pt._data(a, "handle")) &&
              r.apply(a, e),
            (r = o && a[o]) &&
              r.apply &&
              Ft(a) &&
              ((t.result = r.apply(a, e)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = f),
          !i &&
            !t.isDefaultPrevented() &&
            (!l._default || !1 === l._default.apply(d.pop(), e)) &&
            Ft(n) &&
            o &&
            n[f] &&
            !pt.isWindow(n))
        ) {
          (u = n[o]) && (n[o] = null), (pt.event.triggered = f);
          try {
            n[f]();
          } catch (p) {}
          (pt.event.triggered = undefined), u && (n[o] = u);
        }
        return t.result;
      }
    },
    dispatch: function (t) {
      t = pt.event.fix(t);
      var e,
        n,
        i,
        r,
        o,
        a = [],
        s = ot.call(arguments),
        l = (pt._data(this, "events") || {})[t.type] || [],
        u = pt.event.special[t.type] || {};
      if (
        (((s[0] = t).delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, t))
      ) {
        for (
          a = pt.event.handlers.call(this, t, l), e = 0;
          (r = a[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(o.namespace)) ||
              ((t.handleObj = o),
              (t.data = o.data),
              (i = (
                (pt.event.special[o.origType] || {}).handle || o.handler
              ).apply(r.elem, s)) !== undefined &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        r,
        o,
        a = [],
        s = e.delegateCount,
        l = t.target;
      if (
        s &&
        l.nodeType &&
        ("click" !== t.type || isNaN(t.button) || t.button < 1)
      )
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
            for (i = [], n = 0; n < s; n++)
              i[(r = (o = e[n]).selector + " ")] === undefined &&
                (i[r] = o.needsContext
                  ? -1 < pt(r, this).index(l)
                  : pt.find(r, this, null, [l]).length),
                i[r] && i.push(o);
            i.length && a.push({ elem: l, handlers: i });
          }
      return s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a;
    },
    fix: function (t) {
      if (t[pt.expando]) return t;
      var e,
        n,
        i,
        r = t.type,
        o = t,
        a = this.fixHooks[r];
      for (
        a ||
          (this.fixHooks[r] = a =
            te.test(r) ? this.mouseHooks : Zt.test(r) ? this.keyHooks : {}),
          i = a.props ? this.props.concat(a.props) : this.props,
          t = new pt.Event(o),
          e = i.length;
        e--;

      )
        t[(n = i[e])] = o[n];
      return (
        t.target || (t.target = o.srcElement || rt),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        a.filter ? a.filter(t, o) : t
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var n,
          i,
          r,
          o = e.button,
          a = e.fromElement;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((r = (i = t.target.ownerDocument || rt).documentElement),
            (n = i.body),
            (t.pageX =
              e.clientX +
              ((r && r.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((r && r.clientLeft) || (n && n.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((r && r.scrollTop) || (n && n.scrollTop) || 0) -
              ((r && r.clientTop) || (n && n.clientTop) || 0))),
          !t.relatedTarget &&
            a &&
            (t.relatedTarget = a === t.target ? e.toElement : a),
          t.which ||
            o === undefined ||
            (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          t
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== p() && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === p() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if (
            pt.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
          )
            return this.click(), !1;
        },
        _default: function (t) {
          return pt.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          t.result !== undefined &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, n) {
      var i = pt.extend(new pt.Event(), n, { type: t, isSimulated: !0 });
      pt.event.trigger(i, null, e),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (pt.removeEvent = rt.removeEventListener
      ? function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }
      : function (t, e, n) {
          var i = "on" + e;
          t.detachEvent &&
            ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n));
        }),
    (pt.Event = function (t, e) {
      if (!(this instanceof pt.Event)) return new pt.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (t.defaultPrevented === undefined && !1 === t.returnValue)
              ? f
              : h))
        : (this.type = t),
        e && pt.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || pt.now()),
        (this[pt.expando] = !0);
    }),
    (pt.Event.prototype = {
      constructor: pt.Event,
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = f),
          t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = f),
          t &&
            !this.isSimulated &&
            (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = f),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    pt.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, o) {
        pt.event.special[t] = {
          delegateType: o,
          bindType: o,
          handle: function (t) {
            var e,
              n = this,
              i = t.relatedTarget,
              r = t.handleObj;
            return (
              (i && (i === n || pt.contains(n, i))) ||
                ((t.type = r.origType),
                (e = r.handler.apply(this, arguments)),
                (t.type = o)),
              e
            );
          },
        };
      }
    ),
    ft.submit ||
      (pt.event.special.submit = {
        setup: function () {
          if (pt.nodeName(this, "form")) return !1;
          pt.event.add(this, "click._submit keypress._submit", function (t) {
            var e = t.target,
              n =
                pt.nodeName(e, "input") || pt.nodeName(e, "button")
                  ? pt.prop(e, "form")
                  : undefined;
            n &&
              !pt._data(n, "submit") &&
              (pt.event.add(n, "submit._submit", function (t) {
                t._submitBubble = !0;
              }),
              pt._data(n, "submit", !0));
          });
        },
        postDispatch: function (t) {
          t._submitBubble &&
            (delete t._submitBubble,
            this.parentNode &&
              !t.isTrigger &&
              pt.event.simulate("submit", this.parentNode, t));
        },
        teardown: function () {
          if (pt.nodeName(this, "form")) return !1;
          pt.event.remove(this, "._submit");
        },
      }),
    ft.change ||
      (pt.event.special.change = {
        setup: function () {
          if (Qt.test(this.nodeName))
            return (
              ("checkbox" !== this.type && "radio" !== this.type) ||
                (pt.event.add(this, "propertychange._change", function (t) {
                  "checked" === t.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                pt.event.add(this, "click._change", function (t) {
                  this._justChanged && !t.isTrigger && (this._justChanged = !1),
                    pt.event.simulate("change", this, t);
                })),
              !1
            );
          pt.event.add(this, "beforeactivate._change", function (t) {
            var e = t.target;
            Qt.test(e.nodeName) &&
              !pt._data(e, "change") &&
              (pt.event.add(e, "change._change", function (t) {
                !this.parentNode ||
                  t.isSimulated ||
                  t.isTrigger ||
                  pt.event.simulate("change", this.parentNode, t);
              }),
              pt._data(e, "change", !0));
          });
        },
        handle: function (t) {
          var e = t.target;
          if (
            this !== e ||
            t.isSimulated ||
            t.isTrigger ||
            ("radio" !== e.type && "checkbox" !== e.type)
          )
            return t.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return pt.event.remove(this, "._change"), !Qt.test(this.nodeName);
        },
      }),
    ft.focusin ||
      pt.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
        var r = function (t) {
          pt.event.simulate(i, t.target, pt.event.fix(t));
        };
        pt.event.special[i] = {
          setup: function () {
            var t = this.ownerDocument || this,
              e = pt._data(t, i);
            e || t.addEventListener(n, r, !0), pt._data(t, i, (e || 0) + 1);
          },
          teardown: function () {
            var t = this.ownerDocument || this,
              e = pt._data(t, i) - 1;
            e
              ? pt._data(t, i, e)
              : (t.removeEventListener(n, r, !0), pt._removeData(t, i));
          },
        };
      }),
    pt.fn.extend({
      on: function (t, e, n, i) {
        return w(this, t, e, n, i);
      },
      one: function (t, e, n, i) {
        return w(this, t, e, n, i, 1);
      },
      off: function (t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            pt(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof t)
          return (
            (!1 !== e && "function" != typeof e) || ((n = e), (e = undefined)),
            !1 === n && (n = h),
            this.each(function () {
              pt.event.remove(this, t, n, e);
            })
          );
        for (r in t) this.off(r, e, t[r]);
        return this;
      },
      trigger: function (t, e) {
        return this.each(function () {
          pt.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return pt.event.trigger(t, e, n, !0);
      },
    });
  var ie = / jQuery\d+="(?:null|\d+)"/g,
    re = new RegExp("<(?:" + Jt + ")[\\s/>]", "i"),
    oe =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ae = /<script|<style|<link/i,
    se = /checked\s*(?:[^=]|=\s*.checked.)/i,
    le = /^true\/(.*)/,
    ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ce = g(rt).appendChild(rt.createElement("div"));
  pt.extend({
    htmlPrefilter: function (t) {
      return t.replace(oe, "<$1></$2>");
    },
    clone: function (t, e, n) {
      var i,
        r,
        o,
        a,
        s,
        l = pt.contains(t.ownerDocument, t);
      if (
        (ft.html5Clone || pt.isXMLDoc(t) || !re.test("<" + t.nodeName + ">")
          ? (o = t.cloneNode(!0))
          : ((ce.innerHTML = t.outerHTML), ce.removeChild((o = ce.firstChild))),
        !(
          (ft.noCloneEvent && ft.noCloneChecked) ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          pt.isXMLDoc(t)
        ))
      )
        for (i = v(o), s = v(t), a = 0; null != (r = s[a]); ++a)
          i[a] && E(r, i[a]);
      if (e)
        if (n)
          for (s = s || v(t), i = i || v(o), a = 0; null != (r = s[a]); a++)
            D(r, i[a]);
        else D(t, o);
      return (
        0 < (i = v(o, "script")).length && y(i, !l && v(t, "script")),
        (i = s = r = null),
        o
      );
    },
    cleanData: function (t, e) {
      for (
        var n,
          i,
          r,
          o,
          a = 0,
          s = pt.expando,
          l = pt.cache,
          u = ft.attributes,
          c = pt.event.special;
        null != (n = t[a]);
        a++
      )
        if ((e || Ft(n)) && (o = (r = n[s]) && l[r])) {
          if (o.events)
            for (i in o.events)
              c[i] ? pt.event.remove(n, i) : pt.removeEvent(n, i, o.handle);
          l[r] &&
            (delete l[r],
            u || "undefined" == typeof n.removeAttribute
              ? (n[s] = undefined)
              : n.removeAttribute(s),
            it.push(r));
        }
    },
  }),
    pt.fn.extend({
      domManip: k,
      detach: function (t) {
        return A(this, t, !0);
      },
      remove: function (t) {
        return A(this, t);
      },
      text: function (t) {
        return qt(
          this,
          function (t) {
            return t === undefined
              ? pt.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || rt).createTextNode(t)
                );
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return k(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            x(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return k(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = x(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return k(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return k(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && pt.cleanData(v(t, !1)); t.firstChild; )
            t.removeChild(t.firstChild);
          t.options && pt.nodeName(t, "select") && (t.options.length = 0);
        }
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return pt.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return qt(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (t === undefined)
              return 1 === e.nodeType ? e.innerHTML.replace(ie, "") : undefined;
            if (
              "string" == typeof t &&
              !ae.test(t) &&
              (ft.htmlSerialize || !re.test(t)) &&
              (ft.leadingWhitespace || !Xt.test(t)) &&
              !Gt[(Vt.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = pt.htmlPrefilter(t);
              try {
                for (; n < i; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (pt.cleanData(v(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (r) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return k(
          this,
          arguments,
          function (t) {
            var e = this.parentNode;
            pt.inArray(this, n) < 0 &&
              (pt.cleanData(v(this)), e && e.replaceChild(t, this));
          },
          n
        );
      },
    }),
    pt.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, a) {
        pt.fn[t] = function (t) {
          for (var e, n = 0, i = [], r = pt(t), o = r.length - 1; n <= o; n++)
            (e = n === o ? this : this.clone(!0)),
              pt(r[n])[a](e),
              st.apply(i, e.get());
          return this.pushStack(i);
        };
      }
    );
  var de,
    fe = { HTML: "block", BODY: "block" },
    he = /^margin/,
    pe = new RegExp("^(" + Mt + ")(?!px)[a-z%]+$", "i"),
    me = function (t, e, n, i) {
      var r,
        o,
        a = {};
      for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = a[o];
      return r;
    },
    ge = rt.documentElement;
  !(function () {
    function t() {
      var t,
        e,
        n = rt.documentElement;
      n.appendChild(u),
        (c.style.cssText =
          "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (i = o = l = !1),
        (r = s = !0),
        C.getComputedStyle &&
          ((e = C.getComputedStyle(c)),
          (i = "1%" !== (e || {}).top),
          (l = "2px" === (e || {}).marginLeft),
          (o = "4px" === (e || { width: "4px" }).width),
          (c.style.marginRight = "50%"),
          (r = "4px" === (e || { marginRight: "4px" }).marginRight),
          ((t = c.appendChild(rt.createElement("div"))).style.cssText =
            c.style.cssText =
              "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
          (t.style.marginRight = t.style.width = "0"),
          (c.style.width = "1px"),
          (s = !parseFloat((C.getComputedStyle(t) || {}).marginRight)),
          c.removeChild(t)),
        (c.style.display = "none"),
        (a = 0 === c.getClientRects().length) &&
          ((c.style.display = ""),
          (c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
          (c.childNodes[0].style.borderCollapse = "separate"),
          ((t = c.getElementsByTagName("td"))[0].style.cssText =
            "margin:0;border:0;padding:0;display:none"),
          (a = 0 === t[0].offsetHeight) &&
            ((t[0].style.display = ""),
            (t[1].style.display = "none"),
            (a = 0 === t[0].offsetHeight))),
        n.removeChild(u);
    }
    var i,
      r,
      o,
      a,
      s,
      l,
      u = rt.createElement("div"),
      c = rt.createElement("div");
    c.style &&
      ((c.style.cssText = "float:left;opacity:.5"),
      (ft.opacity = "0.5" === c.style.opacity),
      (ft.cssFloat = !!c.style.cssFloat),
      (c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ft.clearCloneStyle = "content-box" === c.style.backgroundClip),
      ((u = rt.createElement("div")).style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      (c.innerHTML = ""),
      u.appendChild(c),
      (ft.boxSizing =
        "" === c.style.boxSizing ||
        "" === c.style.MozBoxSizing ||
        "" === c.style.WebkitBoxSizing),
      pt.extend(ft, {
        reliableHiddenOffsets: function () {
          return null == i && t(), a;
        },
        boxSizingReliable: function () {
          return null == i && t(), o;
        },
        pixelMarginRight: function () {
          return null == i && t(), r;
        },
        pixelPosition: function () {
          return null == i && t(), i;
        },
        reliableMarginRight: function () {
          return null == i && t(), s;
        },
        reliableMarginLeft: function () {
          return null == i && t(), l;
        },
      }));
  })();
  var ve,
    ye,
    be = /^(top|right|bottom|left)$/;
  C.getComputedStyle
    ? ((ve = function (t) {
        var e = t.ownerDocument.defaultView;
        return (e && e.opener) || (e = C), e.getComputedStyle(t);
      }),
      (ye = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s = t.style;
        return (
          ("" !==
            (a = (n = n || ve(t))
              ? n.getPropertyValue(e) || n[e]
              : undefined) &&
            a !== undefined) ||
            pt.contains(t.ownerDocument, t) ||
            (a = pt.style(t, e)),
          n &&
            !ft.pixelMarginRight() &&
            pe.test(a) &&
            he.test(e) &&
            ((i = s.width),
            (r = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = i),
            (s.minWidth = r),
            (s.maxWidth = o)),
          a === undefined ? a : a + ""
        );
      }))
    : ge.currentStyle &&
      ((ve = function (t) {
        return t.currentStyle;
      }),
      (ye = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s = t.style;
        return (
          null == (a = (n = n || ve(t)) ? n[e] : undefined) &&
            s &&
            s[e] &&
            (a = s[e]),
          pe.test(a) &&
            !be.test(e) &&
            ((i = s.left),
            (o = (r = t.runtimeStyle) && r.left) &&
              (r.left = t.currentStyle.left),
            (s.left = "fontSize" === e ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = i),
            o && (r.left = o)),
          a === undefined ? a : a + "" || "auto"
        );
      }));
  var we = /alpha\([^)]*\)/i,
    _e = /opacity\s*=\s*([^)]*)/i,
    xe = /^(none|table(?!-c[ea]).+)/,
    Ce = new RegExp("^(" + Mt + ")(.*)$", "i"),
    Se = { position: "absolute", visibility: "hidden", display: "block" },
    Te = { letterSpacing: "0", fontWeight: "400" },
    De = ["Webkit", "O", "Moz", "ms"],
    Ee = rt.createElement("div").style;
  pt.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = ye(t, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: ft.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          a,
          s = pt.camelCase(e),
          l = t.style;
        if (
          ((e = pt.cssProps[s] || (pt.cssProps[s] = F(s) || s)),
          (a = pt.cssHooks[e] || pt.cssHooks[s]),
          n === undefined)
        )
          return a && "get" in a && (r = a.get(t, !1, i)) !== undefined
            ? r
            : l[e];
        if (
          ("string" === (o = typeof n) &&
            (r = Ht.exec(n)) &&
            r[1] &&
            ((n = d(t, e, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (r && r[3]) || (pt.cssNumber[s] ? "" : "px")),
            ft.clearCloneStyle ||
              "" !== n ||
              0 !== e.indexOf("background") ||
              (l[e] = "inherit"),
            !(a && "set" in a && (n = a.set(t, n, i)) === undefined)))
        )
          try {
            l[e] = n;
          } catch (u) {}
      }
    },
    css: function (t, e, n, i) {
      var r,
        o,
        a,
        s = pt.camelCase(e);
      return (
        (e = pt.cssProps[s] || (pt.cssProps[s] = F(s) || s)),
        (a = pt.cssHooks[e] || pt.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(t, !0, n)),
        o === undefined && (o = ye(t, e, i)),
        "normal" === o && e in Te && (o = Te[e]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    },
  }),
    pt.each(["height", "width"], function (t, r) {
      pt.cssHooks[r] = {
        get: function (t, e, n) {
          if (e)
            return xe.test(pt.css(t, "display")) && 0 === t.offsetWidth
              ? me(t, Se, function () {
                  return P(t, r, n);
                })
              : P(t, r, n);
        },
        set: function (t, e, n) {
          var i = n && ve(t);
          return L(
            t,
            e,
            n
              ? O(
                  t,
                  r,
                  n,
                  ft.boxSizing &&
                    "border-box" === pt.css(t, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    ft.opacity ||
      (pt.cssHooks.opacity = {
        get: function (t, e) {
          return _e.test(
            (e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : e
            ? "1"
            : "";
        },
        set: function (t, e) {
          var n = t.style,
            i = t.currentStyle,
            r = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
            o = (i && i.filter) || n.filter || "";
          (((n.zoom = 1) <= e || "" === e) &&
            "" === pt.trim(o.replace(we, "")) &&
            n.removeAttribute &&
            (n.removeAttribute("filter"), "" === e || (i && !i.filter))) ||
            (n.filter = we.test(o) ? o.replace(we, r) : o + " " + r);
        },
      }),
    (pt.cssHooks.marginRight = I(ft.reliableMarginRight, function (t, e) {
      if (e) return me(t, { display: "inline-block" }, ye, [t, "marginRight"]);
    })),
    (pt.cssHooks.marginLeft = I(ft.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(ye(t, "marginLeft")) ||
            (pt.contains(t.ownerDocument, t)
              ? t.getBoundingClientRect().left -
                me(t, { marginLeft: 0 }, function () {
                  return t.getBoundingClientRect().left;
                })
              : 0)) + "px"
        );
    })),
    pt.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
      (pt.cssHooks[r + o] = {
        expand: function (t) {
          for (
            var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t];
            e < 4;
            e++
          )
            n[r + Bt[e] + o] = i[e] || i[e - 2] || i[0];
          return n;
        },
      }),
        he.test(r) || (pt.cssHooks[r + o].set = L);
    }),
    pt.fn.extend({
      css: function (t, e) {
        return qt(
          this,
          function (t, e, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (pt.isArray(e)) {
              for (i = ve(t), r = e.length; a < r; a++)
                o[e[a]] = pt.css(t, e[a], !1, i);
              return o;
            }
            return n !== undefined ? pt.style(t, e, n) : pt.css(t, e);
          },
          t,
          e,
          1 < arguments.length
        );
      },
      show: function () {
        return $(this, !0);
      },
      hide: function () {
        return $(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Wt(this) ? pt(this).show() : pt(this).hide();
            });
      },
    }),
    ((pt.Tween = R).prototype = {
      constructor: R,
      init: function (t, e, n, i, r, o) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = r || pt.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (pt.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = R.propHooks[this.prop];
        return t && t.get ? t.get(this) : R.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = R.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                pt.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : R.propHooks._default.set(this),
          this
        );
      },
    }),
    (R.prototype.init.prototype = R.prototype),
    (R.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = pt.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          pt.fx.step[t.prop]
            ? pt.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[pt.cssProps[t.prop]] &&
                !pt.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : pt.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (R.propHooks.scrollTop = R.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (pt.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (pt.fx = R.prototype.init),
    (pt.fx.step = {});
  var ke,
    Ae,
    je,
    Ne,
    Ie,
    Fe,
    $e,
    Le = /^(?:toggle|show|hide)$/,
    Oe = /queueHooks$/;
  (pt.Animation = pt.extend(U, {
    tweeners: {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e);
          return d(n.elem, t, Ht.exec(e), n), n;
        },
      ],
    },
    tweener: function (t, e) {
      pt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(Nt));
      for (var n, i = 0, r = t.length; i < r; i++)
        (n = t[i]),
          (U.tweeners[n] = U.tweeners[n] || []),
          U.tweeners[n].unshift(e);
    },
    prefilters: [W],
    prefilter: function (t, e) {
      e ? U.prefilters.unshift(t) : U.prefilters.push(t);
    },
  })),
    (pt.speed = function (t, e, n) {
      var i =
        t && "object" == typeof t
          ? pt.extend({}, t)
          : {
              complete: n || (!n && e) || (pt.isFunction(t) && t),
              duration: t,
              easing: (n && e) || (e && !pt.isFunction(e) && e),
            };
      return (
        (i.duration = pt.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in pt.fx.speeds
          ? pt.fx.speeds[i.duration]
          : pt.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          pt.isFunction(i.old) && i.old.call(this),
            i.queue && pt.dequeue(this, i.queue);
        }),
        i
      );
    }),
    pt.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(Wt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, n, i);
      },
      animate: function (e, t, n, i) {
        var r = pt.isEmptyObject(e),
          o = pt.speed(t, n, i),
          a = function () {
            var t = U(this, pt.extend({}, e), o);
            (r || pt._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (r, t, o) {
        var a = function (t) {
          var e = t.stop;
          delete t.stop, e(o);
        };
        return (
          "string" != typeof r && ((o = t), (t = r), (r = undefined)),
          t && !1 !== r && this.queue(r || "fx", []),
          this.each(function () {
            var t = !0,
              e = null != r && r + "queueHooks",
              n = pt.timers,
              i = pt._data(this);
            if (e) i[e] && i[e].stop && a(i[e]);
            else for (e in i) i[e] && i[e].stop && Oe.test(e) && a(i[e]);
            for (e = n.length; e--; )
              n[e].elem !== this ||
                (null != r && n[e].queue !== r) ||
                (n[e].anim.stop(o), (t = !1), n.splice(e, 1));
            (!t && o) || pt.dequeue(this, r);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var t,
              e = pt._data(this),
              n = e[a + "queue"],
              i = e[a + "queueHooks"],
              r = pt.timers,
              o = n ? n.length : 0;
            for (
              e.finish = !0,
                pt.queue(this, a, []),
                i && i.stop && i.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === a &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < o; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete e.finish;
          })
        );
      },
    }),
    pt.each(["toggle", "show", "hide"], function (t, i) {
      var r = pt.fn[i];
      pt.fn[i] = function (t, e, n) {
        return null == t || "boolean" == typeof t
          ? r.apply(this, arguments)
          : this.animate(H(i, !0), t, e, n);
      };
    }),
    pt.each(
      {
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, i) {
        pt.fn[t] = function (t, e, n) {
          return this.animate(i, t, e, n);
        };
      }
    ),
    (pt.timers = []),
    (pt.fx.tick = function () {
      var t,
        e = pt.timers,
        n = 0;
      for (ke = pt.now(); n < e.length; n++)
        (t = e[n])() || e[n] !== t || e.splice(n--, 1);
      e.length || pt.fx.stop(), (ke = undefined);
    }),
    (pt.fx.timer = function (t) {
      pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop();
    }),
    (pt.fx.interval = 13),
    (pt.fx.start = function () {
      Ae || (Ae = C.setInterval(pt.fx.tick, pt.fx.interval));
    }),
    (pt.fx.stop = function () {
      C.clearInterval(Ae), (Ae = null);
    }),
    (pt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (pt.fn.delay = function (i, t) {
      return (
        (i = (pt.fx && pt.fx.speeds[i]) || i),
        (t = t || "fx"),
        this.queue(t, function (t, e) {
          var n = C.setTimeout(t, i);
          e.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (Ne = rt.createElement("input")),
    (Ie = rt.createElement("div")),
    (Fe = rt.createElement("select")),
    ($e = Fe.appendChild(rt.createElement("option"))),
    (Ie = rt.createElement("div")).setAttribute("className", "t"),
    (Ie.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (je = Ie.getElementsByTagName("a")[0]),
    Ne.setAttribute("type", "checkbox"),
    Ie.appendChild(Ne),
    ((je = Ie.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
    (ft.getSetAttribute = "t" !== Ie.className),
    (ft.style = /top/.test(je.getAttribute("style"))),
    (ft.hrefNormalized = "/a" === je.getAttribute("href")),
    (ft.checkOn = !!Ne.value),
    (ft.optSelected = $e.selected),
    (ft.enctype = !!rt.createElement("form").enctype),
    (Fe.disabled = !0),
    (ft.optDisabled = !$e.disabled),
    (Ne = rt.createElement("input")).setAttribute("value", ""),
    (ft.input = "" === Ne.getAttribute("value")),
    (Ne.value = "t"),
    Ne.setAttribute("type", "radio"),
    (ft.radioValue = "t" === Ne.value);
  var Pe = /\r/g,
    Re = /[\x20\t\r\n\f]+/g;
  pt.fn.extend({
    val: function (n) {
      var i,
        t,
        r,
        e = this[0];
      return arguments.length
        ? ((r = pt.isFunction(n)),
          this.each(function (t) {
            var e;
            1 === this.nodeType &&
              (null == (e = r ? n.call(this, t, pt(this).val()) : n)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : pt.isArray(e) &&
                  (e = pt.map(e, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((i =
                pt.valHooks[this.type] ||
                pt.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                i.set(this, e, "value") !== undefined) ||
                (this.value = e));
          }))
        : e
        ? (i = pt.valHooks[e.type] || pt.valHooks[e.nodeName.toLowerCase()]) &&
          "get" in i &&
          (t = i.get(e, "value")) !== undefined
          ? t
          : "string" == typeof (t = e.value)
          ? t.replace(Pe, "")
          : null == t
          ? ""
          : t
        : void 0;
    },
  }),
    pt.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = pt.find.attr(t, "value");
            return null != e ? e : pt.trim(pt.text(t)).replace(Re, " ");
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                n,
                i = t.options,
                r = t.selectedIndex,
                o = "select-one" === t.type || r < 0,
                a = o ? null : [],
                s = o ? r + 1 : i.length,
                l = r < 0 ? s : o ? r : 0;
              l < s;
              l++
            )
              if (
                ((n = i[l]).selected || l === r) &&
                (ft.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !pt.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((e = pt(n).val()), o)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var n, i, r = t.options, o = pt.makeArray(e), a = r.length;
              a--;

            )
              if (((i = r[a]), -1 < pt.inArray(pt.valHooks.option.get(i), o)))
                try {
                  i.selected = n = !0;
                } catch (_) {
                  i.scrollHeight;
                }
              else i.selected = !1;
            return n || (t.selectedIndex = -1), r;
          },
        },
      },
    }),
    pt.each(["radio", "checkbox"], function () {
      (pt.valHooks[this] = {
        set: function (t, e) {
          if (pt.isArray(e))
            return (t.checked = -1 < pt.inArray(pt(t).val(), e));
        },
      }),
        ft.checkOn ||
          (pt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var Me,
    He,
    Be = pt.expr.attrHandle,
    We = /^(?:checked|selected)$/i,
    qe = ft.getSetAttribute,
    Ue = ft.input;
  pt.fn.extend({
    attr: function (t, e) {
      return qt(this, pt.attr, t, e, 1 < arguments.length);
    },
    removeAttr: function (t) {
      return this.each(function () {
        pt.removeAttr(this, t);
      });
    },
  }),
    pt.extend({
      attr: function (t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof t.getAttribute
            ? pt.prop(t, e, n)
            : ((1 === o && pt.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (r =
                  pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? He : Me))),
              n !== undefined
                ? null === n
                  ? void pt.removeAttr(t, e)
                  : r && "set" in r && (i = r.set(t, n, e)) !== undefined
                  ? i
                  : (t.setAttribute(e, n + ""), n)
                : r && "get" in r && null !== (i = r.get(t, e))
                ? i
                : null == (i = pt.find.attr(t, e))
                ? undefined
                : i);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!ft.radioValue && "radio" === e && pt.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var n,
          i,
          r = 0,
          o = e && e.match(Nt);
        if (o && 1 === t.nodeType)
          for (; (n = o[r++]); )
            (i = pt.propFix[n] || n),
              pt.expr.match.bool.test(n)
                ? (Ue && qe) || !We.test(n)
                  ? (t[i] = !1)
                  : (t[pt.camelCase("default-" + n)] = t[i] = !1)
                : pt.attr(t, n, ""),
              t.removeAttribute(qe ? n : i);
      },
    }),
    (He = {
      set: function (t, e, n) {
        return (
          !1 === e
            ? pt.removeAttr(t, n)
            : (Ue && qe) || !We.test(n)
            ? t.setAttribute((!qe && pt.propFix[n]) || n, n)
            : (t[pt.camelCase("default-" + n)] = t[n] = !0),
          n
        );
      },
    }),
    pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var o = Be[e] || pt.find.attr;
      (Ue && qe) || !We.test(e)
        ? (Be[e] = function (t, e, n) {
            var i, r;
            return (
              n ||
                ((r = Be[e]),
                (Be[e] = i),
                (i = null != o(t, e, n) ? e.toLowerCase() : null),
                (Be[e] = r)),
              i
            );
          })
        : (Be[e] = function (t, e, n) {
            if (!n)
              return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null;
          });
    }),
    (Ue && qe) ||
      (pt.attrHooks.value = {
        set: function (t, e, n) {
          if (!pt.nodeName(t, "input")) return Me && Me.set(t, e, n);
          t.defaultValue = e;
        },
      }),
    qe ||
      ((Me = {
        set: function (t, e, n) {
          var i = t.getAttributeNode(n);
          if (
            (i || t.setAttributeNode((i = t.ownerDocument.createAttribute(n))),
            (i.value = e += ""),
            "value" === n || e === t.getAttribute(n))
          )
            return e;
        },
      }),
      (Be.id =
        Be.name =
        Be.coords =
          function (t, e, n) {
            var i;
            if (!n)
              return (i = t.getAttributeNode(e)) && "" !== i.value
                ? i.value
                : null;
          }),
      (pt.valHooks.button = {
        get: function (t, e) {
          var n = t.getAttributeNode(e);
          if (n && n.specified) return n.value;
        },
        set: Me.set,
      }),
      (pt.attrHooks.contenteditable = {
        set: function (t, e, n) {
          Me.set(t, "" !== e && e, n);
        },
      }),
      pt.each(["width", "height"], function (t, n) {
        pt.attrHooks[n] = {
          set: function (t, e) {
            if ("" === e) return t.setAttribute(n, "auto"), e;
          },
        };
      })),
    ft.style ||
      (pt.attrHooks.style = {
        get: function (t) {
          return t.style.cssText || undefined;
        },
        set: function (t, e) {
          return (t.style.cssText = e + "");
        },
      });
  var Ve = /^(?:input|select|textarea|button|object)$/i,
    ze = /^(?:a|area)$/i;
  pt.fn.extend({
    prop: function (t, e) {
      return qt(this, pt.prop, t, e, 1 < arguments.length);
    },
    removeProp: function (e) {
      return (
        (e = pt.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = undefined), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    pt.extend({
      prop: function (t, e, n) {
        var i,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && pt.isXMLDoc(t)) ||
              ((e = pt.propFix[e] || e), (r = pt.propHooks[e])),
            n !== undefined
              ? r && "set" in r && (i = r.set(t, n, e)) !== undefined
                ? i
                : (t[e] = n)
              : r && "get" in r && null !== (i = r.get(t, e))
              ? i
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = pt.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : Ve.test(t.nodeName) || (ze.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ft.hrefNormalized ||
      pt.each(["href", "src"], function (t, e) {
        pt.propHooks[e] = {
          get: function (t) {
            return t.getAttribute(e, 4);
          },
        };
      }),
    ft.optSelected ||
      (pt.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return (
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
          );
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    pt.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        pt.propFix[this.toLowerCase()] = this;
      }
    ),
    ft.enctype || (pt.propFix.enctype = "encoding");
  var Xe = /[\t\r\n\f]/g;
  pt.fn.extend({
    addClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = 0;
      if (pt.isFunction(e))
        return this.each(function (t) {
          pt(this).addClass(e.call(this, t, V(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(Nt) || []; (n = this[l++]); )
          if (
            ((r = V(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(Xe, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            r !== (s = pt.trim(i)) && pt.attr(n, "class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s,
        l = 0;
      if (pt.isFunction(e))
        return this.each(function (t) {
          pt(this).removeClass(e.call(this, t, V(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(Nt) || []; (n = this[l++]); )
          if (
            ((r = V(n)),
            (i = 1 === n.nodeType && (" " + r + " ").replace(Xe, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; -1 < i.indexOf(" " + o + " "); )
                i = i.replace(" " + o + " ", " ");
            r !== (s = pt.trim(i)) && pt.attr(n, "class", s);
          }
      return this;
    },
    toggleClass: function (r, e) {
      var o = typeof r;
      return "boolean" == typeof e && "string" === o
        ? e
          ? this.addClass(r)
          : this.removeClass(r)
        : pt.isFunction(r)
        ? this.each(function (t) {
            pt(this).toggleClass(r.call(this, t, V(this), e), e);
          })
        : this.each(function () {
            var t, e, n, i;
            if ("string" === o)
              for (e = 0, n = pt(this), i = r.match(Nt) || []; (t = i[e++]); )
                n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
            else
              (r !== undefined && "boolean" !== o) ||
                ((t = V(this)) && pt._data(this, "__className__", t),
                pt.attr(
                  this,
                  "class",
                  t || !1 === r ? "" : pt._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (t) {
      var e,
        n,
        i = 0;
      for (e = " " + t + " "; (n = this[i++]); )
        if (
          1 === n.nodeType &&
          -1 < (" " + V(n) + " ").replace(Xe, " ").indexOf(e)
        )
          return !0;
      return !1;
    },
  }),
    pt.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, n) {
        pt.fn[n] = function (t, e) {
          return 0 < arguments.length
            ? this.on(n, null, t, e)
            : this.trigger(n);
        };
      }
    ),
    pt.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    });
  var Je = C.location,
    Ge = pt.now(),
    Ye = /\?/,
    Ke =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (pt.parseJSON = function (t) {
    if (C.JSON && C.JSON.parse) return C.JSON.parse(t + "");
    var r,
      o = null,
      e = pt.trim(t + "");
    return e &&
      !pt.trim(
        e.replace(Ke, function (t, e, n, i) {
          return (
            r && e && (o = 0), 0 === o ? t : ((r = n || e), (o += !i - !n), "")
          );
        })
      )
      ? Function("return " + e)()
      : pt.error("Invalid JSON: " + t);
  }),
    (pt.parseXML = function (t) {
      var e;
      if (!t || "string" != typeof t) return null;
      try {
        C.DOMParser
          ? (e = new C.DOMParser().parseFromString(t, "text/xml"))
          : (((e = new C.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            e.loadXML(t));
      } catch (n) {
        e = undefined;
      }
      return (
        (e &&
          e.documentElement &&
          !e.getElementsByTagName("parsererror").length) ||
          pt.error("Invalid XML: " + t),
        e
      );
    });
  var Qe = /#.*$/,
    Ze = /([?&])_=[^&]*/,
    tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    en = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    nn = /^(?:GET|HEAD)$/,
    rn = /^\/\//,
    on = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    an = {},
    sn = {},
    ln = "*/".concat("*"),
    un = Je.href,
    cn = on.exec(un.toLowerCase()) || [];
  pt.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: un,
      type: "GET",
      isLocal: en.test(cn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ln,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": pt.parseJSON,
        "text xml": pt.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (t, e) {
      return e ? J(J(t, pt.ajaxSettings), e) : J(pt.ajaxSettings, t);
    },
    ajaxPrefilter: z(an),
    ajaxTransport: z(sn),
    ajax: function (t, e) {
      function n(t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = e;
        2 !== _ &&
          ((_ = 2),
          f && C.clearTimeout(f),
          (p = undefined),
          (d = i || ""),
          (x.readyState = 0 < t ? 4 : 0),
          (r = (200 <= t && t < 300) || 304 === t),
          n && (s = G(m, x, n)),
          (s = Y(m, s, x, r)),
          r
            ? (m.ifModified &&
                ((l = x.getResponseHeader("Last-Modified")) &&
                  (pt.lastModified[c] = l),
                (l = x.getResponseHeader("etag")) && (pt.etag[c] = l)),
              204 === t || "HEAD" === m.type
                ? (u = "nocontent")
                : 304 === t
                ? (u = "notmodified")
                : ((u = s.state), (o = s.data), (r = !(a = s.error))))
            : ((a = u), (!t && u) || ((u = "error"), t < 0 && (t = 0))),
          (x.status = t),
          (x.statusText = (e || u) + ""),
          r ? y.resolveWith(g, [o, u, x]) : y.rejectWith(g, [x, u, a]),
          x.statusCode(w),
          (w = undefined),
          h && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, m, r ? o : a]),
          b.fireWith(g, [x, u]),
          h &&
            (v.trigger("ajaxComplete", [x, m]),
            --pt.active || pt.event.trigger("ajaxStop")));
      }
      "object" == typeof t && ((e = t), (t = undefined)), (e = e || {});
      var i,
        r,
        c,
        d,
        f,
        h,
        p,
        o,
        m = pt.ajaxSetup({}, e),
        g = m.context || m,
        v = m.context && (g.nodeType || g.jquery) ? pt(g) : pt.event,
        y = pt.Deferred(),
        b = pt.Callbacks("once memory"),
        w = m.statusCode || {},
        a = {},
        s = {},
        _ = 0,
        l = "canceled",
        x = {
          readyState: 0,
          getResponseHeader: function (t) {
            var e;
            if (2 === _) {
              if (!o)
                for (o = {}; (e = tn.exec(d)); ) o[e[1].toLowerCase()] = e[2];
              e = o[t.toLowerCase()];
            }
            return null == e ? null : e;
          },
          getAllResponseHeaders: function () {
            return 2 === _ ? d : null;
          },
          setRequestHeader: function (t, e) {
            var n = t.toLowerCase();
            return _ || ((t = s[n] = s[n] || t), (a[t] = e)), this;
          },
          overrideMimeType: function (t) {
            return _ || (m.mimeType = t), this;
          },
          statusCode: function (t) {
            var e;
            if (t)
              if (_ < 2) for (e in t) w[e] = [w[e], t[e]];
              else x.always(t[x.status]);
            return this;
          },
          abort: function (t) {
            var e = t || l;
            return p && p.abort(e), n(0, e), this;
          },
        };
      if (
        ((y.promise(x).complete = b.add),
        (x.success = x.done),
        (x.error = x.fail),
        (m.url = ((t || m.url || un) + "")
          .replace(Qe, "")
          .replace(rn, cn[1] + "//")),
        (m.type = e.method || e.type || m.method || m.type),
        (m.dataTypes = pt
          .trim(m.dataType || "*")
          .toLowerCase()
          .match(Nt) || [""]),
        null == m.crossDomain &&
          ((i = on.exec(m.url.toLowerCase())),
          (m.crossDomain = !(
            !i ||
            (i[1] === cn[1] &&
              i[2] === cn[2] &&
              (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                (cn[3] || ("http:" === cn[1] ? "80" : "443")))
          ))),
        m.data &&
          m.processData &&
          "string" != typeof m.data &&
          (m.data = pt.param(m.data, m.traditional)),
        X(an, m, e, x),
        2 === _)
      )
        return x;
      for (r in ((h = pt.event && m.global) &&
        0 == pt.active++ &&
        pt.event.trigger("ajaxStart"),
      (m.type = m.type.toUpperCase()),
      (m.hasContent = !nn.test(m.type)),
      (c = m.url),
      m.hasContent ||
        (m.data &&
          ((c = m.url += (Ye.test(c) ? "&" : "?") + m.data), delete m.data),
        !1 === m.cache &&
          (m.url = Ze.test(c)
            ? c.replace(Ze, "$1_=" + Ge++)
            : c + (Ye.test(c) ? "&" : "?") + "_=" + Ge++)),
      m.ifModified &&
        (pt.lastModified[c] &&
          x.setRequestHeader("If-Modified-Since", pt.lastModified[c]),
        pt.etag[c] && x.setRequestHeader("If-None-Match", pt.etag[c])),
      ((m.data && m.hasContent && !1 !== m.contentType) || e.contentType) &&
        x.setRequestHeader("Content-Type", m.contentType),
      x.setRequestHeader(
        "Accept",
        m.dataTypes[0] && m.accepts[m.dataTypes[0]]
          ? m.accepts[m.dataTypes[0]] +
              ("*" !== m.dataTypes[0] ? ", " + ln + "; q=0.01" : "")
          : m.accepts["*"]
      ),
      m.headers))
        x.setRequestHeader(r, m.headers[r]);
      if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === _))
        return x.abort();
      for (r in ((l = "abort"), { success: 1, error: 1, complete: 1 }))
        x[r](m[r]);
      if ((p = X(sn, m, e, x))) {
        if (((x.readyState = 1), h && v.trigger("ajaxSend", [x, m]), 2 === _))
          return x;
        m.async &&
          0 < m.timeout &&
          (f = C.setTimeout(function () {
            x.abort("timeout");
          }, m.timeout));
        try {
          (_ = 1), p.send(a, n);
        } catch (u) {
          if (!(_ < 2)) throw u;
          n(-1, u);
        }
      } else n(-1, "No Transport");
      return x;
    },
    getJSON: function (t, e, n) {
      return pt.get(t, e, n, "json");
    },
    getScript: function (t, e) {
      return pt.get(t, undefined, e, "script");
    },
  }),
    pt.each(["get", "post"], function (t, r) {
      pt[r] = function (t, e, n, i) {
        return (
          pt.isFunction(e) && ((i = i || n), (n = e), (e = undefined)),
          pt.ajax(
            pt.extend(
              { url: t, type: r, dataType: i, data: e, success: n },
              pt.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (pt._evalUrl = function (t) {
      return pt.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    pt.fn.extend({
      wrapAll: function (e) {
        if (pt.isFunction(e))
          return this.each(function (t) {
            pt(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = pt(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var t = this;
                  t.firstChild && 1 === t.firstChild.nodeType;

                )
                  t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return pt.isFunction(n)
          ? this.each(function (t) {
              pt(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = pt(this),
                e = t.contents();
              e.length ? e.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (e) {
        var n = pt.isFunction(e);
        return this.each(function (t) {
          pt(this).wrapAll(n ? e.call(this, t) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (pt.expr.filters.hidden = function (t) {
      return ft.reliableHiddenOffsets()
        ? t.offsetWidth <= 0 &&
            t.offsetHeight <= 0 &&
            !t.getClientRects().length
        : Q(t);
    }),
    (pt.expr.filters.visible = function (t) {
      return !pt.expr.filters.hidden(t);
    });
  var dn = /%20/g,
    fn = /\[\]$/,
    hn = /\r?\n/g,
    pn = /^(?:submit|button|image|reset|file)$/i,
    mn = /^(?:input|select|textarea|keygen)/i;
  (pt.param = function (t, e) {
    var n,
      i = [],
      r = function (t, e) {
        (e = pt.isFunction(e) ? e() : null == e ? "" : e),
          (i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (e === undefined && (e = pt.ajaxSettings && pt.ajaxSettings.traditional),
      pt.isArray(t) || (t.jquery && !pt.isPlainObject(t)))
    )
      pt.each(t, function () {
        r(this.name, this.value);
      });
    else for (n in t) Z(n, t[n], e, r);
    return i.join("&").replace(dn, "+");
  }),
    pt.fn.extend({
      serialize: function () {
        return pt.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = pt.prop(this, "elements");
          return t ? pt.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !pt(this).is(":disabled") &&
              mn.test(this.nodeName) &&
              !pn.test(t) &&
              (this.checked || !Ut.test(t))
            );
          })
          .map(function (t, e) {
            var n = pt(this).val();
            return null == n
              ? null
              : pt.isArray(n)
              ? pt.map(n, function (t) {
                  return { name: e.name, value: t.replace(hn, "\r\n") };
                })
              : { name: e.name, value: n.replace(hn, "\r\n") };
          })
          .get();
      },
    }),
    (pt.ajaxSettings.xhr =
      C.ActiveXObject !== undefined
        ? function () {
            return this.isLocal
              ? et()
              : 8 < rt.documentMode
              ? tt()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  tt()) ||
                et();
          }
        : tt);
  var gn = 0,
    vn = {},
    yn = pt.ajaxSettings.xhr();
  C.attachEvent &&
    C.attachEvent("onunload", function () {
      for (var t in vn) vn[t](undefined, !0);
    }),
    (ft.cors = !!yn && "withCredentials" in yn),
    (yn = ft.ajax = !!yn) &&
      pt.ajaxTransport(function (u) {
        var c;
        if (!u.crossDomain || ft.cors)
          return {
            send: function (t, a) {
              var e,
                s = u.xhr(),
                l = ++gn;
              if (
                (s.open(u.type, u.url, u.async, u.username, u.password),
                u.xhrFields)
              )
                for (e in u.xhrFields) s[e] = u.xhrFields[e];
              for (e in (u.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(u.mimeType),
              u.crossDomain ||
                t["X-Requested-With"] ||
                (t["X-Requested-With"] = "XMLHttpRequest"),
              t))
                t[e] !== undefined && s.setRequestHeader(e, t[e] + "");
              s.send((u.hasContent && u.data) || null),
                (c = function (t, e) {
                  var n, i, r;
                  if (c && (e || 4 === s.readyState))
                    if (
                      (delete vn[l],
                      (c = undefined),
                      (s.onreadystatechange = pt.noop),
                      e)
                    )
                      4 !== s.readyState && s.abort();
                    else {
                      (r = {}),
                        (n = s.status),
                        "string" == typeof s.responseText &&
                          (r.text = s.responseText);
                      try {
                        i = s.statusText;
                      } catch (o) {
                        i = "";
                      }
                      n || !u.isLocal || u.crossDomain
                        ? 1223 === n && (n = 204)
                        : (n = r.text ? 200 : 404);
                    }
                  r && a(n, i, r, s.getAllResponseHeaders());
                }),
                u.async
                  ? 4 === s.readyState
                    ? C.setTimeout(c)
                    : (s.onreadystatechange = vn[l] = c)
                  : c();
            },
            abort: function () {
              c && c(undefined, !0);
            },
          };
      }),
    pt.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return pt.globalEval(t), t;
        },
      },
    }),
    pt.ajaxPrefilter("script", function (t) {
      t.cache === undefined && (t.cache = !1),
        t.crossDomain && ((t.type = "GET"), (t.global = !1));
    }),
    pt.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var i,
          r = rt.head || pt("head")[0] || rt.documentElement;
        return {
          send: function (t, n) {
            ((i = rt.createElement("script")).async = !0),
              e.scriptCharset && (i.charset = e.scriptCharset),
              (i.src = e.url),
              (i.onload = i.onreadystatechange =
                function (t, e) {
                  (e ||
                    !i.readyState ||
                    /loaded|complete/.test(i.readyState)) &&
                    ((i.onload = i.onreadystatechange = null),
                    i.parentNode && i.parentNode.removeChild(i),
                    (i = null),
                    e || n(200, "success"));
                }),
              r.insertBefore(i, r.firstChild);
          },
          abort: function () {
            i && i.onload(undefined, !0);
          },
        };
      }
    });
  var bn = [],
    wn = /(=)\?(?=&|$)|\?\?/;
  pt.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = bn.pop() || pt.expando + "_" + Ge++;
      return (this[t] = !0), t;
    },
  }),
    pt.ajaxPrefilter("json jsonp", function (t, e, n) {
      var i,
        r,
        o,
        a =
          !1 !== t.jsonp &&
          (wn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              wn.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            pt.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(wn, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (Ye.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return o || pt.error(i + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = C[i]),
          (C[i] = function () {
            o = arguments;
          }),
          n.always(function () {
            r === undefined ? pt(C).removeProp(i) : (C[i] = r),
              t[i] && ((t.jsonpCallback = e.jsonpCallback), bn.push(i)),
              o && pt.isFunction(r) && r(o[0]),
              (o = r = undefined);
          }),
          "script"
        );
    }),
    (pt.parseHTML = function (t, e, n) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((n = e), (e = !1)), (e = e || rt);
      var i = Ct.exec(t),
        r = !n && [];
      return i
        ? [e.createElement(i[1])]
        : ((i = m([t], e, r)),
          r && r.length && pt(r).remove(),
          pt.merge([], i.childNodes));
    });
  var _n = pt.fn.load;
  (pt.fn.load = function (t, e, n) {
    if ("string" != typeof t && _n) return _n.apply(this, arguments);
    var i,
      r,
      o,
      a = this,
      s = t.indexOf(" ");
    return (
      -1 < s && ((i = pt.trim(t.slice(s, t.length))), (t = t.slice(0, s))),
      pt.isFunction(e)
        ? ((n = e), (e = undefined))
        : e && "object" == typeof e && (r = "POST"),
      0 < a.length &&
        pt
          .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
          .done(function (t) {
            (o = arguments),
              a.html(i ? pt("<div>").append(pt.parseHTML(t)).find(i) : t);
          })
          .always(
            n &&
              function (t, e) {
                a.each(function () {
                  n.apply(this, o || [t.responseText, e, t]);
                });
              }
          ),
      this
    );
  }),
    pt.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        pt.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (pt.expr.filters.animated = function (e) {
      return pt.grep(pt.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (pt.offset = {
      setOffset: function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u = pt.css(t, "position"),
          c = pt(t),
          d = {};
        "static" === u && (t.style.position = "relative"),
          (s = c.offset()),
          (o = pt.css(t, "top")),
          (l = pt.css(t, "left")),
          ("absolute" === u || "fixed" === u) && -1 < pt.inArray("auto", [o, l])
            ? ((a = (i = c.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, s))),
          null != e.top && (d.top = e.top - s.top + a),
          null != e.left && (d.left = e.left - s.left + r),
          "using" in e ? e.using.call(t, d) : c.css(d);
      },
    }),
    pt.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return e === undefined
            ? this
            : this.each(function (t) {
                pt.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = { top: 0, left: 0 },
          r = this[0],
          o = r && r.ownerDocument;
        return o
          ? ((t = o.documentElement),
            pt.contains(t, r)
              ? ("undefined" != typeof r.getBoundingClientRect &&
                  (i = r.getBoundingClientRect()),
                (n = nt(o)),
                {
                  top:
                    i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    i.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n = { top: 0, left: 0 },
            i = this[0];
          return (
            "fixed" === pt.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                pt.nodeName(t[0], "html") || (n = t.offset()),
                (n.top += pt.css(t[0], "borderTopWidth", !0)),
                (n.left += pt.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - n.top - pt.css(i, "marginTop", !0),
              left: e.left - n.left - pt.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position");

          )
            t = t.offsetParent;
          return t || ge;
        });
      },
    }),
    pt.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, r) {
        var o = /Y/.test(r);
        pt.fn[e] = function (t) {
          return qt(
            this,
            function (t, e, n) {
              var i = nt(t);
              if (n === undefined)
                return i
                  ? r in i
                    ? i[r]
                    : i.document.documentElement[e]
                  : t[e];
              i
                ? i.scrollTo(
                    o ? pt(i).scrollLeft() : n,
                    o ? n : pt(i).scrollTop()
                  )
                : (t[e] = n);
            },
            e,
            t,
            arguments.length,
            null
          );
        };
      }
    ),
    pt.each(["top", "left"], function (t, n) {
      pt.cssHooks[n] = I(ft.pixelPosition, function (t, e) {
        if (e)
          return (e = ye(t, n)), pe.test(e) ? pt(t).position()[n] + "px" : e;
      });
    }),
    pt.each({ Height: "height", Width: "width" }, function (o, a) {
      pt.each(
        { padding: "inner" + o, content: a, "": "outer" + o },
        function (i, t) {
          pt.fn[t] = function (t, e) {
            var n = arguments.length && (i || "boolean" != typeof t),
              r = i || (!0 === t || !0 === e ? "margin" : "border");
            return qt(
              this,
              function (t, e, n) {
                var i;
                return pt.isWindow(t)
                  ? t.document.documentElement["client" + o]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + o],
                      i["scroll" + o],
                      t.body["offset" + o],
                      i["offset" + o],
                      i["client" + o]
                    ))
                  : n === undefined
                  ? pt.css(t, e, r)
                  : pt.style(t, e, n, r);
              },
              a,
              n ? t : undefined,
              n,
              null
            );
          };
        }
      );
    }),
    pt.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
    }),
    (pt.fn.size = function () {
      return this.length;
    }),
    (pt.fn.andSelf = pt.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return pt;
      });
  var xn = C.jQuery,
    Cn = C.$;
  return (
    (pt.noConflict = function (t) {
      return (
        C.$ === pt && (C.$ = Cn), t && C.jQuery === pt && (C.jQuery = xn), pt
      );
    }),
    t || (C.jQuery = C.$ = pt),
    pt
  );
}),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    return (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], t)
      : t(jQuery);
  })(function (t) {
    return (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], t)
      : t(jQuery);
  })(function (D) {
    return (
      (function () {
        function x(t, e, n) {
          return [
            parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (l.test(t[1]) ? n / 100 : 1),
          ];
        }
        function C(t, e) {
          return parseInt(D.css(t, e), 10) || 0;
        }
        function e(t) {
          var e = t[0];
          return 9 === e.nodeType
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: 0, left: 0 },
              }
            : D.isWindow(e)
            ? {
                width: t.width(),
                height: t.height(),
                offset: { top: t.scrollTop(), left: t.scrollLeft() },
              }
            : e.preventDefault
            ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
            : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset(),
              };
        }
        var r,
          S = Math.max,
          T = Math.abs,
          i = /left|center|right/,
          o = /top|center|bottom/,
          a = /[\+\-]\d+(\.[\d]+)?%?/,
          s = /^\w+/,
          l = /%$/,
          n = D.fn.position;
        (D.position = {
          scrollbarWidth: function () {
            if (r !== undefined) return r;
            var t,
              e,
              n = D(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              i = n.children()[0];
            return (
              D("body").append(n),
              (t = i.offsetWidth),
              n.css("overflow", "scroll"),
              t === (e = i.offsetWidth) && (e = n[0].clientWidth),
              n.remove(),
              (r = t - e)
            );
          },
          getScrollInfo: function (t) {
            var e =
                t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
              n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
              i =
                "scroll" === e ||
                ("auto" === e && t.width < t.element[0].scrollWidth);
            return {
              width:
                "scroll" === n ||
                ("auto" === n && t.height < t.element[0].scrollHeight)
                  ? D.position.scrollbarWidth()
                  : 0,
              height: i ? D.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (t) {
            var e = D(t || window),
              n = D.isWindow(e[0]),
              i = !!e[0] && 9 === e[0].nodeType;
            return {
              element: e,
              isWindow: n,
              isDocument: i,
              offset: !n && !i ? D(t).offset() : { left: 0, top: 0 },
              scrollLeft: e.scrollLeft(),
              scrollTop: e.scrollTop(),
              width: e.outerWidth(),
              height: e.outerHeight(),
            };
          },
        }),
          (D.fn.position = function (d) {
            if (!d || !d.of) return n.apply(this, arguments);
            d = D.extend({}, d);
            var f,
              h,
              p,
              m,
              g,
              t,
              v = D(d.of),
              y = D.position.getWithinInfo(d.within),
              b = D.position.getScrollInfo(y),
              w = (d.collision || "flip").split(" "),
              _ = {};
            return (
              (t = e(v)),
              v[0].preventDefault && (d.at = "left top"),
              (h = t.width),
              (p = t.height),
              (m = t.offset),
              (g = D.extend({}, m)),
              D.each(["my", "at"], function () {
                var t,
                  e,
                  n = (d[this] || "").split(" ");
                1 === n.length &&
                  (n = i.test(n[0])
                    ? n.concat(["center"])
                    : o.test(n[0])
                    ? ["center"].concat(n)
                    : ["center", "center"]),
                  (n[0] = i.test(n[0]) ? n[0] : "center"),
                  (n[1] = o.test(n[1]) ? n[1] : "center"),
                  (t = a.exec(n[0])),
                  (e = a.exec(n[1])),
                  (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (d[this] = [s.exec(n[0])[0], s.exec(n[1])[0]]);
              }),
              1 === w.length && (w[1] = w[0]),
              "right" === d.at[0]
                ? (g.left += h)
                : "center" === d.at[0] && (g.left += h / 2),
              "bottom" === d.at[1]
                ? (g.top += p)
                : "center" === d.at[1] && (g.top += p / 2),
              (f = x(_.at, h, p)),
              (g.left += f[0]),
              (g.top += f[1]),
              this.each(function () {
                var n,
                  t,
                  a = D(this),
                  s = a.outerWidth(),
                  l = a.outerHeight(),
                  e = C(this, "marginLeft"),
                  i = C(this, "marginTop"),
                  r = s + e + C(this, "marginRight") + b.width,
                  o = l + i + C(this, "marginBottom") + b.height,
                  u = D.extend({}, g),
                  c = x(_.my, a.outerWidth(), a.outerHeight());
                "right" === d.my[0]
                  ? (u.left -= s)
                  : "center" === d.my[0] && (u.left -= s / 2),
                  "bottom" === d.my[1]
                    ? (u.top -= l)
                    : "center" === d.my[1] && (u.top -= l / 2),
                  (u.left += c[0]),
                  (u.top += c[1]),
                  (n = { marginLeft: e, marginTop: i }),
                  D.each(["left", "top"], function (t, e) {
                    D.ui.position[w[t]] &&
                      D.ui.position[w[t]][e](u, {
                        targetWidth: h,
                        targetHeight: p,
                        elemWidth: s,
                        elemHeight: l,
                        collisionPosition: n,
                        collisionWidth: r,
                        collisionHeight: o,
                        offset: [f[0] + c[0], f[1] + c[1]],
                        my: d.my,
                        at: d.at,
                        within: y,
                        elem: a,
                      });
                  }),
                  d.using &&
                    (t = function (t) {
                      var e = m.left - u.left,
                        n = e + h - s,
                        i = m.top - u.top,
                        r = i + p - l,
                        o = {
                          target: {
                            element: v,
                            left: m.left,
                            top: m.top,
                            width: h,
                            height: p,
                          },
                          element: {
                            element: a,
                            left: u.left,
                            top: u.top,
                            width: s,
                            height: l,
                          },
                          horizontal:
                            n < 0 ? "left" : 0 < e ? "right" : "center",
                          vertical: r < 0 ? "top" : 0 < i ? "bottom" : "middle",
                        };
                      h < s && T(e + n) < h && (o.horizontal = "center"),
                        p < l && T(i + r) < p && (o.vertical = "middle"),
                        S(T(e), T(n)) > S(T(i), T(r))
                          ? (o.important = "horizontal")
                          : (o.important = "vertical"),
                        d.using.call(this, t, o);
                    }),
                  a.offset(D.extend(u, { using: t }));
              })
            );
          }),
          (D.ui.position = {
            fit: {
              left: function (t, e) {
                var n,
                  i = e.within,
                  r = i.isWindow ? i.scrollLeft : i.offset.left,
                  o = i.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  s = r - a,
                  l = a + e.collisionWidth - o - r;
                e.collisionWidth > o
                  ? 0 < s && l <= 0
                    ? ((n = t.left + s + e.collisionWidth - o - r),
                      (t.left += s - n))
                    : (t.left =
                        0 < l && s <= 0
                          ? r
                          : l < s
                          ? r + o - e.collisionWidth
                          : r)
                  : 0 < s
                  ? (t.left += s)
                  : 0 < l
                  ? (t.left -= l)
                  : (t.left = S(t.left - a, t.left));
              },
              top: function (t, e) {
                var n,
                  i = e.within,
                  r = i.isWindow ? i.scrollTop : i.offset.top,
                  o = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  s = r - a,
                  l = a + e.collisionHeight - o - r;
                e.collisionHeight > o
                  ? 0 < s && l <= 0
                    ? ((n = t.top + s + e.collisionHeight - o - r),
                      (t.top += s - n))
                    : (t.top =
                        0 < l && s <= 0
                          ? r
                          : l < s
                          ? r + o - e.collisionHeight
                          : r)
                  : 0 < s
                  ? (t.top += s)
                  : 0 < l
                  ? (t.top -= l)
                  : (t.top = S(t.top - a, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var n,
                  i,
                  r = e.within,
                  o = r.offset.left + r.scrollLeft,
                  a = r.width,
                  s = r.isWindow ? r.scrollLeft : r.offset.left,
                  l = t.left - e.collisionPosition.marginLeft,
                  u = l - s,
                  c = l + e.collisionWidth - a - s,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                      ? e.elemWidth
                      : 0,
                  f =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  h = -2 * e.offset[0];
                u < 0
                  ? ((n = t.left + d + f + h + e.collisionWidth - a - o) < 0 ||
                      n < T(u)) &&
                    (t.left += d + f + h)
                  : 0 < c &&
                    (0 <
                      (i =
                        t.left -
                        e.collisionPosition.marginLeft +
                        d +
                        f +
                        h -
                        s) ||
                      T(i) < c) &&
                    (t.left += d + f + h);
              },
              top: function (t, e) {
                var n,
                  i,
                  r = e.within,
                  o = r.offset.top + r.scrollTop,
                  a = r.height,
                  s = r.isWindow ? r.scrollTop : r.offset.top,
                  l = t.top - e.collisionPosition.marginTop,
                  u = l - s,
                  c = l + e.collisionHeight - a - s,
                  d =
                    "top" === e.my[1]
                      ? -e.elemHeight
                      : "bottom" === e.my[1]
                      ? e.elemHeight
                      : 0,
                  f =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  h = -2 * e.offset[1];
                u < 0
                  ? ((i = t.top + d + f + h + e.collisionHeight - a - o) < 0 ||
                      i < T(u)) &&
                    (t.top += d + f + h)
                  : 0 < c &&
                    (0 <
                      (n =
                        t.top -
                        e.collisionPosition.marginTop +
                        d +
                        f +
                        h -
                        s) ||
                      T(n) < c) &&
                    (t.top += d + f + h);
              },
            },
            flipfit: {
              left: function () {
                D.ui.position.flip.left.apply(this, arguments),
                  D.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                D.ui.position.flip.top.apply(this, arguments),
                  D.ui.position.fit.top.apply(this, arguments);
              },
            },
          });
      })(),
      D.ui.position
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], t)
      : t(jQuery);
  })(function (t) {
    return (t.ui.safeActiveElement = function (t) {
      var e;
      try {
        e = t.activeElement;
      } catch (n) {
        e = t.body;
      }
      return e || (e = t.body), e.nodeName || (e = t.body), e;
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], t)
      : t(jQuery);
  })(function (t) {
    return t.fn.extend({
      uniqueId:
        ((e = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
        });
      },
    });
    var e;
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery", "./version"], t)
      : t(jQuery);
  })(function (c) {
    var o,
      n = 0,
      s = Array.prototype.slice;
    return (
      (c.cleanData =
        ((o = c.cleanData),
        function (t) {
          var e, n, i;
          for (i = 0; null != (n = t[i]); i++)
            try {
              (e = c._data(n, "events")) &&
                e.remove &&
                c(n).triggerHandler("remove");
            } catch (r) {}
          o(t);
        })),
      (c.widget = function (t, n, e) {
        var i,
          r,
          o,
          a = {},
          s = t.split(".")[0],
          l = s + "-" + (t = t.split(".")[1]);
        return (
          e || ((e = n), (n = c.Widget)),
          c.isArray(e) && (e = c.extend.apply(null, [{}].concat(e))),
          (c.expr[":"][l.toLowerCase()] = function (t) {
            return !!c.data(t, l);
          }),
          (c[s] = c[s] || {}),
          (i = c[s][t]),
          (r = c[s][t] =
            function (t, e) {
              if (!this._createWidget) return new r(t, e);
              arguments.length && this._createWidget(t, e);
            }),
          c.extend(r, i, {
            version: e.version,
            _proto: c.extend({}, e),
            _childConstructors: [],
          }),
          ((o = new n()).options = c.widget.extend({}, o.options)),
          c.each(e, function (e, o) {
            c.isFunction(o)
              ? (a[e] = (function () {
                  function i() {
                    return n.prototype[e].apply(this, arguments);
                  }
                  function r(t) {
                    return n.prototype[e].apply(this, t);
                  }
                  return function () {
                    var t,
                      e = this._super,
                      n = this._superApply;
                    return (
                      (this._super = i),
                      (this._superApply = r),
                      (t = o.apply(this, arguments)),
                      (this._super = e),
                      (this._superApply = n),
                      t
                    );
                  };
                })())
              : (a[e] = o);
          }),
          (r.prototype = c.widget.extend(
            o,
            { widgetEventPrefix: (i && o.widgetEventPrefix) || t },
            a,
            { constructor: r, namespace: s, widgetName: t, widgetFullName: l }
          )),
          i
            ? (c.each(i._childConstructors, function (t, e) {
                var n = e.prototype;
                c.widget(n.namespace + "." + n.widgetName, r, e._proto);
              }),
              delete i._childConstructors)
            : n._childConstructors.push(r),
          c.widget.bridge(t, r),
          r
        );
      }),
      (c.widget.extend = function (t) {
        for (
          var e, n, i = s.call(arguments, 1), r = 0, o = i.length;
          r < o;
          r++
        )
          for (e in i[r])
            (n = i[r][e]),
              i[r].hasOwnProperty(e) &&
                n !== undefined &&
                (c.isPlainObject(n)
                  ? (t[e] = c.isPlainObject(t[e])
                      ? c.widget.extend({}, t[e], n)
                      : c.widget.extend({}, n))
                  : (t[e] = n));
        return t;
      }),
      (c.widget.bridge = function (o, e) {
        var a = e.prototype.widgetFullName || o;
        c.fn[o] = function (n) {
          var t = "string" == typeof n,
            i = s.call(arguments, 1),
            r = this;
          return (
            t
              ? this.length || "instance" !== n
                ? this.each(function () {
                    var t,
                      e = c.data(this, a);
                    return "instance" === n
                      ? ((r = e), !1)
                      : e
                      ? c.isFunction(e[n]) && "_" !== n.charAt(0)
                        ? (t = e[n].apply(e, i)) !== e && t !== undefined
                          ? ((r = t && t.jquery ? r.pushStack(t.get()) : t), !1)
                          : void 0
                        : c.error(
                            "no such method '" +
                              n +
                              "' for " +
                              o +
                              " widget instance"
                          )
                      : c.error(
                          "cannot call methods on " +
                            o +
                            " prior to initialization; attempted to call method '" +
                            n +
                            "'"
                        );
                  })
                : (r = undefined)
              : (i.length && (n = c.widget.extend.apply(null, [n].concat(i))),
                this.each(function () {
                  var t = c.data(this, a);
                  t
                    ? (t.option(n || {}), t._init && t._init())
                    : c.data(this, a, new e(n, this));
                })),
            r
          );
        };
      }),
      (c.Widget = function () {}),
      (c.Widget._childConstructors = []),
      (c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (t, e) {
          (e = c(e || this.defaultElement || this)[0]),
            (this.element = c(e)),
            (this.uuid = n++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = c()),
            (this.hoverable = c()),
            (this.focusable = c()),
            (this.classesElementLookup = {}),
            e !== this &&
              (c.data(e, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === e && this.destroy();
                },
              }),
              (this.document = c(e.style ? e.ownerDocument : e.document || e)),
              (this.window = c(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = c.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              t
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function () {
          var n = this;
          this._destroy(),
            c.each(this.classesElementLookup, function (t, e) {
              n._removeClass(e, t);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: c.noop,
        widget: function () {
          return this.element;
        },
        option: function (t, e) {
          var n,
            i,
            r,
            o = t;
          if (0 === arguments.length) return c.widget.extend({}, this.options);
          if ("string" == typeof t)
            if (((o = {}), (t = (n = t.split(".")).shift()), n.length)) {
              for (
                i = o[t] = c.widget.extend({}, this.options[t]), r = 0;
                r < n.length - 1;
                r++
              )
                (i[n[r]] = i[n[r]] || {}), (i = i[n[r]]);
              if (((t = n.pop()), 1 === arguments.length))
                return i[t] === undefined ? null : i[t];
              i[t] = e;
            } else {
              if (1 === arguments.length)
                return this.options[t] === undefined ? null : this.options[t];
              o[t] = e;
            }
          return this._setOptions(o), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            "classes" === t && this._setOptionClasses(e),
            (this.options[t] = e),
            "disabled" === t && this._setOptionDisabled(e),
            this
          );
        },
        _setOptionClasses: function (t) {
          var e, n, i;
          for (e in t)
            (i = this.classesElementLookup[e]),
              t[e] !== this.options.classes[e] &&
                i &&
                i.length &&
                ((n = c(i.get())),
                this._removeClass(i, e),
                n.addClass(
                  this._classes({ element: n, keys: e, classes: t, add: !0 })
                ));
        },
        _setOptionDisabled: function (t) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!t
          ),
            t &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (r) {
          function t(t, e) {
            var n, i;
            for (i = 0; i < t.length; i++)
              (n = a.classesElementLookup[t[i]] || c()),
                (n = r.add
                  ? c(c.unique(n.get().concat(r.element.get())))
                  : c(n.not(r.element).get())),
                (a.classesElementLookup[t[i]] = n),
                o.push(t[i]),
                e && r.classes[t[i]] && o.push(r.classes[t[i]]);
          }
          var o = [],
            a = this;
          return (
            (r = c.extend(
              { element: this.element, classes: this.options.classes || {} },
              r
            )),
            this._on(r.element, { remove: "_untrackClassesElement" }),
            r.keys && t(r.keys.match(/\S+/g) || [], !0),
            r.extra && t(r.extra.match(/\S+/g) || []),
            o.join(" ")
          );
        },
        _untrackClassesElement: function (n) {
          var i = this;
          c.each(i.classesElementLookup, function (t, e) {
            -1 !== c.inArray(n.target, e) &&
              (i.classesElementLookup[t] = c(e.not(n.target).get()));
          });
        },
        _removeClass: function (t, e, n) {
          return this._toggleClass(t, e, n, !1);
        },
        _addClass: function (t, e, n) {
          return this._toggleClass(t, e, n, !0);
        },
        _toggleClass: function (t, e, n, i) {
          i = "boolean" == typeof i ? i : n;
          var r = "string" == typeof t || null === t,
            o = {
              extra: r ? e : n,
              keys: r ? t : e,
              element: r ? this.element : t,
              add: i,
            };
          return o.element.toggleClass(this._classes(o), i), this;
        },
        _on: function (a, s, t) {
          var l,
            u = this;
          "boolean" != typeof a && ((t = s), (s = a), (a = !1)),
            t
              ? ((s = l = c(s)), (this.bindings = this.bindings.add(s)))
              : ((t = s), (s = this.element), (l = this.widget())),
            c.each(t, function (t, e) {
              function n() {
                if (
                  a ||
                  (!0 !== u.options.disabled &&
                    !c(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof e ? u[e] : e).apply(u, arguments);
              }
              "string" != typeof e &&
                (n.guid = e.guid = e.guid || n.guid || c.guid++);
              var i = t.match(/^([\w:-]*)\s*(.*)$/),
                r = i[1] + u.eventNamespace,
                o = i[2];
              o ? l.on(r, o, n) : s.on(r, n);
            });
        },
        _off: function (t, e) {
          (e =
            (e || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            t.off(e).off(e),
            (this.bindings = c(this.bindings.not(t).get())),
            (this.focusable = c(this.focusable.not(t).get())),
            (this.hoverable = c(this.hoverable.not(t).get()));
        },
        _delay: function (t, e) {
          function n() {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }
          var i = this;
          return setTimeout(n, e || 0);
        },
        _hoverable: function (t) {
          (this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                this._addClass(c(t.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (t) {
                this._removeClass(c(t.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (t) {
          (this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                this._addClass(c(t.currentTarget), null, "ui-state-focus");
              },
              focusout: function (t) {
                this._removeClass(c(t.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (t, e, n) {
          var i,
            r,
            o = this.options[t];
          if (
            ((n = n || {}),
            ((e = c.Event(e)).type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (e.target = this.element[0]),
            (r = e.originalEvent))
          )
            for (i in r) i in e || (e[i] = r[i]);
          return (
            this.element.trigger(e, n),
            !(
              (c.isFunction(o) &&
                !1 === o.apply(this.element[0], [e].concat(n))) ||
              e.isDefaultPrevented()
            )
          );
        },
      }),
      c.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
        c.Widget.prototype["_" + o] = function (e, t, n) {
          var i;
          "string" == typeof t && (t = { effect: t });
          var r = t
            ? !0 === t || "number" == typeof t
              ? a
              : t.effect || a
            : o;
          "number" == typeof (t = t || {}) && (t = { duration: t }),
            (i = !c.isEmptyObject(t)),
            (t.complete = n),
            t.delay && e.delay(t.delay),
            i && c.effects && c.effects.effect[r]
              ? e[o](t)
              : r !== o && e[r]
              ? e[r](t.duration, t.easing, n)
              : e.queue(function (t) {
                  c(this)[o](), n && n.call(e[0]), t();
                });
        };
      }),
      c.widget
    );
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(
          [
            "jquery",
            "../keycode",
            "../position",
            "../safe-active-element",
            "../unique-id",
            "../version",
            "../widget",
          ],
          t
        )
      : t(jQuery);
  })(function (s) {
    return s.widget("ui.menu", {
      version: "1.12.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-caret-1-e" },
        items: "> *",
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .attr({ role: this.options.role, tabIndex: 0 }),
          this._addClass("ui-menu", "ui-widget ui-widget-content"),
          this._on({
            "mousedown .ui-menu-item": function (t) {
              t.preventDefault();
            },
            "click .ui-menu-item": function (t) {
              var e = s(t.target),
                n = s(s.ui.safeActiveElement(this.document[0]));
              !this.mouseHandled &&
                e.not(".ui-state-disabled").length &&
                (this.select(t),
                t.isPropagationStopped() || (this.mouseHandled = !0),
                e.has(".ui-menu").length
                  ? this.expand(t)
                  : !this.element.is(":focus") &&
                    n.closest(".ui-menu").length &&
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (t) {
              if (!this.previousFilter) {
                var e = s(t.target).closest(".ui-menu-item"),
                  n = s(t.currentTarget);
                e[0] === n[0] &&
                  (this._removeClass(
                    n.siblings().children(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.focus(t, n));
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var n =
                this.active || this.element.find(this.options.items).eq(0);
              e || this.focus(t, n);
            },
            blur: function (t) {
              this._delay(function () {
                !s.contains(
                  this.element[0],
                  s.ui.safeActiveElement(this.document[0])
                ) && this.collapseAll(t);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              this._closeOnDocumentClick(t) && this.collapseAll(t),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        var t = this.element
          .find(".ui-menu-item")
          .removeAttr("role aria-disabled")
          .children(".ui-menu-item-wrapper")
          .removeUniqueId()
          .removeAttr("tabIndex role aria-haspopup");
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeAttr(
            "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
          )
          .removeUniqueId()
          .show(),
          t.children().each(function () {
            var t = s(this);
            t.data("ui-menu-submenu-caret") && t.remove();
          });
      },
      _keydown: function (t) {
        var e,
          n,
          i,
          r,
          o = !0;
        switch (t.keyCode) {
          case s.ui.keyCode.PAGE_UP:
            this.previousPage(t);
            break;
          case s.ui.keyCode.PAGE_DOWN:
            this.nextPage(t);
            break;
          case s.ui.keyCode.HOME:
            this._move("first", "first", t);
            break;
          case s.ui.keyCode.END:
            this._move("last", "last", t);
            break;
          case s.ui.keyCode.UP:
            this.previous(t);
            break;
          case s.ui.keyCode.DOWN:
            this.next(t);
            break;
          case s.ui.keyCode.LEFT:
            this.collapse(t);
            break;
          case s.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(t);
            break;
          case s.ui.keyCode.ENTER:
          case s.ui.keyCode.SPACE:
            this._activate(t);
            break;
          case s.ui.keyCode.ESCAPE:
            this.collapse(t);
            break;
          default:
            (o = !1),
              (n = this.previousFilter || ""),
              (r = !1),
              (i =
                96 <= t.keyCode && t.keyCode <= 105
                  ? (t.keyCode - 96).toString()
                  : String.fromCharCode(t.keyCode)),
              clearTimeout(this.filterTimer),
              i === n ? (r = !0) : (i = n + i),
              (e = this._filterMenuItems(i)),
              (e =
                r && -1 !== e.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : e).length ||
                ((i = String.fromCharCode(t.keyCode)),
                (e = this._filterMenuItems(i))),
              e.length
                ? (this.focus(t, e),
                  (this.previousFilter = i),
                  (this.filterTimer = this._delay(function () {
                    delete this.previousFilter;
                  }, 1e3)))
                : delete this.previousFilter;
        }
        o && t.preventDefault();
      },
      _activate: function (t) {
        this.active &&
          !this.active.is(".ui-state-disabled") &&
          (this.active.children("[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var t,
          e,
          n,
          i,
          r = this,
          o = this.options.icons.submenu,
          a = this.element.find(this.options.menus);
        this._toggleClass(
          "ui-menu-icons",
          null,
          !!this.element.find(".ui-icon").length
        ),
          (e = a
            .filter(":not(.ui-menu)")
            .hide()
            .attr({
              role: this.options.role,
              "aria-hidden": "true",
              "aria-expanded": "false",
            })
            .each(function () {
              var t = s(this),
                e = t.prev(),
                n = s("<span>").data("ui-menu-submenu-caret", !0);
              r._addClass(n, "ui-menu-icon", "ui-icon " + o),
                e.attr("aria-haspopup", "true").prepend(n),
                t.attr("aria-labelledby", e.attr("id"));
            })),
          this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
          (t = a.add(this.element).find(this.options.items))
            .not(".ui-menu-item")
            .each(function () {
              var t = s(this);
              r._isDivider(t) &&
                r._addClass(t, "ui-menu-divider", "ui-widget-content");
            }),
          (i = (n = t.not(".ui-menu-item, .ui-menu-divider"))
            .children()
            .not(".ui-menu")
            .uniqueId()
            .attr({ tabIndex: -1, role: this._itemRole() })),
          this._addClass(n, "ui-menu-item")._addClass(
            i,
            "ui-menu-item-wrapper"
          ),
          t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !s.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        if ("icons" === t) {
          var n = this.element.find(".ui-menu-icon");
          this._removeClass(n, null, this.options.icons.submenu)._addClass(
            n,
            null,
            e.submenu
          );
        }
        this._super(t, e);
      },
      _setOptionDisabled: function (t) {
        this._super(t),
          this.element.attr("aria-disabled", String(t)),
          this._toggleClass(null, "ui-state-disabled", !!t);
      },
      focus: function (t, e) {
        var n, i, r;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (i = this.active.children(".ui-menu-item-wrapper")),
          this._addClass(i, null, "ui-state-active"),
          this.options.role &&
            this.element.attr("aria-activedescendant", i.attr("id")),
          (r = this.active
            .parent()
            .closest(".ui-menu-item")
            .children(".ui-menu-item-wrapper")),
          this._addClass(r, null, "ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (n = e.children(".ui-menu")).length &&
            t &&
            /^mouse/.test(t.type) &&
            this._startOpening(n),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (t) {
        var e, n, i, r, o, a;
        this._hasScroll() &&
          ((e = parseFloat(s.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (n = parseFloat(s.css(this.activeMenu[0], "paddingTop")) || 0),
          (i = t.offset().top - this.activeMenu.offset().top - e - n),
          (r = this.activeMenu.scrollTop()),
          (o = this.activeMenu.height()),
          (a = t.outerHeight()),
          i < 0
            ? this.activeMenu.scrollTop(r + i)
            : o < i + a && this.activeMenu.scrollTop(r + i - o + a));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this._removeClass(
              this.active.children(".ui-menu-item-wrapper"),
              null,
              "ui-state-active"
            ),
            this._trigger("blur", t, { item: this.active }),
            (this.active = null));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (t) {
        var e = s.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(t.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          t
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(e);
      },
      collapseAll: function (e, n) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var t = n
              ? this.element
              : s(e && e.target).closest(this.element.find(".ui-menu"));
            t.length || (t = this.element),
              this._close(t),
              this.blur(e),
              this._removeClass(
                t.find(".ui-state-active"),
                null,
                "ui-state-active"
              ),
              (this.activeMenu = t);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false");
      },
      _closeOnDocumentClick: function (t) {
        return !s(t.target).closest(".ui-menu").length;
      },
      _isDivider: function (t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text());
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active.children(".ui-menu ").find(this.options.items).first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (t, e, n) {
        var i;
        this.active &&
          (i =
            "first" === t || "last" === t
              ? this.active["first" === t ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[t + "All"](".ui-menu-item").eq(0)),
          (i && i.length && this.active) ||
            (i = this.activeMenu.find(this.options.items)[e]()),
          this.focus(n, i);
      },
      nextPage: function (t) {
        var e, n, i;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((n = this.active.offset().top),
                (i = this.element.height()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (e = s(this)).offset().top - n - i < 0;
                }),
                this.focus(t, e))
              : this.focus(
                  t,
                  this.activeMenu
                    .find(this.options.items)
                    [this.active ? "last" : "first"]()
                ))
          : this.next(t);
      },
      previousPage: function (t) {
        var e, n, i;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((n = this.active.offset().top),
                (i = this.element.height()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return 0 < (e = s(this)).offset().top - n + i;
                }),
                this.focus(t, e))
              : this.focus(t, this.activeMenu.find(this.options.items).first()))
          : this.next(t);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (t) {
        this.active = this.active || s(t.target).closest(".ui-menu-item");
        var e = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(t, !0),
          this._trigger("select", t, e);
      },
      _filterMenuItems: function (t) {
        var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          n = new RegExp("^" + e, "i");
        return this.activeMenu
          .find(this.options.items)
          .filter(".ui-menu-item")
          .filter(function () {
            return n.test(
              s.trim(s(this).children(".ui-menu-item-wrapper").text())
            );
          });
      },
    });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(
          [
            "jquery",
            "./menu",
            "../keycode",
            "../position",
            "../safe-active-element",
            "../version",
            "../widget",
          ],
          t
        )
      : t(jQuery);
  })(function (a) {
    return (
      a.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var n,
            i,
            r,
            t = this.element[0].nodeName.toLowerCase(),
            e = "textarea" === t,
            o = "input" === t;
          (this.isMultiLine =
            e || (!o && this._isContentEditable(this.element))),
            (this.valueMethod = this.element[e || o ? "val" : "text"]),
            (this.isNewMenu = !0),
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (t) {
                if (this.element.prop("readOnly")) i = r = n = !0;
                else {
                  i = r = n = !1;
                  var e = a.ui.keyCode;
                  switch (t.keyCode) {
                    case e.PAGE_UP:
                      (n = !0), this._move("previousPage", t);
                      break;
                    case e.PAGE_DOWN:
                      (n = !0), this._move("nextPage", t);
                      break;
                    case e.UP:
                      (n = !0), this._keyEvent("previous", t);
                      break;
                    case e.DOWN:
                      (n = !0), this._keyEvent("next", t);
                      break;
                    case e.ENTER:
                      this.menu.active &&
                        ((n = !0), t.preventDefault(), this.menu.select(t));
                      break;
                    case e.TAB:
                      this.menu.active && this.menu.select(t);
                      break;
                    case e.ESCAPE:
                      this.menu.element.is(":visible") &&
                        (this.isMultiLine || this._value(this.term),
                        this.close(t),
                        t.preventDefault());
                      break;
                    default:
                      (i = !0), this._searchTimeout(t);
                  }
                }
              },
              keypress: function (t) {
                if (n)
                  return (
                    (n = !1),
                    void (
                      (this.isMultiLine && !this.menu.element.is(":visible")) ||
                      t.preventDefault()
                    )
                  );
                if (!i) {
                  var e = a.ui.keyCode;
                  switch (t.keyCode) {
                    case e.PAGE_UP:
                      this._move("previousPage", t);
                      break;
                    case e.PAGE_DOWN:
                      this._move("nextPage", t);
                      break;
                    case e.UP:
                      this._keyEvent("previous", t);
                      break;
                    case e.DOWN:
                      this._keyEvent("next", t);
                  }
                }
              },
              input: function (t) {
                if (r) return (r = !1), void t.preventDefault();
                this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                this.cancelBlur
                  ? delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = a("<ul>")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
              mousedown: function (t) {
                t.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur,
                      this.element[0] !==
                        a.ui.safeActiveElement(this.document[0]) &&
                        this.element.trigger("focus");
                  });
              },
              menufocus: function (t, e) {
                var n, i;
                if (
                  this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  t.originalEvent && /^mouse/.test(t.originalEvent.type))
                )
                  return (
                    this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      a(t.target).trigger(t.originalEvent);
                    })
                  );
                (i = e.item.data("ui-autocomplete-item")),
                  !1 !== this._trigger("focus", t, { item: i }) &&
                    t.originalEvent &&
                    /^key/.test(t.originalEvent.type) &&
                    this._value(i.value),
                  (n = e.item.attr("aria-label") || i.value) &&
                    a.trim(n).length &&
                    (this.liveRegion.children().hide(),
                    a("<div>").text(n).appendTo(this.liveRegion));
              },
              menuselect: function (t, e) {
                var n = e.item.data("ui-autocomplete-item"),
                  i = this.previous;
                this.element[0] !== a.ui.safeActiveElement(this.document[0]) &&
                  (this.element.trigger("focus"),
                  (this.previous = i),
                  this._delay(function () {
                    (this.previous = i), (this.selectedItem = n);
                  })),
                  !1 !== this._trigger("select", t, { item: n }) &&
                    this._value(n.value),
                  (this.term = this._value()),
                  this.close(t),
                  (this.selectedItem = n);
              },
            }),
            (this.liveRegion = a("<div>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            }).appendTo(this.document[0].body)),
            this._addClass(
              this.liveRegion,
              null,
              "ui-helper-hidden-accessible"
            ),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function (t) {
          var e = this.menu.element[0];
          return (
            t.target === this.element[0] ||
            t.target === e ||
            a.contains(e, t.target)
          );
        },
        _closeOnClickOutside: function (t) {
          this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function () {
          var t = this.options.appendTo;
          return (
            t &&
              (t = t.jquery || t.nodeType ? a(t) : this.document.find(t).eq(0)),
            (t && t[0]) || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
          );
        },
        _initSource: function () {
          var n,
            i,
            r = this;
          a.isArray(this.options.source)
            ? ((n = this.options.source),
              (this.source = function (t, e) {
                e(a.ui.autocomplete.filter(n, t.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (t, e) {
                r.xhr && r.xhr.abort(),
                  (r.xhr = a.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function (t) {
                      e(t);
                    },
                    error: function () {
                      e([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (i) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var t = this.term === this._value(),
                e = this.menu.element.is(":visible"),
                n = i.altKey || i.ctrlKey || i.metaKey || i.shiftKey;
              (t && (!t || e || n)) ||
                ((this.selectedItem = null), this.search(null, i));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : !1 !== this._trigger("search", e)
              ? this._search(t)
              : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this._addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return a.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending || this._removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") &&
              (this.menu.element.hide(),
              this.menu.blur(),
              (this.isNewMenu = !0),
              this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (t) {
          return t.length && t[0].label && t[0].value
            ? t
            : a.map(t, function (t) {
                return "string" == typeof t
                  ? { label: t, value: t }
                  : a.extend({}, t, {
                      label: t.label || t.value,
                      value: t.value || t.label,
                    });
              });
        },
        _suggest: function (t) {
          var e = this.menu.element.empty();
          this._renderMenu(e, t),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            e.show(),
            this._resizeMenu(),
            e.position(a.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, { mousedown: "_closeOnClickOutside" });
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (n, t) {
          var i = this;
          a.each(t, function (t, e) {
            i._renderItemData(n, e);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (t, e) {
          return a("<li>").append(a("<div>").text(e.label)).appendTo(t);
        },
        _move: function (t, e) {
          if (this.menu.element.is(":visible"))
            return (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e);
          this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (this.isMultiLine && !this.menu.element.is(":visible")) ||
            (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function (t) {
          if (!t.length) return !1;
          var e = t.prop("contentEditable");
          return "inherit" === e
            ? this._isContentEditable(t.parent())
            : "true" === e;
        },
      }),
      a.extend(a.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (t, e) {
          var n = new RegExp(a.ui.autocomplete.escapeRegex(e), "i");
          return a.grep(t, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (1 < t ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (t) {
          var e;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((e =
                t && t.length
                  ? this.options.messages.results(t.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              a("<div>").text(e).appendTo(this.liveRegion));
        },
      }),
      a.ui.autocomplete
    );
  }),
  (function (i) {
    "use strict";
    function t() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in e) if (t.style[n] !== undefined) return { end: e[n] };
      return !1;
    }
    (i.fn.emulateTransitionEnd = function (t) {
      var e = !1,
        n = this;
      return (
        i(this).one("bsTransitionEnd", function () {
          e = !0;
        }),
        setTimeout(function () {
          e || i(n).trigger(i.support.transition.end);
        }, t),
        this
      );
    }),
      i(function () {
        (i.support.transition = t()),
          i.support.transition &&
            (i.event.special.bsTransitionEnd = {
              bindType: i.support.transition.end,
              delegateType: i.support.transition.end,
              handle: function (t) {
                if (i(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    function t(n) {
      return this.each(function () {
        var t = o(this),
          e = t.data("bs.alert");
        e || t.data("bs.alert", (e = new a(this))),
          "string" == typeof n && e[n].call(t);
      });
    }
    var e = '[data-dismiss="alert"]',
      a = function (t) {
        o(t).on("click", e, this.close);
      };
    (a.VERSION = "3.3.7"),
      (a.TRANSITION_DURATION = 150),
      (a.prototype.close = function (t) {
        function e() {
          r.detach().trigger("closed.bs.alert").remove();
        }
        var n = o(this),
          i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = o("#" === i ? [] : i);
        t && t.preventDefault(),
          r.length || (r = n.closest(".alert")),
          r.trigger((t = o.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (r.removeClass("in"),
            o.support.transition && r.hasClass("fade")
              ? r
                  .one("bsTransitionEnd", e)
                  .emulateTransitionEnd(a.TRANSITION_DURATION)
              : e());
      });
    var n = o.fn.alert;
    (o.fn.alert = t),
      (o.fn.alert.Constructor = a),
      (o.fn.alert.noConflict = function () {
        return (o.fn.alert = n), this;
      }),
      o(document).on("click.bs.alert.data-api", e, a.prototype.close);
  })(jQuery),
  (function (o) {
    "use strict";
    function n(i) {
      return this.each(function () {
        var t = o(this),
          e = t.data("bs.button"),
          n = "object" == typeof i && i;
        e || t.data("bs.button", (e = new r(this, n))),
          "toggle" == i ? e.toggle() : i && e.setState(i);
      });
    }
    var r = function (t, e) {
      (this.$element = o(t)),
        (this.options = o.extend({}, r.DEFAULTS, e)),
        (this.isLoading = !1);
    };
    (r.VERSION = "3.3.7"),
      (r.DEFAULTS = { loadingText: "loading..." }),
      (r.prototype.setState = function (t) {
        var e = "disabled",
          n = this.$element,
          i = n.is("input") ? "val" : "html",
          r = n.data();
        (t += "Text"),
          null == r.resetText && n.data("resetText", n[i]()),
          setTimeout(
            o.proxy(function () {
              n[i](null == r[t] ? this.options[t] : r[t]),
                "loadingText" == t
                  ? ((this.isLoading = !0),
                    n.addClass(e).attr(e, e).prop(e, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    n.removeClass(e).removeAttr(e).prop(e, !1));
            }, this),
            0
          );
      }),
      (r.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var t = o.fn.button;
    (o.fn.button = n),
      (o.fn.button.Constructor = r),
      (o.fn.button.noConflict = function () {
        return (o.fn.button = t), this;
      }),
      o(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            var e = o(t.target).closest(".btn");
            n.call(e, "toggle"),
              o(t.target).is('input[type="radio"], input[type="checkbox"]') ||
                (t.preventDefault(),
                e.is("input,button")
                  ? e.trigger("focus")
                  : e
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            o(t.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(t.type));
          }
        );
  })(jQuery),
  (function (d) {
    "use strict";
    function a(r) {
      return this.each(function () {
        var t = d(this),
          e = t.data("bs.carousel"),
          n = d.extend({}, f.DEFAULTS, t.data(), "object" == typeof r && r),
          i = "string" == typeof r ? r : n.slide;
        e || t.data("bs.carousel", (e = new f(this, n))),
          "number" == typeof r
            ? e.to(r)
            : i
            ? e[i]()
            : n.interval && e.pause().cycle();
      });
    }
    var f = function (t, e) {
      (this.$element = d(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = e),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", d.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", d.proxy(this.cycle, this));
    };
    (f.VERSION = "3.3.7"),
      (f.TRANSITION_DURATION = 600),
      (f.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (f.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (f.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              d.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (f.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (f.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e);
        if (
          (("prev" == t && 0 === n) ||
            ("next" == t && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return e;
        var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
      }),
      (f.prototype.to = function (t) {
        var e = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                e.to(t);
              })
            : n == t
            ? this.pause().cycle()
            : this.slide(n < t ? "next" : "prev", this.$items.eq(t));
      }),
      (f.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            d.support.transition &&
            (this.$element.trigger(d.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (f.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (f.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (f.prototype.slide = function (t, e) {
        var n = this.$element.find(".item.active"),
          i = e || this.getItemForDirection(t, n),
          r = this.interval,
          o = "next" == t ? "left" : "right",
          a = this;
        if (i.hasClass("active")) return (this.sliding = !1);
        var s = i[0],
          l = d.Event("slide.bs.carousel", { relatedTarget: s, direction: o });
        if ((this.$element.trigger(l), !l.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), r && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var u = d(this.$indicators.children()[this.getItemIndex(i)]);
            u && u.addClass("active");
          }
          var c = d.Event("slid.bs.carousel", {
            relatedTarget: s,
            direction: o,
          });
          return (
            d.support.transition && this.$element.hasClass("slide")
              ? (i.addClass(t),
                i[0].offsetWidth,
                n.addClass(o),
                i.addClass(o),
                n
                  .one("bsTransitionEnd", function () {
                    i.removeClass([t, o].join(" ")).addClass("active"),
                      n.removeClass(["active", o].join(" ")),
                      (a.sliding = !1),
                      setTimeout(function () {
                        a.$element.trigger(c);
                      }, 0);
                  })
                  .emulateTransitionEnd(f.TRANSITION_DURATION))
              : (n.removeClass("active"),
                i.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(c)),
            r && this.cycle(),
            this
          );
        }
      });
    var t = d.fn.carousel;
    (d.fn.carousel = a),
      (d.fn.carousel.Constructor = f),
      (d.fn.carousel.noConflict = function () {
        return (d.fn.carousel = t), this;
      });
    var e = function (t) {
      var e,
        n = d(this),
        i = d(
          n.attr("data-target") ||
            ((e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (i.hasClass("carousel")) {
        var r = d.extend({}, i.data(), n.data()),
          o = n.attr("data-slide-to");
        o && (r.interval = !1),
          a.call(i, r),
          o && i.data("bs.carousel").to(o),
          t.preventDefault();
      }
    };
    d(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      d(window).on("load", function () {
        d('[data-ride="carousel"]').each(function () {
          var t = d(this);
          a.call(t, t.data());
        });
      });
  })(jQuery),
  (function (a) {
    "use strict";
    function r(t) {
      var e,
        n =
          t.attr("data-target") ||
          ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
      return a(n);
    }
    function s(i) {
      return this.each(function () {
        var t = a(this),
          e = t.data("bs.collapse"),
          n = a.extend({}, l.DEFAULTS, t.data(), "object" == typeof i && i);
        !e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
          e || t.data("bs.collapse", (e = new l(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    var l = function (t, e) {
      (this.$element = a(t)),
        (this.options = a.extend({}, l.DEFAULTS, e)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (l.VERSION = "3.3.7"),
      (l.TRANSITION_DURATION = 350),
      (l.DEFAULTS = { toggle: !0 }),
      (l.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (l.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)
          ) {
            var n = a.Event("show.bs.collapse");
            if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
              e &&
                e.length &&
                (s.call(e, "hide"), t || e.data("bs.collapse", null));
              var i = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [i](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var r = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [i](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return r.call(this);
              var o = a.camelCase(["scroll", i].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(r, this))
                .emulateTransitionEnd(l.TRANSITION_DURATION)
                [i](this.$element[0][o]);
            }
          }
        }
      }),
      (l.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var e = this.dimension();
            this.$element[e](this.$element[e]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            if (!a.support.transition) return n.call(this);
            this.$element[e](0)
              .one("bsTransitionEnd", a.proxy(n, this))
              .emulateTransitionEnd(l.TRANSITION_DURATION);
          }
        }
      }),
      (l.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (l.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (t, e) {
              var n = a(e);
              this.addAriaAndCollapsedClass(r(n), n);
            }, this)
          )
          .end();
      }),
      (l.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
          e.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var t = a.fn.collapse;
    (a.fn.collapse = s),
      (a.fn.collapse.Constructor = l),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = t), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (t) {
          var e = a(this);
          e.attr("data-target") || t.preventDefault();
          var n = r(e),
            i = n.data("bs.collapse") ? "toggle" : e.data();
          s.call(n, i);
        }
      );
  })(jQuery),
  (function (s) {
    "use strict";
    function l(t) {
      var e = t.attr("data-target");
      e ||
        (e =
          (e = t.attr("href")) &&
          /#[A-Za-z]/.test(e) &&
          e.replace(/.*(?=#[^\s]*$)/, ""));
      var n = e && s(e);
      return n && n.length ? n : t.parent();
    }
    function o(i) {
      (i && 3 === i.which) ||
        (s(e).remove(),
        s(u).each(function () {
          var t = s(this),
            e = l(t),
            n = { relatedTarget: this };
          e.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              s.contains(e[0], i.target)) ||
              (e.trigger((i = s.Event("hide.bs.dropdown", n))),
              i.isDefaultPrevented() ||
                (t.attr("aria-expanded", "false"),
                e
                  .removeClass("open")
                  .trigger(s.Event("hidden.bs.dropdown", n)))));
        }));
    }
    function t(n) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.dropdown");
        e || t.data("bs.dropdown", (e = new i(this))),
          "string" == typeof n && e[n].call(t);
      });
    }
    var e = ".dropdown-backdrop",
      u = '[data-toggle="dropdown"]',
      i = function (t) {
        s(t).on("click.bs.dropdown", this.toggle);
      };
    (i.VERSION = "3.3.7"),
      (i.prototype.toggle = function (t) {
        var e = s(this);
        if (!e.is(".disabled, :disabled")) {
          var n = l(e),
            i = n.hasClass("open");
          if ((o(), !i)) {
            "ontouchstart" in document.documentElement &&
              !n.closest(".navbar-nav").length &&
              s(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(s(this))
                .on("click", o);
            var r = { relatedTarget: this };
            if (
              (n.trigger((t = s.Event("show.bs.dropdown", r))),
              t.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              n.toggleClass("open").trigger(s.Event("shown.bs.dropdown", r));
          }
          return !1;
        }
      }),
      (i.prototype.keydown = function (t) {
        if (
          /(38|40|27|32)/.test(t.which) &&
          !/input|textarea/i.test(t.target.tagName)
        ) {
          var e = s(this);
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            !e.is(".disabled, :disabled"))
          ) {
            var n = l(e),
              i = n.hasClass("open");
            if ((!i && 27 != t.which) || (i && 27 == t.which))
              return (
                27 == t.which && n.find(u).trigger("focus"), e.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              o = n.find(".dropdown-menu" + r);
            if (o.length) {
              var a = o.index(t.target);
              38 == t.which && 0 < a && a--,
                40 == t.which && a < o.length - 1 && a++,
                ~a || (a = 0),
                o.eq(a).trigger("focus");
            }
          }
        }
      });
    var n = s.fn.dropdown;
    (s.fn.dropdown = t),
      (s.fn.dropdown.Constructor = i),
      (s.fn.dropdown.noConflict = function () {
        return (s.fn.dropdown = n), this;
      }),
      s(document)
        .on("click.bs.dropdown.data-api", o)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", u, i.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", u, i.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          i.prototype.keydown
        );
  })(jQuery),
  (function (o) {
    "use strict";
    function a(i, r) {
      return this.each(function () {
        var t = o(this),
          e = t.data("bs.modal"),
          n = o.extend({}, s.DEFAULTS, t.data(), "object" == typeof i && i);
        e || t.data("bs.modal", (e = new s(this, n))),
          "string" == typeof i ? e[i](r) : n.show && e.show(r);
      });
    }
    var s = function (t, e) {
      (this.options = e),
        (this.$body = o(document.body)),
        (this.$element = o(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            o.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (s.VERSION = "3.3.7"),
      (s.TRANSITION_DURATION = 300),
      (s.BACKDROP_TRANSITION_DURATION = 150),
      (s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (s.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (s.prototype.show = function (n) {
        var i = this,
          t = o.Event("show.bs.modal", { relatedTarget: n });
        this.$element.trigger(t),
          this.isShown ||
            t.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              o.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                o(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var t = o.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                t && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var e = o.Event("shown.bs.modal", { relatedTarget: n });
              t
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(e);
                    })
                    .emulateTransitionEnd(s.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(e);
            }));
      }),
      (s.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = o.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            o(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            o.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", o.proxy(this.hideModal, this))
                  .emulateTransitionEnd(s.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (s.prototype.enforceFocus = function () {
        o(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            o.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (s.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              o.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (s.prototype.resize = function () {
        this.isShown
          ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this))
          : o(window).off("resize.bs.modal");
      }),
      (s.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (s.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (s.prototype.backdrop = function (t) {
        var e = this,
          n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var i = o.support.transition && n;
          if (
            ((this.$backdrop = o(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              o.proxy(function (t) {
                this.ignoreBackdropClick
                  ? (this.ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide());
              }, this)
            ),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          i
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var r = function () {
            e.removeBackdrop(), t && t();
          };
          o.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION)
            : r();
        } else t && t();
      }),
      (s.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (s.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (s.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (s.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (s.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (s.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (s.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var t = o.fn.modal;
    (o.fn.modal = a),
      (o.fn.modal.Constructor = s),
      (o.fn.modal.noConflict = function () {
        return (o.fn.modal = t), this;
      }),
      o(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
          var e = o(this),
            n = e.attr("href"),
            i = o(
              e.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            r = i.data("bs.modal")
              ? "toggle"
              : o.extend({ remote: !/#/.test(n) && n }, i.data(), e.data());
          e.is("a") && t.preventDefault(),
            i.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                i.one("hidden.bs.modal", function () {
                  e.is(":visible") && e.trigger("focus");
                });
            }),
            a.call(i, r, this);
        }
      );
  })(jQuery),
  (function (s) {
    "use strict";
    function e(n) {
      return this.each(function () {
        var t = s(this),
          e = t.data("bs.tab");
        e || t.data("bs.tab", (e = new a(this))),
          "string" == typeof n && e[n]();
      });
    }
    var a = function (t) {
      this.element = s(t);
    };
    (a.VERSION = "3.3.7"),
      (a.TRANSITION_DURATION = 150),
      (a.prototype.show = function () {
        var t = this.element,
          e = t.closest("ul:not(.dropdown-menu)"),
          n = t.data("target");
        if (
          (n || (n = (n = t.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active"))
        ) {
          var i = e.find(".active:last a"),
            r = s.Event("hide.bs.tab", { relatedTarget: t[0] }),
            o = s.Event("show.bs.tab", { relatedTarget: i[0] });
          if (
            (i.trigger(r),
            t.trigger(o),
            !o.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var a = s(n);
            this.activate(t.closest("li"), e),
              this.activate(a, a.parent(), function () {
                i.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: i[0] });
              });
          }
        }
      }),
      (a.prototype.activate = function (t, e, n) {
        function i() {
          r
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n();
        }
        var r = e.find("> .active"),
          o =
            n &&
            s.support.transition &&
            ((r.length && r.hasClass("fade")) || !!e.find("> .fade").length);
        r.length && o
          ? r
              .one("bsTransitionEnd", i)
              .emulateTransitionEnd(a.TRANSITION_DURATION)
          : i(),
          r.removeClass("in");
      });
    var t = s.fn.tab;
    (s.fn.tab = e),
      (s.fn.tab.Constructor = a),
      (s.fn.tab.noConflict = function () {
        return (s.fn.tab = t), this;
      });
    var n = function (t) {
      t.preventDefault(), e.call(s(this), "show");
    };
    s(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
  })(jQuery),
  (function (l) {
    "use strict";
    function n(i) {
      return this.each(function () {
        var t = l(this),
          e = t.data("bs.affix"),
          n = "object" == typeof i && i;
        e || t.data("bs.affix", (e = new u(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    var u = function (t, e) {
      (this.options = l.extend({}, u.DEFAULTS, e)),
        (this.$target = l(this.options.target)
          .on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            l.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = l(t)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (u.VERSION = "3.3.7"),
      (u.RESET = "affix affix-top affix-bottom"),
      (u.DEFAULTS = { offset: 0, target: window }),
      (u.prototype.getState = function (t, e, n, i) {
        var r = this.$target.scrollTop(),
          o = this.$element.offset(),
          a = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed)
          return null != n
            ? !(r + this.unpin <= o.top) && "bottom"
            : !(r + a <= t - i) && "bottom";
        var s = null == this.affixed,
          l = s ? r : o.top;
        return null != n && r <= n
          ? "top"
          : null != i && t - i <= l + (s ? a : e) && "bottom";
      }),
      (u.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(u.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (u.prototype.checkPositionWithEventLoop = function () {
        setTimeout(l.proxy(this.checkPosition, this), 1);
      }),
      (u.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var t = this.$element.height(),
            e = this.options.offset,
            n = e.top,
            i = e.bottom,
            r = Math.max(l(document).height(), l(document.body).height());
          "object" != typeof e && (i = n = e),
            "function" == typeof n && (n = e.top(this.$element)),
            "function" == typeof i && (i = e.bottom(this.$element));
          var o = this.getState(r, t, n, i);
          if (this.affixed != o) {
            null != this.unpin && this.$element.css("top", "");
            var a = "affix" + (o ? "-" + o : ""),
              s = l.Event(a + ".bs.affix");
            if ((this.$element.trigger(s), s.isDefaultPrevented())) return;
            (this.affixed = o),
              (this.unpin = "bottom" == o ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(u.RESET)
                .addClass(a)
                .trigger(a.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == o && this.$element.offset({ top: r - t - i });
        }
      });
    var t = l.fn.affix;
    (l.fn.affix = n),
      (l.fn.affix.Constructor = u),
      (l.fn.affix.noConflict = function () {
        return (l.fn.affix = t), this;
      }),
      l(window).on("load", function () {
        l('[data-spy="affix"]').each(function () {
          var t = l(this),
            e = t.data();
          (e.offset = e.offset || {}),
            null != e.offsetBottom && (e.offset.bottom = e.offsetBottom),
            null != e.offsetTop && (e.offset.top = e.offsetTop),
            n.call(t, e);
        });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    function r(t, e) {
      (this.$body = o(document.body)),
        (this.$scrollElement = o(t).is(document.body) ? o(window) : o(t)),
        (this.options = o.extend({}, r.DEFAULTS, e)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          o.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function e(i) {
      return this.each(function () {
        var t = o(this),
          e = t.data("bs.scrollspy"),
          n = "object" == typeof i && i;
        e || t.data("bs.scrollspy", (e = new r(this, n))),
          "string" == typeof i && e[i]();
      });
    }
    (r.VERSION = "3.3.7"),
      (r.DEFAULTS = { offset: 10 }),
      (r.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (r.prototype.refresh = function () {
        var t = this,
          i = "offset",
          r = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          o.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (r = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = o(this),
                e = t.data("target") || t.attr("href"),
                n = /^#./.test(e) && o(e);
              return (
                (n && n.length && n.is(":visible") && [[n[i]().top + r, e]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (r.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.getScrollHeight(),
          i = this.options.offset + n - this.$scrollElement.height(),
          r = this.offsets,
          o = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != n && this.refresh(), i <= e))
          return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < r[0]) return (this.activeTarget = null), this.clear();
        for (t = r.length; t--; )
          a != o[t] &&
            e >= r[t] &&
            (r[t + 1] === undefined || e < r[t + 1]) &&
            this.activate(o[t]);
      }),
      (r.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var e =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          n = o(e).parents("li").addClass("active");
        n.parent(".dropdown-menu").length &&
          (n = n.closest("li.dropdown").addClass("active")),
          n.trigger("activate.bs.scrollspy");
      }),
      (r.prototype.clear = function () {
        o(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var t = o.fn.scrollspy;
    (o.fn.scrollspy = e),
      (o.fn.scrollspy.Constructor = r),
      (o.fn.scrollspy.noConflict = function () {
        return (o.fn.scrollspy = t), this;
      }),
      o(window).on("load.bs.scrollspy.data-api", function () {
        o('[data-spy="scroll"]').each(function () {
          var t = o(this);
          e.call(t, t.data());
        });
      });
  })(jQuery),
  (function (m) {
    "use strict";
    function t(i) {
      return this.each(function () {
        var t = m(this),
          e = t.data("bs.tooltip"),
          n = "object" == typeof i && i;
        (!e && /destroy|hide/.test(i)) ||
          (e || t.data("bs.tooltip", (e = new g(this, n))),
          "string" == typeof i && e[i]());
      });
    }
    var g = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (g.VERSION = "3.3.7"),
      (g.TRANSITION_DURATION = 150),
      (g.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (g.prototype.init = function (t, e, n) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = m(e)),
          (this.options = this.getOptions(n)),
          (this.$viewport =
            this.options.viewport &&
            m(
              m.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var i = this.options.trigger.split(" "), r = i.length; r--; ) {
          var o = i[r];
          if ("click" == o)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              m.proxy(this.toggle, this)
            );
          else if ("manual" != o) {
            var a = "hover" == o ? "mouseenter" : "focusin",
              s = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(
              a + "." + this.type,
              this.options.selector,
              m.proxy(this.enter, this)
            ),
              this.$element.on(
                s + "." + this.type,
                this.options.selector,
                m.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = m.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (g.prototype.getDefaults = function () {
        return g.DEFAULTS;
      }),
      (g.prototype.getOptions = function (t) {
        return (
          (t = m.extend({}, this.getDefaults(), this.$element.data(), t))
            .delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (g.prototype.getDelegateOptions = function () {
        var n = {},
          i = this.getDefaults();
        return (
          this._options &&
            m.each(this._options, function (t, e) {
              i[t] != e && (n[t] = e);
            }),
          n
        );
      }),
      (g.prototype.enter = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : m(t.currentTarget).data("bs." + this.type);
        if (
          (e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            m(t.currentTarget).data("bs." + this.type, e)),
          t instanceof m.Event &&
            (e.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          e.tip().hasClass("in") || "in" == e.hoverState)
        )
          e.hoverState = "in";
        else {
          if (
            (clearTimeout(e.timeout),
            (e.hoverState = "in"),
            !e.options.delay || !e.options.delay.show)
          )
            return e.show();
          e.timeout = setTimeout(function () {
            "in" == e.hoverState && e.show();
          }, e.options.delay.show);
        }
      }),
      (g.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (g.prototype.leave = function (t) {
        var e =
          t instanceof this.constructor
            ? t
            : m(t.currentTarget).data("bs." + this.type);
        if (
          (e ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            m(t.currentTarget).data("bs." + this.type, e)),
          t instanceof m.Event &&
            (e.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          !e.isInStateTrue())
        ) {
          if (
            (clearTimeout(e.timeout),
            (e.hoverState = "out"),
            !e.options.delay || !e.options.delay.hide)
          )
            return e.hide();
          e.timeout = setTimeout(function () {
            "out" == e.hoverState && e.hide();
          }, e.options.delay.hide);
        }
      }),
      (g.prototype.show = function () {
        var t = m.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var e = m.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !e) return;
          var n = this,
            i = this.tip(),
            r = this.getUID(this.type);
          this.setContent(),
            i.attr("id", r),
            this.$element.attr("aria-describedby", r),
            this.options.animation && i.addClass("fade");
          var o =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, i[0], this.$element[0])
                : this.options.placement,
            a = /\s?auto?\s?/i,
            s = a.test(o);
          s && (o = o.replace(a, "") || "top"),
            i
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(o)
              .data("bs." + this.type, this),
            this.options.container
              ? i.appendTo(this.options.container)
              : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var l = this.getPosition(),
            u = i[0].offsetWidth,
            c = i[0].offsetHeight;
          if (s) {
            var d = o,
              f = this.getPosition(this.$viewport);
            (o =
              "bottom" == o && l.bottom + c > f.bottom
                ? "top"
                : "top" == o && l.top - c < f.top
                ? "bottom"
                : "right" == o && l.right + u > f.width
                ? "left"
                : "left" == o && l.left - u < f.left
                ? "right"
                : o),
              i.removeClass(d).addClass(o);
          }
          var h = this.getCalculatedOffset(o, l, u, c);
          this.applyPlacement(h, o);
          var p = function () {
            var t = n.hoverState;
            n.$element.trigger("shown.bs." + n.type),
              (n.hoverState = null),
              "out" == t && n.leave(n);
          };
          m.support.transition && this.$tip.hasClass("fade")
            ? i
                .one("bsTransitionEnd", p)
                .emulateTransitionEnd(g.TRANSITION_DURATION)
            : p();
        }
      }),
      (g.prototype.applyPlacement = function (t, e) {
        var n = this.tip(),
          i = n[0].offsetWidth,
          r = n[0].offsetHeight,
          o = parseInt(n.css("margin-top"), 10),
          a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0),
          isNaN(a) && (a = 0),
          (t.top += o),
          (t.left += a),
          m.offset.setOffset(
            n[0],
            m.extend(
              {
                using: function (t) {
                  n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              t
            ),
            0
          ),
          n.addClass("in");
        var s = n[0].offsetWidth,
          l = n[0].offsetHeight;
        "top" == e && l != r && (t.top = t.top + r - l);
        var u = this.getViewportAdjustedDelta(e, t, s, l);
        u.left ? (t.left += u.left) : (t.top += u.top);
        var c = /top|bottom/.test(e),
          d = c ? 2 * u.left - i + s : 2 * u.top - r + l,
          f = c ? "offsetWidth" : "offsetHeight";
        n.offset(t), this.replaceArrow(d, n[0][f], c);
      }),
      (g.prototype.replaceArrow = function (t, e, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(n ? "top" : "left", "");
      }),
      (g.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (g.prototype.hide = function (t) {
        function e() {
          "in" != n.hoverState && i.detach(),
            n.$element &&
              n.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + n.type),
            t && t();
        }
        var n = this,
          i = m(this.$tip),
          r = m.Event("hide.bs." + this.type);
        if ((this.$element.trigger(r), !r.isDefaultPrevented()))
          return (
            i.removeClass("in"),
            m.support.transition && i.hasClass("fade")
              ? i
                  .one("bsTransitionEnd", e)
                  .emulateTransitionEnd(g.TRANSITION_DURATION)
              : e(),
            (this.hoverState = null),
            this
          );
      }),
      (g.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (g.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (g.prototype.getPosition = function (t) {
        var e = (t = t || this.$element)[0],
          n = "BODY" == e.tagName,
          i = e.getBoundingClientRect();
        null == i.width &&
          (i = m.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top,
          }));
        var r = window.SVGElement && e instanceof window.SVGElement,
          o = n ? { top: 0, left: 0 } : r ? null : t.offset(),
          a = {
            scroll: n
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          s = n
            ? { width: m(window).width(), height: m(window).height() }
            : null;
        return m.extend({}, i, a, s, o);
      }),
      (g.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - n }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width };
      }),
      (g.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var r = { top: 0, left: 0 };
        if (!this.$viewport) return r;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var s = e.top - o - a.scroll,
            l = e.top + o - a.scroll + i;
          s < a.top
            ? (r.top = a.top - s)
            : l > a.top + a.height && (r.top = a.top + a.height - l);
        } else {
          var u = e.left - o,
            c = e.left + o + n;
          u < a.left
            ? (r.left = a.left - u)
            : c > a.right && (r.left = a.left + a.width - c);
        }
        return r;
      }),
      (g.prototype.getTitle = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-original-title") ||
          ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        );
      }),
      (g.prototype.getUID = function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      }),
      (g.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = m(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (g.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (g.prototype.enable = function () {
        this.enabled = !0;
      }),
      (g.prototype.disable = function () {
        this.enabled = !1;
      }),
      (g.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (g.prototype.toggle = function (t) {
        var e = this;
        t &&
          ((e = m(t.currentTarget).data("bs." + this.type)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            m(t.currentTarget).data("bs." + this.type, e))),
          t
            ? ((e.inState.click = !e.inState.click),
              e.isInStateTrue() ? e.enter(e) : e.leave(e))
            : e.tip().hasClass("in")
            ? e.leave(e)
            : e.enter(e);
      }),
      (g.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var e = m.fn.tooltip;
    (m.fn.tooltip = t),
      (m.fn.tooltip.Constructor = g),
      (m.fn.tooltip.noConflict = function () {
        return (m.fn.tooltip = e), this;
      });
  })(jQuery),
  (function (r) {
    "use strict";
    function t(i) {
      return this.each(function () {
        var t = r(this),
          e = t.data("bs.popover"),
          n = "object" == typeof i && i;
        (!e && /destroy|hide/.test(i)) ||
          (e || t.data("bs.popover", (e = new o(this, n))),
          "string" == typeof i && e[i]());
      });
    }
    var o = function (t, e) {
      this.init("popover", t, e);
    };
    if (!r.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (o.VERSION = "3.3.7"),
      (o.DEFAULTS = r.extend({}, r.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (o.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype)),
      ((o.prototype.constructor = o).prototype.getDefaults = function () {
        return o.DEFAULTS;
      }),
      (o.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (o.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (o.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (o.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var e = r.fn.popover;
    (r.fn.popover = t),
      (r.fn.popover.Constructor = o),
      (r.fn.popover.noConflict = function () {
        return (r.fn.popover = e), this;
      });
  })(jQuery),
  (function (c, l) {
    "use strict";
    var u;
    c.rails !== l && c.error("jquery-ujs has already been loaded!");
    var t = c(document);
    (c.rails = u =
      {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector:
          "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector:
          "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector:
          "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector:
          "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
          return c("meta[name=csrf-token]").attr("content");
        },
        csrfParam: function () {
          return c("meta[name=csrf-param]").attr("content");
        },
        CSRFProtection: function (t) {
          var e = u.csrfToken();
          e && t.setRequestHeader("X-CSRF-Token", e);
        },
        refreshCSRFTokens: function () {
          c('form input[name="' + u.csrfParam() + '"]').val(u.csrfToken());
        },
        fire: function (t, e, n) {
          var i = c.Event(e);
          return t.trigger(i, n), !1 !== i.result;
        },
        confirm: function (t) {
          return confirm(t);
        },
        ajax: function (t) {
          return c.ajax(t);
        },
        href: function (t) {
          return t[0].href;
        },
        isRemote: function (t) {
          return t.data("remote") !== l && !1 !== t.data("remote");
        },
        handleRemote: function (i) {
          var t, e, n, r, o, a;
          if (u.fire(i, "ajax:before")) {
            if (
              ((r = i.data("with-credentials") || null),
              (o =
                i.data("type") || (c.ajaxSettings && c.ajaxSettings.dataType)),
              i.is("form"))
            ) {
              (t = i.data("ujs:submit-button-formmethod") || i.attr("method")),
                (e =
                  i.data("ujs:submit-button-formaction") || i.attr("action")),
                (n = c(i[0]).serializeArray());
              var s = i.data("ujs:submit-button");
              s && (n.push(s), i.data("ujs:submit-button", null)),
                i.data("ujs:submit-button-formmethod", null),
                i.data("ujs:submit-button-formaction", null);
            } else
              i.is(u.inputChangeSelector)
                ? ((t = i.data("method")),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : i.is(u.buttonClickSelector)
                ? ((t = i.data("method") || "get"),
                  (e = i.data("url")),
                  (n = i.serialize()),
                  i.data("params") && (n = n + "&" + i.data("params")))
                : ((t = i.data("method")),
                  (e = u.href(i)),
                  (n = i.data("params") || null));
            return (
              (a = {
                type: t || "GET",
                data: n,
                dataType: o,
                beforeSend: function (t, e) {
                  if (
                    (e.dataType === l &&
                      t.setRequestHeader(
                        "accept",
                        "*/*;q=0.5, " + e.accepts.script
                      ),
                    !u.fire(i, "ajax:beforeSend", [t, e]))
                  )
                    return !1;
                  i.trigger("ajax:send", t);
                },
                success: function (t, e, n) {
                  i.trigger("ajax:success", [t, e, n]);
                },
                complete: function (t, e) {
                  i.trigger("ajax:complete", [t, e]);
                },
                error: function (t, e, n) {
                  i.trigger("ajax:error", [t, e, n]);
                },
                crossDomain: u.isCrossDomain(e),
              }),
              r && (a.xhrFields = { withCredentials: r }),
              e && (a.url = e),
              u.ajax(a)
            );
          }
          return !1;
        },
        isCrossDomain: function (t) {
          var e = document.createElement("a");
          e.href = location.href;
          var n = document.createElement("a");
          try {
            return (
              (n.href = t),
              (n.href = n.href),
              !(
                ((!n.protocol || ":" === n.protocol) && !n.host) ||
                e.protocol + "//" + e.host == n.protocol + "//" + n.host
              )
            );
          } catch (i) {
            return !0;
          }
        },
        handleMethod: function (t) {
          var e = u.href(t),
            n = t.data("method"),
            i = t.attr("target"),
            r = u.csrfToken(),
            o = u.csrfParam(),
            a = c('<form method="post" action="' + e + '"></form>'),
            s = '<input name="_method" value="' + n + '" type="hidden" />';
          o === l ||
            r === l ||
            u.isCrossDomain(e) ||
            (s += '<input name="' + o + '" value="' + r + '" type="hidden" />'),
            i && a.attr("target", i),
            a.hide().append(s).appendTo("body"),
            a.submit();
        },
        formElements: function (t, e) {
          return t.is("form") ? c(t[0].elements).filter(e) : t.find(e);
        },
        disableFormElements: function (t) {
          u.formElements(t, u.disableSelector).each(function () {
            u.disableFormElement(c(this));
          });
        },
        disableFormElement: function (t) {
          var e, n;
          (e = t.is("button") ? "html" : "val"),
            (n = t.data("disable-with")) !== l &&
              (t.data("ujs:enable-with", t[e]()), t[e](n)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0);
        },
        enableFormElements: function (t) {
          u.formElements(t, u.enableSelector).each(function () {
            u.enableFormElement(c(this));
          });
        },
        enableFormElement: function (t) {
          var e = t.is("button") ? "html" : "val";
          t.data("ujs:enable-with") !== l &&
            (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled");
        },
        allowAction: function (t) {
          var e,
            n = t.data("confirm"),
            i = !1;
          if (!n) return !0;
          if (u.fire(t, "confirm")) {
            try {
              i = u.confirm(n);
            } catch (r) {
              (console.error || console.log).call(console, r.stack || r);
            }
            e = u.fire(t, "confirm:complete", [i]);
          }
          return i && e;
        },
        blankInputs: function (t, e, n) {
          var i,
            r,
            o,
            a = c(),
            s = e || "input,textarea",
            l = t.find(s),
            u = {};
          return (
            l.each(function () {
              (i = c(this)).is("input[type=radio]")
                ? ((o = i.attr("name")),
                  u[o] ||
                    (0 ===
                      t.find('input[type=radio]:checked[name="' + o + '"]')
                        .length &&
                      ((r = t.find('input[type=radio][name="' + o + '"]')),
                      (a = a.add(r))),
                    (u[o] = o)))
                : (i.is("input[type=checkbox],input[type=radio]")
                    ? i.is(":checked")
                    : !!i.val()) === n && (a = a.add(i));
            }),
            !!a.length && a
          );
        },
        nonBlankInputs: function (t, e) {
          return u.blankInputs(t, e, !0);
        },
        stopEverything: function (t) {
          return (
            c(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
          );
        },
        disableElement: function (t) {
          var e = t.data("disable-with");
          e !== l && (t.data("ujs:enable-with", t.html()), t.html(e)),
            t.bind("click.railsDisable", function (t) {
              return u.stopEverything(t);
            }),
            t.data("ujs:disabled", !0);
        },
        enableElement: function (t) {
          t.data("ujs:enable-with") !== l &&
            (t.html(t.data("ujs:enable-with")),
            t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled");
        },
      }),
      u.fire(t, "rails:attachBindings") &&
        (c.ajaxPrefilter(function (t, e, n) {
          t.crossDomain || u.CSRFProtection(n);
        }),
        c(window).on("pageshow.rails", function () {
          c(c.rails.enableSelector).each(function () {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableFormElement(t);
          }),
            c(c.rails.linkDisableSelector).each(function () {
              var t = c(this);
              t.data("ujs:disabled") && c.rails.enableElement(t);
            });
        }),
        t.on("ajax:complete", u.linkDisableSelector, function () {
          u.enableElement(c(this));
        }),
        t.on("ajax:complete", u.buttonDisableSelector, function () {
          u.enableFormElement(c(this));
        }),
        t.on("click.rails", u.linkClickSelector, function (t) {
          var e = c(this),
            n = e.data("method"),
            i = e.data("params"),
            r = t.metaKey || t.ctrlKey;
          if (!u.allowAction(e)) return u.stopEverything(t);
          if (
            (!r && e.is(u.linkDisableSelector) && u.disableElement(e),
            u.isRemote(e))
          ) {
            if (r && (!n || "GET" === n) && !i) return !0;
            var o = u.handleRemote(e);
            return (
              !1 === o
                ? u.enableElement(e)
                : o.fail(function () {
                    u.enableElement(e);
                  }),
              !1
            );
          }
          return n ? (u.handleMethod(e), !1) : void 0;
        }),
        t.on("click.rails", u.buttonClickSelector, function (t) {
          var e = c(this);
          if (!u.allowAction(e) || !u.isRemote(e)) return u.stopEverything(t);
          e.is(u.buttonDisableSelector) && u.disableFormElement(e);
          var n = u.handleRemote(e);
          return (
            !1 === n
              ? u.enableFormElement(e)
              : n.fail(function () {
                  u.enableFormElement(e);
                }),
            !1
          );
        }),
        t.on("change.rails", u.inputChangeSelector, function (t) {
          var e = c(this);
          return u.allowAction(e) && u.isRemote(e)
            ? (u.handleRemote(e), !1)
            : u.stopEverything(t);
        }),
        t.on("submit.rails", u.formSubmitSelector, function (t) {
          var e,
            n,
            i = c(this),
            r = u.isRemote(i);
          if (!u.allowAction(i)) return u.stopEverything(t);
          if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
              if (
                (e = u.blankInputs(i, u.requiredInputSelector, !1)) &&
                u.fire(i, "ajax:aborted:required", [e])
              )
                return u.stopEverything(t);
            } else i.data("ujs:formnovalidate-button", l);
          if (r) {
            if ((n = u.nonBlankInputs(i, u.fileInputSelector))) {
              setTimeout(function () {
                u.disableFormElements(i);
              }, 13);
              var o = u.fire(i, "ajax:aborted:file", [n]);
              return (
                o ||
                  setTimeout(function () {
                    u.enableFormElements(i);
                  }, 13),
                o
              );
            }
            return u.handleRemote(i), !1;
          }
          setTimeout(function () {
            u.disableFormElements(i);
          }, 13);
        }),
        t.on("click.rails", u.formInputClickSelector, function (t) {
          var e = c(this);
          if (!u.allowAction(e)) return u.stopEverything(t);
          var n = e.attr("name"),
            i = n ? { name: n, value: e.val() } : null,
            r = e.closest("form");
          0 === r.length && (r = c("#" + e.attr("form"))),
            r.data("ujs:submit-button", i),
            r.data("ujs:formnovalidate-button", e.attr("formnovalidate")),
            r.data("ujs:submit-button-formaction", e.attr("formaction")),
            r.data("ujs:submit-button-formmethod", e.attr("formmethod"));
        }),
        t.on("ajax:send.rails", u.formSubmitSelector, function (t) {
          this === t.target && u.disableFormElements(c(this));
        }),
        t.on("ajax:complete.rails", u.formSubmitSelector, function (t) {
          this === t.target && u.enableFormElements(c(this));
        }),
        c(function () {
          u.refreshCSRFTokens();
        }));
  })(jQuery),
  function () {
    function t(s) {
      function l(t, e, n, i, r, o) {
        for (; 0 <= r && r < o; r += s) {
          var a = i ? i[r] : r;
          n = e(n, t[a], a, t);
        }
        return n;
      }
      return function (t, e, n, i) {
        e = b(e, i, 4);
        var r = !D(t) && y.keys(t),
          o = (r || t).length,
          a = 0 < s ? 0 : o - 1;
        return (
          arguments.length < 3 && ((n = t[r ? r[a] : a]), (a += s)),
          l(t, e, n, r, a, o)
        );
      };
    }
    function e(o) {
      return function (t, e, n) {
        e = w(e, n);
        for (var i = T(t), r = 0 < o ? 0 : i - 1; 0 <= r && r < i; r += o)
          if (e(t[r], r, t)) return r;
        return -1;
      };
    }
    function n(o, a, s) {
      return function (t, e, n) {
        var i = 0,
          r = T(t);
        if ("number" == typeof n)
          0 < o
            ? (i = 0 <= n ? n : Math.max(n + r, i))
            : (r = 0 <= n ? Math.min(n + 1, r) : n + r + 1);
        else if (s && n && r) return t[(n = s(t, e))] === e ? n : -1;
        if (e != e) return 0 <= (n = a(c.call(t, i, r), y.isNaN)) ? n + i : -1;
        for (n = 0 < o ? i : r - 1; 0 <= n && n < r; n += o)
          if (t[n] === e) return n;
        return -1;
      };
    }
    function i(t, e) {
      var n = N.length,
        i = t.constructor,
        r = (y.isFunction(i) && i.prototype) || s,
        o = "constructor";
      for (y.has(t, o) && !y.contains(e, o) && e.push(o); n--; )
        (o = N[n]) in t && t[o] !== r[o] && !y.contains(e, o) && e.push(o);
    }
    var r = this,
      o = r._,
      a = Array.prototype,
      s = Object.prototype,
      l = Function.prototype,
      u = a.push,
      c = a.slice,
      d = s.toString,
      f = s.hasOwnProperty,
      h = Array.isArray,
      p = Object.keys,
      m = l.bind,
      g = Object.create,
      v = function () {},
      y = function (t) {
        return t instanceof y
          ? t
          : this instanceof y
          ? void (this._wrapped = t)
          : new y(t);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = y),
        (exports._ = y))
      : (r._ = y),
      (y.VERSION = "1.8.3");
    var b = function (r, o, t) {
        if (void 0 === o) return r;
        switch (null == t ? 3 : t) {
          case 1:
            return function (t) {
              return r.call(o, t);
            };
          case 2:
            return function (t, e) {
              return r.call(o, t, e);
            };
          case 3:
            return function (t, e, n) {
              return r.call(o, t, e, n);
            };
          case 4:
            return function (t, e, n, i) {
              return r.call(o, t, e, n, i);
            };
        }
        return function () {
          return r.apply(o, arguments);
        };
      },
      w = function (t, e, n) {
        return null == t
          ? y.identity
          : y.isFunction(t)
          ? b(t, e, n)
          : y.isObject(t)
          ? y.matcher(t)
          : y.property(t);
      };
    y.iteratee = function (t, e) {
      return w(t, e, Infinity);
    };
    var _ = function (l, u) {
        return function (t) {
          var e = arguments.length;
          if (e < 2 || null == t) return t;
          for (var n = 1; n < e; n++)
            for (
              var i = arguments[n], r = l(i), o = r.length, a = 0;
              a < o;
              a++
            ) {
              var s = r[a];
              (u && void 0 !== t[s]) || (t[s] = i[s]);
            }
          return t;
        };
      },
      x = function (t) {
        if (!y.isObject(t)) return {};
        if (g) return g(t);
        v.prototype = t;
        var e = new v();
        return (v.prototype = null), e;
      },
      C = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      },
      S = Math.pow(2, 53) - 1,
      T = C("length"),
      D = function (t) {
        var e = T(t);
        return "number" == typeof e && 0 <= e && e <= S;
      };
    (y.each = y.forEach =
      function (t, e, n) {
        var i, r;
        if (((e = b(e, n)), D(t)))
          for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
        else {
          var o = y.keys(t);
          for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
        }
        return t;
      }),
      (y.map = y.collect =
        function (t, e, n) {
          e = w(e, n);
          for (
            var i = !D(t) && y.keys(t),
              r = (i || t).length,
              o = Array(r),
              a = 0;
            a < r;
            a++
          ) {
            var s = i ? i[a] : a;
            o[a] = e(t[s], s, t);
          }
          return o;
        }),
      (y.reduce = y.foldl = y.inject = t(1)),
      (y.reduceRight = y.foldr = t(-1)),
      (y.find = y.detect =
        function (t, e, n) {
          var i;
          if (
            void 0 !== (i = D(t) ? y.findIndex(t, e, n) : y.findKey(t, e, n)) &&
            -1 !== i
          )
            return t[i];
        }),
      (y.filter = y.select =
        function (t, i, e) {
          var r = [];
          return (
            (i = w(i, e)),
            y.each(t, function (t, e, n) {
              i(t, e, n) && r.push(t);
            }),
            r
          );
        }),
      (y.reject = function (t, e, n) {
        return y.filter(t, y.negate(w(e)), n);
      }),
      (y.every = y.all =
        function (t, e, n) {
          e = w(e, n);
          for (
            var i = !D(t) && y.keys(t), r = (i || t).length, o = 0;
            o < r;
            o++
          ) {
            var a = i ? i[o] : o;
            if (!e(t[a], a, t)) return !1;
          }
          return !0;
        }),
      (y.some = y.any =
        function (t, e, n) {
          e = w(e, n);
          for (
            var i = !D(t) && y.keys(t), r = (i || t).length, o = 0;
            o < r;
            o++
          ) {
            var a = i ? i[o] : o;
            if (e(t[a], a, t)) return !0;
          }
          return !1;
        }),
      (y.contains =
        y.includes =
        y.include =
          function (t, e, n, i) {
            return (
              D(t) || (t = y.values(t)),
              ("number" != typeof n || i) && (n = 0),
              0 <= y.indexOf(t, e, n)
            );
          }),
      (y.invoke = function (t, n) {
        var i = c.call(arguments, 2),
          r = y.isFunction(n);
        return y.map(t, function (t) {
          var e = r ? n : t[n];
          return null == e ? e : e.apply(t, i);
        });
      }),
      (y.pluck = function (t, e) {
        return y.map(t, y.property(e));
      }),
      (y.where = function (t, e) {
        return y.filter(t, y.matcher(e));
      }),
      (y.findWhere = function (t, e) {
        return y.find(t, y.matcher(e));
      }),
      (y.max = function (t, i, e) {
        var n,
          r,
          o = -Infinity,
          a = -Infinity;
        if (null == i && null != t)
          for (var s = 0, l = (t = D(t) ? t : y.values(t)).length; s < l; s++)
            (n = t[s]), o < n && (o = n);
        else
          (i = w(i, e)),
            y.each(t, function (t, e, n) {
              (r = i(t, e, n)),
                (a < r || (r === -Infinity && o === -Infinity)) &&
                  ((o = t), (a = r));
            });
        return o;
      }),
      (y.min = function (t, i, e) {
        var n,
          r,
          o = Infinity,
          a = Infinity;
        if (null == i && null != t)
          for (var s = 0, l = (t = D(t) ? t : y.values(t)).length; s < l; s++)
            (n = t[s]) < o && (o = n);
        else
          (i = w(i, e)),
            y.each(t, function (t, e, n) {
              ((r = i(t, e, n)) < a || (r === Infinity && o === Infinity)) &&
                ((o = t), (a = r));
            });
        return o;
      }),
      (y.shuffle = function (t) {
        for (
          var e, n = D(t) ? t : y.values(t), i = n.length, r = Array(i), o = 0;
          o < i;
          o++
        )
          (e = y.random(0, o)) !== o && (r[o] = r[e]), (r[e] = n[o]);
        return r;
      }),
      (y.sample = function (t, e, n) {
        return null == e || n
          ? (D(t) || (t = y.values(t)), t[y.random(t.length - 1)])
          : y.shuffle(t).slice(0, Math.max(0, e));
      }),
      (y.sortBy = function (t, i, e) {
        return (
          (i = w(i, e)),
          y.pluck(
            y
              .map(t, function (t, e, n) {
                return { value: t, index: e, criteria: i(t, e, n) };
              })
              .sort(function (t, e) {
                var n = t.criteria,
                  i = e.criteria;
                if (n !== i) {
                  if (i < n || void 0 === n) return 1;
                  if (n < i || void 0 === i) return -1;
                }
                return t.index - e.index;
              }),
            "value"
          )
        );
      });
    var E = function (a) {
      return function (i, r, t) {
        var o = {};
        return (
          (r = w(r, t)),
          y.each(i, function (t, e) {
            var n = r(t, e, i);
            a(o, t, n);
          }),
          o
        );
      };
    };
    (y.groupBy = E(function (t, e, n) {
      y.has(t, n) ? t[n].push(e) : (t[n] = [e]);
    })),
      (y.indexBy = E(function (t, e, n) {
        t[n] = e;
      })),
      (y.countBy = E(function (t, e, n) {
        y.has(t, n) ? t[n]++ : (t[n] = 1);
      })),
      (y.toArray = function (t) {
        return t
          ? y.isArray(t)
            ? c.call(t)
            : D(t)
            ? y.map(t, y.identity)
            : y.values(t)
          : [];
      }),
      (y.size = function (t) {
        return null == t ? 0 : D(t) ? t.length : y.keys(t).length;
      }),
      (y.partition = function (t, i, e) {
        i = w(i, e);
        var r = [],
          o = [];
        return (
          y.each(t, function (t, e, n) {
            (i(t, e, n) ? r : o).push(t);
          }),
          [r, o]
        );
      }),
      (y.first =
        y.head =
        y.take =
          function (t, e, n) {
            if (null != t)
              return null == e || n ? t[0] : y.initial(t, t.length - e);
          }),
      (y.initial = function (t, e, n) {
        return c.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)));
      }),
      (y.last = function (t, e, n) {
        if (null != t)
          return null == e || n
            ? t[t.length - 1]
            : y.rest(t, Math.max(0, t.length - e));
      }),
      (y.rest =
        y.tail =
        y.drop =
          function (t, e, n) {
            return c.call(t, null == e || n ? 1 : e);
          }),
      (y.compact = function (t) {
        return y.filter(t, y.identity);
      });
    var k = function (t, e, n, i) {
      for (var r = [], o = 0, a = i || 0, s = T(t); a < s; a++) {
        var l = t[a];
        if (D(l) && (y.isArray(l) || y.isArguments(l))) {
          e || (l = k(l, e, n));
          var u = 0,
            c = l.length;
          for (r.length += c; u < c; ) r[o++] = l[u++];
        } else n || (r[o++] = l);
      }
      return r;
    };
    (y.flatten = function (t, e) {
      return k(t, e, !1);
    }),
      (y.without = function (t) {
        return y.difference(t, c.call(arguments, 1));
      }),
      (y.uniq = y.unique =
        function (t, e, n, i) {
          y.isBoolean(e) || ((i = n), (n = e), (e = !1)),
            null != n && (n = w(n, i));
          for (var r = [], o = [], a = 0, s = T(t); a < s; a++) {
            var l = t[a],
              u = n ? n(l, a, t) : l;
            e
              ? ((a && o === u) || r.push(l), (o = u))
              : n
              ? y.contains(o, u) || (o.push(u), r.push(l))
              : y.contains(r, l) || r.push(l);
          }
          return r;
        }),
      (y.union = function () {
        return y.uniq(k(arguments, !0, !0));
      }),
      (y.intersection = function (t) {
        for (var e = [], n = arguments.length, i = 0, r = T(t); i < r; i++) {
          var o = t[i];
          if (!y.contains(e, o)) {
            for (var a = 1; a < n && y.contains(arguments[a], o); a++);
            a === n && e.push(o);
          }
        }
        return e;
      }),
      (y.difference = function (t) {
        var e = k(arguments, !0, !0, 1);
        return y.filter(t, function (t) {
          return !y.contains(e, t);
        });
      }),
      (y.zip = function () {
        return y.unzip(arguments);
      }),
      (y.unzip = function (t) {
        for (
          var e = (t && y.max(t, T).length) || 0, n = Array(e), i = 0;
          i < e;
          i++
        )
          n[i] = y.pluck(t, i);
        return n;
      }),
      (y.object = function (t, e) {
        for (var n = {}, i = 0, r = T(t); i < r; i++)
          e ? (n[t[i]] = e[i]) : (n[t[i][0]] = t[i][1]);
        return n;
      }),
      (y.findIndex = e(1)),
      (y.findLastIndex = e(-1)),
      (y.sortedIndex = function (t, e, n, i) {
        for (var r = (n = w(n, i, 1))(e), o = 0, a = T(t); o < a; ) {
          var s = Math.floor((o + a) / 2);
          n(t[s]) < r ? (o = s + 1) : (a = s);
        }
        return o;
      }),
      (y.indexOf = n(1, y.findIndex, y.sortedIndex)),
      (y.lastIndexOf = n(-1, y.findLastIndex)),
      (y.range = function (t, e, n) {
        null == e && ((e = t || 0), (t = 0)), (n = n || 1);
        for (
          var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0;
          o < i;
          o++, t += n
        )
          r[o] = t;
        return r;
      });
    var A = function (t, e, n, i, r) {
      if (!(i instanceof e)) return t.apply(n, r);
      var o = x(t.prototype),
        a = t.apply(o, r);
      return y.isObject(a) ? a : o;
    };
    (y.bind = function (t, e) {
      if (m && t.bind === m) return m.apply(t, c.call(arguments, 1));
      if (!y.isFunction(t))
        throw new TypeError("Bind must be called on a function");
      var n = c.call(arguments, 2),
        i = function () {
          return A(t, i, e, this, n.concat(c.call(arguments)));
        };
      return i;
    }),
      (y.partial = function (r) {
        var o = c.call(arguments, 1),
          a = function () {
            for (var t = 0, e = o.length, n = Array(e), i = 0; i < e; i++)
              n[i] = o[i] === y ? arguments[t++] : o[i];
            for (; t < arguments.length; ) n.push(arguments[t++]);
            return A(r, a, this, this, n);
          };
        return a;
      }),
      (y.bindAll = function (t) {
        var e,
          n,
          i = arguments.length;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++) t[(n = arguments[e])] = y.bind(t[n], t);
        return t;
      }),
      (y.memoize = function (i, r) {
        var o = function (t) {
          var e = o.cache,
            n = "" + (r ? r.apply(this, arguments) : t);
          return y.has(e, n) || (e[n] = i.apply(this, arguments)), e[n];
        };
        return (o.cache = {}), o;
      }),
      (y.delay = function (t, e) {
        var n = c.call(arguments, 2);
        return setTimeout(function () {
          return t.apply(null, n);
        }, e);
      }),
      (y.defer = y.partial(y.delay, y, 1)),
      (y.throttle = function (n, i, r) {
        var o,
          a,
          s,
          l = null,
          u = 0;
        r || (r = {});
        var c = function () {
          (u = !1 === r.leading ? 0 : y.now()),
            (l = null),
            (s = n.apply(o, a)),
            l || (o = a = null);
        };
        return function () {
          var t = y.now();
          u || !1 !== r.leading || (u = t);
          var e = i - (t - u);
          return (
            (o = this),
            (a = arguments),
            e <= 0 || i < e
              ? (l && (clearTimeout(l), (l = null)),
                (u = t),
                (s = n.apply(o, a)),
                l || (o = a = null))
              : l || !1 === r.trailing || (l = setTimeout(c, e)),
            s
          );
        };
      }),
      (y.debounce = function (e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = function () {
            var t = y.now() - s;
            t < n && 0 <= t
              ? (r = setTimeout(u, n - t))
              : ((r = null), i || ((l = e.apply(a, o)), r || (a = o = null)));
          };
        return function () {
          (a = this), (o = arguments), (s = y.now());
          var t = i && !r;
          return (
            r || (r = setTimeout(u, n)),
            t && ((l = e.apply(a, o)), (a = o = null)),
            l
          );
        };
      }),
      (y.wrap = function (t, e) {
        return y.partial(e, t);
      }),
      (y.negate = function (t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }),
      (y.compose = function () {
        var n = arguments,
          i = n.length - 1;
        return function () {
          for (var t = i, e = n[i].apply(this, arguments); t--; )
            e = n[t].call(this, e);
          return e;
        };
      }),
      (y.after = function (t, e) {
        return function () {
          if (--t < 1) return e.apply(this, arguments);
        };
      }),
      (y.before = function (t, e) {
        var n;
        return function () {
          return (
            0 < --t && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
          );
        };
      }),
      (y.once = y.partial(y.before, 2));
    var j = !{ toString: null }.propertyIsEnumerable("toString"),
      N = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ];
    (y.keys = function (t) {
      if (!y.isObject(t)) return [];
      if (p) return p(t);
      var e = [];
      for (var n in t) y.has(t, n) && e.push(n);
      return j && i(t, e), e;
    }),
      (y.allKeys = function (t) {
        if (!y.isObject(t)) return [];
        var e = [];
        for (var n in t) e.push(n);
        return j && i(t, e), e;
      }),
      (y.values = function (t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
          i[r] = t[e[r]];
        return i;
      }),
      (y.mapObject = function (t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = r.length, a = {}, s = 0; s < o; s++)
          a[(i = r[s])] = e(t[i], i, t);
        return a;
      }),
      (y.pairs = function (t) {
        for (var e = y.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++)
          i[r] = [e[r], t[e[r]]];
        return i;
      }),
      (y.invert = function (t) {
        for (var e = {}, n = y.keys(t), i = 0, r = n.length; i < r; i++)
          e[t[n[i]]] = n[i];
        return e;
      }),
      (y.functions = y.methods =
        function (t) {
          var e = [];
          for (var n in t) y.isFunction(t[n]) && e.push(n);
          return e.sort();
        }),
      (y.extend = _(y.allKeys)),
      (y.extendOwn = y.assign = _(y.keys)),
      (y.findKey = function (t, e, n) {
        e = w(e, n);
        for (var i, r = y.keys(t), o = 0, a = r.length; o < a; o++)
          if (e(t[(i = r[o])], i, t)) return i;
      }),
      (y.pick = function (t, e, n) {
        var i,
          r,
          o = {},
          a = t;
        if (null == a) return o;
        y.isFunction(e)
          ? ((r = y.allKeys(a)), (i = b(e, n)))
          : ((r = k(arguments, !1, !1, 1)),
            (i = function (t, e, n) {
              return e in n;
            }),
            (a = Object(a)));
        for (var s = 0, l = r.length; s < l; s++) {
          var u = r[s],
            c = a[u];
          i(c, u, a) && (o[u] = c);
        }
        return o;
      }),
      (y.omit = function (t, e, n) {
        if (y.isFunction(e)) e = y.negate(e);
        else {
          var i = y.map(k(arguments, !1, !1, 1), String);
          e = function (t, e) {
            return !y.contains(i, e);
          };
        }
        return y.pick(t, e, n);
      }),
      (y.defaults = _(y.allKeys, !0)),
      (y.create = function (t, e) {
        var n = x(t);
        return e && y.extendOwn(n, e), n;
      }),
      (y.clone = function (t) {
        return y.isObject(t) ? (y.isArray(t) ? t.slice() : y.extend({}, t)) : t;
      }),
      (y.tap = function (t, e) {
        return e(t), t;
      }),
      (y.isMatch = function (t, e) {
        var n = y.keys(e),
          i = n.length;
        if (null == t) return !i;
        for (var r = Object(t), o = 0; o < i; o++) {
          var a = n[o];
          if (e[a] !== r[a] || !(a in r)) return !1;
        }
        return !0;
      });
    var I = function (t, e, n, i) {
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e) return t === e;
      t instanceof y && (t = t._wrapped), e instanceof y && (e = e._wrapped);
      var r = d.call(t);
      if (r !== d.call(e)) return !1;
      switch (r) {
        case "[object RegExp]":
        case "[object String]":
          return "" + t == "" + e;
        case "[object Number]":
          return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
        case "[object Date]":
        case "[object Boolean]":
          return +t == +e;
      }
      var o = "[object Array]" === r;
      if (!o) {
        if ("object" != typeof t || "object" != typeof e) return !1;
        var a = t.constructor,
          s = e.constructor;
        if (
          a !== s &&
          !(
            y.isFunction(a) &&
            a instanceof a &&
            y.isFunction(s) &&
            s instanceof s
          ) &&
          "constructor" in t &&
          "constructor" in e
        )
          return !1;
      }
      i = i || [];
      for (var l = (n = n || []).length; l--; )
        if (n[l] === t) return i[l] === e;
      if ((n.push(t), i.push(e), o)) {
        if ((l = t.length) !== e.length) return !1;
        for (; l--; ) if (!I(t[l], e[l], n, i)) return !1;
      } else {
        var u,
          c = y.keys(t);
        if (((l = c.length), y.keys(e).length !== l)) return !1;
        for (; l--; )
          if (((u = c[l]), !y.has(e, u) || !I(t[u], e[u], n, i))) return !1;
      }
      return n.pop(), i.pop(), !0;
    };
    (y.isEqual = function (t, e) {
      return I(t, e);
    }),
      (y.isEmpty = function (t) {
        return (
          null == t ||
          (D(t) && (y.isArray(t) || y.isString(t) || y.isArguments(t))
            ? 0 === t.length
            : 0 === y.keys(t).length)
        );
      }),
      (y.isElement = function (t) {
        return !(!t || 1 !== t.nodeType);
      }),
      (y.isArray =
        h ||
        function (t) {
          return "[object Array]" === d.call(t);
        }),
      (y.isObject = function (t) {
        var e = typeof t;
        return "function" === e || ("object" === e && !!t);
      }),
      y.each(
        [
          "Arguments",
          "Function",
          "String",
          "Number",
          "Date",
          "RegExp",
          "Error",
        ],
        function (e) {
          y["is" + e] = function (t) {
            return d.call(t) === "[object " + e + "]";
          };
        }
      ),
      y.isArguments(arguments) ||
        (y.isArguments = function (t) {
          return y.has(t, "callee");
        }),
      "function" != typeof /./ &&
        "object" != typeof Int8Array &&
        (y.isFunction = function (t) {
          return "function" == typeof t || !1;
        }),
      (y.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t));
      }),
      (y.isNaN = function (t) {
        return y.isNumber(t) && t !== +t;
      }),
      (y.isBoolean = function (t) {
        return !0 === t || !1 === t || "[object Boolean]" === d.call(t);
      }),
      (y.isNull = function (t) {
        return null === t;
      }),
      (y.isUndefined = function (t) {
        return void 0 === t;
      }),
      (y.has = function (t, e) {
        return null != t && f.call(t, e);
      }),
      (y.noConflict = function () {
        return (r._ = o), this;
      }),
      (y.identity = function (t) {
        return t;
      }),
      (y.constant = function (t) {
        return function () {
          return t;
        };
      }),
      (y.noop = function () {}),
      (y.property = C),
      (y.propertyOf = function (e) {
        return null == e
          ? function () {}
          : function (t) {
              return e[t];
            };
      }),
      (y.matcher = y.matches =
        function (e) {
          return (
            (e = y.extendOwn({}, e)),
            function (t) {
              return y.isMatch(t, e);
            }
          );
        }),
      (y.times = function (t, e, n) {
        var i = Array(Math.max(0, t));
        e = b(e, n, 1);
        for (var r = 0; r < t; r++) i[r] = e(r);
        return i;
      }),
      (y.random = function (t, e) {
        return (
          null == e && ((e = t), (t = 0)),
          t + Math.floor(Math.random() * (e - t + 1))
        );
      }),
      (y.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var F = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      $ = y.invert(F),
      L = function (e) {
        var n = function (t) {
            return e[t];
          },
          t = "(?:" + y.keys(e).join("|") + ")",
          i = RegExp(t),
          r = RegExp(t, "g");
        return function (t) {
          return (t = null == t ? "" : "" + t), i.test(t) ? t.replace(r, n) : t;
        };
      };
    (y.escape = L(F)),
      (y.unescape = L($)),
      (y.result = function (t, e, n) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(t) : i;
      });
    var O = 0;
    (y.uniqueId = function (t) {
      var e = ++O + "";
      return t ? t + e : e;
    }),
      (y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var P = /(.)^/,
      R = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      M = /\\|'|\r|\n|\u2028|\u2029/g,
      H = function (t) {
        return "\\" + R[t];
      };
    (y.template = function (o, t, e) {
      !t && e && (t = e), (t = y.defaults({}, t, y.templateSettings));
      var n = RegExp(
          [
            (t.escape || P).source,
            (t.interpolate || P).source,
            (t.evaluate || P).source,
          ].join("|") + "|$",
          "g"
        ),
        a = 0,
        s = "__p+='";
      o.replace(n, function (t, e, n, i, r) {
        return (
          (s += o.slice(a, r).replace(M, H)),
          (a = r + t.length),
          e
            ? (s += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'")
            : n
            ? (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
            : i && (s += "';\n" + i + "\n__p+='"),
          t
        );
      }),
        (s += "';\n"),
        t.variable || (s = "with(obj||{}){\n" + s + "}\n"),
        (s =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          s +
          "return __p;\n");
      try {
        var i = new Function(t.variable || "obj", "_", s);
      } catch (u) {
        throw ((u.source = s), u);
      }
      var r = function (t) {
          return i.call(this, t, y);
        },
        l = t.variable || "obj";
      return (r.source = "function(" + l + "){\n" + s + "}"), r;
    }),
      (y.chain = function (t) {
        var e = y(t);
        return (e._chain = !0), e;
      });
    var B = function (t, e) {
      return t._chain ? y(e).chain() : e;
    };
    (y.mixin = function (n) {
      y.each(y.functions(n), function (t) {
        var e = (y[t] = n[t]);
        y.prototype[t] = function () {
          var t = [this._wrapped];
          return u.apply(t, arguments), B(this, e.apply(y, t));
        };
      });
    }),
      y.mixin(y),
      y.each(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (e) {
          var n = a[e];
          y.prototype[e] = function () {
            var t = this._wrapped;
            return (
              n.apply(t, arguments),
              ("shift" !== e && "splice" !== e) ||
                0 !== t.length ||
                delete t[0],
              B(this, t)
            );
          };
        }
      ),
      y.each(["concat", "join", "slice"], function (t) {
        var e = a[t];
        y.prototype[t] = function () {
          return B(this, e.apply(this._wrapped, arguments));
        };
      }),
      (y.prototype.value = function () {
        return this._wrapped;
      }),
      (y.prototype.valueOf = y.prototype.toJSON = y.prototype.value),
      (y.prototype.toString = function () {
        return "" + this._wrapped;
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return y;
        });
  }.call(this);
var _slice = Array.prototype.slice,
  _slicedToArray = (function () {
    function n(t, e) {
      var n = [],
        i = !0,
        r = !1,
        o = undefined;
      try {
        for (
          var a, s = t[Symbol.iterator]();
          !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e);
          i = !0
        );
      } catch (l) {
        (r = !0), (o = l);
      } finally {
        try {
          !i && s["return"] && s["return"]();
        } finally {
          if (r) throw o;
        }
      }
      return n;
    }
    return function (t, e) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return n(t, e);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  })(),
  _extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
      return t;
    };
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : (t.parsley = e(t.jQuery));
})(this, function (d) {
  "use strict";
  function r(e, n) {
    return (
      e.parsleyAdaptedCallback ||
        (e.parsleyAdaptedCallback = function () {
          var t = Array.prototype.slice.call(arguments, 0);
          t.unshift(this), e.apply(n || F, t);
        }),
      e.parsleyAdaptedCallback
    );
  }
  function o(t) {
    return 0 === t.lastIndexOf(L, 0) ? t.substr(L.length) : t;
  }
  function t() {
    var i = this,
      r = window || global;
    _extends(this, {
      isNativeEvent: function e(t) {
        return t.originalEvent && !1 !== t.originalEvent.isTrusted;
      },
      fakeInputEvent: function n(t) {
        i.isNativeEvent(t) && d(t.target).trigger("input");
      },
      misbehaves: function o(t) {
        i.isNativeEvent(t) &&
          (i.behavesOk(t),
          d(document).on(
            "change.inputevent",
            t.data.selector,
            i.fakeInputEvent
          ),
          i.fakeInputEvent(t));
      },
      behavesOk: function a(t) {
        i.isNativeEvent(t) &&
          d(document)
            .off("input.inputevent", t.data.selector, i.behavesOk)
            .off("change.inputevent", t.data.selector, i.misbehaves);
      },
      install: function s() {
        if (!r.inputEventPatched) {
          r.inputEventPatched = "0.0.3";
          for (
            var t = [
                "select",
                'input[type="checkbox"]',
                'input[type="radio"]',
                'input[type="file"]',
              ],
              e = 0;
            e < t.length;
            e++
          ) {
            var n = t[e];
            d(document)
              .on("input.inputevent", n, { selector: n }, i.behavesOk)
              .on("change.inputevent", n, { selector: n }, i.misbehaves);
          }
        }
      },
      uninstall: function t() {
        delete r.inputEventPatched, d(document).off(".inputevent");
      },
    });
  }
  var n,
    e = 1,
    i = {},
    u = {
      attr: function O(t, e, n) {
        var i,
          r,
          o,
          a = new RegExp("^" + e, "i");
        if (void 0 === n) n = {};
        else for (i in n) n.hasOwnProperty(i) && delete n[i];
        if (!t) return n;
        for (i = (o = t.attributes).length; i--; )
          (r = o[i]) &&
            r.specified &&
            a.test(r.name) &&
            (n[this.camelize(r.name.slice(e.length))] = this.deserializeValue(
              r.value
            ));
        return n;
      },
      checkAttr: function P(t, e, n) {
        return t.hasAttribute(e + n);
      },
      setAttr: function R(t, e, n, i) {
        t.setAttribute(this.dasherize(e + n), String(i));
      },
      getType: function M(t) {
        return t.getAttribute("type") || "text";
      },
      generateID: function H() {
        return "" + e++;
      },
      deserializeValue: function B(t) {
        var e;
        try {
          return t
            ? "true" == t ||
                ("false" != t &&
                  ("null" == t
                    ? null
                    : isNaN((e = Number(t)))
                    ? /^[\[\{]/.test(t)
                      ? JSON.parse(t)
                      : t
                    : e))
            : t;
        } catch (n) {
          return t;
        }
      },
      camelize: function W(t) {
        return t.replace(/-+(.)?/g, function (t, e) {
          return e ? e.toUpperCase() : "";
        });
      },
      dasherize: function q(t) {
        return t
          .replace(/::/g, "/")
          .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
          .replace(/([a-z\d])([A-Z])/g, "$1_$2")
          .replace(/_/g, "-")
          .toLowerCase();
      },
      warn: function U() {
        var t;
        window.console &&
          "function" == typeof window.console.warn &&
          (t = window.console).warn.apply(t, arguments);
      },
      warnOnce: function V(t) {
        i[t] || ((i[t] = !0), this.warn.apply(this, arguments));
      },
      _resetWarnings: function z() {
        i = {};
      },
      trimString: function X(t) {
        return t.replace(/^\s+|\s+$/g, "");
      },
      parse: {
        date: function t(e) {
          var n = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
          if (!n) return null;
          var i = n.map(function (t) {
              return parseInt(t, 10);
            }),
            r = _slicedToArray(i, 4),
            o = (r[0], r[1]),
            a = r[2],
            s = r[3],
            t = new Date(o, a - 1, s);
          return t.getFullYear() !== o ||
            t.getMonth() + 1 !== a ||
            t.getDate() !== s
            ? null
            : t;
        },
        string: function J(t) {
          return t;
        },
        integer: function G(t) {
          return isNaN(t) ? null : parseInt(t, 10);
        },
        number: function Y(t) {
          if (isNaN(t)) throw null;
          return parseFloat(t);
        },
        boolean: function K(t) {
          return !/^\s*false\s*$/i.test(t);
        },
        object: function Q(t) {
          return u.deserializeValue(t);
        },
        regexp: function Z(t) {
          var e = "";
          return (
            /^\/.*\/(?:[gimy]*)$/.test(t)
              ? ((e = t.replace(/.*\/([gimy]*)$/, "$1")),
                (t = t.replace(new RegExp("^/(.*?)/" + e + "$"), "$1")))
              : (t = "^" + t + "$"),
            new RegExp(t, e)
          );
        },
      },
      parseRequirement: function tt(t, e) {
        var n = this.parse[t || "string"];
        if (!n) throw 'Unknown requirement specification: "' + t + '"';
        var i = n(e);
        if (null === i) throw "Requirement is not a " + t + ': "' + e + '"';
        return i;
      },
      namespaceEvents: function et(t, e) {
        return (t = this.trimString(t || "").split(/\s+/))[0]
          ? d
              .map(t, function (t) {
                return t + "." + e;
              })
              .join(" ")
          : "";
      },
      difference: function nt(t, n) {
        var i = [];
        return (
          d.each(t, function (t, e) {
            -1 == n.indexOf(e) && i.push(e);
          }),
          i
        );
      },
      all: function it(t) {
        return d.when.apply(d, _toConsumableArray(t).concat([42, 42]));
      },
      objectCreate:
        Object.create ||
        ((n = function n() {}),
        function (t) {
          if (1 < arguments.length)
            throw Error("Second argument not supported");
          if ("object" != typeof t)
            throw TypeError("Argument must be an object");
          n.prototype = t;
          var e = new n();
          return (n.prototype = null), e;
        }),
      _SubmitSelector: 'input[type="submit"], button:submit',
    },
    a = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded:
        "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      multiple: null,
      group: null,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      triggerAfterFailure: "input",
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function rt() {},
      errorsContainer: function ot() {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>",
    },
    s = function s() {
      this.__id__ = u.generateID();
    };
  s.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function at() {
      var e = this,
        n = function n() {
          var t = d.Deferred();
          return !0 !== e.validationResult && t.reject(), t.resolve().promise();
        };
      return [n, n];
    },
    actualizeOptions: function st() {
      return (
        u.attr(this.element, this.options.namespace, this.domOptions),
        this.parent &&
          this.parent.actualizeOptions &&
          this.parent.actualizeOptions(),
        this
      );
    },
    _resetOptions: function lt(t) {
      for (var e in ((this.domOptions = u.objectCreate(this.parent.options)),
      (this.options = u.objectCreate(this.domOptions)),
      t))
        t.hasOwnProperty(e) && (this.options[e] = t[e]);
      this.actualizeOptions();
    },
    _listeners: null,
    on: function ut(t, e) {
      return (
        (this._listeners = this._listeners || {}),
        (this._listeners[t] = this._listeners[t] || []).push(e),
        this
      );
    },
    subscribe: function ct(t, e) {
      d.listenTo(this, t.toLowerCase(), e);
    },
    off: function dt(t, e) {
      var n = this._listeners && this._listeners[t];
      if (n)
        if (e) for (var i = n.length; i--; ) n[i] === e && n.splice(i, 1);
        else delete this._listeners[t];
      return this;
    },
    unsubscribe: function ft(t) {
      d.unsubscribeTo(this, t.toLowerCase());
    },
    trigger: function ht(t, e, n) {
      e = e || this;
      var i,
        r = this._listeners && this._listeners[t];
      if (r)
        for (var o = r.length; o--; )
          if (!1 === (i = r[o].call(e, e, n))) return i;
      return !this.parent || this.parent.trigger(t, e, n);
    },
    asyncIsValid: function pt(t, e) {
      return (
        u.warnOnce("asyncIsValid is deprecated; please use whenValid instead"),
        this.whenValid({ group: t, force: e })
      );
    },
    _findRelated: function mt() {
      return this.options.multiple
        ? d(
            this.parent.element.querySelectorAll(
              "[" +
                this.options.namespace +
                'multiple="' +
                this.options.multiple +
                '"]'
            )
          )
        : this.$element;
    },
  };
  var l = function l(t, e) {
      var n = t.match(/^\s*\[(.*)\]\s*$/);
      if (!n) throw 'Requirement is not an array: "' + t + '"';
      var i = n[1].split(",").map(u.trimString);
      if (i.length !== e)
        throw (
          "Requirement has " + i.length + " values when " + e + " are needed"
        );
      return i;
    },
    c = function c(t, e, n) {
      var i = null,
        r = {};
      for (var o in t)
        if (o) {
          var a = n(o);
          "string" == typeof a && (a = u.parseRequirement(t[o], a)), (r[o] = a);
        } else i = u.parseRequirement(t[o], e);
      return [i, r];
    },
    f = function f(t) {
      d.extend(!0, this, t);
    };
  f.prototype = {
    validate: function gt(t, e) {
      if (this.fn)
        return (
          3 < arguments.length && (e = [].slice.call(arguments, 1, -1)),
          this.fn(t, e)
        );
      if (Array.isArray(t)) {
        if (!this.validateMultiple)
          throw "Validator `" + this.name + "` does not handle multiple values";
        return this.validateMultiple.apply(this, arguments);
      }
      var n = arguments[arguments.length - 1];
      if (this.validateDate && n._isDateInput())
        return (
          (arguments[0] = u.parse.date(arguments[0])),
          null !== arguments[0] && this.validateDate.apply(this, arguments)
        );
      if (this.validateNumber)
        return (
          !isNaN(t) &&
          ((arguments[0] = parseFloat(arguments[0])),
          this.validateNumber.apply(this, arguments))
        );
      if (this.validateString)
        return this.validateString.apply(this, arguments);
      throw "Validator `" + this.name + "` only handles multiple values";
    },
    parseRequirements: function vt(t, e) {
      if ("string" != typeof t) return Array.isArray(t) ? t : [t];
      var n = this.requirementType;
      if (Array.isArray(n)) {
        for (var i = l(t, n.length), r = 0; r < i.length; r++)
          i[r] = u.parseRequirement(n[r], i[r]);
        return i;
      }
      return d.isPlainObject(n) ? c(n, t, e) : [u.parseRequirement(n, t)];
    },
    requirementType: "string",
    priority: 2,
  };
  var h = function h(t, e) {
      (this.__class__ = "ValidatorRegistry"),
        (this.locale = "en"),
        this.init(t || {}, e || {});
    },
    p = {
      email:
        /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
      number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
      integer: /^-?\d+$/,
      digits: /^\d+$/,
      alphanum: /^\w+$/i,
      date: {
        test: function yt(t) {
          return null !== u.parse.date(t);
        },
      },
      url: new RegExp(
        "^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$"
      ),
    };
  p.range = p.number;
  var m = function m(t) {
      var e = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
      return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
    },
    g = function g(t, e) {
      return e.map(u.parse[t]);
    },
    v = function v(r, o) {
      return function (t) {
        for (
          var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          n[i - 1] = arguments[i];
        return (
          n.pop(), o.apply(undefined, [t].concat(_toConsumableArray(g(r, n))))
        );
      };
    },
    y = function y(t) {
      return {
        validateDate: v("date", t),
        validateNumber: v("number", t),
        requirementType: t.length <= 2 ? "string" : ["string", "string"],
        priority: 30,
      };
    };
  h.prototype = {
    init: function bt(t, e) {
      for (var n in ((this.catalog = e),
      (this.validators = _extends({}, this.validators)),
      t))
        this.addValidator(n, t[n].fn, t[n].priority);
      window.Parsley.trigger("parsley:validator:init");
    },
    setLocale: function wt(t) {
      if ("undefined" == typeof this.catalog[t])
        throw new Error(t + " is not available in the catalog");
      return (this.locale = t), this;
    },
    addCatalog: function _t(t, e, n) {
      return (
        "object" == typeof e && (this.catalog[t] = e),
        !0 === n ? this.setLocale(t) : this
      );
    },
    addMessage: function xt(t, e, n) {
      return (
        "undefined" == typeof this.catalog[t] && (this.catalog[t] = {}),
        (this.catalog[t][e] = n),
        this
      );
    },
    addMessages: function Ct(t, e) {
      for (var n in e) this.addMessage(t, n, e[n]);
      return this;
    },
    addValidator: function St(t) {
      if (this.validators[t])
        u.warn('Validator "' + t + '" is already defined.');
      else if (a.hasOwnProperty(t))
        return void u.warn(
          '"' +
            t +
            '" is a restricted keyword and is not a valid validator name.'
        );
      return this._setValidator.apply(this, arguments);
    },
    hasValidator: function Tt(t) {
      return !!this.validators[t];
    },
    updateValidator: function Dt(t) {
      return this.validators[t]
        ? this._setValidator.apply(this, arguments)
        : (u.warn('Validator "' + t + '" is not already defined.'),
          this.addValidator.apply(this, arguments));
    },
    removeValidator: function Et(t) {
      return (
        this.validators[t] || u.warn('Validator "' + t + '" is not defined.'),
        delete this.validators[t],
        this
      );
    },
    _setValidator: function kt(t, e, n) {
      for (var i in ("object" != typeof e && (e = { fn: e, priority: n }),
      e.validate || (e = new f(e)),
      (this.validators[t] = e).messages || {}))
        this.addMessage(i, t, e.messages[i]);
      return this;
    },
    getErrorMessage: function At(t) {
      var e;
      "type" === t.name
        ? (e = (this.catalog[this.locale][t.name] || {})[t.requirements])
        : (e = this.formatMessage(
            this.catalog[this.locale][t.name],
            t.requirements
          ));
      return (
        e ||
        this.catalog[this.locale].defaultMessage ||
        this.catalog.en.defaultMessage
      );
    },
    formatMessage: function jt(t, e) {
      if ("object" != typeof e)
        return "string" == typeof t ? t.replace(/%s/i, e) : "";
      for (var n in e) t = this.formatMessage(t, e[n]);
      return t;
    },
    validators: {
      notblank: {
        validateString: function Nt(t) {
          return /\S/.test(t);
        },
        priority: 2,
      },
      required: {
        validateMultiple: function It(t) {
          return 0 < t.length;
        },
        validateString: function Nt(t) {
          return /\S/.test(t);
        },
        priority: 512,
      },
      type: {
        validateString: function Nt(t, e, n) {
          var i = arguments.length <= 2 || n === undefined ? {} : arguments[2],
            r = i.step,
            o = r === undefined ? "any" : r,
            a = i.base,
            s = a === undefined ? 0 : a,
            l = p[e];
          if (!l)
            throw new Error("validator type `" + e + "` is not supported");
          if (!l.test(t)) return !1;
          if ("number" === e && !/^any$/i.test(o || "")) {
            var u = Number(t),
              c = Math.max(m(o), m(s));
            if (m(u) > c) return !1;
            var d = function d(t) {
              return Math.round(t * Math.pow(10, c));
            };
            if ((d(u) - d(s)) % d(o) != 0) return !1;
          }
          return !0;
        },
        requirementType: { "": "string", step: "string", base: "number" },
        priority: 256,
      },
      pattern: {
        validateString: function Nt(t, e) {
          return e.test(t);
        },
        requirementType: "regexp",
        priority: 64,
      },
      minlength: {
        validateString: function Nt(t, e) {
          return t.length >= e;
        },
        requirementType: "integer",
        priority: 30,
      },
      maxlength: {
        validateString: function Nt(t, e) {
          return t.length <= e;
        },
        requirementType: "integer",
        priority: 30,
      },
      length: {
        validateString: function Nt(t, e, n) {
          return t.length >= e && t.length <= n;
        },
        requirementType: ["integer", "integer"],
        priority: 30,
      },
      mincheck: {
        validateMultiple: function It(t, e) {
          return t.length >= e;
        },
        requirementType: "integer",
        priority: 30,
      },
      maxcheck: {
        validateMultiple: function It(t, e) {
          return t.length <= e;
        },
        requirementType: "integer",
        priority: 30,
      },
      check: {
        validateMultiple: function It(t, e, n) {
          return t.length >= e && t.length <= n;
        },
        requirementType: ["integer", "integer"],
        priority: 30,
      },
      min: y(function (t, e) {
        return e <= t;
      }),
      max: y(function (t, e) {
        return t <= e;
      }),
      range: y(function (t, e, n) {
        return e <= t && t <= n;
      }),
      equalto: {
        validateString: function Nt(t, e) {
          var n = d(e);
          return n.length ? t === n.val() : t === e;
        },
        priority: 256,
      },
    },
  };
  var b = {},
    w = function w(t, e, n) {
      for (var i = [], r = [], o = 0; o < t.length; o++) {
        for (var a = !1, s = 0; s < e.length; s++)
          if (t[o].assert.name === e[s].assert.name) {
            a = !0;
            break;
          }
        a ? r.push(t[o]) : i.push(t[o]);
      }
      return { kept: r, added: i, removed: n ? [] : w(e, t, !0).added };
    };
  (b.Form = {
    _actualizeTriggers: function Ft() {
      var e = this;
      this.$element.on("submit.Parsley", function (t) {
        e.onSubmitValidate(t);
      }),
        this.$element.on("click.Parsley", u._SubmitSelector, function (t) {
          e.onSubmitButton(t);
        }),
        !1 !== this.options.uiEnabled &&
          this.element.setAttribute("novalidate", "");
    },
    focus: function $t() {
      if (
        !(this._focusedField = null) === this.validationResult ||
        "none" === this.options.focus
      )
        return null;
      for (var t = 0; t < this.fields.length; t++) {
        var e = this.fields[t];
        if (
          !0 !== e.validationResult &&
          0 < e.validationResult.length &&
          "undefined" == typeof e.options.noFocus &&
          ((this._focusedField = e.$element), "first" === this.options.focus)
        )
          break;
      }
      return null === this._focusedField ? null : this._focusedField.focus();
    },
    _destroyUI: function Lt() {
      this.$element.off(".Parsley");
    },
  }),
    (b.Field = {
      _reflowUI: function Ot() {
        if ((this._buildUI(), this._ui)) {
          var t = w(this.validationResult, this._ui.lastValidationResult);
          (this._ui.lastValidationResult = this.validationResult),
            this._manageStatusClass(),
            this._manageErrorsMessages(t),
            this._actualizeTriggers(),
            (!t.kept.length && !t.added.length) ||
              this._failedOnce ||
              ((this._failedOnce = !0), this._actualizeTriggers());
        }
      },
      getErrorsMessages: function Pt() {
        if (!0 === this.validationResult) return [];
        for (var t = [], e = 0; e < this.validationResult.length; e++)
          t.push(
            this.validationResult[e].errorMessage ||
              this._getErrorMessage(this.validationResult[e].assert)
          );
        return t;
      },
      addError: function Rt(t, e) {
        var n = arguments.length <= 1 || e === undefined ? {} : arguments[1],
          i = n.message,
          r = n.assert,
          o = n.updateClass,
          a = o === undefined || o;
        this._buildUI(),
          this._addError(t, { message: i, assert: r }),
          a && this._errorClass();
      },
      updateError: function Mt(t, e) {
        var n = arguments.length <= 1 || e === undefined ? {} : arguments[1],
          i = n.message,
          r = n.assert,
          o = n.updateClass,
          a = o === undefined || o;
        this._buildUI(),
          this._updateError(t, { message: i, assert: r }),
          a && this._errorClass();
      },
      removeError: function Ht(t, e) {
        var n = (arguments.length <= 1 || e === undefined ? {} : arguments[1])
            .updateClass,
          i = n === undefined || n;
        this._buildUI(), this._removeError(t), i && this._manageStatusClass();
      },
      _manageStatusClass: function Bt() {
        this.hasConstraints() &&
        this.needsValidation() &&
        !0 === this.validationResult
          ? this._successClass()
          : 0 < this.validationResult.length
          ? this._errorClass()
          : this._resetClass();
      },
      _manageErrorsMessages: function Wt(t) {
        if ("undefined" == typeof this.options.errorsMessagesDisabled) {
          if ("undefined" != typeof this.options.errorMessage)
            return t.added.length || t.kept.length
              ? (this._insertErrorWrapper(),
                0 ===
                  this._ui.$errorsWrapper.find(".parsley-custom-error-message")
                    .length &&
                  this._ui.$errorsWrapper.append(
                    d(this.options.errorTemplate).addClass(
                      "parsley-custom-error-message"
                    )
                  ),
                this._ui.$errorsWrapper
                  .addClass("filled")
                  .find(".parsley-custom-error-message")
                  .html(this.options.errorMessage))
              : this._ui.$errorsWrapper
                  .removeClass("filled")
                  .find(".parsley-custom-error-message")
                  .remove();
          for (var e = 0; e < t.removed.length; e++)
            this._removeError(t.removed[e].assert.name);
          for (e = 0; e < t.added.length; e++)
            this._addError(t.added[e].assert.name, {
              message: t.added[e].errorMessage,
              assert: t.added[e].assert,
            });
          for (e = 0; e < t.kept.length; e++)
            this._updateError(t.kept[e].assert.name, {
              message: t.kept[e].errorMessage,
              assert: t.kept[e].assert,
            });
        }
      },
      _addError: function qt(t, e) {
        var n = e.message,
          i = e.assert;
        this._insertErrorWrapper(),
          this._ui.$errorClassHandler.attr(
            "aria-describedby",
            this._ui.errorsWrapperId
          ),
          this._ui.$errorsWrapper.addClass("filled").append(
            d(this.options.errorTemplate)
              .addClass("parsley-" + t)
              .html(n || this._getErrorMessage(i))
          );
      },
      _updateError: function Ut(t, e) {
        var n = e.message,
          i = e.assert;
        this._ui.$errorsWrapper
          .addClass("filled")
          .find(".parsley-" + t)
          .html(n || this._getErrorMessage(i));
      },
      _removeError: function Vt(t) {
        this._ui.$errorClassHandler.removeAttr("aria-describedby"),
          this._ui.$errorsWrapper
            .removeClass("filled")
            .find(".parsley-" + t)
            .remove();
      },
      _getErrorMessage: function zt(t) {
        var e = t.name + "Message";
        return "undefined" != typeof this.options[e]
          ? window.Parsley.formatMessage(this.options[e], t.requirements)
          : window.Parsley.getErrorMessage(t);
      },
      _buildUI: function Xt() {
        if (!this._ui && !1 !== this.options.uiEnabled) {
          var t = {};
          this.element.setAttribute(this.options.namespace + "id", this.__id__),
            (t.$errorClassHandler = this._manageClassHandler()),
            (t.errorsWrapperId =
              "parsley-id-" +
              (this.options.multiple
                ? "multiple-" + this.options.multiple
                : this.__id__)),
            (t.$errorsWrapper = d(this.options.errorsWrapper).attr(
              "id",
              t.errorsWrapperId
            )),
            (t.lastValidationResult = []),
            (t.validationInformationVisible = !1),
            (this._ui = t);
        }
      },
      _manageClassHandler: function Jt() {
        if (
          "string" == typeof this.options.classHandler &&
          d(this.options.classHandler).length
        )
          return d(this.options.classHandler);
        var t = this.options.classHandler;
        if (
          ("string" == typeof this.options.classHandler &&
            "function" == typeof window[this.options.classHandler] &&
            (t = window[this.options.classHandler]),
          "function" == typeof t)
        ) {
          var e = t.call(this, this);
          if (void 0 !== e && e.length) return e;
        } else {
          if ("object" == typeof t && t instanceof jQuery && t.length) return t;
          t &&
            u.warn(
              "The class handler `" +
                t +
                "` does not exist in DOM nor as a global JS function"
            );
        }
        return this._inputHolder();
      },
      _inputHolder: function Gt() {
        return this.options.multiple && "SELECT" !== this.element.nodeName
          ? this.$element.parent()
          : this.$element;
      },
      _insertErrorWrapper: function Yt() {
        var t = this.options.errorsContainer;
        if (0 !== this._ui.$errorsWrapper.parent().length)
          return this._ui.$errorsWrapper.parent();
        if ("string" == typeof t) {
          if (d(t).length) return d(t).append(this._ui.$errorsWrapper);
          "function" == typeof window[t]
            ? (t = window[t])
            : u.warn(
                "The errors container `" +
                  t +
                  "` does not exist in DOM nor as a global JS function"
              );
        }
        return (
          "function" == typeof t && (t = t.call(this, this)),
          "object" == typeof t && t.length
            ? t.append(this._ui.$errorsWrapper)
            : this._inputHolder().after(this._ui.$errorsWrapper)
        );
      },
      _actualizeTriggers: function Ft() {
        var t,
          e = this,
          n = this._findRelated();
        n.off(".Parsley"),
          this._failedOnce
            ? n.on(
                u.namespaceEvents(this.options.triggerAfterFailure, "Parsley"),
                function () {
                  e._validateIfNeeded();
                }
              )
            : (t = u.namespaceEvents(this.options.trigger, "Parsley")) &&
              n.on(t, function (t) {
                e._validateIfNeeded(t);
              });
      },
      _validateIfNeeded: function Kt(t) {
        var e = this;
        (t &&
          /key|input/.test(t.type) &&
          (!this._ui || !this._ui.validationInformationVisible) &&
          this.getValue().length <= this.options.validationThreshold) ||
          (this.options.debounce
            ? (window.clearTimeout(this._debounced),
              (this._debounced = window.setTimeout(function () {
                return e.validate();
              }, this.options.debounce)))
            : this.validate());
      },
      _resetUI: function Qt() {
        (this._failedOnce = !1),
          this._actualizeTriggers(),
          "undefined" != typeof this._ui &&
            (this._ui.$errorsWrapper.removeClass("filled").children().remove(),
            this._resetClass(),
            (this._ui.lastValidationResult = []),
            (this._ui.validationInformationVisible = !1));
      },
      _destroyUI: function Lt() {
        this._resetUI(),
          "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(),
          delete this._ui;
      },
      _successClass: function Zt() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.errorClass)
            .addClass(this.options.successClass);
      },
      _errorClass: function te() {
        (this._ui.validationInformationVisible = !0),
          this._ui.$errorClassHandler
            .removeClass(this.options.successClass)
            .addClass(this.options.errorClass);
      },
      _resetClass: function ee() {
        this._ui.$errorClassHandler
          .removeClass(this.options.successClass)
          .removeClass(this.options.errorClass);
      },
    });
  var _ = function _(t, e, n) {
      (this.__class__ = "Form"),
        (this.element = t),
        (this.$element = d(t)),
        (this.domOptions = e),
        (this.options = n),
        (this.parent = window.Parsley),
        (this.fields = []),
        (this.validationResult = null);
    },
    x = { pending: null, resolved: !0, rejected: !1 };
  _.prototype = {
    onSubmitValidate: function ne(t) {
      var e = this;
      if (!0 !== t.parsley) {
        var n = this._submitSource || this.$element.find(u._SubmitSelector)[0];
        if (
          ((this._submitSource = null),
          this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !0),
          !n || null === n.getAttribute("formnovalidate"))
        ) {
          window.Parsley._remoteCache = {};
          var i = this.whenValidate({ event: t });
          ("resolved" === i.state() && !1 !== this._trigger("submit")) ||
            (t.stopImmediatePropagation(),
            t.preventDefault(),
            "pending" === i.state() &&
              i.done(function () {
                e._submit(n);
              }));
        }
      }
    },
    onSubmitButton: function ie(t) {
      this._submitSource = t.currentTarget;
    },
    _submit: function re(t) {
      if (!1 !== this._trigger("submit")) {
        if (t) {
          var e = this.$element
            .find(".parsley-synthetic-submit-button")
            .prop("disabled", !1);
          0 === e.length &&
            (e = d(
              '<input class="parsley-synthetic-submit-button" type="hidden">'
            ).appendTo(this.$element)),
            e.attr({
              name: t.getAttribute("name"),
              value: t.getAttribute("value"),
            });
        }
        this.$element.trigger(_extends(d.Event("submit"), { parsley: !0 }));
      }
    },
    validate: function gt(t) {
      if (1 <= arguments.length && !d.isPlainObject(t)) {
        u.warnOnce(
          "Calling validate on a parsley form without passing arguments as an object is deprecated."
        );
        var e = _slice.call(arguments);
        t = { group: e[0], force: e[1], event: e[2] };
      }
      return x[this.whenValidate(t).state()];
    },
    whenValidate: function oe(t) {
      var e,
        n = this,
        i = arguments.length <= 0 || t === undefined ? {} : arguments[0],
        r = i.group,
        o = i.force,
        a = i.event;
      (this.submitEvent = a) &&
        (this.submitEvent = _extends({}, a, {
          preventDefault: function l() {
            u.warnOnce(
              "Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"
            ),
              (n.validationResult = !1);
          },
        })),
        (this.validationResult = !0),
        this._trigger("validate"),
        this._refreshFields();
      var s = this._withoutReactualizingFormOptions(function () {
        return d.map(n.fields, function (t) {
          return t.whenValidate({ force: o, group: r });
        });
      });
      return (e = u
        .all(s)
        .done(function () {
          n._trigger("success");
        })
        .fail(function () {
          (n.validationResult = !1), n.focus(), n._trigger("error");
        })
        .always(function () {
          n._trigger("validated");
        })).pipe.apply(
        e,
        _toConsumableArray(this._pipeAccordingToValidationResult())
      );
    },
    isValid: function ae(t) {
      if (1 <= arguments.length && !d.isPlainObject(t)) {
        u.warnOnce(
          "Calling isValid on a parsley form without passing arguments as an object is deprecated."
        );
        var e = _slice.call(arguments);
        t = { group: e[0], force: e[1] };
      }
      return x[this.whenValid(t).state()];
    },
    whenValid: function se(t) {
      var e = this,
        n = arguments.length <= 0 || t === undefined ? {} : arguments[0],
        i = n.group,
        r = n.force;
      this._refreshFields();
      var o = this._withoutReactualizingFormOptions(function () {
        return d.map(e.fields, function (t) {
          return t.whenValid({ group: i, force: r });
        });
      });
      return u.all(o);
    },
    refresh: function le() {
      return this._refreshFields(), this;
    },
    reset: function ue() {
      for (var t = 0; t < this.fields.length; t++) this.fields[t].reset();
      this._trigger("reset");
    },
    destroy: function ce() {
      this._destroyUI();
      for (var t = 0; t < this.fields.length; t++) this.fields[t].destroy();
      this.$element.removeData("Parsley"), this._trigger("destroy");
    },
    _refreshFields: function de() {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function fe() {
      var r = this,
        t = this.fields;
      return (
        (this.fields = []),
        (this.fieldsMappedById = {}),
        this._withoutReactualizingFormOptions(function () {
          r.$element
            .find(r.options.inputs)
            .not(r.options.excluded)
            .each(function (t, e) {
              var n = new window.Parsley.Factory(e, {}, r);
              if (
                ("Field" === n.__class__ || "FieldMultiple" === n.__class__) &&
                !0 !== n.options.excluded
              ) {
                var i = n.__class__ + "-" + n.__id__;
                "undefined" == typeof r.fieldsMappedById[i] &&
                  ((r.fieldsMappedById[i] = n), r.fields.push(n));
              }
            }),
            d.each(u.difference(t, r.fields), function (t, e) {
              e.reset();
            });
        }),
        this
      );
    },
    _withoutReactualizingFormOptions: function he(t) {
      var e = this.actualizeOptions;
      this.actualizeOptions = function () {
        return this;
      };
      var n = t();
      return (this.actualizeOptions = e), n;
    },
    _trigger: function pe(t) {
      return this.trigger("form:" + t);
    },
  };
  var C = function C(t, e, n, i, r) {
      var o = window.Parsley._validatorRegistry.validators[e],
        a = new f(o);
      (i = i || t.options[e + "Priority"] || a.priority),
        _extends(this, {
          validator: a,
          name: e,
          requirements: n,
          priority: i,
          isDomConstraint: (r = !0 === r),
        }),
        this._parseRequirements(t.options);
    },
    S = function S(t) {
      return t[0].toUpperCase() + t.slice(1);
    };
  C.prototype = {
    validate: function gt(t, e) {
      var n;
      return (n = this.validator).validate.apply(
        n,
        [t].concat(_toConsumableArray(this.requirementList), [e])
      );
    },
    _parseRequirements: function me(e) {
      var n = this;
      this.requirementList = this.validator.parseRequirements(
        this.requirements,
        function (t) {
          return e[n.name + S(t)];
        }
      );
    },
  };
  var T = function T(t, e, n, i) {
      (this.__class__ = "Field"),
        (this.element = t),
        (this.$element = d(t)),
        void 0 !== i && (this.parent = i),
        (this.options = n),
        (this.domOptions = e),
        (this.constraints = []),
        (this.constraintsByName = {}),
        (this.validationResult = !0),
        this._bindConstraints();
    },
    D = { pending: null, resolved: !0, rejected: !1 };
  T.prototype = {
    validate: function gt(t) {
      1 <= arguments.length &&
        !d.isPlainObject(t) &&
        (u.warnOnce(
          "Calling validate on a parsley field without passing arguments as an object is deprecated."
        ),
        (t = { options: t }));
      var e = this.whenValidate(t);
      if (!e) return !0;
      switch (e.state()) {
        case "pending":
          return null;
        case "resolved":
          return !0;
        case "rejected":
          return this.validationResult;
      }
    },
    whenValidate: function oe(t) {
      var e,
        n = this,
        i = arguments.length <= 0 || t === undefined ? {} : arguments[0],
        r = i.force,
        o = i.group;
      if ((this.refresh(), !o || this._isInGroup(o)))
        return (
          (this.value = this.getValue()),
          this._trigger("validate"),
          (e = this.whenValid({ force: r, value: this.value, _refreshed: !0 })
            .always(function () {
              n._reflowUI();
            })
            .done(function () {
              n._trigger("success");
            })
            .fail(function () {
              n._trigger("error");
            })
            .always(function () {
              n._trigger("validated");
            })).pipe.apply(
            e,
            _toConsumableArray(this._pipeAccordingToValidationResult())
          )
        );
    },
    hasConstraints: function ge() {
      return 0 !== this.constraints.length;
    },
    needsValidation: function ve(t) {
      return (
        void 0 === t && (t = this.getValue()),
        !(
          !t.length &&
          !this._isRequired() &&
          "undefined" == typeof this.options.validateIfEmpty
        )
      );
    },
    _isInGroup: function ye(t) {
      return Array.isArray(this.options.group)
        ? -1 !== d.inArray(t, this.options.group)
        : this.options.group === t;
    },
    isValid: function ae(t) {
      if (1 <= arguments.length && !d.isPlainObject(t)) {
        u.warnOnce(
          "Calling isValid on a parsley field without passing arguments as an object is deprecated."
        );
        var e = _slice.call(arguments);
        t = { force: e[0], value: e[1] };
      }
      var n = this.whenValid(t);
      return !n || D[n.state()];
    },
    whenValid: function se(t) {
      var i = this,
        e = arguments.length <= 0 || t === undefined ? {} : arguments[0],
        n = e.force,
        r = n !== undefined && n,
        o = e.value,
        a = e.group;
      if ((e._refreshed || this.refresh(), !a || this._isInGroup(a))) {
        if (((this.validationResult = !0), !this.hasConstraints()))
          return d.when();
        if (
          (null == o && (o = this.getValue()),
          !this.needsValidation(o) && !0 !== r)
        )
          return d.when();
        var s = this._getGroupedConstraints(),
          l = [];
        return (
          d.each(s, function (t, e) {
            var n = u.all(
              d.map(e, function (t) {
                return i._validateConstraint(o, t);
              })
            );
            if ((l.push(n), "rejected" === n.state())) return !1;
          }),
          u.all(l)
        );
      }
    },
    _validateConstraint: function be(t, e) {
      var n = this,
        i = e.validate(t, this);
      return (
        !1 === i && (i = d.Deferred().reject()),
        u.all([i]).fail(function (t) {
          n.validationResult instanceof Array || (n.validationResult = []),
            n.validationResult.push({
              assert: e,
              errorMessage: "string" == typeof t && t,
            });
        })
      );
    },
    getValue: function we() {
      var t;
      return null ==
        (t =
          "function" == typeof this.options.value
            ? this.options.value(this)
            : "undefined" != typeof this.options.value
            ? this.options.value
            : this.$element.val())
        ? ""
        : this._handleWhitespace(t);
    },
    reset: function ue() {
      return this._resetUI(), this._trigger("reset");
    },
    destroy: function ce() {
      this._destroyUI(),
        this.$element.removeData("Parsley"),
        this.$element.removeData("FieldMultiple"),
        this._trigger("destroy");
    },
    refresh: function le() {
      return this._refreshConstraints(), this;
    },
    _refreshConstraints: function _e() {
      return this.actualizeOptions()._bindConstraints();
    },
    refreshConstraints: function xe() {
      return (
        u.warnOnce(
          "Parsley's refreshConstraints is deprecated. Please use refresh"
        ),
        this.refresh()
      );
    },
    addConstraint: function Ce(t, e, n, i) {
      if (window.Parsley._validatorRegistry.validators[t]) {
        var r = new C(this, t, e, n, i);
        "undefined" !== this.constraintsByName[r.name] &&
          this.removeConstraint(r.name),
          this.constraints.push(r),
          (this.constraintsByName[r.name] = r);
      }
      return this;
    },
    removeConstraint: function Se(t) {
      for (var e = 0; e < this.constraints.length; e++)
        if (t === this.constraints[e].name) {
          this.constraints.splice(e, 1);
          break;
        }
      return delete this.constraintsByName[t], this;
    },
    updateConstraint: function Te(t, e, n) {
      return this.removeConstraint(t).addConstraint(t, e, n);
    },
    _bindConstraints: function De() {
      for (var t = [], e = {}, n = 0; n < this.constraints.length; n++)
        !1 === this.constraints[n].isDomConstraint &&
          (t.push(this.constraints[n]),
          (e[this.constraints[n].name] = this.constraints[n]));
      for (var i in ((this.constraints = t),
      (this.constraintsByName = e),
      this.options))
        this.addConstraint(i, this.options[i], undefined, !0);
      return this._bindHtml5Constraints();
    },
    _bindHtml5Constraints: function Ee() {
      null !== this.element.getAttribute("required") &&
        this.addConstraint("required", !0, undefined, !0),
        null !== this.element.getAttribute("pattern") &&
          this.addConstraint(
            "pattern",
            this.element.getAttribute("pattern"),
            undefined,
            !0
          );
      var t = this.element.getAttribute("min"),
        e = this.element.getAttribute("max");
      null !== t && null !== e
        ? this.addConstraint("range", [t, e], undefined, !0)
        : null !== t
        ? this.addConstraint("min", t, undefined, !0)
        : null !== e && this.addConstraint("max", e, undefined, !0),
        null !== this.element.getAttribute("minlength") &&
        null !== this.element.getAttribute("maxlength")
          ? this.addConstraint(
              "length",
              [
                this.element.getAttribute("minlength"),
                this.element.getAttribute("maxlength"),
              ],
              undefined,
              !0
            )
          : null !== this.element.getAttribute("minlength")
          ? this.addConstraint(
              "minlength",
              this.element.getAttribute("minlength"),
              undefined,
              !0
            )
          : null !== this.element.getAttribute("maxlength") &&
            this.addConstraint(
              "maxlength",
              this.element.getAttribute("maxlength"),
              undefined,
              !0
            );
      var n = u.getType(this.element);
      return "number" === n
        ? this.addConstraint(
            "type",
            [
              "number",
              {
                step: this.element.getAttribute("step") || "1",
                base: t || this.element.getAttribute("value"),
              },
            ],
            undefined,
            !0
          )
        : /^(email|url|range|date)$/i.test(n)
        ? this.addConstraint("type", n, undefined, !0)
        : this;
    },
    _isRequired: function ke() {
      return (
        "undefined" != typeof this.constraintsByName.required &&
        !1 !== this.constraintsByName.required.requirements
      );
    },
    _trigger: function pe(t) {
      return this.trigger("field:" + t);
    },
    _handleWhitespace: function Ae(t) {
      return (
        !0 === this.options.trimValue &&
          u.warnOnce(
            'data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'
          ),
        "squish" === this.options.whitespace && (t = t.replace(/\s{2,}/g, " ")),
        ("trim" !== this.options.whitespace &&
          "squish" !== this.options.whitespace &&
          !0 !== this.options.trimValue) ||
          (t = u.trimString(t)),
        t
      );
    },
    _isDateInput: function je() {
      var t = this.constraintsByName.type;
      return t && "date" === t.requirements;
    },
    _getGroupedConstraints: function Ne() {
      if (!1 === this.options.priorityEnabled) return [this.constraints];
      for (var t = [], e = {}, n = 0; n < this.constraints.length; n++) {
        var i = this.constraints[n].priority;
        e[i] || t.push((e[i] = [])), e[i].push(this.constraints[n]);
      }
      return (
        t.sort(function (t, e) {
          return e[0].priority - t[0].priority;
        }),
        t
      );
    },
  };
  var E = T,
    k = function k() {
      this.__class__ = "FieldMultiple";
    };
  k.prototype = {
    addElement: function Ie(t) {
      return this.$elements.push(t), this;
    },
    _refreshConstraints: function _e() {
      var t;
      if (((this.constraints = []), "SELECT" === this.element.nodeName))
        return this.actualizeOptions()._bindConstraints(), this;
      for (var e = 0; e < this.$elements.length; e++)
        if (d("html").has(this.$elements[e]).length) {
          t = this.$elements[e]
            .data("FieldMultiple")
            ._refreshConstraints().constraints;
          for (var n = 0; n < t.length; n++)
            this.addConstraint(
              t[n].name,
              t[n].requirements,
              t[n].priority,
              t[n].isDomConstraint
            );
        } else this.$elements.splice(e, 1);
      return this;
    },
    getValue: function we() {
      if ("function" == typeof this.options.value)
        return this.options.value(this);
      if ("undefined" != typeof this.options.value) return this.options.value;
      if ("INPUT" === this.element.nodeName) {
        var t = u.getType(this.element);
        if ("radio" === t)
          return this._findRelated().filter(":checked").val() || "";
        if ("checkbox" === t) {
          var e = [];
          return (
            this._findRelated()
              .filter(":checked")
              .each(function () {
                e.push(d(this).val());
              }),
            e
          );
        }
      }
      return "SELECT" === this.element.nodeName && null === this.$element.val()
        ? []
        : this.$element.val();
    },
    _init: function Fe() {
      return (this.$elements = [this.$element]), this;
    },
  };
  var A = function A(t, e, n) {
    (this.element = t), (this.$element = d(t));
    var i = this.$element.data("Parsley");
    if (i)
      return (
        void 0 !== n &&
          i.parent === window.Parsley &&
          ((i.parent = n), i._resetOptions(i.options)),
        "object" == typeof e && _extends(i.options, e),
        i
      );
    if (!this.$element.length)
      throw new Error("You must bind Parsley on an existing element.");
    if (void 0 !== n && "Form" !== n.__class__)
      throw new Error("Parent instance must be a Form instance");
    return (this.parent = n || window.Parsley), this.init(e);
  };
  A.prototype = {
    init: function bt(t) {
      return (
        (this.__class__ = "Parsley"),
        (this.__version__ = "2.8.1"),
        (this.__id__ = u.generateID()),
        this._resetOptions(t),
        "FORM" === this.element.nodeName ||
        (u.checkAttr(this.element, this.options.namespace, "validate") &&
          !this.$element.is(this.options.inputs))
          ? this.bind("parsleyForm")
          : this.isMultiple()
          ? this.handleMultiple()
          : this.bind("parsleyField")
      );
    },
    isMultiple: function $e() {
      var t = u.getType(this.element);
      return (
        "radio" === t ||
        "checkbox" === t ||
        ("SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      );
    },
    handleMultiple: function Le() {
      var t,
        e,
        i = this;
      if (
        ((this.options.multiple =
          this.options.multiple ||
          (t = this.element.getAttribute("name")) ||
          this.element.getAttribute("id")),
        "SELECT" === this.element.nodeName &&
          null !== this.element.getAttribute("multiple"))
      )
        return (
          (this.options.multiple = this.options.multiple || this.__id__),
          this.bind("parsleyFieldMultiple")
        );
      if (!this.options.multiple)
        return (
          u.warn(
            "To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.",
            this.$element
          ),
          this
        );
      (this.options.multiple = this.options.multiple.replace(
        /(:|\.|\[|\]|\{|\}|\$)/g,
        ""
      )),
        t &&
          d('input[name="' + t + '"]').each(function (t, e) {
            var n = u.getType(e);
            ("radio" !== n && "checkbox" !== n) ||
              e.setAttribute(
                i.options.namespace + "multiple",
                i.options.multiple
              );
          });
      for (var n = this._findRelated(), r = 0; r < n.length; r++)
        if (void 0 !== (e = d(n.get(r)).data("Parsley"))) {
          this.$element.data("FieldMultiple") || e.addElement(this.$element);
          break;
        }
      return (
        this.bind("parsleyField", !0), e || this.bind("parsleyFieldMultiple")
      );
    },
    bind: function Oe(t, e) {
      var n;
      switch (t) {
        case "parsleyForm":
          n = d
            .extend(
              new _(this.element, this.domOptions, this.options),
              new s(),
              window.ParsleyExtend
            )
            ._bindFields();
          break;
        case "parsleyField":
          n = d.extend(
            new E(this.element, this.domOptions, this.options, this.parent),
            new s(),
            window.ParsleyExtend
          );
          break;
        case "parsleyFieldMultiple":
          n = d
            .extend(
              new E(this.element, this.domOptions, this.options, this.parent),
              new k(),
              new s(),
              window.ParsleyExtend
            )
            ._init();
          break;
        default:
          throw new Error(t + "is not a supported Parsley type");
      }
      return (
        this.options.multiple &&
          u.setAttr(
            this.element,
            this.options.namespace,
            "multiple",
            this.options.multiple
          ),
        void 0 !== e
          ? this.$element.data("FieldMultiple", n)
          : (this.$element.data("Parsley", n),
            n._actualizeTriggers(),
            n._trigger("init")),
        n
      );
    },
  };
  var j = d.fn.jquery.split(".");
  if (parseInt(j[0]) <= 1 && parseInt(j[1]) < 8)
    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  j.forEach ||
    u.warn(
      "Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim"
    );
  var N = _extends(new s(), {
    element: document,
    $element: d(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: A,
    version: "2.8.1",
  });
  _extends(E.prototype, b.Field, s.prototype),
    _extends(_.prototype, b.Form, s.prototype),
    _extends(A.prototype, s.prototype),
    (d.fn.parsley = d.fn.psly =
      function (t) {
        if (1 < this.length) {
          var e = [];
          return (
            this.each(function () {
              e.push(d(this).parsley(t));
            }),
            e
          );
        }
        if (0 != this.length) return new A(this[0], t);
      }),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    (N.options = _extends(u.objectCreate(a), window.ParsleyConfig)),
    (window.ParsleyConfig = N.options),
    (window.Parsley = window.psly = N),
    (N.Utils = u),
    (window.ParsleyUtils = {}),
    d.each(u, function (t, e) {
      "function" == typeof e &&
        (window.ParsleyUtils[t] = function () {
          return (
            u.warnOnce(
              "Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."
            ),
            u[t].apply(u, arguments)
          );
        });
    });
  var I = (window.Parsley._validatorRegistry = new h(
    window.ParsleyConfig.validators,
    window.ParsleyConfig.i18n
  ));
  (window.ParsleyValidator = {}),
    d.each(
      "setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(
        " "
      ),
      function (t, e) {
        (window.Parsley[e] = function () {
          return I[e].apply(I, arguments);
        }),
          (window.ParsleyValidator[e] = function () {
            var t;
            return (
              u.warnOnce(
                "Accessing the method '" +
                  e +
                  "' through Validator is deprecated. Simply call 'window.Parsley." +
                  e +
                  "(...)'"
              ),
              (t = window.Parsley)[e].apply(t, arguments)
            );
          });
      }
    ),
    (window.Parsley.UI = b),
    (window.ParsleyUI = {
      removeError: function Ht(t, e, n) {
        var i = !0 !== n;
        return (
          u.warnOnce(
            "Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          t.removeError(e, { updateClass: i })
        );
      },
      getErrorsMessages: function Pt(t) {
        return (
          u.warnOnce(
            "Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."
          ),
          t.getErrorsMessages()
        );
      },
    }),
    d.each("addError updateError".split(" "), function (t, a) {
      window.ParsleyUI[a] = function (t, e, n, i, r) {
        var o = !0 !== r;
        return (
          u.warnOnce(
            "Accessing UI is deprecated. Call '" +
              a +
              "' on the instance directly. Please comment in issue 1073 as to your need to call this method."
          ),
          t[a](e, { message: n, assert: i, updateClass: o })
        );
      };
    }),
    !1 !== window.ParsleyConfig.autoBind &&
      d(function () {
        d("[data-parsley-validate]").length &&
          d("[data-parsley-validate]").parsley();
      });
  var F = d({}),
    $ = function $() {
      u.warnOnce(
        "Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley"
      );
    },
    L = "parsley:";
  (d.listen = function (t, e, n) {
    var i;
    if (
      ($(),
      "object" == typeof arguments[1] &&
        "function" == typeof n &&
        ((i = arguments[1]), (e = arguments[2])),
      "function" != typeof e)
    )
      throw new Error("Wrong parameters");
    window.Parsley.on(o(t), r(e, i));
  }),
    (d.listenTo = function (t, e, n) {
      if (($(), !(t instanceof E || t instanceof _)))
        throw new Error("Must give Parsley instance");
      if ("string" != typeof e || "function" != typeof n)
        throw new Error("Wrong parameters");
      t.on(o(e), r(n));
    }),
    (d.unsubscribe = function (t, e) {
      if (($(), "string" != typeof t || "function" != typeof e))
        throw new Error("Wrong arguments");
      window.Parsley.off(o(t), e.parsleyAdaptedCallback);
    }),
    (d.unsubscribeTo = function (t, e) {
      if (($(), !(t instanceof E || t instanceof _)))
        throw new Error("Must give Parsley instance");
      t.off(o(e));
    }),
    (d.unsubscribeAll = function (e) {
      $(),
        window.Parsley.off(o(e)),
        d("form,input,textarea,select").each(function () {
          var t = d(this).data("Parsley");
          t && t.off(o(e));
        });
    }),
    (d.emit = function (t, e) {
      var n;
      $();
      var i = e instanceof E || e instanceof _,
        r = Array.prototype.slice.call(arguments, i ? 2 : 1);
      r.unshift(o(t)),
        i || (e = window.Parsley),
        (n = e).trigger.apply(n, _toConsumableArray(r));
    });
  return (
    d.extend(!0, N, {
      asyncValidators: {
        default: {
          fn: function Pe(t) {
            return 200 <= t.status && t.status < 300;
          },
          url: !1,
        },
        reverse: {
          fn: function Pe(t) {
            return t.status < 200 || 300 <= t.status;
          },
          url: !1,
        },
      },
      addAsyncValidator: function Re(t, e, n, i) {
        return (
          (N.asyncValidators[t] = { fn: e, url: n || !1, options: i || {} }),
          this
        );
      },
    }),
    N.addValidator("remote", {
      requirementType: {
        "": "string",
        validator: "string",
        reverse: "boolean",
        options: "object",
      },
      validateString: function Nt(t, e, n, i) {
        var r,
          o,
          a = {},
          s = n.validator || (!0 === n.reverse ? "reverse" : "default");
        if ("undefined" == typeof N.asyncValidators[s])
          throw new Error("Calling an undefined async validator: `" + s + "`");
        -1 < (e = N.asyncValidators[s].url || e).indexOf("{value}")
          ? (e = e.replace("{value}", encodeURIComponent(t)))
          : (a[i.element.getAttribute("name") || i.element.getAttribute("id")] =
              t);
        var l = d.extend(!0, n.options || {}, N.asyncValidators[s].options);
        (r = d.extend(!0, {}, { url: e, data: a, type: "GET" }, l)),
          i.trigger("field:ajaxoptions", i, r),
          (o = d.param(r)),
          "undefined" == typeof N._remoteCache && (N._remoteCache = {});
        var u = (N._remoteCache[o] = N._remoteCache[o] || d.ajax(r)),
          c = function c() {
            var t = N.asyncValidators[s].fn.call(i, u, e, n);
            return t || (t = d.Deferred().reject()), d.when(t);
          };
        return u.then(c, c);
      },
      priority: -1,
    }),
    N.on("form:submit", function () {
      N._remoteCache = {};
    }),
    (s.prototype.addAsyncValidator = function () {
      return (
        u.warnOnce(
          "Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"
        ),
        N.addAsyncValidator.apply(N, arguments)
      );
    }),
    N.addMessages("en", {
      defaultMessage: "This value seems to be invalid.",
      type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric.",
      },
      notblank: "This value should not be blank.",
      required: "This value is required.",
      pattern: "This value seems to be invalid.",
      min: "This value should be greater than or equal to %s.",
      max: "This value should be lower than or equal to %s.",
      range: "This value should be between %s and %s.",
      minlength:
        "This value is too short. It should have %s characters or more.",
      maxlength:
        "This value is too long. It should have %s characters or fewer.",
      length:
        "This value length is invalid. It should be between %s and %s characters long.",
      mincheck: "You must select at least %s choices.",
      maxcheck: "You must select %s choices or fewer.",
      check: "You must select between %s and %s choices.",
      equalto: "This value should be the same.",
    }),
    N.setLocale("en"),
    new t().install(),
    N
  );
}),
  (function (t) {
    var e = t.document;
    if (!t.navigator.standalone && !location.hash && t.addEventListener) {
      t.scrollTo(0, 1);
      var n = 1,
        i = function () {
          return (
            t.pageYOffset ||
            ("CSS1Compat" === e.compatMode && e.documentElement.scrollTop) ||
            e.body.scrollTop ||
            0
          );
        },
        r = setInterval(function () {
          e.body &&
            (clearInterval(r), (n = i()), t.scrollTo(0, 1 === n ? 0 : 1));
        }, 15);
      t.addEventListener(
        "load",
        function () {
          setTimeout(function () {
            i() < 20 && t.scrollTo(0, 1 === n ? 0 : 1);
          }, 0);
        },
        !1
      );
    }
  })(this),
  (function () {
    "use strict";
    function l(r, t) {
      function e(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      var n;
      if (
        ((t = t || {}),
        (this.trackingClick = !1),
        (this.trackingClickStart = 0),
        (this.targetElement = null),
        (this.touchStartX = 0),
        (this.touchStartY = 0),
        (this.lastTouchIdentifier = 0),
        (this.touchBoundary = t.touchBoundary || 10),
        (this.layer = r),
        (this.tapDelay = t.tapDelay || 200),
        (this.tapTimeout = t.tapTimeout || 700),
        !l.notNeeded(r))
      ) {
        for (
          var i = [
              "onMouse",
              "onClick",
              "onTouchStart",
              "onTouchMove",
              "onTouchEnd",
              "onTouchCancel",
            ],
            o = this,
            a = 0,
            s = i.length;
          a < s;
          a++
        )
          o[i[a]] = e(o[i[a]], o);
        u &&
          (r.addEventListener("mouseover", this.onMouse, !0),
          r.addEventListener("mousedown", this.onMouse, !0),
          r.addEventListener("mouseup", this.onMouse, !0)),
          r.addEventListener("click", this.onClick, !0),
          r.addEventListener("touchstart", this.onTouchStart, !1),
          r.addEventListener("touchmove", this.onTouchMove, !1),
          r.addEventListener("touchend", this.onTouchEnd, !1),
          r.addEventListener("touchcancel", this.onTouchCancel, !1),
          Event.prototype.stopImmediatePropagation ||
            ((r.removeEventListener = function (t, e, n) {
              var i = Node.prototype.removeEventListener;
              "click" === t
                ? i.call(r, t, e.hijacked || e, n)
                : i.call(r, t, e, n);
            }),
            (r.addEventListener = function (t, e, n) {
              var i = Node.prototype.addEventListener;
              "click" === t
                ? i.call(
                    r,
                    t,
                    e.hijacked ||
                      (e.hijacked = function (t) {
                        t.propagationStopped || e(t);
                      }),
                    n
                  )
                : i.call(r, t, e, n);
            })),
          "function" == typeof r.onclick &&
            ((n = r.onclick),
            r.addEventListener(
              "click",
              function (t) {
                n(t);
              },
              !1
            ),
            (r.onclick = null));
      }
    }
    var t = 0 <= navigator.userAgent.indexOf("Windows Phone"),
      u = 0 < navigator.userAgent.indexOf("Android") && !t,
      s = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
      c = s && /OS 4_\d(_\d)?/.test(navigator.userAgent),
      d = s && /OS [6-7]_\d/.test(navigator.userAgent),
      r = 0 < navigator.userAgent.indexOf("BB10");
    (l.prototype.needsClick = function (t) {
      switch (t.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
          if (t.disabled) return !0;
          break;
        case "input":
          if ((s && "file" === t.type) || t.disabled) return !0;
          break;
        case "label":
        case "iframe":
        case "video":
          return !0;
      }
      return /\bneedsclick\b/.test(t.className);
    }),
      (l.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
          case "textarea":
            return !0;
          case "select":
            return !u;
          case "input":
            switch (t.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                return !1;
            }
            return !t.disabled && !t.readOnly;
          default:
            return /\bneedsfocus\b/.test(t.className);
        }
      }),
      (l.prototype.sendClick = function (t, e) {
        var n, i;
        document.activeElement &&
          document.activeElement !== t &&
          document.activeElement.blur(),
          (i = e.changedTouches[0]),
          (n = document.createEvent("MouseEvents")).initMouseEvent(
            this.determineEventType(t),
            !0,
            !0,
            window,
            1,
            i.screenX,
            i.screenY,
            i.clientX,
            i.clientY,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
          (n.forwardedTouchEvent = !0),
          t.dispatchEvent(n);
      }),
      (l.prototype.determineEventType = function (t) {
        return u && "select" === t.tagName.toLowerCase()
          ? "mousedown"
          : "click";
      }),
      (l.prototype.focus = function (t) {
        var e;
        s &&
        t.setSelectionRange &&
        0 !== t.type.indexOf("date") &&
        "time" !== t.type &&
        "month" !== t.type
          ? ((e = t.value.length), t.setSelectionRange(e, e))
          : t.focus();
      }),
      (l.prototype.updateScrollParent = function (t) {
        var e, n;
        if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
          n = t;
          do {
            if (n.scrollHeight > n.offsetHeight) {
              (e = n), (t.fastClickScrollParent = n);
              break;
            }
            n = n.parentElement;
          } while (n);
        }
        e && (e.fastClickLastScrollTop = e.scrollTop);
      }),
      (l.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
      }),
      (l.prototype.onTouchStart = function (t) {
        var e, n, i;
        if (1 < t.targetTouches.length) return !0;
        if (
          ((e = this.getTargetElementFromEventTarget(t.target)),
          (n = t.targetTouches[0]),
          s)
        ) {
          if ((i = window.getSelection()).rangeCount && !i.isCollapsed)
            return !0;
          if (!c) {
            if (n.identifier && n.identifier === this.lastTouchIdentifier)
              return t.preventDefault(), !1;
            (this.lastTouchIdentifier = n.identifier),
              this.updateScrollParent(e);
          }
        }
        return (
          (this.trackingClick = !0),
          (this.trackingClickStart = t.timeStamp),
          (this.targetElement = e),
          (this.touchStartX = n.pageX),
          (this.touchStartY = n.pageY),
          t.timeStamp - this.lastClickTime < this.tapDelay &&
            t.preventDefault(),
          !0
        );
      }),
      (l.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0],
          n = this.touchBoundary;
        return (
          Math.abs(e.pageX - this.touchStartX) > n ||
          Math.abs(e.pageY - this.touchStartY) > n
        );
      }),
      (l.prototype.onTouchMove = function (t) {
        return (
          this.trackingClick &&
            (this.targetElement !==
              this.getTargetElementFromEventTarget(t.target) ||
              this.touchHasMoved(t)) &&
            ((this.trackingClick = !1), (this.targetElement = null)),
          !0
        );
      }),
      (l.prototype.findControl = function (t) {
        return t.control !== undefined
          ? t.control
          : t.htmlFor
          ? document.getElementById(t.htmlFor)
          : t.querySelector(
              "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
            );
      }),
      (l.prototype.onTouchEnd = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay)
          return (this.cancelNextClick = !0);
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (
          ((this.cancelNextClick = !1),
          (this.lastClickTime = t.timeStamp),
          (n = this.trackingClickStart),
          (this.trackingClick = !1),
          (this.trackingClickStart = 0),
          d &&
            ((o = t.changedTouches[0]),
            ((a =
              document.elementFromPoint(
                o.pageX - window.pageXOffset,
                o.pageY - window.pageYOffset
              ) || a).fastClickScrollParent =
              this.targetElement.fastClickScrollParent)),
          "label" === (i = a.tagName.toLowerCase()))
        ) {
          if ((e = this.findControl(a))) {
            if ((this.focus(a), u)) return !1;
            a = e;
          }
        } else if (this.needsFocus(a))
          return (
            100 < t.timeStamp - n ||
            (s && window.top !== window && "input" === i)
              ? (this.targetElement = null)
              : (this.focus(a),
                this.sendClick(a, t),
                (s && "select" === i) ||
                  ((this.targetElement = null), t.preventDefault())),
            !1
          );
        return (
          !(
            !s ||
            c ||
            !(r = a.fastClickScrollParent) ||
            r.fastClickLastScrollTop === r.scrollTop
          ) ||
          (this.needsClick(a) || (t.preventDefault(), this.sendClick(a, t)), !1)
        );
      }),
      (l.prototype.onTouchCancel = function () {
        (this.trackingClick = !1), (this.targetElement = null);
      }),
      (l.prototype.onMouse = function (t) {
        return (
          !this.targetElement ||
          !!t.forwardedTouchEvent ||
          !t.cancelable ||
          !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
          (t.stopImmediatePropagation
            ? t.stopImmediatePropagation()
            : (t.propagationStopped = !0),
          t.stopPropagation(),
          t.preventDefault(),
          !1)
        );
      }),
      (l.prototype.onClick = function (t) {
        var e;
        return this.trackingClick
          ? ((this.targetElement = null), !(this.trackingClick = !1))
          : ("submit" === t.target.type && 0 === t.detail) ||
              ((e = this.onMouse(t)) || (this.targetElement = null), e);
      }),
      (l.prototype.destroy = function () {
        var t = this.layer;
        u &&
          (t.removeEventListener("mouseover", this.onMouse, !0),
          t.removeEventListener("mousedown", this.onMouse, !0),
          t.removeEventListener("mouseup", this.onMouse, !0)),
          t.removeEventListener("click", this.onClick, !0),
          t.removeEventListener("touchstart", this.onTouchStart, !1),
          t.removeEventListener("touchmove", this.onTouchMove, !1),
          t.removeEventListener("touchend", this.onTouchEnd, !1),
          t.removeEventListener("touchcancel", this.onTouchCancel, !1);
      }),
      (l.notNeeded = function (t) {
        var e, n, i;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if ((n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
          if (!u) return !0;
          if ((e = document.querySelector("meta[name=viewport]"))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (
              31 < n &&
              document.documentElement.scrollWidth <= window.outerWidth
            )
              return !0;
          }
        }
        if (
          r &&
          10 <=
            (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] &&
          3 <= i[2] &&
          (e = document.querySelector("meta[name=viewport]"))
        ) {
          if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
          if (document.documentElement.scrollWidth <= window.outerWidth)
            return !0;
        }
        return (
          "none" === t.style.msTouchAction ||
          "manipulation" === t.style.touchAction ||
          !!(
            27 <=
              +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] &&
            (e = document.querySelector("meta[name=viewport]")) &&
            (-1 !== e.content.indexOf("user-scalable=no") ||
              document.documentElement.scrollWidth <= window.outerWidth)
          ) ||
          "none" === t.style.touchAction ||
          "manipulation" === t.style.touchAction
        );
      }),
      (l.attach = function (t, e) {
        return new l(t, e);
      }),
      "function" == typeof define && "object" == typeof define.amd && define.amd
        ? define(function () {
            return l;
          })
        : "undefined" != typeof module && module.exports
        ? ((module.exports = l.attach), (module.exports.FastClick = l))
        : (window.FastClick = l);
  })(),
  $(function () {
    $(window).scroll(function () {
      250 < $(this).scrollTop()
        ? $(".scroll-top").fadeIn()
        : $(".scroll-top").fadeOut();
    });
  }),
  $(function () {
    FastClick.attach(document.body);
  }),
  $(function () {
    var n = function (t, e, n, i) {
      var r = window.screenLeft !== undefined ? window.screenLeft : screen.left,
        o = window.screenTop !== undefined ? window.screenTop : screen.top,
        a =
          (window.innerWidth
            ? window.innerWidth
            : document.documentElement.clientWidth
            ? document.documentElement.clientWidth
            : screen.width) /
            2 -
          n / 2 +
          r,
        s =
          (window.innerHeight
            ? window.innerHeight
            : document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : screen.height) /
            3 -
          i / 3 +
          o,
        l = window.open(
          t,
          e,
          "scrollbars=yes, width=" +
            n +
            ", height=" +
            i +
            ", top=" +
            s +
            ", left=" +
            a
        );
      window.focus && l.focus();
    };
    $(document).on("click", "a.popup", {}, function i(t) {
      var e = $(this);
      n(e.attr("href"), "", 580, 470), t.preventDefault();
    });
  }),
  (function (t) {
    if ("function" == typeof define && define.amd) define(t);
    else if ("object" == typeof exports) module.exports = t();
    else {
      var e = window.Cookies,
        n = (window.Cookies = t(window.jQuery));
      n.noConflict = function () {
        return (window.Cookies = e), n;
      };
    }
  })(function () {
    function p() {
      for (var t = 0, e = {}; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) e[i] = n[i];
      }
      return e;
    }
    function t(f) {
      function h(t, e, n) {
        var i;
        if (1 < arguments.length) {
          if (
            "number" == typeof (n = p({ path: "/" }, h.defaults, n)).expires
          ) {
            var r = new Date();
            r.setMilliseconds(r.getMilliseconds() + 864e5 * n.expires),
              (n.expires = r);
          }
          try {
            (i = JSON.stringify(e)), /^[\{\[]/.test(i) && (e = i);
          } catch (d) {}
          return (
            (e = (e = encodeURIComponent(String(e))).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
            (t = (t = (t = encodeURIComponent(String(t))).replace(
              /%(23|24|26|2B|5E|60|7C)/g,
              decodeURIComponent
            )).replace(/[\(\)]/g, escape)),
            (document.cookie = [
              t,
              "=",
              e,
              n.expires && "; expires=" + n.expires.toUTCString(),
              n.path && "; path=" + n.path,
              n.domain && "; domain=" + n.domain,
              n.secure ? "; secure" : "",
            ].join(""))
          );
        }
        t || (i = {});
        for (
          var o = document.cookie ? document.cookie.split("; ") : [],
            a = /(%[0-9A-Z]{2})+/g,
            s = 0;
          s < o.length;
          s++
        ) {
          var l = o[s].split("="),
            u = l[0].replace(a, decodeURIComponent),
            c = l.slice(1).join("=");
          '"' === c.charAt(0) && (c = c.slice(1, -1));
          try {
            if (
              ((c = (f && f(c, u)) || c.replace(a, decodeURIComponent)),
              this.json)
            )
              try {
                c = JSON.parse(c);
              } catch (d) {}
            if (t === u) {
              i = c;
              break;
            }
            t || (i[u] = c);
          } catch (d) {}
        }
        return i;
      }
      return (
        (h.get = h.set = h),
        (h.getJSON = function () {
          return h.apply({ json: !0 }, [].slice.call(arguments));
        }),
        (h.defaults = {}),
        (h.remove = function (t, e) {
          h(t, "", p(e, { expires: -1 }));
        }),
        (h.withConverter = t),
        h
      );
    }
    return t();
  }),
  $(function () {
    function t() {
      function t() {
        dataLayer.push(arguments);
      }
      var e, n, i, r, o, a, s, l, u, c, d, f, h;
      if (
        "production" === config.ENV &&
        (config.TECH_SAL_CALC_SITE || !config.STAFF)
      ) {
        delete window.ga,
          (s = window),
          (l = document),
          (u = "script"),
          (c = "//www.google-analytics.com/analytics.js"),
          (d = "ga"),
          (s.GoogleAnalyticsObject = d),
          (s[d] =
            s[d] ||
            function () {
              (s[d].q = s[d].q || []).push(arguments);
            }),
          (s[d].l = 1 * new Date()),
          (f = l.createElement(u)),
          (h = l.getElementsByTagName(u)[0]),
          (f.async = 1),
          (f.src = c),
          h.parentNode.insertBefore(f, h),
          ga("create", window.config.GOOGLE_ANALYTICS, "auto"),
          ga("send", "pageview");
        var p = document.createElement("script");
        (p.async = !0),
          (p.src = "https://www.googletagmanager.com/gtag/js?id=G-MTBQG09H69"),
          document.body.appendChild(p),
          (window.dataLayer = window.dataLayer || []),
          t("js", new Date()),
          t("config", "G-MTBQG09H69"),
          delete window.hj,
          (e = window),
          (n = document),
          (i = "//static.hotjar.com/c/hotjar-"),
          (r = ".js?sv="),
          (e.hj =
            e.hj ||
            function () {
              (e.hj.q = e.hj.q || []).push(arguments);
            }),
          (e._hjSettings = { hjid: window.config.HJ, hjsv: 5 }),
          (o = n.getElementsByTagName("head")[0]),
          ((a = n.createElement("script")).async = 1),
          (a.src = i + e._hjSettings.hjid + r + e._hjSettings.hjsv),
          o.appendChild(a);
      }
    }
    function e() {
      return "https:" === location.protocol;
    }
    function n() {
      r.remove();
    }
    function i() {
      return {
        track: function () {
          console.log("Heap: %o", arguments);
        },
      };
    }
    var r = $("#cookies"),
      o = Cookies.get("cookiesOK");
    Cookies.set("cookiesOK", 1, { secure: e() }),
      (window.ga = function () {
        console.log("Google Analytics: %o", arguments);
      }),
      (window.hj = function () {
        console.log("Hotjar: %o", arguments);
      }),
      (window.heap = window.heap || new i()),
      o ? n() : (r.show(), r.alert()),
      t(),
      $("#accept-cookies").on("click", n);
  }),
  (function (t) {
    var i = /iPhone/i,
      r = /iPod/i,
      o = /iPad/i,
      a = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
      s = /Android/i,
      l = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
      u =
        /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
      c = /IEMobile/i,
      d = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
      f = /BlackBerry/i,
      h = /BB10/i,
      p = /Opera Mini/i,
      m = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
      g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
      v = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
      y = function (t, e) {
        return t.test(e);
      },
      e = function (t) {
        var e = t || navigator.userAgent,
          n = e.split("[FBAN");
        if (
          ("undefined" != typeof n[1] && (e = n[0]),
          (this.apple = {
            phone: y(i, e),
            ipod: y(r, e),
            tablet: !y(i, e) && y(o, e),
            device: y(i, e) || y(r, e) || y(o, e),
          }),
          (this.amazon = {
            phone: y(l, e),
            tablet: !y(l, e) && y(u, e),
            device: y(l, e) || y(u, e),
          }),
          (this.android = {
            phone: y(l, e) || y(a, e),
            tablet: !y(l, e) && !y(a, e) && (y(u, e) || y(s, e)),
            device: y(l, e) || y(u, e) || y(a, e) || y(s, e),
          }),
          (this.windows = {
            phone: y(c, e),
            tablet: y(d, e),
            device: y(c, e) || y(d, e),
          }),
          (this.other = {
            blackberry: y(f, e),
            blackberry10: y(h, e),
            opera: y(p, e),
            firefox: y(g, e),
            chrome: y(m, e),
            device: y(f, e) || y(h, e) || y(p, e) || y(g, e) || y(m, e),
          }),
          (this.seven_inch = y(v, e)),
          (this.any =
            this.apple.device ||
            this.android.device ||
            this.windows.device ||
            this.other.device ||
            this.seven_inch),
          (this.phone =
            this.apple.phone || this.android.phone || this.windows.phone),
          (this.tablet =
            this.apple.tablet || this.android.tablet || this.windows.tablet),
          "undefined" == typeof window)
        )
          return this;
      },
      n = function () {
        var t = new e();
        return (t.Class = e), t;
      };
    "undefined" != typeof module &&
    module.exports &&
    "undefined" == typeof window
      ? (module.exports = e)
      : "undefined" != typeof module &&
        module.exports &&
        "undefined" != typeof window
      ? (module.exports = n())
      : "function" == typeof define && define.amd
      ? define("isMobile", [], (t.isMobile = n()))
      : (t.isMobile = n());
  })(this),
  (function (Je, Ge, Ye) {
    !(function (t) {
      "use strict";
      "function" == typeof define && define.amd
        ? define("datatables", ["jquery"], t)
        : "object" == typeof exports
        ? (module.exports = t(require("jquery")))
        : jQuery && !jQuery.fn.dataTable && t(jQuery);
    })(function (H) {
      "use strict";
      function a(e) {
        var n,
          i,
          r = "a aa ai ao as b fn i m o s ",
          o = {};
        H.each(e, function (t) {
          (n = t.match(/^([^A-Z]+?)([A-Z])/)) &&
            -1 !== r.indexOf(n[1] + " ") &&
            ((i = t.replace(n[0], n[2].toLowerCase())),
            (o[i] = t),
            "o" === n[1] && a(e[t]));
        }),
          (e._hungarianMap = o);
      }
      function N(e, n, i) {
        var r;
        e._hungarianMap || a(e),
          H.each(n, function (t) {
            (r = e._hungarianMap[t]) === Ye ||
              (!i && n[r] !== Ye) ||
              ("o" === r.charAt(0)
                ? (n[r] || (n[r] = {}),
                  H.extend(!0, n[r], n[t]),
                  N(e[r], n[r], i))
                : (n[r] = n[t]));
          });
      }
      function I(t) {
        var e = Vt.defaults.oLanguage,
          n = t.sZeroRecords;
        !t.sEmptyTable &&
          n &&
          "No data available in table" === e.sEmptyTable &&
          $t(t, t, "sZeroRecords", "sEmptyTable"),
          !t.sLoadingRecords &&
            n &&
            "Loading..." === e.sLoadingRecords &&
            $t(t, t, "sZeroRecords", "sLoadingRecords"),
          t.sInfoThousands && (t.sThousands = t.sInfoThousands);
        var i = t.sDecimal;
        i && qt(i);
      }
      function F(t) {
        me(t, "ordering", "bSort"),
          me(t, "orderMulti", "bSortMulti"),
          me(t, "orderClasses", "bSortClasses"),
          me(t, "orderCellsTop", "bSortCellsTop"),
          me(t, "order", "aaSorting"),
          me(t, "orderFixed", "aaSortingFixed"),
          me(t, "paging", "bPaginate"),
          me(t, "pagingType", "sPaginationType"),
          me(t, "pageLength", "iDisplayLength"),
          me(t, "searching", "bFilter");
        var e = t.aoSearchCols;
        if (e)
          for (var n = 0, i = e.length; n < i; n++)
            e[n] && N(Vt.models.oSearch, e[n]);
      }
      function $(t) {
        me(t, "orderable", "bSortable"),
          me(t, "orderData", "aDataSort"),
          me(t, "orderSequence", "asSorting"),
          me(t, "orderDataType", "sortDataType");
        var e = t.aDataSort;
        e && !H.isArray(e) && (t.aDataSort = [e]);
      }
      function L(t) {
        var e = t.oBrowser,
          n = H("<div/>")
            .css({
              position: "absolute",
              top: 0,
              left: 0,
              height: 1,
              width: 1,
              overflow: "hidden",
            })
            .append(
              H("<div/>")
                .css({
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 100,
                  overflow: "scroll",
                })
                .append(
                  H('<div class="test"/>').css({ width: "100%", height: 10 })
                )
            )
            .appendTo("body"),
          i = n.find(".test");
        (e.bScrollOversize = 100 === i[0].offsetWidth),
          (e.bScrollbarLeft = 1 !== Math.round(i.offset().left)),
          n.remove();
      }
      function n(t, e, n, i, r, o) {
        var a,
          s = i,
          l = !1;
        for (n !== Ye && ((a = n), (l = !0)); s !== r; )
          t.hasOwnProperty(s) &&
            ((a = l ? e(a, t[s], s, t) : t[s]), (l = !0), (s += o));
        return a;
      }
      function O(t, e) {
        var n = Vt.defaults.column,
          i = t.aoColumns.length,
          r = H.extend({}, Vt.models.oColumn, n, {
            nTh: e || Ge.createElement("th"),
            sTitle: n.sTitle ? n.sTitle : e ? e.innerHTML : "",
            aDataSort: n.aDataSort ? n.aDataSort : [i],
            mData: n.mData ? n.mData : i,
            idx: i,
          });
        t.aoColumns.push(r);
        var o = t.aoPreSearchCols;
        (o[i] = H.extend({}, Vt.models.oSearch, o[i])), P(t, i, H(e).data());
      }
      function P(t, e, n) {
        var i = t.aoColumns[e],
          r = t.oClasses,
          o = H(i.nTh);
        if (!i.sWidthOrig) {
          i.sWidthOrig = o.attr("width") || null;
          var a = (o.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
          a && (i.sWidthOrig = a[1]);
        }
        n !== Ye &&
          null !== n &&
          ($(n),
          N(Vt.defaults.column, n),
          n.mDataProp === Ye || n.mData || (n.mData = n.mDataProp),
          n.sType && (i._sManualType = n.sType),
          n.className && !n.sClass && (n.sClass = n.className),
          H.extend(i, n),
          $t(i, n, "sWidth", "sWidthOrig"),
          n.iDataSort !== Ye && (i.aDataSort = [n.iDataSort]),
          $t(i, n, "aDataSort"));
        var s = i.mData,
          l = p(s),
          u = i.mRender ? p(i.mRender) : null,
          c = function (t) {
            return "string" == typeof t && -1 !== t.indexOf("@");
          };
        (i._bAttrSrc =
          H.isPlainObject(s) && (c(s.sort) || c(s.type) || c(s.filter))),
          (i.fnGetData = function (t, e, n) {
            var i = l(t, e, Ye, n);
            return u && e ? u(i, e, t, n) : i;
          }),
          (i.fnSetData = function (t, e, n) {
            return v(s)(t, e, n);
          }),
          "number" != typeof s && (t._rowReadObject = !0),
          t.oFeatures.bSort ||
            ((i.bSortable = !1), o.addClass(r.sSortableNone));
        var d = -1 !== H.inArray("asc", i.asSorting),
          f = -1 !== H.inArray("desc", i.asSorting);
        i.bSortable && (d || f)
          ? d && !f
            ? ((i.sSortingClass = r.sSortableAsc),
              (i.sSortingClassJUI = r.sSortJUIAscAllowed))
            : !d && f
            ? ((i.sSortingClass = r.sSortableDesc),
              (i.sSortingClassJUI = r.sSortJUIDescAllowed))
            : ((i.sSortingClass = r.sSortable),
              (i.sSortingClassJUI = r.sSortJUI))
          : ((i.sSortingClass = r.sSortableNone), (i.sSortingClassJUI = ""));
      }
      function x(t) {
        if (!1 !== t.oFeatures.bAutoWidth) {
          var e = t.aoColumns;
          mt(t);
          for (var n = 0, i = e.length; n < i; n++)
            e[n].nTh.style.width = e[n].sWidth;
        }
        var r = t.oScroll;
        ("" === r.sY && "" === r.sX) || ht(t),
          Rt(t, null, "column-sizing", [t]);
      }
      function B(t, e) {
        var n = S(t, "bVisible");
        return "number" == typeof n[e] ? n[e] : null;
      }
      function c(t, e) {
        var n = S(t, "bVisible"),
          i = H.inArray(e, n);
        return -1 !== i ? i : null;
      }
      function C(t) {
        return S(t, "bVisible").length;
      }
      function S(t, n) {
        var i = [];
        return (
          H.map(t.aoColumns, function (t, e) {
            t[n] && i.push(e);
          }),
          i
        );
      }
      function l(t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          c = t.aoColumns,
          d = t.aoData,
          f = Vt.ext.type.detect;
        for (e = 0, n = c.length; e < n; e++)
          if (((u = []), !(s = c[e]).sType && s._sManualType))
            s.sType = s._sManualType;
          else if (!s.sType) {
            for (i = 0, r = f.length; i < r; i++) {
              for (
                o = 0, a = d.length;
                o < a &&
                (u[o] === Ye && (u[o] = m(t, o, e, "type")),
                (l = f[i](u[o], t)) || i === f.length - 1) &&
                "html" !== l;
                o++
              );
              if (l) {
                s.sType = l;
                break;
              }
            }
            s.sType || (s.sType = "string");
          }
      }
      function R(t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u,
          c,
          d = t.aoColumns;
        if (e)
          for (r = e.length - 1; 0 <= r; r--) {
            var f = (c = e[r]).targets !== Ye ? c.targets : c.aTargets;
            for (H.isArray(f) || (f = [f]), a = 0, s = f.length; a < s; a++)
              if ("number" == typeof f[a] && 0 <= f[a]) {
                for (; d.length <= f[a]; ) O(t);
                i(f[a], c);
              } else if ("number" == typeof f[a] && f[a] < 0)
                i(d.length + f[a], c);
              else if ("string" == typeof f[a])
                for (l = 0, u = d.length; l < u; l++)
                  ("_all" == f[a] || H(d[l].nTh).hasClass(f[a])) && i(l, c);
          }
        if (n) for (r = 0, o = n.length; r < o; r++) i(r, n[r]);
      }
      function M(t, e, n, i) {
        var r = t.aoData.length,
          o = H.extend(!0, {}, Vt.models.oRow, { src: n ? "dom" : "data" });
        (o._aData = e), t.aoData.push(o);
        for (var a = t.aoColumns, s = 0, l = a.length; s < l; s++)
          n && u(t, r, s, m(t, r, s)), (a[s].sType = null);
        return (
          t.aiDisplayMaster.push(r),
          (!n && t.oFeatures.bDeferRender) || T(t, r, n, i),
          r
        );
      }
      function W(n, t) {
        var i;
        return (
          t instanceof H || (t = H(t)),
          t.map(function (t, e) {
            return (i = q(n, e)), M(n, i.data, e, i.cells);
          })
        );
      }
      function t(t, e) {
        return e._DT_RowIndex !== Ye ? e._DT_RowIndex : null;
      }
      function e(t, e, n) {
        return H.inArray(n, t.aoData[e].anCells);
      }
      function m(t, e, n, i) {
        var r = t.iDraw,
          o = t.aoColumns[n],
          a = t.aoData[e]._aData,
          s = o.sDefaultContent,
          l = o.fnGetData(a, i, { settings: t, row: e, col: n });
        if (l === Ye)
          return (
            t.iDrawError != r &&
              null === s &&
              (Ft(
                t,
                0,
                "Requested unknown parameter " +
                  ("function" == typeof o.mData
                    ? "{function}"
                    : "'" + o.mData + "'") +
                  " for row " +
                  e,
                4
              ),
              (t.iDrawError = r)),
            s
          );
        if ((l !== a && null !== l) || null === s) {
          if ("function" == typeof l) return l.call(a);
        } else l = s;
        return null === l && "display" == i ? "" : l;
      }
      function u(t, e, n, i) {
        var r = t.aoColumns[n],
          o = t.aoData[e]._aData;
        r.fnSetData(o, i, { settings: t, row: e, col: n });
      }
      function g(t) {
        return H.map(t.match(/(\\.|[^\.])+/g), function (t) {
          return t.replace(/\\./g, ".");
        });
      }
      function p(r) {
        if (H.isPlainObject(r)) {
          var o = {};
          return (
            H.each(r, function (t, e) {
              e && (o[t] = p(e));
            }),
            function (t, e, n, i) {
              var r = o[e] || o._;
              return r !== Ye ? r(t, e, n, i) : t;
            }
          );
        }
        if (null === r)
          return function (t) {
            return t;
          };
        if ("function" == typeof r)
          return function (t, e, n, i) {
            return r(t, e, n, i);
          };
        if (
          "string" != typeof r ||
          (-1 === r.indexOf(".") &&
            -1 === r.indexOf("[") &&
            -1 === r.indexOf("("))
        )
          return function (t) {
            return t[r];
          };
        var h = function (t, e, n) {
          var i, r, o, a;
          if ("" !== n)
            for (var s = g(n), l = 0, u = s.length; l < u; l++) {
              if (((i = s[l].match(ge)), (r = s[l].match(ve)), i)) {
                (s[l] = s[l].replace(ge, "")),
                  "" !== s[l] && (t = t[s[l]]),
                  (o = []),
                  s.splice(0, l + 1),
                  (a = s.join("."));
                for (var c = 0, d = t.length; c < d; c++) o.push(h(t[c], e, a));
                var f = i[0].substring(1, i[0].length - 1);
                t = "" === f ? o : o.join(f);
                break;
              }
              if (r) (s[l] = s[l].replace(ve, "")), (t = t[s[l]]());
              else {
                if (null === t || t[s[l]] === Ye) return Ye;
                t = t[s[l]];
              }
            }
          return t;
        };
        return function (t, e) {
          return h(t, e, r);
        };
      }
      function v(i) {
        if (H.isPlainObject(i)) return v(i._);
        if (null === i) return function () {};
        if ("function" == typeof i)
          return function (t, e, n) {
            i(t, "set", e, n);
          };
        if (
          "string" != typeof i ||
          (-1 === i.indexOf(".") &&
            -1 === i.indexOf("[") &&
            -1 === i.indexOf("("))
        )
          return function (t, e) {
            t[i] = e;
          };
        var p = function (t, e, n) {
          for (
            var i,
              r,
              o,
              a,
              s,
              l = g(n),
              u = l[l.length - 1],
              c = 0,
              d = l.length - 1;
            c < d;
            c++
          ) {
            if (((r = l[c].match(ge)), (o = l[c].match(ve)), r)) {
              (l[c] = l[c].replace(ge, "")),
                (t[l[c]] = []),
                (i = l.slice()).splice(0, c + 1),
                (s = i.join("."));
              for (var f = 0, h = e.length; f < h; f++)
                p((a = {}), e[f], s), t[l[c]].push(a);
              return;
            }
            o && ((l[c] = l[c].replace(ve, "")), (t = t[l[c]](e))),
              (null !== t[l[c]] && t[l[c]] !== Ye) || (t[l[c]] = {}),
              (t = t[l[c]]);
          }
          u.match(ve)
            ? (t = t[u.replace(ve, "")](e))
            : (t[u.replace(ge, "")] = e);
        };
        return function (t, e) {
          return p(t, e, i);
        };
      }
      function _(t) {
        return ue(t.aoData, "_aData");
      }
      function d(t) {
        (t.aoData.length = 0),
          (t.aiDisplayMaster.length = 0),
          (t.aiDisplay.length = 0);
      }
      function s(t, e, n) {
        for (var i = -1, r = 0, o = t.length; r < o; r++)
          t[r] == e ? (i = r) : t[r] > e && t[r]--;
        -1 != i && n === Ye && t.splice(i, 1);
      }
      function r(n, i, t, e) {
        var r,
          o,
          a = n.aoData[i],
          s = function (t, e) {
            for (; t.childNodes.length; ) t.removeChild(t.firstChild);
            t.innerHTML = m(n, i, e, "display");
          };
        if ("dom" !== t && ((t && "auto" !== t) || "dom" !== a.src)) {
          var l = a.anCells;
          if (l)
            if (e !== Ye) s(l[e], e);
            else for (r = 0, o = l.length; r < o; r++) s(l[r], r);
        } else a._aData = q(n, a, e, e === Ye ? Ye : a._aData).data;
        (a._aSortData = null), (a._aFilterData = null);
        var u = n.aoColumns;
        if (e !== Ye) u[e].sType = null;
        else {
          for (r = 0, o = u.length; r < o; r++) u[r].sType = null;
          f(a);
        }
      }
      function q(t, e, n, r) {
        var i,
          o,
          a,
          s = [],
          l = e.firstChild,
          u = 0,
          c = t.aoColumns,
          d = t._rowReadObject;
        r = r || d ? {} : [];
        var f = function (t, e) {
            if ("string" == typeof t) {
              var n = t.indexOf("@");
              if (-1 !== n) {
                var i = t.substring(n + 1);
                v(t)(r, e.getAttribute(i));
              }
            }
          },
          h = function (t) {
            (n !== Ye && n !== u) ||
              ((o = c[u]),
              (a = H.trim(t.innerHTML)),
              o && o._bAttrSrc
                ? (v(o.mData._)(r, a),
                  f(o.mData.sort, t),
                  f(o.mData.type, t),
                  f(o.mData.filter, t))
                : d
                ? (o._setter || (o._setter = v(o.mData)), o._setter(r, a))
                : (r[u] = a));
            u++;
          };
        if (l)
          for (; l; )
            ("TD" != (i = l.nodeName.toUpperCase()) && "TH" != i) ||
              (h(l), s.push(l)),
              (l = l.nextSibling);
        else for (var p = 0, m = (s = e.anCells).length; p < m; p++) h(s[p]);
        return { data: r, cells: s };
      }
      function T(t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u = t.aoData[e],
          c = u._aData,
          d = [];
        if (null === u.nTr) {
          for (
            r = n || Ge.createElement("tr"),
              u.nTr = r,
              u.anCells = d,
              r._DT_RowIndex = e,
              f(u),
              s = 0,
              l = t.aoColumns.length;
            s < l;
            s++
          )
            (a = t.aoColumns[s]),
              (o = n ? i[s] : Ge.createElement(a.sCellType)),
              d.push(o),
              (n && !a.mRender && a.mData === s) ||
                (o.innerHTML = m(t, e, s, "display")),
              a.sClass && (o.className += " " + a.sClass),
              a.bVisible && !n
                ? r.appendChild(o)
                : !a.bVisible && n && o.parentNode.removeChild(o),
              a.fnCreatedCell &&
                a.fnCreatedCell.call(t.oInstance, o, m(t, e, s), c, e, s);
          Rt(t, "aoRowCreatedCallback", null, [r, c, e]);
        }
        u.nTr.setAttribute("role", "row");
      }
      function f(t) {
        var e = t.nTr,
          n = t._aData;
        if (e) {
          if ((n.DT_RowId && (e.id = n.DT_RowId), n.DT_RowClass)) {
            var i = n.DT_RowClass.split(" ");
            (t.__rowc = t.__rowc ? pe(t.__rowc.concat(i)) : i),
              H(e).removeClass(t.__rowc.join(" ")).addClass(n.DT_RowClass);
          }
          n.DT_RowAttr && H(e).attr(n.DT_RowAttr),
            n.DT_RowData && H(e).data(n.DT_RowData);
        }
      }
      function h(t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.nTHead,
          s = t.nTFoot,
          l = 0 === H("th, td", a).length,
          u = t.oClasses,
          c = t.aoColumns;
        for (l && (r = H("<tr/>").appendTo(a)), e = 0, n = c.length; e < n; e++)
          (o = c[e]),
            (i = H(o.nTh).addClass(o.sClass)),
            l && i.appendTo(r),
            t.oFeatures.bSort &&
              (i.addClass(o.sSortingClass),
              !1 !== o.bSortable &&
                (i
                  .attr("tabindex", t.iTabIndex)
                  .attr("aria-controls", t.sTableId),
                Et(t, o.nTh, e))),
            o.sTitle != i.html() && i.html(o.sTitle),
            Ht(t, "header")(t, i, o, u);
        if (
          (l && U(t.aoHeader, a),
          H(a).find(">tr").attr("role", "row"),
          H(a).find(">tr>th, >tr>td").addClass(u.sHeaderTH),
          H(s).find(">tr>th, >tr>td").addClass(u.sFooterTH),
          null !== s)
        ) {
          var d = t.aoFooter[0];
          for (e = 0, n = d.length; e < n; e++)
            ((o = c[e]).nTf = d[e].cell),
              o.sClass && H(o.nTf).addClass(o.sClass);
        }
      }
      function y(t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          f = [],
          h = [],
          p = t.aoColumns.length;
        if (e) {
          for (n === Ye && (n = !1), i = 0, r = e.length; i < r; i++) {
            for (
              f[i] = e[i].slice(), f[i].nTr = e[i].nTr, o = p - 1;
              0 <= o;
              o--
            )
              t.aoColumns[o].bVisible || n || f[i].splice(o, 1);
            h.push([]);
          }
          for (i = 0, r = f.length; i < r; i++) {
            if ((u = f[i].nTr)) for (; (l = u.firstChild); ) u.removeChild(l);
            for (o = 0, a = f[i].length; o < a; o++)
              if (((d = c = 1), h[i][o] === Ye)) {
                for (
                  u.appendChild(f[i][o].cell), h[i][o] = 1;
                  f[i + c] !== Ye && f[i][o].cell == f[i + c][o].cell;

                )
                  (h[i + c][o] = 1), c++;
                for (
                  ;
                  f[i][o + d] !== Ye && f[i][o].cell == f[i][o + d].cell;

                ) {
                  for (s = 0; s < c; s++) h[i + s][o + d] = 1;
                  d++;
                }
                H(f[i][o].cell).attr("rowspan", c).attr("colspan", d);
              }
          }
        }
      }
      function b(t) {
        var e = Rt(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 === H.inArray(!1, e)) {
          var n = [],
            i = 0,
            r = t.asStripeClasses,
            o = r.length,
            a = (t.aoOpenRows.length, t.oLanguage),
            s = t.iInitDisplayStart,
            l = "ssp" == Bt(t),
            u = t.aiDisplay;
          (t.bDrawing = !0),
            s !== Ye &&
              -1 !== s &&
              ((t._iDisplayStart = l ? s : s >= t.fnRecordsDisplay() ? 0 : s),
              (t.iInitDisplayStart = -1));
          var c = t._iDisplayStart,
            d = t.fnDisplayEnd();
          if (t.bDeferLoading) (t.bDeferLoading = !1), t.iDraw++, dt(t, !1);
          else if (l) {
            if (!t.bDestroying && !k(t)) return;
          } else t.iDraw++;
          if (0 !== u.length)
            for (
              var f = l ? 0 : c, h = l ? t.aoData.length : d, p = f;
              p < h;
              p++
            ) {
              var m = u[p],
                g = t.aoData[m];
              null === g.nTr && T(t, m);
              var v = g.nTr;
              if (0 !== o) {
                var y = r[i % o];
                g._sRowStripe != y &&
                  (H(v).removeClass(g._sRowStripe).addClass(y),
                  (g._sRowStripe = y));
              }
              Rt(t, "aoRowCallback", null, [v, g._aData, i, p]), n.push(v), i++;
            }
          else {
            var b = a.sZeroRecords;
            1 == t.iDraw && "ajax" == Bt(t)
              ? (b = a.sLoadingRecords)
              : a.sEmptyTable &&
                0 === t.fnRecordsTotal() &&
                (b = a.sEmptyTable),
              (n[0] = H("<tr/>", { class: o ? r[0] : "" }).append(
                H("<td />", {
                  valign: "top",
                  colSpan: C(t),
                  class: t.oClasses.sRowEmpty,
                }).html(b)
              )[0]);
          }
          Rt(t, "aoHeaderCallback", "header", [
            H(t.nTHead).children("tr")[0],
            _(t),
            c,
            d,
            u,
          ]),
            Rt(t, "aoFooterCallback", "footer", [
              H(t.nTFoot).children("tr")[0],
              _(t),
              c,
              d,
              u,
            ]);
          var w = H(t.nTBody);
          w.children().detach(),
            w.append(H(n)),
            Rt(t, "aoDrawCallback", "draw", [t]),
            (t.bSorted = !1),
            (t.bFiltered = !1),
            (t.bDrawing = !1);
        } else dt(t, !1);
      }
      function w(t, e) {
        var n = t.oFeatures,
          i = n.bSort,
          r = n.bFilter;
        i && St(t),
          r
            ? z(t, t.oPreviousSearch)
            : (t.aiDisplay = t.aiDisplayMaster.slice()),
          !0 !== e && (t._iDisplayStart = 0),
          (t._drawHold = e),
          b(t),
          (t._drawHold = !1);
      }
      function D(t) {
        var e = t.oClasses,
          n = H(t.nTable),
          i = H("<div/>").insertBefore(n),
          r = t.oFeatures,
          o = H("<div/>", {
            id: t.sTableId + "_wrapper",
            class: e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter),
          });
        (t.nHolding = i[0]),
          (t.nTableWrapper = o[0]),
          (t.nTableReinsertBefore = t.nTable.nextSibling);
        for (
          var a, s, l, u, c, d, f = t.sDom.split(""), h = 0;
          h < f.length;
          h++
        ) {
          if (((a = null), "<" == (s = f[h]))) {
            if (((l = H("<div/>")[0]), "'" == (u = f[h + 1]) || '"' == u)) {
              for (c = "", d = 2; f[h + d] != u; ) (c += f[h + d]), d++;
              if (
                ("H" == c ? (c = e.sJUIHeader) : "F" == c && (c = e.sJUIFooter),
                -1 != c.indexOf("."))
              ) {
                var p = c.split(".");
                (l.id = p[0].substr(1, p[0].length - 1)), (l.className = p[1]);
              } else
                "#" == c.charAt(0)
                  ? (l.id = c.substr(1, c.length - 1))
                  : (l.className = c);
              h += d;
            }
            o.append(l), (o = H(l));
          } else if (">" == s) o = o.parent();
          else if ("l" == s && r.bPaginate && r.bLengthChange) a = st(t);
          else if ("f" == s && r.bFilter) a = j(t);
          else if ("r" == s && r.bProcessing) a = ct(t);
          else if ("t" == s) a = ft(t);
          else if ("i" == s && r.bInfo) a = et(t);
          else if ("p" == s && r.bPaginate) a = lt(t);
          else if (0 !== Vt.ext.feature.length)
            for (var m = Vt.ext.feature, g = 0, v = m.length; g < v; g++)
              if (s == m[g].cFeature) {
                a = m[g].fnInit(t);
                break;
              }
          if (a) {
            var y = t.aanFeatures;
            y[s] || (y[s] = []), y[s].push(a), o.append(a);
          }
        }
        i.replaceWith(o);
      }
      function U(t, e) {
        var n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          f,
          h = H(e).children("tr"),
          p = function (t, e, n) {
            for (var i = t[e]; i[n]; ) n++;
            return n;
          };
        for (t.splice(0, t.length), r = 0, s = h.length; r < s; r++) t.push([]);
        for (r = 0, s = h.length; r < s; r++)
          for (u = 0, i = (n = h[r]).firstChild; i; ) {
            if (
              "TD" == i.nodeName.toUpperCase() ||
              "TH" == i.nodeName.toUpperCase()
            )
              for (
                c =
                  (c = 1 * i.getAttribute("colspan")) && 0 !== c && 1 !== c
                    ? c
                    : 1,
                  d =
                    (d = 1 * i.getAttribute("rowspan")) && 0 !== d && 1 !== d
                      ? d
                      : 1,
                  l = p(t, r, u),
                  f = 1 === c,
                  a = 0;
                a < c;
                a++
              )
                for (o = 0; o < d; o++)
                  (t[r + o][l + a] = { cell: i, unique: f }),
                    (t[r + o].nTr = n);
            i = i.nextSibling;
          }
      }
      function V(t, e, n) {
        var i = [];
        n || ((n = t.aoHeader), e && U((n = []), e));
        for (var r = 0, o = n.length; r < o; r++)
          for (var a = 0, s = n[r].length; a < s; a++)
            !n[r][a].unique ||
              (i[a] && t.bSortCellsTop) ||
              (i[a] = n[r][a].cell);
        return i;
      }
      function E(i, t, e) {
        if ((Rt(i, "aoServerParams", "serverParams", [t]), t && H.isArray(t))) {
          var r = {},
            o = /(.*?)\[\]$/;
          H.each(t, function (t, e) {
            var n = e.name.match(o);
            if (n) {
              var i = n[0];
              r[i] || (r[i] = []), r[i].push(e.value);
            } else r[e.name] = e.value;
          }),
            (t = r);
        }
        var n,
          a = i.ajax,
          s = i.oInstance,
          l = function (t) {
            Rt(i, null, "xhr", [i, t]), e(t);
          };
        if (H.isPlainObject(a) && a.data) {
          n = a.data;
          var u = H.isFunction(n) ? n(t, i) : n;
          (t = H.isFunction(n) && u ? u : H.extend(!0, t, u)), delete a.data;
        }
        var c = {
          data: t,
          success: function (t) {
            var e = t.error || t.sError;
            e && i.oApi._fnLog(i, 0, e), (i.json = t), l(t);
          },
          dataType: "json",
          cache: !1,
          type: i.sServerMethod,
          error: function (t, e) {
            var n = i.oApi._fnLog;
            "parsererror" == e
              ? n(i, 0, "Invalid JSON response", 1)
              : 4 === t.readyState && n(i, 0, "Ajax error", 7),
              dt(i, !1);
          },
        };
        (i.oAjaxData = t),
          Rt(i, null, "preXhr", [i, t]),
          i.fnServerData
            ? i.fnServerData.call(
                s,
                i.sAjaxSource,
                H.map(t, function (t, e) {
                  return { name: e, value: t };
                }),
                l,
                i
              )
            : i.sAjaxSource || "string" == typeof a
            ? (i.jqXHR = H.ajax(H.extend(c, { url: a || i.sAjaxSource })))
            : H.isFunction(a)
            ? (i.jqXHR = a.call(s, t, l, i))
            : ((i.jqXHR = H.ajax(H.extend(c, a))), (a.data = n));
      }
      function k(e) {
        return (
          !e.bAjaxDataGet ||
          (e.iDraw++,
          dt(e, !0),
          E(e, i(e), function (t) {
            o(e, t);
          }),
          !1)
        );
      }
      function i(t) {
        var e,
          n,
          i,
          r,
          o = t.aoColumns,
          a = o.length,
          s = t.oFeatures,
          l = t.oPreviousSearch,
          u = t.aoPreSearchCols,
          c = [],
          d = Ct(t),
          f = t._iDisplayStart,
          h = !1 !== s.bPaginate ? t._iDisplayLength : -1,
          p = function (t, e) {
            c.push({ name: t, value: e });
          };
        p("sEcho", t.iDraw),
          p("iColumns", a),
          p("sColumns", ue(o, "sName").join(",")),
          p("iDisplayStart", f),
          p("iDisplayLength", h);
        var m = {
          draw: t.iDraw,
          columns: [],
          order: [],
          start: f,
          length: h,
          search: { value: l.sSearch, regex: l.bRegex },
        };
        for (e = 0; e < a; e++)
          (i = o[e]),
            (r = u[e]),
            (n = "function" == typeof i.mData ? "function" : i.mData),
            m.columns.push({
              data: n,
              name: i.sName,
              searchable: i.bSearchable,
              orderable: i.bSortable,
              search: { value: r.sSearch, regex: r.bRegex },
            }),
            p("mDataProp_" + e, n),
            s.bFilter &&
              (p("sSearch_" + e, r.sSearch),
              p("bRegex_" + e, r.bRegex),
              p("bSearchable_" + e, i.bSearchable)),
            s.bSort && p("bSortable_" + e, i.bSortable);
        s.bFilter && (p("sSearch", l.sSearch), p("bRegex", l.bRegex)),
          s.bSort &&
            (H.each(d, function (t, e) {
              m.order.push({ column: e.col, dir: e.dir }),
                p("iSortCol_" + t, e.col),
                p("sSortDir_" + t, e.dir);
            }),
            p("iSortingCols", d.length));
        var g = Vt.ext.legacy.ajax;
        return null === g ? (t.sAjaxSource ? c : m) : g ? c : m;
      }
      function o(t, n) {
        var e = function (t, e) {
            return n[t] !== Ye ? n[t] : n[e];
          },
          i = A(t, n),
          r = e("sEcho", "draw"),
          o = e("iTotalRecords", "recordsTotal"),
          a = e("iTotalDisplayRecords", "recordsFiltered");
        if (r) {
          if (1 * r < t.iDraw) return;
          t.iDraw = 1 * r;
        }
        d(t),
          (t._iRecordsTotal = parseInt(o, 10)),
          (t._iRecordsDisplay = parseInt(a, 10));
        for (var s = 0, l = i.length; s < l; s++) M(t, i[s]);
        (t.aiDisplay = t.aiDisplayMaster.slice()),
          (t.bAjaxDataGet = !1),
          b(t),
          t._bInitComplete || ot(t, n),
          (t.bAjaxDataGet = !0),
          dt(t, !1);
      }
      function A(t, e) {
        var n =
          H.isPlainObject(t.ajax) && t.ajax.dataSrc !== Ye
            ? t.ajax.dataSrc
            : t.sAjaxDataProp;
        return "data" === n ? e.aaData || e[n] : "" !== n ? p(n)(e) : e;
      }
      function j(i) {
        var t = i.oClasses,
          e = i.sTableId,
          n = i.oLanguage,
          r = i.oPreviousSearch,
          o = i.aanFeatures,
          a = '<input type="search" class="' + t.sFilterInput + '"/>',
          s = n.sSearch;
        s = s.match(/_INPUT_/) ? s.replace("_INPUT_", a) : s + a;
        var l = H("<div/>", {
            id: o.f ? null : e + "_filter",
            class: t.sFilter,
          }).append(H("<label/>").append(s)),
          u = function () {
            o.f;
            var t = this.value ? this.value : "";
            t != r.sSearch &&
              (z(i, {
                sSearch: t,
                bRegex: r.bRegex,
                bSmart: r.bSmart,
                bCaseInsensitive: r.bCaseInsensitive,
              }),
              (i._iDisplayStart = 0),
              b(i));
          },
          c =
            null !== i.searchDelay ? i.searchDelay : "ssp" === Bt(i) ? 400 : 0,
          d = H("input", l)
            .val(r.sSearch)
            .attr("placeholder", n.sSearchPlaceholder)
            .bind(
              "keyup.DT search.DT input.DT paste.DT cut.DT",
              c ? gt(u, c) : u
            )
            .bind("keypress.DT", function (t) {
              if (13 == t.keyCode) return !1;
            })
            .attr("aria-controls", e);
        return (
          H(i.nTable).on("search.dt.DT", function (t, e) {
            if (i === e)
              try {
                d[0] !== Ge.activeElement && d.val(r.sSearch);
              } catch (n) {}
          }),
          l[0]
        );
      }
      function z(t, e, n) {
        var i = t.oPreviousSearch,
          r = t.aoPreSearchCols,
          o = function (t) {
            (i.sSearch = t.sSearch),
              (i.bRegex = t.bRegex),
              (i.bSmart = t.bSmart),
              (i.bCaseInsensitive = t.bCaseInsensitive);
          },
          a = function (t) {
            return t.bEscapeRegex !== Ye ? !t.bEscapeRegex : t.bRegex;
          };
        if ((l(t), "ssp" != Bt(t))) {
          G(t, e.sSearch, n, a(e), e.bSmart, e.bCaseInsensitive), o(e);
          for (var s = 0; s < r.length; s++)
            J(t, r[s].sSearch, s, a(r[s]), r[s].bSmart, r[s].bCaseInsensitive);
          X(t);
        } else o(e);
        (t.bFiltered = !0), Rt(t, null, "search", [t]);
      }
      function X(t) {
        for (
          var e, n, i = Vt.ext.search, r = t.aiDisplay, o = 0, a = i.length;
          o < a;
          o++
        ) {
          for (var s = [], l = 0, u = r.length; l < u; l++)
            (n = r[l]),
              (e = t.aoData[n]),
              i[o](t, e._aFilterData, n, e._aData, l) && s.push(n);
          (r.length = 0), r.push.apply(r, s);
        }
      }
      function J(t, e, n, i, r, o) {
        if ("" !== e)
          for (
            var a, s = t.aiDisplay, l = Y(e, i, r, o), u = s.length - 1;
            0 <= u;
            u--
          )
            (a = t.aoData[s[u]]._aFilterData[n]), l.test(a) || s.splice(u, 1);
      }
      function G(t, e, n, i, r, o) {
        var a,
          s,
          l,
          u = Y(e, i, r, o),
          c = t.oPreviousSearch.sSearch,
          d = t.aiDisplayMaster;
        if ((0 !== Vt.ext.search.length && (n = !0), (s = Q(t)), e.length <= 0))
          t.aiDisplay = d.slice();
        else
          for (
            (s ||
              n ||
              c.length > e.length ||
              0 !== e.indexOf(c) ||
              t.bSorted) &&
              (t.aiDisplay = d.slice()),
              l = (a = t.aiDisplay).length - 1;
            0 <= l;
            l--
          )
            u.test(t.aoData[a[l]]._sFilterRow) || a.splice(l, 1);
      }
      function Y(t, e, n, i) {
        ((t = e ? t : K(t)), n) &&
          (t =
            "^(?=.*?" +
            H.map(t.match(/"[^"]+"|[^ ]+/g) || "", function (t) {
              if ('"' === t.charAt(0)) {
                var e = t.match(/^"(.*)"$/);
                t = e ? e[1] : t;
              }
              return t.replace('"', "");
            }).join(")(?=.*?") +
            ").*$");
        return new RegExp(t, i ? "i" : "");
      }
      function K(t) {
        return t.replace(ee, "\\$1");
      }
      function Q(t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u = t.aoColumns,
          c = Vt.ext.type.search,
          d = !1;
        for (n = 0, r = t.aoData.length; n < r; n++)
          if (!(l = t.aoData[n])._aFilterData) {
            for (a = [], i = 0, o = u.length; i < o; i++)
              (e = u[i]).bSearchable
                ? ((s = m(t, n, i, "filter")),
                  c[e.sType] && (s = c[e.sType](s)),
                  null === s && (s = ""),
                  "string" != typeof s && s.toString && (s = s.toString()))
                : (s = ""),
                s.indexOf &&
                  -1 !== s.indexOf("&") &&
                  ((ye.innerHTML = s),
                  (s = be ? ye.textContent : ye.innerText)),
                s.replace && (s = s.replace(/[\r\n]/g, "")),
                a.push(s);
            (l._aFilterData = a), (l._sFilterRow = a.join("  ")), (d = !0);
          }
        return d;
      }
      function Z(t) {
        return {
          search: t.sSearch,
          smart: t.bSmart,
          regex: t.bRegex,
          caseInsensitive: t.bCaseInsensitive,
        };
      }
      function tt(t) {
        return {
          sSearch: t.search,
          bSmart: t.smart,
          bRegex: t.regex,
          bCaseInsensitive: t.caseInsensitive,
        };
      }
      function et(t) {
        var e = t.sTableId,
          n = t.aanFeatures.i,
          i = H("<div/>", {
            class: t.oClasses.sInfo,
            id: n ? null : e + "_info",
          });
        return (
          n ||
            (t.aoDrawCallback.push({ fn: nt, sName: "information" }),
            i.attr("role", "status").attr("aria-live", "polite"),
            H(t.nTable).attr("aria-describedby", e + "_info")),
          i[0]
        );
      }
      function nt(t) {
        var e = t.aanFeatures.i;
        if (0 !== e.length) {
          var n = t.oLanguage,
            i = t._iDisplayStart + 1,
            r = t.fnDisplayEnd(),
            o = t.fnRecordsTotal(),
            a = t.fnRecordsDisplay(),
            s = a ? n.sInfo : n.sInfoEmpty;
          a !== o && (s += " " + n.sInfoFiltered),
            (s = it(t, (s += n.sInfoPostFix)));
          var l = n.fnInfoCallback;
          null !== l && (s = l.call(t.oInstance, t, i, r, o, a, s)),
            H(e).html(s);
        }
      }
      function it(t, e) {
        var n = t.fnFormatNumber,
          i = t._iDisplayStart + 1,
          r = t._iDisplayLength,
          o = t.fnRecordsDisplay(),
          a = -1 === r;
        return e
          .replace(/_START_/g, n.call(t, i))
          .replace(/_END_/g, n.call(t, t.fnDisplayEnd()))
          .replace(/_MAX_/g, n.call(t, t.fnRecordsTotal()))
          .replace(/_TOTAL_/g, n.call(t, o))
          .replace(/_PAGE_/g, n.call(t, a ? 1 : Math.ceil(i / r)))
          .replace(/_PAGES_/g, n.call(t, a ? 1 : Math.ceil(o / r)));
      }
      function rt(n) {
        var i,
          t,
          e,
          r = n.iInitDisplayStart,
          o = n.aoColumns,
          a = n.oFeatures;
        if (n.bInitialised) {
          for (
            D(n),
              h(n),
              y(n, n.aoHeader),
              y(n, n.aoFooter),
              dt(n, !0),
              a.bAutoWidth && mt(n),
              i = 0,
              t = o.length;
            i < t;
            i++
          )
            (e = o[i]).sWidth && (e.nTh.style.width = _t(e.sWidth));
          w(n);
          var s = Bt(n);
          "ssp" != s &&
            ("ajax" == s
              ? E(
                  n,
                  [],
                  function (t) {
                    var e = A(n, t);
                    for (i = 0; i < e.length; i++) M(n, e[i]);
                    (n.iInitDisplayStart = r), w(n), dt(n, !1), ot(n, t);
                  },
                  n
                )
              : (dt(n, !1), ot(n)));
        } else
          setTimeout(function () {
            rt(n);
          }, 200);
      }
      function ot(t, e) {
        (t._bInitComplete = !0),
          e && x(t),
          Rt(t, "aoInitComplete", "init", [t, e]);
      }
      function at(t, e) {
        var n = parseInt(e, 10);
        (t._iDisplayLength = n), Mt(t), Rt(t, null, "length", [t, n]);
      }
      function st(i) {
        for (
          var t = i.oClasses,
            e = i.sTableId,
            n = i.aLengthMenu,
            r = H.isArray(n[0]),
            o = r ? n[0] : n,
            a = r ? n[1] : n,
            s = H("<select/>", {
              name: e + "_length",
              "aria-controls": e,
              class: t.sLengthSelect,
            }),
            l = 0,
            u = o.length;
          l < u;
          l++
        )
          s[0][l] = new Option(a[l], o[l]);
        var c = H("<div><label/></div>").addClass(t.sLength);
        return (
          i.aanFeatures.l || (c[0].id = e + "_length"),
          c
            .children()
            .append(i.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)),
          H("select", c)
            .val(i._iDisplayLength)
            .bind("change.DT", function () {
              at(i, H(this).val()), b(i);
            }),
          H(i.nTable).bind("length.dt.DT", function (t, e, n) {
            i === e && H("select", c).val(n);
          }),
          c[0]
        );
      }
      function lt(t) {
        var e = t.sPaginationType,
          c = Vt.ext.pager[e],
          d = "function" == typeof c,
          f = function (t) {
            b(t);
          },
          n = H("<div/>").addClass(t.oClasses.sPaging + e)[0],
          h = t.aanFeatures;
        return (
          d || c.fnInit(t, n, f),
          h.p ||
            ((n.id = t.sTableId + "_paginate"),
            t.aoDrawCallback.push({
              fn: function (t) {
                if (d) {
                  var e,
                    n,
                    i = t._iDisplayStart,
                    r = t._iDisplayLength,
                    o = t.fnRecordsDisplay(),
                    a = -1 === r,
                    s = a ? 0 : Math.ceil(i / r),
                    l = a ? 1 : Math.ceil(o / r),
                    u = c(s, l);
                  for (e = 0, n = h.p.length; e < n; e++)
                    Ht(t, "pageButton")(t, h.p[e], e, u, s, l);
                } else c.fnUpdate(t, f);
              },
              sName: "pagination",
            })),
          n
        );
      }
      function ut(t, e, n) {
        var i = t._iDisplayStart,
          r = t._iDisplayLength,
          o = t.fnRecordsDisplay();
        0 === o || -1 === r
          ? (i = 0)
          : "number" == typeof e
          ? o < (i = e * r) && (i = 0)
          : "first" == e
          ? (i = 0)
          : "previous" == e
          ? (i = 0 <= r ? i - r : 0) < 0 && (i = 0)
          : "next" == e
          ? i + r < o && (i += r)
          : "last" == e
          ? (i = Math.floor((o - 1) / r) * r)
          : Ft(t, 0, "Unknown paging action: " + e, 5);
        var a = t._iDisplayStart !== i;
        return (
          (t._iDisplayStart = i), a && (Rt(t, null, "page", [t]), n && b(t)), a
        );
      }
      function ct(t) {
        return H("<div/>", {
          id: t.aanFeatures.r ? null : t.sTableId + "_processing",
          class: t.oClasses.sProcessing,
        })
          .html(t.oLanguage.sProcessing)
          .insertBefore(t.nTable)[0];
      }
      function dt(t, e) {
        t.oFeatures.bProcessing &&
          H(t.aanFeatures.r).css("display", e ? "block" : "none"),
          Rt(t, null, "processing", [t, e]);
      }
      function ft(t) {
        var e = H(t.nTable);
        e.attr("role", "grid");
        var n = t.oScroll;
        if ("" === n.sX && "" === n.sY) return t.nTable;
        var i = n.sX,
          r = n.sY,
          o = t.oClasses,
          a = e.children("caption"),
          s = a.length ? a[0]._captionSide : null,
          l = H(e[0].cloneNode(!1)),
          u = H(e[0].cloneNode(!1)),
          c = e.children("tfoot"),
          d = "<div/>",
          f = function (t) {
            return t ? _t(t) : null;
          };
        n.sX && "100%" === e.attr("width") && e.removeAttr("width"),
          c.length || (c = null);
        var h = H(d, { class: o.sScrollWrapper })
          .append(
            H(d, { class: o.sScrollHead })
              .css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: i ? f(i) : "100%",
              })
              .append(
                H(d, { class: o.sScrollHeadInner })
                  .css({
                    "box-sizing": "content-box",
                    width: n.sXInner || "100%",
                  })
                  .append(
                    l
                      .removeAttr("id")
                      .css("margin-left", 0)
                      .append("top" === s ? a : null)
                      .append(e.children("thead"))
                  )
              )
          )
          .append(
            H(d, { class: o.sScrollBody })
              .css({ overflow: "auto", height: f(r), width: f(i) })
              .append(e)
          );
        c &&
          h.append(
            H(d, { class: o.sScrollFoot })
              .css({ overflow: "hidden", border: 0, width: i ? f(i) : "100%" })
              .append(
                H(d, { class: o.sScrollFootInner }).append(
                  u
                    .removeAttr("id")
                    .css("margin-left", 0)
                    .append("bottom" === s ? a : null)
                    .append(e.children("tfoot"))
                )
              )
          );
        var p = h.children(),
          m = p[0],
          g = p[1],
          v = c ? p[2] : null;
        return (
          i &&
            H(g).on("scroll.DT", function () {
              var t = this.scrollLeft;
              (m.scrollLeft = t), c && (v.scrollLeft = t);
            }),
          (t.nScrollHead = m),
          (t.nScrollBody = g),
          (t.nScrollFoot = v),
          t.aoDrawCallback.push({ fn: ht, sName: "scrolling" }),
          h[0]
        );
      }
      function ht(n) {
        var t,
          e,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          c = n.oScroll,
          d = c.sX,
          f = c.sXInner,
          h = c.sY,
          p = c.iBarWidth,
          m = H(n.nScrollHead),
          g = m[0].style,
          v = m.children("div"),
          y = v[0].style,
          b = v.children("table"),
          w = n.nScrollBody,
          _ = H(w),
          x = w.style,
          C = H(n.nScrollFoot).children("div"),
          S = C.children("table"),
          T = H(n.nTHead),
          D = H(n.nTable),
          E = D[0],
          k = E.style,
          A = n.nTFoot ? H(n.nTFoot) : null,
          j = n.oBrowser,
          N = j.bScrollOversize,
          I = [],
          F = [],
          $ = [],
          L = function (t) {
            var e = t.style;
            (e.paddingTop = "0"),
              (e.paddingBottom = "0"),
              (e.borderTopWidth = "0"),
              (e.borderBottomWidth = "0"),
              (e.height = 0);
          };
        if (
          (D.children("thead, tfoot").remove(),
          (o = T.clone().prependTo(D)),
          (t = T.find("tr")),
          (i = o.find("tr")),
          o.find("th, td").removeAttr("tabindex"),
          A &&
            ((a = A.clone().prependTo(D)),
            (e = A.find("tr")),
            (r = a.find("tr"))),
          d || ((x.width = "100%"), (m[0].style.width = "100%")),
          H.each(V(n, o), function (t, e) {
            (s = B(n, t)), (e.style.width = n.aoColumns[s].sWidth);
          }),
          A &&
            pt(function (t) {
              t.style.width = "";
            }, r),
          c.bCollapse &&
            "" !== h &&
            (x.height = _[0].offsetHeight + T[0].offsetHeight + "px"),
          (u = D.outerWidth()),
          "" === d
            ? ((k.width = "100%"),
              N &&
                (D.find("tbody").height() > w.offsetHeight ||
                  "scroll" == _.css("overflow-y")) &&
                (k.width = _t(D.outerWidth() - p)))
            : "" !== f
            ? (k.width = _t(f))
            : u == _.width() && _.height() < D.height()
            ? ((k.width = _t(u - p)),
              D.outerWidth() > u - p && (k.width = _t(u)))
            : (k.width = _t(u)),
          (u = D.outerWidth()),
          pt(L, i),
          pt(function (t) {
            $.push(t.innerHTML), I.push(_t(H(t).css("width")));
          }, i),
          pt(function (t, e) {
            t.style.width = I[e];
          }, t),
          H(i).height(0),
          A &&
            (pt(L, r),
            pt(function (t) {
              F.push(_t(H(t).css("width")));
            }, r),
            pt(function (t, e) {
              t.style.width = F[e];
            }, e),
            H(r).height(0)),
          pt(function (t, e) {
            (t.innerHTML =
              '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
              $[e] +
              "</div>"),
              (t.style.width = I[e]);
          }, i),
          A &&
            pt(function (t, e) {
              (t.innerHTML = ""), (t.style.width = F[e]);
            }, r),
          D.outerWidth() < u
            ? ((l =
                w.scrollHeight > w.offsetHeight ||
                "scroll" == _.css("overflow-y")
                  ? u + p
                  : u),
              N &&
                (w.scrollHeight > w.offsetHeight ||
                  "scroll" == _.css("overflow-y")) &&
                (k.width = _t(l - p)),
              ("" !== d && "" === f) ||
                Ft(n, 1, "Possible column misalignment", 6))
            : (l = "100%"),
          (x.width = _t(l)),
          (g.width = _t(l)),
          A && (n.nScrollFoot.style.width = _t(l)),
          h || (N && (x.height = _t(E.offsetHeight + p))),
          h && c.bCollapse)
        ) {
          x.height = _t(h);
          var O = d && E.offsetWidth > w.offsetWidth ? p : 0;
          E.offsetHeight < w.offsetHeight &&
            (x.height = _t(E.offsetHeight + O));
        }
        var P = D.outerWidth();
        (b[0].style.width = _t(P)), (y.width = _t(P));
        var R = D.height() > w.clientHeight || "scroll" == _.css("overflow-y"),
          M = "padding" + (j.bScrollbarLeft ? "Left" : "Right");
        (y[M] = R ? p + "px" : "0px"),
          A &&
            ((S[0].style.width = _t(P)),
            (C[0].style.width = _t(P)),
            (C[0].style[M] = R ? p + "px" : "0px")),
          _.scroll(),
          (!n.bSorted && !n.bFiltered) || n._drawHold || (w.scrollTop = 0);
      }
      function pt(t, e, n) {
        for (var i, r, o = 0, a = 0, s = e.length; a < s; ) {
          for (i = e[a].firstChild, r = n ? n[a].firstChild : null; i; )
            1 === i.nodeType && (n ? t(i, r, o) : t(i, o), o++),
              (i = i.nextSibling),
              (r = n ? r.nextSibling : null);
          a++;
        }
      }
      function mt(t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.nTable,
          s = t.aoColumns,
          l = t.oScroll,
          u = l.sY,
          c = l.sX,
          d = l.sXInner,
          f = s.length,
          h = S(t, "bVisible"),
          p = H("th", t.nTHead),
          m = a.getAttribute("width"),
          g = a.parentNode,
          v = !1,
          y = a.style.width;
        for (y && -1 !== y.indexOf("%") && (m = y), e = 0; e < h.length; e++)
          null !== (n = s[h[e]]).sWidth &&
            ((n.sWidth = vt(n.sWidthOrig, g)), (v = !0));
        if (v || c || u || f != C(t) || f != p.length) {
          var b = H(a)
            .clone()
            .empty()
            .css("visibility", "hidden")
            .removeAttr("id")
            .append(H(t.nTHead).clone(!1))
            .append(H(t.nTFoot).clone(!1))
            .append(H("<tbody><tr/></tbody>"));
          b.find("tfoot th, tfoot td").css("width", "");
          var w = b.find("tbody tr");
          for (p = V(t, b.find("thead")[0]), e = 0; e < h.length; e++)
            (n = s[h[e]]),
              (p[e].style.width =
                null !== n.sWidthOrig && "" !== n.sWidthOrig
                  ? _t(n.sWidthOrig)
                  : "");
          if (t.aoData.length)
            for (e = 0; e < h.length; e++)
              (n = s[(i = h[e])]),
                H(bt(t, i)).clone(!1).append(n.sContentPadding).appendTo(w);
          if (
            (b.appendTo(g),
            c && d
              ? b.width(d)
              : c
              ? (b.css("width", "auto"),
                b.width() < g.offsetWidth && b.width(g.offsetWidth))
              : u
              ? b.width(g.offsetWidth)
              : m && b.width(m),
            yt(t, b[0]),
            c)
          ) {
            var _ = 0;
            for (e = 0; e < h.length; e++)
              (n = s[h[e]]),
                (o = H(p[e]).outerWidth()),
                (_ +=
                  null === n.sWidthOrig
                    ? o
                    : parseInt(n.sWidth, 10) + o - H(p[e]).width());
            b.width(_t(_)), (a.style.width = _t(_));
          }
          for (e = 0; e < h.length; e++)
            (n = s[h[e]]), (r = H(p[e]).width()) && (n.sWidth = _t(r));
          (a.style.width = _t(b.css("width"))), b.remove();
        } else for (e = 0; e < f; e++) s[e].sWidth = _t(p.eq(e).width());
        m && (a.style.width = _t(m)),
          (!m && !c) ||
            t._reszEvt ||
            (H(Je).bind(
              "resize.DT-" + t.sInstance,
              gt(function () {
                x(t);
              })
            ),
            (t._reszEvt = !0));
      }
      function gt(i, t) {
        var r,
          o,
          a = t !== Ye ? t : 200;
        return function () {
          var t = this,
            e = +new Date(),
            n = arguments;
          r && e < r + a
            ? (clearTimeout(o),
              (o = setTimeout(function () {
                (r = Ye), i.apply(t, n);
              }, a)))
            : ((r = e), i.apply(t, n));
        };
      }
      function vt(t, e) {
        if (!t) return 0;
        var n = H("<div/>")
            .css("width", _t(t))
            .appendTo(e || Ge.body),
          i = n[0].offsetWidth;
        return n.remove(), i;
      }
      function yt(t, e) {
        var n = t.oScroll;
        if (n.sX || n.sY) {
          var i = n.sX ? 0 : n.iBarWidth;
          e.style.width = _t(H(e).outerWidth() - i);
        }
      }
      function bt(t, e) {
        var n = wt(t, e);
        if (n < 0) return null;
        var i = t.aoData[n];
        return i.nTr ? i.anCells[e] : H("<td/>").html(m(t, n, e, "display"))[0];
      }
      function wt(t, e) {
        for (var n, i = -1, r = -1, o = 0, a = t.aoData.length; o < a; o++)
          (n = (n = m(t, o, e, "display") + "").replace(we, "")).length > i &&
            ((i = n.length), (r = o));
        return r;
      }
      function _t(t) {
        return null === t
          ? "0px"
          : "number" == typeof t
          ? t < 0
            ? "0px"
            : t + "px"
          : t.match(/\d$/)
          ? t + "px"
          : t;
      }
      function xt() {
        var t = Vt.__scrollbarWidth;
        if (t === Ye) {
          var e = H("<p/>")
            .css({
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 150,
              padding: 0,
              overflow: "scroll",
              visibility: "hidden",
            })
            .appendTo("body");
          (t = e[0].offsetWidth - e[0].clientWidth),
            (Vt.__scrollbarWidth = t),
            e.remove();
        }
        return t;
      }
      function Ct(t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l = [],
          u = t.aoColumns,
          c = t.aaSortingFixed,
          d = H.isPlainObject(c),
          f = [],
          h = function (t) {
            t.length && !H.isArray(t[0]) ? f.push(t) : f.push.apply(f, t);
          };
        for (
          H.isArray(c) && h(c),
            d && c.pre && h(c.pre),
            h(t.aaSorting),
            d && c.post && h(c.post),
            e = 0;
          e < f.length;
          e++
        )
          for (n = 0, i = (r = u[(s = f[e][0])].aDataSort).length; n < i; n++)
            (a = u[(o = r[n])].sType || "string"),
              f[e]._idx === Ye &&
                (f[e]._idx = H.inArray(f[e][1], u[o].asSorting)),
              l.push({
                src: s,
                col: o,
                dir: f[e][1],
                index: f[e]._idx,
                type: a,
                formatter: Vt.ext.type.order[a + "-pre"],
              });
        return l;
      }
      function St(t) {
        var e,
          n,
          i,
          r,
          c,
          d = [],
          f = Vt.ext.type.order,
          h = t.aoData,
          o = (t.aoColumns, 0),
          a = t.aiDisplayMaster;
        for (l(t), e = 0, n = (c = Ct(t)).length; e < n; e++)
          (r = c[e]).formatter && o++, At(t, r.col);
        if ("ssp" != Bt(t) && 0 !== c.length) {
          for (e = 0, i = a.length; e < i; e++) d[a[e]] = e;
          o === c.length
            ? a.sort(function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  a,
                  s = c.length,
                  l = h[t]._aSortData,
                  u = h[e]._aSortData;
                for (r = 0; r < s; r++)
                  if (
                    0 !==
                    (o =
                      (n = l[(a = c[r]).col]) < (i = u[a.col])
                        ? -1
                        : i < n
                        ? 1
                        : 0)
                  )
                    return "asc" === a.dir ? o : -o;
                return (n = d[t]) < (i = d[e]) ? -1 : i < n ? 1 : 0;
              })
            : a.sort(function (t, e) {
                var n,
                  i,
                  r,
                  o,
                  a,
                  s = c.length,
                  l = h[t]._aSortData,
                  u = h[e]._aSortData;
                for (r = 0; r < s; r++)
                  if (
                    ((n = l[(a = c[r]).col]),
                    (i = u[a.col]),
                    0 !==
                      (o = (f[a.type + "-" + a.dir] || f["string-" + a.dir])(
                        n,
                        i
                      )))
                  )
                    return o;
                return (n = d[t]) < (i = d[e]) ? -1 : i < n ? 1 : 0;
              });
        }
        t.bSorted = !0;
      }
      function Tt(t) {
        for (
          var e,
            n,
            i = t.aoColumns,
            r = Ct(t),
            o = t.oLanguage.oAria,
            a = 0,
            s = i.length;
          a < s;
          a++
        ) {
          var l = i[a],
            u = l.asSorting,
            c = l.sTitle.replace(/<.*?>/g, ""),
            d = l.nTh;
          d.removeAttribute("aria-sort"),
            l.bSortable
              ? (0 < r.length && r[0].col == a
                  ? (d.setAttribute(
                      "aria-sort",
                      "asc" == r[0].dir ? "ascending" : "descending"
                    ),
                    (n = u[r[0].index + 1] || u[0]))
                  : (n = u[0]),
                (e = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)))
              : (e = c),
            d.setAttribute("aria-label", e);
        }
      }
      function Dt(t, e, n, i) {
        var r,
          o = t.aoColumns[e],
          a = t.aaSorting,
          s = o.asSorting,
          l = function (t, e) {
            var n = t._idx;
            return (
              n === Ye && (n = H.inArray(t[1], s)),
              n + 1 < s.length ? n + 1 : e ? null : 0
            );
          };
        if (
          ("number" == typeof a[0] && (a = t.aaSorting = [a]),
          n && t.oFeatures.bSortMulti)
        ) {
          var u = H.inArray(e, ue(a, "0"));
          -1 !== u
            ? (null === (r = l(a[u], !0)) && 1 === a.length && (r = 0),
              null === r ? a.splice(u, 1) : ((a[u][1] = s[r]), (a[u]._idx = r)))
            : (a.push([e, s[0], 0]), (a[a.length - 1]._idx = 0));
        } else a.length && a[0][0] == e ? ((r = l(a[0])), (a.length = 1), (a[0][1] = s[r]), (a[0]._idx = r)) : ((a.length = 0), a.push([e, s[0]]), (a[0]._idx = 0));
        w(t), "function" == typeof i && i(t);
      }
      function Et(e, t, n, i) {
        var r = e.aoColumns[n];
        Ot(t, {}, function (t) {
          !1 !== r.bSortable &&
            (e.oFeatures.bProcessing
              ? (dt(e, !0),
                setTimeout(function () {
                  Dt(e, n, t.shiftKey, i), "ssp" !== Bt(e) && dt(e, !1);
                }, 0))
              : Dt(e, n, t.shiftKey, i));
        });
      }
      function kt(t) {
        var e,
          n,
          i,
          r = t.aLastSort,
          o = t.oClasses.sSortColumn,
          a = Ct(t),
          s = t.oFeatures;
        if (s.bSort && s.bSortClasses) {
          for (e = 0, n = r.length; e < n; e++)
            (i = r[e].src),
              H(ue(t.aoData, "anCells", i)).removeClass(
                o + (e < 2 ? e + 1 : 3)
              );
          for (e = 0, n = a.length; e < n; e++)
            (i = a[e].src),
              H(ue(t.aoData, "anCells", i)).addClass(o + (e < 2 ? e + 1 : 3));
        }
        t.aLastSort = a;
      }
      function At(t, e) {
        var n,
          i,
          r,
          o = t.aoColumns[e],
          a = Vt.ext.order[o.sSortDataType];
        a && (n = a.call(t.oInstance, t, e, c(t, e)));
        for (
          var s = Vt.ext.type.order[o.sType + "-pre"],
            l = 0,
            u = t.aoData.length;
          l < u;
          l++
        )
          (i = t.aoData[l])._aSortData || (i._aSortData = []),
            (i._aSortData[e] && !a) ||
              ((r = a ? n[l] : m(t, l, e, "sort")),
              (i._aSortData[e] = s ? s(r) : r));
      }
      function jt(n) {
        if (n.oFeatures.bStateSave && !n.bDestroying) {
          var t = {
            time: +new Date(),
            start: n._iDisplayStart,
            length: n._iDisplayLength,
            order: H.extend(!0, [], n.aaSorting),
            search: Z(n.oPreviousSearch),
            columns: H.map(n.aoColumns, function (t, e) {
              return { visible: t.bVisible, search: Z(n.aoPreSearchCols[e]) };
            }),
          };
          Rt(n, "aoStateSaveParams", "stateSaveParams", [n, t]),
            (n.oSavedState = t),
            n.fnStateSaveCallback.call(n.oInstance, n, t);
        }
      }
      function Nt(n) {
        var t,
          e,
          i = n.aoColumns;
        if (n.oFeatures.bStateSave) {
          var r = n.fnStateLoadCallback.call(n.oInstance, n);
          if (r && r.time) {
            var o = Rt(n, "aoStateLoadParams", "stateLoadParams", [n, r]);
            if (-1 === H.inArray(!1, o)) {
              var a = n.iStateDuration;
              if (
                !(0 < a && r.time < +new Date() - 1e3 * a) &&
                i.length === r.columns.length
              ) {
                for (
                  n.oLoadedState = H.extend(!0, {}, r),
                    r.start !== Ye &&
                      ((n._iDisplayStart = r.start),
                      (n.iInitDisplayStart = r.start)),
                    r.length !== Ye && (n._iDisplayLength = r.length),
                    r.order !== Ye &&
                      ((n.aaSorting = []),
                      H.each(r.order, function (t, e) {
                        n.aaSorting.push(e[0] >= i.length ? [0, e[1]] : e);
                      })),
                    r.search !== Ye &&
                      H.extend(n.oPreviousSearch, tt(r.search)),
                    t = 0,
                    e = r.columns.length;
                  t < e;
                  t++
                ) {
                  var s = r.columns[t];
                  s.visible !== Ye && (i[t].bVisible = s.visible),
                    s.search !== Ye &&
                      H.extend(n.aoPreSearchCols[t], tt(s.search));
                }
                Rt(n, "aoStateLoaded", "stateLoaded", [n, r]);
              }
            }
          }
        }
      }
      function It(t) {
        var e = Vt.settings,
          n = H.inArray(t, ue(e, "nTable"));
        return -1 !== n ? e[n] : null;
      }
      function Ft(t, e, n, i) {
        if (
          ((n =
            "DataTables warning: " +
            (null !== t ? "table id=" + t.sTableId + " - " : "") +
            n),
          i &&
            (n +=
              ". For more information about this error, please see http://datatables.net/tn/" +
              i),
          e)
        )
          Je.console && console.log && console.log(n);
        else {
          var r = Vt.ext,
            o = r.sErrMode || r.errMode;
          if ((Rt(t, null, "error", [t, i, n]), "alert" == o)) alert(n);
          else {
            if ("throw" == o) throw new Error(n);
            "function" == typeof o && o(t, i, n);
          }
        }
      }
      function $t(n, i, t, e) {
        H.isArray(t)
          ? H.each(t, function (t, e) {
              H.isArray(e) ? $t(n, i, e[0], e[1]) : $t(n, i, e);
            })
          : (e === Ye && (e = t), i[t] !== Ye && (n[e] = i[t]));
      }
      function Lt(t, e, n) {
        var i;
        for (var r in e)
          e.hasOwnProperty(r) &&
            ((i = e[r]),
            H.isPlainObject(i)
              ? (H.isPlainObject(t[r]) || (t[r] = {}), H.extend(!0, t[r], i))
              : n && "data" !== r && "aaData" !== r && H.isArray(i)
              ? (t[r] = i.slice())
              : (t[r] = i));
        return t;
      }
      function Ot(e, t, n) {
        H(e)
          .bind("click.DT", t, function (t) {
            e.blur(), n(t);
          })
          .bind("keypress.DT", t, function (t) {
            13 === t.which && (t.preventDefault(), n(t));
          })
          .bind("selectstart.DT", function () {
            return !1;
          });
      }
      function Pt(t, e, n, i) {
        n && t[e].push({ fn: n, sName: i });
      }
      function Rt(e, t, n, i) {
        var r = [];
        return (
          t &&
            (r = H.map(e[t].slice().reverse(), function (t) {
              return t.fn.apply(e.oInstance, i);
            })),
          null !== n && H(e.nTable).trigger(n + ".dt", i),
          r
        );
      }
      function Mt(t) {
        var e = t._iDisplayStart,
          n = t.fnDisplayEnd(),
          i = t._iDisplayLength;
        n <= e && (e = n - i),
          (e -= e % i),
          (-1 === i || e < 0) && (e = 0),
          (t._iDisplayStart = e);
      }
      function Ht(t, e) {
        var n = t.renderer,
          i = Vt.ext.renderer[e];
        return H.isPlainObject(n) && n[e]
          ? i[n[e]] || i._
          : ("string" == typeof n && i[n]) || i._;
      }
      function Bt(t) {
        return t.oFeatures.bServerSide
          ? "ssp"
          : t.ajax || t.sAjaxSource
          ? "ajax"
          : "dom";
      }
      function Wt(t, e) {
        var n = [],
          i = ze.numbers_length,
          r = Math.floor(i / 2);
        return (
          e <= i
            ? (n = de(0, e))
            : t <= r
            ? ((n = de(0, i - 2)).push("ellipsis"), n.push(e - 1))
            : (e - 1 - r <= t
                ? (n = de(e - (i - 2), e)).splice(0, 0, "ellipsis")
                : ((n = de(t - r + 2, t + r - 1)).push("ellipsis"),
                  n.push(e - 1),
                  n.splice(0, 0, "ellipsis")),
              n.splice(0, 0, 0)),
          (n.DT_el = "span"),
          n
        );
      }
      function qt(n) {
        H.each(
          {
            num: function (t) {
              return Xe(t, n);
            },
            "num-fmt": function (t) {
              return Xe(t, n, ne);
            },
            "html-num": function (t) {
              return Xe(t, n, Qt);
            },
            "html-num-fmt": function (t) {
              return Xe(t, n, Qt, ne);
            },
          },
          function (t, e) {
            (zt.type.order[t + n + "-pre"] = e),
              t.match(/^html\-/) &&
                (zt.type.search[t + n] = zt.type.search.html);
          }
        );
      }
      function Ut(e) {
        return function () {
          var t = [It(this[Vt.ext.iApiIndex])].concat(
            Array.prototype.slice.call(arguments)
          );
          return Vt.ext.internal[e].apply(this, t);
        };
      }
      var Vt,
        zt,
        Xt,
        Jt,
        Gt,
        Yt = {},
        Kt = /[\r\n]/g,
        Qt = /<.*?>/g,
        Zt = /^[\w\+\-]/,
        te = /[\w\+\-]$/,
        ee = new RegExp(
          "(\\" +
            [
              "/",
              ".",
              "*",
              "+",
              "?",
              "|",
              "(",
              ")",
              "[",
              "]",
              "{",
              "}",
              "\\",
              "$",
              "^",
              "-",
            ].join("|\\") +
            ")",
          "g"
        ),
        ne = /[',$\xa3\u20ac\xa5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        ie = function (t) {
          return !t || !0 === t || "-" === t;
        },
        re = function (t) {
          var e = parseInt(t, 10);
          return !isNaN(e) && isFinite(t) ? e : null;
        },
        oe = function (t, e) {
          return (
            Yt[e] || (Yt[e] = new RegExp(K(e), "g")),
            "string" == typeof t && "." !== e
              ? t.replace(/\./g, "").replace(Yt[e], ".")
              : t
          );
        },
        ae = function (t, e, n) {
          var i = "string" == typeof t;
          return (
            !!ie(t) ||
            (e && i && (t = oe(t, e)),
            n && i && (t = t.replace(ne, "")),
            !isNaN(parseFloat(t)) && isFinite(t))
          );
        },
        se = function (t) {
          return ie(t) || "string" == typeof t;
        },
        le = function (t, e, n) {
          return !!ie(t) || (se(t) && !!ae(he(t), e, n)) || null;
        },
        ue = function (t, e, n) {
          var i = [],
            r = 0,
            o = t.length;
          if (n !== Ye)
            for (; r < o; r++) t[r] && t[r][e] && i.push(t[r][e][n]);
          else for (; r < o; r++) t[r] && i.push(t[r][e]);
          return i;
        },
        ce = function (t, e, n, i) {
          var r = [],
            o = 0,
            a = e.length;
          if (i !== Ye) for (; o < a; o++) t[e[o]][n] && r.push(t[e[o]][n][i]);
          else for (; o < a; o++) r.push(t[e[o]][n]);
          return r;
        },
        de = function (t, e) {
          var n,
            i = [];
          e === Ye ? ((e = 0), (n = t)) : ((n = e), (e = t));
          for (var r = e; r < n; r++) i.push(r);
          return i;
        },
        fe = function (t) {
          for (var e = [], n = 0, i = t.length; n < i; n++)
            t[n] && e.push(t[n]);
          return e;
        },
        he = function (t) {
          return t.replace(Qt, "");
        },
        pe = function (t) {
          var e,
            n,
            i,
            r = [],
            o = t.length,
            a = 0;
          t: for (n = 0; n < o; n++) {
            for (e = t[n], i = 0; i < a; i++) if (r[i] === e) continue t;
            r.push(e), a++;
          }
          return r;
        },
        me = function (t, e, n) {
          t[e] !== Ye && (t[n] = t[e]);
        },
        ge = /\[.*?\]$/,
        ve = /\(\)$/,
        ye = H("<div>")[0],
        be = ye.textContent !== Ye,
        we = /<.*?>/g;
      Vt = function (E) {
        (this.$ = function (t, e) {
          return this.api(!0).$(t, e);
        }),
          (this._ = function (t, e) {
            return this.api(!0).rows(t, e).data();
          }),
          (this.api = function (t) {
            return new Xt(t ? It(this[zt.iApiIndex]) : this);
          }),
          (this.fnAddData = function (t, e) {
            var n = this.api(!0),
              i =
                H.isArray(t) && (H.isArray(t[0]) || H.isPlainObject(t[0]))
                  ? n.rows.add(t)
                  : n.row.add(t);
            return (e === Ye || e) && n.draw(), i.flatten().toArray();
          }),
          (this.fnAdjustColumnSizing = function (t) {
            var e = this.api(!0).columns.adjust(),
              n = e.settings()[0],
              i = n.oScroll;
            t === Ye || t ? e.draw(!1) : ("" === i.sX && "" === i.sY) || ht(n);
          }),
          (this.fnClearTable = function (t) {
            var e = this.api(!0).clear();
            (t === Ye || t) && e.draw();
          }),
          (this.fnClose = function (t) {
            this.api(!0).row(t).child.hide();
          }),
          (this.fnDeleteRow = function (t, e, n) {
            var i = this.api(!0),
              r = i.rows(t),
              o = r.settings()[0],
              a = o.aoData[r[0][0]];
            return (
              r.remove(),
              e && e.call(this, o, a),
              (n === Ye || n) && i.draw(),
              a
            );
          }),
          (this.fnDestroy = function (t) {
            this.api(!0).destroy(t);
          }),
          (this.fnDraw = function (t) {
            this.api(!0).draw(t);
          }),
          (this.fnFilter = function (t, e, n, i, r, o) {
            var a = this.api(!0);
            null === e || e === Ye
              ? a.search(t, n, i, o)
              : a.column(e).search(t, n, i, o),
              a.draw();
          }),
          (this.fnGetData = function (t, e) {
            var n = this.api(!0);
            if (t === Ye) return n.data().toArray();
            var i = t.nodeName ? t.nodeName.toLowerCase() : "";
            return e !== Ye || "td" == i || "th" == i
              ? n.cell(t, e).data()
              : n.row(t).data() || null;
          }),
          (this.fnGetNodes = function (t) {
            var e = this.api(!0);
            return t !== Ye
              ? e.row(t).node()
              : e.rows().nodes().flatten().toArray();
          }),
          (this.fnGetPosition = function (t) {
            var e = this.api(!0),
              n = t.nodeName.toUpperCase();
            if ("TR" == n) return e.row(t).index();
            if ("TD" != n && "TH" != n) return null;
            var i = e.cell(t).index();
            return [i.row, i.columnVisible, i.column];
          }),
          (this.fnIsOpen = function (t) {
            return this.api(!0).row(t).child.isShown();
          }),
          (this.fnOpen = function (t, e, n) {
            return this.api(!0).row(t).child(e, n).show().child()[0];
          }),
          (this.fnPageChange = function (t, e) {
            var n = this.api(!0).page(t);
            (e === Ye || e) && n.draw(!1);
          }),
          (this.fnSetColumnVis = function (t, e, n) {
            var i = this.api(!0).column(t).visible(e);
            (n === Ye || n) && i.columns.adjust().draw();
          }),
          (this.fnSettings = function () {
            return It(this[zt.iApiIndex]);
          }),
          (this.fnSort = function (t) {
            this.api(!0).order(t).draw();
          }),
          (this.fnSortListener = function (t, e, n) {
            this.api(!0).order.listener(t, e, n);
          }),
          (this.fnUpdate = function (t, e, n, i, r) {
            var o = this.api(!0);
            return (
              n === Ye || null === n ? o.row(e).data(t) : o.cell(e, n).data(t),
              (r === Ye || r) && o.columns.adjust(),
              (i === Ye || i) && o.draw(),
              0
            );
          }),
          (this.fnVersionCheck = zt.fnVersionCheck);
        var k = this,
          A = E === Ye,
          j = this.length;
        for (var t in (A && (E = {}),
        (this.oApi = this.internal = zt.internal),
        Vt.ext.internal))
          t && (this[t] = Ut(t));
        return (
          this.each(function () {
            var t,
              e = 1 < j ? Lt({}, E, !0) : E,
              n = 0,
              i = this.getAttribute("id"),
              r = !1,
              o = Vt.defaults,
              a = H(this);
            if ("table" == this.nodeName.toLowerCase()) {
              F(o),
                $(o.column),
                N(o, o, !0),
                N(o.column, o.column, !0),
                N(o, H.extend(e, a.data()));
              var s = Vt.settings;
              for (n = 0, t = s.length; n < t; n++) {
                var l = s[n];
                if (
                  l.nTable == this ||
                  l.nTHead.parentNode == this ||
                  (l.nTFoot && l.nTFoot.parentNode == this)
                ) {
                  var u = e.bRetrieve !== Ye ? e.bRetrieve : o.bRetrieve,
                    c = e.bDestroy !== Ye ? e.bDestroy : o.bDestroy;
                  if (A || u) return l.oInstance;
                  if (c) {
                    l.oInstance.fnDestroy();
                    break;
                  }
                  return void Ft(l, 0, "Cannot reinitialise DataTable", 3);
                }
                if (l.sTableId == this.id) {
                  s.splice(n, 1);
                  break;
                }
              }
              (null !== i && "" !== i) ||
                ((i = "DataTables_Table_" + Vt.ext._unique++), (this.id = i));
              var d = H.extend(!0, {}, Vt.models.oSettings, {
                sDestroyWidth: a[0].style.width,
                sInstance: i,
                sTableId: i,
              });
              (d.nTable = this),
                (d.oApi = k.internal),
                (d.oInit = e),
                s.push(d),
                (d.oInstance = 1 === k.length ? k : a.dataTable()),
                F(e),
                e.oLanguage && I(e.oLanguage),
                e.aLengthMenu &&
                  !e.iDisplayLength &&
                  (e.iDisplayLength = H.isArray(e.aLengthMenu[0])
                    ? e.aLengthMenu[0][0]
                    : e.aLengthMenu[0]),
                (e = Lt(H.extend(!0, {}, o), e)),
                $t(d.oFeatures, e, [
                  "bPaginate",
                  "bLengthChange",
                  "bFilter",
                  "bSort",
                  "bSortMulti",
                  "bInfo",
                  "bProcessing",
                  "bAutoWidth",
                  "bSortClasses",
                  "bServerSide",
                  "bDeferRender",
                ]),
                $t(d, e, [
                  "asStripeClasses",
                  "ajax",
                  "fnServerData",
                  "fnFormatNumber",
                  "sServerMethod",
                  "aaSorting",
                  "aaSortingFixed",
                  "aLengthMenu",
                  "sPaginationType",
                  "sAjaxSource",
                  "sAjaxDataProp",
                  "iStateDuration",
                  "sDom",
                  "bSortCellsTop",
                  "iTabIndex",
                  "fnStateLoadCallback",
                  "fnStateSaveCallback",
                  "renderer",
                  "searchDelay",
                  ["iCookieDuration", "iStateDuration"],
                  ["oSearch", "oPreviousSearch"],
                  ["aoSearchCols", "aoPreSearchCols"],
                  ["iDisplayLength", "_iDisplayLength"],
                  ["bJQueryUI", "bJUI"],
                ]),
                $t(d.oScroll, e, [
                  ["sScrollX", "sX"],
                  ["sScrollXInner", "sXInner"],
                  ["sScrollY", "sY"],
                  ["bScrollCollapse", "bCollapse"],
                ]),
                $t(d.oLanguage, e, "fnInfoCallback"),
                Pt(d, "aoDrawCallback", e.fnDrawCallback, "user"),
                Pt(d, "aoServerParams", e.fnServerParams, "user"),
                Pt(d, "aoStateSaveParams", e.fnStateSaveParams, "user"),
                Pt(d, "aoStateLoadParams", e.fnStateLoadParams, "user"),
                Pt(d, "aoStateLoaded", e.fnStateLoaded, "user"),
                Pt(d, "aoRowCallback", e.fnRowCallback, "user"),
                Pt(d, "aoRowCreatedCallback", e.fnCreatedRow, "user"),
                Pt(d, "aoHeaderCallback", e.fnHeaderCallback, "user"),
                Pt(d, "aoFooterCallback", e.fnFooterCallback, "user"),
                Pt(d, "aoInitComplete", e.fnInitComplete, "user"),
                Pt(d, "aoPreDrawCallback", e.fnPreDrawCallback, "user");
              var f = d.oClasses;
              if (
                (e.bJQueryUI
                  ? (H.extend(f, Vt.ext.oJUIClasses, e.oClasses),
                    e.sDom === o.sDom &&
                      "lfrtip" === o.sDom &&
                      (d.sDom = '<"H"lfr>t<"F"ip>'),
                    d.renderer
                      ? H.isPlainObject(d.renderer) &&
                        !d.renderer.header &&
                        (d.renderer.header = "jqueryui")
                      : (d.renderer = "jqueryui"))
                  : H.extend(f, Vt.ext.classes, e.oClasses),
                a.addClass(f.sTable),
                ("" === d.oScroll.sX && "" === d.oScroll.sY) ||
                  (d.oScroll.iBarWidth = xt()),
                !0 === d.oScroll.sX && (d.oScroll.sX = "100%"),
                d.iInitDisplayStart === Ye &&
                  ((d.iInitDisplayStart = e.iDisplayStart),
                  (d._iDisplayStart = e.iDisplayStart)),
                null !== e.iDeferLoading)
              ) {
                d.bDeferLoading = !0;
                var h = H.isArray(e.iDeferLoading);
                (d._iRecordsDisplay = h ? e.iDeferLoading[0] : e.iDeferLoading),
                  (d._iRecordsTotal = h ? e.iDeferLoading[1] : e.iDeferLoading);
              }
              var p = d.oLanguage;
              H.extend(!0, p, e.oLanguage),
                "" !== p.sUrl &&
                  (H.ajax({
                    dataType: "json",
                    url: p.sUrl,
                    success: function (t) {
                      I(t), N(o.oLanguage, t), H.extend(!0, p, t), rt(d);
                    },
                    error: function () {
                      rt(d);
                    },
                  }),
                  (r = !0)),
                null === e.asStripeClasses &&
                  (d.asStripeClasses = [f.sStripeOdd, f.sStripeEven]);
              var m = d.asStripeClasses,
                g = a.children("tbody").find("tr").eq(0);
              -1 !==
                H.inArray(
                  !0,
                  H.map(m, function (t) {
                    return g.hasClass(t);
                  })
                ) &&
                (H("tbody tr", this).removeClass(m.join(" ")),
                (d.asDestroyStripes = m.slice()));
              var v,
                y = [],
                b = this.getElementsByTagName("thead");
              if (
                (0 !== b.length && (U(d.aoHeader, b[0]), (y = V(d))),
                null === e.aoColumns)
              )
                for (v = [], n = 0, t = y.length; n < t; n++) v.push(null);
              else v = e.aoColumns;
              for (n = 0, t = v.length; n < t; n++) O(d, y ? y[n] : null);
              if (
                (R(d, e.aoColumnDefs, v, function (t, e) {
                  P(d, t, e);
                }),
                g.length)
              ) {
                var w = function (t, e) {
                  return null !== t.getAttribute("data-" + e) ? e : null;
                };
                H.each(q(d, g[0]).cells, function (t, e) {
                  var n = d.aoColumns[t];
                  if (n.mData === t) {
                    var i = w(e, "sort") || w(e, "order"),
                      r = w(e, "filter") || w(e, "search");
                    (null === i && null === r) ||
                      ((n.mData = {
                        _: t + ".display",
                        sort: null !== i ? t + ".@data-" + i : Ye,
                        type: null !== i ? t + ".@data-" + i : Ye,
                        filter: null !== r ? t + ".@data-" + r : Ye,
                      }),
                      P(d, t));
                  }
                });
              }
              var _ = d.oFeatures;
              if (
                (e.bStateSave &&
                  ((_.bStateSave = !0),
                  Nt(d, e),
                  Pt(d, "aoDrawCallback", jt, "state_save")),
                e.aaSorting === Ye)
              ) {
                var x = d.aaSorting;
                for (n = 0, t = x.length; n < t; n++)
                  x[n][1] = d.aoColumns[n].asSorting[0];
              }
              kt(d),
                _.bSort &&
                  Pt(d, "aoDrawCallback", function () {
                    if (d.bSorted) {
                      var t = Ct(d),
                        n = {};
                      H.each(t, function (t, e) {
                        n[e.src] = e.dir;
                      }),
                        Rt(d, null, "order", [d, t, n]),
                        Tt(d);
                    }
                  }),
                Pt(
                  d,
                  "aoDrawCallback",
                  function () {
                    (d.bSorted || "ssp" === Bt(d) || _.bDeferRender) && kt(d);
                  },
                  "sc"
                ),
                L(d);
              var C = a.children("caption").each(function () {
                  this._captionSide = a.css("caption-side");
                }),
                S = a.children("thead");
              0 === S.length && (S = H("<thead/>").appendTo(this)),
                (d.nTHead = S[0]);
              var T = a.children("tbody");
              0 === T.length && (T = H("<tbody/>").appendTo(this)),
                (d.nTBody = T[0]);
              var D = a.children("tfoot");
              if (
                (0 === D.length &&
                  0 < C.length &&
                  ("" !== d.oScroll.sX || "" !== d.oScroll.sY) &&
                  (D = H("<tfoot/>").appendTo(this)),
                0 === D.length || 0 === D.children().length
                  ? a.addClass(f.sNoFooter)
                  : 0 < D.length &&
                    ((d.nTFoot = D[0]), U(d.aoFooter, d.nTFoot)),
                e.aaData)
              )
                for (n = 0; n < e.aaData.length; n++) M(d, e.aaData[n]);
              else
                (d.bDeferLoading || "dom" == Bt(d)) &&
                  W(d, H(d.nTBody).children("tr"));
              (d.aiDisplay = d.aiDisplayMaster.slice()),
                !(d.bInitialised = !0) === r && rt(d);
            } else Ft(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
          }),
          (k = null),
          this
        );
      };
      var _e = [],
        xe = Array.prototype,
        Ce = function (t) {
          var e,
            n,
            i = Vt.settings,
            r = H.map(i, function (t) {
              return t.nTable;
            });
          return t
            ? t.nTable && t.oApi
              ? [t]
              : t.nodeName && "table" === t.nodeName.toLowerCase()
              ? -1 !== (e = H.inArray(t, r))
                ? [i[e]]
                : null
              : t && "function" == typeof t.settings
              ? t.settings().toArray()
              : ("string" == typeof t ? (n = H(t)) : t instanceof H && (n = t),
                n
                  ? n
                      .map(function () {
                        return -1 !== (e = H.inArray(this, r)) ? i[e] : null;
                      })
                      .toArray()
                  : void 0)
            : [];
        };
      (Xt = function (t, e) {
        if (!this instanceof Xt)
          throw "DT API must be constructed as a new object";
        var n = [],
          i = function (t) {
            var e = Ce(t);
            e && n.push.apply(n, e);
          };
        if (H.isArray(t)) for (var r = 0, o = t.length; r < o; r++) i(t[r]);
        else i(t);
        (this.context = pe(n)),
          e && this.push.apply(this, e.toArray ? e.toArray() : e),
          (this.selector = { rows: null, cols: null, opts: null }),
          Xt.extend(this, this, _e);
      }),
        ((Vt.Api = Xt).prototype = {
          concat: xe.concat,
          context: [],
          each: function (t) {
            for (var e = 0, n = this.length; e < n; e++)
              t.call(this, this[e], e, this);
            return this;
          },
          eq: function (t) {
            var e = this.context;
            return e.length > t ? new Xt(e[t], this[t]) : null;
          },
          filter: function (t) {
            var e = [];
            if (xe.filter) e = xe.filter.call(this, t, this);
            else
              for (var n = 0, i = this.length; n < i; n++)
                t.call(this, this[n], n, this) && e.push(this[n]);
            return new Xt(this.context, e);
          },
          flatten: function () {
            var t = [];
            return new Xt(this.context, t.concat.apply(t, this.toArray()));
          },
          join: xe.join,
          indexOf:
            xe.indexOf ||
            function (t, e) {
              for (var n = e || 0, i = this.length; n < i; n++)
                if (this[n] === t) return n;
              return -1;
            },
          iterator: function (t, e, n, i) {
            var r,
              o,
              a,
              s,
              l,
              u,
              c,
              d,
              f = [],
              h = this.context,
              p = this.selector;
            for (
              "string" == typeof t && ((i = n), (n = e), (e = t), (t = !1)),
                o = 0,
                a = h.length;
              o < a;
              o++
            ) {
              var m = new Xt(h[o]);
              if ("table" === e) (r = n.call(m, h[o], o)) !== Ye && f.push(r);
              else if ("columns" === e || "rows" === e)
                (r = n.call(m, h[o], this[o], o)) !== Ye && f.push(r);
              else if (
                "column" === e ||
                "column-rows" === e ||
                "row" === e ||
                "cell" === e
              )
                for (
                  c = this[o],
                    "column-rows" === e && (u = Ae(h[o], p.opts)),
                    s = 0,
                    l = c.length;
                  s < l;
                  s++
                )
                  (d = c[s]),
                    (r =
                      "cell" === e
                        ? n.call(m, h[o], d.row, d.column, o, s)
                        : n.call(m, h[o], d, o, s, u)) !== Ye && f.push(r);
            }
            if (f.length || i) {
              var g = new Xt(h, t ? f.concat.apply([], f) : f),
                v = g.selector;
              return (v.rows = p.rows), (v.cols = p.cols), (v.opts = p.opts), g;
            }
            return this;
          },
          lastIndexOf:
            xe.lastIndexOf ||
            function () {
              return this.indexOf.apply(this.toArray.reverse(), arguments);
            },
          length: 0,
          map: function (t) {
            var e = [];
            if (xe.map) e = xe.map.call(this, t, this);
            else
              for (var n = 0, i = this.length; n < i; n++)
                e.push(t.call(this, this[n], n));
            return new Xt(this.context, e);
          },
          pluck: function (e) {
            return this.map(function (t) {
              return t[e];
            });
          },
          pop: xe.pop,
          push: xe.push,
          reduce:
            xe.reduce ||
            function (t, e) {
              return n(this, t, e, 0, this.length, 1);
            },
          reduceRight:
            xe.reduceRight ||
            function (t, e) {
              return n(this, t, e, this.length - 1, -1, -1);
            },
          reverse: xe.reverse,
          selector: null,
          shift: xe.shift,
          sort: xe.sort,
          splice: xe.splice,
          toArray: function () {
            return xe.slice.call(this);
          },
          to$: function () {
            return H(this);
          },
          toJQuery: function () {
            return H(this);
          },
          unique: function () {
            return new Xt(this.context, pe(this));
          },
          unshift: xe.unshift,
        }),
        (Xt.extend = function (t, e, n) {
          if (n.length && e && (e instanceof Xt || e.__dt_wrapper)) {
            var i,
              r,
              o,
              a = function (e, n, i) {
                return function () {
                  var t = n.apply(e, arguments);
                  return Xt.extend(t, t, i.methodExt), t;
                };
              };
            for (i = 0, r = n.length; i < r; i++)
              (e[(o = n[i]).name] =
                "function" == typeof o.val
                  ? a(t, o.val, o)
                  : H.isPlainObject(o.val)
                  ? {}
                  : o.val),
                (e[o.name].__dt_wrapper = !0),
                Xt.extend(t, e[o.name], o.propExt);
          }
        }),
        (Xt.register = Jt =
          function (t, e) {
            if (H.isArray(t))
              for (var n = 0, i = t.length; n < i; n++) Xt.register(t[n], e);
            else {
              var r,
                o,
                a,
                s,
                l = t.split("."),
                u = _e,
                c = function (t, e) {
                  for (var n = 0, i = t.length; n < i; n++)
                    if (t[n].name === e) return t[n];
                  return null;
                };
              for (r = 0, o = l.length; r < o; r++) {
                var d = c(
                  u,
                  (a = (s = -1 !== l[r].indexOf("()"))
                    ? l[r].replace("()", "")
                    : l[r])
                );
                d ||
                  ((d = { name: a, val: {}, methodExt: [], propExt: [] }),
                  u.push(d)),
                  r === o - 1 ? (d.val = e) : (u = s ? d.methodExt : d.propExt);
              }
            }
          }),
        (Xt.registerPlural = Gt =
          function (t, e, n) {
            Xt.register(t, n),
              Xt.register(e, function () {
                var t = n.apply(this, arguments);
                return t === this
                  ? this
                  : t instanceof Xt
                  ? t.length
                    ? H.isArray(t[0])
                      ? new Xt(t.context, t[0])
                      : t[0]
                    : Ye
                  : t;
              });
          });
      var Se = function (t, e) {
        if ("number" == typeof t) return [e[t]];
        var n = H.map(e, function (t) {
          return t.nTable;
        });
        return H(n)
          .filter(t)
          .map(function () {
            var t = H.inArray(this, n);
            return e[t];
          })
          .toArray();
      };
      Jt("tables()", function (t) {
        return t ? new Xt(Se(t, this.context)) : this;
      }),
        Jt("table()", function (t) {
          var e = this.tables(t),
            n = e.context;
          return n.length ? new Xt(n[0]) : e;
        }),
        Gt("tables().nodes()", "table().node()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTable;
            },
            1
          );
        }),
        Gt("tables().body()", "table().body()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTBody;
            },
            1
          );
        }),
        Gt("tables().header()", "table().header()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTHead;
            },
            1
          );
        }),
        Gt("tables().footer()", "table().footer()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTFoot;
            },
            1
          );
        }),
        Gt("tables().containers()", "table().container()", function () {
          return this.iterator(
            "table",
            function (t) {
              return t.nTableWrapper;
            },
            1
          );
        }),
        Jt("draw()", function (e) {
          return this.iterator("table", function (t) {
            w(t, !1 === e);
          });
        }),
        Jt("page()", function (e) {
          return e === Ye
            ? this.page.info().page
            : this.iterator("table", function (t) {
                ut(t, e);
              });
        }),
        Jt("page.info()", function () {
          if (0 === this.context.length) return Ye;
          var t = this.context[0],
            e = t._iDisplayStart,
            n = t._iDisplayLength,
            i = t.fnRecordsDisplay(),
            r = -1 === n;
          return {
            page: r ? 0 : Math.floor(e / n),
            pages: r ? 1 : Math.ceil(i / n),
            start: e,
            end: t.fnDisplayEnd(),
            length: n,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: i,
          };
        }),
        Jt("page.len()", function (e) {
          return e === Ye
            ? 0 !== this.context.length
              ? this.context[0]._iDisplayLength
              : Ye
            : this.iterator("table", function (t) {
                at(t, e);
              });
        });
      var Te = function (r, o, t) {
        if (t) {
          var e = new Xt(r);
          e.one("draw", function () {
            t(e.ajax.json());
          });
        }
        "ssp" == Bt(r)
          ? w(r, o)
          : (dt(r, !0),
            E(r, [], function (t) {
              d(r);
              for (var e = A(r, t), n = 0, i = e.length; n < i; n++) M(r, e[n]);
              w(r, o), dt(r, !1);
            }));
      };
      Jt("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json;
      }),
        Jt("ajax.params()", function () {
          var t = this.context;
          if (0 < t.length) return t[0].oAjaxData;
        }),
        Jt("ajax.reload()", function (e, n) {
          return this.iterator("table", function (t) {
            Te(t, !1 === n, e);
          });
        }),
        Jt("ajax.url()", function (e) {
          var t = this.context;
          return e === Ye
            ? 0 === t.length
              ? Ye
              : (t = t[0]).ajax
              ? H.isPlainObject(t.ajax)
                ? t.ajax.url
                : t.ajax
              : t.sAjaxSource
            : this.iterator("table", function (t) {
                H.isPlainObject(t.ajax) ? (t.ajax.url = e) : (t.ajax = e);
              });
        }),
        Jt("ajax.url().load()", function (e, n) {
          return this.iterator("table", function (t) {
            Te(t, !1 === n, e);
          });
        });
      var De = function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s,
            l = [],
            u = typeof t;
          for (
            (t && "string" !== u && "function" !== u && t.length !== Ye) ||
              (t = [t]),
              r = 0,
              o = t.length;
            r < o;
            r++
          )
            for (
              a = 0,
                s = (i = t[r] && t[r].split ? t[r].split(",") : [t[r]]).length;
              a < s;
              a++
            )
              (n = e("string" == typeof i[a] ? H.trim(i[a]) : i[a])) &&
                n.length &&
                l.push.apply(l, n);
          return l;
        },
        Ee = function (t) {
          return (
            t || (t = {}),
            t.filter && !t.search && (t.search = t.filter),
            {
              search: t.search || "none",
              order: t.order || "current",
              page: t.page || "all",
            }
          );
        },
        ke = function (t) {
          for (var e = 0, n = t.length; e < n; e++)
            if (0 < t[e].length)
              return (
                (t[0] = t[e]), (t.length = 1), (t.context = [t.context[e]]), t
              );
          return (t.length = 0), t;
        },
        Ae = function (t, e) {
          var n,
            i,
            r,
            o = [],
            a = t.aiDisplay,
            s = t.aiDisplayMaster,
            l = e.search,
            u = e.order,
            c = e.page;
          if ("ssp" == Bt(t)) return "removed" === l ? [] : de(0, s.length);
          if ("current" == c)
            for (n = t._iDisplayStart, i = t.fnDisplayEnd(); n < i; n++)
              o.push(a[n]);
          else if ("current" == u || "applied" == u)
            o =
              "none" == l
                ? s.slice()
                : "applied" == l
                ? a.slice()
                : H.map(s, function (t) {
                    return -1 === H.inArray(t, a) ? t : null;
                  });
          else if ("index" == u || "original" == u)
            for (n = 0, i = t.aoData.length; n < i; n++)
              "none" == l
                ? o.push(n)
                : ((-1 === (r = H.inArray(n, a)) && "removed" == l) ||
                    (0 <= r && "applied" == l)) &&
                  o.push(n);
          return o;
        },
        je = function (r, t, o) {
          return De(t, function (n) {
            var t = re(n);
            if (null !== t && !o) return [t];
            var e = Ae(r, o);
            if (null !== t && -1 !== H.inArray(t, e)) return [t];
            if (!n) return e;
            if ("function" == typeof n)
              return H.map(e, function (t) {
                var e = r.aoData[t];
                return n(t, e._aData, e.nTr) ? t : null;
              });
            var i = fe(ce(r.aoData, e, "nTr"));
            return n.nodeName && -1 !== H.inArray(n, i)
              ? [n._DT_RowIndex]
              : H(i)
                  .filter(n)
                  .map(function () {
                    return this._DT_RowIndex;
                  })
                  .toArray();
          });
        };
      Jt("rows()", function (e, n) {
        e === Ye ? (e = "") : H.isPlainObject(e) && ((n = e), (e = "")),
          (n = Ee(n));
        var t = this.iterator(
          "table",
          function (t) {
            return je(t, e, n);
          },
          1
        );
        return (t.selector.rows = e), (t.selector.opts = n), t;
      }),
        Jt("rows().nodes()", function () {
          return this.iterator(
            "row",
            function (t, e) {
              return t.aoData[e].nTr || Ye;
            },
            1
          );
        }),
        Jt("rows().data()", function () {
          return this.iterator(
            !0,
            "rows",
            function (t, e) {
              return ce(t.aoData, e, "_aData");
            },
            1
          );
        }),
        Gt("rows().cache()", "row().cache()", function (i) {
          return this.iterator(
            "row",
            function (t, e) {
              var n = t.aoData[e];
              return "search" === i ? n._aFilterData : n._aSortData;
            },
            1
          );
        }),
        Gt("rows().invalidate()", "row().invalidate()", function (n) {
          return this.iterator("row", function (t, e) {
            r(t, e, n);
          });
        }),
        Gt("rows().indexes()", "row().index()", function () {
          return this.iterator(
            "row",
            function (t, e) {
              return e;
            },
            1
          );
        }),
        Gt("rows().remove()", "row().remove()", function () {
          var a = this;
          return this.iterator("row", function (t, e, n) {
            var i = t.aoData;
            i.splice(e, 1);
            for (var r = 0, o = i.length; r < o; r++)
              null !== i[r].nTr && (i[r].nTr._DT_RowIndex = r);
            H.inArray(e, t.aiDisplay);
            s(t.aiDisplayMaster, e), s(t.aiDisplay, e), s(a[n], e, !1), Mt(t);
          });
        }),
        Jt("rows.add()", function (o) {
          var t = this.iterator(
              "table",
              function (t) {
                var e,
                  n,
                  i,
                  r = [];
                for (n = 0, i = o.length; n < i; n++)
                  (e = o[n]).nodeName && "TR" === e.nodeName.toUpperCase()
                    ? r.push(W(t, e)[0])
                    : r.push(M(t, e));
                return r;
              },
              1
            ),
            e = this.rows(-1);
          return e.pop(), e.push.apply(e, t.toArray()), e;
        }),
        Jt("row()", function (t, e) {
          return ke(this.rows(t, e));
        }),
        Jt("row().data()", function (t) {
          var e = this.context;
          return t === Ye
            ? e.length && this.length
              ? e[0].aoData[this[0]]._aData
              : Ye
            : ((e[0].aoData[this[0]]._aData = t),
              r(e[0], this[0], "data"),
              this);
        }),
        Jt("row().node()", function () {
          var t = this.context;
          return (t.length && this.length && t[0].aoData[this[0]].nTr) || null;
        }),
        Jt("row.add()", function (e) {
          e instanceof H && e.length && (e = e[0]);
          var t = this.iterator("table", function (t) {
            return e.nodeName && "TR" === e.nodeName.toUpperCase()
              ? W(t, e)[0]
              : M(t, e);
          });
          return this.row(t[0]);
        });
      var Ne = function (o, t, e, n) {
          var a = [],
            s = function (t, e) {
              if (H.isArray(t) || t instanceof H)
                for (var n = 0, i = t.length; n < i; n++) s(t[n], e);
              else if (t.nodeName && "tr" === t.nodeName.toLowerCase())
                a.push(t);
              else {
                var r = H("<tr><td/></tr>").addClass(e);
                (H("td", r).addClass(e).html(t)[0].colSpan = C(o)),
                  a.push(r[0]);
              }
            };
          s(e, n),
            t._details && t._details.remove(),
            (t._details = H(a)),
            t._detailsShow && t._details.insertAfter(t.nTr);
        },
        Ie = function (t, e) {
          var n = t.context;
          if (n.length) {
            var i = n[0].aoData[e !== Ye ? e : t[0]];
            i._details &&
              (i._details.remove(), (i._detailsShow = Ye), (i._details = Ye));
          }
        },
        Fe = function (t, e) {
          var n = t.context;
          if (n.length && t.length) {
            var i = n[0].aoData[t[0]];
            i._details &&
              ((i._detailsShow = e)
                ? i._details.insertAfter(i.nTr)
                : i._details.detach(),
              $e(n[0]));
          }
        },
        $e = function (a) {
          var r = new Xt(a),
            t = ".dt.DT_details",
            e = "draw" + t,
            n = "column-visibility" + t,
            i = "destroy" + t,
            s = a.aoData;
          r.off(e + " " + n + " " + i),
            0 < ue(s, "_details").length &&
              (r.on(e, function (t, e) {
                a === e &&
                  r
                    .rows({ page: "current" })
                    .eq(0)
                    .each(function (t) {
                      var e = s[t];
                      e._detailsShow && e._details.insertAfter(e.nTr);
                    });
              }),
              r.on(n, function (t, e) {
                if (a === e)
                  for (var n, i = C(e), r = 0, o = s.length; r < o; r++)
                    (n = s[r])._details &&
                      n._details.children("td[colspan]").attr("colspan", i);
              }),
              r.on(i, function (t, e) {
                if (a === e)
                  for (var n = 0, i = s.length; n < i; n++)
                    s[n]._details && Ie(r, n);
              }));
        },
        Le = "" + "row().child",
        Oe = Le + "()";
      Jt(Oe, function (t, e) {
        var n = this.context;
        return t === Ye
          ? n.length && this.length
            ? n[0].aoData[this[0]]._details
            : Ye
          : (!0 === t
              ? this.child.show()
              : !1 === t
              ? Ie(this)
              : n.length && this.length && Ne(n[0], n[0].aoData[this[0]], t, e),
            this);
      }),
        Jt([Le + ".show()", Oe + ".show()"], function () {
          return Fe(this, !0), this;
        }),
        Jt([Le + ".hide()", Oe + ".hide()"], function () {
          return Fe(this, !1), this;
        }),
        Jt([Le + ".remove()", Oe + ".remove()"], function () {
          return Ie(this), this;
        }),
        Jt(Le + ".isShown()", function () {
          var t = this.context;
          return (
            (t.length && this.length && t[0].aoData[this[0]]._detailsShow) || !1
          );
        });
      var Pe = /^(.+):(name|visIdx|visible)$/,
        Re = function (t, e, n, i, r) {
          for (var o = [], a = 0, s = r.length; a < s; a++)
            o.push(m(t, r[a], e));
          return o;
        },
        Me = function (a, t, s) {
          var l = a.aoColumns,
            u = ue(l, "sName"),
            c = ue(l, "nTh");
          return De(t, function (n) {
            var t = re(n);
            if ("" === n) return de(l.length);
            if (null !== t) return [0 <= t ? t : l.length + t];
            if ("function" == typeof n) {
              var i = Ae(a, s);
              return H.map(l, function (t, e) {
                return n(e, Re(a, e, 0, 0, i), c[e]) ? e : null;
              });
            }
            var r = "string" == typeof n ? n.match(Pe) : "";
            if (!r)
              return H(c)
                .filter(n)
                .map(function () {
                  return H.inArray(this, c);
                })
                .toArray();
            switch (r[2]) {
              case "visIdx":
              case "visible":
                var e = parseInt(r[1], 10);
                if (e < 0) {
                  var o = H.map(l, function (t, e) {
                    return t.bVisible ? e : null;
                  });
                  return [o[o.length + e]];
                }
                return [B(a, e)];
              case "name":
                return H.map(u, function (t, e) {
                  return t === r[1] ? e : null;
                });
            }
          });
        },
        He = function (t, e, n, i) {
          var r,
            o,
            a,
            s,
            l = t.aoColumns,
            u = l[e],
            c = t.aoData;
          if (n === Ye) return u.bVisible;
          if (u.bVisible !== n) {
            if (n) {
              var d = H.inArray(!0, ue(l, "bVisible"), e + 1);
              for (o = 0, a = c.length; o < a; o++)
                (s = c[o].nTr),
                  (r = c[o].anCells),
                  s && s.insertBefore(r[e], r[d] || null);
            } else H(ue(t.aoData, "anCells", e)).detach();
            (u.bVisible = n),
              y(t, t.aoHeader),
              y(t, t.aoFooter),
              (i === Ye || i) &&
                (x(t), (t.oScroll.sX || t.oScroll.sY) && ht(t)),
              Rt(t, null, "column-visibility", [t, e, n]),
              jt(t);
          }
        };
      Jt("columns()", function (e, n) {
        e === Ye ? (e = "") : H.isPlainObject(e) && ((n = e), (e = "")),
          (n = Ee(n));
        var t = this.iterator(
          "table",
          function (t) {
            return Me(t, e, n);
          },
          1
        );
        return (t.selector.cols = e), (t.selector.opts = n), t;
      }),
        Gt("columns().header()", "column().header()", function () {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].nTh;
            },
            1
          );
        }),
        Gt("columns().footer()", "column().footer()", function () {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].nTf;
            },
            1
          );
        }),
        Gt("columns().data()", "column().data()", function () {
          return this.iterator("column-rows", Re, 1);
        }),
        Gt("columns().dataSrc()", "column().dataSrc()", function () {
          return this.iterator(
            "column",
            function (t, e) {
              return t.aoColumns[e].mData;
            },
            1
          );
        }),
        Gt("columns().cache()", "column().cache()", function (o) {
          return this.iterator(
            "column-rows",
            function (t, e, n, i, r) {
              return ce(
                t.aoData,
                r,
                "search" === o ? "_aFilterData" : "_aSortData",
                e
              );
            },
            1
          );
        }),
        Gt("columns().nodes()", "column().nodes()", function () {
          return this.iterator(
            "column-rows",
            function (t, e, n, i, r) {
              return ce(t.aoData, r, "anCells", e);
            },
            1
          );
        }),
        Gt("columns().visible()", "column().visible()", function (n, i) {
          return this.iterator("column", function (t, e) {
            if (n === Ye) return t.aoColumns[e].bVisible;
            He(t, e, n, i);
          });
        }),
        Gt("columns().indexes()", "column().index()", function (n) {
          return this.iterator(
            "column",
            function (t, e) {
              return "visible" === n ? c(t, e) : e;
            },
            1
          );
        }),
        Jt("columns.adjust()", function () {
          return this.iterator(
            "table",
            function (t) {
              x(t);
            },
            1
          );
        }),
        Jt("column.index()", function (t, e) {
          if (0 !== this.context.length) {
            var n = this.context[0];
            if ("fromVisible" === t || "toData" === t) return B(n, e);
            if ("fromData" === t || "toVisible" === t) return c(n, e);
          }
        }),
        Jt("column()", function (t, e) {
          return ke(this.columns(t, e));
        });
      var Be,
        We,
        qe,
        Ue,
        Ve = function (n, t, e) {
          var i,
            r,
            o,
            a,
            s,
            l,
            u,
            c = n.aoData,
            d = Ae(n, e),
            f = fe(ce(c, d, "anCells")),
            h = H([].concat.apply([], f)),
            p = n.aoColumns.length;
          return De(t, function (t) {
            var e = "function" == typeof t;
            if (null === t || t === Ye || e) {
              for (r = [], o = 0, a = d.length; o < a; o++)
                for (i = d[o], s = 0; s < p; s++)
                  (l = { row: i, column: s }),
                    e
                      ? ((u = n.aoData[i]),
                        t(l, m(n, i, s), u.anCells[s]) && r.push(l))
                      : r.push(l);
              return r;
            }
            return H.isPlainObject(t)
              ? [t]
              : h
                  .filter(t)
                  .map(function (t, e) {
                    return {
                      row: (i = e.parentNode._DT_RowIndex),
                      column: H.inArray(e, c[i].anCells),
                    };
                  })
                  .toArray();
          });
        };
      Jt("cells()", function (e, t, n) {
        if (
          (H.isPlainObject(e) &&
            (e.row === Ye ? ((n = e), (e = null)) : ((n = t), (t = null))),
          H.isPlainObject(t) && ((n = t), (t = null)),
          null === t || t === Ye)
        )
          return this.iterator("table", function (t) {
            return Ve(t, e, Ee(n));
          });
        var i,
          r,
          o,
          a,
          s,
          l = this.columns(t, n),
          u = this.rows(e, n),
          c = this.iterator(
            "table",
            function (t, e) {
              for (i = [], r = 0, o = u[e].length; r < o; r++)
                for (a = 0, s = l[e].length; a < s; a++)
                  i.push({ row: u[e][r], column: l[e][a] });
              return i;
            },
            1
          );
        return H.extend(c.selector, { cols: t, rows: e, opts: n }), c;
      }),
        Gt("cells().nodes()", "cell().node()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              var i = t.aoData[e].anCells;
              return i ? i[n] : Ye;
            },
            1
          );
        }),
        Jt("cells().data()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return m(t, e, n);
            },
            1
          );
        }),
        Gt("cells().cache()", "cell().cache()", function (i) {
          return (
            (i = "search" === i ? "_aFilterData" : "_aSortData"),
            this.iterator(
              "cell",
              function (t, e, n) {
                return t.aoData[e][i][n];
              },
              1
            )
          );
        }),
        Gt("cells().render()", "cell().render()", function (i) {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return m(t, e, n, i);
            },
            1
          );
        }),
        Gt("cells().indexes()", "cell().index()", function () {
          return this.iterator(
            "cell",
            function (t, e, n) {
              return { row: e, column: n, columnVisible: c(t, n) };
            },
            1
          );
        }),
        Gt("cells().invalidate()", "cell().invalidate()", function (i) {
          return this.iterator("cell", function (t, e, n) {
            r(t, e, i, n);
          });
        }),
        Jt("cell()", function (t, e, n) {
          return ke(this.cells(t, e, n));
        }),
        Jt("cell().data()", function (t) {
          var e = this.context,
            n = this[0];
          return t === Ye
            ? e.length && n.length
              ? m(e[0], n[0].row, n[0].column)
              : Ye
            : (u(e[0], n[0].row, n[0].column, t),
              r(e[0], n[0].row, "data", n[0].column),
              this);
        }),
        Jt("order()", function (e, t) {
          var n = this.context;
          return e === Ye
            ? 0 !== n.length
              ? n[0].aaSorting
              : Ye
            : ("number" == typeof e
                ? (e = [[e, t]])
                : H.isArray(e[0]) ||
                  (e = Array.prototype.slice.call(arguments)),
              this.iterator("table", function (t) {
                t.aaSorting = e.slice();
              }));
        }),
        Jt("order.listener()", function (e, n, i) {
          return this.iterator("table", function (t) {
            Et(t, e, n, i);
          });
        }),
        Jt(["columns().order()", "column().order()"], function (i) {
          var r = this;
          return this.iterator("table", function (t, e) {
            var n = [];
            H.each(r[e], function (t, e) {
              n.push([e, i]);
            }),
              (t.aaSorting = n);
          });
        }),
        Jt("search()", function (e, n, i, r) {
          var t = this.context;
          return e === Ye
            ? 0 !== t.length
              ? t[0].oPreviousSearch.sSearch
              : Ye
            : this.iterator("table", function (t) {
                t.oFeatures.bFilter &&
                  z(
                    t,
                    H.extend({}, t.oPreviousSearch, {
                      sSearch: e + "",
                      bRegex: null !== n && n,
                      bSmart: null === i || i,
                      bCaseInsensitive: null === r || r,
                    }),
                    1
                  );
              });
        }),
        Gt("columns().search()", "column().search()", function (i, r, o, a) {
          return this.iterator("column", function (t, e) {
            var n = t.aoPreSearchCols;
            if (i === Ye) return n[e].sSearch;
            t.oFeatures.bFilter &&
              (H.extend(n[e], {
                sSearch: i + "",
                bRegex: null !== r && r,
                bSmart: null === o || o,
                bCaseInsensitive: null === a || a,
              }),
              z(t, t.oPreviousSearch, 1));
          });
        }),
        Jt("state()", function () {
          return this.context.length ? this.context[0].oSavedState : null;
        }),
        Jt("state.clear()", function () {
          return this.iterator("table", function (t) {
            t.fnStateSaveCallback.call(t.oInstance, t, {});
          });
        }),
        Jt("state.loaded()", function () {
          return this.context.length ? this.context[0].oLoadedState : null;
        }),
        Jt("state.save()", function () {
          return this.iterator("table", function (t) {
            jt(t);
          });
        }),
        (Vt.versionCheck = Vt.fnVersionCheck =
          function (t) {
            for (
              var e,
                n,
                i = Vt.version.split("."),
                r = t.split("."),
                o = 0,
                a = r.length;
              o < a;
              o++
            )
              if (
                (e = parseInt(i[o], 10) || 0) !== (n = parseInt(r[o], 10) || 0)
              )
                return n < e;
            return !0;
          }),
        (Vt.isDataTable = Vt.fnIsDataTable =
          function (t) {
            var r = H(t).get(0),
              o = !1;
            return (
              H.each(Vt.settings, function (t, e) {
                var n = e.nScrollHead ? H("table", e.nScrollHead)[0] : null,
                  i = e.nScrollFoot ? H("table", e.nScrollFoot)[0] : null;
                (e.nTable !== r && n !== r && i !== r) || (o = !0);
              }),
              o
            );
          }),
        (Vt.tables = Vt.fnTables =
          function (e) {
            return H.map(Vt.settings, function (t) {
              if (!e || (e && H(t.nTable).is(":visible"))) return t.nTable;
            });
          }),
        (Vt.util = { throttle: gt, escapeRegex: K }),
        (Vt.camelToHungarian = N),
        Jt("$()", function (t, e) {
          var n = this.rows(e).nodes(),
            i = H(n);
          return H([].concat(i.filter(t).toArray(), i.find(t).toArray()));
        }),
        H.each(["on", "one", "off"], function (t, n) {
          Jt(n + "()", function () {
            var t = Array.prototype.slice.call(arguments);
            t[0].match(/\.dt\b/) || (t[0] += ".dt");
            var e = H(this.tables().nodes());
            return e[n].apply(e, t), this;
          });
        }),
        Jt("clear()", function () {
          return this.iterator("table", function (t) {
            d(t);
          });
        }),
        Jt("settings()", function () {
          return new Xt(this.context, this.context);
        }),
        Jt("init()", function () {
          var t = this.context;
          return t.length ? t[0].oInit : null;
        }),
        Jt("data()", function () {
          return this.iterator("table", function (t) {
            return ue(t.aoData, "_aData");
          }).flatten();
        }),
        Jt("destroy()", function (h) {
          return (
            (h = h || !1),
            this.iterator("table", function (e) {
              var n,
                t = e.nTableWrapper.parentNode,
                i = e.oClasses,
                r = e.nTable,
                o = e.nTBody,
                a = e.nTHead,
                s = e.nTFoot,
                l = H(r),
                u = H(o),
                c = H(e.nTableWrapper),
                d = H.map(e.aoData, function (t) {
                  return t.nTr;
                });
              (e.bDestroying = !0),
                Rt(e, "aoDestroyCallback", "destroy", [e]),
                h || new Xt(e).columns().visible(!0),
                c.unbind(".DT").find(":not(tbody *)").unbind(".DT"),
                H(Je).unbind(".DT-" + e.sInstance),
                r != a.parentNode &&
                  (l.children("thead").detach(), l.append(a)),
                s &&
                  r != s.parentNode &&
                  (l.children("tfoot").detach(), l.append(s)),
                l.detach(),
                c.detach(),
                (e.aaSorting = []),
                (e.aaSortingFixed = []),
                kt(e),
                H(d).removeClass(e.asStripeClasses.join(" ")),
                H("th, td", a).removeClass(
                  i.sSortable +
                    " " +
                    i.sSortableAsc +
                    " " +
                    i.sSortableDesc +
                    " " +
                    i.sSortableNone
                ),
                e.bJUI &&
                  (H(
                    "th span." + i.sSortIcon + ", td span." + i.sSortIcon,
                    a
                  ).detach(),
                  H("th, td", a).each(function () {
                    var t = H("div." + i.sSortJUIWrapper, this);
                    H(this).append(t.contents()), t.detach();
                  })),
                !h && t && t.insertBefore(r, e.nTableReinsertBefore),
                u.children().detach(),
                u.append(d),
                l.css("width", e.sDestroyWidth).removeClass(i.sTable),
                (n = e.asDestroyStripes.length) &&
                  u.children().each(function (t) {
                    H(this).addClass(e.asDestroyStripes[t % n]);
                  });
              var f = H.inArray(e, Vt.settings);
              -1 !== f && Vt.settings.splice(f, 1);
            })
          );
        }),
        H.each(["column", "row", "cell"], function (t, r) {
          Jt(r + "s().every()", function (i) {
            return this.iterator(r, function (t, e, n) {
              i.call(new Xt(t)[r](e, n));
            });
          });
        }),
        (Vt.version = "1.10.6"),
        (Vt.settings = []),
        (Vt.models = {}),
        (Vt.models.oSearch = {
          bCaseInsensitive: !0,
          sSearch: "",
          bRegex: !1,
          bSmart: !0,
        }),
        (Vt.models.oRow = {
          nTr: null,
          anCells: null,
          _aData: [],
          _aSortData: null,
          _aFilterData: null,
          _sFilterRow: null,
          _sRowStripe: "",
          src: null,
        }),
        (Vt.models.oColumn = {
          idx: null,
          aDataSort: null,
          asSorting: null,
          bSearchable: null,
          bSortable: null,
          bVisible: null,
          _sManualType: null,
          _bAttrSrc: !1,
          fnCreatedCell: null,
          fnGetData: null,
          fnSetData: null,
          mData: null,
          mRender: null,
          nTh: null,
          nTf: null,
          sClass: null,
          sContentPadding: null,
          sDefaultContent: null,
          sName: null,
          sSortDataType: "std",
          sSortingClass: null,
          sSortingClassJUI: null,
          sTitle: null,
          sType: null,
          sWidth: null,
          sWidthOrig: null,
        }),
        (Vt.defaults = {
          aaData: null,
          aaSorting: [[0, "asc"]],
          aaSortingFixed: [],
          ajax: null,
          aLengthMenu: [10, 25, 50, 100],
          aoColumns: null,
          aoColumnDefs: null,
          aoSearchCols: [],
          asStripeClasses: null,
          bAutoWidth: !0,
          bDeferRender: !1,
          bDestroy: !1,
          bFilter: !0,
          bInfo: !0,
          bJQueryUI: !1,
          bLengthChange: !0,
          bPaginate: !0,
          bProcessing: !1,
          bRetrieve: !1,
          bScrollCollapse: !1,
          bServerSide: !1,
          bSort: !0,
          bSortMulti: !0,
          bSortCellsTop: !1,
          bSortClasses: !0,
          bStateSave: !1,
          fnCreatedRow: null,
          fnDrawCallback: null,
          fnFooterCallback: null,
          fnFormatNumber: function (t) {
            return t
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
          },
          fnHeaderCallback: null,
          fnInfoCallback: null,
          fnInitComplete: null,
          fnPreDrawCallback: null,
          fnRowCallback: null,
          fnServerData: null,
          fnServerParams: null,
          fnStateLoadCallback: function (t) {
            try {
              return JSON.parse(
                (-1 === t.iStateDuration
                  ? sessionStorage
                  : localStorage
                ).getItem("DataTables_" + t.sInstance + "_" + location.pathname)
              );
            } catch (e) {}
          },
          fnStateLoadParams: null,
          fnStateLoaded: null,
          fnStateSaveCallback: function (t, e) {
            try {
              (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem(
                "DataTables_" + t.sInstance + "_" + location.pathname,
                JSON.stringify(e)
              );
            } catch (n) {}
          },
          fnStateSaveParams: null,
          iStateDuration: 7200,
          iDeferLoading: null,
          iDisplayLength: 10,
          iDisplayStart: 0,
          iTabIndex: 0,
          oClasses: {},
          oLanguage: {
            oAria: {
              sSortAscending: ": activate to sort column ascending",
              sSortDescending: ": activate to sort column descending",
            },
            oPaginate: {
              sFirst: "First",
              sLast: "Last",
              sNext: "Next",
              sPrevious: "Previous",
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found",
          },
          oSearch: H.extend({}, Vt.models.oSearch),
          sAjaxDataProp: "data",
          sAjaxSource: null,
          sDom: "lfrtip",
          searchDelay: null,
          sPaginationType: "simple_numbers",
          sScrollX: "",
          sScrollXInner: "",
          sScrollY: "",
          sServerMethod: "GET",
          renderer: null,
        }),
        a(Vt.defaults),
        (Vt.defaults.column = {
          aDataSort: null,
          iDataSort: -1,
          asSorting: ["asc", "desc"],
          bSearchable: !0,
          bSortable: !0,
          bVisible: !0,
          fnCreatedCell: null,
          mData: null,
          mRender: null,
          sCellType: "td",
          sClass: "",
          sContentPadding: "",
          sDefaultContent: null,
          sName: "",
          sSortDataType: "std",
          sTitle: null,
          sType: null,
          sWidth: null,
        }),
        a(Vt.defaults.column),
        (Vt.models.oSettings = {
          oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null,
          },
          oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null,
          },
          oLanguage: { fnInfoCallback: null },
          oBrowser: { bScrollOversize: !1, bScrollbarLeft: !1 },
          ajax: null,
          aanFeatures: [],
          aoData: [],
          aiDisplay: [],
          aiDisplayMaster: [],
          aoColumns: [],
          aoHeader: [],
          aoFooter: [],
          oPreviousSearch: {},
          aoPreSearchCols: [],
          aaSorting: null,
          aaSortingFixed: [],
          asStripeClasses: null,
          asDestroyStripes: [],
          sDestroyWidth: 0,
          aoRowCallback: [],
          aoHeaderCallback: [],
          aoFooterCallback: [],
          aoDrawCallback: [],
          aoRowCreatedCallback: [],
          aoPreDrawCallback: [],
          aoInitComplete: [],
          aoStateSaveParams: [],
          aoStateLoadParams: [],
          aoStateLoaded: [],
          sTableId: "",
          nTable: null,
          nTHead: null,
          nTFoot: null,
          nTBody: null,
          nTableWrapper: null,
          bDeferLoading: !1,
          bInitialised: !1,
          aoOpenRows: [],
          sDom: null,
          searchDelay: null,
          sPaginationType: "two_button",
          iStateDuration: 0,
          aoStateSave: [],
          aoStateLoad: [],
          oSavedState: null,
          oLoadedState: null,
          sAjaxSource: null,
          sAjaxDataProp: null,
          bAjaxDataGet: !0,
          jqXHR: null,
          json: Ye,
          oAjaxData: Ye,
          fnServerData: null,
          aoServerParams: [],
          sServerMethod: null,
          fnFormatNumber: null,
          aLengthMenu: null,
          iDraw: 0,
          bDrawing: !1,
          iDrawError: -1,
          _iDisplayLength: 10,
          _iDisplayStart: 0,
          _iRecordsTotal: 0,
          _iRecordsDisplay: 0,
          bJUI: null,
          oClasses: {},
          bFiltered: !1,
          bSorted: !1,
          bSortCellsTop: null,
          oInit: null,
          aoDestroyCallback: [],
          fnRecordsTotal: function () {
            return "ssp" == Bt(this)
              ? 1 * this._iRecordsTotal
              : this.aiDisplayMaster.length;
          },
          fnRecordsDisplay: function () {
            return "ssp" == Bt(this)
              ? 1 * this._iRecordsDisplay
              : this.aiDisplay.length;
          },
          fnDisplayEnd: function () {
            var t = this._iDisplayLength,
              e = this._iDisplayStart,
              n = e + t,
              i = this.aiDisplay.length,
              r = this.oFeatures,
              o = r.bPaginate;
            return r.bServerSide
              ? !1 === o || -1 === t
                ? e + i
                : Math.min(e + t, this._iRecordsDisplay)
              : !o || i < n || -1 === t
              ? i
              : n;
          },
          oInstance: null,
          sInstance: null,
          iTabIndex: 0,
          nScrollHead: null,
          nScrollFoot: null,
          aLastSort: [],
          oPlugins: {},
        }),
        (Vt.ext = zt =
          {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            internal: {},
            legacy: { ajax: null },
            pager: {},
            renderer: { pageButton: {}, header: {} },
            order: {},
            type: { detect: [], search: {}, order: {} },
            _unique: 0,
            fnVersionCheck: Vt.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Vt.version,
          }),
        H.extend(zt, {
          afnFiltering: zt.search,
          aTypes: zt.type.detect,
          ofnSearch: zt.type.search,
          oSort: zt.type.order,
          afnSortData: zt.order,
          aoFeatures: zt.feature,
          oApi: zt.internal,
          oStdClasses: zt.classes,
          oPagination: zt.pager,
        }),
        H.extend(Vt.ext.classes, {
          sTable: "dataTable",
          sNoFooter: "no-footer",
          sPageButton: "paginate_button",
          sPageButtonActive: "current",
          sPageButtonDisabled: "disabled",
          sStripeOdd: "odd",
          sStripeEven: "even",
          sRowEmpty: "dataTables_empty",
          sWrapper: "dataTables_wrapper",
          sFilter: "dataTables_filter",
          sInfo: "dataTables_info",
          sPaging: "dataTables_paginate paging_",
          sLength: "dataTables_length",
          sProcessing: "dataTables_processing",
          sSortAsc: "sorting_asc",
          sSortDesc: "sorting_desc",
          sSortable: "sorting",
          sSortableAsc: "sorting_asc_disabled",
          sSortableDesc: "sorting_desc_disabled",
          sSortableNone: "sorting_disabled",
          sSortColumn: "sorting_",
          sFilterInput: "",
          sLengthSelect: "",
          sScrollWrapper: "dataTables_scroll",
          sScrollHead: "dataTables_scrollHead",
          sScrollHeadInner: "dataTables_scrollHeadInner",
          sScrollBody: "dataTables_scrollBody",
          sScrollFoot: "dataTables_scrollFoot",
          sScrollFootInner: "dataTables_scrollFootInner",
          sHeaderTH: "",
          sFooterTH: "",
          sSortJUIAsc: "",
          sSortJUIDesc: "",
          sSortJUI: "",
          sSortJUIAscAllowed: "",
          sSortJUIDescAllowed: "",
          sSortJUIWrapper: "",
          sSortIcon: "",
          sJUIHeader: "",
          sJUIFooter: "",
        }),
        (We = (Be = Be = "") + "ui-state-default"),
        (qe = Be + "css_right ui-icon ui-icon-"),
        (Ue = Be + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"),
        H.extend(Vt.ext.oJUIClasses, Vt.ext.classes, {
          sPageButton: "fg-button ui-button " + We,
          sPageButtonActive: "ui-state-disabled",
          sPageButtonDisabled: "ui-state-disabled",
          sPaging:
            "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
          sSortAsc: We + " sorting_asc",
          sSortDesc: We + " sorting_desc",
          sSortable: We + " sorting",
          sSortableAsc: We + " sorting_asc_disabled",
          sSortableDesc: We + " sorting_desc_disabled",
          sSortableNone: We + " sorting_disabled",
          sSortJUIAsc: qe + "triangle-1-n",
          sSortJUIDesc: qe + "triangle-1-s",
          sSortJUI: qe + "carat-2-n-s",
          sSortJUIAscAllowed: qe + "carat-1-n",
          sSortJUIDescAllowed: qe + "carat-1-s",
          sSortJUIWrapper: "DataTables_sort_wrapper",
          sSortIcon: "DataTables_sort_icon",
          sScrollHead: "dataTables_scrollHead " + We,
          sScrollFoot: "dataTables_scrollFoot " + We,
          sHeaderTH: We,
          sFooterTH: We,
          sJUIHeader: Ue + " ui-corner-tl ui-corner-tr",
          sJUIFooter: Ue + " ui-corner-bl ui-corner-br",
        });
      var ze = Vt.ext.pager;
      H.extend(ze, {
        simple: function () {
          return ["previous", "next"];
        },
        full: function () {
          return ["first", "previous", "next", "last"];
        },
        simple_numbers: function (t, e) {
          return ["previous", Wt(t, e), "next"];
        },
        full_numbers: function (t, e) {
          return ["first", "previous", Wt(t, e), "next", "last"];
        },
        _numbers: Wt,
        numbers_length: 7,
      }),
        H.extend(!0, Vt.ext.renderer, {
          pageButton: {
            _: function (s, t, l, e, u, c) {
              var d,
                f,
                n,
                h = s.oClasses,
                p = s.oLanguage.oPaginate,
                m = 0,
                g = function (t, e) {
                  var n,
                    i,
                    r,
                    o = function (t) {
                      ut(s, t.data.action, !0);
                    };
                  for (n = 0, i = e.length; n < i; n++)
                    if (((r = e[n]), H.isArray(r))) {
                      var a = H("<" + (r.DT_el || "div") + "/>").appendTo(t);
                      g(a, r);
                    } else {
                      switch (((f = d = ""), r)) {
                        case "ellipsis":
                          t.append('<span class="ellipsis">&#x2026;</span>');
                          break;
                        case "first":
                          (d = p.sFirst),
                            (f =
                              r + (0 < u ? "" : " " + h.sPageButtonDisabled));
                          break;
                        case "previous":
                          (d = p.sPrevious),
                            (f =
                              r + (0 < u ? "" : " " + h.sPageButtonDisabled));
                          break;
                        case "next":
                          (d = p.sNext),
                            (f =
                              r +
                              (u < c - 1 ? "" : " " + h.sPageButtonDisabled));
                          break;
                        case "last":
                          (d = p.sLast),
                            (f =
                              r +
                              (u < c - 1 ? "" : " " + h.sPageButtonDisabled));
                          break;
                        default:
                          (d = r + 1), (f = u === r ? h.sPageButtonActive : "");
                      }
                      d &&
                        (Ot(
                          H("<a>", {
                            class: h.sPageButton + " " + f,
                            "aria-controls": s.sTableId,
                            "data-dt-idx": m,
                            tabindex: s.iTabIndex,
                            id:
                              0 === l && "string" == typeof r
                                ? s.sTableId + "_" + r
                                : null,
                          })
                            .html(d)
                            .appendTo(t),
                          { action: r },
                          o
                        ),
                        m++);
                    }
                };
              try {
                n = H(Ge.activeElement).data("dt-idx");
              } catch (i) {}
              g(H(t).empty(), e),
                n &&
                  H(t)
                    .find("[data-dt-idx=" + n + "]")
                    .focus();
            },
          },
        }),
        H.extend(Vt.ext.type.detect, [
          function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ae(t, n) ? "num" + n : null;
          },
          function (t) {
            if (t && !(t instanceof Date) && (!Zt.test(t) || !te.test(t)))
              return null;
            var e = Date.parse(t);
            return (null !== e && !isNaN(e)) || ie(t) ? "date" : null;
          },
          function (t, e) {
            var n = e.oLanguage.sDecimal;
            return ae(t, n, !0) ? "num-fmt" + n : null;
          },
          function (t, e) {
            var n = e.oLanguage.sDecimal;
            return le(t, n) ? "html-num" + n : null;
          },
          function (t, e) {
            var n = e.oLanguage.sDecimal;
            return le(t, n, !0) ? "html-num-fmt" + n : null;
          },
          function (t) {
            return ie(t) || ("string" == typeof t && -1 !== t.indexOf("<"))
              ? "html"
              : null;
          },
        ]),
        H.extend(Vt.ext.type.search, {
          html: function (t) {
            return ie(t)
              ? t
              : "string" == typeof t
              ? t.replace(Kt, " ").replace(Qt, "")
              : "";
          },
          string: function (t) {
            return ie(t) ? t : "string" == typeof t ? t.replace(Kt, " ") : t;
          },
        });
      var Xe = function (t, e, n, i) {
        return 0 === t || (t && "-" !== t)
          ? (e && (t = oe(t, e)),
            t.replace &&
              (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))),
            1 * t)
          : -Infinity;
      };
      return (
        H.extend(zt.type.order, {
          "date-pre": function (t) {
            return Date.parse(t) || 0;
          },
          "html-pre": function (t) {
            return ie(t)
              ? ""
              : t.replace
              ? t.replace(/<.*?>/g, "").toLowerCase()
              : t + "";
          },
          "string-pre": function (t) {
            return ie(t)
              ? ""
              : "string" == typeof t
              ? t.toLowerCase()
              : t.toString
              ? t.toString()
              : "";
          },
          "string-asc": function (t, e) {
            return t < e ? -1 : e < t ? 1 : 0;
          },
          "string-desc": function (t, e) {
            return t < e ? 1 : e < t ? -1 : 0;
          },
        }),
        qt(""),
        H.extend(!0, Vt.ext.renderer, {
          header: {
            _: function (o, a, s, l) {
              H(o.nTable).on("order.dt.DT", function (t, e, n, i) {
                if (o === e) {
                  var r = s.idx;
                  a.removeClass(
                    s.sSortingClass + " " + l.sSortAsc + " " + l.sSortDesc
                  ).addClass(
                    "asc" == i[r]
                      ? l.sSortAsc
                      : "desc" == i[r]
                      ? l.sSortDesc
                      : s.sSortingClass
                  );
                }
              });
            },
            jqueryui: function (o, a, s, l) {
              H("<div/>")
                .addClass(l.sSortJUIWrapper)
                .append(a.contents())
                .append(
                  H("<span/>").addClass(l.sSortIcon + " " + s.sSortingClassJUI)
                )
                .appendTo(a),
                H(o.nTable).on("order.dt.DT", function (t, e, n, i) {
                  if (o === e) {
                    var r = s.idx;
                    a
                      .removeClass(l.sSortAsc + " " + l.sSortDesc)
                      .addClass(
                        "asc" == i[r]
                          ? l.sSortAsc
                          : "desc" == i[r]
                          ? l.sSortDesc
                          : s.sSortingClass
                      ),
                      a
                        .find("span." + l.sSortIcon)
                        .removeClass(
                          l.sSortJUIAsc +
                            " " +
                            l.sSortJUIDesc +
                            " " +
                            l.sSortJUI +
                            " " +
                            l.sSortJUIAscAllowed +
                            " " +
                            l.sSortJUIDescAllowed
                        )
                        .addClass(
                          "asc" == i[r]
                            ? l.sSortJUIAsc
                            : "desc" == i[r]
                            ? l.sSortJUIDesc
                            : s.sSortingClassJUI
                        );
                  }
                });
            },
          },
        }),
        (Vt.render = {
          number: function (r, o, a, s) {
            return {
              display: function (t) {
                if ("number" != typeof t && "string" != typeof t) return t;
                var e = t < 0 ? "-" : "";
                t = Math.abs(parseFloat(t));
                var n = parseInt(t, 10),
                  i = a ? o + (t - n).toFixed(a).substring(2) : "";
                return (
                  e +
                  (s || "") +
                  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, r) +
                  i
                );
              },
            };
          },
        }),
        H.extend(Vt.ext.internal, {
          _fnExternApiFunc: Ut,
          _fnBuildAjax: E,
          _fnAjaxUpdate: k,
          _fnAjaxParameters: i,
          _fnAjaxUpdateDraw: o,
          _fnAjaxDataSrc: A,
          _fnAddColumn: O,
          _fnColumnOptions: P,
          _fnAdjustColumnSizing: x,
          _fnVisibleToColumnIndex: B,
          _fnColumnIndexToVisible: c,
          _fnVisbleColumns: C,
          _fnGetColumns: S,
          _fnColumnTypes: l,
          _fnApplyColumnDefs: R,
          _fnHungarianMap: a,
          _fnCamelToHungarian: N,
          _fnLanguageCompat: I,
          _fnBrowserDetect: L,
          _fnAddData: M,
          _fnAddTr: W,
          _fnNodeToDataIndex: t,
          _fnNodeToColumnIndex: e,
          _fnGetCellData: m,
          _fnSetCellData: u,
          _fnSplitObjNotation: g,
          _fnGetObjectDataFn: p,
          _fnSetObjectDataFn: v,
          _fnGetDataMaster: _,
          _fnClearTable: d,
          _fnDeleteIndex: s,
          _fnInvalidate: r,
          _fnGetRowElements: q,
          _fnCreateTr: T,
          _fnBuildHead: h,
          _fnDrawHead: y,
          _fnDraw: b,
          _fnReDraw: w,
          _fnAddOptionsHtml: D,
          _fnDetectHeader: U,
          _fnGetUniqueThs: V,
          _fnFeatureHtmlFilter: j,
          _fnFilterComplete: z,
          _fnFilterCustom: X,
          _fnFilterColumn: J,
          _fnFilter: G,
          _fnFilterCreateSearch: Y,
          _fnEscapeRegex: K,
          _fnFilterData: Q,
          _fnFeatureHtmlInfo: et,
          _fnUpdateInfo: nt,
          _fnInfoMacros: it,
          _fnInitialise: rt,
          _fnInitComplete: ot,
          _fnLengthChange: at,
          _fnFeatureHtmlLength: st,
          _fnFeatureHtmlPaginate: lt,
          _fnPageChange: ut,
          _fnFeatureHtmlProcessing: ct,
          _fnProcessingDisplay: dt,
          _fnFeatureHtmlTable: ft,
          _fnScrollDraw: ht,
          _fnApplyToChildren: pt,
          _fnCalculateColumnWidths: mt,
          _fnThrottle: gt,
          _fnConvertToWidth: vt,
          _fnScrollingWidthAdjust: yt,
          _fnGetWidestNode: bt,
          _fnGetMaxLenString: wt,
          _fnStringToCss: _t,
          _fnScrollBarWidth: xt,
          _fnSortFlatten: Ct,
          _fnSort: St,
          _fnSortAria: Tt,
          _fnSortListener: Dt,
          _fnSortAttachListener: Et,
          _fnSortingClasses: kt,
          _fnSortData: At,
          _fnSaveState: jt,
          _fnLoadState: Nt,
          _fnSettingsFromNode: It,
          _fnLog: Ft,
          _fnMap: $t,
          _fnBindAction: Ot,
          _fnCallbackReg: Pt,
          _fnCallbackFire: Rt,
          _fnLengthOverflow: Mt,
          _fnRenderer: Ht,
          _fnDataSource: Bt,
          _fnRowAttributes: f,
          _fnCalculateEnd: function () {},
        }),
        (H.fn.dataTable = Vt),
        (H.fn.dataTableSettings = Vt.settings),
        (H.fn.dataTableExt = Vt.ext),
        (H.fn.DataTable = function (t) {
          return H(this).dataTable(t).api();
        }),
        H.each(Vt, function (t, e) {
          H.fn.DataTable[t] = e;
        }),
        H.fn.dataTable
      );
    });
  })(window, document),
  (function () {
    var t = function (v, n) {
      "use strict";
      v.extend(!0, n.defaults, {
        dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
        renderer: "bootstrap",
      }),
        v.extend(n.ext.classes, {
          sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
          sFilterInput: "form-control input-sm",
          sLengthSelect: "form-control input-sm",
        }),
        (n.ext.renderer.pageButton.bootstrap = function (s, t, l, e, u, c) {
          var d,
            f,
            h = new n.Api(s),
            p = s.oClasses,
            m = s.oLanguage.oPaginate,
            g = function (t, e) {
              var n,
                i,
                r,
                o,
                a = function (t) {
                  t.preventDefault(),
                    v(t.currentTarget).hasClass("disabled") ||
                      h.page(t.data.action).draw(!1);
                };
              for (n = 0, i = e.length; n < i; n++)
                if (((o = e[n]), v.isArray(o))) g(t, o);
                else {
                  switch (((f = d = ""), o)) {
                    case "ellipsis":
                      (d = "&hellip;"), (f = "disabled");
                      break;
                    case "first":
                      (d = m.sFirst), (f = o + (0 < u ? "" : " disabled"));
                      break;
                    case "previous":
                      (d = m.sPrevious), (f = o + (0 < u ? "" : " disabled"));
                      break;
                    case "next":
                      (d = m.sNext), (f = o + (u < c - 1 ? "" : " disabled"));
                      break;
                    case "last":
                      (d = m.sLast), (f = o + (u < c - 1 ? "" : " disabled"));
                      break;
                    default:
                      (d = o + 1), (f = u === o ? "active" : "");
                  }
                  d &&
                    ((r = v("<li>", {
                      class: p.sPageButton + " " + f,
                      "aria-controls": s.sTableId,
                      tabindex: s.iTabIndex,
                      id:
                        0 === l && "string" == typeof o
                          ? s.sTableId + "_" + o
                          : null,
                    })
                      .append(v("<a>", { href: "#" }).html(d))
                      .appendTo(t)),
                    s.oApi._fnBindAction(r, { action: o }, a));
                }
            };
          g(v(t).empty().html('<ul class="pagination"/>').children("ul"), e);
        }),
        n.TableTools &&
          (v.extend(!0, n.TableTools.classes, {
            container: "DTTT btn-group",
            buttons: { normal: "btn btn-default", disabled: "disabled" },
            collection: {
              container: "DTTT_dropdown dropdown-menu",
              buttons: { normal: "", disabled: "disabled" },
            },
            print: { info: "DTTT_print_info" },
            select: { row: "active" },
          }),
          v.extend(!0, n.TableTools.DEFAULTS.oTags, {
            collection: { container: "ul", button: "li", liner: "a" },
          }));
    };
    "function" == typeof define && define.amd
      ? define(["jquery", "datatables"], t)
      : "object" == typeof exports
      ? t(require("jquery"), require("datatables"))
      : jQuery && t(jQuery, jQuery.fn.dataTable);
  })(window, document),
  (function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
      var e;
      "undefined" != typeof window
        ? (e = window)
        : "undefined" != typeof global
        ? (e = global)
        : "undefined" != typeof self && (e = self),
        (e.Slideout = t());
    }
  })(function () {
    return (function c(o, a, s) {
      function l(n, t) {
        if (!a[n]) {
          if (!o[n]) {
            var e = "function" == typeof require && require;
            if (!t && e) return e(n, !0);
            if (u) return u(n, !0);
            var i = new Error("Cannot find module '" + n + "'");
            throw ((i.code = "MODULE_NOT_FOUND"), i);
          }
          var r = (a[n] = { exports: {} });
          o[n][0].call(
            r.exports,
            function (t) {
              var e = o[n][1][t];
              return l(e || t);
            },
            r,
            r.exports,
            c,
            o,
            a,
            s
          );
        }
        return a[n].exports;
      }
      for (
        var u = "function" == typeof require && require, t = 0;
        t < s.length;
        t++
      )
        l(s[t]);
      return l;
    })(
      {
        1: [
          function (t, e) {
            "use strict";
            function n(t, e) {
              for (var n in e) e[n] && (t[n] = e[n]);
              return t;
            }
            function i(t, e) {
              t.prototype = n(t.prototype || {}, e.prototype);
            }
            function r(t) {
              (t = t || {}),
                (this._startOffsetX = 0),
                (this._currentOffsetX = 0),
                (this._opening = !1),
                (this._moved = !1),
                (this._opened = !1),
                (this._preventOpen = !1),
                (this._touch = t.touch === undefined || (t.touch && !0)),
                (this.panel = t.panel),
                (this.menu = t.menu),
                -1 === this.panel.className.search("slideout-panel") &&
                  (this.panel.className += " slideout-panel"),
                -1 === this.menu.className.search("slideout-menu") &&
                  (this.menu.className += " slideout-menu"),
                (this._fx = t.fx || "ease"),
                (this._duration = parseInt(t.duration, 10) || 300),
                (this._tolerance = parseInt(t.tolerance, 10) || 70),
                (this._padding = this._translateTo =
                  parseInt(t.padding, 10) || 256),
                (this._orientation = "right" === t.side ? -1 : 1),
                (this._translateTo *= this._orientation),
                this._touch && this._initTouchEvents();
            }
            var o,
              a = t("decouple"),
              s = t("emitter"),
              l = !1,
              u = window.document,
              c = u.documentElement,
              d = window.navigator.msPointerEnabled,
              f = {
                start: d ? "MSPointerDown" : "touchstart",
                move: d ? "MSPointerMove" : "touchmove",
                end: d ? "MSPointerUp" : "touchend",
              },
              h = (function h() {
                var t = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
                  e = u.getElementsByTagName("script")[0].style;
                for (var n in e)
                  if (t.test(n)) return "-" + n.match(t)[0].toLowerCase() + "-";
                return "WebkitOpacity" in e
                  ? "-webkit-"
                  : "KhtmlOpacity" in e
                  ? "-khtml-"
                  : "";
              })();
            i(r, s),
              (r.prototype.open = function () {
                var t = this;
                return (
                  this.emit("beforeopen"),
                  -1 === c.className.search("slideout-open") &&
                    (c.className += " slideout-open"),
                  this._setTransition(),
                  this._translateXTo(this._translateTo),
                  (this._opened = !0),
                  setTimeout(function () {
                    (t.panel.style.transition = t.panel.style[
                      "-webkit-transition"
                    ] =
                      ""),
                      t.emit("open");
                  }, this._duration + 50),
                  this
                );
              }),
              (r.prototype.close = function () {
                var t = this;
                return (
                  (this.isOpen() || this._opening) &&
                    (this.emit("beforeclose"),
                    this._setTransition(),
                    this._translateXTo(0),
                    (this._opened = !1),
                    setTimeout(function () {
                      (c.className = c.className.replace(/ slideout-open/, "")),
                        (t.panel.style.transition =
                          t.panel.style["-webkit-transition"] =
                          t.panel.style[h + "transform"] =
                          t.panel.style.transform =
                            ""),
                        t.emit("close");
                    }, this._duration + 50)),
                  this
                );
              }),
              (r.prototype.toggle = function () {
                return this.isOpen() ? this.close() : this.open();
              }),
              (r.prototype.isOpen = function () {
                return this._opened;
              }),
              (r.prototype._translateXTo = function (t) {
                return (
                  (this._currentOffsetX = t),
                  (this.panel.style[h + "transform"] =
                    this.panel.style.transform =
                      "translateX(" + t + "px)"),
                  this
                );
              }),
              (r.prototype._setTransition = function () {
                return (
                  (this.panel.style[h + "transition"] =
                    this.panel.style.transition =
                      h + "transform " + this._duration + "ms " + this._fx),
                  this
                );
              }),
              (r.prototype._initTouchEvents = function () {
                var r = this;
                return (
                  (this._onScrollFn = a(u, "scroll", function () {
                    r._moved ||
                      (clearTimeout(o),
                      (l = !0),
                      (o = setTimeout(function () {
                        l = !1;
                      }, 250)));
                  })),
                  (this._preventMove = function (t) {
                    r._moved && t.preventDefault();
                  }),
                  u.addEventListener(f.move, this._preventMove),
                  (this._resetTouchFn = function (t) {
                    "undefined" != typeof t.touches &&
                      ((r._moved = !1),
                      (r._opening = !1),
                      (r._startOffsetX = t.touches[0].pageX),
                      (r._preventOpen =
                        !r._touch ||
                        (!r.isOpen() && 0 !== r.menu.clientWidth)));
                  }),
                  this.panel.addEventListener(f.start, this._resetTouchFn, {
                    passive: !0,
                  }),
                  (this._onTouchCancelFn = function () {
                    (r._moved = !1), (r._opening = !1);
                  }),
                  this.panel.addEventListener(
                    "touchcancel",
                    this._onTouchCancelFn
                  ),
                  (this._onTouchEndFn = function () {
                    r._moved &&
                      (r._opening && Math.abs(r._currentOffsetX) > r._tolerance
                        ? r.open()
                        : r.close()),
                      (r._moved = !1);
                  }),
                  this.panel.addEventListener(f.end, this._onTouchEndFn, {
                    passive: !0,
                  }),
                  (this._onTouchMoveFn = function (t) {
                    if (
                      !l &&
                      !r._preventOpen &&
                      "undefined" != typeof t.touches
                    ) {
                      var e = t.touches[0].clientX - r._startOffsetX,
                        n = (r._currentOffsetX = e);
                      if (!(Math.abs(n) > r._padding) && 20 < Math.abs(e)) {
                        r._opening = !0;
                        var i = e * r._orientation;
                        if ((r._opened && 0 < i) || (!r._opened && i < 0))
                          return;
                        i <= 0 &&
                          ((n = e + r._padding * r._orientation),
                          (r._opening = !1)),
                          r._moved ||
                            -1 !== c.className.search("slideout-open") ||
                            (c.className += " slideout-open"),
                          (r.panel.style[h + "transform"] =
                            r.panel.style.transform =
                              "translateX(" + n + "px)"),
                          r.emit("translate", n),
                          (r._moved = !0);
                      }
                    }
                  }),
                  this.panel.addEventListener(f.move, this._onTouchMoveFn),
                  this
                );
              }),
              (r.prototype.enableTouch = function () {
                return (this._touch = !0), this;
              }),
              (r.prototype.disableTouch = function () {
                return (this._touch = !1), this;
              }),
              (r.prototype.destroy = function () {
                return (
                  this.close(),
                  u.removeEventListener(f.move, this._preventMove),
                  this.panel.removeEventListener(f.start, this._resetTouchFn),
                  this.panel.removeEventListener(
                    "touchcancel",
                    this._onTouchCancelFn
                  ),
                  this.panel.removeEventListener(f.end, this._onTouchEndFn),
                  this.panel.removeEventListener(f.move, this._onTouchMoveFn),
                  u.removeEventListener("scroll", this._onScrollFn),
                  (this.open = this.close = function () {}),
                  this
                );
              }),
              (e.exports = r);
          },
          { decouple: 2, emitter: 3 },
        ],
        2: [
          function (t, e) {
            "use strict";
            function n(t, e, n) {
              function i(t) {
                (a = t), r();
              }
              function r() {
                s || (l(o), (s = !0));
              }
              function o() {
                n.call(t, a), (s = !1);
              }
              var a,
                s = !1;
              return t.addEventListener(e, i, !1), i;
            }
            var l =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (t) {
                window.setTimeout(t, 1e3 / 60);
              };
            e.exports = n;
          },
          {},
        ],
        3: [
          function (t, e, n) {
            "use strict";
            var i = function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            };
            n.__esModule = !0;
            var r = (function () {
              function t() {
                i(this, t);
              }
              return (
                (t.prototype.on = function n(t, e) {
                  return (
                    (this._eventCollection = this._eventCollection || {}),
                    (this._eventCollection[t] = this._eventCollection[t] || []),
                    this._eventCollection[t].push(e),
                    this
                  );
                }),
                (t.prototype.once = function r(t, e) {
                  function n() {
                    i.off(t, n), e.apply(this, arguments);
                  }
                  var i = this;
                  return (n.listener = e), this.on(t, n), this;
                }),
                (t.prototype.off = function e(t, n) {
                  var i = undefined;
                  return (
                    this._eventCollection &&
                      (i = this._eventCollection[t]) &&
                      (i.forEach(function (t, e) {
                        (t !== n && t.listener !== n) || i.splice(e, 1);
                      }),
                      0 === i.length && delete this._eventCollection[t]),
                    this
                  );
                }),
                (t.prototype.emit = function a(t) {
                  for (
                    var e = this,
                      n = arguments.length,
                      i = Array(1 < n ? n - 1 : 0),
                      r = 1;
                    r < n;
                    r++
                  )
                    i[r - 1] = arguments[r];
                  var o = undefined;
                  return (
                    this._eventCollection &&
                      (o = this._eventCollection[t]) &&
                      (o = o.slice(0)).forEach(function (t) {
                        return t.apply(e, i);
                      }),
                    this
                  );
                }),
                t
              );
            })();
            (n["default"] = r), (e.exports = n["default"]);
          },
          {},
        ],
      },
      {},
      [1]
    )(1);
  }),
  (function () {
    function e(t) {
      return Array.prototype.slice.call(t);
    }
    function r(t) {
      var e = parseInt(t, 10);
      return c < e ? c : e;
    }
    function o(t) {
      return (
        t.hasAttribute("data-no-resize") ||
          (0 === t.offsetWidth && 0 === t.offsetHeight
            ? (t.setAttribute("width", t.naturalWidth),
              t.setAttribute("height", t.naturalHeight))
            : (t.setAttribute("width", t.offsetWidth),
              t.setAttribute("height", t.offsetHeight))),
        t
      );
    }
    function a(t, e) {
      var n = t.nodeName.toLowerCase(),
        i = document.createElement("img");
      i.addEventListener("load", function () {
        "img" === n
          ? o(t).setAttribute("src", e)
          : (t.style.backgroundImage = "url(" + e + ")");
      }),
        i.setAttribute("src", e),
        t.setAttribute(p, !0);
    }
    function i(t, e, n) {
      var i = r(arguments.length <= 2 || void 0 === n ? 1 : n);
      e && 1 < i && a(t, e.replace(d, "@" + i + "x$1"));
    }
    function s(t, e, n) {
      1 < c && a(t, n);
    }
    function n(t) {
      return t
        ? "function" == typeof t.forEach
          ? t
          : e(t)
        : "undefined" != typeof document
        ? e(document.querySelectorAll(h))
        : [];
    }
    function l(t) {
      return t.style.backgroundImage.replace(f, "$2");
    }
    function t(t) {
      n(t).forEach(function (t) {
        if (!t.getAttribute(p)) {
          var e =
              "img" === t.nodeName.toLowerCase() ? t.getAttribute("src") : l(t),
            n = t.getAttribute("data-rjs");
          !isNaN(parseInt(n, 10)) ? i(t, e, n) : s(t, e, n);
        }
      });
    }
    "undefined" == typeof exports && (exports = {}),
      Object.defineProperty(exports, "__esModule", { value: !0 });
    var u = "undefined" != typeof window,
      c = (u && window.devicePixelRatio) || 1,
      d = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
      f = /url\(('|")?([^\)'"]+)('|")?\)/i,
      h = "[data-rjs]",
      p = "data-rjs-processed";
    u && (window.addEventListener("load", t), (window.retinajs = t)),
      (exports["default"] = t);
  })(),
  (window.jobsBCN = window.jobsBCN || {
    admin: {},
    tooltip: function () {
      $('[data-toggle="tooltip"]').tooltip();
    },
    redirectTo: function (t) {
      setTimeout(function () {
        window.location.href = t;
      }, 1e3);
    },
    changeSelect: function () {
      $(document).on(
        "change",
        'select[data-action="change-select"]',
        function () {
          var t = this,
            e = $(this),
            n = e.data("company"),
            i = e.data("offer"),
            r = e.data("url"),
            o = e.val(),
            a = { _method: "patch", status: o, offer_id: i, company_id: n };
          $('[data-action="change-select"][data-url="' + r + '"]').each(
            function () {
              this !== t && $(this).val(e.val());
            }
          ),
            $.post(r, a, function () {
              var t = e.closest("div.group");
              t
                .find("button.btn-intro")
                .toggleClass("hidden", "introduced" == o),
                t
                  .find(".check-present-candidate")
                  .prop("disabled", "sent_for_review" == o);
            });
        }
      );
    },
    scrollTop: function () {
      var e = $("html, body");
      $(".scroll-top").on("click", function (t) {
        t.preventDefault(), e.animate({ scrollTop: 0 }, 600);
      });
    },
    track: function (t, e, n) {
      var i = (n = n || {}).gaNonInteraction ? { nonInteraction: !0 } : {};
      ga("send", "event", "button", t, e, i),
        hj("tagRecording", [t]),
        n.trackHeap && heap.track(t, e);
    },
    requestParams: function () {
      var t,
        e = {};
      if ("" === location.search) return e;
      for (
        var n = location.search.substring(1).split("&"), i = 0;
        i < n.length;
        i++
      )
        e[(t = n[i].split("="))[0]] = t[1];
      return e;
    },
    createPath: function (t, e) {
      return (
        (e = e || location.pathname),
        $.isEmptyObject(t) ? e : [e, $.param(t)].join("?")
      );
    },
    debounce: function (n, i, r) {
      var o,
        a,
        s = function (t, e) {
          (o = null), e && (a = n.apply(t, e));
        },
        t = this.restArguments(function (t) {
          if ((o && clearTimeout(o), r)) {
            var e = !o;
            (o = setTimeout(s, i)), e && (a = n.apply(this, t));
          } else o = _.delay(s, i, this, t);
          return a;
        });
      return (
        (t.cancel = function () {
          clearTimeout(o), (o = null);
        }),
        t
      );
    },
    restArguments: function (a, s) {
      return (
        (s = null == s ? a.length - 1 : +s),
        function (t, e) {
          for (
            var n = Math.max(arguments.length - s, 0), i = Array(n), r = 0;
            r < n;
            r++
          )
            i[r] = arguments[r + s];
          switch (s) {
            case 0:
              return a.call(this, i);
            case 1:
              return a.call(this, t, i);
            case 2:
              return a.call(this, t, e, i);
          }
          var o = Array(s + 1);
          for (r = 0; r < s; r++) o[r] = arguments[r];
          return (o[s] = i), a.apply(this, o);
        }
      );
    },
  }),
  (jobsBCN.Company = {
    track: function (t) {
      $("[data-company-cta]").on("click", function () {
        jobsBCN.track(t, this.getAttribute("data-company-cta"));
      });
    },
  }),
  (jobsBCN.InfiniteScroll = function () {
    (this._window = $(window)),
      (this._document = $(document)),
      (this._container = $("#inf-scr-container")),
      (this._dataTable = $("#inf-scr-data-table")),
      (this._loader = $("#loading-feedback-cue").hide()),
      (this._allResults = $("#all-results").hide()),
      this._bind();
  }),
  (jobsBCN.InfiniteScroll.prototype = {
    append: function (t, e) {
      this._loader.hide(),
        this._dataTable.remove(),
        this._container.append(t),
        (this._loading = !1),
        e || this._allResults.show();
    },
    replace: function (t, e) {
      this._loader.hide(),
        this._dataTable.remove(),
        this._container.html(t),
        (this._loading = !1),
        e || this._allResults.show(),
        this._prevBtn && this._prevBtn.hide();
    },
    prepend: function (t, e) {
      this._container.prepend(t),
        this._prevBtn &&
          (this._prevBtn.removeClass("loading").attr("disabled", !1),
          e ? this._prevBtn.data("page", e) : this._prevBtn.hide()),
        (this._loading = !1);
    },
    _loadPrevious: function (t) {
      t.preventDefault(),
        (this._prevBtn = $(t.target).attr("disabled", !0).addClass("loading")),
        this._fetch(this._prevBtn.data("page"), !0);
    },
    _onWindowScroll: function () {
      if (!this._loading && this._canScroll()) {
        var t = this._container.find("[data-next-page]:last");
        if ((t.length && (nextPage = t.data("next-page")), !nextPage)) return;
        this._loader.show(), this._fetch(nextPage);
      }
    },
    _fetch: function (t, e) {
      this._allResults.hide();
      var n = jobsBCN.requestParams();
      t && (n.page = t),
        this._updateLocation(jobsBCN.createPath(n)),
        e && (n.prepend = !0),
        $.getScript(jobsBCN.createPath(n)),
        (this._loading = !0);
    },
    _updateLocation: function (t) {
      var e = location.protocol + "//" + location.host + t;
      history.pushState(null, null, e);
    },
    _canScroll: function () {
      return (
        this._window.scrollTop() >
        this._document.height() - this._window.height() - 60
      );
    },
    _bind: function () {
      this._window.on("scroll", $.proxy(this, "_onWindowScroll")),
        this._document.on(
          "click",
          ".load-prev",
          $.proxy(this, "_loadPrevious")
        );
    },
  }),
  (function (t, e, n, u) {
    var a,
      c = {
        send: "/admin/job_applications/{job_application_id}/job_application_intros",
        get: "job_applications/{job_application_id}",
      },
      s = "Intro - {CANDIDATE}, {COMPANY_MANAGER} ({COMPANY_NAME})",
      l = "";
    t.IntroButtons = {
      init: function (t) {
        var e = this;
        (this.$modal = u("#send-intro-modal")),
          (l = t.current_company),
          (a = u("#template-form-intro-body").html()),
          (s = this.wrapWithSpan(s, "{COMPANY_MANAGER}", "company-manager")),
          (s = this.wrapWithSpan(s, "{CANDIDATE}", "candidate")),
          (this.editorReady = !1),
          (this.editorSubjectReady = !1),
          u(n).on("click", "button.btn-intro", function () {
            e.onButtonClick(u(this));
          }),
          u("form", this.$modal).on("submit", function () {
            return e.onFormSubmit(u(this)), !1;
          }),
          this.$modal.on("shown.bs.modal", function () {
            e.onModalOpen();
          }),
          this.$modal.on("hidden.bs.modal", function () {
            e.onModalClose();
          });
      },
      onFormSubmit: function (t) {
        var e = this,
          n = u("#form-intro-job-application-id", t).val(),
          i = c.send.replace("{job_application_id}", n),
          r = u("#btn-send", t),
          o = function () {
            r.text("Send").prop("disabled", !1);
          };
        r.text("Sending...").prop("disabled", !0),
          u("input", t).removeClass("has-errors");
        var a = t.serializeArray();
        for (var s in a) {
          var l = a[s];
          "intro[subject]" == l.name &&
            (l.value = u("<div/>").html(l.value).text());
        }
        u.ajax({
          url: i,
          data: a,
          method: "POST",
          success: function (t) {
            o(), e.onSendSuccess(t);
          },
          error: function (t) {
            o(), e.onSendError(t);
          },
        });
      },
      onSendSuccess: function (t) {
        if (t.job_application_id) {
          var e = t.job_application_id,
            n = u('button.btn-intro[data-application-id="' + e + '"]');
          if (n.length)
            n.parent()
              .find('select[data-action="change-select"]')
              .val("introduced")
              .change();
        }
        u(".close", this.$modal).click();
      },
      onSendError: function (t) {
        if (t.responseJSON) {
          var e = t.responseJSON.errors;
          if (e) {
            var n = this.$modal,
              i = !1;
            for (var r in e) {
              var o = r.replace(/_/g, "-");
              u("#form-intro-" + o, n).addClass("has-errors"), (i = !0);
            }
            i || alert("General error occured, please try again later");
          }
        }
      },
      onButtonClick: function (t) {
        var e = this,
          n = this.$modal,
          i = t.data("application-id"),
          r = t.data("offer-id");
        if (i && r) {
          u("#form-intro-job-application-id", n).val(i), n.modal({ show: !0 });
          var o = c.get.replace("{job_application_id}", i),
            a = { offer_id: r, company_id: l };
          u.get(o, a, function (t) {
            t && e.populateFormFor(t);
          });
        }
      },
      editorParserRules: function () {
        var t = wysihtmlParserRules;
        return (
          (t.attributes = t.attributes || {}),
          (t.attributes.style = t.attributes.style || "any"),
          delete t.tags.div.one_of_type,
          delete t.tags.span.one_of_type,
          t
        );
      },
      onModalOpen: function () {
        var t = this,
          e = u("form", this.$modal);
        this.editor ||
          ((this.editor = new wysihtml.Editor("form-intro-body", {
            toolbar: "form-intro-body-toolbar",
            parserRules: this.editorParserRules(),
          })),
          this.editor.on("load", function () {
            (t.editorReady = !0),
              t.initialBody &&
                (t.editor.setValue(t.initialBody),
                delete t.initialBody,
                t.setInitialFocus());
          })),
          this.editorSubject ||
            ((this.editorSubject = new wysihtml.Editor("form-intro-subject", {
              parserRules: this.editorParserRules(),
            })),
            this.editorSubject.on("load", function () {
              (t.editorSubjectReady = !0),
                t.initialSubject &&
                  (t.editorSubject.setValue(t.initialSubject),
                  delete t.initialSubject,
                  t.setInitialFocus());
            })),
          u("#form-intro-manager-name", e).on("keyup", function () {
            t.updateManagerName(this.value);
          }),
          u("#form-intro-candidate-name", e).on("keyup", function () {
            t.updateCandidateName(this.value);
          });
      },
      onModalClose: function () {
        this.resetForm(),
          u("#form-intro-manager-name", this.$modal).off("keyup"),
          u("#form-intro-candidate-name", this.$modal).off("keyup");
      },
      updateInEditor: function (t, e, n) {
        if (t) {
          var i = t.getValue(),
            r = u("<div/>");
          r.html(i), u("span." + e, r).text(n), t.setValue(r.html());
        }
      },
      updateManagerName: function (t) {
        (t = t || "MANAGER_NAME"),
          this.updateInEditor(this.editor, "company-manager", t),
          this.updateInEditor(this.editorSubject, "company-manager", t);
      },
      updateCandidateName: function (t) {
        (t = t || "CANDIDATE"),
          this.updateInEditor(this.editor, "candidate", t),
          this.updateInEditor(this.editorSubject, "candidate", t);
      },
      replaceVariables: function (t, e) {
        var n = e.company_user,
          i = n ? n.name : "",
          r = e.offer;
        return (
          (i = i || "MANAGER_NAME"),
          t
            .replace(/{+COMPANY_MANAGER}+/g, i)
            .replace(/{+COMPANY_NAME}+/g, e.company.name)
            .replace(/{+CANDIDATE}+/g, e.user.name)
            .replace(/{+CANDIDATE_URL}+/g, e.user.url)
            .replace(/{+OFFER_URL}+/g, r ? r.url : "")
        );
      },
      resetForm: function () {
        var t = u("form", this.$modal);
        u("#form-intro-job-application-id", t).val(""),
          u("#form-intro-manager-name", t).val(""),
          u("#form-intro-manager-email", t).val(""),
          u("#form-intro-candidate-name", t).val(""),
          u("#form-intro-candidate-email", t).val(""),
          this.editor && this.editor.setValue(""),
          this.editorSubject && this.editorSubject.setValue("");
      },
      wrapWithSpan: function (t, e, n) {
        return t.replace(e, '<span class="' + n + '">' + e + "</span>");
      },
      setInitialFocus: function () {
        u("#form-intro-manager-name", this.$modal).focus(),
          u("#form-intro-manager-name", this.$modal).focus();
      },
      setInitialFocusDelayed: function () {
        var t = u("#form-intro-manager-name", this.$modal);
        setTimeout(function () {
          t.is(":focus") || t.focus();
        }, 250);
      },
      populateFormFor: function (t) {
        var e = t.user,
          n = t.company_user,
          i = u("form", this.$modal);
        u("#form-intro-manager-name", i).val(n ? n.name : ""),
          u("#form-intro-manager-email", i).val(n ? n.email : ""),
          u("#form-intro-candidate-name", i).val(e.name),
          u("#form-intro-candidate-email", i).val(e.email);
        var r = this.replaceVariables(a, t);
        this.editorReady
          ? (this.editor.setValue(r), this.setInitialFocusDelayed())
          : (this.initialBody = r);
        var o = this.replaceVariables(s, t);
        this.editorSubjectReady
          ? (this.editorSubject.setValue(o), this.setInitialFocusDelayed())
          : (this.initialSubject = o);
      },
    };
  })(jobsBCN, window, document, $),
  (function (t, e, n, c) {
    var d = {
        users: "/admin/users_details",
        job_applications: "/myadmin/job_applications",
        send: "/admin/candidates_reviews",
      },
      f = {
        SUBJECT_BASE: "{LABEL_CANDIDATES}, {LABEL_WEEK} {WEEK}",
        SUBJECT: "",
        BODY: "",
        JOB: "",
        USER: "",
        GREETING: "",
        SIGNATURE: "",
        SKILL_MAIN: "",
        SKILL_OTHER: "",
      },
      h = { id: 0, name: "" },
      o = { jobApplications: [] };
    t.PresentCandidatesButton = {
      init: function (t) {
        var e = this;
        (this.$modal = c("#present-candidates-modal")),
          (h = t.current_company),
          (this.lang = t.lang),
          c(".btn-present-candidates").prop("disabled", !0),
          this.prepareTemplates(),
          (this.editorReady = !1),
          (this.editorSubjectReady = !1),
          c(n).on("click", ".btn-present-candidates", function () {
            e.onButtonClick(c(this));
          }),
          c(n).on("change", ".check-present-candidate", function () {
            e.updateButtonState();
          }),
          c("form", this.$modal).on("submit", function () {
            return e.onFormSubmit(c(this)), !1;
          }),
          this.$modal.on("shown.bs.modal", function () {
            e.onModalOpen();
          }),
          this.$modal.on("hidden.bs.modal", function () {
            e.onModalClose();
          });
      },
      onFormSubmit: function (t) {
        var e = this,
          n = d.send,
          i = c("#btn-send", t),
          r = function () {
            i.text("Send").prop("disabled", !1);
          };
        i.text("Sending...").prop("disabled", !0),
          c("input", t).removeClass("has-errors");
        var o = t.serializeArray();
        for (var a in o) {
          var s = o[a];
          if (
            ("present[subject]" == s.name &&
              (s.value = c("<div/>").html(s.value).text()),
            "present[body]" == s.name)
          ) {
            var l = c("<div/>").html(s.value),
              u = c(".candidates-list .application-item", l).map(function () {
                return this.id.replace("application-id-", "");
              });
            o.push({ name: "job_application_ids", value: c.makeArray(u) });
          }
        }
        c.ajax({
          url: n,
          data: o,
          method: "POST",
          success: function (t) {
            r(), e.onSendSuccess(t);
          },
          error: function (t) {
            r(), e.onSendError(t);
          },
        });
      },
      onSendSuccess: function (t) {
        if (t.job_application_ids) {
          var e = t.job_application_ids;
          c("input.check-present-candidate[type=checkbox]").each(function () {
            var t = c(this).data("application-id");
            0 <= c.inArray(t, e) &&
              c(this)
                .parent()
                .find('select[data-action="change-select"]')
                .val("sent_for_review")
                .change();
          });
        }
        c("input.check-present-candidate[type=checkbox]").prop("checked", !1),
          c(".close", this.$modal).click();
      },
      onSendError: function (t) {
        if (t.responseJSON) {
          var e = t.responseJSON.errors;
          if (e) {
            var n = this.$modal,
              i = !1;
            for (var r in e) {
              var o = r.replace(/_/g, "-");
              c("#form-present-" + o, n).addClass("has-errors"), (i = !0);
            }
            i || alert("General error occured, please try again later");
          }
        }
      },
      prepareTemplates: function () {
        (f.GREETING = this.loadTemplate("greeting")),
          (f.SIGNATURE = this.loadTemplate("signature")),
          (f.JOB = this.loadTemplate("job")),
          (f.USER = this.loadTemplate("user")),
          (f.SKILL_MAIN = this.loadTemplate("skill-main")),
          (f.SKILL_OTHER = this.loadTemplate("skill-other")),
          (f.BODY = this.loadTemplate("body")),
          (f.BODY = f.BODY.replace(/{+GREETING}+/, f.GREETING)),
          (f.BODY = f.BODY.replace(/{+SIGNATURE}+/, f.SIGNATURE)),
          (f.BODY = this.wrapWithSpan(
            f.BODY,
            "{COMPANY_MANAGER}",
            "company-manager"
          )),
          (f.SUBJECT = this.replaceLabels(f.SUBJECT_BASE)),
          (f.SUBJECT = this.wrapWithSpan(
            f.SUBJECT,
            "{COMPANY_MANAGER}",
            "company-manager"
          ));
      },
      loadTemplate: function (t) {
        var e = this.currentLanguage(),
          n = "template-form-present-" + t,
          i = c("#" + ("en" != e ? n + "-" + e : n));
        return i.length || (i = c("#" + n)), this.replaceLabels(i.html());
      },
      updateButtonState: function () {
        var t = this.selectedApplications().length;
        c(".btn-present-candidates").prop("disabled", 0 == t);
      },
      selectedApplications: function () {
        var t = c(".check-present-candidate:checked").map(function () {
          return {
            application_id: c(this).data("application-id"),
            user_id: c(this).data("user-id"),
          };
        });
        return c.makeArray(t);
      },
      onButtonClick: function () {
        this.$modal.modal({ show: !0 });
      },
      setSubjectInitial: function (t) {
        this.editorSubject.setValue(t);
        var e = c("#form-present-manager-name", this.$modal).val();
        e && this.updateInEditor(this.editorSubject, "company-manager", e);
      },
      setBodyInitial: function (t) {
        this.editor.setValue(t);
        var e = c("#form-present-manager-name", this.$modal).val();
        e && this.updateInEditor(this.editor, "company-manager", e);
        var n = c("form", this.$modal),
          i = c('select[name="present[sender]"]', n).val();
        this.updateFromSignature(i);
      },
      weekLabel: function () {
        var t = new Date(),
          e = t.getDay() || 7;
        t.setHours(-24 * (e - 1));
        var n = t.getDate(),
          i = t.getFullYear();
        return n + "-" + (1 + t.getMonth()) + "-" + i;
      },
      onModalOpen: function () {
        var n = this,
          t = c("form", this.$modal),
          e = this.replaceVariables(f.SUBJECT, { company: h });
        (e = e.replace(/{+WEEK}+/g, this.weekLabel())),
          this.editorSubjectReady
            ? (this.setSubjectInitial(e), this.setInitialFocusDelayed())
            : (this.initialSubject = e);
        var i = c(this.selectedApplications()).map(function () {
            return this.application_id;
          }),
          r = { company_id: h.id, ids: c.makeArray(i).join(",") };
        c.get(d.job_applications, r, function (t) {
          n.populateFormFor(t), (o.jobApplications = t);
        }),
          this.editor ||
            ((this.editor = new wysihtml.Editor("form-present-body", {
              toolbar: "editor-toolbar",
              parserRules: this.editorParserRules(),
            })),
            this.editor.on("load", function () {
              (n.editorReady = !0),
                n.initialBody &&
                  (n.setBodyInitial(n.initialBody),
                  delete n.initialBody,
                  n.initEditorEvents(),
                  n.setInitialFocus());
            })),
          this.editorSubject ||
            ((this.editorSubject = new wysihtml.Editor("form-present-subject", {
              parserRules: this.editorParserRules(),
            })),
            this.editorSubject.on("load", function () {
              (n.editorSubjectReady = !0),
                n.initialSubject &&
                  (n.setSubjectInitial(n.initialSubject),
                  delete n.initialSubject,
                  n.setInitialFocus());
            })),
          c("#form-present-manager-name", t).on("keyup", function () {
            n.updateManagerName(this.value);
          }),
          c('select[name="present[sender]"]', t).on("change", function () {
            n.updateFromSignature(c(this).val());
          }),
          c("a.link-editor-add-skill", t).on("click", function () {
            var t = { name: "New Skill", weight: 1, technical: !0 },
              e = n.renderSkill(t, [t.name]);
            return n.editor.composer.commands.exec("insertHTML", e), !1;
          }),
          c("a.link-editor-insert-job-name", t).on("click", function () {
            var t = n.editor.composer.selection.getPlainText();
            t || (t = "...");
            var e =
              '<span style="font-weight:bold;font-size:20px;">' + t + "</span>";
            return n.editor.composer.commands.exec("insertHTML", e), !1;
          }),
          c("a.link-editor-insert-candidate-name", t).on("click", function () {
            var t = n.editor.composer.selection.getPlainText();
            t || (t = "...");
            var e =
              '<span style="font-weight:bold;font-size:16px;">' + t + "</span>";
            return n.editor.composer.commands.exec("insertHTML", e), !1;
          }),
          c("a.link-editor-undo", t).on("click", function () {
            return n.editor.composer.commands.exec("undo"), !1;
          }),
          c("a.link-editor-redo", t).on("click", function () {
            return n.editor.composer.commands.exec("redo"), !1;
          }),
          c('select[name="lang"]', t).on("change", function () {
            n.languageChanged();
          }),
          c('input[name="relevant_only"]', t).on("click", function () {
            n.relevantSkillsChanged();
          });
      },
      updateFromSignature: function (t) {
        signatures = { marc: "Marc Mongui\xf3", anna: "Anna Kurto" };
        var e = signatures[t];
        this.updateInEditor(this.editor, "from-signature", e);
      },
      updateManagerName: function (t) {
        (t = t || "MANAGER_NAME"),
          this.updateInEditor(this.editor, "company-manager", t),
          this.updateInEditor(this.editorSubject, "company-manager", t);
      },
      updateInEditor: function (t, e, n) {
        if (t) {
          var i = t.getValue(),
            r = c("<div/>");
          r.html(i), c("span." + e, r).text(n), t.setValue(r.html());
        }
      },
      onModalClose: function () {
        this.resetForm(),
          c("#form-present-manager-name", this.$modal).off("keyup"),
          c("a.link-editor-add-skill", this.$modal).off("click"),
          c("a.link-editor-undo", this.$modal).off("click"),
          c("a.link-editor-redo", this.$modal).off("click"),
          c('select[name="lang"]', this.$modal).off("change");
      },
      resetForm: function () {
        var t = c("form", this.$modal);
        c("#form-present-manager-name", t).val(""),
          c("#form-present-manager-email", t).val(""),
          this.editor && this.editor.setValue(""),
          this.editorSubject && this.editorSubject.setValue("");
      },
      wrapWithSpan: function (t, e, n) {
        return t.replace(e, '<span class="' + n + '">' + e + "</span>");
      },
      initEditorEvents: function () {
        c(this.editor.currentView.editableArea)
          .contents()
          .find("body")
          .on("click", "a.skill-remove", function () {
            return c(this).parent().remove(), !1;
          });
      },
      setInitialFocus: function () {
        c("#form-present-manager-name", this.$modal).focus(),
          c("#form-present-manager-name", this.$modal).focus();
      },
      setInitialFocusDelayed: function () {
        var t = c("#form-present-manager-name", this.$modal);
        setTimeout(function () {
          t.is(":focus") || t.focus();
        }, 250);
      },
      selectedJobsAndCandidates: function () {
        var r = {};
        return (
          c(".check-present-candidate:checked").each(function () {
            var t = c(this).data("user-id"),
              e = c(this).closest("tr").find("a.link-offer-name"),
              n = e.data("offer-id"),
              i = e.text();
            (r[n] = r[n] || { title: i, user_ids: {} }), (r[n].user_ids[t] = 1);
          }),
          r
        );
      },
      populateFormFor: function (t) {
        var e = this.buildContentFor(t);
        this.editorReady
          ? (this.setBodyInitial(e),
            this.initEditorEvents(),
            this.setInitialFocusDelayed())
          : (this.initialBody = e);
      },
      renderSkills: function (t, e) {
        var n = "",
          i = c("input[name=relevant_only]", this.$modal).prop("checked");
        for (var r in t)
          if (t[r].technical) {
            var o = t[r];
            (!(e && 0 <= e.indexOf(o.name)) && i) ||
              (n += this.renderSkill(o, e));
          }
        return n;
      },
      renderSkill: function (t, e) {
        var n = e && 0 <= e.indexOf(t.name) ? f.SKILL_MAIN : f.SKILL_OTHER,
          i = t.name.replace(/\s+/, "&nbsp;");
        return n.replace(/{+name}+/g, i).replace(/{+weight}+/g, t.weight);
      },
      buildContentFor: function (t) {
        var e = this;
        jobs = this.selectedJobsAndCandidates();
        var n = "";
        for (var i in jobs) {
          var r = jobs[i],
            o = "";
          for (var a in t) {
            var s = t[a],
              l = s.offer.tags,
              u = s.user;
            if (r.user_ids[u.id]) {
              u.skillsHTML = this.renderSkills(u.skills, l);
              var c = e.replaceVariables(f.USER, u);
              o += c = c.replace(/{+application_id}+/g, s.id);
            }
          }
          n += f.JOB.replace(/{+title}+/g, r.title).replace(
            /{+usersHTML}+/g,
            o
          );
        }
        var d = { company: h, jobsHTML: n };
        return this.replaceVariables(f.BODY, d);
      },
      currentLanguage: function () {
        return c('select[name="lang"]', this.$modal).val();
      },
      relevantSkillsChanged: function () {
        this.prepareTemplates();
        var t = this.buildContentFor(o.jobApplications);
        this.setBodyInitial(t);
      },
      languageChanged: function () {
        this.prepareTemplates();
        var t = this.buildContentFor(o.jobApplications);
        this.setBodyInitial(t);
        var e = this.replaceVariables(f.SUBJECT, { company: h });
        (e = e.replace(/{+WEEK}+/g, this.weekLabel())),
          this.setSubjectInitial(e);
      },
      replaceLabels: function (t) {
        var e = this.currentLanguage(),
          i = this.lang[e],
          r = this.lang.en;
        return t.replace(/{+LABEL_([A-Z_]+)}+/g, function (t, e) {
          var n = e.toLowerCase();
          return n in i ? i[n] : r[n];
        });
      },
      replaceVariables: function (t, e) {
        var n = e.company ? e.company.manager_name : "";
        return (
          (n = n || "MANAGER_NAME"),
          (t = t.replace(/{+COMPANY_MANAGER}+/g, n)),
          e.company && (t = t.replace(/{+COMPANY_NAME}+/g, e.company.name)),
          (t = (t = (t = (t = (t = t.replace(/{+name}+/g, e.name)).replace(
            /{+url}+/g,
            e.url
          )).replace(/{+skillsHTML}+/g, e.skillsHTML)).replace(
            /{+jobsHTML}+/g,
            e.jobsHTML
          )).replace(/{+usersHTML}+/g, e.usersHTML))
        );
      },
      editorParserRules: function () {
        var t = wysihtmlParserRules;
        return (
          (t.attributes = t.attributes || {}),
          (t.attributes.style = t.attributes.style || "any"),
          (t.attributes.id = t.attributes.id || "any"),
          delete t.tags.div.one_of_type,
          delete t.tags.span.one_of_type,
          t
        );
      },
    };
  })(jobsBCN, window, document, $),
  (jobsBCN.News = (function () {
    function t(t) {
      $(t.currentTarget);
      ga("send", "event", "button", "go-to-meetup", "true");
    }
    function e(t) {
      $(t.currentTarget);
      ga("send", "event", "button", "go-to-meetup", "false");
    }
    function n() {
      o.modal({ show: !0 }), Cookies.set(a, 1);
    }
    function i() {
      $(".yes-button").on("click", t), $(".no-button").on("click", e);
    }
    function r() {
      (a = "newsShown4"),
        (o = $("#news-modal")),
        i(),
        Cookies.get(a) || setTimeout(n, 1e4);
    }
    var o,
      a = "";
    $("#cookies");
    return { init: r };
  })()),
  (jobsBCN.OfferDetails = (function () {
    function t(t) {
      var e = $(t.target).parents(".offer-details-apply");
      e.find(".offer-details-apply-btn").hide(),
        e.find(".offer-details-apply-msg").slideDown("fast").show();
    }
    function e(t) {
      var e = $(t.target).parents(".offer-details-apply");
      e.find(".offer-details-apply-msg").slideUp("fast", function () {
        e.find(".offer-details-apply-btn").show();
      });
    }
    function n() {
      $.get(g, function (t) {
        10 < t.length && $("#flash-container").html(t).scrollTop();
      });
    }
    function i() {
      h("autoapply-check");
    }
    function r(t) {
      t.preventDefault(),
        $.post(t.currentTarget.href),
        v.html("Thank you! :)"),
        h("report-filled"),
        setTimeout(function () {
          v.slideUp();
        }, 3e3);
    }
    function o() {
      h("contact-hosted-offer");
    }
    function a() {
      h("share-" + $(this).data("share"));
    }
    function s(t) {
      t.preventDefault(),
        $(t.target).parents(".offer-description").addClass("open");
    }
    function l() {
      h("offer-description");
    }
    function u() {
      var t = $(this),
        e = t.parents("[data-comply-group]").find("[data-comply-check]");
      if (e.length && !e[0].checked)
        return alert(b), h("apply-without-checking-terms"), !1;
      var n = t.data("url"),
        i = "1" == t.data("external");
      n && (i ? window.open(n) : (location.href = n)), i && c(t);
    }
    function c(t) {
      var e = t.data("track");
      v.slideDown(), h(e);
    }
    function d(t) {
      t.preventDefault(),
        h("job-application-undo"),
        $.post(t.target.href),
        (location.href = location.href.replace("#!", ""));
    }
    function f() {
      h(y ? "visit_engineering_offer" : "visit_non_engineering_offer", !0, !0);
    }
    function h(t, e, n) {
      var i = { trackHeap: e };
      n && (i.gaNonInteraction = !0), jobsBCN.track(t, w, i);
    }
    function p() {
      $('form.new_job_application[target="_blank"]').on("submit", n),
        $("[data-comply]").on("click", u),
        $(".apply-with-message").on("click", t),
        $(".apply-with-message-close").on("click", e),
        $('[name="job_application[autoapply]"]').on("change", i),
        $("#contact-offer").on("click", o),
        $('[data-click="more-desc"]').on("click", l),
        $('[data-click="offer-description-open"]').on("click", s),
        $(".social-share").on("click", "a", a),
        $(".job-subscription-undo").on("click", d),
        v.on("click", "a", r),
        jobsBCN.tooltip();
    }
    function m(t, e, n, i, r) {
      (w = t),
        (g = e),
        n,
        (y = i),
        (b = r),
        (v = $(".not-available")),
        f(),
        p();
    }
    var g,
      v,
      y,
      b,
      w = 0;
    return { init: m };
  })()),
  (jobsBCN.OfferPage = (function () {
    function t(t, e) {
      e = e || "";
      var n = $(t.target);
      if (
        !(
          n.hasClass("feature-icon") ||
          n.hasClass("glyphicon") ||
          n.hasClass("label") ||
          n.hasClass("tell-a-friend") ||
          n.hasClass("tell-a-friend-reward")
        )
      ) {
        var i = $(t.currentTarget);
        if (t.ctrlKey || t.shiftKey || t.metaKey || 2 == t.which)
          window.open(i.data("url") + e).focus();
        else document.location.href = i.data("url") + e;
      }
      o("related-offer");
    }
    function e(t) {
      jobsBCN.track("contribute-company", $(t.currentTarget).data("company"));
    }
    function n(t) {
      i(t.target.value),
        $.post("/users/autoapply", { autoapply: t.target.value }),
        jobsBCN.track("user-autoapply", l);
    }
    function i(t) {
      var e = $("#user-autoapply-work-permit");
      "true" === t ? e.fadeIn() : e.hide();
    }
    function r(t) {
      $.post("/users/permit", { eligible: t.target.value }),
        jobsBCN.track("user-work-permit", l);
    }
    function o(t) {
      jobsBCN.track(t, u);
    }
    function a() {
      $("#contribute").on("click", e),
        $("#related-offers-list").on("click", ".offer", t),
        $(document).on("click", '#user-autoapply input[type="radio"]', n),
        $(document).on(
          "click",
          '#user-work-eligibility input[type="radio"]',
          r
        );
    }
    function s(t, e) {
      (u = t), (l = e), jobsBCN.tooltip(), a();
    }
    var l,
      u = 0;
    return { init: s };
  })()),
  (jobsBCN.OfferPills = (function () {
    function t(t) {
      jobsBCN.track("category-filter", $(t.currentTarget).text().trim());
    }
    function e(t) {
      jobsBCN.track("tag-filter", $(t.currentTarget).text().trim());
    }
    function n(t) {
      jobsBCN.track("industry-filter", $(t.currentTarget).text().trim());
    }
    function i(t, e) {
      (e = $(e)),
        jobsBCN.track("techleaks", [e.data("name"), e.data("page")].join("|"));
    }
    function r() {
      $(document)
        .on("click", ".label-category", t)
        .on("click", ".label-industry", n)
        .on("click", ".label-skill", e)
        .on("click", '[data-action="offer-reviews-link"]', function (t) {
          i(t, this);
        });
    }
    function o() {
      r();
    }
    return { init: o };
  })()),
  (jobsBCN.OfferSearch = (function () {
    function e(t) {
      if ("A" !== t.target.tagName) {
        var e = i(t);
        e &&
          (t.ctrlKey || t.shiftKey || t.metaKey ? r(e) : (location.href = e));
      }
    }
    function n(t) {
      if (2 == t.which && "A" != t.target.tagName) {
        var e = i(t);
        e && r(e);
      }
    }
    function r(t) {
      window.open(t).focus();
    }
    function i(t) {
      var e = $(t.target);
      if (!o(t, e) && a(e)) return $(t.currentTarget).data("url");
    }
    function o(t, e) {
      var n = e.hasClass("ad") ? e : e.parents(".ad");
      if (n.length) {
        t.preventDefault();
        var i = n.data("destination");
        return jobsBCN.track("ad-clicked", n.data("id")), r(i), !0;
      }
      return !1;
    }
    function a(t) {
      for (
        var e = [
            "feature-icon",
            "glyphicon",
            "label",
            "tell-a-friend",
            "tell-a-friend-reward",
          ],
          n = e.length,
          i = 0;
        i < n;
        i++
      )
        if (t.hasClass(e[i])) return !1;
      return !0;
    }
    function s() {
      var t = [l];
      u.length && t.push(u),
        jobsBCN.track("visit_job_listing", t.join(" - "), {
          gaNonInteraction: !0,
        });
    }
    function t(t) {
      t.initPage,
        (l = t.city),
        (u = t.query),
        s(),
        jobsBCN.tooltip(),
        $("#inf-scr-container")
          .on("mousedown", ".offer", n)
          .on("click", ".offer", e);
    }
    var l, u;
    return { init: t };
  })()),
  (jobsBCN.SalaryCalculator = function (t) {
    var e = this;
    (this._form = $("#salary-search-form")),
      this._form.on("click", ".close", function (t) {
        e._hideTag(t, this);
      }),
      this._setTags(t),
      this._setAutocomplete(),
      $('a[data-action="goto-offer"]').on("click", function (t) {
        e._onOfferClick(t, this);
      }),
      $('a[data-action="tag-select"]').on("click", function (t) {
        e._onTagClick(t, this);
      });
  }),
  (jobsBCN.SalaryCalculator.prototype = {
    _hideTag: function (t, e) {
      t.preventDefault(),
        $(e).parent().remove(),
        this._form.removeClass("has-tag-true");
    },
    _changeHistory: function (t) {
      history.pushState(null, null, t);
    },
    _setTags: function (t) {
      this._tags = $.map(t, function (t) {
        return { value: t[0], label: t[1] };
      });
    },
    _setAutocomplete: function () {
      (this._text = $("#salary-search-text")),
        this._text.autocomplete({
          source: this._tags,
          appendTo: "#salary-search-ac-cont",
          focus: $.proxy(this, "_focus"),
          select: $.proxy(this, "_select"),
        });
    },
    _focus: function (t, e) {
      t.preventDefault(), this._text.val(e.item.label);
    },
    _select: function (t, e) {
      t.preventDefault(), (location.href = "/" + e.item.value);
    },
    _tagBadge: function (t) {
      return (
        '<span class="badge badge-lg">' +
        t.label +
        '<a class="close m-l-5" href="/salaries">&times;</a></span>'
      );
    },
    _onOfferClick: function (t, e) {
      ga("send", "event", "button", "goto-offer", $(e).data("offer"));
    },
    _onTagClick: function (t, e) {
      hj("tagRecording", ["tag-select-" + $(e).data("tag")]);
    },
  }),
  (jobsBCN.Search = function (t) {
    (this._url = t.url),
      (this._logPath = t.logPath),
      (this._term = ""),
      (this._form = $("#search-form")),
      (this._searchText = $("#search-query")),
      (this._location = $("#search-location-text")),
      (this._locationMenu = $("#search-location-menu")),
      (this._logSearchDebounced = _.debounce(this._logSearch, 2e3)),
      t.placeholder && this._searchText.prop("placeholder", t.placeholder),
      this._bind();
  }),
  (jobsBCN.Search.prototype = {
    _search: function () {
      var t = this._parseTerm();
      if (t !== this._term) {
        this._term = t;
        var e = this._parseParams(),
          n = $.extend({}, e, { replace: !0 });
        $.getScript(jobsBCN.createPath(n, this._url)),
          this._updateLocation(jobsBCN.createPath(e, this._url)),
          this._term.length && this._logSearchDebounced(this._term),
          $("#search-sort-term").val(this._term);
      }
    },
    _parseParams: function () {
      var t = $.extend({}, jobsBCN.requestParams());
      return (
        delete t.page,
        delete t.result,
        this._term.length && (t.q = this._term),
        t.q && !t.q.length && delete t.q,
        t
      );
    },
    _updateLocation: function (t) {
      location.pathname.indexOf(this._url) < 0
        ? (location.href = t)
        : history.pushState(null, null, t);
    },
    _parseTerm: function () {
      return $.trim(this._searchText.val());
    },
    _submit: function (t) {
      t.preventDefault(), this._searchFunc.cancel();
      var e = jobsBCN.requestParams(),
        n = this._parseTerm();
      delete e.page,
        n.length ? (e.q = n) : delete e.q,
        (location.href = jobsBCN.createPath(e, this._url));
    },
    _changeLocation: function (t) {
      t.preventDefault();
      var e = this._location.data("location"),
        n = $(t.target).data("location"),
        i = (
          -1 < location.pathname.indexOf(this._url)
            ? location.pathname
            : this._url
        ).replace(e, n),
        r = jobsBCN.requestParams();
      delete r.page,
        delete r.result,
        (location.href = jobsBCN.createPath(r, i));
    },
    _logSearch: function (t) {
      t !== this._lastSearchSent &&
        ($.ajax({
          method: "post",
          url: this._logPath,
          dataType: "json",
          data: { q: t },
        }),
        (this._lastSearchSent = t));
    },
    _bind: function () {
      var t = this;
      this._form.on("submit", $.proxy(this, "_submit")),
        (this._searchFunc = jobsBCN.debounce(function () {
          t._search();
        }, 300)),
        this._searchText.on("keyup", this._searchFunc),
        this._locationMenu.on("click", "a", $.proxy(this, "_changeLocation"));
    },
  }),
  (jobsBCN.Search.start = function (t) {
    (jobsBCN.search = new jobsBCN.Search(t)),
      (jobsBCN.scroll = new jobsBCN.InfiniteScroll(t));
  }),
  (jobsBCN.SearchSubscribe = (function () {
    function n(t) {
      var e = t.find('[name="email"]').val(),
        n = s.val(),
        i = t.find("button[type=submit]").attr("disabled", "disabled"),
        r = t.data("placement"),
        o = "register";
      r.length && (o += "-" + r),
        $.ajax({
          method: "post",
          url: u,
          data: { email: e, search_query: n },
          dataType: "json",
        }).done(function () {
          a(t, i);
        }),
        jobsBCN.track(o, e + " " + n);
    }
    function a(t, e) {
      e.removeAttr("disabled"), t.parents(c).addClass("subscribed");
    }
    function t(t) {
      t.preventDefault();
      var e = $(this);
      e.parsley().validate() && n(e);
    }
    function e() {
      $(document)
        .on("submit", ".subscribe-form", t)
        .on("click", c + " .close", r);
    }
    function i(t) {
      (u = t), (s = $("#search-query")), (l = $(".query-placeholder")), e();
    }
    function r() {
      $(this).parents(c).slideUp();
    }
    function o() {
      var t = $(c).removeClass("subscribed");
      t.find("[disabled]").removeAttr("disabled"),
        l.html(s.val()),
        t.slideDown();
    }
    var s,
      l,
      u,
      c = ".subscribe-msg";
    return { init: i, showSubscription: o, hideSubscription: r };
  })()),
  (jobsBCN.sideMenu = function () {
    var t = $("#side-menu"),
      e = new Slideout({
        panel: document.getElementById("main-content"),
        menu: t[0],
        padding: 256,
        tolerance: 70,
        side: "right",
      });
    $("#side-menu-toggle").on("click", function () {
      $(this).toggleClass("open"), e.toggle();
    });
  });
