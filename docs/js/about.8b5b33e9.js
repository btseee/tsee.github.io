"use strict";
(self["webpackChunkbtseee_github_io"] =
  self["webpackChunkbtseee_github_io"] || []).push([
  [443],
  {
    6077: function (t, e, r) {
      var n = r(614),
        o = String,
        i = TypeError;
      t.exports = function (t) {
        if ("object" == typeof t || n(t)) return t;
        throw new i("Can't set " + o(t) + " as a prototype");
      };
    },
    5787: function (t, e, r) {
      var n = r(7976),
        o = TypeError;
      t.exports = function (t, e) {
        if (n(e, t)) return t;
        throw new o("Incorrect invocation");
      };
    },
    3013: function (t) {
      t.exports =
        "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    },
    260: function (t, e, r) {
      var n,
        o,
        i,
        s = r(3013),
        a = r(9781),
        c = r(7854),
        u = r(614),
        l = r(111),
        f = r(2597),
        d = r(648),
        p = r(6330),
        h = r(8880),
        m = r(8052),
        y = r(7045),
        g = r(7976),
        b = r(9518),
        A = r(7674),
        w = r(5112),
        E = r(9711),
        v = r(9909),
        R = v.enforce,
        O = v.get,
        S = c.Int8Array,
        T = S && S.prototype,
        x = c.Uint8ClampedArray,
        _ = x && x.prototype,
        C = S && b(S),
        N = T && b(T),
        D = Object.prototype,
        j = c.TypeError,
        P = w("toStringTag"),
        U = E("TYPED_ARRAY_TAG"),
        k = "TypedArrayConstructor",
        F = s && !!A && "Opera" !== d(c.opera),
        I = !1,
        L = {
          Int8Array: 1,
          Uint8Array: 1,
          Uint8ClampedArray: 1,
          Int16Array: 2,
          Uint16Array: 2,
          Int32Array: 4,
          Uint32Array: 4,
          Float32Array: 4,
          Float64Array: 8,
        },
        B = { BigInt64Array: 8, BigUint64Array: 8 },
        M = function (t) {
          if (!l(t)) return !1;
          var e = d(t);
          return "DataView" === e || f(L, e) || f(B, e);
        },
        z = function (t) {
          var e = b(t);
          if (l(e)) {
            var r = O(e);
            return r && f(r, k) ? r[k] : z(e);
          }
        },
        q = function (t) {
          if (!l(t)) return !1;
          var e = d(t);
          return f(L, e) || f(B, e);
        },
        H = function (t) {
          if (q(t)) return t;
          throw new j("Target is not a typed array");
        },
        V = function (t) {
          if (u(t) && (!A || g(C, t))) return t;
          throw new j(p(t) + " is not a typed array constructor");
        },
        W = function (t, e, r, n) {
          if (a) {
            if (r)
              for (var o in L) {
                var i = c[o];
                if (i && f(i.prototype, t))
                  try {
                    delete i.prototype[t];
                  } catch (s) {
                    try {
                      i.prototype[t] = e;
                    } catch (u) {}
                  }
              }
            (N[t] && !r) || m(N, t, r ? e : (F && T[t]) || e, n);
          }
        },
        J = function (t, e, r) {
          var n, o;
          if (a) {
            if (A) {
              if (r)
                for (n in L)
                  if (((o = c[n]), o && f(o, t)))
                    try {
                      delete o[t];
                    } catch (i) {}
              if (C[t] && !r) return;
              try {
                return m(C, t, r ? e : (F && C[t]) || e);
              } catch (i) {}
            }
            for (n in L) (o = c[n]), !o || (o[t] && !r) || m(o, t, e);
          }
        };
      for (n in L)
        (o = c[n]), (i = o && o.prototype), i ? (R(i)[k] = o) : (F = !1);
      for (n in B) (o = c[n]), (i = o && o.prototype), i && (R(i)[k] = o);
      if (
        (!F || !u(C) || C === Function.prototype) &&
        ((C = function () {
          throw new j("Incorrect invocation");
        }),
        F)
      )
        for (n in L) c[n] && A(c[n], C);
      if ((!F || !N || N === D) && ((N = C.prototype), F))
        for (n in L) c[n] && A(c[n].prototype, N);
      if ((F && b(_) !== N && A(_, N), a && !f(N, P)))
        for (n in ((I = !0),
        y(N, P, {
          configurable: !0,
          get: function () {
            return l(this) ? this[U] : void 0;
          },
        }),
        L))
          c[n] && h(c[n], U, n);
      t.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: F,
        TYPED_ARRAY_TAG: I && U,
        aTypedArray: H,
        aTypedArrayConstructor: V,
        exportTypedArrayMethod: W,
        exportTypedArrayStaticMethod: J,
        getTypedArrayConstructor: z,
        isView: M,
        isTypedArray: q,
        TypedArray: C,
        TypedArrayPrototype: N,
      };
    },
    7745: function (t, e, r) {
      var n = r(6244);
      t.exports = function (t, e) {
        var r = 0,
          o = n(e),
          i = new t(o);
        while (o > r) i[r] = e[r++];
        return i;
      };
    },
    1843: function (t, e, r) {
      var n = r(6244);
      t.exports = function (t, e) {
        for (var r = n(t), o = new e(r), i = 0; i < r; i++) o[i] = t[r - i - 1];
        return o;
      };
    },
    1572: function (t, e, r) {
      var n = r(6244),
        o = r(9303),
        i = RangeError;
      t.exports = function (t, e, r, s) {
        var a = n(t),
          c = o(r),
          u = c < 0 ? a + c : c;
        if (u >= a || u < 0) throw new i("Incorrect index");
        for (var l = new e(a), f = 0; f < a; f++) l[f] = f === u ? s : t[f];
        return l;
      };
    },
    648: function (t, e, r) {
      var n = r(1694),
        o = r(614),
        i = r(4326),
        s = r(5112),
        a = s("toStringTag"),
        c = Object,
        u =
          "Arguments" ===
          i(
            (function () {
              return arguments;
            })(),
          ),
        l = function (t, e) {
          try {
            return t[e];
          } catch (r) {}
        };
      t.exports = n
        ? i
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" == typeof (r = l((e = c(t)), a))
              ? r
              : u
              ? i(e)
              : "Object" === (n = i(e)) && o(e.callee)
              ? "Arguments"
              : n;
          };
    },
    8544: function (t, e, r) {
      var n = r(7293);
      t.exports = !n(function () {
        function t() {}
        return (
          (t.prototype.constructor = null),
          Object.getPrototypeOf(new t()) !== t.prototype
        );
      });
    },
    7045: function (t, e, r) {
      var n = r(6339),
        o = r(3070);
      t.exports = function (t, e, r) {
        return (
          r.get && n(r.get, e, { getter: !0 }),
          r.set && n(r.set, e, { setter: !0 }),
          o.f(t, e, r)
        );
      };
    },
    3678: function (t) {
      t.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1,
        },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1,
        },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
      };
    },
    1060: function (t, e, r) {
      var n = r(1702),
        o = Error,
        i = n("".replace),
        s = (function (t) {
          return String(new o(t).stack);
        })("zxcasd"),
        a = /\n\s*at [^:]*:[^\n]*/,
        c = a.test(s);
      t.exports = function (t, e) {
        if (c && "string" == typeof t && !o.prepareStackTrace)
          while (e--) t = i(t, a, "");
        return t;
      };
    },
    5668: function (t, e, r) {
      var n = r(1702),
        o = r(9662);
      t.exports = function (t, e, r) {
        try {
          return n(o(Object.getOwnPropertyDescriptor(t, e)[r]));
        } catch (i) {}
      };
    },
    9587: function (t, e, r) {
      var n = r(614),
        o = r(111),
        i = r(7674);
      t.exports = function (t, e, r) {
        var s, a;
        return (
          i &&
            n((s = e.constructor)) &&
            s !== r &&
            o((a = s.prototype)) &&
            a !== r.prototype &&
            i(t, a),
          t
        );
      };
    },
    4067: function (t, e, r) {
      var n = r(648);
      t.exports = function (t) {
        var e = n(t);
        return "BigInt64Array" === e || "BigUint64Array" === e;
      };
    },
    6277: function (t, e, r) {
      var n = r(1340);
      t.exports = function (t, e) {
        return void 0 === t ? (arguments.length < 2 ? "" : e) : n(t);
      };
    },
    9518: function (t, e, r) {
      var n = r(2597),
        o = r(614),
        i = r(7908),
        s = r(6200),
        a = r(8544),
        c = s("IE_PROTO"),
        u = Object,
        l = u.prototype;
      t.exports = a
        ? u.getPrototypeOf
        : function (t) {
            var e = i(t);
            if (n(e, c)) return e[c];
            var r = e.constructor;
            return o(r) && e instanceof r
              ? r.prototype
              : e instanceof u
              ? l
              : null;
          };
    },
    7674: function (t, e, r) {
      var n = r(5668),
        o = r(9670),
        i = r(6077);
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                r = {};
              try {
                (t = n(Object.prototype, "__proto__", "set")),
                  t(r, []),
                  (e = r instanceof Array);
              } catch (s) {}
              return function (r, n) {
                return o(r), i(n), e ? t(r, n) : (r.__proto__ = n), r;
              };
            })()
          : void 0);
    },
    4599: function (t, e, r) {
      var n = r(7593),
        o = TypeError;
      t.exports = function (t) {
        var e = n(t, "number");
        if ("number" == typeof e) throw new o("Can't convert number to bigint");
        return BigInt(e);
      };
    },
    1694: function (t, e, r) {
      var n = r(5112),
        o = n("toStringTag"),
        i = {};
      (i[o] = "z"), (t.exports = "[object z]" === String(i));
    },
    1340: function (t, e, r) {
      var n = r(648),
        o = String;
      t.exports = function (t) {
        if ("Symbol" === n(t))
          throw new TypeError("Cannot convert a Symbol value to a string");
        return o(t);
      };
    },
    8053: function (t) {
      var e = TypeError;
      t.exports = function (t, r) {
        if (t < r) throw new e("Not enough arguments");
        return t;
      };
    },
    1439: function (t, e, r) {
      var n = r(1843),
        o = r(260),
        i = o.aTypedArray,
        s = o.exportTypedArrayMethod,
        a = o.getTypedArrayConstructor;
      s("toReversed", function () {
        return n(i(this), a(this));
      });
    },
    7585: function (t, e, r) {
      var n = r(260),
        o = r(1702),
        i = r(9662),
        s = r(7745),
        a = n.aTypedArray,
        c = n.getTypedArrayConstructor,
        u = n.exportTypedArrayMethod,
        l = o(n.TypedArrayPrototype.sort);
      u("toSorted", function (t) {
        void 0 !== t && i(t);
        var e = a(this),
          r = s(c(e), e);
        return l(r, t);
      });
    },
    5315: function (t, e, r) {
      var n = r(1572),
        o = r(260),
        i = r(4067),
        s = r(9303),
        a = r(4599),
        c = o.aTypedArray,
        u = o.getTypedArrayConstructor,
        l = o.exportTypedArrayMethod,
        f = !!(function () {
          try {
            new Int8Array(1)["with"](2, {
              valueOf: function () {
                throw 8;
              },
            });
          } catch (t) {
            return 8 === t;
          }
        })();
      l(
        "with",
        {
          with: function (t, e) {
            var r = c(this),
              o = s(t),
              l = i(r) ? a(e) : +e;
            return n(r, u(r), o, l);
          },
        }["with"],
        !f,
      );
    },
    2801: function (t, e, r) {
      var n = r(2109),
        o = r(7854),
        i = r(5005),
        s = r(9114),
        a = r(3070).f,
        c = r(2597),
        u = r(5787),
        l = r(9587),
        f = r(6277),
        d = r(3678),
        p = r(1060),
        h = r(9781),
        m = r(1913),
        y = "DOMException",
        g = i("Error"),
        b = i(y),
        A = function () {
          u(this, w);
          var t = arguments.length,
            e = f(t < 1 ? void 0 : arguments[0]),
            r = f(t < 2 ? void 0 : arguments[1], "Error"),
            n = new b(e, r),
            o = new g(e);
          return (
            (o.name = y), a(n, "stack", s(1, p(o.stack, 1))), l(n, this, A), n
          );
        },
        w = (A.prototype = b.prototype),
        E = "stack" in new g(y),
        v = "stack" in new b(1, 2),
        R = b && h && Object.getOwnPropertyDescriptor(o, y),
        O = !!R && !(R.writable && R.configurable),
        S = E && !O && !v;
      n(
        { global: !0, constructor: !0, forced: m || S },
        { DOMException: S ? A : b },
      );
      var T = i(y),
        x = T.prototype;
      if (x.constructor !== T)
        for (var _ in (m || a(x, "constructor", s(1, T)), d))
          if (c(d, _)) {
            var C = d[_],
              N = C.s;
            c(T, N) || a(T, N, s(6, C.c));
          }
    },
    6229: function (t, e, r) {
      var n = r(8052),
        o = r(1702),
        i = r(1340),
        s = r(8053),
        a = URLSearchParams,
        c = a.prototype,
        u = o(c.append),
        l = o(c["delete"]),
        f = o(c.forEach),
        d = o([].push),
        p = new a("a=1&a=2&b=3");
      p["delete"]("a", 1),
        p["delete"]("b", void 0),
        p + "" !== "a=2" &&
          n(
            c,
            "delete",
            function (t) {
              var e = arguments.length,
                r = e < 2 ? void 0 : arguments[1];
              if (e && void 0 === r) return l(this, t);
              var n = [];
              f(this, function (t, e) {
                d(n, { key: e, value: t });
              }),
                s(e, 1);
              var o,
                a = i(t),
                c = i(r),
                p = 0,
                h = 0,
                m = !1,
                y = n.length;
              while (p < y)
                (o = n[p++]),
                  m || o.key === a ? ((m = !0), l(this, o.key)) : h++;
              while (h < y)
                (o = n[h++]),
                  (o.key === a && o.value === c) || u(this, o.key, o.value);
            },
            { enumerable: !0, unsafe: !0 },
          );
    },
    7330: function (t, e, r) {
      var n = r(8052),
        o = r(1702),
        i = r(1340),
        s = r(8053),
        a = URLSearchParams,
        c = a.prototype,
        u = o(c.getAll),
        l = o(c.has),
        f = new a("a=1");
      (!f.has("a", 2) && f.has("a", void 0)) ||
        n(
          c,
          "has",
          function (t) {
            var e = arguments.length,
              r = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === r) return l(this, t);
            var n = u(this, t);
            s(e, 1);
            var o = i(r),
              a = 0;
            while (a < n.length) if (n[a++] === o) return !0;
            return !1;
          },
          { enumerable: !0, unsafe: !0 },
        );
    },
    2062: function (t, e, r) {
      var n = r(9781),
        o = r(1702),
        i = r(7045),
        s = URLSearchParams.prototype,
        a = o(s.forEach);
      n &&
        !("size" in s) &&
        i(s, "size", {
          get: function () {
            var t = 0;
            return (
              a(this, function () {
                t++;
              }),
              t
            );
          },
          configurable: !0,
          enumerable: !0,
        });
    },
    9187: function (t, e, r) {
      r.r(e),
        r.d(e, {
          default: function () {
            return jr;
          },
        });
      var n = r(3396);
      const o = { class: "container mx-auto" },
        i = { class: "container mx-auto" };
      function s(t, e, r, s, a, c) {
        const u = (0, n.up)("AboutMe"),
          l = (0, n.up)("AboutCounter"),
          f = (0, n.up)("AboutClients");
        return (
          (0, n.wg)(),
          (0, n.iD)("div", null, [
            (0, n._)("div", o, [(0, n.Wm)(u)]),
            (0, n.Wm)(l),
            (0, n._)("div", i, [(0, n.Wm)(f)]),
          ])
        );
      }
      var a = r(7139),
        c = r.p + "img/profile.6ca2286c.png";
      const u = { class: "block sm:flex sm:gap-10 mt-10 sm:mt-20" },
        l = (0, n._)(
          "div",
          { class: "w-full sm:w-1/4 mb-7 sm:mb-0" },
          [(0, n._)("img", { src: c, class: "rounded-xl w-96", alt: "" })],
          -1,
        ),
        f = { class: "w-full sm:w-3/4 text-left" };
      function d(t, e, r, o, i, s) {
        return (
          (0, n.wg)(),
          (0, n.iD)("div", u, [
            l,
            (0, n._)("div", f, [
              ((0, n.wg)(!0),
              (0, n.iD)(
                n.HY,
                null,
                (0, n.Ko)(
                  o.bios,
                  (t) => (
                    (0, n.wg)(),
                    (0, n.iD)(
                      "p",
                      {
                        key: t.id,
                        class:
                          "font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg",
                      },
                      (0, a.zw)(t.bio),
                      1,
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      }
      var p = {
          setup() {
            const t = (new Date().getFullYear() - 2020).toString();
            return {
              bios: [
                {
                  id: 1,
                  bio:
                    "Би ШУТИС-ийн программ хангамжийн инженер мэргэжилтэй бөгөөд эл чиглэлээр " +
                    t +
                    " жил ажилласан туршлагатай. Би урам зоригтоо хөтлөгдөн мэдлэгээ өргөжүүлж, төрөл бүрийн технологи, UI дизайнтай ажиллахыг үргэлж хүсдэг. Миний мэдлэгт NodeJS, Typescript, Angular, ReactJS, MongoDB, PostgreSQL, Python багтдаг бөгөөд би шинэ хөгжүүлэгчдэд зөвлөгөө өгөх дуртай.",
                },
                {
                  id: 2,
                  bio: "Ажлаас гадуур би технологийн салбарын шинэ технологи, чиг хандлагыг судлах хүсэл эрмэлзэлтэй байдаг. Би хамгийн сүүлийн үеийн дэвшлийн талаар мэдээлэл авахын тулд технологийн хурал, семинарт оролцох дуртай. Намайг кодчилдоггүй үед та намайг график дизайн, гэрэл зураг гэх мэт бүтээлч эрэл хайгуул хийж байхыг олонтаа олж мэднэ.",
                },
              ],
            };
          },
        },
        h = r(89);
      const m = (0, h.Z)(p, [["render", d]]);
      var y = m;
      const g = {
          class:
            "mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm",
        },
        b = {
          class:
            "font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center",
        },
        A = { class: "mb-20 sm:mb-0" },
        w = {
          class: "block text-md text-ternary-dark dark:text-ternary-light",
        },
        E = { class: "mb-20 sm:mb-0" },
        v = {
          class: "block text-md text-ternary-dark dark:text-ternary-light",
        },
        R = { class: "mb-20 sm:mb-0" },
        O = {
          class: "block text-md text-ternary-dark dark:text-ternary-light",
        };
      function S(t, e, r, o, i, s) {
        const c = (0, n.up)("counter");
        return (
          (0, n.wg)(),
          (0, n.iD)("div", g, [
            (0, n._)("div", b, [
              (0, n._)("div", A, [
                (0, n.Wm)(
                  c,
                  {
                    ref: "counter",
                    startAmount: 0,
                    endAmount: t.year,
                    duration: 1,
                    autoinit: !0,
                    class:
                      "font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",
                    "aria-label": "About Status Counter",
                  },
                  null,
                  8,
                  ["endAmount"],
                ),
                (0, n._)("span", w, (0, a.zw)(t.experienceTitle), 1),
              ]),
              (0, n._)("div", E, [
                (0, n.Wm)(
                  c,
                  {
                    ref: "counter",
                    startAmount: 0,
                    endAmount: t.totalRepoCount,
                    duration: 1,
                    suffix: "+",
                    autoinit: !0,
                    class:
                      "font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",
                  },
                  null,
                  8,
                  ["endAmount"],
                ),
                (0, n._)("span", v, (0, a.zw)(t.githubTitle), 1),
              ]),
              (0, n._)("div", R, [
                (0, n.Wm)(
                  c,
                  {
                    ref: "counter",
                    startAmount: 0,
                    endAmount: 92,
                    duration: 1,
                    suffix: "%",
                    autoinit: !0,
                    class:
                      "font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2",
                  },
                  null,
                  512,
                ),
                (0, n._)("span", O, (0, a.zw)(t.feedbackTitle), 1),
              ]),
            ]),
          ])
        );
      }
      var T = (0, n.aZ)({
        name: "Vue3Autocounter",
        interval: null,
        props: {
          startAmount: { type: Number, default: 0 },
          endAmount: { type: Number, default: 0, required: !0 },
          duration: {
            type: Number,
            default: 3,
            validator(t) {
              return t >= 1;
            },
          },
          autoinit: { type: Boolean, default: !0 },
          prefix: { type: String, default: "" },
          suffix: { type: String, default: "" },
          separator: { type: String, default: "," },
          decimalSeparator: { type: String, default: "." },
          decimals: {
            type: Number,
            default: 0,
            validator(t) {
              return t >= 0;
            },
          },
        },
        data() {
          return {
            timestamp: 0,
            startTimestamp: 0,
            currentAmount: 0,
            currentStartAmount: 0,
            currentDuration: 0,
            paused: !1,
            remaining: 0,
            animationFrame: 0,
          };
        },
        mounted() {
          (this.currentAmount = this.startAmount),
            (this.currentStartAmount = this.startAmount),
            (this.currentDuration = 1e3 * this.duration),
            (this.remaining = 1e3 * this.duration),
            this.autoinit ? this.start() : (this.paused = !0),
            this.$emit("mounted");
        },
        unmounted() {
          this.cancelAnimation();
        },
        watch: {
          startAmount() {
            this.reset();
          },
          endAmount() {
            this.reset();
          },
          duration() {
            this.reset();
          },
        },
        computed: {
          isCountingUp() {
            return this.endAmount > this.startAmount;
          },
          displayedAmount() {
            return `${this.prefix}${this.formatedAmount}${this.suffix}`;
          },
          formatedAmount() {
            const t = /(\d+)(\d{3})/;
            let e = this.currentAmount.toFixed(this.decimals);
            e += "";
            let r = e.split("."),
              n = r[0],
              o = r.length > 1 ? this.decimalSeparator + r[1] : "",
              i = !isNaN(parseFloat(this.separator));
            if (this.separator && !i)
              while (t.test(n)) n = n.replace(t, "$1" + this.separator + "$2");
            return n + o;
          },
        },
        methods: {
          start() {
            this.cancelAnimation(),
              (this.currentStartAmount = this.startAmount),
              (this.startTimestamp = null),
              (this.currentDuration = 1e3 * this.duration),
              (this.paused = !1),
              (this.animationFrame = window.requestAnimationFrame(
                this.counting,
              ));
          },
          pause() {
            this.paused || (this.cancelAnimation(), (this.paused = !0));
          },
          resume() {
            this.paused &&
              ((this.startTimestamp = null),
              (this.currentDuration = +this.remaining),
              (this.currentStartAmount = +this.currentAmount),
              (this.animationFrame = window.requestAnimationFrame(
                this.counting,
              )),
              (this.paused = !1));
          },
          reset() {
            (this.paused = !1),
              (this.startTimestamp = null),
              this.cancelAnimation(),
              (this.currentAmount = this.startAmount),
              this.autoinit ? this.start() : (this.paused = !0);
          },
          counting(t) {
            (this.timestamp = t),
              this.startTimestamp || (this.startTimestamp = t);
            let e = t - this.startTimestamp;
            (this.remaining = this.currentDuration - e),
              this.isCountingUp
                ? ((this.currentAmount =
                    this.currentStartAmount +
                    (this.endAmount - this.currentStartAmount) *
                      (e / this.currentDuration)),
                  (this.currentAmount =
                    this.currentAmount > this.endAmount
                      ? this.endAmount
                      : this.currentAmount))
                : ((this.currentAmount =
                    this.currentStartAmount -
                    (this.currentStartAmount - this.endAmount) *
                      (e / this.currentDuration)),
                  (this.currentAmount =
                    this.currentAmount < this.endAmount
                      ? this.endAmount
                      : this.currentAmount)),
              e < this.currentDuration
                ? (this.animationFrame = window.requestAnimationFrame(
                    this.counting,
                  ))
                : setTimeout(() => {
                    this.$emit("finished");
                  }, 1e3);
          },
          cancelAnimation() {
            this.animationFrame &&
              window.cancelAnimationFrame(this.animationFrame);
          },
        },
      });
      function x(t, e, r, o, i, s) {
        return (
          (0, n.wg)(), (0, n.j4)("span", null, (0, a.zw)(t.displayedAmount), 1)
        );
      }
      T.render = x;
      var _ = (() => {
          const t = T;
          return (
            (t.install = (e) => {
              e.component("Vue3Autocounter", t);
            }),
            t
          );
        })(),
        C = _;
      r(1439), r(7585), r(5315), r(7658);
      function N(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      }
      const { toString: D } = Object.prototype,
        { getPrototypeOf: j } = Object,
        P = ((t) => (e) => {
          const r = D.call(e);
          return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        U = (t) => ((t = t.toLowerCase()), (e) => P(e) === t),
        k = (t) => (e) => typeof e === t,
        { isArray: F } = Array,
        I = k("undefined");
      function L(t) {
        return (
          null !== t &&
          !I(t) &&
          null !== t.constructor &&
          !I(t.constructor) &&
          q(t.constructor.isBuffer) &&
          t.constructor.isBuffer(t)
        );
      }
      const B = U("ArrayBuffer");
      function M(t) {
        let e;
        return (
          (e =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(t)
              : t && t.buffer && B(t.buffer)),
          e
        );
      }
      const z = k("string"),
        q = k("function"),
        H = k("number"),
        V = (t) => null !== t && "object" === typeof t,
        W = (t) => !0 === t || !1 === t,
        J = (t) => {
          if ("object" !== P(t)) return !1;
          const e = j(t);
          return (
            (null === e ||
              e === Object.prototype ||
              null === Object.getPrototypeOf(e)) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
          );
        },
        K = U("Date"),
        $ = U("File"),
        Y = U("Blob"),
        G = U("FileList"),
        Z = (t) => V(t) && q(t.pipe),
        X = (t) => {
          let e;
          return (
            t &&
            (("function" === typeof FormData && t instanceof FormData) ||
              (q(t.append) &&
                ("formdata" === (e = P(t)) ||
                  ("object" === e &&
                    q(t.toString) &&
                    "[object FormData]" === t.toString()))))
          );
        },
        Q = U("URLSearchParams"),
        tt = (t) =>
          t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      function et(t, e, { allOwnKeys: r = !1 } = {}) {
        if (null === t || "undefined" === typeof t) return;
        let n, o;
        if (("object" !== typeof t && (t = [t]), F(t)))
          for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
        else {
          const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            i = o.length;
          let s;
          for (n = 0; n < i; n++) (s = o[n]), e.call(null, t[s], s, t);
        }
      }
      function rt(t, e) {
        e = e.toLowerCase();
        const r = Object.keys(t);
        let n,
          o = r.length;
        while (o-- > 0) if (((n = r[o]), e === n.toLowerCase())) return n;
        return null;
      }
      const nt = (() =>
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global)(),
        ot = (t) => !I(t) && t !== nt;
      function it() {
        const { caseless: t } = (ot(this) && this) || {},
          e = {},
          r = (r, n) => {
            const o = (t && rt(e, n)) || n;
            J(e[o]) && J(r)
              ? (e[o] = it(e[o], r))
              : J(r)
              ? (e[o] = it({}, r))
              : F(r)
              ? (e[o] = r.slice())
              : (e[o] = r);
          };
        for (let n = 0, o = arguments.length; n < o; n++)
          arguments[n] && et(arguments[n], r);
        return e;
      }
      const st = (t, e, r, { allOwnKeys: n } = {}) => (
          et(
            e,
            (e, n) => {
              r && q(e) ? (t[n] = N(e, r)) : (t[n] = e);
            },
            { allOwnKeys: n },
          ),
          t
        ),
        at = (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        ct = (t, e, r, n) => {
          (t.prototype = Object.create(e.prototype, n)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            r && Object.assign(t.prototype, r);
        },
        ut = (t, e, r, n) => {
          let o, i, s;
          const a = {};
          if (((e = e || {}), null == t)) return e;
          do {
            (o = Object.getOwnPropertyNames(t)), (i = o.length);
            while (i-- > 0)
              (s = o[i]),
                (n && !n(s, t, e)) || a[s] || ((e[s] = t[s]), (a[s] = !0));
            t = !1 !== r && j(t);
          } while (t && (!r || r(t, e)) && t !== Object.prototype);
          return e;
        },
        lt = (t, e, r) => {
          (t = String(t)),
            (void 0 === r || r > t.length) && (r = t.length),
            (r -= e.length);
          const n = t.indexOf(e, r);
          return -1 !== n && n === r;
        },
        ft = (t) => {
          if (!t) return null;
          if (F(t)) return t;
          let e = t.length;
          if (!H(e)) return null;
          const r = new Array(e);
          while (e-- > 0) r[e] = t[e];
          return r;
        },
        dt = (
          (t) => (e) =>
            t && e instanceof t
        )("undefined" !== typeof Uint8Array && j(Uint8Array)),
        pt = (t, e) => {
          const r = t && t[Symbol.iterator],
            n = r.call(t);
          let o;
          while ((o = n.next()) && !o.done) {
            const r = o.value;
            e.call(t, r[0], r[1]);
          }
        },
        ht = (t, e) => {
          let r;
          const n = [];
          while (null !== (r = t.exec(e))) n.push(r);
          return n;
        },
        mt = U("HTMLFormElement"),
        yt = (t) =>
          t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
            return e.toUpperCase() + r;
          }),
        gt = (
          ({ hasOwnProperty: t }) =>
          (e, r) =>
            t.call(e, r)
        )(Object.prototype),
        bt = U("RegExp"),
        At = (t, e) => {
          const r = Object.getOwnPropertyDescriptors(t),
            n = {};
          et(r, (r, o) => {
            let i;
            !1 !== (i = e(r, o, t)) && (n[o] = i || r);
          }),
            Object.defineProperties(t, n);
        },
        wt = (t) => {
          At(t, (e, r) => {
            if (q(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            const n = t[r];
            q(n) &&
              ((e.enumerable = !1),
              "writable" in e
                ? (e.writable = !1)
                : e.set ||
                  (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  }));
          });
        },
        Et = (t, e) => {
          const r = {},
            n = (t) => {
              t.forEach((t) => {
                r[t] = !0;
              });
            };
          return F(t) ? n(t) : n(String(t).split(e)), r;
        },
        vt = () => {},
        Rt = (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
        Ot = "abcdefghijklmnopqrstuvwxyz",
        St = "0123456789",
        Tt = { DIGIT: St, ALPHA: Ot, ALPHA_DIGIT: Ot + Ot.toUpperCase() + St },
        xt = (t = 16, e = Tt.ALPHA_DIGIT) => {
          let r = "";
          const { length: n } = e;
          while (t--) r += e[(Math.random() * n) | 0];
          return r;
        };
      function _t(t) {
        return !!(
          t &&
          q(t.append) &&
          "FormData" === t[Symbol.toStringTag] &&
          t[Symbol.iterator]
        );
      }
      const Ct = (t) => {
          const e = new Array(10),
            r = (t, n) => {
              if (V(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                  e[n] = t;
                  const o = F(t) ? [] : {};
                  return (
                    et(t, (t, e) => {
                      const i = r(t, n + 1);
                      !I(i) && (o[e] = i);
                    }),
                    (e[n] = void 0),
                    o
                  );
                }
              }
              return t;
            };
          return r(t, 0);
        },
        Nt = U("AsyncFunction"),
        Dt = (t) => t && (V(t) || q(t)) && q(t.then) && q(t.catch);
      var jt = {
        isArray: F,
        isArrayBuffer: B,
        isBuffer: L,
        isFormData: X,
        isArrayBufferView: M,
        isString: z,
        isNumber: H,
        isBoolean: W,
        isObject: V,
        isPlainObject: J,
        isUndefined: I,
        isDate: K,
        isFile: $,
        isBlob: Y,
        isRegExp: bt,
        isFunction: q,
        isStream: Z,
        isURLSearchParams: Q,
        isTypedArray: dt,
        isFileList: G,
        forEach: et,
        merge: it,
        extend: st,
        trim: tt,
        stripBOM: at,
        inherits: ct,
        toFlatObject: ut,
        kindOf: P,
        kindOfTest: U,
        endsWith: lt,
        toArray: ft,
        forEachEntry: pt,
        matchAll: ht,
        isHTMLForm: mt,
        hasOwnProperty: gt,
        hasOwnProp: gt,
        reduceDescriptors: At,
        freezeMethods: wt,
        toObjectSet: Et,
        toCamelCase: yt,
        noop: vt,
        toFiniteNumber: Rt,
        findKey: rt,
        global: nt,
        isContextDefined: ot,
        ALPHABET: Tt,
        generateString: xt,
        isSpecCompliantForm: _t,
        toJSONObject: Ct,
        isAsyncFn: Nt,
        isThenable: Dt,
      };
      r(541);
      function Pt(t, e, r, n, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = t),
          (this.name = "AxiosError"),
          e && (this.code = e),
          r && (this.config = r),
          n && (this.request = n),
          o && (this.response = o);
      }
      jt.inherits(Pt, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: jt.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const Ut = Pt.prototype,
        kt = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((t) => {
        kt[t] = { value: t };
      }),
        Object.defineProperties(Pt, kt),
        Object.defineProperty(Ut, "isAxiosError", { value: !0 }),
        (Pt.from = (t, e, r, n, o, i) => {
          const s = Object.create(Ut);
          return (
            jt.toFlatObject(
              t,
              s,
              function (t) {
                return t !== Error.prototype;
              },
              (t) => "isAxiosError" !== t,
            ),
            Pt.call(s, t.message, e, r, n, o),
            (s.cause = t),
            (s.name = t.name),
            i && Object.assign(s, i),
            s
          );
        });
      var Ft = Pt,
        It = null;
      function Lt(t) {
        return jt.isPlainObject(t) || jt.isArray(t);
      }
      function Bt(t) {
        return jt.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function Mt(t, e, r) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return (t = Bt(t)), !r && e ? "[" + t + "]" : t;
              })
              .join(r ? "." : "")
          : e;
      }
      function zt(t) {
        return jt.isArray(t) && !t.some(Lt);
      }
      const qt = jt.toFlatObject(jt, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      });
      function Ht(t, e, r) {
        if (!jt.isObject(t)) throw new TypeError("target must be an object");
        (e = e || new (It || FormData)()),
          (r = jt.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !jt.isUndefined(e[t]);
            },
          ));
        const n = r.metaTokens,
          o = r.visitor || l,
          i = r.dots,
          s = r.indexes,
          a = r.Blob || ("undefined" !== typeof Blob && Blob),
          c = a && jt.isSpecCompliantForm(e);
        if (!jt.isFunction(o))
          throw new TypeError("visitor must be a function");
        function u(t) {
          if (null === t) return "";
          if (jt.isDate(t)) return t.toISOString();
          if (!c && jt.isBlob(t))
            throw new Ft("Blob is not supported. Use a Buffer instead.");
          return jt.isArrayBuffer(t) || jt.isTypedArray(t)
            ? c && "function" === typeof Blob
              ? new Blob([t])
              : Buffer.from(t)
            : t;
        }
        function l(t, r, o) {
          let a = t;
          if (t && !o && "object" === typeof t)
            if (jt.endsWith(r, "{}"))
              (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
            else if (
              (jt.isArray(t) && zt(t)) ||
              ((jt.isFileList(t) || jt.endsWith(r, "[]")) &&
                (a = jt.toArray(t)))
            )
              return (
                (r = Bt(r)),
                a.forEach(function (t, n) {
                  !jt.isUndefined(t) &&
                    null !== t &&
                    e.append(
                      !0 === s ? Mt([r], n, i) : null === s ? r : r + "[]",
                      u(t),
                    );
                }),
                !1
              );
          return !!Lt(t) || (e.append(Mt(o, r, i), u(t)), !1);
        }
        const f = [],
          d = Object.assign(qt, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: Lt,
          });
        function p(t, r) {
          if (!jt.isUndefined(t)) {
            if (-1 !== f.indexOf(t))
              throw Error("Circular reference detected in " + r.join("."));
            f.push(t),
              jt.forEach(t, function (t, n) {
                const i =
                  !(jt.isUndefined(t) || null === t) &&
                  o.call(e, t, jt.isString(n) ? n.trim() : n, r, d);
                !0 === i && p(t, r ? r.concat(n) : [n]);
              }),
              f.pop();
          }
        }
        if (!jt.isObject(t)) throw new TypeError("data must be an object");
        return p(t), e;
      }
      var Vt = Ht;
      function Wt(t) {
        const e = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
          return e[t];
        });
      }
      function Jt(t, e) {
        (this._pairs = []), t && Vt(t, this, e);
      }
      const Kt = Jt.prototype;
      (Kt.append = function (t, e) {
        this._pairs.push([t, e]);
      }),
        (Kt.toString = function (t) {
          const e = t
            ? function (e) {
                return t.call(this, e, Wt);
              }
            : Wt;
          return this._pairs
            .map(function (t) {
              return e(t[0]) + "=" + e(t[1]);
            }, "")
            .join("&");
        });
      var $t = Jt;
      function Yt(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Gt(t, e, r) {
        if (!e) return t;
        const n = (r && r.encode) || Yt,
          o = r && r.serialize;
        let i;
        if (
          ((i = o
            ? o(e, r)
            : jt.isURLSearchParams(e)
            ? e.toString()
            : new $t(e, r).toString(n)),
          i)
        ) {
          const e = t.indexOf("#");
          -1 !== e && (t = t.slice(0, e)),
            (t += (-1 === t.indexOf("?") ? "?" : "&") + i);
        }
        return t;
      }
      class Zt {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          jt.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      }
      var Xt = Zt,
        Qt = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        te =
          (r(6229),
          r(7330),
          r(2062),
          "undefined" !== typeof URLSearchParams ? URLSearchParams : $t),
        ee = "undefined" !== typeof FormData ? FormData : null,
        re = "undefined" !== typeof Blob ? Blob : null;
      const ne = (() => {
          let t;
          return (
            ("undefined" === typeof navigator ||
              ("ReactNative" !== (t = navigator.product) &&
                "NativeScript" !== t &&
                "NS" !== t)) &&
            "undefined" !== typeof window &&
            "undefined" !== typeof document
          );
        })(),
        oe = (() =>
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts)();
      var ie = {
        isBrowser: !0,
        classes: { URLSearchParams: te, FormData: ee, Blob: re },
        isStandardBrowserEnv: ne,
        isStandardBrowserWebWorkerEnv: oe,
        protocols: ["http", "https", "file", "blob", "url", "data"],
      };
      function se(t, e) {
        return Vt(
          t,
          new ie.classes.URLSearchParams(),
          Object.assign(
            {
              visitor: function (t, e, r, n) {
                return ie.isNode && jt.isBuffer(t)
                  ? (this.append(e, t.toString("base64")), !1)
                  : n.defaultVisitor.apply(this, arguments);
              },
            },
            e,
          ),
        );
      }
      function ae(t) {
        return jt
          .matchAll(/\w+|\[(\w*)]/g, t)
          .map((t) => ("[]" === t[0] ? "" : t[1] || t[0]));
      }
      function ce(t) {
        const e = {},
          r = Object.keys(t);
        let n;
        const o = r.length;
        let i;
        for (n = 0; n < o; n++) (i = r[n]), (e[i] = t[i]);
        return e;
      }
      function ue(t) {
        function e(t, r, n, o) {
          let i = t[o++];
          const s = Number.isFinite(+i),
            a = o >= t.length;
          if (((i = !i && jt.isArray(n) ? n.length : i), a))
            return jt.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !s;
          (n[i] && jt.isObject(n[i])) || (n[i] = []);
          const c = e(t, r, n[i], o);
          return c && jt.isArray(n[i]) && (n[i] = ce(n[i])), !s;
        }
        if (jt.isFormData(t) && jt.isFunction(t.entries)) {
          const r = {};
          return (
            jt.forEachEntry(t, (t, n) => {
              e(ae(t), n, r, 0);
            }),
            r
          );
        }
        return null;
      }
      var le = ue;
      function fe(t, e, r) {
        if (jt.isString(t))
          try {
            return (e || JSON.parse)(t), jt.trim(t);
          } catch (n) {
            if ("SyntaxError" !== n.name) throw n;
          }
        return (r || JSON.stringify)(t);
      }
      const de = {
        transitional: Qt,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (t, e) {
            const r = e.getContentType() || "",
              n = r.indexOf("application/json") > -1,
              o = jt.isObject(t);
            o && jt.isHTMLForm(t) && (t = new FormData(t));
            const i = jt.isFormData(t);
            if (i) return n && n ? JSON.stringify(le(t)) : t;
            if (
              jt.isArrayBuffer(t) ||
              jt.isBuffer(t) ||
              jt.isStream(t) ||
              jt.isFile(t) ||
              jt.isBlob(t)
            )
              return t;
            if (jt.isArrayBufferView(t)) return t.buffer;
            if (jt.isURLSearchParams(t))
              return (
                e.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                t.toString()
              );
            let s;
            if (o) {
              if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return se(t, this.formSerializer).toString();
              if (
                (s = jt.isFileList(t)) ||
                r.indexOf("multipart/form-data") > -1
              ) {
                const e = this.env && this.env.FormData;
                return Vt(
                  s ? { "files[]": t } : t,
                  e && new e(),
                  this.formSerializer,
                );
              }
            }
            return o || n
              ? (e.setContentType("application/json", !1), fe(t))
              : t;
          },
        ],
        transformResponse: [
          function (t) {
            const e = this.transitional || de.transitional,
              r = e && e.forcedJSONParsing,
              n = "json" === this.responseType;
            if (t && jt.isString(t) && ((r && !this.responseType) || n)) {
              const r = e && e.silentJSONParsing,
                i = !r && n;
              try {
                return JSON.parse(t);
              } catch (o) {
                if (i) {
                  if ("SyntaxError" === o.name)
                    throw Ft.from(
                      o,
                      Ft.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response,
                    );
                  throw o;
                }
              }
            }
            return t;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: ie.classes.FormData, Blob: ie.classes.Blob },
        validateStatus: function (t) {
          return t >= 200 && t < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      jt.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
        de.headers[t] = {};
      });
      var pe = de;
      const he = jt.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var me = (t) => {
        const e = {};
        let r, n, o;
        return (
          t &&
            t.split("\n").forEach(function (t) {
              (o = t.indexOf(":")),
                (r = t.substring(0, o).trim().toLowerCase()),
                (n = t.substring(o + 1).trim()),
                !r ||
                  (e[r] && he[r]) ||
                  ("set-cookie" === r
                    ? e[r]
                      ? e[r].push(n)
                      : (e[r] = [n])
                    : (e[r] = e[r] ? e[r] + ", " + n : n));
            }),
          e
        );
      };
      const ye = Symbol("internals");
      function ge(t) {
        return t && String(t).trim().toLowerCase();
      }
      function be(t) {
        return !1 === t || null == t
          ? t
          : jt.isArray(t)
          ? t.map(be)
          : String(t);
      }
      function Ae(t) {
        const e = Object.create(null),
          r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
        let n;
        while ((n = r.exec(t))) e[n[1]] = n[2];
        return e;
      }
      const we = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
      function Ee(t, e, r, n, o) {
        return jt.isFunction(n)
          ? n.call(this, e, r)
          : (o && (e = r),
            jt.isString(e)
              ? jt.isString(n)
                ? -1 !== e.indexOf(n)
                : jt.isRegExp(n)
                ? n.test(e)
                : void 0
              : void 0);
      }
      function ve(t) {
        return t
          .trim()
          .toLowerCase()
          .replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
      }
      function Re(t, e) {
        const r = jt.toCamelCase(" " + e);
        ["get", "set", "has"].forEach((n) => {
          Object.defineProperty(t, n + r, {
            value: function (t, r, o) {
              return this[n].call(this, e, t, r, o);
            },
            configurable: !0,
          });
        });
      }
      class Oe {
        constructor(t) {
          t && this.set(t);
        }
        set(t, e, r) {
          const n = this;
          function o(t, e, r) {
            const o = ge(e);
            if (!o) throw new Error("header name must be a non-empty string");
            const i = jt.findKey(n, o);
            (!i ||
              void 0 === n[i] ||
              !0 === r ||
              (void 0 === r && !1 !== n[i])) &&
              (n[i || e] = be(t));
          }
          const i = (t, e) => jt.forEach(t, (t, r) => o(t, r, e));
          return (
            jt.isPlainObject(t) || t instanceof this.constructor
              ? i(t, e)
              : jt.isString(t) && (t = t.trim()) && !we(t)
              ? i(me(t), e)
              : null != t && o(e, t, r),
            this
          );
        }
        get(t, e) {
          if (((t = ge(t)), t)) {
            const r = jt.findKey(this, t);
            if (r) {
              const t = this[r];
              if (!e) return t;
              if (!0 === e) return Ae(t);
              if (jt.isFunction(e)) return e.call(this, t, r);
              if (jt.isRegExp(e)) return e.exec(t);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(t, e) {
          if (((t = ge(t)), t)) {
            const r = jt.findKey(this, t);
            return !(
              !r ||
              void 0 === this[r] ||
              (e && !Ee(this, this[r], r, e))
            );
          }
          return !1;
        }
        delete(t, e) {
          const r = this;
          let n = !1;
          function o(t) {
            if (((t = ge(t)), t)) {
              const o = jt.findKey(r, t);
              !o || (e && !Ee(r, r[o], o, e)) || (delete r[o], (n = !0));
            }
          }
          return jt.isArray(t) ? t.forEach(o) : o(t), n;
        }
        clear(t) {
          const e = Object.keys(this);
          let r = e.length,
            n = !1;
          while (r--) {
            const o = e[r];
            (t && !Ee(this, this[o], o, t, !0)) || (delete this[o], (n = !0));
          }
          return n;
        }
        normalize(t) {
          const e = this,
            r = {};
          return (
            jt.forEach(this, (n, o) => {
              const i = jt.findKey(r, o);
              if (i) return (e[i] = be(n)), void delete e[o];
              const s = t ? ve(o) : String(o).trim();
              s !== o && delete e[o], (e[s] = be(n)), (r[s] = !0);
            }),
            this
          );
        }
        concat(...t) {
          return this.constructor.concat(this, ...t);
        }
        toJSON(t) {
          const e = Object.create(null);
          return (
            jt.forEach(this, (r, n) => {
              null != r &&
                !1 !== r &&
                (e[n] = t && jt.isArray(r) ? r.join(", ") : r);
            }),
            e
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([t, e]) => t + ": " + e)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(t) {
          return t instanceof this ? t : new this(t);
        }
        static concat(t, ...e) {
          const r = new this(t);
          return e.forEach((t) => r.set(t)), r;
        }
        static accessor(t) {
          const e = (this[ye] = this[ye] = { accessors: {} }),
            r = e.accessors,
            n = this.prototype;
          function o(t) {
            const e = ge(t);
            r[e] || (Re(n, t), (r[e] = !0));
          }
          return jt.isArray(t) ? t.forEach(o) : o(t), this;
        }
      }
      Oe.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        jt.reduceDescriptors(Oe.prototype, ({ value: t }, e) => {
          let r = e[0].toUpperCase() + e.slice(1);
          return {
            get: () => t,
            set(t) {
              this[r] = t;
            },
          };
        }),
        jt.freezeMethods(Oe);
      var Se = Oe;
      function Te(t, e) {
        const r = this || pe,
          n = e || r,
          o = Se.from(n.headers);
        let i = n.data;
        return (
          jt.forEach(t, function (t) {
            i = t.call(r, i, o.normalize(), e ? e.status : void 0);
          }),
          o.normalize(),
          i
        );
      }
      function xe(t) {
        return !(!t || !t.__CANCEL__);
      }
      function _e(t, e, r) {
        Ft.call(this, null == t ? "canceled" : t, Ft.ERR_CANCELED, e, r),
          (this.name = "CanceledError");
      }
      jt.inherits(_e, Ft, { __CANCEL__: !0 });
      var Ce = _e;
      r(2801);
      function Ne(t, e, r) {
        const n = r.config.validateStatus;
        r.status && n && !n(r.status)
          ? e(
              new Ft(
                "Request failed with status code " + r.status,
                [Ft.ERR_BAD_REQUEST, Ft.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r,
              ),
            )
          : t(r);
      }
      var De = ie.isStandardBrowserEnv
        ? (function () {
            return {
              write: function (t, e, r, n, o, i) {
                const s = [];
                s.push(t + "=" + encodeURIComponent(e)),
                  jt.isNumber(r) &&
                    s.push("expires=" + new Date(r).toGMTString()),
                  jt.isString(n) && s.push("path=" + n),
                  jt.isString(o) && s.push("domain=" + o),
                  !0 === i && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (t) {
                const e = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
                );
                return e ? decodeURIComponent(e[3]) : null;
              },
              remove: function (t) {
                this.write(t, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
      function je(t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
      }
      function Pe(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
      }
      function Ue(t, e) {
        return t && !je(e) ? Pe(t, e) : e;
      }
      var ke = ie.isStandardBrowserEnv
        ? (function () {
            const t = /(msie|trident)/i.test(navigator.userAgent),
              e = document.createElement("a");
            let r;
            function n(r) {
              let n = r;
              return (
                t && (e.setAttribute("href", n), (n = e.href)),
                e.setAttribute("href", n),
                {
                  href: e.href,
                  protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                  host: e.host,
                  search: e.search ? e.search.replace(/^\?/, "") : "",
                  hash: e.hash ? e.hash.replace(/^#/, "") : "",
                  hostname: e.hostname,
                  port: e.port,
                  pathname:
                    "/" === e.pathname.charAt(0)
                      ? e.pathname
                      : "/" + e.pathname,
                }
              );
            }
            return (
              (r = n(window.location.href)),
              function (t) {
                const e = jt.isString(t) ? n(t) : t;
                return e.protocol === r.protocol && e.host === r.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
      function Fe(t) {
        const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (e && e[1]) || "";
      }
      function Ie(t, e) {
        t = t || 10;
        const r = new Array(t),
          n = new Array(t);
        let o,
          i = 0,
          s = 0;
        return (
          (e = void 0 !== e ? e : 1e3),
          function (a) {
            const c = Date.now(),
              u = n[s];
            o || (o = c), (r[i] = a), (n[i] = c);
            let l = s,
              f = 0;
            while (l !== i) (f += r[l++]), (l %= t);
            if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), c - o < e))
              return;
            const d = u && c - u;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      }
      var Le = Ie;
      function Be(t, e) {
        let r = 0;
        const n = Le(50, 250);
        return (o) => {
          const i = o.loaded,
            s = o.lengthComputable ? o.total : void 0,
            a = i - r,
            c = n(a),
            u = i <= s;
          r = i;
          const l = {
            loaded: i,
            total: s,
            progress: s ? i / s : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && s && u ? (s - i) / c : void 0,
            event: o,
          };
          (l[e ? "download" : "upload"] = !0), t(l);
        };
      }
      const Me = "undefined" !== typeof XMLHttpRequest;
      var ze =
        Me &&
        function (t) {
          return new Promise(function (e, r) {
            let n = t.data;
            const o = Se.from(t.headers).normalize(),
              i = t.responseType;
            let s, a;
            function c() {
              t.cancelToken && t.cancelToken.unsubscribe(s),
                t.signal && t.signal.removeEventListener("abort", s);
            }
            jt.isFormData(n) &&
              (ie.isStandardBrowserEnv || ie.isStandardBrowserWebWorkerEnv
                ? o.setContentType(!1)
                : o.getContentType(/^\s*multipart\/form-data/)
                ? jt.isString((a = o.getContentType())) &&
                  o.setContentType(
                    a.replace(/^\s*(multipart\/form-data);+/, "$1"),
                  )
                : o.setContentType("multipart/form-data"));
            let u = new XMLHttpRequest();
            if (t.auth) {
              const e = t.auth.username || "",
                r = t.auth.password
                  ? unescape(encodeURIComponent(t.auth.password))
                  : "";
              o.set("Authorization", "Basic " + btoa(e + ":" + r));
            }
            const l = Ue(t.baseURL, t.url);
            function f() {
              if (!u) return;
              const n = Se.from(
                  "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
                ),
                o =
                  i && "text" !== i && "json" !== i
                    ? u.response
                    : u.responseText,
                s = {
                  data: o,
                  status: u.status,
                  statusText: u.statusText,
                  headers: n,
                  config: t,
                  request: u,
                };
              Ne(
                function (t) {
                  e(t), c();
                },
                function (t) {
                  r(t), c();
                },
                s,
              ),
                (u = null);
            }
            if (
              (u.open(
                t.method.toUpperCase(),
                Gt(l, t.params, t.paramsSerializer),
                !0,
              ),
              (u.timeout = t.timeout),
              "onloadend" in u
                ? (u.onloadend = f)
                : (u.onreadystatechange = function () {
                    u &&
                      4 === u.readyState &&
                      (0 !== u.status ||
                        (u.responseURL &&
                          0 === u.responseURL.indexOf("file:"))) &&
                      setTimeout(f);
                  }),
              (u.onabort = function () {
                u &&
                  (r(new Ft("Request aborted", Ft.ECONNABORTED, t, u)),
                  (u = null));
              }),
              (u.onerror = function () {
                r(new Ft("Network Error", Ft.ERR_NETWORK, t, u)), (u = null);
              }),
              (u.ontimeout = function () {
                let e = t.timeout
                  ? "timeout of " + t.timeout + "ms exceeded"
                  : "timeout exceeded";
                const n = t.transitional || Qt;
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                  r(
                    new Ft(
                      e,
                      n.clarifyTimeoutError ? Ft.ETIMEDOUT : Ft.ECONNABORTED,
                      t,
                      u,
                    ),
                  ),
                  (u = null);
              }),
              ie.isStandardBrowserEnv)
            ) {
              const e =
                (t.withCredentials || ke(l)) &&
                t.xsrfCookieName &&
                De.read(t.xsrfCookieName);
              e && o.set(t.xsrfHeaderName, e);
            }
            void 0 === n && o.setContentType(null),
              "setRequestHeader" in u &&
                jt.forEach(o.toJSON(), function (t, e) {
                  u.setRequestHeader(e, t);
                }),
              jt.isUndefined(t.withCredentials) ||
                (u.withCredentials = !!t.withCredentials),
              i && "json" !== i && (u.responseType = t.responseType),
              "function" === typeof t.onDownloadProgress &&
                u.addEventListener("progress", Be(t.onDownloadProgress, !0)),
              "function" === typeof t.onUploadProgress &&
                u.upload &&
                u.upload.addEventListener("progress", Be(t.onUploadProgress)),
              (t.cancelToken || t.signal) &&
                ((s = (e) => {
                  u &&
                    (r(!e || e.type ? new Ce(null, t, u) : e),
                    u.abort(),
                    (u = null));
                }),
                t.cancelToken && t.cancelToken.subscribe(s),
                t.signal &&
                  (t.signal.aborted
                    ? s()
                    : t.signal.addEventListener("abort", s)));
            const d = Fe(l);
            d && -1 === ie.protocols.indexOf(d)
              ? r(
                  new Ft(
                    "Unsupported protocol " + d + ":",
                    Ft.ERR_BAD_REQUEST,
                    t,
                  ),
                )
              : u.send(n || null);
          });
        };
      const qe = { http: It, xhr: ze };
      jt.forEach(qe, (t, e) => {
        if (t) {
          try {
            Object.defineProperty(t, "name", { value: e });
          } catch (r) {}
          Object.defineProperty(t, "adapterName", { value: e });
        }
      });
      const He = (t) => `- ${t}`,
        Ve = (t) => jt.isFunction(t) || null === t || !1 === t;
      var We = {
        getAdapter: (t) => {
          t = jt.isArray(t) ? t : [t];
          const { length: e } = t;
          let r, n;
          const o = {};
          for (let i = 0; i < e; i++) {
            let e;
            if (
              ((r = t[i]),
              (n = r),
              !Ve(r) && ((n = qe[(e = String(r)).toLowerCase()]), void 0 === n))
            )
              throw new Ft(`Unknown adapter '${e}'`);
            if (n) break;
            o[e || "#" + i] = n;
          }
          if (!n) {
            const t = Object.entries(o).map(
              ([t, e]) =>
                `adapter ${t} ` +
                (!1 === e
                  ? "is not supported by the environment"
                  : "is not available in the build"),
            );
            let r = e
              ? t.length > 1
                ? "since :\n" + t.map(He).join("\n")
                : " " + He(t[0])
              : "as no adapter specified";
            throw new Ft(
              "There is no suitable adapter to dispatch the request " + r,
              "ERR_NOT_SUPPORT",
            );
          }
          return n;
        },
        adapters: qe,
      };
      function Je(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new Ce(null, t);
      }
      function Ke(t) {
        Je(t),
          (t.headers = Se.from(t.headers)),
          (t.data = Te.call(t, t.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(t.method) &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1);
        const e = We.getAdapter(t.adapter || pe.adapter);
        return e(t).then(
          function (e) {
            return (
              Je(t),
              (e.data = Te.call(t, t.transformResponse, e)),
              (e.headers = Se.from(e.headers)),
              e
            );
          },
          function (e) {
            return (
              xe(e) ||
                (Je(t),
                e &&
                  e.response &&
                  ((e.response.data = Te.call(
                    t,
                    t.transformResponse,
                    e.response,
                  )),
                  (e.response.headers = Se.from(e.response.headers)))),
              Promise.reject(e)
            );
          },
        );
      }
      const $e = (t) => (t instanceof Se ? t.toJSON() : t);
      function Ye(t, e) {
        e = e || {};
        const r = {};
        function n(t, e, r) {
          return jt.isPlainObject(t) && jt.isPlainObject(e)
            ? jt.merge.call({ caseless: r }, t, e)
            : jt.isPlainObject(e)
            ? jt.merge({}, e)
            : jt.isArray(e)
            ? e.slice()
            : e;
        }
        function o(t, e, r) {
          return jt.isUndefined(e)
            ? jt.isUndefined(t)
              ? void 0
              : n(void 0, t, r)
            : n(t, e, r);
        }
        function i(t, e) {
          if (!jt.isUndefined(e)) return n(void 0, e);
        }
        function s(t, e) {
          return jt.isUndefined(e)
            ? jt.isUndefined(t)
              ? void 0
              : n(void 0, t)
            : n(void 0, e);
        }
        function a(r, o, i) {
          return i in e ? n(r, o) : i in t ? n(void 0, r) : void 0;
        }
        const c = {
          url: i,
          method: i,
          data: i,
          baseURL: s,
          transformRequest: s,
          transformResponse: s,
          paramsSerializer: s,
          timeout: s,
          timeoutMessage: s,
          withCredentials: s,
          adapter: s,
          responseType: s,
          xsrfCookieName: s,
          xsrfHeaderName: s,
          onUploadProgress: s,
          onDownloadProgress: s,
          decompress: s,
          maxContentLength: s,
          maxBodyLength: s,
          beforeRedirect: s,
          transport: s,
          httpAgent: s,
          httpsAgent: s,
          cancelToken: s,
          socketPath: s,
          responseEncoding: s,
          validateStatus: a,
          headers: (t, e) => o($e(t), $e(e), !0),
        };
        return (
          jt.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
            const i = c[n] || o,
              s = i(t[n], e[n], n);
            (jt.isUndefined(s) && i !== a) || (r[n] = s);
          }),
          r
        );
      }
      const Ge = "1.5.1",
        Ze = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, e) => {
          Ze[t] = function (r) {
            return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
          };
        },
      );
      const Xe = {};
      function Qe(t, e, r) {
        if ("object" !== typeof t)
          throw new Ft("options must be an object", Ft.ERR_BAD_OPTION_VALUE);
        const n = Object.keys(t);
        let o = n.length;
        while (o-- > 0) {
          const i = n[o],
            s = e[i];
          if (s) {
            const e = t[i],
              r = void 0 === e || s(e, i, t);
            if (!0 !== r)
              throw new Ft(
                "option " + i + " must be " + r,
                Ft.ERR_BAD_OPTION_VALUE,
              );
          } else if (!0 !== r)
            throw new Ft("Unknown option " + i, Ft.ERR_BAD_OPTION);
        }
      }
      Ze.transitional = function (t, e, r) {
        function n(t, e) {
          return (
            "[Axios v" +
            Ge +
            "] Transitional option '" +
            t +
            "'" +
            e +
            (r ? ". " + r : "")
          );
        }
        return (r, o, i) => {
          if (!1 === t)
            throw new Ft(
              n(o, " has been removed" + (e ? " in " + e : "")),
              Ft.ERR_DEPRECATED,
            );
          return (
            e &&
              !Xe[o] &&
              ((Xe[o] = !0),
              console.warn(
                n(
                  o,
                  " has been deprecated since v" +
                    e +
                    " and will be removed in the near future",
                ),
              )),
            !t || t(r, o, i)
          );
        };
      };
      var tr = { assertOptions: Qe, validators: Ze };
      const er = tr.validators;
      class rr {
        constructor(t) {
          (this.defaults = t),
            (this.interceptors = { request: new Xt(), response: new Xt() });
        }
        request(t, e) {
          "string" === typeof t ? ((e = e || {}), (e.url = t)) : (e = t || {}),
            (e = Ye(this.defaults, e));
          const { transitional: r, paramsSerializer: n, headers: o } = e;
          void 0 !== r &&
            tr.assertOptions(
              r,
              {
                silentJSONParsing: er.transitional(er.boolean),
                forcedJSONParsing: er.transitional(er.boolean),
                clarifyTimeoutError: er.transitional(er.boolean),
              },
              !1,
            ),
            null != n &&
              (jt.isFunction(n)
                ? (e.paramsSerializer = { serialize: n })
                : tr.assertOptions(
                    n,
                    { encode: er.function, serialize: er.function },
                    !0,
                  )),
            (e.method = (
              e.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let i = o && jt.merge(o.common, o[e.method]);
          o &&
            jt.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete o[t];
              },
            ),
            (e.headers = Se.concat(i, o));
          const s = [];
          let a = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" === typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((a = a && t.synchronous), s.unshift(t.fulfilled, t.rejected));
          });
          const c = [];
          let u;
          this.interceptors.response.forEach(function (t) {
            c.push(t.fulfilled, t.rejected);
          });
          let l,
            f = 0;
          if (!a) {
            const t = [Ke.bind(this), void 0];
            t.unshift.apply(t, s),
              t.push.apply(t, c),
              (l = t.length),
              (u = Promise.resolve(e));
            while (f < l) u = u.then(t[f++], t[f++]);
            return u;
          }
          l = s.length;
          let d = e;
          f = 0;
          while (f < l) {
            const t = s[f++],
              e = s[f++];
            try {
              d = t(d);
            } catch (p) {
              e.call(this, p);
              break;
            }
          }
          try {
            u = Ke.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          (f = 0), (l = c.length);
          while (f < l) u = u.then(c[f++], c[f++]);
          return u;
        }
        getUri(t) {
          t = Ye(this.defaults, t);
          const e = Ue(t.baseURL, t.url);
          return Gt(e, t.params, t.paramsSerializer);
        }
      }
      jt.forEach(["delete", "get", "head", "options"], function (t) {
        rr.prototype[t] = function (e, r) {
          return this.request(
            Ye(r || {}, { method: t, url: e, data: (r || {}).data }),
          );
        };
      }),
        jt.forEach(["post", "put", "patch"], function (t) {
          function e(e) {
            return function (r, n, o) {
              return this.request(
                Ye(o || {}, {
                  method: t,
                  headers: e ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          (rr.prototype[t] = e()), (rr.prototype[t + "Form"] = e(!0));
        });
      var nr = rr;
      class or {
        constructor(t) {
          if ("function" !== typeof t)
            throw new TypeError("executor must be a function.");
          let e;
          this.promise = new Promise(function (t) {
            e = t;
          });
          const r = this;
          this.promise.then((t) => {
            if (!r._listeners) return;
            let e = r._listeners.length;
            while (e-- > 0) r._listeners[e](t);
            r._listeners = null;
          }),
            (this.promise.then = (t) => {
              let e;
              const n = new Promise((t) => {
                r.subscribe(t), (e = t);
              }).then(t);
              return (
                (n.cancel = function () {
                  r.unsubscribe(e);
                }),
                n
              );
            }),
            t(function (t, n, o) {
              r.reason || ((r.reason = new Ce(t, n, o)), e(r.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(t) {
          this.reason
            ? t(this.reason)
            : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
        }
        unsubscribe(t) {
          if (!this._listeners) return;
          const e = this._listeners.indexOf(t);
          -1 !== e && this._listeners.splice(e, 1);
        }
        static source() {
          let t;
          const e = new or(function (e) {
            t = e;
          });
          return { token: e, cancel: t };
        }
      }
      var ir = or;
      function sr(t) {
        return function (e) {
          return t.apply(null, e);
        };
      }
      function ar(t) {
        return jt.isObject(t) && !0 === t.isAxiosError;
      }
      const cr = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(cr).forEach(([t, e]) => {
        cr[e] = t;
      });
      var ur = cr;
      function lr(t) {
        const e = new nr(t),
          r = N(nr.prototype.request, e);
        return (
          jt.extend(r, nr.prototype, e, { allOwnKeys: !0 }),
          jt.extend(r, e, null, { allOwnKeys: !0 }),
          (r.create = function (e) {
            return lr(Ye(t, e));
          }),
          r
        );
      }
      const fr = lr(pe);
      (fr.Axios = nr),
        (fr.CanceledError = Ce),
        (fr.CancelToken = ir),
        (fr.isCancel = xe),
        (fr.VERSION = Ge),
        (fr.toFormData = Vt),
        (fr.AxiosError = Ft),
        (fr.Cancel = fr.CanceledError),
        (fr.all = function (t) {
          return Promise.all(t);
        }),
        (fr.spread = sr),
        (fr.isAxiosError = ar),
        (fr.mergeConfig = Ye),
        (fr.AxiosHeaders = Se),
        (fr.formToJSON = (t) => le(jt.isHTMLForm(t) ? new FormData(t) : t)),
        (fr.getAdapter = We.getAdapter),
        (fr.HttpStatusCode = ur),
        (fr.default = fr);
      var dr = fr,
        pr = {
          components: { counter: C },
          data: () => {
            const t = (new Date().getFullYear() - 2020).toString();
            return {
              experienceTitle: "Жилийн туршлага",
              githubTitle: "Нийт ажилласан төсөл",
              feedbackTitle: "Эерэг сэтгэгдэл",
              year: t,
              githubUsername: "btseee",
              totalRepoCount: 0,
            };
          },
          mounted() {
            this.fetchTotalRepoCount();
          },
          methods: {
            fetchTotalRepoCount() {
              const t = `https://api.github.com/users/${this.githubUsername}`;
              dr.get(t)
                .then((t) => {
                  200 === t.status && "number" === typeof t.data.public_repos
                    ? (this.totalRepoCount = t.data.public_repos)
                    : console.error(
                        "Unexpected data type for public_repos:",
                        typeof t.data.public_repos,
                      );
                })
                .catch((t) => {
                  console.error("Failed to fetch data:", t);
                });
            },
          },
        };
      const hr = (0, h.Z)(pr, [["render", S]]);
      var mr = hr;
      const yr = { class: "mt-10 sm:mt-20" },
        gr = {
          class:
            "font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light",
        },
        br = { class: "grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2" };
      function Ar(t, e, r, o, i, s) {
        const c = (0, n.up)("AboutClientSingle");
        return (
          (0, n.wg)(),
          (0, n.iD)("div", yr, [
            (0, n._)("p", gr, (0, a.zw)(t.clientsHeading), 1),
            (0, n._)("div", br, [
              ((0, n.wg)(!0),
              (0, n.iD)(
                n.HY,
                null,
                (0, n.Ko)(
                  t.clients,
                  (t) => (
                    (0, n.wg)(),
                    (0, n.j4)(c, { key: t.id, client: t }, null, 8, ["client"])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      }
      const wr = ["src", "alt"];
      function Er(t, e, r, o, i, s) {
        return (
          (0, n.wg)(),
          (0, n.iD)("div", null, [
            (0, n._)(
              "img",
              {
                src: r.client.img,
                alt: r.client.title,
                class:
                  "w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer dark:bg-secondary-light",
              },
              null,
              8,
              wr,
            ),
          ])
        );
      }
      var vr = { props: ["client"] };
      const Rr = (0, h.Z)(vr, [["render", Er]]);
      var Or = Rr,
        Sr = {
          components: { AboutClientSingle: Or },
          data: () => ({
            clientsHeading: "Хамтран ажилласан компаниуд",
            clients: [
              { id: 1, img: r(7519) },
              { id: 2, title: "Geru", img: r(4873) },
              { id: 3, title: "Mongolian Properties", img: r(2589) },
              { id: 4, title: "Monlogistics", img: r(6997) },
              { id: 5, title: "SendMN", img: r(3285) },
              { id: 6, title: "Xacbank", img: r(4066) },
              { id: 7, title: "Octasys", img: r(5727) },
              { id: 7, title: "Хуримын ордон", img: r(7095) },
              { id: 7, title: "Хуримын ордон", img: r(6378) },
              { id: 7, title: "Хуримын ордон", img: r(8313) },
            ],
          }),
        };
      const Tr = (0, h.Z)(Sr, [["render", Ar]]);
      var xr = Tr,
        _r = r(8164),
        Cr = r.n(_r),
        Nr = {
          name: "About",
          components: { AboutMe: y, AboutCounter: mr, AboutClients: xr },
          data: () => ({}),
          mounted() {
            Cr().replace();
          },
          updated() {
            Cr().replace();
          },
          methods: {},
        };
      const Dr = (0, h.Z)(Nr, [["render", s]]);
      var jr = Dr;
    },
    7519: function (t, e, r) {
      t.exports = r.p + "img/1.f42a60ce.png";
    },
    8313: function (t, e, r) {
      t.exports = r.p + "img/10.7c1dec62.png";
    },
    4873: function (t, e, r) {
      t.exports = r.p + "img/2.aa6f1eb9.png";
    },
    2589: function (t, e, r) {
      t.exports = r.p + "img/3.af52c536.png";
    },
    6997: function (t, e, r) {
      t.exports = r.p + "img/4.3eaed3c3.png";
    },
    3285: function (t, e, r) {
      t.exports = r.p + "img/5.4df221f6.png";
    },
    4066: function (t, e, r) {
      t.exports = r.p + "img/6.531cc925.png";
    },
    5727: function (t, e, r) {
      t.exports = r.p + "img/7.01ced3cd.png";
    },
    7095: function (t, e, r) {
      t.exports = r.p + "img/8.63d01eb3.png";
    },
    6378: function (t, e, r) {
      t.exports = r.p + "img/9.9adf1160.png";
    },
  },
]);
//# sourceMappingURL=about.8b5b33e9.js.map
